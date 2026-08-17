import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import BrowseByModelStatic from "../../components/BrowseByModelStatic";
import Footer from "../../components/Footer";
import { getModelsByBrandSlug, toModelSlug } from "../../data/models";
import { brands } from "../../data/brands";
import Reviews from "../../components/Reviews";
import AuthorityNationwide from "../../components/AuthorityNationwide";
import AuthorityPrecision from "../../components/AuthorityPrecision";
import CTA from "../../components/CTA";
import VideoSection from "../../components/VideoSection";
import FAQ from "../../components/FAQ";
import Location from "../../components/Location";
import BlogSection from "../../components/BlogSection";
import NationwideSupport from "@/app/components/NationwideSupport";
import { faqs } from "../../data/faqs";

import ServicesTicker from "../../components/ServicesTicker";
import PopularEngineSizes from "../../components/PopularEngineSizes";
import EngineTable from "../../components/EngineTable";
import SupplyFitCTA from "../../components/SupplyFitCTA";
import SupplyFitPrecision from "../../components/SupplyFitPrecision";
import SupplyFitContent from "../../components/SupplyFitContent";
import SupplyFitGetParts from "../../components/SupplyFitGetParts";
import engineCodesData from "../../data/engineCodesData.json";

import EngineServices from "@/app/components/EngineServices";
import { engineSizes } from "../../data/engineSizes";
import {
  getBrandData,
  getBrandsModelSizesDataBySlug,
} from "@/app/data/engines/brands/GetBrandData";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ brand: string }>;
}

function slugToTitle(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function parseSizeSlug(
  slug: string,
): { brandSlug: string; sizeLabel: string } | null {
  const match = slug.match(/^(.+)-(\d+\.\d+)$/);
  if (!match) return null;
  return { brandSlug: match[1], sizeLabel: match[2] };
}

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

export async function generateMetadata({ params }: Props) {
  const { brand } = await params;
  const parsed = parseSizeSlug(brand);

  if (parsed) {
    const brandTitle = slugToTitle(parsed.brandSlug);
    return {
      title: `${brandTitle} ${parsed.sizeLabel} Engines | Range Rover Engines`,
      description: `Specialist engine rebuild and replacement for ${brandTitle} ${parsed.sizeLabel} engines - expert JLR-certified service in Grays, Essex.`,
    };
  }

  const brandTitle = slugToTitle(brand);
  return {
    title: `${brandTitle} Engines | Range Rover Engines`,
    description: `Specialist engine solutions for all ${brandTitle} models - trusted by owners across the UK.`,
  };
}

export async function generateStaticParams() {
  const brandParams = brands.map((b) => ({ brand: b.slug }));
  const sizeParams = Object.entries(engineSizes).flatMap(([brandSlug, entry]) =>
    entry.sizes.map((size) => ({ brand: `${brandSlug}-${size}` })),
  );

  return [...brandParams, ...sizeParams];
}

export default async function BrandPage({ params }: Props) {
  const { brand } = await params;
  const parsed = parseSizeSlug(brand);

  if (parsed) {
    const { brandSlug, sizeLabel } = parsed;
    const dataKey =
      `${brandSlug}-${sizeLabel}-engines` as keyof typeof engineCodesData;
    const engineData = engineCodesData[dataKey] ?? null;
    const tableRows = engineData ? mapTableRows(engineData.rows) : [];
    const sizeData = getBrandsModelSizesDataBySlug(brand);
    const {
      headerData,
      NationwideData,
      supplyFitPrecision,
      supplyFitContentData,
      supplyFitGetParts,
      faqsData,
    } = sizeData;

    return (
      <div className="flex min-h-screen flex-col bg-white">
        <Navbar />
        <Header
          compact
          title={headerData?.title}
          subtitle={headerData?.subtitle}
          highlights={headerData?.highlights}
        />
        <ServicesTicker
          items={[
            "Engine Rebuild",
            "Replacement",
            "Diagnostics",
            "Performance Solutions",
          ]}
        />
        <AuthorityNationwide data={NationwideData} />
        {engineData && (
          <EngineTable
            title={engineData.title}
            rows={tableRows}
            rowsPerPage={9}
            getQuoteHref="/get-quote"
            notFoundText="Did Not Find Your Engine code."
            notFoundLinkText="CLICK HERE"
            notFoundHref="/get-quote"
          />
        )}
        <SupplyFitCTA />
        <SupplyFitPrecision data={supplyFitPrecision} />
        <SupplyFitContent data={supplyFitContentData} />
        <SupplyFitGetParts data={supplyFitGetParts} />
        <FAQ faqs={faqsData} />
        <Footer />
      </div>
    );
  }

  const data = getBrandData(brand);

  if (!data) {
    notFound();
  }
  const {
    headerData,
    engineServices,
    NationwideData,
    ReviewsData,
    PrecisionData,
    NationwideSupportData,
    faqsData,
  } = data;
  const brandTitle = slugToTitle(brand);
  const models = getModelsByBrandSlug(brand);
  const showModels = brand === "range-rover" || brand === "land-rover";
  const brandTableRows = models.flatMap((model) => {
    const dataKey =
      `${brand}-${toModelSlug(model.model)}-engines` as keyof typeof engineCodesData;
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
      <EngineServices services={engineServices} />
      <PopularEngineSizes brandSlug={brand} brandTitle={brandTitle} />
      {showModels && (
        <BrowseByModelStatic
          allModels={models}
          light
          label={`${brandTitle} Engine Models`}
          heading={`Specialist Engine Services for Every ${brandTitle} Model`}
          description={`Choose your ${brandTitle} model for expert engine rebuild, replacement and repair. All work is carried out using genuine OEM components by JLR-trained specialists, backed by up to 24-month warranty and  nationwide collection and delivery.`}
        />
      )}
      {brandTableRows.length > 0 && (
        <EngineTable
          title={`${brandTitle} Engine Codes to Help You Find Your Vehicle`}
          rows={brandTableRows}
          rowsPerPage={9}
          getQuoteHref="/get-quote"
          notFoundText="Did Not Find Your Engine code."
          notFoundLinkText="CLICK HERE"
          notFoundHref="/get-quote"
        />
      )}
      <Reviews reviews={ReviewsData} />
      <AuthorityNationwide data={NationwideData} />
      <AuthorityPrecision data={PrecisionData} />
      <NationwideSupport data={NationwideSupportData} />
      <VideoSection />
      <CTA />
      <BlogSection />
      <FAQ faqs={faqsData} />
      <Location />
      <Footer />
    </div>
  );
}
