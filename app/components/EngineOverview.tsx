interface EngineOverviewData {
  eyebrow: string;
  title: string;
  paragraphs: string[];
}

function CornerPattern({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 240 240" fill="none" aria-hidden="true" className={`pointer-events-none absolute h-40 w-40 sm:h-60 sm:w-60 ${className}`}>
      <path d="M0 0h240v240c-63-15-112-34-148-78C51 112 0 69 0 0Z" fill="#11633A" fillOpacity="0.10" />
      <path d="M48 0h192v192c-46-15-97-24-126-62C82 91 48 61 48 0Z" fill="#11633A" fillOpacity="0.20" />
      <path d="M96 0h144v144c-40-13-68-18-91-48C124 65 96 48 96 0Z" fill="#11633A" fillOpacity="0.30" />
      <path d="M144 0h96v96c-26-10-43-12-59-34C161 36 144 32 144 0Z" fill="#0d4f2d" fillOpacity="0.50" />
      <path d="M192 0h48v48c-17-7-27-7-35-21C197 15 192 12 192 0Z" fill="#0d4f2d" fillOpacity="0.70" />
    </svg>
  );
}

export default function EngineOverview({ data }: { data: EngineOverviewData }) {
  return (
    <section aria-labelledby="engine-overview-title" className="bg-[#F9FAFB] px-5 py-14 sm:px-8 lg:py-16">
      <div className="relative isolate mx-auto max-w-[1216px] overflow-hidden bg-white px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <CornerPattern className="right-0 top-0 -z-10" />
        <CornerPattern className="bottom-0 left-0 -z-10 rotate-180" />
        <p className="text-xs font-bold uppercase tracking-wide text-[#11633A]">{data.eyebrow}</p>
        <h2 id="engine-overview-title" className="mt-6 max-w-5xl text-3xl font-extrabold leading-tight tracking-tight text-[#0d4f2d] sm:text-4xl">{data.title}</h2>
        <div className="mt-7 space-y-8 sm:space-y-9">
          {data.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-sm leading-7 text-gray-600 sm:text-base sm:leading-7">{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
