"use server";

// ── Update this URL when your API is ready ──────────────────────────────────
const QUOTE_API_URL = "https://your-api-url.com/quote";
// ────────────────────────────────────────────────────────────────────────────

export interface QuotePayload {
  reg: string;
  name: string;
  email: string;
  phone: string;
  postcode: string;
  issue: string;
}

export async function submitQuote(data: QuotePayload): Promise<{ ok: boolean }> {
  // ── Remove this block once QUOTE_API_URL is set ──────────────────────────
  if (QUOTE_API_URL.includes("your-api-url")) return { ok: true };
  // ────────────────────────────────────────────────────────────────────────
  try {
    const res = await fetch(QUOTE_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return { ok: res.ok };
  } catch {
    return { ok: false };
  }
}
