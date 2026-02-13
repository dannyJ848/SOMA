import { culturalHumilityContent } from './cultural-humility';
import { biasAwarenessContent } from './bias-awareness';
import { selfReflectionContent } from './self-reflection';

export { culturalHumilityContent, biasAwarenessContent, selfReflectionContent };

// Note: These modules have custom structure, not EducationalContent
export const culturalAwarenessModules = [
  culturalHumilityContent as any,
  biasAwarenessContent as any,
  selfReflectionContent as any,
];
