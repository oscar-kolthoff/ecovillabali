# Tradeoffs

Decisions where a project pillar (performance, sustainability, privacy) was
knowingly compromised, with the reasoning, so the team can revisit later.

## Microsoft Clarity session recording (added 2026-07-15)

**What:** Microsoft Clarity (`clarity.ms/tag/x73tmcq99l`) loaded via
`src/layouts/Layout.astro`.

**Pillar tension:**
- *Sustainability / performance:* adds ~25KB of third-party JavaScript plus a
  session-recording Web Worker. Mitigated by lazy-loading on first user
  interaction (or a 5s fallback), so it stays off the LCP/INP critical path,
  same pattern as gtag.js. It still adds transfer weight and a third origin.
- *Privacy:* Clarity records session replays and sets cookies. It currently
  loads without a consent gate, matching the existing Google Analytics setup.
  Under GDPR/ePrivacy (NL), analytics/recording cookies generally require prior
  opt-in consent. **Open item:** if a cookie-consent banner is introduced,
  both gtag and Clarity must be gated behind it.

**Why accepted:** owner explicitly requested Clarity re-enabled for behavioural
insight (it previously surfaced the Villa Kailash discovery problem that drove
the homepage redesign).

**CSP impact:** `src/middleware.ts` now allows `https://www.clarity.ms`
(script), `https://*.clarity.ms` + `https://c.bing.com` (connect/img), and
`worker-src blob:` for the recording worker.
