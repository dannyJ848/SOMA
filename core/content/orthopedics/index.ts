/**
 * Orthopedics Patient Education Content
 *
 * Comprehensive orthopedic content covering:
 * - Anatomy (bones, joints, spine, major joints)
 * - Common Injuries (fractures, sprains, strains, dislocations, tendon/ligament injuries)
 * - Arthritis (osteoarthritis, joint replacement, non-surgical management)
 * - Spine (back pain, herniated disc, stenosis, sciatica, surgery)
 * - Sports Medicine (injuries, prevention, return to activity)
 * - Procedures (arthroscopy, joint replacement, fracture fixation, spinal surgery)
 * - Rehabilitation (physical therapy, recovery, home exercises, prevention)
 *
 * Multi-level complexity (1-5) for patient education
 * Focus on injury prevention and recovery expectations
 */

// Anatomy exports
export { bonesJointsOverview } from './anatomy/bones-joints-overview';
export { spineAnatomy } from './anatomy/spine-anatomy';
export { hipJointAnatomy } from './anatomy/hip-joint';
export { kneeJointAnatomy } from './anatomy/knee-joint';
export { shoulderJointAnatomy } from './anatomy/shoulder-joint';

// Injuries exports
export { fracturesContent } from './injuries/fractures';
export { sprainsAndStrainsContent } from './injuries/sprains-strains';
export { dislocationsContent } from './injuries/dislocations';
export { tendonInjuriesContent } from './injuries/tendon-injuries';
export { ligamentTearsContent } from './injuries/ligament-tears';

// Arthritis exports
export { osteoarthritisPatientContent } from './arthritis/osteoarthritis';
export { jointReplacementContent } from './arthritis/joint-replacement';
export { nonSurgicalManagementContent } from './arthritis/non-surgical-management';
export { injectionsContent } from './arthritis/injections';

// Spine exports
export { backPainContent } from './spine/back-pain';
export { herniatedDiscContent } from './spine/herniated-disc';
export { spinalStenosisContent } from './spine/spinal-stenosis';
export { sciaticaContent } from './spine/sciatica';
export { spineSurgeryDecisionContent } from './spine/when-surgery-needed';

// Sports Medicine exports
export { commonSportsInjuriesContent } from './sports-medicine/common-injuries';
export { injuryPreventionContent } from './sports-medicine/prevention';
export { returnToActivityContent } from './sports-medicine/return-to-activity';
export { physicalTherapyRoleContent } from './sports-medicine/physical-therapy-role';

// Procedures exports
export { arthroscopyContent } from './procedures/arthroscopy';
export { jointReplacementProcedureContent } from './procedures/joint-replacement';
export { fractureFixationContent } from './procedures/fracture-fixation';
export { spinalSurgeryOverviewContent } from './procedures/spinal-surgery';

// Rehabilitation exports
export { physicalTherapyExpectationsContent } from './rehabilitation/physical-therapy-expectations';
export { recoveryTimelinesContent } from './rehabilitation/recovery-timelines';
export { homeExercisesContent } from './rehabilitation/home-exercises';
export { preventingReinjuryContent } from './rehabilitation/preventing-reinjury';

// Content categories
export const ORTHOPEDICS_PATIENT_CATEGORIES = [
  'anatomy',
  'injuries',
  'arthritis',
  'spine',
  'sports-medicine',
  'procedures',
  'rehabilitation',
] as const;

export type OrthopedicsPatientCategory = (typeof ORTHOPEDICS_PATIENT_CATEGORIES)[number];

// Clinical priorities for triage/reference
export const ORTHOPEDICS_EMERGENCY_SIGNS = {
  critical: [
    'open-fracture',
    'compartment-syndrome',
    'spinal-cord-compression',
    'cauda-equina-syndrome',
    'septic-arthritis',
    'vascular-injury',
    'progressive-neurologic-deficit',
  ],
  urgent: [
    'hip-fracture',
    'joint-dislocation',
    'severe-instability',
    'significant-nerve-symptoms',
  ],
} as const;

// Recovery timeline general reference
export const GENERAL_RECOVERY_TIMELINES = {
  'minor-sprain': '1-3 weeks',
  'moderate-sprain': '4-6 weeks',
  'severe-sprain': '8-12 weeks',
  'simple-fracture': '6-8 weeks',
  'complex-fracture': '3-6 months',
  'tendon-repair': '4-6 months',
  'ligament-reconstruction': '6-12 months',
  'joint-replacement': '3-6 months',
  'spinal-fusion': '6-12 months',
} as const;

// All content for bulk operations
export const getAllOrthopedicsPatientContent = async () => {
  const modules = await Promise.all([
    // Anatomy
    import('./anatomy/bones-joints-overview'),
    import('./anatomy/spine-anatomy'),
    import('./anatomy/hip-joint'),
    import('./anatomy/knee-joint'),
    import('./anatomy/shoulder-joint'),
    // Injuries
    import('./injuries/fractures'),
    import('./injuries/sprains-strains'),
    import('./injuries/dislocations'),
    import('./injuries/tendon-injuries'),
    import('./injuries/ligament-tears'),
    // Arthritis
    import('./arthritis/osteoarthritis'),
    import('./arthritis/joint-replacement'),
    import('./arthritis/non-surgical-management'),
    import('./arthritis/injections'),
    // Spine
    import('./spine/back-pain'),
    import('./spine/herniated-disc'),
    import('./spine/spinal-stenosis'),
    import('./spine/sciatica'),
    import('./spine/when-surgery-needed'),
    // Sports Medicine
    import('./sports-medicine/common-injuries'),
    import('./sports-medicine/prevention'),
    import('./sports-medicine/return-to-activity'),
    import('./sports-medicine/physical-therapy-role'),
    // Procedures
    import('./procedures/arthroscopy'),
    import('./procedures/joint-replacement'),
    import('./procedures/fracture-fixation'),
    import('./procedures/spinal-surgery'),
    // Rehabilitation
    import('./rehabilitation/physical-therapy-expectations'),
    import('./rehabilitation/recovery-timelines'),
    import('./rehabilitation/home-exercises'),
    import('./rehabilitation/preventing-reinjury'),
  ]);

  return modules.map((m) => m.default);
};
