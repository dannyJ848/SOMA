/**
 * Bipolar Disorder
 *
 * Comprehensive educational content on bipolar disorder,
 * covering the spectrum of manic and depressive episodes.
 */

import { EducationalContent } from '../../../types';

export const bipolarDisorderContent: EducationalContent = {
  id: 'psychiatry-bipolar-disorder',
  type: 'condition',
  name: 'Bipolar Disorder',
  alternateNames: ['Manic-Depressive Illness', 'Bipolar Affective Disorder'],

  levels: {
    1: {
      level: 1,
      summary: 'Bipolar disorder causes unusual shifts in mood and energy, with periods of feeling extremely "up" (mania) and periods of feeling very "down" (depression).',
      explanation: `Bipolar disorder is a brain condition that causes big changes in mood, energy, and activity levels. Everyone has ups and downs, but with bipolar disorder, these changes are much more extreme.

**Two Types of Episodes:**

**Manic Episodes (Feeling "Up"):**
- Feeling extremely happy, excited, or irritable
- Having lots of energy, needing very little sleep
- Talking very fast, thoughts racing
- Feeling like you can do anything
- Making risky decisions (spending too much money, dangerous behavior)
- Being easily distracted

**Depressive Episodes (Feeling "Down"):**
- Feeling very sad, empty, or hopeless
- Having little energy, sleeping too much
- Not enjoying things that used to be fun
- Trouble concentrating
- Thoughts about death or suicide

**Important Facts:**

- Bipolar disorder is NOT about being "moody" - the mood changes are extreme and last for days to weeks
- It's a medical condition caused by brain chemistry, NOT a choice
- It affects about 2-3% of people
- It usually starts in the late teens or early twenties
- It runs in families

**Getting Help:**

Bipolar disorder is very treatable! With the right medication and support, people with bipolar disorder live full, successful lives. Many famous artists, scientists, and leaders have had bipolar disorder.

Treatment includes:
- Mood stabilizing medications
- Therapy to learn coping skills
- Regular sleep and routines
- Support from family and friends`,
      keyTerms: [
        { term: 'bipolar', definition: 'Having two poles or extremes - in this case, mania and depression' },
        { term: 'mania', definition: 'A period of extremely high energy, elevated mood, and increased activity' },
        { term: 'mood stabilizer', definition: 'A medication that helps keep mood from going too high or too low' },
      ],
      analogies: [
        'Bipolar disorder is like a thermostat that swings too far in both directions - too hot and too cold - instead of staying comfortable.',
        'Mood episodes are like storms that pass through - they are temporary, even though they feel overwhelming.',
      ],
      examples: [
        'During mania, someone might stay up for days working on projects, feeling they have special abilities.',
        'During depression, that same person might struggle to get out of bed or feel like nothing matters.',
        'Many creative people throughout history have had bipolar disorder, including artists and musicians.',
      ],
    },
    2: {
      level: 2,
      summary: 'Bipolar disorder is characterized by episodes of mania or hypomania and depression, with Bipolar I involving full manic episodes and Bipolar II involving hypomanic episodes with major depression.',
      explanation: `**Types of Bipolar Disorder:**

**Bipolar I Disorder:**
- At least one manic episode (lasting 7+ days or requiring hospitalization)
- May also have depressive episodes
- Manic episodes can be severe enough to impair function or include psychosis

**Bipolar II Disorder:**
- At least one hypomanic episode (less severe than mania)
- At least one major depressive episode
- Often misdiagnosed as depression
- Depressive episodes often predominate

**Cyclothymic Disorder:**
- Numerous hypomanic and depressive symptoms
- Never meet full criteria for episodes
- Symptoms present for at least 2 years

**Manic Episode Criteria (at least 3-4 of these):**
- Decreased need for sleep
- Increased talkativeness or pressure of speech
- Racing thoughts or flight of ideas
- Distractibility
- Increased goal-directed activity or agitation
- Excessive involvement in risky activities
- Grandiosity or inflated self-esteem

**Hypomanic Episode:**
- Same symptoms as mania but less severe
- Lasts at least 4 days
- Does not cause severe impairment
- No psychotic features

**Depression in Bipolar:**
- Similar to unipolar depression
- May have atypical features (increased sleep, appetite)
- Often more difficult to treat
- Antidepressants alone can trigger mania

**Causes:**
- Strong genetic component (80% heritability)
- Neurotransmitter imbalances (dopamine, serotonin, norepinephrine)
- Circadian rhythm disruption
- Stress can trigger episodes
- Sleep deprivation is a major trigger

**Treatment:**
- Mood stabilizers (lithium, valproate, lamotrigine)
- Atypical antipsychotics
- Avoid antidepressant monotherapy
- Psychotherapy (CBT, IPSRT, family therapy)
- Sleep hygiene and routine
- Avoiding triggers (substance use, sleep deprivation)`,
      keyTerms: [
        { term: 'hypomania', definition: 'A less severe form of mania that does not cause significant impairment', pronunciation: 'hi-po-MAY-nee-ah' },
        { term: 'flight of ideas', definition: 'Rapid jumping from one thought to another, seen in mania' },
        { term: 'grandiosity', definition: 'An exaggerated sense of one\'s importance or abilities' },
        { term: 'mixed episode', definition: 'Symptoms of both mania and depression occurring together' },
      ],
      analogies: [
        'Bipolar II is often called "depression with secret highs" because the hypomanic periods may not be recognized as problematic.',
      ],
    },
    3: {
      level: 3,
      summary: 'Bipolar disorder involves dysregulation of dopaminergic, glutamatergic, and circadian systems, with diagnosis requiring careful longitudinal assessment and treatment centered on mood stabilizers and atypical antipsychotics.',
      explanation: `**DSM-5 Diagnostic Criteria:**

**Manic Episode:**
A. Abnormally elevated, expansive, or irritable mood AND increased activity/energy for at least 7 days (or any duration if hospitalization required)
B. 3+ symptoms (4 if mood is only irritable):
   - Decreased sleep need
   - Pressured speech
   - Flight of ideas/racing thoughts
   - Distractibility
   - Increased goal-directed activity or psychomotor agitation
   - Excessive involvement in risky activities
   - Grandiosity/inflated self-esteem
C. Marked functional impairment, hospitalization, or psychotic features
D. Not attributable to substances or medical condition

**Bipolar I:** At least one manic episode
**Bipolar II:** At least one hypomanic episode AND one major depressive episode (never full manic episode)

**Specifiers:**
- With anxious distress
- With mixed features (depressive symptoms during mania or vice versa)
- With rapid cycling (4+ episodes/year)
- With psychotic features
- With peripartum onset
- With seasonal pattern

**Neurobiological Mechanisms:**

*Dopamine Hypothesis:*
- Mania: Increased dopaminergic activity
- Depression: Decreased dopaminergic activity
- Antipsychotics (dopamine blockers) treat mania

*Glutamate/GABA:*
- Increased glutamate in mania
- Mood stabilizers (valproate, lamotrigine) modulate glutamate

*Circadian Dysfunction:*
- Clock gene variants (CLOCK, ARNTL)
- Sleep deprivation can trigger mania
- Social rhythm therapy addresses this

*Intracellular Signaling:*
- Second messenger systems (inositol, PKC)
- Lithium inhibits inositol monophosphatase
- Mitochondrial dysfunction

**Neuroimaging:**
- Prefrontal cortex hypoactivity
- Amygdala hyperactivity
- White matter changes
- Progressive gray matter loss if untreated

**Pharmacological Treatment:**

*Acute Mania:*
- Lithium, valproate, or atypical antipsychotic
- Antipsychotics work fastest
- Benzodiazepines for agitation/sleep

*Acute Bipolar Depression:*
- Quetiapine (first-line)
- Lurasidone + lithium/valproate
- Lamotrigine
- Cariprazine
- AVOID antidepressant monotherapy

*Maintenance:*
- Lithium (suicide protective)
- Valproate, lamotrigine
- Atypical antipsychotics
- Combination therapy often needed

**Psychotherapy:**
- Psychoeducation
- Cognitive Behavioral Therapy (CBT)
- Interpersonal and Social Rhythm Therapy (IPSRT)
- Family-focused therapy`,
      keyTerms: [
        { term: 'rapid cycling', definition: 'Four or more mood episodes in a 12-month period' },
        { term: 'IPSRT', definition: 'Interpersonal and Social Rhythm Therapy, focusing on stabilizing daily routines', pronunciation: 'eye-pee-ess-are-tee' },
        { term: 'kindling', definition: 'Theory that episodes become more frequent and severe over time if untreated' },
        { term: 'euthymia', definition: 'A normal, stable mood state between episodes', pronunciation: 'yoo-THIGH-mee-ah' },
      ],
    },
    4: {
      level: 4,
      summary: 'Bipolar disorder pathophysiology involves complex interactions between genetic factors, mitochondrial dysfunction, oxidative stress, neuroinflammation, and circadian disruption, requiring multimodal treatment approaches.',
      explanation: `**Genetic Architecture:**
- Heritability: ~85% (highest of major psychiatric disorders)
- Polygenic with thousands of risk variants
- Overlap with schizophrenia genetics (30%)
- Key genes: CACNA1C, ANK3, ODZ4, TRANK1
- Rare variants: Increased CNV burden
- Calcium signaling pathways enriched

**Cellular and Molecular Mechanisms:**

*Mitochondrial Dysfunction:*
- Reduced ATP production
- Impaired oxidative phosphorylation
- Calcium dysregulation
- Lithium may protect mitochondria

*Oxidative Stress:*
- Increased lipid peroxidation
- Reduced antioxidant enzymes
- DNA damage markers elevated
- Neuroprogression hypothesis

*Neuroinflammation:*
- Elevated cytokines (IL-6, TNF-alpha)
- Microglial activation
- Kynurenine pathway dysregulation
- State-dependent changes

*Circadian and Sleep:*
- CLOCK gene polymorphisms
- Altered melatonin secretion
- Phase-shifting abnormalities
- Sleep deprivation triggers mania

**Neuroimaging Findings:**

*Structural:*
- Enlarged lateral ventricles
- Reduced prefrontal volume
- Hippocampal and amygdala changes
- White matter hyperintensities
- Progressive changes with episodes

*Functional:*
- Prefrontal hypoactivation (depression and mania)
- Amygdala hyperactivation to emotional stimuli
- Altered reward circuitry (mania)
- Default mode network abnormalities

**Pharmacology Mechanisms:**

*Lithium:*
- Inhibits GSK-3beta, inositol monophosphatase
- Increases BDNF, neuroplasticity
- Neuroprotective effects
- Requires monitoring (renal, thyroid)
- Narrow therapeutic index (0.6-1.2 mEq/L)

*Valproate:*
- GABA potentiation
- Voltage-gated sodium channel blockade
- HDAC inhibition
- Teratogenic (neural tube defects)
- Monitor liver function, ammonia

*Lamotrigine:*
- Glutamate release inhibition
- Sodium channel blockade
- Best for bipolar depression prevention
- Titrate slowly (Stevens-Johnson syndrome risk)

*Atypical Antipsychotics:*
- D2/5-HT2A antagonism
- Quetiapine: First-line for bipolar depression
- Lurasidone: Bipolar depression
- Aripiprazole, risperidone, olanzapine: Mania
- Metabolic monitoring required

*Carbamazepine:*
- Sodium channel blockade
- Drug-drug interactions (CYP inducer)
- Aplastic anemia risk, HLA-B*1502 screening

**Treatment Considerations:**

*Medication Selection:*
- Consider polarity predominance
- Lamotrigine: Depression-predominant
- Lithium: Reduces suicide, classic euphoric mania
- Valproate: Mixed features, rapid cycling

*Antidepressants:*
- Risk of switching to mania
- Risk of cycle acceleration
- Use only with mood stabilizer
- Short-term use, taper after stability

*ECT:*
- Effective for both mania and depression
- Consider for treatment-resistant cases
- Safe in pregnancy`,
      keyTerms: [
        { term: 'GSK-3beta', definition: 'Glycogen synthase kinase 3 beta, enzyme inhibited by lithium with mood-stabilizing effects' },
        { term: 'neuroprogression', definition: 'Theory that untreated episodes cause progressive brain changes' },
        { term: 'kindling hypothesis', definition: 'Episodes beget episodes - early treatment may prevent acceleration' },
        { term: 'mood switch', definition: 'Transition from depression to mania, can be triggered by antidepressants' },
      ],
      clinicalNotes: 'Lithium remains gold standard with suicide-protective effects but requires monitoring. Screen for bipolar in all depression presentations (MDQ, HCL-32). Substance use comorbidity is very common (>50%). Pregnancy requires careful planning - valproate is contraindicated. Rapid cycling and mixed features predict poorer prognosis.',
    },
    5: {
      level: 5,
      summary: 'Contemporary bipolar disorder research emphasizes dimensional phenotyping, staging models, precision medicine approaches, and novel treatments targeting circadian, inflammatory, and glutamatergic mechanisms.',
      explanation: `**Staging Models:**

*Kapczinski Staging:*
- Stage 1: Well interval, high functioning
- Stage 2: Interepisode symptoms, mild impairment
- Stage 3: Marked impairment, cognitive decline
- Stage 4: Severe impairment, treatment resistance

*Clinical Implications:*
- Early intervention may prevent progression
- Staging guides treatment intensity
- Neuroprotection as treatment goal

**Dimensional Approaches:**

*Biotypes:*
- Cognitive impairment dimension
- Psychosis dimension
- Circadian disruption dimension
- Overlap with schizophrenia and MDD

*Polygenic Risk:*
- Bipolar PRS correlates with illness features
- Schizophrenia PRS predicts psychotic features
- Potential for stratification

**Biomarker Development:**

*Peripheral Markers:*
- BDNF (state marker)
- Inflammatory markers (IL-6, CRP)
- Oxidative stress markers
- Circadian markers (melatonin, cortisol)

*Neuroimaging Biomarkers:*
- White matter integrity
- Prefrontal activation patterns
- Reward circuitry function
- Treatment response prediction

**Precision Psychiatry:**

*Pharmacogenomics:*
- CYP2D6, CYP2C19 for drug metabolism
- HLA-B*1502 for carbamazepine (Stevens-Johnson)
- HLA-A*3101 for carbamazepine (Caucasians)

*Treatment Selection:*
- Lithium response prediction (biomarkers under study)
- ALDA scale for lithium response phenotyping
- Clinical predictors: Classic mania, family response

**Novel Therapeutics:**

*Glutamatergic Agents:*
- Ketamine for bipolar depression (off-label)
- Riluzole augmentation (glutamate modulator)
- N-acetyl cysteine (antioxidant, glutamate modulator)

*Circadian Targets:*
- Dark therapy for mania (blue light blocking)
- Triple chronotherapy
- Melatonin receptor agonists

*Anti-inflammatory:*
- NSAIDs augmentation (mixed results)
- Minocycline (neuroprotective, anti-inflammatory)
- Omega-3 fatty acids (adjunctive)

*Neuromodulation:*
- TMS for bipolar depression
- ECT (highly effective for both poles)
- DBS (investigational)

**Special Populations:**

*Pediatric Bipolar:*
- Controversial diagnosis
- Severe mood dysregulation phenotype
- DMDD as alternative diagnosis
- Early treatment may alter trajectory

*Peripartum:*
- High risk period for relapse
- Lithium discontinuation risky
- Postpartum psychosis risk
- Shared decision-making essential

*Late-Onset:*
- Often secondary (vascular, neurodegenerative)
- Lower genetic loading
- More medical comorbidity

**Suicide Prevention:**
- Suicide rate 20-30x general population
- 25-50% attempt suicide
- Lithium uniquely reduces suicide
- Clozapine in refractory cases
- Crisis planning, lethal means restriction

**Digital Phenotyping:**
- Smartphone sensors for mood monitoring
- Voice analysis for state detection
- Sleep and activity monitoring
- Potential for early intervention

**Future Directions:**
- Mechanism-based nosology
- Early intervention programs
- Personalized treatment algorithms
- Novel neuroprotective agents
- Combination biomarker panels
- Digital therapeutics integration`,
      keyTerms: [
        { term: 'staging', definition: 'Model of illness progression from early to advanced with cumulative damage' },
        { term: 'biotype', definition: 'Biologically defined subtype that may cut across diagnostic categories' },
        { term: 'dark therapy', definition: 'Use of darkness or blue light blocking to treat mania via circadian mechanisms' },
        { term: 'ALDA scale', definition: 'Scale for rating lithium response to identify good lithium responders' },
      ],
      clinicalNotes: `Current clinical practice:
- Lithium first-line if adherence likely (suicide protection, well-studied)
- Valproate for rapid cycling, mixed features (avoid in women of childbearing age)
- Lamotrigine for depression predominant
- Quetiapine for acute bipolar depression
- Combination therapy is the norm for most patients
- Clozapine for refractory cases
- ECT highly effective for both poles

Emerging practices:
- Earlier, more aggressive treatment
- Staging-guided treatment intensity
- Digital monitoring tools
- Collaborative care models

Key clinical pearls:
- Always screen for substance use
- Family involvement improves outcomes
- Psychoeducation is essential
- Maintain euthymic routines
- Plan for high-risk periods (postpartum, stress)
- Suicide risk assessment ongoing`,
    },
  },

  media: [
    {
      id: 'bipolar-mood-chart',
      type: 'diagram',
      filename: 'bipolar_mood_chart.svg',
      title: 'Bipolar Disorder Mood Episodes',
      description: 'Visual representation of manic, hypomanic, and depressive episodes over time',
    },
    {
      id: 'bipolar-treatment-algorithm',
      type: 'diagram',
      filename: 'bipolar_treatment_algorithm.svg',
      title: 'Bipolar Disorder Treatment Algorithm',
      description: 'Treatment approach for different phases of bipolar disorder',
    },
  ],

  citations: [
    {
      id: 'dsm-5-bipolar',
      type: 'textbook',
      title: 'Diagnostic and Statistical Manual of Mental Disorders, 5th Edition',
      authors: ['American Psychiatric Association'],
      source: 'American Psychiatric Publishing',
      chapter: 'Bipolar and Related Disorders',
    },
    {
      id: 'goodwin-jamison',
      type: 'textbook',
      title: 'Manic-Depressive Illness: Bipolar Disorders and Recurrent Depression',
      authors: ['Goodwin FK', 'Jamison KR'],
      source: 'Oxford University Press',
    },
  ],

  crossReferences: [
    { targetId: 'psychiatry-major-depressive-disorder', targetType: 'condition', relationship: 'related', label: 'Major Depressive Disorder' },
    { targetId: 'psychiatry-mood-stabilizers', targetType: 'topic', relationship: 'see-also', label: 'Mood Stabilizers' },
    { targetId: 'psychiatry-antipsychotics', targetType: 'topic', relationship: 'see-also', label: 'Antipsychotics' },
    { targetId: 'psychiatry-brain-chemistry-mental-health', targetType: 'topic', relationship: 'related', label: 'Brain Chemistry' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['psychiatry', 'mood disorders', 'pharmacology'],
    keywords: ['bipolar', 'mania', 'hypomania', 'mood stabilizers', 'lithium'],
    clinicalRelevance: 'critical',
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

export default bipolarDisorderContent;
