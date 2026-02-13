/**
 * Psychiatric Conditions Database
 *
 * Comprehensive reference of psychiatric/mental health conditions with
 * clinical summaries, diagnostics, treatment options, and patient education.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type PsychCategory =
  | 'mood'
  | 'anxiety'
  | 'psychotic'
  | 'trauma'
  | 'obsessive-compulsive';

export interface PsychConditionEntry {
  id: string;
  name: string;
  nameEs: string;
  category: PsychCategory;
  icd11: string;
  description: string;
  descriptionEs: string;
  riskFactors: string[];
  pathophysiology: string;
  pathophysiologyEs: string;
  symptoms: string[];
  diagnostics: {
    tests: string[];
    imaging: string[];
    criteria: string[];
  };
  treatment: {
    medications: string[];
    procedures: string[];
    lifestyle: string[];
  };
  emergencySigns: string[];
  patientExplanation: string;
  patientExplanationEs: string;
}

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const PSYCH_CONDITIONS: Record<string, PsychConditionEntry> = {

  'major-depressive-disorder': {
    id: 'major-depressive-disorder',
    name: 'Major Depressive Disorder (MDD)',
    nameEs: 'Trastorno Depresivo Mayor',
    category: 'mood',
    icd11: '6A70',
    description: 'Persistent depressed mood or loss of interest/pleasure lasting at least 2 weeks, accompanied by neurovegetative symptoms causing significant functional impairment. MDD is one of the leading causes of disability worldwide.',
    descriptionEs: 'Estado de ánimo deprimido persistente o pérdida de interés/placer durante al menos 2 semanas, acompañado de síntomas neurovegetativos que causan deterioro funcional significativo. El TDM es una de las principales causas de discapacidad en todo el mundo.',
    riskFactors: ['Family history of depression', 'Prior depressive episodes', 'Chronic medical illness', 'Substance abuse', 'Major life stressors', 'Female gender', 'Childhood trauma', 'Lack of social support'],
    pathophysiology: 'Monoamine deficiency (serotonin, norepinephrine, dopamine), HPA axis dysregulation with elevated cortisol, reduced BDNF and hippocampal neuroplasticity. Neuroinflammation with elevated pro-inflammatory cytokines and disrupted default mode network connectivity contribute to symptoms.',
    pathophysiologyEs: 'Deficiencia de monoaminas (serotonina, norepinefrina, dopamina), desregulación del eje HPA con cortisol elevado, BDNF reducido y neuroplasticidad hipocampal disminuida. La neuroinflamación con citocinas proinflamatorias elevadas y conectividad alterada de la red de modo predeterminado contribuyen a los síntomas.',
    symptoms: ['Depressed mood most of the day', 'Anhedonia (loss of interest or pleasure)', 'Significant weight change or appetite disturbance', 'Insomnia or hypersomnia', 'Psychomotor agitation or retardation', 'Fatigue or loss of energy', 'Feelings of worthlessness or excessive guilt', 'Impaired concentration or indecisiveness', 'Recurrent thoughts of death or suicidal ideation'],
    diagnostics: {
      tests: ['PHQ-9 screening (score ≥10 suggests moderate depression)', 'DSM-5 criteria assessment', 'Columbia Suicide Severity Rating Scale (C-SSRS)', 'TSH and CBC to rule out medical causes'],
      imaging: ['Brain MRI if atypical features or neurological signs present'],
      criteria: ['≥5 symptoms present for ≥2 weeks', 'Must include depressed mood or anhedonia', 'Symptoms cause clinically significant distress or impairment', 'Not attributable to substance use or medical condition'],
    },
    treatment: {
      medications: ['SSRIs (sertraline, escitalopram, fluoxetine) - first-line', 'SNRIs (venlafaxine, duloxetine)', 'Bupropion for atypical features', 'Mirtazapine for insomnia/poor appetite', 'Augmentation with aripiprazole, lithium, or thyroid hormone if partial response'],
      procedures: ['Cognitive Behavioral Therapy (CBT)', 'Interpersonal Therapy (IPT)', 'Electroconvulsive Therapy (ECT) for severe or treatment-resistant cases', 'Transcranial Magnetic Stimulation (TMS)', 'Esketamine (Spravato) nasal spray for treatment-resistant depression'],
      lifestyle: ['Regular aerobic exercise (30 min, 5x/week)', 'Sleep hygiene optimization', 'Social support engagement', 'Stress reduction techniques (mindfulness, meditation)', 'Avoidance of alcohol and recreational drugs'],
    },
    emergencySigns: ['Active suicidal ideation with plan or intent', 'Psychotic symptoms', 'Catatonia', 'Inability to care for self', 'Severe agitation or risk of harm to others'],
    patientExplanation: 'Major depression is more than just feeling sad—it\'s a medical condition that affects your brain chemistry, mood, energy, sleep, and ability to enjoy life. Just like diabetes or high blood pressure, it requires treatment. Antidepressants help restore balance to brain chemicals, while therapy teaches skills to manage negative thoughts and behaviors. Most people improve with treatment, though it may take several weeks to notice changes. Recovery is possible, and seeking help is a sign of strength.',
    patientExplanationEs: 'La depresión mayor es más que sentirse triste: es una condición médica que afecta la química cerebral, el estado de ánimo, la energía, el sueño y la capacidad de disfrutar la vida. Al igual que la diabetes o la presión arterial alta, requiere tratamiento. Los antidepresivos ayudan a restaurar el equilibrio de los químicos cerebrales, mientras que la terapia enseña habilidades para manejar pensamientos y comportamientos negativos. La mayoría de las personas mejoran con tratamiento, aunque puede tomar varias semanas notar cambios. La recuperación es posible y buscar ayuda es una señal de fortaleza.',
  },

  'bipolar-disorder': {
    id: 'bipolar-disorder',
    name: 'Bipolar Disorder',
    nameEs: 'Trastorno Bipolar',
    category: 'mood',
    icd11: '6A60',
    description: 'Chronic mood disorder characterized by recurrent episodes of mania or hypomania alternating with depressive episodes. Bipolar I involves full manic episodes; Bipolar II involves hypomanic episodes with major depression.',
    descriptionEs: 'Trastorno del estado de ánimo crónico caracterizado por episodios recurrentes de manía o hipomanía que alternan con episodios depresivos. El Bipolar I involucra episodios maníacos completos; el Bipolar II involucra episodios hipomaníacos con depresión mayor.',
    riskFactors: ['Strong genetic component (first-degree relatives)', 'Childhood trauma or abuse', 'Substance abuse', 'High stress levels', 'Sleep disruption', 'Antidepressant use (can trigger mania)'],
    pathophysiology: 'Dysregulation of monoaminergic systems, abnormalities in circadian rhythm genes (CLOCK, ARNTL), altered limbic-cortical connectivity, mitochondrial dysfunction, and calcium signaling abnormalities. Decreased gray matter volume in prefrontal cortex and enlarged ventricles observed on neuroimaging.',
    pathophysiologyEs: 'Desregulación de sistemas monoaminérgicos, anomalías en genes del ritmo circadiano (CLOCK, ARNTL), conectividad límbico-cortical alterada, disfunción mitocondrial y anomalías en la señalización de calcio. Se observa disminución del volumen de materia gris en la corteza prefrontal y ventrículos agrandados en neuroimagen.',
    symptoms: ['Manic: elevated/irritable mood, decreased need for sleep, grandiosity, pressured speech, racing thoughts, distractibility, increased goal-directed activity, risky behavior', 'Depressive: persistent sadness, anhedonia, fatigue, sleep disturbance, worthlessness, suicidal thoughts', 'Mixed features: simultaneous manic and depressive symptoms'],
    diagnostics: {
      tests: ['MDQ (Mood Disorder Questionnaire) screening', 'Comprehensive psychiatric evaluation', 'Detailed mood episode history', 'TSH, CBC, comprehensive metabolic panel', 'Urine drug screen', 'Consider HIV, syphilis testing'],
      imaging: ['Brain MRI if first episode or atypical presentation', 'To rule out neurological causes'],
      criteria: ['Bipolar I: ≥1 manic episode (≥7 days or hospitalization required)', 'Bipolar II: ≥1 hypomanic episode (≥4 days) plus ≥1 major depressive episode', 'No better explanation by schizoaffective disorder or psychotic disorders'],
    },
    treatment: {
      medications: ['Mood stabilizers: lithium (gold standard), valproate, carbamazepine', 'Atypical antipsychotics: quetiapine, olanzapine, aripiprazole, lurasidone', 'Lamotrigine for bipolar depression', 'Avoid antidepressant monotherapy (risk of inducing mania)'],
      procedures: ['Psychotherapy: CBT, family-focused therapy, interpersonal and social rhythm therapy', 'ECT for severe mania or depression', 'Psychoeducation about illness management', 'Crisis planning and relapse prevention'],
      lifestyle: ['Strict sleep schedule maintenance', 'Mood charting/monitoring', 'Stress management', 'Avoid alcohol and recreational drugs', 'Regular exercise', 'Social support groups'],
    },
    emergencySigns: ['Severe mania with psychosis', 'Suicidal ideation or behavior', 'Homicidal ideation', 'Severe impairment in judgment leading to dangerous behavior', 'Inability to meet basic needs'],
    patientExplanation: 'Bipolar disorder causes your mood to swing between extreme highs (mania) and lows (depression). During manic episodes, you might feel invincible, need little sleep, and make impulsive decisions. During depressive episodes, you feel the opposite—exhausted, hopeless, and unable to enjoy anything. These aren\'t personality flaws; they\'re symptoms of a brain condition that can be managed with medication and therapy. Mood stabilizers help prevent extreme highs and lows, while therapy teaches you to recognize warning signs and maintain healthy routines, especially around sleep.',
    patientExplanationEs: 'El trastorno bipolar causa oscilaciones del estado de ánimo entre extremos altos (manía) y bajos (depresión). Durante episodios maníacos, puede sentirse invencible, necesitar poco sueño y tomar decisiones impulsivas. Durante episodios depresivos, siente lo contrario: agotamiento, desesperanza e incapacidad de disfrutar nada. Estos no son defectos de personalidad; son síntomas de una condición cerebral que puede manejarse con medicamentos y terapia. Los estabilizadores del estado de ánimo ayudan a prevenir extremos altos y bajos, mientras que la terapia enseña a reconocer señales de alerta y mantener rutinas saludables, especialmente alrededor del sueño.',
  },

  'schizophrenia': {
    id: 'schizophrenia',
    name: 'Schizophrenia',
    nameEs: 'Esquizofrenia',
    category: 'psychotic',
    icd11: '6A20',
    description: 'Chronic psychotic disorder characterized by positive symptoms (hallucinations, delusions), negative symptoms (flat affect, avolition), and cognitive impairment. Onset typically in late adolescence to early adulthood with significant functional decline.',
    descriptionEs: 'Trastorno psicótico crónico caracterizado por síntomas positivos (alucinaciones, delirios), síntomas negativos (afecto plano, abulia) y deterioro cognitivo. El inicio típicamente ocurre entre la adolescencia tardía y la adultez temprana con deterioro funcional significativo.',
    riskFactors: ['Family history (10% if first-degree relative affected)', 'Prenatal complications (maternal infection, malnutrition)', 'Cannabis use in adolescence', 'Urban birth/upbringing', 'Migration/minority status', 'Advanced paternal age', 'Winter/spring birth', 'Childhood trauma'],
    pathophysiology: 'Dopamine hyperactivity in mesolimbic pathways (positive symptoms), dopamine hypoactivity in mesocortical pathways (negative/cognitive symptoms). Glutamate dysfunction (NMDA receptor hypofunction), loss of cortical gray matter, enlarged ventricles, and disrupted thalamo-cortical connectivity. Neurodevelopmental abnormalities present from early life.',
    pathophysiologyEs: 'Hiperactividad dopaminérgica en vías mesolímbicas (síntomas positivos), hipoactividad dopaminérgica en vías mesocorticales (síntomas negativos/cognitivos). Disfunción del glutamato (hipofunción del receptor NMDA), pérdida de materia gris cortical, ventrículos agrandados y conectividad tálamo-cortical interrumpida. Anomalías del neurodesarrollo presentes desde la vida temprana.',
    symptoms: ['Positive: auditory hallucinations, paranoid delusions, disorganized speech, grossly disorganized or catatonic behavior', 'Negative: flat affect, alogia (poverty of speech), avolition (lack of motivation), anhedonia, social withdrawal', 'Cognitive: impaired attention, working memory, executive function', 'Prodromal: social withdrawal, odd beliefs, perceptual disturbances'],
    diagnostics: {
      tests: ['Comprehensive psychiatric evaluation', 'Rule out substance-induced psychosis (urine drug screen)', 'TSH, CBC, CMP, B12, RPR/VDRL', 'Consider HIV testing', 'Cognitive assessment'],
      imaging: ['Brain MRI to rule out structural lesions, tumors, or demyelinating disease', 'May show enlarged ventricles, reduced cortical volume (non-specific)'],
      criteria: ['≥2 of: delusions, hallucinations, disorganized speech, grossly disorganized/catatonic behavior, negative symptoms', '≥1 must be delusions, hallucinations, or disorganized speech', 'Continuous signs for ≥6 months (including ≥1 month of active symptoms)', 'Significant functional decline', 'Not attributable to substances or medical condition'],
    },
    treatment: {
      medications: ['Atypical antipsychotics (preferred): risperidone, olanzapine, quetiapine, aripiprazole, paliperidone', 'Clozapine for treatment-resistant cases (requires monitoring for agranulocytosis)', 'Long-acting injectables (LAIs) for adherence issues', 'Typical antipsychotics: haloperidol (higher EPS risk)'],
      procedures: ['Assertive Community Treatment (ACT)', 'Cognitive Behavioral Therapy for psychosis (CBTp)', 'Social skills training', 'Supported employment and education programs', 'Family psychoeducation', 'ECT for catatonia or treatment-resistant cases'],
      lifestyle: ['Structured daily routine', 'Avoidance of substance use (especially cannabis)', 'Stress reduction', 'Adequate sleep', 'Supportive housing if needed', 'Vocational rehabilitation'],
    },
    emergencySigns: ['Command hallucinations to harm self or others', 'Severe disorganization with inability to care for self', 'Catatonia', 'Acute suicidal or homicidal ideation', 'First-break psychosis requiring stabilization'],
    patientExplanation: 'Schizophrenia is a brain disorder that affects how you think, feel, and perceive reality. You might hear voices others don\'t hear or believe things that aren\'t true. These experiences feel very real to you, but they\'re caused by chemical imbalances in your brain. Antipsychotic medications help reduce these symptoms by rebalancing brain chemicals. With treatment, many people with schizophrenia can manage their symptoms, maintain relationships, and pursue education or work. Recovery is a journey that requires patience, medication adherence, and support from family and healthcare providers.',
    patientExplanationEs: 'La esquizofrenia es un trastorno cerebral que afecta cómo piensa, siente y percibe la realidad. Puede escuchar voces que otros no escuchan o creer cosas que no son verdad. Estas experiencias se sienten muy reales para usted, pero son causadas por desequilibrios químicos en el cerebro. Los medicamentos antipsicóticos ayudan a reducir estos síntomas al reequilibrar los químicos cerebrales. Con tratamiento, muchas personas con esquizofrenia pueden manejar sus síntomas, mantener relaciones y seguir educación o trabajo. La recuperación es un viaje que requiere paciencia, adherencia a medicamentos y apoyo de familiares y proveedores de salud.',
  },

  'ptsd': {
    id: 'ptsd',
    name: 'Post-Traumatic Stress Disorder (PTSD)',
    nameEs: 'Trastorno de Estrés Postraumático (TEPT)',
    category: 'trauma',
    icd11: '6B40',
    description: 'Anxiety disorder that develops after exposure to a traumatic event involving actual or threatened death, serious injury, or sexual violence. Characterized by intrusive re-experiencing, avoidance, negative mood/cognition changes, and hyperarousal lasting >1 month.',
    descriptionEs: 'Trastorno de ansiedad que se desarrolla después de la exposición a un evento traumático que involucra muerte real o amenazada, lesión grave o violencia sexual. Caracterizado por re-experimentación intrusiva, evitación, cambios negativos en el estado de ánimo/cognición e hiperactivación que dura >1 mes.',
    riskFactors: ['Severity and duration of trauma', 'History of prior trauma (especially childhood)', 'Lack of social support', 'Pre-existing mental health conditions', 'Female gender', 'Peritraumatic dissociation', 'Family history of anxiety/depression'],
    pathophysiology: 'HPA axis dysregulation with altered cortisol response, amygdala hyperactivity (fear response), hippocampal volume reduction (memory processing), and prefrontal cortex hypoactivity (emotion regulation). Increased noradrenergic activity contributes to hyperarousal. Fear conditioning and impaired fear extinction are central mechanisms.',
    pathophysiologyEs: 'Desregulación del eje HPA con respuesta de cortisol alterada, hiperactividad de la amígdala (respuesta al miedo), reducción del volumen del hipocampo (procesamiento de memoria) e hipoactividad de la corteza prefrontal (regulación emocional). El aumento de la actividad noradrenérgica contribuye a la hiperactivación. El condicionamiento del miedo y la extinción del miedo deteriorada son mecanismos centrales.',
    symptoms: ['Intrusive memories or flashbacks of the trauma', 'Nightmares related to the event', 'Avoidance of trauma reminders (places, people, conversations)', 'Emotional numbing or detachment', 'Negative beliefs about self or world', 'Hypervigilance', 'Exaggerated startle response', 'Irritability or angry outbursts', 'Difficulty concentrating', 'Sleep disturbances'],
    diagnostics: {
      tests: ['PCL-5 (PTSD Checklist for DSM-5)', 'CAPS-5 (Clinician-Administered PTSD Scale)', 'Detailed trauma history', 'PHQ-9 for comorbid depression screening', 'Rule out substance use disorders'],
      imaging: ['Neuroimaging not routinely indicated', 'MRI may show reduced hippocampal volume (research finding)'],
      criteria: ['Exposure to trauma (direct, witnessed, or learned about close other)', 'Intrusion symptoms (≥1)', 'Avoidance (≥1)', 'Negative alterations in cognition/mood (≥2)', 'Alterations in arousal/reactivity (≥2)', 'Duration >1 month', 'Significant distress or functional impairment'],
    },
    treatment: {
      medications: ['SSRIs: sertraline, paroxetine (FDA-approved for PTSD)', 'SNRIs: venlafaxine', 'Prazosin for nightmares', 'Avoid benzodiazepines (may worsen outcomes)'],
      procedures: ['Trauma-focused CBT', 'Prolonged Exposure (PE) therapy', 'Eye Movement Desensitization and Reprocessing (EMDR)', 'Cognitive Processing Therapy (CPT)', 'Group therapy for peer support'],
      lifestyle: ['Regular exercise', 'Mindfulness and grounding techniques', 'Sleep hygiene', 'Avoidance of alcohol and drugs', 'Social support engagement', 'Gradual exposure to safe situations'],
    },
    emergencySigns: ['Active suicidal ideation or plan', 'Severe dissociation with impaired functioning', 'Homicidal ideation', 'Self-harm behavior', 'Severe substance use relapse'],
    patientExplanation: 'PTSD occurs when your brain and body stay in "survival mode" long after a traumatic event has ended. Your brain\'s alarm system becomes overactive, making you feel constantly on edge and causing vivid memories or nightmares of the trauma. You might avoid people, places, or activities that remind you of what happened. This is a normal response to an abnormal situation. Evidence-based therapies like PE or EMDR help you safely process traumatic memories so they become less distressing. Medications can reduce anxiety and nightmares. Healing takes time, but most people with PTSD significantly improve with treatment.',
    patientExplanationEs: 'El TEPT ocurre cuando su cerebro y cuerpo permanecen en "modo de supervivencia" mucho después de que ha terminado un evento traumático. El sistema de alarma de su cerebro se vuelve hiperactivo, haciéndolo sentir constantemente nervioso y causando recuerdos vívidos o pesadillas del trauma. Puede evitar personas, lugares o actividades que le recuerdan lo sucedido. Esta es una respuesta normal a una situación anormal. Las terapias basadas en evidencia como PE o EMDR ayudan a procesar de manera segura los recuerdos traumáticos para que sean menos angustiantes. Los medicamentos pueden reducir la ansiedad y las pesadillas. La curación lleva tiempo, pero la mayoría de las personas con TEPT mejoran significativamente con tratamiento.',
  },

  'ocd': {
    id: 'ocd',
    name: 'Obsessive-Compulsive Disorder (OCD)',
    nameEs: 'Trastorno Obsesivo-Compulsivo (TOC)',
    category: 'obsessive-compulsive',
    icd11: '6B20',
    description: 'Chronic condition characterized by recurrent, intrusive obsessions (thoughts, urges, images) causing marked anxiety, and/or repetitive compulsions (behaviors or mental acts) performed to reduce distress. Time-consuming (>1 hour/day) and significantly impairing.',
    descriptionEs: 'Condición crónica caracterizada por obsesiones recurrentes e intrusivas (pensamientos, impulsos, imágenes) que causan ansiedad marcada, y/o compulsiones repetitivas (comportamientos o actos mentales) realizadas para reducir la angustia. Consumen tiempo (>1 hora/día) y causan deterioro significativo.',
    riskFactors: ['Family history of OCD or tic disorders', 'Childhood trauma or abuse', 'Streptococcal infection in childhood (PANDAS)', 'Abnormal serotonin function', 'Perfectionism or high anxiety traits'],
    pathophysiology: 'Serotonin dysregulation in cortico-striato-thalamo-cortical (CSTC) circuits. Hyperactivity in orbitofrontal cortex (OFC), anterior cingulate cortex (ACC), and caudate nucleus leads to intrusive thoughts and difficulty inhibiting repetitive behaviors. Reduced inhibitory control and impaired cognitive flexibility.',
    pathophysiologyEs: 'Desregulación de la serotonina en circuitos cortico-estriado-tálamo-corticales (CSTC). La hiperactividad en la corteza orbitofrontal (COF), corteza cingulada anterior (CCA) y núcleo caudado conduce a pensamientos intrusivos y dificultad para inhibir comportamientos repetitivos. Control inhibitorio reducido y flexibilidad cognitiva deteriorada.',
    symptoms: ['Obsessions: contamination fears, doubts, need for symmetry/order, forbidden thoughts (sexual, religious, aggressive)', 'Compulsions: excessive cleaning/washing, checking, counting, ordering/arranging, mental rituals', 'Recognition that obsessions/compulsions are excessive or unreasonable (in most adults)', 'Significant time consumed (>1 hour/day)', 'Functional impairment in work, social, or personal life'],
    diagnostics: {
      tests: ['Yale-Brown Obsessive Compulsive Scale (Y-BOCS)', 'Comprehensive psychiatric evaluation', 'Rule out body dysmorphic disorder, hoarding disorder, tic disorders', 'Consider PANDAS if childhood onset with temporal link to strep infection'],
      imaging: ['Brain imaging not routinely required', 'fMRI research shows hyperactivity in OFC, ACC, caudate'],
      criteria: ['Presence of obsessions, compulsions, or both', 'Time-consuming (>1 hour/day) or cause significant distress/impairment', 'Not attributable to substance use or another medical condition', 'Not better explained by another mental disorder'],
    },
    treatment: {
      medications: ['SSRIs at high doses: fluoxetine 40-80mg, sertraline 150-200mg, paroxetine 40-60mg', 'Clomipramine (tricyclic) - effective but more side effects', 'Augmentation with atypical antipsychotics (risperidone, aripiprazole) for refractory cases'],
      procedures: ['Exposure and Response Prevention (ERP) - gold standard psychotherapy', 'Cognitive Behavioral Therapy (CBT)', 'Deep Brain Stimulation (DBS) for severe, treatment-resistant OCD', 'Transcranial Magnetic Stimulation (TMS)'],
      lifestyle: ['Stress management techniques', 'Regular sleep schedule', 'Exercise', 'Avoidance of alcohol/caffeine excess', 'Family education and support', 'Support groups (e.g., IOCDF)'],
    },
    emergencySigns: ['Severe functional impairment (unable to work, leave home, or care for self)', 'Suicidal ideation', 'Harm-related obsessions with risk of acting on compulsions', 'Severe malnutrition or dehydration from contamination fears'],
    patientExplanation: 'OCD is not about being neat or organized—it\'s a medical condition where your brain gets stuck on certain thoughts (obsessions) that cause intense anxiety, and you feel compelled to perform repetitive behaviors (compulsions) to relieve that anxiety. It\'s like a false alarm in your brain that won\'t turn off. The best treatment is a specific type of therapy called Exposure and Response Prevention (ERP), where you gradually face feared situations without performing compulsions, teaching your brain the alarm is false. Medications can also help by reducing the intensity of obsessions and making therapy easier.',
    patientExplanationEs: 'El TOC no se trata de ser ordenado u organizado: es una condición médica donde su cerebro se queda atascado en ciertos pensamientos (obsesiones) que causan ansiedad intensa, y se siente obligado a realizar comportamientos repetitivos (compulsiones) para aliviar esa ansiedad. Es como una alarma falsa en su cerebro que no se apaga. El mejor tratamiento es un tipo específico de terapia llamada Exposición y Prevención de Respuesta (EPR), donde enfrenta gradualmente situaciones temidas sin realizar compulsiones, enseñando a su cerebro que la alarma es falsa. Los medicamentos también pueden ayudar al reducir la intensidad de las obsesiones y facilitar la terapia.',
  },

  'gad': {
    id: 'gad',
    name: 'Generalized Anxiety Disorder (GAD)',
    nameEs: 'Trastorno de Ansiedad Generalizada (TAG)',
    category: 'anxiety',
    icd11: '6B00',
    description: 'Chronic condition characterized by excessive, uncontrollable worry about multiple life domains (work, health, finances, relationships) occurring more days than not for at least 6 months. Associated with physical symptoms and significant distress or impairment.',
    descriptionEs: 'Condición crónica caracterizada por preocupación excesiva e incontrolable sobre múltiples dominios de la vida (trabajo, salud, finanzas, relaciones) que ocurre más días que no durante al menos 6 meses. Asociada con síntomas físicos y angustia o deterioro significativo.',
    riskFactors: ['Family history of anxiety disorders', 'Female gender', 'Childhood adversity or trauma', 'Chronic medical conditions', 'Substance abuse', 'Personality traits (neuroticism, behavioral inhibition)', 'Chronic stress'],
    pathophysiology: 'Dysregulation of GABA and serotonin systems, amygdala hyperactivity, reduced prefrontal cortex control over emotional responses. Hyperactivity of the HPA axis with chronic elevated cortisol. Increased sympathetic nervous system tone leads to physical symptoms of anxiety.',
    pathophysiologyEs: 'Desregulación de los sistemas GABA y serotonina, hiperactividad de la amígdala, control reducido de la corteza prefrontal sobre las respuestas emocionales. Hiperactividad del eje HPA con cortisol crónicamente elevado. El tono aumentado del sistema nervioso simpático conduce a síntomas físicos de ansiedad.',
    symptoms: ['Excessive worry difficult to control', 'Restlessness or feeling on edge', 'Easily fatigued', 'Difficulty concentrating or mind going blank', 'Irritability', 'Muscle tension', 'Sleep disturbance (difficulty falling/staying asleep)'],
    diagnostics: {
      tests: ['GAD-7 screening questionnaire (score ≥10 suggests GAD)', 'Comprehensive psychiatric evaluation', 'TSH, CBC to rule out hyperthyroidism or anemia', 'EKG if cardiac symptoms present', 'Rule out substance use or caffeine excess'],
      imaging: ['Imaging not routinely indicated', 'Obtain if physical symptoms suggest medical condition'],
      criteria: ['Excessive anxiety and worry about multiple events/activities', 'Occurring more days than not for ≥6 months', 'Difficulty controlling the worry', '≥3 associated symptoms (1 in children): restlessness, fatigue, concentration difficulty, irritability, muscle tension, sleep disturbance', 'Significant distress or functional impairment', 'Not attributable to substances or medical condition'],
    },
    treatment: {
      medications: ['SSRIs: escitalopram, sertraline, paroxetine (first-line)', 'SNRIs: venlafaxine, duloxetine', 'Buspirone (non-addictive anxiolytic)', 'Pregabalin for refractory cases', 'Short-term benzodiazepines only if necessary (risk of dependence)'],
      procedures: ['Cognitive Behavioral Therapy (CBT)', 'Acceptance and Commitment Therapy (ACT)', 'Relaxation training (progressive muscle relaxation, diaphragmatic breathing)', 'Mindfulness-Based Stress Reduction (MBSR)', 'Biofeedback'],
      lifestyle: ['Regular aerobic exercise', 'Caffeine and alcohol reduction', 'Sleep hygiene optimization', 'Mindfulness meditation', 'Stress management techniques', 'Social support engagement', 'Time management and problem-solving skills'],
    },
    emergencySigns: ['Panic attacks with chest pain (rule out cardiac emergency)', 'Suicidal ideation', 'Severe functional decline (unable to work or care for self)', 'Acute substance intoxication or withdrawal'],
    patientExplanation: 'GAD means your brain\'s "worry system" is overactive, causing you to feel anxious about many things even when there\'s little real danger. You might constantly worry about work, health, family, or money, and find it hard to relax. Your body stays tense, leading to muscle aches, fatigue, and trouble sleeping. This isn\'t a character flaw—it\'s a treatable medical condition. Therapy teaches you techniques to manage worry more effectively, while medications help calm your overactive anxiety system. Most people see significant improvement with a combination of medication and CBT.',
    patientExplanationEs: 'El TAG significa que el "sistema de preocupación" de su cerebro está hiperactivo, causándole ansiedad sobre muchas cosas incluso cuando hay poco peligro real. Puede preocuparse constantemente por el trabajo, la salud, la familia o el dinero, y le resulta difícil relajarse. Su cuerpo permanece tenso, causando dolores musculares, fatiga y problemas para dormir. Esto no es un defecto de carácter: es una condición médica tratable. La terapia le enseña técnicas para manejar la preocupación de manera más efectiva, mientras que los medicamentos ayudan a calmar su sistema de ansiedad hiperactivo. La mayoría de las personas ven una mejora significativa con una combinación de medicamentos y TCC.',
  },

};

// ---------------------------------------------------------------------------
// Utility functions
// ---------------------------------------------------------------------------

/** Get a single psychiatric condition by ID. */
export function getPsychConditionById(id: string): PsychConditionEntry | undefined {
  return PSYCH_CONDITIONS[id];
}

/** Search conditions by name, category, or any text field (case-insensitive). */
export function searchPsychConditions(query: string): PsychConditionEntry[] {
  const q = query.toLowerCase();
  return Object.values(PSYCH_CONDITIONS).filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.nameEs.toLowerCase().includes(q) ||
    c.category.toLowerCase().includes(q) ||
    c.description.toLowerCase().includes(q) ||
    c.descriptionEs.toLowerCase().includes(q) ||
    c.pathophysiology.toLowerCase().includes(q) ||
    c.pathophysiologyEs.toLowerCase().includes(q) ||
    c.patientExplanation.toLowerCase().includes(q) ||
    c.patientExplanationEs.toLowerCase().includes(q),
  );
}

/** Filter conditions by category. */
export function getPsychByCategory(category: PsychCategory): PsychConditionEntry[] {
  return Object.values(PSYCH_CONDITIONS).filter(c => c.category === category);
}

/** Return the total number of psychiatric conditions in the database. */
export function getPsychConditionCount(): number {
  return Object.keys(PSYCH_CONDITIONS).length;
}
