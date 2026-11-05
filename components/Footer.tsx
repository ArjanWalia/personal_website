"use client";

import { socials } from "./SocialLinks";
import { useLang } from "./i18n";
import styles from "./Footer.module.css";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.row}>
          <div>
            <p className={styles.name}>Arjan Walia</p>
            <p className={styles.tagline}>{t("Music, technology and accessibility.", "Música, tecnología y accesibilidad.")}</p>
          </div>

          <nav className={styles.links} aria-label={t("Social links", "Redes sociales")}>
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {social.label}
              </a>
            ))}
          </nav>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Arjan Walia</p>
          <a href="#home" className={styles.link}>
            {t("Back to top ↑", "Volver arriba ↑")}
          </a>
        </div>
      </div>
    </footer>
  );
}
