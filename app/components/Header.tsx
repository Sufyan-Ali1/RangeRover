import Image from "next/image";
import RegPlate from "./RegPlate";

const heroHighlights = [
  "Save up to 40% on Reconditioned Range Rover and Land Rover Engines",
  "Free Expert Advice on Engine Repair, Rebuild and Replacement",
  "Advanced Engine Diagnostics, Supply and Fitting Services",
  "UK Wide Vehicle Recovery and Fast Turnaround Available",
];

interface HeaderProps {
  title?: React.ReactNode;
  subtitle?: string;
  compact?: boolean;
}

export default function Header({
  title = (
    <>
      <span className="block sm:inline">Premium </span>
      <span className="block text-[#A6F0C6] sm:inline">Range Rover </span>
      <span className="block sm:inline">Engines</span>
    </>
  ),
  subtitle = "Used & Reconditioned  |  Tested & Reliable",
  compact = false,
}: HeaderProps) {
  return (
    <section
      className={`relative w-full overflow-hidden ${
        compact ? "min-h-[760px] lg:min-h-[720px]" : "min-h-[760px] lg:min-h-[640px]"
      }`}
    >
      <Image
        src="/images/header.webp"
        alt=""
        aria-hidden="true"
        fill
        priority={!compact}
        sizes="100vw"
        className="absolute inset-0 scale-[1.03] object-cover"
      />

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.62)_0%,rgba(0,0,0,0.46)_42%,rgba(9,56,33,0.72)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(38,126,71,0.45),transparent_40%)]" />
      {compact && <div className="absolute inset-0 bg-black/10" />}

      <div
        className={`absolute inset-0 flex flex-col items-center px-6 text-center ${
          compact ? "justify-start pt-24 pb-8" : "justify-start pt-24 pb-8 lg:pt-28"
        }`}
      >
        <h1
          className={`max-w-5xl font-black uppercase text-white ${
            compact
              ? "text-[2.2rem] leading-[0.9] tracking-[0.08em] sm:text-2xl sm:leading-tight sm:tracking-wide md:text-3xl lg:text-4xl xl:text-5xl"
              : "text-[2.2rem] leading-[0.9] tracking-[0.08em] sm:text-2xl sm:leading-tight sm:tracking-wide md:text-3xl lg:text-4xl xl:text-5xl"
          }`}
        >
          {title}
        </h1>
        <p
          className={`max-w-3xl font-semibold uppercase text-white/80 ${
            compact
              ? "mt-4 text-[11px] tracking-[0.22em] sm:text-xs md:text-[13px]"
              : "mt-4 text-[11px] tracking-[0.18em] sm:text-[12px] md:text-sm lg:text-base"
          }`}
        >
          {subtitle}
        </p>
        <RegPlate />
        <div className="mt-5 flex w-full max-w-5xl flex-col items-center gap-2.5 sm:mt-6">
          {heroHighlights.map((item) => (
            <div
              key={item}
              className="flex w-full max-w-full items-start gap-2.5 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-left backdrop-blur-sm sm:w-fit sm:items-center sm:rounded-full sm:py-2 sm:text-center sm:px-5"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#39f0c0] text-[11px] font-bold text-[#39f0c0] sm:mt-0">
                +
              </span>
              <span className="text-[13px] font-semibold leading-snug text-white sm:text-base">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
