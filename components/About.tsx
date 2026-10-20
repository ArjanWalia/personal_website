import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <div>
          <p className={styles.eyebrow}>About</p>
        </div>

        <div className={styles.body}>
          <p>
            My mission is to build and scale technology-based solutions that adapt
            to humans, rather than asking humans to adapt. I work at the
            intersection of music, technology and accessibility.
          </p>
          <p>
            In middle school, I began exploring technology to solve
            accessibility. I build technology for underserved athletes,
            neurodivergent, or physically impaired musicians, and students
            struggling with mental health.
          </p>
          <p>
            My work spans accessibility and security technology. I have interned
            at three startups that widen access in different ways, from financial
            inclusion and community building to global medtech partnerships, and
            my deep research in signal processing keeps challenging my
            assumptions.
          </p>
          <p>
            My mission remains central to how I explore the question that began
            my journey: <em className={styles.question}>who gets access?</em>
          </p>
        </div>
      </div>
    </section>
  );
}
