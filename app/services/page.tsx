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
import { faqs } from "../data/services/serviceMainPage";
import {
  servicesPageNationwide,
  servicesPagePrecision,
} from "../data/services/serviceMainPage";
import { servicesNationwideSupport } from "../data/services/serviceMainPage";
import BrandShowcase from "../components/BrandShowcase";
import { highlights, MainServicesData } from "../data/services/serviceMainPage";

export const metadata = {
  title: "Engine Services | Range Rover Engines",
  description:
    "Premium Range Rover engine rebuild, replacement, diagnostics and performance solutions.",
};

const tickerItems = [
  "Engine Rebuild",
  "Replacement",
  "Diagnostics",
  "Performance Solutions",
];

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <Header
        compact
        title={
          <>
            Engine Services Built Around
            <br />
            Your Range Rover.
          </>
        }
        subtitle="From early warning signs to full engine replacement, we cover every stage of engine care.
        One specialist team, every service your vehicle could need, in a single workshop.
"
        highlights={highlights}
      />
      <EngineServices
        services={MainServicesData.services}
        heading={MainServicesData.heading}
        intro={MainServicesData.intro}
      />
      <ServicesTicker items={tickerItems} />
      <BrandShowcase />
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
