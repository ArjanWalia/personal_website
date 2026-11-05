"use client";

import { useEffect, useRef, useState } from "react";
import { useLang, type Lang } from "./i18n";
import styles from "./Nav.module.css";

const languages: { code: Lang; short: string; name: string }[] = [
  { code: "en", short: "EN US", name: "English (US)" },
  { code: "es", short: "ES", name: "Español" },
];

export default function Nav() {
  const { t } = useLang();
  const links = [
    { href: "#about", label: t("About Me", "Sobre mí") },
    { href: "#extracurriculars", label: t("My Work", "Mi trabajo") },
    { href: "#connect", label: t("Let's Connect", "Conectemos") },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href="#home" className={styles.home}>
          Arjan<span className={styles.period}>.</span>
        </a>

        <div className={styles.right}>
          <div className={styles.links}>
            {links.map((link) => (
              <a key={link.href} href={link.href} className={styles.link}>
                {link.label}
              </a>
            ))}
          </div>
          <LanguageMenu />
        </div>
      </div>
    </nav>
  );
}

/** Globe button showing the current language; opens a small menu to switch. */
function LanguageMenu() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = languages.find((l) => l.code === lang)!;

  // Close on a click outside or on Escape.
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className={styles.lang} ref={ref}>
      <button
        type="button"
        className={styles.langButton}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={t("Language", "Idioma")}
        onClick={() => setOpen((o) => !o)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
        </svg>
        {current.short}
      </button>
      {open && (
        <ul className={styles.langMenu} role="menu">
          {languages.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                role="menuitemradio"
                aria-checked={l.code === lang}
                className={styles.langOption}
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
              >
                {l.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
