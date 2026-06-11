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
      PREMIUM <span className="text-[#A6F0C6]">RANGE ROVER</span> ENGINES
    </>
  ),
  subtitle = "Used & Reconditioned  |  Tested & Reliable",
  compact = false,
}: HeaderProps) {
  return (
    <section
      className={`relative w-full overflow-hidden ${
        compact ? "min-h-[660px] lg:min-h-[720px]" : "min-h-[580px] lg:min-h-[640px]"
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
          compact ? "justify-start pt-24 pb-8" : "justify-start pt-24 pb-6 lg:pt-28 lg:pb-8"
        }`}
      >
        <h1
          className={`font-black uppercase leading-tight tracking-wide text-white ${
            compact
              ? "text-3xl sm:text-4xl md:text-5xl xl:text-6xl"
              : "text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
          }`}
        >
          {title}
        </h1>
        <p
          className={`mt-3 font-medium uppercase tracking-[0.22em] text-white/80 ${
            compact
              ? "text-[10px] sm:text-xs md:text-[13px]"
              : "mt-2 text-[11px] sm:text-xs md:text-sm lg:text-base xl:text-lg"
          }`}
        >
          {subtitle}
        </p>
        <RegPlate />
        <div className="mt-5 flex w-full max-w-5xl flex-col items-center gap-2.5 sm:mt-6">
          {heroHighlights.map((item) => (
            <div
              key={item}
              className="flex w-fit max-w-full items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-center backdrop-blur-sm sm:px-5"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#39f0c0] text-[11px] font-bold text-[#39f0c0]">
                +
              </span>
              <span className="text-sm font-semibold leading-snug text-white sm:text-base">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
