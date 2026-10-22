"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { activities, filters, type Activity, type Filter } from "./activities";
import { awardGroups } from "./awards";
import { skillGroups } from "./skills";
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

        {/* Technical skills: one row per area, skills run inline with small brown dots between them. */}
        <div className={styles.skills}>
          <h3 className={styles.awardsHeading}>Technical Skills</h3>
          <ul className={styles.skillList}>
            {skillGroups.map((group) => (
              <li key={group.heading} className={styles.skillGroup}>
                <h4 className={styles.awardGroupHeading}>{group.heading}</h4>
                <ul className={styles.skillItems}>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* Awards: one list, grouped by area, each group with its logos. */}
        <div className={styles.awards}>
          <h3 className={styles.awardsHeading}>Awards</h3>
          <ul className={styles.awardList}>
            {awardGroups.map((group) => (
              <li key={group.heading} className={styles.awardGroup}>
                <div className={styles.awardSide}>
                  <h4 className={styles.awardGroupHeading}>{group.heading}</h4>
                  <div className={styles.awardLogos}>
                    {group.logos.map((logo) => (
                      <Image
                        key={logo.src}
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        className={styles.awardLogo}
                      />
                    ))}
                  </div>
                </div>
                <ul className={styles.awardItems}>
                  {group.awards.map((award) => (
                    <li key={award.title}>
                      <span className={styles.awardTitle}>{award.title}</span>
                      {award.detail && <span className={styles.awardDetail}>{award.detail}</span>}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/** The card's photo, video or embed. `large` is used inside the detail window. */
function CardMedia({ activity, large = false }: { activity: Activity; large?: boolean }) {
  const sizes = large ? "(max-width: 860px) 100vw, 820px" : "(max-width: 640px) 100vw, 360px";
  const mediaClass = `${styles.media} ${large ? styles.mediaLarge : ""}`;

  if (activity.embed) {
    return (
      <div className={`${mediaClass} ${styles.dark}`}>
        <iframe
          className={styles.embed}
          src={activity.embed}
          title={`${activity.name} post on LinkedIn`}
          loading="lazy"
          allowFullScreen
        />
      </div>
    );
  }
  if (activity.video) {
    const contain = activity.videoFit === "contain";
    return (
      <div className={`${mediaClass} ${contain ? styles.dark : ""}`}>
        <video
          className={`${styles.video} ${contain ? styles.contain : ""}`}
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
    );
  }
  if (activity.image) {
    return (
      <div className={mediaClass}>
        {activity.imageFit === "contain" && (
          // Blurred copy behind the full photo fills the empty sides of the frame.
          <Image src={activity.image} alt="" fill sizes={sizes} className={styles.backdrop} />
        )}
        <Image
          src={activity.image}
          alt={activity.name}
          fill
          sizes={sizes}
          style={{ objectFit: activity.imageFit ?? "cover", objectPosition: activity.imagePosition }}
        />
      </div>
    );
  }
  return null;
}

function ActivityCard({ activity, index }: { activity: Activity; index: number }) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const hasMedia = Boolean(activity.embed || activity.video || activity.image);

  // Open as a modal once its contents are rendered; lock page scrolling while it is up.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!open || !dialog) return;
    if (!dialog.open) dialog.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const close = () => dialogRef.current?.close();

  return (
    <article className={styles.card} style={{ animationDelay: `${index * 70}ms` }}>
      <CardMedia activity={activity} />

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
        <h3 className={styles.title}>
          {/* Stretched over the whole card, so clicking anywhere on it opens the detail window. */}
          <button type="button" className={styles.cardOpen} onClick={() => setOpen(true)} aria-haspopup="dialog">
            {activity.title}
          </button>
        </h3>
        <p className={`${styles.description} ${styles.clamped}`}>{activity.description}</p>
      </div>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-label={activity.title}
        onClose={() => setOpen(false)}
        // A click on the dimmed area outside the panel lands on the dialog itself.
        onClick={(event) => event.target === event.currentTarget && close()}
      >
        {open && (
          <div className={styles.dialogPanel}>
            <button type="button" className={styles.dialogClose} onClick={close} aria-label="Close">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>

            <CardMedia activity={activity} large />

            <div className={styles.dialogBody}>
              <div className={styles.labelRow}>
                {activity.logo && (
                  <Image src={activity.logo} alt="" width={24} height={24} className={styles.logo} />
                )}
                <p className={styles.label}>{activity.label}</p>
              </div>
              <h3 className={styles.dialogTitle}>{activity.title}</h3>
              <p className={styles.dialogText}>{activity.description}</p>
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
                  {section.text && <p className={styles.dialogText}>{section.text}</p>}
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
              {activity.extraImages && (
                <div className={styles.extraGrid}>
                  {activity.extraImages.map((extra) => (
                    <div
                      key={extra.src}
                      className={styles.extraImage}
                      style={extra.aspect ? { aspectRatio: extra.aspect } : undefined}
                    >
                      <Image
                        src={extra.src}
                        alt={extra.alt}
                        fill
                        sizes="(max-width: 860px) 100vw, 400px"
                        style={{ objectFit: "cover", objectPosition: extra.position }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </dialog>
    </article>
  );
}
