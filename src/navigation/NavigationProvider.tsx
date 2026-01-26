/**
 * NavigationProvider
 *
 * Central navigation context and state management for the application.
 * Provides navigation actions, history management, and route state.
 */

import React, {
  createContext,
  useContext,
  useReducer,
  useCallback,
  useEffect,
  useRef,
  useMemo,
  type ReactNode,
} from 'react';

import {
  type NavigationState,
  type NavigationAction,
  type NavigateOptions,
  type NavigationGuard,
  type NavigationGuardResult,
  type NavigationHistoryEntry,
  type NavigationContextValue,
  type NavigationEvent,
  type NavigationEventListener,
  type BreadcrumbItem,
} from './types/navigationTypes';

import {
  type RouteId,
  type RouteQueryParams,
  ROUTES,
  getRouteByPath,
  getBreadcrumbTrail,
  buildPath,
  parsePath,
} from './types/routes';

// ============================================
// Initial State
// ============================================

const createInitialState = (): NavigationState => ({
  currentRoute: 'home',
  currentRouteConfig: ROUTES.home,
  currentPath: '/',
  params: {},
  query: {},
  previousRoute: null,
  historyStack: [
    {
      id: generateId(),
      routeId: 'home',
      path: '/',
      params: {},
      query: {},
      title: 'Home',
      timestamp: Date.now(),
    },
  ],
  historyIndex: 0,
  isNavigating: false,
  isBlocked: false,
  blockReason: undefined,
  modalRoute: null,
  drawerOpen: false,
  searchOpen: false,
});

// ============================================
// Utility Functions
// ============================================

