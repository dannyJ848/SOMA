/**
 * Progress Tracking System for Health Journey Gamification
 * 
 * Tracks overall health literacy score, specialty progress,
 * learning streaks, and time spent learning.
 */

import type { MedicalSpecialty } from '../education/types';

// ============================================================================
// Progress Types
// ============================================================================

export interface HealthLiteracyScore {
  overall: number; // 0-100
  bySpecialty: Record<MedicalSpecialty, number>;
  lastCalculated: Date;
}

export interface SpecialtyProgress {
  specialty: MedicalSpecialty;
  displayName: string;
  completedModules: number;
  totalModules: number;
  percentage: number;
  quizzesTaken: number;
  averageQuizScore: number;
  timeSpent: number; // minutes
  lastActivity: Date | null;
  level: number; // 1-10
}

export interface LearningStreak {
  currentStreak: number;
  longestStreak: number;
  lastLoginDate: Date | null;
  streakHistory: StreakDay[];
}

export interface StreakDay {
  date: Date;
  activityMinutes: number;
  modulesCompleted: number;
  quizzesTaken: number;
}

export interface TimeTracking {
  totalMinutes: number;
  thisWeek: number;
  thisMonth: number;
  dailyAverage: number;
  history: DailyTimeRecord[];
}

export interface DailyTimeRecord {
  date: Date;
  minutes: number;
  modulesCompleted: number;
  quizzesCompleted: number;
}

export interface WeeklyProgress {
  weekStarting: Date;
  minutesLearned: number;
  modulesCompleted: number;
  quizzesTaken: number;
  averageScore: number;
  streakDays: number;
}

export interface MonthlyProgress {
  month: Date;
  minutesLearned: number;
  modulesCompleted: number;
  quizzesTaken: number;
  achievementsUnlocked: number;
  averageScore: number;
}

export interface LevelSystem {
  currentLevel: number;
  currentXP: number;
  xpToNextLevel: number;
  totalXP: number;
  title: string;
}

export interface GamificationProgress {
  userId: string;
  healthLiteracy: HealthLiteracyScore;
  specialties: Record<MedicalSpecialty, SpecialtyProgress>;
  streak: LearningStreak;
  timeTracking: TimeTracking;
  level: LevelSystem;
  weeklyProgress: WeeklyProgress[];
  monthlyProgress: MonthlyProgress[];
  updatedAt: Date;
}

// ============================================================================
// Specialty Display Names
// ============================================================================

export const SPECIALTY_DISPLAY_NAMES: Record<MedicalSpecialty, string> = {
  cardiology: 'Cardiology',
  endocrinology: 'Endocrinology',
  gastroenterology: 'Gastroenterology',
  neurology: 'Neurology',
  rheumatology: 'Rheumatology',
  pulmonology: 'Pulmonology',
  nephrology: 'Nephrology',
  hematology: 'Hematology',
  'infectious-disease': 'Infectious Disease',
  oncology: 'Oncology',
  psychiatry: 'Psychiatry',
  dermatology: 'Dermatology',
  ophthalmology: 'Ophthalmology',
  ent: 'ENT',
  orthopedics: 'Orthopedics',
  obgyn: 'OB/GYN',
  urology: 'Urology',
  'allergy-immunology': 'Allergy & Immunology',
  'sports-medicine': 'Sports Medicine',
  'physical-medicine': 'Physical Medicine',
  'emergency-medicine': 'Emergency Medicine',
  'critical-care': 'Critical Care',
  anesthesiology: 'Anesthesiology',
  pathology: 'Pathology',
  radiology: 'Radiology',
  'general-practice': 'General Practice',
};

// ============================================================================
// Level System Configuration
// ============================================================================

export const LEVEL_TITLES: Record<number, string> = {
  1: 'Health Novice',
  2: 'Health Explorer',
  3: 'Health Student',
  4: 'Health Apprentice',
  5: 'Health Scholar',
  6: 'Health Specialist',
  7: 'Health Expert',
  8: 'Health Master',
  9: 'Health Sage',
  10: 'Health Legend',
};

