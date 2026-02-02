import { EducationalContent } from '../../types';

export const antipsychoticsAndMoodStabilizers: EducationalContent = {
  id: 'psychiatry-antipsychotics-mood-stabilizers',
  type: 'topic',
  name: 'Antipsychotics & Mood Stabilizers',
  nameEs: 'Antipsicoticos y Estabilizadores del Animo',
  alternateNames: ['Neuroleptics', 'D2 Antagonists', 'Mood Stabilizer Pharmacology'],

  levels: {
    1: {
      level: 1,
      summary: 'Antipsychotics help treat hallucinations and delusions by balancing brain chemicals. Mood stabilizers prevent the extreme highs and lows of bipolar disorder. Both types of medication require regular monitoring.',
      explanation:
        '## Medications for Psychosis and Mood Swings\n\n' +
        '### Antipsychotics\n' +
        'When the brain produces too much of a chemical called **dopamine** in certain areas, ' +
        'it can cause a person to hear voices, see things, or have false beliefs. ' +
        '**Antipsychotic medications** help by reducing dopamine activity, which calms these symptoms.\n\n' +
        '### Mood Stabilizers\n' +
        'For people with **bipolar disorder**, mood stabilizers act like a thermostat for emotions, ' +
        'preventing both extreme highs (mania) and deep lows (depression). ' +
        'The most well-known mood stabilizer is **lithium**, which has been used for over 70 years.\n\n' +
        '**Key points:**\n' +
        '- These medications must be taken consistently, even when feeling well\n' +
        '- Stopping suddenly can cause symptoms to return quickly\n' +
        '- Regular blood tests may be needed to make sure the medication is at the right level',
      keyTerms: [
        { term: 'Antipsychotic', definition: 'A medication that treats hallucinations and delusions by reducing dopamine activity in the brain', pronunciation: 'AN-tee-sy-KOT-ik' },
        { term: 'Mood stabilizer', definition: 'A medication that prevents extreme mood swings in bipolar disorder', pronunciation: 'mood STAY-bih-LY-zer' },
        { term: 'Lithium', definition: 'The oldest and most well-studied mood stabilizer, used for over 70 years to treat bipolar disorder', pronunciation: 'LITH-ee-um' },
      ],
      analogies: [
        'Antipsychotics work like a volume knob, turning down the brain signals that are too loud.',
        'Mood stabilizers are like shock absorbers on a car -- they smooth out the bumps so the ride is not so jarring.',
      ],
      patientCounselingPoints: [
        'Take medication consistently, even when you feel well -- it is preventing symptoms from returning.',
        'Keep all blood test appointments -- they help ensure the medication is safe and effective.',
        'Report side effects to your doctor rather than stopping on your own.',
      ],
    },

    2: {
      level: 2,
      summary: 'FGAs (haloperidol) primarily block D2 receptors with EPS risk. SGAs (risperidone, olanzapine, aripiprazole) add 5-HT2A blockade with metabolic risk. Lithium (0.6-1.2 mEq/L) is first-line for bipolar; valproate for acute mania; lamotrigine for bipolar depression prevention.',
      explanation:
        '## Antipsychotic & Mood Stabilizer Pharmacology\n\n' +
        '**First-Generation Antipsychotics (FGAs):**\n' +
        'Primarily D2 receptor antagonists. High-potency (haloperidol, fluphenazine): more EPS, less sedation. ' +
        'Low-potency (chlorpromazine): more sedation, anticholinergic effects, less EPS.\n' +
        'EPS timeline: Acute dystonia (hours-days), akathisia (days-weeks), parkinsonism (weeks-months), tardive dyskinesia (months-years).\n\n' +
        '**Second-Generation Antipsychotics (SGAs):**\n' +
        'D2 + 5-HT2A antagonism. Key agents: Risperidone (dose-dependent EPS, hyperprolactinemia), ' +
        'olanzapine (effective but metabolic syndrome), quetiapine (sedating, low EPS), ' +
        'aripiprazole (D2 partial agonist -- unique), lurasidone, ziprasidone (QTc), clozapine (TRS).\n' +
        'Metabolic monitoring required: weight, glucose, lipids at baseline and regularly.\n\n' +
        '**Mood Stabilizers:**\n' +
        '- **Lithium:** Range 0.6-1.2 mEq/L. Monitor levels, renal, thyroid, calcium. Anti-suicidal. Toxicity >1.5 mEq/L.\n' +
        '- **Valproate:** Best for acute mania, mixed episodes. Monitor LFTs, levels, CBC. Teratogenic (neural tube defects).\n' +
        '- **Lamotrigine:** Prevents bipolar depression. Slow titration (SJS risk). Not for acute mania.\n' +
        '- **Carbamazepine:** Induces CYP3A4 (drug interactions). Monitor CBC (aplastic anemia risk). HLA-B*1502 testing in Asian populations (SJS).',
      keyTerms: [
        { term: 'D2 partial agonist', definition: 'Aripiprazole\'s mechanism: activates D2 when dopamine is low (mesocortical) and blocks when high (mesolimbic); "dopamine system stabilizer"' },
        { term: 'Tardive dyskinesia', definition: 'Late-onset involuntary movements (orofacial, limb) from chronic D2 blockade; potentially irreversible. Treat with VMAT2 inhibitors (valbenazine, deutetrabenazine)' },
        { term: 'Stevens-Johnson syndrome', definition: 'Life-threatening skin reaction to lamotrigine or carbamazepine; prevented by slow titration of lamotrigine and HLA-B*1502 testing for carbamazepine', relatedTerms: ['SJS', 'TEN'] },
        { term: 'Metabolic syndrome', definition: 'Weight gain, hyperglycemia, dyslipidemia from SGAs (worst with olanzapine and clozapine); requires regular monitoring' },
      ],
      clinicalNotes: 'Tardive dyskinesia treatment: VMAT2 inhibitors valbenazine (Ingrezza) and deutetrabenazine (Austedo) are FDA-approved. NMS: stop antipsychotic, supportive care, dantrolene, bromocriptine. Lithium toxicity precipitants: dehydration, NSAIDs, ACE inhibitors, thiazides. Valproate is absolutely contraindicated in pregnancy (neural tube defects). HLA-B*1502 testing is required before carbamazepine in patients of Asian descent.',
    },

    3: {
      level: 3,
      summary: 'Antipsychotic mechanisms involve D2 occupancy thresholds (60-80% for efficacy, >80% for EPS), the serotonin-dopamine antagonism model explaining SGA advantages, and clozapine\'s unique multi-receptor fast-off D2 profile. Lithium acts through GSK-3beta inhibition, inositol depletion, and neuroprotection.',
      explanation:
        '## Receptor Pharmacology & Mechanism Depth\n\n' +
        '**D2 Occupancy Model:**\n' +
        'PET studies show: 60-80% striatal D2 occupancy = therapeutic range for positive symptoms. ' +
        '>80% occupancy = EPS threshold. This window explains the dose-response and side-effect relationship.\n' +
        'Aripiprazole (partial agonist) achieves >90% occupancy without EPS because intrinsic activity prevents complete blockade.\n\n' +
        '**Serotonin-Dopamine Antagonism:**\n' +
        '5-HT2A receptors on DA neurons tonically inhibit DA release. In cortex and striatum, 5-HT2A blockade ' +
        'disinhibits DA release, partially counteracting D2 blockade. This preferentially protects mesocortical (negative symptoms) ' +
        'and nigrostriatal (EPS) pathways while mesolimbic D2 blockade is maintained.\n\n' +
        '**Clozapine\'s Multi-Receptor Profile:**\n' +
        'Fast-off D2 binding (rapid dissociation -> transient occupancy -> low EPS). ' +
        'High 5-HT2A/D2 ratio. M1/M4 muscarinic agonism (may explain pro-cognitive and unique efficacy). ' +
        '5-HT1A partial agonism. D4 antagonism.\n\n' +
        '**Lithium Molecular Mechanisms:**\n' +
        '1. GSK-3beta inhibition -> Wnt/beta-catenin -> neuroprotection, BDNF, Bcl-2, neurogenesis\n' +
        '2. IMPase inhibition -> inositol depletion -> dampens PI signaling in hyperexcitable neurons\n' +
        '3. Glutamate modulation: upregulates glutamate reuptake transporter, reducing excitotoxicity\n' +
        '4. Circadian effects: GSK-3beta phosphorylates clock proteins; lithium lengthens circadian period\n\n' +
        '**Valproate:** Multiple mechanisms: GABA potentiation (inhibits GABA transaminase, enhances GABA synthesis), ' +
        'blocks voltage-gated sodium channels, histone deacetylase (HDAC) inhibition (epigenetic effects), ' +
        'reduces PKC and myristoylated alanine-rich C kinase substrate (MARCKS).',
      keyTerms: [
        { term: 'D2 occupancy threshold', definition: 'PET-derived principle: 60-80% striatal D2 occupancy for antipsychotic efficacy; >80% for EPS; guides dose optimization' },
        { term: 'Fast-off D2 binding', definition: 'Clozapine\'s rapid dissociation from D2 receptors producing transient occupancy; explains minimal EPS despite effective antipsychotic action' },
        { term: 'IMPase', definition: 'Inositol monophosphatase -- enzyme inhibited by lithium, depleting free inositol and dampening phosphatidylinositol signaling in hyperactive neurons' },
        { term: 'VMAT2 inhibitors', definition: 'Vesicular monoamine transporter 2 inhibitors (valbenazine, deutetrabenazine); reduce dopamine packaging into vesicles; FDA-approved for tardive dyskinesia' },
      ],
      clinicalNotes: 'D2 occupancy PET has validated dose-finding: risperidone 2-4mg, olanzapine 10-20mg, and haloperidol 2-5mg achieve optimal 60-80% occupancy. Higher doses increase side effects without additional efficacy for most patients. Clozapine levels (350-600 ng/mL) better predict response than dose due to variable CYP1A2 metabolism. Valproate HDAC inhibition has generated interest as a potential anti-cancer and neuroprotective mechanism.',
    },

    4: {
      level: 4,
      summary: 'Advanced topics include long-acting injectables for adherence, novel non-D2 mechanisms (muscarinic agonists, TAAR1), pharmacogenomics of antipsychotic metabolism (CYP2D6, CYP1A2), metabolic side effect management (metformin augmentation), and emerging strategies for negative symptoms and cognition.',
      explanation:
        '## Advanced Pharmacotherapy\n\n' +
        '**Long-Acting Injectables (LAIs):**\n' +
        'Address 40-60% nonadherence rate. Paliperidone palmitate: monthly, 3-month (Trinza), 6-month (Hafyera). ' +
        'Aripiprazole lauroxil/monohydrate: monthly. Olanzapine pamoate: 3-hour post-injection monitoring (PDSS). ' +
        'Mirror-image studies: consistent reduction in hospitalization. Increasingly recommended at first episode.\n\n' +
        '**Muscarinic Agonists (Cobenfy):**\n' +
        'Xanomeline (M1/M4 agonist) + trospium (peripheral M antagonist). FDA-approved 2024 for schizophrenia. ' +
        'First non-D2 antipsychotic in 70 years. No EPS, no prolactin, no tardive dyskinesia. M1 -> cortical cognition. ' +
        'M4 -> striatal dopamine modulation. EMERGENT trials: significant PANSS reduction.\n\n' +
        '**Metabolic Side Effect Management:**\n' +
        '- Metformin (500-2000 mg/day): evidence for weight mitigation with olanzapine/clozapine\n' +
        '- GLP-1 receptor agonists (liraglutide, semaglutide): emerging evidence for antipsychotic-associated weight gain\n' +
        '- Topiramate augmentation: modest weight loss\n' +
        '- Switching to lower metabolic risk agent (aripiprazole, ziprasidone, lurasidone)\n\n' +
        '**Pharmacogenomics:**\n' +
        'CYP2D6: risperidone, aripiprazole metabolism. CYP1A2: clozapine, olanzapine (smoking induces CYP1A2 -- dose adjustment at admission/discharge). ' +
        'CYP3A4: quetiapine, lurasidone. DRD2 polymorphisms: limited clinical utility currently.\n\n' +
        '**Targeting Negative Symptoms / Cognition:**\n' +
        'Cariprazine (D3-preferring partial agonist): potential for motivational deficits. ' +
        'Iclepertin (GlyT1 inhibitor): Phase III for cognitive impairment. ' +
        'Xanomeline component of Cobenfy: M1-mediated pro-cognitive effects.',
      keyTerms: [
        { term: 'Cobenfy', definition: 'Xanomeline-trospium; first non-D2 antipsychotic (FDA 2024); M1/M4 muscarinic agonism without EPS, prolactin, or TD risk' },
        { term: 'GLP-1 receptor agonist', definition: 'Diabetes/weight loss medications (semaglutide) with emerging evidence for managing antipsychotic-associated metabolic syndrome' },
        { term: 'TAAR1 agonist', definition: 'Trace amine-associated receptor 1 agonist modulating monoamine systems without D2 blockade; ulotaront development discontinued for schizophrenia' },
        { term: 'Iclepertin', definition: 'Glycine transporter-1 (GlyT1) inhibitor in Phase III trials for cognitive impairment in schizophrenia; enhances NMDA function at the glycine co-agonist site' },
      ],
      clinicalNotes: 'CYP1A2 induction by smoking is clinically critical: smoking cessation during psychiatric admission can double clozapine/olanzapine levels, causing toxicity. Reduce dose by 50% upon admission to smoke-free units. GLP-1 agonists for antipsychotic weight gain are gaining real-world evidence but not yet guideline-recommended. Cobenfy side effects are primarily GI (nausea, constipation, dry mouth) -- significantly different profile from D2-blocking agents.',
    },

    5: {
      level: 5,
      summary: 'Frontier research encompasses biotype-guided antipsychotic selection, anti-complement therapies for prodromal psychosis, glutamate-based strategies for cognitive enhancement, precision dosing via pharmacokinetic modeling, and digital biomarkers for medication response monitoring.',
      explanation:
        '## Frontier Research\n\n' +
        '**Biotype-Guided Treatment:**\n' +
        'Neuroimaging and cognitive biotypes that cut across DSM categories predict differential antipsychotic response. ' +
        'Striatal dopamine synthesis capacity ([18F]DOPA PET) predicts D2-blocker response -- low synthesis patients may respond better to non-D2 agents (Cobenfy). ' +
        'EEG-derived biomarkers (MMN, ASSR at 40 Hz) track PV interneuron function and may guide glutamate-based augmentation.\n\n' +
        '**Anti-Complement Therapies:**\n' +
        'C4/C3 inhibitors to prevent excessive synaptic pruning during CHR/prodromal window. ' +
        'Repurposing sutimlimab, pegcetacoplan from hematology. Must intervene during active pruning (adolescence). ' +
        'Infection risk with complement inhibition requires careful risk-benefit analysis.\n\n' +
        '**Precision Dosing:**\n' +
        'Bayesian pharmacokinetic modeling integrating genotype (CYP2D6/1A2), demographics, and therapeutic drug monitoring ' +
        'for individualized dose optimization. Model-informed precision dosing (MIPD) platforms in development.\n\n' +
        '**Glutamate Enhancement for Cognition:**\n' +
        'Iclepertin (GlyT1 inhibitor), D-serine, sarcosine targeting glycine site of NMDA receptor. ' +
        'AMPA receptor positive modulators (AMPAkines) for cognitive enhancement. ' +
        'Challenge: achieving sufficient CNS exposure and glycine site occupancy.\n\n' +
        '**Digital Monitoring:**\n' +
        'Ingestible sensor technology (Abilify MyCite): aripiprazole with embedded sensor tracking ingestion. ' +
        'Smartphone-based adherence and symptom monitoring. NLP analysis of speech patterns for early relapse detection.',
      keyTerms: [
        { term: 'Model-informed precision dosing', definition: 'Bayesian pharmacokinetic approach integrating genotype, demographics, and drug levels for individualized antipsychotic dose optimization' },
        { term: 'Abilify MyCite', definition: 'Aripiprazole tablet with embedded ingestible sensor that transmits ingestion data to smartphone -- first digital medicine FDA-approved in psychiatry' },
        { term: 'AMPAkine', definition: 'Positive allosteric modulator of AMPA glutamate receptors; under investigation for cognitive enhancement in schizophrenia' },
      ],
      clinicalNotes: 'Biotype-guided treatment selection is primarily research-stage but approaching clinical application. Digital medicine (Abilify MyCite) raises ethical questions about surveillance vs. therapeutic monitoring. Anti-complement therapy timing is critical -- too late means pruning is complete, too early means unnecessary immune suppression. Precision dosing platforms are being validated in academic centers but are not yet widely available.',
    },
  },

  media: [],
  citations: [
    { id: 'stahl-antipsych', type: 'textbook', title: "Stahl's Essential Psychopharmacology", authors: ['Stephen M. Stahl'], source: 'Cambridge University Press', chapter: 'Chapters 4-6', license: 'Proprietary' },
    { id: 'leucht-2013', type: 'article', title: 'Comparative efficacy and tolerability of 15 antipsychotic drugs in schizophrenia', authors: ['Stefan Leucht et al.'], source: 'Lancet', url: 'https://doi.org/10.1016/S0140-6736(13)60733-3' },
  ],
  crossReferences: [
    { targetId: 'psychiatry-schizophrenia', targetType: 'condition', relationship: 'related', label: 'Schizophrenia (primary antipsychotic indication)' },
    { targetId: 'psychiatry-bipolar-disorder', targetType: 'condition', relationship: 'related', label: 'Bipolar Disorder (mood stabilizer indication)' },
    { targetId: 'psychiatry-antidepressants', targetType: 'topic', relationship: 'related', label: 'Antidepressants (augmentation, combination therapy)' },
    { targetId: 'psychiatry-schizoaffective', targetType: 'condition', relationship: 'related', label: 'Schizoaffective Disorder (combined treatment)' },
  ],
  tags: {
    systems: ['nervous', 'endocrine'],
    topics: ['psychiatry', 'psychopharmacology', 'pharmacology'],
    keywords: ['antipsychotic', 'mood stabilizer', 'lithium', 'valproate', 'lamotrigine', 'D2 receptor', 'clozapine', 'aripiprazole', 'EPS', 'tardive dyskinesia', 'metabolic syndrome', 'Cobenfy'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['psychiatry', 'pharmacology', 'medicine'] },
  },
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
  contributors: ['SOMA Medical Education Team'],
};
