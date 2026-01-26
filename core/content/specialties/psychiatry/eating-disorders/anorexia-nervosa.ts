/**
 * Anorexia Nervosa
 *
 * Comprehensive educational content on anorexia nervosa,
 * its diagnosis, medical complications, and treatment.
 */

import { EducationalContent } from '../../../types';

export const anorexiaNervosaContent: EducationalContent = {
  id: 'psychiatry-anorexia-nervosa',
  type: 'condition',
  name: 'Anorexia Nervosa',
  alternateNames: ['AN', 'Anorexia'],

  levels: {
    1: {
      level: 1,
      summary: 'Anorexia nervosa is an eating disorder where a person restricts food intake, has an intense fear of gaining weight, and sees their body differently than others do.',
      explanation: `Anorexia nervosa is a serious eating disorder that affects both the mind and body.

**What Happens:**

- Eating very little food or skipping meals
- Intense fear of gaining weight, even when underweight
- Seeing yourself as overweight when you're actually thin
- Your body weight becomes very low
- Often excessive exercise
- Avoiding eating with others

**Warning Signs:**

- Major weight loss
- Refusing to eat certain foods or entire food groups
- Wearing baggy clothes to hide weight loss
- Making excuses to avoid meals
- Feeling cold all the time
- Thinning hair
- Feeling tired and weak
- For girls: periods stopping

**Important to Know:**

- Anorexia is NOT about vanity or wanting attention
- It's a real illness that affects the brain
- It can affect anyone - any gender, any background
- It's one of the most dangerous mental health conditions
- Full recovery IS possible with treatment

**Why It's Serious:**

Anorexia can cause:
- Heart problems
- Bone weakness
- Organ damage
- In severe cases, it can be life-threatening

**Getting Help:**

Treatment works and includes:
- Nutritional rehabilitation (eating more)
- Therapy to change thoughts about food and body
- Medical monitoring
- Family support
- Sometimes medication for other symptoms`,
      keyTerms: [
        { term: 'eating disorder', definition: 'A mental health condition involving unhealthy patterns of eating' },
        { term: 'body image', definition: 'How you see and feel about your own body' },
        { term: 'restriction', definition: 'Limiting food intake severely' },
      ],
      analogies: [
        'Anorexia is like wearing distorted glasses that make you see your body as bigger than it really is.',
        'The fear of weight gain in anorexia is like an alarm that goes off when there\'s no real danger.',
      ],
      examples: [
        'A person might see themselves as overweight in the mirror even though everyone tells them they\'re too thin.',
        'Someone might count every calorie and refuse to eat anything they didn\'t prepare themselves.',
      ],
    },
    2: {
      level: 2,
      summary: 'Anorexia nervosa is characterized by restriction of energy intake leading to low body weight, intense fear of weight gain, and disturbance in body image perception, with restricting and binge-eating/purging subtypes.',
      explanation: `**Diagnostic Criteria:**

A. Restriction of energy intake leading to significantly low body weight (less than minimally normal for age, sex, developmental trajectory)

B. Intense fear of gaining weight or becoming fat, or persistent behavior that interferes with weight gain

C. Disturbance in body weight/shape experience, undue influence of weight on self-evaluation, or lack of recognition of low weight seriousness

**Subtypes:**

*Restricting Type:*
- Weight loss through dieting, fasting, excessive exercise
- No binge eating or purging in last 3 months

*Binge-Eating/Purging Type:*
- Regular binge eating or purging (vomiting, laxatives, diuretics)
- Even small amounts may trigger purging

**Severity (based on BMI for adults):**
- Mild: BMI ≥17
- Moderate: BMI 16-16.99
- Severe: BMI 15-15.99
- Extreme: BMI <15

**Common Features:**

- Obsession with food, recipes, feeding others
- Elaborate food rituals
- Excessive exercise
- Perfectionism
- Rigidity
- Difficulty recognizing emotional states
- Social withdrawal

**Medical Complications:**

*Cardiovascular:*
- Bradycardia
- Hypotension
- Arrhythmias

*Endocrine:*
- Amenorrhea
- Osteoporosis
- Thyroid changes
- Growth hormone alterations

*Other:*
- Lanugo (fine body hair)
- Hair loss
- Cold intolerance
- Constipation
- Electrolyte imbalances

**Treatment:**

*Outpatient:*
- Nutritional rehabilitation
- Psychotherapy (CBT-E, FBT for adolescents)
- Medical monitoring

*Inpatient (if medically unstable):*
- Refeeding under medical supervision
- Cardiac monitoring
- Electrolyte correction

*Family-Based Treatment (for adolescents):*
- Parents take control of refeeding
- Most effective for adolescent AN
- Three phases`,
      keyTerms: [
        { term: 'BMI', definition: 'Body Mass Index, a measure of weight relative to height' },
        { term: 'purging', definition: 'Behaviors to compensate for eating, like vomiting or laxative use' },
        { term: 'amenorrhea', definition: 'Absence of menstrual periods' },
        { term: 'FBT', definition: 'Family-Based Treatment, the most effective therapy for adolescent AN' },
      ],
    },
    3: {
      level: 3,
      summary: 'AN involves complex neurobiology including altered reward processing, serotonin dysfunction, and cognitive inflexibility. Treatment prioritizes weight restoration, with FBT for adolescents and CBT-E for adults, alongside medical stabilization.',
      explanation: `**DSM-5 Criteria:**

A. Restriction of energy intake relative to requirements, leading to significantly low body weight (considering age, sex, development, physical health)

B. Intense fear of gaining weight/becoming fat, OR persistent behavior interfering with weight gain, despite low weight

C. Disturbance in body weight/shape experience, undue influence on self-evaluation, OR persistent lack of recognition of seriousness

**Specifiers:**
- Subtype: Restricting vs. Binge-eating/purging
- Severity: Mild (BMI ≥17), Moderate (16-16.99), Severe (15-15.99), Extreme (<15)
- Remission: Partial (weight restored but some symptoms) or Full

**Epidemiology:**
- Prevalence: ~0.4% in young women
- Male:Female ratio ~1:10
- Peak onset: 14-18 years
- Highest mortality of any psychiatric disorder

**Neurobiology:**

*Reward Processing:*
- Altered striatal response to food
- Reduced reward sensitivity
- Starvation may be rewarding (aberrant)

*Serotonin:*
- 5-HT dysregulation persists after recovery
- Anxious, perfectionistic temperament
- May predispose to AN

*Cognitive Features:*
- Weak central coherence (detail focus)
- Set-shifting difficulties (cognitive inflexibility)
- Persist after weight restoration

*Brain Changes:*
- Gray matter reduction (reversible with weight restoration)
- White matter changes
- Altered connectivity

**Medical Complications:**

*Cardiac:*
- Bradycardia, hypotension
- QTc prolongation (arrhythmia risk)
- Mitral valve prolapse
- Pericardial effusion
- Heart failure (with refeeding)

*Metabolic:*
- Hypoglycemia
- Elevated liver enzymes
- Hypercholesterolemia (paradoxical)

*Electrolytes:*
- Hypokalemia (especially with purging)
- Hypophosphatemia (refeeding syndrome)
- Hyponatremia
- Hypomagnesemia

*Endocrine:*
- Hypothalamic amenorrhea
- Low estrogen/testosterone
- Elevated cortisol
- Thyroid: Low T3 ("sick euthyroid")
- Bone: Osteopenia/osteoporosis

*Refeeding Syndrome:*
- Life-threatening electrolyte shifts
- Especially phosphorus drop
- Cardiac, neurological complications
- Gradual refeeding required

**Treatment:**

*Weight Restoration:*
- Priority for medical stability
- Often 1-1.5 kg/week inpatient
- Nutritional counseling
- Meal support

*Psychotherapy:*

Adolescents:
- Family-Based Treatment (FBT/Maudsley): Gold standard
- Phase 1: Parents control eating
- Phase 2: Gradual return of autonomy
- Phase 3: Adolescent development issues

Adults:
- CBT-E (Enhanced): Addresses core psychopathology
- Specialist Supportive Clinical Management
- MANTRA (Maudsley Model)

*Pharmacotherapy:*
- No medication for core AN symptoms
- Olanzapine: Some evidence for weight gain
- Treat comorbidities (depression, OCD)
- SSRIs: Not effective in low weight state

*Levels of Care:*
- Outpatient
- Intensive outpatient (IOP)
- Partial hospitalization (PHP)
- Residential
- Inpatient (medical or psychiatric)`,
      keyTerms: [
        { term: 'refeeding syndrome', definition: 'Dangerous electrolyte shifts when refeeding severely malnourished patients' },
        { term: 'central coherence', definition: 'Ability to see big picture; often weak in AN (focus on details)' },
        { term: 'set-shifting', definition: 'Mental flexibility to switch between concepts; impaired in AN' },
        { term: 'CBT-E', definition: 'Enhanced Cognitive Behavior Therapy, addresses overvaluation of shape/weight' },
      ],
    },
    4: {
      level: 4,
      summary: 'AN pathophysiology involves genetic vulnerability, altered reward and interoceptive processing, serotonergic and dopaminergic dysfunction, and cognitive rigidity. Treatment requires weight restoration with careful refeeding, evidence-based psychotherapy, and management of severe medical complications.',
      explanation: `**Pathophysiology:**

*Genetic Factors:*
- Heritability: 50-80%
- GWAS: Negative genetic correlation with BMI
- Metabolic component suggested
- Overlaps with OCD, depression genetics
- Candidate genes: Serotonin, dopamine related

*Neurocircuitry:*

Reward Processing:
- Striatal hypoactivation to food rewards
- Altered dopamine signaling
- Food may not be reinforcing
- Restrictive eating may become rewarding

Interoception:
- Insula dysfunction
- Poor recognition of hunger, satiety
- Altered body awareness
- Contributes to body image disturbance

Cognitive Control:
- Excessive top-down control
- Prefrontal overactivity
- Hypercontrol of eating urges
- Cognitive rigidity

*Serotonin:*
- Elevated 5-HT activity (trait, not just state)
- 5-HT2A receptor alterations
- Persists after recovery
- May relate to anxiety, perfectionism

*Starvation Effects:*
- Many symptoms improve with refeeding
- Brain volume recovers
- Cognition improves
- Some alterations persist (trait markers)

**Medical Management:**

*Refeeding Protocol:*
- Start low: 1000-1500 kcal/day (depends on severity)
- Increase gradually: 200-300 kcal every 2-3 days
- Monitor phosphorus, potassium, magnesium daily
- Thiamine supplementation
- Phosphate supplementation as needed
- Cardiac monitoring (telemetry if severe)

*Hospitalization Criteria:*
- HR <50, BP <90/60
- Orthostatic changes
- Arrhythmia, QTc prolongation
- <75% ideal body weight
- Rapid weight loss
- Electrolyte disturbances
- Acute medical complications
- Failed outpatient treatment
- Suicidal ideation

**Psychotherapy Details:**

*FBT for Adolescents:*
- 15-20 sessions over 9-12 months
- Phase 1: Parents take control of eating
- Phase 2: Gradual return of eating autonomy
- Phase 3: General adolescent development
- Most effective treatment for adolescent AN
- 50% remission at 1 year

*CBT-E for Adults:*
- 20-40 sessions
- Addresses overvaluation of shape/weight
- Behavioral experiments
- Cognitive restructuring
- Modules: Mood intolerance, perfectionism, low self-esteem

*Other Approaches:*
- Focal Psychodynamic Therapy
- SSCM (Specialist Supportive Clinical Management)
- MANTRA (Maudsley Model of Anorexia Treatment for Adults)

**Pharmacotherapy:**

*Olanzapine:*
- Most evidence for any medication
- Modest weight gain effect
- May reduce anxiety around eating
- Dose: 2.5-10mg

*Not Effective:*
- SSRIs (not effective in low weight state)
- May help after weight restoration for comorbidity

*After Recovery:*
- SSRIs may help prevent relapse (limited evidence)
- Treat comorbid depression, OCD, anxiety

**Prognosis:**

- ~50% recover
- ~30% improve significantly
- ~20% chronic course
- Mortality: 5-10% (highest of psychiatric disorders)
- SMR ~6 (standardized mortality ratio)
- Death from medical complications or suicide`,
      keyTerms: [
        { term: 'interoception', definition: 'Sensing internal body states like hunger, satiety, heart rate' },
        { term: 'SMR', definition: 'Standardized mortality ratio; ~6 in AN means 6x expected death rate' },
        { term: 'sick euthyroid', definition: 'Low T3 in severe illness without true thyroid disease' },
        { term: 'orthostatic changes', definition: 'HR/BP changes with standing, indicates cardiovascular instability' },
      ],
      clinicalNotes: 'Medical stabilization is priority. Refeeding syndrome is life-threatening - gradual refeeding with monitoring. FBT for adolescents. Consider olanzapine. SSRIs not effective at low weight. Monitor bone health. Hospitalize if medically unstable. Chronic AN challenging.',
    },
    5: {
      level: 5,
      summary: 'Contemporary AN research explores metabolic-psychiatric intersections, develops targeted treatments for cognitive inflexibility and interoceptive dysfunction, and investigates novel therapeutics including neuromodulation and pharmacological agents for treatment resistance.',
      explanation: `**Metabolic-Psychiatric Model:**

*Paradigm Shift:*
- AN as metabo-psychiatric disorder
- Negative genetic correlation with BMI/obesity
- Metabolic factors may drive persistence
- Weight restoration challenged by biology
- May explain high relapse rates

*Implications:*
- Higher target weights may be needed
- Metabolic adaptation recognized
- Treatment duration requirements
- Prevention of relapse

**Neuroimaging Research:**

*Altered Circuits:*
- Insula: Interoceptive processing
- Striatum: Reward
- Prefrontal: Cognitive control
- ACC: Conflict monitoring

*Predictors:*
- Pre-treatment neural activity may predict response
- Connectivity patterns
- Recovery-associated changes

*Biomarkers:*
- Neuroimaging signatures
- Cognitive testing profiles
- Still research phase

**Novel Treatment Approaches:**

*Neuromodulation:*

TMS:
- DLPFC targeting
- Reducing food-related anxiety
- Early research

tDCS:
- Prefrontal stimulation
- Cognitive flexibility enhancement
- Preliminary data

Deep Brain Stimulation:
- For severe, treatment-refractory
- Nucleus accumbens target
- Case reports only

*Pharmacological:*

Dronabinol:
- Cannabinoid agonist
- Appetite stimulation
- Mixed results

Intranasal Oxytocin:
- Social cognition
- May reduce body image concerns
- Early research

D-cycloserine:
- Augment therapy
- Enhance extinction learning
- Limited evidence in AN

*Novel Psychotherapies:*

CRT (Cognitive Remediation Therapy):
- Targets cognitive rigidity
- Set-shifting training
- Adjunct to other treatments
- Improves treatment engagement

MANTRA:
- Interpersonal maintaining factors
- Thinking styles
- Emotional processing
- Manualized for adults

Interoceptive Exposure:
- Address fear of fullness
- Hunger/satiety awareness
- Body-focused interventions

**Special Populations:**

*Severe and Enduring AN (SE-AN):*
- Duration >7 years
- Multiple treatment failures
- May need harm reduction approach
- Quality of life focus
- Ethical considerations

*Males:*
- Underdiagnosed
- Similar presentation but later detection
- Muscle concerns may predominate
- Adapted treatment needed

*Atypical AN:*
- Higher weight despite restriction
- Same psychopathology
- Same medical risks (relative to starting weight)
- DSM-5 OSFED category

**Research Priorities:**

1. Metabolic aspects and weight set point
2. Biomarkers for prediction/personalization
3. Treatments for cognitive rigidity
4. Neuromodulation approaches
5. Severe and enduring AN interventions
6. Prevention strategies
7. Male AN
8. Long-term outcome studies

**Digital and Scalable:**

- App-based meal support
- Telehealth FBT effective
- Internet-based CBT
- Exposure meal apps
- Recovery support platforms`,
      keyTerms: [
        { term: 'metabo-psychiatric', definition: 'Framework viewing AN as having both metabolic and psychiatric components' },
        { term: 'SE-AN', definition: 'Severe and Enduring Anorexia Nervosa, chronic treatment-refractory cases' },
        { term: 'CRT', definition: 'Cognitive Remediation Therapy, targets cognitive rigidity and set-shifting' },
        { term: 'atypical AN', definition: 'AN features without low weight, same severity of psychopathology' },
      ],
      clinicalNotes: `Current practice:
- Weight restoration priority
- FBT for adolescents (gold standard)
- CBT-E for adults
- Medical monitoring essential
- Refeeding syndrome prevention
- Olanzapine may help
- Treat comorbidities after weight restoration

Emerging:
- Metabolic model informing treatment
- CRT as adjunct
- Interoceptive approaches
- Neuromodulation research
- SE-AN harm reduction frameworks

Key challenges:
- Ego-syntonic symptoms
- Treatment engagement
- High relapse rates
- Chronic/treatment-resistant cases
- Medical fragility`,
    },
  },

  media: [
    {
      id: 'an-medical-complications',
      type: 'diagram',
      filename: 'an_medical_complications.svg',
      title: 'Medical Complications of Anorexia Nervosa',
      description: 'Systems affected by malnutrition in AN',
    },
  ],

  citations: [
    {
      id: 'dsm-5-an',
      type: 'textbook',
      title: 'Diagnostic and Statistical Manual of Mental Disorders, 5th Edition',
      authors: ['American Psychiatric Association'],
      source: 'American Psychiatric Publishing',
      chapter: 'Feeding and Eating Disorders',
    },
  ],

  crossReferences: [
    { targetId: 'psychiatry-bulimia-nervosa', targetType: 'condition', relationship: 'related', label: 'Bulimia Nervosa' },
    { targetId: 'psychiatry-binge-eating-disorder', targetType: 'condition', relationship: 'related', label: 'BED' },
    { targetId: 'psychiatry-body-dysmorphic-disorder', targetType: 'condition', relationship: 'related', label: 'BDD' },
  ],

  tags: {
    systems: ['nervous', 'endocrine', 'cardiovascular'],
    topics: ['psychiatry', 'eating disorders'],
    keywords: ['anorexia', 'eating disorder', 'weight loss', 'restriction', 'body image'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['psychiatry', 'medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default anorexiaNervosaContent;
