import { films, television } from "@/data/films";
import { musicVideos } from "@/data/musicVideos";
import { PlaceholderImage } from "./PlaceholderImage";
import { VideoThumbnail } from "./VideoThumbnail";
import { getYouTubeId } from "@/lib/youtube";

// Pulled automatically from whatever is marked `featured: true` in the data
// files — never hardcoded by slug, so removing/renaming a project here
// can't leave a blank gap on the homepage.
const spanPattern = ["large", "default", "small", "small", "default"] as const;
type Span = (typeof spanPattern)[number];

const featured = [...films, ...television, ...musicVideos]
  .filter((p) => p.featured)
  .slice(0, spanPattern.length)
  .map((p, i) => ({ ...p, span: spanPattern[i] as Span }));

const spanClasses: Record<Span, string> = {
  large: "col-span-2 row-span-2 sm:col-span-4 sm:row-span-4",
  default: "col-span-1 row-span-1 sm:col-span-3 sm:row-span-3",
  small: "col-span-1 row-span-1 sm:col-span-2 sm:row-span-2",
};

export function SelectedWork() {
  return (
    <section id="work" className="py-16 sm:py-28">
      <div className="mx-auto max-w-wrap px-5 sm:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 sm:mb-16">
          <div>
            <span className="mb-3.5 block text-xs uppercase tracking-[0.1em] text-champagne">
              Selected Work
            </span>
            <h2 className="font-display text-[32px] sm:text-[52px]">
              A career across screen &amp; stage
            </h2>
          </div>
          <span className="text-[13px] tracking-[0.08em] text-stone">
            Film · Television · Music Video
          </span>
        </div>

        <div className="grid auto-rows-[140px] grid-cols-2 gap-4 sm:grid-cols-6 sm:gap-5">
          {featured.map((project) => {
            const videoId = project.videoUrl ? getYouTubeId(project.videoUrl) : null;

            return (
              <article
                key={project.slug}
                className={`group relative ${spanClasses[project.span]}`}
              >
                {videoId ? (
                  <VideoThumbnail
                    videoId={videoId}
                    href={project.videoUrl!}
                    title={project.title}
                    className="absolute inset-0"
                  />
                ) : (
                  <PlaceholderImage
                    label={`${project.title} — still, placeholder`}
                    className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  />
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                <div className="pointer-events-none relative z-10 flex h-full flex-col justify-end p-5">
                  <span className="mb-2 text-[11.5px] uppercase tracking-[0.1em] text-champagne">
                    {project.category}
                    {project.status !== "Unknown" ? ` · ${project.status}` : ""}
                  </span>
                  <h3 className="font-display text-xl sm:text-[27px]">{project.title}</h3>
                  {project.director && (
                    <p className="mt-1.5 text-[13.5px] text-ivory/70">
                      Directed by {project.director}.
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
