import type { ExtendedServiceCard } from "../data/serviceCards";

export default function ServiceCards({
  cards,
}: {
  cards: ExtendedServiceCard[];
}) {
  return (
    <section className="w-full bg-[#F3F4F6]">
      <div className="mx-auto w-full max-w-[1728px] px-6 py-14 sm:px-10 xl:px-[101px] xl:py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col rounded-2xl border border-[#c8e6d0] bg-[#E2F7EA] p-7 shadow-md"
            >
              <h3 className="mb-5 text-[32px] font-black text-gray-900 sm:text-[38px]">
                {card.title}
              </h3>
              <p className="flex-1 text-[13.5px] leading-[1.75] text-gray-700">
                {card.description}
              </p>
              <div className="mt-8">
                <button
                  type="button"
                  className="rounded-xl border-2 border-[#11633A] px-8 py-3 text-[14px] font-bold text-[#11633A] transition hover:bg-[#11633A] hover:text-white"
                >
                  Instant Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
