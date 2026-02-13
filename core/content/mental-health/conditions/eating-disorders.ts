/**
 * Eating Disorders - Patient Education Content
 *
 * Comprehensive education about eating disorders including anorexia nervosa,
 * bulimia nervosa, and binge eating disorder. Emphasizes that eating disorders
 * are serious but treatable medical conditions.
 */

import { EducationalContent } from '../../types';

export const eatingDisordersContent: EducationalContent = {
  id: 'mental-health-eating-disorders',
  type: 'condition',
  name: 'Eating Disorders',
  alternateNames: ['Anorexia Nervosa', 'Bulimia Nervosa', 'Binge Eating Disorder', 'ARFID'],

  levels: {
    1: {
      level: 1,
      summary: 'Eating disorders are serious mental health conditions involving unhealthy relationships with food, eating, and body image. They are not choices and require professional treatment.',
      explanation: `**What Are Eating Disorders?**

Eating disorders are serious conditions that affect how people eat, think about food, and see their bodies. They are NOT about vanity or choice - they are real medical conditions that need treatment.

**Main Types:**

**Anorexia Nervosa:**
- Eating very little food
- Intense fear of gaining weight
- Seeing yourself as overweight even when underweight
- Can be life-threatening

**Bulimia Nervosa:**
- Eating large amounts of food (binging)
- Then trying to "undo" it (purging) through vomiting, laxatives, or extreme exercise
- Feeling out of control during binges
- Often at normal weight

**Binge Eating Disorder:**
- Eating large amounts of food quickly
- Feeling out of control while eating
- Feeling ashamed, guilty, or upset afterward
- NOT followed by purging

**Warning Signs:**
- Dramatic weight changes
- Being obsessed with calories, dieting, or food
- Excuses to avoid eating with others
- Going to the bathroom right after meals
- Excessive exercise
- Withdrawing from friends and activities
- Always feeling cold, tired, or dizzy

**Important Facts:**

- Eating disorders are NOT a choice
- Anyone can develop an eating disorder (any age, gender, size)
- They are serious medical conditions
- They are very treatable
- Recovery is possible
- Earlier treatment = better outcomes

**Getting Help:**

Treatment usually includes:
- Medical monitoring (eating disorders affect the body)
- Therapy (to address thoughts and behaviors)
- Nutritional counseling
- Sometimes medication
- Support from family and friends

If you or someone you know is struggling, please reach out to a healthcare provider. These conditions are treatable, and recovery is real.`,
      keyTerms: [
        { term: 'eating disorder', definition: 'A serious mental health condition involving unhealthy eating behaviors and thoughts' },
        { term: 'anorexia nervosa', definition: 'An eating disorder involving severe food restriction and fear of gaining weight' },
        { term: 'bulimia nervosa', definition: 'An eating disorder involving binge eating followed by purging behaviors' },
        { term: 'binge eating', definition: 'Eating large amounts of food quickly while feeling out of control' },
      ],
      analogies: [
        'An eating disorder is not about food any more than drowning is about water - it is a response to deeper struggles.',
        'Recovery from an eating disorder is like learning to hear your body\'s signals again after the volume was turned off.',
        'Eating disorders lie - they tell you things about yourself and food that are not true.',
      ],
      examples: [
        'Someone with anorexia might skip meals, exercise for hours, and still see themselves as "too big" in the mirror.',
        'A person with bulimia might eat normally around others but binge and purge in private.',
        'Someone with binge eating disorder might eat very quickly when alone and feel tremendous shame afterward.',
      ],
    },
    2: {
      level: 2,
      summary: 'Eating disorders include anorexia nervosa, bulimia nervosa, binge eating disorder, and ARFID. They involve psychological, behavioral, and medical components. Treatment is multidisciplinary, involving medical monitoring, psychotherapy (especially FBT for adolescents, CBT-E for adults), and nutritional rehabilitation.',
      explanation: `**Understanding Eating Disorders:**

Eating disorders are complex conditions involving disturbances in eating behavior, body image, and often psychological functioning. They have the highest mortality rate of any mental health condition, but are highly treatable with appropriate care.

**Anorexia Nervosa:**

*Key Features:*
- Restriction of food intake leading to significantly low body weight
- Intense fear of gaining weight or becoming fat
- Disturbance in body image (not recognizing low weight as problematic)
- Undue influence of weight/shape on self-worth

*Subtypes:*
- Restricting type: Primarily restricts food, no binging/purging
- Binge-eating/purging type: Has binge/purge episodes

*Medical Complications:*
- Bradycardia, hypotension
- Electrolyte abnormalities
- Bone loss (osteoporosis)
- Amenorrhea
- Cardiac complications

**Bulimia Nervosa:**

*Key Features:*
- Recurrent binge eating episodes
- Recurrent compensatory behaviors (vomiting, laxatives, fasting, excessive exercise)
- Self-worth overly influenced by body shape and weight
- At least weekly for 3 months

*Medical Complications:*
- Electrolyte imbalances (hypokalemia)
- Dental problems (erosion from vomiting)
- Esophageal damage
- Edema

**Binge Eating Disorder:**

*Key Features:*
- Recurrent binge eating episodes
- Episodes characterized by: eating rapidly, eating until uncomfortably full, eating when not hungry, eating alone due to embarrassment, feeling disgusted/depressed/guilty
- Marked distress about binge eating
- NOT followed by compensatory behaviors
- At least weekly for 3 months

**Avoidant/Restrictive Food Intake Disorder (ARFID):**
- Avoidance of food leading to nutritional deficiency
- NOT related to body image concerns
- May be due to sensory issues, fear of choking, or lack of interest in eating

**Treatment Approaches:**

*Medical Stabilization:*
- Priority when medically compromised
- Address electrolytes, vital signs, refeeding
- May require inpatient or residential care

*Psychotherapy:*
- Family-Based Treatment (FBT/Maudsley): First-line for adolescents
- CBT-E (Enhanced CBT): First-line for adults
- Interpersonal therapy
- Dialectical behavior therapy

*Nutritional Rehabilitation:*
- Registered dietitian involvement
- Structured meal plans
- Gradual normalization of eating

*Medication:*
- Fluoxetine for bulimia nervosa
- Lisdexamfetamine for binge eating disorder
- Limited role in anorexia nervosa`,
      keyTerms: [
        { term: 'binge eating', definition: 'Eating a large amount of food in a discrete period with sense of loss of control' },
        { term: 'purging', definition: 'Compensatory behaviors to prevent weight gain (vomiting, laxatives, excessive exercise)' },
        { term: 'FBT', definition: 'Family-Based Treatment (Maudsley approach) - first-line for adolescent anorexia' },
        { term: 'CBT-E', definition: 'Enhanced Cognitive Behavioral Therapy - evidence-based treatment for eating disorders' },
        { term: 'refeeding syndrome', definition: 'Dangerous electrolyte shifts when reintroducing nutrition to malnourished patients' },
      ],
      analogies: [
        'FBT puts parents in charge of feeding like a cast supports a broken bone - temporary support while healing happens.',
        'Recovery is not a straight line - there are ups and downs, but the overall direction matters most.',
      ],
    },
    3: {
      level: 3,
      summary: 'Eating disorders involve complex interplay of genetic vulnerability, neurobiological factors, and environmental triggers. DSM-5 criteria differentiate AN, BN, BED, and ARFID. First-line treatments: FBT for adolescent AN, CBT-E for adult AN/BN/BED. Medical monitoring essential given high morbidity/mortality.',
      explanation: `**DSM-5 Diagnostic Criteria:**

**Anorexia Nervosa:**
A. Restriction of energy intake leading to significantly low body weight
B. Intense fear of gaining weight or persistent behavior preventing weight gain
C. Disturbance in body image, undue influence of weight on self-worth, or lack of recognition of low weight severity

Subtypes: Restricting; Binge-eating/Purging
Severity: Based on BMI

**Bulimia Nervosa:**
A. Recurrent binge eating (amount + loss of control)
B. Recurrent compensatory behaviors
C. Both occur at least weekly for 3 months
D. Self-evaluation unduly influenced by body shape/weight
E. Does not occur exclusively during AN

Severity: Based on compensatory behavior frequency

**Binge Eating Disorder:**
A. Recurrent binge eating episodes with:
   1. Eating more rapidly
   2. Eating until uncomfortably full
   3. Eating large amounts when not hungry
   4. Eating alone due to embarrassment
   5. Feeling disgusted, depressed, guilty afterward
B. Marked distress about binge eating
C. At least weekly for 3 months
D. Not associated with compensatory behaviors

**ARFID:**
- Eating disturbance with failure to meet nutritional needs
- Not due to lack of food, cultural practice, or body image
- Associated with weight loss, nutritional deficiency, dependence on supplements, or psychosocial interference

**Neurobiological Basis:**

*Genetics:*
- Heritability: 50-80% for AN
- Shared genetics with OCD, anxiety
- Metabolic gene associations

*Neurotransmitters:*
- Serotonin: Implicated in satiety, mood
- Dopamine: Reward processing altered
- Opioid system: Altered in starvation

*Brain Circuits:*
- Altered interoception (insula)
- Reward processing differences (striatum)
- Self-referential processing (default mode network)
- Cognitive control (prefrontal cortex)

**Medical Monitoring:**

*Vital Signs:*
- Bradycardia (<60 bpm)
- Hypotension
- Orthostatic changes

*Laboratory:*
- Electrolytes (K, Mg, Phos)
- Glucose
- CBC
- Liver/kidney function
- Thyroid

*Other:*
- ECG (QTc prolongation)
- Bone density (if prolonged AN)
- Dental evaluation (BN)

**Treatment:**

*Levels of Care:*
- Outpatient
- Intensive outpatient (IOP)
- Partial hospitalization (PHP)
- Residential
- Inpatient medical
- Inpatient psychiatric

*FBT for Adolescent AN:*
- Phase 1: Parents take charge of feeding
- Phase 2: Gradual return of control to adolescent
- Phase 3: Establishing healthy independence
- 15-20 sessions over 9-12 months

*CBT-E:*
- Addresses eating disorder psychopathology
- Focus on over-evaluation of shape/weight
- Regular eating establishment
- Cognitive restructuring
- Typically 20 sessions

*Medications:*
- AN: No FDA-approved medications; olanzapine may help (limited evidence)
- BN: Fluoxetine 60mg (FDA-approved)
- BED: Lisdexamfetamine (FDA-approved)`,
      keyTerms: [
        { term: 'refeeding syndrome', definition: 'Metabolic complications from rapid nutrition reintroduction in malnutrition' },
        { term: 'interoception', definition: 'Perception of internal body signals (hunger, satiety)' },
        { term: 'over-evaluation of shape/weight', definition: 'Core cognitive feature of eating disorders' },
        { term: 'orthorexia', definition: 'Obsessive focus on "healthy" eating (not a DSM diagnosis)' },
        { term: 'Maudsley approach', definition: 'Another name for Family-Based Treatment (FBT)' },
      ],
      clinicalNotes: 'Medical stabilization takes priority. Monitor for refeeding syndrome (phosphorus drops). FBT is first-line for adolescent AN. Hospitalization criteria: <75% ideal body weight, severe bradycardia/orthostasis, electrolyte abnormalities, suicidality. Fluoxetine effective for BN at 60mg.',
    },
    4: {
      level: 4,
      summary: 'Eating disorder pathophysiology involves altered reward and interoceptive processing, genetic vulnerability, and environmental triggers. Treatment selection based on diagnosis, age, and severity. Refeeding requires careful medical management. Long-term outcomes variable; early intervention critical.',
      explanation: `**Pathophysiology - Integrated Model:**

*Genetic Architecture:*
- Heritability substantial (50-80% for AN)
- Polygenic with metabolic gene involvement
- GWAS: Metabolic and psychiatric crossover
- Shared genetics with OCD, anxiety, depression
- Metabo-psychiatric disorder concept

*Neurobiology:*

Interoception:
- Insula dysfunction
- Impaired hunger/satiety recognition
- Altered body perception
- Persists into recovery

Reward Processing:
- Striatal differences
- Reduced reward sensitivity (AN)
- Enhanced reward from restriction (paradox)
- Altered dopamine signaling

Cognitive Control:
- Enhanced in AN (prefrontal)
- May enable restriction despite hunger
- Cognitive rigidity
- Set-shifting difficulties

Serotonin:
- 5-HT alterations
- Anxiety and perfectionism link
- Changes with malnutrition
- Target of fluoxetine

*Starvation Effects:*
- Perpetuate eating disorder cognitions
- Depression, anxiety worsen
- Cognitive impairment
- Must address malnutrition first

**Medical Management:**

*Refeeding Syndrome:*
- Occurs with rapid refeeding after starvation
- Phosphorus depletion (most important)
- Thiamine deficiency
- Fluid shifts
- Cardiac complications
- Prevention: Start low, go slow; supplement phosphorus and thiamine

*Cardiovascular:*
- Bradycardia (vagal tone)
- QTc prolongation (electrolytes)
- Mitral valve prolapse
- Sudden death risk
- ECG monitoring essential

*Endocrine:*
- Hypothalamic amenorrhea
- Low T3 syndrome
- Cortisol elevation
- Growth hormone resistance
- Bone loss (irreversible if prolonged)

**Treatment by Diagnosis:**

*Anorexia Nervosa:*
- Weight restoration priority
- FBT for adolescents (first-line)
- CBT-E, SSCM, MANTRA for adults
- Medications: Limited role; olanzapine may help
- Higher level of care often needed

*Bulimia Nervosa:*
- CBT-E first-line
- Fluoxetine 60mg augments therapy
- DBT if emotion dysregulation prominent
- Typically outpatient

*Binge Eating Disorder:*
- CBT-E first-line
- Lisdexamfetamine (FDA-approved)
- Topiramate (off-label)
- DBT, IPT also effective
- Weight management secondary

**Prognosis:**

*Anorexia Nervosa:*
- ~50% full recovery
- ~30% partial recovery
- ~20% chronic course
- Mortality: 5-10% (highest of psychiatric disorders)
- Early intervention improves outcomes

*Bulimia Nervosa:*
- ~50-70% achieve remission
- Better prognosis than AN
- CBT highly effective

*BED:*
- Generally good treatment response
- CBT, medications effective
- Weight management separate issue

**Special Populations:**

*Males:*
- Underrecognized
- May present differently
- Muscle dysmorphia
- LGBTQ+ elevated risk

*Athletes:*
- RED-S (Relative Energy Deficiency in Sport)
- Female athlete triad
- Sport-specific pressures

*Type 1 Diabetes:*
- "Diabulimia" - insulin omission
- Serious medical risk
- Requires integrated care`,
      keyTerms: [
        { term: 'metabo-psychiatric', definition: 'Concept of AN as both metabolic and psychiatric disorder' },
        { term: 'RED-S', definition: 'Relative Energy Deficiency in Sport - broader than female athlete triad' },
        { term: 'SSCM', definition: 'Specialist Supportive Clinical Management - treatment for AN' },
        { term: 'MANTRA', definition: 'Maudsley Model of Anorexia Nervosa Treatment for Adults' },
        { term: 'diabulimia', definition: 'Insulin manipulation for weight control in Type 1 diabetes' },
      ],
      clinicalNotes: 'Refeeding syndrome prevention: Start 10-20 kcal/kg/day, advance slowly, supplement phosphorus and thiamine prophylactically. Monitor electrolytes daily initially. Long-term bone health compromised in prolonged AN. FBT most evidence-based for adolescent AN. Fluoxetine 60mg for BN (not lower doses).',
    },
    5: {
      level: 5,
      summary: 'Contemporary eating disorder research explores neurobiological mechanisms, genetic insights revealing metabolic-psychiatric overlap, and novel treatments including neuromodulation and psychedelics. Precision medicine approaches aim to match treatments to phenotypes. Implementation science focuses on disseminating evidence-based treatments.',
      explanation: `**Translational Neuroscience:**

*Genetic Insights:*
- GWAS reveals metabolic associations
- Negative genetic correlation with BMI, fat mass
- Positive correlation with physical activity
- Metabo-psychiatric conceptualization
- Implications for understanding weight suppression

*Neuroimaging Developments:*
- Altered anterior insula in interoception
- Reward circuit differences
- Connectivity patterns
- Computational modeling of decision-making
- Changes with recovery (partial normalization)

*Biomarker Research:*
- Ghrelin, leptin profiles
- Gut-brain axis
- Inflammatory markers
- Microbiome alterations
- Not yet clinically validated

**Novel Therapeutic Approaches:**

*Neuromodulation:*
- rTMS: Targeting DLPFC, insula
- tDCS: Prefrontal stimulation
- Deep brain stimulation (research in severe AN)
- Mixed results, ongoing research

*Psychedelic-Assisted Therapy:*
- Psilocybin studies initiated
- May address cognitive rigidity
- Body image alterations
- Research stage

*Pharmacological:*
- Olanzapine for AN: Some benefit for weight gain
- Dronabinol: Cannabinoid, limited evidence
- Intranasal oxytocin: Social/emotional processing
- Novel targets under investigation

*Technology-Enhanced:*
- Digital CBT delivery
- Apps for self-monitoring
- Virtual reality body image work
- AI-assisted interventions

**Precision Medicine:**

*Phenotyping:*
- Restricting vs binge-purge AN
- Metabolic subgroups
- Cognitive profile matching
- Treatment response prediction

*Personalized Treatment Selection:*
- Matching to comorbidity profile
- Cognitive remediation for rigid thinking
- DBT for emotional dysregulation
- Stepped care based on response

**Early Intervention:**

*Risk Identification:*
- Prodromal features
- Genetic risk factors
- Environmental triggers
- Prevention programs

*First-Episode Programs:*
- Rapid access to care
- Early weight restoration
- Improved outcomes with early treatment
- Duration of illness matters

**Implementation Science:**

*Dissemination Challenges:*
- FBT training availability
- CBT-E fidelity
- Higher level of care access
- Insurance coverage issues

*Training Models:*
- Online FBT training
- Supervision protocols
- Quality assurance
- Scaling evidence-based treatments

**Long-Term Recovery:**

*Recovery Definition Debates:*
- Full weight restoration
- Behavioral normalization
- Psychological recovery
- Quality of life
- Research definitions vary

*Maintaining Recovery:*
- Relapse prevention
- Ongoing support
- Life transitions (pregnancy, aging)
- Chronic illness management approach

**Emerging Directions:**

*Transdiagnostic Approaches:*
- CBT-E as transdiagnostic
- Shared mechanisms across diagnoses
- Emotion regulation focus
- Dimensional approaches

*Microbiome Research:*
- Gut-brain axis in eating disorders
- Starvation effects on microbiome
- Potential interventions

*Weight-Inclusive Approaches:*
- HAES (Health at Every Size)
- Reducing weight stigma
- Focus on behaviors over weight
- Controversial in AN treatment

*Advocacy and Policy:*
- Insurance parity
- Training requirements
- Research funding
- Reducing mortality`,
      keyTerms: [
        { term: 'metabo-psychiatric', definition: 'Understanding AN as having both metabolic and psychiatric components' },
        { term: 'cognitive remediation', definition: 'Treatment targeting cognitive rigidity and set-shifting in AN' },
        { term: 'body image disturbance', definition: 'Core feature involving misperception or overvaluation of appearance' },
        { term: 'HAES', definition: 'Health at Every Size - paradigm focusing on health behaviors over weight' },
        { term: 'stepped care', definition: 'Adjusting treatment intensity based on response and severity' },
      ],
      clinicalNotes: `Current best practices:
- FBT for adolescent AN (strongest evidence)
- CBT-E for adult AN/BN/BED
- Medical stabilization priority
- Fluoxetine 60mg for BN
- Lisdexamfetamine for BED

Emerging approaches:
- Neuromodulation (rTMS)
- Psilocybin research
- Precision treatment matching
- Digital therapeutics

Key challenges:
- High mortality (especially AN)
- Treatment access and cost
- Training in evidence-based treatments
- Chronic/severe presentations`,
    },
  },

  media: [
    {
      id: 'eating-disorders-comparison',
      type: 'diagram',
      filename: 'eating_disorders_types.svg',
      title: 'Types of Eating Disorders',
      description: 'Comparison of key features of AN, BN, BED, and ARFID',
    },
  ],

  citations: [
    {
      id: 'dsm5-eating',
      type: 'textbook',
      title: 'Diagnostic and Statistical Manual of Mental Disorders, 5th Edition',
      authors: ['American Psychiatric Association'],
      source: 'American Psychiatric Publishing',
      chapter: 'Feeding and Eating Disorders',
    },
  ],

  crossReferences: [
    { targetId: 'mental-health-depression', targetType: 'condition', relationship: 'related', label: 'Depression' },
    { targetId: 'mental-health-anxiety-disorders', targetType: 'condition', relationship: 'related', label: 'Anxiety Disorders' },
    { targetId: 'mental-health-ocd', targetType: 'condition', relationship: 'related', label: 'OCD' },
  ],

  tags: {
    systems: ['nervous', 'digestive', 'endocrine'],
    topics: ['mental-health', 'psychiatry', 'eating-disorders'],
    keywords: ['anorexia', 'bulimia', 'binge eating', 'eating disorder', 'FBT', 'CBT-E'],
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

export default eatingDisordersContent;
