/**
 * Infectious Disease Content Module
 *
 * Comprehensive educational content covering bacterial infections,
 * viral infections, prevention strategies, antibiotic stewardship,
 * and serious infectious diseases.
 */

// Antibiotic Stewardship
export { antibioticClasses } from './antibiotic-stewardship/antibiotic-classes';
export { ANTIBIOTIC_RESISTANCE } from './antibiotic-stewardship/antibiotic-resistance';
export { resistanceMechanisms } from './antibiotic-stewardship/resistance-mechanisms';
export { stewardshipPrograms } from './antibiotic-stewardship/stewardship-programs';
export { APPROPRIATE_ANTIBIOTIC_USE } from './antibiotic-stewardship/appropriate-antibiotic-use';

// Bacterial Infections
export { staphInfections } from './bacterial-infections/staph-infections';
export { strepInfections } from './bacterial-infections/strep-infections';
export { gramNegative } from './bacterial-infections/gram-negative';
export { atypicalBacteria } from './bacterial-infections/atypical-bacteria';

// Prevention
export { vaccinationBasics } from './prevention/vaccination-basics';
export { infectionControl } from './prevention/infection-control';
export { travelProphylaxis } from './prevention/travel-prophylaxis';

// Serious Infections
export { SEPSIS } from './serious-infections/sepsis';
export { ENDOCARDITIS } from './serious-infections/endocarditis';
export { MENINGITIS } from './serious-infections/meningitis';
export { osteomyelitis } from './serious-infections/osteomyelitis';

// Viral Infections
export { INFLUENZA } from './viral-infections/influenza';
export { HIV_AIDS } from './viral-infections/hiv-aids';
export { HEPATITIS } from './viral-infections/hepatitis';
export { herpesViruses } from './viral-infections/herpes-viruses';
export { COVID_19 } from './viral-infections/covid-19';

// Content metadata
export const infectiousDiseaseContent = {
  id: 'infectious-disease',
  name: 'Infectious Disease',
  description: 'Comprehensive educational content covering bacterial infections, viral infections, prevention strategies, antibiotic stewardship, and serious infectious diseases.',
  categories: [
    {
      id: 'antibiotic-stewardship',
      name: 'Antibiotic Stewardship',
      topics: [
        { id: 'antibiotic-classes', name: 'Antibiotic Classes and Mechanisms' },
        { id: 'antibiotic-resistance', name: 'Antibiotic Resistance' },
        { id: 'resistance-mechanisms', name: 'Resistance Mechanisms' },
        { id: 'stewardship-programs', name: 'Antibiotic Stewardship Programs' },
        { id: 'appropriate-antibiotic-use', name: 'Appropriate Antibiotic Use' },
      ],
    },
    {
      id: 'bacterial-infections',
      name: 'Bacterial Infections',
      topics: [
        { id: 'staph-infections', name: 'Staphylococcus aureus Infections' },
        { id: 'strep-infections', name: 'Streptococcal Infections' },
        { id: 'gram-negative', name: 'Gram-Negative Bacterial Infections' },
        { id: 'atypical-bacteria', name: 'Atypical Bacterial Infections' },
      ],
    },
    {
      id: 'prevention',
      name: 'Prevention',
      topics: [
        { id: 'vaccination-basics', name: 'Vaccination Fundamentals' },
        { id: 'infection-control', name: 'Infection Control and Prevention' },
        { id: 'travel-prophylaxis', name: 'Travel Medicine and Prophylaxis' },
      ],
    },
    {
      id: 'serious-infections',
      name: 'Serious Infections',
      topics: [
        { id: 'sepsis', name: 'Sepsis' },
        { id: 'endocarditis', name: 'Endocarditis' },
        { id: 'meningitis', name: 'Meningitis' },
        { id: 'osteomyelitis', name: 'Osteomyelitis' },
      ],
    },
    {
      id: 'viral-infections',
      name: 'Viral Infections',
      topics: [
        { id: 'influenza', name: 'Influenza' },
        { id: 'hiv-aids', name: 'HIV/AIDS' },
        { id: 'hepatitis', name: 'Hepatitis' },
        { id: 'herpes-viruses', name: 'Herpesvirus Infections' },
        { id: 'covid-19', name: 'COVID-19' },
      ],
    },
  ],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
};

export type { EducationalContent } from '../types';
