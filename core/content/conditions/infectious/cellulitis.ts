/**
 * Cellulitis - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const cellulitis: EducationalContent = {
  id: 'condition-cellulitis',
  type: 'condition',
  name: 'Cellulitis',
  alternateNames: ['Bacterial Skin Infection', 'Skin Infection'],
  hpoId: 'HP:0011351',

  levels: {
    1: {
      level: 1,
      summary: 'Cellulitis is a skin infection that makes skin red, swollen, and warm. Antibiotics help.',
      explanation: `Cellulitis is a common skin infection in deeper skin layers.

**Symptoms:**
- Red, swollen skin
- Warm and tender
- Fever, chills

**Treatment:**
- Antibiotics
- Rest the area
- Keep it elevated

**Prevention:**
- Clean cuts right away
- Use lotion for dry skin`,
      keyTerms: [
        { term: 'Cellulitis', definition: 'Infection in the skin' },
        { term: 'Antibiotics', definition: 'Medicines that treat infections' },
      ],
      analogies: ['Cellulitis is like a fire spreading through dry grass.', 'Antibiotics are firefighters putting out the fire.'],
      examples: ['A person gets a red, hot leg after a small cut.', 'A foot blister gets infected after hiking.'],
      patientCounselingPoints: [
        'Clean all cuts with soap and water',
        'Watch for redness spreading',
        'Take all antibiotics even if better',
      ],
    },
    2: {
      level: 2,
      summary: 'Cellulitis is a skin infection from strep or staph. Oral antibiotics (cephalexin).',
      explanation: `## Causes
- Strep, Staph
- Breaks in skin: wounds, eczema, tinea
- Lymphedema, obesity

## Diagnosis
- Erythema, warmth, edema
- Distinguish from DVT (bilateral?)

## Treatment
- Cephalexin 500 QID
- Clindamycin
- Elevation important`,
      keyTerms: [
        { term: 'Strep', definition: 'Bacteria causing skin infections' },
        { term: 'Staph', definition: 'Bacteria on skin and nose' },
        { term: 'DVT', definition: 'Blood clot in leg (similar to cellulitis)' },
        { term: 'edema', definition: 'Swelling' },
      ],
      clinicalNotes: 'Elevate the limb to speed recovery.',
    },
    3: {
      level: 3,
      summary: 'Cellulitis is a bacterial dermis/hypodermis infection. Pathogens: Strep (group A), S. aureus.',
      explanation: `## Pathogens
- Strep pyogenes (group A) most
- Staph aureus
- After water exposure: Aeromonas, Vibrio

## Clinical
- Sharp demarcation (vs DVT)
- Lymphangitic streaks
- Systemic signs: fever, leukocytosis

## Treatment
**Mild:**
- Cephalexin 500 QID
- Dicloxacillin
- Clindamycin

**Severe:**
- Vancomycin (MRSA)
- Cefazolin if MSSA

## Recurrence
- Tinea pedis portal
- Lymphedema
- Prophylaxis: PCN`,
      keyTerms: [
        { term: 'lymphangitis', definition: 'Inflammation of lymphatic vessels' },
        { term: 'MRSA', definition: 'Methicillin-resistant Staph aureus' },
        { term: 'MSSA', definition: 'Methicillin-sensitive Staph aureus' },
        { term: 'tinea pedis', definition: "Athlete's foot - fungal infection" },
      ],
      clinicalNotes: 'Always examine for abscess (drain). Consider PCN allergy.',
    },
    4: {
      level: 4,
      summary: 'Manage MRSA, diabetic foot, and recurrent cellulitis with extended coverage.',
      explanation: `## MRSA Cellulitis
- Purulent?
- Drain abscess + abx
- Trimeth-Sulfa, Doxy, Clinda

## Diabetic Foot
- High risk for osteomyelitis
- Probe to bone
- X-ray, MRI

## Recurrence
- Suppressive abx
- Treat tinea
- Lymphedema therapy

## Severe
- Sepsis, necrotizing
- Surgical eval`,
      keyTerms: [
        { term: 'purulent', definition: 'Pus-producing infection' },
        { term: 'suppressive abx', definition: 'Long-term antibiotics' },
      ],
      clinicalNotes: 'Drain abscesses; abx alone ineffective.',
    },
    5: {
      level: 5,
      summary: 'Future: vaccines for strep/staph, new delivery, rapid diagnostics.',
      explanation: `## Prevention
- Strep vaccine in develop
- S. aureus polysaccharide

## Diagnostics
- PCR cellulitis
- Distinguish from mimics

## Therapy
- Liposomal delivery
- Short courses?`,
      keyTerms: [
        { term: 'liposomal', definition: 'Fat-based drug delivery' },
      ],
      clinicalNotes: 'Overdiagnosis common; mimic by stasis dermatitis.',
    },
  },

  media: [],
  citations: [
    { id: 'cellulitis-cdc', type: 'website', title: 'Skin Infections', source: 'CDC', url: 'https://www.cdc.gov', },
    { id: 'cellulitis-uptodate', type: 'article', title: 'Cellulitis', source: 'UpToDate', },
  ],
  crossReferences: [
    { targetId: 'condition-osteomyelitis', targetType: 'condition', relationship: 'related', label: 'Osteomyelitis' },
    { targetId: 'condition-sepsis', targetType: 'condition', relationship: 'related', label: 'Sepsis' },
  ],
  tags: { systems: ['integumentary', 'infectious'], topics: ['dermatology', 'bacterial'], keywords: ['cellulitis', 'skin infection', 'MRSA', 'strep'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'family medicine'] } },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default cellulitis;
