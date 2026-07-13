# Image Optimization Findings

## Critical

### No modern image formats
`client/public/images/`: 28 `.jpg` files (plus an entire `villa-kailash/` subfolder of ~30 more JPGs) and exactly **one** `.webp`. Zero AVIF anywhere. Total folder size: **26MB**. The project's own rule calls for "AVIF first, WebP fallback, raster as last resort" — the site currently does the opposite of that priority order.

### Oversized source files
Largest files found (`du -h`, uncompressed on-disk):
```
976K  villa-kailash/10.Semi-basement-yoga2.jpg
976K  villa-kailash/03.Kitchen1.jpg
932K  villa-kailash/02.Openliving1.jpg
908K  villa-kailash/01.Overviewvilla2.jpg
904K  villa-kailash/01.poolandsundeck.jpg
840K  villa-kailash/05.IndoorTVroom.jpg
824K  community.jpg
```
These are gallery images (`GalleryKailash.tsx`) served at full resolution with no resizing/compression pipeline. The project's own budget: "under 100KB per hero image, under 30KB for thumbnails." Every one of these misses that target by 8–30x.

## High

### No responsive `srcset`
See `performance.md` #4 — zero images anywhere ship device-appropriate sizes.

### `villa-kailash-hero.jpg` is a mislabeled file
`file villa-kailash-hero.jpg` reports "RIFF ... Web/P image data" — the file is actually WebP content saved with a `.jpg` extension. This works today because browsers sniff content rather than trust extensions, but it's fragile (breaks any tooling that branches on file extension, e.g. a future `<picture>`/AVIF conversion pipeline) and should be renamed and correctly re-exported.

## What works
- **100% alt-text coverage** on every image checked on the homepage (16/16) — genuinely good, and increasingly rare in practice. Keep this standard for any new images added.
- Lazy loading is applied where it matters: below-the-fold gallery and card images use `loading="lazy"`; the above-the-fold hero/first-card images are correctly left eager. This is the right pattern — just needs pairing with actual file-size reduction and `srcset`.
