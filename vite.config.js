import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    // Si usas 'npm run dev', el base será '/'. 
    // Si usas 'npm run build', el base será el de GitHub.
    base: command === 'serve' ? '/' : '/lautaro-montenegro-dev-jr/', 
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }
})
//HOLA