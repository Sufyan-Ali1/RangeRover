import Image from "next/image";
import Link from "next/link";

interface ModelShowcaseData {
  eyebrow: string;
  title: string;
  description: string;
  badge: string;
  transmissionLabel: string;
  engineCodeLabel: string;
  ctaLabel: string;
  cards: {
    name: string;
    years: string;
    description: string;
    transmission: string;
    engineCode: string;
    image: string;
    imageAlt: string;
    href: string;
    quoteHref: string;
  }[];
}

export default function EngineModelShowcase({ data }: { data: ModelShowcaseData }) {
  return (
    <section aria-labelledby="engine-model-showcase-title" className="bg-white px-5 py-14 sm:px-8 lg:py-16">
      <div className="mx-auto max-w-[1216px]">
        <div className="mb-10 flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-[#11633A]">{data.eyebrow}</p>
            <h2 id="engine-model-showcase-title" className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-[#0d4f2d] sm:text-4xl lg:text-[42px]">{data.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">{data.description}</p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1 rounded bg-[#dff0df] px-3 py-2 text-base font-semibold text-[#11633A]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2l3 3 4 1 1 4 2 2-2 3-1 4-4 1-3 2-3-2-4-1-1-4-2-3 2-2 1-4 4-1zM8 12l3 3 5-6" /></svg>
            {data.badge}
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {data.cards.map((card) => (
            <article key={card.name} className="flex h-full flex-col rounded-lg bg-[#dff0df] p-4 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
              <Link href={card.href} className="group block rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#11633A]">
                <div className="relative aspect-[260/152] overflow-hidden rounded bg-[#F9FAFB]">
                  <Image src={card.image} alt={card.imageAlt} fill sizes="(min-width: 1280px) 260px, (min-width: 640px) 45vw, 90vw" className="object-contain p-2 transition-transform duration-300 group-hover:scale-105" />
                </div>
                <p className="mt-1.5 text-xs font-semibold tracking-wider text-gray-500">{card.years}</p>
                <h3 className="mt-2 text-xl font-semibold leading-snug text-[#0d4f2d] group-hover:underline">{card.name}</h3>
              </Link>
              <p className="mt-1 text-[13px] leading-5 text-gray-600">{card.description}</p>
              <dl className="mb-5 mt-auto space-y-2.5 pt-3 text-xs">
                <div className="flex items-start justify-between gap-3"><dt className="text-gray-500">{data.transmissionLabel}</dt><dd className="text-right font-semibold text-gray-900">{card.transmission}</dd></div>
                <div className="flex items-start justify-between gap-3"><dt className="text-gray-500">{data.engineCodeLabel}</dt><dd className="text-right font-bold text-[#11633A]">{card.engineCode}</dd></div>
              </dl>
              <Link href={card.quoteHref} aria-label={`${data.ctaLabel} — ${card.name}`} className="inline-flex min-h-11 items-center justify-center rounded bg-[#11633A] px-3 py-2 text-center text-base font-semibold text-white transition-colors hover:bg-[#0d4f2d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#11633A]">{data.ctaLabel}</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
