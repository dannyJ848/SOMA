/**
 * Dental Checkups
 *
 * Comprehensive education on preventive dental care.
 */

import { EducationalContent } from '../../types';

export const DENTAL_CHECKUPS: EducationalContent = {
  id: 'concept-dental-checkups',
  type: 'concept',
  name: 'Dental Checkups',
  alternateNames: ['Dental examination', 'Oral health visit', 'Dental cleaning'],

  levels: {
    1: {
      level: 1,
      summary: 'Regular dental checkups help keep your teeth and gums healthy and can find problems before they become serious.',
      explanation: `Going to the dentist regularly is important for your oral health and overall health.

**What Happens at a Dental Checkup:**
- Examination of teeth and gums
- Professional cleaning
- X-rays (periodically)
- Oral cancer screening
- Fluoride treatment (if needed)

**Why It Matters:**
- Prevent cavities and gum disease
- Detect oral cancer early
- Oral health affects overall health
- Save money on costly treatments

**How Often:**
- Most people: Every 6 months
- Higher risk: More frequently`,
      keyTerms: [
        { term: 'cavity', definition: 'A hole in a tooth caused by decay' },
        { term: 'gum disease', definition: 'Infection of the gums that can lead to tooth loss' },
      ],
      analogies: ['Regular dental visits are like regular car washes and oil changes - they prevent bigger problems.'],
      examples: ['Regular cleanings helped Sarah avoid the expensive root canal her sister needed.'],
    },
    2: {
      level: 2,
      summary: 'Preventive dental care includes regular examinations, professional cleanings, and risk-based interventions to prevent caries, periodontal disease, and detect oral pathology.',
      explanation: `**Components of Dental Visit:**

*Examination:*
- Visual inspection
- Periodontal probing
- Oral cancer screening
- TMJ assessment
- Occlusion evaluation

*Cleaning (Prophylaxis):*
- Plaque removal
- Tartar (calculus) removal
- Polishing
- Fluoride application

*Radiographs:*
- Bitewings: Cavities between teeth
- Panoramic: Overall assessment
- Frequency based on risk

**Oral-Systemic Connections:**
- Periodontal disease and cardiovascular disease
- Diabetes and periodontal disease
- Pregnancy complications`,
      keyTerms: [
        { term: 'periodontal disease', definition: 'Infection affecting the gums and bone supporting teeth' },
        { term: 'prophylaxis', definition: 'Professional dental cleaning to prevent disease' },
      ],
      analogies: [],
    },
    3: {
      level: 3,
      summary: 'Evidence-based dental care emphasizes risk assessment, individualized prevention strategies, and the bidirectional relationship between oral and systemic health.',
      explanation: `**Risk-Based Care:**

*Caries Risk Assessment:*
- History of cavities
- Dietary habits
- Fluoride exposure
- Saliva characteristics
- Socioeconomic factors

*Periodontal Risk:*
- Smoking
- Diabetes
- Genetic factors
- Age
- Compliance

**Prevention Strategies:**

*Primary Prevention:*
- Fluoride (water, toothpaste, professional)
- Sealants for children
- Dietary counseling
- Oral hygiene instruction

*Secondary Prevention:*
- Regular exams for early detection
- Bitewing radiographs
- Periodontal screening

**Oral-Systemic Evidence:**
- Periodontal disease associated with CVD
- Poor glycemic control worsens periodontal disease
- Adverse pregnancy outcomes link to periodontal disease`,
      keyTerms: [
        { term: 'caries risk assessment', definition: 'Evaluation of factors contributing to cavity development' },
        { term: 'sealants', definition: 'Protective coatings applied to chewing surfaces of teeth' },
      ],
      analogies: [],
      clinicalNotes: 'Assess caries and periodontal risk. Individualize recall interval. Coordinate with medical providers for systemic conditions. Screen for oral cancer.',
    },
    4: {
      level: 4,
      summary: 'Integrating oral health into overall health care requires addressing access barriers, medical-dental collaboration, and evidence-based approaches to the oral-systemic health connection.',
      explanation: `**Healthcare Integration:**

*Medical-Dental Collaboration:*
- Diabetes management coordination
- Pre-operative dental clearance
- Bisphosphonate medication counseling
- Xerostomia management

*Access Challenges:*
- Dental care often not covered by insurance
- Medicare does not cover routine dental
- Significant disparities exist
- Emergency department visits for dental pain

**Oral Cancer:**
- Screening at dental visits
- Risk factors: Tobacco, alcohol, HPV
- HPV-related oropharyngeal cancer increasing
- Early detection improves outcomes

**Evidence Debates:**
- Optimal recall interval (6 months vs individualized)
- Antibiotic prophylaxis for dental procedures
- Scaling and root planing effectiveness`,
      keyTerms: [
        { term: 'xerostomia', definition: 'Dry mouth, often medication-induced' },
        { term: 'oropharyngeal cancer', definition: 'Cancer of the throat and back of the mouth' },
      ],
      analogies: [],
      clinicalNotes: 'Consider dental referral for medically complex patients. Screen for xerostomia in polypharmacy. Coordinate bisphosphonate therapy. Advocate for dental access.',
    },
    5: {
      level: 5,
      summary: 'Future dental care integrates precision approaches, teledentistry, and health policy reform to improve access while continuing to elucidate the mechanistic links between oral and systemic disease.',
      explanation: `**Emerging Approaches:**

*Technology:*
- Teledentistry for access
- AI for caries detection
- Salivary diagnostics
- Minimally invasive dentistry

*Research Frontiers:*
- Microbiome and oral health
- Mechanistic oral-systemic links
- Immunotherapy for periodontitis
- Regenerative approaches

*Policy:*
- Medicare dental coverage advocacy
- Integrated care models
- Community health center expansion
- School-based programs`,
      keyTerms: [
        { term: 'teledentistry', definition: 'Remote dental consultation using technology' },
        { term: 'salivary diagnostics', definition: 'Using saliva to detect disease markers' },
      ],
      analogies: [],
      clinicalNotes: 'Advocate for dental coverage. Use teledentistry to improve access. Stay current on oral-systemic evidence. Support integrated care models.',
    },
  },

  media: [],
  citations: [
    {
      id: 'ada-dental-care',
      type: 'website',
      title: 'Dental Care Guidelines',
      source: 'American Dental Association',
      url: 'https://www.ada.org/',
      accessedDate: '2025-01-24',
    },
  ],
  crossReferences: [],
  tags: {
    systems: ['digestive'],
    topics: ['preventive medicine', 'dentistry', 'oral health'],
    keywords: ['dental', 'oral health', 'teeth', 'gums', 'preventive care'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'family medicine'] },
  },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
