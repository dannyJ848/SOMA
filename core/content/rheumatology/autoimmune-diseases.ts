/**
 * Autoimmune Diseases - Comprehensive Rheumatology Content
 *
 * Covers SLE, Rheumatoid Arthritis, Sjogren's Syndrome,
 * Systemic Sclerosis (Scleroderma), and Vasculitis.
 * Multi-level educational content from patient-friendly to MD-level.
 */

import { EducationalContent } from '../types';

export const autoimmuneDiseasesContent: EducationalContent = {
  id: 'rheumatology-autoimmune-diseases',
  type: 'topic',
  name: 'Autoimmune Diseases',
  nameEs: 'Enfermedades Autoinmunes',
  alternateNames: [
    'Autoimmune Rheumatic Diseases',
    'Systemic Autoimmune Diseases',
    'Connective Tissue Autoimmune Disorders',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Your immune system gets confused and attacks your own body instead of germs. This causes pain, swelling, and damage to different parts of the body.',
      explanation: `## What Are Autoimmune Diseases?

Your body has an immune system that works like a security team. Normally, it fights off germs like bacteria and viruses. In autoimmune diseases, the security team gets confused and starts attacking healthy parts of your own body.

## Common Autoimmune Diseases

### Lupus (SLE)
- The immune system attacks many parts of the body
- Causes a butterfly-shaped rash on the face
- Joint pain, tiredness, fevers
- Can affect kidneys, heart, lungs, and brain
- More common in women (9 out of 10 patients)

### Rheumatoid Arthritis (RA)
- The immune system attacks the joints
- Causes swelling, stiffness, and pain
- Usually affects both sides equally (both hands, both knees)
- Worst stiffness in the morning (lasts over an hour)
- Can damage joints permanently if untreated

### Sjogren's Syndrome
- The immune system attacks moisture-producing glands
- Causes very dry eyes and dry mouth
- Trouble swallowing dry foods
- Can affect other organs too

### Scleroderma (Systemic Sclerosis)
- The immune system causes skin and organs to harden
- Skin becomes thick and tight
- Fingers may turn white or blue in cold (Raynaud's)
- Can affect lungs, heart, kidneys, and digestive system

### Vasculitis
- The immune system attacks blood vessels
- Can affect any size blood vessel
- Causes fevers, weight loss, and fatigue
- Symptoms depend on which organs lose blood supply

## What Causes Autoimmune Diseases?

No one knows exactly, but it is probably a mix of:
- **Genetics** - runs in families
- **Environment** - infections, sunlight, chemicals
- **Hormones** - more common in women

## How Are They Treated?

- Medicines to calm down the immune system
- Anti-inflammatory medicines for pain and swelling
- Rest and healthy lifestyle
- Regular doctor visits to monitor for damage`,

      keyTerms: [
        {
          term: 'Autoimmune',
          definition: 'When your immune system mistakenly attacks your own body',
        },
        {
          term: 'Inflammation',
          definition: 'Redness, swelling, heat, and pain caused by the immune system',
        },
        {
          term: 'Lupus',
          definition: 'An autoimmune disease that can affect many parts of the body',
        },
        {
          term: 'Rheumatoid Arthritis',
          definition: 'An autoimmune disease that mainly attacks the joints',
        },
        {
          term: "Raynaud's phenomenon",
          definition: 'Fingers or toes turning white or blue in cold temperatures',
        },
      ],
      analogies: [
        'The immune system is like a guard dog that starts biting the family instead of intruders.',
        'Autoimmune diseases are like a fire alarm that goes off when there is no fire, causing the sprinklers to damage everything.',
        'Lupus is like the immune system throwing a tantrum that affects the whole house.',
      ],
      examples: [
        'A young woman develops a butterfly-shaped rash across her cheeks and nose after sun exposure',
        'A person wakes up with stiff, swollen hands every morning that take over an hour to loosen up',
        'Someone notices their eyes and mouth are always dry and they need water to swallow bread',
      ],
      patientCounselingPoints: [
        'Autoimmune diseases are not contagious - you cannot catch them from someone.',
        'Many people with autoimmune diseases live full, active lives with proper treatment.',
        'It is important to take medicines as prescribed, even when you feel well.',
        'Sun protection is very important, especially in lupus.',
        'Tell your doctor about any new symptoms - early treatment prevents damage.',
      ],
    },

    2: {
      level: 2,
      summary:
        'Autoimmune diseases are caused by autoantibodies and autoreactive immune cells that target self-antigens. They cause chronic inflammation and tissue damage in specific organs or systemically.',
      explanation: `## Autoimmune Mechanisms Overview

**Self vs. Non-Self:**
- The immune system normally distinguishes self from foreign
- In autoimmune diseases, this tolerance breaks down
- Autoantibodies (antibodies against self) are produced
- Autoreactive T cells attack own tissues

**Types of Autoimmune Diseases:**
- **Organ-specific:** Target one organ (e.g., thyroid in Hashimoto's)
- **Systemic:** Affect multiple organs (e.g., SLE, RA)

## Systemic Lupus Erythematosus (SLE)

**Key Features:**
- Young women (15-44 years), more common in Black, Hispanic, Asian populations
- Butterfly (malar) rash - spares nasolabial folds
- Photosensitivity - worsened by UV light
- Arthritis - non-erosive, symmetric
- Serositis - pleuritis, pericarditis
- Nephritis - proteinuria, hematuria (most serious organ involvement)
- Hematologic - cytopenias (low blood counts)
- Neuropsychiatric - seizures, psychosis

**Key Autoantibodies:**
- ANA (antinuclear antibody) - 95-99% sensitive, but not specific
- Anti-dsDNA - specific for SLE, correlates with disease activity
- Anti-Smith (anti-Sm) - most specific for SLE
- Anti-histone - drug-induced lupus

## Rheumatoid Arthritis (RA)

**Key Features:**
- Symmetric polyarthritis of small joints (MCPs, PIPs, wrists)
- Morning stiffness >60 minutes
- Rheumatoid nodules (subcutaneous)
- Extra-articular: lung disease, vasculitis, Felty syndrome
- Joint destruction: pannus formation erodes cartilage and bone

**Key Labs:**
- RF (Rheumatoid Factor) - 70-80% positive, not specific
- Anti-CCP (anti-cyclic citrullinated peptide) - more specific
- Elevated ESR, CRP (inflammation markers)

## Sjogren's Syndrome

**Key Features:**
- Dry eyes (keratoconjunctivitis sicca) and dry mouth (xerostomia)
- Primary (alone) or Secondary (with another autoimmune disease)
- Parotid gland enlargement
- Increased risk of B-cell lymphoma (40x risk)
- Dental caries from dry mouth

**Key Autoantibodies:**
- Anti-SSA/Ro and Anti-SSB/La
- Anti-SSA can cross placenta and cause neonatal heart block

## Systemic Sclerosis (Scleroderma)

**Two Main Types:**
- **Limited cutaneous (lcSSc):** CREST syndrome
  - Calcinosis, Raynaud's, Esophageal dysmotility, Sclerodactyly, Telangiectasia
  - Anti-centromere antibody
  - Pulmonary arterial hypertension (PAH) is main concern
- **Diffuse cutaneous (dcSSc):**
  - Widespread skin thickening, early organ involvement
  - Anti-Scl-70 (anti-topoisomerase I) antibody
  - Interstitial lung disease (ILD) and scleroderma renal crisis

## Vasculitis Overview

**By Vessel Size:**
- **Large vessel:** Giant cell arteritis (temporal), Takayasu
- **Medium vessel:** Polyarteritis nodosa (PAN), Kawasaki
- **Small vessel:** ANCA-associated (GPA, MPA, EGPA), IgA vasculitis
- **Variable vessel:** Behcet's disease

**Key Concepts:**
- ANCA (anti-neutrophil cytoplasmic antibody):
  - c-ANCA (PR3) - GPA (Granulomatosis with Polyangiitis)
  - p-ANCA (MPO) - MPA (Microscopic Polyangiitis)
- Giant cell arteritis: Age >50, headache, jaw claudication, vision loss emergency
- Kawasaki: Children, fever >5 days, coronary artery aneurysms`,

      keyTerms: [
        {
          term: 'ANA',
          definition: 'Antinuclear Antibody - a screening test for autoimmune diseases',
        },
        {
          term: 'Anti-dsDNA',
          definition: 'Antibody against double-stranded DNA, specific for lupus',
        },
        {
          term: 'Anti-CCP',
          definition:
            'Anti-cyclic citrullinated peptide antibody, specific for rheumatoid arthritis',
        },
        {
          term: 'ANCA',
          definition:
            'Anti-neutrophil cytoplasmic antibody, used to diagnose vasculitis',
        },
        {
          term: 'Pannus',
          definition:
            'Abnormal tissue growth in joints that erodes cartilage and bone in RA',
        },
        {
          term: 'Serositis',
          definition:
            'Inflammation of the lining around lungs (pleuritis) or heart (pericarditis)',
        },
      ],
      analogies: [
        'ANA is like a metal detector at the airport - it beeps a lot but does not tell you what the object is.',
        'Pannus in RA is like ivy growing over a building, slowly destroying the structure beneath.',
        'CREST syndrome is a mnemonic checklist for limited scleroderma features.',
      ],
      examples: [
        'A 28-year-old woman with malar rash, joint pain, and proteinuria - think SLE',
        'A 55-year-old woman with symmetric hand swelling and positive anti-CCP - think RA',
        'A 70-year-old with new headache and jaw pain - emergency: giant cell arteritis',
      ],
      clinicalNotes:
        'ANA is highly sensitive for SLE (95-99%) but has low specificity. A negative ANA essentially rules out SLE. Positive ANA alone does not diagnose any disease - must correlate with clinical features. Anti-CCP is more specific than RF for RA and predicts erosive disease.',
    },

    3: {
      level: 3,
      summary:
        'Autoimmune diseases involve complex immune dysregulation including ANA patterns, complement activation, immune complex deposition, and require classification criteria (ACR/EULAR) for diagnosis. DMARDs are the cornerstone of treatment.',
      explanation: `## ANA Patterns and Significance

**Immunofluorescence Patterns:**
- **Homogeneous:** Anti-dsDNA, anti-histone - SLE, drug-induced lupus
- **Speckled:** Anti-Sm, anti-RNP, anti-SSA/SSB - SLE, Sjogren's, MCTD
- **Nucleolar:** Anti-RNA polymerase III - systemic sclerosis (diffuse)
- **Centromere:** Anti-centromere - limited systemic sclerosis (CREST)
- **Cytoplasmic:** Anti-Jo-1 - dermatomyositis/polymyositis (antisynthetase)

**ANA Titer Significance:**
- 1:40 - Low titer, common in healthy individuals (up to 30%)
- 1:80 - Borderline, may be significant in context
- 1:160+ - More likely clinically significant
- 1:640+ - High titer, strongly suggests autoimmune disease

## Complement System in Autoimmune Disease

**Complement Activation:**
- Classical pathway activated by immune complexes (SLE)
- C3 and C4 levels decrease during active SLE (consumed)
- Low C3/C4 = active disease, useful for monitoring
- Hereditary complement deficiencies (C1q, C2, C4) predispose to SLE

**Immune Complex Deposition:**
- Circulating immune complexes deposit in tissues
- Kidneys (lupus nephritis), skin, joints, blood vessels
- Activate complement, recruit neutrophils
- Type III hypersensitivity reaction

## ACR/EULAR Classification Criteria

### SLE (2019 ACR/EULAR Criteria)
**Entry criterion:** ANA >= 1:80
**Domains (weighted scoring):**
- Constitutional: Fever (2 pts)
- Hematologic: Leukopenia (3), thrombocytopenia (4), autoimmune hemolysis (4)
- Neuropsychiatric: Delirium (2), psychosis (3), seizure (5)
- Mucocutaneous: Alopecia (2), oral ulcers (2), acute cutaneous (6), subacute or discoid (4)
- Serosal: Pleural/pericardial effusion (5), acute pericarditis (6)
- Musculoskeletal: Joint involvement (6)
- Renal: Proteinuria >0.5g/24h (4), Class II/V nephritis (8), Class III/IV nephritis (10)
- Antiphospholipid: Anti-cardiolipin, anti-beta2GP1, lupus anticoagulant (2)
- Complement: Low C3 OR low C4 (3), Low C3 AND low C4 (4)
- SLE-specific antibodies: Anti-dsDNA OR anti-Sm (6)
**Classification: >= 10 points**

### RA (2010 ACR/EULAR Criteria)
- Joint involvement (0-5 points)
- Serology: RF/Anti-CCP (0-3 points)
- Acute phase reactants: ESR/CRP (0-1 point)
- Duration >= 6 weeks (0-1 point)
- **Score >= 6/10 = RA**

## DMARD Therapy

### Conventional Synthetic DMARDs (csDMARDs)

**Methotrexate (MTX):**
- First-line for RA, also used in SLE, vasculitis
- Mechanism: Folate antagonist, inhibits dihydrofolate reductase
- Also increases adenosine (anti-inflammatory)
- Dose: 7.5-25 mg weekly (oral or SC)
- Must supplement with folic acid 1mg daily
- Monitor: CBC, LFTs, creatinine
- Contraindicated in pregnancy (teratogenic), liver disease, significant CKD

**Hydroxychloroquine (HCQ):**
- Foundation of SLE treatment (all patients should be on it)
- Reduces flares, thrombosis risk, organ damage, mortality
- Also used in RA, Sjogren's
- Mechanism: Interferes with antigen processing, TLR signaling
- Retinal toxicity with long-term use (annual eye exams after 5 years)
- Safe in pregnancy

**Sulfasalazine (SSZ):**
- Used in RA, seronegative spondyloarthropathies
- Monitor CBC and LFTs

**Leflunomide:**
- Pyrimidine synthesis inhibitor
- Alternative to MTX in RA
- Teratogenic (requires washout with cholestyramine)

### Glucocorticoids
- Bridge therapy while waiting for DMARDs to work
- Prednisone, methylprednisolone, dexamethasone
- Rapid anti-inflammatory effect
- Long-term toxicity: osteoporosis, diabetes, infections, cataracts, AVN
- Goal: Minimize dose and duration (prednisone <= 7.5mg/day if needed)

### Immunosuppressants
- **Azathioprine:** Maintenance therapy for lupus nephritis
- **Mycophenolate mofetil (MMF):** Induction/maintenance for lupus nephritis
- **Cyclophosphamide:** Severe organ-threatening disease (nephritis, vasculitis)
  - Euro-Lupus protocol: Lower dose IV, similar efficacy, less toxicity`,

      keyTerms: [
        {
          term: 'DMARD',
          definition:
            'Disease-Modifying Anti-Rheumatic Drug - slows or stops disease progression',
        },
        {
          term: 'ANA pattern',
          definition:
            'The staining pattern seen on immunofluorescence that suggests specific antibodies',
        },
        {
          term: 'Complement',
          definition:
            'A group of blood proteins that help fight infection; consumed in active SLE',
        },
        {
          term: 'Immune complex',
          definition:
            'Antibody-antigen clusters that deposit in tissues causing inflammation',
        },
        {
          term: 'Methotrexate',
          definition:
            'First-line DMARD for rheumatoid arthritis; a folate antagonist given weekly',
        },
        {
          term: 'Hydroxychloroquine',
          definition:
            'Anti-malarial drug used as a foundation treatment for SLE; reduces flares and mortality',
        },
        {
          term: 'Type III hypersensitivity',
          definition:
            'Immune reaction caused by immune complex deposition in tissues',
        },
      ],
      analogies: [
        'ANA patterns are like fingerprints - each pattern points to a different suspect antibody.',
        'Complement being consumed in active lupus is like fire extinguishers being used up during a fire.',
        'Methotrexate works by cutting off the supply lines that immune cells need to multiply.',
      ],
      examples: [
        'Patient with homogeneous ANA pattern, low C3/C4, and anti-dsDNA positive - active SLE',
        'RA patient started on methotrexate 15mg weekly with folic acid supplementation',
        'SLE patient on hydroxychloroquine has annual retinal screening after 5 years',
      ],
      clinicalNotes:
        'The 2019 ACR/EULAR SLE criteria have 96% sensitivity and 93% specificity. ANA >= 1:80 is the entry criterion. Classification criteria are for research, not clinical diagnosis - clinicians can diagnose SLE before criteria are met. Methotrexate takes 6-12 weeks for full effect - bridge with low-dose steroids. Always check pregnancy status before starting MTX or leflunomide.',
    },

    4: {
      level: 4,
      summary:
        'Autoimmune diseases involve HLA associations, Th17/Treg imbalances, germinal center dysregulation in SLE, and aberrant JAK-STAT signaling. Biologics targeting TNF, IL-6, and B cells have transformed management.',
      explanation: `## HLA Associations in Autoimmune Disease

**Major Histocompatibility Complex (MHC) and Disease:**
- HLA molecules present antigens to T cells
- Specific HLA alleles increase disease risk but are not diagnostic

**Key Associations:**
- **RA:** HLA-DR4 (DRB1*04:01) - "shared epitope" in the third hypervariable region
  - Shared epitope predicts erosive disease and anti-CCP positivity
  - HLA-DRB1*04:01, *04:04, *01:01 all share the QKRAA sequence
- **SLE:** HLA-DR2, HLA-DR3
  - Also: C2 deficiency, C4A null allele, IRF5, STAT4 polymorphisms
- **Ankylosing Spondylitis:** HLA-B27 (>90% of cases)
- **Behcet's:** HLA-B51
- **Type 1 DM:** HLA-DR3/DR4

## Th17/Treg Imbalance

**T Helper 17 (Th17) Cells:**
- Produce IL-17A, IL-17F, IL-22, IL-21
- Differentiate under IL-6 + TGF-beta (with IL-23 stabilization)
- Promote neutrophil recruitment, tissue inflammation
- Elevated in RA, SLE, psoriatic arthritis, ankylosing spondylitis

**Regulatory T Cells (Treg):**
- Express FoxP3 transcription factor, CD25
- Produce IL-10, TGF-beta (immunosuppressive)
- Maintain peripheral tolerance
- Defective in number or function in autoimmune diseases

**The Balance:**
- Healthy: Treg function keeps autoimmunity in check
- Autoimmune: Th17 expansion and/or Treg dysfunction
- IL-6 is a critical switch: Promotes Th17 over Treg differentiation
- This is why IL-6 inhibition (tocilizumab) is effective in RA

## Germinal Center Biology in SLE

**Normal Germinal Center (GC):**
- Sites in lymph nodes for B cell maturation
- Somatic hypermutation and affinity maturation
- Class switching (IgM to IgG)
- Selection: High-affinity B cells survive, low-affinity undergo apoptosis

**Dysregulation in SLE:**
- Defective clearance of apoptotic debris exposes nuclear antigens
- Autoreactive B cells escape negative selection
- Follicular helper T cells (Tfh) are expanded in SLE
- BAFF/BLyS (B cell activating factor) overexpression promotes B cell survival
- Extrafollicular B cell activation (short-lived plasmablasts producing autoantibodies)
- Plasmablast expansion correlates with disease activity
- Long-lived plasma cells in bone marrow maintain autoantibody production

**Interferon Pathway in SLE:**
- Type I IFN signature present in 50-80% of SLE patients
- Plasmacytoid dendritic cells (pDCs) produce IFN-alpha
- IFN promotes: Monocyte differentiation to DCs, B cell activation, T cell survival
- Anifrolumab (anti-IFNAR) targets this pathway

## JAK-STAT Signaling in Autoimmunity

**The Pathway:**
- Cytokine binds receptor -> JAK phosphorylation -> STAT activation -> gene transcription
- JAK family: JAK1, JAK2, JAK3, TYK2
- Different cytokines use different JAK pairs:
  - IL-6: JAK1/JAK2/TYK2 -> STAT3
  - IFN-alpha: JAK1/TYK2 -> STAT1/STAT2
  - IL-2/IL-15: JAK1/JAK3 -> STAT5
  - IL-12/IL-23: JAK2/TYK2 -> STAT4

**Relevance to Autoimmunity:**
- JAK-STAT mediates signaling for many pro-inflammatory cytokines
- STAT4 polymorphisms associated with SLE and RA
- JAK inhibitors (JAKi) block multiple cytokine pathways simultaneously

## Biologic Mechanisms of Action

### TNF Inhibitors (TNF-i)
- **Agents:** Adalimumab, etanercept, infliximab, certolizumab, golimumab
- TNF-alpha is central to RA synovial inflammation
- Produced by macrophages, T cells in the synovium
- TNF-i: Reduces synovitis, prevents joint erosion
- Risks: Infections (TB reactivation - screen before starting), lymphoma, demyelination

### IL-6 Inhibitors (IL-6i)
- **Agents:** Tocilizumab (anti-IL-6R), sarilumab (anti-IL-6R)
- IL-6 drives: Acute phase response (CRP, ESR), Th17 differentiation, B cell activation
- Tocilizumab normalizes CRP (cannot use CRP to monitor infection on IL-6i)
- Used in RA, giant cell arteritis, cytokine release syndrome

### B Cell Depletion
- **Rituximab:** Anti-CD20 monoclonal antibody
- Depletes mature B cells (spares stem cells and plasma cells)
- Used in: RA (after TNF-i failure), ANCA vasculitis (GPA, MPA), SLE (off-label)
- Repopulation takes 6-12 months
- Risk: Hypogammaglobulinemia, PML (rare), infusion reactions

### T Cell Co-stimulation Blockade
- **Abatacept:** CTLA-4-Ig fusion protein
- Blocks CD80/CD86-CD28 co-stimulation
- Prevents T cell activation without depleting T cells
- Used in RA, may be preferred in patients with COPD (lower infection risk)

### IL-17 Inhibitors
- **Secukinumab, ixekizumab:** Anti-IL-17A
- Used in psoriatic arthritis, ankylosing spondylitis
- NOT effective in RA (surprising given Th17 biology)
- Risk: Candida infections (IL-17 important for mucosal defense)

### Anti-BLyS (BAFF)
- **Belimumab:** Anti-BAFF/BLyS
- First biologic approved for SLE (2011)
- Reduces B cell survival and autoantibody production
- Reduces flares, steroid requirement
- Also approved for lupus nephritis (BLISS-LN trial)`,

      keyTerms: [
        {
          term: 'HLA',
          definition:
            'Human Leukocyte Antigen - cell surface molecules that present antigens; specific alleles increase autoimmune disease risk',
        },
        {
          term: 'Shared epitope',
          definition:
            'A conserved amino acid sequence in HLA-DRB1 alleles that increases RA risk and predicts erosive disease',
        },
        {
          term: 'Th17',
          definition:
            'Pro-inflammatory T helper cells producing IL-17 that drive autoimmune tissue damage',
        },
        {
          term: 'Treg',
          definition:
            'Regulatory T cells expressing FoxP3 that maintain immune tolerance and suppress autoimmunity',
        },
        {
          term: 'JAK-STAT',
          definition:
            'Intracellular signaling pathway used by many cytokine receptors; target of JAK inhibitors',
        },
        {
          term: 'BAFF/BLyS',
          definition:
            'B cell activating factor that promotes B cell survival; overexpressed in SLE and targeted by belimumab',
        },
        {
          term: 'Germinal center',
          definition:
            'Lymph node structures where B cells mature and produce high-affinity antibodies; dysregulated in SLE',
        },
        {
          term: 'Type I IFN signature',
          definition:
            'Overexpression of interferon-stimulated genes found in 50-80% of SLE patients, driving disease activity',
        },
      ],
      analogies: [
        'The shared epitope in RA is like a specific lock shape that makes it easier for autoantigens to trigger an immune response.',
        'Th17/Treg balance is like a seesaw - when the inflammatory side goes up and the regulatory side goes down, autoimmune disease results.',
        'BAFF in SLE is like giving survival rations to rogue B cells that should have been eliminated.',
      ],
      examples: [
        'RA patient with shared epitope HLA-DRB1*04:01 and anti-CCP positivity has high risk of erosive disease',
        'SLE patient with elevated IFN signature started on anifrolumab',
        'RA patient who failed methotrexate started on tocilizumab - CRP can no longer be used to detect infection',
      ],
      clinicalNotes:
        'TNF inhibitors require TB screening (PPD or IGRA) before initiation. Hepatitis B must be screened before rituximab (risk of reactivation). IL-6 inhibitors suppress CRP - monitor infections by clinical signs, not lab markers. JAK inhibitors carry boxed warnings for serious infections, malignancy, MACE, and thrombosis (ORAL Surveillance trial). Biologic DMARDs should not be combined with each other due to additive immunosuppression risk.',
    },

    5: {
      level: 5,
      summary:
        'Current frontiers include targeted synthetic DMARDs (JAK inhibitors, TYK2 inhibitors), biosimilar adoption, treat-to-target strategies, lupus nephritis advances (BLISS-LN, AURORA), and CAR-T cell therapy for refractory SLE.',
      explanation: `## Targeted Synthetic DMARDs (tsDMARDs)

### JAK Inhibitors (JAKi) in Rheumatology
**Approved Agents:**
- **Tofacitinib (Xeljanz):** JAK1/JAK3 preferential
  - RA, PsA, ulcerative colitis
  - ORAL Surveillance: Higher rates of MACE, malignancy, VTE vs TNF-i in RA patients age >= 50 with CV risk factors
  - FDA boxed warning extended to all JAKi (class effect, though trial only studied tofacitinib)
- **Baricitinib (Olumiant):** JAK1/JAK2 preferential
  - RA; also used in COVID-19 (anti-inflammatory + antiviral)
- **Upadacitinib (Rinvoq):** JAK1 selective
  - RA, PsA, ankylosing spondylitis, atopic dermatitis, UC, Crohn's
  - SELECT trials: Superior to adalimumab in RA (SELECT-COMPARE)
  - Higher selectivity may reduce off-target effects

**Emerging JAK/TYK2 Inhibitors:**
- **Deucravacitinib:** TYK2 allosteric inhibitor (binds pseudokinase domain)
  - Approved for psoriasis, trials in SLE and PsA
  - TYK2 mediates IL-12, IL-23, and type I IFN signaling
  - More selective than JAK1/2/3 inhibitors - potentially fewer safety concerns
  - POETYK SLE trials ongoing

### Positioning of JAKi:
- ACR 2022 RA guidelines: Conditionally recommend TNF-i, IL-6i, or abatacept over JAKi as first biologic/tsDMARD
- JAKi preferred when: Oral route desired, injection aversion, rapid onset needed
- Must discuss CV, malignancy, VTE risks with patient (shared decision making)

## Biosimilars in Rheumatology

**Current Landscape:**
- Multiple biosimilars for: Infliximab, adalimumab, etanercept, rituximab
- Cost savings 15-40% vs reference product
- Identical efficacy and safety demonstrated in switching studies (NOR-SWITCH, etc.)

**Key Principles:**
- Biosimilar is NOT a generic (biologic complexity)
- Must demonstrate analytical similarity, PK equivalence, clinical similarity
- FDA: No meaningful clinical difference from reference product
- Interchangeable biosimilars: Can be substituted by pharmacist without prescriber approval
- Non-medical switching: Payer-driven, generally supported by evidence

**Barriers to Adoption:**
- Nocebo effect (patients attribute new symptoms to switch)
- Prescriber unfamiliarity
- Patent thickets delaying entry
- Insurance formulary complexity

## Treat-to-Target (T2T) Strategies

### RA Treat-to-Target:
- Target: Remission (DAS28 < 2.6, CDAI <= 2.8, Boolean remission)
- If remission not feasible: Low disease activity (DAS28 < 3.2)
- Assess every 1-3 months; adjust if target not reached within 3-6 months
- TICORA, CAMERA, and TEAR trials support T2T approach
- Reduces radiographic progression and improves functional outcomes

### SLE Treat-to-Target:
- Emerging concept (less evidence than RA)
- Target: Lupus Low Disease Activity State (LLDAS) or remission
- LLDAS: SLEDAI-2K <= 4 (no major organ activity), PGA <= 1, prednisone <= 7.5mg
- Remission: SLEDAI-2K = 0, PGA < 0.5, prednisone <= 5mg, stable immunosuppressant
- Sustained LLDAS reduces damage accrual (Asia-Pacific Lupus Collaboration data)

## Lupus Nephritis: Recent Trial Data

### BLISS-LN Trial (2020):
- Belimumab + standard therapy (MMF or cyclophosphamide-azathioprine)
- Primary endpoint: Primary Efficacy Renal Response (PERR) at week 104
- Belimumab: 43% vs placebo: 32% (p=0.03)
- Complete renal response: 30% vs 20%
- Led to FDA approval of belimumab for lupus nephritis

### AURORA Trial (2020):
- Voclosporin (novel calcineurin inhibitor) + MMF + low-dose steroids
- Complete renal response at week 52: 41% vs 23% (p<0.001)
- Faster response (as early as week 24)
- Voclosporin approved for lupus nephritis (2021)
- Notable: Protocol mandated rapid steroid taper (important paradigm shift)

### Current Lupus Nephritis Management:
- Class III/IV: Induction with MMF or low-dose IV cyclophosphamide (Euro-Lupus)
  - Add belimumab or voclosporin for enhanced response
  - Maintenance: MMF or azathioprine
- Class V (membranous): MMF-based induction
- HCQ in ALL patients (reduces flares, nephritis recurrence, mortality)
- Steroid minimization: Rapid taper to <= 5-7.5mg prednisone
- Repeat biopsy if inadequate response at 12 months

## CAR-T Cell Therapy for Refractory SLE

**Breakthrough Development:**
- CD19 CAR-T cells first reported in refractory SLE (Mougiakakos et al., NEJM 2021)
- Erlangen group: 5 initial patients with refractory SLE, all achieved drug-free remission
- Anti-dsDNA antibodies became undetectable, complement normalized
- B cells repopulated after CAR-T but autoimmune B cells did not return

**Mechanism:**
- CD19-targeted CAR-T cells deplete all CD19+ B cells (more complete than rituximab)
- Eliminates CD19+ plasmablasts and short-lived plasma cells (rituximab targets CD20, which is absent on these)
- Allows immune "reset" - reconstituted B cells are non-autoreactive
- Deeper depletion than anti-CD20 therapy explains superior efficacy

**Current Evidence (2024-2025):**
- Expanded case series: >20 patients with SLE, also idiopathic inflammatory myopathy, systemic sclerosis
- Drug-free remission sustained >2 years in some patients
- CASTLE study and RESET-SLE trial enrolling
- Safety: Cytokine release syndrome (usually mild), cytopenias, infection risk during aplasia
- No severe CRS or neurotoxicity reported (unlike oncology CAR-T)

**Limitations and Future Directions:**
- Autologous CAR-T: Complex, expensive manufacturing (~$400K per patient)
- Allogeneic (off-the-shelf) CAR-T under development (YTB323, Descartes-08)
- CD19/BCMA dual-targeting for long-lived plasma cells
- CAR-T vs. CD19 bispecific antibodies (blinatumomab) being explored as less intensive alternative
- Regulatory pathway: Breakthrough therapy designation likely

## Emerging Therapies Across Autoimmune Diseases

**Anti-CD38 (Daratumumab):**
- Targets long-lived plasma cells (resistant to rituximab)
- Case reports in refractory SLE with anti-phospholipid syndrome
- Rationale: Depletes autoantibody-producing plasma cells

**Anti-IFNAR (Anifrolumab):**
- Approved for SLE (TULIP-1, TULIP-2 trials)
- Blocks type I IFN receptor
- Best response in IFN-high patients
- TULIP-2: 47.8% vs 31.5% BICLA response at week 52

**Anti-IL-17 in Spondyloarthritis:**
- Secukinumab/ixekizumab for ankylosing spondylitis, psoriatic arthritis
- Bimekizumab (anti-IL-17A/F): Dual cytokine blockade, promising in PsA/axSpA

**Telitacicept:**
- Dual BAFF/APRIL inhibitor (vs belimumab which targets BAFF only)
- More complete B cell depletion
- Phase 3 trials in SLE (positive results reported)

**Obinutuzumab (anti-CD20, type II):**
- More potent B cell depletion than rituximab
- NOBILITY trial: Improved complete renal response in lupus nephritis at week 76`,

      keyTerms: [
        {
          term: 'tsDMARD',
          definition:
            'Targeted synthetic DMARD (e.g., JAK inhibitors) - small molecules that block specific intracellular pathways',
        },
        {
          term: 'Biosimilar',
          definition:
            'A biologic product highly similar to an approved reference biologic with no clinically meaningful differences',
        },
        {
          term: 'Treat-to-target',
          definition:
            'Strategy of adjusting treatment to achieve a predefined disease activity target (remission or low disease activity)',
        },
        {
          term: 'LLDAS',
          definition:
            'Lupus Low Disease Activity State - a composite target for SLE management associated with reduced damage',
        },
        {
          term: 'Voclosporin',
          definition:
            'Novel calcineurin inhibitor approved for lupus nephritis based on the AURORA trial',
        },
        {
          term: 'CAR-T',
          definition:
            'Chimeric Antigen Receptor T cell therapy - engineered T cells that target specific antigens, showing breakthrough results in refractory SLE',
        },
        {
          term: 'ORAL Surveillance',
          definition:
            'Post-marketing safety trial of tofacitinib showing increased MACE, malignancy, and VTE risk vs TNF-i in high-risk RA patients',
        },
        {
          term: 'Anifrolumab',
          definition:
            'Anti-type I interferon receptor antibody approved for SLE based on TULIP trials',
        },
      ],
      analogies: [
        'CAR-T for SLE is like a targeted demolition of the rogue B cell factory, allowing it to rebuild without the defective assembly lines.',
        'JAK inhibitors are like cutting power to the internal wiring that transmits inflammatory signals inside the cell.',
        'Biosimilars are like high-fidelity replicas of biologic drugs - same blueprint, same function, different manufacturer.',
      ],
      examples: [
        'Young woman with refractory SLE nephritis achieves drug-free remission after CD19 CAR-T cell therapy',
        'RA patient on tofacitinib counseled about MACE/VTE risk per ORAL Surveillance data',
        'Lupus nephritis patient started on voclosporin + MMF with rapid steroid taper per AURORA protocol',
        'SLE patient switched from adalimumab reference to biosimilar with NOR-SWITCH counseling',
      ],
      clinicalNotes:
        'JAK inhibitor safety: ORAL Surveillance compared tofacitinib to TNF-i in RA patients >= 50 with >= 1 CV risk factor. Results showed increased MACE, malignancy, VTE, all-cause mortality, and serious infections with tofacitinib. FDA applied boxed warning to ALL JAKi (class labeling). However, absolute risk increases were small and the population was enriched for risk. For lupus nephritis, both belimumab (BLISS-LN) and voclosporin (AURORA) represent paradigm shifts. CAR-T for SLE is still early but remarkable - drug-free remission in previously refractory patients is unprecedented. Cost, access, and scalability remain barriers. Anti-CD38 and dual BAFF/APRIL inhibition are exciting future directions.',
    },
  },

  media: [],
  citations: [
    {
      id: 'acr-eular-sle-2019',
      type: 'article',
      title: '2019 European League Against Rheumatism/American College of Rheumatology Classification Criteria for Systemic Lupus Erythematosus',
      authors: ['Aringer M', 'Costenbader K', 'Daikh D', 'et al.'],
      source: 'Arthritis & Rheumatology',
      url: 'https://doi.org/10.1002/art.40930',
      license: 'Published',
    },
    {
      id: 'bliss-ln-2020',
      type: 'article',
      title: 'Efficacy and Safety of Belimumab in Patients with Active Lupus Nephritis (BLISS-LN)',
      authors: ['Furie R', 'Rovin BH', 'Houssiau F', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa2001180',
      license: 'Published',
    },
    {
      id: 'aurora-2020',
      type: 'article',
      title: 'Voclosporin versus Placebo for Lupus Nephritis (AURORA 1)',
      authors: ['Rovin BH', 'Teng YKO', 'Ginzler EM', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa2118542',
      license: 'Published',
    },
    {
      id: 'cart-sle-2021',
      type: 'article',
      title: 'CD19-Targeted CAR T Cells in Refractory Systemic Lupus Erythematosus',
      authors: ['Mougiakakos D', 'Kronke G', 'Volkl S', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa2110855',
      license: 'Published',
    },
    {
      id: 'oral-surveillance-2022',
      type: 'article',
      title: 'Cardiovascular and Cancer Risk with Tofacitinib in Rheumatoid Arthritis (ORAL Surveillance)',
      authors: ['Ytterberg SR', 'Bhatt DL', 'Mikuls TR', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa2109927',
      license: 'Published',
    },
  ],
  crossReferences: [
    {
      targetId: 'rheumatology-crystal-arthropathies',
      targetType: 'topic',
      relationship: 'sibling',
      label: 'Crystal Arthropathies',
    },
    {
      targetId: 'rheumatology-connective-tissue-disorders',
      targetType: 'topic',
      relationship: 'related',
      label: 'Connective Tissue Disorders',
    },
    {
      targetId: 'rheumatology-gout',
      targetType: 'topic',
      relationship: 'see-also',
      label: 'Gout',
    },
  ],
  tags: {
    topics: [
      'rheumatology',
      'autoimmune',
      'lupus',
      'SLE',
      'rheumatoid-arthritis',
      'sjogrens',
      'scleroderma',
      'vasculitis',
      'DMARDs',
      'biologics',
    ],
    systems: ['musculoskeletal', 'immune'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['rheumatology', 'medicine'],
    },
  },

  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
};
