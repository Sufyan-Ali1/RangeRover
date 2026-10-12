import React from "react";

interface AreaTechnicalBannerProps {
  technicalHeader?: string;
  technicalParagraph?: string;
}

export function AreaTechnicalBanner({ 
  technicalHeader, 
  technicalParagraph 
}: AreaTechnicalBannerProps) {
  if (!technicalParagraph) return null;

  return (
    <div className="relative rounded-xl bg-gradient-to-br from-white via-slate-50/60 to-slate-100/70 p-6 border border-slate-200/90 hover:border-green-500/40 space-y-2 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Permanent subtle gradient shade background matching your cards */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-500/[0.03] to-green-500/[0.04] pointer-events-none" />

      {technicalHeader && (
        <p className="relative z-10 text-xs font-semibold uppercase tracking-wider text-[#11633A]">
          {technicalHeader}
        </p>
      )}
      <p className="relative z-10 text-sm text-slate-600 leading-relaxed">
        {technicalParagraph}
      </p>
    </div>
  );
}