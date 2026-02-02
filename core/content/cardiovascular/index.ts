/**
 * Cardiovascular Content Module - Index
 *
 * Exports all cardiovascular educational content for the
 * Biological Self medical education app.
 */

import { cardiovascularOverviewContent } from './overview';
import { heartConditionsContent } from './heart-conditions';
import { arrhythmiasContent } from './arrhythmias';
import { heartFailureContent } from './heart-failure';
import { vascularDiseaseContent } from './vascular-disease';
import { hypertensionContent } from './hypertension';
import { lipidDisordersContent } from './lipid-disorders';
import { congenitalHeartContent } from './congenital-heart';
import { cardiovascularTestingContent } from './cardiovascular-testing';
import { heartAnatomyContent } from './anatomy';

export { cardiovascularOverviewContent } from './overview';
export { heartConditionsContent } from './heart-conditions';
export { arrhythmiasContent } from './arrhythmias';
export { heartFailureContent } from './heart-failure';
export { vascularDiseaseContent } from './vascular-disease';
export { hypertensionContent } from './hypertension';
export { lipidDisordersContent } from './lipid-disorders';
export { congenitalHeartContent } from './congenital-heart';
export { cardiovascularTestingContent } from './cardiovascular-testing';
export { heartAnatomyContent } from './anatomy';

// Re-export as default for convenience
export default {
  cardiovascularOverviewContent,
  heartConditionsContent,
  arrhythmiasContent,
  heartFailureContent,
  vascularDiseaseContent,
  hypertensionContent,
  lipidDisordersContent,
  congenitalHeartContent,
  cardiovascularTestingContent,
  heartAnatomyContent,
};
