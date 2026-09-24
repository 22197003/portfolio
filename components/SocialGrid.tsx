import { site } from "@/data/site";
import { PlaceholderImage } from "./PlaceholderImage";
import { InstagramEmbed } from "./InstagramEmbed";

export function SocialGrid() {
  const handle = site.social.instagram.split("/").filter(Boolean).pop();
  const posts = site.featuredInstagramPosts;

  return (
    <section aria-label="Social" className="py-16 sm:py-28">
      <div className="mx-auto max-w-wrap px-5 sm:px-8">
        <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="mb-3.5 block text-xs uppercase tracking-[0.1em] text-champagne">
              Follow
            </span>
            <h2 className="font-display text-[26px] sm:text-[36px]">On Instagram</h2>
          </div>
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener"
            className="border-b border-ivory/25 pb-1.5 text-[13px] uppercase tracking-[0.08em] transition-colors hover:border-champagne hover:text-champagne"
          >
            @{handle}
          </a>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
            {posts.slice(0, 4).map((url) => (
              <InstagramEmbed key={url} postUrl={url} />
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-4">
              {[1, 2, 3, 4].map((i) => (
                <PlaceholderImage key={i} label="Post placeholder" className="aspect-square" />
              ))}
            </div>
            <p className="mt-4 text-xs text-stone">
              Add real post URLs to site.featuredInstagramPosts to show live embeds here.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
