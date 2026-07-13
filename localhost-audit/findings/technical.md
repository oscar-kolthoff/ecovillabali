# Technical SEO Findings

**Target audited:** `http://localhost:60105/` (local dev server). Production caveat noted where relevant — see report footnotes.

## Critical

### 1. No robots.txt
`GET /robots.txt` returns `200 text/html` — the SPA fallback shell, not a real robots.txt file. There is no `client/public/robots.txt` in the repo. Crawler access policy is entirely undefined (default-allow), and the project's own CLAUDE.md explicitly requires a robots.txt that allows `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`.

### 2. No sitemap.xml
`GET /sitemap.xml` returns the same SPA shell. No sitemap exists for any of the 9 indexable routes.

### 3. No llms.txt
`GET /llms.txt` returns the SPA shell. The project's own CLAUDE.md requires this file for AI-crawler discovery; it is entirely absent.

### 4. Fully client-rendered, zero content in initial HTML
Every route's raw HTML (pre-JavaScript) is identical:
```html
<div id="root"></div>
<script type="module" src="/src/main.tsx"></script>
```
No server-side rendering or static prerendering. Confirmed identical `<title>` across all 9 routes when fetched without JS execution (`curl`):
```
/                        -> Eco Villas for Sale Near Green School Bali
/villa-sungai            -> Eco Villas for Sale Near Green School Bali
/villa-kailash           -> Eco Villas for Sale Near Green School Bali
/location                -> Eco Villas for Sale Near Green School Bali
/lifestyle               -> Eco Villas for Sale Near Green School Bali
/green-school            -> Eco Villas for Sale Near Green School Bali
/green-school-villa-bali -> Eco Villas for Sale Near Green School Bali
/faq                     -> Eco Villas for Sale Near Green School Bali
/inquire-now             -> Eco Villas for Sale Near Green School Bali
```
Google can render JS (on a delayed second wave), but many AI/GEO crawlers referenced in this project's own CLAUDE.md (GPTBot, ClaudeBot, PerplexityBot) and simple text-scraping tools do not execute JavaScript. For those, every page on this site is blank and indistinguishable.

## High

### 5. No canonical tags
No `<link rel="canonical">` anywhere in the codebase (verified via grep across `client/`).

### 6. No Open Graph / Twitter Card tags
No `og:title`, `og:description`, `og:image`, or `twitter:card` meta tags anywhere. Link previews shared on WhatsApp, Facebook, LinkedIn, or iMessage will show no image and a generic/blank preview — a real conversion cost for a referral-driven property site.

### 7. Only 3 of 9 pages set a unique title/description — even client-side
`usePageMeta` (the hook that patches `document.title`/meta description after mount) is only called on `Home.tsx`, `VillaSungai.tsx`, and `VillaKailash.tsx`. The other 6 routes — `/location`, `/lifestyle`, `/green-school`, `/faq`, `/inquire-now`, `/green-school-villa-bali` (a page explicitly built as its own SEO landing page) — never update the title, so they permanently display the homepage's title and description, even in a browser with JS enabled.

## Medium

### 8. No security headers
`curl -I` shows no `Content-Security-Policy`, `X-Frame-Options`, `X-Content-Type-Options`, `Strict-Transport-Security`, or `Referrer-Policy` on any response. No `helmet` or equivalent middleware in `server/`.

### 9. Legacy `meta keywords` tag present
`index.html` still ships a `<meta name="keywords">` tag. Ignored by Google since ~2009; harmless but dead weight.

## What works
- Clean, human-readable URL structure (`/villa-sungai`, `/faq`, etc.), no query-string routing.
- `<html lang="en">` set correctly.
- Semantic landmarks present: single `<nav>`, single `<main>`, single `<footer>` on every page.
- All 9 routes are reachable within 1 click from the homepage via the footer (no orphan/crawl-depth problem).
