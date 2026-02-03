/**
 * Hematologic Conditions Index
 *
 * Comprehensive educational content for blood disorders
 */

export { anemia } from './anemia';
export { anemiaOfChronicDisease } from './anemia-of-chronic-disease';
export { b12Deficiency } from './b12-deficiency';
export { dvtPE } from './dvt-pe';
export { hemolyticAnemia } from './hemolytic-anemia';
export { hemophilia } from './hemophilia';
export { ironDeficiencyAnemia } from './iron-deficiency-anemia';
export { itp } from './itp';
export { vonWillebrand } from './von-willebrand';

// Hematologic Conditions Database (structured reference)
export {
  HEMATOLOGIC_CONDITIONS,
  searchHematologicConditions,
  filterHematologicByCategory,
  getHematologicConditionById,
  getHematologicCategories,
  getHematologicConditionCount,
} from './hematologic-conditions-database';
export type {
  HematologicCategory,
  HematologicConditionEntry,
} from './hematologic-conditions-database';

import { anemia } from './anemia';
import { anemiaOfChronicDisease } from './anemia-of-chronic-disease';
import { b12Deficiency } from './b12-deficiency';
import { dvtPE } from './dvt-pe';
import { hemolyticAnemia } from './hemolytic-anemia';
import { hemophilia } from './hemophilia';
import { ironDeficiencyAnemia } from './iron-deficiency-anemia';
import { itp } from './itp';
import { vonWillebrand } from './von-willebrand';

export const hematologicConditions = [
  anemia,
  anemiaOfChronicDisease,
  b12Deficiency,
  dvtPE,
  hemolyticAnemia,
  hemophilia,
  ironDeficiencyAnemia,
  itp,
  vonWillebrand,
];

export default hematologicConditions;
