/**
 * Progress Dashboard Component
 * 
 * Comprehensive view of user's gamification progress including
 * health literacy score, specialty progress, and statistics.
 */

import React, { useState } from 'react';
import {
  GamificationProgress,
  SpecialtyProgress,
  AchievementStats,
  getProgressSummary,
  SPECIALTY_DISPLAY_NAMES,
} from '../../../core/gamification';

interface ProgressDashboardProps {
  progress: GamificationProgress;
  achievementStats: AchievementStats;
}

export const ProgressDashboard: React.FC<ProgressDashboardProps> = ({
  progress,
  achievementStats,
}) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);
  const summary = getProgressSummary(progress);

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard
          title="Health Literacy"
          value={`${summary.healthLiteracyScore}%`}
          icon="🧠"
          color="blue"
          subtitle="Overall Score"
        />
        <StatCard
          title="Modules Completed"
          value={summary.totalModulesCompleted}
          icon="📚"
          color="green"
          subtitle="Keep learning!"
        />
        <StatCard
          title="Current Streak"
          value={`${summary.currentStreak} days`}
          icon="🔥"
          color="orange"
          subtitle={`Best: ${summary.longestStreak} days`}
        />
        <StatCard
          title="Time Spent"
          value={`${summary.totalHoursLearned}h`}
          icon="⏱️"
          color="purple"
          subtitle="Total Learning"
        />
      </div>

      {/* Level Progress */}
      <LevelProgressCard progress={progress.level} />

      {/* Specialty Progress */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Specialty Progress</h3>
          <span className="text-sm text-gray-500">
            Top: <span className="font-medium text-green-600">{summary.topSpecialty}</span>
          </span>
        </div>
        
        <div className="space-y-3">
          {Object.values(progress.specialties)
            .sort((a, b) => b.percentage - a.percentage)
            .slice(0, 6)
            .map((specialty) => (
              <SpecialtyProgressBar
                key={specialty.specialty}
                specialty={specialty}
                onClick={() => setSelectedSpecialty(specialty.specialty)}
                isSelected={selectedSpecialty === specialty.specialty}
              />
            ))}
        </div>
        
        {selectedSpecialty && (
          <SpecialtyDetailPanel
            specialty={progress.specialties[selectedSpecialty as keyof typeof progress.specialties]}
            onClose={() => setSelectedSpecialty(null)}
          />
        )}
      </div>

      {/* Achievement Overview */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Achievement Progress</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(achievementStats.byCategory).map(([category, stats]) => (
            <div
              key={category}
              className="text-center p-4 bg-gray-50 rounded-lg"
            >
              <p className="text-2xl font-bold text-gray-900">
                {stats.unlocked}/{stats.total}
              </p>
              <p className="text-sm text-gray-600 capitalize">{category}</p>
              <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: `${(stats.unlocked / stats.total) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Total Points */}
        <div className="mt-6 flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
          <div>
            <p className="text-sm text-gray-600">Total Points Earned</p>
            <p className="text-3xl font-bold text-gray-900">
              {achievementStats.earnedPoints.toLocaleString()}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Possible</p>
            <p className="text-xl text-gray-500">
              {achievementStats.totalPoints.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* Weekly Activity */}
      <WeeklyActivityCard progress={progress} />
    </div>
  );
};

// ============================================================================
// Sub-components
// ============================================================================

interface StatCardProps {
  title: string;
  value: string | number;
  icon: string;
  color: 'blue' | 'green' | 'orange' | 'purple';
  subtitle: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color, subtitle }) => {
  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200',
    green: 'bg-green-50 border-green-200',
    orange: 'bg-orange-50 border-orange-200',
    purple: 'bg-purple-50 border-purple-200',
  };

  return (
    <div className={`${colorClasses[color]} border rounded-xl p-4`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        </div>
        <span className="text-2xl">{icon}</span>
      </div>
      <p className="text-xs text-gray-500 mt-2">{subtitle}</p>
    </div>
  );
};

interface LevelProgressCardProps {
  progress: {
    currentLevel: number;
    currentXP: number;
    xpToNextLevel: number;
    totalXP: number;
    title: string;
  };
}

const LevelProgressCard: React.FC<LevelProgressCardProps> = ({ progress }) => {
  const xpProgress = (progress.currentXP / progress.xpToNextLevel) * 100;

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-indigo-100 text-sm">Current Level</p>
          <p className="text-4xl font-bold">{progress.currentLevel}</p>
          <p className="text-indigo-200 text-sm mt-1">{progress.title}</p>
        </div>
        <div className="text-right">
          <p className="text-indigo-100 text-sm">Total XP</p>
          <p className="text-2xl font-bold">{progress.totalXP.toLocaleString()}</p>
        </div>
      </div>
      
      <div className="mt-4">
        <div className="flex justify-between text-sm text-indigo-100 mb-1">
          <span>XP Progress</span>
          <span>{progress.currentXP} / {progress.xpToNextLevel}</span>
        </div>
        <div className="w-full h-3 bg-black/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-white rounded-full transition-all duration-500"
            style={{ width: `${xpProgress}%` }}
          />
        </div>
        <p className="text-xs text-indigo-200 mt-2">
          {progress.xpToNextLevel - progress.currentXP} XP to next level
        </p>
      </div>
    </div>
  );
};

interface SpecialtyProgressBarProps {
  specialty: SpecialtyProgress;
  onClick: () => void;
  isSelected: boolean;
}

const SpecialtyProgressBar: React.FC<SpecialtyProgressBarProps> = ({
  specialty,
  onClick,
  isSelected,
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        p-3 rounded-lg cursor-pointer transition-all
        ${isSelected ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50 hover:bg-gray-100'}
      `}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="font-medium text-gray-900">{specialty.displayName}</span>
        <span className="text-sm text-gray-600">
          Level {specialty.level} • {specialty.percentage}%
        </span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all"
          style={{ width: `${specialty.percentage}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>{specialty.completedModules} modules completed</span>
        <span>{Math.round(specialty.timeSpent / 60)}h spent</span>
      </div>
    </div>
  );
};

interface SpecialtyDetailPanelProps {
  specialty: SpecialtyProgress;
  onClose: () => void;
}

const SpecialtyDetailPanel: React.FC<SpecialtyDetailPanelProps> = ({
  specialty,
  onClose,
}) => {
  return (
    <div className="mt-4 p-4 bg-white border border-gray-200 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-semibold text-gray-900">{specialty.displayName} Details</h4>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-gray-500">Modules Completed</p>
          <p className="font-medium">{specialty.completedModules} / {specialty.totalModules}</p>
        </div>
        <div>
          <p className="text-gray-500">Current Level</p>
          <p className="font-medium">{specialty.level} / 10</p>
        </div>
        <div>
          <p className="text-gray-500">Quizzes Taken</p>
          <p className="font-medium">{specialty.quizzesTaken}</p>
        </div>
        <div>
          <p className="text-gray-500">Average Score</p>
          <p className="font-medium">{specialty.averageQuizScore}%</p>
        </div>
        <div>
          <p className="text-gray-500">Time Spent</p>
          <p className="font-medium">{Math.round(specialty.timeSpent)} minutes</p>
        </div>
        <div>
          <p className="text-gray-500">Last Activity</p>
          <p className="font-medium">
            {specialty.lastActivity 
              ? new Date(specialty.lastActivity).toLocaleDateString()
              : 'Never'}
          </p>
        </div>
      </div>
    </div>
  );
};

interface WeeklyActivityCardProps {
  progress: GamificationProgress;
}

const WeeklyActivityCard: React.FC<WeeklyActivityCardProps> = ({ progress }) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = new Date().getDay();
  
  // Get last 7 days of activity
  const last7Days = [...Array(7)].map((_, i) => {
    const dayIndex = (today - 6 + i + 7) % 7;
    const date = new Date();
    date.setDate(date.getDate() - (6 - i));
    date.setHours(0, 0, 0, 0);
    
    const activity = progress.streak.streakHistory.find(h => {
      const hDate = new Date(h.date);
      hDate.setHours(0, 0, 0, 0);
      return hDate.getTime() === date.getTime();
    });
    
    return {
      day: days[dayIndex],
      minutes: activity?.activityMinutes || 0,
      modules: activity?.modulesCompleted || 0,
    };
  });

  const maxMinutes = Math.max(...last7Days.map(d => d.minutes), 60);

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Last 7 Days</h3>
      
      <div className="flex items-end justify-between h-32 gap-2">
        {last7Days.map((day, i) => {
          const height = day.minutes > 0 ? (day.minutes / maxMinutes) * 100 : 5;
          const isToday = i === 6;
          
          return (
            <div key={day.day} className="flex-1 flex flex-col items-center">
              <div
                className={`
                  w-full max-w-12 rounded-t-lg transition-all
                  ${day.minutes > 0 
                    ? isToday ? 'bg-blue-500' : 'bg-blue-300' 
                    : 'bg-gray-200'
                  }
                `}
                style={{ height: `${Math.max(height, 5)}%` }}
              />
              <span className={`text-xs mt-2 ${isToday ? 'font-bold text-blue-600' : 'text-gray-500'}`}>
                {day.day}
              </span>
              {day.minutes > 0 && (
                <span className="text-[10px] text-gray-400">
                  {Math.round(day.minutes)}m
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
