/**
 * Atopic Dermatitis (Eczema) - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const eczema: EducationalContent = {
  id: 'condition-eczema',
  type: 'condition',
  name: 'Atopic Dermatitis',
  nameEs: 'Dermatitis Atópica',
  alternateNames: ['Eczema', 'Atopic Eczema', 'AD'],
  hpoId: 'HP:0000964',

  levels: {
    1: {
      level: 1,
      summary: 'Eczema is a chronic skin condition causing itchy, red, dry skin that often starts in childhood and may come and go throughout life.',
      explanation: `Eczema causes your skin to become itchy, red, and dry. It often runs in families and is linked to allergies and asthma.

**Symptoms:**
- Intense itching (often worse at night)
- Red or brownish-gray patches
- Dry, cracked, scaly skin
- Small raised bumps that may leak fluid
- Thickened skin from scratching

**Common locations:** Inner elbows, behind knees, face, hands

**Treatment:**
- Moisturize frequently
- Avoid triggers (harsh soaps, allergens)
- Steroid creams for flares
- Medications for severe cases`,
      keyTerms: [
        { term: 'eczema', definition: 'Chronic itchy skin condition also called atopic dermatitis' },
        { term: 'flare', definition: 'Period when eczema symptoms get worse' },
      ],
      analogies: ['Eczema skin is like a brick wall with missing mortar—the barrier is broken, letting moisture out and irritants in.'],
      examples: ['A baby with itchy, red cheeks and dry patches in the elbow creases likely has atopic dermatitis.'],
    },
    2: {
      level: 2,
      summary: 'Atopic dermatitis is a chronic, relapsing inflammatory skin disease characterized by pruritus and eczematous lesions, part of the atopic triad with asthma and allergic rhinitis.',
      explanation: `## Diagnosis (Clinical)
**Major Features:**
- Pruritus
- Typical morphology and distribution (age-dependent)
- Chronic or relapsing course
- Personal/family history of atopy

## Distribution by Age
- **Infants:** Face, scalp, extensor surfaces
- **Children:** Flexural areas (antecubital, popliteal fossae)
- **Adults:** Hands, face, generalized

## Management
**Basic Skin Care:**
- Emollients (apply frequently, within 3 min of bathing)
- Gentle cleansers
- Trigger avoidance

**Topical Therapy:**
- Corticosteroids (mainstay for flares)
- Calcineurin inhibitors (tacrolimus, pimecrolimus)
- PDE4 inhibitor (crisaborole)
- JAK inhibitors (ruxolitinib)

**Systemic Therapy (Moderate-Severe):**
- Dupilumab (first-line biologic)
- JAK inhibitors (abrocitinib, upadacitinib)`,
      keyTerms: [
        { term: 'atopy', definition: 'Genetic tendency to develop allergic diseases (eczema, asthma, allergic rhinitis)' },
        { term: 'emollient', definition: 'Moisturizing cream or ointment that restores skin barrier' },
        { term: 'dupilumab', definition: 'IL-4/IL-13 blocking biologic for moderate-severe atopic dermatitis' },
      ],
    },
    3: {
      level: 3,
      summary: 'Atopic dermatitis involves skin barrier dysfunction (filaggrin mutations) and type 2 inflammation, with dupilumab and JAK inhibitors transforming treatment of moderate-severe disease.',
      explanation: `## Pathophysiology
**Barrier Dysfunction:**
- Filaggrin (FLG) mutations in 30-50%
- Reduced lipids and natural moisturizing factor
- Increased transepidermal water loss (TEWL)

**Type 2 Inflammation:**
- Th2 cytokines (IL-4, IL-13, IL-31)
- IL-31 mediates pruritus
- IgE elevation
- Eosinophil recruitment

## Systemic Therapies
| Agent | Mechanism | Key Points |
|-------|-----------|------------|
| Dupilumab | Anti-IL-4Rα | Injections Q2W, conjunctivitis common |
| Tralokinumab | Anti-IL-13 | Alternative to dupilumab |
| Abrocitinib | JAK1 inhibitor | Oral, fast onset |
| Upadacitinib | JAK1 inhibitor | Oral, highest efficacy |
| Baricitinib | JAK1/2 inhibitor | Lower doses in AD |

## Complications
- Bacterial infection (S. aureus colonization)
- Eczema herpeticum (HSV superinfection—urgent)
- Sleep disturbance, depression
- Food allergies (especially in infants)`,
      keyTerms: [
        { term: 'filaggrin', definition: 'Skin barrier protein; mutations are major AD risk factor' },
        { term: 'IL-31', definition: 'Interleukin-31; key itch mediator in atopic dermatitis' },
        { term: 'eczema herpeticum', definition: 'Herpes simplex superinfection of eczematous skin; emergency' },
      ],
      clinicalNotes: 'JAK inhibitors have faster onset than dupilumab but require monitoring (labs, infection risk). Eczema herpeticum requires urgent systemic acyclovir.',
    },
    4: {
      level: 4,
      summary: 'Advanced AD management addresses the itch-scratch cycle, infection prevention, systemic therapy selection, and emerging understanding of AD phenotypes and therapeutic sequencing.',
      explanation: `## Itch Management
- Type 2 inflammation targets (IL-4, IL-13)
- IL-31 inhibitors (nemolizumab)
- JAK inhibitors (IL-31 signaling)
- Antihistamines (limited efficacy for AD itch)

## Infection Prevention
- Dilute bleach baths (0.005% sodium hypochlorite)
- Decolonization strategies
- Prompt treatment of flares
- Avoid systemic antibiotics unless infection

## Treatment Sequencing
**Inadequate Response to Dupilumab:**
- Switch to JAK inhibitor
- Consider tralokinumab

**JAK Inhibitor Selection:**
- Abrocitinib and upadacitinib may have higher efficacy
- Consider safety profile (VTE, MACE in RA data)

## Phenotypes
- Intrinsic AD (non-IgE, Asian populations)
- Extrinsic AD (IgE-mediated)
- Pediatric vs adult-onset
- May respond differently to therapy`,
      keyTerms: [
        { term: 'nemolizumab', definition: 'Anti-IL-31 receptor antibody targeting pruritus' },
        { term: 'bleach bath', definition: 'Dilute sodium hypochlorite bath to reduce S. aureus colonization' },
        { term: 'intrinsic AD', definition: 'Atopic dermatitis without elevated IgE or sensitization' },
      ],
      clinicalNotes: 'Bleach baths (1/4-1/2 cup bleach in full bathtub, 2-3x/week) can reduce S. aureus and flares. Dupilumab-associated conjunctivitis may require ophthalmology referral.',
    },
    5: {
      level: 5,
      summary: 'Precision approaches in AD integrate biomarkers, microbiome modulation, novel therapeutic targets, and understanding of the atopic march with potential prevention strategies.',
      explanation: `## Biomarkers
- IgE levels (limited utility)
- Eosinophils, TARC/CCL17
- Transcriptomic signatures
- Lipid profiles

## Novel Targets
**Pruritus:**
- OX40L inhibitors (rocatinlimab, amlitelimab)
- IL-33 pathway

**Inflammation:**
- IL-22, IL-13 specific targeting
- PDE4 inhibitors (roflumilast cream)

## Microbiome
- S. aureus predominance in AD
- Dysbiosis precedes disease
- Microbiome transplant trials
- Commensal restoration

## Atopic March Prevention
- Emollient from birth in high-risk infants
- May prevent AD development
- BEEP, PEBBLES trials
- Early intervention paradigm`,
      keyTerms: [
        { term: 'atopic march', definition: 'Progression from AD to food allergy to asthma to allergic rhinitis' },
        { term: 'OX40L', definition: 'Costimulatory molecule on antigen-presenting cells; novel target' },
        { term: 'TARC', definition: 'Thymus and activation-regulated chemokine; AD biomarker' },
      ],
      clinicalNotes: 'Emollient therapy from birth may prevent AD in high-risk infants—counsel parents. The microbiome is a promising therapeutic frontier but not yet ready for clinical practice.',
    },
  },

  media: [],
  citations: [{ id: 'aad-ad-2022', type: 'article', title: 'AAD Guidelines for Atopic Dermatitis', source: 'Journal of the American Academy of Dermatology' }],
  crossReferences: [{ targetId: 'condition-asthma', targetType: 'condition', relationship: 'related', label: 'Asthma' }],
  tags: { systems: ['integumentary', 'immune'], topics: ['dermatology', 'allergy'], keywords: ['eczema', 'atopic dermatitis', 'pruritus', 'dupilumab'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['pediatrics', 'medicine'] } },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default eczema;
