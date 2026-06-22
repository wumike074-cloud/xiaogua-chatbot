// rebuild.js — Rewrite entire data layer in one pass
var fs = require('fs');
var src = fs.readFileSync('index_backup_v3.html', 'utf8');
var lines = src.split('\n');

// ===== FIND LINE NUMBERS =====
function findLine(pat) {
  for (var i = 0; i < lines.length; i++) {
    if (lines[i].indexOf(pat) !== -1) return i;
  }
  return -1;
}

// ===== DELETE RANGES (inclusive, from bottom to top of file) =====
var deletes = [
  // syncRecordsFromCloud
  { start: 'function syncRecordsFromCloud() {', end: 'function renderRecordsTable()' },
  // persistToFile through updateAutoSaveUI (just before finishTest)
  { start: 'function persistToFile() {', end: 'function finishTest() {' },
  // initAutoSave IIFE through FSA functions (just before persistToFile)
  { start: '// -- Detect server on load --', end: 'function persistToFile() {' },
  // consentAutoSave through mergeIntoLocal
  { start: 'function consentAutoSave() {', end: '// -- Detect server on load --' },
  // showAutoSavePrompt
  { start: 'function showAutoSavePrompt() {', end: 'function consentAutoSave() {' },
  // Background cloud refresh (30-sec polling)
  { start: '// Background cloud refresh', end: '  }, 30000);' },
  // migrateLocalToCloud
  { start: 'function migrateLocalToCloud() {', end: '// Background cloud refresh' },
  // syncRecordToCloud through loadRecordsFromCloud
  { start: 'function syncRecordToCloud(record) {', end: 'function migrateLocalToCloud() {' },
  // loadBatchFromCloud
  { start: 'function loadBatchFromCloud(callback) {', end: 'function syncRecordToCloud(record) {' },
  // mergeBatchStates
  { start: 'function mergeBatchStates(cloud, local) {', end: 'function loadBatchFromCloud(callback) {' },
  // syncBatchToCloud
  { start: 'function syncBatchToCloud() {', end: 'function mergeBatchStates(cloud, local) {' },
  // autoSaveServer vars
  { start: 'var autoSaveServer = null;', end: '// ==================== SUPABASE CLOUD SYNC ====================' },
  // resetLocalAndReload
  { start: 'function resetLocalAndReload() {', end: 'function openBatchDialog() {' },
  // loadBatchState (big function)
  { start: 'function loadBatchState() {', end: 'function resetLocalAndReload() {' },
  // saveBatchState through loadBatchStateFromServer
  { start: 'function saveBatchState() {', end: 'function loadBatchState() {' },
  // saveBatchStateToServer (already covered above but let's be safe)
  // getTerminalId
  { start: 'function getTerminalId() {', end: '// Tab switching' },
];

// Process from bottom to top (reverse order in file)
deletes.sort(function(a, b) {
  return findLine(b.start) - findLine(a.start);
});

for (var d = 0; d < deletes.length; d++) {
  var startPat = deletes[d].start;
  var endPat = deletes[d].end;
  var startIdx = -1, endIdx = -1;

  for (var i = 0; i < lines.length; i++) {
    if (startIdx === -1 && lines[i].indexOf(startPat) !== -1) startIdx = i;
    if (startIdx !== -1 && endIdx === -1 && lines[i].indexOf(endPat) !== -1) endIdx = i - 1;
  }

  if (startIdx >= 0 && endIdx >= startIdx) {
    console.log("Delete lines " + (startIdx+1) + "-" + (endIdx+1) + " (" + (endIdx-startIdx+1) + " lines): " + startPat.substring(0,50));
    lines.splice(startIdx, endIdx - startIdx + 1);
  } else {
    console.log("SKIP: " + startPat.substring(0,50) + " (s=" + startIdx + " e=" + endIdx + ")");
  }
}

