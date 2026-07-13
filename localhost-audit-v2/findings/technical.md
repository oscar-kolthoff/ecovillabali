# Technical SEO & Bugs — localhost:3000 (production build tested on :4322)

## Critical

**Google Analytics is completely non-functional in production.** `Layout.astro` loads GTM async, then configures it with an inline `<script is:inline>` block (`gtag('js', ...); gtag('config', 'G-XW73MEVXWG')`). The production CSP set in `middleware.ts` is `script-src 'self' https://www.googletagmanager.com` with no `'unsafe-inline'`, nonce, or hash — so Chrome blocks the inline config script outright. Confirmed via Lighthouse's `errors-in-console` audit: *"Executing inline script violates the following Content Security Policy directive..."* on every page. **The site owner is currently collecting zero analytics data in production**, despite GA appearing configured. Fix: add a nonce/hash for this specific inline script, or move the config into the async-loaded external script via `gtag/js?id=...&l=dataLayer` initialization pattern that doesn't need an inline block.

**Pinch-to-zoom is disabled sitewide.** `Layout.astro` sets `<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">`. `maximum-scale=1` prevents users from zooming in on mobile — a direct WCAG 1.4.4 (Resize Text) violation, flagged by Lighthouse on every page audited. Remove `maximum-scale=1` (keep `initial-scale=1.0`).

## High

**19 originally-shipped images are still raw JPG, not WebP/AVIF** — `villa-sungai-hero.jpg` (321KB), `villa-kailash-hero.jpg` (185KB), `villa-interior.jpg` (234KB), `villa-kitchen.jpg` (179KB), plus 15 more (VS2–VS12, BPS*, etc.), totaling **~4.3MB**. These predate this session's work — every image added today was converted to WebP, but the site's original photography never was. This is now the single largest lever left for performance: Lighthouse's `image-delivery-insight` estimates 368–503KB of savings per page just from these.

**LCP is 3.9–4.5s against the 1.8s target** (production build, not dev server) — 2.1x to 2.5x over. Directly downstream of the JPG issue above: the hero image is the LCP element on villa pages, and it's serving an unoptimized 321KB/185KB JPG.

**Render-blocking requests cost 840ms–2,140ms depending on page** (Lighthouse `render-blocking-insight`). Likely the synchronously-loaded Google Fonts stylesheet and the GTM script tag — both currently block rendering before any content paints.

## Medium

**Heading hierarchy skips a level on villa pages.** `VillaDetails.tsx` goes from `<h2>` (section heading) straight to `<h4>` for each feature label ("3 Bedrooms", "2 Bathrooms", etc.) with no `<h3>` in between. Flagged by Lighthouse's `heading-order` audit (moderate impact, WCAG 1.3.1). Fix: change the feature-label headings from `h4` to `h3`.

**Footer social links are accessibility dead ends.** Both Instagram and Facebook icons in `Footer.astro` use `href="#"` with no `aria-label` — Lighthouse's `link-name` audit flags them as having no discernible accessible name, and functionally they don't link anywhere. Either add real profile URLs + `aria-label`, or remove them until real profiles exist.

**~94KB of unused JavaScript per page** (Lighthouse `unused-javascript`), consistent across all three pages audited — likely shared framework/vendor code not yet tree-shaken per route.

## Low

**`llms.txt` still says "rice field views" for Villa Kailash**, inconsistent with the meta description and `VillaDetails.tsx` (both correctly say "village view" after this session's fix). Missed when the meta description was corrected earlier.

**Blog post 2's title tag is 68 characters** — "Sustainable Living Near Green School Bali: Inside Eco Village Sibang" — over the 60-character budget (will truncate in Google's SERP).

**6 completely unused images sit in `public/images`** (~1.2MB): `cultural-immersion-...hdrgainmap.jpg`, `green-school-4.jpg`, `jungle-nature.jpg`, `mindful-community-...hdrgainmap.jpg`, `villa-bamboo.jpg`, `villa-pool.jpg`. Dead weight in the deployed bundle.

## What Works

- robots.txt explicitly welcomes GPTBot, ClaudeBot, PerplexityBot, Google-Extended by name
- sitemap.xml and llms.txt both present, cover all 11 pages correctly (bar the one land-view inconsistency above)
- All 11 pages are fully server-rendered — confirmed 0-character-loss between raw HTML and rendered DOM text on every page
- Every page has a unique, correct `<title>`, canonical URL, and meta description (all others within the 140–155 char budget)
- CLS is 0 on every page audited — no layout instability
- Lighthouse SEO score: **100/100** on all three pages audited (home, Villa Sungai, blog post 1)
