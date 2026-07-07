"use server";

import {
  buildPortalQuotePayload,
  getPortalConfig,
  parseJsonResponse,
  submitPortalQuote,
} from "@/lib/portal";
import type { VehicleResult } from "./lookupVehicle";

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
  const { websiteSlug, isConfigured } = getPortalConfig();

  if (!isConfigured) {
    return { ok: false, message: "API credentials not configured." };
  }

  const v = data.vehicle;
  const payload = buildPortalQuotePayload(
    {
      reg: data.reg,
      name: data.name,
      phone: data.phone,
      email: data.email,
      postcode: data.postcode,
      issue: data.issue,
      make: v?.make,
      model: v?.model,
      fuel: v?.fuelType,
      year: v?.year,
      size: v?.engineSize,
      engine_code: v?.engineCode,
      engine_number: v?.engineNumber,
      vin: v?.vin,
      color: v?.colour,
      body_type: v?.bodyStyle,
      body_style: v?.bodyStyle,
      number_of_doors: v?.numberOfDoors,
      seat_capacity: v?.seatingCapacity,
      wheel_plan: v?.wheelPlan,
      aspiration: v?.aspiration,
      maximum_bhp: v?.maxBhp,
      transmission: v?.transmission,
      co2: v?.co2,
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
