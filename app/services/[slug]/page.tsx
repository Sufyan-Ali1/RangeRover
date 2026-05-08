import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import ServiceCards from "../../components/ServiceCards";
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
import { serviceCards } from "../../data/serviceCards";
import { faqs } from "../../data/faqs";
import { authorityNationwide, authorityPrecision } from "../../data/authority";
import WarrantySection from "@/app/components/WarrantySection";

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
      <WarrantySection />
      <AuthorityNationwide data={authorityNationwide} />
      <NationwideSupport />
      <ServiceCards cards={serviceCards} />
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
