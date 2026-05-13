import Image from "next/image";

const services = [
  "Engine Rebuild",
  "Timing Chain Replacement",
  "Turbo Replacement",
  "Head Gasket Replacement",
  "Engine Repair",
  "Engine Replacement",
  "Engine Swap",
  "Timing Belt Replacement",
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#1f1f1f] bg-black text-white">
      <div className="mx-auto w-full max-w-[1728px] px-6 pt-12 pb-8 sm:px-10 sm:pt-14 xl:px-[101px] xl:pt-[80px] xl:pb-[40px]">

        {/* 3-column grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr_1.4fr] lg:gap-16">

          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-5">
            <Image
              src="/logo.svg"
              alt="Range Rover Garage"
              width={140}
              height={50}
              className="h-12 w-auto self-start"
            />
            <p className="text-[13.5px] leading-[1.75] text-[#9ca3af]">
              The UK&apos;s premier independent specialist for Range Rover and
              Land Rover engine services. Quality, precision, and excellence in
              every rebuild.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#4CA66B] text-[#4CA66B] transition hover:bg-[#4CA66B] hover:text-black"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#4CA66B] text-[#4CA66B] transition hover:bg-[#4CA66B] hover:text-black"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[13px] font-bold uppercase tracking-[0.14em] text-white">
              Services
            </h3>
            <ul className="flex flex-col gap-[5px]">
              {services.map((s) => (
                <li key={s}>
                  <a href="#" className="text-[13.5px] text-[#9ca3af] transition hover:text-[#4CA66B]">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Get in Touch */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[13px] font-bold uppercase tracking-[0.14em] text-white">
              Get in Touch
            </h3>
            <div className="flex flex-col gap-5">

              {/* Call Us */}
              <div className="flex items-start gap-4">
                <div className="mt-0.5 shrink-0 text-[#4CA66B]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[10.5px] font-semibold uppercase tracking-widest text-[#4CA66B]">Call Us</p>
                  <p className="mt-1 text-[13.5px] text-white">01708 592377</p>
                  <p className="text-[13.5px] text-white">07477 733313</p>
                </div>
              </div>

              {/* Our Location */}
              <div className="flex items-start gap-4">
                <div className="mt-0.5 shrink-0 text-[#4CA66B]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[10.5px] font-semibold uppercase tracking-widest text-[#4CA66B]">Our Location</p>
                  <p className="mt-1 text-[13.5px] italic text-white">UNIT 1 Hedley Ave, Grays RM20 4EL</p>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex items-start gap-4">
                <div className="mt-0.5 shrink-0 text-[#4CA66B]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[10.5px] font-semibold uppercase tracking-widest text-[#4CA66B]">Email Us</p>
                  <p className="mt-1 text-[13.5px] text-white">sales@rangerovergarage.co.uk</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Copyright bar */}
        <div className="mt-10 border-t border-[#1f1f1f] pt-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[12px] text-[#6b7280]">
              © 2026 Range Rover Garage. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="/privacy-policy"
                className="text-[12px] text-[#6b7280] transition hover:text-[#4CA66B]"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-conditions"
                className="text-[12px] text-[#6b7280] transition hover:text-[#4CA66B]"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
