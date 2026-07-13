# Action Plan — ecovillabali.com SEO Audit

## Phase 1: Critical Fixes (Week 1)

- [ ] **Fix `/villa-sungai` metadata** — its prerendered `<title>`, meta description, `<link rel="canonical">`, and server-rendered `<h1>` currently duplicate the homepage's. Update the SSG/prerender config so this route generates page-specific tags, matching the pattern already correct on `/villa-kailash`.
- [ ] **Add `/villa-sungai` to `sitemap.xml`** — currently absent despite being a primary nav page and listed in `llms.txt`.
- [ ] **Scope the SSR/SSG migration.** This is the single highest-leverage fix on the site: it resolves both the GEO invisibility (blank initial HTML on 8/9 routes) and the LCP failure (hero text blocked behind hydration), since they share the same root cause. Options: static export (Vite SSG plugin, Astro islands) or a prerendering layer in front of the existing React app. Start scoping this week even if implementation spans into Phase 2/3.

## Phase 2: High-Impact Improvements (Weeks 2-3)

- [ ] **Re-encode hero images** — `villa-sungai-hero.webp` (302KB) and `VS2.webp` (222.5KB) should come down to under 100KB (target SSIM > 0.95).
- [ ] **Audit the production build pipeline** — `data-loc` debug attributes (e.g. `client/src/components/Hero.tsx:71`) found in the live DOM suggest a non-optimized/dev build may be deployed. Confirm the deploy step runs a proper production build.
- [ ] **Fix root document caching** — change `Cache-Control: no-cache, no-store, must-revalidate` on the HTML document to something that allows back/forward cache (e.g. short `max-age` with revalidation).
- [ ] **Remove the deprecated `unload` event listener** in the main frame — trace to GTM, Clarity, or app code and replace with `pagehide`/`visibilitychange`.
- [ ] **Fix duplicate image loading** — `villa-interior.webp` and `villa-interior-960w.webp` both load for what should be a single image; fix the `srcset`/`picture` config.

## Phase 3: Content & Authority (Month 2)

- [ ] **Add sitewide schema:** `Organization` (with `sameAs` social links), `WebSite` with `SearchAction`, `BreadcrumbList` on every subpage, and `LocalBusiness`/`RealEstateAgent` given this is a Bali-based property business.
- [ ] **Move `FAQPage` schema onto `/faq`** — it currently lives only on the homepage.
- [ ] **Add an About/team section** with named, credentialed authorship and `sameAs` links to strengthen E-E-A-T.
- [ ] **Deep content-quality pass** on `/blog`, `/lifestyle`, `/green-school` — not completed in this audit; revisit once SSR ships since crawlable text may change.

## Phase 4: Monitoring & Iteration (Ongoing)

- [ ] **Fix contrast** on the "PHOTO GALLERY" label (currently 3.04:1, needs 4.5:1).
- [ ] **Add explicit `width`/`height`** to the one image missing them.
- [ ] **Re-fetch every route without JS execution** after the SSR fix ships to confirm content is now actually crawlable (this audit's own methodology — `curl`/plain HTTP fetch — is the fastest way to verify).
- [ ] **Re-run Lighthouse** on all 9 pages post-fix to confirm LCP lands under 1.8s and total weight lands under 500KB.
- [ ] **Manual accessibility pass:** keyboard-only navigation, VoiceOver/NVDA, 200%/400% zoom, Windows High Contrast Mode — Lighthouse's automated checks only caught the one contrast issue and don't cover the full WCAG 2.2 AA surface.
