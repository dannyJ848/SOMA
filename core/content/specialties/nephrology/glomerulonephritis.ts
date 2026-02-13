/**
 * Glomerulonephritis - Comprehensive Educational Content
 *
 * Covers types, mechanisms, clinical presentations, and management
 * of glomerular diseases.
 */

import { EducationalContent } from '../../types';

export const glomerulonephritis: EducationalContent = {
  id: 'condition-glomerulonephritis',
  type: 'condition',
  name: 'Glomerulonephritis',
  alternateNames: ['GN', 'Glomerular Disease', 'Glomerular Nephritis', 'Nephritis'],

  levels: {
    1: {
      level: 1,
      summary: 'Glomerulonephritis is inflammation of the tiny filters in your kidneys that clean your blood.',
      explanation: `Your kidneys have millions of tiny filters called glomeruli (say: glow-MARE-yoo-lie). Each one is like a tiny coffee filter that lets water and small waste products pass through while keeping blood cells and proteins in your blood.

**What Is Glomerulonephritis?**
Glomerulonephritis (GN) happens when these tiny filters become inflamed (swollen and irritated). When they're inflamed, they don't work properly.

**What Can Cause It?**
- Your immune system attacks your kidneys by mistake
- An infection (like strep throat) can trigger it
- Certain diseases that affect the whole body
- Sometimes we don't know the cause

**What Are the Signs?**
- **Blood in your urine**: May look pink, red, or brown (like cola)
- **Swelling**: Especially in your face, hands, and feet
- **High blood pressure**: The damaged filters can't control blood pressure well
- **Protein in urine**: Makes urine foamy like bubble bath

**Two Main Types of Problems:**

1. **Nephritic Syndrome** (more inflammation):
   - Blood in urine
   - High blood pressure
   - Some swelling

2. **Nephrotic Syndrome** (leaky filters):
   - Lots of protein in urine
   - Lots of swelling
   - Not usually blood in urine

**Can It Be Treated?**
Yes! Treatment depends on the cause:
- Medicines to calm down inflammation
- Blood pressure medicines
- Treating the underlying infection or disease
- Sometimes the kidneys heal on their own`,
      keyTerms: [
        { term: 'glomeruli', definition: 'Tiny filters in your kidneys that clean blood', pronunciation: 'glow-MARE-yoo-lie' },
        { term: 'inflammation', definition: 'When part of your body becomes red, swollen, and irritated' },
        { term: 'immune system', definition: 'Your body\'s defense system that fights germs' },
        { term: 'protein', definition: 'Building blocks your body needs; normally stays in blood, not urine' },
      ],
      analogies: [
        'Think of glomeruli like tiny coffee filters. GN is when these filters get holes in them - things that should stay in your blood (like proteins) leak through.',
        'Your kidneys are like a water treatment plant with millions of mini-filters. GN is when some of these filters get damaged and start letting the wrong things through.',
      ],
      examples: [
        'A child gets strep throat, then two weeks later notices their urine is dark and their face is puffy in the morning.',
        'An adult with lupus develops kidney problems because their immune system attacks their own kidney filters.',
      ],
    },
    2: {
      level: 2,
      summary: 'Glomerulonephritis encompasses inflammatory conditions of the glomerulus, classified by presentation (nephritic vs nephrotic), histology (proliferative vs non-proliferative), and etiology (primary vs secondary).',
      explanation: `## Understanding Glomerulonephritis

The glomerulus is the filtering unit of the nephron, consisting of:
- Capillary tuft (where blood is filtered)
- Bowman's capsule (collects filtrate)
- Mesangium (supporting cells)

Glomerulonephritis (GN) refers to immune-mediated inflammation that damages these structures.

## Classification Approaches

### By Clinical Presentation
| Syndrome | Proteinuria | Hematuria | Edema | HTN |
|----------|-------------|-----------|-------|-----|
| Nephritic | Mild (<3.5g/d) | ++ (RBC casts) | Mild | Marked |
| Nephrotic | Heavy (>3.5g/d) | - or + | Severe | Variable |
| RPGN | Variable | +++ | Variable | Variable |

### By Histology
- **Proliferative GN**: Cell proliferation (IgA, post-infectious, membranoproliferative)
- **Non-proliferative GN**: No cell proliferation (minimal change, membranous, FSGS)

### By Etiology
- **Primary GN**: Disease originates in kidney
- **Secondary GN**: Kidney involvement from systemic disease (lupus, diabetes, vasculitis)

## Major Types of Glomerulonephritis

### IgA Nephropathy (Berger's Disease)
- Most common GN worldwide
- Presents with gross hematuria during/after upper respiratory infection
- IgA deposits in mesangium
- Variable course: 30-40% progress to ESKD over 20 years

### Post-Streptococcal GN
- Occurs 1-3 weeks after strep pharyngitis or skin infection
- Nephritic syndrome with smoky urine, edema, hypertension
- Usually resolves completely in children
- Low C3 complement (normalizes in 6-8 weeks)

### Membranous Nephropathy
- Most common cause of nephrotic syndrome in white adults
- "Spike and dome" on electron microscopy
- 70% have anti-PLA2R antibodies (primary MN)
- 30% secondary to malignancy, infections, drugs, lupus

### Minimal Change Disease
- Most common nephrotic syndrome in children
- Normal light microscopy, effacement of foot processes on EM
- Excellent response to steroids (>90%)

### Focal Segmental Glomerulosclerosis (FSGS)
- Most common GN leading to ESKD in African Americans
- "Focal" (some glomeruli) + "Segmental" (part of glomerulus) scarring
- Primary vs. secondary (obesity, HIV, reflux)
- High recurrence rate after transplant (primary)

### Lupus Nephritis
- Kidney involvement in SLE (50-75% of patients)
- Class I-VI based on histology
- Class IV (diffuse proliferative) most severe
- Treatment: Immunosuppression (steroids, mycophenolate, cyclophosphamide)

## Diagnostic Approach

1. **Urinalysis**: Hematuria, proteinuria, casts
2. **Serum chemistries**: Creatinine, albumin
3. **Complement levels**: C3, C4 (low in certain GN)
4. **Autoantibodies**: ANA, anti-dsDNA, ANCA, anti-GBM
5. **Serologies**: Hepatitis B, C, HIV
6. **Kidney biopsy**: Essential for diagnosis and classification`,
      keyTerms: [
        { term: 'nephritic syndrome', definition: 'GN presenting with hematuria, RBC casts, mild proteinuria, hypertension, oliguria' },
        { term: 'nephrotic syndrome', definition: 'GN presenting with heavy proteinuria (>3.5g/d), edema, hypoalbuminemia, hyperlipidemia' },
        { term: 'RPGN', definition: 'Rapidly Progressive GN; kidney failure over days to weeks, requires urgent treatment' },
        { term: 'RBC casts', definition: 'Clumps of red blood cells in urine; indicates glomerular bleeding' },
        { term: 'PLA2R', definition: 'Phospholipase A2 Receptor; target antigen in 70% of primary membranous nephropathy' },
        { term: 'complement', definition: 'Immune system proteins; low levels indicate certain types of GN' },
      ],
      analogies: [
        'Nephritic vs. nephrotic is like a dam: nephritic = small holes letting blood through; nephrotic = large holes letting proteins flood out.',
      ],
    },
    3: {
      level: 3,
      summary: 'Glomerular pathology involves immune complex deposition, complement activation, or antibody-mediated injury with specific patterns on immunofluorescence and electron microscopy that guide diagnosis and targeted therapy.',
      explanation: `## Mechanisms of Glomerular Injury

### Immune Complex-Mediated
**Subepithelial deposits:**
- Membranous nephropathy (in situ formation: PLA2R antibodies)
- Post-infectious GN (circulating immune complexes)
- Pattern: Granular IgG/C3 on IF

**Subendothelial deposits:**
- Lupus nephritis (Class III/IV)
- Type I MPGN
- Low complement; active sediment

**Mesangial deposits:**
- IgA nephropathy (mesangial IgA)
- IgA vasculitis (Henoch-Schonlein purpura)

### Anti-GBM Disease
- Antibodies against type IV collagen (alpha-3 chain)
- Linear IgG staining on IF
- Goodpasture syndrome when lungs involved
- Rapidly progressive course; plasma exchange critical

### Pauci-Immune (ANCA-Associated)
- Minimal/no immune deposits on IF
- Associated with ANCA (MPO or PR3)
- GPA (granulomatosis with polyangiitis), MPA (microscopic polyangiitis)
- Crescent formation common

### Complement-Mediated
- C3 glomerulopathy (C3GN, dense deposit disease)
- Alternative pathway dysregulation
- C3 dominant staining, no immunoglobulin
- May respond to complement inhibitors

## Histologic Patterns and Significance

### Light Microscopy Patterns
| Pattern | Diseases | Significance |
|---------|----------|--------------|
| Diffuse proliferative | Lupus IV, PIGN, MPGN | Active inflammation |
| Crescentic | Anti-GBM, ANCA, severe lupus | RPGN, urgent treatment |
| Membranous thickening | Membranous nephropathy | Subepithelial deposits |
| Mesangial expansion | IgA nephropathy, diabetic | Mesangial deposits |
| Segmental sclerosis | FSGS | Podocyte injury |

### Immunofluorescence Patterns
| Pattern | Diseases |
|---------|----------|
| Granular IgG/C3 | Immune complex (membranous, lupus, PIGN) |
| Mesangial IgA | IgA nephropathy |
| Linear IgG | Anti-GBM disease |
| Pauci-immune (negative) | ANCA vasculitis |
| C3 dominant | C3 glomerulopathy |
| "Full house" (IgG, IgA, IgM, C3, C1q) | Lupus nephritis |

### Electron Microscopy
| Location of Deposits | Diseases |
|---------------------|----------|
| Subepithelial (between podocyte and GBM) | Membranous, PIGN (humps) |
| Subendothelial (between endothelium and GBM) | Lupus III/IV, MPGN I |
| Intramembranous | Dense deposit disease |
| Mesangial | IgA nephropathy |
| Foot process effacement | Minimal change, FSGS |

## Specific Disease Pathophysiology

### IgA Nephropathy
1. Galactose-deficient IgA1 produced
2. Anti-glycan antibodies form immune complexes
3. Complexes deposit in mesangium
4. Complement activation, mesangial proliferation
5. Variable progression to sclerosis

**Oxford Classification (MEST-C):**
- M: Mesangial hypercellularity
- E: Endocapillary proliferation
- S: Segmental sclerosis
- T: Tubular atrophy/interstitial fibrosis
- C: Crescents

### ANCA Vasculitis
1. ANCA activates primed neutrophils
2. Neutrophils adhere to endothelium
3. Release of proteases and oxidants
4. Necrotizing glomerular injury
5. Crescent formation (Bowman's capsule rupture)

**PR3-ANCA (GPA)**: Upper/lower respiratory involvement, ENT disease
**MPO-ANCA (MPA)**: Predominantly renal, pulmonary capillaritis

### Membranous Nephropathy
- Anti-PLA2R (70%) or anti-THSD7A (2-3%) antibodies
- Subepithelial immune complex deposition
- Complement activation (C5b-9)
- Podocyte injury → proteinuria
- GBM reaction → spike and dome pattern

## Laboratory Workup

### Complement Profile
| Pattern | Diseases |
|---------|----------|
| Low C3, normal C4 | PIGN, C3GN, MPGN II |
| Low C3 and C4 | Lupus, cryoglobulinemia, MPGN I |
| Normal complement | IgA, FSGS, minimal change, membranous |

### Autoantibody Panel
- ANA, anti-dsDNA, anti-Smith: Lupus
- ANCA (PR3, MPO): ANCA vasculitis
- Anti-GBM: Anti-GBM disease
- Anti-PLA2R: Primary membranous
- Cryoglobulins: Cryoglobulinemic GN (often HCV-related)`,
      keyTerms: [
        { term: 'crescents', definition: 'Collections of cells in Bowman\'s space indicating severe injury; hallmark of RPGN' },
        { term: 'anti-GBM', definition: 'Antibodies against glomerular basement membrane; causes linear IF staining and RPGN' },
        { term: 'pauci-immune', definition: 'Little or no immune staining on IF; characteristic of ANCA vasculitis' },
        { term: 'Oxford classification', definition: 'MEST-C scoring system for IgA nephropathy predicting prognosis' },
        { term: 'C5b-9', definition: 'Membrane attack complex; final product of complement causing cell injury' },
        { term: 'foot process effacement', definition: 'Loss of podocyte foot processes on EM; causes proteinuria' },
      ],
      clinicalNotes: 'Always check ANCA and anti-GBM in any patient with RPGN - early treatment is critical. Low complement suggests lupus, PIGN, MPGN, or cryoglobulinemia. "Full house" IF with low C3/C4 is virtually diagnostic of lupus nephritis.',
    },
    4: {
      level: 4,
      summary: 'Contemporary glomerulonephritis management employs disease-specific immunosuppressive regimens, targeted therapies based on molecular mechanisms, and individualized approaches informed by biopsy findings, serology, and response assessment.',
      explanation: `## Treatment Principles in GN

### General Management
1. **Blood pressure control**: Target <130/80 mmHg
2. **Proteinuria reduction**: ACEi/ARB (first-line), SGLT2i
3. **Edema management**: Loop diuretics, salt restriction
4. **Thromboprophylaxis**: Consider in severe nephrotic syndrome (albumin <2.5 g/dL)
5. **Immunosuppression**: Disease-specific

### Disease-Specific Treatment

## IgA Nephropathy

**Supportive Care (All Patients):**
- ACEi/ARB (target proteinuria <1 g/day)
- SGLT2 inhibitors (DAPA-CKD, EMPA-KIDNEY benefit)
- Blood pressure control

**Immunosuppression (High-Risk Patients):**
Indications: Proteinuria >1 g/day despite 3-6 months of supportive care

- **TESTING trial steroids**: 6-month methylprednisolone taper; reduces ESKD risk but significant infection risk
- **Mycophenolate mofetil**: Limited evidence; used in some centers
- **Sparsentan**: Dual ET/AT1 blocker; 49% proteinuria reduction (PROTECT trial)
- **Targeted-release budesonide** (Tarpeyo): Ileal release, 31% proteinuria reduction

## Membranous Nephropathy

**Risk Stratification:**
- Low risk: Anti-PLA2R negative or low titer, proteinuria <4 g/day
- Medium risk: Positive PLA2R, proteinuria 4-8 g/day
- High risk: High PLA2R titer, proteinuria >8 g/day, declining eGFR

**Conservative Management (Low Risk):**
- ACEi/ARB
- 6-month observation (30% spontaneous remission)

**Immunosuppression (Medium-High Risk):**
- **Rituximab** (MENTOR trial): First-line; anti-CD20 B-cell depletion
- **Cyclophosphamide + steroids** (Ponticelli regimen): Effective but toxicity concerns
- **Calcineurin inhibitors**: Cyclosporine or tacrolimus; high relapse rate

**Monitoring:**
- Anti-PLA2R titer correlates with disease activity
- Declining titers precede clinical remission by months
- Immunologic remission (negative PLA2R) predicts sustained response

## ANCA Vasculitis

**Induction (Active Disease):**
| Severity | Treatment |
|----------|-----------|
| Limited (no organ-threatening) | Rituximab OR cyclophosphamide + steroids |
| Severe (organ-threatening) | Rituximab OR cyclophosphamide + high-dose steroids |
| Life-threatening (DAH, RPGN) | Above + plasmapheresis (consider PLEX trial results) |

**Key Trials:**
- RAVE/RITUXVAS: Rituximab non-inferior to cyclophosphamide for induction
- PEXIVAS: Plasma exchange no mortality benefit; lower steroid dose safe
- LoVAS: Low-dose steroids with rituximab may be sufficient

**Maintenance:**
- Rituximab preferred (MAINRITSAN trials): Every 6 months or CD19-guided
- Azathioprine: Alternative if rituximab not available
- Duration: At least 2 years; longer for PR3-ANCA and relapsing disease

**Avacopan** (C5a receptor inhibitor):
- ADVOCATE trial: Superior to steroids for remission maintenance
- Allows steroid-sparing regimen
- FDA approved 2021

## Lupus Nephritis

**Class-Based Treatment:**

| Class | Histology | Treatment |
|-------|-----------|-----------|
| I-II | Minimal mesangial | Treat extrarenal lupus only |
| III | Focal proliferative | Induction + maintenance IS |
| IV | Diffuse proliferative | Aggressive induction + maintenance |
| V | Membranous | IS if significant proteinuria |
| VI | Sclerotic | Supportive; prepare for RRT |

**Induction (Class III-IV):**
- Mycophenolate mofetil (preferred) OR IV cyclophosphamide (Euro-lupus or NIH)
- High-dose steroids (methylprednisolone pulses)
- Add belimumab (anti-BLyS) or voclosporin (CNI) for enhanced response

**Voclosporin (Lupkynis):**
- Novel CNI; AURORA trial showed 41% complete response vs 23% placebo
- Added to standard MMF + steroids
- Allows faster steroid taper

**Maintenance:**
- Mycophenolate mofetil (preferred) OR azathioprine
- Low-dose prednisone
- Continue hydroxychloroquine (reduces flares)
- Duration: Minimum 3 years after complete remission

**Obinutuzumab:**
- Anti-CD20 (glycoengineered, more potent than rituximab)
- NOBILITY trial: Improved renal response in proliferative LN

## Anti-GBM Disease

**Emergency Treatment:**
- Plasmapheresis daily until anti-GBM antibodies negative (typically 2-3 weeks)
- High-dose IV methylprednisolone
- Cyclophosphamide

**Prognosis Determinants:**
- Initial creatinine: If dialysis-dependent at presentation, <10% recover
- Percentage of crescents
- Presence of pulmonary hemorrhage

## FSGS

**Approach:**
1. Rule out secondary causes (obesity, reflux, HIV, drugs)
2. Optimize BP, reduce proteinuria (ACEi/ARB, SGLT2i)
3. Immunosuppression for primary FSGS with nephrotic syndrome:
   - High-dose prednisone (4-16 weeks)
   - Calcineurin inhibitors if steroid-resistant
   - Rituximab under investigation

**Genetic Testing:**
- Consider in steroid-resistant, familial, or syndromic cases
- Podocyte gene mutations (NPHS2, WT1, etc.) predict poor response to IS`,
      keyTerms: [
        { term: 'rituximab', definition: 'Anti-CD20 monoclonal antibody; first-line for ANCA vasculitis and membranous nephropathy' },
        { term: 'voclosporin', definition: 'Novel calcineurin inhibitor approved for lupus nephritis; improves complete response rates' },
        { term: 'avacopan', definition: 'C5a receptor inhibitor for ANCA vasculitis; allows steroid-sparing' },
        { term: 'Ponticelli regimen', definition: 'Alternating cyclophosphamide and steroids for membranous nephropathy' },
        { term: 'Euro-lupus', definition: 'Lower-dose IV cyclophosphamide regimen for lupus nephritis (500 mg q2wk x 6)' },
        { term: 'sparsentan', definition: 'Dual endothelin/angiotensin receptor antagonist; FDA approved for IgA nephropathy' },
      ],
      clinicalNotes: 'Monitor anti-PLA2R titers in membranous nephropathy - they predict response before proteinuria improves. Use PEXIVAS low-dose steroid regimen for ANCA vasculitis. Consider voclosporin for lupus nephritis for faster response and steroid-sparing. In anti-GBM disease, initiate plasmapheresis immediately while awaiting antibody confirmation.',
    },
    5: {
      level: 5,
      summary: 'Advanced glomerular disease management integrates molecular diagnostics, biomarker-guided therapy, novel targeted agents, and precision medicine approaches to individualize treatment and optimize long-term kidney survival.',
      explanation: `## Molecular Diagnostics in GN

### Genetic Testing Indications
**FSGS:**
- Steroid-resistant nephrotic syndrome
- Family history of kidney disease
- Syndromic features (deafness, eye abnormalities)
- Pediatric-onset

**Common Genes:**
| Gene | Protein | Phenotype |
|------|---------|-----------|
| NPHS2 | Podocin | AR FSGS, steroid-resistant |
| WT1 | WT1 | Denys-Drash, Frasier syndrome |
| INF2 | Formin | AD FSGS, CMT neuropathy |
| COL4A3/4/5 | Type IV collagen | Alport syndrome, thin GBM |
| APOL1 (G1, G2) | APOL1 | FSGS, collapsing GN, HIVAN |
| TRPC6 | TRPC6 channel | AD FSGS, late-onset |

**Implications:**
- Genetic FSGS typically does not respond to immunosuppression
- High recurrence risk post-transplant (some variants)
- Genetic counseling for family planning
- Consider genotype in living donor evaluation

### Alport Syndrome
- X-linked (COL4A5): Most common; hearing loss, lenticonus
- Autosomal recessive (COL4A3/4)
- Autosomal dominant (rare)
- Definitive diagnosis by genetic testing or kidney biopsy (EM: GBM lamellation)
- ACEi/ARB delay progression; gene therapy in development

### C3 Glomerulopathy
**Genetic workup:**
- Complement gene sequencing (CFH, CFI, CFB, MCP, CFHR1-5)
- Screening for C3 nephritic factor and other autoantibodies

**Targeted Therapy:**
- Eculizumab (anti-C5): Variable response
- Iptacopan (Factor B inhibitor): Promising early data
- Pegcetacoplan (C3 inhibitor): Under investigation

## Biomarker-Guided Therapy

### Membranous Nephropathy
**Anti-PLA2R Monitoring:**
- Baseline titer predicts spontaneous remission risk
- Declining titers predict immunologic remission (months before clinical response)
- Persistent high titers after treatment → consider second-line agent
- Post-transplant surveillance for recurrence

**Risk Model (Toronto Score):**
- Integrates baseline proteinuria, eGFR, anti-PLA2R
- Guides watchful waiting vs. early immunosuppression

### IgA Nephropathy
**Galactose-Deficient IgA1 (Gd-IgA1):**
- Elevated in most patients
- Correlates with disease activity
- May guide future targeted therapies

**International IgAN Prediction Tool:**
- Predicts 5-year ESKD risk
- Variables: eGFR, proteinuria, BP, MEST-C scores, race
- Online calculator available

### ANCA Vasculitis
**ANCA Titers:**
- Rising titers may precede relapse (controversial)
- PR3-ANCA: Higher relapse rate than MPO
- Persistent positivity after treatment → extended maintenance

**Soluble CD163:**
- Marker of macrophage activation
- Correlates with active crescentic GN
- May guide treatment intensity

## Emerging Therapeutics

### B-Cell Targeting
| Agent | Mechanism | Status |
|-------|-----------|--------|
| Obinutuzumab | Anti-CD20 (glycoengineered) | Approved for LN |
| Ofatumumab | Anti-CD20 | In trials |
| Inebilizumab | Anti-CD19 | Broader B-cell depletion |
| Belimumab | Anti-BLyS | Approved for LN |
| Telitacicept | TACI-Fc (BLyS/APRIL) | Trials in IgA, LN |

### Complement Inhibitors
| Agent | Target | Disease |
|-------|--------|---------|
| Eculizumab | C5 | aHUS, C3GN |
| Ravulizumab | C5 (long-acting) | aHUS |
| Avacopan | C5aR | ANCA vasculitis |
| Iptacopan | Factor B | C3GN, IgAN |
| Narsoplimab | MASP-2 | IgAN, aHUS |

### Endothelin/RAAS Antagonists
- Sparsentan: Dual ETA/AT1 blocker; approved for IgAN
- Atrasentan: ETA blocker; reductions in proteinuria, fluid retention concern
- Zibotentan + dapagliflozin: Combination under investigation

### Plasma Cell/Antibody Targeting
- Daratumumab: Anti-CD38; case reports in refractory anti-GBM, MN
- Felzartamab: Anti-CD38; under investigation
- Imlifidase (IdeS): IgG-cleaving enzyme; rapid antibody removal

### Podocyte-Targeted Therapy
- Abatacept (CTLA4-Ig): Initial promise in FSGS, larger trials negative
- VB-201: Novel podocyte-protective agent
- Research into Rho kinase inhibitors, TRPC6 blockers

## Transplant Considerations in GN

### Recurrence Rates
| Disease | Recurrence Risk | Management |
|---------|-----------------|------------|
| FSGS | 30-50% primary | Plasmapheresis, rituximab |
| IgA nephropathy | 20-60% histologic | Generally benign; supportive care |
| Membranous | 10-30% | Anti-PLA2R monitoring, rituximab |
| MPGN/C3GN | 30-70% | Complement blockade considered |
| Anti-GBM | <5% (if antibody-negative >6mo) | Safe to transplant |
| ANCA vasculitis | 10-20% | Moderate-low risk |
| Lupus nephritis | 10-30% | Control disease activity pre-transplant |

### Living Donor Evaluation
- Screen for GN etiology in donors
- Genetic testing for hereditary nephritis (COL4A mutations)
- APOL1 testing in African American donors (informed consent, controversial)

## Special Populations

### Pregnancy in GN
- Preconception counseling essential
- Stable disease >6 months before conception
- Switch to pregnancy-safe medications (hydroxychloroquine, azathioprine)
- Stop MMF, ACEi/ARB, rituximab before conception
- High-risk obstetric monitoring

### Pediatric GN
- Minimal change disease: Most common nephrotic; excellent steroid response
- Post-streptococcal GN: Usually self-limited
- IgA nephropathy: May be more aggressive than adult-onset
- Genetic testing important in steroid-resistant cases

### GN in Transplant Recipients
- Recurrent GN
- De novo GN (anti-GBM rare but aggressive)
- Donor-derived GN (rare; transmitted from donor)`,
      keyTerms: [
        { term: 'telitacicept', definition: 'TACI-Fc fusion protein blocking BLyS and APRIL; under investigation for IgA nephropathy and lupus nephritis' },
        { term: 'iptacopan', definition: 'Factor B inhibitor for alternative complement pathway; promising for C3 glomerulopathy' },
        { term: 'imlifidase', definition: 'IgG-cleaving enzyme for rapid antibody removal; potential in anti-GBM disease and transplant desensitization' },
        { term: 'International IgAN Prediction Tool', definition: 'Validated risk calculator integrating clinical, laboratory, and histologic variables' },
        { term: 'APOL1 donor genotyping', definition: 'Testing living kidney donors for high-risk variants associated with accelerated kidney disease' },
        { term: 'obinutuzumab', definition: 'Glycoengineered anti-CD20 with enhanced antibody-dependent cytotoxicity; approved for lupus nephritis' },
      ],
      clinicalNotes: `Advanced practice points:
1. Genetic testing in FSGS changes management - genetic forms rarely respond to immunosuppression
2. Anti-PLA2R monitoring in MN allows personalized therapy - rising titers after rituximab may prompt early retreatment
3. Complement gene testing in C3GN guides targeted complement blockade selection
4. IgAN Prediction Tool helps identify patients who need aggressive therapy early
5. Consider genotype in living donor evaluation - COL4A and APOL1 testing increasingly important
6. Emerging combination regimens (SGLT2i + endothelin blockade) may become standard for proteinuric GN
7. Post-transplant recurrence protocols (prophylactic rituximab, plasmapheresis) reduce graft loss in high-risk FSGS`,
    },
  },

  media: [
    {
      id: 'gn-if-patterns',
      type: 'diagram',
      filename: 'gn-if-patterns.svg',
      title: 'Immunofluorescence Patterns in GN',
      description: 'Visual guide to IF staining patterns and associated diseases',
    },
    {
      id: 'gn-em-deposits',
      type: 'diagram',
      filename: 'gn-em-deposits.svg',
      title: 'Electron Microscopy Deposit Locations',
      description: 'Schematic showing subepithelial, subendothelial, and mesangial deposits',
    },
  ],

  citations: [
    {
      id: 'kdigo-gn-2021',
      type: 'article',
      title: 'KDIGO 2021 Clinical Practice Guideline for the Management of Glomerular Diseases',
      authors: ['KDIGO GN Work Group'],
      source: 'Kidney International',
      url: 'https://kdigo.org/guidelines/gn/',
    },
    {
      id: 'mentor-trial',
      type: 'article',
      title: 'Rituximab or Cyclosporine in the Treatment of Membranous Nephropathy',
      authors: ['Fervenza FC', 'et al.'],
      source: 'New England Journal of Medicine',
      page: '381:36-46',
    },
    {
      id: 'heptinstall-gn',
      type: 'textbook',
      title: 'Glomerular Diseases',
      source: "Heptinstall's Pathology of the Kidney",
      chapter: '5-10',
    },
  ],

  crossReferences: [
    { targetId: 'concept-nephrotic-nephritic-syndrome', targetType: 'topic', relationship: 'related', label: 'Nephrotic vs Nephritic' },
    { targetId: 'condition-chronic-kidney-disease', targetType: 'condition', relationship: 'related', label: 'CKD Progression' },
    { targetId: 'condition-acute-kidney-injury', targetType: 'condition', relationship: 'related', label: 'RPGN/AKI' },
    { targetId: 'process-kidney-transplantation', targetType: 'process', relationship: 'related', label: 'Transplant Recurrence' },
  ],

  tags: {
    systems: ['urinary', 'renal', 'immune'],
    topics: ['nephrology', 'immunology', 'pathophysiology', 'internal medicine'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pathology'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default glomerulonephritis;
