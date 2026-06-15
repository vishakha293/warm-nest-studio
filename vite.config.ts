// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Disable nitro/Cloudflare bundling so the TanStack Start prerender
  // pipeline can spin up its own preview server and emit pure static HTML
  // into dist/client — what GitHub Pages needs.
  nitro: false,
  tanstackStart: {
    server: { entry: "server" },
    pages: [
      { path: "/" },
      { path: "/privacy-policy" },
    ],
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoSubfolderIndex: true,
    },
  },
});
