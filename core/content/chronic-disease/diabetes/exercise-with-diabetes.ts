/**
 * Exercise with Diabetes - Diabetes Management
 *
 * Teaching patients how to safely exercise with diabetes
 * including blood sugar management during physical activity.
 */

import { EducationalContent } from '../../types';

export const EXERCISE_WITH_DIABETES: EducationalContent = {
  id: 'diabetes-exercise-with-diabetes',
  type: 'concept',
  name: 'Exercise with Diabetes',
  alternateNames: ['Physical activity and diabetes', 'Diabetes and exercise', 'Active living with diabetes'],

  levels: {
    1: {
      level: 1,
      summary: 'Exercise is good for everyone with diabetes because it helps lower blood sugar, improve heart health, and make you feel better overall.',
      explanation: `**Why Is Exercise Good for Diabetes?**
Exercise helps your body use sugar better. When you move your muscles, they take sugar from your blood for energy - even without needing as much insulin!

**Benefits of Exercise:**
- Lowers blood sugar
- Helps insulin work better
- Helps you lose weight or maintain a healthy weight
- Strengthens your heart
- Gives you more energy
- Helps you sleep better
- Reduces stress

**How Much Exercise?**
Try to get:
- 30 minutes of moderate activity most days
- This can be walking, swimming, biking, or dancing
- You can break it into 10-minute chunks

**Exercise and Blood Sugar:**

*Before Exercise:*
- Check your blood sugar
- If it's below 100 mg/dL, eat a small snack first
- If it's above 250 mg/dL, check with your doctor

*During Exercise:*
- Carry a fast-acting sugar source (glucose tablets, juice)
- Watch for signs of low blood sugar

*After Exercise:*
- Check your blood sugar again
- Eat a healthy snack if needed

**Signs of Low Blood Sugar During Exercise:**
- Feeling shaky or weak
- Dizziness
- Sweating more than usual
- Confusion
- Hunger

If you feel these symptoms: STOP exercising and eat or drink something with sugar right away.

**Tips for Exercising Safely:**
1. Start slowly and build up
2. Wear comfortable shoes that fit well
3. Drink plenty of water
4. Carry diabetes identification
5. Exercise with a friend when possible
6. Tell someone when and where you are exercising

**Good Activities for People with Diabetes:**
- Walking
- Swimming
- Biking
- Dancing
- Gardening
- Yoga
- Chair exercises`,
      keyTerms: [
        { term: 'moderate activity', definition: 'Exercise that makes you breathe harder but you can still talk' },
        { term: 'hypoglycemia', definition: 'Low blood sugar, which can happen during or after exercise' },
        { term: 'glucose tablets', definition: 'Fast-acting sugar tablets to treat low blood sugar' },
      ],
      analogies: [
        'Exercise is like a key that helps unlock your cells so sugar can get in without needing as much insulin.',
        'Your muscles are like sponges that soak up sugar from your blood when you move them.',
      ],
      examples: [
        'Maria walks for 30 minutes every morning. She checks her blood sugar before walking and carries glucose tablets in her pocket.',
        'Tom swims three times a week. He eats a small snack before swimming if his blood sugar is below 120 mg/dL.',
      ],
    },
    2: {
      level: 2,
      summary: 'Physical activity improves insulin sensitivity and glycemic control in diabetes, but requires planning around blood glucose monitoring, medication timing, and hypoglycemia prevention strategies.',
      explanation: `**Exercise Benefits in Diabetes:**

Regular physical activity provides multiple benefits for people with diabetes:
- Improved insulin sensitivity (lasts 24-72 hours)
- Better blood glucose control
- Cardiovascular risk reduction
- Weight management
- Improved lipid profiles
- Better blood pressure
- Enhanced mood and energy

**Exercise Recommendations:**

*Aerobic Exercise:*
- 150+ minutes per week of moderate intensity, OR
- 75+ minutes per week of vigorous intensity
- Spread over at least 3 days
- No more than 2 consecutive days without exercise

*Resistance Training:*
- 2-3 sessions per week
- All major muscle groups
- 8-10 exercises, 1-3 sets

*Flexibility and Balance:*
- Stretching 2-3 times per week
- Balance exercises for older adults

**Blood Glucose Management During Exercise:**

*Pre-Exercise Blood Glucose Targets:*
| Starting BG | Recommendation |
|-------------|----------------|
| <90 mg/dL | Eat 15-30g carbs before starting |
| 90-150 mg/dL | Safe to start; may need snack for long exercise |
| 150-250 mg/dL | Safe to start |
| >250 mg/dL | Check ketones (Type 1); caution advised |

*Exercise Effects on Blood Glucose:*
| Exercise Type | Typical Effect | Duration of Effect |
|---------------|----------------|-------------------|
| Aerobic (moderate) | BG decreases | During and several hours after |
| Aerobic (vigorous) | BG may rise initially, then fall | Delayed drop possible |
| Resistance | BG may rise or fall | Variable |
| High intensity interval | BG may rise, then fall later | Delayed drop common |

**Hypoglycemia Prevention:**

*Risk Factors:*
- Taking insulin or sulfonylureas
- Exercising during peak insulin action
- Prolonged activity
- Exercising without eating
- Hot weather

*Prevention Strategies:*
- Check blood glucose before, during (long activities), and after
- Carry fast-acting carbohydrates
- Consider reducing insulin dose (discuss with provider)
- Time exercise appropriately relative to meals and medication
- Stay hydrated

**For People on Insulin:**

*Adjustments may include:*
- Reducing mealtime insulin before exercise
- Reducing basal insulin on exercise days
- Eating additional carbohydrates
- Timing exercise after meals

*Post-Exercise Considerations:*
- Blood glucose can drop for up to 24 hours
- Night-time hypoglycemia risk after afternoon/evening exercise
- May need bedtime snack or insulin reduction

**Special Considerations:**

*Foot Care:*
- Inspect feet before and after exercise
- Wear proper footwear
- Avoid barefoot exercise if neuropathy present

*Exercise to Avoid with Certain Complications:*
| Complication | Cautions |
|--------------|----------|
| Retinopathy | Avoid high-impact, straining |
| Neuropathy | Foot protection, low-impact |
| Nephropathy | Avoid very intense exercise |
| Heart disease | Medical clearance recommended |`,
      keyTerms: [
        { term: 'insulin sensitivity', definition: 'How well your body responds to insulin; exercise improves this' },
        { term: 'delayed hypoglycemia', definition: 'Low blood sugar occurring hours after exercise, including overnight' },
        { term: 'moderate intensity', definition: 'Exercise at 50-70% of maximum heart rate; can talk but not sing' },
        { term: 'vigorous intensity', definition: 'Exercise at 70-85% of maximum heart rate; can only say a few words' },
      ],
      analogies: [
        'Exercise is like turning up the sensitivity dial on your insulin - it makes insulin work better, so your body needs less of it.',
      ],
    },
    3: {
      level: 3,
      summary: 'Exercise physiology in diabetes involves complex interactions between glucose uptake, insulin action, and counterregulatory hormones, requiring systematic approaches to medication adjustment and glycemic management.',
      explanation: `**Exercise Physiology in Diabetes:**

Physical activity affects glucose homeostasis through multiple mechanisms that differ between diabetes types and vary with exercise characteristics.

**Glucose Metabolism During Exercise:**

*Normal Physiology:*
\`\`\`
Exercise Onset
      ↓
Muscle Glucose Uptake ↑ (GLUT4 translocation)
      ↓
Liver Glucose Production ↑ (gluconeogenesis, glycogenolysis)
      ↓
Insulin Secretion ↓
      ↓
Counterregulatory Hormones ↑
      ↓
Maintained Blood Glucose
\`\`\`

*Type 1 Diabetes:*
- Cannot reduce endogenous insulin
- Relative hyperinsulinemia suppresses hepatic glucose output
- Hypoglycemia risk during aerobic exercise
- Exogenous insulin management critical

*Type 2 Diabetes:*
- Improved insulin sensitivity is primary benefit
- Hypoglycemia risk mainly with insulin/sulfonylureas
- Exercise complements medication therapy

**Exercise Modality Effects:**

*Aerobic Exercise:*
- Increased muscle glucose uptake
- Reduced blood glucose during exercise
- Improved insulin sensitivity for 24-72 hours
- Reduced A1C with regular training

*Resistance Exercise:*
- Acute: May increase blood glucose (catecholamine release)
- Chronic: Improved insulin sensitivity
- Increased muscle mass enhances glucose disposal
- Additive benefits with aerobic exercise

*High-Intensity Interval Training (HIIT):*
- Acute catecholamine release may raise glucose
- Delayed hypoglycemia hours later
- Time-efficient glycemic benefits
- May be preferred by some patients

**Medication-Exercise Interactions:**

*Insulin Adjustments:*
| Exercise Timing | Adjustment Strategy |
|-----------------|---------------------|
| Within 2 hrs of meal | Reduce meal bolus 25-75% |
| Fasting exercise | Reduce basal or no bolus |
| Prolonged exercise | Reduce basal, consume carbs hourly |
| Intense exercise | May need less reduction (glucose rise) |

*Oral Medication Considerations:*
| Drug Class | Exercise Risk | Management |
|------------|---------------|------------|
| Sulfonylureas | Hypoglycemia | Pre-exercise carbs, monitor |
| Metformin | Low risk | No specific adjustment |
| SGLT2 inhibitors | Dehydration, rare ketoacidosis | Hydration, caution with extreme exercise |
| GLP-1 RA | Low risk | No specific adjustment |

**Continuous Glucose Monitoring (CGM) in Exercise:**

*Benefits:*
- Real-time glucose tracking
- Trend arrows guide decisions
- Pattern identification
- Reduced hypoglycemia fear

*Limitations:*
- Lag time during rapid changes
- Sensor accuracy during exercise
- Compression artifacts

**Exercise Prescription Components:**

*FITT Principle:*
- **F**requency: Most days (aerobic), 2-3 days (resistance)
- **I**ntensity: Moderate to vigorous
- **T**ime: 150+ minutes aerobic/week, resistance per guidelines
- **T**ype: Variety, patient preference

*Progression:*
- Start low, progress gradually
- Increase duration before intensity
- Monitor glycemic response
- Adjust medications as fitness improves

**Complications and Exercise:**

*Pre-Exercise Screening:*
| Complication | Assessment | Exercise Modification |
|--------------|------------|----------------------|
| Retinopathy (proliferative) | Ophthalmology clearance | Avoid Valsalva, jarring |
| Autonomic neuropathy | HR response testing | Monitor exertion by RPE |
| Peripheral neuropathy | Foot exam | Non-weight-bearing options |
| Nephropathy | Albuminuria level | Avoid extreme intensity |
| Cardiovascular disease | Cardiology clearance | Cardiac rehabilitation |`,
      keyTerms: [
        { term: 'GLUT4', definition: 'Glucose transporter that moves to cell surface during exercise, enabling glucose uptake' },
        { term: 'counterregulatory hormones', definition: 'Hormones (glucagon, epinephrine, cortisol, growth hormone) that raise blood glucose' },
        { term: 'glycogenolysis', definition: 'Breakdown of glycogen to glucose in liver and muscle' },
        { term: 'FITT principle', definition: 'Framework for exercise prescription: Frequency, Intensity, Time, Type' },
        { term: 'rate of perceived exertion (RPE)', definition: 'Subjective scale of exercise intensity useful when heart rate response is abnormal' },
      ],
      clinicalNotes: 'Insulin dose reductions of 25-75% may be needed for exercise. CGM improves exercise safety but has lag during rapid glucose changes. Autonomic neuropathy impairs heart rate response - use RPE instead. Clear patients with proliferative retinopathy before starting exercise programs.',
    },
    4: {
      level: 4,
      summary: 'Advanced exercise management in diabetes integrates molecular mechanisms of exercise-induced glucose uptake, pharmacokinetic considerations for medication adjustment, and technology-enabled monitoring for personalized activity recommendations.',
      explanation: `**Molecular Mechanisms of Exercise:**

*Contraction-Stimulated Glucose Uptake:*
\`\`\`
Muscle Contraction
        ↓
AMP/ATP Ratio ↑ → AMPK Activation
        ↓
Ca²⁺ Release → CaMK Activation
        ↓
GLUT4 Translocation to Sarcolemma
        ↓
Insulin-Independent Glucose Uptake
\`\`\`

*Post-Exercise Insulin Sensitivity:*
- AMPK-mediated effects persist
- GLUT4 transcription upregulated
- Enhanced insulin signaling pathways
- Muscle glycogen resynthesis drives glucose uptake

**Exercise Modality Physiology:**

*Aerobic vs. Resistance Comparison:*
| Mechanism | Aerobic | Resistance |
|-----------|---------|------------|
| Acute glucose uptake | High | Moderate |
| Catecholamine release | Moderate | High |
| Hepatic glucose output | Matched to uptake | May exceed uptake |
| Post-exercise insulin sensitivity | 24-72 hours | 24-48 hours |
| Muscle hypertrophy | Minimal | Significant |

*High-Intensity Interval Training (HIIT):*
- Supramaximal catecholamine release
- Transient hyperglycemia possible
- Enhanced mitochondrial function
- Greater time efficiency vs. continuous

**Pharmacokinetic Considerations:**

*Insulin and Exercise:*
\`\`\`
Exercise Effects on Insulin Pharmacokinetics:
- Increased blood flow to injection site
- Faster insulin absorption
- Higher peak concentration
- Shorter duration of action

Implications:
- Inject away from exercising limbs
- Consider pump basal reduction
- Timing of bolus relative to exercise
\`\`\`

*Medication-Specific Exercise Guidance:*
| Medication | Mechanism | Exercise Interaction |
|------------|-----------|---------------------|
| Rapid insulin | Exogenous | Reduce dose, timing critical |
| Basal insulin | Exogenous | Consider dose reduction on active days |
| Sulfonylureas | Insulin secretagogue | Hypoglycemia risk persists |
| SGLT2 inhibitors | Glucose excretion | Hydration critical, euglycemic DKA risk |
| GLP-1 RA | Glucose-dependent | Minimal adjustment needed |

**Technology Integration:**

*CGM for Exercise:*
- Pre-exercise: Assess glucose and trend
- During: Monitor for falling glucose
- Post-exercise: Delayed hypoglycemia detection

*Decision Algorithms:*
\`\`\`
Pre-Exercise CGM Algorithm:
IF glucose <90 AND trend ↓↓
   → Consume 30-45g carbs, delay exercise
IF glucose <90 AND trend stable/↑
   → Consume 15-30g carbs
IF glucose 90-150
   → May exercise; consider 15g carbs for >30min
IF glucose 150-250
   → May exercise without carbs
IF glucose >250 AND ketones negative
   → Light exercise may be OK
IF glucose >250 AND ketones positive (T1D)
   → Do not exercise; treat ketones
\`\`\`

*Automated Insulin Delivery:*
- Exercise modes (temporary targets)
- Reduced insulin delivery during activity
- Post-exercise adjustments
- Learning algorithms

**Exercise Prescription Precision:**

*Individualized Response:*
- Baseline fitness assessment
- Glucose monitoring during different activities
- Pattern identification
- Personalized recommendations

*Progressive Training Effects:*
- Improved glycemic response over time
- May need medication reduction
- Enhanced exercise capacity
- Reduced hypoglycemia frequency

**Special Populations:**

*Elderly with Diabetes:*
- Fall risk assessment
- Functional exercises
- Shorter sessions if needed
- Hypoglycemia prevention emphasis

*Pregnancy:*
- Modified intensity targets
- Avoid supine exercise late pregnancy
- Blood glucose monitoring
- Contraindications awareness

**Psychological Aspects:**

*Exercise Barriers:*
- Fear of hypoglycemia
- Past negative experiences
- Complexity of management
- Complication concerns

*Behavioral Strategies:*
- Gradual exposure
- Self-efficacy building
- Problem-solving training
- Social support integration`,
      keyTerms: [
        { term: 'AMPK', definition: 'AMP-activated protein kinase; master metabolic regulator activated by exercise' },
        { term: 'contraction-stimulated glucose uptake', definition: 'Insulin-independent glucose transport into muscle during exercise' },
        { term: 'euglycemic diabetic ketoacidosis', definition: 'DKA occurring with normal or near-normal glucose, can occur with SGLT2i during exercise' },
        { term: 'temporary basal rate', definition: 'Insulin pump feature allowing reduced basal delivery during exercise' },
        { term: 'exercise mode', definition: 'AID system feature that raises glucose target to reduce insulin delivery during activity' },
      ],
      clinicalNotes: 'AMPK activation provides insulin-independent glucose uptake pathway preserved even in diabetes. Automated insulin delivery systems have exercise features but may not fully prevent hypoglycemia. SGLT2 inhibitors require hydration attention and ketone awareness during intense exercise. Catecholamine response in HIIT may cause acute hyperglycemia followed by later hypoglycemia.',
    },
    5: {
      level: 5,
      summary: 'Contemporary exercise science in diabetes integrates molecular exercise physiology, precision monitoring, artificial intelligence-driven decision support, and behavioral science to optimize individualized physical activity recommendations and outcomes.',
      explanation: `**Exercise at the Molecular Level:**

*Skeletal Muscle as Metabolic Organ:*
\`\`\`
Exercise-Induced Myokine Release:
- IL-6 (acute phase)
- Irisin (browning of white fat)
- FGF21 (metabolic regulation)
- BDNF (cognitive benefits)
- Myostatin inhibition (muscle growth)

Metabolic Effects:
- Enhanced mitochondrial biogenesis (PGC-1α)
- Improved glucose transporter expression
- Increased fatty acid oxidation
- Anti-inflammatory milieu
\`\`\`

*Molecular Mechanisms of Improved Insulin Sensitivity:*
| Pathway | Exercise Effect | Duration |
|---------|-----------------|----------|
| IRS-1/PI3K/Akt | Enhanced signaling | Days |
| GLUT4 expression | Upregulated | Days-weeks |
| Mitochondrial density | Increased | Weeks |
| Intramyocellular lipids | Improved handling | Weeks |
| Inflammation markers | Reduced | Days-weeks |

**Precision Exercise Medicine:**

*Individual Response Phenotyping:*
- CGM response to standardized exercise
- Metabolic flexibility assessment
- Cardiovascular fitness metrics
- Genetic determinants of response

*Exercise Response Variability:*
\`\`\`
Factors Affecting Individual Response:
- Genetics (~50% of variability)
- Training status
- Diabetes duration/phenotype
- Medication profile
- Chronobiology
- Nutrition status
- Sleep quality
\`\`\`

**Artificial Intelligence Applications:**

*Predictive Modeling:*
- Exercise-glucose response prediction
- Personalized carbohydrate recommendations
- Optimal exercise timing
- Hypoglycemia risk assessment

*Machine Learning Approaches:*
| Model Type | Application |
|------------|-------------|
| LSTM/RNN | Glucose trajectory prediction during exercise |
| Random Forest | Hypoglycemia risk classification |
| Reinforcement Learning | Adaptive insulin dosing |
| Ensemble Methods | Multi-factor decision support |

*Decision Support Integration:*
\`\`\`
Digital Twin Concept:
Physical Activity Plan
        ↓
Glucose Prediction Model (personal)
        ↓
Carbohydrate/Insulin Recommendation
        ↓
Real-time Adjustment
        ↓
Outcome Learning
        ↓
Model Refinement
\`\`\`

**Advanced Technology Integration:**

*Closed-Loop Systems and Exercise:*
- Current: User-initiated exercise modes
- Emerging: Automated exercise detection
- Future: Predictive algorithm adjustment

*Wearable Integration:*
- Heart rate
- Accelerometry
- Skin temperature
- Galvanic skin response
- GPS/activity type detection

**Chronobiology and Exercise:**

*Circadian Considerations:*
| Time | Physiological State | Exercise Implications |
|------|---------------------|----------------------|
| Morning | Insulin resistant, cortisol high | May have higher glucose |
| Afternoon | Peak performance capacity | Best glycemic response |
| Evening | Good insulin sensitivity | Risk of overnight hypo |

*Chrono-Exercise Prescription:*
- Individualized timing recommendations
- Shift worker considerations
- Meal-exercise coordination

**Population Health Approaches:**

*Implementation Strategies:*
- Community-based programs
- Digital interventions
- Health coach integration
- Peer support models

*Equity Considerations:*
- Access to safe exercise environments
- Technology disparities
- Cultural preferences
- Economic barriers

**Research Frontiers:**

*Current Priorities:*
- Exercise non-responders phenotyping
- Optimal exercise for cardiovascular benefit
- HIIT vs. continuous training
- Combined aerobic/resistance protocols
- Digital intervention efficacy

*Emerging Areas:*
- Exerkines as therapeutic targets
- Personalized exercise prescription algorithms
- Virtual reality exercise experiences
- Real-world evidence generation
- Exercise as medicine prescriptions`,
      keyTerms: [
        { term: 'myokine', definition: 'Cytokine produced by muscle tissue during contraction with systemic metabolic effects' },
        { term: 'PGC-1α', definition: 'Master regulator of mitochondrial biogenesis upregulated by exercise' },
        { term: 'metabolic flexibility', definition: 'Ability to switch between fuel substrates based on availability and demand' },
        { term: 'digital twin', definition: 'Computational model of individual physiology enabling personalized simulation and prediction' },
        { term: 'exercise non-responder', definition: 'Individual who does not show expected improvements from exercise training' },
        { term: 'exerkine', definition: 'Exercise-induced signaling molecule (myokine, adipokine, hepatokine) with systemic effects' },
      ],
      clinicalNotes: 'Exercise non-response may be partially genetically determined but can be overcome with alternative protocols. AI-driven decision support for exercise is emerging but requires validation. Chronobiology suggests afternoon may be optimal but practical considerations often override. Myokine research is identifying potential pharmacological targets for exercise mimetics.',
    },
  },

  media: [
    {
      id: 'exercise-blood-sugar-guide',
      type: 'diagram',
      filename: 'exercise-blood-sugar-guidelines.svg',
      title: 'Blood Sugar Guidelines for Exercise',
      description: 'Visual guide for pre-exercise blood sugar targets and actions',
    },
    {
      id: 'exercise-safety-checklist',
      type: 'diagram',
      filename: 'diabetes-exercise-safety.pdf',
      title: 'Exercise Safety Checklist',
      description: 'Printable checklist for safe exercise with diabetes',
    },
  ],

  citations: [
    {
      id: 'ada-exercise',
      type: 'article',
      title: 'Physical Activity/Exercise and Diabetes: Standards of Care',
      source: 'Diabetes Care, American Diabetes Association',
    },
    {
      id: 'acsm-diabetes',
      type: 'article',
      title: 'Exercise and Type 2 Diabetes: ACSM and ADA Joint Position Statement',
      source: 'Medicine & Science in Sports & Exercise',
    },
  ],

  crossReferences: [
    { targetId: 'diabetes-blood-sugar-monitoring', targetType: 'topic', relationship: 'related', label: 'Blood Sugar Monitoring' },
    { targetId: 'diabetes-diet-carb-counting', targetType: 'topic', relationship: 'related', label: 'Diet and Carb Counting' },
    { targetId: 'diabetes-complication-prevention', targetType: 'topic', relationship: 'related', label: 'Complication Prevention' },
  ],

  tags: {
    systems: ['endocrine', 'musculoskeletal', 'cardiovascular'],
    topics: ['diabetes', 'exercise', 'self-management'],
    keywords: ['exercise with diabetes', 'physical activity', 'hypoglycemia prevention', 'active living'],
    clinicalRelevance: 'high',
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
