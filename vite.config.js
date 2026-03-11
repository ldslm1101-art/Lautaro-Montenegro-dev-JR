import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Archivo: vite.config.js
export default defineConfig({
  plugins: [react()],
  base: '/Lautaro-Montenegro-dev-JR/', //
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
