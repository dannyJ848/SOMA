/**
 * Peripheral Neuropathy - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const neuropathy: EducationalContent = {
  id: 'condition-neuropathy',
  type: 'condition',
  name: 'Peripheral Neuropathy',
  alternateNames: ['Polyneuropathy', 'Peripheral Nerve Disease', 'PN'],
  hpoId: 'HP:0009830',

  levels: {
    1: {
      level: 1,
      summary: 'Peripheral neuropathy means damage to the nerves that carry messages between your brain and spinal cord and the rest of your body.',
      explanation: `Your peripheral nerves are like electrical wires that connect your brain and spinal cord to your arms, legs, and organs. When these nerves are damaged, they cannot send proper signals.

**Common symptoms:**
- Numbness or tingling (pins and needles) in hands or feet
- Burning or shooting pain
- Weakness in muscles
- Loss of balance or coordination
- Extreme sensitivity to touch

**Areas affected:**
- Usually starts in toes or feet
- Can affect hands (stocking-glove pattern)
- May spread upward

**Common causes:**
- Diabetes (most common cause)
- Alcohol misuse
- Vitamin deficiencies (B12, B1, B6)
- Certain medications
- Infections
- Autoimmune diseases

**Treatment:**
- Treat the underlying cause
- Pain medications
- Physical therapy
- Proper foot care (especially for diabetes)`,
      keyTerms: [
        { term: 'peripheral neuropathy', definition: 'Damage to nerves outside the brain and spinal cord' },
        { term: 'stocking-glove pattern', definition: 'Numbness that affects feet and hands like wearing stockings and gloves' },
      ],
      analogies: ['Peripheral nerves are like electrical wiring. When the insulation wears off or wires are damaged, signals cannot travel properly.'],
      examples: ['A person with diabetes notices tingling in their toes that gradually spreads to their feet, causing numbness and occasional burning pain.'],
    },
    2: {
      level: 2,
      summary: 'Peripheral neuropathy encompasses disorders of peripheral nerves causing sensory, motor, and autonomic dysfunction, with diabetes being the most common cause.',
      explanation: `## Classification

**By nerve type:**
- **Sensory neuropathy:** Numbness, tingling, pain
- **Motor neuropathy:** Weakness, atrophy, cramps
- **Autonomic neuropathy:** Blood pressure changes, sweating abnormalities, GI dysmotility
- **Mixed:** Most common

**By distribution:**
- **Distal symmetric polyneuropathy:** Most common pattern
- **Mononeuropathy:** Single nerve (e.g., carpal tunnel)
- **Multiple mononeuropathy:** Several nerves
- **Small fiber neuropathy:** Pain and autonomic symptoms

## Common Etiologies

**Metabolic:**
- Diabetes mellits (50% of cases)
- Thyroid disorders
- Uremia

**Nutritional:**
- Vitamin B12 deficiency
- B1 (thiamine), B6 (pyridoxine)
- Vitamin E, copper

**Toxic:**
- Alcohol (direct toxicity + nutritional)
- Chemotherapy (platinum, taxanes, vincristine)
- Heavy metals (lead, mercury, arsenic)

**Infectious:**
- HIV
- Hepatitis C
- Lyme disease
- Leprosy
- Guillain-Barre syndrome

**Inflammatory/Autoimmune:**
- CIDP (chronic inflammatory demyelinating polyneuropathy)
- Guillain-Barre syndrome (AIDP)
- Vasculitis
- Sjogren syndrome

**Hereditary:**
- Charcot-Marie-Tooth disease
- Familial amyloid polyneuropathy`,
      keyTerms: [
        { term: 'CIDP', definition: 'Chronic inflammatory demyelinating polyneuropathy; autoimmune nerve damage' },
        { term: 'polyneuropathy', definition: 'Disorder affecting multiple peripheral nerves' },
        { term: 'demyelinating', definition: 'Damage to the myelin sheath covering nerves' },
      ],
    },
    3: {
      level: 3,
      summary: 'Peripheral neuropathy evaluation requires systematic assessment of distribution, fiber type, temporal course, and electrodiagnostic studies to identify specific etiologies and guide targeted therapy.',
      explanation: `## Clinical Assessment

**Distribution patterns:**
- **Length-dependent:** Distal to proximal (stocking-glove)
- **Non-length dependent:** Asymmetric, multifocal
- **Proximal:** Diabetic amyotrophy, CIDP

**Fiber type involvement:**
- **Large fiber:** Loss of proprioception, vibration, reflexes; sensory ataxia
- **Small fiber:** Pain, temperature loss; autonomic dysfunction
- **Mixed:** Both large and small

**Temporal pattern:**
- **Acute:** GBS, toxins, vascular
- **Subacute:** Diabetes, nutritional
- **Chronic:** Hereditary, metabolic, slowly progressive

## Diagnostic Workup

**Laboratory studies:**
- HbA1c (diabetes)
- CBC, ESR (inflammation)
- TSH, B12, folate
- SPEP with immunofixation (MGUS, myeloma)
- Hepatitis panel, HIV
- Heavy metal screen if indicated

**Electrodiagnostic studies:**
- **NCS/EMG:** Distinguish axonal vs demyelinating
- Distinguish hereditary vs acquired
- Assess severity and chronicity

**Other studies:**
- Skin biopsy (small fiber neuropathy)
- Nerve biopsy (vasculitis, amyloid)
- Autonomic testing

## Diabetic Neuropathy

**Types:**
- **Distal symmetric polyneuropathy:** Most common
- **Autonomic neuropathy:** Gastroparesis, erectile dysfunction, orthostatic hypotension
- **Radiculoplexopathy:** Diabetic amyotrophy
- **Mononeuropathy:** CN III, VII, median, ulnar

**Management:**
- Glycemic control (prevention/slowing)
- Symptomatic treatment for neuropathic pain
- Foot care to prevent ulcers`,
      keyTerms: [
        { term: 'NCS/EMG', definition: 'Nerve conduction studies/electromyography; tests nerve and muscle function' },
        { term: 'MGUS', definition: 'Monoclonal gammopathy of undetermined significance; can cause neuropathy' },
        { term: 'sensory ataxia', definition: 'Loss of coordination from sensory nerve damage' },
      ],
      clinicalNotes: 'B12 deficiency can be masked by folate supplementation. Always check B12 and methylmalonic acid. MGUS neuropathy often responds to IVIG or rituximab.',
    },
    4: {
      level: 4,
      summary: 'Complex neuropathy management addresses CIDP treatment algorithms, paraproteinemic neuropathy, inherited neuropathies, and refractory neuropathic pain requiring multimodal therapy.',
      explanation: `## CIDP (Chronic Inflammatory Demyelinating Polyneuropathy)

**Diagnostic criteria (EFNS/PNS):**
- Progressive or relapsing course >8 weeks
- Symmetric motor/sensory deficits
- Demyelinating features on NCS:
  - Motor conduction velocity slowing
  - Conduction block, temporal dispersion
  - Prolonged distal latencies
  - Prolonged F-waves
- CSF: Elevated protein without cells (albuminocytologic dissociation)

**Treatment:**
**First-line:**
- Corticosteroids (prednisone 60-100 mg daily, then taper)
- IVIG (2 g/kg divided over 2-5 days, repeat every 4-6 weeks)
- Plasma exchange (for acute deterioration)

**Second-line:**
- Azathioprine, mycophenolate
- Cyclophosphamide (severe refractory)
- Rituximab (anti-CD20)

## Paraproteinemic Neuropathy

**MGUS-associated:**
- IgM MGUS: Anti-MAG neuropathy (distal, sensory, ataxic)
- IgG/IgA MGUS: Similar to CIDP
- Treatment: IVIG, rituximab (for IgM)

**Multiple myeloma/POEMS:**
- POEMS: Polyneuropathy, organomegaly, endocrinopathy, M-protein, skin changes
- Treat underlying plasma cell dyscrasia

## Inherited Neuropathies

**Charcot-Marie-Tooth (CMT):**
- CMT1A (PMP22 duplication): Most common
- CMT1X (GJB1 mutation): X-linked
- CMT2 (axonal variants)
- Genetic counseling important
- No disease-modifying treatment; supportive care

## Neuropathic Pain Management

**First-line:**
- Gabapentin 300-1200 mg TID
- Pregabalin 75-300 mg BID
- Duloxetine 30-60 mg daily
- Amitriptyline 25-150 mg HS

**Second-line:**
- Venlafaxine, bupropion
- Tramadol (short-term)
- Topical lidocaine patches
- Capsaicin patches (8%)

**Refractory pain:**
- Combination therapy (gabapentinoid + antidepressant)
- Spinal cord stimulation
- Intrathecal therapies`,
      keyTerms: [
        { term: 'anti-MAG', definition: 'Antibody against myelin-associated glycoprotein; causes specific neuropathy' },
        { term: 'POEMS syndrome', definition: 'Rare paraneoplastic disorder with polyneuropathy and plasma cell dyscrasia' },
        { term: 'albuminocytologic dissociation', definition: 'High CSF protein with normal cell count; characteristic of GBS/CIDP' },
      ],
      clinicalNotes: 'IVIG is first-line for CIDP due to rapid onset and steroid-sparing effects. Anti-MAG neuropathy responds better to rituximab than IVIG. CMT is often misdiagnosed as CIDP—genetic testing avoids inappropriate immunosuppression.',
    },
    5: {
      level: 5,
      summary: 'Advanced neuropathy care includes biomarker-guided therapy, novel agents for small fiber neuropathy, gene therapy for inherited forms, and emerging treatments for CIDP and diabetic neuropathy.',
      explanation: `## Emerging Therapies for Diabetic Neuropathy

**Disease-modifying approaches:**
- **Aldose reductase inhibitors:** Epalrestat (available in Japan)
- **Benfotiamine:** Lipid-soluble thiamine derivative
- **Alpha-lipoic acid:** Antioxidant with some evidence
- **C-peptide replacement:** Investigational

**Pain pathway targets:**
- **Sodium channel blockers:**
  - Carbamazepine (Nav1.7 mutations)
  - Lacosamide, oxcarbazepine
- **Calcium channel:** Gabapentin, pregabalin (gabapentinoids)
- **TRPV1 antagonists:** Capsaicin mechanism

## Small Fiber Neuropathy Advances

**Diagnostic:**
- Skin biopsy with PGP9.5 staining (IENFD)
- Corneal confocal microscopy
- QSART testing
- Genetic testing (SCN9A, SCN10A mutations)

**Treatment:**
- IVIG for immune-mediated SFN
- Immunomodulation for Sjogren-related SFN
- Gene-specific therapies for channelopathies

## Novel CIDP Therapies

**Subcutaneous Ig (SCIG):**
- Home administration
- Stable Ig levels
- Better quality of life

**Hybrid therapies:**
- FcRn inhibitors (efgartigimod, rozanolixizumab)
- Plasma cell-targeted (bortezomib for refractory)

**Biomarker-guided treatment:**
- Autoantibody panels (neurofascin, contactin)
- MRI nerve root enhancement
- Ultrasound nerve size changes

## Gene Therapy for Inherited Neuropathies

**CMT1A:**
- PXT3003 (PMP22 expression reducer)
- RNA interference approaches
- Antisense oligonucleotides

**Other CMT types:**
- Gene replacement therapy (MFN2 mutations)
- CRISPR-based approaches under investigation

## Regenerative Approaches
- Stem cell-derived Schwann cells
- Nerve growth factor delivery
- Extracellular matrix scaffolds
- Electrical stimulation for nerve regeneration`,
      keyTerms: [
        { term: 'IENFD', definition: 'Intraepidermal nerve fiber density; diagnostic for small fiber neuropathy' },
        { term: 'QSART', definition: 'Quantitative sudomotor axon reflex test; assesses autonomic fibers' },
        { term: 'FcRn inhibitor', definition: 'Neonatal Fc receptor blocker; novel approach to antibody clearance' },
      ],
      clinicalNotes: 'PXT3003 showed promise in phase 2 for CMT1A. Skin biopsy remains gold standard for small fiber neuropathy diagnosis. Autoantibody testing can guide CIDP treatment and predict response.',
    },
  },

  media: [],
  citations: [
    { id: 'aann-2021', type: 'article', title: 'AAN Practice Parameter: Evaluation of Distal Symmetric Polyneuropathy', source: 'Neurology' },
    { id: 'aann-cidp-2021', type: 'article', title: 'AAN Guideline: Treatment of CIDP', source: 'Neurology' },
    { id: 'diabetes-2023', type: 'article', title: 'ADA Standards of Care: Neuropathy Screening and Management', source: 'Diabetes Care' },
  ],
  crossReferences: [
    { targetId: 'condition-diabetes', targetType: 'condition', relationship: 'related', label: 'Diabetes Mellitus' },
    { targetId: 'condition-guillain-barre', targetType: 'condition', relationship: 'related', label: 'Guillain-Barre Syndrome' },
  ],
  tags: {
    systems: ['neurological', 'endocrine'],
    topics: ['neurology', 'diabetes'],
    keywords: ['neuropathy', 'polyneuropathy', 'CIDP', 'diabetic neuropathy', 'peripheral nerve'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['neurology', 'medicine'] },
  },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default neuropathy;
