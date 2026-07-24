"use client";

import { useState } from "react";
import Photo from "./Photo";

export type FacilityPhoto = {
  src: string;
  alt: string;
  caption: string;
};

interface ClubFacilityGalleryProps {
  photos: FacilityPhoto[];
}

export default function ClubFacilityGallery({ photos }: ClubFacilityGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = photos[activeIndex] ?? photos[0];

  if (!photos.length) return null;

  return (
    <div className="mt-6">
      <div className="overflow-hidden rounded-2xl">
        <div className="relative aspect-[16/10] w-full sm:aspect-[16/9]">
          <Photo
            key={active.src}
            src={active.src}
            alt={active.alt}
            sizes="(max-width: 1024px) 100vw, 960px"
            className="h-full w-full"
            imageClassName="object-cover object-center"
            priority
          />
        </div>
        <p className="mt-3 text-sm font-semibold text-[#14213D]">{active.caption}</p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2.5 sm:flex sm:gap-3 sm:overflow-x-auto sm:pb-1">
        {photos.map((photo, index) => {
          const selected = index === activeIndex;
          return (
            <button
              key={photo.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={photo.caption}
              aria-pressed={selected}
              className={`relative aspect-[4/3] overflow-hidden rounded-xl transition sm:h-20 sm:w-28 sm:shrink-0 sm:aspect-auto ${
                selected
                  ? "ring-2 ring-[#F5B041] ring-offset-2"
                  : "ring-1 ring-[rgba(20,33,61,0.08)] hover:ring-[#F5B041]/50"
              }`}
            >
              <Photo
                src={photo.src}
                alt={photo.alt}
                sizes="120px"
                className="h-full w-full"
                imageClassName="object-cover object-center"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
