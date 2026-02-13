/**
 * Schizophrenia
 *
 * Comprehensive educational content on schizophrenia,
 * its neurobiology, diagnosis, and treatment with emphasis on reducing stigma.
 */

import { EducationalContent } from '../../../types';

export const schizophreniaContent: EducationalContent = {
  id: 'psychiatry-schizophrenia',
  type: 'condition',
  name: 'Schizophrenia',
  alternateNames: ['Schizophrenia Spectrum Disorder'],

  levels: {
    1: {
      level: 1,
      summary: 'Schizophrenia is a brain disorder that affects how a person thinks, feels, and behaves, sometimes causing them to hear or see things that are not there or believe things that are not true.',
      explanation: `Schizophrenia is a medical condition that affects the brain. It changes how people think, feel, and experience the world around them. It is NOT about having "multiple personalities" - that is a common myth.

**What Schizophrenia Can Cause:**

*Positive Symptoms (things added to experience):*
- Hearing voices that others cannot hear (hallucinations)
- Believing things that are not true (delusions)
- Seeing things that are not there
- Confused thinking

*Negative Symptoms (things taken away):*
- Less interest in activities
- Difficulty showing emotions
- Trouble starting and continuing activities
- Speaking less
- Withdrawing from friends and family

*Thinking Problems:*
- Trouble concentrating
- Memory difficulties
- Difficulty making decisions

**Important Facts:**

- Schizophrenia affects about 1 in 100 people
- It usually begins in the late teens to early 30s
- It is NOT caused by bad parenting or personal weakness
- It is a brain disorder, like Parkinson's or epilepsy
- People with schizophrenia are NOT typically violent (this is a harmful stereotype)
- With treatment, many people with schizophrenia live fulfilling lives

**What Causes It:**

Schizophrenia is caused by a combination of:
- Genes (it can run in families)
- Brain chemistry (imbalances in brain chemicals)
- Brain development (differences in how the brain develops)
- Environmental factors (stress, prenatal factors)

**Treatment:**

- Medications help control symptoms
- Therapy helps with coping skills
- Support from family and community is important
- Many people improve significantly with treatment
- Recovery is possible - people can and do get better!

**Reducing Stigma:**

People with schizophrenia deserve understanding and support, not fear or judgment. They have a medical condition and, with proper treatment, can be valuable members of their communities.`,
      keyTerms: [
        { term: 'hallucination', definition: 'Seeing, hearing, or sensing something that is not really there' },
        { term: 'delusion', definition: 'A strong belief in something that is not true and does not match reality' },
        { term: 'psychosis', definition: 'When someone has difficulty telling what is real from what is not real' },
      ],
      analogies: [
        'Schizophrenia affects the brain like diabetes affects the pancreas - it is a medical condition, not a choice or character flaw.',
        'Hearing voices in schizophrenia is like the brain creating realistic sounds that the person truly experiences, even though they are not from outside.',
      ],
      examples: [
        'A person might hear a voice commenting on what they are doing, as real as someone talking next to them.',
        'Someone might believe they are being watched or followed, even when there is no evidence.',
        'With treatment, many people with schizophrenia work, have relationships, and contribute to their communities.',
      ],
    },
    2: {
      level: 2,
      summary: 'Schizophrenia is characterized by positive symptoms (hallucinations, delusions), negative symptoms (avolition, flat affect), and cognitive impairment, treated primarily with antipsychotic medications and psychosocial interventions.',
      explanation: `**Symptoms of Schizophrenia:**

*Positive Symptoms (present):*
- Hallucinations (usually auditory - hearing voices)
- Delusions (paranoid, grandiose, referential)
- Disorganized thinking/speech
- Disorganized or abnormal motor behavior

*Negative Symptoms (absent):*
- Avolition (lack of motivation)
- Anhedonia (lack of pleasure)
- Asociality (social withdrawal)
- Alogia (poverty of speech)
- Flat affect (reduced emotional expression)

*Cognitive Symptoms:*
- Working memory deficits
- Attention problems
- Executive function impairment
- Processing speed reduction

**Diagnostic Criteria (simplified):**
- Two or more symptoms for significant time during 1 month
- At least one must be: delusions, hallucinations, or disorganized speech
- Continuous signs for at least 6 months
- Significant functional impairment
- Not due to substances or medical conditions

**Course and Prognosis:**
- Typically begins in late adolescence/early adulthood
- Prodromal phase often precedes first episode
- Variable course - some recover well, others have chronic symptoms
- Negative symptoms often persist even when positive symptoms controlled
- Life expectancy reduced (medical comorbidity, suicide)

**Causes:**

*Neurodevelopmental:*
- Brain changes begin before birth
- Abnormal synaptic pruning in adolescence
- Progressive changes in some patients

*Dopamine Hypothesis:*
- Excess dopamine in mesolimbic pathway → positive symptoms
- Reduced dopamine in mesocortical pathway → negative/cognitive symptoms

*Genetic:*
- ~80% heritability
- Multiple genes involved
- Family history is strongest risk factor

*Environmental:*
- Prenatal infection/stress
- Birth complications
- Cannabis use in adolescence
- Urban environment, migration

**Treatment:**

*Antipsychotic Medications:*
- Block dopamine D2 receptors
- First-generation (typical): Haloperidol, chlorpromazine
- Second-generation (atypical): Risperidone, olanzapine, quetiapine, aripiprazole
- Clozapine for treatment-resistant cases

*Psychosocial Interventions:*
- Cognitive Behavioral Therapy for psychosis (CBTp)
- Family therapy/education
- Social skills training
- Supported employment
- Cognitive remediation

*Recovery Model:*
- Focus on person's goals, not just symptom reduction
- Hope for meaningful life
- Peer support important`,
      keyTerms: [
        { term: 'positive symptoms', definition: 'Symptoms that add to normal experience (hallucinations, delusions)' },
        { term: 'negative symptoms', definition: 'Symptoms that subtract from normal functioning (flat affect, avolition)' },
        { term: 'avolition', definition: 'Lack of motivation to start or complete activities', pronunciation: 'ay-voh-LIH-shun' },
        { term: 'prodrome', definition: 'Early symptoms before full illness develops', pronunciation: 'PROH-drohm' },
      ],
      analogies: [
        'The dopamine imbalance in schizophrenia is like having the volume turned up too high in some brain areas and too low in others.',
      ],
    },
    3: {
      level: 3,
      summary: 'Schizophrenia involves dopaminergic dysregulation, glutamatergic dysfunction, and neurodevelopmental abnormalities, diagnosed via DSM-5 criteria with a symptom duration of 6 months, treated with antipsychotics and evidence-based psychosocial interventions.',
      explanation: `**DSM-5 Diagnostic Criteria:**

A. Two or more of the following, each present for significant time during 1 month (at least one must be 1, 2, or 3):
   1. Delusions
   2. Hallucinations
   3. Disorganized speech
   4. Grossly disorganized or catatonic behavior
   5. Negative symptoms

B. Functional impairment (work, relationships, self-care)
C. Duration: 6 months continuous signs (including prodromal/residual)
D. Schizoaffective and mood disorders ruled out
E. Not due to substances or medical condition
F. If autism/communication disorder history, prominent hallucinations/delusions for 1 month

**Specifiers:**
- First episode (currently in acute episode, partial remission, full remission)
- Multiple episodes (same specifiers)
- Continuous
- With catatonia

**Types of Symptoms:**

*Delusions:*
- Persecutory (most common)
- Referential (events have special meaning)
- Grandiose
- Erotomanic
- Nihilistic
- Somatic
- Bizarre vs. non-bizarre

*Hallucinations:*
- Auditory (70-80%): Voices commenting, commanding, conversing
- Visual (15-30%)
- Olfactory, tactile, gustatory (less common)

*Disorganized Symptoms:*
- Tangentiality, derailment
- Word salad, neologisms
- Catatonic behavior

**Neurobiological Theories:**

*Dopamine Hypothesis:*
- Mesolimbic hyperactivity → positive symptoms
- Mesocortical hypoactivity → negative/cognitive symptoms
- Evidence: Dopamine agonists cause psychosis, D2 blockers treat it
- Dopamine synthesis capacity elevated (PET studies)

*Glutamate (NMDA) Hypothesis:*
- NMDA receptor hypofunction
- Evidence: PCP, ketamine produce schizophrenia-like symptoms
- May underlie negative/cognitive symptoms
- Glutamatergic treatments under investigation

*Neurodevelopmental Model:*
- Prenatal insults (infection, stress)
- Abnormal neuronal migration
- Excessive synaptic pruning in adolescence
- Complement system (C4) involvement

**Neuroimaging:**
- Enlarged ventricles
- Reduced gray matter (progressive in some)
- Prefrontal hypofrontality
- Hippocampal volume reduction
- Thalamic abnormalities

**Treatment:**

*Antipsychotics - Mechanism:*
- D2 receptor antagonism (positive symptoms)
- 5-HT2A antagonism (atypicals)
- 65% D2 occupancy for efficacy
- >80% occupancy → EPS

*First-Generation (Typical):*
- High D2 affinity
- More EPS, tardive dyskinesia
- Haloperidol, chlorpromazine, fluphenazine

*Second-Generation (Atypical):*
- Lower EPS risk
- Metabolic side effects (weight gain, diabetes)
- Risperidone, olanzapine, quetiapine, ziprasidone, aripiprazole, lurasidone

*Clozapine:*
- Most effective for treatment-resistant schizophrenia
- Risk of agranulocytosis (requires monitoring)
- Also lowers suicide risk
- Reserved due to monitoring requirements

*Long-Acting Injectables (LAIs):*
- Improve adherence
- Monthly or longer dosing
- Multiple options now available

*Psychosocial Treatments:*
- CBT for psychosis (CBTp): Reduces distress, delusion conviction
- Family intervention: Reduces relapse
- Social skills training
- Cognitive remediation
- Supported employment (IPS model)
- Coordinated specialty care (first episode)`,
      keyTerms: [
        { term: 'D2 receptor', definition: 'Dopamine receptor type 2, primary target of antipsychotic medications' },
        { term: 'tardive dyskinesia', definition: 'Movement disorder from long-term antipsychotic use', pronunciation: 'TAR-div dis-kih-NEE-zhah' },
        { term: 'clozapine', definition: 'Most effective antipsychotic for treatment-resistant schizophrenia, requires blood monitoring' },
        { term: 'coordinated specialty care', definition: 'Team-based early intervention for first-episode psychosis' },
      ],
    },
    4: {
      level: 4,
      summary: 'Schizophrenia pathophysiology integrates dopamine dysregulation, NMDA receptor hypofunction, neuroinflammation, and developmental synaptic pruning abnormalities, with treatment requiring individualized antipsychotic selection and comprehensive psychosocial rehabilitation.',
      explanation: `**Genetic Architecture:**
- Heritability: ~80%
- Polygenic: 100+ common risk variants
- Rare variants: CNVs (22q11 deletion, 15q13 deletion)
- Key pathways: Dopamine, glutamate, immunity, synaptic function
- Genetic overlap with bipolar disorder

*GWAS Findings:*
- DRD2 (dopamine receptor)
- GRM3 (glutamate receptor)
- C4A (complement component - synaptic pruning)
- CACNA1C (calcium channel)
- MHC region

**Pathophysiology:**

*Dopamine:*
- Striatal dopamine synthesis elevated (PET [18F]DOPA)
- Presynaptic hyperdopaminergia
- D2 high affinity state increased
- Aberrant salience attribution

*Glutamate/NMDA:*
- NMDA hypofunction on GABAergic interneurons
- Disinhibition of pyramidal neurons
- Elevated glutamate in some regions (MRS)
- May explain negative/cognitive symptoms better than DA

*GABA:*
- Parvalbumin interneuron deficits
- Gamma oscillation abnormalities
- Altered cortical inhibition

*Neuroinflammation:*
- Microglial activation (PET studies)
- Elevated cytokines
- May contribute to progression

*Synaptic Pruning:*
- C4A overexpression → excessive pruning
- Explains gray matter loss
- Adolescent timing matches onset

**Cognitive Deficits:**
- Present before onset
- Persist despite treatment
- Working memory, attention, processing speed
- Executive function
- Social cognition (theory of mind)
- Strongest predictor of functional outcome

**Treatment:**

*Antipsychotic Selection:*
- All equally effective for positive symptoms (except clozapine superior)
- Side effect profile guides choice
- Metabolic: Clozapine > olanzapine > quetiapine > risperidone
- EPS: FGAs > risperidone > others
- Prolactin: Risperidone, paliperidone, FGAs
- QTc: Ziprasidone (caution)

*Treatment-Resistant Schizophrenia:*
- Definition: Failure of 2 adequate antipsychotic trials
- 30% of patients
- Clozapine: Only evidence-based treatment
- Required monitoring: WBC, ANC (agranulocytosis risk)
- Also reduces suicide risk
- Consider earlier clozapine use

*Long-Acting Injectables:*
- Improve outcomes through better adherence
- Paliperidone, aripiprazole, risperidone, haloperidol, others
- Monthly to 6-month formulations
- Consider earlier in illness course

*Managing Side Effects:*
- Metabolic: Monitoring, lifestyle, metformin
- EPS: Dose reduction, anticholinergics, switch
- Tardive dyskinesia: VMAT2 inhibitors (valbenazine, deutetrabenazine)

**Psychosocial Interventions:**

*Coordinated Specialty Care (CSC):*
- Team-based early intervention
- RAISE studies demonstrated efficacy
- Components: Low-dose antipsychotic, CBTp, family education, supported education/employment, case management

*Cognitive Remediation:*
- Targets cognitive deficits
- Computer-based exercises
- More effective with rehabilitation
- Modest effect sizes

*Supported Employment (IPS):*
- Place then train model
- Competitive employment
- Effective - superior to prevocational training

*Family Intervention:*
- Reduces relapse
- Reduces expressed emotion
- Psychoeducation component

**Prognosis:**
- Variable: 20% good outcome, 30% intermediate, 50% poor (older studies)
- Better outcomes with: Good premorbid functioning, acute onset, female sex, older age, less negative symptoms
- First episode programs improve outcomes`,
      keyTerms: [
        { term: 'C4A', definition: 'Complement component 4A, linked to excessive synaptic pruning in schizophrenia' },
        { term: 'aberrant salience', definition: 'Attribution of importance to irrelevant stimuli, proposed mechanism of delusions' },
        { term: 'IPS', definition: 'Individual Placement and Support, evidence-based supported employment model' },
        { term: 'VMAT2 inhibitors', definition: 'Medications for tardive dyskinesia (valbenazine, deutetrabenazine)' },
      ],
      clinicalNotes: 'Early intervention improves outcomes - refer first-episode to coordinated specialty care. Clozapine is underused - consider earlier for treatment resistance. LAIs improve adherence and outcomes. Metabolic monitoring essential. Address substance use (very common). Cognitive deficits often limit functional recovery despite symptom control.',
    },
    5: {
      level: 5,
      summary: 'Contemporary schizophrenia research emphasizes clinical staging, precision medicine approaches, glutamatergic and inflammatory targets, and early intervention paradigms, while challenging categorical diagnosis in favor of dimensional psychosis spectrum models.',
      explanation: `**Dimensional and Staging Approaches:**

*Clinical Staging:*
- Stage 0: At-risk (family history, subthreshold symptoms)
- Stage 1: Ultra-high risk (attenuated psychosis syndrome)
- Stage 2: First episode psychosis
- Stage 3: Incomplete remission
- Stage 4: Severe, persistent illness

*Clinical High Risk (CHR):*
- Attenuated psychotic symptoms
- Brief intermittent psychotic episodes
- Genetic risk + functional decline
- ~30% convert to psychosis
- Prevention trials ongoing

*Psychosis Continuum:*
- Psychotic experiences common in general population (5-8%)
- Most transient, not clinical
- Spectrum from experiences to disorder
- Questions categorical diagnosis

**Precision Medicine:**

*Biomarkers:*
- No diagnostic biomarker validated
- PET: Dopamine synthesis capacity
- MRI: Structural patterns (research)
- EEG: MMN, P300 abnormalities
- Blood: Inflammatory markers, genetics

*Treatment Response Prediction:*
- Early response (2 weeks) predicts outcome
- Polygenic risk scores not clinically useful yet
- Pharmacogenomics: CYP2D6 for some drugs
- Machine learning approaches under development

*Stratification:*
- Biotypes based on cognition, neuroimaging
- Treatment-responsive vs. resistant
- Inflammatory subgroup?

**Novel Therapeutics:**

*Glutamatergic Targets:*
- Glycine site agonists (glycine, D-serine): Mixed results
- GlyT1 inhibitors: Disappointing
- mGluR2/3 agonists: Discontinued
- AMPA modulators
- Ketamine paradox (acute psychotomimetic, research tool)

*Trace Amine-Associated Receptor 1 (TAAR1):*
- Ulotaront (SEP-363856)
- Modulates dopamine/serotonin
- Positive Phase II, Phase III ongoing
- Novel mechanism

*Muscarinic Agonists:*
- Xanomeline-trospium (KarXT)
- M1/M4 agonist
- Positive Phase III results
- Non-dopaminergic mechanism

*Anti-inflammatory:*
- Minocycline: Some positive trials
- NSAIDs: Inconsistent
- Targeting inflammation pathway

*Negative Symptom Targets:*
- Most challenging treatment domain
- Separate from secondary negative symptoms
- Roluperidone (MIN-101) - sigma-2 receptor antagonist (failed Phase III)
- Ongoing trials of various agents

**Psychosocial Advances:**

*Digital Phenotyping:*
- Smartphone sensors
- Predict relapse
- Early intervention potential

*Avatar Therapy:*
- Computer representation of voice
- Dialogue with avatar
- Reduces voice-related distress

*Virtual Reality:*
- Social cognition training
- Paranoia exposure
- Skills practice

**Ethical and Social Considerations:**

*Stigma Reduction:*
- Language matters: "person with schizophrenia" not "schizophrenic"
- Recovery model emphasizes hope
- Shared decision-making
- Consumer/peer movement

*Coercion and Autonomy:*
- Involuntary treatment debates
- Advance directives
- Supported decision-making models

*Violence Myth:*
- People with schizophrenia more likely to be victims
- Small attributable risk when substance use excluded
- Media perpetuates harmful stereotype

**Future Directions:**

1. Prevention in high-risk states
2. Mechanism-based treatment selection
3. Addressing negative/cognitive symptoms
4. Novel drug targets (TAAR1, muscarinic)
5. Digital therapeutics integration
6. Biomarker validation
7. Psychedelic research (very preliminary)
8. Gene therapy (distant future)
9. Reducing mortality gap
10. Eliminating stigma`,
      keyTerms: [
        { term: 'clinical high risk', definition: 'State of elevated psychosis risk with attenuated symptoms, target for prevention' },
        { term: 'TAAR1 agonist', definition: 'Novel drug mechanism modulating dopamine/serotonin without direct D2 blockade' },
        { term: 'avatar therapy', definition: 'Treatment using computer-generated representation of voice for dialogue' },
        { term: 'shared decision-making', definition: 'Collaborative treatment decisions between clinician and patient' },
      ],
      clinicalNotes: `Current clinical practice:
- Early intervention programs for first episode
- Long-acting injectables earlier in course
- Clozapine for treatment resistance (underused)
- Metabolic monitoring mandatory
- Psychosocial interventions alongside medication
- Recovery-oriented, person-centered care

Emerging practices:
- Coordinated specialty care expansion
- Digital monitoring tools
- Earlier clozapine consideration
- TAAR1 and muscarinic agents (pending approval)

Key messages:
- Recovery is possible and expected
- Stigma is a major barrier to treatment
- Comprehensive care (not just medication)
- Address physical health (mortality gap)
- Involve patients in treatment decisions
- Support families and caregivers`,
    },
  },

  media: [
    {
      id: 'schizophrenia-symptoms-diagram',
      type: 'diagram',
      filename: 'schizophrenia_symptoms.svg',
      title: 'Symptoms of Schizophrenia',
      description: 'Positive, negative, and cognitive symptoms overview',
    },
    {
      id: 'dopamine-pathways-diagram',
      type: 'diagram',
      filename: 'dopamine_pathways_psychosis.svg',
      title: 'Dopamine Pathways in Schizophrenia',
      description: 'Mesolimbic, mesocortical, nigrostriatal, and tuberoinfundibular pathways',
    },
  ],

  citations: [
    {
      id: 'dsm-5-schizophrenia',
      type: 'textbook',
      title: 'Diagnostic and Statistical Manual of Mental Disorders, 5th Edition',
      authors: ['American Psychiatric Association'],
      source: 'American Psychiatric Publishing',
      chapter: 'Schizophrenia Spectrum and Other Psychotic Disorders',
    },
    {
      id: 'stahl-schizophrenia',
      type: 'textbook',
      title: "Stahl's Essential Psychopharmacology",
      authors: ['Stahl SM'],
      source: 'Cambridge University Press',
      chapter: 'Psychosis and Schizophrenia',
    },
  ],

  crossReferences: [
    { targetId: 'psychiatry-schizoaffective-disorder', targetType: 'condition', relationship: 'related', label: 'Schizoaffective Disorder' },
    { targetId: 'psychiatry-antipsychotics', targetType: 'topic', relationship: 'see-also', label: 'Antipsychotics' },
    { targetId: 'psychiatry-brain-chemistry-mental-health', targetType: 'topic', relationship: 'related', label: 'Brain Chemistry' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['psychiatry', 'psychotic disorders', 'pharmacology'],
    keywords: ['schizophrenia', 'psychosis', 'hallucinations', 'delusions', 'antipsychotics'],
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

export default schizophreniaContent;
