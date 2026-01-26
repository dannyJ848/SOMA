/**
 * Educational Notifications
 * Daily health tips, quiz reminders, and new content alerts
 */

import React, { useEffect, useCallback, useState } from 'react';
import { useNotifications } from './NotificationContext';
import type { HealthTip, QuizReminder, ContentAlert } from './types';

// Sample health tips database
const HEALTH_TIPS_DATABASE = [
  {
    id: 'tip-hydration',
    topic: 'Hydration',
    title: 'Stay Hydrated',
    message: 'Drinking water before meals can help with digestion and may support weight management. Aim for 8 glasses daily.',
    source: 'Mayo Clinic',
  },
  {
    id: 'tip-sleep-consistency',
    topic: 'Sleep',
    title: 'Consistent Sleep Schedule',
    message: 'Going to bed and waking up at the same time each day helps regulate your body\'s internal clock for better sleep quality.',
    source: 'Sleep Foundation',
  },
  {
    id: 'tip-movement-breaks',
    topic: 'Exercise',
    title: 'Take Movement Breaks',
    message: 'Standing and moving for just 2 minutes every hour can help counteract the effects of prolonged sitting.',
    source: 'American Heart Association',
  },
  {
    id: 'tip-deep-breathing',
    topic: 'Stress Management',
    title: 'Deep Breathing Benefits',
    message: 'Just 5 minutes of deep breathing can activate your parasympathetic nervous system, reducing stress and anxiety.',
    source: 'Harvard Health',
  },
  {
    id: 'tip-colorful-plate',
    topic: 'Nutrition',
    title: 'Eat the Rainbow',
    message: 'Different colored fruits and vegetables contain different nutrients. Aim for variety to maximize nutritional benefits.',
    source: 'USDA',
  },
  {
    id: 'tip-posture',
    topic: 'Ergonomics',
    title: 'Check Your Posture',
    message: 'Good posture reduces strain on muscles and joints. Keep shoulders back, chin parallel to the ground, and ears aligned with shoulders.',
    source: 'American Chiropractic Association',
  },
  {
    id: 'tip-gratitude',
    topic: 'Mental Health',
    title: 'Practice Gratitude',
    message: 'Writing down three things you\'re grateful for each day has been shown to improve mood and overall well-being.',
    source: 'Positive Psychology Research',
  },
  {
    id: 'tip-sunlight',
    topic: 'Wellness',
    title: 'Morning Sunlight',
    message: 'Getting 10-15 minutes of morning sunlight helps regulate your circadian rhythm and boosts vitamin D production.',
    source: 'Stanford Medicine',
  },
  {
    id: 'tip-protein-timing',
    topic: 'Nutrition',
    title: 'Spread Protein Intake',
    message: 'Distributing protein intake evenly across meals supports muscle maintenance better than loading it in one meal.',
    source: 'Journal of Nutrition',
  },
  {
    id: 'tip-social-health',
    topic: 'Mental Health',
    title: 'Social Connections Matter',
    message: 'Strong social connections are associated with better immune function, lower inflammation, and improved longevity.',
    source: 'NIH Research',
  },
  {
    id: 'tip-fiber',
    topic: 'Nutrition',
    title: 'Fiber for Gut Health',
    message: 'Aim for 25-30g of fiber daily. It feeds beneficial gut bacteria and supports digestive health.',
    source: 'American Dietetic Association',
  },
  {
    id: 'tip-screen-break',
    topic: 'Eye Health',
    title: '20-20-20 Rule',
    message: 'Every 20 minutes, look at something 20 feet away for 20 seconds to reduce digital eye strain.',
    source: 'American Academy of Ophthalmology',
  },
];

