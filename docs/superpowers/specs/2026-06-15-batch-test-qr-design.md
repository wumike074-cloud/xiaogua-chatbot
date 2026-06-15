# Batch Test Import & QR Code Feature

## Context

The current device test interface requires the tester to manually select a product, then manually enter SN, order, country, and registration code for each device. For batch shipments with dozens of devices, this is repetitive and error-prone.

The user receives shipment data in a fixed format: an order number (XYZ prefix), followed by SN + registration code pairs. This feature auto-parses that data, populates a pending test queue, auto-fills known fields from the SN database, and displays a scannable QR code for device registration.

All changes stay in the single `index.html` file.

---

## Data Format

Input is plain text with the following structure:

```
XYZAMAMEX2605004          ← order number (always XYZ-prefix)

2226M0248                 ← SN
85298AD095699C2B...       ← registration code (64 hex chars)
2226M0230
85298AD095699C2B...
...
```

**Parsing rules:**
- Lines starting with `XYZ` (case-insensitive) → order number
- Lines matching SN pattern (alphanumeric, 6-20 chars) followed by a 64-char hex line → SN + registration code pair
- Blank lines and other content ignored
- Registration codes validated as 64-character hexadecimal strings

---

## Architecture

### New Components

**1. Batch Input Area** — placed above the test wizard in the left sidebar, replacing the placeholder text when no product is selected
- A `<textarea>` for pasting raw data
- A "解析" (Parse) button
- Parser result summary: "识别 N 台设备"

**2. Pending Test List** — displayed below the batch input area, above the existing product list
- Each item shows: SN, device model (from snDB), status indicator
- Clicking a pending item starts that device's test
- Completed items turn gray with a checkmark
- Items can be tested in any order

**3. Batch State Manager** — new JS object to track the queue
```javascript
let batchState = {
  orderNumber: "XYZAMAMEX2605004",
  devices: [
    { sn: "2226M0248", regCode: "85298AD09...", model: "Orion one", tested: false },
    // ...
  ]
};
```

**4. QR Code Generator** — uses the existing `qrcode` npm dependency (already in package.json)
- Bundled as a self-contained function using `qrcode` to generate a data URL `<img>` 
- Fallback: if qrcode library unavailable, generate via `https://api.qrserver.com/v1/create-qr-code/` (no dependency)

**5. Modified Test Wizard** — the registration step now includes:
- Registration period selector (unchanged)
- Registration code display (read-only text, auto-filled from batch data)
- QR code image generated from the registration code
- The QR code is visible within the step, no extra modal

### Modified Files
- `index.html` — all changes in this single file (~400 lines added)

---

## Data Flow

```
Paste text → Parse → Match SN to snDB → Build batchState
    ↓
Click device in pending list → selectProduct(model) → pre-fill fields
    ↓
Test wizard steps → registration step shows regCode + QR
    ↓
finishTest() → mark device as tested in batchState → re-render pending list
```

**Pre-fill rules:**
| Field | Source |
|-------|--------|
| SN | Parsed from input |
| 订单 (Order) | Parsed from input (XYZ order number) |
| 国家 (Country) | snDB lookup on SN |
| 注册码 (Reg Code) | Parsed from input (paired with SN) |
| 注册期限 (Reg Period) | Extracted from reg code expiration date (third segment) |
| 固件版本 (Firmware) | snDB lookup if available |

**Model detection:**
- SN looked up in `snDB` → model extracted from `snDB[sn][1]`
- If model in `testStepsConfig`, use that flow
- If unknown model, default to X1 test flow (most comprehensive)

---

## UI Changes

### Left Sidebar (Testing Panel)

```
┌─ 📋 批量导入 ─────────────────────┐
│ [                              ]  │
│ [     textarea for pasting     ]  │
│ [                              ]  │
│ [ 解析 → 识别 10 台设备          ]  │
└─────────────────────────────────┘

┌─ ⏳ 待测列表 (8台未测) ───────────┐
│ 2226M0248   Orion one      →     │
│ 2226M0230   Orion one   ✓ 完成    │
│ 2226M0219   Orion one      →     │
│ ...                              │
└──────────────────────────────────┘

┌─ 📦 产品列表 ───────────────────┐
│ (existing)                     │
└────────────────────────────────┘
```

