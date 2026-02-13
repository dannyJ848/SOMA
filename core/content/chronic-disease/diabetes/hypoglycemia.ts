/**
 * Hypoglycemia - Chronic Disease Education
 *
 * Comprehensive patient education about hypoglycemia (low blood sugar),
 * its causes, symptoms, and emergency management.
 */

import { EducationalContent } from '../../types';

export const HYPOGLYCEMIA: EducationalContent = {
  id: 'chronic-disease-hypoglycemia',
  type: 'condition',
  name: 'Hypoglycemia',
  alternateNames: ['Low blood sugar', 'Low blood glucose', 'Insulin reaction', 'Insulin shock', 'Hypo'],

  levels: {
    1: {
      level: 1,
      summary: 'Hypoglycemia means your blood sugar drops too low. It can happen if you take too much diabetes medicine, skip meals, or exercise more than usual. Quick treatment with fast-acting sugar is important.',
      explanation: `**What Is Hypoglycemia?**

Hypoglycemia (hy-po-gly-SEE-mee-uh) means low blood sugar. Blood sugar below 70 mg/dL is too low and needs to be treated right away.

**Why Does It Happen?**

Common causes:
- Taking too much diabetes medicine
- Skipping or delaying meals
- Not eating enough carbohydrates
- Exercising more than usual
- Drinking alcohol on an empty stomach

**Common Symptoms:**


Mild to Moderate:
---------------------------------
- Shakiness or trembling
- Sweating
- Feeling hungry
- Dizziness
- Headache
- Pale skin
- Fast heartbeat
- Confusion or trouble thinking
- Mood changes (irritable, anxious)
---------------------------------


**How to Treat Low Blood Sugar:**

Follow the **15-15 Rule**:
1. Check your blood sugar if possible
2. Eat or drink 15 grams of fast-acting carbohydrate
3. Wait 15 minutes
4. Check your blood sugar again
5. If still below 70 mg/dL, repeat

**Fast-Acting Carbohydrates (15 grams):**
- 4 oz (1/2 cup) fruit juice or regular soda
- 1 tablespoon sugar or honey
- 3-4 glucose tablets
- 1 tube glucose gel
- Hard candy (check label for 15g)

**After Your Blood Sugar Is Up:**

Eat a small snack with protein to keep your sugar stable:
- Crackers with peanut butter
- Cheese and crackers
- Half a sandwich
- Yogurt with nuts

**Severe Hypoglycemia:**

If someone cannot swallow or is unconscious:
- **DO NOT** give food or drink by mouth (they could choke)
- Use a glucagon injection if available
- Call 911 for emergency help

**Prevention Tips:**

✓ Eat meals and snacks on time
✓ Test your blood sugar regularly
✓ Always carry fast-acting sugar
✓ Wear a medical ID bracelet
✓ Tell family and friends how to help

**Remember:** Treating low blood sugar quickly prevents it from becoming an emergency!`,
      keyTerms: [
        { term: 'hypoglycemia', definition: 'Low blood sugar, generally below 70 mg/dL' },
        { term: 'glucagon', definition: 'A hormone that raises blood sugar quickly, given as an emergency injection' },
        { term: 'fast-acting carbohydrates', definition: 'Sugary foods or drinks that raise blood sugar quickly' },
        { term: '15-15 rule', definition: 'Treat low blood sugar with 15g carbs, wait 15 minutes, repeat if needed' },
      ],
      analogies: [
        'Think of hypoglycemia like your car running out of gas - your body needs fuel (sugar) to keep running.',
        'Your brain is like a computer that needs electricity - low blood sugar is like a power failure causing it to glitch.',
      ],
      examples: [
        'Maria felt shaky and sweaty at work. She checked her sugar (58 mg/dL) and drank 4 oz of juice. After 15 minutes, her sugar was 95.',
        'Tom was playing basketball longer than usual. He felt dizzy and confused. His teammate gave him glucose tablets and he felt better.',
      ],
      patientCounselingPoints: [
        'Always carry a source of fast-acting sugar with you.',
        'Teach family, coworkers, and friends how to recognize and treat low blood sugar.',
        'Never drive when your blood sugar is low - wait until it is normal.',
        'Check your blood sugar before driving to prevent lows on the road.',
        'If you have frequent lows, talk to your doctor about adjusting your medicine.',
      ],
    },
    2: {
      level: 2,
      summary: 'Hypoglycemia is defined as blood glucose below 70 mg/dL and results from an imbalance between diabetes treatment (insulin or oral agents) and carbohydrate intake or activity, requiring prompt recognition and treatment to prevent severe complications.',
      explanation: `**Definition and Classification:**

*Blood Glucose Levels:*

Hypoglycemia Categories:
-----------------------------------------
Level 1:        54-69 mg/dL (alert value)
                 - May be asymptomatic
                 - Prompt treatment needed

Level 2:        <54 mg/dL (clinically significant)
                 - Neurogenic symptoms typical
                 - Immediate treatment required

Level 3:        Severe (associated with severe
                 cognitive impairment)
                 - Requires external assistance
                 - May be unconscious or seizing
-----------------------------------------


**Pathophysiology:**

*Normal Counterregulation:*

Blood Sugar Drops
      ↓
1. Insulin secretion ↓ (primary)
2. Glucagon secretion ↑ (secondary)
3. Epinephrine secretion ↑ (secondary)
      ↓
Liver releases glucose
      ↓
Blood sugar returns to normal


*In Diabetes:*
- Insulin does not decrease appropriately
- Glucagon response is impaired
- Epinephrine response may be blunted (hypoglycemia unawareness)

**Symptom Recognition:**

*Neurogenic Symptoms (Autonomic):*
- Adrenergic: Palpitations, tremor, anxiety
- Cholinergic: Sweating, hunger, paresthesias

*Neuroglycopenic Symptoms (Brain low on glucose):*
- Cognitive impairment
- Confusion, difficulty concentrating
- Behavioral changes
- Visual changes
- Seizure, coma (severe)

**Causes in Diabetes:**


Common Causes by Medication:
-----------------------------------------
Insulin:
  - Too high a dose
  - Timing mismatch with meals
  - Injected into exercised area
  - Incorrect type (rapid vs. long-acting)

Sulfonylureas/Meglitinides:
  - Dose too high
  - Missed or delayed meals
  - Drug interactions
  - Kidney function decline

SGLT2 inhibitors:
  - Can increase insulin-induced lows
  - Usually don't cause lows alone
-----------------------------------------


**Treatment:**

*The 15-15 Rule:*

Step 1: Check blood sugar if possible
Step 2: Consume 15g fast-acting carbohydrate
Step 3: Wait 15 minutes
Step 4: Recheck
Step 5: If still <70, repeat steps 2-4
Step 6: Once normal, eat protein/carb snack


*15g Carbohydrate Options:*
- 3-4 glucose tablets
- 1 glucose gel tube
- 4 oz juice or regular soda
- 1 tbsp honey or sugar
- 8 oz nonfat milk

*Severe Hypoglycemia:*
- Glucagon injection (nasal, IM, or IV)
- Emergency services (911)
- Do not give food/drink if unconscious

**Hypoglycemia Unawareness:**


Definition: Inability to recognize hypoglycemia symptoms
-----------------------------------------------------
Causes:
  - Frequent hypoglycemia
  - Long-standing diabetes
  - Impaired counterregulation
  - Nerve damage (autonomic neuropathy)

Treatment:
  - Raise glycemic targets temporarily
  - Avoid lows for 2-3 weeks
  - Awareness often returns
-----------------------------------------------------
`,
      keyTerms: [
        { term: 'counterregulation', definition: "Body's hormonal response to low blood sugar, including glucagon and epinephrine" },
        { term: 'neuroglycopenia', definition: 'Brain dysfunction from inadequate glucose supply' },
        { term: 'hypoglycemia unawareness', definition: 'Reduced ability to perceive symptoms of low blood sugar' },
        { term: 'glucagon', definition: 'Hormone produced by alpha cells that raises blood glucose' },
        { term: 'adrenergic', definition: 'Related to adrenaline; causes tremor, palpitations, anxiety' },
        { term: 'cholinergic', definition: 'Related to acetylcholine; causes sweating, hunger' },
      ],
      analogies: [
        'Hypoglycemia unawareness is like having a broken fire alarm - the danger exists but no warning sounds.',
      ],
      clinicalNotes: 'Hypoglycemia causes significant morbidity and mortality. Fear of hypoglycemia is a major barrier to glycemic control. Frequent hypoglycemia causes further hypoglycemia unawareness.',
      patientCounselingPoints: [
        'Keep fast-acting sugar in multiple places (home, work, car, bag).',
        'Wear a medical alert bracelet indicating diabetes.',
        'Check blood sugar before driving - do not drive if below 70 mg/dL.',
        'Teach those close to you how to use glucagon.',
        'Report frequent lows to your doctor for medication adjustment.',
      ],
    },
    3: {
      level: 3,
      summary: 'Hypoglycemia is defined as blood glucose below 70 mg/dL with characteristic symptoms, resulting from excessive insulin action relative to carbohydrate intake, and is mediated by impaired counterregulatory responses in diabetes requiring prompt treatment to prevent neuroglycopenia.',
      explanation: `**Definition and Diagnostic Criteria:**

*Consensus Classification (ADA 2023):*

Hypoglycemia Categories:
-------------------------------------------------
Level 1 (Alert Value):
  Blood glucose 54-69 mg/dL (3.0-3.8 mmol/L)
  - May be asymptomatic
  - Prompt treatment indicated

Level 2 (Clinically Significant):
  Blood glucose <54 mg/dL (<3.0 mmol/L)
  - Neuroglycopenic symptoms typical
  - Immediate treatment required

Level 3 (Severe):
  Any glucose level associated with severe
  cognitive impairment requiring external
  assistance for recovery
-------------------------------------------------


*Whipple Triad (for diagnosis):*
1. Plasma glucose <55 mg/dL
2. Symptoms consistent with hypoglycemia
3. Symptoms resolve with glucose administration

**Pathophysiology:**

*Normal Glucose Homeostasis:*

Glucose Homeostasis:
-------------------------------------------------
Fasting State (Post-absorptive):
  Hepatic glucose production:
    - Glycogenolysis (glycogen → glucose)
    - Gluconeogenesis (lactate, amino acids, glycerol → glucose)
    → Maintains glucose 70-99 mg/dL

Counterregulatory Hormones (ordered sequence):
  1. ↓ Insulin (primary defense)
  2. ↑ Glucagon (secondary, within minutes)
  3. ↑ Epinephrine (tertiary, if hypoglycemia persists)
  4. ↑ Cortisol, growth hormone (prolonged hypoglycemia)
-------------------------------------------------


*Defective Counterregulation in Diabetes:*

Abnormal Responses in T1DM:
-------------------------------------------------
Within 1-5 years of diagnosis:
  - Glucagon response ↓ (alpha cell dysfunction)
  - Epinephrine response becomes delayed/blunted
  - Symptom perception reduced

Hypoglycemia-Associated Autonomic Failure (HAAF):
  - Recent antecedent hypoglycemia →
    Blunted counterregulation →
    Further hypoglycemia
  - Creates vicious cycle
-------------------------------------------------


**Medication-Induced Hypoglycemia:**

*Insulin:*

Mechanisms of Insulin-Induced Hypoglycemia:
-------------------------------------------------
Dose Issues:
  - Absolute dose too high
  - Dose not adjusted for:
    - Decreased food intake
    - Increased activity
    - Improved insulin sensitivity

Timing Issues:
  - Peak insulin action does not match:
    - Food absorption (postprandial)
    - Activity patterns (exercise)

Stacking:
  - Repeated correction doses
  - Insulin-on-board overlap
-------------------------------------------------


*Sulfonylureas/Meglitinides:*
- Stimulate insulin secretion independent of glucose
- Long-acting agents (glyburide, chlorpropamide) highest risk
- Renal impairment causes accumulation
- Drug interactions (azole antifungals, fluoroquinolones)

*Other Medications:*
- Quinine (malaria)
- Pentamidine (PCP pneumonia)
- Beta-blockers (mask symptoms)
- Salicylates (high doses)

**Treatment Strategies:**

*Acute Management Algorithm:*

Hypoglycemia Treatment:
-------------------------------------------------
Alert, able to swallow:
  15-20g oral glucose
  Wait 15 min, recheck
  Repeat if <70 mg/dL

Alert, unable to swallow:
  Glucagon nasal (Baqsimi) 3 mg
  OR
  Glucagon IM 1 mg

Unconscious:
  Glucagon 1 mg IM/IV
  Dextrose 25g IV push (D50W)
  Seek emergency care
-------------------------------------------------


*Glucagon Administration:*
\`\`\'
Glucagon Formulations:
-------------------------------------------------
Injectable (Emergency Kit):
  - Reconstitute powder
  - 1 mg IM, SC, or IV
  - Works in 5-15 minutes
  - Nausea common side effect

Nasal (Baqsimi):
  - No reconstitution needed
  - 3 mg intranasal
  - Works in 5-15 minutes
  - Easier for lay administration

Stable Liquid (Gvoke):
  - Pre-filled syringe
  - No reconstitution needed
  - 0.5 or 1 mg SC or IM
-------------------------------------------------


**Prevention:**

*Education Strategies:*
- Hypoglycemia recognition and treatment
- Regular glucose monitoring
- Meal planning consistency
- Activity planning (exercise glucose adjustments)
- Medication timing and dosing

*Continuous Glucose Monitoring:*

CGM Alarms for Hypoglycemia Prevention:
-------------------------------------------------
High Alert:     180-200 mg/dL (take action)
Low Alert:      70 mg/dL (immediate action)

Predictive Alarms:
  Warn 15-20 minutes before predicted low
  Allow preventive carbohydrate intake

Low Threshold Suspend:
  Automatically stops insulin pump
  When low predicted or detected
-------------------------------------------------


*Glycemic Targets:*
- Individualize based on:
  - Hypoglycemia history/unawareness
  - Duration of diabetes
  - Life expectancy
  - Comorbidities
  - Patient preferences

- Consider relaxing targets when:
  - History of severe hypoglycemia
  - Hypoglycemia unawareness
  - Limited life expectancy
  - Advanced complications

**Special Situations:**

*Hypoglycemia in the Elderly:*
- At higher risk due to:
  - Reduced renal function
  - Polypharmacy
  - Cognitive impairment
  - Poor nutritional intake
- Consequences more severe (falls, confusion, cardiac events)

*Nocturnal Hypoglycemia:*
- Occurs during sleep
- May cause:
  - Night sweats
  - Morning headache
  - Elevated fasting glucose (Somogyi effect)
- Prevention:
  - Bedtime snack if <120 mg/dL
  - Reduce basal insulin
  - Use CGM with low alarm

*Exercise-Related Hypoglycemia:*
- Can occur hours after activity
- Mechanisms:
  - Increased glucose uptake by muscle
  - Enhanced insulin sensitivity
  - Depleted glycogen stores
- Prevention:
  - Check glucose before, during, after
  - Reduce insulin for exercise
  - Carbohydrate intake during/after`,
      keyTerms: [
        { term: 'HAAF', definition: 'Hypoglycemia-Associated Autonomic Failure; defective counterregulation' },
        { term: 'glycogenolysis', definition: 'Breakdown of glycogen to glucose in liver' },
        { term: 'gluconeogenesis', definition: 'Formation of glucose from non-carbohydrate sources' },
        { term: 'Somogyi effect', definition: 'Morning hyperglycemia caused by nocturnal hypoglycemia rebound' },
        { term: 'insulin-on-board', definition: 'Active insulin remaining from previous doses' },
        { term: 'stacking', definition: 'Giving multiple correction doses before previous dose peaks' },
      ],
      clinicalNotes: 'Hypoglycemia is associated with increased mortality, especially in cardiovascular disease. Nocturnal hypoglycemia particularly dangerous. Hypoglycemia unawareness can be reversed by avoiding lows for 2-3 weeks.',
      patientCounselingPoints: [
        'Check your blood sugar if you feel symptoms, but don\'t delay treatment if you cannot check.',
        'CGM can detect lows you do not feel, especially while sleeping.',
        'Always keep a glucagon kit accessible and teach others how to use it.',
        'Report any episodes of severe hypoglycemia to your healthcare provider.',
        'Wear medical identification indicating you have diabetes.',
      ],
    },
    4: {
      level: 4,
      summary: 'Hypoglycemia represents a critical complication of diabetes therapy resulting from relative insulin excess, characterized by autonomic and neuroglycopenic symptoms, and mediated by impaired counterregulatory responses that can precipitate a vicious cycle of recurrent hypoglycemia.',
      explanation: `**Pathophysiology of Counterregulatory Failure:**

*Defective Glucose Counterregulation:*

Normal Counterregulatory Hierarchy:
-------------------------------------------------
Glucose <70 mg/dL
      ↓
1. ↓ Pancreatic insulin secretion (first line)
2. ↑ Pancreatic glucagon secretion (second line)
3. ↑ Adrenal epinephrine (third line)
4. ↑ Pituitary ACTH → Cortisol
   ↑ Growth hormone

In T1DM (after 1-5 years):
-------------------------------------------------
Glucose <70 mg/dL
      ↓
1. ✗ Insulin ↓ (cannot decrease exogenous)
2. ✗ Glucagon ↑ (alpha cell unresponsive)
3. → Epinephrine ↑ (only remaining defense)
4. → Cortisol/GH ↑ (delayed, weak response)
      ↓
Hypoglycemia becomes more likely and severe
-------------------------------------------------


*Hypoglycemia-Associated Autonomic Failure (HAAF):*

Vicious Cycle of HAAF:
-------------------------------------------------
Antecedent Hypoglycemia
      ↓
Reduced Epinephrine Response
      ↓
Blunted Symptom Perception
      ↓
Impaired Counterregulation
      ↓
Further Hypoglycemia
      ↓
(HAAF perpetuated)
-------------------------------------------------

Time Course:
- One episode of hypoglycemia →
  24 hours of defective counterregulation

- 2-3 weeks of avoiding hypoglycemia →
  Partial or complete restoration of awareness


*Brain Adaptation (Cerebral Glucopenia):*
- Brain increases glucose transport during chronic hypoglycemia
- Alters threshold for symptoms (lower perceived as normal)
- Explains hypoglycemia unawareness
- Reversible with sustained euglycemia

**Medication-Specific Hypoglycemia Risk:**

*Insulin Analogues:*

Relative Hypoglycemia Risk by Insulin Type:
-------------------------------------------------
Higher Risk:
  - Human regular/NPH (peak unpredictability)
  - Biphasic/NPH mixtures

Intermediate Risk:
  - Glargine U100 (flat profile, but variable)
  - Detemir (some variability)

Lower Risk:
  - Glargine U300/U301 (flatter profile)
  - Degludec (ultra-long, very flat)
  - Ultra-rapid lispro (better postprandial match)

Factors Increasing Risk:
  - Duration of insulin action
  - Peak concentrations
  - Intra-patient variability
  - Injection technique issues
-------------------------------------------------


*Sulfonylurea Mechanisms:*

Sulfonylurea Hypoglycemia Risk:
-------------------------------------------------
Mechanism:
  - Close K-ATP channels on beta cells
  - Insulin secretion independent of glucose
  - Does NOT decrease as glucose falls

Risk Factors:
  - Long-acting agents (glyburide, chlorpropamide)
  - Renal dysfunction (reduced clearance)
  - Advanced age
  - Malnutrition/decreased intake
  - Drug interactions (CYP2C9 inhibitors)
  - Length of action (can last 24-72 hours!)

Treatment Challenges:
  - Unlike insulin - cannot be "turned off"
  - May require prolonged glucose infusion
  - Monitor for 24+ hours after resolution
-------------------------------------------------


**Neuroglycopenia:**

*Brain Metabolism During Hypoglycemia:*

Cerebral Fuel Hierarchy:
-------------------------------------------------
Normal (>70 mg/dL):
  Primary: Glucose

Mild Hypoglycemia (55-70 mg/dL):
  Primary: Glucose
  Backup: None

Severe Hypoglycemia (<55 mg/dL):
  Primary: Glucose (inadequate)
  Backup: Lactate, ketones (limited)
      ↓
Neuronal dysfunction
      ↓
Neuroglycopenic symptoms
      ↓
Seizure, coma (if prolonged)
-------------------------------------------------


*Neuroglycopenic Symptom Progression:*
1. Cognitive impairment (difficulty concentrating)
2. Confusion, disorientation
3. Behavioral changes, irritability
4. Speech difficulty, focal neurologic deficits
5. Seizure activity
6. Loss of consciousness
7. Brain damage (prolonged severe hypoglycemia)

**Detection and Monitoring:**

*CGM for Hypoglycemia Detection:*

CGM Metrics for Hypoglycemia Assessment:
-------------------------------------------------
Time Below Range (TBR):
  Level 1: 70-54 mg/dL
  Level 2: <54 mg/dL

Targets:
  TBR Level 1: <4% of time
  TBR Level 2: <1% of time

Hypoglycemia Events:
  Number of episodes per day/week

Nocturnal Hypoglycemia:
  Detection during sleep
  Often asymptomatic

Pattern Analysis:
  Timing of lows (predictable)
  Relationship to:
    - Meals/timing
    - Insulin peaks
    - Activity patterns
-------------------------------------------------


**Treatment:**

*Glucose Forms:*

Treatment Options by Severity:
-------------------------------------------------
Mild/Moderate (alert patient):
  Oral rapid-acting glucose:
    - Dextrose tablets (preferred, reliable dose)
    - Juice/soda (4 oz = ~15g)
    - Honey/sugar (1 tbsp)
    - Glucose gel

Severe (unconscious/unable to swallow):
  Parenteral glucose:
    - Dextrose 25g IV (D50W)
    - Glucagon 1 mg IM/SC/intranasal
    - Dextrose gel (buccal, investigational)
-------------------------------------------------


*Glucagon Details:*

Glucagon Administration:
-------------------------------------------------
Injectable Kit:
  Reconstitution required
  Dose: 1 mg IM/SC (adults)
       0.5 mg for children <25 kg
  Onset: 5-15 minutes
  Duration: 60-90 minutes
  MUST give food ASAP after awakening

Intranasal (Baqsimi):
  No reconstitution
  Dose: 3 mg (one spray in one nostril)
  Onset: 5-15 minutes
  Same efficacy as injectable
  Easier for caregivers

Pre-filled Syringe (Gvoke):
  No reconstitution
  Dose: 0.5 mg or 1 mg SC/IM
  Weight-based dosing available
-------------------------------------------------


**Prevention Strategies:**

*Individualized Targets:*

A1C Target Considerations:
-------------------------------------------------
Standard:      <7.0%
  (most non-pregnant adults)

Less Stringent: <7.5-8.0%
  - History of severe hypoglycemia
  - Hypoglycemia unawareness
  - Limited life expectancy
  - Advanced complications
  - Children/adolescents

More Stringent: <6.5%
  - Short duration of diabetes
  - No significant hypoglycemia
  - Long life expectancy
-------------------------------------------------


*CGM Features for Prevention:*
- Predictive low alerts (15-20 min before)
- Low threshold suspend (pumps)
- Predictive low suspend (pumps)
- Remote monitoring (caregiver alerts)

*Education Components:*
- Recognition of subtle symptoms
- Regular monitoring (CGM preferred)
- Meal timing and composition
- Exercise management
- Sick day rules
- Alcohol effects
- Medication timing

**Special Populations:**

*Renal Impairment:*
- Reduced insulin clearance
- Reduced sulfonylurea clearance
- Increased hypoglycemia risk
- Dose adjust medications appropriately

*Cardiovascular Disease:*
- Hypoglycemia can trigger ischemia
- Arrhythmias (prolonged QT)
- Autonomic dysfunction
- Higher targets often appropriate

*Pregnancy:*
- Stricter targets increase risk
- Nocturnal hypoglycemia common
- CGM recommended
- Targets: fasting <95, 1-hr <140, 2-hr <120`,
      keyTerms: [
        { term: 'defective glucose counterregulation', definition: 'Absent glucagon response + blunted epinephrine response in diabetes' },
        { term: 'HAAF', definition: 'Hypoglycemia-Associated Autonomic Failure' },
        { term: 'nocturnal hypoglycemia', definition: 'Low blood sugar occurring during sleep, often asymptomatic' },
        { term: 'TBR', definition: 'Time Below Range; CGM metric for hypoglycemia exposure' },
        { term: 'predictive low suspend', definition: 'CGM/pump feature stopping insulin before predicted low' },
      ],
      clinicalNotes: 'One severe hypoglycemia episode increases mortality risk for months afterward. Hypoglycemia can cause arrhythmias, especially in patients with CVD. CGM reduces severe hypoglycemia by 50% or more.',
      patientCounselingPoints: [
        'Hypoglycemia begets hypoglycemia - avoiding lows for weeks can restore awareness.',
        'CGM is the most effective tool for detecting asymptomatic hypoglycemia.',
        'Keep glucagon accessible and check expiration dates annually.',
        'Educated family members are essential - teach them hypoglycemia recognition.',
        'Never ignore the feeling of low blood sugar - check and treat if uncertain.',
      ],
    },
    5: {
      level: 5,
      summary: 'Hypoglycemia represents a complex clinical entity resulting from iatrogenic insulin excess and defective counterregulation, mediated by hypoglycemia-associated autonomic failure and cerebral adaptation, requiring precision management to prevent the vicious cycle of recurrent hypoglycemia and minimize adverse outcomes.',
      explanation: `**Advanced Pathophysiology:**

*Integrated Counterregulatory Failure:*

Pathophysiology of Recurrent Hypoglycemia:
-------------------------------------------------
Antecedent Hypoglycemia
      ↓
┌---------------┴-------------┐
↓                               ↓
Cerebral Adaptation          HPA Axis Adaptation
(Increased glucose transport) (Reduced cortisol response)
      ↓                               ↓
Lower Glycemic Threshold     Blunted Epinephrine
for symptoms                 response
      ↓                               ↓
└-------------------------------┘
               ↓
      Reduced Symptom Perception
               ↓
     Hypoglycemia Unawareness
               ↓
    Increased Severe Hypoglycemia
               ↓
      Further Antecedent Hypoglycemia
               ↓
         (Vicious Cycle)
-------------------------------------------------


*Molecular Mechanisms:*
- AMP-activated protein kinase (AMPK) in ventromedial hypothalamus
- Corticotropin-releasing factor (CRF) adaptation
- Increased GLUT1 and GLUT3 expression in brain
- Altered fuel sensing neurons in hypothalamus
- Impaired glucose sensing in hepatic glucose production

**Medication Effects:**

*Pharmacokinetic Considerations:*

Insulin Analog Variability (CV%):
-------------------------------------------------
Within-patient variability affects hypoglycemia risk:
-------------------------------------------------
Lowest Variability (CV <20%):
  - Degludec (U100, U200)
  - Glargine U300
  - Determined once-daily basal

Intermediate Variability (CV 20-30%):
  - Glargine U100
  - Determined (twice daily)
  - Levemir

Highest Variability (CV >30%):
  - NPH
  - Regular human insulin
  → Highest hypoglycemia risk
-------------------------------------------------


*Drug Interactions:*
\`\`\'
Significant Drug-Diabetes Medication Interactions:
-------------------------------------------------
Increase Hypoglycemia Risk:
  - Azole antifungals (fluconazole, ketoconazole)
  - Clarithromycin (CYP3A4 inhibition)
  - Quinolone antibiotics
  - MAO inhibitors
  - Beta-blockers (mask symptoms)
  - Alcohol (inhibits gluconeogenesis)

Decrease Insulin Efficacy:
  - Corticosteroids
  - Atypical antipsychotics
  - Niacin
  - Thiazides
  → May need dose reduction to avoid
    later hypoglycemia when stopped
-------------------------------------------------


**Neurocognitive Effects:**

*Brain Injury from Severe Hypoglycemia:*

Neurologic Sequelae:
-------------------------------------------------
Acute Effects:
  - Cerebral edema (rare, mostly children)
  - Focal neurologic deficits
  - Seizures
  - Persistent vegetative state (very rare)

Long-Term Effects (controversial):
  - Accelerated cognitive decline
  - Dementia risk (conflicting data)
  - White matter hyperintensities

Vulnerable Populations:
  - Children <5 years
  - Elderly with frailty
  - Advanced CKD
  - Preexisting cerebrovascular disease
-------------------------------------------------


*Mortality Risk:*

Hypoglycemia and Mortality:
-------------------------------------------------
ACCORD Trial:
  Intensive group (target A1C <6.0%)
  - 3x higher mortality
  - Hypoglycemia likely contributor

Mechanisms:
  - Cardiac arrhythmia (QT prolongation)
  - Sympathetic surge
  - Prothrombotic state
  - Hypokalemia (β2 stimulation)
  - Myocardial ischemia

Clinical Implication:
  Avoid intensive control in:
    - Advanced age
    - Known CVD
    - Hypoglycemia unawareness
    - Limited life expectancy
-------------------------------------------------


**Detection Technology:**

*CGM Accuracy in Hypoglycemia:*

CGM Performance During Hypoglycemia:
-------------------------------------------------
MARD (Mean Absolute Relative Difference):
  - Modern CGMs: ~9-10% overall
  - Accuracy decreases in hypoglycemia range
  - Lag time: 5-15 minutes behind blood glucose

Clinical Implications:
  - May overestimate severity of rapid drops
  - May underestimate during rapid rise
  - Confirm with fingerstick if symptomatic
  - Trend direction more valuable than absolute
-------------------------------------------------


*Predictive Algorithms:*
- Machine learning for hypoglycemia prediction
- 15-60 minute ahead prediction
- Integration with insulin dosing
- Reduced nocturnal hypoglycemia

**Management Strategies:**

*Individualized A1C Targets:*

Precision A1C Targeting:
-------------------------------------------------
Patient Factors Affecting Targets:
-------------------------------------------------
Risk Factor                Target A1C
-------------------------------------------------
Severe hypoglycemia history    <7.5-8.0%
Hypoglycemia unawareness       <7.5-8.0%
Advanced CVD                   <7.5-8.0%
End-stage renal disease        <7.5-8.0%
Age >75                        <8.0%
Dementia                      <8.0-8.5%
Limited life expectancy        <8.0%

No complications               <6.5%
Short diabetes duration        <6.5%
Low hypoglycemia risk          <6.5%
Motivated, capable             <6.5%
-------------------------------------------------


*Closed-Loop Systems:*

Automated Insulin Delivery Features:
-------------------------------------------------
Low Glucose Suspend (LGS):
  Suspends insulin when CGM detects low
  Simple threshold-based

Predictive Low Glucose Suspend (PLGS):
  Suspends when low predicted
  Prevents rather than reacts

Hybrid Closed Loop (HCL):
  Auto-adjusts basal every 5 minutes
  Requires meal announcements
  Reduces hypoglycemia by 50-70%

Full Closed Loop (Investigational):
  Fully automated basal and bolus
  Minimal user input required
-------------------------------------------------


**Research Frontiers:**

*Alternative Glucagon Formulations:*
- Stable liquid glucagon (no reconstitution)
- Dasiglucagon (investigational)
- Mini-dose glucagon for mild lows
- Intranasal formulations

*Prevention of HAAF:*
- Avoiding hypoglycemia for 2-3 weeks restores awareness
- CGM essential for prevention
    - Early detection
    - Trend prediction
    - Nighttime monitoring

*Precision Medicine Approaches:*
- Genetic factors affecting counterregulation
- Phenotype-specific hypoglycemia risk
- Pharmacogenomics of sulfonylureas
- Individualized alarm thresholds

**Special Circumstances:**

*Post-Bariatric Surgery:*
- Increased hypoglycemia risk (nesidioblastosis)
- May require diazoxide or somatostatin analogs
- Carbohydrate loading preventive
- Consider surgical intervention if severe

*End-Stage Renal Disease:*
- Reduced insulin clearance
- Reduced gluconeogenesis
- Anorexia/malnutrition
- Difficult glycemic targets
- Consider non-insulin agents when possible

*Critical Illness:*
- Tight control increases mortality (NICE-SUGAR)
- Target 140-180 mg/dL in ICU
- Avoid hypoglycemia at all costs
- Continuous glucose monitoring (not standard yet)`,
      keyTerms: [
        { term: 'AMPK', definition: 'AMP-activated protein kinase; energy sensor in hypothalamus' },
        { term: 'CRF', definition: 'Corticotropin-releasing factor; stress hormone' },
        { term: 'MARD', definition: 'Mean absolute relative difference; CGM accuracy metric' },
        { term: 'nesidioblastosis', definition: 'Islet cell hyperplasia causing hyperinsulinemic hypoglycemia' },
        { term: 'NICE-SUGAR', definition: 'Landmark ICU glycemic control trial' },
        { term: 'ACCORD', definition: 'Action to Control Cardiovascular Risk in Diabetes; trial showing intensive control risks' },
      ],
      clinicalNotes: 'The ACCORD trial found increased mortality with intensive control (target A1C <6.0%) in high-risk Type 2 diabetes, likely related to hypoglycemia. CGM is standard of care for anyone on insulin with hypoglycemia or unawareness.',
      patientCounselingPoints: [
        'Technology (CGM, pumps) dramatically reduces severe hypoglycemia.',
        'Your hypoglycemia risk can change over time - regular reassessment is important.',
        'Treating lows too aggressively causes rebound hyperglycemia.',
        'Share your CGM data with your care team for pattern management.',
        'Never drive with glucose below 70 mg/dL - check before driving.',
      ],
    },
  },

  media: [
    {
      id: 'hypoglycemia-symptoms',
      type: 'diagram',
      filename: 'hypoglycemia-symptoms-infographic.svg',
      title: 'Recognizing Hypoglycemia Symptoms',
      description: 'Visual guide to hypoglycemia symptom recognition',
    },
    {
      id: '15-15-rule-guide',
      type: 'diagram',
      filename: '15-15-rule-treatment.svg',
      title: 'The 15-15 Rule for Hypoglycemia',
      description: 'Step-by-step guide for treating low blood sugar',
    },
    {
      id: 'glucagon-administration',
      type: 'diagram',
      filename: 'glucagon-use-guide.svg',
      title: 'How to Use Glucagon',
      description: 'Instructions for glucagon administration in emergencies',
    },
  ],

  citations: [
    {
      id: 'ada-hypoglycemia-2023',
      type: 'article',
      title: '15. Diabetes Care in the Hospital: Standards of Medical Care in Diabetes',
      source: 'Diabetes Care',
      authors: ['American Diabetes Association'],
    },
    {
      id: 'endocrine-society-hypoglycemia',
      type: 'article',
      title: 'Evaluation and Management of Adult Hypoglycemic Disorders: Endocrine Society Clinical Practice Guideline',
      source: 'Journal of Clinical Endocrinology & Metabolism',
    },
  ],

  crossReferences: [
    { targetId: 'chronic-disease-type1-diabetes', targetType: 'condition', relationship: 'related', label: 'Type 1 Diabetes' },
    { targetId: 'chronic-disease-type2-diabetes', targetType: 'condition', relationship: 'related', label: 'Type 2 Diabetes' },
    { targetId: 'chronic-disease-diabetes-complications', targetType: 'condition', relationship: 'related', label: 'Diabetes Complications' },
  ],

  tags: {
    systems: ['endocrine', 'nervous'],
    topics: ['hypoglycemia', 'diabetes', 'emergency', 'insulin'],
    keywords: ['low blood sugar', 'hypoglycemia', 'insulin reaction', 'glucagon', 'hypoglycemia unawareness'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'emergency-medicine'] },
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
