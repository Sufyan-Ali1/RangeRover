import type { Metadata } from "next";
import PrivacyPolicy from "@/app/components/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy | Range Rover Garage",
  description:
    "Learn about how Range Rover Garage collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
