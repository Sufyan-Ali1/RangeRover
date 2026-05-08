"use server";

// ── Update this URL when your API is ready ──────────────────────────────────
const CONTACT_API_URL = "https://your-api-url.com/contact";
// ────────────────────────────────────────────────────────────────────────────

export interface ContactPayload {
  name: string;
  phone: string;
  email: string;
  reg: string;
  postcode: string;
  message: string;
}

export async function submitContact(data: ContactPayload): Promise<{ ok: boolean }> {
  // ── Remove this block once CONTACT_API_URL is set ───────────────────────
  if (CONTACT_API_URL.includes("your-api-url")) return { ok: true };
  // ────────────────────────────────────────────────────────────────────────
  try {
    const res = await fetch(CONTACT_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return { ok: res.ok };
  } catch {
    return { ok: false };
  }
}
