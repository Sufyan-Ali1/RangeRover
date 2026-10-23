import type { reconditionedPageData } from "../../data/engines/reconditioned";
import Link from "next/link";

export default function ReconditionedSupplyOptions({ data }: { data: typeof reconditionedPageData.supplyOptions }) {
  return (
    <section className="bg-white py-16 xl:py-20">
      <div className="mx-auto w-full max-w-[1728px] px-6 sm:px-10 xl:px-[101px]">
        <h2 className="text-[28px] font-black leading-tight tracking-tight text-gray-900 sm:text-[36px]">{data.title}</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">{data.description}</p>
        <div className="mt-9 grid gap-6 md:grid-cols-2">
          {data.cards.map((card) => (
            <article
              key={card.title}
              className={`flex min-w-0 flex-col rounded-3xl border p-6 sm:p-8 ${card.highlighted ? "border-[#9EECBA] bg-[#F3FAF5]" : "border-[#b6e8c8]"}`}
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#11633A]">{card.eyebrow}</p>
              <h3 className="mt-3 text-2xl font-black text-gray-900">{card.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{card.description}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{card.details}</p>
              <Link href={card.href} className={`${card.highlighted ? "inline-flex min-h-12 items-center justify-center rounded-xl bg-[#11633A] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#0d4e2d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#11633A]" : "inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-[#11633A] px-6 py-3 text-center text-sm font-bold text-[#11633A] transition-colors hover:bg-[#ECFFF3] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#11633A]"} mt-6 self-start`}>{card.linkLabel}</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
