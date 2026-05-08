import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  
  server: {
    port: 3000,
    open: true,
    host: true
  },
  
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // فصل React ومكتباته الرئيسية
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor'
            }
            // فصل المكتبات الكبيرة
            if (id.includes('framer-motion')) {
              return 'animation-vendor'
            }
            if (id.includes('lucide-react')) {
              return 'icons-vendor'
            }
            return 'vendor'
          }
        }
      }
    }
  },
  
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'lucide-react']
  }
})