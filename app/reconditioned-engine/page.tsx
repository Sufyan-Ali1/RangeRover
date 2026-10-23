import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { connection } from "next/server";
import { reconditionedPageData } from "../data/engines/reconditioned";

const Navbar = dynamic(() => import("../components/Navbar"));
const Footer = dynamic(() => import("../components/Footer"));
const FAQ = dynamic(() => import("../components/FAQ"));
const SupplyFitPrecision = dynamic(() => import("../components/SupplyFitPrecision"));
const SupplyFitWorkflow = dynamic(() => import("../components/SupplyFitWorkflow"));
const ReconditionedOverview = dynamic(() => import("../components/reconditioned/ReconditionedOverview"));
const ReconditionedOptions = dynamic(() => import("../components/reconditioned/ReconditionedOptions"));
const ReconditionedSupplyOptions = dynamic(() => import("../components/reconditioned/ReconditionedSupplyOptions"));
const ReconditionedContact = dynamic(() => import("../components/reconditioned/ReconditionedContact"));
const ReconditionedHero = dynamic(() => import("../components/reconditioned/ReconditionedHero"));
const ReconditionedGallery = dynamic(() => import("../components/reconditioned/ReconditionedGallery"));
const ReconditionedBuyingGuide = dynamic(() => import("../components/reconditioned/ReconditionedBuyingGuide"));

const siteUrl = process.env.SITE_URL || "https://rangerovergarage.co.uk";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: reconditionedPageData.metadata.title,
  description: reconditionedPageData.metadata.description,
  alternates: { canonical: reconditionedPageData.metadata.canonical },
};

export default async function ReconditionedEnginesPage() {
  await connection();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main>
        <ReconditionedHero data={reconditionedPageData.heroSection} />

        <ReconditionedOverview data={reconditionedPageData.overview} />

        <SupplyFitPrecision data={reconditionedPageData.trust} compact />

        <ReconditionedOptions data={reconditionedPageData.optionsSection} />
        <ReconditionedBuyingGuide data={reconditionedPageData.buyingGuide} />
        <SupplyFitPrecision data={reconditionedPageData.benefits} columns={2} />
        <SupplyFitWorkflow
          title={reconditionedPageData.workflow.title}
          description={reconditionedPageData.workflow.description}
          steps={reconditionedPageData.workflow.steps}
        />

        <ReconditionedSupplyOptions data={reconditionedPageData.supplyOptions} />

        <ReconditionedGallery data={reconditionedPageData.gallery} />

        

        <FAQ
          faqs={reconditionedPageData.faq.faqs}
          accordionName={reconditionedPageData.faq.accordionName}
          description={reconditionedPageData.faq.description}
        />

        <ReconditionedContact data={reconditionedPageData.contact} />
      </main>
      <Footer />
    </div>
  );
}
