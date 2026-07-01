# Sushma — QA Automation Portfolio

A modern, single-page portfolio built with **Next.js 14 (App Router)**,
**Tailwind CSS**, and **Framer Motion**. Dark "ink navy" palette with a refined
amber/gold + soft-indigo accent. Fully responsive, accessible, and ready to
deploy on Netlify.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
```

> Tip: don't run `npm run build` while `npm run dev` is live — they share the
> `.next` folder. Stop dev first.

## Where to edit things

Everything lives in two files:

| What | File |
| --- | --- |
| **All copy, links, projects, experience, skills** | `src/data/content.ts` |
| **Colors & fonts (single theme file)** | `src/theme/theme.ts` |

### Remaining placeholders

Most content is filled in. Two values still point at placeholders in
[`src/data/content.ts`](src/data/content.ts):

| Item | Field | Notes |
| --- | --- | --- |
| **Contact form** | `formspreeEndpoint` | Create a form at [formspree.io](https://formspree.io) and paste the endpoint |
| **Portfolio URL** | (resume link) | Swap `REPLACE-WITH-PORTFOLIO-URL` for the live site URL after deploy |

### Assets

Live in [`public/assets/`](public/assets/):

- `headshot.jpg` — portrait (~800×1000, 4:5), shown in the hero.
- `resume_ATS.pdf` — the résumé served by the **Download CV** button.

## Theme

`src/theme/theme.ts` is the single source of truth for colors and fonts. It feeds
`tailwind.config.ts` (Tailwind color tokens) and is mirrored as CSS variables in
`src/app/globals.css`. Change a hex there and it propagates app-wide.

Fonts: **Sora** (display), **Inter** (body), **JetBrains Mono** (accents) — all
loaded via `next/font`.

## Accessibility & motion

- Semantic HTML, visible keyboard focus, skip-to-content link, alt text.
- `prefers-reduced-motion` is fully respected (animations collapse to instant;
  no SSR/hydration mismatch).

## Project structure

```
src/
  app/            layout.tsx · page.tsx · globals.css
  components/
    layout/       Navbar · Footer · ScrollProgress
    sections/     Hero · About · Experience · WhatIDo · Skills · Projects · Contact · VideoModal · Headshot
    ui/           Reveal · SectionHeading · Counter · TypingText · Icons
  data/content.ts  ← all content
  theme/theme.ts   ← colors + fonts
```

## Deploy to Netlify

1. Push this repo to GitHub (done).
2. Go to [netlify.com](https://www.netlify.com) and choose **Add new site → Import
   an existing project → Deploy with GitHub**, then select the
   **sushma-portfolio** repo.
3. Netlify auto-detects Next.js — keep the default build settings and click
   **Deploy**.
4. The site goes live at `https://<name>.netlify.app`.
5. Rename it under **Site configuration → Change site name** to
   `sushma-portfolio` → `https://sushma-portfolio.netlify.app`.

> Next.js on Netlify may need the `@netlify/plugin-nextjs` plugin. Netlify
> usually adds it automatically; if a build fails, install it and add a
> `netlify.toml` with `[[plugins]] package = "@netlify/plugin-nextjs"`.

Every push to `main` triggers an automatic redeploy.
