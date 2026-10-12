import { Metadata } from "next";
import { areasData } from "../../data/areas";
import Navbar from "@/app/components/Navbar";
import Header from "@/app/components/Header";
import { notFound } from "next/dist/client/components/navigation";
import { AreaOverview } from "@/app/components/Areas/AreaOverview";
import { AreaTechnicalBanner } from "@/app/components/Areas/AreaTechnicalBanner";
import { PremiumServiceCards } from "@/app/components/Areas/PremiumServiceCards";
import { AreaRangeRoverSpecialist } from "@/app/components/Areas/AreaRangeRoverSpecialist";
import Reviews from "@/app/components/Reviews";
import { AreaMapAndLinks } from "@/app/components/Areas/AreaMapAndLinks";
import Footer from "@/app/components/Footer";
import EngineServices from "@/app/components/EngineServices";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = areasData.find((a) => a.slug === slug);

  if (!area) {
    return {
      title: "Area Not Found | Range Rover Engines UK",
    };
  }
  const siteUrl = process.env.SITE_URL || "https://www.rangerover.co.uk";

  return {
    metadataBase: new URL(siteUrl),
    title: area.meta.metaTitle,
    description: area.meta.metaDescription,
    alternates: {
      canonical: `/areas/${area.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return areasData.map((area) => ({
    slug: area.slug,
  }));
}
export default async function AreaDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const area = areasData.find((a) => a.slug === slug);

  if (!area) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <Header
        compact
        title={area.headerData?.title}
        subtitle={area.headerData?.subtitle}
        highlights={area.headerData?.highlights}
      />

      <div className="mx-auto w-full max-w-[1728px] space-y-12 px-6 py-16 sm:px-10 xl:px-[101px] xl:py-20">
        <section className="rounded-2xl bg-slate-50 p-8 sm:p-10 border border-slate-200 space-y-8">
          <AreaOverview
            overviewHeading={area.overview?.[0].overviewHeading}
            fullOverviewParagraphs={area.overview?.[0].fullOverviewParagraphs}
          />
          <AreaTechnicalBanner
            technicalHeader={area.technicalContent?.[0].technicalHeader}
            technicalParagraph={area.technicalContent?.[0].technicalParagraph}
          />
        </section>

        {area.premiumServices && area.premiumServices.length > 0 && (
          <PremiumServiceCards cards={area.premiumServices} />
        )}

        {area.specialistData && (
          <AreaRangeRoverSpecialist data={area.specialistData} />
        )}
      </div>
      <EngineServices
        services={area.services}
        heading={area.engineServicesMain?.heading}
        intro={area.engineServicesMain?.intro}
        viewMoreHref={area.engineServicesMain?.viewMoreHref}
      />
      <Reviews reviews={area.reviews} />
      <AreaMapAndLinks currentArea={area} />
      <Footer />
    </div>
  );
}