function generateId(): string {
  return `nav-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// ============================================
// Reducer
// ============================================

function navigationReducer(
  state: NavigationState,
  action: NavigationAction
): NavigationState {
  switch (action.type) {
    case 'NAVIGATE':
    case 'PUSH': {
      const { routeId, path, params = {}, query = {}, state: navState } = action.payload || {};
      if (!routeId) return state;

      const route = ROUTES[routeId];
      if (!route) return state;

      const newPath = path || route.path;
      const newEntry: NavigationHistoryEntry = {
        id: generateId(),
        routeId,
        path: newPath,
        params,
        query,
        title: route.title,
        timestamp: Date.now(),
        state: navState,
      };

      // Truncate forward history if navigating from middle of stack
      const newStack = [
        ...state.historyStack.slice(0, state.historyIndex + 1),
        newEntry,
      ];

      return {
        ...state,
        currentRoute: routeId,
        currentRouteConfig: route,
        currentPath: newPath,
        params,
        query,
        previousRoute: state.currentRoute,
        historyStack: newStack,
        historyIndex: newStack.length - 1,
        isNavigating: false,
      };
    }

    case 'REPLACE': {
      const { routeId, path, params = {}, query = {}, state: navState } = action.payload || {};
      if (!routeId) return state;

      const route = ROUTES[routeId];
      if (!route) return state;

      const newPath = path || route.path;
      const newEntry: NavigationHistoryEntry = {
        id: generateId(),
        routeId,
        path: newPath,
        params,
        query,
        title: route.title,
        timestamp: Date.now(),
        state: navState,
      };

      const newStack = [...state.historyStack];
      newStack[state.historyIndex] = newEntry;

      return {
        ...state,
        currentRoute: routeId,
        currentRouteConfig: route,
        currentPath: newPath,
        params,
        query,
        historyStack: newStack,
        isNavigating: false,
      };
    }

    case 'NAVIGATE_BACK':
    case 'POP': {
      if (state.historyIndex <= 0) return state;

      const newIndex = state.historyIndex - 1;
      const entry = state.historyStack[newIndex];
      const route = ROUTES[entry.routeId];

      return {
        ...state,
        currentRoute: entry.routeId,
        currentRouteConfig: route,
        currentPath: entry.path,
        params: entry.params,
        query: entry.query,
        previousRoute: state.currentRoute,
        historyIndex: newIndex,
        isNavigating: false,
      };
    }

    case 'NAVIGATE_FORWARD': {
      if (state.historyIndex >= state.historyStack.length - 1) return state;

      const newIndex = state.historyIndex + 1;
      const entry = state.historyStack[newIndex];
      const route = ROUTES[entry.routeId];

      return {
        ...state,
        currentRoute: entry.routeId,
        currentRouteConfig: route,
        currentPath: entry.path,
        params: entry.params,
        query: entry.query,
        previousRoute: state.currentRoute,
        historyIndex: newIndex,
        isNavigating: false,
      };
    }

    case 'RESET': {
      const routeId = action.payload?.routeId || 'home';
      const route = ROUTES[routeId];

      const newEntry: NavigationHistoryEntry = {
        id: generateId(),
        routeId,
        path: route.path,
        params: {},
        query: {},
        title: route.title,
        timestamp: Date.now(),
      };

      return {
        ...createInitialState(),
        currentRoute: routeId,
        currentRouteConfig: route,
        currentPath: route.path,
        historyStack: [newEntry],
      };
    }

    case 'SET_PARAMS': {
      const { params = {} } = action.payload || {};
      return {
        ...state,
        params: { ...state.params, ...params },
      };
    }

    case 'SET_QUERY': {
      const { query = {}, replace } = action.payload || {};
      const newQuery = replace ? query : { ...state.query, ...query };

      // Update current history entry
      const newStack = [...state.historyStack];
      newStack[state.historyIndex] = {
        ...newStack[state.historyIndex],
        query: newQuery,
      };

      return {
        ...state,
        query: newQuery,
        historyStack: newStack,
      };
    }

    case 'BLOCK': {
      return {
        ...state,
        isBlocked: true,
        blockReason: action.payload?.reason,
      };
    }

    case 'UNBLOCK': {
      return {
        ...state,
        isBlocked: false,
        blockReason: undefined,
      };
    }

    case 'OPEN_MODAL': {
      return {
        ...state,
        modalRoute: action.payload?.routeId || null,
      };
    }

    case 'CLOSE_MODAL': {
      return {
        ...state,
        modalRoute: null,
      };
    }

    case 'TOGGLE_DRAWER': {
      return {
        ...state,
        drawerOpen: action.payload?.routeId !== undefined
          ? Boolean(action.payload.routeId)
          : !state.drawerOpen,
      };
    }

    case 'TOGGLE_SEARCH': {
      return {
        ...state,
        searchOpen: action.payload?.routeId !== undefined
          ? Boolean(action.payload.routeId)
          : !state.searchOpen,
      };
    }

    default:
      return state;
  }
}

// ============================================
// Context
// ============================================

const NavigationContext = createContext<NavigationContextValue | null>(null);

// ============================================
// Provider Props
// ============================================

export interface NavigationProviderProps {
  children: ReactNode;
  /** Initial route */
  initialRoute?: RouteId;
  /** Initial path (for deep linking) */
  initialPath?: string;
  /** Enable browser history integration */
  useBrowserHistory?: boolean;
  /** Base path for routing */
  basePath?: string;
  /** On navigation change callback */
  onNavigationChange?: (state: NavigationState) => void;
}

// ============================================
// Provider Component
// ============================================

export function NavigationProvider({
  children,
  initialRoute,
  initialPath,
  useBrowserHistory = true,
  basePath = '',
  onNavigationChange,
}: NavigationProviderProps) {
  // Initialize state
  const getInitialState = useCallback((): NavigationState => {
    const state = createInitialState();

    // Handle initial path
    if (initialPath) {
      const parsed = parsePath(initialPath);
      if (parsed) {
        const entry: NavigationHistoryEntry = {
          id: generateId(),
          routeId: parsed.route.id,
          path: initialPath,
          params: parsed.params,
          query: parsed.query,
          title: parsed.route.title,
          timestamp: Date.now(),
        };

        return {
          ...state,
          currentRoute: parsed.route.id,
          currentRouteConfig: parsed.route,
          currentPath: initialPath,
          params: parsed.params,
          query: parsed.query,
          historyStack: [entry],
        };
      }
    }

    // Handle initial route
    if (initialRoute && ROUTES[initialRoute]) {
      const route = ROUTES[initialRoute];
      const entry: NavigationHistoryEntry = {
        id: generateId(),
        routeId: initialRoute,
        path: route.path,
        params: {},
        query: {},
        title: route.title,
        timestamp: Date.now(),
      };

      return {
        ...state,
        currentRoute: initialRoute,
        currentRouteConfig: route,
        currentPath: route.path,
        historyStack: [entry],
      };
    }

    return state;
  }, [initialPath, initialRoute]);

  const [state, dispatch] = useReducer(navigationReducer, undefined, getInitialState);

  // Guards registry
  const guardsRef = useRef<NavigationGuard[]>([]);

  // Event listeners
  const listenersRef = useRef<NavigationEventListener[]>([]);

  // Emit navigation events
  const emitEvent = useCallback((event: NavigationEvent) => {
    listenersRef.current.forEach((listener) => {
      try {
        listener(event);
      } catch (error) {
        console.error('Navigation event listener error:', error);
      }
    });
  }, []);

  // Run navigation guards
  const runGuards = useCallback(
    async (
      from: NavigationHistoryEntry | null,
      to: { routeId: RouteId; params: Record<string, string>; query: RouteQueryParams }
    ): Promise<NavigationGuardResult> => {
      for (const guard of guardsRef.current) {
        try {
          const result = await guard(from, to);
          if (result === false || (typeof result === 'object' && !result.allowed)) {
            return result;
          }
        } catch (error) {
          console.error('Navigation guard error:', error);
          return { allowed: false, message: 'Navigation guard failed' };
        }
      }
      return { allowed: true };
    },
    []
  );

  // Navigate function
  const navigate = useCallback(
    async (routeId: RouteId, options: NavigateOptions = {}) => {
      if (state.isBlocked && !options.skipGuards) {
        emitEvent({
          type: 'navigation:blocked',
          timestamp: Date.now(),
          from: state.currentRoute,
          to: routeId,
          data: { reason: state.blockReason },
        });
        return;
      }

      const route = ROUTES[routeId];
      if (!route) {
        console.warn(`Route not found: ${routeId}`);
        return;
      }

      // Prepare navigation target
      const target = {
        routeId,
        params: {},
        query: options.preserveQuery
          ? { ...state.query, ...options.mergeQuery }
          : options.mergeQuery || {},
      };

      // Run guards
      if (!options.skipGuards) {
        const guardResult = await runGuards(
          state.historyStack[state.historyIndex] || null,
          target
        );

        if (guardResult === false || (typeof guardResult === 'object' && !guardResult.allowed)) {
          emitEvent({
            type: 'navigation:blocked',
            timestamp: Date.now(),
            from: state.currentRoute,
            to: routeId,
            data: { guardResult },
          });
          return;
        }
      }

      emitEvent({
        type: 'navigation:start',
        timestamp: Date.now(),
        from: state.currentRoute,
        to: routeId,
      });

      const actionType = options.replace ? 'REPLACE' : 'PUSH';
      dispatch({
        type: actionType,
        payload: {
          routeId,
          path: route.path,
          params: target.params,
          query: target.query,
          state: options.state,
        },
      });

      // Handle scroll behavior
      if (options.scrollToTop !== false) {
        window.scrollTo(0, 0);
      } else if (options.scrollTo) {
        const element = document.getElementById(options.scrollTo);
        element?.scrollIntoView({ behavior: 'smooth' });
      }

      emitEvent({
        type: 'navigation:complete',
        timestamp: Date.now(),
        from: state.currentRoute,
        to: routeId,
      });
    },
    [state, runGuards, emitEvent]
  );

  // Navigate with params
  const navigateWithParams = useCallback(
    <T extends Record<string, string>>(
      routeId: RouteId,
      params: T,
      options: NavigateOptions = {}
    ) => {
      const route = ROUTES[routeId];
      if (!route) return;

      // Build path with params
      let path = route.path;
      for (const [key, value] of Object.entries(params)) {
        path = path.replace(`:${key}`, value);
      }

      const query = options.preserveQuery
        ? { ...state.query, ...options.mergeQuery }
        : options.mergeQuery || {};

      dispatch({
        type: options.replace ? 'REPLACE' : 'PUSH',
        payload: {
          routeId,
          path,
          params,
          query,
          state: options.state,
        },
      });

      if (options.scrollToTop !== false) {
        window.scrollTo(0, 0);
      }
    },
    [state.query]
  );

  // Navigate to path
  const navigateToPath = useCallback(
    (path: string, options: NavigateOptions = {}) => {
      const parsed = parsePath(path);
      if (!parsed) {
        console.warn(`Invalid path: ${path}`);
        navigate('not-found');
        return;
      }

      dispatch({
        type: options.replace ? 'REPLACE' : 'PUSH',
        payload: {
          routeId: parsed.route.id,
          path,
          params: parsed.params,
          query: parsed.query,
          state: options.state,
        },
      });

      if (options.scrollToTop !== false) {
        window.scrollTo(0, 0);
      }
    },
    [navigate]
  );

  // Go back
  const goBack = useCallback(() => {
    if (state.historyIndex > 0) {
      emitEvent({
        type: 'history:pop',
        timestamp: Date.now(),
        from: state.currentRoute,
      });
      dispatch({ type: 'NAVIGATE_BACK' });
    }
  }, [state.historyIndex, state.currentRoute, emitEvent]);

  // Go forward
  const goForward = useCallback(() => {
    if (state.historyIndex < state.historyStack.length - 1) {
      dispatch({ type: 'NAVIGATE_FORWARD' });
    }
  }, [state.historyIndex, state.historyStack.length]);

  // Can go back
  const canGoBack = useCallback(() => {
    return state.historyIndex > 0;
  }, [state.historyIndex]);

  // Can go forward
  const canGoForward = useCallback(() => {
    return state.historyIndex < state.historyStack.length - 1;
  }, [state.historyIndex, state.historyStack.length]);

  // Replace current route
  const replace = useCallback(
    (routeId: RouteId, options: NavigateOptions = {}) => {
      navigate(routeId, { ...options, replace: true });
    },
    [navigate]
  );

  // Reset navigation
  const reset = useCallback((routeId?: RouteId) => {
    dispatch({ type: 'RESET', payload: { routeId } });
  }, []);

  // Set query parameters
  const setQuery = useCallback(
    (query: RouteQueryParams, replaceExisting = false) => {
      dispatch({
        type: 'SET_QUERY',
        payload: { query, replace: replaceExisting },
      });
    },
    []
  );

  // Block navigation
  const blockNavigation = useCallback((reason?: string) => {
    dispatch({ type: 'BLOCK', payload: { reason } });
    return () => {
      dispatch({ type: 'UNBLOCK' });
    };
  }, []);

  // Open modal
  const openModal = useCallback((routeId: RouteId) => {
    dispatch({ type: 'OPEN_MODAL', payload: { routeId } });
  }, []);

  // Close modal
  const closeModal = useCallback(() => {
    dispatch({ type: 'CLOSE_MODAL' });
  }, []);

  // Toggle drawer
  const toggleDrawer = useCallback((open?: boolean) => {
    dispatch({
      type: 'TOGGLE_DRAWER',
      payload: open !== undefined ? { routeId: open ? 'home' : undefined } : undefined
    });
  }, []);

  // Toggle search
  const toggleSearch = useCallback((open?: boolean) => {
    dispatch({
      type: 'TOGGLE_SEARCH',
      payload: open !== undefined ? { routeId: open ? 'search' : undefined } : undefined
    });
  }, []);

  // Add navigation guard
  const addGuard = useCallback((guard: NavigationGuard) => {
    guardsRef.current.push(guard);
    return () => {
      guardsRef.current = guardsRef.current.filter((g) => g !== guard);
    };
  }, []);

  // Get breadcrumbs
  const getBreadcrumbs = useCallback((): BreadcrumbItem[] => {
    const trail = getBreadcrumbTrail(state.currentRoute);
    return trail.map((route, index) => {
      const isLast = index === trail.length - 1;
      let path = route.path;

      // Replace params in path
      for (const [key, value] of Object.entries(state.params)) {
        path = path.replace(`:${key}`, value);
      }

      return {
        routeId: route.id,
        label: route.shortTitle || route.title,
        path,
        icon: route.icon,
        isCurrent: isLast,
        isClickable: !isLast,
      };
    });
  }, [state.currentRoute, state.params]);

  // Browser history integration
  useEffect(() => {
    if (!useBrowserHistory) return;

    // Handle browser back/forward
    const handlePopState = (event: PopStateEvent) => {
      const path = window.location.pathname + window.location.search;
      navigateToPath(path, { skipGuards: true });
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [useBrowserHistory, navigateToPath]);

  // Update browser URL when state changes
  useEffect(() => {
    if (!useBrowserHistory) return;

    const path = state.currentPath;
    const queryString = Object.entries(state.query)
      .filter(([_, v]) => v !== undefined && v !== null)
      .map(([k, v]) => `${k}=${encodeURIComponent(String(v))}`)
      .join('&');

    const fullPath = queryString ? `${basePath}${path}?${queryString}` : `${basePath}${path}`;

    if (window.location.pathname + window.location.search !== fullPath) {
      window.history.pushState({ routeId: state.currentRoute }, '', fullPath);
    }
  }, [state.currentPath, state.query, state.currentRoute, useBrowserHistory, basePath]);

  // Notify on navigation change
  useEffect(() => {
    onNavigationChange?.(state);
  }, [state, onNavigationChange]);

  // Context value
  const value = useMemo<NavigationContextValue>(
    () => ({
      state,
      navigate,
      navigateWithParams,
      navigateToPath,
      goBack,
      goForward,
      canGoBack,
      canGoForward,
      replace,
      reset,
      setQuery,
      blockNavigation,
      openModal,
      closeModal,
      toggleDrawer,
      toggleSearch,
      addGuard,
      getBreadcrumbs,
    }),
    [
      state,
      navigate,
      navigateWithParams,
      navigateToPath,
      goBack,
      goForward,
      canGoBack,
      canGoForward,
      replace,
      reset,
      setQuery,
      blockNavigation,
      openModal,
      closeModal,
      toggleDrawer,
      toggleSearch,
      addGuard,
      getBreadcrumbs,
    ]
  );

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

// ============================================
// Context Hook
// ============================================

export function useNavigationContext(): NavigationContextValue {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigationContext must be used within a NavigationProvider');
  }
  return context;
}

// Export context for advanced usage
export { NavigationContext };
