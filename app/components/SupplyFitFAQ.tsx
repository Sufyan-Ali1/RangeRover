"use client";

import { useState } from "react";
import {
  supplyAndFitFAQData,
  SupplyAndFitFAQDataProps,
} from "../data/supplyFit/Faqs";

interface SupplyFitFAQProps {
  data?: SupplyAndFitFAQDataProps;
}

export default function SupplyFitFAQ({
  data = supplyAndFitFAQData,
}: SupplyFitFAQProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#F3F4F6]">
      <div className="mx-auto w-full max-w-[1728px] px-6 py-16 sm:px-10 xl:px-[101px] xl:py-20">
        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#4CA66B]">
            {data.sectionHeading}
          </p>
          <h2 className="text-[36px] font-black uppercase leading-tight tracking-tight text-gray-900 sm:text-[44px]">
            {data.intro}
          </h2>
        </div>

        {/* Accordion */}
        <div className="mx-auto flex max-w-[800px] flex-col gap-3">
          {data.faqs.map((faq, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl"
              style={{ background: "#11633A" }}
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-7 py-5 text-left"
              >
                <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-white sm:text-[13px]">
                  {faq.q}
                </span>
                <span
                  className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300"
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </button>

              {open === i && (
                <div className="px-7 pb-6">
                  <p className="text-[13px] leading-[1.7] text-white/75">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
