export const filters = [
  "Projects",
  "Research",
  "Internships",
  "Academics & Enrichment",
  "Music",
  "Sports",
  "Volunteering",
  "All",
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
  /** A closing line shown after the highlights in the detail window. */
  footnote?: string;
  /** Labelled write-up sections (e.g. "What I learned"), shown when the card is expanded. */
  sections?: { heading: string; text?: string; list?: string[]; steps?: string[] }[];
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
      "A free online open mic for neurodivergent and underrepresented musicians: no toxicity, no judgment, no pressure. Open Hearth now connects 120+ musicians and listeners across India and the United States.",
    sections: [
      {
        heading: "What I built",
        list: [
          "A kindness-only community with AI monitoring for toxic comments.",
          "Host controls for chat, cameras, and microphones, plus sensory-safe comfort settings.",
          "A global stage: performers and audiences join online from different countries.",
        ],
      },
      {
        heading: "Real-world outcomes",
        list: [
          "120+ platform users, including musicians and audience members.",
          "Added AI-monitored chat for toxic comments and rewrote outreach around each nonprofit’s mission and its users’ needs, both in response to early feedback.",
        ],
      },
    ],
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
    sections: [
      {
        heading: "Why it matters",
        text: "Pianists with limited dexterity need practice feedback that points to exactly which notes went wrong. VirtuosoFix compares what was played against the score and shows the result note by note.",
      },
      {
        heading: "How it works",
        steps: [
          "Performance recording",
          "Align to the reference MIDI score",
          "Label each note’s accuracy",
          "Practice feedback",
        ],
      },
      {
        heading: "What I built",
        list: [
          "A Python program that compares a recording against a reference MIDI score, classifies each mistake as a pitch, timing, or combined error, and automatically repairs it by shifting timing or replacing wrong notes, producing a corrected recording.",
          "Music information retrieval tools: PyPianoRoll for pitch alignment and note replacement, and pretty_midi for MIDI parsing and synthesis.",
          "NumPy and pandas to organize the note-level data.",
        ],
      },
      {
        heading: "Real-world outcomes",
        list: [
          "3rd place at the Contra Costa Science & Engineering Fair (March 2026).",
          "Corrected injected errors with over 80% accuracy in every category: 88.6% for timing errors, 84.7% for pitch errors, and 81.6% when both occur together.",
          "Helps pianists with limited dexterity practice and record independently.",
        ],
      },
    ],
  },
  {
    name: "AdapTune",
    filter: "Projects",
    label: "Accessibility Technology",
    title: "AI-Powered Adaptive Music for Stress Management",
    // Placeholder until there is a photo or demo of the app
    image: "/photos/adaptune-coming-soon.jpg",
    description:
      "Amid rising mental health crises in US high school students, I am working on the idea of an accessible and private app to help students manage stress through adaptive music.",
  },
  {
    name: "IEEE",
    filter: "Research",
    label: "Digital Signal Processing Research",
    title: "Lightweight Underwater Acoustic Classification of Vessel Propulsion Sources",
    // Fig. 1 of the paper: one second of audio from each of the five motors
    image: "/photos/underwater-waveforms.png",
    imageFit: "contain",
    description:
      "I evaluated machine learning models, parameters, and digital signal processing techniques to improve how accurately vessel motors can be identified from their audio signatures.",
    sections: [
      {
        heading: "Why it matters",
        text: "The increasing maritime traffic introduces more ambient noise affecting marine life. In addition, current methods of vessel identification require the ships to input information independently, introducing a security issue. Hence, a reliable and safe way of identifying aspects of vessels is needed.",
      },
      {
        heading: "Real-world outcomes",
        list: [
          "Accepted for publication at IEEE SoutheastCon 2027.",
          "92% test accuracy classifying five vessel motors (four outboard combustion motors and one electric) from underwater audio.",
          "A 1 KB logistic regression model matched a 3.2 MB neural network, about 3,000 times smaller and suited to low-power ocean sensors.",
        ],
      },
    ],
  },
  {
    name: "Stress management system",
    filter: "Research",
    label: "Digital Signal Processing Research",
    title: "Toward a Quality-Gated Smartphone System for Stress-Aware Music Intervention",
    // The two method flows from the URTC poster (biometric extraction, then stress classification)
    image: "/photos/stress-flows.png",
    imageFit: "contain",
    description:
      "I proposed a system that pairs a PPG sensor with a lightweight stress-classifying ML model on a phone, responding with musical intervention to make stress management more efficient and accessible.",
    sections: [
      {
        heading: "Why it matters",
        text: "The goal is a system that notices stress from body signals and responds right away with music matched to the listener, closing the loop between sensing and support.",
      },
      {
        heading: "How it works",
        steps: [
          "5-channel Arduino sensor",
          "CNN + LSTM on raw signals / MLP on extracted features",
          "Calibrated fusion: stress index 0–100",
          "Original Suno music library / Spotify picks via Claude",
        ],
      },
      {
        heading: "Real-world outcomes",
        list: [
          "Accepted for publication at IEEE SoutheastCon 2027.",
          "94% accuracy telling calm from stressed states on wrist-sensor data, using heart signals a phone camera can capture.",
          "Heart rate from smartphone-camera video within 6.5 BPM on average, with a quality gate that screens out unusable recordings at 78% accuracy.",
          "Self-selected music improved stress recovery by 1.05 points over an active radio control, with the largest benefit in nervousness.",
          "Pending U.S. Patent Application No. 19/858,559 · Quality-Gated Physiological Feedback and Adaptive Music Intervention · November 2026",
        ],
      },
    ],
  },
  {
    name: "UC San Diego COSMOS research",
    filter: "Research",
    label: "Digital Signal Processing Research · Team Lead",
    title: "Musical Interpolation at UC San Diego",
    image: "/photos/cosmos-cluster-collage.jpg",
    description:
      "I built a program that blends the sounds of two instruments, producing a single output that is perceived as both instruments combined.",
    // Sections drawn from the "Timbral Morphing" COSMOS presentation
    sections: [
      {
        heading: "Why it matters",
        text: "Most digital audio workstations and traditional instruments constrain creators to specific sounds, limiting their expressiveness. Timbral morphing lets users design hybrid sounds by interpolating between instruments.",
      },
      {
        heading: "Project goal",
        text: "Morph the parameters of a saxophone and a viola into one instrument.",
      },
      {
        heading: "How it works",
        steps: [
          "Record analog A4 notes and analyze them in Audacity",
          "Map the analog features into Pure Data oscillators",
          "Synthesize digital versions of the original instruments",
          "Interpolate the parameters to create the hybrid instrument",
        ],
      },
      {
        heading: "What we built",
        list: [
          "Analyzed the raw analog signals of A4 notes in Audacity, plotting the spectrum to study frequencies and using spectrogram views to capture how the sound changes over time.",
          "Mapped those features into Pure Data oscillators and synthesized digital versions of the saxophone and viola, modeling their amplitude envelopes and harmonics.",
          "Added text-file imports that map directly to the oscillators in Pure Data.",
          "Blended the two instruments with interpolation: linear for sustain and release times, logarithmic for attack times, frequencies, and amplitudes.",
        ],
      },
      {
        heading: "Real-world outcomes",
        list: [
          "Earned a strong recommendation from my UC San Diego professor.",
        ],
      },
    ],
  },
  {
    name: "Hinkal",
    filter: "Internships",
    label: "Software Development",
    title: "Software Engineering Intern at Hinkal",
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
    description: "GPA: 4.5 weighted / 3.93 unweighted. Coursework includes:",
    highlights: ["AP Calculus", "AP Computer Science", "AP Physics", "Engineering"],
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
      "Piano has given me some unforgettable moments, from a winning solo performance at Carnegie Hall for The Royal Foundation to winning at the International Youth Music, Berlin Grand Prize Virtuoso, San Francisco International Innovative, Special Venue Music at Stanford University, and Global Genius Music competitions.\n\nI’m grateful to every teacher and audience who made them possible.",
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
      "I was named MVP of my junior varsity team after an unbeaten season, leading the team to its first undefeated season in 10 years. I then played #6 on my high school's varsity team.",
    footnote: "I’m grateful to my coaches and teammates for every match we shared.",
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
      "I serve as a buddy teaching English or history to neurodiverse children with Disable the Difference, a nonprofit that runs free programs and friendship for youth with intellectual and developmental disabilities.",
  },
];
