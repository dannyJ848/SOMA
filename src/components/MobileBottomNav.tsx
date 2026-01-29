/**
 * Mobile Bottom Navigation Component with GlassUI styling
 *
 * Features:
 * - Glass morphism background with backdrop blur
 * - Smooth animated active indicator
 * - Haptic feedback hints for native apps (data attributes)
 * - Optional floating action button (FAB)
 * - Integration with SmartPanelManager's mobile bottom sheets
 * - Premium transitions and active state animations
 * - Hidden by default with pull-up handle to show/hide
 * - Auto-hides after 5 seconds of no interaction
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useTranslation } from '../i18n/useI18n';

// Re-export the View type for external use
export type View = 'dashboard' | 'timeline' | 'body' | 'chat' | 'anatomy' | 'symptom-explorer' | 'medication-explorer' | 'condition-simulator' | 'encyclopedia' | 'encyclopedia-entry' | 'body-centric' | 'settings';

export interface MobileBottomNavProps {
  currentView: View;
  onNavigate: (view: View) => void;
  onFabPress?: () => void;
  fabIcon?: 'add' | 'symptom' | 'chat';
  showFab?: boolean;
}

export function MobileBottomNav({
  currentView,
  onNavigate,
  onFabPress,
  fabIcon = 'add',
  showFab = true
}: MobileBottomNavProps) {
  const { t } = useTranslation('navigation');
  const [activeIndicatorStyle, setActiveIndicatorStyle] = useState<React.CSSProperties>({});
  const [isVisible, setIsVisible] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const autoHideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Navigation items configuration
  const navItems: { view: View; icon: React.ReactNode; labelKey: string; ariaLabel: string }[] = [
    {
      view: 'body-centric',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="5" r="3"/>
          <path d="M12 8v14"/>
          <path d="M8 12h8"/>
          <path d="M8 22l4-4 4 4"/>
        </svg>
      ),
      labelKey: 'nav.body',
      ariaLabel: '3D body explorer'
    },
    {
      view: 'chat',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      ),
      labelKey: 'nav.chat',
      ariaLabel: 'AI health assistant'
    },
    {
      view: 'timeline',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      ),
      labelKey: 'nav.timeline',
      ariaLabel: 'Health history'
    },
    {
      view: 'dashboard',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
      labelKey: 'nav.dashboard',
      ariaLabel: 'Health dashboard'
    }
  ];

  // Clear any existing auto-hide timer
  const clearAutoHideTimer = useCallback(() => {
    if (autoHideTimerRef.current) {
      clearTimeout(autoHideTimerRef.current);
      autoHideTimerRef.current = null;
    }
  }, []);

  // Start the auto-hide timer (5 seconds)
  const startAutoHideTimer = useCallback(() => {
    clearAutoHideTimer();
    autoHideTimerRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  }, [clearAutoHideTimer]);

  // Toggle nav visibility
  const toggleNav = useCallback(() => {
    setIsVisible(prev => {
      const newVisible = !prev;
      if (newVisible) {
        // Start auto-hide when showing
        clearAutoHideTimer();
        autoHideTimerRef.current = setTimeout(() => {
          setIsVisible(false);
        }, 5000);
      } else {
        clearAutoHideTimer();
      }
      return newVisible;
    });
  }, [clearAutoHideTimer]);

  // Reset auto-hide timer on any interaction within the nav
  const handleNavInteraction = useCallback(() => {
    if (isVisible) {
      startAutoHideTimer();
    }
  }, [isVisible, startAutoHideTimer]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      clearAutoHideTimer();
    };
  }, [clearAutoHideTimer]);

  // Update active indicator position
  useEffect(() => {
    const activeIndex = navItems.findIndex(item => item.view === currentView);
    const activeButton = itemRefs.current[activeIndex];

    if (activeButton && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();

      setActiveIndicatorStyle({
        left: buttonRect.left - navRect.left + (buttonRect.width / 2) - 16,
        opacity: 1,
      });
    }
  }, [currentView, navItems]);

  // Handle navigation with haptic feedback hint
  const handleNavigation = useCallback((view: View) => {
    onNavigate(view);
    // Reset auto-hide timer after navigation
    startAutoHideTimer();
  }, [onNavigate, startAutoHideTimer]);

  // FAB icons
  const fabIcons = {
    add: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
        <path d="M12 5v14M5 12h14"/>
      </svg>
    ),
    symptom: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    chat: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <circle cx="9" cy="10" r="1" fill="currentColor"/>
        <circle cx="12" cy="10" r="1" fill="currentColor"/>
        <circle cx="15" cy="10" r="1" fill="currentColor"/>
      </svg>
    ),
  };

  return (
    <div className="mobile-bottom-nav-wrapper">
      {/* Pull-up handle - always visible */}
      <button
        className="mobile-nav-handle"
        onClick={toggleNav}
        aria-label={isVisible ? 'Hide navigation' : 'Show navigation'}
        aria-expanded={isVisible}
      >
        <span className="mobile-nav-handle-pill" />
      </button>

      {/* Floating Action Button */}
      {showFab && onFabPress && (
        <button
          className={`mobile-nav-fab ${isVisible ? 'mobile-nav-fab--nav-visible' : ''}`}
          onClick={onFabPress}
          data-haptic="medium"
          data-haptic-type="impact"
          aria-label={t('nav.quickAction') || 'Quick action'}
        >
          <span className="mobile-nav-fab-icon">
            {fabIcons[fabIcon]}
          </span>
          <span className="mobile-nav-fab-glow" aria-hidden="true" />
        </button>
      )}

      {/* Glass Bottom Navigation */}
      <nav
        ref={navRef}
        className={`mobile-bottom-nav glass-mobile-nav ${isVisible ? 'mobile-bottom-nav--visible' : ''}`}
        role="navigation"
        aria-label={t('nav.title') || 'Main navigation'}
        aria-hidden={!isVisible}
        data-haptic-container="true"
        onPointerDown={handleNavInteraction}
        onPointerMove={handleNavInteraction}
      >
        {/* Glass background layers */}
        <div className="glass-nav-backdrop" aria-hidden="true" />
        <div className="glass-nav-border" aria-hidden="true" />

        {/* Active indicator pill */}
        <div
          className="glass-nav-indicator"
          style={activeIndicatorStyle}
          aria-hidden="true"
        />

        <div className="mobile-nav-items" role="menubar">
          {navItems.map((item, index) => {
            const isActive = currentView === item.view;
            return (
              <button
                key={item.view}
                ref={el => { itemRefs.current[index] = el; }}
                className={`mobile-nav-item glass-nav-item ${isActive ? 'active' : ''}`}
                onClick={() => handleNavigation(item.view)}
                role="menuitem"
                aria-current={isActive ? 'page' : undefined}
                aria-label={`${t(item.labelKey)} - ${item.ariaLabel}`}
                data-haptic={isActive ? 'none' : 'light'}
                data-haptic-type="selection"
                data-view={item.view}
                tabIndex={isVisible ? 0 : -1}
              >
                <span className={`glass-nav-icon ${isActive ? 'active' : ''}`}>
                  {item.icon}
                </span>
                <span className={`glass-nav-label ${isActive ? 'active' : ''}`}>
                  {t(item.labelKey)}
                </span>
                {isActive && <span className="glass-nav-active-dot" aria-hidden="true" />}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

export default MobileBottomNav;
