/**
 * Nephrotic vs Nephritic Syndrome - Comprehensive Educational Content
 *
 * Covers the clinical distinction between nephrotic and nephritic presentations,
 * pathophysiology, differential diagnosis, and management approaches.
 */

import { EducationalContent } from '../../types';

export const nephroticNephriticSyndrome: EducationalContent = {
  id: 'concept-nephrotic-nephritic-syndrome',
  type: 'concept',
  name: 'Nephrotic vs Nephritic Syndrome',
  alternateNames: ['Glomerular Syndromes', 'Nephrotic Syndrome', 'Nephritic Syndrome', 'Glomerular Presentations'],

  levels: {
    1: {
      level: 1,
      summary: 'Nephrotic and nephritic syndromes are two different ways your kidney filters can be damaged - one causes protein to leak out, the other causes blood to leak out.',
      explanation: `Your kidneys have millions of tiny filters called glomeruli. When these filters get sick, they can show problems in two main ways:

## Nephrotic Syndrome - "Leaky to Protein"

Imagine your kidney filter develops large holes. Proteins (which are normally too big to pass through) start leaking into your urine.

**What happens:**
- **Foamy urine**: Protein makes urine bubbly, like soapy water
- **Swelling (edema)**: Especially around eyes in morning, legs by evening
- **Weight gain**: From fluid retention
- **High cholesterol**: Body makes more fat when losing protein

**Why you swell:**
Proteins in your blood act like sponges, keeping water inside blood vessels. When you lose protein, water leaks out into tissues causing swelling.

## Nephritic Syndrome - "Leaky to Blood"

Imagine your kidney filter becomes inflamed (red and angry). Red blood cells squeeze through, and the inflamed filter doesn't work well.

**What happens:**
- **Blood in urine**: May look pink, red, or brown (like cola or tea)
- **Less urine**: Inflammation makes filtering harder
- **High blood pressure**: Can't get rid of salt and water properly
- **Some swelling**: But usually less than nephrotic

**Key Difference:**
- **Nephrotic** = Losing PROTEIN (swelling is the big problem)
- **Nephritic** = Losing BLOOD (high blood pressure is the big problem)

Sometimes both can happen together!`,
      keyTerms: [
        { term: 'nephrotic', definition: 'Kidney problem where lots of protein leaks into urine, causing swelling' },
        { term: 'nephritic', definition: 'Kidney problem where blood and some protein leak into urine, causing high blood pressure' },
        { term: 'edema', definition: 'Swelling caused by fluid collecting in body tissues', pronunciation: 'eh-DEE-mah' },
        { term: 'proteinuria', definition: 'Protein in the urine; makes urine foamy' },
      ],
      analogies: [
        'Think of your kidney filter like a coffee filter. Nephrotic syndrome is when the filter gets big holes and lets coffee grounds (protein) through. Nephritic syndrome is when the filter is torn and bleeds into your coffee (blood in urine).',
        'Nephrotic is like a screen door with holes too big - bugs (proteins) get through. Nephritic is like a broken screen door that also cuts your hand (bleeds).',
      ],
      examples: [
        'A child wakes up with puffy eyelids and foamy urine - this suggests nephrotic syndrome.',
        'A teenager has cola-colored urine and a headache from high blood pressure after a strep throat infection - this suggests nephritic syndrome.',
      ],
    },
    2: {
      level: 2,
      summary: 'Nephrotic syndrome is characterized by heavy proteinuria (>3.5 g/day), hypoalbuminemia, edema, and hyperlipidemia; nephritic syndrome presents with hematuria, hypertension, oliguria, and mild proteinuria.',
      explanation: `## Nephrotic Syndrome

### Defining Criteria
1. **Proteinuria >3.5 g/day** (or UPCR >3.5 g/g)
2. **Hypoalbuminemia** (serum albumin <3 g/dL)
3. **Edema** (often severe, anasarca)
4. **Hyperlipidemia** (elevated cholesterol and triglycerides)

### Pathophysiology
The glomerular filtration barrier normally retains proteins:
- Podocytes and their slit diaphragms
- Glomerular basement membrane (GBM)
- Negative charge barrier

In nephrotic syndrome, this barrier is damaged → massive protein loss.

**Consequences of Protein Loss:**
- Hypoalbuminemia → decreased oncotic pressure → edema
- Loss of antithrombin III → hypercoagulability
- Loss of immunoglobulins → infection susceptibility
- Loss of thyroxine-binding globulin → altered thyroid tests

**Hyperlipidemia Mechanism:**
Liver increases lipoprotein synthesis to compensate for protein loss.

### Common Causes
| Disease | Age Group | Notes |
|---------|-----------|-------|
| Minimal Change Disease | Children (#1) | Excellent steroid response |
| FSGS | Adults (esp. Black) | Variable course |
| Membranous Nephropathy | White adults (#1) | Anti-PLA2R antibodies |
| Diabetic Nephropathy | Adults | With diabetes history |
| Amyloidosis | Elderly | Systemic disease |

## Nephritic Syndrome

### Defining Features
1. **Hematuria** (often with RBC casts)
2. **Hypertension** (often acute onset)
3. **Oliguria** (decreased urine output)
4. **Azotemia** (elevated BUN/creatinine)
5. **Mild proteinuria** (<3.5 g/day)

### Pathophysiology
Inflammation of glomeruli causes:
- Endothelial and mesangial cell proliferation
- Inflammatory cell infiltration
- GBM damage → RBCs pass through

**Hypertension Mechanism:**
Damaged glomeruli cannot filter sodium/water → volume expansion → HTN

### Common Causes
| Disease | Timing | Notes |
|---------|--------|-------|
| Post-Streptococcal GN | 1-3 weeks after strep | Low C3, resolves |
| IgA Nephropathy | During URI | Synpharyngitic hematuria |
| Lupus Nephritis | Variable | "Full house" on IF |
| ANCA Vasculitis | Any | Rapidly progressive |
| Anti-GBM Disease | Any | Linear IgG on IF |

## Comparison Table

| Feature | Nephrotic | Nephritic |
|---------|-----------|-----------|
| Proteinuria | >3.5 g/day (heavy) | <3.5 g/day (mild) |
| Hematuria | Minimal or absent | Prominent, RBC casts |
| Edema | Severe (anasarca) | Mild |
| Blood Pressure | Normal or mild elevation | Often elevated |
| Serum Albumin | Low (<3 g/dL) | Normal or mildly low |
| Cholesterol | Elevated | Normal |
| Complement | Usually normal | Often low (PSGN, lupus) |
| Progression | Variable | Can be rapid (RPGN) |

## Overlap Syndromes
Some diseases can present with features of both:
- **Membranoproliferative GN (MPGN)**
- **Severe lupus nephritis (Class IV)**
- **Fibrillary GN**
- **Advanced diabetic nephropathy**`,
      keyTerms: [
        { term: 'anasarca', definition: 'Severe, generalized edema affecting the whole body', pronunciation: 'an-ah-SAR-kah' },
        { term: 'RBC casts', definition: 'Clumps of red blood cells in a cylindrical mold; indicates glomerular bleeding' },
        { term: 'oliguria', definition: 'Producing less than 400 mL of urine per day' },
        { term: 'hypoalbuminemia', definition: 'Low albumin in the blood, usually from urinary loss' },
        { term: 'UPCR', definition: 'Urine Protein-to-Creatinine Ratio; estimates 24-hour proteinuria from spot sample' },
        { term: 'azotemia', definition: 'Elevated nitrogen waste products (BUN, creatinine) in blood' },
      ],
      analogies: [
        'Nephrotic is like a colander with holes too big - pasta water (protein) drains out. Nephritic is like an angry, inflamed pipe that clogs and leaks blood.',
      ],
    },
    3: {
      level: 3,
      summary: 'The glomerular filtration barrier components determine syndrome presentation: podocyte injury causes nephrotic syndrome while endocapillary inflammation causes nephritic syndrome, with distinct pathogenic mechanisms and clinical implications.',
      explanation: `## Glomerular Filtration Barrier Structure

### Components (from Blood to Bowman's Space)
1. **Fenestrated endothelium**: 70-100 nm pores, negatively charged glycocalyx
2. **Glomerular basement membrane (GBM)**: Type IV collagen, laminin, heparan sulfate (negative charge)
3. **Podocytes**: Interdigitating foot processes connected by slit diaphragm (nephrin, podocin)

### Barrier Properties
- **Size selectivity**: Molecules >70 kDa largely retained
- **Charge selectivity**: Negative charge repels anionic proteins (albumin)
- **Slit diaphragm**: Final barrier; 4-11 nm pores

## Podocyte Injury → Nephrotic Syndrome

### Mechanisms of Podocyte Damage
**Minimal Change Disease:**
- T-cell derived permeability factor (unidentified)
- Loss of podocyte foot process architecture (effacement)
- Charge barrier dysfunction
- No immune deposits

**FSGS:**
- Podocyte depletion/detachment
- Cytoskeletal disruption (TRPC6, INF2 mutations)
- Circulating factor (suPAR controversial)
- Secondary: Hyperfiltration injury

**Membranous Nephropathy:**
- Anti-PLA2R antibodies target podocyte antigen
- Subepithelial immune deposits
- C5b-9 mediated podocyte injury
- No inflammation (non-proliferative)

### Consequences of Massive Proteinuria
**Hypoalbuminemia Cascade:**
- Hepatic albumin synthesis increases but cannot compensate
- Serum albumin <3 g/dL → reduced oncotic pressure
- Starling forces favor fluid extravasation → edema

**Sodium Retention:**
- Underfill hypothesis: Hypoalbuminemia → decreased effective circulatory volume → RAAS activation
- Overfill hypothesis: Primary renal sodium retention (ENaC activation in CCD)
- Both likely contribute

**Hypercoagulability:**
- Loss of antithrombin III (molecular weight similar to albumin)
- Loss of protein C and S
- Increased hepatic synthesis of fibrinogen, factor V, VIII
- Platelet hyperaggregability
- Risk: Renal vein thrombosis (especially membranous), PE, DVT

**Hyperlipidemia:**
- Increased hepatic lipoprotein synthesis (VLDL, LDL)
- Decreased lipoprotein lipase activity
- Urinary loss of HDL
- Total cholesterol often >300 mg/dL

## Endocapillary Inflammation → Nephritic Syndrome

### Mechanisms of Glomerular Inflammation
**Immune Complex Deposition:**
- Post-streptococcal GN: Subepithelial "humps," mesangial deposits
- Lupus nephritis: Subendothelial and mesangial deposits
- IgA nephropathy: Mesangial IgA deposition

**ANCA-Mediated:**
- Neutrophil activation by ANCA
- Necrotizing injury without deposits (pauci-immune)
- Crescent formation

**Anti-GBM:**
- Linear IgG along GBM
- Complement activation
- Severe necrotizing injury

### Inflammatory Consequences
**Cell Proliferation:**
- Endothelial swelling
- Mesangial proliferation
- Infiltrating leukocytes
- → Decreased capillary luminal area → decreased GFR

**GBM Disruption:**
- Inflammatory damage to basement membrane
- RBCs pass through → hematuria, RBC casts
- Some protein leakage (usually <3.5 g/day)

**Crescent Formation (RPGN):**
- Severe injury ruptures Bowman's capsule
- Fibrin/cells accumulate in Bowman's space
- Parietal epithelial cell proliferation
- Rapidly destroys nephron if untreated

### Sodium/Volume Retention in Nephritic Syndrome
- Decreased GFR → decreased filtered sodium load
- Increased proximal tubule reabsorption (angiotensin II)
- Volume expansion → hypertension
- Unlike nephrotic: Albumin often near-normal → less edema despite volume excess

## Laboratory Differentiation

| Test | Nephrotic | Nephritic |
|------|-----------|-----------|
| Urinalysis | Protein ++/+++, fat bodies, oval fat bodies | RBC, RBC casts, mild protein |
| 24-hr protein | >3.5 g/day | <3.5 g/day |
| Serum albumin | <3 g/dL | Usually normal |
| Lipid panel | Elevated cholesterol, TG | Normal |
| Complement | Usually normal | Low in PSGN, lupus, MPGN |
| Kidney function | May be normal initially | Often impaired |

## Diagnostic Approach

1. **Urinalysis with microscopy**: Casts, dysmorphic RBCs
2. **Quantify proteinuria**: UPCR or 24-hour collection
3. **Serum albumin, lipids**: Nephrotic features
4. **Complement levels**: C3, C4
5. **Serologic workup**: ANA, ANCA, anti-GBM, anti-PLA2R, hepatitis B/C
6. **Kidney biopsy**: Often needed for definitive diagnosis`,
      keyTerms: [
        { term: 'slit diaphragm', definition: 'Protein complex (nephrin, podocin) connecting podocyte foot processes; key component of glomerular filter' },
        { term: 'effacement', definition: 'Loss of normal podocyte foot process architecture; seen in all forms of nephrotic syndrome' },
        { term: 'charge barrier', definition: 'Negative charges on GBM and podocytes that repel albumin; lost in minimal change disease' },
        { term: 'crescent', definition: 'Collection of cells and fibrin in Bowman\'s space; indicates severe glomerular injury' },
        { term: 'oval fat bodies', definition: 'Lipid-laden tubular cells in urine; characteristic of nephrotic syndrome' },
        { term: 'suPAR', definition: 'Soluble urokinase plasminogen activator receptor; proposed circulating factor in FSGS' },
      ],
      clinicalNotes: 'RBC casts are pathognomonic for glomerular bleeding - their presence shifts diagnosis toward nephritic syndrome. In nephrotic syndrome, always assess for hypercoagulability (consider prophylactic anticoagulation if albumin <2-2.5 g/dL). Low complement points to specific diagnoses: PSGN, lupus, MPGN, or cryoglobulinemia.',
    },
    4: {
      level: 4,
      summary: 'Clinical management of glomerular syndromes requires syndrome-specific treatment of underlying disease, complication prevention (thrombosis, infection, cardiovascular), and monitoring for treatment response using proteinuria trends and kidney function.',
      explanation: `## Management of Nephrotic Syndrome

### General Measures

**Edema Management:**
- Sodium restriction (<2 g/day)
- Fluid restriction if severe hyponatremia
- Loop diuretics (furosemide, often high doses)
- Add thiazide for diuretic resistance (sequential nephron blockade)
- Caution: Risk of AKI from overdiuresis, thrombosis from hemoconcentration

**Proteinuria Reduction:**
- ACE inhibitor or ARB (first-line)
- Titrate to maximum tolerated dose
- Target: >50% reduction in proteinuria
- SGLT2 inhibitors: Emerging role (reduce proteinuria, slow progression)

**Thromboprophylaxis:**
- High-risk: Albumin <2-2.5 g/dL, membranous nephropathy
- Consider prophylactic anticoagulation (warfarin, DOAC)
- Treatment-dose anticoagulation if thrombosis occurs

**Hyperlipidemia:**
- Statins: Reduce LDL, uncertain renal benefit
- Often improves when proteinuria remits

**Infection Prevention:**
- Loss of immunoglobulins increases infection risk
- Pneumococcal vaccination recommended
- Consider IVIG replacement if recurrent infections with low IgG

**Diet:**
- Moderate protein intake (0.8-1 g/kg/day)
- Avoid excessive protein (worsens proteinuria)
- High-calorie to prevent protein catabolism

### Disease-Specific Treatment

**Minimal Change Disease:**
- Prednisone 1 mg/kg/day (max 80 mg) for 4-16 weeks
- Response in >90% (often within 2-4 weeks)
- Relapse common; steroid-sparing agents for frequent relapsers (cyclosporine, MMF, rituximab)

**FSGS:**
- Immunosuppression only for primary FSGS with nephrotic syndrome
- High-dose prednisone (prolonged course: 4-16 weeks)
- CNI (cyclosporine, tacrolimus) if steroid-resistant
- Rituximab under investigation

**Membranous Nephropathy:**
- Supportive care for 6 months (30% spontaneous remission)
- Immunosuppression if high-risk (see Level 4 glomerulonephritis)
- Rituximab first-line; cyclophosphamide + steroids alternative

**Secondary Causes:**
- Diabetic nephropathy: Glycemic control, ACEi/ARB, SGLT2i, finerenone
- Amyloidosis: Treat underlying plasma cell dyscrasia
- Lupus membranous (Class V): Immunosuppression if significant proteinuria

## Management of Nephritic Syndrome

### Acute Management
**Blood Pressure Control:**
- Target <130/80 mmHg (or lower if proteinuric)
- ACEi/ARB preferred if tolerated
- Calcium channel blockers for acute severe HTN
- Loop diuretics for volume-mediated hypertension

**Oliguria/Volume Overload:**
- Sodium and fluid restriction
- Loop diuretics (may need high doses)
- Consider RRT if refractory

**Rapidly Progressive GN (RPGN):**
- Nephrologic emergency
- Start empiric immunosuppression if high clinical suspicion
- Biopsy urgently (within 24-48 hours)
- ANCA vasculitis: Rituximab or cyclophosphamide + steroids
- Anti-GBM: Plasmapheresis + steroids + cyclophosphamide
- Lupus: High-dose steroids + MMF or cyclophosphamide

### Disease-Specific Treatment

**Post-Streptococcal GN:**
- Supportive care only (resolves in 2-4 weeks)
- Salt restriction, diuretics, antihypertensives
- No role for immunosuppression
- Antibiotics if active strep infection

**IgA Nephropathy:**
- Supportive: ACEi/ARB, BP control, SGLT2i
- Immunosuppression for high-risk (proteinuria >1 g despite optimization)

**Lupus Nephritis (Proliferative):**
- Induction: MMF or cyclophosphamide + steroids (+/- belimumab, voclosporin)
- Maintenance: MMF or azathioprine + low-dose steroids

**ANCA Vasculitis:**
- Induction: Rituximab or cyclophosphamide + steroids (+/- avacopan)
- Maintenance: Rituximab or azathioprine

## Monitoring and Response Assessment

### Nephrotic Syndrome
- Urine protein (UPCR or 24-hr) every 1-3 months
- Serum albumin, creatinine, lipids
- Anti-PLA2R titers in membranous (predicts response)

**Response Definitions:**
| Response | Criteria |
|----------|----------|
| Complete remission | UPCR <0.3 g/g and stable kidney function |
| Partial remission | >50% reduction in proteinuria and UPCR <3.5 g/g |
| No response | <50% reduction or UPCR remains >3.5 g/g |

### Nephritic Syndrome / RPGN
- Creatinine trend (daily if RPGN)
- Urinalysis (hematuria, casts)
- ANCA titers in vasculitis (controversial utility)
- Repeat biopsy if response unclear

## Complications Management

### Thromboembolism (Nephrotic)
- Renal vein thrombosis: Flank pain, hematuria, worsening proteinuria
- DVT/PE: Standard presentation
- Treatment: Anticoagulation 6+ months; some advocate indefinite if persistent nephrotic syndrome

### Acute Kidney Injury in Nephrotic Syndrome
Causes:
- Hypovolemia (overdiuresis)
- Bilateral renal vein thrombosis
- ATN from hypoperfusion
- Drug-induced (NSAIDs, contrast)
- Progression of underlying disease

### Infections
- Increased risk: Encapsulated organisms (S. pneumoniae), cellulitis, spontaneous bacterial peritonitis (if ascites)
- Vaccinate: Pneumococcal, influenza
- Low threshold for antibiotic treatment`,
      keyTerms: [
        { term: 'sequential nephron blockade', definition: 'Adding thiazide to loop diuretic to block different nephron segments; used for refractory edema' },
        { term: 'complete remission', definition: 'Resolution of proteinuria to near-normal levels (<0.3 g/g UPCR)' },
        { term: 'partial remission', definition: '>50% reduction in proteinuria with UPCR <3.5 g/g; still carries increased risk' },
        { term: 'renal vein thrombosis', definition: 'Clot in renal vein; particularly associated with membranous nephropathy' },
        { term: 'frequent relapser', definition: 'Patient with 4+ relapses per year or 2+ relapses within 6 months of stopping steroids' },
        { term: 'steroid-dependent', definition: 'Relapse occurring during steroid taper or within 2 weeks of stopping' },
      ],
      clinicalNotes: 'In nephrotic syndrome, monitor for AKI during diuresis - aim for 0.5-1 kg weight loss per day maximum. Consider prophylactic anticoagulation if albumin <2-2.5 g/dL, especially in membranous nephropathy. In RPGN, do not delay treatment while awaiting biopsy if clinical suspicion is high - creatinine rise of 50% in days indicates urgency.',
    },
    5: {
      level: 5,
      summary: 'Advanced management of glomerular syndromes incorporates molecular diagnostics, biomarker-guided therapy, precision immunosuppression, and emerging targeted agents to optimize outcomes while minimizing treatment toxicity.',
      explanation: `## Molecular and Biomarker-Guided Management

### Nephrotic Syndrome Biomarkers

**Minimal Change Disease:**
- Research into T-cell derived permeability factors ongoing
- Candidate: c-mip (upregulated in relapse)
- Biomarkers to distinguish MCD from FSGS would transform management

**FSGS:**
- suPAR (soluble urokinase plasminogen activator receptor): Controversial
- Elevated in primary FSGS, but also in inflammation, infection
- May predict post-transplant recurrence
- Cardiotrophin-like cytokine-1 (CLCF-1): Research biomarker

**Membranous Nephropathy:**
- Anti-PLA2R: Present in 70%, high titer = lower spontaneous remission
- Anti-THSD7A: 2-3%, associated with malignancy
- Titer monitoring guides therapy:
  - Declining titer → immunologic remission precedes clinical remission
  - Persistent/rising titer → consider treatment change
  - Negative post-treatment → likely sustained remission

**Nephrotic Syndrome Risk Scores:**
- Toronto risk score for membranous: Baseline proteinuria + creatinine + anti-PLA2R
- Guides conservative vs. immunosuppressive approach

### Nephritic Syndrome Biomarkers

**ANCA Vasculitis:**
- ANCA type (PR3 vs MPO): PR3 has higher relapse rate
- Rising ANCA titers: May predict relapse (controversial)
- Birmingham Vasculitis Activity Score (BVAS): Guides treatment intensity

**Lupus Nephritis:**
- Anti-dsDNA titers and complement levels: Correlate with activity
- Urine biomarkers: NGAL, MCP-1, TWEAK under investigation
- Repeat biopsy: Assesses response vs. chronicity

**IgA Nephropathy:**
- Galactose-deficient IgA1 (Gd-IgA1): Elevated in most patients
- Anti-glycan antibodies: Form pathogenic immune complexes
- May guide future targeted therapies

## Precision Immunosuppression

### Genetic Nephrotic Syndrome
**When to Test:**
- Steroid-resistant nephrotic syndrome
- Familial disease
- Syndromic features
- Congenital/infantile onset

**Implications:**
| Gene | Disease | Treatment Implication |
|------|---------|----------------------|
| NPHS1, NPHS2 | Congenital/AR FSGS | Immunosuppression unlikely to help |
| WT1 | Denys-Drash/Frasier | No IS; prepare for transplant |
| TRPC6 | AD FSGS | Consider TRPC6 inhibitors (research) |
| INF2 | AD FSGS, CMT | Genetic counseling; no IS |
| COL4A3/4/5 | Alport syndrome | ACEi/ARB; no IS |
| APOL1 | African ancestry FSGS | Higher risk; may need aggressive therapy |

**Genetic FSGS vs. Immunosuppression:**
- Most genetic forms do not respond to steroids/CNI
- Saves patients from futile toxicity
- Exception: Some NPHS2 mutations may partially respond

### B-Cell Targeted Therapy
**Rituximab Applications:**
- Membranous nephropathy (first-line)
- FSGS (steroid-dependent/resistant)
- ANCA vasculitis (induction and maintenance)
- Lupus nephritis (as adjunctive therapy)
- MCD frequent relapsers

**Novel Anti-CD20:**
- Ofatumumab: Fully human, may work in rituximab failures
- Obinutuzumab: Enhanced CDC and ADCC; approved for lupus nephritis

**Beyond CD20:**
- Inebilizumab (anti-CD19): Broader B-cell depletion
- Belimumab (anti-BLyS): Approved for lupus
- Telitacicept (TACI-Fc): Blocks BLyS + APRIL; trials in IgA, lupus

### Plasma Cell Targeting
- Bortezomib: Case reports in refractory membranous, lupus
- Daratumumab (anti-CD38): Emerging for refractory anti-GBM, membranous

## Emerging Targeted Therapies

### Complement Inhibition
| Agent | Target | Application |
|-------|--------|-------------|
| Avacopan | C5aR | ANCA vasculitis |
| Eculizumab | C5 | C3GN, aHUS, refractory lupus |
| Iptacopan | Factor B | C3GN, IgAN (trials) |
| Narsoplimab | MASP-2 | IgAN, aHUS (trials) |

### Endothelin Receptor Antagonists
- Sparsentan: Dual ETA/AT1 blocker; approved for IgA nephropathy
- Atrasentan: ETA blocker; significant proteinuria reduction, fluid retention concerns

### Podocyte Protection
- Research into stabilizing podocyte cytoskeleton
- TRPC6 inhibitors for TRPC6 mutations
- Abatacept (B7-1 blockade): Initial promise not confirmed in larger trials

### Anti-Fibrotic Agents
- Pirfenidone, nintedanib: Used in pulmonary fibrosis
- Early trials in progressive CKD from GN

## Special Management Considerations

### Refractory Nephrotic Syndrome
**Definition:** Failure of two immunosuppressive regimens

**Approach:**
1. Confirm diagnosis (repeat biopsy if needed)
2. Exclude secondary causes (malignancy, infection)
3. Genetic testing
4. Consider experimental therapies (clinical trials)
5. Focus on supportive care and complication prevention

**Supportive Care Optimization:**
- Maximum ACEi/ARB + SGLT2i
- Aggressive lipid management
- Prophylactic anticoagulation
- Diuretic optimization
- Nutritional support

### Pregnancy in Glomerular Disease
**Preconception:**
- Disease remission >6 months
- eGFR >60, proteinuria <1 g/day
- Switch to pregnancy-safe meds (discontinue ACEi/ARB, MMF)
- Safe: Azathioprine, low-dose prednisone, hydroxychloroquine

**During Pregnancy:**
- High-risk obstetric care
- Aspirin for preeclampsia prevention
- Monitor proteinuria, BP, kidney function
- Increased flare risk in lupus nephritis

**Postpartum:**
- Resume prior medications
- Monitor for disease flare (especially lupus)

### Transplant Considerations
**Recurrence Risk by Disease:**
| Disease | Recurrence Rate | Notes |
|---------|----------------|-------|
| Primary FSGS | 30-50% | Plasmapheresis, rituximab protocols |
| Membranous | 10-30% | Monitor anti-PLA2R |
| IgA nephropathy | 20-60% histologic | Usually clinically benign |
| Lupus | 10-30% | Control activity before transplant |
| ANCA vasculitis | 10-20% | Moderate risk |
| Anti-GBM | <5% | Wait for antibody negativity |

**Living Donor Evaluation in GN:**
- Screen for same disease in donors (family members)
- Genetic testing if hereditary disease (COL4A, APOL1)

## Outcomes and Prognosis

### Nephrotic Syndrome Long-Term
- Minimal change: Excellent prognosis if steroid-responsive
- FSGS: 50% progress to ESKD in 10 years if unresponsive
- Membranous: Rule of thirds (1/3 remit, 1/3 stable, 1/3 progress)
- Complete remission → normal life expectancy
- Persistent nephrotic range proteinuria → cardiovascular, thrombotic, ESKD risk

### Nephritic Syndrome Long-Term
- Post-strep GN: Usually complete recovery (rarely chronic in adults)
- IgA nephropathy: 30-40% reach ESKD over 20-30 years
- Lupus nephritis: With treatment, 10-year kidney survival >80%
- ANCA vasculitis: 90% induction remission; 50% relapse in 5 years`,
      keyTerms: [
        { term: 'Toronto risk score', definition: 'Risk stratification tool for membranous nephropathy guiding need for immunosuppression' },
        { term: 'CLCF-1', definition: 'Cardiotrophin-like cytokine factor 1; research candidate for circulating permeability factor in FSGS' },
        { term: 'anti-THSD7A', definition: 'Antibody found in 2-3% of membranous nephropathy; association with malignancy' },
        { term: 'telitacicept', definition: 'TACI-Fc fusion blocking both BLyS and APRIL; under investigation for IgA nephropathy and lupus' },
        { term: 'Birmingham Vasculitis Activity Score', definition: 'BVAS; standardized score assessing vasculitis disease activity across organ systems' },
        { term: 'immunologic remission', definition: 'Disappearance of pathogenic antibodies (e.g., anti-PLA2R); often precedes clinical remission' },
      ],
      clinicalNotes: `Expert practice points:
1. Anti-PLA2R monitoring is essential in membranous - falling titers predict remission months before proteinuria improves
2. Genetic testing in steroid-resistant nephrotic syndrome prevents futile immunosuppression toxicity
3. Consider obinutuzumab for rituximab-refractory glomerular disease
4. Sparsentan represents new class of therapy for proteinuric GN - combine with ACEi/SGLT2i
5. Pregnancy planning in GN requires 6+ months of disease control and medication transition
6. Post-transplant FSGS recurrence protocols (plasmapheresis, rituximab) can salvage many grafts
7. Complete remission of nephrotic syndrome normalizes life expectancy - push for this goal`,
    },
  },

  media: [
    {
      id: 'nephrotic-nephritic-comparison',
      type: 'diagram',
      filename: 'nephrotic-nephritic-comparison.svg',
      title: 'Nephrotic vs Nephritic Syndrome',
      description: 'Side-by-side comparison of clinical features and pathophysiology',
    },
    {
      id: 'glomerular-barrier-injury',
      type: 'diagram',
      filename: 'glomerular-barrier-injury.svg',
      title: 'Glomerular Barrier Injury Patterns',
      description: 'Diagram showing podocyte vs endothelial injury patterns',
    },
  ],

  citations: [
    {
      id: 'kdigo-gn-syndromes',
      type: 'article',
      title: 'KDIGO 2021 Clinical Practice Guideline for the Management of Glomerular Diseases',
      authors: ['KDIGO GN Work Group'],
      source: 'Kidney International',
      url: 'https://kdigo.org/guidelines/gn/',
    },
    {
      id: 'glassock-syndromes',
      type: 'article',
      title: 'Secondary Glomerular Disease',
      authors: ['Glassock RJ'],
      source: 'The Kidney',
      chapter: '30',
    },
  ],

  crossReferences: [
    { targetId: 'condition-glomerulonephritis', targetType: 'condition', relationship: 'parent', label: 'Glomerulonephritis Types' },
    { targetId: 'condition-chronic-kidney-disease', targetType: 'condition', relationship: 'related', label: 'CKD Progression' },
    { targetId: 'condition-acute-kidney-injury', targetType: 'condition', relationship: 'related', label: 'RPGN/AKI' },
  ],

  tags: {
    systems: ['urinary', 'renal'],
    topics: ['nephrology', 'pathophysiology', 'internal medicine', 'diagnosis'],
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

export default nephroticNephriticSyndrome;
