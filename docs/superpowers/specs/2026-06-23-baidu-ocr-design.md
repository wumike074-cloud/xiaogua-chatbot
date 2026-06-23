# Baidu OCR Integration Design

## Context

Tesseract.js browser-side OCR failed to produce usable output for device label photos over 3 iterations (raw, preprocessed+whitelist, simplified scale-up). Labels have dense text with SNs, order numbers, and registration codes on a white background. The user wants fully automatic recognition: upload photo → clean device list ready for import, no manual editing.

## Architecture

```
Camera/Gallery → Browser (base64) → Supabase Edge Function → Baidu OCR API
                                         ↑                        ↓
                                   Secrets (server-side)      Recognized text
                                                                  ↓
                                  Browser receives text → auto parseBatchInput()
                                    → Show result summary (N devices, M orders)
                                    → User confirms → import
```

## Changes

### New: Supabase Edge Function `ocr-baidu`

**File**: `supabase/functions/ocr-baidu/index.ts`

- Accepts POST `{ image: "<base64 data URL or raw base64>" }`
- Calls Baidu OAuth `/oauth/2.0/token` to get `access_token` using API Key + Secret Key
- Calls Baidu Accurate OCR `/rest/2.0/ocr/v1/accurate_basic` with the image
- Returns `{ text: "<recognized text lines>" }` on success
- Handles errors: invalid image, Baidu API errors, auth failures
- All keys stored as Supabase secrets, never exposed to frontend

### Frontend changes (index.html)

**Remove**:
- Tesseract.js CDN `<script>` tag
- `_ocrBusy` guard variable
- All Tesseract-related logic in `handleImageUpload`

**Modify `handleImageUpload`**:
- Read file as base64 via `FileReader.readAsDataURL()`
- Show loading progress on button
- POST to `<SUPABASE_FUNCTION_URL>/ocr-baidu`
- On success: fill textarea with recognized text, then auto-invoke `parseBatchInput` on that text
- Show parse result (device count, warnings) directly — user no longer needs to click "解析"
- Keep the "解析" button for cases where user pastes text manually

**CSS**: No changes needed (existing `.batch-upload-btn` reused)

### Environment variables

Added in Supabase Dashboard → Project Settings → Edge Functions Secrets:

| Variable | Value |
|----------|-------|
| `BAIDU_OCR_API_KEY` | `GhSimvOtDNx9r5Rw5NwHucni` |
| `BAIDU_OCR_SECRET_KEY` | `CnsYo2Mp7OU48M14aQgRHSdllJdmbscg` |

### Data flow

1. User takes photo of device label → uploads in batch import or add device dialog
2. `handleImageUpload` reads file as base64 (strips `data:image/...;base64,` prefix if needed by Baidu API)
3. POST `{ image: base64 }` to Edge Function
4. Edge Function: get access_token → call Baidu OCR → return `{ text }`
5. Browser: textarea.value = text, then `parseAndRender()` or `addDevices()` auto-called
6. `parseBatchInput` regex extracts SNs, order numbers (XYZ/SXH prefix), registration codes (64-char hex or BF prefix)
7. Result shown: "识别 N 台设备" — user confirms, devices loaded into pending list

### Error handling

- Baidu OCR API unreachable → show "识别失败: 网络错误，请稍后重试"
- Baidu OCR returns no text → show "未识别到文字，请确认照片清晰"
- Edge Function not deployed → show "OCR 服务未就绪"
- Image too large (>4MB) → compress before upload (canvas resize to max 2048px)
- 429 rate limit → wait and retry once

### Edge cases

- Image with no device labels → OCR returns random text, `parseBatchInput` returns 0 devices, show "未识别到设备数据"
- Poor quality photo → Baidu OCR returns partial text, parser extracts whatever it can, show warning count
- Multiple photos uploaded sequentially → handled by existing `_ocrBusy`-equivalent guard

## Verification

1. Upload the label photo that failed with Tesseract → verify clean SN + order extraction
2. Test with a variety of device labels → verify model detection from snDB
3. Test with empty/invalid image → verify graceful error message
4. Test with image containing no devices → verify "未识别到设备数据"
5. Confirm API keys NOT visible in browser DevTools → verify Edge Function proxy works
