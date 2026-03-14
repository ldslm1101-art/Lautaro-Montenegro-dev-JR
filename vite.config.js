// vite.config.js
export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    // Cambiamos a minúsculas para que coincida con la URL real de GitHub
    base: command === 'serve' ? '/' : '/lautaro-montenegro-dev-jr/', 
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }
})