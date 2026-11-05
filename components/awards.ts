/** Awards, grouped by area. Shown as one list under the portfolio, each group with its logos. */
export type AwardGroup = {
  heading: string;
  headingEs: string;
  /** Square-ish or wide logos under /public/photos/awards, cropped from the old award tiles. */
  logos: { src: string; alt: string; width: number; height: number }[];
  /** `italicLead` is shown in italics just before the title. */
  /** The `Es` fields hold the Spanish text shown when the page is switched to Spanish. */
  awards: {
    title: string;
    titleEs: string;
    detail?: string;
    detailEs?: string;
    italicLead?: string;
    italicLeadEs?: string;
  }[];
};

export const awardGroups: AwardGroup[] = [
  {
    heading: "Music",
    headingEs: "Música",
    // Logos from grandprizevirtuosointernationalmusiccompetition.com, carnegiehall.org and specialvenue.org
    logos: [
      { src: "/photos/awards/grand-prize-virtuoso.jpg", alt: "Grand Prize Virtuoso", width: 120, height: 120 },
      { src: "/photos/awards/carnegie-hall.jpg", alt: "Carnegie Hall", width: 512, height: 120 },
      { src: "/photos/awards/special-venue.jpg", alt: "Special Venue Music Awards", width: 280, height: 120 },
    ],
    awards: [
      { title: "First place in piano, Special Venue Music at Stanford University · May 2026", titleEs: "Primer lugar en piano, Special Venue Music en la Universidad de Stanford · mayo de 2026" },
      { title: "First place in piano, Berlin Grand Prize Virtuoso · February 2026", titleEs: "Primer lugar en piano, Berlin Grand Prize Virtuoso · febrero de 2026" },
      { title: "Second place in piano, International Youth Music · January 2026", titleEs: "Segundo lugar en piano, International Youth Music · enero de 2026" },
      { title: "Winning solo performance on piano at Carnegie Hall · October 2025", titleEs: "Presentación solista ganadora de piano en Carnegie Hall · octubre de 2025" },
      { title: "Gold and silver prizes in classical piano, Global Genius Music · April 2025", titleEs: "Premios de oro y plata en piano clásico, Global Genius Music · abril de 2025" },
      { title: "Second place in advanced piano and romantic piano, San Francisco International Innovative · March 2025", titleEs: "Segundo lugar en piano avanzado y piano romántico, San Francisco International Innovative · marzo de 2025" },
      { title: "Second place in piano, Music through the Centuries International Competition · February 2024", titleEs: "Segundo lugar en piano, Music through the Centuries International Competition · febrero de 2024" },
    ],
  },
  {
    heading: "Technology & Research",
    headingEs: "Tecnología e investigación",
    // Voice Cursor logo (voicecursor), the fair wordmark from sites.google.com/ba-leeds.org/cccscienceengineeringfair,
    // and the IEEE mark from commons.wikimedia.org/wiki/File:IEEE_logo.svg
    logos: [
      { src: "/photos/awards/ieee.jpg", alt: "IEEE", width: 346, height: 120 },
      { src: "/photos/awards/voice-cursor.jpg", alt: "Voice Cursor", width: 480, height: 120 },
      { src: "/photos/awards/cccsef.jpg", alt: "Contra Costa County Science & Engineering Fair", width: 246, height: 120 },
    ],
    awards: [
      {
        title: "IEEE publication: “Lightweight Underwater Acoustic Classification of Vessel Propulsion Sources”", titleEs: "Publicación del IEEE: “Lightweight Underwater Acoustic Classification of Vessel Propulsion Sources”",
      },
      {
        title: "IEEE publication: “Toward a Quality-Gated Smartphone System for Stress-Aware Music Intervention”", titleEs: "Publicación del IEEE: “Toward a Quality-Gated Smartphone System for Stress-Aware Music Intervention”",
      },
      {
        title: "First Prize, Voice Cursor Hackathon · June 2026", titleEs: "Primer premio, Voice Cursor Hackathon · junio de 2026",
        detail: "For Agent-Secure, a security framework that screens an AI agent's file and shell actions before they run.", detailEs: "Por Agent-Secure, un marco de seguridad que revisa las acciones de archivos y de terminal de un agente de IA antes de ejecutarlas.",
      },
      {
        title: "3rd Place, Contra Costa County Science Fair · March 2026", titleEs: "Tercer lugar, Feria de Ciencias del Condado de Contra Costa · marzo de 2026",
        detail: "For VirtuosoFix, my technology assistant for pianists with limited dexterity.", detailEs: "Por VirtuosoFix, mi asistente tecnológico para pianistas con destreza limitada.",
      },
    ],
  },
  {
    heading: "Sports",
    headingEs: "Deportes",
    // Cal High logo (chs.srvusd.net) and USTA logo (usta.com)
    logos: [
      { src: "/photos/awards/cal-high.jpg", alt: "California High School", width: 120, height: 120 },
      { src: "/photos/awards/usta.jpg", alt: "USTA", width: 512, height: 120 },
    ],
    awards: [
      { title: "MVP with an undefeated 2024-25 season, leading the team to an undefeated win", titleEs: "MVP con una temporada 2024-25 invicta, llevando al equipo a una victoria invicta" },
      { title: "Multiple USTA Level 7 tournament wins · 2024–25", titleEs: "Varios torneos USTA Nivel 7 ganados · 2024–25" },
    ],
  },
  {
    heading: "Academics",
    headingEs: "Académico",
    logos: [{ src: "/photos/awards/cal-high.jpg", alt: "California High School", width: 120, height: 120 }],
    awards: [
      { title: "North Coast Section CIF President's List · 2025–26", titleEs: "Lista del Presidente de la CIF North Coast Section · 2025–26" },
      { title: "Varsity Athletic Award · 2025–26", titleEs: "Premio Atlético Varsity · 2025–26" },
      { title: "Certificate of Academic Achievement · 2025–26", titleEs: "Certificado de Logro Académico · 2025–26" },
    ],
  },
  {
    heading: "Patents",
    headingEs: "Patentes",
    // Simple drawn icon of a document with a seal
    logos: [{ src: "/photos/awards/patent.svg", alt: "Patent application", width: 120, height: 120 }],
    awards: [
      {
        italicLead: "Pending",
        italicLeadEs: "En trámite",
        title:
          "U.S. Patent Application No. 19/858,559 · Quality-Gated Physiological Feedback and Adaptive Music Intervention · November 2026",
        titleEs: "Solicitud de patente de EE. UU. n.º 19/858,559 · Quality-Gated Physiological Feedback and Adaptive Music Intervention · noviembre de 2026",
      },
    ],
  },
];
