# Performance / Core Web Vitals Findings — ecovillabali.com

Measured via Lighthouse (mobile, throttled) against the live site.

## Homepage (`/`)
| Metric | Value | Target | Status |
|---|---|---|---|
| Performance score | 68/100 | 95+ | FAIL |
| LCP | 7.2s | ≤1.8s | CRITICAL FAIL |
| FCP | 2.4s | ≤1.0s | FAIL |
| Speed Index | 6.2s | — | FAIL |
| TTI | 7.3s | — | FAIL |
| TBT | 20ms | ≤100ms | PASS |
| CLS | 0 | ≤0.05 | PASS |
| TTFB | 790ms (root doc) | ≤600ms | FAIL |
| Total transferred | 1,523 KiB | ≤500 KiB | FAIL (3x budget) |

## `/villa-sungai`
| Metric | Value |
|---|---|
| Performance score | 70/100 |
| LCP | 6.3s |
| Total transferred | 1,487 KiB |
| TTFB | 480ms |

## Root Cause: LCP Breakdown (homepage)
- Time to first byte: 838ms
- Element render delay: **1,729ms**
- LCP element is a `<p>` of hero body text in `Hero.tsx`, blocked behind full JS hydration — the text is not visible until the JS bundle parses, executes, and React renders, even though it's plain text with no dependency on interactivity.

## Heaviest Requests (homepage, 32 total requests, 1,523 KiB transferred)
1. `villa-sungai-hero.webp` — **302 KB** (hero image; budget is 100KB for hero images — 3x over)
2. `VS2.webp` — **222.5 KB**
3. Google Tag Manager script — 179.2 KB (third-party)
4. `villa-interior.webp` — 126.3 KB **and** `villa-interior-960w.webp` — 98.1 KB (same image loaded at two sizes — 224KB combined for one photo)
5. Main JS bundle (`index-*.js`) — 125.7 KB gzipped (budget: 70KB gzipped JS per page — 80% over)
6. Document HTML — 104.9 KB
7. `villa-kitchen-960w.webp` — 64.0 KB
8. `villa-sungai-hero-mobile.webp` — 60.8 KB
9. 3x Google Fonts woff2 files (DM Sans + 2 Playfair Display weights) — ~137 KB combined, no `<link rel="preload">` detected for the above-the-fold font
10. `proxy-*.js` — 35.9 KB
11. Microsoft Clarity session-recording script — 25.2 KB (third-party)
12. Stylesheet — 20.0 KB

## Findings

**Critical: LCP is 3.5–4x the hard ceiling on both audited pages.** The hero text (the LCP element) waits behind full client-side hydration instead of being present in the server-rendered HTML. This is the single highest-impact fix available — see `content.md` for the CSR root cause shared with the SEO/GEO findings.

**High: Hero images are 2–3x over the sustainability budget.** `villa-sungai-hero.webp` (302KB) and `VS2.webp` (222.5KB) should be re-compressed/re-encoded (AVIF first, tighter WebP quality) to land under 100KB without visible quality loss.

**High: Main JS bundle exceeds the 70KB-gzipped budget by ~80%.** Lighthouse also flags **224 KiB of unused JavaScript** — code-splitting per route and tree-shaking would recover most of this. `data-loc` debug attributes found throughout the rendered DOM (e.g. `data-loc="client/src/components/Hero.tsx:71"`) strongly suggest the production deployment is serving a **non-production / development build** rather than a minified, optimized build — this alone could account for much of the excess JS weight and slow hydration.

**Medium: Duplicate image delivery.** The same interior photo loads at both native and `-960w` sizes on the same view (126.3KB + 98.1KB), suggesting a `srcset`/`picture` misconfiguration serving more than one candidate rather than the single correct one for the viewport.

**Medium: Third-party scripts add ~204 KB** (GTM 179KB + Clarity 25KB) with no `preconnect` hints observed for either origin.

**Low: Root document `Cache-Control: no-store`** also disables the browser back/forward cache — see `technical.md`.

## What Works
- Zero layout shift (CLS 0) — image dimensions and layout are stable
- Low Total Blocking Time (20ms) — main thread isn't the bottleneck, network/render delay is
- Static assets are Brotli/gzip-compressed and served from Cloudflare's CDN with long cache lifetimes
