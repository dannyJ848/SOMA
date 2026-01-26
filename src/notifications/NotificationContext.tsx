/**
 * Notification Context
 * Centralized state management for the notification system
 */

import React, { createContext, useContext, useReducer, useCallback, useEffect, useState } from 'react';
import type {
  Notification,
  ToastNotification,
  NotificationCenterState,
  NotificationAction,
  NotificationPreferences,
  NotificationCategory,
  NotificationPriority,
} from './types';
import { DEFAULT_NOTIFICATION_PREFERENCES } from './types';

// Storage keys
const NOTIFICATIONS_KEY = 'biological_self_notifications';
const PREFERENCES_KEY = 'biological_self_notification_prefs';

// Generate unique ID
const generateId = (): string => {
  return `notif_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// Initial state
const initialState: NotificationCenterState = {
  notifications: [],
  unreadCount: 0,
  isOpen: false,
  filter: 'all',
  sortBy: 'timestamp',
};

// Reducer
function notificationReducer(
  state: NotificationCenterState,
  action: NotificationAction
): NotificationCenterState {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifications: [action.payload, ...state.notifications],
        unreadCount: state.unreadCount + 1,
      };

    case 'REMOVE_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.filter((n) => n.id !== action.payload),
        unreadCount: state.notifications.find((n) => n.id === action.payload && !n.read)
          ? state.unreadCount - 1
          : state.unreadCount,
      };

    case 'MARK_READ': {
      const notification = state.notifications.find((n) => n.id === action.payload);
      if (!notification || notification.read) return state;
      return {
        ...state,
        notifications: state.notifications.map((n) =>
          n.id === action.payload ? { ...n, read: true } : n
        ),
        unreadCount: Math.max(0, state.unreadCount - 1),
      };
    }

    case 'MARK_ALL_READ':
      return {
        ...state,
        notifications: state.notifications.map((n) => ({ ...n, read: true })),
        unreadCount: 0,
      };

    case 'DISMISS':
      return {
        ...state,
        notifications: state.notifications.map((n) =>
          n.id === action.payload ? { ...n, dismissed: true, read: true } : n
        ),
        unreadCount: state.notifications.find((n) => n.id === action.payload && !n.read)
          ? state.unreadCount - 1
          : state.unreadCount,
      };

    case 'DISMISS_ALL':
      return {
        ...state,
        notifications: state.notifications.map((n) => ({ ...n, dismissed: true, read: true })),
        unreadCount: 0,
      };

    case 'SET_FILTER':
      return { ...state, filter: action.payload };

    case 'SET_SORT':
      return { ...state, sortBy: action.payload };

    case 'TOGGLE_CENTER':
      return { ...state, isOpen: !state.isOpen };

    case 'CLEAR_EXPIRED':
      const now = new Date();
      const validNotifications = state.notifications.filter(
        (n) => !n.expiresAt || new Date(n.expiresAt) > now
      );
      const expiredUnread = state.notifications.filter(
        (n) => n.expiresAt && new Date(n.expiresAt) <= now && !n.read
      ).length;
      return {
        ...state,
        notifications: validNotifications,
        unreadCount: Math.max(0, state.unreadCount - expiredUnread),
      };

    default:
      return state;
  }
}

// Context types
interface NotificationContextValue {
  state: NotificationCenterState;
  preferences: NotificationPreferences;
  toasts: ToastNotification[];

  // Actions
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp' | 'read' | 'dismissed'>) => string;
  removeNotification: (id: string) => void;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  dismiss: (id: string) => void;
  dismissAll: () => void;
  setFilter: (filter: NotificationCategory | 'all') => void;
  setSortBy: (sort: 'timestamp' | 'priority' | 'category') => void;
  toggleCenter: () => void;
  openCenter: () => void;
  closeCenter: () => void;

  // Toast actions
  showToast: (toast: Omit<ToastNotification, 'id' | 'timestamp'>) => string;
  dismissToast: (id: string) => void;

  // Preference actions
  updatePreferences: (prefs: Partial<NotificationPreferences>) => void;
  toggleCategory: (category: NotificationCategory, enabled: boolean) => void;

  // Utility
  getFilteredNotifications: () => Notification[];
  isQuietHoursActive: () => boolean;
  shouldShowNotification: (category: NotificationCategory, priority: NotificationPriority) => boolean;
}

const NotificationContext = createContext<NotificationContextValue | null>(null);

// Load from storage
function loadFromStorage<T>(key: string, defaultValue: T): T {
  try {
    const stored = localStorage.getItem(key);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Convert date strings back to Date objects for notifications
      if (key === NOTIFICATIONS_KEY && Array.isArray(parsed)) {
        return parsed.map((n: Notification) => ({
          ...n,
          timestamp: new Date(n.timestamp),
          expiresAt: n.expiresAt ? new Date(n.expiresAt) : undefined,
        })) as T;
      }
      return parsed;
    }
  } catch (e) {
    console.error(`Error loading ${key} from storage:`, e);
  }
  return defaultValue;
}

// Save to storage
function saveToStorage<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(`Error saving ${key} to storage:`, e);
  }
}

// Provider component
export function NotificationProvider({ children }: { children: React.ReactNode }) {
  // Load initial state from storage
  const [state, dispatch] = useReducer(notificationReducer, initialState, (initial) => {
    const storedNotifications = loadFromStorage<Notification[]>(NOTIFICATIONS_KEY, []);
    const unreadCount = storedNotifications.filter((n) => !n.read && !n.dismissed).length;
    return {
      ...initial,
      notifications: storedNotifications,
      unreadCount,
    };
  });

  const [preferences, setPreferences] = useState<NotificationPreferences>(() =>
    loadFromStorage(PREFERENCES_KEY, DEFAULT_NOTIFICATION_PREFERENCES)
  );

  const [toasts, setToasts] = useState<ToastNotification[]>([]);

  // Persist notifications to storage
  useEffect(() => {
    saveToStorage(NOTIFICATIONS_KEY, state.notifications);
  }, [state.notifications]);

  // Persist preferences to storage
  useEffect(() => {
    saveToStorage(PREFERENCES_KEY, preferences);
  }, [preferences]);

  // Clear expired notifications periodically
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: 'CLEAR_EXPIRED' });
    }, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  // Check if quiet hours are active
  const isQuietHoursActive = useCallback((): boolean => {
    if (!preferences.quietHours.enabled) return false;

    const now = new Date();
    const currentDay = now.getDay();
    if (!preferences.quietHours.daysOfWeek.includes(currentDay)) return false;

    const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    const { startTime, endTime } = preferences.quietHours;

    // Handle overnight quiet hours
    if (startTime > endTime) {
      return currentTime >= startTime || currentTime < endTime;
    }
    return currentTime >= startTime && currentTime < endTime;
  }, [preferences.quietHours]);

  // Check if notification should be shown
  const shouldShowNotification = useCallback(
    (category: NotificationCategory, priority: NotificationPriority): boolean => {
      if (!preferences.enabled) return false;

      const categoryPref = preferences.categories[category];
      if (!categoryPref?.enabled) return false;

      if (isQuietHoursActive()) {
        return preferences.quietHours.allowUrgent && priority === 'urgent';
      }

      return true;
    },
    [preferences, isQuietHoursActive]
  );

  // Add notification
  const addNotification = useCallback(
    (notification: Omit<Notification, 'id' | 'timestamp' | 'read' | 'dismissed'>): string => {
      const id = generateId();
      const fullNotification: Notification = {
        ...notification,
        id,
        timestamp: new Date(),
        read: false,
        dismissed: false,
      };

      if (shouldShowNotification(notification.category, notification.priority)) {
        dispatch({ type: 'ADD_NOTIFICATION', payload: fullNotification });
      }

      return id;
    },
    [shouldShowNotification]
  );

  // Show toast
  const showToast = useCallback(
    (toast: Omit<ToastNotification, 'id' | 'timestamp'>): string => {
      const id = generateId();
      const fullToast: ToastNotification = {
        ...toast,
        id,
        timestamp: new Date(),
        duration: toast.duration ?? 5000,
        position: toast.position ?? 'top-right',
      };

      if (shouldShowNotification(toast.category, toast.priority)) {
        setToasts((prev) => [...prev, fullToast]);

        // Auto-dismiss after duration
        if (fullToast.duration && fullToast.duration > 0) {
          setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
          }, fullToast.duration);
        }
      }

      return id;
    },
    [shouldShowNotification]
  );

  // Dismiss toast
  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  // Update preferences
  const updatePreferences = useCallback((prefs: Partial<NotificationPreferences>) => {
    setPreferences((prev) => ({ ...prev, ...prefs }));
  }, []);

  // Toggle category
  const toggleCategory = useCallback((category: NotificationCategory, enabled: boolean) => {
    setPreferences((prev) => ({
      ...prev,
      categories: {
        ...prev.categories,
        [category]: {
          ...prev.categories[category],
          enabled,
        },
      },
    }));
  }, []);

  // Get filtered notifications
  const getFilteredNotifications = useCallback((): Notification[] => {
    let filtered = state.notifications.filter((n) => !n.dismissed);

    if (state.filter !== 'all') {
      filtered = filtered.filter((n) => n.category === state.filter);
    }

    // Sort
    const priorityOrder: Record<NotificationPriority, number> = {
      urgent: 0,
      high: 1,
      medium: 2,
      low: 3,
    };

    return [...filtered].sort((a, b) => {
      switch (state.sortBy) {
        case 'priority':
          return priorityOrder[a.priority] - priorityOrder[b.priority];
        case 'category':
          return a.category.localeCompare(b.category);
        case 'timestamp':
        default:
          return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
      }
    });
  }, [state.notifications, state.filter, state.sortBy]);

  // Context value
  const value: NotificationContextValue = {
    state,
    preferences,
    toasts,
    addNotification,
    removeNotification: useCallback((id: string) => dispatch({ type: 'REMOVE_NOTIFICATION', payload: id }), []),
    markAsRead: useCallback((id: string) => dispatch({ type: 'MARK_READ', payload: id }), []),
    markAllAsRead: useCallback(() => dispatch({ type: 'MARK_ALL_READ' }), []),
    dismiss: useCallback((id: string) => dispatch({ type: 'DISMISS', payload: id }), []),
    dismissAll: useCallback(() => dispatch({ type: 'DISMISS_ALL' }), []),
    setFilter: useCallback((filter) => dispatch({ type: 'SET_FILTER', payload: filter }), []),
    setSortBy: useCallback((sort) => dispatch({ type: 'SET_SORT', payload: sort }), []),
    toggleCenter: useCallback(() => dispatch({ type: 'TOGGLE_CENTER' }), []),
    openCenter: useCallback(() => {
      if (!state.isOpen) dispatch({ type: 'TOGGLE_CENTER' });
    }, [state.isOpen]),
    closeCenter: useCallback(() => {
      if (state.isOpen) dispatch({ type: 'TOGGLE_CENTER' });
    }, [state.isOpen]),
    showToast,
    dismissToast,
    updatePreferences,
    toggleCategory,
    getFilteredNotifications,
    isQuietHoursActive,
    shouldShowNotification,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}

// Hook to use notification context
export function useNotifications(): NotificationContextValue {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
}
