import Image from "next/image";
import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="w-full bg-white py-14 lg:py-20">
      <div className="mx-auto w-full max-w-[1728px] px-6 sm:px-10 xl:px-[101px]">
        <div className="grid overflow-hidden rounded-3xl bg-[#0b2419] lg:grid-cols-[1.3fr_1fr]">
          <div className="px-7 py-10 sm:px-10 sm:py-12 xl:p-14">
            <h2 className="max-w-[680px] text-[28px] font-black leading-[1.2] tracking-tight text-white sm:text-[36px] xl:text-[42px]">
              Speak Directly With Our Engine Specialists Today
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-white/75">
              Get honest advice and a clear quote, no obligation attached.
            </p>
            <Link href="/get-quote" className="mt-7 inline-flex w-full items-center justify-center gap-6 rounded-lg bg-white px-7 py-3.5 text-[14px] font-bold text-[#11633A] transition hover:bg-[#ECFFF3] sm:w-auto">
              Contact Our Team <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="relative min-h-[240px] lg:min-h-full">
            <Image src="/section.webp" alt="" aria-hidden="true" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0b2419]/30 to-transparent lg:bg-gradient-to-r" />
          </div>
        </div>
      </div>
    </section>
  );
}
