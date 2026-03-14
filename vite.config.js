// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    // Al usar './', la página funcionará sin importar el nombre del repo
    base: command === 'serve' ? '/' : './', 
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }
})