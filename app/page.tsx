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

// data
import { engineServices } from "./data/home/engineServicesData";
import { allBrandModels } from "./data/home/EngineModels";
import { engineModels } from "./data/home/EngineModels";
import { faqs } from "./data/home/faqData";
import { authorityPrecision } from "./data/home/AuthorityPrecision";
import { authorityNationwide } from "./data/home/AuthorityNationwide";
import { authorityLeading } from "./data/home/AuthorityLeadingData";

import { homeTrustedSpecialists } from "./data/home/homeTrustedSpecialists";
import { homeNationwideSupport } from "./data/home/HomeNationwideSupport";
import { reviews } from "./data/home/reviewsData";
import { headerData } from "./data/home/heroData";
import { engineServicesMain } from "./data/home/engineServicesData";

export default function Home() {
  return (
    <div className="flex w-full flex-1 flex-col bg-white">
      <Navbar transparent />
      <Header
        title={headerData.title}
        subtitle={headerData.subtitle}
        highlights={headerData.highlights}
      />
      <Reviews reviews={reviews} />
      <EngineServices
        services={engineServices}
        heading={engineServicesMain.heading}
        intro={engineServicesMain.intro}
        viewMoreHref={engineServicesMain.viewMoreHref}
      />
      <BrowseByModelStatic
        allModels={allBrandModels.filter((model) => model.brand !== "JAGUAR")}
        bgImage="/images/browsebymodel.webp"
        label={engineModels.label}
        heading={engineModels.heading}
        description={engineModels.description}
        viewMoreHref={engineModels.viewMoreHref}
      />
      <ServicesTicker
        items={[
          "Engine Rebuild",
          "Replacement",
          "Diagnostics",
          "Performance Solutions",
        ]}
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
