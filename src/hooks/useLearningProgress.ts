/**
 * Learning Progress Tracker
 * 
 * Track user progress through educational content.
 */

import { useState, useEffect, useCallback } from 'react';

export interface ProgressItem {
  contentId: string;
  title: string;
  completed: boolean;
  progress: number; // 0-100
  lastAccessed: number;
  timeSpent: number; // seconds
  complexityLevel: number;
}

export interface LearningStats {
  totalContent: number;
  completedContent: number;
  inProgressContent: number;
  totalTimeSpent: number; // seconds
  averageCompletion: number;
  streakDays: number;
  lastStudyDate: string;
}

const STORAGE_KEY = 'biological-self-progress';

export function useLearningProgress() {
  const [progress, setProgress] = useState<Record<string, ProgressItem>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Load progress from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setProgress(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to load progress:', e);
    }
    setIsLoaded(true);
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
      } catch (e) {
        console.error('Failed to save progress:', e);
      }
    }
  }, [progress, isLoaded]);

  const startContent = useCallback((contentId: string, title: string, complexityLevel: number = 3) => {
    setProgress((prev) => ({
      ...prev,
      [contentId]: {
        contentId,
        title,
        completed: false,
        progress: 0,
        lastAccessed: Date.now(),
        timeSpent: 0,
        complexityLevel,
      },
    }));
  }, []);

  const updateProgress = useCallback((contentId: string, updates: Partial<ProgressItem>) => {
    setProgress((prev) => {
      const current = prev[contentId];
      if (!current) return prev;

      return {
        ...prev,
        [contentId]: {
          ...current,
          ...updates,
          lastAccessed: Date.now(),
        },
      };
    });
  }, []);

  const markComplete = useCallback((contentId: string) => {
    updateProgress(contentId, { completed: true, progress: 100 });
  }, [updateProgress]);

  const addTimeSpent = useCallback((contentId: string, seconds: number) => {
    setProgress((prev) => {
      const current = prev[contentId];
      if (!current) return prev;

      return {
        ...prev,
        [contentId]: {
          ...current,
          timeSpent: current.timeSpent + seconds,
          lastAccessed: Date.now(),
        },
      };
    });
  }, []);

  const getStats = useCallback((): LearningStats => {
    const items = Object.values(progress);
    const completed = items.filter((i) => i.completed);
    const inProgress = items.filter((i) => !i.completed && i.progress > 0);
    const totalTime = items.reduce((sum, i) => sum + i.timeSpent, 0);
    const avgCompletion =
      items.length > 0
        ? items.reduce((sum, i) => sum + i.progress, 0) / items.length
        : 0;

    // Calculate streak
    const today = new Date().toISOString().split('T')[0];
    const lastDate = items.length > 0 
      ? new Date(Math.max(...items.map(i => i.lastAccessed))).toISOString().split('T')[0]
      : null;

    return {
      totalContent: items.length,
      completedContent: completed.length,
      inProgressContent: inProgress.length,
      totalTimeSpent: totalTime,
      averageCompletion: Math.round(avgCompletion),
      streakDays: lastDate === today ? 1 : 0, // Simplified streak calculation
      lastStudyDate: lastDate || '',
    };
  }, [progress]);

  const getRecentContent = useCallback((limit: number = 5): ProgressItem[] => {
    return Object.values(progress)
      .sort((a, b) => b.lastAccessed - a.lastAccessed)
      .slice(0, limit);
  }, [progress]);

  const resetProgress = useCallback(() => {
    setProgress({});
  }, []);

  return {
    progress,
    isLoaded,
    startContent,
    updateProgress,
    markComplete,
    addTimeSpent,
    getStats,
    getRecentContent,
    resetProgress,
  };
}

export default useLearningProgress;