### Test Wizard (Registration Step)

```
Step 4/7: 注册期限
┌─────────────────────────────────┐
│ 注册期限: ○永久 ○60天 ○90天     │
│                                 │
│ 注册码:                         │
│ ┌─────────────────────────────┐ │
│ │ 85298AD09...AEF2E3ED        │ │
│ └─────────────────────────────┘ │
│                                 │
│     ┌───────────────┐           │
│     │               │           │
│     │   QR CODE     │           │
│     │   120×120     │           │
│     │               │           │
│     └───────────────┘           │
│     扫描注册 2226M0248          │
│                                 │
│        [← 上一步]  [下一步 →]    │
└─────────────────────────────────┘
```

---

## CSS Changes (~80 lines)

New classes:
- `.batch-input` — container for paste area
- `.batch-textarea` — monospace textarea styling
- `.pending-list` — scrollable device queue
- `.pending-item` — individual device row with hover
- `.pending-item.tested` — grayed-out completed state
- `.qr-container` — QR code display box in wizard step
- `.reg-code-display` — monospace registration code text

---

## JS Changes (~300 lines)

### New functions
- `parseBatchInput(text)` → `{ orderNumber, devices[] }`
- `renderBatchInput()` — render the textarea + parse button
- `renderPendingList()` — render the device queue
- `startBatchDevice(sn)` — start testing a specific device from the queue
- `markBatchDeviceDone(sn)` — mark complete after finishTest
- `generateQRCode(regCode, elementId)` — render QR code into a DOM element

### Modified functions
- `selectProduct()` — accept optional pre-fill data parameter
- `renderStep()` — add QR code rendering for registration step
- `finishTest()` — call `markBatchDeviceDone` if in batch mode
- `init()` — call setup for batch input area

### QR Code Generation
```javascript
// Primary: use qrcode npm package (loaded via CDN or bundled)
// Fallback: Google Charts API
function generateQRCode(text) {
  // QRCode.toDataURL(text, { width: 120 }) → <img src="data:image/png;...">
  // or: https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=...
}
```

Since `qrcode` is in package.json, we can load it via:
```html
<script src="https://cdn.jsdelivr.net/npm/qrcode@1.5.4/build/qrcode.min.js"></script>
```
For environments without internet (China), include a local copy in the repo.

---

## Integration Points

**With existing test wizard:**
- `selectProduct(name, prefillData)` extended signature
- `renderStep()` checks if batch data exists for auto-fill
- `finishTest()` appends to batch queue completion tracking

**With existing snDB/orderDB:**
- SN lookup for model detection uses existing `snDB`
- Order number verification uses existing `orderDB` lookup

**With existing auto-save:**
- Test records are saved normally via the existing mechanism
- Batch context (order number) is included in each record

---

## Edge Cases

1. **SN not in snDB** — show "未知型号" with a warning, default to X1 test flow, allow manual model selection
2. **Duplicate SN in batch** — skip duplicates, show warning count
3. **SN without registration code** — proceed with registration step showing empty reg code field (QR won't generate until code is manually entered)
4. **Multi-order batch** — if multiple XYZ order numbers detected, warn and use the last one
5. **Empty batch input** — parse button disabled unless textarea has content
6. **Device already tested in current batch** — show "已测试" in pending list, don't allow re-start

## Verification

1. Paste sample batch data → verify correct device count and models
2. Click a pending device → verify correct test flow loads with pre-filled fields
3. Navigate to registration step → verify QR code renders and is scannable
4. Complete test → verify device grays out in pending list
5. Export Excel → verify batch order number is in records
6. Test with SN not in snDB → verify fallback behavior
7. Test with partial data (missing reg codes) → verify graceful handling
