/**
 * LocalStorage Mock
 *
 * A complete mock implementation of the localStorage API for testing.
 */

import { vi, Mock } from 'vitest';

export interface MockLocalStorage {
  getItem: Mock<(key: string) => string | null>;
  setItem: Mock<(key: string, value: string) => void>;
  removeItem: Mock<(key: string) => void>;
  clear: Mock<() => void>;
  key: Mock<(index: number) => string | null>;
  length: number;
  getStore: () => Record<string, string>;
  setStore: (data: Record<string, string>) => void;
}

/**
 * Creates a new localStorage mock instance
 */
export function createLocalStorageMock(): MockLocalStorage {
  let store: Record<string, string> = {};

  const mock: MockLocalStorage = {
    getItem: vi.fn((key: string): string | null => {
      return store[key] || null;
    }),

    setItem: vi.fn((key: string, value: string): void => {
      store[key] = String(value);
    }),

    removeItem: vi.fn((key: string): void => {
      delete store[key];
    }),

    clear: vi.fn((): void => {
      store = {};
    }),

    key: vi.fn((index: number): string | null => {
      const keys = Object.keys(store);
      return keys[index] || null;
    }),

    get length(): number {
      return Object.keys(store).length;
    },

    getStore: (): Record<string, string> => ({ ...store }),

    setStore: (data: Record<string, string>): void => {
      store = { ...data };
    },
  };

  return mock;
}

/**
 * Default localStorage mock instance
 */
export const localStorageMock = createLocalStorageMock();

/**
 * Install the mock on the window object
 */
export function installLocalStorageMock(): void {
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
    writable: true,
    configurable: true,
  });
}

/**
 * Reset the localStorage mock
 */
export function resetLocalStorageMock(): void {
  localStorageMock.clear();
  vi.clearAllMocks();
}

/**
 * Pre-populate localStorage with test data
 */
export function populateLocalStorage(data: Record<string, unknown>): void {
  for (const [key, value] of Object.entries(data)) {
    localStorageMock.setItem(key, JSON.stringify(value));
  }
}

/**
 * Get parsed value from localStorage
 */
export function getStoredValue<T>(key: string): T | null {
  const value = localStorageMock.getItem(key);
  if (value === null) return null;
  try {
    return JSON.parse(value) as T;
  } catch {
    return value as unknown as T;
  }
}

// ============================================================================
// SessionStorage Mock
// ============================================================================

export interface MockSessionStorage {
  getItem: Mock<(key: string) => string | null>;
  setItem: Mock<(key: string, value: string) => void>;
  removeItem: Mock<(key: string) => void>;
  clear: Mock<() => void>;
  key: Mock<(index: number) => string | null>;
  length: number;
}

/**
 * Creates a new sessionStorage mock instance
 */
export function createSessionStorageMock(): MockSessionStorage {
  let store: Record<string, string> = {};

  return {
    getItem: vi.fn((key: string): string | null => store[key] || null),
    setItem: vi.fn((key: string, value: string): void => {
      store[key] = String(value);
    }),
    removeItem: vi.fn((key: string): void => {
      delete store[key];
    }),
    clear: vi.fn((): void => {
      store = {};
    }),
    key: vi.fn((index: number): string | null => {
      return Object.keys(store)[index] || null;
    }),
    get length(): number {
      return Object.keys(store).length;
    },
  };
}

/**
 * Default sessionStorage mock instance
 */
export const sessionStorageMock = createSessionStorageMock();

/**
 * Install the sessionStorage mock
 */
export function installSessionStorageMock(): void {
  Object.defineProperty(window, 'sessionStorage', {
    value: sessionStorageMock,
    writable: true,
    configurable: true,
  });
}

export default localStorageMock;
