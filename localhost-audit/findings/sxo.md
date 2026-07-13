# Search Experience (SXO) Assessment

## Business type & intent match
Detected type: **boutique real estate — individual seller/broker with two active listings** (not a listing aggregator, not a local-service/GBP business). Primary query intent: commercial investigation ("eco villa for sale near Green School Bali") and navigational/branded once a buyer is already engaged.

## Page-type fit
The homepage was recently redesigned from a single-property page into a landing page introducing both villas equally, specifically to fix a discovered problem (Villa Kailash was going undiscovered via navigation, confirmed via Clarity). That redesign is **the correct SXO move** for this intent: buyers comparing "villa near Green School Bali" don't yet know there are two options, so a broker-style landing page that surfaces both immediately, before committing to either dedicated listing, matches what a comparison-shopping visitor actually needs. No further page-type change is recommended here — the current shape (landing → two listings → inquiry) is sound.

## Where SXO breaks down: the supporting pages
The three thinnest pages on the site (`/location`, `/lifestyle`, `/green-school`) don't serve a distinct user story of their own — they duplicate homepage sections verbatim (see `content.md` #1) rather than going deeper than what a buyer already saw on the homepage. A buyer clicking "Location" from the nav, expecting more detail (a map, transit times, nearby amenities beyond what the homepage already showed), instead sees the identical Green School / Lifestyle blurbs again. This is a missed opportunity to serve the buyer's actual next question, not just a duplicate-content SEO problem.

## Recommendation
Treat `/location`, `/lifestyle`, and `/green-school` as an opportunity, not just a duplication bug to delete: give each a genuine reason to exist beyond the homepage (e.g. `/location` gets an embeddable map + a comparison table of nearby amenities/schools/travel times; `/lifestyle` goes deeper into day-in-the-life content, resident testimonials, or a photo essay) — or, if there isn't enough unique material to justify separate pages yet, fold them back into homepage anchors and 301 the standalone routes rather than leaving thin duplicate pages live.
