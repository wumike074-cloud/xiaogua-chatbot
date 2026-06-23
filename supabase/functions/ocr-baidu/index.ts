import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

const BAIDU_OCR_API_KEY = Deno.env.get("BAIDU_OCR_API_KEY") || "";
const BAIDU_OCR_SECRET_KEY = Deno.env.get("BAIDU_OCR_SECRET_KEY") || "";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const { image } = await req.json();
    if (!image) {
      return new Response(JSON.stringify({ error: "No image provided" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Strip data URL prefix if present
    const base64 = image.replace(/^data:image\/\w+;base64,/, "");

    // Step 1: Get Baidu access token
    const tokenUrl = `https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=${encodeURIComponent(BAIDU_OCR_API_KEY)}&client_secret=${encodeURIComponent(BAIDU_OCR_SECRET_KEY)}`;

    const tokenRes = await fetch(tokenUrl, { method: "POST" });
    const tokenData = await tokenRes.json();

    if (!tokenRes.ok || !tokenData.access_token) {
      console.error("Baidu auth failed:", tokenData);
      return new Response(
        JSON.stringify({ error: "OCR auth failed", detail: tokenData.error_description || tokenData.error }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const accessToken = tokenData.access_token;

    // Step 2: Call Baidu Accurate OCR
    const ocrUrl = `https://aip.baidubce.com/rest/2.0/ocr/v1/accurate_basic?access_token=${encodeURIComponent(accessToken)}`;
    const ocrBody = new URLSearchParams();
    ocrBody.append("image", base64);
    ocrBody.append("detect_direction", "false");
    ocrBody.append("paragraph", "false");

    const ocrRes = await fetch(ocrUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: ocrBody.toString(),
    });
    const ocrData = await ocrRes.json();

    if (!ocrRes.ok || ocrData.error_code) {
      console.error("Baidu OCR failed:", ocrData);
      return new Response(
        JSON.stringify({ error: "OCR recognition failed", detail: ocrData.error_msg || ocrData.error }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Step 3: Join recognized words into text
    const words = (ocrData.words_result || []).map((w: { words: string }) => w.words);
    const text = words.join("\n");

    return new Response(JSON.stringify({ text }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
