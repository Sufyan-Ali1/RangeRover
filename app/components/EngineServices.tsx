import Link from "next/link";

interface EngineServicesData {
  eyebrow: string;
  title: string;
  description: string;
  linkLabel: string;
  cards: { icon: string; title: string; description: string; href: string }[];
}

const iconPaths: Record<string, string> = {
  replacement: "M4 13l2-5h12l2 5M3 13h18v8h-3v-2H6v2H3zM6 16h1m10 0h1M8 4h9m-3-3l3 3-3 3",
  delivery: "M1 3h14v14H1zM15 8h4l4 5v4h-8M8 18a3 3 0 11-6 0 3 3 0 016 0M22 18a3 3 0 11-6 0 3 3 0 016 0",
  tools: "M14 6a5 5 0 006 6l-3-3 1-3 3-1a5 5 0 00-7 1zM14 12l-9 9-3-3 9-9M3 3l5 2-3 3zM7 7l14 14-3 1-7-7",
  recycle: "M9 3h5l4 7m-1-5l1 5-5-1M21 13l-3 6h-8m4 3l-4-3 4-3M7 20l-4-6 4-7M2 8l5-1 1 5",
  diagnostics: "M3 8V4h18v4M3 16v4h18v-4M1 12h6l3-5 4 10 3-5h6",
  chip: "M6 6h12v12H6zM9 9h6v6H9zM9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4",
  refit: "M4 21h16M7 21V7l4-3 5 3-2 4-5-2M11 11l4 6h4M16 7l3-3 3 2M4 4h3",
};

export default function EngineServices({ data }: { data: EngineServicesData }) {
  return (
    <section aria-labelledby="engine-services-title" className="bg-white px-5 py-14 sm:px-8 lg:py-16">
      <div className="mx-auto max-w-[1216px]">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-wide text-[#11633A]">{data.eyebrow}</p>
          <h2 id="engine-services-title" className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-[#0d4f2d] sm:text-4xl">{data.title}</h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-base">{data.description}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {data.cards.map((card) => (
            <article key={card.title} className="flex min-w-0 flex-col rounded-lg border border-[#11633A]/10 bg-[#dff0df] p-4 transition-shadow hover:shadow-md">
              <span className="mb-3 flex h-12 w-12 items-center justify-center rounded bg-white/75 text-[#11633A]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={iconPaths[card.icon] ?? iconPaths.tools} /></svg>
              </span>
              <h3 className="text-lg font-semibold leading-snug text-[#0d4f2d]">{card.title}</h3>
              <p className="mb-6 mt-2 text-sm leading-relaxed text-gray-700">{card.description}</p>
              <Link href={card.href} aria-label={`${data.linkLabel} about ${card.title}`} className="mt-auto inline-flex min-h-11 w-fit items-center gap-1 rounded text-sm font-semibold text-[#11633A] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#11633A]">
                {data.linkLabel}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12h16m-6-6l6 6-6 6" /></svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
