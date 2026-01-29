/**
 * AI Chat Voice Input Component
 *
 * Voice input component for AI chat that recognizes anatomy navigation commands.
 * Combines text input with voice recognition, visual feedback, and command detection.
 *
 * @module ai/components/AIChatVoiceInput
 */

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useVoiceFallback } from '../../hooks/useVoiceFallback';
import { useSmartNavigation, type NavigationAction } from '../hooks/useSmartNavigation';

// ============================================================================
// Types
// ============================================================================

/**
 * Props for AIChatVoiceInput component
 */
export interface AIChatVoiceInputProps {
  /** Callback when message is sent */
  onSendMessage: (text: string) => void;
  /** Callback when navigation command is detected */
  onNavigateToRegion: (regionId: string, layer?: string) => void;
  /** Whether input is disabled */
  disabled?: boolean;
  /** Placeholder text */
  placeholder?: string;
  /** Maximum input length */
  maxLength?: number;
  /** Whether to auto-focus on mount */
  autoFocus?: boolean;
  /** Callback when navigation action is detected */
  onNavigationAction?: (action: NavigationAction) => void;
}

/**
 * Voice command detection result
 */
interface VoiceCommandResult {
  /** Whether a command was detected */
  isCommand: boolean;
  /** Type of command */
  commandType: 'navigate' | 'highlight' | 'layer' | 'zoom' | 'none';
  /** Target of command */
  target?: string;
  /** Processed text */
  processedText: string;
}

// ============================================================================
// Constants
// ============================================================================

/** Navigation command patterns for voice recognition */
const NAVIGATION_COMMANDS = [
  { pattern: /(?:navigate|go|show)\s+(?:to\s+)?(?:the\s+)?(.+)/i, type: 'navigate' as const },
  { pattern: /(?:highlight|focus\s+on)\s+(?:the\s+)?(.+)/i, type: 'highlight' as const },
  { pattern: /(?:switch\s+to|show)\s+(?:the\s+)?(.+?)\s+(?:layer|system)/i, type: 'layer' as const },
  { pattern: /(?:zoom\s+(?:in|out)\s+(?:on|to)|zoom\s+(?:on|to))\s+(?:the\s+)?(.+)/i, type: 'zoom' as const },
];

/** Anatomy region mappings for voice commands */
const REGION_ALIASES: Record<string, string> = {
  heart: 'cardiovascular.heart',
  brain: 'nervous.brain',
  liver: 'digestive.liver',
  'left kidney': 'urinary.left-kidney',
  'right kidney': 'urinary.right-kidney',
  kidney: 'urinary.kidney',
  'left lung': 'respiratory.left-lung',
  'right lung': 'respiratory.right-lung',
  lung: 'respiratory.lung',
  lungs: 'respiratory.lung',
  stomach: 'digestive.stomach',
  pancreas: 'digestive.pancreas',
  spleen: 'lymphatic.spleen',
  thyroid: 'endocrine.thyroid',
  'adrenal gland': 'endocrine.adrenal',
  gallbladder: 'digestive.gallbladder',
  bladder: 'urinary.bladder',
  
  // Systems
  'cardiovascular system': 'cardiovascular',
  'circulatory system': 'cardiovascular',
  'respiratory system': 'respiratory',
  'nervous system': 'nervous',
  'digestive system': 'digestive',
  'skeletal system': 'skeletal',
  'muscular system': 'muscular',
  'endocrine system': 'endocrine',
  'urinary system': 'urinary',
  'lymphatic system': 'lymphatic',
  'immune system': 'lymphatic',
  
  // Regions
  head: 'region.head',
  neck: 'region.neck',
  chest: 'region.chest',
  thorax: 'region.thorax',
  abdomen: 'region.abdomen',
  pelvis: 'region.pelvis',
  back: 'region.back',
  spine: 'skeletal.spine',
};

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Detect navigation command in text
 */
