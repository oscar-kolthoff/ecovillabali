# Performance (Core Web Vitals) Findings

**Method note:** No Lighthouse CLI was available in this environment (`npx lighthouse` requires an install this audit did not perform). Findings below are evidence-based from a production build (`pnpm build`) and the browser's Resource/Navigation Timing APIs against the local dev server — treated as lab-data proxies, not authoritative Lighthouse scores. Treat the estimates as directional; run real Lighthouse/PageSpeed Insights against the live production domain to get certified scores, per the project's own workflow rules.

**Important caveat on the numbers below:** `dist/public/index.html` is inflated by a ~366KB inline script injected by `vite-plugin-manus-runtime` (sets `window.__MANUS_HOST_DEV__`) — this is almost certainly platform/builder tooling for the Manus dev environment, not something that ships on the real production domain. The JS bundle figures that follow exclude that inline script and reflect actual application code only.

## Critical

### 1. Production JS bundle is ~2.7x over this project's own 70KB budget
`pnpm build` output:
```
dist/public/assets/index-WvnK569p.js   654.35 kB │ gzip: 189.19 kB
```
189KB gzipped JS vs. the CLAUDE.md target of "stay under 70KB JS gzipped per page." Vite's own build warning confirms no code-splitting: *"Some chunks are larger than 500 kB after minification."* Everything (React, Framer Motion, all Radix UI primitives, TanStack Query, tRPC client, every page and component) ships in one chunk on every route, including simple pages like `/faq`.

### 2. Hero images are unoptimized and likely miss the LCP target
- `villa-sungai-hero.jpg`: 2048×1366, **554KB**, plain baseline-adjacent JPEG. This is the LCP element on both `/` and `/villa-sungai` — two of the most important pages on the site.
- `villa-kailash-hero.jpg`: 311KB (and mislabeled — `file` reports this is actually a WebP file saved with a `.jpg` extension).
- Both hero images are rendered as CSS `background-image` (inline `style`), not `<img>` — this means the browser's preload scanner cannot discover them from the initial HTML parse; they're only requested once CSS is computed, adding real delay to LCP.
- No `<link rel="preload">` for either hero image, no `fetchpriority="high"`, no responsive `srcset`/`sizes` anywhere in the codebase (`grep -rn "srcset" client/src` → 0 matches).

Combined, this is a strong anti-pattern against the project's own LCP target (≤1.8s, hard ceiling 2.0s) — particularly on the throttled 4G / mid-range Android profile the project's own guidelines call for testing against.

### 3. Other large images loaded on the homepage
Measured via `performance.getEntriesByType('resource')` (decoded body size) on `/`:
- `organic-living.jpg` — 605KB
- `green-school-3.jpg` — 397KB

Both are well above the project's own "under 100KB per hero image" and general compression targets, and both load on the homepage below the fold — still consuming bandwidth budget and contributing to total page weight.

## High

### 4. No responsive images anywhere
Zero `srcset`/`sizes` usage across the codebase. Every image ships its full source resolution to every device, including phones on constrained connections — a direct violation of the project's own sustainability rule ("never serve a 4K image into a 600px container").

### 5. 14 of 16 homepage images have no explicit `width`/`height`
Missing intrinsic dimensions on `<img>` tags is a primary cause of Cumulative Layout Shift; the project's own CLS ceiling is 0.05.

## What works
- TTFB is negligible on localhost (10ms) — not meaningful for real-world edge distance, but confirms no server-side bottleneck exists in the app logic itself.
- `font-display` and Google Fonts preconnect hints are present in `index.html` (`<link rel="preconnect">` for `fonts.googleapis.com`/`fonts.gstatic.com`).
