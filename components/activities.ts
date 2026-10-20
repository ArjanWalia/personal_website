export const filters = [
  "All",
  "Projects",
  "Research",
  "Internships/Work Experience",
  "Music",
  "Sports",
] as const;

export type Filter = (typeof filters)[number];

export type Activity = {
  name: string;
  /** Which filter button (besides "All") shows this card. */
  filter: Exclude<Filter, "All">;
  label: string;
  title: string;
  description: string;
  /** Optional bullet list shown under the description. */
  highlights?: string[];
  /** Path under /public. Omit to show a placeholder until the photo is added. */
  image?: string;
  /** Path under /public to an MP4, played muted on a loop in place of the image. */
  video?: string;
};

export const activities: Activity[] = [
  {
    name: "AdapTune",
    filter: "Projects",
    label: "Accessibility Technology",
    title: "AdapTune: AI-Powered Music for Stress Management",
    // Self-hosted copy of https://youtu.be/TxJcAe0iZHA (a YouTube embed shows player controls)
    video: "/videos/adaptune.mp4",
    description:
      "I built AdapTune, an app that helps students manage stress through adaptive music, and brought it to my school's wellness center so any student can use it.",
  },
  {
    name: "OpenHearth",
    filter: "Projects",
    label: "Accessibility Technology",
    title: "OpenHearth: An Open Mic for Every Musician",
    description:
      "A free online open mic for neurodivergent and underrepresented musicians: no toxicity, no judgment, no pressure. OpenHearth now connects 100+ musicians and listeners across India and the United States.",
  },
  {
    name: "Python assistant",
    filter: "Projects",
    label: "Accessibility Technology",
    title: "Sheet Music Assistant for Physically Impaired Pianists",
    description:
      "I built a Python program that draws on a range of libraries to help physically impaired pianists read and play sheet music, and presented it at my local science fair.",
  },
  {
    name: "IEEE",
    filter: "Research",
    label: "Digital Signal Processing Research",
    title: "IEEE: Vessel Motor Sound Classification",
    description:
      "I evaluated machine learning models and digital signal processing techniques to improve how accurately vessel motors can be identified from their audio signatures.",
  },
  {
    name: "Stress management system",
    filter: "Research",
    label: "Digital Signal Processing Research",
    title: "Lightweight ML Phone System for Stress Management",
    description:
      "I proposed a system that pairs a PPG sensor with a lightweight stress-classifying ML model on a phone, responding with musical intervention to make stress management more efficient and accessible.",
  },
  {
    name: "UCSD COSMOS",
    filter: "Research",
    label: "Digital Signal Processing Research",
    title: "Musical Interpolation at UCSD COSMOS",
    description:
      "I built a program that blends the sounds of two instruments, producing a single output that is perceived as both instruments combined.",
  },
  {
    name: "Hinkal",
    filter: "Internships/Work Experience",
    label: "Software Development",
    title: "UI/UX Developer Intern at Hinkal",
    description:
      "At Hinkal, a leading blockchain privacy and security startup, I designed and built interfaces that make secure transactions accessible across a wide range of chain networks.",
  },
  {
    name: "Hey, Blue!",
    filter: "Internships/Work Experience",
    label: "Software Development",
    title: "Intern at Hey, Blue!",
    description:
      "Hey, Blue! gamifies the relationship between police officers and the neighborhoods they patrol, building trust and bridging the gap between residents and officers.",
  },
  {
    name: "Compass Lessons",
    filter: "Internships/Work Experience",
    label: "Software Development",
    title: "Intern at Compass Lessons",
    description:
      "Compass Lessons helps healthcare companies turn complex challenges into actionable, human-centered strategies that improve both clinical and economic outcomes.",
  },
  {
    name: "Piano",
    filter: "Music",
    label: "Music",
    title: "Competitive Piano: Carnegie Hall, Stanford & Beyond",
    description:
      "As a competitive pianist, I've won prizes at Stanford University, the Berlin Grand Prize Virtuoso, and Global Genius Music, and performed at Carnegie Hall in a winners' concert.",
  },
  {
    name: "Tennis",
    filter: "Sports",
    label: "Sports",
    title: "Varsity Tennis",
    description:
      "I was named MVP of my junior varsity team, then played #6 on my high school's varsity team, which won:",
    highlights: [
      "EBAL Champions: 2023, 2024, 2025",
      "NCS Champions: 2024, 2025",
      "CIF NorCal Champions: 2024, 2025",
      "CIF State Champions: 2024",
    ],
  },
];
