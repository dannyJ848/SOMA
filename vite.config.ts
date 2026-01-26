import { defineConfig, loadEnv, type UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }): UserConfig => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '');
  const isDev = mode === 'development';
  const isProd = mode === 'production';
  const isTest = mode === 'test';

  // Detect Tauri environment
  const isTauri = !!process.env.TAURI_PLATFORM;
  const tauriPlatform = process.env.TAURI_PLATFORM || '';
  const tauriArch = process.env.TAURI_ARCH || '';
  const tauriFamily = process.env.TAURI_FAMILY || '';
  const tauriDebug = !!process.env.TAURI_DEBUG;

  // Build target based on platform
  const getBuildTarget = (): string => {
    if (tauriPlatform === 'windows') {
      return 'chrome105';
    }
    if (tauriPlatform === 'macos' || tauriPlatform === 'ios') {
      return 'safari15';
    }
    if (tauriPlatform === 'android') {
      return 'chrome105';
    }
    return 'esnext';
  };

  return {
    plugins: [
      react({
        // Fast Refresh for development
        fastRefresh: isDev,
        // Babel configuration for production optimizations
        babel: isProd ? {
          plugins: [
            // Remove prop-types in production
            ['transform-react-remove-prop-types', { removeImport: true }],
          ],
        } : undefined,
      }),
    ],

    // Vite options tailored for Tauri development
    clearScreen: false,

    // Environment variables exposed to client
    define: {
      __DEV__: isDev,
      __PROD__: isProd,
      __TEST__: isTest,
      __TAURI__: isTauri,
      __TAURI_PLATFORM__: JSON.stringify(tauriPlatform),
      __TAURI_ARCH__: JSON.stringify(tauriArch),
      __TAURI_FAMILY__: JSON.stringify(tauriFamily),
      __TAURI_DEBUG__: tauriDebug,
      'process.env.NODE_ENV': JSON.stringify(mode),
      'import.meta.env.VITE_APP_VERSION': JSON.stringify(env.VITE_APP_VERSION || '0.1.0'),
    },

    // Resolve aliases matching tsconfig paths
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        '@core': resolve(__dirname, './core'),
        '@assets': resolve(__dirname, './assets'),
        '@components': resolve(__dirname, './src/components'),
        '@hooks': resolve(__dirname, './src/hooks'),
        '@utils': resolve(__dirname, './src/utils'),
        '@types': resolve(__dirname, './src/types'),
        '@data': resolve(__dirname, './src/data'),
        '@contexts': resolve(__dirname, './src/contexts'),
        '@education': resolve(__dirname, './src/education'),
        '@anatomy': resolve(__dirname, './src/anatomy'),
      },
    },

    // Development server configuration
    server: {
      port: 1420,
      strictPort: true,
      host: isTauri ? '0.0.0.0' : 'localhost',
      watch: {
        // Ignore src-tauri directory
        ignored: ['**/src-tauri/**'],
      },
      // HMR configuration
      hmr: isTauri ? {
        protocol: 'ws',
        host: 'localhost',
        port: 1420,
      } : true,
      // Proxy configuration for development APIs
      proxy: {},
      // CORS settings
      cors: true,
      // Headers for development
      headers: {
        'X-Frame-Options': 'DENY',
        'X-Content-Type-Options': 'nosniff',
      },
    },

    // Preview server configuration
    preview: {
      port: 1421,
      strictPort: true,
      host: 'localhost',
      cors: true,
    },

    // Build configuration
    build: {
      // Target based on platform
      target: getBuildTarget(),
      // Output directory
      outDir: 'dist',
      // Assets directory
      assetsDir: 'assets',
      // Assets inline limit (4kb)
      assetsInlineLimit: 4096,
      // Produce sourcemaps for debug builds
      sourcemap: tauriDebug || isDev ? true : false,
      // Minification
      minify: isProd ? 'terser' : false,
      // Terser options for production
      terserOptions: isProd ? {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.trace'],
          passes: 2,
          ecma: 2020,
          module: true,
          toplevel: true,
          unsafe_arrows: true,
          unsafe_methods: true,
        },
        mangle: {
          safari10: true,
          properties: {
            regex: /^_private_/,
          },
        },
        format: {
          comments: false,
          ecma: 2020,
        },
        ecma: 2020,
        module: true,
        toplevel: true,
      } : undefined,
      // Rollup options
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
        },
        output: {
          // Chunk file naming
          chunkFileNames: isProd
            ? 'assets/js/[name]-[hash].js'
            : 'assets/js/[name].js',
          entryFileNames: isProd
            ? 'assets/js/[name]-[hash].js'
            : 'assets/js/[name].js',
          assetFileNames: (assetInfo) => {
            const extType = assetInfo.name?.split('.').pop() || 'misc';
            const folder = {
              'css': 'css',
              'scss': 'css',
              'sass': 'css',
              'less': 'css',
              'png': 'images',
              'jpg': 'images',
              'jpeg': 'images',
              'gif': 'images',
              'svg': 'images',
              'webp': 'images',
              'ico': 'images',
              'woff': 'fonts',
              'woff2': 'fonts',
              'eot': 'fonts',
              'ttf': 'fonts',
              'otf': 'fonts',
            }[extType] || 'misc';
            return isProd
              ? `assets/${folder}/[name]-[hash].[ext]`
              : `assets/${folder}/[name].[ext]`;
          },
          // Manual chunks for better caching and smaller initial bundle
          manualChunks: isProd ? (id: string) => {
            // React core - loaded first, cache-stable
            if (id.includes('node_modules/react/') ||
                id.includes('node_modules/react-dom/') ||
                id.includes('node_modules/scheduler/')) {
              return 'vendor-react';
            }
            // Three.js core - heavy, separate chunk
            if (id.includes('node_modules/three/')) {
              return 'vendor-three';
            }
            // React-three ecosystem - separate from core three
            if (id.includes('node_modules/@react-three/')) {
              return 'vendor-three-react';
            }
            // Tauri API - platform-specific
            if (id.includes('node_modules/@tauri-apps/')) {
              return 'vendor-tauri';
            }
            // AI/ML related (heavy) - lazy loaded
            if (id.includes('node_modules/@anthropic-ai/') ||
                id.includes('node_modules/ollama/') ||
                id.includes('node_modules/@xenova/')) {
              return 'vendor-ai';
            }
            // Database related - lazy loaded
            if (id.includes('node_modules/better-sqlite3/') ||
                id.includes('node_modules/@lancedb/') ||
                id.includes('node_modules/chromadb/') ||
                id.includes('node_modules/apache-arrow/')) {
              return 'vendor-db';
            }
            // Utility libraries
            if (id.includes('node_modules/uuid/') ||
                id.includes('node_modules/pdf-parse/')) {
              return 'vendor-utils';
            }
            // Anatomy module - lazy loaded feature
            if (id.includes('/src/anatomy/')) {
              return 'feature-anatomy';
            }
            // Education module - lazy loaded feature
            if (id.includes('/src/education/')) {
              return 'feature-education';
            }
            // AI module - lazy loaded feature
            if (id.includes('/src/ai/')) {
              return 'feature-ai';
            }
            // Core data modules
            if (id.includes('/core/')) {
              return 'core-lib';
            }
            // Shared components
            if (id.includes('/src/components/')) {
              return 'shared-components';
            }
            // Other node_modules (smaller libs)
            if (id.includes('node_modules/')) {
              return 'vendor-misc';
            }
          } : undefined,
          // Compact output
          compact: isProd,
          // Preserve modules for better debugging
          preserveModules: false,
          // Format
          format: 'es',
          // Globals for external dependencies
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
        },
        // External dependencies (not bundled)
        external: [],
        // Treeshaking
        treeshake: isProd ? {
          moduleSideEffects: 'no-external',
          propertyReadSideEffects: false,
          tryCatchDeoptimization: false,
        } : true,
      },
      // CSS code splitting
      cssCodeSplit: true,
      // CSS minification
      cssMinify: isProd ? 'lightningcss' : false,
      // Chunk size warning limit (500kb)
      chunkSizeWarningLimit: 500,
      // Report compressed size only in production
      reportCompressedSize: isProd,
      // Module preload polyfill
      modulePreload: {
        polyfill: true,
      },
      // Empty out dir before build
      emptyOutDir: true,
      // Write manifest for SSR/asset referencing
      manifest: isProd,
      // SSR manifest
      ssrManifest: false,
      // Copy public directory
      copyPublicDir: true,
    },

    // CSS options
    css: {
      devSourcemap: isDev,
      modules: {
        localsConvention: 'camelCase',
        scopeBehaviour: 'local',
        generateScopedName: isProd
          ? '[hash:base64:8]'
          : '[name]__[local]__[hash:base64:5]',
      },
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
      // Lightning CSS for faster processing
      transformer: 'lightningcss',
      lightningcss: {
        drafts: {
          customMedia: true,
        },
      },
    },

    // Optimization options
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'three',
        '@react-three/fiber',
        '@react-three/drei',
        '@tauri-apps/api',
        'uuid',
      ],
      exclude: [
        '@xenova/transformers',
        'better-sqlite3',
      ],
      // Force optimization
      force: false,
      // Esbuild options for optimization
      esbuildOptions: {
        target: 'es2022',
        supported: {
          'top-level-await': true,
        },
      },
    },

    // esbuild options
    esbuild: {
      // Remove console and debugger in production
      drop: isProd ? ['console', 'debugger'] : [],
      // Target for esbuild
      target: 'es2022',
      // Legal comments
      legalComments: 'none',
      // Minify identifiers
      minifyIdentifiers: isProd,
      // Minify syntax
      minifySyntax: isProd,
      // Minify whitespace
      minifyWhitespace: isProd,
      // Keep names for debugging
      keepNames: !isProd,
      // Tree shaking
      treeShaking: true,
    },

    // Worker options
    worker: {
      format: 'es',
      plugins: () => [react()],
      rollupOptions: {
        output: {
          entryFileNames: isProd
            ? 'assets/js/worker-[hash].js'
            : 'assets/js/worker-[name].js',
        },
      },
    },

    // JSON options
    json: {
      namedExports: true,
      stringify: false,
    },

    // App type
    appType: 'spa',

    // Base URL
    base: './',

    // Public directory
    publicDir: 'public',

    // Cache directory
    cacheDir: 'node_modules/.vite',

    // Env prefix
    envPrefix: 'VITE_',

    // Log level
    logLevel: isDev ? 'info' : 'warn',

    // Test configuration (Vitest)
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./tests/setup.ts'],
      include: ['tests/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      exclude: ['tests/e2e/**', 'node_modules/**', 'dist/**'],
      coverage: {
        provider: 'v8',
        reporter: ['text', 'json', 'html', 'lcov'],
        include: ['src/**/*.{ts,tsx}', 'core/**/*.ts'],
        exclude: [
          'src/**/*.d.ts',
          'src/main.tsx',
          '**/__tests__/**',
          '**/tests/**',
        ],
        thresholds: {
          lines: 50,
          functions: 50,
          branches: 50,
          statements: 50,
        },
      },
      testTimeout: 10000,
      hookTimeout: 10000,
      pool: 'threads',
      poolOptions: {
        threads: {
          singleThread: false,
          isolate: true,
        },
      },
      retry: 0,
      watch: false,
    },
  };
});
