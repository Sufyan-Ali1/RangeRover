import { NextRequest, NextResponse } from "next/server";
import {
  buildPortalVrmSearchUrl,
  getPortalConfig,
  getPortalHeaders,
  parseJsonResponse,
} from "@/lib/portal";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const vrm = (searchParams.get("vrm") || "").replace(/\s/g, "").toUpperCase();

  if (!vrm) {
    return NextResponse.json(
      { error: "Vehicle Registration Mark (VRM) is required" },
      { status: 400 }
    );
  }

  if (vrm.length > 8) {
    return NextResponse.json(
      { error: "Vehicle Registration Mark (VRM) must be 8 characters or fewer" },
      { status: 422 }
    );
  }

  const { isConfigured } = getPortalConfig();

  if (!isConfigured) {
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }

  try {
    const response = await fetch(buildPortalVrmSearchUrl(vrm), {
      headers: getPortalHeaders(),
      cache: "no-store",
    });

    const data = await parseJsonResponse(response);

    if (!response.ok) {
      return NextResponse.json(
        { error: data?.message || "Failed to fetch vehicle data" },
        { status: response.status }
      );
    }

    const vehicle = data?.data || {};

    return NextResponse.json({
      success: data?.success ?? true,
      message: data?.message || "Success",
      data: vehicle,
      response: data?.response,
      responseFrom: data?.responseFrom,
      vehicleRegistration: {
        Make: vehicle.make || "",
        Model: vehicle.model || "",
        MakeModel: vehicle.model || vehicle.make || "",
        FuelType: vehicle.fuel || vehicle.fuel_type || "",
        YearOfManufacture: vehicle.year || "",
        EngineCapacity: vehicle.size || vehicle.engine_size || "",
        EngineNumber: vehicle.engine_number || "",
        Vin: vehicle.vin || "",
        Colour: vehicle.color || "",
        DoorPlanLiteral: vehicle.body_type || vehicle.body_style || "",
        SeatingCapacity: vehicle.seat_capacity || "",
        WheelPlan: vehicle.wheel_plan || "",
        TransmissionType: vehicle.transmission || "",
        Transmission: vehicle.transmission || "",
        Co2Emissions: vehicle.co2 || vehicle.co2_emissions || "",
      },
      smmtDetails: {
        EngineCode: vehicle.engine_code || "",
        BodyStyle: vehicle.body_style || vehicle.body_type || "",
        NumberOfDoors: vehicle.number_of_doors || "",
        DriveType: vehicle.wheel_plan || "",
      },
      engine: {
        Aspiration: vehicle.aspiration || "",
        MaxBhp: vehicle.maximum_bhp || "",
        EngineType: vehicle.engine_type || "",
      },
      performance: {},
      vrm,
    });
  } catch {
    return NextResponse.json({ error: "Failed to fetch vehicle data" }, { status: 500 });
  }
}
