import Link from "next/link";
import { AreaSpecialistData } from "../../data/types";

export function AreaRangeRoverSpecialist({
  data,
}: {
  data: AreaSpecialistData;
}) {
  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-432 px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-linear-to-br from-white via-slate-50/60 to-slate-100/70 p-6 shadow-md ring-1 ring-black/5 sm:p-10">
          {/* Permanent subtle background shade matching your cards style */}
          <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-slate-500/3 to-green-500/4" />

          {/* Ambient glow effects adjusted to theme */}
          <div className="pointer-events-none absolute -top-24 right-0 h-105 w-105 rounded-full bg-green-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-0 h-105 w-105 rounded-full bg-emerald-500/10 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-3 lg:items-start">
            {/* Main Content Area */}
            <div className="lg:col-span-2">
              <p className="inline-flex items-center rounded-full bg-[#11633A]/10 px-3 py-1 text-xs font-semibold tracking-wide text-[#11633A] ring-1 ring-[#11633A]/15 shadow-sm">
                {data.eyebrow}
              </p>
              <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                {data.heading}
              </h2>

              <div className="mt-4 space-y-4">
                {data.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-pretty text-base leading-7 text-slate-600 sm:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Optional Main Bullets */}
              {data.mainBullets && data.mainBullets.length > 0 && (
                <ul className="mt-6 space-y-3">
                  {data.mainBullets.map((bullet, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-base text-slate-700"
                    >
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#11633A]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Side Panel */}
            <div className="lg:col-span-1">
              <div className="rounded-2xl border border-slate-200/90 bg-white/80 backdrop-blur-sm p-5 shadow-sm">
                <p className="text-sm font-bold text-slate-900">
                  {data.sidePanel.heading}
                </p>

                {/* Chips/Tabs */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {data.sidePanel.chips.map((chip, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-linear-to-br from-white via-slate-50/60 to-slate-100/70 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200 shadow-sm"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                {/* Side Panel Bullets */}
                <div className="mt-5 space-y-3 text-sm text-slate-700">
                  {data.sidePanel.bullets.map((bullet, index) => (
                    <div key={index} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-xl bg-[#11633A] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#0e512f] shadow-sm"
                >
                  {data.sidePanel.buttonLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
