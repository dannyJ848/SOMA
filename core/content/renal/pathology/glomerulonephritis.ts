/**
 * Glomerulonephritis - Pathology Educational Content
 *
 * Covers inflammatory diseases of the glomerulus including
 * immune-mediated and pauci-immune forms.
 */

import { EducationalContent } from '../../types';

export const glomerulonephritis: EducationalContent = {
  id: 'pathology-glomerulonephritis',
  type: 'condition',
  name: 'Glomerulonephritis',
  alternateNames: ['GN', 'Glomerular Inflammation', 'Nephritic Syndrome', 'Glomerular Disease'],

  levels: {
    1: {
      level: 1,
      summary: 'Glomerulonephritis is inflammation of the tiny filters in the kidney called glomeruli, which can damage the kidneys.',
      explanation: `Glomerulonephritis (say: glow-mer-yoo-loh-nuh-FRY-tis) is a disease where the tiny filters in your kidneys become inflamed and damaged. These filters are called glomeruli.

**What Happens:**
- The glomeruli become swollen and irritated
- They cannot filter blood properly
- Blood and protein may leak into urine
- The kidneys may not work as well

**Signs You Might Notice:**
- Cola-colored or bloody urine
- Swelling in legs, face, or around eyes
- High blood pressure
- Feeling tired

**Common Causes:**
- Infections (like strep throat)
- Autoimmune diseases (body attacks itself)
- Sometimes the cause is unknown

**Types:**
- Some types get better on their own
- Some types need medicine
- Some types can lead to kidney failure

Doctors find this disease by checking your urine and blood, and sometimes by doing a kidney biopsy where they take a tiny sample of kidney tissue to look at under a microscope.`,
      keyTerms: [
        { term: 'glomerulonephritis', definition: 'Inflammation and damage to the glomeruli in the kidneys' },
        { term: 'glomeruli', definition: 'Tiny ball-shaped filters in the kidneys' },
        { term: 'inflammation', definition: 'Swelling and irritation in the body' },
        { term: 'biopsy', definition: 'Taking a small sample of tissue to examine' },
        { term: 'autoimmune', definition: 'When the body\'s defense system attacks its own cells' },
      ],
      analogies: [
        'Glomerulonephritis is like a clogged coffee filter - it gets inflamed and cannot filter properly.',
        'The immune attack is like friendly fire in a battle - the body\'s defenses accidentally damage the kidneys.',
        'Glomeruli are like tiny sieves - when inflamed, the holes get damaged and let things through that should stay in the blood.',
      ],
      examples: [
        'Strep throat can sometimes cause glomerulonephritis a few weeks later.',
        'Lupus is an autoimmune disease that can attack the kidneys and cause glomerulonephritis.',
        'Some people have no symptoms and only find out through a urine test at a doctor\'s visit.',
      ],
    },
    2: {
      level: 2,
      summary: 'Glomerulonephritis encompasses a group of immune-mediated or inflammatory diseases affecting the glomeruli, presenting with hematuria, proteinuria, hypertension, and renal insufficiency.',
      explanation: `**Clinical Presentation (Nephritic Syndrome):**
- Hematuria (RBC casts, dysmorphic RBCs)
- Proteinuria (usually subnephrotic, < 3.5 g/day)
- Hypertension
- Edema
- Oliguria
- Azotemia (elevated BUN/creatinine)

**Classification by Mechanism:**

**1. Immune Complex-Mediated:**
- Subepithelial deposits: Post-infectious GN, membranous
- Subendothelial deposits: Lupus, MPGN, cryoglobulinemia
- Mesangial deposits: IgA nephropathy

**2. Pauci-Immune (ANCA-Associated):**
- Minimal immune deposits
- Necrotizing vasculitis
- Granulomatosis with polyangiitis (Wegener\'s)
- Microscopic polyangiitis
- Eosinophilic granulomatosis with polyangiitis (Churg-Strauss)

**3. Anti-GBM Disease:**
- Linear IgG staining
- Goodpasture\'s syndrome (kidney + lung)
- Rapidly progressive course

**Common Causes:**

**Post-Infectious:**
- Post-streptococcal GN
- Infective endocarditis
- Shunt nephritis
- Deep-seated infections

**Primary Glomerular Diseases:**
- IgA nephropathy
- Membranoproliferative GN
- Crescentic GN

**Systemic Diseases:**
- Lupus nephritis
- Vasculitis (ANCA-associated)
- Henoch-Schonlein purpura
- Cryoglobulinemia

**Diagnosis:**
- Urinalysis: RBC casts, dysmorphic RBCs
- Serologies: ANA, complements, ANCA, anti-GBM, ASO
- Kidney biopsy: Light microscopy, immunofluorescence, EM

**Prognosis:**
- Variable by type
- Post-infectious: Usually excellent
- Crescentic GN: Poor without treatment
- Chronic GN may progress to ESRD`,
      keyTerms: [
        { term: 'nephritic syndrome', definition: 'Clinical syndrome with hematuria, proteinuria, hypertension, edema, and renal insufficiency' },
        { term: 'RBC casts', definition: 'Red blood cell casts in urine; diagnostic of glomerular inflammation' },
        { term: 'ANCA', definition: 'Anti-neutrophil cytoplasmic antibody; marker for vasculitis' },
        { term: 'crescentic GN', definition: 'Severe GN with crescent formation; rapidly progressive' },
        { term: 'pauci-immune', definition: 'Lack of immune deposits on biopsy; typical of ANCA-associated vasculitis' },
      ],
      analogies: [
        'RBC casts are like traffic jams of red blood cells stuck together in the kidney tubules - they only form in glomerular disease.',
        'ANCA-associated vasculitis is like rogue soldiers attacking blood vessels - minimal evidence left behind (pauci-immune).',
        'Crescents are like emergency repair crews that get out of control and cause scarring.',
      ],
    },
    3: {
      level: 3,
      summary: 'Glomerulonephritis involves specific pathophysiological mechanisms including immune complex deposition, complement activation, cellular proliferation, and crescent formation, with diagnosis requiring integration of clinical, serological, and histopathological findings.',
      explanation: `**Pathophysiology:**

**Immune Complex Formation:**
- In situ formation (antigen in glomerulus)
- Circulating complexes deposit in glomerulus
- Activate complement (classical and alternative pathways)
- Attract inflammatory cells

**Cellular Injury:**
- Neutrophil infiltration
- Macrophage activation
- T-cell mediated damage
- Cytokine release (IL-1, TNF-alpha)

**Complement Activation:**
- Classical pathway (immune complex-mediated)
- Alternative pathway (C3 glomerulopathies)
- Lectin pathway
- Membrane attack complex (C5b-9) formation

**Crescent Formation:**
- Severe glomerular injury breaks capillary walls
- Fibrin leaks into Bowman\'s space
- Parietal epithelial cells proliferate
- Macrophages infiltrate
- Fibroblasts deposit collagen
- Leads to glomerular sclerosis if untreated

**Specific Diseases:**

**Post-Infectious Glomerulonephritis:**
- 1-3 weeks after streptococcal infection
- Subepithelial "humps" (immune complexes)
- "Lumpy-bumpy" granular IgG and C3 staining
- Self-limited in children
- May progress in adults

**IgA Nephropathy (Berger Disease):**
- Most common primary GN worldwide
- Mesangial IgA deposits
- Variable presentation (asymptomatic hematuria to RPGN)
- Hematuria often coincides with URI
- MEST score for prognosis

**Lupus Nephritis:**
- ISN/RPS classification (Class I-VI)
- "Full house" staining (IgG, IgA, IgM, C3, C1q)
- Subendothelial deposits ("wire loops")
- Tubuloreticular inclusions on EM
- Treatment based on class

**ANCA-Associated Vasculitis:**
- Granulomatosis with polyangiitis (GPA): C-ANCA/PR3
- Microscopic polyangiitis (MPA): P-ANCA/MPO
- EGPA: Eosinophilia, asthma, P-ANCA/MPO
- Necrotizing vasculitis without immune deposits

**Anti-GBM Disease:**
- Linear IgG staining on IF
- Anti-collagen IV (alpha-3 chain) antibodies
- Rapidly progressive GN
- Pulmonary hemorrhage (Goodpasture\'s)
- Treatment: Plasma exchange + immunosuppression

**Membranoproliferative GN:**
- Pattern, not specific disease
- "Tram track" double contours
- Subendothelial deposits
- Mesangial interposition
- C3 often low

**Diagnosis:**

**Light Microscopy:**
- Hypercellularity (endocapillary, mesangial)
- Crescent formation
- Necrosis
- Sclerosis

**Immunofluorescence:**
- Pattern: Granular vs linear
- Composition: IgG, IgA, IgM, C3, C1q, C4
- Location: Mesangial, capillary wall

**Electron Microscopy:**
- Deposit location: Subepithelial, subendothelial, intramembranous, mesangial
- Humps (post-infectious)
- Fibrillary deposits (fibrillary GN)
- Organized deposits (cryoglobulins, amyloid)

**Treatment Principles:**
- Immunosuppression for immune-mediated
- Plasma exchange for anti-GBM and severe ANCA
- Supportive care
- ACE inhibitors for proteinuria
- Control blood pressure`,
      keyTerms: [
        { term: 'crescent', definition: 'Cellular proliferation in Bowman\'s space composed of parietal epithelial cells and macrophages' },
        { term: 'MEST score', definition: 'Oxford classification for IgA nephropathy: Mesangial, Endocapillary, Segmental sclerosis, Tubular atrophy' },
        { term: 'full house staining', definition: 'Positive IgG, IgA, IgM, C3, C1q on immunofluorescence; characteristic of lupus nephritis' },
        { term: 'subepithelial deposits', definition: 'Immune deposits between endothelium and podocytes; "humps" in post-infectious GN' },
        { term: 'double contours', definition: 'Duplication of glomerular basement membrane; "tram track" appearance in MPGN' },
      ],
      clinicalNotes: 'Crescentic GN with > 50% crescents and rising creatinine is a nephrology emergency requiring urgent immunosuppression. Complement levels (C3, C4) help differentiate: Low C3 suggests immune complex or C3 glomerulopathy; normal complements suggest ANCA-associated or anti-GBM.',
    },
    4: {
      level: 4,
      summary: 'Advanced glomerulonephritis management requires precise diagnosis through kidney biopsy interpretation, serological testing, and risk stratification to guide immunosuppressive therapy and monitor treatment response.',
      explanation: `**Kidney Biopsy Interpretation:**

**Native Kidney Biopsy Requirements:**
- Light microscopy (H&E, PAS, JMS, trichrome)
- Immunofluorescence (mandatory)
- Electron microscopy (mandatory for most)
- Minimum 10 glomeruli for adequacy

**Banff Classification (Allograft):**
- Acute T-cell mediated rejection
- Acute antibody-mediated rejection
- Chronic changes

**Treatment Approaches:**

**Induction Therapy for Severe GN:**
- Pulse methylprednisolone: 500-1000 mg IV x 3 days
- Cyclophosphamide: Oral or IV (NIH vs Euro-lupus protocols)
- Rituximab: Anti-CD20 (increasingly used)

**Maintenance Therapy:**
- Mycophenolate mofetil
- Azathioprine
- Low-dose steroids

**Plasma Exchange:**
- Anti-GBM disease (standard)
- ANCA vasculitis with severe renal disease (controversial)
- Indications: Cr > 5.7 mg/dL or dialysis requirement

**Specific Disease Management:**

**Lupus Nephritis:**
- Class III/IV: Induction with mycophenolate or cyclophosphamide + steroids
- Class V: Mycophenolate, possible steroids
- Target: Complete or partial remission at 6-12 months
- Maintenance: Mycophenolate or azathioprine
- Belimumab approved as add-on therapy

**ANCA-Associated Vasculitis:**
- Induction: Steroids + rituximab or cyclophosphamide
- PEXIVAS trial: Plasma exchange not beneficial overall
- Avacopan (C5aR antagonist): Alternative to high-dose steroids
- Maintenance: Rituximab or azathioprine
- Relapse common (30-50%)

**IgA Nephropathy:**
- Supportive care first (ACEi/ARB, BP control)
- High-risk (proteinuria > 1 g/day, progressive): Immunosuppression
- Options: Steroids, mycophenolate (controversial)
- Tonsillectomy (Japan)
- SGLT2 inhibitors (emerging)

**C3 Glomerulopathy:**
- Dense deposit disease vs C3 GN
- Terminal complement pathway dysregulation
- Eculizumab (anti-C5) for severe/recurrent disease
- Plasma exchange

**Monitoring Treatment Response:**

**Clinical Parameters:**
- Proteinuria (spot or 24-hour)
- Serum creatinine/eGFR
- Blood pressure
- Serologies: ANCA titers, anti-dsDNA, complements

**Repeat Biopsy:**
- Persistent activity despite treatment
- Rising creatinine during treatment
- Before considering withdrawal of immunosuppression
- Clinical trials

**Complications of Treatment:**

**Infection Risk:**
- PJP prophylaxis (TMP-SMX)
- CMV prophylaxis in high-risk
- Vaccination before immunosuppression

**Steroid Side Effects:**
- Diabetes
- Osteoporosis
- Cataracts
- Weight gain
- Psychiatric effects

**Cyclophosphamide Toxicity:**
- Hemorrhagic cystitis
- Bladder cancer (long-term)
- Infertility
- Myelosuppression
- Malignancy risk

**Rituximab Complications:**
- Infusion reactions
- Hypogammaglobulinemia
- PML (rare)
- Hepatitis B reactivation

**Prognostic Factors:**

**Good Prognosis:**
- Minimal change disease
- Post-infectious GN (children)
- Pauci-immune GN (treated early)

**Poor Prognosis:**
- Extensive crescents (> 50-75%)
- Severe chronic damage on biopsy
- Tubular atrophy and interstitial fibrosis
- Presentation with advanced renal failure
- Failure to achieve remission

**Transition to ESRD:**
- Dialysis preparation
- Transplant evaluation
- Disease recurrence risk
- Living donor considerations`,
      keyTerms: [
        { term: 'induction therapy', definition: 'Intensive initial immunosuppression to achieve remission' },
        { term: 'maintenance therapy', definition: 'Long-term immunosuppression to prevent relapse' },
        { term: 'complete remission', definition: 'Proteinuria < 0.3 g/day with normal or stable renal function' },
        { term: 'partial remission', definition: 'Proteinuria reduced by > 50% and < 3.5 g/day with stable renal function' },
        { term: 'relapse', definition: 'Recurrence of disease activity after remission achieved' },
      ],
      clinicalNotes: 'PEXIVAS trial showed plasma exchange did not improve outcomes in ANCA vasculitis, changing practice. Avacopan (C5a receptor antagonist) is now approved as a steroid-sparing alternative for ANCA vasculitis. Belimumab is approved for lupus nephritis as add-on therapy to standard immunosuppression.',
    },
    5: {
      level: 5,
      summary: 'Cutting-edge glomerulonephritis management includes precision medicine approaches, novel biologics, complement therapeutics, and understanding genetic contributions to disease susceptibility and treatment response.',
      explanation: `**Precision Medicine in GN:**

**Genetic Testing:**
- Steroid-resistant nephrotic syndrome panels
- Complement gene panels for C3 glomerulopathy
- APOL1 genotyping (African ancestry)
- COL4A mutations (Alport)

**Pharmacogenomics:**
- CYP metabolism of immunosuppressants
- TPMT for azathioprine
- Risk stratification

**Molecular Diagnostics:**

**Serum Biomarkers:**
- Anti-PLA2R (membranous monitoring)
- Anti-THSD7A (secondary MN antigen)
- Free light chains (monoclonal gammopathy)
- Soluble CD163 (macrophage activation)

**Urine Biomarkers:**
- CD80 (minimal change disease)
- TNF-like weak inducer of apoptosis (TWEAK)
- MCP-1 (lupus activity)
- Podocyte proteins (nephrin, podocalyxin)

**Novel Therapeutics:**

**B-Cell Targeting:**
- Obinutuzumab (glycoengineered anti-CD20)
- Ocrelizumab
- Belimumab (anti-BAFF) in lupus nephritis
- Atacicept (TACI-Fc, blocks BAFF/APRIL)

**Complement Therapeutics:**
- Eculizumab (anti-C5): C3 glomerulopathy, aHUS
- Ravulizumab (long-acting C5 inhibitor)
- Pegcetacoplan (C3 inhibitor)
- Avacopan (C5a receptor antagonist) in ANCA vasculitis
- Iptacopan (Factor B inhibitor) in C3G

**Proteasome Inhibitors:**
- Bortezomib: Amyloidosis, cast nephropathy
- Carfilzomib

**SGLT2 Inhibitors:**
- Emerging role in non-diabetic GN
- IgA nephropathy trials ongoing
- Podocyte effects

**Clinical Trial Design:**

**Endpoints:**
- Complete remission rates
- Doubling of creatinine
- ESRD
- Proteinuria reduction
- Histological endpoints

**Adaptive Trials:**
- Platform trials
- Basket trials
- Umbrella trials

**Rare Disease Challenges:**
- Small patient populations
- International collaborations
- Registry-based studies

**Emerging Concepts:**

**Glomerular Endotheliosis:**
- Endothelial injury in preeclampsia
- Similar findings in other diseases
- Angiogenic factors as biomarkers

**Podocyte Stress and Depletion:**
- Quantification in biopsies
- Predicts progression
- Target for therapy

**Metabolic Reprogramming:**
- Podocyte metabolism
- Mitochondrial dysfunction
- Therapeutic targets

**Single-Cell Analysis:**
- Glomerular cell types
- Disease-specific signatures
- Drug response markers

**Long-Term Outcomes:**

**Chronic GN Management:**
- Slowing progression
- Cardiovascular risk reduction
- Bone disease management
- Anemia correction

**Transplant Considerations:**
- Recurrence risk by disease type:
  - High: FSGS, membranous, dense deposit disease, oxalosis
  - Moderate: IgA, lupus, MPGN
  - Low: anti-GBM, ANCA vasculitis (if quiescent)
- Preemptive transplant timing
- Living donor risks

**Health Services Research:**
- Disparities in GN care
- Access to specialty care
- Medication adherence
- Cost-effectiveness

**Future Directions:**

**Gene Therapy:**
- Monogenic diseases (Alport, congenital NS)
- Podocyte-specific delivery

**Regenerative Medicine:**
- Podocyte regeneration
- Stem cell approaches
- Organoids for drug testing

**Artificial Intelligence:**
- Biopsy image analysis
- Risk prediction models
- Treatment selection algorithms`,
      keyTerms: [
        { term: 'precision medicine', definition: 'Tailoring treatment based on individual genetic, molecular, and clinical characteristics' },
        { term: 'avacopan', definition: 'C5a receptor antagonist approved for ANCA-associated vasculitis as steroid-sparing therapy' },
        { term: 'C3 glomerulopathy', definition: 'Disease characterized by dominant C3 deposition due to complement dysregulation' },
        { term: 'belimumab', definition: 'Anti-BAFF antibody approved for lupus nephritis' },
        { term: 'glomerular endotheliosis', definition: 'Endothelial swelling and damage; characteristic of preeclampsia' },
      ],
      clinicalNotes: `Cutting-edge GN management pearls:
1. Avacopan is a game-changer for ANCA vasculitis - allows steroid-sparing approach with equivalent efficacy
2. Eculizumab and other complement inhibitors are transforming C3 glomerulopathy and aHUS treatment
3. Anti-PLA2R antibody monitoring is now standard of care in membranous nephropathy - guides duration of immunosuppression
4. APOL1 high-risk genotype explains much of the excess FSGS and CKD in African Americans - important for genetic counseling
5. SGLT2 inhibitors are being tested in non-diabetic GN and may become standard of care for renoprotection
6. Single-cell RNA sequencing is revealing distinct podocyte states that may predict treatment response`,
    },
  },

  media: [
    {
      id: 'gn-biopsy',
      type: 'histology',
      filename: 'glomerulonephritis-biopsy.jpg',
      title: 'Glomerulonephritis Biopsy',
      description: 'Light microscopy showing hypercellularity and crescent formation',
    },
  ],

  citations: [
    {
      id: 'floege-gn',
      type: 'textbook',
      title: 'Glomerulonephritis: Classification and Management',
      source: 'Comprehensive Clinical Nephrology',
    },
    {
      id: 'kdigo-gn',
      type: 'article',
      title: 'KDIGO 2021 Clinical Practice Guideline for the Management of Glomerular Diseases',
      source: 'Kidney International',
    },
  ],

  crossReferences: [
    { targetId: 'structure-nephron', targetType: 'structure', relationship: 'parent', label: 'Nephron Structure' },
    { targetId: 'histology-glomerular-histology', targetType: 'structure', relationship: 'related', label: 'Glomerular Histology' },
    { targetId: 'pathology-diabetic-nephropathy', targetType: 'condition', relationship: 'related', label: 'Diabetic Nephropathy' },
  ],

  tags: {
    systems: ['renal', 'immune'],
    topics: ['pathology', 'clinical', 'immunology'],
    keywords: ['glomerulonephritis', 'GN', 'vasculitis', 'lupus', 'IgA nephropathy', 'ANCA'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pathology'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default glomerulonephritis;
