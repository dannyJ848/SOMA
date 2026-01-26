# Architecture Overview

This document provides a comprehensive overview of The Biological Self application architecture.

---

## Table of Contents

1. [Design Principles](#design-principles)
2. [System Architecture](#system-architecture)
3. [Frontend Architecture](#frontend-architecture)
4. [Backend Architecture](#backend-architecture)
5. [Data Architecture](#data-architecture)
6. [AI Architecture](#ai-architecture)
7. [Security Architecture](#security-architecture)

---

## Design Principles

### Core Principles

1. **LOCAL FIRST, PRIVATE ALWAYS, OPEN EVERYTHING**
   - All data stays on the user's device
   - No cloud storage, no telemetry, no analytics
   - Zero network calls after initial setup
   - Full offline functionality

2. **Education, Not Diagnosis**
   - Tool explains physiology, doesn't diagnose
   - Clear boundaries enforced in every interaction
   - Empowers patients without replacing physicians

3. **Adaptive Complexity**
   - 6 depth levels from 8th grade to physician
   - User controls their learning journey
   - Progressive disclosure of complexity

---

## System Architecture

```
+------------------------------------------------------------------+
|                        USER'S DEVICE                               |
|                                                                    |
|  +------------------------+    +-------------------------------+   |
|  |      FRONTEND          |    |         BACKEND               |   |
|  |     (React/Vite)       |    |       (Tauri/Rust)            |   |
|  |                        |    |                               |   |
|  |  +------------------+  |    |  +-----------------------+    |   |
|  |  | AnatomyViewer    |  |<-->|  | Tauri Commands       |    |   |
|  |  | (Three.js)       |  |    |  | (IPC Bridge)         |    |   |
|  |  +------------------+  |    |  +-----------------------+    |   |
|  |                        |    |            |                  |   |
|  |  +------------------+  |    |  +-----------------------+    |   |
|  |  | React Components |  |    |  | TypeScript Bridges   |    |   |
|  |  | (Dashboard, Chat)|  |    |  | (tauri-bridge.ts)    |    |   |
|  |  +------------------+  |    |  +-----------------------+    |   |
|  |                        |    |            |                  |   |
|  |  +------------------+  |    |  +-----------------------+    |   |
|  |  | State Management |  |    |  | SQLite Database      |    |   |
|  |  | (React Hooks)    |  |    |  | (Encrypted)          |    |   |
|  |  +------------------+  |    |  +-----------------------+    |   |
|  +------------------------+    +-------------------------------+   |
|                                           |                        |
|                                           v                        |
|  +------------------------------------------------------------------+
|  |                     LOCAL AI LAYER                               |
|  |  +------------------+  +-------------------+  +---------------+  |
|  |  | Ollama          |  | LanceDB/ChromaDB  |  | BGE/Nomic     |  |
|  |  | (LLM Runtime)   |  | (Vector Store)    |  | (Embeddings)  |  |
|  |  +------------------+  +-------------------+  +---------------+  |
|  +------------------------------------------------------------------+
|                                                                    |
|                        --- ZERO NETWORK CALLS ---                  |
+--------------------------------------------------------------------+
```

---

## Frontend Architecture

### Technology Stack

| Component | Technology |
|-----------|------------|
| Framework | React 19 |
| Language | TypeScript |
| Build | Vite 7 |
| 3D Graphics | Three.js, React Three Fiber |
| Styling | CSS (no framework) |

### Component Structure

```
src/
├── App.tsx                 # Main application component
├── main.tsx                # Entry point
├── tauri-invoke.ts         # Tauri IPC wrapper with mocks
├── styles.css              # Global styles
│
├── hooks/                  # Custom React hooks
│   ├── useActionTracker.ts     # Action tracking for intent prediction
│   ├── useAnatomy3DNavigation.ts # 3D viewer control
│   ├── useJourneyContext.ts    # Journey context for chat
│   └── useUserDemographics.ts  # Demographics management
│
├── utils/                  # Utility functions
│   ├── anatomy3DEventBus.ts    # Cross-component communication
│   ├── intentEventBus.ts       # Intent prediction events
│   └── regionToSystemMapper.ts # Body region mapping
│
├── components/             # Shared UI components
│   ├── adaptive/           # Complexity-adaptive components
│   └── voice/              # Voice input components
│
├── education/              # Educational content panels
│   ├── UnifiedEducationPanel.tsx
│   ├── HistologyPanel.tsx
│   ├── PhysiologyPanel.tsx
│   └── PathologyPanel.tsx
│
└── [Feature Components]    # Main feature components
    ├── AnatomyViewer.tsx       # 3D anatomy viewer
    ├── BodyCentricHome.tsx     # Main home screen
    ├── ChatView.tsx            # AI chat interface
    ├── SymptomExplorer.tsx     # Symptom exploration
    ├── MedicationExplorer.tsx  # Medication learning
    ├── ConditionSimulator.tsx  # Disease progression
    ├── MedicalEncyclopedia.tsx # Knowledge base
    └── ...
```

### State Management

The application uses React's built-in state management:

1. **Local State** - `useState` for component-specific state
2. **Custom Hooks** - Encapsulate complex state logic
3. **Event Buses** - Cross-component communication without prop drilling
4. **Context** - Limited use for truly global state

### Lazy Loading

Heavy components are lazy-loaded to optimize initial load time:

```typescript
const AnatomyViewer = lazy(() => import('./AnatomyViewer'));
const SymptomExplorer = lazy(() => import('./SymptomExplorer'));
```

---

## Backend Architecture

### Tauri Architecture

```
src-tauri/
├── src/
│   ├── main.rs         # Entry point
│   ├── lib.rs          # All Tauri commands
│   └── llm.rs          # On-device LLM for iOS/native
├── Cargo.toml          # Rust dependencies
└── tauri.conf.json     # Tauri configuration
```

### Command Pattern

Tauri commands call TypeScript bridges for complex operations:

```rust
#[tauri::command]
async fn ai_chat(request: AIChatRequest) -> Result<AIChatResponse, String> {
    // Serialize request
    let request_json = serde_json::to_string(&request)?;

    // Call TypeScript bridge
    let output = Command::new("npx")
        .arg("tsx")
        .arg("ai-bridge.ts")
        .arg("chat")
        .arg(&request_json)
        .output()?;

    // Parse response
    serde_json::from_str(&output.stdout)
}
```

### TypeScript Bridges

Bridge files provide Node.js capabilities to the Rust backend:

| Bridge | Purpose |
|--------|---------|
| `tauri-bridge.ts` | Database operations |
| `ai-bridge.ts` | AI/LLM operations |
| `ai-predict-bridge.ts` | Intent prediction |
| `journey-bridge.ts` | Journey tracking |
| `voice-bridge.ts` | Voice processing |

---

## Data Architecture

### Core Data Model

The central data structure is the `BiologicalSelf`:

```typescript
interface BiologicalSelf {
  id: string;
  demographics: Demographics;
  conditions: Condition[];
  medications: Medication[];
  allergies: Allergy[];
  surgicalHistory: Surgery[];
  familyHistory: FamilyHistoryItem[];
  labResults: LabResult[];
  vitalSigns: VitalSign[];
  imaging: ImagingReport[];
  symptoms: Symptom[];
  pharmacogenomics?: PharmacogenomicProfile;
  lifestyle: LifestyleFactors;
  whoopCycles: WhoopCycle[];
  appleHealthDailySummaries: AppleHealthDailySummary[];
  settings: UserSettings;
}
```

### Storage Architecture

```
data/
├── biological-self.db      # Encrypted SQLite database
└── vectors/               # Vector embeddings (LanceDB/ChromaDB)
```

### Encryption

- **Algorithm**: AES-256-GCM
- **Key Derivation**: Argon2id from user passphrase
- **Storage**: Encrypted at rest, decrypted in memory only

---

## AI Architecture

### RAG Pipeline

```
User Question
      │
      v
+-------------+     +------------------+     +--------------+
| Query       |---->| Vector Search    |---->| Context      |
| Processing  |     | (LanceDB/Chroma) |     | Building     |
+-------------+     +------------------+     +--------------+
                           │                        │
                           v                        v
                    +------------------+     +--------------+
                    | Retrieved Chunks |---->| Prompt       |
                    | (w/ Citations)   |     | Construction |
                    +------------------+     +--------------+
                                                   │
                                                   v
                                            +--------------+
                                            | Local LLM    |
                                            | (Ollama)     |
                                            +--------------+
                                                   │
                                                   v
                                            +--------------+
                                            | Response +   |
                                            | Citations    |
                                            +--------------+
```

### Intent Prediction System

```
User Actions
      │
      v
+-------------+     +------------------+     +--------------+
| Action      |---->| Journey          |---->| Prediction   |
| Tracking    |     | Building         |     | Engine       |
+-------------+     +------------------+     +--------------+
      │                    │                        │
      v                    v                        v
+-------------+     +------------------+     +--------------+
| Event Bus   |     | Health Context   |     | Suggested    |
| (broadcast) |     | (conditions,     |     | Shortcuts    |
+-------------+     |  medications)    |     +--------------+
                    +------------------+
```

### Supported Models

| Use Case | Model Options |
|----------|---------------|
| General Chat | Llama 3.1 8B, Qwen 2.5 7B |
| Medical Education | OpenBioLLM, Medical fine-tunes |
| Intent Prediction | DeepSeek R1 14B |
| Embeddings | BGE-base, Nomic-embed |

---

## Security Architecture

### Threat Model

| Threat | Mitigation |
|--------|------------|
| Data breach at company | No company servers hold user data |
| Subpoena for user data | We don't have it to give |
| Sale to third parties | Nothing to sell |
| Model training on user data | Local model, no upload |

### Privacy Guarantees

1. **No Network Calls** - Zero telemetry, analytics, or crash reports
2. **Local Encryption** - AES-256 with user-controlled key
3. **Open Source** - All code auditable for verification
4. **Reproducible Builds** - Build process is transparent

### Data Flow Security

```
User Passphrase (never stored)
        │
        v
   ┌─────────┐
   │ Argon2  │ ─── Memory-hard key derivation
   └────┬────┘
        │
        v
   256-bit Key
        │
        v
   ┌─────────┐
   │ AES-256 │ ─── Encrypts all user data
   └────┬────┘
        │
        v
   Encrypted SQLite DB (local file)
```

---

## Module Architecture

### Core Modules

```
core/
├── biological-self/    # User health data model
├── anatomy/           # Anatomical system content
│   ├── cardiovascular/
│   ├── respiratory/
│   ├── digestive/
│   └── ...
├── physiology/        # Physiology pathways
├── intent-prediction/ # User intent prediction
├── knowledge-base/    # Medical knowledge storage
├── labs/              # Lab result interpretation
├── vitals/            # Vital sign processing
├── quiz/              # Assessment system
├── patient-education/ # Educational content
└── ai/                # AI integration
```

### Module Pattern

Each module follows a consistent structure:

```
module/
├── types.ts      # TypeScript type definitions
├── index.ts      # Public API exports
├── store.ts      # State/data management
└── README.md     # Module documentation
```

---

## Performance Considerations

### Initial Load Optimization

1. **Lazy Loading** - Heavy components loaded on demand
2. **Code Splitting** - Vite automatic chunk splitting
3. **Asset Optimization** - 3D models loaded progressively

### Runtime Performance

1. **Event Debouncing** - Prevents excessive updates
2. **Memoization** - React.memo for expensive components
3. **Virtual Lists** - For long scrollable lists
4. **WebGL Optimization** - Three.js best practices

### Memory Management

1. **Cleanup on Unmount** - Hooks clean up subscriptions
2. **Model Unloading** - 3D models freed when not visible
3. **History Limits** - Event history capped at 100 items

---

## Future Architecture Considerations

### Mobile (Planned)

- iOS app with on-device LLM (llm.rs module)
- Encrypted sync between user's devices
- No cloud intermediary

### Accessibility

- Screen reader support
- High contrast modes
- Keyboard navigation
- Voice control

### Internationalization

- Translation infrastructure in place
- Medical terminology translation support
- RTL language support planned
