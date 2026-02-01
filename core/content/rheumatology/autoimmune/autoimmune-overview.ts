/**
 * Autoimmune Disease Overview
 *
 * Comprehensive overview of autoimmune disease mechanisms,
 * major autoimmune rheumatic conditions, and autoantibody testing.
 */

import { EducationalContent } from '../../types';

export const autoimmuneOverviewContent: EducationalContent = {
  id: 'rheumatology-autoimmune-overview',
  type: 'topic',
  name: 'Autoimmune Disease Overview',
  alternateNames: ['Autoimmunity', 'Autoimmune Rheumatic Diseases'],

  levels: {
    1: {
      level: 1,
      summary: "Autoimmune diseases happen when the body's defense system mistakenly attacks its own healthy tissues. This causes inflammation and damage in joints, skin, kidneys, and other organs.",
      explanation: `## What Are Autoimmune Diseases?

Your immune system is like a security guard that protects your body from germs. In autoimmune diseases, this guard gets confused and attacks your own healthy cells instead.

## Common Autoimmune Conditions

**Rheumatoid Arthritis (RA):**
- Attacks joint lining, causing pain and swelling in hands and wrists
- Affects both sides equally; can cause lasting joint damage

**Lupus (SLE):**
- Can affect almost any part of the body
- Butterfly-shaped rash on the face, joint pain, fatigue
- Flares up and calms down in cycles

**Sjogren's Syndrome:**
- Attacks glands that make tears and saliva
- Causes very dry eyes and dry mouth

**Ankylosing Spondylitis:**
- Affects the spine and lower back with stiffness and pain
- Can cause spinal bones to fuse together over time

**Psoriatic Arthritis:**
- Joint inflammation linked to the skin condition psoriasis
- Causes swollen joints and scaly skin patches

**Antiphospholipid Syndrome (APS):**
- Makes blood clot too easily; can cause pregnancy problems

## How Doctors Test for Autoimmune Diseases

- ANA (antinuclear antibody): Screens for many autoimmune diseases
- RF (rheumatoid factor): Helps diagnose rheumatoid arthritis
- Other specific tests depending on symptoms`,

      keyTerms: [
        { term: 'Autoimmune', definition: 'When the immune system attacks the body by mistake' },
        { term: 'Inflammation', definition: 'Redness, swelling, heat, and pain caused by the immune system' },
        { term: 'Flare', definition: 'A period when symptoms get worse' },
        { term: 'Antibody', definition: 'A protein made by the immune system to fight invaders' },
        { term: 'ANA', definition: 'A blood test that checks for autoimmune diseases' },
      ],
      analogies: [
        'An autoimmune disease is like a security system that starts sounding the alarm at the homeowners instead of burglars.',
        'A lupus flare is like a storm that comes and goes, with calm periods in between.',
      ],
      examples: [
        'A woman with painful, swollen hands on both sides may have rheumatoid arthritis.',
        'A young woman with a butterfly rash on her face and joint pain may have lupus.',
        'Someone with very dry eyes and mouth who has trouble swallowing may have Sjogren syndrome.',
      ],
      patientCounselingPoints: [
        'Autoimmune diseases are not contagious.',
        'Symptoms may come and go in flares.',
        'Early treatment can prevent joint and organ damage.',
        'Regular follow-up with your doctor is important.',
      ],
    },

    2: {
      level: 2,
      summary: 'Autoimmune diseases result from loss of immune tolerance, where the immune system generates antibodies and immune cells targeting self-antigens. Major conditions include RA, SLE, Sjogren syndrome, spondyloarthropathies, and APS.',
      explanation: `## Mechanisms of Autoimmunity

**Normal Immune Tolerance:**
- Central tolerance: Self-reactive immune cells deleted during development
- Peripheral tolerance: Regulatory T cells suppress remaining self-reactive cells
- Autoimmunity occurs when these checkpoints fail

**Key Concepts:**
- Molecular mimicry: Infections trigger immune responses that cross-react with self
- Genetic predisposition: HLA genes strongly influence risk
- Environmental triggers: Infections, UV light, smoking, hormones

## Rheumatoid Arthritis (RA)

- Symmetric polyarthritis of small joints (MCP, PIP, wrists)
- Morning stiffness lasting >1 hour
- Pannus formation erodes cartilage and bone
- Extra-articular: Rheumatoid nodules, lung disease, vasculitis
- Labs: RF positive (70-80%), anti-CCP positive (more specific)

## Systemic Lupus Erythematosus (SLE)

- Multisystem autoimmune disease, primarily affects young women
- Malar (butterfly) rash, discoid rash, photosensitivity
- Arthritis, serositis (pleurisy, pericarditis)
- Renal involvement (lupus nephritis) is a major concern
- Labs: ANA (>95% sensitive), anti-dsDNA (specific, tracks disease activity)

## Sjogren Syndrome

- Lymphocytic infiltration of exocrine glands
- Sicca symptoms: Dry eyes (keratoconjunctivitis sicca), dry mouth (xerostomia)
- Can be primary or secondary (with RA or SLE)
- Labs: Anti-SSA/Ro and anti-SSB/La antibodies
- Increased risk of B-cell lymphoma

## Ankylosing Spondylitis

- Chronic inflammatory disease of the axial skeleton
- Sacroiliitis is the hallmark finding
- HLA-B27 strongly associated (>90% of patients)
- Enthesitis (inflammation where tendons attach to bone)
- Can cause anterior uveitis, aortitis

## Psoriatic Arthritis

- Inflammatory arthritis associated with psoriasis
- Patterns: Asymmetric oligoarthritis, DIP-predominant, spondylitis
- Dactylitis (sausage digits) and nail pitting
- RF negative (seronegative spondyloarthropathy)

## Antiphospholipid Syndrome (APS)

- Autoantibodies against phospholipid-binding proteins
- Arterial and venous thrombosis
- Pregnancy morbidity (recurrent miscarriage, preeclampsia)
- Labs: Lupus anticoagulant, anticardiolipin, anti-beta2 glycoprotein I

## Autoantibody Testing

| Test | Associated Disease |
|------|-------------------|
| ANA | SLE, many autoimmune diseases |
| Anti-dsDNA | SLE (specific) |
| Anti-Smith | SLE (highly specific) |
| RF | RA (sensitive but not specific) |
| Anti-CCP | RA (more specific than RF) |
| Anti-SSA/Ro | Sjogren, SLE |
| Anti-SSB/La | Sjogren |
| HLA-B27 | Ankylosing spondylitis |`,

      keyTerms: [
        { term: 'Immune tolerance', definition: 'The ability of the immune system to not attack self-tissues' },
        { term: 'Molecular mimicry', definition: 'When an infection looks similar to self-tissue, triggering autoimmunity' },
        { term: 'Pannus', definition: 'Abnormal tissue growth in joints in RA that destroys cartilage' },
        { term: 'Sicca symptoms', definition: 'Dryness of eyes and mouth seen in Sjogren syndrome' },
        { term: 'Sacroiliitis', definition: 'Inflammation of the sacroiliac joint in the lower back' },
        { term: 'Dactylitis', definition: 'Swelling of an entire finger or toe (sausage digit)' },
      ],
      analogies: [
        'Molecular mimicry is like a case of mistaken identity where the immune system confuses self for a foreign invader.',
        'Pannus in RA is like ivy growing over a wall, slowly destroying it from the outside.',
      ],
      examples: [
        'A 35-year-old woman with symmetric hand swelling and positive anti-CCP likely has RA.',
        'A 25-year-old woman with malar rash, joint pain, and positive ANA/anti-dsDNA likely has SLE.',
        'A 22-year-old man with chronic low back pain improving with exercise and HLA-B27 positive likely has ankylosing spondylitis.',
      ],
      clinicalNotes: 'ANA is very sensitive for SLE but not specific. Many healthy people (up to 15%) have a low-titer positive ANA. Always interpret in clinical context. Anti-dsDNA and anti-Smith are more specific for SLE.',
    },

    3: {
      level: 3,
      summary: 'Autoimmune rheumatic diseases involve complex interplay of genetic susceptibility (HLA associations), environmental triggers, and immune dysregulation. Diagnosis relies on clinical criteria, autoantibody profiles, and imaging. Treatment targets inflammation and immune modulation.',
      explanation: `## Immunopathogenesis

**Genetic Factors:**
- HLA-DR4: Rheumatoid arthritis (shared epitope hypothesis)
- HLA-DR2/DR3: SLE
- HLA-B27: Ankylosing spondylitis, reactive arthritis
- Non-HLA genes: PTPN22, STAT4, IRF5, CTLA-4 polymorphisms

**Immune Mechanisms:**
- T cell-mediated: Th1/Th17 cells drive tissue inflammation
- B cell-mediated: Autoantibody production, immune complex deposition
- Cytokine networks: TNF-alpha, IL-6, IL-1, IL-17, IFN-alpha (SLE)
- Complement activation: Especially in SLE (low C3/C4 during flares)

## Rheumatoid Arthritis - Advanced

**2010 ACR/EULAR Criteria:** Joint involvement, serology (RF, anti-CCP),
acute phase reactants, duration >=6 weeks. Score >=6/10 classifies as RA.

**Treatment Ladder:**
- DMARDs: Methotrexate (anchor), sulfasalazine, hydroxychloroquine
- Biologics: TNF inhibitors, IL-6 inhibitors, abatacept, rituximab
- JAK inhibitors: Tofacitinib, baricitinib, upadacitinib
- Treat-to-target: Aim for remission or low disease activity

## SLE - Advanced

**2019 EULAR/ACR Criteria:** Entry: ANA >=1:80. Weighted domains (constitutional,
hematologic, neuropsychiatric, mucocutaneous, serosal, renal). Score >=10.

**Lupus Nephritis (ISN/RPS):** Class I (minimal mesangial) through Class VI
(sclerosing). Class IV (diffuse proliferative) is most severe and common.

**Treatment:**
- Hydroxychloroquine for ALL SLE patients (reduces flares, improves survival)
- Mild: NSAIDs, low-dose steroids. Moderate: Azathioprine, mycophenolate
- Severe/nephritis: High-dose steroids + mycophenolate or cyclophosphamide
- Belimumab and voclosporin as add-on therapies

## Sjogren Syndrome - Diagnosis

**Diagnostic Workup:**
- Schirmer test: <5mm wetting in 5 min = abnormal
- Rose Bengal staining of cornea; salivary gland biopsy (gold standard, focus score >=1)
- Anti-SSA/Ro (most sensitive), anti-SSB/La (more specific)

## Antiphospholipid Syndrome - Criteria

**Revised Sapporo Criteria:**
- Clinical: Vascular thrombosis OR pregnancy morbidity
- Lab (positive x2, >=12 weeks apart): Lupus anticoagulant, anticardiolipin, anti-beta2 GP I
- Triple positivity (all 3) = highest thrombotic risk`,

      keyTerms: [
        { term: 'Shared epitope', definition: 'HLA-DR4 amino acid sequence associated with RA susceptibility' },
        { term: 'DMARD', definition: 'Disease-Modifying Anti-Rheumatic Drug; slows disease progression' },
        { term: 'Lupus nephritis', definition: 'Kidney inflammation caused by SLE immune complex deposition' },
        { term: 'Treat-to-target', definition: 'Adjusting therapy to achieve a defined disease activity goal' },
        { term: 'Focus score', definition: 'Histologic measure of lymphocytic infiltration in salivary gland biopsy' },
        { term: 'Triple positivity', definition: 'All three APS antibodies positive; highest thrombotic risk' },
      ],
      examples: [
        'RA patient failing methotrexate started on adalimumab (TNF inhibitor).',
        'SLE patient with class IV nephritis treated with mycophenolate and steroids.',
        'APS patient with DVT and triple-positive antibodies on lifelong anticoagulation.',
      ],
      clinicalNotes: 'Methotrexate is the anchor drug in RA. Folic acid supplementation reduces side effects. Monitor CBC, LFTs, creatinine. Hydroxychloroquine requires annual eye exams for retinal toxicity. Lupus patients should never stop hydroxychloroquine.',
    },

    4: {
      level: 4,
      summary: 'Advanced autoimmune pathophysiology involves innate and adaptive immune dysfunction, epigenetic modifications, and complex cytokine signaling. Treatment strategies employ targeted biologics and small molecules guided by molecular pathways and biomarkers.',
      explanation: `## Advanced Immunopathogenesis

**Innate Immune Dysregulation:**
- TLR7/TLR9 recognize self-nucleic acids in SLE
- Type I interferon signature drives SLE pathogenesis
- NETosis exposes autoantigens via neutrophil extracellular traps
- NLRP3 inflammasome activation in autoinflammatory overlap

**Adaptive Immune Dysregulation:**
- Tfh cells drive germinal center B cell responses
- Treg dysfunction: Impaired suppression of autoreactive clones
- BAFF/BLyS promotes B cell survival, elevated in SLE
- Ectopic germinal centers in RA synovium and Sjogren salivary glands

**Epigenetics:**
- DNA hypomethylation in SLE T cells; histone modifications in RA
- MicroRNA dysregulation (miR-146a, miR-155)

## Targeted Therapies by Mechanism

**TNF-alpha Inhibition:**
- Adalimumab, etanercept, infliximab, golimumab, certolizumab
- Effective in RA, PsA, ankylosing spondylitis; NOT SLE (may worsen)
- Risks: Infections, TB reactivation, demyelination

**IL-6 Pathway:**
- Tocilizumab, sarilumab; effective in RA; suppresses CRP
- Risks: GI perforation, hyperlipidemia, neutropenia

**B Cell Depletion:**
- Rituximab (anti-CD20): RA, ANCA vasculitis, refractory SLE
- Belimumab (anti-BAFF): First biologic approved for SLE

**JAK-STAT Pathway:**
- Tofacitinib (JAK1/3), baricitinib (JAK1/2), upadacitinib (JAK1)
- Oral targeted synthetic DMARDs; comparable to biologics in RA
- Concerns: VTE, MACE, malignancy (ORAL Surveillance trial)

**IL-17 Pathway:**
- Secukinumab, ixekizumab: Effective in PsA and ankylosing spondylitis
- Can worsen IBD

## PsA: IL-23/IL-17 Axis
- IL-23 drives Th17 differentiation; IL-17 mediates enthesitis and erosion
- IL-23 inhibitors: Guselkumab, risankizumab
- PDE4 inhibition: Apremilast (oral, modest efficacy)

## Ankylosing Spondylitis - Imaging
- MRI: Bone marrow edema at SI joints (gold standard for early disease)
- Modified New York criteria: Bilateral grade 2+ sacroiliitis on X-ray
- ASAS criteria incorporate MRI for earlier diagnosis`,

      keyTerms: [
        { term: 'NETosis', definition: 'Neutrophil death releasing DNA traps that expose autoantigens' },
        { term: 'Type I interferon signature', definition: 'Pattern of IFN-stimulated gene expression characteristic of SLE' },
        { term: 'Ectopic germinal centers', definition: 'Lymphoid structures forming in target organs driving local autoimmunity' },
        { term: 'JAK-STAT pathway', definition: 'Intracellular cytokine signaling cascade targeted by JAK inhibitors' },
        { term: 'BAFF/BLyS', definition: 'B cell survival factor elevated in SLE; target of belimumab' },
        { term: 'IL-23/IL-17 axis', definition: 'Cytokine pathway central to spondyloarthritis and psoriatic arthritis' },
      ],
      analogies: [
        'NETosis is like a neutrophil self-destructing and spilling its contents, inadvertently revealing hidden self-antigens to the immune system.',
        'JAK inhibitors are like cutting the wires inside the cell that relay cytokine signals from the surface to the nucleus.',
      ],
      examples: [
        'SLE patient with elevated IFN signature started on anifrolumab (anti-IFNAR).',
        'PsA patient with enthesitis and dactylitis treated with secukinumab (anti-IL-17).',
        'RA patient with contraindication to biologics given tofacitinib (JAK inhibitor) with VTE counseling.',
      ],
      clinicalNotes: 'TNF inhibitors are contraindicated in SLE (paradoxical worsening). JAK inhibitors carry boxed warning for VTE, MACE, and malignancy in patients over 50 with CV risk factors (ORAL Surveillance). Screen for latent TB before any biologic. Anti-IL-17 agents can unmask or worsen IBD.',
    },

    5: {
      level: 5,
      summary: 'Current research in autoimmune rheumatology focuses on precision medicine approaches, novel pathway targets (TYK2, IRAK4, CD19 CAR-T), biomarker-guided therapy, and understanding the microbiome-immune axis. Emerging paradigms challenge traditional classification boundaries.',
      explanation: `## Precision Medicine in Autoimmunity

**Molecular Taxonomy:**
- SLE: Interferon-high vs interferon-low subsets predict treatment response
- RA: Seropositive vs seronegative have distinct pathogenic mechanisms
- Synovial biopsy molecular profiling guides therapy selection (R4RA trial)

**Biomarker-Guided Therapy:**
- Anti-dsDNA and complement guide SLE treatment intensity
- Vectra DA multi-analyte panels for RA disease activity
- Baseline transcriptomic signatures predict biologic response

## Emerging Therapeutic Targets

**TYK2 Inhibition:**
- Deucravacitinib: Selective TYK2 inhibitor approved for psoriasis
- Downstream of IL-12, IL-23, type I IFN; safer than broader JAK inhibitors
- Under investigation in SLE and PsA

**CAR-T Cell Therapy:**
- Anti-CD19 CAR-T: Complete B cell depletion
- Remarkable responses in refractory SLE (Erlangen series)
- Drug-free remission in some patients; durability questions remain

**Dual Pathway Inhibition:**
- Bimekizumab (IL-17A/F); atacicept (BAFF + APRIL) in SLE
- Bispecific antibodies targeting multiple cytokines

## Microbiome-Immune Axis

**Mucosal Origins Hypothesis:**
- RA may originate at mucosal surfaces (lung, oral, gut)
- Anti-CCP antibodies detected in sputum before joint symptoms
- P. gingivalis citrullinating enzyme mimics PAD; Prevotella copri enriched in early RA

**Gut-Joint Axis in Spondyloarthritis:**
- Subclinical gut inflammation in 60% of SpA; shared IL-23/IL-17 pathway
- Dysbiosis precedes clinical disease

## Antiphospholipid Syndrome - Evolving Concepts

**Revised ACR/EULAR 2023 APS Classification:**
- Weighted criteria replacing Sapporo; improved specificity
- Entry: Positive aPL + clinical domain (thrombosis, pregnancy, cardiac, hematologic)

**Catastrophic APS (CAPS):**
- Rapid multi-organ thrombotic microangiopathy; ~30% mortality
- Triple therapy: Anticoagulation + steroids + plasma exchange/IVIG
- Eculizumab for refractory cases

## Controversies and Future Directions

**Remission and Drug Tapering:**
- RETRO, DRESS trials suggest guided biologic tapering feasible in RA
- Biomarkers needed to identify safe-to-taper patients

**Reclassification:**
- Autoinflammatory-autoimmune continuum (e.g., adult-onset Still disease)
- Treatment selection guided by dominant mechanism

**Health Disparities:**
- SLE disproportionately severe in Black and Hispanic patients
- Access to biologics and clinical trial diversity remain significant gaps`,

      keyTerms: [
        { term: 'Molecular endotype', definition: 'Disease subtype defined by molecular pathway' },
        { term: 'TYK2', definition: 'Tyrosine kinase 2; selective inhibition avoids broader JAK side effects' },
        { term: 'CAR-T', definition: 'Chimeric antigen receptor T cells engineered to deplete immune cells' },
        { term: 'Citrullination', definition: 'Post-translational modification generating RA neoepitopes' },
        { term: 'CAPS', definition: 'Catastrophic APS; rapid multi-organ thrombosis' },
      ],
      analogies: [
        'CAR-T therapy for autoimmunity is like reprogramming soldiers to precisely eliminate the rogue immune cells causing the disease.',
        'The mucosal origins hypothesis suggests RA may start as a distant brush fire in the lungs or gums before spreading to the joints.',
      ],
      examples: [
        'Refractory SLE patient achieves drug-free remission after anti-CD19 CAR-T therapy.',
        'RA patient with high interferon signature found to respond poorly to TNF inhibitors, switched to JAK inhibitor.',
        'CAPS patient treated with anticoagulation, steroids, plasma exchange, and eculizumab.',
      ],
      clinicalNotes: 'CAR-T for autoimmune disease is in early stages but shows transformative potential. Long-term safety data are lacking. TYK2 inhibitors may offer improved safety over broader JAK inhibitors. Always consider health disparities when managing SLE. The mucosal origins hypothesis supports smoking cessation as a disease-modifying intervention in RA.',
    },
  },

  media: [],
  citations: [
    { id: 'cite-kelley-rheum', type: 'textbook', title: "Kelley and Firestein's Textbook of Rheumatology", source: 'Elsevier' },
    { id: 'cite-acr-ra-guidelines', type: 'article', title: '2021 ACR Guideline for Treatment of RA', source: 'Arthritis & Rheumatology' },
  ],
  crossReferences: [
    { targetId: 'rheumatology-ra', targetType: 'condition', relationship: 'related', label: 'Rheumatoid Arthritis' },
    { targetId: 'rheumatology-sle', targetType: 'condition', relationship: 'related', label: 'Systemic Lupus Erythematosus' },
    { targetId: 'rheumatology-gout', targetType: 'topic', relationship: 'sibling', label: 'Gout' },
  ],
  tags: {
    topics: [
      'rheumatology', 'autoimmune', 'immunology', 'rheumatoid-arthritis',
      'lupus', 'sjogren', 'ankylosing-spondylitis', 'psoriatic-arthritis',
      'antiphospholipid-syndrome', 'autoantibodies',
    ],
    systems: ['musculoskeletal', 'immune'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['rheumatology', 'medicine'] },
  },

  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
};
