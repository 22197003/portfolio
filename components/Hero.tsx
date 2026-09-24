import Image from "next/image";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end pt-[82px]">
      <Image
        src="/images/hero.jpg"
        alt="Garima Sharma"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_20%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/5" />

      <div className="relative z-10 mx-auto w-full max-w-wrap px-5 pb-16 sm:px-8 sm:pb-20">
        <span className="mb-4 block text-xs uppercase tracking-[0.16em] text-champagne">
          Nepali Actress &amp; Model
        </span>
        <h1 className="max-w-[14ch] font-display text-[52px] leading-[0.96] sm:text-[88px] lg:text-[128px]">
          Garima
          <br />
          Sharma
        </h1>
        <p className="mt-4 text-sm uppercase tracking-[0.14em] text-stone sm:text-base">
          {site.roles.join(" · ")}
        </p>
        <p className="mt-5 max-w-[46ch] text-[15px] leading-relaxed text-ivory/80 sm:text-lg">
          {site.tagline}
        </p>

        <div className="mt-4 flex flex-wrap gap-2.5">
          {site.credentials.map((c) => (
            <span
              key={c.label}
              className="rounded-sm border border-ivory/25 px-3 py-1.5 text-xs tracking-wide text-champagne first:text-champagne [&:not(:first-child)]:text-stone"
            >
              {c.label}
            </span>
          ))}
        </div>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#work"
            className="rounded-sm bg-ivory px-6 py-3.5 text-[13px] uppercase tracking-[0.08em] text-ink transition-colors hover:bg-champagne"
          >
            View My Work
          </a>
          <a
            href="/contact"
            className="rounded-sm border border-ivory/25 px-6 py-3.5 text-[13px] uppercase tracking-[0.08em] transition-colors hover:border-champagne hover:text-champagne"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
