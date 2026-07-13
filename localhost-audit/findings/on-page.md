# On-Page SEO Findings

## Critical

### 1. Three routes have zero `<h1>`
Confirmed via rendered DOM inspection (`document.querySelectorAll('h1').length`):

| Route | H1 count |
|---|---|
| `/location` | **0** |
| `/lifestyle` | **0** |
| `/green-school` | **0** |
| `/faq` | 1 ("Frequently Asked Questions") |
| `/green-school-villa-bali` | 1 ("Villas Near Green School Bali") |
| `/`, `/villa-sungai`, `/villa-kailash` | 1 each |

`/location`, `/lifestyle`, and `/green-school` render only `<h2>`-level headings inside their respective components — there is no page-level H1 matching search intent for any of them.

### 2. 6 of 9 pages share one title/meta description
See `technical.md` finding #7. From an on-page perspective this means Google Search Console will very likely report these as duplicate title/duplicate meta description across the majority of the site's URLs.

## High

### 3. No Open Graph tags — see `technical.md` #6.

### 4. Dedicated SEO landing page has no contextual internal links pointing to it
`/green-school-villa-bali` was built as its own SEO-targeted page but is only linked from the sitewide footer — it receives no contextual, descriptive-anchor-text links from the two commercial pages that would benefit most from it (`/villa-sungai`, `/villa-kailash`, `/location`). Footer links share equity thinly across 8 destinations; in-content links from topically related pages carry more relevance signal.

## Medium

### 5. FAQ accordion missing `aria-expanded`
`FAQPage.tsx`'s toggle `<button>` has no `aria-expanded` or `aria-controls` attribute. Screen readers won't announce open/closed state. (Accessibility finding with an SEO side-effect: it also signals the content-visibility problem in `content.md` #4.)

## What works
- Single, well-matched H1 on the homepage: "Two Eco Villas Near Green School Bali" — directly reflects search intent for the site's core query.
- Villa Sungai / Villa Kailash each have their own accurate, unique H1 and hero copy.
- Footer provides sitewide navigation to every route (no orphaned pages, 1-click reachability).
