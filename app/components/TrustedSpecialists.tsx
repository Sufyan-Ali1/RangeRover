import Image from "next/image";
import Link from "next/link";
import type { TrustedSpecialistsData } from "../data/sections";

export default function TrustedSpecialists({ data }: { data: TrustedSpecialistsData }) {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-[1728px]">
        <div className="grid grid-cols-1 items-center lg:grid-cols-[4fr_2fr] lg:min-w-0">

          {/* ── Left: Content ── */}
          <div className="min-w-0 overflow-hidden px-6 py-10 sm:px-10 xl:px-[101px]">
            <h2 className="text-[24px] font-bold leading-tight text-gray-900 sm:text-[28px] lg:text-[36px]">
              {data.heading}
            </h2>

            {/* ── Mobile tree (vertical, circle-left + text-right) ── */}
            <div className="mt-6 lg:hidden">
              {data.steps.map((step, index) => (
                <div key={step.id} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-[#11633A] text-[17px] font-bold text-white shadow">
                      {step.id}
                    </div>
                    {index < data.steps.length - 1 && (
                      <div className="my-1 w-[2px] flex-1 bg-gray-900" />
                    )}
                  </div>
                  <div className="pb-5 pt-2">
                    <p className="text-[13px] leading-[1.65] text-gray-600">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Desktop tree (branching spine, hidden on mobile) ── */}
            <div className="mx-auto mt-7 hidden lg:block">
              {data.steps.map((step, index) => {
                const isFirst = index === 0;
                const isLast  = index === data.steps.length - 1;
                const spineGradient = isFirst
                  ? "linear-gradient(to bottom, transparent 50%, #111827 50%)"
                  : isLast
                  ? "linear-gradient(to bottom, #111827 50%, transparent 50%)"
                  : "#111827";

                return (
                  <div
                    key={step.id}
                    className="grid grid-cols-[300px_88px_2px_88px_280px] items-center"
                  >
                    {/* Left text */}
                    <div className={`py-1 pr-3 ${step.side !== "left" ? "invisible pointer-events-none" : ""}`}>
                      <p className="text-[13px] leading-[1.65] text-gray-600">{step.text}</p>
                    </div>

                    {/* Col 2: circle → branch (left steps) */}
                    <div className="flex items-center">
                      {step.side === "left" && (
                        <>
                          <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#11633A] text-[20px] font-bold text-white shadow">
                            {step.id}
                          </div>
                          <div className="h-[2px] flex-1 bg-gray-900" />
                        </>
                      )}
                    </div>

                    {/* Vertical spine */}
                    <div className="self-stretch" style={{ background: spineGradient }} />

                    {/* Col 4: branch → circle (right steps) */}
                    <div className="flex items-center justify-end">
                      {step.side === "right" && (
                        <>
                          <div className="h-[2px] flex-1 bg-gray-900" />
                          <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#11633A] text-[20px] font-bold text-white shadow">
                            {step.id}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Right text */}
                    <div className={`py-1 pl-3 ${step.side !== "right" ? "invisible pointer-events-none" : ""}`}>
                      <p className="text-[13px] leading-[1.65] text-gray-600">{step.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Description */}
            <p className="mt-5 text-[13.5px] leading-[1.8] text-gray-700">
              {data.description}
            </p>

            {/* CTA */}
            <Link
              href="/get-quote"
              className="mt-6 inline-block rounded-lg bg-[#11633A] px-9 py-3 text-[14px] font-semibold text-white transition hover:bg-[#0d4f2d] active:bg-[#093d22]"
            >
              Get Quote
            </Link>
          </div>

          {/* ── Right: Car SVG ── */}
          <div className="flex items-end justify-end px-6 pb-0 sm:px-10 lg:px-0">
            <Image
              src="/car.svg"
              alt="Range Rover specialist mechanic"
              width={500}
              height={380}
              className="w-full max-w-[400px] lg:max-w-none lg:w-[100%]"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
