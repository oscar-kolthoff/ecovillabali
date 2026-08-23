# GEO Analysis — ecovillabali.com

_Generated 2026-08-23. Framing per Google's primary source: optimizing for AI
search is **still SEO**. Findings below are SEO fundamentals applied to
AI-search surfaces, not a separate discipline. Where a popular "GEO tactic"
lacks primary-source support (e.g. llms.txt as a ranking lever, chunking,
mention-farming), that is noted rather than credited._

## 1. GEO Readiness Score: 71 / 100

| Criterion | Weight | Score | Notes |
|---|---|---|---|
| Passage citability | 25% | 65 | Good facts + FAQ answers, but openings are narrative, not front-loaded |
| Structural readability | 20% | 85 | Clean H1→H2→H3, question headings, FAQ, short paragraphs |
| Multi-modal content | 15% | 55 | Strong images everywhere; **no video** (highest-value modality) |
| Authority & brand | 20% | 55 | Excellent on-page E-E-A-T; **weak off-page brand mentions** |
| Technical accessibility | 20% | 90 | Astro SSR, AI crawlers allowed, full schema, llms.txt, sitemap |

**Read:** technically excellent and well-structured; held back by the two
signals that correlate most with AI citation — off-page brand mentions and
video — plus answers that aren't front-loaded for extraction.

## 2. Platform Breakdown

| Surface | Score | Why |
|---|---|---|
| Google AI Overviews | 70 | Cites pages that already rank; site is technically clean and low-competition, but competitor out-publishes the informational queries |
| Google AI Mode (Gemini 3.5 Flash) | 62 | Broader pool, rewards freshness + entity authority — needs a refresh cadence and stronger entity signals |
| ChatGPT | 45 | Draws heavily on Wikipedia (47.9%) + Reddit (11.3%); brand absent from both |
| Perplexity | 45 | Reddit-dominated (46.7%); no community footprint yet |

> Google runs two citation engines. AI Overviews and AI Mode agree ~86% of the
> time but cite the same URL only ~14% of the time. Classic ranking feeds
> Overviews; AI Mode pulls a wider, fresher pool. Score and serve both.

## 3. AI Crawler Access — PASS

`robots.txt` explicitly welcomes the four crawlers that matter and blocks
nothing:

| Crawler | Status |
|---|---|
| GPTBot (OpenAI) | ✅ Explicit allow |
| ClaudeBot (Anthropic) | ✅ Explicit allow |
| PerplexityBot | ✅ Explicit allow |
| Google-Extended | ✅ Explicit allow |
| OAI-SearchBot, ChatGPT-User | ✅ Allowed via `User-agent: *` (the ChatGPT **search** crawlers, distinct from GPTBot) |
| CCBot, Bytespider, anthropic-ai, cohere-ai | ✅ Allowed via wildcard (training crawlers — block only if desired) |

**Optional:** name `OAI-SearchBot` and `ChatGPT-User` explicitly for clarity —
they power ChatGPT's live web citations and are worth an intentional allow.

## 4. llms.txt — Present & Well-Formed (no ranking weight)

`/llms.txt` exists and is a clean, accurate map of every key URL with good
descriptions. Keep it (low cost, good documentation). **But** per primary
sources (Mueller, Illyes, SE Ranking's 300k-domain study, OtterlyAI server-log
audits), no major AI search system currently uses `llms.txt` as a citation
lever. Treat it as housekeeping, not a growth play — and do not expect ranking
impact. This contradicts common community advice; defer to Google.

## 5. Brand Mention Analysis — the biggest gap

Brand mentions correlate ~3x more strongly with AI visibility than backlinks.
A live check for "Eco Village Sibang / Green School Bali villa" shows the
niche is **owned by a competitor**, not this site:

| Platform | ecovillabali.com | Reality |
|---|---|---|
| Wikipedia | ❌ (brand) | "Green School (Bali)" **is** a strong Wikipedia entity — associate with it, don't try to create a page for two villas (not notable) |
| YouTube | ❌ | Competitor **greenschoolvilla.com** publishes video content on this exact topic |
| Reddit | ❌ (thin) | r/bali and Green School parent communities discuss housing; no footprint here |
| LinkedIn | ⚠️ Partial | Owner (Oscar Kolthoff) linked via `sameAs`; brand itself minimal |

**greenschoolvilla.com** currently out-publishes this site on "What makes Eco
Village Sibang unique", "Housing near Green School Bali", location guides, and
a YouTube video page — exactly the informational queries AI engines cite.

> Authentic participation only. Google explicitly rejects manufactured
> "mention-farming." Earn mentions by being genuinely useful in real
> communities and by publishing citable content — not by seeding links.

## 6. Passage-Level Citability

