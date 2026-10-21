import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";

import type { OilLevelNoticeData, OilLevelNoticeText } from "../data/types";

function NoticeText({ segments }: { segments: OilLevelNoticeText[] }) {
  return segments.map((segment, index) => segment.bold ? (
    <strong key={index} className="font-bold text-white">{segment.text}</strong>
  ) : <span key={index}>{segment.text}</span>);
}

export default function OilLevelNotice({ data }: { data: OilLevelNoticeData }) {
  return (
    <section className="w-full bg-white py-12 xl:py-16">
      <div className="mx-auto w-full max-w-[1728px] px-6 sm:px-10 xl:px-[101px]">
        <div className="overflow-hidden rounded-3xl border border-[#9EECBA] bg-[#11633A]">
          <div className="relative isolate bg-[#003e2b]">
            <picture className="relative block aspect-[var(--notice-image-ratio)] w-full lg:absolute lg:inset-0 lg:aspect-auto"
              style={{ "--notice-image-ratio": `${data.images.mobileWidth} / ${data.images.mobileHeight}` } as CSSProperties}>
              <source media="(min-width: 1024px)" srcSet={data.images.desktop} />
              <Image
                src={data.images.mobile}
                loading="eager"
                alt={data.images.alt}
                fill
                sizes="(min-width: 1728px) 1526px, 100vw"
                className="object-cover object-right"
              />
            </picture>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(0,40,28,0.97)_0%,rgba(0,40,28,0.9)_42%,rgba(0,40,28,0.35)_58%,transparent_75%)] lg:block"
            />
            <div className="relative z-10 grid gap-6 p-6 sm:p-8 lg:min-h-[600px] lg:w-[53%] xl:p-10">
            <div className="min-w-0">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#A8F0C0]">
                {data.eyebrow}
              </p>
              <h2 className="text-2xl font-black uppercase leading-tight tracking-tight text-white sm:text-3xl xl:text-4xl">
                {data.title} <span className="text-[#A8F0C0]">{data.titleHighlight}</span>
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-white/90 sm:text-base">
                {data.paragraphs.map((paragraph, index) => (
                  <p key={index}><NoticeText segments={paragraph} /></p>
                ))}
              </div>
            </div>

            <div className="min-w-0 rounded-2xl border border-white/20 bg-black/15 p-5 sm:p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#A8F0C0]">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m10.3 3.9-8.1 14A2 2 0 0 0 3.9 21h16.2a2 2 0 0 0 1.7-3.1l-8.1-14a2 2 0 0 0-3.4 0Z" />
                    <path d="M12 9v4M12 17h.01" />
                  </svg>
                </span>
                <h3 className="text-lg font-black uppercase tracking-wide text-white sm:text-xl">
                  {data.warranty.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-white/90 sm:text-base">
                <NoticeText segments={data.warranty.description} />
              </p>
            </div>
          </div>

          </div>

          <div className="grid gap-6 border-t border-[#9EECBA]/40 bg-[#F3FAF5] p-6 sm:p-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-center lg:gap-12 xl:px-10">
            <div className="min-w-0">
              <div className="flex items-start gap-3 sm:gap-4">
                <a
                  href={data.support.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`WhatsApp Range Rover Garage on ${data.support.whatsapp.label} (opens in a new tab)`}
                  className="inline-flex size-11 shrink-0 items-center justify-center rounded-full text-[#11633A] transition-colors hover:text-[#0d4e2d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#11633A]"
                >
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="shrink-0"
                  >
                    <path d="M12.04 2a9.93 9.93 0 0 0-8.56 15l-1.3 4.75 4.87-1.28A10 10 0 1 0 12.04 2Zm0 18.2a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-2.89.76.77-2.82-.2-.3A8.18 8.18 0 1 1 12.04 20.2Zm4.5-6.13c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.52.12-.12.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.5-.41-.43-.57-.44h-.49c-.17 0-.45.06-.68.32-.23.25-.89.87-.89 2.12s.91 2.46 1.04 2.63c.13.17 1.79 2.73 4.33 3.83.6.26 1.07.42 1.44.53.61.19 1.16.16 1.6.1.49-.07 1.48-.61 1.69-1.2.21-.59.21-1.1.15-1.2-.06-.1-.23-.16-.49-.29Z" />
                  </svg>
                </a>
                <div className="min-w-0">
                  <h3 className="text-lg font-black text-gray-900">
                    {data.support.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {data.support.description}
                  </p>
                </div>
              </div>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={data.support.phone.href}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#11633A] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#0d4e2d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#11633A]"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="shrink-0"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12 19.79 19.79 0 0 1 1 3.18 2 2 0 0 1 3 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6.06 6.06l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  {data.support.phone.label}
                </a>
                <Link
                  href={data.support.link.href}
                  className="inline-flex min-h-11 items-center justify-center rounded-xl border border-[#11633A] px-5 py-3 text-sm font-bold text-[#11633A] transition-colors hover:bg-[#11633A]/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#11633A]"
                >
                  {data.support.link.label}
                </Link>
              </div>
            </div>

            <address className="min-w-0 border-t border-[#11633A]/20 pt-5 not-italic lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6">
              <p className="text-base font-bold text-[#11633A]">{data.location.name}</p>
              <a
                href={data.location.mapHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex min-h-11 items-center gap-3 rounded-sm text-sm leading-relaxed text-slate-600 transition-colors hover:text-[#11633A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#11633A]"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="shrink-0 text-[#11633A]"
                >
                  <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{data.location.addressLines.map((line, index) => <span key={index} className="block">{line}</span>)}</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}
