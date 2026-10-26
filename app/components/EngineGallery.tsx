import Image from "next/image";

interface EngineGalleryData {
  eyebrow: string;
  title: string;
  description: string;
  images: { src: string; alt: string }[];
}

export default function EngineGallery({ data }: { data: EngineGalleryData }) {
  return (
    <section aria-labelledby="engine-gallery-title" className="bg-white px-5 py-14 sm:px-8 lg:py-16">
      <div className="mx-auto max-w-[1216px]">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-wide text-[#11633A]">{data.eyebrow}</p>
          <h2 id="engine-gallery-title" className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-[#0d4f2d] sm:text-4xl lg:text-[42px]">{data.title}</h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-base">{data.description}</p>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {data.images.map((image) => (
            <div key={image.src} className="relative aspect-[292/164] overflow-hidden rounded-lg bg-[#dff0df]">
              <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1280px) 292px, (min-width: 640px) 45vw, 90vw" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
