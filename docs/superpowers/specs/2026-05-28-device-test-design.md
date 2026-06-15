# Device Test Module - Design Doc

## Overview

Add a "Device Test" tab to the existing XiaoGua chatbot page. Product-specific test wizards guide testers through steps; results auto-fill into a table matching the existing shipping record format.

## Layout

Two tabs at top: "XiaoGua Chat" | "Device Test" (default: Chat).

Device Test tab layout (left-right, not stacked):

+------------------------------------------------------------------+
|  Product List (240px)  |  Test Wizard (rest)                      |
|                         |                                          |
|  [Search...]           |  X1 - Step 2/5: Firmware                 |
|                         |                                          |
|  X1           5 steps  |  Enter firmware version:                 |
|  X1 lite      0 steps  |  [________________]                      |
|  X1 Pro       0 steps  |                                          |
|  Y1           0 steps  |  [<- Prev]          [Next ->]            |
|  Z1           0 steps  |                                          |
|  ...                    |                                          |
+------------------------------------------------------------------+
|  Test Records Table (full width, scrollable)                      |
|  [Export Excel] [Clear All]                                       |
|  Date | Country | Order | Tester | Model | SN | FW | ...         |
|  ...                                                              |
+------------------------------------------------------------------+

## Test Steps (3 types)

### Confirm Type
- Shows instruction text
- Two buttons: Pass / Fail
- Fail -> popup to enter remark -> proceed with fail flag

### Input Type
- Shows title + description
- Text input with placeholder
- Can pre-fill from SN database (order, country)

### Select Type
- Shows title + question
- Radio (single) or Checkbox (multi), configurable

## Table Format

Matches existing template: "Shipping Record 2026.xlsx"

13 columns:

| # | Column | Source |
|---|--------|--------|
| 1 | Date | Auto: today's date |
| 2 | Country | Auto from SN DB, editable |
| 3 | Order | Auto from SN DB, editable |
| 4 | Tester | Input step, key: "tester" |
| 5 | Model | Product selected |
| 6 | SN | Input step, key: "sn" |
| 7 | FW Version | Input step, key: "firmware" |
| 8 | Other Version | Input step, key: "otherVersion" |
| 9 | Registration | Select/Input step, key: "registration" |
| 10 | Test Content | Auto: summary of steps done |
| 11 | Important Info | Input step, key: "importantInfo" |
| 12 | Remark 1 | Input step, key: "remark1" |
| 13 | Remark 2 | Input step, key: "remark2" |

## Data Model

### Product step config

const testStepsConfig = {
  "X1": [
    { type: "input", title: "SN", placeholder: "Scan or enter SN", key: "sn" },
    { type: "input", title: "Tester", placeholder: "Tester name", key: "tester" },
    { type: "input", title: "FW Version", placeholder: "e.g. R4.2.1", key: "firmware" },
    { type: "input", title: "Other Version", placeholder: "e.g. M5(A036.03.04)", key: "otherVersion" },
    { type: "input", title: "Registration", placeholder: "e.g. permanent / 90 days", key: "registration" },
    { type: "input", title: "Important Info", placeholder: "", key: "importantInfo" },
    { type: "input", title: "Remark 1", placeholder: "", key: "remark1" },
    { type: "input", title: "Remark 2", placeholder: "", key: "remark2" }
  ],
  "X1 lite": [],
  // ... more products, steps TBD by user
};

### Test record

{
  date: "2026-05-28",
  country: "Spain",
  order: "XYZALIES260205",
  tester: "Kevin Loo",
  model: "X1",
  sn: "7126R0050",
  firmware: "R4.2.1",
  otherVersion: "M5(A036.03.04)",
  registration: "permanent",
  testContent: "firmware upgrade, registration",
  importantInfo: "",
  remark1: "",
  remark2: "",
  result: "pass",          // "pass" | "fail"
  stepDetails: [...]       // per-step detail for export
}

## Storage

- Key: deviceTestRecords in localStorage
- Permanent until manually cleared
- "Clear All" with double-confirmation, suggests export first
- Single row delete supported

## Export

- Generates .xlsx matching the 13-column format
- Uses exceljs package (already installed)
- Filename: device_test_records_YYYY-MM-DD.xlsx
- Optionally include QR codes for registration codes

## Integration

- SN database: window.snDB to auto-fill order + country
- Reuses existing CSS vars, Nunito font
- exceljs for export, qrcode for registration QR (optional)
