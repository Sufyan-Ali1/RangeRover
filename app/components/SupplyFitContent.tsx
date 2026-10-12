import { supplyFitContentData } from "../data/supplyFit/SupplyFitContentData";
import { SupplyFitContentDataProps } from "../data/types";

interface SupplyFitContentProps {
  data?: SupplyFitContentDataProps;
}

export default function SupplyFitContent({
  data = supplyFitContentData,
}: SupplyFitContentProps) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1728px] px-6 py-16 sm:px-10 xl:px-[101px] xl:py-20">
        {/* Heading */}
        <h2 className="mb-6 text-[28px] font-black leading-tight text-gray-900 sm:text-[32px]">
          {data.headingPart1}{" "}
          <span style={{ color: "#11633A" }}>{data.headingPart2}</span>
        </h2>

        {/* Body paragraphs */}
        <div className="flex flex-col gap-5 text-[15px] leading-[1.75] text-gray-700">
          {data.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          {/* Bullet list */}
          <ul className="flex flex-col gap-2 pl-1">
            {data.bulletList.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-gray-700" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
