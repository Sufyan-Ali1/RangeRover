import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image */}
      <img
        src="/section.svg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative mx-auto flex w-full max-w-[1728px] flex-col items-center justify-center px-6 py-10 text-center sm:px-10 xl:px-[101px] xl:py-14">
        <h2 className="mb-3 max-w-[580px] text-[26px] font-black uppercase leading-tight tracking-wide text-white sm:text-[34px] xl:text-[40px]">
          Tell us what you need—we&apos;ll handle the rest.
        </h2>
        <p className="mb-5 text-[13px] font-medium text-white/80">
          Tell us your issue and get a quick, no-obligation quote.
        </p>
        <Link
          href="/get-quote"
          className="block w-full max-w-[420px] rounded-xl border-2 border-white py-3 text-[13px] font-bold text-white transition hover:bg-white/10"
        >
          Get a Free Quote
        </Link>
      </div>
    </section>
  );
}
