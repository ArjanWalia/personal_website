"use client";

import Image from "next/image";
import PhotoScroller from "./PhotoScroller";
import SocialLinks from "./SocialLinks";
import Waveform from "./Waveform";
import { profilePhoto, scrollerPhotos } from "./photos";
import { useLang } from "./i18n";
import styles from "./Header.module.css";

export default function Header() {
  const { t } = useLang();
  return (
    <header id="home" className={styles.header}>
      <div className={styles.scrollerWrap}>
        <PhotoScroller photos={scrollerPhotos} />
      </div>

      <div className={styles.intro}>
        <div className={styles.nameRow}>
          <h1 className={styles.name}>Arjan Walia</h1>
          <SocialLinks />
        </div>

        <div className={styles.profile}>
          {profilePhoto.src ? (
            <Image
              src={profilePhoto.src}
              alt={profilePhoto.caption}
              fill
              priority
              sizes="220px"
              style={{ objectFit: "cover", objectPosition: profilePhoto.position }}
            />
          ) : (
            <div className={styles.placeholder}>{t("Photo coming soon", "Foto próximamente")}</div>
          )}
        </div>

        <div className={styles.text}>
          <p className={styles.tagline}>
            <span className={styles.phrase}>{t("Building accessibility tech", "Creando tecnología accesible")}</span>{" "}
            <span className={styles.bar} aria-hidden="true">
              |
            </span>{" "}
            <span className={styles.phrase}>{t("Competitive pianist", "Pianista competitivo")}</span>{" "}
            <span className={styles.bar} aria-hidden="true">
              |
            </span>{" "}
            <span className={styles.phrase}>{t("Tennis MVP", "MVP de tenis")}</span>
          </p>
          <p className={styles.meta}>
            <span>California High School</span>
            <span className={styles.dot} aria-hidden="true">
              ·
            </span>
            <span>{t("Class of 2028", "Promoción 2028")}</span>
            <span className={styles.dot} aria-hidden="true">
              ·
            </span>
            <span>Danville, California</span>
          </p>
          <Waveform />
        </div>
      </div>
    </header>
  );
}
