/**
 * AI Hooks Exports
 *
 * Central export file for all AI-related hooks.
 *
 * @module ai/hooks
 */

// Smart Navigation Hook
export {
  useSmartNavigation,
  useHasNavigationCommands,
  useNavigationActionsFromText,
  type UseSmartNavigationReturn,
  type AnatomyMention,
  type NavigationAction,
  type ParsedAIResponse,
} from './useSmartNavigation';

// Default export
export { default } from './useSmartNavigation';
