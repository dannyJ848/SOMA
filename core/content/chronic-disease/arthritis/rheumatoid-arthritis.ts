/**
 * Rheumatoid Arthritis - Chronic Disease Education
 *
 * Comprehensive patient education about rheumatoid arthritis,
 * an autoimmune disease causing joint inflammation and damage.
 */

import { EducationalContent } from '../../types';

export const RHEUMATOID_ARTHRITIS: EducationalContent = {
  id: 'chronic-disease-rheumatoid-arthritis',
  type: 'condition',
  name: 'Rheumatoid Arthritis',
  alternateNames: ['RA', 'Rheumatoid disease', 'Autoimmune arthritis'],

  levels: {
    1: {
      level: 1,
      summary: 'Rheumatoid arthritis is an autoimmune disease where your immune system mistakenly attacks your joints, causing pain, swelling, and stiffness. It usually affects the same joints on both sides of your body.',
      explanation: `**What Is Rheumatoid Arthritis?**

Rheumatoid arthritis (RA) is an autoimmune disease. This means your immune system, which normally fights germs, attacks your own joints by mistake. This causes inflammation, pain, and swelling.


Key Differences from Osteoarthritis:
---------------------------------
Osteoarthritis:
  - Wear and tear
  - Older people
  - Asymmetric (one side)
  - Worse with use

Rheumatoid Arthritis:
  - Autoimmune (immune attack)
  - Any age
  - Symmetric (both sides)
  - Better with use, worse with rest
  - Morning stiffness >1 hour
---------------------------------


**Which Joints Are Affected?**


Commonly Affected Joints:
---------------------------------
- Hands (wrists, fingers)
- Feet (toes, ankles)
- Knees
- Shoulders
- Elbows
- Hips
- Neck
---------------------------------


**Common Symptoms:**


Symptoms:
---------------------------------
- Painful, swollen joints
- Morning stiffness lasting >1 hour
- Warm, red joints
- Fatigue (feeling very tired)
- Low-grade fever
- Loss of appetite
- Firm bumps under skin (nodules)
- Joint deformity over time
---------------------------------


**What Causes RA?**

The exact cause is unknown, but factors include:


Risk Factors:
---------------------------------
- Genetics (family history)
- Smoking (strongest known risk)
- Being female (3x more common)
- Age (usually starts 40-60)
- Obesity
- Hormonal factors
---------------------------------


**How Is It Diagnosed?**


Diagnostic Tests:
---------------------------------
Blood tests:
  - RF (rheumatoid factor)
  - Anti-CCP (specific for RA)
  - ESR or CRP (inflammation markers)

Imaging:
  - X-rays (joint damage)
  - Ultrasound or MRI
  - Bone erosions
---------------------------------


**Treatment:**


Medications:
---------------------------------
DMARDs (disease-modifying drugs):
  - Methotrexate (main treatment)
  - Hydroxychloroquine
  - Sulfasalazine
  - Leflunomide

Biologics:
  - Target specific parts of
    immune system
  - Given as shot or IV
  - Very effective

NSAIDs:
  - Help with pain and swelling

Steroids:
  - Quick relief
  - Used short-term
---------------------------------


**Living with RA:**

- Take medications as prescribed
- Exercise regularly
- Protect your joints
- Manage stress
- Quit smoking
- Maintain healthy weight`,
      keyTerms: [
        { term: 'autoimmune', definition: 'Immune system attacks your own body' },
        { term: 'symmetric', definition: 'Affecting both sides of body similarly' },
        { term: 'inflammation', definition: 'Swelling, redness, heat from immune response' },
        { term: 'DMARD', definition: 'Disease-modifying antirheumatic drug' },
        { term: 'biologic', definition: 'Medicine made from living cells' },
      ],
      analogies: [
        'RA is like your body\'s security system attacking your own house instead of protecting it.',
        'Morning stiffness in RA is like a rusty hinge that loosens up with use.',
        'DMARDs are like peacekeepers that calm down the overactive immune system.',
      ],
      examples: [
        'Maria woke up every morning with 2 hours of stiffness in her hands, which is typical of RA.',
        'John developed swelling in both wrists and knuckles, affecting both sides equally.',
      ],
      patientCounselingPoints: [
        'Early treatment is very important to prevent joint damage.',
        'Methotrexate is the cornerstone of RA treatment for most people.',
        'You can still have a full, active life with RA.',
        'Smoking makes RA worse and reduces how well medicines work.',
        'Regular blood tests are needed to monitor your medications.',
      ],
    },
    2: {
      level: 2,
      summary: 'Rheumatoid arthritis is a chronic autoimmune disease characterized by synovial inflammation, cartilage destruction, and bone erosion, primarily affecting small joints symmetrically.',
      explanation: `**Pathophysiology:**

RA is a systemic autoimmune disease where the immune system attacks the synovium (joint lining).


RA Disease Process:
-----------------------------------------------------
Synovitis:
  - Immune cells invade synovium
  - Pannus formation (thickened synovium)
  - Pannus invades cartilage and bone

Joint Damage:
  - Cartilage destruction
  - Bone erosions
  - Ligament laxity
  - Tendon rupture
  - Joint deformity

Systemic Effects:
  - Inflammation throughout body
  - Fatigue, fever
  - Organ involvement possible
    - Lungs (fibrosis)
    - Heart (pericarditis)
    - Eyes (dryness)
    - Blood (anemia)
-----------------------------------------------------


**Epidemiology:**

- Prevalence: 0.5-1% worldwide
- Female:Male ratio 3:1
- Peak onset: 40-60 years
- Genetic contribution: 60%
- Smoking increases risk 2-4x

**Clinical Presentation:**


Typical RA Features:
-----------------------------------------------------
Joint Involvement:
  - Small joints of hands and feet
  - Symmetric distribution
  - MCP, PIP, wrists, MTP joints
  - DIP joints spared

Symptoms:
  - Morning stiffness >1 hour
  - Improvement with activity
  - Gel phenomenon (stiffness after sitting)
  - Fatigue (often worse than joint pain)
  - Systemic symptoms common

Physical Findings:
  - Symmetric swelling
  - Warm, tender joints
  - Limitation of motion
  - Muscle atrophy
  - Rheumatoid nodules (elbows, fingers)
-----------------------------------------------------


**Diagnosis:**


Classification Criteria (ACR/EULAR 2010):
-----------------------------------------------------
Joint Involvement (score 0-5):
  - 1 large joint: 0
  - 2-10 large joints: 1
  - 1-3 small joints: 2
  - 4-10 small joints: 3
  - >10 joints: 5

Serology (score 0-3):
  - RF and anti-CCP negative: 0
  - RF or anti-CCP low-positive: 2
  - RF or anti-CCP high-positive: 3

Acute Phase Reactants (score 0-1):
  - Normal ESR/CRP: 0
  - Abnormal ESR/CRP: 1

Duration (score 0-1):
  - <6 weeks: 0
  - ≥6 weeks: 1

Score ≥6 = Definite RA
-----------------------------------------------------
`,
      keyTerms: [
        { term: 'synovium', definition: 'Membrane lining joints that produces lubricating fluid' },
        { term: 'pannus', definition: 'Abnormal synovial tissue that destroys cartilage and bone' },
        { term: 'MCP', definition: 'Metacarpophalangeal joints; knuckles' },
        { term: 'MTP', definition: 'Metatarsophalangeal joints; toes' },
        { term: 'DIP', definition: 'Distal interphalangeal joints; fingertip joints' },
        { term: 'anti-CCP', definition: 'Anti-cyclic citrullinated peptide; specific for RA' },
        { term: 'RF', definition: 'Rheumatoid factor' },
        { term: 'ESR', definition: 'Erythrocyte sedimentation rate; inflammation marker' },
        { term: 'CRP', definition: 'C-reactive protein; inflammation marker' },
      ],
      analogies: [
        'Pannus is like an invasive weed that grows and destroys everything around it.',
        'Anti-CCP antibodies are like highly specific fingerprints for RA.',
      ],
      clinicalNotes: 'Anti-CCP is more specific than RF and appears earlier in disease. Anti-CCP positivity predicts more aggressive disease and joint damage.',
      patientCounselingPoints: [
        'Anti-CCP testing helps confirm RA diagnosis and predict disease course.',
        'The length of morning stiffness indicates how active your RA is.',
        'Joint damage can occur even without pain, so regular monitoring is important.',
        'Treating early and aggressively gives the best long-term outcomes.',
      ],
    },
    3: {
      level: 3,
      summary: 'Rheumatoid arthritis is a systemic autoimmune disease characterized by autoantibody production (RF, anti-CCP), synovial inflammation, and progressive joint destruction requiring early aggressive treatment.',
      explanation: `**Immunopathogenesis:**

*Autoantibodies:*

RA Antibodies:
------------------------------------------------------------
Rheumatoid Factor (RF):
  - IgM antibody against IgG Fc region
  - Present in 70-80% of RA patients
  - Also in: Sjogren\'s, hepatitis C, elderly
  - Less specific than anti-CCP

Anti-CCP:
  - Against citrullinated proteins
  - 95% specific for RA
  - Present in 60-70% of RA
  - Predicts erosive disease
  - May appear years before symptoms

Citrullination:
  - Enzymatic conversion of arginine to citrulline
  - Creates neoantigens
  - Triggered by smoking (PAD enzymes in lungs)
  - Genetic predisposition (HLA-DRB1 shared epitope)
------------------------------------------------------------


*Cytokine Cascade:*

Inflammatory Mediators:
------------------------------------------------------------
TNF-α:
  - Master cytokine
  - Drives inflammation
  - Target of biologics

IL-6:
  - Acute phase response
  - B-cell activation
  - Anemia of chronic disease

IL-1:
  - Inflammation
  - Cartilage destruction

IL-17:
  - Th17 cells
  - Bone erosion
  - Synergizes with TNF

B Cells:
  - Autoantibody production
  - Antigen presentation
  - Cytokine production
  - Target: Rituximab (anti-CD20)

T Cells:
  - CD4+ T cells drive inflammation
  - Th1, Th17 subsets
  - Target: Abatacept (CTLA-4)
------------------------------------------------------------


**Radiographic Features:**


X-ray Findings:
------------------------------------------------------------
Early Disease:
  - Soft tissue swelling
  - Periarticular osteopenia
  - Joint space preservation

Progressive Disease:
  - Joint space narrowing
  - Marginal erosions
    - Ulnar styloid
    - MCP heads
    - Metatarsal heads
  - Loss of joint alignment

Late Disease:
  - Severe erosions
  - Joint subluxation
  - Ankylosis (rare)
  - Deformities:
    - Ulnar deviation
    - Swan-neck deformity
    - Boutonniere deformity
    - Hitchhiker\'s thumb

Scoring:
  - Sharp score (erosions, JSN)
  - Modified Sharp
  - Van der Heijde
------------------------------------------------------------
`,
      keyTerms: [
        { term: 'citrullination', definition: 'Conversion of arginine to citrulline; creates neoantigens' },
        { term: 'PAD', definition: 'Peptidylarginine deiminase; citrullination enzyme' },
        { term: 'shared epitope', definition: 'HLA-DRB1 genetic variant increasing RA risk' },
        { term: 'periarticular osteopenia', definition: 'Bone loss around joints from inflammation' },
        { term: 'subluxation', definition: 'Partial dislocation of joint' },
        { term: 'ankylosis', definition: 'Joint fusion from chronic inflammation' },
        { term: 'ulnar deviation', definition: 'Fingers drift toward ulnar side' },
      ],
      analogies: [
        'Citrullination is like changing one letter in a word - suddenly your body sees it as foreign.',
        'The cytokine cascade is like a domino effect - one triggers another in an inflammatory chain.',
      ],
      clinicalNotes: 'Shared epitope HLA-DRB1 alleles increase RA risk 4-5x, especially with smoking. Anti-CCP positive patients have more aggressive disease.',
      patientCounselingPoints: [
        'Your genetic makeup and smoking history contribute to RA risk.',
        'Anti-CCP positivity means your RA may be more aggressive - early treatment is crucial.',
        'Joint damage on x-ray may not match your symptoms - silent damage can occur.',
      ],
    },
    4: {
      level: 4,
      summary: 'RA treatment involves treat-to-target with csDMARDs, bDMARDs, and tsDMARDs to achieve remission or low disease activity, with methotrexate as anchor therapy.',
      explanation: `**Treatment Principles:**

*Treat-to-Target:*

Management Strategy:
------------------------------------------------------------
Target:
  - Remission or low disease activity
  - Regular monitoring every 1-3 months
  - Adjust therapy if target not met

Disease Activity Measures:
  - DAS28 (28 joint count)
  - CDAI (Clinical Disease Activity Index)
  - SDAI (Simplified Disease Activity Index)
  - RAPID3 (patient report)

Window of Opportunity:
  - First 3-6 months critical
  - Early DMARD initiation
  - Prevents joint damage
  - Improves long-term outcomes
------------------------------------------------------------


*csDMARDs (conventional synthetic):*

First-Line Therapy:
------------------------------------------------------------
Methotrexate (Anchor Drug):
  - Starting dose: 10-15 mg/week
  - Target dose: 20-25 mg/week
  - Oral or subcutaneous
  - Take with folic acid
  - Monitor: CBC, LFTs, renal

  Side Effects:
    - Nausea, stomatitis
    - LFT elevation
    - Myelosuppression
    - Pulmonary toxicity (rare)
    - Teratogenic

Other csDMARDs:
  Hydroxychloroquine:
    - Mild disease
    - Excellent safety
    - Eye exams annually

  Sulfasalazine:
    - Moderate disease
    - GI side effects
    - Monitor CBC, LFTs

  Leflunomide:
    - Similar to MTX
    - Long half-life
    - Needs washout for conception

Combination Therapy:
  - MTX + HCQ + SSZ (triple therapy)
  - Comparable efficacy to biologics
  - Cost-effective
------------------------------------------------------------


*bDMARDs (biologic):*

Biologic Agents:
------------------------------------------------------------
TNF Inhibitors:
  - Adalimumab (Humira)
  - Etanercept (Enbrel)
  - Infliximab (Remicade)
  - Golimumab (Simponi)
  - Certolizumab (Cimzia)

  Use with MTX
  - Screen for TB, hepatitis B
  - Monitor for infection
  - May worsen heart failure

Non-TNF Biologics:
  Abatacept (CTLA-4-Ig):
    - T-cell co-stimulation blockade
    - Effective for MTX failure

  Rituximab (anti-CD20):
    - B-cell depletion
    - Repeat dosing q6 months
    - PML risk

  Tocilizumab (IL-6R):
    - Blocks IL-6 receptor
    - Raises LFTs, lipids
    - Monitor neutrophils

  Sarilumab (IL-6R):
    - Alternative to tocilizumab

IL-1 Inhibitor:
  Anakinra:
    - Daily injections
    - Less commonly used
------------------------------------------------------------
`,
      keyTerms: [
        { term: 'csDMARD', definition: 'Conventional synthetic DMARD (MTX, SSZ, HCQ)' },
        { term: 'bDMARD', definition: 'Biologic DMARD (TNF inhibitors, etc.)' },
        { term: 'tsDMARD', definition: 'Targeted synthetic DMARD (JAK inhibitors)' },
        { term: 'remission', definition: 'No clinical disease activity' },
        { term: 'DAS28', definition: 'Disease Activity Score using 28 joints' },
        { term: 'teratogenic', definition: 'Causes birth defects' },
        { term: 'PML', definition: 'Progressive multifocal leukoencephalopathy; rare brain infection' },
      ],
      analogies: [
        'Treat-to-target is like GPS navigation - constantly checking and adjusting to reach your destination.',
      ],
      clinicalNotes: 'Combination MTX + TNF inhibitor is more effective than either alone. Triple therapy (MTX + SSZ + HCQ) has similar efficacy to biologics.',
      patientCounselingPoints: [
        'Treating early and aggressively gives the best chance of remission.',
        'Methotrexate is the foundation of RA treatment for most people.',
        'Folic acid prevents many methotrexate side effects.',
        'Biologics require screening for infections before starting.',
        'Regular monitoring is essential for all RA medications.',
      ],
    },
    5: {
      level: 5,
      summary: 'Modern RA management incorporates JAK inhibitors, biosimilars, and precision medicine approaches with treat-to-target strategies achieving remission in most patients.',
      explanation: `**Advanced Therapeutics:**

*JAK Inhibitors (tsDMARDs):*

Targeted Synthetic DMARDs:
------------------------------------------------------------
JAK-STAT Pathway:
  - Intracellular signaling
  - Cytokine receptors use JAKs
  - JAK1, JAK2, JAK3, TYK2

Agents:
  Tofacitinib (Xeljanz):
    - JAK1/3 inhibitor
    - 5 mg BID
    - With or without MTX
    - Black box: VTE, death

  Baricitinib (Olumiant):
    - JAK1/2 inhibitor
    - 2-4 mg daily
    - Similar warnings

  Upadacitinib (Rinvoq):
    - JAK1 selective
    - 15 mg daily
    - Superior to adalimumab (SELECT-COMPARE)

  Filgotinib (Jyseleca):
    - JAK1 selective
    - Lower testosterone

Monitoring:
  - CBC, LFTs, lipids
  - VTE risk factors
  - Infection surveillance
------------------------------------------------------------


*Biosimilars:*

Biologic Copies:
------------------------------------------------------------
Definition:
  - Highly similar to reference biologic
  - No clinically meaningful differences
  - Lower cost

Examples:
  - Adalimumab biosimilars (Amjevita, etc.)
  - Etanercept biosimilars (Erelzi, etc.)
  - Infliximab biosimilars (Inflectra, etc.)

Interchangeability:
  - Automatic substitution allowed
  - Same efficacy, safety
  - Significant cost savings

Challenges:
  - Nocebo effect
  - Patient acceptance
  - Provider education
------------------------------------------------------------


*Precision Medicine:*

Personalized Approaches:
------------------------------------------------------------
Serologic Stratification:
  Anti-CCP positive:
    - More aggressive disease
    - TNF inhibitors effective
    - Consider combination early

  Anti-CCP negative (seronegative):
    - Often milder disease
    - May respond to csDMARDs alone

Pharmacogenomics:
  - TPMT testing (azathioprine)
  - HLA-B*5801 (allopurinol)
  - CYP polymorphisms

Biomarker-Guided:
  - Multibiomarker disease activity (VECTRA)
  - Predicts radiographic progression
  - Guides treatment intensity
------------------------------------------------------------
`,
      keyTerms: [
        { term: 'JAK-STAT', definition: 'Janus kinase-signal transducer pathway' },
        { term: 'VTE', definition: 'Venous thromboembolism; blood clots' },
        { term: 'biosimilar', definition: 'Biologic medicine highly similar to reference product' },
        { term: 'nocebo', definition: 'Negative expectation effect from treatment' },
      ],
      analogies: [
        'JAK inhibitors are like noise-canceling headphones - they block intracellular inflammatory signals.',
      ],
      clinicalNotes: 'JAK inhibitors have similar efficacy to TNF inhibitors but carry higher VTE and safety risks. Reserve for TNF failures or contraindications.',
      patientCounselingPoints: [
        'JAK inhibitors are pills that work similarly to biologic injections.',
        'Biosimilars are just as effective as brand-name biologics at lower cost.',
        'Your antibody status (anti-CCP) helps predict your disease course.',
        'Biomarker tests can help guide how aggressively to treat your RA.',
      ],
    },
  },

  media: [
    {
      id: 'ra-joint-deformities',
      type: 'diagram',
      filename: 'rheumatoid-arthritis-deformities.svg',
      title: 'RA Joint Deformities',
      description: 'Illustration of typical RA hand deformities',
    },
    {
      id: 'ra-pathogenesis',
      type: 'diagram',
      filename: 'rheumatoid-arthritis-pathogenesis.svg',
      title: 'RA Pathogenesis',
      description: 'Diagram of RA immune mechanisms',
    },
  ],

  citations: [
    {
      id: 'acr-ra-2021',
      type: 'article',
      title: 'ACR Guideline for the Treatment of Rheumatoid Arthritis',
      source: 'Arthritis Rheumatol',
    },
    {
      id: 'eular-ra-2022',
      type: 'article',
      title: 'EULAR Recommendations for RA Management',
      source: 'Annals of the Rheumatic Diseases',
    },
  ],

  crossReferences: [
    { targetId: 'chronic-disease-osteoarthritis', targetType: 'condition', relationship: 'sibling', label: 'Osteoarthritis' },
    { targetId: 'chronic-disease-gout', targetType: 'condition', relationship: 'sibling', label: 'Gout' },
  ],

  tags: {
    systems: ['musculoskeletal', 'immune'],
    structures: ['joints', 'synovium'],
    topics: ['rheumatoid arthritis', 'autoimmune', 'inflammation'],
    keywords: ['rheumatoid arthritis', 'RA', 'autoimmune arthritis', 'DMARD'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'rheumatology'] },
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
