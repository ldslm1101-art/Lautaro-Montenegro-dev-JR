import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

export default defineConfig({
  plugins: [react()],
  // El nombre debe ser idéntico al que pusiste en GitHub
  base: '/Lautaro-Montenegro-dev-JR/', 
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})