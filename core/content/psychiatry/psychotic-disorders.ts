/**
 * Psychotic Disorders - Schizophrenia & Schizoaffective Disorder
 *
 * Comprehensive coverage of the dopamine hypothesis, positive/negative/cognitive symptoms,
 * antipsychotic mechanisms (D2 blockade, serotonin-dopamine antagonism), clozapine,
 * long-acting injectables, early intervention, and prodromal states.
 */

import { EducationalContent } from '../types';

export const psychoticDisorders: EducationalContent = {
  id: 'psychiatry-psychotic-disorders',
  type: 'condition',
  name: 'Psychotic Disorders',
  nameEs: 'Trastornos Psicoticos',
  alternateNames: [
    'Schizophrenia Spectrum Disorders',
    'Psychosis',
    'Thought Disorders',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Psychotic disorders like schizophrenia affect how the brain processes reality, causing a person to see, hear, or believe things that are not real. With treatment, many people can manage their symptoms and live meaningful lives.',
      explanation: `## When the Brain Mixes Up What Is Real

### What Is Psychosis?

Imagine you are wearing headphones that play sounds no one else can hear, or wearing special glasses that show you things no one else can see. That is a little like what happens in **psychosis** -- the brain creates experiences that feel completely real to the person but are not actually happening.

**Psychosis** is not a disease itself but a set of symptoms that can occur in several conditions. The most well-known is **schizophrenia**.

### Schizophrenia: Three Types of Symptoms

**1. Positive symptoms** (things that are "added" to a person's experience):
- **Hallucinations**: Hearing voices that no one else hears (most common), or seeing things that are not there
- **Delusions**: Strong beliefs that are not based in reality (for example, believing the government is spying on them, or that they have special powers)
- **Disorganized thinking**: Thoughts become jumbled, making speech hard to follow

**2. Negative symptoms** (things that are "taken away"):
- Flat emotions -- the face and voice show little feeling
- Loss of motivation -- it becomes very hard to start or finish tasks
- Social withdrawal -- pulling away from friends and family
- Reduced speech -- talking much less than usual

**3. Cognitive symptoms** (thinking problems):
- Trouble paying attention
- Difficulty remembering things
- Problems with planning and decision-making

### What Causes Schizophrenia?

Schizophrenia is caused by a combination of factors:
- **Brain chemistry**: Too much of a chemical messenger called **dopamine** in certain parts of the brain
- **Genetics**: Having a family member with schizophrenia increases risk, but most people with a family history never develop it
- **Environment**: Stress, trauma, and certain infections may trigger it in people who are already at risk

### Treatment

Schizophrenia is a treatable condition:
- **Antipsychotic medications** help reduce hallucinations and delusions by balancing dopamine in the brain
- **Therapy and support** help with social skills, daily living, and staying on track with goals
- **Family education** helps loved ones understand the condition and provide better support
- Many people with schizophrenia go to school, hold jobs, and have relationships with proper treatment

### What Schizophrenia Is NOT

- It is NOT "split personality" (that is a different condition called dissociative identity disorder)
- It does NOT mean a person is violent (most people with schizophrenia are not dangerous)
- It is NOT caused by bad parenting
- It IS a medical condition involving real changes in brain chemistry and structure`,
      keyTerms: [
        {
          term: 'Psychosis',
          definition:
            'A set of symptoms where the brain has trouble telling what is real from what is not, including hearing or seeing things that are not there and holding beliefs that are not based in reality',
          pronunciation: 'sy-KOH-sis',
        },
        {
          term: 'Schizophrenia',
          definition:
            'A brain disorder that affects how a person thinks, feels, and perceives reality; involves hallucinations, delusions, and difficulties with thinking and motivation',
          pronunciation: 'SKIT-soh-FREN-ee-ah',
          etymology: 'Greek: schizein (to split) + phren (mind)',
        },
        {
          term: 'Hallucination',
          definition:
            'Perceiving something that is not really there, such as hearing voices that no one else can hear',
          pronunciation: 'hah-LOO-sin-AY-shun',
        },
        {
          term: 'Delusion',
          definition:
            'A strong belief that is not based in reality and persists despite evidence to the contrary',
          pronunciation: 'deh-LOO-zhun',
        },
        {
          term: 'Dopamine',
          definition:
            'A chemical messenger in the brain that helps control movement, motivation, and pleasure; too much dopamine activity in certain brain areas contributes to psychosis',
          pronunciation: 'DOH-pah-meen',
        },
      ],
      analogies: [
        'Hallucinations are like wearing invisible headphones that play sounds only you can hear -- they feel completely real even though no one else experiences them.',
        'Delusions are like being stuck inside a very convincing dream while you are awake -- the person is sure it is real even when others try to explain otherwise.',
        'Negative symptoms are like the brain\'s volume and brightness dials being turned way down -- emotions, motivation, and social interest all become muted.',
      ],
      patientCounselingPoints: [
        'Schizophrenia is a medical condition, not a character flaw or a choice.',
        'Treatment with medication is very important -- stopping medication is the most common cause of relapse.',
        'Recovery is possible. Many people with schizophrenia lead fulfilling lives with proper treatment.',
        'If you hear voices or have unusual beliefs that worry you, talking to a doctor is the right first step.',
      ],
    },

    2: {
      level: 2,
      summary:
        'Schizophrenia is defined by DSM-5 criteria requiring 2+ symptoms for 6+ months. The dopamine hypothesis explains positive symptoms via mesolimbic hyperactivity. Treatment involves first- and second-generation antipsychotics acting primarily through D2 receptor blockade.',
      explanation: `## Psychotic Disorders: Diagnosis and Pharmacotherapy

### Schizophrenia: DSM-5 Criteria

**Required**: Two or more of the following, each present for a significant portion of time during a 1-month period (at least one must be 1, 2, or 3):
1. **Delusions**
2. **Hallucinations**
3. **Disorganized speech** (e.g., frequent derailment, incoherence)
4. **Grossly disorganized or catatonic behavior**
5. **Negative symptoms** (diminished emotional expression, avolition)

**Additional criteria**:
- Level of functioning markedly below premorbid baseline (social, occupational, self-care)
- Continuous signs for at least **6 months** (including at least 1 month of active-phase symptoms)
- Schizoaffective disorder and mood disorders with psychotic features have been ruled out
- Not attributable to substances or medical conditions

**Epidemiology**: ~1% lifetime prevalence worldwide; equal M:F ratio but earlier onset in males (late teens/early 20s vs. late 20s/early 30s in females); strong genetic component (heritability ~80%).

### Schizoaffective Disorder

A hybrid condition with features of both schizophrenia and a mood disorder:
- **Criterion A**: Meets schizophrenia criteria AND a major mood episode (depressive or manic) concurrent with active-phase psychotic symptoms
- **Criterion B**: Delusions or hallucinations for 2+ weeks in the **absence** of a major mood episode (this distinguishes it from mood disorder with psychotic features)
- Two subtypes: Bipolar type and Depressive type
- Treatment combines antipsychotics with mood stabilizers or antidepressants

### The Dopamine Hypothesis

The central pharmacological theory of schizophrenia:

**Four key dopamine pathways**:
1. **Mesolimbic pathway** (VTA to nucleus accumbens): **Hyperactive** in schizophrenia -- responsible for positive symptoms (hallucinations, delusions). All effective antipsychotics block D2 receptors here.
2. **Mesocortical pathway** (VTA to PFC): **Hypoactive** -- responsible for negative symptoms and cognitive deficits. D2 blockade here can worsen these symptoms.
3. **Nigrostriatal pathway** (substantia nigra to striatum): Motor function. D2 blockade here causes **extrapyramidal symptoms (EPS)**.
4. **Tuberoinfundibular pathway** (hypothalamus to pituitary): Dopamine inhibits prolactin. D2 blockade here causes **hyperprolactinemia**.

### First-Generation Antipsychotics (FGAs / Typical)

Also called **conventional** or **typical** antipsychotics. Primarily block D2 receptors.

**High potency** (more EPS, less sedation/anticholinergic):
- Haloperidol (Haldol): Most commonly used; available IM for acute agitation
- Fluphenazine: Available as long-acting injectable (decanoate)

**Low potency** (more sedation, anticholinergic effects; less EPS):
- Chlorpromazine (Thorazine): First antipsychotic discovered (1952)

**Side effects of FGAs**:
- **EPS**: Acute dystonia (hours-days), akathisia (days-weeks), parkinsonism (weeks-months), tardive dyskinesia (months-years)
- **Neuroleptic malignant syndrome (NMS)**: Medical emergency -- fever, rigidity, autonomic instability, altered mental status, elevated CK
- Anticholinergic effects, sedation, orthostatic hypotension, QTc prolongation

### Second-Generation Antipsychotics (SGAs / Atypical)

Block both **D2 and 5-HT2A receptors** (serotonin-dopamine antagonism):

- **Risperidone (Risperdal)**: Dose-dependent EPS; hyperprolactinemia; available as LAI
- **Olanzapine (Zyprexa)**: Effective but significant metabolic side effects (weight gain, diabetes, dyslipidemia)
- **Quetiapine (Seroquel)**: Sedating; used for schizophrenia, bipolar, and adjunctive for depression; low EPS
- **Aripiprazole (Abilify)**: **D2 partial agonist** (unique mechanism); activates D2 when dopamine is low, blocks when dopamine is high; lower metabolic burden; available as LAI
- **Ziprasidone (Geodon)**: QTc prolongation concern; lower metabolic effects; must take with food
- **Lurasidone (Latuda)**: FDA-approved for schizophrenia and bipolar depression; favorable metabolic profile
- **Clozapine (Clozaril)**: See Level 3 for detailed coverage -- gold standard for treatment-resistant schizophrenia

**Metabolic syndrome monitoring** (required for all SGAs):
- Weight, BMI, waist circumference (each visit)
- Fasting glucose and lipid panel (baseline, 3 months, annually)
- Blood pressure (each visit)

### Psychosocial Treatments

- **Cognitive Behavioral Therapy for psychosis (CBTp)**: Challenges delusional beliefs and develops coping strategies for hallucinations
- **Social Skills Training**: Structured practice of interpersonal skills
- **Supported Employment/Education**: Individual placement and support model
- **Family Psychoeducation**: Reduces expressed emotion and relapse rates by 50%
- **Assertive Community Treatment (ACT)**: Intensive outreach for high-need patients`,
      keyTerms: [
        {
          term: 'Positive symptoms',
          definition:
            'Symptoms that represent an excess or distortion of normal function: hallucinations, delusions, disorganized speech, disorganized behavior; caused by mesolimbic dopamine hyperactivity',
        },
        {
          term: 'Negative symptoms',
          definition:
            'Symptoms that represent a reduction in normal function: blunted affect, alogia (reduced speech), avolition (reduced motivation), anhedonia, asociality; associated with mesocortical dopamine hypoactivity',
        },
        {
          term: 'Extrapyramidal symptoms',
          definition:
            'Movement disorders caused by D2 blockade in the nigrostriatal pathway: acute dystonia, akathisia, drug-induced parkinsonism, and tardive dyskinesia',
          relatedTerms: ['EPS', 'Tardive dyskinesia', 'Akathisia'],
        },
        {
          term: 'Serotonin-dopamine antagonism',
          definition:
            'The dual receptor-blocking mechanism of second-generation antipsychotics: D2 blockade in the mesolimbic pathway treats positive symptoms while 5-HT2A blockade in the cortex and nigrostriatal pathway reduces EPS and may improve negative symptoms',
        },
        {
          term: 'Neuroleptic malignant syndrome',
          definition:
            'A life-threatening reaction to antipsychotics characterized by high fever, muscle rigidity, autonomic instability, and altered mental status; treated with dantrolene and bromocriptine',
          relatedTerms: ['NMS'],
          pronunciation: 'NOOR-oh-LEP-tik mah-LIG-nant SIN-drohm',
        },
        {
          term: 'Schizoaffective disorder',
          definition:
            'A disorder featuring both schizophrenia symptoms and a major mood episode, with psychotic symptoms occurring for at least 2 weeks without mood symptoms (distinguishing it from mood disorders with psychotic features)',
        },
        {
          term: 'Aripiprazole',
          definition:
            'A second-generation antipsychotic with a unique mechanism as a D2 partial agonist -- it activates dopamine receptors when dopamine is deficient and blocks them when dopamine is excessive',
          pronunciation: 'ar-ih-PIP-rah-zole',
        },
      ],
      clinicalNotes:
        'First episode psychosis should be treated with low-dose SGA (risperidone 1-3mg or aripiprazole 10-15mg); start low, go slow. Monitor metabolic parameters at baseline and regularly. NMS is a medical emergency: discontinue antipsychotic, supportive care, dantrolene for rigidity, bromocriptine for dopaminergic restoration. EPS treatment: acute dystonia (benztropine IM/diphenhydramine IM), akathisia (beta-blocker or benzodiazepine), parkinsonism (benztropine, trihexyphenidyl). Always rule out substance-induced psychosis (amphetamines, cannabis, PCP, LSD) and medical causes (delirium, autoimmune encephalitis, thyroid disease).',
    },

    3: {
      level: 3,
      summary:
        'Schizophrenia involves glutamate hypofunction (NMDA receptor), aberrant salience (dopamine), cortical thinning, white matter disconnection, and gamma oscillation deficits. Clozapine is uniquely effective for treatment-resistant cases via its multi-receptor profile. Long-acting injectables improve adherence and outcomes.',
      explanation: `## Neurobiology and Advanced Pharmacology

### Beyond Dopamine: The Glutamate Hypothesis

The **NMDA receptor hypofunction hypothesis** addresses limitations of the dopamine model:

**Evidence**:
- **PCP (phencyclidine)** and **ketamine** (NMDA antagonists) produce symptoms mimicking all three symptom domains of schizophrenia (positive, negative, AND cognitive) -- unlike dopamine agonists which only produce positive symptoms
- Postmortem studies show reduced NMDA receptor expression on cortical GABAergic interneurons
- Genetic risk variants affect glutamate-related genes (GRIN2A, SRR/serine racemase, DISC1)

**Mechanism**:
1. NMDA receptors on **cortical GABAergic interneurons** (particularly parvalbumin-positive fast-spiking interneurons) are hypoactive
2. This reduces GABAergic inhibition of cortical pyramidal neurons
3. Disinhibited pyramidal neurons produce **excess cortical glutamate** release
4. Excess glutamate in cortical-striatal projections drives **mesolimbic dopamine hyperactivity** (positive symptoms)
5. Simultaneously, reduced glutamate drive to mesocortical neurons leads to **prefrontal dopamine hypoactivity** (negative and cognitive symptoms)
6. This unifies the dopamine and glutamate hypotheses: glutamate dysfunction is upstream of dopamine dysregulation

### Aberrant Salience: A Unifying Model

The **aberrant salience hypothesis** (Kapur, 2003) proposes:
- Dopamine normally assigns **motivational salience** to stimuli (marking them as important/relevant)
- In psychosis, dysregulated dopamine firing assigns salience to **irrelevant stimuli**
- The brain then attempts to make sense of these aberrantly salient experiences through **delusional explanations**
- Hallucinations arise from aberrant salience assigned to **internal representations** (inner speech, mental images)
- Antipsychotics reduce positive symptoms by dampening dopamine-mediated salience assignment
- This explains the gradual fading of delusional conviction with treatment (rather than sudden insight)

### Structural and Functional Brain Changes

**Gray matter**:
- Progressive **cortical thinning**, particularly in temporal and prefrontal cortices
- Reduced hippocampal volume
- Enlarged lateral ventricles (one of the earliest and most replicated findings)
- Gray matter loss correlates with duration of untreated psychosis (DUP) -- supporting early intervention

**White matter**:
- Reduced fractional anisotropy on DTI (diffusion tensor imaging), indicating white matter disorganization
- Disconnection between PFC, temporal cortex, and limbic structures
- Schizophrenia increasingly conceptualized as a **disconnection syndrome**

**Functional abnormalities**:
- Reduced **gamma oscillations (30-80 Hz)**: Normally generated by parvalbumin interneurons; essential for working memory and perceptual binding
- PFC hypoactivation during working memory tasks ("hypofrontality")
- Default mode network fails to deactivate during task performance
- Reduced mismatch negativity (MMN) -- an EEG marker of pre-attentive auditory processing

### Clozapine: The Gold Standard for Treatment Resistance

**Treatment-resistant schizophrenia (TRS)**: Failure to respond to 2+ adequate antipsychotic trials (different agents, adequate dose, 6+ weeks each).

**Clozapine uniqueness**:
- Only antipsychotic with proven superiority in TRS (~30-60% of TRS patients respond)
- Only antipsychotic shown to reduce suicidality in schizophrenia (InterSePT trial)
- **Multi-receptor profile**: D1, D2 (loose binding/"fast off"), D4, 5-HT2A, 5-HT2C, 5-HT1A (partial agonist), muscarinic M1/M4, alpha-1, alpha-2, H1
- "Fast-off" D2 binding: Rapid dissociation from D2 receptors may explain low EPS profile
- 5-HT2A/D2 ratio is highest among all antipsychotics
- Muscarinic agonism (M1/M4) may contribute to pro-cognitive effects and unique efficacy

**Mandatory monitoring (REMS)**:
- **Agranulocytosis** risk (~1%): Requires absolute neutrophil count (ANC) monitoring:
  - Weekly for first 6 months
  - Biweekly for months 6-12
  - Monthly thereafter
- Must stop immediately if ANC <1000/mm3 (500 if benign ethnic neutropenia)
- Other serious risks: Myocarditis (first month), cardiomyopathy, seizures (dose-related), severe constipation/ileus, metabolic syndrome (most weight gain of any antipsychotic), sialorrhea

### Long-Acting Injectable Antipsychotics (LAIs)

LAIs address the critical problem of **medication nonadherence** (estimated 40-60% partial or full nonadherence in schizophrenia):

**Available LAIs**:
- **Paliperidone palmitate** (Invega Sustenna/Trinza/Hafyera): Monthly, every 3 months, or every 6 months
- **Aripiprazole lauroxil** (Aristada): Monthly or every 2 months
- **Aripiprazole monohydrate** (Abilify Maintena): Monthly
- **Risperidone** (Risperdal Consta): Biweekly
- **Haloperidol decanoate**: Monthly
- **Fluphenazine decanoate**: Biweekly to monthly
- **Olanzapine pamoate** (Zyprexa Relhyprev): Biweekly or monthly; requires 3-hour post-injection observation (post-injection delirium/sedation syndrome)

**Evidence for LAIs**:
- Mirror-image studies consistently show reduced hospitalizations after switching to LAI
- PROACTIVE trial: LAI paliperidone reduced relapse rate at first episode
- Real-world data show LAIs reduce all-cause discontinuation vs. oral antipsychotics
- Increasingly recommended at first episode, not just for nonadherent patients

### Early Intervention and Duration of Untreated Psychosis (DUP)

**DUP** is the time from onset of psychotic symptoms to initiation of adequate antipsychotic treatment:
- Average DUP in the US: ~74 weeks (over 1 year)
- Longer DUP correlates with: poorer treatment response, greater functional impairment, more severe negative symptoms, greater gray matter loss
- The relationship is thought to reflect both neurotoxicity of untreated psychosis and selection bias

**Coordinated Specialty Care (CSC)** programs:
- **RAISE-ETP trial (NAVIGATE program)**: Team-based care (psychiatrist, therapist, supported employment, family education, case management) for first-episode psychosis
- CSC produced better symptom outcomes and quality of life vs. usual care, especially when DUP was <74 weeks
- Now a standard of care endorsed by NIMH and implemented in all 50 US states`,
      keyTerms: [
        {
          term: 'NMDA hypofunction hypothesis',
          definition:
            'The theory that schizophrenia involves reduced NMDA receptor function on cortical GABAergic interneurons, leading to disinhibited glutamate release and downstream dopamine dysregulation in both mesolimbic and mesocortical pathways',
        },
        {
          term: 'Aberrant salience',
          definition:
            'The hypothesis that psychosis arises from dysregulated dopamine assigning motivational significance to irrelevant stimuli, leading the brain to construct delusional frameworks to explain these aberrantly salient experiences',
        },
        {
          term: 'Parvalbumin interneurons',
          definition:
            'Fast-spiking GABAergic interneurons that generate gamma oscillations and are critical for working memory; their NMDA receptors are hypoactive in schizophrenia, leading to cortical disinhibition',
          relatedTerms: ['PV interneurons', 'Fast-spiking interneurons'],
        },
        {
          term: 'Clozapine',
          definition:
            'The only antipsychotic with proven superiority in treatment-resistant schizophrenia and anti-suicidal efficacy; unique multi-receptor profile with "fast-off" D2 binding; requires ANC monitoring due to 1% agranulocytosis risk',
          pronunciation: 'KLOH-zah-peen',
        },
        {
          term: 'Duration of untreated psychosis',
          definition:
            'The time from onset of psychotic symptoms to adequate antipsychotic treatment; longer DUP correlates with poorer treatment response, greater functional impairment, and progressive gray matter loss',
          relatedTerms: ['DUP'],
        },
        {
          term: 'Long-acting injectable antipsychotic',
          definition:
            'Depot antipsychotic formulations (monthly to every 6 months) that address medication nonadherence; consistently reduce hospitalization rates; increasingly recommended from first episode',
          relatedTerms: ['LAI', 'Depot antipsychotic'],
        },
        {
          term: 'Gamma oscillations',
          definition:
            'High-frequency (30-80 Hz) neural oscillations generated by parvalbumin interneurons; essential for working memory, perceptual binding, and cognitive function; deficient in schizophrenia',
        },
      ],
      clinicalNotes:
        'Clozapine is underutilized worldwide despite unique evidence for TRS and suicidality. Prescribe at adequate doses (300-900 mg/day; target level 350-600 ng/mL). Always obtain ANC before initiating. Clozapine can be continued with ANC monitoring in benign ethnic neutropenia (baseline ANC 1000-1500 common in African ancestry). Constipation from clozapine can be fatal (ileus, bowel perforation) -- prescribe prophylactic laxatives. LAIs should be discussed with all patients at first episode, not reserved for "nonadherent" patients. The NAVIGATE model for first-episode psychosis is cost-effective and should be standard of care.',
    },

    4: {
      level: 4,
      summary:
        'Advanced schizophrenia neurobiology includes complement-mediated synaptic pruning (C4A), immune dysregulation, oxidative stress, advanced neuroimaging biomarkers, and the neurodevelopmental model. Emerging treatments include glycine site modulators, muscarinic agonists (xanomeline-trospium), and trace amine-associated receptor 1 (TAAR1) agonists.',
      explanation: `## Advanced Neurobiology and Emerging Therapeutics

### The Neurodevelopmental Model

Schizophrenia is increasingly understood as a **neurodevelopmental disorder** with origins long before symptom onset:

**Two-hit hypothesis**:
- **First hit** (prenatal/perinatal): Genetic risk + early environmental insults (maternal infection, obstetric complications, prenatal stress) disrupt brain development
  - Maternal immune activation (MIA) models: Prenatal exposure to IL-6, poly(I:C), or influenza produces schizophrenia-like phenotypes in offspring
  - Obstetric complications (hypoxia, preeclampsia) increase risk 2-3x
- **Second hit** (adolescence): Excessive synaptic pruning, cannabis exposure, and psychosocial stress unmask latent vulnerabilities during the critical period of cortical maturation

**Complement-mediated synaptic pruning (C4A)**:
- **Landmark finding** (Sekar et al., 2016, Nature): Schizophrenia GWAS signal at the MHC locus maps to **complement component 4A (C4A)**
- Higher C4A expression increases **complement-mediated synaptic elimination** by microglia during adolescent pruning
- This provides a molecular mechanism for the excessive cortical thinning and reduced synapse density in schizophrenia
- Microglia "eat" synapses tagged with C4/C3 complement proteins
- Explains the adolescent/early adult onset timing: Excessive pruning during the normal developmental pruning window
- Potential therapeutic target: Complement inhibitors to prevent excessive synaptic loss

### Immune Dysregulation

Beyond complement, schizophrenia involves broad immune abnormalities:

- **Elevated pro-inflammatory cytokines**: IL-6, IL-1beta, TNF-alpha in blood and CSF
- **Microglial activation**: PET studies using TSPO ligands show elevated microglial activation in schizophrenia, particularly in early stages
- **Anti-NMDA receptor antibodies**: A subset of first-episode psychosis patients have autoantibodies against NMDA receptors (anti-NMDA receptor encephalitis must be excluded)
- **T-cell abnormalities**: Shift toward pro-inflammatory Th17 phenotype
- **Maternal immune activation**: Elevated maternal IL-6, IL-8, TNF-alpha during pregnancy increase offspring schizophrenia risk

**Therapeutic implications**:
- Anti-inflammatory augmentation (celecoxib, minocycline, aspirin) shows modest benefit, particularly in early schizophrenia
- Minocycline may act through microglial suppression and neuroprotection
- Prenatal infection prevention (influenza vaccination) as a public health intervention

### Oxidative Stress and Redox Dysregulation

- Reduced **glutathione (GSH)** -- the brain's primary antioxidant -- is consistently found in schizophrenia (MRS studies)
- Parvalbumin interneurons are particularly vulnerable to oxidative stress (high metabolic demand)
- Oxidative damage to PV interneurons contributes to gamma oscillation deficits and NMDA hypofunction
- **N-acetylcysteine (NAC)**: A glutathione precursor that has shown benefit as augmentation in multiple trials (negative symptoms, general psychopathology)

### Advanced Neuroimaging Biomarkers

**PET imaging**:
- **Dopamine synthesis capacity**: [18F]DOPA PET shows elevated presynaptic dopamine synthesis in the striatum, even before symptom onset (prodromal state)
- The elevation is in the **associative striatum** (not limbic striatum as the classic model predicted)
- Amphetamine-induced dopamine release is exaggerated in schizophrenia ([11C]raclopride displacement)
- Striatal dopamine synthesis capacity predicts treatment response to antipsychotics

**MRS (Magnetic Resonance Spectroscopy)**:
- Elevated glutamate/glutamine in the medial PFC and striatum
- Reduced NAA (N-acetylaspartate, a marker of neuronal integrity) in hippocampus and PFC
- Reduced GABA in cortex
- Reduced glutathione (GSH) in PFC

**Functional connectivity**:
- Disrupted thalamocortical connectivity (thalamus as a sensory gating structure)
- Reduced frontoparietal network connectivity (cognitive control)
- Excessive default mode network connectivity (self-referential processing, hallucinations)
- Machine learning classifiers using connectivity patterns can distinguish schizophrenia from healthy controls with ~80% accuracy, though not yet clinically validated

### Prodromal States and Clinical High Risk (CHR)

**Clinical High Risk (CHR)** for psychosis criteria (SIPS/SOPS):
1. **Attenuated Positive Symptom Syndrome (APSS)**: Subthreshold positive symptoms (unusual thought content, suspiciousness, perceptual abnormalities) at sufficient frequency and intensity
2. **Brief Intermittent Psychotic Symptoms (BIPS)**: Full psychotic symptoms lasting <1 week and spontaneously resolving
3. **Genetic Risk and Deterioration (GRD)**: First-degree relative with psychotic disorder + significant functional decline

**Conversion rates**: ~20-35% of CHR individuals develop a psychotic disorder within 2-3 years

**Biomarkers in the prodrome**:
- Elevated striatal dopamine synthesis ([18F]DOPA PET)
- Cortical thinning trajectory acceleration
- Reduced hippocampal glutamate
- Abnormal P300 and MMN event-related potentials
- Computational models combining clinical, cognitive, and neuroimaging data can predict conversion with ~80% sensitivity

**Prevention trials**:
- CBT for CHR reduces conversion rates (NNT ~9)
- Omega-3 fatty acids showed promise in initial trials (Vienna study) but failed in multi-site replication (NEURAPRO)
- Low-dose antipsychotics delay but may not prevent conversion; risk-benefit debated given metabolic side effects in a young population

### Novel Pharmacological Targets

**Muscarinic agonists (Xanomeline-trospium/KarXT)**:
- Xanomeline: M1/M4 muscarinic receptor agonist
- Trospium: Peripheral muscarinic antagonist (reduces GI side effects)
- **EMERGENT trials**: Significantly reduced PANSS total scores vs. placebo in schizophrenia
- **FDA-approved (2024)** as Cobenfy -- the first antipsychotic with a non-D2 mechanism
- May address negative and cognitive symptoms via M1-mediated cortical effects and M4-mediated striatal effects
- No D2-related side effects (no EPS, no prolactin elevation, no tardive dyskinesia)

**TAAR1 agonists**:
- **Trace amine-associated receptor 1 (TAAR1)**: Modulates monoamine neurotransmission; expressed in VTA, raphe, locus coeruleus
- TAAR1 agonism reduces mesolimbic dopamine activity without direct D2 blockade
- **Ulotaront (SEP-363856)**: Phase III trials showed mixed results; development discontinued for schizophrenia but continues for GAD
- **Ralmitaront**: Phase II/III trials ongoing

**Glycine site NMDA modulators**:
- **D-serine**: Endogenous co-agonist at the NMDA receptor glycine site; augmentation improves negative and cognitive symptoms in some trials
- **Sarcosine** (glycine transporter-1 inhibitor): Increases glycine at NMDA receptors
- **Iclepertin (BI 425809)**: GlyT1 inhibitor in Phase III for cognitive impairment in schizophrenia (CONNEX trials)
- Challenge: Achieving sufficient glycine site occupancy in the brain

**PDE10A inhibitors**:
- Phosphodiesterase 10A is enriched in medium spiny neurons of the striatum
- PDE10A inhibition modulates both D1 and D2 signaling pathways
- Phase II trials showed modest efficacy but dose-limiting side effects`,
      keyTerms: [
        {
          term: 'Complement C4A',
          definition:
            'Complement component 4A -- the strongest GWAS signal for schizophrenia maps to this gene; higher C4A expression increases complement-mediated synaptic pruning by microglia, providing a molecular mechanism for excessive cortical synapse loss during adolescence',
        },
        {
          term: 'Neurodevelopmental model',
          definition:
            'The concept that schizophrenia originates from disrupted brain development (genetic risk + prenatal insults) that remains latent until excessive synaptic pruning during adolescence unmasks the vulnerability (two-hit hypothesis)',
        },
        {
          term: 'Clinical high risk',
          definition:
            'A prodromal state characterized by attenuated positive symptoms, brief psychotic symptoms, or genetic risk with functional decline; approximately 20-35% convert to a psychotic disorder within 2-3 years',
          relatedTerms: ['CHR', 'Prodrome', 'Ultra-high risk', 'ARMS'],
        },
        {
          term: 'Xanomeline-trospium (KarXT/Cobenfy)',
          definition:
            'The first non-D2-based antipsychotic; combines an M1/M4 muscarinic agonist (xanomeline) with a peripheral muscarinic antagonist (trospium); FDA-approved 2024 for schizophrenia without EPS, prolactin elevation, or tardive dyskinesia risk',
        },
        {
          term: 'TAAR1',
          definition:
            'Trace amine-associated receptor 1 -- a GPCR expressed in monoaminergic nuclei that modulates dopamine, serotonin, and norepinephrine neurotransmission; agonism reduces mesolimbic dopamine without D2 blockade; a novel antipsychotic target',
        },
        {
          term: 'Duration of untreated psychosis biomarkers',
          definition:
            'Neuroimaging markers detectable in the prodromal period including elevated striatal dopamine synthesis (F-DOPA PET), accelerated cortical thinning, and abnormal event-related potentials (P300, MMN)',
        },
        {
          term: 'N-acetylcysteine',
          definition:
            'A glutathione precursor that addresses oxidative stress and redox dysregulation in schizophrenia; augmentation shows benefit for negative symptoms; parvalbumin interneurons are particularly vulnerable to the oxidative damage it mitigates',
          relatedTerms: ['NAC', 'Glutathione precursor'],
          pronunciation: 'N-ah-SEE-til-SIS-tee-een',
        },
      ],
      clinicalNotes:
        'Anti-NMDA receptor encephalitis must be excluded in all first-episode psychosis presentations, especially in young women (though it occurs in all demographics). Order NMDA receptor antibodies (serum and CSF). Cobenfy (xanomeline-trospium) represents a paradigm shift -- first truly novel antipsychotic mechanism in 70 years. No EPS, no prolactin elevation, no tardive dyskinesia. Side effects: nausea, GI upset, constipation. CHR identification and intervention is a growing field; CBT is the best-supported preventive intervention. NAC (2000 mg/day) is a well-tolerated, inexpensive augmentation option with modest evidence for negative symptoms and cognition.',
    },

    5: {
      level: 5,
      summary:
        'Cutting-edge research encompasses polygenic risk scores for clinical prediction, iPSC-derived neuronal models, single-cell transcriptomics of schizophrenia brain tissue, CRISPR functional genomics, digital biomarkers, psychosis continuum models, and next-generation interventions including closed-loop neuromodulation, anti-complement therapies, and microbiome manipulation.',
      explanation: `## Frontier Research and Future Directions

### Polygenic Risk and Precision Psychiatry

**Polygenic Risk Scores (PRS)**:
- Schizophrenia GWAS (PGC3, 2022): 287 loci identified, many converging on synaptic, neuronal, and immune pathways
- PRS explains ~7-8% of phenotypic variance (compared to ~80% heritability -- the "missing heritability" problem)
- PRS is associated with dimensional psychosis traits in the general population (psychosis continuum)
- Clinical utility is limited by low individual-level predictive power, but PRS-enhanced prediction models combining clinical, cognitive, and neuroimaging features improve CHR conversion prediction

**Copy number variants (CNVs)**:
- 22q11.2 deletion (DiGeorge/velocardiofacial syndrome): ~25% develop schizophrenia
- 1q21.1, 3q29, 15q13.3, 16p11.2, NRXN1 deletions: All significantly increase risk
- CNV carriers often have identifiable neurodevelopmental phenotypes preceding psychosis

**Rare variant contribution**:
- Whole exome/genome sequencing identifies rare damaging variants in synaptic genes (GRIN2A, TRIO, SETD1A)
- SCHEMA consortium: Exome sequencing of 25,000 cases identified 10 genes with genome-wide significant enrichment of rare damaging variants

### iPSC-Derived Neuronal Models

**Patient-derived induced pluripotent stem cells (iPSCs)** enable in vitro modeling:
- Fibroblasts or blood cells from schizophrenia patients reprogrammed to iPSCs, then differentiated into cortical neurons, GABAergic interneurons, or brain organoids
- Findings from iPSC models:
  - Reduced synaptic connectivity and dendritic complexity
  - Altered mitochondrial function and oxidative stress markers
  - Reduced PV interneuron differentiation
  - Elevated complement C4 expression correlating with synaptic pruning in co-culture assays
  - Abnormal electrophysiology (reduced spontaneous activity, altered calcium signaling)
- Limitations: Epigenetic reset during reprogramming, absence of in vivo circuit context, batch variability

**Brain organoids**:
- 3D self-organizing structures recapitulating cortical development
- Assembloids (fused organoids from different brain regions) model circuit-level interactions
- Schizophrenia organoids show altered interneuron migration, excessive complement expression, and disrupted excitatory-inhibitory balance

### Single-Cell Transcriptomics

**Single-nucleus RNA sequencing (snRNA-seq) of postmortem brain**:
- Reveals cell-type-specific transcriptomic changes invisible to bulk tissue analysis
- Key findings in schizophrenia:
  - Upper-layer (Layer 2/3) excitatory neurons show the most transcriptomic changes
  - PV interneurons show reduced NMDA receptor subunit expression
  - Microglia show activated/primed transcriptomic states
  - Oligodendrocyte precursor cells show altered maturation gene expression (consistent with white matter pathology)
  - Synaptic gene programs are broadly downregulated across neuronal subtypes
- **Spatial transcriptomics** (MERFISH, Slide-seq) adds anatomical resolution, revealing layer-specific and region-specific gene expression changes

### CRISPR Functional Genomics

- GWAS identifies loci but not causal genes or mechanisms; CRISPR enables functional validation
- **CRISPRi/CRISPRa** (interference/activation) screens in iPSC-derived neurons identify causal genes at GWAS loci
- C4A overexpression via CRISPRa in neuronal co-cultures increases microglial-mediated synaptic engulfment
- CRISPR base editing of specific risk variants in iPSC-derived neurons reveals molecular mechanisms
- **In vivo CRISPR**: AAV-delivered CRISPR to specific brain circuits in animal models to dissect gene-circuit-behavior relationships

### Digital Biomarkers and Computational Phenotyping

**Digital phenotyping for psychosis**:
- Smartphone-based: GPS patterns (circadian disruption, social isolation), call/text patterns (social withdrawal), accelerometer (psychomotor changes), voice analysis (prosody, speech coherence)
- Speech and language analysis using NLP: Semantic coherence (tangentiality), syntactic complexity, and poverty of speech detected from recorded speech samples
- Machine learning models can detect relapse 2-3 weeks before clinical recognition
- **CrossCheck** study (Dartmouth): Smartphone sensing predicted relapse in schizophrenia outpatients

**EEG biomarkers**:
- Mismatch negativity (MMN) amplitude as a trait marker and predictor of functional outcome
- Auditory steady-state response (ASSR) at 40 Hz reflects gamma oscillation capacity (PV interneuron function)
- P300 amplitude reduction as an endophenotype

### The Psychosis Continuum

Psychosis exists on a **spectrum** in the general population:
- ~5-8% of the general population report psychotic experiences (hallucinations, paranoid ideation) without meeting criteria for a disorder
- These are more common in youth and generally transient
- Persistence of psychotic experiences, distress, and help-seeking behavior predict clinical transition
- This supports a **dimensional rather than categorical** model of psychosis
- Implications: Psychosis liability is normally distributed; clinical schizophrenia represents the extreme end

**Network theory of psychosis**:
- Symptoms are not reflections of a single underlying disease but causally interconnected nodes in a network
- Specific causal pathways between symptoms (e.g., insomnia leads to paranoia leads to social withdrawal) vary between individuals
- Personalized network analysis could identify individual-specific intervention targets

### Next-Generation Therapeutic Approaches

**Anti-complement therapies**:
- C4 or C3 inhibitors to prevent excessive synaptic pruning during the prodromal window
- Sutimlimab (anti-C1s antibody) and pegcetacoplan (C3 inhibitor) are approved for hematologic conditions; repurposing for early psychosis is under investigation
- Timing is critical: Must intervene during the active pruning window (adolescence/early adulthood)
- Challenge: Complement is essential for infection defense -- long-term inhibition carries infection risk

**Microbiome manipulation**:
- Altered gut microbiome composition in schizophrenia (reduced Faecalibacterium, increased Lactobacillus in medication-naive patients)
- Fecal microbiota transplant (FMT) from schizophrenia patients to germ-free mice induces behavioral changes and elevated striatal dopamine
- Probiotic augmentation trials (Lactobacillus rhamnosus, Bifidobacterium) show modest improvements in PANSS scores in open-label studies

**Closed-loop neuromodulation for psychosis**:
- Auditory cortex-targeted TMS for auditory hallucinations (targeting left temporoparietal junction)
- Closed-loop systems triggered by neural signatures of hallucinatory states
- tDCS (transcranial direct current stimulation): Cathodal stimulation of left temporoparietal cortex + anodal stimulation of left DLPFC for hallucinations -- modest evidence

**Gene therapy and antisense oligonucleotides (ASOs)**:
- ASOs targeting specific mRNA transcripts (e.g., C4A mRNA) to reduce complement-mediated pruning
- AAV-mediated gene delivery of NMDA receptor subunits to cortical interneurons (preclinical)
- Far from clinical application but represent the ultimate precision medicine approach`,
      keyTerms: [
        {
          term: 'Polygenic risk score',
          definition:
            'A composite genetic score aggregating the effects of hundreds of common risk variants identified by GWAS; explains ~7-8% of schizophrenia variance; useful for research stratification but limited individual-level clinical prediction',
          relatedTerms: ['PRS', 'Genetic risk score'],
        },
        {
          term: 'iPSC-derived neurons',
          definition:
            'Patient-derived induced pluripotent stem cells differentiated into cortical neurons or interneurons for in vitro disease modeling; reveal reduced synaptic connectivity, elevated C4 expression, and altered electrophysiology in schizophrenia',
          relatedTerms: ['iPSC', 'Brain organoids', 'Assembloids'],
        },
        {
          term: 'Single-cell transcriptomics',
          definition:
            'Gene expression profiling at individual cell resolution (snRNA-seq) that reveals cell-type-specific pathology in schizophrenia: Layer 2/3 excitatory neurons, PV interneurons, microglia, and oligodendrocyte precursors are differentially affected',
          relatedTerms: ['snRNA-seq', 'Spatial transcriptomics', 'MERFISH'],
        },
        {
          term: 'Psychosis continuum',
          definition:
            'The concept that psychotic experiences exist on a dimensional spectrum in the general population (5-8% prevalence), with clinical schizophrenia representing the severe end; supports dimensional rather than categorical diagnostic models',
        },
        {
          term: 'Anti-complement therapy',
          definition:
            'Therapeutic inhibition of complement proteins (C4, C3, C1s) to prevent excessive microglial-mediated synaptic pruning during the prodromal period of psychosis; a translational application of the C4A genetic finding',
        },
        {
          term: 'Digital phenotyping for psychosis',
          definition:
            'Smartphone-based passive monitoring (GPS, call patterns, voice analysis, accelerometry) combined with NLP-based speech coherence analysis to detect psychotic relapse 2-3 weeks before clinical recognition',
        },
      ],
      clinicalNotes:
        'Pharmacogenomic testing (CYP2D6 for risperidone/aripiprazole metabolism; CYP1A2 for clozapine/olanzapine metabolism) should be considered for patients with unexpected side effects or non-response. Cobenfy (xanomeline-trospium) may be particularly suitable for patients who have experienced EPS, tardive dyskinesia, or significant metabolic effects on D2-blocking agents. CHR individuals should be offered CBT and careful monitoring; antipsychotic use in the prodrome remains controversial. Digital phenotyping tools are becoming commercially available (Mindstrong, BiAffect) but validation in diverse populations is needed. The psychosis continuum model argues against pathologizing all psychotic experiences -- context, distress, and functional impact determine clinical significance.',
    },
  },

  media: [],
  citations: [
    {
      id: 'stahl-psychosis',
      type: 'textbook',
      title: 'Stahl\'s Essential Psychopharmacology',
      authors: ['Stephen M. Stahl'],
      source: 'Cambridge University Press',
      chapter: 'Chapters 4-5',
      license: 'Proprietary',
    },
    {
      id: 'dsm5-tr-psychosis',
      type: 'textbook',
      title: 'Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR)',
      authors: ['American Psychiatric Association'],
      source: 'American Psychiatric Publishing',
      license: 'Proprietary',
    },
    {
      id: 'sekar-2016',
      type: 'article',
      title: 'Schizophrenia risk from complex variation of complement component 4',
      authors: ['Aswin Sekar', 'Allison R. Bialas', 'Heather de Rivera', 'et al.'],
      source: 'Nature',
      url: 'https://doi.org/10.1038/nature16549',
    },
    {
      id: 'kapur-2003',
      type: 'article',
      title: 'Psychosis as a state of aberrant salience',
      authors: ['Shitij Kapur'],
      source: 'American Journal of Psychiatry',
      url: 'https://doi.org/10.1176/appi.ajp.160.1.13',
    },
    {
      id: 'howes-2012',
      type: 'article',
      title: 'The dopamine hypothesis of schizophrenia: version III -- the final common pathway',
      authors: ['Oliver D. Howes', 'Shitij Kapur'],
      source: 'Schizophrenia Bulletin',
      url: 'https://doi.org/10.1093/schbul/sbq042',
    },
  ],
  crossReferences: [
    {
      targetId: 'psychiatry-mood-disorders',
      targetType: 'condition',
      relationship: 'related',
      label: 'Mood Disorders (schizoaffective, psychotic depression)',
    },
    {
      targetId: 'psychiatry-anxiety-disorders',
      targetType: 'condition',
      relationship: 'related',
      label: 'Anxiety Disorders (anxiety as prodromal symptom)',
    },
    {
      targetId: 'physiology-neurotransmission',
      targetType: 'process',
      relationship: 'related',
      label: 'Neurotransmission (dopamine, glutamate, GABA systems)',
    },
  ],
  tags: {
    systems: ['nervous', 'immune'],
    topics: ['psychiatry', 'psychopharmacology', 'neuroscience', 'genetics'],
    keywords: [
      'schizophrenia',
      'schizoaffective',
      'psychosis',
      'dopamine hypothesis',
      'NMDA hypofunction',
      'antipsychotic',
      'clozapine',
      'D2 receptor',
      'hallucination',
      'delusion',
      'negative symptoms',
      'first episode psychosis',
      'prodrome',
      'clinical high risk',
      'complement C4A',
      'xanomeline',
      'TAAR1',
      'long-acting injectable',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['psychiatry', 'medicine', 'neurology'],
    },
  },

  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
  contributors: ['SOMA Medical Education Team'],
};
