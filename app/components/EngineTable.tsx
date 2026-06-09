"use client";
import { useState } from "react";
import Link from "next/link";

export interface EngineTableRow {
  make: string;
  model: string;
  engineCode: string;
  actualCC: string | number;
  powerKwHp: string;
  yearRange: string;
}

export interface EngineTableProps {
  title: string;
  rows: EngineTableRow[];
  rowsPerPage?: number;
  getQuoteHref?: string | ((row: EngineTableRow) => string);
  notFoundText?: string;
  notFoundLinkText?: string;
  notFoundHref?: string;
}

export default function EngineTable({
  title,
  rows,
  rowsPerPage = 9,
  getQuoteHref = "/get-quote",
  notFoundText = "Did Not Find Your Engine code.",
  notFoundLinkText = "CLICK HERE",
  notFoundHref = "/get-quote",
}: EngineTableProps) {
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(rows.length / rowsPerPage));
  const start = (page - 1) * rowsPerPage;
  const visibleRows = rows.slice(start, start + rowsPerPage);

  const getHref = (row: EngineTableRow) =>
    typeof getQuoteHref === "function" ? getQuoteHref(row) : getQuoteHref;

  // Show up to 5 page numbers centred around current page
  const pageWindow = 5;
  const halfWindow = Math.floor(pageWindow / 2);
  let pageStart = Math.max(1, page - halfWindow);
  let pageEnd = Math.min(totalPages, pageStart + pageWindow - 1);
  if (pageEnd - pageStart < pageWindow - 1) {
    pageStart = Math.max(1, pageEnd - pageWindow + 1);
  }
  const pageNumbers = Array.from({ length: pageEnd - pageStart + 1 }, (_, i) => pageStart + i);

  return (
    <section className="w-full bg-[#F3F4F6] px-6 py-16 sm:px-10 xl:px-[101px] xl:py-20">
      <div className="mx-auto w-full max-w-[1728px]">

        {/* Title */}
        <h2 className="mb-8 text-center text-[22px] font-bold leading-snug text-gray-900 sm:text-[26px]">
          {title}
        </h2>

        {/* Table card */}
        <div className="overflow-hidden rounded-2xl shadow-md">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#11633A]">
                {["Make", "Model", "Engine Code", "Actual CC", "Power kw / hp", "Year Range"].map((col) => (
                  <th
                    key={col}
                    className="px-6 py-4 text-left text-[13px] font-semibold text-white"
                  >
                    {col}
                  </th>
                ))}
                {/* Empty header for Get Quote column */}
                <th className="bg-[#0d4f2d] px-6 py-4" />
              </tr>
            </thead>
            <tbody>
              {visibleRows.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-200 bg-white last:border-b-0"
                >
                  <td className="px-6 py-4 text-[13px] text-gray-700">{row.make}</td>
                  <td className="px-6 py-4 text-[13px] text-gray-700">{row.model}</td>
                  <td className="px-6 py-4 text-[13px] text-gray-700">{row.engineCode}</td>
                  <td className="px-6 py-4 text-[13px] text-gray-700">{row.actualCC}</td>
                  <td className="px-6 py-4 text-[13px] text-gray-700">{row.powerKwHp}</td>
                  <td className="px-6 py-4 text-[13px] text-gray-700">{row.yearRange}</td>
                  <td className="border-l border-gray-200 bg-[#11633A] px-6 py-4">
                    <Link
                      href={getHref(row)}
                      className="whitespace-nowrap text-[14px] font-bold text-white hover:text-white/80"
                    >
                      Get Quote
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-3">
            {pageNumbers.map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={`text-[15px] transition-colors ${
                  n === page
                    ? "font-bold text-gray-900"
                    : "font-normal text-gray-400 hover:text-gray-700"
                }`}
              >
                {n}
              </button>
            ))}

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              aria-label="Next page"
              className="ml-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#11633A] text-white transition hover:bg-[#0d4f2d] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {/* Not found */}
        <p className="mt-6 text-center text-[14px] text-gray-700">
          {notFoundText}{" "}
          <Link
            href={notFoundHref}
            className="font-bold underline underline-offset-2 hover:text-[#11633A]"
          >
            {notFoundLinkText}
          </Link>
        </p>

      </div>
    </section>
  );
}
