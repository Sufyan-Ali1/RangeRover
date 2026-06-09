import Link from "next/link";

export default function SupplyFitCTA() {
  return (
    <section className="w-full" style={{ background: "#11633A" }}>
      <div className="mx-auto flex w-full max-w-[1728px] items-center justify-between px-6 py-8 sm:px-10 xl:px-[101px]">
        <div>
          <h2 className="mb-1 text-[18px] font-bold text-white">
            Need an Expert Opinion?
          </h2>
          <p className="text-[14px] leading-snug text-white/70">
            Talk to our lead technician about your Range Rover engine today.
          </p>
        </div>

        <Link
          href="/contact"
          className="shrink-0 rounded-xl bg-white px-8 py-3.5 text-[14px] font-bold text-gray-900 transition hover:bg-gray-100"
        >
          Get Free Advice
        </Link>
      </div>
    </section>
  );
}
