/**
 * Orthopedics Specialty Educational Content
 *
 * Comprehensive orthopedic content covering:
 * - Bone Anatomy and Healing
 * - Fracture Types and Treatment
 * - Joint Anatomy and Function
 * - Arthritis (OA vs RA Management)
 * - Back Pain and Spinal Conditions
 * - Common Sports Injuries
 * - Carpal Tunnel and Nerve Compression
 * - Joint Replacement Surgery
 * - Physical Therapy and Rehabilitation
 * - Osteoporosis and Bone Health
 *
 * In-depth specialty modules:
 * - Fractures (classification, management principles)
 * - Joint Replacement (hip and knee arthroplasty)
 * - Sports Medicine (ACL/meniscus, rotator cuff/shoulder)
 * - Spine (disc herniation/stenosis, scoliosis/deformity)
 *
 * Multi-level complexity for patient education (8th grade to MD-level)
 */

// Anatomy exports
export { boneAnatomyContent } from './anatomy/bone-anatomy';
export { jointAnatomyContent } from './anatomy/joint-anatomy';
export { spinalAnatomyContent } from './anatomy/spinal-anatomy';

// Condition exports
export { fractureTypesContent } from './conditions/fracture-types';
export { osteoarthritisContent } from './conditions/osteoarthritis';
export { rheumatoidArthritisOrthopedicContent } from './conditions/rheumatoid-arthritis-orthopedic';
export { backPainContent } from './conditions/back-pain';
export { spinalConditionsContent } from './conditions/spinal-conditions';
export { sportsInjuriesContent } from './conditions/sports-injuries';
export { carpalTunnelContent } from './conditions/carpal-tunnel';
export { osteoporosisContent } from './conditions/osteoporosis';

// Procedure exports
export { jointReplacementContent } from './procedures/joint-replacement';
export { fractureManagementContent } from './procedures/fracture-management';

// Rehabilitation exports
export { physicalTherapyContent } from './rehabilitation/physical-therapy';
export { rehabilitationPrinciplesContent } from './rehabilitation/rehabilitation-principles';

// In-depth fractures module
export { commonFractureTypes } from './fractures/common-fracture-types';
export { fractureManagementPrinciples } from './fractures/fracture-management-principles';

// In-depth joint replacement module
export { hipArthroplasty } from './joint-replacement/hip-arthroplasty';
export { kneeArthroplasty } from './joint-replacement/knee-arthroplasty';

// In-depth sports medicine module
export { aclAndMeniscus } from './sports-medicine/acl-and-meniscus';
export { rotatorCuffShoulder } from './sports-medicine/rotator-cuff-shoulder';

// In-depth spine module
export { discHerniationStenosis } from './spine/disc-herniation-stenosis';
export { scoliosisDeformity } from './spine/scoliosis-deformity';

// Ortho database exports
export {
  ORTHO_ENTRIES,
  getOrthoEntry,
  searchOrtho,
  getOrthoBySubcategory,
  getOrthoCount,
} from './ortho-database';
export type { OrthoEntry, OrthoSubcategory } from './ortho-database';

// Content categories
export const ORTHOPEDICS_CATEGORIES = [
  'bone-anatomy',
  'joint-anatomy',
  'spine',
  'fractures',
  'arthritis',
  'sports-medicine',
  'nerve-compression',
  'joint-replacement',
  'rehabilitation',
  'bone-health',
] as const;

export type OrthopedicsCategory = (typeof ORTHOPEDICS_CATEGORIES)[number];

// Clinical relevance mapping
export const ORTHOPEDICS_CLINICAL_PRIORITIES = {
  'open-fracture': 'critical',
  'compartment-syndrome': 'critical',
  'spinal-cord-compression': 'critical',
  'septic-arthritis': 'critical',
  'cauda-equina-syndrome': 'critical',
  'hip-fracture': 'high',
  'vertebral-fracture': 'high',
  'acl-tear': 'high',
  'rotator-cuff-tear': 'medium',
  'carpal-tunnel': 'medium',
  'osteoarthritis': 'medium',
  'osteoporosis': 'medium',
} as const;

// All orthopedics content for bulk operations
export const getAllOrthopedicsContent = async () => {
  const modules = await Promise.all([
    import('./anatomy/bone-anatomy'),
    import('./anatomy/joint-anatomy'),
    import('./anatomy/spinal-anatomy'),
    import('./conditions/fracture-types'),
    import('./conditions/osteoarthritis'),
    import('./conditions/rheumatoid-arthritis-orthopedic'),
    import('./conditions/back-pain'),
    import('./conditions/spinal-conditions'),
    import('./conditions/sports-injuries'),
    import('./conditions/carpal-tunnel'),
    import('./conditions/osteoporosis'),
    import('./procedures/joint-replacement'),
    import('./procedures/fracture-management'),
    import('./rehabilitation/physical-therapy'),
    import('./rehabilitation/rehabilitation-principles'),
    // In-depth modules
    import('./fractures/common-fracture-types'),
    import('./fractures/fracture-management-principles'),
    import('./joint-replacement/hip-arthroplasty'),
    import('./joint-replacement/knee-arthroplasty'),
    import('./sports-medicine/acl-and-meniscus'),
    import('./sports-medicine/rotator-cuff-shoulder'),
    import('./spine/disc-herniation-stenosis'),
    import('./spine/scoliosis-deformity'),
  ]);

  return modules.map((m) => m.default);
};
