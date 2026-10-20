"use client";

import Image from "next/image";
import { useState } from "react";
import { activities, filters, type Activity, type Filter } from "./activities";
import styles from "./Extracurriculars.module.css";

export default function Extracurriculars() {
  const [active, setActive] = useState<Filter>("All");
  const visible = active === "All" ? activities : activities.filter((a) => a.filter === active);

  return (
    <section id="extracurriculars" className={styles.section}>
      <h2 className={styles.heading}>Extracurriculars</h2>

      <div className={styles.filters} role="group" aria-label="Filter extracurriculars">
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

      {/* Keyed by filter so the cards remount and fade in again on every switch. */}
      <div key={active} className={styles.grid}>
        {visible.map((activity, i) => (
          <ActivityCard key={activity.title} activity={activity} index={i} />
        ))}
      </div>
    </section>
  );
}

function ActivityCard({ activity, index }: { activity: Activity; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className={styles.card} style={{ animationDelay: `${index * 70}ms` }}>
      <div className={styles.media}>
        {activity.video ? (
          <video
            className={styles.video}
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
        ) : activity.image ? (
          <Image
            src={activity.image}
            alt={activity.name}
            fill
            sizes="(max-width: 640px) 100vw, 360px"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div className={styles.placeholder}>Photo coming soon</div>
        )}
      </div>

      <div className={styles.body}>
        <div className={styles.labelRow}>
          <p className={styles.label}>{activity.label}</p>
          <button
            type="button"
            className={styles.readMore}
            aria-expanded={expanded}
            onClick={() => setExpanded((e) => !e)}
          >
            {expanded ? "Show less" : "Read more"}
          </button>
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
      </div>
    </article>
  );
}