// Hook for daily health tips
export function useHealthTips() {
  const { addNotification, showToast, preferences } = useNotifications();
  const [lastTipDate, setLastTipDate] = useState<string | null>(() => {
    return localStorage.getItem('biological_self_last_tip_date');
  });

  const getRandomTip = useCallback(() => {
    // Get tips shown in the last 7 days
    const recentTips = JSON.parse(localStorage.getItem('biological_self_recent_tips') || '[]');
    const availableTips = HEALTH_TIPS_DATABASE.filter((tip) => !recentTips.includes(tip.id));

    // If all tips shown, reset
    if (availableTips.length === 0) {
      localStorage.setItem('biological_self_recent_tips', '[]');
      return HEALTH_TIPS_DATABASE[Math.floor(Math.random() * HEALTH_TIPS_DATABASE.length)];
    }

    return availableTips[Math.floor(Math.random() * availableTips.length)];
  }, []);

  const showDailyTip = useCallback(() => {
    const today = new Date().toDateString();

    // Don't show if already shown today
    if (lastTipDate === today) return null;

    // Check if tips are enabled
    if (!preferences.categories.tip.enabled) return null;

    const tip = getRandomTip();

    // Update recent tips list
    const recentTips = JSON.parse(localStorage.getItem('biological_self_recent_tips') || '[]');
    recentTips.push(tip.id);
    if (recentTips.length > 7) recentTips.shift();
    localStorage.setItem('biological_self_recent_tips', JSON.stringify(recentTips));

    // Update last tip date
    localStorage.setItem('biological_self_last_tip_date', today);
    setLastTipDate(today);

    const id = addNotification({
      type: 'info',
      category: 'tip',
      priority: 'low',
      title: tip.title,
      message: tip.message,
      metadata: {
        tipId: tip.id,
        topic: tip.topic,
        source: tip.source,
      },
    });

    // Show toast only if immediate frequency
    if (preferences.categories.tip.frequency === 'immediate') {
      showToast({
        type: 'info',
        category: 'tip',
        priority: 'low',
        title: `Daily Tip: ${tip.title}`,
        message: tip.message.substring(0, 100) + (tip.message.length > 100 ? '...' : ''),
        duration: 8000,
      });
    }

    return id;
  }, [addNotification, showToast, getRandomTip, lastTipDate, preferences]);

  return { showDailyTip, getRandomTip };
}

// Hook for quiz reminders
export function useQuizReminders() {
  const { addNotification, showToast } = useNotifications();

  const createQuizReminder = useCallback(
    (quiz: {
      id: string;
      title: string;
      topic: string;
      difficulty?: 'beginner' | 'intermediate' | 'advanced';
      estimatedMinutes?: number;
      isNew?: boolean;
    }) => {
      const title = quiz.isNew ? `New Quiz Available: ${quiz.title}` : `Quiz Reminder: ${quiz.title}`;
      const message = `Test your knowledge on ${quiz.topic}${quiz.estimatedMinutes ? ` (${quiz.estimatedMinutes} min)` : ''}`;

      const id = addNotification({
        type: 'info',
        category: 'quiz',
        priority: 'low',
        title,
        message,
        actionLabel: 'Start Quiz',
        actionUrl: `/quiz/${quiz.id}`,
        metadata: {
          quizId: quiz.id,
          quizTitle: quiz.title,
          topic: quiz.topic,
          difficulty: quiz.difficulty,
          estimatedTime: quiz.estimatedMinutes,
        },
      });

      if (quiz.isNew) {
        showToast({
          type: 'info',
          category: 'quiz',
          priority: 'low',
          title,
          message,
          duration: 6000,
        });
      }

      return id;
    },
    [addNotification, showToast]
  );

  return { createQuizReminder };
}

