/**
 * Mental Health Conditions Database
 *
 * Comprehensive database of psychiatric conditions for SOMA medical education.
 * Covers mood, anxiety, psychotic, personality, substance-use, eating,
 * neurodevelopmental, and trauma-related disorders.
 */

// ─── Types ───────────────────────────────────────────────────────────────────

export type MentalHealthCategory =
  | 'mood'
  | 'anxiety'
  | 'psychotic'
  | 'personality'
  | 'substance-use'
  | 'eating'
  | 'neurodevelopmental'
  | 'trauma';

export interface MentalHealthEntry {
  id: string;
  name: string;
  nameEs: string;
  category: MentalHealthCategory;
  icd11: string;
  description: string;
  pathophysiology: string;
  clinicalFeatures: string[];
  diagnostics: string[];
  treatment: string[];
  complications: string[];
  patientExplanation: string;
  emergencySigns: string[];
}

// ─── Helper ──────────────────────────────────────────────────────────────────

const mh = (
  id: string,
  name: string,
  nameEs: string,
  category: MentalHealthCategory,
  icd11: string,
  description: string,
  pathophysiology: string,
  clinicalFeatures: string[],
  diagnostics: string[],
  treatment: string[],
  complications: string[],
  patientExplanation: string,
  emergencySigns: string[],
): MentalHealthEntry => ({
  id, name, nameEs, category, icd11, description, pathophysiology,
  clinicalFeatures, diagnostics, treatment, complications,
  patientExplanation, emergencySigns,
});

// ─── Database ────────────────────────────────────────────────────────────────

