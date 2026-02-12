/**
 * Bipolar Disorder - Comprehensive Educational Content
 *
 * Comprehensive content covering bipolar disorder types, pathophysiology,
 * clinical presentation, and evidence-based treatment approaches.
 */

import { EducationalContent } from '../../../types';

export const bipolarDisorderContent: EducationalContent = {
  id: 'psychiatry-bipolar-disorder',
  type: 'condition',
  name: 'Bipolar Disorder',
  alternateNames: ['Manic-Depressive Illness', 'Bipolar Affective Disorder', 'Manic Depression'],
  hpoId: 'HP:0007302',

  levels: {
    1: {
      level: 1,
      summary: 'Bipolar disorder is a mental health condition that causes extreme mood swings from emotional highs (mania) to lows (depression).',
      explanation: `Bipolar disorder is a condition that affects your mood, energy, and activity levels. People with bipolar disorder experience dramatic shifts in mood.

**Types of Episodes:**

*Manic Episode (High):*
- Feeling very happy or irritable
- Lots of energy, very active
- Talking fast, jumping between topics
- Little need for sleep
- Risky behavior (spending sprees, impulsive decisions)
- Feeling unusually powerful or important

*Depressive Episode (Low):*
- Feeling very sad or empty
- Loss of interest in activities
- Tired, low energy
- Trouble sleeping or sleeping too much
- Difficulty concentrating
- Thoughts of death or suicide

**Types of Bipolar Disorder:**
- Bipolar I: At least one manic episode
- Bipolar II: Depressive episodes and hypomanic episodes (less severe than mania)
- Cyclothymic: Milder but chronic mood swings

**Treatment:**
- Mood stabilizing medications (lithium, valproate)
- Antipsychotic medications
- Therapy and counseling
- Lifestyle changes (regular sleep, avoiding drugs/alcohol)
- Help is available - this is a treatable condition`,
      keyTerms: [
        { term: 'mania', definition: 'A period of extremely elevated mood and energy' },
        { term: 'hypomania', definition: 'A milder form of mania' },
        { term: 'mood stabilizer', definition: 'Medication that helps prevent extreme mood swings' },
      ],
      analogies: [
        'Moods are like a thermostat. In bipolar disorder, the thermostat is broken - it turns way up (mania) or way down (depression) instead of staying comfortable.',
      ],
      examples: [
        'A person who was very energetic and not sleeping suddenly becomes severely depressed and cannot get out of bed.',
        'Someone with bipolar disorder takes medication regularly and lives a stable, productive life.',
      ],
    },
    2: {
      level: 2,
      summary: 'Bipolar disorder is characterized by episodes of mania/hypomania and depression; lifelong mood stabilizer treatment is typically required to prevent episodes.',
      explanation: `Bipolar disorder is a chronic mood disorder with significant impact on functioning and quality of life.

**Diagnostic Criteria:**

*Bipolar I Disorder:*
- At least one lifetime manic episode
- Mania: ≥1 week of elevated/irritable mood plus ≥3 symptoms (or ≥4 if irritable)
- Causes significant impairment or hospitalization

*Bipolar II Disorder:*
- At least one hypomanic episode and one major depressive episode
- Hypomania: ≥4 days of elevated mood, not causing marked impairment
- No manic episode ever

**Manic/Hypomanic Symptoms (DIG FAST):**
- Distractibility
- Indiscretion (risk-taking)
- Grandiosity
- Flight of ideas
- Activity increase
- Sleep deficit
- Talkativeness

**Differential Diagnosis:**
- Major depressive disorder (if no manic/hypomanic episodes)
- Schizoaffective disorder
- Substance-induced mood disorder
- Medical conditions (hyperthyroidism, Cushing's)

**Treatment:**
- First-line mood stabilizers: Lithium, valproate, carbamazepine
- Atypical antipsychotics: Quetiapine, olanzapine, lurasidone
- Psychotherapy: CBT, family-focused therapy, IPSRT
- Avoid antidepressants without mood stabilizer (can trigger mania)`,
      keyTerms: [
        { term: 'DIG FAST', definition: 'Mnemonic for manic symptoms: Distractibility, Indiscretion, Grandiosity, Flight of ideas, Activity, Sleep, Talkativeness' },
        { term: 'IPSRT', definition: 'Interpersonal and social rhythm therapy; helps stabilize daily routines' },
        { term: 'lithium', definition: 'First mood stabilizer; gold standard for bipolar disorder' },
      ],
    },
    3: {
      level: 3,
      summary: 'Bipolar disorder requires lifelong pharmacotherapy; lithium remains the gold standard with evidence for mood stabilization and suicide prevention; adjunctive psychotherapy improves outcomes.',
      explanation: `Evidence-based bipolar disorder management integrates pharmacotherapy with psychotherapy and lifestyle interventions.

**Pharmacotherapy:**

*Acute Mania:*
- Lithium, valproate, carbamazepine
- Atypical antipsychotics: Olanzapine, quetiapine, risperidone, aripiprazole
- Often combination therapy

*Acute Depression (Bipolar):*
- Quetiapine, lurasidone, cariprazine (FDA approved)
- Lamotrigine (prevention more than acute)
- Lithium has antidepressant properties
- Antidepressants: Controversial; use only with mood stabilizer

*Maintenance:*
- Lithium: Reduces suicide risk 60%, prevents both poles
- Valproate: Prevents mania more than depression
- Lamotrigine: Prevents depression more than mania

**Lithium Monitoring:**
- Serum level: 0.6-1.2 mEq/L
- Renal function, thyroid, calcium every 6-12 months
- Toxicity: Tremor, GI symptoms, confusion, seizures

**Psychotherapy:**
- CBT: Addresses cognitive distortions, medication adherence
- Family-focused therapy: Reduces relapse rates
- IPSRT: Stabilizes sleep/wake cycles
- Psychoeducation: Recognizing early warning signs

**Co-occurring Conditions:**
- Substance use: Very common; affects course and treatment
- Anxiety disorders: May require additional treatment
- ADHD: Careful differential diagnosis; stimulants may destabilize`,
      keyTerms: [
        { term: 'lamotrigine', definition: 'Mood stabilizer particularly effective for bipolar depression prevention' },
        { term: 'psychoeducation', definition: 'Teaching patients and families about the illness and treatment' },
        { term: 'maintenance therapy', definition: 'Long-term treatment to prevent episode recurrence' },
      ],
    },
    4: {
      level: 4,
      summary: 'Bipolar treatment is phase-specific; lithium is most effective for classic bipolar I; atypical antipsychotics have expanded treatment options; combination therapy is often necessary.',
      explanation: `Advanced bipolar disorder management requires understanding of treatment selection for different phases and presentations.

**Phase-Specific Treatment:**

*Acute Mania:*
- Monotherapy or combination (antimanic + antipsychotic)
- Olanzapine: Most efficacious but metabolic effects
- Valproate loading: 20-30 mg/kg/day
- Avoid antidepressants

*Acute Bipolar Depression:*
- Quetiapine (only agent effective monotherapy)
- Lurasidone, cariprazine: Weight-neutral options
- Lamotrigine: Slow titration limits acute use
- Lithium: Modest antidepressant effect
- Antidepressant controversy: MAY consider with mood stabilizer, short-term, close monitoring

*Maintenance:*
- Continue successful acute treatment
- Lithium: Best evidence for suicide prevention, any-pole prophylaxis
- Consider patient's predominant polarity

**Special Presentations:**

*Rapid Cycling:*
- ≥4 episodes/year
- Often treatment-resistant
- Rule out: Thyroid, substances, antidepressant-induced
- Lithium, lamotrigine combinations; avoid antidepressants

*Mixed Features:*
- Manic/hypomanic with depressive symptoms, or vice versa
- High suicide risk
- Atypical antipsychotics preferred
- Avoid antidepressants and TCAs

**Metabolic Monitoring for Atypical Antipsychotics:**
- Baseline: Weight, waist, lipids, glucose, BP
- Frequent monitoring during titration
- Switch if >7% weight gain

**Lithium Long-term Effects:**
- Renal: Chronic tubulointerstitial nephropathy
- Thyroid: Hypothyroidism (20-30%)
- Hyperparathyroidism
- Cardiac: Sinus node dysfunction
- Pregnancy: Ebstein anomaly (first trimester)`,
      keyTerms: [
        { term: 'rapid cycling', definition: '≥4 mood episodes per year; predicts treatment resistance' },
        { term: 'mixed features', definition: 'Simultaneous manic and depressive symptoms; high risk' },
        { term: 'predominant polarity', definition: 'Whether mania or depression predominates; guides maintenance treatment' },
      ],
    },
    5: {
      level: 5,
      summary: 'Bipolar disorder management requires phase-specific, personalized pharmacotherapy with attention to comorbidities; lithium remains unique for anti-suicide properties; emerging therapies target novel mechanisms.',
      explanation: `Expert bipolar disorder management integrates comprehensive assessment, personalized treatment, and longitudinal care.

**Treatment Resistance:**
- Definition: Failure of adequate trials of ≥2 mood stabilizers
- Consider: Adherence, comorbid substance use, medical conditions
- Options:
  - Clozapine: Evidence for refractory bipolar
  - Electroconvulsive therapy (ECT): For severe mania, depression, psychosis
  - Combination mood stabilizers (lithium + valproate or lamotrigine)
  - Adjunctive: Thyroid augmentation (T3), omega-3, N-acetylcysteine

**Neurobiology:**
- Genetic: High heritability (80-90%); polygenic
- Neurotransmitter: Dysregulated dopamine, serotonin, norepinephrine, glutamate
- Intracellular: PKC, GSK-3β, inositol pathways (lithium targets)
- Neuroprogression: Episode-associated cognitive decline, gray matter loss

**Biomarkers and Prediction:**
- No validated biomarkers for diagnosis
- Predictors of lithium response: Family history, episodic course, mania-depression-interval pattern
- Pharmacogenomics: Limited clinical utility currently

**Pregnancy and Postpartum:**
- High relapse risk postpartum (50%)
- Lithium: Low dose, monitor levels; increases Ebstein anomaly (0.05% to 0.1%)
- Lamotrigine: Relatively safe, pregnancy alters levels
- Valproate: Avoid (neural tube defects, developmental delays)
- Breastfeeding: Consider risks and benefits; some medications compatible

**Emerging Therapies:**
- Ketamine/esketamine: For treatment-resistant bipolar depression
- Anti-inflammatory approaches: Minocycline, celecoxib
- Metabotropic glutamate modulators
- Circadian rhythm interventions`,
      keyTerms: [
        { term: 'GSK-3β', definition: 'Glycogen synthase kinase-3 beta; target of lithium' },
        { term: 'neuroprogression', definition: 'Worsening course with episode accumulation' },
        { term: 'postpartum relapse', definition: 'High risk period; requires proactive management' },
      ],
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['psychiatric'],
    topics: ['mood disorder', 'bipolar', 'mania'],
    keywords: ['bipolar disorder', 'mania', 'lithium', 'mood stabilizer'],
    clinicalRelevance: 'high',
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default bipolarDisorderContent;
