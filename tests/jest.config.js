/**
 * Jest Configuration
 *
 * Configuration for Jest test runner.
 * Note: This project primarily uses Vitest, but Jest config is provided
 * for compatibility with certain tooling.
 */

/** @type {import('jest').Config} */
const config = {
  // Use jsdom for DOM testing
  testEnvironment: 'jsdom',

  // Root directory
  rootDir: '..',

  // Test file patterns
  testMatch: [
    '<rootDir>/tests/**/*.test.{ts,tsx}',
    '<rootDir>/tests/**/*.spec.{ts,tsx}',
  ],

  // Module file extensions
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  // Transform TypeScript files
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.json',
        useESM: true,
      },
    ],
  },

  // Module name mapping for path aliases
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@core/(.*)$': '<rootDir>/core/$1',
    '^@assets/(.*)$': '<rootDir>/assets/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@types/(.*)$': '<rootDir>/src/types/$1',
    // Mock CSS/SCSS imports
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    // Mock image imports
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/tests/__mocks__/fileMock.js',
  },

  // Setup files
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],

  // Coverage configuration
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    'core/**/*.ts',
    '!src/**/*.d.ts',
    '!src/main.tsx',
    '!**/node_modules/**',
    '!**/tests/**',
  ],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },

  // Test timeout
  testTimeout: 10000,

  // Verbose output
  verbose: true,

  // Clear mocks between tests
  clearMocks: true,

  // Restore mocks automatically
  restoreMocks: true,

  // Globals
  globals: {
    __DEV__: true,
    __PROD__: false,
    __TEST__: true,
  },

  // Transform ignore patterns
  transformIgnorePatterns: [
    'node_modules/(?!(three|@react-three|@tauri-apps)/)',
  ],

  // Test path ignore patterns
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/src-tauri/',
  ],
};

module.exports = config;
