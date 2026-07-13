# Schema / Structured Data Findings

## Critical

### Zero structured data anywhere on the site
`grep -rn "application/ld+json" client/` returns no matches. There is no `Organization`, `WebSite`, `BreadcrumbList`, `RealEstateListing`/`Product`, `FAQPage`, or `LocalBusiness` schema anywhere, despite the project's own CLAUDE.md explicitly requiring JSON-LD for all of these where applicable.

This is the single highest-leverage, lowest-effort fix available in this audit:

| Page | Recommended schema | Why it's ready today |
|---|---|---|
| `/faq` | `FAQPage` | 9 clean, already-written Q&A pairs exist in `FAQPage.tsx` — this is a copy-paste-shaped win with no new content needed. Currently answers aren't even in the DOM by default (see `content.md` #4) — fix that first, then add the schema. |
| `/` (homepage) | `Organization`, `WebSite` | Establishes the business entity and enables Google's `SearchAction`/sitelinks search box. |
| `/villa-sungai`, `/villa-kailash` | `Product` (or `RealEstateListing` if using a specialized vocabulary) with `image`, `description`, `address`, `offers` | Property specs (bedrooms, land size, location) already exist in `VillaDetails.tsx` and can be mapped directly into schema properties. Note: the site currently displays no price per a deliberate product decision — schema `offers.price` should be omitted or the whole `offers` block skipped rather than a placeholder. |
| Every page | `BreadcrumbList` | Site is shallow (max depth 1) so breadcrumbs are simple to generate but still valuable for rich-result breadcrumb trails in SERPs. |

## Recommendation
Implement in this order (each step independently valid to ship):
1. `FAQPage` schema on `/faq` (highest ROI, content already exists).
2. `Organization` + `WebSite` on `/` .
3. `Product`/`RealEstateListing` on both villa pages.
4. `BreadcrumbList` sitewide.

Validate every addition against Google's Rich Results Test before shipping, per the project's own workflow rules.
