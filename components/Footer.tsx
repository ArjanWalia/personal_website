import { socials } from "./SocialLinks";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.row}>
          <div>
            <p className={styles.name}>Arjan Walia</p>
            <p className={styles.tagline}>Music, technology and accessibility.</p>
          </div>

          <nav className={styles.links} aria-label="Social links">
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
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
