/**
 * Exercise for Diabetes - Comprehensive Educational Content
 *
 * Covers exercise prescription for individuals with type 1 and type 2 diabetes,
 * including glucose management, safety considerations, and optimal programming.
 */

import { EducationalContent } from '../../types';

export const exerciseForDiabetes: EducationalContent = {
  id: 'sports-med-exercise-for-diabetes',
  type: 'concept',
  name: 'Exercise for Diabetes',
  alternateNames: ['Diabetes Exercise Prescription', 'Physical Activity and Diabetes'],

  levels: {
    1: {
      level: 1,
      summary: 'Exercise is like medicine for people with diabetes - it helps the body use sugar better and can make diabetes easier to manage.',
      explanation: `## Why Exercise Helps with Diabetes

When you have diabetes, your body has trouble using sugar (glucose) from food properly. Exercise is really helpful because it:

- Helps your muscles use sugar for energy (without needing as much insulin)
- Can lower your blood sugar levels
- Helps you stay at a healthy weight
- Makes your heart and blood vessels stronger

## Types of Helpful Exercise

**Moving Activities (Aerobic)**
- Walking, swimming, biking, dancing
- Gets your heart pumping
- Should do most days of the week

**Strength Activities**
- Using weights or resistance bands
- Doing push-ups, squats
- Should do 2-3 times per week

## Staying Safe

**Check Before You Move**
- Know your blood sugar level before exercise
- Have a snack if blood sugar is low
- Bring glucose tablets or juice just in case

**Be Careful Of:**
- Low blood sugar (hypoglycemia) during or after exercise
- Signs: Shaky, sweaty, dizzy, confused
- Always tell an adult if you feel these

**What to Do:**
- Stop exercising
- Drink juice or eat glucose tablets
- Wait until you feel better

## Exercise Tips

- Start slowly and build up gradually
- Drink plenty of water
- Check your feet after exercise (diabetes can affect feeling in feet)
- Exercise is better with a buddy who knows about your diabetes`,
      keyTerms: [
        { term: 'blood sugar', definition: 'The amount of sugar (glucose) in your blood, which exercise can help lower' },
        { term: 'insulin', definition: 'A hormone that helps your body use sugar for energy' },
        { term: 'hypoglycemia', definition: 'When blood sugar drops too low, which can make you feel shaky and dizzy' },
      ],
      analogies: [
        'Exercise is like a helper that unlocks your muscle cells so sugar can get in easier, even without as much insulin.',
        'Think of blood sugar like water in a pool - exercise helps drain some of the water so the levels stay normal.',
      ],
      examples: [
        'A 30-minute walk after dinner can help lower blood sugar levels that rise after eating.',
        'Playing on a sports team can be great exercise, but the coach and parents should know about the diabetes so they can help if blood sugar goes low.',
      ],
    },
    2: {
      level: 2,
      summary: 'Exercise improves insulin sensitivity and glucose uptake in people with diabetes, making it a cornerstone of management. Proper timing, monitoring, and precautions help maximize benefits while preventing hypoglycemia.',
      explanation: `## How Exercise Affects Blood Sugar

### During Exercise
- Muscles take up glucose without needing as much insulin
- Blood sugar typically decreases
- Effect can last several hours after exercise

### After Exercise
- Muscles remain more sensitive to insulin
- Continued blood glucose lowering effect
- Risk of delayed hypoglycemia (especially overnight)

## Benefits of Exercise in Diabetes

**Type 2 Diabetes:**
- Improves insulin sensitivity (core benefit)
- Helps with weight management
- Lowers HbA1c (average blood sugar over months)
- Reduces cardiovascular disease risk

**Type 1 Diabetes:**
- Improves cardiovascular health
- May reduce insulin requirements
- Better quality of life
- Requires more careful glucose management

## Exercise Guidelines for Diabetes

### Aerobic Exercise
- 150 minutes/week of moderate intensity (can talk, but not sing)
- Examples: Brisk walking, swimming, cycling
- Spread throughout the week (no more than 2 consecutive days off)

### Resistance Training
- 2-3 days per week
- Include major muscle groups
- Start light and progress gradually

## Blood Glucose Management

### Before Exercise
| Blood Glucose | Action |
|--------------|--------|
| <90 mg/dL (<5 mmol/L) | Eat 15-30g carbs before starting |
| 90-250 mg/dL (5-14 mmol/L) | OK to start exercise |
| >250 mg/dL (>14 mmol/L) | Check for ketones; if positive, delay exercise |

### During Exercise
- Monitor if session >30-60 minutes
- Have fast-acting carbs available
- Recognize hypoglycemia symptoms

### After Exercise
- Monitor blood glucose for several hours
- Watch for delayed hypoglycemia (can occur 4-8+ hours later)
- May need to reduce nighttime insulin after exercise

## Safety Considerations

### Hypoglycemia Prevention
- Know the signs: Shakiness, sweating, confusion, hunger
- Always carry glucose tablets or juice
- Exercise with someone who knows about your condition

### Special Precautions
- Check feet before and after exercise (nerve damage can hide injuries)
- Stay hydrated
- Avoid exercise if you have ketones in urine
- Start slowly if new to exercise

### When to Be Extra Careful
- Taking insulin or medications that can cause low blood sugar
- Exercising in heat
- Longer duration or more intense exercise
- New or unfamiliar activities`,
      keyTerms: [
        { term: 'insulin sensitivity', definition: 'How well the body responds to insulin; exercise improves this, meaning less insulin is needed' },
        { term: 'HbA1c', definition: 'A blood test showing average blood sugar over 2-3 months; target is usually below 7%' },
        { term: 'delayed hypoglycemia', definition: 'Low blood sugar that occurs hours after exercise, even overnight' },
        { term: 'ketones', definition: 'Substances produced when the body breaks down fat; high levels indicate poor glucose control' },
      ],
      analogies: [
        'Insulin sensitivity is like how well a lock accepts a key - exercise makes the lock (cells) work better with the key (insulin).',
        'Delayed hypoglycemia is like how your muscles continue to absorb sugar even after exercise stops, like a sponge that keeps soaking up water.',
      ],
    },
    3: {
      level: 3,
      summary: 'Exercise prescription for diabetes requires individualization based on type, medications, complications, and glucose patterns, integrating evidence-based aerobic and resistance training protocols with real-time glucose monitoring strategies.',
      explanation: `## Physiological Basis of Exercise in Diabetes

### Insulin-Independent Glucose Uptake
- Muscle contraction activates GLUT4 translocation
- AMPK-mediated pathway (bypasses insulin signaling)
- Effect persists for 24-72 hours post-exercise
- Explains why exercise works even in insulin resistance

### Acute vs. Chronic Effects
**Acute:**
- Immediate glucose lowering during exercise
- Enhanced insulin sensitivity for 24-48 hours
- Risk of hypoglycemia (with insulin/secretagogues)

**Chronic:**
- Reduced HbA1c (0.5-0.7% reduction typical)
- Improved insulin sensitivity
- Better lipid profile
- Reduced visceral fat

## Exercise Prescription by Diabetes Type

### Type 2 Diabetes
**Aerobic Training:**
- 150-300 min/week moderate OR 75-150 min/week vigorous
- At least 3 days/week, no more than 2 consecutive days off
- Can break into 10-minute bouts minimum

**Resistance Training:**
- 2-3 sessions/week on non-consecutive days
- 8-10 exercises targeting major muscle groups
- 2-3 sets of 10-15 repetitions
- Moderate intensity (50-75% 1RM)

**Combined Training:**
- May be superior for glycemic control vs. either alone
- Practical approach: 3 days aerobic, 2 days resistance

### Type 1 Diabetes
**General Principles:**
- Same general recommendations as T2DM
- Requires more intensive glucose monitoring
- Significant individual variation in glucose response

**Glucose Considerations:**
- Aerobic exercise typically lowers glucose
- High-intensity/resistance may initially raise glucose
- Variable response requires individual pattern recognition

## Glucose Management Strategies

### Pre-Exercise
| Starting BG (mg/dL) | Action |
|--------------------|--------|
| <90 | 15-30g CHO; consider reducing bolus insulin |
| 90-150 | May need 10-15g CHO depending on intensity/duration |
| 150-250 | Can start; monitor closely |
| >250 | Check ketones; if moderate/large, delay |
| >300 | Delay exercise; address hyperglycemia |

### Medication Adjustments (T1DM/Insulin Users)
**Bolus Insulin:**
- Reduce pre-exercise bolus by 25-75%
- Timing: Avoid peak action during exercise

**Basal Insulin (Pump Users):**
- Reduce basal 50-80% starting 60-90 min before exercise
- May need to reduce for hours after as well

### Continuous Glucose Monitoring (CGM)
- Real-time glucose tracking
- Trend arrows indicate direction
- Alarms for impending hypo/hyperglycemia
- Optimal for exercise management

## Complications and Exercise Considerations

### Cardiovascular Disease
- Higher prevalence in diabetes
- May need exercise testing before vigorous program
- ECG monitoring in high-risk individuals
- Beta-blockers mask hypoglycemia symptoms

### Peripheral Neuropathy
- Loss of protective sensation in feet
- Avoid repetitive weight-bearing if severe
- Daily foot inspection essential
- Non-weight-bearing options: Swimming, cycling

### Autonomic Neuropathy
- Impaired heart rate response
- Thermoregulation problems
- Orthostatic hypotension
- RPE-based intensity rather than HR

### Retinopathy
| Stage | Exercise Modifications |
|-------|----------------------|
| None-mild NPDR | No restrictions |
| Moderate NPDR | Avoid activities that spike BP |
| Severe NPDR/PDR | Avoid Valsalva, high-intensity, head-down |

### Nephropathy
- Light-moderate intensity typically safe
- Avoid Valsalva maneuver
- Blood pressure management important
- Adjust based on eGFR

## Practical Programming

### Sample Week (Type 2 Diabetes)
| Day | Activity | Duration |
|-----|----------|----------|
| Mon | Brisk walking | 30 min |
| Tue | Resistance training | 30-40 min |
| Wed | Swimming | 30 min |
| Thu | Resistance training | 30-40 min |
| Fri | Cycling | 30 min |
| Sat | Active recreation | 45+ min |
| Sun | Rest or light stretching | - |

### Monitoring and Progression
- Blood glucose monitoring pre/during/post
- Weekly review of patterns
- Gradual intensity progression
- Adjust medications as fitness improves`,
      keyTerms: [
        { term: 'GLUT4', definition: 'Glucose transporter protein that moves to cell surface with exercise or insulin, allowing glucose entry' },
        { term: 'AMPK', definition: 'AMP-activated protein kinase; cellular energy sensor that triggers GLUT4 translocation independent of insulin' },
        { term: 'CGM', definition: 'Continuous glucose monitoring; wearable device providing real-time glucose readings and trends' },
        { term: 'NPDR/PDR', definition: 'Non-proliferative/Proliferative diabetic retinopathy; stages of eye disease affecting exercise recommendations' },
      ],
      clinicalNotes: 'Exercise-induced hypoglycemia risk is highest with insulin, sulfonylureas, and meglitinides. Metformin and newer agents (GLP-1 agonists, SGLT2 inhibitors, DPP-4 inhibitors) have lower hypoglycemia risk. Individualize recommendations based on medication regimen and glucose patterns.',
    },
    4: {
      level: 4,
      summary: 'Advanced diabetes exercise management integrates molecular mechanisms of glucose regulation, pharmacokinetic considerations with insulin and oral agents, and individualized algorithms for glycemic control during varied exercise modalities and intensities.',
      explanation: `## Molecular Mechanisms of Exercise Glucose Regulation

### Contraction-Mediated GLUT4 Translocation
**Signaling Cascade:**
- Mechanical stress → Ca²⁺ release
- AMPK activation (AMP/ATP ratio sensing)
- Rac1 GTPase involvement
- Actin cytoskeleton remodeling
- GLUT4 vesicle translocation to sarcolemma

**Independent of Insulin:**
- Does not require IRS-1/PI3K/Akt pathway
- Effective even with insulin resistance
- Explains exercise efficacy in T2DM

### Post-Exercise Insulin Sensitivity
**Mechanisms:**
- GLUT4 remains elevated for hours
- Glycogen synthase activation
- Enhanced proximal insulin signaling
- Mitochondrial biogenesis (chronic effect)

**Duration:**
- Enhanced sensitivity: 24-72 hours
- Single bout effect vs. training effect
- Frequency of exercise maintains improvement

## Pharmacological Interactions with Exercise

### Insulin Considerations
**Pharmacokinetics:**
| Insulin Type | Onset | Peak | Duration | Exercise Consideration |
|-------------|-------|------|----------|----------------------|
| Rapid-acting | 10-15 min | 1-2 hr | 3-5 hr | Reduce if exercise during peak |
| Short-acting | 30 min | 2-4 hr | 5-8 hr | Plan exercise outside peak |
| NPH | 1-2 hr | 4-12 hr | 14-24 hr | Be aware of unpredictable peak |
| Long-acting | 1-2 hr | No peak | 24+ hr | Less adjustment typically needed |

**Absorption Considerations:**
- Exercise increases blood flow to injection site
- Faster absorption if exercising injected limb
- Avoid injecting limb that will be active

### Oral Agents and Hypoglycemia Risk
**High Risk:**
- Sulfonylureas (stimulate insulin secretion)
- Meglitinides (similar mechanism)
- May need dose reduction on exercise days

**Lower Risk:**
- Metformin (no direct hypoglycemia risk)
- DPP-4 inhibitors
- GLP-1 receptor agonists
- SGLT2 inhibitors

### SGLT2 Inhibitors Special Considerations
- Promote urinary glucose excretion
- Euglycemic DKA risk (rare but serious)
- Adequate hydration important
- Consider withholding for prolonged exercise

## Exercise Modality and Glycemic Response

### Aerobic Exercise
- Generally lowers blood glucose
- Magnitude depends on intensity and duration
- Greater effect in glycogen-depleted state

### Resistance Training
**Acute Response:**
- May initially raise glucose
- Catecholamine-driven hepatic glucose output
- Often followed by gradual decline

**Chronic Effect:**
- Improved insulin sensitivity
- Increased muscle mass (glucose disposal)
- Beneficial for glycemic control

### High-Intensity Interval Training (HIIT)
**Glycemic Response:**
- May raise glucose initially (counter-regulatory hormones)
- Post-exercise glucose lowering
- May be more time-efficient for glycemic benefits

**Considerations:**
- Screen for cardiovascular disease
- Start conservatively
- Monitor response patterns

### Mixed Modality Approaches
- Resistance before aerobic: May attenuate hypo risk
- HIIT integrated with moderate: Variable response
- Individualization essential

## Advanced Glucose Management Algorithms

### CGM-Guided Exercise
**Pre-Exercise Assessment:**
- Current glucose value
- Trend arrow direction
- Rate of change
- Time to exercise

**Decision Algorithm:**
| Glucose (mg/dL) | Trend | Action |
|----------------|-------|--------|
| <100 | Any | 15-30g CHO; wait for rise |
| 100-150 | ↓ | 15g CHO |
| 100-150 | → | Consider 10g CHO |
| 100-150 | ↑ | Proceed |
| 150-250 | ↓ | Monitor; CHO available |
| 150-250 | → ↑ | Proceed |
| >250 | Any | Check ketones; address if needed |

### Automated Insulin Delivery (Hybrid Closed-Loop)
- Algorithm adjusts basal delivery
- May have exercise mode
- Still requires user input for carbs
- Learning individual patterns

## Type 1 Diabetes Specific Strategies

### Pre-Exercise Insulin Reduction
**Bolus Reduction:**
- Exercise within 2-3 hours of meal: Reduce bolus 25-75%
- Greater reduction for longer/more intense exercise
- Individualize based on experience

**Basal Reduction (Pump Users):**
- Suspend or reduce 50-80%
- Start 60-90 minutes before exercise
- May need continued reduction post-exercise

### Post-Exercise Management
**Delayed Hypoglycemia Prevention:**
- Evening exercise: May need overnight basal reduction
- Post-exercise snack with protein + carb
- Monitor before bed and consider alarm

**Glycemic Rebound:**
- High-intensity exercise may cause later hyperglycemia
- Consider small correction if needed
- Understand individual pattern

### Competition and Athletic Performance
- Pre-competition glucose optimization
- Carbohydrate loading considerations
- Race-day insulin adjustments
- Backup supplies and support crew education

## Multi-Morbidity Management

### Diabetes + Cardiovascular Disease
- Cardiovascular screening essential
- Gradual progression
- Monitor for angina, dyspnea, arrhythmia
- Consider supervised cardiac rehabilitation

### Diabetes + Obesity
- Non-weight-bearing options initially
- Combined diet + exercise most effective
- Realistic expectations for weight loss
- Focus on cardiometabolic improvements

### Diabetes + Renal Disease
- May need modified intensity
- Blood pressure management
- Fluid balance considerations
- Adjust based on dialysis schedule if applicable`,
      keyTerms: [
        { term: 'Rac1 GTPase', definition: 'Signaling protein involved in contraction-mediated GLUT4 translocation; part of insulin-independent pathway' },
        { term: 'euglycemic DKA', definition: 'Diabetic ketoacidosis occurring at normal or near-normal blood glucose levels; rare complication of SGLT2 inhibitors' },
        { term: 'hybrid closed-loop', definition: 'Automated insulin delivery system that adjusts basal insulin based on CGM input; still requires user bolus for meals' },
        { term: 'counter-regulatory hormones', definition: 'Hormones (glucagon, epinephrine, cortisol, GH) that raise blood glucose; activated during intense exercise' },
      ],
      clinicalNotes: 'SGLT2 inhibitors require careful consideration around intense or prolonged exercise due to euglycemic DKA risk. Educate patients on warning signs. Automated insulin delivery systems improve glucose management but still require user engagement for exercise. Individualization is paramount.',
    },
    5: {
      level: 5,
      summary: 'Elite diabetes exercise management encompasses precision medicine approaches, advanced algorithm development, molecular mechanism exploitation, and integrated technology platforms for optimizing glucose control and athletic performance in individuals with diabetes.',
      explanation: `## Precision Medicine in Diabetes Exercise

### Genomic Considerations
**Pharmacogenomics:**
- CYP2C9 variants: Sulfonylurea metabolism
- OCT transporters: Metformin response
- Individual drug response variation

**Exercise Response Genetics:**
- ACE I/D: Endurance phenotype
- PPARGC1A: Mitochondrial adaptation
- Insulin sensitivity response genes
- May explain responder/non-responder to exercise

### Metabolomic Profiling
**Exercise Signatures:**
- Lactate, pyruvate dynamics
- Acylcarnitine changes
- Amino acid flux
- Ketone body responses

**Applications:**
- Personalized nutrition timing
- Training load optimization
- Recovery status assessment
- Metabolic flexibility evaluation

## Advanced Glycemic Control Technologies

### Integrated Exercise Algorithms
**Input Variables:**
- Real-time CGM data
- Heart rate/intensity metrics
- Historical exercise patterns
- Meal timing and composition
- Insulin on board (IOB)

**Algorithm Development:**
- Machine learning for pattern recognition
- Predictive glucose modeling
- Automated insulin adjustment recommendations
- Personalized carbohydrate dosing

### Next-Generation Closed-Loop Systems
**Dual-Hormone Systems:**
- Insulin + glucagon delivery
- Faster hypoglycemia prevention
- Exercise mode optimization
- Still in development/trials

**Exercise-Aware Algorithms:**
- Heart rate integration
- Activity detection
- Proactive basal adjustment
- Learning individual response patterns

### Digital Health Ecosystems
- CGM + insulin pump + activity tracker integration
- Cloud-based analytics
- Physician dashboard for review
- Coaching and behavioral support

## Molecular Target Exploitation

### AMPK Activation Strategies
**Exercise Mimetics (Research):**
- AICAR: Direct AMPK activator
- Berberine: AMPK-related effects
- Not replacements for exercise, but mechanistic interest

**Combination Approaches:**
- Exercise + pharmacological synergy
- Metformin + exercise: Potential interactions
- Timing considerations for maximum benefit

### Enhancing Mitochondrial Biogenesis
**PGC-1α Pathway:**
- Master regulator of oxidative metabolism
- Exercise-induced upregulation
- Potential pharmacological enhancement

**Implications:**
- Greater fat oxidation capacity
- Improved insulin sensitivity
- Long-term metabolic health

## Elite Athlete with Diabetes

### Type 1 Diabetes Athletes
**Successful Management Principles:**
- Intensive education and self-management
- CGM essential
- Pattern recognition and adjustment
- Support team awareness

**Performance Nutrition:**
- Carbohydrate periodization
- Training low strategies (with caution)
- Competition fueling optimization
- Recovery nutrition

**Case Studies:**
- Professional cyclists, triathletes with T1DM
- Demonstrate high performance is achievable
- Requires meticulous planning

### Competition-Day Protocols
**Pre-Competition:**
- Optimize glycogen stores (carb loading modified for diabetes)
- Insulin reduction strategies
- Target glucose range (often 120-180 mg/dL for competition)

**During Competition:**
- Real-time CGM monitoring (if permitted)
- Planned carbohydrate intake
- Adjustment based on trends

**Post-Competition:**
- Watch for delayed hypoglycemia
- Recovery nutrition with glucose consideration
- Gradual return of normal insulin dosing

## Special Populations Research

### Type 2 Diabetes Remission Studies
**Lifestyle Intervention:**
- Intensive exercise + caloric restriction
- Substantial weight loss (10-15%+)
- Remission possible in some cases
- Mechanisms: Beta-cell rest, reduced hepatic fat

**Exercise Prescription:**
- High volume may be needed for remission
- Combined aerobic + resistance optimal
- Long-term maintenance crucial

### Prediabetes Prevention
**Diabetes Prevention Program:**
- 150 min/week moderate exercise
- 7% weight loss goal
- 58% diabetes risk reduction
- More effective than metformin

**Exercise as Primary Prevention:**
- Cost-effective intervention
- Implementation challenges
- Community-based programs

### Pregnancy and Gestational Diabetes
**Exercise Benefits:**
- Improved glucose control
- May reduce GDM risk if started early
- Post-partum diabetes prevention

**Prescription Modifications:**
- Avoid supine position after first trimester
- Monitor for hypoglycemia
- Appropriate intensity adjustments

## Future Directions

### Artificial Pancreas Optimization
- Exercise-specific algorithms
- Real-time activity detection
- Predictive glucose management
- Integration with nutrition tracking

### Personalized Medicine Implementation
- Genetic risk stratification
- Individual response profiling
- Tailored exercise prescriptions
- Biomarker-guided adjustments

### Technology Evolution
- Non-invasive glucose monitoring
- Wearable insulin delivery advances
- AI-driven decision support
- Telemedicine integration for exercise counseling

### Research Priorities
- Long-term outcomes of different exercise modalities
- Optimal timing of exercise relative to meals
- Technology-enhanced adherence strategies
- Health equity in exercise interventions`,
      keyTerms: [
        { term: 'exercise mimetics', definition: 'Pharmacological agents that activate exercise-related pathways (e.g., AMPK) without actual physical activity; research tools' },
        { term: 'insulin on board (IOB)', definition: 'Estimate of active insulin remaining from previous boluses; important for exercise glucose prediction' },
        { term: 'dual-hormone closed-loop', definition: 'Advanced artificial pancreas system delivering both insulin and glucagon based on automated algorithms' },
        { term: 'diabetes remission', definition: 'Return to normal glycemia without diabetes medications; achievable in some T2DM with intensive lifestyle intervention' },
        { term: 'carbohydrate periodization', definition: 'Strategic manipulation of carbohydrate intake around training for performance and metabolic adaptation' },
      ],
      clinicalNotes: `Elite-level considerations:
1. Type 1 diabetes athletes can compete at highest levels with proper management and support
2. CGM is essential for serious exercise training in insulin-using individuals
3. Dual-hormone closed-loop systems in development may transform exercise management
4. T2DM remission possible with intensive lifestyle intervention but requires sustained commitment
5. Precision medicine approaches (genomics, metabolomics) are emerging but not yet routine
6. Interdisciplinary teams (endocrinology, exercise physiology, nutrition) optimize outcomes`,
    },
  },

  media: [
    {
      id: 'diabetes-exercise-glucose-response',
      type: 'diagram',
      filename: 'diabetes-exercise-glucose.svg',
      title: 'Glucose Response to Exercise in Diabetes',
      description: 'Typical blood glucose patterns during different types of exercise',
    },
  ],

  citations: [
    {
      id: 'ada-exercise-standards',
      type: 'article',
      title: 'Physical Activity/Exercise and Diabetes: A Position Statement of the American Diabetes Association',
      source: 'Diabetes Care',
    },
    {
      id: 'acsm-diabetes',
      type: 'article',
      title: 'Exercise and Type 2 Diabetes: ACSM/ADA Joint Position Statement',
      source: 'Medicine & Science in Sports & Exercise',
    },
  ],

  crossReferences: [
    { targetId: 'sports-med-exercise-prescription-principles', targetType: 'concept', relationship: 'parent', label: 'Exercise Prescription Principles' },
    { targetId: 'sports-med-sports-nutrition-basics', targetType: 'concept', relationship: 'related', label: 'Sports Nutrition Basics' },
    { targetId: 'sports-med-exercise-for-cardiovascular', targetType: 'concept', relationship: 'related', label: 'Exercise for Cardiovascular Disease' },
  ],

  tags: {
    systems: ['endocrine', 'musculoskeletal', 'cardiovascular'],
    topics: ['sports-medicine', 'diabetes', 'exercise-prescription'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default exerciseForDiabetes;
