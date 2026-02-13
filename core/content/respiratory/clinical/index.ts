/**
 * Respiratory Clinical Index
 *
 * Clinical respiratory medicine content including pulmonary function tests,
 * arterial blood gas analysis, respiratory failure, and mechanical ventilation.
 */

export { pulmonaryFunctionTestsContent as pulmonaryFunctionTests } from './pulmonary-function-tests';
export { arterialBloodGasesContent as arterialBloodGases } from './arterial-blood-gases';
export { respiratoryFailureContent as respiratoryFailure } from './respiratory-failure';
export { mechanicalVentilationBasicsContent as mechanicalVentilationBasics } from './mechanical-ventilation-basics';

import { pulmonaryFunctionTestsContent } from './pulmonary-function-tests';
import { arterialBloodGasesContent } from './arterial-blood-gases';
import { respiratoryFailureContent } from './respiratory-failure';
import { mechanicalVentilationBasicsContent } from './mechanical-ventilation-basics';

export const respiratoryClinical = [
  pulmonaryFunctionTestsContent,
  arterialBloodGasesContent,
  respiratoryFailureContent,
  mechanicalVentilationBasicsContent,
];

export default respiratoryClinical;
