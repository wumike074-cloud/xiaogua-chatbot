# Data Layer Rewrite Design

**Date:** 2026-06-22

## Motivation

Current architecture stores all pending devices as a single JSON blob in one Supabase row (`batch_state`). Every operation reads and writes the entire dataset. Problems:

- No atomic per-device updates — full read/write race on every change
- Multi-user collisions cannot be detected or prevented
- Browser cache recovery logic is fragile and complex (terminalId, cookie, localStorage, cloud fallback)
- Test records mixed with pending state
- Clearing browsing data causes data loss or incorrect recovery

## Goals

1. Cloud-first — Supabase is the single source of truth, no browser-side persistence
2. Shared pool — all team members see the same data, no terminal isolation
3. Multi-user safety — optimistic locking prevents two people testing the same device simultaneously
4. Stability — test records are permanent, never lost; pending list auto-clears daily
5. Simplicity — no localStorage recovery, no cookie sync, no terminalId

## Schema Design

### `pending_devices` (one row per device)

| Column | Type | Notes |
|---|---|---|
| `sn` | text (PK) | Device serial number |
| `model` | text | Product model |
| `order_no` | text | Order number |
| `country` | text | Shipping country |
| `tested` | boolean | Default false |
| `locked_by` | text, nullable | Who is currently testing |
| `locked_at` | timestamptz, nullable | When lock was acquired (auto-expires 5min) |
| `device_data` | jsonb | Firmware, IMEI, remarks, etc. |
| `created_at` | timestamptz | When added to pending list |
| `updated_at` | timestamptz | Last update |

### `test_records` (one row per device, overwrite on retest)

| Column | Type | Notes |
|---|---|---|
| `sn` | text (PK) | Device serial number |
| `model` | text | Product model |
| `order_no` | text | Order number |
| `country` | text | Shipping country |
| `tester` | text | Who tested |
| `firmware` | text | Firmware version |
| `result` | text | Pass / fail |
| `test_data` | jsonb | Full test step results |
| `tested_at` | timestamptz | When test completed |

## Read/Write Logic

### Read (page load)

```
Page load → fetch pending_devices (WHERE created_at >= today)
         → fetch test_records
         → render UI
```

No localStorage, no cookie, no recovery logic. Clear browsing data → refresh → always pull from cloud.

### Write (any mutation)

```
User action → optimistic UI update
           → Supabase upsert by SN (primary key)
           → success → keep UI
           → failure (e.g. PK conflict) → rollback UI + alert
```

- Batch import: upsert multiple rows (ON CONFLICT sn DO UPDATE)
- Mark tested: UPDATE pending_devices SET tested=true + UPSERT test_records
- Delete device: DELETE FROM pending_devices WHERE sn = $sn

### Daily Cleanup

Application-level soft-clean: `SELECT ... WHERE created_at >= today()`. Old rows are invisible. A periodic script physically deletes old rows (manual or cron).

## Optimistic Locking

```
User clicks "Start Test" on a device:
  1. UPDATE pending_devices
     SET locked_by = $user, locked_at = now()
     WHERE sn = $sn
       AND (locked_by IS NULL OR locked_at < now() - interval '5 min')
  2. affected_rows = 0 → locked by someone else → show warning
  3. affected_rows = 1 → lock acquired → enter test wizard
  4. Test completes → write test_records + SET tested=true, locked_by=NULL
  5. If idle > 5 min → lock auto-expires, anyone can claim
```

Lock release on test completion or cancel. Expired locks reclaimed on next claim attempt.

## Migration

One-time script migrates existing data:

1. Parse old `batch_state` JSON blob → insert into `pending_devices`
2. Parse old `test_records` table rows → insert into new `test_records`
3. Run before deployment

## Code Removal

- `getTerminalId()` function
- `_terminalId` cookie and localStorage
- `loadBatchState()` recovery fallback
- `syncBatchToCloud()` JSON blob sync
- `mergeBatchStates()` merge logic
- `autoSaveServer` / File System Access
- `AUTO_SAVE_URL` constant
- `resetLocalAndReload()` helper
- All cookie read/write logic

UI rendering and interaction code preserved, adapted to new data sources.

## RLS Policy

Both tables: public read/write (matching current `batch_state` policy). No auth required — team uses shared key.
