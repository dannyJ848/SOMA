/**
 * Schizoaffective Disorder
 *
 * Comprehensive educational content on schizoaffective disorder,
 * its subtypes, diagnosis, and treatment.
 */

import { EducationalContent } from '../../../types';

export const schizoaffectiveDisorderContent: EducationalContent = {
  id: 'psychiatry-schizoaffective-disorder',
  type: 'condition',
  name: 'Schizoaffective Disorder',
  alternateNames: ['Schizoaffective Psychosis'],

  levels: {
    1: {
      level: 1,
      summary: 'Schizoaffective disorder is a mental health condition that combines symptoms of schizophrenia (like hallucinations) with mood disorder symptoms (like depression or mania).',
      explanation: `Schizoaffective disorder is a condition where a person has both:
- Symptoms of schizophrenia (like hearing voices that aren't there)
- Symptoms of a mood disorder (like feeling very sad or very energized)

**Two Types:**

- **Depressive type**: The person has depression along with psychotic symptoms
- **Bipolar type**: The person has manic episodes (feeling extremely energized and happy) along with psychotic symptoms

**What It Feels Like:**

- Hearing or seeing things others don't
- Believing things that aren't true
- Periods of feeling very sad, hopeless, or empty
- Periods of feeling extremely energetic or "high"
- Trouble thinking clearly
- Difficulty with daily activities

**Important to Know:**

- It's a real medical condition, not a character flaw
- It's treatable with medication and therapy
- Many people with schizoaffective disorder lead fulfilling lives
- Getting help early makes a big difference`,
      keyTerms: [
        { term: 'psychosis', definition: 'Losing touch with reality, like hearing voices or believing things that aren\'t true' },
        { term: 'hallucination', definition: 'Seeing, hearing, or feeling things that aren\'t really there' },
        { term: 'mood episode', definition: 'A period of time with strong changes in mood, either very high or very low' },
      ],
      analogies: [
        'Schizoaffective disorder is like having two radio stations playing at once - one playing psychotic symptoms and one playing mood symptoms.',
      ],
      examples: [
        'A person might hear voices for weeks, and during that time also feel extremely depressed.',
        'Someone might believe they have special powers while also feeling very energetic and not needing sleep.',
      ],
    },
    2: {
      level: 2,
      summary: 'Schizoaffective disorder features concurrent psychotic and mood symptoms, with psychotic symptoms also present in the absence of mood episodes, distinguishing it from mood disorders with psychotic features.',
      explanation: `**Key Diagnostic Features:**

Schizoaffective disorder requires:
- A period with psychotic symptoms (hallucinations, delusions) AND a mood episode (depression or mania) occurring together
- Psychotic symptoms present for at least 2 weeks WITHOUT mood symptoms
- Mood episodes present for most of the illness duration

**Two Subtypes:**

*Bipolar Type:*
- Manic episodes (with or without depression)
- Psychotic symptoms
- More common

*Depressive Type:*
- Major depressive episodes only (no mania)
- Psychotic symptoms
- Often more chronic course

**Distinguishing from Related Disorders:**

*Vs. Schizophrenia:*
- Schizoaffective has prominent mood episodes
- In schizophrenia, mood symptoms are brief if present

*Vs. Bipolar/Depression with Psychotic Features:*
- In mood disorders, psychosis only occurs during mood episodes
- In schizoaffective, psychosis continues without mood symptoms

**Symptoms:**

*Psychotic:*
- Hallucinations (usually auditory)
- Delusions
- Disorganized thinking/speech
- Disorganized or catatonic behavior

*Mood (Depressive):*
- Depressed mood, hopelessness
- Loss of interest
- Sleep and appetite changes
- Suicidal thoughts

*Mood (Manic):*
- Elevated or irritable mood
- Decreased need for sleep
- Grandiosity
- Racing thoughts
- Increased activity

**Treatment:**

- Antipsychotic medications (primary)
- Mood stabilizers (bipolar type)
- Antidepressants (depressive type, used cautiously)
- Psychotherapy (CBT, skills training)
- Psychoeducation and support`,
      keyTerms: [
        { term: 'delusion', definition: 'A fixed, false belief that persists despite evidence to the contrary' },
        { term: 'mania', definition: 'A period of abnormally elevated, expansive, or irritable mood with increased energy' },
        { term: 'mood stabilizer', definition: 'Medication that helps even out mood swings, like lithium or valproate' },
      ],
    },
    3: {
      level: 3,
      summary: 'Schizoaffective disorder diagnosis requires psychotic symptoms during mood episodes plus at least 2 weeks of psychosis without mood symptoms, with mood episodes present for the majority of the total illness duration.',
      explanation: `**DSM-5 Diagnostic Criteria:**

A. An uninterrupted period of illness with:
- Major mood episode (depressive or manic) AND
- Criterion A symptoms of schizophrenia (≥2 of: delusions, hallucinations, disorganized speech, disorganized/catatonic behavior, negative symptoms)

B. Delusions or hallucinations for ≥2 weeks in the ABSENCE of a major mood episode during the lifetime duration of illness

C. Mood episode symptoms present for the MAJORITY of the total duration of the active and residual portions of illness

D. Not attributable to substances or medical conditions

**Subtype Specifiers:**
- Bipolar type: Manic episode included
- Depressive type: Only major depressive episodes

**Epidemiology:**
- Prevalence: ~0.3%
- Less common than schizophrenia or bipolar
- More common in women
- Bipolar type more common than depressive type

**Differential Diagnosis:**

*Schizophrenia vs. Schizoaffective:*
- Key: Duration of mood episodes relative to psychosis
- If mood episodes brief → schizophrenia
- If mood episodes majority of illness → schizoaffective

*Mood Disorder with Psychotic Features vs. Schizoaffective:*
- Key: Psychosis without mood episode
- If psychosis ONLY during mood episodes → mood disorder with psychosis
- If psychosis continues 2+ weeks without mood → schizoaffective

**Neurobiological Findings:**

- Intermediate between schizophrenia and mood disorders
- Dopamine and serotonin dysregulation
- Similar structural brain changes to schizophrenia
- Genetic overlap with both schizophrenia and bipolar

**Treatment Approach:**

*First-line:*
- Second-generation antipsychotics (risperidone, olanzapine, quetiapine)
- Monotherapy often preferred initially

*Bipolar Type:*
- Antipsychotic + mood stabilizer (lithium or valproate)
- Some SGAs have mood-stabilizing properties

*Depressive Type:*
- Antipsychotic ± antidepressant
- Caution: antidepressants may destabilize

*Adjunctive:*
- CBT for psychosis
- Social skills training
- Family psychoeducation
- Supported employment/education`,
      keyTerms: [
        { term: 'negative symptoms', definition: 'Symptoms involving absence of normal functions: flat affect, avolition, alogia, anhedonia' },
        { term: 'criterion A symptoms', definition: 'Core schizophrenia symptoms: delusions, hallucinations, disorganized speech, disorganized behavior, negative symptoms' },
        { term: 'second-generation antipsychotic', definition: 'Newer antipsychotics (atypicals) with serotonin and dopamine blockade' },
      ],
    },
    4: {
      level: 4,
      summary: 'Schizoaffective disorder occupies a nosological position between schizophrenia and mood disorders, with shared genetic liability, intermediate phenotype, and treatment requiring integration of antipsychotic and mood-directed pharmacotherapy.',
      explanation: `**Nosological Controversies:**

- Position on schizophrenia-bipolar spectrum debated
- Some view as comorbid schizophrenia + mood disorder
- Others view as distinct entity
- DSM-5 criteria improved reliability but challenges remain

**Genetic Architecture:**

*Shared Genetic Liability:*
- Common variants shared with schizophrenia AND bipolar
- Polygenic risk scores intermediate
- Some unique genetic signals

*Family Studies:*
- Increased risk of schizophrenia AND mood disorders in relatives
- Supports spectrum concept

**Neuroimaging:**

*Structural:*
- Intermediate gray matter reductions (between SZ and BD)
- Ventricular enlargement (less than SZ)
- Hippocampal volume reduction

*Functional:*
- Prefrontal dysfunction during cognitive tasks
- Limbic hyperactivation during emotional processing

**Neurochemistry:**

- Dopamine dysregulation (psychosis)
- Serotonin involvement (mood)
- Glutamate abnormalities
- GABAergic deficits

**Clinical Course:**

- Variable; generally intermediate prognosis
- Better than schizophrenia, worse than mood disorders
- Depressive type often more chronic
- Bipolar type more episodic
- Suicide risk significant

**Pharmacotherapy Details:**

*Antipsychotics:*
- Second-generation preferred (olanzapine, risperidone, quetiapine, aripiprazole)
- Clozapine for treatment-resistant cases
- Long-acting injectables for adherence

*Mood Stabilizers:*
- Lithium: Evidence in bipolar type
- Valproate: Common adjunct
- Carbamazepine: Second-line
- Lamotrigine: Depressive symptoms (limited evidence)

*Antidepressants:*
- Use cautiously (may induce mania or destabilize)
- Generally add to antipsychotic/mood stabilizer
- SSRIs preferred if used

**Psychosocial Interventions:**

- Cognitive Behavioral Therapy for psychosis (CBTp)
- Cognitive remediation
- Family psychoeducation
- Social skills training
- Supported employment (IPS model)
- Illness management and recovery

**Metabolic Monitoring:**

- SGAs increase metabolic risk
- Regular monitoring: weight, glucose, lipids
- Lifestyle interventions
- Consider aripiprazole or ziprasidone for metabolic concerns`,
      keyTerms: [
        { term: 'nosology', definition: 'Classification of diseases; the position of schizoaffective disorder is debated' },
        { term: 'polygenic risk score', definition: 'Aggregate genetic risk calculated from many common variants' },
        { term: 'IPS model', definition: 'Individual Placement and Support, evidence-based supported employment' },
      ],
      clinicalNotes: 'Diagnosis can be challenging; longitudinal assessment helps. Treatment combines antipsychotic with mood-directed therapy. Monitor for metabolic effects. Psychosocial support essential. Clozapine for treatment resistance.',
    },
    5: {
      level: 5,
      summary: 'Contemporary understanding positions schizoaffective disorder within a psychosis-mood spectrum, with research focusing on dimensional approaches, biomarkers for subtyping, and personalized treatment strategies integrating pharmacological and psychosocial modalities.',
      explanation: `**Dimensional vs. Categorical Approaches:**

*Continuum Model:*
- Psychosis-affective spectrum from pure schizophrenia to pure mood disorder
- Schizoaffective as intermediate phenotype
- Supported by genetic, imaging, and clinical data

*RDoC Framework:*
- Transdiagnostic dimensions
- Positive valence systems (anhedonia, reward)
- Cognitive systems (executive function)
- Arousal/regulatory systems

*NIMH Biotype Project:*
- Data-driven clustering
- Three biotypes identified across diagnoses
- May cross traditional boundaries

**Genetic Insights:**

*GWAS Findings:*
- Significant genetic correlation with both SZ (r~0.7) and BD (r~0.5)
- Some unique loci
- Rare variants (CNVs) overlap with both

*Pathway Analysis:*
- Synaptic signaling
- Calcium channel function
- Histone methylation
- HLA region (immune)

**Biomarker Research:**

*Candidate Markers:*
- Inflammatory markers (CRP, IL-6)
- BDNF levels
- Cortisol dysregulation
- Eye tracking abnormalities
- P300 ERP component

*Neuroimaging:*
- Multimodal approaches
- Machine learning classification
- Connectivity patterns

**Treatment Advances:**

*Pharmacological:*
- Long-acting injectables improving adherence
- Lumateperone: Novel mechanism (5-HT2A/D2/D1)
- Cariprazine: D3 preferring
- Pimavanserin: 5-HT2A inverse agonist (for psychosis)

*Clozapine:*
- Underutilized despite efficacy
- Consider earlier in treatment-resistant cases
- Monitoring requirements (ANC)

*Novel Targets:*
- Glutamate modulators
- TAAR1 agonists
- Muscarinic agonists

**Psychosocial Advances:**

*Evidence-Based Practices:*
- NAVIGATE model (coordinated specialty care)
- RAISE study findings applicable
- CBTp manualized protocols
- Metacognitive therapy

*Recovery-Oriented Care:*
- Person-centered treatment planning
- Shared decision-making
- Peer support
- Housing First models

*Digital Interventions:*
- Smartphone apps for symptom monitoring
- Computerized cognitive training
- Telehealth for psychotherapy

**Special Populations:**

*First Episode:*
- Early intervention critical
- Coordinated specialty care
- Lower antipsychotic doses
- Family involvement

*Treatment Resistance:*
- Clozapine (40-60% respond)
- ECT (especially with catatonia or severe mood)
- Augmentation strategies

**Research Priorities:**

1. Validated biomarkers for diagnosis and treatment selection
2. Targeted treatments based on symptom dimensions
3. Prevention strategies
4. Long-term outcome studies
5. Personalized medicine approaches
6. Integration of biological and psychosocial treatments`,
      keyTerms: [
        { term: 'TAAR1 agonist', definition: 'Trace amine-associated receptor 1 agonist, novel antipsychotic mechanism' },
        { term: 'NAVIGATE model', definition: 'Coordinated specialty care program for first-episode psychosis' },
        { term: 'biotype', definition: 'Biologically-defined subgroup that may cross diagnostic categories' },
      ],
      clinicalNotes: `Clinical practice points:
- Longitudinal assessment improves diagnostic accuracy
- Combine antipsychotic with mood-directed treatment
- Consider LAIs for adherence
- Clozapine for treatment resistance
- Integrate psychosocial interventions
- Monitor metabolic parameters
- Suicide risk assessment ongoing

Emerging practices:
- Coordinated specialty care models
- Dimensional symptom targeting
- Digital adjuncts
- Recovery-oriented frameworks`,
    },
  },

  media: [
    {
      id: 'schizoaffective-spectrum-diagram',
      type: 'diagram',
      filename: 'schizoaffective_spectrum.svg',
      title: 'Psychosis-Mood Spectrum',
      description: 'Diagram showing schizoaffective disorder position between schizophrenia and mood disorders',
    },
  ],

  citations: [
    {
      id: 'dsm-5-schizoaffective',
      type: 'textbook',
      title: 'Diagnostic and Statistical Manual of Mental Disorders, 5th Edition',
      authors: ['American Psychiatric Association'],
      source: 'American Psychiatric Publishing',
      chapter: 'Schizophrenia Spectrum and Other Psychotic Disorders',
    },
  ],

  crossReferences: [
    { targetId: 'psychiatry-schizophrenia', targetType: 'condition', relationship: 'related', label: 'Schizophrenia' },
    { targetId: 'psychiatry-bipolar-disorder', targetType: 'condition', relationship: 'related', label: 'Bipolar Disorder' },
    { targetId: 'psychiatry-antipsychotics', targetType: 'topic', relationship: 'see-also', label: 'Antipsychotics' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['psychiatry', 'psychotic disorders'],
    keywords: ['schizoaffective', 'psychosis', 'mood disorder', 'schizophrenia spectrum'],
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

export default schizoaffectiveDisorderContent;
