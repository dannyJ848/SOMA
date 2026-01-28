/**
 * Electrolyte Abnormalities - Clinical Educational Content
 *
 * Covers sodium, potassium, calcium, magnesium, and phosphate disorders,
 * including pathophysiology, clinical manifestations, and management.
 */

import { EducationalContent } from '../../types';

export const electrolyteAbnormalities: EducationalContent = {
  id: 'clinical-electrolyte-abnormalities',
  type: 'condition',
  name: 'Electrolyte Abnormalities',
  alternateNames: ['Electrolyte Imbalance', 'Dysnatremia', 'Dyskalemia', 'Mineral Disorders'],

  levels: {
    1: {
      level: 1,
      summary: 'Electrolytes are minerals in your blood that carry electric charges and help your body work properly; imbalances can cause serious problems.',
      explanation: `Electrolytes are like the spark plugs in your body - they help messages travel between your brain and muscles, keep your heart beating regularly, and control how much water stays in your body.

**The Main Electrolytes:**

1. **Sodium (Na+)** - Controls water balance and blood pressure
2. **Potassium (K+)** - Keeps your heart and muscles working
3. **Calcium (Ca2+)** - Builds strong bones and helps muscles contract
4. **Magnesium (Mg2+)** - Helps muscles relax and nerves work
5. **Phosphate (PO4)** - Important for bones and energy

**What Can Go Wrong:**

- **Too much or too little sodium**: Can cause confusion, headaches, or seizures
- **Too much or too little potassium**: Can cause dangerous heart rhythm problems
- **Too much or too little calcium**: Can cause muscle cramps or weakness

**Common Causes:**
- Not drinking enough water or drinking too much
- Vomiting or diarrhea
- Certain medications
- Kidney problems
- Hormone problems

Doctors check electrolytes with a simple blood test. Treatment depends on which electrolyte is out of balance and why.`,
      keyTerms: [
        { term: 'electrolyte', definition: 'A mineral that carries an electric charge and is found in blood, urine, and body tissues' },
        { term: 'sodium', definition: 'The main electrolyte in blood that helps control fluid balance' },
        { term: 'potassium', definition: 'An electrolyte essential for heart and muscle function' },
        { term: 'calcium', definition: 'A mineral important for bones, muscles, and nerves' },
        { term: 'dehydration', definition: 'When your body loses more water than it takes in' },
      ],
      analogies: [
        'Electrolytes are like the electrical wiring in a house - they carry signals that make everything work.',
        'Sodium is like a sponge - it holds onto water in your body, controlling how hydrated you are.',
        'Potassium and sodium work like a seesaw - when one goes up, the other often goes down.',
      ],
      examples: [
        'Drinking too much water during a marathon can dilute your sodium and cause confusion - this is called hyponatremia.',
        'Eating too many bananas or salt substitutes with potassium can cause high potassium levels, which is dangerous for the heart.',
        'Certain blood pressure pills called diuretics can make you lose potassium through your urine.',
      ],
    },
    2: {
      level: 2,
      summary: 'Electrolyte disorders involve abnormal concentrations of sodium, potassium, calcium, magnesium, or phosphate in blood, with clinical manifestations ranging from asymptomatic to life-threatening cardiac or neurological complications.',
      explanation: `**Sodium Disorders (Normal: 135-145 mEq/L)**

**Hyponatremia (Low Sodium):**
- Symptoms: Headache, nausea, confusion, seizures, coma
- Causes by volume status:
  - Hypovolemic: Diuretics, vomiting, diarrhea, adrenal insufficiency
  - Euvolemic: SIADH, hypothyroidism, cortisol deficiency, polydipsia
  - Hypervolemic: Heart failure, cirrhosis, nephrotic syndrome
- Correction rate critical: Too fast causes osmotic demyelination

**Hypernatremia (High Sodium):**
- Symptoms: Thirst, weakness, confusion, seizures
- Causes:
  - Water loss: Diabetes insipidus, sweating, osmotic diuresis
  - Sodium gain: Salt ingestion, hypertonic saline, mineralocorticoid excess
  - Impaired thirst: Altered mental status, hypothalamic lesions

**Potassium Disorders (Normal: 3.5-5.0 mEq/L)**

**Hypokalemia (Low Potassium):**
- Symptoms: Weakness, fatigue, constipation, arrhythmias
- ECG changes: ST depression, U waves, T wave flattening
- Causes: Diuretics, vomiting, diarrhea, aldosterone excess, beta-agonists

**Hyperkalemia (High Potassium):**
- Symptoms: Weakness, paralysis, cardiac arrest
- ECG changes: Peaked T waves, PR prolongation, QRS widening, sine wave
- Causes: Renal failure, ACE inhibitors, potassium-sparing diuretics, tissue breakdown
- Emergency treatment: Calcium stabilizes membrane; insulin/glucose shifts K+ inside cells

**Calcium Disorders (Normal: 8.5-10.5 mg/dL, ionized 4.5-5.3 mg/dL)**

**Hypocalcemia:**
- Symptoms: Tetany, paresthesias, Chvostek sign (facial twitching), Trousseau sign (carpal spasm)
- Causes: Hypoparathyroidism, vitamin D deficiency, renal failure, pancreatitis

**Hypercalcemia:**
- Symptoms: "Stones, bones, groans, moans, and psychic overtones"
- Causes: Hyperparathyroidism, malignancy, vitamin D excess, thiazides

**Magnesium Disorders (Normal: 1.7-2.2 mg/dL)**

**Hypomagnesemia:**
- Often accompanies hypokalemia and hypocalcemia
- Causes refractory hypokalemia and hypocalcemia until corrected
- Causes: Diuretics, alcoholism, diarrhea, PPIs

**Hypermagnesemia:**
- Symptoms: Weakness, hypotension, bradycardia, respiratory depression
- Causes: Renal failure, magnesium-containing antacids/laxatives

**Phosphate Disorders (Normal: 2.5-4.5 mg/dL)**

**Hypophosphatemia:**
- Symptoms: Weakness, hemolysis, rhabdomyolysis, respiratory failure
- Causes: Refeeding syndrome, alcoholism, diuretics, respiratory alkalosis

**Hyperphosphatemia:**
- Symptoms: Usually asymptomatic; metastatic calcification if severe
- Causes: Renal failure, vitamin D intoxication, tumor lysis syndrome`,
      keyTerms: [
        { term: 'hyponatremia', definition: 'Low blood sodium level (<135 mEq/L)', pronunciation: 'hy-po-nah-TREE-mee-ah' },
        { term: 'hyperkalemia', definition: 'High blood potassium level (>5.0 mEq/L)', pronunciation: 'hy-per-kah-LEE-mee-ah' },
        { term: 'SIADH', definition: 'Syndrome of inappropriate antidiuretic hormone secretion; causes water retention and dilutional hyponatremia' },
        { term: 'tetany', definition: 'Involuntary muscle contractions caused by low calcium' },
        { term: 'ECG', definition: 'Electrocardiogram; tracing of the heart\'s electrical activity' },
      ],
      analogies: [
        'Sodium is like the conductor of an orchestra - it sets the rhythm for water movement throughout the body.',
        'Potassium is the heart\'s pacemaker battery - without the right level, the rhythm gets disrupted.',
        'Electrolytes are like the oil in a car engine - the right levels keep everything running smoothly.',
      ],
    },
    3: {
      level: 3,
      summary: 'Electrolyte homeostasis depends on renal tubular transport, hormonal regulation, and transcellular shifts, with disorders classified by pathophysiological mechanism and requiring careful correction to avoid iatrogenic complications.',
      explanation: `**Sodium and Water Homeostasis:**

Total body water (TBW) = 60% body weight (50% female, 60% male)
- Intracellular fluid (ICF): 2/3 of TBW
- Extracellular fluid (ECF): 1/3 of TBW (plasma + interstitial)

**Renal Handling:**
- Proximal tubule: Reabsorbs 65-70% of filtered sodium and water
- Loop of Henle: 25% sodium reabsorption (NKCC2)
- Distal tubule: 5% sodium reabsorption (NCC)
- Collecting duct: 2-3% sodium reabsorption (ENaC), regulated by aldosterone
- ADH regulates water reabsorption in collecting duct (AQP2)

**Hyponatremia Pathophysiology:**

Serum osmolality = 2(Na+) + glucose/18 + BUN/2.8
Normal: 275-295 mOsm/kg

**Hypotonic Hyponatremia (Most common):**
1. **Hypovolemic:** Both Na+ and water lost, but more Na+ lost
   - Renal losses: Diuretics, salt-wasting nephropathy, cerebral salt wasting
   - Extrarenal losses: Diarrhea, vomiting, burns

2. **Euvolemic:** TBW increased, total body Na+ normal
   - SIADH: ADH secretion inappropriate to osmolality
     - Criteria: Low osmolality, inappropriately concentrated urine, euvolemia, normal thyroid/adrenal
     - Causes: CNS disease, malignancy (small cell lung cancer), medications (SSRIs, carbamazepine)
   - Hypothyroidism: Reduced free water clearance
   - Cortisol deficiency: Loss of ADH suppression
   - Primary polydipsia: Excessive water intake (>10-15 L/day)

3. **Hypervolemic:** Both Na+ and water increased, but more water
   - Edematous states: CHF, cirrhosis, nephrotic syndrome
   - Effective arterial blood volume decreased -> ADH release

**Hypernatremia Pathophysiology:**
Always hypertonic; always represents water deficit relative to sodium

1. **Hypovolemic:** Water loss exceeds Na+ loss
   - Renal: Diabetes insipidus (central or nephrogenic), osmotic diuresis
   - Extrarenal: Sweating, respiratory losses

2. **Euvolemic (Pure water loss):**
   - Diabetes insipidus
   - Insensible losses

3. **Hypervolemic:** Sodium gain
   - Iatrogenic: Hypertonic saline, sodium bicarbonate
   - Primary hyperaldosteronism, Cushing\'s syndrome

**Potassium Homeostasis:**

**Distribution:**
- 98% intracellular (ICF ~140 mEq/L)
- 2% extracellular (ECF ~4 mEq/L)

**Regulation:**
- Dietary intake: ~100 mEq/day
- Renal excretion: ~90% (aldosterone-dependent)
- GI excretion: ~10%

**Factors Shifting K+ into Cells (decreasing serum K+):**
- Insulin, beta-2 agonists, alkalosis

**Factors Shifting K+ out of Cells (increasing serum K+):**
- Acidosis, cell lysis, beta-blockers, insulin deficiency

**Hypokalemia Causes:**
- Decreased intake: Rare
- Shift into cells: Insulin, beta-agonists, alkalosis
- GI losses: Diarrhea, laxatives, vomiting (urinary loss)
- Renal losses: Diuretics, hyperaldosteronism, hypomagnesemia, RTA

**Hyperkalemia Causes:**
- Increased intake: Usually only with renal impairment
- Shift out of cells: Acidosis, insulin deficiency, cell breakdown
- Decreased renal excretion: Renal failure, hypoaldosteronism, ACE inhibitors, potassium-sparing diuretics

**Calcium Homeostasis:**

**Distribution:**
- 50% free/ionized (biologically active)
- 40% protein-bound (mostly albumin)
- 10% complexed with anions

**Albumin Correction:**
Corrected Ca = Measured Ca + 0.8(4.0 - albumin)

**Regulation:**
- Parathyroid hormone (PTH): Increases calcium, decreases phosphate
- Vitamin D: Increases calcium and phosphate absorption
- Calcitonin: Decreases calcium (minor role)

**Hypocalcemia Causes:**
- PTH deficiency: Surgical hypoparathyroidism, autoimmune
- PTH resistance: Pseudohypoparathyroidism
- Vitamin D deficiency: Malabsorption, liver/renal disease
- Sequestration: Pancreatitis, rhabdomyolysis, hyperphosphatemia

**Hypercalcemia Causes:**
- PTH-mediated: Primary hyperparathyroidism
- Non-PTH-mediated: Malignancy (PTHrP), vitamin D toxicity, granulomatous disease, milk-alkali syndrome

**Magnesium Homeostasis:**
- 99% intracellular
- Regulated by renal excretion
- Hypomagnesemia impairs PTH secretion and action, causing hypocalcemia
- Also causes renal potassium wasting (refractory hypokalemia)`,
      keyTerms: [
        { term: 'osmolality', definition: 'Concentration of solutes per kilogram of solvent; determines water movement across membranes' },
        { term: 'effective arterial blood volume', definition: 'The portion of ECF that perfuses tissues; sensed by baroreceptors; may not correlate with total body volume' },
        { term: 'diabetes insipidus', definition: 'Inability to concentrate urine due to ADH deficiency (central) or renal resistance (nephrogenic)' },
        { term: 'hypoaldosteronism', definition: 'Deficiency of aldosterone, leading to hyperkalemia and type 4 RTA' },
        { term: 'pseudohypoparathyroidism', definition: 'End-organ resistance to PTH; high PTH but hypocalcemia and hyperphosphatemia' },
      ],
      clinicalNotes: 'Never correct sodium faster than 8-12 mEq/L per day in chronic hyponatremia - risk of osmotic demyelination syndrome. Always check and replace magnesium before attempting to correct hypokalemia - hypomagnesemia causes renal potassium wasting.',
    },
    4: {
      level: 4,
      summary: 'Clinical management of electrolyte disorders requires understanding of compartmental distribution, correction rate limitations, and tailored therapies based on pathophysiological classification, symptom severity, and comorbidities.',
      explanation: `**Hyponatremia Management:**

**Symptomatic (Seizures, Altered Mental Status):**
- 3% hypertonic saline: 100 mL IV over 10 min, may repeat once
- Goal: Increase Na+ by 4-6 mEq/L rapidly to stop symptoms
- Then slow correction to < 8-12 mEq/L in 24 hours, < 18 mEq/L in 48 hours

**Asymptomatic:**
- Treat underlying cause
- Water restriction (SIADH): < 800-1000 mL/day
- Loop diuretics + salt tablets (hypervolemic)
- Demeclocycline or tolvaptan (refractory SIADH)

**Osmotic Demyelination Syndrome (ODS):**
- Pontine and extrapontine myelinolysis
- Risk factors: Chronic hyponatremia, malnutrition, alcoholism, liver disease
- Symptoms: Dysarthria, dysphagia, paraparesis, altered mental status
- Occurs 2-6 days after rapid correction

**Hypernatremia Management:**

**Free Water Deficit Calculation:**
Deficit = 0.6 x weight(kg) x (Current Na/140 - 1)

**Rate of Correction:**
- Decrease Na+ by 0.5 mEq/L per hour, maximum 10-12 mEq/L per day
- Too rapid: Cerebral edema

**Central Diabetes Insipidus:**
- Desmopressin (DDAVP) - synthetic ADH

**Nephrogenic Diabetes Insipidus:**
- Treat underlying cause
- Thiazide diuretics (paradoxically reduce urine output)
- Amiloride (lithium-induced DI)
- NSAIDs (reduce medullary blood flow)

**Hypokalemia Management:**

**Potassium Repletion:**
- Oral preferred: 10-20 mEq every 2-3 hours
- IV: 10 mEq/hour peripheral, 20 mEq/hour central (max 40 mEq/hour in ICU)
- Always check and replace magnesium first!

**Potassium Distribution:**
- Serum K+ decreases ~0.6 mEq/L for every 100 mEq deficit (mild depletion)
- Serum K+ decreases ~0.3 mEq/L for every 100 mEq deficit (severe depletion)
- Total body deficit calculation: (Desired K+ - Current K+) x 100-150

**Potassium-Sparing Diuretics:**
- Spironolactone: Aldosterone antagonist
- Amiloride, triamterene: Direct ENaC blockers
- Use for: Hyperaldosteronism, refractory hypokalemia

**Hyperkalemia Management:**

**Emergency (ECG changes, K+ > 6.5):**
1. **Stabilize cardiac membrane:**
   - Calcium gluconate 1 g IV over 5 min (lasts 30-60 min)
   - Calcium chloride (central line only, more caustic)

2. **Shift K+ into cells:**
   - Insulin 10 U IV + D50W 50 mL (onset 15-30 min, lasts 4-6 hours)
   - Beta-2 agonists: Albuterol 10-20 mg nebulized
   - Sodium bicarbonate (if acidotic)

3. **Remove K+ from body:**
   - Potassium-binding resins:
     - Sodium polystyrene sulfonate (SPS) - 15-30 g PO/PR (onset hours, risk of intestinal necrosis)
     - Patiromer - 8.4-25.2 g PO (onset 4-7 hours)
     - Sodium zirconium cyclosilicate (SZC) - 10 g PO (onset 1 hour)
   - Hemodialysis (definitive for severe/refractory)
   - Loop diuretics with isotonic fluids (if adequate renal function)

**Non-emergent:**
- Dietary restriction
- Discontinue offending medications
- Treat underlying cause

**Calcium Disorders:**

**Hypocalcemia:**
- Acute, symptomatic: 1-2 g calcium gluconate IV over 10-20 min, then infusion
- Chronic: Calcium carbonate + vitamin D (calcitriol if renal failure)
- Check magnesium and replace if low

**Hypercalcemia:**
- Severe (>14 mg/dL) or symptomatic:
  - IV normal saline: 200-300 mL/hour (restore volume, promote calciuresis)
  - Loop diuretics (after volume restored)
  - Calcitonin: 4 U/kg SC (onset 4-6 hours, tachyphylaxis)
  - Bisphosphonates: Zoledronic acid, pamidronate (onset 2-3 days, lasts weeks)
  - Denosumab (refractory/severe renal failure)
  - Dialysis (refractory)

**Magnesium Disorders:**

**Hypomagnesemia:**
- Severe (<1.0 mg/dL) or symptomatic: 1-2 g MgSO4 IV over 15 min, then 0.5-1 g/hour
- Oral: Magnesium oxide, magnesium citrate (diarrhea limits dosing)
- Requires 0.5-1 mEq/kg for repletion

**Hypermagnesemia:**
- IV calcium gluconate (antagonizes cardiac effects)
- Loop diuretics + saline
- Dialysis if severe

**Phosphate Disorders:**

**Hypophosphatemia:**
- Severe (<1.0 mg/dL): IV phosphate (potassium or sodium phosphate)
  - Risk of hypocalcemia, renal failure with rapid correction
- Oral: Neutra-Phos, skim milk
- Refeeding syndrome prophylaxis: Start nutrition slowly, supplement phosphate

**Hyperphosphatemia:**
- Acute: Saline + loop diuretics
- Chronic (CKD): Phosphate binders (calcium acetate, sevelamer, lanthanum)
- Dialysis`,
      keyTerms: [
        { term: 'osmotic demyelination syndrome', definition: 'Neurological complication of rapid sodium correction; pontine and extrapontine myelinolysis' },
        { term: 'patiromer', definition: 'Potassium-binding polymer that exchanges calcium for potassium in the GI tract' },
        { term: 'tachyphylaxis', definition: 'Rapidly diminishing response to a drug after repeated doses' },
        { term: 'calcimimetic', definition: 'Drug that mimics calcium at the parathyroid calcium-sensing receptor; used in hyperparathyroidism' },
        { term: 'phosphate binder', definition: 'Medication that binds dietary phosphate in the gut, preventing absorption' },
      ],
      clinicalNotes: 'Key clinical rule: Always check and treat hypomagnesemia before attempting to correct hypokalemia or hypocalcemia. Hypomagnesemia causes renal potassium wasting and PTH resistance. In hyperkalemia with ECG changes, give calcium first - it stabilizes the cardiac membrane within minutes while other treatments take effect.',
    },
    5: {
      level: 5,
      summary: 'Advanced electrolyte management in critical care involves understanding of transcellular shifts, pharmacokinetics of replacement therapies, complex acid-base interactions, and emerging strategies for refractory cases including continuous renal replacement therapy considerations.',
      explanation: `**Complex Sodium Cases:**

**Cerebral Salt Wasting (CSW) vs SIADH:**
Both cause hyponatremia with concentrated urine, but:
- CSW: Hypovolemic (low CVP, orthostatic hypotension, high urine Na+), salt wasting
  - Treatment: Volume + salt repletion (opposite of SIADH)
  - Associated with: SAH, brain injury
- SIADH: Euvolemic
  - Treatment: Water restriction

**Beer Potomania:**
- Hyponatremia in beer drinkers with poor nutrition
- Beer is low in solute; kidneys need minimum solute to excrete free water
- Very low urine osmolality despite hyponatremia
- Treatment: Normal saline + nutrition (risk of overcorrection)

**Exercise-Associated Hyponatremia:**
- Caused by excessive hypotonic fluid intake during endurance exercise
- Risk factors: >4 hours exercise, weight gain during event, female sex
- Prevention: Drink to thirst rather than scheduled intake
- Treatment: 3% saline if severe (risk of cerebral edema)

**Advanced Potassium Management:**

**Redistribution Hypokalemia:**
- Periodic paralysis: Thyrotoxic or familial
- Beta-agonist overdose
- Insulin overdose
- Theophylline toxicity
- Barium poisoning

**Pseudohyperkalemia:**
- In vitro hemolysis
- Thrombocytosis (>500,000) or leukocytosis (>100,000) - clotting releases K+
- Technique: Tourniquet time, fist clenching
- Hereditary pseudohyperkalemia (temperature-dependent red cell leak)

**Refractory Hyperkalemia:**
- SZC (sodium zirconium cyclosilicate): Fastest onset (1 hour), use for acute reduction
- Patiromer: Slower onset, better for chronic management
- SPS: Avoid if possible due to GI necrosis risk

**Dialysis Considerations:**
- Dialysate potassium: Usually 2-3 mEq/L (create gradient)
- Daily dialysis may be needed for severe hyperkalemia
- Risk of rebound hyperkalemia after dialysis (intracellular shift)

**Magnesium-Phosphate-Calcium Interactions:**

**Calcium-Phosphate Product:**
- Ca x Phos product > 55-60: Risk of metastatic calcification
- Important in ESRD patients
- Management: Balance phosphate binders, avoid excessive calcium loading

**Magnesium as Calcium Channel Blocker:**
- High magnesium inhibits PTH release (calcium-sensing receptor)
- Used therapeutically in preeclampsia (seizure prevention)
- Antagonizes calcium in neuromuscular junction

**Special Populations:**

**End-Stage Renal Disease:**
- Hyperkalemia: Dietary restriction, patiromer/SZC, dialysis
- Hyperphosphatemia: Phosphate binders, dietary restriction
- Hypocalcemia: Calcitriol, calcium acetate (as binder)
- Sodium/fluid: Balance interdialytic weight gain vs hypotension

**Liver Disease:**
- Hypokalemia: Secondary hyperaldosteronism, diuretics
- Respiratory alkalosis -> hypophosphatemia
- Hypomagnesemia common

**Heart Failure:**
- Hyponatremia: Marker of advanced disease, poor prognosis
- Hyperkalemia: ACE inhibitor, ARB, spironolactone combination ("triple whammy" with NSAIDs)
- Hypokalemia: Loop/thiazide diuretics

**ICU-Specific Issues:**

**CRRT Electrolyte Management:**
- Custom dialysate/replacement fluid electrolyte composition
- Monitor q6h initially, adjust as needed
- Phosphate often needs supplementation (dialysate phosphate low)
- Citrate anticoagulation causes hypocalcemia (binds calcium)

**Drug-Induced Electrolyte Abnormalities:**
- Amphotericin B: Hypokalemia, hypomagnesemia, RTA
- Cisplatin: Hypomagnesemia
- Foscarnet: Hypocalcemia, hypomagnesemia, hypokalemia
- Pentamidine: Hypoglycemia, hyperkalemia

**Emerging Therapies:**

**Potassium-Lowering Agents:**
- SZC: Non-absorbed zirconium silicate, exchanges Na+/H+ for K+
- Patiromer: Polymer exchanges Ca2+ for K+ and Mg2+

**Magnesium Formulations:**
- High-dose oral magnesium with enteric coating (reduces diarrhea)

**Phosphate Binders:**
- Ferric citrate: Dual phosphate binder and iron supplement
- Tenapanor: NHE3 inhibitor reduces phosphate absorption

**Novel Diagnostic Approaches:**
- Ionized vs total calcium in critical illness (albumin changes)
- Point-of-care potassium testing (avoid pseudohyperkalemia)
- Continuous electrolyte monitoring (emerging technology)`,
      keyTerms: [
        { term: 'beer potomania', definition: 'Hyponatremia in malnourished beer drinkers due to low solute intake impairing free water excretion' },
        { term: 'pseudohyperkalemia', definition: 'Falsely elevated serum potassium due to in vitro release from cells during sample processing' },
        { term: 'triple whammy', definition: 'Combination of ACE inhibitor/ARB + diuretic + NSAID causing acute kidney injury and hyperkalemia' },
        { term: 'cerebral salt wasting', definition: 'Renal salt wasting following CNS injury; differentiated from SIADH by hypovolemia' },
        { term: 'CRRT', definition: 'Continuous renal replacement therapy; slow, continuous dialysis for hemodynamically unstable patients' },
      ],
      clinicalNotes: `Critical care pearls:
1. SIADH vs cerebral salt wasting: Check volume status! CSW needs salt; SIADH needs water restriction
2. In severe hyponatremia with altered mental status, give 3% saline immediately - do not wait for labs
3. Always redraw potassium if result does not match clinical picture - check for pseudohyperkalemia
4. "Triple whammy" (ACEi/ARB + diuretic + NSAID) is a common cause of AKI and hyperkalemia in elderly
5. In CRRT with citrate anticoagulation, the calcium infusion rate correlates with clearance - monitor ionized calcium
6. Hyperkalemia with ECG changes is a "code" - stabilize the membrane with calcium while preparing definitive therapy`,
    },
  },

  media: [
    {
      id: 'ecg-hyperkalemia',
      type: 'diagram',
      filename: 'ecg-hyperkalemia.svg',
      title: 'ECG Changes in Hyperkalemia',
      description: 'Progressive ECG changes from peaked T waves to sine wave pattern',
    },
  ],

  citations: [
    {
      id: 'rose-electrolytes',
      type: 'textbook',
      title: 'Clinical Physiology of Acid-Base and Electrolyte Disorders',
      authors: ['Rose, B.D.', 'Post, T.W.'],
      source: 'McGraw-Hill',
    },
    {
      id: 'kdigo-acid-base',
      type: 'article',
      title: 'KDIGO Clinical Practice Guideline on Disorders of Water and Electrolytes',
      source: 'Kidney International Supplements',
    },
  ],

  crossReferences: [
    { targetId: 'clinical-acid-base-disorders', targetType: 'condition', relationship: 'related', label: 'Acid-Base Disorders' },
    { targetId: 'structure-nephron', targetType: 'structure', relationship: 'related', label: 'Nephron Structure' },
    { targetId: 'condition-renal-failure', targetType: 'condition', relationship: 'related', label: 'Renal Failure' },
  ],

  tags: {
    systems: ['renal', 'cardiovascular'],
    topics: ['clinical', 'pathophysiology', 'emergency'],
    keywords: ['electrolytes', 'hyponatremia', 'hyperkalemia', 'hypocalcemia', 'magnesium', 'phosphate'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'emergency'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default electrolyteAbnormalities;
