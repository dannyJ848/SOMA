/**
 * Notification Center Component
 * Full notification center with filtering, sorting, and management
 */

import React, { useRef, useEffect } from 'react';
import { useNotifications } from './NotificationContext';
import type { Notification, NotificationCategory, NotificationType } from './types';
import './notifications.css';

// Category icons
const CategoryIcons: Record<NotificationCategory, React.ReactNode> = {
  health: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  medication: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10.5 20.5L4 14 7 11 3 7 7 3l4 4 3-3 6.5 6.5a5 5 0 01-7 7z" />
    </svg>
  ),
  appointment: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  vital: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  symptom: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  ),
  education: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  ),
  quiz: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  tip: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  ),
  system: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  sync: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  ),
  update: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  ),
};

// Type colors
const typeColors: Record<NotificationType, string> = {
  info: 'var(--accent)',
  success: 'var(--success)',
  warning: 'var(--warning)',
  error: 'var(--error)',
};

// Format relative time
function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - new Date(date).getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return new Date(date).toLocaleDateString();
}

// Single notification item
function NotificationItem({
  notification,
  onDismiss,
  onClick,
}: {
  notification: Notification;
  onDismiss: () => void;
  onClick: () => void;
}) {
  return (
    <div
      className={`notification-item ${!notification.read ? 'unread' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      <div className="notification-type-indicator" style={{ backgroundColor: typeColors[notification.type] }} />
      <div className="notification-icon" style={{ color: typeColors[notification.type] }}>
        {CategoryIcons[notification.category]}
      </div>
      <div className="notification-content">
        <div className="notification-header">
          <span className="notification-title">{notification.title}</span>
          <span className="notification-time">{formatRelativeTime(notification.timestamp)}</span>
        </div>
        <p className="notification-message">{notification.message}</p>
        {notification.actionLabel && (
          <button
            className="notification-action-btn"
            onClick={(e) => {
              e.stopPropagation();
              if (notification.actionUrl) {
                window.location.href = notification.actionUrl;
              }
            }}
          >
            {notification.actionLabel}
          </button>
        )}
      </div>
      <button
        className="notification-dismiss"
        onClick={(e) => {
          e.stopPropagation();
          onDismiss();
        }}
        aria-label="Dismiss"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      {!notification.read && <div className="notification-unread-dot" />}
    </div>
  );
}

// Category filter button
function CategoryFilter({
  category,
  label,
  isActive,
  count,
  onClick,
}: {
  category: NotificationCategory | 'all';
  label: string;
  isActive: boolean;
  count: number;
  onClick: () => void;
}) {
  return (
    <button
      className={`category-filter ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {category !== 'all' && CategoryIcons[category]}
      <span>{label}</span>
      {count > 0 && <span className="filter-count">{count}</span>}
    </button>
  );
}

// Main notification center
export function NotificationCenter() {
  const {
    state,
    getFilteredNotifications,
    markAsRead,
    markAllAsRead,
    dismiss,
    dismissAll,
    setFilter,
    setSortBy,
    closeCenter,
  } = useNotifications();

  const panelRef = useRef<HTMLDivElement>(null);
  const notifications = getFilteredNotifications();

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        closeCenter();
      }
    }

    if (state.isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [state.isOpen, closeCenter]);

  // Close on escape
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        closeCenter();
      }
    }

    if (state.isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [state.isOpen, closeCenter]);

  if (!state.isOpen) return null;

  // Calculate category counts
  const categoryCounts = state.notifications.reduce((acc, n) => {
    if (!n.dismissed) {
      acc[n.category] = (acc[n.category] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  const categories: { key: NotificationCategory | 'all'; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'health', label: 'Health' },
    { key: 'medication', label: 'Meds' },
    { key: 'appointment', label: 'Appts' },
    { key: 'vital', label: 'Vitals' },
    { key: 'education', label: 'Learn' },
    { key: 'system', label: 'System' },
  ];

  return (
    <div className="notification-center-overlay">
      <div className="notification-center" ref={panelRef} role="dialog" aria-label="Notifications">
        {/* Header */}
        <div className="notification-center-header">
          <h2>Notifications</h2>
          <div className="header-actions">
            {state.unreadCount > 0 && (
              <button className="header-action" onClick={markAllAsRead}>
                Mark all read
              </button>
            )}
            {notifications.length > 0 && (
              <button className="header-action" onClick={dismissAll}>
                Clear all
              </button>
            )}
            <button className="close-btn" onClick={closeCenter} aria-label="Close notifications">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Category filters */}
        <div className="category-filters">
          {categories.map(({ key, label }) => (
            <CategoryFilter
              key={key}
              category={key}
              label={label}
              isActive={state.filter === key}
              count={key === 'all' ? state.notifications.filter((n) => !n.dismissed).length : categoryCounts[key] || 0}
              onClick={() => setFilter(key)}
            />
          ))}
        </div>

        {/* Sort controls */}
        <div className="sort-controls">
          <span>Sort by:</span>
          <select
            value={state.sortBy}
            onChange={(e) => setSortBy(e.target.value as 'timestamp' | 'priority' | 'category')}
          >
            <option value="timestamp">Recent</option>
            <option value="priority">Priority</option>
            <option value="category">Category</option>
          </select>
        </div>

        {/* Notification list */}
        <div className="notification-list">
          {notifications.length === 0 ? (
            <div className="empty-notifications">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
              <p>No notifications</p>
              <span>You're all caught up!</span>
            </div>
          ) : (
            notifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
                onDismiss={() => dismiss(notification.id)}
                onClick={() => markAsRead(notification.id)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

// Notification bell button for header
export function NotificationBell() {
  const { state, toggleCenter } = useNotifications();

  return (
    <button
      className="notification-bell"
      onClick={toggleCenter}
      aria-label={`Notifications ${state.unreadCount > 0 ? `(${state.unreadCount} unread)` : ''}`}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
      {state.unreadCount > 0 && (
        <span className="notification-badge">
          {state.unreadCount > 99 ? '99+' : state.unreadCount}
        </span>
      )}
    </button>
  );
}
