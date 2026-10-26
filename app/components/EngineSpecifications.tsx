import Link from "next/link";

interface SpecificationsData {
  eyebrow: string;
  title: string;
  description: string;
  fields: { label: string; value: string; icon: string; highlight?: boolean }[];
  note: string;
  cta: { label: string; href: string };
}


const iconPaths: Record<string, string> = {
  car: "M5 11l2-6h10l2 6M4 11h16v8h-3v-2H7v2H4zM7 14h1m8 0h1M7 8h10",
  fuel: "M5 21V4h9v17M5 12h9M7 6h5v4H7zM14 8h2l2 3v7a2 2 0 004 0v-7l-4-5M4 21h11",
  gauge: "M5 19a9 9 0 1114 0zM12 14l5-6M12 14h.01",
  ruler: "M3 7h18v11H3zM7 7v6m4-6v4m4-4v6m3-6v4",
  code: "M3 3h6v6H3zM15 3h6v6h-6zM3 15h6v6H3zM5 5h2v2H5zM17 5h2v2h-2zM5 17h2v2H5zM12 3v3m0 3v3h4v3h5m-9 0v6m4-3v3h5v-3M3 12h6m10 0h2",
  layout: "M3 5h7m4 0h7M10 2v6M3 12h12m4 0h2M15 9v6M3 19h3m4 0h11M6 16v6",
  capacity: "M4 3h16v18H4zM7 8h5m-2-2v4m5-3l3 3m0-3l-3 3M7 15h4m4-1h3m-3 3h3",
  cylinders: "M6 4h12l2 4v10l-4 3H6l-3-4V7zM16 12a4 4 0 11-8 0 4 4 0 018 0M3 4l3 3m12 11l3 3",
  valves: "M8 3h8m-4 0v7M7 10h10v5H7zM5 15h14v6H5zM9 15v-3m6 3v-3M3 21h18",
  power: "M13 2L4 14h7l-1 8 10-13h-7z",
  supply: "M4 4h16M4 20h16M7 4v16m10-16v16M3 12h6l3-5 3 10 3-5h3",
  charge: "M3 8h13a3 3 0 10-3-3M3 12h17a3 3 0 110 6M3 16h8a2 2 0 11-2 3",
  shield: "M12 3l8 3v6c0 5-8 9-8 9s-8-4-8-9V6zM8 12l3 3 5-6",
};

function SpecIcon({ name }: { name: string }) {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={iconPaths[name] ?? iconPaths.car} />
    </svg>
  );
}

export default function EngineSpecifications({ data }: { data: SpecificationsData }) {
  return (
    <section aria-labelledby="engine-specifications-title" className="bg-[#F9FAFB] px-5 py-14 sm:px-8 lg:py-16">
      <div className="mx-auto max-w-[1216px]">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-wide text-[#11633A]">{data.eyebrow}</p>
          <h2 id="engine-specifications-title" className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-[#0d4f2d] sm:text-4xl lg:text-[42px]">{data.title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">{data.description}</p>
        </div>
        <div className="rounded-2xl bg-white p-4 shadow-[0_3px_4px_rgba(0,0,0,0.12)] sm:p-6">
          <dl className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {data.fields.map((field) => (
              <div key={field.label} className={`flex items-center gap-2 rounded-lg p-2 ${field.highlight ? "bg-[#11633A]" : "bg-[#dff0df]"}`}>
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded ${field.highlight ? "bg-[#0d4f2d] text-[#A6F0C6]" : "bg-white text-[#11633A]"}`}><SpecIcon name={field.icon} /></span>
                <div className="min-w-0">
                  <dt className={`text-xs font-semibold uppercase tracking-[0.08em] ${field.highlight ? "text-[#A6F0C6]" : "text-gray-500"}`}>{field.label}</dt>
                  <dd className={`mt-0.5 font-medium leading-snug ${field.highlight ? "text-xl font-bold text-[#A6F0C6]" : "text-base text-gray-900"}`}>{field.value}</dd>
                </div>
              </div>
            ))}
          </dl>
          <div className="mt-6 flex flex-col items-start justify-between gap-5 border-t border-gray-200 pt-4 lg:flex-row lg:items-center">
            <p className="flex items-start gap-2 text-[13px] leading-relaxed text-gray-600">
              <span className="mt-0.5 shrink-0 text-[#11633A]"><SpecIcon name="shield" /></span>
              {data.note}
            </p>
            <Link href={data.cta.href} className="inline-flex min-h-11 shrink-0 items-center justify-center rounded bg-[#11633A] px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#0d4f2d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#11633A] sm:text-base">{data.cta.label}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
