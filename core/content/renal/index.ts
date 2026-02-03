/**
 * Renal System Educational Content
 *
 * Comprehensive educational content for the renal system covering
 * clinical nephrology, histology, pathology, anatomy, and physiology.
 */

// Clinical content
export {
  acidBaseDisorders,
  electrolyteAbnormalities,
  dialysisBasics,
  kidneyTransplantation,
} from './clinical';

// Histology content
export {
  nephronStructureHistology,
  glomerularHistology,
  renalTubulesHistology,
  juxtaglomerularApparatusHistology,
} from './histology';

// Pathology content
export {
  glomerulonephritis,
  diabeticNephropathy,
  acuteKidneyInjury,
  chronicKidneyDisease,
} from './pathology';

// Import defaults for aggregate export
import clinical from './clinical';
import histology from './histology';
import pathology from './pathology';

// Aggregate export
export const renalContent = {
  clinical,
  histology,
  pathology,
};

export default renalContent;
