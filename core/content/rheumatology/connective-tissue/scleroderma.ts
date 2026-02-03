/**
 * Systemic Sclerosis (Scleroderma)
 *
 * Autoimmune connective tissue disease characterized by fibrosis of skin and internal organs,
 * vasculopathy, and immune activation.
 */

import { EducationalContent } from '../../types';

export const sclerodermaContent: EducationalContent = {
  id: 'rheumatology-scleroderma',
  type: 'condition',
  name: 'Systemic Sclerosis (Scleroderma)',
  nameEs: 'Esclerosis Sistemica (Esclerodermia)',
  alternateNames: ['Scleroderma', 'SSc', 'CREST Syndrome', 'Progressive Systemic Sclerosis'],

  levels: {
    1: {
      level: 1,
      summary: 'Scleroderma is a disease that causes the skin and sometimes internal organs to become hard and thick. It happens because the body makes too much collagen, the protein that gives skin its structure.',
      explanation: `## What Is Scleroderma?

Scleroderma means "hard skin." It is an autoimmune disease where the body produces too much collagen, making skin and organs stiff and tight.

## Types

**Limited Scleroderma (CREST):**
- Affects skin on hands, face, and lower arms
- Progresses slowly
- CREST stands for: Calcinosis, Raynaud's, Esophageal problems, Sclerodactyly, Telangiectasia

**Diffuse Scleroderma:**
- Affects skin over larger areas of the body
- Can affect lungs, heart, and kidneys more quickly
- More serious form

## Common Symptoms

- Fingers turning white or blue in cold (Raynaud's phenomenon)
- Tight, hard, shiny skin on fingers and hands
- Difficulty swallowing
- Heartburn and acid reflux
- Joint pain and stiffness
- Fatigue
- Small red spots on skin (telangiectasias)

## Treatment

- Medicines to improve blood flow
- Medicines to calm the immune system
- Physical therapy to keep skin flexible
- Protecting hands from cold
- Treating heartburn and swallowing problems`,

      keyTerms: [
        { term: 'Collagen', definition: 'A protein that gives skin and tissues their structure and strength' },
        { term: "Raynaud's phenomenon", definition: 'Fingers or toes turning white, then blue, then red in cold' },
        { term: 'Sclerodactyly', definition: 'Tight, hard skin on the fingers' },
        { term: 'Telangiectasia', definition: 'Small, visible red blood vessels on the skin' },
      ],
      analogies: [
        'Scleroderma is like the body laying down too much concrete, making flexible tissue stiff and hard.',
        "Raynaud's is like the blood vessels slamming their doors shut when it gets cold.",
      ],
      examples: [
        'Woman whose fingers turn white in cold weather and whose skin on hands is becoming tight',
        'Person with difficulty swallowing and chronic heartburn with hard, shiny skin on face',
        'Someone with small red spots on face and hands and calcium deposits under skin',
      ],
      patientCounselingPoints: [
        'Keep your hands and feet warm to reduce Raynaud attacks.',
        'Avoid smoking, which worsens blood vessel problems.',
        'Elevate the head of your bed to help with acid reflux.',
        'Regular exercise and stretching can help maintain flexibility.',
      ],
    },

    2: {
      level: 2,
      summary: 'Systemic sclerosis is classified as limited or diffuse cutaneous based on extent of skin involvement. Autoantibodies (anti-centromere, anti-Scl-70, anti-RNA polymerase III) predict disease subtype and organ complications.',
      explanation: `## Classification

**Limited Cutaneous SSc (lcSSc):**
- Skin thickening distal to elbows/knees and face
- Long history of Raynaud's (years before skin changes)
- Anti-centromere antibody (60-80%)
- Major complication: Pulmonary arterial hypertension (PAH)
- Better prognosis overall

**Diffuse Cutaneous SSc (dcSSc):**
- Skin thickening proximal to elbows/knees, trunk
- Raynaud's and skin changes develop together
- Anti-Scl-70 (anti-topoisomerase I) antibody (30-40%)
- Major complications: ILD, scleroderma renal crisis
- Worse prognosis, especially early

**SSc sine scleroderma:**
- Internal organ involvement WITHOUT skin thickening
- Rare but important to recognize

## Organ Involvement

**Raynaud's Phenomenon:**
- Present in >95% of SSc patients
- Nailfold capillaroscopy: Dilated loops, dropout, hemorrhages
- Can progress to digital ulcers and gangrene

**GI Tract (90%):**
- Esophageal dysmotility (lower 2/3 smooth muscle)
- GERD, Barrett's esophagus risk
- Gastric antral vascular ectasia (GAVE/watermelon stomach)
- Small bowel dysmotility, bacterial overgrowth, malabsorption

**Lungs:**
- ILD: Most common cause of death in dcSSc
- PAH: Most common cause of death in lcSSc
- Screening: PFTs (FVC), echocardiography (RVSP), HRCT

**Kidneys:**
- Scleroderma renal crisis (SRC): 10-15% of dcSSc
- Abrupt onset: Hypertension, AKI, microangiopathic hemolytic anemia
- Risk factor: Anti-RNA polymerase III antibody, high-dose steroids
- Treatment: ACE inhibitors (captopril) - life saving

**Heart:**
- Myocardial fibrosis, arrhythmias, pericarditis
- Often subclinical

## Autoantibody-Phenotype Correlation

| Antibody | Subtype | Key Complication |
|----------|---------|-----------------|
| Anti-centromere | Limited (CREST) | PAH |
| Anti-Scl-70 | Diffuse | ILD |
| Anti-RNA pol III | Diffuse | Renal crisis, cancer |`,

      keyTerms: [
        { term: 'Anti-centromere', definition: 'Antibody associated with limited scleroderma and pulmonary hypertension risk' },
        { term: 'Anti-Scl-70', definition: 'Anti-topoisomerase I antibody associated with diffuse scleroderma and lung fibrosis' },
        { term: 'Scleroderma renal crisis', definition: 'Acute onset hypertension and kidney failure requiring ACE inhibitor treatment' },
        { term: 'Nailfold capillaroscopy', definition: 'Examination of tiny blood vessels at the base of fingernails to detect scleroderma changes' },
      ],
      analogies: [
        'Autoantibodies in scleroderma are like a weather forecast - they predict which storms (complications) are most likely.',
        'Scleroderma renal crisis is like a sudden pipe burst in the kidneys, and ACE inhibitors are the emergency repair.',
      ],
      examples: [
        'Woman with long-standing Raynaud and anti-centromere antibody - screen for PAH annually',
        'Man with rapidly progressive skin thickening and anti-Scl-70 - high-risk for ILD',
        'Patient on high-dose steroids develops sudden hypertension and AKI - scleroderma renal crisis',
      ],
      clinicalNotes: 'ACE inhibitors are the only treatment that improves survival in scleroderma renal crisis. Do NOT use ARBs as substitute. High-dose steroids (>15mg prednisone) are a risk factor for renal crisis in diffuse SSc. Anti-RNA polymerase III is associated with both renal crisis and concurrent malignancy - screen for cancer.',
    },

    3: {
      level: 3,
      summary: 'SSc pathogenesis involves vascular injury, immune activation, and fibrosis. Treatment targets organ-specific complications: nintedanib/tocilizumab for ILD, endothelin receptor antagonists for PAH, and ACE inhibitors for renal crisis.',
      explanation: `## Pathogenesis Triad

**1. Vascular Injury:**
- Endothelial cell damage is the earliest event
- Loss of capillaries (rarefaction)
- Intimal proliferation and fibrosis of arterioles
- Digital ischemia and PAH

**2. Immune Activation:**
- CD4+ T cells, macrophages infiltrate skin early
- Th2 cytokines (IL-4, IL-13) drive fibroblast activation
- B cell activation and autoantibody production
- Plasmacytoid dendritic cells produce type I IFN

**3. Fibrosis:**
- Fibroblast activation and myofibroblast differentiation
- Excessive collagen I, III, and ECM deposition
- TGF-beta is the master fibrotic cytokine
- PDGF, CTGF, endothelin-1 promote fibrosis
- Wnt/beta-catenin pathway activation

## Treatment by Organ

**ILD:**
- Mycophenolate mofetil (Scleroderma Lung Study II - non-inferior to cyclophosphamide)
- Nintedanib (SENSCIS trial - slows FVC decline)
- Tocilizumab (focuSSced trial - preserved FVC in early dcSSc)
- Cyclophosphamide IV for severe/progressive
- Autologous stem cell transplant (ASTIS, SCOT trials) for severe dcSSc

**PAH:**
- Endothelin receptor antagonists: Bosentan, ambrisentan, macitentan
- PDE5 inhibitors: Sildenafil, tadalafil
- Prostacyclins: Epoprostenol, treprostinil, iloprost
- Soluble guanylate cyclase stimulators: Riociguat
- Combination therapy per ESC/ERS guidelines
- Selexipag (IP receptor agonist)

**Raynaud's:**
- Calcium channel blockers (nifedipine, amlodipine) - first line
- PDE5 inhibitors for severe
- IV iloprost for critical digital ischemia
- Bosentan to prevent new digital ulcers

**GI:**
- PPIs for GERD
- Prokinetics (metoclopramide, erythromycin) for dysmotility
- Rotating antibiotics for bacterial overgrowth

**Skin:**
- Methotrexate for early skin involvement
- Mycophenolate for progressive skin disease
- Modified Rodnan Skin Score (mRSS) to track progression

## Screening Protocol

- Annual PFTs (FVC, DLCO)
- Annual echocardiography (PAH screening)
- HRCT at baseline and if FVC declines
- BP monitoring (renal crisis)
- Right heart catheterization if echo suggests PAH`,

      keyTerms: [
        { term: 'TGF-beta', definition: 'Transforming growth factor beta - master cytokine driving fibrosis in scleroderma' },
        { term: 'Nintedanib', definition: 'Tyrosine kinase inhibitor approved for SSc-ILD that slows lung function decline' },
        { term: 'Modified Rodnan Skin Score', definition: 'Clinical scoring of skin thickness at 17 body sites to measure scleroderma severity' },
        { term: 'Endothelin-1', definition: 'Potent vasoconstrictor and profibrotic mediator elevated in scleroderma' },
      ],
      analogies: [
        'The SSc pathogenesis triad is like a three-legged stool: vascular damage, immune activation, and fibrosis all support the disease.',
        'TGF-beta is like a foreman telling workers to keep building even though the structure is already complete.',
      ],
      examples: [
        'SSc-ILD patient started on mycophenolate after Scleroderma Lung Study II data',
        'PAH in lcSSc treated with combination ambrisentan + tadalafil per AMBITION trial',
        'Severe Raynaud with digital ulcers treated with IV iloprost and bosentan prophylaxis',
      ],
      clinicalNotes: 'FVC and DLCO are the key pulmonary monitoring tools. DLCO decline out of proportion to FVC suggests developing PAH rather than ILD. Right heart catheterization is required to confirm PAH. Autologous stem cell transplant in severe dcSSc showed improved survival at 4 years (SCOT trial) but has treatment-related mortality of 6-10%. Reserve for select patients.',
    },

    4: {
      level: 4,
      summary: 'SSc pathogenesis involves endothelin-1-mediated vasculopathy, TGF-beta/Wnt-driven fibrosis, and aberrant innate immunity. ASTIS/SCOT trials demonstrate stem cell transplant efficacy. Anti-RNA polymerase III links to cancer-associated scleroderma.',
      explanation: `## Advanced Pathogenesis

**Vascular Biology:**
- Endothelial-to-mesenchymal transition (EndoMT)
- VEGF paradox: Elevated but angiogenesis impaired
- Anti-endothelial cell antibodies (AECAs) contribute to injury
- Pericyte detachment and vessel dropout
- Intussusceptive angiogenesis (abnormal vessel remodeling)

**Fibrosis Molecular Pathways:**
- TGF-beta/Smad signaling: Smad3 phosphorylation drives collagen gene transcription
- Non-canonical TGF-beta: TAK1, JNK, p38 MAPK
- Wnt/beta-catenin: Promotes myofibroblast survival
- Hedgehog and Notch pathways in fibroblast activation
- Epigenetic: DNA methylation changes, histone modifications in fibroblasts
- miR-29 (antifibrotic) downregulated; miR-21 (profibrotic) upregulated

**Immune Mechanisms:**
- Anti-RNA polymerase III: Molecular mimicry with cancer antigens
  - Cancer triggers immune response cross-reactive with RNA pol III
  - Cancer-associated scleroderma: Temporal clustering of cancer and SSc onset
  - Screen for malignancy within 3 years of dcSSc onset with this antibody
- Anti-topoisomerase I immune complexes activate pDCs via TLR7/9
- B cell activating factor (BAFF) elevated

## Stem Cell Transplant Evidence

**ASTIS Trial (2014):**
- Autologous HSCT vs IV cyclophosphamide in severe dcSSc
- Higher treatment-related mortality with HSCT in year 1
- Superior long-term event-free survival at 4 years (79% vs 50%)
- Skin scores and FVC improved significantly

**SCOT Trial (2018):**
- Myeloablative autologous HSCT vs cyclophosphamide
- Global rank composite score superior at 54 months (67% vs 33%)
- FVC improvement maintained at 72 months
- Event-free survival: 74% vs 47% at 72 months
- Treatment-related mortality: 6% (lower than ASTIS)

## PAH in SSc: Distinct Entity

**Differences from Idiopathic PAH:**
- Worse prognosis than IPAH
- More right ventricular dysfunction
- Less responsive to vasodilator therapy
- Left heart disease often coexists (diastolic dysfunction)
- ILD may contribute (group 3 PH component)

**DETECT Algorithm:**
- Screening tool for PAH in SSc
- Step 1: FVC/DLCO ratio, telangiectasias, anti-centromere, NT-proBNP, uric acid, right axis
- Step 2: Echocardiography (TR velocity, right atrial area)
- If positive: Right heart catheterization
- Improved sensitivity over echo alone (96% vs 71%)`,

      keyTerms: [
        { term: 'EndoMT', definition: 'Endothelial-to-mesenchymal transition where blood vessel cells transform into fibroblast-like cells' },
        { term: 'ASTIS trial', definition: 'Landmark trial showing autologous HSCT superior to cyclophosphamide in severe diffuse SSc' },
        { term: 'DETECT algorithm', definition: 'Two-step screening tool for PAH in SSc with superior sensitivity to echocardiography alone' },
        { term: 'Cancer-associated scleroderma', definition: 'SSc triggered by anti-tumor immune response cross-reacting with RNA polymerase III' },
      ],
      analogies: [
        'EndoMT is like blood vessel cells changing their career to become fibrosis-producing fibroblasts.',
        'The DETECT algorithm is like a two-stage filter catching more PAH cases than echo screening alone.',
      ],
      examples: [
        'Severe dcSSc patient with mRSS >25 referred for autologous HSCT after SCOT trial discussion',
        'New dcSSc with anti-RNA pol III gets cancer screening (CT chest/abdomen/pelvis, age-appropriate)',
        'SSc patient with declining DLCO out of proportion to FVC undergoes DETECT algorithm for PAH',
      ],
      clinicalNotes: 'Anti-RNA polymerase III scleroderma has a temporal link to cancer within a 2.5-year window of SSc onset. Consider CT chest/abdomen/pelvis and age-appropriate cancer screening. HSCT should be considered early in severe dcSSc (mRSS >15, disease duration <4 years) before irreversible organ damage. The DETECT algorithm should replace isolated echocardiography for PAH screening in SSc.',
    },

    5: {
      level: 5,
      summary: 'Emerging SSc therapies target specific fibrotic pathways (lysophosphatidic acid, autotaxin inhibitors), vascular remodeling, and immune dysregulation. Biomarker-guided therapy and molecular phenotyping are advancing toward precision medicine in scleroderma.',
      explanation: `## Emerging Therapeutic Targets

**Antifibrotic Approaches:**
- Nintedanib (SENSCIS): VEGFR/FGFR/PDGFR inhibitor slowing FVC decline
- Pirfenidone: Under investigation for SSc-ILD (approved for IPF)
- Autotaxin/LPA inhibition: Lysophosphatidic acid drives fibrosis via LPAR1
  - Ziritaxestat (ISABELA trials, mixed results in IPF)
  - Novel LPAR1 antagonists in SSc preclinical models
- Anti-CTGF: Pamrevlumab showed signal in phase 2 SSc-ILD
- Anti-IL-13: Lebrikizumab, tralokinumab - targeting Th2 fibrotic pathway
- KD025 (belumosudil): ROCK2 inhibitor approved for cGVHD, potential in SSc

**Immune-Targeted:**
- Tocilizumab (anti-IL-6R): focuSSced trial preserved FVC in early dcSSc with elevated CRP
- Rituximab: Case series showing skin and lung stabilization
- Abatacept: ASSET trial showed trends in skin improvement
- Lenabasum: CB2 agonist (anti-inflammatory), RESOLVE-1 trial negative in dcSSc
- JAK inhibitors: Preclinical data, clinical trials planned
- Anti-BAFF: Rationale from elevated BAFF levels in SSc

**Vascular:**
- Selexipag, riociguat expanding PAH treatment options
- Anti-endoglin (TRC105): Targeting aberrant angiogenesis
- Endothelial progenitor cell therapy under investigation

## Biomarkers and Precision Medicine

**Predictive Biomarkers:**
- KL-6, SP-D: Lung involvement biomarkers
- NT-proBNP, BNP: PAH screening and monitoring
- CXCL4 (PF4): Early biomarker predicting organ complications
- Skin gene expression profiles correlating with treatment response

**Molecular Subsets of dcSSc:**
- Inflammatory subset: Immune cell infiltrate, better response to immunosuppression
- Fibroproliferative subset: Active fibrosis, may respond to antifibrotics
- Normal-like subset: Less skin gene expression abnormality, better prognosis

**Composite Endpoints:**
- ACR CRISS (Combined Response Index in SSc)
- Accounts for mRSS, FVC, patient/physician global, HAQ-DI
- Used in clinical trials as primary endpoint

## Controversies

**Stem Cell Transplant Timing:**
- Earlier is better (before irreversible fibrosis) but higher risk
- Patient selection critical: Severe dcSSc, <4 years duration, adequate cardiac function
- Treatment-related mortality declining with experience

**Mycophenolate vs Cyclophosphamide for ILD:**
- SLS II: Non-inferior at 2 years with better tolerability
- Many centers now use MMF first-line
- Cyclophosphamide reserved for rapidly progressive ILD

**Steroid Avoidance:**
- High-dose steroids linked to renal crisis
- Most experts: Prednisone <15mg, avoid if possible in dcSSc
- Use steroid-sparing agents whenever feasible`,

      keyTerms: [
        { term: 'CXCL4', definition: 'Platelet factor 4 - early biomarker in SSc predicting organ involvement and fibrosis' },
        { term: 'ACR CRISS', definition: 'Composite response index for SSc clinical trials combining skin, lung, and patient-reported outcomes' },
        { term: 'Autotaxin', definition: 'Enzyme producing lysophosphatidic acid, a profibrotic mediator under investigation as therapeutic target' },
        { term: 'Molecular subset', definition: 'Gene expression-defined disease subtype guiding therapy selection in SSc' },
      ],
      analogies: [
        'Molecular subsetting of SSc is like sorting patients by the dominant disease engine, allowing mechanics to target the right part.',
        'CXCL4 as an early biomarker is like smoke detection before fire becomes visible.',
      ],
      examples: [
        'Early dcSSc patient with inflammatory gene signature started on tocilizumab based on focuSSced data',
        'SSc-ILD patient with progressive FVC decline on MMF has nintedanib added per SENSCIS',
        'CXCL4 levels used in research to predict which SSc patients will develop organ complications',
      ],
      clinicalNotes: 'SSc management is evolving toward combination therapy: immunosuppression (MMF or tocilizumab) + antifibrotic (nintedanib) for ILD. Molecular phenotyping of skin biopsies may guide therapy selection in future. The paradigm is shifting from uniform treatment to precision medicine. HSCT remains the only treatment shown to modify disease course in severe dcSSc but requires careful patient selection and experienced centers.',
    },
  },

  media: [],
  citations: [
    { id: 'cite-senscis', type: 'article', title: 'Nintedanib for SSc-ILD (SENSCIS)', source: 'NEJM 2019' },
    { id: 'cite-scot', type: 'article', title: 'Myeloablative HSCT vs Cyclophosphamide in SSc (SCOT)', source: 'NEJM 2018' },
  ],
  crossReferences: [
    { targetId: 'rheumatology-autoimmune-diseases', targetType: 'topic', relationship: 'parent', label: 'Autoimmune Diseases' },
    { targetId: 'rheumatology-sjogrens', targetType: 'condition', relationship: 'sibling', label: 'Sjogren Syndrome' },
    { targetId: 'rheumatology-gpa', targetType: 'condition', relationship: 'related', label: 'GPA (Vasculitis)' },
  ],
  tags: {
    topics: ['rheumatology', 'scleroderma', 'systemic-sclerosis', 'fibrosis', 'connective-tissue', 'PAH', 'ILD'],
    systems: ['musculoskeletal', 'immune', 'respiratory', 'cardiovascular'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['rheumatology', 'medicine'] },
  },

  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
};
