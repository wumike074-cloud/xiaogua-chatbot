# 待测列表 & 测试记录 — Supabase 云端存储设计

**日期:** 2026-06-18  
**状态:** 待实现  
**目标:** 把 `batchState`（待测列表）和 `deviceTestRecords`（测试记录）从纯浏览器端存储迁移到 Supabase 云端，团队共享数据，清除浏览器缓存不丢失。

---

## 架构

```
GitHub Pages (index.html)
    │  Supabase JS SDK (cdn)
    ▼
Supabase 云数据库 (免费层)
    ├── batch_state 表     — 待测列表（1 行，团队共享）
    └── test_records 表    — 测试记录（多行，团队共享）
```

- 不需要后端服务，前端通过 Supabase JS SDK 直接读写数据库
- 不需要用户系统、不需要登录
- 免费额度：500MB 数据库、50,000 月活用户、每月 2GB 传输

---

## 数据库表设计

### `batch_state` — 待测列表

| 列 | 类型 | 说明 |
|----|------|------|
| `id` | int8, PK, 固定为 1 | 单行模式，整个团队共享一条记录 |
| `data` | jsonb | 完整的 batchState 对象 `{devices, orders, currentSN}` |
| `updated_at` | timestamptz, default now() | 自动更新时间戳 |

**为什么单行？** 团队共享一份待测列表，不需要多行。用 `upsert on id=1` 写入。

### `test_records` — 测试记录

| 列 | 类型 | 说明 |
|----|------|------|
| `id` | int8, PK, auto-increment | 自增主键 |
| `time` | text | 测试时间 |
| `country` | text | 发货国家 |
| `order_no` | text | 订单号 |
| `tester` | text | 测试人 |
| `model` | text | 设备型号 |
| `sn` | text | SN |
| `firmware` | text | 固件版本 |
| `registered` | text | 注册情况 |
| `other_info` | text | 其他重要信息 |
| `imei` | text | IMEI号 |
| `remark2` | text | 备注2 |
| `created_at` | timestamptz, default now() | 创建时间 |

### Row Level Security (RLS)

两张表启用 RLS，策略设为 `true`（公开读写）。因为 GitHub Pages 是公开页面，且团队内数据共享，不需要行级权限控制。

---

## 数据同步策略

### 初始化（页面加载时）

1. 连 Supabase 读取 `batch_state`（id=1）
2. 如果服务端有数据 → 覆盖本地 localStorage 和内存中的 `batchState`
3. 如果服务端为空 → 把本地 localStorage 的数据推上去（首次迁移）
4. 连 Supabase 读取 `test_records` 全表
5. 合并到本地（以 id 去重）

### 写入（本地有变更时）

| 操作 | 触发时机 | Supabase 操作 |
|------|---------|--------------|
| 新增设备 / 批量导入 | 立即 | `upsert` batch_state |
| 标记已测 | 立即 | `upsert` batch_state + `insert` test_record |
| 删除设备 | 立即 | `upsert` batch_state |
| 删除全部 | 立即 | `upsert` batch_state |
| 删除单条测试记录 | 立即 | `delete` from test_records |

### 同步时机

- 打开测试面板 / 点击"待测列表"按钮 → 拉取最新 batch_state
- 切换标签到"设备测试" → 拉取最新 batch_state
- 定期轮询：每 30 秒静默拉取一次，保持多端同步

### 冲突处理

后写覆盖先写。操作频率低（几分钟一台设备），实际冲突概率很低。冲突后果最多是丢失一次标记操作，可从测试记录中补回。

### 离线兜底

- Supabase 不可达 → 退回到 localStorage 读写，数据不丢
- 网络恢复后 → 下次操作时自动推送本地数据到 Supabase
- 用户感知不到异常

---

## 前端改动范围

### 新增依赖

```html
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
```

### 改动点

1. **新增 Supabase 客户端初始化**（~10 行）
2. **新增 `saveBatchToCloud()` / `loadBatchFromCloud()`** 函数（~40 行）
3. **新增 `saveRecordToCloud()` / `loadRecordsFromCloud()`** 函数（~40 行）
4. **修改 `saveBatchState()`** — 写 localStorage 后追加写 Supabase（~3 行）
5. **修改测试记录保存逻辑** — 写 localStorage 后追加写 Supabase（~3 行）
6. **修改 `loadBatchState()`** — 先从云端拉取再 fallback 本地（~10 行）
7. **修改 `buildPendingDrawer()` 触发点** — 打开前从云端拉取（~5 行）

### 不改变

- IndexedDB 自动存储逻辑保持不变
- Excel 导出逻辑不变
- 用户界面不变
- 现有的 `auto_save_server.js` 不动

---

## 安全考量

- Supabase API key（anon key）在前端是公开的，这是设计如此
- RLS 策略设为公开读写（因为团队共享，且无用户系统）
- 不存储敏感个人信息（当前数据：设备 SN、订单号、测试结果 — 非敏感）

---

## 迁移步骤

1. 创建 Supabase 项目，拿到 URL 和 anon key
2. 在 Supabase SQL Editor 中创建两张表 + 设置 RLS
3. 前端引入 SDK，初始化客户端
4. 实现云端读写函数
5. 修改现有 `saveBatchState` / `loadBatchState` / 测试记录保存逻辑
6. 首次启动时自动将 localStorage 存量数据迁移到云端
7. 测试：多标签/多设备/清缓存场景
