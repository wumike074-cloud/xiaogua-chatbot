// 设备测试自动保存服务
// 用法: node auto_save_server.js
// 默认端口 8765，存到当前目录 device_test_records.json

var http = require('http');
var fs = require('fs');
var path = require('path');

var PORT = process.argv[2] || 8765;
var SAVE_FILE = path.join(__dirname, 'device_test_records.json');
var BATCH_FILE = path.join(__dirname, 'batch_state.json');

// Allow CORS so the page can POST from any origin
var server = http.createServer(function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Private-Network', 'true');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // --- Batch state endpoints ---
  if (req.url === '/batch-state') {
    if (req.method === 'GET') {
      try {
        var data = fs.readFileSync(BATCH_FILE, 'utf8');
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(data);
      } catch(e) {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end('null');
      }
      return;
    }
    if (req.method === 'POST') {
      var body = '';
      req.on('data', function(chunk) { body += chunk; });
      req.on('end', function() {
        try {
          var state = JSON.parse(body);
          fs.writeFileSync(BATCH_FILE, JSON.stringify(state, null, 2), 'utf8');
          var devCount = (state && state.devices) ? state.devices.length : 0;
          console.log('[' + new Date().toLocaleTimeString() + '] 已保存待测列表 ' + devCount + ' 台设备');
          res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ ok: true, count: devCount }));
        } catch(e) {
          console.error('保存待测列表失败:', e.message);
          res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ ok: false, error: e.message }));
        }
      });
      return;
    }
  }

  // --- Test records endpoints ---
  if (req.method === 'GET') {
    try {
      var data = fs.readFileSync(SAVE_FILE, 'utf8');
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(data);
    } catch(e) {
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end('[]');
    }
    return;
  }

  if (req.method === 'POST') {
    var body = '';
    req.on('data', function(chunk) { body += chunk; });
    req.on('end', function() {
      try {
        var records = JSON.parse(body);
        fs.writeFileSync(SAVE_FILE, JSON.stringify(records, null, 2), 'utf8');
        console.log('[' + new Date().toLocaleTimeString() + '] 已保存 ' + records.length + ' 条记录');
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ ok: true, count: records.length }));
      } catch(e) {
        console.error('保存失败:', e.message);
        res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ ok: false, error: e.message }));
      }
    });
    return;
  }

  res.writeHead(404);
  res.end('Not Found');
});

server.listen(PORT, '0.0.0.0', function() {
  console.log('设备测试自动保存服务已启动');
  console.log('地址: http://localhost:' + PORT);
  console.log('存储文件: ' + SAVE_FILE);
  console.log('待测列表: ' + BATCH_FILE);
  console.log('按 Ctrl+C 停止');
});
