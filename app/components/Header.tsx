import RegPlate from "./RegPlate";

interface HeaderProps {
  title?: React.ReactNode;
  subtitle?: string;
  compact?: boolean;
}

export default function Header({
  title = (<>PREMIUM <span className="text-[#A6F0C6]">RANGE ROVER</span> ENGINES</>),
  subtitle = "Used & Reconditioned  |  Tested & Reliable",
  compact = false,
}: HeaderProps) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={
        compact
          ? { minHeight: "500px", maxHeight: "580px", height: "58vh" }
          : { aspectRatio: "1752 / 820", minHeight: "380px" }
      }
    >
      <img
        src="/header.svg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-[1.03] object-cover"
      />

      {compact && <div className="absolute inset-0 bg-black/30" />}

      <div
        className={`absolute inset-0 flex flex-col items-center justify-center px-6 text-center ${
          compact ? "pt-20 pb-[6%]" : "pt-16 pb-[5%]"
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
            compact ? "text-[10px] sm:text-xs md:text-[13px]" : "mt-2 text-[11px] sm:text-xs md:text-sm lg:text-base xl:text-lg"
          }`}
        >
          {subtitle}
        </p>
        <RegPlate />
      </div>
    </section>
  );
}
