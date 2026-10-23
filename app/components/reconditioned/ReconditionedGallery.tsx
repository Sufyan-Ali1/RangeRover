import type { reconditionedPageData } from "../../data/engines/reconditioned";
import dynamic from "next/dynamic";
import Link from "next/link";

const ServiceGallery = dynamic(() => import("../ServiceGallery"));

export default function ReconditionedGallery({ data }: { data: typeof reconditionedPageData.gallery }) {
  return (
    <>
      <ServiceGallery
        title={data.title}
        subtitle={data.subtitle}
        images={data.images}
      />
      <div className={`mx-auto w-full max-w-[1728px] px-6 sm:px-10 xl:px-[101px] pb-12 text-center`}>
        <Link href={data.linkHref} className="inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-[#11633A] px-6 py-3 text-center text-sm font-bold text-[#11633A] transition-colors hover:bg-[#ECFFF3] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#11633A]">{data.linkLabel}</Link>
      </div>
    </>
  );
}
