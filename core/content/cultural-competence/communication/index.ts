import { culturalCommunicationContent } from './cultural-communication';
import { interpreterUseContent } from './interpreter-use';

export { culturalCommunicationContent, interpreterUseContent };

// Note: These modules have custom structure, not EducationalContent
export const communicationModules = [
  culturalCommunicationContent as any,
  interpreterUseContent as any,
];
