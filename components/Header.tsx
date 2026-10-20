import Image from "next/image";
import PhotoScroller from "./PhotoScroller";
import { profilePhoto, scrollerPhotos } from "./photos";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header id="home" className={styles.header}>
      <div className={styles.scrollerWrap}>
        <PhotoScroller photos={scrollerPhotos} />
        <div className={styles.profile}>
          {profilePhoto.src ? (
            <Image
              src={profilePhoto.src}
              alt={profilePhoto.caption}
              fill
              priority
              sizes="240px"
              style={{ objectFit: "cover", objectPosition: profilePhoto.position }}
            />
          ) : (
            <div className={styles.placeholder}>Photo coming soon</div>
          )}
        </div>
      </div>

      <div className={styles.intro}>
        <div className={styles.titleRow}>
          <h1 className={styles.name}>Arjan Walia</h1>
          <span className={styles.divider} aria-hidden="true">
            |
          </span>
          <p className={styles.tagline}>
            Competitive pianist providing accessibility to musicians and students
            internationally.
          </p>
        </div>

        <p className={styles.meta}>
          California Highschool <span aria-hidden="true">·</span> Class of 2028{" "}
          <span aria-hidden="true">·</span> Danville, California
        </p>

        <p className={styles.description}>
          As a competitive pianist, I&apos;ve seen firsthand how deeply music
          shapes people&apos;s lives. I watched my grandmother lose the ability to
          play the piano she loved as she grew older, and I saw a close friend
          struggle with their mental health under the pressures of high school.
          Those experiences drove me to build accessibility technology for
          underserved, neurodivergent, and physically impaired musicians, as
          well as for students around the world struggling with school-related
          stress and anxiety. I do this by combining my passions for computer
          science, digital signal processing, and electrical engineering.
        </p>
      </div>
    </header>
  );
}
