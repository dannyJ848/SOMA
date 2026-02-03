/**
 * Onboarding Tutorial
 * 
 * First-time user tutorial for the app.
 */

import React, { useState, useEffect } from 'react';

interface OnboardingStep {
  id: string;
  title: string;
  description: string;
  target?: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

const ONBOARDING_STEPS: OnboardingStep[] = [
  {
    id: 'welcome',
    title: 'Welcome to Biological Self',
    description: 'Your personal medical education companion. Explore the human body in 3D and learn about anatomy, physiology, and health.',
  },
  {
    id: '3d-model',
    title: '3D Anatomy Model',
    description: 'Click on any body part to access detailed information. Rotate, zoom, and explore every system.',
    target: '.anatomy-viewer',
  },
  {
    id: 'layers',
    title: 'Layer Controls',
    description: 'Toggle between skin, muscle, bone, and organs. See how systems interact.',
    target: '.layer-controls',
  },
  {
    id: 'search',
    title: 'Universal Search',
    description: 'Press Ctrl+K to search across all content. Find conditions, medications, and anatomy quickly.',
  },
  {
    id: 'complexity',
    title: 'Complexity Levels',
    description: 'Content adapts to your knowledge level. Choose from basic to medical school depth.',
  },
  {
    id: 'favorites',
    title: 'Save Favorites',
    description: 'Bookmark content for quick access. Build your personal medical library.',
  },
  {
    id: 'ready',
    title: "You're Ready!",
    description: 'Start exploring. Click on any body region to begin your journey.',
  },
];

const STORAGE_KEY = 'biological-self-onboarding';

interface OnboardingTutorialProps {
  onComplete: () => void;
  onSkip: () => void;
}

export const OnboardingTutorial: React.FC<OnboardingTutorialProps> = ({
  onComplete,
  onSkip,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const step = ONBOARDING_STEPS[currentStep];
  const progress = ((currentStep + 1) / ONBOARDING_STEPS.length) * 100;

  const handleNext = () => {
    if (currentStep < ONBOARDING_STEPS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      completeTutorial();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const completeTutorial = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'completed');
    } catch (e) {
      console.error('Failed to save onboarding state:', e);
    }
    setIsVisible(false);
    onComplete();
  };

  const skipTutorial = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'skipped');
    } catch (e) {
      console.error('Failed to save onboarding state:', e);
    }
    setIsVisible(false);
    onSkip();
  };

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.8)',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          background: '#1e1e2e',
          borderRadius: '16px',
          padding: '40px',
          maxWidth: '500px',
          width: '90%',
          textAlign: 'center',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
        }}
      >
        {/* Progress Bar */}
        <div
          style={{
            width: '100%',
            height: '4px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '2px',
            marginBottom: '30px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: '100%',
              background: '#4a90e2',
              borderRadius: '2px',
              transition: 'width 0.3s ease',
            }}
          />
        </div>

        {/* Step Counter */}
        <div
          style={{
            fontSize: '0.85rem',
            color: '#888',
            marginBottom: '20px',
          }}
        >
          Step {currentStep + 1} of {ONBOARDING_STEPS.length}
        </div>

        {/* Icon */}
        <div
          style={{
            fontSize: '4rem',
            marginBottom: '20px',
          }}
        >
          {currentStep === 0 && '👋'}
          {step.target?.includes('anatomy') && '🧬'}
          {step.target?.includes('layer') && '🔍'}
          {step.id === 'search' && '🔎'}
          {step.id === 'complexity' && '📚'}
          {step.id === 'favorites' && '⭐'}
          {currentStep === ONBOARDING_STEPS.length - 1 && '🎉'}
        </div>

        {/* Title */}
        <h2
          style={{
            fontSize: '1.5rem',
            color: '#fff',
            marginBottom: '15px',
            fontWeight: '600',
          }}
        >
          {step.title}
        </h2>

        {/* Description */}
        <p
          style={{
            fontSize: '1rem',
            color: '#aaa',
            lineHeight: '1.6',
            marginBottom: '30px',
          }}
        >
          {step.description}
        </p>

        {/* Buttons */}
        <div
          style={{
            display: 'flex',
            gap: '10px',
            justifyContent: 'center',
          }}
        >
          {currentStep > 0 && (
            <button
              onClick={handlePrev}
              style={{
                padding: '12px 24px',
                background: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                color: '#fff',
                cursor: 'pointer',
                fontSize: '0.95rem',
              }}
            >
              Previous
            </button>
          )}

          <button
            onClick={handleNext}
            style={{
              padding: '12px 32px',
              background: '#4a90e2',
              border: 'none',
              borderRadius: '8px',
              color: '#fff',
              cursor: 'pointer',
              fontSize: '0.95rem',
              fontWeight: '500',
            }}
          >
            {currentStep === ONBOARDING_STEPS.length - 1 ? 'Get Started' : 'Next'}
          </button>
        </div>

        {/* Skip Link */}
        {currentStep < ONBOARDING_STEPS.length - 1 && (
          <button
            onClick={skipTutorial}
            style={{
              marginTop: '20px',
              background: 'transparent',
              border: 'none',
              color: '#666',
              cursor: 'pointer',
              fontSize: '0.85rem',
            }}
          >
            Skip Tutorial
          </button>
        )}
      </div>
    </div>
  );
};

export const shouldShowOnboarding = (): boolean => {
  try {
    const state = localStorage.getItem(STORAGE_KEY);
    return state !== 'completed' && state !== 'skipped';
  } catch (e) {
    return true;
  }
};

export default OnboardingTutorial;
