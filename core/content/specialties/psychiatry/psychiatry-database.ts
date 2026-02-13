// =============================================================================
// Psychiatry Specialty Database
// Comprehensive psychiatric conditions, therapies, and clinical references
// =============================================================================

export interface PsychiatryEntry {
  id: string;
  name: string;
  nameEs: string;
  subcategory: 'mood' | 'anxiety' | 'psychotic' | 'personality' | 'substance' | 'neurodevelopmental' | 'trauma' | 'eating' | 'sleep' | 'therapeutic';
  summary: string;
  epidemiology: string;
  clinicalFeatures: string[];
  diagnosticCriteria: string;
  differentialDiagnosis: string[];
  firstLineTreatment: string;
  medications: string[];
  psychotherapy: string;
  crisisManagement: string;
  prognosis: string;
  patientTip: string;
}

type Sub = PsychiatryEntry['subcategory'];

/** Compact helper to build a PsychiatryEntry */
function psy(
  id: string, name: string, nameEs: string, subcategory: Sub,
  summary: string, epidemiology: string, clinicalFeatures: string[],
  diagnosticCriteria: string, differentialDiagnosis: string[],
  firstLineTreatment: string, medications: string[],
  psychotherapy: string, crisisManagement: string,
  prognosis: string, patientTip: string,
): PsychiatryEntry {
  return { id, name, nameEs, subcategory, summary, epidemiology, clinicalFeatures,
    diagnosticCriteria, differentialDiagnosis, firstLineTreatment, medications,
    psychotherapy, crisisManagement, prognosis, patientTip };
}

// =============================================================================
// PSYCHIATRY ENTRIES
// =============================================================================