Optimal citable block: **134–167 words**, self-contained, front-loaded —
~44% of AI citations come from the first 30% of a page.

**Current state:** the blog posts have genuine definitional answers (e.g. "What
is sustainable living?") but they sit in the **FAQ at the bottom**, while the
article openings are narrative ("For many families, the journey begins with
Green School Bali…"). That's engaging for humans but not extraction-ready.

**Fix (quick win):** open each post and each villa "Overview" with a 40–60 word
self-contained answer, then expand. Example rewrite for the sustainable-living
post's opening:

> _"Sustainable living in Eco Village Sibang means daily life built around
> walkability, community, natural building materials, and children's
> independence — not just solar panels. The village sits an 8-minute walk from
> Green School Bali in Sibang Kaja, and most residents are Green School
> families who wanted their home to reflect the same values."_ (52 words)

## 7. Server-Side Rendering — PASS

The site runs Astro with `output: "server"`. Every page's content, headings,
and JSON-LD are present in the initial HTML (verified), so the AI crawlers —
which do **not** execute JavaScript — receive the full content. This is the
single most common GEO failure, and this site passes it cleanly.

## 8. Top 5 Highest-Impact Changes

1. **Publish YouTube video** (villa walkthroughs, an Eco Village Sibang tour, a
   "walk to Green School" clip). Video is the strongest AI-citation correlate
   (~0.737) **and** a multi-modal signal (+156% selection). It simultaneously
   closes the competitor's biggest advantage. _High effort, highest impact._
2. **Front-load citable answers** — a 40–60 word direct answer under every blog
   H1 and each key H2, plus each villa Overview. _Quick win, drives the 44%
   first-30%-of-page citation share._
3. **Earn authentic brand mentions** — be genuinely useful in r/bali and Green
   School parent forums; get listed on community housing resources. _Medium
   effort, addresses the #1 weighted lever._
4. **Ship a quarterly refresh cadence** — update `dateModified`, refresh facts,
   and surface "Updated [month]" on-page. Content <3 months old is ~3x more
   citation-eligible; 6+ months stale drops out. _Quick, recurring._
5. **Add price to structured data + tighten entity facts** — now that asking
   prices are published, add an `Offer` (price/priceCurrency) to the villa
   schema, and reconcile bedroom/land/view facts across hero, schema, body, and
   llms.txt so AI extracts one consistent number. _Medium effort._

## 9. Schema Recommendations

- **Add `offers`** to each villa (Offer with `price`, `priceCurrency: "USD"`,
  `availability`). The residence type was chosen to avoid a missing-price
  warning while pricing was hidden; that rationale is now gone. Consider
  `RealEstateListing` for the villa pages.
- **Add `VideoObject`** once YouTube content exists (feeds AI + video carousels).
- **Strengthen entity linking** — reference the "Green School (Bali)" Wikipedia
  entity via `about`/`mentions` on relevant pages; keep `sameAs` on Person and
  extend it on Organization.
- **Keep** the existing Article + FAQPage + BreadcrumbList + Organization +
  Person + SingleFamilyResidence coverage — it is already strong.

## 10. Content Reformatting Suggestions

| Page | Change |
|---|---|
| All blog posts | Add a front-loaded 40–60 word answer under the H1; duplicate the key FAQ definitional answer near the top, not only at the bottom |
| Villa Overview sections | Lead with one self-contained sentence stating what the villa is, bedrooms, price, and distance to Green School |
| where-to-live / relocating posts | Ensure area comparisons are in **tables** (comparative data is highly citable) |
| Blog headers | Surface "Updated [month]" (currently only the published month shows) to signal recency |
| Cross-page facts | Reconcile Villa Kailash "3–4 bedrooms" (hero) vs "3/4-bedroom" (llms.txt) vs `numberOfBedrooms` (schema) into one consistent statement |

---

### What's already excellent (don't regress)

Astro SSR, explicit AI-crawler allows, comprehensive JSON-LD, visible author
byline with credentials ("By Oscar Kolthoff, former Eco Village Sibang resident
and Green School Bali parent"), visible dates, question-based headings, FAQ
sections, clean heading hierarchy, sitemap, canonical URLs, and the
recently-fixed trailing-slash canonicalization. The technical GEO foundation is
strong — the growth now comes from **video, front-loaded answers, and real
brand mentions**, not from more markup.

Sources: [greenschoolvilla.com](https://greenschoolvilla.com/the-ultimate-guide-to-housing-near-green-school-bali-which-area-is-right-for-you/), [Green School (Bali) — Wikipedia](https://en.wikipedia.org/wiki/Green_School_(Bali)), [Sibang villas — Alizaya Property](https://www.alizayaproperty.com/portfolio-collections/my-portfolio/sibang-exclusive-villas)
