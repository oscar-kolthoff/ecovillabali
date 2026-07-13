import { defineMiddleware } from "astro:middleware";

const isDev = import.meta.env.DEV;

// Vite/Astro dev mode needs inline scripts/eval for HMR, so only enforce a
// strict CSP in production. The other headers are safe in both environments.
const CSP =
  "default-src 'self'; " +
  "script-src 'self' https://www.googletagmanager.com; " +
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
  "font-src 'self' https://fonts.gstatic.com; " +
  "img-src 'self' data: https://d2xsxph8kpxj0f.cloudfront.net https://www.google-analytics.com; " +
  "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com; " +
  "frame-ancestors 'none';";

export const onRequest = defineMiddleware(async (_context, next) => {
  const response = await next();

  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set("Referrer-Policy", "no-referrer");
  response.headers.set("X-DNS-Prefetch-Control", "off");
  response.headers.set("Cross-Origin-Opener-Policy", "same-origin");
  response.headers.set("Cross-Origin-Resource-Policy", "same-origin");
  if (!isDev) {
    response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
    response.headers.set("Content-Security-Policy", CSP);
  }

  return response;
});
