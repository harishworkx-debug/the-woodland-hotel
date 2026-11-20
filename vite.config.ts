import { defineConfig } from "@lovable.dev/vite-tanstack-config/dist/index.js";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [
    cloudflare({
      viteEnvironment: {
        name: "ssr",
      },
    }),
  ],
});



