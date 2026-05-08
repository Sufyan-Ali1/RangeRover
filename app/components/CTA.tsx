import Link from "next/link";

export default function CTA() {
  return (
    <section
      className="w-full"
      style={{ background: "linear-gradient(94.78deg, #388358 50%, #11633A 100%)" }}
    >
      <div className="mx-auto flex w-full max-w-[1728px] flex-col items-start justify-between gap-8 px-6 py-12 sm:px-10 lg:flex-row lg:items-center xl:px-[101px] xl:py-14">

        {/* Left: heading + subtitle + button */}
        <div className="flex-1">
          <h2 className="mb-3 text-xl font-black text-white sm:text-2xl">
            Are You Looking For A Consultation?
          </h2>
          <p className="mb-8 max-w-lg text-[14px] leading-relaxed text-white/80">
            You can book an appointment by calling us. Our friendly &amp; professional staff is
            always willing to help!
          </p>
          <Link
            href="/get-quote"
            className="inline-flex items-center justify-center border-2 border-white px-10 py-3.5 text-[14px] font-bold text-white transition hover:bg-white/10"
            style={{ borderRadius: "12px" }}
          >
            Get Free Advice
          </Link>
        </div>

        {/* Right: Follow us on + social icons */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-[14px] font-semibold text-white">Follow us on</p>
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition hover:bg-white/80">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#388358">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            {/* X / Twitter */}
            <a href="#" aria-label="X" className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition hover:bg-white/80">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#388358">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition hover:bg-white/80">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#388358" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="#388358"/>
              </svg>
            </a>
            {/* YouTube */}
            <a href="#" aria-label="YouTube" className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition hover:bg-white/80">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#388358">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
