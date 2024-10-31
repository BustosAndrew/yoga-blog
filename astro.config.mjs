import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import basicSsl from "@vitejs/plugin-basic-ssl";
const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
  site: "https://yogalightwave.com/",
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      apiOptions: {
        region: "us",
      },
      components: {
        page: "storyblok/Page",
        feature: "storyblok/Feature",
        grid: "storyblok/Grid",
        teaser: "storyblok/Teaser",
      },
    }),
    tailwind(),
    mdx(),
    sitemap(),
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
});
