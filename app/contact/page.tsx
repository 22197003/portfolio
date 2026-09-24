import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Professional enquiries for Garima Sharma — film, television, music video, modeling and brand collaborations.",
};

const enquiryTypes = [
  "Film",
  "Television",
  "Music Video",
  "Modeling",
  "Brand Campaign",
  "Event",
  "Media",
  "Other Collaboration",
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-wrap px-5 pt-32 pb-24 sm:px-8 sm:pt-40">
      <span className="mb-3.5 block text-xs uppercase tracking-[0.1em] text-champagne">
        Booking &amp; Enquiries
      </span>
      <h1 className="max-w-[16ch] font-display text-[38px] sm:text-[58px]">
        Let&rsquo;s work together.
      </h1>
      <p className="mt-5 max-w-[60ch] text-[15px] text-ivory/70">
        For film, television, music video, modeling, brand campaigns, events and media
        enquiries, please use the form below.
      </p>

      <div className="mt-12 max-w-xl">
        <ContactForm enquiryTypes={enquiryTypes} />
      </div>
    </div>
  );
}
