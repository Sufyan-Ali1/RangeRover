"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supplyFitEnginesQuoteData } from "../data/supplyFit/SupplyFitEnginesQuoteData";
import { SupplyFitEnginesQuoteDataProps } from "../data/types";

function gridClass(visible: number) {
  if (visible === 1) return "grid-cols-1";
  if (visible === 2) return "grid-cols-2";
  if (visible === 3) return "grid-cols-3";
  return "grid-cols-4";
}

interface SupplyFitEnginesQuoteProps {
  data?: SupplyFitEnginesQuoteDataProps;
}

export default function SupplyFitEnginesQuote({
  data = supplyFitEnginesQuoteData,
}: SupplyFitEnginesQuoteProps) {
  const [page, setPage] = useState(0);
  const [visible, setVisible] = useState(4);

  const enginesList = data.engines;

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) {
        setVisible(1);
      } else if (window.innerWidth < 900) {
        setVisible(2);
      } else if (window.innerWidth < 1200) {
        setVisible(3);
      } else {
        setVisible(4);
      }
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  useEffect(() => {
    setPage(0);
  }, [visible]);

  const totalPages = Math.ceil(enginesList.length / visible);
  const visibleEngines = enginesList.slice(
    page * visible,
    (page + 1) * visible,
  );
  const canPrev = page > 0;
  const canNext = page < totalPages - 1;

  return (
    <section className="w-full bg-[#F3F4F6]">
      <div className="mx-auto w-full max-w-[1728px] px-6 py-16 sm:px-10 xl:px-[101px] xl:py-20">
        <div className="mb-8 text-center">
          <h2 className="text-[32px] font-black uppercase leading-tight tracking-tight text-gray-900 sm:text-[40px] xl:text-[48px]">
            {data.headingPart1}{" "}
            <span style={{ color: "#11633A" }}>{data.headingPart2}</span>
            <br />
            <span style={{ color: "#11633A" }}>{data.headingPart3}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-[1.7] text-gray-600">
            {data.description}
          </p>
        </div>

        <div className="mx-auto mb-10 max-w-3xl rounded-xl border border-[#b6e8c8] bg-[#f0faf4] px-6 py-5 text-center">
          <p className="text-[14px] font-semibold leading-[1.7] text-[#11633A]">
            {data.noticeText}
          </p>
        </div>

        <div className={`grid auto-rows-fr gap-5 ${gridClass(visible)}`}>
          {visibleEngines.map((engine) => (
            <div
              key={engine.id}
              className="flex h-full min-w-0 flex-col rounded-xl border border-[#c8e6d4] bg-white"
            >
              <div className="h-[180px] w-full overflow-hidden rounded-t-xl bg-white p-4">
                <img
                  src={engine.image}
                  alt={engine.title}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="h-px bg-[#c8e6d4]" />

              <div className="flex flex-1 flex-col p-4">
                <h3 className="mb-1.5 min-h-[56px] text-[14px] font-bold leading-snug text-gray-900">
                  {engine.title}
                </h3>
                <p className="mb-3 min-h-[56px] text-[12px] leading-[1.55] text-gray-500">
                  {engine.description}
                </p>
                <ul className="mb-3 flex flex-col gap-0.5">
                  {engine.specs?.map((spec, index) => (
                    <li
                      key={index}
                      className="text-[11px] leading-[1.5] text-gray-500"
                    >
                      &bull; {spec}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/get-quote"
                  className="mt-auto inline-flex items-center justify-center rounded-lg bg-[#11633A] px-4 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-opacity hover:opacity-90"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setPage((current) => Math.max(0, current - 1))}
              disabled={!canPrev}
              className="flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 sm:h-11 sm:w-11"
              style={{ background: "#11633A" }}
              aria-label="Previous"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() =>
                setPage((current) => Math.min(totalPages - 1, current + 1))
              }
              disabled={!canNext}
              className="flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 sm:h-11 sm:w-11"
              style={{ background: "#11633A" }}
              aria-label="Next"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
