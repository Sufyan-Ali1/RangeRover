import Link from "next/link";

const features = [
  "Genuine & OEM parts in stock",
  "12-month warranty on parts & labour",
  "Same-day fitting available",
  "Free written quotation",
];

export default function SupplyFitGetParts() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background */}
      <img
        src="/background_fit.svg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-[1728px] px-6 py-14 sm:px-10 xl:px-[101px] xl:py-20">
        {/* Card */}
        <div
          className="mx-auto overflow-hidden rounded-3xl border-2"
          style={{ borderColor: "#11633A", maxWidth: "1100px" }}
        >
          <div className="flex flex-col lg:flex-row">

            {/* Left — image */}
            <div className="w-full lg:w-[48%]">
              <img
                src="/fit.svg"
                alt="Land Rover parts supply and fit workshop"
                className="h-full min-h-[280px] w-full object-cover"
              />
            </div>

            {/* Right — content */}
            <div
              className="flex w-full flex-col justify-center px-8 py-10 lg:w-[52%] lg:px-10 xl:px-12"
              style={{ background: "#0d1117" }}
            >
              {/* Label */}
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.26em] text-white/50">
                Ready When You Are
              </p>

              {/* Heading */}
              <h2 className="mb-4 text-[28px] font-bold leading-tight text-white sm:text-[34px]">
                Get Your Parts Supplied &amp; Fitted By Experts
              </h2>

              {/* Description */}
              <p className="mb-7 text-[14px] leading-[1.7] text-white/60">
                Speak to a Land Rover specialist today. Free quotation, transparent pricing,
                warranty included — book your slot in minutes.
              </p>

              {/* Features 2×2 */}
              <div className="mb-8 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#4CA66B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 shrink-0"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-[13px] leading-snug text-white/75">{f}</span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:01375531355"
                  className="flex items-center gap-2 rounded-lg px-5 py-2.5 text-[13px] font-semibold text-white transition hover:opacity-90"
                  style={{ background: "#11633A" }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12 19.79 19.79 0 0 1 1 3.18 2 2 0 0 1 3 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6.06 6.06l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Call Now
                </a>

                <a
                  href="https://wa.me/441375531355"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-white/10"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  WhatsApp
                </a>

                <Link
                  href="/get-quote"
                  className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-white/10"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                  Request Quote
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
