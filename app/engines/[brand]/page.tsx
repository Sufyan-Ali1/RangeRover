import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import BrowseByModel from "../../components/BrowseByModel";
import Footer from "../../components/Footer";
import { getModelsByBrandSlug } from "../../data/models";
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
import { getBrandAuthorityNationwide, getBrandAuthorityPrecision } from "../../data/authority";
import { getBrandNationwideSupport } from "../../data/sections";
interface Props {
  params: Promise<{ brand: string }>;
}

function slugToTitle(slug: string) {
  return slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

export async function generateMetadata({ params }: Props) {
  const { brand } = await params;
  const title = slugToTitle(brand);
  return {
    title: `${title} Engines | Range Rover Engines`,
    description: `Specialist engine solutions for all ${title} models — trusted by owners across the UK.`,
  };
}

export async function generateStaticParams() {
  return brands.map((b) => ({ brand: b.slug }));
}

export default async function BrandPage({ params }: Props) {
  const { brand } = await params;
  const title = slugToTitle(brand);
  const models = getModelsByBrandSlug(brand);

  const showModels = brand === "range-rover" || brand === "land-rover";

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <Header
        compact
        title={<>{title}<br />Engines.</>}
        subtitle="Engine Rebuild • Replacement • Diagnostics • Performance Solutions"
      />
      {showModels && (
        <BrowseByModel
          allModels={models}
          light
          label={`${title} Engine Models`}
          heading={`Specialist Engine Services for Every ${title} Model`}
          description={`Choose your ${title} model for expert engine rebuild, replacement and repair. All work is carried out using genuine OEM components by JLR-trained specialists, backed by up to 24-month warranty and free nationwide collection and delivery.`}
        />
      )}
      <Reviews />
      <AuthorityNationwide data={getBrandAuthorityNationwide(title)} />
      <AuthorityPrecision data={getBrandAuthorityPrecision(title)} />
      <NationwideSupport data={getBrandNationwideSupport(title)} />
      <VideoSection />
      <CTA />
      <BlogSection />
      <NationwideSupport data={getBrandNationwideSupport(title)} />
      <FAQ faqs={faqs} />
      <Location />
      <Footer />
    </div>
  );
}
