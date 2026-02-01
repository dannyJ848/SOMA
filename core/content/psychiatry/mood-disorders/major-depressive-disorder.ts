import { EducationalContent } from '../../types';

export const majorDepressiveDisorder: EducationalContent = {
  id: 'psychiatry-mdd',
  type: 'condition',
  name: 'Major Depressive Disorder',
  nameEs: 'Trastorno Depresivo Mayor',
  alternateNames: ['MDD', 'Clinical Depression', 'Unipolar Depression'],

  levels: {
    1: {
      level: 1,
      summary: 'Major depressive disorder is when a person feels deeply sad, empty, or hopeless nearly every day for at least two weeks, and it affects their ability to work, sleep, eat, and enjoy life.',
      explanation:
        '## Understanding Major Depression\n\n' +
        'Everyone feels sad sometimes, but **major depressive disorder (MDD)** is different. It is a medical condition where the sadness does not go away ' +
        'and makes it very hard to do normal everyday things.\n\n' +
        '**Common signs include:**\n' +
        '- Feeling sad, empty, or hopeless most of the day, nearly every day\n' +
        '- Losing interest in hobbies, friends, or activities you used to enjoy\n' +
        '- Sleeping too much or too little\n' +
        '- Feeling exhausted even without doing much\n' +
        '- Trouble concentrating at school or work\n' +
        '- Changes in appetite or weight\n' +
        '- Feeling worthless or guilty about small things\n' +
        '- In serious cases, thoughts of not wanting to be alive\n\n' +
        'MDD is caused by changes in brain chemistry, not by personal weakness. ' +
        'It is one of the most common and treatable mental health conditions.',
      keyTerms: [
        { term: 'Major depressive disorder', definition: 'A medical condition causing persistent sadness and loss of interest lasting at least two weeks', pronunciation: 'MAY-jor deh-PRESS-iv dis-OR-der' },
        { term: 'Anhedonia', definition: 'Loss of interest or pleasure in activities that used to be enjoyable', pronunciation: 'an-hee-DOH-nee-ah' },
      ],
      analogies: [
        'Depression is like wearing dark-tinted glasses you cannot take off -- everything looks gloomy even on a sunny day.',
      ],
      patientCounselingPoints: [
        'Depression is a real medical condition, not a character flaw.',
        'Treatment with therapy and/or medication helps most people feel significantly better.',
        'If you or someone you know is thinking about suicide, call 988 (Suicide & Crisis Lifeline) immediately.',
      ],
    },

    2: {
      level: 2,
      summary: 'MDD is diagnosed using DSM-5 criteria (SIG E CAPS mnemonic) requiring 5+ symptoms for 2+ weeks. First-line treatment is SSRIs and/or CBT, with response rates of approximately 50-60% for initial therapy.',
      explanation:
        '## DSM-5 Criteria & First-Line Treatment\n\n' +
        '**Diagnostic Criteria (SIG E CAPS mnemonic):**\n' +
        '5+ symptoms for 2+ weeks, with at least one being depressed mood or anhedonia:\n' +
        '- **S**leep changes (insomnia or hypersomnia)\n' +
        '- **I**nterest loss (anhedonia)\n' +
        '- **G**uilt or worthlessness\n' +
        '- **E**nergy loss / fatigue\n' +
        '- **C**oncentration difficulties\n' +
        '- **A**ppetite / weight changes\n' +
        '- **P**sychomotor agitation or retardation\n' +
        '- **S**uicidal ideation\n\n' +
        '**Severity specifiers:** Mild (5 symptoms, minor impairment), Moderate, Severe (most symptoms, marked impairment), ' +
        'With psychotic features, With anxious distress, With peripartum onset, With seasonal pattern.\n\n' +
        '**Screening:** PHQ-9 is the validated screening tool (score >= 10 suggests MDD; >= 20 severe).\n\n' +
        '**First-line pharmacotherapy:** SSRIs (sertraline, escitalopram, fluoxetine). Full response takes 4-8 weeks. ' +
        'SNRIs (venlafaxine, duloxetine) and bupropion are alternatives.\n\n' +
        '**First-line psychotherapy:** CBT (12-16 sessions) and Interpersonal Therapy (IPT) have strongest evidence.',
      keyTerms: [
        { term: 'SIG E CAPS', definition: 'Mnemonic for MDD diagnostic criteria: Sleep, Interest, Guilt, Energy, Concentration, Appetite, Psychomotor, Suicidality' },
        { term: 'PHQ-9', definition: 'Patient Health Questionnaire-9, a validated 9-item screening and severity tool for depression; score >= 10 suggests MDD' },
        { term: 'SSRI', definition: 'Selective serotonin reuptake inhibitor -- first-line antidepressant class that increases serotonin in the synapse' },
      ],
      clinicalNotes: 'Always screen for bipolar disorder (history of mania/hypomania) before starting antidepressants. Assess suicidal ideation at every visit using the Columbia Suicide Severity Rating Scale (C-SSRS). FDA black box warning: increased suicidality risk in patients under 25 during initial weeks of SSRI treatment.',
    },

    3: {
      level: 3,
      summary: 'MDD pathophysiology involves monoamine deficiency, HPA axis dysregulation with chronic cortisol elevation, reduced BDNF and impaired hippocampal neuroplasticity, and neuroinflammation. The therapeutic lag of antidepressants reflects the time needed for neurotrophic restoration.',
      explanation:
        '## Neurobiological Mechanisms\n\n' +
        '**Monoamine Hypothesis:**\n' +
        'Depression results from deficiency of serotonin (5-HT), norepinephrine (NE), and/or dopamine (DA). ' +
        'Evidence: reserpine (depletes monoamines) causes depression; antidepressants increase monoamines. ' +
        'Limitation: monoamine changes occur immediately but clinical improvement takes weeks.\n\n' +
        '**HPA Axis Dysregulation:**\n' +
        'Chronic stress activates CRH -> ACTH -> cortisol cascade. In MDD, negative feedback is impaired, leading to ' +
        'sustained hypercortisolemia. ~50% of severe MDD patients show dexamethasone non-suppression. ' +
        'Chronic cortisol damages hippocampal neurons and impairs neurogenesis.\n\n' +
        '**Neurotrophic Hypothesis:**\n' +
        'Stress and cortisol reduce BDNF in hippocampus and PFC, causing neuronal atrophy and reduced dendritic branching. ' +
        'Antidepressants increase BDNF over weeks, restoring synaptic architecture. This explains the therapeutic lag. ' +
        'The BDNF Val66Met polymorphism modulates vulnerability.\n\n' +
        '**Neuroinflammation:**\n' +
        'Elevated IL-6, TNF-alpha, and CRP found in ~30% of MDD patients. ' +
        'Pro-inflammatory cytokines activate IDO, shunting tryptophan from serotonin synthesis to the kynurenine pathway, ' +
        'producing neurotoxic quinolinic acid.',
      keyTerms: [
        { term: 'HPA axis', definition: 'Hypothalamic-pituitary-adrenal stress response system; chronically overactive in depression with impaired cortisol negative feedback', pronunciation: 'H-P-A AX-is' },
        { term: 'BDNF', definition: 'Brain-derived neurotrophic factor -- reduced in depression, increased by antidepressants; mediates neuroplasticity and the therapeutic lag', pronunciation: 'B-D-N-F' },
        { term: 'Kynurenine pathway', definition: 'Tryptophan metabolic pathway activated by inflammation that diverts tryptophan from serotonin synthesis toward neurotoxic metabolites', pronunciation: 'KIN-yoo-reh-neen' },
      ],
      clinicalNotes: 'Hippocampal volume reduction correlates with number of depressive episodes and duration of untreated illness, supporting early aggressive treatment. Inflammatory biomarkers (CRP) may guide treatment selection: elevated CRP predicts better response to nortriptyline vs. escitalopram.',
    },

    4: {
      level: 4,
      summary: 'Advanced MDD management includes treatment-resistant depression algorithms (STAR*D framework), ketamine/esketamine rapid-acting mechanisms via NMDA antagonism and mTOR-mediated synaptogenesis, pharmacogenomics (CYP2D6/CYP2C19), and neuromodulation (TMS, ECT).',
      explanation:
        '## Treatment-Resistant Depression & Emerging Therapies\n\n' +
        '**Treatment-Resistant Depression (TRD):** Failure of 2+ adequate antidepressant trials (6-8 weeks, adequate dose, confirmed adherence). Affects ~30% of MDD patients.\n\n' +
        '**STAR*D Algorithm:**\n' +
        'Step 1: Citalopram (33% remission). Step 2: Switch (sertraline, bupropion, venlafaxine) or augment (bupropion, buspirone). ' +
        'Step 3: Switch (mirtazapine, nortriptyline) or augment (lithium, T3). Step 4: Tranylcypromine (MAOI) or mirtazapine + venlafaxine. ' +
        'Cumulative remission ~67% after all steps.\n\n' +
        '**Ketamine / Esketamine:**\n' +
        'Ketamine (NMDA antagonist) produces antidepressant effects within hours. Mechanism: blocks NMDA receptors on GABAergic interneurons -> ' +
        'disinhibits glutamatergic pyramidal neurons -> glutamate surge -> AMPA activation -> BDNF release -> TrkB/mTOR signaling -> ' +
        'rapid synaptogenesis in PFC. Esketamine (Spravato) is FDA-approved intranasal formulation for TRD with REMS monitoring.\n\n' +
        '**Pharmacogenomics:** CYP2D6 metabolizes fluoxetine, paroxetine, venlafaxine; CYP2C19 metabolizes escitalopram, sertraline. ' +
        'Poor/ultra-rapid metabolizer status guides dose adjustment.\n\n' +
        '**Neuromodulation:**\n' +
        '- TMS: FDA-cleared for TRD; targets left DLPFC. SAINT protocol (accelerated iTBS): 10 sessions/day x 5 days, 79% remission.\n' +
        '- ECT: Most effective treatment for severe TRD (50-70% response). Indicated for acute suicidality, psychotic depression, catatonia.',
      keyTerms: [
        { term: 'Treatment-resistant depression', definition: 'MDD failing to respond to 2+ adequate antidepressant trials; affects ~30% of patients', relatedTerms: ['TRD'] },
        { term: 'Esketamine', definition: 'S-enantiomer of ketamine; FDA-approved nasal spray for TRD acting via NMDA antagonism and mTOR-mediated synaptogenesis', pronunciation: 'es-KET-ah-meen' },
        { term: 'SAINT protocol', definition: 'Stanford Accelerated Intelligent Neuromodulation Therapy -- compressed TMS protocol delivering 10 iTBS sessions/day for 5 days with 79% remission rate' },
      ],
      clinicalNotes: 'Ketamine IV (0.5 mg/kg over 40 min) is the research standard; serial infusions 2-3x/week for 2-4 weeks. Esketamine REMS requires certified clinics and 2-hour post-dose monitoring. ECT should not be delayed in life-threatening depression. Pharmacogenomic testing is most useful after 2+ medication failures.',
    },

    5: {
      level: 5,
      summary: 'Frontier MDD research includes psilocybin-assisted therapy (5-HT2A agonism, DMN disruption), neuroinflammatory subtypes guiding anti-inflammatory augmentation, gut-brain axis manipulation, digital phenotyping, and precision psychiatry integrating neuroimaging biotypes with pharmacogenomics.',
      explanation:
        '## Frontier Research\n\n' +
        '**Psilocybin-Assisted Therapy:**\n' +
        'Psilocybin (prodrug -> psilocin, 5-HT2A agonist) disrupts the hyperactive default mode network associated with rumination. ' +
        'COMPASS Phase IIb: single 25mg dose significantly reduced depression at 3 weeks. Imperial College trials showed non-inferiority to escitalopram. ' +
        'Effects may last 3-12 months. FDA Breakthrough Therapy designation for TRD and MDD.\n\n' +
        '**Neuroimaging Biotypes:**\n' +
        'Drysdale et al. (2017): 4 depression biotypes based on functional connectivity patterns, each predicting differential TMS response. ' +
        'Biotype-guided treatment selection represents a paradigm shift toward precision psychiatry.\n\n' +
        '**Inflammatory Subtypes:**\n' +
        'CRP-stratified treatment: high-CRP (>3 mg/L) patients respond to anti-inflammatory augmentation (infliximab, celecoxib, minocycline). ' +
        'JAK inhibitors and microglial modulators are in early trials.\n\n' +
        '**GABAergic Neurosteroids:**\n' +
        'Brexanolone (IV, FDA-approved for postpartum depression) and zuranolone (oral, for MDD) modulate GABA-A receptors. ' +
        'Zuranolone: 14-day course with rapid onset and sustained effects.\n\n' +
        '**Digital Phenotyping:** Smartphone sensor data (GPS, sleep, social activity) detects mood changes 1-2 weeks before clinical recognition. ' +
        'Machine learning models enable early warning and just-in-time interventions.',
      keyTerms: [
        { term: 'Psilocybin therapy', definition: '5-HT2A agonist that disrupts the default mode network; FDA Breakthrough Therapy designation for MDD and TRD with effects lasting months after 1-2 sessions', pronunciation: 'SY-loh-SY-bin' },
        { term: 'Depression biotypes', definition: 'Neuroimaging-defined subtypes based on functional connectivity patterns that predict differential treatment response to TMS and pharmacotherapy' },
        { term: 'Zuranolone', definition: 'Oral neuroactive steroid GABA-A receptor modulator for MDD; 14-day treatment course with rapid onset', pronunciation: 'zoor-AN-oh-lone' },
      ],
      clinicalNotes: 'Psilocybin therapy is not yet FDA-approved; requires structured preparation, supervised dosing (6-8 hours), and integration sessions. Contraindicated in psychotic disorders. Zuranolone represents a new treatment paradigm -- short-course rather than indefinite maintenance. Digital phenotyping tools raise privacy concerns requiring robust data governance frameworks.',
    },
  },

  media: [],
  citations: [
    { id: 'dsm5-tr-mdd', type: 'textbook', title: 'DSM-5-TR: Major Depressive Disorder', authors: ['American Psychiatric Association'], source: 'American Psychiatric Publishing', license: 'Proprietary' },
    { id: 'rush-2006-stard', type: 'article', title: 'Acute and longer-term outcomes in depressed outpatients requiring one or several treatment steps: a STAR*D report', authors: ['A. John Rush et al.'], source: 'American Journal of Psychiatry' },
  ],
  crossReferences: [
    { targetId: 'psychiatry-bipolar-disorder', targetType: 'condition', relationship: 'related', label: 'Bipolar Disorder (must rule out before SSRI initiation)' },
    { targetId: 'psychiatry-antidepressants', targetType: 'topic', relationship: 'related', label: 'Antidepressants (pharmacotherapy)' },
    { targetId: 'psychiatry-anxiety-disorders', targetType: 'condition', relationship: 'related', label: 'Anxiety Disorders (common comorbidity)' },
  ],
  tags: {
    systems: ['nervous', 'endocrine'],
    topics: ['psychiatry', 'psychopharmacology', 'neuroscience'],
    keywords: ['depression', 'MDD', 'SSRI', 'CBT', 'BDNF', 'HPA axis', 'ketamine', 'TMS', 'ECT', 'psilocybin'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['psychiatry', 'medicine'] },
  },
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
  contributors: ['SOMA Medical Education Team'],
};
