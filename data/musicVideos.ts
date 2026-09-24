import type { Project } from "./types";

// She has appeared in 150+ music videos (confirmed). Only a handful of
// titles are independently verifiable right now — the structure below is
// built to scale to the full list once it's provided (bulk-import this
// array from a spreadsheet/CMS export, no component changes required).
export const musicVideos: Project[] = [
  {
    slug: "naboli-naboli",
    title: "Naboli Naboli",
    category: "Music Video",
    status: "Released",
    videoUrl: "https://youtu.be/0eNGCeZ3IDk",
    featured: true,
    verifiedFields: ["title", "category", "status", "videoUrl"],
    needsConfirmation: "Artist, year and director not yet confirmed.",
  },
  {
    slug: "din-gin-gin",
    title: "Din Gin Gin",
    category: "Music Video",
    status: "Released",
    videoUrl: "https://youtu.be/L8HYC25SbY8",
    featured: true,
    verifiedFields: ["title", "category", "status", "videoUrl"],
    needsConfirmation: "Artist, year and director not yet confirmed.",
  },
  // ...remaining ~148 entries to be added once the full list is supplied.
];