function detectNavigationCommand(text: string): VoiceCommandResult {
  const lowerText = text.toLowerCase().trim();
  
  for (const { pattern, type } of NAVIGATION_COMMANDS) {
    const match = pattern.exec(lowerText);
    if (match && match[1]) {
      const target = match[1].trim();
      const regionId = REGION_ALIASES[target] || target;
      
      return {
        isCommand: true,
        commandType: type,
        target: regionId,
        processedText: text,
      };
    }
  }
  
  // Check for direct region mentions without command prefix
  for (const [alias, regionId] of Object.entries(REGION_ALIASES)) {
    if (lowerText.includes(alias)) {
      return {
        isCommand: true,
        commandType: 'navigate',
        target: regionId,
        processedText: text,
      };
    }
  }
  
  return {
    isCommand: false,
    commandType: 'none',
    processedText: text,
  };
}

/**
 * Normalize voice transcript
 */
function normalizeTranscript(text: string): string {
  return text
    .replace(/\s+/g, ' ')
    .replace(/[.!?]+$/, '')
    .trim();
}

// ============================================================================
// Component
// ============================================================================

/**
 * Voice input component for AI chat with anatomy navigation command recognition
 *
 * Features:
 * - Voice recognition with visual feedback
 * - Automatic navigation command detection
 * - Wave animation when listening
 * - Toggle between text and voice input
 * - Error handling and fallbacks
 *
 * @example
 * ```tsx
 * <AIChatVoiceInput
 *   onSendMessage={(text) => console.log('Message:', text)}
 *   onNavigateToRegion={(region) => console.log('Navigate:', region)}
 *   placeholder="Ask about anatomy or say 'show heart'..."
 * />
 * ```
 */
