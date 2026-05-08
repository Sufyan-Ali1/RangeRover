export default function WarrantySection() {
  return (
    <section className="w-full bg-white px-6 py-12 sm:px-10 xl:px-[101px] xl:py-16">
      <div
        className="w-full rounded-3xl border-2 border-[#9EECBA] p-8 xl:p-10"
        style={{ background: "#11633A" }}
      >
        <div>

        {/* Header */}
        <div className="mb-5 flex items-center gap-3">
          {/* Shield icon */}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <polyline points="9 12 11 14 15 10"/>
          </svg>
          <h2 className="text-xl font-black uppercase tracking-wide text-white sm:text-2xl">
            WARRANTY &amp; <span className="text-[#A8F0C0]">PARTS EXCELLENCE</span>
          </h2>
        </div>

        {/* Description */}
        <p className="mb-8 max-w-4xl text-[15px] leading-relaxed text-white/90">
          All our engine services and rebuilds are performed using{" "}
          <strong className="font-bold text-white">Genuine OEM Parts</strong>{" "}
          to ensure maximum longevity and performance for your vehicle.
        </p>

        {/* Two sub-cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Standard Protection */}
          <div className="rounded-2xl bg-white/10 p-6">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#A8F0C0]">
              Standard Protection:
            </p>
            <p className="text-[14px] font-semibold leading-relaxed text-white">
              Every service includes our comprehensive 6 Months or 6,000 Miles Warranty as standard.
            </p>
          </div>

          {/* Extended Coverage */}
          <div className="rounded-2xl bg-white/10 p-6">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#A8F0C0]">
              Looking For Extended Coverage?
            </p>
            <p className="text-[14px] font-semibold leading-relaxed text-white">
              We also offer up to <strong className="font-bold">24 Months Warranty</strong>, sourced directly from main dealers. Please note, this option comes at a higher cost due to the extended protection and premium coverage.
            </p>
          </div>
        </div>
        </div>{/* end z-10 content wrapper */}
      </div>
    </section>
  );
}
