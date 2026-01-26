/**
 * Patient Advocacy and Healthcare Rights Content
 *
 * Comprehensive educational content empowering patients to understand their rights,
 * navigate the healthcare system, and advocate effectively for their care.
 */

export { patientBillOfRights } from './patient-bill-of-rights';
export { informedConsent } from './informed-consent';
export { hipaaPrivacy } from './hipaa-privacy';
export { medicalRecordsAccess } from './medical-records-access';
export { secondOpinions } from './second-opinions';
export { healthcareNavigation } from './healthcare-navigation';
export { insuranceBasics } from './insurance-basics';
export { questionsForDoctor } from './questions-for-doctor';
export { reportingMedicalErrors } from './reporting-medical-errors';
export { advanceDirectives } from './advance-directives';
export { healthcareProxy } from './healthcare-proxy';

// Convenience export of all advocacy content
import { patientBillOfRights } from './patient-bill-of-rights';
import { informedConsent } from './informed-consent';
import { hipaaPrivacy } from './hipaa-privacy';
import { medicalRecordsAccess } from './medical-records-access';
import { secondOpinions } from './second-opinions';
import { healthcareNavigation } from './healthcare-navigation';
import { insuranceBasics } from './insurance-basics';
import { questionsForDoctor } from './questions-for-doctor';
import { reportingMedicalErrors } from './reporting-medical-errors';
import { advanceDirectives } from './advance-directives';
import { healthcareProxy } from './healthcare-proxy';

export const patientAdvocacyContent = [
  patientBillOfRights,
  informedConsent,
  hipaaPrivacy,
  medicalRecordsAccess,
  secondOpinions,
  healthcareNavigation,
  insuranceBasics,
  questionsForDoctor,
  reportingMedicalErrors,
  advanceDirectives,
  healthcareProxy,
];

export default patientAdvocacyContent;
