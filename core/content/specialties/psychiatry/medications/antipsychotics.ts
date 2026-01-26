/**
 * Antipsychotics
 *
 * Comprehensive educational content on antipsychotic medications,
 * their mechanisms, uses, and clinical considerations.
 */

import { EducationalContent } from '../../../types';

export const antipsychoticsContent: EducationalContent = {
  id: 'psychiatry-antipsychotics',
  type: 'topic',
  name: 'Antipsychotics',
  alternateNames: ['Neuroleptics', 'Major Tranquilizers', 'Antipsychotic Medications'],

  levels: {
    1: {
      level: 1,
      summary: 'Antipsychotics are medications that help treat psychosis (losing touch with reality), schizophrenia, bipolar disorder, and sometimes severe depression or agitation.',
      explanation: `Antipsychotics help with symptoms like hallucinations (seeing or hearing things that aren't there) and delusions (believing things that aren't true).

**What They Treat:**
- Schizophrenia
- Bipolar disorder (manic episodes)
- Psychotic depression
- Severe agitation
- Sometimes used to help with mood disorders

**Two Main Types:**

*First-generation (older):*
- Haloperidol (Haldol)
- Chlorpromazine
- More movement side effects

*Second-generation (newer):*
- Risperidone (Risperdal)
- Quetiapine (Seroquel)
- Olanzapine (Zyprexa)
- Aripiprazole (Abilify)
- Fewer movement problems but metabolic effects

**How They Work:**
- Block dopamine receptors in the brain
- Newer ones also affect serotonin

**Important Side Effects:**
- Weight gain (especially newer ones)
- Drowsiness
- Movement problems (especially older ones)
- Increased blood sugar and cholesterol
- Can affect heart rhythm

**Key Points:**
- Very important to take as prescribed
- Don't stop suddenly without doctor's guidance
- Regular check-ups needed (weight, blood tests)
- Side effects often manageable with right medication choice`,
      keyTerms: [
        { term: 'psychosis', definition: 'A condition where someone loses touch with reality, may see or hear things that aren\'t there' },
        { term: 'hallucination', definition: 'Seeing, hearing, or feeling things that aren\'t really there' },
        { term: 'delusion', definition: 'A fixed false belief that doesn\'t change even with evidence' },
      ],
      analogies: [
        'Antipsychotics are like turning down the volume on a radio that\'s picking up too many signals and playing them too loudly.',
        'Dopamine in psychosis is like a fire alarm that keeps going off when there\'s no fire - antipsychotics quiet the alarm.',
      ],
      examples: [
        'Someone with schizophrenia who hears voices might find the voices become quieter or go away with antipsychotics.',
        'A person with severe mania might calm down and think more clearly after starting an antipsychotic.',
      ],
    },
    2: {
      level: 2,
      summary: 'Antipsychotics are classified as first-generation (typical) or second-generation (atypical), differing in receptor profiles and side effect patterns. They are essential for treating schizophrenia and increasingly used in mood disorders.',
      explanation: `**Classification:**

*First-Generation (Typical) Antipsychotics (FGAs):*
- High D2 blockade
- More EPS (movement side effects)
- Examples: Haloperidol, chlorpromazine, fluphenazine, perphenazine

*Second-Generation (Atypical) Antipsychotics (SGAs):*
- D2 + 5-HT2A blockade
- Lower EPS risk but metabolic effects
- Examples: Risperidone, olanzapine, quetiapine, aripiprazole, ziprasidone, clozapine

**Mechanism:**
- D2 receptor antagonism in mesolimbic pathway → Reduces positive symptoms
- Variable receptor profiles (5-HT2A, H1, alpha-1, muscarinic)
- Aripiprazole: Partial D2 agonist (different mechanism)

**Indications:**

*FDA-Approved:*
- Schizophrenia (all)
- Bipolar mania (many SGAs)
- Bipolar depression (quetiapine, lurasidone, cariprazine)
- Augmentation in MDD (aripiprazole, brexpiprazole, quetiapine XR)
- Autism-associated irritability (risperidone, aripiprazole)
- Tourette syndrome (some FGAs, aripiprazole)

**Side Effects:**

*FGA-related (EPS):*
- Acute dystonia (muscle spasms)
- Akathisia (restlessness)
- Parkinsonism (tremor, rigidity)
- Tardive dyskinesia (late-onset movements)

*SGA-related (Metabolic):*
- Weight gain (olanzapine, clozapine highest)
- Diabetes risk
- Dyslipidemia
- Metabolic syndrome

*Other:*
- Sedation (varies by agent)
- Prolactin elevation (risperidone, FGAs)
- QTc prolongation (ziprasidone, others)
- Orthostatic hypotension
- Anticholinergic effects

**Monitoring:**
- Weight, BMI
- Fasting glucose, HbA1c
- Lipid panel
- Blood pressure
- EPS assessment (AIMS for TD)
- CBC for clozapine

**Special Considerations:**

*Clozapine:*
- Most effective antipsychotic
- Reserved for treatment-resistant schizophrenia
- Risk: Agranulocytosis (requires weekly CBC initially)
- Also: Seizures, myocarditis, metabolic effects
- Requires REMS program enrollment`,
      keyTerms: [
        { term: 'EPS', definition: 'Extrapyramidal symptoms - movement side effects from dopamine blockade' },
        { term: 'tardive dyskinesia', definition: 'Late-onset involuntary movements from long-term antipsychotic use' },
        { term: 'treatment-resistant schizophrenia', definition: 'Schizophrenia not responding to 2+ antipsychotics, clozapine indicated' },
      ],
    },
    3: {
      level: 3,
      summary: 'Antipsychotic efficacy relates to D2 receptor occupancy (60-80% optimal), while side effects vary by receptor profile. SGAs offer lower EPS but require metabolic monitoring. Clozapine remains the gold standard for treatment-resistant cases despite monitoring requirements.',
      explanation: `**Pharmacology:**

*D2 Receptor Occupancy:*
- 60-80%: Therapeutic range for psychosis
- >80%: EPS increase, hyperprolactinemia
- <60%: Subtherapeutic

*Receptor Profiles by Agent:*

| Agent | D2 | 5-HT2A | H1 | Alpha-1 | M1 |
|-------|----|---------|----|---------|-----|
| Haloperidol | +++ | + | + | + | - |
| Risperidone | ++ | +++ | + | ++ | - |
| Olanzapine | ++ | +++ | +++ | ++ | ++ |
| Quetiapine | + | ++ | +++ | +++ | - |
| Aripiprazole | ++* | ++ | - | + | - |
| Clozapine | + | +++ | +++ | +++ | +++ |

*Partial agonist

**EPS Liability:**

*Highest to Lowest:*
Haloperidol > Risperidone > Olanzapine > Quetiapine = Clozapine

*EPS Types:*
- Acute dystonia: Hours-days, treat with anticholinergics
- Akathisia: Days-weeks, may need beta-blocker or switch
- Parkinsonism: Weeks, reduce dose or add anticholinergic
- Tardive dyskinesia: Months-years, may be irreversible

**Metabolic Risk:**

*Highest to Lowest:*
Clozapine = Olanzapine > Quetiapine > Risperidone > Aripiprazole = Ziprasidone

*Monitoring Schedule:*
- Baseline: Weight, waist circumference, glucose, lipids, BP
- 4-8 weeks: Reassess
- Quarterly: Weight
- Annually: Glucose, lipids

**Clinical Selection:**

*Schizophrenia:*
- First-line: Any SGA (except clozapine)
- Second-line: Switch SGA or try FGA
- Treatment-resistant: Clozapine (after 2 failed trials)

*Bipolar Mania:*
- Approved: Risperidone, olanzapine, quetiapine, aripiprazole, ziprasidone, asenapine, cariprazine

*Bipolar Depression:*
- Quetiapine, lurasidone, cariprazine (approved)
- Olanzapine-fluoxetine combination

*MDD Augmentation:*
- Aripiprazole, brexpiprazole, quetiapine XR (approved)

**Long-Acting Injectables (LAIs):**

*Available:*
- Haloperidol decanoate
- Fluphenazine decanoate
- Risperidone LAI (Risperdal Consta)
- Paliperidone palmitate (Invega Sustenna, Trinza)
- Aripiprazole (Abilify Maintena, Aristada)
- Olanzapine pamoate (Zyprexa Relprevv)

*Benefits:*
- Improved adherence
- Steady levels
- Consider early in illness course

**Clozapine:**

*Unique Efficacy:*
- Only agent proven effective for TRS
- ~30-60% of TRS patients respond
- Reduces suicide risk in schizophrenia

*Monitoring (REMS):*
- ANC weekly x6 months
- Every 2 weeks x6 months
- Monthly thereafter
- Stop if ANC <1000

*Other Risks:*
- Seizures (dose-related)
- Myocarditis (first weeks)
- Constipation (can be severe)
- Sialorrhea (hypersalivation)
- Metabolic (most severe)`,
      keyTerms: [
        { term: 'D2 occupancy', definition: 'Percentage of D2 receptors blocked; 60-80% optimal for antipsychotic effect' },
        { term: 'LAI', definition: 'Long-acting injectable antipsychotic; given every 2 weeks to 6 months' },
        { term: 'AIMS', definition: 'Abnormal Involuntary Movement Scale; monitors for tardive dyskinesia' },
        { term: 'ANC', definition: 'Absolute neutrophil count; monitored with clozapine to detect agranulocytosis' },
      ],
    },
    4: {
      level: 4,
      summary: 'Antipsychotic mechanisms extend beyond D2 antagonism to include glutamate modulation and synaptic plasticity effects. Treatment optimization involves balancing efficacy, receptor-mediated side effects, and pharmacokinetic factors, with LAIs improving outcomes through consistent exposure.',
      explanation: `**Mechanism Beyond D2:**

*Glutamate Hypothesis:*
- NMDA receptor hypofunction in schizophrenia
- Antipsychotics may indirectly affect glutamate
- 5-HT2A antagonism modulates glutamate release
- Explains some negative/cognitive symptom effects

*Neuroplasticity:*
- D2 blockade induces synaptic changes
- 5-HT2A effects on cortical plasticity
- May contribute to long-term benefits

*Dopamine Pathways:*
- Mesolimbic: D2 block → Reduced positive symptoms
- Mesocortical: D2 block may worsen negative/cognitive symptoms
- Nigrostriatal: D2 block → EPS
- Tuberoinfundibular: D2 block → Hyperprolactinemia

**Pharmacokinetic Considerations:**

*Metabolism:*
- Most hepatic (CYP450)
- Risperidone: 2D6 → Paliperidone
- Olanzapine: 1A2 (smoking induces)
- Quetiapine: 3A4
- Aripiprazole: 2D6, 3A4
- Clozapine: 1A2 (smoking induces), 2D6

*Clinical Implications:*
- Smoking cessation: Increase clozapine/olanzapine levels
- CYP2D6 poor metabolizers: Higher risperidone levels
- Drug interactions with CYP inducers/inhibitors

**Advanced Treatment Strategies:**

*Treatment-Resistant Schizophrenia:*
Definition: Failure of 2 antipsychotics at adequate dose/duration

Protocol:
1. Clozapine (most evidence)
2. Clozapine augmentation (if partial response)
   - Amisulpride, aripiprazole, lamotrigine (limited evidence)
3. ECT augmentation
4. Other strategies (limited evidence)

*Negative Symptoms:*
- Generally less responsive to antipsychotics
- Avoid high D2 blockade (worsens via mesocortical)
- Consider cariprazine (D3 partial agonist)
- Psychosocial interventions crucial

*Cognitive Symptoms:*
- Limited medication benefit
- Cognitive remediation therapy
- Minimize anticholinergic burden

**Side Effect Management:**

*EPS:*
- Acute dystonia: Benztropine IM/IV or diphenhydramine
- Akathisia: Propranolol, benzodiazepine, switch agents
- Parkinsonism: Reduce dose, anticholinergics, switch
- TD: Switch to clozapine or quetiapine; VMAT2 inhibitors (valbenazine, deutetrabenazine)

*Metabolic:*
- Lifestyle intervention (first-line)
- Metformin (reduces weight gain)
- Consider switching agents
- Treat diabetes, dyslipidemia as indicated

*Hyperprolactinemia:*
- Switch agents (aripiprazole, quetiapine have minimal effect)
- Aripiprazole addition
- Address consequences (bone health, sexual dysfunction)

*Clozapine-Specific:*
- Constipation: Aggressive prevention (severe ileus can occur)
- Sialorrhea: Glycopyrrolate, atropine drops
- Sedation: Dose at bedtime, slow titration
- Myocarditis: Monitor early (troponin, echo if suspected)

**LAI Considerations:**

*Benefits:*
- Eliminates daily adherence
- Prevents relapse more effectively
- Pharmacokinetically stable

*Selection:*
- Match to oral efficacy first
- Consider duration (2 weeks to 6 months)
- Injection site, volume

*Initiation:*
- Most require oral overlap
- Paliperidone: Loading doses possible
- Olanzapine pamoate: Post-injection monitoring required`,
      keyTerms: [
        { term: 'VMAT2 inhibitor', definition: 'Vesicular monoamine transporter 2 inhibitor; treats tardive dyskinesia' },
        { term: 'mesocortical pathway', definition: 'Dopamine pathway to prefrontal cortex; D2 blockade may worsen negative/cognitive symptoms' },
        { term: 'post-injection delirium', definition: 'Sedation syndrome occurring with olanzapine LAI requiring 3-hour monitoring' },
      ],
      clinicalNotes: 'Match D2 occupancy to therapeutic range (60-80%). Monitor metabolic parameters. Consider LAIs for adherence. Clozapine for treatment resistance despite monitoring burden. TD can be irreversible - use lowest effective dose. Smoking affects clozapine/olanzapine metabolism.',
    },
    5: {
      level: 5,
      summary: 'Contemporary antipsychotic research focuses on novel mechanisms (trace amines, muscarinic, glutamate), precision approaches for treatment selection, and optimizing early intervention. Understanding molecular targets beyond dopamine drives development of agents with improved efficacy and tolerability profiles.',
      explanation: `**Novel Mechanisms:**

*Trace Amine-Associated Receptor 1 (TAAR1):*
- Ulotaront: TAAR1/5-HT1A agonist
- No direct D2 antagonism
- Phase 3 trials positive then failed
- Novel mechanism proof of concept

*Muscarinic Agonists:*
- Xanomeline (M1/M4 agonist)
- KarXT: Xanomeline + trospium (blocks peripheral effects)
- Phase 3 positive (FDA approval 2024)
- No D2 blockade = No EPS, No metabolic effects

*Glutamate Modulators:*
- Glycine site agonists
- mGluR modulators
- Limited success to date
- Ongoing research

*Phosphodiesterase Inhibitors:*
- PDE10A inhibitors
- Enhance striatal signaling
- Development challenges

**Precision Medicine:**

*Pharmacogenomics:*
- CYP2D6: Affects risperidone, aripiprazole
- CYP1A2: Affects clozapine, olanzapine
- CPIC guidelines for some agent-gene pairs
- Clinical implementation growing

*Biomarkers:*
- Neuroimaging predictors of response
- Blood-based markers (inflammatory, metabolic)
- Not yet clinically implemented

*Treatment Selection:*
- Side effect profile matching to patient
- Prior response (individual and family)
- Comorbidities guide choice
- Metabolic risk assessment

**Early Intervention:**

*Duration of Untreated Psychosis (DUP):*
- Shorter DUP = Better outcomes
- Push for early treatment
- First-episode programs

*LAIs in Early Course:*
- Prevent relapse
- Preserve function
- May improve long-term outcomes
- Evidence growing for early use

*Lower Doses:*
- First-episode patients more sensitive
- Start low, go slow
- May need lower maintenance doses

**Clozapine Optimization:**

*Utilization Gap:*
- Underused despite superiority
- Barriers: Monitoring, prescriber reluctance, side effects
- Education and support programs

*Augmentation:*
- For partial clozapine response
- Amisulpride: Some evidence
- Aripiprazole: May help metabolic profile
- ECT: For super-refractory cases
- Limited evidence for most strategies

**TD Management:**

*VMAT2 Inhibitors:*
- Valbenazine (Ingrezza): FDA-approved
- Deutetrabenazine (Austedo): FDA-approved
- Mechanism: Deplete dopamine from vesicles
- Effective, may need long-term use

*Prevention:*
- Use lowest effective dose
- Consider agents with lower TD risk
- Early detection (AIMS)
- Switch to clozapine if TD develops

**Long-Acting Injectable Advances:**

*Extended Durations:*
- Paliperidone: 1, 3, 6-month formulations
- Aripiprazole: 1-month, 2-month formulations
- Future: Longer-acting options

*Subcutaneous Options:*
- Risperidone SC (Perseris)
- May improve tolerability vs. IM

*Point-of-Care Initiation:*
- Emergency department
- Inpatient initiation
- Transition-of-care protocols

**Future Directions:**

1. Non-D2 blocking antipsychotics (KarXT precedent)
2. Biomarker-guided treatment selection
3. Negative symptom treatments
4. Cognitive symptom treatments
5. Long-term safety optimization
6. Prevention strategies
7. Personalized dosing
8. Global access improvements`,
      keyTerms: [
        { term: 'TAAR1', definition: 'Trace amine-associated receptor 1; novel antipsychotic target not involving direct D2 blockade' },
        { term: 'KarXT', definition: 'Xanomeline-trospium; first muscarinic agonist antipsychotic (FDA approved 2024)' },
        { term: 'DUP', definition: 'Duration of untreated psychosis; shorter DUP associated with better outcomes' },
        { term: 'super-refractory', definition: 'Not responding to clozapine; may benefit from ECT or augmentation' },
      ],
      clinicalNotes: `Current practice:
- SGAs first-line for most indications
- Individualize based on side effect profile
- Metabolic monitoring essential
- LAIs for adherence and relapse prevention
- Clozapine for treatment-resistant schizophrenia

Emerging:
- KarXT: First muscarinic antipsychotic
- Novel mechanisms beyond D2
- Earlier LAI use
- VMAT2 inhibitors for TD
- Precision medicine approaches

Key points:
- Balance efficacy and tolerability
- Clozapine underutilized
- Smoking affects metabolism
- TD prevention and management
- Long-term maintenance critical`,
    },
  },

  media: [
    {
      id: 'antipsychotic-comparison',
      type: 'diagram',
      filename: 'antipsychotic_comparison.svg',
      title: 'Antipsychotic Receptor Profiles',
      description: 'Comparison of receptor binding among antipsychotics',
    },
  ],

  citations: [
    {
      id: 'stahl-antipsychotics',
      type: 'textbook',
      title: "Stahl's Essential Psychopharmacology",
      authors: ['Stahl SM'],
      source: 'Cambridge University Press',
      chapter: 'Antipsychotic Agents',
    },
  ],

  crossReferences: [
    { targetId: 'psychiatry-schizophrenia', targetType: 'condition', relationship: 'see-also', label: 'Schizophrenia' },
    { targetId: 'psychiatry-bipolar-disorder', targetType: 'condition', relationship: 'see-also', label: 'Bipolar Disorder' },
    { targetId: 'psychiatry-mood-stabilizers', targetType: 'topic', relationship: 'related', label: 'Mood Stabilizers' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['psychiatry', 'pharmacology', 'medications'],
    keywords: ['antipsychotic', 'dopamine', 'schizophrenia', 'psychosis', 'clozapine'],
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

export default antipsychoticsContent;
