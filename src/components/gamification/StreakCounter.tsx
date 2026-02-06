/**
 * Streak Counter Component
 * 
 * Visual display of learning streak with fire animation
 * and streak history.
 */

import React, { useEffect, useState } from 'react';
import { LearningStreak } from '../../../core/gamification';

interface StreakCounterProps {
  streak: LearningStreak;
  size?: 'sm' | 'md' | 'lg';
  showHistory?: boolean;
  className?: string;
}

export const StreakCounter: React.FC<StreakCounterProps> = ({
  streak,
  size = 'md',
  showHistory = false,
  className = '',
}) => {
  const [animateFire, setAnimateFire] = useState(false);

  useEffect(() => {
    // Animate fire on mount and when streak changes
    setAnimateFire(true);
    const timer = setTimeout(() => setAnimateFire(false), 1000);
    return () => clearTimeout(timer);
  }, [streak.currentStreak]);

  const sizeClasses = {
    sm: {
      container: 'p-2',
      icon: 'text-2xl',
      number: 'text-xl',
      label: 'text-xs',
    },
    md: {
      container: 'p-4',
      icon: 'text-4xl',
      number: 'text-3xl',
      label: 'text-sm',
    },
    lg: {
      container: 'p-6',
      icon: 'text-6xl',
      number: 'text-5xl',
      label: 'text-base',
    },
  };

  const classes = sizeClasses[size];

  // Calculate weekly progress
  const last7Days = streak.streakHistory.slice(0, 7);
  const activeDays = last7Days.filter(d => d.activityMinutes > 0).length;

  // Determine streak status
  const getStreakStatus = () => {
    if (streak.currentStreak === 0) return 'inactive';
    if (streak.currentStreak >= 30) return 'legendary';
    if (streak.currentStreak >= 7) return 'active';
    return 'warming';
  };

  const status = getStreakStatus();
  const statusColors = {
    inactive: 'bg-gray-100 text-gray-500',
    warming: 'bg-orange-50 text-orange-600',
    active: 'bg-red-50 text-red-600',
    legendary: 'bg-gradient-to-r from-amber-50 to-orange-50 text-amber-600',
  };

  return (
    <div className={`${className}`}>
      {/* Main Streak Display */}
      <div
        className={`
          ${classes.container}
          ${statusColors[status]}
          rounded-2xl border-2 transition-all duration-300
          ${status === 'legendary' ? 'border-amber-300 shadow-lg shadow-amber-100' : 'border-current'}
        `}
      >
        <div className="flex items-center justify-center gap-3">
          {/* Fire Icon */}
          <div className={`${classes.icon} ${animateFire ? 'animate-bounce' : ''}`}>
            {status === 'inactive' ? '💤' : '🔥'}
          </div>
          
          <div className="text-center">
            <p className={`${classes.number} font-bold`}>
              {streak.currentStreak}
            </p>
            <p className={`${classes.label} opacity-80`}>
              Day{streak.currentStreak !== 1 ? 's' : ''}
            </p>
          </div>
        </div>

        {/* Status Message */}
        <p className="text-center mt-2 text-sm font-medium">
          {status === 'inactive' && 'Start learning today!'}
          {status === 'warming' && 'Streak building!'}
          {status === 'active' && 'Weekly streak! 🔥'}
          {status === 'legendary' && 'Unstoppable! 🚀'}
        </p>

        {/* Best Streak */}
        {streak.longestStreak > 0 && (
          <p className="text-center text-xs opacity-70 mt-1">
            Best: {streak.longestStreak} days
          </p>
        )}
      </div>

      {/* Streak History */}
      {showHistory && (
        <div className="mt-4">
          <StreakHistoryCalendar history={streak.streakHistory} />
          
          {/* Weekly Stats */}
          <div className="mt-4 grid grid-cols-3 gap-2 text-center">
            <div className="bg-gray-50 rounded-lg p-2">
              <p className="text-lg font-bold text-gray-900">{activeDays}</p>
              <p className="text-xs text-gray-500">Active Days</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-2">
              <p className="text-lg font-bold text-gray-900">
                {Math.round(last7Days.reduce((sum, d) => sum + d.activityMinutes, 0) / 60 * 10) / 10}h
              </p>
              <p className="text-xs text-gray-500">This Week</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-2">
              <p className="text-lg font-bold text-gray-900">
                {last7Days.reduce((sum, d) => sum + d.modulesCompleted, 0)}
              </p>
              <p className="text-xs text-gray-500">Modules</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

interface StreakHistoryCalendarProps {
  history: Array<{
    date: Date;
    activityMinutes: number;
    modulesCompleted: number;
    quizzesTaken: number;
  }>;
  daysToShow?: number;
}

export const StreakHistoryCalendar: React.FC<StreakHistoryCalendarProps> = ({
  history,
  daysToShow = 30,
}) => {
  // Generate last N days
  const days = [...Array(daysToShow)].map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (daysToShow - 1 - i));
    date.setHours(0, 0, 0, 0);
    return date;
  });

  // Map history to days
  const dayStatus = days.map(date => {
    const historyEntry = history.find(h => {
      const hDate = new Date(h.date);
      hDate.setHours(0, 0, 0, 0);
      return hDate.getTime() === date.getTime();
    });

    return {
      date,
      hasActivity: !!historyEntry && historyEntry.activityMinutes > 0,
      intensity: historyEntry 
        ? Math.min(1, historyEntry.activityMinutes / 60) // Normalize to 1 hour
        : 0,
    };
  });

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <h4 className="text-sm font-medium text-gray-700 mb-3">Last {daysToShow} Days</h4>
      
      <div className="grid grid-cols-10 gap-1">
        {dayStatus.map((day, i) => (
          <div
            key={i}
            className={`
              aspect-square rounded-sm transition-all
              ${day.hasActivity 
                ? 'bg-orange-400 hover:bg-orange-500' 
                : 'bg-gray-100 hover:bg-gray-200'
              }
            `}
            style={{
              opacity: day.hasActivity ? 0.3 + (day.intensity * 0.7) : 1,
            }}
            title={day.date.toLocaleDateString()}
          />
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-end gap-2 mt-2 text-xs text-gray-500">
        <span>Less</span>
        <div className="flex gap-0.5">
          <div className="w-3 h-3 bg-gray-100 rounded-sm" />
          <div className="w-3 h-3 bg-orange-200 rounded-sm" />
          <div className="w-3 h-3 bg-orange-300 rounded-sm" />
          <div className="w-3 h-3 bg-orange-400 rounded-sm" />
          <div className="w-3 h-3 bg-orange-500 rounded-sm" />
        </div>
        <span>More</span>
      </div>
    </div>
  );
};

interface StreakMilestoneProps {
  streak: number;
  milestones?: number[];
}

export const StreakMilestones: React.FC<StreakMilestoneProps> = ({
  streak,
  milestones = [3, 7, 14, 30, 60, 100],
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      {milestones.map((milestone) => {
        const achieved = streak >= milestone;
        const isNext = !achieved && streak < milestone && 
          (milestones[milestones.indexOf(milestone) - 1] || 0) <= streak;

        return (
          <div
            key={milestone}
            className={`
              flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium
              transition-all duration-300
              ${achieved 
                ? 'bg-orange-100 text-orange-700 border border-orange-300' 
                : isNext
                  ? 'bg-gray-100 text-gray-600 border border-gray-300 border-dashed'
                  : 'bg-gray-50 text-gray-400'
              }
            `}
          >
            <span>{achieved ? '🔥' : isNext ? '🎯' : '○'}</span>
            <span>{milestone} days</span>
            {achieved && <span className="text-orange-500">✓</span>}
          </div>
        );
      })}
    </div>
  );
};

interface DailyStreakReminderProps {
  streak: number;
  lastLoginDate: Date | null;
  className?: string;
}

export const DailyStreakReminder: React.FC<DailyStreakReminderProps> = ({
  streak,
  lastLoginDate,
  className = '',
}) => {
  const [timeUntilReset, setTimeUntilReset] = useState('');

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const midnight = new Date(now);
      midnight.setHours(24, 0, 0, 0);
      
      const diff = midnight.getTime() - now.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      
      setTimeUntilReset(`${hours}h ${minutes}m`);
    };

    calculateTime();
    const interval = setInterval(calculateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Check if logged in today
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const loggedInToday = lastLoginDate && new Date(lastLoginDate).getTime() >= today.getTime();

  if (loggedInToday) {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-lg p-4 ${className}`}>
        <div className="flex items-center gap-3">
          <span className="text-2xl">✅</span>
          <div>
            <p className="font-medium text-green-800">Daily goal complete!</p>
            <p className="text-sm text-green-600">
              Come back tomorrow to keep your {streak}-day streak alive
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-orange-50 border border-orange-200 rounded-lg p-4 ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl animate-pulse">⚠️</span>
          <div>
            <p className="font-medium text-orange-800">Don't lose your streak!</p>
            <p className="text-sm text-orange-600">
              {streak > 0 
                ? `Log in within ${timeUntilReset} to keep your ${streak}-day streak`
                : 'Log in today to start a new streak'}
            </p>
          </div>
        </div>
        <button className="px-4 py-2 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors">
          Continue Learning
        </button>
      </div>
    </div>
  );
};
