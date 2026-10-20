"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { activities, filters, type Activity, type Filter } from "./activities";
import CategoryIcon from "./CategoryIcon";
import styles from "./Extracurriculars.module.css";

export default function Extracurriculars() {
  const [active, setActive] = useState<Filter>("All");
  const rowRef = useRef<HTMLDivElement>(null);
  // Scroll the card row by roughly one card in either direction.
  const scrollRow = (direction: 1 | -1) => {
    const row = rowRef.current;
    const card = row?.querySelector("article");
    if (!row || !card) return;
    row.scrollBy({ left: direction * (card.getBoundingClientRect().width + 20), behavior: "smooth" });
  };
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

        <div className={styles.rowControls}>
          <button type="button" className={styles.arrow} onClick={() => scrollRow(-1)} aria-label="Previous cards">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>
          <button type="button" className={styles.arrow} onClick={() => scrollRow(1)} aria-label="Next cards">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Keyed by filter so the cards remount and fade in again on every switch. */}
        <div key={active} ref={rowRef} className={styles.grid}>
          {visible.map((activity, i) => (
            <ActivityCard key={activity.title} activity={activity} index={i} />
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
