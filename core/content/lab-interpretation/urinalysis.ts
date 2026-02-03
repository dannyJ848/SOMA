/**
 * Urinalysis Educational Content
 *
 * Comprehensive educational content for understanding and interpreting
 * urinalysis including dipstick, microscopy, and urine chemistry.
 */

import { EducationalContent } from "../types";

export const urinalysisContent: EducationalContent = {
  id: "urinalysis-interpretation",
  type: "concept",
  name: "Urinalysis Interpretation",
  alternateNames: ["UA", "Urine Analysis", "Urine Test"],

  levels: {
    1: {
      level: 1,
      summary: "A urinalysis is a test that examines your urine to check for signs of infections, kidney problems, and other health conditions.",
      explanation: `Your urine can tell doctors a lot about your health. A urinalysis looks at three main things:

**What it looks like (appearance):**
- Normal urine is clear and yellow
- Cloudy urine might mean infection
- Dark urine could mean you"re dehydrated
- Red or pink might mean blood is present

**Chemical tests (dipstick):**
- Checks for sugar (might mean diabetes)
- Checks for protein (might mean kidney problems)
- Checks for signs of infection
- Checks for blood that you can"t see

**Looking under a microscope:**
- Looks for bacteria (infection)
- Looks for blood cells
- Looks for crystals (kidney stones)
- Looks for other cells that shouldn"t be there

Doctors order this test to check for urinary tract infections (UTIs), kidney disease, diabetes, and to make sure your urinary system is healthy.`,
      keyTerms: [
        { term: "urinalysis", definition: "A test that examines urine for signs of disease" },
        { term: "UTI", definition: "Urinary Tract Infection - when germs grow in your bladder or kidneys" },
        { term: "dipstick", definition: "A strip that changes color when dipped in urine to detect different substances" },
        { term: "microscopy", definition: "Looking at urine under a microscope to see cells and other tiny things" },
      ],
      analogies: [
        "A urinalysis is like a report card for your kidneys and urinary system - it shows how well they\"re doing their job.",
        "The dipstick test is like a chemical detective - different colors reveal different clues about your health.",
      ],
    },
    2: {
      level: 2,
      summary: "Urinalysis comprises physical examination, chemical dipstick analysis, and microscopic sediment examination to evaluate renal and urinary tract health.",
      explanation: `## Components of Urinalysis

### Physical Examination
| Parameter | Normal | Abnormal Findings |
|-----------|--------|-------------------|
| Color | Pale to dark yellow | Red (blood), brown (myoglobin), orange (medications) |
| Clarity | Clear | Cloudy (infection, crystals) |
| Specific gravity | 1.005-1.030 | Low (dilute), high (concentrated/dehydration) |

### Chemical Dipstick Analysis
| Test | Normal | Clinical Significance |
|------|--------|----------------------|
| pH | 5.0-8.0 | Acidic in meat diet; alkaline with UTI, vegetarian diet |
| Protein | Negative | Kidney disease, infection, exercise |
| Glucose | Negative | Diabetes mellitus, renal glycosuria |
| Blood | Negative | Infection, stones, malignancy, glomerulonephritis |
| Leukocyte esterase | Negative | Urinary tract infection |
| Nitrite | Negative | UTI with nitrate-reducing bacteria |
| Ketones | Negative | DKA, starvation, low-carb diet |
| Bilirubin | Negative | Liver disease, biliary obstruction |
| Urobilinogen | 0.1-1.0 | Hemolysis, liver disease |

### Microscopic Examination
| Finding | Normal | Significance |
|---------|--------|--------------|
| RBCs | 0-2/HPF | Glomerular or non-glomerular bleeding |
| WBCs | 0-5/HPF | Infection, inflammation |
| Bacteria | None | Urinary tract infection |
| Casts | Occasional hyaline | Type indicates location of pathology |
| Crystals | Varies by pH | Stone risk, metabolic disorders |

### Common Clinical Scenarios
- **UTI:** Positive leukocyte esterase, nitrite, WBCs, bacteria
- **Glomerulonephritis:** RBCs, RBC casts, protein
- **Diabetes:** Glucose, ketones
- **Dehydration:** High specific gravity, concentrated appearance`,
      keyTerms: [
        { term: "specific gravity", definition: "Measure of urine concentration; how dilute or concentrated urine is" },
        { term: "leukocyte esterase", definition: "Enzyme from white blood cells indicating inflammation or infection" },
        { term: "nitrite", definition: "Chemical produced when bacteria convert nitrate; indicates bacterial UTI" },
        { term: "HPF", definition: "High Power Field - standard microscope magnification for counting cells" },
      ],
      analogies: [
        "Specific gravity is like measuring how \"thick\" your soup is - concentrated urine is like thick soup, dilute urine is like watery broth.",
        "Leukocyte esterase and nitrite together are like smoke detectors - both positive strongly suggests infection is present.",
      ],
    },
    3: {
      level: 3,
      summary: "Urinalysis interpretation requires correlation of dipstick findings with microscopy, identification of casts for disease localization, and recognition of characteristic patterns.",
      explanation: `## Systematic Urinalysis Interpretation

### Urine Cast Interpretation

**Cast Formation:**
- Form in renal tubules from Tamm-Horsfall protein
- Presence indicates renal origin of pathology

| Cast Type | Appearance | Clinical Significance |
|-----------|------------|----------------------|
| Hyaline | Clear, colorless | Normal, dehydration, exercise |
| RBC | Red, may have visible cells | Glomerulonephritis - pathognomonic |
| WBC | Granular with visible WBCs | Pyelonephritis, interstitial nephritis |
| Granular (muddy brown) | Dark, granular debris | Acute tubular necrosis |
| Waxy | Shiny, waxy appearance | Chronic kidney disease |
| Fatty | Fat droplets, Maltese cross | Nephrotic syndrome |
| Broad | Wide diameter | Dilated tubules, chronic kidney disease |

### Proteinuria Assessment

**Dipstick Limitations:**
- Primarily detects albumin
- May miss light chains, other proteins
- False positive with concentrated urine, alkaline pH
- False negative with dilute urine

**Quantification:**
| Method | Use |
|--------|-----|
| Spot urine protein:creatinine ratio | Screening, monitoring |
| 24-hour urine collection | Gold standard quantification |
| Albumin:creatinine ratio | Preferred for diabetic nephropathy |

### Hematuria Workup

**Distinguishing Glomerular from Non-glomerular:**
| Feature | Glomerular | Non-glomerular |
|---------|------------|----------------|
| RBC morphology | Dysmorphic, acanthocytes | Isomorphic |
| RBC casts | Present | Absent |
| Proteinuria | Often present | Usually absent |
| Clots | Absent | May be present |

**Non-glomerular Causes:**
- Stones, malignancy, infection, trauma, BPH

### Specific Crystal Patterns

| Crystal | pH | Shape | Significance |
|---------|-----|-------|--------------|
| Calcium oxalate | Any | Envelope, dumbbell | Most common stone type |
| Uric acid | Acidic | Diamond, rosette | Gout, tumor lysis |
| Struvite | Alkaline | Coffin lid | Infection with urease+ organisms |
| Cystine | Acidic | Hexagonal | Cystinuria (genetic) |
| Triple phosphate | Alkaline | Coffin lid | Infection-related |

### UTI Interpretation

**Diagnostic Criteria:**
- Symptomatic: >10^3 CFU/mL with pyuria
- Asymptomatic: >10^5 CFU/mL on 2 separate specimens

**Sterile Pyuria Differential:**
- Recently treated UTI
- Urethritis (STI)
- Interstitial nephritis
- Tuberculosis
- Prostatitis
- Nephrolithiasis
- Contamination`,
      keyTerms: [
        { term: "cast", definition: "Cylindrical structure formed in renal tubules; indicates renal origin of pathology" },
        { term: "dysmorphic RBCs", definition: "Irregularly shaped red cells suggesting glomerular origin of bleeding" },
        { term: "sterile pyuria", definition: "White cells in urine without bacterial growth on culture" },
        { term: "acanthocytes", definition: "Ring-shaped RBCs with membrane blebs; specific for glomerular bleeding" },
      ],
      clinicalNotes: "RBC casts are pathognomonic for glomerulonephritis. Their presence warrants urgent nephrology evaluation regardless of creatinine level.",
    },
    4: {
      level: 4,
      summary: "Advanced urinalysis interpretation integrates quantitative urine studies, specialized tests, and understanding of urinalysis in complex clinical scenarios.",
      explanation: `## Advanced Urinalysis Interpretation

### Quantitative Urine Studies

**Urine Protein Electrophoresis:**
- Differentiates albumin from globulins
- Light chains: Overflow proteinuria (myeloma)
- Tubular pattern: β2-microglobulin, retinol-binding protein

**Urine Protein:Creatinine Ratio (UPCR):**
| UPCR (mg/g) | Interpretation |
|-------------|----------------|
| <150 | Normal |
| 150-500 | Mild proteinuria |
| 500-3500 | Moderate proteinuria |
| >3500 | Nephrotic range |

**Urine Albumin:Creatinine Ratio (UACR):**
| UACR (mg/g) | Category |
|-------------|----------|
| <30 | Normal |
| 30-300 | Moderately increased (A2) |
| >300 | Severely increased (A3) |

### Urine Chemistries in AKI

**Fractional Excretion of Sodium (FENa):**
FENa = (UNa × PCr) / (PNa × UCr) × 100

| FENa | Interpretation | Caveats |
|------|----------------|---------|
| <1% | Pre-renal | Diuretics invalidate |
| >2% | ATN | Early sepsis may be <1% |

**Fractional Excretion of Urea (FEUrea):**
- Useful when on diuretics
- <35%: Pre-renal
- >50%: ATN

### Specialized Urine Tests

**Urine Eosinophils:**
- Classic for allergic interstitial nephritis
- Low sensitivity and specificity
- Also seen in: Atheroembolic disease, prostatitis, UTI

**Urine Osmolality:**
| Value | Interpretation |
|-------|----------------|
| <300 mOsm/kg | Dilute (diabetes insipidus, water intoxication) |
| 300-800 mOsm/kg | Normal range |
| >800 mOsm/kg | Maximally concentrated |

**Urine Electrolytes in Hyponatremia:**
| UNa | UOsm | Interpretation |
|-----|------|----------------|
| <20 | <100 | Primary polydipsia |
| <20 | >300 | Hypovolemia |
| >40 | >300 | SIADH, adrenal insufficiency |

### Urine in Systemic Disease

**Diabetes:**
- Microalbuminuria: First sign of diabetic nephropathy
- Glucosuria: When blood glucose exceeds renal threshold (~180 mg/dL)
- Ketonuria: DKA, starvation

**Multiple Myeloma:**
- Light chains (Bence Jones protein)
- Dipstick negative (detects albumin)
- Sulfosalicylic acid test positive
- SPEP/UPEP for confirmation

**Rhabdomyolysis:**
- Dipstick positive for blood (detects myoglobin)
- Microscopy: Few or no RBCs
- "Pigment nephropathy"

### Quality Control Issues

**Pre-analytical Factors:**
| Issue | Effect |
|-------|--------|
| Delayed analysis | Bacteria multiply, cells lyse, casts dissolve |
| High pH (old specimen) | WBCs, RBCs lyse; false negative |
| Concentrated specimen | False positive protein |
| Dilute specimen | False negative |
| Contamination | Squamous cells, bacteria |

**Collection Methods:**
| Method | Use |
|--------|-----|
| Clean catch midstream | Standard |
| Catheterized | Accurate, avoids contamination |
| Suprapubic aspirate | Gold standard for culture |
| First void | STI testing (urethritis) |`,
      keyTerms: [
        { term: "FENa", definition: "Fractional Excretion of Sodium - helps differentiate pre-renal from intrinsic AKI" },
        { term: "Bence Jones protein", definition: "Immunoglobulin light chains in urine; associated with multiple myeloma" },
        { term: "urine osmolality", definition: "Concentration of dissolved particles; measures kidney concentrating ability" },
        { term: "microalbuminuria", definition: "Small amounts of albumin in urine (30-300 mg/day); early diabetic nephropathy marker" },
      ],
      clinicalNotes: "In patients on diuretics, FEUrea is more reliable than FENa for distinguishing pre-renal azotemia from ATN.",
    },
    5: {
      level: 5,
      summary: "Expert urinalysis interpretation encompasses advanced sediment analysis, biomarkers for early disease detection, and integration with molecular diagnostics.",
      explanation: `## Expert-Level Urinalysis Interpretation

### Advanced Sediment Analysis

**Phase Contrast Microscopy:**
- Superior for identifying dysmorphic RBCs
- G1 cells (donut-shaped with membrane protrusions) highly specific for glomerular bleeding
- >5% G1 cells = glomerular origin

**Polarized Light Microscopy:**
- Fat: Maltese cross pattern (nephrotic syndrome)
- Crystals: Better characterization
- Lipiduria: Free fat, oval fat bodies, fatty casts

**Automated Urinalysis:**
- Flow cytometry-based (UF-1000i, Iris)
- Standardizes cell counts
- Reduces inter-observer variability
- May miss casts, crystals

### Urinary Biomarkers

**Kidney Injury Biomarkers:**
| Biomarker | Source | Timing |
|-----------|--------|--------|
| NGAL | Distal tubule | 2 hours post-injury |
| KIM-1 | Proximal tubule | 12-24 hours |
| L-FABP | Proximal tubule | 1-2 hours |
| IL-18 | Proximal tubule | 6-12 hours |
| TIMP-2 × IGFBP7 | Cell cycle arrest | FDA-approved for AKI risk |

**Proteomic Approaches:**
- CKD273 classifier: 273 urinary peptides for CKD progression
- May predict progression years before GFR decline

### Urinalysis in Transplant

**Rejection Monitoring:**
- Increased proteinuria
- Hematuria, pyuria
- Urinary biomarkers (CXCL9, CXCL10) for rejection

**BK Virus Nephropathy:**
- "Decoy cells" on cytology (viral inclusion bodies)
- Quantitative BK PCR in urine and blood
- High urine viral load predicts nephropathy

### Complex Scenarios

**Glomerulonephritis Patterns:**
| Disease | Urinalysis Pattern | Associated Findings |
|---------|-------------------|---------------------|
| IgA nephropathy | Hematuria (often gross), mild proteinuria | URI association |
| Post-streptococcal GN | Active sediment, RBC casts | Low C3, ASO titer |
| Lupus nephritis | Proteinuria, active sediment | ANA, anti-dsDNA |
| ANCA vasculitis | Hematuria, RBC casts | ANCA positive |
| Anti-GBM disease | Hematuria, RBC casts | Anti-GBM antibody |

**Tubulointerstitial Nephritis:**
- WBC casts (distinguish from pyelonephritis by context)
- Eosinophiluria (low sensitivity)
- Sterile pyuria
- Mild proteinuria (tubular pattern)

### Genetic and Rare Diseases

**Cystinuria:**
- Hexagonal crystals (pathognomonic)
- Genetic defect in amino acid transport
- Stone composition analysis confirms

**Primary Hyperoxaluria:**
- Calcium oxalate crystals
- Elevated urine oxalate
- Genetic testing for AGXT, GRHPR

**Fabry Disease:**
- Maltese cross lipid inclusions
- Mulberry bodies
- Alpha-galactosidase A assay confirms

### Urine Cytology

**Indications:**
- Hematuria workup
- Surveillance after bladder cancer
- High-risk exposures (smoking, occupational)

**Interpretation:**
- Malignant cells: Irregular, hyperchromatic, high N:C ratio
- Decoy cells: BK virus
- Atypical cells: May need further evaluation

### Integration with Molecular Testing

**Urine DNA Analysis:**
- UroVysion FISH: Bladder cancer detection
- Molecular profiling for recurrence monitoring
- Cell-free DNA for transplant rejection

**Urine RNA:**
- Gene expression panels for rejection
- mRNA biomarkers for AKI

### Quality Assurance

**Standardization:**
- KOVA system for standardized microscopy
- Certification programs for lab personnel
- Proficiency testing requirements

**Reporting Standards:**
- ISUF guidelines for sediment reporting
- Quantitative reporting preferred over semi-quantitative`,
      keyTerms: [
        { term: "G1 cells", definition: "Donut-shaped dysmorphic RBCs with membrane protrusions; highly specific for glomerular bleeding" },
        { term: "CKD273", definition: "Urinary proteomic classifier using 273 peptides to predict CKD progression" },
        { term: "decoy cells", definition: "Cells with viral inclusion bodies seen in BK virus infection" },
        { term: "UroVysion", definition: "FISH-based urine test for bladder cancer detection using chromosome abnormalities" },
      ],
      clinicalNotes: "Expert urinalysis interpretation requires integration of automated results with manual microscopy review. Novel biomarkers may enable earlier detection of kidney injury and more precise disease classification, but clinical validation remains ongoing.",
    },
  },

  media: [],
  citations: [
    {
      id: "european-urinalysis",
      type: "article",
      title: "European Urinalysis Guidelines",
      source: "Clinical Chemistry and Laboratory Medicine",
      authors: ["European Urinalysis Group"],
    },
  ],
  crossReferences: [
    { targetId: "lab-urine-protein", targetType: "concept", relationship: "child" },
    { targetId: "lab-urine-sediment", targetType: "concept", relationship: "child" },
    { targetId: "renal-function-interpretation", targetType: "concept", relationship: "related" },
  ],
  tags: {
    systems: ["renal", "urinary"],
    topics: ["laboratory", "nephrology", "urology", "diagnosis"],
    clinicalRelevance: "critical",
    examRelevance: { usmle: true, nbme: true, shelf: ["medicine", "surgery", "pediatrics"] },
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: "published",
};

// =============================================================================
// URINALYSIS PANEL
// =============================================================================

import { LabPanel } from "./types";

export const URINALYSIS_PANEL: LabPanel = {
  id: "panel-urinalysis",
  name: "Urinalysis Panel",
  abbreviation: "UA",
  description: "Comprehensive urine examination including physical, chemical, and microscopic components.",
  includedTests: [
    "lab-urine-appearance",
    "lab-urine-specific-gravity",
    "lab-urine-ph",
    "lab-urine-protein",
    "lab-urine-glucose",
    "lab-urine-blood",
    "lab-urine-leukocyte-esterase",
    "lab-urine-nitrite",
    "lab-urine-ketones",
    "lab-urine-bilirubin",
    "lab-urine-urobilinogen",
    "lab-urine-microscopy",
  ],
  commonIndications: [
    "Urinary tract infection evaluation",
    "Kidney disease screening",
    "Diabetes monitoring",
    "Hematuria workup",
    "Proteinuria evaluation",
    "Preoperative assessment",
    "Drug screening",
  ],
  interpretationGuidance: [
    {
      level: 1,
      content: "Urinalysis checks your urine for signs of infection, kidney problems, diabetes, and other conditions. It looks at color, chemicals, and cells in your urine.",
    },
    {
      level: 3,
      content: "Systematic UA interpretation: Physical exam (color, clarity, SG), dipstick (LE/nitrite for UTI, protein for kidney disease, glucose for diabetes, blood for hematuria), microscopy (WBCs, RBCs, casts, crystals). Casts indicate renal origin - RBC casts are pathognomonic for glomerulonephritis.",
    },
    {
      level: 5,
      content: "Expert UA interpretation correlates dipstick with microscopy, recognizes cast types for disease localization (RBC casts = glomerular, WBC casts = pyelonephritis/interstitial nephritis, muddy brown granular casts = ATN), calculates fractional excretion indices, and integrates with quantitative urine studies (UPCR, UACR).",
    },
  ],
  patterns: [
    {
      patternName: "Urinary Tract Infection",
      description: "Pattern suggesting bacterial urinary tract infection",
      labFindings: [
        { labId: "lab-urine-leukocyte-esterase", labName: "Leukocyte Esterase", expectedDirection: "high" },
        { labId: "lab-urine-nitrite", labName: "Nitrite", expectedDirection: "high" },
      ],
      suggestsDiagnosis: ["Cystitis", "Pyelonephritis", "Urethritis"],
      clinicalContext: "Positive LE and nitrite strongly suggest bacterial UTI. Nitrite requires gram-negative bacteria that convert nitrate. WBCs and bacteria on microscopy support diagnosis. Culture confirms.",
    },
    {
      patternName: "Glomerulonephritis",
      description: "Active urinary sediment suggesting glomerular disease",
      labFindings: [
        { labId: "lab-urine-blood", labName: "Blood", expectedDirection: "high" },
        { labId: "lab-urine-protein", labName: "Protein", expectedDirection: "high" },
      ],
      suggestsDiagnosis: ["IgA nephropathy", "Post-streptococcal GN", "Lupus nephritis", "ANCA vasculitis"],
      clinicalContext: "RBC casts are pathognomonic for glomerulonephritis. Dysmorphic RBCs suggest glomerular origin. Proteinuria often present. Urgent nephrology referral needed.",
    },
    {
      patternName: "Nephrotic Syndrome",
      description: "Heavy proteinuria with lipiduria",
      labFindings: [
        { labId: "lab-urine-protein", labName: "Protein", expectedDirection: "high" },
      ],
      suggestsDiagnosis: ["Minimal change disease", "Membranous nephropathy", "FSGS", "Diabetic nephropathy"],
      clinicalContext: "Heavy proteinuria (>3.5 g/day or UPCR >3.5), often with fatty casts, oval fat bodies, and Maltese cross on polarized light. Associated with edema, hypoalbuminemia, hyperlipidemia.",
    },
    {
      patternName: "Acute Tubular Necrosis",
      description: "Muddy brown granular casts indicating tubular injury",
      labFindings: [
        { labId: "lab-urine-blood", labName: "Blood", expectedDirection: "normal" },
        { labId: "lab-urine-protein", labName: "Protein", expectedDirection: "normal" },
      ],
      suggestsDiagnosis: ["Ischemic ATN", "Nephrotoxic ATN", "Sepsis-associated AKI"],
      clinicalContext: "Muddy brown granular casts are characteristic of ATN. FENa >2% supports intrinsic AKI. Low urine SG (1.010) indicates lost concentrating ability. Renal epithelial cells may be present.",
    },
  ],
};
