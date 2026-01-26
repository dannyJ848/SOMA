/**
 * Peripheral Neuropathies - Comprehensive Neurology Content
 *
 * Complete coverage of peripheral nerve disorders including diabetic,
 * inflammatory, hereditary, and other neuropathies.
 */

import { EducationalContent } from '../../types';

export const peripheralNeuropathyContent: EducationalContent = {
  id: 'neuro-peripheral-neuropathy',
  type: 'condition',
  name: 'Peripheral Neuropathy',
  alternateNames: ['Neuropathy', 'Nerve Damage', 'Polyneuropathy'],
  hpoId: 'HP:0009830',

  levels: {
    1: {
      level: 1,
      summary: 'Peripheral neuropathy is damage to the nerves outside the brain and spinal cord, causing numbness, tingling, pain, or weakness usually starting in the hands and feet.',
      explanation: `Your peripheral nerves are like electrical cables running from your brain and spinal cord to every part of your body. When these nerves are damaged, signals don't travel correctly.

**Common Symptoms:**
- Numbness or tingling in hands and feet
- Burning or shooting pain
- Feeling like you're wearing gloves or socks when you're not
- Weakness in arms or legs
- Sensitivity to touch
- Problems with balance

**Common Causes:**
- **Diabetes**: The most common cause
- **Vitamin deficiencies**: Especially B12
- **Alcohol**: Chronic heavy use
- **Infections**: Including shingles, HIV
- **Medications**: Some chemotherapy drugs
- **Autoimmune diseases**: When the body attacks its own nerves

**Types Based on Pattern:**
- *Polyneuropathy*: Affects many nerves, usually symmetrically
- *Mononeuropathy*: Affects a single nerve (like carpal tunnel)
- *Multiple mononeuropathy*: Affects several individual nerves

**Why It Matters:**
- Can increase fall risk
- May affect ability to feel injuries (especially in diabetic patients)
- Pain can significantly affect quality of life

**What Helps:**
- Treating the underlying cause
- Pain medications
- Physical therapy
- Protecting feet from injury`,
      keyTerms: [
        { term: 'peripheral neuropathy', definition: 'Damage to nerves outside the brain and spinal cord' },
        { term: 'numbness', definition: 'Loss of feeling in an area of the body' },
        { term: 'tingling', definition: 'A prickling or pins-and-needles sensation' },
      ],
      analogies: [
        'Peripheral nerves are like telephone wires - when damaged, the messages don\'t get through clearly.',
        'The "stocking-glove" distribution is called that because numbness affects the areas covered by socks and gloves.',
      ],
      examples: [
        'A person with diabetes notices their feet feel numb and they can\'t feel when they step on something sharp.',
        'Someone who drinks heavily develops burning pain in their feet that keeps them awake at night.',
      ],
    },
    2: {
      level: 2,
      summary: 'Peripheral neuropathy is classified by fiber type (sensory, motor, autonomic), pattern (polyneuropathy, mononeuropathy), and pathophysiology (axonal vs demyelinating), with diabetes being the most common cause.',
      explanation: `**Classification by Fiber Type:**

*Sensory Neuropathy:*
- Large fiber: Numbness, loss of vibration/position sense, ataxia
- Small fiber: Pain, burning, temperature sensation loss

*Motor Neuropathy:*
- Weakness
- Muscle wasting
- Fasciculations

*Autonomic Neuropathy:*
- Orthostatic hypotension
- Gastroparesis
- Bladder dysfunction
- Erectile dysfunction
- Sweating abnormalities

**Classification by Pattern:**

*Length-Dependent Polyneuropathy:*
- Most common pattern
- "Stocking-glove" distribution
- Longest nerves affected first
- Symmetric

*Non-Length-Dependent:*
- Multifocal pattern
- Suggests vasculitis, inflammation, or hereditary

*Mononeuropathy:*
- Single nerve affected
- Carpal tunnel (median nerve)
- Ulnar neuropathy at elbow
- Peroneal neuropathy at fibular head

*Multiple Mononeuropathy:*
- Several individual nerves
- Vasculitis, diabetes, leprosy

**Pathophysiology:**

*Axonal Neuropathy:*
- Damage to the nerve fiber itself
- Slow recovery
- Most metabolic/toxic neuropathies

*Demyelinating Neuropathy:*
- Damage to myelin sheath
- Faster recovery potential
- GBS, CIDP, hereditary forms

**Common Causes:**

*Metabolic:*
- Diabetes mellitus (most common)
- B12 deficiency
- Uremia
- Hypothyroidism

*Toxic:*
- Alcohol
- Chemotherapy (platinum, taxanes, vinca alkaloids)
- Medications (metronidazole, isoniazid, amiodarone)

*Inflammatory/Immune:*
- Guillain-Barré syndrome
- CIDP
- Vasculitic neuropathy

*Infectious:*
- HIV
- Leprosy
- Lyme disease
- Hepatitis C`,
      keyTerms: [
        { term: 'polyneuropathy', definition: 'Neuropathy affecting many nerves, usually symmetrically' },
        { term: 'axonal', definition: 'Affecting the nerve fiber itself', pronunciation: 'AK-son-ul' },
        { term: 'demyelinating', definition: 'Affecting the myelin coating around nerves', pronunciation: 'dee-MY-el-in-ay-ting' },
        { term: 'length-dependent', definition: 'Pattern where longest nerves are affected first (feet before hands)' },
      ],
      analogies: [
        'Axonal neuropathy is like cutting a wire - the connection is broken. Demyelinating is like stripping the insulation - signals short-circuit.',
      ],
    },
    3: {
      level: 3,
      summary: 'Neuropathy evaluation includes electrodiagnostic studies (NCS/EMG), laboratory workup based on clinical pattern, and treatment addressing underlying cause alongside symptomatic management.',
      explanation: `**Diagnostic Evaluation:**

**History and Examination:**
- Onset, progression, distribution
- Associated symptoms (autonomic, systemic)
- Exposures (medications, toxins, alcohol)
- Family history (hereditary neuropathies)
- Sensory examination: Pinprick, temperature, vibration, proprioception
- Motor examination: Strength, atrophy, fasciculations
- Reflexes: Often diminished or absent

**Electrodiagnostic Studies:**

*Nerve Conduction Studies (NCS):*
- Measure speed and amplitude of nerve signals
- Distinguish axonal vs demyelinating
- Localize focal neuropathies
- Sensory NCS more sensitive for early neuropathy

*Electromyography (EMG):*
- Needle examination of muscles
- Assesses motor nerve function
- Detects denervation, reinnervation
- Helps with prognosis

*Patterns:*
| | Axonal | Demyelinating |
|---|--------|--------------|
| Amplitude | Reduced | Relatively preserved |
| Velocity | Mildly reduced | Significantly reduced |
| Recovery | Slow | Faster |

**Laboratory Workup:**

*Initial (most cases):*
- HbA1c / fasting glucose
- B12 with methylmalonic acid
- CBC, CMP, TSH
- Serum protein electrophoresis (SPEP)

*Expanded (if initial negative or specific suspicion):*
- HIV, Hepatitis B/C
- ESR, ANA (vasculitis)
- Paraneoplastic panel
- Lumbar puncture (CIDP, GBS)
- Genetic testing (CMT)

**Specific Neuropathies:**

*Diabetic Neuropathy:*
- Most common cause in developed world
- Distal symmetric polyneuropathy (most common)
- Also: Diabetic amyotrophy, autonomic neuropathy
- Prevention: Glucose control
- Treatment: Pain management, foot care

*Guillain-Barré Syndrome (GBS):*
- Acute demyelinating polyradiculoneuropathy
- Post-infectious (Campylobacter, viral)
- Ascending weakness, areflexia
- Respiratory compromise risk
- Treatment: IVIG or plasmapheresis
- Most recover, may have residual deficits

*CIDP (Chronic Inflammatory Demyelinating Polyneuropathy):*
- Chronic counterpart to GBS
- Progressive or relapsing over >8 weeks
- Elevated CSF protein
- Treatment: IVIG, steroids, plasmapheresis

**Pain Management:**
- First-line: Gabapentin, pregabalin, duloxetine, TCAs
- Topical: Lidocaine, capsaicin
- Avoid opioids if possible`,
      keyTerms: [
        { term: 'NCS', definition: 'Nerve Conduction Studies - measures speed and strength of nerve signals' },
        { term: 'EMG', definition: 'Electromyography - needle test assessing muscle and motor nerve function' },
        { term: 'GBS', definition: 'Guillain-Barré syndrome - acute inflammatory demyelinating polyneuropathy' },
        { term: 'CIDP', definition: 'Chronic inflammatory demyelinating polyneuropathy' },
      ],
      clinicalNotes: 'EMG/NCS essential for classification (axonal vs demyelinating). Always check B12 with methylmalonic acid. GBS requires respiratory monitoring. IVIG is first-line for both GBS and CIDP.',
    },
    4: {
      level: 4,
      summary: 'Advanced neuropathy evaluation includes nerve biopsy, genetic testing, antibody panels, and recognition of paraproteinemic, paraneoplastic, and hereditary forms requiring specific interventions.',
      explanation: `**Advanced Diagnostics:**

**Nerve Biopsy:**
- Sural nerve (sensory) most common
- Indicated for: Vasculitic, amyloid, infiltrative
- Not routine - morbidity from procedure
- Must correlate with clinical and EDx findings

**Skin Biopsy:**
- Epidermal nerve fiber density (ENFD)
- Small fiber neuropathy diagnosis
- Minimally invasive
- Quantitative measure

**Genetic Testing:**
- Charcot-Marie-Tooth (CMT) panels
- Hereditary sensory and autonomic neuropathies (HSAN)
- Familial amyloid polyneuropathy (TTR)
- Targeted or whole exome sequencing

**Antibody Panels:**
- Anti-MAG (IgM paraproteinemic)
- Anti-GM1, GQ1b (GBS variants)
- Paraneoplastic (anti-Hu, CV2/CRMP5)

**Specific Neuropathies:**

*Paraproteinemic Neuropathies:*
- Associated with monoclonal gammopathy
- MGUS-associated: IgM > IgG/IgA
- Anti-MAG neuropathy: Demyelinating, distal
- POEMS syndrome: Osteosclerotic myeloma
- AL amyloidosis: Small fiber, autonomic

*Hereditary Neuropathies:*
- CMT1A (PMP22 duplication): Demyelinating
- CMT2 (various genes): Axonal
- HNPP: Pressure palsies
- Familial amyloid polyneuropathy (TTR)

*Vasculitic Neuropathy:*
- Multiple mononeuropathy pattern
- Painful
- May be isolated or systemic
- Nerve biopsy for diagnosis
- Immunosuppression treatment

*Small Fiber Neuropathy:*
- Normal NCS/EMG
- Burning pain, autonomic symptoms
- Skin biopsy confirms (reduced ENFD)
- Causes: Diabetes, impaired glucose tolerance, Sjögren's, idiopathic

**Treatment - Specific Conditions:**

*CIDP Variants:*
- Multifocal motor neuropathy: IVIG (not steroids)
- MADSAM: IVIG or steroids
- Sensory-predominant: Often steroid-responsive

*Anti-MAG Neuropathy:*
- Rituximab
- Often refractory

*TTR Amyloidosis:*
- Tafamidis (transthyretin stabilizer)
- Patisiran, inotersen (gene silencing)
- Liver transplant (curative for hereditary)

*Vasculitic Neuropathy:*
- High-dose steroids
- Cyclophosphamide or rituximab
- Depends on systemic involvement`,
      keyTerms: [
        { term: 'CMT', definition: 'Charcot-Marie-Tooth disease - most common hereditary neuropathy' },
        { term: 'anti-MAG', definition: 'Antibody against myelin-associated glycoprotein in paraproteinemic neuropathy' },
        { term: 'POEMS', definition: 'Polyneuropathy, Organomegaly, Endocrinopathy, M-protein, Skin changes syndrome' },
        { term: 'TTR amyloidosis', definition: 'Transthyretin amyloid neuropathy - hereditary or wild-type' },
      ],
      clinicalNotes: 'SPEP essential in unexplained neuropathy. Anti-MAG neuropathy: IgM, demyelinating, distal. Small fiber neuropathy: Normal NCS, skin biopsy diagnostic. TTR amyloidosis: Gene silencing therapies available.',
    },
    5: {
      level: 5,
      summary: 'Peripheral neuropathy management integrates precision diagnostics including genetic testing, autoantibody panels, and emerging biomarkers, with targeted therapies for inflammatory, hereditary, and amyloid neuropathies.',
      explanation: `**Immunopathogenesis:**

*CIDP Mechanisms:*
- T cell and B cell mediated
- Macrophage-mediated demyelination
- Complement activation at nodes of Ranvier
- Anti-nodal/paranodal antibodies subset

*Nodal/Paranodal Antibodies:*
- Anti-contactin 1, CASPR1, neurofascin
- Distinct phenotype: Severe, tremor, poor IVIG response
- May respond to rituximab
- Emerging therapeutic targets

*GBS Subtypes:*
- AIDP (demyelinating, most common in West)
- AMAN (axonal, anti-GM1, Campylobacter)
- AMSAN (severe axonal)
- Miller Fisher (anti-GQ1b, ophthalmoplegia, ataxia)

**Advanced Imaging:**

*MR Neurography:*
- High-resolution nerve imaging
- Detects inflammation, tumors, focal lesions
- CIDP: Nerve enlargement, increased T2 signal
- Differentiates from mimics

*PET Imaging:*
- FDG-PET: Vasculitis, tumors
- Amyloid PET: Systemic amyloidosis

**Gene Therapy and Novel Treatments:**

*TTR Amyloidosis:*
- Patisiran: siRNA silencing hepatic TTR
- Inotersen: Antisense oligonucleotide
- Vutrisiran: Improved siRNA (subcutaneous)
- 80% reduction in neuropathy progression

*Hereditary Neuropathies:*
- Gene therapy in development (CMT1A)
- PXT3003 for CMT1A (combination therapy)
- No approved disease-modifying therapy yet

*CIDP:*
- FcRn antagonists (efgartigimod)
- Complement inhibitors
- Subcutaneous Ig formulations

**Small Fiber Neuropathy - Advanced:**

*Etiology Workup:*
- Glucose tolerance testing
- Sjögren antibodies (SSA, SSB, lip biopsy)
- Celiac screen
- Fabry disease (alpha-galactosidase, genetics)
- Sarcoidosis (ACE, imaging, biopsy)
- Autoimmune autonomic ganglionopathy (anti-ganglionic AChR)

*Emerging Markers:*
- Corneal confocal microscopy (non-invasive)
- Sudomotor testing
- Quantitative sensory testing

**Paraneoplastic Neuropathy:**

*Sensory Neuronopathy:*
- Anti-Hu (ANNA-1)
- Small cell lung cancer
- Subacute, severe, asymmetric
- Treatment: Tumor resection, immunotherapy
- Often poor response to immunotherapy

*CRMP5 Neuropathy:*
- Sensorimotor, autonomic
- Thymoma, small cell lung cancer

**Clinical Outcomes and Trials:**

*Outcome Measures:*
- I-RODS (inflammatory RODS)
- INCAT disability score
- Grip strength, 10-meter walk
- Quality of life measures

*Clinical Trial Design:*
- Biomarker-defined populations
- Genetic subtyping
- Response predictors
- Maintenance therapy studies`,
      keyTerms: [
        { term: 'nodal antibodies', definition: 'Antibodies targeting node of Ranvier proteins (contactin, neurofascin)' },
        { term: 'patisiran', definition: 'siRNA therapy for TTR amyloid polyneuropathy' },
        { term: 'MR neurography', definition: 'High-resolution MRI technique for imaging peripheral nerves' },
        { term: 'corneal confocal microscopy', definition: 'Non-invasive imaging of corneal nerves for small fiber assessment' },
      ],
      clinicalNotes: `Expert approach:
1. Pattern recognition: Length-dependent vs multifocal vs mononeuropathy
2. EDx classification: Axonal vs demyelinating guides workup
3. Check SPEP in all unexplained neuropathies
4. Consider nodal antibodies in CIDP failing IVIG
5. TTR amyloidosis: Gene silencing therapies highly effective
6. Small fiber neuropathy: Skin biopsy if NCS normal
7. Hereditary neuropathy: Genetic testing increasingly accessible
8. Paraneoplastic: Always consider in subacute severe neuropathy`,
    },
  },

  media: [
    {
      id: 'neuropathy-patterns',
      type: 'diagram',
      filename: 'neuropathy_distribution_patterns.svg',
      title: 'Neuropathy Distribution Patterns',
      description: 'Stocking-glove polyneuropathy, mononeuropathy, multiple mononeuropathy',
    },
    {
      id: 'ncs-examples',
      type: 'image',
      filename: 'ncs_waveforms.jpg',
      title: 'NCS Waveform Examples',
      description: 'Normal, axonal, and demyelinating patterns',
    },
  ],

  citations: [
    {
      id: 'aan-polyneuropathy-2009',
      type: 'article',
      title: 'Practice parameter: Evaluation of distal symmetric polyneuropathy',
      authors: ['England JD', 'Gronseth GS', 'Franklin G'],
      source: 'Neurology',
    },
  ],

  crossReferences: [
    { targetId: 'neuro-guillain-barre', targetType: 'condition', relationship: 'related', label: 'Guillain-Barré Syndrome' },
    { targetId: 'neuro-cidp', targetType: 'condition', relationship: 'related', label: 'CIDP' },
    { targetId: 'neuro-diabetic-neuropathy', targetType: 'condition', relationship: 'related', label: 'Diabetic Neuropathy' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['neurology', 'neuropathy', 'electrodiagnostics'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default peripheralNeuropathyContent;
