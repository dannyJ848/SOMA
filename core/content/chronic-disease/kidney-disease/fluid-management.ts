/**
 * Fluid Management - CKD Fluid Restriction and Monitoring
 */

import { EducationalContent } from '../../types';

export const FLUID_MANAGEMENT: EducationalContent = {
  id: 'chronic-kidney-fluid-management',
  type: 'concept',
  name: 'Fluid Management in Kidney Disease',
  nameEs: 'Manejo de Líquidos en la Enfermedad Renal',
  alternateNames: ['Fluid Restriction', 'Fluid Balance', 'Hydration in CKD', 'Fluid Monitoring'],

  levels: {
    1: {
      level: 1,
      summary: 'Fluid management in kidney disease means balancing how much liquid you drink with what your body can handle. Some people need to limit fluids while others should drink normally.',
      explanation: `**Why Fluid Management Matters**

When kidneys do not work well, they may not remove extra fluid from your body. This can cause:
- Swelling in legs and feet
- Shortness of breath
- High blood pressure
- Weight gain
- Heart strain

**Who Needs to Limit Fluids?**

Not everyone with kidney disease needs fluid restriction. Your doctor will tell you if you need to limit fluids. Common reasons include:
- Advanced kidney disease (Stage 4-5)
- On dialysis treatment
- Heart failure
- Low sodium levels
- Swelling that does not go away

**How Much Fluid Is Right for You?**

*If you DO need fluid restriction:*
- Common limit: 4-6 cups (1-1.5 liters) per day
- Includes all liquids: water, coffee, tea, juice, soup, ice cream
- Your doctor will give you a specific amount

*If you do NOT need restriction:*
- Drink when thirsty
- Aim for pale yellow urine
- Avoid excessive intake
- Tell your doctor if you notice swelling

**What Counts as Fluid?**

Everything that melts at room temperature:
---
Water and ice
Coffee and tea
Juice and soda
Milk
Soup and broth
Ice cream and popsicles
Gelatin
---

**Tips for Managing Thirst:**

1. **Sip, do not gulp** - Take small amounts throughout the day
2. **Use small cups** - Makes portions look larger
3. **Rinse your mouth** - With water, then spit it out
4. **Suck on ice** - Ice lasts longer than liquid
5. **Chew sugar-free gum** - Helps with dry mouth
6. **Limit salty foods** - Salt makes you thirsty
7. **Stay cool** - Heat increases thirst

**Warning Signs to Tell Your Doctor:**

Call your doctor if you notice:
- Sudden weight gain (more than 2-3 pounds in a day)
- Swelling getting worse
- Trouble breathing, especially when lying down
- Feeling very short of breath
- Shoes or rings feeling tight

**Tracking Your Fluid:**

*Daily Weight Method:*
- Weigh yourself at the same time every day
- Use the same scale
- Wear similar clothing
- Record the weight
- Tell your doctor about sudden gains

*Fluid Diary:*
- Keep track of what you drink
- Count soups and ice cream too
- Helps you stay within your limit

**Remember:**
- Follow your doctor's specific advice
- Do not restrict fluids unless told to
- Do not overdrink either
- When in doubt, ask your healthcare team`,
      keyTerms: [
        { term: 'fluid restriction', definition: 'Limiting the amount of liquids you drink each day' },
        { term: 'edema', definition: 'Swelling caused by extra fluid in body tissues' },
        { term: 'dialysis', definition: 'A treatment that filters blood when kidneys fail' },
        { term: 'interdialytic weight gain', definition: 'Weight gained between dialysis treatments from fluid' },
      ],
      analogies: [
        'Think of your body like a bathtub with a slow drain. If water keeps coming in faster than it can drain out, the tub will overflow. Fluid restriction is like turning down the faucet to match the slow drain.',
        'Your heart is like a pump. When there is extra fluid, the pump has to work harder, like trying to push more water through a hose than it can handle.',
      ],
      examples: [
        'Robert was told to limit fluids to 4 cups daily after his ankles started swelling. He froze grapes to suck on when thirsty and found it helped satisfy his thirst without using his fluid allowance.',
        'Maria tracks her weight every morning. When it jumps up 3 pounds overnight, she knows she needs to be more careful with her fluid intake and calls her nurse.',
      ],
    },
    2: {
      level: 2,
      summary: 'Fluid management in CKD involves individualized assessment of volume status, with restriction typically needed in advanced disease, dialysis, or heart failure.',
      explanation: `**Physiology of Fluid Balance**

Normal kidneys regulate fluid through:
- Glomerular filtration (180 L/day)
- Tubular reabsorption (178.5 L/day)
- Urine output (1.5 L/day)
- Hormonal regulation (ADH, aldosterone)

In CKD, these mechanisms fail, leading to:
- Sodium and water retention
- Volume expansion
- Hypertension
- Edema formation
- Pulmonary congestion

**Indications for Fluid Restriction:**

---
Advanced CKD (Stages 4-5):
- Oliguria (urine less than 400 mL/day)
- Symptomatic fluid overload
- Refractory hypertension

Dialysis Patients:
- Hemodialysis: Interdialytic weight gain management
- Peritoneal dialysis: UF failure management

Cardiac Involvement:
- Heart failure
- Cardiorenal syndrome
- Pulmonary edema

Electrolyte Disorders:
- Hyponatremia (dilutional)
- Symptomatic volume overload
---

**Determining Fluid Allowance:**

*General Principles:*
- Urine output + 500-750 mL (insensible losses)
- Or: 1,000-1,500 mL/day for anuric patients
- Individualize based on:
  - Residual urine output
  - Weight trends
  - Blood pressure
  - Comorbidities

*For Dialysis Patients:*
- Target IDWG 1-2 kg between treatments
- Greater than 3 kg associated with:
  - Hypotension during dialysis
  - Cardiovascular events
  - Increased mortality

**Sources of Fluid Intake:**

*Obvious Sources:*
- Water, beverages
- Ice

*Hidden Sources:*
- Soups, broths
- Ice cream, sherbet
- Jello
- Fruits (watermelon, oranges)
- Foods cooked in liquid

**Monitoring Fluid Status:**

*Clinical Assessment:*
- Daily weights (same time, same scale, same clothes)
- Blood pressure trends
- Edema examination
- Jugular venous pressure
- Lung auscultation

*Biomarkers:*
- BNP/NT-proBNP (volume status)
- Serum sodium (dilutional vs true)
- Creatinine trends

**Thirst Management Strategies:**

*Behavioral:*
- Small, frequent sips vs large gulps
- Use small cups (creates illusion of more)
- Cold beverages more satisfying
- Limit sodium to reduce thirst

*Pharmacologic:*
- Ice chips (reduces volume for same cooling)
- Sugar-free candy or gum
- Mouth moisturizers

*Environmental:*
- Stay cool
- Humidify air
- Avoid dry environments

**Complications of Fluid Overload:**

*Cardiac:*
- Heart failure exacerbation
- Hypertension
- Arrhythmias
- Cardiac remodeling

*Pulmonary:*
- Pulmonary edema
- Respiratory failure
- Reduced oxygenation

*Other:*
- Extremity edema
- Skin breakdown
- Delayed wound healing

**Complications of Excessive Restriction:**

- Hypovolemia
- Hypotension
- Acute kidney injury
- Thrombosis risk
- Patient non-adherence`,
      keyTerms: [
        { term: 'oliguria', definition: 'Low urine output, typically less than 400 mL per day' },
        { term: 'interdialytic weight gain', definition: 'Weight gained between dialysis sessions, primarily from fluid' },
        { term: 'volume overload', definition: 'Excess fluid in the body causing edema and congestion' },
        { term: 'insensible losses', definition: 'Fluid lost through breathing and skin, about 500-750 mL/day' },
        { term: 'cardiorenal syndrome', definition: 'Heart and kidney dysfunction that affects each other' },
      ],
      analogies: [
        'The body is like a water balloon. In fluid overload, the balloon is overfilled and stretched. In dehydration, it is deflated. The goal is to find the right fullness.',
        'Dialysis patients can think of fluid like luggage for a trip - you can only carry so much comfortably. Going over your limit makes the journey (dialysis) much harder.',
      ],
      examples: [
        'A hemodialysis patient with 4 kg interdialytic weight gain developed hypotension during treatment. After limiting fluid to 1 liter daily, weight gains decreased to 1.5 kg and treatments were better tolerated.',
        'A patient with Stage 5 CKD but good urine output (1.5 L/day) did not need fluid restriction, while another with anuric ESRD required strict 1 liter/day limit.',
      ],
    },
    3: {
      level: 3,
      summary: 'Evidence-based fluid management integrates clinical assessment, biomarker interpretation, and individualized prescription to optimize volume status in CKD while avoiding both overload and depletion.',
      explanation: `**Pathophysiology of Sodium and Water Handling in CKD**

*Mechanisms of Sodium Retention:*
---
Decreased GFR
    ↓
Impaired Natriuresis
    ↓
Extracellular Volume Expansion
    ↓
Hypertension + Edema
    ↓
Cardiac Remodelling + HF
---

*Neurohormonal Adaptations:*
- RAAS activation (maladaptive)
- Sympathetic nervous system activation
- ADH release
- Decreased natriuretic peptides effectiveness

**Clinical Assessment of Volume Status:**

*Dynamic Assessment:*
- Postural vital signs (orthostatic hypotension suggests hypovolemia)
- Jugular venous pressure (JVP)
- Hepatojugular reflux
- Lung crackles (pulmonary edema)
- Peripheral edema (pitting vs non-pitting)

*Objective Measures:*
- Daily weights (most reliable home monitoring)
- Bioimpedance spectroscopy (body composition)
- Inferior vena cava diameter (ultrasound)
- Chest X-ray (pulmonary congestion)

**Fluid Restriction Prescription:**

*Individualization Factors:*
- Residual renal function (urine output)
- Dialysis modality and schedule
- Cardiac function
- Sodium intake
- Climate/environment
- Activity level

*Typical Prescriptions:*
---
Stage 4-5 CKD, oliguric: 1,000-1,500 mL/day + urine output
Hemodialysis: 750-1,000 mL/day (urine output dependent)
Anuric dialysis: 1,000 mL/day (insensible losses only)
Peritoneal dialysis: Individualized based on UF
---

**Sodium Management:**

*Relationship to Fluid:*
- Sodium drives thirst
- Sodium restriction enables fluid restriction
- Typical target: Less than 2 g/day sodium

*Implementation:*
- Avoid added salt
- Limit processed foods
- Read labels carefully
- "No salt added" products

**Dialysis-Specific Considerations:**

*Hemodialysis:*
- Target IDWG 1-2 kg (2-4 lbs) between treatments
- Greater than 4% body weight gain problematic
- Ultrafiltration rate less than 10-13 mL/kg/hour
- Higher UF rates associated with:
  - Intradialytic hypotension
  - Myocardial stunning
  - Access complications
  - Mortality

*Peritoneal Dialysis:*
- Monitor UF volume
- Assess membrane function (PET)
- High transporters may need more frequent exchanges
- Fluid restriction if UF failure

**Biomarkers in Volume Assessment:**

*BNP/NT-proBNP:*
- Elevated in fluid overload
- Also elevated in cardiac dysfunction
- Trend more valuable than single value
- Marked elevation predicts CV events

*Serum Sodium:*
- Dilutional hyponatremia indicates excess water
- Corrects with fluid restriction
- True hyponatremia requires different approach

**Management Strategies:**

*For Volume Overload:*
1. Sodium restriction (foundation)
2. Diuretics (if residual function)
3. Fluid restriction (if above insufficient)
4. Optimize dialysis (dry weight achievement)
5. Treat underlying cardiac disease

*For Intradialytic Hypotension:*
- Reduce target weight gradually
- Cool dialysate (35.5-36.0 C)
- Sodium modeling
- Avoid food during dialysis
- Midodrine if persistent

**Patient Education Components:**

*Knowledge:*
- Why restriction is needed
- What counts as fluid
- How to measure and track

*Skills:*
- Measuring fluids
- Reading labels
- Thirst management techniques

*Self-Monitoring:*
- Daily weights
- Symptom recognition
- When to call provider

**Quality Metrics:**

*Process Measures:*
- Patient education documentation
- Individualized fluid prescription
- IDWG monitoring (dialysis)

*Outcome Measures:*
- IDWG within target
- BP control
- Hospitalization for fluid overload
- Patient-reported thirst/dryness`,
      keyTerms: [
        { term: 'natriuresis', definition: 'Excretion of sodium in urine' },
        { term: 'bioimpedance spectroscopy', definition: 'Non-invasive method to measure body fluid compartments' },
        { term: 'ultrafiltration rate', definition: 'Rate of fluid removal during dialysis' },
        { term: 'myocardial stunning', definition: 'Temporary cardiac dysfunction from stress, such as rapid fluid removal' },
        { term: 'PET', definition: 'Peritoneal Equilibration Test; assesses peritoneal membrane function' },
      ],
      clinicalNotes: 'Daily weights are the most reliable indicator of fluid status in outpatients. In hemodialysis, aim for IDWG less than 4% of body weight. Ultrafiltration rate greater than 10-13 mL/kg/hour increases mortality risk. Bioimpedance may help guide dry weight but clinical assessment remains primary.',
    },
    4: {
      level: 4,
      summary: 'Advanced fluid management employs integrated physiologic monitoring, precision medicine approaches, and multidisciplinary care to optimize volume status while minimizing cardiovascular risk in CKD.',
      explanation: `**Integrated Hemodynamic Monitoring**

*Bioimpedance Spectroscopy:*
- Measures resistance and reactance to electrical current
- Determines extracellular vs intracellular fluid
- Guides dry weight adjustment in dialysis
- Reduces intradialytic hypotension
- Evidence supports improved BP control

*Crit-Line Monitoring:*
- Optical measurement of hematocrit changes
- Real-time blood volume monitoring during dialysis
- Alerts to excessive fluid removal
- Enables individualized UF profiles

*Blood Volume Variability:*
- Relative blood volume (RBV) monitoring
- Crit-Line or analogous technologies
- Target: Less than 10-12% reduction
- Reduces hypotensive episodes

**Cardiovascular Consequences of Volume Management:**

*Chronic Volume Overload:*
- Left ventricular hypertrophy
- Arterial stiffness
- Endothelial dysfunction
- Inflammation
- Accelerated atherosclerosis

*Aggressive Ultrafiltration:*
- Myocardial stunning
- Regional wall motion abnormalities
- Repetitive ischemic injury
- Systolic dysfunction over time

*Optimal Strategy:*
- Gradual achievement of dry weight
- Avoid excessive IDWG
- Minimize rapid fluid shifts
- Consider more frequent dialysis

**Refractory Fluid Overload:**

*Evaluation:*
- Dietary sodium assessment (24-hour urine Na)
- Medication adherence
- Adequacy of dialysis (Kt/V)
- Access function
- Cardiac function (echo)

*Interventions:*
- Intensify sodium restriction
- Increase dialysis frequency/duration
- Consider peritoneal dialysis
- Ultrafiltration alone sessions
- Cardiac optimization

**Advanced Thirst and Adherence:**

*Pathophysiology of Thirst:*
- Osmotic (hypernatremia)
- Hypovolemic (baroreceptor-mediated)
- Non-osmotic (psychogenic)

*Behavioral Interventions:*
- Cognitive-behavioral approaches
- Mindfulness techniques
- Habit modification
- Environmental restructuring

*Pharmacologic Adjuncts:*
- Limited evidence for thirst suppressants
- Some data on naltrexone
- Focus remains on sodium restriction

**Dialysis Modification Strategies:**

*Extended/Frequent Dialysis:*
- More gradual fluid removal
- Better volume control
- Improved cardiovascular outcomes
- Home hemodialysis facilitates this

*Nocturnal Hemodialysis:*
- Slower UF over 6-8 hours
- Minimal hemodynamic stress
- Liberalizes diet and fluid
- Superior volume control

*Peritoneal Dialysis Optimization:*
- icodextrin for UF (long dwells)
- Biocompatible solutions
- Automated PD for frequent exchanges
- Adequate prescription for UF

**Biomarker-Guided Management:**

*Natriuretic Peptides:*
- BNP and NT-proBNP elevation
- Reflect cardiac wall stress
- Useful for trend monitoring
- Elevated in both cardiac and volume overload
- High levels predict mortality

*Novel Biomarkers:*
- Adrenomedullin (volume status)
- Copeptin (vasopressin surrogate)
- Galectin-3 (fibrosis)
- ST2 (cardiac stress)

**Team-Based Care:**

*Multidisciplinary Approach:*
- Nephrologist: Medical management
- Renal dietitian: Sodium/fluid counseling
- Dialysis nurse: Technique, monitoring
- Social worker: Barriers to adherence
- Patient: Self-monitoring, engagement

*Shared Decision-Making:*
- Patient preferences
- Lifestyle impact
- Trade-offs discussed
- Realistic goal setting

**Research Frontiers:**

*Implantable Sensors:*
- Continuous volume monitoring
- Real-time feedback
- Early warning systems

*Machine Learning:*
- Predict IDWG from patterns
- Individualize prescriptions
- Optimize treatment parameters

*Wearable Technology:*
- Continuous monitoring
- Bioimpedance wearables
- Blood pressure trends`,
      keyTerms: [
        { term: 'bioimpedance', definition: 'Measurement of electrical resistance through body tissues to estimate fluid compartments' },
        { term: 'Crit-Line', definition: 'Device that monitors blood volume changes during hemodialysis' },
        { term: 'relative blood volume', definition: 'Percentage of blood volume remaining during ultrafiltration' },
        { term: 'icodextrin', definition: 'Glucose polymer used in peritoneal dialysis for ultrafiltration' },
        { term: 'copeptin', definition: 'Surrogate marker for vasopressin; reflects volume status' },
      ],
      clinicalNotes: 'Bioimpedance-guided dry weight reduction improves BP control and reduces LVH. Extended or frequent dialysis offers superior volume management. Balance cardiovascular benefits of euvolemia against risks of aggressive UF. Patient adherence is the primary determinant of success.',
    },
    5: {
      level: 5,
      summary: 'Precision fluid management in nephrology integrates advanced monitoring technologies, artificial intelligence, and personalized physiologic profiling to optimize volume status while preserving cardiovascular function.',
      explanation: `**Precision Volume Management**

*Individualized Hemodynamic Profiling:*
---
Baseline Assessment:
- Body composition analysis
- Cardiac function
- Vascular stiffness
- Autonomic function
    ↓
Personalized Dry Weight Protocol
    ↓
Dynamic Monitoring + Adjustment
    ↓
Outcome Optimization
---

**Advanced Monitoring Technologies:**

*Multi-Frequency Bioimpedance:*
- Segmental analysis (limbs, trunk)
- Overhydration indices
- Normalized to population norms
- Guides incremental UF targets

*Wearable Sensors:*
- Continuous blood pressure monitoring
- Activity and position tracking
- Nocturnal BP patterns
- Fluid status algorithms

*Implantable Devices:*
- Pulmonary artery pressure sensors
- Inferior vena cava monitors
- Early clinical trials
- Promise for heart failure/CKD

**Artificial Intelligence Applications:**

*Predictive Modeling:*

| Application           | Input Features              | Output                    |
|-----------------------|-----------------------------|---------------------------|
| IDWG prediction       | Prior treatments, diet, labs| Predicted weight gain     |
| Hypotension risk      | Vitals, UF rate, RBV        | Real-time risk score      |
| Optimal dry weight    | BIS, BP, cardiac history    | Recommended target weight |
| Adherence prediction  | Patterns, demographics      | Risk stratification       |

*Machine Learning for Dry Weight:*
- Pattern recognition in hemodynamic data
- Integration of multiple biomarkers
- Continuous learning from outcomes
- Explainable AI for clinical trust

**Genomic and Pharmacogenomic Factors:**:

*Thirst Regulation:*
- Genetic variants in thirst mechanisms
- Vasopressin receptor polymorphisms
- Sodium appetite regulation
- Personalized thirst thresholds

*Salt Sensitivity:*
- ACE I/D polymorphism
- Alpha-adducin variants
- Individualized sodium targets
- Pharmacogenomic-guided therapy

**Advanced Dialysis Strategies:**

*Physiologic Dialysis:*
- Automated feedback systems
- RBV-guided UF rate adjustment
- Thermal balance optimization
- Sodium profiling algorithms

*Personalized Dialysate:*
- Individualized sodium modeling
- Bicarbonate tailoring
- Calcium optimization
- Potassium profiling

**Hemodynamic Stress Minimization:**

*Cardiac-Sparing Approaches:*
- Cooling dialysate (35.0-35.5 C)
- Isolated ultrafiltration protocols
- Prolonged/frequent treatments
- Incremental dialysis initiation

*Vascular Protection:*
- Avoid intradialytic hypotension
- Preserve autoregulation
- Minimize ischemia-reperfusion
- Arterial stiffness monitoring

**Biomarker Panels:**

*Multi-Analyte Assessment:*
- Cardiac: BNP, troponins, ST2, galectin-3
- Volume: Copeptin, adrenomedullin
- Inflammation: IL-6, TNF-alpha
- Endothelial: VCAM, ICAM

*Integrative Interpretation:*
- Machine learning classifiers
- Phenotype identification
- Treatment response prediction
- Risk stratification

**Implementation Science:**

*Technology Adoption:*
- Barriers to device use
- Cost-effectiveness
- Workflow integration
- Staff training

*Patient Engagement:*
- Digital health tools
- Real-time feedback
- Gamification
- Remote monitoring

**Future Directions:**

*Research Priorities:*
- RCTs of precision fluid management
- Cost-effectiveness of advanced monitoring
- AI algorithm validation
- Long-term cardiovascular outcomes

*Emerging Concepts:*
- Closed-loop dialysis systems
- Real-time biomarker monitoring
- Predictive analytics for hospitalization
- Population health approaches`,
      keyTerms: [
        { term: 'precision medicine', definition: 'Approach tailoring treatment to individual characteristics' },
        { term: 'segmental bioimpedance', definition: 'Measuring fluid compartments in specific body regions' },
        { term: 'closed-loop system', definition: 'Automated feedback control adjusting treatment in real-time' },
        { term: 'explainable AI', definition: 'Artificial intelligence whose decisions can be understood by humans' },
        { term: 'phenotype', definition: 'Observable characteristics defining a subtype of disease or response' },
      ],
      clinicalNotes: 'The future of fluid management lies in precision approaches using continuous monitoring and AI. Technology must be integrated thoughtfully with clinical judgment. Cost-effectiveness remains a consideration for widespread adoption. Patient-centered outcomes should guide all technological innovations.',
    },
  },

  media: [
    {
      id: 'fluid-tracking-chart',
      type: 'diagram',
      filename: 'fluid-tracking-guide.svg',
      title: 'Daily Fluid Tracking Chart',
      description: 'Visual guide for tracking fluid intake throughout the day',
    },
    {
      id: 'fluid-sources-poster',
      type: 'diagram',
      filename: 'fluid-sources-chart.svg',
      title: 'Sources of Fluid Intake',
      description: 'Chart showing various sources of fluid including hidden sources',
    },
  ],

  citations: [
    {
      id: 'kdigo-fluid',
      type: 'article',
      title: 'Fluid Management in Chronic Kidney Disease',
      source: 'Kidney International Reports',
    },
    {
      id: 'dry-weight-assessment',
      type: 'article',
      title: 'Assessment and Management of Fluid Overload in Dialysis',
      source: 'Clinical Journal of the American Society of Nephrology',
    },
  ],

  crossReferences: [
    { targetId: 'chronic-kidney-ckd-stages', targetType: 'concept', relationship: 'related', label: 'CKD Stages' },
    { targetId: 'chronic-kidney-renal-diet', targetType: 'concept', relationship: 'related', label: 'Renal Diet' },
    { targetId: 'chronic-kidney-dialysis-preparation', targetType: 'concept', relationship: 'related', label: 'Dialysis Preparation' },
  ],

  tags: {
    systems: ['renal'],
    topics: ['chronic-disease', 'ckd', 'fluid-management', 'dialysis'],
    keywords: ['fluid restriction', 'fluid balance', 'dialysis', 'volume overload', 'interdialytic weight gain'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'nephrology'] },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
