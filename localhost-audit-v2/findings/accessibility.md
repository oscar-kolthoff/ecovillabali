# Accessibility

Lighthouse Accessibility: 85/100 (home, Villa Sungai) / 90/100 (blog post 1).

## Critical

**Pinch-zoom disabled sitewide** (`maximum-scale=1` in the viewport meta tag) — WCAG 1.4.4 violation. See `technical.md` for the fix.

## Medium

- **Heading hierarchy skip** on villa pages: H2 → H4 with no H3 (`VillaDetails.tsx` feature labels). WCAG 1.3.1.
- **Footer social icons have no accessible name** and are dead links (`href="#"`, no `aria-label`).
- **Color contrast failure**, confirmed still present: the `text-accent` eyebrow labels (e.g. "PHOTO GALLERY", and by extension every other page's eyebrow span using the same `text-accent` class — "THE LOCATION", "THE LIFESTYLE", etc.) render at 3.04:1 against their background, below the 4.5:1 required for this text size. This is a **shared utility class**, so the fix (darken `--accent` or increase text size/weight past the "large text" 3:1 threshold) fixes every instance sitewide in one change, not just Gallery's copy.

## What Works

- 0 missing/empty alt text across every image checked this session
- Semantic landmarks present (`nav`, `main`, `footer`)
- `lang="en"` set correctly
- Focus states and keyboard operability were not regression-tested in this pass — recommend a manual keyboard/screen-reader pass before calling this done, per the project's own Definition of Done
