import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import node from "@astrojs/node";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

// Vercel's own build sets process.env.VERCEL=1, so local dev/build (and the
// `pnpm start` standalone server used for local production testing) keep
// using the node adapter, while a Vercel deploy automatically gets the
// serverless-compatible adapter.
const adapter = process.env.VERCEL ? vercel() : node({ mode: "standalone" });

export default defineConfig({
  site: "https://ecovillabali.com",
  output: "server",
  adapter,
  integrations: [react()],
  server: {
    host: true,
    port: parseInt(process.env.PORT || "3000"),
  },
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    // /green-school duplicated the homepage's Green School section with no
    // unique content; /green-school-villa-bali covers the same topic in far
    // more depth. Real 301 at the routing layer, no server middleware needed.
    "/green-school": "/green-school-villa-bali",
  },
});
