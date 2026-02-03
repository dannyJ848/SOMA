/**
 * Acid-Base Disorders - Clinical Educational Content
 *
 * Covers metabolic and respiratory acidosis/alkalosis,
 * compensation mechanisms, and clinical interpretation.
 */

import { EducationalContent } from '../../types';

export const acidBaseDisorders: EducationalContent = {
  id: 'clinical-acid-base-disorders',
  type: 'condition',
  name: 'Acid-Base Disorders',
  alternateNames: ['Acid-Base Imbalance', 'pH Disorders', 'Metabolic Acidosis', 'Metabolic Alkalosis', 'Respiratory Acidosis', 'Respiratory Alkalosis'],

  levels: {
    1: {
      level: 1,
      summary: 'Acid-base disorders happen when the balance of acids and bases in your blood gets out of whack, making your blood too acidic or too alkaline.',
      explanation: `Your blood needs to stay at just the right level of acidity - not too sour, not too bitter. This is called your pH. Healthy blood pH is around 7.4, which is slightly alkaline.

Think of it like a swimming pool. If the pool water gets too acidic (like adding too much chlorine), it can irritate your skin and eyes. If it gets too alkaline, other problems happen. Your body works hard to keep your blood pH balanced.

**The Four Main Problems:**

1. **Metabolic Acidosis** - Your body makes too much acid or loses too much base. It is like adding lemon juice to water.

2. **Metabolic Alkalosis** - Your body loses too much acid or gains too much base. It is like adding baking soda to water.

3. **Respiratory Acidosis** - Your lungs cannot blow off enough carbon dioxide (a type of acid). This happens with lung diseases or slow breathing.

4. **Respiratory Alkalosis** - Your lungs blow off too much carbon dioxide. This happens with fast breathing from anxiety or pain.

Your body has built-in systems to fix these problems, but sometimes doctors need to help.`,
      keyTerms: [
        { term: 'pH', definition: 'A scale that measures how acidic or alkaline something is; 7 is neutral, below 7 is acidic, above 7 is alkaline' },
        { term: 'acidosis', definition: 'When blood becomes too acidic (pH drops too low)' },
        { term: 'alkalosis', definition: 'When blood becomes too alkaline (pH rises too high)' },
        { term: 'metabolic', definition: 'Related to the body\'s chemical processes and metabolism' },
        { term: 'respiratory', definition: 'Related to breathing and the lungs' },
      ],
      analogies: [
        'Acid-base balance is like the temperature control in your house - you want it just right, not too hot or too cold.',
        'Your lungs work like the exhaust fan in a kitchen, blowing away the carbon dioxide "smoke" your body makes.',
        'Your kidneys are like a water treatment plant, filtering out acids and adjusting the chemical balance.',
      ],
      examples: [
        'Diabetic ketoacidosis is a type of metabolic acidosis that happens when someone with diabetes has very high blood sugar.',
        'Hyperventilating during a panic attack causes respiratory alkalosis - you breathe out too much CO2 and get lightheaded.',
        'Vomiting a lot can cause metabolic alkalosis because you lose stomach acid.',
      ],
    },
    2: {
      level: 2,
      summary: 'Acid-base disorders involve disruptions in blood pH homeostasis through metabolic or respiratory mechanisms, with compensatory responses from the kidneys and lungs.',
      explanation: `Blood pH is tightly regulated between 7.35 and 7.45. Acid-base disorders occur when this balance is disrupted, either through changes in bicarbonate (metabolic) or carbon dioxide (respiratory) levels.

**Primary Disorders:**

**Metabolic Acidosis** (Low HCO3-)
- Causes: Diabetic ketoacidosis, lactic acidosis, renal failure, diarrhea, toxin ingestion
- Characterized by increased anion gap (normal: 8-12 mEq/L) in many cases
- Body compensates by hyperventilating (Kussmaul breathing) to lower CO2

**Metabolic Alkalosis** (High HCO3-)
- Causes: Vomiting, diuretic use, hyperaldosteronism, volume contraction
- Often associated with hypokalemia
- Body compensates by hypoventilating (retaining CO2)

**Respiratory Acidosis** (High CO2)
- Causes: COPD, pneumonia, opioid overdose, neuromuscular weakness
- Acute vs chronic: Kidneys compensate over days by retaining bicarbonate

**Respiratory Alkalosis** (Low CO2)
- Causes: Anxiety/hyperventilation, hypoxia, early sepsis, salicylate toxicity
- Acute vs chronic: Kidneys compensate by excreting bicarbonate

**The Anion Gap:**
Calculated as: Na+ - (Cl- + HCO3-)
- High anion gap (>12): Addition of unmeasured acids (lactate, ketones, toxins)
- Normal anion gap: Loss of bicarbonate (diarrhea) or failure to excrete acid (RTA)

**Compensation:**
The body tries to compensate for primary disorders:
- Metabolic disorders: Lungs compensate within minutes
- Respiratory disorders: Kidneys compensate over 2-3 days`,
      keyTerms: [
        { term: 'anion gap', definition: 'Calculated value reflecting unmeasured anions in blood; elevated when acids like lactate or ketones accumulate' },
        { term: 'bicarbonate', definition: 'HCO3-; the main blood buffer that neutralizes acids', pronunciation: 'bye-KAR-buh-nate' },
        { term: 'Kussmaul breathing', definition: 'Deep, rapid breathing pattern seen in severe metabolic acidosis as the body tries to compensate' },
        { term: 'compensation', definition: 'The body\'s attempt to correct pH by changing the opposite component (lungs compensate metabolic, kidneys compensate respiratory)' },
        { term: 'buffer', definition: 'A chemical system that resists changes in pH by accepting or donating hydrogen ions' },
      ],
      analogies: [
        'The Henderson-Hasselbalch equation is like a seesaw - if HCO3- goes down, pH goes down; if CO2 goes up, pH goes down.',
        'Compensation is like a thermostat - when the temperature drifts, the system works to bring it back to normal.',
      ],
    },
    3: {
      level: 3,
      summary: 'Acid-base physiology involves the Henderson-Hasselbalch equation, buffer systems, and integrated respiratory and renal compensation mechanisms to maintain extracellular fluid pH within narrow limits.',
      explanation: `**Fundamental Equation:**
The Henderson-Hasselbalch equation governs blood pH:
pH = 6.1 + log([HCO3-] / (0.03 x pCO2))

Normal values:
- pH: 7.35-7.45
- pCO2: 35-45 mmHg
- HCO3-: 22-26 mEq/L

**Buffer Systems:**

1. **Bicarbonate Buffer (Most important in ECF):**
   - CO2 + H2O <-> H2CO3 <-> H+ + HCO3-
   - H2CO3 is carbonic acid (weak acid)
   - HCO3- is bicarbonate (weak base)
   - Carbonic anhydrase catalyzes CO2 + H2O reaction

2. **Phosphate Buffer:**
   - H2PO4- <-> H+ + HPO4²-
   - Important in intracellular fluid and urine

3. **Protein Buffers (Intracellular):**
   - Hemoglobin (most abundant)
   - Plasma proteins
   - Histidine residues bind H+

**Respiratory Regulation:**
- Rate of CO2 elimination controlled by medullary chemoreceptors
- Responds to pH changes within minutes
- CO2 + H2O forms carbonic acid, lowering pH

**Renal Regulation:**
- Reabsorption of filtered HCO3- (99.9% reabsorbed)
- Generation of new HCO3- through:
  - Titratable acid excretion (H2PO4-)
  - Ammonium excretion (NH4+)
- Takes 2-3 days for full effect

**Metabolic Acidosis Pathophysiology:**

High Anion Gap (Addition of acid):
- MUDPILES: Methanol, Uremia, DKA, Paraldehyde, INH, Lactic acidosis, Ethylene glycol, Salicylates
- Elevated lactate: Type A (tissue hypoperfusion) vs Type B (metabolic causes)
- Ketoacids: B-hydroxybutyrate, acetoacetate

Normal Anion Gap (Loss of bicarbonate or failure to excrete acid):
- GI losses: Diarrhea, fistulas
- Renal causes: RTA types 1, 2, 4
- Dilutional acidosis

**Metabolic Alkalosis Pathophysiology:**

Generation phase (gain of HCO3- or loss of H+):
- Vomiting/NG suction (loss of gastric HCl)
- Diuretics (volume contraction alkalosis)
- Mineralocorticoid excess

Maintenance phase (requires impaired renal HCO3- excretion):
- Hypovolemia (increased HCO3- reabsorption)
- Hypokalemia (intracellular shift of H+, increased H+ secretion)
- Chloride depletion

**Respiratory Acidosis Pathophysiology:**
- Acute: pH drops 0.08 per 10 mmHg rise in pCO2
- Chronic: pH drops 0.03 per 10 mmHg rise (renal compensation)
- Causes: Central (opioids, stroke), airway obstruction, parenchymal (COPD, pneumonia), neuromuscular

**Respiratory Alkalosis Pathophysiology:**
- Acute: pH rises 0.08 per 10 mmHg drop in pCO2
- Chronic: pH rises 0.03 per 10 mmHg drop (renal compensation)
- Causes: Hypoxemia, pulmonary disease, CNS stimulation, anxiety, early sepsis`,
      keyTerms: [
        { term: 'Henderson-Hasselbalch equation', definition: 'Equation relating pH to bicarbonate and CO2 concentrations; pH = 6.1 + log([HCO3-]/(0.03xpCO2))' },
        { term: 'titratable acid', definition: 'Acid excreted in urine primarily as dihydrogen phosphate (H2PO4-), which can be titrated with base' },
        { term: 'ammonium excretion', definition: 'Renal mechanism of acid excretion combining ammonia (NH3) with secreted H+ to form NH4+' },
        { term: 'carbonic anhydrase', definition: 'Enzyme catalyzing CO2 + H2O <-> H2CO3; present in proximal tubule and red blood cells', pronunciation: 'an-HIGH-drase' },
        { term: 'RTA', definition: 'Renal tubular acidosis; failure of kidneys to acidify urine appropriately' },
      ],
      clinicalNotes: 'Winter\'s formula predicts expected pCO2 in metabolic acidosis: Expected pCO2 = (1.5 x HCO3-) + 8 +/- 2. Compensation is considered appropriate if measured pCO2 is within this range.',
    },
    4: {
      level: 4,
      summary: 'Clinical interpretation of acid-base disorders requires systematic approach using arterial blood gas analysis, anion gap calculation, and delta-delta analysis to identify mixed disorders and determine appropriate therapeutic interventions.',
      explanation: `**Systematic ABG Interpretation:**

Step 1: Assess pH
- pH < 7.35: Acidemia
- pH > 7.45: Alkalemia
- pH 7.35-7.45: Normal or mixed disorder with complete compensation

Step 2: Identify Primary Disorder
- Low HCO3- + low pH = Metabolic acidosis
- High HCO3- + high pH = Metabolic alkalosis
- High pCO2 + low pH = Respiratory acidosis
- Low pCO2 + high pH = Respiratory alkalosis

Step 3: Assess Compensation

**Metabolic Acidosis Compensation (Winter\'s Formula):**
Expected pCO2 = (1.5 x [HCO3-]) + 8 +/- 2
- Measured pCO2 > expected: Concurrent respiratory acidosis
- Measured pCO2 < expected: Concurrent respiratory alkalosis

**Metabolic Alkalosis Compensation:**
Expected pCO2 = (0.7 x [HCO3-]) + 20 +/- 1.5
- Upper limit: pCO2 rarely exceeds 55 mmHg

**Respiratory Acidosis Compensation:**
- Acute: HCO3- increases 1 mEq/L per 10 mmHg pCO2 rise
- Chronic: HCO3- increases 3.5-4 mEq/L per 10 mmHg pCO2 rise

**Respiratory Alkalosis Compensation:**
- Acute: HCO3- decreases 2 mEq/L per 10 mmHg pCO2 drop
- Chronic: HCO3- decreases 4-5 mEq/L per 10 mmHg pCO2 drop

Step 4: Calculate Anion Gap
Anion gap = Na+ - (Cl- + HCO3-)
- Normal: 8-12 mEq/L (albumin-corrected: add 2.5 per 1 g/dL below 4)

Step 5: Delta-Delta Analysis (if high anion gap)
Delta gap = (Measured anion gap - 12) / (24 - Measured HCO3-)
- Ratio 1-2: Pure anion gap metabolic acidosis
- Ratio < 1: Combined high AG + normal AG metabolic acidosis
- Ratio > 2: Combined metabolic acidosis + metabolic alkalosis

**Step 6: Assess Oxygenation**
A-a gradient = PAO2 - PaO2
PAO2 = FiO2(Patm - PH2O) - (PaCO2/0.8)
- Normal A-a: < 15 (young), < 20 (elderly)
- Elevated A-a: V/Q mismatch, shunt, diffusion limitation
- Normal A-a: Hypoventilation, low FiO2

**Clinical Applications:**

**Metabolic Acidosis Management:**
- Calculate osmolar gap if toxic alcohol suspected: Measured osm - Calculated osm > 10 suggests methanol/ethylene glycol
- Bicarbonate therapy controversial; generally reserved for pH < 7.1 or hemodynamic compromise
- Treat underlying cause (insulin for DKA, fluids for sepsis, dialysis for uremia)

**Metabolic Alkalosis Management:**
- Chloride-responsive (urine Cl- < 20): Volume repletion with normal saline
- Chloride-resistant (urine Cl- > 20): Treat underlying cause (mineralocorticoid excess)
- Potassium repletion critical
- Acetazolamide for severe cases

**Respiratory Acidosis Management:**
- Treat underlying cause
- Non-invasive or invasive ventilation as needed
- Caution with oxygen in COPD patients (risk of CO2 retention)

**Respiratory Alkalosis Management:**
- Treat underlying cause (anxiolytics for anxiety, oxygen for hypoxia)
- Rebreathing techniques for psychogenic causes`,
      keyTerms: [
        { term: 'delta-delta', definition: 'Calculation comparing the change in anion gap to the change in bicarbonate to detect mixed metabolic disorders' },
        { term: 'A-a gradient', definition: 'Alveolar-arterial oxygen gradient; measures efficiency of oxygen transfer from alveoli to blood' },
        { term: 'osmolar gap', definition: 'Difference between measured and calculated serum osmolality; elevated with unmeasured osmoles like toxic alcohols' },
        { term: 'Winter\'s formula', definition: 'Expected respiratory compensation in metabolic acidosis: Expected pCO2 = (1.5 x HCO3-) + 8 +/- 2' },
        { term: 'albumin correction', definition: 'Adjustment of anion gap for hypoalbuminemia: AG_corrected = AG_measured + 2.5 x (4 - albumin)' },
      ],
      clinicalNotes: 'Clinical pearl: In salicylate toxicity, look for both anion gap metabolic acidosis AND respiratory alkalosis (mixed disorder). The respiratory alkalosis component often dominates initially, especially in adults.',
    },
    5: {
      level: 5,
      summary: 'Advanced acid-base physiology encompasses Stewart\'s quantitative approach (strong ion difference), complex mixed disorders, and the clinical integration of acid-base analysis in critical care, including lactate physiology and the limitations of traditional approaches.',
      explanation: `**Stewart\'s Quantitative Approach:**

The traditional Henderson-Hasselbalch approach has limitations in complex ICU patients. Stewart\'s physicochemical approach identifies three independent variables that determine pH:

1. **Strong Ion Difference (SID):**
   SID = [Strong cations] - [Strong anions]
   Apparent SID = (Na+ + K+ + Ca2+ + Mg2+) - (Cl- + lactate-)
   Effective SID = [HCO3-] + [A-] (weak acids)
   Normal SID: ~40 mEq/L
   - Decreased SID -> metabolic acidosis
   - Increased SID -> metabolic alkalosis

2. **Total Weak Acid Concentration (Atot):**
   Primarily albumin and phosphate
   - Increased Atot (hyperproteinemia) -> metabolic acidosis
   - Decreased Atot (hypoalbuminemia) -> metabolic alkalosis

3. **pCO2:**
   As in traditional approach

**Complex Mixed Disorders:**

**Triple Acid-Base Disorder:**
Example: Septic patient with
- Metabolic acidosis (lactate from hypoperfusion)
- Respiratory alkalosis (early sepsis hyperventilation)
- Metabolic alkalosis (vomiting from GI symptoms)

**Step-by-Step Stewart Analysis:**
1. Calculate SIG (Strong Ion Gap) = Apparent SID - Effective SID
   - SIG > 2: Unmeasured anions present
2. Assess albumin and phosphate (Atot)
3. Evaluate free water effect on SID

**Lactate Physiology:**

**Production:**
- Major source: Glycolysis (anaerobic)
- Tissues: Skin, red blood cells, brain, muscle
- Normal production: ~1300 mmol/day

**Clearance:**
- Primary: Liver (60%), kidney (30%)
- Enzymes: Lactate dehydrogenase, cytoplasmic and mitochondrial

**Lactate Types:**
- **Type A:** Tissue hypoperfusion (shock, severe hypoxia)
- **Type B:** Metabolic causes (thiamine deficiency, malignancy, medications, mitochondrial dysfunction)
- **D-Lactate:** Short bowel syndrome, diabetic ketoacidosis

**Clinical significance:**
- Mortality increases with lactate level
- > 4 mmol/L associated with ~30% mortality
- Lactate clearance > 10% in first 6 hours of resuscitation associated with improved outcomes

**Advanced Calculations:**

**Corrected Chloride:**
Cl-corrected = Cl-measured x (140 / Na+measured)
- Accounts for dilutional effect

**Base Excess:**
- Standard base excess (SBE): In vitro titration to pH 7.40 at pCO2 40
- Actual base excess: In vivo calculation
- SBE < -5 = metabolic acidosis
- SBE > +5 = metabolic alkalosis
- More reliable than HCO3- alone in respiratory disorders

**Anion Gap Variants:**

**Albumin Correction:**
AG_corrected = AG_measured + 2.5 x (4.0 - albumin)
- Critical in ICU where hypoalbuminemia is common
- Uncorrected AG may miss significant acidosis

**Lithium Effects:**
- Lithium is an unmeasured cation
- Lowers anion gap (may mask high AG acidosis)

**Advanced Clinical Scenarios:**

**Cardiac Arrest:**
- Profound lactic acidosis from global ischemia
- CO2 accumulation during CPR
- Sodium bicarbonate controversial; may worsen intracellular acidosis

**Liver Failure:**
- Impaired lactate clearance
- Respiratory alkalosis (hepatic encephalopathy -> hyperventilation)
- Often metabolic alkalosis from diuretic use

**Pregnancy:**
- Chronic respiratory alkalosis (progesterone stimulation)
- Compensatory metabolic acidosis (lower HCO3-)
- Normal HCO3- in pregnancy: ~20 mEq/L

**Altitude:**
- Chronic respiratory alkalosis from hypoxic drive
- Renal compensation over days

**ICU-Specific Considerations:**

**Limitations of Traditional Approach:**
- Hypoalbuminemia masks anion gap acidosis
- Hyperchloremia from saline resuscitation
- Multiple simultaneous processes

**Stewart Approach in Practice:**
- Identifies role of hyperchloremia
- Quantifies effect of albumin
- More accurate in complex patients
- However: More complex, not universally adopted

**Clinical Integration:**
1. Start with traditional approach for initial assessment
2. Calculate corrected anion gap in hypoalbuminemic patients
3. Consider Stewart approach when traditional approach does not explain findings
4. Always treat the patient, not the numbers`,
      keyTerms: [
        { term: 'Stewart approach', definition: 'Physicochemical method of acid-base analysis based on strong ion difference, weak acids, and CO2 as independent variables' },
        { term: 'strong ion difference', definition: 'SID; difference between strong cations and strong anions; major determinant of pH in Stewart approach' },
        { term: 'SIG', definition: 'Strong ion gap; difference between apparent and effective SID; indicates unmeasured anions similar to traditional anion gap' },
        { term: 'Atot', definition: 'Total concentration of non-volatile weak acids (primarily albumin and phosphate)' },
        { term: 'base excess', definition: 'Amount of acid or base needed to titrate blood to normal pH at normal pCO2; reflects metabolic component' },
        { term: 'D-lactate', definition: 'Enantiomer of L-lactate produced by bacterial fermentation; not measured by standard assays' },
      ],
      clinicalNotes: `Clinical pearls:
1. In ICU patients, ALWAYS correct anion gap for albumin: AG_corrected = AG_measured + 2.5 x (4 - albumin)
2. A "normal" anion gap of 12 in a patient with albumin of 2.0 g/dL actually represents a significant unmeasured anion load
3. Lactate > 4 mmol/L in sepsis mandates aggressive resuscitation regardless of other parameters
4. The base excess is more reliable than HCO3- when assessing metabolic contribution in patients with respiratory disorders
5. Saline-induced hyperchloremic metabolic acidosis is common in resuscitated patients - consider balanced crystalloids
6. In cardiac arrest, focus on high-quality CPR; bicarbonate has limited role and may worsen outcomes`,
    },
  },

  media: [
    {
      id: 'acid-base-nomogram',
      type: 'diagram',
      filename: 'acid-base-nomogram.svg',
      title: 'Acid-Base Disorder Nomogram',
      description: 'Visual tool for identifying acid-base disorders based on pH, pCO2, and HCO3- values',
    },
  ],

  citations: [
    {
      id: 'berend-acid-base',
      type: 'textbook',
      title: 'Acid-Base Disorders',
      authors: ['Berend, K.'],
      source: 'Clinical Physiology of Acid-Base and Electrolyte Disorders',
    },
    {
      id: 'kellum-stewart',
      type: 'article',
      title: 'Determinants of Blood pH in Health and Disease',
      authors: ['Kellum, J.A.'],
      source: 'Critical Care',
    },
  ],

  crossReferences: [
    { targetId: 'structure-nephron', targetType: 'structure', relationship: 'related', label: 'Nephron Structure' },
    { targetId: 'condition-renal-tubular-acidosis', targetType: 'condition', relationship: 'related', label: 'Renal Tubular Acidosis' },
    { targetId: 'clinical-electrolyte-abnormalities', targetType: 'condition', relationship: 'related', label: 'Electrolyte Abnormalities' },
  ],

  tags: {
    systems: ['renal', 'respiratory'],
    topics: ['physiology', 'pathophysiology', 'clinical'],
    keywords: ['acid-base', 'pH', 'metabolic acidosis', 'respiratory alkalosis', 'anion gap', 'ABG'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default acidBaseDisorders;
