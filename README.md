# Garima Sharma — Portfolio Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS. This is the codebase
version of the approved homepage design (charcoal/ivory/champagne palette,
Fraunces + Archivo typography, light/dark toggle).

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/               Routes (App Router): / , /about , /work , /contact
components/        UI components, one concern each
data/              Content — edit these files to add real projects/bio,
                   no component changes needed
  types.ts         Shared Project type
  site.ts          Bio, tagline, credentials, social links
  films.ts         Films + television
  musicVideos.ts   Music video archive (2 verified entries — scale this
                   file up to the full 150+ once the list is supplied)
  press.ts         Press / media mentions
```

## Design tokens

All colors and fonts are defined once, in `tailwind.config.ts` +
`app/globals.css` (`:root` CSS variables). Changing the palette or adding a
new brand color should only ever require touching those two files.

Light/dark: `<html data-theme="light">` is toggled by `ThemeToggle.tsx` and
persisted in `localStorage`. Every color in the palette is a CSS variable,
so nothing else needs to change when new components are added.

## What's real vs. placeholder right now

- **Verified content** (from public research + confirmed by you): bio facts
  in `data/site.ts`, film/TV titles in `data/films.ts`, the 2 confirmed
  music video titles in `data/musicVideos.ts`, the Nari Magazine press
  mention in `data/press.ts`.
- **Explicitly marked as unconfirmed**: any field not listed in a project's
  `verifiedFields`, plus its `needsConfirmation` note — these render as
  visible "to be confirmed" text on the site so nothing false is implied.
- **Every image/video is a placeholder** (`PlaceholderImage.tsx`) with a
  visible caption. None of Garima's real photos are in this codebase yet —
  I don't have image rights or files to include.

## Still to connect before this can go live

1. **Real images** — hero photo, portraits, film stills, MV thumbnails,
   press assets. Drop them in `public/images/` and swap the
   `PlaceholderImage` calls for `next/image`.
2. **Contact form backend** — `ContactForm.tsx` currently only simulates a
   submission. Wire it to a real endpoint (an `app/api/contact/route.ts`
   route, or a service like Formspree/Resend) plus real spam protection.
3. **Full music video list** — only 2 of 150+ are in `data/musicVideos.ts`.
   Bulk-import the rest from a spreadsheet once available — the data shape
   won't need to change.
4. **Domain** — replace the placeholder `https://www.garimasharma.com` URL
   in `app/layout.tsx`, `app/sitemap.ts` and `app/robots.ts`.
5. **Showreel & Instagram** — no photos/videos are downloaded or rehosted
   anywhere in this codebase (copyright — see project brief Rule 25).
   Instead:
   - Set `site.showreelYouTubeUrl` to a real YouTube link and the reel
     section auto-switches from placeholder to a live embed
     (`YouTubeEmbed.tsx`, `lib/youtube.ts`).
   - Add real public post URLs to `site.featuredInstagramPosts` and the
     "On Instagram" section renders live official embeds
     (`InstagramEmbed.tsx`, using Instagram's own embed.js widget — nothing
     is downloaded).
   Both only work with official/rights-cleared uploads — never a
   re-uploaded copy of someone else's video.

## Content rule

Per the project brief: never fabricate a credit, award, date or quote.
Every new item in `data/` should either be fully verified, or carry a
`needsConfirmation` note like the existing entries — that note is what
makes it show a "to be confirmed" flag on the site instead of silently
implying something unverified.
