"use client";

import { useState } from "react";
import type { Faq } from "../data/faqs";

export default function FAQ({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#F3F4F6]">
      <div className="mx-auto w-full max-w-[1728px] px-6 py-16 sm:px-10 xl:px-[101px] xl:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">

          <div className="flex w-full flex-col lg:w-[380px] lg:shrink-0">
            <h2 className="mb-4 text-[28px] font-black leading-tight text-gray-900 sm:text-[36px]">
              Frequently Asked Questions
            </h2>
            <p className="mb-8 text-[14px] leading-relaxed text-gray-500">
              Everything you need to know about our Range Rover and Land Rover engine rebuild,
              replacement and repair services — answered by our JLR-trained specialists.
            </p>
            <a
              href="/get-quote"
              className="inline-flex w-fit items-center justify-center rounded-[12px] border-2 border-[#11633A] px-8 py-3 text-[14px] font-bold text-[#11633A] transition hover:bg-[#11633A]/5"
            >
              Request A Quote
            </a>
          </div>

          <div className="flex flex-1 flex-col rounded-[10px] border-2 border-[#4CA66B] p-4">
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className={`w-full rounded-[10px] border border-[#4CA66B] text-left transition-all duration-200 min-h-[88px] sm:min-h-[104px] ${
                      isOpen ? "bg-[#ECFFF3]" : "bg-white hover:bg-[#F5FFF8]"
                    }`}
                  >
                    <div className="flex items-center gap-3 px-4 py-5 sm:gap-8 sm:px-8 sm:py-7">
                      <span className="w-8 shrink-0 text-[16px] font-bold text-gray-400">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1">
                        <p className="text-[16px] font-bold text-gray-900">{faq.q}</p>
                        {isOpen && (
                          <p className="mt-3 text-[14px] leading-relaxed text-gray-600">{faq.a}</p>
                        )}
                      </div>
                      <span className="shrink-0 text-[22px] font-light leading-none text-gray-700">
                        {isOpen ? "×" : "+"}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
