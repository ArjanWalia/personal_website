import styles from "./Nav.module.css";

const links = [
  { href: "#about", label: "About Me" },
  { href: "#extracurriculars", label: "My Work" },
  { href: "#connect", label: "Let's Connect" },
];

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href="#home" className={styles.home}>
          Arjan<span className={styles.period}>.</span>
        </a>

        <div className={styles.links}>
          {links.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
