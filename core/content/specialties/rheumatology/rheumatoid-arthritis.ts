/**
 * Rheumatoid Arthritis - Comprehensive Educational Content
 *
 * Chronic autoimmune inflammatory arthritis affecting synovial joints
 * with systemic manifestations.
 */

import { EducationalContent } from '../../types';

export const rheumatoidArthritisContent: EducationalContent = {
  id: 'condition-rheumatoid-arthritis',
  type: 'condition',
  name: 'Rheumatoid Arthritis',
  alternateNames: ['RA', 'Rheumatoid Disease'],
  hpoId: 'HP:0001370',

  levels: {
    1: {
      level: 1,
      summary: 'Rheumatoid arthritis is an autoimmune disease that causes joint pain, swelling, and stiffness, especially in the hands and feet.',
      explanation: `Rheumatoid arthritis (RA) is a condition where your immune system attacks your joints, causing pain and swelling.

**What Happens:**
- Your immune system mistakenly attacks the lining of your joints
- This causes inflammation, pain, and eventually joint damage
- It usually affects both sides of the body (both hands, both knees)

**Common Symptoms:**
- Joint pain and swelling, especially in hands and feet
- Morning stiffness that lasts more than an hour
- Joints feel warm and may look red
- Fatigue and feeling unwell
- Symptoms come and go (flare-ups)

**Treatment:**
- Medicines called DMARDs that slow the disease
- Anti-inflammatory medicines for pain
- Physical therapy to keep joints moving
- Early treatment prevents joint damage`,
      keyTerms: [
        { term: 'autoimmune', definition: 'When the immune system attacks the body' },
        { term: 'DMARD', definition: 'Disease-modifying antirheumatic drug' },
        { term: 'flare', definition: 'Period when symptoms get worse' },
      ],
      analogies: [
        'Your immune system is like a security guard that usually protects you. In RA, it mistakes your joints for intruders and attacks them.',
      ],
      examples: [
        'A woman in her 40s notices both her hands are swollen and stiff in the mornings.',
      ],
    },
    2: {
      level: 2,
      summary: 'Rheumatoid arthritis is a chronic symmetric inflammatory polyarthritis; early treatment with DMARDs improves outcomes; diagnosis is based on clinical, laboratory, and imaging findings.',
      explanation: `RA is a systemic autoimmune disease primarily affecting synovial joints.

**Diagnostic Criteria (2010 ACR/EULAR):**
- Joint involvement (small joints score higher)
- Serology (RF, anti-CCP)
- Acute phase reactants (CRP, ESR)
- Duration of symptoms (≥6 weeks)

**Clinical Features:**
- Symmetric polyarthritis: MCPs, PIPs, wrists, knees, ankles
- Morning stiffness >1 hour
- Rheumatoid nodules (extensor surfaces)
- Extra-articular: Lungs, heart, eyes, blood vessels

**Laboratory:**
- Rheumatoid factor (RF): 70-80% sensitive
- Anti-CCP: More specific, earlier marker
- Elevated ESR, CRP

**Treatment:**
- DMARDs: Methotrexate (first-line), sulfasalazine, leflunomide
- Biologics: TNF inhibitors, IL-6 inhibitors, B-cell depleters
- JAK inhibitors: Tofacitinib, baricitinib
- Goal: Remission or low disease activity`,
      keyTerms: [
        { term: 'anti-CCP', definition: 'Anti-cyclic citrullinated peptide; highly specific for RA' },
        { term: 'TNF inhibitor', definition: 'Biologic medication blocking tumor necrosis factor' },
        { term: 'synovitis', definition: 'Inflammation of the joint lining' },
      ],
    },
    3: {
      level: 3,
      summary: 'RA management follows treat-to-target approach; methotrexate is first-line DMARD; biologics and JAK inhibitors for inadequate response; early aggressive treatment prevents joint damage.',
      explanation: `Modern RA management is aggressive and goal-directed.

**Treatment Algorithm:**
1. Methotrexate + short-term glucocorticoids
2. If inadequate response (3-6 months): Add or switch to biologic
3. Biologic failure: Different mechanism or JAK inhibitor

**Methotrexate:**
- Start 10-15 mg/week, increase to 25-30 mg
- Folate supplementation required
- Monitor: CBC, LFTs, renal

**Biologic Selection:**
- TNF inhibitors: Adalimumab, etanercept, infliximab
- Non-TNF: Abatacept, rituximab, tocilizumab
- Considerations: TB screening, hepatitis, heart failure

**Monitoring:**
- DAS28, CDAI, or RAPID3 for disease activity
- Serial imaging (X-rays, ultrasound)
- Methotrexate labs every 1-3 months

**Comorbidities:**
- Cardiovascular disease (increased risk)
- Osteoporosis (disease and steroid-related)
- Infections (disease and treatment-related)`,
      keyTerms: [
        { term: 'DAS28', definition: 'Disease Activity Score 28-joint count' },
        { term: 'treat-to-target', definition: 'Treatment strategy aiming for remission or low disease activity' },
        { term: 'abatacept', definition: 'T-cell costimulation modulator for RA' },
      ],
    },
    4: {
      level: 4,
      summary: 'RA treatment requires individualized approach balancing efficacy and safety; biosimilars have expanded options; cardiovascular risk management is essential; remission is achievable target.',
      explanation: `Comprehensive RA management integrates disease control with comorbidity management.

**Treatment Intensification:**
- Triple therapy: MTX + sulfasalazine + hydroxychloroquine
- Biologic combinations: MTX + TNF inhibitor
- JAK inhibitors: Tofacitinib, baricitinib, upadacitinib
- Biosimilars: Cost-effective alternatives to originators

**Special Situations:**
- Pregnancy: Continue hydroxychloroquine, sulfasalazine; stop MTX, biologics
- Infections: Hold biologics during serious infection; TB prophylaxis if latent TB
- Surgery: Hold biologics 1-2 half-lives before major surgery

**Extra-Articular Manifestations:**
- Rheumatoid nodules
- Interstitial lung disease
- Rheumatoid vasculitis
- Felty syndrome (RA + splenomegaly + neutropenia)
- Amyloidosis (rare now)

**Cardiovascular Risk:**
- RA patients have 1.5-2x increased CV risk
- Aggressive risk factor modification
- Statin therapy per guidelines
- Low-dose aspirin if high risk`,
      keyTerms: [
        { term: 'Felty syndrome', definition: 'RA triad with splenomegaly and neutropenia' },
        { term: 'biosimilar', definition: 'Highly similar version of biologic medication' },
        { term: 'upadacitinib', definition: 'JAK inhibitor approved for RA' },
      ],
    },
    5: {
      level: 5,
      summary: 'Expert RA management integrates precision medicine approaches, cardiovascular risk reduction, and treat-to-target strategies; JAK inhibitors have expanded options but require safety monitoring.',
      explanation: `Advanced RA care addresses treatment optimization and long-term outcomes.

**Precision Medicine:**
- Pharmacogenomics: Limited clinical utility currently
- Serotype: Anti-CCP positive may have worse prognosis
- Imaging: Ultrasound/MRI for subclinical synovitis

**JAK Inhibitor Safety:**
- MACE and malignancy: FDA boxed warning
- VTE risk: Consider in patients with risk factors
- Herpes zoster: Consider vaccination
- Cytopenias: Monitor CBC

**Refractory Disease:**
- Multiple biologic failures: Consider JAK inhibitor
- Rituximab: Especially for seropositive patients
- Clinical trial enrollment

**Remission:**
- DAS28 <2.6, CDAI ≤2.8
- Tapering: Reduce but do not stop completely
- Flare risk higher with complete discontinuation

**Future Directions:**
- Targeted synthetic DMARDs
- Stratified medicine approaches
- Remission induction protocols`,
      keyTerms: [
        { term: 'MACE', definition: 'Major adverse cardiovascular events' },
        { term: 'subclinical synovitis', definition: 'Inflammation detected by imaging without symptoms' },
        { term: 'seropositive', definition: 'Positive RF and/or anti-CCP antibodies' },
      ],
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['musculoskeletal', 'immune'],
    topics: ['arthritis', 'autoimmune', 'inflammatory'],
    keywords: ['rheumatoid arthritis', 'RA', 'DMARD', 'autoimmune'],
    clinicalRelevance: 'high',
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default rheumatoidArthritisContent;
