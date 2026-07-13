# Action Plan — Eco Villa Bali (local build)

## Phase 1: Critical Fixes (this week)

- [ ] **Fix the CSP/Google Analytics conflict.** Add a nonce or hash to the inline `gtag('config', ...)` script in `Layout.astro`, or restructure so GA initializes without an inline block. Verify by checking the browser console for CSP errors after the fix, and confirming GA receives a pageview in real-time reports.
- [ ] **Remove `maximum-scale=1`** from the viewport meta tag in `Layout.astro`.
- [ ] **Fix the sitewide color-contrast failure** on `text-accent` eyebrow labels (affects every page's section label, not just "PHOTO GALLERY").

## Phase 2: High-Impact Improvements (next 1-2 weeks)

- [ ] **Convert the 19 remaining original JPGs to WebP**: `villa-sungai-hero.jpg`, `villa-kailash-hero.jpg`, `villa-interior.jpg`, `villa-kitchen.jpg`, and the rest (~4.3MB total). Based on this session's compression results on similar photography, expect 70-85% size reduction. This should bring LCP under 2s and total page weight under 500KB on every page.
- [ ] Re-run Lighthouse against the production build after the image conversion to confirm LCP and page-weight targets are met.
- [ ] Investigate the 840ms-2,140ms of render-blocking time (`render-blocking-insight`) — likely the synchronous Google Fonts stylesheet and/or GTM script tag on the critical path.

## Phase 3: Medium-Priority Fixes

- [ ] Change the `h4` feature-label headings in `VillaDetails.tsx` to `h3` (fixes the H2→H4 heading-order skip).
- [ ] Fix or remove the footer's Instagram/Facebook links (`href="#"`, no `aria-label`) — add real profile URLs and accessible names, or remove until real profiles exist.
- [ ] Update `llms.txt`: change Villa Kailash's "rice field views" to "village view" to match the rest of the site.
- [ ] Shorten blog post 2's title tag (currently 68 chars) to under 60.
- [ ] Trim the meta descriptions on `/green-school-villa-bali` (198 chars) and blog post 1 (177 chars) to under 155.

## Phase 4: Low Priority / Cleanup

- [ ] Delete the 6 unused images in `public/images` (~1.2MB): `cultural-immersion-...jpg`, `green-school-4.jpg`, `jungle-nature.jpg`, `mindful-community-...jpg`, `villa-bamboo.jpg`, `villa-pool.jpg`.
- [ ] Add `LocalBusiness`/`RealEstateAgent` schema for stronger local + GEO signals.
- [ ] Manual accessibility pass: keyboard-only navigation, screen reader (VoiceOver/NVDA), 200%/400% zoom — this audit's checks were automated (Lighthouse/axe-equivalent) and don't cover the full WCAG surface per the project's own Definition of Done.

## Already Fixed This Session (context, not action items)

- Full SSR rewrite — every page's content is now in the initial HTML (was 0-47 characters on live)
- villa-sungai/villa-kailash duplicate-metadata bug (was inheriting homepage's title/canonical) — fixed
- All duplicate content issues found and fixed (hero-paragraph repeats, homepage/lifestyle overlap, duplicate FAQ question)
- Blog added: 2 posts + listing, all with FAQPage/BlogPosting schema
- "Meet Oscar & Iris" trust section added to inquire-now + both villa pages
- Missing closing CTAs added to `/location` and `/lifestyle`
- Speculative "Green Corridor" content trimmed to remove unverifiable third-party names
- Multiple factual inconsistencies fixed (bedroom counts, distance claims, pool/view descriptions)
