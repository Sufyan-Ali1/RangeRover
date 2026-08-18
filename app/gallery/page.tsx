import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VideoSection from "../components/VideoSection";
import Image from "next/image";

export const metadata = {
  title: "Range Rover Engine Rebuild Gallery | Our Workshop",
  description: "Browse our Range Rover engine rebuild gallery, showcasing strip-downs, precision machining and finished rebuilds from our Essex workshop. View the photos.",
};

const images = Array.from({ length: 20 }, (_, i) => ({
  src: `/range-rover/range rover garage image ${i + 1}.jpg`,
  alt: `Range Rover Garage image ${i + 1}`,
  priority: i < 4,
}));

export default function GalleryPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <section className="w-full bg-white pt-32 pb-16 xl:pb-20">
        <div className="mx-auto w-full max-w-[1728px] px-6 sm:px-10 xl:px-[101px]">
          <h1 className="mb-10 text-center text-[32px] font-black uppercase tracking-wide text-gray-900 sm:text-[40px]">
            Our Gallery
          </h1>

          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
            {images.map((img) => (
              <div key={img.src} className="mb-4 overflow-hidden rounded-xl break-inside-avoid">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  priority={img.priority}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="w-full h-auto object-cover transition duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <VideoSection />
      <Footer />
    </div>
  );
}
