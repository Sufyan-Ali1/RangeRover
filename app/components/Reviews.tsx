"use client";

import { useState } from "react";
import { reviews, type Review } from "../data/reviews";

export function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#11633A" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function ReviewCard({ review }: { review: Review }) {
  const initial = review.name.charAt(0).toUpperCase();
  return (
    <div className="flex h-full flex-col rounded-2xl border border-[#b6e8c8] bg-white p-6">
      <StarRating count={review.stars} />
      <p className="mt-4 flex-1 text-[13px] italic leading-relaxed text-gray-700">{review.text}</p>
      <hr className="my-4 border-[#d6f0e2]" />
      <div className="flex items-center gap-3">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-[#11633A] text-[13px] font-bold text-[#11633A]"
          style={{ background: "#ECFFF3" }}
        >
          {initial}
        </div>
        <div>
          <p className="text-[13px] font-bold text-gray-900">{review.name}</p>
          <p className="text-[11px] text-gray-400">{review.date}</p>
        </div>
      </div>
    </div>
  );
}

function MarqueeCard({
  review,
  onEnter,
  onLeave,
}: {
  review: Review;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const initial = review.name.charAt(0).toUpperCase();
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="flex w-[300px] shrink-0 flex-col rounded-2xl border border-[#b6e8c8] bg-white p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
    >
      <StarRating count={review.stars} />
      <p className="mt-4 flex-1 text-[13px] italic leading-relaxed text-gray-700">{review.text}</p>
      <hr className="my-4 border-[#d6f0e2]" />
      <div className="flex items-center gap-3">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-[#11633A] text-[13px] font-bold text-[#11633A]"
          style={{ background: "#ECFFF3" }}
        >
          {initial}
        </div>
        <div>
          <p className="text-[13px] font-bold text-gray-900">{review.name}</p>
          <p className="text-[11px] text-gray-400">{review.date}</p>
        </div>
      </div>
    </div>
  );
}

const allCards = [...reviews, ...reviews, ...reviews, ...reviews];

export default function Reviews() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="w-full overflow-hidden bg-white py-16 xl:py-20">
      <div className="mb-10 text-center">
        <h2 className="text-[28px] font-black text-gray-900 sm:text-[36px]">Reviews</h2>
      </div>

      <div className="w-full overflow-hidden">
        <div
          className="flex w-max gap-5 pr-5"
          style={{
            animation: "marquee 80s linear infinite",
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {allCards.map((review, i) => (
            <MarqueeCard
              key={i}
              review={review}
              onEnter={() => setPaused(true)}
              onLeave={() => setPaused(false)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
