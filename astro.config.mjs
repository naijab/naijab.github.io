import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://naijab.com",
  integrations: [mdx(), sitemap(), tailwind(), solidJs()],
  server: {
    allowedHosts: ["x.naijab.com"],
  },
});
