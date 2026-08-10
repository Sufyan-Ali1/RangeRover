import Image from "next/image";
import Link from "next/link";

export interface ExtendedServiceCard {
  title: string;
  description: string;
  image: string;
  href: string;
}

const defaultCards: ExtendedServiceCard[] = [
  {
    title: "Range Rover Engines",
    description:
      "Specialist rebuilds and replacements for the full Range Rover lineup — TDV6, SDV6, SDV8 and 5.0L V8 Supercharged — using genuine OEM parts, backed by up to 24 months warranty and free UK collection and delivery.",
    image: "/images/models/sport.webp",
    href: "/engines/range-rover",
  },
  {
    title: "Land Rover Engines",
    description:
      "Our team works across the full Land Rover range, from Discovery to Defender, covering diagnostics, timing components, turbo systems and full engine rebuilds with genuine parts throughout.",
    image: "/images/models/discovery-1.webp",
    href: "/engines/land-rover",
  },
  {
    title: "Jaguar Engines",
    description:
      "Specialist rebuilds and replacements for Jaguar XE, XF, XJ, F-Pace and F-Type across the full Ingenium, 3.0 V6 Supercharged and 5.0 V8 Supercharged range — OEM components, up to 24 months warranty.",
    image: "/jaguar.svg",
    href: "/engines/jaguar",
  },
];

interface BrandShowcaseProps {
  cards?: ExtendedServiceCard[];
}

function BrandCard({ title, description, image, href }: ExtendedServiceCard) {
  return (
    <div
      className="flex flex-col rounded-3xl shadow-md overflow-hidden"
      style={{ background: "#dff0df" }}
    >
      <div className="flex h-[220px] w-full items-center justify-center px-6 pt-6">
        <Image
          src={image}
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
            href={href}
            className="inline-block rounded-xl border-2 border-[#11633A] px-8 py-3 text-[14px] font-semibold text-[#11633A] transition-all duration-300 hover:bg-[#11633A] hover:text-white"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function BrandShowcase({
  cards = defaultCards,
}: BrandShowcaseProps) {
  const [first, second, third] = cards;

  return (
    <section className="w-full bg-[#F9FAFB] py-16 xl:py-20">
      <div className="mx-auto w-full max-w-[1728px] px-6 sm:px-10 xl:px-[101px]">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {first && <BrandCard {...first} />}
          {second && <BrandCard {...second} />}
        </div>

        {third && (
          <div className="mt-6 flex justify-center">
            <div className="w-full max-w-[580px]">
              <BrandCard {...third} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
