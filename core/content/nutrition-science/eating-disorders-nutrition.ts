/**
 * Eating Disorders Nutrition - Nutrition Science
 *
 * Comprehensive content on nutritional management of eating disorders
 * including anorexia nervosa, bulimia nervosa, binge eating disorder,
 * ARFID, refeeding syndrome, and nutritional rehabilitation protocols.
 *
 * ICD-11 Codes:
 * - 6B80: Anorexia nervosa
 * - 6B81: Bulimia nervosa
 * - 6B82: Binge eating disorder
 * - 6B83: Avoidant-restrictive food intake disorder (ARFID)
 * - 5B5Z: Refeeding syndrome (under Metabolic disorders)
 * - 6B8Y: Other specified feeding or eating disorders
 * - 6B8Z: Feeding or eating disorders, unspecified
 *
 * Spanish Translations:
 * - Trastornos de la conducta alimentaria (Eating disorders)
 * - Anorexia nerviosa (Anorexia nervosa)
 * - Bulimia nerviosa (Bulimia nervosa)
 * - Trastorno por atrac\u00f3n (Binge eating disorder)
 * - S\u00edndrome de realimentaci\u00f3n (Refeeding syndrome)
 * - Rehabilitaci\u00f3n nutricional (Nutritional rehabilitation)
 */

import { EducationalContent } from '../types';

