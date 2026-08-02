# Shubham Badhe — Portfolio

A production-ready personal portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion. All content is sourced directly from the résumé — nothing is fabricated.

## Stack

- **Next.js 14** (App Router, `next/font`, `sitemap.ts`, `robots.ts`)
- **TypeScript**
- **Tailwind CSS** — custom "blueprint" design system (see `tailwind.config.ts`)
- **Framer Motion** — scroll reveals, page transitions, micro-interactions
- **lucide-react** — icons

## Design direction

A blueprint/schematic aesthetic for a backend-focused .NET/API engineer: deep ink-navy in dark mode, cool paper-grey in light mode, amber + cyan accent pair, hairline grid backdrop, corner-bracket "annotation" frames, and a signature hero element — a mock API console rendering the profile as JSON.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Project structure

```
app/                 # App Router pages, layout, metadata, sitemap, robots
components/           # Section + UI components
lib/data.ts           # All résumé content in one typed source of truth
public/                # Profile photo, résumé file, favicon, robots.txt
```

## Editing content

Everything on the page is pulled from **`lib/data.ts`**. Update your role, skills,
experience, projects, education, or achievements there — the UI updates
automatically everywhere it's referenced.

To swap the headshot or résumé file, replace `public/profile.jpg` and
`public/Shubham_Badhe_Resume.docx` (keep the same filenames, or update the
paths in `lib/data.ts`).

## Deploying to Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Next.js** (auto-detected). No extra configuration needed.
4. Deploy.

Update the `siteUrl` constant in `app/layout.tsx`, `app/sitemap.ts`, and
`app/robots.ts` with your production domain once it's live, so Open Graph
tags and the sitemap resolve correctly.

## Accessibility & performance notes

- Semantic landmarks, skip-to-content link, visible focus rings, `prefers-reduced-motion` respected.
- Images served via `next/image` (AVIF/WebP, responsive `sizes`).
- Fonts loaded via `next/font` (self-hosted, zero layout shift, `display: swap`).
- Color contrast checked in both themes.
