/**
 * Psoriasis - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const psoriasis: EducationalContent = {
  id: 'condition-psoriasis',
  type: 'condition',
  name: 'Psoriasis',
  nameEs: 'Psoriasis',
  alternateNames: ['Plaque Psoriasis', 'Psoriasis Vulgaris'],
  hpoId: 'HP:0003765',

  levels: {
    1: {
      level: 1,
      summary: 'Psoriasis is a chronic skin condition that causes red, scaly patches on the skin due to the immune system speeding up skin cell growth.',
      explanation: `In psoriasis, your immune system causes skin cells to grow too fast. Normally skin cells take a month to grow, but in psoriasis they take just days, causing scales to build up.

**Symptoms:**
- Red patches with silvery scales
- Dry, cracked skin that may bleed
- Itching, burning, or soreness
- Thick, pitted nails
- Stiff, swollen joints (psoriatic arthritis)

**Common locations:** Elbows, knees, scalp, lower back

**Treatment:**
- Creams and ointments (topicals)
- Light therapy
- Oral or injected medications for severe cases`,
      keyTerms: [
        { term: 'psoriasis', definition: 'Chronic skin condition causing red, scaly patches' },
        { term: 'plaque', definition: 'Raised, red patch of skin covered with scales' },
      ],
      analogies: ['In psoriasis, your skin factory is running on overdrive, making cells faster than they can be shed.'],
      examples: ['A person with thick, red, scaly patches on their elbows and knees that come and go has classic psoriasis.'],
    },
    2: {
      level: 2,
      summary: 'Psoriasis is an immune-mediated inflammatory disease with multiple phenotypes (plaque, guttate, pustular, erythrodermic), treated with topicals, phototherapy, or systemic agents based on severity.',
      explanation: `## Types
- **Plaque (Vulgaris):** 80-90%, well-demarcated erythematous plaques with silvery scale
- **Guttate:** Small drop-like lesions, often post-streptococcal
- **Pustular:** Sterile pustules, may be generalized (severe)
- **Inverse:** Flexural areas, less scale
- **Erythrodermic:** Generalized erythema (medical emergency)

## Severity
- Mild: <3% BSA
- Moderate: 3-10% BSA
- Severe: >10% BSA or high impact areas

## Treatment
**Mild:**
- Topical corticosteroids
- Vitamin D analogs (calcipotriene)
- Combination products

**Moderate-Severe:**
- Phototherapy (NB-UVB)
- Methotrexate, cyclosporine
- Biologics (TNF, IL-17, IL-23 inhibitors)

## Comorbidities
- Psoriatic arthritis (30%)
- Cardiovascular disease
- Metabolic syndrome
- Depression`,
      keyTerms: [
        { term: 'BSA', definition: 'Body surface area; measures extent of skin involvement' },
        { term: 'NB-UVB', definition: 'Narrowband ultraviolet B phototherapy' },
        { term: 'psoriatic arthritis', definition: 'Inflammatory arthritis associated with psoriasis' },
      ],
    },
    3: {
      level: 3,
      summary: 'Psoriasis pathogenesis centers on IL-23/IL-17 axis dysregulation, with biologics targeting TNF, IL-17, and IL-23 transforming treatment of moderate-severe disease.',
      explanation: `## Pathophysiology
- **Dendritic cell activation:** Produce IL-23
- **Th17 cell differentiation:** IL-23 drives Th17 expansion
- **IL-17A release:** Activates keratinocytes
- **Keratinocyte hyperproliferation:** Epidermal thickening, scale
- **Genetic factors:** HLA-Cw6, IL23R, TNFAIP3

## Biologic Therapy
| Class | Agents | PASI 90 Response |
|-------|--------|------------------|
| Anti-TNF | Adalimumab, etanercept, infliximab | 40-60% |
| Anti-IL-17A | Secukinumab, ixekizumab | 70-80% |
| Anti-IL-17A receptor | Brodalumab | 70-80% |
| Anti-IL-23 | Guselkumab, risankizumab | 75-85% |

## Treatment Selection
- Anti-IL-23 may have best durability
- Anti-IL-17 may have faster onset
- Anti-TNF also treats psoriatic arthritis
- Consider comorbidities (IBD—avoid IL-17 inhibitors)`,
      keyTerms: [
        { term: 'IL-23', definition: 'Interleukin-23; cytokine driving Th17 differentiation in psoriasis' },
        { term: 'IL-17', definition: 'Interleukin-17; key effector cytokine in psoriasis' },
        { term: 'PASI', definition: 'Psoriasis Area and Severity Index; measures disease severity' },
      ],
      clinicalNotes: 'IL-17 inhibitors can worsen or unmask IBD—avoid in patients with Crohn\'s. IL-23 inhibitors have long dosing intervals and high response rates.',
    },
    4: {
      level: 4,
      summary: 'Advanced psoriasis management addresses treatment optimization, biologic switching strategies, management of special populations, and comprehensive cardiometabolic risk reduction.',
      explanation: `## Biologic Optimization
**Primary Non-Response:**
- Switch to different mechanism
- Consider methotrexate combination

**Secondary Failure:**
- Anti-drug antibodies
- Switch within or across class

## Special Populations
**Pregnancy:**
- Certolizumab (Fc-free, minimal placental transfer)
- Limit systemic agents

**Children:**
- Multiple biologics now approved
- Etanercept, adalimumab, secukinumab, ixekizumab

## Psoriatic Arthritis
- Screen all psoriasis patients
- Many biologics treat both conditions
- May need rheumatology co-management

## Cardiometabolic Disease
- CV risk equivalent to diabetes
- Aggressive risk factor management
- Systemic inflammation contributes to atherosclerosis
- Biologics may reduce CV events`,
      keyTerms: [
        { term: 'anti-drug antibodies', definition: 'Antibodies against biologic medications causing treatment failure' },
        { term: 'certolizumab', definition: 'Fc-free anti-TNF with minimal placental transfer; preferred in pregnancy' },
        { term: 'CV risk', definition: 'Cardiovascular risk elevated in psoriasis due to chronic inflammation' },
      ],
      clinicalNotes: 'Screen all psoriasis patients for psoriatic arthritis (PEST questionnaire). CV risk management should be part of comprehensive psoriasis care.',
    },
    5: {
      level: 5,
      summary: 'Precision dermatology in psoriasis integrates biomarkers for treatment selection, novel oral therapies, understanding psoriasis endotypes, and research on disease modification and prevention.',
      explanation: `## Emerging Therapies
**Oral Small Molecules:**
- Deucravacitinib (TYK2 inhibitor): First in class, oral
- Apremilast (PDE4 inhibitor): Mild-moderate disease

**Novel Targets:**
- Anti-IL-36: For generalized pustular psoriasis
- Bimekizumab (dual IL-17A/F): Very high efficacy

## Biomarkers
- HLA-Cw6 may predict response
- Transcriptomic signatures
- Proteomic markers
- Skin microbiome

## Disease Modification
- Can biologics prevent psoriatic arthritis?
- Early aggressive treatment paradigm
- Treat-to-target approaches

## Psoriasis Endotypes
- High IL-17, low IL-23 (or reverse)
- May guide therapy selection
- Biomarker-guided precision treatment`,
      keyTerms: [
        { term: 'deucravacitinib', definition: 'First-in-class TYK2 inhibitor for psoriasis' },
        { term: 'bimekizumab', definition: 'Dual IL-17A and IL-17F inhibitor with very high efficacy' },
        { term: 'endotype', definition: 'Disease subtype defined by underlying biology' },
      ],
      clinicalNotes: 'Deucravacitinib offers oral convenience with biologic-like efficacy without JAK inhibitor safety concerns. Bimekizumab has highest PASI 100 rates seen in trials.',
    },
  },

  media: [],
  citations: [{ id: 'aad-psoriasis-2020', type: 'article', title: 'AAD-NPF Guidelines for Psoriasis Treatment', source: 'Journal of the American Academy of Dermatology' }],
  crossReferences: [{ targetId: 'condition-psoriatic-arthritis', targetType: 'condition', relationship: 'related', label: 'Psoriatic Arthritis' }],
  tags: { systems: ['integumentary', 'immune'], topics: ['dermatology', 'rheumatology'], keywords: ['psoriasis', 'plaque', 'biologics', 'IL-17', 'IL-23'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] } },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default psoriasis;
