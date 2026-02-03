/**
 * Test Setup File
 *
 * Extended test setup with additional mocks and utilities.
 * This complements the setup.ts file.
 */

import '@testing-library/jest-dom';
import { vi, beforeAll, afterAll, afterEach, beforeEach } from 'vitest';

// ============================================================================
// DOM Environment Mocks
// ============================================================================

// Mock window.matchMedia
beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: query.includes('dark') ? false : false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
});

// Mock ResizeObserver
class MockResizeObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

global.ResizeObserver = MockResizeObserver as unknown as typeof ResizeObserver;

// Mock IntersectionObserver
class MockIntersectionObserver {
  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
  }
  callback: IntersectionObserverCallback;
  root = null;
  rootMargin = '';
  thresholds: number[] = [];
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
  takeRecords = vi.fn().mockReturnValue([]);
}

global.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver;

// Mock requestAnimationFrame
vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
  return setTimeout(() => callback(performance.now()), 16);
});

vi.stubGlobal('cancelAnimationFrame', (id: number) => {
  clearTimeout(id);
});

// Mock scrollTo
Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: vi.fn(),
});

// Mock scrollIntoView
Element.prototype.scrollIntoView = vi.fn();

// Mock getBoundingClientRect
Element.prototype.getBoundingClientRect = vi.fn().mockReturnValue({
  width: 100,
  height: 100,
  top: 0,
  left: 0,
  bottom: 100,
  right: 100,
  x: 0,
  y: 0,
  toJSON: () => ({}),
});

// ============================================================================
// Storage Mocks
// ============================================================================

const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: vi.fn((key: string) => store[key] || null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value;
    }),
    removeItem: vi.fn((key: string) => {
      delete store[key];
    }),
    clear: vi.fn(() => {
      store = {};
    }),
    get length() {
      return Object.keys(store).length;
    },
    key: vi.fn((index: number) => Object.keys(store)[index] || null),
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
  writable: true,
});

const sessionStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: vi.fn((key: string) => store[key] || null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value;
    }),
    removeItem: vi.fn((key: string) => {
      delete store[key];
    }),
    clear: vi.fn(() => {
      store = {};
    }),
    get length() {
      return Object.keys(store).length;
    },
    key: vi.fn((index: number) => Object.keys(store)[index] || null),
  };
})();

Object.defineProperty(window, 'sessionStorage', {
  value: sessionStorageMock,
  writable: true,
});

// ============================================================================
// Clipboard Mock
// ============================================================================

Object.defineProperty(navigator, 'clipboard', {
  value: {
    writeText: vi.fn().mockResolvedValue(undefined),
    readText: vi.fn().mockResolvedValue(''),
  },
  writable: true,
});

// ============================================================================
// URL Mock
// ============================================================================

const mockURL = {
  createObjectURL: vi.fn().mockReturnValue('blob:mock-url'),
  revokeObjectURL: vi.fn(),
};

Object.defineProperty(window, 'URL', {
  value: mockURL,
  writable: true,
});

// ============================================================================
// Fetch Mock
// ============================================================================

global.fetch = vi.fn().mockResolvedValue({
  ok: true,
  status: 200,
  json: () => Promise.resolve({}),
  text: () => Promise.resolve(''),
  blob: () => Promise.resolve(new Blob()),
  arrayBuffer: () => Promise.resolve(new ArrayBuffer(0)),
  headers: new Headers(),
});

// ============================================================================
// WebGL Mock (for Three.js)
// ============================================================================

