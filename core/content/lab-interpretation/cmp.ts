/**
 * Comprehensive Metabolic Panel (CMP) - Laboratory Interpretation Content
 *
 * Comprehensive educational content for CMP interpretation including:
 * - All BMP components (glucose, BUN, creatinine, electrolytes, calcium)
 * - Liver function tests (AST, ALT, ALP, bilirubin, albumin, total protein)
 */

import { LabInterpretationContent, LabPanel, PanelPattern } from './types';

// =============================================================================
// AST (Aspartate Aminotransferase)
// =============================================================================

export const astInterpretation: LabInterpretationContent = {
  id: 'lab-ast',
  type: 'concept',
  name: 'AST (Aspartate Aminotransferase)',
  alternateNames: ['SGOT', 'Aspartate Transaminase', 'Serum Glutamic-Oxaloacetic Transaminase'],

  labMetadata: {
    loincCode: '1920-8',
    testName: 'AST',
    commonAbbreviations: ['AST', 'SGOT'],
    category: 'liver',
    panel: 'CMP',
    orderingFrequency: 'routine',
  },

  referenceRanges: {
    adult: {
      low: 10,
      high: 40,
      unit: 'U/L',
      notes: 'Adult reference range',
    },
    variations: [
      {
        low: 10,
        high: 35,
        unit: 'U/L',
        demographic: { sex: 'female' },
        notes: 'Women may have slightly lower upper limit',
      },
    ],
  },

  criticalValues: {
    high: 1000,
    unit: 'U/L',
    urgency: 'urgent',
    action: 'Evaluate for acute hepatocellular injury, ischemic hepatitis, or acetaminophen toxicity',
    notificationRequired: true,
  },

  interpretations: {
    high: {
      direction: 'high',
      severity: 'moderate',
      causes: [
        {
          category: 'Hepatocellular Injury',
          causes: [
            'Viral hepatitis (A, B, C, E)',
            'Alcoholic hepatitis',
            'Drug-induced liver injury (acetaminophen, statins)',
            'Autoimmune hepatitis',
            'Ischemic hepatitis (shock liver)',
          ],
          commonality: 'common',
        },
        {
          category: 'Non-Hepatic Sources',
          causes: [
            'Myocardial infarction',
            'Skeletal muscle injury (rhabdomyolysis)',
            'Hemolysis',
            'Strenuous exercise',
          ],
          commonality: 'common',
        },
        {
          category: 'Other Liver Conditions',
          causes: [
            'Non-alcoholic fatty liver disease (NAFLD)',
            'Cirrhosis (may be normal or mildly elevated)',
            'Hepatocellular carcinoma',
            'Wilson disease',
          ],
          commonality: 'uncommon',
        },
      ],
      associatedFindings: [
        'Check ALT for AST:ALT ratio',
        'Elevated bilirubin suggests cholestasis or severe injury',
        'Low albumin suggests chronic liver disease',
        'Elevated CK suggests muscle source',
      ],
      workupSuggestions: [
        'Compare AST:ALT ratio (>2:1 suggests alcoholic liver disease)',
        'Check CK to rule out muscle source',
        'Hepatitis serologies if viral cause suspected',
        'Acetaminophen level if overdose possible',
        'Liver ultrasound for structural evaluation',
      ],
      clinicalPearls: [
        'AST:ALT ratio >2:1 classic for alcoholic liver disease',
        'AST >1000 U/L suggests ischemic hepatitis, acetaminophen toxicity, or acute viral hepatitis',
        'AST elevated more than ALT in cirrhosis due to reduced ALT production',
        'AST is in mitochondria; more tissue distribution than ALT',
      ],
    },
  },

  specimen: {
    specimenType: 'serum',
    tubeType: 'Red top or gold top (SST)',
    volume: '3 mL',
    fastingRequired: false,
    stability: {
      roomTemp: '24 hours',
      refrigerated: '7 days',
    },
    interferences: ['Hemolysis (falsely elevates)', 'Lipemia'],
  },

  relatedLabs: ['lab-alt', 'lab-alp', 'lab-bilirubin', 'lab-albumin', 'lab-ck'],

  organAssociations: [
    { organId: 'liver', organName: 'Liver', relationship: 'Hepatocyte injury marker' },
    { organId: 'heart', organName: 'Heart', relationship: 'Cardiac muscle source' },
    { organId: 'muscle', organName: 'Skeletal Muscle', relationship: 'Muscle injury source' },
  ],

  levels: {
    1: {
      level: 1,
      summary: 'AST is an enzyme that shows if your liver or muscles might be damaged.',
      explanation: `AST is a helper molecule (enzyme) found inside liver cells, heart cells, and muscle cells. When these cells are damaged, AST leaks into your blood.

**What it means:**
- Normal AST means your liver and muscles are healthy
- High AST might mean liver damage, heart problems, or muscle injury
- Doctors use AST along with other tests to find the cause

**Common reasons for high AST:**
- Liver diseases (hepatitis, fatty liver)
- Heart attack
- Muscle injury or intense exercise
- Some medications

Your doctor will look at AST along with other tests to understand what's happening.`,
      keyTerms: [
        { term: 'enzyme', definition: 'A helper molecule that makes chemical reactions happen in your body' },
        { term: 'hepatitis', definition: 'Inflammation (swelling and damage) of the liver' },
      ],
      analogies: [
        'AST is like a security tag - when liver cells break open, AST escapes into the blood, alerting doctors to the damage.',
      ],
    },
    2: {
      level: 2,
      summary: 'AST is a transaminase enzyme found in liver, heart, and muscle tissue. Elevation indicates cellular injury but is less liver-specific than ALT.',
      explanation: `## AST Overview

**Normal Range:** 10-40 U/L

**Tissue Distribution:**
| Tissue | AST Content |
|--------|-------------|
| Heart | High |
| Liver | High |
| Skeletal muscle | High |
| Kidney | Moderate |
| RBCs | Moderate |

## Interpretation

**Degree of Elevation:**
| Level | Interpretation |
|-------|----------------|
| 1-3x normal | Mild - fatty liver, medications |
| 3-10x normal | Moderate - chronic hepatitis, cirrhosis |
| >10x normal | Severe - acute hepatitis, ischemia, toxins |
| >1000 U/L | Massive - ischemic hepatitis, acetaminophen toxicity |

**AST:ALT Ratio:**
| Ratio | Suggests |
|-------|----------|
| <1 | Most liver diseases |
| >2:1 | Alcoholic liver disease |
| >1 in cirrhosis | Advanced liver disease |`,
      keyTerms: [
        { term: 'transaminase', definition: 'Enzyme that transfers amino groups between molecules' },
        { term: 'AST:ALT ratio', definition: 'Comparison of AST to ALT levels; helps identify cause of liver injury' },
      ],
      analogies: [
        'AST is like a smoke detector that goes off for liver, heart, or muscle "fires" - not specific to one organ.',
      ],
    },
    3: {
      level: 3,
      summary: 'AST interpretation requires correlation with ALT ratio, clinical context, and exclusion of non-hepatic sources for accurate diagnosis.',
      explanation: `## Systematic AST Interpretation

### Pattern Recognition

**Hepatocellular vs Cholestatic:**
| Pattern | AST/ALT | ALP | Bilirubin |
|---------|---------|-----|-----------|
| Hepatocellular | ↑↑↑ | Normal/↑ | Variable |
| Cholestatic | ↑ | ↑↑↑ | ↑ |
| Mixed | ↑↑ | ↑↑ | ↑ |

### R-Factor Calculation
R = (ALT/ULN) / (ALP/ULN)
- R > 5: Hepatocellular
- R < 2: Cholestatic
- R 2-5: Mixed

### AST:ALT Ratio Interpretation
| Ratio | Clinical Significance |
|-------|----------------------|
| <1 | NAFLD, viral hepatitis, drug injury |
| 1-2 | Non-specific |
| >2 | Alcoholic liver disease, cirrhosis |
| >3 | Strongly suggests alcoholic hepatitis |

### Non-Hepatic Causes
**Muscle Sources:**
- Rhabdomyolysis (AST can be >10x normal)
- Myocardial infarction
- Intense exercise
- Check CK to differentiate

**Other Sources:**
- Hemolysis (AST in RBCs)
- Thyroid disorders
- Celiac disease

### Medication-Induced
| Drug Class | Pattern |
|------------|---------|
| Acetaminophen | Acute, dose-dependent, can be massive |
| Statins | Usually mild (<3x normal) |
| Antiepileptics | Variable |
| Antibiotics | Hepatocellular or cholestatic |`,
      keyTerms: [
        { term: 'R-factor', definition: 'Ratio to classify liver injury as hepatocellular vs cholestatic' },
        { term: 'rhabdomyolysis', definition: 'Severe muscle breakdown releasing contents into blood' },
      ],
      clinicalNotes: 'Always check CK when AST is elevated disproportionately to ALT to rule out muscle source.',
    },
    4: {
      level: 4,
      summary: 'Advanced AST interpretation incorporates macro-AST, isoenzyme analysis, and integration with specialized liver testing.',
      explanation: `## Advanced AST Interpretation

### Macro-AST
- Immunoglobulin-bound AST complexes
- Falsely elevated AST
- Suspect when: persistent unexplained elevation, normal other LFTs
- Confirm with: polyethylene glycol precipitation or electrophoresis

### AST Isoenzymes
- Cytosolic (cAST): Predominant form
- Mitochondrial (mAST): Released with severe injury
- mAST elevation suggests more severe hepatocyte necrosis

### Specific Disease Patterns

**Acetaminophen Toxicity:**
| Time | AST | Prognosis |
|------|-----|-----------|
| 24-48h | Rising rapidly | Correlates with extent of injury |
| Peak 3-4 days | Can be >10,000 U/L | Peak >10,000 associated with worse outcomes |
| Rapid fall | May indicate recovery or massive necrosis | Correlate with INR, clinical status |

**Ischemic Hepatitis:**
- AST typically >1000-3000 U/L
- Rapid rise and fall (hours to days)
- ALT often similarly elevated
- LDH markedly elevated
- Associated hypotension/shock

**Wilson Disease:**
- AST:ALT ratio often >2 (unusual for non-alcoholic cause)
- Low ALP relative to bilirubin (ALP:bilirubin ratio <4)
- Look for hemolysis, low ceruloplasmin

### Integration with Other Tests

**Liver Fibrosis Assessment:**
| Test | Components | Use |
|------|------------|-----|
| FIB-4 | Age, AST, ALT, platelets | Non-invasive fibrosis |
| APRI | AST, platelets | Fibrosis in hepatitis C |
| ELF | Tissue inhibitor of metalloproteinase | Advanced fibrosis panel |

**Formula: FIB-4**
FIB-4 = (Age × AST) / (Platelets × √ALT)
- <1.45: Low probability of advanced fibrosis
- >3.25: High probability of advanced fibrosis`,
      keyTerms: [
        { term: 'macro-AST', definition: 'AST bound to immunoglobulins causing persistent benign elevation' },
        { term: 'mitochondrial AST', definition: 'AST isoenzyme from mitochondria indicating severe hepatocyte injury' },
        { term: 'FIB-4', definition: 'Non-invasive score using age, AST, ALT, platelets to assess liver fibrosis' },
      ],
      clinicalNotes: 'In patients with unexplained persistent AST elevation and normal ALT, consider macro-AST before extensive workup.',
    },
    5: {
      level: 5,
      summary: 'Expert AST interpretation requires understanding of assay methodologies, rare causes, and integration with advanced hepatology assessment.',
      explanation: `## Expert-Level AST Interpretation

### Assay Considerations
**Methods:**
- IFCC reference method (with pyridoxal phosphate)
- Some assays without P5P supplementation may underestimate
- Method-dependent reference ranges

**Interferences:**
| Interference | Effect | Mechanism |
|--------------|--------|-----------|
| Hemolysis | Falsely elevated | AST in RBCs |
| Lipemia | Variable | Optical interference |
| High ammonia | May interfere | Substrate competition |

### Rare and Complex Causes

**Genetic/Metabolic:**
- Alpha-1 antitrypsin deficiency
- Hemochromatosis
- Wilson disease
- Glycogen storage diseases

**Infiltrative:**
- Amyloidosis (hepatic)
- Lymphoma/leukemia infiltration
- Granulomatous disease

**Vascular:**
- Budd-Chiari syndrome
- Sinusoidal obstruction syndrome
- Portal vein thrombosis

### AST in Special Populations

**Pregnancy:**
- AST may be slightly lower in 2nd trimester
- Elevations suggest: HELLP, acute fatty liver, preeclampsia
- HELLP: Hemolysis + Elevated Liver enzymes + Low Platelets

**Pediatrics:**
- Higher upper normal limits in neonates/infants
- Consider: biliary atresia, metabolic diseases, infections

**Cirrhosis:**
- May be normal or mildly elevated despite severe disease
- AST:ALT ratio typically >1
- Reflects decreased hepatocyte mass

### Prognostic Applications

**MELD Score:**
- Uses bilirubin, INR, creatinine (not AST directly)
- But AST trends inform clinical trajectory

**King's College Criteria (Acetaminophen):**
- pH <7.30, OR
- INR >6.5 AND Creatinine >3.4 AND Grade III/IV encephalopathy
- AST absolute value not in criteria but trajectory important

### Emerging Biomarkers

**GLDH (Glutamate Dehydrogenase):**
- Mitochondrial enzyme, more liver-specific
- May replace AST in some panels

**miRNA Panels:**
- miR-122 highly liver-specific
- May detect injury before AST elevation
- Research/specialized use currently`,
      keyTerms: [
        { term: 'IFCC method', definition: 'International Federation of Clinical Chemistry standardized reference method' },
        { term: 'HELLP syndrome', definition: 'Pregnancy complication with hemolysis, elevated liver enzymes, low platelets' },
        { term: 'miR-122', definition: 'Liver-specific microRNA being studied as biomarker' },
      ],
      clinicalNotes: 'Expert interpretation recognizes that AST is a non-specific marker and clinical context, pattern analysis, and additional testing are essential for accurate diagnosis.',
    },
  },

  media: [],
  citations: [
    {
      id: 'acg-liver-chemistry',
      type: 'article',
      title: 'ACG Clinical Guideline: Evaluation of Abnormal Liver Chemistries',
      source: 'American Journal of Gastroenterology',
      authors: ['Kwo PY', 'Cohen SM', 'Lim JK'],
    },
  ],
  crossReferences: [
    { targetId: 'lab-alt', targetType: 'concept', relationship: 'related' },
    { targetId: 'liver-function-interpretation', targetType: 'concept', relationship: 'parent' },
  ],
  tags: {
    systems: ['hepatic', 'gastrointestinal'],
    topics: ['laboratory', 'hepatology', 'gastroenterology'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

// =============================================================================
// ALT (Alanine Aminotransferase)
// =============================================================================

export const altInterpretation: LabInterpretationContent = {
  id: 'lab-alt',
  type: 'concept',
  name: 'ALT (Alanine Aminotransferase)',
  alternateNames: ['SGPT', 'Alanine Transaminase', 'Serum Glutamic-Pyruvic Transaminase'],

  labMetadata: {
    loincCode: '1742-6',
    testName: 'ALT',
    commonAbbreviations: ['ALT', 'SGPT'],
    category: 'liver',
    panel: 'CMP',
    orderingFrequency: 'routine',
  },

  referenceRanges: {
    adult: {
      low: 7,
      high: 56,
      unit: 'U/L',
      notes: 'Standard adult range; some guidelines suggest lower cutoffs',
    },
    variations: [
      {
        low: 7,
        high: 45,
        unit: 'U/L',
        demographic: { sex: 'female' },
        notes: 'Women typically have lower ALT levels',
      },
      {
        low: 10,
        high: 40,
        unit: 'U/L',
        notes: 'Some guidelines recommend lower upper limits for screening',
      },
    ],
  },

  criticalValues: {
    high: 1000,
    unit: 'U/L',
    urgency: 'urgent',
    action: 'Evaluate for acute hepatocellular injury',
    notificationRequired: true,
  },

  interpretations: {
    high: {
      direction: 'high',
      severity: 'moderate',
      causes: [
        {
          category: 'Hepatocellular Injury',
          causes: [
            'Non-alcoholic fatty liver disease (NAFLD)',
            'Viral hepatitis (A, B, C)',
            'Drug-induced liver injury',
            'Alcoholic liver disease',
            'Autoimmune hepatitis',
          ],
          commonality: 'common',
        },
        {
          category: 'Acute Severe Injury',
          causes: [
            'Ischemic hepatitis',
            'Acetaminophen toxicity',
            'Acute viral hepatitis',
            'Autoimmune hepatitis flare',
          ],
          commonality: 'uncommon',
        },
        {
          category: 'Other',
          causes: [
            'Celiac disease',
            'Thyroid disorders',
            'Adrenal insufficiency',
            'Strenuous exercise (mild, transient)',
          ],
          commonality: 'uncommon',
        },
      ],
      associatedFindings: [
        'Check AST:ALT ratio',
        'Elevated GGT suggests alcohol or biliary disease',
        'High bilirubin indicates impaired excretion',
      ],
      workupSuggestions: [
        'Hepatitis serologies (HBsAg, anti-HCV)',
        'Liver ultrasound',
        'Iron studies, ceruloplasmin if young patient',
        'Autoimmune markers (ANA, ASMA, anti-LKM)',
      ],
      clinicalPearls: [
        'ALT is more liver-specific than AST',
        'NAFLD is most common cause of mild chronic elevation',
        'Normal ALT does not exclude significant liver disease',
      ],
    },
  },

  specimen: {
    specimenType: 'serum',
    tubeType: 'Red top or gold top (SST)',
    volume: '3 mL',
    fastingRequired: false,
    stability: {
      roomTemp: '24 hours',
      refrigerated: '7 days',
    },
    interferences: ['Hemolysis (mild effect)'],
  },

  relatedLabs: ['lab-ast', 'lab-alp', 'lab-ggt', 'lab-bilirubin'],

  organAssociations: [
    { organId: 'liver', organName: 'Liver', relationship: 'Primary source - hepatocyte cytoplasm' },
  ],

  levels: {
    1: {
      level: 1,
      summary: 'ALT is a liver enzyme that helps doctors know if your liver is healthy.',
      explanation: `ALT is a helper molecule found mainly in your liver. When liver cells are damaged, ALT leaks into your blood.

**What it means:**
- Normal ALT: Your liver is working well
- High ALT: Your liver might be irritated or damaged

**Common causes of high ALT:**
- Fatty liver (from being overweight)
- Hepatitis (liver infection)
- Certain medications
- Drinking too much alcohol

ALT is one of the most important tests for checking liver health.`,
      keyTerms: [
        { term: 'liver enzyme', definition: 'A substance made by the liver that helps with chemical reactions' },
        { term: 'fatty liver', definition: 'When too much fat builds up in liver cells' },
      ],
      analogies: [
        'ALT is like a canary in a coal mine - it warns doctors early when something might be wrong with your liver.',
      ],
    },
    2: {
      level: 2,
      summary: 'ALT is a liver-specific transaminase enzyme. Elevation primarily indicates hepatocellular injury and is the preferred marker for liver screening.',
      explanation: `## ALT Overview

**Normal Range:** 7-56 U/L (varies by lab and gender)

**Key Features:**
- More liver-specific than AST
- Found mainly in hepatocyte cytoplasm
- Longer half-life than AST (~47 hours vs ~17 hours)

## Interpretation

**Degree of Elevation:**
| Level | Common Causes |
|-------|---------------|
| 1-3x normal | NAFLD, chronic hepatitis, medications |
| 3-10x normal | Acute hepatitis, drug injury |
| >10x normal | Acute viral, ischemic, or toxic hepatitis |
| >1000 U/L | Ischemic hepatitis, acetaminophen, acute viral |

**ALT in Common Conditions:**
| Condition | Typical ALT |
|-----------|-------------|
| NAFLD | 1-3x normal |
| Chronic Hepatitis B/C | 1-5x normal |
| Alcoholic hepatitis | 2-8x normal (usually <300) |
| Acute viral hepatitis | 10-100x normal |`,
      keyTerms: [
        { term: 'hepatocyte', definition: 'Liver cell - the main functional cell of the liver' },
        { term: 'NAFLD', definition: 'Non-alcoholic fatty liver disease - fat accumulation without alcohol cause' },
      ],
      analogies: [
        'If AST is a general alarm, ALT is specifically the liver alarm.',
      ],
    },
    3: {
      level: 3,
      summary: 'Systematic ALT interpretation requires evaluation of elevation pattern, duration, and integration with other liver tests for accurate diagnosis.',
      explanation: `## Systematic ALT Interpretation

### Initial Approach
1. Confirm elevation (repeat if unexpected)
2. Assess degree and duration
3. Calculate AST:ALT ratio
4. Check other liver tests (ALP, bilirubin, albumin)

### Workup Algorithm

**Mild Elevation (1-5x normal):**
1. Review medications/supplements
2. Check hepatitis B/C serologies
3. Liver ultrasound
4. Consider: iron studies, celiac screen, thyroid

**Moderate Elevation (5-10x normal):**
- More urgent evaluation
- Hepatitis serologies, autoimmune markers
- Consider liver biopsy if cause unclear

**Severe Elevation (>10x normal):**
- Urgent evaluation
- Acetaminophen level
- Imaging for vascular causes
- Consider transfer to liver center

### Pattern Recognition
| Pattern | AST:ALT | ALP | Suggests |
|---------|---------|-----|----------|
| NAFLD | <1 | Normal/mild ↑ | Metabolic syndrome |
| Alcoholic | >2 | Mild ↑ | Alcohol abuse |
| Viral | <1 | Normal/mild ↑ | Hepatitis B/C |
| Cholestatic | Variable | ↑↑ | Biliary disease |

### Special Considerations
- **Diabetes/Obesity:** High NAFLD prevalence
- **Athletes:** Exercise can transiently elevate
- **Medications:** Statins, antibiotics, antiepileptics`,
      keyTerms: [
        { term: 'cholestatic', definition: 'Pattern suggesting bile flow obstruction or injury' },
        { term: 'autoimmune markers', definition: 'Antibodies (ANA, ASMA) suggesting autoimmune liver disease' },
      ],
      clinicalNotes: 'Mild ALT elevation in the setting of metabolic syndrome should prompt NAFLD workup including risk assessment for fibrosis.',
    },
    4: {
      level: 4,
      summary: 'Advanced ALT interpretation incorporates gender-specific cutoffs, non-invasive fibrosis assessment, and understanding of ALT kinetics.',
      explanation: `## Advanced ALT Interpretation

### Updated Reference Ranges
**Evidence-Based Cutoffs:**
| Population | Proposed Upper Limit |
|------------|---------------------|
| Men | 30 U/L |
| Women | 19 U/L |
| Children | Age-dependent |

Using lower cutoffs increases sensitivity for detecting NAFLD and hepatitis C.

### Non-Invasive Fibrosis Assessment

**FIB-4 Score:**
FIB-4 = (Age × AST) / (Platelets × √ALT)
| Score | Interpretation |
|-------|----------------|
| <1.3 | Low risk of fibrosis |
| 1.3-2.67 | Indeterminate |
| >2.67 | High risk of advanced fibrosis |

**NAFLD Fibrosis Score:**
- Includes: age, BMI, diabetes, AST/ALT, platelets, albumin
- Calculator-based interpretation

### ALT Kinetics
- Half-life: ~47 hours
- Rise after injury: 12-24 hours
- Peak: 24-72 hours for acute injury
- Duration: Depends on cause and ongoing injury

### ALT in Disease Monitoring

**Hepatitis C Treatment:**
- ALT normalization indicates treatment response
- Persistent elevation suggests resistance or non-adherence

**NAFLD Management:**
- ALT improvement with weight loss
- 5-10% weight loss often normalizes ALT

**Drug Monitoring:**
| Drug | Monitoring Recommendation |
|------|--------------------------|
| Statins | Baseline, then if symptomatic |
| Methotrexate | Every 4-8 weeks initially |
| Isoniazid | Monthly in high-risk patients |`,
      keyTerms: [
        { term: 'FIB-4', definition: 'Fibrosis-4 score - non-invasive marker of liver fibrosis' },
        { term: 'NAFLD Fibrosis Score', definition: 'Composite score predicting fibrosis in fatty liver disease' },
      ],
      clinicalNotes: 'Consider using lower ALT cutoffs (30 for men, 19 for women) for screening to improve sensitivity for early liver disease detection.',
    },
    5: {
      level: 5,
      summary: 'Expert ALT interpretation encompasses advanced diagnostics, quality considerations, and integration with novel biomarkers and imaging modalities.',
      explanation: `## Expert-Level ALT Interpretation

### Quality Considerations
**Pre-analytical:**
- Exercise within 24 hours can elevate
- Fasting generally not required
- Hemolysis: minimal effect (unlike AST)

**Analytical:**
- IFCC reference method
- Pyridoxal phosphate supplementation important
- Method-dependent reference ranges

### Advanced Differential Diagnosis

**Occult Causes of Persistent Elevation:**
- Celiac disease (screen with TTG-IgA)
- Thyroid disorders (TSH)
- Adrenal insufficiency
- Muscle disorders (check CK)
- Alpha-1 antitrypsin deficiency
- Hemochromatosis

**Rare Metabolic Diseases:**
- Wilson disease (age <40)
- Glycogen storage diseases
- Lysosomal storage disorders

### Integration with Advanced Modalities

**Elastography:**
| Modality | Interpretation |
|----------|----------------|
| FibroScan (TE) | kPa correlates with fibrosis stage |
| MR Elastography | More accurate, especially in obesity |
| ARFI | Ultrasound-based, point-of-care |

**ALT + Elastography:**
- ALT suggests ongoing injury
- Elastography assesses cumulative damage/fibrosis
- Combined improves prognostication

### ALT in Research Settings

**Minimal Important Change:**
- ~30% change likely clinically significant
- Used in clinical trials for efficacy endpoints

**Novel Biomarkers:**
| Biomarker | Characteristic |
|-----------|----------------|
| CK-18 (M30) | Hepatocyte apoptosis |
| PIIINP | Fibrogenesis |
| ELF Panel | Enhanced liver fibrosis assessment |

### Precision Medicine

**Pharmacogenomics:**
- HLA-B*57:01 and flucloxacillin hepatotoxicity
- CYP2D6 and codeine metabolism
- Consider genetic testing for unexplained DILI

**NAFLD Genetic Risk:**
- PNPLA3 I148M variant
- TM6SF2 E167K variant
- May influence disease progression`,
      keyTerms: [
        { term: 'FibroScan', definition: 'Transient elastography device measuring liver stiffness for fibrosis assessment' },
        { term: 'CK-18', definition: 'Cytokeratin-18 - biomarker of hepatocyte apoptosis in liver disease' },
        { term: 'PNPLA3', definition: 'Gene variant associated with NAFLD susceptibility and severity' },
      ],
      clinicalNotes: 'Expert ALT interpretation recognizes that this single test, while valuable, must be integrated with clinical context, imaging, and sometimes histology for optimal patient management.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'lab-ast', targetType: 'concept', relationship: 'related' },
  ],
  tags: {
    systems: ['hepatic'],
    topics: ['laboratory', 'hepatology'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

// =============================================================================
// ALKALINE PHOSPHATASE (ALP)
// =============================================================================

export const alpInterpretation: LabInterpretationContent = {
  id: 'lab-alp',
  type: 'concept',
  name: 'Alkaline Phosphatase',
  alternateNames: ['ALP', 'Alk Phos'],

  labMetadata: {
    loincCode: '6768-6',
    testName: 'Alkaline Phosphatase',
    commonAbbreviations: ['ALP', 'Alk Phos'],
    category: 'liver',
    panel: 'CMP',
    orderingFrequency: 'routine',
  },

  referenceRanges: {
    adult: {
      low: 44,
      high: 147,
      unit: 'U/L',
      notes: 'Adult reference range',
    },
    variations: [
      {
        low: 100,
        high: 400,
        unit: 'U/L',
        demographic: { ageGroup: 'pediatric' },
        notes: 'Higher in children due to bone growth',
      },
    ],
  },

  criticalValues: {
    high: 1000,
    unit: 'U/L',
    urgency: 'expedited',
    action: 'Evaluate for biliary obstruction, bone disease, or malignancy',
    notificationRequired: true,
  },

  interpretations: {
    high: {
      direction: 'high',
      severity: 'moderate',
      causes: [
        {
          category: 'Hepatobiliary',
          causes: [
            'Biliary obstruction (stones, stricture, malignancy)',
            'Primary biliary cholangitis',
            'Primary sclerosing cholangitis',
            'Drug-induced cholestasis',
            'Infiltrative liver disease',
          ],
          commonality: 'common',
        },
        {
          category: 'Bone',
          causes: [
            'Paget disease',
            'Bone metastases',
            'Fracture healing',
            'Hyperparathyroidism',
            'Osteomalacia',
          ],
          commonality: 'common',
        },
        {
          category: 'Physiologic',
          causes: [
            'Pregnancy (placental source)',
            'Childhood/adolescent growth',
            'Post-fatty meal (intestinal source)',
          ],
          commonality: 'common',
        },
      ],
      associatedFindings: [
        'Elevated GGT confirms hepatic source',
        'Elevated bilirubin suggests cholestasis',
        'Normal GGT with high ALP suggests bone source',
      ],
      workupSuggestions: [
        'Check GGT to confirm hepatic vs bone source',
        'If hepatic: liver ultrasound, consider MRCP',
        'If bone: check calcium, PTH, bone imaging',
        'ALP isoenzymes if source unclear',
      ],
      clinicalPearls: [
        'GGT elevates with hepatic ALP, not bone ALP',
        'Normal ALP in children is much higher than adults',
        'Isolated ALP elevation may be benign (transient, fatty meal)',
      ],
    },
    low: {
      direction: 'low',
      severity: 'mild',
      causes: [
        {
          category: 'Metabolic',
          causes: [
            'Hypophosphatasia (rare genetic disorder)',
            'Zinc deficiency',
            'Hypothyroidism',
            'Pernicious anemia',
            'Celiac disease',
          ],
          commonality: 'rare',
        },
      ],
      associatedFindings: [],
      workupSuggestions: [
        'Check zinc, thyroid, B12 levels',
        'Consider genetic testing for hypophosphatasia',
      ],
      clinicalPearls: ['Low ALP is less clinically significant than elevated ALP'],
    },
  },

  specimen: {
    specimenType: 'serum',
    tubeType: 'Red top or gold top (SST)',
    volume: '3 mL',
    fastingRequired: false,
    stability: {
      roomTemp: '24 hours',
      refrigerated: '7 days',
    },
    interferences: ['Hemolysis'],
  },

  relatedLabs: ['lab-ggt', 'lab-bilirubin', 'lab-calcium', 'lab-pth'],

  organAssociations: [
    { organId: 'liver', organName: 'Liver', relationship: 'Hepatic isoenzyme' },
    { organId: 'bone', organName: 'Bone', relationship: 'Bone isoenzyme' },
    { organId: 'placenta', organName: 'Placenta', relationship: 'Placental isoenzyme in pregnancy' },
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Alkaline phosphatase (ALP) is an enzyme found in liver, bones, and other tissues that helps doctors check for liver or bone problems.',
      explanation: `ALP is a helper molecule found in several parts of your body, especially the liver and bones.

**What it means:**
- Normal ALP: Liver and bones are healthy
- High ALP: Could mean liver problems, bone problems, or can be normal (like in pregnancy or growing children)

**Why it might be high:**
- Blocked bile duct
- Bone diseases
- Pregnancy (normal)
- Growing children (normal)

Doctors often check other tests along with ALP to find out where the problem is.`,
      keyTerms: [
        { term: 'bile duct', definition: 'Tubes that carry bile from the liver and gallbladder to the intestine' },
        { term: 'enzyme', definition: 'A protein that helps chemical reactions happen in your body' },
      ],
      analogies: [
        'ALP is like having the same alarm in two rooms (liver and bones) - when it goes off, doctors need to figure out which room has the problem.',
      ],
    },
    2: {
      level: 2,
      summary: 'ALP is a membrane-bound enzyme with hepatic and bone isoenzymes. Elevation suggests cholestasis or bone disease, distinguished by GGT co-elevation.',
      explanation: `## ALP Overview

**Normal Range:** 44-147 U/L (adults)

**Isoenzyme Sources:**
| Source | Clinical Context |
|--------|-----------------|
| Liver (hepatobiliary) | Cholestasis, infiltration |
| Bone | Paget disease, metastases, growth |
| Intestinal | Post-fatty meal |
| Placental | Pregnancy |

## Interpretation

**Distinguishing Source:**
| Scenario | ALP | GGT | Interpretation |
|----------|-----|-----|----------------|
| Both elevated | ↑ | ↑ | Hepatic source |
| ALP alone | ↑ | Normal | Bone or physiologic |

**Degree of Elevation:**
| Level | Common Causes |
|-------|---------------|
| Mild (1-2x) | Medications, partial obstruction |
| Moderate (2-5x) | Cholestasis, bone disease |
| Marked (>5x) | Complete obstruction, Paget disease |`,
      keyTerms: [
        { term: 'cholestasis', definition: 'Impaired bile flow causing backup of bile components' },
        { term: 'isoenzyme', definition: 'Different forms of the same enzyme from different tissues' },
      ],
      analogies: [
        'GGT is like a detective partner - if ALP and GGT are both elevated, the liver is the culprit.',
      ],
    },
    3: {
      level: 3,
      summary: 'ALP interpretation requires differentiation of hepatobiliary from bone sources and evaluation for obstructive vs infiltrative patterns.',
      explanation: `## Systematic ALP Interpretation

### Source Differentiation

**Hepatic vs Bone:**
| Test | Hepatic Source | Bone Source |
|------|----------------|-------------|
| GGT | Elevated | Normal |
| 5'-nucleotidase | Elevated | Normal |
| ALP isoenzymes | Hepatic band | Bone band |

### Hepatobiliary Causes

**Obstructive:**
- Choledocholithiasis
- Pancreatic head mass
- Strictures (malignant or benign)
- Primary sclerosing cholangitis

**Infiltrative:**
- Metastatic cancer
- Lymphoma
- Granulomatous disease (sarcoidosis, TB)
- Amyloidosis

**Intrahepatic Cholestasis:**
- Primary biliary cholangitis (anti-mitochondrial Ab)
- Drug-induced
- Sepsis
- TPN-associated

### Bone Causes
| Condition | Pattern |
|-----------|---------|
| Paget disease | Very high (often >1000), localized |
| Bone metastases | Variable, look for primary |
| Fracture healing | Transient elevation |
| Osteomalacia | Moderate elevation + low calcium/phosphate |

### Workup Algorithm
1. Check GGT to confirm source
2. If hepatic: Ultrasound first, then MRCP if dilated ducts
3. If bone: Calcium, PTH, bone imaging
4. Consider ALP isoenzymes if unclear`,
      keyTerms: [
        { term: 'MRCP', definition: 'Magnetic Resonance Cholangiopancreatography - MRI of bile ducts' },
        { term: 'Paget disease', definition: 'Bone disorder with abnormal breakdown and formation' },
      ],
      clinicalNotes: 'Markedly elevated ALP with minimal transaminase elevation strongly suggests cholestatic or infiltrative process.',
    },
    4: {
      level: 4,
      summary: 'Advanced ALP interpretation includes isoenzyme analysis, recognition of unusual patterns, and understanding of ALP in specific disease states.',
      explanation: `## Advanced ALP Interpretation

### Isoenzyme Analysis
**Electrophoresis Bands:**
| Band | Source | Mobility |
|------|--------|----------|
| Liver | Hepatobiliary | Fast |
| Bone | Osteoblasts | Moderate |
| Intestinal | Enterocytes | Slow |
| Placental | Trophoblasts | Fast (similar to liver) |

**Heat Stability:**
- Placental ALP: Heat stable
- Bone ALP: Heat labile
- Can use heat inactivation to differentiate

### Special Situations

**Primary Biliary Cholangitis:**
- ALP elevated early, often before symptoms
- Anti-mitochondrial antibody (AMA) positive
- GGT elevated
- AST/ALT mild elevation

**Regan Isoenzyme:**
- Placental-type ALP in non-pregnant adults
- Associated with malignancy (lung, ovarian, testicular)
- Tumor marker in some cancers

**ALP in Pregnancy:**
- Third trimester elevation (placental)
- Can reach 2-4x normal
- Normalizes post-partum

### ALP:Bilirubin Ratio
**Wilson Disease Clue:**
- ALP:bilirubin ratio <4 (when both elevated)
- Low ALP relative to bilirubin level
- Associated with hemolytic anemia

### Drug Effects on ALP
| Mechanism | Examples |
|-----------|----------|
| Cholestasis | Phenytoin, OCPs, anabolic steroids |
| Enzyme induction | Phenobarbital, rifampin |
| Direct effect | Rare |`,
      keyTerms: [
        { term: 'Regan isoenzyme', definition: 'Placental-type ALP found in malignancy' },
        { term: 'AMA', definition: 'Anti-mitochondrial antibody - marker for primary biliary cholangitis' },
      ],
      clinicalNotes: 'In suspected Wilson disease, a low ALP relative to bilirubin (ALP:bilirubin <4) is a diagnostic clue.',
    },
    5: {
      level: 5,
      summary: 'Expert ALP interpretation encompasses rare disorders, bone-specific ALP assays, and integration with advanced hepatobiliary and bone imaging.',
      explanation: `## Expert-Level ALP Interpretation

### Bone-Specific ALP (BSAP)
**Clinical Uses:**
- Bone turnover marker
- Monitoring Paget disease treatment
- Assessing bone metastases response
- More specific than total ALP

**Reference Range:**
- Varies by assay and age
- Elevated in high turnover states

### Rare Causes of ALP Abnormalities

**Low ALP (Hypophosphatasia):**
- Genetic deficiency of tissue-nonspecific ALP
- Presentation: Rickets, fractures, dental abnormalities
- Lab: Low ALP, elevated PLP (pyridoxal phosphate)
- Treatment: Asfotase alfa (enzyme replacement)

**Transient Hyperphosphatasemia of Infancy:**
- Benign, self-limiting
- Very high ALP (often >1000 U/L)
- Normal liver/bone otherwise
- Resolves within weeks to months

### Advanced Biliary Imaging Integration

**MRCP Indications:**
- Dilated ducts on ultrasound
- High suspicion for obstruction
- PSC evaluation

**EUS Role:**
- Small distal CBD stones
- Periampullary lesions
- Tissue diagnosis

**ERCP:**
- Therapeutic intervention
- Stent placement
- Stone extraction

### ALP in Liver Transplant
- May remain elevated post-transplant
- Rule out biliary complications (stricture, leak)
- Consider rejection

### Quality Considerations
**Pre-analytical:**
- Fasting preferred (intestinal ALP post-meal)
- Avoid hemolysis

**Analytical:**
- Method-dependent values
- IFCC reference method
- Temperature-sensitive`,
      keyTerms: [
        { term: 'BSAP', definition: 'Bone-specific alkaline phosphatase - isoenzyme-specific assay' },
        { term: 'hypophosphatasia', definition: 'Rare genetic disorder of low ALP causing bone mineralization defects' },
        { term: 'transient hyperphosphatasemia', definition: 'Benign marked ALP elevation in infants that resolves spontaneously' },
      ],
      clinicalNotes: 'Expert interpretation recognizes that ALP elevation may be entirely benign or indicate serious pathology - clinical context and additional testing are essential.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'lab-ggt', targetType: 'concept', relationship: 'related' },
  ],
  tags: {
    systems: ['hepatic', 'musculoskeletal'],
    topics: ['laboratory', 'hepatology', 'orthopedics'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

// =============================================================================
// CMP PANEL
// =============================================================================

export const CMP_PANEL: LabPanel = {
  id: 'panel-cmp',
  name: 'Comprehensive Metabolic Panel',
  abbreviation: 'CMP',
  description: 'Complete metabolic assessment including electrolytes, kidney function, glucose, and liver enzymes.',
  includedTests: [
    'lab-glucose',
    'lab-bun',
    'lab-creatinine',
    'lab-sodium',
    'lab-potassium',
    'lab-chloride',
    'lab-bicarbonate',
    'lab-calcium',
    'lab-ast',
    'lab-alt',
    'lab-alp',
    'lab-bilirubin-total',
    'lab-albumin',
    'lab-total-protein',
  ],
  commonIndications: [
    'Annual health screening',
    'Medication monitoring (especially ACE inhibitors, diuretics, statins)',
    'Evaluation of fatigue, weakness, or abdominal symptoms',
    'Preoperative assessment',
    'Hospital admission',
    'Monitoring chronic conditions (diabetes, kidney disease, liver disease)',
  ],
  interpretationGuidance: [
    {
      level: 1,
      content: 'The CMP is a common blood test that checks how your kidneys, liver, and blood sugar are working, along with important minerals in your blood.',
    },
    {
      level: 3,
      content: 'Interpret CMP systematically: 1) Glucose for diabetes/hypoglycemia, 2) BUN/Cr for kidney function with ratio analysis, 3) Electrolytes for acid-base and fluid status, 4) Liver panel for hepatocellular vs cholestatic patterns.',
    },
    {
      level: 5,
      content: 'Expert CMP analysis integrates all components: calculate anion gap (Na-Cl-HCO3), assess osmolar gap if indicated, correlate transaminases with ALP for liver injury pattern, evaluate albumin for synthetic function, and consider temporal trends in chronic disease management.',
    },
  ],
  patterns: [
    {
      patternName: 'Hepatocellular Injury',
      description: 'Pattern suggesting direct liver cell damage',
      labFindings: [
        { labId: 'lab-ast', labName: 'AST', expectedDirection: 'high' },
        { labId: 'lab-alt', labName: 'ALT', expectedDirection: 'high' },
        { labId: 'lab-alp', labName: 'ALP', expectedDirection: 'normal' },
        { labId: 'lab-bilirubin-total', labName: 'Bilirubin', expectedDirection: 'normal' },
      ],
      suggestsDiagnosis: ['Viral hepatitis', 'Drug-induced liver injury', 'Autoimmune hepatitis', 'Ischemic hepatitis'],
      clinicalContext: 'AST/ALT elevation >10x normal with relatively normal ALP suggests acute hepatocellular injury. Check for viral hepatitis and drug/toxin exposure.',
    },
    {
      patternName: 'Cholestatic Pattern',
      description: 'Pattern suggesting bile flow obstruction or intrahepatic cholestasis',
      labFindings: [
        { labId: 'lab-ast', labName: 'AST', expectedDirection: 'normal' },
        { labId: 'lab-alt', labName: 'ALT', expectedDirection: 'normal' },
        { labId: 'lab-alp', labName: 'ALP', expectedDirection: 'high' },
        { labId: 'lab-bilirubin-total', labName: 'Bilirubin', expectedDirection: 'high' },
      ],
      suggestsDiagnosis: ['Biliary obstruction', 'Primary biliary cholangitis', 'Drug-induced cholestasis', 'Infiltrative disease'],
      clinicalContext: 'Elevated ALP with normal or mildly elevated transaminases suggests cholestatic process. Confirm with GGT and imaging.',
    },
    {
      patternName: 'Alcoholic Liver Disease',
      description: 'Classic pattern of alcohol-related liver injury',
      labFindings: [
        { labId: 'lab-ast', labName: 'AST', expectedDirection: 'high' },
        { labId: 'lab-alt', labName: 'ALT', expectedDirection: 'high' },
        { labId: 'lab-albumin', labName: 'Albumin', expectedDirection: 'low' },
      ],
      suggestsDiagnosis: ['Alcoholic hepatitis', 'Alcoholic cirrhosis'],
      clinicalContext: 'AST:ALT ratio >2:1 with AST usually <300 U/L is classic for alcoholic liver disease. Low albumin suggests chronic disease.',
    },
    {
      patternName: 'Chronic Kidney Disease',
      description: 'Pattern of impaired kidney function with metabolic consequences',
      labFindings: [
        { labId: 'lab-creatinine', labName: 'Creatinine', expectedDirection: 'high' },
        { labId: 'lab-bun', labName: 'BUN', expectedDirection: 'high' },
        { labId: 'lab-bicarbonate', labName: 'Bicarbonate', expectedDirection: 'low' },
        { labId: 'lab-calcium', labName: 'Calcium', expectedDirection: 'low' },
      ],
      suggestsDiagnosis: ['Chronic kidney disease', 'Secondary hyperparathyroidism'],
      clinicalContext: 'Elevated BUN and creatinine with metabolic acidosis and hypocalcemia suggests CKD. Calculate GFR and stage appropriately.',
    },
  ],
};
