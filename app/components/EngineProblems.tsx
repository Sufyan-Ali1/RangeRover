import Link from "next/link";

interface EngineProblemsData {
  eyebrow: string;
  title: string;
  description: string;
  actionLabel: string;
  ctaLabel: string;
  ctaHref: string;
  cards: { icon: string; title: string; description: string; action: string }[];
}

const iconPaths: Record<string, string> = {
  bell: "M18 8a6 6 0 00-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4M3 3L1 7m20-4l2 4M12 5v7",
  power: "M20 11a8 8 0 10-2 6M12 4v8l5-3M21 15v3m0 3h.01",
  start: "M3 3v6h6M3 9a9 9 0 119 12M12 7v5l3 3",
  smoke: "M7 18a5 5 0 01-1-10 6 6 0 0112 1 4.5 4.5 0 01-1 9z",
  drop: "M12 3c-3 4-7 7-7 11a7 7 0 0014 0c0-4-4-7-7-11zM8 15a4 4 0 004 3",
  warning: "M12 3L2 21h20zM12 9v5m0 3h.01",
  wrench: "M14 6a5 5 0 006 6l-3-3 1-3 3-1a5 5 0 00-7 1zM14 12l-9 9-3-3 9-9",
  booking: "M6 3h8l4 4v14H6zM14 3v5h4M9 12h6m-6 4h6",
};

function ProblemIcon({ name, small = false }: { name: string; small?: boolean }) {
  return <svg width={small ? 14 : 22} height={small ? 14 : 22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0" aria-hidden="true"><path d={iconPaths[name] ?? iconPaths.warning} /></svg>;
}

export default function EngineProblems({ data }: { data: EngineProblemsData }) {
  return (
    <section aria-labelledby="engine-problems-title" className="bg-[#F9FAFB] px-5 py-14 sm:px-8 lg:py-16">
      <div className="mx-auto max-w-[1216px]">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-wide text-[#11633A]">{data.eyebrow}</p>
          <h2 id="engine-problems-title" className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-[#0d4f2d] sm:text-4xl">{data.title}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">{data.description}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {data.cards.map((card) => (
            <article key={card.title} className="flex flex-col rounded-lg border border-[#11633A]/20 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
              <span className="mb-3 flex h-10 w-10 items-center justify-center rounded bg-[#dff0df] text-[#11633A]"><ProblemIcon name={card.icon} /></span>
              <h3 className="text-lg font-semibold leading-snug text-gray-900">{card.title}</h3>
              <p className="mb-4 mt-2 text-sm leading-relaxed text-gray-600">{card.description}</p>
              <p className="mt-auto flex items-start gap-1.5 border-t border-[#dff0df] pt-3 text-xs font-semibold leading-relaxed text-[#0d4f2d]">
                <span className="mt-0.5"><ProblemIcon name="wrench" small /></span>
                <span>{data.actionLabel} {card.action}</span>
              </p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link href={data.ctaHref} className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-[#11633A] px-8 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#0d4f2d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#11633A]"><ProblemIcon name="booking" />{data.ctaLabel}</Link>
        </div>
      </div>
    </section>
  );
}
