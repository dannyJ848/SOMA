/**
 * Diabetes Management - Chronic Disease Education
 *
 * Comprehensive patient education about the comprehensive management
 * of diabetes, including lifestyle, medication, monitoring, and goal-setting.
 */

import { EducationalContent } from '../../types';

export const DIABETES_MANAGEMENT: EducationalContent = {
  id: 'chronic-disease-diabetes-management',
  type: 'concept',
  name: 'Diabetes Management',
  alternateNames: ['Diabetes self-management', 'Diabetes care', 'Diabetes treatment'],

  levels: {
    1: {
      level: 1,
      summary: 'Diabetes management means taking care of yourself every day by eating healthy, being active, taking your medicine, and checking your blood sugar to stay healthy and prevent problems.',
      explanation: `**What Is Diabetes Management?**

Diabetes management is the daily care that helps keep your blood sugar in a healthy range. It involves food, activity, medicine, and checking your blood sugar.

**The ABCs of Diabetes Management:**

\`\`\`
A = A1C (blood sugar test)
   Goal: Below 7% (your goal may be different)

B = Blood pressure
   Goal: Below 140/90

C = Cholesterol
   Goal: LDL below 100 (or lower if heart disease)
\`\`\`

**Daily Self-Care:**

*Healthy Eating:*
- Eat meals at regular times
- Include vegetables, fruits, and whole grains
- Watch portion sizes
- Limit sugary drinks and sweets
- Include protein with meals

*Being Active:*
- Aim for 30 minutes of activity most days
- Walking, swimming, biking, dancing
- Take breaks from sitting throughout the day
- Check blood sugar before and after exercise

*Taking Medicine:*
- Take your diabetes medicine as prescribed
- Don't skip doses
- Tell your doctor about side effects
- Use a pill organizer or reminders

*Checking Blood Sugar:*
- Follow your doctor's schedule
- Keep a log of your numbers
- Know your target ranges
- Share results at appointments

**Weekly Tasks:**
- Check your feet for cuts, sores, or blisters
- Review your blood sugar patterns
- Plan meals for the week
- Restock supplies

**Medical Visits:**
- See your doctor every 3-6 months
- Get an A1C test every 3-6 months
- Eye exam once a year
- Foot exam at every visit
- Kidney test once a year

**When to Call Your Doctor:**
- Blood sugar readings that are often too high or low
- You don't know how to handle a situation
- You are sick and don't know what to do
- Problems with your medicine

**Remember:** You are the most important member of your diabetes care team!`,
      keyTerms: [
        { term: 'A1C', definition: 'A blood test that shows your average blood sugar over the past 3 months' },
        { term: 'blood pressure', definition: 'The force of blood against your blood vessel walls' },
        { term: 'cholesterol', definition: 'A fat-like substance in your blood; too much can clog arteries' },
        { term: 'self-management', definition: 'Taking care of your health through daily habits and decisions' },
      ],
      analogies: [
        'Managing diabetes is like being the captain of a ship - you make daily decisions to stay on course.',
        'Think of your diabetes care team like your pit crew - they support you, but you drive the car.',
      ],
      examples: [
        'Juan checks his blood sugar before breakfast, walks for 30 minutes after lunch, and takes his metformin with dinner.',
        'Lisa uses a phone app to track her food, blood sugar, and activity. She shares the data with her doctor.',
      ],
      patientCounselingPoints: [
        'You do not have to be perfect - progress matters more than perfection.',
        'Set small, achievable goals rather than trying to change everything at once.',
        'Ask for help from family, friends, or support groups.',
        'Learn as much as you can about diabetes - knowledge is power.',
        'Find what works for YOU - diabetes management is not one-size-fits-all.',
      ],
    },
    2: {
      level: 2,
      summary: 'Comprehensive diabetes management integrates glycemic control, cardiovascular risk reduction, regular screening, and patient education to prevent acute complications and reduce long-term morbidity and mortality.',
      explanation: `**Goals of Diabetes Management:**

*Glycemic Targets (Individualized):*
\`\`\`
Standard Targets:
─────────────────────────────────────────
A1C:            <7.0% (most adults)
Pre-meal glucose: 80-130 mg/dL
2-hour post-meal: <180 mg/dL
Bedtime:         100-140 mg/dL

Individualized Considerations:
─────────────────────────────────────────
More stringent (<6.5%):
  • Short duration of diabetes
  • No significant hypoglycemia
  • Long life expectancy

Less stringent (<7.5-8.0%):
  • History of severe hypoglycemia
  • Limited life expectancy
  • Advanced complications
  • Young children or elderly
─────────────────────────────────────────
\`\`\`

**Core Management Components:**

*1. Medical Nutrition Therapy:*
\`\`\`
Healthy Eating Principles:
─────────────────────────────────────────
Carbohydrate Management:
  • Consistent amounts at meals
  • Choose complex carbohydrates
  • Include fiber (25-35g/day)
  • Limit added sugars

Heart-Healthy Eating:
  • Lean proteins (fish, poultry, legumes)
  • Healthy fats (nuts, avocado, olive oil)
  • Limit saturated fat (<7% calories)
  • Limit trans fat

Meal Planning Methods:
  • Plate method (1/2 non-starchy veg,
    1/4 protein, 1/4 starch)
  • Carbohydrate counting
  • Glycemic index consideration
─────────────────────────────────────────
\`\`\`

*2. Physical Activity:*
\`\`\`
Exercise Recommendations:
─────────────────────────────────────────
Aerobic Activity:
  • 150 minutes/week moderate intensity
  • OR 75 minutes/week vigorous
  • Spread over at least 3 days
  • No more than 2 consecutive days without

Resistance Training:
  • 2-3 sessions per week
  • 8-10 exercises, 10-15 reps
  • Major muscle groups

Flexibility and Balance:
  • Stretching on activity days
  • Balance training for older adults

Precautions:
  • Check glucose before exercise
  • Have carbohydrate available
  • Wear proper footwear
  • Check feet after activity
─────────────────────────────────────────
\`\`\`

*3. Pharmacologic Therapy:*
\`\`\`
Common Medication Classes:
─────────────────────────────────────────
Metformin:           First-line for most T2DM
Sulfonylureas:       Stimulate insulin release
DPP-4 inhibitors:    Increase incretin effect
SGLT2 inhibitors:    Increase glucose in urine
GLP-1 agonists:      Multiple beneficial effects
Insulin:             Replace deficiency
─────────────────────────────────────────
\`\`\`

*4. Glucose Monitoring:*
\`\`\'
Monitoring Options:
─────────────────────────────────────────
Self-Monitoring of Blood Glucose (SMBG):
  • Finger-stick testing
  • Provides instant reading
  • Check before meals, bedtime
  • Check before/after exercise
  • Check when feeling "off"

Continuous Glucose Monitoring (CGM):
  • Sensor measures continuously
  • Shows trends and patterns
  • Alarms for highs/lows
  • Time in Range metric
─────────────────────────────────────────
\`\`\`

**Cardiovascular Risk Management:**

\`\`\`
ABC Goals:
─────────────────────────────────────────
A1C:           <7.0% (individualized)
Blood Pressure: <140/90 mmHg (or <130/80)
Cholesterol:
  LDL: <70-100 mg/dL (individualized)
  HDL: >40 mg/dL (men), >50 mg/dL (women)
  Triglycerides: <150 mg/dL

Additional Measures:
  • Daily aspirin if indicated
  • Smoking cessation
  • Weight management
─────────────────────────────────────────
\`\`\`

**Screening Schedule:**

\`\`\`
Recommended Screening:
─────────────────────────────────────────
Every visit:
  • Blood pressure
  • Foot check
  • Weight/BMI
  • Review glucose logs

Every 3-6 months:
  • A1C test
  • Medication review

Annually:
  • Dilated eye exam
  • Comprehensive foot exam
  • Urine albumin test
  • Lipid panel
  • Dental exam
  • Influenza vaccine
  • Pneumococcal vaccine
─────────────────────────────────────────
\`\`\``,
      keyTerms: [
        { term: 'MNT', definition: 'Medical Nutrition Therapy; nutrition counseling for diabetes management' },
        { term: 'glycemic index', definition: 'How quickly a food raises blood sugar' },
        { term: 'time in range', definition: 'Percentage of glucose values within target range (70-180 mg/dL)' },
        { term: 'SMBG', definition: 'Self-monitoring of blood glucose; finger-stick testing' },
        { term: 'cardiovascular risk', definition: 'Risk of heart disease and stroke' },
      ],
      analogies: [
        'CGM is like a movie of your blood sugar, while finger-stick testing is like a snapshot.',
        'Think of your A1C as a report card for your blood sugar over the past 3 months.',
      ],
      clinicalNotes: 'The Steno-2 study showed that multifactorial intervention (glucose, BP, lipids, smoking) reduced cardiovascular events and death by 50%. Early intensive control has long-lasting benefits.',
      patientCounselingPoints: [
        'Your diabetes management plan should be individualized to your needs and preferences.',
        'Technology like CGM can make diabetes management easier and more effective.',
        'Work with a diabetes educator to develop your self-management skills.',
        'Join a diabetes support group to connect with others facing similar challenges.',
        'Set SMART goals: Specific, Measurable, Achievable, Relevant, Time-bound.',
      ],
    },
    3: {
      level: 3,
      summary: 'Diabetes management requires a comprehensive, patient-centered approach integrating glycemic control, cardiovascular risk reduction, lifestyle modification, and regular screening to prevent complications while individualizing therapy based on patient characteristics and preferences.',
      explanation: `**Management Philosophy:**

*Patient-Centered Care:*
\`\`\`
Key Principles:
─────────────────────────────────────────────────
1. Individualize targets based on:
   • Age and life expectancy
   • Duration of diabetes
   • Comorbidities
   • Hypoglycemia awareness/risk
   • Patient preferences and goals

2. Shared decision-making:
   • Discuss risks/benefits of options
   • Consider cost and access
   • Respect cultural preferences
   • Address health literacy

3. Diabetes self-management education and support (DSMES):
   • Ongoing process, not one-time event
   • Address psychosocial needs
   • Build problem-solving skills
─────────────────────────────────────────────────
\`\`\`

**Glycemic Management:**

*Pharmacologic Therapy Approach (Type 2 DM):*
\`\`\`
Treatment Algorithm:
─────────────────────────────────────────────────
                    Initial: Metformin + Lifestyle
                              ↓
                  A1C at target after 3 months?
                         ↓        ↓
                        NO       YES
                         ↓        ↓
        ┌─────────────────┴───────────────┐
        ↓                                 ↓
  High CV/renal risk?          Consider:
        ↓                         • Dual therapy
      YES                          • Simplify regimen
        ↓                         • Reduce burden
    Add proven CV benefit agents:
      • SGLT2 inhibitor
      • GLP-1 agonist
               ↓
    Reassess A1C in 3 months
               ↓
       If still not at target
               ↓
     Consider triple therapy or insulin
─────────────────────────────────────────────────
\`\`\`

*Insulin Management:*
\`\`\'
Basal-Bolus Regimen:
─────────────────────────────────────────────────
Basal Insulin:
  • Provides background insulin
  • Controls fasting glucose
  • Long-acting (glargine, detemir, degludec)
  • Dose: 40-50% of total daily dose

Bolus Insulin:
  • Covers carbohydrate intake
  • Corrects hyperglycemia
  • Rapid-acting (lispro, aspart, glulisine)
  • Dose: 50-60% of total daily dose

Calculations:
  Total Daily Dose (TDD):
    • Starting: 0.2-0.4 units/kg/day (T2DM)
    • Starting: 0.4-0.6 units/kg/day (T1DM)

  Insulin-to-Carb Ratio (ICR):
    • 450 ÷ TDD (for rapid-acting)
    • Example: TDD 45 units → ICR 1:10
      (1 unit per 10 grams carbohydrate)

  Correction Factor (CF):
    • 1800 ÷ TDD (for rapid-acting)
    • Example: TDD 45 units → CF 40
      (1 unit lowers glucose by 40 mg/dL)
─────────────────────────────────────────────────
\`\`\`

**Cardiovascular Risk Reduction:**

*Blood Pressure Management:*
\`\`\`
Hypertension in Diabetes:
─────────────────────────────────────────────────
Target: <130/80 mmHg (most patients)

First-line agents:
  • ACE inhibitors
  • ARBs
  • Thiazide-like diuretics
  • Dihydropyridine CCBs

Considerations:
  • ACEi/ARB preferred if albuminuria
  • Combination often needed
  • Monitor potassium and creatinine
─────────────────────────────────────────────────
\`\`\`

*Lipid Management:*
\`\`\`
Dyslipidemia Treatment:
─────────────────────────────────────────────────
Statin Therapy (Age 40-75):
  • Moderate intensity: Average risk
  • High intensity: High CV risk

Targets:
  • LDL: <70 mg/dL (high risk)
  • LDL: <55 mg/dL (very high risk)
  • Non-HDL: <100 mg/dL
  • Triglycerides: <150 mg/dL

Add ezetimibe or PCSK9 inhibitor if:
  • Statin intolerance
  • Not at goal on max statin
─────────────────────────────────────────────────
\`\`\`

**Complication Screening:**

\`\`\`
Annual Comprehensive Assessment:
─────────────────────────────────────────────────
Retinopathy Screening:
  • Type 1: Begin 5 years after diagnosis
  • Type 2: Begin at diagnosis
  • Frequency: Annual (or more if disease)

Nephropathy Screening:
  • Estimated glomerular filtration rate (eGFR)
  • Urine albumin-to-creatinine ratio (UACR)
  • Stage CKD if albuminuria present

Neuropathy Screening:
  • 10g monofilament testing
  • Pinprick sensation
  • Vibration perception (128 Hz tuning fork)
  • Ankle reflexes

Foot Exam:
  • Visual inspection
  • Pulse assessment
  • Deformity identification
  • Proper footwear evaluation
─────────────────────────────────────────────────
\`\`\`

**Behavioral Strategies:**

*Structured Self-Management:*
- Goal setting and action planning
- Problem-solving skills
- Stress management techniques
- Coping with diabetes distress
- Social support engagement
- Motivational interviewing approaches`,
      keyTerms: [
        { term: 'DSMES', definition: 'Diabetes Self-Management Education and Support' },
        { term: 'ICR', definition: 'Insulin-to-Carbohydrate Ratio; units of insulin per gram of carbohydrate' },
        { term: 'CF', definition: 'Correction Factor; how much one unit of insulin lowers glucose' },
        { term: 'albuminuria', definition: 'Albumin in urine; marker of kidney damage' },
        { term: 'PCSK9', definition: 'Proprotein convertase subtilisin/kexin type 9; cholesterol-lowering target' },
      ],
      clinicalNotes: 'Metformin is contraindicated in eGFR <30. SGLT2 inhibitors require eGFR >20-30 depending on agent. GLP-1 agonists have gastrointestinal side effects but promote weight loss.',
      patientCounselingPoints: [
        'Diabetes management is dynamic - your needs will change over time.',
        'Your A1C is just one measure - time in range is also important if you use CGM.',
        'Medications are tools, not failures - they help when lifestyle alone is not enough.',
        'Regular screening catches problems early when they are most treatable.',
        'Psychosocial support is essential - diabetes distress is common and treatable.',
      ],
    },
    4: {
      level: 4,
      summary: 'Modern diabetes management employs a multifaceted approach integrating personalized glycemic targets, cardioprotective pharmacotherapy, advanced monitoring technologies, lifestyle interventions, and systematic complication screening to optimize outcomes while minimizing treatment burden and hypoglycemia risk.',
      explanation: `**Precision Management Approach:**

*Individualized Target Setting:*
\`\`\`
Factors Influencing A1C Targets:
─────────────────────────────────────────────────
Tighter Control (<6.5%):
  • New-onset T2DM (treatment window)
  • Long life expectancy
  • No CVD or advanced complications
  • Low hypoglycemia risk
  • High motivation and resources

Standard Control (7.0-7.5%):
  • Most adults with T2DM
  • Moderate complication risk
  • Some hypoglycemia risk factors

Less Stringent (>7.5-8.0%):
  • Limited life expectancy
  • Advanced complications
  • History of severe hypoglycemia
  • Hypoglycemia unawareness
  • Frailty or cognitive impairment
  • Limited resources/support
─────────────────────────────────────────────────
\`\`\`

**Cardio-Renal-Metabolic Protection:**

*Evidence-Based Pharmacotherapy:*
\`\`\`
Agents with Proven Benefit:
─────────────────────────────────────────────────
SGLT2 Inhibitors:
  • Empagliflozin: ↓ CV death 38%, ↓ HF 35%
  • Canagliflozin: ↓ CV events 14%, ↓ CKD 34%
  • Dapagliflozin: ↓ HF hosp 27%, ↓ CKD progression 40%

  Mechanisms:
    - Osmotic diuresis (↓ preload)
    - Lower BP
    - Improve myocardial metabolism
    - Renal protective (intrarenal hemodynamics)

GLP-1 Receptor Agonists:
  • Semaglutide: ↓ MACE 26%, ↓ stroke 23%
  • Liraglutide: ↓ CV death 22%
  • Dulaglutide: ↓ MACE 12%

  Mechanisms:
    - Weight loss
    - BP reduction
    - Improved lipid profile
    - Direct cardiovascular effects

Indications for Both:
  • Established CVD
  • CKD (eGFR ≥20-25 depending on agent)
  • Heart failure (SGLT2i first-line)
─────────────────────────────────────────────────
\`\`\`

*Finerenone (Non-steroidal MRA):*
- Reduces CKD progression in T2DM
- Reduces CV events in CKD
- Add-on to ACEi/ARB + SGLT2i in advanced CKD

**Technology-Enhanced Management:**

*Continuous Glucose Monitoring:*
\`\`\`
CGM Metrics and Interpretation:
─────────────────────────────────────────────────
Time in Range (TIR):
  Target: >70% (70-180 mg/dL)
  Below 70%: Increased hypoglycemia risk
  Below 54%: Severe hypoglycemia risk
  Above 180%: Hyperglycemia exposure

Time Below Range (TBR):
  Level 1 (70-54 mg/dL): <4% recommended
  Level 2 (<54 mg/dL): <1% recommended

Time Above Range (TAR):
  Target: <25%
  Very high (>250): Assess ketones in T1DM

Coefficient of Variation (CV):
  Measure of variability
  Target: <36%

Glucose Management Indicator (GMI):
  Estimated A1C from mean glucose
  May differ from lab A1C
─────────────────────────────────────────────────
\`\`\`

*Automated Insulin Delivery:*
\`\`\`
Closed-Loop System Evolution:
─────────────────────────────────────────────────
Sensor-Augmented Pump:
  CGM + Pump (no communication)

Low Glucose Suspend:
  Stops insulin when CGM detects low

Predictive Low Suspend:
  Stops insulin when low predicted

Hybrid Closed Loop:
  Auto-adjusts basal every 5 minutes
  User announces meals (carbs)
  Correction boluses as needed

Advanced Hybrid:
  Automated correction boluses
  Meal announcement optional

Fully Automated:
  Minimal user input (investigational)
─────────────────────────────────────────────────
\`\`\`

**Psychosocial Considerations:**

*Diabetes Distress:*
\`\`\`
Prevalence and Impact:
─────────────────────────────────────────────────
Diabetes Distress:
  • Affects 30-40% of people with diabetes
  • Emotional burden of self-management
  • Worries about complications
  • Relationship with healthcare providers
  • Financial concerns

Screening:
  • PAID or DDS questionnaires
  • Screen at diagnosis and annually
  • Screen when regimen changes

Interventions:
  • Referral to mental health
  • Diabetes educator support
  • Support groups
  • Cognitive behavioral therapy
  • Simplify regimens when possible
─────────────────────────────────────────────────
\`\`\`

**Deprescribing Considerations:*

*When to Simplify:*
- Frail elderly
- Life-limiting illness
- Recurrent hypoglycemia
- High treatment burden
- Limited benefit potential

*Simplification Strategies:*
- Reduce glucose monitoring frequency
- Relax A1C targets
- Stop medications with high hypoglycemia risk
- Consider combination pills
- Deprescribe from multiple agents

**Special Populations:**

*Older Adults:*
\`\`\`
Geriatric Considerations:
─────────────────────────────────────────────────
Unique Aspects:
  • Higher hypoglycemia risk
  • Atypical symptoms
  • Polypharmacy
  • Cognitive impairment
  • Functional limitations

Management Principles:
  • Avoid sulfonylureas if possible
  • Prefer metformin, DPP-4i, SGLT2i, GLP-1
  • Simplify regimens
  • Focus on function and quality of life
  • Avoid overtreatment (A1C 7.5-8.5%)
─────────────────────────────────────────────────
\`\`\`

*Pregnancy:*
\`\`\'
Pregnancy Goals:
─────────────────────────────────────────────────
Preconception:
  • A1C <6.0-6.5% before conception
  • Switch to insulin (most oral agents stopped)
  • Start folic acid

During Pregnancy:
  • Tight targets: fasting <95, 1-hr <140, 2-hr <120
  • Frequent monitoring (4-7 times daily)
  • Consider CGM
  • Dietitian consult
  • Eye exam each trimester
─────────────────────────────────────────────────
\`\`\``,
      keyTerms: [
        { term: 'cardio-renal-metabolic', definition: 'Integrated approach to cardiovascular, renal, and metabolic risk' },
        { term: 'MACE', definition: 'Major adverse cardiovascular events (CV death, MI, stroke)' },
        { term: 'PAID', definition: 'Problem Areas in Diabetes questionnaire' },
        { term: 'DDS', definition: 'Diabetes Distress Scale questionnaire' },
        { term: 'deprescribing', definition: 'Systematic reduction of medications when risks outweigh benefits' },
      ],
      clinicalNotes: 'Aging and frailty should prompt reevaluation of glycemic targets. SGLT2 inhibitors should be used cautiously in older adults due to volume depletion and fall risk.',
      patientCounselingPoints: [
        'Your diabetes management should focus on what matters most to YOU.',
        'Newer medications (SGLT2i, GLP-1RA) protect your heart and kidneys, not just lower blood sugar.',
        'Technology can reduce the burden of diabetes management.',
        'Mental health is as important as physical health in diabetes care.',
        'Your treatment plan should be reviewed regularly and adjusted as needed.',
      ],
    },
    5: {
      level: 5,
      summary: 'Contemporary diabetes management integrates precision medicine approaches with evidence-based cardioprotective therapies, advanced monitoring technologies, individualized risk stratification, and psychosocial support to optimize outcomes while minimizing treatment burden in an increasingly complex therapeutic landscape.',
      explanation: `**Systems Biology Approach:**

*Precision Diabetes Management:*
\`\`\`
Multidimensional Stratification:
────────────────────────────────────────────────────────
Clinical Phenotype:
  • BMI, body composition
  • Age at diagnosis
  • Duration of diabetes
  • Comorbidities

Genetic Factors:
  • Polygenic risk scores
  • Monogenic diabetes (MODY)
  • Pharmacogenomics (KCNJ11, CYP2C9, etc.)
  • HLA status (autoimmune)

Biomarkers:
  • C-peptide (residual function)
  • Autoantibodies (type classification)
  • Inflammatory markers (hs-CRP)
  • Albuminuria (renal risk)
  • Natriuretic peptides (HF risk)

Behavioral/Psychosocial:
  • Health literacy
  • Social determinants of health
  • Diabetes distress
  • Depression/anxiety
  • Cultural preferences

→ Integration for Individualized Management
────────────────────────────────────────────────────────
\`\`\`

**Therapeutic Landscape:**

*Triple Hormone Agonists:*
\`\`\`
Multi-Incretin Therapies:
────────────────────────────────────────────────────────
Tirzepatide (GIP/GLP-1):
  • Superior A1C reduction vs GLP-1 alone
  • Significant weight loss (up to 22%)
  • Dose-dependent effects
  • GI side effects (nausea, vomiting)
  • Potential CV benefit ongoing trials

Retatrutide (GIP/GLP-1/Glucagon):
  • Triple agonist (phase 3)
  • Even greater weight loss
  • Investigational for T2DM

Future Directions:
  • GLP-1/Glucagon (weight focus)
  • Oral GLP-1 (oral semaglutide)
  • Long-acting weekly GLP-1
  • Monthly formulations
────────────────────────────────────────────────────────
\`\`\`

*Insulin Innovations:*
\`\`\'
Next-Generation Insulins:
────────────────────────────────────────────────────────
Weekly Basal Insulin:
  • Insulin icodec (approved in some regions)
  • Once-weekly administration
  • Similar efficacy to daily glargine
  • Reduced injection burden

Concentrated Formulations:
  • U-200, U-300, U-500 (degludec)
  • Smaller volumes for high doses
  • For severe insulin resistance

Biosimilars:
  • Reduced cost
  • Improved access
  • Similar efficacy to reference products

Connected Insulin Delivery:
  • Pens with dose memory
  • Bluetooth connectivity
  • Dose tracking apps
────────────────────────────────────────────────────────
\`\`\`

**Digital Health Integration:**

*Artificial Intelligence:*
\`\`\`
AI-Enhanced Diabetes Management:
────────────────────────────────────────────────────────
Glucose Prediction:
  • 30-60 minute ahead forecasting
  • Meal detection (via CGM pattern)
  • Exercise effect prediction
  • Stress and illness detection

Dosing Optimization:
  • Automated bolus calculators
  • Adaptive basal rates
  • Pattern recognition algorithms
  • Hypo/hyperglycemia prevention

Population Health:
  • Risk stratification
  • Outlier identification
  • Resource allocation
  • Quality improvement

Digital Therapeutics:
  • FDA-approved software (prescription apps)
  • CBT for diabetes distress
  • Nutrition coaching
  • Physical activity guidance
────────────────────────────────────────────────────────
\`\`\`

*Remote Patient Monitoring:*
\`\`\`
Telehealth Integration:
────────────────────────────────────────────────────────
CGM Remote Monitoring:
  • Care team views real-time data
  • Alerts for severe lows/highs
  • Intervene before emergency

Connected Platforms:
  • Device integration (pumps, CGM, scales)
  • EHR integration
  • Patient portals
  • Secure messaging

RPM Billing:
  • CPT codes for time spent
  • Reimbursement for monitoring
  • Expanding access
────────────────────────────────────────────────────────
\`\`\`

**Immunotherapy and Prevention:**

*Disease Modification:*
\`\`\`
Immunomodulation in Type 1 Diabetes:
────────────────────────────────────────────────────────
Teplizumab (anti-CD3):
  • FDA-approved for stage 2 T1D
  • Delays onset by ~3 years
  • 14-day IV infusion
  • High-risk individuals (multiple autoantibodies)

Other Investigational:
  • ATG (antithymocyte globulin)
  • Abatacept (CTLA4-Ig)
  • GAD vaccine
  • Stem cell transplantation
────────────────────────────────────────────────────────
\`\`\`

*Prevention Strategies:*
\`\`\`
Type 2 Diabetes Prevention:
────────────────────────────────────────────────────────
Lifestyle Intervention (DPP):
  • 58% reduction in progression
  • 5-7% weight loss
  • 150 min/week activity
  • Sustained effect >10 years

Pharmacologic Prevention:
  • Metformin (31% reduction)
  • GLP-1 agonists (investigational)
  • Tirzepatide (ongoing trials)

Precision Prevention:
  • Genetic risk scores
  • Target high-risk populations
  • Cultural tailoring
  • Social determinant intervention
────────────────────────────────────────────────────────
\`\`\`

**Health Equity Considerations:**

\`\`\`
Disparities and Solutions:
────────────────────────────────────────────────────────
Access Disparities:
  • Technology (CGM, pumps) underutilized
  in underserved populations
  • Solutions: Insurance coverage, device
  assistance programs, telehealth

Cultural Competence:
  • Language-appropriate materials
  • Culturally relevant food recommendations
  • Community health workers
  • Trust-building with healthcare system

Social Determinants:
  • Food insecurity screening
  • Housing stability support
  • Transportation assistance
  • Prescription cost assistance

Global Perspectives:
  • Low-cost insulin initiatives
  • Task-shifting to community health workers
  • Mobile health (mHealth) solutions
  • Point-of-care technologies
────────────────────────────────────────────────────────
\`\`\`

**Implementation Science:**

*Best Practices in Care Delivery:*
- Team-based care (primary care, endocrinology, education, pharmacy)
- Population management (registry, outreach)
- Clinical decision support
- Quality metrics and feedback
- Payment reform alignment`,
      keyTerms: [
        { term: 'MODY', definition: 'Maturity-Onset Diabetes of the Young; monogenic diabetes' },
        { term: 'RPM', definition: 'Remote Patient Monitoring; telehealth monitoring of patient data' },
        { term: 'digital therapeutics', definition: 'FDA-regulated software for medical treatment' },
        { term: 'biosimilar', definition: 'Biologic product highly similar to reference product' },
        { term: 'task-shifting', definition: 'Redistributing tasks from specialized to less specialized health workers' },
      ],
      clinicalNotes: 'Teplizumab represents the first disease-modifying therapy for T1D. Weekly basal insulin reduces injection burden but careful dose titration is essential. AI integration in diabetes devices is accelerating rapidly.',
      patientCounselingPoints: [
        'Precision diabetes care means YOUR treatment is based on YOUR unique characteristics.',
        'Digital tools can significantly reduce diabetes management burden.',
        'Ask about clinical trials if interested in cutting-edge therapies.',
        'Social determinants (food, housing, finances) affect diabetes - discuss with your provider.',
        'Your voice matters in treatment decisions - shared decision-making is key.',
      ],
    },
  },

  media: [
    {
      id: 'diabetes-abc',
      type: 'diagram',
      filename: 'diabetes-abc-infographic.svg',
      title: 'The ABCs of Diabetes Management',
      description: 'Visual guide to A1C, Blood pressure, and Cholesterol goals',
    },
    {
      id: 'diabetes-plate-method',
      type: 'diagram',
      filename: 'diabetes-healthy-plate.svg',
      title: 'The Diabetes Plate Method',
      description: 'Visual guide for balanced meal planning',
    },
  ],

  citations: [
    {
      id: 'ada-standards-2024',
      type: 'article',
      title: 'Standards of Care in Diabetes-2024',
      source: 'Diabetes Care',
      authors: ['American Diabetes Association'],
    },
    {
      id: 'steno-2',
      type: 'article',
      title: 'Intensified Multifactorial Intervention in Type 2 Diabetes: The Steno-2 Study',
      source: 'New England Journal of Medicine',
    },
    {
      id: 'dpp',
      type: 'article',
      title: 'Diabetes Prevention Program Outcomes Study',
      source: 'Lancet Diabetes & Endocrinology',
    },
  ],

  crossReferences: [
    { targetId: 'chronic-disease-type1-diabetes', targetType: 'condition', relationship: 'related', label: 'Type 1 Diabetes' },
    { targetId: 'chronic-disease-type2-diabetes', targetType: 'condition', relationship: 'related', label: 'Type 2 Diabetes' },
    { targetId: 'diabetes-blood-sugar-monitoring', targetType: 'concept', relationship: 'related', label: 'Blood Sugar Monitoring' },
  ],

  tags: {
    systems: ['endocrine', 'metabolic'],
    topics: ['diabetes', 'self-management', 'lifestyle', 'medication', 'prevention'],
    keywords: ['diabetes management', 'self-care', 'A1C', 'treatment', 'diabetes education'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'family-medicine'] },
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
