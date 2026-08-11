export interface NationwideSupportProps {
  data: {
    titleBefore?: string;
    titleHighlight?: string;
    paragraphs?: string[];
  };
}

export default function NationwideSupport({ data }: NationwideSupportProps) {
  const paragraphs = data.paragraphs ?? [];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1728px] px-6 py-14 sm:px-10 xl:px-[101px] xl:py-16">
        <h2 className="mb-6 text-[28px] font-black leading-tight text-gray-900 sm:text-[36px]">
          {data.titleBefore}
          <span className="text-[#11633A]">{data.titleHighlight}</span>
        </h2>

        {paragraphs.map((p, i) => (
          <p
            key={i}
            className={`text-[15px] leading-relaxed text-gray-700 ${
              i < paragraphs.length - 1 ? "mb-5" : ""
            }`}
          >
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}