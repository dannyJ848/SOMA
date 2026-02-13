# React Hooks API Reference

This document provides comprehensive documentation for all custom React hooks in The Biological Self application.

---

## Table of Contents

1. [useActionTracker](#useactiontracker)
2. [useAnatomy3DNavigation](#useanatomy3dnavigation)
3. [useAnatomy3DTracking](#useanatomy3dtracking)
4. [useJourneyContext](#usejourneycontext)
5. [useUserDemographics](#useuserdemographics)
6. [useVoiceFallback](#usevoicefallback)

---

## useActionTracker

React hook for tracking user actions in the adaptive intent prediction system. Components use this hook to report user interactions which are then used to predict future actions and adapt the UI.

### Location
`src/hooks/useActionTracker.ts`

### Import
```typescript
import { useActionTracker, getCurrentSession, startNewSession } from '../hooks/useActionTracker';
```

### Usage

```typescript
function SymptomExplorer() {
  const { track, trackTimed, sessionId, journeyId, actionCount } = useActionTracker(
    'symptom-explorer',  // featureArea
    'SymptomExplorer'    // sourceComponent (optional)
  );

  const handleSymptomSelect = (symptomId: string, symptomName: string) => {
    // Track an instant action
    track('select-symptom', {
      entityId: symptomId,
      entityName: symptomName
    });
    // ... rest of handler
  };

  const handleViewSource = (structureId: string) => {
    // Track a timed action
    const { stop, cancel } = trackTimed('view-source', { structureId });

    // Call stop() when user navigates away to record duration
    return () => stop();
  };
}
```

### Return Type

```typescript
interface ActionTrackerResult<T extends ActionType> {
  /** Track an instant action (click, select, etc.) */
  track: (actionType: T, payload?: ActionPayload) => ActionEvent;

  /** Start tracking a timed action (returns stop function) */
  trackTimed: (actionType: T, payload?: ActionPayload) => TimedActionControl;

  /** Get the current session ID */
  sessionId: string;

  /** Get the current journey ID */
  journeyId: string;

  /** Get action count in current session */
  actionCount: number;
}

interface TimedActionControl {
  stop: () => void;   // Complete action and emit with duration
  cancel: () => void; // Cancel without emitting
}
```

### Action Types by Feature Area

```typescript
type FeatureArea =
  | 'navigation'
  | 'dashboard'
  | 'symptom-explorer'
  | 'medication-explorer'
  | 'condition-simulator'
  | 'encyclopedia'
  | 'anatomy-3d'
  | 'chat'
  | 'timeline'
  | 'body-map';
```

### ActionPayload

```typescript
interface ActionPayload {
  entityId?: string;
  entityName?: string;
  searchQuery?: string;
  fromView?: string;
  toView?: string;
  structureId?: string;
  structureName?: string;
  complexityLevel?: 1 | 2 | 3 | 4 | 5;
  // ... and more
}
```

### Utility Functions

```typescript
// Get current session info
const { sessionId, journeyId, actionCount } = getCurrentSession();

// Start a new session (e.g., after long idle period)
const newSessionId = startNewSession();

// Start a new journey within current session
const newJourneyId = startNewJourney();

// Create action outside of React component
const action = createActionEvent('navigation', 'view-change', { fromView: 'a', toView: 'b' });

// Batch track multiple actions
batchTrackActions([action1, action2, action3]);
```

---

## useAnatomy3DNavigation

Provides programmatic control of the AnatomyViewer from any component. Used by SymptomExplorer, MedicationExplorer, ConditionSimulator, and other components to navigate, highlight, and control the 3D anatomy view.

### Location
`src/hooks/useAnatomy3DNavigation.ts`

### Import
```typescript
import {
  useAnatomy3DNavigation,
  useAnatomy3DEvents,
  LAYER_PRESETS
} from '../hooks/useAnatomy3DNavigation';
```

### Usage

```typescript
function MedicationExplorer() {
  const {
    navigateToStructure,
    navigateToRegion,
    setViewPreset,
    enableLayers,
    highlightStructures,
    clearHighlights,
    focusOnMedicationTargets,
    resetView
  } = useAnatomy3DNavigation({
    componentId: 'MedicationExplorer',
    autoResetOnUnmount: true,
    enableDebug: false
  });

  const showDrugEffects = async (targets: MedicationTarget[]) => {
    // Focus on therapeutic targets with highlights
    focusOnMedicationTargets(targets);
  };

  const handleSelectOrgan = async (structureId: string) => {
    await navigateToStructure(structureId, {
      animate: true,
      duration: 800,
      highlight: true,
      highlightColor: '#22c55e'
    });
  };
}
```

### Return Type

```typescript
interface Anatomy3DNavigationAPI {
  // Navigation
  navigateToStructure: (structureId: string, options?: NavigationOptions) => Promise<void>;
  navigateToRegion: (region: string, options?: NavigationOptions) => Promise<void>;

  // View Control
  setViewPreset: (preset: ViewPreset, animate?: boolean) => void;
  resetView: (preserveLayers?: boolean) => void;
  setCameraPosition: (position: CameraPosition, animate?: boolean, duration?: number) => void;

  // Layers
  enableLayers: (layers: string[]) => void;
  disableLayers: (layers: string[]) => void;
  setLayers: (layers: string[]) => void;

  // Highlighting
  highlightStructures: (highlights: StructureHighlight[]) => void;
  highlightSingleStructure: (structureId: string, color: string, pulse?: boolean) => void;
  clearHighlights: (structureIds?: string[]) => void;

  // Selection
  selectStructure: (structureId: string, openInfoPanel?: boolean) => void;
  deselectStructure: () => void;

  // Compound Actions
  focusOnSymptomSources: (sources: SymptomSource[]) => void;
  focusOnMedicationTargets: (targets: MedicationTarget[]) => void;
  showConditionAffectedAreas: (areas: ConditionArea[]) => void;
}
```

### View Presets

```typescript
type ViewPreset = 'anterior' | 'posterior' | 'left' | 'right' | 'superior' | 'inferior';
```

### Layer Presets

```typescript
const LAYER_PRESETS = {
  cardiovascular: ['cardiovascular', 'arteries', 'veins', 'heart'],
  respiratory: ['respiratory', 'lungs', 'airways', 'diaphragm'],
  digestive: ['digestive', 'stomach', 'intestines', 'liver', 'gallbladder', 'pancreas'],
  musculoskeletal: ['skeletal', 'muscular', 'joints', 'spine'],
  nervous: ['nervous', 'brain', 'spinal-cord', 'nerves'],
  urinary: ['urinary', 'kidneys', 'bladder', 'ureters'],
  endocrine: ['endocrine', 'thyroid', 'adrenal', 'pancreas'],
  lymphatic: ['lymphatic', 'spleen', 'lymph-nodes'],
  reproductive: ['reproductive'],
  integumentary: ['skin', 'integumentary'],
};
```

### StructureHighlight

```typescript
interface StructureHighlight {
  structureId: string;
  color: string;
  intensity?: 'strong' | 'moderate' | 'mild';
  pulseAnimation?: boolean;
  duration?: number; // ms, 0 = indefinite
}
```

### Compound Actions

#### focusOnSymptomSources

Highlights symptom sources with likelihood-based coloring:
- `common`: Green
- `less-common`: Yellow
- `rare`: Orange
- `do-not-miss`: Red (with pulse animation)

```typescript
focusOnSymptomSources([
  { structureId: 'heart', structureName: 'Heart', likelihood: 'common' },
  { structureId: 'aorta', structureName: 'Aorta', likelihood: 'do-not-miss' }
]);
```

#### focusOnMedicationTargets

Highlights medication targets with effect-based coloring:
- `therapeutic`: Green
- `adverse`: Red
- `neutral`: Gray

```typescript
focusOnMedicationTargets([
  { structureId: 'liver', structureName: 'Liver', effectType: 'therapeutic', intensity: 'strong' }
]);
```

---

## useAnatomy3DEvents

Subscribe to anatomy 3D events.

### Usage

```typescript
import { useAnatomy3DEvents } from '../hooks/useAnatomy3DNavigation';

function MyComponent() {
  useAnatomy3DEvents('SELECT_STRUCTURE', (event) => {
    console.log('Structure selected:', event.payload.structureId);
  });

  // Or listen to all events
  useAnatomy3DEvents('all', (event) => {
    console.log('Anatomy event:', event.type, event.payload);
  });
}
```

---

## useJourneyContext

Provides access to the user's exploration journey context for use in the AI chat component.

### Location
`src/hooks/useJourneyContext.ts`

### Import
```typescript
import { useJourneyContext, getContextualSuggestions } from '../hooks/useJourneyContext';
```

### Usage

```typescript
function ChatView() {
  const { summary, chatContext, hasContext, refresh, recentActionCount } = useJourneyContext();

  // Use chatContext in AI system prompt
  const systemPrompt = `You are a health educator. ${chatContext}`;

  // Get contextual suggestions based on journey
  const suggestions = summary ? getContextualSuggestions(summary) : [];

  return (
    <div>
      {suggestions.map((s, i) => (
        <button key={i} onClick={() => sendMessage(s)}>{s}</button>
      ))}
    </div>
  );
}
```

### Return Type

```typescript
interface JourneyContextResult {
  /** Summarized journey data */
  summary: JourneySummary | null;

  /** Formatted context string for chat system prompt */
  chatContext: string;

  /** Whether there's meaningful context available */
  hasContext: boolean;

  /** Refresh the journey context */
  refresh: () => void;

  /** Recent actions count */
  recentActionCount: number;
}
```

### JourneySummary

```typescript
interface JourneySummary {
  featureAreasVisited: string[];
  entitiesViewed: Array<{
    type: 'symptom' | 'medication' | 'condition' | 'anatomy' | 'lab' | 'encyclopedia';
    id: string;
    name: string;
    viewCount: number;
  }>;
  searchQueries: string[];
  primaryFocus?: string;
  secondaryFocus?: string;
}
```

### getContextualSuggestions

```typescript
function getContextualSuggestions(summary: JourneySummary | null): string[] {
  // Returns contextual chat suggestions based on journey
  // e.g., ["Tell me more about Headache", "Explain how Aspirin works"]
}
```

---

## useUserDemographics

Manages user demographics data with localStorage persistence.

### Location
`src/hooks/useUserDemographics.ts`

### Import
```typescript
import { useUserDemographics } from '../hooks/useUserDemographics';
```

### Usage

```typescript
function OnboardingFlow() {
  const {
    demographics,
    isOnboarded,
    isLoading,
    saveDemographics,
    clearDemographics,
    refreshDemographics
  } = useUserDemographics();

  const handleSubmit = async (data: UserDemographics) => {
    await saveDemographics(data);
    // User is now onboarded
  };

  if (isLoading) return <Loading />;
  if (isOnboarded) return <Dashboard demographics={demographics} />;
  return <OnboardingForm onSubmit={handleSubmit} />;
}
```

### Return Type

```typescript
interface UseUserDemographicsResult {
  demographics: UserDemographics | null;
  isOnboarded: boolean;
  isLoading: boolean;
  saveDemographics: (data: UserDemographics) => Promise<void>;
  clearDemographics: () => Promise<void>;
  refreshDemographics: () => Promise<void>;
}
```

---

## useVoiceFallback

Provides voice input/output with graceful fallback when voice services are unavailable.

### Location
`src/hooks/useVoiceFallback.ts`

### Import
```typescript
import { useVoiceFallback } from '../hooks/useVoiceFallback';
```

### Usage

```typescript
function ChatInput() {
  const {
    isRecording,
    isProcessing,
    transcript,
    error,
    startRecording,
    stopRecording,
    speak,
    isVoiceAvailable
  } = useVoiceFallback();

  return (
    <div>
      <button
        onClick={isRecording ? stopRecording : startRecording}
        disabled={isProcessing || !isVoiceAvailable}
      >
        {isRecording ? 'Stop' : 'Record'}
      </button>
      {transcript && <p>You said: {transcript}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
}
```

### Return Type

```typescript
interface UseVoiceFallbackResult {
  isRecording: boolean;
  isProcessing: boolean;
  transcript: string | null;
  error: string | null;
  startRecording: () => Promise<void>;
  stopRecording: () => Promise<void>;
  speak: (text: string) => Promise<void>;
  isVoiceAvailable: boolean;
  isSpeaking: boolean;
}
```
