interface EngineWhyChooseData {
  eyebrow: string;
  title: string;
  description: string;
  cards: { icon: string; title: string; description: string }[];
}

const iconPaths: Record<string, string> = {
  shield: "M12 3l8 3v6c0 5-8 9-8 9s-8-4-8-9V6z",
  checklist: "M3 3h18v18H3zM6 7h4m-4 5h3m-3 5h3M12 11l2 2 4-5",
  fitting: "M4 21h16M7 21V7l4-3 5 3-2 4-5-2M11 11l4 6h4M16 7l3-3 3 2M4 4h3",
  message: "M3 3h18v15H8l-5 4zM6 7h12M6 11h12M6 15h7",
};

export default function EngineWhyChoose({ data }: { data: EngineWhyChooseData }) {
  return (
    <section aria-labelledby="engine-why-choose-title" className="bg-[#F9FAFB] px-5 py-14 sm:px-8 lg:py-16">
      <div className="mx-auto max-w-[1216px]">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-wide text-[#11633A]">{data.eyebrow}</p>
          <h2 id="engine-why-choose-title" className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-[#0d4f2d] sm:text-4xl lg:text-[42px]">{data.title}</h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-base">{data.description}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {data.cards.map((card) => (
            <article key={card.title} className="rounded-lg border border-gray-100 border-t-2 border-t-[#11633A] bg-white p-4 shadow-sm">
              <span className="mb-3 flex h-12 w-12 items-center justify-center rounded bg-[#dff0df] text-[#11633A]">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={iconPaths[card.icon] ?? iconPaths.shield} /></svg>
              </span>
              <h3 className="text-xl font-semibold leading-snug text-[#0d4f2d]">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
