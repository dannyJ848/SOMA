/**
 * Viral Infections Content Module
 *
 * Educational content covering major viral pathogens including
 * influenza, HIV, hepatitis, and herpesviruses.
 */

export { INFLUENZA as influenza } from './influenza';
export { HIV_AIDS as hivAids } from './hiv-aids';
export { HEPATITIS as hepatitis } from './hepatitis';
export { herpesViruses } from './herpes-viruses';
export { COVID_19 as covid19 } from './covid-19';

// Content metadata
export const viralInfectionsContent = {
  id: 'viral-infections',
  name: 'Viral Infections',
  description: 'Educational content covering major viral pathogens including influenza, HIV, hepatitis, and herpesviruses.',
  topics: [
    { id: 'influenza', name: 'Influenza' },
    { id: 'hiv-aids', name: 'HIV/AIDS' },
    { id: 'hepatitis', name: 'Hepatitis' },
    { id: 'herpes-viruses', name: 'Herpesvirus Infections' },
    { id: 'covid-19', name: 'COVID-19' },
  ],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
};

export type { EducationalContent } from '../../types';
