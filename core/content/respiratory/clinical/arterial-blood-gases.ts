/**
 * Arterial Blood Gases (ABG) - Clinical Respiratory Medicine
 *
 * Comprehensive coverage of blood gas analysis, acid-base physiology,
 * oxygenation assessment, and clinical interpretation.
 */

import { EducationalContent } from '../../types';

export const arterialBloodGasesContent: EducationalContent = {
  id: 'clinical-arterial-blood-gases',
  type: 'concept',
  name: 'Arterial Blood Gas Analysis',
  alternateNames: ['ABG', 'Blood Gas', 'Arterial Blood Gas', 'Acid-Base Analysis'],

  levels: {
    1: {
      level: 1,
      summary: 'Arterial blood gas tests measure oxygen, carbon dioxide, and acid levels in your blood to see how well your lungs and kidneys are working.',
      explanation: `## What Is an Arterial Blood Gas Test?

An arterial blood gas (ABG) test is a special blood test that checks how much oxygen and carbon dioxide are in your blood. It also checks if your blood is too acidic or too basic.

### Why Do Doctors Order This Test?

Doctors use ABG tests to check:
- **How well your lungs work:** Are they getting enough oxygen into your blood?
- **How well your kidneys work:** Are they keeping your blood chemistry balanced?
- **If you have an infection:** Some infections can change your blood gases

### What the Test Measures

**1. Oxygen Level (PaO2)**
- Tells how much oxygen is in your blood
- Normal: 80-100 mmHg (when breathing room air)
- Low levels mean your lungs may not be working well

**2. Carbon Dioxide Level (PaCO2)**
- Tells how much carbon dioxide is in your blood
- Normal: 35-45 mmHg
- Your lungs remove carbon dioxide when you breathe out

**3. Blood Acidity (pH)**
- Tells if your blood is too acidic or too basic
- Normal: 7.35-7.45
- Your body needs to keep this in a narrow range

**4. Bicarbonate (HCO3)**
- A substance that helps control blood acidity
- Normal: 22-26 mEq/L
- Your kidneys control this level

### How the Test Is Done

- A small needle takes blood from an artery (usually in the wrist)
- It feels like a sharp pinch but is over quickly
- The blood is tested right away in the hospital lab
- Results are usually ready in 15 minutes

### Common Reasons for Testing

- Trouble breathing or shortness of breath
- Suspected lung problems like pneumonia
- Monitoring patients on ventilators (breathing machines)
- Checking if treatments are working
- Before major surgery`,
      keyTerms: [
        { term: 'arterial blood gas', definition: 'A blood test that measures oxygen, carbon dioxide, and acid levels in arterial blood' },
        { term: 'oxygen level', definition: 'Amount of oxygen in the blood, measured as PaO2' },
        { term: 'carbon dioxide', definition: 'Waste gas produced by the body, measured as PaCO2' },
        { term: 'pH', definition: 'A measure of how acidic or basic the blood is' },
        { term: 'bicarbonate', definition: 'A substance in blood that helps control acidity' },
      ],
      analogies: [
        'Blood gases are like checking the exhaust and air intake of a car - they tell you how well the "engine" (your body) is running.',
        'pH is like the temperature of a swimming pool - it needs to stay in a specific range for comfort and safety.',
        'Oxygen and carbon dioxide in blood are like traffic on a two-way street - oxygen comes in, carbon dioxide goes out.',
      ],
      examples: [
        'A person with pneumonia might have low oxygen levels because their lungs are filled with fluid.',
        'Someone having an asthma attack might have high carbon dioxide because they cannot exhale properly.',
        'A patient with kidney failure might have abnormal bicarbonate levels.',
      ],
    },
    2: {
      level: 2,
      summary: 'Arterial blood gas analysis provides critical information about oxygenation, ventilation, and acid-base status. Systematic interpretation using a stepwise approach allows identification of respiratory and metabolic disorders.',
      explanation: `## Understanding ABG Components

### Primary ABG Parameters

| Parameter | Normal Range | Meaning |
|-----------|--------------|---------|
| pH | 7.35-7.45 | Blood acidity |
| PaCO2 | 35-45 mmHg | Respiratory component (ventilation) |
| PaO2 | 80-100 mmHg (room air) | Oxygenation |
| HCO3 | 22-26 mEq/L | Metabolic component |
| SaO2 | 95-100% | Oxygen saturation |
| Base Excess | -2 to +2 | Metabolic reserve |

### The Four-Step Interpretation Method

**Step 1: Assess pH**
- pH <7.35 = Acidosis (blood too acidic)
- pH >7.45 = Alkalosis (blood too basic)
- pH 7.35-7.45 = Normal or compensated

**Step 2: Determine Primary Disorder**
- Look at PaCO2 (respiratory) and HCO3 (metabolic)
- Match the abnormal value to pH change:
  - Low pH + high PaCO2 = Respiratory acidosis
  - Low pH + low HCO3 = Metabolic acidosis
  - High pH + low PaCO2 = Respiratory alkalosis
  - High pH + high HCO3 = Metabolic alkalosis

**Step 3: Check for Compensation**
- The body tries to compensate for primary disorders
- Respiratory compensation (changes in PaCO2) is rapid (minutes to hours)
- Metabolic compensation (changes in HCO3) is slow (hours to days)
- The body never overcompensates

**Step 4: Calculate Anion Gap (for metabolic acidosis)**
- Anion Gap = Na - (Cl + HCO3)
- Normal: 8-12 mEq/L
- High anion gap = Unmeasured acids present

### Acid-Base Disorders

**Respiratory Acidosis:**
- Cause: Hypoventilation (not breathing enough)
- pH low, PaCO2 high
- Examples: COPD, drug overdose, neuromuscular disease
- Compensation: Kidneys retain HCO3

**Respiratory Alkalosis:**
- Cause: Hyperventilation (breathing too fast)
- pH high, PaCO2 low
- Examples: Anxiety, pain, hypoxemia, sepsis
- Compensation: Kidneys excrete HCO3

**Metabolic Acidosis:**
- Cause: Loss of bicarbonate or gain of acid
- pH low, HCO3 low
- Examples: Diabetic ketoacidosis, renal failure, lactic acidosis
- Compensation: Lungs hyperventilate to lower PaCO2

**Metabolic Alkalosis:**
- Cause: Gain of bicarbonate or loss of acid
- pH high, HCO3 high
- Examples: Vomiting, diuretics, antacid overuse
- Compensation: Lungs hypoventilate (limited by hypoxemia)

### Oxygenation Assessment

**Alveolar Gas Equation:**
PAO2 = FiO2(Patm - PH2O) - (PaCO2/R)
- PAO2: Alveolar oxygen pressure
- FiO2: Fraction of inspired oxygen (0.21 for room air)
- R: Respiratory quotient (usually 0.8)

**A-a Gradient:**
- A-a = PAO2 - PaO2
- Normal: <10-15 mmHg (young), <20-25 mmHg (elderly)
- Elevated gradient: Problem within the lung (V/Q mismatch, shunt, diffusion limitation)
- Normal gradient: Problem outside lung (low FiO2, hypoventilation)

**PaO2/FiO2 Ratio (P/F Ratio):**
- Normal: 400-500
- <300: Acute lung injury
- <200: ARDS`,
      keyTerms: [
        { term: 'acidosis', definition: 'Condition where blood pH is below normal (<7.35), making blood too acidic' },
        { term: 'alkalosis', definition: 'Condition where blood pH is above normal (>7.45), making blood too basic' },
        { term: 'anion gap', definition: 'Difference between measured cations and anions; helps classify metabolic acidosis' },
        { term: 'compensation', definition: 'Physiologic response to counteract primary acid-base disorder' },
        { term: 'A-a gradient', definition: 'Alveolar-arterial oxygen gradient; measures efficiency of oxygen transfer' },
        { term: 'P/F ratio', definition: 'PaO2 to FiO2 ratio; used to classify severity of hypoxemic respiratory failure' },
      ],
      analogies: [
        'Acid-base balance is like a seesaw - pH is the balance point, respiratory and metabolic factors are on opposite sides.',
        'Compensation is like adjusting the thermostat - when one factor changes, the body adjusts another to maintain balance.',
        'The A-a gradient is like checking for leaks in a pipe - if there is a big difference between what should be there and what is there, something is wrong with the system.',
      ],
      examples: [
        'COPD patient: pH 7.32, PaCO2 55, HCO3 28 = Chronic respiratory acidosis with metabolic compensation.',
        'DKA patient: pH 7.25, PaCO2 25, HCO3 12 = Metabolic acidosis with respiratory compensation.',
        'Anxiety attack: pH 7.50, PaCO2 28, HCO3 22 = Acute respiratory alkalosis.',
      ],
    },
    3: {
      level: 3,
      summary: 'Advanced ABG interpretation requires understanding of Henderson-Hasselbalch equation, mixed acid-base disorders, and oxygen-hemoglobin dissociation curve physiology. Clinical correlation is essential for accurate diagnosis and management.',
      explanation: `## Advanced Acid-Base Physiology

### Henderson-Hasselbalch Equation

pH = 6.1 + log([HCO3] / (0.03 x PaCO2))

This equation describes the relationship between pH, bicarbonate, and CO2. The ratio of HCO3 to dissolved CO2 determines pH.

**Key Points:**
- When HCO3 increases or CO2 decreases -> pH increases (alkalosis)
- When HCO3 decreases or CO2 increases -> pH decreases (acidosis)
- Normal ratio of 20:1 gives pH of 7.4

### Mixed Acid-Base Disorders

Sometimes more than one disorder exists simultaneously:

**Recognizing Mixed Disorders:**
1. pH change greater than expected from single disorder
2. Compensatory response inappropriate degree
3. pH normal but PaCO2 and HCO3 both abnormal
4. Anion gap elevated but HCO3 normal or high

**Common Mixed Disorders:**
- Metabolic acidosis + respiratory acidosis (cardiac arrest, severe sepsis)
- Metabolic alkalosis + respiratory alkalosis (liver failure with diuretics)
- Metabolic acidosis + metabolic alkalosis (renal failure with vomiting)

### Metabolic Acidosis Classification

**High Anion Gap (>12):**
- MUDPILES mnemonic:
  - M: Methanol
  - U: Uremia (renal failure)
  - D: Diabetic ketoacidosis
  - P: Paraldehyde, Propylene glycol
  - I: Iron tablets, INH
  - L: Lactic acidosis
  - E: Ethylene glycol
  - S: Salicylates

**Normal Anion Gap (Hyperchloremic):**
- Causes: Diarrhea, renal tubular acidosis, dilutional, acetazolamide
- Associated with increased chloride

### Oxygen-Hemoglobin Dissociation Curve

**Key Points on the Curve:**
- Right shift (decreased affinity, easier O2 release):
  - Increased temperature
  - Increased 2,3-DPG
  - Increased PaCO2
  - Decreased pH (Bohr effect)
- Left shift (increased affinity, harder O2 release):
  - Decreased temperature
  - Decreased 2,3-DPG
  - Decreased PaCO2
  - Increased pH
  - CO poisoning, methemoglobin

**Clinical Significance:**
- Exercise: Right shift helps tissues get more O2
- Hypothermia: Left shift may impair O2 delivery despite normal saturation

### Expected Compensation Rules

**Winter\'s Formula (Metabolic Acidosis):**
Expected PaCO2 = 1.5 x [HCO3] + 8 +/- 2
- If actual PaCO2 > expected: Concurrent respiratory acidosis
- If actual PaCO2 < expected: Concurrent respiratory alkalosis

**Metabolic Alkalosis:**
Expected PaCO2 = 0.7 x [HCO3] + 20 +/- 1.5

**Acute Respiratory Acidosis:**
Expected HCO3 = 24 + (PaCO2 - 40)/10

**Chronic Respiratory Acidosis:**
Expected HCO3 = 24 + 4 x (PaCO2 - 40)/10

**Acute Respiratory Alkalosis:**
Expected HCO3 = 24 - 2 x (40 - PaCO2)/10

**Chronic Respiratory Alkalosis:**
Expected HCO3 = 24 - 5 x (40 - PaCO2)/10

### Oxygen Content Equation

CaO2 = (1.34 x Hgb x SaO2) + (0.003 x PaO2)

- Dissolved oxygen (0.003 x PaO2) contributes minimally
- Hemoglobin-bound oxygen is the major carrier
- Low hemoglobin reduces oxygen content even with normal PaO2`,
      keyTerms: [
        { term: 'Winter\'s formula', definition: 'Equation to predict expected respiratory compensation in metabolic acidosis' },
        { term: 'Bohr effect', definition: 'Right shift of oxyhemoglobin curve with decreased pH or increased CO2; enhances oxygen unloading' },
        { term: '2,3-DPG', definition: '2,3-diphosphoglycerate; compound in RBCs that decreases hemoglobin affinity for oxygen' },
        { term: 'delta gap', definition: 'Change in anion gap relative to change in bicarbonate; helps detect mixed disorders' },
        { term: 'osmolar gap', definition: 'Difference between measured and calculated osmolarity; elevated in toxic alcohol ingestion' },
      ],
      clinicalNotes: 'Always calculate expected compensation for primary disorders. If the actual values deviate from expected, a mixed disorder is present.',
    },
    4: {
      level: 4,
      summary: 'Clinical ABG interpretation integrates quantitative analysis, understanding of complex physiology, and management decisions. Topics include mechanical ventilation parameters, complex mixed disorders, and special clinical scenarios.',
      explanation: `## Clinical Applications of ABG Analysis

### ABG in Mechanical Ventilation

**Ventilator Parameters from ABG:**
- PaO2 guides FiO2 and PEEP adjustments
- PaCO2 guides respiratory rate and tidal volume
- pH guides acid-base management

**ARDSnet Ventilator Strategy:**
- Goal: Plateau pressure <30 cm H2O
- Use lowest FiO2 to maintain SpO2 88-95% or PaO2 55-80 mmHg
- Permissive hypercapnia acceptable if pH >7.25

**Permissive Hypercapnia:**
- Intentional acceptance of elevated PaCO2
- Benefits: Reduced tidal volumes, less lung injury
- Contraindications: Increased ICP, severe pulmonary hypertension, hemodynamic instability

### Special ABG Scenarios

**COPD and CO2 Retention:**
- Chronic CO2 retention: Baseline PaCO2 may be 50-60 mmHg
- Oxygen-induced hypercapnia: Supplemental O2 can worsen CO2 retention
  - Mechanisms: Loss of hypoxic drive, Haldane effect, V/Q mismatch
  - Maintain SaO2 88-92% in chronic CO2 retainers

**Lactic Acidosis:**
- Type A: Tissue hypoperfusion (shock, hypoxia)
- Type B: No tissue hypoperfusion (metformin, malignancy, mitochondrial disorders)
- Lactate >4 mmol/L associated with increased mortality
- Clearance goal: >10% per hour

**Renal Tubular Acidosis:**
- Type 1 (Distal): Cannot acidify urine, high urine pH (>5.5)
- Type 2 (Proximal): Cannot reabsorb HCO3
- Type 4 (Hyporeninemic hypoaldosteronism): Most common, associated with diabetes

**Septic Patient ABG:**
- Early: Respiratory alkalosis (hyperventilation)
- Progressive: Metabolic acidosis with elevated lactate
- Late: Combined respiratory and metabolic acidosis

### Venous Blood Gases (VBG)

**When VBG May Substitute for ABG:**
- pH: Venous typically 0.03-0.05 lower
- HCO3: Essentially equal
- PaCO2: Venous 4-6 mmHg higher

**Limitations:**
- Cannot assess oxygenation
- Not accurate in shock (poor tissue perfusion)
- Not appropriate for P/F ratio calculation

### ABG Quality Assessment

**Pre-Analytical Errors:**
- Air bubbles: Decrease PaCO2, increase pH
- Delayed analysis: Cellular metabolism consumes O2, produces CO2
- Excess heparin: Dilutional effect
- Incorrect patient identification

**Acceptable ABG:**
- Calculate H+ from pH: [H+] = 24 x (PaCO2/HCO3)
- Should match measured pH

### Point-of-Care ABG

**Benefits:**
- Rapid turnaround
- Guides immediate management
- Trending capability

**Considerations:**
- Quality control essential
- Operator training required
- Correlation with central lab periodically

### ABG in Specific Clinical Settings

**Cardiac Arrest:**
- Typically profound mixed respiratory and metabolic acidosis
- End-tidal CO2 prognostic for ROSC
- Post-arrest: Monitor for reperfusion injury

**Pregnancy:**
- Chronic respiratory alkalosis (progesterone stimulation)
- PaCO2 typically 30-32 mmHg
- Compensatory decrease in HCO3
- Do not "correct" - this is normal physiology

**High Altitude:**
- Chronic respiratory alkalosis
- Renal compensation with bicarbonate wasting
- Normal PaO2 lower than at sea level

**Pediatrics:**
- Reference ranges vary by age
- Premature infants: Higher PaCO2 acceptable
- Congenital heart disease affects interpretation`,
      keyTerms: [
        { term: 'permissive hypercapnia', definition: 'Ventilator strategy accepting elevated PaCO2 to minimize lung injury from high tidal volumes' },
        { term: 'Haldane effect', definition: 'Deoxygenated hemoglobin binds H+ and CO2 more readily, facilitating CO2 transport' },
        { term: 'delta ratio', definition: 'Ratio of change in anion gap to change in bicarbonate; quantifies mixed metabolic disorders' },
        { term: 'osmolar gap', definition: 'Difference between measured and calculated serum osmolarity; elevated in toxic alcohol poisoning' },
        { term: 'ROSC', definition: 'Return of spontaneous circulation after cardiac arrest' },
      ],
      clinicalNotes: 'In COPD patients with chronic CO2 retention, target oxygen saturation of 88-92% rather than normal ranges. Excessive oxygen can cause CO2 retention and respiratory acidosis through multiple mechanisms including loss of hypoxic drive and V/Q mismatch.',
    },
    5: {
      level: 5,
      summary: 'Expert-level blood gas analysis encompasses Stewart\'s quantitative approach to acid-base, advanced monitoring techniques, and integration of multiple data sources for complex clinical decision-making in critical care.',
      explanation: `## Stewart\'s Quantitative Acid-Base Approach

### Strong Ion Difference (SID)

Stewart\'s approach defines acid-base balance through three independent variables:
1. Strong Ion Difference (SID)
2. Total weak acid concentration (Atot)
3. PaCO2

**Strong Ion Difference:**
SID = [Strong cations] - [Strong anions]
SID = (Na + K + Ca + Mg) - (Cl + other strong anions)
Apparent SID (SIDa) measured, Effective SID (SIDe) calculated

**Normal SID:** ~40 mEq/L
- SID <40: Metabolic acidosis
- SID >40: Metabolic alkalosis

### Strong Ion Gap (SIG)

SIG = SIDa - SIDe
- Normal SIG: 0-5 mEq/L
- Elevated SIG: Unmeasured anions (lactate, ketones, toxins)

**Comparison to Traditional Approach:**
- Anion gap = SIG + (albumin effect + phosphate effect)
- Stewart approach separates effects of albumin, phosphate, unmeasured ions
- Useful in critically ill with hypoalbuminemia

### Advanced Oxygenation Assessment

**Shunt Fraction (Qs/Qt):**
Qs/Qt = (CcO2 - CaO2) / (CcO2 - CvO2)
- CcO2: End-capillary oxygen content
- CaO2: Arterial oxygen content
- CvO2: Venous oxygen content
- Normal: <5%, Critically ill: Acceptable <20-25%

**Oxygen Extraction Ratio:**
O2ER = (CaO2 - CvO2) / CaO2
- Normal: 25-30%
- Increased: Low cardiac output, anemia, hypoxemia
- Decreased: Sepsis (pathologic vasodilation)

**Mixed Venous Oxygen Saturation (SvO2):**
- Normal: 65-75%
- <60%: Inadequate oxygen delivery
- >80%: Decreased oxygen extraction (sepsis, cyanide)

### Tissue Perfusion Assessment

**Lactate Clearance:**
- Target: >10% decrease per hour
- <36% clearance at 12 hours associated with increased mortality
- Dynamic marker of resuscitation adequacy

**Central Venous Oxygen Saturation (ScvO2):**
- Substitute for SvO2 (easier to obtain)
- Normally slightly higher than SvO2
- Target >70% in early sepsis resuscitation

### ABG in ECMO

**VV-ECMO:**
- Oxygenation primarily provided by ECMO
- ABG shows "mixed" blood - native + ECMO
- Lower PaO2 acceptable if overall DO2 adequate

**VA-ECMO:**
- Both cardiac and pulmonary support
- Differential hypoxia possible (Harlequin syndrome)
- Monitor right radial ABG (pre-oxygenator blood)

### Continuous Monitoring Technologies

**Transcutaneous Monitoring:**
- Non-invasive PaCO2 and PaO2
- Requires good skin perfusion
- Useful in neonates, sleep studies

**Indwelling Arterial Sensors:**
- Continuous intra-arterial blood gas monitoring
- Trends without repeated arterial puncture
- Cost and calibration considerations

### Evidence-Based Applications

**Sepsis Bundles:**
- Lactate measurement within 3 hours
- Repeat if initial >2 mmol/L
- Guides fluid resuscitation

**ARDS Management:**
- P/F ratio stratifies severity
- Target PaO2 55-80 or SpO2 88-95%
- Avoid hyperoxia (PaO2 >100 may be harmful)

**Cardiac Surgery:**
- Mixed venous oxygen saturation monitoring
- Lactate trending
- Base deficit prognostic

### Research Applications

**Precision Medicine:**
- Individualized oxygen targets
- Personal CO2 tolerance
- Optimal acid-base targets

**Artificial Intelligence:**
- Pattern recognition in ABG trends
- Early warning systems
- Predictive models for deterioration`,
      keyTerms: [
        { term: 'Stewart approach', definition: 'Quantitative method for analyzing acid-base disorders based on strong ion difference' },
        { term: 'strong ion difference', definition: 'Difference between strong cations and strong anions; independent determinant of pH' },
        { term: 'shunt fraction', definition: 'Proportion of blood passing through lungs without being oxygenated' },
        { term: 'oxygen extraction ratio', definition: 'Fraction of delivered oxygen consumed by tissues' },
        { term: 'differential hypoxia', definition: 'Condition in VA-ECMO where upper body hypoxic while lower body well-oxygenated' },
      ],
      clinicalNotes: 'In complex critically ill patients with hypoalbuminemia, Stewart\'s approach may provide clearer understanding of acid-base disorders than traditional methods. SIG >5 mEq/L indicates unmeasured anions even when albumin is low.',
    },
  },

  media: [],

  citations: [
    {
      id: 'abg-interpretation-guide',
      type: 'article',
      title: 'Arterial Blood Gas Interpretation: A Case Study Approach',
      authors: ['Williams AJ'],
      source: 'American Journal of Critical Care',
    },
    {
      id: 'stewart-acid-base',
      type: 'textbook',
      title: 'Stewart\'s Textbook of Acid-Base',
      authors: ['Kellum JA', 'Elbers PWG'],
      source: 'AcidBase.org',
    },
    {
      id: 'ats-abg-guidelines',
      type: 'article',
      title: 'Interpretation of Arterial Blood Gases',
      source: 'American Thoracic Society',
    },
  ],

  crossReferences: [
    { targetId: 'clinical-mechanical-ventilation-basics', targetType: 'concept', relationship: 'related', label: 'Mechanical Ventilation' },
    { targetId: 'condition-copd', targetType: 'condition', relationship: 'related', label: 'COPD' },
    { targetId: 'respiratory-failure', targetType: 'condition', relationship: 'related', label: 'Respiratory Failure' },
    { targetId: 'physiology-gas-exchange', targetType: 'concept', relationship: 'related', label: 'Gas Exchange' },
  ],

  tags: {
    systems: ['respiratory', 'renal'],
    topics: ['critical-care', 'pulmonology', 'acid-base', 'clinical-medicine'],
    keywords: ['ABG', 'blood gas', 'acid-base', 'pH', 'oxygenation', 'ventilation', 'PaCO2', 'HCO3'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pulmonology', 'critical-care'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default arterialBloodGasesContent;