// ===== REWRITE batchState global =====
var bsIdx = -1;
for (var i = 0; i < lines.length; i++) {
  if (lines[i].indexOf('var batchState = {') !== -1) { bsIdx = i; break; }
}
if (bsIdx >= 0) {
  // Replace the multi-line declaration with single line
  var endBs = bsIdx;
  while (endBs < lines.length && lines[endBs].indexOf('};') === -1) endBs++;
  lines.splice(bsIdx, endBs - bsIdx + 1, 'var batchState = { currentSN: null };');
}

// ===== INSERT NEW CODE after SUPABASE_KEY =====
var insIdx = -1;
for (var i = 0; i < lines.length; i++) {
  if (lines[i].indexOf('var SUPABASE_KEY = ') !== -1) { insIdx = i + 1; break; }
}
// Skip blank lines
while (insIdx < lines.length && lines[insIdx].trim() === '') insIdx++;

var newCode = [
'',
'// ==================== CLOUD DATA LAYER v2 ====================',
'var _pendingCache = [];',
'var _recordsCache = [];',
'',
'function loadPendingDevices() {',
'  var sb = getSupabase();',
'  if (!sb) return Promise.resolve([]);',
'  var today = new Date();',
'  today.setHours(0, 0, 0, 0);',
'  return sb.from("pending_devices")',
'    .select("*").gte("created_at", today.toISOString())',
'    .order("created_at", { ascending: true })',
'    .then(function(r) {',
'      if (r.error) { console.warn("[Supabase] loadPendingDevices:", r.error.message); return []; }',
'      return (r.data || []).map(function(row) {',
'        return {',
'          sn: row.sn, model: row.model, order: row.order_no,',
'          country: row.country, tested: row.tested,',
'          locked_by: row.locked_by, locked_at: row.locked_at,',
'          regCode: (row.device_data && row.device_data.regCode) || null',
'        };',
'      });',
'    });',
'}',
'',
'function loadTestRecords() {',
'  var sb = getSupabase();',
'  if (!sb) return Promise.resolve([]);',
'  return sb.from("test_records_v2")',
'    .select("*").order("tested_at", { ascending: false })',
'    .then(function(r) {',
'      if (r.error) { console.warn("[Supabase] loadTestRecords:", r.error.message); return []; }',
'      return (r.data || []).map(function(row) {',
'        return {',
'          sn: row.sn, model: row.model, order: row.order_no,',
'          country: row.country, tester: row.tester,',
'          firmware: row.firmware, result: row.result,',
'          date: row.tested_at ? row.tested_at.split("T")[0] : "",',
'          time: row.tested_at ? row.tested_at.split("T")[1].split(".")[0] : "",',
'          registration: (row.test_data && row.test_data.registration) || "",',
'          importantInfo: (row.test_data && row.test_data.importantInfo) || "",',
'          remark1: (row.test_data && row.test_data.remark1) || "",',
'          remark2: (row.test_data && row.test_data.remark2) || "",',
'          regCode: (row.test_data && row.test_data.regCode) || ""',
'        };',
'      });',
'    });',
'}',
'',
'function refreshPendingList() {',
'  loadPendingDevices().then(function(devices) {',
'    _pendingCache = devices;',
'    renderPendingList();',
'  }).catch(function(err) {',
'    console.warn("Failed to load pending:", err);',
'    renderPendingList();',
'  });',
'}',
'',
'function refreshRecordsTable() {',
'  loadTestRecords().then(function(records) {',
'    _recordsCache = records;',
'    renderRecordsTable();',
'  }).catch(function(err) {',
'    console.warn("Failed to load records:", err);',
'  });',
'}',
'',
'function savePendingDevice(device) {',
'  var sb = getSupabase();',
'  if (!sb) return Promise.reject(new Error("Supabase not available"));',
'  return sb.from("pending_devices").upsert({',
'    sn: device.sn, model: device.model,',
'    order_no: device.order || device.order_no || "",',
'    country: device.country || "",',
'    tested: device.tested || false,',
'    device_data: { regCode: device.regCode || null },',
'    created_at: device.created_at || new Date().toISOString(),',
'    updated_at: new Date().toISOString()',
'  }, { onConflict: "sn" }).then(function(r) {',
'    if (r.error) throw new Error(r.error.message);',
'    return r;',
'  });',
'}',
'',
'function saveTestRecord(record) {',
'  var sb = getSupabase();',
'  if (!sb) return Promise.reject(new Error("Supabase not available"));',
'  return sb.from("test_records_v2").upsert({',
'    sn: record.sn, model: record.model,',
'    order_no: record.order || "", country: record.country || "",',
'    tester: record.tester || "", firmware: record.firmware || "",',
'    result: record.result || "pass",',
'    test_data: {',
'      registration: record.registration || "",',
'      importantInfo: record.importantInfo || "",',
'      remark1: record.remark1 || "", remark2: record.remark2 || "",',
'      regCode: record.regCode || "",',
'      failDetail: record.failDetail || "",',
'      stepDetails: record.stepDetails || []',
'    },',
'    tested_at: new Date().toISOString()',
'  }, { onConflict: "sn" }).then(function(r) {',
'    if (r.error) throw new Error(r.error.message);',
'    return r;',
'  });',
'}',
'',
'function deletePendingDevice(sn) {',
'  var sb = getSupabase();',
'  if (!sb) return Promise.reject(new Error("Supabase not available"));',
'  return sb.from("pending_devices").delete().eq("sn", sn).then(function(r) {',
'    if (r.error) throw new Error(r.error.message);',
'    return r;',
'  });',
'}',
'',
'function deleteAllPendingDevices() {',
'  var sb = getSupabase();',
'  if (!sb) return Promise.reject(new Error("Supabase not available"));',
'  var today = new Date(); today.setHours(0, 0, 0, 0);',
'  return sb.from("pending_devices").delete().gte("created_at", today.toISOString()).then(function(r) {',
'    if (r.error) throw new Error(r.error.message);',
'    return r;',
'  });',
'}',
'',
'function deleteTestRecord(sn) {',
'  var sb = getSupabase();',
'  if (!sb) return Promise.reject(new Error("Supabase not available"));',
'  return sb.from("test_records_v2").delete().eq("sn", sn).then(function(r) {',
'    if (r.error) throw new Error(r.error.message);',
'    return r;',
'  });',
'}',
'',
'function batchImportDevices(devices) {',
'  var sb = getSupabase();',
'  if (!sb) return Promise.reject(new Error("Supabase not available"));',
'  var rows = devices.map(function(d) {',
'    return {',
'      sn: d.sn, model: d.model, order_no: d.order || "",',
'      country: d.country || "", tested: d.tested || false,',
'      device_data: { regCode: d.regCode || null },',
'      updated_at: new Date().toISOString()',
'    };',
'  });',
'  return sb.from("pending_devices").upsert(rows, { onConflict: "sn" }).then(function(r) {',
'    if (r.error) throw new Error(r.error.message);',
'    return r;',
'  });',
'}',
'',
'function acquireLock(sn, user) {',
'  var sb = getSupabase();',
'  if (!sb) return Promise.resolve(false);',
'  return sb.from("pending_devices").select("locked_by, locked_at").eq("sn", sn).maybeSingle().then(function(r) {',
'    if (r.error || !r.data) return false;',
'    var row = r.data;',
'    var fiveMinAgo = Date.now() - 5 * 60 * 1000;',
'    if (row.locked_by && row.locked_at && new Date(row.locked_at).getTime() > fiveMinAgo) {',
'      if (row.locked_by !== user) return false;',
'    }',
'    return sb.from("pending_devices").update({',
'      locked_by: user, locked_at: new Date().toISOString()',
'    }).eq("sn", sn).then(function(r2) { return !r2.error; });',
'  });',
'}',
'',
'function releaseLock(sn) {',
'  var sb = getSupabase();',
'  if (!sb) return Promise.resolve();',
'  return sb.from("pending_devices").update({',
'    locked_by: null, locked_at: null',
'  }).eq("sn", sn).then(function(r) {',
'    if (r.error) console.warn("[Supabase] releaseLock:", r.error.message);',
'  });',
'}',
'',
'window.addEventListener("beforeunload", function() {',
'  if (batchState && batchState.currentSN) {',
'    releaseLock(batchState.currentSN);',
'  }',
'});',
'',
'// ==================== END CLOUD DATA LAYER v2 ====================',
'',
];