export function AIChatVoiceInput({
  onSendMessage,
  onNavigateToRegion,
  disabled = false,
  placeholder = "Type a message or use voice...",
  maxLength = 1000,
  autoFocus = false,
  onNavigationAction,
}: AIChatVoiceInputProps): React.ReactElement {
  // State
  const [inputValue, setInputValue] = useState('');
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const [detectedCommand, setDetectedCommand] = useState<VoiceCommandResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  // Refs
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const silenceTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Voice fallback hook
  const voice = useVoiceFallback('en-US', false);
  
  // Smart navigation hook
  const smartNav = useSmartNavigation();

  // Auto-focus on mount
  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  // Handle voice transcription changes
  useEffect(() => {
    if (voice.transcription && isVoiceMode) {
      setInputValue(voice.transcription);
      
      // Detect commands in real-time
      const command = detectNavigationCommand(voice.transcription);
      setDetectedCommand(command);
      
      // Auto-send after silence
      if (silenceTimerRef.current) {
        clearTimeout(silenceTimerRef.current);
      }
      
      silenceTimerRef.current = setTimeout(() => {
        if (voice.transcription && !voice.isRecording) {
          handleSend();
        }
      }, 1500);
    }
    
    return () => {
      if (silenceTimerRef.current) {
        clearTimeout(silenceTimerRef.current);
      }
    };
  }, [voice.transcription, voice.isRecording, isVoiceMode]);

  // Handle voice errors
  useEffect(() => {
    if (voice.error) {
      setError(voice.error);
      const timer = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [voice.error]);

  // ============================================================================
  // Event Handlers
  // ============================================================================

  /**
   * Toggle voice mode on/off
   */
  const toggleVoiceMode = useCallback(() => {
    if (isVoiceMode) {
      // Stop recording
      voice.stopRecording();
      setIsVoiceMode(false);
      setInputValue('');
    } else {
      // Start recording
      if (!voice.sttAvailable) {
        setError('Voice recognition is not available');
        return;
      }
      setIsVoiceMode(true);
      setInputValue('');
      setDetectedCommand(null);
      voice.startRecording();
    }
  }, [isVoiceMode, voice]);

  /**
   * Handle text input change
   */
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInputValue(value);
    
    // Detect commands in text
    const command = detectNavigationCommand(value);
    setDetectedCommand(command);
  }, []);

  /**
   * Handle sending message
   */
  const handleSend = useCallback(() => {
    const text = inputValue.trim();
    if (!text || disabled) return;

    // Check if this is a navigation command
    const command = detectNavigationCommand(text);
    
    if (command.isCommand && command.target) {
      // It's a navigation command
      onNavigateToRegion(command.target);
      
      if (onNavigationAction) {
        onNavigationAction({
          type: command.commandType === 'navigate' ? 'navigate' : 
                command.commandType === 'highlight' ? 'highlight' : 'layer',
          target: command.target,
          label: `Navigate to ${command.target}`,
        });
      }
      
      // Also send as message with context
      onSendMessage(`[Navigation: ${command.target}] ${text}`);
    } else {
      // Regular message
      onSendMessage(text);
    }

    // Clear input
    setInputValue('');
    setDetectedCommand(null);
    
    // Stop voice if active
    if (isVoiceMode) {
      voice.stopRecording();
      setIsVoiceMode(false);
    }
  }, [inputValue, disabled, onSendMessage, onNavigateToRegion, onNavigationAction, isVoiceMode, voice]);

  /**
   * Handle key press
   */
  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }, [handleSend]);

  /**
   * Cancel voice input
   */
  const handleCancelVoice = useCallback(() => {
    voice.stopRecording();
    setIsVoiceMode(false);
    setInputValue('');
    setDetectedCommand(null);
  }, [voice]);

  // ============================================================================
  // Render Helpers
  // ============================================================================

  const getCommandBadgeText = () => {
    if (!detectedCommand?.isCommand) return null;
    
    switch (detectedCommand.commandType) {
      case 'navigate':
        return `Navigate: ${detectedCommand.target}`;
      case 'highlight':
        return `Highlight: ${detectedCommand.target}`;
      case 'layer':
        return `Switch layer: ${detectedCommand.target}`;
      case 'zoom':
        return `Zoom to: ${detectedCommand.target}`;
      default:
        return null;
    }
  };

  // ============================================================================
  // Render
  // ============================================================================

  return (
    <div className="ai-chat-voice-input">
      {/* Error Banner */}
      {error && (
        <div className="error-banner">
          <span>{error}</span>
          <button onClick={() => setError(null)} className="error-close">
            x
          </button>
        </div>
      )}

      {/* Voice Mode UI */}
      {isVoiceMode ? (
        <div className={`voice-mode ${voice.isRecording ? 'recording' : ''}`}>
          {/* Voice Wave Animation */}
          <div className="voice-wave-container">
            <div className="voice-wave">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="wave-bar"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: `${0.5 + i * 0.1}s`,
                  }}
                />
              ))}
            </div>
            <span className="voice-status">
              {voice.isRecording ? 'Listening...' : 'Processing...'}
            </span>
          </div>

          {/* Transcription Preview */}
          <div className="voice-transcription">
            {inputValue || 'Speak now...'}
          </div>

          {/* Command Detection Badge */}
          {detectedCommand?.isCommand && (
            <div className="command-badge">
              <span className="command-icon"> navigation</span>
              {getCommandBadgeText()}
            </div>
          )}

          {/* Voice Controls */}
          <div className="voice-controls">
            <button
              onClick={handleCancelVoice}
              className="voice-btn cancel"
              title="Cancel"
            >
              Cancel
            </button>
            <button
              onClick={handleSend}
              disabled={!inputValue.trim()}
              className="voice-btn send"
              title="Send"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        /* Text Input Mode */
        <div className="text-input-mode">
          <div className="input-row">
            <textarea
              ref={inputRef}
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
              placeholder={placeholder}
              disabled={disabled}
              maxLength={maxLength}
              rows={2}
              className="chat-textarea"
            />
            
            {/* Voice Toggle Button */}
            <button
              onClick={toggleVoiceMode}
              disabled={disabled || !voice.sttAvailable}
              className={`voice-toggle ${!voice.sttAvailable ? 'unavailable' : ''}`}
              title={voice.sttAvailable ? 'Use voice input' : 'Voice not available'}
            >
              microphone
            </button>
            
            {/* Send Button */}
            <button
              onClick={handleSend}
              disabled={disabled || !inputValue.trim()}
              className="send-button"
              title="Send message"
            >
              send
            </button>
          </div>

          {/* Command Detection Hint */}
          {detectedCommand?.isCommand && (
            <div className="command-hint">
              <span className="hint-icon"> navigation</span>
              <span>Press Enter to {getCommandBadgeText()}</span>
            </div>
          )}

          {/* Input Footer */}
          <div className="input-footer">
            <span className="char-count">
              {inputValue.length}/{maxLength}
            </span>
            <span className="hint-text">
              Try saying "show heart" or "navigate to brain"
            </span>
          </div>
        </div>
      )}

      <style>{`
        .ai-chat-voice-input {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 12px;
          background: #252525;
          border-radius: 8px;
        }

        /* Error Banner */
        .error-banner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 12px;
          background: rgba(255, 107, 107, 0.1);
          border: 1px solid rgba(255, 107, 107, 0.3);
          border-radius: 6px;
          color: #ff6b6b;
          font-size: 13px;
        }

        .error-close {
          background: none;
          border: none;
          color: #ff6b6b;
          cursor: pointer;
          font-size: 16px;
          padding: 0 4px;
        }

        /* Voice Mode */
        .voice-mode {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          padding: 24px;
          background: #1e1e1e;
          border-radius: 8px;
          min-height: 200px;
        }

        .voice-mode.recording {
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.05) 0%, rgba(124, 58, 237, 0.05) 100%);
        }

        /* Voice Wave */
        .voice-wave-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .voice-wave {
          display: flex;
          align-items: center;
          gap: 4px;
          height: 60px;
        }

        .wave-bar {
          width: 4px;
          background: linear-gradient(180deg, #4a9eff 0%, #7c3aed 100%);
          border-radius: 2px;
          animation: wave 1s ease-in-out infinite;
        }

        .wave-bar:nth-child(1) { height: 20px; }
        .wave-bar:nth-child(2) { height: 40px; }
        .wave-bar:nth-child(3) { height: 60px; }
        .wave-bar:nth-child(4) { height: 40px; }
        .wave-bar:nth-child(5) { height: 20px; }

        @keyframes wave {
          0%, 100% { transform: scaleY(0.5); opacity: 0.5; }
          50% { transform: scaleY(1); opacity: 1; }
        }

        .voice-status {
          font-size: 14px;
          color: #888;
        }

        /* Voice Transcription */
        .voice-transcription {
          font-size: 18px;
          color: #e0e0e0;
          text-align: center;
          min-height: 24px;
          max-width: 100%;
          word-wrap: break-word;
        }

        /* Command Badge */
        .command-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(74, 158, 255, 0.15);
          border: 1px solid rgba(74, 158, 255, 0.3);
          border-radius: 20px;
          font-size: 13px;
          color: #4a9eff;
        }

        .command-icon {
          font-size: 14px;
        }

        /* Voice Controls */
        .voice-controls {
          display: flex;
          gap: 12px;
        }

        .voice-btn {
          padding: 10px 24px;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .voice-btn.cancel {
          background: #333;
          color: #ccc;
        }

        .voice-btn.cancel:hover {
          background: #444;
        }

        .voice-btn.send {
          background: linear-gradient(135deg, #4a9eff 0%, #7c3aed 100%);
          color: white;
        }

        .voice-btn.send:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* Text Input Mode */
        .text-input-mode {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .input-row {
          display: flex;
          gap: 8px;
          align-items: stretch;
        }

        .chat-textarea {
          flex: 1;
          padding: 10px 12px;
          background: #1e1e1e;
          border: 1px solid #333;
          border-radius: 8px;
          color: #e0e0e0;
          font-size: 14px;
          font-family: inherit;
          resize: none;
          min-height: 44px;
        }

        .chat-textarea:focus {
          outline: none;
          border-color: #4a9eff;
        }

        .chat-textarea:disabled {
          opacity: 0.5;
        }

        .voice-toggle,
        .send-button {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: 8px;
          font-size: 18px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .voice-toggle {
          background: #333;
          color: #ccc;
        }

        .voice-toggle:hover:not(:disabled) {
          background: #444;
          color: #fff;
        }

        .voice-toggle:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .voice-toggle.unavailable {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .send-button {
          background: linear-gradient(135deg, #4a9eff 0%, #7c3aed 100%);
          color: white;
        }

        .send-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* Command Hint */
        .command-hint {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          background: rgba(74, 158, 255, 0.1);
          border-radius: 6px;
          font-size: 12px;
          color: #4a9eff;
        }

        .hint-icon {
          font-size: 14px;
        }

        /* Input Footer */
        .input-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 11px;
          color: #666;
        }

        .char-count {
          font-variant-numeric: tabular-nums;
        }

        .hint-text {
          font-style: italic;
        }
      `}</style>
    </div>
  );
}

export default AIChatVoiceInput;
