# Granular UI Architecture

## Overview
The UI is decomposed into atomic, composable components following strict hierarchy.

## Directory Structure

```
src/
├── atoms/                       # Smallest indivisible components
│   ├── buttons/
│   │   ├── BaseButton.tsx
│   │   ├── IconButton.tsx
│   │   ├── ToggleButton.tsx
│   │   └── index.ts
│   │
│   ├── inputs/
│   │   ├── TextInput.tsx
│   │   ├── NumberInput.tsx
│   │   ├── DateInput.tsx
│   │   ├── Select.tsx
│   │   ├── Slider.tsx
│   │   └── index.ts
│   │
│   ├── displays/
│   │   ├── Badge.tsx
│   │   ├── Card.tsx
│   │   ├── Tooltip.tsx
│   │   ├── ProgressBar.tsx
│   │   ├── Skeleton.tsx
│   │   └── index.ts
│   │
│   ├── icons/
│   │   ├── Icon.tsx            # Dynamic icon component
│   │   ├── icons/              # Individual SVG icons
│   │   └── index.ts
│   │
│   └── index.ts
│
├── molecules/                   # Combinations of atoms
│   ├── forms/
│   │   ├── FormField.tsx       # Label + Input + Error
│   │   ├── FormSection.tsx
│   │   └── index.ts
│   │
│   ├── lists/
│   │   ├── ListItem.tsx
│   │   ├── ExpandableItem.tsx
│   │   └── index.ts
│   │
│   ├── navigation/
│   │   ├── NavItem.tsx
│   │   ├── Breadcrumb.tsx
│   │   └── index.ts
│   │
│   ├── data-display/
│   │   ├── LabValue.tsx        # Value + unit + range + trend
│   │   ├── MedicationCard.tsx
│   │   ├── ConditionBadge.tsx
│   │   ├── VitalStat.tsx
│   │   └── index.ts
│   │
│   └── index.ts
│
├── organisms/                   # Complex UI sections
│   ├── auth/
│   │   ├── PassphraseForm.tsx
│   │   └── index.ts
│   │
│   ├── dashboard/
│   │   ├── SummaryCard.tsx
│   │   ├── ConditionsPanel.tsx
│   │   ├── MedicationsPanel.tsx
│   │   ├── LabsPanel.tsx
│   │   ├── VitalsPanel.tsx
│   │   ├── TimelinePreview.tsx
│   │   └── index.ts
│   │
│   ├── timeline/
│   │   ├── TimelineContainer.tsx
│   │   ├── TimelineEvent.tsx
│   │   ├── TimelineFilters.tsx
│   │   └── index.ts
│   │
│   ├── body-map/
│   │   ├── BodyDiagram.tsx
│   │   ├── BodyRegion.tsx
│   │   ├── SymptomMarker.tsx
│   │   └── index.ts
│   │
│   ├── anatomy-3d/
│   │   ├── Scene3D.tsx
│   │   ├── ModelLoader.tsx
│   │   ├── LayerPanel.tsx
│   │   ├── SelectionManager.tsx
│   │   └── index.ts
│   │
│   ├── chat/
│   │   ├── ChatContainer.tsx
│   │   ├── MessageBubble.tsx
│   │   ├── MessageInput.tsx
│   │   ├── SuggestedQuestions.tsx
│   │   └── index.ts
│   │
│   ├── explanation/
│   │   ├── ExplanationCard.tsx
│   │   ├── ComplexitySelector.tsx
│   │   ├── CitationList.tsx
│   │   └── index.ts
│   │
│   ├── import/
│   │   ├── ImportDropZone.tsx
│   │   ├── ImportProgress.tsx
│   │   ├── ImportReview.tsx
│   │   ├── DuplicateReview.tsx
│   │   └── index.ts
│   │
│   └── index.ts
│
├── templates/                   # Page layout templates
│   ├── AppLayout.tsx           # Header + main content area
│   ├── SidebarLayout.tsx       # Sidebar + main content
│   ├── ModalLayout.tsx         # Modal overlay
│   └── index.ts
│
├── pages/                       # Full page components
│   ├── DashboardPage.tsx
│   ├── TimelinePage.tsx
│   ├── BodyMapPage.tsx
│   ├── Anatomy3DPage.tsx
│   ├── ChatPage.tsx
│   ├── ImportPage.tsx
│   └── index.ts
│
├── hooks/                       # Reusable React hooks
│   ├── useBiologicalSelf.ts
│   ├── useDashboard.ts
│   ├── useTimeline.ts
│   ├── useOllama.ts
│   ├── useExplanation.ts
│   ├── useImport.ts
│   └── index.ts
│
├── context/                     # React context providers
│   ├── BiologicalSelfContext.tsx
│   ├── ThemeContext.tsx
│   └── index.ts
│
├── styles/
│   ├── tokens/                 # Design tokens
│   │   ├── colors.ts
│   │   ├── typography.ts
│   │   ├── spacing.ts
│   │   └── index.ts
│   │
│   ├── mixins/                 # SCSS mixins (if using SCSS)
│   │   └── index.scss
│   │
│   ├── components/             # Component-specific styles
│   │   ├── atoms.scss
│   │   ├── molecules.scss
│   │   └── index.scss
│   │
│   └── index.scss
│
└── utils/                       # UI utilities
    ├── classNames.ts           # Conditional class merging
    ├── formatters.ts           # Date, number formatters
    └── index.ts
```

