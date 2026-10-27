import OilLevelNotice from "./components/OilLevelNotice";
import BonnetDiagnosticAnimation from "./components/BonnetDiagnosticAnimation";
import { homeOilLevelNotice } from "./data/home/oilLevelNotice";
import ServiceGallery from "./components/ServiceGallery";
import { homeWorkshopImages } from "./data/workshopImages";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
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
import SupplyFitCatalogue from "./components/SupplyFitCatalogue";

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
import fs from 'fs';
import path from 'path';

export default function Home() {
  const schemaJson = fs.readFileSync(path.join(process.cwd(), 'app/data/schema/home.json'), 'utf8');
  return (
    <div className="flex w-full flex-1 flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson }} />
      <Navbar transparent />
      <Header
        title={headerData.title}
        subtitle={headerData.subtitle}
        highlights={headerData.highlights}
      />
      <Reviews reviews={reviews} />
      <ServiceGallery
        title="Inside Our Workshop"
        subtitle="A look at our vehicles, engine repairs and rebuilds at Range Rover Garage."
        images={homeWorkshopImages}
        imageFit="contain"
      />
      <SupplyFitCatalogue
        services={engineServices}
        heading={engineServicesMain.heading}
        intro={engineServicesMain.intro}
      />
      <OilLevelNotice data={homeOilLevelNotice} />
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
      <BonnetDiagnosticAnimation />
      
      <TrustedSpecialists data={homeTrustedSpecialists} />
      <AuthorityLeading data={authorityLeading} />

      <AuthorityNationwide data={authorityNationwide} />

      <AuthorityPrecision data={authorityPrecision} />
      <CTA />
      <BlogSection />
      <NationwideSupport data={homeNationwideSupport} />
      <FAQ faqs={faqs} accordionName="homepage-faq" />
      <Location />
      <Footer />
    </div>
  );
}