lines.splice(insIdx, 0, ...newCode);

// ===== REWRITE REMAINING CALLERS =====
src = lines.join('\n');

// renderPendingList: remove terminalId filter
src = src.replace(
  '  var tid = getTerminalId();\n  var myDevices = batchState.devices.filter(function(d) { return !d.terminalId || d.terminalId === tid; });',
  '  var myDevices = _pendingCache;'
);

// renderRecordsTable: replace localStorage with cache
src = src.replace(
  '  var records = [];\n  try { records = JSON.parse(localStorage.getItem("deviceTestRecords") || "[]"); } catch(e) {}',
  '  var records = _recordsCache;'
);

// toggleRecords: replace localStorage with cache
src = src.replace(
  '  var allRecords = [];\n  try { allRecords = JSON.parse(localStorage.getItem("deviceTestRecords") || "[]"); } catch(e) {}',
  '  var allRecords = _recordsCache;'
);

// exportRecords: replace localStorage with cache
src = src.replace(
  '  var records = [];\n  try { records = JSON.parse(localStorage.getItem("deviceTestRecords") || "[]"); } catch(e) {}\n  if (records.length === 0) {',
  '  var records = _recordsCache;\n  if (records.length === 0) {'
);

// init(): replace loadBatchState/syncRecordsFromCloud/migrate with refresh
src = src.replace(
  '    loadBatchState();\n    syncRecordsFromCloud();\n    setTimeout(function() { migrateLocalToCloud(); }, 2000);',
  '    refreshPendingList();\n    refreshRecordsTable();'
);

