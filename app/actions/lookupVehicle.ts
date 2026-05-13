"use server";

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
  const apiKey = process.env.VEHICLE_API_KEY;

  if (!apiKey) {
    return { ok: false, error: "API credentials not configured." };
  }

  const url = new URL("https://uk1.ukvehicledata.co.uk/api/datapackage/VehicleData");
  url.searchParams.set("v", "2");
  url.searchParams.set("api_nullitems", "1");
  url.searchParams.set("auth_apikey", apiKey);
  url.searchParams.set("key_VRM", vrm.replace(/\s/g, "").toUpperCase());

  try {
    const res = await fetch(url.toString(), { method: "GET" });
    if (!res.ok) return { ok: false, error: "Could not find vehicle. Please check the reg number." };

    const json = await res.json();
    const response = json?.Response ?? {};
    const items    = response?.DataItems ?? {};

    // API returns these either directly on Response or nested under DataItems
    const vState = response?.VehicleRegistration ?? items?.VehicleRegistration ?? {};
    const smmt   = response?.SmmtDetails         ?? items?.SmmtDetails         ?? {};

    const technical   = items?.TechnicalDetails ?? {};
    const engine      = technical?.General?.Engine ?? technical?.Engine ?? {};
    const performance = technical?.Performance ?? {};

    if (!vState.Make) return { ok: false, error: "No vehicle found for this reg number." };

    const make       = String(vState.Make ?? "");
    const model      = String(vState.Model ?? "");
    const year       = String(vState.YearOfManufacture ?? "");
    const colour     = String(vState.Colour ?? "");
    const fuelType   = String(vState.FuelType ?? "");
    const rawSize    = String(vState.EngineCapacity ?? "");

    const parts = [year, make, model, colour, fuelType, rawSize ? `${rawSize}cc` : ""].filter(Boolean);

    return {
      ok: true,
      vehicle: {
        make,
        model,
        year,
        colour,
        fuelType,
        engineSize:    rawSize,
        description:   parts.join(" "),
        vin:           String(vState.Vin ?? ""),
        engineNumber:  String(vState.EngineNumber ?? ""),
        transmission:  String(vState.TransmissionType ?? vState.Transmission ?? ""),
        co2:           String(vState.Co2Emissions ?? ""),
        wheelPlan:     String(smmt.DriveType ?? vState.WheelPlan ?? ""),
        bodyStyle:     String(smmt.BodyStyle ?? vState.DoorPlanLiteral ?? ""),
        numberOfDoors: String(smmt.NumberOfDoors ?? ""),
        driveType:     String(smmt.DriveType ?? ""),
        seatingCapacity: String(vState.SeatingCapacity ?? ""),
        aspiration:    String(engine.Aspiration ?? ""),
        maxBhp:        String(engine.MaxBhp ?? performance?.Power?.Bhp ?? ""),
        engineCode:    String(engine.EngineCode ?? ""),
      },
    };
  } catch {
    return { ok: false, error: "Something went wrong. Please try again." };
  }
}