export function calculateXPForLevel(level: number): number {
  // XP required for next level: base + (level * multiplier)^1.5
  const base = 100;
  const multiplier = 50;
  return Math.floor(base + Math.pow(level * multiplier, 1.5));
}

export function calculateLevelFromXP(totalXP: number): { level: number; currentXP: number; xpToNext: number } {
  let level = 1;
  let xpNeeded = calculateXPForLevel(level);
  let accumulatedXP = 0;
  
  while (totalXP >= accumulatedXP + xpNeeded) {
    accumulatedXP += xpNeeded;
    level++;
    xpNeeded = calculateXPForLevel(level);
  }
  
  return {
    level,
    currentXP: totalXP - accumulatedXP,
    xpToNext: xpNeeded,
  };
}

export function getLevelTitle(level: number): string {
  return LEVEL_TITLES[Math.min(level, 10)] || 'Health Legend';
}

// ============================================================================
// XP Rewards
// ============================================================================

export const XP_REWARDS = {
  MODULE_COMPLETED: 50,
  QUIZ_COMPLETED: 20,
  PERFECT_QUIZ: 50,
  LAB_REVIEWED: 15,
  CONTENT_SHARED: 25,
  DAILY_LOGIN: 10,
  STREAK_BONUS: 5, // per day of streak
  ACHIEVEMENT_UNLOCKED: 100,
  TEACHING_SESSION: 75,
} as const;

export type XPRewardType = keyof typeof XP_REWARDS;

export function calculateXPForActivity(type: XPRewardType, streakDays: number = 0): number {
  const baseXP = XP_REWARDS[type];
  
  // Add streak bonus for daily activities
  if (type === 'DAILY_LOGIN') {
    return baseXP + (streakDays * XP_REWARDS.STREAK_BONUS);
  }
  
  return baseXP;
}

// ============================================================================
// Progress Calculations
// ============================================================================

/**
 * Calculate health literacy score based on completed modules and quiz scores
 */
export function calculateHealthLiteracyScore(
  specialties: Record<MedicalSpecialty, SpecialtyProgress>
): HealthLiteracyScore {
  const bySpecialty: Partial<Record<MedicalSpecialty, number>> = {};
  let totalScore = 0;
  let specialtyCount = 0;
  
  for (const [specialty, progress] of Object.entries(specialties) as [MedicalSpecialty, SpecialtyProgress][]) {
    // Calculate specialty score based on completion and quiz performance
    const completionWeight = 0.6;
    const quizWeight = 0.4;
    
    const completionScore = progress.percentage;
    const quizScore = progress.quizzesTaken > 0 
      ? (progress.averageQuizScore / 100) * 100 
      : 0;
    
    const specialtyScore = Math.round(
      (completionScore * completionWeight) + (quizScore * quizWeight)
    );
    
    bySpecialty[specialty] = specialtyScore;
    totalScore += specialtyScore;
    specialtyCount++;
  }
  
  return {
    overall: specialtyCount > 0 ? Math.round(totalScore / specialtyCount) : 0,
    bySpecialty: bySpecialty as Record<MedicalSpecialty, number>,
    lastCalculated: new Date(),
  };
}

/**
 * Calculate specialty progress
 */
export function calculateSpecialtyProgress(
  specialty: MedicalSpecialty,
  completedModules: string[],
  totalModules: number,
  quizScores: { score: number; count: number },
  timeSpent: number,
  lastActivity: Date | null
): SpecialtyProgress {
  const percentage = totalModules > 0 
    ? Math.round((completedModules.length / totalModules) * 100)
    : 0;
  
  // Calculate specialty level (1-10)
  const level = Math.min(10, Math.max(1, Math.floor(percentage / 10) + 1));
  
  return {
    specialty,
    displayName: SPECIALTY_DISPLAY_NAMES[specialty],
    completedModules: completedModules.length,
    totalModules,
    percentage,
    quizzesTaken: quizScores.count,
    averageQuizScore: quizScores.count > 0 
      ? Math.round(quizScores.score / quizScores.count)
      : 0,
    timeSpent,
    lastActivity,
    level,
  };
}

