import Link from "next/link";
import { areasData } from "@/app/data/areas";
import { type Area } from "@/app/data/types";

type Props = {
  currentArea: Area;
};

export function AreaMapAndLinks({ currentArea }: Props) {
  const otherAreas = areasData.filter((a) => a.slug !== currentArea.slug);
  // Construct map query based on area name or slug
  const mapQuery = encodeURIComponent(`${currentArea.title}, UK`);
  const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1728px] px-6 py-10 sm:px-10 xl:px-[101px] xl:py-14 space-y-6">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-slate-900">
            {currentArea.title} Map and Other Areas
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Browse the rest of our area pages and jump straight to the location you need.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12 items-stretch">
          {/* ── Map Card ──────────────────────────────────────────────────────── */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-br from-white via-slate-50/60 to-slate-100/70 shadow-md hover:shadow-xl hover:border-green-500/40 transition-all duration-300 flex flex-col justify-between lg:col-span-7">
            {/* Permanent subtle gradient background shade */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-500/[0.03] to-green-500/[0.04] pointer-events-none" />

            <div className="aspect-[4/3] w-full lg:aspect-auto lg:h-full lg:min-h-[420px] relative z-10">
              <iframe
                title={`Map of ${currentArea.title}`}
                src={mapSrc}
                className="h-full w-full border-0 filter contrast-[0.95]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="relative z-10 flex items-center justify-between border-t border-slate-200/80 px-6 py-4 text-sm bg-white/60 backdrop-blur-sm">
              <span className="font-bold text-slate-900">
                {currentArea.title}
              </span>
              <a
                href={mapHref}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#11633A] hover:text-[#0e512f] transition-colors inline-flex items-center gap-1"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>

          {/* ── Other areas panel ────────────────────────────────────────── */}
          <div className="group relative flex flex-col justify-between gap-6 rounded-3xl border border-slate-200/90 bg-gradient-to-br from-white via-slate-50/60 to-slate-100/70 p-6 sm:p-8 shadow-md hover:shadow-xl hover:border-green-500/40 transition-all duration-300 lg:col-span-5 overflow-hidden">
            {/* Permanent subtle gradient background shade */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-500/[0.03] to-green-500/[0.04] pointer-events-none" />

            {/* Header */}
            <div className="relative z-10 space-y-1">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#11633A]">
                Other Areas
              </div>
              <div className="text-xl font-bold tracking-tight text-slate-900">
                Linked Pages
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Browse the rest of our area pages and jump straight to the location you need.
              </p>
            </div>

            {/* Area grid (Showing a balanced count, e.g., first 8 or all) */}
            <div className="relative z-10 grid grid-cols-2 gap-2.5">
              {otherAreas.slice(0, 8).map((a) => (
                <Link
                  key={a.slug}
                  href={`/areas/${a.slug}`}
                  className="group/link flex items-center gap-2.5 rounded-xl border border-slate-200/90 bg-white/90 px-4 py-3 text-xs sm:text-sm font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-green-500/40 hover:text-[#11633A] hover:shadow-md"
                >
                  <span
                    className="h-2 w-2 shrink-0 rounded-full bg-[#11633A] transition-transform group-hover/link:scale-125"
                    aria-hidden="true"
                  />
                  <span className="truncate">{a.title}</span>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="relative z-10 pt-2">
              <Link
                href="/areas"
                className="inline-flex w-full items-center justify-between rounded-xl bg-[#11633A] px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#0e512f]"
              >
                <span>View More Areas</span>
                <span
                  className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-white text-xs font-bold"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}