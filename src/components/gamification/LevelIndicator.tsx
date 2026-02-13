/**
 * Level Indicator Component
 * 
 * Displays user level with progress bar, XP, and level-based
 * visual indicators and celebrations.
 */

import React, { useEffect, useState } from 'react';
import {
  LevelSystem,
  getLevelTitle,
  calculateXPForLevel,
  XP_REWARDS,
} from '../../../core/gamification';

interface LevelIndicatorProps {
  level: LevelSystem;
  size?: 'sm' | 'md' | 'lg';
  showXP?: boolean;
  showProgress?: boolean;
  animateLevelUp?: boolean;
  className?: string;
}

export const LevelIndicator: React.FC<LevelIndicatorProps> = ({
  level,
  size = 'md',
  showXP = true,
  showProgress = true,
  animateLevelUp = false,
  className = '',
}) => {
  const [isLevelingUp, setIsLevelingUp] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    if (animateLevelUp) {
      setIsLevelingUp(true);
      setShowCelebration(true);
      const timer = setTimeout(() => {
        setIsLevelingUp(false);
        setShowCelebration(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [animateLevelUp, level.currentLevel]);

  const xpProgress = (level.currentXP / level.xpToNextLevel) * 100;

  const sizeClasses = {
    sm: {
      container: 'p-2',
      badge: 'w-10 h-10 text-lg',
      title: 'text-xs',
      level: 'text-sm',
      xp: 'text-xs',
    },
    md: {
      container: 'p-3',
      badge: 'w-14 h-14 text-2xl',
      title: 'text-sm',
      level: 'text-xl',
      xp: 'text-sm',
    },
    lg: {
      container: 'p-4',
      badge: 'w-20 h-20 text-3xl',
      title: 'text-base',
      level: 'text-3xl',
      xp: 'text-base',
    },
  };

  const classes = sizeClasses[size];

  // Level-based colors and styles
  const getLevelStyle = (levelNum: number) => {
    if (levelNum >= 10) return { bg: 'bg-amber-500', text: 'text-amber-600', glow: 'shadow-amber-500/50' };
    if (levelNum >= 8) return { bg: 'bg-purple-500', text: 'text-purple-600', glow: 'shadow-purple-500/50' };
    if (levelNum >= 5) return { bg: 'bg-blue-500', text: 'text-blue-600', glow: 'shadow-blue-500/50' };
    if (levelNum >= 3) return { bg: 'bg-green-500', text: 'text-green-600', glow: 'shadow-green-500/50' };
    return { bg: 'bg-gray-500', text: 'text-gray-600', glow: 'shadow-gray-500/50' };
  };

  const levelStyle = getLevelStyle(level.currentLevel);

  return (
    <div className={`relative ${className}`}>
      {/* Celebration Animation */}
      {showCelebration && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-full animate-ping"
              style={{
                backgroundColor: ['#F59E0B', '#8B5CF6', '#3B82F6', '#10B981'][i % 4],
                animationDelay: `${i * 100}ms`,
                animationDuration: '1s',
                transform: `rotate(${i * 30}deg) translateY(-${size === 'lg' ? 60 : size === 'md' ? 45 : 30}px)`,
              }}
            />
          ))}
        </div>
      )}

      <div className="flex items-center gap-3">
        {/* Level Badge */}
        <div
          className={`
            ${classes.badge}
            ${levelStyle.bg}
            rounded-full flex items-center justify-center text-white font-bold
            shadow-lg ${levelStyle.glow}
            ${isLevelingUp ? 'animate-bounce scale-110' : 'transition-transform'}
          `}
        >
          {level.currentLevel}
        </div>

        <div className="flex-1 min-w-0">
          {/* Title */}
          <p className={`${classes.title} ${levelStyle.text} font-medium`}>
            {level.title}
          </p>

          {/* XP Progress */}
          {showProgress && (
            <div className="mt-1">
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full ${levelStyle.bg} rounded-full transition-all duration-500`}
                  style={{ width: `${xpProgress}%` }}
                />
              </div>
              
              {showXP && (
                <p className={`${classes.xp} text-gray-500 mt-1`}>
                  {level.currentXP.toLocaleString()} / {level.xpToNextLevel.toLocaleString()} XP
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface CompactLevelBadgeProps {
  level: number;
  xp?: number;
  size?: 'xs' | 'sm' | 'md';
  showTooltip?: boolean;
}

export const CompactLevelBadge: React.FC<CompactLevelBadgeProps> = ({
  level,
  xp,
  size = 'sm',
  showTooltip = false,
}) => {
  const [showTip, setShowTip] = useState(false);

  const sizeClasses = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
  };

  const getLevelColor = (levelNum: number) => {
    if (levelNum >= 10) return 'bg-amber-500';
    if (levelNum >= 8) return 'bg-purple-500';
    if (levelNum >= 5) return 'bg-blue-500';
    if (levelNum >= 3) return 'bg-green-500';
    return 'bg-gray-500';
  };

  return (
    <div className="relative inline-block"
      onMouseEnter={() => setShowTip(true)}
      onMouseLeave={() => setShowTip(false)}
    >
      <div
        className={`
          ${sizeClasses[size]}
          ${getLevelColor(level)}
          rounded-full flex items-center justify-center text-white font-bold
          cursor-help
        `}
      >
        {level}
      </div>

      {showTooltip && showTip && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap z-50">
          <p className="font-semibold">{getLevelTitle(level)}</p>
          {xp !== undefined && <p className="text-gray-400">{xp.toLocaleString()} XP total</p>}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
        </div>
      )}
    </div>
  );
};

interface XPBreakdownProps {
  recentActivities: Array<{
    type: keyof typeof XP_REWARDS;
    description: string;
    xp: number;
    timestamp: Date;
  }>;
  className?: string;
}

export const XPBreakdown: React.FC<XPBreakdownProps> = ({
  recentActivities,
  className = '',
}) => {
  const totalXP = recentActivities.reduce((sum, a) => sum + a.xp, 0);

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'MODULE_COMPLETED': return '📚';
      case 'QUIZ_COMPLETED': return '📝';
      case 'PERFECT_QUIZ': return '💯';
      case 'LAB_REVIEWED': return '🧪';
      case 'CONTENT_SHARED': return '📤';
      case 'DAILY_LOGIN': return '📅';
      case 'STREAK_BONUS': return '🔥';
      case 'ACHIEVEMENT_UNLOCKED': return '🏆';
      case 'TEACHING_SESSION': return '👨‍🏫';
      default: return '✨';
    }
  };

  return (
    <div className={`bg-white rounded-xl border border-gray-200 p-4 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900">XP Breakdown</h3>
        <span className="text-sm font-bold text-purple-600">+{totalXP} XP</span>
      </div>

      <div className="space-y-2">
        {recentActivities.map((activity, i) => (
          <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
            <div className="flex items-center gap-3">
              <span className="text-lg">{getActivityIcon(activity.type)}</span>
              <div>
                <p className="text-sm font-medium text-gray-900">{activity.description}</p>
                <p className="text-xs text-gray-500">
                  {new Date(activity.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
            <span className="text-sm font-semibold text-green-600">+{activity.xp}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

interface LevelProgressCardProps {
  fromLevel: number;
  toLevel: number;
  xpGained: number;
  onClose?: () => void;
}

export const LevelUpCelebration: React.FC<LevelProgressCardProps> = ({
  fromLevel,
  toLevel,
  xpGained,
  onClose,
}) => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const rewards = [
    'New modules unlocked!',
    'Achievement badges upgraded',
    'Expert mode access granted',
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center relative overflow-hidden">
        {/* Confetti */}
        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full animate-ping"
                style={{
                  backgroundColor: ['#F59E0B', '#8B5CF6', '#3B82F6', '#10B981', '#EF4444'][i % 5],
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 1}s`,
                  animationDuration: '2s',
                }}
              />
            ))}
          </div>
        )}

        <div className="relative z-10">
          <div className="text-6xl mb-4">🎉</div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Level Up!</h2>
          
          <div className="flex items-center justify-center gap-4 my-6">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold text-gray-500">
              {fromLevel}
            </div>
            <div className="text-2xl">→</div>
            <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-lg animate-bounce">
              {toLevel}
            </div>
          </div>

          <p className="text-lg font-medium text-gray-900 mb-1">
            {getLevelTitle(toLevel)}
          </p>
          
          <p className="text-purple-600 font-bold mb-4">+{xpGained} XP earned!</p>

          <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
            <p className="text-sm font-medium text-gray-700 mb-2">New rewards unlocked:</p>
            <ul className="text-sm text-gray-600 space-y-1">
              {rewards.map((reward, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span>✨</span> {reward}
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={onClose}
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            Continue Learning
          </button>
        </div>
      </div>
    </div>
  );
};

interface LevelRequirementsProps {
  currentLevel: number;
  showAll?: boolean;
}

export const LevelRequirements: React.FC<LevelRequirementsProps> = ({
  currentLevel,
  showAll = false,
}) => {
  const levels = showAll 
    ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    : [currentLevel, currentLevel + 1, currentLevel + 2].filter(l => l <= 10);

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <h3 className="font-semibold text-gray-900 mb-4">Level Requirements</h3>
      
      <div className="space-y-3">
        {levels.map((level) => {
          const xpNeeded = calculateXPForLevel(level);
          const isCurrent = level === currentLevel;
          const isPast = level < currentLevel;

          return (
            <div
              key={level}
              className={`
                flex items-center justify-between p-3 rounded-lg
                ${isCurrent ? 'bg-blue-50 border border-blue-200' : ''}
                ${isPast ? 'opacity-50' : ''}
              `}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                    ${isCurrent 
                      ? 'bg-blue-500 text-white' 
                      : isPast 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }
                  `}
                >
                  {isPast ? '✓' : level}
                </div>
                <div>
                  <p className={`font-medium ${isCurrent ? 'text-blue-900' : 'text-gray-900'}`}>
                    {getLevelTitle(level)}
                  </p>
                  <p className="text-xs text-gray-500">{xpNeeded.toLocaleString()} XP required</p>
                </div>
              </div>

              {isCurrent && (
                <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                  Current
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
