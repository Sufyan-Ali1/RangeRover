import Link from "next/link";
import { reviews, type Review } from "../data/reviews";

export function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#F5A623" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex h-full flex-col gap-3 rounded-2xl bg-[#E8F4ED] p-7">
      <div>
        <p className="text-[17px] font-semibold italic text-gray-900">{review.name}</p>
        <p className="mt-0.5 text-[13px] text-gray-500">{review.date}</p>
      </div>
      <p className="flex-1 text-[14px] leading-[1.7] text-gray-700">{review.text}</p>
      <StarRating count={review.stars} />
    </div>
  );
}

export default function Reviews() {
  const preview = reviews.slice(0, 3);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1728px] px-6 py-16 sm:px-10 sm:py-20 xl:px-[101px] xl:py-[80px]">

        <h2 className="mb-10 text-center text-[28px] font-black text-gray-900 sm:text-[36px] xl:mb-14">
          Reviews
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {preview.map((r) => (
            <ReviewCard key={r.id} review={r} />
          ))}
        </div>

        <div className="mt-10 flex justify-center xl:mt-12">
          <Link
            href="/reviews"
            className="rounded-lg border-2 border-[#11633A] px-16 py-3 text-[15px] font-semibold text-[#11633A] transition hover:bg-[#11633A] hover:text-white"
          >
            View More
          </Link>
        </div>

      </div>
    </section>
  );
}
