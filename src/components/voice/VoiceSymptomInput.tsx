import React, { useCallback, useEffect, useState } from "react";
import { useVoiceFallback } from "../../hooks/useVoiceFallback";
import "./VoiceSymptomInput.css";

export interface VoiceSymptomInputProps {
  onTranscriptionComplete: (text: string) => void;
  onRecordingStart?: () => void;
  onRecordingStop?: () => void;
  className?: string;
  disabled?: boolean;
  inline?: boolean;
  placeholder?: string;
  showTextarea?: boolean;
  language?: string;
}

export const VoiceSymptomInput: React.FC<VoiceSymptomInputProps> = ({
  onTranscriptionComplete,
  onRecordingStart,
  onRecordingStop,
  className = "",
  disabled = false,
  inline = true,
  placeholder = "Describe your symptom...",
  showTextarea = true,
  language = "en-US",
}) => {
  const { isAvailable, sttAvailable, isRecording, transcription, error, startRecording, stopRecording, clearError } = useVoiceFallback(language, false);
  const [localTranscript, setLocalTranscript] = useState("");

  useEffect(() => { if (transcription && isRecording === false) { setLocalTranscript(transcription); } }, [transcription, isRecording]);

  const handleToggleRecording = useCallback(async () => { if (isRecording) { await stopRecording(); onRecordingStop?.(); } else { if (disabled || sttAvailable === false) return; clearError(); setLocalTranscript(""); await startRecording(); onRecordingStart?.(); } }, [isRecording, sttAvailable, disabled, clearError, startRecording, stopRecording, onRecordingStart, onRecordingStop]);

  const handleSubmit = useCallback(() => { if (localTranscript.trim()) { onTranscriptionComplete(localTranscript); setLocalTranscript(""); } }, [localTranscript, onTranscriptionComplete]);

  const handleClear = useCallback(() => { setLocalTranscript(""); }, []);

  return (
    <div className={"voice-symptom-input " + (inline ? "voice-symptom-input--inline " : "") + className}>
      <button type="button" onClick={handleToggleRecording} disabled={disabled || sttAvailable === false} className={"voice-symptom-input__button " + (isRecording ? "voice-symptom-input__button--recording" : "")} aria-label={isRecording ? "Stop recording" : "Start recording"}>
        {isRecording ? (<svg className="voice-symptom-input__icon" viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><rect x="6" y="6" width="12" height="12" rx="2" /></svg>) : (<svg className="voice-symptom-input__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>)}
        {isRecording && <span className="voice-symptom-input__pulse"></span>}
      </button>
      {showTextarea && (<div className="voice-symptom-input__input-wrapper">{localTranscript || isRecording ? (<div className="voice-symptom-input__transcription">{localTranscript && (<div className="voice-symptom-input__text"><span className="voice-symptom-input__label">You said:</span><p className="voice-symptom-input__content">{localTranscript}</p><button type="button" onClick={handleClear} className="voice-symptom-input__clear">Clear</button></div>)}{isRecording && (<div className="voice-symptom-input__recording-status"><span className="voice-symptom-input__pulse"></span>Listening...</div>)}</div>) : (<div className="voice-symptom-input__placeholder">{placeholder}</div>)}{localTranscript && isRecording === false && (<button type="button" onClick={handleSubmit} className="voice-symptom-input__submit">Use Description</button>)}</div>)}
      {error && <div className="voice-symptom-input__error" role="alert">{error}</div>}
      {isAvailable === false && <div className="voice-symptom-input__unavailable">Voice input not available. Use Chrome or Edge.</div>}
    </div>
  );
};

export default VoiceSymptomInput;
