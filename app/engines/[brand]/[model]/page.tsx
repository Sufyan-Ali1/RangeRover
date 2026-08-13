import Navbar from "../../../components/Navbar";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import FAQ from "@/app/components/FAQ";
import { faqs } from "@/app/data/faqs";
import ServicesTicker from "@/app/components/ServicesTicker";
import engineCodesData from "@/app/data/engineCodesData.json";

import Location from "@/app/components/Location";
import NationwideSupport from "@/app/components/NationwideSupport";
import BlogSection from "@/app/components/BlogSection";
import CTA from "@/app/components/CTA";
import VideoSection from "@/app/components/VideoSection";
import AuthorityNationwide from "@/app/components/AuthorityNationwide";
import AuthorityPrecision from "@/app/components/AuthorityPrecision";
import BrandShowcase from "@/app/components/BrandShowcase";
import Reviews from "@/app/components/Reviews";
import EngineTable from "@/app/components/EngineTable";
import {
  getModelAuthorityNationwide,
  getModelAuthorityPrecision,
} from "@/app/data/authority";
import { getModelNationwideSupport } from "@/app/data/sections";
import { reviews } from "@/app/data/reviews";
import { getBrandsModelsBySlug } from "@/app/data/engines/brands/GetBrandData";

interface Props {
  params: Promise<{ brand: string; model: string }>;
}

function slugToTitle(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }: Props) {
  const { brand, model } = await params;
  const brandTitle = slugToTitle(brand);
  const modelTitle = slugToTitle(model);
  return {
    title: `${brandTitle} ${modelTitle} Engine | Range Rover Engines`,
    description: `Specialist engine rebuild and replacement for the ${brandTitle} ${modelTitle} — expert JLR-certified service in Grays, Essex.`,
  };
}

export default async function ModelPage({ params }: Props) {
  const { brand, model } = await params;

  const data = getBrandsModelsBySlug(model);

  const {
    headerData,
    BrandsData,
    ReviewsData,
    NationwideData,
    PrecisionData,
    NationwideSupportData1,
    NationwideSupportData2,
    faqsData,
  } = data;
  if (!data) {
    return <div>Model not found</div>;
  }

  const dataKey = `${brand}-${model}-engines` as keyof typeof engineCodesData;
  const engineData = engineCodesData[dataKey] ?? null;

  const tableRows = engineData
    ? engineData.rows.map((r) => ({
        make: r.make,
        model: r.model,
        engineCode: r.engineCode,
        actualCC: r.actualCC,
        powerKwHp: `${r.powerKw} kw / ${r.powerHp} hp`,
        yearRange: r.yearRange,
      }))
    : [];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <Header
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

      <BrandShowcase cards={BrandsData} />

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

      <Reviews reviews={ReviewsData} />
      <AuthorityNationwide data={NationwideData} />
      <AuthorityPrecision data={PrecisionData} />
      <NationwideSupport data={NationwideSupportData1} />
      <VideoSection />
      <CTA />
      <BlogSection />
      <NationwideSupport data={NationwideSupportData2} />
      <FAQ faqs={faqsData} />
      <Location />
      <Footer />
    </div>
  );
}
