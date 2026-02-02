/**
 * Voice Feedback Component
 *
 * Visual and audio feedback component for voice commands.
 * Shows listening state, recognized commands, and execution status.
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';

// ============================================================================
// Types
// ============================================================================

export interface ParsedVoiceCommand {
  type: string;
  transcript: string;
  entities?: Record<string, unknown>;
  confidence: number;
  command: string;
}

export type VoiceFeedbackState =
  | 'idle'
  | 'listening'
  | 'processing'
  | 'recognized'
  | 'executing'
  | 'success'
  | 'error'
  | 'not-supported';

export interface VoiceFeedbackProps {
  state: VoiceFeedbackState;
  transcript?: string;
  interimTranscript?: string;
  command?: ParsedVoiceCommand | null;
  error?: { message: string; type: string; recoverable: boolean } | null;
  confidence?: number;
  onRetry?: () => void;
  onConfirm?: () => void;
  onDismiss?: () => void;
  onHelp?: () => void;
  size?: 'small' | 'medium' | 'large';
  position?: 'top' | 'bottom' | 'center' | 'inline';
  showTranscript?: boolean;
  showConfidence?: boolean;
  autoHideDelay?: number;
  className?: string;
}

// ============================================================================
// Audio Feedback Hook
// ============================================================================

export function useVoiceAudioFeedback() {
  const [isEnabled, setIsEnabled] = useState(true);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const getCtx = useCallback(() => {
    if (!audioCtxRef.current) {
      const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AC();
    }
    return audioCtxRef.current;
  }, []);

  const playTone = useCallback((freq: number, dur: number, type: OscillatorType = 'sine') => {
    if (!isEnabled) return;
    try {
      const ctx = getCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = freq;
      osc.type = type;
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + dur);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + dur);
    } catch { /* ignore */ }
  }, [isEnabled, getCtx]);

  const playStartSound = useCallback(() => {
    playTone(880, 0.15);
    setTimeout(() => playTone(1100, 0.2), 100);
  }, [playTone]);

  const playSuccessSound = useCallback(() => {
    playTone(660, 0.1);
    setTimeout(() => playTone(880, 0.15), 100);
    setTimeout(() => playTone(1100, 0.2), 200);
  }, [playTone]);

  const playErrorSound = useCallback(() => {
    playTone(300, 0.2, 'sawtooth');
    setTimeout(() => playTone(250, 0.3, 'sawtooth'), 150);
  }, [playTone]);

  const playClickSound = useCallback(() => playTone(1000, 0.05), [playTone]);

  return { playStartSound, playSuccessSound, playErrorSound, playClickSound, setEnabled: setIsEnabled, isEnabled };
}

// ============================================================================
// Sub-components
// ============================================================================

export function VoiceWave({ isActive, bars = 5 }: { isActive: boolean; bars?: number }): React.ReactElement {
  return (
    <div className="voice-wave" aria-hidden="true">
      {Array.from({ length: bars }).map((_, i) => (
        <div key={i} className={`voice-wave__bar ${isActive ? 'voice-wave__bar--active' : ''}`}
          style={{ animationDelay: `${i * 0.1}s` }} />
      ))}
    </div>
  );
}

export function ListeningIndicator({ size = 'medium', intensity = 0.5 }:
  { size?: 'small' | 'medium' | 'large'; intensity?: number }): React.ReactElement {
  const scale = 0.3 + intensity * 0.7;
  return (
    <div className={`listening-indicator listening-indicator--${size}`} aria-label="Listening">
      <div className="listening-indicator__waves">
        {Array.from({ length: 5 }).map((_, i) => {
          const h = 20 + Math.sin(Date.now() / 200 + i) * 10 * scale;
          return <div key={i} className="listening-indicator__bar"
            style={{ height: `${h}%`, animationDelay: `${i * 0.1}s`, transform: `scaleY(${isFinite(scale) ? scale : 1})` }} />;
        })}
      </div>
      <span className="listening-indicator__text">Listening...</span>
    </div>
  );
}

