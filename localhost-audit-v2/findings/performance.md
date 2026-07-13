# Performance — Production Build

Measured with Lighthouse (mobile) against a real `pnpm build` + `node ./dist/server/entry.mjs` production server — **not** the dev server, which reports meaningless numbers (60+ second LCP) due to unbundled/unminified module serving.

| | Home | Villa Sungai | Blog Post 1 |
|---|---|---|---|
| Performance score | 87 | 83 | 78 |
| LCP | 3.9s | 4.5s | 4.5s |
| FCP | 1.8s | 1.8s | 3.1s |
| CLS | 0 | 0 | 0 |
| TBT | 10ms | 10ms | 20ms |
| TTI | 4.8s | 5.3s | 4.5s |
| Total weight | 973 KiB | 1,206 KiB | 561 KiB |

## Root Cause: Unoptimized Legacy Images

Every image added during this session was converted to WebP and compressed. The site's **original** photography never was:

| File | Size | Used on |
|---|---|---|
| `villa-sungai-hero.jpg` | 321 KB | Hero (8 pages), homepage cards |
| `villa-interior.jpg` | 234 KB | Villa Sungai details (3 pages) |
| `villa-kailash-hero.jpg` | 185 KB | Hero, homepage cards (3 pages) |
| `villa-kitchen.jpg` | 179 KB | Villa Sungai details (3 pages) |
| +15 more (VS2–VS12, BPS*) | ~2.4 MB combined | Galleries |

**Total: ~4.3MB across 19 actively-used files.** Based on this session's actual compression results on comparable jungle/villa photography (70-88% size reduction typical), converting these to WebP would likely bring total page weight under the 500KB budget on every page and should drop LCP under 2s.

## Other Findings

- **Render-blocking resources**: 840ms (home) to 2,140ms (blog post) of blocking time before first paint, per Lighthouse's `render-blocking-insight`. Candidates: the synchronous Google Fonts `<link rel="stylesheet">` and the GTM `<script async>` tag competing for the critical path.
- **~94KB unused JavaScript** per page, consistent across all three pages tested.
- **TBT is excellent (10-20ms)** and **CLS is 0** everywhere — the site's interactivity and layout stability are not the problem; image weight and render-blocking are.

## What Works

- Static assets are correctly cached (90-day max-age) with content-hashed filenames
- Fonts are self-hosted-adjacent via Google Fonts with `preconnect` hints
- TBT/CLS are both already at or near the ideal (0 and near-0ms)
- No JavaScript execution bottleneck — this is purely a network-weight problem, which is the easier category of problem to fix
