/**
 * Gastroenterology Content Index
 *
 * Exports all gastroenterology educational content modules.
 */

import { EducationalContent } from '../types';
import { upperGIContent } from './upper-gi';
import { lowerGIContent } from './lower-gi';
import { liverContent } from './liver';
import { pancreasContent } from './pancreas';
import { biliaryContent } from './biliary';
import { giBleedingContent } from './gi-bleeding';
import { giInfectionsContent } from './gi-infections';
import { giNeoplasiaContent } from './gi-neoplasia';
import { giProceduresContent } from './gi-procedures';
import { enfermedadCrohnCrohns } from './enfermedad-crohn-crohns';
import { colitisUlcerosaUlcerativeColitis } from './colitis-ulcerosa-ulcerative-colitis';
import { enfermedadHepaticaLiverDisease } from './enfermedad-hepatica-liver-disease';
import { sindromeIntestinoIrritableIbs } from './sindrome-intestino-irritable-ibs';

// Re-export for external use
export { upperGIContent } from './upper-gi';
export { lowerGIContent } from './lower-gi';
export { liverContent } from './liver';
export { pancreasContent } from './pancreas';
export { biliaryContent } from './biliary';
export { giBleedingContent } from './gi-bleeding';
export { giInfectionsContent } from './gi-infections';
export { giNeoplasiaContent } from './gi-neoplasia';
export { giProceduresContent } from './gi-procedures';
export { enfermedadCrohnCrohns } from './enfermedad-crohn-crohns';
export { colitisUlcerosaUlcerativeColitis } from './colitis-ulcerosa-ulcerative-colitis';
export { enfermedadHepaticaLiverDisease } from './enfermedad-hepatica-liver-disease';
export { sindromeIntestinoIrritableIbs } from './sindrome-intestino-irritable-ibs';

/**
 * Gastroenterology Content Collection
 *
 * Comprehensive educational content covering gastrointestinal disorders including:
 * - Upper GI disorders (GERD, gastritis, PUD, dyspepsia)
 * - Lower GI disorders (IBS, IBD, colitis)
 * - Liver disorders (hepatitis, cirrhosis, fatty liver)
 * - Pancreatic disorders (pancreatitis, pancreatic insufficiency)
 * - Biliary disorders (gallstones, cholecystitis, cholangitis)
 * - GI bleeding (UGIB, LGIB, evaluation, treatment)
 * - GI infections (H. pylori, C. diff, parasitic)
 * - GI neoplasia (colon cancer, polyps, screening)
 * - GI procedures (endoscopy, colonoscopy, biopsy)
 * - Enfermedad de Crohn / Crohn's Disease (bilingual)
 * - Colitis Ulcerosa / Ulcerative Colitis (bilingual)
 * - Enfermedad Hepática / Liver Disease (bilingual)
 * - Síndrome del Intestino Irritable / IBS (bilingual)
 */
export const gastroenterologyContent: EducationalContent[] = [
  upperGIContent,
  lowerGIContent,
  liverContent,
  pancreasContent,
  biliaryContent,
  giBleedingContent,
  giInfectionsContent,
  giNeoplasiaContent,
  giProceduresContent,
  enfermedadCrohnCrohns,
  colitisUlcerosaUlcerativeColitis,
  enfermedadHepaticaLiverDisease,
  sindromeIntestinoIrritableIbs,
];

export default gastroenterologyContent;
