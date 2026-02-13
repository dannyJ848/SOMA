/**
 * Liver Function Tests Educational Content
 *
 * Comprehensive educational content for understanding and interpreting
 * liver function tests and hepatic panels.
 */

import { EducationalContent } from "../types";

export const liverFunctionContent: EducationalContent = {
  id: "liver-function-interpretation",
  type: "concept",
  name: "Liver Function Test Interpretation",
  nameEs: 'Funcion Hepatica',
  alternateNames: ["LFTs", "Hepatic Panel", "Liver Panel"],

  levels: {
    1: {
      level: 1,
      summary: "Liver function tests are blood tests that check how well your liver is working and whether it might be damaged.",
      explanation: `Your liver is like a factory in your body that does many important jobs - it cleans toxins from your blood, makes proteins, stores energy, and helps digest food.

Liver function tests check different things:

**Liver enzymes (ALT, AST):**
- These are chemicals inside liver cells
- When liver cells are damaged, these leak into your blood
- High levels can mean your liver is irritated or injured

**Bilirubin:**
- This is a yellow substance made when old red blood cells break down
- Your liver normally removes it from your blood
- If it builds up, your skin and eyes can turn yellow (jaundice)

**Albumin:**
- A protein made by your liver
- If your liver is sick for a long time, it makes less albumin

Doctors order these tests to check if your liver is healthy, see if medications are affecting your liver, or find out why you might have yellow skin or tiredness.`,
      keyTerms: [
        { term: "liver enzymes", definition: "Chemicals in liver cells that leak into blood when the liver is damaged" },
        { term: "bilirubin", definition: "A yellow waste product that the liver removes from blood" },
        { term: "jaundice", definition: "Yellow color of skin and eyes when bilirubin builds up" },
        { term: "albumin", definition: "An important protein made by the liver" },
      ],
      analogies: [
        "Liver enzymes are like smoke detectors - when they go off (show up high in blood), it means something is wrong inside the liver.",
        "Your liver is like a water treatment plant - it cleans your blood. When the plant isn\"t working well, waste products like bilirubin build up.",
      ],
    },
    2: {
      level: 2,
      summary: "LFTs include hepatocellular markers (AST, ALT), cholestatic markers (ALP, GGT, bilirubin), and synthetic function tests (albumin, PT/INR).",
      explanation: `## Categories of Liver Function Tests

**Hepatocellular Injury Markers:**
| Test | Normal Range | Significance |
|------|--------------|--------------|
| ALT | 7-56 U/L | Most specific for liver |
| AST | 10-40 U/L | Also in heart, muscle, RBCs |

**Cholestatic Markers:**
| Test | Normal Range | Significance |
|------|--------------|--------------|
| Alkaline Phosphatase (ALP) | 44-147 U/L | Bile duct or bone origin |
| GGT | 9-48 U/L | Confirms hepatic ALP elevation |
| Bilirubin (total) | 0.1-1.2 mg/dL | Conjugated vs unconjugated matters |

**Synthetic Function:**
| Test | Normal Range | Significance |
|------|--------------|--------------|
| Albumin | 3.5-5.0 g/dL | Chronic liver function |
| PT/INR | 11-13 sec / <1.1 | Acute liver function |

## Common Patterns

**Hepatocellular pattern:**
- AST and ALT markedly elevated (>10x normal)
- ALP mildly elevated (<3x normal)
- Causes: Viral hepatitis, drug toxicity, ischemia

**Cholestatic pattern:**
- ALP markedly elevated (>3x normal)
- AST/ALT mildly elevated (<3x normal)
- Causes: Gallstones, primary biliary cholangitis, medications

**Mixed pattern:**
- Both hepatocellular and cholestatic enzymes elevated
- Causes: Alcoholic liver disease, some drug reactions`,
      keyTerms: [
        { term: "AST", definition: "Aspartate aminotransferase - enzyme in liver, heart, and muscle cells" },
        { term: "ALT", definition: "Alanine aminotransferase - enzyme most specific to liver cells" },
        { term: "cholestatic", definition: "Relating to blocked or reduced bile flow", pronunciation: "koh-leh-STAT-ik" },
        { term: "hepatocellular", definition: "Relating to liver cell damage", pronunciation: "hep-at-oh-SEL-yoo-lar" },
      ],
      analogies: [
        "ALT and AST are like different alarms in your body - ALT is mainly in the liver room, while AST is also in the heart and muscle rooms.",
        "The liver makes albumin like a factory makes products - when the factory slows down from damage, production drops.",
      ],
    },
    3: {
      level: 3,
      summary: "LFT interpretation requires pattern recognition to distinguish hepatocellular from cholestatic injury, assessment of chronicity, and evaluation of synthetic function.",
      explanation: `## Systematic LFT Interpretation

### Step 1: Identify the Pattern

**R Ratio = (ALT/ULN) / (ALP/ULN)**
- R >5: Hepatocellular pattern
- R <2: Cholestatic pattern
- R 2-5: Mixed pattern

### Step 2: Assess Severity of Elevation

**Hepatocellular (AST/ALT) Elevation:**
| Degree | AST/ALT Level | Differential |
|--------|---------------|--------------|
| Mild | <5x ULN | NAFLD, chronic hepatitis, medications |
| Moderate | 5-15x ULN | Acute viral hepatitis, autoimmune |
| Severe | >15x ULN | Acute viral, ischemic, toxin, Wilson disease |

### Step 3: Specific Patterns

**AST:ALT Ratio:**
| Ratio | Suggests |
|-------|----------|
| AST:ALT >2:1 | Alcoholic liver disease |
| AST:ALT <1:1 | NAFLD, viral hepatitis |
| Both >1000 | Ischemia, toxin, acute viral |

**Isolated Hyperbilirubinemia:**
- Unconjugated predominant: Hemolysis, Gilbert syndrome
- Conjugated predominant: Hepatocellular or cholestatic disease

### Step 4: Evaluate Synthetic Function

**Indicates severe/chronic liver disease:**
- Low albumin (<3.5 g/dL)
- Elevated INR (>1.5) not correctable with vitamin K
- Low platelets (portal hypertension)

### Common Clinical Scenarios

**Drug-Induced Liver Injury (DILI):**
- Temporal relationship with medication
- Hepatocellular, cholestatic, or mixed pattern
- R ratio helps classify
- Common culprits: Acetaminophen, antibiotics, statins, NSAIDs

**Acute Liver Failure:**
- Encephalopathy + INR >1.5
- Without pre-existing liver disease
- Emergency: Consider transplant evaluation

**Cirrhosis:**
- Elevated bilirubin, low albumin, elevated INR
- Low platelets from hypersplenism
- AST/ALT may be normal or mildly elevated`,
      keyTerms: [
        { term: "R ratio", definition: "Calculated ratio to classify liver injury pattern; ALT/ULN divided by ALP/ULN" },
        { term: "NAFLD", definition: "Non-Alcoholic Fatty Liver Disease - fat accumulation in liver without alcohol use" },
        { term: "Gilbert syndrome", definition: "Benign condition causing mild unconjugated hyperbilirubinemia" },
        { term: "acute liver failure", definition: "Rapid liver deterioration with encephalopathy and coagulopathy in previously healthy liver" },
      ],
      clinicalNotes: "Always correlate LFTs with clinical context. Mild elevations are common and often transient. The pattern of abnormalities and trajectory over time are more informative than single values.",
    },
    4: {
      level: 4,
      summary: "Advanced LFT interpretation integrates specialized serologic testing, distinguishes between etiologies, and recognizes patterns of acute vs chronic liver disease progression.",
      explanation: `## Advanced LFT Interpretation

### Comprehensive Liver Disease Workup

**Initial Tier Testing (for unexplained LFT elevation):**
| Test | Purpose |
|------|---------|
| Hepatitis B surface antigen, anti-HBc | HBV screening |
| Hepatitis C antibody | HCV screening |
| ANA, ASMA, Anti-LKM | Autoimmune hepatitis |
| Ferritin, transferrin saturation | Hemochromatosis |
| Ceruloplasmin | Wilson disease (age <40) |

**Second Tier Testing:**
| Test | Purpose |
|------|---------|
| Alpha-1 antitrypsin | A1AT deficiency |
| Antimitochondrial antibody | Primary biliary cholangitis |
| IgG4 levels | IgG4-related disease |
| Tissue transglutaminase | Celiac disease |

### Distinguishing Acute from Chronic

**Features of Chronic Liver Disease:**
- Stigmata on exam (spider angiomata, palmar erythema, gynecomastia)
- Low platelets (hypersplenism)
- Low albumin
- Imaging showing nodular liver, splenomegaly, varices

**Acute-on-Chronic Liver Failure:**
- Acute deterioration in known chronic liver disease
- Precipitants: Infection, GI bleed, medications, alcohol
- Higher mortality than either alone

### Specific Disease Patterns

**Acetaminophen Toxicity:**
- AST/ALT >1000 (often >3000)
- Rapid rise and fall
- INR elevation indicates severe injury
- N-acetylcysteine indicated if suspected

**Ischemic Hepatitis:**
- AST/ALT >1000, rapid rise
- LDH markedly elevated (ratio AST:LDH <1.5)
- Underlying shock or hypotension
- Rapid recovery when perfusion restored

**Alcoholic Hepatitis:**
- AST:ALT >2:1 (often 2-3:1)
- AST rarely >300
- Elevated bilirubin, low albumin
- Maddrey discriminant function predicts prognosis

**Primary Biliary Cholangitis (PBC):**
- Elevated ALP, GGT
- Antimitochondrial antibody positive (>95%)
- Female predominance
- May progress to cirrhosis

**Primary Sclerosing Cholangitis (PSC):**
- Elevated ALP, GGT
- Associated with inflammatory bowel disease (75%)
- MRCP shows beaded appearance of bile ducts
- Increased cholangiocarcinoma risk

### Prognostic Scores

**MELD Score:**
- Uses: Bilirubin, INR, Creatinine, Sodium
- Transplant prioritization
- 90-day mortality prediction

**Maddrey Discriminant Function (for alcoholic hepatitis):**
- Formula: 4.6 x (PT - control PT) + bilirubin
- >32 indicates severe disease, consider steroids`,
      keyTerms: [
        { term: "MELD score", definition: "Model for End-Stage Liver Disease - predicts mortality and prioritizes transplant listing" },
        { term: "Maddrey discriminant function", definition: "Prognostic score for alcoholic hepatitis severity" },
        { term: "ischemic hepatitis", definition: "Liver injury from hypoperfusion; also called shock liver or hypoxic hepatitis" },
        { term: "antimitochondrial antibody", definition: "Highly specific marker for primary biliary cholangitis" },
      ],
      clinicalNotes: "In acute liver failure, serial LFTs and INR should be monitored closely. Paradoxically improving transaminases with worsening INR may indicate massive hepatocyte loss and worse prognosis.",
    },
    5: {
      level: 5,
      summary: "Expert LFT interpretation incorporates non-invasive fibrosis assessment, emerging biomarkers, understanding of drug metabolism, and management of complex liver disease scenarios.",
      explanation: `## Expert-Level LFT Interpretation

### Non-Invasive Fibrosis Assessment

**Serum-Based Scores:**
| Score | Components | Use |
|-------|------------|-----|
| FIB-4 | Age, AST, ALT, platelets | NAFLD screening |
| NAFLD Fibrosis Score | Age, BMI, glucose, AST, ALT, platelets, albumin | NAFLD staging |
| APRI | AST, platelets | Hepatitis C fibrosis |
| ELF | HA, PIIINP, TIMP-1 | Advanced fibrosis |

**FIB-4 Interpretation:**
- <1.3: Low risk of advanced fibrosis (negative predictive value ~90%)
- 1.3-2.67: Indeterminate, needs further evaluation
- >2.67: High risk of advanced fibrosis

**Imaging-Based:**
- Transient elastography (FibroScan): Liver stiffness measurement
- MR elastography: More accurate, less affected by obesity/ascites

### Pharmacogenomics and Drug-Induced Liver Injury

**HLA Associations with DILI:**
| Drug | HLA Association |
|------|-----------------|
| Flucloxacillin | HLA-B*57:01 |
| Amoxicillin-clavulanate | HLA-DRB1*15:01 |
| Co-trimoxazole | HLA-B*14:01 |

**Phase I/II Metabolism Considerations:**
- CYP450 polymorphisms affect drug levels
- Gilbert syndrome: Reduced UGT1A1 activity
- Acetaminophen: CYP2E1 induction increases toxic metabolite

### Advanced Autoimmune Hepatitis

**Simplified Diagnostic Criteria:**
| Feature | Points |
|---------|--------|
| ANA or ASMA ≥1:40 | 1 |
| ANA or ASMA ≥1:80 | 2 |
| Positive anti-LKM | 2 |
| IgG >ULN | 1 |
| IgG >1.1x ULN | 2 |
| Compatible histology | 1 |
| Typical histology | 2 |

**Score ≥6: Probable AIH; ≥7: Definite AIH**

### Liver in Systemic Disease

**Cardiac Hepatopathy:**
- Congestive hepatopathy: Elevated ALP, mildly elevated AST/ALT
- Acute cardiogenic shock: Ischemic hepatitis pattern
- Fontan circulation: Chronic hepatopathy, may progress to cirrhosis

**Hemophagocytic Lymphohistiocytosis (HLH):**
- Markedly elevated ferritin (>10,000 ng/mL)
- Elevated LDH, transaminases
- Cytopenias, coagulopathy
- Associated with infections, malignancy, autoimmune disease

### Complex Management Scenarios

**Liver Transplant Considerations:**
- MELD-Na for prioritization
- Milan criteria for HCC
- Acute liver failure: King's College criteria
- Living donor evaluation

**Hepatorenal Syndrome:**
- Type 1: Rapidly progressive, median survival 2 weeks without treatment
- Type 2: More indolent, associated with refractory ascites
- Treatment: Terlipressin + albumin, octreotide + midodrine + albumin
- Liver transplant is definitive treatment

**Coagulation in Liver Disease:**
- Both procoagulant and anticoagulant factors reduced
- INR does not reflect true bleeding risk
- Rebalanced hemostasis
- Viscoelastic testing (TEG/ROTEM) more informative`,
      keyTerms: [
        { term: "FIB-4", definition: "Non-invasive fibrosis score using age, AST, ALT, and platelets" },
        { term: "transient elastography", definition: "Ultrasound-based technique measuring liver stiffness as surrogate for fibrosis" },
        { term: "hepatorenal syndrome", definition: "Functional kidney failure in advanced liver disease from renal vasoconstriction" },
        { term: "rebalanced hemostasis", definition: "State in cirrhosis where reduced procoagulant and anticoagulant factors create new equilibrium" },
      ],
      clinicalNotes: "Expert interpretation requires understanding that LFTs are imperfect markers of liver function. Synthetic function tests (albumin, INR), non-invasive fibrosis scores, and clinical assessment together provide a more complete picture than transaminases alone.",
    },
  },

  media: [],
  citations: [
    {
      id: "acg-liver-chemistry",
      type: "article",
      title: "ACG Clinical Guideline: Evaluation of Abnormal Liver Chemistries",
      source: "American Journal of Gastroenterology",
      authors: ["Kwo PY", "Cohen SM", "Lim JK"],
    },
  ],
  crossReferences: [
    { targetId: "lab-ast", targetType: "concept", relationship: "child" },
    { targetId: "lab-alt", targetType: "concept", relationship: "child" },
    { targetId: "lab-bilirubin", targetType: "concept", relationship: "child" },
    { targetId: "lab-albumin", targetType: "concept", relationship: "child" },
  ],
  tags: {
    systems: ["hepatic", "gastrointestinal"],
    topics: ["laboratory", "gastroenterology", "hepatology"],
    clinicalRelevance: "critical",
    examRelevance: { usmle: true, nbme: true, shelf: ["medicine", "surgery"] },
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: "published",
};
