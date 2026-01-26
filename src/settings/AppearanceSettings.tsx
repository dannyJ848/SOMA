/**
 * Appearance Settings Component
 *
 * Theme, font size, color scheme, and display options.
 */

import { useSettings } from './useSettings';
import type { AppearanceSettings as AppearanceSettingsType, Theme, FontSize, ColorScheme } from './types';

// ============================================
// Types
// ============================================

interface OptionButtonProps<T extends string> {
  value: T;
  currentValue: T;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  onClick: (value: T) => void;
}

// ============================================
// Option Button
// ============================================

function OptionButton<T extends string>({
  value,
  currentValue,
  label,
  description,
  icon,
  onClick,
}: OptionButtonProps<T>) {
  return (
    <button
      className={`option-button ${currentValue === value ? 'active' : ''}`}
      onClick={() => onClick(value)}
    >
      {icon && <span className="option-icon">{icon}</span>}
      <span className="option-label">{label}</span>
      {description && <span className="option-description">{description}</span>}
    </button>
  );
}

// ============================================
// Main Component
// ============================================

export function AppearanceSettings() {
  const { settings, updateAppearance } = useSettings();
  const appearance = settings.appearance;

  const handleThemeChange = (theme: Theme) => {
    updateAppearance({ theme });
  };

  const handleFontSizeChange = (fontSize: FontSize) => {
    updateAppearance({ fontSize });
  };

  const handleColorSchemeChange = (colorScheme: ColorScheme) => {
    updateAppearance({ colorScheme });
  };

  const handleToggle = (key: keyof AppearanceSettingsType) => {
    updateAppearance({ [key]: !appearance[key] });
  };

  return (
    <div className="appearance-settings settings-content">
      {/* Theme Section */}
      <section className="settings-section">
        <h3 className="settings-section-title">Theme</h3>
        <p className="settings-section-description">Choose how the app looks</p>
        <div className="settings-option-grid theme-options">
          <OptionButton
            value="light"
            currentValue={appearance.theme}
            label="Light"
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            }
            onClick={handleThemeChange}
          />
          <OptionButton
            value="dark"
            currentValue={appearance.theme}
            label="Dark"
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            }
            onClick={handleThemeChange}
          />
          <OptionButton
            value="system"
            currentValue={appearance.theme}
            label="System"
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
            }
            onClick={handleThemeChange}
          />
        </div>
      </section>

      {/* Font Size Section */}
      <section className="settings-section">
        <h3 className="settings-section-title">Text Size</h3>
        <p className="settings-section-description">Adjust the base font size</p>
        <div className="settings-option-grid font-size-options">
          <OptionButton
            value="small"
            currentValue={appearance.fontSize}
            label="Small"
            description="14px"
            onClick={handleFontSizeChange}
          />
          <OptionButton
            value="medium"
            currentValue={appearance.fontSize}
            label="Medium"
            description="16px"
            onClick={handleFontSizeChange}
          />
          <OptionButton
            value="large"
            currentValue={appearance.fontSize}
            label="Large"
            description="18px"
            onClick={handleFontSizeChange}
          />
          <OptionButton
            value="extra-large"
            currentValue={appearance.fontSize}
            label="Extra Large"
            description="20px"
            onClick={handleFontSizeChange}
          />
        </div>
        <div className="font-preview">
          <p style={{ fontSize: 'var(--base-font-size, 16px)' }}>
            Preview: This is how text will appear at the selected size.
          </p>
        </div>
      </section>

      {/* Color Scheme Section */}
      <section className="settings-section">
        <h3 className="settings-section-title">Color Scheme</h3>
        <p className="settings-section-description">Adjust colors for visibility</p>
        <div className="settings-option-grid color-scheme-options">
          <OptionButton
            value="default"
            currentValue={appearance.colorScheme}
            label="Default"
            description="Standard colors"
            onClick={handleColorSchemeChange}
          />
          <OptionButton
            value="high-contrast"
            currentValue={appearance.colorScheme}
            label="High Contrast"
            description="Enhanced visibility"
            onClick={handleColorSchemeChange}
          />
          <OptionButton
            value="colorblind-friendly"
            currentValue={appearance.colorScheme}
            label="Colorblind Friendly"
            description="Accessible palette"
            onClick={handleColorSchemeChange}
          />
        </div>
      </section>

      {/* Display Options */}
      <section className="settings-section">
        <h3 className="settings-section-title">Display Options</h3>
        <div className="settings-toggles">
          <label className="settings-toggle">
            <div className="settings-toggle-info">
              <span className="settings-toggle-label">Reduce Motion</span>
              <span className="settings-toggle-description">
                Minimize animations and transitions
              </span>
            </div>
            <input
              type="checkbox"
              checked={appearance.reduceMotion}
              onChange={() => handleToggle('reduceMotion')}
            />
            <span className="settings-toggle-switch" />
          </label>

          <label className="settings-toggle">
            <div className="settings-toggle-info">
              <span className="settings-toggle-label">Reduce Transparency</span>
              <span className="settings-toggle-description">
                Use solid backgrounds instead of blur effects
              </span>
            </div>
            <input
              type="checkbox"
              checked={appearance.reduceTransparency}
              onChange={() => handleToggle('reduceTransparency')}
            />
            <span className="settings-toggle-switch" />
          </label>

          <label className="settings-toggle">
            <div className="settings-toggle-info">
              <span className="settings-toggle-label">Compact Mode</span>
              <span className="settings-toggle-description">
                Reduce spacing to show more content
              </span>
            </div>
            <input
              type="checkbox"
              checked={appearance.compactMode}
              onChange={() => handleToggle('compactMode')}
            />
            <span className="settings-toggle-switch" />
          </label>
        </div>
      </section>
    </div>
  );
}

export default AppearanceSettings;
