import type { ReactNode } from "react";
import type { Activity } from "./activities";

/** Line icon shown on cards that have no photo yet, chosen by the card's category. */
export default function CategoryIcon({ filter }: { filter: Activity["filter"] }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {paths[filter]}
    </svg>
  );
}

const paths: Record<Activity["filter"], ReactNode> = {
  // accessibility figure
  Projects: (
    <>
      <circle cx="12" cy="4.5" r="1.7" />
      <path d="M4 9h16M12 9v5m0 0-3.5 7M12 14l3.5 7" />
    </>
  ),
  // waveform
  Research: <path d="M2.5 12h2.5l2-6 3 12 3-9 2 6 2-3h4.5" />,
  // code brackets
  "Internships": <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />,
  // graduation cap
  "Academics & Enrichment": <path d="M2 9.5 12 5l10 4.5-10 4.5L2 9.5ZM6 11.3V16c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.7M22 9.5v5" />,
  // beamed notes
  Music: (
    <>
      <path d="M9 18V6l10-2v12" />
      <circle cx="6.5" cy="18" r="2.5" />
      <circle cx="16.5" cy="16" r="2.5" />
    </>
  ),
  // heart in an open hand
  Volunteering: (
    <path d="M12 12.5c-1.6-1.4-4-3-4-5a2 2 0 0 1 4-.6 2 2 0 0 1 4 .6c0 2-2.4 3.6-4 5ZM3 14h3l3.5 2.5H14a1.5 1.5 0 0 0 0-3h-3M6 20l2-1.5h6l6-4.5a1.5 1.5 0 0 0-2-2.2l-3.5 2.2" />
  ),
  // trophy
  Sports: (
    <path d="M7 4h10v5a5 5 0 0 1-10 0V4ZM7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3M12 14v3M8 21h8M10 17h4v4" />
  ),
};
