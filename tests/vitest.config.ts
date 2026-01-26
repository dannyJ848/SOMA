/**
 * Vitest Configuration
 *
 * Extended configuration for Vitest test runner.
 * This supplements the test config in vite.config.ts
 */

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': resolve(__dirname, '../src'),
      '@core': resolve(__dirname, '../core'),
      '@assets': resolve(__dirname, '../assets'),
      '@components': resolve(__dirname, '../src/components'),
      '@hooks': resolve(__dirname, '../src/hooks'),
      '@utils': resolve(__dirname, '../src/utils'),
      '@types': resolve(__dirname, '../src/types'),
    },
  },

  test: {
    // Test environment
    environment: 'jsdom',

    // Globals (describe, it, expect, etc.)
    globals: true,

    // Setup files
    setupFiles: ['./setup.ts', './setupTests.ts'],

    // Include patterns
    include: [
      '**/*.test.{ts,tsx}',
      '**/*.spec.{ts,tsx}',
    ],

    // Exclude patterns
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/e2e/**',
    ],

    // Coverage configuration
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      include: ['../src/**/*.{ts,tsx}', '../core/**/*.ts'],
      exclude: [
        '../src/**/*.d.ts',
        '../src/main.tsx',
        '**/__tests__/**',
        '**/tests/**',
      ],
      thresholds: {
        lines: 50,
        functions: 50,
        branches: 50,
        statements: 50,
      },
      reportsDirectory: '../coverage',
    },

    // Timeouts
    testTimeout: 10000,
    hookTimeout: 10000,

    // Threading
    pool: 'threads',
    poolOptions: {
      threads: {
        singleThread: false,
        isolate: true,
      },
    },

    // Watch mode configuration
    watch: false,
    watchExclude: ['**/node_modules/**', '**/dist/**'],

    // Reporter
    reporter: ['verbose'],

    // Retry configuration
    retry: 0,

    // Environment options
    environmentOptions: {
      jsdom: {
        url: 'http://localhost:1420',
        contentType: 'text/html',
      },
    },

    // Mock configuration
    mockReset: true,
    restoreMocks: true,
    clearMocks: true,

    // Deps configuration
    deps: {
      inline: [
        /three/,
        /@react-three/,
        /@tauri-apps/,
      ],
    },

    // Sequence configuration
    sequence: {
      shuffle: false,
      concurrent: false,
    },
  },

  // Define globals for tests
  define: {
    __DEV__: true,
    __PROD__: false,
    __TEST__: true,
  },
});
