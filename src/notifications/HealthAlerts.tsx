/**
 * Health Alerts Component
 * Specialized alerts for health-related notifications
 */

import React, { useEffect, useCallback } from 'react';
import { useNotifications } from './NotificationContext';
import type {
  MedicationReminder,
  AppointmentReminder,
  VitalAlert,
  SymptomReminder,
  NotificationPriority,
} from './types';

// Hook for medication reminders
export function useMedicationReminders() {
  const { addNotification, showToast } = useNotifications();

  const createMedicationReminder = useCallback(
    (medication: {
      id: string;
      name: string;
      dosage: string;
      scheduledTime: Date;
      isUrgent?: boolean;
    }) => {
      const now = new Date();
      const timeDiff = medication.scheduledTime.getTime() - now.getTime();
      const isOverdue = timeDiff < 0;
      const minutesUntil = Math.round(timeDiff / 60000);

      let title: string;
      let message: string;
      let priority: NotificationPriority;

      if (isOverdue) {
        title = 'Medication Overdue';
        message = `You missed your ${medication.dosage} dose of ${medication.name}`;
        priority = 'high';
      } else if (minutesUntil <= 5) {
        title = 'Time for Medication';
        message = `Take your ${medication.dosage} dose of ${medication.name} now`;
        priority = medication.isUrgent ? 'urgent' : 'high';
      } else if (minutesUntil <= 30) {
        title = 'Medication Reminder';
        message = `${medication.name} (${medication.dosage}) due in ${minutesUntil} minutes`;
        priority = 'medium';
      } else {
        title = 'Upcoming Medication';
        message = `${medication.name} (${medication.dosage}) scheduled for ${medication.scheduledTime.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}`;
        priority = 'low';
      }

      // Add to notification center
      const id = addNotification({
        type: isOverdue ? 'warning' : 'info',
        category: 'medication',
        priority,
        title,
        message,
        actionLabel: 'Mark as Taken',
        actionUrl: `/medications/${medication.id}`,
        metadata: {
          medicationId: medication.id,
          medicationName: medication.name,
          dosage: medication.dosage,
          scheduledTime: medication.scheduledTime,
          taken: false,
          skipped: false,
        },
      });

      // Also show toast for immediate reminders
      if (minutesUntil <= 5 || isOverdue) {
        showToast({
          type: isOverdue ? 'warning' : 'info',
          category: 'medication',
          priority,
          title,
          message,
          duration: 10000,
          actionLabel: 'Mark as Taken',
          actionUrl: `/medications/${medication.id}`,
        });
      }

      return id;
    },
    [addNotification, showToast]
  );

  return { createMedicationReminder };
}

// Hook for appointment reminders
export function useAppointmentReminders() {
  const { addNotification, showToast } = useNotifications();

  const createAppointmentReminder = useCallback(
    (appointment: {
      id: string;
      type: string;
      time: Date;
      provider?: string;
      location?: string;
      prepInstructions?: string;
    }) => {
      const now = new Date();
      const timeDiff = appointment.time.getTime() - now.getTime();
      const hoursUntil = Math.round(timeDiff / 3600000);
      const daysUntil = Math.round(timeDiff / 86400000);

      let title: string;
      let message: string;
      let priority: NotificationPriority;

      if (hoursUntil <= 1) {
        title = 'Appointment Soon';
        message = `Your ${appointment.type} appointment${appointment.provider ? ` with ${appointment.provider}` : ''} is in ${Math.round(timeDiff / 60000)} minutes`;
        priority = 'high';
      } else if (hoursUntil <= 24) {
        title = 'Appointment Today';
        message = `${appointment.type} at ${appointment.time.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}${appointment.location ? ` - ${appointment.location}` : ''}`;
        priority = 'medium';
      } else if (daysUntil <= 1) {
        title = 'Appointment Tomorrow';
        message = `${appointment.type} at ${appointment.time.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}`;
        priority = 'low';
      } else {
        title = 'Upcoming Appointment';
        message = `${appointment.type} on ${appointment.time.toLocaleDateString([], { weekday: 'long', month: 'short', day: 'numeric' })}`;
        priority = 'low';
      }

      if (appointment.prepInstructions && hoursUntil <= 24) {
        message += ` - ${appointment.prepInstructions}`;
      }

      const id = addNotification({
        type: 'info',
        category: 'appointment',
        priority,
        title,
        message,
        actionLabel: 'View Details',
        actionUrl: `/appointments/${appointment.id}`,
        metadata: {
          appointmentId: appointment.id,
          providerName: appointment.provider,
          appointmentType: appointment.type,
          appointmentTime: appointment.time,
          location: appointment.location,
          prepInstructions: appointment.prepInstructions,
        },
      });

      // Show toast for appointments within the hour
      if (hoursUntil <= 1) {
        showToast({
          type: 'info',
          category: 'appointment',
          priority: 'high',
          title,
          message: message.substring(0, 100),
          duration: 15000,
        });
      }

      return id;
    },
    [addNotification, showToast]
  );

  return { createAppointmentReminder };
}

