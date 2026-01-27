/**
 * COVID-19 - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const covid19: EducationalContent = {
  id: 'condition-covid-19',
  type: 'condition',
  name: 'COVID-19',
  alternateNames: ['SARS-CoV-2', 'Coronavirus Disease 2019'],
  hpoId: 'HP:0410266',

  levels: {
    1: {
      level: 1,
      summary: 'COVID-19 is a virus causing fever, cough, and trouble breathing. Vaccines protect against severe disease.',
      explanation: `COVID-19 is a virus that affects the lungs and can make it hard to breathe.

**Symptoms:**
- Fever
- Cough
- Shortness of breath
- Loss of taste/smell

**Prevention:**
- Get vaccinated
- Wear masks in crowds
- Wash hands often

**Treatment:**
- Most recover at home
- Some need hospital care
- Vaccines prevent severe disease`,
      keyTerms: [
        { term: 'COVID-19', definition: 'A virus affecting the lungs' },
        { term: 'Vaccine', definition: 'Prevents severe illness' },
        { term: 'Pandemic', definition: 'Worldwide spread of disease' },
      ],
      analogies: [
        'The virus spreads like a chain reaction - one person passes it to two, who pass to four, and so on.',
      ],
      examples: ['A family gets vaccinated and avoids severe COVID.', 'Someone wears a mask at the store to protect others.'],
      patientCounselingPoints: [
        'Keep up to date with COVID vaccines',
        'Stay home if you have symptoms',
        'Call doctor if you have trouble breathing',
      ],
    },
    2: {
      level: 2,
      summary: 'SARS-CoV-2 causes pneumonia and systemic inflammation. Diagnose with PCR. Treat mild cases at home.',
      explanation: `## Symptoms
- Fever, cough, dyspnea
- Loss of taste/smell
- GI (diarrhea, nausea)

## Diagnosis
- PCR (gold standard)
- Rapid antigen

## Treatment
- Home: Rest, fluids
- Severe: Hospital, oxygen, steroids

## Prevention
- Vaccines
- Masks, social distance

## Complications
- Pneumonia
- Blood clots`,
      keyTerms: [
        { term: 'SARS-CoV-2', definition: 'The virus that causes COVID-19' },
        { term: 'PCR', definition: 'Lab test that finds the virus' },
        { term: 'Dyspnea', definition: 'Difficulty breathing' },
      ],
      clinicalNotes: 'Dexamethasone for severe cases improves mortality.',
    },
    3: {
      level: 3,
      summary: 'COVID-19 is a betacoronavirus using ACE2 receptor. Management depends on severity.',
      explanation: `## Virology
- Betacoronavirus
- ssRNA
- Spike protein binds ACE2 (type II pneumocytes)
- TMPRSS2 activation

## Clinical Course
- Incubation: 2-14 days (median 5)
- Infectious 2 days before symptoms
- Lymphopenia, elevated LDH, CRP

## Classification
**Mild:** O2 sat >94%
**Severe:** O2 <94%, pneumonia
**Critical:** ARDS, shock, MOF

## Treatment
| Severity | Management |
|---------|------------|
| Mild | Home care |
| Severe | Dexamethasone 6mg, Remdesivir |
| Critical | Dexamethasone, Tocilizumab, Baricitinib |

## Prevention
- mRNA vaccines: Pfizer, Moderna (2 dose)
- Adenovirus: J&J (1 dose)
- Novavax (protein subunit)`,
      keyTerms: [
        { term: 'ACE2', definition: 'Angiotensin-converting enzyme 2 - viral receptor' },
        { term: 'ARDS', definition: 'Acute respiratory distress syndrome' },
        { term: 'MOF', definition: 'Multi-organ failure' },
        { term: 'TMPRSS2', definition: 'Protease activating spike protein' },
      ],
      clinicalNotes: 'Vaccines effective vs severe, death. Breakthrough mild.',
    },
    4: {
      level: 4,
      summary: 'COVID management stratified by risk and severity. Long COVID affects many systems.',
      explanation: `## Risk Stratification
**High Risk:**
- Age >65
- Obesity, CAD, CKD
- Immunocompromised

## Therapeutics
- Remdesivir: <7 days (recovery)
- Baricitinib/Tocilizumab: Inflammation
- Anticoagulation: Heparin (hospital)

## PAXLOVID
- Nirmatrelvir/ritonavir
- 5 days, mild/moderate, high risk
- Drug interactions

## Long COVID
- Fatigue, brain fog
- Cardio: POTS, dysautonomia
- Management: Supportive`,
      keyTerms: [
        { term: 'PAXLOVID', definition: 'Antiviral for high-risk outpatients' },
        { term: 'Long COVID', definition: 'Symptoms lasting >3 months' },
        { term: 'POTS', definition: 'Postural orthostatic tachycardia syndrome' },
      ],
      clinicalNotes: 'Remdesivir needs GFR >30. PAXLOVID many drug interactions.',
    },
    5: {
      level: 5,
      summary: 'Variants and mutations affect transmission, immune evasion. Management: antivirals, vaccines.',
      explanation: `## Variants
- Alpha, Beta, Gamma, Delta, Omicron
- Spike changes affect transmission
- Immune escape (Omicron BA.5, BQ.1.1)

## Management
- Boosters: Bivalent (Wuhan + Omicron)
- Antivirals (PAXLOVID, Remdesivir)
- Nonpharm: masks, ventilation

## Research
- Pan-sarbecovirus vaccines
- Antiviral (Monupiravir)
- Long COVID: autoimmunity?

## Prevention
- Air filters
- CO2 monitoring
- Surge capacity`,
      keyTerms: [
        { term: 'immune escape', definition: 'Virus evades antibodies' },
        { term: 'sarbecovirus', definition: 'Subgenus including SARS, SARS-2' },
        { term: 'Bivalent', definition: 'Vaccine covering 2 variants' },
      ],
      clinicalNotes: 'PAXLOVID underused in eligible pts.',
    },
  },

  media: [],
  citations: [
    { id: 'nih-covid', type: 'article', title: 'COVID-19 Guidelines', source: 'NIH', },
    { id: 'cdc-covid', type: 'website', title: 'COVID-19', source: 'CDC', url: 'https://www.cdc.gov/coronavirus', },
    { id: 'who-covid', type: 'article', title: 'COVID-19 Treatment', source: 'WHO', },
  ],
  crossReferences: [
    { targetId: 'condition-pneumonia', targetType: 'condition', relationship: 'related', label: 'Pneumonia' },
    { targetId: 'condition-influenza', targetType: 'condition', relationship: 'sibling', label: 'Influenza' },
    { targetId: 'condition-sepsis', targetType: 'condition', relationship: 'related', label: 'Sepsis' },
  ],
  tags: { systems: ['respiratory', 'infectious'], topics: ['virology', 'public health'], keywords: ['COVID-19', 'coronavirus', 'SARS', 'vaccine', 'PAXLOVID'], clinicalRelevance: 'critical', examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'family medicine'] } },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default covid19;
