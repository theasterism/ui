import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // site: "https://orphos.pages.dev",
  integrations: [react(), sitemap()],
  output: "static",
  devToolbar: {
    enabled: false,
  },
  trailingSlash: "never",
  vite: {
    // @ts-expect-error shut up!
    plugins: [tailwindcss()],
  },
  server: {
    port: 3627,
  },
  fonts: [
    {
      name: "Inter",
      cssVariable: "--font-inter",
      provider: fontProviders.fontsource(),
      formats: ["woff2", "woff"],
      weights: ["100 900"],
    },
    {
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrains-mono",
      fallbacks: ["monospace"],
      subsets: ["latin", "latin-ext"],
      provider: fontProviders.fontsource(),
    },
  ],
  adapter: cloudflare({
    imageService: {
      build: "compile",
      runtime: "passthrough",
    },
  }),
});
