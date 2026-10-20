"use client";

import Image from "next/image";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import type { Photo } from "./photos";
import styles from "./Header.module.css";

const AUTO_SCROLL_MS = 4000;
/** The photos are rendered this many times; scrolling stays within the middle copy. */
const COPIES = 3;

export default function PhotoScroller({ photos: allPhotos }: { photos: Photo[] }) {
  // Only real photos belong in the scroller; anything without a src is skipped.
  const photos = allPhotos.filter((p): p is Photo & { src: string } => Boolean(p.src));
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  /** Width of one full copy of the photo set, including the gap after it. */
  const setWidth = useCallback(() => {
    const cards = trackRef.current?.querySelectorAll<HTMLElement>("[data-card]");
    if (!cards || cards.length < photos.length * 2) return 0;
    return cards[photos.length].offsetLeft - cards[0].offsetLeft;
  }, [photos.length]);

  // Start on the middle copy so there is room to scroll both ways.
  useLayoutEffect(() => {
    const track = trackRef.current;
    if (track) track.scrollLeft = setWidth();
  }, [setWidth]);

  // Once scrolling settles outside the middle copy, jump by one copy width.
  // The content there is identical, so the jump is invisible and the loop seamless.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let timeout: number | undefined;
    const recenter = () => {
      const width = setWidth();
      if (!width) return;
      if (track.scrollLeft < width * 0.5) {
        track.scrollTo({ left: track.scrollLeft + width, behavior: "instant" });
      } else if (track.scrollLeft >= width * 1.5) {
        track.scrollTo({ left: track.scrollLeft - width, behavior: "instant" });
      }
    };
    const onScroll = () => {
      window.clearTimeout(timeout);
      timeout = window.setTimeout(recenter, 150);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      window.clearTimeout(timeout);
    };
  }, [setWidth]);

  const scrollByCard = useCallback((direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    // Cards differ in width, so scroll to the start of the next/previous card.
    const left = track.getBoundingClientRect().left;
    const offsets = Array.from(track.querySelectorAll<HTMLElement>("[data-card]")).map(
      (card) => card.getBoundingClientRect().left - left,
    );
    const target =
      direction === 1
        ? offsets.find((offset) => offset > 2)
        : offsets.findLast((offset) => offset < -2);
    if (target !== undefined) track.scrollBy({ left: target, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => scrollByCard(1), AUTO_SCROLL_MS);
    return () => window.clearInterval(id);
  }, [paused, scrollByCard]);

  return (
    <div
      className={styles.scroller}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <button
        type="button"
        className={`${styles.arrow} ${styles.arrowLeft}`}
        onClick={() => scrollByCard(-1)}
        aria-label="Previous photo"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15 5l-7 7 7 7" />
        </svg>
      </button>

      <div className={styles.track} ref={trackRef}>
        {Array.from({ length: COPIES }, () => photos).flat().map((photo, i) => (
          <figure
            key={i}
            className={styles.card}
            style={{ aspectRatio: `${photo.width ?? 4} / ${photo.height ?? 3}` }}
            aria-hidden={i < photos.length || i >= photos.length * 2 ? true : undefined}
            data-card
          >
            <Image
              src={photo.src}
              alt={photo.caption}
              fill
              sizes="300px"
              style={{ objectFit: "cover" }}
            />
          </figure>
        ))}
      </div>

      <button
        type="button"
        className={`${styles.arrow} ${styles.arrowRight}`}
        onClick={() => scrollByCard(1)}
        aria-label="Next photo"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
