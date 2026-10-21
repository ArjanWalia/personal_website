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
            {/* Arjan's own words, combined with his first NCWIT essay (his journey with technology). */}
            <div className={styles.storyText}>
              <p>
                Growing up, beyond years of rigorous training in piano, my grandmother&rsquo;s
                (Dadi&rsquo;s) philosophy of &ldquo;<em>Seva</em>&rdquo; (selfless service) has
                shaped my identity. A lifelong teacher, she tutors under-privileged children and
                pays for their tuition.
              </p>
              <p>
                As an avid pianist, I&rsquo;ve always valued my access to self-expression.
                However, seeing others struggle with accessibility limitations made me question
                what happens when people cannot pursue what they love. Dadi&rsquo;s philosophy of
                &ldquo;success is measured by what you give, not what you accumulate&rdquo;
                became central to my design choices for vulnerable populations facing barriers
                to accessibility, and it is always an inspiration for me to continue building
                for accessibility.
              </p>
              <p>
                In middle school, I began exploring technology to answer this question. I
                learned that accessibility barriers stem from cost, physical ability, or mental
                health. My journey started when I coded a tennis biomechanics analyzer using
                Node.js and React to make private coaching affordable. But I soon realized cost
                isn&rsquo;t the only hurdle people face, so I built solutions to manage mental
                health wellness and assist physically disabled pianists, using Python, Supabase,
                and Pandas.
              </p>
              <p>
                For a deeper understanding, I advanced research in audio processing during UC
                San Diego&rsquo;s selective COSMOS program and through IEEE publications. These
                experiences allowed me to address more complex challenges. I engineered a
                sensory-safe online stage with AI monitors for marginalized musicians, and
                developed an LLM-security framework for AI agents to prevent malicious activity,
                which also won a hackathon. Three internships have equipped me with
                cybersecurity and architecture expertise to build modern and safe solutions.
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