const mockWebGLContext = {
  canvas: document.createElement('canvas'),
  getContextAttributes: vi.fn().mockReturnValue({}),
  isContextLost: vi.fn().mockReturnValue(false),
  getExtension: vi.fn().mockReturnValue(null),
  getParameter: vi.fn().mockReturnValue(''),
  createBuffer: vi.fn().mockReturnValue({}),
  bindBuffer: vi.fn(),
  bufferData: vi.fn(),
  createProgram: vi.fn().mockReturnValue({}),
  createShader: vi.fn().mockReturnValue({}),
  shaderSource: vi.fn(),
  compileShader: vi.fn(),
  attachShader: vi.fn(),
  linkProgram: vi.fn(),
  getProgramParameter: vi.fn().mockReturnValue(true),
  getShaderParameter: vi.fn().mockReturnValue(true),
  useProgram: vi.fn(),
  getAttribLocation: vi.fn().mockReturnValue(0),
  getUniformLocation: vi.fn().mockReturnValue({}),
  enableVertexAttribArray: vi.fn(),
  vertexAttribPointer: vi.fn(),
  createTexture: vi.fn().mockReturnValue({}),
  bindTexture: vi.fn(),
  texParameteri: vi.fn(),
  texImage2D: vi.fn(),
  enable: vi.fn(),
  disable: vi.fn(),
  clear: vi.fn(),
  clearColor: vi.fn(),
  viewport: vi.fn(),
  drawArrays: vi.fn(),
  drawElements: vi.fn(),
  deleteProgram: vi.fn(),
  deleteShader: vi.fn(),
  deleteBuffer: vi.fn(),
  deleteTexture: vi.fn(),
  createFramebuffer: vi.fn().mockReturnValue({}),
  bindFramebuffer: vi.fn(),
  framebufferTexture2D: vi.fn(),
  checkFramebufferStatus: vi.fn().mockReturnValue(36053), // FRAMEBUFFER_COMPLETE
  createRenderbuffer: vi.fn().mockReturnValue({}),
  bindRenderbuffer: vi.fn(),
  renderbufferStorage: vi.fn(),
  framebufferRenderbuffer: vi.fn(),
  deleteFramebuffer: vi.fn(),
  deleteRenderbuffer: vi.fn(),
  uniformMatrix4fv: vi.fn(),
  uniform1i: vi.fn(),
  uniform1f: vi.fn(),
  uniform2fv: vi.fn(),
  uniform3fv: vi.fn(),
  uniform4fv: vi.fn(),
  activeTexture: vi.fn(),
  pixelStorei: vi.fn(),
  blendFunc: vi.fn(),
  depthFunc: vi.fn(),
  cullFace: vi.fn(),
  frontFace: vi.fn(),
};

HTMLCanvasElement.prototype.getContext = vi.fn().mockImplementation((type: string) => {
  if (type === 'webgl' || type === 'webgl2' || type === 'experimental-webgl') {
    return mockWebGLContext;
  }
  return null;
});

// ============================================================================
// Console Handling
// ============================================================================

const originalError = console.error;
const originalWarn = console.warn;

beforeAll(() => {
  console.error = (...args: unknown[]) => {
    const firstArg = args[0];
    if (
      typeof firstArg === 'string' &&
      (firstArg.includes('Warning:') ||
        firstArg.includes('act(...)') ||
        firstArg.includes('Not implemented') ||
        firstArg.includes('React does not recognize'))
    ) {
      return;
    }
    originalError.apply(console, args);
  };

  console.warn = (...args: unknown[]) => {
    const firstArg = args[0];
    if (
      typeof firstArg === 'string' &&
      (firstArg.includes('Warning:') ||
        firstArg.includes('[Mock]') ||
        firstArg.includes('componentWillReceiveProps'))
    ) {
      return;
    }
    originalWarn.apply(console, args);
  };
});

afterAll(() => {
  console.error = originalError;
  console.warn = originalWarn;
  vi.unstubAllGlobals();
});

// ============================================================================
// Cleanup
// ============================================================================

afterEach(() => {
  vi.clearAllMocks();
  localStorageMock.clear();
  sessionStorageMock.clear();
});

// ============================================================================
// Global Test Utilities
// ============================================================================

// Add delay utility to global
export const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

// Add flush promises utility
export const flushPromises = (): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, 0));

// Export for use in tests
export { localStorageMock, sessionStorageMock, mockWebGLContext };
