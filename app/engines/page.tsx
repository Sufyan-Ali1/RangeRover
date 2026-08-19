import Navbar from "../components/Navbar";
import Header from "../components/Header";
import BrowseByModelStatic from "../components/BrowseByModelStatic";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import AuthorityNationwide from "../components/AuthorityNationwide";
import AuthorityPrecision from "../components/AuthorityPrecision";
import CTA from "../components/CTA";
import VideoSection from "../components/VideoSection";
import FAQ from "../components/FAQ";
import Location from "../components/Location";
import { brands } from "../data/engines/Brands";
import ServicesTicker from "../components/ServicesTicker";
import { faqs } from "../data/engines/FaqData";
import { enginesPagePrecision } from "../data/engines/EnginesPagePrecision";
import { enginesPageNationwide } from "../data/engines/EnginesPageNationwide";
import EngineTable from "../components/EngineTable";
import engineCodesData from "../data/engineCodesData.json";
import { allBrandModels, toBrandSlug, toModelSlug } from "../data/models";
import { reviews } from "../data/engines/ReviewsData";
import { headerData } from "../data/engines/HeroData";
import EngineServices from "../components/EngineServices";
import {
  engineServices,
  engineServicesMain,
} from "../data/engines/EnginesServicesData";

function mapTableRows(
  rows: Array<{
    make: string;
    model: string;
    engineCode: string;
    actualCC: string | number;
    powerKw: string | number;
    powerHp: string | number;
    yearRange: string;
  }>,
) {
  return rows.map((row) => ({
    make: row.make,
    model: row.model,
    engineCode: row.engineCode,
    actualCC: row.actualCC,
    powerKwHp: `${row.powerKw} kw / ${row.powerHp} hp`,
    yearRange: row.yearRange,
  }));
}

const siteUrl = process.env.SITE_URL || "https://www.rangerover.co.uk";
export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Engines | Range Rover Engines",
  description:
    "Browse premium Range Rover and Land Rover engine solutions by brand.",
    alternates: {
      canonical: "/engines",
    }
};

export default function EnginesPage() {
  const tableRows = allBrandModels.flatMap((model) => {
    const brandSlug = toBrandSlug(model.brand);
    const dataKey =
      `${brandSlug}-${toModelSlug(model.model)}-engines` as keyof typeof engineCodesData;
    const modelEngineData = engineCodesData[dataKey];
    return modelEngineData ? mapTableRows(modelEngineData.rows) : [];
  });

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <Header
        title={headerData.title}
        subtitle={headerData.subtitle}
        highlights={headerData.highlights}
      />
      <ServicesTicker
        items={[
          "Engine Rebuild",
          "Replacement",
          "Diagnostics",
          "Performance Solutions",
        ]}
      />
      <BrowseByModelStatic
        brands={brands}
        light
        label="Engine Brands We Cover"
        heading="Specialist Engine Services Across All Major Brands"
        description="From Range Rover and Land Rover to BMW, Audi, Mercedes and Jaguar - our engineers deliver expert engine rebuilds, replacements and repairs using genuine OEM parts with up to 24-month warranty."
      />
      {tableRows.length > 0 && (
        <EngineTable
          title="Engine Codes to Help You Find Your Vehicle"
          rows={tableRows}
          rowsPerPage={9}
          getQuoteHref="/get-quote"
          notFoundText="Did Not Find Your Engine code."
          notFoundLinkText="CLICK HERE"
          notFoundHref="/get-quote"
        />
      )}
      <EngineServices
        services={engineServices}
        heading={engineServicesMain.heading}
        intro={engineServicesMain.intro}
        viewMoreHref={engineServicesMain.viewMoreHref}
      />
      <Reviews reviews={reviews} />
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
