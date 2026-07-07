import { NextRequest, NextResponse } from "next/server";
import {
  buildPortalQuotePayload,
  getPortalConfig,
  parseJsonResponse,
  submitPortalQuote,
} from "@/lib/portal";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { websiteSlug, isConfigured } = getPortalConfig();

    if (!isConfigured) {
      return NextResponse.json(
        { error: "Server configuration error: Portal credentials missing" },
        { status: 500 }
      );
    }

    const payload = buildPortalQuotePayload(body, websiteSlug);
    const response = await submitPortalQuote(payload);
    const data = await parseJsonResponse(response);

    if (!response.ok) {
      console.error("Contact API upstream error:", response.status, data);
      return NextResponse.json(
        { error: data?.message || "Failed to submit contact inquiry to portal", details: data?.errors },
        { status: response.status }
      );
    }

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error during contact inquiry submission" },
      { status: 500 }
    );
  }
}
