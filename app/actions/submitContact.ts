"use server";

import {
  buildPortalQuotePayload,
  getPortalConfig,
  parseJsonResponse,
  submitPortalQuote,
} from "@/lib/portal";

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
  if (!data.name?.trim() || !/^[A-Za-z0-9 ]+$/.test(data.name)) {
    return { ok: false, message: "Name can only contain letters, numbers and spaces." };
  }

  if (!data.postcode?.trim()) {
    return { ok: false, message: "Postcode is required." };
  }

  const { websiteSlug, isConfigured } = getPortalConfig();

  if (!isConfigured) {
    return { ok: false, message: "API credentials not configured." };
  }

  const payload = buildPortalQuotePayload(
    {
      reg: data.reg,
      name: data.name,
      phone: data.phone,
      email: data.email,
      postcode: data.postcode,
      message: data.message,
    },
    websiteSlug
  );

  try {
    const res = await submitPortalQuote(payload);
    const json = await parseJsonResponse(res);
    const message: string | undefined = json?.message;

    if (res.ok) return { ok: true, message };

    return { ok: false, message: message ?? "Something went wrong. Please try again or call us directly." };
  } catch {
    return { ok: false, message: "Something went wrong. Please try again or call us directly." };
  }
}
