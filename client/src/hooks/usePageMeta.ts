import { useEffect } from "react";

const SITE_URL = "https://ecovillabali.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/villa-sungai-hero.jpg`;

interface PageMeta {
  title: string;
  description?: string;
  /** Path only, e.g. "/villa-sungai". Defaults to the current location path. */
  path?: string;
  /** Absolute image URL for social sharing. Defaults to the Villa Sungai hero. */
  image?: string;
  /** og:type. Defaults to "website"; use "product" for villa listing pages. */
  type?: string;
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.content = content;
}

function upsertCanonical(href: string) {
  let tag = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!tag) {
    tag = document.createElement("link");
    tag.rel = "canonical";
    document.head.appendChild(tag);
  }
  tag.href = href;
}

/**
 * Sets the document title, meta description, canonical link, and Open
 * Graph/Twitter Card tags for the current page. The app is a client-rendered
 * SPA, so without this none of these ever change between routes. Restores
 * nothing on unmount by design: the next page sets its own.
 */
export function usePageMeta({ title, description, path, image, type = "website" }: PageMeta) {
  useEffect(() => {
    if (title) document.title = title;

    const url = `${SITE_URL}${path ?? window.location.pathname}`;
    const ogImage = image ?? DEFAULT_OG_IMAGE;

    if (description) upsertMeta("name", "description", description);
    upsertCanonical(url);

    upsertMeta("property", "og:title", title);
    if (description) upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", ogImage);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:site_name", "Eco Villa Bali");

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    if (description) upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", ogImage);
  }, [title, description, path, image, type]);
}
