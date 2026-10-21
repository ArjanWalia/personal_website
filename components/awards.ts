/** Awards, grouped by area. Shown as one list under the portfolio, each group with its logos. */
export type AwardGroup = {
  heading: string;
  /** Square-ish or wide logos under /public/photos/awards, cropped from the old award tiles. */
  logos: { src: string; alt: string; width: number; height: number }[];
  awards: { title: string; detail?: string }[];
};

export const awardGroups: AwardGroup[] = [
  {
    heading: "Music",
    // Logos from grandprizevirtuosointernationalmusiccompetition.com, carnegiehall.org and specialvenue.org
    logos: [
      { src: "/photos/awards/grand-prize-virtuoso.jpg", alt: "Grand Prize Virtuoso", width: 120, height: 120 },
      { src: "/photos/awards/carnegie-hall.jpg", alt: "Carnegie Hall", width: 512, height: 120 },
      { src: "/photos/awards/special-venue.jpg", alt: "Special Venue Music Awards", width: 280, height: 120 },
    ],
    awards: [
      { title: "Carnegie Hall Winner's Concert with the Royal Foundation · October 2025" },
      { title: "Stanford University · May 2026" },
      { title: "Berlin Grand Prize Virtuoso · February 2026" },
      { title: "Global Genius Music · April 2025" },
      { title: "San Francisco Innovative Music · March 2025" },
      { title: "Music through the Centuries · January 2025" },
      { title: "International Youth Music Competitions · January 2026" },
    ],
  },
  {
    heading: "Technology",
    // Voice Cursor logo (voicecursor) and the fair wordmark from sites.google.com/ba-leeds.org/cccscienceengineeringfair
    logos: [
      { src: "/photos/awards/voice-cursor.jpg", alt: "Voice Cursor", width: 480, height: 120 },
      { src: "/photos/awards/cccsef.jpg", alt: "Contra Costa County Science & Engineering Fair", width: 246, height: 120 },
    ],
    awards: [
      {
        title: "First Prize, Voice Cursor Hackathon · June 2026",
        detail: "For Agent-Secure, a security framework that screens an AI agent's file and shell actions before they run.",
      },
      {
        title: "3rd Place, Contra Costa County Science Fair · March 2026",
        detail: "For VirtuosoFix, my technology assistant for pianists with limited dexterity.",
      },
    ],
  },
  {
    heading: "Sports",
    // Cal High logo (chs.srvusd.net) and USTA logo (usta.com)
    logos: [
      { src: "/photos/awards/cal-high.jpg", alt: "California High School", width: 120, height: 120 },
      { src: "/photos/awards/usta.jpg", alt: "USTA", width: 512, height: 120 },
    ],
    awards: [
      { title: "Team MVP, leading the team to an undefeated 2025 season" },
      { title: "Multiple USTA Level 7 tournament wins · 2024–25" },
    ],
  },
  {
    heading: "Academics",
    logos: [{ src: "/photos/awards/cal-high.jpg", alt: "California High School", width: 120, height: 120 }],
    awards: [
      { title: "North Coast Section CIF President's List · 2025–26" },
      { title: "Varsity Athletic Award · 2025–26" },
      { title: "Certificate of Academic Achievement · 2025–26" },
    ],
  },
];
