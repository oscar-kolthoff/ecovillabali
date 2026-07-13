# Action Plan: Eco Villa Bali SEO

Ordered by priority. Each item references the evidence file it comes from.

## Phase 1: Critical Fixes (Week 1)

- [ ] **Add `robots.txt`** to `client/public/robots.txt` explicitly allowing `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended` per this project's own CLAUDE.md. *(technical.md #1)*
- [ ] **Add `sitemap.xml`** listing all 9 routes. *(technical.md #2)*
- [ ] **Add `llms.txt`** at the site root per this project's own CLAUDE.md. *(technical.md #3, geo.md #1)*
- [ ] **Fix FAQ accordion so answers exist in the DOM by default** (collapse visually via CSS, not conditional rendering) — unblocks both content quality and GEO citability. *(content.md #4, geo.md #5)*
- [ ] **Add `FAQPage` JSON-LD schema to `/faq`** using the 9 existing Q&A pairs, once answers are DOM-visible. Validate with Google's Rich Results Test before shipping. *(schema.md)*
- [ ] **Call `usePageMeta` on the 6 pages missing it**: `/location`, `/lifestyle`, `/green-school`, `/faq`, `/inquire-now`, `/green-school-villa-bali`. Pattern already exists in `Home.tsx`/`VillaSungai.tsx`/`VillaKailash.tsx`. *(technical.md #7)*
- [ ] **Add a page-level `<h1>` to `/location`, `/lifestyle`, `/green-school`** matching each page's actual search intent. *(on-page.md #1)*
- [ ] **Resolve the `/lifestyle` and `/green-school` duplicate-content problem** — either give each page genuinely unique content beyond the homepage sections, or fold them back into homepage anchors and redirect the standalone routes. See `sxo.md` for the recommended "go deeper" direction (map/amenities for Location, day-in-the-life/testimonials for Lifestyle) rather than just deleting the pages. *(content.md #1, sxo.md)*

## Phase 2: High-Impact Improvements (Weeks 2–3)

- [ ] **Add Open Graph + Twitter Card tags** (`og:title`, `og:description`, `og:image`, `twitter:card`) sitewide, with per-page overrides via `usePageMeta` or an extension of it. *(technical.md #6)*
- [ ] **Add canonical `<link>` tags** to every page. *(technical.md #5)*
- [ ] **De-duplicate the villa detail H2**: give Villa Sungai and Villa Kailash distinct section headings in `VillaDetails.tsx` instead of the shared "Villa near Green School Bali – Eco & Family Living." *(content.md #2)*
- [ ] **Add contextual internal links to `/green-school-villa-bali`** from `/villa-sungai`, `/villa-kailash`, and `/location`, using descriptive anchor text. *(on-page.md #4)*
- [ ] **Add `Organization` + `WebSite` JSON-LD** to the homepage; add `Product`/listing schema to both villa pages (omit `offers.price` per the site's current no-pricing policy). *(schema.md)*
- [ ] **Preload + properly serve the two hero images**: switch from CSS `background-image` to `<img>`/`<picture>`, add `<link rel="preload" as="image" fetchpriority="high">` for the LCP image on each page, compress both under 100KB, rename the mislabeled `villa-kailash-hero.jpg` (actually WebP) correctly. *(performance.md #2, images.md)*
- [ ] **Add `aria-expanded`/`aria-controls` to the FAQ accordion buttons.** *(on-page.md #5)*

## Phase 3: Content & Authority (Month 2)

- [ ] **Add an author/agent byline with credentials** (name, license/verification status if applicable, `sameAs` links) sitewide — footer or a dedicated "About" block. This is the single missing E-E-A-T signal blocking both trust and AI citation likelihood. *(content.md #3, geo.md #4)*
- [ ] **Compress and convert the full image library to WebP/AVIF** — 26MB across ~58 files, several 600KB–980KB gallery images. Target: hero images <100KB, thumbnails <30KB. Add `srcset`/`sizes` for responsive delivery. *(images.md)*
- [ ] **Code-split the JS bundle.** Current production bundle is 189KB gzipped (2.7x this project's own 70KB budget) shipped as a single chunk on every route. Split by route at minimum; consider lazy-loading Framer Motion/Radix pieces not needed above the fold. *(performance.md #1)*
- [ ] **Add explicit `width`/`height` to the 14 homepage images currently missing them**, to close the CLS risk. *(performance.md #5)*

## Phase 4: Monitoring & Iteration (Ongoing)

- [ ] **Add security headers** (`Content-Security-Policy`, `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`) via `helmet` or equivalent Express middleware. *(technical.md #8)*
- [ ] **Remove the legacy `<meta name="keywords">` tag** — ignored by Google, no functional benefit. *(technical.md #9)*
- [ ] **Run Lighthouse/PageSpeed Insights against the live production domain** (not just this local dev build) to get certified Core Web Vitals numbers and track them over time. *(performance.md — methodology note)*
- [ ] **Re-audit after Phase 1–2 land** to confirm the health score moves and no regressions were introduced (e.g. Lighthouse accessibility/SEO scores, Rich Results Test validation for any new schema).
