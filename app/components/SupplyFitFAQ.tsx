"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What specific Range Rover engines do you specialise in?",
    answer:
      "We specialise in the full JLR engine range including the 5.0L V8 Supercharged, 3.0L TDV6, SDV6, SDV8, 2.0L Ingenium petrol and diesel platforms. Our technicians work exclusively on Range Rover and Land Rover models, covering every variant from the Freelander and Discovery Sport to the Defender, Range Rover Sport and full-size Range Rover.",
  },
  {
    question: "Do you supply genuine OEM parts or aftermarket?",
    answer:
      "We supply genuine OEM parts sourced directly from Land Rover-approved UK distributors. Every part is verified against your vehicle's VIN before ordering to ensure correct fitment. We do not use aftermarket alternatives unless specifically requested and agreed in writing by the customer.",
  },
  {
    question: "How long does a typical supply and fit appointment take?",
    answer:
      "The duration depends on the component being fitted. Many parts — including brake components, suspension items and sensors — are completed on the same day. More complex assemblies such as turbochargers, transfer boxes or engine replacements may require the vehicle to stay for one to two days. We always confirm the expected timeframe before booking.",
  },
  {
    question: "Is there a warranty on supply and fit work?",
    answer:
      "Yes. Every supply and fit job completed at our workshop is backed by a 12-month parts and labour warranty as standard. This covers both the component supplied and the labour involved in fitting it. A written warranty certificate is issued on collection of your vehicle.",
  },
  {
    question: "Can you source parts for older Range Rover models?",
    answer:
      "Yes — we stock and can source parts for a wide range of Range Rover and Land Rover models including the Classic, P38, L322, L405 and Sport variants. For older or discontinued models we work with specialist suppliers to locate the correct component. Contact our team with your registration and we will confirm availability and lead time.",
  },
  {
    question: "Do you offer same-day fitting?",
    answer:
      "Same-day fitting is available for the majority of in-stock components. When you contact us we will confirm whether the part is available immediately or requires a short lead time. For planned work we recommend booking in advance so we can have the part ready before your appointment.",
  },
];

export default function SupplyFitFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#F3F4F6]">
      <div className="mx-auto w-full max-w-[1728px] px-6 py-16 sm:px-10 xl:px-[101px] xl:py-20">

        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#4CA66B]">
            Service Expertise
          </p>
          <h2 className="text-[36px] font-black uppercase leading-tight tracking-tight text-gray-900 sm:text-[44px]">
            Service <span style={{ color: "#11633A" }}>FAQs</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="mx-auto flex max-w-[800px] flex-col gap-3">
          {faqs.map((faq, i) => (
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
                  {faq.question}
                </span>
                <span
                  className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300"
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </button>

              {open === i && (
                <div className="px-7 pb-6">
                  <p className="text-[13px] leading-[1.7] text-white/75">
                    {faq.answer}
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
