export type ProjectCategory =
  | "Film"
  | "Television"
  | "Music Video"
  | "Modeling"
  | "Campaign";

export type ProjectStatus = "Released" | "Upcoming" | "Unknown";

export interface Project {
  slug: string;              // used for /work/[slug]
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  year?: number;              // omit entirely if unverified — never guess
  role?: string;               // omit if unverified
  director?: string;
  production?: string;
  synopsis?: string;
  featured?: boolean;          // show on homepage "Selected Work"
  thumbnail?: string;           // path once a real asset exists
  videoUrl?: string;
  externalUrl?: string;
  verifiedFields: (keyof Project)[]; // which fields above are confirmed
  needsConfirmation?: string;   // human-readable note on what's still pending
}
