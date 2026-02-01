/**
 * Connected Condition Highlights Component
 *
 * A self-wiring wrapper around ConditionHighlights that automatically
 * resolves anatomical regions from patient conditions using the
 * condition-anatomy-map database.
 *
 * This component bridges the gap between core BiologicalSelf patient data
 * (where conditions may not have explicit affectedRegions/affectedOrgans)
 * and the ConditionHighlights 3D visualization component.
 *
 * Usage:
 * ```tsx
 * // Inside a Canvas, with conditions from any source:
 * <ConnectedConditionHighlights
 *   conditions={patientData.conditions}
 *   visible={showConditions}
 *   animationEnabled={true}
 * />
 *
 * // Or with core BiologicalSelf conditions (no affectedRegions set):
 * <ConnectedConditionHighlights
 *   conditions={[
 *     { id: '1', name: 'Hypertension', status: 'active', severity: 'moderate', icdCode: 'I10' },
 *     { id: '2', name: 'Type 2 Diabetes', status: 'chronic', severity: 'moderate' },
 *   ]}
 * />
 * ```
 */

import React, { memo } from 'react';

import { ConditionHighlights } from './ConditionHighlights';
import {
  useConditionHighlightsBridge,
  type BridgeableCondition,
} from './hooks/useConditionHighlightsBridge';

// ============================================
// Props
// ============================================

export interface ConnectedConditionHighlightsProps {
  /**
   * Patient conditions to visualize.
   * Can come from the core BiologicalSelf store (Condition type) or from
   * the UI layer (PatientCondition type). Conditions without explicit
   * affectedRegions/affectedOrgans will be automatically resolved using
   * the condition-anatomy-map database.
   */
  conditions: BridgeableCondition[] | undefined;

  /** Whether the highlights are visible (default: true) */
  visible?: boolean;

  /** Whether to enable pulse animations (default: true) */
  animationEnabled?: boolean;

  /** Include resolved conditions in visualization (default: false) */
  includeResolved?: boolean;

  /**
   * Callback fired after bridge resolution, providing diagnostic info.
   * Useful for displaying unresolved condition warnings in the UI.
   */
  onBridgeResult?: (result: {
    affectedRegionCount: number;
    resolvedConditionCount: number;
    unresolvedConditionCount: number;
    unresolvedConditions: BridgeableCondition[];
  }) => void;
}

// ============================================
// Component
// ============================================

export const ConnectedConditionHighlights = memo(function ConnectedConditionHighlights({
  conditions,
  visible = true,
  animationEnabled = true,
  includeResolved = false,
  onBridgeResult,
}: ConnectedConditionHighlightsProps) {
  // Use the bridge hook to resolve conditions to anatomical regions
  const bridgeResult = useConditionHighlightsBridge(conditions, {
    includeResolved,
    activeOnly: !includeResolved,
  });

  // Notify parent of bridge results if callback provided
  // Using a ref pattern to avoid re-renders from the callback
  React.useEffect(() => {
    if (onBridgeResult) {
      onBridgeResult({
        affectedRegionCount: bridgeResult.affectedRegionCount,
        resolvedConditionCount: bridgeResult.resolvedConditionCount,
        unresolvedConditionCount: bridgeResult.unresolvedConditionCount,
        unresolvedConditions: bridgeResult.unresolvedConditions,
      });
    }
  }, [
    bridgeResult.affectedRegionCount,
    bridgeResult.resolvedConditionCount,
    bridgeResult.unresolvedConditionCount,
    bridgeResult.unresolvedConditions,
    onBridgeResult,
  ]);

  // Don't render if not visible or no regions resolved
  if (!visible || bridgeResult.affectedRegionCount === 0) {
    return null;
  }

  return (
    <ConditionHighlights
      conditions={bridgeResult.conditionsByRegion}
      visible={visible}
      animationEnabled={animationEnabled}
    />
  );
});

export default ConnectedConditionHighlights;
