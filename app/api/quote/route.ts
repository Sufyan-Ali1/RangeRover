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
      console.error("Quote API upstream error:", response.status, data);
      return NextResponse.json(
        { error: data?.message || "Failed to submit quote to portal", details: data?.errors },
        { status: response.status }
      );
    }

    return NextResponse.json(data, { status: response.status });
  } catch {
    return NextResponse.json(
      { error: "Internal server error during quote submission" },
      { status: 500 }
    );
  }
}
