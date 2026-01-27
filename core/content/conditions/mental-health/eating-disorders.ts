/**
 * Eating Disorders - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const eatingDisorders: EducationalContent = {
  id: 'condition-eating-disorders',
  type: 'condition',
  name: 'Eating Disorders',
  alternateNames: ['Feeding and Eating Disorders', 'ED', 'Anorexia', 'Bulimia', 'Binge Eating'],
  hpoId: 'HP:0001510',

  levels: {
    1: {
      level: 1,
      summary: 'Eating disorders are serious conditions involving extreme concerns about weight and food that can lead to severe health problems.',
      explanation: `Eating disorders are not just about food—they are serious mental health conditions that affect how people think about food, eating, and their body.

**Types of Eating Disorders:**

**Anorexia Nervosa:**
- Eating very little food
- Intense fear of gaining weight
- Seeing yourself as overweight even when very thin
- Exercising too much

**Bulimia Nervosa:**
- Eating large amounts of food (bingeing)
- Forcing yourself to vomit or using laxatives (purging)
- Feeling out of control during binges
- Strong fear of gaining weight

**Binge Eating Disorder:**
- Eating unusually large amounts of food
- Feeling unable to stop eating
- Feeling guilty, ashamed, or distressed afterward
- Unlike bulimia, no purging behaviors

**Health Risks:**
- Starvation affects every organ in the body
- Heart problems
- Bone loss and fractures
- Stomach and digestive problems
- Hormone problems
- Dental problems (from vomiting)
- Death (anorexia has the highest death rate of any mental illness)

**Treatment:**
- Medical care for physical health problems
- Therapy to change thoughts about food and body
- Nutrition counseling
- Family involvement (especially for young people)
- Sometimes medications

**Important:**
- Eating disorders can affect anyone
- They are NOT a choice
- Early treatment leads to better recovery
- Full recovery is possible`,
      keyTerms: [
        { term: 'anorexia', definition: 'An eating disorder characterized by restrictive eating and intense fear of weight gain' },
        { term: 'bulimia', definition: 'An eating disorder involving binge eating followed by purging to prevent weight gain' },
        { term: 'binge eating', definition: 'Eating an unusually large amount of food while feeling unable to stop' },
        { term: 'purging', definition: 'Trying to get rid of calories by vomiting, using laxatives, or excessive exercise' },
      ],
      analogies: [
        'An eating disorder is like a broken mirror—you see a distorted image of yourself that does not match reality.',
        'Bingeing and purging is like being on a roller coaster that never stops, with extreme highs and lows around food.',
      ],
      examples: [
        'A teenager who eats only a few bites of food each day, exercises for hours, and believes they are fat despite being dangerously underweight.',
        'Someone who eats thousands of calories in one sitting, then makes themselves vomit because of overwhelming guilt.',
      ],
      patientCounselingPoints: [
        'Eating disorders are serious but treatable medical conditions',
        'You cannot tell if someone has an eating disorder by looking at them',
        'Recovery is possible at any weight or stage of illness',
        'Family support is important for recovery',
      ],
    },
    2: {
      level: 2,
      summary: 'Eating disorders are serious mental illnesses with significant medical complications, including anorexia nervosa, bulimia nervosa, binge eating disorder, and avoidant/restrictive food intake disorder.',
      explanation: `## Anorexia Nervosa

**Diagnostic Criteria (DSM-5):**
- Restriction of energy intake leading to significantly low body weight
- Intense fear of weight gain or persistent behavior that interferes with weight gain
- Disturbance in self-perceived weight or shape
- **Denial of seriousness of low body weight**

**Subtypes:**
- **Restricting type:** Weight loss through dieting, fasting, excessive exercise
- **Binge-eating/purging type:** Regular binge eating or purging

**Medical Complications:**
- **Cardiac:** Arrhythmias, prolonged QTc, sudden death
- **Bone:** Osteoporosis, stress fractures
- **Endocrine:** Hypothalamic amenorrhea, low testosterone
- **Gastrointestinal:** Gastroparesis, constipation
- **Hematologic:** Anemia, leukopenia, thrombocytopenia
- **Dermatologic:** Lanugo, dry skin, hair loss

## Bulimia Nervosa

**Diagnostic Criteria (DSM-5):**
- Recurrent binge eating (loss of control)
- Recurrent inappropriate compensatory behavior (vomiting, laxatives, diuretics, fasting, excessive exercise)
- Binge and compensate at least once/week for 3 months
- Self-evaluation unduly influenced by body shape/weight
- Does not occur exclusively during anorexia

**Medical Complications:**
- **Electrolytes:** Hypokalemia, metabolic alkalosis (from vomiting)
- **Dental:** Enamel erosion from vomiting
- **Gastrointestinal:** Esophageal tears (Mallory-Weiss), pancreatitis
- **Cardiac:** Arrhythmias from electrolyte abnormalities
- **Swollen parotid glands**

## Binge Eating Disorder

**Diagnostic Criteria (DSM-5):**
- Recurrent binge eating (loss of control)
- Binge eating episodes include 3+ of: eating rapidly, beyond fullness, large amounts when not hungry, alone due to embarrassment, disgust/guilt afterward
- Marked distress regarding binge eating
- No regular compensatory behaviors
- At least once/week for 3 months

**Associated Features:**
- Obesity (common but not required)
- Guilt, shame about eating
- Depression and anxiety common
- Often secretive about eating

## Avoidant/Restrictive Food Intake Disorder (ARFID)

**Diagnostic Criteria (DSM-5):**
- Eating or feeding disturbance (lack of interest, sensory avoidance, concern about consequences)
- Failure to meet nutritional/energy needs
- Not related to body image
- Not explained by medical condition or other mental disorder
- Onset may be in infancy or adulthood

## Treatment Overview

**Anorexia Nervosa:**
- **Medical stabilization** if medically unstable
- **Nutritional rehabilitation:** Weight restoration goal
- **Psychotherapy:** FBT (Family-Based Treatment) for adolescents, CBT-E for adults
- **Medications:** SSRIs for comorbid depression/anxiety (not for anorexia itself)

**Bulimia Nervosa:**
- **CBT-E:** First-line psychotherapy
- **Interpersonal therapy (IPT):** Alternative
- **SSRIs:** Fluoxetine 60 mg (FDA-approved)
- **Nutritional counseling:** Regular eating pattern

**Binge Eating Disorder:**
- **CBT:** First-line
- **SSRIs:** Fluoxetine, sertraline, escitalopram
- **Vyvanse (lisdexamfetamine):** FDA-approved
- **Topiramate:** Reduces binge frequency

**ARFID:**
- **Gradual exposure** to feared/avoided foods
- **Nutritional supplementation**
- **Behavioral interventions**`,
      keyTerms: [
        { term: 'amenorrhea', definition: 'Absence of menstrual periods due to low body weight or excessive exercise' },
        { term: 'hypokalemia', definition: 'Low potassium in blood; dangerous complication of purging' },
        { term: 'lanugo', definition: 'Fine, soft hair growing on body as heat conservation in starvation' },
        { term: 'FBT', definition: 'Family-Based Treatment (Maudsley approach); most effective for adolescent anorexia' },
      ],
      patientCounselingPoints: [
        'Electrolyte imbalances from purging can be life-threatening—seek medical care',
        'Restoring weight is necessary for brain recovery from anorexia',
        'Regular eating patterns help reduce binge urges',
      ],
    },
    3: {
      level: 3,
      summary: 'Eating disorders involve dysregulated serotonin and dopamine pathways, genetic predisposition, and high mortality (especially anorexia), requiring multidisciplinary treatment including medical, nutritional, and psychological interventions.',
      explanation: `## Pathophysiology

**Neurobiology:**
- **Serotonin:** Dysregulated satiety, mood, impulse control
- **Dopamine:** Altered reward processing related to food
- **Leptin/Ghrelin:** Hunger signaling dysregulation
- **Insulin:** Altered response in malnutrition

**Genetics:**
- Heritability: 50-80% for anorexia and bulimia
- Twin studies demonstrate strong genetic contribution
- Overlap with anxiety, depression, OCD
- **Specific genes:** 5-HT2A receptor, BDNF, COMT

**Psychological Factors:**
- Perfectionism (especially anorexia)
- Harm avoidance
- Obsessive-compulsive traits
- Alexithymia (difficulty identifying emotions)

**Sociocultural Factors:**
- Thin ideal internalization
- Weight stigma
- Cultural pressures
- Social media influence

## Mortality

**Anorexia Nervosa:**
- Highest mortality of any psychiatric disorder
- Standardized mortality ratio: 5-10x general population
- Causes: Suicide (25%), medical complications (75%)
- 5-10% die within 10 years of onset

**Bulimia Nervosa:**
- Lower mortality than anorexia
- Medical complications from purging
- Suicide risk elevated

## Medical Assessment

**Anorexia Nervosa:**

| System | Assessment | Concerns |
|--------|------------|----------|
| Cardiac | ECG, orthostatics | QTc prolongation, bradycardia |
| Metabolic | BMP, Mg, Phos | Refeeding syndrome |
| Endocrine | TSH, cortisol, LH/FSH | Hypothalamic suppression |
| Hematologic | CBC | Pancytopenia |
| Bone | DEXA scan | Osteoporosis |

**Refeeding Syndrome:**
- Metabolic shifts during nutritional rehabilitation
- **Hypophosphatemia:** Most critical
- Can cause cardiac failure, respiratory failure
- Risk: BMI <16, rapid refeeding, low baseline phosphorus
- Prevention: Start at 1000-1400 kcal, advance slowly, monitor labs

**Bulimia Nervosa:**
- **Electrolytes:** K+, Cl-, HCO3- (metabolic alkalosis)
- **Physical exam:** Dental erosion, parotid enlargement, Russell's sign (knuckle calluses)
- **ECG:** If electrolyte abnormalities

## Evidence-Based Treatments

**Anorexia Nervosa:**

**Adolescents:**
- **Family-Based Treatment (FBT/Maudsley):**
  - Parents take charge of eating
  - Three phases: Weight restoration, return control, adolescent issues
  - Most effective treatment for adolescents
  - 40-50% fully recovered

**Adults:**
- **Enhanced CBT (CBT-E):**
  - Address core cognitive processes
  - Weight restoration and relapse prevention
  - Maudsley Model of Anorexia Nervosa Treatment for Adults (MANTRA)
  - Specialist Supportive Clinical Management (SSCM)

**Medications:**
- **No FDA-approved medications for anorexia**
- SSRIs for comorbid depression/anxiety
- Olanzapine may help with anxiety and weight gain

**Bulimia Nervosa:**
- **CBT-E:** Gold standard
- **Interpersonal Psychotherapy (IPT):** Slower but effective
- **Fluoxetine 60 mg:** FDA-approved
- **Topiramate:** Reduces binge frequency

**Binge Eating Disorder:**
- **CBT:** First-line
- **Lisdexamfetamine:** FDA-approved (50-70 mg)
- **SSRIs:** Often used
- **Topiramate:** Reduces binge frequency, promotes weight loss

**Nutritional Rehabilitation:**
- Registered dietitian essential
- Meal planning
- Regular eating schedule
- Challenge fear foods gradually
- Education about nutritional needs`,
      keyTerms: [
        { term: 'refeeding syndrome', definition: 'Dangerous metabolic shifts during nutritional rehabilitation in starvation; can be fatal' },
        { term: 'hypophosphatemia', definition: 'Dangerously low phosphate; hallmark of refeeding syndrome' },
        { term: "Russell's sign", definition: 'Calluses on knuckles from self-induced vomiting; sign of bulimia' },
        { term: 'CBT-E', definition: 'Enhanced Cognitive Behavioral Therapy; transdiagnostic treatment for eating disorders' },
      ],
      clinicalNotes: 'Anorexia has the highest mortality of any psychiatric disorder. Hospitalize for: BMI <15, severe electrolyte abnormalities, cardiac arrhythmias, or failure of outpatient treatment. Monitor phosphorus closely during refeeding.',
      patientCounselingPoints: [
        'Weight restoration is essential for brain and body recovery',
        'Recovering from an eating disorder often means feeling worse before feeling better',
        'Family involvement is especially important for younger patients',
      ],
    },
    4: {
      level: 4,
      summary: 'Treatment-resistant eating disorders require specialized programming, addressing comorbidities, and considering novel pharmacotherapies while managing chronicity and medical complications.',
      explanation: `## Treatment Resistance

**Definitions:**
- Failure to achieve weight restoration after adequate treatment
- Persistent binge/purge behaviors
- Chronic course with multiple relapses

**Approach:**
1. Confirm treatment adequacy (intensity, duration)
2. Re-evaluate diagnosis (ARFID, medical causes)
3. Address comorbidities
4. Consider higher level of care

## Levels of Care

**Outpatient:**
- Medically stable
- Motivated for recovery
- Family support (for adolescents)
- Weekly appointments

**Intensive Outpatient (IOP):**
- 2-5 days/week, 3-4 hours/day
- Meal support, therapy, groups
- Transition from or alternative to residential

**Partial Hospitalization (PHP/Day Program):**
- 5-7 days/week, 6-12 hours/day
- Multiple meals daily
- Medical monitoring
- Transition to outpatient

**Residential:**
- 24/7 care
- For chronic, treatment-resistant cases
- Multidisciplinary team
- Average stay 2-3 months

**Inpatient:**
- Medical stabilization
- Bed rest, vital signs monitoring
- Laboratory monitoring
- Nasogastric feeding if necessary
- Transition to lower level of care

## Chronic and Severe Anorexia (SE-AN)

**Definition:**
- Duration ≥3-7 years
- Multiple treatment failures
- Severe and enduring (SE-AN)

**Approach:**
- Shift focus from weight to quality of life
- Harm reduction model
- Improved quality of life possible without full recovery
- **MANTRA:** Maudsley Model of Anorexia Nervosa Treatment for Adults
- **SSCM:** Specialist Supportive Clinical Management

## Comorbidities

**Depression/Anxiety (50-75%):**
- SSRIs when weight restored
- Mirtazapine may help with anxiety and appetite
- Monitor for suicide (especially in partial remission)

**Obsessive-Compulsive Disorder:**
- Higher overlap with anorexia
- ERP for OCD symptoms
- Sometimes obsessions decrease with weight restoration

**Substance Use:**
- Alcohol, stimulants (for appetite suppression)
- Integrated treatment
- May need detox before ED treatment

**Personality Disorders:**
- Borderline PD: Associated with binge-purge subtype
- DBT-informed treatments
- Longer treatment course

**Medical Complications:**
- **Osteoporosis:** Bisphosphonates, weight restoration, calcium/vitamin D
- **Gastroparesis:** Prokinetics, small frequent meals
- **Renal:** Hydration, avoid nephrotoxins
- **Cardiac:** Prolonged QTc, arrhythmia monitoring

## Special Populations

**Males with Eating Disorders:**
- 10-25% of cases
- Often diagnosed later
- May focus on muscularity (muscle dysmorphia)
- Higher mortality than females
- Treatment considerations: Hormonal recovery, muscle mass restoration

**Athletes:**
- Higher risk (especially aesthetic sports)
- Relative Energy Deficiency in Sport (RED-S)
- Pressure to maintain weight/class
- Treatment may require retirement discussion
- Multidisciplinary approach with sports medicine

**Perinatal:**
- High risk for relapse during pregnancy
- Focused on fetal health
- Increased nutritional needs
- Postpartum high-risk period
- Lactation considerations

**Late-Onset:**
- Diagnosis after age 25-30
- May be triggered by life events
- Often chronic course
- Treatment adaptations needed`,
      keyTerms: [
        { term: 'SE-AN', definition: 'Severe and Enduring Anorexia Nervosa; chronic form requiring different treatment approach' },
        { term: 'RED-S', definition: 'Relative Energy Deficiency in Sport; low energy availability affecting athletic performance' },
        { term: 'muscle dysmorphia', definition: 'Body image disorder focused on perceived lack of muscle; reverse anorexia' },
      ],
      clinicalNotes: 'Chronic eating disorders may never fully "recover." Shift goals to quality of life and harm reduction. Males are underdiagnosed and undertreated. Consider eating disorders in any unexplained weight loss or GI symptoms.',
    },
    5: {
      level: 5,
      summary: 'Emerging eating disorder treatments include novel pharmacotherapies, neurobiological interventions, personalized medicine approaches, and integration of digital therapeutics and telemedicine.',
      explanation: `## Novel Pharmacotherapies

**Anorexia Nervosa:**
- **Olanzapine:** Antipsychotic, reduces anxiety, may promote weight gain
- **Mirtazapine:** Antidepressant with appetite stimulation
- **Cannabis:** Limited evidence for appetite stimulation
- **Psilocybin:** Investigational for body image distortion
- **GH secretagogues:** Being studied for anabolic effects

**Bulimia/BED:**
- **Lisdexamfetamine:** FDA-approved for BED
- **Topiramate:** Reduces binge frequency
- **Zonisamide:** Anti-seizure medication with weight loss
- **Naltrexone:** Opioid antagonist, reduces binge reward
- **Memantine:** Glutamate modulator, mixed results

**Hormonal:**
- **Leptin:** Investigational for appetite regulation
- **Ghrelin:** Hunger hormone modulation
- **Estrogen:** For bone health in hypothalamic amenorrhea
- **Testosterone:** For male hypogonadism

## Neurobiological Interventions

**Repetitive TMS (rTMS):**
- Targeting dorsolateral prefrontal cortex
- Some evidence for reducing binge frequency
- Limited data for anorexia

**Deep Brain Stimulation (DBS):**
- For severe, chronic anorexia
- Targets: Subcallosal cingulate, nucleus accumbens
- Early stage, limited data
- Case series show promise

## Personalized Medicine

**Genetics:**
- **Eating Disorders Working Group of the PGC:** Identified 8 loci for anorexia
- Overlap with metabolic, psychiatric traits
- Not yet clinically actionable

**Biomarkers:**
- **Leptin levels:** Guide refeeding in chronic cases
- **IGF-1:** Marker of nutritional status
- **Inflammatory markers:** Elevated in acute phases

**Treatment Matching:**
- Temperament profiles predict response
- Perfectionism → CBT-E or MANTRA
- Impulsivity → DBT-informed treatments
- Anxiety → exposure-based approaches

## Digital Therapeutics

**Telemedicine:**
- Expanded access during COVID-19
- Effective for many patients
- Challenges: Medical monitoring, weight checks
- Hybrid models emerging

**Mobile Applications:**
- Recovery record apps
- Meal support and reminders
- Self-monitoring tools
- Evidence base growing

**Digital CBT:**
- Internet-based CBT for bulimia/BED
- Guided vs. unguided
- Comparable to face-to-face for motivated patients

## Prevention

**Primary Prevention:**
- School-based programs
- Media literacy training
- Body acceptance campaigns
- Targeting at-risk groups (athletes, dancers)

**Secondary Prevention:**
- Early identification
- Screening in primary care
- Brief interventions
- Family psychoeducation

## Future Directions

**Neuroimaging:**
- Reward processing differences
- Insula activation (interoception)
- Predictors of treatment response

**Microbiome:**
- Gut-brain axis
- Microbiome alterations in EDs
- Probiotic therapies (experimental)

**Epigenetics:**
- Gene-environment interactions
- Prenatal exposures
- Transgenerational effects

**Treatment Integration:**
- Medical, nutritional, psychological integration
- Family involvement optimization
 stepped care models

## Mortality and Long-Term Outcomes

**Standardized Mortality Ratios:**
- Anorexia: 5-10x general population
- Bulimia: 2-3x general population
- BED: Slightly elevated

**Predictors of Poor Outcome:**
- Longer duration of illness
- Lower minimum BMI
- Comorbid personality disorder
- Poor family support
- Binge-eating/purging subtype

**Recovery:**
- 30-50% full recovery
- 30% improve significantly
- 20% chronic course
- Recovery possible even after 10+ years`,
      keyTerms: [
        { term: 'PGC', definition: 'Psychiatric Genomics Consortium; large-scale genetics research collaboration' },
        { term: 'interoception', definition: 'Sense of internal bodily states; impaired in eating disorders' },
        { term: 'stepped care', definition: 'Treatment model starting with least intensive intervention and stepping up as needed' },
      ],
      clinicalNotes: `Key clinical pearls:

1. **Anorexia kills:** Highest mortality of any psychiatric disorder. Never underestimate. Hospitalize for medical instability.

2. **Refeeding syndrome is fatal:** Monitor phosphorus closely during nutritional rehabilitation. Start slow (1000-1400 kcal), advance slowly.

3. **Family-Based Treatment (FBT) is gold standard** for adolescent anorexia. Empower parents, don't blame them.

4. **Weight restoration is necessary:** Brain recovery requires nutritional rehabilitation. Psychological treatment limited at low weight.

5. **Screening is essential:** Eating disorders are missed, especially in males, higher-weight individuals, and minorities.

6. **Bulimia can be fatal:** Electrolyte abnormalities from purging cause arrhythmias and sudden death.

7. **Chronic cases need different approach:** For SE-AN (Severe and Enduring AN), shift focus to quality of life and harm reduction.

8. **SSRIs limited at low weight:** Medications less effective in starvation. Weight restoration needed first.

9. **Binge Eating Disorder is common:** Most common eating disorder diagnosis. Effective treatments available.

10. **Males get eating disorders:** 10-25% of cases. Often diagnosed later, worse outcomes. Include in screening.`,
    },
  },

  media: [],
  citations: [
    { id: 'apa-ed-2023', type: 'article', title: 'APA Practice Guideline for Eating Disorders', source: 'American Psychiatric Association' },
    { id: 'nice-ed-2017', type: 'article', title: 'NICE Guidelines on Eating Disorders', source: 'National Institute for Health and Care Excellence' },
    { id: 'aedbt-ed-2022', type: 'article', title: 'AEDBT Comprehensive Eating Disorders Treatment Guidelines', source: 'Academy for Eating Disorders' },
  ],
  crossReferences: [
    { targetId: 'condition-major-depressive-disorder', targetType: 'condition', relationship: 'related', label: 'Major Depressive Disorder' },
    { targetId: 'condition-obsessive-compulsive-disorder', targetType: 'condition', relationship: 'related', label: 'Obsessive-Compulsive Disorder' },
  ],
  tags: {
    systems: ['neurological', 'gastrointestinal', 'endocrine'],
    topics: ['psychiatry', 'mental health', 'nutrition'],
    keywords: ['eating disorder', 'anorexia', 'bulimia', 'binge eating', 'ARFID', 'refeeding'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['psychiatry', 'pediatrics'] },
  },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default eatingDisorders;
