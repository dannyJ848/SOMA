/**
 * Test Utilities
 *
 * Comprehensive test utilities and helpers for testing React components and hooks.
 */

import React, { ReactElement, ReactNode, useState, useCallback } from 'react';
import { render, RenderOptions, RenderResult, screen, fireEvent, waitFor, within, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi, Mock, expect } from 'vitest';

// ============================================================================
// Types
// ============================================================================

export interface MockAIContextValue {
  isAvailable: boolean;
  isLoading: boolean;
  error: string | null;
  currentModel: string | null;
  explanationLevel: 'simple' | 'intermediate' | 'advanced' | 'clinical';
  includePersonalization: boolean;
  includePubMed: boolean;
  streamingEnabled: boolean;
  dashboardData: Record<string, unknown> | null;
  setExplanationLevel: (level: 'simple' | 'intermediate' | 'advanced' | 'clinical') => void;
  chatWithRAG: (request: unknown) => Promise<unknown>;
  checkHealth: () => Promise<{ available: boolean }>;
}

export interface MockSettingsContextValue {
  settings: {
    appearance: { theme: 'light' | 'dark' | 'system'; fontSize: string };
    language: { language: string };
    complexity: { defaultLevel: string };
    privacy: { allowAnalytics: boolean };
    accessibility: { reduceAnimations: boolean };
  };
  isLoading: boolean;
  error: string | null;
  updateSettings: (settings: unknown) => Promise<void>;
  setTheme: (theme: 'light' | 'dark' | 'system') => Promise<void>;
}

export interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  aiContextValue?: Partial<MockAIContextValue>;
  settingsContextValue?: Partial<MockSettingsContextValue>;
  initialRoute?: string;
}

// ============================================================================
// Mock Contexts
// ============================================================================

export const defaultAIContext: MockAIContextValue = {
  isAvailable: true,
  isLoading: false,
  error: null,
  currentModel: 'test-model',
  explanationLevel: 'intermediate',
  includePersonalization: true,
  includePubMed: false,
  streamingEnabled: false,
  dashboardData: null,
  setExplanationLevel: vi.fn(),
  chatWithRAG: vi.fn().mockResolvedValue({
    content: 'Mock AI response',
    model: 'test',
    done: true,
    citations: [],
  }),
  checkHealth: vi.fn().mockResolvedValue({ available: true }),
};

export const defaultSettingsContext: MockSettingsContextValue = {
  settings: {
    appearance: { theme: 'system', fontSize: 'medium' },
    language: { language: 'en' },
    complexity: { defaultLevel: 'informed' },
    privacy: { allowAnalytics: false },
    accessibility: { reduceAnimations: false },
  },
  isLoading: false,
  error: null,
  updateSettings: vi.fn(),
  setTheme: vi.fn(),
};

const MockAIContext = React.createContext<MockAIContextValue>(defaultAIContext);
const MockSettingsContext = React.createContext<MockSettingsContextValue>(defaultSettingsContext);

export function MockAIProvider({
  children,
  value = {},
}: {
  children: ReactNode;
  value?: Partial<MockAIContextValue>;
}) {
  const contextValue = { ...defaultAIContext, ...value };
  return (
    <MockAIContext.Provider value={contextValue}>
      {children}
    </MockAIContext.Provider>
  );
}

export function MockSettingsProvider({
  children,
  value = {},
}: {
  children: ReactNode;
  value?: Partial<MockSettingsContextValue>;
}) {
  const contextValue = { ...defaultSettingsContext, ...value };
  return (
    <MockSettingsContext.Provider value={contextValue}>
      {children}
    </MockSettingsContext.Provider>
  );
}

// ============================================================================
// All Providers Wrapper
// ============================================================================

interface AllProvidersProps {
  children: ReactNode;
  aiContextValue?: Partial<MockAIContextValue>;
  settingsContextValue?: Partial<MockSettingsContextValue>;
}

function AllProviders({ children, aiContextValue, settingsContextValue }: AllProvidersProps): ReactElement {
  return (
    <MockSettingsProvider value={settingsContextValue}>
      <MockAIProvider value={aiContextValue}>
        {children}
      </MockAIProvider>
    </MockSettingsProvider>
  );
}

// ============================================================================
// Render Functions
// ============================================================================

/**
 * Render with all providers
 */
export function renderWithProviders(
  ui: ReactElement,
  options: CustomRenderOptions = {}
): RenderResult & { user: ReturnType<typeof userEvent.setup> } {
  const { aiContextValue, settingsContextValue, ...renderOptions } = options;

  const Wrapper = ({ children }: { children: ReactNode }) => (
    <AllProviders aiContextValue={aiContextValue} settingsContextValue={settingsContextValue}>
      {children}
    </AllProviders>
  );

  const user = userEvent.setup();

  return {
    user,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}

/**
 * Render isolated (no providers)
 */
export function renderIsolated(
  ui: ReactElement,
  options: RenderOptions = {}
): RenderResult & { user: ReturnType<typeof userEvent.setup> } {
  const user = userEvent.setup();
  return {
    user,
    ...render(ui, options),
  };
}

// ============================================================================
// Async Utilities
// ============================================================================

/**
 * Wait for a specified duration
 */
export const wait = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Flush all pending promises
 */
export const flushPromises = (): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, 0));

/**
 * Wait for loading to complete
 */
export async function waitForLoadingToComplete(): Promise<void> {
  await waitFor(() => {
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
  });
}

/**
 * Wait for element to appear and then disappear
 */
export async function waitForElementToDisappear(
  getText: () => HTMLElement | null,
  timeout = 5000
): Promise<void> {
  await waitFor(() => expect(getText()).toBeNull(), { timeout });
}

// ============================================================================
// Mock Function Helpers
// ============================================================================