// Hook for vital alerts
export function useVitalAlerts() {
  const { addNotification, showToast } = useNotifications();

  const createVitalAlert = useCallback(
    (vital: {
      type: VitalAlert['metadata']['vitalType'];
      value: number;
      unit: string;
      normalMin: number;
      normalMax: number;
      trend?: 'increasing' | 'decreasing' | 'stable';
    }) => {
      const isLow = vital.value < vital.normalMin;
      const isHigh = vital.value > vital.normalMax;
      const deviation = isLow
        ? ((vital.normalMin - vital.value) / vital.normalMin) * 100
        : ((vital.value - vital.normalMax) / vital.normalMax) * 100;

      const vitalNames: Record<VitalAlert['metadata']['vitalType'], string> = {
        heart_rate: 'Heart Rate',
        blood_pressure: 'Blood Pressure',
        blood_sugar: 'Blood Sugar',
        temperature: 'Temperature',
        spo2: 'Oxygen Saturation',
        hrv: 'Heart Rate Variability',
      };

      let priority: NotificationPriority;
      let type: 'warning' | 'error';

      if (deviation > 30) {
        priority = 'urgent';
        type = 'error';
      } else if (deviation > 15) {
        priority = 'high';
        type = 'error';
      } else {
        priority = 'medium';
        type = 'warning';
      }

      const title = `${isHigh ? 'High' : 'Low'} ${vitalNames[vital.type]}`;
      const message = `${vital.value} ${vital.unit} (normal: ${vital.normalMin}-${vital.normalMax} ${vital.unit})${vital.trend ? ` - ${vital.trend}` : ''}`;

      const id = addNotification({
        type,
        category: 'vital',
        priority,
        title,
        message,
        actionLabel: 'View Details',
        actionUrl: '/vitals',
        metadata: {
          vitalType: vital.type,
          currentValue: vital.value,
          normalRange: { min: vital.normalMin, max: vital.normalMax },
          unit: vital.unit,
          trend: vital.trend,
        },
      });

      // Always show toast for vital alerts
      showToast({
        type,
        category: 'vital',
        priority,
        title,
        message,
        duration: priority === 'urgent' ? 0 : 10000, // Urgent stays until dismissed
      });

      return id;
    },
    [addNotification, showToast]
  );

  return { createVitalAlert };
}

// Hook for symptom tracking reminders
export function useSymptomReminders() {
  const { addNotification, showToast } = useNotifications();

  const createSymptomReminder = useCallback(
    (options: {
      type: 'check-in' | 'log-prompt' | 'follow-up';
      symptomId?: string;
      symptomName?: string;
      lastLogged?: Date;
    }) => {
      let title: string;
      let message: string;

      switch (options.type) {
        case 'check-in':
          title = 'Daily Symptom Check-in';
          message = 'How are you feeling today? Take a moment to log any symptoms.';
          break;
        case 'log-prompt':
          title = 'Log Your Symptoms';
          message = options.lastLogged
            ? `It's been ${Math.round((Date.now() - options.lastLogged.getTime()) / 86400000)} days since you logged symptoms.`
            : 'Track your symptoms to help identify patterns.';
          break;
        case 'follow-up':
          title = `Follow Up: ${options.symptomName || 'Previous Symptom'}`;
          message = 'Has this symptom improved, stayed the same, or gotten worse?';
          break;
      }

      const id = addNotification({
        type: 'info',
        category: 'symptom',
        priority: 'low',
        title,
        message,
        actionLabel: 'Log Now',
        actionUrl: options.symptomId ? `/symptoms/${options.symptomId}` : '/body',
        metadata: {
          symptomId: options.symptomId,
          reminderType: options.type,
          lastLogged: options.lastLogged,
        },
      });

      // Only show toast for follow-ups
      if (options.type === 'follow-up') {
        showToast({
          type: 'info',
          category: 'symptom',
          priority: 'low',
          title,
          message,
          duration: 8000,
        });
      }

      return id;
    },
    [addNotification, showToast]
  );

  return { createSymptomReminder };
}

