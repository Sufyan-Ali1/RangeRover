"use client";

import { useState } from "react";
import { videos, type Video } from "../data/videos";

function PlayIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function VideoCard({ video }: { video: Video }) {
  const [playing, setPlaying] = useState(false);

  const thumbnailUrl = video.youtubeId
    ? `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`
    : null;

  return (
    <div className="overflow-hidden rounded-[10px] bg-white shadow-sm">
      {/* Thumbnail / player */}
      <div className="relative aspect-video w-full bg-black">
        {playing && video.youtubeId ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            {/* Thumbnail image (when youtubeId is available) */}
            {thumbnailUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={thumbnailUrl}
                alt={video.title}
                className="absolute inset-0 h-full w-full object-cover"
                onError={(e) => {
                  const img = e.currentTarget;
                  if (!img.src.includes("hqdefault")) {
                    img.src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
                  }
                }}
              />
            )}
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30" />
            {/* Play button */}
            <button
              type="button"
              aria-label={`Play ${video.title}`}
              onClick={() => video.youtubeId && setPlaying(true)}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#4CA66B] pl-1 shadow-lg transition hover:scale-105 hover:bg-[#3D9258]">
                <PlayIcon />
              </span>
            </button>
          </>
        )}
      </div>

      {/* Info */}
      <div className="px-5 py-4 text-center">
        <p className="text-[14.5px] font-bold text-gray-900">{video.title}</p>
        <p className="mt-1 text-[13px] text-[#60A5FA]">{video.date}</p>
      </div>
    </div>
  );
}

export default function VideoSection() {
  return (
    <section className="w-full bg-[#F3F4F6]">
      <div className="mx-auto w-full max-w-[1728px] px-6 py-16 sm:px-10 sm:py-20 xl:px-[101px] xl:py-[80px]">

        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-[13px] font-medium text-[#4CA66B]">Updates</p>
          <h2 className="text-4xl font-black text-gray-900 sm:text-5xl">
            Latest Videos
          </h2>
          <p className="mt-3 text-[14px] text-gray-500">
            check what is going on in the garage
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>

      </div>
    </section>
  );
}
