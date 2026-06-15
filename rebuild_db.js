// rebuild_db.js - Parse xlsx files and generate sn_db_full.js + order_db.js
// v2: With forward-fill for Excel convention (blank cells = same as above)

const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const DESKTOP = 'C:/Users/吴浩/Desktop';
const OUT_DIR = 'C:/Users/吴浩/support-qa';

const FILES = [
  '发货记录2022.xlsx',
  '发货记录2025.xlsx',
  '发货记录2026.xlsx',
];

// ─── SN value cleaning ──────────────────────────────────────────
function cleanSN(raw) {
  if (raw == null) return [];
  let s = String(raw).trim();
  if (!s) return [];
  s = s.replace(/[\r\n]+/g, ';');
  s = s.replace(/；/g, ';');
  let parts = s.split(';').map(p => p.trim()).filter(Boolean);
  let result = [];
  for (let p of parts) {
    // "SN:IMEI" → keep both parts (SN and IMEI are both valid identifiers)
    let colonParts = p.split(':');
    for (let cp of colonParts) {
      cp = cp.trim();
      if (cp && cp.length >= 2) result.push(cp);
    }
  }
  return result;
}

// ─── Date conversion ───────────────────────────────────────────
function excelDateToText(v) {
  if (v == null || v === '') return '';
  // Try numeric string (cell() converts numbers to strings)
  if (typeof v === 'string') {
    let n = parseFloat(v);
    if (!isNaN(n) && n > 40000 && n < 70000) {
      let d = new Date((n - 25569) * 86400 * 1000);
      return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    }
    return v.trim();
  }
  if (typeof v === 'number' && v > 40000 && v < 70000) {
    let d = new Date((v - 25569) * 86400 * 1000);
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }
  return String(v);
}

// ─── Get cell value as trimmed string, or '' if null ───────────
function cell(row, col) {
  if (col < 0 || col >= row.length) return '';
  let v = row[col];
  return (v != null) ? String(v).trim() : '';
}

// ─── Extract records from a sheet WITH forward-fill ─────────────
// colMap: { sn, order, device, country, date, firmware, registered, tester, important }
//   Use -1 for missing columns.
// deviceModel: fallback device name if column is missing

function extractRecordsFF(sheetData, headerRow, colMap, deviceModel) {
  let records = [];
  if (sheetData.length <= headerRow) return records;

  // Forward-fill state
  let ff = { order: '', device: deviceModel || '', country: '', date: '', tester: '', firmware: '', registered: '', important: '' };

  function getFF(row, key) {
    let ci = colMap[key];
    if (ci === undefined || ci < 0) return ff[key]; // column doesn't exist, use last known
    let v = cell(row, ci);
    if (v) { ff[key] = v; return v; }
    return ff[key]; // carry forward
  }

  // For firmware, registered, important: only fill down to adjacent rows
  // (don't carry across gaps). We use a separate short-lived fill for these.
  let ffShort = { firmware: '', registered: '', important: '' };

  for (let r = headerRow + 1; r < sheetData.length; r++) {
    let row = sheetData[r];
    if (!row || row.length === 0) continue;

    // Get SN
    let snRaw = null;
    if (colMap.sn >= 0) snRaw = row[colMap.sn];
    if (snRaw == null || String(snRaw).trim() === '') continue;
    let sns = cleanSN(snRaw);
    if (sns.length === 0) continue;

    // Extract fields with forward-fill
    let order = getFF(row, 'order');
    let device = getFF(row, 'device');
    let country = getFF(row, 'country');
    let dateRaw = getFF(row, 'date');
    let date = excelDateToText(dateRaw || cell(row, 0));
    let tester = getFF(row, 'tester');

    // Short-range fill for firmware, registered, important
    let fw = cell(row, colMap.firmware >= 0 ? colMap.firmware : -1);
    ffShort.firmware = fw || ffShort.firmware;

    let reg = cell(row, colMap.registered >= 0 ? colMap.registered : -1);
    ffShort.registered = reg || ffShort.registered;

    let imp = cell(row, colMap.important >= 0 ? colMap.important : -1);
    ffShort.important = imp || ffShort.important;

    for (let sn of sns) {
      records.push({
        sn,
        order,
        device,
        country,
        date,
        important: ffShort.important,
        firmware: ffShort.firmware,
        registered: ffShort.registered,
        tester,
      });
    }
  }

  return records;
}

// ─── Main processing ───────────────────────────────────────────

let allRecords = [];

