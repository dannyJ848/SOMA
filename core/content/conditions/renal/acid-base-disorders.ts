/**
 * Acid-Base Disorders - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const acidBaseDisorders: EducationalContent = {
  id: 'condition-acid-base-disorders',
  type: 'condition',
  name: 'Acid-Base Disorders',
  alternateNames: ['Acidemia', 'Alkalemia', 'pH Imbalance', 'Acidosis', 'Alkalosis'],
  hpoId: 'HP:0001948',

  levels: {
    1: {
      level: 1,
      summary: 'Acid-base disorders occur when your body has too much acid or base, which can affect breathing, kidney function, and many other body processes.',
      explanation: `Your body constantly balances acid and base to keep your blood at the right pH level (around 7.4). When this balance is disturbed, you can develop an acid-base disorder.

**What is pH?**
- Measures how acidic or basic blood is
- Normal: 7.35-7.42
- Below 7.35: Too acidic (acidosis)
- Above 7.42: Too basic (alkalosis)

**Two Main Types:**
- **Respiratory:** Lungs not breathing out enough CO2 (acid) or breathing out too much
- **Metabolic:** Kidneys not removing acid properly, or losing/gaining acid from other causes

**What Causes These Disorders:**
- Lung diseases (asthma, COPD, pneumonia)
- Kidney problems
- Diabetes
- Severe vomiting or diarrhea
- Certain medications
- Poisoning

**Symptoms:**
- Confusion
- Fast or slow breathing
- Fatigue
- Nausea
- Irregular heartbeat (severe cases)

**Treatment:**
- Treat the underlying cause
- Help lungs breathe properly (oxygen, breathing support)
- Help kidneys balance acids (fluids, medications)
- Sometimes need dialysis for severe cases`,
      keyTerms: [
        { term: 'pH', definition: 'Measure of acidity or alkalinity; normal blood pH is 7.35-7.42' },
        { term: 'acidosis', definition: 'Too much acid in blood; pH below 7.35' },
        { term: 'alkalosis', definition: 'Too much base in blood; pH above 7.42' },
        { term: 'CO2', definition: 'Carbon dioxide; waste product removed by lungs' },
      ],
      analogies: ['Your body pH is like a swimming pool—when the chemicals are off, the water becomes too acidic or too basic, and things do not work properly.'],
      examples: ['A diabetic who forgets insulin may develop rapid breathing as the body tries to blow off excess acid from ketoacidosis.'],
    },
    2: {
      level: 2,
      summary: 'Acid-base disorders are classified as respiratory or metabolic, acidosis or alkalosis, with compensation by the other system, diagnosed using arterial blood gas analysis with a systematic approach.',
      explanation: `## Primary Disorders

**Respiratory Acidosis (High CO2):**
- Primary problem: Lungs not removing CO2
- CO2 >45 mmHg, pH <7.35
- Causes: COPD, drug overdose, neuromuscular disease

**Respiratory Alkalosis (Low CO2):**
- Primary problem: Lungs removing too much CO2
- CO2 <35 mmHg, pH >7.42
- Causes: Anxiety, pain, hypoxia, PE, asthma

**Metabolic Acidosis (Low HCO3):**
- Primary problem: Too much acid or lost bicarbonate
- HCO3 <22 mEq/L, pH <7.35
- Causes: DKA, lactic acidosis, kidney failure, diarrhea

**Metabolic Alkalosis (High HCO3):**
- Primary problem: Too much base or lost acid
- HCO3 >26 mEq/L, pH >7.42
- Causes: Vomiting, diuretics, hyperaldosteronism

## Compensation

**Basic Rules:**
- Respiratory disorders: Kidneys compensate (slow, takes days)
- Metabolic disorders: Lungs compensate (fast, minutes to hours)
- Compensation never fully corrects pH

| Primary Disorder | Compensation | Expected Change |
|------------------|--------------|-----------------|
| Respiratory acidosis | Metabolic | HCO3 increases |
| Respiratory alkalosis | Metabolic | HCO3 decreases |
| Metabolic acidosis | Respiratory | CO2 decreases |
| Metabolic alkalosis | Respiratory | CO2 increases |

## Anion Gap

**Formula:** Na - (Cl + HCO3)
- Normal: 8-12 mEq/L

**High Anion Gap Acidosis:**
- Increased unmeasured anions
- Causes: Ketoacidosis, lactic acidosis, toxic alcohols, uremia

**Normal Anion Gap Acidosis:**
- Loss of bicarbonate
- Causes: Diarrhea, renal tubular acidosis, carbonic anhydrase inhibitors

## ABG Interpretation Steps
1. Check pH: Acidemic or alkalemic?
2. Check CO2: Respiratory component
3. Check HCO3: Metabolic component
4. Identify primary disorder
5. Check if compensation is appropriate
6. Calculate anion gap if metabolic acidosis`,
      keyTerms: [
        { term: 'ABG', definition: 'Arterial blood gas; test measuring pH, CO2, and oxygen levels in blood' },
        { term: 'anion gap', definition: 'Difference between sodium and sum of chloride and bicarbonate; helps diagnose acidosis causes' },
        { term: 'compensation', definition: 'Body\'s response to correct pH by using the other system (lungs or kidneys)' },
        { term: 'DKA', definition: 'Diabetic ketoacidosis; serious diabetes complication causing high anion gap acidosis' },
      ],
    },
    3: {
      level: 3,
      summary: 'Acid-base physiology involves Henderson-Hasselbalch equation, buffer systems, respiratory control via chemoreceptors, and renal compensation through acid excretion and bicarbonate reabsorption, with mixed disorders commonly occurring in critically ill patients.',
      explanation: `## Henderson-Hasselbalch Equation

The equation is: pH = 6.1 + log([HCO3]/[0.03 times PCO2])

- This relationship determines blood pH
- HCO3: Metabolic component (kidney regulated)
- PCO2: Respiratory component (lung regulated)
- Normal ratio: 20:1 (HCO3:PCO2)

## Buffer Systems

**Bicarbonate Buffer System (Primary):**
- CO2 + H2O in equilibrium with H2CO3 which forms H+ and HCO3-
- Most important ECF buffer
- Regulated by lungs (CO2) and kidneys (HCO3)

**Other Buffers:**
- Hemoglobin: Intracellular buffer for CO2
- Phosphate: Important in urine, ICF
- Proteins: Albumin, intracellular proteins
- Bone: Calcium carbonate releases with chronic acidosis

## Respiratory Regulation

**Central Chemoreceptors (Medulla):**
- Respond to increased CSF CO2 (decreased pH)
- Primary driver of ventilation
- Response within minutes

**Peripheral Chemoreceptors (Carotid, Aortic Bodies):**
- Respond to low PaO2, high CO2, low pH
- Important in hypoxic respiratory drive

## Renal Acid Excretion

**Bicarbonate Reabsorption:**
- 85% reabsorbed in proximal tubule
- Nearly complete in thick ascending limb
- Result: Filtered HCO3 fully reabsorbed

**Acid Excretion:**
- **Titratable acidity:** H+ buffered by phosphate
- **Ammoniagenesis:** NH3 + H+ forms NH4+
  - Adaptive: Increases with chronic acid load
  - Major mechanism of eliminating acid

**Net Acid Excretion:**
- Titratable acidity + NH4+ - HCO3 loss

## Compensation Calculations

**Winter's Formula (for respiratory acidosis):**
Expected HCO3 = 24 + 1.5 times (measured CO2 - 40)
- Acute: HCO3 increases by 4 for every 10 CO2 increase
- Chronic: HCO3 increases by 4 for every 10 CO2 increase (with 3-5 days)

**Metabolic Acidosis Compensation:**
Expected CO2 = (1.5 times HCO3) + 8 plus/minus 2
- CO2 decreases by 1.25 for every 1 HCO3 decrease

**Metabolic Alkalosis Compensation:**
Expected CO2 = 40 + 0.6 times (HCO3 - 24)

## Mixed Disorders

**Clues:**
- Compensation is "inappropriate" (more or less than expected)
- Normal pH with abnormal CO2 and HCO3 suggests mixed disorder
- High anion gap acidosis with elevated HCO3 suggests concomitant metabolic alkalosis

## Specific Acid-Base Disorders

**Lactic Acidosis:**
- Type A: Tissue hypoxia (shock, hypoxia)
- Type B: No hypoxia (liver failure, toxins, malignancy)

**Ketoacidosis:**
- DKA (diabetes)
- Alcoholic ketoacidosis
- Starvation ketosis

**RTA (Renal Tubular Acidosis):**
- Type 1 (Distal): Inability to excrete H+
- Type 2 (Proximal): Inability to reabsorb HCO3
- Type 4 (Hyperkalemic): Aldosterone deficiency/resistance`,
      keyTerms: [
        { term: 'Henderson-Hasselbalch', definition: 'Equation relating pH, bicarbonate, and CO2; foundation of acid-base physiology' },
        { term: 'titratable acidity', definition: 'Acid excreted in urine buffered by phosphate' },
        { term: 'ammoniagenesis', definition: 'Production of ammonia by kidneys to excrete acid' },
        { term: 'RTA', definition: 'Renal tubular acidosis; inability of kidneys to properly acidify urine' },
        { term: 'Winter\'s formula', definition: 'Calculates expected bicarbonate for respiratory acidosis compensation' },
      ],
      clinicalNotes: 'Always calculate the anion gap in metabolic acidosis. If high anion gap, calculate the "gap gap" to identify mixed metabolic disorders. A normal pH with abnormal CO2 and HCO3 indicates a mixed disorder.',
    },
    4: {
      level: 4,
      summary: 'Advanced acid-base management includes complex mixed disorders, Stewart-Fencl physicochemical approach, and specific therapy for intoxication-related acidosis and renal tubular acidosis.',
      explanation: `## Delta-Delta Gap (Gap-Gap)

**Purpose:** Detect mixed high anion gap + normal anion gap metabolic acidosis

**Calculation:**
1. Calculate anion gap (AG)
2. Delta AG = AG - 12
3. Delta HCO3 = 24 - measured HCO3
4. Delta-delta = Delta AG - Delta HCO3

**Interpretation:**
- Delta-delta = 0: Pure high AG acidosis
- Delta-delta > 0: High AG + normal AG acidosis
- Delta-delta < 0: High AG acidosis + metabolic alkalosis

## Stewart-Fencl Approach

**Three Independent Variables Determine pH:**
1. **SID (Strong Ion Difference):** (Na + K + Mg + Ca) - (Cl + lactate)
2. **ATOT (Total weak acids):** Primarily albumin, phosphate
3. **PaCO2:** Respiratory component

**Advantages:**
- Explains unmeasured anions and cations
- Accounts for albumin effect on anion gap
- Identifies "hidden" disorders
- Better predicts outcomes in critically ill

**Corrected Anion Gap (for hypoalbuminemia):**
AG + 2.5 times (4 - albumin)
- Important in malnutrition, liver disease, critical illness

## Complex Mixed Disorders

**Example: COPD Exacerbation + Diuretic Use:**
- Primary: Chronic respiratory acidosis (CO2 70)
- Compensation: Elevated HCO3 (38)
- Superimposed: Metabolic alkalosis from diuretic (HCO3 45)
- Results: Inappropriate compensation for respiratory acidosis

**Triple Disorder:**
- Metabolic acidosis + Metabolic alkalosis + Respiratory acidosis/alkalosis
- Common in critically ill, renal failure, diuretic use

## Intoxication-Related Acidosis

**Methanol:**
- Metabolized to formic acid
- High anion gap metabolic acidosis
- Osmolar gap present
- Visual disturbances
- Treatment: Fomepizole, hemodialysis

**Ethylene Glycol:**
- Metabolized to glycolic, oxalic acid
- High anion gap metabolic acidosis
- Osmolar gap present
- Calcium oxalate crystals in urine
- Renal failure
- Treatment: Fomepizole, pyridoxine, thiamine, dialysis

**Propylene Glycol:**
- From IV medications (lorazepam, phenobarbital)
- Causes high AG metabolic acidosis
- Osmolar gap present
- Hyperlactatemia
- AKI
- Treatment: Stop offending drug, dialysis

**Salicylate (Aspirin):**
- Early: Respiratory alkalosis (stimulation)
- Late: Metabolic acidosis (accumulation)
- Mixed respiratory alkalosis + metabolic acidosis
- Osmolar gap may be present
- Treatment: Alkalinization, hemodialysis

## Renal Tubular Acidosis

**Type 1 (Distal) RTA:**
- Inability to secrete H+ in distal tubule
- Urine pH >5.5 despite systemic acidosis
- Nephrocalcinosis, kidney stones
- Causes: Autoimmune, drugs, genetic

**Type 2 (Proximal) RTA:**
- Inability to reabsorb HCO3 in proximal tubule
- Urine pH <5.5 (can acidify when HCO3 load drops)
- Fanconi syndrome (wasting of phosphate, glucose, amino acids)
- Causes: Multiple myeloma, drugs (ifosfamide, tenofovir), genetic

**Type 4 (Hyperkalemic) RTA:**
- Hypoaldosteronism or aldosterone resistance
- Hyperkalemia, mild metabolic acidosis
- Urine pH <5.5
- Causes: Diabetes, NSAIDs, heparin, Addison's

## D-Lactic Acidosis

**Unique Entity:**
- Short bowel syndrome, bacterial overgrowth
- Bacteria produce D-lactate (not measured by standard lactate assay)
- Neurologic symptoms (encephalopathy)
- High anion gap metabolic acidosis
- Treatment: Antibiotics, carbohydrate restriction`,
      keyTerms: [
        { term: 'delta-delta gap', definition: 'Compares change in anion gap to change in bicarbonate; detects mixed metabolic disorders' },
        { term: 'SID', definition: 'Strong ion difference; determines pH in Stewart approach' },
        { term: 'osmolar gap', definition: 'Difference between measured and calculated osmolality; indicates presence of unmeasured osmoles' },
        { term: 'D-lactic acidosis', definition: 'Unique acidosis from bacterial overgrowth producing D-lactate isomer' },
        { term: 'corrected anion gap', definition: 'Anion gap adjusted for albumin level; important in hypoalbuminemic patients' },
      ],
      clinicalNotes: 'Always calculate the corrected anion gap in critically ill or malnourished patients. For suspected toxic alcohol ingestion, both anion gap and osmolar gap help identify the specific toxin.',
    },
    5: {
      level: 5,
      summary: 'Contemporary acid-base physiology integrates Stewart approach, quantitative strong ion analysis, and bedside applications for critical care, with novel insights into lactate kinetics, renal ammoniagenesis, and acid-base effects of unmeasured anions.',
      explanation: `## Stewart Approach in Clinical Practice

**Full Equation:**
SID = Na + K + Ca2+ + Mg2+ - Cl- - other strong anions

**Clinical Applications:**
- Explains "metabolic acidosis" with normal anion gap
- Identifies unmeasured anions (lactate, ketones, sulfate)
- Accounts for albumin effect (hypalbuminemia alkalemia)
- Better predicts ICU outcomes

**Albumin-Adjusted Anion Gap:**
AGcorrected = AG + 2.5 times (4.0 - albumin)

**Simplified Stewart:**
- SIG (Strong Ion Gap) = SIDeffective - SIDmeasured
- Reflects unmeasured anions
- More sensitive than traditional AG

## Quantitative Acid-Base Analysis

**Base Excess Approach:**
- BE = amount of strong acid or base to return pH to 7.40 at PCO2 40
- BE < -2: Metabolic acidosis
- BE > +2: Metabolic alkalosis

**Partitioning Base Excess:**
- BE from free water (Na effect)
- BE from chloride (Cl effect)
- BE from albumin
- BE from lactate and unmeasured ions

**Clinical Utility:**
- Identifies specific components of disorder
- Guides targeted therapy
- Useful in complex ICU patients

## Novel Concepts in Lactate

**Lactate as Signaling Molecule:**
- Not just waste product
- Fuel for heart and brain
- "Lactate shuttle" between cells

**Lactate Kinetics:**
- Production vs. clearance
- Hyperlactatemia vs. lactic acidosis
- Lactate/pyruvate ratio (tissue hypoxia)

**Non-Hypoxic Causes:**
- Beta-agonists (albuterol)
- Liver dysfunction
- Thiamine deficiency
- Malignancy
- Medications (metformin, linezolid)

## Renal Ammoniagenesis Insights

**Adaptive Response:**
- Increases with chronic acid load
- Main mechanism of net acid excretion

**Regulation:**
- Angiotensin II
- Glucocorticoids
- Hypokalemia inhibits
- Hyperkalemia stimulates

**Clinical Implications:**
- Hypokalemic patients have impaired acid excretion
- K+ repletion restores ammoniagenesis
- FE(NH4+) as measure of renal acid excretion

## Acid-Base in Special Populations

**Sepsis:**
- Early: Respiratory alkalosis (hyperventilation)
- Late: Metabolic acidosis (tissue hypoperfusion, lactic acidosis)
- Lactate clearance as resuscitation endpoint

**Liver Failure:**
- Respiratory alkalosis common
- Hypoalbuminemia (hidden alkalemia)
- Lactic acidosis (impaired clearance)
- Renal failure (Type 4 RTA)

**Cardiopulmonary Bypass:**
- Metabolic acidosis from:
  - Lactic acidosis
  - Dilutional acidosis (citrate)
  - Hyperchloremia (saline)
- Correction often spontaneous

## Emerging Diagnostics

**Point-of-Care VBG:**
- VBG acceptable for most clinical decisions
- VBG pH slightly lower than ABG
- HCO3 and PCO2 similar

**Tissue Oxygen Monitoring:**
- Near-infrared spectroscopy (NIRS)
- Gastric tonometry
- Detects tissue acidosis before systemic changes

**Continuous Renal Replacement Therapy:**
- Allows precise acid-base control
- Citrate anticoagulation (metabolized to bicarbonate)
- Lactate-based vs bicarbonate-based dialysate

## Therapeutic Frontiers

**Sodium Bicarbonate in Sepsis:**
- Traditional: No benefit, may worsen outcomes
- Recent trials suggest benefit in severe acidemia
- Ongoing research

**Renal Replacement for Acidosis:**
- CRRT for severe, refractory acidosis
- Continuous correction of pH
- Removal of organic acids

**Buffer Therapies:**
- THAM (tromethamine): Alternative to bicarb
- Carbicarb: Combination agent
- Research ongoing`,
      keyTerms: [
        { term: 'SIG', definition: 'Strong ion gap; unmeasured anions in Stewart approach' },
        { term: 'base excess', definition: 'Amount of acid or base needed to normalize pH; quantifies metabolic component' },
        { term: 'lactate shuttle', definition: 'Concept of lactate transport between cells as fuel source, not just waste' },
        { term: 'VBG', definition: 'Venous blood gas; often acceptable alternative to arterial blood gas' },
        { term: 'FE(NH4+)', definition: 'Fractional excretion of ammonium; measure of renal acid excretion' },
      ],
      clinicalNotes: 'Stewart approach explains many "unexplained" acid-base disorders in critically ill patients, particularly those with hypoalbuminemia. VBG pH is typically 0.03-0.05 units lower than ABG—clinically insignificant for most decisions.',
    },
  },

  media: [],
  citations: [
    { id: 'upToDate-ABG', type: 'article', title: 'Approach to the Adult with Acid-Base Disorders', source: 'UpToDate' },
  ],
  crossReferences: [
    { targetId: 'condition-electrolyte-disorders', targetType: 'condition', relationship: 'related', label: 'Electrolyte Disorders' },
    { targetId: 'condition-acute-kidney-injury', targetType: 'condition', relationship: 'related', label: 'Acute Kidney Injury' },
  ],
  tags: { systems: ['renal', 'respiratory'], topics: ['nephrology', 'critical care', 'pulmonology'], keywords: ['acid-base', 'ABG', 'anion gap', 'compensation', 'alkalosis'], clinicalRelevance: 'critical', examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'critical care'] } },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default acidBaseDisorders;
