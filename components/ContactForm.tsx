"use client";

import { useState } from "react";

const inputClasses =
  "w-full rounded-sm border border-ivory/15 bg-transparent px-4 py-3 text-sm text-ivory placeholder:text-stone focus:border-champagne focus:outline-none";

export function ContactForm({ enquiryTypes }: { enquiryTypes: string[] }) {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  // NOTE: this does not send anywhere yet. Wire it up to a real endpoint —
  // e.g. an app/api/contact/route.ts handler, or a form service — before
  // launch. See README "Still to connect" section.
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (data.get("company-website")) return; // honeypot — bots fill hidden fields
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <p className="rounded-sm border border-champagne/40 px-5 py-4 text-sm text-champagne">
        Thank you — this is a placeholder confirmation. Connect the form to a real
        endpoint so enquiries actually arrive somewhere.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="text"
        name="company-website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <input name="name" required placeholder="Name" className={inputClasses} />
        <input name="email" type="email" required placeholder="Email" className={inputClasses} />
      </div>
      <input name="company" placeholder="Company / Organization" className={inputClasses} />
      <select name="projectType" required defaultValue="" className={inputClasses}>
        <option value="" disabled>
          Project Type
        </option>
        {enquiryTypes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
      <input name="projectName" placeholder="Project Name" className={inputClasses} />
      <textarea
        name="message"
        required
        rows={5}
        placeholder="Message"
        className={inputClasses}
      />
      <button
        type="submit"
        className="rounded-sm bg-ivory px-6 py-3.5 text-[13px] uppercase tracking-[0.08em] text-ink transition-colors hover:bg-champagne"
      >
        Send Enquiry
      </button>
    </form>
  );
}
