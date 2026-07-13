# Content, GEO & Schema Findings — ecovillabali.com

## Critical: Site is 100% client-side rendered — near-zero content in initial HTML

Fetching any page with a plain HTTP client (no JS execution — the same access pattern used by GPTBot, ClaudeBot, PerplexityBot, and Bing's crawler in most configurations) returns almost no visible text:

- Homepage body text before JS runs: **47 characters** (`"Sustainable Family Homes Near Green School Bali"` — just the H1)
- Every other route (`/villa-kailash`, `/location`, `/lifestyle`, `/green-school`, `/green-school-villa-bali`, `/faq`, `/blog`, `/inquire-now`): `<div id="root"></div>` — **zero characters**, completely blank until JavaScript loads and hydrates

This directly contradicts the rule that content must be server-rendered or statically generated into the initial HTML. Google can generally render JS (with delay and cost), but:
- **AI crawlers largely do not execute JavaScript.** GPTBot, ClaudeBot, and PerplexityBot fetch and parse raw HTML. On this site, that means they see a blank page for 8 of 9 routes and one 8-word sentence on the 9th.
- This undermines every other GEO investment already made (the excellent `llms.txt`, the JSON-LD schema, the FAQ content) — none of it is reachable by a crawler that doesn't run JS, because the content that references it is also JS-rendered.

**This is the highest-leverage fix on the entire site.** Moving to static generation / SSR (Next.js static export, Astro, or a prerendering layer like Vite SSG / Prerender.io in front of the existing React app) would simultaneously fix this GEO blind spot and the LCP performance problem in `performance.md`, since both share the same root cause: content that only exists after full JS hydration.

## What Works (GEO)

- **`llms.txt` is present, well-structured, and accurate** — correctly lists both villas (Villa Sungai and Villa Kailash) as distinct pages with descriptions, plus all 6 key pages and a location block. This is genuinely above-average GEO practice.
- **robots.txt allows all crawlers**, including AI bots, with no restrictive rules.
- **JSON-LD is server-rendered** (present in raw HTML, not JS-injected) on the homepage and `/villa-kailash`: `RealEstateListing`/`SingleFamilyResidence` with address, offer, and nearby-amenity data, plus a 5-question `FAQPage` block with genuinely useful, declarative, entity-rich answers (specific materials, walk times, room counts) — exactly the kind of concrete, citable content GEO rewards. The irony is this good content is invisible to non-JS crawlers on every route except where it's baked into the two pages checked.

## Schema Gaps

| Page | Schema present |
|---|---|
| `/` (homepage) | `RealEstateListing`, `SingleFamilyResidence`, `FAQPage` |
| `/villa-kailash` | `RealEstateListing`, `SingleFamilyResidence` |
| `/villa-sungai` | None (serves homepage's HTML — see `technical.md`) |
| `/location`, `/lifestyle`, `/green-school`, `/green-school-villa-bali`, `/faq`, `/blog`, `/inquire-now` | **None** |

Missing sitewide:
- **`Organization`** — no entity definition for "Eco Villa Bali" itself (name, logo, sameAs social links, contact point)
- **`WebSite`** with `SearchAction` — no sitelinks search box eligibility
- **`BreadcrumbList`** — none of the subpages declare breadcrumb structure
- **`LocalBusiness`** (or `RealEstateAgent`) — this is a local Bali-based property business; a `LocalBusiness`/`RealEstateAgent` type with `address`, `geo`, and `areaServed` would strengthen local + GEO signals considerably
- **`FAQPage` schema is on the homepage but not on `/faq`** — the dedicated FAQ page has no structured data at all, while the homepage duplicates FAQ content instead of the FAQ page owning it

## Content Quality Notes

- Homepage copy is concrete and specific once rendered: "8-minute walk," "3 bedrooms," "mud, teak, bamboo, and grass," named community ("Eco Village Sibang") — good E-E-A-T signal density (specificity, verifiability) *if it were crawlable*.
- No visible author byline, "About" page, or credentials/`sameAs` links were found in the rendered homepage — worth adding for E-E-A-T, especially since real estate content benefits from a named, accountable source.
- Full content-depth review of `/blog`, `/lifestyle`, and `/green-school` was not completed in this pass (see Scope note in the main report) — recommend a follow-up content-quality pass once the SSR/prerender fix ships, since post-fix crawlable text may differ from what a headless browser renders today.
