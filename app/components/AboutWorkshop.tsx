import Image from "next/image";
import Link from "next/link";
import { authorityNationwide } from "../data/about/Nationwide";

export default function AboutWorkshop() {
  return (
    <section className="w-full bg-[#F3F4F6]">
      <div className="mx-auto w-full max-w-[1728px] px-6 py-14 sm:px-10 lg:py-20 xl:px-[101px]">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative min-w-0 pb-6 sm:pb-8">
            <div className="relative aspect-[5/4] overflow-hidden rounded-3xl">
              <Image src="/images/workshop-5.webp" alt="Range Rover vehicles lined up outside the Range Rover Garage workshop" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="relative -mt-20 ml-6 rounded-2xl bg-[#11633A] px-6 py-6 text-white shadow-lg sm:ml-10 sm:px-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A6F0C6]">{authorityNationwide.badge?.label}</p>
              <p className="mt-2 text-[24px] font-black sm:text-[30px]">{authorityNationwide.badge?.title}</p>
            </div>
          </div>
          <div>
            <h2 className="text-[28px] font-black leading-[1.2] tracking-tight text-gray-900 sm:text-[36px] xl:text-[42px]">
              {authorityNationwide.titleBefore}
              <span className="text-[#11633A]">{authorityNationwide.titleHighlight}</span>
            </h2>
            <div className="mt-6 space-y-4">
              {authorityNationwide.paragraphs?.map((paragraph, i) => <p key={i} className="text-[15px] leading-[1.85] text-gray-600">{paragraph}</p>)}
            </div>
            <Link href="/get-quote" className="mt-7 inline-flex items-center gap-4 rounded-lg bg-[#11633A] px-7 py-3.5 text-[14px] font-semibold text-white transition hover:bg-[#0d4f2d]">
              Get a Quote <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
