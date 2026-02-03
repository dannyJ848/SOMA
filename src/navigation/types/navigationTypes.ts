/**
 * Navigation Type Definitions
 *
 * Core type definitions for the navigation system including
 * state, actions, history, and deep linking.
 */

import type { RouteId, RouteConfig, RouteQueryParams, BodySystemId, BodyRegionId } from './routes';

// ============================================
// Navigation State
// ============================================

/**
 * Current navigation state
 */
export interface NavigationState {
  /** Current route identifier */
  currentRoute: RouteId;
  /** Current route configuration */
  currentRouteConfig: RouteConfig;
  /** Current path */
  currentPath: string;
  /** Route parameters */
  params: Record<string, string>;
  /** Query parameters */
  query: RouteQueryParams;
  /** Previous route */
  previousRoute: RouteId | null;
  /** Navigation history stack */
  historyStack: NavigationHistoryEntry[];
  /** Current position in history */
  historyIndex: number;
  /** Whether navigation is in progress */
  isNavigating: boolean;
  /** Whether navigation is blocked */
  isBlocked: boolean;
  /** Navigation block reason */
  blockReason?: string;
  /** Active modal route */
  modalRoute: RouteId | null;
  /** Drawer/sidebar state */
  drawerOpen: boolean;
  /** Search overlay state */
  searchOpen: boolean;
}

/**
 * Navigation history entry
 */
export interface NavigationHistoryEntry {
  /** Entry ID */
  id: string;
  /** Route identifier */
  routeId: RouteId;
  /** Full path including query */
  path: string;
  /** Route parameters */
  params: Record<string, string>;
  /** Query parameters */
  query: RouteQueryParams;
  /** Entry title */
  title: string;
  /** Timestamp */
  timestamp: number;
  /** Scroll position */
  scrollPosition?: { x: number; y: number };
  /** Additional state data */
  state?: Record<string, unknown>;
}

// ============================================
// Navigation Actions
// ============================================

/**
 * Navigation action types
 */
export type NavigationActionType =
  | 'NAVIGATE'
  | 'NAVIGATE_BACK'
  | 'NAVIGATE_FORWARD'
  | 'REPLACE'
  | 'PUSH'
  | 'POP'
  | 'RESET'
  | 'SET_PARAMS'
  | 'SET_QUERY'
  | 'BLOCK'
  | 'UNBLOCK'
  | 'OPEN_MODAL'
  | 'CLOSE_MODAL'
  | 'TOGGLE_DRAWER'
  | 'TOGGLE_SEARCH';

/**
 * Navigation action payload
 */
export interface NavigationAction {
  type: NavigationActionType;
  payload?: {
    routeId?: RouteId;
    path?: string;
    params?: Record<string, string>;
    query?: RouteQueryParams;
    state?: Record<string, unknown>;
    replace?: boolean;
    reason?: string;
  };
}

/**
 * Navigation options
 */
export interface NavigateOptions {
  /** Replace current entry instead of pushing */
  replace?: boolean;
  /** Preserve query parameters */
  preserveQuery?: boolean;
  /** Additional query parameters to merge */
  mergeQuery?: RouteQueryParams;
  /** State to pass to the route */
  state?: Record<string, unknown>;
  /** Scroll to top on navigation */
  scrollToTop?: boolean;
  /** Scroll to specific element */
  scrollTo?: string;
  /** Animation type */
  animation?: NavigationAnimation;
  /** Skip navigation guards */
  skipGuards?: boolean;
}

/**
 * Navigation animation types
 */
export type NavigationAnimation =
  | 'none'
  | 'fade'
  | 'slide-left'
  | 'slide-right'
  | 'slide-up'
  | 'slide-down'
  | 'zoom';

// ============================================
// Navigation Guards
// ============================================

/**
 * Navigation guard function
 */
export type NavigationGuard = (
  from: NavigationHistoryEntry | null,
  to: { routeId: RouteId; params: Record<string, string>; query: RouteQueryParams }
) => NavigationGuardResult | Promise<NavigationGuardResult>;

/**
 * Navigation guard result
 */
export type NavigationGuardResult =
  | boolean
  | { allowed: false; redirect?: RouteId; message?: string }
  | { allowed: true };

/**
 * Before navigation hook
 */
export type BeforeNavigationHook = (
  from: RouteId | null,
  to: RouteId
) => boolean | Promise<boolean>;

/**
 * After navigation hook
 */
export type AfterNavigationHook = (from: RouteId | null, to: RouteId) => void;

// ============================================
// Deep Linking
// ============================================

/**
 * Deep link configuration
 */
export interface DeepLinkConfig {
  /** URL scheme (e.g., 'biologicalself://') */
  scheme: string;
  /** Host for web links */
  host: string;
  /** Path prefix */
  pathPrefix?: string;
  /** Whether deep linking is enabled */
  enabled: boolean;
}

