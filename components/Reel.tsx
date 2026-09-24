import { site } from "@/data/site";
import { getYouTubeId } from "@/lib/youtube";
import { YouTubeEmbed } from "./YouTubeEmbed";

export function Reel() {
  const videoId = site.showreelYouTubeUrl ? getYouTubeId(site.showreelYouTubeUrl) : null;

  return (
    <section aria-label="Showreel" className="py-16 sm:py-28">
      <div className="mx-auto max-w-wrap px-5 sm:px-8">
        <div className="mb-10 sm:mb-16">
          <span className="mb-3.5 block text-xs uppercase tracking-[0.1em] text-champagne">
            Showreel
          </span>
          <h2 className="font-display text-[32px] sm:text-[52px]">In motion</h2>
        </div>

        {videoId ? (
          <YouTubeEmbed videoId={videoId} title="Garima Sharma — Showreel" />
        ) : (
          <div className="ph-block relative flex aspect-[16/8] items-end">
            <span className="absolute left-3.5 bottom-3 z-10 text-[11px] tracking-wide text-ivory/55">
              Showreel — add a real YouTube link to site.showreelYouTubeUrl
            </span>
            <button
              aria-label="Play showreel"
              className="absolute left-1/2 top-1/2 z-10 flex h-[84px] w-[84px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/25 bg-ink/40 transition-colors hover:border-champagne hover:bg-ink/65"
            >
              <svg viewBox="0 0 24 24" fill="none" className="ml-1 h-5 w-5">
                <path d="M6 4L20 12L6 20V4Z" fill="currentColor" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
