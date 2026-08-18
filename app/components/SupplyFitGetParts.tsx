import Image from "next/image";
import Link from "next/link";
import { SupplyFitGetPartsData } from "../data/types";

interface SupplyFitGetPartsProps {
  data: SupplyFitGetPartsData;
}

export default function SupplyFitGetParts({ data }: SupplyFitGetPartsProps) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background - Static */}
      <Image
        src="/images/supply-fit/background-fit.webp"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,18,11,0.72)_0%,rgba(6,18,11,0.44)_46%,rgba(17,99,58,0.56)_100%)]" />

      <div className="relative mx-auto w-full max-w-[1728px] px-6 py-14 sm:px-10 xl:px-[101px] xl:py-20">
        <div
          className="mx-auto overflow-hidden rounded-3xl border-2"
          style={{
            borderColor: "#11633A",
            maxWidth: "1100px",
          }}
        >
          <div className="flex flex-col lg:flex-row">
            {/* Image - Static */}
            <div className="relative min-h-[280px] w-full lg:w-[48%]">
              <Image
                src="/images/supply-fit/fit.webp"
                alt="Land Rover parts supply and fit workshop"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div
              className="flex w-full flex-col justify-center px-8 py-10 lg:w-[52%] lg:px-10 xl:px-12"
              style={{
                background: "#0d1117",
              }}
            >
              {/* Eyebrow - Dynamic */}
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.26em] text-white/50">
                {data.eyebrow}
              </p>

              {/* Title - Dynamic */}
              <h2 className="mb-4 text-[28px] font-bold leading-tight text-white sm:text-[34px]">
                {data.title}
              </h2>

              {/* Description - Dynamic */}
              <p className="mb-7 text-[14px] leading-[1.7] text-white/60">
                {data.description}
              </p>

              {/* Features - Dynamic */}
              <div className="mb-8 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                {data.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5">
                    {/* Check Icon - Static */}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#4CA66B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 shrink-0"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>

                    <span className="text-[13px] leading-snug text-white/75">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                {/* Phone - Static */}
                <a
                  href="tel:01375531355"
                  className="flex items-center gap-2 rounded-lg px-5 py-2.5 text-[13px] font-semibold text-white transition hover:opacity-90"
                  style={{
                    background: "#11633A",
                  }}
                >
                  {/* Phone Icon - Static */}
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12 19.79 19.79 0 0 1 1 3.18 2 2 0 0 1 3 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6.06 6.06l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Call Now
                </a>

                {/* Quote - Static */}
                <Link
                  href="/get-quote"
                  className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-white/10"
                >
                  {/* Document Icon - Static */}
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
