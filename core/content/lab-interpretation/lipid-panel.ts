/**
 * Lipid Panel - Laboratory Interpretation Content
 *
 * Comprehensive educational content for lipid panel interpretation including:
 * - Total Cholesterol
 * - LDL Cholesterol
 * - HDL Cholesterol
 * - Triglycerides
 * - VLDL
 * - Non-HDL Cholesterol
 */

import { LabInterpretationContent, LabPanel, PanelPattern } from './types';

// =============================================================================
// TOTAL CHOLESTEROL
// =============================================================================

export const totalCholesterolInterpretation: LabInterpretationContent = {
  id: 'lab-total-cholesterol',
  type: 'concept',
  name: 'Total Cholesterol',
  alternateNames: ['TC', 'Serum Cholesterol'],

  labMetadata: {
    loincCode: '2093-3',
    testName: 'Total Cholesterol',
    commonAbbreviations: ['TC', 'Chol'],
    category: 'lipid',
    panel: 'Lipid Panel',
    orderingFrequency: 'routine',
  },

  referenceRanges: {
    adult: {
      low: 0,
      high: 200,
      unit: 'mg/dL',
      notes: 'Desirable level',
    },
    variations: [
      {
        low: 200,
        high: 239,
        unit: 'mg/dL',
        notes: 'Borderline high',
      },
      {
        low: 240,
        high: 1000,
        unit: 'mg/dL',
        notes: 'High',
      },
    ],
  },

  criticalValues: {
    high: 500,
    unit: 'mg/dL',
    urgency: 'expedited',
    action: 'Evaluate for familial hypercholesterolemia or secondary causes',
    notificationRequired: true,
  },

  interpretations: {
    high: {
      direction: 'high',
      severity: 'moderate',
      causes: [
        {
          category: 'Primary (Genetic)',
          causes: [
            'Familial hypercholesterolemia',
            'Familial combined hyperlipidemia',
            'Polygenic hypercholesterolemia',
          ],
          commonality: 'common',
        },
        {
          category: 'Secondary Causes',
          causes: [
            'Diet high in saturated fat',
            'Hypothyroidism',
            'Nephrotic syndrome',
            'Cholestasis/biliary obstruction',
            'Medications (thiazides, cyclosporine)',
          ],
          commonality: 'common',
        },
        {
          category: 'Other',
          causes: [
            'Diabetes mellitus',
            'Obesity',
            'Pregnancy',
          ],
          commonality: 'common',
        },
      ],
      associatedFindings: [
        'Check LDL for primary driver',
        'Xanthomas suggest familial hypercholesterolemia',
        'Premature CAD in family',
      ],
      workupSuggestions: [
        'Full lipid panel with LDL, HDL, triglycerides',
        'TSH to rule out hypothyroidism',
        'Fasting glucose/HbA1c',
        'Liver and kidney function tests',
        'Family history assessment',
      ],
      clinicalPearls: [
        'Total cholesterol alone is insufficient for risk assessment',
        'LDL is primary target for treatment',
        'Very high levels (>300) suggest genetic etiology',
      ],
    },
    low: {
      direction: 'low',
      severity: 'mild',
      causes: [
        {
          category: 'Decreased Production',
          causes: [
            'Malnutrition/malabsorption',
            'Liver disease (cirrhosis)',
            'Hyperthyroidism',
            'Abetalipoproteinemia (rare)',
          ],
          commonality: 'uncommon',
        },
        {
          category: 'Other',
          causes: [
            'Sepsis/critical illness',
            'Malignancy',
            'Statin therapy (therapeutic)',
          ],
          commonality: 'uncommon',
        },
      ],
      associatedFindings: [],
      workupSuggestions: [
        'Evaluate nutritional status',
        'Thyroid function tests',
        'Liver function assessment',
      ],
      clinicalPearls: ['Very low cholesterol may indicate serious underlying illness'],
    },
  },

  specimen: {
    specimenType: 'serum',
    tubeType: 'Red top or gold top (SST)',
    volume: '3 mL',
    fastingRequired: false,
    fastingDuration: 'Fasting preferred for full lipid panel accuracy',
    stability: {
      roomTemp: '7 days',
      refrigerated: '7 days',
    },
    interferences: ['Acute illness can lower cholesterol'],
  },

  relatedLabs: ['lab-ldl', 'lab-hdl', 'lab-triglycerides', 'lab-vldl'],

  organAssociations: [
    { organId: 'liver', organName: 'Liver', relationship: 'Cholesterol synthesis' },
    { organId: 'heart', organName: 'Heart', relationship: 'Cardiovascular risk factor' },
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Total cholesterol measures the total amount of cholesterol in your blood, which helps assess heart disease risk.',
      explanation: `Cholesterol is a waxy substance in your blood. Your body needs some cholesterol, but too much can build up in your arteries and increase your risk of heart disease.

**Cholesterol levels:**
- Less than 200 mg/dL: Healthy
- 200-239 mg/dL: Borderline high
- 240 mg/dL or higher: High

**Why cholesterol matters:**
- High cholesterol can lead to blocked arteries
- This increases risk of heart attack and stroke
- Lifestyle changes and medications can help lower it

Your doctor will look at other cholesterol tests (like LDL and HDL) to get the full picture.`,
      keyTerms: [
        { term: 'cholesterol', definition: 'A waxy, fat-like substance that your body needs but can be harmful in excess' },
        { term: 'arteries', definition: 'Blood vessels that carry blood from your heart to the rest of your body' },
      ],
      analogies: [
        'Cholesterol is like plaque on your teeth - a little is normal, but too much buildup causes problems.',
      ],
    },
    2: {
      level: 2,
      summary: 'Total cholesterol is the sum of LDL, HDL, and VLDL cholesterol. It provides an initial assessment of cardiovascular risk but LDL is the primary treatment target.',
      explanation: `## Total Cholesterol Overview

**Calculation:**
Total Cholesterol = LDL + HDL + VLDL

**Classification (mg/dL):**
| Level | Category |
|-------|----------|
| <200 | Desirable |
| 200-239 | Borderline high |
| >=240 | High |

## Components

**LDL (Low-Density Lipoprotein):**
- "Bad" cholesterol
- Deposits in artery walls
- Primary target for treatment

**HDL (High-Density Lipoprotein):**
- "Good" cholesterol
- Removes cholesterol from arteries
- Higher is better

**VLDL (Very Low-Density Lipoprotein):**
- Carries triglycerides
- Calculated as triglycerides/5

## Risk Assessment
Total cholesterol alone is insufficient. Need:
- LDL level
- HDL level
- Triglycerides
- Other risk factors (diabetes, smoking, blood pressure, family history)`,
      keyTerms: [
        { term: 'LDL', definition: 'Low-density lipoprotein - "bad" cholesterol that deposits in arteries' },
        { term: 'HDL', definition: 'High-density lipoprotein - "good" cholesterol that removes excess from arteries' },
        { term: 'VLDL', definition: 'Very low-density lipoprotein - carries triglycerides' },
      ],
      analogies: [
        'LDL is like a delivery truck dropping off packages (cholesterol) in your arteries, while HDL is like a garbage truck picking them up.',
      ],
    },
    3: {
      level: 3,
      summary: 'Total cholesterol must be interpreted with the complete lipid profile. Non-HDL cholesterol and LDL are more predictive of cardiovascular risk.',
      explanation: `## Systematic Lipid Interpretation

### Non-HDL Cholesterol
**Calculation:** Non-HDL = Total Cholesterol - HDL

**Advantages:**
- Captures all atherogenic lipoproteins
- Includes VLDL and remnant particles
- Can be calculated without fasting
- Secondary target after LDL

**Goals:**
| Risk Category | LDL Goal | Non-HDL Goal |
|---------------|----------|--------------|
| Very High Risk | <70 | <100 |
| High Risk | <100 | <130 |
| Moderate Risk | <130 | <160 |

### When Total Cholesterol is Misleading

**High Total but Low Risk:**
- Elevated HDL (often genetic)
- Example: TC 260 with HDL 100, LDL 120

**Normal Total but High Risk:**
- Low HDL with moderate LDL
- High triglycerides
- Small dense LDL pattern

### Secondary Causes Workup
| Condition | Pattern |
|-----------|---------|
| Hypothyroidism | ↑LDL, ↑TC |
| Nephrotic syndrome | ↑LDL, ↑TC, ↑TG |
| Cholestasis | Markedly ↑TC |
| Diabetes | ↑TG, ↓HDL, small dense LDL |`,
      keyTerms: [
        { term: 'non-HDL cholesterol', definition: 'Total cholesterol minus HDL; represents all atherogenic particles' },
        { term: 'atherogenic', definition: 'Capable of causing atherosclerosis (artery plaque buildup)' },
      ],
      clinicalNotes: 'Non-HDL cholesterol is a better predictor of cardiovascular risk than total cholesterol and does not require fasting.',
    },
    4: {
      level: 4,
      summary: 'Advanced lipid interpretation incorporates lipoprotein subfractions, apolipoprotein measurements, and genetic considerations.',
      explanation: `## Advanced Lipid Assessment

### Beyond Standard Panel

**ApoB (Apolipoprotein B):**
- One apoB per atherogenic particle
- Direct measure of particle number
- Better predictor than LDL-C
- Goal: <90 mg/dL (high risk: <80)

**Lp(a) (Lipoprotein a):**
- Genetically determined
- Independent CV risk factor
- No effective lifestyle modification
- >50 mg/dL increases risk
- PCSK9 inhibitors can lower

**LDL Particle Size:**
- Small dense LDL more atherogenic
- Pattern B (small, dense) higher risk
- NMR lipoprofile provides particle data

### Genetic Lipid Disorders

**Familial Hypercholesterolemia (FH):**
| Feature | Heterozygous | Homozygous |
|---------|--------------|------------|
| LDL-C | 190-400 | >500 |
| CAD onset | 40-50s | Childhood |
| Physical signs | Tendon xanthomas | Xanthomas, corneal arcus |
| Treatment | High-dose statin + ezetimibe | PCSK9i, LDL apheresis |

**Diagnosis (Dutch Lipid Criteria):**
- Points for LDL levels, family history, physical findings, genetic testing
- Score >8: Definite FH

### Statin Benefit Groups (ACC/AHA)
1. Clinical ASCVD
2. LDL >=190 mg/dL
3. Diabetes age 40-75 with LDL 70-189
4. 10-year ASCVD risk >=7.5% (or consider if 5-7.5%)`,
      keyTerms: [
        { term: 'apoB', definition: 'Apolipoprotein B - protein on atherogenic lipoproteins; measures particle number' },
        { term: 'Lp(a)', definition: 'Lipoprotein(a) - genetically determined independent cardiovascular risk factor' },
        { term: 'familial hypercholesterolemia', definition: 'Genetic disorder causing very high LDL and early heart disease' },
      ],
      clinicalNotes: 'Consider Lp(a) testing in patients with premature ASCVD, family history of premature ASCVD, or if LDL does not fully explain cardiovascular risk.',
    },
    5: {
      level: 5,
      summary: 'Expert lipid management integrates advanced lipid testing, emerging therapies, and precision medicine approaches.',
      explanation: `## Expert-Level Lipid Interpretation

### Advanced Testing Interpretation

**NMR LipoProfile:**
| Parameter | Significance |
|-----------|--------------|
| LDL-P | Particle number (may differ from LDL-C) |
| Small LDL-P | More atherogenic particles |
| HDL-P | May predict residual risk |
| LP-IR | Insulin resistance score |

**Discordance:**
- LDL-C and LDL-P may not correlate
- When discordant, LDL-P better predicts risk
- More common in metabolic syndrome, diabetes

### Emerging Therapies

**PCSK9 Inhibitors:**
| Agent | Mechanism | LDL Reduction |
|-------|-----------|---------------|
| Evolocumab | mAb | 50-60% |
| Alirocumab | mAb | 50-60% |
| Inclisiran | siRNA | 50% (twice yearly) |

**Bempedoic Acid:**
- ACL inhibitor (upstream of statins)
- For statin intolerance
- 15-20% LDL reduction

**Evinacumab:**
- ANGPTL3 inhibitor
- For homozygous FH
- Reduces LDL, TG, Lp(a)

### Special Populations

**Very High Triglycerides (>500 mg/dL):**
- Pancreatitis risk
- LDL calculation unreliable
- Consider direct LDL measurement
- May need fibrates, omega-3, lifestyle

**Nephrotic Syndrome:**
- Markedly elevated LDL
- Proteinuria-driven
- Treat underlying cause
- Statins for CV protection

**HIV:**
- Dyslipidemia common (disease and treatment)
- Drug interactions with statins
- Consider pitavastatin (fewer interactions)

### Residual Risk

**Despite LDL at Goal:**
- Elevated TG
- Low HDL
- High Lp(a)
- Inflammation (hs-CRP)

**Emerging Targets:**
- TG reduction with icosapent ethyl (EPA)
- Lp(a) lowering (investigational)
- Anti-inflammatory therapy (limited evidence)

### Quality Metrics
- Fasting vs non-fasting: Non-fasting acceptable for screening
- Calculated vs direct LDL: Use direct if TG >400
- Lipid variability: Use average of 2 values for treatment decisions`,
      keyTerms: [
        { term: 'PCSK9 inhibitor', definition: 'Medications that dramatically lower LDL by preventing LDL receptor degradation' },
        { term: 'LDL particle number', definition: 'Count of LDL particles; may be more predictive than LDL-C concentration' },
        { term: 'residual risk', definition: 'Remaining cardiovascular risk after LDL is optimized' },
      ],
      clinicalNotes: 'Expert lipid management recognizes that LDL-C is the primary but not the only treatment target. Lp(a), triglycerides, and inflammation contribute to residual risk.',
    },
  },

  media: [],
  citations: [
    {
      id: 'acc-lipid-guideline',
      type: 'article',
      title: 'ACC/AHA Guideline on the Management of Blood Cholesterol',
      source: 'Journal of the American College of Cardiology',
      authors: ['Grundy SM', 'et al'],
    },
  ],
  crossReferences: [
    { targetId: 'lab-ldl', targetType: 'concept', relationship: 'child' },
    { targetId: 'lab-hdl', targetType: 'concept', relationship: 'child' },
  ],
  tags: {
    systems: ['cardiovascular'],
    topics: ['laboratory', 'cardiology', 'preventive medicine', 'lipidology'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

// =============================================================================
// LDL CHOLESTEROL
// =============================================================================

export const ldlInterpretation: LabInterpretationContent = {
  id: 'lab-ldl',
  type: 'concept',
  name: 'LDL Cholesterol',
  alternateNames: ['LDL-C', 'Low-Density Lipoprotein', 'Bad Cholesterol'],

  labMetadata: {
    loincCode: '13457-7',
    testName: 'LDL Cholesterol',
    commonAbbreviations: ['LDL', 'LDL-C'],
    category: 'lipid',
    panel: 'Lipid Panel',
    orderingFrequency: 'routine',
  },

  referenceRanges: {
    adult: {
      low: 0,
      high: 100,
      unit: 'mg/dL',
      notes: 'Optimal for most adults; lower targets for high-risk patients',
    },
    variations: [
      {
        low: 0,
        high: 70,
        unit: 'mg/dL',
        notes: 'Target for very high risk (established ASCVD)',
      },
    ],
  },

  criticalValues: {
    high: 190,
    unit: 'mg/dL',
    urgency: 'expedited',
    action: 'Evaluate for familial hypercholesterolemia; indicates statin therapy',
    notificationRequired: false,
  },

  interpretations: {
    high: {
      direction: 'high',
      severity: 'moderate',
      causes: [
        {
          category: 'Genetic',
          causes: [
            'Familial hypercholesterolemia',
            'Familial combined hyperlipidemia',
            'Polygenic hypercholesterolemia',
          ],
          commonality: 'common',
        },
        {
          category: 'Secondary',
          causes: [
            'Diet high in saturated/trans fats',
            'Hypothyroidism',
            'Nephrotic syndrome',
            'Obstructive liver disease',
            'Medications (thiazides, beta-blockers, steroids)',
          ],
          commonality: 'common',
        },
      ],
      associatedFindings: [
        'Family history of premature CAD',
        'Xanthomas, xanthelasma',
        'Corneal arcus in young patients',
      ],
      workupSuggestions: [
        'Assess ASCVD risk (10-year calculator)',
        'Screen for secondary causes (TSH, glucose, kidney/liver function)',
        'Family screening if FH suspected',
      ],
      clinicalPearls: [
        'LDL >=190 mg/dL indicates statin therapy regardless of risk score',
        'LDL >160 with 2+ risk factors indicates treatment consideration',
        'Every 39 mg/dL LDL reduction decreases CV events by ~22%',
      ],
    },
  },

  specimen: {
    specimenType: 'serum',
    tubeType: 'Red top or gold top (SST)',
    volume: '3 mL',
    fastingRequired: false,
    fastingDuration: 'Fasting preferred for Friedewald calculation accuracy; direct LDL does not require fasting',
    stability: {
      roomTemp: '7 days',
      refrigerated: '7 days',
    },
    interferences: ['Very high triglycerides (>400 mg/dL) invalidate calculated LDL'],
  },

  relatedLabs: ['lab-total-cholesterol', 'lab-hdl', 'lab-triglycerides', 'lab-apob'],

  organAssociations: [
    { organId: 'heart', organName: 'Heart', relationship: 'Primary atherosclerotic risk factor' },
    { organId: 'liver', organName: 'Liver', relationship: 'LDL receptor clearance' },
  ],

  levels: {
    1: {
      level: 1,
      summary: 'LDL cholesterol is the "bad" cholesterol that can build up in your arteries and increase heart disease risk.',
      explanation: `LDL stands for "Low-Density Lipoprotein." It carries cholesterol through your blood, but too much can stick to the walls of your arteries.

**LDL levels:**
- Less than 100 mg/dL: Optimal
- 100-129 mg/dL: Near optimal
- 130-159 mg/dL: Borderline high
- 160-189 mg/dL: High
- 190 mg/dL or higher: Very high

**Why LDL matters:**
- High LDL leads to plaque buildup in arteries
- This can cause heart attacks and strokes
- Lowering LDL reduces your risk

You can lower LDL through diet, exercise, and medications if needed.`,
      keyTerms: [
        { term: 'LDL', definition: 'Low-density lipoprotein - the "bad" cholesterol that builds up in arteries' },
        { term: 'plaque', definition: 'Fatty deposits that accumulate in artery walls' },
      ],
      analogies: [
        'LDL is like sediment in a pipe - over time, it builds up and can clog your arteries.',
      ],
    },
    2: {
      level: 2,
      summary: 'LDL is the primary target for cardiovascular risk reduction. Treatment goals are based on overall ASCVD risk assessment.',
      explanation: `## LDL Overview

**Measurement Methods:**
- Friedewald calculation: LDL = TC - HDL - (TG/5)
  - Requires fasting, invalid if TG >400
- Direct LDL: Preferred if TG elevated or non-fasting

## Treatment Goals

**ACC/AHA Risk Categories:**
| Risk Category | LDL Goal | Treatment |
|---------------|----------|-----------|
| ASCVD (secondary prevention) | <70 | High-intensity statin |
| LDL >=190 | 50% reduction | High-intensity statin |
| Diabetes 40-75 | <100 | Moderate or high statin |
| 10-yr risk >=7.5% | Variable | Statin indicated |

**Statin Intensity:**
| Intensity | LDL Reduction | Examples |
|-----------|---------------|----------|
| High | >=50% | Atorvastatin 40-80, Rosuvastatin 20-40 |
| Moderate | 30-49% | Atorvastatin 10-20, Simvastatin 20-40 |
| Low | <30% | Simvastatin 10, Pravastatin 10-20 |

## Additional Therapy
- Ezetimibe: Additional 15-20% reduction
- PCSK9 inhibitors: Additional 50-60% reduction
- Add when statin alone insufficient`,
      keyTerms: [
        { term: 'Friedewald equation', definition: 'Formula to calculate LDL from total cholesterol, HDL, and triglycerides' },
        { term: 'ASCVD', definition: 'Atherosclerotic Cardiovascular Disease - includes heart attack, stroke, peripheral artery disease' },
      ],
      analogies: [
        'Statins work like a factory reducing production, while PCSK9 inhibitors work like increasing the number of garbage trucks clearing LDL from blood.',
      ],
    },
    3: {
      level: 3,
      summary: 'LDL management requires risk stratification, understanding of treatment intensification, and recognition of statin intolerance.',
      explanation: `## Systematic LDL Management

### Risk Assessment
**10-Year ASCVD Risk Calculator:**
- Age, sex, race
- Total and HDL cholesterol
- Blood pressure, treatment status
- Diabetes, smoking status

**Risk Enhancers (when decision uncertain):**
- Family history premature ASCVD
- LDL-C >=160 mg/dL persistently
- Metabolic syndrome
- Chronic kidney disease
- Inflammatory conditions (RA, lupus)
- South Asian ancestry
- Lp(a) >=50 mg/dL or >=125 nmol/L

### Treatment Intensification

**When to Add Non-Statin Therapy:**
1. Very high risk + LDL >=70 on max tolerated statin
2. High risk + LDL >=100 on max tolerated statin
3. LDL >=190 not at goal

**Order of Addition:**
1. Ezetimibe (cost-effective, 15-20% reduction)
2. PCSK9 inhibitor (if still not at goal)
3. Consider bempedoic acid for statin intolerant

### Statin Intolerance

**True vs Perceived:**
- Nocebo effect common
- True myopathy rate ~0.1-0.5%
- Rechallenge often successful

**Management:**
1. Rule out other causes (vitamin D, thyroid, drug interactions)
2. Try different statin
3. Try alternate day dosing
4. Use non-statin alternatives`,
      keyTerms: [
        { term: 'risk enhancers', definition: 'Factors that increase ASCVD risk beyond calculated score' },
        { term: 'statin intolerance', definition: 'Inability to tolerate statins, usually due to muscle symptoms' },
      ],
      clinicalNotes: 'Many patients labeled "statin intolerant" can tolerate a different statin or alternate-day dosing. True statin myopathy is rare.',
    },
    4: {
      level: 4,
      summary: 'Advanced LDL management incorporates coronary calcium scoring, advanced lipid testing, and emerging therapies.',
      explanation: `## Advanced LDL Assessment

### Coronary Artery Calcium (CAC) Score
**Role in Borderline Risk:**
| CAC Score | Interpretation | Management |
|-----------|----------------|------------|
| 0 | Very low risk | May defer statin if intermediate risk |
| 1-99 | Low risk | Consider statin |
| 100-299 | Moderate risk | Statin indicated |
| >=300 | High risk | Aggressive treatment |

### Advanced Lipid Testing

**LDL Particle Number (LDL-P):**
- Direct count of LDL particles
- May be elevated despite normal LDL-C
- Better predictor when discordant with LDL-C

**ApoB:**
- One per atherogenic particle
- Represents LDL-P indirectly
- Goal: <90 mg/dL (high risk: <80)

**When to Consider:**
- Metabolic syndrome
- Diabetes
- Family history despite controlled LDL-C
- Premature ASCVD

### Familial Hypercholesterolemia Cascade Screening
**Process:**
1. Identify index case (LDL >=190 + clinical criteria)
2. Genetic testing if available
3. Screen first-degree relatives
4. Early treatment in affected children (from age 8-10)

### Residual Risk Management
**After LDL Optimization:**
- Elevated TG: Consider icosapent ethyl if TG 150-500
- Low HDL: No proven pharmacologic therapy
- Elevated Lp(a): Limit other risk factors; trials ongoing`,
      keyTerms: [
        { term: 'CAC score', definition: 'Coronary artery calcium - CT scan measure of atherosclerotic burden' },
        { term: 'cascade screening', definition: 'Testing family members of affected patients for genetic conditions' },
        { term: 'ApoB', definition: 'Apolipoprotein B - marker of atherogenic particle number' },
      ],
      clinicalNotes: 'A CAC score of 0 in intermediate-risk patients may justify deferring statin therapy with lifestyle intervention and monitoring.',
    },
    5: {
      level: 5,
      summary: 'Expert LDL management integrates precision approaches, novel therapeutics, and understanding of LDL measurement complexities.',
      explanation: `## Expert-Level LDL Management

### LDL Measurement Considerations

**Calculated LDL (Friedewald):**
- LDL = TC - HDL - (TG/5)
- Inaccurate when TG >400 or <100
- Overestimates at very low LDL

**Martin-Hopkins Method:**
- More accurate at low LDL and varying TG
- Uses adjustable TG:VLDL ratio
- Preferred in some labs

**Direct LDL:**
- Homogeneous assays
- Can be used non-fasting
- Less affected by TG
- May differ from calculated

### Novel Therapeutics

**Inclisiran:**
- siRNA targeting PCSK9 synthesis
- Twice-yearly dosing
- 50% LDL reduction
- Administered in clinic

**Bempedoic Acid:**
- ACL inhibitor
- Works upstream of statins
- 15-20% LDL reduction
- Does not cause myopathy
- Can be combined with statin

**Evinacumab:**
- ANGPTL3 inhibitor
- For homozygous FH
- Reduces LDL independent of LDL receptor

### LDL Apheresis
**Indications:**
- Homozygous FH
- Severe heterozygous FH refractory to medications
- Functional LDL-C >300 or with ASCVD >200

**Process:**
- Removes LDL particles directly
- Every 1-2 weeks
- 50-70% acute reduction

### Clinical Trial Insights

**PCSK9 Trials (FOURIER, ODYSSEY):**
- ~50-60% LDL reduction
- 15% relative risk reduction in CV events
- Safe LDL levels achieved (<25 mg/dL)
- No lower threshold for benefit identified

**LDL Hypothesis Confirmed:**
- Genetic and pharmacologic evidence
- Lower is better for high-risk patients
- "Lower for longer" principle

### Emerging Areas
**Lp(a) Lowering:**
- Pelacarsen (ASO) in trials
- 80% Lp(a) reduction
- May address residual risk

**Gene Therapy:**
- CRISPR approaches for PCSK9
- ANGPTL3 silencing
- Potentially one-time treatment`,
      keyTerms: [
        { term: 'inclisiran', definition: 'siRNA that reduces PCSK9 synthesis, given twice yearly' },
        { term: 'LDL apheresis', definition: 'Procedure to physically remove LDL particles from blood' },
        { term: 'ANGPTL3', definition: 'Protein that regulates lipid metabolism; target for new therapies' },
      ],
      clinicalNotes: 'The "lower is better" principle for LDL is well-established. Clinical trials have not identified a lower limit of LDL below which benefit ceases or harm occurs.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'lab-total-cholesterol', targetType: 'concept', relationship: 'parent' },
  ],
  tags: {
    systems: ['cardiovascular'],
    topics: ['laboratory', 'cardiology', 'preventive medicine'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

// =============================================================================
// HDL CHOLESTEROL
// =============================================================================

export const hdlInterpretation: LabInterpretationContent = {
  id: 'lab-hdl',
  type: 'concept',
  name: 'HDL Cholesterol',
  alternateNames: ['HDL-C', 'High-Density Lipoprotein', 'Good Cholesterol'],

  labMetadata: {
    loincCode: '2085-9',
    testName: 'HDL Cholesterol',
    commonAbbreviations: ['HDL', 'HDL-C'],
    category: 'lipid',
    panel: 'Lipid Panel',
    orderingFrequency: 'routine',
  },

  referenceRanges: {
    adult: {
      low: 40,
      high: 999,
      unit: 'mg/dL',
      notes: 'Higher is generally better; <40 mg/dL is low',
    },
    variations: [
      {
        low: 50,
        high: 999,
        unit: 'mg/dL',
        demographic: { sex: 'female' },
        notes: 'Women typically have higher HDL; <50 considered low',
      },
    ],
  },

  criticalValues: {
    low: 20,
    unit: 'mg/dL',
    urgency: 'expedited',
    action: 'Evaluate for genetic disorders, severe malnutrition, or secondary causes',
    notificationRequired: false,
  },

  interpretations: {
    low: {
      direction: 'low',
      severity: 'moderate',
      causes: [
        {
          category: 'Lifestyle',
          causes: [
            'Sedentary lifestyle',
            'Obesity',
            'Smoking',
            'High carbohydrate diet',
          ],
          commonality: 'common',
        },
        {
          category: 'Secondary',
          causes: [
            'Type 2 diabetes/metabolic syndrome',
            'Chronic kidney disease',
            'Medications (beta-blockers, anabolic steroids, progestins)',
            'Hypertriglyceridemia',
          ],
          commonality: 'common',
        },
        {
          category: 'Genetic',
          causes: [
            'Familial hypoalphalipoproteinemia',
            'Tangier disease (extremely rare)',
            'LCAT deficiency',
          ],
          commonality: 'rare',
        },
      ],
      associatedFindings: [
        'Often associated with high triglycerides',
        'Component of metabolic syndrome',
        'May see elevated small dense LDL',
      ],
      workupSuggestions: [
        'Assess for metabolic syndrome',
        'Check fasting glucose/HbA1c',
        'Evaluate lifestyle factors',
        'Review medications',
      ],
      clinicalPearls: [
        'Low HDL is a risk factor but raising it pharmacologically has not shown benefit',
        'Focus on lifestyle (exercise, weight loss, smoking cessation)',
        'Low HDL often clusters with other metabolic abnormalities',
      ],
    },
    high: {
      direction: 'high',
      severity: 'mild',
      causes: [
        {
          category: 'Lifestyle',
          causes: [
            'Regular aerobic exercise',
            'Moderate alcohol consumption',
          ],
          commonality: 'common',
        },
        {
          category: 'Genetic',
          causes: [
            'Familial hyperalphalipoproteinemia',
            'CETP deficiency',
          ],
          commonality: 'uncommon',
        },
      ],
      associatedFindings: ['Generally associated with lower CV risk'],
      workupSuggestions: ['Usually no workup needed'],
      clinicalPearls: [
        'Very high HDL (>80-100) may not provide additional protection',
        'CETP deficiency causes very high HDL but unclear clinical benefit',
      ],
    },
  },

  specimen: {
    specimenType: 'serum',
    tubeType: 'Red top or gold top (SST)',
    volume: '3 mL',
    fastingRequired: false,
    stability: {
      roomTemp: '7 days',
      refrigerated: '7 days',
    },
    interferences: [],
  },

  relatedLabs: ['lab-total-cholesterol', 'lab-ldl', 'lab-triglycerides'],

  organAssociations: [
    { organId: 'heart', organName: 'Heart', relationship: 'Cardioprotective lipid fraction' },
    { organId: 'liver', organName: 'Liver', relationship: 'HDL synthesis and metabolism' },
  ],

  levels: {
    1: {
      level: 1,
      summary: 'HDL is the "good" cholesterol that helps remove excess cholesterol from your arteries.',
      explanation: `HDL stands for "High-Density Lipoprotein." Unlike LDL (bad cholesterol), HDL helps clean up excess cholesterol and takes it back to your liver.

**HDL levels:**
- Less than 40 mg/dL (men) or 50 mg/dL (women): Low - increases heart disease risk
- 60 mg/dL or higher: High - helps protect against heart disease

**How to raise HDL:**
- Exercise regularly
- Maintain healthy weight
- Don't smoke
- Eat healthy fats (olive oil, nuts, fish)

Higher HDL is generally better for your heart health.`,
      keyTerms: [
        { term: 'HDL', definition: 'High-density lipoprotein - "good" cholesterol that removes excess from arteries' },
      ],
      analogies: [
        'HDL is like a cleanup crew that sweeps extra cholesterol out of your arteries and back to the liver for disposal.',
      ],
    },
    2: {
      level: 2,
      summary: 'HDL participates in reverse cholesterol transport. Low HDL is a cardiovascular risk factor, but pharmacologic HDL raising has not shown benefit.',
      explanation: `## HDL Overview

**Function:**
- Reverse cholesterol transport
- Removes cholesterol from arterial walls
- Returns to liver for excretion

**Risk Thresholds:**
| Level | Men | Women | Risk |
|-------|-----|-------|------|
| Low | <40 | <50 | Increased CV risk |
| Optimal | >=60 | >=60 | Protective |

## Metabolic Syndrome Criteria (3 of 5):
- Waist: >40" (men), >35" (women)
- TG >=150 mg/dL
- HDL <40 (men), <50 (women)
- BP >=130/85 or on treatment
- Fasting glucose >=100 or on treatment

## Lifestyle vs Pharmacologic

**Lifestyle (raises HDL 5-10%):**
- Exercise (most effective)
- Weight loss
- Smoking cessation
- Moderate alcohol

**Pharmacologic:**
| Drug | HDL Effect | CV Benefit |
|------|------------|------------|
| Niacin | ↑15-35% | No proven benefit |
| Fibrates | ↑10-20% | No isolated HDL benefit |
| CETP inhibitors | ↑↑ | Trials failed |`,
      keyTerms: [
        { term: 'reverse cholesterol transport', definition: 'Process by which HDL removes cholesterol from tissues and returns it to liver' },
        { term: 'metabolic syndrome', definition: 'Cluster of conditions including low HDL, high TG, obesity, high BP, and elevated glucose' },
      ],
      analogies: [
        'HDL is like a recycling truck - it picks up excess cholesterol and brings it back to the liver for processing.',
      ],
    },
    3: {
      level: 3,
      summary: 'HDL functionality may be more important than HDL quantity. Focus remains on LDL lowering rather than HDL raising for CV risk reduction.',
      explanation: `## Advanced HDL Concepts

### HDL Function vs Quantity
**Why HDL Raising Failed:**
- Niacin raised HDL but no CV benefit (AIM-HIGH, HPS2-THRIVE)
- CETP inhibitors raised HDL dramatically but failed (torcetrapib, dalcetrapib)
- HDL function may matter more than level

**HDL Dysfunction:**
- Inflammatory states impair HDL function
- Diabetes, CKD, autoimmune disease
- "Dysfunctional HDL" may be pro-inflammatory

### Clinical Approach to Low HDL

**Step 1: Address Secondary Causes**
- Optimize diabetes control
- Treat hypertriglyceridemia
- Stop offending medications if possible
- Address obesity

**Step 2: Intensive Lifestyle**
- Aerobic exercise 30+ minutes most days
- Mediterranean-style diet
- Weight loss if obese
- Smoking cessation

**Step 3: Focus on LDL**
- LDL lowering is proven to reduce events
- Statins have modest HDL-raising effect
- PCSK9 inhibitors raise HDL ~5-10%

### Special Considerations

**Very Low HDL (<20 mg/dL):**
- Consider rare genetic disorders
- Tangier disease: Orange tonsils, neuropathy
- LCAT deficiency: Corneal opacities, anemia, CKD

**Very High HDL (>100 mg/dL):**
- May not be additionally protective
- Some mutations (CETP) cause very high HDL
- Rarely, associated with CV risk (dysfunctional HDL)`,
      keyTerms: [
        { term: 'HDL functionality', definition: 'The ability of HDL to perform reverse cholesterol transport effectively' },
        { term: 'dysfunctional HDL', definition: 'HDL that has impaired function or paradoxically promotes inflammation' },
      ],
      clinicalNotes: 'Do not use niacin or fibrates specifically to raise HDL for CV risk reduction. Focus on LDL lowering and lifestyle modification.',
    },
    4: {
      level: 4,
      summary: 'Emerging HDL research includes particle functionality assays, HDL proteomics, and understanding of HDL heterogeneity.',
      explanation: `## Advanced HDL Assessment

### HDL Subfractions
**HDL2 vs HDL3:**
| Fraction | Size | Characteristics |
|----------|------|-----------------|
| HDL2 | Larger | More cholesterol-rich |
| HDL3 | Smaller | More protein-rich |

**Clinical Utility:**
- Controversial whether subfraction matters
- Not routinely measured
- Research area

### HDL Functionality Testing

**Cholesterol Efflux Capacity:**
- Measures HDL ability to accept cholesterol
- Associated with CV risk independent of HDL-C
- Research use only currently

**Other Functional Assays:**
- Anti-inflammatory capacity
- Antioxidant capacity
- Endothelial protection

### HDL in Specific Diseases

**Chronic Kidney Disease:**
- HDL often low
- HDL may be dysfunctional
- Increased CV risk despite HDL level

**Diabetes:**
- Low HDL common
- Glycation impairs function
- Part of atherogenic dyslipidemia

**Autoimmune Disease:**
- Inflammation impairs HDL function
- RA, lupus associated with dysfunctional HDL
- HDL level may not reflect protection

### Emerging Research

**HDL Proteomics:**
- HDL carries >80 proteins
- Protein cargo affects function
- May identify protective vs harmful HDL

**Therapeutic Approaches:**
- CETP inhibitors: Mixed results
- Anacetrapib: Modest benefit but not pursued
- HDL mimetics (reconstituted HDL): Early trials
- ApoA-I infusion: Limited data`,
      keyTerms: [
        { term: 'cholesterol efflux capacity', definition: 'Measure of HDL ability to accept cholesterol from cells' },
        { term: 'HDL proteome', definition: 'The complete set of proteins associated with HDL particles' },
      ],
      clinicalNotes: 'Standard HDL-C measurement does not capture HDL functionality. Functional assays are research tools not yet ready for clinical use.',
    },
    5: {
      level: 5,
      summary: 'Expert HDL interpretation recognizes the complexity of HDL biology and the current gap between epidemiologic associations and therapeutic benefit.',
      explanation: `## Expert-Level HDL Interpretation

### The HDL Paradox
**Epidemiology vs Intervention:**
- Epidemiology: Low HDL strongly predicts CV events
- Intervention: Raising HDL pharmacologically does not reduce events
- Conclusion: HDL may be a marker, not necessarily a causal factor

**Mendelian Randomization Studies:**
- Genetic variants affecting HDL do not consistently affect CV risk
- Supports HDL as marker rather than mediator
- LDL genetic variants DO affect CV risk (causal)

### Advanced Lipid Testing

**NMR HDL Measurements:**
| Parameter | Significance |
|-----------|--------------|
| HDL-P | Total HDL particle number |
| Large HDL-P | Larger, cholesterol-rich particles |
| Small HDL-P | Smaller particles |

**Clinical Utility:**
- Some data suggest HDL-P may be better marker than HDL-C
- Not routinely used clinically
- Research ongoing

### Residual Risk and HDL

**After LDL Optimization:**
- Low HDL remains associated with residual risk
- But no HDL-targeted therapy proven
- Address with lifestyle, treat other factors

**Alternative Targets:**
- Triglyceride-rich remnants
- Lp(a)
- Inflammation (hs-CRP)

### Special Populations

**Post-ACS:**
- Very low HDL associated with poor prognosis
- No specific HDL-directed therapy recommended
- Focus on high-intensity statin

**Heart Failure:**
- Low HDL associated with worse outcomes
- May reflect disease severity rather than cause
- No proven therapy

### Current Guidelines
**ACC/AHA Position:**
- Low HDL is risk marker
- No pharmacologic therapy for isolated low HDL
- Lifestyle modification recommended
- Focus remains on LDL as therapeutic target

### Future Directions
**Research Areas:**
- HDL functional enhancement
- Gene therapy for apoA-I
- HDL mimetics
- Better risk stratification with functional assays`,
      keyTerms: [
        { term: 'Mendelian randomization', definition: 'Genetic epidemiology method to assess causality of risk factors' },
        { term: 'residual risk', definition: 'Cardiovascular risk remaining after LDL is optimized' },
      ],
      clinicalNotes: 'Expert interpretation recognizes that HDL is a complex particle. Low HDL is a risk marker, but raising HDL levels has not translated into clinical benefit. Focus on proven interventions: LDL lowering and lifestyle modification.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['cardiovascular'],
    topics: ['laboratory', 'cardiology', 'preventive medicine'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

// =============================================================================
// TRIGLYCERIDES
// =============================================================================

export const triglyceridesInterpretation: LabInterpretationContent = {
  id: 'lab-triglycerides',
  type: 'concept',
  name: 'Triglycerides',
  alternateNames: ['TG', 'Triacylglycerol'],

  labMetadata: {
    loincCode: '2571-8',
    testName: 'Triglycerides',
    commonAbbreviations: ['TG', 'Trig'],
    category: 'lipid',
    panel: 'Lipid Panel',
    orderingFrequency: 'routine',
  },

  referenceRanges: {
    adult: {
      low: 0,
      high: 150,
      unit: 'mg/dL',
      notes: 'Normal fasting level',
    },
    variations: [
      {
        low: 150,
        high: 199,
        unit: 'mg/dL',
        notes: 'Borderline high',
      },
      {
        low: 200,
        high: 499,
        unit: 'mg/dL',
        notes: 'High',
      },
      {
        low: 500,
        high: 10000,
        unit: 'mg/dL',
        notes: 'Very high - pancreatitis risk',
      },
    ],
  },

  criticalValues: {
    high: 500,
    unit: 'mg/dL',
    urgency: 'urgent',
    action: 'Pancreatitis risk; evaluate for secondary causes; consider urgent TG lowering',
    notificationRequired: true,
  },

  interpretations: {
    high: {
      direction: 'high',
      severity: 'moderate',
      causes: [
        {
          category: 'Lifestyle/Diet',
          causes: [
            'High carbohydrate diet',
            'Excess alcohol',
            'Obesity',
            'Sedentary lifestyle',
          ],
          commonality: 'common',
        },
        {
          category: 'Secondary Medical',
          causes: [
            'Diabetes mellitus (uncontrolled)',
            'Hypothyroidism',
            'Chronic kidney disease/nephrotic syndrome',
            'Medications (steroids, estrogens, beta-blockers, retinoids)',
          ],
          commonality: 'common',
        },
        {
          category: 'Genetic',
          causes: [
            'Familial hypertriglyceridemia',
            'Familial combined hyperlipidemia',
            'Lipoprotein lipase deficiency (rare)',
            'Familial chylomicronemia syndrome',
          ],
          commonality: 'uncommon',
        },
      ],
      associatedFindings: [
        'Low HDL (inverse relationship)',
        'Small dense LDL particles',
        'Part of metabolic syndrome',
        'Eruptive xanthomas if very high',
      ],
      workupSuggestions: [
        'Fasting glucose/HbA1c',
        'TSH',
        'Renal and liver function',
        'Review medications',
        'Evaluate for pancreatitis if >500',
      ],
      clinicalPearls: [
        'TG >500 mg/dL increases pancreatitis risk',
        'TG >400 makes LDL calculation unreliable',
        'Fasting required for accurate measurement',
        'TG rise after eating is normal; very high non-fasting TG still abnormal',
      ],
    },
  },

  specimen: {
    specimenType: 'serum',
    tubeType: 'Red top or gold top (SST)',
    volume: '3 mL',
    fastingRequired: true,
    fastingDuration: '9-12 hours',
    stability: {
      roomTemp: '7 days',
      refrigerated: '7 days',
    },
    interferences: ['Recent food intake elevates TG significantly'],
  },

  relatedLabs: ['lab-total-cholesterol', 'lab-ldl', 'lab-hdl', 'lab-vldl'],

  organAssociations: [
    { organId: 'liver', organName: 'Liver', relationship: 'VLDL synthesis' },
    { organId: 'pancreas', organName: 'Pancreas', relationship: 'Pancreatitis risk at high levels' },
    { organId: 'heart', organName: 'Heart', relationship: 'Cardiovascular risk factor' },
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Triglycerides are a type of fat in your blood that comes from the food you eat and provides energy for your body.',
      explanation: `Triglycerides are the most common type of fat in your body. When you eat more calories than you need, your body stores them as triglycerides.

**Triglyceride levels:**
- Less than 150 mg/dL: Normal
- 150-199 mg/dL: Borderline high
- 200-499 mg/dL: High
- 500 mg/dL or higher: Very high

**Why high triglycerides matter:**
- Increases risk of heart disease
- Very high levels can cause pancreatitis (painful inflammation of the pancreas)

**How to lower triglycerides:**
- Limit sugar and refined carbohydrates
- Limit alcohol
- Lose weight if overweight
- Exercise regularly
- Eat fish with omega-3 fatty acids`,
      keyTerms: [
        { term: 'triglycerides', definition: 'A type of fat found in your blood that stores unused calories' },
        { term: 'pancreatitis', definition: 'Inflammation of the pancreas that can be very painful' },
      ],
      analogies: [
        'Triglycerides are like your body\'s savings account for energy - extra calories get deposited as fat for later use.',
      ],
    },
    2: {
      level: 2,
      summary: 'Triglycerides are carried in VLDL and chylomicrons. Elevated levels are associated with cardiovascular risk and, when very high, pancreatitis.',
      explanation: `## Triglyceride Overview

**Classification (mg/dL):**
| Level | Category | Significance |
|-------|----------|--------------|
| <150 | Normal | Optimal |
| 150-199 | Borderline | Lifestyle modification |
| 200-499 | High | Treatment consideration |
| >=500 | Very high | Pancreatitis risk |

## Metabolism
- Dietary fat → Chylomicrons → Cleared by lipoprotein lipase
- Liver VLDL → Carries endogenous TG → Cleared by lipoprotein lipase
- Elevated TG often reflects impaired clearance or overproduction

## Clinical Significance

**Cardiovascular Risk:**
- TG elevation associated with increased CV risk
- Often clusters with low HDL, small dense LDL
- "Atherogenic dyslipidemia"

**Pancreatitis Risk:**
| TG Level | Risk |
|----------|------|
| <500 | Minimal |
| 500-1000 | Low to moderate |
| >1000 | Significant |
| >2000 | High |

## Treatment Approach
**Lifestyle (primary intervention):**
- Dietary modification
- Limit alcohol
- Weight loss
- Exercise

**Pharmacologic:**
- Statins (modest TG lowering 15-30%)
- Fibrates (for TG >500 to prevent pancreatitis)
- Omega-3 (prescription icosapent ethyl for CV benefit)`,
      keyTerms: [
        { term: 'chylomicrons', definition: 'Large lipoproteins that carry dietary fat from intestine' },
        { term: 'VLDL', definition: 'Very low-density lipoprotein - carries triglycerides from liver' },
        { term: 'lipoprotein lipase', definition: 'Enzyme that breaks down triglycerides in circulation' },
      ],
      analogies: [
        'Chylomicrons and VLDL are like delivery trucks carrying fat - chylomicrons deliver from the gut, VLDL from the liver.',
      ],
    },
    3: {
      level: 3,
      summary: 'Triglyceride management focuses on pancreatitis prevention at very high levels and CV risk reduction at moderate elevations.',
      explanation: `## Systematic Triglyceride Management

### Evaluation Algorithm
1. Confirm fasting (9-12 hours)
2. Assess for secondary causes
3. Calculate non-HDL (if TG <400) or use direct LDL
4. Evaluate pancreatitis risk
5. Determine treatment strategy

### Secondary Causes Workup
| Condition | Test |
|-----------|------|
| Diabetes | HbA1c, fasting glucose |
| Hypothyroidism | TSH |
| Renal disease | Creatinine, urine protein |
| Liver disease | LFTs |
| Medications | Review list |

### Treatment by TG Level

**TG 150-499 (Moderate Elevation):**
- Lifestyle modification primary
- Address secondary causes
- Optimize LDL (statin)
- Consider omega-3 if persistent

**TG 500-999 (High - Pancreatitis Risk):**
- Immediate dietary modification
- Very low fat diet (<10-15% calories)
- Consider fibrate
- Optimize glycemic control if diabetic

**TG >=1000 (Very High):**
- Urgent treatment to prevent pancreatitis
- Very low fat diet (10% calories)
- Fibrate therapy
- May need hospitalization if symptomatic
- Consider genetic evaluation

### REDUCE-IT Trial Implications
**Icosapent Ethyl (Vascepa):**
- Pure EPA omega-3
- Patients on statin with TG 150-499 and established CV disease or diabetes
- 25% relative risk reduction in CV events
- Dose: 4 grams daily`,
      keyTerms: [
        { term: 'fibrate', definition: 'Medication class that primarily lowers triglycerides' },
        { term: 'icosapent ethyl', definition: 'Purified EPA omega-3 with proven CV benefit' },
      ],
      clinicalNotes: 'For TG >500 mg/dL, the primary goal is pancreatitis prevention. For TG 150-500 with ASCVD or diabetes, consider icosapent ethyl for CV benefit.',
    },
    4: {
      level: 4,
      summary: 'Advanced triglyceride interpretation includes understanding remnant cholesterol, genetic disorders, and specialized therapies.',
      explanation: `## Advanced Triglyceride Concepts

### Remnant Cholesterol
**Definition:** Cholesterol in TG-rich lipoproteins (VLDL, IDL, chylomicron remnants)

**Calculation:** Remnant-C = TC - LDL - HDL

**Significance:**
- Emerging CV risk factor
- May explain some residual risk
- Captured in non-HDL cholesterol

### Severe Hypertriglyceridemia Evaluation

**Genetic Disorders:**
| Disorder | Inheritance | TG Level | Features |
|----------|-------------|----------|----------|
| Familial chylomicronemia syndrome | AR | >1000 | Lipemia retinalis, eruptive xanthomas |
| Lipoprotein lipase deficiency | AR | Severe | Early onset pancreatitis |
| Familial hypertriglyceridemia | AD | Moderate-severe | Common, often >500 |

**Evaluation:**
- Lipoprotein electrophoresis
- Genetic testing available
- LPL activity assay (research)

### Specialized Therapies

**Volanesorsen:**
- Antisense oligonucleotide
- Targets apoC-III
- For familial chylomicronemia syndrome
- Marked TG reduction (>70%)

**Evinacumab:**
- ANGPTL3 inhibitor
- Lowers TG, LDL
- For severe, refractory cases

**LPL Gene Therapy:**
- Alipogene tiparvovec (withdrawn)
- Proof of concept for gene therapy

### TG in Acute Pancreatitis

**Management of TG-Induced Pancreatitis:**
1. NPO, IV fluids
2. Insulin infusion (activates lipoprotein lipase)
3. Consider plasmapheresis if TG remains >1000 and severe pancreatitis
4. Resume diet with very low fat
5. Long-term fibrate therapy`,
      keyTerms: [
        { term: 'remnant cholesterol', definition: 'Cholesterol in VLDL, IDL, and chylomicron remnants' },
        { term: 'familial chylomicronemia syndrome', definition: 'Rare genetic disorder with extreme hypertriglyceridemia' },
        { term: 'plasmapheresis', definition: 'Procedure to rapidly remove triglycerides from blood' },
      ],
      clinicalNotes: 'In TG-induced pancreatitis, insulin infusion can rapidly lower triglycerides by activating lipoprotein lipase. Plasmapheresis is reserved for severe, refractory cases.',
    },
    5: {
      level: 5,
      summary: 'Expert triglyceride management integrates understanding of lipoprotein metabolism, precision medicine approaches, and novel therapeutic targets.',
      explanation: `## Expert-Level Triglyceride Interpretation

### Lipoprotein Metabolism Deep Dive

**Key Regulatory Proteins:**
| Protein | Function | Therapeutic Target |
|---------|----------|-------------------|
| LPL | TG hydrolysis | Gene therapy (historical) |
| ApoC-III | LPL inhibitor | Volanesorsen |
| ApoC-II | LPL activator | - |
| ANGPTL3 | LPL/EL inhibitor | Evinacumab |
| ANGPTL4 | LPL inhibitor | - |

### Non-Fasting vs Fasting TG

**Paradigm Shift:**
- Non-fasting TG may be better CV predictor
- Postprandial state represents most of day
- European guidelines accept non-fasting

**Interpretation:**
| Non-fasting TG | Significance |
|----------------|--------------|
| <175 mg/dL | Normal |
| 175-499 | Elevated |
| >=500 | Evaluate fasting |

### Omega-3 Trials Analysis

**EPA vs EPA+DHA:**
| Trial | Product | CV Outcome |
|-------|---------|------------|
| REDUCE-IT | Pure EPA (icosapent ethyl) | 25% reduction |
| STRENGTH | EPA+DHA | No benefit |
| Difference may be due to mineral oil placebo, patient selection, or EPA-specific effects

**Current Recommendation:**
- Icosapent ethyl 4g for TG 150-499 + ASCVD or DM + additional risk
- Mixed omega-3 not recommended for CV prevention

### Precision Medicine

**Genetic Testing Indications:**
- TG >500 with early onset or family history
- TG >1000 (familial chylomicronemia evaluation)
- Recurrent pancreatitis

**Actionable Findings:**
- LPL deficiency: Avoid dietary fat triggers
- ApoC-III mutations: Target with emerging therapies
- APOA5: Diet-responsive

### Future Directions

**Novel Targets:**
| Target | Approach | Status |
|--------|----------|--------|
| ApoC-III | siRNA (olezarsen) | Phase 3 |
| ANGPTL3 | siRNA/mAb | Available (evinacumab) |
| LPL enhancement | Gene therapy | Research |

**Personalized Nutrition:**
- Genetic variants affect dietary response
- Some individuals highly responsive to carbohydrate
- Precision dietary recommendations`,
      keyTerms: [
        { term: 'ApoC-III', definition: 'Apolipoprotein that inhibits lipoprotein lipase; target for TG-lowering therapies' },
        { term: 'ANGPTL3', definition: 'Protein that inhibits lipoprotein and endothelial lipases; therapeutic target' },
      ],
      clinicalNotes: 'Expert management recognizes that triglycerides reflect complex lipoprotein metabolism. Precision approaches targeting specific proteins (apoC-III, ANGPTL3) are emerging for severe, refractory hypertriglyceridemia.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['cardiovascular', 'gastrointestinal'],
    topics: ['laboratory', 'cardiology', 'endocrinology', 'preventive medicine'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

// =============================================================================
// LIPID PANEL
// =============================================================================

export const LIPID_PANEL: LabPanel = {
  id: 'panel-lipid',
  name: 'Lipid Panel',
  abbreviation: 'Lipid Panel',
  description: 'Comprehensive assessment of blood lipids for cardiovascular risk evaluation.',
  includedTests: [
    'lab-total-cholesterol',
    'lab-ldl',
    'lab-hdl',
    'lab-triglycerides',
    'lab-vldl',
  ],
  commonIndications: [
    'Cardiovascular risk assessment',
    'Routine health screening (adults >=20 years)',
    'Diabetes management',
    'Monitoring lipid-lowering therapy',
    'Family history of premature cardiovascular disease',
    'Evaluation of obesity and metabolic syndrome',
  ],
  interpretationGuidance: [
    {
      level: 1,
      content: 'The lipid panel measures cholesterol and fat levels in your blood to assess your risk for heart disease. It includes total cholesterol, LDL (bad), HDL (good), and triglycerides.',
    },
    {
      level: 3,
      content: 'Systematic lipid interpretation: Calculate non-HDL (TC-HDL) as secondary target. Assess LDL for primary treatment decision. Evaluate TG for pancreatitis risk (>500) and CV risk (>150). Use ASCVD risk calculator for treatment threshold decisions.',
    },
    {
      level: 5,
      content: 'Expert lipid interpretation integrates genetic risk (FH screening, Lp(a)), advanced testing (apoB, LDL-P) when indicated, CAC scoring for intermediate risk, and precision therapy selection based on patient phenotype and comorbidities.',
    },
  ],
  patterns: [
    {
      patternName: 'Atherogenic Dyslipidemia',
      description: 'Pattern associated with metabolic syndrome and increased cardiovascular risk',
      labFindings: [
        { labId: 'lab-hdl', labName: 'HDL', expectedDirection: 'low' },
        { labId: 'lab-triglycerides', labName: 'Triglycerides', expectedDirection: 'high' },
        { labId: 'lab-ldl', labName: 'LDL', expectedDirection: 'normal' },
      ],
      suggestsDiagnosis: ['Metabolic syndrome', 'Type 2 diabetes', 'Insulin resistance'],
      clinicalContext: 'Low HDL with high TG often indicates insulin resistance. LDL may be normal but small dense LDL particles are increased. Non-HDL cholesterol is important secondary target.',
    },
    {
      patternName: 'Familial Hypercholesterolemia',
      description: 'Pattern suggesting genetic disorder of LDL metabolism',
      labFindings: [
        { labId: 'lab-ldl', labName: 'LDL', expectedDirection: 'high' },
        { labId: 'lab-total-cholesterol', labName: 'Total Cholesterol', expectedDirection: 'high' },
        { labId: 'lab-triglycerides', labName: 'Triglycerides', expectedDirection: 'normal' },
      ],
      suggestsDiagnosis: ['Familial hypercholesterolemia', 'Polygenic hypercholesterolemia'],
      clinicalContext: 'LDL >190 mg/dL with normal TG and physical findings (xanthomas, arcus) suggests FH. Screen family members and consider genetic testing.',
    },
    {
      patternName: 'Severe Hypertriglyceridemia',
      description: 'Pattern with pancreatitis risk',
      labFindings: [
        { labId: 'lab-triglycerides', labName: 'Triglycerides', expectedDirection: 'high' },
        { labId: 'lab-hdl', labName: 'HDL', expectedDirection: 'low' },
        { labId: 'lab-ldl', labName: 'LDL', expectedDirection: 'normal' },
      ],
      suggestsDiagnosis: ['Familial hypertriglyceridemia', 'Secondary hypertriglyceridemia', 'Familial chylomicronemia'],
      clinicalContext: 'TG >500 mg/dL requires urgent treatment to prevent pancreatitis. LDL calculation is unreliable at TG >400. Evaluate for secondary causes (diabetes, hypothyroidism, alcohol, medications).',
    },
  ],
};
