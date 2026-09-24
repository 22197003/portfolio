import type { Project } from "./types";

// Full filmography. Add a new object here — no component changes needed.
// Sakkigoni, Hunter and Kaji removed on request (26 Sept) — being managed
// separately for now. Re-add here whenever ready, in the same shape.
export const films: Project[] = [
  {
    slug: "london-to-paris",
    title: "London to Paris",
    category: "Film",
    status: "Released",
    videoUrl: "https://youtu.be/gw-c20KEDIM",
    featured: true,
    verifiedFields: ["title", "category", "status", "videoUrl"],
    needsConfirmation: "Exact release year and role not yet confirmed.",
  },
  {
    slug: "hrashwo-deergha",
    title: "Hrashwo Deergha",
    category: "Film",
    status: "Released",
    director: "Chandra Pant",
    videoUrl: "https://youtu.be/2h9qtZq-hHU",
    featured: true,
    verifiedFields: ["title", "category", "status", "director", "videoUrl"],
    needsConfirmation: "Exact release year and role not yet confirmed.",
  },
  {
    slug: "jante-bakhro",
    title: "Jante Bakhro",
    category: "Film",
    status: "Unknown",
    videoUrl: "https://youtu.be/PBCHR_OmS_g",
    featured: true,
    verifiedFields: ["title", "category", "videoUrl"],
    needsConfirmation: "Release status, year and role not yet confirmed.",
  },
];

export const television: Project[] = [];
