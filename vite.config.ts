import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: resolve(__dirname, "web"),
  build: {
    outDir: "dist",
    emptyOutDir: true
  },
  resolve: {
    alias: {
      "@triage": resolve(__dirname, "src/lib.ts")
    }
  },
  server: {
    fs: {
      allow: [resolve(__dirname)]
    }
  }
});
