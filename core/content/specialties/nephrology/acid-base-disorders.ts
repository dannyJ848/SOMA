/**
 * Acid-Base Disorders - Comprehensive Educational Content
 *
 * Covers metabolic acidosis/alkalosis, respiratory acidosis/alkalosis,
 * mixed disorders, with pathophysiology, diagnosis, and management.
 */

import { EducationalContent } from '../../types';

export const acidBaseDisorders: EducationalContent = {
  id: 'condition-acid-base-disorders',
  type: 'condition',
  name: 'Acid-Base Disorders',
  alternateNames: ['Acid Base Imbalance', 'pH Disorders', 'Metabolic Acidosis', 'Respiratory Acidosis'],

  levels: {
    1: {
      level: 1,
      summary: 'Your blood needs to stay at just the right level of acidity for your body to work properly.',
      explanation: `Your blood has a special balance called pH that tells us if something is acidic (like lemon juice) or basic/alkaline (like soap). Your body works best when blood pH stays in a very narrow range - not too acidic, not too basic.

**What Is pH?**
- pH is measured on a scale from 0 to 14
- 7 is neutral (like pure water)
- Below 7 is acidic
- Above 7 is basic (alkaline)
- Normal blood pH is 7.35-7.45 (slightly basic)

**How Does Your Body Keep pH Balanced?**

Your body has three main ways to keep pH just right:

1. **Chemical Buffers** (work instantly)
   - Special molecules in your blood that soak up extra acid or base
   - Like a sponge for acid!

2. **Your Lungs** (work in minutes)
   - Breathe faster to blow off acid (as carbon dioxide)
   - Breathe slower to keep acid in

3. **Your Kidneys** (work over hours to days)
   - Remove extra acid in your urine
   - Keep important buffers in your blood

**What Happens When pH Is Off?**

*Acidosis (blood is too acidic):*
- Can make you breathe fast
- Feel confused or sleepy
- Can happen with severe diabetes, kidney problems, or lung disease

*Alkalosis (blood is too basic):*
- Can cause muscle twitching
- Numbness and tingling
- Can happen with severe vomiting or breathing too fast

**Why Does This Matter?**
When pH is off, your body's enzymes (tiny workers that run chemical reactions) don't work properly. This can affect your heart, brain, and other organs.`,
      keyTerms: [
        { term: 'pH', definition: 'A measure of how acidic or basic something is, on a scale from 0-14' },
        { term: 'acidosis', definition: 'When blood becomes too acidic (pH below 7.35)', pronunciation: 'as-ih-DOH-sis' },
        { term: 'alkalosis', definition: 'When blood becomes too basic (pH above 7.45)', pronunciation: 'al-kah-LOH-sis' },
        { term: 'buffer', definition: 'A substance that helps prevent big changes in pH' },
      ],
      analogies: [
        'Think of pH like the temperature in your house. Just like a thermostat keeps temperature in a comfortable range, your body has systems to keep pH in the right range.',
        'Your lungs and kidneys work like a team of cleaners - the lungs work quickly to handle acid, while the kidneys work more slowly but can handle bigger jobs.',
      ],
      examples: [
        'Someone breathing very fast because they are anxious can blow off too much carbon dioxide, making their blood too alkaline.',
        'A person with severe uncontrolled diabetes can build up acids called ketones, making their blood too acidic.',
      ],
    },
    2: {
      level: 2,
      summary: 'Acid-base disorders are classified as metabolic or respiratory, acidosis or alkalosis, based on the primary disturbance in bicarbonate or carbon dioxide, with compensatory responses from the opposite system.',
      explanation: `## Understanding Acid-Base Balance

**Normal Values:**
| Parameter | Normal Range |
|-----------|--------------|
| pH | 7.35-7.45 |
| PaCO2 | 35-45 mmHg |
| HCO3- | 22-26 mEq/L |

**The Henderson-Hasselbalch Relationship:**
pH depends on the ratio of bicarbonate (HCO3-) to carbon dioxide (CO2):
- More HCO3- (or less CO2) = higher pH (alkalosis)
- Less HCO3- (or more CO2) = lower pH (acidosis)

## The Four Primary Disorders

### 1. Metabolic Acidosis (low HCO3-)
**Causes:**
- Diabetic ketoacidosis (DKA)
- Lactic acidosis (shock, sepsis)
- Kidney failure
- Diarrhea (bicarbonate loss)
- Toxins (methanol, ethylene glycol)

**Compensation:** Lungs breathe faster to blow off CO2 (Kussmaul breathing)

### 2. Metabolic Alkalosis (high HCO3-)
**Causes:**
- Vomiting (loss of stomach acid)
- Nasogastric suction
- Diuretics
- Excessive antacid use

**Compensation:** Lungs breathe slower to retain CO2

### 3. Respiratory Acidosis (high CO2)
**Causes:**
- COPD, asthma
- Drug overdose (opioids)
- Neuromuscular disease
- Obesity hypoventilation

**Compensation:** Kidneys retain bicarbonate

### 4. Respiratory Alkalosis (low CO2)
**Causes:**
- Anxiety/panic attacks
- Pain
- Fever
- Sepsis (early)
- High altitude

**Compensation:** Kidneys excrete bicarbonate

## Simple Approach to Interpretation

**Step 1:** Look at the pH
- <7.35 = acidemia
- >7.45 = alkalemia

**Step 2:** Determine the primary disorder
- pH low + CO2 high = Respiratory acidosis
- pH low + HCO3 low = Metabolic acidosis
- pH high + CO2 low = Respiratory alkalosis
- pH high + HCO3 high = Metabolic alkalosis

**Step 3:** Check for appropriate compensation
- If compensation is less or more than expected, suspect a mixed disorder

## The Anion Gap

**Formula:** AG = Na - (Cl + HCO3)
**Normal:** 8-12 mEq/L

**High Anion Gap Acidosis (MUDPILES):**
- Methanol
- Uremia (kidney failure)
- DKA (diabetic ketoacidosis)
- Propylene glycol
- Isoniazid, Iron
- Lactic acidosis
- Ethylene glycol
- Salicylates

**Normal Anion Gap Acidosis:**
- Diarrhea
- Renal tubular acidosis (RTA)
- Early kidney disease
- Saline infusion (dilutional)`,
      keyTerms: [
        { term: 'PaCO2', definition: 'Partial pressure of carbon dioxide in arterial blood; controlled by the lungs' },
        { term: 'HCO3-', definition: 'Bicarbonate; the main buffer in blood, controlled by kidneys', pronunciation: 'bi-CAR-bon-ate' },
        { term: 'anion gap', definition: 'The difference between measured cations and anions; helps classify metabolic acidosis' },
        { term: 'Kussmaul breathing', definition: 'Deep, rapid breathing as compensation for metabolic acidosis' },
        { term: 'compensation', definition: 'The bodys attempt to normalize pH using the system opposite to the primary disorder' },
      ],
      analogies: [
        'The anion gap is like a detective clue - it helps you figure out what unmeasured acid is causing the problem.',
        'Compensation is like a seesaw - if one side goes down (acidosis), the other side tries to go up to balance it.',
      ],
    },
    3: {
      level: 3,
      summary: 'Acid-base interpretation requires systematic analysis of pH, PaCO2, HCO3, anion gap, and expected compensation formulas to identify primary disorders and mixed disturbances.',
      explanation: `## Systematic Acid-Base Analysis

### Step-by-Step Approach

**Step 1: Assess the pH**
- Acidemia: pH <7.35
- Alkalemia: pH >7.45
- Normal pH with abnormal CO2/HCO3 = compensated disorder or mixed

**Step 2: Identify Primary Disorder**
Look at which parameter explains the pH change:
- Respiratory: CO2 drives pH (pH and CO2 move opposite)
- Metabolic: HCO3 drives pH (pH and HCO3 move together)

**Step 3: Calculate Expected Compensation**

| Primary Disorder | Expected Compensation |
|-----------------|----------------------|
| Metabolic Acidosis | PaCO2 = 1.5 × HCO3 + 8 (±2) (Winters formula) |
| Metabolic Alkalosis | PaCO2 rises 0.7 mmHg per 1 mEq/L rise in HCO3 |
| Acute Resp Acidosis | HCO3 rises 1 per 10 mmHg rise in CO2 |
| Chronic Resp Acidosis | HCO3 rises 3.5 per 10 mmHg rise in CO2 |
| Acute Resp Alkalosis | HCO3 falls 2 per 10 mmHg fall in CO2 |
| Chronic Resp Alkalosis | HCO3 falls 5 per 10 mmHg fall in CO2 |

**Step 4: Calculate Anion Gap**
AG = Na - (Cl + HCO3)
Normal: 8-12 mEq/L (or 12 ± 4 depending on lab)

**Step 5: If AG elevated, calculate Delta-Delta Ratio**
Delta-Delta = (AG - 12) / (24 - HCO3)
- <1: Mixed high AG + non-AG metabolic acidosis
- 1-2: Pure high AG metabolic acidosis
- >2: Mixed high AG acidosis + metabolic alkalosis

### Anion Gap Acidosis in Detail

**GOLDMARK Mnemonic (updated):**
- Glycols (ethylene, propylene)
- Oxoproline (chronic acetaminophen)
- L-Lactate
- D-Lactate (short bowel syndrome)
- Methanol
- Aspirin (salicylates)
- Renal failure (uremia)
- Ketoacidosis

**Osmolar Gap:**
- Calculated osmolality = 2(Na) + Glucose/18 + BUN/2.8
- Measured - Calculated >10 = osmolar gap
- High osmolar gap + high AG acidosis: Think toxic alcohols

### Non-Anion Gap (Hyperchloremic) Acidosis

**Urinary Anion Gap (UAG):**
UAG = Una + UK - UCl
- Negative UAG: GI bicarbonate loss (diarrhea) - kidneys are responding appropriately
- Positive UAG: Renal tubular acidosis (kidneys cannot excrete acid)

**RTA Classification:**
| Type | Defect | Serum K+ | Urine pH | Causes |
|------|--------|----------|----------|--------|
| Type 1 (Distal) | Cannot secrete H+ | Low | >5.5 | Autoimmune, drugs |
| Type 2 (Proximal) | Cannot reabsorb HCO3 | Low | <5.5 | Fanconi, myeloma |
| Type 4 | Aldosterone deficiency/resistance | High | <5.5 | DM, ACEi, K-sparing diuretics |

### Metabolic Alkalosis

**Generation vs. Maintenance:**
- Generation: Initial HCO3 gain (vomiting, diuretics)
- Maintenance: Why kidneys dont excrete excess HCO3
  - Volume depletion (low Cl delivery to distal nephron)
  - Hypokalemia (stimulates H+ secretion)
  - Hyperaldosteronism

**Saline-Responsive vs. Saline-Resistant:**
| Saline-Responsive (UCl <20) | Saline-Resistant (UCl >20) |
|-----------------------------|----------------------------|
| Vomiting, NG suction | Primary aldosteronism |
| Diuretics (after effect) | Cushings syndrome |
| Post-hypercapnia | Severe hypokalemia |

### Mixed Disorders

**Common Examples:**
1. DKA + vomiting = High AG acidosis + metabolic alkalosis
2. COPD + diuretics = Respiratory acidosis + metabolic alkalosis
3. Sepsis = Lactic acidosis + respiratory alkalosis (early)
4. Salicylate toxicity = High AG acidosis + respiratory alkalosis`,
      keyTerms: [
        { term: 'Winters formula', definition: 'Expected PaCO2 = 1.5 × HCO3 + 8; used to check compensation in metabolic acidosis' },
        { term: 'delta-delta ratio', definition: 'Compares change in AG to change in HCO3; identifies hidden disorders' },
        { term: 'osmolar gap', definition: 'Difference between measured and calculated osmolality; elevated in toxic alcohol ingestion' },
        { term: 'urinary anion gap', definition: 'Una + UK - UCl; helps distinguish GI from renal causes of non-AG acidosis' },
        { term: 'RTA', definition: 'Renal Tubular Acidosis; kidney tubule defect causing non-AG metabolic acidosis' },
        { term: 'saline-responsive', definition: 'Metabolic alkalosis that corrects with IV normal saline (volume repletion)' },
      ],
      clinicalNotes: 'Always calculate the anion gap in metabolic acidosis. A normal pH with abnormal CO2/HCO3 suggests compensation or mixed disorder. The delta-delta ratio is essential when AG is elevated to unmask coexisting disorders. Check osmolar gap when toxic alcohol ingestion is suspected.',
    },
    4: {
      level: 4,
      summary: 'Advanced acid-base management requires understanding cellular mechanisms of pH regulation, complex mixed disorders, targeted therapies for specific etiologies, and recognition of acid-base derangements in critical illness.',
      explanation: `## Advanced Pathophysiology

### Cellular Acid-Base Handling

**Proximal Tubule (80-90% of HCO3 reabsorption):**
- Luminal Na+/H+ exchanger (NHE3)
- Carbonic anhydrase converts H2CO3 to CO2 + H2O
- Basolateral Na+/HCO3 cotransporter (NBCe1)

**Distal Nephron (acid secretion):**
- Type A intercalated cells: H+-ATPase, H+/K+-ATPase (secrete H+)
- Type B intercalated cells: Pendrin (secrete HCO3 in alkalosis)

**Ammonium Handling:**
- Proximal tubule: Glutamine → NH4+ + α-ketoglutarate → new HCO3
- Thick ascending limb: NH4+ reabsorbed via NKCC2
- Collecting duct: NH3 trapping as NH4+ in acidic urine

### Stewart Approach (Physicochemical)

**Independent Variables:**
1. Strong ion difference (SID) = (Na + K + Ca + Mg) - (Cl + lactate)
2. Total weak acids (Atot) = Albumin + phosphate
3. PaCO2

**Interpretation:**
- Low SID → acidosis
- High SID → alkalosis
- High Atot → acidosis
- Low Atot → alkalosis

**Advantages:** Explains effects of saline infusion (dilutional acidosis from decreased SID)

## Complex Clinical Scenarios

### Triple Acid-Base Disorders

**Example: Alcoholic with DKA, vomiting, and chronic lung disease**
- High AG metabolic acidosis (ketoacidosis)
- Metabolic alkalosis (vomiting)
- Chronic respiratory acidosis (COPD)

**Approach:**
1. Calculate AG
2. Calculate delta-delta
3. Check if compensation is appropriate for each disorder

### Lactic Acidosis Classification

**Type A (hypoxic/hypoperfusion):**
- Shock (cardiogenic, septic, hypovolemic)
- Severe hypoxemia
- Severe anemia
- Carbon monoxide poisoning

**Type B (non-hypoxic):**
- B1: Underlying disease (liver failure, malignancy, DKA)
- B2: Drugs/toxins (metformin, propofol, nucleoside analogues)
- B3: Inborn errors of metabolism

**D-Lactic Acidosis:**
- Short bowel syndrome with bacterial overgrowth
- Not detected by standard lactate assays
- Presents with encephalopathy

### Toxic Alcohol Ingestion

**Methanol:**
- Source: Windshield fluid, solvents
- Metabolized to formic acid → retinal toxicity (blindness)
- Treatment: Fomepizole (inhibits alcohol dehydrogenase), dialysis

**Ethylene Glycol:**
- Source: Antifreeze
- Metabolized to glycolic acid, oxalic acid → crystalluria, AKI
- Calcium oxalate crystals in urine
- Treatment: Fomepizole, dialysis

**Propylene Glycol:**
- Source: IV lorazepam, phenobarbital
- Causes lactic acidosis and osmolar gap
- Usually self-limited after stopping infusion

### Diabetic Ketoacidosis Management

**Initial Assessment:**
- Severity: pH, HCO3, mental status
- Precipitant: Infection, MI, medication noncompliance
- Calculate AG, corrected Na, effective osmolality

**Treatment Protocol:**
1. **Fluids:** NS initially, then 0.45% saline
2. **Insulin:** 0.1 units/kg/hr IV after K >3.3
3. **Potassium:** Add K when <5.3 mEq/L
4. **Bicarbonate:** Only if pH <6.9 (controversial)
5. **Transition:** When AG closes and patient eating → overlap IV and SC insulin

**Euglycemic DKA:**
- Occurs with SGLT2 inhibitors
- Glucose may be normal or only mildly elevated
- Maintain high index of suspicion

### Metabolic Alkalosis Treatment

**Saline-Responsive:**
- Volume resuscitation with NS
- Correct hypokalemia
- Acetazolamide if volume overload limits saline

**Saline-Resistant:**
- Treat underlying cause (aldosterone excess)
- Potassium repletion
- Spironolactone
- Severe cases: HCl infusion, dialysis

## Acid-Base in Critical Illness

### Sepsis
**Early:** Respiratory alkalosis (hyperventilation)
**Late:** Lactic acidosis (hypoperfusion)

**Lactate as a resuscitation target:**
- Lactate clearance >10% in first 2 hours associated with improved survival
- May indicate adequacy of resuscitation

### Cardiac Arrest
- Profound mixed metabolic and respiratory acidosis
- Sodium bicarbonate controversial:
  - May worsen intracellular acidosis
  - Consider only if prolonged arrest, pre-existing acidosis, or hyperkalemia

### Mechanical Ventilation
**Permissive hypercapnia:**
- Allow CO2 to rise to achieve lung-protective ventilation
- pH >7.20 generally tolerated
- Renal compensation develops over days

**Post-hypercapnic alkalosis:**
- Rapid correction of chronic respiratory acidosis
- HCO3 remains elevated → severe alkalosis
- Treatment: Acetazolamide, slow ventilator weaning`,
      keyTerms: [
        { term: 'Stewart approach', definition: 'Physicochemical method analyzing SID, Atot, and CO2 as independent determinants of pH' },
        { term: 'SID', definition: 'Strong Ion Difference; difference between strong cations and anions' },
        { term: 'fomepizole', definition: 'Alcohol dehydrogenase inhibitor used for methanol and ethylene glycol poisoning' },
        { term: 'euglycemic DKA', definition: 'DKA with normal or near-normal glucose; seen with SGLT2 inhibitors' },
        { term: 'D-lactate', definition: 'Bacterial metabolite causing acidosis and encephalopathy in short bowel syndrome' },
        { term: 'permissive hypercapnia', definition: 'Accepting elevated CO2 to enable lung-protective ventilation strategies' },
      ],
      clinicalNotes: 'In toxic alcohol ingestion, start fomepizole immediately while awaiting confirmatory levels. SGLT2 inhibitor-associated DKA can be missed due to normal glucose - check ketones liberally. Lactate trends are as important as absolute values in sepsis. Avoid rapid correction of chronic respiratory acidosis to prevent severe alkalosis.',
    },
    5: {
      level: 5,
      summary: 'Expert acid-base management integrates molecular transporters and signaling, precision approaches to complex disorders, novel biomarkers and therapies, and multidisciplinary care for refractory cases.',
      explanation: `## Molecular Mechanisms

### Acid-Sensing Mechanisms
**Renal sensors:**
- Soluble adenylyl cyclase (sAC): HCO3 sensor in kidney
- GPR4: pH-sensitive GPCR in collecting duct

**Systemic sensors:**
- Carotid body chemoreceptors: O2 and pH
- Central chemoreceptors: CO2/pH in brainstem

### Transporter Molecular Biology

**Proximal Tubule:**
- NHE3 (SLC9A3): Na+/H+ exchange; mutations cause proximal RTA
- NBCe1 (SLC4A4): Na+/HCO3 cotransport; mutations cause proximal RTA with ocular abnormalities
- Carbonic anhydrase II (CA2): Cytosolic enzyme; mutations cause combined proximal/distal RTA

**Collecting Duct:**
- H+-ATPase (ATP6V1B1, ATP6V0A4): Mutations cause distal RTA with sensorineural deafness
- AE1 (SLC4A1): Cl-/HCO3 exchange; mutations cause distal RTA

**Ammoniagenesis:**
- RHCG (SLC42A3): NH3 transport in collecting duct
- Critical for urinary acid excretion

### Aldosterone and Acid-Base

**Mineralocorticoid effects:**
- Increases ENaC activity → Na+ reabsorption, lumen negativity
- Stimulates H+-ATPase in type A intercalated cells
- Net effect: Enhanced H+ secretion

**Type 4 RTA mechanisms:**
- Aldosterone deficiency (adrenal insufficiency)
- Aldosterone resistance (pseudohypoaldosteronism)
- Drug-induced (ACEi, ARBs, K-sparing diuretics, trimethoprim)

## Precision Medicine Approaches

### Genetic Acid-Base Disorders

**Inherited RTA:**
- Autosomal dominant distal RTA: SLC4A1 mutations
- Autosomal recessive distal RTA with deafness: ATP6V1B1, ATP6V0A4
- Autosomal recessive proximal RTA: SLC4A4
- Carbonic anhydrase II deficiency: CA2 (osteopetrosis, cerebral calcification)

**Dent Disease:**
- CLCN5 or OCRL mutations
- Proximal tubule dysfunction with hypercalciuria
- Can cause proximal RTA

**Gitelman/Bartter Syndromes:**
- Present with metabolic alkalosis
- Gitelman (NCCT): Thiazide-like, hypokalemia, hypomagnesemia
- Bartter (NKCC2, ROMK, ClC-Kb): Loop diuretic-like

### Novel Biomarkers

**Urinary biomarkers in AKI with acidosis:**
- NGAL, KIM-1: Tubular injury markers
- May help distinguish prerenal from intrinsic causes

**Point-of-care lactate:**
- Rapid assessment in emergency settings
- Serial monitoring for resuscitation adequacy

### Emerging Therapies

**Veverimer (TRC101):**
- Oral non-absorbed polymer that binds HCl in GI tract
- For metabolic acidosis of CKD
- VALOR-CKD trial: Sustained HCO3 increase, improved muscle function

**Dichloroacetate:**
- Activates pyruvate dehydrogenase
- Theoretical treatment for lactic acidosis
- Limited clinical evidence

## Complex Clinical Challenges

### Acid-Base in ECMO

**VV-ECMO:**
- CO2 removal is very efficient
- Can cause severe respiratory alkalosis if sweep gas too high
- May unmask metabolic acidosis previously masked by hyperventilation

**VA-ECMO:**
- Mixed native lung and oxygenator gas exchange
- Harlequin syndrome: Different acid-base status in upper vs lower body
- Complex acid-base management required

### Dialysis and Acid-Base

**Hemodialysis:**
- Bicarbonate dialysate corrects metabolic acidosis
- Risk of post-dialysis alkalosis
- Dialysate bicarbonate typically 32-38 mEq/L

**CRRT:**
- Regional citrate anticoagulation: Citrate metabolized to HCO3
- Can cause metabolic alkalosis if citrate accumulates
- Monitor systemic ionized calcium and total Ca

### Refractory Acidosis

**When to consider bicarbonate therapy:**
- pH <7.1-7.15 with hemodynamic instability
- Severe hyperkalemia
- Certain poisonings (salicylates, TCA)

**Bicarbonate pitfalls:**
- Generates CO2 → may worsen intracellular acidosis if ventilation inadequate
- Volume and sodium load
- Hypokalemia (K+ shifts intracellularly)
- Overshoot alkalosis

**THAM (tris-hydroxymethyl aminomethane):**
- Does not generate CO2
- May be preferable when ventilation limited
- Causes hyperkalemia, hypoglycemia

**Dialysis for refractory acidosis:**
- CRRT with bicarbonate replacement
- Hemodialysis if hemodynamically stable
- Removes unmeasured anions in toxic ingestions

## Systems Approaches

### Acid-Base Quality Metrics
- ABG turnaround time
- Appropriate lactate measurement in sepsis
- Protocol adherence for DKA management

### Interdisciplinary Care
- Toxicology consultation for complex poisonings
- ICU collaboration for mechanical ventilation optimization
- Pharmacy for bicarbonate/THAM dosing
- Nephrology for RRT decisions

### Education and Training
- Simulation for complex acid-base scenarios
- Structured interpretation frameworks
- Case-based learning for mixed disorders`,
      keyTerms: [
        { term: 'NHE3', definition: 'Sodium-hydrogen exchanger 3; major H+ secretion mechanism in proximal tubule' },
        { term: 'soluble adenylyl cyclase', definition: 'Intracellular HCO3 sensor regulating acid-base transport' },
        { term: 'veverimer', definition: 'Non-absorbed HCl-binding polymer for metabolic acidosis of CKD' },
        { term: 'Dent disease', definition: 'X-linked proximal tubulopathy with hypercalciuria and nephrolithiasis' },
        { term: 'THAM', definition: 'Tris-hydroxymethyl aminomethane; buffer that does not generate CO2' },
        { term: 'regional citrate anticoagulation', definition: 'CRRT anticoagulation method where citrate metabolism provides bicarbonate' },
      ],
      clinicalNotes: `Key clinical pearls:
1. Consider genetic testing in familial RTA, especially with deafness or ocular abnormalities
2. Veverimer may emerge as treatment for CKD acidosis with muscle-preserving benefits
3. In ECMO, acid-base is complex - monitor both native and membrane lung contributions
4. Citrate anticoagulation in CRRT can cause metabolic alkalosis; monitor calcium ratio
5. THAM is an alternative to bicarbonate when hypercarbia limits CO2 tolerance
6. Serial lactate clearance is a resuscitation target in sepsis
7. Euglycemic DKA from SGLT2i requires high clinical suspicion`,
    },
  },

  media: [
    {
      id: 'acid-base-algorithm',
      type: 'diagram',
      filename: 'acid-base-algorithm.svg',
      title: 'Systematic Acid-Base Interpretation Algorithm',
      description: 'Flowchart for stepwise analysis of arterial blood gases',
    },
    {
      id: 'renal-acid-handling',
      type: 'diagram',
      filename: 'renal-acid-handling.svg',
      title: 'Renal Acid-Base Handling',
      description: 'Diagram of proximal and distal tubule acid-base transport mechanisms',
    },
  ],

  citations: [
    {
      id: 'emmett-acid-base',
      type: 'textbook',
      title: 'Acid-Base Disorders',
      source: "Brenner and Rector's The Kidney",
      chapter: '16-17',
    },
    {
      id: 'kellum-stewart',
      type: 'article',
      title: 'Stewart Approach to Acid-Base',
      authors: ['Kellum JA'],
      source: 'Critical Care Medicine',
    },
    {
      id: 'kraut-acidosis-ckd',
      type: 'article',
      title: 'Metabolic Acidosis of CKD: Diagnosis, Clinical Characteristics, and Treatment',
      authors: ['Kraut JA', 'Madias NE'],
      source: 'American Journal of Kidney Diseases',
    },
  ],

  crossReferences: [
    { targetId: 'condition-chronic-kidney-disease', targetType: 'condition', relationship: 'related', label: 'CKD (causes metabolic acidosis)' },
    { targetId: 'condition-acute-kidney-injury', targetType: 'condition', relationship: 'related', label: 'AKI' },
    { targetId: 'condition-potassium-disorders', targetType: 'condition', relationship: 'related', label: 'Potassium Disorders' },
    { targetId: 'process-dialysis', targetType: 'process', relationship: 'related', label: 'Dialysis' },
  ],

  tags: {
    systems: ['urinary', 'renal', 'respiratory'],
    topics: ['nephrology', 'pulmonology', 'critical care', 'toxicology', 'electrolytes'],
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

export default acidBaseDisorders;
