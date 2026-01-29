# The Biological Self - Master Blueprint

> **Version**: 2.2
> **Last Updated**: 2026-01-28
> **Status**: Active Development (Phase 6) - Layer-Condition Integration & AI Voice Navigation

---

## ⚡ START HERE - NEW SESSION

**Copy-paste this prompt when starting a new Claude Code session:**

```
Read BLUEPRINT.md and the HANDOFF SUMMARY at the end of progress.txt.

Then:
1. Check if there are any completed background agents from the previous session using TaskOutput
2. For each completed agent, document what files were created
3. Run `npx tsc --noEmit | grep -c "error TS"` to get current error count
4. Determine: Did the previous batch complete, or was it interrupted?
5. If interrupted: Create continuation agents to finish incomplete work
6. If complete: Start the next batch as documented in progress.txt

Follow the continuation protocol. Launch agents in batches of 10.
```

---

## Table of Contents

1. [Project Vision](#project-vision)
2. [Architecture Overview](#architecture-overview)
3. [**Centralized 3D Anatomy Main Screen**](#centralized-3d-anatomy-main-screen)
4. [**Regional Encyclopedia System**](#regional-encyclopedia-system)
5. [**Patient Data ↔ Anatomy Integration**](#patient-data--anatomy-integration)
6. [**Layer-Condition Integration**](#layer-condition-integration) ⭐ NEW
7. [**Universal 5-Level Complexity**](#universal-5-level-complexity) ⭐ NEW
8. [**AI Voice Navigation**](#ai-voice-navigation) ⭐ NEW
9. [Feature Status (100 User Stories)](#feature-status)
10. [Content Module Blueprint](#content-module-blueprint)
11. [Batch Completion Plan](#batch-completion-plan)
12. [Technical Specifications](#technical-specifications)
13. [Continuation Protocol](#continuation-protocol)

---

## Project Vision

**The Biological Self** is a privacy-first, offline-capable medical education and health tracking desktop application built with Tauri (Rust) and React. It combines:

- **3D Anatomical Visualization** (Three.js with Z-Anatomy models)
- **Personal Health Data Tracking** (encrypted local storage)
- **AI-Powered Education** (local LLM via Ollama)
- **Medical Encyclopedia** (RAG-powered with OpenStax, StatPearls)
- **Symptom-Anatomy Integration**
- **Medication-Physiology Visualization**
- **Disease Progression Simulation**

### Core Principles
1. **Privacy First**: All data stays on device, encrypted with user's passphrase
2. **Offline Capable**: Works without internet (local LLM, local database)
3. **Multi-Level Education**: 5 complexity levels (8th grade → Medical Professional)
4. **Clinically Accurate**: Based on OpenStax, StatPearls, FMA ontology

---

## Architecture Overview

```
biological-self/
├── src/                    # React Frontend
│   ├── components/         # UI Components
│   ├── contexts/           # React Contexts
│   ├── hooks/              # Custom Hooks
│   ├── anatomy/            # 3D Anatomy Viewer
│   ├── settings/           # Settings System
│   ├── search/             # Global Search
│   ├── vitals/             # Vital Signs Tracker
│   └── offline/            # Offline Support
│
├── core/                   # Core Business Logic
│   ├── content/            # Educational Content (521+ files)
│   ├── ai/                 # Ollama Integration
│   ├── rag/                # RAG Pipeline
│   ├── biological-self/    # Health Data Store
│   ├── exploration/        # Symptom-Anatomy Mapping
│   ├── medical-simulation/ # Medications, Conditions
│   └── intent-prediction/  # Adaptive UI System
│
├── src-tauri/              # Rust Backend (Tauri)
│   └── src/lib.rs          # IPC Commands
│
└── assets/                 # Static Assets
    └── anatomy/            # 3D Models (GLTF)
```

---

## Centralized 3D Anatomy Main Screen

### Vision

The 3D anatomical model is THE primary interface for the entire application. Users navigate their health by exploring their own body - every region contains:

1. **Anatomical Layers** (skin → muscle → bone → connective tissue → organs)
2. **Educational Content** (pathology, histology, physiology for that region)
3. **Personal Medical History** (their conditions, symptoms, medications affecting that region)

### User Experience Flow

```
User opens app
    ↓
3D Body Model (main screen) - personalized to user's demographics
    ↓
User taps/clicks body region (e.g., right forearm)
    ↓
Radial context menu appears with:
    • Layers (skin, muscle, bone, vessels, nerves)
    • Encyclopedia (anatomy, physiology, pathology, histology)
    • My Health (conditions, symptoms, medications for this region)
    • Ask AI (region-specific questions)
    ↓
User selects "My Health" → sees their right forearm fracture history
User selects "Layers" → toggles through skin → muscle → bone
User selects "Encyclopedia" → learns about radius/ulna anatomy
```

### Architecture: Anatomy Main Screen

```
src/
├── AnatomyMainScreen.tsx           # THE main app screen
│   ├── Anatomy3DViewer/            # Central 3D model
│   │   ├── PersonalizedBodyModel   # Adjusted to user demographics
│   │   ├── HealthOverlay           # Conditions/symptoms visualized
│   │   ├── LayerController         # Skin → bone layer switching
│   │   └── RegionSelector          # Click/tap region detection
│   │
│   ├── RegionalContextMenu/        # Radial menu on selection
│   │   ├── LayersPanel             # Toggle anatomical layers
│   │   ├── EncyclopediaPanel       # Educational content
│   │   ├── MyHealthPanel           # Personal medical data
│   │   └── AskAIPanel              # Region-specific AI chat
│   │
│   └── RegionalDetailView/         # Expanded view for selected region
│       ├── AnatomyTab              # Structures in region
│       ├── PhysiologyTab           # Functions/processes
│       ├── PathologyTab            # Conditions affecting region
│       ├── HistologyTab            # Tissue/cellular view
│       └── MyDataTab               # User's personal health data
```

### Layer System Per Region

Each body region supports 5+ viewable layers:

```typescript
interface RegionalLayers {
  regionId: string;           // e.g., 'right-forearm'
  layers: {
    skin: {
      structures: ['epidermis', 'dermis', 'subcutaneous'];
      visible: boolean;
      opacity: number;
    };
    muscle: {
      structures: ['flexor-carpi-radialis', 'brachioradialis', ...];
      visible: boolean;
    };
    bone: {
      structures: ['radius', 'ulna'];
      visible: boolean;
    };
    vessels: {
      structures: ['radial-artery', 'cephalic-vein', ...];
      visible: boolean;
    };
    nerves: {
      structures: ['median-nerve', 'radial-nerve', ...];
      visible: boolean;
    };
  };
}
```

---

## Regional Encyclopedia System

### Concept

Every anatomical region is a "mini-encyclopedia" containing ALL relevant educational content:

- **Anatomy**: Structures present (bones, muscles, vessels, nerves)
- **Physiology**: Functions and processes occurring in region
- **Pathology**: Conditions that can affect the region
- **Histology**: Tissue types and microscopic appearance
- **Physical Exam**: How to examine this region clinically
- **Imaging**: What it looks like on X-ray, CT, MRI, ultrasound

### Master Region Registry

```typescript
// core/encyclopedia/regions/registry.ts

interface AnatomicalRegion {
  id: string;                      // 'body.upper-limb.forearm.right'
  name: string;                    // 'Right Forearm'
  fmaIds: string[];               // FMA ontology IDs for structures
  parentRegion: string | null;    // 'body.upper-limb.right'
  childRegions: string[];         // More specific sub-regions

  // Anatomical content
  structures: {
    bones: StructureRef[];
    muscles: StructureRef[];
    vessels: StructureRef[];
    nerves: StructureRef[];
    organs: StructureRef[];
  };

  // Educational content links
  content: {
    anatomy: ContentRef[];
    physiology: ContentRef[];
    pathology: ContentRef[];
    histology: HistologyRef[];
    physicalExam: ContentRef[];
    imaging: ImagingRef[];
  };

  // 3D model mapping
  meshIds: string[];              // GLB model mesh IDs for this region
  defaultCamera: CameraPosition;  // Best viewing angle
}
```

### Region Hierarchy

```
body
├── head
│   ├── cranium (skull, brain, meninges)
│   ├── face (eyes, nose, mouth, ears)
│   └── neck (cervical spine, trachea, esophagus, vessels)
├── torso
│   ├── thorax
│   │   ├── chest-wall (ribs, sternum, intercostals)
│   │   ├── mediastinum (heart, great vessels, trachea)
│   │   └── lungs (left, right with lobes)
│   ├── abdomen
│   │   ├── upper (liver, stomach, spleen, pancreas)
│   │   ├── mid (small intestine, colon)
│   │   └── lower (bladder, reproductive organs)
│   └── pelvis (hip bones, pelvic floor)
├── upper-limb
│   ├── shoulder (glenohumeral, rotator cuff)
│   ├── arm (humerus, biceps, triceps)
│   ├── elbow (joint, epicondyles)
│   ├── forearm (radius, ulna, flexors, extensors)  ← RIGHT FOREARM EXAMPLE
│   ├── wrist (carpal bones, carpal tunnel)
│   └── hand (metacarpals, phalanges, intrinsics)
└── lower-limb
    ├── hip (acetabulum, femoral head)
    ├── thigh (femur, quadriceps, hamstrings)
    ├── knee (joint, menisci, ligaments)
    ├── leg (tibia, fibula, calf muscles)
    ├── ankle (talus, malleoli)
    └── foot (tarsals, metatarsals, plantar)
```

### Content Aggregation Query

```typescript
// Get ALL content for a region
function getRegionalEncyclopedia(regionId: string): RegionalEncyclopedia {
  return {
    region: getRegion(regionId),

    // Aggregate from all content sources
    anatomy: getAnatomyContent(regionId),
    physiology: getPhysiologyContent(regionId),
    pathology: getPathologyContent(regionId),
    histology: getHistologyContent(regionId),
    physicalExam: getPhysicalExamContent(regionId),

    // Include child regions
    subRegions: getChildRegions(regionId).map(getRegionalEncyclopedia),

    // 5-level educational content
    complexityLevels: [1, 2, 3, 4, 5],
  };
}
```

---

## Patient Data ↔ Anatomy Integration

### Vision

The user's personal medical history is VISUALIZED on their 3D body model:

- **Conditions** highlighted on affected regions (e.g., right forearm fracture → radius bone highlighted)
- **Symptoms** shown as indicators on their anatomical source
- **Medications** show their target organs/systems
- **Lab abnormalities** highlight relevant organs (high ALT → liver)

### Anatomy-Patient Data Bridge

```typescript
// core/anatomy-patient-bridge/types.ts

interface AnatomyPatientBridge {
  // Map conditions to affected anatomy
  conditionsByRegion: Map<RegionId, PatientCondition[]>;

  // Map symptoms to anatomical sources
  symptomsByRegion: Map<RegionId, PatientSymptom[]>;

  // Map medications to target organs
  medicationTargets: Map<RegionId, PatientMedication[]>;

  // Map abnormal labs to relevant organs
  labsByOrgan: Map<RegionId, AbnormalLab[]>;
}

interface PatientCondition {
  condition: Condition;          // From BiologicalSelf
  affectedRegions: {
    regionId: string;            // 'body.upper-limb.forearm.right'
    laterality: 'left' | 'right' | 'bilateral';
    specificity: string;         // 'distal radius'
    visualizationType: 'highlight' | 'overlay' | 'badge';
    severity: 'mild' | 'moderate' | 'severe';
  }[];
}
```

### Extended Condition Model

```typescript
// core/biological-self/types.ts - EXTENDED

interface Condition {
  // ... existing fields ...

  // NEW: Anatomical mapping
  affectedAnatomy?: {
    regionId: string;           // Hierarchical region ID
    laterality?: 'left' | 'right' | 'bilateral';
    structures?: string[];      // Specific FMA structure IDs
    effectType?: AnatomicalEffectType; // fracture, inflammation, etc.
  }[];

  // NEW: Imaging correlation
  relatedImaging?: string[];    // IDs of imaging studies showing this
}

type AnatomicalEffectType =
  | 'fracture' | 'inflammation' | 'infection' | 'tumor'
  | 'atrophy' | 'hypertrophy' | 'ischemia' | 'necrosis'
  | 'degeneration' | 'fibrosis' | 'edema' | 'hemorrhage';
```

### Condition-to-Anatomy Mapping Database

```typescript
// core/anatomy-patient-bridge/condition-anatomy-map.ts

const CONDITION_ANATOMY_MAP: Record<string, AnatomyMapping> = {
  // Cardiovascular
  'hypertension': {
    primaryRegions: ['body.torso.thorax.heart', 'body.vessels'],
    affectedSystems: ['cardiovascular'],
    visualize: { heart: 'highlight', vessels: 'overlay' }
  },

  // Musculoskeletal
  'forearm-fracture': {
    primaryRegions: ['body.upper-limb.forearm'],
    structures: ['radius', 'ulna'],
    requiresLaterality: true,
    visualize: { bone: 'highlight' }
  },

  // Respiratory
  'asthma': {
    primaryRegions: ['body.torso.thorax.lungs'],
    affectedSystems: ['respiratory'],
    structures: ['bronchi', 'bronchioles'],
    visualize: { airways: 'highlight' }
  },

  // Endocrine
  'type-2-diabetes': {
    primaryRegions: ['body.torso.abdomen.pancreas'],
    secondaryRegions: ['body.torso.abdomen.liver', 'body.vessels'],
    affectedSystems: ['endocrine', 'cardiovascular'],
    visualize: { pancreas: 'highlight', vessels: 'overlay' }
  },

  // ... hundreds more conditions mapped
};
```

### Lab-to-Organ Mapping

```typescript
// core/anatomy-patient-bridge/lab-organ-map.ts

const LAB_ORGAN_MAP: Record<string, OrganMapping> = {
  // Liver labs
  'ALT': { organ: 'liver', regionId: 'body.torso.abdomen.liver' },
  'AST': { organ: 'liver', regionId: 'body.torso.abdomen.liver' },
  'ALP': { organ: 'liver', regionId: 'body.torso.abdomen.liver' },
  'bilirubin': { organ: 'liver', regionId: 'body.torso.abdomen.liver' },

  // Kidney labs
  'creatinine': { organ: 'kidney', regionId: 'body.torso.abdomen.kidneys' },
  'BUN': { organ: 'kidney', regionId: 'body.torso.abdomen.kidneys' },
  'GFR': { organ: 'kidney', regionId: 'body.torso.abdomen.kidneys' },

  // Cardiac labs
  'troponin': { organ: 'heart', regionId: 'body.torso.thorax.heart' },
  'BNP': { organ: 'heart', regionId: 'body.torso.thorax.heart' },

  // Pancreas labs
  'glucose': { organ: 'pancreas', regionId: 'body.torso.abdomen.pancreas' },
  'HbA1c': { organ: 'pancreas', regionId: 'body.torso.abdomen.pancreas' },
  'lipase': { organ: 'pancreas', regionId: 'body.torso.abdomen.pancreas' },

  // Thyroid labs
  'TSH': { organ: 'thyroid', regionId: 'body.neck.thyroid' },
  'T4': { organ: 'thyroid', regionId: 'body.neck.thyroid' },
  'T3': { organ: 'thyroid', regionId: 'body.neck.thyroid' },
};
```

### Health Visualization on 3D Model

```typescript
// src/anatomy/HealthOverlay.tsx

interface HealthOverlayProps {
  patientData: BiologicalSelf;
  anatomyBridge: AnatomyPatientBridge;
}

// Visualization types
type VisualizationType =
  | 'highlight'      // Color the structure differently
  | 'pulse'          // Animated pulsing effect
  | 'badge'          // Small indicator icon
  | 'heatmap'        // Gradient showing severity
  | 'overlay'        // Semi-transparent layer
  | 'particle';      // Particle effect (e.g., blood flow)

// Render patient's conditions on 3D model
function renderHealthOverlay(bridge: AnatomyPatientBridge) {
  // Highlight affected regions for active conditions
  bridge.conditionsByRegion.forEach((conditions, regionId) => {
    conditions.forEach(condition => {
      highlightRegion(regionId, {
        color: getSeverityColor(condition.severity),
        type: condition.visualizationType,
        label: condition.name
      });
    });
  });

  // Show symptom indicators
  bridge.symptomsByRegion.forEach((symptoms, regionId) => {
    addSymptomIndicator(regionId, symptoms);
  });

  // Show abnormal lab badges on organs
  bridge.labsByOrgan.forEach((labs, regionId) => {
    addLabBadge(regionId, labs);
  });
}
```

### Implementation Files Needed

```
core/
├── anatomy-patient-bridge/
│   ├── types.ts                    # AnatomyPatientBridge interface
│   ├── bridge.ts                   # Main bridge implementation
│   ├── condition-anatomy-map.ts    # Condition → region mapping
│   ├── lab-organ-map.ts            # Lab → organ mapping
│   ├── medication-target-map.ts    # Drug → target organ mapping
│   └── index.ts
│
├── encyclopedia/
│   ├── regions/
│   │   ├── registry.ts             # Master region registry
│   │   ├── hierarchy.ts            # Region parent/child relationships
│   │   ├── content-aggregator.ts   # Aggregate content per region
│   │   └── index.ts
│   │
│   └── queries/
│       ├── getRegionalContent.ts   # Query content by region
│       ├── getRegionalPathology.ts # Query pathology by region
│       └── index.ts

src/
├── AnatomyMainScreen/
│   ├── AnatomyMainScreen.tsx       # THE main screen
│   ├── RegionalContextMenu.tsx     # Radial menu
│   ├── RegionalDetailView.tsx      # Expanded region view
│   ├── HealthOverlay.tsx           # Patient data visualization
│   ├── LayerController.tsx         # Layer switching UI
│   └── index.ts
```

---

## Layer-Condition Integration

### Vision

When a user selects an anatomical layer (skin, muscle, bone, vessels, nerves, organs, connective), ALL content filters to show only information relevant to that layer:

- **Pathology Tab**: Shows only conditions affecting that layer (e.g., select "bone" → see fractures, osteoporosis, osteomyelitis)
- **My Data Tab**: Groups user's conditions by the layer they affect
- **Context Menu**: Shows condition counts per layer

### Layer Types

```typescript
type AnatomicalLayer =
  | 'skin'        // Integumentary - epidermis, dermis, subcutaneous
  | 'muscle'      // Muscular - skeletal, smooth, cardiac
  | 'bone'        // Skeletal - bones, cartilage, joints
  | 'vessels'     // Cardiovascular/Lymphatic - arteries, veins, lymphatics
  | 'nerves'      // Nervous - CNS, PNS, autonomic
  | 'organs'      // Visceral - heart, lungs, liver, kidneys, etc.
  | 'connective'; // Connective tissue - tendons, ligaments, fascia
```

### Condition-Layer Mapping

Each condition in the database maps to one or more layers:

```typescript
interface ConditionAnatomyMapping {
  conditionId: string;
  name: string;
  icdCode?: string;
  affectedRegions: string[];
  affectedLayers: AnatomicalLayer[];  // ⭐ NEW
  effectType: 'fracture' | 'inflammation' | 'infection' | 'tumor' | 'degeneration' | ...;
  visualizationType: 'highlight' | 'pulse' | 'badge' | 'overlay';
}

// Example mappings:
// - Osteoporosis → ['bone']
// - Cellulitis → ['skin', 'connective']
// - Myocarditis → ['muscle', 'organs']
// - Peripheral neuropathy → ['nerves']
// - Atherosclerosis → ['vessels']
```

### Implementation Files

```
src/
├── utils/
│   └── layerConditionUtils.ts      # Filter/group conditions by layer
├── components/
│   └── LayerFilterBar.tsx          # Reusable layer filter UI
└── AnatomyMainScreen/
    ├── tabs/
    │   ├── PathologyTab.tsx        # Now accepts selectedLayer prop
    │   └── MyDataTab.tsx           # Now groups by layer
    └── RegionalDetailView.tsx      # Layer state management

core/
└── anatomy-patient-bridge/
    └── condition-anatomy-map.ts    # Updated with affectedLayers
```

---

## Universal 5-Level Complexity

### Vision

ALL content throughout the app respects the user's chosen complexity level:

| Level | Name | Target | Description |
|-------|------|--------|-------------|
| 1 | Foundation | 8th Grade | Simple terms, everyday language, basic concepts |
| 2 | Intermediate | High School | Basic medical terminology, more detail |
| 3 | Advanced | College | Full terminology, mechanisms explained |
| 4 | Comprehensive | Graduate | In-depth mechanisms, research context |
| 5 | Clinical | MD/Professional | Clinical correlations, advanced concepts |

### Context Provider

```typescript
// src/contexts/ComplexityContext.tsx

interface ComplexityContextValue {
  level: 1 | 2 | 3 | 4 | 5;
  setLevel: (level: ComplexityLevel) => void;

  // Per-section overrides
  sectionLevels: Record<string, ComplexityLevel>;
  setSectionLevel: (section: string, level: ComplexityLevel) => void;
  getSectionLevel: (section: string) => ComplexityLevel;
}
```

### How Each Tab Adapts

**Histology Tab:**
- Level 1: Simple tissue names, basic descriptions
- Level 2: Tissue types with detail, basic staining info
- Level 3: Full detail, annotations visible, all stains
- Level 4: Clinical correlations, research context
- Level 5: Advanced histopathology features

**Pathology Tab:**
- Level 1: Condition name, one-line "what it means"
- Level 2: Symptoms, basic causes
- Level 3: Full pathophysiology, mechanisms
- Level 4: Diagnostic criteria, treatment overview
- Level 5: Differential diagnosis, clinical pearls

**Anatomy Tab:**
- Level 1: Simple structure names, basic function
- Level 2: Structure names with locations
- Level 3: Full terminology, relationships
- Level 4: Innervation, blood supply, variations
- Level 5: Surgical anatomy, clinical landmarks

**My Data Tab:**
- Level 1: "You have [condition]. Here's what that means..."
- Level 2: Condition + symptoms in accessible language
- Level 3: Medical details, medication mechanisms
- Level 4: Pathophysiology of YOUR conditions
- Level 5: Prognosis factors, treatment rationale

### Reusable Components

```typescript
// ComplexitySelector - drop into any tab
<ComplexitySelector
  level={level}
  onChange={setLevel}
  compact={true}
  showDescriptions={false}
/>

// LayerFilterBar - filter by anatomical layer
<LayerFilterBar
  selectedLayer={selectedLayer}
  onLayerChange={setSelectedLayer}
  counts={conditionCounts}
  showCounts={true}
/>
```

### Implementation Files

```
src/
├── contexts/
│   └── ComplexityContext.tsx       # Global complexity state
├── components/
│   ├── ComplexitySelector.tsx      # Reusable selector UI
│   └── LayerFilterBar.tsx          # Layer filter UI
└── AnatomyMainScreen/
    └── tabs/
        ├── AnatomyTab.tsx          # Complexity-aware
        ├── PhysiologyTab.tsx       # Already had complexity
        ├── PathologyTab.tsx        # Complexity + Layer filtering
        ├── HistologyTab.tsx        # Complexity-aware
        └── MyDataTab.tsx           # Complexity + Layer grouping
```

---

## AI Voice Navigation

### Vision

Users can navigate the 3D anatomy model using natural voice commands and AI chat. The system understands anatomy-related queries and automatically navigates to the requested structures.

**Voice Commands Examples:**
- "Show me the heart"
- "Navigate to the lungs"
- "Switch to the muscle layer"
- "Highlight the brain"
- "Compare the left and right ventricles"
- "Reset the view"

**AI Chat Integration:**
- Type or speak anatomy questions
- AI responses include clickable anatomy terms
- "View in 3D" buttons in AI responses
- Context-aware navigation suggestions

### Architecture

```
src/
├── voice/
│   └── VoiceCommandParser.ts       # Parse voice/text commands
├── ai/
│   ├── AnatomyIntentRecognizer.ts  # AI intent recognition
│   ├── AINavigationProvider.tsx    # Navigation context
│   └── components/
│       ├── AIChatVoiceInput.tsx    # Voice input for chat
│       ├── AINavigationSuggestions.tsx  # Smart suggestions
│       └── SmartAnatomyResponse.tsx     # Clickable anatomy
├── contexts/
│   └── VoiceCommandContext.tsx     # Global voice state
├── components/
│   ├── VoiceFeedback.tsx           # Visual/audio feedback
│   ├── SmartNavigationSuggestions.tsx   # Navigation suggestions
│   └── VoiceAnatomySearch.tsx      # Voice search
├── hooks/
│   └── useVoiceNavigation.ts       # Voice navigation hook
└── anatomy/
    └── AnatomyActionExecutor.ts    # Execute 3D actions
```

### Key Components

**1. Voice Command Parser** (`src/voice/VoiceCommandParser.ts`)
- 58 anatomy keywords with synonyms
- 30+ navigation patterns
- Fuzzy matching for transcription errors
- Confidence scoring

**2. Anatomy Intent Recognizer** (`src/ai/AnatomyIntentRecognizer.ts`)
- 10 intent types: navigate, layer, compare, explain, etc.
- Entity extraction: region, layer, condition, medication
- Dual mode: AI-powered + rule-based fallback
- React hook for integration

**3. Voice Navigation Hook** (`src/hooks/useVoiceNavigation.ts`)
- Web Speech API integration
- Text command processing (for chat)
- Command history
- Navigation callbacks

**4. AI Chat Voice Integration**
- `AIChatVoiceInput.tsx` - Voice input with wave animation
- `AINavigationSuggestions.tsx` - Context-aware suggestions
- `SmartAnatomyResponse.tsx` - Clickable anatomy terms
- `useSmartNavigation.ts` - Navigation from AI responses

**5. Voice Command Context** (`src/contexts/VoiceCommandContext.tsx`)
- Global voice state management
- 50-command history
- 6 utility hooks
- Error handling with recovery

**6. Anatomy Action Executor** (`src/anatomy/AnatomyActionExecutor.ts`)
- Navigate to regions
- Camera control (zoom, rotate, pan)
- Layer visibility management
- State management with undo/redo
- 30+ anatomical regions database

**7. Voice Feedback** (`src/components/VoiceFeedback.tsx`)
- 8 visual states: idle, listening, processing, success, error
- Animated listening indicator
- Audio feedback
- Auto-hide functionality

**8. Smart Navigation Suggestions** (`src/components/SmartNavigationSuggestions.tsx`)
- Related regions
- Hierarchical navigation (parent/child)
- Contextual suggestions from conversation
- User health-aware recommendations

**9. Voice-Activated Anatomy Search** (`src/components/VoiceAnatomySearch.tsx`)
- Voice + text search
- 35+ anatomy structures indexed
- Fuzzy matching for voice input
- Recent/trending searches

### Usage Examples

```typescript
// Voice Navigation Hook
const { startListening, processCommand } = useVoiceNavigation({
  onNavigate: (regionId) => navigateToRegion(regionId),
  onLayerChange: (layer) => setActiveLayer(layer),
});

// Process voice command
await processCommand("show me the heart");

// Voice Command Context
const { startListening, lastCommand } = useVoiceCommand();

// AI Navigation
const { navigateFromAI } = useAINavigation();
navigateFromAI('heart', 'User asked about cardiac function');
```

### Voice Command Patterns

| Command Type | Examples |
|--------------|----------|
| Navigation | "Show me the [region]", "Go to [region]", "Navigate to [region]" |
| Layer | "Show [layer] layer", "Switch to [layer]" |
| Highlight | "Highlight [region]", "Focus on [region]" |
| Compare | "Compare [region A] and [region B]" |
| Reset | "Reset view", "Show all", "Go back" |

### Implementation Status

- ✅ Voice Command Parser
- ✅ Anatomy Intent Recognizer
- ✅ Voice Navigation Hook
- ✅ AI Chat Voice Integration
- ✅ Voice Command Context
- ✅ Anatomy Action Executor
- ✅ Voice Feedback Component
- ✅ Smart Navigation Suggestions
- ✅ Voice-Activated Anatomy Search
- ✅ TypeScript declarations (0 errors)

---

## Feature Status

### User Stories: 100 total (US-009 to US-108)

All 100 user stories are marked as `passes: true` in the PRD, but many need content completion.

| Phase | User Stories | Description |
|-------|--------------|-------------|
| 1 | US-009 to US-019 | Core App (Tauri, Auth, Dashboard, AI Chat) |
| 2 | US-020 to US-027 | 3D Anatomy Viewer |
| 3 | US-028 to US-072 | Educational Content & Learning |
| 4 | US-073 to US-095 | Medical Simulation (Current Phase) |
| 5 | US-096 to US-108 | Adaptive Intent Prediction |

---

## Content Module Blueprint

### Current Status
- **Existing Files**: 521 TypeScript files in core/content/
- **Content Directories**: 280+ specialized directories
- **TypeScript Errors**: 1056 (802 are missing module errors)

### Content Structure

Each content module exports `EducationalContent` type with 5 complexity levels:

```typescript
interface EducationalContent {
  id: string;
  title: string;
  category: string;
  subcategory?: string;
  description: string;
  content: {
    [key: number]: {  // 1-5 complexity levels
      summary: string;
      details: string;
      keyPoints: string[];
      commonMisconceptions?: string[];
      clinicalRelevance?: string;
    };
  };
  relatedTopics: string[];
  references: string[];
  lastUpdated: string;
}
```

---

## Complete Content Directory Map

### Body Systems (Anatomy & Physiology)

#### 1. Cardiovascular System
```
core/content/cardiovascular/
├── anatomy/
│   ├── heart-chambers.ts ✅
│   ├── cardiac-valves.ts ✅
│   ├── coronary-arteries.ts ✅
│   └── great-vessels.ts ✅
├── physiology/
│   ├── cardiac-cycle.ts ✅
│   ├── blood-pressure-regulation.ts ✅
│   ├── cardiac-output.ts ✅
│   └── ecg-basics.ts ✅
└── index.ts ✅

core/content/physiology/cardiovascular/
├── cardiac-cycle.ts ✅
├── blood-pressure.ts ✅
├── cardiac-output.ts ✅
├── electrocardiography.ts ✅
├── hemodynamics.ts ✅
└── index.ts ✅
```

#### 2. Respiratory System
```
core/content/respiratory/
├── anatomy/
│   ├── upper-airway.ts ✅
│   ├── lower-airway.ts ✅
│   ├── lung-lobes.ts ✅
│   └── pleura.ts ✅
├── physiology/
│   ├── gas-exchange.ts ✅
│   ├── ventilation.ts ✅
│   ├── lung-compliance.ts ✅
│   └── oxygen-transport.ts ✅
├── clinical/
├── histology/
├── pathology/
└── index.ts ✅
```

#### 3. Nervous System
```
core/content/nervous/
├── anatomy/
│   ├── brain-lobes.ts ✅
│   ├── spinal-cord.ts ✅
│   ├── cranial-nerves.ts ✅
│   └── peripheral-nerves.ts ✅
├── physiology/
│   ├── action-potential.ts ✅
│   ├── neurotransmitters.ts ✅
│   ├── reflexes.ts ✅
│   └── sensory-pathways.ts ✅
├── clinical/
├── histology/
├── pathology/
└── index.ts ✅
```

#### 4. Digestive/GI System
```
core/content/digestive/
├── anatomy/
│   ├── gi-tract-overview.ts ✅
│   ├── liver-anatomy.ts ✅
│   ├── pancreas.ts ✅
│   └── gallbladder.ts ✅
└── index.ts ✅

core/content/physiology/gastrointestinal/
├── digestion.ts ✅
├── absorption.ts ✅
├── motility.ts ✅
├── liver-function.ts ✅
└── index.ts ✅
```

#### 5. Renal/Urinary System
```
core/content/renal/
├── anatomy/
│   ├── kidney-structure.ts ✅
│   ├── nephron.ts ✅
│   ├── ureter-bladder.ts ✅
│   └── urethra.ts ✅
├── physiology/
│   ├── glomerular-filtration.ts ✅
│   ├── tubular-function.ts ✅
│   ├── acid-base.ts ✅
│   └── fluid-balance.ts ✅
├── clinical/
├── histology/
├── pathology/
└── index.ts ✅
```

#### 6. Endocrine System
```
core/content/endocrine/
├── anatomy/
│   ├── pituitary.ts ✅
│   ├── thyroid.ts ✅
│   ├── adrenal.ts ✅
│   └── pancreatic-islets.ts ✅
├── physiology/
│   ├── hormone-signaling.ts ✅
│   ├── feedback-loops.ts ✅
│   ├── glucose-regulation.ts ✅
│   └── calcium-regulation.ts ✅
├── clinical/
├── histology/
├── pathology/
└── index.ts ✅
```

#### 7. Immune System
```
core/content/immune/
├── anatomy/
│   ├── lymph-nodes.ts ✅
│   ├── spleen.ts ✅
│   ├── thymus.ts ✅
│   └── bone-marrow.ts ✅
├── physiology/
│   ├── innate-immunity.ts ✅
│   ├── adaptive-immunity.ts ✅
│   ├── antibodies.ts ✅
│   └── inflammation.ts ✅
├── clinical/
├── histology/
├── pathology/
└── index.ts ✅
```

#### 8. Musculoskeletal System
```
core/content/musculoskeletal/
├── anatomy/
│   ├── bones-overview.ts ✅
│   ├── joints.ts ✅
│   ├── muscles-overview.ts ✅
│   └── connective-tissue.ts ✅
├── physiology/
│   ├── muscle-contraction.ts ✅
│   ├── bone-remodeling.ts ✅
│   └── calcium-homeostasis.ts ✅
└── index.ts ✅
```

#### 9. Reproductive System
```
core/content/reproductive/
├── female/
│   ├── ovaries.ts ✅
│   ├── uterus.ts ✅
│   ├── menstrual-cycle.ts ✅
│   └── pregnancy.ts ✅
├── male/
│   ├── testes.ts ✅
│   ├── prostate.ts ✅
│   └── spermatogenesis.ts ✅
├── physiology/
├── clinical/
├── histology/
├── pathology/
└── index.ts ✅
```

#### 10. Integumentary System
```
core/content/integumentary/
├── anatomy/
│   ├── skin-layers.ts ✅
│   ├── hair-nails.ts ✅
│   └── glands.ts ✅
└── index.ts ✅
```

---

### Medical Specialties

#### Cardiology
```
core/content/cardiology/
├── arrhythmias.ts ✅
├── heart-failure.ts ✅
├── coronary-disease.ts ✅
└── index.ts ✅

core/content/specialties/cardiology/
├── arrhythmias/
│   ├── atrial-fibrillation.ts ✅
│   ├── ventricular-tachycardia.ts ✅
│   └── index.ts ✅
└── index.ts ✅
```

#### Neurology
```
core/content/neurology/
├── stroke.ts ✅
├── headache.ts ✅
├── epilepsy.ts ✅
├── multiple-sclerosis.ts ✅
└── index.ts ✅

core/content/specialties/neurology/
└── index.ts ✅
```

#### Pulmonology
```
core/content/pulmonology/
├── anatomy/
├── conditions/
│   ├── asthma.ts ✅
│   ├── copd.ts ✅
│   └── pneumonia.ts ✅
└── index.ts ✅

core/content/specialties/pulmonology/
└── index.ts ✅
```

#### Gastroenterology
```
core/content/gastroenterology/
├── upper-gi/
│   ├── gerd-acid-reflux.ts ✅ (import path fix needed)
│   └── peptic-ulcer.ts ✅
└── index.ts ✅

core/content/specialties/gastroenterology/
├── conditions/
├── procedures/
└── index.ts ✅
```

#### Endocrinology
```
core/content/endocrinology/
├── diabetes/
│   ├── type-1.ts ✅
│   ├── type-2.ts ✅
│   └── management.ts ✅
├── thyroid/
│   ├── hypothyroidism.ts ✅
│   ├── hyperthyroidism.ts ✅
│   └── thyroid-nodules.ts ✅
├── adrenal/
├── pituitary/
├── bone-calcium/
├── metabolic/
├── reproductive-hormones/
└── index.ts ✅
```

#### Nephrology
```
core/content/nephrology/
├── kidney-function/
│   ├── gfr.ts ✅
│   ├── electrolytes.ts ✅
│   └── acid-base.ts ✅
└── index.ts ✅

core/content/specialties/nephrology/
└── index.ts ✅
```

#### Hematology
```
core/content/hematology/
├── anemia/
├── bleeding-disorders/
├── blood-cancers/
├── bone-marrow/
├── clotting-disorders/
├── lab-understanding/
├── living-with/
├── transfusion/
└── index.ts ✅

core/content/specialties/hematology/
├── anemias/
├── bleeding-disorders/
├── diagnostics/
├── leukemias/
├── lymphomas/
├── plasma-cell-disorders/
├── platelet-disorders/
├── therapeutics/
├── thrombotic-disorders/
├── transfusion/
└── index.ts ✅
```

#### Oncology
```
core/content/oncology/
├── basics/
│   ├── cancer-overview.ts ✅
│   └── staging.ts ✅
└── index.ts ✅

core/content/specialties/oncology/
├── cancers/
├── treatment/
└── index.ts ✅
```

#### Infectious Disease
```
core/content/infectious-disease/
├── antibiotic-stewardship/
├── bacterial-infections/
├── common-infections/
├── prevention/
├── serious-infections/
├── viral-infections/
└── index.ts ✅

core/content/specialties/infectious-disease/
└── index.ts ✅
```

#### Rheumatology
```
core/content/rheumatology/
├── autoimmune/
│   ├── rheumatoid-arthritis.ts ✅
│   ├── lupus.ts ✅
│   └── sjogrens.ts ✅
└── index.ts ✅

core/content/specialties/rheumatology/
└── index.ts ✅
```

#### Dermatology
```
core/content/dermatology/
├── basics/
│   ├── skin-lesions.ts ✅
│   └── skin-exam.ts ✅
└── index.ts ✅

core/content/specialties/dermatology/
├── infections/
├── skin-cancer/
└── index.ts ✅
```

#### Ophthalmology
```
core/content/ophthalmology/
├── eye-anatomy.ts ✅
├── common-conditions.ts ✅
└── index.ts ✅

core/content/specialties/ophthalmology/
└── index.ts ✅
```

#### ENT (Otolaryngology)
```
core/content/ent/
├── ear/
│   ├── hearing-loss.ts ✅
│   └── ear-infections.ts ✅
└── index.ts ✅

core/content/specialties/ent/
├── ear/
├── nose/
├── throat/
└── index.ts ✅
```

#### Orthopedics
```
core/content/orthopedics/
├── anatomy/
│   ├── bones.ts ✅
│   └── joints.ts ✅
└── index.ts ✅

core/content/specialties/orthopedics/
├── anatomy/
├── conditions/
├── procedures/
├── rehabilitation/
└── index.ts ✅
```

#### Urology
```
core/content/urology/
├── anatomy/
│   ├── male-urinary.ts ✅
│   └── prostate.ts ✅
└── index.ts ✅

core/content/specialties/urology/
└── index.ts ✅
```

#### OB/GYN
```
core/content/specialties/obgyn/
├── anatomy/
├── conditions/
├── contraception/
├── gynecologic-oncology/
├── labor-delivery/
├── menopause/
├── physiology/
├── pregnancy/
├── prenatal/
├── screening/
└── index.ts ✅
```

#### Pediatrics
```
core/content/pediatrics/
├── development/
│   ├── milestones.ts ✅
│   └── growth.ts ✅
└── index.ts ✅

core/content/specialties/pediatrics/
└── index.ts ✅
```

#### Geriatrics
```
core/content/geriatrics/
├── aging-physiology.ts ✅
├── falls-prevention.ts ✅
├── polypharmacy.ts ✅
└── index.ts ✅

core/content/specialties/geriatrics/
└── index.ts ✅
```

#### Psychiatry
```
core/content/specialties/psychiatry/
├── anxiety-disorders/
├── eating-disorders/
├── medications/
├── mood-disorders/
├── neuroscience/
├── obsessive-compulsive/
├── psychotic-disorders/
├── substance-use/
├── trauma-disorders/
└── index.ts ✅
```

---

### Clinical Skills & Reasoning

#### Clinical Reasoning
```
core/content/clinical-reasoning/
├── diagnostic-frameworks/
│   ├── hypothesis-generation.ts ✅
│   ├── pattern-recognition.ts ✅
│   └── index.ts ✅
├── cognitive-biases/
│   ├── anchoring-bias.ts ✅
│   ├── availability-bias.ts ✅
│   ├── confirmation-bias.ts ✅
│   └── index.ts ✅
├── diagnostic-algorithms/
├── differential-diagnosis/    ❌ NEEDS: core files
├── history-taking/
├── physical-examination/
├── red-flags/                 ❌ NEEDS: core files
├── urgent-referrals/          ❌ NEEDS: core files
└── index.ts ✅
```

#### Physical Examination
```
core/content/physical-exam/
├── general-survey/
├── vital-signs/
├── heent/
├── cardiovascular/
├── respiratory/
├── abdominal/
├── neurological/
├── musculoskeletal/
├── skin/
└── index.ts ✅
```

#### Lab Interpretation
```
core/content/lab-interpretation/
├── cbc-interpretation.ts ✅
├── cmp-interpretation.ts ✅
├── liver-function-tests.ts ✅
├── thyroid-function-tests.ts ✅
├── lipid-panel.ts ✅
├── urinalysis.ts ✅
├── coagulation-studies.ts ✅
├── cardiac-markers.ts ✅
└── index.ts ✅
```

#### Treatment Algorithms
```
core/content/treatment-algorithms/
├── hypertension-algorithm.ts ✅
├── diabetes-algorithm.ts ✅
├── chest-pain-algorithm.ts ✅
├── dyspnea-algorithm.ts ✅
└── index.ts ✅
```

---

### Conditions Database

#### Cardiovascular Conditions
```
core/content/conditions/cardiovascular/
├── index.ts ✅
├── hypertension.ts ✅
├── heart-failure.ts ✅
├── coronary-artery-disease.ts    ❌ MISSING
├── atrial-fibrillation.ts        ❌ MISSING
├── deep-vein-thrombosis.ts       ❌ MISSING
├── pulmonary-embolism.ts         ❌ MISSING
├── peripheral-artery-disease.ts  ❌ MISSING
├── aortic-aneurysm.ts            ❌ MISSING
├── valvular-heart-disease.ts     ❌ MISSING
└── cardiomyopathy.ts             ❌ MISSING
```

#### Other Condition Directories (Need Index Files)
```
core/content/conditions/
├── cardiovascular/     ✅ (needs 8 files)
├── respiratory/        ❌ NEEDS: index.ts + condition files
├── metabolic/          ❌ NEEDS: index.ts + condition files
├── gastrointestinal/   ❌ NEEDS: index.ts + condition files
├── neurological/       ❌ NEEDS: index.ts + condition files
├── mental-health/      ❌ NEEDS: index.ts + condition files
├── musculoskeletal/    ❌ NEEDS: index.ts + condition files
├── oncology/           ❌ NEEDS: index.ts + condition files
├── infectious/         ❌ NEEDS: index.ts + condition files
├── renal/              ❌ NEEDS: index.ts + condition files
├── dermatology/        ❌ NEEDS: index.ts + condition files
├── hematologic/        ❌ NEEDS: index.ts + condition files
└── index.ts ✅
```

---

### Chronic Disease Management

```
core/content/chronic-disease/
├── care-coordination/
│   ├── care-team.ts ✅
│   ├── appointment-preparation.ts ✅
│   └── index.ts ✅
├── self-management/
│   ├── medication-adherence.ts ✅
│   ├── symptom-tracking.ts ✅
│   ├── warning-signs.ts           ❌ MISSING
│   ├── provider-communication.ts  ❌ MISSING
│   └── index.ts ✅
├── diabetes/                      ❌ NEEDS: 6 files
│   ├── blood-sugar-monitoring.ts
│   ├── a1c-targets.ts
│   ├── diet-carb-counting.ts
│   ├── exercise-with-diabetes.ts
│   ├── foot-care.ts
│   └── complication-prevention.ts
├── heart-disease/                 ❌ NEEDS: 6 files
│   ├── blood-pressure-monitoring.ts
│   ├── daily-weight-chf.ts
│   ├── cardiac-medications.ts
│   ├── heart-healthy-diet.ts
│   ├── activity-recommendations.ts
│   └── cardiac-warning-signs.ts
├── copd/                          ❌ NEEDS: 5 files
│   ├── inhaler-technique.ts
│   ├── breathing-exercises.ts
│   ├── trigger-avoidance.ts
│   ├── action-plans.ts
│   └── treatment-escalation.ts
├── kidney-disease/                ❌ NEEDS: 5 files
│   ├── ckd-stages.ts
│   ├── renal-diet.ts
│   ├── fluid-management.ts
│   ├── medication-adjustments.ts
│   └── dialysis-preparation.ts
└── index.ts ✅
```

---

### Genetics & Genomics

```
core/content/genetics/
├── basics/
│   ├── dna-structure.ts ✅
│   ├── gene-expression.ts ✅
│   └── index.ts ✅
├── inheritance/
│   ├── mendelian-inheritance.ts ✅
│   ├── autosomal-dominant.ts ✅
│   ├── autosomal-recessive.ts ✅
│   ├── x-linked.ts ✅
│   ├── mitochondrial.ts ✅
│   ├── complex-inheritance.ts ✅
│   └── index.ts ✅
├── disorders/
│   ├── chromosomal/
│   │   ├── down-syndrome.ts ✅
│   │   ├── turner-syndrome.ts ✅
│   │   └── index.ts ✅
│   ├── single-gene/
│   │   ├── cystic-fibrosis.ts ✅
│   │   ├── huntington.ts ✅
│   │   ├── sickle-cell.ts ✅
│   │   ├── thalassemia.ts ✅
│   │   ├── hemophilia.ts ✅
│   │   └── index.ts ✅
│   └── index.ts ✅
├── testing/
│   ├── genetic-testing-overview.ts ✅
│   ├── prenatal-testing.ts ✅
│   ├── carrier-screening.ts ✅
│   └── index.ts ✅
├── counseling/
│   ├── genetic-counseling-process.ts ✅
│   ├── results-interpretation.ts ✅
│   └── index.ts ✅
├── pharmacogenomics/
│   ├── drug-metabolism.ts ✅
│   ├── cyp-enzymes.ts ✅
│   └── index.ts ✅
├── cancer-genetics/
│   ├── brca-genes.ts ✅
│   ├── lynch-syndrome.ts ✅
│   └── index.ts ✅
└── index.ts ✅ (import path fixes needed)
```

---

### Caregiver Support

```
core/content/caregiver-support/
├── caregiver-basics/
│   ├── role-of-caregiver.ts ✅
│   ├── getting-started.ts ✅
│   └── index.ts ✅
├── practical-skills/
│   ├── medication-management.ts ✅
│   ├── mobility-assistance.ts ✅
│   ├── personal-care.ts ✅
│   └── index.ts ✅
├── condition-specific/
│   ├── dementia-care.ts ✅
│   ├── stroke-recovery.ts ✅
│   ├── cancer-support.ts ✅
│   └── index.ts ✅
├── communication/
│   ├── healthcare-team.ts ✅
│   ├── family-discussions.ts ✅
│   └── index.ts ✅
├── resources/
│   ├── respite-care.ts ✅
│   ├── home-health.ts ✅
│   ├── support-groups.ts ✅
│   └── index.ts ✅
├── self-care/
│   ├── preventing-burnout.ts ✅
│   ├── managing-stress.ts ✅
│   ├── asking-for-help.ts ✅
│   ├── maintaining-relationships.ts ✅
│   ├── grief-and-anticipatory-grief.ts ✅
│   └── index.ts ✅
├── legal-financial/
│   ├── power-of-attorney.ts ✅
│   ├── healthcare-proxy.ts ✅
│   ├── fmla-basics.ts ✅
│   ├── long-term-care-planning.ts    ❌ MISSING
│   └── index.ts ✅
└── index.ts ✅
```

---

### Dental Health

```
core/content/dental-health/
├── anatomy/
│   ├── tooth-anatomy.ts ✅
│   └── index.ts ✅
├── hygiene/                       ❌ NEEDS: 4 files
│   ├── dental-hygiene-basics.ts
│   ├── brushing-techniques.ts
│   ├── flossing-techniques.ts
│   └── professional-cleanings.ts
├── conditions/                    ❌ NEEDS: 6 files
│   ├── cavities-decay.ts
│   ├── gingivitis.ts
│   ├── periodontitis.ts
│   ├── oral-cancer-screening.ts
│   ├── tmj-disorders.ts
│   └── oral-systemic-health.ts
├── procedures/                    ❌ NEEDS: 6 files
│   ├── dental-fillings.ts
│   ├── root-canal-therapy.ts
│   ├── tooth-extraction.ts
│   ├── dental-implants.ts
│   ├── crowns-bridges.ts
│   └── orthodontics-basics.ts
├── emergencies/
│   ├── pediatric-dental-care.ts ✅
│   ├── dental-emergencies.ts ✅
│   ├── dental-trauma.ts           ❌ MISSING
│   ├── dental-infections.ts       ❌ MISSING
│   └── index.ts ✅
└── index.ts ✅
```

---

### Critical Care

```
core/content/critical-care/
├── shock-states.ts ✅
├── mechanical-ventilation.ts ✅
├── sepsis.ts ✅
├── ards.ts ✅
├── aki-critical-illness.ts ✅
├── sedation-analgesia.ts ✅
├── nutrition-critical-illness.ts ✅
├── icu-delirium.ts ✅
├── weaning-extubation.ts ✅
├── end-of-life-icu.ts ✅
└── index.ts ✅
```

---

### Global Health

```
core/content/global-health/
├── health-disparities/
├── infectious-diseases/
├── maternal-child-health/
├── neglected-tropical-diseases/
├── noncommunicable-diseases/
├── organizations/
├── social-determinants/
├── travel-health/
├── vaccine-preventable/
└── index.ts ✅
```

---

### Integrative Medicine

```
core/content/integrative-medicine/
├── acupuncture.ts ✅
├── herbal-medicine.ts ✅
├── mind-body-practices.ts ✅
├── nutrition-therapy.ts ✅
├── massage-bodywork.ts ✅
├── chiropractic.ts ✅
└── index.ts ✅
```

---

### Women's Health

```
core/content/womens-health/
├── reproductive-health/           ❌ NEEDS: 5 files
│   ├── menstrual-cycle-explained.ts
│   ├── menstrual-disorders.ts
│   ├── contraception-options.ts
│   ├── fertility-basics.ts
│   └── menopause-transition.ts
├── pregnancy/                     ❌ NEEDS: 6 files
│   ├── preconception-care.ts
│   ├── prenatal-care-schedule.ts
│   ├── common-pregnancy-symptoms.ts
│   ├── warning-signs-in-pregnancy.ts
│   ├── labor-and-delivery-overview.ts
│   └── postpartum-care.ts
├── breast-health/                 ❌ NEEDS: 4 files
│   ├── breast-self-exam.ts
│   ├── mammogram-guidelines.ts
│   ├── breast-conditions.ts
│   └── breast-cancer-risk-factors.ts
├── gynecologic-conditions/        ❌ NEEDS: 6 files
│   ├── pelvic-pain.ts
│   ├── pcos.ts
│   ├── endometriosis.ts
│   ├── fibroids.ts
│   ├── vaginitis.ts
│   └── cervical-health-pap-smears.ts
├── bone-health/                   ❌ NEEDS: 3 files
│   ├── osteoporosis-prevention.ts
│   ├── calcium-vitamin-d.ts
│   └── bone-density-testing.ts
├── mental-health/                 ❌ NEEDS: 3 files
│   ├── postpartum-depression.ts
│   ├── premenstrual-disorders.ts
│   └── perimenopause-mood-changes.ts
└── index.ts ✅
```

---

### Wilderness Medicine

```
core/content/wilderness-medicine/
├── altitude/
│   ├── altitude-sickness.ts ✅
│   └── index.ts ✅
├── environmental-injuries/        ❌ NEEDS: 1 file
│   └── high-altitude-sunburn.ts
├── decision-making/               ❌ NEEDS: 3 files
│   ├── evacuation-decisions.ts
│   ├── field-assessment.ts
│   └── emergency-communication.ts
├── equipment/                     ❌ NEEDS: 2 files
│   ├── survival-first-aid-kit.ts
│   └── medication-kit.ts
└── index.ts ✅
```

---

### Wound Care

```
core/content/wound-care/
├── basic-wound-care.ts ✅
├── wound-healing.ts ✅
├── wound-assessment.ts ✅
├── infection-prevention.ts ✅
├── dressing-selection.ts ✅
├── sutures-staples-glue.ts        ❌ MISSING
├── when-to-seek-care.ts           ❌ MISSING
├── chronic-wounds.ts              ❌ MISSING
├── burn-care.ts                   ❌ MISSING
├── scar-management.ts             ❌ MISSING
├── tetanus-prophylaxis.ts         ❌ MISSING
└── index.ts ✅
```

---

### Other Content Areas

#### Emergency Medicine
```
core/content/emergency/
├── cardiac-arrest.ts ✅
├── trauma-assessment.ts ✅
├── airway-management.ts ✅
├── shock.ts ✅
└── index.ts ✅

core/content/emergency-warning-signs/
├── chest-pain-red-flags.ts ✅
├── stroke-signs.ts ✅
├── breathing-emergencies.ts ✅
├── abdominal-emergencies.ts ✅
└── index.ts ✅
```

#### Pain Management
```
core/content/pain-management/
├── acute-pain.ts ✅
├── chronic-pain.ts ✅
├── neuropathic-pain.ts ✅
├── opioid-therapy.ts ✅
├── non-opioid-options.ts ✅
├── interventional.ts ✅
└── index.ts ✅
```

#### Palliative Care
```
core/content/palliative-care/
├── care-planning/
├── comfort-care/
├── symptoms/
└── index.ts ✅
```

#### Sleep Medicine
```
core/content/sleep-medicine/
├── sleep-hygiene.ts ✅
├── insomnia.ts ✅
├── sleep-apnea.ts ✅
├── circadian-disorders.ts ✅
├── parasomnias.ts ✅
└── index.ts ✅
```

#### Sports Medicine
```
core/content/sports-medicine/
├── injuries/
├── physiology/
└── index.ts ✅
```

#### Surgery
```
core/content/surgery/
├── preoperative-care.ts ✅
├── anesthesia-overview.ts ✅
├── postoperative-care.ts ✅
├── common-procedures.ts ✅
├── minimally-invasive.ts ✅
├── surgical-complications.ts ✅
└── index.ts ✅
```

#### Toxicology
```
core/content/toxicology/
├── overdose-management.ts ✅
├── antidotes.ts ✅
├── household-toxins.ts ✅
├── environmental-toxins.ts ✅
└── index.ts ✅
```

---

## UI Components (src/)

### Missing Components

```
src/offline/
├── cacheManager.ts           ❌ MISSING
├── contentPrefetch.ts        ❌ MISSING
└── OfflineProvider.tsx ✅

src/search/
├── GlobalSearch.tsx ✅
├── SearchResults.tsx         ❌ MISSING
└── SearchFilters.tsx         ❌ MISSING

src/settings/
├── SettingsPage.tsx ✅
├── PrivacySettings.tsx       ❌ MISSING
├── NotificationSettings.tsx  ❌ MISSING
├── AccessibilitySettings.tsx ❌ MISSING
└── DataManagement.tsx        ❌ MISSING

src/vitals/
├── VitalsTracker.tsx ✅
├── VitalCorrelations.tsx     ❌ MISSING
├── VitalAlerts.tsx           ❌ MISSING
└── VitalEducation.tsx        ❌ MISSING
```

---

## Batch Completion Plan

### Summary of Missing Content

| Category | Missing Files | Priority |
|----------|---------------|----------|
| Cardiovascular Conditions | 8 | HIGH |
| Chronic Disease Submodules | ~25 | HIGH |
| Clinical Reasoning Core | 3 | HIGH |
| Condition Index Files | 11 | HIGH |
| Women's Health Submodules | ~30 | MEDIUM |
| Wilderness Medicine | ~6 | MEDIUM |
| Wound Care | ~6 | MEDIUM |
| Dental Health | ~18 | MEDIUM |
| Caregiver Support | ~1 | LOW |
| UI Components | ~10 | MEDIUM |

**Total Estimated Missing Files**: ~120

---

### Batch 2 (Current) - 10 Agents

| # | Agent | Files | Status |
|---|-------|-------|--------|
| 1 | Cardiovascular Conditions | 8 | PENDING |
| 2 | Chronic Disease Complete | ~25 | PENDING |
| 3 | Clinical Reasoning | 3 | PENDING |
| 4 | Condition Index Files | 11 | PENDING |
| 5 | Women's Health Complete | ~30 | PENDING |
| 6 | Wilderness Medicine | ~6 | PENDING |
| 7 | Wound Care | ~6 | PENDING |
| 8 | Caregiver Support | ~1 | PENDING |
| 9 | Dental Health | ~18 | PENDING |
| 10 | UI Components | ~10 | PENDING |

### Batch 3 (Next) - Import Path Fixes & Validation

| # | Agent | Description |
|---|-------|-------------|
| 1 | Genetics Import Fixes | Fix ../../../../types paths |
| 2 | Gastroenterology Import Fixes | Fix import paths |
| 3 | Index File Validation | Ensure all index.ts export correctly |
| 4 | TypeScript Error Sweep | Fix remaining type errors |
| 5 | Missing Export Fixes | Add missing exports |
| 6 | Content Validation | Verify EducationalContent structure |
| 7 | Reference Validation | Check cross-references work |
| 8 | Build Verification | Ensure clean build |
| 9 | Test Coverage | Add content tests |
| 10 | Documentation | Generate content docs |

### Batch 4+ (Future) - Enhancement & Polish

- Additional specialty content
- More condition files
- Interactive visualizations
- Quiz content expansion
- Multi-language support
- Performance optimization

---

## Technical Specifications

### Content Type Definition

```typescript
// core/content/types.ts

export interface EducationalContent {
  id: string;
  title: string;
  category: string;
  subcategory?: string;
  description: string;
  content: {
    1: ContentLevel; // 8th Grade
    2: ContentLevel; // High School
    3: ContentLevel; // College
    4: ContentLevel; // Graduate
    5: ContentLevel; // Medical Professional
  };
  relatedTopics: string[];
  references: string[];
  lastUpdated: string;
}

interface ContentLevel {
  summary: string;
  details: string;
  keyPoints: string[];
  commonMisconceptions?: string[];
  clinicalRelevance?: string;
}
```

### Import Path Rules

| Directory Depth | Import Path |
|-----------------|-------------|
| `core/content/xyz/file.ts` | `import { EducationalContent } from '../types'` |
| `core/content/xyz/sub/file.ts` | `import { EducationalContent } from '../../types'` |
| `core/content/xyz/sub/deep/file.ts` | `import { EducationalContent } from '../../../types'` |

### Export Pattern

```typescript
// In content file (e.g., heart-failure.ts)
export const heartFailureContent: EducationalContent = { ... };

// In index.ts
export { heartFailureContent } from './heart-failure';
export { coronaryArteryDiseaseContent } from './coronary-artery-disease';
// ... etc
```

---

## Continuation Protocol

See `progress.txt` for the detailed continuation protocol including:

1. **Session Start Checklist**
2. **Session End / Usage Limit Checklist**
3. **Handoff Summary Format**
4. **Batch Continuation Template**
5. **Progress Tracking Commands**

---

## Quick Reference

### Check TypeScript Errors
```bash
npx tsc --noEmit 2>&1 | grep -c "error TS"
```

### Count Missing Modules
```bash
npx tsc --noEmit 2>&1 | grep "Cannot find module" | wc -l
```

### Count Content Files
```bash
find core/content -name "*.ts" | wc -l
```

### List Content Directories
```bash
find core/content -type d | sort
```

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-01-24 | Initial blueprint creation |

---

*This document is the master reference for The Biological Self project. Update it when major changes occur.*
