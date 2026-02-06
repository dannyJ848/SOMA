/**
 * Achievement Badge Component
 * 
 * Displays individual achievement badges with rarity styling
 * and unlock animations.
 */

import React, { useState, useEffect } from 'react';
import {
  Achievement,
  AchievementRarity,
  UnlockedAchievement,
  getRarityColor,
  getRarityBackground,
} from '../../../core/gamification';

interface AchievementBadgeProps {
  achievement: Achievement | UnlockedAchievement;
  isUnlocked: boolean;
  showDetails?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
  animateUnlock?: boolean;
}

const sizeClasses = {
  sm: {
    container: 'w-12 h-12',
    icon: 'text-lg',
    padding: 'p-1',
  },
  md: {
    container: 'w-16 h-16',
    icon: 'text-2xl',
    padding: 'p-2',
  },
  lg: {
    container: 'w-24 h-24',
    icon: 'text-3xl',
    padding: 'p-3',
  },
  xl: {
    container: 'w-32 h-32',
    icon: 'text-4xl',
    padding: 'p-4',
  },
};

const rarityGlow: Record<AchievementRarity, string> = {
  common: '',
  rare: 'shadow-[0_0_15px_rgba(59,130,246,0.5)]',
  epic: 'shadow-[0_0_20px_rgba(139,92,246,0.6)]',
  legendary: 'shadow-[0_0_25px_rgba(245,158,11,0.7)]',
};

export const AchievementBadge: React.FC<AchievementBadgeProps> = ({
  achievement,
  isUnlocked,
  showDetails = false,
  size = 'md',
  onClick,
  animateUnlock = false,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showSparkle, setShowSparkle] = useState(false);

  useEffect(() => {
    if (animateUnlock && isUnlocked) {
      setIsAnimating(true);
      setShowSparkle(true);
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setShowSparkle(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [animateUnlock, isUnlocked]);

  const unlocked = isUnlocked || 'unlockedAt' in achievement;
  const rarity = achievement.rarity;
  const sizeClass = sizeClasses[size];
  const rarityColor = getRarityColor(rarity);
  const rarityBg = getRarityBackground(rarity);

  return (
    <div
      className={`
        relative flex flex-col items-center cursor-pointer transition-all duration-300
        ${onClick ? 'hover:scale-105' : ''}
      `}
      onClick={onClick}
    >
      {/* Badge Container */}
      <div
        className={`
          ${sizeClass.container}
          ${sizeClass.padding}
          rounded-2xl border-2 flex items-center justify-center
          transition-all duration-300
          ${unlocked 
            ? `${rarityBg} ${rarityGlow[rarity]} ${isAnimating ? 'animate-bounce' : ''}` 
            : 'bg-gray-100 border-gray-300 grayscale opacity-50'
          }
        `}
        style={{ borderColor: unlocked ? rarityColor : undefined }}
      >
        {/* Icon */}
        <span className={`${sizeClass.icon} select-none`}>
          {achievement.icon}
        </span>

        {/* Sparkle Animation */}
        {showSparkle && unlocked && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute w-full h-full animate-ping bg-white/30 rounded-2xl" />
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-ping"
                style={{
                  animationDelay: `${i * 100}ms`,
                  transform: `rotate(${i * 60}deg) translateX(${size === 'xl' ? 40 : size === 'lg' ? 32 : size === 'md' ? 24 : 18}px)`,
                }}
              />
            ))}
          </div>
        )}

        {/* Rarity Indicator */}
        {unlocked && rarity !== 'common' && (
          <div
            className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-bold"
            style={{ backgroundColor: rarityColor, color: 'white' }}
          >
            {rarity === 'legendary' ? 'L' : rarity === 'epic' ? 'E' : 'R'}
          </div>
        )}
      </div>

      {/* Name */}
      {showDetails && (
        <div className="mt-2 text-center max-w-[120px]">
          <p className={`text-xs font-semibold ${unlocked ? 'text-gray-800' : 'text-gray-400'}`}>
            {achievement.name}
          </p>
          {unlocked && 'unlockedAt' in achievement && (
            <p className="text-[10px] text-gray-500">
              {new Date(achievement.unlockedAt).toLocaleDateString()}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

interface AchievementGridProps {
  achievements: (Achievement | UnlockedAchievement)[];
  unlockedIds: string[];
  category?: string;
  size?: 'sm' | 'md' | 'lg';
  showDetails?: boolean;
  columns?: 3 | 4 | 5 | 6;
  onAchievementClick?: (achievement: Achievement) => void;
  newlyUnlocked?: string[];
}

export const AchievementGrid: React.FC<AchievementGridProps> = ({
  achievements,
  unlockedIds,
  category,
  size = 'md',
  showDetails = true,
  columns = 4,
  onAchievementClick,
  newlyUnlocked = [],
}) => {
  const unlockedSet = new Set(unlockedIds);
  
  const filteredAchievements = category
    ? achievements.filter(a => a.category === category)
    : achievements;

  const gridCols = {
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-4`}>
      {filteredAchievements.map((achievement) => (
        <AchievementBadge
          key={achievement.id}
          achievement={achievement}
          isUnlocked={unlockedSet.has(achievement.id)}
          size={size}
          showDetails={showDetails}
          onClick={() => onAchievementClick?.(achievement)}
          animateUnlock={newlyUnlocked.includes(achievement.id)}
        />
      ))}
    </div>
  );
};

interface AchievementCardProps {
  achievement: Achievement | UnlockedAchievement;
  isUnlocked: boolean;
  progress?: { current: number; target: number };
}

export const AchievementCard: React.FC<AchievementCardProps> = ({
  achievement,
  isUnlocked,
  progress,
}) => {
  const rarityColor = getRarityColor(achievement.rarity);
  
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <AchievementBadge
          achievement={achievement}
          isUnlocked={isUnlocked}
          size="md"
          showDetails={false}
        />
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-gray-900">{achievement.name}</h3>
            <span
              className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{ backgroundColor: `${rarityColor}20`, color: rarityColor }}
            >
              {achievement.rarity}
            </span>
          </div>
          
          <p className="text-sm text-gray-600 mt-1">{achievement.description}</p>
          
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs text-gray-500">
              {achievement.points} points
            </span>
            
            {isUnlocked ? (
              <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                ✓ Unlocked
              </span>
            ) : progress ? (
              <div className="flex items-center gap-2">
                <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full transition-all"
                    style={{ width: `${(progress.current / progress.target) * 100}%` }}
                  />
                </div>
                <span className="text-xs text-gray-500">
                  {progress.current}/{progress.target}
                </span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

interface CategoryBadgeProps {
  category: string;
  count: number;
  total: number;
  isActive?: boolean;
  onClick?: () => void;
}

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({
  category,
  count,
  total,
  isActive = false,
  onClick,
}) => {
  const percentage = Math.round((count / total) * 100);
  
  const categoryIcons: Record<string, string> = {
    milestone: '🎯',
    quiz: '📝',
    engagement: '🔥',
    social: '🤝',
    specialty: '🏅',
    lab: '🧪',
    expert: '⭐',
  };

  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2 px-4 py-2 rounded-lg border transition-all
        ${isActive 
          ? 'bg-blue-50 border-blue-300 text-blue-700' 
          : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'
        }
      `}
    >
      <span>{categoryIcons[category] || '🏆'}</span>
      <span className="capitalize font-medium">{category}</span>
      <span className={`text-sm ${isActive ? 'text-blue-600' : 'text-gray-500'}`}>
        {count}/{total} ({percentage}%)
      </span>
    </button>
  );
};
