import type { Faq } from "../data/faqs";

export default function FAQ({ faqs }: { faqs: Faq[] | undefined }) {
  return (
    <section className="w-full bg-[#F3F4F6]">
      <div className="mx-auto w-full max-w-[1728px] px-6 py-16 sm:px-10 xl:px-[101px] xl:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          <div className="flex w-full flex-col lg:w-[380px] lg:shrink-0">
            <h2 className="mb-4 text-[28px] font-black leading-tight text-gray-900 sm:text-[36px]">
              Frequently Asked Questions
            </h2>
            <p className="mb-8 text-[14px] leading-relaxed text-gray-500">
              Everything you need to know about our Range Rover and Land Rover
              engine rebuild, replacement and repair services - answered by our
              JLR-trained specialists.
            </p>
            <a
              href="/get-quote"
              className="inline-flex w-fit items-center justify-center rounded-[12px] border-2 border-[#11633A] px-8 py-3 text-[14px] font-bold text-[#11633A] transition hover:bg-[#11633A]/5"
            >
              Request A Quote
            </a>
          </div>

          <div className="flex flex-1 flex-col rounded-[10px] border-2 border-[#4CA66B] p-4">
            <div className="flex flex-col gap-3">
              {faqs?.map((faq, i) => (
                <details
                  key={faq.q}
                  className="group rounded-[10px] border border-[#4CA66B] bg-white open:bg-[#ECFFF3]"
                >
                  <summary className="flex min-h-[88px] cursor-pointer list-none items-center gap-3 px-4 py-5 sm:min-h-[104px] sm:gap-8 sm:px-8 sm:py-7">
                    <span className="w-8 shrink-0 text-[16px] font-bold text-gray-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <p className="text-[16px] font-bold text-gray-900">
                        {faq?.q}
                      </p>
                    </div>
                    <span className="shrink-0 text-[22px] font-light leading-none text-gray-700 group-open:hidden">
                      +
                    </span>
                    <span className="hidden shrink-0 text-[22px] font-light leading-none text-gray-700 group-open:inline">
                      x
                    </span>
                  </summary>
                  <div className="px-4 pb-5 sm:px-8 sm:pb-7">
                    <p className="pl-11 text-[14px] leading-relaxed text-gray-600 sm:pl-16">
                      {faq?.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
