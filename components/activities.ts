export const filters = [
  "All",
  "Projects",
  "Research",
  "Internships",
  "Academics & Enrichment",
  "Music",
  "Sports",
  "Volunteering",
  "Awards",
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
  /** CSS object-position for cropping the image into the card, e.g. "50% 30%" to keep a face in frame. */
  imagePosition?: string;
  /** "contain" shows the whole image on a soft backdrop instead of cropping it to the card. */
  imageFit?: "cover" | "contain";
  /** Extra photos revealed only when the card is expanded with "Read more". */
  extraImages?: {
    src: string;
    alt: string;
    position?: string;
    /** CSS aspect-ratio of the frame; defaults to portrait 3 / 4. Use "4 / 3" for landscape photos. */
    aspect?: string;
  }[];
  /** Path under /public to an MP4, played muted on a loop in place of the image. */
  video?: string;
  /** "contain" shows the whole video (e.g. a vertical reel) on a dark backdrop instead of cropping it. */
  videoFit?: "cover" | "contain";
  /** URL of an embeddable player (e.g. a LinkedIn post embed), shown in the media area instead of an image. */
  embed?: string;
  /** Path under /public to a small square logo shown beside the card's label. */
  logo?: string;
};

export const activities: Activity[] = [
  {
    name: "Open Hearth",
    filter: "Projects",
    label: "Accessibility Technology",
    title: "Open Hearth: An Open Mic for Every Musician",
    // Vertical promo reel, re-encoded for the web (silent, 540px wide)
    video: "/videos/openhearth.mp4",
    videoFit: "contain",
    description:
      "A free online open mic for neurodivergent and underrepresented musicians: no toxicity, no judgment, no pressure. Open Hearth now connects 100+ musicians and listeners across India and the United States.",
  },
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
    name: "VirtuosoFix",
    filter: "Projects",
    label: "Accessibility Technology",
    title: "VirtuosoFix for Physically Impaired Pianists",
    image: "/photos/virtuosofix-science-fair.webp",
    imageFit: "contain",
    description:
      "I built a Python program that draws on a range of libraries to help physically impaired pianists read and play sheet music, and presented it at my local science fair.",
  },
  {
    name: "IEEE",
    filter: "Research",
    label: "Digital Signal Processing Research",
    title: "IEEE: Vessel Motor Sound Classification",
    // Landing page of IEEE SoutheastCon (ieeesoutheastcon.org)
    image: "/photos/ieee-southeastcon.jpg",
    description:
      "I evaluated machine learning models and digital signal processing techniques to improve how accurately vessel motors can be identified from their audio signatures.",
  },
  {
    name: "Stress management system",
    filter: "Research",
    label: "Digital Signal Processing Research",
    title: "Lightweight ML Phone System for Stress Management",
    // Landing page of IEEE SoutheastCon (ieeesoutheastcon.org)
    image: "/photos/ieee-southeastcon.jpg",
    description:
      "I proposed a system that pairs a PPG sensor with a lightweight stress-classifying ML model on a phone, responding with musical intervention to make stress management more efficient and accessible.",
  },
  {
    name: "UCSD COSMOS",
    filter: "Research",
    label: "Digital Signal Processing Research",
    title: "Musical Interpolation at UCSD COSMOS",
    image: "/photos/cosmos-cluster-collage.jpg",
    description:
      "I built a program that blends the sounds of two instruments, producing a single output that is perceived as both instruments combined.",
  },
  {
    name: "Hinkal",
    filter: "Internships",
    label: "Software Development",
    title: "UI/UX Developer Intern at Hinkal",
    // Hinkal's LinkedIn post, embedded with LinkedIn's own player (compact = video only)
    embed: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7515470442913202176?compact=1",
    description:
      "At Hinkal, a leading blockchain privacy and security startup, I designed and built interfaces that make secure transactions accessible across a wide range of chain networks.",
  },
  {
    name: "Hey, Blue!",
    filter: "Internships",
    label: "Software Development",
    title: "Intern at Hey, Blue!",
    // Phone screen recording from the heyblue.us landing page
    video: "/videos/heyblue.mp4",
    videoFit: "contain",
    logo: "/photos/heyblue-logo.webp",
    description:
      "Hey, Blue! gamifies the relationship between police officers and the neighborhoods they patrol, building trust and bridging the gap between residents and officers.",
  },
  {
    name: "Compass Lessons",
    filter: "Internships",
    label: "Software Development",
    title: "Intern at Compass Lessons",
    // Slideshow of the three hero carousel slides on compasslessons.com
    video: "/videos/compass-lessons.mp4",
    videoFit: "contain",
    description:
      "Compass Lessons helps healthcare companies turn complex challenges into actionable, human-centered strategies that improve both clinical and economic outcomes.",
  },
  {
    name: "Academics",
    filter: "Academics & Enrichment",
    label: "Academics",
    title: "California High School, Class of 2028",
    // Grizzly logo from chs.srvusd.net
    image: "/photos/cal-high-logo-tile.jpg",
    description: "GPA: 4.14 weighted / 3.93 unweighted. Coursework includes:",
    highlights: ["AP Calculus", "AP Computer Science", "AP Physics", "Engineering"],
  },
  {
    name: "UC Berkeley Fundamentals of Engineering",
    filter: "Academics & Enrichment",
    label: "Summer Program",
    title: "UC Berkeley Fundamentals of Engineering Program",
    image: "/photos/berkeley-engineering.jpg",
    imagePosition: "50% 70%",
    extraImages: [
      { src: "/photos/berkeley-lab.jpg", alt: "Students gathered around lab equipment at UC Berkeley" },
    ],
    description:
      "I simulated bridge construction in MATLAB and studied thermodynamics through the design of a Stirling engine.",
  },
  {
    name: "UC San Diego COSMOS",
    filter: "Academics & Enrichment",
    label: "Summer Program",
    title: "UC San Diego COSMOS: Music and Math",
    image: "/photos/cosmos-ucsd.jpg",
    imagePosition: "50% 45%",
    extraImages: [
      {
        src: "/photos/cosmos-cluster-collage.jpg",
        alt: "COSMOS Cluster 1 journal collage: a Fourier analysis lecture and a Pure Data patch",
        aspect: "1280 / 725",
      },
    ],
    description:
      "I studied digital signal processing, Fourier analysis, and sound transformation using graphical programming and embedded systems.",
  },
  {
    name: "Piano",
    filter: "Music",
    label: "Music",
    title: "Competitive Piano: Carnegie Hall, Stanford & Beyond",
    // 20-second silent clip from the Carnegie Hall winners' concert performance
    video: "/videos/piano.mp4",
    extraImages: [
      {
        src: "/photos/piano-steinway-certificate.jpg",
        alt: "Arjan with his medal and finalist certificate beside a grand piano at Steinway Piano Gallery",
        position: "50% 40%",
      },
      {
        src: "/photos/piano-carnegie-hall.jpg",
        alt: "Winners' concert performers on stage at Carnegie Hall with The Royal Foundation",
        aspect: "4 / 3",
      },
    ],
    description:
      "As a competitive pianist, I've won prizes at Stanford University, the Berlin Grand Prize Virtuoso, and Global Genius Music, and performed at Carnegie Hall in a winners' concert.",
  },
  {
    name: "Tennis",
    filter: "Sports",
    label: "Sports",
    title: "Varsity Tennis",
    image: "/photos/tennis-champion.jpg",
    imagePosition: "50% 30%",
    extraImages: [
      { src: "/photos/tennis-mvp-plaque.webp", alt: "Arjan holding his JV tennis MVP plaque", position: "50% 30%" },
      { src: "/photos/tennis-team.jpg", alt: "Cal High boys tennis team photo on the court", aspect: "1600 / 1066" },
    ],
    description:
      "I was named MVP of my junior varsity team, then played #6 on my high school's varsity team, which won:",
    highlights: [
      "EBAL Champions: 2023, 2024, 2025",
      "NCS Champions: 2024, 2025",
      "CIF NorCal Champions: 2024, 2025",
      "CIF State Champions: 2024",
    ],
  },
  {
    name: "Down Syndrome Connection",
    filter: "Volunteering",
    label: "Volunteering · Music Therapy",
    title: "Music Therapy Volunteer, Down Syndrome Connection of the Bay Area",
    // Logo from dscba.org
    image: "/photos/dsc-logo-tile.jpg",
    description:
      "I volunteer in music therapy sessions at the Down Syndrome Connection of the Bay Area, a Danville nonprofit that supports people with Down syndrome and their families.",
  },
  {
    name: "Disable the Difference",
    filter: "Volunteering",
    label: "Volunteering · Mentorship",
    title: "Buddy for Neurodiverse Kids, Disable the Difference",
    // Landing page of disablethedifference.com
    image: "/photos/disable-the-difference.jpg",
    description:
      "I serve as a buddy for neurodiverse kids with Disable the Difference, a nonprofit that runs free programs and friendship for youth with intellectual and developmental disabilities.",
  },
  {
    name: "Piano awards",
    filter: "Awards",
    label: "Music",
    title: "International Piano Competitions",
    // Logos from grandprizevirtuosointernationalmusiccompetition.com, carnegiehall.org and specialvenue.org
    image: "/photos/piano-awards-logos.jpg",
    description: "Prizes and performances include:",
    highlights: [
      "Carnegie Hall Winner's Concert with the Royal Foundation",
      "Stanford University",
      "Berlin Grand Prize Virtuoso",
      "Global Genius Music",
    ],
  },
  {
    name: "Voice Cursor hackathon",
    filter: "Awards",
    label: "Hackathon · June 2026",
    title: "First Prize, Voice Cursor Hackathon",
    image: "/photos/voice-cursor-tile.jpg",
    description:
      "Won first prize for Agent-Secure, a security framework that screens an AI agent's file and shell actions before they run.",
  },
  {
    name: "Contra Costa science fair",
    filter: "Awards",
    label: "Science Fair · March 2026",
    title: "3rd Place, Contra Costa County Science Fair",
    // Fair wordmark recreated in its colours from sites.google.com/ba-leeds.org/cccscienceengineeringfair
    image: "/photos/cccsef-logo-tile.jpg",
    description:
      "Placed third for VirtuosoFix, my technology assistant for pianists with limited dexterity.",
  },
  {
    name: "Tennis awards",
    filter: "Awards",
    label: "Sports",
    title: "Tennis MVP & Tournament Wins",
    // Cal High logo (chs.srvusd.net) and USTA logo (usta.com)
    image: "/photos/tennis-awards-logos.jpg",
    description: "On the court:",
    highlights: [
      "Team MVP, leading the team to an undefeated 2025 season",
      "Multiple USTA Level 7 tournament wins",
    ],
  },
  {
    name: "School honors",
    filter: "Awards",
    label: "Academic & Athletic Honors · 2025–26",
    title: "School and Section Honors",
    description: "Recognized for balancing athletics and academics:",
    highlights: [
      "North Coast Section CIF President's List",
      "Varsity Athletic Award",
      "Certificate of Academic Achievement",
    ],
  },
];
