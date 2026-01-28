/**
 * Respiratory Histology Index
 *
 * Microscopic anatomy of the respiratory system including alveoli,
 * airways, pleura, and pulmonary vasculature.
 */

export { alveolarStructureContent as alveolarStructure } from './alveolar-structure';
export { bronchialTreeHistologyContent as bronchialTreeHistology } from './bronchial-tree-histology';
export { pleuralTissueContent as pleuralTissue } from './pleural-tissue';
export { pulmonaryVesselsContent as pulmonaryVessels } from './pulmonary-vessels';

import { alveolarStructureContent } from './alveolar-structure';
import { bronchialTreeHistologyContent } from './bronchial-tree-histology';
import { pleuralTissueContent } from './pleural-tissue';
import { pulmonaryVesselsContent } from './pulmonary-vessels';

export const respiratoryHistology = [
  alveolarStructureContent,
  bronchialTreeHistologyContent,
  pleuralTissueContent,
  pulmonaryVesselsContent,
];

export default respiratoryHistology;
