import type { reconditionedPageData } from "../../data/engines/reconditioned";
import Link from "next/link";

export default function ReconditionedOptions({ data }: { data: typeof reconditionedPageData.optionsSection }) {
  return (
    <section className="bg-white py-16 xl:py-20">
      <div className="mx-auto w-full max-w-[1728px] px-6 sm:px-10 xl:px-[101px]">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#11633A]">{data.eyebrow}</p>
          <h2 className="text-[28px] font-black leading-tight tracking-tight text-gray-900 sm:text-[36px]">{data.title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">{data.description}</p>
        </div>
        <div className="mt-9 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {data.items.map((option) => (
            <article key={option.size} className="flex min-w-0 flex-col rounded-2xl border border-[#b6e8c8] bg-[#F3FAF5] p-6 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#11633A]">{data.cardEyebrow}</p>
              <h3 className="mt-4 text-2xl font-black text-gray-900">{option.label}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{option.description}</p>
              <Link href={option.href} className="mt-5 inline-flex min-h-11 items-center text-sm font-bold text-[#11633A] underline underline-offset-4">{option.linkLabel}</Link>
              <Link href={data.quoteHref} aria-label={option.quoteAriaLabel} className={`inline-flex min-h-12 items-center justify-center rounded-xl bg-[#11633A] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#0d4e2d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#11633A] mt-3`}>{data.quoteLabel}</Link>
            </article>
          ))}
          <article className="flex min-w-0 flex-col justify-center rounded-2xl bg-[#11633A] p-6 text-white sm:p-7">
            <h3 className="text-2xl font-black">{data.helpTitle}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/85">{data.helpDescription}</p>
            <Link href={data.helpHref} className="mt-6 inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-white px-5 py-3 text-sm font-bold transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{data.helpLabel}</Link>
          </article>
        </div>
        <p className="mt-6 text-sm text-slate-600">{data.brandPrefix}<Link href={data.rangeRoverHref} className="font-bold text-[#11633A] underline underline-offset-4">{data.rangeRoverLabel}</Link>{data.brandSeparator}<Link href={data.landRoverHref} className="font-bold text-[#11633A] underline underline-offset-4">{data.landRoverLabel}</Link>{data.brandSuffix}</p>
      </div>
    </section>
  );
}
