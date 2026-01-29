# SOMA - Current Handoff

> **Date**: 2026-01-28
> **Blueprint Version**: 2.3
> **Phase**: 7 - PROJECT COMPLETE - TestFlight Ready

---

## Quick Start for New Session

```bash
# 1. Check TypeScript errors
npx tsc --noEmit | grep -c "error TS"

# 2. Start development
npm run tauri:dev

# 3. Check test files
npx tsx src/i18n/test-i18n.tsx
```

---

## Current Status Summary

### Project Complete

| Metric | Status |
|--------|--------|
| User Stories | All 100 COMPLETE |
| TypeScript | 0 errors |
| TestFlight | READY TO BUILD |

### Features Complete

| Feature | Status | Files |
|---------|--------|-------|
| Educational Content | Complete | `core/content/` (2,719 files) |
| Anatomy Main Screen | Complete | `src/AnatomyMainScreen/` |
| AI Voice Navigation | Complete | `src/voice/`, `src/ai/` (15 components) |
| **Dictation (STT)** | Built-in | `src/contexts/VoiceContext.tsx` |
| **Text-to-Speech (TTS)** | Built-in | `src/contexts/VoiceContext.tsx` |
| Bilingual i18n | Complete | `src/i18n/` (31 files) |
| TestFlight Config | Ready | `scripts/build-testflight.sh` |

### What's Next

1. Build TestFlight release
2. Upload to App Store Connect
3. Begin beta testing
4. Gather user feedback

---

## TestFlight Build Instructions

### Quick Build
```bash
./scripts/build-testflight.sh
```

### Manual Build
```bash
# 1. Build iOS app
npm run tauri:build -- --target aarch64-apple-ios

# 2. Open in Xcode
open src-tauri/gen/apple/soma.xcodeproj

# 3. Archive and upload via Xcode Organizer
```

### Requirements
- Xcode 15+
- Apple Developer account (approved)
- iOS Development certificate
- App Store Connect API key (optional, for fastlane)

---

## Project Stats

```
Total TypeScript Files: ~3,032
├── src:        313 files
├── core:     2,719 files
└── i18n:      31 files

TypeScript Errors: 0
Content Coverage: 2,719 educational files
Languages: English, Spanish
```

---

## Key Files

### i18n
- `src/i18n/I18nContext.tsx` - Language provider
- `src/i18n/useI18n.ts` - Translation hooks
- `src/i18n/translations/en/` - English strings
- `src/i18n/translations/es/` - Spanish strings
- `src/components/LanguageSwitcher.tsx` - Language UI

### AI Voice
- `src/voice/VoiceCommandParser.ts`
- `src/ai/AnatomyIntentRecognizer.ts`
- `src/contexts/VoiceCommandContext.tsx`
- `src/contexts/VoiceContext.tsx` - STT/TTS management
- `src/hooks/useVoiceNavigation.ts`
- `src/components/VoiceMedicalInput.tsx` - Medical dictation
- `core/voice/types.ts` - Voice configuration types

### Voice/Dictation/TTS (Built-in)
- `src/contexts/VoiceContext.tsx` - Main voice state management
- `src/settings/AccessibilitySettings.tsx` - Voice settings UI
- `core/voice/types.ts` - STT/TTS configuration
- `src/components/VoiceMedicalInput.tsx` - Medical-aware dictation
- `src/hooks/useVoiceFallback.ts` - Fallback voice handling

### TestFlight
- `scripts/build-testflight.sh`
- `fastlane/Fastfile`
- `docs/TESTFLIGHT.md`

---

## Usage Examples

### Using i18n
```tsx
import { useTranslation } from './i18n/useI18n';
import { LanguageToggle } from './components/LanguageSwitcher';

function Component() {
  const { t } = useTranslation('namespace');
  return <h1>{t('key')}</h1>;
}
```

### AI with Spanish
```typescript
const response = await askEducator({
  question: userQuestion,
  context: { domain: 'symptoms', language: 'es' }
});
```

### Dictation (Speech-to-Text)
```tsx
import { useVoice } from './contexts/VoiceContext';

function Component() {
  const { startRecording, stopRecording, lastTranscription } = useVoice();

  return (
    <div>
      <button onClick={startRecording}>Start Dictation</button>
      <button onClick={stopRecording}>Stop</button>
      <p>{lastTranscription?.text}</p>
    </div>
  );
}
```

### Text-to-Speech (TTS)
```tsx
import { useVoice } from './contexts/VoiceContext';

function Component() {
  const { speak, stopSpeaking } = useVoice();

  return (
    <div>
      <button onClick={() => speak("Hello, this is a test")}>
        Speak English
      </button>
      <button onClick={() => speak("El corazon tiene cuatro camaras")}>
        Speak Spanish
      </button>
      <button onClick={stopSpeaking}>Stop</button>
    </div>
  );
}
```

### Voice Configuration
```typescript
import { VoiceConfig } from './core/voice/types';

const config: VoiceConfig = {
  sttModel: 'qwen2-audio-7b',  // or 'web-speech-api'
  ttsModel: 'qwen3-tts-1.7b',    // or 'system-tts'
  selectedVoice: 'Chelsie',      // 8 presets available
  language: 'es',                // Spanish!
  autoSpeak: true,               // AI responses spoken aloud
  speakingRate: 1.0,
};
```

---

## Documentation

- **BLUEPRINT.md** - Master architecture document
- **progress.txt** - Detailed progress history
- **AGENTS.md** - Development patterns & conventions
- **docs/TESTFLIGHT.md** - Deployment guide
- **src/i18n/README.md** - i18n usage guide

---

## Commands

```bash
# TypeScript check
npm run typecheck

# Start dev
npm run tauri:dev

# Build for production
npm run build

# Build iOS
./scripts/build-testflight.sh

# Count files
find src -name "*.ts*" | wc -l
find core -name "*.ts" | wc -l
```

---

## Notes

- **All 100 user stories**: COMPLETE
- **TypeScript errors**: 0
- **Language toggle**: Available in header
- **AI bilingual**: Spanish prompts ready
- **TestFlight**: Scripts configured, ready to build
- **Dictation (STT)**: Built-in (Web Speech API + Local AI)
- **Text-to-Speech (TTS)**: Built-in (System TTS + Local AI)
- **Voice Languages**: 10 languages supported (en, es, zh, ja, ko, de, fr, ru, pt, it)
- **Voice Presets**: 8 options (Chelsie, Ethan, Alloy, Echo, Fable, Onyx, Nova, Shimmer)

### IMPORTANT: Voice Already Built-In
Do NOT add external TTS/STT services. The application already has:
- Web Speech API (browser built-in, free)
- Qwen2-Audio-7b (local AI STT)
- Qwen3-TTS-1.7b (local AI TTS)
- System TTS (browser built-in)

All voice capabilities work offline and support Spanish!