// Hook for educational content alerts
export function useContentAlerts() {
  const { addNotification, showToast } = useNotifications();

  const createContentAlert = useCallback(
    (content: {
      id: string;
      type: 'article' | 'video' | 'interactive' | 'course';
      title: string;
      topic: string;
      isNew: boolean;
      description?: string;
    }) => {
      const typeLabels = {
        article: 'Article',
        video: 'Video',
        interactive: 'Interactive Content',
        course: 'Course',
      };

      const title = content.isNew
        ? `New ${typeLabels[content.type]}: ${content.title}`
        : `Recommended: ${content.title}`;

      const message = content.description || `Explore this ${content.type} about ${content.topic}`;

      const id = addNotification({
        type: 'info',
        category: 'education',
        priority: 'low',
        title,
        message,
        actionLabel: content.type === 'video' ? 'Watch Now' : 'Read More',
        actionUrl: `/education/${content.type}/${content.id}`,
        metadata: {
          contentId: content.id,
          contentType: content.type,
          topic: content.topic,
          isNew: content.isNew,
        },
      });

      if (content.isNew) {
        showToast({
          type: 'info',
          category: 'education',
          priority: 'low',
          title,
          message: message.substring(0, 80),
          duration: 6000,
        });
      }

      return id;
    },
    [addNotification, showToast]
  );

  return { createContentAlert };
}

// Daily educational scheduler component
export function EducationalScheduler() {
  const { showDailyTip } = useHealthTips();
  const { preferences } = useNotifications();

  // Show daily tip at optimal time (e.g., 9 AM)
  useEffect(() => {
    if (!preferences.categories.tip.enabled) return;

    const checkAndShowTip = () => {
      const now = new Date();
      const hour = now.getHours();

      // Show tip between 8-10 AM for daily frequency
      if (preferences.categories.tip.frequency === 'daily') {
        if (hour >= 8 && hour <= 10) {
          showDailyTip();
        }
      } else if (preferences.categories.tip.frequency === 'immediate') {
        // For immediate, show once per session on first load
        showDailyTip();
      }
    };

    // Check on mount
    checkAndShowTip();

    // Check periodically for daily tips
    if (preferences.categories.tip.frequency === 'daily') {
      const interval = setInterval(checkAndShowTip, 3600000); // Check every hour
      return () => clearInterval(interval);
    }
  }, [showDailyTip, preferences.categories.tip]);

  return null; // Background component
}

// Component to display educational notifications summary
export function EducationalNotificationsSummary() {
  const { state } = useNotifications();

  const educationCategories = ['education', 'quiz', 'tip'];
  const educationNotifications = state.notifications.filter(
    (n) => educationCategories.includes(n.category) && !n.dismissed && !n.read
  );

  if (educationNotifications.length === 0) {
    return null;
  }

  return (
    <div className="education-notifications-summary">
      <div className="education-badge">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
        <span>{educationNotifications.length} learning items</span>
      </div>
    </div>
  );
}

// Featured tip component for dashboard
export function FeaturedHealthTip() {
  const { getRandomTip } = useHealthTips();
  const [tip, setTip] = useState<typeof HEALTH_TIPS_DATABASE[0] | null>(null);

  useEffect(() => {
    // Get today's tip from storage or generate new one
    const today = new Date().toDateString();
    const storedTip = localStorage.getItem('biological_self_featured_tip');
    const storedDate = localStorage.getItem('biological_self_featured_tip_date');

    if (storedTip && storedDate === today) {
      setTip(JSON.parse(storedTip));
    } else {
      const newTip = getRandomTip();
      setTip(newTip);
      localStorage.setItem('biological_self_featured_tip', JSON.stringify(newTip));
      localStorage.setItem('biological_self_featured_tip_date', today);
    }
  }, [getRandomTip]);

  if (!tip) return null;

  return (
    <div className="featured-tip">
      <div className="featured-tip-header">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
        <span>Daily Health Tip</span>
        <span className="tip-topic">{tip.topic}</span>
      </div>
      <h3 className="featured-tip-title">{tip.title}</h3>
      <p className="featured-tip-message">{tip.message}</p>
      {tip.source && (
        <span className="featured-tip-source">Source: {tip.source}</span>
      )}
    </div>
  );
}
