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

  return {
    metadataBase: new URL(
      process.env.SITE_URL || "https://www.rangerover.co.uk",
    ),
    title: area.meta.metaTitle,
    description: area.meta.metaDescription,
    alternates: {
      canonical: `${process.env.SITE_URL || "https://www.rangerover.co.uk"}/areas/${area.slug}`,
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
      <Reviews reviews={area.reviews} />
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

        <section className="space-y-8">
          <div className="text-center sm:text-left space-y-2">
            <h2 className="line-clamp-2 text-3xl font-black text-slate-900">
              {area.engineServicesMain?.heading}
            </h2>
            <p className="line-clamp-3 text-slate-600 text-sm">
              {area.engineServicesMain?.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {area.services?.map((service, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl bg-gradient-to-br from-white via-slate-50/60 to-slate-100/70 p-6 border border-slate-200/90 hover:border-green-500/40 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden"
              >
                {/* Permanent subtle gradient shade background */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-500/[0.03] to-green-500/[0.04] pointer-events-none" />

                <div className="relative z-10 h-14 flex items-center mb-4">
                  <h3 className="line-clamp-2 text-lg font-bold text-slate-900 group-hover:text-[#11633A] transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="relative z-10 line-clamp-4 text-slate-600 text-sm leading-relaxed pt-4 border-t border-slate-200/80 flex-1">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {area.specialistData && (
          <AreaRangeRoverSpecialist data={area.specialistData} />
        )}
      </div>

      <AreaMapAndLinks currentArea={area} />
      <Footer />
    </div>
  );
}
