import styles from "./Connect.module.css";

const EMAIL = "waliaarjan96@gmail.com";

// TODO: add a photo under /public/photos and set `src` to show it instead of the placeholder.
const storyPhoto: { caption: string; src?: string } = { caption: "Arjan Walia" };

const asks = [
  {
    title: "Speaking",
    description: "Talks on music, accessibility technology, or student mental health.",
  },
  {
    title: "Mentorship",
    description: "Helping students exploring coding, signal processing, or music tech.",
  },
  {
    title: "Research",
    description: "Collaborating on accessibility, AI security, or audio and signal processing.",
  },
];

export default function Connect() {
  return (
    <section id="connect" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Connect</h2>

        <div className={styles.storyRow}>
          <div className={styles.story}>
            <h3 className={styles.subheading}>My story</h3>
            {/* TODO: replace with your story. */}
            <p className={styles.storyPlaceholder}>Your story will go here.</p>
          </div>

          <figure className={styles.photo}>
            {storyPhoto.src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={storyPhoto.src} alt={storyPhoto.caption} />
            ) : (
              <div className={styles.placeholder}>Photo coming soon</div>
            )}
          </figure>
        </div>

        <div className={styles.contact}>
          <h3 className={styles.subheading}>Get in touch</h3>
          <div className={styles.ask}>
            <span className={styles.askTitle}>Speaking, Mentorship &amp; Research</span>
            <ul className={styles.askList}>
              {asks.map((ask) => (
                <li key={ask.title}>
                  <strong>{ask.title}:</strong> {ask.description}
                </li>
              ))}
            </ul>
            <a
              className={styles.askLink}
              href={`mailto:${EMAIL}?subject=${encodeURIComponent("Speaking, mentorship or research")}`}
            >
              Email me <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
