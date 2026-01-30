# SOMA - Current Handoff

> **Date**: 2026-01-30
> **Blueprint Version**: 3.2
> **Phase**: 8 - Content Pipeline & UI Polish

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

### Project Status: Content Pipeline Active

| Metric | Status |
|--------|--------|
| User Stories | All 100 COMPLETE |
| TypeScript | 0 errors (npx tsc --noEmit clean) |
| Vite Build | Passes (npm run build) |
| TestFlight | READY TO BUILD |
| Content Pipeline | Waves 1-7 complete, Wave 8 next |

### Features Complete

| Feature | Status | Files |
|---------|--------|-------|
| Educational Content | Complete | `core/content/` (2,832+ files) |
| Anatomy Main Screen | Complete | `src/AnatomyMainScreen/` |
| AI Voice Navigation | Complete | `src/voice/`, `src/ai/` (15 components) |
| **Dictation (STT)** | Built-in | `src/contexts/VoiceContext.tsx` |
| **Text-to-Speech (TTS)** | Built-in | `src/contexts/VoiceContext.tsx` |
| Bilingual i18n | Complete | `src/i18n/` (31 files) |
| TestFlight Config | Ready | `scripts/build-testflight.sh` |
| **Content Pipeline** | Waves 1-7 done | `core/content/`, `core/knowledge-graph/`, `core/i18n/` |
| **DeepSeek 14B Integration** | Ready | `core/ai/local-llm-service.ts` |

### Content Pipeline Summary (Jan 29-30 Sessions)

| Content Type | Count | File |
|-------------|-------|------|
| ICD-11 Conditions | 390 | `core/medical-simulation/conditions/condition-generator.ts` |
| Medical Specialties | 42 | `core/content/specialties/specialty-map.ts` |
| Symptoms (bilingual) | 155 | `core/content/symptoms/symptom-database.ts` |
| Procedures | 127 | `core/content/procedures/procedure-database.ts` |
| Anatomy Structures | 119 | `core/content/anatomy/anatomy-encyclopedia.ts` |
| Spanish Translations | 898+ | `core/i18n/medical-translations-es.ts` |
| Glossary Entries | 552+ | `core/i18n/medical-glossary.ts` |
| Knowledge Graph Relations | 280+ | `core/knowledge-graph/knowledge-index.ts` |
| Explanation Levels | 5 | `core/education/explanation-levels.ts` |
| Surgical Specialties | 5 databases | `core/content/specialties/` (general, cardiothoracic, neuro, vascular, plastic) |
| Condition Databases | 6 new | `core/content/conditions/` (oncology, ophthalmology, genetic, autoimmune, ENT, urology) |
| Pharmacology Depth | 2 databases | `core/content/pharmacology/` (drug-interactions, pharmacokinetics) |
| Clinical Reasoning | 2 databases | `core/content/clinical-reasoning/` (differential-dx, history-taking) |
| New Domains | 4 databases | biostatistics, health-policy, forensic-medicine, occupational-medicine |
| Pediatrics Specialty | 35 entries | `core/content/specialties/pediatrics/pediatrics-database.ts` |

### UI Fixes This Session
- **DebugPanel**: Removed console interception infinite loop
- **SmartPanelManager**: Fixed re-render loop with useMemo
- **AnatomyViewer**: iOS-compatible Canvas config, decluttered UI
- **MobileBottomNav**: Toggleable with pull-up handle, auto-hide after 5s
- **InteractiveBodyModel**: 21 anatomically proportioned body regions
- **SimplifiedAnatomyViewer**: Human body silhouette replaces polygons
- **RadialContextMenu**: Fixed CSS class names and positioning

### CRITICAL FIX - iOS Database Permissions ✅ v2

**FIXED**: "Failed to create database: Operation not permitted (os error 1)"

**Fix Evolution:**
- **v1 (Failed)**: Used `dirs::document_dir()` - doesn't work on iOS
- **v2 (Working)**: Uses `$HOME/Documents` directly via `std::env::var("HOME")`

**Changes:**
- `src-tauri/src/lib.rs` - Use `$HOME/Documents/biological-self-data` for iOS
- `.entitlements` - Added file access permissions  
- `Info.plist` - Added microphone usage description
- `scripts/build-testflight.sh` - Updated to use `cargo tauri ios build --ci`

### Current Build Status

✅ **Build Successful** - `build/TestFlight/SOMA.ipa` (4.8 MB)

### Architecture Decisions
- **BYOK** (Bring Your Own Key) model - $0 hosting cost
- **DeepSeek 14B** as primary local LLM
- **Offline-first**, everything bundled in-app
- **Open source**, free forever
- **Bilingual EN/ES** throughout all content

### What's Next

1. **Launch Wave 8**: Next batch of agents for expanded content
2. **Code-splitting**: Address Vite chunk size warnings (>500KB) with lazy loading
3. **Upload to TestFlight**: Use Transporter app with `build/TestFlight/SOMA.ipa`
4. Test database creation on physical device
5. Test voice commands (microphone permission)
6. Begin beta testing
7. Gather user feedback

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
Total TypeScript Files: ~3,177+
├── src:        345 files
├── core:     2,832+ files
└── i18n:      31 files

TypeScript Errors: 0
Vite Build: Clean (chunk size warning only)
Content Coverage: 2,832+ educational files + 87 structured databases
Content Databases: 87 structured databases covering 50+ medical domains
Languages: English, Spanish (898+ translations, 552+ glossary entries)
Knowledge Graph: 280+ cross-domain relationships
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

### Wave 1-3 Content Buildout Complete
42 new database files created (~3.4MB total): pharmacology, nutrition, first-aid, exercise, imaging, pathophysiology, treatment-algorithms, pediatric, dermatology, respiratory, endocrinology, GI, OB/GYN, orthopedics, psychiatry, hematology, ENT, preventive-care, neurology, nephrology, oncology, ophthalmology, rheumatology, CV conditions, GI conditions, cardiology, infectious disease, neuro conditions, addiction-medicine, allergy-immunology, anesthesia, clinical-reasoning, hematologic conditions, metabolic conditions, renal conditions, EBM, genetics, medical-ethics, pain-management, palliative-care, patient-safety, physical-exam, public-health, radiology, sexual-health, pulmonology, toxicology, women's-health, wound-care, sleep-medicine.
Wave 4: 20 more databases (surgical specialties, condition databases, clinical reasoning depth, pharmacology depth, biostatistics, health policy, forensic medicine, occupational medicine)
- `core/content/medications/medication-database.ts` - 150+ medications
- `src/services/ContentService.ts` - Unified content service
- `src/hooks/useContent.ts` - React hooks for content access

### Key Technical Learnings (Jan 29 Session)
- Content database entries must use compact format (8-10 lines each) to stay within generation limits
- iOS WebGL: antialias=false, alpha=true, failIfMajorPerformanceCaveat=false, DPR capped at 2
- React infinite loops: avoid console interception in debug panels
- Use useMemo + refs for expensive computations in frequently re-rendering components
- Vite chunk warnings expected with large content; will need code-splitting later
- ICD-11 codes are the universal identifier for all conditions
- 5 complexity levels: child(1), patient(2), nursing(3), medical-student(4), physician(5)
- Knowledge graph connects: conditions <-> anatomy <-> symptoms <-> medications <-> procedures <-> specialties

### IMPORTANT: Voice Already Built-In
Do NOT add external TTS/STT services. The application already has:
- Web Speech API (browser built-in, free)
- Qwen2-Audio-7b (local AI STT)
- Qwen3-TTS-1.7b (local AI TTS)
- System TTS (browser built-in)

All voice capabilities work offline and support Spanish!