export function CommandConfirmation({ command, onConfirm, onCancel, onEdit }:
  { command: ParsedVoiceCommand; onConfirm: () => void; onCancel: () => void; onEdit?: (text: string) => void }): React.ReactElement {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(command.transcript);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { if (editing) inputRef.current?.focus(); }, [editing]);

  const submitEdit = () => { if (text.trim() && onEdit) onEdit(text.trim()); setEditing(false); };

  return (
    <div className="command-confirmation" role="dialog" aria-label="Confirm command">
      <div className="command-confirmation__header">
        <svg className="command-confirmation__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" y1="19" x2="12" y2="23" />
          <line x1="8" y1="23" x2="16" y2="23" />
        </svg>
        <span className="command-confirmation__title">Did you mean...</span>
      </div>
      <div className="command-confirmation__content">
        {editing ? (
          <input ref={inputRef} type="text" value={text} onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') submitEdit(); if (e.key === 'Escape') setEditing(false); }}
            onBlur={submitEdit} className="command-confirmation__input" aria-label="Edit command" />
        ) : (
          <div className="command-confirmation__command">
            <span className="command-confirmation__text">"{command.transcript}"</span>
            {onEdit && (
              <button onClick={() => setEditing(true)} className="command-confirmation__edit-btn" aria-label="Edit">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
              </button>
            )}
          </div>
        )}
        <div className="command-confirmation__details">
          <span className="command-confirmation__type">{command.type}</span>
          {command.confidence > 0 && (
            <span className="command-confirmation__confidence">{Math.round(command.confidence * 100)}% confidence</span>
          )}
        </div>
      </div>
      <div className="command-confirmation__actions">
        <button onClick={onCancel} className="command-confirmation__btn command-confirmation__btn--secondary">Cancel</button>
        <button onClick={onConfirm} className="command-confirmation__btn command-confirmation__btn--primary">Confirm</button>
      </div>
    </div>
  );
}

export function CommandProgress({ command, progress, status }:
  { command: ParsedVoiceCommand; progress: number; status: string }): React.ReactElement {
  const p = Math.min(100, Math.max(0, progress));
  return (
    <div className="command-progress" role="status" aria-live="polite">
      <div className="command-progress__header">
        <div className="command-progress__spinner" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
            <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round">
              <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite" />
            </path>
          </svg>
        </div>
        <span className="command-progress__title">{status}</span>
      </div>
      <div className="command-progress__command">"{command.transcript}"</div>
      <div className="command-progress__bar" role="progressbar" aria-valuenow={p} aria-valuemin={0} aria-valuemax={100}>
        <div className="command-progress__fill" style={{ width: `${p}%` }} />
      </div>
      <span className="command-progress__percent">{Math.round(p)}%</span>
    </div>
  );
}

