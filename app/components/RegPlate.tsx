"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function UnionJack() {
  return (
    <svg viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" className="h-7 w-10">
      <rect width="60" height="40" fill="#012169"/>
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="white" strokeWidth="8"/>
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="4"/>
      <path d="M30,0 V40 M0,20 H60" stroke="white" strokeWidth="12"/>
      <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="8"/>
    </svg>
  );
}

export default function RegPlate() {
  const [reg, setReg] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    const trimmed = reg.trim();
    if (!trimmed) {
      setError("Please enter a registration number.");
      return;
    }
    if (!/^[A-Z0-9]{1,8}$/.test(trimmed)) {
      setError("Registration must be alphanumeric only (max 8 characters).");
      return;
    }
    setError("");
    router.push(`/get-quote?reg=${encodeURIComponent(trimmed)}`);
  };

  return (
    <div className="mt-6 w-full max-w-[780px]">
      {/* Label */}
      <p className="mb-3 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-white">
        Enter Your Reg Number For Free Quote.
      </p>

      {/* Unified plate */}
      <div className={`flex w-full overflow-hidden rounded-lg shadow-xl ${error ? "ring-2 ring-red-400" : ""}`}>
        {/* Navy left: flag + UK */}
        <div className="flex flex-col items-center justify-center gap-0.5 bg-[#003087] px-3 py-2">
          <UnionJack />
          <span className="text-[10px] font-bold tracking-widest text-white">UK</span>
        </div>

        {/* Yellow input */}
        <input
          type="text"
          value={reg}
          onChange={(e) => {
            setReg(e.target.value.replace(/[^A-Za-z0-9]/g, "").toUpperCase().slice(0, 8));
            if (error) setError("");
          }}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="ENTER REGISTRATION"
          maxLength={8}
          className="flex-1 bg-[#F5C400] px-3 py-3 text-[13px] font-black uppercase tracking-[0.1em] text-[#1a1a1a] placeholder:font-bold placeholder:text-[#8B7200] focus:outline-none sm:px-5 sm:text-[16px] sm:tracking-[0.2em]"
        />

        {/* White search section */}
        <button
          type="button"
          onClick={handleSearch}
          aria-label="Search registration"
          className="flex items-center justify-center bg-white px-5 transition hover:bg-gray-100"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
        </button>
      </div>

      {error && (
        <p className="mt-2 text-center text-[11px] font-semibold text-red-300">{error}</p>
      )}

      {/* Below-plate hint */}
      <p className="mt-3 text-center text-[11px] text-white/60">
        Don&apos;t Have Reg..?{" "}
        <button
          type="button"
          onClick={() => router.push("/get-quote")}
          className="font-bold text-white/80 underline underline-offset-2 hover:text-white"
        >
          Click Here
        </button>
      </p>
    </div>
  );
}
