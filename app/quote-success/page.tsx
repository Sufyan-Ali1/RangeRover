import QuoteSuccess from "../components/QuoteSuccess";
const siteUrl = process.env.SITE_URL || "https://www.rangerover.co.uk";
export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Quote Received | Range Rover Engines",
  description:
    "Thank you for requesting a quote for Range Rover or Land Rover engine repair, replacement, or rebuild. Our team will review your request and get back to you shortly.",
  alternates: {
    canonical: "/quote-success",
  },
};

export default function QuoteSuccessPage() {
  return <QuoteSuccess />;
}