/**
 * Update learning streak
 */
export function updateLearningStreak(
  currentStreak: LearningStreak,
  today: Date = new Date()
): LearningStreak {
  const lastLogin = currentStreak.lastLoginDate;
  
  if (!lastLogin) {
    // First login
    return {
      currentStreak: 1,
      longestStreak: 1,
      lastLoginDate: today,
      streakHistory: [{
        date: today,
        activityMinutes: 0,
        modulesCompleted: 0,
        quizzesTaken: 0,
      }],
    };
  }
  
  const lastLoginDate = new Date(lastLogin);
  lastLoginDate.setHours(0, 0, 0, 0);
  const todayDate = new Date(today);
  todayDate.setHours(0, 0, 0, 0);
  
  const daysDiff = Math.floor(
    (todayDate.getTime() - lastLoginDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  
  if (daysDiff === 0) {
    // Same day, no change to streak
    return currentStreak;
  } else if (daysDiff === 1) {
    // Consecutive day, increment streak
    const newStreak = currentStreak.currentStreak + 1;
    return {
      currentStreak: newStreak,
      longestStreak: Math.max(currentStreak.longestStreak, newStreak),
      lastLoginDate: today,
      streakHistory: [
        {
          date: today,
          activityMinutes: 0,
          modulesCompleted: 0,
          quizzesTaken: 0,
        },
        ...currentStreak.streakHistory,
      ].slice(0, 365), // Keep last year
    };
  } else {
    // Streak broken
    return {
      currentStreak: 1,
      longestStreak: currentStreak.longestStreak,
      lastLoginDate: today,
      streakHistory: [
        {
          date: today,
          activityMinutes: 0,
          modulesCompleted: 0,
          quizzesTaken: 0,
        },
        ...currentStreak.streakHistory,
      ].slice(0, 365),
    };
  }
}

/**
 * Update today's activity in streak history
 */
export function recordDailyActivity(
  streak: LearningStreak,
  minutes: number,
  modulesCompleted: number = 0,
  quizzesTaken: number = 0,
  today: Date = new Date()
): LearningStreak {
  const todayDate = new Date(today);
  todayDate.setHours(0, 0, 0, 0);
  
  const todayEntry = streak.streakHistory.find(entry => {
    const entryDate = new Date(entry.date);
    entryDate.setHours(0, 0, 0, 0);
    return entryDate.getTime() === todayDate.getTime();
  });
  
  if (todayEntry) {
    todayEntry.activityMinutes += minutes;
    todayEntry.modulesCompleted += modulesCompleted;
    todayEntry.quizzesTaken += quizzesTaken;
  } else {
    streak.streakHistory.unshift({
      date: today,
      activityMinutes: minutes,
      modulesCompleted,
      quizzesTaken,
    });
  }
  
  return streak;
}

/**
 * Calculate weekly progress
 */
export function calculateWeeklyProgress(
  timeTracking: TimeTracking,
  weeksAgo: number = 0
): WeeklyProgress {
  const now = new Date();
  const weekStart = new Date(now);
  weekStart.setDate(now.getDate() - (now.getDay() + (weeksAgo * 7)));
  weekStart.setHours(0, 0, 0, 0);
  
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekStart.getDate() + 7);
  
  const weekRecords = timeTracking.history.filter(record => {
    const recordDate = new Date(record.date);
    return recordDate >= weekStart && recordDate < weekEnd;
  });
  
  const minutesLearned = weekRecords.reduce((sum, r) => sum + r.minutes, 0);
  const modulesCompleted = weekRecords.reduce((sum, r) => sum + r.modulesCompleted, 0);
  const quizzesTaken = weekRecords.reduce((sum, r) => sum + r.quizzesCompleted, 0);
  const streakDays = weekRecords.filter(r => r.minutes > 0).length;
  
  return {
    weekStarting: weekStart,
    minutesLearned,
    modulesCompleted,
    quizzesTaken,
    averageScore: 0, // Would need quiz score history
    streakDays,
  };
}

/**
 * Get progress summary for display
 */
export function getProgressSummary(progress: GamificationProgress): {
  totalModulesCompleted: number;
  totalQuizzesTaken: number;
  averageQuizScore: number;
  totalHoursLearned: number;
  currentStreak: number;
  longestStreak: number;
  healthLiteracyScore: number;
  topSpecialty: string;
  weakestSpecialty: string;
} {
  const specialties = Object.values(progress.specialties);
  
  const totalModulesCompleted = specialties.reduce((sum, s) => sum + s.completedModules, 0);
  const totalQuizzesTaken = specialties.reduce((sum, s) => sum + s.quizzesTaken, 0);
  const totalQuizScore = specialties.reduce((sum, s) => 
    sum + (s.averageQuizScore * s.quizzesTaken), 0
  );
  
  const topSpecialty = specialties.reduce((max, s) => 
    s.percentage > max.percentage ? s : max, specialties[0]
  );
  
  const weakestSpecialty = specialties.reduce((min, s) => 
    s.percentage < min.percentage ? s : min, specialties[0]
  );
  
  return {
    totalModulesCompleted,
    totalQuizzesTaken,
    averageQuizScore: totalQuizzesTaken > 0 
      ? Math.round(totalQuizScore / totalQuizzesTaken)
      : 0,
    totalHoursLearned: Math.round(progress.timeTracking.totalMinutes / 60 * 10) / 10,
    currentStreak: progress.streak.currentStreak,
    longestStreak: progress.streak.longestStreak,
    healthLiteracyScore: progress.healthLiteracy.overall,
    topSpecialty: topSpecialty?.displayName || 'None',
    weakestSpecialty: weakestSpecialty?.displayName || 'None',
  };
}

// ============================================================================
// Progress Milestones
// ============================================================================

export interface ProgressMilestone {
  type: 'modules' | 'hours' | 'streak' | 'score';
  threshold: number;
  message: string;
  reward?: string;
}

export const PROGRESS_MILESTONES: ProgressMilestone[] = [
  { type: 'modules', threshold: 1, message: 'Started your health journey!' },
  { type: 'modules', threshold: 5, message: 'Building strong foundations' },
  { type: 'modules', threshold: 10, message: 'Becoming health literate' },
  { type: 'modules', threshold: 25, message: 'Health knowledge growing' },
  { type: 'modules', threshold: 50, message: 'Health expert in training' },
  { type: 'hours', threshold: 1, message: 'First hour of learning complete' },
  { type: 'hours', threshold: 5, message: 'Dedicated learner' },
  { type: 'hours', threshold: 20, message: 'Serious about health education' },
  { type: 'hours', threshold: 50, message: 'Health education champion' },
  { type: 'streak', threshold: 3, message: 'Building a learning habit' },
  { type: 'streak', threshold: 7, message: 'One week strong!' },
  { type: 'streak', threshold: 30, message: 'Monthly learning master' },
  { type: 'score', threshold: 25, message: 'Health literacy improving' },
  { type: 'score', threshold: 50, message: 'Halfway to full literacy' },
  { type: 'score', threshold: 75, message: 'Advanced health literacy' },
  { type: 'score', threshold: 90, message: 'Health literacy master' },
];

/**
 * Check for new milestones
 */
export function checkMilestones(
  progress: GamificationProgress
): ProgressMilestone[] {
  const summary = getProgressSummary(progress);
  const achieved: ProgressMilestone[] = [];
  
  for (const milestone of PROGRESS_MILESTONES) {
    let currentValue = 0;
    
    switch (milestone.type) {
      case 'modules':
        currentValue = summary.totalModulesCompleted;
        break;
      case 'hours':
        currentValue = summary.totalHoursLearned;
        break;
      case 'streak':
        currentValue = summary.currentStreak;
        break;
      case 'score':
        currentValue = summary.healthLiteracyScore;
        break;
    }
    
    if (currentValue >= milestone.threshold) {
      achieved.push(milestone);
    }
  }
  
  return achieved;
}
