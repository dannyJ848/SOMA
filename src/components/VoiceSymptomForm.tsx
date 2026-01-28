import React, { useState } from "react";
import { SymptomEntryForm } from "../SymptomEntryForm";
import { VoiceSymptomInput } from "./voice/VoiceSymptomInput";
import "./VoiceSymptomForm.css";

export function VoiceSymptomForm({ onSave, onCancel }: { onSave: () => void; onCancel: () => void }) {
  const [showVoiceInput, setShowVoiceInput] = useState(false);
  const [voiceTranscript, setVoiceTranscript] = useState("");

  const handleTranscriptionComplete = (text: string) => {
    setVoiceTranscript(text);
    setShowVoiceInput(false);
    // The text will be used by SymptomEntryForm in nlInput state
  };

  return (
    <div className="voice-symptom-form">
      {showVoiceInput ? (
        <div className="voice-symptom-form__voice-panel">
          <VoiceSymptomInput
            onTranscriptionComplete={handleTranscriptionComplete}
            onRecordingStart={() => console.log("Recording started")}
            onRecordingStop={() => console.log("Recording stopped")}
            placeholder="Describe your symptom..."
            inline={false}
          />
          <button type="button" onClick={() => setShowVoiceInput(false)} className="voice-symptom-form__cancel">Cancel</button>
        </div>
      ) : (
        <>
          <button type="button" onClick={() => setShowVoiceInput(true)} className="voice-symptom-form__trigger">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>
            Describe symptom with voice
          </button>
          {voiceTranscript && (<div className="voice-symptom-form__transcript">{voiceTranscript}</div>)}
          <SymptomEntryForm onSave={onSave} onCancel={onCancel} preselectedNlInput={voiceTranscript} />
        </>
      )}
    </div>
  );
}
