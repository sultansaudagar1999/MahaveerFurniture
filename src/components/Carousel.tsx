"use client";

import { Children, useCallback, useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "./icons";

type CarouselProps = {
  label: string;
  children: ReactNode;
  /** Tailwind width classes applied to each slide. */
  slideClassName?: string;
  tone?: "dark" | "light";
  /** Optional element rendered to the left of the controls (e.g. a heading). */
  header?: ReactNode;
};

/**
 * Touch-native carousel built on CSS scroll-snap: swipe on touch devices,
 * trackpad/shift-scroll on desktop, plus buttons and arrow-key support.
 */
export function Carousel({
  label,
  children,
  slideClassName = "w-[82%] sm:w-[46%] lg:w-[31.5%]",
  tone = "dark",
  header,
}: CarouselProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [progress, setProgress] = useState(0);
  const id = useId();
  const slides = Children.toArray(children);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < max - 4);
    setProgress(max > 0 ? el.scrollLeft / max : 1);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, [update]);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const slide = el.querySelector<HTMLElement>("li");
    const gap = parseFloat(getComputedStyle(el).columnGap || "0");
    const step = slide ? slide.offsetWidth + gap : el.clientWidth * 0.8;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * step, behavior: reduce ? "auto" : "smooth" });
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollBy(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollBy(-1);
    }
  };

  const isLight = tone === "light";
  const btn = `inline-flex h-12 w-12 items-center justify-center rounded-full border transition-colors duration-300 disabled:opacity-30 disabled:cursor-default ${
    isLight
      ? "border-paper/40 text-paper enabled:hover:bg-paper enabled:hover:text-ink"
      : "border-ink/30 text-ink enabled:hover:bg-ink enabled:hover:text-paper"
  }`;

  return (
    <section aria-roledescription="carousel" aria-label={label} className={isLight ? "on-dark" : undefined}>
      <div className="mb-8 flex items-end justify-between gap-6 md:mb-12">
        <div className="min-w-0 flex-1">{header}</div>
        <div className="flex shrink-0 gap-2">
          <button type="button" className={btn} onClick={() => scrollBy(-1)} disabled={!canPrev} aria-controls={id} aria-label="Previous slides">
            <ArrowLeft />
          </button>
          <button type="button" className={btn} onClick={() => scrollBy(1)} disabled={!canNext} aria-controls={id} aria-label="Next slides">
            <ArrowRight />
          </button>
        </div>
      </div>

      <ul
        id={id}
        ref={trackRef}
        tabIndex={0}
        onKeyDown={onKeyDown}
        aria-label={`${label} — use arrow keys to scroll`}
        className="no-scrollbar -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto overscroll-x-contain px-4 sm:-mx-6 sm:scroll-px-6 sm:px-6 md:gap-6 lg:-mx-10 lg:scroll-px-10 lg:px-10"
      >
        {slides.map((child, i) => (
          <li
            key={i}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${slides.length}`}
            className={`shrink-0 snap-start ${slideClassName}`}
          >
            {child}
          </li>
        ))}
      </ul>

      <div className={`mt-8 h-px w-full ${isLight ? "bg-paper/20" : "bg-ink/15"}`} aria-hidden="true">
        <div
          className={`h-px origin-left transition-transform duration-300 ${isLight ? "bg-paper" : "bg-ink"}`}
          style={{ transform: `scaleX(${Math.max(progress, 0.08)})` }}
        />
      </div>
    </section>
  );
}
