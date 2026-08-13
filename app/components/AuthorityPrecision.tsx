"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { AuthoritySectionData } from "../data/authority";

export default function AuthorityPrecision({ data }: { data: AuthoritySectionData | undefined }) {
  const [hydrated, setHydrated] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hydrated]);

  const leftClassName = hydrated && !visible
    ? "translate-x-[-80px] translate-y-[80px] opacity-0"
    : "translate-x-0 translate-y-0 opacity-100";

  const rightClassName = hydrated && !visible
    ? "translate-x-[80px] translate-y-[-80px] opacity-0"
    : "translate-x-0 translate-y-0 opacity-100";

  return (
    <div className="w-full bg-white" ref={ref}>
      <div className="mx-auto w-full max-w-[1728px] px-6 py-16 sm:px-10 xl:px-[101px] xl:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
          <div className={`flex flex-1 flex-col transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:opacity-100 ${leftClassName}`}>
            <h2 className="mb-4 text-[28px] font-black leading-tight text-gray-900 sm:text-[36px]">
              {data?.titleBefore}
              <span className="text-[#1a5c2e]">{data?.titleHighlight}</span>
            </h2>
            {data?.paragraphs && data.paragraphs.map((p, i) => (
              <p key={i} className={`text-[13px] leading-relaxed text-gray-600 ${i > 0 ? "mt-4" : ""}`}>
                {p}
              </p>
            ))}
          </div>

          <div className={`relative flex min-h-[260px] flex-1 flex-col transition-all delay-150 duration-700 ease-out motion-reduce:transform-none motion-reduce:opacity-100 sm:min-h-[320px] ${rightClassName}`}>
            <Image
              src="/images/workshop-8.webp"
              alt="Range Rover engine precision work"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="rounded-2xl object-cover"
            />
            <div className="absolute bottom-6 left-6 z-10">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9EECBA]">
                {data?.badge?.label}
              </p>
              <p className="text-[18px] font-black uppercase tracking-wider text-white">
                {data?.badge?.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
