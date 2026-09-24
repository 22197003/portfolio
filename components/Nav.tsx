"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Filmography" },
  { href: "/#press", label: "Press" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${
        solid
          ? "border-ivory/10 bg-ink/90 backdrop-blur-md"
          : "border-transparent bg-gradient-to-b from-ink/70 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-[82px] max-w-wrap items-center justify-between px-5 sm:px-8">
        <Link href="/" className="font-display text-[19px]">
          Garima Sharma
        </Link>
        <nav className="hidden gap-8 text-xs uppercase tracking-[0.12em] md:flex">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="opacity-80 transition-opacity hover:opacity-100">
              {l.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
