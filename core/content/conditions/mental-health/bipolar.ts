/**
 * Bipolar Disorder - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const bipolarDisorder: EducationalContent = {
  id: 'condition-bipolar-disorder',
  type: 'condition',
  name: 'Bipolar Disorder',
  alternateNames: ['Bipolar Affective Disorder', 'Manic-Depressive Illness', 'BPAD', 'MDI'],
  hpoId: 'HP:0000739',

  levels: {
    1: {
      level: 1,
      summary: 'Bipolar disorder is a mental health condition that causes extreme mood swings, from emotional highs (mania) to lows (depression).',
      explanation: `Bipolar disorder is like having a volume control for your emotions that sometimes gets stuck at "very loud" or "very quiet." People with bipolar experience periods of:

**Mania (feeling "high"):**
- Feeling extremely happy or energized
- Talking very fast
- Needing less sleep
- Taking big risks (spending money, risky behaviors)
- Feeling powerful or special

**Depression (feeling "low"):**
- Feeling very sad or empty
- Losing interest in activities
- Changes in appetite and sleep
- Low energy
- Thoughts of death

**Treatment helps:**
- Mood stabilizing medications
- Talk therapy
- Avoiding alcohol and drugs
- Regular sleep schedule
- Support from family and friends`,
      keyTerms: [
        { term: 'mania', definition: 'A period of extreme excitement, high energy, and euphoria' },
        { term: 'depression', definition: 'A period of extreme sadness, low energy, and hopelessness' },
        { term: 'mood stabilizer', definition: 'Medication that helps control extreme mood swings' },
      ],
      analogies: [
        'Bipolar disorder is like a thermostat that sometimes makes the room freezing cold and other times makes it uncomfortably hot.',
        'Your mood is like a pendulum—bipolar disorder makes the swings go much higher and lower than normal.',
      ],
      examples: [
        'Someone with bipolar might start several new projects at once, spend more money than they have, and need only 3 hours of sleep during a manic episode.',
        'During depression, the same person might stay in bed all day, feel worthless, and have trouble even getting up to shower.',
      ],
      patientCounselingPoints: [
        'Take your medication exactly as prescribed, even when you feel well',
        'Keep a regular sleep schedule—going to bed and waking up at the same time daily',
        'Avoid alcohol and recreational drugs as they can trigger mood episodes',
        'Learn your early warning signs and have a plan with your doctor',
        'Involve trusted family members in your treatment plan',
      ],
    },
    2: {
      level: 2,
      summary: 'Bipolar disorder is characterized by episodes of mania/hypomania and depression, requiring mood stabilizers and often antipsychotics for management.',
      explanation: `## Types of Bipolar Disorder

**Bipolar I Disorder:**
- At least one manic episode (may include psychotic features)
- Depressive episodes typically occur but not required for diagnosis
- Mania lasts ≥1 week or requires hospitalization

**Bipolar II Disorder:**
- At least one hypomanic episode (≥4 days)
- At least one major depressive episode
- No full manic episodes

**Cyclothymic Disorder:**
- Numerous periods of hypomanic symptoms and depressive symptoms
- Symptoms don't meet full criteria for hypomanic or depressive episodes
- Pattern persists for ≥2 years (1 year in children)

## Manic Episode Symptoms
- Inflated self-esteem or grandiosity
- Decreased need for sleep
- More talkative or pressure to keep talking
- Flight of ideas or subjective racing thoughts
- Distractibility
- Goal-directed activity increase (socially, occupationally, academically, or sexually)
- Excessive involvement in risky activities

## Hypomania vs. Mania
| Feature | Hypomania | Mania |
|---------|-----------|-------|
| Duration | ≥4 days | ≥1 week |
| Severity | Noticeable change | Marked impairment |
| Hospitalization | No | May be needed |
| Psychosis | Absent | May be present |
| Function | May improve | Impaired |

## Treatment
**Mood Stabilizers:**
- Lithium (first-line for classic bipolar I)
- Valproate (divalproex)
- Lamotrigine (prevention of depression)
- Carbamazepine

**Atypical Antipsychotics:**
- Quetiapine, olanzapine, risperidone, aripiprazole
- Some FDA-approved for manic episodes, some for maintenance

**Avoid:** Antidepressant monotherapy (can trigger mania)`,
      keyTerms: [
        { term: 'hypomania', definition: 'A milder form of mania that does not cause significant impairment' },
        { term: 'lithium', definition: 'First-line mood stabilizer for bipolar disorder; requires monitoring of blood levels' },
        { term: 'grandiosity', definition: 'An inflated sense of self-importance or special abilities' },
        { term: 'flight of ideas', definition: 'Rapid speech that jumps between topics with loose connections' },
      ],
      analogies: [
        'Hypomania is like drinking three cups of coffee—you feel energized and productive. Mania is like drinking ten cups—you become jittery, make poor decisions, and may crash.',
      ],
      patientCounselingPoints: [
        'Lithium requires regular blood tests to check levels and kidney/thyroid function',
        'Do not stop mood stabilizers abruptly—this can trigger a manic episode',
        'Track your mood daily to help recognize patterns and early warning signs',
      ],
    },
    3: {
      level: 3,
      summary: 'Bipolar disorder involves circadian rhythm disruption, neurotransmitter dysregulation, and genetic predisposition, requiring lifelong management with mood stabilizers and psychotherapy.',
      explanation: `## Pathophysiology

**Neurotransmitters:**
- Dopamine: Elevated in mania, reduced in depression
- Serotonin: Dysregulated across mood states
- Norepinephrine: Altered activity in both phases
- GABA: Reduced inhibitory tone

**Circadian Rhythms:**
- Sleep-wake cycle disruption is a core feature
- CLOCK gene variants associated with bipolar
- Mania often follows sleep deprivation

**Genetics:**
- Heritability: 80-90%
- First-degree relatives: 5-10% risk (vs 1% general population)
- Polygenic with many genes of small effect

**Neuroimaging:**
- Prefrontal cortex abnormalities
- Amygdala hyperactivity
- White matter hyperintensities

## Pharmacotherapy

| Medication | Indication | Key Monitoring |
|------------|------------|----------------|
| Lithium | Mania, maintenance, suicide prevention | Levels 0.6-1.2 mEq/L, TSH, Cr |
| Valproate | Mania, mixed episodes | LFTs, ammonia, platelets |
| Lamotrigine | Bipolar depression | Rash warning (Stevens-Johnson) |
| Carbamazepine | Mania, maintenance | Levels, CBC, LFTs |
| Quetiapine | Mania, bipolar depression, maintenance | Metabolic, weight, EPS |
| Olanzapine/Fluoxetine | Bipolar depression | Metabolic, weight |
| Lurasidone | Bipolar depression | EPS, akathisia |
| Cariprazine | Mania, maintenance | EPS, metabolic |

**Lithium Details:**
- Narrow therapeutic index
- Renal excretion—reduce dose with kidney disease
- Causes hypothyroidism, nephrogenic diabetes insipidus
- Tremor, GI upset, weight gain
- Loading dose: 900-1200 mg/day divided
- Maintenance: 300-1200 mg/day

**Lamotrigine Details:**
- Slow titration to prevent rash (start 25 mg, increase over 5+ weeks)
- Effective for bipolar depression
- Minimal weight gain
- Enzyme inducers decrease levels

## Psychotherapy
**Evidence-Based Options:**
- CBT for bipolar disorder
- Family-focused therapy
- Interpersonal and social rhythm therapy (IPSRT)
- Psychoeducation

## Mixed Features
- Criteria for mania/hypomania plus ≥3 depressive symptoms
- High suicide risk
- Associated with worse outcomes
- May require atypical antipsychotic`,
      keyTerms: [
        { term: 'mixed episode', definition: 'Meeting criteria for both manic and depressive episodes simultaneously or in rapid sequence' },
        { term: 'rapid cycling', definition: '≥4 mood episodes per year; associated with poor prognosis' },
        { term: 'IPSRT', definition: 'Interpersonal and social rhythm therapy; stabilizes daily routines to prevent episodes' },
        { term: 'Stevens-Johnson syndrome', definition: 'Severe skin reaction; risk with lamotrigine rapid titration' },
      ],
      clinicalNotes: 'Always screen for bipolar before prescribing antidepressants. Antidepressants alone can trigger mania or rapid cycling. Lithium is the only medication proven to reduce suicide risk in bipolar disorder.',
      patientCounselingPoints: [
        'Report any rash while taking lamotrigine immediately',
        'Stay hydrated and avoid becoming dehydrated on lithium',
        'Tell your doctor about all medications, including NSAIDs, which can affect lithium levels',
      ],
    },
    4: {
      level: 4,
      summary: 'Treatment-resistant bipolar disorder requires combination therapy, addressing comorbidities, and consideration of novel agents while managing metabolic and cognitive adverse effects.',
      explanation: `## Treatment Resistance

**Definitions:**
- Failure to respond to ≥2 adequate trials
- Persistent subthreshold symptoms
- Frequent recurrence despite treatment

**Evaluation:**
- Confirm diagnosis (rule out schizoaffective, substance-induced)
- Assess adherence (subjective and objective measures)
- Screen for comorbidities (anxiety, substance use, medical)
- Review medication history (adequate dose/duration?)

## Combination Strategies

**Lithium + Antipsychotic:**
- Evidence: Quetiapine, olanzapine, aripiprazole
- May be superior to monotherapy for acute mania

**Lithium + Valproate:**
- Common in refractory cases
- Monitor levels of both

**Antipsychotic Combinations:**
- Limited evidence for antipsychotic + antipsychotic
- Consider with specialist consultation

## Bipolar Depression

**FDA-Approved Options:**
- Quetiapine (monotherapy)
- Olanzapine/fluoxetine combination
- Lurasidone (monotherapy or with lithium/valproate)
- Cariprazine (monotherapy)
- Lumateperone

**Off-Label/Adjunctive:**
- Lamotrigine (maintenance)
- Lithium augmentation

**Avoid/Use Caution:**
- Antidepressant monotherapy
- Venlafaxine (may be more switching risk than SSRIs)

## Rapid Cycling

**Management:**
- Optimize mood stabilizer (lithium or valproate first)
- Consider lamotrigine for depressive pole
- Avoid antidepressants
- Treat thyroid dysfunction if present
- Address sleep disruption

## Comorbidities

**Anxiety Disorders (50%):**
- Buspirone or benzodiazepine short-term
- Ensure mood stabilization first
- CBT exposure may help

**Substance Use (40-60%):**
- Integrated treatment
- Valproate may be preferred (less overdose risk than lithium)
- Address underlying reasons for use

**Medical:**
- Cardiovascular disease (antipsychotic metabolic effects)
- Thyroid disorders (lithium effect)
- Renal disease (lithium contraindicated)

## Maintenance Treatment

**Indications for Lifelong Treatment:**
- ≥2 severe manic episodes
- ≥1 episode with psychosis
- Suicide attempt
- Rapid cycling pattern
- Strong family history

**Medication Selection:**
- Lithium: Classic mania, suicide prevention
- Valproate: Mixed episodes, rapid cycling
- Lamotrigine: Bipolar depression predominant
- Quetiapine: Mania and depression

## Cognitive Impairment
- 40-60% have cognitive deficits between episodes
- Executive function, verbal memory, attention
- Contributing factors: medications, episodes, comorbidities
- Consider cognitive remediation`,
      keyTerms: [
        { term: 'schizoaffective disorder', definition: 'Condition with both psychotic and mood symptoms; must be distinguished from bipolar with psychosis' },
        { term: 'ultra-rapid cycling', definition: 'Mood episodes alternating within days; consider substance use or medical causes' },
        { term: 'cognitive remediation', definition: 'Training programs to improve cognitive functioning in psychiatric disorders' },
      ],
      clinicalNotes: 'For bipolar depression, consider quetiapine or lurasidone before antidepressants. Always ensure patient is on an adequate mood stabilizer dose before adding antidepressant. If antidepressant is necessary, use SSRI rather than SNRI/venlafaxine.',
    },
    5: {
      level: 5,
      summary: 'Precision psychiatry in bipolar disorder incorporates pharmacogenomics, chronotherapeutics, novel glutamatergic agents, and understanding bipolar as a multisystem disorder with elevated medical mortality.',
      explanation: `## Pharmacogenomics

**Relevant Genes:**
- **SLC6A4 (5-HTTLPR):** Serotonin transporter polymorphism affects SSRI response and switching risk
- **CACNA1C:** Calcium channel gene associated with bipolar risk
- **GSK3B:** Lithium response (not yet clinically actionable)
- **ABCB1:** P-glycoprotein transporter affects drug levels

**Clinical Utility:**
- CYP2D6 and CYP3A4 testing for drug interactions
- HLA-B*1502 screening for carbamazepine in Asian populations
- Most genetic testing remains investigational

## Chronotherapeutics

**Sleep Stabilization:**
- Primary prevention target
- Social rhythm therapy
- Dark therapy (manic episodes)
- Light therapy (bipolar depression—cautiously)

**Evidence:**
- Sleep deprivation can trigger mania
- Irregular schedules predict relapse
- Interpersonal and social rhythm therapy (IPSRT) prevents episodes

## Novel Therapeutics

**Glutamate Modulators:**
- **Ketamine:** Rapid anti-suicidal effects in bipolar depression
- **Riluzole:** Adjunctive for bipolar depression
- **Memantine:** Limited evidence

**Anti-inflammatory:**
- Celecoxib adjunctive
- N-acetylcysteine (NAC)
- Omega-3 fatty acids (mixed evidence)

**Neurostimulation:**
- **ECT:** Effective for severe mania, depression, mixed states
- **TMS:** Evidence for bipolar depression
- **rTMS:** Consider in depression, avoid mania risk

**Potential Future:**
- Purinergic receptor antagonists
- Protein kinase C inhibitors
- Circadian rhythm modulators

## Bipolar Spectrum

**Expanded Concept:**
- Bipolar NOS (not otherwise specified)
- Soft bipolarity
- Bipolar traits in major depression
- Implications for antidepressant use

**Controversies:**
- Overdiagnosis vs. underdiagnosis
- Pediatric bipolar considerations
- Boundaries with borderline personality disorder

## Medical Comorbidity & Mortality

**Life Expectancy:**
- Reduced by 10-20 years
- Cardiovascular disease leading cause
- Suicide: 15-20% completion rate

**Metabolic Effects:**
- Higher rates of diabetes, metabolic syndrome
- Medication contributions (antipsychotics, valproate)
- Lifestyle factors

**Monitoring Requirements:**
- Metabolic panel baseline and periodically
- Weight, BMI, waist circumference
- Lipids, glucose/HbA1c
- Blood pressure
- ECG for some medications

## Special Populations

**Perinatal:**
- High relapse risk off medications
- Lithium: Ebstein anomaly risk (first trimester)
- Antipsychotics generally safer
- Breastfeeding: most medications contraindicated

**Geriatric:**
- Lower medication doses needed
- More medical comorbidity
- Increased falls risk
- Drug interactions

**Pediatric:**
- Controversial diagnosis
- Different presentation (more irritability)
- Family-focused therapy essential
- Limited FDA-approved medications

## Digital Health Technologies
- Smartphone mood monitoring
- Actigraphy for sleep patterns
- Digital phenotyping
- Predictive analytics for relapse
- Telepsychiatry for rural access`,
      keyTerms: [
        { term: 'chronotherapeutics', definition: 'Treatments targeting circadian rhythms and sleep-wake cycles to regulate mood' },
        { term: 'dark therapy', definition: 'Enforced darkness to reduce manic symptoms via circadian regulation' },
        { term: 'soft bipolarity', definition: "Subthreshold bipolar symptoms that don't meet full diagnostic criteria" },
        { term: 'digital phenotyping', definition: 'Using smartphone and sensor data to characterize psychiatric conditions' },
      ],
      clinicalNotes: `Key clinical pearls:

1. **Suicide prevention:** Lithium is the only mood stabilizer with proven suicide prevention benefit—strongly consider in any patient with suicidal history.

2. **Lithium levels:** Check 5-7 days after dose change, then every 3-6 months stable. Target 0.6-1.2 mEq/L for acute mania, 0.6-0.8 mEq/L for maintenance.

3. **Lamotrigine rash:** Slow titration is essential. Discontinue at any sign of rash (except mild benign rash). Start 25 mg every other day, increase over 5+ weeks.

4. **Bipolar depression:** Always optimize mood stabilizer first. If antidepressant needed, use SSRI, ensure mood stabilizer on board, monitor for switching.

5. **Rapid cycling:** Often substance-induced or related to thyroid dysfunction. Treat underlying cause. Avoid antidepressants.

6. **Metabolic monitoring:** Atypical antipsychotics require regular metabolic panels. Consider metabolic profile when selecting agent.

7. **Pregnancy:** Plan before conception. Valproate contraindicated (neural tube defects). Lithium risk lower than previously thought but requires monitoring.

8. **Medication combinations:** Lithium + atypical antipsychotic is evidence-based combination. Lithium + valproate also used but requires monitoring of both.`,
    },
  },

  media: [],
  citations: [
    { id: 'apa-bipolar-2018', type: 'article', title: 'APA Practice Guideline for Treatment of Patients with Bipolar Disorder', source: 'American Psychiatric Association' },
    { id: 'canmat-bipolar-2022', type: 'article', title: 'Canadian Network for Mood and Anxiety Treatments (CANMAT) Guidelines for Bipolar Disorder', source: 'Bipolar Disorders' },
    { id: 'wfsbp-bipolar-2018', type: 'article', title: 'WFSBP Guidelines for Bipolar Disorders', source: 'World Federation of Societies of Biological Psychiatry' },
  ],
  crossReferences: [
    { targetId: 'condition-major-depressive-disorder', targetType: 'condition', relationship: 'related', label: 'Major Depressive Disorder' },
    { targetId: 'condition-schizophrenia', targetType: 'condition', relationship: 'related', label: 'Schizophrenia' },
    { targetId: 'condition-generalized-anxiety-disorder', targetType: 'condition', relationship: 'related', label: 'Generalized Anxiety Disorder' },
  ],
  tags: {
    systems: ['neurological'],
    topics: ['psychiatry', 'mental health', 'mood disorders'],
    keywords: ['bipolar', 'mania', 'hypomania', 'lithium', 'mood stabilizer', 'depression'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['psychiatry'] },
  },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default bipolarDisorder;
