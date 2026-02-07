import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vite options tailored for Tauri development
  clearScreen: false,
  server: {
    port: 1420,
    strictPort: true,
    watch: {
      // Tauri expects a fixed port
      ignored: ['**/src-tauri/**'],
    },
  },
  build: {
    // Tauri uses Chromium on Windows and WebKit on macOS/Linux
    target: process.env.TAURI_PLATFORM === 'windows' ? 'chrome105' : 'safari13',
    // Produce sourcemaps for debug builds
    sourcemap: !!process.env.TAURI_DEBUG,
    // Minification settings
    minify: 'terser',
    terserOptions: {
      compress: {
        // Remove console logs in production
        drop_console: !process.env.TAURI_DEBUG,
        drop_debugger: !process.env.TAURI_DEBUG,
      },
    },
    // Chunk size warning limit (Three.js exceeds default 500KB)
    chunkSizeWarningLimit: 1000,
    // Rollup options for better chunking
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate Three.js into its own chunk
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          // React vendor chunk
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['three', '@react-three/fiber', '@react-three/drei'],
  },
});