// ===== REWRITE parseAndRender =====
var prMarker = 'function parseAndRender() {';
var prIdx = src.indexOf(prMarker);
var endPr = src.indexOf('function addDevices()', prIdx);
var oldPr = src.substring(prIdx, endPr);

var newPr = `function parseAndRender() {
  var textarea = document.getElementById("batchTextarea");
  var resultEl = document.getElementById("batchParseResult");
  if (!textarea) return;

  var rawText = textarea.value;
  if (!rawText.trim()) {
    if (resultEl) { resultEl.textContent = "请先粘贴数据"; resultEl.className = "batch-parse-result warn"; }
    return;
  }

  var parsed = parseBatchInput(rawText);
  if (parsed.devices.length === 0) {
    if (resultEl) { resultEl.textContent = "未识别到设备数据，请检查格式"; resultEl.className = "batch-parse-result warn"; }
    return;
  }

  if (resultEl) { resultEl.textContent = "正在保存..."; resultEl.className = "batch-parse-result"; }

  // Preserve tested status for existing devices
  var existingMap = {};
  _pendingCache.forEach(function(d) { existingMap[d.sn] = d; });
  parsed.devices.forEach(function(d) {
    if (existingMap[d.sn]) {
      if (existingMap[d.sn].tested) d.tested = true;
      if (existingMap[d.sn].regCode && !d.regCode) d.regCode = existingMap[d.sn].regCode;
    }
  });

  batchState.currentSN = null;
  batchImportDevices(parsed.devices).then(function() {
    var msg = "";
    if (parsed.orders.length > 0) msg += "识别到 " + parsed.orders.length + " 个订单，";
    msg += "共 " + parsed.devices.length + " 台设备。已导入完成！";
    if (parsed.warnings && parsed.warnings.length > 0) msg += " 警告: " + parsed.warnings.join("; ");
    if (resultEl) { resultEl.textContent = msg; resultEl.className = "batch-parse-result ok"; }
    refreshPendingList();
    setTimeout(function() { closeBatchDialog(); }, 800);
  }).catch(function(err) {
    if (resultEl) { resultEl.textContent = "保存失败: " + err.message; resultEl.className = "batch-parse-result warn"; }
  });
}
`;

