import type { reconditionedPageData } from "../../data/engines/reconditioned";
import dynamic from "next/dynamic";
import Link from "next/link";

const SupplyFitHero = dynamic(() => import("../SupplyFitHero"));
const BlogContactForm = dynamic(() => import("../BlogContactForm"));

export default function ReconditionedHero({ data }: { data: typeof reconditionedPageData.heroSection }) {
  return (
    <SupplyFitHero
      data={data.hero}
      title={<>{data.titleStart}<span className="text-[#A8F0C0]">{data.titleHighlight}</span></>}
      rightContent={<BlogContactForm title={data.formTitle} submitLabel={data.submitLabel} compact registrationFirst />}
      actions={
        <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link href={data.quoteHref} className="inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#11633A] transition-colors hover:bg-[#ECFFF3] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{data.quoteLabel}</Link>
          <Link href={data.compatibilityHref} className="inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-white/60 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{data.compatibilityLabel}</Link>
        </div>
      }
    />
  );
}