export function CommandSuccessToast({ command, onDismiss, autoHideDelay = 3000 }:
  { command: ParsedVoiceCommand; onDismiss: () => void; autoHideDelay?: number }): React.ReactElement {
  useEffect(() => {
    if (autoHideDelay > 0) { const t = setTimeout(onDismiss, autoHideDelay); return () => clearTimeout(t); }
  }, [autoHideDelay, onDismiss]);

  return (
    <div className="command-success-toast" role="status" aria-live="polite">
      <div className="command-success-toast__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" /><polyline points="9 12 12 15 16 10" />
        </svg>
      </div>
      <div className="command-success-toast__content">
        <span className="command-success-toast__title">Command executed</span>
        <span className="command-success-toast__command">"{command.transcript}"</span>
      </div>
      <button onClick={onDismiss} className="command-success-toast__close" aria-label="Dismiss">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
}

export function VoiceErrorDisplay({ error, onRetry, onDismiss, onHelp }:
  { error: { message: string; type: string; recoverable: boolean }; onRetry?: () => void; onDismiss?: () => void; onHelp?: () => void }): React.ReactElement {
  return (
    <div className="voice-error-display" role="alert">
      <div className="voice-error-display__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <div className="voice-error-display__content">
        <span className="voice-error-display__title">Voice command failed</span>
        <span className="voice-error-display__message">{error.message}</span>
        {error.type && <span className="voice-error-display__type">Error: {error.type}</span>}
      </div>
      <div className="voice-error-display__actions">
        {error.recoverable && onRetry && (
          <button onClick={onRetry} className="voice-error-display__btn voice-error-display__btn--primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
              <polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
            </svg>
            Retry
          </button>
        )}
        {onHelp && <button onClick={onHelp} className="voice-error-display__btn voice-error-display__btn--secondary">Help</button>}
        {onDismiss && <button onClick={onDismiss} className="voice-error-display__btn voice-error-display__btn--ghost">Dismiss</button>}
      </div>
    </div>
  );
}

function NotSupportedDisplay({ onHelp }: { onHelp?: () => void }): React.ReactElement {
  return (
    <div className="voice-not-supported" role="alert">
      <div className="voice-not-supported__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      </div>
      <div className="voice-not-supported__content">
        <span className="voice-not-supported__title">Voice not supported</span>
        <span className="voice-not-supported__message">Your browser or device does not support voice commands.</span>
      </div>
      {onHelp && <button onClick={onHelp} className="voice-not-supported__btn">Learn more</button>}
    </div>
  );
}

// ============================================================================
// Main Component
// ============================================================================

export function VoiceFeedback({
  state, transcript, interimTranscript, command, error, confidence, onRetry, onConfirm, onDismiss, onHelp,
  size = 'medium', position = 'bottom', showTranscript = true, showConfidence = false, autoHideDelay = 3000, className = ''
}: VoiceFeedbackProps): React.ReactElement {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (state === 'executing') {
      setProgress(0);
      const iv = setInterval(() => setProgress(p => p >= 90 ? p : p + Math.random() * 15), 200);
      return () => clearInterval(iv);
    } else if (state === 'success') setProgress(100);
  }, [state]);

  useEffect(() => {
    if (state === 'success' && autoHideDelay > 0 && onDismiss) {
      const t = setTimeout(onDismiss, autoHideDelay);
      return () => clearTimeout(t);
    }
  }, [state, autoHideDelay, onDismiss]);

  const renderContent = () => {
    switch (state) {
      case 'idle': return null;
      case 'listening':
        return (
          <div className={`voice-feedback__state voice-feedback__state--listening voice-feedback__state--${size}`}>
            <ListeningIndicator size={size} intensity={confidence || 0.5} />
            {showTranscript && interimTranscript && <span className="voice-feedback__interim" aria-live="polite">{interimTranscript}</span>}
          </div>
        );
      case 'processing':
        return (
          <div className={`voice-feedback__state voice-feedback__state--processing voice-feedback__state--${size}`}>
            <div className="voice-feedback__spinner" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round">
                  <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite" />
                </path>
              </svg>
            </div>
            <span className="voice-feedback__text">Processing...</span>
            {showTranscript && transcript && <span className="voice-feedback__transcript">"{transcript}"</span>}
          </div>
        );
      case 'recognized':
        return command ? <CommandConfirmation command={command} onConfirm={onConfirm || (() => { console.warn('VoiceFeedback: onConfirm handler not provided for recognized command'); })} onCancel={onDismiss || (() => { console.warn('VoiceFeedback: onCancel/onDismiss handler not provided'); })} onEdit={onRetry} /> : null;
      case 'executing':
        return command ? <CommandProgress command={command} progress={progress} status="Executing command..." /> : null;
      case 'success':
        return command ? <CommandSuccessToast command={command} onDismiss={onDismiss || (() => { console.warn('VoiceFeedback: onDismiss handler not provided for success toast'); })} autoHideDelay={autoHideDelay} /> : null;
      case 'error':
        return error ? <VoiceErrorDisplay error={error} onRetry={onRetry} onDismiss={onDismiss} onHelp={onHelp} /> : null;
      case 'not-supported':
        return <NotSupportedDisplay onHelp={onHelp} />;
      default: return null;
    }
  };

  if (state === 'idle') return <></>;

  return (
    <div className={`voice-feedback voice-feedback--${state} voice-feedback--${size} voice-feedback--${position} ${className}`} aria-live="polite" aria-atomic="true">
      {renderContent()}
      {showConfidence && confidence !== undefined && state !== 'error' && state !== 'success' && (
        <div className="voice-feedback__confidence">Confidence: {Math.round(confidence * 100)}%</div>
      )}
    </div>
  );
}

// ============================================================================
// Styles
// ============================================================================

