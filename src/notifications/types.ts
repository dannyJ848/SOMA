/**
 * Notification System Types
 * Comprehensive type definitions for the notification and alert system
 */

// Core notification types
export type NotificationType = 'info' | 'warning' | 'success' | 'error';

// Categories for organizing notifications
export type NotificationCategory =
  | 'health'          // Health-related alerts
  | 'medication'      // Medication reminders
  | 'appointment'     // Appointment reminders
  | 'vital'           // Abnormal vital alerts
  | 'symptom'         // Symptom tracking reminders
  | 'education'       // Educational content
  | 'quiz'            // Quiz reminders
  | 'tip'             // Daily health tips
  | 'system'          // System notifications
  | 'sync'            // Data sync status
  | 'update';         // App updates

// Priority levels for smart notification scheduling
export type NotificationPriority = 'low' | 'medium' | 'high' | 'urgent';

// Base notification interface
export interface Notification {
  id: string;
  type: NotificationType;
  category: NotificationCategory;
  priority: NotificationPriority;
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  dismissed: boolean;
  expiresAt?: Date;
  actionUrl?: string;
  actionLabel?: string;
  icon?: string;
  metadata?: Record<string, unknown>;
}

// Toast-specific notification (for temporary display)
export interface ToastNotification extends Omit<Notification, 'read' | 'dismissed'> {
  duration?: number;  // ms, undefined = persistent until dismissed
  position?: 'top-right' | 'top-center' | 'bottom-right' | 'bottom-center';
}

// Health alert specific types
export interface MedicationReminder extends Notification {
  category: 'medication';
  metadata: {
    medicationId: string;
    medicationName: string;
    dosage: string;
    scheduledTime: Date;
    taken?: boolean;
    skipped?: boolean;
  };
}

export interface AppointmentReminder extends Notification {
  category: 'appointment';
  metadata: {
    appointmentId: string;
    providerName?: string;
    appointmentType: string;
    appointmentTime: Date;
    location?: string;
    prepInstructions?: string;
  };
}

export interface VitalAlert extends Notification {
  category: 'vital';
  metadata: {
    vitalType: 'heart_rate' | 'blood_pressure' | 'blood_sugar' | 'temperature' | 'spo2' | 'hrv';
    currentValue: number;
    normalRange: { min: number; max: number };
    unit: string;
    trend?: 'increasing' | 'decreasing' | 'stable';
  };
}

export interface SymptomReminder extends Notification {
  category: 'symptom';
  metadata: {
    symptomId?: string;
    reminderType: 'check-in' | 'log-prompt' | 'follow-up';
    lastLogged?: Date;
  };
}

// Educational notification types
export interface HealthTip extends Notification {
  category: 'tip';
  metadata: {
    tipId: string;
    topic: string;
    source?: string;
    relatedContent?: string[];
  };
}

export interface QuizReminder extends Notification {
  category: 'quiz';
  metadata: {
    quizId: string;
    quizTitle: string;
    topic: string;
    difficulty?: 'beginner' | 'intermediate' | 'advanced';
    estimatedTime?: number; // minutes
  };
}

export interface ContentAlert extends Notification {
  category: 'education';
  metadata: {
    contentId: string;
    contentType: 'article' | 'video' | 'interactive' | 'course';
    topic: string;
    isNew: boolean;
  };
}

// System notification types
export interface SyncNotification extends Notification {
  category: 'sync';
  metadata: {
    syncType: 'apple_health' | 'whoop' | 'manual' | 'backup';
    status: 'started' | 'completed' | 'failed';
    itemsProcessed?: number;
    errorDetails?: string;
  };
}

export interface UpdateNotification extends Notification {
  category: 'update';
  metadata: {
    version: string;
    releaseNotes?: string;
    isRequired: boolean;
    downloadUrl?: string;
  };
}

// Notification preferences
export interface QuietHours {
  enabled: boolean;
  startTime: string;  // HH:MM format
  endTime: string;    // HH:MM format
  allowUrgent: boolean;
  daysOfWeek: number[]; // 0-6, Sunday = 0
}

export interface CategoryPreference {
  enabled: boolean;
  frequency: 'immediate' | 'hourly' | 'daily' | 'weekly';
  sound: boolean;
  vibration: boolean;
}

export interface NotificationPreferences {
  // Global settings
  enabled: boolean;
  sound: boolean;
  vibration: boolean;
  quietHours: QuietHours;

  // Per-category settings
  categories: {
    health: CategoryPreference;
    medication: CategoryPreference;
    appointment: CategoryPreference;
    vital: CategoryPreference;
    symptom: CategoryPreference;
    education: CategoryPreference;
    quiz: CategoryPreference;
    tip: CategoryPreference;
    system: CategoryPreference;
    sync: CategoryPreference;
    update: CategoryPreference;
  };

  // Smart notification settings
  smartBatching: boolean;         // Batch non-urgent notifications
  adaptiveFrequency: boolean;     // Learn from user behavior
  maxDailyNotifications: number;  // Limit total daily notifications
}

// Notification center state
export interface NotificationCenterState {
  notifications: Notification[];
  unreadCount: number;
  isOpen: boolean;
  filter: NotificationCategory | 'all';
  sortBy: 'timestamp' | 'priority' | 'category';
}

// Notification actions
export type NotificationAction =
  | { type: 'ADD_NOTIFICATION'; payload: Notification }
  | { type: 'REMOVE_NOTIFICATION'; payload: string }
  | { type: 'MARK_READ'; payload: string }
  | { type: 'MARK_ALL_READ' }
  | { type: 'DISMISS'; payload: string }
  | { type: 'DISMISS_ALL' }
  | { type: 'SET_FILTER'; payload: NotificationCategory | 'all' }
  | { type: 'SET_SORT'; payload: 'timestamp' | 'priority' | 'category' }
  | { type: 'TOGGLE_CENTER' }
  | { type: 'CLEAR_EXPIRED' };

// Default preferences
export const DEFAULT_NOTIFICATION_PREFERENCES: NotificationPreferences = {
  enabled: true,
  sound: true,
  vibration: true,
  quietHours: {
    enabled: true,
    startTime: '22:00',
    endTime: '07:00',
    allowUrgent: true,
    daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
  },
  categories: {
    health: { enabled: true, frequency: 'immediate', sound: true, vibration: true },
    medication: { enabled: true, frequency: 'immediate', sound: true, vibration: true },
    appointment: { enabled: true, frequency: 'immediate', sound: true, vibration: true },
    vital: { enabled: true, frequency: 'immediate', sound: true, vibration: true },
    symptom: { enabled: true, frequency: 'daily', sound: false, vibration: false },
    education: { enabled: true, frequency: 'daily', sound: false, vibration: false },
    quiz: { enabled: true, frequency: 'daily', sound: false, vibration: false },
    tip: { enabled: true, frequency: 'daily', sound: false, vibration: false },
    system: { enabled: true, frequency: 'immediate', sound: false, vibration: false },
    sync: { enabled: false, frequency: 'immediate', sound: false, vibration: false },
    update: { enabled: true, frequency: 'immediate', sound: true, vibration: false },
  },
  smartBatching: true,
  adaptiveFrequency: true,
  maxDailyNotifications: 20,
};
