import React from "react";

interface AreaTagListProps {
  title?: string;
  tags?: string[];
}

export function AreaTagList({ title, tags }: AreaTagListProps) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="pt-4 border-t border-slate-200 space-y-3">
      {title && (
        <p className="text-xs font-semibold uppercase tracking-wider text-[#11633A]">
          {title}
        </p>
      )}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span 
            key={idx} 
            className="rounded-full bg-gradient-to-br from-white via-slate-50/60 to-slate-100/70 px-3.5 py-1.5 text-xs font-semibold text-slate-700 border border-slate-200/90 shadow-sm hover:border-green-500/40 hover:text-[#11633A] transition-all duration-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}