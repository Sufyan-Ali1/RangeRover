"use client";

import { useRef } from "react";
import Link from "next/link";
import blogsData from "../data/blogs.json";

interface Blog {
  title: string;
  slug: string;
  date: string;
  image: string;
  excerpt: string;
}

const posts = (blogsData as Blog[]).slice(0, 4);

export default function BlogSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector<HTMLElement>(":scope > div");
    const amount = card ? card.offsetWidth + 16 : 316;
    scrollRef.current.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <section className="w-full overflow-hidden bg-white py-14 xl:py-16">
      <div className="mx-auto w-full max-w-[1728px] px-6 sm:px-10 xl:px-[101px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">

          <div className="shrink-0 lg:w-[280px]">
            <h2 className="text-[28px] font-black leading-tight text-gray-900 sm:text-[36px]">
              Expert<br />Automotive<br />Guides
            </h2>
            <Link
              href="/blogs"
              className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#11633A] hover:underline"
            >
              View all articles <span>&gt;</span>
            </Link>
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-6">
            <div className="relative min-w-0 overflow-hidden">
              <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto pb-2"
                style={{ scrollbarWidth: "none", scrollSnapType: "x mandatory" }}
              >
                {posts.map((post) => (
                  <div
                    key={post.slug}
                    className="flex w-[300px] shrink-0 flex-col rounded-2xl p-5"
                    style={{ background: "#ECFFF3", scrollSnapAlign: "start" }}
                  >
                    <h3 className="mb-2.5 line-clamp-2 text-[15px] font-bold leading-snug text-gray-900">
                      {post.title}
                    </h3>
                    <p className="mb-4 line-clamp-3 text-[13px] leading-relaxed text-gray-600">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#11633A] hover:underline"
                    >
                      Explore Article
                      <span className="text-[16px]">→</span>
                    </Link>
                  </div>
                ))}
              </div>
              <div
                className="pointer-events-none absolute inset-y-0 right-0 w-24"
                style={{ background: "linear-gradient(to right, transparent, white)" }}
              />
            </div>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Previous"
                className="flex h-9 w-9 items-center justify-center bg-[#11633A] text-white transition hover:bg-[#11633A]"
                style={{ borderRadius: "6px" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Next"
                className="flex h-9 w-9 items-center justify-center bg-[#11633A] text-white transition hover:bg-[#11633A]"
                style={{ borderRadius: "6px" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
