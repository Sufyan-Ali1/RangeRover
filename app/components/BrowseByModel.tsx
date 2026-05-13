"use client";

import { useState } from "react";
import Link from "next/link";
import type { Model } from "../data/models";
import { toBrandSlug, toModelSlug } from "../data/models";
import type { Brand } from "../data/brands";

// ── Model Card ────────────────────────────────────────────────────────────────

function ModelCard({ model, light }: { model: Model; light: boolean }) {
  const href = `/engines/${toBrandSlug(model.brand)}/${toModelSlug(model.model)}`;

  return (
    <Link
      href={href}
      className="rounded-2xl p-[4px] block"
      style={{
        background: light
          ? "linear-gradient(135deg, #11633A 0%, #11633A 12%, #11633A22 40%, #11633A22 60%, #11633A 88%, #11633A 100%)"
          : "linear-gradient(135deg, #9EECBA 0%, #9EECBA 12%, #9EECBA22 40%, #9EECBA22 60%, #9EECBA 88%, #9EECBA 100%)",
      }}
    >
      <div className={`flex h-full flex-col rounded-xl p-6 ${light ? "bg-white" : "bg-[#0d0d0d]"}`}>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-[#ECFFF3]">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#11633A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M2 17l10 5 10-5"/>
            <path d="M2 12l10 5 10-5"/>
          </svg>
        </div>
        <p className="text-[11px] font-bold uppercase tracking-wider text-[#4CA66B]">{model.brand}</p>
        <h3
          className="text-[32px] font-black leading-tight"
          style={
            light
              ? { color: "#111827" }
              : {
                  background: "linear-gradient(180deg, #FFFFFF 0%, #878787 46.99%, #FFFFFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }
          }
        >
          {model.model}
        </h3>
        <p className="mt-0.5 text-[11px] font-bold uppercase tracking-wider text-[#4CA66B]">{model.service}</p>
        <p className={`mt-3 flex-1 text-[13px] italic leading-relaxed ${light ? "text-gray-500" : "text-white/70"}`}>
          {model.desc}
        </p>
        <span
          className={`mt-5 block w-full rounded-lg border-2 py-3 text-center text-[13px] font-semibold transition ${
            light
              ? "border-[#11633A] bg-[#11633A] text-white hover:bg-[#11633A]"
              : "border-white bg-[#4b4b4b] text-[#9EECBA] hover:bg-[#5a5a5a]"
          }`}
        >
          Explore More
        </span>
      </div>
    </Link>
  );
}

// ── Brand Card ────────────────────────────────────────────────────────────────

function BrandCard({ brand, light }: { brand: Brand; light: boolean }) {
  return (
    <Link
      href={`/engines/${brand.slug}`}
      className="rounded-2xl p-[4px] block"
      style={{
        background: light
          ? "linear-gradient(135deg, #11633A 0%, #11633A 12%, #11633A22 40%, #11633A22 60%, #11633A 88%, #11633A 100%)"
          : "linear-gradient(135deg, #9EECBA 0%, #9EECBA 12%, #9EECBA22 40%, #9EECBA22 60%, #9EECBA 88%, #9EECBA 100%)",
      }}
    >
      <div className={`flex h-full flex-col rounded-xl p-6 ${light ? "bg-white" : "bg-[#0d0d0d]"}`}>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-[#ECFFF3]">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#11633A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M2 17l10 5 10-5"/>
            <path d="M2 12l10 5 10-5"/>
          </svg>
        </div>
        <p className="text-[11px] font-bold uppercase tracking-wider text-[#4CA66B]">ENGINE BRAND</p>
        <h3
          className="text-[32px] font-black leading-tight"
          style={
            light
              ? { color: "#111827" }
              : {
                  background: "linear-gradient(180deg, #FFFFFF 0%, #878787 46.99%, #FFFFFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }
          }
        >
          {brand.name}
        </h3>
        <p className="mt-0.5 text-[11px] font-bold uppercase tracking-wider text-[#4CA66B]">{brand.tagline}</p>
        <p className={`mt-3 flex-1 text-[13px] italic leading-relaxed ${light ? "text-gray-500" : "text-white/70"}`}>
          {brand.desc}
        </p>
        <span
          className={`mt-5 block w-full rounded-lg border-2 py-3 text-center text-[13px] font-semibold transition ${
            light
              ? "border-[#11633A] bg-[#11633A] text-white hover:bg-[#11633A]"
              : "border-white bg-[#4b4b4b] text-[#9EECBA] hover:bg-[#5a5a5a]"
          }`}
        >
          Explore More
        </span>
      </div>
    </Link>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

interface BrowseByModelProps {
  brands?: Brand[];
  rangeRoverModels?: Model[];
  landRoverModels?: Model[];
  allModels?: Model[];
  light?: boolean;
  bgImage?: string;
  label?: string;
  heading?: string;
  description?: string;
}

export default function BrowseByModel({
  brands,
  rangeRoverModels = [],
  landRoverModels = [],
  allModels,
  light = false,
  bgImage = "/header.svg",
  label,
  heading,
  description,
}: BrowseByModelProps) {
  const [activeTab, setActiveTab] = useState<"range-rover" | "land-rover">("range-rover");

  const isBrandsMode = !!brands;
  const isFlat = !isBrandsMode && !!allModels;
  const showTabs = !isBrandsMode && !isFlat;

  const displayModels = allModels ?? (activeTab === "range-rover" ? rangeRoverModels : landRoverModels);

  return (
    <section className={`relative w-full overflow-hidden ${light ? "bg-white" : ""}`}>
      {!light && (
        <img
          src={bgImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      <div className="relative z-10 mx-auto w-full max-w-[1728px] px-6 py-16 sm:px-10 xl:px-[101px] xl:py-20">

        <div className="mb-10 text-center">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#4CA66B]">
            {label ?? (isBrandsMode ? "Browse By Brand" : "Browse By Model")}
          </p>
          <h2 className={`text-[28px] font-black sm:text-[36px] ${light ? "text-gray-900" : "text-white"}`}>
            {heading ?? (isBrandsMode ? "Engine Brands We Specialise In" : "Range Rover & Land Rover Models We Service")}
          </h2>
          <p className={`mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed ${light ? "text-gray-500" : "text-white/55"}`}>
            {description ?? (isBrandsMode
              ? "We provide specialist engine rebuilds, replacements and repairs across all major vehicle brands — using genuine OEM parts and backed by up to 24-month warranty."
              : "Choose your exact Range Rover or Land Rover model for specialist engine rebuild, replacement and repair services — all carried out by JLR-trained engineers with genuine OEM parts.")}
          </p>
        </div>

        {showTabs && (
          <div className="mb-10 flex justify-center">
            <div className="flex rounded-full p-1.5 shadow-lg" style={{ background: "#ECFFF3" }}>
              <button
                type="button"
                onClick={() => setActiveTab("range-rover")}
                className={`rounded-full px-5 py-2 text-[12px] font-bold transition sm:px-8 sm:py-2.5 sm:text-[13px] ${
                  activeTab === "range-rover" ? "bg-[#2d6a4f] text-white" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Range Rover
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("land-rover")}
                className={`rounded-full px-5 py-2 text-[12px] font-bold transition sm:px-8 sm:py-2.5 sm:text-[13px] ${
                  activeTab === "land-rover" ? "bg-[#2d6a4f] text-white" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Land Rover
              </button>
            </div>
          </div>
        )}

        {isBrandsMode ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {brands!.map((brand) => (
              <BrandCard key={brand.slug} brand={brand} light={light} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {displayModels.map((model, i) => (
              <ModelCard key={i} model={model} light={light} />
            ))}
          </div>
        )}

        {showTabs && (
          <div className="mt-10 flex justify-center">
            <Link
              href="/engines"
              className="w-full max-w-[320px] rounded-xl bg-[#4CA66B] py-4 text-center text-[13px] font-bold text-white transition hover:bg-[#11633A]"
            >
              View More
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
