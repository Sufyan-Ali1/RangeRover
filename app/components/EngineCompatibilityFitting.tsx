import Link from "next/link";

interface CompatibilityFittingData {
  cards: {
    icon: string;
    eyebrow: string;
    title: string;
    description: string;
    checks: string[];
    ctaLabel: string;
    ctaHref: string;
  }[];
}

function PanelIcon({ name }: { name: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0" aria-hidden="true">
      <path d={name === "workshop" ? "M12 3l2 3 4-1 1 4 3 3-3 2 1 4-4 1-3 3-2-3-4 1-1-4-3-3 3-2-1-4 4-1zM16 12a4 4 0 11-8 0 4 4 0 018 0" : "M12 2l3 3 4 1 1 4 2 2-2 3-1 4-4 1-3 2-3-2-4-1-1-4-2-3 2-2 1-4 4-1zM8 12l3 3 5-6"} />
    </svg>
  );
}

export default function EngineCompatibilityFitting({ data }: { data: CompatibilityFittingData }) {
  return (
    <section className="bg-[#F9FAFB] px-5 py-10 sm:px-8 lg:py-14">
      <div className="mx-auto grid max-w-[1216px] gap-6 lg:grid-cols-2 lg:gap-8">
        {data.cards.map((card) => (
          <article key={card.title} className="flex min-w-0 flex-col rounded-2xl border border-[#11633A]/10 bg-[#dff0df] p-6 sm:p-8">
            <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-[#11633A]"><PanelIcon name={card.icon} />{card.eyebrow}</p>
            <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-[#0d4f2d]">{card.title}</h2>
            <p className="mt-2 text-sm leading-6 text-gray-700">{card.description}</p>
            <ul className="mb-6 mt-4 space-y-1.5 rounded bg-white px-3 py-3 text-xs leading-relaxed text-gray-700 sm:text-sm">
              {card.checks.map((check) => (
                <li key={check} className="flex items-start gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-[#11633A]" aria-hidden="true"><path d="M5 12l4 4L19 6" /></svg>
                  <span>{check}</span>
                </li>
              ))}
            </ul>
            <Link href={card.ctaHref} className="mt-auto inline-flex min-h-12 w-fit items-center justify-center rounded bg-[#11633A] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0d4f2d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#11633A]">{card.ctaLabel}</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
