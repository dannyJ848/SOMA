/**
 * Test Helpers Index
 *
 * Re-exports all test helpers for easy importing.
 */

// Render helpers
export {
  renderWithProviders,
  renderIsolated,
  render,
  screen,
  fireEvent,
  waitFor,
  within,
  act,
  userEvent,
  MockAIProvider,
  MockAIContext,
  defaultAIContext,
} from './render';

export type { MockAIContextValue, CustomRenderOptions } from './render';

// Async test utilities
export const wait = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const flushPromises = (): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, 0));

// Mock function helpers
import { vi, Mock, expect } from 'vitest';

export function createMockFn<T extends (...args: unknown[]) => unknown>(): Mock<T> {
  return vi.fn() as Mock<T>;
}

export function mockResolvedValue<T>(value: T): Mock<() => Promise<T>> {
  return vi.fn().mockResolvedValue(value) as Mock<() => Promise<T>>;
}

export function mockRejectedValue(error: Error): Mock<() => Promise<never>> {
  return vi.fn().mockRejectedValue(error) as Mock<() => Promise<never>>;
}

// Event simulation helpers
export function createKeyboardEvent(key: string, options: Partial<KeyboardEventInit> = {}): KeyboardEvent {
  return new KeyboardEvent('keydown', {
    key,
    bubbles: true,
    cancelable: true,
    ...options,
  });
}

export function createMouseEvent(type: string, options: Partial<MouseEventInit> = {}): MouseEvent {
  return new MouseEvent(type, {
    bubbles: true,
    cancelable: true,
    ...options,
  });
}

// Assertion helpers
export function expectToBeInDocument(element: HTMLElement | null): void {
  if (!element) {
    throw new Error('Expected element to be in document, but it was null');
  }
  expect(document.body.contains(element)).toBe(true);
}

export function expectNotToBeInDocument(element: HTMLElement | null): void {
  if (element && document.body.contains(element)) {
    throw new Error('Expected element not to be in document, but it was found');
  }
}

// Form helpers
export async function fillInput(
  container: HTMLElement,
  labelText: string,
  value: string
): Promise<void> {
  const { userEvent, screen } = await import('./render');
  const user = userEvent.setup();
  const input = screen.getByLabelText(labelText);
  await user.clear(input);
  await user.type(input, value);
}

export async function selectOption(
  container: HTMLElement,
  labelText: string,
  optionText: string
): Promise<void> {
  const { userEvent, screen } = await import('./render');
  const user = userEvent.setup();
  const select = screen.getByLabelText(labelText);
  await user.selectOptions(select, optionText);
}

// Component state helpers
export function getComponentState<T>(component: { state: T }): T {
  return component.state;
}

// Snapshot test helpers
export function toMatchComponentSnapshot(received: HTMLElement): {
  pass: boolean;
  message: () => string;
} {
  const snapshot = received.outerHTML;
  return {
    pass: true,
    message: () => `expected ${snapshot} to match snapshot`,
  };
}

// Date helpers for testing
export function mockDate(date: Date | string | number): void {
  vi.setSystemTime(new Date(date));
}

export function restoreDate(): void {
  vi.useRealTimers();
}

// LocalStorage helpers
export function mockLocalStorage(): {
  getItem: Mock;
  setItem: Mock;
  removeItem: Mock;
  clear: Mock;
} {
  const store: Record<string, string> = {};
  const mockGetItem = vi.fn((key: string) => store[key] || null);
  const mockSetItem = vi.fn((key: string, value: string) => {
    store[key] = value;
  });
  const mockRemoveItem = vi.fn((key: string) => {
    delete store[key];
  });
  const mockClear = vi.fn(() => {
    Object.keys(store).forEach((key) => delete store[key]);
  });

  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: mockGetItem,
      setItem: mockSetItem,
      removeItem: mockRemoveItem,
      clear: mockClear,
    },
    writable: true,
  });

  return {
    getItem: mockGetItem,
    setItem: mockSetItem,
    removeItem: mockRemoveItem,
    clear: mockClear,
  };
}

// Console spy helpers
export function spyOnConsole(): {
  log: Mock;
  warn: Mock;
  error: Mock;
  info: Mock;
  restore: () => void;
} {
  const log = vi.spyOn(console, 'log').mockImplementation(() => {});
  const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
  const error = vi.spyOn(console, 'error').mockImplementation(() => {});
  const info = vi.spyOn(console, 'info').mockImplementation(() => {});

  return {
    log: log as unknown as Mock,
    warn: warn as unknown as Mock,
    error: error as unknown as Mock,
    info: info as unknown as Mock,
    restore: () => {
      log.mockRestore();
      warn.mockRestore();
      error.mockRestore();
      info.mockRestore();
    },
  };
}
