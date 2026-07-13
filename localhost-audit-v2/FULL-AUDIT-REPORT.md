# SEO & Technical Audit — localhost:3000 (Eco Villa Bali, local Astro build)

**Date:** 2026-07-13
**Scope:** All 11 pages (home, 2 villa pages, location, lifestyle, buyer's guide, FAQ, inquire-now, blog index + 2 posts). Lighthouse run against a real production build (`pnpm build` + node server), not the dev server.

## Overall SEO Health Score: 83 / 100

| Category | Weight | Score |
|---|---|---|
| Technical SEO | 22% | 80 |
| Content Quality | 23% | 90 |
| On-Page SEO | 20% | 92 |
| Schema / Structured Data | 10% | 80 |
| Performance (CWV) | 10% | 65 |
| AI Search Readiness (GEO) | 10% | 90 |
| Images | 5% | 55 |

This is a large jump from the live production site (58/100, audited earlier this session) and the original pre-rewrite local build (30/100). The SSR rewrite, schema work, content-deduplication pass, and trust-building additions done during this session addressed nearly everything structural. What's left is concentrated in two places: **image weight from the site's original (pre-session) photography**, and **two real bugs** that Lighthouse surfaced against the production build specifically.

## Top 5 Critical/High Issues

1. **Google Analytics is silently broken in production.** The CSP set in `middleware.ts` blocks the inline `gtag('config', ...)` script that initializes GA — confirmed via browser console errors on every page. The site has been collecting zero analytics data in production.
2. **Pinch-to-zoom is disabled sitewide** (`maximum-scale=1` in the viewport meta tag) — a direct WCAG 1.4.4 violation, and a real usability problem for low-vision users on mobile.
3. **19 of the site's original images are still raw JPG**, totaling ~4.3MB — everything added *during* this session was converted to WebP, but the pre-existing hero and detail photography (villa-sungai-hero.jpg, villa-interior.jpg, villa-kailash-hero.jpg, villa-kitchen.jpg, and 15 more) never was.
4. **LCP is 3.9–4.5s** against the 1.8s target (2.1–2.5x over), directly downstream of #3.
5. **Color contrast failure on every page's eyebrow label** ("PHOTO GALLERY," "THE LOCATION," etc.) — 3.04:1 against a 4.5:1 requirement. It's one shared CSS class, so it's one fix for the whole site.

## Quick Wins

1. Remove `maximum-scale=1` from the viewport meta tag
2. Fix the CSP/inline-script conflict blocking Google Analytics
3. Darken the `text-accent` color (or bump size/weight) to fix contrast sitewide in one change
4. Fix `llms.txt`'s stale "rice field views" → "village view" for Villa Kailash
5. Change the `h4` feature labels in `VillaDetails.tsx` to `h3` to fix the heading-order skip

## Technical SEO

See [`findings/technical.md`](findings/technical.md).

robots.txt, sitemap.xml, and llms.txt are all present, accurate (bar one stale phrase), and explicitly welcome AI crawlers by name. Every page is fully server-rendered with unique titles, canonicals, and descriptions. Lighthouse SEO score is a clean 100/100 on every page tested. The issues here are two real functional bugs (analytics blocked, zoom disabled) rather than missing SEO fundamentals — those fundamentals are all in place.

## Performance

See [`findings/performance.md`](findings/performance.md).

| | Home | Villa Sungai | Blog Post 1 |
|---|---|---|---|
| Performance score | 87 | 83 | 78 |
| LCP | 3.9s | 4.5s | 4.5s |
| CLS | 0 | 0 | 0 |
| Total weight | 973 KiB | 1,206 KiB | 561 KiB |

CLS and TBT are both essentially perfect — this is a pure image-weight problem, not a JavaScript or layout-stability problem, which makes it the more tractable category of performance issue to fix.

## Accessibility

See [`findings/accessibility.md`](findings/accessibility.md). 85-90/100. One critical (zoom-disable), two medium (heading order, dead social links), one sitewide-but-single-fix (contrast).

## Content, Schema & GEO

See [`findings/content-schema-geo.md`](findings/content-schema-geo.md). This is the site's strongest area: zero duplicate content (verified via full cross-page diff this session), comprehensive schema coverage, and content that's fully crawlable without JavaScript — which the live production site still is not.

## Action Plan

See [`ACTION-PLAN.md`](ACTION-PLAN.md).