src = src.replace(oldPr, newPr);

// ===== REWRITE addDevices =====
var adMarker = 'function addDevices() {';
var adIdx = src.indexOf(adMarker);
var endAd = src.indexOf('function togglePendingDrawer()', adIdx);
var oldAd = src.substring(adIdx, endAd);

var newAd = `function addDevices() {
  var textarea = document.getElementById("batchTextarea");
  var resultEl = document.getElementById("batchParseResult");
  if (!textarea) return;

  var rawText = textarea.value;
  if (!rawText.trim()) {
    if (resultEl) { resultEl.textContent = "请先粘贴数据"; resultEl.className = "batch-parse-result warn"; }
    return;
  }

  var parsed = parseBatchInput(rawText);
  if (parsed.devices.length === 0) {
    if (resultEl) { resultEl.textContent = "未识别到设备数据，请检查格式"; resultEl.className = "batch-parse-result warn"; }
    return;
  }

  // Check against existing devices
  var existingSNs = {};
  _pendingCache.forEach(function(d) { existingSNs[d.sn] = true; });
  var newDevices = parsed.devices.filter(function(d) { return !existingSNs[d.sn]; });

  if (newDevices.length === 0) {
    if (resultEl) { resultEl.textContent = "所有设备已在列表中，无需添加"; resultEl.className = "batch-parse-result warn"; }
    return;
  }

  if (resultEl) { resultEl.textContent = "正在添加..."; resultEl.className = "batch-parse-result"; }

  batchImportDevices(newDevices).then(function() {
    if (resultEl) {
      resultEl.textContent = "新增 " + newDevices.length + " 台设备";
      resultEl.className = "batch-parse-result ok";
    }
    refreshPendingList();
    setTimeout(function() { closeAddDeviceDialog(); }, 500);
  }).catch(function(err) {
    if (resultEl) { resultEl.textContent = "保存失败: " + err.message; resultEl.className = "batch-parse-result warn"; }
  });
}
`;

src = src.replace(oldAd, newAd);

// ===== REWRITE deleteDevice =====
var ddMarker = 'function deleteDevice(sn) {';
var ddIdx = src.indexOf(ddMarker);
var endDd = src.indexOf('function deleteAllDevices()', ddIdx);
var oldDd = src.substring(ddIdx, endDd);

var newDd = `function deleteDevice(sn) {
  if (!confirm("确定要删除设备 " + sn + " 吗？")) return;
  deletePendingDevice(sn).then(function() {
    if (batchState.currentSN === sn) batchState.currentSN = null;
    refreshPendingList();
  }).catch(function(err) {
    alert("删除失败: " + err.message);
  });
}
`;

src = src.replace(oldDd, newDd);

// ===== REWRITE deleteAllDevices =====
var daMarker = 'function deleteAllDevices() {';
var daIdx = src.indexOf(daMarker);
var endDa = src.indexOf('function startBatchDevice', daIdx);
var oldDa = src.substring(daIdx, endDa);

var newDa = `function deleteAllDevices() {
  if (!confirm("确定要删除列表中所有设备吗？已测试的记录将保留。")) return;
  deleteAllPendingDevices().then(function() {
    batchState.currentSN = null;
    refreshPendingList();
  }).catch(function(err) {
    alert("删除失败: " + err.message);
  });
}
`;

src = src.replace(oldDa, newDa);

