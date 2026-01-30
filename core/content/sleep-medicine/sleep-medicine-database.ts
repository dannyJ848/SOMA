/**
 * Sleep Medicine Database
 *
 * Comprehensive structured database of sleep medicine conditions, diagnostics,
 * and behavioral interventions for the SOMA medical education platform.
 *
 * Categories: insomnia, sleep-breathing, hypersomnia, circadian,
 *             parasomnia, movement, diagnostic, behavioral
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type SleepCategory =
  | 'insomnia'
  | 'sleep-breathing'
  | 'hypersomnia'
  | 'circadian'
  | 'parasomnia'
  | 'movement'
  | 'diagnostic'
  | 'behavioral';

export interface SleepMedicineEntry {
  id: string;
  name: string;
  nameEs: string;
  category: SleepCategory;
  icd11: string;
  description: string;
  pathophysiology: string;
  clinicalFeatures: string[];
  diagnostics: string[];
  treatment: string[];
  complications: string[];
  patientExplanation: string;
}

// ---------------------------------------------------------------------------
// Helper
// ---------------------------------------------------------------------------

const entry = (
  id: string,
  name: string,
  nameEs: string,
  category: SleepCategory,
  icd11: string,
  description: string,
  pathophysiology: string,
  clinicalFeatures: string[],
  diagnostics: string[],
  treatment: string[],
  complications: string[],
  patientExplanation: string,
): SleepMedicineEntry => ({
  id,
  name,
  nameEs,
  category,
  icd11,
  description,
  pathophysiology,
  clinicalFeatures,
  diagnostics,
  treatment,
  complications,
  patientExplanation,
});

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const SLEEP_MEDICINE_ENTRIES: Record<string, SleepMedicineEntry> = {
  // ── INSOMNIA ─────────────────────────────────────────────────────────────

  'chronic-insomnia-disorder': entry(
    'chronic-insomnia-disorder',
    'Chronic Insomnia Disorder',
    'Trastorno de insomnio cronico',
    'insomnia',
    '7A00',
    'Persistent difficulty initiating or maintaining sleep, or early morning awakening, occurring at least 3 nights per week for at least 3 months despite adequate opportunity, causing daytime impairment.',
    'The Spielman 3P model explains chronicity through predisposing traits (genetic hyperarousal, anxiety-prone temperament), precipitating events (stress, illness), and perpetuating factors (maladaptive sleep behaviors, conditioned arousal). Neurobiologically, 24-hour hyperarousal is evidenced by elevated cortisol, increased whole-brain glucose metabolism on FDG-PET during NREM, and enhanced high-frequency EEG activity.',
    [
      'Sleep-onset latency >30 minutes',
      'Frequent nocturnal awakenings with difficulty returning to sleep',
      'Early morning awakening >30 minutes before desired time',
      'Daytime fatigue, impaired concentration, and mood disturbance',
      'Anxiety or dread surrounding the sleep period',
    ],
    [
      'Clinical interview with 2-week sleep diary',
      'Insomnia Severity Index (ISI) questionnaire',
      'Actigraphy for objective sleep-wake pattern assessment',
      'Polysomnography only if comorbid sleep disorder suspected (e.g., OSA)',
      'Dysfunctional Beliefs and Attitudes about Sleep (DBAS) scale',
    ],
    [
      'CBT-I as first-line: sleep restriction, stimulus control, cognitive restructuring, relaxation training',
      'Digital CBT-I (e.g., FDA-cleared apps) when in-person therapy unavailable',
      'Pharmacotherapy second-line: DORAs (suvorexant, lemborexant), low-dose doxepin, ramelteon',
      'Short-term Z-drugs (zolpidem, eszopiclone) with caution',
      'Avoid benzodiazepines and antihistamines for chronic use',
    ],
    [
      'Major depressive disorder (insomnia is an independent risk factor)',
      'Cardiovascular disease and hypertension',
      'Impaired immune function',
      'Increased accident and occupational injury risk',
      'Substance use disorders (self-medication with alcohol or sedatives)',
    ],
    'Chronic insomnia means you regularly have trouble falling asleep, staying asleep, or waking too early, even when you have plenty of time to sleep. It happens at least 3 nights a week for 3 months or more and makes you feel tired or unable to focus during the day. The most effective treatment is a structured behavioral program called CBT-I, which helps retrain your sleep habits and thinking patterns. Medications can help short-term but are not the preferred long-term solution.',
  ),

  'short-term-insomnia': entry(
    'short-term-insomnia',
    'Short-Term (Acute) Insomnia',
    'Insomnio agudo',
    'insomnia',
    '7A01',
    'Transient sleep difficulty lasting less than 3 months, typically triggered by identifiable stressors such as life changes, acute illness, or environmental disruption.',
    'Acute activation of the stress response (HPA axis, sympathetic nervous system) elevates cortisol and norepinephrine, increasing arousal at bedtime. Cognitive rumination about the stressor further delays sleep onset. Without perpetuating behaviors, the condition typically self-resolves once the precipitant is removed.',
    [
      'Difficulty initiating or maintaining sleep temporally linked to a stressor',
      'Duration less than 3 months',
      'Daytime fatigue, irritability, or concentration difficulty',
      'Symptom resolution expected when stressor resolves',
    ],
    [
      'Clinical history identifying precipitant',
      'Brief sleep diary',
      'Screening for pre-existing sleep or psychiatric disorders',
    ],
    [
      'Sleep hygiene education and reassurance',
      'Stress management and relaxation techniques',
      'Short-term hypnotic (5-7 days) if severe functional impairment',
      'Early behavioral intervention to prevent chronicity',
    ],
    [
      'Transition to chronic insomnia disorder if perpetuating factors develop',
      'Short-term cognitive and psychomotor impairment',
      'Exacerbation of pre-existing mood disorders',
    ],
    'Acute insomnia is a short bout of poor sleep usually triggered by a stressful event such as a job change, illness, or personal loss. It typically lasts days to a few weeks and resolves on its own. Good sleep habits and stress management usually help. If it persists beyond a few weeks, talk to your doctor early to prevent it from becoming a long-term problem.',
  ),

  // ── SLEEP-BREATHING ──────────────────────────────────────────────────────

  'obstructive-sleep-apnea': entry(
    'obstructive-sleep-apnea',
    'Obstructive Sleep Apnea',
    'Apnea obstructiva del sueno',
    'sleep-breathing',
    '7A40',
    'Recurrent partial or complete upper airway obstruction during sleep causing intermittent hypoxemia, sleep fragmentation, and excessive daytime sleepiness. Affects approximately 15-30% of males and 10-15% of females.',
    'During sleep, pharyngeal dilator muscle tone decreases. In susceptible individuals (anatomic narrowing, obesity, craniofacial features), negative inspiratory pressure collapses the airway. Repetitive obstruction causes intermittent hypoxia, hypercapnia, intrathoracic pressure swings, and arousals. Chronic intermittent hypoxia triggers oxidative stress, sympathetic activation, systemic inflammation, and endothelial dysfunction.',
    [
      'Loud habitual snoring with witnessed apneas or gasping',
      'Excessive daytime sleepiness (Epworth Sleepiness Scale >10)',
      'Nonrestorative sleep and morning headaches',
      'Nocturia, dry mouth upon awakening',
      'Impaired concentration, memory difficulties, and irritability',
    ],
    [
      'In-lab polysomnography (PSG) - gold standard',
      'Home sleep apnea testing (HSAT) for uncomplicated cases',
      'AHI classification: mild (5-14), moderate (15-29), severe (>=30)',
      'Epworth Sleepiness Scale and STOP-BANG questionnaire for screening',
      'Lateral cephalometry or drug-induced sleep endoscopy for surgical planning',
    ],
    [
      'CPAP therapy as first-line for moderate-to-severe OSA',
      'Oral appliance therapy (mandibular advancement device) for mild-moderate OSA or CPAP intolerance',
      'Weight loss (bariatric surgery in morbid obesity)',
      'Positional therapy for supine-predominant OSA',
      'Surgical options: UPPP, MMA, hypoglossal nerve stimulation (Inspire)',
    ],
    [
      'Resistant hypertension and increased cardiovascular risk (MI, stroke, atrial fibrillation)',
      'Type 2 diabetes and metabolic syndrome',
      'Motor vehicle and occupational accidents from sleepiness',
      'Pulmonary hypertension and cor pulmonale in severe cases',
      'Cognitive decline and increased dementia risk',
    ],
    'Obstructive sleep apnea means your airway repeatedly collapses during sleep, interrupting breathing and oxygen levels. You may snore loudly, gasp in your sleep, or wake up feeling unrested. The main treatment is CPAP, a machine that gently blows air to keep your airway open. Losing weight, sleeping on your side, and sometimes dental devices or surgery can also help. Untreated OSA raises your risk of heart problems, high blood pressure, and accidents from daytime sleepiness.',
  ),

  'central-sleep-apnea': entry(
    'central-sleep-apnea',
    'Central Sleep Apnea',
    'Apnea central del sueno',
    'sleep-breathing',
    '7A41',
    'Cessation of airflow during sleep due to absent or reduced respiratory effort from the brainstem, without upper airway obstruction. Often associated with heart failure, opioid use, or high altitude.',
    'Dysfunction of brainstem respiratory centers leads to reduced or absent ventilatory drive during sleep. In Cheyne-Stokes respiration (common with heart failure), circulatory delay causes oscillating PaCO2 levels that cross the apneic threshold during NREM sleep. Opioid-induced CSA involves direct depression of pre-Botzinger complex and chemoreceptor blunting.',
    [
      'Witnessed apneas without snoring or obstructive effort',
      'Cheyne-Stokes breathing pattern (crescendo-decrescendo ventilation)',
      'Insomnia and frequent nocturnal awakenings',
      'Daytime sleepiness and fatigue',
      'Paroxysmal nocturnal dyspnea in heart-failure-associated CSA',
    ],
    [
      'In-lab polysomnography with respiratory effort monitoring (gold standard)',
      'Central apnea index and central AHI determination',
      'Echocardiography to assess cardiac function',
      'Arterial blood gas and opioid medication review',
    ],
    [
      'Optimize underlying condition (heart failure treatment, opioid dose reduction)',
      'Adaptive servo-ventilation (ASV) for non-heart-failure CSA',
      'Supplemental oxygen for mild cases',
      'CPAP trial (resolves some cases, may worsen treatment-emergent CSA)',
      'Phrenic nerve stimulation (emerging therapy)',
      'Avoid ASV in HFrEF with EF <=45% (SERVE-HF trial showed increased mortality)',
    ],
    [
      'Worsening heart failure and cardiac arrhythmias',
      'Chronic hypoxemia and secondary polycythemia',
      'Daytime neurocognitive impairment',
      'Increased mortality in heart failure patients with untreated CSA',
    ],
    'Central sleep apnea means your brain temporarily stops sending signals to your breathing muscles during sleep. Unlike obstructive sleep apnea, it is not caused by a blocked airway. It is often related to heart failure or certain medications. Treatment focuses on the underlying cause, and special breathing machines can help maintain regular breathing during sleep.',
  ),

  'obesity-hypoventilation-syndrome': entry(
    'obesity-hypoventilation-syndrome',
    'Obesity Hypoventilation Syndrome',
    'Sindrome de hipoventilacion por obesidad',
    'sleep-breathing',
    '7A42',
    'Combination of obesity (BMI >=30), daytime hypercapnia (PaCO2 >45 mmHg), and sleep-disordered breathing not explained by other causes of hypoventilation.',
    'Excess adipose tissue imposes a restrictive mechanical load on the chest wall, reducing functional residual capacity and lung compliance. Leptin resistance impairs central ventilatory chemosensitivity, reducing the hypercapnic ventilatory response. Most patients have concurrent OSA that worsens nocturnal hypoventilation. Chronic hypercapnia leads to bicarbonate retention and blunted CO2 sensitivity.',
    [
      'Morbid obesity with dyspnea on exertion',
      'Excessive daytime sleepiness and fatigue',
      'Morning headaches from nocturnal hypercapnia',
      'Lower extremity edema and signs of right heart failure',
      'Cyanosis and plethoric facies in advanced cases',
    ],
    [
      'Arterial blood gas showing daytime PaCO2 >45 mmHg',
      'Serum bicarbonate >27 mEq/L (screening clue)',
      'Polysomnography with capnography',
      'Pulmonary function tests (restrictive pattern)',
      'Exclusion of neuromuscular, chest wall, and central causes of hypoventilation',
    ],
    [
      'PAP therapy: CPAP if predominantly OSA; bilevel PAP (BiPAP) with backup rate if persistent hypoventilation',
      'Weight loss (lifestyle modification, bariatric surgery)',
      'Supplemental oxygen as adjunct if hypoxemia persists on PAP',
      'Respiratory stimulants (acetazolamide) in select cases',
      'Pulmonary rehabilitation',
    ],
    [
      'Pulmonary hypertension and cor pulmonale',
      'Acute-on-chronic respiratory failure',
      'Higher perioperative morbidity and mortality',
      'Increased ICU admissions and healthcare utilization',
    ],
    'Obesity hypoventilation syndrome occurs when excess weight on the chest prevents adequate breathing, causing carbon dioxide levels to rise too high. Most people with this condition also have obstructive sleep apnea. Treatment includes breathing support with a PAP machine during sleep and, critically, weight loss. Without treatment, it can lead to heart and lung failure.',
  ),

  // ── HYPERSOMNIA ──────────────────────────────────────────────────────────

  'narcolepsy-type-1': entry(
    'narcolepsy-type-1',
    'Narcolepsy Type 1 (with Cataplexy)',
    'Narcolepsia tipo 1 (con cataplejia)',
    'hypersomnia',
    '7A20',
    'Chronic neurological disorder caused by loss of hypocretin (orexin)-producing neurons in the lateral hypothalamus, characterized by excessive daytime sleepiness and cataplexy.',
    'Autoimmune-mediated destruction of approximately 70,000 hypocretin-producing neurons in the lateral hypothalamus. Strong HLA-DQB1*06:02 association (>98% of patients). Hypocretin deficiency destabilizes sleep-wake state boundaries, allowing intrusion of REM-related phenomena (muscle atonia, dreaming) into wakefulness. T-cell-mediated process likely triggered by environmental factors (H1N1 infection, Pandemrix vaccine).',
    [
      'Excessive daytime sleepiness with irresistible sleep attacks',
      'Cataplexy: sudden bilateral loss of muscle tone triggered by emotion (laughter, surprise)',
      'Hypnagogic/hypnopompic hallucinations',
      'Sleep paralysis',
      'Disrupted nocturnal sleep with frequent awakenings',
    ],
    [
      'MSLT: mean sleep latency <=8 minutes with >=2 SOREMPs',
      'CSF hypocretin-1 (orexin-A) <=110 pg/mL (definitive)',
      'HLA-DQB1*06:02 typing (supportive but not diagnostic)',
      'Preceding nocturnal PSG to exclude other sleep disorders',
      'Actigraphy to confirm adequate habitual sleep prior to MSLT',
    ],
    [
      'Wake-promoting agents: modafinil/armodafinil, solriamfetol, pitolisant',
      'Sodium oxybate (Xyrem/Xywav) for cataplexy, sleepiness, and disrupted nocturnal sleep',
      'Low-sodium oxybate (Xywav) preferred for cardiovascular risk reduction',
      'Antidepressants (venlafaxine, fluoxetine) for cataplexy if oxybate not tolerated',
      'Scheduled naps (15-20 min) as behavioral adjunct',
    ],
    [
      'Motor vehicle and occupational accidents',
      'Obesity and metabolic syndrome (hypocretin deficiency affects metabolism)',
      'Depression, anxiety, and social withdrawal',
      'Academic and occupational impairment',
      'Injury from cataplectic falls',
    ],
    'Narcolepsy type 1 is a brain condition where the cells that produce a wakefulness chemical called hypocretin are destroyed, likely by the immune system. This causes overwhelming daytime sleepiness and cataplexy, which is sudden muscle weakness triggered by strong emotions like laughter. It is diagnosed with a sleep study and sometimes a spinal fluid test. Medications can effectively control sleepiness and cataplexy, and scheduled naps can help manage symptoms.',
  ),

  'narcolepsy-type-2': entry(
    'narcolepsy-type-2',
    'Narcolepsy Type 2 (without Cataplexy)',
    'Narcolepsia tipo 2 (sin cataplejia)',
    'hypersomnia',
    '7A21',
    'Excessive daytime sleepiness with MSLT findings consistent with narcolepsy but without cataplexy and with normal CSF hypocretin-1 levels.',
    'Pathophysiology is less well understood than type 1. CSF hypocretin-1 levels are typically normal (>110 pg/mL). May represent partial hypocretin neuron loss insufficient to cause cataplexy, or involve other neurotransmitter systems. HLA-DQB1*06:02 association is weaker than in type 1. Some patients eventually develop cataplexy and are reclassified.',
    [
      'Excessive daytime sleepiness with irresistible sleep attacks',
      'Absence of definite cataplexy',
      'Hypnagogic hallucinations and sleep paralysis may be present',
      'Automatic behaviors during microsleep episodes',
    ],
    [
      'MSLT: mean sleep latency <=8 minutes with >=2 SOREMPs',
      'CSF hypocretin-1 >110 pg/mL or not measured',
      'Nocturnal PSG to exclude other causes of sleepiness',
      'Exclusion of insufficient sleep syndrome, medications, and medical causes',
    ],
    [
      'Wake-promoting agents: modafinil/armodafinil, solriamfetol, pitolisant',
      'Sodium oxybate if sleepiness is refractory',
      'Scheduled daytime naps',
      'Sleep hygiene optimization and regular sleep schedule',
    ],
    [
      'Motor vehicle and occupational accidents from sleepiness',
      'Academic and occupational underperformance',
      'Mood disorders',
      'Possible evolution to narcolepsy type 1 over time',
    ],
    'Narcolepsy type 2 causes severe daytime sleepiness similar to type 1, but without cataplexy (sudden muscle weakness). Your brain chemistry related to the sleep chemical hypocretin is usually normal. It is diagnosed with a special nap study. Stimulant medications and scheduled naps help manage the sleepiness. Regular follow-up is important because some people may eventually develop cataplexy.',
  ),

  'idiopathic-hypersomnia': entry(
    'idiopathic-hypersomnia',
    'Idiopathic Hypersomnia',
    'Hipersomnia idiopatica',
    'hypersomnia',
    '7A22',
    'Central disorder of hypersomnolence characterized by excessive daytime sleepiness with prolonged and unrefreshing sleep, severe sleep inertia (sleep drunkenness), and difficulty awakening, without cataplexy or SOREMP criteria for narcolepsy.',
    'Pathophysiology remains unclear. Hypothesized mechanisms include enhancement of GABA-A receptor activity by an endogenous positive allosteric modulator found in CSF, as well as impaired histaminergic or dopaminergic wake-promoting circuits. No hypocretin deficiency is present. Some patients show increased slow-wave sleep and reduced sleep-onset latency without REM dysregulation.',
    [
      'Excessive daytime sleepiness despite adequate or prolonged sleep (>11 hours/24 hours)',
      'Severe sleep inertia (prolonged, disabling difficulty awakening)',
      'Long, unrefreshing daytime naps',
      'Cognitive impairment ("brain fog") during wakefulness',
      'Autonomic symptoms (Raynaud-like phenomena, orthostatic headaches)',
    ],
    [
      'MSLT: mean sleep latency <=8 minutes with <2 SOREMPs',
      'Or 24-hour PSG showing total sleep time >=660 minutes',
      'Actigraphy showing prolonged sleep periods',
      'Exclusion of insufficient sleep, medication effects, and other medical causes',
    ],
    [
      'Modafinil/armodafinil as first-line wake-promoting therapy',
      'Solriamfetol or pitolisant',
      'Low-sodium oxybate (Xywav, FDA-approved for idiopathic hypersomnia)',
      'Flumazenil (off-label, targets potential GABAergic mechanism)',
      'Clarithromycin (off-label, negative GABA-A modulator)',
      'Strategic use of multiple alarms and bright light for sleep inertia',
    ],
    [
      'Significant occupational and academic impairment',
      'Driving safety concerns',
      'Depression and reduced quality of life',
      'Social isolation due to excessive sleep requirements',
    ],
    'Idiopathic hypersomnia causes extreme daytime sleepiness and very long sleep periods that do not feel refreshing. You may have great difficulty waking up and feel very groggy for a long time after rising. Unlike narcolepsy, there is no cataplexy. The exact cause is unknown. Medications like modafinil can help reduce sleepiness, and newer treatments are becoming available.',
  ),

  // ── CIRCADIAN ────────────────────────────────────────────────────────────

  'delayed-sleep-wake-phase': entry(
    'delayed-sleep-wake-phase',
    'Delayed Sleep-Wake Phase Disorder',
    'Trastorno de fase de sueno-vigilia retrasada',
    'circadian',
    '7A60',
    'Circadian rhythm sleep-wake disorder in which the habitual sleep-wake cycle is significantly delayed relative to societal norms, resulting in difficulty falling asleep and waking at conventional times.',
    'The endogenous circadian pacemaker (SCN) runs on a cycle slightly longer than 24 hours, normally entrained by zeitgebers (light, meals, activity). In DSWPD, the phase angle between the endogenous clock and desired sleep time is exaggerated. Contributing factors include PER3 polymorphisms, prolonged intrinsic circadian period (tau), increased evening light exposure, and reduced morning light sensitivity. Melatonin onset (DLMO) is delayed by 2 or more hours.',
    [
      'Habitual sleep onset typically after 2:00 AM',
      'Great difficulty waking for morning obligations',
      'Normal sleep quality and duration when sleeping on preferred schedule',
      'Chronic sleep deprivation on weekdays with weekend "catch-up" sleep',
      'Common in adolescents and young adults',
    ],
    [
      'Sleep diary or actigraphy for at least 7-14 days showing delayed pattern',
      'Dim-light melatonin onset (DLMO) measurement',
      'Morningness-Eveningness Questionnaire (MEQ)',
      'Exclusion of insufficient sleep syndrome and poor sleep hygiene',
    ],
    [
      'Timed bright light therapy (10,000 lux) upon waking for 30 minutes',
      'Evening light restriction (blue-light-blocking glasses, dim environment)',
      'Low-dose exogenous melatonin (0.5-3 mg) 3-5 hours before DLMO',
      'Chronotherapy (progressive delay schedule) in select cases',
      'Fixed wake time with gradual advance',
    ],
    [
      'Chronic sleep deprivation and daytime functional impairment',
      'Academic failure and occupational difficulties',
      'Depression and social isolation',
      'Substance use for self-regulation of sleep-wake timing',
    ],
    'Delayed sleep-wake phase disorder means your internal body clock runs later than normal. You naturally feel alert late at night and struggle to wake up early in the morning. When allowed to sleep on your own schedule, you sleep well. Treatment involves carefully timed light exposure in the morning, avoiding bright light at night, and sometimes low-dose melatonin taken several hours before your desired bedtime.',
  ),

  'advanced-sleep-wake-phase': entry(
    'advanced-sleep-wake-phase',
    'Advanced Sleep-Wake Phase Disorder',
    'Trastorno de fase de sueno-vigilia avanzada',
    'circadian',
    '7A61',
    'Circadian rhythm disorder with habitual sleep-wake timing several hours earlier than conventional, causing involuntary early evening sleepiness and early morning awakening.',
    'Shortened intrinsic circadian period or enhanced phase-advancing response to light. Familial forms linked to gain-of-function mutations in CK1-delta (phosphorylation of PER2) or PER2 mutations. Melatonin onset and core body temperature nadir occur 2 or more hours earlier than normal. More common in older adults due to age-related shortening of circadian period.',
    [
      'Inability to stay awake in the early evening (e.g., 7-8 PM)',
      'Spontaneous awakening in the very early morning (e.g., 3-4 AM)',
      'Normal sleep quality and duration on preferred schedule',
      'Evening social and occupational limitations',
    ],
    [
      'Sleep diary or actigraphy for 7-14 days',
      'Dim-light melatonin onset showing advanced phase',
      'Family history assessment (familial ASPD)',
      'Exclusion of depression-related early awakening',
    ],
    [
      'Evening bright light therapy (2-3 hours before habitual sleep onset)',
      'Avoidance of early morning bright light exposure',
      'Morning melatonin (low dose, upon awakening) in select cases',
      'Chronotherapy (progressive advance) rarely practical',
    ],
    [
      'Evening social and occupational impairment',
      'Misdiagnosis as depression or insomnia',
      'Daytime sleepiness if sleep is curtailed by evening activities',
    ],
    'Advanced sleep-wake phase disorder means your internal clock runs earlier than most people. You get very sleepy in the early evening and wake up very early in the morning, even when you do not want to. The sleep itself is normal. Treatment typically involves bright light exposure in the evening to help shift your clock later.',
  ),

  'non-24-hour-sleep-wake': entry(
    'non-24-hour-sleep-wake',
    'Non-24-Hour Sleep-Wake Rhythm Disorder',
    'Trastorno del ritmo sueno-vigilia no de 24 horas',
    'circadian',
    '7A62',
    'Free-running circadian rhythm that is not entrained to the 24-hour day, causing progressively shifting sleep-wake times. Most commonly occurs in totally blind individuals lacking photic input to the SCN.',
    'Without photic zeitgeber input (most often due to bilateral enucleation or total blindness), the SCN free-runs on its intrinsic period (typically ~24.2 hours). Sleep onset and wake times progressively drift later each day. In sighted individuals, the mechanism may involve impaired SCN sensitivity to light or weakened zeitgeber signaling.',
    [
      'Progressive daily delay in sleep and wake times',
      'Alternating periods of insomnia and hypersomnia as clock drifts in and out of alignment',
      'Predominantly affects totally blind individuals',
      'Impaired daytime functioning during misaligned phases',
    ],
    [
      'Longitudinal actigraphy or sleep diary over several weeks showing progressive drift',
      'Melatonin rhythm assessment demonstrating free-running pattern',
      'Assessment of light perception (ophthalmologic evaluation)',
    ],
    [
      'Tasimelteon (Hetlioz), FDA-approved melatonin receptor agonist for Non-24 in blind individuals',
      'Timed exogenous melatonin administration',
      'Structured meal and activity schedules as non-photic zeitgebers',
      'Bright light therapy if residual light perception is present',
    ],
    [
      'Chronic social and occupational disruption',
      'Metabolic dysregulation from circadian misalignment',
      'Depression and social isolation',
    ],
    'Non-24-hour sleep-wake disorder occurs mainly in blind individuals whose internal clock cannot be reset by light. Without this cue, the sleep-wake cycle drifts a little later each day, causing alternating episodes of insomnia and excessive sleepiness. A medication called tasimelteon can help re-synchronize the clock. Keeping regular meal and activity schedules also supports alignment.',
  ),

  // ── PARASOMNIA ───────────────────────────────────────────────────────────

  'nrem-sleepwalking': entry(
    'nrem-sleepwalking',
    'Sleepwalking (Somnambulism)',
    'Sonambulismo',
    'parasomnia',
    '7B00.0',
    'NREM parasomnia characterized by episodes of complex motor behavior including ambulation during slow-wave sleep, typically in the first third of the night, with impaired awareness and subsequent amnesia.',
    'Disorder of arousal from N3 (slow-wave) sleep. Reflects dissociated brain state with simultaneous activation of motor circuits and persistence of sleep in limbic and prefrontal regions. Sleep deprivation, alcohol, medications (zolpidem, lithium), and sleep-disordered breathing increase N3 arousals and precipitate episodes. Genetic predisposition is strong, with prevalence up to 45% when both parents are affected.',
    [
      'Ambulation during sleep, typically in first third of night',
      'Confused, glassy-eyed appearance with slow responsiveness',
      'Complex but purposeless behaviors (walking, eating, urinating inappropriately)',
      'Difficulty being fully awakened during episodes',
      'Partial or complete amnesia for the event',
    ],
    [
      'Clinical history from bed partner or family (usually sufficient)',
      'PSG with extended EEG montage if episodes are frequent, injurious, or atypical',
      'Video-PSG to differentiate from nocturnal epilepsy or RBD',
      'Assessment for precipitating factors (OSA, medications, sleep deprivation)',
    ],
    [
      'Safety precautions: lock windows/doors, remove hazardous objects, ground-floor bedroom',
      'Trigger avoidance: treat OSA, ensure adequate sleep, minimize alcohol',
      'Scheduled awakening (anticipatory awakening 15-30 min before typical episode time)',
      'Clonazepam (0.25-0.5 mg) at bedtime for frequent or dangerous episodes',
      'Hypnosis and relaxation techniques in refractory cases',
    ],
    [
      'Injury to patient or bed partner during episodes',
      'Sleep-related violence (rare but documented)',
      'Psychological distress and social embarrassment',
      'Sleep disruption for household members',
    ],
    'Sleepwalking is when you get up and move around while in deep sleep, usually early in the night. You may appear confused and have no memory of the episode the next day. It is more common in children and often runs in families. Treatment focuses on safety measures, getting enough sleep, and treating anything that fragments sleep. Medication is reserved for frequent or dangerous episodes.',
  ),

  'rem-sleep-behavior-disorder': entry(
    'rem-sleep-behavior-disorder',
    'REM Sleep Behavior Disorder',
    'Trastorno de conducta del sueno REM',
    'parasomnia',
    '7B01',
    'REM parasomnia characterized by dream-enactment behavior due to loss of normal REM atonia, often violent, with risk of injury. Strongly associated with subsequent development of synucleinopathies (Parkinson disease, Lewy body dementia, MSA).',
    'Normally during REM sleep, sublaterodorsal nucleus and ventromedial medulla generate muscle atonia via glycinergic and GABAergic inhibition of spinal motor neurons. In RBD, degeneration or dysfunction of these pontine REM-atonia circuits permits motor activity during REM. Isolated RBD represents a prodromal synucleinopathy, with >80% converting to PD, DLB, or MSA within 10-15 years.',
    [
      'Dream-enactment behavior: punching, kicking, shouting, leaping out of bed during REM sleep',
      'Vivid, often violent dream content recalled upon awakening',
      'Predominance in second half of night (when REM is most abundant)',
      'Bed partner injury is common presenting complaint',
      'Typically affects males over age 50',
    ],
    [
      'Video-polysomnography showing REM sleep without atonia (RSWA) - required for diagnosis',
      'EMG showing elevated tonic and/or phasic chin or limb EMG during REM',
      'Neurological exam to screen for parkinsonism or cognitive decline',
      'DaTscan if alpha-synucleinopathy is suspected',
      'Assessment for medication-induced RBD (SSRIs, SNRIs, beta-blockers)',
    ],
    [
      'Bedroom safety: remove sharp objects, pad bed edges, mattress on floor',
      'Melatonin 3-12 mg at bedtime (first-line, well-tolerated)',
      'Clonazepam 0.25-1 mg at bedtime (effective but caution in OSA/elderly)',
      'Discontinue offending medications (SSRIs/SNRIs) if possible',
      'Counsel patient and family about synucleinopathy risk and surveillance',
    ],
    [
      'Self-injury or bed partner injury (subdural hematoma, fractures)',
      'Progression to Parkinson disease, Lewy body dementia, or MSA (>80% over 10-15 years)',
      'Sleep disruption and relationship strain',
    ],
    'REM sleep behavior disorder causes people to physically act out their dreams during REM sleep because the normal muscle paralysis of dreaming sleep does not work. This can include talking, shouting, punching, or kicking, and can injure the person or their bed partner. Melatonin at bedtime is usually the first treatment, along with making the bedroom safe. Importantly, RBD can be an early sign of neurological conditions like Parkinson disease, so long-term neurological follow-up is essential.',
  ),

  'sleep-terrors': entry(
    'sleep-terrors',
    'Sleep Terrors (Night Terrors)',
    'Terrores nocturnos',
    'parasomnia',
    '7B00.1',
    'NREM parasomnia featuring abrupt partial arousal from deep sleep with intense autonomic activation, a piercing scream or cry, and prominent fear expression, followed by amnesia for the event.',
    'Disorder of arousal from N3 sleep similar to sleepwalking. Episodes represent incomplete transition from deep sleep to wakefulness, with simultaneous limbic activation (generating fear/distress) and persistent cortical sleep (explaining unresponsiveness and amnesia). Autonomic storm (tachycardia, diaphoresis, mydriasis) accompanies the emotional arousal.',
    [
      'Sudden, piercing scream or cry from sleep, usually in first third of night',
      'Intense autonomic activation: tachycardia, diaphoresis, flushing, mydriasis',
      'Inconsolable distress with agitation; difficult to fully arouse',
      'Complete amnesia for the episode',
      'Most common in children ages 3-8',
    ],
    [
      'Clinical history typically diagnostic; PSG rarely needed',
      'Video-PSG if episodes are frequent, atypical, or stereotyped (to exclude epilepsy)',
      'Assessment for sleep deprivation, OSA, or medication triggers',
    ],
    [
      'Parental reassurance and education (episodes are self-limited and not harmful)',
      'Ensure adequate sleep duration',
      'Scheduled awakening 15-30 minutes before typical episode time',
      'Treat any comorbid sleep-disordered breathing',
      'Clonazepam or imipramine for severe, recurrent cases in adults',
    ],
    [
      'Injury during agitated episodes (less common than sleepwalking)',
      'Parental or family anxiety and distress',
      'Rarely persists into adulthood',
    ],
    'Sleep terrors are episodes where a person, most often a child, suddenly sits up in bed screaming and appearing terrified, usually about an hour after falling asleep. The child does not recognize caregivers and cannot be comforted, but has no memory of it the next morning. They are not nightmares and are not dangerous. The most important step is making sure your child gets enough sleep, which reduces the frequency of episodes. Most children outgrow them.',
  ),

  // ── MOVEMENT ─────────────────────────────────────────────────────────────

  'restless-legs-syndrome': entry(
    'restless-legs-syndrome',
    'Restless Legs Syndrome (Willis-Ekbom Disease)',
    'Sindrome de piernas inquietas',
    'movement',
    '8A06.1',
    'Sensorimotor disorder characterized by an urge to move the legs, usually accompanied by uncomfortable sensations, occurring primarily at rest and in the evening/night, relieved by movement.',
    'Central dopaminergic dysfunction, particularly in the A11 diencephalospinal pathway, combined with brain iron deficiency (even with normal serum ferritin). Low CSF ferritin and reduced substantia nigra iron on MRI suggest impaired iron transport across the blood-brain barrier. Iron is a cofactor for tyrosine hydroxylase, the rate-limiting enzyme in dopamine synthesis. Genetic variants in BTBD9, MEIS1, and MAP2K5/SKOR1 are associated.',
    [
      'Urge to move the legs, often with uncomfortable sensations (crawling, tingling, pulling)',
      'Symptoms begin or worsen during rest or inactivity',
      'Partial or total relief with movement (walking, stretching)',
      'Symptoms worsen in the evening or night (circadian pattern)',
      'Sleep-onset insomnia and consequent daytime fatigue',
    ],
    [
      'Clinical diagnosis based on 5 essential IRLSSG criteria',
      'Serum ferritin (target >75 ng/mL for treatment) and iron studies',
      'Renal function (uremia is common secondary cause)',
      'Peripheral neuropathy screening if atypical features',
      'PSG with PLMS index if diagnosis uncertain (>15/hour supportive)',
    ],
    [
      'Iron supplementation if ferritin <75 ng/mL (oral or IV iron)',
      'Alpha-2-delta ligands (gabapentin enacarbil, pregabalin) as first-line pharmacotherapy',
      'Low-dose dopamine agonists (pramipexole, ropinirole, rotigotine) with augmentation monitoring',
      'Avoid augmentation risk: use lowest effective dose of dopamine agonists',
      'Opioids (low-dose oxycodone) for refractory cases',
      'Address contributing factors: iron deficiency, uremia, pregnancy, medications (SSRIs, antihistamines)',
    ],
    [
      'Chronic insomnia and significant sleep deprivation',
      'Augmentation from dopaminergic therapy (earlier onset, increased severity, limb spread)',
      'Depression, anxiety, and reduced quality of life',
      'Possible cardiovascular risk association',
    ],
    'Restless legs syndrome causes an uncomfortable urge to move your legs, especially when sitting still or lying down in the evening. Moving brings temporary relief. It can make it very hard to fall asleep. Your doctor will check your iron levels because low iron is a common, treatable cause. Medications can help, but it is important to use the right ones to avoid a complication called augmentation, where symptoms get worse over time.',
  ),

  'periodic-limb-movement-disorder': entry(
    'periodic-limb-movement-disorder',
    'Periodic Limb Movement Disorder',
    'Trastorno de movimiento periodico de las extremidades',
    'movement',
    '8A06.0',
    'Repetitive, stereotyped limb movements during sleep (typically dorsiflexion of the ankle and flexion of the knee/hip), occurring at 20-40 second intervals, causing arousals and sleep fragmentation when clinically significant.',
    'PLMs arise from spinal cord disinhibition and brainstem locomotor generator activation during sleep. Dopaminergic dysfunction and iron deficiency contribute (shared pathophysiology with RLS). Movements are stereotyped triple-flexion responses. PLMs are common in the general population but become a disorder (PLMD) only when they cause clinically significant sleep disturbance or daytime impairment not explained by another condition.',
    [
      'Repetitive leg jerking during sleep (often unaware; reported by bed partner)',
      'Nonrestorative sleep and excessive daytime sleepiness',
      'Insomnia with frequent awakenings',
      'Bed sheets displaced or disheveled upon waking',
    ],
    [
      'Polysomnography showing PLMS index >15/hour in adults',
      'PLMS arousal index to assess clinical significance',
      'Iron studies and ferritin level',
      'Exclusion of RLS, OSA, narcolepsy, and medication effects as primary causes',
    ],
    [
      'Treat underlying cause (iron deficiency, RLS, OSA) first',
      'Dopamine agonists if PLMD is the primary diagnosis',
      'Alpha-2-delta ligands (gabapentin, pregabalin)',
      'Clonazepam in select cases',
      'Avoid PLMS-exacerbating medications (SSRIs, antihistamines)',
    ],
    [
      'Chronic sleep fragmentation and daytime impairment',
      'Bed partner sleep disruption',
      'Possible cardiovascular associations (sympathetic arousals)',
    ],
    'Periodic limb movement disorder causes your legs to jerk or twitch repeatedly during sleep, usually every 20-40 seconds, which can wake you up without you realizing it. This leads to poor sleep quality and daytime tiredness. It is diagnosed with an overnight sleep study. Treatment is only needed if the movements are actually causing your sleep problems, and may include addressing low iron levels or using specific medications.',
  ),

  'sleep-related-bruxism': entry(
    'sleep-related-bruxism',
    'Sleep-Related Bruxism',
    'Bruxismo del sueno',
    'movement',
    '8A06.Y',
    'Repetitive jaw muscle activity characterized by clenching or grinding of the teeth during sleep, often associated with sleep arousals.',
    'Centrally mediated rhythmic masticatory muscle activity (RMMA) occurs during brief arousals from sleep. Involves trigeminal motor nucleus activation. Multifactorial etiology includes genetic predisposition, stress and anxiety, sleep-disordered breathing (arousals preceding RMMA), dopaminergic mechanisms, and orofacial pain conditions. Not a purely dental disorder but a sleep-related movement disorder with dental consequences.',
    [
      'Grinding or clenching sounds during sleep (reported by bed partner)',
      'Morning jaw pain, stiffness, or fatigue',
      'Tooth wear, enamel damage, and dental fractures',
      'Temporal headaches upon waking',
      'Masseter hypertrophy on examination',
    ],
    [
      'Clinical history and dental examination showing tooth wear patterns',
      'PSG with masseter EMG for definitive diagnosis (rarely needed)',
      'Assessment for comorbid OSA (bruxism may be a response to airway obstruction)',
      'Evaluation for TMJ disorders',
    ],
    [
      'Occlusal splint (night guard) to protect teeth',
      'Treat comorbid OSA if present (CPAP may reduce bruxism)',
      'Stress management and relaxation techniques',
      'Botulinum toxin injections to masseters for severe cases',
      'Avoid caffeine and alcohol before bed',
    ],
    [
      'Dental damage: tooth wear, fractures, crown/restoration failure',
      'Temporomandibular joint dysfunction',
      'Chronic orofacial pain',
      'Sleep disruption for patient and bed partner',
    ],
    'Sleep bruxism is grinding or clenching your teeth during sleep. You might not know you do it until a bed partner mentions the noise or your dentist notices wear on your teeth. Morning jaw pain and headaches are common. A night guard protects your teeth, and if you also have sleep apnea, treating that may help. Managing stress and avoiding caffeine in the evening can reduce episodes.',
  ),

  // ── DIAGNOSTIC ───────────────────────────────────────────────────────────

  'polysomnography': entry(
    'polysomnography',
    'Polysomnography (PSG)',
    'Polisomnografia',
    'diagnostic',
    'N/A',
    'Comprehensive overnight sleep study recording EEG, EOG, EMG, ECG, airflow, respiratory effort, pulse oximetry, and body position. Gold standard for diagnosing sleep-disordered breathing, parasomnias, and periodic limb movements.',
    'PSG simultaneously monitors multiple physiological parameters to characterize sleep architecture, respiratory events, cardiac rhythm, limb movements, and behavioral events. EEG (typically C3, C4, O1, O2, F3, F4 referencing M1/M2) allows sleep staging per AASM criteria. Nasal pressure and thermistor detect airflow limitation and apneas. Respiratory inductance plethysmography bands detect effort. Combined data yield the AHI, PLMS index, arousal index, and sleep efficiency.',
    [
      'Continuous EEG for sleep staging (N1, N2, N3, REM)',
      'EOG channels detecting eye movements for REM identification',
      'Chin and tibialis anterior EMG for atonia assessment and PLM detection',
      'Nasal pressure transducer and oronasal thermistor for airflow',
      'Thoracic and abdominal RIP belts for respiratory effort',
      'Pulse oximetry for oxygen saturation',
      'ECG for cardiac rhythm monitoring',
      'Body position sensor and audio/video recording',
    ],
    [
      'Indicated for suspected OSA not amenable to HSAT',
      'Required for suspected central sleep apnea, parasomnias, PLMD, narcolepsy evaluation',
      'CPAP titration studies',
      'Split-night protocol: diagnostic first half, CPAP titration second half if AHI >=40',
    ],
    [
      'Attended in-laboratory study with trained technologist',
      'Sleep staging and scoring per AASM Manual version 3',
      'Apnea: >=90% airflow reduction for >=10 seconds; hypopnea: >=30% reduction with >=3% desaturation or arousal',
      'Results interpreted by board-certified sleep medicine physician',
    ],
    [
      'First-night effect (adaptation artifact reducing sleep efficiency)',
      'Limited ecological validity (one night, unfamiliar environment)',
      'Cost and accessibility barriers',
    ],
    'A polysomnography, or sleep study, is an overnight test done in a sleep lab where sensors are placed on your head, face, chest, and legs to monitor your brain waves, breathing, oxygen, heart rhythm, and body movements while you sleep. It is the most thorough way to diagnose sleep disorders. A technologist monitors you overnight, and a sleep doctor reviews the data to determine whether you have conditions like sleep apnea or other sleep disorders.',
  ),

  'home-sleep-apnea-test': entry(
    'home-sleep-apnea-test',
    'Home Sleep Apnea Test (HSAT)',
    'Prueba de apnea del sueno en el hogar',
    'diagnostic',
    'N/A',
    'Portable, unattended sleep monitoring device used to diagnose obstructive sleep apnea in patients with high pretest probability, recording limited channels (typically airflow, respiratory effort, and oximetry) without EEG.',
    'HSAT devices (Type III or IV) record peripheral physiological data including nasal airflow, oximetry, respiratory effort, and sometimes body position and snoring. Without EEG, total sleep time cannot be determined, so results use recording time as the denominator (REI, respiratory event index) rather than AHI. This typically underestimates severity compared to PSG.',
    [
      'Nasal airflow monitoring (nasal cannula/pressure transducer)',
      'Finger pulse oximetry for oxygen saturation and heart rate',
      'Chest/abdominal effort belts (in some devices)',
      'Peripheral arterial tonometry (PAT) in some devices (WatchPAT)',
      'No EEG, EOG, or EMG channels',
    ],
    [
      'Appropriate for uncomplicated adults with high pretest probability of moderate-to-severe OSA',
      'Not appropriate for suspected CSA, hypoventilation, parasomnias, PLMD, or narcolepsy',
      'Not validated in patients with significant comorbidities (CHF, COPD, neuromuscular disease)',
      'Negative HSAT in symptomatic patient should be followed by in-lab PSG',
    ],
    [
      'Patient self-applies device at home before sleep',
      'Data downloaded and scored the next day',
      'REI calculated: apneas + hypopneas per hour of recording time',
      'If REI >=5 with symptoms or >=15 regardless: OSA diagnosis supported',
      'Auto-PAP titration can follow positive HSAT without separate titration PSG',
    ],
    [
      'Underestimation of OSA severity (no EEG to confirm sleep)',
      'Data loss from sensor displacement (unattended study)',
      'False negatives in positional or REM-predominant OSA',
      'Inability to detect non-respiratory sleep disorders',
    ],
    'A home sleep apnea test is a simplified version of a sleep study that you can do in your own bed. You wear a small device that monitors your breathing and oxygen levels overnight. It is most useful when your doctor strongly suspects obstructive sleep apnea. It is less expensive and more convenient than a full lab study, but it cannot detect all sleep disorders. If the results are negative but you still have symptoms, a full in-lab study may be needed.',
  ),

  'multiple-sleep-latency-test': entry(
    'multiple-sleep-latency-test',
    'Multiple Sleep Latency Test (MSLT)',
    'Test de latencias multiples del sueno',
    'diagnostic',
    'N/A',
    'Daytime nap study measuring physiological sleepiness by determining how quickly a person falls asleep and whether REM sleep occurs during 4-5 scheduled nap opportunities at 2-hour intervals. Gold standard for diagnosing narcolepsy.',
    'The MSLT quantifies physiological sleep propensity by measuring sleep-onset latency in a controlled environment. The test exploits the two-process model: high homeostatic sleep drive (Process S) and circadian timing converge during daytime nap opportunities. SOREMPs (sleep-onset REM periods within 15 minutes of sleep onset) indicate REM pressure dysregulation characteristic of narcolepsy. A preceding nocturnal PSG ensures adequate prior-night sleep and excludes confounding sleep disorders.',
    [
      'Five nap opportunities at 2-hour intervals starting 1.5-3 hours after morning wake time',
      'Mean sleep latency <=8 minutes indicates pathological sleepiness',
      'Two or more SOREMPs suggest narcolepsy (one may be from prior-night PSG)',
      'Naps terminated after 15 minutes of sleep or 20 minutes if no sleep occurs',
    ],
    [
      'Indicated for suspected narcolepsy or idiopathic hypersomnia',
      'Must be preceded by nocturnal PSG (>=6 hours of sleep)',
      '2-week sleep diary or actigraphy demonstrating adequate habitual sleep',
      'REM-suppressing medications discontinued >=14 days (ideally >=5 half-lives) before testing',
      'Drug screening to exclude pharmacological confounders',
    ],
    [
      'Performed in sleep laboratory following nocturnal PSG',
      'Standard EEG, EOG, chin EMG montage for each nap',
      'Patient instructed to try to fall asleep in darkened, quiet room',
      'Interpret results in context of medication history, prior-night sleep quality, and sleep logs',
    ],
    [
      'False-negative results if medications not adequately discontinued',
      'Poor sleep on preceding PSG invalidates results',
      'Test may need repeating if initial results are inconclusive',
      'Does not measure subjective sleepiness or driving risk',
    ],
    'The multiple sleep latency test, or MSLT, measures how quickly you fall asleep during the day by giving you 4-5 nap opportunities. It is the main test used to diagnose narcolepsy. You spend the day in a sleep lab after an overnight sleep study. Falling asleep very quickly and entering dream sleep early during naps are the key findings. Certain medications must be stopped before the test to get accurate results.',
  ),

  'maintenance-of-wakefulness-test': entry(
    'maintenance-of-wakefulness-test',
    'Maintenance of Wakefulness Test (MWT)',
    'Test de mantenimiento de vigilia',
    'diagnostic',
    'N/A',
    'Daytime test measuring a person\'s ability to stay awake in a quiet, dimly lit environment during 4 trials. Used to assess fitness for duty (e.g., commercial drivers, pilots) and treatment adequacy in hypersomnolence disorders.',
    'The MWT tests the ability to resist sleep pressure by placing patients in a comfortable, soporific environment. Unlike the MSLT (which measures sleep propensity), the MWT measures the capacity to maintain wakefulness, a more functionally relevant outcome. Four 40-minute trials at 2-hour intervals are standard. Mean sleep latency >30-40 minutes is considered normal; <8 minutes indicates significant inability to stay awake.',
    [
      'Four 40-minute trials at 2-hour intervals',
      'Patient seated in dimly lit room, instructed to stay awake',
      'EEG, EOG, and chin EMG monitored',
      'Trial ends at sleep onset or after 40 minutes',
    ],
    [
      'Assessment of treatment efficacy in narcolepsy, OSA, or other hypersomnolence disorders',
      'Fitness-for-duty evaluation (commercial drivers, pilots, safety-sensitive occupations)',
      'Not used for primary diagnosis of narcolepsy (MSLT is preferred)',
    ],
    [
      'Performed in sleep laboratory',
      'Standardized 40-minute protocol per AASM guidelines',
      'Mean sleep latency <8 minutes: definite impairment',
      'Mean sleep latency 8-40 minutes: gray zone requiring clinical judgment',
      'Mean sleep latency >40 minutes: normal wakefulness maintenance',
    ],
    [
      'No universally agreed-upon pathological cutoff',
      'Results influenced by motivation and environment',
      'Does not directly predict real-world accident risk',
    ],
    'The maintenance of wakefulness test checks whether you can stay awake when you are in a quiet, relaxing setting. You sit in a dim room four times during the day and try to stay awake for 40 minutes each time. It is often used to see if treatment for sleepiness is working well enough for you to safely drive or work in jobs where alertness is critical.',
  ),

  'actigraphy': entry(
    'actigraphy',
    'Actigraphy',
    'Actigrafia',
    'diagnostic',
    'N/A',
    'Wrist-worn accelerometer device that records movement patterns over days to weeks, providing objective estimates of sleep-wake timing, total sleep time, and circadian rhythm patterns.',
    'Actigraphy uses a piezoelectric accelerometer to detect and record limb movement. Validated algorithms classify epochs as sleep (minimal movement) or wake (movement present). While less precise than PSG for individual-night analysis, actigraphy provides ecologically valid longitudinal data on habitual sleep-wake patterns, circadian alignment, and response to treatment over extended periods in the patient\'s natural environment.',
    [
      'Continuous wrist-worn monitoring for 7-14+ days',
      'Activity counts per epoch graphed across 24-hour periods',
      'Derived metrics: total sleep time, sleep-onset latency, wake after sleep onset, sleep efficiency',
      'Circadian rhythm visualization via double-plotted actograms',
    ],
    [
      'Assessment of circadian rhythm sleep-wake disorders',
      'Pre-MSLT documentation of adequate habitual sleep duration',
      'Treatment response monitoring in insomnia and circadian disorders',
      'Supplement to sleep diary in hypersomnolence evaluation',
      'Screening for irregular sleep-wake patterns',
    ],
    [
      'Patient wears device on non-dominant wrist',
      'Concurrent sleep diary recommended to enhance data interpretation',
      'Scored using validated algorithms for sleep-wake discrimination',
      'Cannot detect sleep stages or respiratory events',
    ],
    [
      'Lower accuracy for detecting wakefulness during quiet rest (overestimates sleep)',
      'Cannot diagnose sleep-disordered breathing or parasomnias',
      'Movement artifacts (e.g., restless legs) may affect accuracy',
    ],
    'Actigraphy uses a watch-like device worn on your wrist for one to two weeks that tracks your movement to estimate when you are asleep and awake. It helps your doctor understand your natural sleep patterns and schedule in your own home. It is especially useful for diagnosing circadian rhythm disorders and making sure you are getting enough sleep before other tests.',
  ),

  // ── BEHAVIORAL ───────────────────────────────────────────────────────────

  'cbti': entry(
    'cbti',
    'Cognitive Behavioral Therapy for Insomnia (CBT-I)',
    'Terapia cognitivo-conductual para el insomnio',
    'behavioral',
    'N/A',
    'Multicomponent behavioral treatment for chronic insomnia that includes sleep restriction, stimulus control, cognitive restructuring, sleep hygiene, and relaxation training. Recommended by AASM and ACP as first-line therapy for chronic insomnia.',
    'CBT-I targets the perpetuating factors in the Spielman 3P model. Sleep restriction increases homeostatic sleep drive and consolidates sleep by limiting time in bed to approximate total sleep time. Stimulus control extinguishes conditioned arousal by re-associating the bed with sleep. Cognitive restructuring addresses maladaptive beliefs and catastrophic thinking about sleep. Combined, these interventions reduce cortical hyperarousal and restore normal sleep-wake regulation. Effect sizes (d=0.98 for ISI) exceed pharmacotherapy.',
    [
      'Sleep restriction: TIB limited to average TST (minimum 5 hours), titrated weekly by sleep efficiency',
      'Stimulus control: bed for sleep/sex only, leave bed if awake >15-20 min, fixed wake time',
      'Cognitive restructuring: identify and challenge dysfunctional beliefs about sleep',
      'Sleep hygiene education: consistent schedule, dark/cool environment, limited caffeine/alcohol',
      'Relaxation training: progressive muscle relaxation, diaphragmatic breathing',
    ],
    [
      'Pre-treatment: 2-week sleep diary baseline',
      'Weekly ISI and sleep diary for progress monitoring',
      'Sleep efficiency calculation each session (TST/TIB x 100)',
      'Typical course: 6-8 weekly sessions (individual or group)',
    ],
    [
      '6-8 sessions delivered by trained behavioral sleep medicine specialist',
      'Digital CBT-I (Somryst, Sleepio) for access-limited settings',
      'Brief behavioral treatment for insomnia (BBT-I, 2-4 sessions) as stepped-care first step',
      'Cautions: modify sleep restriction in bipolar disorder, seizure disorders, and high fall-risk patients',
    ],
    [
      'Transient increased daytime sleepiness during early sleep restriction (safety counseling needed)',
      'Temporary sleep deprivation may unmask mania in bipolar patients',
      'Limited trained providers available in many regions',
    ],
    'CBT-I is the most effective long-term treatment for chronic insomnia. Rather than medication, it uses structured techniques to change sleep habits and thinking patterns that keep insomnia going. You learn to spend less time in bed (which builds sleep pressure), only use the bed for sleep, and challenge unhelpful thoughts about sleep. It typically takes 6-8 weekly sessions and produces lasting improvements. Digital and app-based versions are available if in-person therapy is not accessible.',
  ),

  'sleep-hygiene-education': entry(
    'sleep-hygiene-education',
    'Sleep Hygiene Education',
    'Educacion sobre higiene del sueno',
    'behavioral',
    'N/A',
    'Set of behavioral and environmental recommendations that promote healthy sleep. Alone, insufficient for treating chronic insomnia, but an essential component of CBT-I and general sleep health promotion.',
    'Sleep hygiene practices influence the two primary regulators of sleep: homeostatic sleep drive (Process S) and circadian rhythm (Process C). Consistent wake times stabilize circadian entrainment. Avoiding caffeine, alcohol, and stimulating activities near bedtime reduces arousal. Cool, dark, quiet environments optimize thermoregulatory sleep-onset mechanisms (core temperature decline) and minimize arousal stimuli.',
    [
      'Maintain consistent sleep and wake times 7 days a week',
      'Create a dark, cool (65-68 degrees F), quiet sleep environment',
      'Avoid caffeine 8+ hours before bedtime and alcohol 3+ hours before bedtime',
      'Limit screen exposure (blue light) 1-2 hours before bed',
      'Regular exercise, but not within 2-3 hours of bedtime',
      'Avoid large meals close to bedtime',
      'Reserve the bed for sleep and intimacy only',
    ],
    [
      'Patient education during clinic visit or as component of CBT-I',
      'Sleep hygiene handout or structured module delivery',
      'Assessment of adherence and barriers at follow-up',
    ],
    [
      'Component of CBT-I and general sleep wellness counseling',
      'Standalone sleep hygiene education is NOT recommended as sole treatment for chronic insomnia (AASM guideline)',
      'May be sufficient for mild sleep complaints or prevention',
      'Most effective when combined with behavioral interventions',
    ],
    [
      'Insufficient as monotherapy for insomnia disorder',
      'Overemphasis can increase performance anxiety about sleep',
      'Rigid adherence without other interventions may not improve outcomes',
    ],
    'Sleep hygiene means the everyday habits and bedroom conditions that help you sleep well. This includes keeping a regular sleep schedule, making your bedroom dark and cool, avoiding caffeine late in the day, limiting screens before bed, and exercising regularly but not right before sleep. These habits support good sleep but are usually not enough on their own to treat chronic insomnia. Think of them as a healthy foundation that other treatments build upon.',
  ),

  'stimulus-control-therapy': entry(
    'stimulus-control-therapy',
    'Stimulus Control Therapy',
    'Terapia de control de estimulos',
    'behavioral',
    'N/A',
    'Behavioral intervention for insomnia that re-establishes the bed and bedroom as cues for sleep rather than wakefulness by applying operant conditioning principles.',
    'Chronic insomnia creates a conditioned association between the bed/bedroom and wakefulness, frustration, and arousal (classical conditioning). Stimulus control breaks this maladaptive association by: (1) restricting bed use to sleep, (2) leaving the bed when unable to sleep, and (3) returning only when sleepy. Over time, the discriminative stimulus (bed) becomes re-associated with rapid sleep onset rather than arousal. Developed by Richard Bootzin in 1972, it remains one of the most effective single-component insomnia interventions.',
    [
      'Go to bed only when feeling sleepy (not just tired)',
      'Use the bed only for sleep and sexual activity',
      'If unable to fall asleep within approximately 15-20 minutes, get up and leave the bedroom',
      'Return to bed only when sleepy again',
      'Set a fixed wake time regardless of how much sleep was obtained',
      'No daytime napping',
    ],
    [
      'Baseline assessment with sleep diary',
      'Patient-reported sleep-onset latency and wake-after-sleep-onset times',
      'Monitoring adherence to instructions at follow-up sessions',
    ],
    [
      'Typically delivered as part of CBT-I',
      'Can be used as standalone intervention',
      'Patient education on rationale (reconditioning) is critical for compliance',
      'Allow 2-4 weeks for initial response',
    ],
    [
      'Temporary sleep loss and daytime fatigue during initial implementation',
      'Patient frustration and premature discontinuation',
      'Difficult to implement in patients with limited mobility',
    ],
    'Stimulus control therapy is a technique for insomnia that helps your brain reconnect the bed with sleep. Over time, tossing and turning in bed trains your brain to be alert in bed. This therapy breaks that pattern: you only go to bed when truly sleepy, leave the bedroom if you cannot sleep within about 20 minutes, and get up at the same time every morning. It may feel hard at first and you might lose some sleep, but within a few weeks your brain re-learns that bed means sleep.',
  ),

  'sleep-restriction-therapy': entry(
    'sleep-restriction-therapy',
    'Sleep Restriction Therapy',
    'Terapia de restriccion del sueno',
    'behavioral',
    'N/A',
    'Behavioral technique that limits time in bed to match actual sleep duration, creating mild sleep deprivation that increases sleep drive, consolidates sleep, and improves sleep efficiency.',
    'Insomnia patients typically extend time in bed to compensate for poor sleep, which paradoxically fragments sleep and reduces sleep efficiency (TST/TIB). Sleep restriction (Spielman, 1987) reverses this by prescribing a TIB window that approximates the patient\'s average TST from sleep diary data (minimum 5 hours). Mild sleep deprivation increases Process S (adenosine accumulation), raising sleep pressure. Weekly titration adjusts TIB based on sleep efficiency: SE >=90% triggers 15-30 min TIB increase. This systematically consolidates sleep and reduces time awake in bed.',
    [
      'Initial TIB set equal to average TST from 2-week sleep diary (minimum 5 hours)',
      'Fixed wake time anchored to daily schedule',
      'Bedtime = wake time minus prescribed TIB',
      'Weekly adjustment: SE >=90% add 15-30 min; SE 85-90% no change; SE <85% reduce 15 min',
      'Continue until satisfactory sleep duration with SE >85%',
    ],
    [
      'Baseline 2-week sleep diary with TST and TIB calculations',
      'Weekly sleep efficiency calculation to guide titration',
      'Monitoring for excessive daytime sleepiness and safety concerns',
    ],
    [
      'Core component of CBT-I',
      'Requires careful monitoring during first 1-2 weeks (sleepiness may impair function)',
      'Modified protocol for bipolar disorder (minimum TIB 6-6.5 hours), seizure disorders, and high fall-risk patients',
      'Contraindicated in untreated bipolar disorder without modification',
    ],
    [
      'Transient daytime sleepiness (warn regarding driving and safety-sensitive activities)',
      'Risk of mania induction in bipolar disorder',
      'Risk of seizure in susceptible individuals',
      'Increased fall risk in elderly',
    ],
    'Sleep restriction therapy is a powerful insomnia technique that limits your time in bed to closely match the amount you are actually sleeping. For example, if you sleep only 5.5 hours but spend 8 hours in bed, your initial "sleep window" would be about 5.5 hours. This builds up stronger sleep pressure, helping you fall asleep faster and stay asleep longer. Each week your sleep window is gradually expanded as your sleep efficiency improves. It can make you sleepy at first, so your doctor will monitor you closely.',
  ),
};

// ---------------------------------------------------------------------------
// Utility Functions
// ---------------------------------------------------------------------------

/**
 * Search sleep medicine entries by query string.
 * Matches against id, name, nameEs, description, pathophysiology,
 * clinicalFeatures, diagnostics, treatment, complications, and patientExplanation.
 *
 * @param query - Case-insensitive search string
 * @returns Array of matching SleepMedicineEntry objects
 */
