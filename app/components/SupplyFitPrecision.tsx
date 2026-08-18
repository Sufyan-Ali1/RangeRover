import React from "react";
import { SupplyFitPrecisionData } from "../data/types";

type FeatureIcon =
  | "tested"
  | "warranty"
  | "specialist"
  | "ancillaries"
  | "pricing"
  | "collection";

interface SupplyFitPrecisionProps {
  data: SupplyFitPrecisionData;
}

const icons: Record<FeatureIcon, React.ReactNode> = {
  tested: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  ),

  warranty: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),

  specialist: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M12 14c-5 0-8 2-8 3v1h16v-1c0-1-3-3-8-3z" />
      <path d="M15 3.5a4 4 0 0 1 0 9" />
    </svg>
  ),

  ancillaries: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),

  pricing: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),

  collection: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="1" y="3" width="15" height="13" rx="2" />
      <path d="M16 8h4l3 3v5h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
};

export default function SupplyFitPrecision({ data }: SupplyFitPrecisionProps) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background */}
      <img
        src="/precision.svg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-[1728px] px-6 py-16 sm:px-10 xl:px-[101px] xl:py-20">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
            {data.eyebrow}
          </p>

          <h2 className="text-[36px] font-black uppercase leading-tight tracking-tight text-white sm:text-[40px] xl:text-[40px]">
            {data.title}
          </h2>

          <p className="mb-2 mt-3 text-[14px] font-normal text-white">
            {data.description}
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col rounded-2xl border p-7"
              style={{
                background: "rgba(255,255,255,0.12)",
                borderColor: "rgba(74,166,107,0.6)",
              }}
            >
              {/* Icon */}
              <span
                className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-full"
                style={{
                  background: "rgba(74,166,107,0.2)",
                  color: "#4CA66B",
                }}
              >
                {icons[feature.icon]}
              </span>

              {/* Title */}
              <h3 className="mb-3 text-[13px] font-bold uppercase tracking-[0.12em] text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] leading-[1.65] text-white/60">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
