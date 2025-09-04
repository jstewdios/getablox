# Building Blox — Grow Blox Presale (Next.js + Netlify)

A beautiful, functional one‑page site focused on pre‑selling **Grow Blox**.

## Features
- Next.js (App Router, TypeScript) + Tailwind CSS
- Netlify-ready (`@netlify/plugin-nextjs`)
- Netlify Forms integration for the presale deposit waitlist
- Sections: Hero, Features, How It Works, Presale Form, FAQ

## Quick Start
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Deploy to Netlify
1. Create a new site from Git in Netlify and point it to this repo.
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add plugin: `@netlify/plugin-nextjs` (already in `netlify.toml`)

## Netlify Forms
The presale form uses Netlify Forms. Ensure **Build** has crawled the form once (first deploy) so submissions work from static pages.

---

Customize copy and pricing in `app/page.tsx`. Replace `/public/og.jpg` with a real OG image.
