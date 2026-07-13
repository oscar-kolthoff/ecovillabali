# Accessibility & Images Findings — ecovillabali.com

## Accessibility (Lighthouse: 95/100)

**Medium: Color contrast failure.** The "PHOTO GALLERY" eyebrow label (`span.text-accent` in `Gallery.tsx:153`) has a contrast ratio of 3.04:1 against its background (#d86d38 on #f1f3ea), below the 4.5:1 required for body/small text under WCAG 2.2 SC 1.4.3. Darken the accent color or increase weight/size to qualify as "large text" (3:1 threshold).

No other automated accessibility violations were detected by Lighthouse. Not yet manually verified: keyboard-only navigation, screen reader pass (VoiceOver/NVDA), 200%/400% zoom, and Windows High Contrast Mode — recommend a manual pass per the Definition of Done before sign-off, since Lighthouse's automated checks only cover a subset of WCAG success criteria.

## Best Practices (81/100)

- **Deprecated `unload` event listener** in the main frame — see `technical.md` for detail and bf-cache impact.
- No other Best Practices violations flagged (no mixed content, no console errors, CSP/XSS check passed).

## Images

Rendered DOM audit (20 `<img>` elements on homepage):
- **0 missing `alt`, 0 empty `alt` on non-decorative images** — alt text is present and descriptive (e.g. "Villa Sungai Hero," "Kitchen & Dining") rather than filenames. Good.
- All images use WebP format.
- 19 of 20 images have `loading="lazy"` correctly applied (the 1 exception is the above-the-fold hero image, correctly set to `loading="eager"` — this is right, not a bug).
- 1 image missing explicit `width`/`height` attributes — should be added to guarantee zero CLS is maintained as content changes.
- Two hero images (`villa-sungai-hero.webp` 302KB, `VS2.webp` 222.5KB) are 2–3x over the 100KB sustainability budget for hero images — see `performance.md` for the full byte-weight breakdown and the duplicate-size-loading issue on interior photos.

## What Works
- Alt text quality is genuinely good — descriptive, not keyword-stuffed, not filenames
- WebP adopted sitewide with responsive `-960w` variants for some images
- Lazy-loading correctly scoped to below-the-fold images only
