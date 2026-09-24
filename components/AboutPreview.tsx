import Link from "next/link";
import { site } from "@/data/site";
import { PlaceholderImage } from "./PlaceholderImage";

export function AboutPreview() {
  return (
    <section id="about" className="py-16 sm:py-28">
      <div className="mx-auto grid max-w-wrap items-center gap-10 px-5 sm:grid-cols-[0.85fr_1.15fr] sm:gap-16 sm:px-8">
        <PlaceholderImage label="Portrait — placeholder" className="aspect-[4/5]" />
        <div>
          <span className="mb-3.5 block text-xs uppercase tracking-[0.1em] text-champagne">
            About
          </span>
          <p className="max-w-[22ch] font-display text-[22px] leading-snug sm:text-[30px]">
            A voice that began in radio, a career built in front of the camera.
          </p>
          <p className="mt-6 max-w-[58ch] text-[15.5px] leading-relaxed text-ivory/70">
            {site.bio}
          </p>
          <Link
            href="/about"
            className="mt-7 inline-flex items-center gap-2 border-b border-ivory/25 pb-1.5 text-[13px] uppercase tracking-[0.08em] transition-colors hover:border-champagne hover:text-champagne"
          >
            Read Her Story
          </Link>
        </div>
      </div>
    </section>
  );
}
