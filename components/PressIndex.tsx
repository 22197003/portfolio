import { press } from "@/data/press";

export function PressIndex() {
  return (
    <section id="press" className="py-16 sm:py-28">
      <div className="mx-auto max-w-wrap px-5 sm:px-8">
        <div className="mb-10 sm:mb-16">
          <span className="mb-3.5 block text-xs uppercase tracking-[0.1em] text-champagne">
            Press &amp; Media
          </span>
          <h2 className="font-display text-[32px] sm:text-[52px]">In the press</h2>
        </div>

        <hr className="border-ivory/10" />
        {press.map((item) => (
          <div key={item.publication}>
            <div className="flex flex-wrap items-center justify-between gap-6 py-6">
              <div className="flex flex-wrap items-baseline gap-6">
                <span className="font-display text-lg">{item.publication}</span>
                <span className="text-sm text-ivory/65">{item.title}</span>
              </div>
              <span className="rounded-sm border border-ivory/10 px-2.5 py-1.5 text-[11.5px] uppercase tracking-wide text-stone">
                {item.externalUrl ? "Read" : "Link pending confirmation"}
              </span>
            </div>
            <hr className="border-ivory/10" />
          </div>
        ))}
      </div>
    </section>
  );
}
