# SEO Audit: Eco Villa Bali (localhost:60105)

**Audited:** `http://localhost:60105/` — local development build of the Eco Villa Bali site (production domain: ecovillabali.com, not directly audited here).
**Business type detected:** Boutique real estate — individual seller/broker with two active villa listings near Green School Bali, Sibang, Bali.
**Pages crawled:** 9 routes (`/`, `/villa-sungai`, `/villa-kailash`, `/location`, `/lifestyle`, `/green-school`, `/green-school-villa-bali`, `/faq`, `/inquire-now`), all discovered via the site's own footer navigation and `App.tsx` router — no crawl-depth or orphan-page issues.

---

## Executive Summary

### SEO Health Score: **30 / 100**

| Category | Score | Weight |
|---|---|---|
| Technical SEO | 35/100 | 22% |
| Content Quality | 45/100 | 23% |
| On-Page SEO | 30/100 | 20% |
| Schema / Structured Data | 0/100 | 10% |
| Performance (CWV) | 25/100 | 10% |
| AI Search Readiness (GEO) | 15/100 | 10% |
| Images | 35/100 | 5% |

The score is low, but the underlying cause is concentrated, not diffuse: this is a well-designed, recently-improved site (the broker-landing-page IA redesign was the right call) sitting on top of a client-side-only rendering architecture with zero structured data and zero crawler configuration files. Most of the individual fixes below are small and mechanical — the site doesn't need a rebuild, it needs the missing SEO plumbing.

### Top 5 Critical Issues
1. **Zero content in the initial HTML on every page.** The site is a pure client-rendered SPA (`<div id="root"></div>` and nothing else). Non-JS-executing crawlers — including the AI bots (GPTBot, ClaudeBot, PerplexityBot) this project's own CLAUDE.md says to explicitly welcome — see a blank page on every URL.
2. **No `robots.txt`, `sitemap.xml`, or `llms.txt`.** All three are required by this project's own CLAUDE.md and none exist; `curl` confirms all three URLs silently fall back to the SPA shell with a `200` status.
3. **Zero structured data anywhere.** No `Organization`, `WebSite`, `FAQPage`, or `Product`/listing schema — despite 9 ready-to-mark-up FAQ answers already written in `FAQPage.tsx`.
4. **Two pages (`/lifestyle`, `/green-school`) are 100% duplicate content of homepage sections**, and both also have zero `<h1>`, compounding into thin/duplicate pages that dilute the homepage's own ranking potential.
5. **Only 3 of 9 pages set a unique title/meta description** — even client-side. The other 6, including a page purpose-built as its own SEO landing page (`/green-school-villa-bali`), permanently show the homepage's title.

### Top 5 Quick Wins (small effort, real impact)
1. Add `FAQPage` JSON-LD to `/faq` — the 9 Q&A pairs already exist verbatim in the code; this is close to a copy/paste job.
2. Call the existing `usePageMeta` hook on the 6 pages that don't use it yet — the hook and pattern already exist in the codebase (`Home.tsx`, `VillaSungai.tsx`, `VillaKailash.tsx`).
3. Add `robots.txt`, `sitemap.xml`, and `llms.txt` to `client/public/` — three small static files, no app logic required.
4. Preload the two hero images (`<link rel="preload" as="image">`) and switch them from CSS `background-image` to an `<img>`/`<picture>` element so the browser's preload scanner can find them immediately.
5. Fix the FAQ accordion so answers exist in the DOM by default (even if visually collapsed) — unlocks both the content-quality and GEO findings in one change.

---

## Category Detail

Full evidence for each category lives in `findings/`:
- [`findings/technical.md`](findings/technical.md)
- [`findings/content.md`](findings/content.md)
- [`findings/on-page.md`](findings/on-page.md)
- [`findings/schema.md`](findings/schema.md)
- [`findings/performance.md`](findings/performance.md)
- [`findings/images.md`](findings/images.md)
- [`findings/geo.md`](findings/geo.md)
- [`findings/sxo.md`](findings/sxo.md)

## What Already Works (don't undo these)
- The recent homepage IA redesign (broker landing page introducing both villas equally) is the right structural decision for the site's actual search/comparison intent — see `findings/sxo.md`.
- 100% alt-text coverage across the homepage's 16 images.
- Clean, single-H1, logically-nested heading structure on every page that does have unique content (`/`, `/villa-sungai`, `/villa-kailash`, `/faq`, `/green-school-villa-bali`).
- The FAQ page's actual Q&A content is close to ideal GEO/snippet material once it's made visible and marked up.
- Sitewide footer navigation means every route is reachable in 1 click — no orphan pages, no crawl-depth problem.
- `<html lang="en">` correctly set; semantic `<nav>`/`<main>`/`<footer>` landmarks present on every page.

## Methodology & Limitations
- No Lighthouse/PSI run was performed (CLI unavailable in this environment without an install this audit did not perform). Performance findings are evidence-based from a real production build (`pnpm build`) plus browser Resource/Navigation Timing data, presented as lab-data proxies — not certified Lighthouse scores. Run PageSpeed Insights against the live production domain for certified numbers.
- This audit targeted the local dev server per the task's argument (`localhost:60105/`), not the live production domain (ecovillabali.com). Findings about missing files (robots.txt, sitemap.xml, llms.txt, security headers) and CSR-only rendering are architectural and will hold on production unless already addressed there — verify directly against the live domain before treating this as a duplicate of an existing audit.
- `dist/public/index.html`'s raw size (368KB) is inflated by a ~366KB inline script from `vite-plugin-manus-runtime`, almost certainly dev/builder-platform tooling rather than something served to real end users. JS bundle findings in `performance.md` exclude this and reflect actual application code.
- No DataForSEO, Google Search Console, GA4, or Moz/Bing credentials were available in this environment, so live SERP position, real-user CWV field data, and backlink profile data are not included. Re-run with those connectors for a fuller picture.
- No screenshots were persisted to `screenshots/` in this run (visual inspection was done directly in the live preview browser during the audit, not saved as files). Ask if you'd like desktop/mobile screenshots captured to disk as a follow-up.
