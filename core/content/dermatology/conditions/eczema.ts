/**
 * Eczema (Atopic Dermatitis)
 *
 * Chronic inflammatory skin condition characterized by dry, itchy skin.
 */

import { EducationalContent } from '../../types';

export const eczemaContent: EducationalContent = {
  id: 'dermatology-eczema',
  type: 'topic',
  name: 'Eczema (Atopic Dermatitis)',
  alternateNames: ['Atopic Dermatitis', 'AD', 'Atopic Eczema'],

  levels: {
    1: {
      level: 1,
      summary: "Eczema is a condition that makes your skin red and itchy. It's common in children but can occur at any age. It's often associated with allergies and asthma.",
      explanation: `## What Is Eczema?

Eczema (atopic dermatitis) is a condition that causes dry, itchy, and inflamed skin. It's very common in babies and children, but adults can get it too.

## What Does It Look Like?

- Dry, sensitive skin
- Red, inflamed skin
- Itchy rash
- Dark, thickened, or scaly skin
- Bumps that may leak fluid

## Common Areas

**Babies:**
- Scalp
- Face
- Cheeks
- Arms and legs

**Older Children/Adults:**
- Inside elbows
- Behind knees
- Hands and feet
- Neck and face

## What Causes Eczema?

- Genetics (runs in families)
- Problems with skin barrier
- Immune system overreacts
- Environmental triggers
- Allergies
- Dry skin
- Stress

## Managing Eczema

- Moisturize skin regularly
- Avoid triggers (soaps, fragrances)
- Use gentle, fragrance-free products
- Don't scratch!
- See a doctor for treatment`,

      keyTerms: [
        { term: 'Inflamed', definition: 'Red, swollen, and irritated' },
        { term: 'Immune system', definition: "Body's defense system against germs" },
        { term: 'Skin barrier', definition: 'Outer layer of skin that protects body' },
        { term: 'Triggers', definition: 'Things that make eczema worse' },
      ],
      analogies: [
        'The skin barrier is like a brick wall that protects the inside of a house.',
        'Eczema is like having a wall with cracks - things get in and moisture gets out.',
      ],
      examples: [
        'Baby with dry, red patches on cheeks',
        'Child who scratches behind knees until they bleed',
        'Adult with chronic hand eczema from frequent hand washing',
      ],
    },

    2: {
      level: 2,
      summary: 'Atopic dermatitis is a chronic relapsing inflammatory skin disease. Treatment focuses on barrier repair, inflammation control, and trigger avoidance.',
      explanation: `## Atopic March

Eczema is often the first manifestation of atopic disease:
1. Atopic dermatitis (usually starts in infancy)
2. Allergic rhinitis (hay fever)
3. Asthma

**Associated Conditions:**
- Food allergies (eggs, milk, peanuts, soy)
- Allergic rhinitis
- Asthma
- Allergic conjunctivitis

## Diagnosis

**Major Criteria:**
- Pruritus (itching is required)
- Typical morphology and distribution
- Chronic or relapsing course

**Minor Criteria:**
- Early age of onset
- Xerosis (dry skin)
- IgE reactivity
- Personal/family history of atopy

## Treatment Principles

**1. Barrier Repair:**
- Daily bathing with gentle cleanser
- Immediate moisturizer application (soak and seal)
- Thick creams/ointments preferred

**2. Anti-Inflammatory:**
- Topical corticosteroids (first-line)
- Topical calcineurin inhibitors (TCIs)
- Crisaborole (PDE4 inhibitor)

**3. Trigger Avoidance:**
- Identify and avoid allergens
- Avoid irritants (fragrances, harsh soaps)
- Manage environmental factors

**4. Anti-Pruritic:**
- Antihistamines (help with sleep)
- Cool compresses
- Wet wrap therapy`,

      keyTerms: [
        { term: 'Atopic march', definition: 'Progression from eczema to allergies and asthma' },
        { term: 'Xerosis', definition: 'Abnormally dry skin' },
        { term: 'TCIs', definition: 'Topical Calcineurin Inhibitors - non-steroid anti-inflammatory creams' },
        { term: 'Crisaborole', definition: 'Non-steroid cream that blocks inflammation' },
      ],
      analogies: [
        'The atopic march is like a procession - one condition leads to another.',
        'Soak and seal is like trapping water in the skin with moisturizer.',
      ],
      examples: [
        'Child with eczema later develops asthma',
        'Patient prescribed hydrocortisone for flare-ups',
        'Parent taught to apply moisturizer immediately after bath',
      ],
      clinicalNotes: 'Bleach baths (1/2 cup in full tub) reduce bacterial colonization on skin. Wet wrap therapy helps severe flares. Dilute steroids can be used on face but caution with atrophy. TCIs approved for >2 years (tacrolimus) or >3 months (pimecrolimus).',
    },

    3: {
      level: 3,
      summary: 'Atopic dermatitis management requires stepwise approach based on severity. Moderate-severe disease may require systemic therapies including dupilumab.',
      explanation: `## Treatment by Severity

**Mild AD:**
- Daily moisturizer (liberally)
- Low-potency topical steroids as needed
- Avoid triggers
- Bathing with gentle cleanser

**Moderate AD:**
- Medium-potency topical steroids
- TCIs for sensitive areas
- Consider bleach baths
- Treat secondary infections
- Wet wrap therapy for flares

**Severe/Refractory AD:**
- Systemic therapies:
  - Dupilumab (anti-IL-4/13)
  - Methotrexate
  - Cyclosporine
  - Mycophenolate
  - Phototherapy (UVB, UVA1)

## Steroid Potency Guide

**Low potency (face, genitals, infants):**
- Hydrocortisone 1-2.5%
- Desonide 0.05%

**Medium potency (body, children):**
- Triamcinolone 0.1%
- Mometasone 0.1%
- Fluocinolone 0.025%

**High potency (thick lesions, adults):**
- Clobetasol 0.05%
- Halobetasol 0.05%
- Betamethasone dipropionate

## Complications

**Infections:**
- Staph aureus colonization (90%)
- Eczema herpeticum (HSV)
- Molluscum contagiosum
- Impetigo

**Treatment of Infection:**
- Oral antibiotics for cellulitis
- Acyclovir for eczema herpeticum
- Culture-directed therapy`,

      keyTerms: [
        { term: 'Dupilumab', definition: 'Biologic medication that blocks IL-4 and IL-13 for eczema' },
        { term: 'Eczema herpeticum', definition: 'Widespread HSV infection in eczema patients - medical emergency' },
        { term: 'Phototherapy', definition: 'Treatment using ultraviolet light to reduce skin inflammation' },
        { term: 'Atrophy', definition: 'Thinning of skin from steroid overuse' },
      ],
      analogies: [
        'Eczema herpeticum is like wildfire spreading on dry grass.',
        'Steroid atrophy is like skin becoming paper-thin.',
      ],
      examples: [
        'Child with eczema herpeticum needs IV acyclovir',
        'Adult with severe AD started on dupilumab',
        'Patient with skin atrophy from long-term clobetasol use',
      ],
      clinicalNotes: 'Topical steroids should be applied twice daily for flares, then tapered to weekends for maintenance. Use "fingertip unit" (FTU) to measure: 1 FTU = 0.5g (covers 2 adult hands). Monitor for growth suppression with long-term steroids in children.',
    },

    4: {
      level: 4,
      summary: 'Atopic dermatitis is a systemic inflammatory disorder with significant quality of life impact. Newer biologic therapies have transformed management of severe disease.',
      explanation: `## Systemic Therapies

**Dupilumab (First-Line Biologic):**
- Anti-IL-4 receptor alpha
- Blocks IL-4 and IL-13 signaling
- Dosing: 600mg load, then 300mg q2weeks
- Contraindications: None major
- Side effects: Conjunctivitis, injection reactions

**Tralokinumab:**
- Anti-IL-13
- Dosing: 600mg load, then 300mg q2weeks
- Similar efficacy to dupilumab

**Traditional Systemics:**
- Methotrexate: 10-25mg weekly
- Cyclosporine: 3-5 mg/kg/day (max 1-2 years)
- Mycophenolate: 1-3g daily
- Azathioprine: 2.5-3 mg/kg/day

## Quality of Life Impact

**Sleep:**
- Chronic itch disrupts sleep
- Secondary effects on mood, cognition
- Family sleep disturbance

**Psychological:**
- Anxiety and depression common
- Social stigma from visible lesions
- Body image concerns
- Bullying in school-age children

**Economic:**
- Direct costs: medications, appointments
- Indirect: missed work/school
- Caregiver burden

## Special Populations

**Pregnancy:**
- Topical steroids preferred
- Avoid methotrexate, mycophenolate
- Cyclosporine may be used if needed
- Dupilumab: limited data but appears safe

**Infants:**
- Gentle skin care essential
- Food allergy evaluation if symptoms suggest
- Growth monitoring with systemic therapies

**Elderly:**
- Thinner skin - atrophy risk higher
- More comorbidities
- Drug interactions`,

      keyTerms: [
        { term: 'Conjunctivitis', definition: 'Eye inflammation - common side effect of dupilumab' },
        { term: 'Biologic', definition: 'Medication made from living cells that targets specific parts of immune system' },
        { term: 'Caregiver burden', definition: 'Physical, emotional, and financial impact on those caring for patients' },
      ],
      analogies: [
        'Biologics are like smart bombs - they target specific parts of the immune system.',
        'Caregiver burden is like carrying a heavy load while trying to help someone else.',
      ],
      examples: [
        'Patient on dupilumab develops conjunctivitis - managed with eye drops',
        'Pregnant woman with severe AD managed with topical steroids',
        'Teenager with eczema experiences bullying at school',
      ],
      clinicalNotes: 'Eczema control tool (EASI), SCORAD, and IGA used to measure severity. Aim for EASI-75 (75% improvement). Set realistic expectations: control, not cure. Screen for allergic contact dermatitis if worsening despite therapy.',
    },

    5: {
      level: 5,
      summary: 'Atopic dermatitis pathogenesis involves skin barrier defects, immune dysregulation, and microbial factors. Targeted biologic therapies have revolutionized severe disease management.',
      explanation: `## Pathogenesis

**Skin Barrier Defects:**
- Filaggrin mutations (loss-of-function)
- Reduced ceramides
- Increased transepidermal water loss
- Enhanced allergen penetration

**Immune Dysregulation:**
- Th2 skewing (IL-4, IL-5, IL-13, IL-31)
- IgE overproduction
- Reduced antimicrobial peptides
- Defective innate immunity

**Microbiome Alterations:**
- S. aureus dominance
- Reduced microbial diversity
- Biofilm formation

## Emerging Therapies

**Targeted Biologics:**
- Nemolizumab (IL-31) - pruritus
- Lebrikizumab (IL-13)
- Omalizumab (anti-IgE) - mixed results

**JAK Inhibitors:**
- Abrocitinib (JAK1)
- Upadacitinib (JAK1)
- Baricitinib (JAK1/2)
- Oral administration, rapid onset
- Black box warning for thrombosis, malignancy

**Topical JAK Inhibitors:**
- Ruxolitinib cream
- Approved for mild-to-moderate AD

## Prevention Strategies

**Primary Prevention:**
- Early moisturizer use
- Probiotics (mixed evidence)
- Avoid harsh detergents

**Secondary Prevention:**
- Aggressive flare management
- Staph aureus decolonization
- Allergen avoidance if sensitized`,

      keyTerms: [
        { term: 'Filaggrin', definition: 'Protein important for skin barrier structure - mutations cause eczema' },
        { term: 'Th2 skewing', definition: 'Immune system preference for Th2 response causing allergic inflammation' },
        { term: 'IL-31', definition: 'Interleukin 31 - protein that causes itching' },
        { term: 'Biofilm', definition: 'Protective layer made by bacteria that resists immune response' },
      ],
      analogies: [
        'Filaggrin is like the mortar between bricks - without it the wall crumbles.',
        'Th2 skewing is like an overactive alarm system that reacts to everything.',
      ],
      examples: [
        'Patient with filaggrin mutation has severe, persistent AD',
        'JAK inhibitor used for patient who failed dupilumab',
        'Infant at high risk started on moisturizer for primary prevention',
      ],
      clinicalNotes: 'Eczema is associated with cardiovascular risk independent of traditional risk factors. Chronic inflammation contributes. Emphasize lifestyle modifications. Mental health screening essential. Consider multidisciplinary care with dermatology, allergy, and psychology.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['dermatology', 'eczema', 'atopic-dermatitis', 'itching', 'allergies'],
    systems: ['integumentary', 'immune'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['dermatology'] },
  },

  createdAt: '2025-01-28',
  updatedAt: '2025-01-28',
  version: 1,
  status: 'published',
};
