// Import Excel shipping records into order_db.js and sn_db_full.js
// Corrected: process only 发货记录2026.xlsx + full forward-fill for the
// "blank cell = same as above" convention (order/device/country/date/tester).
const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const BASE = 'C:/Users/吴浩/support-qa';

// ─── Load existing DBs (both files declare `var` at top level) ──────────
let orderDB = {};
let snDB = {};
eval(fs.readFileSync(path.join(BASE, 'order_db.js'), 'utf-8').replace('var orderDB =', 'orderDB ='));
eval(fs.readFileSync(path.join(BASE, 'sn_db_full.js'), 'utf-8').replace('var snDB =', 'snDB ='));

const beforeSN = Object.keys(snDB).length;
const beforeOrder = Object.keys(orderDB).length;

const files = [
  'C:/Users/吴浩/Desktop/发货记录2026.xlsx',
];

let newOrderCount = 0;
let newSNCount = 0;
let updatedSN = 0;
let skippedNoSN = 0;

function hasVal(v) {
  return v != null && String(v).trim() !== '';
}

// Excel serial date → YYYY-MM-DD; text date → keep as-is
function convertDate(v) {
  if (!hasVal(v)) return '';
  if (typeof v === 'number') {
    const d = XLSX.SSF.parse_date_code(v);
    return d.y + '-' + String(d.m).padStart(2, '0') + '-' + String(d.d).padStart(2, '0');
  }
  return String(v).trim();
}

// Split one raw SN cell into individual SN/IMEI tokens
function cleanSN(raw) {
  if (raw == null) return [];
  let s = String(raw).trim();
  if (!s) return [];
  s = s.replace(/\r?\n/g, ';').replace(/；/g, ';');
  let parts = s.split(';').map(p => p.trim()).filter(Boolean);
  let result = [];
  for (let p of parts) {
    // "SN:IMEI" → keep both parts
    for (let cp of p.split(':')) {
      cp = cp.trim();
      if (cp && cp.length >= 2) result.push(cp);
    }
  }
  return result;
}

files.forEach(file => {
  console.log('\nProcessing: ' + path.basename(file));
  const wb = XLSX.readFile(file);
  const sheetName = wb.SheetNames[0];
  console.log('  Sheet: ' + sheetName);
  const ws = wb.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(ws, { header: 1, defval: null });

  const headers = data[0];
  const colOrder = headers.findIndex(h => h && h.includes('订单号'));
  const colSN = headers.findIndex(h => h && h === 'SN');
  const colDevice = headers.findIndex(h => h && h.includes('设备型号'));
  const colCountry = headers.findIndex(h => h && h.includes('发货国家'));
  const colTester = headers.findIndex(h => h && h.includes('测试人'));
  const colRegistration = headers.findIndex(h => h && h.includes('注册情况'));
  const colFirmware = headers.findIndex(h => h && (h.includes('固件版本') || h.includes('软件版本')));
  const colTest = headers.findIndex(h => h && h.includes('测试内容'));
  const colDate = headers.findIndex(h => h && h === '时间');

  console.log('  Columns: order=' + colOrder + ', sn=' + colSN + ', device=' + colDevice + ', country=' + colCountry +
    ', tester=' + colTester + ', reg=' + colRegistration + ', fw=' + colFirmware + ', test=' + colTest + ', date=' + colDate);

  // Forward-fill state for the long-range fields (blank = same as above)
  const last = { order: '', device: '', country: '', date: '', tester: '' };

  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    const snRaw = row[colSN];

    if (!hasVal(snRaw)) {
      // Row without SN: still advance forward-fill state, then skip
      if (hasVal(row[colOrder])) last.order = String(row[colOrder]).trim();
      if (hasVal(row[colDevice])) last.device = String(row[colDevice]).trim();
      if (hasVal(row[colCountry])) last.country = String(row[colCountry]).trim();
      if (hasVal(row[colTester])) last.tester = String(row[colTester]).trim();
      if (hasVal(row[colDate])) last.date = convertDate(row[colDate]);
      skippedNoSN++;
      continue;
    }

    const sns = cleanSN(snRaw);
    if (sns.length === 0) { skippedNoSN++; continue; }

    // Forward-fill the long-range fields
    if (hasVal(row[colOrder])) last.order = String(row[colOrder]).trim();
    if (hasVal(row[colDevice])) last.device = String(row[colDevice]).trim();
    if (hasVal(row[colCountry])) last.country = String(row[colCountry]).trim();
    if (hasVal(row[colTester])) last.tester = String(row[colTester]).trim();
    if (hasVal(row[colDate])) last.date = convertDate(row[colDate]);

    // Short-range (per-row) fields are read directly, matching the existing DB
    const firmware = hasVal(row[colFirmware]) ? String(row[colFirmware]).trim() : '';
    const registration = hasVal(row[colRegistration]) ? String(row[colRegistration]).trim() : '';
    const test = hasVal(row[colTest]) ? String(row[colTest]).trim() : '';

    for (const sn of sns) {
      if (last.order) {
        if (!orderDB[last.order]) { orderDB[last.order] = []; newOrderCount++; }
        if (!orderDB[last.order].includes(sn)) orderDB[last.order].push(sn);
      }

      if (snDB[sn]) updatedSN++;
      snDB[sn] = [last.order, last.device, last.country, last.date, test, firmware, registration, last.tester];
      newSNCount++;
    }
  }
});

