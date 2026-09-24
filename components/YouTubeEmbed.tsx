// Official YouTube iframe embed — the video stays hosted on YouTube.
// Pass the video ID from a real, official upload (her channel, an
// official label/production channel, etc.), never a re-uploaded copy.
export function YouTubeEmbed({ videoId, title }: { videoId: string; title: string }) {
  return (
    <div className="aspect-video w-full overflow-hidden border border-ivory/10">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
