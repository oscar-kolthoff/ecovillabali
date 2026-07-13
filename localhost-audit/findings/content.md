# Content Quality Findings

## Critical

### 1. Two indexable pages are 100% duplicate content of the homepage
- `/green-school` renders only the `<GreenSchool />` component — the exact same JSX, same copy, same 4 highlight cards, same "Perfect for Green School Families" block that already appears verbatim inside `/` (the homepage). Confirmed via code: both `pages/Home.tsx` and `pages/GreenSchoolPage.tsx` import and render the identical component with no props/variation.
- `/lifestyle` does the same with `<Lifestyle />` — identical to the Lifestyle section already embedded in the homepage.
- Both pages **also have zero `<h1>`** (see On-Page findings) and share the generic homepage title/meta.

Net effect: two full pages that add no unique indexable value, cannibalize the homepage's own ranking potential for "Green School Bali" / "sustainable lifestyle Bali" queries, and waste crawl budget.

### 2. Duplicate H2 across the two commercially critical villa pages
`VillaDetails.tsx` uses the identical heading `"Villa near Green School Bali – Eco & Family Living"` for **both** Villa Sungai and Villa Kailash (`components/VillaDetails.tsx:11` and `:18`). These are the two highest commercial-intent pages on the site and they open their property-details section with word-for-word identical headings.

## High

### 3. Zero E-E-A-T / authorship signals anywhere
No author byline, credentials, "About the agent," license/verification info, or `sameAs` links to a real person or business entity exist anywhere in the codebase (verified by grep across all pages/components). For a real-estate transaction site — where trust signals directly affect conversion and AI engines' willingness to cite the source — this is a meaningful gap.

### 4. FAQ answers are absent from the DOM until clicked
`FAQPage.tsx` renders each answer with `{openIndex === index && <div>...}` — i.e. the answer `<div>` does not exist in the DOM at all unless that specific FAQ is expanded, and `openIndex` starts at `null` (nothing open by default). All 9 well-written, intent-matched answers are invisible to anything that reads the DOM without clicking each accordion — including most crawlers and AI engines evaluating passage-level citability.

## What works
- The FAQ page itself (`/faq`) is genuinely strong: 9 questions phrased in real buyer language ("Can foreigners buy a villa near Green School Bali?", "How far is Eco Village Sibang from Green School Bali?"), each answered in 2–3 declarative sentences with concrete entities (Green School, Eco Village Sibang, PT PMA, 8-minute walk). This is close to ideal GEO/snippet material — it just needs to be visible and marked up (see Schema findings).
- Villa Sungai and Villa Kailash have distinct, specific hero copy and description paragraphs (post-latest edit) — no longer templated against each other at the headline/hero level.
- Heading hierarchy within any single rendered page is clean: one H1, logically nested H2/H3, no skipped levels.
