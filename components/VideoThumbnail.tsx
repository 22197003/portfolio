import Image from "next/image";

// Uses YouTube's own public thumbnail endpoint (img.youtube.com) — this is
// the same image YouTube serves for link previews/embeds everywhere on the
// web. Nothing is downloaded or stored in this repo; it's fetched live from
// YouTube each time, the same way an oEmbed preview works.
export function VideoThumbnail({
  videoId,
  href,
  title,
  className = "",
}: {
  videoId: string;
  href: string;
  title: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      aria-label={`Watch ${title} on YouTube`}
      className={`group relative block overflow-hidden bg-bark ${className}`}
    >
      <Image
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        fill
        sizes="(max-width: 640px) 90vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
      />
      <div className="absolute inset-0 bg-ink/15 transition-colors group-hover:bg-ink/25" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-ivory/40 bg-ink/45 backdrop-blur-sm transition-colors group-hover:border-champagne group-hover:text-champagne">
          <svg viewBox="0 0 24 24" fill="none" className="ml-1 h-5 w-5">
            <path d="M6 4L20 12L6 20V4Z" fill="currentColor" />
          </svg>
        </span>
      </span>
    </a>
  );
}
