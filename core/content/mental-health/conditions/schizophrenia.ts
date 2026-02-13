/**
 * Schizophrenia - Patient Education Content
 *
 * Comprehensive education about schizophrenia including symptoms,
 * treatment approaches, and recovery. Emphasizes that schizophrenia
 * is a treatable medical condition.
 */

import { EducationalContent } from '../../types';

export const schizophreniaContent: EducationalContent = {
  id: 'mental-health-schizophrenia',
  type: 'condition',
  name: 'Schizophrenia',
  alternateNames: ['Schizophrenia Spectrum Disorders', 'Psychotic Disorders'],

  levels: {
    1: {
      level: 1,
      summary: 'Schizophrenia is a brain condition that affects how a person thinks, feels, and perceives reality. With treatment, many people with schizophrenia lead fulfilling lives.',
      explanation: `**What Is Schizophrenia?**

Schizophrenia is a serious but treatable brain condition. It affects about 1 in 100 people worldwide. It changes how a person thinks, feels, and experiences the world.

**Common Symptoms:**

**Positive Symptoms (things that are "added"):**
- **Hallucinations**: Hearing, seeing, or feeling things that are not there. Hearing voices is most common.
- **Delusions**: Strong beliefs that are not true, like thinking you are being followed or have special powers.
- **Disorganized thinking**: Trouble organizing thoughts, jumping between topics.

**Negative Symptoms (things that are "reduced"):**
- Less emotional expression
- Difficulty starting activities
- Speaking less
- Reduced enjoyment from things
- Social withdrawal

**Cognitive Symptoms:**
- Trouble concentrating
- Memory problems
- Difficulty making decisions

**Important Facts:**

- Schizophrenia is NOT about having multiple personalities
- It is NOT caused by bad parenting
- It is a medical condition affecting the brain
- People with schizophrenia are NOT usually violent
- It is very TREATABLE
- Many people recover and live well

**What Causes It?**
- Differences in brain chemistry and structure
- Genetic factors (runs in families)
- Environmental factors
- It is nobody's fault

**Treatment:**

- **Antipsychotic medications**: Help control symptoms
- **Therapy**: Helps with coping skills and daily life
- **Support services**: Help with work, housing, and relationships
- **Family support**: Education and involvement helps recovery

Recovery is possible. With proper treatment and support, many people with schizophrenia live meaningful, productive lives.`,
      keyTerms: [
        { term: 'schizophrenia', definition: 'A brain condition that affects thinking, emotions, and perception of reality' },
        { term: 'hallucination', definition: 'Sensing something that is not actually there, like hearing voices' },
        { term: 'delusion', definition: 'A false belief that someone holds strongly despite evidence against it' },
        { term: 'antipsychotic', definition: 'Medication that helps control symptoms of schizophrenia' },
      ],
      analogies: [
        'Schizophrenia affects the brain like diabetes affects the pancreas - it is a medical condition that needs treatment.',
        'Antipsychotic medication is like glasses for the brain - it helps the person see reality more clearly.',
        'Recovery from schizophrenia is a journey, not a destination - progress happens step by step.',
      ],
      examples: [
        'Someone with schizophrenia might hear voices commenting on their actions, even though no one is speaking.',
        'A person might believe they are receiving secret messages through the TV, which feels completely real to them.',
        'With treatment, someone can manage their symptoms and work, have relationships, and pursue their goals.',
      ],
    },
    2: {
      level: 2,
      summary: 'Schizophrenia involves positive symptoms (hallucinations, delusions), negative symptoms (flat affect, avolition), and cognitive deficits. First-line treatment is antipsychotic medication combined with psychosocial interventions. Early treatment improves outcomes.',
      explanation: `**Understanding Schizophrenia:**

Schizophrenia is a chronic psychiatric disorder affecting approximately 1% of the population. It typically emerges in late adolescence or early adulthood and involves a range of symptoms affecting perception, thought, emotion, and behavior.

**Symptom Categories:**

**Positive Symptoms:**
*Hallucinations:*
- Auditory most common (70%): Voices commenting, conversing
- Visual, tactile, olfactory less common
- Feel completely real to the person

*Delusions:*
- Persecutory: Belief of being harassed or plotted against
- Referential: Belief that things refer specifically to you
- Grandiose: Belief of special powers or importance
- Thought insertion/withdrawal/broadcasting

*Disorganized Symptoms:*
- Disorganized speech (loose associations)
- Disorganized behavior
- Catatonia (in some cases)

**Negative Symptoms:**
- Flat affect (reduced emotional expression)
- Alogia (reduced speech output)
- Avolition (reduced motivation)
- Anhedonia (reduced pleasure)
- Asociality (reduced social interest)

**Cognitive Symptoms:**
- Working memory deficits
- Attention problems
- Processing speed reduction
- Executive function impairment

**Course and Prognosis:**

- Prodromal phase: Social withdrawal, odd beliefs
- First episode: Usually positive symptoms
- Variable course: Episodes with varying recovery
- About 20% have good outcomes
- Early treatment improves prognosis

**Treatment Approaches:**

**Medications (Antipsychotics):**
*Second-Generation (Atypical) - Often First-Line:*
- Risperidone, olanzapine, quetiapine
- Aripiprazole, ziprasidone, lurasidone
- Clozapine for treatment-resistant

*First-Generation (Typical):*
- Haloperidol, chlorpromazine
- More movement side effects

**Psychosocial Treatments:**
- Cognitive behavioral therapy for psychosis (CBTp)
- Family psychoeducation
- Social skills training
- Supported employment
- Assertive community treatment

**Recovery Model:**
- Recovery is possible and expected
- Focus on function and quality of life
- Person-centered goals
- Support for autonomy`,
      keyTerms: [
        { term: 'positive symptoms', definition: 'Symptoms that add to experience (hallucinations, delusions)' },
        { term: 'negative symptoms', definition: 'Symptoms reflecting reduction in function (flat affect, avolition)' },
        { term: 'prodromal', definition: 'Early phase before full symptoms develop' },
        { term: 'atypical antipsychotic', definition: 'Newer antipsychotic medications with different side effect profiles' },
        { term: 'CBTp', definition: 'Cognitive Behavioral Therapy for psychosis' },
      ],
      analogies: [
        'The dopamine system in schizophrenia is like a volume dial turned too high in some areas and too low in others.',
        'Early treatment is like treating a fire when it is small - much more effective than waiting.',
      ],
    },
    3: {
      level: 3,
      summary: 'Schizophrenia involves dopamine dysregulation, glutamate hypofunction, and prefrontal-temporal-limbic circuit abnormalities. DSM-5 requires 2+ symptoms including positive symptoms for 6+ months. Antipsychotics block D2 receptors; clozapine reserved for treatment-resistant cases.',
      explanation: `**DSM-5 Diagnostic Criteria:**

Two or more of the following for significant time during 1 month (at least one must be 1, 2, or 3):
1. Delusions
2. Hallucinations
3. Disorganized speech
4. Grossly disorganized or catatonic behavior
5. Negative symptoms

Additional criteria:
- Level of functioning significantly decreased
- Continuous signs for at least 6 months
- Schizoaffective and mood disorders excluded
- Not attributable to substances or medical condition

**Neurobiological Basis:**

*Dopamine Hypothesis:*
- Mesolimbic hyperactivity → positive symptoms
- Mesocortical hypoactivity → negative/cognitive symptoms
- D2 receptor blockade = antipsychotic effect
- Evidence: DA agonists can cause psychosis

*Glutamate Hypothesis:*
- NMDA receptor hypofunction
- Evidence: PCP, ketamine cause psychosis-like states
- Interaction with dopamine system
- Target for novel treatments

*Structural Findings:*
- Enlarged ventricles
- Reduced gray matter (prefrontal, temporal)
- Progressive changes early in illness
- White matter abnormalities

*Neurodevelopmental Model:*
- Prenatal/early life insults
- Abnormal synaptic pruning in adolescence
- Genetic vulnerability + environmental factors

**Pharmacological Treatment:**

*Antipsychotic Mechanism:*
- D2 receptor antagonism (primary)
- 5-HT2A antagonism (atypicals)
- Therapeutic effect: Days to weeks
- Full effect: 4-6 weeks

*First-Line (Second-Generation):*
- Similar efficacy (except clozapine)
- Selection based on side effect profile
- Risperidone: EPS at higher doses
- Olanzapine: Metabolic effects
- Quetiapine: Sedation, metabolic
- Aripiprazole: Partial agonist, akathisia
- Ziprasidone: QTc prolongation
- Lurasidone: Take with food

*Treatment-Resistant Schizophrenia:*
- Definition: 2+ adequate antipsychotic trials failed
- Clozapine: Most effective, requires monitoring
- Agranulocytosis risk (1-2%)
- Weekly → biweekly → monthly CBC
- REMS program

*Long-Acting Injectables:*
- Improved adherence
- Reduced relapse
- Options: Risperidone, paliperidone, aripiprazole, olanzapine

**Side Effects:**

*Metabolic:*
- Weight gain
- Diabetes
- Dyslipidemia
- Monitoring required

*Neurological:*
- EPS (acute dystonia, akathisia, parkinsonism)
- Tardive dyskinesia
- Less with atypicals (except risperidone)

*Other:*
- Sedation
- QTc prolongation
- Hyperprolactinemia
- Anticholinergic effects

**Psychosocial Interventions:**
- CBTp: Addresses delusions, hallucinations
- Family intervention: Reduces relapse
- Supported employment: Better work outcomes
- Social skills training
- Assertive community treatment`,
      keyTerms: [
        { term: 'mesolimbic pathway', definition: 'Dopamine pathway hyperactive in psychosis' },
        { term: 'D2 receptor', definition: 'Dopamine receptor blocked by antipsychotics' },
        { term: 'clozapine', definition: 'Most effective antipsychotic, reserved for treatment-resistant cases' },
        { term: 'tardive dyskinesia', definition: 'Late-onset movement disorder from chronic antipsychotic use' },
        { term: 'long-acting injectable', definition: 'Antipsychotic injection given every 2-4 weeks' },
      ],
      clinicalNotes: 'Metabolic monitoring essential with all antipsychotics. Clozapine requires REMS enrollment and regular blood monitoring. LAIs reduce relapse by improving adherence. Early intervention programs improve outcomes. Coordinate with psychosocial treatments.',
    },
    4: {
      level: 4,
      summary: 'Schizophrenia pathophysiology involves dopamine-glutamate interactions, aberrant salience, and disconnection syndromes. Treatment selection considers efficacy, side effects, and patient factors. Clozapine is uniquely effective for treatment-resistant cases. Coordinated specialty care optimizes first-episode outcomes.',
      explanation: `**Pathophysiology - Integrated Model:**

*Genetics:*
- Heritability: 80%
- Polygenic: Common variants, small effects
- GWAS: 100+ risk loci
- Key pathways: Synaptic function, immune, calcium channels
- Rare variants: Copy number variants (22q11.2)

*Dopamine-Glutamate Interaction:*
- NMDA hypofunction → GABAergic dysfunction
- Disinhibition of midbrain dopamine
- Explains link between glutamate and dopamine hypotheses
- Target for novel therapeutics

*Aberrant Salience:*
- Dopamine mediates salience attribution
- Inappropriate salience → delusion formation
- "Connecting dots that should not be connected"
- Explains delusional content variability

*Disconnection Hypothesis:*
- Abnormal connectivity between brain regions
- Reduced prefrontal-temporal connectivity
- White matter integrity reduced
- Explains diverse symptom presentation

*Neurodevelopmental Trajectory:*
- Prenatal factors: Infection, stress, nutrition
- Childhood: Subtle motor, social deficits
- Adolescence: Abnormal pruning, prodrome
- Young adulthood: First episode

**Pharmacology Deep Dive:**

*D2 Receptor Occupancy:*
- 65-80% occupancy: Therapeutic
- >80%: EPS risk increases
- PET imaging validates threshold

*Receptor Profiles:*

Typical antipsychotics:
- D2 blockade predominant
- High EPS liability

Atypical antipsychotics:
- 5-HT2A/D2 ratio
- Faster D2 dissociation (some)
- Lower EPS

Clozapine uniqueness:
- Loose D2 binding
- D4, 5-HT2A, muscarinic effects
- Uniquely effective in treatment-resistant
- May target glutamate system

Aripiprazole mechanism:
- D2 partial agonist
- "Dopamine stabilizer"
- 5-HT1A agonist
- Akathisia common

**Treatment Algorithm:**

*First Episode:*
- Lower doses initially
- Risperidone, aripiprazole common choices
- Response often better than later episodes
- Duration: 1-2 years minimum after remission

*Subsequent Episodes:*
- Return to effective medication
- Consider LAI for adherence
- Combination strategies if needed

*Treatment-Resistant:*
- Definition: 2 trials, adequate dose and duration (6 weeks each)
- Clozapine: Only agent with clear superiority
- Monitor: ANC weekly × 6 months, then biweekly
- Response may take 6 months

*Clozapine Augmentation:*
- Add another antipsychotic (limited evidence)
- Add lamotrigine (some evidence)
- ECT augmentation

**First-Episode Psychosis Programs:**

*Coordinated Specialty Care:*
- Team-based approach
- Lower dose medications
- Psychotherapy (CBTp, family)
- Supported employment/education
- Case management
- Recovery-oriented

*RAISE Trial Evidence:*
- Better outcomes with coordinated care
- Reduced symptoms, improved quality of life
- Duration of untreated psychosis matters

**Special Populations:**

*Late-Onset:*
- After age 40
- More delusions, less disorganization
- Lower doses effective

*Pregnancy:*
- Risk-benefit discussion
- Antipsychotics generally continued
- Haloperidol, olanzapine most data
- Monitor neonate`,
      keyTerms: [
        { term: 'aberrant salience', definition: 'Inappropriate attribution of significance to neutral stimuli' },
        { term: 'D2 occupancy', definition: 'Percentage of dopamine receptors blocked by antipsychotic' },
        { term: 'coordinated specialty care', definition: 'Team-based first-episode psychosis treatment approach' },
        { term: 'duration of untreated psychosis', definition: 'Time from symptom onset to treatment, shorter is better' },
        { term: 'RAISE', definition: 'Recovery After an Initial Schizophrenia Episode - landmark US study' },
      ],
      clinicalNotes: 'Duration of untreated psychosis predicts outcomes - emphasize early treatment. Clozapine underutilized despite superior efficacy in treatment-resistant cases. LAIs reduce relapse regardless of perceived adherence. Coordinate specialty care improves first-episode outcomes.',
    },
    5: {
      level: 5,
      summary: 'Contemporary schizophrenia research explores glutamate modulators, immune-inflammatory mechanisms, and precision medicine approaches. Digital phenotyping and predictive analytics aim to identify high-risk individuals. Focus on functional recovery and negative/cognitive symptom treatments addresses unmet needs.',
      explanation: `**Novel Therapeutic Targets:**

*Glutamate System:*
- NMDA receptor modulators
- Glycine transporter inhibitors (sarcosine)
- mGluR agonists
- D-serine augmentation
- Limited success to date but ongoing

*Muscarinic System:*
- KarXT (xanomeline-trospium)
- M1/M4 muscarinic agonist
- Positive Phase 3 results
- No D2 blockade
- Potentially first new mechanism in decades

*Trace Amine-Associated Receptor 1 (TAAR1):*
- Ulotaront: TAAR1/5-HT1A agonist
- Modulates dopamine system indirectly
- Mixed Phase 3 results

*Phosphodiesterase Inhibitors:*
- PDE10A inhibitors
- Striatal targeting
- Negative results

**Negative/Cognitive Symptoms:**

*Unmet Need:*
- Current medications limited for negative symptoms
- Cognitive symptoms major predictor of function
- Target for drug development

*Approaches:*
- Cariprazine: Some negative symptom efficacy
- Lumateperone: Mixed mechanism
- Cognitive remediation therapy
- Social cognitive training
- Aerobic exercise (evidence accumulating)

**Precision Medicine:**

*Biomarker Development:*
- Polygenic risk scores (research)
- Inflammatory subtyping
- Neuroimaging patterns
- Treatment response prediction
- Not clinically validated yet

*Stratification Approaches:*
- Inflammatory markers (CRP, IL-6)
- Clozapine response predictors
- Side effect susceptibility

**High-Risk Identification:**

*Clinical High Risk (CHR):*
- Attenuated positive symptoms
- Brief limited intermittent psychotic episodes
- Genetic risk + decline
- 20-30% conversion rate

*Prediction Models:*
- Clinical features
- Cognitive markers
- Neuroimaging
- Combination improves prediction

*Intervention:*
- CBT for at-risk individuals
- Family intervention
- Omega-3 fatty acids (some evidence)
- Antipsychotics: Ethical debate

**Digital and Technology:**

*Digital Phenotyping:*
- Smartphone data patterns
- Voice analysis
- Activity monitoring
- Early warning signs

*App-Based Interventions:*
- Symptom monitoring
- Medication reminders
- CBT delivery
- Social support

*Virtual Reality:*
- Social skills training
- Cognitive rehabilitation
- Exposure to challenging situations

**Recovery-Oriented Practice:**

*Recovery Model:*
- Focus on function, not just symptoms
- Person-centered goals
- Hope and agency
- Community participation
- Meaningful activity

*Peer Support:*
- Lived experience value
- Recovery coaches
- Peer-delivered services

*Supported Employment:*
- Individual Placement and Support (IPS)
- Competitive employment focus
- Integration with clinical care
- Strong evidence base

**Global and Implementation:**

*Disparities:*
- Access to clozapine
- Availability of CSC programs
- Incarceration vs treatment
- Racial/ethnic disparities in care

*Implementation Science:*
- Scaling effective interventions
- Training workforce
- Maintaining fidelity
- Sustainability`,
      keyTerms: [
        { term: 'KarXT', definition: 'Muscarinic agonist-based antipsychotic with new mechanism' },
        { term: 'clinical high risk', definition: 'State of elevated risk for developing psychosis' },
        { term: 'digital phenotyping', definition: 'Using smartphone data to detect symptom patterns' },
        { term: 'Individual Placement and Support', definition: 'Evidence-based supported employment model' },
        { term: 'TAAR1', definition: 'Trace amine-associated receptor 1 - novel therapeutic target' },
      ],
      clinicalNotes: `Current best practices:
- Early intervention (CSC for first episode)
- Clozapine for treatment-resistant (underused)
- Long-acting injectables when indicated
- Psychosocial interventions essential
- Recovery-oriented approach

Emerging developments:
- Muscarinic agonists (KarXT)
- Negative/cognitive symptom focus
- Digital monitoring
- Precision approaches

Key challenges:
- Negative and cognitive symptoms
- Metabolic side effects
- Clozapine underutilization
- Access to comprehensive care`,
    },
  },

  media: [
    {
      id: 'schizophrenia-symptoms-overview',
      type: 'diagram',
      filename: 'schizophrenia_symptoms.svg',
      title: 'Schizophrenia Symptom Categories',
      description: 'Visual overview of positive, negative, and cognitive symptoms',
    },
  ],

  citations: [
    {
      id: 'dsm5-schizophrenia',
      type: 'textbook',
      title: 'Diagnostic and Statistical Manual of Mental Disorders, 5th Edition',
      authors: ['American Psychiatric Association'],
      source: 'American Psychiatric Publishing',
      chapter: 'Schizophrenia Spectrum and Other Psychotic Disorders',
    },
  ],

  crossReferences: [
    { targetId: 'mental-health-psychiatric-medications', targetType: 'topic', relationship: 'see-also', label: 'Psychiatric Medications' },
    { targetId: 'mental-health-bipolar-disorder', targetType: 'condition', relationship: 'related', label: 'Bipolar Disorder' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['mental-health', 'psychiatry', 'psychosis'],
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
