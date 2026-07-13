const SITE_URL = "https://ecovillabali.com";

/**
 * Physical location of the villas. Used as a PostalAddress on the
 * Organization and as the address/geo of each residence. This is the
 * property's street address only, NOT a LocalBusiness/Place listing:
 * the Eco Village Sibang Maps pin is currently "permanently closed"
 * pending a permit, so we deliberately avoid any schema that ties the
 * brand to that business listing.
 */
export const PROPERTY_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "Jl. Blumbungan No.1, Gg. Drupadi",
  addressLocality: "Sibang Kaja, Abiansemal",
  addressRegion: "Bali",
  postalCode: "80352",
  addressCountry: "ID",
} as const;

/** Coordinates of the property (resolved from the owner's Maps link). */
export const PROPERTY_GEO = {
  "@type": "GeoCoordinates",
  latitude: -8.5706006,
  longitude: 115.2125029,
} as const;

/** Public Google Maps link the owner provided for directions. */
export const PROPERTY_MAP_URL = "https://maps.app.goo.gl/99e5yWLRQvREqZHk8";

/** Builds an amenityFeature list from plain amenity names. */
function amenityFeatures(names: string[]) {
  return names.map((name) => ({
    "@type": "LocationFeatureSpecification",
    name,
    value: true,
  }));
}

/**
 * Builds a SingleFamilyResidence schema for a villa. This replaces the
 * generic Product type: it is semantically correct for a home, richer for
 * AI/GEO entity understanding, and avoids the "missing offers/price"
 * warning that Product triggers (pricing is intentionally not published).
 */
export function buildResidenceSchema({
  name,
  description,
  image,
  path,
  numberOfBedrooms,
  landAreaSqm,
  amenities,
}: {
  name: string;
  description: string;
  image: string;
  path: string;
  numberOfBedrooms: number;
  landAreaSqm: number;
  amenities: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SingleFamilyResidence",
    name,
    description,
    image,
    url: SITE_URL + path,
    numberOfRooms: numberOfBedrooms,
    numberOfBedrooms,
    address: PROPERTY_ADDRESS,
    geo: PROPERTY_GEO,
    hasMap: PROPERTY_MAP_URL,
    amenityFeature: amenityFeatures(amenities),
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Land area",
        value: landAreaSqm,
        unitCode: "MTK",
        unitText: "square metres",
      },
      {
        "@type": "PropertyValue",
        name: "Walking distance to Green School Bali",
        value: "8 minutes",
      },
    ],
  };
}

/** Builds a BreadcrumbList schema from Home down to the given page. */
export function buildBreadcrumbSchema(pageName: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL + "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: pageName,
        item: SITE_URL + path,
      },
    ],
  };
}

/**
 * Builds a Person schema for the owner. This is the site's strongest
 * E-E-A-T signal: a named, experienced human selling directly.
 *
 * Pass `sameAs` with real public profile URLs (LinkedIn, Instagram,
 * verified personal site) to strengthen the entity. Emitting an empty
 * array adds nothing, so sameAs is omitted when no URLs are given.
 * TODO(owner): add a public profile URL for Iris when available.
 */
export function buildPersonSchema({
  name,
  description,
  sameAs,
}: {
  name: string;
  description: string;
  sameAs?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    description,
    homeLocation: { "@type": "Place", name: "Eco Village Sibang, Bali" },
    knowsAbout: [
      "Green School Bali",
      "Eco Village Sibang",
      "Sustainable living in Bali",
      "Relocating to Bali with a family",
    ],
    worksFor: { "@type": "Organization", name: "Eco Villa Bali", url: `${SITE_URL}/` },
    ...(sameAs && sameAs.length ? { sameAs } : {}),
  };
}

/** Builds a BlogPosting schema for an article page. */
export function buildArticleSchema({
  headline,
  description,
  path,
  image,
  datePublished,
  dateModified,
}: {
  headline: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
  /** Defaults to datePublished when the article has not been revised. */
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    image,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Person",
      name: "Oscar Kolthoff",
      url: `${SITE_URL}/about`,
      sameAs: ["https://www.linkedin.com/in/oscarkolthoff/"],
      description:
        "Owner of Eco Villa Bali, former resident of Eco Village Sibang and former Green School Bali parent.",
    },
    publisher: { "@type": "Organization", name: "Eco Villa Bali" },
    mainEntityOfPage: SITE_URL + path,
  };
}

/** Builds a FAQPage schema from question/answer pairs. */
export function buildFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
