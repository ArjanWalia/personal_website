"use client";

import { useLang } from "./i18n";
import styles from "./About.module.css";

export default function About() {
  const { t } = useLang();
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.body}>
          <p>
            {t(
              "My mission is to build and scale technology-based solutions that adapt to humans. I work at the intersection of music, technology, and accessibility.",
              "Mi misión es crear y escalar soluciones tecnológicas que se adapten a las personas. Trabajo en la intersección de la música, la tecnología y la accesibilidad.",
            )}
          </p>
          <p>
            {t(
              "I build technology for underserved athletes, neurodivergent and physically impaired musicians, and students struggling with mental health. I do this by combining my passions for computer science, digital signal processing, and engineering.",
              "Desarrollo tecnología para atletas con pocos recursos, músicos neurodivergentes y con discapacidades físicas, y estudiantes que enfrentan problemas de salud mental. Lo hago combinando mis pasiones por la informática, el procesamiento digital de señales y la ingeniería.",
            )}
          </p>
          <p className={styles.closing}>
            {t(
              "Through my volunteering, research, and projects, I continue to explore the question that began my journey:",
              "A través de mi voluntariado, investigación y proyectos, sigo explorando la pregunta que inició mi camino:",
            )}{" "}
            <em className={styles.question}>{t("who gets access?", "¿quién tiene acceso?")}</em>
          </p>
        </div>
      </div>
    </section>
  );
}
