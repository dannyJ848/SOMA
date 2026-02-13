/**
 * Arterial Blood Gas (ABG) - Laboratory Interpretation Content
 *
 * Comprehensive educational content for ABG interpretation including:
 * - pH
 * - PaCO2
 * - PaO2
 * - HCO3 (Bicarbonate)
 * - Base Excess
 * - Oxygen Saturation
 */

import { LabInterpretationContent, LabPanel, PanelPattern } from './types';

// =============================================================================
// ARTERIAL pH
// =============================================================================

export const arterialPhInterpretation: LabInterpretationContent = {
  id: 'lab-arterial-ph',
  type: 'concept',
  name: 'Arterial pH',
  alternateNames: ['Blood pH', 'pH'],

  labMetadata: {
    loincCode: '2744-1',
    testName: 'Arterial pH',
    commonAbbreviations: ['pH'],
    category: 'blood-gas',
    panel: 'ABG',
    orderingFrequency: 'common',
  },

  referenceRanges: {
    adult: {
      low: 7.35,
      high: 7.45,
      unit: '',
      notes: 'Normal arterial pH range',
    },
  },

  criticalValues: {
    low: 7.20,
    high: 7.60,
    unit: '',
    urgency: 'immediate',
    action: 'pH <7.20 or >7.60 is life-threatening; immediate evaluation and intervention required',
    notificationRequired: true,
  },

  interpretations: {
    low: {
      direction: 'low',
      severity: 'severe',
      causes: [
        {
          category: 'Metabolic Acidosis',
          causes: [
            'Diabetic ketoacidosis',
            'Lactic acidosis',
            'Renal failure',
            'Toxic ingestion (methanol, ethylene glycol, salicylate)',
            'Diarrhea (loss of bicarbonate)',
          ],
          commonality: 'common',
        },
        {
          category: 'Respiratory Acidosis',
          causes: [
            'COPD exacerbation',
            'Hypoventilation (drug overdose, neuromuscular disease)',
            'Severe asthma',
            'Pneumonia with respiratory failure',
          ],
          commonality: 'common',
        },
      ],
      associatedFindings: [
        'Low HCO3 in metabolic acidosis',
        'High PaCO2 in respiratory acidosis',
        'Calculate anion gap for metabolic acidosis',
      ],
      workupSuggestions: [
        'Calculate anion gap (Na - Cl - HCO3)',
        'If high AG: lactate, ketones, renal function, toxicology',
        'If respiratory: chest X-ray, assess ventilation',
      ],
      clinicalPearls: [
        'pH <7.20 is severe acidemia',
        'Look at PaCO2 and HCO3 to determine metabolic vs respiratory',
        'Expected compensation helps identify mixed disorders',
      ],
    },
    high: {
      direction: 'high',
      severity: 'moderate',
      causes: [
        {
          category: 'Metabolic Alkalosis',
          causes: [
            'Vomiting (loss of HCl)',
            'NG suction',
            'Diuretic use',
            'Hyperaldosteronism',
            'Bicarbonate administration',
          ],
          commonality: 'common',
        },
        {
          category: 'Respiratory Alkalosis',
          causes: [
            'Hyperventilation (anxiety, pain)',
            'Hypoxemia (altitude, PE)',
            'Sepsis (early)',
            'Liver failure',
            'Salicylate toxicity (early)',
          ],
          commonality: 'common',
        },
      ],
      associatedFindings: [
        'High HCO3 in metabolic alkalosis',
        'Low PaCO2 in respiratory alkalosis',
      ],
      workupSuggestions: [
        'Electrolytes (hypokalemia common in metabolic alkalosis)',
        'Urine chloride (differentiates saline-responsive vs resistant)',
        'Clinical assessment for hyperventilation cause',
      ],
      clinicalPearls: [
        'Severe alkalemia (pH >7.55) can cause arrhythmias, seizures',
        'Metabolic alkalosis: check urine Cl to classify',
        'Respiratory alkalosis may be compensatory for metabolic acidosis',
      ],
    },
  },

  specimen: {
    specimenType: 'arterial blood',
    tubeType: 'Heparinized syringe',
    volume: '1-2 mL',
    fastingRequired: false,
    specialHandling: ['Keep on ice', 'Analyze within 10-15 minutes', 'Remove air bubbles'],
    stability: {
      roomTemp: '10 minutes',
    },
    interferences: ['Air bubbles (falsely elevate PO2, lower PCO2)', 'Delayed analysis', 'Excess heparin'],
  },

  relatedLabs: ['lab-paco2', 'lab-pao2', 'lab-bicarbonate', 'lab-base-excess'],

  organAssociations: [
    { organId: 'lungs', organName: 'Lungs', relationship: 'Regulate CO2' },
    { organId: 'kidneys', organName: 'Kidneys', relationship: 'Regulate bicarbonate' },
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Blood pH measures the acid-base balance of your blood. Normal pH is between 7.35 and 7.45.',
      explanation: `Your blood needs to stay at the right pH (acidity level) for your body to work properly.

**Normal blood pH: 7.35 to 7.45**

**What the numbers mean:**
- pH below 7.35 = Acidosis (blood is too acidic)
- pH above 7.45 = Alkalosis (blood is too basic/alkaline)
- Both can be dangerous and need treatment

**Your body maintains pH through:**
- Lungs: Breathe out carbon dioxide (acid)
- Kidneys: Control bicarbonate (base)

When pH is abnormal, doctors need to find out why and fix it.`,
      keyTerms: [
        { term: 'pH', definition: 'A measure of how acidic or basic (alkaline) your blood is' },
        { term: 'acidosis', definition: 'When blood pH is too low (too acidic)' },
        { term: 'alkalosis', definition: 'When blood pH is too high (too alkaline)' },
      ],
      analogies: [
        'Blood pH is like the temperature in your home - it needs to stay in a narrow range for everything to work properly.',
      ],
    },
    2: {
      level: 2,
      summary: 'Arterial pH reflects the net effect of metabolic and respiratory acid-base processes. Interpretation requires analysis of PaCO2 and HCO3.',
      explanation: `## pH Fundamentals

**Henderson-Hasselbalch Equation:**
pH = 6.1 + log (HCO3 / 0.03 × PaCO2)

**pH is determined by:**
- HCO3 (bicarbonate) = metabolic component (kidneys)
- PaCO2 = respiratory component (lungs)

## Classification

| pH | Primary Disorder |
|----|-----------------|
| <7.35 | Acidemia |
| >7.45 | Alkalemia |

| Primary Disturbance | pH | PaCO2 | HCO3 |
|--------------------|-----|-------|------|
| Metabolic acidosis | ↓ | ↓ (compensation) | ↓ |
| Metabolic alkalosis | ↑ | ↑ (compensation) | ↑ |
| Respiratory acidosis | ↓ | ↑ | ↑ (compensation) |
| Respiratory alkalosis | ↑ | ↓ | ↓ (compensation) |

## Anion Gap
AG = Na - Cl - HCO3 (Normal: 8-12 mEq/L)

**High Anion Gap Acidosis (MUDPILES):**
- Methanol
- Uremia
- DKA
- Propylene glycol
- INH/Iron
- Lactic acidosis
- Ethylene glycol
- Salicylates`,
      keyTerms: [
        { term: 'anion gap', definition: 'Calculated value helping identify cause of metabolic acidosis' },
        { term: 'compensation', definition: 'Body\'s response to normalize pH when a primary disorder exists' },
      ],
      analogies: [
        'The lungs and kidneys work like a seesaw to balance pH - if one side tips, the other compensates.',
      ],
    },
    3: {
      level: 3,
      summary: 'Systematic ABG interpretation involves identifying the primary disorder, assessing compensation, and calculating anion gap when metabolic acidosis is present.',
      explanation: `## Systematic ABG Interpretation

### Step-by-Step Approach

**Step 1: Look at pH**
- <7.35 = acidemia
- >7.45 = alkalemia
- 7.35-7.45 = normal or compensated

**Step 2: Identify Primary Disorder**
- If pH low and CO2 high → Respiratory acidosis
- If pH low and HCO3 low → Metabolic acidosis
- If pH high and CO2 low → Respiratory alkalosis
- If pH high and HCO3 high → Metabolic alkalosis

**Step 3: Assess Compensation**

| Disorder | Expected Compensation |
|----------|----------------------|
| Metabolic acidosis | PaCO2 = 1.5 × HCO3 + 8 (±2) (Winter's formula) |
| Metabolic alkalosis | PaCO2 ↑ 0.7 mmHg per 1 mEq/L ↑ HCO3 |
| Acute resp acidosis | HCO3 ↑ 1 per 10 mmHg ↑ CO2 |
| Chronic resp acidosis | HCO3 ↑ 3.5 per 10 mmHg ↑ CO2 |
| Acute resp alkalosis | HCO3 ↓ 2 per 10 mmHg ↓ CO2 |
| Chronic resp alkalosis | HCO3 ↓ 5 per 10 mmHg ↓ CO2 |

**Step 4: Calculate Anion Gap (if metabolic acidosis)**
AG = Na - Cl - HCO3

**Step 5: Calculate Delta Gap (if elevated AG)**
Delta gap = (AG - 12) / (24 - HCO3)
- Ratio <1: Combined AG + non-AG metabolic acidosis
- Ratio 1-2: Pure AG metabolic acidosis
- Ratio >2: AG metabolic acidosis + metabolic alkalosis

### Mixed Disorders
- If compensation is not as expected, mixed disorder present
- Example: pH 7.20, CO2 40, HCO3 15
  - Metabolic acidosis (low pH, low HCO3)
  - Expected CO2 by Winter's = 1.5(15) + 8 = 30
  - Actual CO2 40 → concurrent respiratory acidosis`,
      keyTerms: [
        { term: 'Winter\'s formula', definition: 'Expected PaCO2 compensation in metabolic acidosis' },
        { term: 'delta gap', definition: 'Ratio comparing change in anion gap to change in bicarbonate' },
        { term: 'mixed disorder', definition: 'Two or more acid-base disturbances occurring together' },
      ],
      clinicalNotes: 'The body never overcompensates. If pH is normal with abnormal PaCO2 and HCO3, suspect mixed disorder or chronic compensated state.',
    },
    4: {
      level: 4,
      summary: 'Advanced ABG interpretation includes complex mixed disorders, strong ion difference approach, and recognition of triple acid-base disorders.',
      explanation: `## Advanced ABG Interpretation

### Strong Ion Difference (Stewart Approach)

**Traditional vs Stewart:**
| Approach | Key Variables |
|----------|---------------|
| Traditional | pH, PaCO2, HCO3, AG |
| Stewart | SID, PaCO2, weak acids (albumin, phosphate) |

**SID = (Na + K + Ca + Mg) - (Cl + lactate + others)**
- Normal SID ~40 mEq/L
- ↓ SID → acidosis
- ↑ SID → alkalosis

**Corrected Anion Gap:**
Corrected AG = AG + 2.5 × (4.0 - albumin in g/dL)
- Important in hypoalbuminemia (ICU patients)

### Osmolar Gap
**Calculation:** Measured Osm - Calculated Osm
Calculated Osm = 2(Na) + Glucose/18 + BUN/2.8

| Gap | Interpretation |
|-----|----------------|
| <10 | Normal |
| >10 | Unmeasured osmoles (toxic alcohols) |

### Triple Disorders
**Example:** DKA patient with vomiting (metabolic acidosis) who also has COPD exacerbation (respiratory acidosis) and NG suction (metabolic alkalosis)

**Identification:**
1. Calculate expected compensation for each primary disorder
2. Look for values that don't fit
3. Clinical context essential

### Lactate in ABG Interpretation

**Type A Lactic Acidosis (hypoxic):**
- Shock, cardiac arrest, seizures
- Tissue hypoperfusion

**Type B Lactic Acidosis (non-hypoxic):**
- Metformin, antiretrovirals
- Liver failure, malignancy
- Thiamine deficiency

### A-a Gradient
A-a = [(FiO2)(713) - PaCO2/0.8] - PaO2

**Normal:** Age/4 + 4 (on room air)

**Elevated A-a Gradient:**
- V/Q mismatch
- Shunt
- Diffusion defect

**Normal A-a Gradient with hypoxemia:**
- Hypoventilation
- Low FiO2 (altitude)`,
      keyTerms: [
        { term: 'strong ion difference', definition: 'Stewart approach to acid-base considering strong ions' },
        { term: 'osmolar gap', definition: 'Difference between measured and calculated osmolality' },
        { term: 'A-a gradient', definition: 'Alveolar-arterial oxygen difference assessing gas exchange' },
      ],
      clinicalNotes: 'Always correct the anion gap for albumin in critically ill patients. A "normal" AG may be hiding an anion gap acidosis if albumin is low.',
    },
    5: {
      level: 5,
      summary: 'Expert ABG interpretation integrates advanced concepts, point-of-care considerations, and guides complex clinical decision-making.',
      explanation: `## Expert-Level ABG Interpretation

### Advanced Physiologic Concepts

**Base Excess/Deficit:**
- Metabolic component independent of respiratory
- BE = (HCO3 - 24.4) + 16.2 × (pH - 7.4)
- Normal: -2 to +2 mEq/L
- Negative = base deficit (metabolic acidosis)
- Positive = base excess (metabolic alkalosis)

**Standard Bicarbonate:**
- HCO3 corrected to PCO2 of 40 mmHg
- Isolates metabolic component
- Similar concept to base excess

### Complex Clinical Scenarios

**Salicylate Poisoning:**
- Early: Respiratory alkalosis (central stimulation)
- Late: High AG metabolic acidosis
- May have mixed picture

**Sepsis Evolution:**
| Phase | ABG Pattern |
|-------|-------------|
| Early | Respiratory alkalosis (hyperventilation) |
| Progressing | Lactic acidosis develops |
| Late | Mixed metabolic acidosis + respiratory acidosis (fatigue) |

**Post-Arrest:**
- Severe mixed acidosis common
- Respiratory (hypoventilation during arrest)
- Metabolic (lactic acidosis)
- Serial ABGs guide ventilator and bicarb decisions

### Point-of-Care ABG

**Advantages:**
- Rapid results (minutes)
- Real-time ventilator management
- Immediate intervention decisions

**Limitations:**
- Calibration critical
- Pre-analytical errors (air bubbles, clots)
- Limited menu vs lab analyzers

### VBG vs ABG

| Parameter | ABG | VBG | Difference |
|-----------|-----|-----|------------|
| pH | Reference | 0.03-0.04 lower | Correlates well |
| PCO2 | Reference | 3-8 mmHg higher | Useful for trends |
| PO2 | Reference | Much lower | Cannot use VBG |
| HCO3 | Reference | Similar | Correlates well |

**When VBG is Acceptable:**
- Monitoring metabolic disorders
- Following trends
- When only acid-base status needed

**ABG Required:**
- Respiratory failure assessment
- Shunt evaluation
- Carboxyhemoglobin/methemoglobin

### ABG in ARDS/Ventilator Management

**P/F Ratio:**
PaO2/FiO2 (e.g., PaO2 80 on FiO2 0.4 = P/F 200)

| P/F Ratio | ARDS Severity |
|-----------|---------------|
| 200-300 | Mild |
| 100-200 | Moderate |
| <100 | Severe |

**Permissive Hypercapnia:**
- Lung protective ventilation may cause elevated CO2
- Acceptable if pH >7.20
- Avoid in elevated ICP

### Quality Assurance
**Pre-analytical:**
- Proper syringe (pre-heparinized)
- Remove air bubbles immediately
- Analyze within 10-15 minutes (or ice)

**Common Errors:**
| Error | Effect |
|-------|--------|
| Air bubble | ↑ PO2, ↓ PCO2 |
| Excess heparin | ↓ PCO2 (dilution) |
| Venous sample | ↓ PO2, ↑ PCO2, ↓ pH |
| Delayed analysis | ↓ PO2, ↓ pH (metabolism) |`,
      keyTerms: [
        { term: 'base excess', definition: 'Metabolic acid-base component independent of respiratory factors' },
        { term: 'P/F ratio', definition: 'PaO2 to FiO2 ratio used to classify ARDS severity' },
        { term: 'permissive hypercapnia', definition: 'Accepting elevated CO2 to achieve lung-protective ventilation' },
      ],
      clinicalNotes: 'Expert ABG interpretation integrates the clinical scenario with laboratory values. An ABG is a snapshot - trends and clinical response to intervention are often more important than single values.',
    },
  },

  media: [],
  citations: [
    {
      id: 'acid-base-review',
      type: 'article',
      title: 'Approach to the Patient with Acid-Base Disturbances',
      source: 'NEJM',
      authors: ['Kraut JA', 'Madias NE'],
    },
  ],
  crossReferences: [
    { targetId: 'lab-paco2', targetType: 'concept', relationship: 'related' },
    { targetId: 'lab-bicarbonate', targetType: 'concept', relationship: 'related' },
  ],
  tags: {
    systems: ['respiratory', 'renal'],
    topics: ['laboratory', 'critical care', 'pulmonology', 'nephrology'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] },
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

