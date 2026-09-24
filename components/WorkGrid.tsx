"use client";

import { useState } from "react";
import type { Project, ProjectCategory } from "@/data/types";
import { PlaceholderImage } from "./PlaceholderImage";
import { YouTubeEmbed } from "./YouTubeEmbed";
import { getYouTubeId } from "@/lib/youtube";

const filters: ("All" | ProjectCategory)[] = [
  "All",
  "Film",
  "Television",
  "Music Video",
];

export function WorkGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="mt-12">
      <div className="mb-10 flex flex-wrap gap-2.5">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-sm border px-4 py-2 text-xs uppercase tracking-[0.08em] transition-colors ${
              active === f
                ? "border-champagne text-champagne"
                : "border-ivory/15 text-ivory/70 hover:border-ivory/40"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-4">
        {shown.map((p) => {
          const videoId = p.videoUrl ? getYouTubeId(p.videoUrl) : null;
          return (
            <div key={p.slug}>
              {videoId ? (
                <YouTubeEmbed videoId={videoId} title={`${p.title} — Trailer`} />
              ) : (
                <PlaceholderImage
                  label="Poster / thumbnail placeholder"
                  className={p.category === "Music Video" ? "aspect-video" : "aspect-[2/3]"}
                />
              )}
              <div className="mt-3">
                <span className="text-[11px] uppercase tracking-[0.08em] text-champagne">
                  {p.category}
                  {p.status !== "Unknown" ? ` · ${p.status}` : ""}
                </span>
                <h3 className="mt-1 font-display text-base">{p.title}</h3>
                {p.needsConfirmation && (
                  <p className="mt-1 text-[11.5px] text-stone">{p.needsConfirmation}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {shown.length === 0 && (
        <p className="text-sm text-stone">No verified entries in this category yet.</p>
      )}
    </div>
  );
}
