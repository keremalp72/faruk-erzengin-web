import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 70,
      },
      jpeg: {
        quality: 70,
      },
      jpg: {
        quality: 70,
      },
      webp: {
        lossless: false,
        quality: 70,
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          supabase: ['@supabase/supabase-js'],
          helmet: ['react-helmet-async'],
          // framer-motion: animations chunk (lazy loaded pages pull it in)
          // recharts + react-quill-new: only used in Admin (lazy loaded, auto-chunked)
          // swiper: only used in Home Reviews component (auto-chunked with Home)
          // react-icons: tree-shaken per page, no manual chunk needed
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})
