/**
 * Dermatology Content
 *
 * Comprehensive content covering skin, hair, nail conditions,
 * dermatologic treatments, and related procedures.
 *
 * Bilingual (Spanish-first) comprehensive modules:
 * - Cancer de Piel / Skin Cancer (melanoma, BCC, SCC, ABCDEs)
 * - Dermatitis y Eccema / Dermatitis and Eczema (atopic, contact, seborrheic)
 * - Psoriasis (types, triggers, treatment ladder, biologics)
 * - Infecciones Cutaneas / Skin Infections (bacterial, fungal, viral)
 * - Cicatrizacion de Heridas / Wound Healing (phases, chronic wounds)
 */

// Basics
export { skinLesionMorphologyContent } from './basics/skin-lesion-morphology';

// Conditions
export { acneContent } from './conditions/acne';
export { eczemaContent } from './conditions/eczema';
export { psoriasisContent } from './conditions/psoriasis';
export { skinCancerContent } from './conditions/skin-cancer';

// Conditions - Bilingual (Spanish-first) educational content
export { psoriasisEsContent } from './conditions/psoriasis-es';
export { dermatitisAtopicaEczemaContent } from './conditions/dermatitis-atopica-eczema';
export { cancerPielSkinCancerContent } from './conditions/cancer-piel-skin-cancer';
export { acneEsContent } from './conditions/acne-es';

// Comprehensive Bilingual (Spanish-first) Dermatology Modules
export { cancerPielSkinCancer } from './cancer-piel-skin-cancer';
export { dermatitisEczema } from './dermatitis-eczema';
export { psoriasis } from './psoriasis';
export { infeccionesCutaneasSkinInfections } from './infecciones-cutaneas-skin-infections';
export { cicatrizacionHeridasWoundHealing } from './cicatrizacion-heridas-wound-healing';

// Treatments
export * from './treatments';

// Inflammatory (in-depth)
export * from './inflammatory';

// Infectious (in-depth)
export * from './infectious';

// Neoplastic (in-depth)
export * from './neoplastic';

// Procedures (in-depth)
export * from './procedures';