export const MENTAL_HEALTH_CONDITIONS: Record<string, MentalHealthEntry> = {

  // ━━━ MOOD DISORDERS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  'major-depressive-disorder': mh(
    'major-depressive-disorder',
    'Major Depressive Disorder',
    'Trastorno Depresivo Mayor',
    'mood',
    '6A70',
    'Persistent depressed mood or anhedonia with neurovegetative symptoms lasting at least 2 weeks, causing significant functional impairment.',
    'Monoamine deficiency (serotonin, norepinephrine, dopamine), HPA axis dysregulation with elevated cortisol, reduced BDNF and hippocampal neuroplasticity, neuroinflammation with elevated pro-inflammatory cytokines (IL-6, TNF-alpha), and disrupted default mode network connectivity.',
    [
      'Depressed mood most of the day, nearly every day',
      'Anhedonia — markedly diminished interest or pleasure',
      'Significant weight loss or gain; appetite change',
      'Insomnia or hypersomnia',
      'Psychomotor agitation or retardation',
      'Fatigue or loss of energy',
      'Feelings of worthlessness or excessive guilt',
      'Diminished concentration or indecisiveness',
      'Recurrent thoughts of death or suicidal ideation',
    ],
    [
      'DSM-5: ≥5/9 symptoms for ≥2 weeks (must include depressed mood or anhedonia)',
      'PHQ-9 screening (score ≥10 moderate, ≥20 severe)',
      'Rule out hypothyroidism (TSH), anemia (CBC), substance use',
      'Columbia Suicide Severity Rating Scale (C-SSRS) for risk assessment',
    ],
    [
      'First-line: SSRIs (sertraline, escitalopram) or SNRIs (venlafaxine, duloxetine)',
      'Psychotherapy: CBT, interpersonal therapy (IPT)',
      'Augmentation: atypical antipsychotics (aripiprazole), lithium, thyroid hormone',
      'Treatment-resistant: esketamine (Spravato), ECT, TMS',
      'Lifestyle: exercise, sleep hygiene, social support',
    ],
    [
      'Suicide (up to 15% lifetime risk in severe cases)',
      'Functional impairment — work, relationships, self-care',
      'Cardiovascular disease (independent risk factor)',
      'Substance use disorders (comorbid in ~30%)',
      'Chronic pain syndromes',
    ],
    'Depression is a medical condition where chemical changes in the brain cause persistent sadness, loss of interest, and difficulty with daily life. It is not a personal weakness — effective treatments exist including therapy and medication.',
    [
      'Active suicidal ideation with plan or intent',
      'Psychotic features (hallucinations, delusions)',
      'Inability to care for self (not eating, not drinking)',
      'Catatonia',
    ],
  ),

  'bipolar-i-disorder': mh(
    'bipolar-i-disorder',
    'Bipolar I Disorder',
    'Trastorno Bipolar I',
    'mood',
    '6A60',
    'Characterized by at least one manic episode (≥7 days or requiring hospitalization) with or without depressive episodes. Mania involves elevated or irritable mood with increased energy.',
    'Dysregulated monoamine signaling (elevated dopamine during mania), mitochondrial dysfunction, altered circadian rhythm genes (CLOCK, BMAL1), reduced prefrontal cortical thickness, and abnormal intracellular calcium signaling.',
    [
      'Mania: elevated, expansive, or irritable mood with increased energy ≥7 days',
      'Decreased need for sleep',
      'Grandiosity or inflated self-esteem',
      'Pressured speech, flight of ideas',
      'Distractibility and increased goal-directed activity',
      'Reckless behavior (spending sprees, sexual indiscretions)',
      'Depressive episodes: similar to MDD',
    ],
    [
      'DSM-5: ≥1 manic episode (≥3 DIGFAST criteria with elevated mood, ≥4 if only irritable)',
      'Young Mania Rating Scale (YMRS) for severity',
      'Rule out substance-induced mania (stimulants, steroids)',
      'Thyroid function, toxicology screen, brain imaging if first episode',
    ],
    [
      'Mood stabilizers: lithium (first-line), valproate, carbamazepine',
      'Atypical antipsychotics: quetiapine, olanzapine, aripiprazole',
      'Acute mania: antipsychotics ± mood stabilizer; benzodiazepines for agitation',
      'Bipolar depression: quetiapine, lurasidone, lamotrigine',
      'Avoid antidepressant monotherapy (risk of mania switch)',
    ],
    [
      'Suicide (25-50% attempt; 15-20% complete)',
      'Substance use disorders (comorbid in >50%)',
      'Psychotic features during mania',
      'Rapid cycling (≥4 episodes/year)',
      'Metabolic syndrome from medications',
    ],
    'Bipolar disorder causes extreme mood swings — periods of very high energy and activity (mania) alternating with periods of depression. Medications called mood stabilizers help keep your mood balanced.',
    [
      'Acute mania with psychosis or severe agitation',
      'Suicidal ideation or attempt',
      'Mixed features (simultaneous mania and depression)',
      'Inability to sleep for days',
      'Dangerous impulsive behavior',
    ],
  ),

  'bipolar-ii-disorder': mh(
    'bipolar-ii-disorder',
    'Bipolar II Disorder',
    'Trastorno Bipolar II',
    'mood',
    '6A61',
    'Characterized by recurrent depressive episodes and at least one hypomanic episode (≥4 days), without full manic episodes. Depression predominates the clinical course.',
    'Similar to Bipolar I but with relatively less dopaminergic excess. Greater serotonergic dysfunction underlies the depressive predominance. Genetic overlap with Bipolar I but distinct polygenic risk profile.',
    [
      'Hypomania: elevated or irritable mood with increased energy lasting ≥4 days',
      'Hypomanic symptoms do NOT cause marked impairment or require hospitalization',
      'No psychotic features during hypomania',
      'Recurrent major depressive episodes (predominant illness burden)',
      'Atypical depressive features common (hypersomnia, leaden paralysis, rejection sensitivity)',
    ],
    [
      'DSM-5: ≥1 hypomanic episode + ≥1 major depressive episode; no history of mania',
      'Mood Disorder Questionnaire (MDQ) screening',
      'Careful history to distinguish hypomania from baseline personality',
      'Collateral information from family/friends often essential',
    ],
    [
      'Lamotrigine: first-line for bipolar II depression',
      'Quetiapine for acute depression',
      'Lithium for mood stabilization and suicide risk reduction',
      'Caution with antidepressants — use only with mood stabilizer',
      'Psychotherapy: CBT, interpersonal and social rhythm therapy (IPSRT)',
    ],
    [
      'Suicide risk (higher attempt rate than Bipolar I)',
      'Chronic depression and functional impairment',
      'Misdiagnosis as unipolar depression (average 8-year diagnostic delay)',
      'Substance use disorders',
      'Anxiety disorders comorbidity (>50%)',
    ],
    'Bipolar II involves episodes of depression along with periods of mildly elevated mood and energy called hypomania. The depressive episodes are usually the bigger challenge. Mood-stabilizing medications and therapy can help.',
    [
      'Suicidal ideation or self-harm',
      'Severe depression with inability to function',
      'Switch to full mania (reclassify as Bipolar I)',
      'Psychotic features during depression',
    ],
  ),

  'persistent-depressive-disorder': mh(
    'persistent-depressive-disorder',
    'Persistent Depressive Disorder (Dysthymia)',
    'Trastorno Depresivo Persistente (Distimia)',
    'mood',
    '6A72',
    'Chronic depressed mood lasting at least 2 years in adults (1 year in children), with milder but persistent symptoms compared to MDD.',
    'Chronic low-grade serotonergic and noradrenergic dysfunction, elevated baseline cortisol, reduced hippocampal volume over time, and entrenched negative cognitive schemas reinforcing depressive processing.',
    [
      'Depressed mood most days for ≥2 years',
      'Poor appetite or overeating',
      'Insomnia or hypersomnia',
      'Low energy or fatigue',
      'Low self-esteem',
      'Poor concentration or difficulty making decisions',
      'Feelings of hopelessness',
    ],
    [
      'DSM-5: depressed mood ≥2 years + ≥2 associated symptoms',
      'No symptom-free period >2 months',
      'May co-occur with MDD ("double depression")',
      'PHQ-9 and longitudinal symptom tracking',
    ],
    [
      'Combined psychotherapy + pharmacotherapy most effective',
      'SSRIs or SNRIs (same agents as MDD)',
      'CBT targeting chronic cognitive distortions',
      'CBASP (Cognitive Behavioral Analysis System of Psychotherapy) — developed for chronic depression',
      'Long-term treatment often necessary',
    ],
    [
      'Double depression (superimposed MDD episodes)',
      'Chronic functional impairment',
      'Relationship and occupational difficulties',
      'Increased risk for MDD and substance use',
    ],
    'Dysthymia is a long-lasting form of depression where you feel down most of the time for years. Though less intense than major depression, it can significantly affect your quality of life. A combination of therapy and medication works best.',
    [
      'Suicidal thoughts emerging from chronic hopelessness',
      'Acute worsening into major depressive episode',
      'Development of psychotic features',
    ],
  ),

  // ━━━ ANXIETY DISORDERS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  'generalized-anxiety-disorder': mh(
    'generalized-anxiety-disorder',
    'Generalized Anxiety Disorder',
    'Trastorno de Ansiedad Generalizada',
    'anxiety',
    '6B00',
    'Excessive, uncontrollable worry about multiple life domains lasting at least 6 months, accompanied by somatic symptoms of arousal.',
    'Amygdala hyperactivity with reduced prefrontal cortex regulatory control, GABA deficiency, serotonergic dysfunction, elevated noradrenergic tone, and corticotropin-releasing hormone (CRH) excess driving chronic arousal.',
    [
      'Excessive anxiety and worry about multiple events or activities',
      'Difficulty controlling worry',
      'Restlessness or feeling keyed up',
      'Easy fatigability',
      'Difficulty concentrating or mind going blank',
      'Irritability',
      'Muscle tension',
      'Sleep disturbance',
    ],
    [
      'DSM-5: excessive worry ≥6 months + ≥3/6 somatic symptoms',
      'GAD-7 screening (score ≥10 moderate, ≥15 severe)',
      'Rule out hyperthyroidism, pheochromocytoma, caffeine excess',
      'Differentiate from panic disorder, social anxiety, OCD',
    ],
    [
      'First-line: SSRIs (escitalopram, sertraline) or SNRIs (venlafaxine, duloxetine)',
      'CBT with cognitive restructuring and worry exposure',
      'Buspirone (5-HT1A partial agonist) — anxiolytic without dependence',
      'Short-term benzodiazepines for acute anxiety (avoid long-term)',
      'Pregabalin (evidence-based in Europe)',
    ],
    [
      'Major depressive disorder (comorbid in ~60%)',
      'Substance use (self-medication with alcohol)',
      'Somatic symptom amplification',
      'Functional impairment and reduced quality of life',
      'Cardiovascular risk from chronic sympathetic activation',
    ],
    'Generalized anxiety means your brain gets stuck in worry mode — constantly anticipating problems even when things are fine. It is not just being a worrier; it is a treatable medical condition. Therapy and medication can help turn down the volume on worry.',
    [
      'Panic attacks with chest pain (rule out cardiac)',
      'Suicidal ideation from chronic suffering',
      'Severe functional impairment (unable to work or leave home)',
    ],
  ),

  'panic-disorder': mh(
    'panic-disorder',
    'Panic Disorder',
    'Trastorno de Pánico',
    'anxiety',
    '6B01',
    'Recurrent unexpected panic attacks with persistent concern about future attacks or maladaptive behavioral changes to avoid them.',
    'Dysregulated locus coeruleus (noradrenergic center) firing, CO2 hypersensitivity in brainstem chemoreceptors, amygdala hyperreactivity, catastrophic misinterpretation of somatic sensations, and genetic variants in serotonin and GABA receptor genes.',
    [
      'Recurrent unexpected panic attacks peaking within minutes',
      'Palpitations, sweating, trembling',
      'Shortness of breath, chest pain',
      'Nausea, dizziness, paresthesias',
      'Derealization or depersonalization',
      'Fear of losing control or dying',
      'Persistent concern about additional attacks',
      'Avoidance behavior (may develop agoraphobia)',
    ],
    [
      'DSM-5: recurrent unexpected panic attacks + ≥1 month of worry or behavioral change',
      'Panic Disorder Severity Scale (PDSS)',
      'Must rule out cardiac (ECG, troponin), pulmonary (PE), endocrine (pheochromocytoma, hyperthyroidism)',
      'Toxicology screen (stimulants, cannabis)',
    ],
    [
      'CBT with interoceptive exposure (gold standard)',
      'SSRIs: sertraline, paroxetine, fluoxetine',
      'SNRIs: venlafaxine',
      'Benzodiazepines: short-term bridge (clonazepam, alprazolam)',
      'Patient education: panic attacks are not dangerous',
    ],
    [
      'Agoraphobia (avoidance of places where escape is difficult)',
      'Depression comorbidity',
      'Substance use (alcohol, benzodiazepine misuse)',
      'Frequent ER visits for perceived cardiac events',
      'Significant quality of life reduction',
    ],
    'Panic attacks are sudden surges of intense fear with physical symptoms like racing heart and shortness of breath. They feel terrifying but are not dangerous. Treatment teaches your brain that these sensations are a false alarm.',
    [
      'Chest pain or dyspnea requiring cardiac workup',
      'Suicidal ideation',
      'Severe agoraphobia with inability to leave home',
    ],
  ),

  'social-anxiety-disorder': mh(
    'social-anxiety-disorder',
    'Social Anxiety Disorder',
    'Trastorno de Ansiedad Social',
    'anxiety',
    '6B04',
    'Marked fear or anxiety about social situations where the individual is exposed to possible scrutiny by others, lasting ≥6 months.',
    'Heightened amygdala and insula reactivity to social threat cues, reduced prefrontal cortex top-down regulation, serotonergic dysfunction, dopaminergic hypoactivity in reward circuits, and exaggerated cortisol response to social stress.',
    [
      'Intense fear of social situations and being judged',
      'Fear of acting in embarrassing ways or showing anxiety symptoms',
      'Social situations almost always provoke anxiety',
      'Avoidance of feared social situations',
      'Blushing, sweating, trembling, nausea in social settings',
      'Difficulty speaking, mind going blank',
      'Distress disproportionate to actual threat',
    ],
    [
      'DSM-5: marked fear of social situations ≥6 months with avoidance/endurance',
      'Liebowitz Social Anxiety Scale (LSAS)',
      'Distinguish from avoidant personality disorder, selective mutism, autism',
      'Specify performance-only subtype if limited to public speaking',
    ],
    [
      'CBT with exposure and cognitive restructuring (gold standard)',
      'SSRIs: paroxetine, sertraline (FDA-approved)',
      'SNRIs: venlafaxine XR',
      'Performance-only: beta-blockers (propranolol) as needed',
      'MAOIs (phenelzine) effective but reserved for refractory cases',
    ],
    [
      'Major depression (comorbid in 50-70%)',
      'Alcohol use disorder (self-medication)',
      'Academic and occupational underachievement',
      'Social isolation and loneliness',
      'Avoidant personality traits',
    ],
    'Social anxiety is more than shyness — it is an intense fear of being judged or embarrassed in social situations. Your brain overreacts to social situations as if they were dangerous. Therapy helps you gradually face feared situations and build confidence.',
    [
      'Complete social withdrawal',
      'Suicidal ideation from isolation and impairment',
      'Substance abuse escalation',
    ],
  ),

  'obsessive-compulsive-disorder': mh(
    'obsessive-compulsive-disorder',
    'Obsessive-Compulsive Disorder',
    'Trastorno Obsesivo-Compulsivo',
    'anxiety',
    '6B20',
    'Characterized by recurrent, intrusive obsessions and/or repetitive compulsions performed to reduce distress, consuming significant time and causing impairment.',
    'Hyperactivity of the cortico-striato-thalamo-cortical (CSTC) circuit, particularly orbitofrontal cortex and caudate nucleus. Serotonergic dysfunction (only responds to serotonergic agents). Glutamate excess in striatum. Genetic heritability ~40-50%.',
    [
      'Obsessions: contamination fears, harm/aggression, symmetry, forbidden thoughts',
      'Compulsions: washing/cleaning, checking, ordering, mental rituals',
      'Time-consuming (>1 hour/day) or causing significant distress',
      'Insight varies: good, poor, or absent',
      'Ego-dystonic (recognized as irrational in most cases)',
      'Avoidance of triggers',
    ],
    [
      'DSM-5: obsessions and/or compulsions causing distress or impairment',
      'Yale-Brown Obsessive Compulsive Scale (Y-BOCS)',
      'Note: classified separately from anxiety in DSM-5 (OCD-related disorders)',
      'Rule out body dysmorphic disorder, hoarding, trichotillomania',
    ],
    [
      'First-line: high-dose SSRIs (fluoxetine 40-80mg, fluvoxamine, sertraline)',
      'Clomipramine (TCA — most effective but more side effects)',
      'ERP: Exposure and Response Prevention (gold standard psychotherapy)',
      'Augmentation: low-dose antipsychotics (aripiprazole, risperidone)',
      'Refractory: DBS, ablative neurosurgery (cingulotomy), TMS',
    ],
    [
      'Major depression (67% lifetime comorbidity)',
      'Skin damage from excessive washing',
      'Social isolation and relationship dysfunction',
      'Tic disorders (especially in childhood-onset)',
      'Functional impairment in work and daily activities',
    ],
    'OCD causes unwanted, distressing thoughts (obsessions) that lead to repetitive behaviors (compulsions) done to relieve anxiety. The brain gets stuck in a loop. Treatment with specific therapy (ERP) and medication can break this cycle.',
    [
      'Suicidal ideation from severe OCD',
      'Self-harm from compulsions (skin damage, ingestion)',
      'Complete functional inability',
      'Psychotic-level poor insight',
    ],
  ),

  // ━━━ PSYCHOTIC DISORDERS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  'schizophrenia': mh(
    'schizophrenia',
    'Schizophrenia',
    'Esquizofrenia',
    'psychotic',
    '6A20',
    'Chronic psychotic disorder characterized by positive symptoms (delusions, hallucinations), negative symptoms (flat affect, avolition), and cognitive deficits, with onset typically in late adolescence to early adulthood.',
    'Mesolimbic dopamine hyperactivity (positive symptoms), mesocortical dopamine hypoactivity (negative/cognitive symptoms), glutamate NMDA receptor hypofunction, synaptic pruning excess during adolescence, genetic risk (heritability ~80%), and neuroinflammation with microglial activation.',
    [
      'Positive symptoms: delusions (persecutory, referential, grandiose), hallucinations (auditory most common)',
      'Disorganized speech (tangential, derailment, word salad)',
      'Disorganized or catatonic behavior',
      'Negative symptoms: flat affect, alogia, avolition, anhedonia, social withdrawal',
      'Cognitive deficits: impaired working memory, attention, executive function',
      'Prodromal phase: social withdrawal, declining function, attenuated psychosis',
    ],
    [
      'DSM-5: ≥2 symptoms for ≥1 month (≥1 must be delusions, hallucinations, or disorganized speech)',
      'Continuous disturbance ≥6 months (including prodrome and residual)',
      'Rule out substance-induced psychosis, medical causes (anti-NMDAR encephalitis, neurosyphilis)',
      'Brain MRI (enlarged ventricles, cortical thinning), baseline metabolic panel',
    ],
    [
      'First-generation antipsychotics: haloperidol, chlorpromazine (D2 blockade)',
      'Second-generation antipsychotics: risperidone, olanzapine, quetiapine, aripiprazole',
      'Clozapine for treatment-resistant schizophrenia (requires CBC monitoring for agranulocytosis)',
      'Long-acting injectables (LAIs) for adherence: paliperidone palmitate, aripiprazole lauroxil',
      'Psychosocial: CBT for psychosis, supported employment, social skills training, family psychoeducation',
    ],
    [
      'Suicide (5-10% lifetime mortality)',
      'Substance use disorders (especially nicotine, cannabis)',
      'Metabolic syndrome from antipsychotics',
      'Tardive dyskinesia from long-term antipsychotic use',
      'Cardiovascular disease (20-year reduced life expectancy)',
      'Homelessness and incarceration',
    ],
    'Schizophrenia affects how the brain processes reality, causing symptoms like hearing voices, strong false beliefs, and difficulty thinking clearly. It is a brain condition, not a personality flaw. Medication is essential and helps most people significantly.',
    [
      'Command auditory hallucinations (voices telling to harm self/others)',
      'Acute psychotic agitation with risk of violence',
      'Catatonia (immobility, mutism, posturing)',
      'First episode psychosis (urgent evaluation needed)',
      'Neuroleptic malignant syndrome (fever, rigidity, autonomic instability)',
    ],
  ),

  'schizoaffective-disorder': mh(
    'schizoaffective-disorder',
    'Schizoaffective Disorder',
    'Trastorno Esquizoafectivo',
    'psychotic',
    '6A21',
    'Features of both schizophrenia and a mood disorder (major depressive or manic episode), with psychotic symptoms persisting for ≥2 weeks independent of mood episodes.',
    'Overlapping pathophysiology of schizophrenia (dopaminergic dysregulation) and mood disorders (monoamine dysfunction). Shared genetic risk factors with both conditions. Intermediate neurobiological phenotype between schizophrenia and bipolar disorder.',
    [
      'Meets criteria for schizophrenia (delusions, hallucinations, disorganized speech)',
      'Concurrent major depressive or manic episode',
      'Psychotic symptoms present for ≥2 weeks without mood symptoms',
      'Mood symptoms present for majority of illness duration',
      'Bipolar type: manic episodes (± depression)',
      'Depressive type: only depressive episodes',
    ],
    [
      'DSM-5: concurrent psychotic and mood symptoms + ≥2 weeks psychosis without mood episode',
      'Longitudinal history essential (distinguish from schizophrenia with mood symptoms)',
      'Rule out substance-induced and medical conditions',
      'Mood episode present for majority of total illness duration',
    ],
    [
      'Antipsychotics (same agents as schizophrenia) — mainstay',
      'Mood stabilizers: lithium, valproate (bipolar type)',
      'Antidepressants: SSRIs for depressive type (with antipsychotic)',
      'Psychosocial interventions similar to schizophrenia',
      'Avoid antidepressant monotherapy in bipolar type',
    ],
    [
      'Suicide risk (similar to schizophrenia)',
      'Chronic functional impairment',
      'Substance use comorbidity',
      'Treatment resistance',
      'Diagnostic instability over time',
    ],
    'Schizoaffective disorder combines symptoms of schizophrenia (like hearing voices or false beliefs) with mood disorder symptoms (depression or mania). Treatment typically involves both antipsychotic medication and mood-stabilizing medication.',
    [
      'Active suicidal or homicidal ideation',
      'Acute psychotic episode with agitation',
      'Manic episode with psychotic features',
      'Inability to care for self',
    ],
  ),

  'brief-psychotic-disorder': mh(
    'brief-psychotic-disorder',
    'Brief Psychotic Disorder',
    'Trastorno Psicótico Breve',
    'psychotic',
    '6A23',
    'Sudden onset of psychotic symptoms (delusions, hallucinations, disorganized speech or behavior) lasting at least 1 day but less than 1 month, with full return to baseline.',
    'Acute dopaminergic surge, often stress-precipitated. May involve acute neuroinflammatory response. Serotonergic and glutamatergic perturbation. Genetic vulnerability may lower threshold for stress-induced psychosis.',
    [
      'Sudden onset of delusions, hallucinations, or disorganized speech',
      'Grossly disorganized or catatonic behavior',
      'Duration: ≥1 day but <1 month',
      'Full return to premorbid functioning',
      'Often precipitated by severe psychosocial stress',
      'Emotional turmoil and confusion prominent',
    ],
    [
      'DSM-5: ≥1 psychotic symptom lasting 1 day to <1 month',
      'Specify: with/without marked stressor, with peripartum onset',
      'Rule out substance-induced psychosis (urine toxicology)',
      'Rule out medical causes (delirium, autoimmune encephalitis)',
    ],
    [
      'Short-term antipsychotics for acute symptom control',
      'Benzodiazepines for agitation and insomnia',
      'Supportive psychotherapy',
      'Brief hospitalization if safety risk',
      'Taper medications after resolution; monitor for recurrence',
    ],
    [
      'Recurrence in ~50% of cases',
      'Risk of progression to schizophrenia or bipolar disorder',
      'Self-harm or harm to others during acute episode',
      'Post-episode depression or anxiety',
    ],
    'Brief psychotic disorder is a short episode where someone temporarily loses touch with reality, often triggered by extreme stress. It resolves within a month, but monitoring is important because symptoms can return.',
    [
      'Risk of harm to self or others during psychosis',
      'Inability to care for self',
      'Peripartum onset (risk to mother and infant)',
      'Severe agitation requiring emergency intervention',
    ],
  ),

  // ━━━ PERSONALITY DISORDERS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  'borderline-personality-disorder': mh(
    'borderline-personality-disorder',
    'Borderline Personality Disorder',
    'Trastorno Límite de la Personalidad',
    'personality',
    '6D10',
    'Pervasive pattern of instability in interpersonal relationships, self-image, and affect, with marked impulsivity beginning by early adulthood.',
    'Amygdala hyperreactivity with reduced prefrontal cortex regulation, disrupted frontolimbic connectivity, reduced oxytocin receptor expression, epigenetic changes from early adversity, serotonergic dysfunction (impulsivity), and opioid system dysregulation (interpersonal pain sensitivity).',
    [
      'Frantic efforts to avoid real or imagined abandonment',
      'Unstable and intense interpersonal relationships (idealization/devaluation)',
      'Identity disturbance — markedly unstable self-image',
      'Impulsivity (spending, sex, substances, reckless driving, binge eating)',
      'Recurrent suicidal behavior, gestures, or self-harm',
      'Affective instability — marked reactivity of mood',
      'Chronic feelings of emptiness',
      'Inappropriate, intense anger',
      'Transient paranoid ideation or dissociation under stress',
    ],
    [
      'DSM-5: ≥5/9 criteria with pervasive pattern from early adulthood',
      'ICD-11 dimensional model: personality disorder with borderline pattern',
      'McLean Screening Instrument for BPD',
      'Thorough assessment for comorbid conditions (PTSD, depression, substance use)',
    ],
    [
      'Dialectical Behavior Therapy (DBT) — gold standard',
      'Mentalization-Based Therapy (MBT)',
      'Transference-Focused Psychotherapy (TFP)',
      'Schema-focused therapy',
      'Pharmacotherapy is adjunctive only: target specific symptoms (mood stabilizers, low-dose antipsychotics, SSRIs)',
    ],
    [
      'Completed suicide (8-10% lifetime rate)',
      'Non-suicidal self-injury (>70%)',
      'Comorbid mood and anxiety disorders',
      'Substance use disorders',
      'Eating disorders',
      'Chronic interpersonal dysfunction',
    ],
    'BPD involves intense emotions, unstable relationships, and difficulty with self-identity. It often stems from early life experiences. A specific type of therapy called DBT teaches skills to manage emotions, tolerate distress, and improve relationships.',
    [
      'Active suicidal ideation or attempt',
      'Severe self-harm requiring medical attention',
      'Psychotic symptoms under stress',
      'Substance intoxication or overdose',
    ],
  ),

  'antisocial-personality-disorder': mh(
    'antisocial-personality-disorder',
    'Antisocial Personality Disorder',
    'Trastorno de Personalidad Antisocial',
    'personality',
    '6D10',
    'Pervasive pattern of disregard for and violation of the rights of others since age 15, with evidence of conduct disorder before age 15.',
    'Reduced amygdala volume and reactivity (diminished fear response), prefrontal cortex hypofunction (impaired decision-making), low resting cortisol and heart rate (reduced autonomic arousal), serotonergic dysfunction (impulsivity/aggression), and genetic influences (MAO-A variants interacting with childhood maltreatment).',
    [
      'Failure to conform to social norms and lawful behaviors',
      'Deceitfulness (lying, conning others for profit or pleasure)',
      'Impulsivity and failure to plan ahead',
      'Irritability and aggressiveness (repeated fights, assaults)',
      'Reckless disregard for safety of self or others',
      'Consistent irresponsibility (work, financial obligations)',
      'Lack of remorse (indifferent to or rationalizes hurting others)',
    ],
    [
      'DSM-5: ≥3/7 criteria; age ≥18; evidence of conduct disorder before age 15',
      'Psychopathy Checklist-Revised (PCL-R) for psychopathic traits (distinct from ASPD)',
      'Conduct disorder history essential for diagnosis',
      'Rule out substance-induced behavior, bipolar disorder, head injury',
    ],
    [
      'Limited evidence for effective treatments',
      'Cognitive-behavioral interventions targeting criminogenic thinking',
      'Therapeutic communities (structured programs)',
      'Pharmacotherapy: SSRIs or mood stabilizers for aggression and impulsivity',
      'Treat comorbid conditions (substance use, ADHD, depression)',
    ],
    [
      'Substance use disorders (very high comorbidity)',
      'Incarceration and legal problems',
      'Traumatic injuries and premature death',
      'Relationship dysfunction and domestic violence',
      'Comorbid mood and anxiety disorders',
    ],
    'Antisocial personality disorder involves a long-standing pattern of disregarding others\' rights, often beginning in adolescence. Treatment focuses on managing behaviors and addressing substance use or other mental health conditions.',
    [
      'Threats of violence to self or others',
      'Acute aggression or assault',
      'Substance intoxication with violent behavior',
      'Suicidal ideation (often impulsive)',
    ],
  ),

  'narcissistic-personality-disorder': mh(
    'narcissistic-personality-disorder',
    'Narcissistic Personality Disorder',
    'Trastorno de Personalidad Narcisista',
    'personality',
    '6D10',
    'Pervasive pattern of grandiosity, need for admiration, and lack of empathy, beginning in early adulthood.',
    'Altered default mode network (exaggerated self-referential processing), reduced anterior insula activity (impaired empathy), fragile self-esteem masked by grandiosity, possible disrupted attachment circuitry, and environmental factors including childhood overvaluation or neglect.',
    [
      'Grandiose sense of self-importance',
      'Preoccupied with fantasies of unlimited success, power, or beauty',
      'Believes they are "special" and should associate only with high-status people',
      'Requires excessive admiration',
      'Sense of entitlement',
      'Interpersonally exploitative',
      'Lacks empathy',
      'Envious of others or believes others are envious of them',
      'Arrogant, haughty behaviors or attitudes',
    ],
    [
      'DSM-5: ≥5/9 criteria with pervasive pattern from early adulthood',
      'Distinguish grandiose vs. vulnerable narcissism',
      'Rule out bipolar disorder (grandiosity in mania), substance-induced behavior',
      'Narcissistic Personality Inventory (NPI) for research; clinical interview for diagnosis',
    ],
    [
      'Psychotherapy (long-term): psychodynamic or schema-focused',
      'Transference-focused psychotherapy (TFP)',
      'CBT targeting interpersonal dysfunction',
      'No specific pharmacotherapy; treat comorbid depression/anxiety',
      'Patients often present for treatment of comorbid conditions rather than NPD itself',
    ],
    [
      'Depression (narcissistic injury, aging, failure)',
      'Substance use disorders',
      'Relationship failures and social isolation',
      'Occupational difficulties despite perceived competence',
      'Suicidal ideation (especially after narcissistic injury)',
    ],
    'Narcissistic personality disorder involves an inflated sense of self-importance, deep need for admiration, and difficulty empathizing with others. Beneath the surface is often fragile self-esteem. Long-term therapy can help develop healthier self-awareness and relationships.',
    [
      'Suicidal ideation after major narcissistic injury (job loss, rejection)',
      'Severe depression',
      'Aggressive outbursts',
    ],
  ),

  // ━━━ SUBSTANCE USE DISORDERS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  'alcohol-use-disorder': mh(
    'alcohol-use-disorder',
    'Alcohol Use Disorder',
    'Trastorno por Consumo de Alcohol',
    'substance-use',
    '6C40',
    'Problematic pattern of alcohol use leading to clinically significant impairment or distress, characterized by impaired control, social impairment, risky use, and pharmacological tolerance/withdrawal.',
    'Alcohol enhances GABA inhibition and inhibits glutamate (NMDA) excitation, producing sedation and reward. Chronic use causes GABA receptor downregulation and glutamate receptor upregulation, leading to withdrawal hyperexcitability. Mesolimbic dopamine pathway mediates reinforcement. Neuroadaptations in prefrontal cortex impair executive control.',
    [
      'Drinking more or longer than intended',
      'Unsuccessful efforts to cut down',
      'Significant time spent obtaining, using, or recovering from alcohol',
      'Craving',
      'Failure to fulfill major role obligations',
      'Continued use despite social/interpersonal problems',
      'Tolerance (need more for same effect)',
      'Withdrawal (tremor, sweating, anxiety, seizures, delirium tremens)',
    ],
    [
      'DSM-5: ≥2/11 criteria within 12 months (mild: 2-3, moderate: 4-5, severe: ≥6)',
      'AUDIT (Alcohol Use Disorders Identification Test) screening',
      'CAGE questionnaire (Cut down, Annoyed, Guilty, Eye-opener)',
      'Labs: elevated GGT, MCV, AST:ALT ratio >2:1, CDT (carbohydrate-deficient transferrin)',
    ],
    [
      'Withdrawal management: benzodiazepines (chlordiazepoxide, lorazepam) using CIWA protocol',
      'Thiamine supplementation (prevent Wernicke encephalopathy)',
      'Naltrexone (opioid antagonist — reduces craving)',
      'Acamprosate (glutamate modulator — maintains abstinence)',
      'Disulfiram (aversive — causes nausea if alcohol consumed)',
      'Psychosocial: motivational interviewing, CBT, 12-step programs (AA)',
    ],
    [
      'Delirium tremens (5% mortality if untreated)',
      'Wernicke-Korsakoff syndrome (thiamine deficiency)',
      'Alcoholic liver disease (steatosis, hepatitis, cirrhosis)',
      'Pancreatitis',
      'Cardiomyopathy',
      'Peripheral neuropathy',
      'Fetal alcohol spectrum disorder',
    ],
    'Alcohol use disorder means alcohol has taken control over your drinking — you may find it hard to stop, need more to feel the same effect, or feel sick without it. It is a medical condition with effective treatments including medication and counseling.',
    [
      'Delirium tremens (confusion, seizures, autonomic instability) — medical emergency',
      'Withdrawal seizures',
      'Suicidal ideation while intoxicated',
      'Wernicke encephalopathy (confusion, ataxia, ophthalmoplegia) — give IV thiamine immediately',
      'GI bleeding from varices',
    ],
  ),

  'opioid-use-disorder': mh(
    'opioid-use-disorder',
    'Opioid Use Disorder',
    'Trastorno por Consumo de Opioides',
    'substance-use',
    '6C43',
    'Problematic pattern of opioid use leading to significant impairment, with compulsive use despite harm, tolerance, and withdrawal.',
    'Opioids activate mu-opioid receptors in the ventral tegmental area, releasing dopamine in the nucleus accumbens (reward). Chronic use downregulates endogenous opioid system, alters stress circuitry (amygdala, CRF), and causes neuroplastic changes in prefrontal cortex reducing inhibitory control. Withdrawal reflects noradrenergic rebound (locus coeruleus hyperactivity).',
    [
      'Compulsive opioid use despite negative consequences',
      'Craving',
      'Tolerance (escalating doses)',
      'Withdrawal: dysphoria, nausea, muscle aches, lacrimation, rhinorrhea, diarrhea, piloerection, pupil dilation',
      'Social/occupational impairment',
      'Use in hazardous situations',
      'Continued use despite physical or psychological problems',
    ],
    [
      'DSM-5: ≥2/11 criteria within 12 months',
      'Urine drug screen (detect morphine, codeine, fentanyl, methadone, buprenorphine)',
      'COWS (Clinical Opiate Withdrawal Scale) for withdrawal severity',
      'Screen for HIV, Hepatitis B/C',
    ],
    [
      'Medication-Assisted Treatment (MAT) — gold standard, reduces mortality by 50%',
      'Buprenorphine (partial mu-agonist) — outpatient, sublingual/injectable',
      'Methadone (full mu-agonist) — supervised dosing programs',
      'Naltrexone (extended-release injection) — after full detoxification',
      'Naloxone for overdose reversal (nasal or IM)',
      'Psychosocial: contingency management, CBT, peer support',
    ],
    [
      'Overdose death (respiratory depression) — leading cause of accidental death',
      'Infectious complications: HIV, hepatitis B/C, endocarditis (IV use)',
      'Neonatal abstinence syndrome',
      'Criminal justice involvement',
      'Social disintegration, homelessness',
    ],
    'Opioid use disorder means your brain has become dependent on opioids to function normally. Medications like buprenorphine and methadone are highly effective — they stabilize brain chemistry so you can focus on recovery. This is a treatable medical condition.',
    [
      'Opioid overdose: pinpoint pupils, respiratory depression, unresponsiveness — give naloxone immediately',
      'Suicidal ideation',
      'Severe withdrawal (though not life-threatening, can be precipitant for relapse)',
      'Signs of endocarditis or severe infection',
    ],
  ),

  'stimulant-use-disorder': mh(
    'stimulant-use-disorder',
    'Stimulant Use Disorder',
    'Trastorno por Consumo de Estimulantes',
    'substance-use',
    '6C46',
    'Problematic pattern of stimulant use (cocaine, amphetamines, methamphetamine) causing significant impairment, with compulsive use, craving, and withdrawal.',
    'Stimulants block or reverse dopamine transporters (DAT), flooding the synapse with dopamine. Chronic use depletes dopaminergic reserves and downregulates D2 receptors in the striatum, producing anhedonia and craving. Methamphetamine is directly neurotoxic to dopaminergic terminals. Prefrontal cortex executive dysfunction drives compulsive use.',
    [
      'Compulsive stimulant use despite harm',
      'Intense craving',
      'Euphoria, increased energy, decreased need for sleep during use',
      'Paranoia, agitation, psychosis with heavy use',
      'Withdrawal: fatigue, hypersomnia, dysphoria, increased appetite ("crash")',
      'Tolerance develops rapidly',
      'Neglect of responsibilities and relationships',
    ],
    [
      'DSM-5: ≥2/11 criteria within 12 months; specify cocaine, amphetamine-type, or other',
      'Urine drug screen (cocaine metabolite benzoylecgonine; amphetamines)',
      'Cardiac evaluation (ECG, troponin if chest pain)',
      'Screen for STIs, HIV, hepatitis (risky behavior)',
    ],
    [
      'No FDA-approved pharmacotherapy (unlike opioid or alcohol use disorders)',
      'Contingency management (most effective behavioral treatment)',
      'CBT and motivational interviewing',
      'Investigational: topiramate, bupropion, modafinil, mirtazapine',
      'Manage withdrawal supportively (sleep, nutrition, monitoring)',
      'Treat comorbid psychiatric conditions',
    ],
    [
      'Cardiovascular: MI, stroke, aortic dissection, arrhythmias',
      'Stimulant-induced psychosis',
      'Dental erosion ("meth mouth")',
      'Weight loss and malnutrition',
      'Infectious disease from IV use or risky sexual behavior',
      'Nasal septal perforation (intranasal cocaine)',
    ],
    'Stimulant use disorder involves losing control over cocaine, methamphetamine, or other stimulant use. These drugs hijack the brain\'s reward system. While there is no medication specifically approved, behavioral treatments like contingency management are effective.',
    [
      'Acute intoxication: chest pain, hypertension, hyperthermia — medical emergency',
      'Stimulant-induced psychosis (paranoia, agitation, violence)',
      'Suicidal ideation during crash/withdrawal',
      'Stroke or seizure',
    ],
  ),

  // ━━━ EATING DISORDERS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  'anorexia-nervosa': mh(
    'anorexia-nervosa',
    'Anorexia Nervosa',
    'Anorexia Nerviosa',
    'eating',
    '6B80',
    'Restriction of energy intake leading to significantly low body weight, with intense fear of gaining weight and disturbed body image perception.',
    'Serotonergic dysregulation (5-HT1A and 5-HT2A alterations), hypothalamic dysfunction affecting appetite regulation (elevated ghrelin resistance, low leptin), altered reward circuitry (reduced dopamine response to food), increased cognitive control overriding hunger signals, and genetic heritability of 50-80%.',
    [
      'Restriction of energy intake relative to requirements (significantly low body weight)',
      'Intense fear of gaining weight or becoming fat',
      'Disturbed body image (feels overweight despite being underweight)',
      'Restricting type: dieting, fasting, excessive exercise',
      'Binge-purge type: binge eating + purging (vomiting, laxatives, diuretics)',
      'Amenorrhea (no longer required for diagnosis but common)',
      'Bradycardia, hypothermia, lanugo hair, dry skin',
    ],
    [
      'DSM-5: restriction + low weight + fear of weight gain + body image disturbance',
      'BMI classification: mild (≥17), moderate (16-16.99), severe (15-15.99), extreme (<15)',
      'Labs: CBC (leukopenia), BMP (hypokalemia, metabolic alkalosis if purging), phosphate, magnesium',
      'ECG (QTc prolongation, bradycardia)',
      'DEXA scan for bone density (osteoporosis risk)',
    ],
    [
      'Nutritional rehabilitation (weight restoration is critical)',
      'Refeeding carefully: monitor phosphate (refeeding syndrome risk)',
      'Family-Based Treatment (FBT/Maudsley) — first-line for adolescents',
      'CBT-E (Enhanced CBT) for adults',
      'No strong pharmacotherapy: olanzapine may help with weight gain and anxiety',
      'Hospitalization if BMI <15, vital sign instability, or failed outpatient treatment',
    ],
    [
      'Highest mortality of any psychiatric disorder (5-10% per decade)',
      'Refeeding syndrome (hypophosphatemia, cardiac failure)',
      'Cardiac arrhythmias and sudden death',
      'Osteoporosis and pathologic fractures',
      'Infertility',
      'Brain atrophy (partially reversible with weight restoration)',
    ],
    'Anorexia nervosa is a serious condition where fear of weight gain leads to severe food restriction. Your brain misperceives your body as larger than it is. It is the most medically dangerous psychiatric condition, but recovery is possible with proper treatment.',
    [
      'BMI <15 or rapid weight loss',
      'Heart rate <50 or QTc >500ms',
      'Syncope or electrolyte derangement',
      'Refeeding syndrome (monitor phosphate when starting nutrition)',
      'Suicidal ideation',
      'Hypothermia or hemodynamic instability',
    ],
  ),

  'bulimia-nervosa': mh(
    'bulimia-nervosa',
    'Bulimia Nervosa',
    'Bulimia Nerviosa',
    'eating',
    '6B81',
    'Recurrent episodes of binge eating followed by compensatory behaviors (purging, fasting, excessive exercise), occurring at least once weekly for 3 months.',
    'Serotonergic dysfunction (particularly 5-HT2C), impaired satiety signaling, dysregulated reward and impulse control circuits (ventral striatum), cortisol elevation with stress-driven bingeing, and cholecystokinin (CCK) blunting reducing post-meal satiety.',
    [
      'Recurrent binge eating (large amounts in discrete period with sense of loss of control)',
      'Compensatory behaviors: self-induced vomiting, laxative/diuretic misuse, fasting, excessive exercise',
      'At least 1x/week for 3 months',
      'Self-evaluation unduly influenced by body shape and weight',
      'Often normal weight or slightly overweight',
      'Parotid gland enlargement ("chipmunk cheeks")',
      'Russell sign (knuckle calluses from induced vomiting)',
      'Dental enamel erosion (perimolysis)',
    ],
    [
      'DSM-5: binge eating + compensatory behavior ≥1x/week for ≥3 months + body shape concerns',
      'Distinguish from anorexia nervosa binge-purge type (by weight status)',
      'Labs: hypokalemia, metabolic alkalosis (purging), elevated amylase',
      'Dental examination for enamel erosion',
    ],
    [
      'CBT-E (Enhanced CBT) — gold standard',
      'Fluoxetine 60mg (only FDA-approved medication for bulimia)',
      'Interpersonal psychotherapy (IPT) as alternative',
      'Guided self-help with CBT-based materials',
      'Nutritional counseling for regular eating patterns',
      'Treat comorbid conditions (depression, anxiety, substance use)',
    ],
    [
      'Electrolyte imbalances (hypokalemia — cardiac arrhythmia risk)',
      'Esophageal tears (Mallory-Weiss) or rupture (Boerhaave)',
      'Dental destruction',
      'Chronic parotitis',
      'Metabolic alkalosis from vomiting',
      'Ipecac cardiomyopathy (if used for purging)',
    ],
    'Bulimia involves cycles of eating large amounts of food and then trying to "undo" it through vomiting, laxatives, or excessive exercise. It causes shame and secrecy, but is very treatable. CBT and medication can break the binge-purge cycle.',
    [
      'Severe hypokalemia (cardiac arrhythmia risk)',
      'Hematemesis (esophageal tear)',
      'Suicidal ideation',
      'Syncope or seizure from electrolyte abnormality',
    ],
  ),

  'binge-eating-disorder': mh(
    'binge-eating-disorder',
    'Binge Eating Disorder',
    'Trastorno por Atracón',
    'eating',
    '6B82',
    'Recurrent episodes of binge eating without regular compensatory behaviors, occurring at least once weekly for 3 months, with marked distress.',
    'Impaired dopaminergic reward circuitry (reduced D2 receptor availability), dysregulated hypothalamic appetite centers, elevated cortisol-driven emotional eating, reduced prefrontal cortex inhibitory control over food intake, and genetic overlap with obesity and addictive disorders.',
    [
      'Recurrent binge eating episodes (large amount + loss of control)',
      'Eating rapidly, eating until uncomfortably full',
      'Eating large amounts when not hungry',
      'Eating alone due to embarrassment',
      'Feeling disgusted, depressed, or guilty after bingeing',
      'Marked distress regarding binge eating',
      'No compensatory behaviors (distinguishes from bulimia)',
      'Often associated with overweight or obesity',
    ],
    [
      'DSM-5: binge eating ≥1x/week for ≥3 months with marked distress, without purging',
      'Binge Eating Scale (BES) screening',
      'Assess BMI, metabolic parameters (glucose, lipids, HbA1c)',
      'Rule out medical causes of overeating (Prader-Willi, hypothalamic lesions)',
    ],
    [
      'CBT-E or CBT for binge eating (gold standard)',
      'Lisdexamfetamine (Vyvanse) — only FDA-approved medication for BED',
      'SSRIs (particularly high-dose fluoxetine, sertraline)',
      'Topiramate (off-label; reduces binge frequency and weight)',
      'Interpersonal psychotherapy',
      'Behavioral weight management if obesity present',
    ],
    [
      'Obesity and metabolic syndrome',
      'Type 2 diabetes',
      'Cardiovascular disease',
      'Depression and anxiety comorbidity',
      'Reduced quality of life and social impairment',
    ],
    'Binge eating disorder means regularly eating large amounts of food in a short time while feeling out of control, without purging. It is the most common eating disorder. Treatment helps restore a healthy relationship with food.',
    [
      'Suicidal ideation',
      'Severe metabolic derangement from comorbid obesity',
      'Acute pancreatitis from binge episode',
    ],
  ),

  // ━━━ NEURODEVELOPMENTAL DISORDERS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  'adhd': mh(
    'adhd',
    'Attention-Deficit/Hyperactivity Disorder',
    'Trastorno por Déficit de Atención e Hiperactividad',
    'neurodevelopmental',
    '6A05',
    'Neurodevelopmental disorder characterized by persistent patterns of inattention and/or hyperactivity-impulsivity that interfere with functioning, with onset before age 12.',
    'Prefrontal cortex hypofunction with reduced dopaminergic and noradrenergic signaling, delayed cortical maturation (especially prefrontal regions), reduced striatal volume, altered default mode network deactivation during tasks, and high heritability (~75%) involving DAT1 and DRD4 gene variants.',
    [
      'Inattention: difficulty sustaining attention, careless mistakes, not listening, poor organization',
      'Easily distracted, forgetful in daily activities',
      'Hyperactivity: fidgeting, leaving seat, running/climbing inappropriately',
      'Impulsivity: blurting answers, difficulty waiting turn, interrupting others',
      'Symptoms present before age 12 in ≥2 settings',
      'Adults: internal restlessness, chronic disorganization, emotional dysregulation',
    ],
    [
      'DSM-5: ≥6/9 inattention and/or ≥6/9 hyperactive-impulsive symptoms (≥5 for adults ≥17)',
      'Presentations: predominantly inattentive, predominantly hyperactive-impulsive, combined',
      'Rating scales: Vanderbilt (children), ASRS (adults)',
      'Rule out anxiety, depression, sleep disorders, thyroid dysfunction, substance use',
    ],
    [
      'Stimulants (first-line, 70-80% response): methylphenidate, amphetamine salts',
      'Non-stimulants: atomoxetine (NRI), guanfacine/clonidine (alpha-2 agonists)',
      'Behavioral therapy (especially for children), organizational coaching',
      'Parent training and school accommodations (504/IEP)',
      'Adults: CBT targeting executive dysfunction, medication management',
    ],
    [
      'Academic underachievement and school dropout',
      'Substance use disorders (2x risk; stimulant treatment is protective)',
      'Accidental injuries',
      'Comorbid oppositional defiant disorder, conduct disorder, anxiety, depression',
      'Occupational instability and relationship difficulties in adults',
    ],
    'ADHD means the brain\'s attention and self-control systems work differently. It makes it hard to focus, sit still, or think before acting. It is not laziness or bad behavior — it is a brain wiring difference. Medication and skills training can make a big difference.',
    [
      'Severe impulsivity leading to dangerous behavior',
      'Substance misuse of stimulant medications',
      'Suicidal ideation (higher risk with comorbid conditions)',
      'Psychotic symptoms from stimulant use (rare)',
    ],
  ),

  'autism-spectrum-disorder': mh(
    'autism-spectrum-disorder',
    'Autism Spectrum Disorder',
    'Trastorno del Espectro Autista',
    'neurodevelopmental',
    '6A02',
    'Neurodevelopmental condition characterized by persistent deficits in social communication and social interaction, with restricted, repetitive patterns of behavior, interests, or activities.',
    'Widespread altered connectivity — local overconnectivity with reduced long-range connectivity, synaptic pruning abnormalities (excess synapse density), GABAergic/glutamatergic imbalance, mirror neuron system differences, cerebellar and amygdala volume changes, and highly polygenic (>1000 genes) with de novo mutations contributing.',
    [
      'Deficits in social-emotional reciprocity (reduced sharing of interests, emotions)',
      'Deficits in nonverbal communication (poor eye contact, limited gestures, flat affect)',
      'Difficulty developing and maintaining relationships',
      'Stereotyped or repetitive motor movements, speech, or object use',
      'Insistence on sameness, inflexible routines',
      'Highly restricted, fixated interests',
      'Hyper- or hyporeactivity to sensory input',
    ],
    [
      'DSM-5: deficits in social communication + restricted/repetitive behaviors',
      'Onset in early developmental period (may not manifest until social demands exceed capacity)',
      'Severity levels 1-3 (requiring support to very substantial support)',
      'Screening: M-CHAT-R/F (toddlers), ADOS-2 and ADI-R (comprehensive assessment)',
      'Rule out language disorders, intellectual disability, social anxiety, selective mutism',
    ],
    [
      'Applied Behavior Analysis (ABA) — early intensive behavioral intervention',
      'Speech and language therapy',
      'Occupational therapy (sensory integration, daily living skills)',
      'Social skills training and peer-mediated interventions',
      'No medication for core symptoms; treat comorbidities: irritability (risperidone, aripiprazole), ADHD, anxiety, sleep disorders',
      'Educational supports (IEP, structured environment)',
    ],
    [
      'Intellectual disability (co-occurs in ~30%)',
      'Epilepsy (20-30%)',
      'Anxiety and depression',
      'ADHD (30-60% comorbidity)',
      'GI issues (chronic constipation common)',
      'Sleep disorders (>50%)',
    ],
    'Autism means the brain processes social information and sensory experiences differently. People with autism may communicate differently, prefer routines, and have intense interests. Early support and understanding help individuals with autism thrive.',
    [
      'Self-injurious behavior (head banging, biting)',
      'Severe aggression or agitation',
      'Seizure (epilepsy comorbidity)',
      'Elopement or wandering (safety risk)',
      'Acute catatonia',
    ],
  ),

  'tourette-syndrome': mh(
    'tourette-syndrome',
    'Tourette Syndrome',
    'Síndrome de Tourette',
    'neurodevelopmental',
    '8A05.00',
    'Neurodevelopmental disorder characterized by multiple motor tics and at least one vocal tic present for more than one year, with onset before age 18.',
    'Dysfunction of cortico-striato-thalamo-cortical (CSTC) circuits, excess dopaminergic innervation of the striatum, reduced GABAergic interneurons in the basal ganglia, altered maturation of inhibitory circuits, and genetic heritability (~77%) with polygenic architecture plus rare variants.',
    [
      'Multiple motor tics (eye blinking, head jerking, facial grimacing, shoulder shrugging)',
      'At least one vocal/phonic tic (sniffing, throat clearing, grunting, coprolalia in <15%)',
      'Waxing and waning course with tic changes over time',
      'Premonitory urge before tic execution',
      'Onset before age 18 (typically 4-6 years)',
      'Peak severity in early adolescence, often improves by adulthood',
      'Can suppress tics temporarily but this increases internal tension',
    ],
    [
      'DSM-5: multiple motor tics + ≥1 vocal tic for >1 year; onset <18',
      'Tics need not be concurrent',
      'Clinical diagnosis (no lab test)',
      'Yale Global Tic Severity Scale (YGTSS)',
      'Screen for comorbid ADHD (50-60%) and OCD (30-50%)',
    ],
    [
      'Many patients do not require pharmacotherapy (education and reassurance)',
      'Behavioral: CBIT (Comprehensive Behavioral Intervention for Tics) — first-line',
      'Alpha-2 agonists: guanfacine, clonidine (mild tics, especially with ADHD)',
      'Antipsychotics: aripiprazole, fluphenazine, pimozide (moderate-severe tics)',
      'Treat comorbid ADHD and OCD (stimulants safe; SSRIs for OCD)',
      'Deep brain stimulation (severe, refractory cases)',
    ],
    [
      'ADHD and OCD (most common comorbidities)',
      'Social stigma and bullying',
      'Academic difficulties',
      'Anxiety and depression',
      'Self-injurious tics in severe cases',
    ],
    'Tourette syndrome causes involuntary movements (tics) and sounds that the brain produces automatically. It is not a behavioral choice. Most people with Tourette\'s find their tics improve with age, and effective treatments exist for those who need them.',
    [
      'Self-injurious tics (head banging, eye damage)',
      'Severe social impairment from coprolalia',
      'Suicidal ideation from distress',
      'Malignant tic exacerbation (status tics)',
    ],
  ),

  'intellectual-disability': mh(
    'intellectual-disability',
    'Intellectual Disability',
    'Discapacidad Intelectual',
    'neurodevelopmental',
    '6A00',
    'Neurodevelopmental disorder characterized by deficits in intellectual and adaptive functioning with onset during the developmental period, affecting conceptual, social, and practical domains.',
    'Heterogeneous etiology: genetic causes (Down syndrome, Fragile X, PKU, microdeletions), prenatal factors (alcohol, infections, toxins), perinatal factors (hypoxia, prematurity), postnatal factors (meningitis, trauma, deprivation). Pathology involves altered neuronal migration, synaptogenesis, and dendritic branching.',
    [
      'Deficits in intellectual functions: reasoning, problem solving, abstract thinking, learning',
      'Deficits in adaptive functioning: independence in daily life',
      'Conceptual domain: language, reading, math, memory',
      'Social domain: empathy, social judgment, communication skills',
      'Practical domain: self-care, job responsibilities, managing money',
      'Severity: mild (IQ 50-70), moderate (35-50), severe (20-35), profound (<20)',
    ],
    [
      'DSM-5: deficits in intellectual + adaptive functioning with developmental onset',
      'IQ testing (Wechsler scales) — IQ ~70 or below (2 SD below mean)',
      'Adaptive behavior assessment (Vineland, ABAS)',
      'Genetic testing (karyotype, chromosomal microarray, Fragile X)',
      'Metabolic screening in neonates (PKU, hypothyroidism)',
    ],
    [
      'Early intervention services (birth to 3 years)',
      'Special education with individualized programs (IEP)',
      'Speech, occupational, and physical therapy',
      'Behavioral interventions for challenging behaviors',
      'Pharmacotherapy for comorbid psychiatric conditions (higher rates of ADHD, anxiety, psychosis)',
      'Supported living and vocational training',
    ],
    [
      'Comorbid psychiatric disorders (3-4x higher prevalence)',
      'Epilepsy',
      'Challenging behaviors (aggression, self-injury)',
      'Exploitation and abuse vulnerability',
      'Physical health problems (often under-recognized)',
    ],
    'Intellectual disability means the brain develops and learns differently, affecting thinking skills and daily life abilities. With the right support, education, and therapy, people with intellectual disability can lead fulfilling lives and develop many skills.',
    [
      'Severe self-injurious behavior',
      'Acute behavioral decompensation',
      'Seizure',
      'Signs of abuse or neglect',
      'Medical emergency in non-verbal individual (atypical presentations)',
    ],
  ),

  // ━━━ TRAUMA AND STRESSOR-RELATED DISORDERS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  'ptsd': mh(
    'ptsd',
    'Post-Traumatic Stress Disorder',
    'Trastorno de Estrés Postraumático',
    'trauma',
    '6B40',
    'Develops after exposure to actual or threatened death, serious injury, or sexual violence, with intrusion symptoms, avoidance, negative cognitions/mood, and arousal/reactivity alterations lasting more than 1 month.',
    'Fear conditioning with amygdala hyperactivation, medial prefrontal cortex (vmPFC) hypoactivation (impaired fear extinction), hippocampal volume reduction (impaired contextual memory), HPA axis dysregulation (paradoxically low cortisol with enhanced negative feedback), noradrenergic hyperactivity, and epigenetic modifications (FKBP5 gene methylation).',
    [
      'Intrusion: flashbacks, nightmares, distressing memories, physiological reactivity to reminders',
      'Avoidance: avoiding trauma-related thoughts, feelings, people, places',
      'Negative cognitions/mood: persistent negative beliefs, distorted blame, diminished interest, detachment, inability to feel positive emotions',
      'Arousal/reactivity: hypervigilance, exaggerated startle, irritability, reckless behavior, sleep disturbance, concentration problems',
      'Duration >1 month with functional impairment',
    ],
    [
      'DSM-5: trauma exposure + ≥1 intrusion + ≥1 avoidance + ≥2 negative cognition/mood + ≥2 arousal symptoms',
      'PCL-5 (PTSD Checklist for DSM-5) screening',
      'Clinician-Administered PTSD Scale (CAPS-5) — gold standard',
      'Specify: with dissociative symptoms (depersonalization/derealization), with delayed expression (>6 months)',
    ],
    [
      'Trauma-focused CBT (gold standard): CPT (Cognitive Processing Therapy), PE (Prolonged Exposure)',
      'EMDR (Eye Movement Desensitization and Reprocessing)',
      'SSRIs: sertraline, paroxetine (FDA-approved for PTSD)',
      'Prazosin for trauma-related nightmares (alpha-1 antagonist)',
      'MDMA-assisted therapy (breakthrough therapy designation)',
      'Avoid benzodiazepines (impair extinction learning, worsen outcomes)',
    ],
    [
      'Substance use disorders (comorbid in 50%+)',
      'Major depression (50% comorbidity)',
      'Suicidality',
      'Chronic pain and somatic symptoms',
      'Cardiovascular disease',
      'Complex PTSD (prolonged/repeated trauma)',
    ],
    'PTSD develops after a terrifying event. The brain gets stuck in alarm mode, causing flashbacks, nightmares, and constant vigilance. It is not weakness — it is your brain\'s protection system working overtime. Specific therapies can help your brain process the trauma safely.',
    [
      'Active suicidal ideation or attempt',
      'Severe dissociative episodes (losing time, identity confusion)',
      'Flashback with violence risk',
      'Substance overdose',
      'Acute psychotic features',
    ],
  ),

  'acute-stress-disorder': mh(
    'acute-stress-disorder',
    'Acute Stress Disorder',
    'Trastorno de Estrés Agudo',
    'trauma',
    '6B41',
    'Acute stress response occurring within 3 days to 1 month after trauma exposure, with symptoms similar to PTSD including intrusion, avoidance, arousal, and dissociation.',
    'Acute sympathetic nervous system activation, amygdala hyperactivity with cortisol surge, peritraumatic dissociation reflecting hippocampal shutdown during overwhelming threat, and early consolidation of fear memories that may progress to PTSD if not resolved.',
    [
      'Intrusion symptoms (flashbacks, nightmares, distressing memories)',
      'Negative mood (inability to experience positive emotions)',
      'Dissociative symptoms (altered sense of reality, amnesia, derealization)',
      'Avoidance of reminders',
      'Arousal (sleep disturbance, hypervigilance, startle, irritability)',
      'Duration: 3 days to 1 month post-trauma',
      'Approximately 50% progress to PTSD',
    ],
    [
      'DSM-5: ≥9/14 symptoms from intrusion, negative mood, dissociation, avoidance, arousal categories',
      'Onset 3 days to 1 month after trauma',
      'Stanford Acute Stress Reaction Questionnaire',
      'If symptoms persist >1 month, rediagnose as PTSD',
    ],
    [
      'Trauma-focused CBT (brief, early intervention) — most evidence',
      'Psychological first aid (supportive, practical)',
      'Avoid Critical Incident Stress Debriefing (no benefit, may worsen)',
      'Short-term pharmacotherapy if needed: SSRIs, short-course benzodiazepines (controversial)',
      'Monitor for progression to PTSD',
    ],
    [
      'Progression to PTSD (~50%)',
      'Depression',
      'Substance use as coping',
      'Functional impairment during acute period',
      'Dissociative amnesia',
    ],
    'Acute stress disorder is a strong reaction in the first month after a traumatic event. You may feel numb, have flashbacks, or feel on edge. For most people it improves, but early treatment can prevent it from becoming long-term PTSD.',
    [
      'Suicidal ideation',
      'Severe dissociation (unable to function or unaware of surroundings)',
      'Inability to care for self or dependents',
      'Substance intoxication as coping',
    ],
  ),

  'adjustment-disorder': mh(
    'adjustment-disorder',
    'Adjustment Disorder',
    'Trastorno de Adaptación',
    'trauma',
    '6B43',
    'Development of emotional or behavioral symptoms in response to an identifiable stressor within 3 months, out of proportion to the severity of the stressor or causing significant impairment.',
    'Stress response dysregulation with excessive HPA axis activation for the stimulus magnitude, insufficient coping resource mobilization, cognitive appraisal bias magnifying threat, and vulnerability factors (prior trauma, limited social support, personality traits).',
    [
      'Emotional or behavioral symptoms within 3 months of identifiable stressor',
      'Distress out of proportion to the stressor',
      'Significant impairment in social, occupational, or other functioning',
      'Subtypes: with depressed mood, with anxiety, with mixed anxiety and depressed mood, with disturbance of conduct, with mixed disturbance of emotions and conduct',
      'Does not meet criteria for another specific disorder',
      'Resolves within 6 months of stressor ending',
    ],
    [
      'DSM-5: symptoms within 3 months of stressor, out of proportion or causing impairment',
      'Does not meet criteria for MDD, GAD, PTSD, or other specific disorder',
      'Must not represent normal bereavement',
      'Resolves within 6 months after stressor or consequences cease',
    ],
    [
      'Supportive psychotherapy (primary treatment)',
      'Brief psychodynamic therapy',
      'CBT targeting coping strategies and cognitive reframing',
      'Problem-solving therapy',
      'Pharmacotherapy: short-term anxiolytics or SSRIs if significant symptoms',
      'Address the stressor directly when possible',
    ],
    [
      'Progression to MDD or anxiety disorder if untreated',
      'Substance use as coping',
      'Occupational dysfunction',
      'Suicidal ideation (adjustment disorder accounts for significant proportion of suicide attempts)',
      'Chronic impairment if stressor persists',
    ],
    'An adjustment disorder happens when a life change or stressful event causes more distress than expected or makes it hard to function. It is a normal response pushed past the tipping point. Counseling and coping strategies usually help resolve it.',
    [
      'Suicidal ideation or self-harm',
      'Reckless or dangerous behavior',
      'Complete functional breakdown',
    ],
  ),

  'complex-ptsd': mh(
    'complex-ptsd',
    'Complex PTSD',
    'TEPT Complejo',
    'trauma',
    '6B41',
    'Results from prolonged, repeated traumatic exposure (childhood abuse, captivity, domestic violence) with core PTSD symptoms plus disturbances in self-organization: affect dysregulation, negative self-concept, and relationship difficulties.',
    'Chronic developmental trauma disrupts neurodevelopment: prolonged HPA axis activation causes cortisol receptor downregulation, prefrontal cortex developmental delay, altered attachment circuitry, dissociative mechanisms as chronic defense, and epigenetic changes transmitted across generations.',
    [
      'Core PTSD symptoms (intrusion, avoidance, hyperarousal)',
      'Affect dysregulation: difficulty modulating emotions, explosive anger or emotional numbness',
      'Negative self-concept: chronic shame, guilt, sense of being permanently damaged',
      'Disturbances in relationships: difficulty trusting, revictimization patterns, isolation',
      'Dissociative symptoms (depersonalization, derealization, fragmented identity)',
      'Somatic complaints and chronic pain',
      'Often misdiagnosed as BPD, depression, or anxiety',
    ],
    [
      'ICD-11 diagnosis (not in DSM-5 as separate entity): PTSD criteria + disturbances in self-organization',
      'International Trauma Questionnaire (ITQ)',
      'Detailed developmental and trauma history essential',
      'Screen for dissociative disorders (DES-II)',
      'Differentiate from BPD (overlap but distinct)',
    ],
    [
      'Phase-based treatment approach (consensus model):',
      'Phase 1: Safety, stabilization, affect regulation skills',
      'Phase 2: Trauma processing (modified CPT/PE, EMDR, sensorimotor psychotherapy)',
      'Phase 3: Reconnection and reintegration',
      'SSRIs/SNRIs for symptom management',
      'DBT skills for affect regulation',
    ],
    [
      'Chronic depression and anxiety',
      'Dissociative disorders',
      'Substance use disorders',
      'Somatic symptom disorders and chronic pain',
      'Revictimization',
      'Suicidality',
      'Personality disorder development',
    ],
    'Complex PTSD develops from repeated trauma, often in childhood. Beyond flashbacks and anxiety, it deeply affects how you see yourself, handle emotions, and connect with others. Recovery is possible through a gradual, phased approach with a skilled therapist.',
    [
      'Suicidal ideation or self-harm',
      'Severe dissociative episode (lost time, identity alteration)',
      'Flashback-driven violence',
      'Re-traumatization crisis',
      'Substance overdose',
    ],
  ),

  // ━━━ ADDITIONAL DISORDERS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  'specific-phobia': mh(
    'specific-phobia',
    'Specific Phobia',
    'Fobia Específica',
    'anxiety',
    '6B03',
    'Marked, disproportionate fear or anxiety about a specific object or situation that is actively avoided or endured with intense distress, lasting ≥6 months.',
    'Classical fear conditioning with failure of extinction: amygdala hyperactivation to phobic stimulus with inadequate ventromedial prefrontal cortex downregulation. Prepared learning theory — evolutionary predisposition to fear certain stimuli (snakes, heights, blood). Genetic heritability ~30-40%.',
    [
      'Marked fear or anxiety about a specific object or situation',
      'Phobic stimulus almost always provokes immediate anxiety',
      'Avoidance or endurance with intense distress',
      'Fear is disproportionate to actual danger',
      'Duration ≥6 months',
      'Types: animal, natural environment, blood-injection-injury, situational, other',
      'Blood-injection-injury type: unique vasovagal response (fainting)',
    ],
    [
      'DSM-5: marked fear of specific stimulus, avoidance/endurance, ≥6 months, causes distress/impairment',
      'Clinical interview; specify type',
      'Differentiate from agoraphobia, social anxiety, OCD, PTSD',
      'Rule out medical causes for situational avoidance',
    ],
    [
      'Exposure therapy (gold standard): systematic desensitization, flooding, in-vivo exposure',
      'Virtual reality exposure therapy',
      'Applied tension technique for blood-injection-injury type',
      'CBT with cognitive restructuring',
      'One-session treatment (Ost model) effective for many',
      'Medications rarely needed; occasional beta-blocker or benzodiazepine for unavoidable exposure',
    ],
    [
      'Occupational and social limitation from avoidance',
      'Comorbid anxiety or mood disorders',
      'Substance use to manage fear',
      'In blood-injury-injury type: avoidance of medical care',
    ],
    'A phobia is an intense, irrational fear of something specific that most people do not find threatening. Your brain triggers a false danger alarm. Gradual, guided exposure to the feared thing is highly effective — most people improve significantly.',
    [
      'Vasovagal syncope (blood-injection-injury type)',
      'Panic attack during unavoidable exposure',
      'Avoidance of critical medical procedures',
    ],
  ),

  'delusional-disorder': mh(
    'delusional-disorder',
    'Delusional Disorder',
    'Trastorno Delirante',
    'psychotic',
    '6A24',
    'Presence of one or more delusions lasting ≥1 month without other prominent psychotic symptoms, with relatively preserved functioning apart from the delusion\'s impact.',
    'Focal dopaminergic dysregulation (more circumscribed than schizophrenia), possible lateralized temporal lobe dysfunction, preserved prefrontal function (explaining maintained organization), and aberrant salience attribution to specific stimuli without global cognitive deterioration.',
    [
      'One or more delusions lasting ≥1 month',
      'Types: persecutory (most common), grandiose, erotomanic, jealous, somatic, mixed',
      'Functioning not markedly impaired apart from delusion impact',
      'Behavior not obviously bizarre',
      'If mood episodes occurred, they were brief relative to delusional periods',
      'Not attributable to substances or medical condition',
    ],
    [
      'DSM-5: ≥1 delusion for ≥1 month; does not meet criteria for schizophrenia',
      'No prominent hallucinations, disorganized speech, or negative symptoms',
      'Brain imaging to rule out structural causes',
      'Differentiate from OCD (poor insight type), body dysmorphic disorder, paranoid personality',
    ],
    [
      'Antipsychotics (often first-generation like pimozide for somatic type)',
      'Second-generation antipsychotics: risperidone, olanzapine',
      'CBT targeting delusional beliefs (building therapeutic alliance critical)',
      'Treatment adherence is a major challenge (patients often lack insight)',
      'SSRIs if comorbid depression',
    ],
    [
      'Social and occupational dysfunction from delusional behavior',
      'Legal problems (stalking in erotomanic, accusations in jealous type)',
      'Violence risk (particularly jealous and persecutory types)',
      'Depression secondary to delusional content',
      'Social isolation',
    ],
    'Delusional disorder involves a strong false belief that persists despite evidence against it. Unlike schizophrenia, thinking and functioning are otherwise largely normal. Treatment can help, though building trust with a provider is an important first step.',
    [
      'Homicidal ideation (especially jealous or persecutory type)',
      'Stalking behavior (erotomanic type)',
      'Suicidal ideation',
      'Failure to eat or drink due to somatic delusion',
    ],
  ),

  'avoidant-restrictive-food-intake': mh(
    'avoidant-restrictive-food-intake',
    'Avoidant/Restrictive Food Intake Disorder (ARFID)',
    'Trastorno por Evitación/Restricción de la Ingesta de Alimentos',
    'eating',
    '6B83',
    'Avoidance or restriction of food intake not driven by body image concerns, leading to nutritional deficiency, weight loss, dependence on supplements, or psychosocial impairment.',
    'Heightened sensory sensitivity (gustatory and olfactory cortex hyperreactivity), conditioned food aversion from negative experiences (choking, vomiting), anxiety-driven avoidance circuits, possible insular cortex dysfunction in interoceptive processing, and overlap with neurodevelopmental conditions (autism, ADHD).',
    [
      'Avoidance based on sensory characteristics (texture, smell, taste, appearance)',
      'Lack of interest in eating or food',
      'Concern about aversive consequences of eating (choking, vomiting, pain)',
      'Significant weight loss or failure to gain weight (children)',
      'Nutritional deficiency',
      'Dependence on enteral feeding or supplements',
      'NOT driven by body image disturbance (distinguishes from anorexia)',
    ],
    [
      'DSM-5: food avoidance/restriction causing nutritional deficiency, weight loss, supplement dependence, or psychosocial impairment',
      'Not better explained by cultural practice, medical condition, or another mental disorder',
      'Not due to body image concerns',
      'Nutritional assessment: micronutrients (iron, zinc, B12, vitamin D)',
      'Growth chart monitoring in children',
    ],
    [
      'CBT-AR (CBT for ARFID) — emerging evidence',
      'Graded exposure to new foods',
      'Nutritional rehabilitation and supplementation',
      'Family-based treatment for children',
      'Occupational therapy for sensory-based avoidance',
      'Address anxiety about aversive consequences (desensitization)',
    ],
    [
      'Malnutrition and growth failure in children',
      'Nutritional deficiencies (iron deficiency anemia, scurvy, rickets)',
      'Social impairment (unable to eat with others, restricted settings)',
      'Dependence on oral supplements or enteral nutrition',
      'Comorbid anxiety disorders',
    ],
    'ARFID means avoiding certain foods or eating very little — not because of weight concerns, but due to the food\'s taste, texture, or fear of negative consequences like choking. It can lead to nutritional problems but responds well to gradual treatment.',
    [
      'Severe malnutrition or dehydration',
      'Significant weight loss requiring medical intervention',
      'Electrolyte abnormalities',
      'Choking episode with aspiration',
    ],
  ),

  'cannabis-use-disorder': mh(
    'cannabis-use-disorder',
    'Cannabis Use Disorder',
    'Trastorno por Consumo de Cannabis',
    'substance-use',
    '6C41',
    'Problematic pattern of cannabis use leading to significant impairment or distress, with compulsive use, tolerance, and withdrawal.',
    'THC activates CB1 receptors in the mesolimbic reward pathway, releasing dopamine. Chronic use downregulates CB1 receptors and endocannabinoid system, particularly in the hippocampus (memory) and prefrontal cortex (executive function). Adolescent use disrupts ongoing neurodevelopment and myelination.',
    [
      'Loss of control over cannabis use',
      'Craving',
      'Continued use despite social, occupational, or health problems',
      'Tolerance (needing more for same effect)',
      'Withdrawal: irritability, anxiety, insomnia, decreased appetite, restlessness, depressed mood',
      'Use in physically hazardous situations',
      'Giving up important activities for cannabis use',
    ],
    [
      'DSM-5: ≥2/11 criteria within 12 months',
      'Urine drug screen (THC-COOH; detectable for weeks in heavy users)',
      'Assess for cannabis-induced psychosis, anxiety, amotivational syndrome',
      'Screen for comorbid mental health conditions',
    ],
    [
      'No FDA-approved pharmacotherapy',
      'CBT and motivational enhancement therapy (most evidence)',
      'Contingency management',
      'N-acetylcysteine (NAC) — some evidence in adolescents',
      'Gabapentin — may reduce withdrawal symptoms',
      'Treat comorbid conditions (ADHD, anxiety, depression, insomnia)',
    ],
    [
      'Cannabis-induced psychosis (risk factor for schizophrenia)',
      'Amotivational syndrome',
      'Cognitive impairment (especially with adolescent onset)',
      'Cannabinoid hyperemesis syndrome (cyclic vomiting)',
      'Respiratory problems from smoking',
      'Academic and occupational underperformance',
    ],
    'Cannabis use disorder means marijuana use has become difficult to control and is causing problems in your life. While many consider cannabis harmless, regular heavy use changes brain chemistry and can impair motivation, memory, and mental health.',
    [
      'Cannabis-induced psychosis (paranoia, hallucinations)',
      'Cannabinoid hyperemesis syndrome (intractable vomiting)',
      'Suicidal ideation',
      'Severe panic or anxiety attack',
    ],
  ),

  'separation-anxiety-disorder': mh(
    'separation-anxiety-disorder',
    'Separation Anxiety Disorder',
    'Trastorno de Ansiedad por Separación',
    'anxiety',
    '6B05',
    'Developmentally inappropriate and excessive anxiety concerning separation from attachment figures, lasting ≥4 weeks in children or ≥6 months in adults.',
    'Hyperactive attachment circuitry (amygdala-hypothalamic-periaqueductal gray), excessive corticotropin-releasing factor (CRF) response to separation cues, oxytocin system dysregulation, insecure attachment patterns (particularly anxious-ambivalent), and genetic influences on anxiety sensitivity.',
    [
      'Excessive distress when separation from attachment figures occurs or is anticipated',
      'Worry about losing attachment figures or harm befalling them',
      'Reluctance or refusal to go out, be alone, or sleep away from attachment figures',
      'Nightmares about separation',
      'Physical complaints (headaches, stomachaches) when separation anticipated',
      'Onset: typically childhood but can occur in adulthood',
      'Duration: ≥4 weeks (children), ≥6 months (adults)',
    ],
    [
      'DSM-5: ≥3/8 separation anxiety symptoms for ≥4 weeks (children) or ≥6 months (adults)',
      'Developmentally inappropriate level of anxiety',
      'Differentiate from normal separation anxiety (peaks 9-18 months)',
      'Rule out GAD, social anxiety, agoraphobia, school refusal for other reasons',
    ],
    [
      'CBT with gradual exposure to separation (first-line)',
      'Parent training and family therapy',
      'School-based interventions for school refusal',
      'SSRIs for moderate-severe cases (fluoxetine, sertraline)',
      'Combination CBT + SSRI for severe cases',
      'Avoid accommodation (reinforcing avoidance)',
    ],
    [
      'School refusal and academic impairment',
      'Development of other anxiety disorders (GAD, panic disorder, agoraphobia)',
      'Depression',
      'Social isolation',
      'Family conflict from demands on attachment figures',
    ],
    'Separation anxiety disorder causes intense worry and fear about being apart from the people you are closest to. While common in very young children, when it persists or starts later, treatment with gradual practice and sometimes medication helps build confidence.',
    [
      'Complete school refusal lasting weeks',
      'Physical symptoms severe enough to mimic medical illness',
      'Suicidal ideation from distress',
      'Self-harm when separation forced',
    ],
  ),

  'dissociative-identity-disorder': mh(
    'dissociative-identity-disorder',
    'Dissociative Identity Disorder',
    'Trastorno de Identidad Disociativo',
    'trauma',
    '6B64',
    'Disruption of identity characterized by two or more distinct personality states with recurrent gaps in recall of everyday events, personal information, and traumatic events, typically developing from severe childhood trauma.',
    'Chronic dissociation as defense against overwhelming trauma during critical developmental periods. Disrupted integration of memory, identity, and consciousness. Structural dissociation theory: fragmentation of personality into apparently normal part (ANP) and emotional parts (EPs). Altered connectivity between prefrontal cortex, amygdala, and hippocampus. Distinct psychophysiological profiles across identity states.',
    [
      'Two or more distinct personality states (identities or "alters")',
      'Recurrent gaps in recall (beyond ordinary forgetting)',
      'Amnesia for traumatic events, daily activities, or personal information',
      'Identity states may have distinct names, ages, genders, mannerisms',
      'Switching between states may be triggered by stress',
      'Depersonalization and derealization',
      'Typically associated with severe childhood trauma (>90%)',
      'Hearing internal voices (must differentiate from psychosis)',
    ],
    [
      'DSM-5: ≥2 distinct identity states + recurrent amnesia gaps',
      'Not due to substance use or cultural/religious practice',
      'Dissociative Experiences Scale (DES-II) screening',
      'Structured Clinical Interview for DSM Dissociative Disorders (SCID-D)',
      'Rule out PTSD with dissociative subtype, BPD, psychotic disorders, malingering',
    ],
    [
      'Phase-oriented treatment (long-term psychotherapy essential):',
      'Phase 1: Safety, stabilization, symptom management, building therapeutic alliance',
      'Phase 2: Trauma processing with attention to all parts of the system',
      'Phase 3: Integration and rehabilitation',
      'No specific pharmacotherapy for DID; treat comorbid depression, anxiety, PTSD',
      'Avoid hypnosis aimed at "recovering" memories (risk of confabulation)',
    ],
    [
      'Self-harm and suicidality (very high rates)',
      'Comorbid PTSD, depression, substance use, eating disorders',
      'Misdiagnosis (average 7 years to correct diagnosis)',
      'Revictimization',
      'Functional impairment across all domains',
      'Somatic symptoms and chronic pain',
    ],
    'Dissociative identity disorder develops when severe childhood trauma causes the mind to compartmentalize experiences into separate identities. It is a creative survival mechanism. Treatment helps all parts of the person communicate and work together toward safety and healing.',
    [
      'Suicidal ideation or self-harm by any identity state',
      'Loss of time with dangerous behavior',
      'Flashback-driven crisis',
      'Identity state engaging in harmful activity without host awareness',
      'Acute dissociative fugue',
    ],
  ),

  'cyclothymic-disorder': mh(
    'cyclothymic-disorder',
    'Cyclothymic Disorder',
    'Trastorno Ciclotímico',
    'mood',
    '6A62',
    'Chronic, fluctuating mood disturbance with numerous periods of hypomanic and depressive symptoms that do not meet criteria for hypomania or major depression, lasting at least 2 years.',
    'Subthreshold bipolar spectrum pathophysiology: mild circadian rhythm dysregulation, modest dopaminergic and serotonergic fluctuations, temperamental cyclothymic trait (reactive, labile affect), and shared genetic liability with bipolar disorder (may represent prodromal or attenuated form).',
    [
      'Numerous periods of hypomanic symptoms (not meeting full criteria)',
      'Numerous periods of depressive symptoms (not meeting MDD criteria)',
      'Symptoms present ≥2 years (1 year in children/adolescents)',
      'Never symptom-free >2 months',
      'Mood instability and unpredictability',
      'Functional impairment from chronic instability',
      'May be misperceived as personality trait rather than disorder',
    ],
    [
      'DSM-5: hypomanic + depressive symptoms for ≥2 years; never meeting full episode criteria',
      'No symptom-free period >2 months',
      'Does not meet criteria for Bipolar I, Bipolar II, or MDD',
      'Differentiate from BPD (overlap in mood instability)',
      'Mood charting helpful for diagnosis',
    ],
    [
      'Mood stabilizers: lithium, lamotrigine (limited evidence but commonly used)',
      'CBT targeting mood management and interpersonal functioning',
      'Lifestyle regulation: sleep hygiene, routine, stress management',
      'Avoid antidepressant monotherapy (risk of mood destabilization)',
      'Monitor for progression to Bipolar I or II (~15-50% risk)',
    ],
    [
      'Progression to Bipolar I or II disorder',
      'Substance use (self-medication)',
      'Interpersonal difficulties from mood unpredictability',
      'Occupational instability',
      'Comorbid anxiety disorders',
    ],
    'Cyclothymia causes ongoing mood swings that are milder than bipolar disorder but still disruptive. Your mood shifts between feeling slightly high and slightly low without settling. Treatment focuses on stabilizing mood and building routines.',
    [
      'Suicidal ideation during depressive periods',
      'Escalation to full manic or depressive episode',
      'Substance misuse',
    ],
  ),
};

