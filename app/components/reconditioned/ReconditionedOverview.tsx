import type { reconditionedPageData } from "../../data/engines/reconditioned";
import Image from "next/image";
import Link from "next/link";

export default function ReconditionedOverview({ data }: { data: typeof reconditionedPageData.overview }) {
  return (
    <section className="bg-white py-16 xl:py-20">
      <div className={`mx-auto w-full max-w-[1728px] px-6 sm:px-10 xl:px-[101px] grid items-center gap-10 lg:grid-cols-2 lg:gap-16`}>
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#11633A]">{data.eyebrow}</p>
          <h2 className="text-[28px] font-black leading-tight tracking-tight text-gray-900 sm:text-[36px]">{data.title}</h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            {data.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link href={data.catalogueHref} className="mt-6 inline-flex min-h-11 items-center font-bold text-[#11633A] underline decoration-[#11633A]/30 underline-offset-4 hover:decoration-[#11633A]">{data.catalogueLabel}</Link>
        </div>
        <Image
          src={data.imageSrc}
          alt={data.imageAlt}
          width={800}
          height={700}
          sizes="(max-width: 1023px) 100vw, 50vw"
          className="aspect-[4/3] w-full rounded-3xl object-cover"
        />
      </div>
    </section>
  );
}
