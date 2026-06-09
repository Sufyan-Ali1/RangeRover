export default function SupplyFitHero() {
  const features = [
    { icon: "✓", label: "Genuine Parts" },
    { icon: "🔧", label: "Expert Technicians" },
    { icon: "✓", label: "Warranty Included" },
    { icon: "⏱", label: "Same Day Fitting" },
  ];

  const stats = [
    { value: "15+", label: "YEARS EXPERIENCE" },
    { value: "8.5k", label: "PARTS FITTED" },
    { value: "4.9★", label: "GOOGLE RATING" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Background image */}
      <img
        src="/background_hero.svg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Green gradient overlay — left side only */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(17,99,58,0.82) 0%, rgba(17,99,58,0.55) 38%, rgba(255,255,255,0.08) 65%, rgba(255,255,255,0) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-[1728px] px-6 pt-24 pb-10 sm:px-10 xl:px-[101px] xl:pt-28 xl:pb-14">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-14">

          {/* ── Left column ── */}
          <div className="flex w-full flex-col lg:w-[52%]">

            {/* Badge */}
            <span className="mb-3 inline-flex w-fit items-center rounded-full border border-white/30 bg-black/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
              Range Rover &amp; Land Rover Specialists
            </span>

            {/* Heading — matches other page section headings (42px/52px) */}
            <h1 className="mb-4 text-[42px] font-black leading-tight sm:text-[52px]">
              <span className="text-white">Supply &amp; Fit</span>
              <br />
              <span style={{ color: "#11633A" }}>Services</span>
            </h1>

            {/* Description */}
            <p className="mb-5 max-w-[520px] text-[15px] font-semibold leading-[1.6] text-white/90">
              Genuine &amp; OEM parts supplied and professionally fitted by Land
              Rover experts in London. Premium quality, transparent pricing, no
              compromise.
            </p>

            {/* Feature badges */}
            <div className="mb-5 flex flex-wrap gap-2">
              {features.map((f) => (
                <span
                  key={f.label}
                  className="flex items-center gap-2 rounded-full bg-black/70 px-4 py-2 text-[13px] font-semibold text-white backdrop-blur-sm"
                >
                  <span className="text-[11px] opacity-80">{f.icon}</span>
                  {f.label}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="mb-7 flex flex-wrap gap-3">
              <a
                href="tel:01375531355"
                className="flex items-center gap-2.5 rounded-lg px-6 py-3 text-[15px] font-bold text-white transition-opacity hover:opacity-90"
                style={{ background: "linear-gradient(94.78deg,#388358 50%,#11633A 100%)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12 19.79 19.79 0 0 1 1 3.18 2 2 0 0 1 3 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6.06 6.06l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                01375 531355
              </a>
              <a
                href="https://wa.me/441375531355"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-lg bg-black/60 px-6 py-3 text-[15px] font-bold text-white backdrop-blur-sm transition-opacity hover:opacity-90"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                WhatsApp Us
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 sm:gap-12">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="text-[28px] font-black leading-none text-white sm:text-[32px]">
                    {s.value}
                  </span>
                  <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/70">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column — hero image ── */}
          <div className="relative w-full lg:w-[48%]">
            <div className="relative max-h-[400px] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/hero_image.svg"
                alt="Supply & fit workshop — Range Rover engine being professionally fitted"
                className="h-[400px] w-full object-cover"
              />

              {/* Warranty overlay card */}
              <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-xl bg-black/80 px-4 py-3 backdrop-blur-sm">
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: "linear-gradient(135deg,#388358,#11633A)" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] font-bold leading-tight text-white">12-month warranty</span>
                  <span className="text-[11px] text-white/70">On all parts &amp; labour</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
