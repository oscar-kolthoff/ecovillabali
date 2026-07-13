# SEO Health Audit — ecovillabali.com

**Date:** 2026-07-13
**Business type:** Local real estate / property developer — small marketing site (9 pages) selling two eco villas near Green School Bali
**Scope:** Full crawl of all 9 sitemap-adjacent pages, Lighthouse mobile audits (2 pages), rendered-DOM audit, robots.txt/sitemap/llms.txt review, schema validation

## Overall SEO Health Score: 58 / 100

| Category | Weight | Score |
|---|---|---|
| Technical SEO | 22% | 55 |
| Content Quality / GEO | 23% | 55 |
| On-Page SEO | 20% | 70 |
| Schema / Structured Data | 10% | 50 |
| Performance (CWV) | 10% | 35 |
| Images | 5% | 65 |

## Top 5 Critical Issues

1. **`/villa-sungai` is a duplicate-content trap.** It's a top-level nav page, but its server-rendered title, meta description, canonical tag, and H1 are all copied verbatim from the homepage. The canonical tag explicitly tells Google "this page's real version is the homepage" — actively suppressing it from the index.
2. **The entire site is client-side rendered.** Fetched without JavaScript execution (the way GPTBot, ClaudeBot, and PerplexityBot typically crawl), 8 of 9 pages return completely blank HTML, and the homepage returns just 47 characters. This makes the site's genuinely good `llms.txt` and JSON-LD investments moot for most AI crawlers.
3. **LCP is 6.3–7.2 seconds** against a 1.8s target — 3.5–4x over. Root cause: the hero text is the LCP element, but it only appears after full JS hydration instead of being in the initial HTML.
4. **Page weight is 1,523KB**, 3x the 500KB sustainability budget — driven by two oversized hero images (302KB, 222.5KB) and a JS bundle that shows signs of being an unminified/development build (`data-loc` debug attributes present in production).
5. **`/villa-sungai` is missing from `sitemap.xml`** despite being one of only two property listings on the site and being correctly listed in `llms.txt`.

## Top 5 Quick Wins

1. Add `/villa-sungai` to `sitemap.xml`
2. Fix `/villa-sungai`'s prerendered `<title>`, canonical, and H1 to be page-specific
3. Re-encode the two oversized hero images to under 100KB each
4. Change root document `Cache-Control` off `no-store` to restore back/forward cache
5. Fix the 3.04:1 contrast failure on the "PHOTO GALLERY" label

---

## Technical SEO

See [`findings/technical.md`](findings/technical.md) for full detail.

The site's crawl surface is small and clean where it's been configured correctly: robots.txt is permissive to all bots (including AI crawlers), the sitemap references the right URL, HTTPS/HSTS is solid, and 8 of the 9 routes carry correct, unique, server-rendered title and canonical tags. The exception — `/villa-sungai` — is a critical bug: it silently inherits the homepage's entire `<head>`, which is the kind of thing that causes a page to vanish from search results without any error message. The root HTML document is also served `no-store`, which blocks the browser's back/forward cache and forces a full re-fetch on every back-navigation.

## Content Quality / GEO

See [`findings/content-geo-schema.md`](findings/content-geo-schema.md) for full detail.

This is the most consequential finding in the audit. The team has clearly invested in GEO fundamentals — a well-written `llms.txt`, server-rendered JSON-LD with specific, citable facts (walk times, materials, room counts) — but none of it can be reached by a crawler that doesn't execute JavaScript, because the surrounding page content only exists after hydration. Fixing this (moving to SSR/SSG) is the single highest-leverage change available: it resolves the GEO blind spot and the LCP performance failure at the same time, since both trace back to content that's invisible until JS runs.

Schema coverage has gaps beyond the rendering issue: no `Organization`, `WebSite`, `BreadcrumbList`, or `LocalBusiness` schema exists anywhere, and the `FAQPage` schema lives on the homepage rather than on the dedicated `/faq` page.

## Performance (Core Web Vitals)

See [`findings/performance.md`](findings/performance.md) for full detail.

| | Homepage | /villa-sungai |
|---|---|---|
| Lighthouse Performance | 68 | 70 |
| LCP | 7.2s | 6.3s |
| Total weight | 1,523 KiB | 1,487 KiB |

Both audited pages fail LCP by a wide margin and carry roughly 3x the sustainability budget in page weight. CLS is a genuine bright spot at 0 on both pages — layout stability isn't the problem here, delivery speed is.

## Accessibility & Images

See [`findings/accessibility-images.md`](findings/accessibility-images.md) for full detail.

Lighthouse Accessibility scores 95/100 with a single contrast failure. Image hygiene is generally good (descriptive alt text throughout, WebP format, correct lazy-loading), let down mainly by two oversized hero images and one instance of the same photo loading at two sizes simultaneously.

## Scope Note

This audit covered all 9 pages reachable from the sitemap/nav (a small, hand-built site, not a 500-page crawl). Lighthouse was run against 2 representative pages (homepage, villa-sungai) rather than all 9, given they share the same build/framework and the performance profile is expected to be consistent. A deeper content-quality read of `/blog`, `/lifestyle`, and `/green-school` was not completed and is recommended as a follow-up once the SSR/prerender fix ships, since crawlable text may change materially after that fix.

## Action Plan

See [`ACTION-PLAN.md`](ACTION-PLAN.md) for the phased, prioritized plan.
