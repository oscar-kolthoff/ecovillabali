import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import node from "@astrojs/node";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://ecovillabali.com",
  output: "server",
  adapter: node({ mode: "standalone" }),
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
