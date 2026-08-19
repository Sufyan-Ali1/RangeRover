import type { Metadata } from "next";
import PrivacyPolicy from "@/app/components/PrivacyPolicy";

const siteUrl = process.env.SITE_URL || "https://www.rangerover.co.uk";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Privacy Policy | Range Rover Garage",
  description:
    "Learn about how Range Rover Garage collects, uses, and protects your personal information.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
