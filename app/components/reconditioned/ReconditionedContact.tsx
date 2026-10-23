import type { reconditionedPageData } from "../../data/engines/reconditioned";
import Link from "next/link";

export default function ReconditionedContact({ data }: { data: typeof reconditionedPageData.contact }) {
  return (
    <section className="bg-[#11633A] py-16 text-white xl:py-20">
      <div className={`mx-auto w-full max-w-[1728px] px-6 sm:px-10 xl:px-[101px] grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center`}>
        <div>
          <h2 className="text-[28px] font-black leading-tight sm:text-[36px]">{data.title}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">{data.description}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
            <a href={data.phoneHref} className="inline-flex min-h-11 items-center font-bold underline underline-offset-4">{data.phoneLabel}</a>
            <a href={data.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center font-bold underline underline-offset-4">{data.whatsappLabel}<span className="sr-only">{data.externalLinkLabel}</span></a>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <Link href={data.quoteHref} className="inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-8 py-3 text-sm font-bold text-[#11633A] transition-colors hover:bg-[#ECFFF3] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{data.quoteLabel}</Link>
          <Link href={data.contactHref} className="inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-white px-8 py-3 text-sm font-bold transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{data.contactLabel}</Link>
        </div>
      </div>
    </section>
  );
}
