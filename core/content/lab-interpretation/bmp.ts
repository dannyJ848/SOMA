/**
 * Basic Metabolic Panel (BMP) - Laboratory Interpretation Content
 *
 * Comprehensive educational content for BMP interpretation including:
 * - Glucose
 * - BUN (Blood Urea Nitrogen)
 * - Creatinine
 * - Sodium
 * - Potassium
 * - Chloride
 * - CO2 (Bicarbonate)
 * - Calcium
 */

import { LabInterpretationContent, LabPanel, PanelPattern } from './types';

// =============================================================================
// GLUCOSE
// =============================================================================

export const glucoseInterpretation: LabInterpretationContent = {
  id: 'lab-glucose',
  type: 'concept',
  name: 'Glucose',
  alternateNames: ['Blood Sugar', 'Fasting Glucose', 'Random Glucose', 'FBG'],

  labMetadata: {
    loincCode: '2345-7',
    testName: 'Glucose',
    commonAbbreviations: ['Glu', 'BG', 'FBG'],
    category: 'glucose',
    panel: 'BMP',
    orderingFrequency: 'routine',
  },

  referenceRanges: {
    adult: {
      low: 70,
      high: 100,
      unit: 'mg/dL',
      notes: 'Fasting glucose',
    },
    variations: [
      {
        low: 70,
        high: 140,
        unit: 'mg/dL',
        notes: 'Random (non-fasting) glucose',
      },
    ],
  },

  criticalValues: {
    low: 50,
    high: 400,
    unit: 'mg/dL',
    urgency: 'immediate',
    action: 'Glucose <50: Treat hypoglycemia immediately; >400: Assess for DKA/HHS, hydration status',
    notificationRequired: true,
  },

  interpretations: {
    low: {
      direction: 'low',
      severity: 'severe',
      causes: [
        {
          category: 'Excess Insulin',
          causes: [
            'Insulin overdose (most common in diabetics)',
            'Sulfonylurea overdose',
            'Insulinoma',
            'Factitious hypoglycemia',
          ],
          commonality: 'common',
        },
        {
          category: 'Decreased Production',
          causes: [
            'Liver failure',
            'Alcohol intoxication (inhibits gluconeogenesis)',
            'Adrenal insufficiency',
            'Severe sepsis',
          ],
          commonality: 'common',
        },
        {
          category: 'Other',
          causes: [
            'Prolonged fasting/malnutrition',
            'Post-gastric bypass (reactive hypoglycemia)',
            'Non-islet cell tumors (IGF-2 secretion)',
          ],
          commonality: 'uncommon',
        },
      ],
      associatedFindings: [
        'Whipple triad: symptoms, low glucose, relief with glucose',
        'Adrenergic symptoms: tremor, sweating, palpitations',
        'Neuroglycopenic symptoms: confusion, seizures, coma',
      ],
      workupSuggestions: [
        'Confirm with repeat glucose',
        'If hypoglycemia confirmed: insulin, C-peptide, proinsulin levels',
        'Cortisol level (rule out adrenal insufficiency)',
        'Drug/toxin screen',
      ],
      clinicalPearls: [
        'Whipple triad required for diagnosis of hypoglycemic disorder',
        'Insulin high + C-peptide high = endogenous (insulinoma, sulfonylurea)',
        'Insulin high + C-peptide low = exogenous insulin',
      ],
    },
    high: {
      direction: 'high',
      severity: 'moderate',
      causes: [
        {
          category: 'Diabetes Mellitus',
          causes: [
            'Type 2 diabetes (most common)',
            'Type 1 diabetes',
            'MODY (maturity onset diabetes of young)',
            'Secondary diabetes (pancreatitis, hemochromatosis)',
          ],
          commonality: 'common',
        },
        {
          category: 'Stress/Acute Illness',
          causes: [
            'Acute illness/stress response',
            'Corticosteroid use',
            'Critical illness',
            'Post-surgical',
          ],
          commonality: 'common',
        },
        {
          category: 'Other',
          causes: [
            'Cushing syndrome',
            'Acromegaly',
            'Pheochromocytoma',
            'Glucagonoma',
          ],
          commonality: 'rare',
        },
      ],
      associatedFindings: [
        'Polyuria, polydipsia, polyphagia',
        'Weight loss (Type 1)',
        'Acanthosis nigricans (insulin resistance)',
        'Ketones in urine/blood (DKA)',
      ],
      workupSuggestions: [
        'HbA1c for diabetes diagnosis/monitoring',
        'Fasting glucose if random elevated',
        'Urinalysis for glucose and ketones',
        'If very high: check anion gap, ketones for DKA',
      ],
      clinicalPearls: [
        'Diagnosis: FBG >= 126 mg/dL OR random >= 200 + symptoms OR HbA1c >= 6.5%',
        'Stress hyperglycemia resolves with illness; check HbA1c to assess baseline',
        'Glucose >600 + minimal ketones = HHS; treat with fluids first',
      ],
    },
  },

  specimen: {
    specimenType: 'serum or plasma',
    tubeType: 'Gray top (sodium fluoride - inhibits glycolysis)',
    volume: '3 mL',
    fastingRequired: true,
    fastingDuration: '8-12 hours for fasting glucose',
    stability: {
      roomTemp: '8 hours (gray top)',
      refrigerated: '72 hours',
    },
    interferences: [
      'Glycolysis in red top tube (decreases 5-7% per hour)',
      'Hemolysis',
      'Lipemia',
    ],
  },

  relatedLabs: ['lab-hba1c', 'lab-insulin', 'lab-c-peptide', 'lab-ketones'],

  organAssociations: [
    { organId: 'pancreas', organName: 'Pancreas', relationship: 'Insulin/glucagon production' },
    { organId: 'liver', organName: 'Liver', relationship: 'Glycogen storage, gluconeogenesis' },
    { organId: 'adrenal', organName: 'Adrenal Gland', relationship: 'Counter-regulatory hormones' },
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Glucose is blood sugar - the main fuel your body uses for energy.',
      explanation: `Glucose is like fuel for your body, just like gas for a car. It comes from the food you eat, especially carbohydrates like bread, pasta, and fruit.

Your body carefully controls how much glucose is in your blood. A hormone called insulin (made by your pancreas) helps move glucose from your blood into your cells where it can be used for energy.

If your blood sugar is too low (hypoglycemia), you might feel shaky, sweaty, confused, or very hungry. This is dangerous because your brain needs glucose to work.

If your blood sugar is too high (hyperglycemia), it can mean you have diabetes. Over time, high blood sugar can damage your blood vessels, heart, kidneys, and eyes.`,
      keyTerms: [
        { term: 'glucose', definition: 'Sugar in your blood that your body uses for energy' },
        { term: 'insulin', definition: 'A hormone that helps glucose get into your cells' },
        { term: 'diabetes', definition: 'A condition where blood sugar is too high' },
      ],
      analogies: [
        'Glucose is like the gas in your car - your body needs it to run.',
        'Insulin is like a key that unlocks your cells so glucose can get inside.',
      ],
      examples: [
        'When you eat a candy bar, your blood sugar rises quickly.',
        'After not eating all night, your fasting blood sugar should be at its lowest.',
      ],
    },
    2: {
      level: 2,
      summary: 'Glucose levels indicate how well your body manages blood sugar. Abnormal levels can indicate diabetes or other metabolic disorders.',
      explanation: `Glucose is the primary energy source for your body's cells. The hormone insulin, produced by the pancreas, regulates blood glucose levels by helping cells absorb glucose from the bloodstream.

**Normal Fasting Range**: 70-100 mg/dL

**Diagnostic Criteria for Diabetes**:
- Fasting glucose >= 126 mg/dL (on two occasions)
- Random glucose >= 200 mg/dL with symptoms
- HbA1c >= 6.5%
- Oral glucose tolerance test >= 200 mg/dL at 2 hours

**Prediabetes**:
- Fasting glucose 100-125 mg/dL (impaired fasting glucose)
- HbA1c 5.7-6.4%

**Low Blood Sugar (Hypoglycemia)**:
Symptoms appear when glucose drops below 70 mg/dL:
- Shakiness, sweating, rapid heartbeat
- Hunger, anxiety
- Confusion, difficulty concentrating
- Severe: seizures, loss of consciousness

Common causes: too much diabetes medication, skipping meals, excessive exercise.`,
      keyTerms: [
        { term: 'hypoglycemia', definition: 'Low blood sugar, below 70 mg/dL', pronunciation: 'hi-po-gly-SEE-mee-uh' },
        { term: 'hyperglycemia', definition: 'High blood sugar, above normal range', pronunciation: 'hi-per-gly-SEE-mee-uh' },
        { term: 'prediabetes', definition: 'Blood sugar higher than normal but not yet diabetes' },
        { term: 'HbA1c', definition: 'Test showing average blood sugar over 2-3 months' },
      ],
    },
    3: {
      level: 3,
      summary: 'Glucose homeostasis involves insulin-mediated uptake, hepatic production, and counter-regulatory hormones. Dysregulation leads to diabetes or hypoglycemic disorders.',
      explanation: `## Glucose Metabolism

### Regulation
Glucose homeostasis maintained by:
- **Insulin** (pancreatic beta cells): Decreases glucose
  - Promotes cellular uptake (GLUT4 translocation)
  - Stimulates glycogen synthesis
  - Inhibits gluconeogenesis
- **Counter-regulatory hormones**: Increase glucose
  - Glucagon (alpha cells): Glycogenolysis, gluconeogenesis
  - Cortisol: Gluconeogenesis, insulin resistance
  - Epinephrine: Glycogenolysis, lipolysis
  - Growth hormone: Insulin resistance

### Diabetes Classification

**Type 1 Diabetes:**
- Autoimmune destruction of beta cells
- Absolute insulin deficiency
- Typically younger onset
- Prone to DKA

**Type 2 Diabetes:**
- Insulin resistance + relative deficiency
- Associated with obesity, metabolic syndrome
- Typically adult onset (but increasing in youth)
- Prone to HHS

### Diagnostic Thresholds

| Test | Normal | Prediabetes | Diabetes |
|------|--------|-------------|----------|
| Fasting glucose | <100 | 100-125 | >=126 |
| 2-hr OGTT | <140 | 140-199 | >=200 |
| HbA1c | <5.7% | 5.7-6.4% | >=6.5% |

### Hypoglycemia Workup

If hypoglycemia documented, measure during episode:
- Glucose, insulin, C-peptide, proinsulin
- Beta-hydroxybutyrate
- Drug screen for sulfonylureas

**Interpretation:**
| Insulin | C-peptide | Interpretation |
|---------|-----------|----------------|
| High | High | Insulinoma or sulfonylurea |
| High | Low | Exogenous insulin |
| Low | Low | Non-insulin mediated |`,
      keyTerms: [
        { term: 'gluconeogenesis', definition: 'Liver production of glucose from non-carbohydrate sources' },
        { term: 'glycogenolysis', definition: 'Breakdown of glycogen to release glucose' },
        { term: 'GLUT4', definition: 'Insulin-responsive glucose transporter in muscle/fat' },
        { term: 'C-peptide', definition: 'Byproduct of insulin production; marker of endogenous insulin' },
      ],
      clinicalNotes: 'Stress hyperglycemia is common in hospitalized patients. Check HbA1c to differentiate new diabetes from stress response.',
    },
    4: {
      level: 4,
      summary: 'Advanced glucose interpretation integrates hormonal regulation, tissue-specific metabolism, and pathophysiologic mechanisms of hyperglycemic emergencies.',
      explanation: `## Advanced Glucose Metabolism

### Tissue-Specific Glucose Handling

**Liver:**
- GLUT2 (insulin-independent)
- Glycogen storage (up to 100g)
- Gluconeogenesis from lactate, amino acids, glycerol
- Glucose-6-phosphatase releases free glucose

**Muscle:**
- GLUT4 (insulin-dependent)
- Glycogen for local use only (no G6Pase)
- Major site of postprandial glucose disposal

**Adipose:**
- GLUT4 (insulin-dependent)
- Converts glucose to triglycerides
- Lipolysis releases glycerol (gluconeogenesis substrate)

**Brain:**
- GLUT1 (insulin-independent)
- Obligate glucose user (except during prolonged fasting)
- ~120g glucose/day requirement

### Diabetic Ketoacidosis (DKA)

**Pathophysiology:**
Insulin deficiency + glucagon excess →
1. Hyperglycemia (reduced uptake, increased production)
2. Lipolysis → free fatty acids → hepatic ketogenesis
3. Ketoacidosis (beta-hydroxybutyrate, acetoacetate)
4. Osmotic diuresis → dehydration, electrolyte loss

**Diagnostic Criteria:**
- Glucose >250 mg/dL
- pH <7.3, HCO3 <18 mEq/L
- Positive serum ketones
- Anion gap >12

**Management Priorities:**
1. Fluids (NS initially, then 0.45% NS)
2. Insulin infusion (0.1 U/kg/hr)
3. Potassium replacement (K drops with insulin)
4. Monitor anion gap closure

### Hyperosmolar Hyperglycemic State (HHS)

**Characteristics:**
- Glucose often >600 mg/dL
- Minimal ketosis (enough insulin to prevent lipolysis)
- Severe dehydration (fluid deficit 8-10L)
- Altered mental status correlates with osmolality
- Higher mortality than DKA

**Key Difference from DKA:**
Sufficient insulin to suppress ketogenesis but insufficient for glucose control.

### Inpatient Glycemic Management

**Target Ranges:**
- Critically ill: 140-180 mg/dL
- Non-critically ill: Premeal <140, random <180 mg/dL

**Insulin Protocols:**
- Basal-bolus preferred over sliding scale alone
- Basal: ~0.2-0.3 U/kg/day (reduce in renal failure)
- Bolus: ~0.1 U/kg per meal
- Correction: 1 U per 50 mg/dL above target`,
      keyTerms: [
        { term: 'glucose-6-phosphatase', definition: 'Enzyme releasing free glucose; present only in liver/kidney' },
        { term: 'ketogenesis', definition: 'Hepatic production of ketone bodies from fatty acids' },
        { term: 'osmotic diuresis', definition: 'Increased urination due to glucose in urine exceeding renal threshold' },
        { term: 'anion gap', definition: 'Na - (Cl + HCO3); elevated in DKA due to ketoacids' },
      ],
      clinicalNotes: 'In DKA, potassium may be normal or elevated despite total body depletion. Replace K when <5.3 and urine output established.',
    },
    5: {
      level: 5,
      summary: 'Expert glucose analysis encompasses molecular mechanisms, continuous monitoring interpretation, precision medicine approaches, and emerging therapeutic targets.',
      explanation: `## Expert Glucose Analysis

### Molecular Insulin Signaling

**Insulin Receptor Cascade:**
Insulin binding → IR autophosphorylation → IRS-1/2 phosphorylation →
PI3K activation → Akt phosphorylation →
1. GLUT4 translocation (glucose uptake)
2. GSK3 inhibition (glycogen synthesis)
3. FOXO1 inhibition (reduced gluconeogenesis)

**Insulin Resistance Mechanisms:**
- Serine phosphorylation of IRS-1 (inhibitory)
- Elevated FFA and ceramides
- Inflammatory cytokines (TNF-α, IL-6)
- ER stress and oxidative stress
- Lipid accumulation in muscle/liver

### Continuous Glucose Monitoring (CGM)

**Key Metrics:**
- Time in range (TIR): Target >70% in 70-180 mg/dL
- Time below range (TBR): Target <4% below 70 mg/dL
- Time above range (TAR): Target <25% above 180 mg/dL
- Glucose management indicator (GMI): CGM-derived HbA1c estimate
- Coefficient of variation (CV): Glycemic variability; target <36%

**Interpretation Pearls:**
- CGM measures interstitial glucose (5-15 min lag)
- Discordance with fingerstick during rapid changes
- Compression artifacts during sleep

### Precision Diabetes Medicine

**Monogenic Diabetes (MODY):**
| Type | Gene | Features | Treatment |
|------|------|----------|-----------|
| MODY1 | HNF4A | Progressive, macrosomia | Sulfonylureas |
| MODY2 | GCK | Mild, stable | Diet usually |
| MODY3 | HNF1A | Most common, progressive | Sulfonylureas |
| MODY5 | HNF1B | Renal cysts, pancreatic hypoplasia | Variable |

**When to Suspect MODY:**
- Diabetes <25 years without ketosis
- Strong family history (3 generations)
- Negative islet autoantibodies
- Detectable C-peptide years after diagnosis

### Emerging Therapeutic Targets

**SGLT2 Inhibitors:**
- Mechanism: Block renal glucose reabsorption
- Benefits beyond glucose: CV and renal protection
- Risks: Euglycemic DKA, genital infections

**GLP-1 Receptor Agonists:**
- Incretin effect: Glucose-dependent insulin secretion
- Weight loss, CV benefit
- Tirzepatide: Dual GIP/GLP-1 agonist

**Investigational:**
- Glucagon receptor antagonists
- GLP-1/glucagon dual agonists
- Beta cell regeneration therapies
- Immunotherapy for Type 1 (teplizumab)

### Hypoglycemia Unawareness

**Pathophysiology:**
Recurrent hypoglycemia → reduced sympathoadrenal response →
blunted warning symptoms → increased severe hypoglycemia risk

**Management:**
- Strict avoidance of hypoglycemia (2-3 weeks)
- Higher glucose targets temporarily
- CGM with alerts
- May partially restore awareness`,
      keyTerms: [
        { term: 'time in range (TIR)', definition: 'CGM metric; percentage of time glucose 70-180 mg/dL' },
        { term: 'MODY', definition: 'Maturity-onset diabetes of the young; monogenic forms of diabetes' },
        { term: 'incretin effect', definition: 'Greater insulin response to oral vs IV glucose due to gut hormones' },
        { term: 'hypoglycemia unawareness', definition: 'Loss of warning symptoms due to recurrent hypoglycemia' },
      ],
      clinicalNotes: 'Consider MODY testing in lean patients with non-ketotic diabetes, strong family history, and persistent C-peptide. Genetic diagnosis changes management (sulfonylureas effective in HNF1A/HNF4A mutations).',
    },
  },

  media: [],
  citations: [
    {
      id: 'ada-standards-2024',
      type: 'article',
      title: 'Standards of Care in Diabetes',
      authors: ['American Diabetes Association'],
      source: 'Diabetes Care',
      url: 'https://diabetesjournals.org/care',
    },
  ],
  crossReferences: [
    { targetId: 'structure-pancreas', targetType: 'structure', relationship: 'related', label: 'Pancreas' },
    { targetId: 'pathway-insulin-signaling', targetType: 'pathway', relationship: 'related', label: 'Insulin Signaling' },
  ],
  tags: {
    systems: ['endocrine', 'metabolic'],
    topics: ['laboratory', 'diabetes', 'metabolism'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'endocrine'] },
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

