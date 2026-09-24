import type { Metadata } from "next";
import { site } from "@/data/site";
import { PlaceholderImage } from "@/components/PlaceholderImage";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — Nepali actress, model and performer.`,
};

// Career-journey milestones. Only include an entry once it's verified —
// each item should be a fact, not a guess at sequencing.
const milestones = [
  { label: "Radio journalist, Radio Arpan", note: "Entertainment news hosting — early media career." },
  { label: "Move into modeling & music videos", note: "Over 150 music video appearances to date." },
  { label: "Television — Sakkigoni", note: "Recurring appearances on the popular Nepali show." },
  { label: "Feature film debut — London to Paris", note: "" },
  { label: "Best Debutant Actress, 2025", note: "" },
  { label: "Hrashwo Deergha released", note: "Directed by Chandra Pant." },
  { label: "Upcoming — Hunter", note: "Details to be confirmed." },
];

const skills = ["Acting", "Modeling", "Hosting / Media", "Public Speaking"];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-wrap px-5 pt-32 pb-24 sm:px-8 sm:pt-40">
      <span className="mb-3.5 block text-xs uppercase tracking-[0.1em] text-champagne">About</span>
      <h1 className="max-w-[16ch] font-display text-[38px] sm:text-[58px]">
        {site.fullName}
      </h1>

      <div className="mt-12 grid gap-10 sm:grid-cols-[0.85fr_1.15fr] sm:gap-16">
        <PlaceholderImage label="Portrait — placeholder" className="aspect-[4/5]" />
        <p className="max-w-[62ch] text-[15.5px] leading-relaxed text-ivory/75">{site.bio}</p>
      </div>

      <section className="mt-20">
        <h2 className="mb-8 font-display text-2xl sm:text-3xl">Career Journey</h2>
        <ol className="space-y-6 border-l border-ivory/15 pl-6">
          {milestones.map((m) => (
            <li key={m.label}>
              <p className="font-medium text-ivory">{m.label}</p>
              {m.note && <p className="mt-1 text-sm text-stone">{m.note}</p>}
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16">
        <h2 className="mb-6 font-display text-2xl sm:text-3xl">Skills</h2>
        <div className="flex flex-wrap gap-2.5">
          {skills.map((s) => (
            <span
              key={s}
              className="rounded-sm border border-ivory/15 px-3.5 py-1.5 text-sm text-ivory/80"
            >
              {s}
            </span>
          ))}
        </div>
        <p className="mt-4 text-xs text-stone">
          Confirm this list with Garima before publishing — only shown here as a starting draft.
        </p>
      </section>
    </div>
  );
}