export const PSYCHIATRY_ENTRIES: Record<string, PsychiatryEntry> = {

  // ---------------------------------------------------------------------------
  // MOOD DISORDERS (4)
  // ---------------------------------------------------------------------------
  'major-depressive-disorder': psy(
    'major-depressive-disorder', 'Major Depressive Disorder', 'Trastorno Depresivo Mayor', 'mood',
    'Persistent low mood and loss of interest causing significant functional impairment.',
    'Lifetime prevalence ~17%. Female-to-male ratio 2:1. Peak onset ages 20-30.',
    ['Depressed mood most of the day', 'Anhedonia', 'Weight or appetite changes', 'Insomnia or hypersomnia', 'Psychomotor agitation or retardation', 'Fatigue', 'Worthlessness or guilt', 'Concentration difficulty', 'Suicidal ideation'],
    'DSM-5: 5+ symptoms over 2 weeks including depressed mood or anhedonia, causing significant distress or impairment.',
    ['Bipolar depression', 'Persistent depressive disorder', 'Adjustment disorder', 'Hypothyroidism', 'Substance-induced mood disorder'],
    'SSRI monotherapy (e.g., sertraline, escitalopram) combined with psychotherapy.',
    ['Sertraline', 'Escitalopram', 'Fluoxetine', 'Bupropion', 'Venlafaxine', 'Mirtazapine'],
    'CBT and behavioral activation are first-line. Interpersonal therapy also effective.',
    'Assess suicide risk with PHQ-9 and Columbia Scale. Safety planning; hospitalize if imminent risk.',
    'With treatment, ~50% remit within 6-12 months. Recurrence risk ~50% after first episode.',
    'Depression is a medical condition, not a character flaw. Treatment works and recovery is expected.',
  ),

  'bipolar-i-disorder': psy(
    'bipolar-i-disorder', 'Bipolar I Disorder', 'Trastorno Bipolar I', 'mood',
    'Characterized by at least one manic episode, often alternating with depressive episodes.',
    'Lifetime prevalence ~1%. Equal sex distribution. Mean onset age 18.',
    ['Elevated or irritable mood', 'Grandiosity', 'Decreased need for sleep', 'Pressured speech', 'Flight of ideas', 'Distractibility', 'Increased goal-directed activity', 'Risky behavior'],
    'DSM-5: At least one manic episode (7+ days or hospitalization) with 3+ manic symptoms.',
    ['Schizoaffective disorder', 'Bipolar II', 'MDD with psychotic features', 'Substance-induced mania', 'ADHD'],
    'Mood stabilizer (lithium) or atypical antipsychotic for acute mania; maintenance therapy essential.',
    ['Lithium', 'Valproate', 'Quetiapine', 'Olanzapine', 'Lamotrigine', 'Aripiprazole'],
    'Psychoeducation, CBT for bipolar, interpersonal and social rhythm therapy (IPSRT).',
    'Manic episodes may require hospitalization. Avoid antidepressant monotherapy (risk of switch).',
    'Chronic relapsing condition. Medication adherence improves long-term stability significantly.',
    'Mood tracking and consistent sleep schedules are powerful tools for managing bipolar disorder.',
  ),

  'bipolar-ii-disorder': psy(
    'bipolar-ii-disorder', 'Bipolar II Disorder', 'Trastorno Bipolar II', 'mood',
    'Recurrent depressive episodes with at least one hypomanic episode; no full manic episodes.',
    'Lifetime prevalence ~0.4-1%. Slightly more common in women. Mean onset mid-20s.',
    ['Hypomanic episodes (4+ days)', 'Major depressive episodes predominate', 'Mood reactivity', 'Increased energy without severe impairment', 'Rapid cycling possible'],
    'DSM-5: At least one hypomanic episode (4+ days) and one major depressive episode. No manic episodes.',
    ['Bipolar I disorder', 'MDD', 'Cyclothymic disorder', 'Borderline personality disorder', 'ADHD'],
    'Lamotrigine for depression prevention; quetiapine for acute bipolar II depression.',
    ['Lamotrigine', 'Quetiapine', 'Lithium', 'Valproate', 'Lurasidone'],
    'CBT for bipolar, IPSRT, psychoeducation, and family-focused therapy.',
    'Monitor for suicidality during depressive episodes. Avoid antidepressant monotherapy.',
    'Depressive episodes cause most impairment. Long-term maintenance therapy reduces recurrence.',
    'Hypomania can feel productive, but recognizing it early helps prevent depressive crashes.',
  ),

  'persistent-depressive-disorder': psy(
    'persistent-depressive-disorder', 'Persistent Depressive Disorder (Dysthymia)', 'Trastorno Depresivo Persistente', 'mood',
    'Chronic low-grade depression lasting at least two years with fewer acute symptoms than MDD.',
    'Lifetime prevalence ~3-6%. More common in women. Often begins in adolescence or early adulthood.',
    ['Depressed mood most days for 2+ years', 'Poor appetite or overeating', 'Insomnia or hypersomnia', 'Low energy', 'Low self-esteem', 'Difficulty concentrating', 'Hopelessness'],
    'DSM-5: Depressed mood for most of the day, more days than not, for 2+ years with 2+ symptoms.',
    ['MDD', 'Bipolar II depressive phase', 'Substance use disorder', 'Medical conditions (anemia, hypothyroidism)'],
    'Combined SSRI and psychotherapy is most effective.',
    ['Sertraline', 'Fluoxetine', 'Venlafaxine', 'Duloxetine', 'Bupropion'],
    'CBT and CBASP (Cognitive Behavioral Analysis System of Psychotherapy) are evidence-based.',
    'Assess for double depression (MDD superimposed). Standard suicide risk assessment.',
    'Chronic but treatable. Many patients describe feeling "normal" once treated, not recognizing prior severity.',
    'You may have felt this way so long it seems normal. Treatment can reveal how much better you can feel.',
  ),

  // ---------------------------------------------------------------------------
  // ANXIETY DISORDERS (4)
  // ---------------------------------------------------------------------------
  'generalized-anxiety-disorder': psy(
    'generalized-anxiety-disorder', 'Generalized Anxiety Disorder', 'Trastorno de Ansiedad Generalizada', 'anxiety',
    'Excessive, difficult-to-control worry about multiple domains causing significant distress.',
    'Lifetime prevalence ~6%. Female-to-male ratio 2:1. Often presents in 30s but can begin earlier.',
    ['Excessive worry', 'Restlessness', 'Easy fatigability', 'Concentration difficulty', 'Irritability', 'Muscle tension', 'Sleep disturbance'],
    'DSM-5: Excessive worry for 6+ months, difficult to control, with 3+ somatic symptoms.',
    ['Panic disorder', 'Social anxiety disorder', 'OCD', 'Hyperthyroidism', 'Caffeine excess', 'MDD'],
    'SSRI or SNRI combined with CBT.',
    ['Sertraline', 'Escitalopram', 'Venlafaxine', 'Duloxetine', 'Buspirone', 'Pregabalin'],
    'CBT with emphasis on cognitive restructuring and worry exposure. Applied relaxation also effective.',
    'Benzodiazepines for short-term acute relief only. Avoid long-term benzodiazepine prescribing.',
    'Chronic waxing-and-waning course. CBT provides durable improvement even after therapy ends.',
    'Anxiety is treatable. Learning to tolerate uncertainty is a core skill that gets easier with practice.',
  ),

  'panic-disorder': psy(
    'panic-disorder', 'Panic Disorder', 'Trastorno de Panico', 'anxiety',
    'Recurrent unexpected panic attacks with persistent worry about future attacks.',
    'Lifetime prevalence ~3-5%. Female-to-male ratio 2:1. Typical onset late adolescence to mid-30s.',
    ['Palpitations', 'Sweating', 'Trembling', 'Shortness of breath', 'Chest pain', 'Nausea', 'Dizziness', 'Derealization', 'Fear of losing control', 'Fear of dying'],
    'DSM-5: Recurrent unexpected panic attacks with 1+ month of worry about attacks or maladaptive behavioral change.',
    ['Cardiac arrhythmia', 'Pheochromocytoma', 'Hyperthyroidism', 'Substance intoxication', 'Asthma', 'GAD'],
    'SSRI (sertraline or paroxetine) plus CBT with interoceptive exposure.',
    ['Sertraline', 'Paroxetine', 'Escitalopram', 'Venlafaxine', 'Clonazepam (short-term)'],
    'CBT with interoceptive exposure and cognitive restructuring. Panic-focused psychodynamic therapy.',
    'During acute panic: grounding techniques, reassurance. Rule out cardiac emergency at first presentation.',
    'Good prognosis with treatment. ~70-80% improve significantly with CBT and/or medication.',
    'Panic attacks feel terrifying but are not dangerous. Your body is triggering a false alarm.',
  ),

  'social-anxiety-disorder': psy(
    'social-anxiety-disorder', 'Social Anxiety Disorder', 'Trastorno de Ansiedad Social', 'anxiety',
    'Marked fear or anxiety about social situations where scrutiny by others is possible.',
    'Lifetime prevalence ~7-12%. Slightly more common in women. Median onset age 13.',
    ['Fear of social situations', 'Fear of negative evaluation', 'Avoidance of social interactions', 'Blushing', 'Trembling', 'Nausea in social settings', 'Performance anxiety'],
    'DSM-5: Marked fear in social situations, 6+ months, causing significant impairment or distress.',
    ['Agoraphobia', 'Panic disorder', 'GAD', 'Avoidant personality disorder', 'Autism spectrum', 'Selective mutism'],
    'SSRI (sertraline, paroxetine) plus CBT with gradual exposure.',
    ['Sertraline', 'Paroxetine', 'Venlafaxine', 'Propranolol (performance only)', 'Fluvoxamine'],
    'CBT with exposure therapy and cognitive restructuring. Group CBT especially effective.',
    'Propranolol PRN for performance situations. Avoid alcohol as a social lubricant.',
    'Chronic but very treatable. Early intervention improves outcomes. ~50-65% respond to first-line treatment.',
    'Avoidance feels safe but strengthens anxiety. Gradual exposure builds confidence over time.',
  ),

  'specific-phobias': psy(
    'specific-phobias', 'Specific Phobias', 'Fobias Especificas', 'anxiety',
    'Intense, irrational fear of a specific object or situation leading to avoidance behavior.',
    'Lifetime prevalence ~8-12%. More common in women. Often begins in childhood (ages 5-12).',
    ['Immediate anxiety upon exposure', 'Avoidance of phobic stimulus', 'Disproportionate fear', 'Anticipatory anxiety', 'Physiological arousal (tachycardia, sweating)'],
    'DSM-5: Marked fear about a specific object/situation, 6+ months, causing impairment. Five subtypes: animal, natural environment, blood-injection-injury, situational, other.',
    ['Panic disorder', 'Agoraphobia', 'Social anxiety disorder', 'OCD', 'PTSD'],
    'Exposure-based therapy is the gold standard. Medication rarely needed.',
    ['Benzodiazepines (situational, e.g., flight phobia)', 'D-cycloserine (augments exposure therapy)'],
    'Systematic desensitization, in-vivo exposure, virtual reality exposure therapy.',
    'Rarely a crisis. Blood-injection-injury type may cause vasovagal syncope; applied tension technique.',
    'Excellent prognosis with exposure therapy. ~90% improve with structured treatment.',
    'Facing your fear in small, manageable steps rewires the brain. Most phobias respond very well to therapy.',
  ),

  // ---------------------------------------------------------------------------
  // PSYCHOTIC DISORDERS (2)
  // ---------------------------------------------------------------------------
  'schizophrenia': psy(
    'schizophrenia', 'Schizophrenia', 'Esquizofrenia', 'psychotic',
    'Chronic psychotic disorder with positive symptoms, negative symptoms, and cognitive deficits.',
    'Lifetime prevalence ~1%. Equal sex distribution but earlier onset in males (late teens vs. late 20s).',
    ['Delusions', 'Hallucinations (often auditory)', 'Disorganized speech', 'Disorganized or catatonic behavior', 'Negative symptoms: flat affect, avolition, alogia, anhedonia, asociality'],
    'DSM-5: 2+ symptoms (delusions, hallucinations, disorganized speech, disorganized behavior, negative symptoms) for 6+ months with 1+ month active phase.',
    ['Schizoaffective disorder', 'Bipolar I with psychosis', 'Brief psychotic disorder', 'Substance-induced psychosis', 'Delusional disorder'],
    'Second-generation antipsychotic (e.g., risperidone, aripiprazole). Clozapine for treatment resistance.',
    ['Risperidone', 'Aripiprazole', 'Olanzapine', 'Quetiapine', 'Clozapine', 'Paliperidone LAI'],
    'CBT for psychosis, social skills training, family psychoeducation, supported employment.',
    'Acute psychosis may require hospitalization. Ensure medication adherence. Assess self-harm and violence risk.',
    'Variable. Early intervention improves outcomes. ~25% achieve significant recovery; most need long-term treatment.',
    'Schizophrenia is a brain-based medical condition. With modern treatment, many people lead meaningful lives.',
  ),

  'schizoaffective-disorder': psy(
    'schizoaffective-disorder', 'Schizoaffective Disorder', 'Trastorno Esquizoafectivo', 'psychotic',
    'Features of both schizophrenia and a mood disorder (depressive or bipolar type) occurring together.',
    'Lifetime prevalence ~0.3%. Slightly more common in women. Onset typically early adulthood.',
    ['Psychotic symptoms concurrent with mood episodes', 'Delusions or hallucinations for 2+ weeks without mood symptoms', 'Depressive or manic episodes for majority of illness duration'],
    'DSM-5: Major mood episode concurrent with Criterion A schizophrenia symptoms, plus 2+ weeks of psychosis without mood symptoms.',
    ['Schizophrenia', 'Bipolar I with psychosis', 'MDD with psychotic features', 'Substance-induced disorder'],
    'Antipsychotic plus mood stabilizer or antidepressant depending on type (bipolar vs. depressive).',
    ['Paliperidone', 'Risperidone', 'Lithium', 'Valproate', 'Quetiapine', 'Aripiprazole'],
    'CBT, psychoeducation, social skills training, supportive therapy.',
    'Hospitalize for acute psychosis or severe mood episodes. Suicide risk is elevated.',
    'Prognosis intermediate between schizophrenia and mood disorders. Better than schizophrenia alone.',
    'Managing both mood and psychotic symptoms is possible with the right treatment combination.',
  ),

  // ---------------------------------------------------------------------------
  // PERSONALITY DISORDERS (2)
  // ---------------------------------------------------------------------------
  'borderline-personality-disorder': psy(
    'borderline-personality-disorder', 'Borderline Personality Disorder', 'Trastorno Limite de la Personalidad', 'personality',
    'Pattern of instability in relationships, self-image, affects, and marked impulsivity.',
    'Prevalence ~1.5-6%. More commonly diagnosed in women (3:1) though may be underdiagnosed in men.',
    ['Frantic efforts to avoid abandonment', 'Unstable relationships', 'Identity disturbance', 'Impulsivity', 'Recurrent suicidal behavior or self-harm', 'Affective instability', 'Chronic emptiness', 'Inappropriate anger', 'Transient paranoia or dissociation'],
    'DSM-5: 5+ of 9 criteria showing a pervasive pattern of instability beginning by early adulthood.',
    ['Bipolar II disorder', 'Complex PTSD', 'ADHD', 'MDD', 'Histrionic personality disorder'],
    'Dialectical Behavior Therapy (DBT) is the gold-standard psychotherapy.',
    ['No FDA-approved medications. Symptomatic: SSRIs, mood stabilizers, low-dose antipsychotics'],
    'DBT is first-line. Mentalization-based therapy (MBT) and transference-focused psychotherapy also effective.',
    'High suicide risk (~10% lifetime). Safety planning essential. Chain analysis for self-harm episodes.',
    'With DBT, ~77% no longer meet diagnostic criteria at 2 years. Symptoms generally improve with age.',
    'BPD is highly treatable. Skills like distress tolerance and emotion regulation can be learned and mastered.',
  ),

  'antisocial-personality-disorder': psy(
    'antisocial-personality-disorder', 'Antisocial Personality Disorder', 'Trastorno de Personalidad Antisocial', 'personality',
    'Pervasive pattern of disregard for and violation of the rights of others since age 15.',
    'Prevalence ~3% in men, ~1% in women. Strongly associated with conduct disorder before age 15.',
    ['Failure to conform to social norms', 'Deceitfulness', 'Impulsivity', 'Irritability and aggression', 'Reckless disregard for safety', 'Consistent irresponsibility', 'Lack of remorse'],
    'DSM-5: 3+ criteria since age 15, evidence of conduct disorder before 15, age 18+ at diagnosis.',
    ['Narcissistic personality disorder', 'Borderline personality disorder', 'Substance use disorders', 'Adult ADHD', 'Conduct disorder'],
    'No highly effective pharmacotherapy. Focus on comorbidity treatment and structured psychotherapy.',
    ['No FDA-approved medications. Symptomatic: SSRIs for impulsivity, mood stabilizers for aggression'],
    'Mentalization-based therapy, cognitive-behavioral approaches, therapeutic community programs.',
    'Assess violence risk. Manage comorbid substance use. Structured risk assessment tools (e.g., HCR-20).',
    'Guarded. Symptoms may attenuate with age (after 40s). Comorbid substance use worsens prognosis.',
    'Treatment focuses on building skills for managing impulses and understanding consequences of behavior.',
  ),

  // ---------------------------------------------------------------------------
  // SUBSTANCE USE DISORDERS (3)
  // ---------------------------------------------------------------------------
  'alcohol-use-disorder': psy(
    'alcohol-use-disorder', 'Alcohol Use Disorder', 'Trastorno por Consumo de Alcohol', 'substance',
    'Problematic pattern of alcohol use leading to clinically significant impairment or distress.',
    'Lifetime prevalence ~29%. Male-to-female ratio 2:1. Often onset in 20s-30s.',
    ['Cravings', 'Tolerance', 'Withdrawal (tremors, seizures, delirium tremens)', 'Loss of control over intake', 'Continued use despite consequences', 'Social/occupational impairment', 'Neglect of activities'],
    'DSM-5: 2+ of 11 criteria within 12 months. Severity: mild (2-3), moderate (4-5), severe (6+).',
    ['Generalized anxiety disorder', 'MDD', 'Bipolar disorder', 'Social anxiety disorder', 'Liver disease from other causes'],
    'Medical detoxification if needed, then naltrexone or acamprosate plus psychotherapy.',
    ['Naltrexone', 'Acamprosate', 'Disulfiram', 'Gabapentin', 'Topiramate', 'Benzodiazepines (withdrawal only)'],
    'Motivational interviewing, CBT, 12-step facilitation, contingency management.',
    'Alcohol withdrawal can be life-threatening. Use CIWA protocol. Delirium tremens requires ICU-level care.',
    'About one-third each: sustained remission, improved, and chronic relapsing. Early intervention improves outcomes.',
    'Recovery is a journey, not a destination. Many effective treatments exist, and relapse does not mean failure.',
  ),

  'opioid-use-disorder': psy(
    'opioid-use-disorder', 'Opioid Use Disorder', 'Trastorno por Consumo de Opioides', 'substance',
    'Problematic pattern of opioid use leading to significant impairment, with high risk of overdose death.',
    'Prevalence ~2% in the US. Major cause of overdose mortality. Affects all demographics.',
    ['Cravings', 'Tolerance', 'Withdrawal (myalgias, diarrhea, lacrimation, rhinorrhea)', 'Continued use despite harm', 'Inability to cut down', 'Social/occupational impairment', 'Miosis during intoxication'],
    'DSM-5: 2+ of 11 criteria within 12 months. Severity: mild, moderate, severe.',
    ['Chronic pain conditions', 'Other substance use disorders', 'MDD', 'Anxiety disorders', 'Antisocial personality disorder'],
    'Medication-assisted treatment (MAT): buprenorphine/naloxone or methadone maintenance. Naltrexone XR as alternative.',
    ['Buprenorphine/Naloxone', 'Methadone', 'Naltrexone XR', 'Clonidine (withdrawal)', 'Lofexidine'],
    'CBT, contingency management, motivational interviewing, peer support.',
    'Naloxone for overdose reversal (all patients should have access). Overdose prevention education.',
    'MAT reduces mortality by 50%+. Long-term maintenance is more effective than detox alone.',
    'Medication-assisted treatment is the standard of care and saves lives. There is no shame in using it.',
  ),

  'cannabis-use-disorder': psy(
    'cannabis-use-disorder', 'Cannabis Use Disorder', 'Trastorno por Consumo de Cannabis', 'substance',
    'Problematic cannabis use leading to impairment, often underrecognized due to perceived low risk.',
    'Prevalence ~1.5-3%. Increasing with legalization. Risk higher with adolescent-onset use.',
    ['Cravings', 'Tolerance', 'Withdrawal (irritability, insomnia, appetite changes)', 'Using more than intended', 'Failed attempts to cut down', 'Cognitive impairment', 'Amotivational syndrome'],
    'DSM-5: 2+ of 11 criteria within 12 months. Cannabis withdrawal now recognized in DSM-5.',
    ['Anxiety disorders', 'MDD', 'Psychotic disorders (cannabis-induced)', 'ADHD', 'Other substance use disorders'],
    'Psychotherapy is first-line. No FDA-approved medications for cannabis use disorder.',
    ['No FDA-approved medications. Symptomatic: N-acetylcysteine (studied in adolescents), gabapentin, sleep aids'],
    'CBT, motivational enhancement therapy (MET), contingency management.',
    'Cannabis-induced psychosis: antipsychotic treatment. Cannabinoid hyperemesis: hot showers, capsaicin, supportive care.',
    'Variable. ~1 in 10 users develops a use disorder. Prognosis improves with motivation and structured support.',
    'Cannabis can affect memory, motivation, and mental health. If you want to cut back, proven therapies can help.',
  ),

  // ---------------------------------------------------------------------------
  // NEURODEVELOPMENTAL (2)
  // ---------------------------------------------------------------------------
  'adhd-adult': psy(
    'adhd-adult', 'ADHD (Adult)', 'TDAH (Adulto)', 'neurodevelopmental',
    'Persistent pattern of inattention and/or hyperactivity-impulsivity that impairs functioning in adults.',
    'Adult prevalence ~2.5-4%. Often underdiagnosed. Childhood symptoms must have been present before age 12.',
    ['Difficulty sustaining attention', 'Easily distracted', 'Forgetfulness in daily activities', 'Poor time management', 'Disorganization', 'Restlessness', 'Impulsive decision-making', 'Emotional dysregulation'],
    'DSM-5: 5+ inattentive and/or hyperactive-impulsive symptoms for 6+ months; onset before age 12; impairment in 2+ settings.',
    ['Anxiety disorders', 'MDD', 'Bipolar disorder', 'Substance use disorder', 'Borderline personality disorder', 'Sleep disorders'],
    'Stimulant medication (methylphenidate or amphetamine-based) is first-line pharmacotherapy.',
    ['Methylphenidate ER', 'Lisdexamfetamine', 'Mixed amphetamine salts', 'Atomoxetine', 'Bupropion', 'Guanfacine ER'],
    'CBT for ADHD, organizational skills training, coaching, psychoeducation.',
    'Screen for substance misuse before prescribing stimulants. Monitor cardiovascular parameters.',
    'Chronic condition. Medication plus behavioral strategies yields best outcomes. Many adults thrive with proper support.',
    'ADHD is a brain-based condition, not laziness. The right treatment can be transformative.',
  ),

  'autism-spectrum-adult': psy(
    'autism-spectrum-adult', 'Autism Spectrum Disorder (Adult)', 'Trastorno del Espectro Autista (Adulto)', 'neurodevelopmental',
    'Neurodevelopmental condition with differences in social communication and restricted/repetitive behaviors.',
    'Prevalence ~1-2%. Male-to-female diagnosed ratio ~3:1 (females underdiagnosed). Many adults undiagnosed.',
    ['Difficulty with social reciprocity', 'Challenges reading nonverbal cues', 'Difficulty maintaining relationships', 'Restricted interests', 'Sensory sensitivities', 'Need for routine', 'Masking/camouflaging in social situations'],
    'DSM-5: Persistent deficits in social communication plus restricted/repetitive behaviors. Symptoms present from early development (may not fully manifest until social demands exceed capacity).',
    ['Social anxiety disorder', 'ADHD', 'Schizoid personality disorder', 'OCD', 'Alexithymia', 'Intellectual disability'],
    'No medication for core features. Treat comorbidities. Support through occupational therapy and skills training.',
    ['No core-feature medications. Comorbidity treatment: SSRIs (anxiety), stimulants (ADHD), melatonin (sleep)'],
    'Social skills groups, CBT adapted for autism, occupational therapy, vocational support.',
    'Sensory overload crises: reduce stimulation, provide quiet space. Meltdowns are not tantrums.',
    'Lifelong neurodevelopmental difference. With appropriate support, many autistic adults live independently and thrive.',
    'Autism is a neurological difference, not a disease. Understanding your brain helps you build a life that works for you.',
  ),

  // ---------------------------------------------------------------------------
  // TRAUMA (2)
  // ---------------------------------------------------------------------------
  'ptsd': psy(
    'ptsd', 'Post-Traumatic Stress Disorder', 'Trastorno de Estres Postraumatico', 'trauma',
    'Persistent re-experiencing, avoidance, negative cognitions, and hyperarousal following trauma exposure.',
    'Lifetime prevalence ~6-8%. Higher in women (~10% vs. ~4%). Highest after interpersonal violence and combat.',
    ['Intrusive memories or flashbacks', 'Nightmares', 'Avoidance of trauma reminders', 'Negative alterations in mood and cognition', 'Hypervigilance', 'Exaggerated startle response', 'Emotional numbing', 'Dissociative symptoms possible'],
    'DSM-5: Exposure to trauma plus symptoms from each cluster (intrusion, avoidance, negative cognitions/mood, arousal) for 1+ month.',
    ['Acute stress disorder', 'Adjustment disorder', 'MDD', 'Panic disorder', 'Traumatic brain injury', 'Complex PTSD'],
    'Trauma-focused CBT or prolonged exposure therapy. SSRI (sertraline, paroxetine) as pharmacotherapy.',
    ['Sertraline', 'Paroxetine', 'Venlafaxine', 'Prazosin (nightmares)', 'Fluoxetine'],
    'Prolonged exposure, cognitive processing therapy (CPT), and EMDR are first-line psychotherapies.',
    'Safety first: assess suicidality, substance use, and domestic violence. Grounding techniques for flashbacks.',
    'With evidence-based treatment, ~50-60% achieve remission. Early intervention prevents chronicity.',
    'What happened to you was not your fault. Effective treatments can help you process trauma and reclaim your life.',
  ),

  'acute-stress-disorder': psy(
    'acute-stress-disorder', 'Acute Stress Disorder', 'Trastorno de Estres Agudo', 'trauma',
    'Acute stress response within one month of trauma exposure, with dissociative and re-experiencing symptoms.',
    'Prevalence varies by trauma type (6-33%). Predictive of PTSD development in ~50% of cases.',
    ['Intrusive memories', 'Dissociative symptoms (derealization, depersonalization, amnesia)', 'Avoidance', 'Hyperarousal', 'Negative mood', 'Symptoms onset 3 days to 1 month post-trauma'],
    'DSM-5: 9+ symptoms from any of 5 categories, 3 days to 1 month after trauma exposure.',
    ['PTSD', 'Adjustment disorder', 'Panic disorder', 'Brief psychotic disorder', 'Dissociative disorders', 'Traumatic brain injury'],
    'Brief CBT with psychoeducation. Early intervention reduces progression to PTSD.',
    ['Short-term symptomatic only if needed. SSRIs if transitioning to PTSD. Avoid benzodiazepines.'],
    'Trauma-focused CBT (5-6 sessions). Psychological first aid. Psychoeducation and normalization.',
    'Provide safety and stabilization. Screen for suicidality. Avoid critical incident stress debriefing.',
    'Many recover spontaneously. Early trauma-focused CBT halves risk of progressing to PTSD.',
    'Acute stress reactions are normal responses to abnormal events. Early support makes a big difference.',
  ),

  // ---------------------------------------------------------------------------
  // EATING DISORDERS (2)
  // ---------------------------------------------------------------------------
  'anorexia-nervosa': psy(
    'anorexia-nervosa', 'Anorexia Nervosa', 'Anorexia Nerviosa', 'eating',
    'Restriction of energy intake leading to significantly low body weight with intense fear of weight gain.',
    'Lifetime prevalence ~0.5-1%. Female-to-male ratio ~10:1. Peak onset ages 14-18. Highest mortality of any psychiatric disorder.',
    ['Severe caloric restriction', 'Intense fear of gaining weight', 'Body image distortion', 'Amenorrhea', 'Bradycardia', 'Hypothermia', 'Lanugo hair', 'Electrolyte abnormalities', 'Osteoporosis'],
    'DSM-5: Restriction of intake leading to low body weight, intense fear of weight gain, disturbance in body image. Subtypes: restricting, binge-purge.',
    ['Bulimia nervosa', 'Avoidant/restrictive food intake disorder', 'MDD with appetite loss', 'Medical conditions (celiac, IBD, malignancy)', 'OCD'],
    'Nutritional rehabilitation plus psychotherapy. Medical stabilization if critically underweight.',
    ['Olanzapine (limited evidence for weight restoration)', 'SSRIs (for comorbid depression/anxiety)', 'Calcium and vitamin D supplementation'],
    'Family-based therapy (Maudsley) for adolescents. CBT-E for adults. Psychodynamic therapy.',
    'Refeeding syndrome risk: monitor phosphate, potassium, magnesium. Hospitalize if BMI <15 or medically unstable.',
    'Full recovery in ~50%. Mortality rate ~5-10% over 10 years. Early treatment improves outcomes dramatically.',
    'Recovery is possible at any stage. Your worth is not determined by your weight or what you eat.',
  ),

  'bulimia-nervosa': psy(
    'bulimia-nervosa', 'Bulimia Nervosa', 'Bulimia Nerviosa', 'eating',
    'Recurrent episodes of binge eating followed by compensatory behaviors to prevent weight gain.',
    'Lifetime prevalence ~1-1.5%. Female-to-male ratio ~10:1. Typical onset late adolescence.',
    ['Recurrent binge eating episodes', 'Compensatory purging (vomiting, laxatives, diuretics)', 'Excessive exercise', 'Self-evaluation unduly influenced by body shape', 'Russell sign (calluses on knuckles)', 'Dental erosion', 'Parotid gland enlargement', 'Electrolyte imbalance'],
    'DSM-5: Binge eating and compensatory behaviors at least once weekly for 3 months. Self-evaluation influenced by body shape.',
    ['Anorexia nervosa (binge-purge type)', 'Binge eating disorder', 'MDD', 'Borderline personality disorder', 'Kleine-Levin syndrome'],
    'Fluoxetine 60mg (FDA-approved) plus CBT-E is first-line combination.',
    ['Fluoxetine (60mg)', 'Topiramate (off-label)', 'Ondansetron (reduces purging)'],
    'CBT-E (enhanced) is gold standard. Interpersonal therapy. Guided self-help as initial step.',
    'Monitor electrolytes (hypokalemia risk of arrhythmia). Assess for suicidality and self-harm.',
    'With CBT-E, ~45% achieve full remission. Better prognosis than anorexia nervosa. Relapse prevention is key.',
    'Breaking the binge-purge cycle is possible. CBT gives you practical tools to change your relationship with food.',
  ),

  // ---------------------------------------------------------------------------
  // SLEEP DISORDERS (2)
  // ---------------------------------------------------------------------------
  'insomnia-disorder': psy(
    'insomnia-disorder', 'Insomnia Disorder', 'Trastorno de Insomnio', 'sleep',
    'Persistent difficulty with sleep initiation, maintenance, or early awakening despite adequate opportunity.',
    'Prevalence ~6-10% (chronic). More common in women and older adults. Often comorbid with psychiatric disorders.',
    ['Difficulty falling asleep', 'Difficulty staying asleep', 'Early morning awakening', 'Daytime fatigue', 'Irritability', 'Concentration difficulty', 'Impaired daytime functioning'],
    'DSM-5: Sleep difficulty 3+ nights/week for 3+ months despite adequate sleep opportunity, causing distress or impairment.',
    ['Sleep apnea', 'Restless legs syndrome', 'Circadian rhythm disorder', 'MDD', 'GAD', 'Substance use', 'Medical conditions (pain, GERD)'],
    'CBT for insomnia (CBT-I) is first-line treatment, superior to medications long-term.',
    ['Suvorexant', 'Lemborexant', 'Ramelteon', 'Doxepin (low-dose)', 'Trazodone', 'Zolpidem (short-term only)'],
    'CBT-I: sleep restriction, stimulus control, cognitive restructuring, sleep hygiene, relaxation training.',
    'Assess for underlying medical or psychiatric causes. Avoid long-term benzodiazepine/Z-drug use.',
    'CBT-I produces durable improvement in ~70-80%. Medication provides short-term relief but does not cure.',
    'Good sleep is a skill you can learn. CBT for insomnia is more effective than sleeping pills long-term.',
  ),

  'circadian-rhythm-disorders': psy(
    'circadian-rhythm-disorders', 'Circadian Rhythm Sleep-Wake Disorders', 'Trastornos del Ritmo Circadiano', 'sleep',
    'Persistent disruption of the sleep-wake cycle due to misalignment between internal clock and environment.',
    'Delayed sleep phase: ~7-16% in adolescents. Shift work type: affects ~10% of shift workers. Advanced phase: more common in elderly.',
    ['Sleep-wake timing misaligned with desired schedule', 'Excessive sleepiness at inappropriate times', 'Insomnia at desired bedtime', 'Impaired daytime functioning', 'Normal sleep quality when allowed to follow natural rhythm'],
    'ICSD-3/DSM-5: Persistent sleep-wake rhythm disruption due to circadian misalignment causing distress or impairment. Subtypes: delayed phase, advanced phase, shift work, jet lag, non-24-hour, irregular.',
    ['Insomnia disorder', 'MDD', 'ADHD', 'Bipolar disorder (circadian disruption is common)', 'Sleep apnea', 'Poor sleep hygiene'],
    'Chronotherapy: strategic light exposure plus melatonin timing. Sleep schedule shifting.',
    ['Melatonin (timed administration)', 'Ramelteon', 'Tasimelteon (non-24-hour type)', 'Modafinil (shift work type)'],
    'Light therapy (bright light boxes), chronotherapy, sleep schedule optimization, psychoeducation.',
    'Shift workers: napping strategies, light management. Assess for comorbid mood and substance issues.',
    'Good with adherence to chronotherapy. Delayed sleep phase may persist without ongoing management.',
    'Your internal clock is real biology. Working with it rather than against it makes a major difference.',
  ),

  // ---------------------------------------------------------------------------
  // THERAPEUTIC APPROACHES (2)
  // ---------------------------------------------------------------------------
  'cbt-overview': psy(
    'cbt-overview', 'Cognitive Behavioral Therapy (CBT)', 'Terapia Cognitivo Conductual (TCC)', 'therapeutic',
    'Structured, evidence-based psychotherapy targeting the interplay of thoughts, emotions, and behaviors.',
    'Most extensively studied psychotherapy. Effective across mood, anxiety, psychotic, eating, substance, and personality disorders.',
    ['Collaborative empiricism', 'Socratic questioning', 'Cognitive restructuring', 'Behavioral experiments', 'Exposure techniques', 'Activity scheduling', 'Thought records', 'Homework assignments between sessions'],
    'Not a diagnosis but a treatment modality. Typically 12-20 sessions. Adaptations exist for specific disorders (CBT-I, CBT-E, CBT for psychosis).',
    ['Psychodynamic therapy', 'Interpersonal therapy', 'DBT', 'ACT', 'Mindfulness-based therapies'],
    'First-line psychotherapy for most anxiety and mood disorders. Often combined with medication.',
    ['N/A - CBT is a psychotherapy, not a medication. Often used alongside pharmacotherapy.'],
    'Core model: cognitive triangle (thoughts-feelings-behaviors). Skills are practiced and generalized to daily life.',
    'CBT skills (e.g., grounding, cognitive defusion) can be used as crisis coping strategies.',
    'Strong evidence base across disorders. Effects are durable beyond treatment end, often outperforming medication long-term.',
    'CBT teaches practical skills you keep for life. The goal is to become your own therapist over time.',
  ),

  'motivational-interviewing': psy(
    'motivational-interviewing', 'Motivational Interviewing', 'Entrevista Motivacional', 'therapeutic',
    'Collaborative, person-centered counseling approach to strengthen motivation for behavior change.',
    'Developed by Miller and Rollnick (1983). Widely used in substance use, chronic disease management, and health behavior change.',
    ['Open-ended questions (OARS)', 'Affirmations', 'Reflective listening', 'Summarizing', 'Eliciting change talk', 'Rolling with resistance', 'Developing discrepancy', 'Supporting self-efficacy'],
    'Not a diagnosis. A communication style and clinical method. Can be brief (single session) or extended. Compatible with other therapies.',
    ['CBT', 'Psychoeducation', 'Directive counseling', '12-step facilitation', 'Harm reduction approaches'],
    'First-line approach for ambivalence about behavior change, especially in substance use disorders.',
    ['N/A - MI is a counseling approach. Often precedes or accompanies pharmacotherapy decisions.'],
    'Spirit: partnership, acceptance, compassion, evocation. Aims to resolve ambivalence toward change.',
    'MI techniques (reflective listening, affirmations) can de-escalate crisis situations and build rapport.',
    'Meta-analyses show MI improves treatment engagement and outcomes across multiple health behaviors.',
    'Change is most lasting when it comes from within. MI helps you find your own reasons and confidence to change.',
  ),
};

// =============================================================================
// QUERY FUNCTIONS
// =============================================================================

/** Retrieve a single entry by ID */
export function getPsychiatryEntry(id: string): PsychiatryEntry | undefined {
  return PSYCHIATRY_ENTRIES[id];
}

/** Search entries by keyword across name, summary, and clinical features */
export function searchPsychiatry(query: string): PsychiatryEntry[] {
  const q = query.toLowerCase();
  return Object.values(PSYCHIATRY_ENTRIES).filter(entry =>
    entry.name.toLowerCase().includes(q) ||
    entry.nameEs.toLowerCase().includes(q) ||
    entry.summary.toLowerCase().includes(q) ||
    entry.clinicalFeatures.some(f => f.toLowerCase().includes(q)) ||
    entry.medications.some(m => m.toLowerCase().includes(q))
  );
}

/** Get all entries for a given subcategory */
export function getPsychiatryBySubcategory(sub: PsychiatryEntry['subcategory']): PsychiatryEntry[] {
  return Object.values(PSYCHIATRY_ENTRIES).filter(e => e.subcategory === sub);
}

/** Total number of entries */
export function getPsychiatryCount(): number {
  return Object.keys(PSYCHIATRY_ENTRIES).length;
}
