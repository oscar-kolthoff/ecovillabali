import { defineMiddleware } from "astro:middleware";

const isDev = import.meta.env.DEV;

// Astro's own client-hydration runtime (the astro-island element definition,
// plus the client:load and client:visible directive handlers) injects a few
// small inline <script> tags with no nonce. Their content is static across
// requests for a given Astro version, so they're allowed by hash rather than
// nonce. Without these, every client: island on the site silently fails to
// hydrate under a strict CSP — no console error, just frozen SSR markup.
const ASTRO_RUNTIME_SCRIPT_HASHES = [
  "'sha256-QzWFZi+FLIx23tnm9SBU4aEgx4x8DsuASP07mfqol/c='", // Astro.load (client:load)
  "'sha256-SaCkFfPruIdTXT8/97JArQmGxiJAL2o4bBDvSgJ5y3Q='", // <astro-island> custom element
  "'sha256-Q2BPg90ZMplYY+FSdApNErhpWafg2hcRRbndmvxuL/Q='", // Astro.visible (client:visible)
];

export const onRequest = defineMiddleware(async (context, next) => {
  // Per-request nonce so inline scripts (GTM bootstrap, JSON-LD schema
  // blocks) can run under a strict CSP without 'unsafe-inline'.
  const nonce = crypto.randomUUID();
  context.locals.cspNonce = nonce;

  const response = await next();

  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set("Referrer-Policy", "no-referrer");
  response.headers.set("X-DNS-Prefetch-Control", "off");
  response.headers.set("Cross-Origin-Opener-Policy", "same-origin");
  response.headers.set("Cross-Origin-Resource-Policy", "same-origin");
  if (!isDev) {
    // Vite/Astro dev mode needs inline scripts/eval for HMR, so only enforce
    // a strict CSP in production. The other headers are safe in both.
    const csp =
      "default-src 'self'; " +
      `script-src 'self' 'nonce-${nonce}' ${ASTRO_RUNTIME_SCRIPT_HASHES.join(" ")} https://www.googletagmanager.com; ` +
      "style-src 'self' 'unsafe-inline'; " +
      "font-src 'self'; " +
      "img-src 'self' data: https://d2xsxph8kpxj0f.cloudfront.net https://www.google-analytics.com; " +
      "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://www.google.com https://stats.g.doubleclick.net https://www.googletagmanager.com; " +
      "frame-ancestors 'none';";
    response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
    response.headers.set("Content-Security-Policy", csp);
  }

  return response;
});
