/**
 * Cardiovascular Conditions Educational Content
 *
 * Exports all cardiovascular condition content modules.
 * Note: These files are located in the parent cardiovascular directory.
 */

import { hypertensionContent } from '../hypertension';
import { heartConditionsContent } from '../heart-conditions';
import { arrhythmiasContent } from '../arrhythmias';
import { heartFailureContent } from '../heart-failure';
import { vascularDiseaseContent } from '../vascular-disease';
import { lipidDisordersContent } from '../lipid-disorders';
import { congenitalHeartContent } from '../congenital-heart';

export { hypertensionContent as hypertension } from '../hypertension';
export { heartConditionsContent as heartConditions } from '../heart-conditions';
export { arrhythmiasContent as arrhythmias } from '../arrhythmias';
export { heartFailureContent as heartFailure } from '../heart-failure';
export { vascularDiseaseContent as vascularDisease } from '../vascular-disease';
export { lipidDisordersContent as lipidDisorders } from '../lipid-disorders';
export { congenitalHeartContent as congenitalHeart } from '../congenital-heart';

export default {
  hypertension: hypertensionContent,
  heartConditions: heartConditionsContent,
  arrhythmias: arrhythmiasContent,
  heartFailure: heartFailureContent,
  vascularDisease: vascularDiseaseContent,
  lipidDisorders: lipidDisordersContent,
  congenitalHeart: congenitalHeartContent,
};
