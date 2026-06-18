import Image from "next/image";
import Link from "next/link";
import { engineServices } from "../data/services";

export default function Footer() {
  const phoneNumbers = [
    { label: "01708 592377", href: "tel:+441708592377" },
    { label: "07477 733313", href: "tel:+447477733313" },
  ];

  const email = "sales@rangerovergarage.co.uk";
  const mapHref = "https://maps.app.goo.gl/49cNyUKLEiCa4UL57";

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
                href="https://www.facebook.com/rangerovergarage/"
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#4CA66B] text-[#4CA66B] transition hover:bg-[#4CA66B] hover:text-black"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@RangeroverGarage"
                aria-label="YouTube"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#4CA66B] text-[#4CA66B] transition hover:bg-[#4CA66B] hover:text-black"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8ZM9.6 15.4V8.6L15.8 12l-6.2 3.4Z"/>
                </svg>
              </a>
              <a
                href="https://uk.pinterest.com/rangerovergaragegrays/"
                aria-label="Pinterest"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#4CA66B] text-[#4CA66B] transition hover:bg-[#4CA66B] hover:text-black"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.13 2.5 7.66 6.07 9.19-.03-.78-.01-1.72.2-2.57l1.3-5.5s-.32-.65-.32-1.6c0-1.49.86-2.6 1.93-2.6.91 0 1.35.68 1.35 1.5 0 .91-.58 2.28-.88 3.55-.25 1.06.53 1.93 1.58 1.93 1.9 0 3.36-2.01 3.36-4.91 0-2.57-1.85-4.37-4.49-4.37-3.06 0-4.85 2.29-4.85 4.66 0 .92.35 1.91.78 2.45.09.11.1.2.07.31l-.29 1.18c-.05.19-.15.23-.33.14-1.24-.58-2.01-2.41-2.01-3.88 0-3.16 2.29-6.05 6.6-6.05 3.46 0 6.15 2.46 6.15 5.76 0 3.44-2.17 6.21-5.19 6.21-1.01 0-1.96-.53-2.29-1.15l-.62 2.37c-.22.85-.81 1.91-1.2 2.56.9.28 1.86.43 2.86.43 5.52 0 10-4.48 10-10S17.52 2 12 2Z"/>
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
              {engineServices.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-[13.5px] text-[#9ca3af] transition hover:text-[#4CA66B]">
                    {s.title}
                  </Link>
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
                  <div className="mt-1 flex flex-col gap-1">
                    {phoneNumbers.map((phone) => (
                      <a
                        key={phone.href}
                        href={phone.href}
                        className="inline-block w-fit text-[13.5px] text-white transition hover:text-[#4CA66B]"
                      >
                        {phone.label}
                      </a>
                    ))}
                  </div>
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
                  <a
                    href={mapHref}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-block w-fit text-[13.5px] italic text-white transition hover:text-[#4CA66B]"
                    aria-label="Open location in Google Maps"
                  >
                    UNIT 1 Hedley Ave, Grays RM20 4EL
                  </a>
                </div>
              </div>

              {/* Email Us */}
              <div className="group flex items-start gap-4">
                <div className="mt-0.5 shrink-0 text-[#4CA66B]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[10.5px] font-semibold uppercase tracking-widest text-[#4CA66B]">Email Us</p>
                  <a
                    href={`mailto:${email}`}
                    className="mt-1 inline-block w-fit text-[13.5px] text-white transition hover:text-[#4CA66B]"
                  >
                    {email}
                  </a>
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
