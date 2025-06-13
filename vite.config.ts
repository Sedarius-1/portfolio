import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";


export default defineConfig({
    plugins: [
        react(),
        sitemap({
            hostname: "https://sedarius-1.github.io/portfolio",
            outDir: "dist",
        }),
    ],
    base: '/portfolio/' // Needed for GitHub Pages deployment
})