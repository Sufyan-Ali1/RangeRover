import type { AuthorityLeadingData } from "../data/authority";

export default function AuthorityLeading({ data }: { data: AuthorityLeadingData }) {
  return (
    <div className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1728px] px-6 py-16 sm:px-10 xl:px-[101px] xl:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">

          <div className="flex flex-1 flex-col">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#4CA66B]">
              {data.label}
            </p>
            <h2 className="mb-4 text-[28px] font-black leading-tight text-gray-900 sm:text-[36px]">
              {data.titleBefore}
              <span className="text-[#4CA66B]">{data.titleHighlight}</span>
              {data.titleAfter}
            </h2>
            <p className="text-[13px] leading-relaxed text-gray-500">{data.body}</p>
          </div>

          <div className="flex flex-1 justify-end">
            <img
              src="/group.svg"
              alt=""
              aria-hidden="true"
              className="w-full max-w-[765px] object-contain"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
