/**
 * Schizophrenia - Comprehensive Educational Content
 *
 * Comprehensive coverage of schizophrenia including pathophysiology,
 * clinical presentation, diagnosis, and treatment strategies.
 */

import { EducationalContent } from '../../../types';

export const schizophreniaContent: EducationalContent = {
  id: 'psychiatry-schizophrenia',
  type: 'condition',
  name: 'Schizophrenia',
  alternateNames: ['Schizophrenic Disorder', 'Psychotic Disorder'],
  hpoId: 'HP:0100753',

  levels: {
    1: {
      level: 1,
      summary: 'Schizophrenia is a chronic mental health condition that affects how a person thinks, feels, and behaves, causing hallucinations, delusions, and disorganized thinking.',
      explanation: `Schizophrenia is a serious mental illness that affects about 1% of people. It can cause significant disability but is treatable.

**Symptoms:**

*Positive Symptoms (Things Added):*
- Hallucinations: Hearing voices, seeing things that are not there
- Delusions: False beliefs that are not based in reality
- Disorganized thinking: Trouble organizing thoughts

*Negative Symptoms (Things Taken Away):*
- Reduced emotional expression
- Less motivation to do things
- Social withdrawal
- Difficulty experiencing pleasure

**Early Warning Signs:**
- Withdrawing from friends and family
- Trouble sleeping
- Difficulty concentrating
- Suspiciousness of others
- Decline in self-care

**Causes:**
- Combination of genetic and environmental factors
- No single cause known
- Not caused by bad parenting

**Treatment:**
- Antipsychotic medications (most important treatment)
- Therapy and social support
- Family education
- With treatment, many people live fulfilling lives`,
      keyTerms: [
        { term: 'hallucination', definition: 'Seeing or hearing things that are not real' },
        { term: 'delusion', definition: 'A false belief that cannot be changed by logic or evidence' },
        { term: 'antipsychotic', definition: 'Medication that helps reduce psychotic symptoms' },
      ],
      analogies: [
        'The brain is like a radio that normally receives clear signals. In schizophrenia, the radio picks up static and extra stations, making it hard to focus on what is real.',
      ],
      examples: [
        'A young adult starts hearing voices and believing people are trying to harm them.',
        'With medication and support, a person with schizophrenia goes to work and maintains relationships.',
      ],
    },
    2: {
      level: 2,
      summary: 'Schizophrenia is characterized by positive symptoms (hallucinations, delusions), negative symptoms, and cognitive impairment; antipsychotic medications are the mainstay of treatment.',
      explanation: `Schizophrenia is a chronic psychotic disorder requiring comprehensive treatment.

**Diagnostic Criteria (DSM-5):**
- Two or more of: Delusions, hallucinations, disorganized speech, disorganized behavior, negative symptoms
- At least one must be delusions, hallucinations, or disorganized speech
- Continuous signs for ≥6 months, including ≥1 month of active phase
- Significant functional impairment
- Not better explained by another condition

**Symptom Categories:**
- Positive: Hallucinations, delusions, disorganized thinking/behavior
- Negative: Flat affect, alogia, avolition, anhedonia, asociality
- Cognitive: Attention, working memory, executive function deficits
- Mood symptoms: May be present; important for differential diagnosis

**Differential Diagnosis:**
- Schizoaffective disorder: Mood episodes with psychotic features
- Brief psychotic disorder: <1 month duration
- Schizophreniform disorder: 1-6 months duration
- Drug-induced psychosis
- Medical conditions: Delirium, dementia, brain tumors

**Antipsychotic Medications:**
- First-generation (typical): Haloperidol, chlorpromazine
- Second-generation (atypical): Risperidone, olanzapine, quetiapine, aripiprazole
- Long-acting injectables (LAIs): For adherence issues`,
      keyTerms: [
        { term: 'DSM-5', definition: 'Diagnostic and Statistical Manual of Mental Disorders, 5th edition' },
        { term: 'first-generation antipsychotic', definition: 'Older antipsychotics; more movement side effects' },
        { term: 'second-generation antipsychotic', definition: 'Newer antipsychotics; lower movement side effects' },
      ],
    },
    3: {
      level: 3,
      summary: 'Schizophrenia treatment requires antipsychotics; second-generation agents are generally first-line due to better tolerability; psychosocial interventions improve outcomes and quality of life.',
      explanation: `Comprehensive schizophrenia treatment combines pharmacotherapy with psychosocial interventions.

**Antipsychotic Selection:**
- Second-generation preferred as first-line (except clozapine)
- Consider: Side effect profile, prior response, patient preference, route of administration
- Clozapine: Most effective, reserved for treatment resistance (failed 2 antipsychotics)

**Side Effect Profiles:**
- Metabolic: Olanzapine, clozapine (highest risk)
- Extrapyramidal: Haloperidol, risperidone (higher risk)
- Prolactin elevation: Risperidone, paliperidone
- Sedation: Quetiapine, olanzapine, clozapine
- Weight neutral: Aripiprazole, ziprasidone, lurasidone

**Monitoring:**
- Metabolic: Weight, glucose, lipids at baseline, 12 weeks, then annually
- Movement disorders: AIMS, Barnes Akathisia Scale
- ECG: QTc prolongation (ziprasidone, iloperidone)

**Psychosocial Interventions:**
- Cognitive behavioral therapy for psychosis (CBTp)
- Family psychoeducation: Reduces relapse
- Supported employment: Improves vocational outcomes
- Assertive community treatment (ACT): For high utilizers
- Social skills training

**Course and Prognosis:**
- Earlier onset = worse prognosis
- 20-30% have good outcome with treatment
- Negative and cognitive symptoms often persist
- Suicide risk: 5-10% (highest early in illness)`,
      keyTerms: [
        { term: 'clozapine', definition: 'Most effective antipsychotic; requires monitoring for agranulocytosis' },
        { term: 'CBTp', definition: 'Cognitive behavioral therapy adapted for psychosis' },
        { term: 'AIMS', definition: 'Abnormal Involuntary Movement Scale for tardive dyskinesia' },
      ],
    },
    4: {
      level: 4,
      summary: 'Schizophrenia treatment requires individualized antipsychotic selection with attention to side effects; clozapine is underutilized for treatment resistance; coordinated specialty care improves early outcomes.',
      explanation: `Advanced schizophrenia management addresses treatment resistance, side effect management, and phase-specific interventions.

**Treatment-Resistant Schizophrenia (TRS):**
- Definition: Failure of adequate trials of ≥2 different antipsychotics
- Clozapine should be offered
- Only 4% of eligible patients receive clozapine (underutilized)
- Clozapine initiation:
  - CBC weekly x 6 months, then every 2 weeks x 6 months, then monthly
  - Agranulocytosis risk: 0.8%, highest in first 18 weeks
  - Other serious effects: Myocarditis, seizures, metabolic syndrome

**Managing Side Effects:**

*Extrapyramidal Symptoms:*
- Acute dystonia: Benztropine, diphenhydramine
- Akathisia: Beta-blockers, benzodiazepines, reduce dose
- Parkinsonism: Anticholinergics
- Tardive dyskinesia: VMAT2 inhibitors (valbenazine, deutetrabenazine)

*Metabolic Effects:*
- Switch to metabolic-neutral agent
- Lifestyle intervention
- Metformin for antipsychotic-induced weight gain

**Coordinated Specialty Care (CSC):**
- For first-episode psychosis
- Team-based: Medication management, CBT, family education, supported employment
- NAVIGATE, RA1SE programs
- Improves outcomes vs. usual care

**Long-Acting Injectables (LAIs):**
- Prevent relapse from non-adherence
- Options: Paliperidone, risperidone, aripiprazole, olanzapine, haloperidol
- Consider early in illness course
- Not punitive; improves autonomy`,
      keyTerms: [
        { term: 'TRS', definition: 'Treatment-resistant schizophrenia; clozapine indicated' },
        { term: 'VMAT2 inhibitor', definition: 'Valbenazine, deutetrabenazine for tardive dyskinesia' },
        { term: 'CSC', definition: 'Coordinated specialty care for first-episode psychosis' },
      ],
    },
    5: {
      level: 5,
      summary: 'Expert schizophrenia management integrates individualized pharmacotherapy (with appropriate clozapine use), psychosocial interventions, and early intervention services; understanding neurobiology informs emerging treatments.',
      explanation: `Expert-level schizophrenia care requires comprehensive understanding of the disorder and its management.

**Neurobiology:**
- Dopamine hypothesis: Hyperactivity in mesolimbic pathway, hypoactivity in prefrontal cortex
- Glutamate hypothesis: NMDA receptor hypofunction
- Neurodevelopmental model: Prenatal/early life disruptions
- Neuroinflammation: Microglial activation in some patients
- Brain changes: Ventricular enlargement, gray matter reduction

**Phases of Illness:**
- Prodrome: Subtle changes, functional decline, may benefit from early intervention
- First episode: Critical period for intervention; best outcomes with intensive treatment
- Chronic: Maintenance treatment; focus on function and quality of life

**Clozapine Optimization:**
- Therapeutic levels: 350-500 ng/mL
- Many non-responders are under-dosed
- Augmentation options: ECT, lamotrigine, topiramate
- Long-term monitoring: ANC, metabolic, cardiac

**Special Populations:**

*First-Episode:*
- Lower antipsychotic doses often effective
- High risk of discontinuation
- CSC improves outcomes

*Elderly:*
- Increased sensitivity to side effects
- Higher mortality with antipsychotics (black box warning for dementia)
- Use lowest effective dose

*Comorbid Substance Use:*
- 50% have substance use disorder
- Integrated treatment for both conditions
- Clozapine may reduce substance use

**Emerging Treatments:**
- Lumateperone: Novel mechanism (presynaptic D2 partial agonist, postsynaptic D2 antagonist)
- KarXT: Muscarinic agonist/antagonist in trials
- Anti-inflammatory approaches
- Neuromodulation: TMS, DBS (investigational)`,
      keyTerms: [
        { term: 'lumateperone', definition: 'Novel antipsychotic with unique D2 mechanism' },
        { term: 'critical period', definition: 'First 5 years after onset; intensive treatment improves outcomes' },
        { term: 'prodrome', definition: 'Early symptoms before full psychotic break' },
      ],
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['psychiatric'],
    topics: ['psychotic disorder', 'schizophrenia', 'psychosis'],
    keywords: ['schizophrenia', 'psychosis', 'antipsychotic', 'hallucination'],
    clinicalRelevance: 'high',
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default schizophreniaContent;
