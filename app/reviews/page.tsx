import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ReviewCard } from "../components/Reviews";
import VideoSection from "../components/VideoSection";
import CTA from "../components/CTA";
import { reviews } from "../data/reviews";

export const metadata = {
  title: "Customer Reviews | Range Rover Engines",
  description:
    "Read what our customers say about our Range Rover and Land Rover engine services.",
};

export default function ReviewsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      {/* Page header */}
      <div className="w-full bg-white pt-28 pb-6 text-center sm:pt-32">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#4CA66B]">
          What Our Customers Say
        </p>
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Real Owner Feedback
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-gray-500">
          See what Range Rover and Land Rover owners say after trusting us with
          their engine work.
        </p>
      </div>

      {/* All reviews grid */}
      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1728px] px-6 py-12 sm:px-10 xl:px-[101px] xl:py-16">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {reviews.map((r) => (
              <ReviewCard key={r.id} review={r} />
            ))}
          </div>
        </div>
      </section>

      <VideoSection />
      <CTA />
      <Footer />
    </div>
  );
}
