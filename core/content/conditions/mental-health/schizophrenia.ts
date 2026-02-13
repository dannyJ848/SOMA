/**
 * Schizophrenia - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const schizophrenia: EducationalContent = {
  id: 'condition-schizophrenia',
  type: 'condition',
  name: 'Schizophrenia',
  nameEs: 'Esquizofrenia',
  alternateNames: ['Schizophrenia Spectrum Disorder', 'Dementia Praecox'],
  hpoId: 'HP:0100753',

  levels: {
    1: {
      level: 1,
      summary: 'Schizophrenia is a chronic mental health condition that affects how a person thinks, feels, and behaves, often causing people to lose touch with reality.',
      explanation: `Schizophrenia is a brain condition that changes how a person perceives reality. It is not caused by bad parenting or personal weakness.

**What people with schizophrenia may experience:**

**Positive Symptoms (things that are "added" to normal experience):**
- Hearing voices that aren't there
- Seeing things that others don't see
- Believing things that aren't true (delusions)
- Confused thinking and speech

**Negative Symptoms (things that are "taken away" from normal experience):**
- Showing less emotion
- Losing motivation to do things
- Not wanting to be around people
- Having trouble feeling pleasure

**Cognitive Symptoms:**
- Trouble paying attention
- Problems with memory
- Difficulty making decisions

**Treatment:**
- Antipsychotic medications
- Therapy and support
- Social skills training
- Family education and support

**Important:**
- People with schizophrenia can lead meaningful lives
- Early treatment leads to better outcomes
- Support from family and friends makes a big difference`,
      keyTerms: [
        { term: 'hallucination', definition: 'Hearing, seeing, or feeling things that are not actually there' },
        { term: 'delusion', definition: 'A false belief that does not change even when presented with facts' },
        { term: 'antipsychotic', definition: 'Medication that helps treat psychotic symptoms' },
      ],
      analogies: [
        'A hallucination is like a radio playing in your head that only you can hear—the sound seems very real, even though it is not coming from the outside world.',
        'The brain in schizophrenia is like a computer with a faulty connection—sometimes information gets scrambled or processed incorrectly.',
      ],
      examples: [
        'A person might believe that the television is sending them secret messages, or that someone is trying to harm them when no threat exists.',
        'Someone might hear voices commenting on their actions or having conversations when no one is around.',
      ],
      patientCounselingPoints: [
        'Take medication exactly as prescribed, even when you feel well',
        'Learn to recognize early warning signs of relapse',
        'Stay connected with supportive friends and family',
        'Avoid alcohol and recreational drugs',
        'Keep regular appointments with your treatment team',
      ],
    },
    2: {
      level: 2,
      summary: 'Schizophrenia is a psychotic disorder characterized by positive symptoms (hallucinations, delusions), negative symptoms (alogia, avolition), and cognitive impairment, treated with antipsychotics and psychosocial interventions.',
      explanation: `## Diagnostic Criteria (DSM-5)
**Two or more of the following for ≥1 month (at least one must be 1, 2, or 3):**
1. Delusions
2. Hallucinations
3. Disorganized speech
4. Grossly disorganized or catatonic behavior
5. Negative symptoms

**Plus:**
- Functioning below premorbid level in work, relationships, or self-care
- Continuous signs for ≥6 months (including prodromal/residual periods)

## Symptom Categories

**Positive Symptoms (Psychotic Features):**
- **Delusions:** Fixed false beliefs
  - Persecutory (being followed, harmed)
  - Referential (gestures, comments directed at self)
  - Somatic (health concerns)
  - Grandiose (special powers, identity)
  - Erotomanic (someone is in love with them)
  - Control (thoughts, actions controlled externally)

- **Hallucinations:**
  - Auditory (most common): voices commenting, conversing
  - Visual: seeing people, objects that aren't there
  - Tactile, olfactory, gustatory (less common)

- **Disorganized thinking:** Loose associations, tangentiality

**Negative Symptoms:**
- **Affective flattening:** Reduced emotional expression
- **Alogia:** Poverty of speech
- **Avolition:** Lack of motivation
- **Anhedonia:** Reduced pleasure
- **Asociality:** Reduced social engagement

**Cognitive Symptoms:**
- Attention deficits
- Working memory impairment
- Executive dysfunction

## Treatment

**First-Generation Antipsychotics (FGAs/Typical):**
- Haloperidol, fluphenazine, chlorpromazine
- High risk of extrapyramidal side effects
- Useful for acute psychosis

**Second-Generation Antipsychotics (SGAs/Atypical):**
- Risperidone, olanzapine, quetiapine, ziprasidone, aripiprazole
- Lower EPS risk, more metabolic side effects
- First-line for most patients

**Psychosocial Treatments:**
- Cognitive behavioral therapy for psychosis (CBTp)
- Family psychoeducation
- Assertive community treatment (ACT)
- Supported employment/education`,
      keyTerms: [
        { term: 'psychosis', definition: 'Loss of contact with reality; inability to distinguish what is real from what is not' },
        { term: 'avolition', definition: 'Lack of initiative or motivation to accomplish purposeful activities' },
        { term: 'alogia', definition: 'Poverty of speech or speech content; reduction in verbal expression' },
        { term: 'flat affect', definition: 'Reduced emotional expression observed in speech, facial expression, and body language' },
        { term: 'extrapyramidal symptoms', definition: 'Movement disorders caused by antipsychotic medications including tremor, stiffness, and restlessness' },
      ],
      patientCounselingPoints: [
        'It may take several weeks to see full benefit from antipsychotic medication',
        'Report any side effects to your doctor—do not stop medication abruptly',
        'Family members can help identify early warning signs of relapse',
      ],
    },
    3: {
      level: 3,
      summary: 'Schizophrenia involves dopamine dysregulation, glutamate NMDA receptor hypofunction, and structural brain changes, requiring long-term antipsychotic treatment and comprehensive psychosocial rehabilitation.',
      explanation: `## Pathophysiology

**Dopamine Hypothesis:**
- **Mesolimbic pathway:** Hyperactivity → positive symptoms
- **Mesocortical pathway:** Hypoactivity → negative/cognitive symptoms
- **Nigrostriatal pathway:** Blockade → EPS
- **Tuberoinfundibular pathway:** Blockade → prolactin elevation

**Glutamate Hypothesis:**
- NMDA receptor hypofunction
- PCP/ketamine produce schizophrenia-like symptoms
- GABA interneuron dysfunction
- Disrupted cortical connectivity

**Neurodevelopmental Model:**
- Prenatal/perinatal insults
- Abnormal neuronal migration
- Synaptic pruning abnormalities
- Adolescence as critical period

**Structural Brain Changes:**
- Ventricular enlargement
- Reduced temporal lobe volume
- Decreased gray matter
- Hippocampal abnormalities
- Prescribed cortical thinning

**Genetic Factors:**
- Heritability: ~80%
- First-degree relative risk: 10%
- Both identical twins: ~50%
- Multiple genes of small effect
- Copy number variations

## Pharmacotherapy

| Medication | Dose Range | Key Side Effects |
|------------|------------|------------------|
| **Risperidone** | 2-8 mg | EPS, prolactin elevation, weight gain |
| **Olanzapine** | 10-20 mg | Significant weight gain, metabolic, sedation |
| **Quetiapine** | 300-800 mg | Sedation, orthostasis, metabolic |
| **Ziprasidone** | 80-160 mg | QTc prolongation, nausea |
| **Aripiprazole** | 10-30 mg | Akathisia, nausea, insomnia |
| **Clozapine** | 300-600 mg | Agranulocytosis, seizures, metabolic, sialorrhea |

**Clozapine (Treatment-Resistant):**
- Most effective antipsychotic
- Indicated after failure of ≥2 adequate antipsychotic trials
- Requires weekly CBC monitoring (agranulocytosis risk 1%)
- Monitoring: ANC, myocarditis, seizures, metabolic

**Long-Acting Injectables (LAI):**
- Improved adherence
- Options: Risperidone, paliperidone, aripiprazole, haloperidol, fluphenazine
- Consider for non-adherence or preference

## Side Effect Management

**Extrapyramidal Symptoms (EPS):**
- **Acute dystonia:** Spasms, often in head/neck; treat with benztropine or diphenhydramine
- **Akathisia:** Inner restlessness; beta-blockers, benzodiazepines, dose reduction
- **Parkinsonism:** Tremor, rigidity; anticholinergics, dose reduction
- **Tardive dyskinesia:** Involuntary movements; prevention key, consider VMAT2 inhibitors

**Metabolic Syndrome:**
- Weight gain, dyslipidemia, hyperglycemia
- Worse: Olanzapine, clozapine, quetiapine
- Better: Ziprasidone, aripiprazole, lurasidone
- Monitor: Weight, BMI, lipids, glucose

**Hyperprolactinemia:**
- Worse: Risperidone, paliperidone, typical antipsychotics
- Better: Aripiprazole (may lower prolactin), clozapine, quetiapine
- Effects: Galactorrhea, amenorrhea, sexual dysfunction`,
      keyTerms: [
        { term: 'mesolimbic pathway', definition: 'Brain dopamine pathway associated with reward and positive symptoms of schizophrenia' },
        { term: 'agranulocytosis', definition: 'Dangerous drop in white blood cells; serious side effect of clozapine requiring regular monitoring' },
        { term: 'tardive dyskinesia', definition: 'Involuntary movements, often of face and tongue, caused by long-term antipsychotic use' },
        { term: 'akathisia', definition: 'Subjective inner restlessness with inability to sit still; common antipsychotic side effect' },
        { term: 'LAI', definition: 'Long-acting injectable antipsychotic; administered every 2-4 weeks for improved adherence' },
      ],
      clinicalNotes: 'Always confirm that patients on antipsychotics have regular metabolic monitoring. Clozapine is underutilized in treatment-resistant schizophrenia due to monitoring requirements but is the most effective medication.',
      patientCounselingPoints: [
        'Clozapine requires weekly blood tests for the first 6 months, then every 2 weeks',
        'Report any fever or infection while on clozapine—this could be serious',
      ],
    },
    4: {
      level: 4,
      summary: 'Treatment-resistant schizophrenia requires clozapine, addressing negative and cognitive symptoms, and comprehensive rehabilitation while managing medical comorbidity and cardiovascular risk.',
      explanation: `## Treatment-Resistant Schizophrenia

**Definition:**
- Failure to respond to ≥2 adequate antipsychotic trials
- Adequate = ≥6 weeks at therapeutic dose
- Affects 20-30% of patients

**Clozapine Protocol:**
- Indicated after 2 failed trials
- Most effective for positive symptoms
- Also helpful for suicidality
- Requires REMS program enrollment

**Clozapine Monitoring:**
- **Baseline:** CBC, metabolic panel, ECG, fasting lipids/glucose
- **Weekly CBC for 6 months** (agranulocytosis risk highest)
- **Every 2 weeks** for months 6-12
- **Monthly** after 12 months
- Stop if ANC <1000 (hold) or <500 (discontinue)

**Other TRS Options:**
- Clozapine augmentation (risperidone, ECT)
- High-dose antipsychotics (limited evidence)
- Combination antipsychotics (common, limited evidence)

## Negative and Cognitive Symptoms

**Challenges:**
- Poor response to antipsychotics
- Major contributor to disability
- No FDA-approved treatments

**Approaches:**
- **Antidepressants:** May help secondary depression, some evidence for negative symptoms
- **Glutamatergic agents:** Glycine, D-cycloserine, sarcosine (limited evidence)
- **Cholinesterase inhibitors:** Mixed results
- **Psychosocial:** Cognitive remediation, social skills training

## Cognitive Remediation
- Computer-based cognitive training
- Strategy coaching
- Compensatory strategies
- Best results combined with vocational rehabilitation

## Medical Comorbidity

**Cardiovascular Disease:**
- 15-20 year reduced life expectancy
- Metabolic syndrome prevalence 40%
- Smoking, poor diet, sedentary lifestyle
- Antipsychotic contributions

**Monitoring Guidelines:**
- Weight, BMI, waist circumference at baseline and periodically
- Blood pressure at each visit
- Fasting glucose/HbA1c at baseline, 12 weeks, then annually
- Fasting lipids at baseline, 12 weeks, then annually

## Co-occurring Disorders

**Substance Use (40-50%):**
- Nicotine: 3-4x general population rates
- Cannabis: May trigger psychosis in vulnerable
- Stimulants: Can worsen psychosis
- Integrated treatment needed

**Depression:**
- Post-psychotic depression common
- Suicide risk: 5-10% lifetime
- Consider antidepressant after psychosis stabilized

**Obsessive-Compulsive Symptoms:**
- Clozapine can induce/worsen
- SSRIs may help

## Special Populations

**Early Psychosis:**
- Duration of untreated psychosis predicts outcome
- Specialized early intervention services improve prognosis
- Lower antipsychotic doses often effective
- Consider cognitive effects

**Pregnancy:**
- Untreated psychosis risks: Poor prenatal care, self-harm
- Medication risks: Neonatal withdrawal, potential teratogenicity
- Generally continue effective antipsychotic
- Avoid valproate (not typical but sometimes used)
- High-dose prolactin-raising agents may reduce breast milk

**Geriatric:**
- Lower doses needed
- Higher sensitivity to EPS
- Increased fall risk
- Polypharmacy concerns

## Psychosocial Rehabilitation

**Assertive Community Treatment (ACT):**
- Multidisciplinary team
- Low caseload ratios
- 24/7 availability
- Proven to reduce hospitalization

**Supported Employment/Education:**
- Individual placement and support (IPS)
- Competitive employment as goal
- Rapid job search
- Ongoing support

**Family Interventions:**
- Psychoeducation about illness
- Communication skills training
- Problem-solving training
- Reduces relapse rates`,
      keyTerms: [
        { term: 'duration of untreated psychosis', definition: 'Time from onset of psychotic symptoms to initiation of treatment; longer duration predicts poorer outcome' },
        { term: 'individual placement and support', definition: 'Evidence-based model of supported employment focusing on rapid job placement and ongoing support' },
        { term: 'assertive community treatment', definition: 'Team-based intensive case management for severe mental illness' },
      ],
      clinicalNotes: 'The leading cause of death in schizophrenia is cardiovascular disease, not suicide. Metabolic monitoring is essential and often neglected. Consider LAI for any patient with adherence problems.',
    },
    5: {
      level: 5,
      summary: 'Schizophrenia treatment incorporates novel glutamatergic agents, precision medicine approaches, early intervention strategies, and understanding schizophrenia as a neurodevelopmental disorder with systemic manifestations.',
      explanation: `## Novel Therapeutics and Mechanisms

**Glutamatergic Agents:**
- **Pimavanserin:** 5-HT2A inverse agonist; adjunctive for negative symptoms
- **Sarcosine:** Glycine transporter inhibitor; adjunctive for negative symptoms
- **D-cycloserine:** Partial NMDA agonist; mixed results
- **Bitopertin:** Glycine reuptake inhibitor; phase 3 trials

**Muscarinic Agonists:**
- **Xanomeline:** M1/M4 agonist; positive and negative symptom improvement
- **KarXT:** Xanomeline + trospium (peripheral blocker)
- Phase 3 data promising for both positive and negative symptoms

**Trace Amine-Associated Receptors (TAAR):**
- **Ulotaront:** TAAR1 agonist
- Phase 3 trials ongoing
- May work without D2 blockade

**Psychotropic Substances:**
- **CBD:** Adjunctive; mixed evidence for psychosis
- **Psilocybin:** Experimental; neuroplasticity enhancement

## Early Intervention

**Critical Period Hypothesis:**
- First 5 years after onset critical
- Deterioration plateaus after ~10 years
- Early treatment may prevent disability

**Clinical High Risk (CHR) Criteria:**
- Attenuated psychotic symptoms
- Brief limited psychotic symptoms
- Genetic risk plus functional decline

**CHR Interventions:**
- CBT for psychosis
- Low-dose antipsychotics (controversial)
- Omega-3 fatty acids (mixed evidence)
- Focus on stress reduction, sleep, substance avoidance

**Coordinated Specialty Care (CSC):**
- Multidisciplinary team approach
- Shared decision making
- Family involvement
- Supported employment/education
- Proven to improve outcomes

## Neuroimaging Biomarkers

**Predictive Markers:**
- **Structural:** Lateral ventricle volume, cortical thickness
- **Functional:** Frontal activation patterns
- **Connectivity:** Default mode network alterations

**Treatment Response Prediction:**
- Striatal D2 occupancy predicts antipsychotic response
- Glutamate levels may predict clozapine response
- Not yet clinically actionable

## Genetic Approaches

**Copy Number Variations (CNVs):**
- 22q11.2 deletion (velocardiofacial syndrome)
- 1q21.1 deletion/duplication
- 15q11.2 deletion
- High penetrance but rare

**Polygenic Risk Scores:**
- Aggregate effect of many variants
- Research tool currently
- May guide early identification

**Pharmacogenomics:**
- CYP2D6 metabolizer status
- HLA associations (agranulocytosis risk)
- Limited clinical utility currently

## Cognitive Impairment Research

**MATRICS Consensus:**
- 7 cognitive domains identified
- Measurement standardization (MCCB)
- Target for drug development

**Approaches:**
- Cognitive remediation therapy (CRT)
- Transcranial direct current stimulation (tDCS)
- Transcranial magnetic stimulation (TMS)
- Pharmacological: limited success

## Immunopsychiatry

**Inflammatory Markers:**
- Elevated cytokines in some patients
- Autoimmune encephalitis (NMDA receptor) can mimic schizophrenia

**Immunomodulation:**
- Anti-inflammatory adjuncts (celecoxib, minocycline)
- Plasma exchange for suspected autoimmune psychosis
- ECT for autoimmune encephalitis

## Digital Phenotyping
- Passive smartphone data collection
- Speech analysis for relapse prediction
- Social media pattern analysis
- Actigraphy for sleep/activity
- Privacy and ethical considerations

## Suicide Risk Management
- Lifetime risk: 5-10%
- Highest in young, early illness
- Clozapine reduces suicide risk
- CBT for suicide prevention
- Safety planning essential

## Treatment Algorithms

**First Episode:**
- Amisulpride, aripiprazole, or low-dose risperidone
- Minimize dose to reduce side effects
- Consider LAI from start if adherence concerns
- CBTp + family intervention

**Multiple Episodes:**
- Optimize current antipsychotic
- Consider clozapine if inadequate response to 2 agents
- Add CBTp, address substance use
- Consider LAI for adherence

**Treatment-Resistant:**
- Clozapine (gold standard)
- Clozapine augmentation (ECT, another antipsychotic)
- Consider ECT for catatonia or severe depression

**Stable/Maintenance:**
- Continue effective antipsychotic
- Consider dose reduction after 1-2 years stability
- Never stop abruptly
- Monitor for relapse`,
      keyTerms: [
        { term: 'critical period hypothesis', definition: 'Concept that early intervention in first years of psychosis may prevent long-term disability' },
        { term: 'clinical high risk', definition: 'Syndrome identifying individuals at elevated risk for developing psychosis' },
        { term: 'MATRICS', definition: 'Measurement and Treatment Research to Improve Cognition in Schizophrenia; consensus on cognitive assessment' },
        { term: 'coordinated specialty care', definition: 'Comprehensive, team-based treatment approach for early psychosis' },
        { term: 'digital phenotyping', definition: 'Using digital device data to characterize psychiatric symptoms and predict outcomes' },
      ],
      clinicalNotes: `Key clinical pearls:

1. **Duration of Untreated Psychosis (DUP):** Longer DUP predicts poorer outcome. Early intervention is critical. Act quickly when someone presents with first psychotic episode.

2. **Clozapine underutilization:** Only ~30% of treatment-resistant patients receive clozapine. Don't delay—the benefits outweigh monitoring burdens. Most effective antipsychotic for TRS.

3. **Metabolic monitoring:** Leading cause of death is cardiovascular disease (15-20 year reduced life expectancy). Monitor weight, lipids, glucose at baseline and regularly thereafter.

4. **Negative symptoms:** Poor response to antipsychotics. Consider depression, antipsychotic side effects, parkinsonism. CBTp, cognitive remediation, antidepressants may help.

5. **Suicide risk:** Highest in young men, early illness. Clozapine reduces suicide risk. Always assess. Develop safety plan.

6. **Substance use:** Very common (especially cannabis, nicotine, stimulants). Can worsen psychosis. Integrated treatment needed. Don't ignore.

7. **LAI considerations:** Don't wait for non-adherence. Consider LAI early, especially in first episode where adherence may be poor.

8. **Antipsychotic selection:** Consider: Past response, side effect profile, patient preference, comorbidities, metabolic risk. No clear superiority among SGAs for positive symptoms.`,
    },
  },

  media: [],
  citations: [
    { id: 'apa-schizophrenia-2020', type: 'article', title: 'APA Practice Guideline for Treatment of Patients with Schizophrenia', source: 'American Psychiatric Association' },
    { id: 'wfsbp-schizophrenia-2019', type: 'article', title: 'WFSBP Guidelines for Schizophrenia', source: 'World Federation of Societies of Biological Psychiatry' },
    { id: 'nice-schizophrenia-2014', type: 'article', title: 'NICE Guidelines on Psychosis and Schizophrenia', source: 'National Institute for Health and Care Excellence' },
  ],
  crossReferences: [
    { targetId: 'condition-bipolar-disorder', targetType: 'condition', relationship: 'related', label: 'Bipolar Disorder' },
    { targetId: 'condition-major-depressive-disorder', targetType: 'condition', relationship: 'related', label: 'Major Depressive Disorder' },
  ],
  tags: {
    systems: ['neurological'],
    topics: ['psychiatry', 'mental health', 'psychosis'],
    keywords: ['schizophrenia', 'psychosis', 'hallucination', 'delusion', 'antipsychotic', 'clozapine'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['psychiatry'] },
  },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default schizophrenia;