## Component Example: LabValue Molecule

```tsx
// src/molecules/data-display/LabValue.tsx

import React from 'react';
import { Badge } from '../../atoms/displays/Badge.js';
import { TrendIcon } from '../../atoms/icons/Icon.js';
import type { LabResult } from '../../../../core/data/entities/lab-result/types.js';

export interface LabValueProps {
  lab: LabResult;
  showTrend?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const LabValue: React.FC<LabValueProps> = ({
  lab,
  showTrend = false,
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'lab-value-sm',
    md: 'lab-value-md',
    lg: 'lab-value-lg',
  };

  const statusVariant = lab.status === 'normal' ? 'success' :
    lab.status === 'critical' ? 'error' : 'warning';

  return (
    <div className={`lab-value ${sizeClasses[size]}`}>
      <div className="lab-value-header">
        <span className="lab-value-name">{lab.testName}</span>
        {showTrend && lab.trend && (
          <TrendIcon direction={lab.trend} />
        )}
      </div>

      <div className="lab-value-body">
        <span className="lab-value-value">{lab.value}</span>
        {lab.unit && <span className="lab-value-unit">{lab.unit}</span>}
        <Badge variant={statusVariant}>
          {lab.status}
        </Badge>
      </div>

      {lab.referenceRange && (
        <div className="lab-value-range">
          Ref: {lab.referenceRange.low} - {lab.referenceRange.high}
        </div>
      )}
    </div>
  );
};
```

## Atomic Design Principles

1. **Atoms** have no dependencies on other components
2. **Molecules** compose 2+ atoms
3. **Organisms** compose molecules and/or atoms
4. **Templates** define layout structures
5. **Pages** are concrete instances with data

## State Management

```typescript
// src/hooks/useBiologicalSelf.ts

import { useState, useEffect, useCallback } from 'react';
import { invoke } from '../tauri-invoke.js';
import type { BiologicalSelf } from '../../../core/data/types.js';

export function useBiologicalSelf() {
  const [self, setSelf] = useState<BiologicalSelf | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    try {
      setLoading(true);
      const data = await invoke<BiologicalSelf>('get_biological_self');
      setSelf(data);
      setError(null);
    } catch (err) {
      setError(String(err));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { self, loading, error, refresh };
}
```

## Design Tokens

```typescript
// src/styles/tokens/colors.ts

export const colors = {
  // Semantic colors
  accent: {
    50: '#eff6ff',
    100: '#dbeafe',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
  },
  
  success: {
    500: '#22c55e',
    600: '#16a34a',
  },
  
  warning: {
    500: '#f59e0b',
    600: '#d97706',
  },
  
  error: {
    500: '#ef4444',
    600: '#dc2626',
  },
  
  // UI colors
  bg: {
    primary: '#0a0a0a',
    secondary: '#141414',
    card: '#1a1a1a',
    hover: '#242424',
  },
  
  text: {
    primary: '#ffffff',
    secondary: '#888888',
    muted: '#666666',
  },
  
  border: {
    default: '#2a2a2a',
    hover: '#3a3a3a',
  },
} as const;

export type ColorToken = keyof typeof colors;
```

## Migration Strategy

1. **Phase 1**: Create new atomic components alongside existing
2. **Phase 2**: Refactor organisms to use new atoms/molecules
3. **Phase 3**: Create new page components using organisms
4. **Phase 4**: Replace old pages with new structure
5. **Phase 5**: Remove deprecated components