// ===== REWRITE startBatchDevice =====
var sbMarker = 'function startBatchDevice(sn) {';
var sbIdx = src.indexOf(sbMarker);
var endSb = src.indexOf('function markBatchDeviceDone', sbIdx);
var oldSb = src.substring(sbIdx, endSb);

var newSb = `function startBatchDevice(sn) {
  var device = null;
  for (var i = 0; i < _pendingCache.length; i++) {
    if (_pendingCache[i].sn === sn) { device = _pendingCache[i]; break; }
  }
  if (!device || device.tested) return;

  // Acquire optimistic lock
  var tester = stepData["tester"] || "unknown";
  var proceed = function(device) {
    batchState.currentSN = sn;
    var model = device.model;
    // Model disambiguation (same as before)
    if (model === "X1" || model === "E1" || model === "X1 Lite" || model === "E1 Lite" || model === "X1 Pro" || model === "E1 Pro") {
      if (model !== "X1") { var sel = model; model = "X1"; }
    }
    if (model === "Sfaira one" || model === "Sfaira One" || model === "Sfaira One Plus" || model === "Sfaira one plus") {
      model = "SfairaOne";
    }
    if (model === "P2" || model === "P2 Plus") {
      // Keep as-is, already correct
    }
    if (model === "SV100" || model === "SV100 Dual" || model === "SV100 INS" || model === "SV100 INS-D" || model === "SV100-INS" || model === "SV100-INS-Dual") {
      if (model.indexOf("INS") >= 0) {
        if (model.indexOf("Dual") >= 0) model = "SV100 INS-D";
        else model = "SV100 INS";
      } else if (model.indexOf("Dual") >= 0) model = "SV100 Dual";
      else model = "SV100";
    }
    if (!testStepsConfig[model]) model = "X1";

    switchTab("test");
    selectProduct(model, {
      sn: device.sn,
      order: device.order,
      country: device.country,
      regCode: device.regCode
    });
    var drawer = document.getElementById("batchDrawer");
    if (drawer) drawer.style.display = "none";
    renderPendingList();
  };

  acquireLock(sn, tester).then(function(locked) {
    if (!locked) {
      alert("该设备正在被其他人测试中，请稍后再试。");
      return;
    }
    proceed(device);
  }).catch(function() {
    // Graceful degradation: allow testing even if lock check fails
    proceed(device);
  });
}
`;

src = src.replace(oldSb, newSb);

// ===== REWRITE markBatchDeviceDone =====
var mdMarker = 'function markBatchDeviceDone(sn) {';
var mdIdx = src.indexOf(mdMarker);
var endMd = src.indexOf('function generateQRCode', mdIdx);
var oldMd = src.substring(mdIdx, endMd);

var newMd = `function markBatchDeviceDone(sn) {
  // Optimistic cache update
  for (var i = 0; i < _pendingCache.length; i++) {
    if (_pendingCache[i].sn === sn) { _pendingCache[i].tested = true; break; }
  }
  // Persist to cloud
  savePendingDevice({ sn: sn, tested: true }).catch(function(err) {
    console.warn("Failed to mark done:", err);
  });
  // Release lock
  releaseLock(sn);

  if (batchState.currentSN === sn) batchState.currentSN = null;
  renderPendingList();

  // Auto-advance to next untested
  var next = null;
  for (var j = 0; j < _pendingCache.length; j++) {
    if (!_pendingCache[j].tested) { next = _pendingCache[j]; break; }
  }
  if (next) {
    startBatchDevice(next.sn);
  } else {
    currentProduct = null;
    currentStep = 0;
    stepData = {};
    var wizard = document.getElementById("testWizard");
    if (wizard) {
      wizard.innerHTML = '<div style="text-align:center;padding:60px 20px;"><div style="width:80px;height:80px;margin:0 auto 16px;border-radius:50%;overflow:hidden;"><img src="bot-avatar.png" alt="小瓜" style="width:100%;height:100%;object-fit:cover;"></div><div style="font-size:18px;font-weight:700;color:var(--success);margin-bottom:8px;">🎉 全部测试完成！</div><div style="font-size:13px;color:var(--text-secondary);">共 ' + _pendingCache.length + ' 台设备已完成测试</div></div>';
    }
    renderProductList();
  }
}
`;

