import Image from "next/image";
import { aboutData } from "../data/about/AboutData";

export default function AboutSection() {
  const introEnd = aboutData.body.indexOf(". ") + 1;
  const introduction = aboutData.body.slice(0, introEnd);
  const story = aboutData.body.slice(introEnd).trim();

  return (
    <section className="w-full bg-white">
      <div className="relative overflow-hidden bg-[#0b2419]">
        <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#4CA66B]/10 blur-3xl" />
        <div className="relative mx-auto grid w-full max-w-[1728px] gap-10 px-6 pb-14 pt-32 sm:px-10 sm:pt-36 lg:grid-cols-2 lg:items-center lg:gap-16 lg:pb-20 lg:pt-40 xl:px-[101px]">
          <div className="max-w-xl">
            <div aria-hidden="true" className="mb-7 h-1 w-16 rounded-full bg-[#4CA66B]" />
            <h1 className="text-[42px] font-black leading-[1.08] tracking-tight text-white sm:text-[56px] xl:text-[68px]">
              {aboutData.heading}
            </h1>
            <p className="mt-7 text-[16px] leading-[1.85] text-white/75 sm:text-[18px]">
              {introduction}
            </p>
          </div>
          <div className="relative min-w-0">
            <div aria-hidden="true" className="absolute -bottom-3 -right-3 h-2/3 w-2/3 rounded-[28px] border border-[#4CA66B]/45 sm:-bottom-4 sm:-right-4" />
            <div className="relative aspect-[5/4] overflow-hidden rounded-[24px] border border-white/10 lg:aspect-[4/3]">
              <Image
                src="/range-rover/range rover garage image 3.webp"
                alt="Red Range Rover on a workshop lift with its removed engine below"
                fill
                preload
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[center_35%]"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0b2419]/35 to-transparent" />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[1728px] px-6 py-12 sm:px-10 lg:py-16 xl:px-[101px]">
        <div className="border-l-[3px] border-[#4CA66B] pl-6 sm:pl-8">
          <p className="max-w-[1200px] text-[15px] leading-[1.9] text-gray-600 sm:text-[16px]">
            {story}
          </p>
        </div>
      </div>
    </section>
  );
}
