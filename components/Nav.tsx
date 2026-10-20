import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="#home" className={styles.home}>
        Arjan.
      </a>
    </nav>
  );
}
