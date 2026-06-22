-- Phase 1: Create tables
CREATE TABLE IF NOT EXISTS pending_devices (
  sn TEXT PRIMARY KEY,
  model TEXT,
  order_no TEXT,
  country TEXT,
  tested BOOLEAN DEFAULT false,
  locked_by TEXT,
  locked_at TIMESTAMPTZ,
  device_data JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS test_records_v2 (
  sn TEXT PRIMARY KEY,
  model TEXT,
  order_no TEXT,
  country TEXT,
  tester TEXT,
  firmware TEXT,
  result TEXT,
  test_data JSONB DEFAULT '{}',
  tested_at TIMESTAMPTZ DEFAULT now()
);

-- RLS
ALTER TABLE pending_devices ENABLE ROW LEVEL SECURITY;
CREATE POLICY "allow_all_pending" ON pending_devices FOR ALL USING (true);

ALTER TABLE test_records_v2 ENABLE ROW LEVEL SECURITY;
CREATE POLICY "allow_all_records" ON test_records_v2 FOR ALL USING (true);

-- Migrate old data
INSERT INTO pending_devices (sn, model, order_no, country, tested, device_data, created_at)
SELECT d->>'sn', d->>'model', d->>'order', d->>'country',
  COALESCE((d->>'tested')::boolean, false), d, now()
FROM batch_state, jsonb_array_elements(data->'devices') AS d
WHERE batch_state.id = 1
ON CONFLICT (sn) DO NOTHING;

INSERT INTO test_records_v2 (sn, model, order_no, country, tester, firmware, result, test_data, tested_at)
SELECT sn, model, order_no, country, tester, firmware, 'pass',
  jsonb_build_object('registration', registered, 'importantInfo', other_info, 'remark1', imei, 'remark2', remark2),
  time::timestamptz
FROM test_records
ON CONFLICT (sn) DO NOTHING;