for (let file of FILES) {
  let filePath = path.join(DESKTOP, file);
  console.log('\n=== ' + file + ' ===');
  let wb = XLSX.readFile(filePath);

  for (let sheetName of wb.SheetNames) {
    let ws = wb.Sheets[sheetName];
    let data = XLSX.utils.sheet_to_json(ws, { header: 1, defval: null });
    if (data.length < 2) continue;

    let headers = data[0];
    if (!headers) continue;
    let headerStr = headers.map(h => String(h || '').trim()).join(',');

    // ── Match sheet structure ──
    let colMap = null;
    let deviceModel = '';

    // 2024年2月新记录模板 & 2025/2026 Sheet1
    // [时间, 发货国家, 订单号, 测试人, 设备型号, SN, 固件版本, 其他版本信息, 注册情况, 其他重要信息, 测试内容, 备注...]
    if (headerStr.includes('时间') && headerStr.includes('订单号') && headerStr.includes('设备型号') && headerStr.includes('SN') && headerStr.includes('固件版本')) {
      colMap = { sn: 5, order: 2, device: 4, country: 1, date: 0, firmware: 6, registered: 8, tester: 3, important: 9 };
      // 2026 format: 其他重要信息 at index 10 (after 测试内容)
      if (headerStr.includes('测试内容') && headerStr.includes('其他重要信息') && headers.length > 10) {
        colMap.important = 10;
      }
    }
    // Sheet3 (2022): [时间, 发货国家, 订单号, 测试人, 设备型号, SN]
    else if (headerStr.includes('时间') && headerStr.includes('订单号') && headerStr.includes('设备型号') && headerStr.includes('SN') && headers.length <= 10) {
      colMap = { sn: 5, order: 2, device: 4, country: 1, date: 0, firmware: -1, registered: -1, tester: 3, important: -1 };
    }
    // Y1: [国家, 订单号, 型号, SN, 固件版本, system, Radio, Screen, 发货日期, 注册情况, 测试, ...]
    else if (headerStr.includes('Radio') && headerStr.includes('Screen')) {
      colMap = { sn: 3, order: 1, device: 2, country: 0, date: 8, firmware: 4, registered: 9, tester: 10, important: -1 };
    }
    // X1: [国家, 订单号, 型号, SN, 固件版本, MCU, radio, 发货日期, 注册情况, 测试, IMEI]
    else if (headerStr.includes('MCU') && headerStr.includes('radio')) {
      colMap = { sn: 3, order: 1, device: 2, country: 0, date: 7, firmware: 4, registered: 8, tester: 9, important: -1 };
    }
    // SFAIRA ONE: [国家, 订单号, 型号, 设备SN, 发货日期, system, 注册情况, 测试]
    else if (headerStr.includes('设备SN') && headerStr.includes('system')) {
      colMap = { sn: 3, order: 1, device: 2, country: 0, date: 4, firmware: 5, registered: 6, tester: 7, important: -1 };
    }
    // P1: [国家, 订单号, 型号, SN, 发货日期, 备注, 测试]
    else if (sheetName === 'P1') {
      colMap = { sn: 3, order: 1, device: 2, country: 0, date: 4, firmware: -1, registered: -1, tester: 6, important: 5 };
    }
    // SV100: [国家, 订单号, SN号, IMEI, 固件, 日期, 备注]
    // S10: [国家, 订单号, 型号, SN, 固件版本, 发货日期, 测试, 备注]
    else if (headerStr.includes('SN号') || sheetName === 'SV100' || sheetName === 'S10') {
      if (headerStr.includes('SN号')) {
        colMap = { sn: 2, order: 1, device: sheetName, country: 0, date: 5, firmware: 4, registered: -1, tester: -1, important: 6 };
      } else {
        colMap = { sn: 3, order: 1, device: 2, country: 0, date: 5, firmware: 4, registered: -1, tester: 6, important: 7 };
      }
    }
    // K8 OEM: [国家, 订单号, 型号, SN, 固件版本, 发货日期, 注册情况, 测试]
    else if (sheetName === 'K8 OEM') {
      colMap = { sn: 3, order: 1, device: 2, country: 0, date: 5, firmware: 4, registered: 6, tester: 7, important: -1 };
    }
    // T8 pro / TH10 PRO: [国家, 订单号, 型号, 板卡sn, IMEI, 固件版本, 发货日期, 注册情况, 测试, 备注]
    else if (headerStr.includes('板卡sn')) {
      colMap = { sn: 3, order: 1, device: 2, country: 0, date: 6, firmware: 5, registered: 7, tester: 8, important: 9 };
    }
    // T8: [国家, 订单号, 型号, SN, 发货日期, 备注]
    else if (sheetName === 'T8') {
      colMap = { sn: 3, order: 1, device: 2, country: 0, date: 4, firmware: -1, registered: -1, tester: -1, important: 5 };
    }
    // SAgro10: [国家, 订单号, 型号, 平板SN, IMEI, 发货日期, 测试, 安装, 备注]
    else if (sheetName === 'SAgro10') {
      colMap = { sn: 3, order: 1, device: 2, country: 0, date: 5, firmware: -1, registered: -1, tester: 6, important: -1 };
    }
    // SAgro100: [国家, 订单号, 型号, 平板SN, IMEI, PN, 电机SN, 陀螺仪SN, 角传型号, 发货日期, 测试, 安装, 备注]
    else if (sheetName === 'SAgro100') {
      colMap = { sn: 3, order: 1, device: 2, country: 0, date: 9, firmware: -1, registered: -1, tester: 10, important: -1 };
    }
    // SAgro200: [国家, 订单号, 平板SN, 接收机SN, 传感器型号, 发货日期, 测试, 注册, 软件版本]
    else if (sheetName === 'SAgro200') {
      colMap = { sn: 2, order: 1, device: -1, country: 0, date: 5, firmware: -1, registered: 7, tester: 6, important: -1 };
    }
    // 平地系统: [国家, 订单号, 型号, 平板SN, IMEI, 控制器SN, 发货日期, 测试, 备注]
    else if (headerStr.includes('控制器SN')) {
      colMap = { sn: 3, order: 1, device: 2, country: 0, date: 6, firmware: -1, registered: -1, tester: 7, important: -1 };
    }
    // 打桩
    else if (sheetName === '打桩') {
      colMap = { sn: 2, order: 1, device: -1, country: 0, date: 3, firmware: -1, registered: 4, tester: 5, important: 6 };
    }
    // BD990
    else if (sheetName === 'BD990') {
      colMap = { sn: 3, order: 1, device: 2, country: 0, date: 5, firmware: 4, registered: 6, tester: 7, important: 8 };
    }
    // SC100 / S100 / M1: [国家, 订单号, 型号, 设备SN, 发货日期, 测试, ...]
    else if (sheetName === 'SC100' || sheetName === 'S100' || sheetName === 'M1') {
      colMap = { sn: 3, order: 1, device: 2, country: 0, date: 4, firmware: -1, registered: -1, tester: 5, important: -1 };
    }
    // DK100: [国家, 订单号, 设备SN, 发货日期, 测试]
    else if (sheetName === 'DK100') {
      colMap = { sn: 2, order: 1, device: 'DK100', country: 0, date: 3, firmware: -1, registered: -1, tester: 4, important: -1 };
    }
    // TS1000: [国家, 订单号, SN号, 发货日期, 备注]
    else if (sheetName === 'TS1000') {
      colMap = { sn: 2, order: 1, device: 'TS1000', country: 0, date: 3, firmware: -1, registered: -1, tester: -1, important: 4 };
    }
    // TH10 / T10: [国家, 订单号, 型号, 平板SN, IMEI, 固件版本, ...]
    else if (sheetName === 'TH10' || sheetName === 'T10') {
      colMap = { sn: 3, order: 1, device: 2, country: 0, date: 8, firmware: 5, registered: 9, tester: 10, important: -1 };
    }
    // 板卡: [718D, SN, customer]
    else if (sheetName === '板卡') {
      colMap = { sn: 1, order: -1, device: '板卡', country: 2, date: -1, firmware: -1, registered: -1, tester: -1, important: -1 };
    }
    // Sheet1 (2022) or generic
    else if (headerStr.match(/^\d+,XYZ/)) {
      colMap = { sn: 2, order: 1, device: -1, country: -1, date: -1, firmware: -1, registered: -1, tester: -1, important: -1 };
    }
    // 换货,返修
    else if (sheetName === '换货,返修') {
      // Skip - this is exchange/repair records, not standard SN records
      console.log(`  Sheet: ${sheetName} (${data.length} rows) — SKIPPED`);
      continue;
    }
    // Sheet4 — pivot table, skip
    else if (headerStr === '行标签,求和项:SN') {
      console.log(`  Sheet: ${sheetName} (${data.length} rows) — pivot table, SKIPPED`);
      continue;
    }

    if (!colMap) {
      // Generic fallback: try to find SN column
      let snIdx = -1, orderIdx = -1, countryIdx = -1, dateIdx = -1, deviceIdx = -1, testerIdx = -1;
      for (let i = 0; i < headers.length; i++) {
        let h = String(headers[i] || '').trim();
        if (h === 'SN' || h === 'SN号' || h === '设备SN' || h === '平板SN' || h === '板卡sn') snIdx = i;
        if (h === '订单号' || h === '订单' || h === 'order') orderIdx = i;
        if (h === '国家' || h === '发货国家') countryIdx = i;
        if (h === '发货日期' || h === '时间' || h === '日期') dateIdx = i;
        if (h === '型号' || h === '设备型号') deviceIdx = i;
        if (h === '测试人' || h === '测试') testerIdx = i;
      }
      if (snIdx >= 0) {
        colMap = { sn: snIdx, order: orderIdx, device: deviceIdx, country: countryIdx, date: dateIdx, firmware: -1, registered: -1, tester: testerIdx, important: -1 };
        console.log(`    Generic fallback: sn=${snIdx} order=${orderIdx} country=${countryIdx} date=${dateIdx}`);
      }
    }

    if (colMap) {
      let records = extractRecordsFF(data, 0, colMap, deviceModel);

      // ── Extra SN columns for specific sheets ──
      if (sheetName === 'SAgro100') {
        // Also extract 电机SN (col 6) and 陀螺仪SN (col 7)
        let motorMap = { ...colMap, sn: 6, device: -1 };
        let gyroMap = { ...colMap, sn: 7, device: -1 };
        let motorRecords = extractRecordsFF(data, 0, motorMap, '电机');
        let gyroRecords = extractRecordsFF(data, 0, gyroMap, '陀螺仪');
        records = records.concat(motorRecords, gyroRecords);
      }
      if (sheetName === 'SAgro200') {
        // Also extract 接收机SN (col 3)
        let rxMap = { ...colMap, sn: 3 };
        let rxRecords = extractRecordsFF(data, 0, rxMap, '接收机');
        records = records.concat(rxRecords);
      }
      if (headerStr.includes('控制器SN')) {
        let ctrlMap = { ...colMap, sn: 5 };
        let ctrlRecords = extractRecordsFF(data, 0, ctrlMap, '控制器');
        records = records.concat(ctrlRecords);
      }

      console.log(`  Sheet: ${sheetName} (${data.length} rows) → ${records.length} SN records`);
      allRecords = allRecords.concat(records);
    } else {
      console.log(`  Sheet: ${sheetName} (${data.length} rows) — UNMATCHED, SKIPPED`);
    }
  }
}

