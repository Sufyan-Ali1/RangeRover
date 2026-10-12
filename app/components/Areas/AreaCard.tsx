import React from "react";
import Link from "next/link";
import { Area } from "@/app/data/types";

interface AreaCardProps {
  area: Area;
}

export const AreaCard: React.FC<AreaCardProps> = ({ area }) => {
  return (
    <Link
      href={`/areas/${area.slug}`}
      title={area.title}
      className="group relative bg-gradient-to-br from-white via-slate-50/60 to-slate-100/70 rounded-xl shadow-md hover:shadow-xl border border-slate-200/90 hover:border-green-500/40 transition-all duration-300 flex items-center justify-between px-5 py-4 w-full overflow-hidden"
    >
      {/* Permanent subtle gradient shade background */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-500/[0.03] to-green-500/[0.04]" />

      {/* Interactive hover gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/[0.02] to-green-500/[0.08] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Title taking up the remaining space efficiently */}
      <h3 className="relative z-10 text-base font-bold text-slate-900 group-hover:text-[#11633A] transition-colors truncate pr-2">
        {area.title}
      </h3>

      {/* Slimmer arrow icon to preserve max width for the title */}
      <div className="relative z-10 shrink-0 text-slate-400 group-hover:text-[#11633A] transition-colors">
        <svg
          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </Link>
  );
};