/**
 * Notification Preferences Component
 * Settings UI for managing notification preferences
 */

import React, { useState, useCallback } from 'react';
import { useNotifications } from './NotificationContext';
import type { NotificationCategory, NotificationPreferences, CategoryPreference } from './types';
import './notifications.css';

// Category metadata
const CATEGORY_INFO: Record<NotificationCategory, { label: string; description: string; icon: React.ReactNode }> = {
  health: {
    label: 'Health Alerts',
    description: 'Important health-related notifications',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  medication: {
    label: 'Medication Reminders',
    description: 'Reminders to take your medications on time',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10.5 20.5L4 14 7 11 3 7 7 3l4 4 3-3 6.5 6.5a5 5 0 01-7 7z" />
      </svg>
    ),
  },
  appointment: {
    label: 'Appointment Reminders',
    description: 'Upcoming appointment notifications',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  vital: {
    label: 'Vital Alerts',
    description: 'Alerts for abnormal vital signs',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  symptom: {
    label: 'Symptom Tracking',
    description: 'Reminders to log symptoms',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  education: {
    label: 'Educational Content',
    description: 'New articles and learning content',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  quiz: {
    label: 'Quiz Reminders',
    description: 'Reminders to complete health quizzes',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  tip: {
    label: 'Daily Health Tips',
    description: 'Daily wellness tips and advice',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  system: {
    label: 'System Notifications',
    description: 'App status and system messages',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  sync: {
    label: 'Data Sync Status',
    description: 'Background data synchronization updates',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </svg>
    ),
  },
  update: {
    label: 'App Updates',
    description: 'New version and update notifications',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
  },
};

// Toggle switch component
function ToggleSwitch({
  checked,
  onChange,
  disabled = false,
  label,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
}) {
  return (
    <label className={`toggle-switch ${disabled ? 'disabled' : ''}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      <span className="toggle-slider" />
      {label && <span className="toggle-label">{label}</span>}
    </label>
  );
}

// Category preference row
function CategoryPreferenceRow({
  category,
  preference,
  onChange,
  disabled,
}: {
  category: NotificationCategory;
  preference: CategoryPreference;
  onChange: (pref: Partial<CategoryPreference>) => void;
  disabled: boolean;
}) {
  const info = CATEGORY_INFO[category];
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`category-pref-row ${expanded ? 'expanded' : ''}`}>
      <div className="category-pref-main" onClick={() => setExpanded(!expanded)}>
        <div className="category-icon">{info.icon}</div>
        <div className="category-info">
          <span className="category-label">{info.label}</span>
          <span className="category-description">{info.description}</span>
        </div>
        <ToggleSwitch
          checked={preference.enabled}
          onChange={(enabled) => onChange({ enabled })}
          disabled={disabled}
        />
      </div>
      {expanded && preference.enabled && (
        <div className="category-pref-details">
          <div className="pref-detail">
            <span>Frequency</span>
            <select
              value={preference.frequency}
              onChange={(e) => onChange({ frequency: e.target.value as CategoryPreference['frequency'] })}
              disabled={disabled}
            >
              <option value="immediate">Immediate</option>
              <option value="hourly">Hourly Digest</option>
              <option value="daily">Daily Digest</option>
              <option value="weekly">Weekly Digest</option>
            </select>
          </div>
          <div className="pref-detail">
            <span>Sound</span>
            <ToggleSwitch
              checked={preference.sound}
              onChange={(sound) => onChange({ sound })}
              disabled={disabled}
            />
          </div>
          <div className="pref-detail">
            <span>Vibration</span>
            <ToggleSwitch
              checked={preference.vibration}
              onChange={(vibration) => onChange({ vibration })}
              disabled={disabled}
            />
          </div>
        </div>
      )}
    </div>
  );
}

// Quiet hours editor
function QuietHoursEditor({
  quietHours,
  onChange,
  disabled,
}: {
  quietHours: NotificationPreferences['quietHours'];
  onChange: (qh: Partial<NotificationPreferences['quietHours']>) => void;
  disabled: boolean;
}) {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="quiet-hours-editor">
      <div className="quiet-hours-header">
        <div className="quiet-hours-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
          <span>Quiet Hours</span>
        </div>
        <ToggleSwitch
          checked={quietHours.enabled}
          onChange={(enabled) => onChange({ enabled })}
          disabled={disabled}
        />
      </div>
      {quietHours.enabled && (
        <div className="quiet-hours-settings">
          <p className="quiet-hours-description">
            Silence non-urgent notifications during these hours
          </p>
          <div className="time-range">
            <div className="time-input">
              <label>Start</label>
              <input
                type="time"
                value={quietHours.startTime}
                onChange={(e) => onChange({ startTime: e.target.value })}
                disabled={disabled}
              />
            </div>
            <span className="time-separator">to</span>
            <div className="time-input">
              <label>End</label>
              <input
                type="time"
                value={quietHours.endTime}
                onChange={(e) => onChange({ endTime: e.target.value })}
                disabled={disabled}
              />
            </div>
          </div>
          <div className="days-selector">
            <label>Active Days</label>
            <div className="days-buttons">
              {daysOfWeek.map((day, index) => (
                <button
                  key={day}
                  className={`day-btn ${quietHours.daysOfWeek.includes(index) ? 'active' : ''}`}
                  onClick={() => {
                    const newDays = quietHours.daysOfWeek.includes(index)
                      ? quietHours.daysOfWeek.filter((d) => d !== index)
                      : [...quietHours.daysOfWeek, index].sort();
                    onChange({ daysOfWeek: newDays });
                  }}
                  disabled={disabled}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
          <div className="allow-urgent">
            <ToggleSwitch
              checked={quietHours.allowUrgent}
              onChange={(allowUrgent) => onChange({ allowUrgent })}
              disabled={disabled}
              label="Allow urgent notifications"
            />
          </div>
        </div>
      )}
    </div>
  );
}

// Main preferences panel
export function NotificationPreferencesPanel({ onClose }: { onClose?: () => void }) {
  const { preferences, updatePreferences, toggleCategory } = useNotifications();
  const [localPrefs, setLocalPrefs] = useState<NotificationPreferences>(preferences);

  // Sync local state with context
  const handleUpdatePrefs = useCallback(
    (updates: Partial<NotificationPreferences>) => {
      setLocalPrefs((prev) => ({ ...prev, ...updates }));
      updatePreferences(updates);
    },
    [updatePreferences]
  );

  const handleCategoryChange = useCallback(
    (category: NotificationCategory, updates: Partial<CategoryPreference>) => {
      const newCategories = {
        ...localPrefs.categories,
        [category]: { ...localPrefs.categories[category], ...updates },
      };
      setLocalPrefs((prev) => ({ ...prev, categories: newCategories }));

      if ('enabled' in updates) {
        toggleCategory(category, updates.enabled!);
      } else {
        updatePreferences({ categories: newCategories });
      }
    },
    [localPrefs.categories, toggleCategory, updatePreferences]
  );

  const handleQuietHoursChange = useCallback(
    (updates: Partial<NotificationPreferences['quietHours']>) => {
      const newQuietHours = { ...localPrefs.quietHours, ...updates };
      setLocalPrefs((prev) => ({ ...prev, quietHours: newQuietHours }));
      updatePreferences({ quietHours: newQuietHours });
    },
    [localPrefs.quietHours, updatePreferences]
  );

  // Group categories
  const healthCategories: NotificationCategory[] = ['health', 'medication', 'appointment', 'vital', 'symptom'];
  const educationCategories: NotificationCategory[] = ['education', 'quiz', 'tip'];
  const systemCategories: NotificationCategory[] = ['system', 'sync', 'update'];

  return (
    <div className="notification-preferences-panel">
      <div className="prefs-header">
        <h2>Notification Settings</h2>
        {onClose && (
          <button className="close-btn" onClick={onClose} aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>

      {/* Master toggle */}
      <div className="master-toggle">
        <div className="master-toggle-content">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <div>
            <span className="master-label">All Notifications</span>
            <span className="master-description">Enable or disable all notifications</span>
          </div>
        </div>
        <ToggleSwitch
          checked={localPrefs.enabled}
          onChange={(enabled) => handleUpdatePrefs({ enabled })}
        />
      </div>

      {/* Quiet Hours */}
      <QuietHoursEditor
        quietHours={localPrefs.quietHours}
        onChange={handleQuietHoursChange}
        disabled={!localPrefs.enabled}
      />

      {/* Health Categories */}
      <div className="category-group">
        <h3>Health Notifications</h3>
        <p className="group-description">Critical health alerts and reminders</p>
        {healthCategories.map((category) => (
          <CategoryPreferenceRow
            key={category}
            category={category}
            preference={localPrefs.categories[category]}
            onChange={(updates) => handleCategoryChange(category, updates)}
            disabled={!localPrefs.enabled}
          />
        ))}
      </div>

      {/* Education Categories */}
      <div className="category-group">
        <h3>Learning & Tips</h3>
        <p className="group-description">Educational content and daily tips</p>
        {educationCategories.map((category) => (
          <CategoryPreferenceRow
            key={category}
            category={category}
            preference={localPrefs.categories[category]}
            onChange={(updates) => handleCategoryChange(category, updates)}
            disabled={!localPrefs.enabled}
          />
        ))}
      </div>

      {/* System Categories */}
      <div className="category-group">
        <h3>System</h3>
        <p className="group-description">App updates and sync status</p>
        {systemCategories.map((category) => (
          <CategoryPreferenceRow
            key={category}
            category={category}
            preference={localPrefs.categories[category]}
            onChange={(updates) => handleCategoryChange(category, updates)}
            disabled={!localPrefs.enabled}
          />
        ))}
      </div>

      {/* Smart Settings */}
      <div className="smart-settings">
        <h3>Smart Notifications</h3>
        <div className="smart-setting">
          <div>
            <span className="setting-label">Smart Batching</span>
            <span className="setting-description">Group non-urgent notifications together</span>
          </div>
          <ToggleSwitch
            checked={localPrefs.smartBatching}
            onChange={(smartBatching) => handleUpdatePrefs({ smartBatching })}
            disabled={!localPrefs.enabled}
          />
        </div>
        <div className="smart-setting">
          <div>
            <span className="setting-label">Adaptive Frequency</span>
            <span className="setting-description">Learn from your behavior to reduce noise</span>
          </div>
          <ToggleSwitch
            checked={localPrefs.adaptiveFrequency}
            onChange={(adaptiveFrequency) => handleUpdatePrefs({ adaptiveFrequency })}
            disabled={!localPrefs.enabled}
          />
        </div>
        <div className="smart-setting">
          <div>
            <span className="setting-label">Daily Limit</span>
            <span className="setting-description">Maximum notifications per day</span>
          </div>
          <select
            value={localPrefs.maxDailyNotifications}
            onChange={(e) => handleUpdatePrefs({ maxDailyNotifications: parseInt(e.target.value) })}
            disabled={!localPrefs.enabled}
          >
            <option value="10">10 per day</option>
            <option value="20">20 per day</option>
            <option value="50">50 per day</option>
            <option value="100">Unlimited</option>
          </select>
        </div>
      </div>
    </div>
  );
}
