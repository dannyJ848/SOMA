/**
 * Binge Eating Disorder (BED)
 *
 * Comprehensive educational content on binge eating disorder,
 * its diagnosis, and treatment approaches.
 */

import { EducationalContent } from '../../../types';

export const bingeEatingDisorderContent: EducationalContent = {
  id: 'psychiatry-binge-eating-disorder',
  type: 'condition',
  name: 'Binge Eating Disorder',
  alternateNames: ['BED'],

  levels: {
    1: {
      level: 1,
      summary: 'Binge Eating Disorder is a condition where a person regularly eats very large amounts of food while feeling out of control, often eating in secret and feeling upset afterward.',
      explanation: `Binge Eating Disorder (BED) is the most common eating disorder in the United States.

**What Happens:**

- Eating a lot of food in a short time
- Feeling like you can't stop eating even if you want to
- Eating faster than normal
- Eating until uncomfortably full
- Eating when not hungry
- Eating alone because of embarrassment
- Feeling disgusted, depressed, or guilty afterward

**How It's Different from Bulimia:**

- People with BED do NOT purge (no vomiting, laxatives, or excessive exercise to "undo" the binge)
- This is the main difference from bulimia

**Important to Know:**

- BED is a real medical condition, not a lack of willpower
- It affects people of all body sizes
- It often involves using food to cope with emotions
- It's very common and very treatable
- Many people feel shame, but help is available

**Health Effects:**

- Weight gain and obesity are common
- Higher risk of diabetes and heart disease
- Digestive problems
- Depression and anxiety often occur together

**Treatment Works:**

- Therapy helps change patterns of eating and thinking
- Some medications can reduce binge episodes
- Learning to recognize emotional triggers
- Developing healthier ways to cope with feelings`,
      keyTerms: [
        { term: 'binge eating', definition: 'Eating an unusually large amount of food while feeling out of control' },
        { term: 'emotional eating', definition: 'Using food to cope with feelings rather than physical hunger' },
        { term: 'loss of control', definition: 'Feeling unable to stop eating even though you want to' },
      ],
      analogies: [
        'Binge eating can feel like being on autopilot - your brain takes over and you eat without really choosing to.',
        'It\'s like trying to fill an emotional hole with food, but food never quite fills it.',
      ],
      examples: [
        'Someone might eat an entire cake at night while feeling stressed, then feel terrible about it afterward.',
        'A person might hide food wrappers because they\'re embarrassed about how much they ate.',
      ],
    },
    2: {
      level: 2,
      summary: 'BED is characterized by recurrent binge eating episodes with associated distress but without compensatory behaviors, often linked with obesity and metabolic complications.',
      explanation: `**Diagnostic Criteria:**

Recurrent binge eating episodes:
- Eating in discrete period (e.g., 2 hours) an amount definitely larger than most would eat
- Sense of lack of control during the episode

**Binge episodes associated with at least 3 of:**
- Eating more rapidly than normal
- Eating until uncomfortably full
- Eating large amounts when not hungry
- Eating alone due to embarrassment
- Feeling disgusted, depressed, or guilty afterward

**Additional Criteria:**
- Marked distress about binge eating
- At least once weekly for 3 months
- NO compensatory behaviors (unlike bulimia)

**Severity (based on binge frequency):**
- Mild: 1-3 episodes/week
- Moderate: 4-7 episodes/week
- Severe: 8-13 episodes/week
- Extreme: 14+ episodes/week

**Epidemiology:**
- Most common eating disorder in US (~3% lifetime)
- Affects men more than other eating disorders (1:1.5 ratio)
- Often begins in young adulthood
- Highly associated with obesity (~50% of BED patients are obese)

**Comorbidities:**
- Depression (common)
- Anxiety disorders
- Substance use disorders
- Obesity and metabolic syndrome

**Differences from Other Conditions:**

*vs. Bulimia Nervosa:*
- No compensatory behaviors in BED
- Less overvaluation of shape/weight in BED

*vs. "Overeating":*
- BED involves loss of control
- BED causes significant distress
- BED is recurrent pattern

**Treatment:**

*First-line: Psychological*
- CBT (most studied, effective)
- Interpersonal Therapy (IPT)
- Dialectical Behavior Therapy (DBT)

*Medications:*
- Lisdexamfetamine (FDA-approved for BED)
- SSRIs (can reduce binge frequency)
- Topiramate (off-label)

*Behavioral Weight Loss:*
- Reduces binge eating
- Addresses weight if needed
- Often combined with psychological treatment`,
      keyTerms: [
        { term: 'loss of control eating', definition: 'The defining feature of binge episodes - unable to stop or control eating' },
        { term: 'lisdexamfetamine', definition: 'FDA-approved medication for BED, a stimulant' },
        { term: 'compensatory behavior', definition: 'Behaviors to "undo" eating (absent in BED, present in bulimia)' },
      ],
    },
    3: {
      level: 3,
      summary: 'BED involves reward and impulse control dysregulation with dopaminergic and serotonergic dysfunction. CBT is first-line psychological treatment, and lisdexamfetamine is FDA-approved pharmacotherapy. BED is often comorbid with obesity and mood disorders.',
      explanation: `**DSM-5 Criteria:**

A. Recurrent binge eating episodes:
- Eating in discrete period amount larger than most would eat under similar circumstances
- Sense of lack of control (can't stop or control what/how much eating)

B. Episodes associated with ≥3 of:
- Eating more rapidly than normal
- Eating until uncomfortably full
- Large amounts when not physically hungry
- Eating alone due to embarrassment about quantity
- Feeling disgusted, depressed, or very guilty afterward

C. Marked distress regarding binge eating

D. Average ≥1 episode/week for 3 months

E. No inappropriate compensatory behaviors; does not occur exclusively during bulimia or anorexia

**Specifiers:**
- Severity: Mild (1-3), Moderate (4-7), Severe (8-13), Extreme (14+) binges/week
- Remission: Partial or Full

**Neurobiology:**

*Reward Processing:*
- Altered dopaminergic function
- Striatal abnormalities
- Food as potent reward
- Similar to substance use patterns

*Impulse Control:*
- Prefrontal dysfunction
- Poor inhibitory control
- Impulsivity trait

*Serotonin:*
- 5-HT dysregulation
- Satiety signaling
- SSRIs reduce binges

*Emotion Regulation:*
- Binge eating as coping
- Negative emotions trigger episodes
- Temporary mood improvement during binge

**Medical Considerations:**

*Obesity-Related:*
- Not all with BED are obese
- But obesity is common (~50%)
- Metabolic syndrome
- Type 2 diabetes
- Cardiovascular disease
- Sleep apnea

*GI:*
- Gastric distension
- Reflux

*Psychological:*
- Depression (major comorbidity)
- Anxiety
- Lower quality of life

**Treatment:**

*Psychological:*

CBT for BED:
- Most evidence
- Addresses eating patterns
- Cognitive restructuring
- Reduces binge frequency 50-60%

IPT:
- Interpersonal focus
- Comparable efficacy to CBT long-term

DBT:
- Emotion regulation
- Mindfulness
- Effective for BED with affect dysregulation

*Pharmacotherapy:*

Lisdexamfetamine (Vyvanse):
- Only FDA-approved for BED
- 50-70mg
- Reduces binge days/week
- Not for weight loss
- Stimulant - abuse potential

SSRIs:
- Reduce binge frequency
- Fluoxetine, sertraline
- Second-line

Topiramate:
- Reduces binges and weight
- Side effects limit use
- Off-label

*Behavioral Weight Loss:*
- Reduces binge eating
- Addresses weight
- May combine with CBT
- Long-term weight management

*Bariatric Surgery:*
- If severe obesity + BED
- Address BED before and after surgery
- Outcomes may be worse if untreated BED`,
      keyTerms: [
        { term: 'grazing', definition: 'Continuous eating throughout the day, related but distinct from discrete binge episodes' },
        { term: 'food addiction', definition: 'Controversial concept; overlap with BED in reward dysregulation' },
        { term: 'behavioral weight loss', definition: 'Structured program addressing diet and activity for weight management' },
      ],
    },
    4: {
      level: 4,
      summary: 'BED pathophysiology involves dopaminergic reward dysregulation, prefrontal inhibitory deficits, and appetite hormone alterations. Treatment integrates CBT or DBT with pharmacotherapy (lisdexamfetamine), and addresses obesity-related comorbidities when present.',
      explanation: `**Pathophysiology:**

*Reward System:*
- Striatal dopamine dysfunction
- Blunted D2 receptor availability
- Enhanced reward from palatable food
- Compulsive-like eating pattern
- Overlap with addiction neurobiology

*Inhibitory Control:*
- Prefrontal hypofunction
- Go/no-go task impairments
- Difficulty stopping eating once started
- Impulsivity as trait and state

*Appetite Regulation:*
- Ghrelin (hunger hormone) alterations
- Leptin resistance
- Blunted satiety signals
- PYY, CCK changes
- Gut-brain axis involvement

*Neuroimaging:*

Structural:
- Altered prefrontal, striatal volumes
- Insula changes

Functional:
- Hyperactivation to food cues
- Hypoactivation during inhibition
- Altered resting-state connectivity

**Genetics:**

- Heritability: 40-50%
- Overlap with obesity genetics
- Reward-related genes
- Similar to other eating disorders
- Polygenic

**Emotion and BED:**

*Affect Regulation Model:*
- Negative emotions trigger binges
- Binge temporarily relieves distress
- Escape from self-awareness
- Negative emotions follow → cycle

*Restraint Model:*
- Dietary restriction leads to binge
- Breaking "rules" disinhibits eating
- Both models likely contribute

**Treatment Details:**

*CBT for BED:*
- 12-20 sessions
- Self-monitoring
- Regular eating patterns
- Addressing triggers
- Cognitive restructuring
- Body image work
- ~50% achieve abstinence

*DBT for BED:*
- Emotion regulation skills
- Distress tolerance
- Mindfulness of eating
- Interpersonal effectiveness
- Particularly effective for emotional eating

*Lisdexamfetamine:*
- Prodrug of dextroamphetamine
- Reduces binge days/week significantly
- FDA approved 2015
- 50-70mg daily
- Mechanism: Dopamine/NE enhancement
- Monitor for misuse, cardiovascular effects
- Not indicated primarily for weight loss

*Combination Approaches:*
- CBT + medication
- May enhance outcomes
- Address different mechanisms

*Weight Management:*
- Binge reduction → weight stabilization
- Additional weight loss interventions if needed
- Behavioral approaches
- Careful about restrictive dieting

*Bariatric Surgery Considerations:*
- BED does not preclude surgery
- Address BED pre-operatively
- Post-surgical monitoring
- Loss of control eating can persist
- May need modified assessment

**Prognosis:**

- Good with treatment
- 50-80% improve significantly
- Chronic if untreated
- Relapse common
- Associated obesity complicates outcomes`,
      keyTerms: [
        { term: 'D2 receptor', definition: 'Dopamine receptor in striatum; reduced availability in BED like addiction' },
        { term: 'escape theory', definition: 'Binge eating as escape from self-awareness and negative emotions' },
        { term: 'hedonic eating', definition: 'Eating for pleasure rather than hunger, driven by reward' },
        { term: 'prodrug', definition: 'Drug converted to active form in body; lisdexamfetamine is prodrug of amphetamine' },
      ],
      clinicalNotes: 'CBT or DBT first-line. Lisdexamfetamine effective but monitor for stimulant effects. Address obesity-related conditions. Screen for depression. Bariatric surgery can be appropriate with BED management. Avoid very restrictive diets.',
    },
    5: {
      level: 5,
      summary: 'Contemporary BED research explores addiction-like mechanisms, develops neuromodulation and novel pharmacological interventions, and addresses the complex relationship with obesity through integrated treatment models and digital therapeutics.',
      explanation: `**Addiction Framework:**

*Evidence For:*
- Dopamine/reward dysfunction
- Craving and loss of control
- Continued despite consequences
- Tolerance-like phenomena
- Neural overlap with substance use

*Controversies:*
- "Food addiction" not DSM diagnosis
- All food vs. specific nutrients
- Behavioral vs. substance addiction
- Treatment implications unclear

*Research:*
- Yale Food Addiction Scale studies
- Neuroimaging parallels
- Genetic overlap
- Treatment response patterns

**Novel Pharmacotherapy:**

*GLP-1 Agonists:*
- Semaglutide, liraglutide
- Reduce appetite and weight
- May reduce binge eating
- Trials ongoing in BED
- Primarily approved for diabetes/obesity

*Dasotraline:*
- Triple reuptake inhibitor (DA, NE, 5-HT)
- Phase 3 trials in BED
- Reduced binge days
- Not yet approved

*Naltrexone/Bupropion:*
- Approved for obesity
- May help BED with obesity
- Opioid and dopamine effects

*Other Targets:*
- Orexin antagonists
- Cannabinoid modulators
- Melanocortin system

**Neuromodulation:**

*TMS:*
- DLPFC stimulation
- Reduce food cravings
- Improve inhibitory control
- Early evidence promising

*tDCS:*
- Prefrontal stimulation
- Reduce craving, caloric intake
- Accessible, home-based possible
- Research ongoing

*Deep Brain Stimulation:*
- Extreme, treatment-resistant cases
- NAcc target
- Very limited data
- Ethical considerations

**Digital Therapeutics:**

*App-Based CBT:*
- Noom, Recovery Record
- Self-monitoring
- Guided self-help
- Scalable

*Internet CBT:*
- Therapist-supported online programs
- Comparable to face-to-face
- Increases access

*VR Applications:*
- Cue exposure
- Body image work
- Emerging

**Special Populations:**

*Children/Adolescents:*
- Loss of control eating common
- Full BED criteria may not be met
- Family-based approaches
- Prevention focus

*Elderly:*
- Understudied
- Comorbidities complicate
- Adapted treatment needed

*Post-Bariatric Surgery:*
- Loss of control eating can persist
- Different presentation (grazing)
- Psychological support important
- Worse weight outcomes if untreated

**Integrated Care Models:**

*Obesity + BED:*
- Address BED first
- Then weight management
- Behavioral weight loss can help BED
- Avoid very restrictive approaches

*Primary Care Integration:*
- Screening in obesity clinics
- Brief interventions
- Referral pathways

*Multidisciplinary:*
- Psychiatry/psychology
- Nutrition
- Medicine
- Surgery (if applicable)

**Prevention:**

*Dissonance-Based:*
- "Body Project"
- Challenging thin ideal
- Reduces eating disorder risk

*Healthy Weight Programs:*
- Focus on health, not just weight
- Reduce restriction-binge cycles
- Self-esteem and body image

**Research Priorities:**

1. Addiction model clarification
2. GLP-1 agonist trials in BED
3. Biomarkers for treatment matching
4. Digital therapeutics effectiveness
5. Prevention programs
6. Long-term outcomes
7. Diverse population research
8. Integration with obesity treatment`,
      keyTerms: [
        { term: 'Yale Food Addiction Scale', definition: 'Questionnaire assessing addiction-like eating behaviors' },
        { term: 'GLP-1 agonist', definition: 'Glucagon-like peptide-1 agonist, reduces appetite, used in diabetes/obesity' },
        { term: 'loss of control eating', definition: 'Core feature of BED; feeling unable to stop, may occur without large amounts' },
        { term: 'grazing', definition: 'Continuous eating pattern, may emerge post-bariatric surgery' },
      ],
      clinicalNotes: `Current practice:
- CBT or DBT first-line psychological
- Lisdexamfetamine for pharmacotherapy
- Address obesity when present
- Integrated care model
- Screen for depression, anxiety

Emerging:
- GLP-1 agonists (off-label, trials ongoing)
- Digital/app-based CBT
- Neuromodulation research
- Addiction-informed approaches

Key points:
- Most common eating disorder
- High comorbidity with obesity
- Not about willpower
- Treatment effective
- Address emotional eating patterns
- Avoid restrictive dieting`,
    },
  },

  media: [
    {
      id: 'bed-diagnosis-flowchart',
      type: 'diagram',
      filename: 'bed_diagnosis_flowchart.svg',
      title: 'BED Diagnosis Flowchart',
      description: 'Distinguishing BED from bulimia and overeating',
    },
  ],

  citations: [
    {
      id: 'dsm-5-bed',
      type: 'textbook',
      title: 'Diagnostic and Statistical Manual of Mental Disorders, 5th Edition',
      authors: ['American Psychiatric Association'],
      source: 'American Psychiatric Publishing',
      chapter: 'Feeding and Eating Disorders',
    },
  ],

  crossReferences: [
    { targetId: 'psychiatry-bulimia-nervosa', targetType: 'condition', relationship: 'related', label: 'Bulimia Nervosa' },
    { targetId: 'psychiatry-anorexia-nervosa', targetType: 'condition', relationship: 'related', label: 'Anorexia Nervosa' },
  ],

  tags: {
    systems: ['nervous', 'gastrointestinal', 'endocrine'],
    topics: ['psychiatry', 'eating disorders'],
    keywords: ['binge eating', 'eating disorder', 'obesity', 'loss of control', 'emotional eating'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['psychiatry'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default bingeEatingDisorderContent;
