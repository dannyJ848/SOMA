/**
 * Systemic Lupus Erythematosus - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const sleContent: EducationalContent = {
  id: 'condition-systemic-lupus-erythematosus',
  type: 'condition',
  name: 'Systemic Lupus Erythematosus',
  nameEs: 'Lupus Eritematoso Sistémico',
  alternateNames: ['SLE', 'Lupus', 'Lupus Erythematosus'],
  hpoId: 'HP:0002818',

  levels: {
    1: {
      level: 1,
      summary: 'Systemic lupus erythematosus (SLE or lupus) is an autoimmune disease that can affect many parts of your body, including skin, joints, kidneys, and blood cells.',
      explanation: `In lupus, your immune system attacks healthy tissues throughout your body instead of just fighting infections. This causes inflammation that can damage different organs.

**Common symptoms:**
- Extreme fatigue
- Joint pain and swelling
- Butterfly-shaped rash across the nose and cheeks
- Sun sensitivity
- Fever without infection
- Hair loss
- Mouth sores

**Who gets lupus:**
- Most common in women of childbearing age
- More common in African American, Hispanic, and Asian populations
- Can run in families

**Organs that can be affected:**
- Skin (rashes, sun sensitivity)
- Joints (arthritis)
- Kidneys (nephritis)
- Blood cells (anemia, low platelets)
- Brain and nervous system
- Heart and lungs

**Treatment:**
- Medications to calm the immune system
- Hydroxychloroquine for most patients
- Steroids for flares
- Sun protection is very important`,
      keyTerms: [
        { term: 'autoimmune disease', definition: 'A condition where the immune system mistakenly attacks the body\'s own tissues' },
        { term: 'flare', definition: 'A period when lupus symptoms suddenly get worse' },
        { term: 'butterfly rash', definition: 'A red rash across the nose and cheeks that looks like a butterfly' },
        { term: 'nephritis', definition: 'Inflammation of the kidneys that can affect how they work' },
      ],
      analogies: [
        'Lupus is like your body\'s security system getting confused and attacking the buildings it\'s supposed to protect.',
        'A lupus flare is like a storm - symptoms can come on suddenly and then calm down with treatment.',
      ],
      examples: [
        'A 25-year-old woman develops a rash on her face after spending time at the beach, along with joint pain in her hands and extreme fatigue.',
        'Blood tests show low red blood cell count and platelets in a patient with kidney problems.',
        'Someone with lupus notices their symptoms get worse when they don\'t wear sunscreen outside.',
      ],
      patientCounselingPoints: [
        'Wear sunscreen every day, even when it\'s cloudy - UV light can trigger flares',
        'Take your medications consistently, even when you\'re feeling well',
        'Report any new symptoms to your doctor, especially changes in urine or swelling',
        'Get regular exercise but pace yourself and rest when needed',
      ],
    },
    2: {
      level: 2,
      summary: 'SLE is a chronic autoimmune disease with multisystem involvement, characterized by autoantibody production and immune complex deposition, requiring immunosuppressive therapy to prevent organ damage.',
      explanation: `## Epidemiology
- Female:male ratio ~9:1
- Peak onset ages 15-45
- Higher prevalence in African Americans, Hispanics, Asians

## Clinical Manifestations

**Musculoskeletal:**
- Arthralgias/arthritis (90%)
- Jaccoud arthropathy (reversible deformities)
- Myalgias

**Cutaneous:**
- Malar rash (butterfly rash)
- Discoid lesions (scarring)
- Photosensitivity
- Oral ulcers
- Alopecia

**Renal:**
- Lupus nephritis (50%)
- Can progress to kidney failure
- Requires aggressive treatment

**Hematologic:**
- Anemia of chronic disease
- Leukopenia, lymphopenia
- Thrombocytopenia

**Neuropsychiatric:**
- Headache, cognitive dysfunction
- Psychosis, seizures (severe)
- Peripheral neuropathy

**Cardiopulmonary:**
- Pleuritis, pericarditis
- Pleural effusions
- Libman-Sacks endocarditis

## Diagnostic Criteria (ACR/EULAR 2019)
- Entry criterion: ANA positive
- Add criteria from 10 domains (clinical + immunologic)
- Score ≥10 classified as SLE

## Laboratory Findings
- ANA: Sensitivity ~95-99%
- Anti-dsDNA: Specific for SLE, correlates with nephritis
- Anti-Smith: Highly specific
- Low complement (C3, C4): Active disease

## Treatment Overview
- Hydroxychloroquine: All patients (unless contraindicated)
- NSAIDs: Mild symptoms
- Glucocorticoids: Flares, moderate-severe disease
- Immunosuppressants: MMF, cyclophosphamide for severe disease
- Belimumab: Add-on for active disease`,
      keyTerms: [
        { term: 'malar rash', definition: 'Butterfly-shaped red rash over cheeks and bridge of nose' },
        { term: 'discoid lesions', definition: 'Coin-shaped, scarring skin lesions, often on scalp and face' },
        { term: 'photosensitivity', definition: 'Abnormal sensitivity to sunlight that can trigger rashes or flares' },
        { term: 'immune complex', definition: 'Combination of antibody bound to antigen that can deposit in tissues and cause damage' },
        { term: 'anti-dsDNA', definition: 'Antibody to double-stranded DNA; specific for SLE and correlates with kidney involvement' },
      ],
      analogies: [
        'Immune complexes are like gum getting stuck in pipes - they clog up filters in kidneys and other organs.',
      ],
      examples: [
        'ANA positive 1:640 with malar rash, oral ulcers, and arthritis meets SLE classification criteria.',
        'Rising anti-dsDNA titer and dropping complement levels predict an impending lupus flare.',
      ],
    },
    3: {
      level: 3,
      summary: 'SLE pathogenesis involves loss of tolerance, autoantibody formation against nuclear antigens, and type I interferon activation, with clinical heterogeneity requiring organ-specific treatment approaches.',
      explanation: `## Pathophysiology

**Genetic Factors:**
- HLA-DR2, HLA-DR3 associations
- Complement deficiencies (C2, C4)
- Multiple genetic susceptibility loci

**Immune Dysregulation:**
- Defective apoptosis → increased nuclear antigen exposure
- Impaired clearance of apoptotic debris
- T cell help for autoreactive B cells
- Plasma cell differentiation and autoantibody production
- Type I interferon signature

**Pathogenic Autoantibodies:**
- Anti-dsDNA → immune complexes → nephritis
- Anti-Sm → specific marker
- Anti-RNP, anti-SSA/Ro, anti-SSB/La
- Antiphospholipid antibodies → thrombosis

**Tissue Damage Mechanisms:**
- Immune complex deposition (glomeruli, skin)
- Complement activation
- Direct antibody binding
- Vasculopathy

## Classification Criteria (2019 ACR/EULAR)
**Entry criterion:** ANA ≥1:80

**Clinical domains (weighted):**
1. Constitutional (fever, weight loss): 2 pts
2. Hemologic (leukopenia, thrombocytopenia): 4 pts
3. Neuropsychiatric: 2 pts
4. Mucocutaneous (malar, discoid, alopecia, ulcers): 6 pts
5. Serositis (pleuritis, pericarditis): 5 pts
6. Musculoskeletal: 6 pts
7. Renal: 10 pts

**Immunologic domains (weighted):**
8. Antiphospholipid antibodies: 2 pts
9. Complement proteins: 4 pts
10. Anti-dsDNA: 6 pts

Score ≥10 = definite SLE

## Organ-Specific Treatment

**Mucocutaneous:**
- Hydroxychloroquine, topical steroids
- Avoid sun exposure

**Arthritis:**
- HCQ, NSAIDs, low-dose steroids
- Methotrexate if refractory

**Lupus Nephritis:**
- Class I-II: Conservative
- Class III-IV: MMF or cyclophosphamide
- Class V: MMF, cyclosporine
- Induction → maintenance

**Neuropsychiatric:**
- High-dose steroids + cyclophosphamide
- Exclude infection, metabolic causes

**Hematologic:**
- Steroids, immunosuppressants
- Anticoagulation if antiphospholipid antibodies present

## Pregnancy Considerations
- Plan pregnancy during quiescent disease
- Continue HCQ, azathioprine
- Avoid MMF, cyclophosphamide, mycophenolate
- Monitor for neonatal lupus (anti-SSA)
- High-risk obstetrics`,
      keyTerms: [
        { term: 'type I interferon signature', definition: 'Gene expression pattern indicating upregulation of interferon-stimulated genes; hallmark of SLE' },
        { term: 'apoptosis', definition: 'Programmed cell death; defective clearance of apoptotic cells exposes nuclear antigens in SLE' },
        { term: 'Jaccoud arthropathy', definition: 'Reversible, non-erosive joint deformities caused by tendon and ligament laxity in SLE' },
        { term: 'Libman-Sacks endocarditis', definition: 'Non-infective valvular vegetations seen in SLE and antiphospholipid syndrome' },
      ],
      clinicalNotes: 'Always obtain baseline ECG and retinal exam before starting hydroxychloroquine. Screen for latent TB before starting biologics. Anti-SSA/Ro positive mothers need fetal monitoring for congenital heart block.',
    },
    4: {
      level: 4,
      summary: 'SLE management integrates treat-to-target principles, biomarker-guided therapy, organ-specific protocols, and emerging biologic agents while balancing infection risk, cumulative damage, and quality of life.',
      explanation: `## Treat-to-Target in SLE

**Definitions of Remission:**
- Clinical remission: No clinical activity, on or off meds
- Complete remission: Clinical + serologic remission off meds
- Low disease activity: Acceptable goal for many patients

**Monitoring:**
- SLEDAI-2K, BILAG for disease activity
- PGA (Physician Global Assessment)
- Patient-reported outcomes
- Anti-dsDNA and complement trends

## Lupus Nephritis Management

**Classification (ISN/RPS):**
- Class I: Minimal mesangial
- Class II: Mesangial proliferative
- Class III: Focal (<50% glomeruli)
- Class IV: Diffuse (>50% glomeruli)
- Class V: Membranous
- Class VI: Advanced sclerosis

**Induction Therapy (Class III/IV):**
- MMF 2-3 g/day + steroids
- OR Cyclophosphamide (low-dose Euro-Lupus)
- Calcineurin inhibitors (alternative)

**Maintenance Therapy:**
- MMF 1-2 g/day
- Azathioprine 2 mg/kg
- Duration: At least 3-5 years

**Response Assessment:**
- Complete response: Proteinuria <0.5-0.7 g/day
- Partial response: ≥50% reduction in proteinuria
- Time to response: 6-12 months

## Refractory Disease

**Strategies:**
- Verify adherence
- Exclude alternative diagnoses
- Consider combination immunosuppression
- Rituximab (anti-CD20)
- Belimumab (anti-BLyS)
- Anifrolumab (anti-IFNAR)
- Voclosporin (calcineurin inhibitor for LN)

## Antiphospholipid Syndrome in SLE

**Classification:**
- One clinical + one laboratory criterion
- Clinical: Arterial/venous thrombosis, pregnancy morbidity
- Laboratory: LA, aCL, anti-B2GPI (persistent >12 weeks)

**Management:**
- Warfarin for thrombosis (INR 2-3)
- LMWH + aspirin in pregnancy
- Avoid estrogen-containing OCPs

## Cardiovascular Risk in SLE
- Accelerated atherosclerosis
- Traditional risk factor modification
- Statins per guidelines
- Control inflammation to reduce risk

## Damage Accrual
- SLICC/ACR Damage Index
- Steroid-sparing strategies
- Minimize cumulative damage
- Prevent glucocorticoid complications`,
      keyTerms: [
        { term: 'SLEDAI-2K', definition: 'Systemic Lupus Erythematosus Disease Activity Index 2000; validated measure of disease activity' },
        { term: 'BILAG', definition: 'British Isles Lupus Assessment Group; organ-specific activity index' },
        { term: 'SLICC/ACR Damage Index', definition: 'Tool to quantify irreversible organ damage accrued during disease course' },
        { term: 'calcineurin inhibitor', definition: 'Class of immunosuppressants (cyclosporine, tacrolimus, voclosporin) inhibiting T-cell activation' },
      ],
      clinicalNotes: 'Voclosporin + MMF + steroids is now FDA-approved for lupus nephritis based on AURORA trial. Anifrolumab approved for moderate-severe SLE despite standard therapy. Consider repeat kidney biopsy for refractory nephritis to guide therapy.',
    },
    5: {
      level: 5,
      summary: 'Contemporary SLE care incorporates precision medicine approaches with novel biologics, targeted synthetic DMARDs, biomarker-driven treatment strategies, and innovative approaches to refractory disease while addressing long-term outcomes and comorbidity management.',
      explanation: `## Precision Medicine in SLE

**Biomarker-Guided Therapy:**
- Interferon signature predicts anifrolumab response
- Anti-dsDNA/complement trends for flare prediction
- Urinary biomarkers (NGAL, MCP-1) for nephritis activity
- Cell-bound complement activation products (CB-CAPs)
- Multi-biomarker disease activity score

**Genetic and Molecular Subsets:**
- High interferon signature: Anifrolumab, sifalimumab
- B-cell driven: Belimumab, rituximab
- Plasmablast signature: Proteasome inhibitors

## Novel Therapeutic Agents

**Approved Therapies:**
- Belimumab: Anti-BLyS, reduces B-cell survival
- Anifrolumab: Anti-IFNAR type I inhibitor
- Voclosporin: Calcineurin inhibitor for LN

**Pipeline Agents:**
- Obinutuzumab: Anti-CD20 (alternative to rituximab)
- Ianalumab: Anti-IL-22 receptor
- Litifilimab: Anti-IFN-alpha
- Deucravacitinib: TYK2 inhibitor
- Zetomipzomib: Immunoproteasome inhibitor

## Refractory Disease Strategies

**Combination Biologic Therapy:**
- Belimumab + rituximab (investigational)
- Sequential biologic use
- Targeting multiple pathways

**CAR T-Cell Therapy:**
- CD19 CAR T for refractory SLE
- Deep B-cell depletion
- Potential for drug-free remission
- Case series and trials ongoing

**Plasma Exchange:**
- Severe lupus nephritis
- TTP-like microangiopathy
- Catastrophic antiphospholipid syndrome

## Pregnancy and Family Planning

**Pre-conception Counseling:**
- Disease quiescent >6 months
- Medication adjustment
- Risk stratification by antibodies
- Anti-SSA/Ro: Neonatal lupus risk
- Antiphospholipid: Thrombosis, fetal loss risk

**Safe Medications:**
- HCQ, azathioprine, tacrolimus
- Low-dose aspirin
- Prednisone (lowest effective)

**Avoid:**
- MMF, cyclophosphamide (teratogenic)
- Methotrexate, leflunomide
- Mycophenolate mofetil

## Emerging Concepts

**Disease Interception:**
- Pre-clinical autoantibodies precede symptoms
- Potential for preventive strategies
- Risk stratification models

**Microbiome Modulation:**
- Gut-joint axis
- Diet and probiotic interventions
- Research stage

**Tolerance Induction:**
- Autologous stem cell transplant
- Regulatory T cell therapies
- Peptide-based desensitization

## Long-Term Management

**Comorbidity Surveillance:**
- Cardiovascular disease (accelerated atherosclerosis)
- Osteoporosis (steroid-induced)
- Infection risk (immunosuppression)
- Malignancy risk (slightly increased)
- Cognitive dysfunction and fibromyalgia overlap

**Steroid Minimization:**
- HCQ cornerstone for all patients
- Early immunosuppressive use
- Taper steroids rapidly once control achieved
- Target steroid-free remission

**Damage Prevention:**
- Early aggressive therapy for renal/neurologic disease
- Regular screening for complications
- Vaccine optimization (pre-immunosuppression)`,
      keyTerms: [
        { term: 'IFNAR', definition: 'Interferon-alpha/beta receptor; target of anifrolumab' },
        { term: 'BLyS', definition: 'B-lymphocyte stimulator (BAFF); target of belimumab' },
        { term: 'TYK2 inhibitor', definition: 'Janus kinase 2 selective inhibitor with anti-inflammatory effects' },
        { term: 'drug-free remission', definition: 'Sustained remission without ongoing immunosuppressive therapy; emerging goal' },
      ],
      clinicalNotes: 'Board-relevant: ANA 99% sensitive but not specific. Anti-dsDNA and anti-Smith are specific. Anti-dsDNA correlates with nephritis activity. Low C3/C4 indicates active disease. Always consider antiphospholipid antibody testing. Avoid live vaccines on immunosuppression. Hydroxychloroquine is foundational for all SLE patients.',
    },
  },

  media: [
    {
      id: 'butterfly-rash',
      type: 'image',
      filename: 'malar-rash-lupus.jpg',
      title: 'Malar (Butterfly) Rash in SLE',
      description: 'Characteristic erythematous rash across cheeks and bridge of nose',
    },
  ],
  citations: [
    {
      id: 'fanouriakis-2021',
      type: 'article',
      title: '2019 European Alliance of Associations for Rheumatology/American College of Rheumatology classification criteria for systemic lupus erythematosus',
      authors: ['Fanouriakis A', 'Kostopoulou M', 'Alunno A', 'et al.'],
      source: 'Annals of the Rheumatic Diseases',
      url: 'https://doi.org/10.1136/annrheumdis-2019-208883',
    },
    {
      id: 'van-vollenhoven-2023',
      type: 'article',
      title: 'Treat-to-target in systemic lupus erythematosus: Recommendations from an international task force',
      authors: ['van Vollenhoven RF', 'Mosca M', 'Bertsias G', 'et al.'],
      source: 'Annals of the Rheumatic Diseases',
    },
  ],
  crossReferences: [
    { targetId: 'topic-autoimmune-serology', targetType: 'topic', relationship: 'related', label: 'Autoimmune Serology' },
    { targetId: 'condition-sjogren-syndrome', targetType: 'condition', relationship: 'related', label: 'Sjogren Syndrome' },
    { targetId: 'condition-antiphospholipid-syndrome', targetType: 'condition', relationship: 'related', label: 'Antiphospholipid Syndrome' },
  ],
  tags: {
    systems: ['immune', 'musculoskeletal', 'renal', 'dermatologic', 'neurologic', 'cardiovascular'],
    topics: ['rheumatology', 'autoimmunity', 'nephrology'],
    keywords: ['lupus', 'SLE', 'autoimmune', 'malar rash', 'lupus nephritis', 'anti-dsDNA', 'ANA', 'hydroxychloroquine'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },

  createdAt: '2026-01-26T00:00:00.000Z',
  updatedAt: '2026-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default sleContent;
