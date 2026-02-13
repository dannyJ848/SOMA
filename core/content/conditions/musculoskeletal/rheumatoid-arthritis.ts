/**
 * Rheumatoid Arthritis - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const rheumatoidArthritis: EducationalContent = {
  id: 'condition-rheumatoid-arthritis',
  type: 'condition',
  name: 'Rheumatoid Arthritis',
  nameEs: 'Artritis Reumatoide',
  alternateNames: ['RA', 'Inflammatory Arthritis'],
  hpoId: 'HP:0001370',

  levels: {
    1: {
      level: 1,
      summary: 'Rheumatoid arthritis is an autoimmune disease where your immune system attacks your joints, causing pain, swelling, and stiffness.',
      explanation: `In RA, your immune system mistakenly attacks the lining of your joints, causing inflammation that can damage the joints over time.

**Symptoms:**
- Joint pain and swelling (often hands and feet)
- Morning stiffness lasting over an hour
- Fatigue
- Same joints affected on both sides of body
- Warmth and redness in joints

**Treatment:**
- Disease-modifying medications (DMARDs)
- Physical therapy
- Sometimes surgery for damaged joints`,
      keyTerms: [
        { term: 'autoimmune', definition: 'When your immune system attacks your own body' },
        { term: 'inflammation', definition: 'Swelling, redness, and warmth from immune activity' },
      ],
      analogies: ['RA is like friendly fire—your immune system attacks your own joints by mistake.'],
      examples: ['A young woman with swollen, painful knuckles and wrists on both hands with morning stiffness lasting 2 hours may have RA.'],
    },
    2: {
      level: 2,
      summary: 'RA is a chronic inflammatory autoimmune disease causing symmetric polyarthritis, requiring early DMARD therapy to prevent joint destruction and disability.',
      explanation: `## Diagnosis
**Clinical Features:**
- Symmetric polyarthritis (≥3 joints)
- Small joint involvement (MCP, PIP, wrists)
- Morning stiffness >1 hour

**Labs:**
- RF (rheumatoid factor): 70-80% positive
- Anti-CCP: More specific, predicts erosive disease
- ESR/CRP elevated

**Imaging:**
- X-ray: Erosions, joint space narrowing (later disease)
- Ultrasound/MRI: Early synovitis

## Treatment
**Goals:** Remission or low disease activity

**Medications:**
- Methotrexate (first-line DMARD)
- Biologics (TNF inhibitors, others) if inadequate response
- Short-term prednisone for flares

**Monitoring:** Regular disease activity assessments (DAS28)`,
      keyTerms: [
        { term: 'DMARD', definition: 'Disease-modifying antirheumatic drug; prevents joint damage' },
        { term: 'anti-CCP', definition: 'Anti-cyclic citrullinated peptide antibody; specific for RA' },
        { term: 'synovitis', definition: 'Inflammation of the joint lining (synovium)' },
      ],
    },
    3: {
      level: 3,
      summary: 'RA pathogenesis involves citrullination, synovial inflammation with pannus formation, and bone erosion, treated with treat-to-target strategies using conventional and biologic DMARDs.',
      explanation: `## Pathophysiology
- **Citrullination:** Post-translational modification creating neoantigens
- **T and B cell activation:** Autoantibody production
- **Synovitis:** Synovial hyperplasia, angiogenesis
- **Pannus formation:** Invasive synovial tissue eroding cartilage/bone
- **Osteoclast activation:** Bone erosions via RANKL

## Treat-to-Target
- Goal: Remission or low disease activity
- Frequent assessments (every 1-3 months)
- Escalate therapy if target not met

## Biologic DMARDs
| Class | Examples |
|-------|----------|
| TNF inhibitors | Etanercept, adalimumab, infliximab |
| IL-6 inhibitors | Tocilizumab, sarilumab |
| T-cell costimulation | Abatacept |
| B-cell depletion | Rituximab |
| JAK inhibitors | Tofacitinib, baricitinib (oral) |

## Monitoring
- Disease activity scores (DAS28, CDAI)
- Infection screening before biologics
- Labs (CBC, LFTs, lipids for JAKi)`,
      keyTerms: [
        { term: 'pannus', definition: 'Invasive granulation tissue eroding cartilage and bone in RA' },
        { term: 'citrullination', definition: 'Conversion of arginine to citrulline, creating RA-specific antigens' },
        { term: 'treat-to-target', definition: 'Adjusting therapy to achieve predefined disease activity goals' },
      ],
      clinicalNotes: 'Screen for latent TB before starting TNF inhibitors or JAK inhibitors. Methotrexate remains backbone of therapy; most patients require combination with biologics.',
    },
    4: {
      level: 4,
      summary: 'Advanced RA management addresses difficult-to-treat disease, biologic selection and switching, cardiovascular risk, and emerging therapies while balancing efficacy with infection and malignancy risks.',
      explanation: `## Difficult-to-Treat RA
**Definition:** Failing ≥2 b/tsDMARDs with different mechanisms

**Approach:**
- Re-evaluate diagnosis (OA, fibromyalgia overlap)
- Assess adherence
- Address comorbidities (depression, obesity)
- Consider combination biologics (not recommended), triple therapy

## Biologic Selection
- All TNFi roughly equivalent for initial therapy
- Switch to different mechanism if TNFi failure
- IL-6i may be monotherapy (not for TNFi)
- Rituximab for seropositive patients

## Cardiovascular Risk
- RA increases CV risk 1.5-2x
- Treat CVD risk factors aggressively
- Statins, BP control
- Good RA control may reduce CV risk

## Safety Monitoring
- JAK inhibitors: VTE, MACE, malignancy signals (older patients)
- TNFi: Infection, reactivation TB, demyelination
- Rituximab: Infection, hypogammaglobulinemia`,
      keyTerms: [
        { term: 'difficult-to-treat RA', definition: 'RA not responding to multiple biologic DMARDs' },
        { term: 'b/tsDMARD', definition: 'Biologic or targeted synthetic DMARD' },
        { term: 'triple therapy', definition: 'Methotrexate + sulfasalazine + hydroxychloroquine' },
      ],
      clinicalNotes: 'JAK inhibitors have FDA boxed warning for thrombosis, MACE, and malignancy—consider in context of patient risk profile. Rituximab particularly effective in seropositive patients.',
    },
    5: {
      level: 5,
      summary: 'Precision rheumatology in RA integrates biomarkers for treatment selection, understanding of disease subsets, novel therapeutic targets, and goals of drug-free remission and disease interception.',
      explanation: `## Biomarker-Guided Therapy
- Seropositivity (RF, anti-CCP) predicts erosive disease
- Multi-biomarker disease activity (MBDA) score
- Synovial biopsy-guided therapy (research)
- Transcriptomic signatures predicting response

## Novel Targets
- BTK inhibitors (fenebrutinib)
- GM-CSF inhibitors
- JAK1 selective (upadacitinib, filgotinib)
- Combination small molecules

## Disease Interception
- Treating pre-RA (anti-CCP positive with arthralgia)
- Preventing progression to clinical RA
- Early intervention trials

## Drug-Free Remission
- Possible in 10-20% after sustained remission
- Taper biologics before csDMARDs
- Close monitoring for flares
- Biomarkers predicting successful tapering`,
      keyTerms: [
        { term: 'pre-RA', definition: 'Preclinical phase with autoantibodies but without clinical arthritis' },
        { term: 'disease interception', definition: 'Treating at-risk individuals before clinical disease develops' },
        { term: 'MBDA', definition: 'Multi-biomarker disease activity; blood test assessing RA activity' },
      ],
      clinicalNotes: 'Drug-free remission is achievable but requires careful tapering. Pre-RA intervention trials are ongoing—may reshape early disease management.',
    },
  },

  media: [],
  citations: [{ id: 'acr-ra-2021', type: 'article', title: 'ACR Guidelines for RA Treatment', source: 'Arthritis & Rheumatology' }],
  crossReferences: [{ targetId: 'condition-osteoarthritis', targetType: 'condition', relationship: 'related', label: 'Osteoarthritis' }],
  tags: { systems: ['musculoskeletal', 'immune'], topics: ['rheumatology'], keywords: ['rheumatoid arthritis', 'RA', 'DMARD', 'biologic', 'autoimmune'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] } },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default rheumatoidArthritis;
