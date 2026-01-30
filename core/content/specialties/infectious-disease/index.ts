/**
 * Infectious Disease Specialty Content
 *
 * Comprehensive educational content covering:
 * - Bacterial infections (Gram-positive and Gram-negative)
 * - Viral infections and antivirals
 * - Fungal infections
 * - Parasitic infections
 * - HIV/AIDS
 * - Tuberculosis
 * - Sepsis and septic shock
 * - Healthcare-associated infections
 * - Antibiotic stewardship and resistance
 * - Vaccination science and schedules
 * - Infectious disease database (48 entries across 10 categories)
 */

// Bacterial Infections
export { bacterialInfectionsOverview } from './bacterial-infections-overview';
export { gramPositiveBacteria } from './gram-positive-bacteria';
export { gramNegativeBacteria } from './gram-negative-bacteria';

// Viral Infections
export { viralInfectionsOverview } from './viral-infections-overview';
export { antiviralTherapy } from './antiviral-therapy';

// Fungal Infections
export { fungalInfectionsOverview } from './fungal-infections-overview';

// Parasitic Infections
export { parasiticInfections } from './parasitic-infections';

// HIV/AIDS
export { hivAidsPathophysiology } from './hiv-aids-pathophysiology';

// Tuberculosis
export { tuberculosis } from './tuberculosis';

// Sepsis
export { sepsisAndSepticShock } from './sepsis-septic-shock';

// Healthcare-Associated Infections
export { healthcareAssociatedInfections } from './healthcare-associated-infections';

// Antibiotic Stewardship
export { antibioticStewardship } from './antibiotic-stewardship';

// Vaccination
export { vaccinationScience } from './vaccination-science';

// Infectious Disease Database (48 entries)
export {
  INFECTIOUS_DISEASE_ENTRIES,
  getInfectiousDiseaseEntry,
  searchInfectiousDisease,
  getInfectiousDiseaseByCategory,
  getInfectiousDiseaseCount,
} from './infectious-disease-database';
export type { InfectiousDiseaseEntry, InfectiousDiseaseCategory } from './infectious-disease-database';

// Collect all content for registration
import { bacterialInfectionsOverview } from './bacterial-infections-overview';
import { gramPositiveBacteria } from './gram-positive-bacteria';
import { gramNegativeBacteria } from './gram-negative-bacteria';
import { viralInfectionsOverview } from './viral-infections-overview';
import { antiviralTherapy } from './antiviral-therapy';
import { fungalInfectionsOverview } from './fungal-infections-overview';
import { parasiticInfections } from './parasitic-infections';
import { hivAidsPathophysiology } from './hiv-aids-pathophysiology';
import { tuberculosis } from './tuberculosis';
import { sepsisAndSepticShock } from './sepsis-septic-shock';
import { healthcareAssociatedInfections } from './healthcare-associated-infections';
import { antibioticStewardship } from './antibiotic-stewardship';
import { vaccinationScience } from './vaccination-science';

export const infectiousDiseaseContent = [
  bacterialInfectionsOverview,
  gramPositiveBacteria,
  gramNegativeBacteria,
  viralInfectionsOverview,
  antiviralTherapy,
  fungalInfectionsOverview,
  parasiticInfections,
  hivAidsPathophysiology,
  tuberculosis,
  sepsisAndSepticShock,
  healthcareAssociatedInfections,
  antibioticStewardship,
  vaccinationScience,
];

export default infectiousDiseaseContent;
