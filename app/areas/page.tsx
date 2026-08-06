import { Metadata } from "next";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { AreaCard } from "../components/Areas/AreaCard";
import Location from "../components/Location";
import { areasData } from "../data/areas";
import {
  homeTrustedSpecialists,
  servicesNationwideSupport,
} from "../data/sections";
import NationwideSupport from "../components/NationwideSupport";
import WarrantySection from "../components/WarrantySection";
import CTA from "../components/CTA";
import TrustedSpecialists from "../components/TrustedSpecialists";
import { authorityLeading } from "../data/authority";
import AuthorityLeading from "../components/AuthorityLeading";
import Footer from "../components/Footer";
import EngineServices from "../components/EngineServices";
import { engineServices } from "../data/services";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || "https://www.rangerover.co.uk"),
  title: "Range Rover Engine Rebuild Across the UK | Find Your Area",
  description:
    "Range Rover Engines UK offers fast, warrantied engine rebuilds nationwide. Browse your county below for tested engines, expert fitting and a free local quote.",
  alternates: {
    canonical: `${process.env.SITE_URL || "https://www.rangerover.co.uk"}/areas`,
  },
};

export default function AreasPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <Header
        compact
        title={
          <>
            Our Premium
            <br />
            Areas.
          </>
        }
        subtitle="Engine Rebuild • Replacement • Diagnostics • Performance Solutions"
      />

      {/* Covered Areas Section with balanced vertical spacing */}
      <div className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1728px] px-6 py-14 sm:px-10 xl:px-[101px] xl:py-16">
          {/* Section Header */}
          <h2 className="mb-8 text-[28px] font-black leading-tight text-gray-900 sm:text-[36px]">
            Covered <span className="text-[#11633A]">Areas</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7">
            {areasData.map((area) => (
              <AreaCard key={area.id} area={area} />
            ))}
          </div>
        </div>
      </div>

      {/* Nationwide Support Section with matching uniform bottom spacing */}
      <div className="w-full bg-white">
        <NationwideSupport data={servicesNationwideSupport} />
      </div>
      <EngineServices
        services={engineServices.slice(0, 4)}
        viewMoreHref="/services"
      />
      <WarrantySection />
      <TrustedSpecialists data={homeTrustedSpecialists} />
      <AuthorityLeading data={authorityLeading} />
      <CTA />
      <Location />
      <Footer />
    </div>
  );
}
