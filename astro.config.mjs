import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import db from "@astrojs/db";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [tailwind(), db()],
  output: "hybrid",
  adapter: vercel(),
});
