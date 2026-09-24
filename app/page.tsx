import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { AboutPreview } from "@/components/AboutPreview";
import { Reel } from "@/components/Reel";
import { FilmographyStrip } from "@/components/FilmographyStrip";
import { PressIndex } from "@/components/PressIndex";
import { SocialGrid } from "@/components/SocialGrid";
import { ContactCTA } from "@/components/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <AboutPreview />
      <Reel />
      <FilmographyStrip />
      <PressIndex />
      <SocialGrid />
      <ContactCTA />
    </>
  );
}
