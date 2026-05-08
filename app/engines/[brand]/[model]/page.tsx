import Navbar from "../../../components/Navbar";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import FAQ from "@/app/components/FAQ";
import { faqs } from "@/app/data/faqs";
import Location from "@/app/components/Location";
import NationwideSupport from "@/app/components/NationwideSupport";
import BlogSection from "@/app/components/BlogSection";
import CTA from "@/app/components/CTA";
import VideoSection from "@/app/components/VideoSection";
import { authorityNationwide, authorityPrecision } from "@/app/data/authority";
import AuthorityNationwide from "@/app/components/AuthorityNationwide";
import AuthorityPrecision from "@/app/components/AuthorityPrecision";
import ServiceCards from "@/app/components/ServiceCards";
import { serviceCards } from "@/app/data/serviceCards";
import Reviews from "@/app/components/Reviews";

interface Props {
  params: Promise<{ brand: string; model: string }>;
}

function slugToTitle(slug: string) {
  return slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
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
  const brandTitle = slugToTitle(brand);
  const modelTitle = slugToTitle(model);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <Header
        compact
        title={<>{brandTitle}<br />{modelTitle}.</>}
        subtitle="Engine Rebuild • Replacement • Diagnostics • Performance Solutions"
      />
      <ServiceCards cards={serviceCards} />
      <Reviews />
      <AuthorityNationwide data={authorityNationwide} />
      <AuthorityPrecision data={authorityPrecision} />
      <NationwideSupport />
      <VideoSection />
      <CTA />
      <BlogSection />
      <NationwideSupport />
      <FAQ faqs={faqs} />
      <Location />
      <Footer />
    </div>
  );
}