/**
 * Deep link handler
 */
export interface DeepLinkHandler {
  /** Pattern to match */
  pattern: string | RegExp;
  /** Handler function */
  handler: (url: string, params: Record<string, string>) => DeepLinkResult;
  /** Priority (higher = first) */
  priority?: number;
}

/**
 * Deep link result
 */
export interface DeepLinkResult {
  /** Whether the deep link was handled */
  handled: boolean;
  /** Route to navigate to */
  routeId?: RouteId;
  /** Route parameters */
  params?: Record<string, string>;
  /** Query parameters */
  query?: RouteQueryParams;
  /** Error message if not handled */
  error?: string;
}

/**
 * Parsed deep link
 */
export interface ParsedDeepLink {
  /** Original URL */
  url: string;
  /** Scheme */
  scheme: string;
  /** Host */
  host: string;
  /** Path */
  path: string;
  /** Path segments */
  pathSegments: string[];
  /** Query parameters */
  query: Record<string, string>;
  /** Fragment/hash */
  fragment?: string;
}

// ============================================
// Breadcrumb Types
// ============================================

/**
 * Breadcrumb item
 */
export interface BreadcrumbItem {
  /** Route identifier */
  routeId: RouteId;
  /** Display label */
  label: string;
  /** Navigation path */
  path: string;
  /** Icon */
  icon?: string;
  /** Whether this is the current page */
  isCurrent: boolean;
  /** Whether this item is clickable */
  isClickable: boolean;
  /** Custom data */
  data?: Record<string, unknown>;
}

/**
 * Breadcrumb configuration
 */
export interface BreadcrumbConfig {
  /** Maximum items to show */
  maxItems?: number;
  /** Separator between items */
  separator?: string;
  /** Show home breadcrumb */
  showHome?: boolean;
  /** Custom home label */
  homeLabel?: string;
  /** Collapse middle items */
  collapseMiddle?: boolean;
}

// ============================================
// Tab Navigation Types
// ============================================

/**
 * Tab item configuration
 */
export interface TabItem {
  /** Tab identifier */
  id: string;
  /** Route identifier */
  routeId: RouteId;
  /** Display label */
  label: string;
  /** Icon */
  icon: string;
  /** Badge count */
  badge?: number;
  /** Whether tab is disabled */
  disabled?: boolean;
  /** Whether tab is visible */
  visible?: boolean;
}

/**
 * Tab navigation state
 */
export interface TabNavigationState {
  /** Active tab ID */
  activeTab: string;
  /** Available tabs */
  tabs: TabItem[];
  /** Tab history per tab */
  tabHistory: Record<string, NavigationHistoryEntry[]>;
}

// ============================================
// Side Navigation Types
// ============================================

/**
 * Side navigation item
 */
export interface SideNavItem {
  /** Item identifier */
  id: string;
  /** Route identifier */
  routeId?: RouteId;
  /** Display label */
  label: string;
  /** Icon */
  icon?: string;
  /** Nested items */
  children?: SideNavItem[];
  /** Whether item is expanded */
  expanded?: boolean;
  /** Whether item is active */
  active?: boolean;
  /** Badge */
  badge?: string | number;
  /** Divider after this item */
  divider?: boolean;
  /** Section header (non-clickable) */
  isSection?: boolean;
  /** External link */
  externalUrl?: string;
  /** Click handler for custom actions */
  onClick?: () => void;
}

/**
 * Side navigation configuration
 */
export interface SideNavConfig {
  /** Navigation items */
  items: SideNavItem[];
  /** Whether sidebar is collapsed */
  collapsed: boolean;
  /** Enable hover expand */
  hoverExpand?: boolean;
  /** Width when expanded */
  expandedWidth?: number;
  /** Width when collapsed */
  collapsedWidth?: number;
  /** Show user info at bottom */
  showUserInfo?: boolean;
  /** Show settings at bottom */
  showSettings?: boolean;
}

// ============================================
// Bottom Navigation Types
// ============================================

/**
 * Bottom navigation item
 */
export interface BottomNavItem {
  /** Item identifier */
  id: string;
  /** Route identifier */
  routeId: RouteId;
  /** Display label */
  label: string;
  /** Icon */
  icon: string;
  /** Active icon (optional) */
  activeIcon?: string;
  /** Badge count */
  badge?: number;
  /** Whether item is disabled */
  disabled?: boolean;
}

/**
 * Bottom navigation configuration
 */
export interface BottomNavConfig {
  /** Navigation items */
  items: BottomNavItem[];
  /** Show labels */
  showLabels?: boolean;
  /** Only show label when active */
  showLabelOnlyActive?: boolean;
  /** Hide on scroll */
  hideOnScroll?: boolean;
  /** Safe area bottom padding */
  safeAreaBottom?: number;
}

// ============================================
// Search Navigation Types
// ============================================