// =============================================================================
// PaCO2
// =============================================================================

export const paco2Interpretation: LabInterpretationContent = {
  id: 'lab-paco2',
  type: 'concept',
  name: 'PaCO2 (Partial Pressure of Carbon Dioxide)',
  alternateNames: ['Arterial CO2', 'Carbon Dioxide Tension'],

  labMetadata: {
    loincCode: '2019-8',
    testName: 'PaCO2',
    commonAbbreviations: ['PaCO2', 'pCO2'],
    category: 'blood-gas',
    panel: 'ABG',
    orderingFrequency: 'common',
  },

  referenceRanges: {
    adult: {
      low: 35,
      high: 45,
      unit: 'mmHg',
      notes: 'Normal arterial range',
    },
  },

  criticalValues: {
    low: 20,
    high: 70,
    unit: 'mmHg',
    urgency: 'immediate',
    action: 'Assess respiratory status and ventilation; may require immediate intervention',
    notificationRequired: true,
  },

  interpretations: {
    high: {
      direction: 'high',
      severity: 'moderate',
      causes: [
        {
          category: 'Hypoventilation',
          causes: [
            'COPD exacerbation',
            'Drug overdose (opioids, sedatives)',
            'Neuromuscular disease (myasthenia, ALS)',
            'Obesity hypoventilation syndrome',
            'Severe asthma',
          ],
          commonality: 'common',
        },
        {
          category: 'Respiratory Failure',
          causes: [
            'Acute respiratory failure',
            'Ventilator settings inadequate',
            'Airway obstruction',
          ],
          commonality: 'common',
        },
      ],
      associatedFindings: ['Low pH (respiratory acidosis)', 'Elevated HCO3 if chronic'],
      workupSuggestions: ['Assess airway and breathing', 'Chest X-ray', 'Consider intubation if severe'],
      clinicalPearls: ['Acute vs chronic determined by HCO3 compensation', 'Chronic hypercapnia: HCO3 rises 3.5 mEq/L per 10 mmHg CO2'],
    },
    low: {
      direction: 'low',
      severity: 'moderate',
      causes: [
        {
          category: 'Hyperventilation',
          causes: [
            'Anxiety/panic',
            'Pain',
            'Hypoxemia (compensatory)',
            'Pulmonary embolism',
            'Sepsis (early)',
            'Liver failure',
          ],
          commonality: 'common',
        },
        {
          category: 'Compensation',
          causes: [
            'Metabolic acidosis compensation',
            'High altitude acclimatization',
          ],
          commonality: 'common',
        },
      ],
      associatedFindings: ['High pH (respiratory alkalosis)', 'Low HCO3 if chronic'],
      workupSuggestions: ['Evaluate for hypoxemia (check PaO2)', 'Assess for metabolic acidosis', 'Clinical evaluation for cause'],
      clinicalPearls: ['Compensation for metabolic acidosis is expected', 'Use Winter\'s formula to assess if respiratory response appropriate'],
    },
  },

  specimen: {
    specimenType: 'arterial blood',
    tubeType: 'Heparinized syringe',
    volume: '1-2 mL',
    fastingRequired: false,
    specialHandling: ['Keep on ice', 'Analyze within 10-15 minutes', 'Remove air bubbles'],
    stability: {
      roomTemp: '10 minutes',
    },
    interferences: ['Air bubbles falsely lower PCO2', 'Delayed analysis'],
  },

  relatedLabs: ['lab-arterial-ph', 'lab-pao2', 'lab-bicarbonate'],

  organAssociations: [
    { organId: 'lungs', organName: 'Lungs', relationship: 'Site of CO2 elimination' },
    { organId: 'brain', organName: 'Brain', relationship: 'Respiratory center controls ventilation' },
  ],

  levels: {
    1: {
      level: 1,
      summary: 'PaCO2 measures how much carbon dioxide is in your blood, which reflects how well your lungs are removing this waste gas.',
      explanation: `Carbon dioxide (CO2) is a waste gas your body produces. Your lungs breathe it out.

**Normal PaCO2: 35-45 mmHg**

**What the numbers mean:**
- High CO2 (>45): Your lungs aren't removing enough CO2 (breathing too slowly or too shallow)
- Low CO2 (<35): You're breathing out too much CO2 (breathing too fast)

**Common causes of high CO2:**
- Lung diseases like COPD
- Drug overdose affecting breathing
- Muscle weakness affecting breathing

**Common causes of low CO2:**
- Anxiety and panic (hyperventilating)
- Pain
- Body trying to compensate for other problems`,
      keyTerms: [
        { term: 'PaCO2', definition: 'Partial pressure of carbon dioxide in arterial blood' },
        { term: 'ventilation', definition: 'The process of moving air in and out of the lungs' },
      ],
      analogies: [
        'CO2 is like exhaust from a car - if the exhaust system is blocked (bad breathing), it builds up.',
      ],
    },
    2: {
      level: 2,
      summary: 'PaCO2 reflects alveolar ventilation. Elevated PaCO2 indicates hypoventilation (respiratory acidosis); low PaCO2 indicates hyperventilation (respiratory alkalosis).',
      explanation: `## PaCO2 Overview

**Relationship:**
PaCO2 ∝ CO2 Production / Alveolar Ventilation

**Normal Range:** 35-45 mmHg

## Interpretation

| PaCO2 | Meaning | pH Effect |
|-------|---------|-----------|
| >45 mmHg | Hypercapnia (hypoventilation) | Respiratory acidosis |
| <35 mmHg | Hypocapnia (hyperventilation) | Respiratory alkalosis |

## Acute vs Chronic

**Respiratory Acidosis:**
| Type | HCO3 Response |
|------|---------------|
| Acute | ↑ 1 mEq/L per 10 mmHg ↑ CO2 |
| Chronic | ↑ 3.5 mEq/L per 10 mmHg ↑ CO2 |

**Respiratory Alkalosis:**
| Type | HCO3 Response |
|------|---------------|
| Acute | ↓ 2 mEq/L per 10 mmHg ↓ CO2 |
| Chronic | ↓ 5 mEq/L per 10 mmHg ↓ CO2 |

## Clinical Significance

**High PaCO2 Causes:**
- CNS depression (drugs, stroke)
- Neuromuscular disease
- Chest wall abnormalities
- Obstructive lung disease (COPD, severe asthma)

**Low PaCO2 Causes:**
- Anxiety, pain, fever
- Hypoxemia-driven
- Central causes (liver failure, sepsis, CNS disease)
- Mechanical ventilation (overventilation)`,
      keyTerms: [
        { term: 'hypercapnia', definition: 'Elevated CO2 in blood from inadequate ventilation' },
        { term: 'hypocapnia', definition: 'Low CO2 in blood from excessive ventilation' },
        { term: 'alveolar ventilation', definition: 'The amount of fresh air reaching the gas-exchanging parts of the lungs' },
      ],
      analogies: [
        'PaCO2 is like a speedometer for breathing - high CO2 means slow breathing, low CO2 means fast breathing.',
      ],
    },
    3: {
      level: 3,
      summary: 'PaCO2 interpretation requires determination of acute vs chronic status, assessment of expected compensation, and identification of mixed disorders.',
      explanation: `## Systematic PaCO2 Interpretation

### Determining Acute vs Chronic

**Use pH and HCO3 relationship:**
| Scenario | pH | HCO3 | Duration |
|----------|-----|------|----------|
| Acute hypercapnia | Very low | Minimally elevated | Hours |
| Chronic hypercapnia | Near normal | Elevated | Days-weeks |

### Expected Compensation

**Winter's Formula (for metabolic acidosis):**
Expected PaCO2 = 1.5 × HCO3 + 8 (±2)

If actual PaCO2 higher than expected → concurrent respiratory acidosis
If actual PaCO2 lower than expected → concurrent respiratory alkalosis

### Clinical Scenarios

**COPD Exacerbation:**
- Chronic baseline hypercapnia (compensated)
- Acute worsening → pH drops
- Target baseline CO2, not normal range

**Acute Respiratory Failure:**
- Rising CO2 is warning sign
- May need non-invasive or invasive ventilation
- CO2 >50 with rising trend concerning

**Mechanical Ventilation:**
- CO2 controlled by minute ventilation
- ↑ rate or tidal volume → ↓ CO2
- Consider permissive hypercapnia in ARDS

### CO2 in Special Situations

**Head Injury:**
- Target normocapnia (35-40)
- Avoid hypocapnia (vasoconstriction → ischemia)
- Avoid hypercapnia (increased ICP)

**Cardiac Arrest:**
- ETCO2 monitoring during CPR
- Rising ETCO2 suggests ROSC
- Very low ETCO2 suggests poor prognosis

**Altitude:**
- Normal acclimatization: hyperventilation → low CO2
- Respiratory alkalosis with metabolic compensation`,
      keyTerms: [
        { term: 'permissive hypercapnia', definition: 'Accepting elevated CO2 to achieve lung-protective ventilation in ARDS' },
        { term: 'ETCO2', definition: 'End-tidal CO2 - non-invasive measure of exhaled CO2' },
        { term: 'ROSC', definition: 'Return of spontaneous circulation after cardiac arrest' },
      ],
      clinicalNotes: 'In chronic CO2 retainers (COPD), target the patient\'s baseline CO2, not the normal range. A "normal" CO2 of 40 in a patient with chronic hypercapnia indicates acute hyperventilation.',
    },
    4: {
      level: 4,
      summary: 'Advanced PaCO2 interpretation includes dead space calculations, CO2 production considerations, and complex ventilator management.',
      explanation: `## Advanced PaCO2 Interpretation

### Dead Space

**Physiologic Dead Space:**
VD/VT = (PaCO2 - PETCO2) / PaCO2
- Normal: 0.2-0.4
- ↑ in PE, COPD, low cardiac output

**Clinical Significance:**
- High dead space → need more minute ventilation to maintain normal CO2
- May explain difficult ventilation

### CO2 Production

**Factors Increasing CO2 Production:**
- Fever (↑ 10-13% per degree C)
- Sepsis, burns
- High carbohydrate feeding (RQ = 1.0)
- Shivering, seizures

**Factors Decreasing CO2 Production:**
- Hypothermia
- Sedation/paralysis
- Hypothyroidism

### Ventilator Management

**CO2 Control:**
| Parameter | Effect on CO2 |
|-----------|---------------|
| ↑ Respiratory rate | ↓ CO2 |
| ↑ Tidal volume | ↓ CO2 |
| ↑ Minute ventilation | ↓ CO2 |

**Permissive Hypercapnia:**
- Accept CO2 up to 60-70 mmHg
- Keep pH >7.20
- Avoid in: Elevated ICP, severe RV failure
- Benefits: Allows lung-protective settings

### CO2 Narcosis
- Severe hypercapnia causes CNS depression
- CO2 >80-100: Obtundation, coma
- Creates vicious cycle: ↓ drive → ↑ CO2 → more depression

### CO2 in Non-Invasive Ventilation

**BiPAP:**
- IPAP controls CO2 (tidal volume)
- EPAP controls oxygenation (recruits alveoli)

**Adjustments:**
- High CO2 → ↑ IPAP (or ↑ pressure support)
- Target: Reduce CO2 by 10-20%/hour initially`,
      keyTerms: [
        { term: 'dead space', definition: 'Ventilation that does not participate in gas exchange' },
        { term: 'CO2 narcosis', definition: 'CNS depression from severe hypercapnia' },
        { term: 'BiPAP', definition: 'Bilevel positive airway pressure - non-invasive ventilation mode' },
      ],
      clinicalNotes: 'In respiratory failure, rising CO2 is often a late sign. A "normal" CO2 in a tachypneic patient should raise concern - the patient is working hard to maintain CO2.',
    },
    5: {
      level: 5,
      summary: 'Expert PaCO2 interpretation integrates advanced physiology, transcutaneous monitoring, and nuanced clinical decision-making.',
      explanation: `## Expert-Level PaCO2 Interpretation

### CO2 Physiology Deep Dive

**CO2 Transport:**
| Form | Percentage |
|------|------------|
| Dissolved | 5-10% |
| Bicarbonate | 70-80% |
| Carbamino compounds | 15-20% |

**Haldane Effect:**
- Deoxygenated blood carries more CO2
- Relevant in tissue beds vs lungs

### Transcutaneous CO2 (TcCO2)

**Indications:**
- Continuous monitoring (sleep studies)
- Neonates (frequent ABG avoidance)
- Weaning from ventilator
- Home ventilation monitoring

**Limitations:**
- Requires calibration
- Skin perfusion affects accuracy
- Lag time vs arterial values

### Complex Ventilator Scenarios

**ARDS with Refractory Hypercapnia:**
- Accept if pH >7.15-7.20
- Consider ECCO2R or ECMO in extreme cases
- Bicarbonate infusion controversial
- Prone positioning may improve CO2 clearance

**Severe Asthma:**
- Initial hypocapnia from hyperventilation
- Normalization may indicate fatigue
- Hypercapnia is late, ominous sign
- Consider intubation before severe acidosis

### CO2 and Cerebral Blood Flow

**Relationship:**
- CBF changes ~3% per mmHg CO2 change
- Hypocapnia → cerebral vasoconstriction
- Hypercapnia → cerebral vasodilation

**Clinical Application:**
- Brief hyperventilation for herniation (temporizing)
- Avoid prolonged hypocapnia (ischemia)
- Maintain normocapnia in stroke, TBI

### ECMO and CO2

**VV-ECMO:**
- CO2 removal very efficient
- Can achieve normocapnia with minimal sweep gas
- Native lung ventilation can be minimized

**ECCO2R (Extracorporeal CO2 Removal):**
- Lower flow than ECMO
- Primarily for CO2, not oxygenation
- May allow ultra-protective ventilation

### Precision in CO2 Targets

**Condition-Specific Targets:**
| Condition | PaCO2 Target |
|-----------|--------------|
| Normal lung | 35-45 |
| COPD baseline | Patient's baseline |
| ARDS | Permissive if needed (accept 60-70) |
| TBI/ICP | 35-40 (avoid <30) |
| Cardiac arrest (post-ROSC) | 35-45 (avoid hypocapnia) |`,
      keyTerms: [
        { term: 'ECCO2R', definition: 'Extracorporeal CO2 removal - low-flow device for CO2 clearance' },
        { term: 'Haldane effect', definition: 'Deoxygenated hemoglobin carries more CO2 than oxygenated' },
        { term: 'TcCO2', definition: 'Transcutaneous CO2 monitoring - non-invasive continuous measurement' },
      ],
      clinicalNotes: 'Expert PaCO2 management recognizes that optimal CO2 targets are patient and context-specific. In chronic hypercapnic patients, a "normal" CO2 may be harmful; in ARDS, accepting elevated CO2 may be protective.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'lab-arterial-ph', targetType: 'concept', relationship: 'related' },
  ],
  tags: {
    systems: ['respiratory'],
    topics: ['laboratory', 'critical care', 'pulmonology'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] },
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

// =============================================================================
// ABG PANEL
// =============================================================================

export const ABG_PANEL: LabPanel = {
  id: 'panel-abg',
  name: 'Arterial Blood Gas Panel',
  nameEs: 'Gasometria Arterial',
  abbreviation: 'ABG',
  description: 'Assessment of oxygenation, ventilation, and acid-base status using arterial blood.',
  includedTests: [
    'lab-arterial-ph',
    'lab-paco2',
    'lab-pao2',
    'lab-bicarbonate',
    'lab-base-excess',
    'lab-oxygen-saturation',
  ],
  commonIndications: [
    'Respiratory failure evaluation',
    'Acid-base disturbance assessment',
    'Monitoring mechanical ventilation',
    'Shock and sepsis evaluation',
    'Metabolic acidosis or alkalosis workup',
    'Cardiopulmonary arrest',
    'Assessment of supplemental oxygen needs',
  ],
  interpretationGuidance: [
    {
      level: 1,
      content: 'ABG tells doctors about the oxygen and carbon dioxide in your blood and whether your blood is too acidic or too alkaline. Normal pH is 7.35-7.45.',
    },
    {
      level: 3,
      content: 'Systematic ABG interpretation: 1) Is pH normal, acidemic, or alkalemic? 2) Is the primary disturbance respiratory (PaCO2) or metabolic (HCO3)? 3) Is compensation appropriate? 4) Calculate anion gap if metabolic acidosis. 5) Calculate delta gap to detect mixed disorders.',
    },
    {
      level: 5,
      content: 'Expert ABG interpretation integrates clinical context, recognizes mixed and triple disorders, applies corrected anion gap for hypoalbuminemia, calculates A-a gradient and P/F ratio, and uses Stewart approach when indicated. Consider VBG vs ABG appropriateness and technical factors affecting results.',
    },
  ],
  patterns: [
    {
      patternName: 'Metabolic Acidosis (High Anion Gap)',
      description: 'Acidemia from accumulation of organic acids',
      labFindings: [
        { labId: 'lab-arterial-ph', labName: 'pH', expectedDirection: 'low' },
        { labId: 'lab-bicarbonate', labName: 'HCO3', expectedDirection: 'low' },
        { labId: 'lab-paco2', labName: 'PaCO2', expectedDirection: 'low' },
      ],
      suggestsDiagnosis: ['DKA', 'Lactic acidosis', 'Uremia', 'Toxic ingestion (methanol, ethylene glycol, salicylates)'],
      clinicalContext: 'High anion gap (>12) indicates unmeasured anions. Use MUDPILES mnemonic. Calculate delta gap to detect concurrent metabolic alkalosis or non-AG acidosis.',
    },
    {
      patternName: 'Respiratory Acidosis (Acute)',
      description: 'Acidemia from acute hypoventilation',
      labFindings: [
        { labId: 'lab-arterial-ph', labName: 'pH', expectedDirection: 'low' },
        { labId: 'lab-paco2', labName: 'PaCO2', expectedDirection: 'high' },
        { labId: 'lab-bicarbonate', labName: 'HCO3', expectedDirection: 'normal' },
      ],
      suggestsDiagnosis: ['Acute respiratory failure', 'Drug overdose', 'Severe asthma/COPD exacerbation', 'Neuromuscular weakness'],
      clinicalContext: 'In acute respiratory acidosis, HCO3 rises only 1 mEq/L per 10 mmHg CO2 rise. Significantly elevated HCO3 suggests chronic hypercapnia or concurrent metabolic alkalosis.',
    },
    {
      patternName: 'Metabolic Alkalosis',
      description: 'Alkalemia from bicarbonate excess or acid loss',
      labFindings: [
        { labId: 'lab-arterial-ph', labName: 'pH', expectedDirection: 'high' },
        { labId: 'lab-bicarbonate', labName: 'HCO3', expectedDirection: 'high' },
        { labId: 'lab-paco2', labName: 'PaCO2', expectedDirection: 'high' },
      ],
      suggestsDiagnosis: ['Vomiting/NG suction', 'Diuretic use', 'Hyperaldosteronism', 'Contraction alkalosis'],
      clinicalContext: 'Check urine chloride: <20 mEq/L is saline-responsive (vomiting, NG suction); >20 mEq/L is saline-resistant (hyperaldosteronism, diuretics).',
    },
    {
      patternName: 'Respiratory Alkalosis',
      description: 'Alkalemia from hyperventilation',
      labFindings: [
        { labId: 'lab-arterial-ph', labName: 'pH', expectedDirection: 'high' },
        { labId: 'lab-paco2', labName: 'PaCO2', expectedDirection: 'low' },
        { labId: 'lab-bicarbonate', labName: 'HCO3', expectedDirection: 'low' },
      ],
      suggestsDiagnosis: ['Anxiety/panic', 'Hypoxemia', 'Pulmonary embolism', 'Early sepsis', 'Liver failure', 'Salicylate toxicity'],
      clinicalContext: 'Check PaO2 and A-a gradient. If hypoxemic, respiratory alkalosis may be compensatory. Central causes (liver failure, sepsis) have normal A-a gradient.',
    },
  ],
};
