import Navbar from "./components/Navbar";
import Header from "./components/Header";
import EngineServices from "./components/EngineServices";
import BrowseByModelStatic from "./components/BrowseByModelStatic";
import WarrantySection from "./components/WarrantySection";
import TrustedSpecialists from "./components/TrustedSpecialists";
import AuthorityLeading from "./components/AuthorityLeading";
import AuthorityNationwide from "./components/AuthorityNationwide";
import AuthorityPrecision from "./components/AuthorityPrecision";
import BlogSection from "./components/BlogSection";
import NationwideSupport from "./components/NationwideSupport";
import FAQ from "./components/FAQ";
import Reviews from "./components/Reviews";
import CTA from "./components/CTA";
import Location from "./components/Location";
import Footer from "./components/Footer";
import ServicesTicker from "./components/ServicesTicker";
import { engineServices } from "./data/services";
import { allBrandModels } from "./data/models";
import { faqs } from "./data/faqs";
import { authorityLeading, authorityNationwide, authorityPrecision } from "./data/authority";
import { homeTrustedSpecialists, homeNationwideSupport } from "./data/sections";

export default function Home() {
  return (
    <div className="flex w-full flex-1 flex-col bg-white">
      <Navbar transparent />
      <Header />
      <Reviews />
      <EngineServices services={engineServices.slice(0, 4)} viewMoreHref="/services" />
      <BrowseByModelStatic
        allModels={allBrandModels.filter((model) => model.brand !== "JAGUAR")}
        bgImage="/images/browsebymodel.webp"
        label="Browse By Model"
        heading="Range Rover & Land Rover Engine Specialists"
        description="Select your exact model to explore specialist engine rebuild, replacement and repair services. Every job uses genuine OEM parts and is backed by up to 24-month warranty."
        viewMoreHref="/engines"
      />
      <ServicesTicker items={["Engine Rebuild", "Replacement", "Diagnostics", "Performance Solutions"]} />
      <WarrantySection />
      <TrustedSpecialists data={homeTrustedSpecialists} />
      <AuthorityLeading data={authorityLeading} />
      <AuthorityNationwide data={authorityNationwide} />
      <AuthorityPrecision data={authorityPrecision} />
      <CTA />
      <BlogSection />
      <NationwideSupport data={homeNationwideSupport} />
      <FAQ faqs={faqs} />
      <Location />
      <Footer />
    </div>
  );
}
