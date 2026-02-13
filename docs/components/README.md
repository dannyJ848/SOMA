# Component Documentation

This document provides comprehensive documentation for all major React components in The Biological Self application.

---

## Table of Contents

1. [App](#app)
2. [AnatomyViewer](#anatomyviewer)
3. [BodyCentricHome](#bodycentrichome)
4. [ChatView](#chatview)
5. [SymptomExplorer](#symptomexplorer)
6. [MedicationExplorer](#medicationexplorer)
7. [ConditionSimulator](#conditionsimulator)
8. [MedicalEncyclopedia](#medicalencyclopedia)
9. [Education Components](#education-components)
10. [Supporting Components](#supporting-components)

---

## App

Main application component that handles authentication, routing, and global state.

### Location
`src/App.tsx`

### Responsibilities

1. **Authentication Flow**
   - Database creation/unlock with passphrase
   - Passphrase strength validation
   - Session management

2. **Onboarding**
   - First-time user onboarding flow
   - Demographics collection

3. **View Routing**
   - Dashboard, Timeline, Chat, Anatomy, etc.
   - Navigation history for back button
   - Mobile bottom navigation

4. **Action Tracking**
   - Integrates useActionTracker for all views
   - Tracks navigation, dashboard interactions

### Views Managed

```typescript
type View =
  | 'dashboard'
  | 'timeline'
  | 'body'
  | 'chat'
  | 'anatomy'
  | 'symptom-explorer'
  | 'medication-explorer'
  | 'condition-simulator'
  | 'encyclopedia'
  | 'encyclopedia-entry'
  | 'body-centric';
```

### Usage

```typescript
// App.tsx is the root component
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

---

## AnatomyViewer

Interactive 3D anatomy viewer using Three.js and React Three Fiber.

### Location
`src/AnatomyViewer.tsx`

### Props

```typescript
interface AnatomyViewerProps {
  onBack: () => void;
  dashboardData: DashboardData;
  initialStructureId?: string;
  initialSystem?: string;
}
```

### Features

1. **3D Model Rendering**
   - Human body mesh with anatomical layers
   - Transparency and visibility controls
   - Smooth camera animations

2. **Layer System**
   - Toggle individual anatomical systems
   - Preset layer combinations
   - Independent layer opacity

3. **Structure Selection**
   - Click to select structures
   - Highlight with colors
   - Pulse animations for emphasis

4. **Camera Controls**
   - Preset views (anterior, posterior, lateral)
   - Zoom, pan, rotate
   - Programmatic navigation

5. **AI Integration**
   - Chat panel for questions about selected structure
   - RAG-enhanced responses with citations

### Event Bus Integration

The AnatomyViewer listens to the anatomy3DEventBus for programmatic control:

```typescript
// Other components can control the viewer
import { navigateToStructure, highlightStructures } from '../utils/anatomy3DEventBus';

// Navigate to heart
navigateToStructure('heart', { animate: true, highlight: true });

// Highlight multiple structures
highlightStructures([
  { structureId: 'heart', color: '#ff0000', pulseAnimation: true }
]);
```

### Layer Presets

```typescript
const LAYER_PRESETS = {
  cardiovascular: ['arteries', 'veins', 'heart'],
  respiratory: ['lungs', 'airways', 'diaphragm'],
  digestive: ['stomach', 'intestines', 'liver'],
  // ...
};
```

---

## BodyCentricHome

The main home screen with body-centric navigation.

### Location
`src/BodyCentricHome.tsx`

### Props

```typescript
interface BodyCentricHomeProps {
  dashboardData: DashboardData;
  isLoading: boolean;
  onNavigate: (view: View) => void;
}
```

### Features

1. **Body Silhouette Navigation**
   - Click body regions to explore
   - Visual indicators for symptoms
   - Personalized based on demographics

2. **Quick Actions**
   - Most common user actions
   - Contextual based on health data
   - Intent-predicted shortcuts

3. **Health Summary**
   - Recent vitals
   - Active conditions
   - Current medications

4. **AI Greeting**
   - Personalized welcome message
   - Contextual health insights

---

## ChatView

AI-powered chat interface for health education.

### Location
`src/ChatView.tsx`

### Props

```typescript
interface ChatViewProps {
  onBack: () => void;
  dashboardData: DashboardData;
  initialMessage?: string;
  contextStructure?: string;
}
```

### Features

1. **Message Interface**
   - User/assistant message bubbles
   - Markdown rendering
   - Citation links

2. **RAG Integration**
   - Retrieves relevant medical content
   - Displays citations inline
   - Links to source material

3. **Journey Context**
   - Uses useJourneyContext hook
   - Personalizes responses based on exploration
   - Contextual suggestions

4. **Complexity Levels**
   - 6 depth levels (8th grade to physician)
   - User-selectable
   - Adaptive explanations

5. **Voice Input (Optional)**
   - Speech-to-text input
   - Text-to-speech responses

### Message Format

```typescript
interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  citations?: Citation[];
}

interface Citation {
  index: number;
  source: string;
  section?: string;
  url?: string;
}
```

---

## SymptomExplorer

Educational tool for understanding symptoms.

### Location
`src/SymptomExplorer.tsx`

### Props

```typescript
interface SymptomExplorerProps {
  onBack: () => void;
  dashboardData: DashboardData;
  onNavigateToAnatomy: () => void;
  initialSymptomId?: string;
}
```

### Features

1. **Symptom Search**
   - Fuzzy search across symptoms
   - Category filtering
   - Common symptoms highlighted

2. **Anatomical Sources**
   - Where symptom might originate
   - Color-coded by likelihood
   - 3D anatomy integration

3. **Differential Diagnosis Education**
   - Possible causes (educational, not diagnostic)
   - Red flags and warning signs
   - "Do not miss" conditions

4. **Follow-up Questions**
   - AI-generated clarifying questions
   - Similar to clinical history-taking
   - Educational about diagnostic process

### Symptom Source Likelihood

```typescript
type Likelihood = 'common' | 'less-common' | 'rare' | 'do-not-miss';

// Color mapping
const LIKELIHOOD_COLORS = {
  common: '#22c55e',      // green
  'less-common': '#eab308', // yellow
  rare: '#f97316',        // orange
  'do-not-miss': '#ef4444', // red (with pulse)
};
```

---

## MedicationExplorer

Educational tool for understanding medications.

### Location
`src/MedicationExplorer.tsx`

### Props

```typescript
interface MedicationExplorerProps {
  onBack: () => void;
  dashboardData: DashboardData;
  onNavigateToAnatomy: () => void;
  initialMedicationId?: string;
}
```

### Features

1. **Medication Search**
   - Search by brand or generic name
   - Drug class filtering
   - User's current medications highlighted

2. **Mechanism of Action**
   - How the drug works
   - Target organs/systems
   - Molecular mechanisms (advanced levels)

3. **Effects Visualization**
   - Therapeutic effects (green)
   - Adverse effects (red)
   - 3D anatomy integration

4. **Pharmacokinetics**
   - Absorption, distribution, metabolism, excretion
   - Drug interactions
   - Dosing considerations

5. **Tabs Interface**
   - Overview
   - Mechanism
   - Side Effects
   - Interactions
   - Dosing

---

## ConditionSimulator

Educational disease progression simulator.

### Location
`src/ConditionSimulator.tsx`

### Props

```typescript
interface ConditionSimulatorProps {
  onBack: () => void;
  dashboardData: DashboardData;
  onNavigateToAnatomy: () => void;
  onNavigateToMedication: (medId: string) => void;
  initialConditionId?: string;
}
```

### Features

1. **Condition Search**
   - Search across conditions
   - Category filtering (cardiovascular, respiratory, etc.)
   - User's conditions highlighted

2. **Timeline Scrubber**
   - Drag through disease progression
   - Visual phase indicators
   - Time scale (hours, days, months, years)

3. **Phase Details**
   - Symptoms at each phase
   - Anatomical changes
   - Treatment options

4. **3D Integration**
   - Shows affected structures
   - Progressive highlighting as disease advances
   - Complication visualization

### Disease Phase Structure

```typescript
interface DiseasePhase {
  id: string;
  name: string;
  timeDescription: string;
  symptoms: string[];
  anatomicalChanges: ConditionArea[];
  treatments: Treatment[];
  complications?: Complication[];
}
```

---

## MedicalEncyclopedia

Searchable medical knowledge base.

### Location
`src/MedicalEncyclopedia.tsx`

### Props

```typescript
interface MedicalEncyclopediaProps {
  onBack: () => void;
  dashboardData: DashboardData;
  onNavigateToAnatomy: () => void;
  onOpenEntry: (entryId: string) => void;
}
```

### Features

1. **Search**
   - Full-text search
   - Category filtering
   - Recent searches

2. **Categories**
   - Anatomy
   - Physiology
   - Conditions
   - Medications
   - Lab Tests
   - Procedures

3. **Entry Preview**
   - Card-based results
   - Quick summaries
   - Related entries

### EncyclopediaEntry

Child component for displaying full entries.

```typescript
interface EncyclopediaEntryProps {
  entryId: string;
  onBack: () => void;
  onNavigateToEntry: (entryId: string) => void;
  onNavigateToAnatomy: () => void;
}
```

---

## Education Components

### Location
`src/education/`

### UnifiedEducationPanel

Displays educational content based on selected body region/structure.

```typescript
interface UnifiedEducationPanelProps {
  structureId: string;
  structureName: string;
  system: string;
  complexityLevel: 1 | 2 | 3 | 4 | 5;
  onComplexityChange: (level: 1 | 2 | 3 | 4 | 5) => void;
}
```

### HistologyPanel

Displays tissue-level information.

```typescript
interface HistologyPanelProps {
  structureId: string;
  complexityLevel: 1 | 2 | 3 | 4 | 5;
}
```

### PhysiologyPanel

Displays functional/process information.

```typescript
interface PhysiologyPanelProps {
  structureId: string;
  complexityLevel: 1 | 2 | 3 | 4 | 5;
}
```

### PathologyPanel

Displays disease-related information.

```typescript
interface PathologyPanelProps {
  structureId: string;
  complexityLevel: 1 | 2 | 3 | 4 | 5;
  userConditions?: string[];
}
```

---

## Supporting Components

### BodyDiagram

2D interactive body diagram for region selection.

```typescript
interface BodyDiagramProps {
  view: 'anterior' | 'posterior';
  selectedRegion?: string;
  onRegionSelect: (regionId: string) => void;
  symptomLocations?: string[];
}
```

### SymptomEntryForm

Form for logging new symptoms.

```typescript
interface SymptomEntryFormProps {
  preselectedRegion?: string;
  onSave: () => void;
  onCancel: () => void;
}
```

### InsightsPanel

AI-generated health insights from dashboard data.

```typescript
interface InsightsPanelProps {
  dashboardData: DashboardData;
  dataVersion: number;
}
```

### ComplexityLevel

Selector for explanation depth level.

```typescript
interface ComplexityLevelProps {
  level: 1 | 2 | 3 | 4 | 5;
  onChange: (level: 1 | 2 | 3 | 4 | 5) => void;
  compact?: boolean;
}
```

### LayerPanel

Controls for 3D anatomy layer visibility.

```typescript
interface LayerPanelProps {
  activeLayers: string[];
  onLayerToggle: (layerId: string) => void;
  onPresetSelect: (presetName: string) => void;
}
```

### ClippingPlanes

Controls for 3D model cross-section views.

```typescript
interface ClippingPlanesProps {
  enabled: boolean;
  plane: 'sagittal' | 'coronal' | 'transverse';
  position: number;
  onToggle: () => void;
  onPlaneChange: (plane: string) => void;
  onPositionChange: (position: number) => void;
}
```

---

## Component Patterns

### Lazy Loading

Heavy components are lazy-loaded:

```typescript
const AnatomyViewer = lazy(() =>
  import('./AnatomyViewer').then(m => ({ default: m.AnatomyViewer }))
);

// Usage with Suspense
<Suspense fallback={<Loading />}>
  <AnatomyViewer {...props} />
</Suspense>
```

### Action Tracking Integration

Components integrate action tracking:

```typescript
function MyComponent() {
  const { track } = useActionTracker('my-feature', 'MyComponent');

  const handleClick = (id: string) => {
    track('select-item', { entityId: id });
    // ... handler logic
  };
}
```

### Event Bus Communication

Components communicate via event buses:

```typescript
function MyComponent() {
  const { navigateToStructure } = useAnatomy3DNavigation({
    componentId: 'MyComponent',
    autoResetOnUnmount: true
  });

  // Control 3D viewer from any component
  const handleViewOrgan = (organId: string) => {
    navigateToStructure(organId, { animate: true, highlight: true });
  };
}
```

### Complexity-Adaptive Content

Components adapt content based on complexity level:

```typescript
function EducationalContent({ complexityLevel }: Props) {
  const content = useMemo(() => {
    switch (complexityLevel) {
      case 1: return simpleExplanation;
      case 2: return basicExplanation;
      case 3: return standardExplanation;
      case 4: return advancedExplanation;
      case 5: return expertExplanation;
      default: return standardExplanation;
    }
  }, [complexityLevel]);

  return <div>{content}</div>;
}
```