/**
 * Search navigation result
 */
export interface SearchNavResult {
  /** Result ID */
  id: string;
  /** Display title */
  title: string;
  /** Description */
  description?: string;
  /** Category */
  category: string;
  /** Route to navigate to */
  routeId: RouteId;
  /** Route parameters */
  params?: Record<string, string>;
  /** Query parameters */
  query?: RouteQueryParams;
  /** Icon */
  icon?: string;
  /** Relevance score */
  score?: number;
  /** Keywords that matched */
  matchedKeywords?: string[];
}

/**
 * Search navigation configuration
 */
export interface SearchNavConfig {
  /** Placeholder text */
  placeholder?: string;
  /** Minimum query length */
  minQueryLength?: number;
  /** Debounce delay in ms */
  debounceDelay?: number;
  /** Maximum results */
  maxResults?: number;
  /** Show recent searches */
  showRecent?: boolean;
  /** Show suggestions */
  showSuggestions?: boolean;
  /** Categories to search */
  categories?: string[];
  /** Keyboard shortcut */
  shortcut?: string;
}

// ============================================
// Navigation Context Types
// ============================================

/**
 * Navigation context value
 */
export interface NavigationContextValue {
  /** Current state */
  state: NavigationState;
  /** Navigate to route */
  navigate: (routeId: RouteId, options?: NavigateOptions) => void;
  /** Navigate with params */
  navigateWithParams: <T extends Record<string, string>>(
    routeId: RouteId,
    params: T,
    options?: NavigateOptions
  ) => void;
  /** Navigate to path */
  navigateToPath: (path: string, options?: NavigateOptions) => void;
  /** Go back */
  goBack: () => void;
  /** Go forward */
  goForward: () => void;
  /** Can go back */
  canGoBack: () => boolean;
  /** Can go forward */
  canGoForward: () => boolean;
  /** Replace current route */
  replace: (routeId: RouteId, options?: NavigateOptions) => void;
  /** Reset navigation stack */
  reset: (routeId?: RouteId) => void;
  /** Set query parameters */
  setQuery: (query: RouteQueryParams, replace?: boolean) => void;
  /** Block navigation */
  blockNavigation: (reason?: string) => () => void;
  /** Open modal */
  openModal: (routeId: RouteId) => void;
  /** Close modal */
  closeModal: () => void;
  /** Toggle drawer */
  toggleDrawer: (open?: boolean) => void;
  /** Toggle search */
  toggleSearch: (open?: boolean) => void;
  /** Add navigation guard */
  addGuard: (guard: NavigationGuard) => () => void;
  /** Get current breadcrumbs */
  getBreadcrumbs: () => BreadcrumbItem[];
}

// ============================================
// Navigation Events
// ============================================

/**
 * Navigation event types
 */
export type NavigationEventType =
  | 'navigation:start'
  | 'navigation:complete'
  | 'navigation:error'
  | 'navigation:blocked'
  | 'navigation:cancelled'
  | 'history:push'
  | 'history:pop'
  | 'history:replace'
  | 'deeplink:received'
  | 'deeplink:handled';

/**
 * Navigation event
 */
export interface NavigationEvent {
  /** Event type */
  type: NavigationEventType;
  /** Timestamp */
  timestamp: number;
  /** From route */
  from?: RouteId;
  /** To route */
  to?: RouteId;
  /** Navigation path */
  path?: string;
  /** Additional data */
  data?: Record<string, unknown>;
}

/**
 * Navigation event listener
 */
export type NavigationEventListener = (event: NavigationEvent) => void;

// ============================================
// Route Transition Types
// ============================================

/**
 * Route transition configuration
 */
export interface RouteTransition {
  /** Transition type */
  type: NavigationAnimation;
  /** Duration in ms */
  duration?: number;
  /** Easing function */
  easing?: string;
  /** Custom CSS class */
  className?: string;
}

/**
 * Transition configuration by route
 */
export interface TransitionConfig {
  /** Default transition */
  default: RouteTransition;
  /** Transitions by route pair */
  pairs?: {
    from: RouteId | '*';
    to: RouteId | '*';
    transition: RouteTransition;
  }[];
}

// ============================================
// Navigation Preload Types
// ============================================

/**
 * Route preload configuration
 */
export interface RoutePreloadConfig {
  /** Route to preload */
  routeId: RouteId;
  /** Preload on hover */
  onHover?: boolean;
  /** Preload on focus */
  onFocus?: boolean;
  /** Preload immediately */
  immediate?: boolean;
  /** Priority */
  priority?: 'low' | 'high';
}

/**
 * Preload state
 */
export interface PreloadState {
  /** Routes currently being preloaded */
  preloading: RouteId[];
  /** Routes that have been preloaded */
  preloaded: RouteId[];
  /** Failed preloads */
  failed: RouteId[];
}
