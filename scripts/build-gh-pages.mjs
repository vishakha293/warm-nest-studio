import { execSync } from "child_process";
import { copyFileSync, existsSync } from "fs";
import { resolve } from "path";

const base = process.env.GH_PAGES_BASE || "/";

console.log("Building Home Finds Studio for GitHub Pages...");
console.log(`Base path: ${base}`);

// Build with the correct base path
execSync(`vite build --base="${base}"`, { stdio: "inherit" });

// Copy index.html to 404.html so client-side routing works on GitHub Pages
const clientDir = resolve("dist/client");
const indexHtml = resolve(clientDir, "index.html");
const notFoundHtml = resolve(clientDir, "404.html");

if (existsSync(indexHtml)) {
  copyFileSync(indexHtml, notFoundHtml);
  console.log("Created 404.html from index.html for SPA fallback.");
} else {
  console.warn("dist/client/index.html not found. Skipping 404.html creation.");
}

console.log("Build complete! Deploy the contents of 'dist/client' to GitHub Pages.");
