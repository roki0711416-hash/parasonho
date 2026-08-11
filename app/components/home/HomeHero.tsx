"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GFORM_URL, LINE_URL } from "../../lib/contact";
import LineIcon from "../LineIcon";

const SLIDES = [
  {
    src: "/images/ヒーロー画像.png",
    alt: "スタジアムへ向かうサッカー選手",
    position: "object-[center_28%]",
  },
  {
    src: "/images/local-network/cta-background.webp",
    alt: "提携クラブ関係者との交流風景",
    position: "object-[center_18%]",
  },
  {
    src: "/images/IMG_5800.jpg",
    alt: "ブラジル現地でのトレーニング風景",
    position: "object-[center_35%]",
  },
  {
    src: "/images/clubs/apafut/grass-field.jpg",
    alt: "APAFUTの天然芝グラウンド",
    position: "object-[center_40%]",
  },
];

type HomeHeroProps = {
  programsHref: string;
  title1: string;
  title2: string;
  lead: string;
  programsLabel: string;
  lineLabel: string;
};

export default function HomeHero({
  programsHref,
  title1,
  title2,
  lead,
  programsLabel,
  lineLabel,
}: HomeHeroProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % SLIDES.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[92svh] w-full overflow-hidden sm:min-h-[100svh]">
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover ${slide.position}`}
          />
        </div>
      ))}

      <div
        className="absolute inset-0 bg-gradient-to-t from-[#061910]/90 via-[#061910]/45 to-[#061910]/25"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#061910]/55 via-transparent to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-[92svh] w-full max-w-7xl flex-col justify-end px-5 pb-16 pt-28 sm:min-h-[100svh] sm:justify-center sm:px-8 sm:pb-24 sm:pt-32">
        <p className="br-animate text-[11px] font-bold tracking-[0.35em] text-[#E8B423] sm:text-xs">
          BRAZIL FOOTBALL CHALLENGE
        </p>
        <h1 className="br-animate br-animate-delay-1 mt-5 max-w-4xl text-[clamp(2.1rem,7.2vw,4.6rem)] font-black leading-[1.08] tracking-tight text-white">
          {title1}
        </h1>
        <p className="br-animate br-animate-delay-1 mt-4 max-w-3xl text-[clamp(1.05rem,3.2vw,1.65rem)] font-bold leading-snug text-white/92">
          {title2}
        </p>
        <p className="br-animate br-animate-delay-2 mt-5 max-w-xl text-sm leading-7 text-white/75 sm:mt-6 sm:text-base sm:leading-8">
          {lead}
        </p>

        <div className="br-animate br-animate-delay-3 mt-8 flex w-full max-w-xl flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center">
          <Link
            href={programsHref}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-black tracking-wide text-[#0A3D2C] transition hover:-translate-y-0.5 hover:bg-[#F4F6F5] sm:text-base"
          >
            {programsLabel}
          </Link>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#06C755] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#06C755]/25 transition hover:-translate-y-0.5 hover:bg-[#05a847] sm:text-base"
          >
            <LineIcon className="h-5 w-5" />
            {lineLabel}
          </a>
        </div>

        <a
          href={GFORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="br-animate br-animate-delay-3 mt-4 inline-flex text-sm font-semibold text-white/70 underline-offset-4 transition hover:text-white hover:underline"
        >
          お問い合わせフォーム →
        </a>

        <div className="mt-10 flex gap-2" aria-label="ヒーロー画像のページ">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`スライド ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition ${
                i === index ? "w-8 bg-[#E8B423]" : "w-3 bg-white/35 hover:bg-white/55"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
