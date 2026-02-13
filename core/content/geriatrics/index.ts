// Comprehensive Geriatric Assessment (3 files)
import { cgaContent } from './comprehensive-geriatric/cga';
import { functionalAssessmentContent } from './comprehensive-geriatric/functional-assessment';
import { geriatricSyndromesContent } from './comprehensive-geriatric/geriatric-syndromes';

// Polypharmacy (3 files)
import { deprescribingGerContent } from './polypharmacy/deprescribing-ger';
import { drugInteractionsGerContent } from './polypharmacy/drug-interactions-ger';
import { inappropriateMedsContent } from './polypharmacy/inappropriate-meds';

// Falls and Balance (3 files)
import { fallsAssessmentContent } from './falls-balance/falls-assessment';
import { fallsPreventionContent } from './falls-balance/falls-prevention';
import { gaitBalanceContent } from './falls-balance/gait-balance';

// Cognitive Disorders (3 files)
import { deliriumGerContent } from './cognitive-disorders/delirium-ger';
import { dementiaGerContent } from './cognitive-disorders/dementia-ger';
import { cognitiveImpairmentContent } from './cognitive-disorders/cognitive-impairment';

// Elder Abuse (2 files)
import { elderAbuseScreeningContent } from './elder-abuse/elder-abuse-screening';
import { reportingElderAbuseContent } from './elder-abuse/reporting-elder-abuse';

// End-of-Life Care (2 files)
import { palliativeGerContent } from './end-of-life/palliative-ger';
import { hospiceGerContent } from './end-of-life/hospice-ger';

// Re-export all content
export {
  cgaContent,
  functionalAssessmentContent,
  geriatricSyndromesContent,
  deprescribingGerContent,
  drugInteractionsGerContent,
  inappropriateMedsContent,
  fallsAssessmentContent,
  fallsPreventionContent,
  gaitBalanceContent,
  deliriumGerContent,
  dementiaGerContent,
  cognitiveImpairmentContent,
  elderAbuseScreeningContent,
  reportingElderAbuseContent,
  palliativeGerContent,
  hospiceGerContent,
};

// Export all geriatrics content as a collection
export const geriatricsContent = {
  // Comprehensive Geriatric Assessment
  cga: cgaContent as any,
  functionalAssessment: functionalAssessmentContent as any,
  geriatricSyndromes: geriatricSyndromesContent as any,

  // Polypharmacy
  deprescribing: deprescribingGerContent as any,
  drugInteractions: drugInteractionsGerContent as any,
  inappropriateMeds: inappropriateMedsContent as any,

  // Falls and Balance
  fallsAssessment: fallsAssessmentContent as any,
  fallsPrevention: fallsPreventionContent as any,
  gaitBalance: gaitBalanceContent as any,

  // Cognitive Disorders
  delirium: deliriumGerContent as any,
  dementia: dementiaGerContent as any,
  cognitiveImpairment: cognitiveImpairmentContent as any,

  // Elder Abuse
  elderAbuseScreening: elderAbuseScreeningContent as any,
  reportingElderAbuse: reportingElderAbuseContent as any,

  // End-of-Life Care
  palliative: palliativeGerContent as any,
  hospice: hospiceGerContent as any,
};

// Export content IDs for reference
export const geriatricsContentIds = {
  // Comprehensive Geriatric Assessment
  cga: 'comprehensive-geriatric-assessment',
  functionalAssessment: 'functional-assessment-geriatrics',
  geriatricSyndromes: 'geriatric-syndromes',

  // Polypharmacy
  deprescribing: 'deprescribing-geriatrics',
  drugInteractions: 'drug-interactions-geriatrics',
  inappropriateMeds: 'inappropriate-medications-geriatrics',

  // Falls and Balance
  fallsAssessment: 'falls-assessment-geriatrics',
  fallsPrevention: 'falls-prevention-geriatrics',
  gaitBalance: 'gait-balance-geriatrics',

  // Cognitive Disorders
  delirium: 'delirium-geriatrics',
  dementia: 'dementia-geriatrics',
  cognitiveImpairment: 'cognitive-impairment-geriatrics',

  // Elder Abuse
  elderAbuseScreening: 'elder-abuse-screening',
  reportingElderAbuse: 'reporting-elder-abuse',

  // End-of-Life Care
  palliative: 'palliative-care-geriatrics',
  hospice: 'hospice-care-geriatrics',
};

// Helper function to get content by subcategory
export function getGeriatricsContent(subcategory: keyof typeof geriatricsContent) {
  return geriatricsContent[subcategory];
}

// Helper function to get all content IDs
export function getAllGeriatricsIds() {
  return geriatricsContentIds;
}
