/**
 * Metabolic Panel Educational Content
 *
 * Comprehensive educational content for understanding and interpreting
 * Basic and Comprehensive Metabolic Panels (BMP/CMP).
 */

import { EducationalContent } from "../types";

export const metabolicPanelContent: EducationalContent = {
  id: "metabolic-panel-interpretation",
  type: "concept",
  name: "Metabolic Panel Interpretation",
  alternateNames: ["BMP Interpretation", "CMP Interpretation", "Chemistry Panel"],

  levels: {
    1: {
      level: 1,
      summary: "A metabolic panel is a blood test that checks how well your kidneys are working and measures important minerals and sugar in your blood.",
      explanation: `A metabolic panel is a group of blood tests that tells doctors about your body"s chemistry. It measures several important things:

**Electrolytes (minerals):**
- **Sodium** - Helps control how much water is in your body
- **Potassium** - Important for your heart and muscles to work properly
- **Chloride and CO2** - Help keep the right balance of acids in your blood

**Kidney function:**
- **BUN and Creatinine** - Tell doctors how well your kidneys are cleaning your blood

**Blood sugar:**
- **Glucose** - The fuel your body uses for energy

**Calcium (in the comprehensive panel):**
- Important for bones, muscles, and nerves

Doctors order this test to check your overall health, make sure medications aren"t affecting your kidneys, and look for problems with your body"s chemistry.`,
      keyTerms: [
        { term: "electrolytes", definition: "Minerals in your blood that help your body work properly" },
        { term: "BUN", definition: "Blood Urea Nitrogen - a waste product that shows how well your kidneys work" },
        { term: "creatinine", definition: "A waste product from muscles that helps measure kidney function" },
        { term: "glucose", definition: "Blood sugar - the main source of energy for your body" },
      ],
      analogies: [
        "Your kidneys work like filters in a fish tank - they clean your blood and remove waste. BUN and creatinine tell us how well those filters are working.",
        "Electrolytes are like the battery acid in a car battery - you need the right balance for everything to work properly.",
      ],
    },
    2: {
      level: 2,
      summary: "The metabolic panel evaluates kidney function, electrolyte balance, and glucose metabolism, with the CMP adding liver function and protein measurements.",
      explanation: `## Basic Metabolic Panel (BMP) Components

**Electrolytes:**
| Test | Normal Range | Function |
|------|--------------|----------|
| Sodium | 136-145 mEq/L | Fluid balance, nerve function |
| Potassium | 3.5-5.0 mEq/L | Heart rhythm, muscle function |
| Chloride | 98-106 mEq/L | Acid-base balance |
| CO2/Bicarbonate | 22-28 mEq/L | Acid-base balance |

**Kidney Function:**
| Test | Normal Range | Significance |
|------|--------------|--------------|
| BUN | 7-20 mg/dL | Protein metabolism, kidney function |
| Creatinine | 0.7-1.3 mg/dL | Muscle metabolism, kidney function |

**Blood Sugar:**
- Glucose: 70-100 mg/dL (fasting)

## Comprehensive Metabolic Panel (CMP) Adds:

**Liver Tests:**
- AST, ALT (liver enzymes)
- Alkaline Phosphatase
- Bilirubin

**Proteins:**
- Total Protein
- Albumin

**Clinical Uses:**
- Routine health screening
- Monitoring medications (especially those affecting kidneys)
- Emergency evaluation (dehydration, diabetic emergencies)
- Pre-surgical assessment`,
      keyTerms: [
        { term: "BMP", definition: "Basic Metabolic Panel - tests electrolytes, kidney function, and glucose" },
        { term: "CMP", definition: "Comprehensive Metabolic Panel - BMP plus liver function and proteins" },
        { term: "hyponatremia", definition: "Low sodium level in the blood", pronunciation: "hy-po-na-TREE-me-ah" },
        { term: "hyperkalemia", definition: "High potassium level in the blood", pronunciation: "hy-per-ka-LEE-me-ah" },
      ],
      analogies: [
        "The BMP is like a basic car diagnostic - checking the essentials. The CMP is the full diagnostic that also looks at the engine (liver) performance.",
        "Potassium is like the spark plugs for your heart - too much or too little and the rhythm gets off.",
      ],
    },
    3: {
      level: 3,
      summary: "Metabolic panel interpretation requires understanding of kidney function calculations, anion gap analysis, and recognition of patterns suggesting specific diagnoses.",
      explanation: `## Systematic Metabolic Panel Interpretation

### Kidney Function Assessment

**Estimated GFR (eGFR):**
- CKD-EPI equation preferred over Cockcroft-Gault
- eGFR >90: Normal
- eGFR 60-89: Mild decrease
- eGFR 30-59: Moderate decrease (CKD Stage 3)
- eGFR 15-29: Severe decrease (CKD Stage 4)
- eGFR <15: Kidney failure (CKD Stage 5)

**BUN:Creatinine Ratio:**
| Ratio | Interpretation |
|-------|----------------|
| 10-20:1 | Normal |
| >20:1 | Pre-renal (dehydration, GI bleed, high protein) |
| <10:1 | Intrinsic renal, liver disease, malnutrition |

### Anion Gap Calculation

**Formula:** Anion Gap = Na - (Cl + HCO3)
**Normal:** 8-12 mEq/L

**Elevated Anion Gap (MUDPILES):**
- **M**ethanol
- **U**remia
- **D**KA
- **P**ropylene glycol
- **I**soniazid/Iron
- **L**actic acidosis
- **E**thylene glycol
- **S**alicylates

### Electrolyte Disorders

**Hyponatremia Assessment:**
1. Check serum osmolality (true vs pseudo)
2. Assess volume status
3. Check urine sodium and osmolality

**Hyperkalemia Management Priorities:**
1. ECG changes? (peaked T waves, widened QRS)
2. Calcium gluconate if ECG changes
3. Shift K+ intracellularly (insulin/glucose, beta-agonists)
4. Eliminate K+ (diuretics, dialysis, Kayexalate)

### Critical Values
- Na <120 or >160 mEq/L
- K <2.5 or >6.5 mEq/L
- Glucose <50 or >500 mg/dL
- Creatinine rapid rise (>0.5 mg/dL in 24-48h)`,
      keyTerms: [
        { term: "eGFR", definition: "Estimated Glomerular Filtration Rate - calculated measure of kidney function" },
        { term: "anion gap", definition: "Calculated value detecting unmeasured anions; elevated in certain acidoses" },
        { term: "osmolality", definition: "Concentration of dissolved particles in blood; helps classify hyponatremia" },
        { term: "pre-renal azotemia", definition: "Elevated BUN/creatinine from reduced kidney blood flow, not kidney damage" },
      ],
      clinicalNotes: "Always interpret electrolytes in clinical context. Pseudohyponatremia from hyperlipidemia or hyperproteinemia will have normal osmolality.",
    },
    4: {
      level: 4,
      summary: "Advanced metabolic panel interpretation integrates acid-base physiology, identifies mixed disorders, and recognizes patterns indicating specific pathophysiologic states.",
      explanation: `## Advanced Metabolic Panel Interpretation

### Acid-Base Analysis Framework

**Step-by-Step Approach:**
1. **pH**: Acidemia (<7.35) or Alkalemia (>7.45)?
2. **Primary disorder**: Check PCO2 and HCO3
3. **Compensation**: Is it appropriate?
4. **Anion gap**: Calculate and interpret
5. **Delta-delta**: If AG elevated, check for hidden metabolic alkalosis

**Expected Compensation:**
| Primary Disorder | Expected Compensation |
|------------------|----------------------|
| Metabolic acidosis | PCO2 = 1.5(HCO3) + 8 ± 2 |
| Metabolic alkalosis | PCO2 rises 0.7 mmHg per 1 mEq/L HCO3 |
| Respiratory acidosis (acute) | HCO3 rises 1 per 10 mmHg PCO2 |
| Respiratory acidosis (chronic) | HCO3 rises 3.5 per 10 mmHg PCO2 |

### Delta-Delta Analysis

**Delta AG** = Calculated AG - 12
**Delta HCO3** = 24 - Measured HCO3

| Delta AG/Delta HCO3 Ratio | Interpretation |
|---------------------------|----------------|
| <1 | Combined AG + non-AG metabolic acidosis |
| 1-2 | Pure AG metabolic acidosis |
| >2 | AG acidosis + metabolic alkalosis |

### Osmolar Gap

**Calculated Osmolality** = 2(Na) + Glucose/18 + BUN/2.8

**Osmolar Gap** = Measured - Calculated (Normal <10)

**Elevated in:**
- Ethanol
- Methanol
- Ethylene glycol
- Isopropyl alcohol
- Propylene glycol

### Complex Electrolyte Patterns

**Syndrome of Inappropriate ADH (SIADH):**
- Euvolemic hyponatremia
- Serum osmolality <275
- Urine osmolality >100 (usually >300)
- Urine sodium >30 mEq/L
- Normal thyroid and adrenal function

**Refeeding Syndrome Pattern:**
- Hypophosphatemia (primary feature)
- Hypokalemia
- Hypomagnesemia
- Volume overload

### Kidney Injury Patterns

**Acute Kidney Injury (AKI) by KDIGO:**
| Stage | Creatinine Criteria | Urine Output |
|-------|---------------------|--------------|
| 1 | 1.5-1.9x baseline or ≥0.3 rise | <0.5 mL/kg/h for 6-12h |
| 2 | 2.0-2.9x baseline | <0.5 mL/kg/h for ≥12h |
| 3 | ≥3x baseline or ≥4.0 or RRT | <0.3 mL/kg/h for ≥24h or anuria ≥12h |

**FENa Interpretation:**
- <1%: Pre-renal azotemia (intact tubular function)
- >2%: Intrinsic renal damage (ATN)
- Limitations: Diuretics, CKD, contrast, sepsis affect interpretation`,
      keyTerms: [
        { term: "delta-delta", definition: "Comparison of change in anion gap to change in bicarbonate; detects mixed disorders" },
        { term: "osmolar gap", definition: "Difference between measured and calculated osmolality; elevated with toxic alcohols" },
        { term: "FENa", definition: "Fractional Excretion of Sodium - helps differentiate pre-renal from intrinsic AKI" },
        { term: "SIADH", definition: "Syndrome of Inappropriate ADH secretion causing euvolemic hyponatremia" },
      ],
      clinicalNotes: "Mixed acid-base disorders are common in critically ill patients. Always check for appropriate compensation and perform delta-delta analysis when anion gap is elevated.",
    },
    5: {
      level: 5,
      summary: "Expert metabolic panel interpretation incorporates novel biomarkers, precision medicine approaches, and evidence-based protocols for complex electrolyte and acid-base management.",
      explanation: `## Expert-Level Metabolic Panel Interpretation

### Novel Kidney Biomarkers

**Beyond Creatinine:**
| Biomarker | Utility |
|-----------|---------|
| Cystatin C | GFR estimation, less affected by muscle mass |
| NGAL | Early AKI detection (rises hours before creatinine) |
| KIM-1 | Proximal tubular injury marker |
| TIMP-2/IGFBP7 | FDA-approved AKI risk assessment (Nephrocheck) |

**Creatinine Limitations:**
- Delayed rise (24-48h after injury)
- Affected by muscle mass, diet, medications
- Steady-state assumption often violated

### Precision Medicine in Electrolyte Management

**Sodium Correction Principles:**
- Chronic hyponatremia: Correct ≤8 mEq/L in first 24h
- Overcorrection risk: Osmotic demyelination syndrome (ODS)
- High-risk patients: Na <120, alcoholism, malnutrition, liver disease

**Potassium Repletion:**
- 10 mEq KCl raises serum K+ by ~0.1 mEq/L (variable)
- Magnesium must be repleted for refractory hypokalemia
- ECG monitoring for IV K+ >10 mEq/h

### Complex Acid-Base Scenarios

**Triple Acid-Base Disorders:**
Example: DKA patient with vomiting on chronic diuretics
- AG metabolic acidosis (DKA)
- Metabolic alkalosis (vomiting, contraction)
- Respiratory alkalosis (Kussmaul compensation overshooting)

**Stewart Approach:**
- Strong Ion Difference (SID)
- Total weak acids (Atot)
- PCO2
- More physiologic but complex; useful in ICU

### Evidence-Based Protocols

**IV Fluid Selection:**
| Scenario | Recommended Fluid | Evidence |
|----------|-------------------|----------|
| Sepsis resuscitation | Balanced crystalloids | SMART trial |
| DKA | NS initially, then balanced | Consider saline-induced acidosis |
| Hypernatremia | D5W or 0.45% saline | Calculated free water deficit |
| Hypovolemic hyponatremia | NS | Volume repletion first |

**Bicarbonate Therapy:**
- pH <6.9 in DKA: Consider bicarbonate
- pH <7.1 in lactic acidosis: Controversial, no mortality benefit
- Severe hyperkalemia with ECG changes: Adjunctive role

### Specialized Scenarios

**Tumor Lysis Syndrome:**
- Hyperuricemia (rasburicase if high risk)
- Hyperkalemia
- Hyperphosphatemia
- Hypocalcemia (from phosphate binding)
- AKI risk from crystal deposition

**Rhabdomyolysis Protocol:**
- Target UOP 200-300 mL/h with aggressive IVF
- Avoid calcium unless symptomatic hypocalcemia
- Monitor for compartment syndrome
- Bicarbonate controversial (prevents myoglobin precipitation vs. promotes CaPO4 deposition)

### Quality and Safety

**Critical Value Management:**
- Immediate notification and documentation
- Repeat confirmation vs. clinical action timing
- System-based safety nets

**Common Laboratory Errors:**
- Hemolysis: Pseudohyperkalemia
- Tourniquet time: Elevated potassium, lactate
- Delayed processing: Glucose consumption
- Lipemia: Pseudohyponatremia (with ion-selective electrodes, less common)`,
      keyTerms: [
        { term: "cystatin C", definition: "GFR marker less affected by muscle mass; combined with creatinine improves accuracy" },
        { term: "Stewart approach", definition: "Physicochemical method of acid-base analysis using strong ion difference" },
        { term: "osmotic demyelination syndrome", definition: "Brain injury from overly rapid sodium correction; formerly called central pontine myelinolysis" },
        { term: "Nephrocheck", definition: "Urinary biomarker test (TIMP-2 x IGFBP7) predicting AKI risk in ICU patients" },
      ],
      clinicalNotes: "Expert interpretation requires integration of clinical trajectory, medication effects, and recognition of laboratory artifacts. Evidence-based protocols should guide management, but individualization remains essential for complex cases.",
    },
  },

  media: [],
  citations: [
    {
      id: "kdigo-aki",
      type: "article",
      title: "KDIGO Clinical Practice Guideline for Acute Kidney Injury",
      source: "Kidney International Supplements",
      authors: ["KDIGO AKI Work Group"],
    },
    {
      id: "smart-trial",
      type: "article",
      title: "Balanced Crystalloids versus Saline in Critically Ill Adults",
      source: "New England Journal of Medicine",
      authors: ["Semler MW", "Self WH"],
    },
  ],
  crossReferences: [
    { targetId: "lab-glucose", targetType: "concept", relationship: "child" },
    { targetId: "lab-creatinine", targetType: "concept", relationship: "child" },
    { targetId: "lab-sodium", targetType: "concept", relationship: "child" },
  ],
  tags: {
    systems: ["renal", "metabolic"],
    topics: ["laboratory", "nephrology", "electrolytes", "acid-base"],
    clinicalRelevance: "critical",
    examRelevance: { usmle: true, nbme: true, shelf: ["medicine", "surgery", "pediatrics"] },
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: "published",
};
