/**
 * Settings Page Component
 *
 * Main settings page with navigation to all settings categories.
 */

import { useState, type ReactNode } from 'react';
import { useSettings } from './useSettings';
import { ProfileSettings } from './ProfileSettings';
import { AppearanceSettings } from './AppearanceSettings';
import { LanguageSettings } from './LanguageSettings';
import { PrivacySettings } from './PrivacySettings';
import { NotificationSettings } from './NotificationSettings';
import { AccessibilitySettings } from './AccessibilitySettings';
import { DataManagement } from './DataManagement';
import { ComplexitySettings } from './ComplexitySettings';
import './Settings.css';

// ============================================
// Types
// ============================================

type SettingsSection =
  | 'main'
  | 'profile'
  | 'appearance'
  | 'language'
  | 'complexity'
  | 'privacy'
  | 'notifications'
  | 'accessibility'
  | 'data';

interface SettingsPageProps {
  onBack: () => void;
  initialSection?: SettingsSection;
}

interface SettingsMenuItemProps {
  icon: ReactNode;
  title: string;
  description: string;
  onClick: () => void;
  badge?: string;
  badgeType?: 'info' | 'warning' | 'success';
}

// ============================================
// Settings Menu Item
// ============================================

function SettingsMenuItem({
  icon,
  title,
  description,
  onClick,
  badge,
  badgeType = 'info',
}: SettingsMenuItemProps) {
  return (
    <button className="settings-menu-item" onClick={onClick}>
      <span className="settings-menu-icon">{icon}</span>
      <div className="settings-menu-content">
        <span className="settings-menu-title">{title}</span>
        <span className="settings-menu-description">{description}</span>
      </div>
      {badge && (
        <span className={`settings-menu-badge badge-${badgeType}`}>{badge}</span>
      )}
      <svg className="settings-menu-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 18l6-6-6-6" />
      </svg>
    </button>
  );
}

// ============================================
// Section Header
// ============================================

interface SectionHeaderProps {
  title: string;
  onBack: () => void;
}

function SectionHeader({ title, onBack }: SectionHeaderProps) {
  return (
    <header className="settings-header">
      <button className="settings-back-button" onClick={onBack}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </button>
      <h1 className="settings-title">{title}</h1>
      <div className="settings-header-spacer" />
    </header>
  );
}

// ============================================
// Main Component
// ============================================

