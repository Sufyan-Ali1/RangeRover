import Link from "next/link";

interface EngineFinalCTAData {
  eyebrow: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  description: string;
  callLabel: string;
  callHref: string;
  quoteLabel: string;
  quoteHref: string;
  highlights: { icon: string; label: string }[];
}

const iconPaths: Record<string, string> = {
  advice: "M4 14v-3a8 8 0 0116 0v3M4 11H2v7h4v-7zM20 11h2v7h-4v-7zM20 18v2h-8",
  phone: "M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 2 .7 2.9a2 2 0 01-.5 2.1L8 10a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.5c.9.3 1.9.6 2.9.7a2 2 0 011.7 2z",
  mail: "M3 5h18v14H3zM3 6l9 7 9-7",
  location: "M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1116 0zM15 10a3 3 0 11-6 0 3 3 0 016 0",
  delivery: "M1 3h14v14H1zM15 8h4l4 5v4h-8M8 18a3 3 0 11-6 0 3 3 0 016 0M22 18a3 3 0 11-6 0 3 3 0 016 0",
  warranty: "M12 2l3 3 4 1 1 4 2 2-2 3-1 4-4 1-3 2-3-2-4-1-1-4-2-3 2-2 1-4 4-1zM8 12l3 3 5-6",
};

function CTAIcon({ name }: { name: string }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0" aria-hidden="true"><path d={iconPaths[name] ?? iconPaths.advice} /></svg>;
}

export default function EngineFinalCTA({ data }: { data: EngineFinalCTAData }) {
  return (
    <section aria-labelledby="engine-final-cta-title" className="bg-[#062d1c] px-5 py-14 text-center sm:px-8 lg:py-16">
      <div className="mx-auto max-w-[1216px]">
        <p className="inline-flex items-center gap-1.5 rounded-full bg-[#11633A]/40 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#A6F0C6]"><CTAIcon name="advice" />{data.eyebrow}</p>
        <h2 id="engine-final-cta-title" className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[42px]">{data.titleBefore}{" "}<span className="text-[#A6F0C6]">{data.titleHighlight}</span>{" "}{data.titleAfter}</h2>
        <p className="mx-auto mt-3 max-w-[680px] text-base leading-relaxed text-[#b4d6bd] sm:text-lg">{data.description}</p>
        <div className="mt-6 flex flex-col justify-center gap-2 sm:flex-row">
          <a href={data.callHref} className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-[#A6F0C6] px-8 py-3 text-base font-semibold text-[#062d1c] transition-colors hover:bg-[#dff0df] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A6F0C6]"><CTAIcon name="phone" />{data.callLabel}</a>
          <Link href={data.quoteHref} className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-[#11633A] px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-[#0d4f2d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A6F0C6]"><CTAIcon name="mail" />{data.quoteLabel}</Link>
        </div>
        <ul className="mt-7 flex flex-col items-center justify-center gap-3 text-[13px] text-[#b4d6bd] sm:flex-row sm:flex-wrap sm:gap-x-5">
          {data.highlights.map((highlight) => <li key={highlight.label} className="flex items-center gap-1.5"><span className="text-[#A6F0C6]"><CTAIcon name={highlight.icon} /></span>{highlight.label}</li>)}
        </ul>
      </div>
    </section>
  );
}
