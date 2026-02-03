# Utility Functions API Reference

This document provides comprehensive documentation for all utility functions in The Biological Self application.

---

## Table of Contents

1. [anatomy3DEventBus](#anatomy3deventbus)
2. [intentEventBus](#intenteventbus)
3. [anatomyContextBuilder](#anatomycontextbuilder)
4. [bodyProportionCalculator](#bodyproportioncalculator)
5. [regionToSystemMapper](#regiontosystemmapper)

---

## anatomy3DEventBus

Event bus for cross-component communication with the 3D Anatomy Viewer.

### Location
`src/utils/anatomy3DEventBus.ts`

### Import
```typescript
import {
  anatomy3DEventBus,
  navigateToStructure,
  navigateToRegion,
  setViewPreset,
  enableLayers,
  disableLayers,
  highlightStructures,
  clearHighlights,
  resetView,
  selectStructure,
  deselectStructure,
  type Anatomy3DEventType,
  type Anatomy3DEvent,
  type ViewPreset,
  type StructureHighlight,
  type NavigationOptions,
  type CameraPosition
} from '../utils/anatomy3DEventBus';
```

### Event Types

```typescript
type Anatomy3DEventType =
  | 'NAVIGATE_TO_STRUCTURE'
  | 'NAVIGATE_TO_REGION'
  | 'SET_VIEW_PRESET'
  | 'ENABLE_LAYERS'
  | 'DISABLE_LAYERS'
  | 'HIGHLIGHT_STRUCTURES'
  | 'CLEAR_HIGHLIGHTS'
  | 'SET_CAMERA_POSITION'
  | 'RESET_VIEW'
  | 'SELECT_STRUCTURE'
  | 'DESELECT_STRUCTURE';
```

### Event Bus Methods

#### Subscribe to Events

```typescript
// Subscribe to specific event type
const unsubscribe = anatomy3DEventBus.on('NAVIGATE_TO_STRUCTURE', (event) => {
  console.log('Navigating to:', event.payload.structureId);
});

// Subscribe to all events
const unsubscribeAll = anatomy3DEventBus.onAll((event) => {
  console.log('Event:', event.type, event.payload);
});

// Cleanup
unsubscribe();
unsubscribeAll();
```

#### Emit Events

```typescript
anatomy3DEventBus.emit('NAVIGATE_TO_STRUCTURE', {
  structureId: 'heart',
  options: { animate: true, duration: 500 }
}, 'MyComponent');
```

#### Utility Methods

```typescript
// Get event history
const history = anatomy3DEventBus.getHistory();

// Get last event of type
const lastNav = anatomy3DEventBus.getLastEvent('NAVIGATE_TO_STRUCTURE');

// Enable debug logging
anatomy3DEventBus.setDebugMode(true);

// Check if listeners exist
const hasListeners = anatomy3DEventBus.hasListeners('NAVIGATE_TO_STRUCTURE');

// Clear all listeners
anatomy3DEventBus.clear();
```

### Convenience Functions

These functions simplify emitting common events:

```typescript
// Navigate to a specific anatomical structure
navigateToStructure('heart', {
  animate: true,
  duration: 500,
  zoom: 2.0,
  highlight: true,
  highlightColor: '#ff0000'
}, 'SourceComponent');

// Navigate to a body region
navigateToRegion('chest', { animate: true }, 'SourceComponent');

// Set the view preset
setViewPreset('anterior', true, 'SourceComponent');
setViewPreset('posterior', false, 'SourceComponent');

// Enable/disable layers
enableLayers(['cardiovascular', 'respiratory'], 'SourceComponent');
disableLayers(['skeletal'], 'SourceComponent');

// Highlight structures
highlightStructures([
  { structureId: 'heart', color: '#ff0000', intensity: 'strong', pulseAnimation: true },
  { structureId: 'lungs', color: '#00ff00', intensity: 'moderate' }
], 'SourceComponent');

// Clear highlights
clearHighlights(); // Clear all
clearHighlights(['heart']); // Clear specific

// Reset the view
resetView(false, 'SourceComponent'); // Reset everything
resetView(true, 'SourceComponent'); // Keep layers enabled

// Select/deselect structures
selectStructure('heart', true, 'SourceComponent'); // Open info panel
deselectStructure('SourceComponent');
```

### Types

```typescript
interface NavigationOptions {
  animate?: boolean;
  duration?: number; // ms
  zoom?: number;
  enableLayers?: string[];
  highlight?: boolean;
  highlightColor?: string;
}

interface StructureHighlight {
  structureId: string;
  color: string;
  intensity?: 'strong' | 'moderate' | 'mild';
  pulseAnimation?: boolean;
  duration?: number; // ms, 0 = indefinite
}

interface CameraPosition {
  x: number;
  y: number;
  z: number;
  targetX?: number;
  targetY?: number;
  targetZ?: number;
}

type ViewPreset = 'anterior' | 'posterior' | 'left' | 'right' | 'superior' | 'inferior';
```

---

## intentEventBus

Event bus for the intent prediction system.

### Location
`src/utils/intentEventBus.ts`

### Import
```typescript
import {
  intentEventBus,
  trackAction,
  updateJourney
} from '../utils/intentEventBus';
```

### Event Types

```typescript
type IntentEventType =
  | 'ACTION_TRACKED'
  | 'JOURNEY_STARTED'
  | 'JOURNEY_UPDATED'
  | 'JOURNEY_COMPLETED'
  | 'PREDICTION_REQUESTED'
  | 'PREDICTION_READY'
  | 'PREDICTION_FAILED'
  | 'SHORTCUTS_UPDATED'
  | 'QUICK_ACTIONS_UPDATED'
  | 'PRELOAD_CONTENT'
  | 'PANEL_VISIBILITY_CHANGED';
```

### Usage

```typescript
// Subscribe to events
const unsubscribe = intentEventBus.on('ACTION_TRACKED', (event) => {
  console.log('Action tracked:', event.payload);
});

// Track an action
trackAction({
  id: 'action-id',
  timestamp: new Date().toISOString(),
  featureArea: 'symptom-explorer',
  actionType: 'select-symptom',
  payload: { entityId: 's1', entityName: 'Headache' },
  sessionId: 'session-id'
}, 'SourceComponent');

// Update journey progress
updateJourney('journey-id', 15, 'SourceComponent');

// Get action history
const history = intentEventBus.getActionHistory();
```

---

## anatomyContextBuilder

Builds anatomical context for AI prompts based on selected structure.

### Location
`src/utils/anatomyContextBuilder.ts`

### Import
```typescript
import { buildAnatomyContext, type AnatomyContext } from '../utils/anatomyContextBuilder';
```

### Usage

```typescript
const context = buildAnatomyContext({
  structureId: 'heart',
  structureName: 'Heart',
  system: 'cardiovascular',
  bodyRegion: 'chest',
  selectedLayer: 'cardiovascular'
});

// Use in AI prompt
const systemPrompt = `
You are explaining the ${context.structureName} to the user.
System: ${context.system}
Region: ${context.bodyRegion}
Related structures: ${context.relatedStructures.join(', ')}
`;
```

### Return Type

```typescript
interface AnatomyContext {
  structureId: string;
  structureName: string;
  system: string;
  bodyRegion: string;
  relatedStructures: string[];
  functionalConnections: string[];
  clinicalRelevance: string[];
}
```

---

## bodyProportionCalculator

Calculates body proportions based on user demographics for accurate 3D model rendering.

### Location
`src/utils/bodyProportionCalculator.ts`

### Import
```typescript
import {
  calculateBodyProportions,
  type BodyProportions
} from '../utils/bodyProportionCalculator';
```

### Usage

```typescript
const proportions = calculateBodyProportions({
  heightCm: 175,
  weightKg: 70,
  age: 30,
  sex: 'male',
  bodyType: 'athletic'
});

// Apply to 3D model
model.scale.set(
  proportions.shoulderWidth,
  proportions.height,
  proportions.chestDepth
);
```

### Return Type

```typescript
interface BodyProportions {
  height: number;
  shoulderWidth: number;
  hipWidth: number;
  chestDepth: number;
  waistWidth: number;
  armLength: number;
  legLength: number;
  headSize: number;
  neckLength: number;
  torsoLength: number;
}
```

---

## regionToSystemMapper

Maps body regions to anatomical systems and vice versa.

### Location
`src/utils/regionToSystemMapper.ts`

### Import
```typescript
import {
  getSystemsForRegion,
  getRegionsForSystem,
  getStructuresForRegion,
  getPrimarySystemForRegion
} from '../utils/regionToSystemMapper';
```

### Usage

```typescript
// Get all systems relevant to a body region
const systems = getSystemsForRegion('chest');
// ['cardiovascular', 'respiratory', 'musculoskeletal', 'nervous']

// Get all regions where a system is present
const regions = getRegionsForSystem('cardiovascular');
// ['chest', 'neck', 'head', 'arm', 'leg', 'abdomen']

// Get specific structures in a region
const structures = getStructuresForRegion('chest');
// ['heart', 'lungs', 'ribs', 'sternum', 'thoracic-spine', ...]

// Get primary system for a region
const primary = getPrimarySystemForRegion('chest');
// 'cardiovascular'
```

### Available Regions

```typescript
type BodyRegion =
  | 'head'
  | 'neck'
  | 'chest'
  | 'abdomen'
  | 'pelvis'
  | 'upper-arm'
  | 'forearm'
  | 'hand'
  | 'thigh'
  | 'lower-leg'
  | 'foot'
  | 'back-upper'
  | 'back-lower';
```

### Available Systems

```typescript
type AnatomicalSystem =
  | 'cardiovascular'
  | 'respiratory'
  | 'digestive'
  | 'nervous'
  | 'musculoskeletal'
  | 'urinary'
  | 'reproductive'
  | 'endocrine'
  | 'lymphatic'
  | 'integumentary';
```
