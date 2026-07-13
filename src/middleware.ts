import { defineMiddleware } from "astro:middleware";

const isDev = import.meta.env.DEV;

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
      `script-src 'self' 'nonce-${nonce}' https://www.googletagmanager.com; ` +
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
      "font-src 'self' https://fonts.gstatic.com; " +
      "img-src 'self' data: https://d2xsxph8kpxj0f.cloudfront.net https://www.google-analytics.com; " +
      "connect-src 'self' https://*.google-analytics.com https://www.googletagmanager.com; " +
      "frame-ancestors 'none';";
    response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
    response.headers.set("Content-Security-Policy", csp);
  }

  return response;
});
