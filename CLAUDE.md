# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Important: Non-standard Next.js version

This project uses **Next.js 16.2.0** with **React 19.2.4** — versions that may have breaking changes from training data. Before writing any Next.js-specific code, read the relevant guide in `node_modules/next/dist/docs/`. Heed deprecation notices in compiler output.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run lint     # ESLint
```

There are no tests in this project.

## Architecture

Single-page portfolio site. All content lives in one route (`src/app/page.tsx`) composed from six section components in `src/components/`.

### Component split
- **Server components** (no interactivity): `Masthead`, `Projects`, `About`, `Speaking`, `Contact`
- **Client components** (`'use client'`):
  - `Hero` — live date display via `useEffect` + `useState` (avoids SSR/hydration mismatch; default state `'——'`)
  - `ScrollRevealInit` — mounts an `IntersectionObserver` on all `.reveal` elements; rendered in `layout.tsx` so it runs on every page; returns `null`

### Styling
All CSS is in `src/app/globals.css` — one flat global stylesheet, no CSS modules or Tailwind. Class names map directly to the HTML design (`.reveal`, `.pill`, `.talk-card`, etc.).

### Fonts
Three Google Fonts loaded via `next/font/google` in `layout.tsx`, exposed as CSS variables on `<html>`:
- `--font-playfair` → referenced by `--serif` token in CSS
- `--font-mono` → referenced by `--mono` token
- `--font-source-serif` → referenced by `--body-serif` token

### Design tokens
Defined as CSS custom properties in `:root` inside `globals.css`. Key tokens: `--ink`, `--newsprint`, `--amber`, `--rule`, `--rule-strong`.

### Scroll reveal pattern
Elements get class `reveal` in JSX. `ScrollRevealInit` adds class `visible` when they enter the viewport. CSS transitions on `.reveal` / `.reveal.visible` handle the animation. `transitionDelay` inline styles stagger sibling cards.

### Content with placeholders
The speaking section and contact links contain placeholder text (`[Conference Name]`, `[your@email.com]`, etc.) — these are intentional and should be preserved until the user fills them in.
