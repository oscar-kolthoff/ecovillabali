# AI Search Readiness (GEO) Findings

## Critical

### 1. No `llms.txt`
See `technical.md` #3. The project's own CLAUDE.md mandates this file; it does not exist.

### 2. Content is invisible to non-JS-executing AI crawlers
This is the compounding issue behind every other GEO gap: the site has zero server-rendered content (see `technical.md` #4). GPTBot, ClaudeBot, and PerplexityBot — the exact crawlers this project's CLAUDE.md instructs to explicitly allow via robots.txt — are commonly text/HTML fetchers that do not execute JavaScript. Today they would retrieve an empty `<div id="root"></div>` from every URL on the site. Even if a robots.txt were added tomorrow explicitly welcoming these bots, there would be nothing for them to read.

### 3. No crawler policy exists at all
Combined absence of `robots.txt`, `llms.txt`, and canonical tags means there is no explicit signal to any AI engine about which URLs are canonical, citable, or intended for indexing.

## High

### 4. No E-E-A-T / citation-worthiness signals
No author byline, credentials, or `sameAs` links exist anywhere (see `content.md` #3). AI engines weight source authority/expertise signals when deciding what to cite; there is currently nothing on this site establishing who is behind it.

### 5. Strong raw material is trapped, not exposed
The FAQ content (`content.md` — what works) is close to ideal GEO material: short declarative answers, concrete entities (Green School, Eco Village Sibang, PT PMA, "8-minute walk"), real buyer-phrased questions. Two things currently block it from being cited:
- It's not in the DOM by default (accordion answers only render when clicked — `content.md` #4).
- It has no `FAQPage` schema making the Q&A structure machine-legible (`schema.md`).

Fixing both (make answers server-visible / always in DOM, add FAQPage JSON-LD) would convert this site's strongest content asset into genuinely citable material with comparatively little work.

## What works
- Villa hero copy (post-latest edit) is declarative and entity-rich: specific bedroom/bathroom counts, "8 minute walk," named location ("Eco Village Sibang"). This is the right style for AI citation — it just needs to be reachable without executing JS.