src = src.replace(oldMd, newMd);

// ===== REWRITE finishTest record saving section =====
// Find the record building + saving block
var ftIdx = src.indexOf('function finishTest() {');
var ftNext = src.indexOf('function syncRecordsFromCloud', ftIdx);
if (ftNext === -1) ftNext = src.indexOf('function renderRecordsTable', ftIdx);

// We need to surgically replace the record saving part. Find the record object construction
var recStart = src.indexOf('  var record = {', ftIdx);
var recEnd = src.indexOf('  // Mark batch device as done', recStart);

if (recStart > 0 && recEnd > recStart) {
  var oldRecordBlock = src.substring(recStart, recEnd);
  var newRecordBlock = `  var record = {
    date: dateStr,
    time: timeStr,
    country: stepData["country"] || "",
    order: stepData["order"] || "",
    tester: stepData["tester"] || "",
    model: currentProduct,
    sn: stepData["sn"] || "",
    firmware: buildFirmwareStr(stepData),
    registration: (function() {
      var reg = stepData["registration"] || "";
      if (reg === "自定义" || reg === "自定义期限") {
        reg = stepData["registration_custom"] || "自定义";
      }
      return reg;
    })(),
    regCode: stepData["regCode"] || "",
    testContent: stepData["testContent"] || stepTitles,
    importantInfo: stepData["importantInfo"] || stepData["imuReg"] || stepData["padSN"] || "",
    remark1: [stepData["imei"], stepData["remark1"]].filter(Boolean).join("; "),
    remark2: stepData["remark2"] || "",
    result: hasFail ? "fail" : "pass",
    failDetail: failRemarks.join("; "),
    stepDetails: steps.map(function(s) {
      var k = s.key || s.title;
      return { title: s.title, result: stepData[k] || "", value: stepData[k] || "" };
    })
  };

  // Save to cloud directly
  saveTestRecord(record).then(function() {
    _recordsCache.unshift(record);
    renderRecordsTable();
  }).catch(function(err) {
    alert("保存测试记录失败: " + err.message);
    _recordsCache.unshift(record);
    renderRecordsTable();
  });
`;
  src = src.replace(oldRecordBlock, newRecordBlock);
}

// Also remove persistToFile call and localStorage saving in finishTest
src = src.replace('\n    persistToFile();\n', '\n');
src = src.replace(
  '    var records = [];\n    try { records = JSON.parse(localStorage.getItem("deviceTestRecords") || "[]"); } catch(e) {}\n    records.unshift(record);\n    localStorage.setItem("deviceTestRecords", JSON.stringify(records));',
  ''
);

// ===== REWRITE deleteRecord =====
var drMarker = 'function deleteRecord(idx) {';
var drIdx = src.indexOf(drMarker);
var endDr = src.indexOf('function dateToExcelSerial', drIdx);
var oldDr = src.substring(drIdx, endDr);

var newDr = `function deleteRecord(idx) {
  if (!confirm("确定要删除这条测试记录吗？")) return;
  if (idx < 0 || idx >= _recordsCache.length) return;
  var removed = _recordsCache[idx];
  deleteTestRecord(removed.sn).then(function() {
    _recordsCache.splice(idx, 1);
    renderRecordsTable();
  }).catch(function(err) {
    alert("删除失败: " + err.message);
  });
}
`;

src = src.replace(oldDr, newDr);

console.log("Writing output...");
fs.writeFileSync('index.html', src);
console.log("Done:", src.length, "chars,", src.split('\\n').length, "lines");
