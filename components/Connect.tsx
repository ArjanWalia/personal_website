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

        <div className={styles.storyRow}>
          <div className={styles.story}>
            <h3 className={styles.subheading}>My story</h3>
            {/* Arjan's own words. */}
            <div className={styles.storyText}>
              <p>
                Growing up, beyond years of rigorous training in piano, my grandmother&rsquo;s
                philosophy of &ldquo;<em>Seva</em>&rdquo; (selfless service) has shaped my
                identity. A lifelong teacher, she tutors under-privileged children and pays for
                their tuition.
              </p>
              <p>
                Her philosophy of &ldquo;success is measured by what you give, not what you
                accumulate&rdquo; is central to my design choices for vulnerable populations
                facing barriers to accessibility. Her philosophy is always an inspiration for me
                to continue building for accessibility.
              </p>
              <p>
                Putting Seva into practice continues through my service as a music therapy
                volunteer for people with Down Syndrome and a teaching volunteer for
                neurodivergent children. I aspire to solve the same barrier Dadi is solving with
                books: access.
              </p>
            </div>
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
      </div>
    </section>
  );
}
