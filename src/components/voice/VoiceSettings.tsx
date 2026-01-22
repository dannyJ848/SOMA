/**
 * Voice Settings Panel
 *
 * Configuration UI for voice settings including voice selection,
 * auto-speak toggle, and device capabilities display.
 */

import React, { useCallback, useState } from 'react';
import { useVoiceConfig, useVoiceHealth, useVoiceTTS } from '../../contexts/VoiceContext';
import type { VoicePreset, VoiceLanguage } from '../../../core/voice/types';
import './VoiceSettings.css';

// ============================================
// Icon Components
// ============================================

interface IconProps {
  className?: string;
}

const CheckIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const PlayIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const GpuIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="15" x2="23" y2="15" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="15" x2="4" y2="15" />
  </svg>
);

const CpuIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
  </svg>
);

// ============================================
// Voice Presets with Descriptions
// ============================================

const VOICE_OPTIONS: Array<{ id: VoicePreset; name: string; description: string; gender: string }> = [
  { id: 'Chelsie', name: 'Chelsie', description: 'Warm and friendly', gender: 'Female' },
  { id: 'Ethan', name: 'Ethan', description: 'Professional and clear', gender: 'Male' },
  { id: 'Alloy', name: 'Alloy', description: 'Neutral and balanced', gender: 'Neutral' },
  { id: 'Echo', name: 'Echo', description: 'Deep and resonant', gender: 'Male' },
  { id: 'Fable', name: 'Fable', description: 'Narrative and engaging', gender: 'Female' },
  { id: 'Onyx', name: 'Onyx', description: 'Authoritative and measured', gender: 'Male' },
  { id: 'Nova', name: 'Nova', description: 'Energetic and upbeat', gender: 'Female' },
  { id: 'Shimmer', name: 'Shimmer', description: 'Soft and soothing', gender: 'Female' },
];

const LANGUAGE_OPTIONS: Array<{ id: VoiceLanguage; name: string }> = [
  { id: 'en', name: 'English' },
  { id: 'zh', name: 'Chinese (Mandarin)' },
  { id: 'ja', name: 'Japanese' },
  { id: 'ko', name: 'Korean' },
  { id: 'de', name: 'German' },
  { id: 'fr', name: 'French' },
  { id: 'es', name: 'Spanish' },
  { id: 'it', name: 'Italian' },
  { id: 'ru', name: 'Russian' },
  { id: 'pt', name: 'Portuguese' },
];

// ============================================
// Voice Settings Props
// ============================================

export interface VoiceSettingsProps {
  /** Custom class name */
  className?: string;
  /** Compact mode */
  compact?: boolean;
  /** Show device info */
  showDeviceInfo?: boolean;
}

// ============================================
// Voice Settings Component
// ============================================

