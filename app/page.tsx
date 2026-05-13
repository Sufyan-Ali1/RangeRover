import Navbar from "./components/Navbar";
import Header from "./components/Header";
import EngineServices from "./components/EngineServices";
import BrowseByModel from "./components/BrowseByModel";
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
import { engineServices } from "./data/services";
import { rangeRoverModels, landRoverModels } from "./data/models";
import { faqs } from "./data/faqs";
import { authorityLeading, authorityNationwide, authorityPrecision } from "./data/authority";
import { homeTrustedSpecialists, homeNationwideSupport } from "./data/sections";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-black">
      <Navbar transparent />
      <Header />
      <Reviews />
      <EngineServices services={engineServices.slice(0, 4)} viewMoreHref="/services" />
      <BrowseByModel
        rangeRoverModels={rangeRoverModels}
        landRoverModels={landRoverModels}
        bgImage="/browsebymodel.svg"
        label="Browse By Model"
        heading="Range Rover & Land Rover Engine Specialists"
        description="Select your exact model to explore specialist engine rebuild, replacement and repair services. Every job uses genuine OEM parts and is backed by up to 24-month warranty."
      />
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
