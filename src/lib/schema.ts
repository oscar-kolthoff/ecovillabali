const SITE_URL = "https://ecovillabali.com";

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

/** Builds a BlogPosting schema for an article page. */
export function buildArticleSchema({
  headline,
  description,
  path,
  image,
  datePublished,
}: {
  headline: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    image,
    datePublished,
    author: { "@type": "Organization", name: "Eco Villa Bali" },
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
