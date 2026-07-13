# Technical SEO Findings — ecovillabali.com

## Critical

**Villa Sungai page is a duplicate-content/indexability trap.** `/villa-sungai` returns HTTP 200, is a real top-level nav destination (equal billing to Villa Kailash), and is listed in `llms.txt` — but its prerendered `<head>` is identical to the homepage's:
- `<title>Eco Villa Bali | Your Home Near Green School</title>` (homepage's title, not Villa Sungai's)
- `<link rel="canonical" href="https://ecovillabali.com/">` — this actively tells Google the canonical version of `/villa-sungai` is the homepage, which will suppress it from the index entirely
- Server-rendered `<h1>Sustainable Family Homes Near Green School Bali</h1>` (homepage's H1, not page-specific)

Compare to `/villa-kailash`, which correctly prerenders its own title (`Villa Kailash | Eco Family Villa in Sibang Kaja Bali`) and canonical (`https://ecovillabali.com/villa-kailash`). Villa Sungai appears to have been left out of whatever prerender/SSG step generates per-route metadata for the other 8 pages.

**`/villa-sungai` is missing from `sitemap.xml`.** The sitemap lists `villa-kailash` under "Villa Pages" but has no equivalent entry for `villa-sungai`, despite it being the site's primary listing (its schema is what's embedded on the homepage) and being referenced in `llms.txt`.

## High

**Root HTML document is served with `Cache-Control: no-cache, no-store, must-revalidate`.** This is why the bf-cache (back/forward cache) audit fails — Chrome will not cache a document whose main resource is `no-store`. It also means every repeat visit re-downloads the full 105KB document with a fresh 480–790ms round trip. Static assets (`/assets/*.js`, `*.css`) are correctly hashed and cached for 90 days — only the HTML itself needs a sane cache policy (e.g. `no-cache` alone, or short `max-age` with revalidation, not a blanket `no-store`).

**Deprecated `unload` event listener detected in the main frame**, contributing to the bf-cache block and flagged by Chrome as a deprecated API slated for removal. Likely from a third-party script (GTM, Clarity) or an app-level cleanup handler — needs tracing and replacing with `pagehide`/`visibilitychange`.

## Medium

**No canonical inconsistency elsewhere** — all other 7 routes (`/villa-kailash`, `/location`, `/lifestyle`, `/green-school`, `/green-school-villa-bali`, `/faq`, `/blog`, `/inquire-now`) return unique, correct `<title>` and `<link rel="canonical">` tags server-side. This is good practice and should be the template Villa Sungai's route is fixed to match.

**robots.txt** is minimal and permissive (`User-agent: *` / `Allow: /`), which does cover AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) by default since there are no disallow rules. Fine as-is; no changes required unless the client wants to explicitly opt out specific bots.

**www → apex redirect** (`www.ecovillabali.com` → `https://ecovillabali.com/`) is a clean 301, single hop. No issue.

## What Works

- Clean single-hop 301 redirect from www to apex
- `sitemap.xml` referenced correctly in `robots.txt`
- 8 of 9 routes have correct, unique, server-rendered title + canonical tags
- Static asset caching (90-day max-age, content-hashed filenames) is correctly configured
- HTTPS via Cloudflare with HSTS (`strict-transport-security: max-age=31536000; includeSubDomains; preload`)
