import Image from "next/image";
import RegPlate from "./RegPlate";

interface HeaderProps {
  title?: React.ReactNode | string;
  subtitle?: string;
  compact?: boolean;
  highlights?: string[];
}

const defaultHighlights = [
  "Save up to 40% on Reconditioned Range Rover and Land Rover Engines",
  "Free Expert Advice on Engine Repair, Rebuild and Replacement",
  "Advanced Engine Diagnostics, Supply and Fitting Services",
  "UK Wide Vehicle Recovery and Fast Turnaround Available",
];

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
  highlights = defaultHighlights,
}: HeaderProps) {
  return (
    <section
      className={`relative w-full overflow-hidden flex flex-col justify-start ${
        compact 
          ? "py-20 lg:min-h-[720px] lg:justify-center" 
          : "py-20 lg:min-h-[640px] lg:justify-center"
      }`}
    >
      {/* Background Image & Overlays */}
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

      {/* Content Wrapper */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 text-center pt-6 lg:pt-0">
        
        {/* Title - Optimized for flexible and long content */}
        <h1 className="w-full font-extrabold tracking-tight text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-[1.2] drop-shadow-sm">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl font-medium text-white/90 text-xs sm:text-sm md:text-base leading-relaxed px-2">
          {subtitle}
        </p>

        {/* Registration Plate Component */}
        <div className="my-5 w-full flex justify-center">
          <RegPlate />
        </div>

        {/* Highlights Badges */}
        {highlights && highlights.length > 0 && (
          <div className="flex w-full max-w-4xl flex-col items-center gap-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex w-full items-start gap-2.5 rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-left backdrop-blur-sm sm:w-fit sm:items-center sm:rounded-full sm:px-5"
              >
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#39f0c0] text-[10px] font-bold text-[#39f0c0] sm:mt-0 sm:h-5 sm:w-5 sm:text-[11px]">
                  +
                </span>
                <span className="text-xs font-semibold leading-snug text-white sm:text-sm">
                  {item}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}