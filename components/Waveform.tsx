import styles from "./Waveform.module.css";

/**
 * Loudness of a 20-second clip of Arjan playing piano (the same recording as the piano card),
 * measured in 96 equal slices and scaled so the loudest slice is 1.
 */
const levels = [
  .48, .43, .38, .43, .62, .69, .52, .30, .53, .79, .53, .39, .37, .38, .51, .56, .69, .48,
  .51, .51, .39, .40, .74, .61, .53, .52, .82, .67, .42, .49, .54, .46, .51, .90, .68, .41,
  .56, .36, .52, .63, .55, .43, .45, .40, .28, .19, .38, .24, .32, .49, .27, .24, .36, .20,
  .72, .55, .46, .41, .51, .55, .47, .55, .60, .58, .47, .63, .81, .72, .72, .65, .64, .70,
  .64, .45, .46, .57, .67, .69, .85, .74, .92, .90, 1, .75, .56, .45, .35, .48, .41, .48,
  .56, .52, .56, .54, .55, .54
];

const BAR = 2;
const GAP = 3;
const HEIGHT = 44;
const WIDTH = levels.length * (BAR + GAP) - GAP;

/** A thin waveform drawn from Arjan's own playing; it rises once on load and then stays still. */
export default function Waveform() {
  return (
    <figure className={styles.figure}>
      <svg
        className={styles.wave}
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        preserveAspectRatio="none"
        role="img"
        aria-label="Waveform of a 20-second recording of Arjan playing piano"
      >
        {levels.map((level, i) => {
          const h = Math.max(level * HEIGHT, 2);
          return (
            <rect
              key={i}
              x={i * (BAR + GAP)}
              y={(HEIGHT - h) / 2}
              width={BAR}
              height={h}
              rx={BAR / 2}
              style={{ animationDelay: `${i * 8}ms` }}
            />
          );
        })}
      </svg>
      <figcaption className={styles.caption}>Arjan at the piano · 20 sec</figcaption>
    </figure>
  );
}
