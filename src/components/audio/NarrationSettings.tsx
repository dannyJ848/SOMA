/**
 * Narration Settings Component
 * 
 * Settings panel for audio narration preferences
 */

import React from 'react';
import { useAudioSettings } from './hooks.js';
import './NarrationSettings.css';

export interface NarrationSettingsProps {
  className?: string;
}

export const NarrationSettings: React.FC<NarrationSettingsProps> = ({ className = '' }) => {
  const {
    settings,
    availableVoices,
    setVoice,
    setSpeed,
    setVolume,
    toggleAutoNarrate,
    toggleHighlightWords,
    resetToDefaults,
  } = useAudioSettings();

  // Group voices by gender
  const voicesByGender = availableVoices.reduce((acc, voice) => {
    const gender = voice.gender || 'neutral';
    if (!acc[gender]) acc[gender] = [];
    acc[gender].push(voice);
    return acc;
  }, {} as Record<string, typeof availableVoices>);

  const speedOptions = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

  return (
    <div className={`narration-settings ${className}`} role="region" aria-label="Narration Settings">
      <h3 className="narration-settings__title">Audio Settings</h3>

      {/* Voice Selection */}
      <div className="narration-settings__section">
        <label className="narration-settings__label" htmlFor="voice-select">
          Voice
        </label>
        <select
          id="voice-select"
          className="narration-settings__select"
          value={settings.voice.id}
          onChange={(e) => setVoice(e.target.value)}
        >
          {Object.entries(voicesByGender).map(([gender, voices]) => (
            <optgroup key={gender} label={`${gender.charAt(0).toUpperCase() + gender.slice(1)} Voices`}>
              {voices.map(voice => (
                <option key={voice.id} value={voice.id}>
                  {voice.name} {voice.accent && `(${voice.accent.toUpperCase()})`}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>

      {/* Speed Control */}
      <div className="narration-settings__section">
        <label className="narration-settings__label">
          Playback Speed: <span className="narration-settings__value">{settings.speed}x</span>
        </label>
        <div className="narration-settings__speed-options">
          {speedOptions.map(speed => (
            <button
              key={speed}
              className={`narration-settings__speed-btn ${settings.speed === speed ? 'active' : ''}`}
              onClick={() => setSpeed(speed)}
              aria-pressed={settings.speed === speed}
            >
              {speed}x
            </button>
          ))}
        </div>
      </div>

      {/* Volume Control */}
      <div className="narration-settings__section">
        <label className="narration-settings__label" htmlFor="volume-slider">
          Volume: <span className="narration-settings__value">{Math.round(settings.volume * 100)}%</span>
        </label>
        <input
          id="volume-slider"
          type="range"
          min={0}
          max={1}
          step={0.1}
          value={settings.volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="narration-settings__slider"
        />
      </div>

      {/* Accessibility Options */}
      <div className="narration-settings__section">
        <h4 className="narration-settings__subtitle">Accessibility</h4>
        
        <label className="narration-settings__checkbox">
          <input
            type="checkbox"
            checked={settings.autoNarrate}
            onChange={toggleAutoNarrate}
          />
          <span className="narration-settings__checkmark"></span>
          <span className="narration-settings__checkbox-label">
            Auto-narrate on focus
            <span className="narration-settings__hint">Read content aloud when focused</span>
          </span>
        </label>

        <label className="narration-settings__checkbox">
          <input
            type="checkbox"
            checked={settings.highlightWords}
            onChange={toggleHighlightWords}
          />
          <span className="narration-settings__checkmark"></span>
          <span className="narration-settings__checkbox-label">
            Highlight words while reading
            <span className="narration-settings__hint">Visually track narration progress</span>
          </span>
        </label>
      </div>

      {/* Reset Button */}
      <div className="narration-settings__footer">
        <button
          className="narration-settings__reset-btn"
          onClick={resetToDefaults}
        >
          Reset to Defaults
        </button>
      </div>
    </div>
  );
};

export default NarrationSettings;
