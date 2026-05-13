"use server";

const CONTACT_API_URL = "https://portal.rangerovergarage.co.uk/api/quote";

export interface ContactPayload {
  name: string;
  phone: string;
  email: string;
  reg: string;
  postcode: string;
  message: string;
  browser: string;
}

export async function submitContact(data: ContactPayload): Promise<{ ok: boolean; message?: string }> {
  const username = process.env.PORTAL_USERNAME ?? "";
  const password = process.env.PORTAL_PASSWORD ?? "";

  const fields: Record<string, string> = {
    website_name: "range-rover-garage",
    name:         data.name,
    phone:        data.phone,
    email:        data.email,
    postcode:     data.postcode,
    vrm:          data.reg,
    issue:        data.message,
    browser:      data.browser,
    ip_address:   "Client-Side",
  };

  const formData = new FormData();
  Object.entries(fields).forEach(([key, value]) => formData.append(key, value));

  try {
    const res = await fetch(CONTACT_API_URL, {
      method: "POST",
      headers: { username, password },
      body: formData,
    });
    const json = await res.json().catch(() => null);
    const message: string | undefined = json?.message;
    if (res.ok && json?.success) return { ok: true, message };
    return { ok: false, message: message ?? "Something went wrong. Please try again or call us directly." };
  } catch {
    return { ok: false, message: "Something went wrong. Please try again or call us directly." };
  }
}
