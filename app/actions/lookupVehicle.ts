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

type LookupFailureCode = "not_found" | "unavailable" | "invalid_registration";

const unavailableMessage = "Vehicle lookup is temporarily unavailable. Please enter your vehicle details manually.";

export async function lookupVehicle(vrm: string): Promise<{ ok: true; vehicle: VehicleResult } | { ok: false; code: LookupFailureCode; error: string }> {
  const cleanVrm = vrm.replace(/\s/g, "").toUpperCase();
  if (!/^[A-Z0-9]{1,8}$/.test(cleanVrm)) {
    return { ok: false, code: "invalid_registration", error: "Please enter a valid registration number." };
  }
  const { isConfigured } = getPortalConfig();

  if (!isConfigured) {
    return { ok: false, code: "unavailable", error: unavailableMessage };
  }

  try {
    const res = await fetch(buildPortalVrmSearchUrl(cleanVrm), {
      method: "GET",
      headers: getPortalHeaders(),
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });

    if (res.status === 404) {
      return { ok: false, code: "not_found", error: "Could not find vehicle. Please check the reg number." };
    }
    if (!res.ok) return { ok: false, code: "unavailable", error: unavailableMessage };

    const json = await parseJsonResponse(res);
    if ((!json?.data && !json?.vehicleRegistration) || json.status === "error" || json.success === false) {
      return { ok: false, code: "unavailable", error: unavailableMessage };
    }
    const vehicle = json?.data ?? {};
    const registration = json?.vehicleRegistration ?? {};
    const smmt = json?.smmtDetails ?? {};
    const engine = json?.engine ?? {};
    const performance = json?.performance ?? {};

    const make = String(vehicle.make ?? registration.Make ?? "");
    if (!make) return { ok: false, code: "not_found", error: "No vehicle found for this reg number." };

    const model = String(vehicle.model ?? registration.Model ?? "");
    const year = String(vehicle.year ?? registration.YearOfManufacture ?? "");
    const colour = String(vehicle.color ?? registration.Colour ?? "");
    const fuelType = String(vehicle.fuel ?? vehicle.fuel_type ?? registration.FuelType ?? "");
    const rawSize = String(vehicle.size ?? vehicle.engine_size ?? registration.EngineCapacity ?? "");

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
        vin: String(vehicle.vin ?? registration.Vin ?? ""),
        engineNumber: String(vehicle.engine_number ?? registration.EngineNumber ?? ""),
        transmission: String(vehicle.transmission ?? registration.TransmissionType ?? registration.Transmission ?? ""),
        co2: String(vehicle.co2 ?? vehicle.co2_emissions ?? registration.Co2Emissions ?? ""),
        wheelPlan: String(vehicle.wheel_plan ?? smmt.DriveType ?? registration.WheelPlan ?? ""),
        bodyStyle: String(vehicle.body_type ?? vehicle.body_style ?? smmt.BodyStyle ?? registration.DoorPlanLiteral ?? ""),
        numberOfDoors: String(vehicle.number_of_doors ?? smmt.NumberOfDoors ?? ""),
        driveType: String(vehicle.wheel_plan ?? smmt.DriveType ?? ""),
        seatingCapacity: String(vehicle.seat_capacity ?? registration.SeatingCapacity ?? ""),
        aspiration: String(vehicle.aspiration ?? engine.Aspiration ?? ""),
        maxBhp: String(vehicle.maximum_bhp ?? engine.MaxBhp ?? performance.Power?.Bhp ?? ""),
        engineCode: String(vehicle.engine_code ?? smmt.EngineCode ?? ""),
      },
    };
  } catch {
    return { ok: false, code: "unavailable", error: unavailableMessage };
  }
}
