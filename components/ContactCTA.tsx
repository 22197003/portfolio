import { site } from "@/data/site";

export function ContactCTA() {
  return (
    <section id="contact" className="border-t border-ivory/10 py-16 sm:py-28">
      <div className="mx-auto max-w-wrap px-5 sm:px-8">
        <span className="mb-3.5 block text-xs uppercase tracking-[0.1em] text-champagne">
          Contact
        </span>
        <h2 className="max-w-[16ch] font-display text-[34px] sm:text-[68px]">
          Let&rsquo;s create something memorable.
        </h2>
        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="/contact"
            className="rounded-sm bg-ivory px-6 py-3.5 text-[13px] uppercase tracking-[0.08em] text-ink transition-colors hover:bg-champagne"
          >
            Work With Garima
          </a>
          <a
            href="/contact"
            className="rounded-sm border border-ivory/25 px-6 py-3.5 text-[13px] uppercase tracking-[0.08em] transition-colors hover:border-champagne hover:text-champagne"
          >
            Contact
          </a>
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener"
            className="rounded-sm border border-ivory/25 px-6 py-3.5 text-[13px] uppercase tracking-[0.08em] transition-colors hover:border-champagne hover:text-champagne"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
