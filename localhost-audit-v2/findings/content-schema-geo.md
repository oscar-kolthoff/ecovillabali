# Content Quality, Schema & GEO

## Content Quality — Strong

All 11 pages carry unique, substantial, fully server-rendered content:

| Page | Title length | Meta desc length | H1 | Schema types (beyond sitewide Organization/Person/WebSite) |
|---|---|---|---|---|
| `/` | 42 | 166 | Two Eco Villas Near Green School Bali | — |
| `/villa-sungai` | 53 | 150 | Living Near Green School Bali | Product, BreadcrumbList, FAQPage (5 Q&A) |
| `/villa-kailash` | 56 | 150 | Your Home Near Green School Bali | Product, BreadcrumbList, FAQPage (5 Q&A) |
| `/location` | 51 | 165 | Living near Green School Bali | BreadcrumbList |
| `/lifestyle` | 38 | 170 | What Living in Eco Village Sibang... | BreadcrumbList, FAQPage (3 Q&A) |
| `/green-school-villa-bali` | 50 | 198* | Villas Near Green School Bali | BreadcrumbList, FAQPage (5 Q&A) |
| `/faq` | 42 | 146 | Frequently Asked Questions | BreadcrumbList, FAQPage (9 Q&A) |
| `/inquire-now` | 45 | 135 | Request Pricing & Availability | BreadcrumbList |
| `/blog` | 53 | 159 | Guides for Families Relocating to Bali | BreadcrumbList |
| `/blog/complete-guide...` | 60 | 177* | Relocating to Bali for Green School?... | BlogPosting, BreadcrumbList, FAQPage (8 Q&A) |
| `/blog/sustainable-living...` | **68** ⚠ | 164 | Sustainable Living Near Green School Bali... | BlogPosting, BreadcrumbList, FAQPage (6 Q&A) |

\* Slightly over the 155-char meta description budget (198 and 177 chars) — will truncate in SERPs. Low priority, but both `/green-school-villa-bali` and blog post 1's descriptions could be trimmed.

**Duplicate content: none found.** A full cross-page text-diff (every page, every FAQ question, every paragraph) run during this session found zero meaningful duplication — the three issues found earlier in this project (repeated hero paragraph, homepage/lifestyle section overlap, duplicate FAQ question) have all been fixed and stayed fixed.

**One-H1-per-page: confirmed on all 11 pages.**

## Schema — Good, Two Gaps Remain

Every page carries `Organization` (with `founder` Person — Oscar), `WebSite`, and `Person` schema from the shared layout, plus page-appropriate `Product`, `FAQPage`, `BreadcrumbList`, or `BlogPosting` schema. This is comprehensive for a site this size.

Still missing:
- **`WebSite` has no `SearchAction`** — not eligible for a sitelinks search box (site doesn't have on-site search, so low priority).
- **No `LocalBusiness`/`RealEstateAgent` schema** — this is a Bali-based property business; adding this type with `address`/`geo`/`areaServed` would strengthen local + GEO signals. Flagged in the original live audit; still open.

## GEO / AI Search Readiness — Strong

- `llms.txt` present and accurate, except: **"rice field views" for Villa Kailash is stale** (see `technical.md`) — everywhere else on the site now correctly says "village view."
- `robots.txt` explicitly names GPTBot, ClaudeBot, PerplexityBot, Google-Extended as allowed.
- Every page's content is in the initial server-rendered HTML — verified this session by diffing raw HTML text length against the rendered DOM on all 11 pages; they matched. This is the opposite of the live production site's current state (still 100% client-rendered, near-zero initial HTML per the earlier live audit).
- 27+ FAQ question/answer pairs across the site, all with matching `FAQPage` schema, all visible in raw HTML without JS — strong citability for AI answer engines.