export function searchSleepMedicineEntries(query: string): SleepMedicineEntry[] {
  const q = query.toLowerCase();
  return Object.values(SLEEP_MEDICINE_ENTRIES).filter((e) => {
    const searchable = [
      e.id,
      e.name,
      e.nameEs,
      e.description,
      e.pathophysiology,
      ...e.clinicalFeatures,
      ...e.diagnostics,
      ...e.treatment,
      ...e.complications,
      e.patientExplanation,
    ].join(' ').toLowerCase();
    return searchable.includes(q);
  });
}

/**
 * Filter sleep medicine entries by one or more categories.
 *
 * @param categories - Single category or array of SleepCategory values
 * @returns Array of matching SleepMedicineEntry objects
 */
export function filterSleepMedicineByCategory(
  categories: SleepCategory | SleepCategory[],
): SleepMedicineEntry[] {
  const cats = Array.isArray(categories) ? categories : [categories];
  return Object.values(SLEEP_MEDICINE_ENTRIES).filter((e) =>
    cats.includes(e.category),
  );
}

/**
 * Get a single sleep medicine entry by its ID.
 *
 * @param id - The unique entry identifier
 * @returns The matching entry or undefined
 */
export function getSleepMedicineEntryById(id: string): SleepMedicineEntry | undefined {
  return SLEEP_MEDICINE_ENTRIES[id];
}

/**
 * Get all unique categories represented in the database.
 *
 * @returns Array of SleepCategory values present in the database
 */
export function getSleepMedicineCategories(): SleepCategory[] {
  const cats = new Set<SleepCategory>();
  for (const e of Object.values(SLEEP_MEDICINE_ENTRIES)) {
    cats.add(e.category);
  }
  return Array.from(cats);
}

/**
 * Get the count of entries per category.
 *
 * @returns Record mapping each SleepCategory to its entry count
 */
export function getSleepMedicineCategoryCounts(): Partial<Record<SleepCategory, number>> {
  const counts: Partial<Record<SleepCategory, number>> = {};
  for (const e of Object.values(SLEEP_MEDICINE_ENTRIES)) {
    counts[e.category] = (counts[e.category] ?? 0) + 1;
  }
  return counts;
}