export function SettingsPage({ onBack, initialSection = 'main' }: SettingsPageProps) {
  const [currentSection, setCurrentSection] = useState<SettingsSection>(initialSection);
  const { settings, isLoading, lastSaved } = useSettings();

  const navigateToSection = (section: SettingsSection) => {
    setCurrentSection(section);
  };

  const navigateBack = () => {
    if (currentSection === 'main') {
      onBack();
    } else {
      setCurrentSection('main');
    }
  };

  // Count items for badges
  const conditionsCount = settings.healthProfile.conditions.length;
  const medicationsCount = settings.healthProfile.medications.length;
  const allergiesCount = settings.healthProfile.allergies.length;

  // Render current section
  if (currentSection === 'profile') {
    return (
      <div className="settings-page">
        <SectionHeader title="Health Profile" onBack={navigateBack} />
        <ProfileSettings />
      </div>
    );
  }

  if (currentSection === 'appearance') {
    return (
      <div className="settings-page">
        <SectionHeader title="Appearance" onBack={navigateBack} />
        <AppearanceSettings />
      </div>
    );
  }

  if (currentSection === 'language') {
    return (
      <div className="settings-page">
        <SectionHeader title="Language & Region" onBack={navigateBack} />
        <LanguageSettings />
      </div>
    );
  }

  if (currentSection === 'complexity') {
    return (
      <div className="settings-page">
        <SectionHeader title="Content Complexity" onBack={navigateBack} />
        <ComplexitySettings />
      </div>
    );
  }

  if (currentSection === 'privacy') {
    return (
      <div className="settings-page">
        <SectionHeader title="Privacy & Security" onBack={navigateBack} />
        <PrivacySettings />
      </div>
    );
  }

  if (currentSection === 'notifications') {
    return (
      <div className="settings-page">
        <SectionHeader title="Notifications" onBack={navigateBack} />
        <NotificationSettings />
      </div>
    );
  }

  if (currentSection === 'accessibility') {
    return (
      <div className="settings-page">
        <SectionHeader title="Accessibility" onBack={navigateBack} />
        <AccessibilitySettings />
      </div>
    );
  }

  if (currentSection === 'data') {
    return (
      <div className="settings-page">
        <SectionHeader title="Data Management" onBack={navigateBack} />
        <DataManagement />
      </div>
    );
  }

  // Main settings menu
  return (
    <div className="settings-page">
      <header className="settings-header">
        <button className="settings-back-button" onClick={onBack}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="settings-title">Settings</h1>
        <div className="settings-header-spacer" />
      </header>

      {isLoading ? (
        <div className="settings-loading">
          <div className="settings-spinner" />
          <span>Loading settings...</span>
        </div>
      ) : (
        <div className="settings-content">
          {/* Health Profile Section */}
          <section className="settings-section">
            <h2 className="settings-section-title">Health Profile</h2>
            <div className="settings-menu">
              <SettingsMenuItem
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="7" r="4" />
                    <path d="M5 21v-2a7 7 0 0114 0v2" />
                  </svg>
                }
                title="Profile & Medical History"
                description="Conditions, medications, allergies"
                onClick={() => navigateToSection('profile')}
                badge={conditionsCount + medicationsCount + allergiesCount > 0
                  ? `${conditionsCount + medicationsCount + allergiesCount} items`
                  : undefined}
                badgeType="info"
              />
            </div>
          </section>

          {/* Preferences Section */}
          <section className="settings-section">
            <h2 className="settings-section-title">Preferences</h2>
            <div className="settings-menu">
              <SettingsMenuItem
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 1v6m0 6v10M4.22 4.22l4.24 4.24m7.08 7.08l4.24 4.24M1 12h6m6 0h10M4.22 19.78l4.24-4.24m7.08-7.08l4.24-4.24" />
                  </svg>
                }
                title="Appearance"
                description="Theme, font size, display options"
                onClick={() => navigateToSection('appearance')}
              />
              <SettingsMenuItem
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                  </svg>
                }
                title="Language & Region"
                description="Language, date format, units"
                onClick={() => navigateToSection('language')}
                badge={settings.language.language === 'es' ? 'ES' : 'EN'}
              />
              <SettingsMenuItem
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                }
                title="Content Complexity"
                description="Medical detail level and terminology"
                onClick={() => navigateToSection('complexity')}
                badge={settings.complexity.defaultLevel}
              />
            </div>
          </section>

          {/* Privacy & Security Section */}
          <section className="settings-section">
            <h2 className="settings-section-title">Privacy & Security</h2>
            <div className="settings-menu">
              <SettingsMenuItem
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                }
                title="Privacy & Security"
                description="Data protection, auto-lock"
                onClick={() => navigateToSection('privacy')}
              />
              <SettingsMenuItem
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 01-3.46 0" />
                  </svg>
                }
                title="Notifications"
                description="Alerts, reminders, quiet hours"
                onClick={() => navigateToSection('notifications')}
                badge={settings.notifications.globalEnabled ? 'On' : 'Off'}
                badgeType={settings.notifications.globalEnabled ? 'success' : 'warning'}
              />
            </div>
          </section>

          {/* Accessibility Section */}
          <section className="settings-section">
            <h2 className="settings-section-title">Accessibility</h2>
            <div className="settings-menu">
              <SettingsMenuItem
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2m0 16v2M2 12h2m16 0h2" />
                  </svg>
                }
                title="Accessibility"
                description="Screen reader, motion, contrast"
                onClick={() => navigateToSection('accessibility')}
              />
            </div>
          </section>

          {/* Data Management Section */}
          <section className="settings-section">
            <h2 className="settings-section-title">Data Management</h2>
            <div className="settings-menu">
              <SettingsMenuItem
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                }
                title="Data Management"
                description="Export, import, backup, restore"
                onClick={() => navigateToSection('data')}
              />
            </div>
          </section>

          {/* Footer */}
          <footer className="settings-footer">
            {lastSaved && (
              <p className="settings-last-saved">
                Last saved: {lastSaved.toLocaleString()}
              </p>
            )}
            <p className="settings-version">
              Version {settings.version}
            </p>
          </footer>
        </div>
      )}
    </div>
  );
}

export default SettingsPage;
