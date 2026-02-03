/**
 * Osteomyelitis - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const osteomyelitis: EducationalContent = {
  id: 'condition-osteomyelitis',
  type: 'condition',
  name: 'Osteomyelitis',
  alternateNames: ['Bone Infection'],
  hpoId: 'HP:0010880',

  levels: {
    1: {
      level: 1,
      summary: 'Osteomyelitis is an infection of the bone that causes pain and fever.',
      explanation: `Osteomyelitis is when bacteria get into the bone and cause infection.

**Symptoms:**
- Bone pain
- Fever
- Swelling, redness
- Trouble moving

**Treatment:**
- Antibiotics through IV
- Sometimes surgery

**Who gets it:**
- People with diabetes
- After injuries
- Children`,
      keyTerms: [
        { term: 'Osteomyelitis', definition: 'Infection of the bone' },
        { term: 'Antibiotics', definition: 'Medicines that treat infections' },
      ],
      analogies: ['Bone infection is like termites eating wood inside your house.'],
      examples: ['A diabetic patient has a foot ulcer and bone pain.', 'A child has leg pain and fever.'],
      patientCounselingPoints: [
        'Finish all antibiotics',
        'Protect your feet if you have diabetes',
        'Watch for signs of infection after surgery',
      ],
    },
    2: {
      level: 2,
      summary: 'Osteomyelitis involves bone pain, fever. Diagnose with X-ray or MRI. Treat weeks.',
      explanation: `## Causes
- Staph aureus common
- Streptococcus
- Trauma

## Diagnosis
- X-ray (late)
- MRI (best)
- Biopsy culture

## Treatment
- IV antibiotics 4-6 weeks
- Sometimes debridement`,
      keyTerms: [
        { term: 'Staph aureus', definition: 'Common cause of bone infection' },
        { term: 'MRI', definition: 'Detailed scan of bones' },
        { term: 'debridement', definition: 'Removing dead tissue' },
      ],
      clinicalNotes: 'Chronic may need surgery.',
    },
    3: {
      level: 3,
      summary: 'Osteomyelitis is bone infection via hematogenous spread or contiguous spread. S. aureus most common.',
      explanation: `## Pathogenesis
- Hematogenous (children)
- Contiguous (diabetic foot)
- Vascular insufficiency

## Pathogens
- S. aureus
- Streptemi, Enteric (bowel)
- Pseudomonas (puncture)

## Diagnosis
- MRI with gadolinium (100%)
- CT if MRI not avail
- Bone culture > surface swab
- WBC, ESR, CRP

## Treatment
- **Acute:** Cefazolin, Vancomycin
- **Chronic:** Debridement
- Duration: 4-6 weeks`,
      keyTerms: [
        { term: 'hematogenous', definition: 'Spread through blood' },
        { term: 'contiguous', definition: 'Spread from nearby infection' },
        { term: 'CRP', definition: 'C-reactive protein, inflammation marker' },
        { term: 'ESR', definition: 'Erythrocyte sedimentation rate, inflammation' },
      ],
      clinicalNotes: 'Cure: ESR, CRP normalize.',
    },
    4: {
      level: 4,
      summary: 'Treatment: IV antibiotics guided by culture, surgical debridement, and chronic suppression.',
      explanation: `## Antibiotics
- Target organism
- Oral: Linezolid, Clinda
- IV: Vancomycin, Cephalosporin
- Duration: 4-6 weeks

## Surgery
- Debridement
- Remove hardware
- Amputation if necrotic

## Chronic
- Antibiotic beads
- Hyperbaric?

## Diabetic Foot
- Probe to bone
- MRI, bone scan`,
      keyTerms: [
        { term: 'antibiotic beads', definition: 'Antibiotic placed in wound' },
        { term: 'hyperbaric', definition: 'Oxygen therapy' },
      ],
      clinicalNotes: 'Diabetics: low threshold for imaging.',
    },
    5: {
      level: 5,
      summary: 'Molecular diagnostics, phage therapy, shorter courses in trials.',
      explanation: `## Diagnostics
- PCR from bone
- 16S sequencing

## Treatment
- Oral step-down
- Short courses?
- Phage`,
      keyTerms: [
        { term: '16S sequencing', definition: 'Bacterial RNA identification' },
        { term: 'phage', definition: 'Virus that kills bacteria' },
      ],
      clinicalNotes: 'Step-down therapy cost-effective.',
    },
  },

  media: [],
  citations: [
    { id: 'osteo-cdc', type: 'website', title: 'Bone Infections', source: 'CDC', url: 'https://www.cdc.gov', },
    { id: 'osteo-uptodate', type: 'article', title: 'Osteomyelitis', source: 'UpToDate', },
  ],
  crossReferences: [
    { targetId: 'condition-cellulitis', targetType: 'condition', relationship: 'related', label: 'Cellulitis' },
    { targetId: 'condition-sepsis', targetType: 'condition', relationship: 'related', label: 'Sepsis' },
  ],
  tags: { systems: ['musculoskeletal', 'infectious'], topics: ['orthopedics', 'infectious'], keywords: ['osteomyelitis', 'bone infection'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] } },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default osteomyelitis;
