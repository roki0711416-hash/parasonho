"use client";

import { useCallback, useEffect, useRef, useState, type TouchEvent } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { LOCAL_NETWORK_SLIDES } from "../lib/local-network";
import { useI18n } from "../lib/i18n/I18nProvider";
import Reveal from "./Reveal";

const AUTOPLAY_MS = 6500;

function useVisibleCount() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1024) setCount(3);
      else if (w >= 768) setCount(2);
      else setCount(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return count;
}

export default function LocalNetworkSlider() {
  const { dict } = useI18n();
  const t = dict.home.localNetwork;
  const slides = LOCAL_NETWORK_SLIDES;
  const visible = useVisibleCount();
  const maxIndex = Math.max(0, slides.length - visible);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  const goTo = useCallback(
    (next: number) => {
      setIndex(Math.max(0, Math.min(next, maxIndex)));
    },
    [maxIndex],
  );

  const prev = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    if (paused || maxIndex === 0) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current >= maxIndex ? 0 : current + 1));
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, maxIndex]);

  const onTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current == null) return;
    const delta = (e.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 40) return;
    if (delta > 0) prev();
    else next();
  };

  const pageCount = maxIndex + 1;

  return (
    <section className="ps-section ps-bg-subtle">
      <div className="ps-container">
        <Reveal>
          <p className="ps-eyebrow">{t.eyebrow}</p>
          <h2 className="ps-heading mt-4 max-w-3xl">{t.title}</h2>
          <p className="ps-lead mt-4 max-w-2xl text-sm sm:text-base">{t.lead}</p>
        </Reveal>

        <div
          className="relative mt-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${(index * 100) / visible}%)`,
              }}
            >
              {slides.map((slide) => (
                <article
                  key={slide.src}
                  className="shrink-0 px-1.5 sm:px-2"
                  style={{ width: `${100 / visible}%` }}
                >
                  <div className="ps-card h-full overflow-hidden p-0">
                    {/* スマホは顔優先でやや縦長、PCは横並び用の 4:3 */}
                    <div className="relative aspect-[5/4] w-full overflow-hidden bg-[#F8F9FB] sm:aspect-[4/3]">
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading="lazy"
                        className="object-cover"
                        style={{ objectPosition: slide.objectPosition ?? "center center" }}
                      />
                    </div>
                    <p className="px-4 py-3.5 text-xs leading-5 font-semibold text-[#14213D]/80 sm:px-5 sm:text-sm sm:leading-6">
                      {slide.caption}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={prev}
                disabled={index === 0}
                aria-label={t.prev}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(20,33,61,0.12)] bg-white text-[#14213D] transition hover:border-[#F5B041]/50 hover:text-[#F5B041] disabled:cursor-not-allowed disabled:opacity-35"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={next}
                disabled={index >= maxIndex}
                aria-label={t.next}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(20,33,61,0.12)] bg-white text-[#14213D] transition hover:border-[#F5B041]/50 hover:text-[#F5B041] disabled:cursor-not-allowed disabled:opacity-35"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="flex items-center gap-2" role="tablist" aria-label={t.pagination}>
              {Array.from({ length: pageCount }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`${t.page} ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`h-2.5 rounded-full transition ${
                    i === index ? "w-6 bg-[#F5B041]" : "w-2.5 bg-[#14213D]/20 hover:bg-[#14213D]/35"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
