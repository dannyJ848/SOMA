import { EducationalContent } from '../../types';

export const schizophrenia: EducationalContent = {
  id: 'psychiatry-schizophrenia',
  type: 'condition',
  name: 'Schizophrenia',
  nameEs: 'Esquizofrenia',
  alternateNames: ['Schizophrenia Spectrum Disorder', 'Chronic Psychosis'],

  levels: {
    1: {
      level: 1,
      summary: 'Schizophrenia is a brain disorder that affects how a person thinks and perceives reality, causing hallucinations (hearing or seeing things that are not there), delusions (false beliefs), and difficulty with thinking and motivation.',
      explanation:
        '## When the Brain Confuses What Is Real\n\n' +
        'Imagine wearing invisible headphones that play voices only you can hear, or receiving secret messages that nobody else can see. ' +
        'That is what **schizophrenia** can feel like.\n\n' +
        '**Three types of symptoms:**\n' +
        '- **Positive symptoms** (things added): Hearing voices, false beliefs, confused thinking\n' +
        '- **Negative symptoms** (things lost): Flat emotions, low motivation, social withdrawal\n' +
        '- **Cognitive symptoms**: Trouble with memory, attention, and decision-making\n\n' +
        'Schizophrenia is NOT "split personality" and does NOT make people violent. ' +
        'It is a medical condition caused by brain chemistry changes. With **antipsychotic medication** and support, ' +
        'many people live productive, fulfilling lives.',
      keyTerms: [
        { term: 'Schizophrenia', definition: 'A brain disorder affecting thought, perception, and motivation, causing hallucinations, delusions, and cognitive difficulties', pronunciation: 'SKIT-soh-FREN-ee-ah' },
        { term: 'Hallucination', definition: 'Perceiving something that is not there, most commonly hearing voices', pronunciation: 'hah-LOO-sin-AY-shun' },
        { term: 'Delusion', definition: 'A strong false belief that persists despite evidence to the contrary', pronunciation: 'deh-LOO-zhun' },
      ],
      analogies: ['Hallucinations are like a radio station playing in your head that only you can tune into.'],
      patientCounselingPoints: [
        'Schizophrenia is a medical condition, not a personal failing.',
        'Taking medication consistently is the single most important thing for staying well.',
        'Recovery is possible -- many people with schizophrenia lead meaningful lives with proper treatment.',
      ],
    },

    2: {
      level: 2,
      summary: 'Schizophrenia requires 2+ symptoms (delusions, hallucinations, disorganized speech, disorganized/catatonic behavior, negative symptoms) for 6+ months. The dopamine hypothesis explains positive symptoms via mesolimbic hyperactivity. First- and second-generation antipsychotics target D2 receptors.',
      explanation:
        '## Diagnosis & Antipsychotic Pharmacology\n\n' +
        '**DSM-5 Criteria:** 2+ symptoms for significant time in a 1-month period (at least one must be delusions, hallucinations, or disorganized speech). ' +
        'Continuous signs for >= 6 months. Functional decline below premorbid baseline.\n\n' +
        '**Epidemiology:** ~1% lifetime prevalence; onset males late teens/early 20s, females late 20s/early 30s; heritability ~80%.\n\n' +
        '**Dopamine Hypothesis -- Four Pathways:**\n' +
        '1. Mesolimbic (VTA -> NAc): Hyperactive -> positive symptoms. Target of antipsychotic D2 blockade.\n' +
        '2. Mesocortical (VTA -> PFC): Hypoactive -> negative/cognitive symptoms. D2 blockade here worsens these.\n' +
        '3. Nigrostriatal (SN -> striatum): D2 blockade -> EPS (dystonia, akathisia, parkinsonism, tardive dyskinesia).\n' +
        '4. Tuberoinfundibular (hypothalamus -> pituitary): D2 blockade -> hyperprolactinemia.\n\n' +
        '**FGAs (typical):** Haloperidol (high potency, more EPS), chlorpromazine (low potency, more sedation).\n' +
        '**SGAs (atypical):** D2 + 5-HT2A blockade. Risperidone, olanzapine (metabolic SE), quetiapine, ' +
        'aripiprazole (D2 partial agonist -- unique), lurasidone, ziprasidone.\n' +
        '**Clozapine:** Gold standard for treatment-resistant schizophrenia (see Level 3).',
      keyTerms: [
        { term: 'Dopamine hypothesis', definition: 'Theory that schizophrenia involves mesolimbic DA hyperactivity (positive symptoms) and mesocortical DA hypoactivity (negative/cognitive symptoms)' },
        { term: 'Extrapyramidal symptoms', definition: 'Movement disorders from nigrostriatal D2 blockade: acute dystonia, akathisia, parkinsonism, tardive dyskinesia', relatedTerms: ['EPS'] },
        { term: 'Aripiprazole', definition: 'SGA with unique D2 partial agonist mechanism; lower metabolic burden; available as long-acting injectable', pronunciation: 'ar-ih-PIP-rah-zole' },
        { term: 'Neuroleptic malignant syndrome', definition: 'Life-threatening reaction: fever, rigidity, autonomic instability, elevated CK. Treat with dantrolene + bromocriptine', relatedTerms: ['NMS'] },
      ],
      clinicalNotes: 'First-episode psychosis: start low-dose SGA (risperidone 1-3mg, aripiprazole 10-15mg). Always rule out substance-induced psychosis and anti-NMDA receptor encephalitis. Monitor metabolic parameters (weight, glucose, lipids) at baseline and regularly. NMS is a medical emergency requiring immediate antipsychotic discontinuation.',
    },

    3: {
      level: 3,
      summary: 'Beyond dopamine, the NMDA receptor hypofunction hypothesis explains all three symptom domains. Clozapine is uniquely effective for treatment-resistant schizophrenia via multi-receptor profile with fast-off D2 binding. Long-acting injectables address nonadherence.',
      explanation:
        '## NMDA Hypothesis, Clozapine & LAIs\n\n' +
        '**NMDA Receptor Hypofunction:**\n' +
        'PCP and ketamine (NMDA antagonists) produce positive, negative, AND cognitive symptoms -- unlike DA agonists (positive only). ' +
        'Mechanism: NMDA hypofunction on cortical PV interneurons -> reduced GABAergic inhibition -> disinhibited glutamate -> ' +
        'downstream mesolimbic DA hyperactivity + mesocortical DA hypoactivity. Unifies dopamine and glutamate models.\n\n' +
        '**Aberrant Salience (Kapur):** Dysregulated DA assigns motivational significance to irrelevant stimuli -> ' +
        'brain constructs delusional explanations. Antipsychotics reduce salience assignment.\n\n' +
        '**Clozapine (Treatment-Resistant Schizophrenia):**\n' +
        'TRS: failure of 2+ adequate antipsychotic trials. Clozapine: only drug with proven superiority in TRS (30-60% respond) ' +
        'and anti-suicidal efficacy. Multi-receptor profile: D1, D2 (fast-off), D4, 5-HT2A/2C, 5-HT1A, M1/M4, alpha-1/2, H1. ' +
        'Requires ANC monitoring (agranulocytosis ~1%): weekly x6 months, biweekly x6 months, monthly thereafter. ' +
        'Risks: myocarditis, seizures, metabolic syndrome, severe constipation/ileus.\n\n' +
        '**Long-Acting Injectables:** Paliperidone palmitate (monthly/3-month/6-month), aripiprazole LAI (monthly), ' +
        'olanzapine pamoate (3-hour monitoring for post-injection syndrome). ' +
        'Mirror-image studies show reduced hospitalization. Increasingly recommended at first episode.',
      keyTerms: [
        { term: 'NMDA hypofunction', definition: 'Theory that reduced NMDA receptor function on cortical PV interneurons drives cortical disinhibition and downstream dopamine dysregulation across all symptom domains' },
        { term: 'Clozapine', definition: 'Only antipsychotic with proven superiority in TRS and anti-suicidal effects; fast-off D2 binding; requires ANC monitoring for agranulocytosis risk (~1%)', pronunciation: 'KLOH-zah-peen' },
        { term: 'Aberrant salience', definition: 'Kapur\'s model: dysregulated dopamine assigns significance to irrelevant stimuli, with delusional frameworks constructed to explain these experiences' },
      ],
      clinicalNotes: 'Clozapine is vastly underutilized globally. Target dose 300-900 mg/day; therapeutic level 350-600 ng/mL. Constipation can be fatal (ileus/perforation) -- prescribe prophylactic laxatives. Benign ethnic neutropenia (common in African ancestry) allows lower ANC thresholds. LAIs should be discussed with all first-episode patients, not reserved for non-adherent patients.',
    },

    4: {
      level: 4,
      summary: 'Advanced schizophrenia neurobiology includes complement C4A-mediated synaptic pruning, neurodevelopmental two-hit model, prodromal/clinical high-risk states, and novel non-D2 agents including muscarinic agonists (xanomeline-trospium/Cobenfy) and TAAR1 agonists.',
      explanation:
        '## Neurodevelopment, Prodrome & Novel Targets\n\n' +
        '**Complement C4A (Sekar et al., 2016):**\n' +
        'Strongest GWAS signal maps to C4A. Higher C4A -> increased complement-mediated synaptic elimination by microglia during adolescent pruning. ' +
        'Molecular mechanism for excessive cortical thinning and adolescent onset.\n\n' +
        '**Two-Hit Model:**\n' +
        'Hit 1 (prenatal): Genetic risk + maternal immune activation/obstetric complications disrupts neurodevelopment. ' +
        'Hit 2 (adolescence): Excessive synaptic pruning + cannabis + psychosocial stress unmasks latent vulnerability.\n\n' +
        '**Clinical High Risk (CHR):**\n' +
        'Attenuated positive symptoms, brief psychotic episodes, or genetic risk + functional decline. ' +
        '20-35% convert to psychotic disorder within 2-3 years. CBT is best-supported preventive intervention. ' +
        'Elevated striatal dopamine synthesis ([18F]DOPA PET) detectable before symptom onset.\n\n' +
        '**Xanomeline-Trospium (Cobenfy, FDA 2024):**\n' +
        'First non-D2 antipsychotic mechanism in 70 years. M1/M4 muscarinic agonist (xanomeline) + peripheral antagonist (trospium). ' +
        'No EPS, no prolactin elevation, no tardive dyskinesia. EMERGENT trials: significant PANSS reduction.\n\n' +
        '**TAAR1 Agonists:** Modulate monoamine neurotransmission without D2 blockade. Ulotaront Phase III discontinued for schizophrenia.\n\n' +
        '**Glycine Site Modulators:** D-serine, sarcosine (GlyT1 inhibitor), iclepertin -- targeting NMDA hypofunction for cognitive symptoms.',
      keyTerms: [
        { term: 'Complement C4A', definition: 'Complement gene whose overexpression drives excessive microglial synaptic pruning in adolescence; strongest schizophrenia GWAS signal and molecular basis of neurodevelopmental model' },
        { term: 'Cobenfy (xanomeline-trospium)', definition: 'First non-D2 antipsychotic (FDA 2024); M1/M4 muscarinic agonist without EPS, prolactin, or tardive dyskinesia risk' },
        { term: 'Clinical high risk', definition: 'Prodromal state with attenuated positive symptoms; 20-35% convert to psychosis within 2-3 years; CBT is the best-supported preventive intervention', relatedTerms: ['CHR', 'Prodrome'] },
      ],
      clinicalNotes: 'Anti-NMDA receptor encephalitis must be excluded in all first-episode psychosis (NMDA antibodies in serum and CSF). Cobenfy represents a paradigm shift; side effects are primarily GI (nausea, constipation). CHR identification is expanding; CBT has NNT ~9 for preventing conversion. Pharmacogenomic testing (CYP1A2 for clozapine/olanzapine, CYP2D6 for risperidone/aripiprazole) should be considered after treatment failures.',
    },

    5: {
      level: 5,
      summary: 'Cutting-edge research includes polygenic risk scores, iPSC-derived neuronal models showing calcium signaling abnormalities, single-cell transcriptomics revealing cell-type-specific pathology, anti-complement therapies to prevent synaptic pruning, and digital phenotyping for relapse prediction.',
      explanation:
        '## Frontier Research\n\n' +
        '**Genomics:**\n' +
        'PGC3 GWAS: 287 loci; convergence on synaptic, neuronal, and immune pathways. PRS explains ~7-8% of variance. ' +
        'SCHEMA consortium: rare damaging variants in 10 genes (GRIN2A, TRIO, SETD1A). 22q11.2 deletion: ~25% develop schizophrenia.\n\n' +
        '**iPSC Models:**\n' +
        'Patient-derived cortical neurons show reduced synaptic connectivity, elevated C4 expression, ' +
        'altered mitochondrial function, and abnormal electrophysiology. Brain organoids show disrupted interneuron migration and E/I imbalance.\n\n' +
        '**Single-Cell Transcriptomics:**\n' +
        'snRNA-seq of postmortem brain: Layer 2/3 excitatory neurons most affected; PV interneurons show reduced NMDA subunit expression; ' +
        'microglia in activated state; oligodendrocyte precursors show maturation deficits. Spatial transcriptomics adds layer-specific resolution.\n\n' +
        '**Anti-Complement Therapies:**\n' +
        'C4/C3 inhibitors to prevent excessive pruning during prodromal window. Sutimlimab, pegcetacoplan under investigation. ' +
        'Timing critical (must intervene during active pruning). Infection risk with long-term complement inhibition.\n\n' +
        '**Digital Phenotyping:**\n' +
        'NLP-based speech coherence analysis detects thought disorder. Smartphone GPS/call patterns predict relapse 2-3 weeks early. ' +
        'Machine learning on EEG (MMN, ASSR at 40 Hz) provides functional PV interneuron biomarkers.\n\n' +
        '**Psychosis Continuum:** 5-8% general population reports psychotic experiences; clinical schizophrenia is the extreme of a dimensional spectrum.',
      keyTerms: [
        { term: 'Polygenic risk score', definition: 'Composite genetic score from hundreds of GWAS variants; explains ~7-8% of schizophrenia variance; useful for research stratification', relatedTerms: ['PRS'] },
        { term: 'iPSC disease modeling', definition: 'Patient-derived neurons revealing reduced synaptic connectivity, elevated C4, and abnormal electrophysiology in schizophrenia' },
        { term: 'Anti-complement therapy', definition: 'Inhibition of C4/C3 complement to prevent excessive microglial synaptic pruning during the prodromal period; translational application of the C4A genetic finding' },
      ],
      clinicalNotes: 'PRS has low individual-level predictive power and is not ready for clinical use. iPSC-based drug screening is being used to identify novel compounds. Digital phenotyping (speech analysis, smartphone patterns) is approaching clinical utility for relapse monitoring. The psychosis continuum model argues for dimensional rather than categorical approaches to diagnosis and treatment.',
    },
  },

  media: [],
  citations: [
    { id: 'dsm5-tr-sz', type: 'textbook', title: 'DSM-5-TR: Schizophrenia Spectrum Disorders', authors: ['American Psychiatric Association'], source: 'American Psychiatric Publishing', license: 'Proprietary' },
    { id: 'sekar-2016-c4', type: 'article', title: 'Schizophrenia risk from complex variation of complement component 4', authors: ['Aswin Sekar et al.'], source: 'Nature', url: 'https://doi.org/10.1038/nature16549' },
  ],
  crossReferences: [
    { targetId: 'psychiatry-schizoaffective', targetType: 'condition', relationship: 'related', label: 'Schizoaffective Disorder (diagnostic overlap)' },
    { targetId: 'psychiatry-antipsychotics', targetType: 'topic', relationship: 'related', label: 'Antipsychotics (pharmacotherapy)' },
    { targetId: 'psychiatry-bipolar-disorder', targetType: 'condition', relationship: 'related', label: 'Bipolar Disorder (psychotic mania differential)' },
  ],
  tags: {
    systems: ['nervous', 'immune'],
    topics: ['psychiatry', 'psychopharmacology', 'neuroscience', 'genetics'],
    keywords: ['schizophrenia', 'psychosis', 'dopamine', 'NMDA', 'clozapine', 'antipsychotic', 'D2 receptor', 'C4A', 'prodrome', 'xanomeline'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['psychiatry', 'medicine', 'neurology'] },
  },
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
  contributors: ['SOMA Medical Education Team'],
};
