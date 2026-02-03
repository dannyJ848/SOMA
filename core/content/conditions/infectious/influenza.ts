/**
 * Influenza - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const influenza: EducationalContent = {
  id: 'condition-influenza',
  type: 'condition',
  name: 'Influenza',
  alternateNames: ['The Flu', 'Flu'],
  hpoId: 'HP:0100802',

  levels: {
    1: {
      level: 1,
      summary: 'Influenza is a virus causing fever, cough, body aches. A yearly shot can prevent it.',
      explanation: `Influenza is a respiratory virus that spreads easily between people.

**Symptoms:**
- Fever
- Muscle aches
- Cough, sore throat
- Feeling very tired

**Treatment:**
- Rest and fluids
- Medicines help you feel better
- Most people get better in a week

**Prevention:**
- Get a flu shot every year
- Wash hands often
- Stay home when sick`,
      keyTerms: [
        { term: 'Influenza', definition: 'A virus causing the flu' },
        { term: 'Virus', definition: 'Microbe that makes you sick' },
        { term: 'Vaccine', definition: 'Shot that prevents flu' },
      ],
      analogies: ['Flu spreads like wildfire through a school, jumping from person to person.', 'The vaccine gives your body a wanted poster for the virus.'],
      examples: ["A child gets the flu shot and doesn't get sick during flu season.", "An older person gets the flu and stays home to rest."],
      patientCounselingPoints: [
        'Get vaccinated every year',
        'Wash hands with soap for 20 seconds',
        'Stay home when you are sick to protect others',
      ],
    },
    2: {
      level: 2,
      summary: 'Influenza causes high fever, myalgias, cough. Antivirals if <48h of symptoms. Vaccines prevent complications.',
      explanation: `## Symptoms
- Sudden fever >38°C
- Myalgias, headache
- Cough, sore throat
- Vomiting in children

## Complications
- Pneumonia
- Exacerbations of COPD, CHF
- Myocarditis, pericarditis

## Diagnosis
- Rapid flu test (NP swab)
- Clinical diagnosis in season

## Treatment
- **Supportive:** Fluids, antipyretics
- **Oseltamivir 75mg BID x5 days**
- Baloxavir single dose

## Prevention
- Yearly vaccine
- Hand hygiene`,
      keyTerms: [
        { term: 'antivirals', definition: 'Medicines that stop viruses' },
        { term: 'myalgias', definition: 'Muscle aches' },
        { term: 'antipyretics', definition: 'Fever reducers' },
      ],
      clinicalNotes: 'Oseltamivir reduces symptom duration by 1 day. Hospitalized pts get antivirals regardless.',
    },
    3: {
      level: 3,
      summary: 'Influenza is orthomyxovirus with neuraminidase. Antivirals target neuraminidase or cap-dependent endonuclease.',
      explanation: `## Virology
- Orthomyxovirus
- ssRNA, segmented genome
- Types A, B, C (C mild)
- H, N surface glycoproteins

## Classification (A)
- H1N1, H3N2 (human)
- Avian (H5, H7, H9)
- Swine (H1N1pdm09)

## Mechanism
- Hemagglutinin binds sialic acid (entry)
- Neuraminidase releases virions (release)
- Antigenic drift (minor) vs shift (pandemic)

## Antiviral Mechanisms
| Drug | Target | Dosing |
|------|--------|--------|
| Oseltamivir | Neuraminidase inhibitor | 75mg BID 5d |
| Baloxavir | Cap-dependent endonuclease | Single dose |
| Amantadine | M2 ion channel | NOT USE (resistance) |

## Complications
- Viral pneumonia
- Secondary bacterial (S. aureus, S. pneumo)
- Myocarditis in young`,
      keyTerms: [
        { term: 'antigenic drift', definition: 'Small mutations in HA/NA genes' },
        { term: 'antigenic shift', definition: 'Major reassortment causing pandemics' },
        { term: 'hemagglutinin', definition: 'Viral protein that binds sialic acid' },
        { term: 'neuraminidase', definition: 'Viral enzyme that releases virions' },
      ],
      clinicalNotes: 'Vaccines yearly (or quadrivalent). 65yo+, chronic disease, pregnant pts get high dose.',
    },
    4: {
      level: 4,
      summary: 'Pandemic influenza requires nonpharmaceutical interventions, antiviral stockpiling, and vulnerability assessment.',
      explanation: `## Pandemic Preparedness
- Nonpharm: Social distance, masks
- Stockpile oseltamir, baloxir
- Risk groups

## Special Populations
**Pregnancy:**
- High risk (1918 high mortality)
- Oseltamir safe
- Vaccinate

**Immunocompromised:**
- Prolonged shedding (weeks)
- Reduce resistance with combo?

## Complications
- Encephalitis (children)
- Guillain-Barr (rare)
- Exacerbation of chronic disease (COPD, CHF)

## Diagnosis
- Rapid test (60-70% sensitive)
- Clinical diagnosis in season
- PCR if uncertain`,
      keyTerms: [
        { term: 'nonpharmaceutical interventions', definition: 'Public health measures beyond medications' },
        { term: 'Guillain-Barr', definition: 'Autoimmune paralysis after infection' },
        { term: 'viral shedding', definition: 'Releasing virus from the body' },
      ],
      clinicalNotes: 'Guillain-Barr from infection; GBS from vaccine is <1 per million.',
    },
    5: {
      level: 5,
      summary: 'Universal influenza vaccine and antiviral development targeting conserved stalk domain aim for broader protection.',
      explanation: `## Universal Vaccine
**Challenge:**
- Current: Head domain varies
- Solution: Stalk domain
- LAD, chimeric HA vaccines

## New Antivirals
- Pimodivir (inhibitor)
- Favipirir (polymerase)
- Broad-spectrum?

## Pandemic
- H5N1 bird flu
- H7N9 (not sustained H2H)
- Global surveillance (GISRS)`,
      keyTerms: [
        { term: 'LAD', definition: 'Long alpha helix domain of hemagglutinin' },
        { term: 'GISRS', definition: 'Global Influenza Surveillance and Response System' },
      ],
      clinicalNotes: 'Universal vaccine in clinical trials. Stockpile issues: supply chain, resistance.',
    },
  },

  media: [],
  citations: [
    { id: 'cdc-flu', type: 'website', title: 'Influenza Prevention', source: 'CDC', url: 'https://www.cdc.gov/flu', },
    { id: 'who-flu', type: 'article', title: 'Influenza Recommendations', source: 'WHO', },
  ],
  crossReferences: [
    { targetId: 'condition-pneumonia', targetType: 'condition', relationship: 'related', label: 'Pneumonia' },
    { targetId: 'condition-covid-19', targetType: 'condition', relationship: 'sibling', label: 'COVID-19' },
  ],
  tags: { systems: ['respiratory', 'infectious'], topics: ['virology', 'public health'], keywords: ['influenza', 'flu', 'vaccine'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'family medicine'] } },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default influenza;
