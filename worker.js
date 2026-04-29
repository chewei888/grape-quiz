/**
 * Cloudflare Worker — grape-quiz storage fallback proxy
 *
 * Purpose
 *   Forward POSTs from the browser to the Google Apps Script endpoint
 *   server-side, so users in regions where script.google.com is unreachable
 *   (mainland China) can still land their result row in the same Sheet.
 *
 * Deploy
 *   1. Cloudflare dashboard → Workers & Pages → Create application → Create
 *      Worker → name it (e.g. "grape-quiz-collector") → Deploy.
 *   2. Click "Edit code", replace the default with this entire file, then
 *      "Save and deploy".
 *   3. Note the URL Cloudflare shows you (e.g.
 *      https://grape-quiz-collector.<your-sub>.workers.dev/). Paste it into
 *      script.js → CONFIG.WORKER_URL.
 *   4. Verify by opening the URL in a browser — should return
 *      {"ok":true,"msg":"grape-quiz collector (cf)"}.
 *
 * Notes
 *   The shared token below MUST match CONFIG.SHARED_TOKEN in script.js and
 *   SHARED_TOKEN in the Apps Script. It is not secret-grade — it just blocks
 *   casual drive-by writes from random IPs.
 *   Cloudflare's outbound to Google is unaffected by the GFW, so the Apps
 *   Script forward works even when the browser cannot reach Google directly.
 */

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzOB8H5_0VdV8CjgVLX7cGklMBRuDCwU_XwelLoUNG33NGp6Hh_46tQ-7mOLSGC5suA/exec";
const SHARED_TOKEN = "gq_4tT9pX8nW2qRkLm6vYz3JhCdFsGbQ7eu";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin":  "*",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age":       "86400"
};

function jsonResponse(obj, status) {
  return new Response(JSON.stringify(obj), {
    status: status || 200,
    headers: { "Content-Type": "application/json", ...CORS_HEADERS }
  });
}

export default {
  async fetch(request) {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }
    if (request.method === "GET") {
      return jsonResponse({ ok: true, msg: "grape-quiz collector (cf)" }, 200);
    }
    if (request.method !== "POST") {
      return jsonResponse({ ok: false, error: "method_not_allowed" }, 405);
    }

    let body;
    try {
      body = JSON.parse(await request.text());
    } catch (_) {
      return jsonResponse({ ok: false, error: "bad_json" }, 400);
    }
    if (!body || body.token !== SHARED_TOKEN) {
      return jsonResponse({ ok: false, error: "forbidden" }, 403);
    }
    if (!body.session_id || typeof body.session_id !== "string") {
      return jsonResponse({ ok: false, error: "bad_session" }, 400);
    }

    // Stamp the row as proxied. Overrides whatever the client claimed so the
    // Sheet is the source of truth for "did this come through Cloudflare?".
    body.source = "worker";

    try {
      // Forward to Apps Script. CF → Google works fine (no GFW on outbound
      // from Cloudflare's edge). Apps Script accepts text/plain bodies and
      // parses contents as JSON.
      const upstream = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=UTF-8" },
        body: JSON.stringify(body),
        // Apps Script can be slow on cold start; give it 8s.
        signal: AbortSignal.timeout(8000)
      });
      // Apps Script returns redirect chains and odd statuses but the row
      // does land in the Sheet. Don't surface upstream non-2xx as our error.
      return jsonResponse({ ok: true, upstream_status: upstream.status }, 200);
    } catch (e) {
      return jsonResponse({ ok: false, error: "upstream_failed", detail: String(e) }, 502);
    }
  }
};
