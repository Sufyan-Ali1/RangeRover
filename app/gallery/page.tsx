import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VideoSection from "../components/VideoSection";
import Image from "next/image";

const siteUrl = process.env.SITE_URL || "https://www.rangerover.co.uk";
export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Range Rover Engine Rebuild Gallery | Our Workshop",
  description:
    "Browse our Range Rover engine rebuild gallery, showcasing strip-downs, precision machining and finished rebuilds from our Essex workshop. View the photos.",
  alternates: {
    canonical: "/gallery",
  },
};

const imageNumbers = [1, 2, 3, 4, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

const imageDescriptions: Record<number, string> = {
  1: "Range Rover raised on a workshop lift with an engine hoist in front",
  2: "Range Rover on a lift with its bonnet open during engine work",
  3: "Red Range Rover on a lift with its removed engine below",
  4: "Range Rover and Land Rover vehicles lined up outside the workshop",
  6: "Range Rover on a workshop lift with its bonnet raised",
  7: "White Range Rover on a lift beside engine hoists and workshop tools",
  9: "Black Range Rover parked outside the garage",
  10: "Range Rover with its bonnet open and engine removed in the workshop",
  11: "Range Rover engine bay with the bonnet open",
  12: "Removed engine on a stand in front of a Range Rover",
  13: "Front view of a Range Rover parked outside the workshop",
  14: "Red Range Rover raised on a lift with its front wheel removed",
  15: "Range Rover parked beside the garage entrance",
  16: "Engine and drivetrain removed from a Range Rover in the workshop",
  17: "White Range Rover parked outside the garage",
  18: "White Range Rover on a lift with its bonnet open and engine below",
  19: "Range Rover raised above a tool trolley during engine repairs",
  20: "Range Rover outside the workshop with a removed engine beside it",
  21: "Black Range Rover positioned between workshop lift posts",
  22: "Front view of a Range Rover outside Range Rover Garage",
};

const images = imageNumbers.map((number, i) => ({
  src: `/range-rover/range rover garage image ${number}.webp`,
  alt: imageDescriptions[number],
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
              <div
                key={img.src}
                className="mb-4 overflow-hidden rounded-xl break-inside-avoid"
              >
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
