import Image from "next/image";
import Link from "next/link";

interface SpecialistsBannerData {
  eyebrow: string;
  title: string;
  description: string;
  features: { icon: string; title: string; description: string }[];
  image: string;
  imageAlt: string;
  imageCaption: string;
  callLabel: string;
  callHref: string;
  quoteLabel: string;
  quoteHref: string;
}

const icons: Record<string, string> = {
  badge: "M12 2l3 3 4 1 1 4 2 2-2 3-1 4-4 1-3 2-3-2-4-1-1-4-2-3 2-2 1-4 4-1zM8 12l3 3 5-6",
  gauge: "M5 19a9 9 0 1114 0zM12 14l5-6M12 14h.01",
  facility: "M3 21h18M5 21v-9l7-4 7 4v9M9 21v-6h6v6M12 3v5M9 5h6",
  phone: "M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 2 .7 2.9a2 2 0 01-.5 2.1L8 10a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.5c.9.3 1.9.6 2.9.7a2 2 0 011.7 2z",
  quote: "M6 3h8l4 4v14H6zM14 3v5h4M10 11h4m-4 4h4m-4 3h2",
};

function BannerIcon({ name }: { name: string }) {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0" aria-hidden="true"><path d={icons[name] ?? icons.badge} /></svg>;
}

export default function EngineSpecialistsBanner({ data }: { data: SpecialistsBannerData }) {
  return (
    <section aria-labelledby="engine-specialists-title" className="bg-[#062d1c] px-5 py-14 sm:px-8 lg:py-16">
      <div className="mx-auto grid max-w-[1216px] items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-1.5 rounded-full bg-[#11633A]/40 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#A6F0C6]"><BannerIcon name="facility" />{data.eyebrow}</p>
          <h2 id="engine-specialists-title" className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[42px]">{data.title}</h2>
          <p className="mt-5 text-base leading-relaxed text-[#b4d6bd] sm:text-lg">{data.description}</p>
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {data.features.map((feature) => (
              <div key={feature.title} className="flex items-center gap-2 rounded bg-[#11633A]/35 px-3 py-3">
                <span className="text-[#A6F0C6]"><BannerIcon name={feature.icon} /></span>
                <div><h3 className="text-base font-semibold text-white">{feature.title}</h3><p className="mt-0.5 text-xs leading-relaxed text-[#b4d6bd]">{feature.description}</p></div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <a href={data.callHref} className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-[#A6F0C6] px-5 py-3 text-base font-semibold text-[#062d1c] transition-colors hover:bg-[#dff0df] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A6F0C6]"><BannerIcon name="phone" />{data.callLabel}</a>
            <Link href={data.quoteHref} className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-[#11633A] px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-[#0d4f2d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A6F0C6]"><BannerIcon name="quote" />{data.quoteLabel}</Link>
          </div>
        </div>
        <div className="relative isolate aspect-[480/300] overflow-hidden rounded-2xl shadow-xl">
          <Image src={data.image} alt={data.imageAlt} fill sizes="(min-width: 1024px) 480px, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#062d1c]/70 via-transparent to-transparent" />
          <p className="absolute inset-x-4 bottom-4 flex items-center gap-2 rounded bg-[#0d4f2d]/95 px-3 py-3 text-sm font-semibold text-white sm:text-base"><span className="text-[#A6F0C6]"><BannerIcon name="badge" /></span>{data.imageCaption}</p>
        </div>
      </div>
    </section>
  );
}
