import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5000,
    strictPort: true,
  },
  root: ".",
  build: {
    outDir: "../bros_backend/public",
    emptyOutDir: false,
  },
})
