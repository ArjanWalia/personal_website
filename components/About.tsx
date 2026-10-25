import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <div>
          <p className={styles.eyebrow}>About Me</p>
        </div>

        <div className={styles.body}>
          <p>
            My mission is to build and scale technology-based solutions that adapt
            to humans, and I work at the intersection of music, technology, and
            accessibility.
          </p>
          <p>
            I build technology for underserved athletes, neurodivergent and
            physically impaired musicians, and students struggling with mental
            health. I do this by combining my passions for computer science,
            digital signal processing, and electrical engineering.
          </p>
          <p className={styles.closing}>
            Through my volunteering, research, and projects, I continue to explore
            the question that began my journey:{" "}
            <em className={styles.question}>who gets access?</em>
          </p>
        </div>
      </div>
    </section>
  );
}
