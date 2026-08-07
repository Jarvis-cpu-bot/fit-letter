// Art direction: every photo is 1:1, B&W, hard contrast, +10 clarity, 8% grain.
// Unsplash `sat=-100` strips color at the source; the CSS class `.plate-photo`
// (globals.css via Tailwind utility below) pushes contrast/grain identically
// on every image so the treatment reads as one system, not per-image tweaks.
export const PLATE_PHOTOS = {
  plateCloseup: {
    src: "https://images.unsplash.com/photo-1767404890859-73752f06716c?w=900&h=900&fit=crop&sat=-100&auto=format&q=80",
    alt: "A cast-iron 45 lb weight plate, close on the stamped lettering.",
  },
  loadedBar: {
    src: "https://images.unsplash.com/photo-1581907311151-269c63717997?w=900&h=900&fit=crop&sat=-100&auto=format&q=80",
    alt: "A barbell loaded with plates, racked and ready.",
  },
  stopwatch: {
    src: "https://images.unsplash.com/photo-1704265586142-db3e17d0dea0?w=900&h=900&fit=crop&sat=-100&auto=format&q=80",
    alt: "An analog stopwatch against a dark background, hand resting near the minute.",
  },
  chalkHands: {
    src: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=900&h=900&fit=crop&sat=-100&auto=format&q=80",
    alt: "Hands gripping a loaded barbell mid-pull, chalk visible on the knurling.",
  },
  writtenCard: {
    src: "https://images.unsplash.com/photo-1587135991058-8816b028691f?w=900&h=900&fit=crop&sat=-100&auto=format&q=80",
    alt: "A hand writing numbers into a paper training log.",
  },
} as const;
