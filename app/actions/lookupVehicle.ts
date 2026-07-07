"use server";

import {
  buildPortalVrmSearchUrl,
  getPortalConfig,
  getPortalHeaders,
  parseJsonResponse,
} from "@/lib/portal";

export interface VehicleResult {
  make: string;
  model: string;
  year: string;
  colour: string;
  fuelType: string;
  engineSize: string;
  description: string;
  vin: string;
  engineNumber: string;
  transmission: string;
  co2: string;
  wheelPlan: string;
  bodyStyle: string;
  numberOfDoors: string;
  driveType: string;
  seatingCapacity: string;
  aspiration: string;
  maxBhp: string;
  engineCode: string;
}

export async function lookupVehicle(vrm: string): Promise<{ ok: true; vehicle: VehicleResult } | { ok: false; error: string }> {
  const cleanVrm = vrm.replace(/\s/g, "").toUpperCase();
  const { isConfigured } = getPortalConfig();

  if (!isConfigured) {
    return { ok: false, error: "API credentials not configured." };
  }

  try {
    const res = await fetch(buildPortalVrmSearchUrl(cleanVrm), {
      method: "GET",
      headers: getPortalHeaders(),
      cache: "no-store",
    });

    if (!res.ok) return { ok: false, error: "Could not find vehicle. Please check the reg number." };

    const json = await parseJsonResponse(res);
    const vehicle = json?.data ?? {};

    const make = String(vehicle.make ?? "");
    if (!make) return { ok: false, error: "No vehicle found for this reg number." };

    const model = String(vehicle.model ?? "");
    const year = String(vehicle.year ?? "");
    const colour = String(vehicle.color ?? "");
    const fuelType = String(vehicle.fuel ?? vehicle.fuel_type ?? "");
    const rawSize = String(vehicle.size ?? vehicle.engine_size ?? "");

    const parts = [year, make, model, colour, fuelType, rawSize ? `${rawSize}cc` : ""].filter(Boolean);

    return {
      ok: true,
      vehicle: {
        make,
        model,
        year,
        colour,
        fuelType,
        engineSize: rawSize,
        description: parts.join(" "),
        vin: String(vehicle.vin ?? ""),
        engineNumber: String(vehicle.engine_number ?? ""),
        transmission: String(vehicle.transmission ?? ""),
        co2: String(vehicle.co2 ?? vehicle.co2_emissions ?? ""),
        wheelPlan: String(vehicle.wheel_plan ?? ""),
        bodyStyle: String(vehicle.body_type ?? vehicle.body_style ?? ""),
        numberOfDoors: String(vehicle.number_of_doors ?? ""),
        driveType: String(vehicle.wheel_plan ?? ""),
        seatingCapacity: String(vehicle.seat_capacity ?? ""),
        aspiration: String(vehicle.aspiration ?? ""),
        maxBhp: String(vehicle.maximum_bhp ?? ""),
        engineCode: String(vehicle.engine_code ?? ""),
      },
    };
  } catch {
    return { ok: false, error: "Something went wrong. Please try again." };
  }
}
