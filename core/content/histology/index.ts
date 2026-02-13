/**
 * Histology Content Module - Index
 *
 * Exports all histology educational content for the
 * SOMA medical education app.
 *
 * Spanish-first bilingual content covering the four basic tissue types
 * and cardiovascular histology.
 */

import { tejidoEpitelialContent } from './tejido-epitelial-epithelial-tissue';
import { tejidoConectivoContent } from './tejido-conectivo-connective-tissue';
import { tejidoMuscularContent } from './tejido-muscular-muscle-tissue';
import { tejidoNerviosoContent } from './tejido-nervioso-nervous-tissue';
import { histologiaCardiovascularContent } from './histologia-cardiovascular';

export { tejidoEpitelialContent } from './tejido-epitelial-epithelial-tissue';
export { tejidoConectivoContent } from './tejido-conectivo-connective-tissue';
export { tejidoMuscularContent } from './tejido-muscular-muscle-tissue';
export { tejidoNerviosoContent } from './tejido-nervioso-nervous-tissue';
export { histologiaCardiovascularContent } from './histologia-cardiovascular';

// Re-export as default for convenience
export default {
  tejidoEpitelialContent,
  tejidoConectivoContent,
  tejidoMuscularContent,
  tejidoNerviosoContent,
  histologiaCardiovascularContent,
};
