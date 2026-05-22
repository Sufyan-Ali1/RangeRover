import Navbar from "../components/Navbar";
import Header from "../components/Header";
import BrowseByModel from "../components/BrowseByModel";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import AuthorityNationwide from "../components/AuthorityNationwide";
import AuthorityPrecision from "../components/AuthorityPrecision";
import CTA from "../components/CTA";
import VideoSection from "../components/VideoSection";
import FAQ from "../components/FAQ";
import Location from "../components/Location";
import { brands } from "../data/brands";
import ServicesTicker from "../components/ServicesTicker";
import { faqs } from "../data/faqs";
import { enginesPageNationwide, enginesPagePrecision } from "../data/authority";

export const metadata = {
  title: "Engines | Range Rover Engines",
  description: "Browse premium Range Rover and Land Rover engine solutions by brand.",
};

export default function EnginesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <Header
        compact
        title={<>Premium Range Rover<br />&amp; Land Rover Engines.</>}
        subtitle="Evoque • Sport • Vogue • Defender • Discovery • Freelander"
      />
      <ServicesTicker items={["Engine Rebuild", "Replacement", "Diagnostics", "Performance Solutions"]} />
      <BrowseByModel
        brands={brands}
        light
        label="Engine Brands We Cover"
        heading="Specialist Engine Services Across All Major Brands"
        description="From Range Rover and Land Rover to BMW, Audi, Mercedes and Jaguar — our engineers deliver expert engine rebuilds, replacements and repairs using genuine OEM parts with up to 24-month warranty."
      />
      <Reviews />
      <AuthorityNationwide data={enginesPageNationwide} />
      <AuthorityPrecision data={enginesPagePrecision} />
      <CTA />
      <VideoSection />
      <FAQ faqs={faqs} />
      <Location />
      <Footer />
    </div>
  );
}
