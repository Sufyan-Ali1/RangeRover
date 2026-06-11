const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M12 14c-5 0-8 2-8 3v1h16v-1c0-1-3-3-8-3z" />
        <path d="M15 3.5a4 4 0 0 1 0 9" />
      </svg>
    ),
    title: "Land Rover Specialists",
    description: "Marque experts focused exclusively on Range Rover and Land Rover models.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
    title: "Genuine OEM Parts",
    description: "Sourced directly from Land Rover-approved suppliers.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Same Day Fitting",
    description: "Most parts diagnosed and fitted on the same visit.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Warranty Included",
    description: "12-month parts & labour warranty on every fitting.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Competitive Pricing",
    description: "Main-dealer quality at independent specialist rates.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: "Customer Satisfaction",
    description: "Hundreds of 5-star reviews from London Land Rover owners.",
  },
];

export default function SupplyFitPrecision() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background */}
      <img
        src="/precision.svg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-[1728px] px-6 py-16 sm:px-10 xl:px-[101px] xl:py-20">

        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
            Why Choose Us
          </p>
          <h2 className="text-[36px] font-black uppercase leading-tight tracking-tight text-white sm:text-[48px] xl:text-[56px]">
            Built on Precision &amp;<br />Trust
          </h2>
        </div>

        {/* 3 × 2 grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col rounded-2xl border p-7"
              style={{
                background: "rgba(255,255,255,0.12)",
                borderColor: "rgba(74,166,107,0.6)",
              }}
            >
              {/* Icon */}
              <span
                className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-full"
                style={{ background: "rgba(74,166,107,0.2)", color: "#4CA66B" }}
              >
                {f.icon}
              </span>

              {/* Title */}
              <h3 className="mb-3 text-[13px] font-bold uppercase tracking-[0.12em] text-white">
                {f.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] leading-[1.65] text-white/60">
                {f.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
