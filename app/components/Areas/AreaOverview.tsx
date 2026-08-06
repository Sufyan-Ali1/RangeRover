import React from "react";

interface AreaOverviewProps {
  eyebrowLabel?: string;
  overviewHeading?: string;
  fullOverviewParagraphs?: string[];
}

export function AreaOverview({ 
  eyebrowLabel, 
  overviewHeading, 
  fullOverviewParagraphs 
}: AreaOverviewProps) {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          {/* Dynamic Eyebrow Label */}
          {eyebrowLabel && (
            <p className="text-xs font-semibold uppercase tracking-wider text-[#11633A]">
              {eyebrowLabel}
            </p>
          )}
          {/* Dynamic Overview Heading */}
          {overviewHeading && (
            <h2 className="text-3xl font-black text-slate-900 mt-1">
              {overviewHeading}
            </h2>
          )}
        </div>
      </div>
      
      {/* Conditionally render paragraphs with slight card-like framing or refined spacing if desired */}
      {fullOverviewParagraphs && fullOverviewParagraphs.length > 0 && (
        <div className="space-y-4 text-slate-700 text-base leading-relaxed pt-2">
          {fullOverviewParagraphs.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      )}
    </>
  );
}