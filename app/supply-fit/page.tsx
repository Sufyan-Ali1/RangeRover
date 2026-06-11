import Navbar from "../components/Navbar";
import SupplyFitHero from "../components/SupplyFitHero";
import SupplyFitPrecision from "../components/SupplyFitPrecision";
import SupplyFitWorkflow from "../components/SupplyFitWorkflow";
import SupplyFitCTA from "../components/SupplyFitCTA";
import SupplyFitContent from "../components/SupplyFitContent";
import AuthorityNationwide from "../components/AuthorityNationwide";
import AuthorityPrecision from "../components/AuthorityPrecision";
import { supplyFitNationwide, supplyFitPrecision } from "../data/authority";
import SupplyFitGetParts from "../components/SupplyFitGetParts";
import SupplyFitCatalogue from "../components/SupplyFitCatalogue";
import SupplyFitEnginesQuote from "../components/SupplyFitEnginesQuote";
import SupplyFitFAQ from "../components/SupplyFitFAQ";
import Footer from "../components/Footer";

export const metadata = {
  title: "Supply & Fit Services | Range Rover Garage",
  description:
    "Genuine & OEM parts supplied and professionally fitted by Land Rover experts in London. Premium quality, transparent pricing, no compromise.",
};

export default function SupplyFitPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <SupplyFitHero />
      <SupplyFitEnginesQuote />
      <SupplyFitCatalogue />
      <SupplyFitPrecision />
      <SupplyFitWorkflow />
      <SupplyFitCTA />
      <SupplyFitContent />
      <SupplyFitGetParts />
      <AuthorityNationwide data={supplyFitNationwide} />
      <AuthorityPrecision data={supplyFitPrecision} />
      <SupplyFitFAQ />
      <Footer />
    </div>
  );
}
