import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import EngineSpecifications from "@/app/components/EngineSpecifications";
import EngineModelShowcase from "@/app/components/EngineModelShowcase";
import EngineSpecialistsBanner from "@/app/components/EngineSpecialistsBanner";
import EngineOverview from "@/app/components/EngineOverview";
import EngineProblems from "@/app/components/EngineProblems";
import ReconditionedBuyingGuide from "@/app/components/reconditioned/ReconditionedBuyingGuide";
import EngineFinalCTA from "@/app/components/EngineFinalCTA";
import EngineServices from "@/app/components/EngineServices";
import EngineCompatibilityFitting from "@/app/components/EngineCompatibilityFitting";
import EngineWaveDivider from "@/app/components/EngineWaveDivider";
import EngineGallery from "@/app/components/EngineGallery";
import EngineWhyChoose from "@/app/components/EngineWhyChoose";
import FAQ from "@/app/components/FAQ";
import { getEngineSpecifications } from "@/app/data/engines/brands/GetEngineSpecifications";
import engineCodesData from "@/app/data/engineCodesData.json";
import { getEngineCodeHref } from "@/app/data/engines/engineCodeLinks.cjs";

interface Props {
  params: Promise<{ brand: string; model: string; engineCode: string }>;
}

function getEngine(brand: string, model: string, engineCode: string) {
  const key = `${brand}-${model}-engines` as keyof typeof engineCodesData;
  const engine = engineCodesData[key]?.rows.find(
    (row) => row.engineCode.toUpperCase() === engineCode.toUpperCase(),
  ) ?? Object.values(engineCodesData).flatMap((group) => group.rows).find(
    (row) => getEngineCodeHref(row) === `/engines/${brand}/${model}/${encodeURIComponent(engineCode.toUpperCase())}`,
  );
  if (!engine) notFound();

  return engine;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { brand, model, engineCode } = await params;
  const engine = getEngine(brand, model, engineCode);
  const name = `${engine.make} ${engine.model} ${engine.engineCode}`;

  return {
    title: `${name} Engine Rebuild & Replacement`,
    description: `Specialist ${name} engine rebuild, repair and replacement services. Get expert advice and a quote for your engine.`,
    alternates: {
      canonical: `/engines/${brand}/${model}/${engine.engineCode}`,
    },
  };
}

export default async function EngineCodePage({ params }: Props) {
  const { brand, model, engineCode } = await params;
  const engine = getEngine(brand, model, engineCode);
  const engineData = getEngineSpecifications(brand, model, engine.engineCode);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main>
        <Header
          compact
          title={`${engine.make} ${engine.model} ${engine.engineCode} Engines`}
          subtitle="Specialist Engine Rebuild, Repair & Replacement"
        />
        <EngineSpecifications data={engineData} />
        <EngineModelShowcase data={engineData.modelShowcase} />
        <EngineSpecialistsBanner data={engineData.specialistsBanner} />
        <EngineOverview data={engineData.engineOverview} />
        <EngineProblems data={engineData.engineProblems} />
        <ReconditionedBuyingGuide data={engineData.buyingGuide} />
        <EngineFinalCTA data={engineData.finalCta} />
        <EngineServices data={engineData.engineServices} />
        <EngineCompatibilityFitting data={engineData.compatibilityFitting} />
        <EngineWaveDivider data={engineData.workshopIntro} />
        <EngineGallery data={engineData.engineGallery} />
        <EngineWhyChoose data={engineData.whyChoose} />
        <FAQ
          faqs={engineData.faq.faqs}
          description={engineData.faq.description}
          accordionName={engineData.faq.accordionName}
        />
      </main>
      <Footer />
    </div>
  );
}
