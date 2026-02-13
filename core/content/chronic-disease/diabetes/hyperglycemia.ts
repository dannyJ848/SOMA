/**
 * Hyperglycemia - Chronic Disease Education
 *
 * Comprehensive patient education about hyperglycemia (high blood sugar),
 * its causes, symptoms, and management strategies.
 */

import { EducationalContent } from '../../types';

export const HYPERGLYCEMIA: EducationalContent = {
  id: 'chronic-disease-hyperglycemia',
  type: 'condition',
  name: 'Hyperglycemia',
  alternateNames: ['High blood sugar', 'High blood glucose', 'Elevated glucose'],

  levels: {
    1: {
      level: 1,
      summary: 'Hyperglycemia means your blood sugar is too high. It can happen if you eat too much sugar, miss your medicine, are sick, or feel stressed. Treating it early helps prevent problems.',
      explanation: `**What Is Hyperglycemia?**

Hyperglycemia (hy-per-gly-SEE-mee-uh) means high blood sugar. It happens when there is too much sugar (glucose) in your blood.

**What Causes High Blood Sugar?**

Common causes:
- Eating too much carbohydrate food
- Forgetting or skipping diabetes medicine
- Not taking enough insulin or medicine
- Being sick or having an infection
- Feeling stressed
- Being less active than usual
- Taking certain medicines (like steroids)

**Common Symptoms:**


Early Warning Signs:
---------------------------------
- Increased thirst
- Frequent urination
- Dry mouth
- Blurry vision
- Feeling very tired
- Headache
- Difficulty concentrating
---------------------------------


**When to Call Your Doctor:**

- Blood sugar stays above 240 mg/dL after treating twice
- You vomit more than once
- You have trouble breathing
- You feel confused or are hard to wake up
- Your breath smells fruity
- You have stomach pain

**How to Treat High Blood Sugar:**

1. Check your blood sugar to confirm it's high
2. Drink plenty of water (unless your doctor limits fluids)
3. Check for ketones if blood sugar >240 mg/dL (Type 1 diabetes)
4. Exercise if your blood sugar is below 240 mg/dL and you feel well
5. Take your diabetes medicine as prescribed
6. Check your blood sugar again in a few hours

**Prevention Tips:**

✓ Take your diabetes medicine as prescribed
✓ Follow your meal plan
✓ Be physically active
✓ Check your blood sugar regularly
✓ Follow sick day rules when ill
✓ Manage stress

**Remember:** Keeping your blood sugar in target range helps prevent long-term problems!`,
      keyTerms: [
        { term: 'hyperglycemia', definition: 'High blood sugar, generally above 180 mg/dL 2 hours after eating' },
        { term: 'ketones', definition: 'Chemicals made when the body burns fat for fuel instead of sugar' },
        { term: 'carbohydrate', definition: 'Foods that turn into sugar, like bread, pasta, rice, fruit, and milk' },
        { term: 'fruity breath', definition: 'A sweet odor on the breath that can be a sign of dangerous high blood sugar' },
      ],
      analogies: [
        'High blood sugar is like having too much water in a bathtub - it spills over and causes problems in your body.',
        'Your bloodstream is like a highway - too much sugar causes traffic jams that slow everything down.',
      ],
      examples: [
        'Sarah ate a large piece of cake at a party. Her blood sugar was 285 mg/dL two hours later. She drank water and took a walk.',
        'Marcus has a cold and his blood sugar is running high. He checks his ketones and continues taking his medicine.',
      ],
      patientCounselingPoints: [
        'High blood sugar happens to everyone with diabetes sometimes - don\'t feel guilty.',
        'Check your blood sugar if you feel symptoms to confirm it is high.',
        'Drinking water helps your body flush out excess sugar through urine.',
        'Never skip your diabetes medicine, even when you are sick.',
        'Keep ketone strips at home if you have Type 1 diabetes.',
      ],
    },
    2: {
      level: 2,
      summary: 'Hyperglycemia is defined as blood glucose above target levels and results from insufficient insulin action relative to carbohydrate intake or stress factors. Chronic hyperglycemia causes diabetes complications while acute severe elevation can lead to life-threatening conditions like DKA or HHS.',
      explanation: `**Definition and Classification:**

*Blood Glucose Categories:*

Glucose Levels (mg/dL):
-----------------------------------------
Fasting/Pre-meal:
  Normal:        <100
  Prediabetes:   100-125
  Diabetes:      ≥126

2-hours Post-meal:
  Normal:        <140
  Prediabetes:   140-199
  Diabetes:      ≥200

Random glucose with symptoms:
  Diabetes:      ≥200

Severe hyperglycemia:  >250-300 mg/dL


**Causes of Hyperglycemia:**


Common Causes:
-----------------------------------------
Dietary Factors:
  - Excessive carbohydrate intake
  - Irregular meal timing
  - High glycemic index foods

Medication Issues:
  - Missed or delayed insulin/meds
  - Insufficient doses
  - Expired or improper storage
  - Pump malfunction

Physiological Stress:
  - Illness or infection
  - Surgery or trauma
  - Emotional stress
  - Menstrual hormones

Other Factors:
  - Decreased physical activity
  - Certain medications (steroids)
  - Dawn phenomenon
  - Dawn phenomenon (early AM rise)
-----------------------------------------


**Acute Complications:**

*Diabetic Ketoacidosis (DKA):*

DKA Warning Signs:
-----------------------------------------
Blood sugar:        Usually >250 mg/dL
Ketones:            Moderate to large (urine/blood)

Symptoms:
  - Nausea, vomiting, abdominal pain
  - Fruity breath odor
  - Rapid, deep breathing (Kussmaul)
  - Confusion, drowsiness
  - Dehydration signs

Risk Factors:
  - Type 1 diabetes
  - Illness or infection
  - Missed insulin doses
  - Alcohol use

Action:
  Seek emergency care immediately
-----------------------------------------


*Hyperosmolar Hyperglycemic State (HHS):*

HHS Characteristics:
-----------------------------------------
Blood sugar:        Often >600 mg/dL
Ketones:            Minimal or absent

Symptoms:
  - Extreme dehydration
  - Confusion, lethargy
  - Weakness, paralysis
  - Seizures, coma

Risk Factors:
  - Type 2 diabetes (especially elderly)
  - Infection
  - Poor access to fluids

Action:
  Emergency care required
-----------------------------------------


**Management:**

*For Mild to Moderate Elevations:*

When blood sugar is 180-250 mg/dL:
-----------------------------------------
1. Check for pattern (same time each day?)
2. Review recent food intake
3. Ensure medication taken correctly
4. Drink water if no fluid restriction
5. Light activity if feeling well
6. Check blood sugar again in 2-3 hours

When to use correction insulin:
  - If prescribed by your doctor
  - Follow your individual dosing instructions
  - Wait 3 hours between corrections
  - Be careful of "stacking" doses
-----------------------------------------


*Sick Day Management:*

Illness Guidelines:
-----------------------------------------
CONTINUE all diabetes medications
  (unless instructed to stop)

CHECK blood sugar every 2-4 hours
  (more often if needed)

DRINK plenty of fluids
  (8 oz every hour while awake)

CHECK ketones:
  - If blood sugar >240 mg/dL (Type 1)
  - If vomiting or symptoms of DKA

KNOW WHEN TO CALL:
  - Vomiting >4 hours or cannot keep fluids down
  - Blood sugar over 300 mg/dL twice in a row
  - Moderate or large ketones
  - Difficulty breathing
  - Confusion or difficulty waking
-----------------------------------------


**Prevention Strategies:**

- Consistent meal timing and composition
- Regular physical activity
- Medication adherence
- Regular blood glucose monitoring
- Stress management
- Sick day preparation
- Insulin rotation (injection sites)
- Regular A1C testing`,
      keyTerms: [
        { term: 'DKA', definition: 'Diabetic ketoacidosis; dangerous condition with high ketones and acidosis' },
        { term: 'HHS', definition: 'Hyperosmolar hyperglycemic state; dangerous condition with very high blood sugar' },
        { term: 'dawn phenomenon', definition: 'Early morning blood sugar rise due to hormonal changes' },
        { term: 'ketones', definition: 'Acidic byproducts of fat metabolism' },
        { term: 'Kussmaul breathing', definition: 'Rapid, deep breathing to eliminate acid in DKA' },
      ],
      analogies: [
        'DKA is like your car running on fumes instead of gas - when sugar cannot enter cells, your body burns fat, creating acidic waste products.',
      ],
      clinicalNotes: 'Hyperglycemia is the primary cause of both acute and chronic diabetes complications. Infection is the most common trigger for DKA. Early recognition and treatment prevents progression to severe complications.',
      patientCounselingPoints: [
        'Have a sick day plan ready before you get sick.',
        'Never stop your insulin or diabetes medicine when ill, even if you are not eating.',
        'Keep ketone strips at home if you have Type 1 diabetes.',
        'Stay hydrated when blood sugar is high (unless you have fluid restrictions).',
        'Call your doctor if you are unsure what to do.',
      ],
    },
    3: {
      level: 3,
      summary: 'Hyperglycemia results from absolute or relative insulin deficiency leading to elevated blood glucose, causing both acute metabolic emergencies (DKA, HHS) and chronic microvascular and macrovascular complications through advanced glycation end-product formation and oxidative stress pathways.',
      explanation: `**Pathophysiology of Hyperglycemia:**

*Normal Glucose Homeostasis:*

Glucose Regulation:
-----------------------------------------
Fed State (Postprandial):
  ↑ Glucose → ↑ Insulin → Glucose uptake
  → Glycogen synthesis (liver/muscle)
  → Fat synthesis

Fasting State:
  ↓ Glucose → ↓ Insulin
  → ↑ Glucagon → Hepatic glucose output
    (glycogenolysis, gluconeogenesis)
-----------------------------------------


*In Diabetes:*

Hyperglycemia Mechanisms:
-----------------------------------------
Type 1:
  ↓ Insulin (absolute deficiency)
  → ↑ Glucagon (unopposed)
  → Hepatic glucose production ↑↑
  → Peripheral uptake ↓
  → Lipolysis → ketogenesis

Type 2:
  Insulin resistance + relative deficiency
  → Hepatic glucose output ↑
  → Peripheral uptake ↓
  → Often adequate insulin to prevent DKA
-----------------------------------------


**Acute Hyperglycemic Emergencies:**

*Diabetic Ketoacidosis (DKA):*

DKA Pathophysiology:
-----------------------------------------
Insulin deficiency + stress hormones
      ↓
Lipolysis ↑ → Free fatty acids ↑
      ↓
Hepatic ketogenesis ↑
  (Beta-hydroxybutyrate, acetoacetate)
      ↓
Metabolic acidosis (anion gap)
      ↓
Compensatory hyperventilation (Kussmaul)
      ↓
Electrolyte abnormalities:
  - Potassium (total body depleted, serum may be normal/high)
  - Sodium (pseudohyponatremia from hyperglycemia)
  - Phosphate, magnesium depleted
-----------------------------------------

Diagnostic Criteria:
  Blood glucose: >250 mg/dL
  Ketones: Present (moderate/large)
  pH: <7.30
  Bicarbonate: <18 mEq/L
  Anion gap: >10-12


*Hyperosmolar Hyperglycemic State (HHS):*

HHS Pathophysiology:
-----------------------------------------
Severe hyperglycemia (often >600 mg/dL)
      ↓
Osmotic diuresis (glycosuria)
      ↓
Profound dehydration
      ↓
Hyperosmolality
      ↓
Altered mental status
      ↓
Minimal ketosis (still has some insulin)
-----------------------------------------

Diagnostic Criteria:
  Blood glucose: >600 mg/dL
  Osmolality: >320 mOsm/kg
  pH: >7.30
  Bicarbonate: >15 mEq/L
  Small/no ketones


**Chronic Hyperglycemia Complications:**

*Mechanisms of Damage:*

Hyperglycemia-Induced Pathways:
-----------------------------------------
1. Advanced Glycation End-products (AGEs)
   - Protein cross-linking
   - Vessel stiffness

2. Protein Kinase C activation
   - Vascular permeability
   - Pro-inflammatory state

3. Polyol pathway flux
   - Sorbitol accumulation
   - Osmotic stress

4. Hexosamine pathway
   - Altered gene transcription

5. Oxidative stress (mitochondrial)
   - Free radical production
   - DNA damage
-----------------------------------------


*Target Organ Damage:*

Chronic Complications:
-----------------------------------------
Microvascular:
  - Retinopathy (blindness)
  - Nephropathy (kidney failure)
  - Neuropathy (pain, ulcers, amputation)

Macrovascular:
  - Coronary artery disease (heart attack)
  - Cerebrovascular disease (stroke)
  - Peripheral arterial disease
-----------------------------------------


**Management:**

*General Principles:*

Hyperglycemia Treatment Approach:
-----------------------------------------
Assess Severity:
  - Level of hyperglycemia
  - Duration of elevation
  - Symptoms present
  - Ketone status

Identify Cause:
  - Dietary indiscretion
  - Missed medication
  - Illness/infection
  - Stress
  - Other medications

Correct:
  - Hydration (if dehydrated)
  - Correct insulin dose (if on insulin)
  - Review oral medications
  - Treat underlying cause

Monitor:
  - Blood glucose every 2-4 hours
  - Ketones (Type 1) if >240 mg/dL
  - Symptoms
  - Prevent overtreatment (hypoglycemia)
-----------------------------------------


*Insulin Correction Dosing:*
\`\`\'
Correction Factor Calculation:
-----------------------------------------
Rule of 1800 (for rapid insulin):
  Correction factor = 1800 ÷ Total Daily Dose

Example:
  Total daily dose = 40 units
  Correction factor = 1800 ÷ 40 = 45
  Each unit lowers glucose by ~45 mg/dL

Target glucose: 120 mg/dL
Current glucose: 240 mg/dL
Difference: 120 mg/dL
Dose: 120 ÷ 45 = 2.7 → round to 3 units

Important:
  - Wait 3 hours between corrections
  - Don't stack doses
  - Account for insulin-on-board
-----------------------------------------


**Sick Day Management:**

*Medication Adjustments:*

Sick Day Medication Guidelines:
-----------------------------------------
CONTINUE:
  - Basal insulin (may need ↑)
  - Most oral medications
  - Pump basal rates

TEMPORARILY STOP:
  - Metformin (if vomiting, dehydration, or hypoxia)
  - SGLT2 inhibitors (if dehydrated or DKA risk)
  - Sulfonylureas (if not eating)

INCREASE:
  - Correction insulin frequency
  - Basal insulin if ill (>10-20%)
  - Monitoring frequency

NEVER STOP:
  - Basal insulin in Type 1
  - All insulin in Type 1
-----------------------------------------


**Pattern Management:*


Analyzing Glucose Patterns:
-----------------------------------------
1. Review 3-7 days of data
2. Identify consistent patterns:
   - Fasting highs → basal insulin issue
   - Post-meal highs → mealtime insulin issue
   - Overnight highs → dawn phenomenon vs. waning basal
   - Sporadic highs → behavioral factors
3. Make ONE change at a time
4. Wait 3-5 days to assess effect
5. Document changes made
-----------------------------------------
`,
      keyTerms: [
        { term: 'anion gap', definition: 'Difference between measured cations and anions; elevated in DKA' },
        { term: 'osmolality', definition: 'Concentration of dissolved particles in blood' },
        { term: 'glycogenolysis', definition: 'Breakdown of glycogen to glucose' },
        { term: 'gluconeogenesis', definition: 'Formation of glucose from non-carbohydrate sources' },
        { term: 'insulin-on-board', definition: 'Active insulin from previous doses still working' },
        { term: 'waning basal', definition: 'Declining effect of basal insulin overnight' },
      ],
      clinicalNotes: 'DKA requires hospitalization for IV fluids, insulin, and electrolyte management. Mortality from DKA is <1% with proper treatment but higher in elderly and those with comorbidities.',
      patientCounselingPoints: [
        'Recognize the early signs of DKA: nausea, vomiting, abdominal pain, fruity breath.',
        'Check ketones when blood sugar is >240 mg/dL or when ill.',
        'Keep a sick day kit with supplies: ketone strips, glucose tablets, thermometer.',
        'Hyperglycemia happens to everyone - focus on pattern correction rather than single readings.',
        'Your insulin needs may increase during illness or stress.',
      ],
    },
    4: {
      level: 4,
      summary: 'Hyperglycemia in diabetes results from complex interactions between insulin deficiency, counterregulatory hormone excess, and physiological stressors, leading to acute metabolic emergencies through ketogenesis or profound dehydration, and chronic vascular complications via advanced glycation end-products and oxidative stress.',
      explanation: `**Advanced Pathophysiology:**

*Counterregulatory Hormones in Hyperglycemia:*

Stress Hormone Response:
-----------------------------------------
Physiological Stress:
  - Illness
  - Surgery
  - Trauma
  - Emotional stress
      ↓
Counterregulatory Hormone Surge:
  - Glucagon ↑ (↑ hepatic glucose output)
  - Epinephrine ↑ (↑ glycogenolysis, lipolysis)
  - Cortisol ↑ (↑ gluconeogenesis, insulin resistance)
  - Growth hormone ↑ (insulin resistance)
      ↓
Worsening Hyperglycemia
      ↓
If insulin insufficient → DKA/HHS
-----------------------------------------


*Dawn Phenomena:*

Early Morning Hyperglycemia Types:
-----------------------------------------
Dawn Phenomenon:
  - Normal hormonal surge (3-8 AM)
  - Growth hormone, cortisol peak
  - Insufficient insulin to compensate
  - All night values elevated

Somogyi Effect:
  - Nocturnal hypoglycemia (2-3 AM)
  - Counterregulatory response
  - Morning hyperglycemia (rebound)
  - Low night values, high morning

Waning Insulin:
  - Insufficient basal insulin duration
  - Gradual rise through night
  - Progressive elevation

Distinguishing:
  Check 2-3 AM glucose:
  - Low: Somogyi (reduce basal)
  - Normal/high: Dawn (increase basal)
  - Rising steadily: Waning (adjust basal timing)
-----------------------------------------


**Acute Hyperglycemic Crises:**

*DKA vs HHS Comparison:*

Comparative Features:
-----------------------------------------
Feature                 DKA           HHS
-----------------------------------------
Typical patient          T1DM          T2DM (elderly)
Glucose                 >250          >600
Ketones                 Positive      Minimal/none
pH                      <7.30         >7.30
HCO3                    <18           >15
Anion gap               Elevated      Normal
Osmolality              Normal/↑      Markedly ↑
Mental status           Alert         Altered
Precipitating factors   Infection,   Infection,
                        missed insulin poor access
-----------------------------------------


*DKA Treatment Principles:*

DKA Management Protocol:
-----------------------------------------
1. Fluid Resuscitation:
   - 1 L NS initially (more if severely dehydrated)
   - Add D5W when glucose <200 mg/dL
   - Monitor for cerebral edema (children)

2. Insulin Therapy:
   - Regular insulin IV infusion 0.1 units/kg/hr
   - Goal: glucose decrease 50-75 mg/dL/hr
   - Continue until anion gap closes

3. Potassium Management:
   - Check K+ before insulin
   - If K+ <3.3: HOLD insulin, replace K+
   - If K+ 3.3-5.2: Give K+ with insulin
   - If K+ >5.2: Hold K+, give insulin

4. Bicarbonate:
   - NOT routinely recommended
   - Consider if pH <6.9

5. Precipitating Cause:
   - Search for and treat infection
   - Review medications
   - Consider MI/other stressors
-----------------------------------------


**Chronic Hyperglycemia:**

*Vascular Damage Mechanisms:*

Molecular Pathways of Chronic Injury:
-----------------------------------------
1. AGE Formation:
   Glucose + Protein → AGEs
   AGEs cross-link collagen → vascular stiffness
   AGE-RAGE interaction → inflammation

2. PKC Activation:
   Hyperglycemia → DAG → PKC activation
   → Vascular permeability ↑
   → Pro-thrombotic state

3. Polyol Pathway:
   Glucose → Sorbitol (aldose reductase)
   → Osmotic stress
   → Depletion of NADPH (oxidative stress)

4. Hexosamine Pathway:
   Fructose-6-P → UDP-GlcNAc
   → Altered transcription factors
   → TGF-β, PAI-1 ↑

5. Mitochondrial ROS:
   Hyperglycemia → ↑ electron donors
   → ROS production ↑
   → DNA damage, inflammation
-----------------------------------------


*Organ-Specific Manifestations:*

Target Organ Damage:
-----------------------------------------
Retina (Retinopathy):
  - Microaneurysms → hemorrhage
  - Exudates → macular edema
  - Neovascularization → blindness

Kidney (Nephropathy):
  - Hyperfiltration → microalbuminuria
  - Progressive ↓ GFR → ESRD
  - Kimmelstiel-Wilson nodules

Nerves (Neuropathy):
  - Axonal degeneration
  - Demyelination
  - Autonomic + peripheral

Vessels (Macrovascular):
  - Accelerated atherosclerosis
  - Endothelial dysfunction
  - Pro-thrombotic state
-----------------------------------------


**Management Strategies:**

*Insulin Therapy Adjustment:*

Pattern-Based Insulin Adjustment:
-----------------------------------------
Fasting Hyperglycemia:
  - Assess overnight pattern (check 2-3 AM)
  - Adjust basal insulin
  - Typical adjustment: ±10-20%

Pre-meal Hyperglycemia:
  - Assess previous post-meal pattern
  - Adjust bolus insulin ratio
  - Check carb counting accuracy

Post-meal Hyperglycemia:
  - Mealtime insulin timing
  - Pre-bolus: 15-20 min before eating
  - Insulin:carb ratio adjustment
  - Fat/protein considerations

Erratic Hyperglycemia:
  - Review injection/infusion site rotation
  - Check insulin storage
  - Consider stress factors
  - Assess absorption variability
-----------------------------------------


*Technology-Enhanced Management:*
\`\`\'
CGM-Directed Therapy:
-----------------------------------------
CGM Metrics for Hyperglycemia:
  - Time Above Range (TAR) - should be <25%
  - Average glucose
  - Glucose Management Indicator (GMI)
  - Standard deviation (variability)

AGP (Ambulatory Glucose Profile):
  - Visual pattern recognition
  - Time of day analysis
  - Trend identification
  - Treatment adjustment guidance

Automated Insulin Delivery:
  - Basal rate adjustments
  - Correction boluses (some systems)
  - Reduced hyperglycemia excursions
-----------------------------------------
`,
      keyTerms: [
        { term: 'TAR', definition: 'Time Above Range; CGM metric for hyperglycemia exposure' },
        { term: 'GMI', definition: 'Glucose Management Indicator; estimated A1C from CGM data' },
        { term: 'AGP', definition: 'Ambulatory Glucose Profile; standardized CGM report' },
        { term: 'cerebral edema', definition: 'Brain swelling; rare DKA complication in children' },
        { term: 'TGF-β', definition: 'Transforming growth factor beta; fibrosis promoter' },
        { term: 'PAI-1', definition: 'Plasminogen activator inhibitor-1; antifibrinolytic' },
      ],
      clinicalNotes: 'Hyperglycemia is a stronger predictor of mortality in ICU patients than hypoglycemia. Stress hyperglycemia in non-diabetics carries worse prognosis than known diabetes. Cerebral edema occurs in <1% of DKA episodes but has high mortality.',
      patientCounselingPoints: [
        'CGM can reveal hyperglycemia patterns not seen with fingerstick testing.',
        'The dawn phenomenon is normal - your diabetes treatment should account for it.',
        'Stress management is an important part of blood sugar control.',
        'Your insulin needs can change dramatically during illness - have a sick day plan.',
        'Hyperglycemia can affect your vision temporarily - don\'t change glasses prescriptions during high blood sugar.',
      ],
    },
    5: {
      level: 5,
      summary: 'Hyperglycemia represents a complex metabolic derangement resulting from insulin deficiency and counterregulatory hormone excess, manifesting as acute crises through ketogenesis or hyperosmolality and as chronic complications through advanced glycation, oxidative stress, and inflammatory pathways, requiring sophisticated management strategies.',
      explanation: `**Advanced Pathophysiology:**

*Integrated Metabolic Dysregulation:*

Hyperglycemia as a Systemic Disorder:
-------------------------------------------------
Insulin Deficiency/Resistance
      ↓
┌------------------┴-------------------┐
↓                                   ↓
Hepatic:                         Peripheral:
  ↑ Glucose output                  ↓ Glucose uptake
  (Gluconeogenesis)                (Muscle, adipose)
      ↓                                   ↓
  Ketogenesis (if insulin low)
      ↓
┌----------------------------------------┴----------------┐
↓                                                    ↓
DKA (Type 1)                                   Hyperglycemia
(accelerated)                                   (sustained)
      ↓                                                    ↓
Metabolic Acidosis                              Glycation
      ↓                                                    ↓
      └--------------------------------------------┘
                       ↓
              Vascular & Neural Injury
                       ↓
              Micro/Macrovascular Disease
-------------------------------------------------------------


*Molecular Biology of Hyperglycemic Damage:*

Advanced Glycation End-Products (AGEs) Pathway:
-------------------------------------------------
Glucose + Protein (Schiff base) → Amadori product → AGE

AGE Effects:
  - Cross-linking collagen (vascular stiffness)
  - Modified LDL (accelerated atherosclerosis)
  - RAGE activation → NF-κB → inflammation
  - Altered enzyme function
  - Modified basement membranes

RAGE Signaling:
  AGE + RAGE → ROS production
                 → NF-κB activation
                 → Pro-inflammatory cytokines
                 → Pro-thrombotic state
                 → Endothelial dysfunction
-------------------------------------------------


**Acute Crises Management:**

*Precision DKA Management:*

Individualized DKA Protocols:
-------------------------------------------------
Fluid Therapy:
  - Assess severity ( dehydration % )
  - Cardiac/renal function consideration
  - Sodium correction (pseudohyponatremia)
  - Cerebral edema prevention (gradual correction)

Insulin Infusion:
  - Standard: 0.1 units/kg/hr
  - Reduced: 0.05 units/kg/hr if:
    - Mild DKA
    - Very low K+
    - Young children

Electrolyte Management:
  - K+: Replace aggressively (total body depleted)
  - Phos: Replace if <1.0 or symptomatic
  - Mg: Replace if low or arrhythmia

Transition:
  - First subcutaneous dose 2 hours before stopping IV
  - overlap to prevent rebound hyperglycemia
  - Total daily dose calculation
-------------------------------------------------


*Special DKA Situations:*

Challenging DKA Scenarios:
-------------------------------------------------
Pregnancy:
  - Lower threshold for treatment
  - More aggressive fluid resuscitation
  - Consider fetal monitoring
  - Euglycemic DKA possible (SGLT2i)

Renal Failure:
  - Conservative fluid management
  - Adjust insulin dose (reduced clearance)
  - Hyperkalemia risk
  - Dialysis may be needed

Heart Failure:
  - Careful fluid management
  - Monitor for pulmonary edema
  - May need diuretics

SGLT2 Inhibitor-Associated DKA:
  - Euglycemic DKA (glucose <200)
  - High index of suspicion needed
  - Can occur in Type 2 diabetes
  - Prolonged treatment
-------------------------------------------------


**Chronic Complications:**

*Epigenetic Changes:*

Hyperglycemia-Induced Epigenetic Modification:
-------------------------------------------------
DNA Methylation:
  - Promoter hyper/hypomethylation
  - Transgenerational effects
  - "Metabolic memory"

Histone Modification:
  - Acetylation/deacetylation
  - Gene expression changes
  - Persistent effects

Non-coding RNA:
  - miRNA dysregulation
  - Post-transcriptional effects

Clinical Implication:
  Early intensive control has lasting benefit
  (DCCT/EDIC follow-up: legacy effect)
-------------------------------------------------


*Organ-Specific Pathogenesis:*

Advanced Mechanisms of Organ Damage:
-------------------------------------------------
Retinopathy:
  - VEGF upregulation
  → Neovascularization (PDR)
  - Vascular leakage
  → Macular edema
  - Neurodegeneration (early)

Nephropathy:
  - TGF-β activation
  → Fibrosis (glomerulosclerosis)
  - RAAS activation
  → Hyperfiltration → decline
  - Podocyte injury
  → Proteinuria

Neuropathy:
  - Axonal transport disruption
  - Microvascular ischemia
  - Dorsal root ganglion injury
  - Central sensitization
    → Neuropathic pain

Cardiovascular:
  - Endothelial dysfunction
  → Atherosclerosis acceleration
  - Plaque vulnerability
  → Acute events
  - Myocardial fibrosis
  → Diabetic cardiomyopathy
-------------------------------------------------


**Advanced Management:**

*Closed-Loop Systems:*

Automated Insulin Delivery Algorithms:
-------------------------------------------------
Hybrid Closed Loop:
  - Auto-basal adjustments every 5 min
  - User announces meals (carbs)
  - Correction boluses as needed
  - Reduces TAR by 30-40%

Advanced Hybrid:
  - Automated correction boluses
  - Meal announcement optional
  - Better post-meal control

Predictive Algorithms:
  - Machine learning glucose prediction
  - 30-60 minute ahead forecasting
  - Preemptive insulin adjustments
  - Reduced hypoglycemia + hyperglycemia
-------------------------------------------------


*Precision Medicine Approaches:*

Genetic/Phenotypic Considerations:
-------------------------------------------------
Phenotype-Specific Management:
  - High dawn phenomenon → pump dawn effect
  - Post-meal spikes → rapid-acting insulin
  - Variable absorption → consider pump

Genetic Considerations:
  - KCNJ11/ABCC8 → sulfonylurea response
  - TCF7L2 → progression risk
  - HLA type → autoimmune risk

Biomarker-Guided Therapy:
  - C-peptide → insulin vs non-insulin
  - Autoantibodies → Type 1 vs LADA
  - Genetic risk → prevention strategies
-------------------------------------------------


**Research Frontiers:**

*Novel Therapeutic Targets:*
- SGLT1/2 dual inhibitors
- GIP/GLP-1 dual agonists
- Tirzepatide (GIP/GLP-1) for Type 1 (investigational)
- Anti-inflammatory approaches
- AGE inhibitors
- Aldose reductase inhibitors

*Artificial Intelligence:*
- Predictive hyperglycemia alerts
- Automated meal detection
- Exercise effect prediction
- Stress recognition
- Individualized dosing algorithms`,
      keyTerms: [
        { term: 'euglycemic DKA', definition: 'DKA with normal or near-normal glucose, often with SGLT2 inhibitors' },
        { term: 'VEGF', definition: 'Vascular endothelial growth factor; mediator of angiogenesis and vascular leakage' },
        { term: 'RAAS', definition: 'Renin-angiotensin-aldosterone system; blood pressure regulation' },
        { term: 'TGF-β', definition: 'Transforming growth factor-beta; fibrosis mediator' },
        { term: 'legacy effect', definition: 'Long-term benefit from early intensive glycemic control' },
        { term: 'LADA', definition: 'Latent autoimmune diabetes of adults; slow-onset Type 1' },
      ],
      clinicalNotes: 'Euglycemic DKA is increasingly recognized with SGLT2 inhibitor use - maintain high suspicion. The legacy effect from DCCT/EDIC demonstrates that early intensive control has benefits persisting for decades.',
      patientCounselingPoints: [
        'SGLT2 inhibitors can cause DKA even with normal blood sugar - be aware of symptoms.',
        'Your genetics may affect how you respond to different diabetes medications.',
        'Artificial pancreas systems significantly reduce hyperglycemia variability.',
        'Research continues to advance - ask about clinical trials.',
        'Early intensive control provides lifelong benefits (legacy effect).',
      ],
    },
  },

  media: [
    {
      id: 'hyperglycemia-symptoms',
      type: 'diagram',
      filename: 'hyperglycemia-symptoms-infographic.svg',
      title: 'Recognizing Hyperglycemia Symptoms',
      description: 'Visual guide to hyperglycemia symptom recognition',
    },
    {
      id: 'dka-vs-hhs',
      type: 'diagram',
      filename: 'dka-vs-hhs-comparison.svg',
      title: 'DKA vs HHS Comparison',
      description: 'Side-by-side comparison of DKA and HHS',
    },
  ],

  citations: [
    {
      id: 'ada-standards-2024',
      type: 'article',
      title: 'Standards of Care in Diabetes-2024: Hyperglycemia',
      source: 'Diabetes Care',
      authors: ['American Diabetes Association'],
    },
    {
      id: 'dka-guideline',
      type: 'article',
      title: 'Diabetic Ketoacidosis and Hyperosmolar Hyperglycemic State: Review and Update',
      source: 'Endocrine Reviews',
    },
  ],

  crossReferences: [
    { targetId: 'chronic-disease-type1-diabetes', targetType: 'condition', relationship: 'related', label: 'Type 1 Diabetes' },
    { targetId: 'chronic-disease-type2-diabetes', targetType: 'condition', relationship: 'related', label: 'Type 2 Diabetes' },
    { targetId: 'chronic-disease-hypoglycemia', targetType: 'condition', relationship: 'sibling', label: 'Hypoglycemia' },
  ],

  tags: {
    systems: ['endocrine', 'metabolic'],
    topics: ['hyperglycemia', 'diabetes', 'DKA', 'HHS', 'complications'],
    keywords: ['high blood sugar', 'hyperglycemia', 'DKA', 'HHS', 'diabetic emergencies'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'emergency-medicine'] },
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
