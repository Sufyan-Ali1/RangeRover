import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import BrandShowcase from "../../components/BrandShowcase";
import Footer from "../../components/Footer";
import Reviews from "../../components/Reviews";
import AuthorityNationwide from "../../components/AuthorityNationwide";
import AuthorityPrecision from "../../components/AuthorityPrecision";
import NationwideSupport from "../../components/NationwideSupport";
import FAQ from "../../components/FAQ";
import Location from "../../components/Location";
import BlogSection from "../../components/BlogSection";
import CTA from "../../components/CTA";
import VideoSection from "../../components/VideoSection";
import { notFound } from "next/navigation";

import { getServiceData } from "../../data/services/getServiceData";

import WarrantySection from "@/app/components/WarrantySection";
import ServicesTicker from "@/app/components/ServicesTicker";
import ServiceGallery from "@/app/components/ServiceGallery";
import { getServiceImages } from "@/app/data/serviceImages";

interface Props {
  params: Promise<{ slug: string }>;
}

function slugToTitle(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}
const siteUrl = process.env.SITE_URL || "https://www.rangerover.co.uk";
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const data = getServiceData(slug);

  return {
    title: `${data?.meta.title}`,
    description: `${data?.meta.description}`,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `/services/${slug}`,
    },
  };
}

export default async function SubServicePage({ params }: Props) {
  const { slug } = await params;

  const data = getServiceData(slug);

  if (!data) {
    notFound();
  }

  const {
    headerData,
    reviews,
    whyEngineData,
    bookEngineData,
    galleryData,
    TrustData,
    BrandsData,
    certifiedSpecialistsData,
    faqs,
  } = data;

  const title = slugToTitle(slug);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <Header
        compact
        title={headerData.title}
        subtitle={headerData.subtitle}
        highlights={headerData.highlights}
      />
      <Reviews reviews={reviews} />
      <ServiceGallery
        title={galleryData.title}
        subtitle={galleryData.subtitle}
        images={getServiceImages(slug)}
      />
      <WarrantySection />
      <ServicesTicker
        items={[
          "Engine Rebuild",
          "Replacement",
          "Diagnostics",
          "Performance Solutions",
        ]}
      />
      <AuthorityNationwide data={whyEngineData} />
      <NationwideSupport data={bookEngineData} />
      <BrandShowcase cards={BrandsData} />
      <AuthorityPrecision data={certifiedSpecialistsData} />
      <NationwideSupport data={TrustData} />
      <VideoSection />
      <CTA />
      <BlogSection />
      <FAQ faqs={faqs} />
      <Location />
      <Footer />
    </div>
  );
}
