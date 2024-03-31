import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Alphonsus-Portfolio-Website/",
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1500, // Adjust this value as needed
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Example of manual code splitting based on vendor modules
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
  server: {
    compress: true, // Enable gzip compression
  },
})