"use client";
import { useEffect, useRef, useState } from "react";
import type { AuthoritySectionData } from "../data/authority";

export default function AuthorityNationwide({ data }: { data: AuthoritySectionData }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Left image: enters from top-left corner
  const leftStyle: React.CSSProperties = {
    transform: visible ? "translate(0, 0)" : "translate(-80px, -80px)",
    opacity: visible ? 1 : 0,
    transition: "transform 0.8s ease-out, opacity 0.8s ease-out",
  };

  // Right text: enters from bottom-right corner
  const rightStyle: React.CSSProperties = {
    transform: visible ? "translate(0, 0)" : "translate(80px, 80px)",
    opacity: visible ? 1 : 0,
    transition: "transform 0.8s ease-out 0.2s, opacity 0.8s ease-out 0.2s",
  };

  return (
    <div className="w-full bg-[#F3F4F6]" ref={ref}>
      <div className="mx-auto w-full max-w-[1728px] px-6 py-16 sm:px-10 xl:px-[101px] xl:py-20">
        <div className="flex flex-col-reverse gap-12 lg:flex-row lg:items-stretch lg:gap-16">

          <div
            className="relative flex min-h-[260px] flex-1 flex-col sm:min-h-[320px]"
            style={leftStyle}
          >
            <img
              src="/range-rover/range%20rover%20garage%20image%205.jpg"
              alt="Range Rover Garage workshop"
              className="w-full flex-1 rounded-2xl object-cover"
            />
            <div className="absolute bottom-6 left-6">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9EECBA]">
                {data.badge.label}
              </p>
              <p className="text-[18px] font-black uppercase tracking-wider text-white">
                {data.badge.title}
              </p>
            </div>
          </div>

          <div
            className="flex flex-1 flex-col"
            style={rightStyle}
          >
            <h2 className="mb-4 text-[28px] font-black leading-tight text-gray-900 sm:text-[36px]">
              {data.titleBefore}
              <span className="text-[#1a5c2e]">{data.titleHighlight}</span>
            </h2>
            {data.paragraphs.map((p, i) => (
              <p key={i} className={`text-[13px] leading-relaxed text-gray-600 ${i < data.paragraphs.length - 1 ? "mb-5" : ""}`}>
                {p}
              </p>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
