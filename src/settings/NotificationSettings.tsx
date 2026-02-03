/**
 * Notification Settings Component
 *
 * Panel for managing notification preferences including
 * alert types, frequency, and quiet hours.
 */

import { useCallback, useState } from 'react';
import { useSettings } from './useSettings';
import type {
  NotificationSettings as NotificationSettingsType,
  NotificationType,
  NotificationPreference,
} from './types';

// ============================================
// Types
// ============================================

interface NotificationTypeConfig {
  type: NotificationType;
  label: string;
  description: string;
  icon: string;
}

// ============================================
// Constants
// ============================================

const NOTIFICATION_TYPES: NotificationTypeConfig[] = [
  {
    type: 'medication_reminder',
    label: 'Medication Reminders',
    description: 'Reminders to take your medications on time',
    icon: '💊',
  },
  {
    type: 'appointment_reminder',
    label: 'Appointment Reminders',
    description: 'Upcoming medical appointments and check-ups',
    icon: '📅',
  },
  {
    type: 'health_insight',
    label: 'Health Insights',
    description: 'Personalized insights based on your health data',
    icon: '💡',
  },
  {
    type: 'lab_result',
    label: 'Lab Results',
    description: 'Notifications when new lab results are available',
    icon: '🧪',
  },
  {
    type: 'symptom_followup',
    label: 'Symptom Follow-ups',
    description: 'Check-ins on previously logged symptoms',
    icon: '🔔',
  },
];

const TIMING_OPTIONS = [
  { value: 'immediate', label: 'Immediately' },
  { value: '15min', label: '15 minutes before' },
  { value: '30min', label: '30 minutes before' },
  { value: '1hour', label: '1 hour before' },
] as const;

// ============================================
// Main Component
// ============================================

