"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function QuoteSuccess() {
  const router = useRouter();
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    if (seconds <= 0) {
      router.push("/");
      return;
    }
    const timer = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [seconds, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F3F4F6] px-4 py-10">
      <div className="w-full max-w-[440px] rounded-2xl bg-white px-8 py-10 shadow-xl text-center">

        {/* Check circle */}
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#ECFFF3] border-2 border-[#4CA66B]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#11633A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>

        {/* Heading */}
        <h1 className="mb-3 text-[26px] leading-tight">
          <span className="font-black text-gray-900">INQUIRY </span>
          <span className="font-black italic text-[#11633A]">RECEIVED!</span>
        </h1>

        {/* Body */}
        <p className="mb-7 text-[13.5px] leading-[1.75] text-gray-500">
          Thank you for contacting Range Rover Garage. One of our JLR specialists will review your{" "}
          <span className="font-semibold italic text-gray-700">enquiry</span>{" "}
          and get back to you shortly.
        </p>

        {/* Contact buttons */}
        <div className="mb-7 flex items-center justify-center gap-3">
          <a
            href="tel:01708592377"
            className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-[13px] font-semibold text-gray-700 transition hover:border-[#4CA66B] hover:text-[#11633A]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4CA66B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            01708 592377
          </a>
          <a
            href="mailto:sales@rangerovergarage.co.uk"
            className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-[13px] font-semibold text-gray-700 transition hover:border-[#4CA66B] hover:text-[#11633A]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4CA66B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            Email Us
          </a>
        </div>

        {/* Countdown */}
        <div className="mb-5 flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#4CA66B]">
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-spin"
            style={{ animationDuration: "1.5s" }}
          >
            <polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
          </svg>
          Redirecting in {seconds} second{seconds !== 1 ? "s" : ""}…
        </div>

        {/* Back link */}
        <Link
          href="/"
          className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-400 transition hover:text-[#11633A]"
        >
          ‹ Back To Workshop
        </Link>

      </div>
    </div>
  );
}