// ─── Utility Functions ───────────────────────────────────────────────────────

/**
 * Search mental health conditions by name, description, or clinical features.
 * Case-insensitive search across name, nameEs, description, pathophysiology,
 * clinical features, and patient explanation.
 */
export function searchMentalHealthConditions(query: string): MentalHealthEntry[] {
  const lowerQuery = query.toLowerCase();
  return Object.values(MENTAL_HEALTH_CONDITIONS).filter((entry) => {
    const searchableText = [
      entry.name,
      entry.nameEs,
      entry.description,
      entry.pathophysiology,
      entry.patientExplanation,
      ...entry.clinicalFeatures,
      ...entry.diagnostics,
      ...entry.treatment,
    ]
      .join(' ')
      .toLowerCase();
    return searchableText.includes(lowerQuery);
  });
}

/**
 * Filter mental health conditions by category.
 */
export function filterByCategory(category: MentalHealthCategory): MentalHealthEntry[] {
  return Object.values(MENTAL_HEALTH_CONDITIONS).filter(
    (entry) => entry.category === category,
  );
}

/**
 * Get a single condition by its ID.
 */
export function getMentalHealthCondition(id: string): MentalHealthEntry | undefined {
  return MENTAL_HEALTH_CONDITIONS[id];
}

/**
 * Get all available categories with their condition counts.
 */
export function getMentalHealthCategoryStats(): Record<MentalHealthCategory, number> {
  const stats: Record<string, number> = {};
  for (const entry of Object.values(MENTAL_HEALTH_CONDITIONS)) {
    stats[entry.category] = (stats[entry.category] || 0) + 1;
  }
  return stats as Record<MentalHealthCategory, number>;
}

/**
 * Get all condition IDs.
 */
export function getAllMentalHealthConditionIds(): string[] {
  return Object.keys(MENTAL_HEALTH_CONDITIONS);
}

export default MENTAL_HEALTH_CONDITIONS;
