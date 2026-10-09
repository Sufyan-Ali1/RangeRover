import Image from "next/image";

export default function LegalPageBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 flex select-none items-center justify-center"
    >
      <div className="relative h-72 w-72 opacity-[0.08] sm:h-[26rem] sm:w-[26rem] lg:h-[36rem] lg:w-[36rem]">
        <Image
          src="/logo.svg"
          alt=""
          fill
          sizes="(max-width: 640px) 288px, (max-width: 1024px) 416px, 576px"
          className="object-contain brightness-0"
        />
      </div>
    </div>
  );
}
