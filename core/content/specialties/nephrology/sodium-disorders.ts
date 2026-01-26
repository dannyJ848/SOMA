/**
 * Sodium Disorders - Comprehensive Educational Content
 *
 * Covers hyponatremia and hypernatremia with pathophysiology,
 * differential diagnosis, and management approaches.
 */

import { EducationalContent } from '../../types';

export const sodiumDisorders: EducationalContent = {
  id: 'condition-sodium-disorders',
  type: 'condition',
  name: 'Sodium Disorders',
  alternateNames: ['Hyponatremia', 'Hypernatremia', 'Dysnatremias', 'Sodium Imbalance'],

  levels: {
    1: {
      level: 1,
      summary: 'Sodium disorders happen when there is too little or too much sodium in your blood, affecting how your body handles water and how your brain works.',
      explanation: `Sodium is a mineral (salt) that helps control how much water is in your body. Your body works hard to keep sodium levels just right - not too high, not too low.

## Low Sodium (Hyponatremia)

This happens when there's too much water compared to sodium in your blood. Think of it like adding too much water to lemonade - it becomes diluted.

**Why it happens:**
- Drinking way too much water
- Certain medications
- Heart, liver, or kidney problems
- Hormones that hold onto too much water

**What you might feel:**
- Headache
- Nausea or vomiting
- Confusion or sleepiness
- In severe cases: Seizures or coma

## High Sodium (Hypernatremia)

This happens when you don't have enough water in your body compared to sodium. Like lemonade that's too strong because you didn't add enough water.

**Why it happens:**
- Not drinking enough water
- Losing too much water (fever, sweating, diarrhea)
- Being unable to ask for water (very old or very young people)

**What you might feel:**
- Very thirsty
- Dry mouth and skin
- Confusion or irritability
- Weak or tired

## Why Does It Affect Your Brain?

Your brain is very sensitive to water balance. When sodium is too low, water moves INTO brain cells, making them swell (like a sponge). When sodium is too high, water moves OUT of brain cells, making them shrink. Either way, your brain doesn't work right.

The good news is that doctors can fix sodium problems by carefully adjusting your fluids and medications!`,
      keyTerms: [
        { term: 'sodium', definition: 'A mineral (salt) in your blood that helps control water balance' },
        { term: 'hyponatremia', definition: 'When sodium in your blood is too low', pronunciation: 'HY-poh-nah-TREE-mee-ah' },
        { term: 'hypernatremia', definition: 'When sodium in your blood is too high', pronunciation: 'HY-per-nah-TREE-mee-ah' },
        { term: 'dehydration', definition: 'When your body doesn\'t have enough water' },
      ],
      analogies: [
        'Sodium in your blood is like salt in soup. Too little salt (hyponatremia) or too much salt (hypernatremia) ruins the balance, and adding water or salt can fix it.',
        'Your brain cells are like sponges. Low sodium makes them swell up with too much water. High sodium makes them shrink because water leaves.',
      ],
      examples: [
        'A marathon runner drinks too much water during a race without enough salt and develops headache and confusion from hyponatremia.',
        'An elderly person in a nursing home who doesn\'t drink enough water develops confusion and thirst from hypernatremia.',
      ],
    },
    2: {
      level: 2,
      summary: 'Hyponatremia (<135 mEq/L) and hypernatremia (>145 mEq/L) are disorders of water balance relative to sodium; classification by volume status and osmolality guides diagnosis and treatment.',
      explanation: `## Understanding Sodium Disorders

Serum sodium reflects the ratio of sodium to water in the body:
- **Hyponatremia**: Too much water relative to sodium
- **Hypernatremia**: Too little water relative to sodium

Normal serum sodium: 135-145 mEq/L

## Hyponatremia (Na < 135 mEq/L)

### Step 1: Check Serum Osmolality
| Osmolality | Interpretation | Causes |
|------------|----------------|--------|
| Low (<280) | True hyponatremia | Most cases |
| Normal (280-295) | Pseudohyponatremia | High protein, high lipids |
| High (>295) | Translocational | Hyperglycemia, mannitol |

### Step 2: Assess Volume Status (for True Hyponatremia)

**Hypovolemic Hyponatremia** (Low total body water and sodium)
- Causes: Vomiting, diarrhea, diuretics, adrenal insufficiency
- Signs: Orthostatic hypotension, tachycardia, dry mucous membranes
- Treatment: Normal saline

**Euvolemic Hyponatremia** (Normal total body sodium, excess water)
- Causes: SIADH, hypothyroidism, adrenal insufficiency, primary polydipsia
- Signs: No edema, no orthostasis
- Treatment: Fluid restriction, treat underlying cause

**Hypervolemic Hyponatremia** (High total body sodium and water, but proportionally more water)
- Causes: Heart failure, cirrhosis, nephrotic syndrome
- Signs: Edema, ascites, JVD
- Treatment: Fluid and sodium restriction, diuretics

### SIADH (Syndrome of Inappropriate ADH)
Most common cause of euvolemic hyponatremia:
- Criteria: Low serum osmolality, urine osmolality >100, urine sodium >30, euvolemia, normal thyroid/adrenal
- Causes: CNS disorders, lung disease, medications (SSRIs, carbamazepine), malignancy

### Symptoms of Hyponatremia
| Sodium Level | Symptoms |
|--------------|----------|
| 125-135 | Often asymptomatic or mild (nausea, headache) |
| 120-125 | Headache, nausea, lethargy, confusion |
| <120 | Seizures, coma, respiratory arrest |

Symptoms depend on both severity AND rate of development (acute vs chronic).

## Hypernatremia (Na > 145 mEq/L)

### Classification by Volume Status

**Hypovolemic Hypernatremia** (Most common)
- Causes: GI losses (diarrhea), sweating, osmotic diuresis, inadequate water intake
- Signs: Orthostasis, tachycardia, dry mucous membranes
- Treatment: Hypotonic fluids (D5W or 0.45% saline)

**Euvolemic Hypernatremia**
- Causes: Diabetes insipidus (central or nephrogenic), insensible losses
- Signs: Usually minimal volume depletion
- Treatment: Free water replacement, treat underlying cause

**Hypervolemic Hypernatremia** (Rare)
- Causes: Hypertonic saline administration, sodium bicarbonate, primary hyperaldosteronism
- Signs: Edema, HTN
- Treatment: Diuretics + free water

### Diabetes Insipidus
Inability to concentrate urine:
- **Central DI**: Lack of ADH production (brain injury, pituitary surgery)
- **Nephrogenic DI**: Kidneys don't respond to ADH (lithium, hypercalcemia, chronic kidney disease)

### Symptoms of Hypernatremia
- Thirst (if patient can sense and communicate)
- Lethargy, confusion, irritability
- Muscle twitching, hyperreflexia
- Seizures, coma (severe)

## Key Formulas

**Sodium Correction for Hyperglycemia:**
Corrected Na = Measured Na + 1.6 × (Glucose - 100)/100

**Free Water Deficit (for hypernatremia):**
Water deficit (L) = TBW × [(Serum Na/140) - 1]
(TBW = 0.6 × weight for men, 0.5 for women)`,
      keyTerms: [
        { term: 'osmolality', definition: 'Concentration of dissolved particles in blood or urine; measured in mOsm/kg' },
        { term: 'SIADH', definition: 'Syndrome of Inappropriate ADH; excess ADH causes water retention and dilutional hyponatremia' },
        { term: 'ADH', definition: 'Antidiuretic Hormone (vasopressin); tells kidneys to retain water' },
        { term: 'diabetes insipidus', definition: 'Condition where body cannot concentrate urine, leading to water loss and hypernatremia' },
        { term: 'pseudohyponatremia', definition: 'Falsely low sodium measurement due to high lipids or proteins in blood' },
        { term: 'translocational hyponatremia', definition: 'Low sodium due to water shift from cells (caused by high glucose or mannitol)' },
      ],
      analogies: [
        'Volume status in hyponatremia is like asking: "Is the tank overfull, underfull, or just right?" The answer tells you how to treat.',
      ],
    },
    3: {
      level: 3,
      summary: 'Sodium disorders reflect disturbances in water homeostasis regulated by ADH, thirst, and renal handling; management requires understanding of the Edelman equation, rate of correction limits, and treatment of underlying etiology.',
      explanation: `## Physiology of Sodium Homeostasis

### The Edelman Equation
Plasma [Na] = (Total Body Na + Total Body K) / Total Body Water

Key insight: Serum sodium is a concentration, not a measure of total body sodium.

### Water Homeostasis Regulators

**Antidiuretic Hormone (ADH/Vasopressin):**
- Released from posterior pituitary
- Stimuli: High osmolality (primary), hypovolemia, nausea, pain, stress
- Action: Inserts aquaporin-2 channels in collecting duct → water reabsorption
- Result: Concentrated urine, dilute plasma

**Thirst:**
- Stimulated by hyperosmolality, hypovolemia, angiotensin II
- Defense against hypernatremia (requires intact thirst and access to water)

**Renal Diluting Capacity:**
- Thick ascending limb: Na reabsorbed without water (dilutes tubular fluid)
- Collecting duct: Water permeability depends on ADH
- Maximum dilution: 50 mOsm/kg (requires ADH suppression)

## Advanced Hyponatremia Workup

### Diagnostic Algorithm

1. **Serum osmolality**: Rule out pseudohyponatremia and translocational
2. **Urine osmolality**:
   - <100 mOsm/kg: Primary polydipsia (maximally dilute urine)
   - >100 mOsm/kg: Impaired water excretion
3. **Urine sodium**:
   - <30 mEq/L: Hypovolemia (kidneys retaining sodium)
   - >30 mEq/L: SIADH, diuretics, adrenal insufficiency, salt-wasting nephropathy
4. **Volume status**: Clinical assessment (often difficult)

### SIADH Diagnostic Criteria
- Serum osmolality <275 mOsm/kg
- Urine osmolality >100 mOsm/kg (inappropriately concentrated)
- Urine sodium >30 mEq/L (euvolemia)
- Clinical euvolemia
- Normal thyroid and adrenal function
- No diuretic use

### Differential Diagnosis of Euvolemic Hyponatremia
| Condition | Distinguishing Feature |
|-----------|----------------------|
| SIADH | Low uric acid, normal BUN |
| Hypothyroidism | Elevated TSH |
| Adrenal insufficiency | Elevated K, low cortisol, eosinophilia |
| Primary polydipsia | Urine osm <100, low uric acid |
| Beer potomania | History, low urea, low urine osm |
| Reset osmostat | Stable mild hyponatremia, normal response to water load |

### Cerebral Salt Wasting vs. SIADH
| Feature | SIADH | CSW |
|---------|-------|-----|
| Volume status | Euvolemic | Hypovolemic |
| Urine output | Normal/Low | High |
| Urine sodium | >30 | >30 |
| BUN | Low/Normal | Elevated |
| Uric acid | Low | Low |
| Response to saline | Worsens Na | Improves Na |

## Hyponatremia Treatment

### Acute Symptomatic Hyponatremia (Seizures, Coma)
- **Emergency**: 3% hypertonic saline 100-150 mL IV bolus
- Repeat every 10-20 minutes until symptoms improve (up to 3 boluses)
- Goal: Raise sodium 4-6 mEq/L in first 1-2 hours
- Then slow correction

### Chronic Hyponatremia (>48 hours or unknown duration)
**Rate Limits:**
- Maximum 8 mEq/L in 24 hours (some guidelines: 10-12)
- Maximum 18 mEq/L in 48 hours
- High-risk patients (alcoholism, malnutrition, hypokalemia, Na <105): Limit to 6 mEq/L/day

### Treatment by Category
| Category | Treatment |
|----------|-----------|
| Hypovolemic | Normal saline (0.9%) |
| SIADH | Fluid restriction, salt tabs, loop diuretics, vasopressin antagonists |
| Hypervolemic | Fluid/sodium restriction, diuretics, treat underlying disease |
| Severe symptomatic | 3% saline regardless of category |

### Overcorrection Rescue
If correcting too fast (risk of osmotic demyelination):
- Stop hypertonic saline
- Administer D5W (free water) or DDAVP
- Target: Relower sodium 2-3 mEq/L
- DDAVP clamps urine output, allowing controlled correction

## Advanced Hypernatremia

### Pathophysiology
Hypernatremia = Water deficit relative to sodium
Always reflects impaired water intake OR impaired thirst:
- Elderly, infants, hospitalized patients with restricted access
- Neurologic impairment affecting thirst or communication

### Diabetes Insipidus Workup
**Water Deprivation Test:**
1. Restrict fluids, monitor weight, urine output, urine/serum osmolality
2. Stop when urine osm plateaus or weight drops 3-5%
3. Give DDAVP

| Response | Diagnosis |
|----------|-----------|
| Urine concentrates after DDAVP | Central DI |
| Urine doesn't concentrate | Nephrogenic DI |
| Urine concentrates with water deprivation | Primary polydipsia |

### Hypernatremia Correction
**Free Water Deficit:**
TBW = Weight (kg) × 0.6 (males) or 0.5 (females)
Deficit = TBW × [(Na - 140)/140]

**Rate of Correction:**
- Maximum 10-12 mEq/L per 24 hours (chronic)
- Can correct faster in acute (<24-48 hours) hypernatremia
- Monitor every 4-6 hours initially

**Fluid Selection:**
| Fluid | Sodium Content | Use |
|-------|----------------|-----|
| D5W | 0 mEq/L | Pure free water deficit |
| 0.45% saline | 77 mEq/L | Hypovolemic hypernatremia |
| 0.9% saline | 154 mEq/L | Severe hypovolemia first |`,
      keyTerms: [
        { term: 'Edelman equation', definition: 'Plasma Na = (Total Na + Total K) / Total Body Water; explains that sodium concentration reflects ratio, not total amount' },
        { term: 'osmotic demyelination syndrome', definition: 'Brain damage from overly rapid correction of chronic hyponatremia; affects pons (central pontine myelinolysis) and other areas' },
        { term: 'aquaporin-2', definition: 'Water channel inserted into collecting duct under ADH influence; allows water reabsorption' },
        { term: 'reset osmostat', definition: 'Variant of SIADH where ADH regulation is normal but set around a lower sodium level' },
        { term: 'cerebral salt wasting', definition: 'Brain injury-induced renal sodium loss causing hypovolemic hyponatremia; controversial entity' },
        { term: 'water deprivation test', definition: 'Diagnostic test for diabetes insipidus; assesses urine concentration ability' },
      ],
      clinicalNotes: 'In hyponatremia, always check urine osmolality - if <100 mOsm/kg, the patient is maximally diluting and the problem is excessive water intake (polydipsia). Beware of overcorrection risk factors: alcoholism, malnutrition, hypokalemia, very low initial sodium. In hypernatremia, calculate free water deficit but also account for ongoing losses.',
    },
    4: {
      level: 4,
      summary: 'Complex sodium disorders require individualized management considering comorbidities, concurrent electrolyte abnormalities, and medication effects; advanced treatments include vasopressin receptor antagonists and DDAVP strategies for controlled correction.',
      explanation: `## Complex Hyponatremia Scenarios

### Exercise-Associated Hyponatremia (EAH)
- Occurs in marathon runners, triathletes, military trainees
- Pathophysiology: Excessive hypotonic fluid intake + non-osmotic ADH release
- Prevention: Drink to thirst, not on schedule; maintain salt intake
- Treatment: If symptomatic, 3% saline 100 mL boluses; if asymptomatic, observation

### Hyponatremia in Heart Failure
- Mechanism: Low cardiac output → non-osmotic ADH release + impaired renal perfusion
- Prognostic: Na <135 predicts worse outcomes
- Treatment:
  - Fluid restriction (<1.5 L/day)
  - Optimize heart failure therapy (diuretics, neurohormonal blockade)
  - Tolvaptan (vaptans): Increase free water excretion; limited outcome data

### Hyponatremia in Cirrhosis
- Mechanism: Splanchnic vasodilation → effective hypovolemia → ADH
- Associated with hepatorenal syndrome risk
- Treatment:
  - Fluid restriction
  - Avoid aggressive correction (increased ODS risk)
  - Tolvaptan: Use cautiously (hepatotoxicity reports)
  - Albumin infusions for severe

### Thiazide-Induced Hyponatremia
- More common than loop diuretic-induced
- Mechanism: Impaired diluting capacity (thiazides block NaCl in DCT) + water retention
- Risk factors: Elderly women, low body mass
- May be severe (Na <110)
- Treatment: Stop thiazide (may take weeks to resolve); may need permanent avoidance

### Beer Potomania / Tea-and-Toast
- Low solute intake limits renal water excretion
- Urine osmolality low but not maximally dilute (ADH appropriately suppressed)
- Sudden increase in solute intake (eating) → brisk water diuresis → rapid Na rise
- Risk of ODS; monitor closely when refeeding

## Osmotic Demyelination Syndrome (ODS)

### Risk Factors
- Chronic hyponatremia (>48 hours)
- Severe hyponatremia (Na <105 mEq/L)
- Alcoholism, malnutrition
- Hypokalemia (uncorrected during sodium correction)
- Liver disease
- Very low initial sodium

### Presentation
- Onset: 2-6 days after overcorrection
- Classic: Central pontine myelinolysis (locked-in syndrome, quadriparesis, dysarthria)
- Extrapontine: Movement disorders, behavioral changes
- MRI: May be delayed 1-2 weeks; T2/FLAIR hyperintensity in pons

### Prevention Strategies
1. Calculate expected rise with fluids
2. Frequent monitoring (q4-6 hours initially)
3. Correct hypokalemia before/alongside sodium (K correction raises Na)
4. Consider DDAVP clamp strategy in high-risk patients

### DDAVP Clamp Strategy
- Administer DDAVP 1-2 mcg IV/SC q8h
- This fixes urine output at low volume (high osm)
- Infuse 3% saline at rate to achieve desired Na rise
- Allows precise control; prevents spontaneous overcorrection

### Overcorrection Rescue
If sodium rises too fast:
1. Stop all saline infusions
2. Administer D5W 3-6 mL/kg/hr
3. Give DDAVP 2-4 mcg IV
4. Target: Relower sodium by 2-3 mEq/L
5. Monitor closely; repeat as needed

## Vasopressin Receptor Antagonists (Vaptans)

### Mechanism
- Block V2 receptor in collecting duct
- Cause aquaresis (electrolyte-free water diuresis)
- Raise sodium without sodium administration

### Agents
| Agent | Route | Indication |
|-------|-------|------------|
| Tolvaptan | Oral | SIADH, heart failure |
| Conivaptan | IV | Hospitalized hyponatremia |

### Prescribing Considerations
- Initiate in hospital (risk of overcorrection)
- Avoid fluid restriction initially (prevent overcorrection)
- Use lower doses initially
- Not for hypovolemic hyponatremia
- Hepatotoxicity with prolonged tolvaptan use (FDA warning)

### Indications
- SIADH refractory to fluid restriction
- Hypervolemic hyponatremia (heart failure, cirrhosis) - limited benefit data
- Not first-line; consider when other measures fail

## Advanced Hypernatremia Management

### ICU-Acquired Hypernatremia
- Common (up to 25% of ICU patients)
- Causes: Inadequate free water prescription, osmotic diuresis, diabetes insipidus, hypertonic fluids
- Associated with increased mortality
- Prevention: Prescribe adequate free water (estimate insensible losses + ongoing)

### Central DI Management
**Acute (Post-neurosurgery):**
- Often triphasic: DI → SIADH → permanent DI
- Monitor urine output and sodium closely
- Replace urine output mL-for-mL with hypotonic fluid
- DDAVP when DI established

**Chronic:**
- DDAVP intranasal (10-20 mcg) or oral (0.1-0.4 mg BID)
- Titrate to control polyuria/polydipsia
- Allow "breakthrough" for safety (periodic DDAVP holiday)

### Nephrogenic DI Management
**Treat Underlying Cause:**
- Discontinue lithium if possible
- Correct hypercalcemia, hypokalemia
- Relieve obstruction

**Reduce Urine Output:**
- Thiazide diuretics (paradoxical; reduce volume → increase proximal reabsorption)
- NSAIDs (reduce prostaglandin inhibition of ADH)
- Amiloride (blocks lithium entry; useful for lithium-induced NDI)
- Low-sodium diet

### Formulas for Hypernatremia Correction
**Adrogue-Madias Formula:**
Change in Na per liter of infusate = (Infusate Na - Serum Na) / (TBW + 1)

| Infusate | Na Content |
|----------|------------|
| D5W | 0 |
| 0.2% saline | 34 |
| 0.45% saline | 77 |
| 0.9% saline | 154 |
| 3% saline | 513 |`,
      keyTerms: [
        { term: 'vaptan', definition: 'Vasopressin receptor antagonist; causes aquaresis and raises sodium in euvolemic/hypervolemic hyponatremia' },
        { term: 'DDAVP clamp', definition: 'Strategy using DDAVP to fix urine output while infusing hypertonic saline at controlled rate for precise sodium correction' },
        { term: 'aquaresis', definition: 'Electrolyte-free water diuresis; induced by vaptans' },
        { term: 'triphasic response', definition: 'Pattern after pituitary surgery: initial DI, then SIADH (days 5-7), then permanent DI' },
        { term: 'Adrogue-Madias formula', definition: 'Equation predicting sodium change per liter of infusate; guides fluid selection and rate' },
        { term: 'central pontine myelinolysis', definition: 'Classic form of ODS affecting the pons; presents with quadriparesis, locked-in syndrome' },
      ],
      clinicalNotes: 'In high-risk patients (alcoholism, Na <105, malnutrition), use DDAVP clamp strategy for controlled correction. Correct hypokalemia simultaneously - potassium repletion raises sodium (Edelman equation). Tolvaptan is useful for SIADH but start in hospital and do not restrict fluids initially to prevent overcorrection.',
    },
    5: {
      level: 5,
      summary: 'Expert management of dysnatremias integrates molecular understanding of aquaporin physiology, genetic variants in AVP signaling, precision correction strategies, and recognition of emerging clinical entities and therapeutic targets.',
      explanation: `## Molecular Mechanisms of Water Balance

### Aquaporin-2 (AQP2) Regulation
**Normal Pathway:**
1. AVP binds V2 receptor (V2R) on basolateral membrane of principal cells
2. cAMP-PKA signaling cascade
3. AQP2-containing vesicles translocate to apical membrane
4. Water reabsorption from tubular lumen

**Genetic Disorders:**
- AVPR2 mutations (V2R): X-linked nephrogenic DI (90% of genetic NDI)
- AQP2 mutations: Autosomal NDI (rare)
- Activating V2R mutations: Nephrogenic SIADH (very rare)

### Urea Transporters
- UT-A1, UT-A3 in inner medullary collecting duct
- Contribute to medullary osmotic gradient
- Impaired in low-protein diet (beer potomania mechanism)

### Tonicity Sensing
- Osmoreceptors in hypothalamus (OVLT, SFO)
- TRPV4 channels: Mechanical stretch sensors for osmolality
- Integrate with thirst center and ADH release

## Emerging Entities

### Nephrogenic Syndrome of Inappropriate Antidiuresis (NSIAD)
- Activating mutations in V2R
- Phenotype: Hyponatremia with low ADH levels
- Unlike SIADH: ADH is low (the receptor is constitutively active)
- Treatment: Fluid restriction; vaptans ineffective (receptor already activated)

### Adipsic Hypernatremia
- Loss of thirst despite hypernatremia
- Causes: Hypothalamic lesions, tumors, sarcoidosis
- Very difficult to manage; requires scheduled water intake
- May have concurrent central DI or reset osmostat

### Reset Osmostat
- ADH regulation intact but at lower set point
- Sodium stable at 125-130 despite normal volume and adrenal/thyroid function
- Distinguishing test: Water load test shows appropriate dilution
- Management: Usually observation; sodium stable and asymptomatic

### Glucocorticoid-Remediable Hyponatremia
- Hyponatremia that corrects with glucocorticoids but patient is not Addisonian
- Proposed mechanism: GR-mediated suppression of ADH
- Consider empiric steroids in refractory euvolemic hyponatremia

## Precision Correction Strategies

### Predictive Modeling
**Nguyen-Kurtz Formula Enhancement:**
Accounts for:
- Electrolyte-free water clearance
- Ongoing losses (GI, renal, insensible)
- Administered fluids and electrolytes
- More accurate than Adrogue-Madias in complex cases

**Electronic Decision Support:**
- Emerging tools calculate real-time sodium trajectory
- Alert for overcorrection risk
- Suggest fluid adjustments

### Potassium's Role (Edelman Equation Implications)
- Potassium repletion raises sodium (K enters cells, Na exits to maintain electroneutrality)
- In hyponatremia: Account for K given when calculating expected Na rise
- 40 mEq KCl ≈ 1 mEq/L sodium rise
- Critical in alcoholics, malnourished: Simultaneous K repletion increases ODS risk

### Relowering Sodium Protocol (Overcorrection)
1. Target: Relower Na to keep 24h change <8 mEq/L
2. Calculate required negative water balance
3. D5W infusion rate (typical: 3-6 mL/kg/hr)
4. DDAVP 2-4 mcg IV (blocks ongoing water diuresis)
5. Recheck sodium q2-4h
6. Continue until sodium lowered adequately

## Drug-Induced Sodium Disorders

### Medications Causing Hyponatremia
| Mechanism | Drugs |
|-----------|-------|
| SIADH induction | SSRIs, carbamazepine, oxcarbazepine, cyclophosphamide, opioids, NSAIDs, MDMA |
| Thiazide effect | HCTZ, chlorthalidone, metolazone |
| Reset osmostat | Carbamazepine, venlafaxine |

**SSRI-Induced Hyponatremia:**
- Onset: Usually within 2 weeks
- Risk factors: Elderly, female, concurrent thiazide
- May resolve with dose reduction or switch

### Medications Causing Hypernatremia
| Mechanism | Drugs |
|-----------|-------|
| Nephrogenic DI | Lithium, demeclocycline, amphotericin, foscarnet |
| Osmotic diuresis | Mannitol, high-dose corticosteroids, hypertonic saline |

### Lithium-Induced NDI
- Prevalence: Up to 40% with chronic use
- Mechanism: Lithium enters principal cells via ENaC, downregulates AQP2
- May persist after lithium discontinuation (years)
- Prevention: Amiloride blocks lithium entry
- Treatment: If lithium must continue: amiloride + thiazide; if stopped, NDI may slowly improve

## Outcomes and Quality Metrics

### Hyponatremia Outcomes
- In-hospital mortality doubles with hyponatremia
- Overcorrection → ODS: 1-2% in series, higher with risk factors
- ODS mortality: 50% (improved with early relowering)

### Quality Improvement Targets
1. Time to first sodium recheck after diagnosis
2. Rate of overcorrection (>10-12 mEq/L in 24h)
3. Use of DDAVP clamp in high-risk patients
4. 30-day readmission for recurrent dysnatremia

### Outpatient Chronic Hyponatremia
- SIADH management: Fluid restriction ± salt tabs ± urea ± tolvaptan
- Urea therapy: 15-60 g/day divided; osmotic diuresis without risk of overcorrection
- Monitor for falls, cognitive impairment (associated with chronic mild hyponatremia)

## Future Directions

### Biomarkers
- Copeptin: Stable surrogate for AVP; may aid diagnosis
- Emerging data on copeptin-guided therapy

### Novel Therapeutics
- Selective V2R antagonists with improved safety profiles
- AQP2 modulators (research)
- Gene therapy for genetic NDI (preclinical)

### Personalized Medicine
- Genetic testing for familial DI
- Pharmacogenomics for drug-induced SIADH risk`,
      keyTerms: [
        { term: 'NSIAD', definition: 'Nephrogenic Syndrome of Inappropriate Antidiuresis; activating V2R mutation causing hyponatremia with low ADH' },
        { term: 'copeptin', definition: 'C-terminal fragment of AVP precursor; stable biomarker reflecting AVP secretion' },
        { term: 'adipsic hypernatremia', definition: 'Hypernatremia with absent thirst due to hypothalamic lesion; requires scheduled water intake' },
        { term: 'TRPV4', definition: 'Transient receptor potential vanilloid 4 channel; mechanosensor in osmoreceptor cells' },
        { term: 'urea therapy', definition: 'Oral urea 15-60 g/day for chronic SIADH; induces osmotic diuresis safely' },
        { term: 'Nguyen-Kurtz formula', definition: 'Advanced formula for sodium prediction incorporating electrolyte-free water clearance and ongoing losses' },
      ],
      clinicalNotes: `Expert practice pearls:
1. In refractory euvolemic hyponatremia, consider reset osmostat (water load test), NSIAD (check ADH level), or glucocorticoid-remediable hyponatremia
2. Potassium repletion raises sodium - factor this into correction calculations, especially in malnourished patients
3. Urea therapy is underutilized for chronic SIADH; avoids overcorrection risk seen with vaptans
4. For lithium NDI, amiloride is first-line (blocks lithium entry); continue even after lithium stopped
5. Copeptin may eventually replace AVP measurement (more stable, easier to measure)
6. In adipsic patients, structured water intake schedules and close monitoring are essential
7. Consider electronic sodium calculators for complex cases to predict trajectory and prevent overcorrection`,
    },
  },

  media: [
    {
      id: 'hyponatremia-algorithm',
      type: 'diagram',
      filename: 'hyponatremia-algorithm.svg',
      title: 'Hyponatremia Diagnostic Algorithm',
      description: 'Stepwise approach using osmolality, urine studies, and volume status',
    },
    {
      id: 'ods-mri',
      type: 'image',
      filename: 'ods-mri.jpg',
      title: 'Osmotic Demyelination Syndrome MRI',
      description: 'T2 hyperintensity in central pons (central pontine myelinolysis)',
    },
  ],

  citations: [
    {
      id: 'sterns-hyponatremia',
      type: 'article',
      title: 'Disorders of Plasma Sodium',
      authors: ['Sterns RH'],
      source: 'New England Journal of Medicine',
      page: '372:55-65',
    },
    {
      id: 'spasovski-guidelines',
      type: 'article',
      title: 'Clinical Practice Guideline on Diagnosis and Treatment of Hyponatraemia',
      authors: ['Spasovski G', 'et al.'],
      source: 'European Journal of Endocrinology',
      page: '170:G1-G47',
    },
  ],

  crossReferences: [
    { targetId: 'condition-potassium-disorders', targetType: 'condition', relationship: 'sibling', label: 'Potassium Disorders' },
    { targetId: 'condition-acid-base-disorders', targetType: 'condition', relationship: 'related', label: 'Acid-Base Disorders' },
    { targetId: 'condition-chronic-kidney-disease', targetType: 'condition', relationship: 'related', label: 'CKD' },
  ],

  tags: {
    systems: ['urinary', 'renal', 'endocrine'],
    topics: ['nephrology', 'electrolytes', 'critical care', 'internal medicine'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'emergency medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default sodiumDisorders;