export function NotificationSettings() {
  const { settings, updateNotifications } = useSettings();
  const notifications = settings.notifications;

  // Local state for time picker
  const [quietStart, setQuietStart] = useState(notifications.quietHoursStart);
  const [quietEnd, setQuietEnd] = useState(notifications.quietHoursEnd);

  // Handle global enable toggle
  const handleGlobalToggle = useCallback(() => {
    updateNotifications({ globalEnabled: !notifications.globalEnabled });
  }, [notifications.globalEnabled, updateNotifications]);

  // Handle quiet hours toggle
  const handleQuietHoursToggle = useCallback(() => {
    updateNotifications({ quietHoursEnabled: !notifications.quietHoursEnabled });
  }, [notifications.quietHoursEnabled, updateNotifications]);

  // Handle quiet hours time change
  const handleQuietHoursChange = useCallback(
    (type: 'start' | 'end', value: string) => {
      if (type === 'start') {
        setQuietStart(value);
        updateNotifications({ quietHoursStart: value });
      } else {
        setQuietEnd(value);
        updateNotifications({ quietHoursEnd: value });
      }
    },
    [updateNotifications]
  );

  // Handle individual notification type preference
  const handlePreferenceChange = useCallback(
    (type: NotificationType, key: keyof NotificationPreference, value: boolean | string) => {
      const currentPrefs = notifications.preferences[type];
      const updatedPrefs = {
        ...notifications.preferences,
        [type]: {
          ...currentPrefs,
          [key]: value,
        },
      };
      updateNotifications({ preferences: updatedPrefs });
    },
    [notifications.preferences, updateNotifications]
  );

  // Enable all notifications
  const enableAll = useCallback(() => {
    const updatedPrefs = { ...notifications.preferences };
    for (const type of NOTIFICATION_TYPES) {
      updatedPrefs[type.type] = {
        ...updatedPrefs[type.type],
        enabled: true,
      };
    }
    updateNotifications({ preferences: updatedPrefs, globalEnabled: true });
  }, [notifications.preferences, updateNotifications]);

  // Disable all notifications
  const disableAll = useCallback(() => {
    const updatedPrefs = { ...notifications.preferences };
    for (const type of NOTIFICATION_TYPES) {
      updatedPrefs[type.type] = {
        ...updatedPrefs[type.type],
        enabled: false,
      };
    }
    updateNotifications({ preferences: updatedPrefs });
  }, [notifications.preferences, updateNotifications]);

  return (
    <div className="notification-settings settings-content">
      {/* Global Toggle */}
      <section className="settings-section">
        <div className="settings-header-row">
          <div>
            <h3 className="settings-section-title">Notifications</h3>
            <p className="settings-section-description">
              Manage how and when you receive notifications
            </p>
          </div>
          <label className="settings-toggle master-toggle">
            <input
              type="checkbox"
              checked={notifications.globalEnabled}
              onChange={handleGlobalToggle}
            />
            <span className="settings-toggle-switch large" />
          </label>
        </div>
      </section>

      {/* Quiet Hours */}
      <section className="settings-section">
        <h3 className="settings-section-title">Quiet Hours</h3>
        <p className="settings-section-description">
          Pause notifications during specific hours
        </p>

        <label className="settings-toggle">
          <div className="settings-toggle-info">
            <span className="settings-toggle-label">Enable Quiet Hours</span>
            <span className="settings-toggle-description">
              No notifications during this time period
            </span>
          </div>
          <input
            type="checkbox"
            checked={notifications.quietHoursEnabled}
            onChange={handleQuietHoursToggle}
            disabled={!notifications.globalEnabled}
          />
          <span className="settings-toggle-switch" />
        </label>

        {notifications.quietHoursEnabled && (
          <div className="quiet-hours-time">
            <div className="time-input-group">
              <label>From</label>
              <input
                type="time"
                value={quietStart}
                onChange={(e) => handleQuietHoursChange('start', e.target.value)}
                disabled={!notifications.globalEnabled}
                className="time-input"
              />
            </div>
            <span className="time-separator">to</span>
            <div className="time-input-group">
              <label>To</label>
              <input
                type="time"
                value={quietEnd}
                onChange={(e) => handleQuietHoursChange('end', e.target.value)}
                disabled={!notifications.globalEnabled}
                className="time-input"
              />
            </div>
          </div>
        )}
      </section>

      {/* Notification Types */}
      <section className="settings-section">
        <div className="settings-header-row">
          <div>
            <h3 className="settings-section-title">Alert Types</h3>
            <p className="settings-section-description">
              Choose which notifications you want to receive
            </p>
          </div>
          <div className="bulk-actions">
            <button
              className="bulk-action-btn"
              onClick={enableAll}
              disabled={!notifications.globalEnabled}
            >
              Enable All
            </button>
            <button
              className="bulk-action-btn"
              onClick={disableAll}
              disabled={!notifications.globalEnabled}
            >
              Disable All
            </button>
          </div>
        </div>

        <div className="notification-types-list">
          {NOTIFICATION_TYPES.map((notifType) => {
            const pref = notifications.preferences[notifType.type];
            const isDisabled = !notifications.globalEnabled;

            return (
              <div
                key={notifType.type}
                className={`notification-type-card ${!pref.enabled || isDisabled ? 'disabled' : ''}`}
              >
                <div className="notification-type-header">
                  <span className="notification-type-icon">{notifType.icon}</span>
                  <div className="notification-type-info">
                    <span className="notification-type-label">{notifType.label}</span>
                    <span className="notification-type-description">
                      {notifType.description}
                    </span>
                  </div>
                  <label className="settings-toggle">
                    <input
                      type="checkbox"
                      checked={pref.enabled}
                      onChange={() =>
                        handlePreferenceChange(notifType.type, 'enabled', !pref.enabled)
                      }
                      disabled={isDisabled}
                    />
                    <span className="settings-toggle-switch" />
                  </label>
                </div>

                {pref.enabled && !isDisabled && (
                  <div className="notification-type-options">
                    <div className="notification-option">
                      <label className="option-checkbox">
                        <input
                          type="checkbox"
                          checked={pref.sound}
                          onChange={() =>
                            handlePreferenceChange(notifType.type, 'sound', !pref.sound)
                          }
                        />
                        <span>Sound</span>
                      </label>
                      <label className="option-checkbox">
                        <input
                          type="checkbox"
                          checked={pref.vibrate}
                          onChange={() =>
                            handlePreferenceChange(notifType.type, 'vibrate', !pref.vibrate)
                          }
                        />
                        <span>Vibrate</span>
                      </label>
                    </div>

                    {(notifType.type === 'medication_reminder' ||
                      notifType.type === 'appointment_reminder') && (
                      <div className="notification-timing">
                        <label className="timing-label">Remind me</label>
                        <select
                          value={pref.timing}
                          onChange={(e) =>
                            handlePreferenceChange(
                              notifType.type,
                              'timing',
                              e.target.value as NotificationPreference['timing']
                            )
                          }
                          className="timing-select"
                        >
                          {TIMING_OPTIONS.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Test Notification */}
      <section className="settings-section">
        <button
          className="test-notification-btn"
          onClick={() => {
            // In a real implementation, this would trigger a test notification
            console.log('Sending test notification...');
          }}
          disabled={!notifications.globalEnabled}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 01-3.46 0" />
          </svg>
          Send Test Notification
        </button>
      </section>
    </div>
  );
}

export default NotificationSettings;
