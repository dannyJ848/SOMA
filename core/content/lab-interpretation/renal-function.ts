/**
 * Renal Function Tests Educational Content
 *
 * Comprehensive educational content for understanding and interpreting
 * kidney function tests including creatinine, BUN, GFR, and urinary markers.
 */

import { EducationalContent } from "../types";

export const renalFunctionContent: EducationalContent = {
  id: "renal-function-interpretation",
  type: "concept",
  name: "Renal Function Test Interpretation",
  alternateNames: ["Kidney Function Tests", "Renal Panel", "Kidney Panel"],

  levels: {
    1: {
      level: 1,
      summary: "Kidney function tests are blood and urine tests that check how well your kidneys are filtering waste from your blood.",
      explanation: `Your kidneys are like filters that clean your blood. Every day, they filter about 200 quarts of blood and remove waste products that leave your body as urine.

**Main tests for kidney function:**

**Creatinine:**
- A waste product from your muscles
- Your kidneys normally remove it from your blood
- When kidneys aren"t working well, creatinine builds up

**BUN (Blood Urea Nitrogen):**
- A waste product from protein breakdown
- Also removed by your kidneys
- Can go up when you"re dehydrated or eat a lot of protein

**GFR (Glomerular Filtration Rate):**
- Calculated from your creatinine level
- The best overall measure of how well your kidneys work
- Shows what percentage of normal kidney function you have

Doctors order these tests to check if your kidneys are healthy, see if medications might be affecting them, and monitor conditions like diabetes or high blood pressure that can damage kidneys.`,
      keyTerms: [
        { term: "creatinine", definition: "A waste product from muscles that kidneys filter out of blood" },
        { term: "BUN", definition: "Blood Urea Nitrogen - a waste product from protein that kidneys remove" },
        { term: "GFR", definition: "Glomerular Filtration Rate - a measure of how well kidneys filter blood" },
        { term: "kidneys", definition: "Two bean-shaped organs that clean waste from your blood and make urine" },
      ],
      analogies: [
        "Your kidneys work like a coffee filter - they let the good stuff (clean blood) through and catch the waste products to throw away.",
        "GFR is like a report card for your kidneys - it tells you what grade they\"re getting at their job of cleaning your blood.",
      ],
    },
    2: {
      level: 2,
      summary: "Renal function assessment uses creatinine-based GFR estimation, BUN, and urinalysis to evaluate filtration, tubular function, and detect kidney damage.",
      explanation: `## Key Renal Function Tests

**Serum Creatinine:**
| Normal Range | Notes |
|--------------|-------|
| 0.7-1.3 mg/dL (men) | Varies with muscle mass |
| 0.6-1.1 mg/dL (women) | Higher in athletes, lower in elderly |

**Blood Urea Nitrogen (BUN):**
| Normal Range | Notes |
|--------------|-------|
| 7-20 mg/dL | Affected by protein intake, hydration |

**BUN:Creatinine Ratio:**
- Normal: 10-20:1
- High (>20:1): Dehydration, GI bleed, high protein diet
- Low (<10:1): Liver disease, malnutrition

**Estimated GFR (eGFR):**
| Stage | eGFR | Kidney Function |
|-------|------|-----------------|
| Normal | >90 | Full function |
| Stage 1 CKD | >90 + damage | Kidney damage, normal GFR |
| Stage 2 | 60-89 | Mild decrease |
| Stage 3a | 45-59 | Mild-moderate decrease |
| Stage 3b | 30-44 | Moderate-severe decrease |
| Stage 4 | 15-29 | Severe decrease |
| Stage 5 | <15 | Kidney failure |

**Urinalysis Components:**
- Protein: Marker of glomerular damage
- Blood: May indicate glomerulonephritis, stones, infection
- Specific gravity: Concentrating ability
- Casts: Help localize kidney pathology`,
      keyTerms: [
        { term: "eGFR", definition: "Estimated GFR - calculated from creatinine, age, sex, and race" },
        { term: "CKD", definition: "Chronic Kidney Disease - permanent kidney damage lasting >3 months" },
        { term: "proteinuria", definition: "Protein in urine, often a sign of kidney damage", pronunciation: "pro-teen-YUR-ee-ah" },
        { term: "urinalysis", definition: "Laboratory examination of urine for signs of disease" },
      ],
      analogies: [
        "Creatinine level is like measuring how full a trash can is - when the cleaning service (kidneys) slows down, the trash (creatinine) piles up.",
        "Different stages of CKD are like a dimmer switch - as kidney function decreases, the filtering \"light\" gets progressively dimmer.",
      ],
    },
    3: {
      level: 3,
      summary: "Renal function interpretation requires distinguishing acute from chronic injury, pre-renal from intrinsic from post-renal causes, and integrating urine studies.",
      explanation: `## Systematic Renal Function Interpretation

### Acute Kidney Injury (AKI) Classification

**KDIGO Staging:**
| Stage | Creatinine Criteria | Urine Output |
|-------|---------------------|--------------|
| 1 | 1.5-1.9x baseline OR ≥0.3 mg/dL rise | <0.5 mL/kg/h for 6-12h |
| 2 | 2.0-2.9x baseline | <0.5 mL/kg/h for ≥12h |
| 3 | ≥3x baseline OR ≥4.0 OR dialysis | <0.3 mL/kg/h for ≥24h OR anuria ≥12h |

### Localizing the Lesion

**Pre-renal (decreased perfusion):**
- BUN:Cr >20:1
- FENa <1%, FEUrea <35%
- Urine osmolality >500 mOsm/kg
- Bland sediment

**Intrinsic Renal:**
- BUN:Cr 10-15:1
- FENa >2% (in ATN)
- Muddy brown casts (ATN)
- RBC casts (glomerulonephritis)
- WBC casts (interstitial nephritis)

**Post-renal (obstruction):**
- Hydronephrosis on ultrasound
- History of BPH, malignancy, stones
- May have bland sediment
- Relief with catheterization

### Urine Studies

**Fractional Excretion of Sodium (FENa):**
FENa = (UNa x PCr) / (PNa x UCr) x 100

| FENa | Interpretation |
|------|----------------|
| <1% | Pre-renal azotemia |
| >2% | Intrinsic renal (ATN) |

**Limitations of FENa:**
- Diuretics invalidate (use FEUrea instead)
- May be <1% in contrast nephropathy, rhabdomyolysis, early sepsis

### Proteinuria Quantification

**Spot Urine Protein:Creatinine Ratio:**
| Ratio (mg/g) | Significance |
|--------------|--------------|
| <150 | Normal |
| 150-500 | Mild proteinuria |
| 500-3500 | Moderate proteinuria |
| >3500 | Nephrotic range |

**Albuminuria (more sensitive for diabetic nephropathy):**
| UACR (mg/g) | Category |
|-------------|----------|
| <30 | Normal |
| 30-300 | Moderately increased (microalbuminuria) |
| >300 | Severely increased (macroalbuminuria) |

### GFR Estimation Equations

**CKD-EPI (preferred):**
- Uses creatinine, age, sex
- Race coefficient controversial, being phased out
- More accurate at higher GFR than MDRD

**Cystatin C-based:**
- Useful when creatinine unreliable (extremes of muscle mass)
- Combined creatinine-cystatin C equation most accurate`,
      keyTerms: [
        { term: "FENa", definition: "Fractional Excretion of Sodium - helps differentiate pre-renal from intrinsic AKI" },
        { term: "ATN", definition: "Acute Tubular Necrosis - intrinsic kidney injury from ischemia or toxins" },
        { term: "UACR", definition: "Urine Albumin:Creatinine Ratio - sensitive marker for diabetic kidney disease" },
        { term: "muddy brown casts", definition: "Tubular epithelial cell casts seen in ATN" },
      ],
      clinicalNotes: "FENa should be interpreted with caution. Many conditions that cause intrinsic AKI (contrast, rhabdomyolysis, early sepsis) may initially have FENa <1%.",
    },
    4: {
      level: 4,
      summary: "Advanced renal function assessment integrates novel biomarkers, risk prediction models, and understanding of complex scenarios including AKI-CKD transitions.",
      explanation: `## Advanced Renal Function Interpretation

### Novel AKI Biomarkers

**Damage Markers:**
| Biomarker | Source | Timing |
|-----------|--------|--------|
| NGAL | Distal tubule | 2h post-injury |
| KIM-1 | Proximal tubule | 12-24h |
| L-FABP | Proximal tubule | 1-2h |
| IL-18 | Proximal tubule | 6-12h |

**Cell Cycle Arrest Markers (Nephrocheck):**
- TIMP-2 x IGFBP7
- FDA-approved for AKI risk assessment
- AUC 0.80 for predicting moderate-severe AKI

**Functional Markers:**
- Cystatin C: Less affected by muscle mass
- Proenkephalin A: Reflects real-time GFR

### AKI-CKD Transition

**Risk Factors for Non-Recovery:**
- Severity of AKI (Stage 3)
- Duration of AKI
- Pre-existing CKD
- Older age
- Diabetes, hypertension
- Recurrent AKI episodes

**Post-AKI Monitoring:**
- Creatinine check at 3 months post-AKI
- Annual monitoring for CKD development
- Up to 25% develop CKD within 3 years

### Complex Creatinine Scenarios

**Creatinine Kinetics:**
- Steady-state assumption often violated in AKI
- During acute injury, creatinine lags behind GFR change
- Can estimate GFR trajectory using kinetic equations

**Creatinine Pitfalls:**
| Situation | Effect on Creatinine |
|-----------|---------------------|
| Amputation, sarcopenia | Falsely low |
| High meat intake | Falsely high |
| Creatine supplements | Falsely high |
| Trimethoprim, cimetidine | Falsely high (blocks tubular secretion) |
| Rapid muscle breakdown | Acute elevation |

### Glomerulonephritis Workup

**Serologic Testing by Syndrome:**

**Nephritic Syndrome:**
| Test | Associated Condition |
|------|---------------------|
| Anti-GBM | Goodpasture syndrome |
| ANCA (PR3, MPO) | Granulomatosis with polyangiitis, microscopic polyangiitis |
| C3/C4 | Low in lupus, post-infectious, MPGN |
| ASO titer | Post-streptococcal GN |

**Nephrotic Syndrome:**
| Test | Associated Condition |
|------|---------------------|
| ANA, anti-dsDNA | Lupus nephritis |
| Hepatitis B, C | Membranous, MPGN |
| HIV | FSGS, HIVAN |
| SPEP/UPEP | Amyloidosis, light chain deposition |
| PLA2R antibody | Primary membranous nephropathy |

### Contrast-Induced AKI Prevention

**Risk Factors:**
- eGFR <45 mL/min/1.73m2
- Diabetes
- Heart failure
- High contrast volume
- Multiple procedures

**Prevention Strategies:**
| Intervention | Evidence |
|--------------|----------|
| Pre-procedure hydration | Strong |
| Low/iso-osmolar contrast | Moderate |
| Minimizing contrast volume | Strong |
| Holding metformin | Prevents lactic acidosis, not AKI |
| N-acetylcysteine | Not beneficial (PRESERVE trial) |`,
      keyTerms: [
        { term: "NGAL", definition: "Neutrophil Gelatinase-Associated Lipocalin - early biomarker of tubular injury" },
        { term: "kinetic GFR", definition: "Mathematical estimation of changing GFR during non-steady-state conditions" },
        { term: "PLA2R antibody", definition: "Phospholipase A2 Receptor antibody - diagnostic marker for primary membranous nephropathy" },
        { term: "PRESERVE trial", definition: "Trial showing N-acetylcysteine does not prevent contrast-induced AKI" },
      ],
      clinicalNotes: "In rapidly changing kidney function, creatinine significantly underestimates the degree of GFR loss. Novel biomarkers may provide earlier detection but are not yet standard of care.",
    },
    5: {
      level: 5,
      summary: "Expert renal function interpretation encompasses precision nephrology approaches, complex glomerular disease management, and integration of omics technologies.",
      explanation: `## Expert-Level Renal Function Interpretation

### Precision Nephrology

**Genetic Testing Indications:**
| Scenario | Testing Approach |
|----------|------------------|
| FSGS in young patients | NPHS2, INF2, TRPC6 panel |
| Unexplained CKD | COL4A3-5 (Alport spectrum) |
| Polycystic kidneys | PKD1, PKD2 |
| Nephrolithiasis | Stone gene panels |
| Atypical HUS | Complement gene panel |

**Pharmacogenomics in Nephrology:**
- APOL1 variants: Increased FSGS/CKD risk in African ancestry
- CYP3A5: Tacrolimus dosing in transplant
- SLCO1B1: Statin myopathy/AKI risk
- HLA typing: Transplant matching, membranous nephropathy associations

### Complex Glomerulonephritis Management

**ANCA-Associated Vasculitis:**
| Feature | Management Implication |
|---------|----------------------|
| Severe renal involvement (Cr >5.6) | PEXIVAS: Plasma exchange not beneficial |
| Pulmonary hemorrhage | Plasma exchange may still benefit |
| Anti-GBM overlap | Plasma exchange indicated |
| Maintenance | Rituximab superior to azathioprine (MAINRITSAN) |

**Lupus Nephritis (ISN/RPS Classification):**
| Class | Treatment |
|-------|-----------|
| I, II | Treat extrarenal manifestations |
| III, IV | Induction: MMF or cyclophosphamide |
| V | MMF or calcineurin inhibitors |
| III/IV + V | Combined approach |

**Membranous Nephropathy:**
- PLA2R positive: Immunosuppression more likely beneficial
- PLA2R negative: Consider secondary causes, THSD7A testing
- Treatment: Rituximab emerging as first-line
- Spontaneous remission in ~30%

### Advanced Hemodialysis Concepts

**Dialysis Adequacy:**
| Metric | Target | Notes |
|--------|--------|-------|
| Kt/V | ≥1.4 (thrice weekly) | Single-pool calculation |
| URR | ≥70% | Urea reduction ratio |
| Standardized Kt/V | ≥2.3/week | For non-standard schedules |

**Residual Kidney Function:**
- Preserved RKF associated with better outcomes
- Consider when calculating dialysis dose
- May allow lower dialysis intensity initially

### Kidney Transplant Considerations

**GFR Estimation Post-Transplant:**
- Standard equations validated
- Cystatin C may be affected by steroids, CNI
- 24h CrCl still useful

**Rejection Monitoring:**
- Donor-derived cell-free DNA (dd-cfDNA)
- Rising dd-cfDNA >1% suggests rejection
- May detect subclinical rejection before creatinine rises

**Calcineurin Inhibitor Toxicity:**
- Acute: Reversible vasoconstriction, afferent arteriole
- Chronic: Striped fibrosis, tubular atrophy
- Trough monitoring essential
- Consider mTOR inhibitor conversion

### Emerging Concepts

**Subphenotyping AKI:**
- Cluster analysis reveals distinct AKI subtypes
- Different trajectories and prognosis
- May guide precision therapy in future

**Urinary Biomarker Panels:**
- Multi-marker panels improve AKI prediction
- Combination of damage and functional markers
- Decision support algorithms in development

**Kidney-on-a-Chip:**
- Nephrotoxicity testing
- Drug development applications
- Personalized medicine potential

### Quality Metrics

**CKD Quality Measures:**
- ACE-I/ARB use in proteinuric CKD
- Statin therapy in CKD
- Avoiding nephrotoxins
- Blood pressure control
- Appropriate nephrology referral

**AKI Quality Measures:**
- Recognition and staging
- Avoidance of nephrotoxins during AKI
- Medication dose adjustment
- Post-AKI follow-up`,
      keyTerms: [
        { term: "APOL1", definition: "Apolipoprotein L1 gene - variants associated with increased kidney disease risk in African ancestry" },
        { term: "donor-derived cell-free DNA", definition: "Circulating DNA from transplanted organ; rising levels suggest rejection" },
        { term: "subphenotyping", definition: "Using multi-marker approaches to identify distinct disease subtypes with different prognoses" },
        { term: "striped fibrosis", definition: "Histologic pattern of calcineurin inhibitor toxicity in transplant kidneys" },
      ],
      clinicalNotes: "Expert renal function interpretation requires integration of traditional markers, novel biomarkers, genetic risk factors, and clinical trajectory. The field is moving toward precision nephrology with individualized risk assessment and targeted therapies.",
    },
  },

  media: [],
  citations: [
    {
      id: "kdigo-ckd-2012",
      type: "article",
      title: "KDIGO 2012 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease",
      source: "Kidney International Supplements",
      authors: ["KDIGO CKD Work Group"],
    },
    {
      id: "kdigo-aki-2012",
      type: "article",
      title: "KDIGO Clinical Practice Guideline for Acute Kidney Injury",
      source: "Kidney International Supplements",
      authors: ["KDIGO AKI Work Group"],
    },
  ],
  crossReferences: [
    { targetId: "lab-creatinine", targetType: "concept", relationship: "child" },
    { targetId: "lab-bun", targetType: "concept", relationship: "child" },
    { targetId: "lab-gfr", targetType: "concept", relationship: "child" },
  ],
  tags: {
    systems: ["renal", "urinary"],
    topics: ["laboratory", "nephrology", "diagnosis"],
    clinicalRelevance: "critical",
    examRelevance: { usmle: true, nbme: true, shelf: ["medicine", "surgery", "pediatrics"] },
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: "published",
};
