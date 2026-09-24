import type { Metadata } from "next";
import { films, television } from "@/data/films";
import { musicVideos } from "@/data/musicVideos";
import { WorkGrid } from "@/components/WorkGrid";

export const metadata: Metadata = {
  title: "Filmography",
  description: "Full filmography and screen work of Garima Sharma.",
};

export default function WorkPage() {
  const all = [...films, ...television, ...musicVideos];

  return (
    <div className="mx-auto max-w-wrap px-5 pt-32 pb-24 sm:px-8 sm:pt-40">
      <span className="mb-3.5 block text-xs uppercase tracking-[0.1em] text-champagne">
        Filmography
      </span>
      <h1 className="font-display text-[38px] sm:text-[58px]">Full Filmography</h1>
      <p className="mt-4 max-w-[60ch] text-[15px] text-ivory/70">
        Music-video credits shown here are a starting sample — Garima has appeared in
        150+ music videos in total. The full list can be added to{" "}
        <code className="text-champagne">data/musicVideos.ts</code> without touching this page.
      </p>

      <WorkGrid projects={all} />
    </div>
  );
}
