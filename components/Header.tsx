import Image from "next/image";
import PhotoScroller from "./PhotoScroller";
import SocialLinks from "./SocialLinks";
import { profilePhoto, scrollerPhotos } from "./photos";
import styles from "./Header.module.css";

export default function Header() {
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
            <div className={styles.placeholder}>Photo coming soon</div>
          )}
        </div>

        <div className={styles.text}>
          <p className={styles.tagline}>
            <span className={styles.phrase}>Building accessibility tech</span>{" "}
            <span className={styles.bar} aria-hidden="true">
              |
            </span>{" "}
            <span className={styles.phrase}>Competitive pianist</span>{" "}
            <span className={styles.bar} aria-hidden="true">
              |
            </span>{" "}
            <span className={styles.phrase}>Tennis MVP</span>
          </p>
          <p className={styles.meta}>
            <span>California High School</span>
            <span className={styles.dot} aria-hidden="true">
              ·
            </span>
            <span>Class of 2028</span>
            <span className={styles.dot} aria-hidden="true">
              ·
            </span>
            <span>Danville, California</span>
          </p>
        </div>
      </div>
    </header>
  );
}
