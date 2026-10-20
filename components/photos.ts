export type Photo = {
  caption: string;
  /** Path under /public. Omit to show a placeholder (profile photo only; the scroller skips it). */
  src?: string;
  /** Intrinsic size, used to give the card the photo's aspect ratio so nothing is cropped. */
  width?: number;
  height?: number;
  /** CSS object-position used when cropping the photo into its card. */
  position?: string;
};

export const scrollerPhotos: Photo[] = [
  { caption: "Piano award", src: "/photos/piano-award.jpg", width: 1200, height: 1600 },
  { caption: "With Stacy Hobbs", src: "/photos/stacy-hobbs.jpg", width: 1600, height: 1200 },
  { caption: "Tennis MVP", src: "/photos/tennis-mvp.jpg", width: 1194, height: 1600 },
  {
    caption: "OpenHearth with IndieSonic",
    src: "/photos/openhearth-indiesonic.jpg",
    width: 1600,
    height: 849,
  },
  { caption: "COSMOS", src: "/photos/cosmos.jpg", width: 1200, height: 1600 },
  { caption: "Electronics build", src: "/photos/circuit-project.jpg", width: 1200, height: 1600 },
];

export const profilePhoto: Photo = {
  caption: "Arjan Walia",
  src: "/photos/profile.jpg",
  position: "50% 35%",
};
