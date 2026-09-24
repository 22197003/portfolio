"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("gs-theme");
      if (stored === "light") {
        document.documentElement.setAttribute("data-theme", "light");
        setLight(true);
      }
    } catch {
      // localStorage unavailable — fall back to the default dark theme
    }
  }, []);

  function toggle() {
    const next = !light;
    setLight(next);
    if (next) document.documentElement.setAttribute("data-theme", "light");
    else document.documentElement.removeAttribute("data-theme");
    try {
      localStorage.setItem("gs-theme", next ? "light" : "dark");
    } catch {
      // ignore — theme just won't persist across visits
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      className="rounded-sm border border-ivory/25 px-3.5 py-2 text-[11.5px] uppercase tracking-wide text-ivory transition-colors hover:border-champagne hover:text-champagne"
    >
      {light ? "Light" : "Dark"}
    </button>
  );
}
