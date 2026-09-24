// Verified, publicly-sourced information only. Do not add unverified
// claims here — use `verified: false` + a `note` instead (see types below).
// Sources checked: IMDb, TMDB, Moviefone, Entertainment.ie, plus details
// confirmed directly by Garima's team.

export const site = {
  name: "Garima Sharma",
  fullName: "Garima Sharma Timilsina",
  roles: ["Actress", "Model", "Performer"],
  tagline: "Bringing stories to life through performance, presence and expression.",
  bio: `Garima Sharma Timilsina is a Nepali actress and model whose work spans
television, music video and film. She began her career in media as a radio
journalist at Radio Arpan before moving into modeling and performance, going
on to appear in the popular television show Sakkigoni, over 150 music
videos, and her feature film debut, London to Paris. She was named Best
Debutant Actress in 2025. Her film Hrashwo Deergha, directed by Chandra
Pant, has since been released, with Hunter next.`,
  credentials: [
    { label: "Best Debutant Actress, 2025", verified: true },
    { label: "150+ music videos", verified: true },
  ],
  social: {
    instagram: "https://www.instagram.com/__garimasharmaa_",
  },
  contactEmail: null, // add booking/management email once provided

  // Official embeds only — never a downloaded/rehosted copy.
  // Fill these in with real URLs and everything renders automatically.
  showreelYouTubeUrl: null as string | null, // e.g. "https://www.youtube.com/watch?v=XXXXXXXXXXX"
  featuredInstagramPosts: [] as string[], // e.g. ["https://www.instagram.com/p/XXXXXXXXXXX/"]
};
