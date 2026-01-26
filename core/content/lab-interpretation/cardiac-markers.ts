/**
 * Cardiac Markers Educational Content
 *
 * Comprehensive educational content for understanding and interpreting
 * cardiac biomarkers including troponin, BNP, and other cardiac enzymes.
 */

import { EducationalContent } from "../types";

export const cardiacMarkersContent: EducationalContent = {
  id: "cardiac-markers-interpretation",
  type: "concept",
  name: "Cardiac Markers Interpretation",
  alternateNames: ["Cardiac Biomarkers", "Cardiac Enzymes", "Heart Damage Markers"],

  levels: {
    1: {
      level: 1,
      summary: "Cardiac markers are blood tests that show if your heart muscle has been damaged, like during a heart attack.",
      explanation: `When your heart is injured or stressed, special proteins leak from heart cells into your blood. Doctors test for these proteins to find out if something is wrong with your heart.

**Main cardiac markers:**

**Troponin:**
- The most important test for heart attacks
- Released when heart muscle cells are damaged
- Even tiny amounts can be detected with modern tests
- Stays elevated for several days after a heart attack

**BNP/NT-proBNP:**
- Released when the heart is stretched or strained
- Helps diagnose heart failure
- High levels mean your heart is working too hard

**CK-MB:**
- An older test for heart damage
- Less specific than troponin
- Still sometimes used along with troponin

Doctors order these tests when someone has chest pain, shortness of breath, or other symptoms that might mean a heart problem.`,
      keyTerms: [
        { term: "troponin", definition: "A protein released from heart muscle cells when they are damaged" },
        { term: "heart attack", definition: "When blood flow to part of the heart is blocked, damaging the heart muscle" },
        { term: "BNP", definition: "Brain Natriuretic Peptide - a protein released when the heart is stretched" },
        { term: "heart failure", definition: "When your heart can\"t pump blood as well as it should" },
      ],
      analogies: [
        "Troponin is like a smoke alarm for your heart - it goes off when there\"s damage, alerting doctors to the problem.",
        "BNP is like a stress meter for your heart - the higher it is, the more your heart is struggling.",
      ],
    },
    2: {
      level: 2,
      summary: "Troponin is the gold standard for detecting myocardial injury, while natriuretic peptides (BNP/NT-proBNP) help diagnose and monitor heart failure.",
      explanation: `## Cardiac Biomarkers Overview

### Troponin (cTnI/cTnT)

**Characteristics:**
| Feature | Value |
|---------|-------|
| Rise time | 2-4 hours after injury |
| Peak | 12-24 hours |
| Duration | 7-14 days (depending on assay) |
| Specificity | High for cardiac injury |

**Interpretation:**
- High-sensitivity assays detect very small amounts
- Any elevation above 99th percentile is abnormal
- Rise and/or fall pattern needed for acute MI diagnosis

**Causes of Elevated Troponin:**
| Cardiac | Non-Cardiac |
|---------|-------------|
| Acute MI | Renal failure |
| Myocarditis | Sepsis/critical illness |
| Heart failure | Pulmonary embolism |
| Arrhythmias | Extreme exercise |
| Cardiac procedures | Stroke |

### Natriuretic Peptides

**BNP vs NT-proBNP:**
| Feature | BNP | NT-proBNP |
|---------|-----|-----------|
| Half-life | 20 minutes | 1-2 hours |
| Cleared by | Kidney + receptors | Kidney only |
| More affected by kidney | Less | More |

**Interpretation for Heart Failure:**
| BNP (pg/mL) | NT-proBNP (pg/mL) | Interpretation |
|-------------|-------------------|----------------|
| <100 | <300 | Heart failure unlikely |
| 100-400 | 300-900 | Gray zone |
| >400 | >900 (age-adjusted) | Heart failure likely |

### CK-MB

**Historical Marker:**
- Less specific than troponin
- Rises faster, clears faster
- May help time acute MI
- Useful for detecting reinfarction`,
      keyTerms: [
        { term: "high-sensitivity troponin", definition: "Newer troponin assays that can detect very small amounts of heart damage" },
        { term: "99th percentile", definition: "The cut-off above which troponin is considered abnormal" },
        { term: "NT-proBNP", definition: "N-terminal pro-B-type Natriuretic Peptide - a marker of heart strain" },
        { term: "myocarditis", definition: "Inflammation of the heart muscle, often from viral infection" },
      ],
      analogies: [
        "High-sensitivity troponin is like a very sensitive microphone - it can pick up even a whisper of heart damage.",
        "BNP and NT-proBNP are like pressure gauges showing how hard your heart is working.",
      ],
    },
    3: {
      level: 3,
      summary: "Cardiac marker interpretation requires understanding of kinetics, causes of non-ACS elevation, and integration with clinical presentation for accurate diagnosis.",
      explanation: `## Systematic Cardiac Marker Interpretation

### High-Sensitivity Troponin (hs-cTn)

**Diagnostic Algorithms:**

**0/1 Hour Protocol (ESC):**
| Baseline hs-cTnT | 1-hour delta | Interpretation |
|------------------|--------------|----------------|
| <5 ng/L | <3 ng/L | Rule out MI |
| >52 ng/L | - | Rule in MI |
| - | >5 ng/L | Rule in MI |
| Other | Other | Observe, repeat at 3h |

**0/3 Hour Protocol:**
- Rule out: <99th percentile at 0h and 3h with <20% change
- Rule in: >99th percentile with rise/fall >20%

### Troponin Kinetics

**Acute MI Pattern:**
- Rising from baseline (delta >20%)
- Peak at 12-24 hours
- Gradual decline over days

**Chronic Elevation Pattern:**
- Stable elevated values
- Suggests chronic injury: HF, CKD, structural heart disease

### Non-ACS Troponin Elevation

**Type 1 vs Type 2 MI:**
| Type 1 MI | Type 2 MI |
|-----------|-----------|
| Plaque rupture/erosion | Supply-demand mismatch |
| Primary coronary event | Secondary to other condition |
| Needs coronary intervention evaluation | Treat underlying cause |

**Common Type 2 MI Triggers:**
- Tachyarrhythmias
- Severe hypertension or hypotension
- Respiratory failure
- Severe anemia
- Sepsis

### BNP/NT-proBNP Interpretation

**Factors Affecting Levels:**
| Increase BNP | Decrease BNP |
|--------------|--------------|
| Age | Obesity |
| Female sex | Flash pulmonary edema (early) |
| Renal failure | |
| Atrial fibrillation | |
| Pulmonary hypertension | |

**Age-Adjusted NT-proBNP (for HF diagnosis):**
| Age | Rule-out (<) | Rule-in (>) |
|-----|--------------|-------------|
| <50 | 300 pg/mL | 450 pg/mL |
| 50-75 | 300 pg/mL | 900 pg/mL |
| >75 | 300 pg/mL | 1800 pg/mL |

### Other Cardiac Markers

**Myoglobin:**
- Rises early (1-2 hours)
- Not cardiac-specific
- Historical use, largely replaced

**Lactate Dehydrogenase (LDH):**
- Non-specific
- Late marker
- Rarely used for MI now

**High-Sensitivity CRP (hs-CRP):**
- Inflammatory marker
- Cardiovascular risk stratification
- Not for acute diagnosis`,
      keyTerms: [
        { term: "Type 1 MI", definition: "MI caused by atherosclerotic plaque rupture or erosion" },
        { term: "Type 2 MI", definition: "MI caused by oxygen supply-demand mismatch without plaque rupture" },
        { term: "delta", definition: "Change in troponin level between serial measurements" },
        { term: "rule-out protocol", definition: "Algorithm to safely exclude MI using serial troponin measurements" },
      ],
      clinicalNotes: "A rising or falling pattern of troponin is essential for diagnosing acute MI. A single elevated troponin without clinical context does not diagnose MI.",
    },
    4: {
      level: 4,
      summary: "Advanced cardiac marker interpretation integrates prognostic implications, specialized markers, and understanding of assay characteristics for complex clinical decision-making.",
      explanation: `## Advanced Cardiac Marker Interpretation

### Troponin Assay Characteristics

**Assay Comparison:**
| Assay | 99th Percentile | Sex-Specific Cutoffs |
|-------|-----------------|---------------------|
| hs-cTnT (Roche) | 14 ng/L | M: 22, F: 14 |
| hs-cTnI (Abbott) | 26 ng/L | M: 34, F: 16 |
| hs-cTnI (Siemens) | 53 ng/L | Available |

**Sex-Specific Cutoffs:**
- Women have lower baseline troponin
- Using sex-specific cutoffs may identify more women with MI
- Improves diagnostic accuracy

### Prognostic Value

**Troponin Elevation Prognosis:**
| Setting | Prognostic Implication |
|---------|----------------------|
| ACS | Higher peak = larger infarct = worse outcomes |
| Heart failure | Elevated = myocyte loss = worse prognosis |
| Post-PCI | Procedural elevation predicts outcomes |
| Non-cardiac illness | Independent mortality predictor |

**BNP Prognosis in Heart Failure:**
- Discharge BNP predicts readmission
- BNP-guided therapy trials mixed results
- Percent reduction may be more important than absolute value

### Specialized Cardiac Markers

**High-Sensitivity CRP:**
| hs-CRP (mg/L) | Cardiovascular Risk |
|---------------|---------------------|
| <1.0 | Low |
| 1.0-3.0 | Intermediate |
| >3.0 | High |
| >10 | Acute inflammation, not valid |

**Lipoprotein(a):**
- Independent CV risk factor
- Genetic, stable over life
- >50 mg/dL associated with increased risk

**NT-proBNP in Pulmonary Embolism:**
- Risk stratification for PE
- Elevated suggests RV strain
- Part of PESI scoring, sPESI

### Cardiac Markers in Special Populations

**Chronic Kidney Disease:**
- Troponin often elevated at baseline
- Use same cutoffs, focus on delta
- NT-proBNP affected more than BNP
- Higher cutoffs may be needed for HF diagnosis

**Elderly:**
- Higher baseline troponin with age
- Higher BNP/NT-proBNP cutoffs
- Context even more important

**Obesity:**
- Lower BNP/NT-proBNP levels
- May mask heart failure
- Use lower cutoffs

### Point-of-Care Testing

**POC Troponin:**
| Feature | Laboratory | POC |
|---------|------------|-----|
| Sensitivity | Higher | Lower |
| Turnaround | 30-60 min | 15-20 min |
| Use | Definitive diagnosis | Triage, rule out |

**POC BNP:**
- Available for rapid assessment
- May guide disposition decisions
- Same interpretation principles

### Emerging Markers

**Copeptin:**
- C-terminal pro-arginine vasopressin
- Rises immediately with stress
- Combined with troponin: Early rule-out
- Copeptin + hs-cTn at 0h may rule out MI

**Heart-Type Fatty Acid Binding Protein (H-FABP):**
- Cytoplasmic, low molecular weight
- Rises early (1-2 hours)
- May aid early diagnosis

**Galectin-3:**
- Fibrosis marker
- Prognostic in heart failure
- Elevated = worse outcomes

**sST2 (Soluble ST2):**
- Inflammatory/fibrosis marker
- Prognostic in HF
- Less affected by renal function than BNP`,
      keyTerms: [
        { term: "sex-specific cutoffs", definition: "Different troponin thresholds for men and women based on biological differences" },
        { term: "copeptin", definition: "Stress marker that rises immediately; combined with troponin for early MI rule-out" },
        { term: "sST2", definition: "Soluble suppression of tumorigenicity 2 - prognostic marker in heart failure" },
        { term: "Lp(a)", definition: "Lipoprotein(a) - genetically determined cardiovascular risk factor" },
      ],
      clinicalNotes: "Point-of-care troponin assays have lower sensitivity than central laboratory assays. A negative POC troponin should be confirmed with laboratory testing if clinical suspicion remains high.",
    },
    5: {
      level: 5,
      summary: "Expert cardiac marker interpretation encompasses multi-marker strategies, precision medicine applications, and integration with advanced imaging and clinical decision support.",
      explanation: `## Expert-Level Cardiac Marker Interpretation

### Multi-Marker Strategies

**HEART Score Integration:**
| Component | Score |
|-----------|-------|
| History | 0-2 |
| ECG | 0-2 |
| Age | 0-2 |
| Risk factors | 0-2 |
| Troponin | 0-2 |
| **Total** | **0-10** |

**HEART Score Interpretation:**
- 0-3: Low risk, consider early discharge
- 4-6: Intermediate, observation/further testing
- 7-10: High risk, admission and intervention

### Precision Phenotyping

**Troponin Trajectory Analysis:**
- Machine learning algorithms for pattern recognition
- Absolute change vs relative change
- Time-to-peak analysis

**Multi-marker Panels:**
| Marker Combination | Use |
|--------------------|-----|
| hs-cTn + copeptin | Rapid rule-out (0h) |
| Troponin + BNP + hs-CRP | Risk stratification |
| BNP + sST2 + Galectin-3 | HF prognosis |

### MINOCA (MI with No Obstructive CAD)

**Workup When Troponin Positive but No Obstructive CAD:**
1. Cardiac MRI (edema, scar, myocarditis pattern)
2. OCT/IVUS (plaque erosion, spontaneous dissection)
3. Consider coronary spasm testing
4. Evaluate for Takotsubo cardiomyopathy

**Causes:**
- Plaque disruption (missed on angiography)
- Coronary spasm
- Spontaneous coronary artery dissection (SCAD)
- Takotsubo cardiomyopathy
- Myocarditis

### Cardiac Markers in Research

**4th Universal Definition of MI:**
- Type 1: Atherothrombotic
- Type 2: Supply-demand mismatch
- Type 3: Sudden cardiac death
- Type 4a: PCI-related
- Type 4b: Stent thrombosis
- Type 4c: Restenosis
- Type 5: CABG-related

**Periprocedural MI Definitions:**
| Procedure | Troponin Criteria |
|-----------|-------------------|
| PCI (Type 4a) | >5x 99th percentile + symptoms/ECG/imaging |
| CABG (Type 5) | >10x 99th percentile + symptoms/ECG/imaging |

### Digital Biomarkers

**Wearable Integration:**
- Continuous heart rhythm monitoring
- Activity-troponin correlation
- Remote BNP monitoring in development

**AI/ML Applications:**
- Troponin trajectory prediction
- Automated risk stratification
- Integration with ECG algorithms

### Quality and Laboratory Considerations

**Analytical Issues:**
| Issue | Clinical Impact |
|-------|-----------------|
| Heterophilic antibodies | False positive/negative |
| Biotin interference | False low (some assays) |
| Macrotroponin | Persistently elevated, benign |
| Hemolysis | May affect some assays |

**Biological Variability:**
- Troponin: 50-100% day-to-day variation
- BNP: 25-50% variation
- Implications for serial monitoring

### Emerging Technologies

**Highly Multiplexed Panels:**
- Simultaneous measurement of multiple biomarkers
- Improved phenotyping
- Personalized risk assessment

**Ultrasensitive Assays:**
- Single-molecule counting technology
- May detect troponin in all healthy individuals
- Redefining "normal"

**Rapid Molecular Testing:**
- Genetic risk scores
- Pharmacogenomics for antiplatelet therapy
- Integration with biomarker results

### Guideline Integration

**ESC 0/1h or 0/2h Protocols:**
- Validated for specific assays
- High negative predictive value
- Must use correct algorithm for assay

**ACC/AHA Approach:**
- Serial testing at 0, 3-6 hours
- Clinical decision pathway integration
- Focus on delta value

**Heart Failure Guidelines (ACC/AHA, ESC):**
- BNP/NT-proBNP for diagnosis (Class I)
- Prognostic value established
- Serial monitoring for therapy guidance (Class IIa)`,
      keyTerms: [
        { term: "MINOCA", definition: "Myocardial Infarction with Non-Obstructive Coronary Arteries - troponin elevation without significant CAD" },
        { term: "HEART score", definition: "Validated risk score integrating history, ECG, age, risk factors, and troponin" },
        { term: "macrotroponin", definition: "Troponin bound to immunoglobulins causing persistent elevation without injury" },
        { term: "4th Universal Definition", definition: "Current international consensus on MI classification and diagnosis" },
      ],
      clinicalNotes: "Expert interpretation requires understanding that elevated troponin indicates myocardial injury, not necessarily acute MI. Integration with clinical presentation, ECG, imaging, and trajectory is essential for accurate diagnosis and appropriate management.",
    },
  },

  media: [],
  citations: [
    {
      id: "universal-mi-definition",
      type: "article",
      title: "Fourth Universal Definition of Myocardial Infarction",
      source: "European Heart Journal",
      authors: ["Thygesen K", "Alpert JS", "Jaffe AS"],
    },
    {
      id: "esc-acs-guidelines",
      type: "article",
      title: "ESC Guidelines for Acute Coronary Syndromes",
      source: "European Heart Journal",
      authors: ["ESC Scientific Document Group"],
    },
  ],
  crossReferences: [
    { targetId: "lab-troponin", targetType: "concept", relationship: "child" },
    { targetId: "lab-bnp", targetType: "concept", relationship: "child" },
    { targetId: "lab-ck-mb", targetType: "concept", relationship: "child" },
  ],
  tags: {
    systems: ["cardiovascular"],
    topics: ["laboratory", "cardiology", "emergency", "diagnosis"],
    clinicalRelevance: "critical",
    examRelevance: { usmle: true, nbme: true, shelf: ["medicine", "surgery", "emergency"] },
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: "published",
};

// =============================================================================
// CARDIAC MARKER PANEL
// =============================================================================

import { LabPanel } from "./types";

export const CARDIAC_MARKER_PANEL: LabPanel = {
  id: "panel-cardiac-markers",
  name: "Cardiac Marker Panel",
  abbreviation: "Cardiac Markers",
  description: "Assessment of myocardial injury and cardiac stress using biomarkers.",
  includedTests: [
    "lab-troponin",
    "lab-bnp",
    "lab-nt-probnp",
    "lab-ck-mb",
    "lab-myoglobin",
  ],
  commonIndications: [
    "Acute coronary syndrome evaluation",
    "Heart failure diagnosis and monitoring",
    "Chest pain evaluation",
    "Risk stratification in ACS",
    "Perioperative cardiac assessment",
    "Pulmonary embolism risk stratification",
  ],
  interpretationGuidance: [
    {
      level: 1,
      content: "Cardiac markers are blood tests that detect heart damage. Troponin is the main test for heart attacks, while BNP/NT-proBNP helps diagnose heart failure.",
    },
    {
      level: 3,
      content: "Troponin interpretation requires rise and/or fall pattern to diagnose acute MI. A single elevated troponin indicates injury but not necessarily MI. BNP/NT-proBNP elevation suggests heart failure - use age-adjusted cutoffs for NT-proBNP.",
    },
    {
      level: 5,
      content: "Expert interpretation uses high-sensitivity troponin algorithms (0/1h or 0/3h protocols), recognizes Type 1 vs Type 2 MI, applies sex-specific cutoffs, and integrates with clinical risk scores (HEART score). Consider non-ACS causes of troponin elevation and prognostic implications.",
    },
  ],
  patterns: [
    {
      patternName: "Acute Myocardial Infarction",
      description: "Rising and/or falling troponin with clinical features of ischemia",
      labFindings: [
        { labId: "lab-troponin", labName: "Troponin", expectedDirection: "high" },
        { labId: "lab-ck-mb", labName: "CK-MB", expectedDirection: "high" },
      ],
      suggestsDiagnosis: ["Type 1 MI (plaque rupture)", "Type 2 MI (demand ischemia)"],
      clinicalContext: "Troponin rise and/or fall with at least one value >99th percentile + evidence of ischemia (symptoms, ECG, imaging) = acute MI. Pattern distinguishes from chronic elevation.",
    },
    {
      patternName: "Acute Heart Failure",
      description: "Elevated natriuretic peptides with clinical heart failure",
      labFindings: [
        { labId: "lab-bnp", labName: "BNP", expectedDirection: "high" },
        { labId: "lab-nt-probnp", labName: "NT-proBNP", expectedDirection: "high" },
      ],
      suggestsDiagnosis: ["Acute decompensated heart failure", "Cardiomyopathy", "Valvular disease"],
      clinicalContext: "BNP >400 pg/mL or NT-proBNP >900 pg/mL (age-adjusted) strongly suggests heart failure. Values <100 (BNP) or <300 (NT-proBNP) effectively rule out HF.",
    },
    {
      patternName: "Chronic Troponin Elevation",
      description: "Stable elevated troponin without rise/fall pattern",
      labFindings: [
        { labId: "lab-troponin", labName: "Troponin", expectedDirection: "high" },
      ],
      suggestsDiagnosis: ["Chronic kidney disease", "Heart failure", "Structural heart disease"],
      clinicalContext: "Stable troponin elevation without rise/fall suggests chronic myocardial stress rather than acute injury. Common in CKD, advanced HF. Still carries prognostic significance.",
    },
  ],
};