export const VoiceSettings: React.FC<VoiceSettingsProps> = ({
  className = '',
  compact = false,
  showDeviceInfo = true,
}) => {
  const { config, updateConfig } = useVoiceConfig();
  const { healthStatus, capabilities } = useVoiceHealth();
  const { speak, isSpeaking } = useVoiceTTS();
  const [previewingVoice, setPreviewingVoice] = useState<string | null>(null);

  // Handle voice change
  const handleVoiceChange = useCallback((voice: VoicePreset) => {
    updateConfig({ selectedVoice: voice });
  }, [updateConfig]);

  // Handle language change
  const handleLanguageChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    updateConfig({ language: e.target.value as VoiceLanguage });
  }, [updateConfig]);

  // Handle auto-speak toggle
  const handleAutoSpeakToggle = useCallback(() => {
    updateConfig({ autoSpeak: !config.autoSpeak });
  }, [config.autoSpeak, updateConfig]);

  // Handle speaking rate change
  const handleSpeakingRateChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    updateConfig({ speakingRate: parseFloat(e.target.value) });
  }, [updateConfig]);

  // Preview voice
  const handlePreviewVoice = useCallback(async (voice: VoicePreset) => {
    if (isSpeaking || previewingVoice) {
      return;
    }
    setPreviewingVoice(voice);
    try {
      await speak('Hello! This is a preview of my voice.', { voice });
    } finally {
      setPreviewingVoice(null);
    }
  }, [isSpeaking, previewingVoice, speak]);

  // Get device icon
  const getDeviceIcon = () => {
    if (capabilities?.deviceType === 'cuda' || capabilities?.deviceType === 'mps') {
      return <GpuIcon className="voice-settings__device-icon" />;
    }
    return <CpuIcon className="voice-settings__device-icon" />;
  };

  // Get device label
  const getDeviceLabel = () => {
    if (!capabilities) return 'Unknown';
    switch (capabilities.deviceType) {
      case 'cuda':
        return `NVIDIA GPU (${capabilities.vramGb}GB VRAM)`;
      case 'mps':
        return 'Apple Silicon GPU';
      case 'cpu':
        return 'CPU';
      default:
        return 'Unknown';
    }
  };

  if (compact) {
    return (
      <div className={`voice-settings voice-settings--compact ${className}`}>
        <div className="voice-settings__row">
          <label className="voice-settings__label">Voice</label>
          <select
            className="voice-settings__select"
            value={config.selectedVoice}
            onChange={(e) => handleVoiceChange(e.target.value as VoicePreset)}
          >
            {VOICE_OPTIONS.map((voice) => (
              <option key={voice.id} value={voice.id}>
                {voice.name}
              </option>
            ))}
          </select>
        </div>
        <div className="voice-settings__row">
          <label className="voice-settings__label">Auto-speak</label>
          <button
            className={`voice-settings__toggle ${config.autoSpeak ? 'voice-settings__toggle--on' : ''}`}
            onClick={handleAutoSpeakToggle}
            role="switch"
            aria-checked={config.autoSpeak}
          >
            <span className="voice-settings__toggle-track">
              <span className="voice-settings__toggle-thumb" />
            </span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`voice-settings ${className}`}>
      <h3 className="voice-settings__title">Voice Settings</h3>

      {/* Device Info */}
      {showDeviceInfo && (
        <div className="voice-settings__section">
          <h4 className="voice-settings__section-title">Device</h4>
          <div className="voice-settings__device-info">
            {getDeviceIcon()}
            <span className="voice-settings__device-label">{getDeviceLabel()}</span>
            {capabilities && (
              <span className={`voice-settings__status-badge ${capabilities.sttAvailable && capabilities.ttsAvailable ? 'voice-settings__status-badge--ready' : 'voice-settings__status-badge--limited'}`}>
                {capabilities.sttAvailable && capabilities.ttsAvailable ? 'Ready' : 'Limited'}
              </span>
            )}
          </div>
          {healthStatus?.pythonVersion && (
            <div className="voice-settings__python-info">
              Python {healthStatus.pythonVersion}
            </div>
          )}
        </div>
      )}

      {/* Voice Selection */}
      <div className="voice-settings__section">
        <h4 className="voice-settings__section-title">Voice</h4>
        <div className="voice-settings__voice-grid">
          {VOICE_OPTIONS.map((voice) => (
            <button
              key={voice.id}
              className={`voice-settings__voice-option ${config.selectedVoice === voice.id ? 'voice-settings__voice-option--selected' : ''}`}
              onClick={() => handleVoiceChange(voice.id)}
              aria-pressed={config.selectedVoice === voice.id}
            >
              <span className="voice-settings__voice-name">{voice.name}</span>
              <span className="voice-settings__voice-description">{voice.description}</span>
              <span className="voice-settings__voice-gender">{voice.gender}</span>
              {config.selectedVoice === voice.id && (
                <span className="voice-settings__voice-check">
                  <CheckIcon className="voice-settings__check-icon" />
                </span>
              )}
              <button
                className="voice-settings__voice-preview"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePreviewVoice(voice.id);
                }}
                disabled={isSpeaking || previewingVoice !== null}
                aria-label={`Preview ${voice.name} voice`}
                title="Preview voice"
              >
                <PlayIcon className="voice-settings__play-icon" />
              </button>
            </button>
          ))}
        </div>
      </div>

      {/* Language */}
      <div className="voice-settings__section">
        <h4 className="voice-settings__section-title">Language</h4>
        <select
          className="voice-settings__select voice-settings__select--full"
          value={config.language}
          onChange={handleLanguageChange}
        >
          {LANGUAGE_OPTIONS.map((lang) => (
            <option key={lang.id} value={lang.id}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>

      {/* Speaking Rate */}
      <div className="voice-settings__section">
        <h4 className="voice-settings__section-title">Speaking Rate</h4>
        <div className="voice-settings__slider-container">
          <input
            type="range"
            className="voice-settings__slider"
            min="0.5"
            max="2.0"
            step="0.1"
            value={config.speakingRate}
            onChange={handleSpeakingRateChange}
            aria-label="Speaking rate"
          />
          <span className="voice-settings__slider-value">{config.speakingRate.toFixed(1)}x</span>
        </div>
        <div className="voice-settings__slider-labels">
          <span>Slower</span>
          <span>Normal</span>
          <span>Faster</span>
        </div>
      </div>

      {/* Auto-speak Toggle */}
      <div className="voice-settings__section">
        <div className="voice-settings__toggle-row">
          <div className="voice-settings__toggle-info">
            <h4 className="voice-settings__section-title">Auto-speak Responses</h4>
            <p className="voice-settings__toggle-description">
              Automatically read AI responses aloud
            </p>
          </div>
          <button
            className={`voice-settings__toggle ${config.autoSpeak ? 'voice-settings__toggle--on' : ''}`}
            onClick={handleAutoSpeakToggle}
            role="switch"
            aria-checked={config.autoSpeak}
          >
            <span className="voice-settings__toggle-track">
              <span className="voice-settings__toggle-thumb" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoiceSettings;
