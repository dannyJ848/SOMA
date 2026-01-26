/**
 * Toast Notification Component
 * Displays temporary toast notifications with animations
 */

import React, { useEffect, useState } from 'react';
import { useNotifications } from './NotificationContext';
import type { ToastNotification, NotificationType } from './types';
import './notifications.css';

// Icons for notification types
const TypeIcons: Record<NotificationType, React.ReactNode> = {
  info: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  ),
  success: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  warning: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  error: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  ),
};

// Single toast item
function ToastItem({ toast, onDismiss }: { toast: ToastNotification; onDismiss: () => void }) {
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (!toast.duration || toast.duration <= 0) return;

    const startTime = Date.now();
    const endTime = startTime + toast.duration;

    const updateProgress = () => {
      const now = Date.now();
      const remaining = Math.max(0, endTime - now);
      const progressPercent = (remaining / toast.duration!) * 100;
      setProgress(progressPercent);

      if (progressPercent > 0) {
        requestAnimationFrame(updateProgress);
      }
    };

    requestAnimationFrame(updateProgress);
  }, [toast.duration]);

  const handleDismiss = () => {
    setIsExiting(true);
    setTimeout(onDismiss, 200);
  };

  return (
    <div
      className={`toast toast-${toast.type} ${isExiting ? 'toast-exiting' : 'toast-entering'}`}
      role="alert"
      aria-live={toast.priority === 'urgent' ? 'assertive' : 'polite'}
    >
      <div className="toast-icon">{TypeIcons[toast.type]}</div>
      <div className="toast-content">
        <div className="toast-title">{toast.title}</div>
        <div className="toast-message">{toast.message}</div>
        {toast.actionLabel && toast.actionUrl && (
          <button
            className="toast-action"
            onClick={() => {
              window.location.href = toast.actionUrl!;
              handleDismiss();
            }}
          >
            {toast.actionLabel}
          </button>
        )}
      </div>
      <button className="toast-close" onClick={handleDismiss} aria-label="Dismiss notification">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      {toast.duration && toast.duration > 0 && (
        <div className="toast-progress">
          <div className="toast-progress-bar" style={{ width: `${progress}%` }} />
        </div>
      )}
    </div>
  );
}

// Toast container component
export function ToastContainer() {
  const { toasts, dismissToast } = useNotifications();

  // Group toasts by position
  const groupedToasts = toasts.reduce((acc, toast) => {
    const position = toast.position || 'top-right';
    if (!acc[position]) acc[position] = [];
    acc[position].push(toast);
    return acc;
  }, {} as Record<string, ToastNotification[]>);

  return (
    <>
      {Object.entries(groupedToasts).map(([position, positionToasts]) => (
        <div key={position} className={`toast-container toast-container-${position}`}>
          {positionToasts.map((toast) => (
            <ToastItem
              key={toast.id}
              toast={toast}
              onDismiss={() => dismissToast(toast.id)}
            />
          ))}
        </div>
      ))}
    </>
  );
}

// Hook for easy toast creation
export function useToast() {
  const { showToast } = useNotifications();

  return {
    success: (title: string, message: string, options?: Partial<ToastNotification>) =>
      showToast({
        type: 'success',
        category: 'system',
        priority: 'low',
        title,
        message,
        ...options,
      }),
    error: (title: string, message: string, options?: Partial<ToastNotification>) =>
      showToast({
        type: 'error',
        category: 'system',
        priority: 'high',
        title,
        message,
        ...options,
      }),
    warning: (title: string, message: string, options?: Partial<ToastNotification>) =>
      showToast({
        type: 'warning',
        category: 'system',
        priority: 'medium',
        title,
        message,
        ...options,
      }),
    info: (title: string, message: string, options?: Partial<ToastNotification>) =>
      showToast({
        type: 'info',
        category: 'system',
        priority: 'low',
        title,
        message,
        ...options,
      }),
  };
}
