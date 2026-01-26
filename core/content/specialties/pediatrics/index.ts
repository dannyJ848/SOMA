/**
 * Pediatrics Specialty Content Index
 *
 * Comprehensive pediatric educational content for parent education covering:
 * - Developmental milestones by age
 * - Well-child visits schedule
 * - Childhood vaccination schedule
 * - Common childhood infections
 * - Pediatric fever approach
 * - Growth and nutrition
 * - Pediatric asthma
 * - ADHD and learning disorders
 * - Common pediatric emergencies
 */

// Developmental milestones
export { developmentalMilestones } from './developmental-milestones';

// Well-child visits
export { wellChildVisits } from './well-child-visits';

// Vaccination
export { childhoodVaccinationSchedule } from './vaccination-schedule';

// Common infections
export { commonChildhoodInfections } from './common-childhood-infections';

// Fever management
export { pediatricFeverApproach } from './pediatric-fever-approach';

// Growth and nutrition
export { growthAndNutrition } from './growth-and-nutrition';

// Respiratory
export { pediatricAsthma } from './pediatric-asthma';

// Behavioral/Developmental
export { adhdAndLearningDisorders } from './adhd-learning-disorders';

// Emergencies
export { pediatricEmergencies } from './pediatric-emergencies';

// Collect all content for registration
import { developmentalMilestones } from './developmental-milestones';
import { wellChildVisits } from './well-child-visits';
import { childhoodVaccinationSchedule } from './vaccination-schedule';
import { commonChildhoodInfections } from './common-childhood-infections';
import { pediatricFeverApproach } from './pediatric-fever-approach';
import { growthAndNutrition } from './growth-and-nutrition';
import { pediatricAsthma } from './pediatric-asthma';
import { adhdAndLearningDisorders } from './adhd-learning-disorders';
import { pediatricEmergencies } from './pediatric-emergencies';

export const pediatricsContent = [
  developmentalMilestones,
  wellChildVisits,
  childhoodVaccinationSchedule,
  commonChildhoodInfections,
  pediatricFeverApproach,
  growthAndNutrition,
  pediatricAsthma,
  adhdAndLearningDisorders,
  pediatricEmergencies,
];

export default pediatricsContent;
