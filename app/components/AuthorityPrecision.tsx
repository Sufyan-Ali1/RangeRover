import type { AuthoritySectionData } from "../data/authority";

export default function AuthorityPrecision({ data }: { data: AuthoritySectionData }) {
  return (
    <div className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1728px] px-6 py-16 sm:px-10 xl:px-[101px] xl:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">

          <div className="flex flex-1 flex-col">
            <h2 className="mb-4 text-[28px] font-black leading-tight text-gray-900 sm:text-[36px]">
              {data.titleBefore}
              <span className="text-[#1a5c2e]">{data.titleHighlight}</span>
            </h2>
            {data.paragraphs.map((p, i) => (
              <p key={i} className={`text-[13px] leading-relaxed text-gray-600 ${i < data.paragraphs.length - 1 ? "mb-5" : ""}`}>
                {p}
              </p>
            ))}
          </div>

          <div className="relative flex min-h-[260px] flex-1 flex-col sm:min-h-[320px]">
            <img
              src="/range-rover/range%20rover%20garage%20image%208.jpg"
              alt="Range Rover engine precision work"
              className="w-full flex-1 rounded-2xl object-cover"
            />
            <div className="absolute bottom-6 left-6">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9EECBA]">
                {data.badge.label}
              </p>
              <p className="text-[18px] font-black uppercase tracking-wider text-white">
                {data.badge.title}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
