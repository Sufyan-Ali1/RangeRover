import type { Metadata } from "next";
import TermsAndConditions from "@/app/components/TermsAndConditions";

export const metadata: Metadata = {
  title: "Terms and Conditions | Range Rover Garage",
  description:
    "Review the terms and conditions governing your use of Range Rover Garage services and website.",
};

export default function TermsAndConditionsPage() {
  return <TermsAndConditions />;
}
