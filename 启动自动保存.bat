@echo off
title 设备测试自动保存服务
echo.
echo   设备测试自动保存服务
echo   存储文件: device_test_records.json
echo   关闭此窗口即停止服务
echo.
node auto_save_server.js
pause