// Component to display health alerts summary
export function HealthAlertsSummary() {
  const { state, getFilteredNotifications } = useNotifications();

  const healthCategories = ['health', 'medication', 'appointment', 'vital', 'symptom'];
  const healthNotifications = state.notifications.filter(
    (n) => healthCategories.includes(n.category) && !n.dismissed && !n.read
  );

  if (healthNotifications.length === 0) {
    return null;
  }

  const urgentCount = healthNotifications.filter((n) => n.priority === 'urgent').length;
  const highCount = healthNotifications.filter((n) => n.priority === 'high').length;

  return (
    <div className="health-alerts-summary">
      <div className="alert-badge-container">
        {urgentCount > 0 && (
          <span className="alert-badge urgent">
            {urgentCount} urgent
          </span>
        )}
        {highCount > 0 && (
          <span className="alert-badge high">
            {highCount} important
          </span>
        )}
        {healthNotifications.length - urgentCount - highCount > 0 && (
          <span className="alert-badge normal">
            {healthNotifications.length - urgentCount - highCount} other
          </span>
        )}
      </div>
    </div>
  );
}

// Automated alert scheduler component
export function HealthAlertScheduler({
  medications,
  appointments,
}: {
  medications?: Array<{
    id: string;
    name: string;
    dosage: string;
    times: string[]; // HH:MM format
  }>;
  appointments?: Array<{
    id: string;
    type: string;
    time: Date;
    provider?: string;
    location?: string;
  }>;
}) {
  const { createMedicationReminder } = useMedicationReminders();
  const { createAppointmentReminder } = useAppointmentReminders();

  // Schedule medication reminders
  useEffect(() => {
    if (!medications?.length) return;

    const checkMedications = () => {
      const now = new Date();
      const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

      medications.forEach((med) => {
        med.times.forEach((time) => {
          // Check if we're within 30 minutes of a scheduled time
          const [hours, minutes] = time.split(':').map(Number);
          const scheduledDate = new Date(now);
          scheduledDate.setHours(hours, minutes, 0, 0);

          const timeDiff = scheduledDate.getTime() - now.getTime();
          const minutesDiff = Math.abs(timeDiff / 60000);

          // Trigger at 30 min, 5 min, and on time
          if ([30, 5, 0].includes(Math.round(minutesDiff)) && timeDiff >= 0) {
            createMedicationReminder({
              id: med.id,
              name: med.name,
              dosage: med.dosage,
              scheduledTime: scheduledDate,
            });
          }
        });
      });
    };

    // Check every minute
    const interval = setInterval(checkMedications, 60000);
    return () => clearInterval(interval);
  }, [medications, createMedicationReminder]);

  // Schedule appointment reminders
  useEffect(() => {
    if (!appointments?.length) return;

    const checkAppointments = () => {
      const now = new Date();

      appointments.forEach((apt) => {
        const timeDiff = apt.time.getTime() - now.getTime();
        const hoursDiff = timeDiff / 3600000;

        // Trigger at 24h, 2h, 1h, 30min
        if ([24, 2, 1, 0.5].some((h) => Math.abs(hoursDiff - h) < 0.02)) {
          createAppointmentReminder({
            id: apt.id,
            type: apt.type,
            time: apt.time,
            provider: apt.provider,
            location: apt.location,
          });
        }
      });
    };

    // Check every minute
    const interval = setInterval(checkAppointments, 60000);
    return () => clearInterval(interval);
  }, [appointments, createAppointmentReminder]);

  return null; // This is a background component
}
