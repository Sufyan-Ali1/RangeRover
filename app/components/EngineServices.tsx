import Link from "next/link";
import type { Service } from "../data/services";

interface EngineServicesProps {
  services: Service[];
  viewMoreHref?: string;
}

export default function EngineServices({ services, viewMoreHref }: EngineServicesProps) {
  return (
    <section className="w-full bg-[#F3F4F6]">
      <div className="mx-auto w-full max-w-[1728px] px-6 py-16 sm:px-10 sm:py-20 xl:px-[101px] xl:py-[80px]">

        <div className="mb-12 text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#4CA66B]">
            Professional Solutions
          </p>
          <h2 className="text-[28px] font-black text-gray-900 sm:text-[36px]">
            Specialist Engine Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-gray-500">
            We specialize in Land Rover and Range Rover engines, providing
            dealership-level quality at competitive independent prices.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.slug}
              className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-[#11633A] hover:bg-[#11633A] hover:shadow-lg"
            >
              <h3 className="mb-3 text-[16px] font-bold text-gray-900 transition-colors duration-300 group-hover:text-white">{s.title}</h3>
              <p className="flex-1 text-[13px] leading-[1.7] text-gray-500 transition-colors duration-300 group-hover:text-white/75">{s.description}</p>
              <Link
                href={`/services/${s.slug}`}
                className="mt-5 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#4CA66B] transition-colors duration-300 group-hover:text-[#A6F0C6]"
              >
                Explore More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {viewMoreHref && (
          <div className="mt-10 flex justify-center xl:mt-12">
            <Link
              href={viewMoreHref}
              className="rounded-lg bg-[#4CA66B] px-20 py-3.5 text-[15px] font-semibold text-white transition hover:bg-[#11633A]"
            >
              View More
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
