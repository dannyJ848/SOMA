import { EducationalContent } from '../../types';

export const bipolarDisorder: EducationalContent = {
  id: 'psychiatry-bipolar-disorder',
  type: 'condition',
  name: 'Bipolar Disorder',
  nameEs: 'Trastorno Bipolar',
  alternateNames: ['Bipolar I', 'Bipolar II', 'Manic-Depressive Illness', 'Bipolar Spectrum'],

  levels: {
    1: {
      level: 1,
      summary: 'Bipolar disorder causes extreme mood swings between emotional highs (mania) and deep lows (depression) that are far more intense than normal ups and downs.',
      explanation:
        '## The Mood Roller Coaster\n\n' +
        'Everyone has good and bad days. But with **bipolar disorder**, the mood swings are extreme and can last days to weeks.\n\n' +
        '**During a manic episode** (the "high"):\n' +
        '- Feeling incredibly energetic or "wired"\n' +
        '- Sleeping very little but not feeling tired\n' +
        '- Talking very fast, jumping between ideas\n' +
        '- Making risky decisions (spending sprees, dangerous behavior)\n' +
        '- Feeling invincible or having grandiose beliefs\n\n' +
        '**During a depressive episode** (the "low"):\n' +
        '- Feeling deeply sad, hopeless, or empty\n' +
        '- No energy or motivation\n' +
        '- Trouble sleeping or sleeping too much\n' +
        '- Difficulty concentrating\n\n' +
        'Bipolar disorder is a lifelong condition, but with medication (especially mood stabilizers) ' +
        'and therapy, most people can manage their symptoms and live full lives.',
      keyTerms: [
        { term: 'Mania', definition: 'A period of abnormally elevated mood, energy, and activity lasting at least a week that disrupts daily functioning', pronunciation: 'MAY-nee-ah' },
        { term: 'Bipolar disorder', definition: 'A brain condition causing extreme mood swings between mania (highs) and depression (lows)', pronunciation: 'by-POH-lar' },
      ],
      analogies: ['Bipolar disorder is like a thermostat that swings from scorching hot to freezing cold with no comfortable middle setting.'],
      patientCounselingPoints: [
        'Taking mood stabilizers consistently is the most important thing you can do -- stopping medication is the leading cause of relapse.',
        'Track your mood daily to recognize early warning signs of mania or depression.',
        'Maintain a regular sleep schedule -- sleep disruption can trigger episodes.',
      ],
    },

    2: {
      level: 2,
      summary: 'Bipolar I requires at least one manic episode (DIG FAST mnemonic, 7+ days); Bipolar II requires hypomania (4+ days) plus major depression. Lithium is the gold standard mood stabilizer; valproate and lamotrigine are key alternatives.',
      explanation:
        '## Bipolar I vs. Bipolar II & Pharmacotherapy\n\n' +
        '**Bipolar I Disorder:**\n' +
        'At least one manic episode (DIG FAST): Distractibility, Indiscretion/Impulsivity, Grandiosity, Flight of ideas, ' +
        'Activity increase, Sleep deficit, Talkativeness. Duration >= 7 days or any duration if hospitalization required.\n\n' +
        '**Bipolar II Disorder:**\n' +
        'At least one hypomanic episode (>= 4 days, less severe, no psychosis, no hospitalization) PLUS at least one major depressive episode. ' +
        'Never had a full manic episode.\n\n' +
        '**Key distinction:** Hypomania does not cause marked functional impairment. If psychotic features are present, it is mania by definition.\n\n' +
        '**Cyclothymic Disorder:** Chronic fluctuating mood with hypomanic and depressive symptoms that never meet full criteria, lasting >= 2 years.\n\n' +
        '**Pharmacotherapy:**\n' +
        '- **Lithium:** Gold standard for mania prophylaxis and acute mania. Therapeutic range 0.6-1.2 mEq/L. Requires monitoring of levels, renal function, thyroid (hypothyroidism in ~20%).\n' +
        '- **Valproate (Depakote):** Effective for acute mania, especially mixed episodes. Monitor LFTs and levels. Teratogenic (neural tube defects).\n' +
        '- **Lamotrigine:** Best evidence for bipolar depression prevention. Must titrate slowly (Stevens-Johnson syndrome risk). Not effective for acute mania.\n' +
        '- **Atypical antipsychotics:** Quetiapine, olanzapine, aripiprazole for acute mania and maintenance.',
      keyTerms: [
        { term: 'DIG FAST', definition: 'Mnemonic for mania criteria: Distractibility, Indiscretion, Grandiosity, Flight of ideas, Activity, Sleep deficit, Talkativeness' },
        { term: 'Hypomania', definition: 'A milder form of mania lasting 4+ days without psychosis or hospitalization; defines Bipolar II', pronunciation: 'HY-poh-MAY-nee-ah' },
        { term: 'Lithium', definition: 'Gold standard mood stabilizer; narrow therapeutic window (0.6-1.2 mEq/L); requires renal, thyroid, and level monitoring', pronunciation: 'LITH-ee-um' },
        { term: 'Lamotrigine', definition: 'Anticonvulsant mood stabilizer most effective for preventing bipolar depression; requires slow titration to avoid Stevens-Johnson syndrome', pronunciation: 'lah-MOH-trih-jeen' },
      ],
      clinicalNotes: 'Never start an antidepressant without a mood stabilizer in bipolar disorder -- SSRIs/SNRIs can trigger mania or rapid cycling. Lithium is the only mood stabilizer with robust evidence for reducing suicide risk. Valproate is absolutely contraindicated in pregnancy. Screen all depressed patients for bipolar history before prescribing antidepressants.',
    },

    3: {
      level: 3,
      summary: 'Bipolar neurobiology involves the kindling model of episode sensitization, mitochondrial dysfunction, circadian rhythm disruption (CLOCK gene variants), GSK-3beta dysregulation, and intracellular calcium signaling abnormalities. Lithium acts through GSK-3beta inhibition and inositol depletion.',
      explanation:
        '## Neurobiology & Mechanisms of Action\n\n' +
        '**Kindling Model (Robert Post):**\n' +
        'Early episodes require clear stressors; with recurrence, the brain becomes sensitized and episodes become spontaneous. ' +
        'Supports early intervention and continuous prophylaxis.\n\n' +
        '**Circadian Disruption:**\n' +
        'CLOCK gene polymorphisms associated with bipolar risk. Social rhythm disruption (jet lag, shift work, irregular sleep) triggers episodes. ' +
        'Interpersonal and Social Rhythm Therapy (IPSRT) specifically targets circadian regularity.\n\n' +
        '**Mitochondrial Dysfunction:**\n' +
        'Reduced oxidative phosphorylation, decreased ATP production, and elevated lactate in brain MRS studies. ' +
        'Mitochondrial DNA polymorphisms show maternal transmission bias. May explain multi-system features of bipolar disorder.\n\n' +
        '**Lithium Mechanisms:**\n' +
        '1. **GSK-3beta inhibition:** Promotes neuronal survival via Wnt/beta-catenin signaling; increases BDNF and Bcl-2.\n' +
        '2. **Inositol depletion:** Inhibits IMPase, reducing phosphatidylinositol signaling in hyperexcitable neurons.\n' +
        '3. **Neuroprotection:** Increases gray matter volume on MRI; reduces glutamate excitotoxicity.\n' +
        '4. **Circadian stabilization:** Inhibits GSK-3beta phosphorylation of clock proteins.\n\n' +
        '**Intracellular Calcium:**\n' +
        'Elevated baseline intracellular calcium in bipolar lymphocytes and neurons. ' +
        'Calcium channel genetic variants (CACNA1C) are among the strongest GWAS signals for bipolar disorder.',
      keyTerms: [
        { term: 'Kindling model', definition: 'Theory that mood episodes progressively sensitize the brain, reducing the stress threshold for subsequent episodes until they become spontaneous' },
        { term: 'GSK-3beta', definition: 'Glycogen synthase kinase-3 beta -- constitutively active kinase promoting apoptosis; inhibited by lithium, leading to neuroprotection and mood stabilization', pronunciation: 'G-S-K three BAY-tah' },
        { term: 'CACNA1C', definition: 'Voltage-gated calcium channel gene; one of the strongest GWAS signals for bipolar disorder, linking intracellular calcium dysregulation to genetic risk' },
        { term: 'IPSRT', definition: 'Interpersonal and Social Rhythm Therapy -- evidence-based psychotherapy targeting circadian rhythm regularity in bipolar disorder' },
      ],
      clinicalNotes: 'Lithium toxicity (>1.5 mEq/L): tremor, ataxia, renal failure, seizures. Common precipitants: dehydration, NSAIDs, ACE inhibitors, thiazides. Lithium causes hypothyroidism (~20%) and nephrogenic diabetes insipidus. Despite side effects, lithium remains first-line due to unique anti-suicidal effects and neuroprotection. Monitor: lithium levels, creatinine/GFR, TSH every 6 months; calcium annually.',
    },

    4: {
      level: 4,
      summary: 'Advanced bipolar management encompasses rapid cycling definitions and management, mixed features specifier, bipolar depression treatment challenges, long-acting injectable antipsychotics for adherence, and the role of anti-inflammatory and mitochondrial-targeted therapies.',
      explanation:
        '## Advanced Management & Emerging Concepts\n\n' +
        '**Rapid Cycling:**\n' +
        'Defined as 4+ mood episodes per year. Present in 15-20% of bipolar patients. Associated with female sex, hypothyroidism, ' +
        'antidepressant use, and substance abuse. Lithium less effective; valproate or combination therapy preferred. ' +
        'Discontinue antidepressants.\n\n' +
        '**Mixed Features Specifier (DSM-5):**\n' +
        'Mania or depression with features of the opposite pole (e.g., manic episode with depressive symptoms). ' +
        'Replaces the old "mixed episode" concept. Associated with worse prognosis, higher suicide risk, and poorer treatment response.\n\n' +
        '**Bipolar Depression Treatment Challenge:**\n' +
        'Patients spend 3x more time depressed than manic. Antidepressant monotherapy is contraindicated. ' +
        'Evidence-based options: quetiapine monotherapy, lurasidone (+ lithium or valproate), lamotrigine (prevention), ' +
        'cariprazine, lithium, olanzapine-fluoxetine combination (OFC). ECT for refractory cases.\n\n' +
        '**LAI Antipsychotics:**\n' +
        'Aripiprazole LAI and risperidone LAI are FDA-approved for bipolar I maintenance. ' +
        'Improve adherence and reduce relapse/hospitalization.\n\n' +
        '**Emerging Therapies:**\n' +
        '- NAC (N-acetylcysteine) for oxidative stress/mitochondrial support\n' +
        '- Ketamine/esketamine for acute bipolar depression (off-label, emerging evidence)\n' +
        '- Anti-inflammatory augmentation (celecoxib) for bipolar depression with elevated CRP\n' +
        '- Chronotherapy (wake therapy, bright light therapy) with rapid but transient effects',
      keyTerms: [
        { term: 'Rapid cycling', definition: '4+ mood episodes per year; associated with antidepressant use, hypothyroidism, and poorer lithium response' },
        { term: 'Mixed features', definition: 'DSM-5 specifier for mood episodes with prominent symptoms of the opposite pole; carries worse prognosis and higher suicide risk' },
        { term: 'Cariprazine', definition: 'D3-preferring partial agonist antipsychotic FDA-approved for bipolar depression, mania, and mixed episodes', pronunciation: 'kah-RIP-rah-zeen' },
      ],
      clinicalNotes: 'Bipolar depression is the predominant mood state and leading cause of disability. Avoid antidepressant monotherapy. Quetiapine has the strongest evidence base for acute bipolar depression (BOLDER trials). Lamotrigine prevents depressive relapse but is not effective for acute depression. Cariprazine has unique D3 partial agonism that may address anhedonia. Monitor for metabolic syndrome with all atypical antipsychotics.',
    },

    5: {
      level: 5,
      summary: 'Cutting-edge research encompasses GWAS-identified loci (CACNA1C, ANK3, ODZ4), iPSC modeling of neuronal hyperexcitability, lithium pharmacogenomics, staging models, and novel targets including glutamate modulators, neurosteroids, and circadian-targeted therapies.',
      explanation:
        '## Frontier Research\n\n' +
        '**Genetics & Multi-Omics:**\n' +
        'PGC bipolar GWAS identifies 64 significant loci including CACNA1C (calcium channel), ANK3 (ankyrin-G, node of Ranvier), ' +
        'and ODZ4 (neurodevelopment). Significant genetic correlation with schizophrenia (r~0.7) but less with MDD (r~0.4). ' +
        'PRS explains ~4% of variance. Rare variants in ion channel and synaptic genes identified by WES.\n\n' +
        '**iPSC Models:**\n' +
        'Patient-derived neurons show hyperexcitability, increased calcium signaling, enhanced mitochondrial membrane potential changes, ' +
        'and altered action potential firing patterns. Lithium normalizes hyperexcitability in vitro, and lithium-responsive patients\' ' +
        'neurons show greater normalization than non-responders -- potential for pharmacogenomic prediction.\n\n' +
        '**Staging Models (Berk, Kapczinski):**\n' +
        'Stage 1: At-risk/prodromal. Stage 2: First episode. Stage 3: Recurrent episodes with inter-episode symptoms. ' +
        'Stage 4: Chronic/refractory with cognitive decline. Later stages show progressive neurotrophic factor reduction, ' +
        'increased inflammatory markers, and cortical thinning. Treatment intensity matched to stage.\n\n' +
        '**Lithium Pharmacogenomics:**\n' +
        'ConLiGen consortium identified genetic predictors of lithium response. Variants in GADL1, SESTD1, and long non-coding RNAs ' +
        'predict response. Polygenic scores for lithium response under development.\n\n' +
        '**Novel Targets:** Glutamate modulators (memantine augmentation), neurosteroids, orexin antagonists for sleep stabilization, ' +
        'and chronotherapy combinations with lithium for circadian resynchronization.',
      keyTerms: [
        { term: 'CACNA1C', definition: 'Voltage-gated L-type calcium channel alpha subunit; strongest GWAS signal for bipolar disorder; iPSC studies confirm neuronal calcium signaling abnormalities' },
        { term: 'Bipolar staging model', definition: 'Progressive model (Berk/Kapczinski) classifying bipolar disorder from at-risk to chronic/refractory, with increasing neurobiological burden at each stage' },
        { term: 'ConLiGen', definition: 'International Consortium on Lithium Genetics -- multi-site effort to identify genomic predictors of lithium response in bipolar disorder' },
      ],
      clinicalNotes: 'iPSC-based lithium response prediction is promising but not yet clinically available. Staging models suggest that early aggressive treatment may prevent neuroprogression. The high genetic correlation between bipolar disorder and schizophrenia supports transdiagnostic treatment approaches. Pharmacogenomic testing (CYP2D6 for aripiprazole, CYP2C19 for several agents) is clinically useful for optimizing tolerability.',
    },
  },

  media: [],
  citations: [
    { id: 'dsm5-tr-bipolar', type: 'textbook', title: 'DSM-5-TR: Bipolar and Related Disorders', authors: ['American Psychiatric Association'], source: 'American Psychiatric Publishing', license: 'Proprietary' },
    { id: 'stahl-bipolar', type: 'textbook', title: "Stahl's Essential Psychopharmacology", authors: ['Stephen M. Stahl'], source: 'Cambridge University Press', chapter: 'Chapters 6-8', license: 'Proprietary' },
  ],
  crossReferences: [
    { targetId: 'psychiatry-mdd', targetType: 'condition', relationship: 'related', label: 'Major Depressive Disorder (differential diagnosis)' },
    { targetId: 'psychiatry-mood-stabilizers', targetType: 'topic', relationship: 'related', label: 'Mood Stabilizers (pharmacotherapy)' },
    { targetId: 'psychiatry-psychotic-disorders', targetType: 'condition', relationship: 'related', label: 'Psychotic Disorders (psychotic mania, schizoaffective)' },
  ],
  tags: {
    systems: ['nervous', 'endocrine'],
    topics: ['psychiatry', 'psychopharmacology', 'neuroscience'],
    keywords: ['bipolar', 'mania', 'hypomania', 'lithium', 'valproate', 'lamotrigine', 'rapid cycling', 'kindling', 'CACNA1C'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['psychiatry', 'medicine'] },
  },
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
  contributors: ['SOMA Medical Education Team'],
};
