import Image from "next/image";
import type React from "react";
import styles from "./Connect.module.css";

const EMAIL = "waliaarjan96@gmail.com";

// Photos scattered beside My story like prints on a table, turned a few degrees and overlapping.
// Positions are in layout units: the collage is 100 units wide (sizes follow its width) and
// LAYOUT_HEIGHT units tall, with tops spread over My story's full height (see .print in the CSS). Files live in /public/photos/story.
type StoryPhoto = {
  src: string;
  alt: string;
  /** left and top edge, in layout units */
  x: number;
  y: number;
  /** width, in layout units */
  w: number;
  /** tilt in degrees */
  r: number;
  /** frame shape, matching the photo; "4 / 3" when not set */
  aspect?: string;
  /** stacking order: higher sits on top */
  z: number;
  position?: string;
};

// Three overlapping columns that mix piano, travel, awards and tennis. Each frame matches its
// photo's shape, so nothing is cropped. Group photos sit on top, so only the outer edges of
// single portraits (where no faces are) get covered.
const LAYOUT_HEIGHT = 218;

const storyPhotos: StoryPhoto[] = [
  { src: "/photos/story/4661.jpg", alt: "Arjan performing on a Steinway at Carnegie Hall", x: 0, y: 2, w: 43, r: -4, z: 1 },
  { src: "/photos/story/5884.jpg", alt: "Arjan with family at the Golden Temple", x: 0, y: 44.6, w: 43, r: 3, z: 21 },
  { src: "/photos/story/1129.jpg", alt: "Arjan on the tennis court with his racquet", x: 0, y: 87.3, w: 40, r: -3, aspect: "2 / 3", z: 3 },
  { src: "/photos/story/2384.jpg", alt: "Arjan holding a tennis trophy", x: 0, y: 157.7, w: 43, r: 4, aspect: "3 / 4", z: 4 },
  { src: "/photos/story/1149.jpg", alt: "Cal High men's tennis team, 2025 EBAL champions", x: 27.0, y: 0, w: 46, r: 3, aspect: "16 / 9", z: 20 },
  { src: "/photos/story/1497.jpg", alt: "Arjan with a tennis trophy", x: 27.0, y: 27.6, w: 46, r: -4, aspect: "3 / 4", z: 11 },
  { src: "/photos/story/2743.jpg", alt: "Arjan receiving an award", x: 27.0, y: 90.6, w: 46, r: 4, aspect: "3 / 4", z: 22 },
  { src: "/photos/story/0834.jpg", alt: "Arjan holding a tennis trophy", x: 27.0, y: 153.7, w: 46, r: -3, aspect: "3 / 4", z: 13 },
  { src: "/photos/story/6069.jpg", alt: "Arjan at the Taj Mahal", x: 57, y: 1, w: 43, r: 4, aspect: "3 / 4", z: 1 },
  { src: "/photos/story/6039.jpg", alt: "Arjan with family on a trip in India", x: 57, y: 69.9, w: 43, r: -3, z: 21 },
  { src: "/photos/story/1525.jpg", alt: "Arjan wearing a tournament medal", x: 57, y: 113.8, w: 43, r: 3, aspect: "3 / 4", z: 3 },
  { src: "/photos/story/4510.jpg", alt: "Winners' concert on stage at Carnegie Hall", x: 57, y: 182.8, w: 43, r: -4, z: 23 },
];

const asks = [
  {
    title: "Speaking",
    description: "Talks on music, accessibility technology, or student mental health.",
  },
  {
    title: "Mentorship",
    description: "Helping students exploring coding, signal processing, or music tech.",
  },
  {
    title: "Research",
    description: "Collaborating on accessibility, AI security, or audio and signal processing.",
  },
];

export default function Connect() {
  return (
    <section id="connect" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Let&rsquo;s Connect</h2>

        <div className={styles.contact}>
          <h3 className={styles.subheading}>Get in touch</h3>
          <div className={styles.ask}>
            <span className={styles.askTitle}>Speaking, Mentorship &amp; Research</span>
            <ul className={styles.askList}>
              {asks.map((ask) => (
                <li key={ask.title}>
                  <strong>{ask.title}:</strong> {ask.description}
                </li>
              ))}
            </ul>
            <a
              className={styles.askLink}
              href={`mailto:${EMAIL}?subject=${encodeURIComponent("Speaking, mentorship or research")}`}
            >
              Email me <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className={styles.storyRow}>
          <div className={styles.story}>
            <h3 className={styles.subheading}>My story</h3>
            {/* Arjan's own words, combined with his first NCWIT essay (his journey with technology). */}
            <div className={styles.storyText}>
              <p>
                Growing up, beyond years of rigorous training in piano, my grandmother&rsquo;s
                (Dadi&rsquo;s) philosophy of &ldquo;<em>Seva</em>&rdquo; (selfless service) has
                shaped my identity. A lifelong teacher, she tutors under-privileged children and
                pays for their tuition.
              </p>
              <p>
                As an avid pianist, I&rsquo;ve always valued my access to self-expression.
                However, seeing others struggle with accessibility limitations made me question
                what happens when people cannot pursue what they love. Dadi&rsquo;s philosophy of
                &ldquo;success is measured by what you give, not what you accumulate&rdquo;
                became central to my design choices for vulnerable populations facing barriers
                to accessibility, and it is always an inspiration for me to continue building
                for accessibility.
              </p>
              <p>
                In middle school, I began exploring technology to answer this question. I
                learned that accessibility barriers stem from cost, physical ability, or mental
                health. My journey started when I coded a tennis biomechanics analyzer using
                Node.js and React to make private coaching affordable. But I soon realized cost
                isn&rsquo;t the only hurdle people face, so I built solutions to manage mental
                health wellness and assist physically disabled pianists, using Python, Supabase,
                and Pandas.
              </p>
              <p>
                For a deeper understanding, I advanced research in audio processing during UC
                San Diego&rsquo;s selective COSMOS program and through IEEE publications. These
                experiences allowed me to address more complex challenges. I engineered a
                sensory-safe online stage with AI monitors for marginalized musicians, and
                developed an LLM-security framework for AI agents to prevent malicious activity,
                which also won a hackathon. Three internships have equipped me with
                cybersecurity and architecture expertise to build modern and safe solutions.
              </p>
              <p>
                Putting Seva into practice continues through my service as a music therapy
                volunteer for people with Down Syndrome and a teaching volunteer for
                neurodivergent children.
              </p>
              <p className={styles.storyClosing}>
                I aspire to solve the same barrier Dadi is solving with books:{" "}
                <span className={styles.storyKey}>access.</span>
              </p>
            </div>
          </div>

          <figure className={styles.photo}>
            {storyPhotos.length > 0 ? (
              <div className={styles.collage} style={{ "--layout-h": LAYOUT_HEIGHT } as React.CSSProperties}>
                {storyPhotos.map((photo) => (
                  <div
                    key={photo.src}
                    className={styles.print}
                    style={
                      {
                        "--x": photo.x,
                        "--y": photo.y,
                        "--w": photo.w,
                        aspectRatio: photo.aspect ?? "4 / 3",
                        zIndex: photo.z,
                        "--tilt": `${photo.r}deg`,
                      } as React.CSSProperties
                    }
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 640px) 40vw, 200px"
                      style={{ objectFit: "cover", objectPosition: photo.position }}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.placeholder}>Photos coming soon</div>
            )}
          </figure>
        </div>
      </div>
    </section>
  );
}
