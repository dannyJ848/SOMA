/**
 * Audio Components
 * 
 * React components for the Voice & Audio Narration System
 */

// Components
export { AudioPlayer, type AudioPlayerProps } from './AudioPlayer.js';
export { NarrationSettings, type NarrationSettingsProps } from './NarrationSettings.js';

// Hooks
export {
  useAudioPlayer,
  useAudioSettings,
  useBookmarks,
  useFocusMode,
  useAudioGeneration,
  type UseAudioPlayerOptions,
  type UseAudioPlayerReturn,
  type UseAudioSettingsReturn,
  type UseBookmarksReturn,
  type UseFocusModeReturn,
  type UseAudioGenerationReturn,
} from './hooks.js';

// Styles (import in your app)
// import './AudioPlayer.css';
// import './NarrationSettings.css';