// ─── Deduplicate (keep last — more recent data wins) ──
let snMap = new Map();
for (let rec of allRecords) {
  snMap.set(rec.sn, rec);
}
console.log('\n=== Total unique SNs: ' + snMap.size + ' ===');

// ─── Stats ──
let withOrder = 0, withoutOrder = 0;
for (let [sn, rec] of snMap) {
  if (rec.order) withOrder++; else withoutOrder++;
}
console.log('With order: ' + withOrder);
console.log('Without order: ' + withoutOrder);

// ─── Build order DB ──
let orderMap = new Map();
for (let rec of allRecords) {
  if (!rec.order) continue;
  if (!orderMap.has(rec.order)) orderMap.set(rec.order, new Set());
  orderMap.get(rec.order).add(rec.sn);
}
console.log('Total orders: ' + orderMap.size);

// ─── Write sn_db_full.js ──
let snLines = [];
snLines.push('// SN database with full info from 发货记录2022/2025/2026');
snLines.push('// Generated: ' + new Date().toISOString());
snLines.push('// Total unique SNs: ' + snMap.size + ' | With order: ' + withOrder + ' | Without order: ' + withoutOrder);
snLines.push('var snDB = {');

let snKeys = Array.from(snMap.keys()).sort();
for (let sn of snKeys) {
  let rec = snMap.get(sn);
  let vals = [rec.order, rec.device, rec.country, rec.date, rec.important, rec.firmware, rec.registered, rec.tester]
    .map(v => JSON.stringify(v));
  snLines.push('  ' + JSON.stringify(sn) + ': [' + vals.join(', ') + '],');
}

snLines.push('};');
let snOutput = snLines.join('\n');
fs.writeFileSync(path.join(OUT_DIR, 'sn_db_full.js'), snOutput, 'utf-8');
console.log('Written sn_db_full.js (' + (snOutput.length / 1024).toFixed(0) + ' KB)');

// ─── Write order_db.js ──
let orderLines = [];
orderLines.push('// Order -> SN mapping from 发货记录2022/2025/2026');
orderLines.push('// Generated: ' + new Date().toISOString());
orderLines.push('var orderDB = {');

let orderKeys = Array.from(orderMap.keys()).sort();
for (let order of orderKeys) {
  let sns = Array.from(orderMap.get(order)).sort();
  orderLines.push('  ' + JSON.stringify(order) + ': ' + JSON.stringify(sns) + ',');
}

orderLines.push('};');
let orderOutput = orderLines.join('\n');
fs.writeFileSync(path.join(OUT_DIR, 'order_db.js'), orderOutput, 'utf-8');
console.log('Written order_db.js (' + (orderOutput.length / 1024).toFixed(0) + ' KB)');

console.log('\nDone!');
