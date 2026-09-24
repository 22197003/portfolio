import type { Config } from "tailwindcss";

// Design tokens carried over 1:1 from the approved homepage prototype.
// Changing brand colors/fonts should only ever require editing this file.
const config: Config = {
  darkMode: ["class"], // toggled via <html data-theme="light"> — see ThemeToggle.tsx
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--ink) / <alpha-value>)",
        charcoal: "rgb(var(--charcoal) / <alpha-value>)",
        ivory: "rgb(var(--ivory) / <alpha-value>)",
        stone: "rgb(var(--stone) / <alpha-value>)",
        champagne: "rgb(var(--champagne) / <alpha-value>)",
        bark: "rgb(var(--bark) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-archivo)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        wrap: "1320px",
      },
    },
  },
  plugins: [],
};

export default config;
