import { ServiceCardData } from "@/app/data/types";
import Link from "next/link";

interface PremiumServiceCardsProps {
  cards: ServiceCardData[];
}

const ACCENTS = [
  "from-green-500/15 via-slate-50/60 to-white",
  "from-emerald-500/15 via-slate-50/60 to-white",
  "from-green-600/15 via-slate-50/60 to-white",
];

function CardIcon({ label }: { label: string }) {
  return (
    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#11633A] text-white shadow-sm ring-1 ring-black/5">
      <span className="text-xs font-black tracking-wide">{label}</span>
    </div>
  );
}

export function PremiumServiceCards({ cards }: PremiumServiceCardsProps) {
  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {cards.map((card, idx) => {
            const accent = ACCENTS[idx % ACCENTS.length];

            return (
              <div
                key={card.heading}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-linear-to-br from-white via-slate-50/60 to-slate-100/70 shadow-md ring-1 ring-black/5 transition-all duration-300 hover:border-green-500/40 hover:shadow-xl"
              >
                {/* Permanent subtle background shade matching your cards style */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-slate-500/3 to-green-500/4" />

                {/* Top dynamic gradient accent layer */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-linear-to-b ${accent} opacity-60`}
                />

                {/* Ambient glow effect on hover */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#11633A]/10 blur-2xl group-hover:bg-[#11633A]/20 transition-all duration-300" />

                <div className="relative flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <CardIcon label={`0${idx + 1}`} />
                  </div>

                  {/* Dynamic heading */}
                  <h3 className="mt-4 text-balance text-xl font-semibold tracking-tight text-slate-900 group-hover:text-[#11633A] transition-colors">
                    {card.heading}
                  </h3>

                  <div className="mt-3 flex-1 space-y-3 text-sm leading-6 text-slate-600">
                    {card?.paragraphs?.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  <div className="mt-6 pt-2">
                    <Link
                      href="/get-quote"
                      className="inline-flex h-11 w-full items-center justify-center rounded-2xl bg-[#11633A] px-5 text-sm font-semibold text-white shadow-sm ring-1 ring-black/5 hover:bg-[#0e512f] transition-colors whitespace-nowrap"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
