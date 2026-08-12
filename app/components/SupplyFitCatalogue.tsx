import Image from "next/image";
import Link from "next/link";
import { engineServices } from "../data/supplyFit/services";

const serviceImages: Record<string, string> = {
  "engine-rebuild": "/services/engine_rebuild.png",
  "timing-chain-replacement": "/services/timing_chain_replacement.png",
  "turbo-replacement": "/services/turbo_replacement.png",
  "head-gasket-replacement": "/services/head_gasket.png",
  "engine-repair": "/services/engine_repair.png",
  "engine-replacement": "/services/engine_replacement.png",
  "engine-swap": "/services/engine_swap.png",
  "timing-belt-replacement": "/services/timing_belt_Replacement.jpeg",
};

const services = engineServices.map((service) => ({
  ...service,
  image: serviceImages[service.slug] ?? "",
}));

export default function SupplyFitCatalogue() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1728px] px-6 py-16 sm:px-10 xl:px-[101px] xl:py-20">
        <div className="mb-10 text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#4CA66B]">
            Catalogue
          </p>
          <h2 className="mb-4 text-[32px] font-black leading-tight text-gray-900 sm:text-[40px]">
            Engine Services We Offer
          </h2>
          <p className="mx-auto max-w-2xl text-[15px] leading-[1.7] text-gray-500">
            Supply and fit is only one part of what we offer. Our workshop
            handles the full spectrum of engine work, so whatever your vehicle
            needs, our specialists can take care of it.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.slug}
              className="group overflow-hidden rounded-xl border"
              style={{
                borderColor: "rgba(74,166,107,0.45)",
                background: "#0d1117",
              }}
            >
              <div className="relative h-[220px] w-full overflow-hidden">
                {service.image ? (
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[#111]">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2a2a2a"
                      strokeWidth="1.5"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/20 to-transparent" />
              </div>

              <div className="px-5 pb-5 pt-4">
                <h3 className="mb-2 text-[13px] font-bold uppercase tracking-[0.08em] text-white">
                  {service.title}
                </h3>
                <p className="mb-4 text-[13px] leading-[1.6] text-white/50">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] transition-opacity hover:opacity-70"
                  style={{ color: "#4CA66B" }}
                >
                  Explore More
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