// ─── Summary ────────────────────────────────────────────────────────────
let snsWithoutOrder = 0;
for (const sn in snDB) {
  if (!snDB[sn][0]) snsWithoutOrder++;
}

console.log('\n=== Summary ===');
console.log('SNs before: ' + beforeSN + ' → after: ' + Object.keys(snDB).length);
console.log('Orders before: ' + beforeOrder + ' → after: ' + Object.keys(orderDB).length);
console.log('New orders added: ' + newOrderCount);
console.log('SN records written: ' + newSNCount + ' (' + updatedSN + ' were updates)');
console.log('Skipped (no SN): ' + skippedNoSN);
console.log('SNs without order: ' + snsWithoutOrder);

// ─── Write order_db.js ──────────────────────────────────────────────────
const orderKeys = Object.keys(orderDB).sort((a, b) => a.localeCompare(b, 'zh'));
let orderContent = '// Order -> SN mapping from 发货记录2022/2025/2026\n';
orderContent += '// Generated: ' + new Date().toISOString() + '\n';
orderContent += 'var orderDB = {\n';
orderContent += orderKeys.map(key =>
  '  ' + JSON.stringify(key) + ': [' + orderDB[key].map(s => JSON.stringify(s)).join(',') + ']'
).join(',\n');
orderContent += '\n};\n';
fs.writeFileSync(path.join(BASE, 'order_db.js'), orderContent, 'utf-8');
console.log('Written order_db.js (' + orderKeys.length + ' orders)');

// ─── Write sn_db_full.js ────────────────────────────────────────────────
const snKeys = Object.keys(snDB).sort((a, b) => a.localeCompare(b, 'zh'));
let snContent = '// SN database with full info from 发货记录2022/2025/2026\n';
snContent += '// Generated: ' + new Date().toISOString() + '\n';
snContent += '// Total unique SNs: ' + snKeys.length + ' | With order: ' + (snKeys.length - snsWithoutOrder) + ' | Without order: ' + snsWithoutOrder + '\n';
snContent += 'var snDB = {\n';
snContent += snKeys.map(key =>
  '  ' + JSON.stringify(key) + ': [' + snDB[key].map(v => JSON.stringify(v)).join(',') + ']'
).join(',\n');
snContent += '\n};\n';
fs.writeFileSync(path.join(BASE, 'sn_db_full.js'), snContent, 'utf-8');
console.log('Written sn_db_full.js (' + snKeys.length + ' SNs)');

console.log('\nDone!');
