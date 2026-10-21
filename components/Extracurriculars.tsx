"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { activities, filters, type Activity, type Filter } from "./activities";
import CategoryIcon from "./CategoryIcon";
import styles from "./Extracurriculars.module.css";

export default function Extracurriculars() {
  const [active, setActive] = useState<Filter>("All");
  const rowRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  /** Distance from one card's left edge to the next (card width plus the gap). */
  const step = useCallback(() => {
    const cards = rowRef.current?.querySelectorAll("article");
    if (!cards || cards.length < 2) return cards?.[0]?.getBoundingClientRect().width ?? 0;
    return cards[1].getBoundingClientRect().left - cards[0].getBoundingClientRect().left;
  }, []);

  // Track which card is at the left edge, and whether either end has been reached.
  const updatePosition = useCallback(() => {
    const row = rowRef.current;
    if (!row) return;
    const size = step();
    const end = row.scrollLeft + row.clientWidth >= row.scrollWidth - 2;
    const count = row.querySelectorAll("article").length;
    // The last few cards can't reach the left edge, so the end of the row counts as the last card.
    setCurrent(end ? count - 1 : size ? Math.round(row.scrollLeft / size) : 0);
    setAtStart(row.scrollLeft <= 2);
    setAtEnd(end);
  }, [step]);

  const goTo = (index: number) => {
    rowRef.current?.scrollTo({ left: index * step(), behavior: "smooth" });
  };

  // A new filter remounts the row at the start, so re-measure after each switch and on resize.
  useEffect(() => {
    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [active, updatePosition]);

  const visible = active === "All" ? activities : activities.filter((a) => a.filter === active);

  return (
    <section id="extracurriculars" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>My Work</p>
        <h2 className={styles.heading}>Portfolio</h2>

        <div className={styles.filters} role="group" aria-label="Filter portfolio">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={styles.filter}
              aria-pressed={filter === active}
              onClick={() => setActive(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className={styles.carousel} role="region" aria-roledescription="carousel" aria-label="Portfolio">
          <button
            type="button"
            className={`${styles.arrow} ${styles.arrowPrev}`}
            onClick={() => goTo(Math.max(current - 1, 0))}
            disabled={atStart}
            aria-label="Previous card"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>

          {/* Keyed by filter so the cards remount and fade in again on every switch. */}
          <div key={active} ref={rowRef} className={styles.grid} onScroll={updatePosition}>
            {visible.map((activity, i) => (
              <ActivityCard key={activity.title} activity={activity} index={i} />
            ))}
          </div>

          <button
            type="button"
            className={`${styles.arrow} ${styles.arrowNext}`}
            onClick={() => goTo(current + 1)}
            disabled={atEnd}
            aria-label="Next card"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className={styles.dots} role="group" aria-label="Choose a card">
          {visible.map((activity, i) => (
            <button
              key={activity.title}
              type="button"
              className={styles.dot}
              aria-label={`Go to ${activity.name}`}
              aria-current={i === current ? "true" : undefined}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ActivityCard({ activity, index }: { activity: Activity; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const hasMedia = Boolean(activity.embed || activity.video || activity.image);

  return (
    <article className={styles.card} style={{ animationDelay: `${index * 70}ms` }}>
      {activity.embed ? (
        <div className={`${styles.media} ${styles.dark}`}>
          <iframe
            className={styles.embed}
            src={activity.embed}
            title={`${activity.name} post on LinkedIn`}
            loading="lazy"
            allowFullScreen
          />
        </div>
      ) : activity.video ? (
        <div className={`${styles.media} ${activity.videoFit === "contain" ? styles.dark : ""}`}>
          <video
            className={`${styles.video} ${activity.videoFit === "contain" ? styles.contain : ""}`}
            src={activity.video}
            poster={activity.video.replace(/\.mp4$/, "-poster.jpg")}
            aria-label={`${activity.name} video`}
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            disableRemotePlayback
          />
        </div>
      ) : activity.image ? (
        <div className={styles.media}>
          {activity.imageFit === "contain" && (
            // Blurred copy behind the full photo fills the empty sides of the frame.
            <Image src={activity.image} alt="" fill sizes="360px" className={styles.backdrop} />
          )}
          <Image
            src={activity.image}
            alt={activity.name}
            fill
            sizes="(max-width: 640px) 100vw, 360px"
            style={{
              objectFit: activity.imageFit ?? "cover",
              objectPosition: activity.imagePosition,
            }}
          />
        </div>
      ) : null}

      <div className={styles.body}>
        {/* Cards without a photo get a small category icon instead of an empty placeholder. */}
        {!hasMedia && (
          <div className={styles.icon}>
            <CategoryIcon filter={activity.filter} />
          </div>
        )}
        <div className={styles.labelRow}>
          {activity.logo && (
            <Image src={activity.logo} alt="" width={24} height={24} className={styles.logo} />
          )}
          <p className={styles.label}>{activity.label}</p>
        </div>
        <h3 className={styles.title}>{activity.title}</h3>
        <div className={expanded ? undefined : styles.clamped}>
          <p className={styles.description}>{activity.description}</p>
          {activity.highlights && (
            <ul className={styles.highlights}>
              {activity.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          {activity.sections?.map((section) => (
            <div key={section.heading} className={styles.writeup}>
              <h4 className={styles.writeupHeading}>{section.heading}</h4>
              {section.text && <p className={styles.description}>{section.text}</p>}
              {section.list && (
                <ul className={styles.highlights}>
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {section.steps && (
                <ol className={styles.steps}>
                  {section.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              )}
            </div>
          ))}
        </div>
        {/* Only rendered once expanded, so collapsed cards don't load the extra photos. */}
        {expanded &&
          activity.extraImages?.map((extra) => (
            <div
              key={extra.src}
              className={styles.extraImage}
              style={extra.aspect ? { aspectRatio: extra.aspect } : undefined}
            >
              <Image
                src={extra.src}
                alt={extra.alt}
                fill
                sizes="(max-width: 640px) 100vw, 360px"
                style={{ objectFit: "cover", objectPosition: extra.position }}
              />
            </div>
          ))}
        <button
          type="button"
          className={styles.readMore}
          aria-expanded={expanded}
          onClick={() => setExpanded((e) => !e)}
        >
          {expanded ? "Show less" : "Read more"}
          <span aria-hidden="true">{expanded ? "↑" : "→"}</span>
        </button>
      </div>
    </article>
  );
}
