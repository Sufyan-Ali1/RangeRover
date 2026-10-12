import Navbar from "../components/Navbar";
import SupplyFitHero from "../components/SupplyFitHero";
import SupplyFitPrecision from "../components/SupplyFitPrecision";
import SupplyFitWorkflow from "../components/SupplyFitWorkflow";
import SupplyFitCTA from "../components/SupplyFitCTA";
import SupplyFitContent from "../components/SupplyFitContent";
import AuthorityNationwide from "../components/AuthorityNationwide";
import AuthorityPrecision from "../components/AuthorityPrecision";
import { supplyFitPrecision } from "../data/supplyFit/supplyFitPrecision";
import { supplyFitNationwide } from "../data/supplyFit/SupplyFitNationwide";
import SupplyFitGetParts from "../components/SupplyFitGetParts";
import SupplyFitCatalogue from "../components/SupplyFitCatalogue";
import SupplyFitEnginesQuote from "../components/SupplyFitEnginesQuote";
import SupplyFitFAQ from "../components/SupplyFitFAQ";
import Footer from "../components/Footer";
import { whyData } from "../data/supplyFit/WhyData";
import { supplyFitGetParts } from "../data/supplyFit/supplyFitGet";
const siteUrl = process.env.SITE_URL || "https://www.rangerover.co.uk";
export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Range Rover Engine Supply and Fit | Genuine OEM Parts",
  description:
    "Genuine and OEM Range Rover engine supply and fit, professionally installed by JLR specialists in Essex. 12-month warranty, same-day fitting. Get a free quote.",
  alternates: {
    canonical: "/supply-fit",
  },
};

export default function SupplyFitPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <SupplyFitHero />
      <SupplyFitEnginesQuote />
      <SupplyFitCatalogue />
      <SupplyFitPrecision data={whyData} />
      <SupplyFitWorkflow />
      <SupplyFitCTA />
      <SupplyFitContent />
      <SupplyFitGetParts data={supplyFitGetParts} />
      <AuthorityNationwide data={supplyFitNationwide} />
      <AuthorityPrecision data={supplyFitPrecision} />
      <SupplyFitFAQ />
      <Footer />
    </div>
  );
}
