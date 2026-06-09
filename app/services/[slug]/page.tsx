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
import { faqs } from "../../data/faqs";
import { getServiceAuthorityNationwide, getServiceAuthorityPrecision } from "../../data/authority";
import { getServiceNationwideSupport } from "../../data/sections";
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

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const title = slugToTitle(slug);
  return {
    title: `${title} | Range Rover Engines`,
    description: `Expert Range Rover ${title.toLowerCase()} service — trusted specialists in Grays, Essex.`,
  };
}

export default async function SubServicePage({ params }: Props) {
  const { slug } = await params;
  const title = slugToTitle(slug);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <Header
        compact
        title={title}
        subtitle="Engine Rebuild • Replacement • Diagnostics • Performance Solutions"
      />
      <Reviews />
      <ServiceGallery
        title={`${title} Gallery`}
        subtitle="A look inside our workshop — precision work on every Range Rover and Land Rover engine."
        images={getServiceImages(slug)}
      />
      <WarrantySection />
      <ServicesTicker items={["Engine Rebuild", "Replacement", "Diagnostics", "Performance Solutions"]} />
      <AuthorityNationwide data={getServiceAuthorityNationwide(title)} />
      <NationwideSupport data={getServiceNationwideSupport(title)} />
      <BrandShowcase />
      <AuthorityPrecision data={getServiceAuthorityPrecision(title)} />
      <NationwideSupport data={getServiceNationwideSupport(title)} />
      <VideoSection />
      <CTA />
      <BlogSection />
      <NationwideSupport data={getServiceNationwideSupport(title)} />
      <FAQ faqs={faqs} />
      <Location />
      <Footer />
    </div>
  );
}