const styles = `
.voice-feedback { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; padding: 1rem; border-radius: 0.75rem; background: var(--voice-bg, rgba(255, 255, 255, 0.95)); backdrop-filter: blur(8px); box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15); animation: voice-fade-in 0.2s ease; z-index: 1000; }
.voice-feedback--top { position: fixed; top: 1rem; left: 50%; transform: translateX(-50%); }
.voice-feedback--bottom { position: fixed; bottom: 1rem; left: 50%; transform: translateX(-50%); }
.voice-feedback--center { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); }
.voice-feedback--inline { position: relative; }
.voice-feedback--small { padding: 0.5rem 0.75rem; font-size: 0.875rem; }
.voice-feedback--large { padding: 1.5rem 2rem; font-size: 1.125rem; }
.voice-feedback--listening { background: var(--voice-listening-bg, linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)); color: white; }
.voice-feedback--processing { background: var(--voice-processing-bg, #f59e0b); color: white; }
.voice-feedback--error { background: var(--voice-error-bg, #fef2f2); border: 1px solid #fecaca; color: #991b1b; }
.voice-feedback--success { background: var(--voice-success-bg, #f0fdf4); border: 1px solid #bbf7d0; color: #166534; }
.voice-feedback__state { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; }
.voice-feedback__spinner { width: 24px; height: 24px; animation: voice-spin 1s linear infinite; }
.voice-feedback__spinner svg { width: 100%; height: 100%; }
.voice-feedback__text { font-weight: 500; }
.voice-feedback__transcript, .voice-feedback__interim { font-size: 0.875rem; opacity: 0.9; font-style: italic; }
.voice-feedback__confidence { font-size: 0.75rem; opacity: 0.7; }

.voice-wave { display: flex; align-items: flex-end; justify-content: center; gap: 3px; height: 24px; }
.voice-wave__bar { width: 4px; background-color: currentColor; border-radius: 2px; height: 20%; opacity: 0.5; transition: height 0.1s ease; }
.voice-wave__bar--active { animation: voice-wave-pulse 0.5s ease-in-out infinite alternate; }
.voice-wave__bar:nth-child(1) { animation-delay: 0s; }
.voice-wave__bar:nth-child(2) { animation-delay: 0.1s; }
.voice-wave__bar:nth-child(3) { animation-delay: 0.2s; }
.voice-wave__bar:nth-child(4) { animation-delay: 0.3s; }
.voice-wave__bar:nth-child(5) { animation-delay: 0.4s; }

.listening-indicator { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; }
.listening-indicator--small .listening-indicator__waves { height: 20px; gap: 2px; }
.listening-indicator--small .listening-indicator__bar { width: 3px; }
.listening-indicator--large .listening-indicator__waves { height: 40px; gap: 4px; }
.listening-indicator--large .listening-indicator__bar { width: 5px; }
.listening-indicator__waves { display: flex; align-items: flex-end; justify-content: center; gap: 3px; height: 30px; }
.listening-indicator__bar { width: 4px; background-color: currentColor; border-radius: 2px; animation: voice-listening-wave 0.6s ease-in-out infinite alternate; }
.listening-indicator__bar:nth-child(1) { animation-delay: 0s; height: 30%; }
.listening-indicator__bar:nth-child(2) { animation-delay: 0.1s; height: 60%; }
.listening-indicator__bar:nth-child(3) { animation-delay: 0.2s; height: 100%; }
.listening-indicator__bar:nth-child(4) { animation-delay: 0.3s; height: 60%; }
.listening-indicator__bar:nth-child(5) { animation-delay: 0.4s; height: 30%; }
.listening-indicator__text { font-size: 0.875rem; font-weight: 500; opacity: 0.9; }

.command-confirmation { display: flex; flex-direction: column; gap: 0.75rem; min-width: 280px; max-width: 400px; }
.command-confirmation__header { display: flex; align-items: center; gap: 0.5rem; color: var(--primary-color, #4f46e5); }
.command-confirmation__icon { width: 20px; height: 20px; }
.command-confirmation__title { font-weight: 600; font-size: 0.875rem; }
.command-confirmation__content { display: flex; flex-direction: column; gap: 0.5rem; }
.command-confirmation__command { display: flex; align-items: center; gap: 0.5rem; padding: 0.75rem; background: rgba(0, 0, 0, 0.05); border-radius: 0.5rem; }
.command-confirmation__text { flex: 1; font-style: italic; font-size: 0.9375rem; }
.command-confirmation__edit-btn { display: flex; align-items: center; justify-content: center; padding: 0.25rem; background: transparent; border: none; border-radius: 0.25rem; cursor: pointer; opacity: 0.6; transition: opacity 0.15s; }
.command-confirmation__edit-btn:hover { opacity: 1; background: rgba(0, 0, 0, 0.1); }
.command-confirmation__input { flex: 1; padding: 0.5rem; border: 1px solid var(--primary-color, #4f46e5); border-radius: 0.375rem; font-size: 0.9375rem; background: white; }
.command-confirmation__input:focus { outline: none; box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.3); }
.command-confirmation__details { display: flex; justify-content: space-between; font-size: 0.75rem; color: rgba(0, 0, 0, 0.6); }
.command-confirmation__type { text-transform: uppercase; font-weight: 600; letter-spacing: 0.025em; }
.command-confirmation__actions { display: flex; gap: 0.5rem; justify-content: flex-end; margin-top: 0.25rem; }
.command-confirmation__btn { padding: 0.5rem 1rem; border-radius: 0.375rem; font-size: 0.875rem; font-weight: 500; cursor: pointer; transition: all 0.15s; border: none; }
.command-confirmation__btn--primary { background: var(--primary-color, #4f46e5); color: white; }
.command-confirmation__btn--primary:hover { background: var(--primary-dark, #4338ca); }
.command-confirmation__btn--secondary { background: rgba(0, 0, 0, 0.05); color: inherit; }
.command-confirmation__btn--secondary:hover { background: rgba(0, 0, 0, 0.1); }

.command-progress { display: flex; flex-direction: column; gap: 0.75rem; min-width: 260px; padding: 0.5rem; }
.command-progress__header { display: flex; align-items: center; gap: 0.5rem; }
.command-progress__spinner { width: 20px; height: 20px; }
.command-progress__spinner svg { width: 100%; height: 100%; }
.command-progress__title { font-weight: 600; }
.command-progress__command { font-size: 0.875rem; opacity: 0.8; font-style: italic; }
.command-progress__bar { height: 4px; background: rgba(0, 0, 0, 0.1); border-radius: 2px; overflow: hidden; }
.command-progress__fill { height: 100%; background: var(--primary-color, #4f46e5); border-radius: 2px; transition: width 0.2s ease; }
.command-progress__percent { font-size: 0.75rem; opacity: 0.7; text-align: right; }

.command-success-toast { display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem 1rem; min-width: 260px; animation: voice-slide-up 0.3s ease; }
.command-success-toast__icon { width: 24px; height: 24px; color: #22c55e; flex-shrink: 0; }
.command-success-toast__icon svg { width: 100%; height: 100%; }
.command-success-toast__content { display: flex; flex-direction: column; flex: 1; gap: 0.125rem; }
.command-success-toast__title { font-weight: 600; font-size: 0.875rem; }
.command-success-toast__command { font-size: 0.8125rem; opacity: 0.8; font-style: italic; }
.command-success-toast__close { display: flex; align-items: center; justify-content: center; padding: 0.25rem; background: transparent; border: none; border-radius: 0.25rem; cursor: pointer; opacity: 0.5; transition: opacity 0.15s; }
.command-success-toast__close:hover { opacity: 1; }
.command-success-toast__close svg { width: 16px; height: 16px; }

.voice-error-display { display: flex; flex-direction: column; gap: 0.75rem; padding: 0.5rem; min-width: 300px; max-width: 400px; }
.voice-error-display__icon { width: 32px; height: 32px; color: #ef4444; flex-shrink: 0; }
.voice-error-display__icon svg { width: 100%; height: 100%; }
.voice-error-display__content { display: flex; flex-direction: column; gap: 0.25rem; }
.voice-error-display__title { font-weight: 600; font-size: 0.9375rem; }
.voice-error-display__message { font-size: 0.875rem; opacity: 0.9; line-height: 1.4; }
.voice-error-display__type { font-size: 0.75rem; opacity: 0.6; font-family: monospace; }
.voice-error-display__actions { display: flex; gap: 0.5rem; margin-top: 0.25rem; }
.voice-error-display__btn { display: inline-flex; align-items: center; gap: 0.375rem; padding: 0.5rem 0.875rem; border-radius: 0.375rem; font-size: 0.875rem; font-weight: 500; cursor: pointer; transition: all 0.15s; border: none; }
.voice-error-display__btn svg { width: 14px; height: 14px; }
.voice-error-display__btn--primary { background: #ef4444; color: white; }
.voice-error-display__btn--primary:hover { background: #dc2626; }
.voice-error-display__btn--secondary { background: rgba(0, 0, 0, 0.05); color: inherit; }
.voice-error-display__btn--secondary:hover { background: rgba(0, 0, 0, 0.1); }
.voice-error-display__btn--ghost { background: transparent; color: inherit; opacity: 0.7; }
.voice-error-display__btn--ghost:hover { opacity: 1; }

.voice-not-supported { display: flex; flex-direction: column; align-items: center; gap: 0.75rem; padding: 1rem; text-align: center; min-width: 260px; max-width: 320px; }
.voice-not-supported__icon { width: 40px; height: 40px; color: #f59e0b; }
.voice-not-supported__icon svg { width: 100%; height: 100%; }
.voice-not-supported__content { display: flex; flex-direction: column; gap: 0.25rem; }
.voice-not-supported__title { font-weight: 600; font-size: 1rem; }
.voice-not-supported__message { font-size: 0.875rem; opacity: 0.8; }
.voice-not-supported__btn { padding: 0.5rem 1rem; background: var(--primary-color, #4f46e5); color: white; border: none; border-radius: 0.375rem; font-size: 0.875rem; font-weight: 500; cursor: pointer; transition: background 0.15s; margin-top: 0.25rem; }
.voice-not-supported__btn:hover { background: var(--primary-dark, #4338ca); }

@keyframes voice-fade-in { from { opacity: 0; transform: translateX(-50%) scale(0.95); } to { opacity: 1; transform: translateX(-50%) scale(1); } }
@keyframes voice-slide-up { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
@keyframes voice-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes voice-wave-pulse { from { transform: scaleY(0.3); opacity: 0.3; } to { transform: scaleY(1); opacity: 1; } }
@keyframes voice-listening-wave { from { transform: scaleY(0.4); } to { transform: scaleY(1); } }

@media (prefers-color-scheme: dark) {
  .voice-feedback { background: var(--voice-bg-dark, rgba(30, 30, 40, 0.95)); color: #e5e7eb; }
  .voice-feedback--error { background: var(--voice-error-bg-dark, #450a0a); border-color: #7f1d1d; color: #fecaca; }
  .voice-feedback--success { background: var(--voice-success-bg-dark, #14532d); border-color: #16a34a; color: #bbf7d0; }
  .voice-feedback--processing { background: var(--voice-processing-bg-dark, #d97706); }
  .command-confirmation__command { background: rgba(255, 255, 255, 0.1); }
  .command-confirmation__edit-btn:hover { background: rgba(255, 255, 255, 0.1); }
  .command-confirmation__input { background: rgba(30, 30, 40, 0.95); color: inherit; border-color: rgba(255, 255, 255, 0.2); }
  .command-progress__bar { background: rgba(255, 255, 255, 0.1); }
  .voice-error-display__btn--secondary, .voice-error-display__btn--ghost { background: rgba(255, 255, 255, 0.1); }
  .command-confirmation__btn--secondary { background: rgba(255, 255, 255, 0.1); }
  .command-confirmation__btn--secondary:hover, .voice-error-display__btn--secondary:hover { background: rgba(255, 255, 255, 0.15); }
}

@media (prefers-reduced-motion: reduce) {
  .voice-feedback, .command-success-toast, .voice-feedback__spinner, .listening-indicator__bar, .voice-wave__bar, .command-progress__fill { animation: none; transition: none; }
  .voice-feedback { transform: translateX(-50%); }
  .voice-feedback--center { transform: translate(-50%, -50%); }
}

@media (max-width: 640px) {
  .voice-feedback { left: 1rem; right: 1rem; transform: none; max-width: none; }
  .voice-feedback--center { left: 1rem; right: 1rem; transform: translateY(-50%); }
  @keyframes voice-fade-in { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
  .command-confirmation, .voice-error-display { min-width: auto; max-width: none; width: 100%; }
}
`;

if (typeof document !== 'undefined') {
  const styleId = 'voice-feedback-styles';
  if (!document.getElementById(styleId)) {
    const styleSheet = document.createElement('style');
    styleSheet.id = styleId;
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
  }
}

export default VoiceFeedback;
