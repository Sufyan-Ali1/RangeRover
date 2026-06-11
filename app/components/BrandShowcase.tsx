import Image from "next/image";
import Link from "next/link";
import { serviceCards } from "../data/serviceCards";

const brandConfig: Record<string, { image: string; href: string }> = {
  "Range Rover Engines": { image: "/images/models/sport.webp",       href: "/engines/range-rover" },
  "Land Rover Engines":  { image: "/images/models/discovery-1.webp", href: "/engines/land-rover"  },
  "Jaguar Engines":      { image: "/jaguar.svg",                        href: "/engines/jaguar"      },
};

const activeTitles = Object.keys(brandConfig);
const cards = serviceCards.filter((c) => activeTitles.includes(c.title));

function BrandCard({ title, description }: { title: string; description: string }) {
  const config = brandConfig[title];

  return (
    <div className="flex flex-col rounded-3xl shadow-md overflow-hidden" style={{ background: "#dff0df" }}>
      <div className="flex h-[220px] w-full items-center justify-center px-6 pt-6">
        <Image
          src={config.image}
          alt={title}
          width={640}
          height={400}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 580px"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-[28px] font-black leading-tight text-gray-900 sm:text-[32px]">
          {title}
        </h3>
        <p className="mt-3 flex-1 text-[14px] leading-relaxed text-gray-700">
          {description}
        </p>
        <div className="mt-6">
          <Link
            href={config.href}
            className="inline-block rounded-xl border-2 border-[#11633A] px-8 py-3 text-[14px] font-semibold text-[#11633A] transition-all duration-300 hover:bg-[#11633A] hover:text-white"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function BrandShowcase() {
  const [first, second, third] = cards;

  return (
    <section className="w-full bg-[#F9FAFB] py-16 xl:py-20">
      <div className="mx-auto w-full max-w-[1728px] px-6 sm:px-10 xl:px-[101px]">

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {first  && <BrandCard title={first.title}  description={first.description}  />}
          {second && <BrandCard title={second.title} description={second.description} />}
        </div>

        {third && (
          <div className="mt-6 flex justify-center">
            <div className="w-full max-w-[580px]">
              <BrandCard title={third.title} description={third.description} />
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