export const eatingDisordersNutrition: EducationalContent = {
  id: 'nutrition-eating-disorders',
  type: 'topic',
  name: 'Eating Disorders Nutrition',
  alternateNames: ['Nutritional Management of Eating Disorders', 'Eating Disorder Recovery Nutrition', 'Trastornos de la Conducta Alimentaria'],

  levels: {
    1: {
      level: 1,
      summary: 'Eating disorders are serious conditions where people have unhealthy relationships with food. They can cause dangerous health problems by not eating enough, eating too much, or getting rid of food after eating. Getting the right nutrition is a key part of recovery.',
      explanation: `## What Are Eating Disorders?

Eating disorders are serious illnesses that affect how people eat and think about food. They are not a choice \u2013 they are real medical conditions that need treatment.

**Types of Eating Disorders:**

**Anorexia Nervosa (an-uh-REK-see-uh ner-VOH-suh):**
- Eating very little food and being afraid of gaining weight
- May see themselves as overweight even when they are very thin
- Can cause the body to become dangerously weak
- May lead to hair loss, feeling cold all the time, and weak bones

**Bulimia Nervosa (boo-LEE-mee-uh ner-VOH-suh):**
- Eating large amounts of food (binge eating) and then trying to get rid of it
- Getting rid of food can mean vomiting, using laxatives, or exercising too much
- Can damage teeth, throat, and stomach
- Can cause dehydration and heart problems

**Binge Eating Disorder:**
- Eating large amounts of food and feeling out of control
- NOT followed by purging (unlike bulimia)
- Often leads to weight gain and feeling guilty or ashamed
- Most common eating disorder in the United States

**ARFID (Avoidant/Restrictive Food Intake Disorder):**
- Extreme picky eating that goes beyond normal
- May avoid foods because of texture, color, smell, or fear of choking
- Not related to body image (different from anorexia)
- Can lead to poor growth and nutritional deficiencies

## Why Nutrition Matters in Recovery

Getting the right nutrition is one of the most important parts of eating disorder treatment:
- The body needs fuel to heal and get stronger
- The brain needs proper nutrition to think clearly
- Bones, muscles, and organs need nutrients to repair damage
- A balanced diet helps mood and energy levels

## What Is Refeeding Syndrome?

When someone has been eating very little for a long time and starts eating again, their body can have a dangerous reaction called refeeding syndrome:
- The body is not used to processing food
- It can cause problems with the heart, breathing, and muscles
- Doctors monitor patients very carefully when they start eating again
- Eating is reintroduced slowly and carefully

## Getting Help

- Eating disorders are treatable \u2013 recovery is possible
- Treatment usually involves a team: doctor, therapist, and dietitian
- Nutrition counseling helps build healthy eating habits
- It takes time, but most people can recover
- If you or someone you know has an eating disorder, talk to a trusted adult or call the NEDA helpline`,
      keyTerms: [
        { term: 'eating disorder', definition: 'A serious illness that affects how a person eats, thinks about food, and sees their body' },
        { term: 'anorexia nervosa', definition: 'An eating disorder where a person eats very little because they are afraid of gaining weight' },
        { term: 'bulimia nervosa', definition: 'An eating disorder where a person eats large amounts of food and then tries to get rid of it' },
        { term: 'binge eating', definition: 'Eating a very large amount of food in a short time and feeling out of control' },
        { term: 'refeeding syndrome', definition: 'A dangerous reaction that can happen when someone who has been starving starts eating again too quickly' },
      ],
      analogies: [
        'Refeeding syndrome is like trying to start a car that has been sitting for years \u2013 you have to warm it up slowly or the engine could break.',
        'An eating disorder is like a bully in your brain that tells you lies about food and your body.',
        'Recovery from an eating disorder is like rebuilding a house \u2013 it takes time, a good team, and the right materials (nutrition).',
      ],
      examples: [
        'A teenager with anorexia may skip meals and exercise excessively because they feel they are overweight even though they are underweight',
        'Someone with bulimia might eat a whole pizza and then force themselves to vomit',
        'A child with ARFID might refuse to eat any food that is green or has a certain texture',
        'A person with binge eating disorder might eat several boxes of cereal in one sitting and feel terrible afterward',
      ],
      patientCounselingPoints: [
        'Eating disorders are not your fault \u2013 they are real medical conditions that need treatment',
        'Recovery is possible with the right help from doctors, therapists, and dietitians',
        'It is important to follow your treatment team\'s meal plan, even when it feels hard',
        'Healing takes time \u2013 be patient with yourself and celebrate small victories',
        'If you are worried about a friend, encourage them to talk to a trusted adult',
      ],
    },
    2: {
      level: 2,
      summary: 'Eating disorders have significant nutritional consequences including malnutrition, electrolyte imbalances, and organ damage. Nutritional rehabilitation is a cornerstone of treatment, requiring careful monitoring for refeeding syndrome. Management involves structured meal plans, gradual caloric restoration, and addressing micronutrient deficiencies.',
      explanation: `## Eating Disorders: Nutritional Impact and Management

**Anorexia Nervosa (ICD-11: 6B80):**

---
Nutritional consequences:
  +- Severe caloric restriction \u2192 malnutrition
  +- Protein-energy malnutrition
  +- Micronutrient deficiencies:
  |  +- Iron, zinc, vitamin D, calcium
  |  +- B vitamins (thiamine, B12, folate)
  |  +- Essential fatty acids
  +- Body composition changes:
  |  +- Loss of muscle mass (sarcopenia)
  |  +- Loss of bone density (osteopenia/osteoporosis)
  |  +- Loss of fat stores
  +- Metabolic effects:
  |  +- Decreased metabolic rate
  |  +- Hypothermia
  |  +- Bradycardia (slow heart rate)
  |  +- Low blood pressure
  +- Organ effects:
     +- Heart: Reduced muscle, arrhythmias
     +- Brain: Cognitive impairment, gray matter loss
     +- GI: Gastroparesis, constipation
     +- Endocrine: Amenorrhea, low thyroid function
     +- Immune: Increased infection risk

Nutritional management:
  +- Initial assessment: Weight, BMI, vital signs, labs
  +- Caloric prescription:
  |  +- Start: 1,200\u20131,500 kcal/day (inpatient)
  |  +- Increase by 200\u2013300 kcal every 2\u20133 days
  |  +- Target: 2,500\u20133,500 kcal/day for weight restoration
  +- Weight gain goal: 1\u20132 lbs/week (inpatient), 0.5\u20131 lb/week (outpatient)
  +- Meal structure: 3 meals + 2\u20133 snacks daily
  +- Supplements: Multivitamin, calcium, vitamin D, phosphorus
  +- Monitoring: Electrolytes, phosphorus, magnesium daily during refeeding
---

**Bulimia Nervosa (ICD-11: 6B81):**

---
Nutritional consequences:
  +- Electrolyte imbalances:
  |  +- Hypokalemia (from vomiting, laxatives)
  |  +- Metabolic alkalosis (from vomiting)
  |  +- Metabolic acidosis (from laxative abuse)
  |  +- Dehydration
  +- Dental erosion: Acid damage to tooth enamel
  +- Esophageal damage: Tears (Mallory-Weiss), Barrett esophagus
  +- Parotid gland enlargement ("chipmunk cheeks")
  +- Russell sign: Calluses on knuckles from self-induced vomiting
  +- Nutritional deficiencies despite normal or elevated weight

Nutritional management:
  +- Normalize eating patterns:
  |  +- Regular, structured meals and snacks
  |  +- Adequate caloric intake (prevent restriction \u2192 binge cycle)
  |  +- 3 meals + 2\u20133 snacks daily
  +- Correct electrolyte imbalances
  +- Dental care and monitoring
  +- Address laxative dependence (gradual taper, fiber, hydration)
  +- Cognitive behavioral therapy (CBT) is first-line psychological treatment
---

**Binge Eating Disorder (ICD-11: 6B82):**

---
Characteristics:
  +- Recurrent binge episodes (at least once/week for 3 months)
  +- Marked distress during and after binges
  +- No compensatory behaviors (distinguishes from bulimia)
  +- Often associated with overweight/obesity

Nutritional management:
  +- Regular, balanced meals (prevent restriction triggers)
  +- Mindful eating practices
  +- Address emotional eating patterns
  +- Avoid highly restrictive diets (can trigger binges)
  +- Focus on health behaviors, not weight
  +- CBT and interpersonal therapy
  +- Medications: Lisdexamfetamine (Vyvanse), SSRIs
---

**ARFID \u2013 Avoidant/Restrictive Food Intake Disorder (ICD-11: 6B83):**

---
Characteristics:
  +- Significant food avoidance or restriction
  +- NOT related to body image concerns
  +- Three presentations:
  |  +- Sensory sensitivity (texture, taste, smell, appearance)
  |  +- Lack of interest in eating or food
  |  +- Fear of aversive consequences (choking, vomiting, pain)
  +- Results in:
  |  +- Nutritional deficiency
  |  +- Weight loss or failure to grow
  |  +- Dependence on supplements or tube feeding
  |  +- Psychosocial impairment

Nutritional management:
  +- Nutritional assessment and correction of deficiencies
  +- Gradual food exposure and desensitization
  +- Supplement or enteral nutrition if needed
  +- Multivitamin and mineral supplementation
  +- Family-based interventions
  +- Occupational therapy for sensory issues
---

## Refeeding Syndrome

---
Definition:
  +- Metabolic disturbances occurring when nutrition is reintroduced
  +- After prolonged starvation or severe malnutrition
  +- Hallmark: Severe hypophosphatemia

Mechanism:
  +- During starvation: Body shifts to fat metabolism
  +- Reintroduction of carbohydrates \u2192 insulin release
  +- Insulin drives potassium, phosphorus, magnesium into cells
  +- Serum levels of these electrolytes drop dangerously
  +- Phosphorus needed for ATP production
  +- Thiamine needed for carbohydrate metabolism

Complications:
  +- Cardiac: Arrhythmias, heart failure, cardiac arrest
  +- Respiratory: Respiratory failure
  +- Neurological: Confusion, seizures, coma
  +- Hematological: Hemolytic anemia
  +- Neuromuscular: Weakness, rhabdomyolysis

Prevention:
  +- Identify high-risk patients (BMI <16, recent weight loss >15%)
  +- Start refeeding slowly (10\u201320 kcal/kg/day)
  +- Monitor electrolytes daily
  +- Supplement phosphorus, potassium, magnesium, thiamine
  +- Give thiamine BEFORE starting carbohydrates
  +- Gradual caloric increase over 5\u20137 days
---`,
      keyTerms: [
        { term: 'refeeding syndrome', definition: 'Dangerous metabolic complications caused by reintroducing nutrition after prolonged starvation; characterized by severe hypophosphatemia' },
        { term: 'hypophosphatemia', definition: 'Dangerously low phosphorus levels in the blood; hallmark of refeeding syndrome' },
        { term: 'amenorrhea', definition: 'Loss of menstrual periods; common in anorexia nervosa due to low body weight and hormonal disruption' },
        { term: 'gastroparesis', definition: 'Delayed stomach emptying; common in anorexia nervosa, causes bloating and early fullness' },
        { term: 'ARFID', definition: 'Avoidant/Restrictive Food Intake Disorder; extreme food avoidance not related to body image' },
        { term: 'Russell sign', definition: 'Calluses on knuckles from repeated self-induced vomiting; a physical sign of bulimia nervosa' },
        { term: 'lisdexamfetamine', definition: 'First FDA-approved medication for binge eating disorder; a stimulant that reduces binge frequency' },
      ],
      analogies: [
        'Refeeding syndrome is like flooding a drought-stricken river \u2013 too much too fast causes damage; you need to restore the flow gradually.',
        'The restriction-binge cycle in bulimia is like a rubber band \u2013 the more you pull back (restrict), the harder it snaps forward (binge).',
        'ARFID is different from anorexia like a broken radio dial vs. someone choosing to turn off the radio \u2013 the person with ARFID isn\'t choosing to avoid food for weight reasons.',
      ],
      examples: [
        'A 16-year-old with anorexia is hospitalized at 70% of ideal body weight and starts refeeding at 1,200 kcal/day with phosphorus monitoring',
        'A college student with bulimia presents with hypokalemia and dental erosion after months of daily purging',
        'A 40-year-old with binge eating disorder reports eating 5,000+ calories in a single sitting multiple times per week',
        'A 7-year-old with ARFID will only eat 5 foods due to texture sensitivity, resulting in iron and vitamin D deficiency',
      ],
      patientCounselingPoints: [
        'Structured, regular meals and snacks help prevent both restriction and binge eating episodes',
        'Recovery from an eating disorder takes time \u2013 weight restoration is just one part of the process',
        'Electrolyte imbalances from purging can be life-threatening \u2013 seek medical help immediately',
        'Avoiding all "bad foods" can actually trigger binge eating \u2013 work with a dietitian to include all food groups',
        'ARFID is not picky eating or laziness \u2013 it is a real medical condition that responds to treatment',
      ],
    },
    3: {
      level: 3,
      summary: 'Nutritional rehabilitation of eating disorders requires understanding metabolic adaptation, hormonal disruption, and refeeding pathophysiology. Evidence-based protocols guide caloric restoration, electrolyte management, and multidisciplinary treatment. The MARSIPAN and NICE guidelines provide frameworks for medical risk assessment and nutritional management.',
      explanation: `## Metabolic and Hormonal Consequences

**Anorexia Nervosa \u2013 Metabolic Adaptation:**

---
Endocrine disruption:
  +- Hypothalamic-pituitary-gonadal axis:
  |  +- Functional hypothalamic amenorrhea
  |  +- Low GnRH pulsatility
  |  +- Low FSH, LH, estradiol (females)
  |  +- Low testosterone (males)
  |  +- Impaired fertility
  +- Hypothalamic-pituitary-thyroid axis:
  |  +- Low T3 (euthyroid sick syndrome)
  |  +- Normal or low TSH
  |  +- Adaptive response to conserve energy
  |  +- Do NOT treat with levothyroxine
  +- Hypothalamic-pituitary-adrenal axis:
  |  +- Elevated cortisol (hypercortisolism)
  |  +- Impaired dexamethasone suppression
  |  +- Contributes to bone loss and muscle wasting
  +- Growth hormone axis:
  |  +- Elevated GH, low IGF-1 (GH resistance)
  |  +- Contributes to muscle wasting
  +- Leptin and ghrelin:
  |  +- Leptin very low (proportional to fat mass)
  |  +- Ghrelin elevated (hunger signal)
  |  +- Paradox: Hunger drive present but overridden by cognitive restriction

Bone health:
  +- Osteopenia affects up to 90% of patients
  +- Osteoporosis in 40\u201350%
  +- Mechanisms:
  |  +- Estrogen deficiency
  |  +- Hypercortisolism
  |  +- Low IGF-1
  |  +- Nutritional deficiencies (calcium, vitamin D)
  |  +- Reduced mechanical loading
  +- Treatment: Weight restoration is most effective
  +- Bisphosphonates: Limited evidence, avoid in premenopausal women
  +- Denosumab: Some evidence in adult AN
  +- Transdermal estrogen + cyclic progesterone: May help adolescents

Cardiovascular consequences:
  +- Bradycardia (<60 bpm), hypotension
  +- QTc prolongation (risk of sudden death)
  +- Mitral valve prolapse
  +- Pericardial effusion
  +- Reduced cardiac mass (cardiac atrophy)
  +- Superior mesenteric artery syndrome
  +- Refeeding-associated cardiac decompensation
---

**Bulimia Nervosa \u2013 Metabolic Consequences:**

---
Electrolyte abnormalities by purging method:
  +- Self-induced vomiting:
  |  +- Hypokalemia, hypochloremia
  |  +- Metabolic alkalosis
  |  +- Elevated serum amylase (salivary origin)
  |  +- Parotid hypertrophy
  +- Laxative abuse:
  |  +- Hypokalemia, hyponatremia
  |  +- Metabolic acidosis (bicarbonate loss)
  |  +- Dehydration
  |  +- Pseudo-Bartter syndrome (chronic laxative/diuretic abuse)
  +- Diuretic abuse:
  |  +- Hypokalemia, hyponatremia
  |  +- Metabolic alkalosis
  |  +- Dehydration

Pseudo-Bartter syndrome:
  +- Chronic purging \u2192 volume depletion
  +- RAAS activation \u2192 aldosterone elevation
  +- Sodium/water retention on purging cessation
  +- Edema, weight gain (may trigger relapse)
  +- Management: Gradual purging cessation, spironolactone consideration
---

## Refeeding Syndrome: Detailed Pathophysiology

---
Pathophysiology:
  +- During starvation:
  |  +- Insulin secretion decreases
  |  +- Gluconeogenesis from amino acids and glycerol
  |  +- Ketogenesis from fatty acids
  |  +- Intracellular phosphorus, potassium, magnesium depleted
  |  +- Total body depletion masked by normal serum levels
  +- Upon refeeding with carbohydrates:
  |  +- Insulin surge
  |  +- Cellular uptake of glucose, phosphorus, potassium, magnesium
  |  +- Serum levels drop precipitously
  |  +- Phosphorus:
  |  |  +- Required for ATP, 2,3-DPG, phospholipids
  |  |  +- Severe hypophosphatemia (<1.0 mg/dL) \u2192 organ failure
  |  |  +- Cardiac dysfunction, respiratory failure, rhabdomyolysis
  |  +- Potassium:
  |  |  +- Intracellular shift
  |  |  +- Hypokalemia \u2192 cardiac arrhythmias
  |  +- Magnesium:
  |  |  +- Intracellular shift
  |  |  +- Hypomagnesemia \u2192 arrhythmias, seizures
  |  +- Thiamine (vitamin B1):
  |  |  +- Cofactor for carbohydrate metabolism
  |  |  +- Depletion + carbohydrate load \u2192 Wernicke encephalopathy
  |  |  +- MUST supplement before refeeding
  +- Fluid shifts:
     +- Sodium and water retention
     +- Edema
     +- Risk of heart failure

Risk factors (NICE criteria):
  +- One or more of:
  |  +- BMI <16 kg/m\u00b2
  |  +- Unintentional weight loss >15% in 3\u20136 months
  |  +- Little or no nutritional intake for >10 days
  |  +- Low baseline phosphorus, potassium, or magnesium
  +- Two or more of:
     +- BMI <18.5 kg/m\u00b2
     +- Unintentional weight loss >10% in 3\u20136 months
     +- Little or no nutritional intake for >5 days
     +- History of alcohol misuse, chemotherapy, insulin, antacids, diuretics
---

## Nutritional Rehabilitation Protocols

---
Inpatient protocol (based on APA/NICE guidelines):
  +- Phase 1: Medical stabilization (days 1\u20133)
  |  +- Caloric initiation: 10\u201320 kcal/kg/day (high risk)
  |  |  or 1,200\u20131,500 kcal/day (moderate risk)
  |  +- Phosphorus supplementation: 500\u20131,000 mg/day prophylactic
  |  +- Thiamine: 200\u2013300 mg/day IV/oral (BEFORE refeeding)
  |  +- Multivitamin with minerals
  |  +- Monitor: Electrolytes Q12h, cardiac telemetry, I&O
  |  +- Fluid restriction if edema risk
  +- Phase 2: Nutritional restoration (days 4\u201314)
  |  +- Increase by 200\u2013300 kcal every 2\u20133 days
  |  +- Target: 2,500\u20133,500 kcal/day
  |  +- Protein: 1.2\u20131.5 g/kg/day
  |  +- Continue electrolyte monitoring (daily)
  |  +- Weight gain goal: 1\u20132 kg/week
  +- Phase 3: Weight restoration (weeks 2\u20138+)
  |  +- Continue caloric advancement
  |  +- Target weight: Menses resumption (females)
  |  +- Diversify food choices
  |  +- Address food fears and rituals
  |  +- Transition to outpatient meal plan
  +- Monitoring schedule:
     +- Vital signs: BID initially
     +- Electrolytes: Daily \u2192 every other day \u2192 weekly
     +- ECG: Baseline and with electrolyte changes
     +- Weight: Daily (after morning void, in gown)
     +- Bone density (DXA): At diagnosis, follow-up at 1 year

Outpatient protocol:
  +- Starting calories: Current intake + 200\u2013300 kcal
  +- Increase by 100\u2013200 kcal every 1\u20132 weeks
  +- Weight gain goal: 0.25\u20130.5 kg/week
  +- 3 meals + 2\u20133 snacks
  +- Meal planning with registered dietitian
  +- Monitor electrolytes weekly initially
  +- Family-based treatment (FBT/Maudsley) for adolescents
---`,
      keyTerms: [
        { term: 'functional hypothalamic amenorrhea', definition: 'Loss of menstrual periods due to suppressed GnRH pulsatility from energy deficit, stress, or excessive exercise' },
        { term: 'euthyroid sick syndrome', definition: 'Low T3 with normal TSH in the setting of starvation; adaptive response that should NOT be treated with thyroid hormone' },
        { term: 'pseudo-Bartter syndrome', definition: 'Secondary hyperaldosteronism from chronic purging causing electrolyte abnormalities and edema upon purging cessation' },
        { term: 'MARSIPAN', definition: 'Management of Really Sick Patients with Anorexia Nervosa; UK guideline for medical management of severe AN' },
        { term: '2,3-DPG', definition: '2,3-diphosphoglycerate; requires phosphorus for synthesis; depletion impairs oxygen delivery to tissues' },
        { term: 'family-based treatment', definition: 'Maudsley approach; evidence-based treatment for adolescent eating disorders where parents take charge of refeeding' },
      ],
      analogies: [
        'Refeeding syndrome is like restarting a factory after a long shutdown \u2013 the sudden demand for raw materials (phosphorus, potassium) exceeds what is in stock.',
        'Pseudo-Bartter syndrome is like a dam that has compensated for a leak \u2013 when you fix the leak (stop purging), the dam floods (edema) until the system readjusts.',
        'The hypothalamic shutdown in anorexia is like a thermostat turning off unnecessary systems during a power shortage \u2013 reproduction and metabolism slow to conserve energy.',
      ],
      examples: [
        'A 17-year-old with BMI 14 develops phosphorus of 0.8 mg/dL on day 2 of refeeding, requiring IV phosphorus replacement',
        'A patient with bulimia develops Pseudo-Bartter syndrome with 5 kg weight gain and edema after stopping purging',
        'DXA scan in a 22-year-old with 4-year history of anorexia reveals T-score of -2.8 at the lumbar spine',
        'An adolescent with ARFID requires nasogastric supplemental feeding due to growth failure and iron deficiency anemia',
      ],
      clinicalNotes: 'Thiamine must be administered BEFORE carbohydrate refeeding to prevent Wernicke encephalopathy. Low T3 in anorexia is adaptive and should NOT be treated with levothyroxine. QTc prolongation requires immediate correction of electrolytes and cardiac monitoring. Family-based treatment (Maudsley approach) has the strongest evidence base for adolescent anorexia. Avoid bisphosphonates in premenopausal women \u2013 weight restoration is the most effective treatment for AN-related bone loss.',
    },
    4: {
      level: 4,
      summary: 'Advanced nutritional management of eating disorders integrates neurobiological underpinnings, genetics of appetite regulation, evidence-based refeeding protocols, and management of medical complications. Higher calorie refeeding protocols are gaining evidence, and precision approaches consider individual metabolic and genetic factors.',
      explanation: `## Neurobiology of Eating Disorders

**Neural Circuitry and Neurotransmitter Dysregulation:**

---
Anorexia nervosa neurobiology:
  +- Serotonin (5-HT) system:
  |  +- Elevated 5-HIAA in CSF (recovered AN)
  |  +- 5-HT1A receptor alterations
  |  +- Tryptophan depletion improves mood in AN (paradoxical)
  |  +- Dietary restriction reduces serotonin \u2192 anxiety relief
  |  +- "Starvation as self-medication" hypothesis
  +- Dopamine system:
  |  +- Altered reward processing
  |  +- Reduced D2/D3 receptor binding in striatum
  |  +- Reduced reward response to food stimuli
  |  +- Enhanced response to exercise and cognitive control
  +- Neuroimaging findings:
  |  +- Reduced gray matter volume (partially reversible with recovery)
  |  +- Altered insula activation (interoceptive processing)
  |  +- Increased dorsal cognitive control network activity
  |  +- Reduced ventral reward network response to food
  |  +- Amygdala hyperactivation to food stimuli

Bulimia nervosa neurobiology:
  +- Reduced serotonergic tone:
  |  +- Low 5-HIAA in CSF
  |  +- Impaired satiety signaling
  |  +- SSRIs effective (fluoxetine 60 mg: FDA-approved)
  +- Dopamine and reward:
  |  +- Altered reward sensitivity
  |  +- Food as supranormal reward stimulus
  |  +- Binge eating activates reward circuits
  +- Impaired impulse control:
     +- Prefrontal cortex hypoactivation
     +- Reduced inhibitory control
     +- Shares features with addictive behaviors

Binge eating disorder neurobiology:
  +- Overlap with substance use disorder neurobiology
  +- Food addiction model (controversial):
  |  +- Hyperpalatable foods activate similar circuits
  |  +- Tolerance and withdrawal-like phenomena
  |  +- Loss of control
  +- Emotional dysregulation:
  |  +- Binge eating as emotion regulation strategy
  |  +- Amygdala hyperreactivity to negative emotions
  |  +- Prefrontal hypofunction

Genetics:
  +- Heritability estimates:
  |  +- AN: 50\u201370%
  |  +- BN: 55\u201362%
  |  +- BED: 41\u201357%
  +- Genome-wide association studies (GWAS):
  |  +- AN: 8 significant loci identified
  |  +- Genetic correlation with OCD, anxiety, metabolic traits
  |  +- Inverse genetic correlation with BMI, type 2 diabetes
  |  +- Both psychiatric and metabolic components
  +- Candidate genes:
     +- 5-HT2A receptor (HTR2A)
     +- BDNF (brain-derived neurotrophic factor)
     +- OPRD1 (delta opioid receptor)
     +- CADM1 (cell adhesion molecule 1)
---

## Advanced Refeeding Protocols

**Higher Calorie Refeeding Evidence:**

---
Traditional vs. higher-calorie refeeding:
  +- Traditional approach (NICE):
  |  +- Start: 10\u201320 kcal/kg/day
  |  +- Slow advancement
  |  +- Rationale: Minimize refeeding syndrome risk
  +- Higher-calorie approach (emerging evidence):
  |  +- Start: 1,500\u20132,000 kcal/day
  |  +- RCT evidence (O'Connor et al., 2016):
  |  |  +- No increased risk of refeeding syndrome
  |  |  +- Faster weight restoration
  |  |  +- Shorter hospital stays
  |  |  +- Better outcomes
  |  +- Meal-based refeeding superior to nasogastric
  |  +- Prophylactic phosphorus supplementation is key
  |  +- Medical Complications of Eating Disorders guidelines (2019)

Phosphorus management:
  +- Prophylactic supplementation for ALL malnourished patients
  +- Dose: 500\u20131,000 mg/day oral (or IV if <1.5 mg/dL)
  +- Target: >3.0 mg/dL
  +- Hypophosphatemia grading:
  |  +- Mild: 2.0\u20132.5 mg/dL \u2192 oral replacement
  |  +- Moderate: 1.0\u20132.0 mg/dL \u2192 IV consideration
  |  +- Severe: <1.0 mg/dL \u2192 IV replacement, slow refeeding
  +- Monitoring: Daily during first week of refeeding

Thiamine and micronutrient management:
  +- Thiamine: 200\u2013300 mg/day IV or oral for 3\u20135 days before refeeding
  +- Then oral thiamine 100 mg daily for duration of refeeding
  +- Multivitamin with minerals daily
  +- Zinc: 14 mg/day (taste improvement, appetite)
  +- Vitamin D: 600\u20132,000 IU/day
  +- Calcium: 1,000\u20131,300 mg/day
  +- Iron: If deficient (avoid during active infection)
---

## Medical Complications Management

**Cardiac:**

---
Cardiac monitoring protocol:
  +- ECG at admission:
  |  +- QTc prolongation (>450 ms in males, >470 ms in females)
  |  +- Bradycardia (<50 bpm in adults, <40 bpm = critical)
  |  +- ST-T wave changes
  |  +- U waves (hypokalemia)
  +- Continuous telemetry if:
  |  +- BMI <14
  |  +- Heart rate <40 bpm
  |  +- QTc >500 ms
  |  +- Electrolyte abnormalities
  +- Echocardiography if:
  |  +- Signs of heart failure
  |  +- Pericardial effusion suspected
  |  +- Mitral valve prolapse
  +- Refeeding cardiac complications:
     +- Fluid overload \u2192 pulmonary edema
     +- Arrhythmias from electrolyte shifts
     +- Superior mesenteric artery syndrome (SMA syndrome)
     +- Acute gastric dilatation (rare but dangerous)
---

**Gastrointestinal:**

---
GI complications and management:
  +- Gastroparesis:
  |  +- Delayed gastric emptying (30\u201350% of AN patients)
  |  +- Bloating, nausea, early satiety
  |  +- Usually improves with weight restoration
  |  +- Management: Small, frequent meals; prokinetics (metoclopramide)
  +- Constipation:
  |  +- Common during refeeding
  |  +- Slow colonic transit
  |  +- Management: Fiber, fluids, polyethylene glycol
  |  +- Avoid stimulant laxatives
  +- Superior mesenteric artery (SMA) syndrome:
  |  +- Compression of duodenum by SMA and aorta
  |  +- Due to loss of mesenteric fat pad
  |  +- Symptoms: Post-prandial vomiting, abdominal pain
  |  +- Diagnosis: CT angiography (SMA angle <25\u00b0)
  |  +- Treatment: Nasojejunal feeds, weight restoration
  +- Acute gastric dilatation:
     +- Rare but life-threatening
     +- Risk with rapid refeeding or binge eating
     +- Can lead to gastric necrosis or perforation
     +- Emergency decompression with NG tube
---

**Bone Health Management:**

---
Assessment and treatment:
  +- DXA scan at diagnosis and annually until improvement
  +- Z-score (not T-score) for premenopausal women and men <50
  +- Z-score \u2264-2.0 = "below expected range for age"
  +- Weight restoration: Most effective intervention
  +- Calcium: 1,000\u20131,300 mg/day
  +- Vitamin D: Maintain 25(OH)D >30 ng/mL
  +- Weight-bearing exercise: Only if medically stable
  +- Hormonal therapy:
  |  +- Transdermal estrogen (adolescents): Some evidence
  |  +- Oral contraceptives: NOT effective for bone density
  |  +- Denosumab: Investigational in AN
  +- Bisphosphonates:
     +- Avoid in premenopausal women (teratogenic, long half-life)
     +- Limited evidence in AN
     +- Consider in postmenopausal with AN and fracture risk
---`,
      keyTerms: [
        { term: 'starvation as self-medication', definition: 'Hypothesis that dietary restriction in AN reduces serotonin, paradoxically reducing anxiety in individuals with elevated baseline 5-HT' },
        { term: 'higher-calorie refeeding', definition: 'Evidence-based approach starting at 1,500\u20132,000 kcal/day with prophylactic phosphorus; shown to be safe and effective' },
        { term: 'SMA syndrome', definition: 'Superior mesenteric artery syndrome; compression of duodenum between SMA and aorta due to loss of mesenteric fat in severe malnutrition' },
        { term: 'acute gastric dilatation', definition: 'Rare but life-threatening complication of rapid refeeding or binge eating; can lead to gastric necrosis' },
        { term: 'Z-score', definition: 'Bone density score comparing to age-matched controls; used instead of T-score in premenopausal women and men <50' },
        { term: 'GWAS', definition: 'Genome-wide association study; identified 8 significant loci for AN including metabolic and psychiatric genetic correlations' },
        { term: 'food addiction model', definition: 'Controversial hypothesis that hyperpalatable foods activate reward circuits similarly to drugs of abuse; debated in BED' },
      ],
      analogies: [
        'The serotonin hypothesis in AN is counterintuitive \u2013 it is like being calmed by turning down a fire alarm rather than putting out the fire.',
        'SMA syndrome is like a collapsed bridge \u2013 when the fat pad cushion between the aorta and SMA is lost, the duodenum gets pinched.',
        'Higher-calorie refeeding with phosphorus prophylaxis is like driving faster with better brakes \u2013 the speed (calories) is safe when the safety system (electrolyte monitoring) is robust.',
      ],
      examples: [
        'RCT by O\'Connor et al. (2016) showed 1,400 kcal starting intake was safe with no increased refeeding syndrome vs. traditional 500 kcal start',
        'fMRI study showing reduced ventral striatal activation to food images in recovered AN patients, suggesting trait-level reward processing alteration',
        'GWAS PGC-ED consortium identified genetic overlap between anorexia nervosa and metabolic traits (inverse correlation with BMI and type 2 diabetes)',
        'Adolescent with BMI 12 develops SMA syndrome during refeeding, requiring nasojejunal feeding until mesenteric fat pad is restored',
      ],
      clinicalNotes: 'Higher-calorie refeeding (1,500\u20132,000 kcal/day) with prophylactic phosphorus is now supported by RCT evidence and may be preferred over traditional slow refeeding. Oral contraceptives do NOT improve bone density in AN \u2013 transdermal estrogen in adolescents has more evidence. QTc >500 ms requires immediate electrolyte correction and continuous telemetry. GWAS data suggest AN has both psychiatric and metabolic components, challenging pure psychological models. SMA syndrome should be suspected in severely malnourished patients with post-prandial vomiting.',
    },
    5: {
      level: 5,
      summary: 'Expert-level eating disorder nutrition encompasses precision medicine approaches, novel pharmacological targets, advanced metabolic monitoring, gut-brain axis research, and evolving evidence on optimal refeeding strategies. Integration of genomic, metabolomic, and microbiome data informs personalized nutritional rehabilitation protocols.',
      explanation: `## Precision Medicine in Eating Disorder Nutrition

**Metabolomic and Genetic Biomarkers:**

---
Metabolomics in eating disorders:
  +- Anorexia nervosa metabolomic signatures:
  |  +- Elevated branched-chain amino acids (starvation)
  |  +- Altered tryptophan metabolism (kynurenine pathway)
  |  +- Disrupted lipid profiles (ceramides, sphingolipids)
  |  +- Bile acid alterations
  |  +- Altered carnitine metabolism
  +- Biomarker applications:
  |  +- Predict refeeding syndrome risk
  |  +- Monitor metabolic recovery
  |  +- Identify treatment responders
  |  +- Guide nutritional supplementation
  +- Challenges:
     +- State vs. trait markers
     +- Starvation confounds
     +- Reproducibility across cohorts
     +- Clinical translation

Genomic-informed treatment:
  +- Polygenic risk scores:
  |  +- AN PRS predicts treatment response (preliminary)
  |  +- Metabolic PRS may predict weight restoration trajectory
  |  +- Future: Pharmacogenomic-guided medication selection
  +- Epigenetic modifications:
  |  +- DNA methylation changes in AN (NR3C1, POMC, LEP)
  |  +- Histone modifications from malnutrition
  |  +- Intergenerational effects (offspring of AN mothers)
  |  +- Potential reversibility with nutritional rehabilitation
  +- Gene-environment interactions:
     +- FTO variants modify binge eating risk
     +- 5-HTTLPR modifies stress-related eating behavior
     +- BDNF Val66Met and AN susceptibility
     +- Clinical utility: Not yet established
---

## Gut Microbiome in Eating Disorders

---
Microbiome alterations:
  +- Anorexia nervosa:
  |  +- Reduced diversity (alpha diversity)
  |  +- Altered Firmicutes/Bacteroidetes ratio
  |  +- Increased Methanobrevibacter smithii (methane producer)
  |  +- Altered SCFA profiles
  |  +- Increased Proteobacteria
  |  +- Does NOT fully normalize with weight restoration
  +- Bulimia nervosa:
  |  +- Less studied than AN
  |  +- Altered diversity
  |  +- Purging-related changes
  +- Binge eating disorder:
  |  +- Overlap with obesity-associated dysbiosis
  |  +- Reduced diversity
  +- Functional implications:
  |  +- Altered energy harvest
  |  +- Immune dysregulation
  |  +- Gut-brain signaling:
  |  |  +- Microbial metabolites influence appetite hormones
  |  |  +- ClpB protein (E. coli): Molecular mimicry of \u03b1-MSH
  |  |  +- Antigen mimicry \u2192 autoantibodies to appetite peptides
  |  |  +- Caseinolytic peptidase B (ClpB) \u2192 satiety signaling
  |  +- Inflammatory signaling:
  |     +- Increased intestinal permeability
  |     +- Low-grade systemic inflammation
  |     +- LPS translocation
  |     +- Neuroinflammation

Therapeutic implications:
  +- Probiotic supplementation:
  |  +- Pilot studies in AN (Lactobacillus, Bifidobacterium)
  |  +- May improve GI symptoms, mood
  |  +- Randomized trials ongoing
  +- Prebiotic fiber:
  |  +- SCFA production support
  |  +- Gut barrier function
  |  +- Challenges: GI tolerance in AN patients
  +- Fecal microbiota transplantation:
  |  +- Investigational
  |  +- Case reports in refractory AN
  |  +- Ethical considerations
  +- Dietary diversity:
     +- Most effective microbiome modulator
     +- Graduated food exposure during recovery
     +- Plant-based fiber diversity goal
---

## Advanced Refeeding: Current Evidence and Controversies

---
Optimal refeeding rate debate:
  +- Conservative (NICE 2006/2017):
  |  +- 10\u201320 kcal/kg/day start
  |  +- Slow advancement
  |  +- Evidence: Expert consensus
  +- Moderate (APA, consensus):
  |  +- 1,200\u20131,500 kcal/day start
  |  +- Widely practiced in US
  +- Aggressive (emerging RCT evidence):
  |  +- 1,500\u20132,400 kcal/day start
  |  +- Key trials:
  |  |  +- O'Connor et al. (2016): 1,400 vs. 500 kcal/day start
  |  |  +- Garber et al. (2021): 2,000 vs. 1,400 kcal/day start
  |  |  +- Parker et al. (2023): Meal-based higher-calorie refeeding
  |  +- Findings:
  |  |  +- No increased refeeding complications with prophylactic P
  |  |  +- Faster weight restoration
  |  |  +- Shorter hospitalization
  |  |  +- Improved patient satisfaction
  |  +- Critical factors:
  |     +- Prophylactic phosphorus supplementation essential
  |     +- Daily electrolyte monitoring
  |     +- Cardiac monitoring if BMI <14 or HR <40
  |     +- Clinical judgment for extreme cases

Enteral vs. oral refeeding:
  +- Oral meal-based approach preferred (psychological benefits)
  +- Nasogastric supplementation if:
  |  +- Oral intake insufficient
  |  +- Medical instability requiring precise caloric delivery
  |  +- Severe food refusal
  +- Continuous NG feeds vs. bolus:
  |  +- Continuous: Lower refeeding risk (theoretical)
  |  +- Bolus: More physiological, better tolerance
  |  +- Evidence: No clear superiority
  +- Parenteral nutrition:
     +- Last resort
     +- Higher complication risk
     +- Infection risk
     +- Reserved for GI failure or severe SMA syndrome

Metabolic rate recovery:
  +- Hypermetabolism during weight restoration:
  |  +- REE increases above predicted during refeeding
  |  +- "Diet-induced thermogenesis" amplified
  |  +- May require 3,000\u20134,000+ kcal/day for continued weight gain
  |  +- Gradually normalizes over months
  +- Indirect calorimetry:
  |  +- Measured REE vs. predicted (Harris-Benedict, Mifflin-St Jeor)
  |  +- Often underestimates caloric needs during recovery
  |  +- Useful for persistent weight plateau
  +- Body composition recovery:
     +- Initial preferential fat deposition (trunk)
     +- Lean mass recovery lags behind
     +- Body composition normalizes over 6\u201312 months
     +- "Fat overshoot" phenomenon (temporary)
     +- Full recovery of bone density may take years
---

## Pharmacological Advances

---
Current evidence-based pharmacotherapy:
  +- Anorexia nervosa:
  |  +- No FDA-approved medication for AN
  |  +- Olanzapine: Modest weight gain (~1.5 kg vs. placebo)
  |  |  +- Meta-analysis evidence
  |  |  +- Monitor metabolic effects
  |  |  +- Low dose: 2.5\u201310 mg
  |  +- SSRIs: Not effective during underweight state
  |  |  +- May help after weight restoration (relapse prevention)
  |  |  +- Fluoxetine for comorbid depression/anxiety
  |  +- Dronabinol: Mixed evidence, appetite stimulant
  |  +- D-cycloserine: Augments exposure therapy (investigational)
  +- Bulimia nervosa:
  |  +- Fluoxetine 60 mg: FDA-approved
  |  +- Higher dose needed than for depression
  |  +- Topiramate: Reduces binge/purge (off-label)
  |  +- Ondansetron: May reduce vomiting (investigational)
  +- Binge eating disorder:
  |  +- Lisdexamfetamine (Vyvanse): FDA-approved
  |  |  +- Reduces binge days/week
  |  |  +- 50\u201370 mg daily
  |  |  +- Not primarily for weight loss
  |  +- Topiramate: Reduces binges and weight (off-label)
  |  +- SSRIs: Modest binge reduction
  |  +- GLP-1 agonists: Being studied for BED with obesity

Novel targets:
  +- Oxytocin: Reduces food preoccupation in AN (intranasal)
  +- Psilocybin: Phase 2 trials for AN (psychological flexibility)
  +- Ketamine: Rapid antidepressant for comorbid depression
  +- Microbiome-targeted interventions
  +- Neuromodulation: TMS, tDCS for reward/inhibitory circuits
---

## Long-Term Outcomes and Recovery Markers

---
Recovery definitions:
  +- Physical:
  |  +- Weight restoration to healthy range
  |  +- Menses resumption (females)
  |  +- Normalization of vital signs
  |  +- Bone density improvement
  +- Behavioral:
  |  +- Absence of restriction, bingeing, purging
  |  +- Normal eating patterns
  |  +- Appropriate exercise
  +- Cognitive:
  |  +- Reduced body image distortion
  |  +- Flexible eating attitudes
  |  +- Acceptance of healthy weight range
  +- Full recovery: All three domains for \u22651 year

Outcome data:
  +- AN: ~50% full recovery, ~30% partial, ~20% chronic
  +- BN: ~50\u201370% recovery at 5\u201310 years
  +- BED: ~60\u201370% recovery with treatment
  +- ARFID: Limited long-term data
  +- Mortality:
     +- AN: Highest mortality of any psychiatric disorder
     +- Standardized mortality ratio: 5.86 (meta-analysis)
     +- Causes: Medical complications, suicide
     +- Risk factors: Lower BMI, longer duration, older age at onset

Nutritional markers of recovery:
  +- Weight restoration to \u226590% IBW (or menses resumption)
  +- Normalization of:
  |  +- Prealbumin (half-life 2 days; reflects recent intake)
  |  +- Transferrin and retinol-binding protein
  |  +- Electrolytes and phosphorus
  |  +- Leptin (reflects fat mass recovery)
  |  +- IGF-1 (reflects nutritional status)
  +- Bone density improvement (DXA at 1\u20132 year intervals)
  +- Body composition normalization (fat/lean mass ratio)
  +- Metabolic rate normalization (indirect calorimetry)
---`,
      keyTerms: [
        { term: 'ClpB protein', definition: 'Caseinolytic peptidase B from E. coli; molecular mimicry of alpha-MSH may produce autoantibodies affecting appetite regulation' },
        { term: 'hypermetabolism', definition: 'Elevated resting energy expenditure during weight restoration; may require 3,000\u20134,000+ kcal/day for continued gain' },
        { term: 'fat overshoot', definition: 'Temporary preferential central fat deposition during weight restoration; normalizes over 6\u201312 months' },
        { term: 'polygenic risk score', definition: 'Aggregate genetic risk from multiple common variants; preliminary AN PRS may predict treatment response' },
        { term: 'epigenetic modifications', definition: 'Heritable changes in gene expression without DNA sequence changes; starvation induces methylation changes at POMC, LEP, NR3C1' },
        { term: 'indirect calorimetry', definition: 'Measurement of actual resting energy expenditure via oxygen consumption and CO2 production; often underestimated by prediction equations in recovery' },
        { term: 'standardized mortality ratio', definition: 'Ratio of observed to expected deaths; AN has SMR of 5.86, highest of any psychiatric disorder' },
      ],
      analogies: [
        'ClpB molecular mimicry is like a spy who looks like a border guard \u2013 the immune system produces antibodies against the bacterial protein that also cross-react with the body\'s own appetite hormones.',
        'Hypermetabolism during refeeding is like revving an engine after a long idle \u2013 the body burns extra energy as it ramps back up.',
        'Fat overshoot is like a restoration project where the foundation (fat) goes in first before the finish work (lean mass) \u2013 the body prioritizes energy reserves before muscle.',
        'The gut microbiome in AN is like a drought-adapted ecosystem \u2013 it does not simply return to normal when the rains (food) return.',
      ],
      examples: [
        'Metabolomic profiling identified elevated kynurenine/tryptophan ratio as a potential biomarker of treatment resistance in AN',
        'Phase 2 psilocybin trial for AN showed increased psychological flexibility and reduced eating disorder cognitions at 3-month follow-up',
        'Adolescent with AN required 3,800 kcal/day during weight restoration due to hypermetabolism confirmed by indirect calorimetry',
        'Microbiome analysis showed persistent reduction in Roseburia and Faecalibacterium prausnitzii even after 6 months of weight restoration',
      ],
      clinicalNotes: `Expert Clinical Pearls:

1. **Refeeding protocols:** Higher-calorie refeeding (1,500\u20132,000+ kcal) with prophylactic phosphorus is safe and leads to faster recovery (multiple RCTs). Traditional 10\u201320 kcal/kg is likely too conservative for most patients.

2. **Hypermetabolism:** Patients in weight restoration often need 3,000\u20134,000+ kcal/day. Prediction equations underestimate REE during recovery. Use indirect calorimetry for persistent weight plateaus.

3. **Microbiome:** AN microbiome does not fully normalize with weight restoration. Methanobrevibacter smithii enrichment increases energy harvest efficiency. ClpB molecular mimicry may contribute to persistent appetite dysregulation.

4. **Pharmacotherapy:** Olanzapine is the best-supported medication for AN (modest benefit). SSRIs are ineffective during the underweight state. Psilocybin and oxytocin are in clinical trials.

5. **Mortality:** AN has the highest mortality of any psychiatric disorder (SMR 5.86). Medical complications and suicide are leading causes. Early intervention and weight restoration are life-saving.

6. **Bone health:** Weight restoration is the most effective intervention for AN-related bone loss. Oral contraceptives do NOT improve bone density. Transdermal estrogen may help adolescents. Bisphosphonates generally avoided in premenopausal women.`,
    },
  },

  media: [
    {
      id: 'refeeding-syndrome-pathway',
      type: 'diagram',
      filename: 'refeeding-syndrome-pathway.svg',
      title: 'Refeeding Syndrome Pathophysiology',
      description: 'Diagram illustrating the metabolic cascade of refeeding syndrome including insulin surge, electrolyte shifts, and organ complications',
    },
    {
      id: 'eating-disorders-comparison',
      type: 'diagram',
      filename: 'eating-disorders-comparison.svg',
      title: 'Comparison of Eating Disorders',
      description: 'Table comparing anorexia nervosa, bulimia nervosa, binge eating disorder, and ARFID by features, nutritional impact, and management',
    },
  ],

  citations: [
    {
      id: 'nice-eating-disorders-2017',
      type: 'article',
      title: 'Eating Disorders: Recognition and Treatment (NG69)',
      authors: ['National Institute for Health and Care Excellence'],
      source: 'NICE Guidelines',
      url: 'https://www.nice.org.uk/guidance/ng69',
    },
    {
      id: 'apa-eating-disorders-2023',
      type: 'article',
      title: 'Practice Guideline for the Treatment of Eating Disorders',
      authors: ['American Psychiatric Association'],
      source: 'American Journal of Psychiatry',
    },
    {
      id: 'oconnor-refeeding-2016',
      type: 'article',
      title: 'Higher-Calorie Refeeding Is Safe for Hospitalized Adolescents with Restrictive Eating Disorders',
      authors: ['O\'Connor G', 'Nicholls D', 'Hudson L', 'Singhal A'],
      source: 'Journal of Adolescent Health',
    },
    {
      id: 'watson-gwas-an-2019',
      type: 'article',
      title: 'Genome-wide association study identifies eight risk loci and implicates metabo-psychiatric origins for anorexia nervosa',
      authors: ['Watson HJ', 'Yilmaz Z', 'Thornton LM', 'et al.'],
      source: 'Nature Genetics',
      url: 'https://doi.org/10.1038/s41588-019-0439-2',
    },
  ],

  crossReferences: [
    { targetId: 'nutrition-macronutrients', targetType: 'topic', relationship: 'related', label: 'Macronutrients' },
    { targetId: 'nutrition-micronutrients', targetType: 'topic', relationship: 'related', label: 'Micronutrients' },
    { targetId: 'nutrition-obesity', targetType: 'topic', relationship: 'related', label: 'Obesity Nutrition' },
    { targetId: 'endocrine-amenorrhea', targetType: 'condition', relationship: 'related', label: 'Amenorrhea' },
    { targetId: 'psychiatry-eating-disorders', targetType: 'condition', relationship: 'related', label: 'Eating Disorders (Psychiatry)' },
    { targetId: 'musculoskeletal-osteoporosis', targetType: 'condition', relationship: 'related', label: 'Osteoporosis' },
  ],

  tags: {
    systems: ['gastrointestinal', 'endocrine', 'cardiovascular', 'musculoskeletal', 'neurological'],
    topics: ['nutrition', 'eating-disorders', 'psychiatry', 'metabolic', 'refeeding-syndrome'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'psychiatry', 'pediatrics', 'family-medicine'],
    },
  },

  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default eatingDisordersNutrition;
