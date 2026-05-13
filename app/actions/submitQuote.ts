"use server";

import type { VehicleResult } from "./lookupVehicle";

const QUOTE_API_URL = "https://portal.rangerovergarage.co.uk/api/quote";

export interface QuotePayload {
  reg: string;
  name: string;
  email: string;
  phone: string;
  postcode: string;
  issue: string;
  browser: string;
  vehicle?: VehicleResult;
}

export async function submitQuote(data: QuotePayload): Promise<{ ok: boolean; message?: string }> {
  const username = process.env.PORTAL_USERNAME ?? "";
  const password = process.env.PORTAL_PASSWORD ?? "";

  const v = data.vehicle;

  const fields: Record<string, string> = {
    website_name:   "range-rover-garage",
    name:           data.name,
    phone:          data.phone,
    email:          data.email,
    postcode:       data.postcode,
    vrm:            data.reg,
    issue:          data.issue,
    browser:        data.browser,
    ip_address:     "Client-Side",
    // vehicle fields — empty strings when not found
    make:           v?.make           ?? "",
    model:          v?.model          ?? "",
    fuel:           v?.fuelType       ?? "",
    year:           v?.year           ?? "",
    size:           v?.engineSize     ?? "",
    engine_code:    v?.engineCode     ?? "",
    engine_number:  v?.engineNumber   ?? "",
    vin:            v?.vin            ?? "",
    color:          v?.colour         ?? "",
    body_type:      v?.bodyStyle      ?? "",
    body_style:     v?.bodyStyle      ?? "",
    number_of_doors: v?.numberOfDoors ?? "",
    seat_capacity:  v?.seatingCapacity ?? "",
    wheel_plan:     v?.wheelPlan      ?? "",
    aspiration:     v?.aspiration     ?? "",
    maximum_bhp:    v?.maxBhp         ?? "",
    transmission:   v?.transmission   ?? "",
    co2:            v?.co2            ?? "",
  };

  const formData = new FormData();
  Object.entries(fields).forEach(([key, value]) => formData.append(key, value));

  try {
    const res = await fetch(QUOTE_API_URL, {
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
