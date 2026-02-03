/**
 * Test Render Helpers
 *
 * Custom render functions with providers for testing React components.
 */

import React, { ReactElement, ReactNode } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// ============================================================================
// Mock Providers
// ============================================================================

interface MockAIContextValue {
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

const defaultAIContext: MockAIContextValue = {
  isAvailable: true,
  isLoading: false,
  error: null,
  currentModel: 'test-model',
  explanationLevel: 'intermediate',
  includePersonalization: true,
  includePubMed: false,
  streamingEnabled: false,
  dashboardData: null,
  setExplanationLevel: () => {},
  chatWithRAG: async () => ({ content: 'Mock response', model: 'test', done: true, citations: [] }),
  checkHealth: async () => ({ available: true }),
};

// Create a mock AI Context
const MockAIContext = React.createContext<MockAIContextValue>(defaultAIContext);

export function MockAIProvider({
  children,
  value = {},
}: {
  children: ReactNode;
  value?: Partial<MockAIContextValue>;
}) {
  const contextValue = { ...defaultAIContext, ...value };
  return <MockAIContext.Provider value={contextValue}>{children}</MockAIContext.Provider>;
}

// ============================================================================
// All Providers Wrapper
// ============================================================================

interface AllProvidersProps {
  children: ReactNode;
  aiContextValue?: Partial<MockAIContextValue>;
}

function AllProviders({ children, aiContextValue }: AllProvidersProps): ReactElement {
  return (
    <MockAIProvider value={aiContextValue}>
      {children}
    </MockAIProvider>
  );
}

// ============================================================================
// Custom Render Functions
// ============================================================================

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  aiContextValue?: Partial<MockAIContextValue>;
}

/**
 * Custom render function that wraps components with all necessary providers
 */
export function renderWithProviders(
  ui: ReactElement,
  options: CustomRenderOptions = {}
): RenderResult & { user: ReturnType<typeof userEvent.setup> } {
  const { aiContextValue, ...renderOptions } = options;

  const Wrapper = ({ children }: { children: ReactNode }) => (
    <AllProviders aiContextValue={aiContextValue}>{children}</AllProviders>
  );

  const user = userEvent.setup();

  return {
    user,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}

/**
 * Render without any providers (for unit testing isolated components)
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
// Re-exports
// ============================================================================

export { render, screen, fireEvent, waitFor, within, act } from '@testing-library/react';
export { userEvent };
export { MockAIContext, defaultAIContext };
export type { MockAIContextValue, CustomRenderOptions };
