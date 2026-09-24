import Link from "next/link";
import { films, television } from "@/data/films";
import { PlaceholderImage } from "./PlaceholderImage";
import { YouTubeEmbed } from "./YouTubeEmbed";
import { getYouTubeId } from "@/lib/youtube";

const items = [...films, ...television];

export function FilmographyStrip() {
  return (
    <section id="filmography" className="py-16 sm:py-28">
      <div className="mx-auto max-w-wrap px-5 sm:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6 sm:mb-12">
          <div>
            <span className="mb-3.5 block text-xs uppercase tracking-[0.1em] text-champagne">
              Filmography
            </span>
            <h2 className="font-display text-[32px] sm:text-[52px]">
              Selected screen credits
            </h2>
          </div>
          <Link
            href="/work"
            className="border-b border-ivory/25 pb-1.5 text-[13px] uppercase tracking-[0.08em] transition-colors hover:border-champagne hover:text-champagne"
          >
            Full Filmography
          </Link>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-3 [scrollbar-width:thin]">
          {items.map((p) => {
            const videoId = p.videoUrl ? getYouTubeId(p.videoUrl) : null;
            return (
              <div key={p.slug} className="w-[min(280px,68vw)] flex-none">
                {videoId ? (
                  <YouTubeEmbed videoId={videoId} title={`${p.title} — Trailer`} />
                ) : (
                  <PlaceholderImage label="Poster placeholder" className="aspect-[2/3]" />
                )}
                <div className="mt-3.5">
                  <span className="text-[11px] uppercase tracking-[0.08em] text-champagne">
                    {p.category}
                    {p.status !== "Unknown" ? ` · ${p.status}` : ""}
                  </span>
                  <h3 className="mt-1.5 font-display text-lg">{p.title}</h3>
                  {p.needsConfirmation && (
                    <p className="mt-1 text-[12.5px] text-stone">{p.needsConfirmation}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
