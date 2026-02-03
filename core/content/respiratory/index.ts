/**
 * Respiratory System Content Index
 *
 * Comprehensive educational content for the respiratory system including
 * anatomy, clinical medicine, histology, pathology, and physiology.
 */

// Anatomy content
export { respiratoryAnatomyContent as respiratoryAnatomy } from './anatomy/respiratory-anatomy';

// Clinical content
export { pulmonaryFunctionTestsContent as pulmonaryFunctionTests } from './clinical/pulmonary-function-tests';
export { arterialBloodGasesContent as arterialBloodGases } from './clinical/arterial-blood-gases';
export { respiratoryFailureContent as respiratoryFailure } from './clinical/respiratory-failure';
export { mechanicalVentilationBasicsContent as mechanicalVentilationBasics } from './clinical/mechanical-ventilation-basics';

// Histology content
export { alveolarStructureContent as alveolarStructure } from './histology/alveolar-structure';
export { bronchialTreeHistologyContent as bronchialTreeHistology } from './histology/bronchial-tree-histology';
export { pleuralTissueContent as pleuralTissue } from './histology/pleural-tissue';
export { pulmonaryVesselsContent as pulmonaryVessels } from './histology/pulmonary-vessels';

// Pathology content
export { pneumoniaPathologyContent as pneumoniaPathology } from './pathology/pneumonia-pathology';
export { copdPathologyContent as copdPathology } from './pathology/copd-pathology';
export { pulmonaryFibrosisPathologyContent as pulmonaryFibrosisPathology } from './pathology/pulmonary-fibrosis';
export { lungCancerPathologyContent as lungCancerPathology } from './pathology/lung-cancer-pathology';

// Physiology content
export { ventilationMechanicsContent as ventilationMechanics } from './physiology/ventilation-mechanics';
export { gasExchangeContent as gasExchange } from './physiology/gas-exchange';
export { oxygenTransportContent as oxygenTransport } from './physiology/oxygen-transport';
export { respiratoryControlContent as respiratoryControl } from './physiology/respiratory-control';

// Import all content for aggregate arrays
import { respiratoryAnatomyContent } from './anatomy/respiratory-anatomy';

import { pulmonaryFunctionTestsContent } from './clinical/pulmonary-function-tests';
import { arterialBloodGasesContent } from './clinical/arterial-blood-gases';
import { respiratoryFailureContent } from './clinical/respiratory-failure';
import { mechanicalVentilationBasicsContent } from './clinical/mechanical-ventilation-basics';

import { alveolarStructureContent } from './histology/alveolar-structure';
import { bronchialTreeHistologyContent } from './histology/bronchial-tree-histology';
import { pleuralTissueContent } from './histology/pleural-tissue';
import { pulmonaryVesselsContent } from './histology/pulmonary-vessels';

import { pneumoniaPathologyContent } from './pathology/pneumonia-pathology';
import { copdPathologyContent } from './pathology/copd-pathology';
import { pulmonaryFibrosisPathologyContent } from './pathology/pulmonary-fibrosis';
import { lungCancerPathologyContent } from './pathology/lung-cancer-pathology';

import { ventilationMechanicsContent } from './physiology/ventilation-mechanics';
import { gasExchangeContent } from './physiology/gas-exchange';
import { oxygenTransportContent } from './physiology/oxygen-transport';
import { respiratoryControlContent } from './physiology/respiratory-control';

// Category exports
export const respiratoryAnatomyAll = [
  respiratoryAnatomyContent,
];

export const respiratoryClinical = [
  pulmonaryFunctionTestsContent,
  arterialBloodGasesContent,
  respiratoryFailureContent,
  mechanicalVentilationBasicsContent,
];

export const respiratoryHistology = [
  alveolarStructureContent,
  bronchialTreeHistologyContent,
  pleuralTissueContent,
  pulmonaryVesselsContent,
];

export const respiratoryPathology = [
  pneumoniaPathologyContent,
  copdPathologyContent,
  pulmonaryFibrosisPathologyContent,
  lungCancerPathologyContent,
];

export const respiratoryPhysiology = [
  ventilationMechanicsContent,
  gasExchangeContent,
  oxygenTransportContent,
  respiratoryControlContent,
];

// All respiratory content
export const respiratoryContent = [
  ...respiratoryAnatomyAll,
  ...respiratoryClinical,
  ...respiratoryHistology,
  ...respiratoryPathology,
  ...respiratoryPhysiology,
];

export default respiratoryContent;