// =============================================================================
// BLOOD UREA NITROGEN (BUN)
// =============================================================================

export const bunInterpretation: LabInterpretationContent = {
  id: 'lab-bun',
  type: 'concept',
  name: 'Blood Urea Nitrogen (BUN)',
  alternateNames: ['BUN', 'Urea Nitrogen', 'Serum Urea'],

  labMetadata: {
    loincCode: '3094-0',
    testName: 'Blood Urea Nitrogen',
    commonAbbreviations: ['BUN'],
    category: 'kidney',
    panel: 'BMP',
    orderingFrequency: 'routine',
  },

  referenceRanges: {
    adult: {
      low: 7,
      high: 20,
      unit: 'mg/dL',
    },
    variations: [
      {
        low: 5,
        high: 18,
        unit: 'mg/dL',
        demographic: { ageGroup: 'pediatric' },
      },
      {
        low: 8,
        high: 23,
        unit: 'mg/dL',
        demographic: { ageGroup: 'geriatric' },
        notes: 'Slightly higher due to decreased GFR',
      },
    ],
  },

  criticalValues: {
    high: 100,
    unit: 'mg/dL',
    urgency: 'urgent',
    action: 'Evaluate for severe renal failure, GI bleeding, or dehydration; consider dialysis if symptomatic uremia',
    notificationRequired: true,
  },

  interpretations: {
    low: {
      direction: 'low',
      severity: 'mild',
      causes: [
        {
          category: 'Decreased Production',
          causes: [
            'Liver failure (decreased urea synthesis)',
            'Low protein diet/malnutrition',
            'Anabolic states',
          ],
          commonality: 'common',
        },
        {
          category: 'Increased Elimination',
          causes: [
            'Pregnancy (increased GFR)',
            'Over-hydration',
            'SIADH',
          ],
          commonality: 'common',
        },
      ],
      associatedFindings: [
        'Low albumin (liver disease or malnutrition)',
        'Signs of liver failure (jaundice, coagulopathy)',
      ],
      workupSuggestions: [
        'Liver function tests',
        'Nutritional assessment',
        'Check hydration status',
      ],
      clinicalPearls: [
        'Low BUN in liver failure indicates severe synthetic dysfunction',
        'BUN <5 often seen in end-stage liver disease',
      ],
    },
    high: {
      direction: 'high',
      severity: 'moderate',
      causes: [
        {
          category: 'Prerenal (Decreased Perfusion)',
          causes: [
            'Dehydration/volume depletion',
            'Heart failure',
            'Shock',
            'Renal artery stenosis',
          ],
          commonality: 'common',
        },
        {
          category: 'Renal (Intrinsic)',
          causes: [
            'Acute kidney injury',
            'Chronic kidney disease',
            'Glomerulonephritis',
            'Acute tubular necrosis',
          ],
          commonality: 'common',
        },
        {
          category: 'Postrenal (Obstruction)',
          causes: [
            'BPH',
            'Kidney stones',
            'Tumor obstruction',
            'Strictures',
          ],
          commonality: 'common',
        },
        {
          category: 'Increased Production',
          causes: [
            'GI bleeding (protein load)',
            'High protein diet',
            'Catabolic states (burns, sepsis)',
            'Corticosteroid use',
          ],
          commonality: 'common',
        },
      ],
      associatedFindings: [
        'Elevated creatinine (renal causes)',
        'BUN:Cr ratio >20:1 (prerenal or GI bleed)',
        'Oliguria',
        'Signs of uremia (nausea, pericarditis, encephalopathy)',
      ],
      workupSuggestions: [
        'Calculate BUN:Creatinine ratio',
        'Urinalysis with microscopy',
        'Renal ultrasound if obstruction suspected',
        'Fractional excretion of sodium (FENa)',
      ],
      clinicalPearls: [
        'BUN:Cr >20:1 suggests prerenal azotemia or GI bleeding',
        'BUN:Cr 10-20:1 suggests intrinsic renal disease',
        'GI bleeding can raise BUN without affecting creatinine',
      ],
    },
  },

  specimen: {
    specimenType: 'serum',
    tubeType: 'Red top or SST (gold)',
    volume: '3 mL',
    fastingRequired: false,
    stability: {
      roomTemp: '7 days',
      refrigerated: '7 days',
    },
  },

  relatedLabs: ['lab-creatinine', 'lab-gfr', 'lab-urinalysis'],

  organAssociations: [
    { organId: 'kidney', organName: 'Kidney', relationship: 'Excretion' },
    { organId: 'liver', organName: 'Liver', relationship: 'Urea synthesis (urea cycle)' },
  ],

  levels: {
    1: {
      level: 1,
      summary: 'BUN measures waste products from protein breakdown that your kidneys filter out.',
      explanation: `When your body breaks down protein (from food and your own muscles), it creates a waste product called urea. Your kidneys filter urea out of your blood and put it into your urine.

The BUN test measures how much urea is in your blood. If your kidneys are working well, BUN stays in the normal range. If your kidneys aren't working properly, urea builds up and BUN goes up.

BUN can also go up if you're dehydrated (not drinking enough water) or if you're eating a lot of protein. It goes down if you have liver problems (since the liver makes urea) or if you're not eating enough protein.`,
      keyTerms: [
        { term: 'urea', definition: 'A waste product from protein breakdown' },
        { term: 'BUN', definition: 'Blood Urea Nitrogen - measures urea waste in blood' },
        { term: 'kidney function', definition: 'How well your kidneys filter waste from blood' },
      ],
      analogies: [
        'Your kidneys are like a filter for your blood, removing waste like urea.',
        'BUN is like checking how clean your aquarium filter is keeping the water.',
      ],
    },
    2: {
      level: 2,
      summary: 'BUN reflects kidney function and protein metabolism. Elevated BUN can indicate kidney disease, dehydration, or GI bleeding.',
      explanation: `Blood Urea Nitrogen (BUN) measures the amount of nitrogen from urea in your blood. Urea is produced by the liver from protein metabolism and excreted by the kidneys.

**Normal Range**: 7-20 mg/dL

**High BUN Causes**:
- Kidney problems (can't excrete urea efficiently)
- Dehydration (concentrated blood)
- High protein diet or GI bleeding (protein load)
- Heart failure (poor kidney perfusion)

**Low BUN Causes**:
- Liver disease (can't make urea)
- Low protein diet/malnutrition
- Pregnancy (increased filtration)

**BUN:Creatinine Ratio**:
This ratio helps identify the cause of kidney problems:
- Ratio >20:1 = Usually dehydration or GI bleeding
- Ratio 10-20:1 = Normal or intrinsic kidney disease
- Ratio <10:1 = Liver disease or low protein intake

BUN is usually evaluated alongside creatinine for a complete picture of kidney function.`,
      keyTerms: [
        { term: 'azotemia', definition: 'Elevated nitrogen waste products in blood (BUN and creatinine)', pronunciation: 'az-oh-TEE-mee-uh' },
        { term: 'uremia', definition: 'Symptoms from very high urea levels (nausea, confusion)', pronunciation: 'yoo-REE-mee-uh' },
        { term: 'BUN:Cr ratio', definition: 'Comparison of BUN to creatinine that helps identify cause of elevation' },
      ],
    },
    3: {
      level: 3,
      summary: 'BUN interpretation requires correlation with creatinine and clinical context to differentiate prerenal, intrinsic renal, and postrenal causes of azotemia.',
      explanation: `## BUN Physiology and Interpretation

### Urea Metabolism
- Protein catabolism → ammonia → hepatic urea cycle → urea
- Urea freely filtered at glomerulus
- 40-50% reabsorbed in proximal tubule and collecting duct
- Reabsorption increases with slow tubular flow (dehydration)

### BUN:Creatinine Ratio Interpretation

| Ratio | Interpretation | Causes |
|-------|----------------|--------|
| >20:1 | Prerenal azotemia | Dehydration, CHF, GI bleeding |
| 10-20:1 | Normal or intrinsic renal | CKD, ATN, GN |
| <10:1 | Decreased urea production | Liver disease, malnutrition |

### Prerenal vs Intrinsic Renal Differentiation

| Parameter | Prerenal | Intrinsic Renal |
|-----------|----------|-----------------|
| BUN:Cr ratio | >20:1 | 10-20:1 |
| FENa | <1% | >2% |
| Urine osmolality | >500 | <350 |
| Urine Na | <20 | >40 |
| Urine sediment | Bland/hyaline | Muddy brown casts (ATN) |

### GI Bleeding and BUN
Upper GI bleeding increases BUN disproportionately because:
- Blood is digested → protein absorbed → increased urea production
- Associated hypovolemia → prerenal component
- BUN:Cr ratio often >30:1

### Uremic Syndrome
Symptoms of severe azotemia (BUN typically >60-100):
- Nausea, vomiting, anorexia
- Encephalopathy (asterixis, confusion)
- Pericarditis (friction rub)
- Platelet dysfunction (bleeding)
- Metabolic acidosis`,
      keyTerms: [
        { term: 'FENa (fractional excretion of sodium)', definition: 'Calculated ratio distinguishing prerenal from intrinsic AKI' },
        { term: 'prerenal azotemia', definition: 'Elevated BUN/Cr from decreased kidney perfusion, not intrinsic damage' },
        { term: 'uremic encephalopathy', definition: 'Confusion and altered consciousness from severe uremia' },
        { term: 'ATN (acute tubular necrosis)', definition: 'Intrinsic AKI from tubular cell death, often ischemic or toxic' },
      ],
      clinicalNotes: 'FENa is unreliable in patients on diuretics; use FEUrea instead (<35% suggests prerenal).',
    },
    4: {
      level: 4,
      summary: 'Advanced BUN interpretation integrates urea kinetics, special populations considerations, and differentiation of complex AKI presentations.',
      explanation: `## Advanced BUN Analysis

### Urea Kinetics

**Steady State Production:**
- Urea generation rate (UGR) = protein intake dependent
- Average: 200-300 mg/dL/day on normal diet
- Catabolic illness: Can double UGR

**Urea Distribution:**
- Volume of distribution = total body water (~60% body weight)
- Dialysis urea clearance: Kt/V calculation
- Urea rebound post-dialysis (equilibration)

### Non-Steady State Considerations

**Rising BUN:**
Daily rise without renal replacement:
- Non-catabolic: ~10-15 mg/dL/day
- Catabolic: 20-40+ mg/dL/day

**BUN in AKI Staging:**
Not directly used in KDIGO staging (uses creatinine), but:
- Rate of rise suggests severity
- Symptoms guide RRT initiation

### Special Populations

**Liver Disease:**
- Decreased urea synthesis → low BUN despite AKI
- May mask significant renal dysfunction
- Use creatinine and GFR for assessment

**GI Bleeding:**
- Protein load from blood (~6g protein per 100mL blood)
- Expect BUN rise of 20-40 mg/dL per liter of blood
- BUN:Cr ratio >36 highly suggestive

**Critical Illness:**
- Hypercatabolic state increases urea production
- Fluid resuscitation may dilute BUN
- Complex interpretation in ICU setting

### Indications for Urgent Dialysis

Not based on BUN alone, but consider when:
- Uremic symptoms (encephalopathy, pericarditis, bleeding)
- Refractory hyperkalemia
- Severe metabolic acidosis
- Volume overload unresponsive to diuretics
- BUN >100 mg/dL often used as relative indication

### BUN vs Creatinine in Different Scenarios

| Clinical Setting | BUN | Creatinine | Notes |
|------------------|-----|------------|-------|
| Dehydration | ↑↑ | ↑ | BUN rises more |
| GI bleeding | ↑↑ | Normal | Protein load |
| Rhabdomyolysis | ↑ | ↑↑↑ | Muscle mass contribution |
| Liver failure | Low | Normal | Decreased synthesis |
| Malnutrition | Low | Low | Decreased production |`,
      keyTerms: [
        { term: 'Kt/V', definition: 'Dialysis adequacy measure: clearance x time / volume of distribution' },
        { term: 'urea generation rate', definition: 'Rate of urea production; increases with protein intake and catabolism' },
        { term: 'urea rebound', definition: 'Post-dialysis increase as urea redistributes from tissues' },
        { term: 'KDIGO', definition: 'Kidney Disease: Improving Global Outcomes; AKI staging criteria' },
      ],
      clinicalNotes: 'In hepatorenal syndrome, BUN may not rise as expected due to impaired synthesis. Low BUN in decompensated cirrhosis can mask severe AKI.',
    },
    5: {
      level: 5,
      summary: 'Expert BUN analysis encompasses kinetic modeling, biomarkers of AKI, dialysis prescriptions, and precision approaches to nitrogen balance.',
      explanation: `## Expert BUN Analysis

### Formal Urea Kinetic Modeling

**Normalized Protein Catabolic Rate (nPCR):**
- Estimates dietary protein intake from urea generation
- nPCR = (protein catabolism normalized to body weight)
- Target in dialysis: 1.0-1.2 g/kg/day

**Single-Pool Kt/V Calculation:**
Kt/V = -ln(R - 0.008t) + (4 - 3.5R) × UF/W
- R = post-dialysis BUN/pre-dialysis BUN
- t = dialysis time (hours)
- UF = ultrafiltration volume
- W = post-dialysis weight

### Novel AKI Biomarkers vs BUN

| Biomarker | Timing | Advantages |
|-----------|--------|------------|
| NGAL | 2-4 hours | Early detection |
| KIM-1 | 12-24 hours | Tubular injury specific |
| Cystatin C | Real-time | Not affected by muscle mass |
| [TIMP-2][IGFBP7] | <12 hours | FDA-approved, predicts AKI |

**Clinical Application:**
- BUN and creatinine are late markers (rise 24-48h after injury)
- Novel biomarkers detect subclinical AKI
- Risk stratification for progression

### Continuous Renal Replacement Therapy (CRRT)

**Urea Clearance in CRRT:**
- CVVH: Clearance ≈ ultrafiltration rate
- CVVHD: Clearance ≈ dialysate flow rate
- CVVHDF: Combined clearance

**Dosing Target:**
- Effluent dose 20-25 mL/kg/hr
- May not achieve BUN <60 mg/dL (acceptable in CRRT)
- Avoid BUN-driven dosing; use effluent dose

### Cardiorenal and Hepatorenal Syndromes

**Cardiorenal Syndrome:**
- Type 1: Acute heart failure → AKI
- Type 2: Chronic heart failure → progressive CKD
- BUN:Cr ratio often elevated (poor perfusion)
- Diuretic resistance common

**Hepatorenal Syndrome:**
- Type 1: Rapidly progressive (doubling of Cr in <2 weeks)
- Type 2: Slower progression, refractory ascites
- BUN may be paradoxically low
- Treatment: Vasoconstrictors + albumin, liver transplant

### Protein Metabolism in Critical Illness

**Hypercatabolic State:**
- Burns: Protein needs 1.5-2.0 g/kg/day
- Sepsis: Increased ureagenesis
- Trauma: Nitrogen losses 15-30 g/day

**Implications:**
- Increased BUN not solely from AKI
- Nutritional support affects urea generation
- Consider nitrogen balance studies in prolonged ICU stay

### Precision Nephrology Considerations

**Genetic Factors:**
- Urea transporter polymorphisms affect concentrating ability
- CYP2D6 affects some nephrotoxic drug metabolism
- APOL1 risk alleles increase AKI to CKD progression

**Personalized RRT:**
- Biomarker-guided RRT initiation
- Precision dosing based on kinetic modeling
- Post-AKI follow-up for CKD development`,
      keyTerms: [
        { term: 'NGAL (neutrophil gelatinase-associated lipocalin)', definition: 'Early AKI biomarker; rises 2-4 hours after injury' },
        { term: 'nPCR', definition: 'Normalized protein catabolic rate; dialysis nutrition marker' },
        { term: 'CRRT', definition: 'Continuous renal replacement therapy; slow, continuous dialysis for unstable patients' },
        { term: 'effluent dose', definition: 'CRRT dosing parameter; target 20-25 mL/kg/hr' },
      ],
      clinicalNotes: 'Novel AKI biomarkers ([TIMP-2][IGFBP7], NGAL) can identify AKI before BUN/Cr rise, enabling earlier intervention. Consider biomarker testing in high-risk populations (post-cardiac surgery, sepsis).',
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'lab-creatinine', targetType: 'structure', relationship: 'related', label: 'Creatinine' },
    { targetId: 'structure-kidney', targetType: 'structure', relationship: 'related', label: 'Kidney' },
  ],
  tags: {
    systems: ['renal'],
    topics: ['laboratory', 'kidney function'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'nephrology'] },
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

// =============================================================================
// CREATININE
// =============================================================================

export const creatinineInterpretation: LabInterpretationContent = {
  id: 'lab-creatinine',
  type: 'concept',
  name: 'Creatinine',
  alternateNames: ['Cr', 'Serum Creatinine', 'SCr'],

  labMetadata: {
    loincCode: '2160-0',
    testName: 'Creatinine',
    commonAbbreviations: ['Cr', 'SCr', 'Creat'],
    category: 'kidney',
    panel: 'BMP',
    orderingFrequency: 'routine',
  },

  referenceRanges: {
    adult: {
      low: 0.7,
      high: 1.3,
      unit: 'mg/dL',
      demographic: { sex: 'male' },
    },
    variations: [
      {
        low: 0.6,
        high: 1.1,
        unit: 'mg/dL',
        demographic: { sex: 'female' },
      },
      {
        low: 0.3,
        high: 0.7,
        unit: 'mg/dL',
        demographic: { ageGroup: 'pediatric' },
      },
    ],
  },

  criticalValues: {
    high: 10.0,
    unit: 'mg/dL',
    urgency: 'urgent',
    action: 'Evaluate for severe AKI or ESRD; assess for dialysis indications',
    notificationRequired: true,
  },

  interpretations: {
    low: {
      direction: 'low',
      severity: 'mild',
      causes: [
        {
          category: 'Decreased Muscle Mass',
          causes: [
            'Elderly/frail patients',
            'Malnutrition/cachexia',
            'Muscular dystrophy',
            'Amputees',
          ],
          commonality: 'common',
        },
        {
          category: 'Increased Clearance',
          causes: [
            'Pregnancy (increased GFR)',
            'Early diabetes (hyperfiltration)',
          ],
          commonality: 'common',
        },
      ],
      associatedFindings: [
        'Low body weight',
        'Muscle wasting',
        'May underestimate renal impairment',
      ],
      workupSuggestions: [
        'Use cystatin C-based GFR in low muscle mass',
        'Assess nutritional status',
      ],
      clinicalPearls: [
        'Low creatinine in elderly may mask significant kidney disease',
        'Use cystatin C for more accurate GFR in extremes of muscle mass',
      ],
    },
    high: {
      direction: 'high',
      severity: 'moderate',
      causes: [
        {
          category: 'Decreased GFR (Kidney Injury)',
          causes: [
            'Acute kidney injury (all types)',
            'Chronic kidney disease',
            'Prerenal azotemia',
            'Postrenal obstruction',
          ],
          commonality: 'common',
        },
        {
          category: 'Increased Production',
          causes: [
            'Rhabdomyolysis',
            'High meat diet',
            'Creatine supplements',
          ],
          commonality: 'common',
        },
        {
          category: 'Decreased Secretion',
          causes: [
            'Drugs (trimethoprim, cimetidine)',
            'These block tubular secretion without affecting GFR',
          ],
          commonality: 'common',
        },
      ],
      associatedFindings: [
        'Elevated BUN',
        'Decreased urine output (oliguric AKI)',
        'Electrolyte abnormalities (hyperkalemia)',
      ],
      workupSuggestions: [
        'Calculate GFR',
        'Urinalysis with microscopy',
        'Renal ultrasound',
        'Compare to baseline creatinine',
      ],
      clinicalPearls: [
        'Creatinine is a late marker of AKI; rises 24-48h after injury',
        'A rise of 0.3 mg/dL or 50% from baseline defines AKI (KDIGO)',
        'Muscle-bound patients may have high baseline creatinine with normal GFR',
      ],
    },
  },

  specimen: {
    specimenType: 'serum',
    tubeType: 'Red top or SST',
    volume: '3 mL',
    fastingRequired: false,
    interferences: [
      'Ketones may falsely elevate (Jaffe method)',
      'Some cephalosporins interfere',
      'Bilirubin may interfere',
    ],
  },

  relatedLabs: ['lab-bun', 'lab-gfr', 'lab-cystatin-c'],

  organAssociations: [
    { organId: 'kidney', organName: 'Kidney', relationship: 'Excretion (filtration + secretion)' },
    { organId: 'skeletal-muscle', organName: 'Skeletal Muscle', relationship: 'Production (creatine metabolism)' },
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Creatinine is a waste product from muscle activity that your kidneys filter out of your blood.',
      explanation: `Creatinine is a waste product that comes from your muscles. Every day, your muscles use a substance called creatine for energy, and creatinine is what's left over. Your kidneys filter creatinine out of your blood and put it in your urine.

The creatinine test tells doctors how well your kidneys are working. If your kidneys are healthy, they filter out creatinine efficiently and your blood level stays low. If your kidneys aren't working well, creatinine builds up in your blood.

People with more muscle mass (like athletes) naturally have higher creatinine levels. People with less muscle (like elderly folks) have lower levels. That's why doctors look at your creatinine along with your age, sex, and body size to estimate how well your kidneys are working.`,
      keyTerms: [
        { term: 'creatinine', definition: 'A waste product from muscle metabolism filtered by kidneys' },
        { term: 'kidney function', definition: 'How well your kidneys clean waste from your blood' },
        { term: 'GFR', definition: 'A calculation showing how fast your kidneys filter blood' },
      ],
      analogies: [
        'Creatinine is like exhaust from a car engine - it shows the engine (your muscles) is running.',
        'Your kidneys are like a coffee filter - they catch the waste (creatinine) and let the good stuff through.',
      ],
    },
    2: {
      level: 2,
      summary: 'Creatinine is the primary marker for kidney function. It is used to calculate GFR, which estimates how well your kidneys filter blood.',
      explanation: `Creatinine is produced at a constant rate from muscle creatine metabolism and is filtered by the kidneys. Unlike BUN, creatinine is less affected by diet and hydration, making it a more reliable marker of kidney function.

**Normal Ranges**:
- Men: 0.7-1.3 mg/dL
- Women: 0.6-1.1 mg/dL

**Elevated Creatinine Causes**:
- Kidney disease (acute or chronic)
- Dehydration (less common than with BUN)
- Muscle injury (rhabdomyolysis)
- Certain medications
- High protein/creatine supplements

**GFR (Glomerular Filtration Rate)**:
GFR is calculated from creatinine, age, sex, and race:
- Normal GFR: >90 mL/min/1.73m2
- Mild decrease: 60-89
- Moderate decrease: 30-59
- Severe decrease: 15-29
- Kidney failure: <15

**Acute Kidney Injury (AKI)**:
Defined by KDIGO criteria:
- Stage 1: Creatinine rise of 0.3 mg/dL or 1.5-1.9x baseline
- Stage 2: Creatinine 2.0-2.9x baseline
- Stage 3: Creatinine 3x baseline or >4.0 mg/dL`,
      keyTerms: [
        { term: 'GFR (glomerular filtration rate)', definition: 'The rate at which kidneys filter blood; best measure of kidney function', pronunciation: 'glom-AIR-yoo-lar' },
        { term: 'acute kidney injury (AKI)', definition: 'Sudden decrease in kidney function, often reversible' },
        { term: 'chronic kidney disease (CKD)', definition: 'Long-term, progressive loss of kidney function' },
      ],
    },
    3: {
      level: 3,
      summary: 'Creatinine-based GFR equations estimate kidney function but have limitations in extremes of muscle mass, AKI, and certain populations.',
      explanation: `## Creatinine Physiology

### Metabolism
- Creatine (from diet and hepatic synthesis) → phosphocreatine (muscle energy storage)
- Spontaneous conversion to creatinine (~2% creatine/day)
- Production proportional to muscle mass (~20 mg/kg/day)
- Steady-state in healthy individuals

### Renal Handling
- Freely filtered at glomerulus
- 10-20% secreted by proximal tubule
- Minimal reabsorption
- Secretion inhibited by: trimethoprim, cimetidine, dronedarone

### GFR Equations

**CKD-EPI Creatinine (2021):**
Most accurate for adults; no longer uses race coefficient

**Cockcroft-Gault:**
CrCl = [(140-age) × weight] / (72 × SCr) × 0.85 if female
- Still used for drug dosing
- Estimates creatinine clearance, not GFR

**Limitations of Creatinine-Based GFR:**
- Muscle mass extremes (bodybuilders, amputees, cachexia)
- Rapidly changing kidney function (AKI)
- Dietary protein extremes
- Drugs affecting tubular secretion

### AKI Staging (KDIGO)

| Stage | Serum Creatinine | Urine Output |
|-------|------------------|--------------|
| 1 | ↑0.3 mg/dL or 1.5-1.9x baseline | <0.5 mL/kg/hr x 6-12h |
| 2 | 2.0-2.9x baseline | <0.5 mL/kg/hr x ≥12h |
| 3 | 3x baseline or ≥4 mg/dL | <0.3 mL/kg/hr x ≥24h or anuria |

### CKD Staging

| Stage | GFR (mL/min/1.73m²) | Description |
|-------|---------------------|-------------|
| G1 | ≥90 | Normal or high |
| G2 | 60-89 | Mildly decreased |
| G3a | 45-59 | Mildly to moderately decreased |
| G3b | 30-44 | Moderately to severely decreased |
| G4 | 15-29 | Severely decreased |
| G5 | <15 | Kidney failure |`,
      keyTerms: [
        { term: 'CKD-EPI equation', definition: 'Current standard GFR equation; more accurate than MDRD' },
        { term: 'creatinine clearance', definition: 'Volume of plasma cleared of creatinine per minute; includes secretion' },
        { term: 'KDIGO criteria', definition: 'International consensus definition for AKI staging' },
        { term: 'tubular secretion', definition: 'Active transport of creatinine from blood to tubular fluid' },
      ],
      clinicalNotes: 'In AKI, creatinine lags behind true GFR changes. A rising creatinine may indicate ongoing injury even as GFR stabilizes.',
    },
    4: {
      level: 4,
      summary: 'Advanced creatinine interpretation requires understanding kinetics, alternative markers, and application to special populations and drug dosing.',
      explanation: `## Advanced Creatinine Analysis

### Creatinine Kinetics

**Non-Steady State (AKI):**
In rapidly changing GFR, creatinine doesn't reflect true GFR:
- Rising creatinine: True GFR lower than estimated
- Peak creatinine: GFR beginning to recover
- Falling creatinine: GFR improving

**Kinetic GFR Equations:**
Account for changing creatinine:
KeGFR = (GFR × [SCr × V]) / (SCr₂ × V + [SCr₂ - SCr₁] × V / Δt)

### Alternative Markers

**Cystatin C:**
- Produced by all nucleated cells
- Not affected by muscle mass
- More accurate in:
  - Extremes of muscle mass
  - Liver disease
  - Malnutrition
- Affected by thyroid status, corticosteroids

**Combined Equations:**
CKD-EPI creatinine-cystatin C equation is most accurate

**Novel Markers (Research):**
- Beta-2 microglobulin
- Beta-trace protein
- Symmetric dimethylarginine (SDMA)

### Drug Dosing Considerations

**Which Equation to Use:**
- Most drugs: CKD-EPI GFR
- DOAC dosing: Often Cockcroft-Gault (per FDA labeling)
- Vancomycin: AUC-based dosing preferred

**ARC (Augmented Renal Clearance):**
- GFR >130 mL/min in critically ill
- Young trauma, burn, sepsis patients
- May need higher drug doses

### Specific Clinical Scenarios

**Rhabdomyolysis:**
- Massive creatinine release from muscle
- Cr rise disproportionate to kidney injury
- May see Cr >10 mg/dL with recoverable AKI
- Concurrent rise in CK, myoglobin

**Contrast-Induced AKI:**
- Definition: Cr rise 0.5 mg/dL or 25% within 48-72h
- Risk factors: CKD, diabetes, volume depletion
- Prevention: Hydration, minimize contrast volume

**Hepatorenal Syndrome:**
- Creatinine criteria: ≥0.3 mg/dL rise within 48h or ≥50% rise
- Low muscle mass may mask severity
- Serum creatinine underestimates renal dysfunction

### Assay Standardization

**Jaffe Method:**
- Colorimetric, older method
- Positive interference: ketones, bilirubin, some cephalosporins
- Negative interference: hemolysis

**Enzymatic Method:**
- More specific
- Less interference
- Preferred for clinical use`,
      keyTerms: [
        { term: 'kinetic GFR', definition: 'GFR estimate accounting for non-steady state creatinine in AKI' },
        { term: 'cystatin C', definition: 'Alternative GFR marker; not affected by muscle mass' },
        { term: 'augmented renal clearance (ARC)', definition: 'Supranormal GFR in critically ill; may underdose renally cleared drugs' },
        { term: 'Jaffe reaction', definition: 'Colorimetric creatinine assay with known interferences' },
      ],
      clinicalNotes: 'In critically ill patients, consider ARC if young, trauma/burn, or sepsis. Standard drug doses may be subtherapeutic.',
    },
    5: {
      level: 5,
      summary: 'Expert creatinine analysis integrates precision medicine, advanced kinetic modeling, biomarker panels, and individualized approaches to kidney function assessment.',
      explanation: `## Expert Creatinine Analysis

### Precision GFR Assessment

**Measured GFR (Gold Standard):**
- Inulin clearance (research only)
- Iohexol clearance (practical standard)
- Cr-51 EDTA, Tc-99m DTPA (nuclear medicine)

**Indications for Measured GFR:**
- Living kidney donor evaluation
- Drug dosing with narrow therapeutic index
- Extremes of body size
- Research studies

### Advanced Kinetic Modeling

**Continuous Creatinine Monitoring:**
Emerging point-of-care devices allow real-time monitoring

**Creatinine Trajectory Analysis:**
- Slope of creatinine change predicts outcomes
- Rate of rise >0.5 mg/dL/day associated with worse prognosis
- Peak creatinine timing helps estimate injury duration

**Machine Learning Approaches:**
- Electronic health record-based AKI prediction
- Continuous risk stratification
- Integration of multiple parameters

### Biomarker Panels

**Damage Markers:**
- NGAL: Early tubular injury
- KIM-1: Proximal tubule specific
- IL-18: Inflammatory marker

**Functional Markers:**
- Creatinine: Late, affected by muscle mass
- Cystatin C: Not muscle-dependent
- BTP, B2M: Alternative filtration markers

**Stress Markers:**
- [TIMP-2][IGFBP7]: Cell cycle arrest; predicts AKI

**Panel Approach:**
Combining markers improves:
- Early detection
- Risk stratification
- Differentiation of AKI subtypes

### Pharmacogenomics and Nephrotoxicity

**High-Risk Genotypes:**
- CYP2C19 poor metabolizers: Increased risk with some drugs
- NAT2 slow acetylators: Hydralazine toxicity
- MATE1 polymorphisms: Metformin accumulation

**Personalized Drug Dosing:**
- Bayesian dose optimization
- Integration of GFR, genotype, clinical factors
- Real-time therapeutic drug monitoring

### AKI to CKD Transition

**Risk Factors:**
- Severity and duration of AKI
- Repeated AKI episodes
- Pre-existing CKD
- Proteinuria at discharge
- APOL1 high-risk genotype

**Post-AKI Follow-up:**
- Check creatinine at 90 days
- Screen for proteinuria
- KDIGO recommends nephrology referral for AKI survivors

### Special Populations

**Pregnancy:**
- GFR increases 40-50% in pregnancy
- Creatinine >0.8 mg/dL concerning
- CKD-EPI not validated in pregnancy

**Pediatrics:**
- Bedside Schwartz equation: GFR = 0.413 × height / SCr
- Different reference ranges by age
- Cystatin C useful in extremes

**Obesity:**
- Use ideal body weight for Cockcroft-Gault
- CKD-EPI performs reasonably
- Consider cystatin C

### Emerging Technologies

**Point-of-Care Creatinine:**
- i-STAT, handheld devices
- Near-patient testing in ED, OR
- Rapid turnaround for AKI detection

**Continuous Creatinine Monitoring:**
- Implantable sensors in development
- Real-time AKI detection
- Integration with electronic health records`,
      keyTerms: [
        { term: 'iohexol clearance', definition: 'Practical gold standard for measured GFR using contrast agent clearance' },
        { term: 'AKI to CKD transition', definition: 'Development of chronic kidney disease following acute kidney injury' },
        { term: 'Bayesian dosing', definition: 'Pharmacokinetic modeling integrating patient parameters and drug levels' },
        { term: 'APOL1 risk variants', definition: 'Genetic variants associated with increased kidney disease risk in African ancestry' },
      ],
      clinicalNotes: 'The AKI-CKD transition is increasingly recognized. All AKI survivors should have creatinine and proteinuria checked at 90 days. Consider nephrology referral for AKI stage 2-3 survivors.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'lab-bun', targetType: 'structure', relationship: 'related', label: 'BUN' },
    { targetId: 'lab-gfr', targetType: 'structure', relationship: 'related', label: 'GFR' },
  ],
  tags: {
    systems: ['renal'],
    topics: ['laboratory', 'kidney function', 'AKI'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'nephrology'] },
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

// =============================================================================
// SODIUM
// =============================================================================

export const sodiumInterpretation: LabInterpretationContent = {
  id: 'lab-sodium',
  type: 'concept',
  name: 'Sodium',
  alternateNames: ['Na', 'Serum Sodium', 'Na+'],

  labMetadata: {
    loincCode: '2951-2',
    testName: 'Sodium',
    commonAbbreviations: ['Na', 'Na+'],
    category: 'electrolyte',
    panel: 'BMP',
    orderingFrequency: 'routine',
  },

  referenceRanges: {
    adult: {
      low: 136,
      high: 145,
      unit: 'mEq/L (mmol/L)',
    },
  },

  criticalValues: {
    low: 120,
    high: 160,
    unit: 'mEq/L',
    urgency: 'immediate',
    action: 'Na <120: Risk of cerebral edema, seizures; Na >160: Risk of altered mental status, severe dehydration',
    notificationRequired: true,
  },

  interpretations: {
    low: {
      direction: 'low',
      severity: 'moderate',
      causes: [
        {
          category: 'Hypovolemic Hyponatremia',
          causes: [
            'Diarrhea, vomiting',
            'Diuretic use (especially thiazides)',
            'Adrenal insufficiency',
            'Cerebral salt wasting',
          ],
          commonality: 'common',
        },
        {
          category: 'Euvolemic Hyponatremia',
          causes: [
            'SIADH (most common)',
            'Hypothyroidism',
            'Psychogenic polydipsia',
            'Beer potomania',
          ],
          commonality: 'common',
        },
        {
          category: 'Hypervolemic Hyponatremia',
          causes: [
            'Heart failure',
            'Cirrhosis',
            'Nephrotic syndrome',
            'Advanced kidney disease',
          ],
          commonality: 'common',
        },
        {
          category: 'Pseudohyponatremia',
          causes: [
            'Severe hyperlipidemia',
            'Severe hyperproteinemia',
          ],
          commonality: 'uncommon',
        },
      ],
      associatedFindings: [
        'Symptoms correlate with severity and rate of change',
        'Mild: Nausea, headache',
        'Moderate: Confusion, lethargy',
        'Severe: Seizures, coma, respiratory arrest',
      ],
      workupSuggestions: [
        'Assess volume status clinically',
        'Serum osmolality',
        'Urine osmolality and sodium',
        'TSH, cortisol if euvolemic',
      ],
      clinicalPearls: [
        'Correct chronic hyponatremia slowly (<8-10 mEq/L per 24h) to avoid osmotic demyelination',
        'SIADH: Urine osm >100, Urine Na >40, euvolemic, low serum osm',
        'Thiazides cause hyponatremia; loop diuretics less commonly',
      ],
    },
    high: {
      direction: 'high',
      severity: 'moderate',
      causes: [
        {
          category: 'Water Loss',
          causes: [
            'Diabetes insipidus (central or nephrogenic)',
            'Insensible losses (fever, burns)',
            'Osmotic diuresis (hyperglycemia)',
            'Inadequate water intake',
          ],
          commonality: 'common',
        },
        {
          category: 'Sodium Gain',
          causes: [
            'Hypertonic saline administration',
            'Sodium bicarbonate therapy',
            'Salt poisoning (rare)',
            'Primary hyperaldosteronism',
          ],
          commonality: 'uncommon',
        },
      ],
      associatedFindings: [
        'Thirst (if alert)',
        'Altered mental status',
        'Muscle weakness',
        'Hyperreflexia',
        'Intracranial hemorrhage (severe, rapid cases)',
      ],
      workupSuggestions: [
        'Urine osmolality',
        'Water deprivation test if DI suspected',
        'Assess access to water',
        'Glucose (rule out osmotic diuresis)',
      ],
      clinicalPearls: [
        'Most hypernatremia is due to water deficit, not sodium excess',
        'Urine osm <300 in DI; >600 suggests extrarenal water loss',
        'Correct chronic hypernatremia slowly (<10-12 mEq/L per 24h) to avoid cerebral edema',
      ],
    },
  },

  specimen: {
    specimenType: 'serum or plasma',
    tubeType: 'Green top (lithium heparin) or SST',
    volume: '3 mL',
    fastingRequired: false,
    stability: {
      roomTemp: '7 days',
      refrigerated: '7 days',
    },
    interferences: [
      'Hemolysis (minor effect)',
      'Severe lipemia (pseudohyponatremia with indirect methods)',
    ],
  },

  relatedLabs: ['lab-potassium', 'lab-chloride', 'lab-osmolality'],

  organAssociations: [
    { organId: 'kidney', organName: 'Kidney', relationship: 'Regulation (ADH, aldosterone)' },
    { organId: 'pituitary', organName: 'Pituitary', relationship: 'ADH production' },
    { organId: 'adrenal', organName: 'Adrenal', relationship: 'Aldosterone production' },
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Sodium is a mineral that helps control fluid balance in your body and is essential for nerve and muscle function.',
      explanation: `Sodium is one of the most important minerals in your body. It helps control how much water is in and around your cells, and it's essential for your nerves and muscles to work properly.

Most of the sodium in your body comes from salt in food. Your kidneys control how much sodium stays in your body by either keeping it or putting it into your urine.

**Low sodium (hyponatremia)** can happen when:
- You drink too much water
- You take certain medications (water pills)
- You have certain health conditions

Symptoms include feeling tired, confused, having headaches, or in severe cases, seizures.

**High sodium (hypernatremia)** usually happens when:
- You don't drink enough water
- You lose too much water (fever, diarrhea)

Symptoms include extreme thirst, confusion, and weakness.`,
      keyTerms: [
        { term: 'sodium', definition: 'A mineral that helps control fluids in your body' },
        { term: 'hyponatremia', definition: 'When sodium in your blood is too low' },
        { term: 'dehydration', definition: 'When your body loses too much water' },
      ],
      analogies: [
        'Sodium is like salt in soup - too much makes it too salty, too little makes it bland. Your body needs just the right amount.',
        'Think of sodium as a sponge that holds water in your body.',
      ],
    },
    2: {
      level: 2,
      summary: 'Sodium regulation involves the kidneys, hormones (ADH, aldosterone), and thirst. Abnormalities reflect water balance problems more than sodium intake.',
      explanation: `Sodium is the main electrolyte in extracellular fluid (outside cells). It determines fluid distribution between compartments and is tightly regulated.

**Normal Range**: 136-145 mEq/L

**Key Concept**: Sodium abnormalities are usually WATER problems, not sodium problems.

**Hyponatremia (Low Sodium)**:
The most common electrolyte abnormality in hospitals.

*By Volume Status:*
- **Low volume**: Lost both sodium and water (diarrhea, diuretics)
- **Normal volume**: SIADH, hypothyroidism (too much water retention)
- **High volume**: Heart failure, cirrhosis, kidney disease (even more water than sodium)

*Symptoms* (depend on how fast sodium dropped):
- Mild (130-135): Often asymptomatic
- Moderate (120-129): Nausea, headache, confusion
- Severe (<120): Seizures, coma

**Hypernatremia (High Sodium)**:
Almost always due to water deficit.

*Causes:*
- Not drinking enough water (elderly, altered mental status)
- Diabetes insipidus (making too much dilute urine)
- Excessive sweating, fever

*Symptoms:*
- Thirst (if able to respond)
- Confusion, lethargy
- Muscle twitching`,
      keyTerms: [
        { term: 'ADH (antidiuretic hormone)', definition: 'Hormone that tells kidneys to retain water', pronunciation: 'an-ti-dy-yoo-RET-ik' },
        { term: 'SIADH', definition: 'Syndrome of Inappropriate ADH - too much ADH causes water retention' },
        { term: 'volume status', definition: 'How much fluid is in your body - low, normal, or high' },
      ],
    },
    3: {
      level: 3,
      summary: 'Sodium disorders require systematic assessment of volume status, serum and urine osmolality, and urine sodium to determine etiology and guide treatment.',
      explanation: `## Sodium Physiology

### Water Homeostasis
Sodium concentration reflects the ratio of total body sodium to total body water.
- Regulated primarily through water balance (ADH, thirst)
- Aldosterone regulates sodium balance but not concentration

### Hyponatremia Workup Algorithm

1. **Confirm true hyponatremia:**
   - Serum osmolality <280 mOsm/kg (hypotonic)
   - If normal/high osm: Pseudohyponatremia or hypertonic (glucose)

2. **Assess volume status:**
   - Hypovolemic: Skin turgor, BP, BUN:Cr ratio
   - Euvolemic: No edema, normal JVP
   - Hypervolemic: Edema, elevated JVP

3. **Urine studies:**
   - Urine osmolality
   - Urine sodium

**Interpretation:**

| Volume | Urine Na | Diagnosis |
|--------|----------|-----------|
| Low | <20 | Extrarenal losses (GI, third-spacing) |
| Low | >20 | Renal losses (diuretics, adrenal insufficiency) |
| Normal | >20, Uosm >100 | SIADH |
| High | <20 | CHF, cirrhosis, nephrotic syndrome |
| High | >20 | Kidney disease |

### SIADH Diagnostic Criteria
- Serum osm <275 mOsm/kg
- Urine osm >100 mOsm/kg (inappropriately concentrated)
- Urine Na >40 mEq/L
- Euvolemic
- Normal thyroid, adrenal function
- No diuretics

### Treatment Principles

**Acute symptomatic hyponatremia:**
- 3% saline: Raise Na 1-2 mEq/L per hour until symptoms improve
- Maximum 8-10 mEq/L in first 24 hours

**Chronic hyponatremia:**
- Identify and treat underlying cause
- Fluid restriction (SIADH)
- Salt tablets + loop diuretic
- Vaptans (tolvaptan) for SIADH

**Hypernatremia:**
- Calculate free water deficit: 0.6 × weight × (Na/140 - 1)
- Replace gradually over 48-72 hours
- Don't correct >10-12 mEq/L per 24 hours`,
      keyTerms: [
        { term: 'osmotic demyelination syndrome', definition: 'Brain damage from too-rapid correction of chronic hyponatremia' },
        { term: 'free water deficit', definition: 'Calculated volume of water needed to correct hypernatremia' },
        { term: 'vaptans', definition: 'ADH receptor antagonists (tolvaptan); cause water-only diuresis' },
        { term: 'urine osmolality', definition: 'Concentration of urine; helps determine kidney water handling' },
      ],
      clinicalNotes: 'The rate of correction is more important than the target. Document sodium level and time for every correction to track rate.',
    },
    4: {
      level: 4,
      summary: 'Advanced sodium interpretation requires understanding osmoregulation, complex clinical scenarios, and evidence-based correction strategies.',
      explanation: `## Advanced Sodium Disorders

### Osmoregulation Physiology

**Osmoreceptor System:**
- Hypothalamic osmoreceptors detect 1-2% changes in osmolality
- ADH release threshold: ~280 mOsm/kg
- Linear increase in ADH with rising osmolality
- Thirst threshold slightly higher than ADH release

**ADH Actions:**
- V2 receptors (collecting duct): AQP2 insertion → water reabsorption
- V1a receptors: Vasoconstriction
- V3 receptors: ACTH release

### Complex Scenarios

**Exercise-Associated Hyponatremia:**
- Occurs in marathon runners, triathletes
- Excessive hypotonic fluid intake + ADH from exercise
- Can be severe and symptomatic
- Treatment: Hypertonic saline if symptomatic

**Beer Potomania:**
- Low solute intake → limited ability to dilute urine
- "Tea and toast" syndrome similar
- Treatment: Increase dietary solute, fluid restriction

**Reset Osmostat:**
- Chronic mild hyponatremia with normal urine diluting ability
- Seen in: Elderly, pregnancy, chronic illness
- Osmostat reset to lower level; often benign

**Cerebral Salt Wasting vs SIADH:**

| Feature | CSW | SIADH |
|---------|-----|-------|
| Volume | Hypovolemic | Euvolemic |
| Uric acid | Low | Low |
| Treatment | Saline | Fluid restriction |
| Context | CNS injury | Various |

### Correction Strategies

**Hypertonic Saline Administration:**
- 3% NaCl contains 513 mEq/L sodium
- 1 mL/kg raises serum Na ~1 mEq/L
- Bolus approach: 100-150 mL over 10-20 min for severe symptoms
- Infusion: Calculate based on sodium deficit

**Monitoring During Correction:**
- Check sodium every 2-4 hours initially
- Goal: 4-6 mEq/L in first 6 hours if symptomatic
- Maximum: 8 mEq/L in 24 hours (some advocate 10)

**Overcorrection Management:**
- If corrected too fast: Give D5W
- Consider desmopressin (DDAVP) to slow correction
- "Re-lowering" may prevent ODS if caught early

### Osmotic Demyelination Syndrome (ODS)

**Risk Factors:**
- Na <105 mEq/L
- Chronic (>48 hours) hyponatremia
- Hypokalemia
- Malnutrition
- Alcoholism
- Liver disease

**Clinical Features:**
- Develops 2-6 days after correction
- Quadriparesis, dysphagia, dysarthria
- "Locked-in" syndrome
- MRI: Central pontine myelinolysis

### Special Populations

**Post-Operative Hyponatremia:**
- Non-osmotic ADH release from pain, nausea, drugs
- Hypotonic fluids common culprit
- Prevention: Use isotonic fluids post-op

**Drug-Induced:**
- Thiazides: Impaired diluting segment
- SSRIs: SIADH
- Carbamazepine: SIADH
- Oxcarbazepine: High risk`,
      keyTerms: [
        { term: 'aquaporin-2 (AQP2)', definition: 'Water channel inserted in collecting duct in response to ADH' },
        { term: 'osmotic demyelination syndrome (ODS)', definition: 'Brain damage from rapid Na correction; includes central pontine myelinolysis' },
        { term: 'cerebral salt wasting', definition: 'Hypovolemic hyponatremia from renal sodium loss after CNS injury' },
        { term: 'reset osmostat', definition: 'Chronic stable hyponatremia with normally functioning but reset regulatory system' },
      ],
      clinicalNotes: 'When correcting hyponatremia, treat the RATE of correction as a medication order. Document time and Na level with each check.',
    },
    5: {
      level: 5,
      summary: 'Expert sodium analysis integrates molecular mechanisms, precision approaches, emerging therapies, and management of refractory cases.',
      explanation: `## Expert Sodium Analysis

### Molecular Mechanisms

**ADH Signaling:**
V2R (Gαs-coupled) → cAMP → PKA → AQP2 phosphorylation → exocytosis to apical membrane

**Genetic Disorders:**
- Nephrogenic DI: AVPR2 mutations (X-linked), AQP2 mutations
- Central DI: AVP gene mutations (autosomal dominant)
- Congenital SIADH: Gain-of-function V2R mutations

### Advanced Diagnostics

**Copeptin:**
- C-terminal fragment of AVP precursor
- More stable than ADH itself
- Elevated: SIADH
- Low/undetectable: Diabetes insipidus
- May improve DI classification

**Urea in SIADH:**
- Low serum urea (<4 mmol/L) supports SIADH
- High urea clearance from expanded volume

**Fractional Excretion of Uric Acid:**
- >12% suggests SIADH or CSW
- Helps differentiate from other causes

### Treatment Algorithms

**SIADH Treatment Ladder:**
1. Treat underlying cause
2. Fluid restriction (500-1000 mL/day)
3. Salt tablets + loop diuretic
4. Urea (15-30 g/day)
5. Tolvaptan (start 15 mg daily)
6. Demeclocycline (rarely used now)

**Tolvaptan Considerations:**
- Start in hospital (rapid Na rise possible)
- Avoid in liver disease
- Maximum 30 days continuous use
- Monitor liver function

**Conivaptan:**
- IV formulation
- Combined V1a/V2 antagonist
- Use in hospital only

### Refractory Cases

**SIADH Not Responding to Restriction:**
- Verify compliance with restriction
- Consider urea 0.25-0.5 g/kg/day
- Add loop diuretic to salt tablets
- Evaluate for underlying malignancy

**Chronic Hypernatremia in DI:**
- Desmopressin dosing optimization
- Combined central/nephrogenic DI possible
- Address access to water
- Consider thiazides for nephrogenic DI (paradoxical effect)

### Research Frontiers

**Selective V2 Antagonists:**
- More specific than current vaptans
- Potentially fewer drug interactions

**ADH-Independent AQP2 Regulators:**
- Targeting cAMP/PKA pathway
- Bypassing V2 receptor

**Predictive Modeling:**
- Machine learning for overcorrection risk
- Personalized correction protocols

### Quality Metrics

**Hyponatremia Bundle:**
- Sodium check within 24h of admission
- Volume status documentation
- Urine studies within 24h of diagnosis
- Correction rate monitoring q4-6h if treating
- Clear documentation of target

**Preventing Hospital-Acquired Hyponatremia:**
- Avoid hypotonic maintenance fluids
- Monitor high-risk patients (elderly, post-op, CNS disease)
- Standardized fluid orders

### Controversies

**Correction Rate Limits:**
- Traditional: 8-10 mEq/L per 24h
- Some experts: More liberal in acute onset
- Risk-stratify based on chronicity

**Role of Hypertonic Saline in Mild/Moderate Symptoms:**
- Emerging data supports earlier use of boluses
- May prevent progression to severe symptoms

**Fluid Restriction Alone:**
- Often insufficient
- Patient compliance poor
- Consider active treatment earlier`,
      keyTerms: [
        { term: 'copeptin', definition: 'Stable surrogate marker for ADH; elevated in SIADH, low in DI' },
        { term: 'aquaporin-2', definition: 'Water channel regulated by ADH; mutations cause nephrogenic DI' },
        { term: 'urea therapy', definition: 'Osmotic agent for SIADH; increases solute delivery and free water excretion' },
        { term: 'V2 receptor', definition: 'Vasopressin receptor in collecting duct mediating water reabsorption' },
      ],
      clinicalNotes: 'Copeptin is emerging as a useful biomarker for sodium disorders. It can help differentiate primary polydipsia (low copeptin with water load) from SIADH (elevated copeptin) in difficult cases.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'lab-potassium', targetType: 'structure', relationship: 'related', label: 'Potassium' },
    { targetId: 'pathway-adh', targetType: 'pathway', relationship: 'related', label: 'ADH Pathway' },
  ],
  tags: {
    systems: ['renal', 'endocrine'],
    topics: ['laboratory', 'electrolytes', 'fluid balance'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'nephrology'] },
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

// =============================================================================
// POTASSIUM
// =============================================================================

export const potassiumInterpretation: LabInterpretationContent = {
  id: 'lab-potassium',
  type: 'concept',
  name: 'Potassium',
  alternateNames: ['K', 'Serum Potassium', 'K+'],

  labMetadata: {
    loincCode: '2823-3',
    testName: 'Potassium',
    commonAbbreviations: ['K', 'K+'],
    category: 'electrolyte',
    panel: 'BMP',
    orderingFrequency: 'routine',
  },

  referenceRanges: {
    adult: {
      low: 3.5,
      high: 5.0,
      unit: 'mEq/L (mmol/L)',
    },
  },

  criticalValues: {
    low: 2.5,
    high: 6.5,
    unit: 'mEq/L',
    urgency: 'immediate',
    action: 'K <2.5 or >6.5: Obtain ECG immediately; risk of fatal arrhythmias',
    notificationRequired: true,
  },

  interpretations: {
    low: {
      direction: 'low',
      severity: 'moderate',
      causes: [
        {
          category: 'Renal Losses',
          causes: [
            'Diuretics (loop, thiazide)',
            'Hyperaldosteronism',
            'Renal tubular acidosis',
            'Hypomagnesemia',
            'Amphotericin B',
          ],
          commonality: 'common',
        },
        {
          category: 'GI Losses',
          causes: [
            'Diarrhea',
            'Vomiting (metabolic alkalosis → renal loss)',
            'Laxative abuse',
            'NG suction',
          ],
          commonality: 'common',
        },
        {
          category: 'Transcellular Shift',
          causes: [
            'Insulin administration',
            'Beta-2 agonists',
            'Alkalosis',
            'Refeeding syndrome',
          ],
          commonality: 'common',
        },
      ],
      associatedFindings: [
        'Muscle weakness, cramps',
        'ECG: U waves, flattened T waves, prolonged QT',
        'Ileus',
        'Rhabdomyolysis (severe)',
      ],
      workupSuggestions: [
        'Check magnesium (often concurrent)',
        'Urine potassium, TTKG if needed',
        'Assess acid-base status',
        'ECG',
      ],
      clinicalPearls: [
        'Always check and replace magnesium first - hypokalemia resistant to treatment until Mg corrected',
        'Each 1 mEq/L drop represents ~200-400 mEq total body deficit',
        'Vomiting causes alkalosis → renal K wasting (not from vomitus itself)',
      ],
    },
    high: {
      direction: 'high',
      severity: 'severe',
      causes: [
        {
          category: 'Pseudohyperkalemia',
          causes: [
            'Hemolyzed sample',
            'Prolonged tourniquet/fist clenching',
            'Thrombocytosis, leukocytosis',
          ],
          commonality: 'common',
        },
        {
          category: 'Decreased Excretion',
          causes: [
            'Acute kidney injury',
            'Chronic kidney disease',
            'Hypoaldosteronism (Addison, type 4 RTA)',
            'K-sparing diuretics',
            'ACEi/ARBs',
          ],
          commonality: 'common',
        },
        {
          category: 'Transcellular Shift',
          causes: [
            'Acidosis',
            'Insulin deficiency (DKA)',
            'Cell lysis (rhabdomyolysis, tumor lysis, hemolysis)',
            'Beta-blockers',
            'Succinylcholine',
          ],
          commonality: 'common',
        },
        {
          category: 'Increased Intake',
          causes: [
            'K supplements',
            'Blood transfusion',
            'Salt substitutes',
          ],
          commonality: 'common',
        },
      ],
      associatedFindings: [
        'Muscle weakness (severe)',
        'ECG changes: peaked T waves, widened QRS, sine wave',
        'Cardiac arrhythmias, cardiac arrest',
      ],
      workupSuggestions: [
        'Repeat K (rule out hemolysis)',
        'ECG immediately if K >6.0',
        'Check kidney function',
        'Assess acid-base status',
      ],
      clinicalPearls: [
        'ECG changes are more important than absolute K level',
        'Treat ECG changes before waiting for repeat lab',
        'Ca gluconate stabilizes membrane but does not lower K',
      ],
    },
  },

  specimen: {
    specimenType: 'serum or plasma',
    tubeType: 'Green top (heparin) preferred; SST acceptable',
    volume: '3 mL',
    fastingRequired: false,
    stability: {
      roomTemp: '4 hours (separate promptly)',
      refrigerated: '24 hours',
    },
    interferences: [
      'Hemolysis (most common cause of falsely elevated K)',
      'Prolonged tourniquet',
      'Fist clenching',
      'Delay in processing',
    ],
  },

  relatedLabs: ['lab-sodium', 'lab-magnesium', 'lab-bicarbonate'],

  organAssociations: [
    { organId: 'kidney', organName: 'Kidney', relationship: 'Primary regulation site' },
    { organId: 'adrenal', organName: 'Adrenal', relationship: 'Aldosterone production' },
    { organId: 'heart', organName: 'Heart', relationship: 'Cardiac membrane potential' },
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Potassium is a mineral essential for your heart and muscles to work properly.',
      explanation: `Potassium is one of the most important minerals in your body. It helps your heart beat regularly, your muscles contract, and your nerves send signals.

Most of your body's potassium is inside your cells. The right balance of potassium inside and outside cells is crucial for your heart to work properly.

**Low potassium (hypokalemia)** can happen from:
- Medications like water pills (diuretics)
- Diarrhea or vomiting
- Not eating enough potassium-rich foods

Symptoms include muscle weakness, cramps, and feeling tired.

**High potassium (hyperkalemia)** can happen from:
- Kidney problems
- Certain medications
- Too many potassium supplements

This is more dangerous because it can affect your heart rhythm. Severe high potassium can cause your heart to stop.

Bananas, potatoes, and oranges are good sources of potassium.`,
      keyTerms: [
        { term: 'potassium', definition: 'A mineral important for heart and muscle function' },
        { term: 'heart rhythm', definition: 'The regular pattern of your heartbeat' },
        { term: 'electrolyte', definition: 'A mineral that carries an electrical charge in your body' },
      ],
      analogies: [
        'Potassium is like the spark plug for your muscles - it helps them fire correctly.',
        'The balance of potassium is like a battery - the right charge makes everything work.',
      ],
    },
    2: {
      level: 2,
      summary: 'Potassium is critical for cardiac and neuromuscular function. Both high and low levels can cause dangerous arrhythmias.',
      explanation: `Potassium (K+) is the major intracellular cation. Only 2% is extracellular, but this small amount is tightly regulated because it determines the resting membrane potential of cardiac and muscle cells.

**Normal Range**: 3.5-5.0 mEq/L

**Hypokalemia (Low K+)**:
Causes:
- Diuretics (most common)
- Diarrhea, vomiting
- Not eating enough
- Certain hormonal disorders

ECG Changes:
- Flattened T waves
- U waves
- Prolonged QT interval

**Hyperkalemia (High K+)**:
Causes:
- Kidney failure (most common serious cause)
- Medications (ACE inhibitors, potassium supplements)
- Cell breakdown (crush injuries, burns)

ECG Changes (progressive):
1. Peaked T waves (earliest)
2. Prolonged PR interval
3. Widened QRS
4. Sine wave pattern (pre-arrest)

**Emergency Treatment of Hyperkalemia**:
1. Calcium gluconate (protects heart)
2. Insulin + glucose (shifts K into cells)
3. Albuterol (shifts K into cells)
4. Kayexalate or dialysis (removes K from body)`,
      keyTerms: [
        { term: 'resting membrane potential', definition: 'Electrical charge across cell membranes at rest' },
        { term: 'peaked T waves', definition: 'Tall, pointed T waves on ECG; sign of hyperkalemia' },
        { term: 'U waves', definition: 'Extra waves after T waves on ECG; sign of hypokalemia' },
      ],
    },
    3: {
      level: 3,
      summary: 'Potassium homeostasis involves renal excretion, transcellular shifts, and hormonal regulation. Evaluation requires assessment of acid-base status and urine K.',
      explanation: `## Potassium Physiology

### Distribution
- Total body K: ~50 mEq/kg (3500 mEq in 70kg adult)
- Intracellular: 98% (maintained by Na-K-ATPase)
- Extracellular: 2% (measured serum K)

### Regulation

**Transcellular Shift:**
| Into Cells (↓K) | Out of Cells (↑K) |
|-----------------|-------------------|
| Insulin | Insulin deficiency |
| β2-agonists | β-blockers |
| Alkalosis | Acidosis (mineral, not organic) |
| Catecholamines | Cell lysis |

**Renal Excretion:**
- 90% of K excreted by kidneys
- Principal cells in collecting duct
- Regulated by aldosterone, distal Na delivery, urine flow

### Hypokalemia Workup

**Step 1: Rule out transcellular shift**
**Step 2: Urine K assessment**

| Urine K | Interpretation |
|---------|---------------|
| <20 mEq/L | Extrarenal loss (GI, poor intake) |
| >20 mEq/L | Renal loss |

**TTKG (Transtubular K Gradient):**
TTKG = (Urine K / Serum K) × (Serum Osm / Urine Osm)
- >4 during hypokalemia = inappropriate renal K wasting
- <2 during hyperkalemia = appropriate renal response

### Hyperkalemia Management

**ECG-Based Urgency:**
- No ECG changes: May treat more conservatively
- Peaked T waves: Urgent intervention
- QRS widening: Emergent intervention

**Treatment Protocol:**
| Agent | Mechanism | Onset | Duration |
|-------|-----------|-------|----------|
| Ca gluconate | Membrane stabilization | 1-3 min | 30-60 min |
| Insulin/glucose | Cellular shift | 15-30 min | 4-6 hours |
| β2-agonist | Cellular shift | 15-30 min | 2-4 hours |
| NaHCO3 | Shift (if acidotic) | 15-30 min | Hours |
| Kayexalate | GI excretion | Hours | Hours |
| Dialysis | Removal | Minutes | Permanent |

### Chronic Management

**Hypokalemia:**
- KCl replacement (oral or IV)
- Treat underlying cause
- Correct hypomagnesemia
- K-sparing diuretics if needed

**Hyperkalemia in CKD:**
- Dietary K restriction
- Avoid K-sparing drugs
- Loop diuretics
- Newer K binders (patiromer, SZC)`,
      keyTerms: [
        { term: 'TTKG (transtubular potassium gradient)', definition: 'Estimate of K secretion in collecting duct' },
        { term: 'principal cells', definition: 'Collecting duct cells that secrete K under aldosterone influence' },
        { term: 'patiromer', definition: 'GI potassium binder for chronic hyperkalemia management' },
        { term: 'sodium zirconium cyclosilicate', definition: 'GI K binder (SZC/Lokelma); works in hours' },
      ],
      clinicalNotes: 'Hypomagnesemia causes refractory hypokalemia by increasing K secretion. Always check Mg and replace it first.',
    },
    4: {
      level: 4,
      summary: 'Advanced K interpretation integrates acid-base physiology, aldosterone action, complex ECG interpretation, and management of special populations.',
      explanation: `## Advanced Potassium Analysis

### Cellular Mechanisms

**Na-K-ATPase:**
- 3 Na out, 2 K in per cycle
- Maintains -90mV resting potential
- Inhibited by: Digitalis, hypoxia
- Stimulated by: Insulin, catecholamines, thyroid hormone

**Renal K Handling:**
- Freely filtered at glomerulus
- 67% reabsorbed in proximal tubule (passive)
- 20% in thick ascending limb (NKCC2)
- Collecting duct: Net secretion (principal cells) or absorption (α-intercalated cells)

### Acid-Base Interactions

**Metabolic Acidosis:**
- Mineral acids (HCl, NH4Cl): K shifts out
- Organic acids (lactic, DKA): Less K shift
- Reason: Organic anions enter cells with H+

**Metabolic Alkalosis:**
- K shifts into cells
- Causes: Volume depletion, chloride depletion, hypokalemia itself

### Complex ECG Interpretation

**Hyperkalemia Sequence:**
1. K 5.5-6.0: Peaked T waves (tall, narrow, symmetric)
2. K 6.0-7.0: Prolonged PR, flattened P waves
3. K 7.0-8.0: Widened QRS, bizarre axis
4. K >8.0: Sine wave, VF, asystole

**Mimics of Hyperkalemia ECG:**
- Acute MI (peaked T waves in leads)
- Early repolarization
- LVH (pseudo-peaked T waves)

**Hypokalemia:**
- U waves: Best seen in V2-V3
- QT prolongation (actually QU prolongation)
- ST depression, T wave flattening

### Special Scenarios

**Diabetic Ketoacidosis:**
- Serum K often normal or high despite total body deficit
- Shifts out due to: Insulin deficiency, acidosis, hypertonicity
- K falls rapidly with treatment
- Replace when K <5.3 (before starting insulin if possible)

**Digoxin Toxicity:**
- Both hypo- and hyperkalemia worsen toxicity
- Maintain K 4.0-5.0 in dig patients
- Hypokalemia increases dig binding to Na-K-ATPase

**Renal Tubular Acidosis:**
- Type 1 (distal): Hypokalemic
- Type 2 (proximal): Hypokalemic
- Type 4 (hypoaldosteronism): Hyperkalemic

**Tumor Lysis Syndrome:**
- Massive K, PO4, uric acid release
- Hypocalcemia (PO4 binding)
- High risk during chemotherapy for hematologic malignancies
- Prevention: Hydration, rasburicase, monitor closely

### Advanced Management

**Dialysis for Hyperkalemia:**
- Removes 25-50 mEq/hour
- Rebound post-dialysis (redistribution)
- Consider extended or consecutive sessions for severe cases

**Fludrocortisone:**
- Synthetic mineralocorticoid
- For type 4 RTA/hypoaldosteronism
- Watch for volume overload, hypertension`,
      keyTerms: [
        { term: 'NKCC2', definition: 'Na-K-2Cl cotransporter in thick ascending limb; target of loop diuretics' },
        { term: 'principal cells', definition: 'Collecting duct cells secreting K; have ENaC and ROMK channels' },
        { term: 'ENaC', definition: 'Epithelial sodium channel; Na entry drives K secretion' },
        { term: 'sine wave', definition: 'Pre-terminal ECG pattern in severe hyperkalemia' },
      ],
      clinicalNotes: 'In DKA, total body K is depleted despite normal/high serum K. Start K replacement early (when K <5.3) to prevent severe hypokalemia with treatment.',
    },
    5: {
      level: 5,
      summary: 'Expert K analysis encompasses channelopathies, precision therapeutics, emerging treatments, and molecular mechanisms of K disorders.',
      explanation: `## Expert Potassium Analysis

### Molecular Mechanisms

**ROMK Channel (Kir1.1):**
- Apical K channel in principal cells
- Allows K secretion
- Mutations: Bartter syndrome type 2

**BK (Maxi-K) Channel:**
- Calcium and voltage-activated K channel
- Contributes to K secretion with high flow
- Target of new K-lowering strategies

**KCNJ Gene Family:**
- Encode inward rectifier K channels
- KCNJ1: ROMK (renal K secretion)
- KCNJ5: Aldosterone synthase regulation
  - Mutations cause familial hyperaldosteronism type 3

### Channelopathies and K

**Brugada Syndrome:**
- SCN5A mutations affecting Na channels
- Hypokalemia can unmask/worsen ECG changes
- Maintain K >4.0

**Long QT Syndrome:**
- KCNQ1/KCNH2 mutations (K channels)
- Hypokalemia worsens QT prolongation
- Aggressive K repletion if QTc prolonged

**Andersen-Tawil Syndrome:**
- KCNJ2 mutations (Kir2.1)
- Periodic paralysis, cardiac arrhythmias
- K level fluctuations can trigger symptoms

### Precision Therapeutics

**Patiromer (Veltassa):**
- Calcium-based K binder
- Works in colon (not stomach)
- Start 8.4 g daily with food
- Slow onset (7+ days for full effect)

**Sodium Zirconium Cyclosilicate (SZC/Lokelma):**
- Crystalline inorganic compound
- Works throughout GI tract
- Rapid onset (1-6 hours)
- Can be used acutely and chronically
- Start 10 g TID for 48h, then once daily

**Comparison:**

| Feature | Patiromer | SZC |
|---------|-----------|-----|
| Onset | Days | Hours |
| Mechanism | K-Ca exchange | K trapping |
| Use | Chronic | Acute and chronic |
| Drug interactions | Many (separate dosing) | Few |

### Research Frontiers

**Gene Therapy for Channelopathies:**
- AAV-mediated gene replacement
- In development for KCNQ1, KCNH2

**Novel K Channel Modulators:**
- BK channel activators for K excretion
- ROMK inhibitors for diuresis without K loss

**Wearable K Monitoring:**
- Sweat-based K sensors
- Real-time alerts for dialysis patients
- Integration with smart devices

### Controversial Areas

**Empiric K Replacement:**
- Wide variation in practice
- Some advocate for higher thresholds (keep K >4.5)
- Limited evidence for specific targets in most populations

**IV KCl Rates:**
- Traditional limit: 10-20 mEq/hr peripherally
- Higher rates (40 mEq/hr) via central line sometimes used
- Cardiac monitoring required for >10 mEq/hr

**Dialysate K Concentration:**
- Low K bath: Faster K removal but arrhythmia risk
- High K bath: Safer but slower
- Individualized based on pre-dialysis K

### Quality Improvement

**Reducing Hyperkalemia Hospitalizations:**
- Medication reconciliation (ACEi/ARB + K-sparing)
- Patient education on high-K foods
- Novel binder use in high-risk patients
- Telemedicine monitoring of K levels

**Preventing Hypokalemia:**
- K-sparing diuretics when using loop/thiazide
- Dietary counseling
- Monitoring protocols for high-risk medications`,
      keyTerms: [
        { term: 'ROMK', definition: 'Renal outer medullary K channel; mediates K secretion in collecting duct' },
        { term: 'Andersen-Tawil syndrome', definition: 'Channelopathy with periodic paralysis, arrhythmias, and dysmorphic features' },
        { term: 'SZC (sodium zirconium cyclosilicate)', definition: 'Rapid-acting GI K binder for acute and chronic hyperkalemia' },
        { term: 'BK channel', definition: 'Big conductance K channel; contributes to flow-dependent K secretion' },
      ],
      clinicalNotes: 'Novel GI K binders (patiromer, SZC) have transformed chronic hyperkalemia management, allowing continuation of beneficial RAAS inhibitors in heart failure and CKD patients.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'lab-sodium', targetType: 'structure', relationship: 'related', label: 'Sodium' },
    { targetId: 'lab-magnesium', targetType: 'structure', relationship: 'related', label: 'Magnesium' },
  ],
  tags: {
    systems: ['renal', 'cardiac'],
    topics: ['laboratory', 'electrolytes', 'arrhythmia'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'emergency'] },
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

// =============================================================================
// BMP PANEL DEFINITION
// =============================================================================

export const BMP_PANEL: LabPanel = {
  id: 'panel-bmp',
  name: 'Basic Metabolic Panel',
  nameEs: 'Panel Metabolico Basico',
  abbreviation: 'BMP',
  description: 'Evaluates kidney function, electrolyte balance, and glucose metabolism.',
  includedTests: [
    'lab-glucose',
    'lab-bun',
    'lab-creatinine',
    'lab-sodium',
    'lab-potassium',
    'lab-chloride',
    'lab-bicarbonate',
    'lab-calcium',
  ],
  commonIndications: [
    'Kidney function assessment',
    'Electrolyte monitoring',
    'Diabetes management',
    'Dehydration evaluation',
    'Medication monitoring (diuretics, ACE inhibitors)',
    'Preoperative assessment',
  ],
  interpretationGuidance: [
    {
      level: 1,
      content: 'The BMP checks how well your kidneys work, your blood sugar level, and important minerals in your blood.',
    },
    {
      level: 3,
      content: 'Systematic BMP interpretation: Assess glucose for diabetes/hypoglycemia. Check BUN and creatinine for kidney function (calculate BUN:Cr ratio). Evaluate electrolytes - sodium for water balance, potassium for cardiac risk, bicarbonate for acid-base status.',
    },
    {
      level: 5,
      content: 'Integrate BMP with clinical context, medications, and acid-base analysis. Calculate anion gap (Na - Cl - HCO3). Use kinetic GFR equations in AKI. Consider transcellular shifts affecting K. Correlate glucose with HbA1c for chronic assessment.',
    },
  ],
  patterns: [
    {
      patternName: 'Prerenal Azotemia',
      description: 'Elevated BUN:Cr ratio with concentrated urine indicating decreased renal perfusion',
      labFindings: [
        { labId: 'lab-bun', labName: 'BUN', expectedDirection: 'high' },
        { labId: 'lab-creatinine', labName: 'Creatinine', expectedDirection: 'high' },
        { labId: 'lab-sodium', labName: 'Sodium', expectedDirection: 'normal' },
      ],
      suggestsDiagnosis: ['Dehydration', 'Heart failure', 'Hypovolemia'],
      clinicalContext: 'BUN:Cr ratio >20:1 suggests prerenal cause. Check volume status and urine studies.',
    },
    {
      patternName: 'Diabetic Ketoacidosis',
      description: 'High glucose with metabolic acidosis and electrolyte disturbances',
      labFindings: [
        { labId: 'lab-glucose', labName: 'Glucose', expectedDirection: 'high' },
        { labId: 'lab-bicarbonate', labName: 'CO2', expectedDirection: 'low' },
        { labId: 'lab-potassium', labName: 'Potassium', expectedDirection: 'high' },
      ],
      suggestsDiagnosis: ['Diabetic ketoacidosis'],
      clinicalContext: 'Check anion gap, serum ketones, and arterial pH. K is high but total body depleted.',
    },
    {
      patternName: 'SIADH',
      description: 'Hyponatremia with inappropriately concentrated urine',
      labFindings: [
        { labId: 'lab-sodium', labName: 'Sodium', expectedDirection: 'low' },
        { labId: 'lab-bun', labName: 'BUN', expectedDirection: 'low' },
        { labId: 'lab-creatinine', labName: 'Creatinine', expectedDirection: 'normal' },
      ],
      suggestsDiagnosis: ['SIADH', 'Hypothyroidism', 'Adrenal insufficiency'],
      clinicalContext: 'Euvolemic hyponatremia with urine osm >100 and urine Na >40 suggests SIADH.',
    },
  ],
};

// Export all BMP components
export const bmpComponents = {
  glucose: glucoseInterpretation,
  bun: bunInterpretation,
  creatinine: creatinineInterpretation,
  sodium: sodiumInterpretation,
  potassium: potassiumInterpretation,
};