/**
 * Create a typed mock function
 */
export function createMockFn<T extends (...args: unknown[]) => unknown>(): Mock<T> {
  return vi.fn() as Mock<T>;
}

/**
 * Create a mock that resolves with a value
 */
export function mockResolvedValue<T>(value: T): Mock<() => Promise<T>> {
  return vi.fn().mockResolvedValue(value) as Mock<() => Promise<T>>;
}

/**
 * Create a mock that rejects with an error
 */
export function mockRejectedValue(error: Error): Mock<() => Promise<never>> {
  return vi.fn().mockRejectedValue(error) as Mock<() => Promise<never>>;
}

/**
 * Create a mock that resolves once then rejects
 */
export function mockResolveOnceReject<T>(value: T, error: Error): Mock<() => Promise<T>> {
  return vi.fn()
    .mockResolvedValueOnce(value)
    .mockRejectedValue(error) as Mock<() => Promise<T>>;
}

// ============================================================================
// Event Simulation Helpers
// ============================================================================

/**
 * Create a keyboard event
 */
export function createKeyboardEvent(
  key: string,
  options: Partial<KeyboardEventInit> = {}
): KeyboardEvent {
  return new KeyboardEvent('keydown', {
    key,
    code: key,
    bubbles: true,
    cancelable: true,
    ...options,
  });
}

/**
 * Create a mouse event
 */
export function createMouseEvent(
  type: string,
  options: Partial<MouseEventInit> = {}
): MouseEvent {
  return new MouseEvent(type, {
    bubbles: true,
    cancelable: true,
    view: window,
    ...options,
  });
}

/**
 * Simulate typing in an input
 */
export async function typeInInput(
  element: HTMLElement,
  text: string
): Promise<void> {
  const user = userEvent.setup();
  await user.clear(element);
  await user.type(element, text);
}

/**
 * Simulate pressing Enter key
 */
export async function pressEnter(element: HTMLElement): Promise<void> {
  const user = userEvent.setup();
  await user.type(element, '{Enter}');
}

/**
 * Simulate pressing Escape key
 */
export async function pressEscape(): Promise<void> {
  const user = userEvent.setup();
  await user.keyboard('{Escape}');
}

// ============================================================================
// Assertion Helpers
// ============================================================================

/**
 * Assert element is visible and in document
 */
export function expectToBeVisible(element: HTMLElement | null): void {
  expect(element).toBeInTheDocument();
  expect(element).toBeVisible();
}

/**
 * Assert element is not in document
 */
export function expectNotInDocument(element: HTMLElement | null): void {
  expect(element).not.toBeInTheDocument();
}

/**
 * Assert element has text content
 */
export function expectText(element: HTMLElement | null, text: string): void {
  expect(element).toHaveTextContent(text);
}

/**
 * Assert form validation error
 */
export function expectValidationError(element: HTMLElement | null): void {
  expect(element).toHaveAttribute('aria-invalid', 'true');
}

// ============================================================================
// Form Helpers
// ============================================================================

/**
 * Fill a form input by label
 */
export async function fillInput(labelText: string, value: string): Promise<void> {
  const user = userEvent.setup();
  const input = screen.getByLabelText(labelText);
  await user.clear(input);
  await user.type(input, value);
}

/**
 * Select an option from a select element
 */
export async function selectOption(labelText: string, optionText: string): Promise<void> {
  const user = userEvent.setup();
  const select = screen.getByLabelText(labelText);
  await user.selectOptions(select, optionText);
}

/**
 * Toggle a checkbox
 */
export async function toggleCheckbox(labelText: string): Promise<void> {
  const user = userEvent.setup();
  const checkbox = screen.getByLabelText(labelText);
  await user.click(checkbox);
}

/**
 * Submit a form
 */
export async function submitForm(buttonText = 'Submit'): Promise<void> {
  const user = userEvent.setup();
  const button = screen.getByRole('button', { name: buttonText });
  await user.click(button);
}

// ============================================================================
// LocalStorage Helpers
// ============================================================================

/**
 * Set localStorage item
 */
export function setLocalStorageItem(key: string, value: unknown): void {
  window.localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Get localStorage item
 */
export function getLocalStorageItem<T>(key: string): T | null {
  const item = window.localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
}

/**
 * Clear localStorage
 */
export function clearLocalStorage(): void {
  window.localStorage.clear();
}

// ============================================================================
// Date Helpers
// ============================================================================

/**
 * Mock the current date/time
 */
export function mockDate(date: Date | string | number): void {
  vi.setSystemTime(new Date(date));
}

/**
 * Restore real date/time
 */
export function restoreDate(): void {
  vi.useRealTimers();
}

// ============================================================================
// Console Spy Helpers
// ============================================================================

/**
 * Spy on console methods
 */
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

// ============================================================================
// Hook Testing Helpers
// ============================================================================

/**
 * Create a wrapper component for testing hooks
 */
export function createHookWrapper(
  providers: Partial<{
    aiContext: Partial<MockAIContextValue>;
    settingsContext: Partial<MockSettingsContextValue>;
  }> = {}
) {
  return function Wrapper({ children }: { children: ReactNode }) {
    return (
      <AllProviders
        aiContextValue={providers.aiContext}
        settingsContextValue={providers.settingsContext}
      >
        {children}
      </AllProviders>
    );
  };
}

/**
 * Test component for stateful hook testing
 */
export function TestComponent<T>({
  hook,
  onRender,
}: {
  hook: () => T;
  onRender: (result: T) => void;
}) {
  const result = hook();
  onRender(result);
  return null;
}

// ============================================================================
// Re-exports
// ============================================================================

export {
  render,
  screen,
  fireEvent,
  waitFor,
  within,
  act,
  userEvent,
  MockAIContext,
  MockSettingsContext,
};
