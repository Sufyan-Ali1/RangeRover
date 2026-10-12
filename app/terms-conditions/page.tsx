import type { Metadata } from "next";
import TermsAndConditions from "@/app/components/TermsAndConditions";

const siteUrl = process.env.SITE_URL || "https://www.rangerover.co.uk";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Terms and Conditions | Range Rover Garage",
  description:
    "Review the terms and conditions governing your use of Range Rover Garage services and website.",
  alternates: {
    canonical: "/terms-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return <TermsAndConditions />;
}
