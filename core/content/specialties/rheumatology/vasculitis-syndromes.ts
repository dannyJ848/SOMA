import { EducationalContent } from '../../types';

export const vasculitisContent: EducationalContent = {
  id: 'condition-vasculitis-syndromes',
  type: 'condition',
  name: 'Vasculitis Syndromes',
  alternateNames: ['Systemic vasculitis', 'Vasculitides', 'Blood vessel inflammation'],
  hpoId: 'HP:0002633',

  levels: {
    1: {
      level: 1,
      summary: 'Vasculitis is a group of conditions where your immune system attacks your blood vessels, causing inflammation that can damage organs throughout your body.',
      explanation: `Vasculitis means inflammation of blood vessels. When your immune system mistakenly attacks your blood vessels, it can cause them to narrow, weaken, or become blocked.

**What happens in vasculitis:**
- Blood vessels become inflamed and swollen
- Vessel walls can thicken, narrowing the passage
- Blood flow to organs and tissues is reduced
- In severe cases, vessels can close completely or rupture

**Common symptoms:**
- Fever and fatigue
- Weight loss
- Muscle and joint pain
- Skin rashes or sores
- Numbness or tingling
- Problems with specific organs depending on which vessels are affected

**Different types affect different vessel sizes:**
- Large vessel: affects the aorta and its main branches
- Medium vessel: affects arteries to organs
- Small vessel: affects tiny blood vessels in skin, kidneys, lungs

**Who gets vasculitis:**
- Can occur at any age
- Some types are more common in certain age groups
- May be triggered by infections, medications, or other autoimmune diseases
- Some types run in families

**How it's treated:**
- Medications to calm down the immune system
- Steroids to reduce inflammation quickly
- Other immune-suppressing drugs for long-term control
- Treatment of any organ damage

**The outlook:**
With proper treatment, many people with vasculitis can achieve remission where the disease becomes inactive.`,
      keyTerms: [
        { term: 'vasculitis', definition: 'Inflammation of blood vessels caused by the immune system' },
        { term: 'inflammation', definition: 'Swelling, redness, and damage caused by the body\'s defense system' },
        { term: 'remission', definition: 'When a disease becomes inactive or goes away' },
        { term: 'autoimmune', definition: 'When the immune system mistakenly attacks the body\'s own tissues' },
      ],
      analogies: [
        'Blood vessels are like pipes carrying blood throughout your body. Vasculitis is like those pipes becoming swollen and partially blocked.',
        'Think of vasculitis like a traffic jam in your blood vessels - inflammation narrows the roads and slows down blood flow.',
      ],
      examples: [
        'A person develops a purple rash on their legs and blood in their urine from inflamed small vessels',
        'Someone experiences severe headaches and vision problems from inflammation in arteries near the brain',
        'A patient has pain in their legs when walking due to reduced blood flow from inflamed arteries',
      ],
    },
    2: {
      level: 2,
      summary: 'Vasculitis comprises a heterogeneous group of disorders characterized by inflammation and destruction of blood vessel walls, classified by vessel size and clinical features, leading to organ ischemia and damage.',
      explanation: `Vasculitis involves immune-mediated inflammation of blood vessels, leading to vessel wall damage, stenosis, or aneurysm formation with consequent tissue ischemia.

**Classification by Vessel Size (Chapel Hill Consensus):**

*Large Vessel Vasculitis:*
- Giant cell arteritis (GCA): Temporal arteries, aorta; age >50
- Takayasu arteritis: Aorta and branches; young women

*Medium Vessel Vasculitis:*
- Polyarteritis nodosa (PAN): Visceral arteries; associated with hepatitis B
- Kawasaki disease: Coronary arteries; children

*Small Vessel Vasculitis:*
- ANCA-associated: GPA, MPA, EGPA
- Immune complex: IgA vasculitis, cryoglobulinemic vasculitis

**ANCA-Associated Vasculitis (AAV):**

1. **Granulomatosis with polyangiitis (GPA, formerly Wegener's):**
   - Upper/lower respiratory tract + kidneys
   - c-ANCA (PR3) positive
   - Granulomatous inflammation
   - Saddle nose deformity, sinusitis, pulmonary nodules

2. **Microscopic polyangiitis (MPA):**
   - Kidneys + lungs (pulmonary-renal syndrome)
   - p-ANCA (MPO) positive
   - No granulomas
   - Rapidly progressive glomerulonephritis

3. **Eosinophilic granulomatosis with polyangiitis (EGPA, Churg-Strauss):**
   - Asthma + eosinophilia + vasculitis
   - p-ANCA positive in 40%
   - Cardiac involvement common

**Clinical Features by System:**

- Skin: Palpable purpura, ulcers, livedo reticularis
- Kidneys: Glomerulonephritis, hematuria, proteinuria
- Lungs: Hemorrhage, nodules, infiltrates
- Nervous system: Mononeuritis multiplex, stroke
- GI: Abdominal pain, bleeding, ischemia

**Diagnosis:**
- ANCA testing (PR3, MPO)
- Inflammatory markers (ESR, CRP elevated)
- Urinalysis (RBC casts, proteinuria)
- Tissue biopsy (gold standard)
- Imaging (CT, angiography)

**Treatment:**
- Induction: High-dose glucocorticoids + cyclophosphamide or rituximab
- Maintenance: Azathioprine, rituximab, or methotrexate
- Plasma exchange for severe renal disease
- Treatment of specific organ involvement`,
      keyTerms: [
        { term: 'ANCA', definition: 'Anti-neutrophil cytoplasmic antibodies; autoantibodies targeting neutrophil proteins, used to diagnose vasculitis', pronunciation: 'AN-kah' },
        { term: 'PR3', definition: 'Proteinase 3; target of c-ANCA in GPA' },
        { term: 'MPO', definition: 'Myeloperoxidase; target of p-ANCA in MPA and EGPA' },
        { term: 'palpable purpura', definition: 'Raised purple spots on skin from inflamed small vessels leaking blood' },
        { term: 'mononeuritis multiplex', definition: 'Damage to multiple individual nerves in different areas, causing weakness and numbness' },
      ],
      analogies: [
        'ANCA vasculitis is like friendly fire - the immune system attacks the body\'s own blood vessel walls.',
        'Palpable purpura from vasculitis is like bruises you can feel, caused by blood leaking from inflamed vessels.',
      ],
    },
    3: {
      level: 3,
      summary: 'Vasculitides are classified by predominant vessel size and ANCA status, with pathogenesis involving neutrophil activation, immune complex deposition, or granulomatous inflammation, requiring immunosuppressive induction and maintenance therapy guided by disease severity and organ involvement.',
      explanation: `**Pathophysiology:**

1. **ANCA-Associated Vasculitis:**
   - Primed neutrophils express PR3/MPO on surface
   - ANCA binding activates neutrophils
   - Respiratory burst, degranulation
   - Neutrophil extracellular traps (NETs)
   - Endothelial damage and necrosis
   - Complement activation (alternative pathway)

2. **Immune Complex Vasculitis:**
   - Circulating immune complexes deposit in vessel walls
   - Complement activation
   - Neutrophil recruitment
   - Examples: IgA vasculitis, cryoglobulinemic vasculitis

3. **Large Vessel Vasculitis:**
   - CD4+ T cell and macrophage infiltration
   - Giant cell formation
   - Intimal hyperplasia
   - Vessel stenosis or aneurysm

**Giant Cell Arteritis (GCA):**

*Clinical Features:*
- Age >50 (peak 70-80)
- New headache (temporal)
- Scalp tenderness
- Jaw claudication (highly specific)
- Visual symptoms (diplopia, vision loss)
- Polymyalgia rheumatica overlap (40-60%)
- Large vessel involvement (aortic aneurysm)

*Diagnosis:*
- ESR/CRP markedly elevated
- Temporal artery biopsy (skip lesions possible)
- Ultrasound: halo sign
- PET/CT for large vessel involvement

*Treatment:*
- High-dose prednisone immediately (prevent blindness)
- Tocilizumab for steroid-sparing
- Low-dose aspirin
- Taper steroids slowly over 1-2 years

**Takayasu Arteritis:**

*Clinical Features:*
- Young women (<40)
- Pulseless disease
- Limb claudication
- Hypertension (renal artery stenosis)
- Aortic regurgitation
- Constitutional symptoms

*Diagnosis:*
- MR angiography or CT angiography
- PET for active inflammation
- Angiography: stenosis, aneurysms, occlusions

*Treatment:*
- Glucocorticoids
- Methotrexate, azathioprine, tocilizumab
- Vascular intervention for critical stenosis

**ANCA-Associated Vasculitis - Detailed:**

*Birmingham Vasculitis Activity Score (BVAS):*
- Standardized assessment of disease activity
- Guides treatment intensity

*Induction Therapy:*
- Severe disease: Cyclophosphamide or rituximab + glucocorticoids
- Non-severe: Methotrexate + glucocorticoids (GPA only)
- Plasma exchange: Severe renal disease (Cr >5.7) or alveolar hemorrhage

*Maintenance Therapy:*
- Rituximab (superior to azathioprine per MAINRITSAN)
- Azathioprine
- Methotrexate
- Duration: minimum 24 months

*Relapse Risk:*
- PR3-ANCA: Higher relapse rate than MPO
- GPA > MPA for relapses
- Monitor ANCA (rising titers may predict relapse)`,
      keyTerms: [
        { term: 'NETs', definition: 'Neutrophil extracellular traps; web-like structures of DNA and proteins released by activated neutrophils that can damage vessel walls' },
        { term: 'halo sign', definition: 'Hypoechoic ring around temporal artery on ultrasound, indicative of vessel wall edema in GCA' },
        { term: 'jaw claudication', definition: 'Pain in jaw muscles during chewing due to ischemia; highly specific for GCA' },
        { term: 'skip lesions', definition: 'Discontinuous areas of inflammation; reason for long temporal artery biopsy specimens' },
        { term: 'BVAS', definition: 'Birmingham Vasculitis Activity Score; standardized tool for assessing vasculitis disease activity' },
      ],
      clinicalNotes: 'In suspected GCA with visual symptoms, start high-dose steroids immediately - do not wait for biopsy. Biopsy remains positive for 2 weeks after starting steroids. Rituximab is now first-line for AAV induction alongside cyclophosphamide based on RAVE trial. Monitor for relapse - PR3-ANCA positive patients have higher relapse rates.',
    },
    4: {
      level: 4,
      summary: 'Vasculitis pathogenesis involves complex interactions between genetic susceptibility, environmental triggers, and immune dysregulation, with ANCA-mediated neutrophil activation, complement amplification, and NET formation driving endothelial injury in small vessel vasculitis, while T cell-mediated granulomatous inflammation characterizes large vessel disease.',
      explanation: `**Molecular Pathogenesis of AAV:**

1. **ANCA Formation:**
   - Loss of tolerance to PR3/MPO
   - Genetic susceptibility (HLA-DPB1*0401 for GPA)
   - Environmental triggers (silica, infections)
   - Molecular mimicry hypothesis
   - Defective regulatory T cells

2. **Neutrophil Priming and Activation:**
   - TNF-alpha primes neutrophils
   - PR3/MPO translocate to cell surface
   - ANCA (IgG) binds via Fab region
   - Fc receptor engagement
   - Respiratory burst activation
   - Release of proteolytic enzymes

3. **NET Formation (NETosis):**
   - Neutrophils release chromatin webs
   - NETs contain PR3, MPO, histones
   - Autoantigens exposed
   - Amplify autoimmunity
   - Direct endothelial toxicity

4. **Complement Activation:**
   - Alternative pathway activation
   - C5a generation
   - C5a receptor on neutrophils
   - Amplification loop
   - Target of avacopan therapy

**Genetic Associations:**

*GPA:*
- HLA-DPB1*0401
- SERPINA1 (alpha-1 antitrypsin)
- PTPN22

*MPA:*
- HLA-DQ

*GCA:*
- HLA-DRB1*04

*Takayasu:*
- HLA-B*52

**Polyarteritis Nodosa (PAN):**

*Characteristics:*
- Medium vessel vasculitis
- NO glomerulonephritis (distinguishes from MPA)
- ANCA negative
- Associated with hepatitis B (declining)

*Clinical Features:*
- Skin: Livedo reticularis, ulcers, nodules
- Peripheral neuropathy (mononeuritis multiplex)
- GI: Mesenteric ischemia, microaneurysms
- Renal: Renovascular hypertension (not GN)
- Cardiac: Coronary arteritis
- Testicular pain

*Diagnosis:*
- Angiography: Microaneurysms
- Biopsy: Necrotizing arteritis

*Treatment:*
- HBV-associated: Antivirals + plasma exchange
- Non-HBV: Glucocorticoids ± cyclophosphamide

**IgA Vasculitis (Henoch-Schonlein Purpura):**

*Pathophysiology:*
- IgA immune complex deposition
- Often follows upper respiratory infection
- Aberrantly glycosylated IgA1

*Clinical Tetrad:*
- Palpable purpura (lower extremities, buttocks)
- Arthritis/arthralgias
- Abdominal pain (GI vasculitis)
- Renal involvement (IgA nephropathy)

*Treatment:*
- Usually self-limited in children
- Supportive care
- Glucocorticoids for severe GI or renal involvement

**Cryoglobulinemic Vasculitis:**

*Types:*
- Type I: Monoclonal (lymphoproliferative disorders)
- Type II/III: Mixed (HCV-associated)

*Clinical Features:*
- Meltzer's triad: Purpura, arthralgias, weakness
- Peripheral neuropathy
- Glomerulonephritis (MPGN)
- Low C4 (classic pathway consumption)

*Treatment:*
- Treat underlying HCV
- Rituximab for severe disease
- Plasma exchange for hyperviscosity`,
      keyTerms: [
        { term: 'avacopan', definition: 'C5a receptor inhibitor; approved for AAV as glucocorticoid-sparing agent' },
        { term: 'NETosis', definition: 'Process of neutrophil extracellular trap formation; contributes to autoantigen exposure and vascular damage in AAV' },
        { term: 'microaneurysms', definition: 'Small arterial dilations seen on angiography; characteristic of PAN' },
        { term: 'aberrantly glycosylated IgA1', definition: 'IgA1 with altered sugar chains that forms immune complexes; pathogenic in IgA vasculitis' },
        { term: 'Meltzer\'s triad', definition: 'Classic presentation of cryoglobulinemic vasculitis: purpura, arthralgias, weakness' },
      ],
      clinicalNotes: 'Avacopan (C5a receptor inhibitor) is now FDA-approved for AAV as an adjunct to reduce glucocorticoid exposure. PAN is distinguished from MPA by the absence of glomerulonephritis and ANCA negativity. In cryoglobulinemic vasculitis, low C4 with normal C3 is typical due to classic complement pathway activation. Always test for HCV in mixed cryoglobulinemia.',
    },
    5: {
      level: 5,
      summary: 'Contemporary vasculitis management integrates precision medicine approaches with targeted biologics (rituximab, tocilizumab, avacopan), biomarker-guided therapy, and evolving understanding of complement pathobiology and NET-driven autoimmunity, while addressing long-term complications including cardiovascular disease and treatment-related toxicity.',
      explanation: `**Precision Medicine in Vasculitis:**

1. **Biomarker-Guided Therapy:**

   *ANCA Monitoring:*
   - PR3-ANCA levels may predict relapse
   - Less clear for MPO-ANCA
   - Serial monitoring controversial
   - Rising titers: consider preemptive therapy?

   *Other Biomarkers:*
   - Urinary soluble CD163: Active renal vasculitis
   - Calprotectin: Disease activity
   - CXCL13: B cell activity
   - NETs remnants: Disease activity

2. **Targeted Therapies:**

   *Rituximab (Anti-CD20):*
   - RAVE trial: Non-inferior to cyclophosphamide for induction
   - Superior for relapsing disease
   - MAINRITSAN: Superior to azathioprine for maintenance
   - Dosing: 375 mg/m2 x4 or 1000 mg x2

   *Tocilizumab (Anti-IL-6R):*
   - GiACTA trial: Effective in GCA
   - Steroid-sparing effect
   - First approved biologic for GCA
   - Consider for relapsing/refractory disease

   *Avacopan (C5aR Inhibitor):*
   - ADVOCATE trial: Non-inferior to prednisone taper
   - Better sustained remission at 52 weeks
   - Glucocorticoid-sparing
   - FDA approved 2021 for AAV

   *Mepolizumab (Anti-IL-5):*
   - Approved for EGPA
   - Reduces relapses
   - Steroid-sparing

3. **Treatment Algorithms:**

   *AAV Induction - 2021 ACR/VF Guidelines:*
   - Severe disease: Rituximab or cyclophosphamide + glucocorticoids
   - Active GN: Consider plasma exchange (PEXIVAS less clear benefit)
   - Alveolar hemorrhage: Plasma exchange
   - Avacopan: Adjunct for glucocorticoid reduction

   *AAV Maintenance:*
   - Rituximab preferred over azathioprine (MAINRITSAN-2, 3)
   - Duration: Minimum 18-24 months
   - Extended maintenance for high relapse risk
   - Indefinite for PR3+ with multiple relapses

   *GCA Treatment:*
   - Prednisone 40-60 mg/day initially
   - Tocilizumab for steroid-sparing
   - Taper over 12-24 months
   - Low-dose aspirin for ischemic complications

4. **Long-Term Complications:**

   *Cardiovascular Disease:*
   - Accelerated atherosclerosis in vasculitis
   - GCA: Aortic aneurysm risk (monitor with imaging)
   - Large vessel vasculitis: Aortic dissection
   - AAV: Increased CV events

   *Treatment Toxicity:*
   - Glucocorticoids: Osteoporosis, diabetes, cataracts
   - Cyclophosphamide: Bladder cancer, infertility
   - Rituximab: Hypogammaglobulinemia, infections
   - Immunosuppression: Infection risk

   *Renal Outcomes in AAV:*
   - 20-25% progress to ESRD
   - Predictors: High creatinine at diagnosis, % sclerotic glomeruli
   - Transplant outcomes good (low recurrence)

5. **Emerging Therapies:**

   *Complement Inhibitors:*
   - C5 inhibitors in trials
   - Lectin pathway targeting
   - Complement biomarkers for monitoring

   *B Cell Targeting:*
   - Obinutuzumab (type II anti-CD20)
   - Belimumab (anti-BAFF)
   - CD19-targeted therapies

   *Other Targets:*
   - JAK inhibitors (under investigation)
   - Plasma cell targeting
   - NET inhibitors
   - Tolerogenic approaches

6. **Special Situations:**

   *AAV in Pregnancy:*
   - Plan pregnancy in remission
   - Azathioprine safe for maintenance
   - Rituximab: Avoid in third trimester
   - Cyclophosphamide contraindicated

   *Overlap Syndromes:*
   - Drug-induced ANCA vasculitis (hydralazine, PTU)
   - Levamisole-adulterated cocaine vasculitis
   - ANCA with anti-GBM disease

   *Refractory Disease:*
   - Define: Persistent activity despite standard therapy
   - Options: Switch rituximab/cyclophosphamide
   - Consider avacopan, plasma exchange
   - Clinical trials`,
      keyTerms: [
        { term: 'MAINRITSAN', definition: 'Trial demonstrating rituximab superiority over azathioprine for AAV maintenance therapy' },
        { term: 'ADVOCATE', definition: 'Trial showing avacopan non-inferiority to prednisone and improved sustained remission in AAV' },
        { term: 'GiACTA', definition: 'Trial demonstrating tocilizumab efficacy in GCA with significant steroid-sparing' },
        { term: 'PEXIVAS', definition: 'Large trial showing plasma exchange did not reduce death or ESRD in AAV, though may benefit severe renal disease' },
        { term: 'obinutuzumab', definition: 'Type II anti-CD20 antibody with different mechanism than rituximab; under investigation for AAV' },
      ],
      clinicalNotes: `**Board-Relevant Pearls:**
- GCA: Start steroids immediately for visual symptoms; don't wait for biopsy
- Jaw claudication is highly specific for GCA
- PR3-ANCA (c-ANCA) = GPA; MPO-ANCA (p-ANCA) = MPA, EGPA
- PAN has NO glomerulonephritis and is ANCA negative
- Rituximab is first-line for relapsing AAV
- Avacopan is a C5aR inhibitor for glucocorticoid-sparing in AAV
- Tocilizumab is steroid-sparing in GCA
- Low C4, normal C3 = cryoglobulinemic vasculitis (classic pathway)
- IgA vasculitis: purpura, arthritis, abdominal pain, nephritis
- Always check HCV in mixed cryoglobulinemia`,
    },
  },

  media: [
    {
      id: 'vasculitis-classification',
      type: 'diagram',
      filename: 'vasculitis-chapel-hill.svg',
      title: 'Chapel Hill Classification of Vasculitis',
      description: 'Classification of vasculitides by vessel size',
    },
    {
      id: 'palpable-purpura',
      type: 'image',
      filename: 'palpable-purpura.jpg',
      title: 'Palpable Purpura in Small Vessel Vasculitis',
      description: 'Raised purple lesions on lower extremities from leukocytoclastic vasculitis',
    },
  ],
  citations: [
    {
      id: 'jennette-2013',
      type: 'article',
      title: '2012 Revised International Chapel Hill Consensus Conference Nomenclature of Vasculitides',
      authors: ['Jennette JC', 'Falk RJ', 'Bacon PA', 'et al.'],
      source: 'Arthritis & Rheumatology',
      url: 'https://doi.org/10.1002/art.37715',
    },
    {
      id: 'chung-2021',
      type: 'article',
      title: '2021 ACR/VF Guideline for the Management of ANCA-Associated Vasculitis',
      authors: ['Chung SA', 'Langford CA', 'Maz M', 'et al.'],
      source: 'Arthritis & Rheumatology',
      url: 'https://doi.org/10.1002/art.41844',
    },
  ],
  crossReferences: [
    { targetId: 'condition-systemic-lupus-erythematosus', targetType: 'condition', relationship: 'related', label: 'Systemic Lupus Erythematosus' },
    { targetId: 'condition-rheumatoid-arthritis', targetType: 'condition', relationship: 'related', label: 'Rheumatoid Arthritis' },
    { targetId: 'topic-autoimmune-serology', targetType: 'topic', relationship: 'related', label: 'Autoimmune Serology' },
  ],
  tags: {
    systems: ['vascular', 'immune', 'renal', 'respiratory'],
    topics: ['rheumatology', 'vasculitis', 'autoimmune disease'],
    keywords: ['vasculitis', 'ANCA', 'GPA', 'MPA', 'GCA', 'Takayasu', 'PAN'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default vasculitisContent;
