import Link from "next/link";
import { engineSizes } from "../data/engineSizes";

interface Props {
  brandSlug: string;
  brandTitle: string;
  modelSlug?: string;
  modelTitle?: string;
}

export default function PopularEngineSizes({ brandSlug, brandTitle, modelSlug, modelTitle }: Props) {
  const entry = engineSizes[brandSlug];
  if (!entry) return null;

  const displayName = modelTitle ? `${brandTitle} ${modelTitle}` : brandTitle;

  return (
    <section className="w-full bg-[#F9FAFB] py-16 xl:py-20">
      <div className="mx-auto w-full max-w-[1728px] px-6 sm:px-10 xl:px-[101px]">

        <div className="mb-12 text-center">
          <h2 className="text-[28px] font-black text-gray-900 sm:text-[36px]">
            {entry.heading}{" "}
            <span style={{ color: "#11633A" }}>{entry.subheading}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-gray-500">
            {entry.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {entry.sizes.map((size) => (
            <Link
              key={size}
              href={`/engines/${brandSlug}-${size}`}
              className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#11633A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
              <span className="text-[15px] font-bold text-gray-900">
                {displayName} {size} Engines
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
