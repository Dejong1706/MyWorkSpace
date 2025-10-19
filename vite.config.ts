import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": "/src",
      "@/assets": "/src/assets",
      "@/components": "/src/components",
      "@/layouts": "/src/layouts",
      "@/pages": "/src/pages",
      "@/routes": "/src/routes",
    },
  },
  plugins: [react()],
});
