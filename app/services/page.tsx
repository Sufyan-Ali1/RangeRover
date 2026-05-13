import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EngineServices from "../components/EngineServices";
import FAQ from "../components/FAQ";
import Location from "../components/Location";
import NationwideSupport from "../components/NationwideSupport";
import BlogSection from "../components/BlogSection";
import CTA from "../components/CTA";
import ServicesTicker from "../components/ServicesTicker";
import AuthorityNationwide from "../components/AuthorityNationwide";
import AuthorityPrecision from "../components/AuthorityPrecision";
import { engineServices } from "../data/services";
import { faqs } from "../data/faqs";
import { servicesPageNationwide, servicesPagePrecision } from "../data/authority";
import { servicesNationwideSupport } from "../data/sections";

export const metadata = {
  title: "Engine Services | Range Rover Engines",
  description: "Premium Range Rover engine rebuild, replacement, diagnostics and performance solutions.",
};

const tickerItems = ["Engine Rebuild", "Replacement", "Diagnostics", "Performance Solutions"];

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <Header
        compact
        title={<>Premium Engine<br />Services.</>}
        subtitle="Engine Rebuild • Replacement • Diagnostics • Performance Solutions"
      />
      <EngineServices services={engineServices} />
      <ServicesTicker items={tickerItems} />
      <AuthorityNationwide data={servicesPageNationwide} />
      <AuthorityPrecision data={servicesPagePrecision} />
      <NationwideSupport data={servicesNationwideSupport} />
      <CTA />
      <BlogSection />
      <FAQ faqs={faqs} />
      <Location />
      <Footer />
    </div>
  );
}
