import { EducationalContent } from '../../types';

export const schizoaffectiveDisorder: EducationalContent = {
  id: 'psychiatry-schizoaffective',
  type: 'condition',
  name: 'Schizoaffective Disorder',
  nameEs: 'Trastorno Esquizoafectivo',
  alternateNames: ['Schizoaffective', 'SA Disorder'],

  levels: {
    1: {
      level: 1,
      summary: 'Schizoaffective disorder is a condition where a person has both symptoms of schizophrenia (hallucinations, delusions) and a mood disorder (depression or mania) at the same time.',
      explanation:
        '## A Mix of Two Conditions\n\n' +
        'Think of schizoaffective disorder as a combination of **schizophrenia** and a **mood disorder**.\n\n' +
        'A person with this condition experiences:\n' +
        '- **Psychotic symptoms** like hearing voices or having false beliefs (like schizophrenia)\n' +
        '- **Mood episodes** -- either deep depression or extreme highs (mania)\n\n' +
        'What makes it different from just having depression or bipolar disorder with psychosis is that ' +
        'the hallucinations and delusions sometimes continue even when the mood is normal.\n\n' +
        'Treatment combines antipsychotic medication with mood treatment (mood stabilizers or antidepressants), ' +
        'plus therapy and support.',
      keyTerms: [
        { term: 'Schizoaffective disorder', definition: 'A condition combining symptoms of schizophrenia (hallucinations, delusions) with mood disorder symptoms (depression or mania)', pronunciation: 'SKIT-soh-ah-FEK-tiv' },
      ],
      analogies: ['Schizoaffective disorder is like having two radio stations playing at the same time -- one broadcasting psychotic symptoms and the other broadcasting mood symptoms.'],
      patientCounselingPoints: [
        'This condition is treatable with a combination of medications and therapy.',
        'Taking medications consistently is essential for staying stable.',
        'Both the psychotic and mood symptoms need to be treated.',
      ],
    },

    2: {
      level: 2,
      summary: 'Schizoaffective disorder requires concurrent psychotic and major mood episodes, plus 2+ weeks of delusions/hallucinations WITHOUT mood symptoms (distinguishing it from mood disorders with psychotic features). Two subtypes: bipolar and depressive.',
      explanation:
        '## Diagnostic Criteria & Treatment\n\n' +
        '**DSM-5 Criteria:**\n' +
        '- **Criterion A:** An uninterrupted period of illness with a major mood episode (depressive or manic) concurrent with Criterion A of schizophrenia\n' +
        '- **Criterion B (KEY):** Delusions or hallucinations for 2+ weeks in the ABSENCE of a major mood episode\n' +
        '- This distinguishes schizoaffective from mood disorder with psychotic features (where psychosis only occurs during mood episodes)\n' +
        '- **Subtypes:** Bipolar type (manic episodes present) and Depressive type (only depressive episodes)\n\n' +
        '**Epidemiology:** Lifetime prevalence ~0.3%. More common in women. Prognosis intermediate between schizophrenia and mood disorders.\n\n' +
        '**Treatment:**\n' +
        '- **Antipsychotics:** Paliperidone (only FDA-approved medication specifically for schizoaffective disorder). Also risperidone, aripiprazole, olanzapine.\n' +
        '- **Bipolar type:** Add lithium or valproate\n' +
        '- **Depressive type:** Add antidepressant (with antipsychotic coverage)\n' +
        '- **Psychotherapy:** CBTp, social skills training, family psychoeducation\n' +
        '- **Clozapine:** For treatment-resistant cases',
      keyTerms: [
        { term: 'Criterion B', definition: 'The key diagnostic feature: psychotic symptoms must persist for 2+ weeks WITHOUT a concurrent mood episode, distinguishing schizoaffective from mood disorder with psychosis' },
        { term: 'Bipolar type', definition: 'Schizoaffective subtype including manic episodes; treated with antipsychotics plus mood stabilizers' },
        { term: 'Depressive type', definition: 'Schizoaffective subtype with only depressive episodes; treated with antipsychotics plus antidepressants' },
        { term: 'Paliperidone', definition: 'Active metabolite of risperidone; only FDA-approved medication specifically for schizoaffective disorder; available as LAI', pronunciation: 'pal-ee-PAIR-ih-dohn' },
      ],
      clinicalNotes: 'The distinction between schizoaffective disorder and schizophrenia with comorbid mood disorder is clinically challenging and diagnostically unreliable. Many clinicians consider it part of a continuum. Paliperidone (Invega) and its LAI formulation (Invega Sustenna) are the only medications with a specific FDA indication for schizoaffective disorder.',
    },

    3: {
      level: 3,
      summary: 'Schizoaffective disorder occupies an intermediate position on the psychosis-mood spectrum, sharing genetic overlap with both schizophrenia (dopaminergic) and bipolar disorder (circadian, calcium channel). Neuroimaging shows mixed patterns of both conditions.',
      explanation:
        '## Neurobiology & Diagnostic Controversy\n\n' +
        '**Diagnostic Validity Debate:**\n' +
        'Schizoaffective disorder has the lowest diagnostic reliability among major psychiatric disorders (kappa ~0.5). ' +
        'Kraepelinian dichotomy (dementia praecox vs. manic-depressive illness) is increasingly questioned. ' +
        'Genetic, neuroimaging, and outcomes data support a dimensional spectrum rather than discrete categories.\n\n' +
        '**Genetics:**\n' +
        'Shares significant polygenic overlap with both schizophrenia (r~0.7) and bipolar disorder (r~0.6). ' +
        'No unique genetic loci identified. Copy number variants (22q11.2, 1q21.1) increase risk similarly to schizophrenia.\n\n' +
        '**Neuroimaging:**\n' +
        'Intermediate gray matter volume (between schizophrenia and bipolar). ' +
        'Ventricular enlargement less severe than schizophrenia. ' +
        'White matter tract disruption pattern overlaps with both conditions. ' +
        'Functional connectivity shows mixed schizophrenia-like and bipolar-like patterns.\n\n' +
        '**Neurochemistry:**\n' +
        'Dopaminergic dysregulation (mesolimbic hyperactivity) similar to schizophrenia. ' +
        'Mood-related circuitry (amygdala-PFC, circadian genes) shows bipolar-like alterations. ' +
        'Serotonergic system involvement may explain mood component.\n\n' +
        '**Prognosis:** Better than schizophrenia, worse than mood disorders. Bipolar type has better outcomes than depressive type.',
      keyTerms: [
        { term: 'Kraepelinian dichotomy', definition: 'Historical classification dividing psychotic illness into dementia praecox (schizophrenia) and manic-depressive illness (bipolar); increasingly challenged by spectrum evidence' },
        { term: 'Psychosis-mood spectrum', definition: 'Dimensional model placing schizoaffective disorder between schizophrenia and bipolar disorder based on genetic, neuroimaging, and clinical overlap' },
      ],
      clinicalNotes: 'In practice, the schizoaffective diagnosis is often applied longitudinally as clinicians observe the relationship between psychotic and mood symptoms over time. A diagnosis that changes between schizophrenia and schizoaffective is common and does not necessarily indicate diagnostic error. Treatment should target both psychotic and mood symptom domains regardless of exact diagnostic label.',
    },

    4: {
      level: 4,
      summary: 'Advanced understanding includes transdiagnostic dimensional models (RDoC, p-factor), network psychopathology approaches, shared and distinct biomarkers across the schizophrenia-bipolar spectrum, and pharmacotherapy optimization using LAIs and clozapine for treatment resistance.',
      explanation:
        '## Advanced Concepts & Transdiagnostic Models\n\n' +
        '**The p-Factor:**\n' +
        'General psychopathology factor from structural equation modeling. A single latent dimension explains substantial comorbidity ' +
        'across all psychiatric disorders. Schizoaffective disorder loads heavily on the p-factor, supporting its position as a severe, ' +
        'transdiagnostic phenotype rather than a distinct entity.\n\n' +
        '**Network Psychopathology:**\n' +
        'Symptom network analysis of schizoaffective disorder shows bridge symptoms connecting psychosis and mood networks: ' +
        'paranoia-anxiety, grandiosity-euphoria, disorganization-cognitive impairment. ' +
        'These bridge symptoms may represent key therapeutic targets.\n\n' +
        '**Biomarker Differentiation:**\n' +
        'Dopamine synthesis capacity ([18F]DOPA PET) elevated similarly to schizophrenia. ' +
        'Inflammatory markers (IL-6, CRP) elevated similarly to bipolar type during mood episodes. ' +
        'Cortisol patterns show mixed HPA dysregulation (bipolar-like during episodes, schizophrenia-like between episodes).\n\n' +
        '**Treatment Optimization:**\n' +
        '- LAIs (paliperidone palmitate) are particularly valuable given high nonadherence rates\n' +
        '- Clozapine for treatment-resistant schizoaffective disorder (same monitoring as schizophrenia)\n' +
        '- Lithium augmentation has evidence for reducing suicidality and mood episodes\n' +
        '- ECT effective for treatment-resistant mood episodes with psychotic features\n' +
        '- Cobenfy (xanomeline-trospium) being studied for schizoaffective disorder',
      keyTerms: [
        { term: 'p-Factor', definition: 'General psychopathology factor -- a latent dimension explaining shared liability across mental disorders; schizoaffective disorder loads heavily on this transdiagnostic factor' },
        { term: 'Bridge symptoms', definition: 'Symptoms in network models that connect distinct symptom clusters (psychosis and mood); potential therapeutic targets in schizoaffective disorder' },
      ],
      clinicalNotes: 'Paliperidone palmitate LAI (Invega Sustenna/Trinza) is the most practical pharmacotherapy choice for schizoaffective disorder, addressing both psychotic and mood symptoms with guaranteed adherence. Lithium augmentation should be considered for schizoaffective bipolar type with suicidal ideation. Network analysis is generating personalized treatment targets but is not yet standard clinical practice.',
    },

    5: {
      level: 5,
      summary: 'Frontier research questions whether schizoaffective disorder is a valid diagnostic entity, explores genomic overlap with schizophrenia and bipolar disorder, investigates dimensional biotype classification, and evaluates novel cross-diagnostic treatments including muscarinic agonists and psychedelic-assisted therapies.',
      explanation:
        '## Frontier Research & Nosological Questions\n\n' +
        '**Diagnostic Validity Crisis:**\n' +
        'ICD-11 retains schizoaffective disorder but acknowledges it as the least reliable psychotic disorder diagnosis. ' +
        'HiTOP (Hierarchical Taxonomy of Psychopathology) places it within a thought disorder spectrum alongside schizophrenia. ' +
        'Some experts advocate eliminating the category entirely.\n\n' +
        '**Genomic Architecture:**\n' +
        'Cross-disorder GWAS (PGC): Schizoaffective cases cluster genetically between schizophrenia and bipolar. ' +
        'No unique schizoaffective loci identified. ' +
        'Supports a gradient model rather than a categorical distinction.\n\n' +
        '**Biotype Classification:**\n' +
        'Data-driven clustering across schizophrenia-schizoaffective-bipolar spectrum identifies 3-5 biotypes ' +
        'based on cognition, neuroimaging, and electrophysiology that cut across diagnostic boundaries. ' +
        'Biotype membership predicts treatment response better than DSM diagnosis.\n\n' +
        '**Novel Cross-Diagnostic Therapies:**\n' +
        '- Cobenfy (muscarinic agonist): Under investigation for schizoaffective; mechanism addresses both dopaminergic and mood circuitry\n' +
        '- Ketamine/esketamine: Emerging evidence for schizoaffective depressive type (careful monitoring for psychotic exacerbation)\n' +
        '- Cariprazine: D3-preferring partial agonist with evidence across schizophrenia, bipolar mania, and bipolar depression\n' +
        '- Digital phenotyping: Shared platforms for monitoring psychosis and mood deterioration',
      keyTerms: [
        { term: 'HiTOP', definition: 'Hierarchical Taxonomy of Psychopathology -- dimensional classification system placing schizoaffective disorder within a thought disorder spectrum', relatedTerms: ['Hierarchical Taxonomy of Psychopathology'] },
        { term: 'Biotype classification', definition: 'Data-driven clustering across the psychosis-mood spectrum identifying treatment-relevant subtypes that cut across DSM categories' },
      ],
      clinicalNotes: 'The nosological status of schizoaffective disorder will likely evolve significantly in DSM-6 and future classification systems. For now, treat the symptom domains present (psychosis + mood) regardless of exact diagnostic label. Biotype-guided treatment is in research phase but represents the future of transdiagnostic psychiatry. Ketamine for schizoaffective depressive episodes requires careful monitoring for psychotic exacerbation.',
    },
  },

  media: [],
  citations: [
    { id: 'dsm5-tr-sa', type: 'textbook', title: 'DSM-5-TR: Schizoaffective Disorder', authors: ['American Psychiatric Association'], source: 'American Psychiatric Publishing', license: 'Proprietary' },
    { id: 'kotov-2017', type: 'article', title: 'The Hierarchical Taxonomy of Psychopathology (HiTOP)', authors: ['Roman Kotov et al.'], source: 'Journal of Abnormal Psychology' },
  ],
  crossReferences: [
    { targetId: 'psychiatry-schizophrenia', targetType: 'condition', relationship: 'related', label: 'Schizophrenia (diagnostic overlap)' },
    { targetId: 'psychiatry-bipolar-disorder', targetType: 'condition', relationship: 'related', label: 'Bipolar Disorder (mood component)' },
    { targetId: 'psychiatry-antipsychotics', targetType: 'topic', relationship: 'related', label: 'Antipsychotics (pharmacotherapy)' },
  ],
  tags: {
    systems: ['nervous'],
    topics: ['psychiatry', 'psychopharmacology', 'nosology'],
    keywords: ['schizoaffective', 'psychosis', 'mood disorder', 'paliperidone', 'Kraepelinian dichotomy', 'spectrum', 'transdiagnostic'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['psychiatry'] },
  },
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
  contributors: ['SOMA Medical Education Team'],
};
