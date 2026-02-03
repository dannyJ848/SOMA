# API Documentation

This document provides comprehensive documentation for all APIs in The Biological Self application.

---

## Table of Contents

1. [Tauri Commands](#tauri-commands)
2. [React Hooks](#react-hooks)
3. [Utility Functions](#utility-functions)
4. [Event Buses](#event-buses)
5. [Core Types](#core-types)

---

## Tauri Commands

All Tauri commands are exposed via the `invoke` wrapper in `src/tauri-invoke.ts`. This wrapper provides mock data when running in browser mode for development.

### Database Commands

#### `check_database_exists`
Check if the encrypted database file exists.

```typescript
const exists = await invoke<boolean>('check_database_exists');
```

**Returns:** `boolean`

---

#### `create_database`
Create a new encrypted database with the provided passphrase.

```typescript
const summary = await invoke<HealthSummary>('create_database', { passphrase: 'your-passphrase' });
```

**Parameters:**
- `passphrase: string` - Minimum 8 characters

**Returns:** `HealthSummary`

---

#### `unlock_database`
Unlock an existing database with passphrase.

```typescript
const summary = await invoke<HealthSummary>('unlock_database', { passphrase: 'your-passphrase' });
```

**Parameters:**
- `passphrase: string`

**Returns:** `HealthSummary`

**Errors:**
- `"Incorrect passphrase"` - Wrong passphrase provided
- `"Database does not exist"` - No database file found

---

### Dashboard Commands

#### `get_dashboard`
Retrieve the main dashboard data including summary, conditions, medications, labs, vitals, and symptoms.

```typescript
const dashboard = await invoke<DashboardData>('get_dashboard');
```

**Returns:** `DashboardData`

```typescript
interface DashboardData {
  summary: HealthSummary;
  activeConditions: ConditionSummary[];
  currentMedications: MedicationSummary[];
  recentLabs: LabWithTrend[];
  vitalsSummary: VitalsSummary;
  recentSymptoms: SymptomSummary[];
}
```

---

#### `get_timeline`
Retrieve health timeline events with optional filters.

```typescript
const timeline = await invoke<TimelineData>('get_timeline', {
  types: ['lab', 'medication', 'condition'],
  startDate: '2024-01-01',
  endDate: '2024-12-31'
});
```

**Parameters:**
- `types?: TimelineEventType[]` - Filter by event types
- `startDate?: string` - ISO date string
- `endDate?: string` - ISO date string

**Returns:** `TimelineData`

---

### Symptom Commands

#### `add_symptom`
Add a new symptom entry.

```typescript
const result = await invoke<AddSymptomResult>('add_symptom', {
  symptom: {
    description: 'Headache in morning',
    severity: 5,
    bodyLocation: 'head',
    onsetDate: '2024-06-15',
    status: 'active',
    duration: { value: 2, unit: 'hours' },
    associatedFactors: ['after-sleep'],
    frequency: 'occasional',
    timeOfDay: 'morning'
  }
});
```

**Parameters:** `SymptomInput`

**Returns:** `AddSymptomResult`

---

### Demographics Commands

#### `get_demographics`
Get user demographics (height, weight, age, etc).

```typescript
const demographics = await invoke<UserDemographics | null>('get_demographics');
```

**Returns:** `UserDemographics | null`

---

#### `save_demographics`
Save user demographics.

```typescript
await invoke('save_demographics', {
  demographics: {
    heightCm: 175,
    weightKg: 70,
    age: 30,
    sex: 'male',
    bodyType: 'athletic'
  }
});
```

---

#### `clear_demographics`
Clear stored demographics.

```typescript
await invoke('clear_demographics');
```

---

### AI Commands

#### `ai_health`
Check if AI (Ollama) is available.

```typescript
const health = await invoke<AIHealthResponse>('ai_health');
// { available: true, version: '0.6.3', error: null }
```

---

#### `ai_models`
List available AI models.

```typescript
const models = await invoke<AIModelsResponse>('ai_models');
```

---

#### `ai_chat`
Send a chat message to the AI.

```typescript
const response = await invoke<AIChatResponse>('ai_chat', {
  request: {
    model: 'llama3.1:8b',
    messages: [
      { role: 'system', content: 'You are a health educator.' },
      { role: 'user', content: 'What causes fatigue?' }
    ],
    temperature: 0.7
  }
});
```

**Parameters:** `AIChatRequest`

**Returns:** `AIChatResponse`

```typescript
interface AIChatResponse {
  content: string;
  model: string;
  done: boolean;
}
```

---

#### `ai_chat_rag`
Send a chat message with RAG (Retrieval-Augmented Generation) support.

```typescript
const response = await invoke<AIChatRAGResponse>('ai_chat_rag', {
  request: {
    model: 'llama3.1:8b',
    messages: [{ role: 'user', content: 'What is the function of the heart?' }],
    ragOptions: {
      structureName: 'heart',
      system: 'cardiovascular',
      complexityLevel: 3,
      maxTokens: 2000
    }
  }
});
```

**Returns:** `AIChatRAGResponse`

```typescript
interface AIChatRAGResponse {
  content: string;
  model: string;
  done: boolean;
  citations: Citation[];
  ragContext?: {
    chunksUsed: number;
    totalTokens: number;
    processingTimeMs: number;
  };
}

interface Citation {
  index: number;
  source: string;
  section?: string;
  url?: string;
}
```

---

#### `ai_chat_json`
Send a chat message expecting JSON response.

```typescript
const response = await invoke<{ success: boolean; result: unknown }>('ai_chat_json', {
  request: {
    model: 'llama3.1:8b',
    messages: [{ role: 'user', content: 'Analyze this health data...' }],
    systemPrompt: 'You are a health data analyst. Respond in JSON.',
    format: 'json'
  }
});
```

---

### Intent Prediction Commands

#### `predict_intent`
Predict user intent based on recent actions.

```typescript
const prediction = await invoke<PredictionResponse>('predict_intent', {
  request: {
    recentActions: [...actionHistory],
    healthProfile: {
      conditions: [...],
      medications: [...],
      recentSymptoms: [...],
      abnormalLabs: [...]
    },
    currentContext: {
      view: 'symptom-explorer',
      selectedEntity: { type: 'symptom', id: 's1', name: 'Headache' },
      visiblePanels: ['main', 'info'],
      activeComplexityLevel: 3
    },
    maxPredictions: 5,
    maxShortcuts: 3
  }
});
```

---

#### `prediction_health`
Check if prediction service is available.

```typescript
const health = await invoke<PredictionHealthResponse>('prediction_health');
```

---

### Journey Commands

#### `journey_add_action`
Record a user action for journey tracking.

```typescript
const result = await invoke<JourneyAddActionResult>('journey_add_action', {
  action: {
    id: 'action-uuid',
    sessionId: 'session-uuid',
    timestamp: new Date().toISOString(),
    featureArea: 'symptom-explorer',
    actionType: 'select-symptom',
    payload: { entityId: 's1', entityName: 'Headache' }
  }
});
```

---

#### `journey_get_recent_actions`
Get recent actions for a session.

```typescript
const result = await invoke<JourneyActionsResult>('journey_get_recent_actions', {
  sessionId: 'session-uuid',
  limit: 20
});
```

---

#### `journey_start`
Start a new journey.

```typescript
const result = await invoke<JourneyStartResult>('journey_start', {
  sessionId: 'session-uuid',
  journeyType: 'symptom-investigation',
  healthContext: { ... }
});
```

---

#### `journey_get_stats`
Get journey statistics.

```typescript
const stats = await invoke<JourneyStatsResult>('journey_get_stats');
// { totalActions: 1500, totalJourneys: 45, oldestAction: '...', newestAction: '...' }
```

---

### Voice Commands

#### `voice_health`
Check voice service health.

```typescript
const health = await invoke<VoiceHealthResponse>('voice_health');
```

---

#### `voice_transcribe`
Transcribe audio to text.

```typescript
const result = await invoke<VoiceTranscriptionResult>('voice_transcribe', {
  audioBase64: 'base64-encoded-audio',
  language: 'en'
});
```

---

#### `voice_synthesize`
Synthesize text to speech.

```typescript
const result = await invoke<VoiceSynthesisResult>('voice_synthesize', {
  request: {
    text: 'Your heart rate is normal.',
    voice: 'default',
    speakingRate: 1.0
  }
});
```

---

### On-Device LLM Commands (iOS/Native)

#### `llm_health`
Check native LLM availability.

```typescript
const health = await invoke('llm_health');
```

---

#### `llm_chat`
Chat with native on-device LLM.

```typescript
const response = await invoke('llm_chat', { ... });
```

---

#### `llm_preload`
Preload LLM model for faster inference.

```typescript
await invoke('llm_preload');
```

---

## Type Definitions

### HealthSummary

```typescript
interface HealthSummary {
  totalConditions: number;
  totalMedications: number;
  totalLabResults: number;
  totalWhoopCycles: number;
  totalAppleHealthDays: number;
  lastUpdated: string | null;
}
```

### ConditionSummary

```typescript
interface ConditionSummary {
  id: string;
  name: string;
  status: 'active' | 'resolved' | 'chronic' | 'in-remission';
  severity?: 'mild' | 'moderate' | 'severe';
  diagnosedDate?: string;
}
```

### MedicationSummary

```typescript
interface MedicationSummary {
  id: string;
  name: string;
  dosage?: string;
  frequency?: string;
}
```

### LabWithTrend

```typescript
interface LabWithTrend {
  id: string;
  testName: string;
  value: number | string;
  unit?: string;
  status?: 'normal' | 'elevated' | 'borderline' | 'abnormal-low' | 'critical';
  collectedAt: string;
  trend?: 'up' | 'down' | 'stable';
  previousValue?: number | string;
}
```

### VitalsSummary

```typescript
interface VitalsSummary {
  restingHeartRate?: number;
  hrv?: number;
  sleepHours?: number;
  recoveryScore?: number;
  steps?: number;
  lastUpdated?: string;
}
```

### UserDemographics

```typescript
interface UserDemographics {
  heightCm: number;
  weightKg: number;
  age: number;
  sex: 'male' | 'female' | 'intersex' | 'unknown';
  bodyType: string;
  ethnicity?: string;
  bmi?: number;
  bodyFatEstimate?: number;
}
```
