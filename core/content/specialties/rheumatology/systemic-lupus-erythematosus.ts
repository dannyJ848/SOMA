import { EducationalContent } from '../../types';

export const systemicLupusContent: EducationalContent = {
  id: 'condition-systemic-lupus-erythematosus',
  type: 'condition',
  name: 'Systemic Lupus Erythematosus',
  alternateNames: ['SLE', 'Lupus', 'Systemic lupus'],
  hpoId: 'HP:0002725',

  levels: {
    1: {
      level: 1,
      summary: 'Lupus is when your body\'s defense system attacks your own healthy tissues, causing inflammation in many different parts of your body.',
      explanation: `Imagine your body has an army of soldiers (immune cells) that protect you from germs. In lupus, these soldiers get confused and start attacking your own body instead of just fighting germs.

**What happens:**
- Your immune system makes antibodies that attack your own tissues
- This causes inflammation (swelling, pain, redness)
- Many different body parts can be affected
- Symptoms can come and go (called "flares")

**What body parts can be affected:**
- Skin: Rashes, especially a butterfly-shaped rash on the face
- Joints: Pain and swelling like arthritis
- Kidneys: Can affect how your body filters blood
- Heart and lungs
- Brain and nerves
- Blood cells

**Who gets lupus:**
- Women much more often than men (9 out of 10 are women)
- Usually starts between ages 15-45
- More common in Black, Hispanic, and Asian populations
- Can run in families

**Signs to watch for:**
- Tiredness that doesn't go away
- Joint pain and swelling
- A rash across the cheeks and nose (butterfly rash)
- Sensitivity to sunlight
- Mouth sores
- Hair loss

**The good news:**
With proper treatment and monitoring, most people with lupus can live full, active lives. Doctors have many medicines that help control the disease.`,
      keyTerms: [
        { term: 'autoimmune', definition: 'When your immune system attacks your own body by mistake' },
        { term: 'inflammation', definition: 'Swelling, redness, and pain - signs your body is reacting to something' },
        { term: 'flare', definition: 'A period when lupus symptoms get worse' },
        { term: 'antibodies', definition: 'Proteins made by your immune system, usually to fight germs' },
      ],
      analogies: [
        'Lupus is like friendly fire in a war - your body\'s defenders accidentally attack your own team.',
        'Think of the immune system like a security guard. In lupus, the guard is confused and attacking the people they should be protecting.',
      ],
      examples: [
        'A young woman who develops joint pain and a red rash on her face after being in the sun',
        'Someone who feels extremely tired and has swollen fingers for weeks',
        'A person whose lupus is well-controlled for months, then flares up during a stressful time',
      ],
    },
    2: {
      level: 2,
      summary: 'Systemic lupus erythematosus is a chronic autoimmune disease where the body produces antibodies against its own tissues, causing inflammation affecting multiple organ systems.',
      explanation: `SLE is the prototypical systemic autoimmune disease, affecting approximately 1 in 1,000 people. It predominantly affects women of childbearing age.

**Disease Mechanism:**
- Loss of immune tolerance to self-antigens
- Production of autoantibodies (especially anti-nuclear antibodies)
- Immune complexes deposit in tissues
- Causes inflammation and tissue damage

**Clinical Features:**

1. **Constitutional symptoms:**
   - Fatigue (most common complaint)
   - Fever
   - Weight loss
   - Malaise

2. **Skin (80-90% of patients):**
   - Malar (butterfly) rash: spares nasolabial folds
   - Discoid rash: scarring, hair loss
   - Photosensitivity
   - Oral/nasal ulcers (usually painless)
   - Hair loss (alopecia)

3. **Musculoskeletal (90%):**
   - Arthralgia and arthritis
   - Non-erosive (unlike RA)
   - Symmetrical, affects small joints
   - Jaccoud's arthropathy (reversible deformities)

4. **Renal (50%):**
   - Lupus nephritis - most serious complication
   - Proteinuria, hematuria
   - Can lead to kidney failure

5. **Cardiovascular:**
   - Pericarditis
   - Libman-Sacks endocarditis
   - Accelerated atherosclerosis

6. **Hematologic:**
   - Anemia (multiple causes)
   - Leukopenia, lymphopenia
   - Thrombocytopenia

7. **Neuropsychiatric (30-40%):**
   - Cognitive dysfunction ("lupus fog")
   - Seizures, psychosis
   - Headaches

**Diagnosis:**
- ANA (antinuclear antibody): positive in >95%
- Anti-dsDNA: specific for SLE, correlates with nephritis
- Anti-Smith (Sm): most specific for SLE
- Complement levels (C3, C4): low during active disease
- Complete blood count: cytopenias
- Urinalysis: proteinuria, casts`,
      keyTerms: [
        { term: 'ANA', definition: 'Antinuclear antibody - an antibody that attacks parts of your own cells; positive in most lupus patients', pronunciation: 'A-N-A' },
        { term: 'anti-dsDNA', definition: 'Anti-double-stranded DNA antibody; specific for lupus and indicates kidney involvement risk' },
        { term: 'malar rash', definition: 'Butterfly-shaped rash across the cheeks and nose, characteristic of SLE', pronunciation: 'MAY-lar' },
        { term: 'lupus nephritis', definition: 'Kidney inflammation caused by lupus; a serious complication requiring aggressive treatment' },
        { term: 'photosensitivity', definition: 'Skin reaction triggered by exposure to sunlight' },
      ],
      analogies: [
        'Lupus nephritis is like having garbage collectors that can\'t remove waste properly - the kidney filters get clogged with immune complexes.',
        'The ANA test is like a general alarm system - it tells you something autoimmune is happening, but not exactly what.',
      ],
    },
    3: {
      level: 3,
      summary: 'SLE is a systemic autoimmune disorder characterized by loss of tolerance to nuclear antigens, autoantibody production (ANA, anti-dsDNA, anti-Sm), immune complex deposition, and multi-organ inflammation with relapsing-remitting course.',
      explanation: `SLE exemplifies Type III hypersensitivity (immune complex-mediated) disease, though multiple immune mechanisms contribute.

**Pathophysiology:**

1. **Genetic Factors:**
   - HLA-DR2, HLA-DR3 associations
   - Complement deficiencies (C1q, C2, C4)
   - Fc receptor polymorphisms
   - IRF5, STAT4, PTPN22 variants
   - Monogenic forms: TREX1, DNASE1 mutations

2. **Environmental Triggers:**
   - UV light (induces apoptosis, neoantigen exposure)
   - Infections (EBV, molecular mimicry)
   - Drugs (hydralazine, procainamide, isoniazid)
   - Hormones (estrogen promotes B cell survival)
   - Silica exposure

3. **Immune Dysregulation:**
   - Defective clearance of apoptotic debris
   - Increased exposure to nuclear antigens
   - Loss of B and T cell tolerance
   - Plasmacytoid dendritic cell activation
   - Type I interferon signature
   - Autoantibody-mediated tissue damage
   - Immune complex deposition

**Autoantibody Profiles:**

| Antibody | Frequency | Clinical Association |
|----------|-----------|---------------------|
| ANA | >95% | Screening, not specific |
| Anti-dsDNA | 60-70% | Nephritis, disease activity |
| Anti-Sm | 20-30% | Highly specific for SLE |
| Anti-RNP | 30-40% | Mixed CTD, Raynaud's |
| Anti-Ro (SSA) | 30-40% | Neonatal lupus, Sjogren's |
| Anti-La (SSB) | 15-20% | Sjogren's overlap |
| Anti-ribosomal P | 10-20% | Neuropsychiatric lupus |
| Antiphospholipid | 30-40% | Thrombosis, pregnancy loss |

**Lupus Nephritis Classification (ISN/RPS):**
- Class I: Minimal mesangial
- Class II: Mesangial proliferative
- Class III: Focal proliferative (<50% glomeruli)
- Class IV: Diffuse proliferative (>50% glomeruli) - most severe
- Class V: Membranous
- Class VI: Advanced sclerotic

**2019 EULAR/ACR Classification Criteria:**
- Entry criterion: ANA ≥1:80
- Clinical domains: Constitutional, hematologic, neuropsychiatric, mucocutaneous, serosal, musculoskeletal, renal
- Immunologic domains: Antiphospholipid, complement, SLE-specific antibodies
- Score ≥10 points = classify as SLE

**Disease Activity Assessment:**
- SLEDAI (Systemic Lupus Erythematosus Disease Activity Index)
- BILAG (British Isles Lupus Assessment Group)
- Complement levels (C3, C4)
- Anti-dsDNA titers
- Urinalysis

**Treatment Approach:**

*Mild disease:*
- Hydroxychloroquine (baseline for all patients)
- NSAIDs for arthritis
- Topical steroids for rash

*Moderate-severe disease:*
- Systemic glucocorticoids
- Azathioprine, mycophenolate
- Methotrexate

*Severe/refractory (nephritis, CNS):*
- Pulse methylprednisolone
- Cyclophosphamide or mycophenolate induction
- Belimumab (anti-BAFF)
- Rituximab (off-label)
- Voclosporin (lupus nephritis)`,
      keyTerms: [
        { term: 'Type I interferon', definition: 'Family of cytokines (IFN-alpha, IFN-beta) overproduced in lupus, driving inflammation and autoimmunity' },
        { term: 'immune complex', definition: 'Antibody-antigen complexes that deposit in tissues and trigger complement activation' },
        { term: 'anti-Sm', definition: 'Anti-Smith antibody; most specific antibody for SLE (found almost exclusively in lupus)' },
        { term: 'SLEDAI', definition: 'Systemic Lupus Erythematosus Disease Activity Index; standardized score for disease activity' },
        { term: 'hydroxychloroquine', definition: 'Antimalarial drug that is cornerstone of SLE treatment, reduces flares and mortality' },
      ],
      clinicalNotes: 'Hydroxychloroquine should be continued in ALL SLE patients regardless of disease activity - reduces mortality, flares, and organ damage. Anti-dsDNA and complement levels help monitor disease activity. Lupus nephritis Class IV requires aggressive immunosuppression to preserve renal function.',
    },
    4: {
      level: 4,
      summary: 'SLE pathogenesis involves genetic predisposition (HLA, complement, IRF5), environmental triggers, defective apoptotic clearance, TLR/type I IFN pathway activation, polyclonal B cell activation with autoantibody production, and immune complex-mediated organ damage, informing targeted biologic therapies.',
      explanation: `**Detailed Immunopathogenesis:**

1. **Defective Apoptotic Clearance:**
   - Increased apoptosis from UV, infections, drugs
   - Impaired phagocyte clearance (C1q deficiency, MFG-E8)
   - Secondary necrosis releases nuclear antigens
   - DAMPs activate innate immunity
   - Nuclear antigens become autoantigens

2. **Innate Immunity and Type I Interferon:**

   *Plasmacytoid Dendritic Cells (pDCs):*
   - Primary source of IFN-alpha
   - Activated by immune complexes containing nucleic acids
   - TLR7 (RNA) and TLR9 (DNA) signaling
   - "IFN signature" in blood (ISG expression)

   *Neutrophils and NETosis:*
   - Release neutrophil extracellular traps (NETs)
   - NETs contain DNA, histones, antimicrobial peptides
   - Autoantigens in NETs
   - Low-density granulocytes (LDGs) in SLE

3. **B Cell Abnormalities:**
   - Defective tolerance checkpoints
   - BAFF (B cell activating factor) overexpression
   - Increased autoreactive B cells
   - Plasma cell longevity
   - Autoantibody production
   - Class-switched, affinity-matured autoantibodies

4. **T Cell Abnormalities:**
   - Th1/Th17 skewing
   - Tfh expansion (help B cells)
   - Treg dysfunction
   - T cell exhaustion markers
   - Tissue-resident memory T cells

5. **Cytokine Networks:**
   - Type I IFN: central pathogenic role
   - IL-6: B cell differentiation, acute phase
   - IL-10: B cell stimulation paradoxically
   - IL-17: nephritis, inflammation
   - TNF-alpha: variable role
   - BAFF/APRIL: B cell survival

**Specific Organ Pathology:**

*Lupus Nephritis:*
- Immune complex deposition (subendothelial, subepithelial)
- Mesangial, endocapillary, crescentic proliferation
- "Full house" immunofluorescence (IgG, IgA, IgM, C3, C1q)
- Wire loop lesions (class IV)
- Tubulointerstitial inflammation predicts outcome
- Activity and chronicity indices guide prognosis

*CNS Lupus:*
- Inflammatory (vasculitis, demyelination)
- Ischemic (antiphospholipid-related)
- Antibody-mediated (anti-NMDA receptor, anti-ribosomal P)
- Blood-brain barrier dysfunction
- Intrathecal cytokine production

*Cutaneous Lupus:*
- Interface dermatitis (basal layer damage)
- Immune complex deposition at DEJ (lupus band test)
- Acute (malar rash), subacute (SCLE), chronic (discoid)
- Photosensitivity: UV induces apoptosis, neoantigen release

**Pregnancy and SLE:**

*Complications:*
- Flares (especially postpartum)
- Preeclampsia (increased risk)
- Fetal loss, preterm birth
- Neonatal lupus (anti-Ro/La)
- Congenital heart block (anti-Ro)

*Management:*
- Plan pregnancy during remission
- Continue hydroxychloroquine
- Low-dose aspirin for preeclampsia prevention
- Azathioprine safe; mycophenolate contraindicated
- Monitor anti-Ro/La for fetal heart block

**Antiphospholipid Syndrome (Secondary APS):**
- 30-40% of SLE patients have aPL
- 10-15% develop APS
- Arterial/venous thrombosis
- Pregnancy morbidity
- Catastrophic APS
- Requires anticoagulation

**Accelerated Atherosclerosis:**
- Leading cause of late mortality
- Traditional + SLE-specific risk factors
- Inflammation drives atherogenesis
- Treat as high-risk equivalent
- Aggressive lipid management`,
      keyTerms: [
        { term: 'plasmacytoid dendritic cell', definition: 'Specialized immune cell that produces large amounts of type I interferon; key driver of SLE pathogenesis', pronunciation: 'plaz-ma-SY-toyd' },
        { term: 'BAFF', definition: 'B cell activating factor; cytokine promoting B cell survival and maturation; therapeutic target in SLE (belimumab)' },
        { term: 'wire loop lesion', definition: 'Subendothelial immune complex deposits in glomerular capillaries appearing as thickened, refractile loops on microscopy' },
        { term: 'lupus band test', definition: 'Immunofluorescence showing immunoglobulin/complement deposition at dermal-epidermal junction in lupus skin' },
        { term: 'NETosis', definition: 'Process of neutrophil death releasing DNA-containing extracellular traps that may provide autoantigens in SLE' },
      ],
      clinicalNotes: 'Type I interferon signature present in most SLE patients and correlates with disease activity. Anifrolumab (anti-IFNAR) recently approved. Lupus nephritis requires renal biopsy for classification before treatment. Belimumab is first FDA-approved biologic for SLE. Rituximab widely used off-label despite negative trials.',
    },
    5: {
      level: 5,
      summary: 'SLE is driven by genetic-epigenetic-environmental interactions leading to aberrant nucleic acid sensing, TLR7/9-pDC-IFN axis activation, breach of B/T tolerance, polyclonal autoantibody production, and immune complex deposition, with emerging precision medicine targeting IFN-alpha, BAFF, CD20, calcineurin, and JAK-STAT pathways.',
      explanation: `**Precision Medicine in SLE:**

1. **Genetic Architecture and Risk Stratification:**

   *High-Penetrance Genes (Monogenic Lupus):*
   - TREX1: DNA exonuclease, failure clears cytosolic DNA
   - DNASE1: Clears NETs, null mutations cause SLE
   - C1q deficiency: 90% develop SLE
   - SAMHD1, ACP5: Aicardi-Goutieres syndrome/SLE overlap

   *Common Variants (Polygenic Risk):*
   - HLA-DR2/DR3: MHC class II presentation
   - IRF5, IRF7: Type I IFN signaling
   - STAT4: IL-12/IFN signaling
   - BLK, BANK1: B cell signaling
   - ITGAM (CD11b): Complement receptor
   - PTPN22: T/B cell activation threshold

   *Ancestry-Specific Variants:*
   - APOL1 in African ancestry: lupus nephritis risk
   - Higher genetic burden in non-European populations
   - May explain health disparities

2. **Epigenetics and Gene Regulation:**

   *DNA Methylation:*
   - Global hypomethylation in SLE
   - IFN-regulated genes hypomethylated
   - CD40L demethylation on X chromosome (female bias)
   - Drug-induced lupus: procainamide inhibits DNMT1

   *Histone Modifications:*
   - Altered acetylation patterns
   - H4 hyperacetylation in active disease

   *Non-coding RNA:*
   - miR-146a: negative regulator of type I IFN, decreased in SLE
   - Long non-coding RNAs in SLE pathogenesis

3. **Biomarker-Guided Therapy:**

   *Disease Activity Biomarkers:*
   - Anti-dsDNA titers (correlate with nephritis)
   - C3, C4 (consumption in active disease)
   - IFN gene signature score
   - Urinary biomarkers (NGAL, MCP-1 for nephritis)
   - Cell-free DNA

   *Treatment Response Predictors:*
   - High IFN signature: may predict anifrolumab response
   - CD19+ B cell levels: rituximab response
   - Baseline proteinuria: nephritis outcomes
   - Pharmacogenomics: TPMT for azathioprine

4. **Current and Emerging Targeted Therapies:**

   *FDA-Approved Biologics:*

   Belimumab (anti-BAFF):
   - First biologic approved for SLE
   - Reduces flares, steroid requirement
   - Added to nephritis regimen (recent approval)
   - Better response in anti-dsDNA+, low C3/C4

   Anifrolumab (anti-IFNAR):
   - Blocks type I IFN receptor
   - Approved 2021 for moderate-severe SLE
   - Benefits skin disease, serologic markers
   - Higher response in high IFN signature patients

   Voclosporin (calcineurin inhibitor):
   - Approved 2021 for lupus nephritis
   - Added to mycophenolate background
   - Improved renal response rates

   *Pipeline Therapies:*

   B cell targeting:
   - Obinutuzumab (anti-CD20, glycoengineered)
   - Daratumumab (anti-CD38, plasma cells)
   - CAR-T cells targeting CD19

   T cell costimulation:
   - Abatacept (CTLA4-Ig): mixed results in nephritis

   JAK inhibitors:
   - Baricitinib, tofacitinib: blocking IFN signaling
   - Deucravacitinib (TYK2 inhibitor): Phase III

   Other targets:
   - Anti-CD40L (bleeding risk with early agents)
   - Anti-IL-12/23
   - BTK inhibitors
   - Proteasome inhibitors

5. **Lupus Nephritis Treatment Algorithm (2024):**

   *Class III/IV (Proliferative):*

   Induction:
   - Mycophenolate 2-3g/day + glucocorticoids
   - OR Low-dose cyclophosphamide (Euro-Lupus)
   - Add voclosporin or belimumab for enhanced response
   - Consider rituximab if refractory

   Maintenance:
   - Mycophenolate 1-2g/day
   - OR Azathioprine
   - Hydroxychloroquine (always)
   - Minimize glucocorticoids

   *Class V (Membranous):*
   - Mycophenolate or tacrolimus
   - Consider rituximab
   - Manage nephrotic complications

6. **Cardiovascular Risk Management:**

   *SLE as Risk Equivalent:*
   - 50x increased MI risk in young women
   - Traditional risk factors amplified
   - Disease activity contributes directly
   - Chronic steroid use harmful

   *Management Strategy:*
   - Aggressive BP control
   - Statin therapy (anti-inflammatory benefit)
   - Minimize glucocorticoids
   - Control disease activity
   - ASA for APS patients

7. **Pregnancy Planning and Management:**

   *Pre-conception:*
   - 6 months of disease quiescence
   - Discontinue teratogenic drugs (mycophenolate, cyclophosphamide)
   - Switch to lupus-compatible medications
   - Check autoantibody profile

   *Monitoring:*
   - Monthly until 20 weeks, then every 2 weeks
   - Anti-Ro+ : fetal echocardiogram 16-26 weeks
   - Urine protein, complement, anti-dsDNA monitoring

   *Medications in Pregnancy:*
   - Safe: HCQ (continue), azathioprine, tacrolimus, low-dose steroids
   - Contraindicated: MTX, mycophenolate, cyclophosphamide, leflunomide`,
      keyTerms: [
        { term: 'anifrolumab', definition: 'Monoclonal antibody blocking type I interferon receptor (IFNAR); FDA approved for SLE in 2021' },
        { term: 'voclosporin', definition: 'Novel calcineurin inhibitor approved for lupus nephritis; added to mycophenolate background therapy' },
        { term: 'IFN signature', definition: 'Gene expression pattern of interferon-stimulated genes; elevated in most SLE patients and may predict response to IFN-targeting therapies' },
        { term: 'TREX1', definition: 'Three-prime repair exonuclease 1; DNA exonuclease whose deficiency causes accumulation of cytosolic DNA and monogenic lupus' },
        { term: 'Euro-Lupus protocol', definition: 'Low-dose IV cyclophosphamide regimen (500mg q2 weeks x 6) for lupus nephritis induction; equivalent efficacy with less toxicity' },
      ],
      clinicalNotes: `**Board-Relevant Pearls:**
- SLE is prototype of Type III hypersensitivity (immune complex) disease
- ANA sensitivity >95% but not specific; anti-Sm most specific for SLE
- Anti-dsDNA correlates with nephritis activity; obtain baseline and follow
- Hydroxychloroquine reduces mortality - continue in ALL patients
- Lupus nephritis requires renal biopsy for ISN/RPS classification
- Class IV nephritis most common and severe; needs aggressive treatment
- Voclosporin + mycophenolate superior to mycophenolate alone in nephritis
- Anifrolumab approved for moderate-severe SLE; best responses in high IFN patients
- Anti-Ro antibodies: risk of neonatal lupus and congenital heart block
- Drug-induced lupus: anti-histone antibodies, usually anti-dsDNA negative
- Main causes of death: early = active disease/infection; late = cardiovascular`,
    },
  },

  media: [
    {
      id: 'sle-malar-rash',
      type: 'image',
      filename: 'sle-malar-rash.jpg',
      title: 'Malar (Butterfly) Rash',
      description: 'Classic butterfly-shaped erythematous rash across cheeks and nose, sparing nasolabial folds',
    },
    {
      id: 'sle-nephritis-histology',
      type: 'histology',
      filename: 'sle-nephritis-class-iv.jpg',
      title: 'Class IV Lupus Nephritis',
      description: 'Diffuse proliferative glomerulonephritis with wire loop lesions',
    },
    {
      id: 'sle-pathogenesis',
      type: 'diagram',
      filename: 'sle-pathogenesis-diagram.svg',
      title: 'SLE Pathogenesis',
      description: 'Diagram showing defective apoptotic clearance, IFN pathway activation, and autoantibody production',
    },
  ],
  citations: [
    {
      id: 'tsokos-2011',
      type: 'article',
      title: 'Systemic Lupus Erythematosus',
      authors: ['Tsokos GC'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMra1100359',
    },
    {
      id: 'fanouriakis-2019',
      type: 'article',
      title: '2019 update of the EULAR recommendations for the management of SLE',
      authors: ['Fanouriakis A', 'Kostopoulou M', 'Alunno A', 'et al.'],
      source: 'Annals of the Rheumatic Diseases',
      url: 'https://doi.org/10.1136/annrheumdis-2019-215089',
    },
    {
      id: 'aringer-2019',
      type: 'article',
      title: '2019 EULAR/ACR classification criteria for SLE',
      authors: ['Aringer M', 'Costenbader K', 'Daikh D', 'et al.'],
      source: 'Arthritis & Rheumatology',
      url: 'https://doi.org/10.1002/art.40930',
    },
  ],
  crossReferences: [
    { targetId: 'concept-autoimmune-serology', targetType: 'concept', relationship: 'related', label: 'Autoimmune Serology' },
    { targetId: 'condition-antiphospholipid-syndrome', targetType: 'condition', relationship: 'related', label: 'Antiphospholipid Syndrome' },
    { targetId: 'system-immune', targetType: 'system', relationship: 'parent', label: 'Immune System' },
    { targetId: 'condition-lupus-nephritis', targetType: 'condition', relationship: 'child', label: 'Lupus Nephritis' },
  ],
  tags: {
    systems: ['immune', 'musculoskeletal', 'renal', 'cardiovascular', 'dermatologic', 'nervous'],
    topics: ['rheumatology', 'autoimmune', 'nephrology', 'immunology'],
    keywords: ['SLE', 'lupus', 'autoimmune', 'ANA', 'anti-dsDNA', 'nephritis', 'malar rash'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default systemicLupusContent;
