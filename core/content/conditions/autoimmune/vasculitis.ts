/**
 * Vasculitis Overview - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const vasculitisContent: EducationalContent = {
  id: 'condition-vasculitis-syndromes',
  type: 'condition',
  name: 'Systemic Vasculitis Syndromes',
  alternateNames: ['Vasculitis', 'Angiitis', 'Arteritis'],
  hpoId: 'HP:0002583',

  levels: {
    1: {
      level: 1,
      summary: 'Vasculitis means inflammation of blood vessels. It can affect different sized blood vessels and cause various symptoms depending on which organs are involved.',
      explanation: `Vasculitis occurs when your immune system attacks your blood vessels, causing inflammation. This can damage the vessels and reduce blood flow to tissues and organs.

**Types based on vessel size:**
- Large vessels: Aorta and main branches
- Medium vessels: Arteries to organs and skin
- Small vessels: Tiny capillaries, arterioles, venules

**General symptoms:**
- Fever, fatigue, feeling unwell
- Weight loss
- Muscle and joint pain
- Night sweats

**Specific symptoms depend on:**
- Which vessels are affected
- Which organs receive blood from those vessels
- How severe the inflammation is

**Common complications:**
- Reduced blood flow causing tissue damage
- Formation of aneurysms (weakened vessel walls)
- Organ damage (kidneys, lungs, nerves)
- Skin rashes or ulcers

**Treatment:**
- Medications to calm the immune system (steroids)
- Other immunosuppressive drugs
- Treating any underlying infection
- Supportive care for affected organs`,
      keyTerms: [
        { term: 'vasculitis', definition: 'Inflammation of blood vessels that can damage them and reduce blood flow' },
        { term: 'aneurysm', definition: 'A weak spot in a blood vessel wall that bulges out; can burst and cause dangerous bleeding' },
        { term: 'ischemia', definition: 'Lack of blood flow to tissues, causing damage' },
        { term: 'granuloma', definition: 'Cluster of immune cells that forms during inflammation' },
      ],
      analogies: [
        'Vasculitis is like your pipes (blood vessels) getting inflamed and clogged, preventing water (blood) from reaching your house (organs).',
        'Think of vasculitis as "internal rusting" - the pipes carrying blood become damaged and narrowed.',
      ],
      examples: [
        'An older person with severe headaches and jaw pain when chewing might have giant cell arteritis.',
        'Someone with sinus problems, kidney issues, and nerve problems might have granulomatosis with polyangiitis.',
        'A young woman with unusual lumps in her armpits and groins along with fatigue might have Takayasu arteritis.',
      ],
      patientCounselingPoints: [
        'Take your medications exactly as prescribed - stopping them suddenly can cause the disease to flare',
        'Report any new symptoms promptly, especially severe headaches, vision changes, or numbness',
        'Have regular blood tests to monitor your condition and medication side effects',
        'Protect yourself from infections while on immunosuppressive medications',
      ],
    },
    2: {
      level: 2,
      summary: 'Vasculitis is classified by vessel size (small, medium, large) and includes ANCA-associated vasculitis, giant cell arteritis, Takayasu arteritis, polyarteritis nodosa, and Kawasaki disease.',
      explanation: `## Classification by Vessel Size

**Large Vessel Vasculitis:**
- **Giant Cell Arteritis (GCA):** Aorta and branches, especially temporal artery
- **Takayasu Arteritis (TAK):** Aorta and main branches, younger patients

**Medium Vessel Vasculitis:**
- **Polyarteritis Nodosa (PAN):** Medium-sized arteries
- **Kawasaki Disease (KD):** Medium + small vessels, children

**Small Vessel Vasculitis:**
- **ANCA-Associated Vasculitis (AAV):**
  - Granulomatosis with Polyangiitis (GPA)
  - Microscopic Polyangiitis (MPA)
  - Eosinophilic Granulomatosis with Polyangiitis (EGPA)
- **Immune Complex Small Vessel:**
  - IgA vasculitis (Henoch-Schonlein purpura)
  - Cryoglobulinemic vasculitis
  - Hypersensitivity vasculitis

## ANCA-Associated Vasculitis

**ANCA Patterns:**
- **c-ANCA (cytoplasmic):** Anti-PR3, associated with GPA
- **p-ANCA (perinuclear):** Anti-MPO, associated with MPA, EGPA

**Granulomatosis with Polyangiitis (GPA):**
- Formerly Wegener granulomatosis
- Granulomatous inflammation: Sinuses, lungs, kidneys
- Triad: Sinusitis, pulmonary nodules/capillaritis, glomerulonephritis
- c-ANCA/anti-PR3 positive (80-90%)

**Microscopic Polyangiitis (MPA):**
- No granulomas
- Glomerulonephritis + pulmonary capillaritis
- p-ANCA/anti-MPO positive (60%)
- Similar to GPA without sinus/granulomas

**Eosinophilic Granulomatosis with Polyangiitis (EGPA):**
- Formerly Churg-Strauss syndrome
- Asthma, eosinophilia, neuropathy
- p-ANCA positive (40%)
- Allergic granulomatosis

## Giant Cell Arteritis (GCA)
- Age >50 (usually >70)
- Headache, scalp tenderness
- Jaw claudication (pain when chewing)
- Vision changes, blindness (EMERGENCY)
- Polymyalgia rheumatica association
- Elevated ESR >50
- Temporal artery biopsy for diagnosis
- Treat with high-dose steroids urgently

## Takayasu Arteritis (TAK)
- Age <40 (usually young women)
- Aortic arch and branches
- Claudication of extremities
- Blood pressure discrepancies between arms
- Diminished pulses
- Vascular bruits

## Clinical Features by Organ

**Renal:**
- Glomerulonephritis (crescentic)
- Rapid kidney failure
- Urinary sediment (RBC casts)

**Pulmonary:**
- Pulmonary hemorrhage
- Nodules, cavities
- Diffuse alveolar hemorrhage

**Ear Nose Throat:**
- Sinusitis, nasal ulcers
- Hearing loss
- Saddle nose deformity

**Skin:**
- Palpable purpura
- Ulcers
- Livedo reticularis
**Neurologic:**
- Mononeuritis multiplex
- Peripheral neuropathy
- Stroke (large vessel)

**Musculoskeletal:**
- Arthralgias, myalgias
- Polymyalgia rheumatica (GCA)`,
      keyTerms: [
        { term: 'ANCA', definition: 'Anti-neutrophil cytoplasmic antibody; marker for ANCA-associated vasculitis' },
        { term: 'jaw claudication', definition: 'Pain in jaw when chewing due to reduced blood flow; classic for GCA' },
        { term: 'mononeuritis multiplex', definition: 'Asymmetric nerve affecting multiple nerves, common in vasculitis' },
        { term: 'glomerulonephritis', definition: 'Inflammation of kidney filters; causes kidney failure in vasculitis' },
        { term: 'palpable purpura', definition: 'Raised purple spots from small vessel bleeding in skin' },
      ],
      analogies: [
        'ANCA antibodies are like "friendly fire" signals that tell white blood cells to attack blood vessel walls.',
      ],
      examples: [
        'A 75-year-old woman with new headache, jaw pain when chewing, and ESR of 90 needs urgent evaluation for GCA.',
        'c-ANCA positive patient with sinusitis, lung nodules, and kidney failure has GPA.',
        'Young woman with absent radial pulse and blood pressure difference between arms has Takayasu arteritis.',
      ],
    },
    3: {
      level: 3,
      summary: 'Vasculitis pathogenesis involves immune complex deposition (small vessel) or granulomatous inflammation (large/medium vessel), with ANCA playing a central role in small vessel necrotizing vasculitis.',
      explanation: `## Pathophysiology

**ANCA-Associated Vasculitis Pathogenesis:**
- ANCA activates neutrophils
- Neutrophils attack small vessel walls
- Necrotizing inflammation, capillaritis
- Immune complexes not primary driver

**Large Vessel Vasculitis:**
- Granulomatous inflammation in vessel wall
- Giant cells (multinucleated histiocytes)
- Vascular occlusion, aneurysm formation
- IL-6, IFN-gamma driven

**Immune Complex Vasculitis:**
- Antigen-antibody complexes deposit in vessels
- Complement activation
- Neutrophil recruitment
- Vessel wall damage

## Chapel Hill Consensus Conference (CHCC) Classification

**Large Vessel:**
- Giant cell arteritis (temporal arteritis)
- Takayasu arteritis
- Isolated aortitis

**Medium Vessel:**
- Polyarteritis nodosa
- Kawasaki disease

**Small Vessel:**
- **ANCA-associated:**
  - Granulomatosis with polyangiitis (GPA)
  - Microscopic polyangiitis (MPA)
  - Eosinophilic granulomatosis with polyangiitis (EGPA)

- **Immune complex:**
  - Anti-glomerular basement membrane disease
  - Cryoglobulinemic vasculitis
  - IgA vasculitis (Henoch-Schonlein)
  - Hypersensitivity vasculitis

- **Variable vessel:**
  - Behcet disease

## ANCA-Associated Vasculitis Details

**GPA (Wegener):**
- Granulomas: Upper respiratory, lungs
- Necrotizing glomerulonephritis
- c-ANCA/anti-PR3 positive (80-90%)
- ENT involvement: Sinusitis, otitis, nasal ulcers
- Pulmonary: Nodules, cavities, hemorrhage
- Renal: Crescentic GN

**MPA:**
- Pauci-immune glomerulonephritis
- Pulmonary capillaritis (DAH)
- p-ANCA/anti-MPO (60%)
- No granulomas
- No ENT involvement

**EGPA (Churg-Strauss):**
- Asthma, eosinophilia (>10%)
- Allergic rhinitis, sinusitis
- Mononeuritis multiplex
- Pulmonary infiltrates (eosinophilic)
- p-ANCA positive (40%)
- Anti-MPO or ANCA-negative (60%)

**ANCA Testing:**
- Indirect immunofluorescence: Pattern (c-ANCA, p-ANCA)
- ELISA: Specific antigen (PR3, MPO)
- Both methods needed (IIF for pattern, ELISA for specificity)

## Giant Cell Arteritis

**Clinical Presentation:**
- Age >50 (peak 70-80)
- Female:male 2-3:1
- Headache (temporal region)
- Scalp tenderness
- Jaw claudication (pathognomonic)
- Visual symptoms: Amaurosis, diplopia (EMERGENCY)
- Polymyalgia rheumatica (50%)
- Aortic aneurysm risk

**Diagnosis:**
- ESR >50 (sensitive, not specific)
- CRP elevated
- Temporal artery biopsy: Giant cells, granulomatous arteritis
- Ultrasound: Halo sign
- MRI/CT: Vessel wall inflammation

**Treatment:**
- HIGH-DOSE PREDNISONE 40-60 mg daily
- Urgent treatment to prevent blindness
- Tocilizumab (IL-6 inhibitor) as steroid-sparing
- Aspirin for vascular protection
- Slow steroid taper over 12-18 months

## Takayasu Arteritis

**Clinical Presentation:**
- Age <40 (usually 20-30)
- Female predominance (90%)
- Aortic arch and branches
- Claudication: Arms, legs, jaw
- Blood pressure discrepancies >10 mmHg
- Diminished/absent pulses
- Vascular bruits
- Constitutional symptoms

**Angiographic Classification:**
- Type I: Aortic arch and branches
- Type II: Aortic arch + ascending aorta
- Type III: Aortic arch + descending thoracic aorta
- Type IV: Descending + abdominal aorta
- Type V: Combined

**Diagnosis:**
- MRI/MRA: Vessel wall thickening, enhancement
- CT angiography
- Conventional angiography
- Elevated inflammatory markers
- ACR criteria: Age <40, claudication, decreased pulses, BP discrepancy, bruit

**Treatment:**
- High-dose steroids
- Steroid-sparing: Methotrexate, azathioprine, mycophenolate
- TNF inhibitors for refractory disease
- Tocilizumab
- Vascular intervention (stenting, bypass) for late-stage`,
      keyTerms: [
        { term: 'CHCC', definition: 'Chapel Hill Consensus Conference; standardized vasculitis nomenclature' },
        { term: 'halo sign', definition: 'Ultrasound finding of dark halo around temporal artery in GCA' },
        { term: 'DAH', definition: 'Diffuse alveolar hemorrhage; bleeding into lungs from vasculitis' },
        { term: 'crescentic GN', definition: 'Rapidly progressive glomerulonephritis with crescent formation on biopsy' },
        { term: 'amaurosis fugax', definition: 'Transient vision loss from retinal ischemia; GCA emergency' },
      ],
      clinicalNotes: 'GCA: Treat immediately with high-dose steroids to prevent blindness - don\'t delay for temporal artery biopsy. ANCA: Order both IIF and ELISA. Anti-PR3 = c-ANCA = GPA. Anti-MPO = p-ANCA = MPA/EGPA. EGPA has asthma, eosinophilia, neuropathy.',
    },
    4: {
      level: 4,
      summary: 'Advanced vasculitis management incorporates remission induction, maintenance therapy, biomarker monitoring, relapse prevention, and organ-specific protocols while balancing infection risk and cumulative damage.',
      explanation: `## Treatment Principles for ANCA-Associated Vasculitis

**Remission Induction:**
- **GPA/MPA:**
  - Cyclophosphamide (oral or IV pulse)
  - OR Rituximab (non-severe, or for gonadal preservation)
  - High-dose glucocorticoids
  - Plasma exchange for severe pulmonary hemorrhage or dialysis-dependent GN

- **EGPA:**
  - High-dose steroids
  - Cyclophosphamide for severe organ involvement
  - Mepolizumab (anti-IL-5) for eosinophilic disease
  - Rituximab for ANCA-positive subset

**Maintenance Therapy:**
- Azathioprine 2 mg/kg/day
- Methotrexate 20-25 mg/week
- Mycophenolate mofetil
- Rituximab every 6 months
- Duration: At least 18-24 months

**Relapse Management:**
- Re-induce with cyclophosphamide or rituximab
- Consider switching agent class
- Increase immunosuppression
- Treat infections before escalating

## Biomarker Monitoring

**ANCA Titers:**
- Rising titers may predict relapse (especially PR3-ANCA)
- Don\'t treat based on titers alone
- Clinical correlation essential
- MPO-ANCA less reliable for monitoring

**Other Markers:**
- BVAS (Birmingham Vasculitis Activity Score)
- Serum creatinine, urinalysis
- ESR/CRP
- Complement levels (immune complex vasculitis)

## Refractory Disease

**Refractory GPA/MPA:**
- Plasma exchange for severe disease
- IVIG
- Combination cyclophosphamide + rituximab
- Consider avacopan (C5a receptor inhibitor)

**Refractory EGPA:**
- Mepolizumab (anti-IL-5)
- Benralizumab (anti-IL-5R)
- Nucala (mepolizumab) FDA-approved
- Omalizumab (anti-IgE)

## Giant Cell Arteritis Management

**Induction:**
- Prednisone 40-60 mg daily
- Tocilizumab 162 mg weekly (SC)
- IL-6 inhibition allows faster taper

**Steroid Taper:**
- Slow taper over 12-18 months
- Flare common with rapid taper
- Use tocilizumab as steroid-sparing
- Consider methotrexate as adjunct

**Monitoring:**
- ESR/CRP (may be normal on tocilizumab)
- Clinical assessment
- Monitor for aortic aneurysm (imaging)
- Ophthalmology exams

**Vision Loss Prevention:**
- Urgent high-dose steroids
- Don\'t delay for diagnostic tests
- IV methylprednisolbin if concern

## Large Vessel Complications

**Aortic Aneurysm (GCA, TAK):**
- Lifelong surveillance
- CT/MRI angiography annually
- Surgical repair when indicated
- Screen for thoracic and abdominal aneurysms

**Vascular Stenosis:**
- Intervention during quiescent phase
- Percutaneous angioplasty/stenting
- Surgical bypass
- Restenosis risk if active disease

## Polyarteritis Nodosa

**Clinical Features:**
- Medium vessel necrotizing vasculitis
- No glomerulonephritis
- ANCA negative
- Skin: Livedo, nodules, ulcers
- Peripheral neuropathy: Mononeuritis multiplex
- Mesenteric ischemia
- Testicular pain
- Hepatitis B association (classic PAN)

**Treatment:**
- Steroids + cyclophosphamide (idiopathic)
- Steroids + antiviral (HBV-associated)
- Plasma exchange for severe disease

## Cryoglobulinemic Vasculitis

**Types:**
- Type I: Monoclonal (usually hematologic malignancy)
- Type II: Mixed monoclonal + polyclonal (HCV-associated)
- Type III: Polyclonal (HCV, autoimmune)

**Clinical:**
- Purpura, arthralgias, weakness
- Glomerulonephritis (membranoproliferative)
- Peripheral neuropathy

**Treatment:**
- Treat HCV (direct-acting antivirals)
- Steroids for severe disease
- Rituximab for refractory
- Plasma exchange for severe cryoglobulinemia`,
      keyTerms: [
        { term: 'BVAS', definition: 'Birmingham Vasculitis Activity Score; validated measure of vasculitis activity' },
        { term: 'avacopan', definition: 'Oral C5a receptor inhibitor approved for ANCA-associated vasculitis' },
        { term: 'mepolizumab', definition: 'Anti-IL-5 monoclonal antibody approved for EGPA' },
        { term: 'remission induction', definition: 'Initial aggressive therapy to achieve disease control' },
      ],
      clinicalNotes: 'Tocilizumab allows faster steroid taper in GCA. Avacopan replaces high-dose steroids for renal AAV. Mepolizumab approved for EGPA. Cryoglobulinemic vasculitis: screen for HCV. ANCA titers can guide monitoring but don\'t treat based on titers alone.',
    },
    5: {
      level: 5,
      summary: 'Contemporary vasculitis care incorporates novel targeted therapies, biomarker-guided treatment, precision medicine approaches, and evidence-based protocols while addressing long-term outcomes and comorbidity management.',
      explanation: `## Precision Medicine in Vasculitis

**Genetic and Molecular Subtypes:**
- PR3-ANCA vs MPO-ANCA: Different phenotypes, outcomes
- HLA associations influencing disease expression
- Gene expression signatures predicting relapse
- Epigenetic modifications affecting treatment response

**Biomarker Development:**
- ANCA glycosylation patterns
- Complement activation products
- Urinary biomarkers for renal vasculitis
- Proteomic signatures

## Novel Therapeutic Agents

**ANCA-Associated Vasculitis:**
- **Avacopan:** Oral C5aR inhibitor
  - Replaces high-dose steroids for renal disease
  - ADVOCATE trial: Non-inferior outcomes
  - Better safety profile

- **Inebilizumab:** Anti-CD19 B-cell depletion
- **Belimumab:** Anti-BLyS
- **Anifrolumab:** Anti-IFNAR

**Large Vessel Vasculitis:**
- **Tocilizumab:** IL-6R inhibitor
  - FDA-approved for GCA
  - GiACTA trial: Superior remission
  - Faster steroid taper

- **Sarilumab:** IL-6R inhibitor (investigational)
- **Ustekinumab:** IL-12/23 inhibitor
- **Abatacept:** T-cell costimulation blockade

**EGPA-Specific:**
- **Mepolizumab:** Anti-IL-5
  - FDA-approved for EGPA
  - MIRRA trial: Reduced relapse, steroid-sparing
  - Best for eosinophilic-predominant disease

- **Benralizumab:** Anti-IL-5Rα
- **Nucala:** Mepolizumab formulation

## Refractory Disease Strategies

**Refractory GPA/MPA:**
- Combination: Rituximab + avacopan
- Switch anti-CD20 agent (obinutuzumab)
- Consider plasma exchange
- Investigational agents

**Refractory GCA:**
- Switch to or add IL-6 inhibitor
- Consider JAK inhibitors (tofacitinib, baricitinib)
- TNF inhibitors (limited evidence)

**Refractory TAK:**
- TNF inhibitors (infliximab, etanercept)
- Tocilizumab
- JAK inhibitors

## Relapse Prediction and Prevention

**Risk Factors:**
- PR3-ANCA positivity
- Upper respiratory disease
- Previous relapses
- Shorter induction therapy
- PR3-ANCA rising titer

**Prevention Strategies:**
- Extended maintenance (3-5 years)
- Serial ANCA monitoring
- Early intervention for rising titers
- Patient education on symptoms

## Complications Management

**Infection Prevention:**
- Pneumocystis prophylaxis (TMP-SMX)
- Strict vaccination protocol
- Avoid live vaccines on biologics
- Screen for TB, hepatitis before immunosuppression

**Cardiovascular Risk:**
- Accelerated atherosclerosis
- Aggressive risk factor modification
- Statins per guidelines
- Blood pressure control

**Bone Health:**
- Glucocorticoid-induced osteoporosis
- Calcium, vitamin D
- Bisphosphonates
- Steroid-sparing strategies

**Renal Long-Term:**
- Chronic kidney disease monitoring
- Proteinuria management
- Blood pressure control
- Avoid nephrotoxins

## Pregnancy Considerations

**Pre-conception Counseling:**
- Achieve remission before conception
- Review medication safety
- Multidisciplinary care

**Safe Medications:**
- Prednisone (lowest effective)
- Azathioprine
- TNF inhibitors (most data)
- Calcineurin inhibitors

**Avoid:**
- Cyclophosphamide
- Methotrexate
- Mycophenolate
- Rituximab (use caution)

## Emerging Therapies

**Targeted Complement Inhibition:**
- Avacopan (C5aR)
- Eculizumab (C5)
- Ravulizumab (C5)

**B-Cell Therapies:**
- Obinutuzumab (anti-CD20)
- Inebilizumab (anti-CD19)
- Belimumab (anti-BLyS)

**Cytokine Targeting:**
- JAK inhibitors
- Anti-IL-5/IL-5R (EGPA)
- Anti-IL-6 (GCA, TAK)

**Cellular Therapies:**
- Autologous stem cell transplant (refractory)
- Regulatory T cell therapy
- Tolerogenic dendritic cells

## Quality of Life
- Fatigue management
- Cognitive dysfunction
- Physical rehabilitation
- Psychological support
- Vocational rehabilitation`,
      keyTerms: [
        { term: 'avacopan', definition: 'Oral C5a receptor inhibitor; steroid-sparing for AAV renal disease' },
        { term: 'mepolizumab', definition: 'IL-5 inhibitor; steroid-sparing for EGPA' },
        { term: 'GiACTA trial', definition: 'Phase 3 trial establishing tocilizumab efficacy in GCA' },
        { term: 'ADVOCATE trial', definition: 'Phase 3 trial of avacopan in AAV' },
      ],
      clinicalNotes: 'Board pearls: GCA = age >50, headache, jaw claudication, high ESR. Treat with high-dose steroids immediately to prevent blindness. Tocilizumab is steroid-sparing. ANCA: c-ANCA/PR3 = GPA; p-ANCA/MPO = MPA/EGPA. EGPA has asthma + eosinophilia + neuropathy. Mepolizumab for EGPA. Cryoglobulinemic vasculitis = HCV. PAN = HBV associated.',
    },
  },

  media: [
    {
      id: 'vasculitis-classification',
      type: 'diagram',
      filename: 'vasculitis-classification-chart.jpg',
      title: 'Vasculitis Classification by Vessel Size',
      description: 'Flowchart showing vasculitis types organized by affected vessel size',
    },
  ],
  citations: [
    {
      id: 'jennette-2013',
      type: 'article',
      title: '2012 revised International Chapel Hill Consensus Conference Nomenclature of Vasculitides',
      authors: ['Jennette JC', 'Falk RJ', 'Gasim A', 'et al.'],
      source: 'Arthritis & Rheumatology',
      url: 'https://doi.org/10.1002/art.37915',
    },
    {
      id: 'yates-2021',
      type: 'article',
      title: 'Management of ANCA-associated vasculitis: 2021 updates',
      authors: ['Yates M', 'Walsh M', 'Watts R'],
      source: 'Nature Reviews Rheumatology',
    },
  ],
  crossReferences: [
    { targetId: 'condition-systemic-lupus-erythematosus', targetType: 'condition', relationship: 'related', label: 'Systemic Lupus Erythematosus' },
    { targetId: 'topic-autoimmune-serology', targetType: 'topic', relationship: 'related', label: 'Autoimmune Serology' },
  ],
  tags: {
    systems: ['immune', 'cardiovascular', 'renal', 'pulmonary', 'nervous', 'integumentary'],
    topics: ['rheumatology', 'vasculitis', 'autoimmunity', 'nephrology'],
    keywords: ['vasculitis', 'GCA', 'temporal arteritis', 'Takayasu', 'GPA', 'Wegener', 'MPA', 'EGPA', 'Churg-Strauss', 'ANCA', 'PAN'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },

  createdAt: '2026-01-26T00:00:00.000Z',
  updatedAt: '2026-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default vasculitisContent;
