import Link from "next/link";
import type { reconditionedPageData } from "../../data/engines/reconditioned";

export default function ReconditionedBuyingGuide({
  data,
}: {
  data: typeof reconditionedPageData.buyingGuide;
}) {
  return (
    <section aria-labelledby="engine-buying-guide-title" className="bg-[#F3F4F6] py-16 text-[#002B18]">
      <div className="mx-auto max-w-[1264px] px-6">
        <header className="text-center">
          <p className="text-xs font-bold uppercase leading-[18px] tracking-[0.04em] text-[#925600]">{data.eyebrow}</p>
          <h2 id="engine-buying-guide-title" className="mx-auto mt-1 max-w-[1020px] text-[30px] font-black leading-[1.2] tracking-[0.01em] sm:text-[40px]">
            {data.title}
          </h2>
          <p className="mt-3 text-base leading-6 text-[#484E49]">{data.description}</p>
          <p className="text-base leading-6 text-[#484E49]">{data.subtitle}</p>
        </header>

        <div className="mt-10 grid gap-6 lg:grid-cols-3 lg:gap-4">
          {data.cards.map((card) => (
            <article key={card.tier} className={`relative flex min-w-0 flex-col rounded-[18px] bg-white p-6 shadow-[0_1px_1px_0_#002B1808] ${card.highlighted ? "ring-2 ring-[#002B18]" : ""}`}>
              {card.recommendation && (
                <p className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#002B18] px-3 py-1 text-xs font-bold uppercase leading-4 tracking-[0.02em] text-[#FFB300] shadow-sm">
                  {card.recommendation}
                </p>
              )}
              <div className="flex min-h-7 items-center justify-between gap-3 text-xs font-bold">
                <p className={`uppercase ${card.highlighted ? "text-[#925600]" : "text-[#747C76]"}`}>{card.tier}</p>
                <span className={`rounded-[2px] px-2.5 py-2 text-[11px] leading-3 ${card.highlighted ? "bg-[#EBF9EF] text-[#24583B]" : "bg-[#EBEBFF] text-[#747C76]"}`}>{card.badge}</span>
              </div>
              <h3 className="mt-2.5 text-[26px] font-bold leading-8 tracking-[-0.035em]">{card.title}</h3>
              <p className="mt-2 text-base leading-6 text-[#484E49]">{card.description}</p>
              <ul className="mt-[18px] mb-6 space-y-2 text-[13px] leading-5 text-[#484E49]">
                {card.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className={`mt-0.5 size-4 shrink-0 ${card.highlighted ? "text-[#925600]" : "text-[#002B18]"}`}>
                      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
                      <path d="m4.8 8 2.1 2.1 4.3-4.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href={card.href} className={`mt-auto flex min-h-11 items-center justify-center rounded-[4px] px-3 py-2 text-center text-base font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#002B18] ${card.highlighted ? "bg-[#002B18] text-white hover:bg-[#10462E]" : "bg-[#EBEBFF] text-[#002B18] hover:bg-[#DDDDF5]"}`}>
                {card.linkLabel}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
