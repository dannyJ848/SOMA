/**
 * Addiction Medicine Database
 *
 * Comprehensive database of addiction medicine entries covering
 * substance use disorders, withdrawal syndromes, pharmacotherapy,
 * behavioral addictions, and evidence-based treatment approaches.
 */

// ── Types ──────────────────────────────────────────────────────────

export type AddictionCategory =
  | 'alcohol'
  | 'opioid'
  | 'stimulant'
  | 'sedative'
  | 'cannabis'
  | 'tobacco'
  | 'behavioral-addiction'
  | 'withdrawal'
  | 'pharmacotherapy';

export interface AddictionMedicineEntry {
  id: string;
  name: string;
  category: AddictionCategory;
  description: string;
  epidemiology: string;
  pathophysiology: string;
  screening: string;
  clinicalPresentation: string;
  management: string;
  pharmacotherapy: string;
  keyPearls: string[];
  references: string[];
}

// ── Database ───────────────────────────────────────────────────────

export const addictionMedicineDatabase: AddictionMedicineEntry[] = [
  // ── ALCOHOL ────────────────────────────────────────────────────
  {
    id: 'aud-overview',
    name: 'Alcohol Use Disorder (AUD) Overview',
    category: 'alcohol',
    description:
      'Chronic relapsing brain disorder characterized by compulsive alcohol use, loss of control over intake, and negative emotional state during withdrawal. Defined by DSM-5 criteria (2+ of 11 criteria in 12-month period).',
    epidemiology:
      'Affects ~14.5 million Americans (ages 12+). Third leading preventable cause of death in the US (~95,000 deaths/year). Male-to-female ratio ~2:1 but gap is narrowing. Lifetime prevalence ~29%.',
    pathophysiology:
      'Alcohol enhances GABAergic inhibition and inhibits glutamatergic (NMDA) excitation. Chronic use leads to neuroadaptation: GABA receptor down-regulation and NMDA receptor up-regulation. Dopaminergic reward pathway (VTA to nucleus accumbens) mediates reinforcement. Genetic factors account for ~50% of risk.',
    screening:
      'AUDIT (Alcohol Use Disorders Identification Test) — 10 items, score >=8 suggestive. AUDIT-C (first 3 questions) — score >=4 men, >=3 women. CAGE — 2+ positive answers suggestive. Single-question screen: "How many times in the past year have you had 5+ (men) or 4+ (women) drinks in a day?"',
    clinicalPresentation:
      'Impaired control (drinking more/longer than intended), social impairment (giving up activities), risky use (drinking in hazardous situations), pharmacological indicators (tolerance, withdrawal). Severity: mild (2-3 criteria), moderate (4-5), severe (6+).',
    management:
      'Brief intervention (SBIRT framework). Motivational interviewing. Pharmacotherapy (see separate entries). Behavioral therapies: CBT, 12-step facilitation, contingency management. Residential vs. outpatient based on severity. Address co-occurring psychiatric disorders.',
    pharmacotherapy:
      'FDA-approved: naltrexone (oral 50mg/day or injectable 380mg/month), acamprosate (666mg TID), disulfiram (250mg/day). Off-label: topiramate, gabapentin, baclofen. Combination therapy may be considered.',
    keyPearls: [
      'DSM-5 eliminated the abuse/dependence distinction — now a single spectrum disorder',
      'AUDIT is the gold-standard screening tool; CAGE has lower sensitivity',
      'Only ~7.6% of people with AUD receive any treatment',
      'Naltrexone reduces heavy drinking days; acamprosate supports abstinence maintenance',
      'Always assess for co-occurring mood, anxiety, and trauma-related disorders',
    ],
    references: [
      'DSM-5 Alcohol Use Disorder Criteria (APA, 2013)',
      'NIAAA Clinician\'s Guide: Helping Patients Who Drink Too Much (2005, updated 2016)',
      'SAMHSA National Survey on Drug Use and Health (NSDUH)',
    ],
  },
  {
    id: 'audit-screening',
    name: 'AUDIT Screening Tool',
    category: 'alcohol',
    description:
      'Alcohol Use Disorders Identification Test — 10-item WHO-developed screening instrument identifying hazardous, harmful, and dependent drinking patterns.',
    epidemiology:
      'Validated in primary care settings across multiple countries and populations. Sensitivity 73-97%, specificity 78-96% depending on cut-off and population.',
    pathophysiology:
      'Not directly applicable. Tool measures behavioral and consequence domains reflecting the neurobiological progression from hazardous to dependent drinking.',
    screening:
      '10 questions covering consumption (items 1-3), dependence symptoms (4-6), and alcohol-related harms (7-10). Each scored 0-4. Total score 0-40. Zones: 0-7 low risk, 8-15 hazardous, 16-19 harmful, 20+ possible dependence. AUDIT-C uses only items 1-3 (score 0-12).',
    clinicalPresentation:
      'Patients scoring in higher zones may present with tolerance, withdrawal, inability to cut down, neglect of responsibilities, morning drinking, guilt about drinking, or alcohol-related injuries.',
    management:
      'Zone I (0-7): alcohol education. Zone II (8-15): simple advice/brief intervention. Zone III (16-19): brief intervention + continued monitoring. Zone IV (20+): referral to specialist treatment. Repeat screening annually or at relevant visits.',
    pharmacotherapy:
      'Screening result guides pharmacotherapy consideration. Scores >=20 strongly suggest evaluation for pharmacotherapy alongside psychosocial treatment.',
    keyPearls: [
      'AUDIT-C (first 3 questions) is an efficient brief screen for primary care',
      'Cut-off of 8 is standard; some recommend lower cut-offs for women (>=5) and elderly (>=5)',
      'AUDIT performs better than CAGE for detecting hazardous and harmful drinking',
      'Embed into routine clinical workflow (vital signs, intake forms)',
      'A positive screen is not a diagnosis — requires clinical follow-up',
    ],
    references: [
      'Babor TF et al. AUDIT: The Alcohol Use Disorders Identification Test. WHO, 2001',
      'Bush K et al. The AUDIT alcohol consumption questions. Arch Intern Med. 1998;158(16):1789-1795',
    ],
  },
  {
    id: 'cage-screening',
    name: 'CAGE Questionnaire',
    category: 'alcohol',
    description:
      'Four-item screening tool for alcohol problems. Acronym: Cut down, Annoyed, Guilty, Eye-opener. Quick but less sensitive than AUDIT for hazardous drinking.',
    epidemiology:
      'Sensitivity ~60-90%, specificity ~40-95% depending on population. Less effective in women, younger drinkers, and less severe presentations. Widely used due to brevity.',
    pathophysiology:
      'Questions target psychosocial consequences and dependence features rather than consumption patterns, reflecting later-stage neuroadaptation and loss of control.',
    screening:
      'Four yes/no questions: (1) Have you ever felt you should Cut down? (2) Have people Annoyed you by criticizing your drinking? (3) Have you ever felt Guilty about drinking? (4) Have you ever had a drink first thing in the morning (Eye-opener)? Score >=2 is clinically significant.',
    clinicalPresentation:
      'Positive CAGE responses often correlate with more severe AUD, social consequences, and physiological dependence. Patients endorsing the Eye-opener question may be at risk for withdrawal.',
    management:
      'Score >=2: proceed with comprehensive assessment (AUDIT, clinical interview, labs). Score of 1: consider further evaluation. Integrate into clinical interview naturally.',
    pharmacotherapy:
      'Not directly linked to pharmacotherapy decisions. A positive CAGE should prompt full evaluation that may lead to pharmacotherapy initiation.',
    keyPearls: [
      'CAGE is better at detecting alcohol dependence than hazardous drinking',
      'Less sensitive in women and adolescents — consider AUDIT instead',
      'Easy to memorize and administer in busy clinical settings',
      'Eye-opener question is most specific for dependence',
      'CAGE does not assess quantity/frequency — supplement with consumption questions',
    ],
    references: [
      'Ewing JA. Detecting alcoholism: the CAGE questionnaire. JAMA. 1984;252(14):1905-1907',
      'Dhalla S, Kopec JA. The CAGE questionnaire for alcohol misuse. J Clin Epidemiol. 2007;60(8):757-766',
    ],
  },
  {
    id: 'alcohol-withdrawal',
    name: 'Alcohol Withdrawal Syndrome',
    category: 'withdrawal',
    description:
      'Spectrum of symptoms from autonomic hyperactivity to seizures and delirium tremens (DTs) occurring within 6-96 hours after cessation or reduction of heavy, prolonged alcohol use.',
    epidemiology:
      'Occurs in ~50% of patients with AUD upon cessation. ~5% of untreated withdrawal progresses to DTs. DT mortality was historically ~35%, now ~1-5% with treatment. Withdrawal seizures occur in ~3-5% of cases.',
    pathophysiology:
      'Chronic alcohol suppresses CNS via GABA enhancement and NMDA inhibition. Abrupt cessation unmasks compensatory up-regulation: decreased GABAergic tone and glutamatergic excitotoxicity. Sympathetic nervous system hyperactivation. Kindling phenomenon: repeated withdrawals worsen subsequent episodes.',
    screening:
      'CIWA-Ar (Clinical Institute Withdrawal Assessment for Alcohol-Revised) — 10-item scale (score 0-67). Mild (<10), moderate (10-18), severe (>18). PAWSS (Prediction of Alcohol Withdrawal Severity Scale) for risk stratification on admission. History of prior withdrawal, seizures, or DTs increases risk.',
    clinicalPresentation:
      '6-12h: tremor, anxiety, GI upset, insomnia, diaphoresis. 12-24h: alcoholic hallucinosis (visual/tactile, intact sensorium). 24-48h: withdrawal seizures (generalized tonic-clonic). 48-96h: delirium tremens (confusion, agitation, fever, tachycardia, diaphoresis, hallucinations). Autonomic instability throughout.',
    management:
      'Benzodiazepines are first-line: symptom-triggered protocol (CIWA-based) preferred over fixed-dose. Chlordiazepoxide, diazepam (long-acting), or lorazepam (hepatic impairment). Phenobarbital for refractory cases or adjunct. IV fluids, electrolyte repletion (Mg, K, PO4). Thiamine 500mg IV x3 days before glucose (prevent Wernicke). ICU for DTs.',
    pharmacotherapy:
      'Benzodiazepines: chlordiazepoxide 25-100mg q6h, diazepam 10-20mg q1-2h, lorazepam 2-4mg q1h (symptom-triggered). Phenobarbital: 130-260mg IV for refractory withdrawal. Adjuncts: dexmedetomidine, propofol (ICU). Avoid beta-blockers and antipsychotics as monotherapy. Thiamine, folate, multivitamin.',
    keyPearls: [
      'Symptom-triggered dosing reduces total benzodiazepine use and ICU stays',
      'CIWA-Ar requires a cooperative, communicative patient — use clinical judgment in intubated/obtunded patients',
      'Always give thiamine BEFORE glucose to prevent precipitating Wernicke encephalopathy',
      'Kindling: each withdrawal episode is typically more severe than the last',
      'DTs carry significant mortality — early recognition and aggressive treatment are essential',
      'Phenobarbital is gaining favor as single-agent for alcohol withdrawal management',
    ],
    references: [
      'Sullivan JT et al. Assessment of alcohol withdrawal: the CIWA-Ar scale. Br J Addict. 1989;84(11):1353-1357',
      'Mayo-Smith MF. Pharmacological management of alcohol withdrawal. JAMA. 1997;278(2):144-151',
      'Long D et al. Phenobarbital vs. benzodiazepines for alcohol withdrawal. Ann Emerg Med. 2020;75(2)',
    ],
  },
  {
    id: 'delirium-tremens',
    name: 'Delirium Tremens (DTs)',
    category: 'withdrawal',
    description:
      'Most severe form of alcohol withdrawal characterized by acute confusional state with autonomic hyperactivity, hallucinations, and agitation. Medical emergency with significant mortality if untreated.',
    epidemiology:
      'Occurs in ~5% of hospitalized patients with alcohol withdrawal. Mortality ~1-5% with treatment, up to 35% without. Risk factors: prior DTs, concurrent illness, older age, heavy prolonged use, elevated BAL at presentation, comorbid liver disease.',
    pathophysiology:
      'Severe glutamatergic excitotoxicity and catecholamine surge due to loss of GABAergic inhibition. Massive sympathetic activation. Involves cortical, subcortical, and brainstem dysfunction. Often preceded by withdrawal seizures.',
    screening:
      'CIWA-Ar score >20 suggests severe withdrawal. PAWSS >=4 predicts complicated withdrawal. Risk stratification: prior DTs/seizures, heavy daily use, concurrent medical illness, elevated admission BAL, abnormal LFTs, older age, hypokalemia, thrombocytopenia.',
    clinicalPresentation:
      'Onset typically 48-96h after last drink (can be later). Delirium (fluctuating confusion, disorientation), severe autonomic instability (tachycardia, hypertension, fever, diaphoresis), vivid hallucinations (visual — classic "pink elephants"), profound agitation, tremor. Can progress to cardiovascular collapse.',
    management:
      'ICU admission. Aggressive benzodiazepine dosing (diazepam 10-20mg IV q5-10min until calm). Phenobarbital 130-260mg IV as adjunct/alternative. Intubation and propofol/dexmedetomidine for refractory cases. Continuous monitoring. Aggressive fluid resuscitation. Electrolyte correction. Treat precipitating conditions (infection, trauma, pancreatitis).',
    pharmacotherapy:
      'High-dose benzodiazepines (may require >100mg diazepam equivalents in first 24h). Phenobarbital loading (10mg/kg or 260mg IV q15-20min). Dexmedetomidine infusion (adjunct for sympathetic hyperactivity). Propofol (refractory, intubated). Avoid haloperidol monotherapy (lowers seizure threshold). Thiamine, magnesium, potassium.',
    keyPearls: [
      'DTs is a clinical diagnosis — no specific lab test confirms it',
      'Onset is classically 48-96h post-cessation but can be delayed (especially with concurrent benzodiazepine use)',
      'Always search for concurrent precipitants: infection, GI bleed, pancreatitis, trauma',
      'Phenobarbital may be superior to benzodiazepines for ICU length of stay',
      'Mortality is primarily from hyperthermia, cardiac arrhythmias, and aspiration',
    ],
    references: [
      'Schuckit MA. Recognition and management of withdrawal delirium (delirium tremens). NEJM. 2014;371:2109-2113',
      'Schmidt KJ et al. Treatment of severe alcohol withdrawal. Ann Pharmacother. 2016;50(5):389-401',
    ],
  },
  {
    id: 'naltrexone-alcohol',
    name: 'Naltrexone for Alcohol Use Disorder',
    category: 'pharmacotherapy',
    description:
      'Opioid antagonist that reduces alcohol craving and heavy drinking by blocking endogenous opioid-mediated reward. FDA-approved for AUD in oral and injectable formulations.',
    epidemiology:
      'COMBINE trial: naltrexone reduced heavy drinking days by ~25%. NNT ~12 for preventing return to any drinking, NNT ~10 for preventing heavy drinking. Injectable form (Vivitrol) improves adherence.',
    pathophysiology:
      'Blocks mu-opioid receptors, attenuating dopamine release in nucleus accumbens during alcohol consumption. Reduces the rewarding/pleasurable effects of alcohol. Also blocks endorphin-mediated positive reinforcement. Supports "pharmacological extinction" (Sinclair method).',
    screening:
      'Assess for concurrent opioid use (contraindication). Check LFTs (relatively contraindicated in acute hepatitis or liver failure). Verify opioid-free for 7-10 days before initiation. Pregnancy test (Category X).',
    clinicalPresentation:
      'Target patients: AUD with goal of reduced drinking or abstinence. Particularly effective in patients with strong cravings and family history of alcoholism. OPRM1 Asp40 variant may predict enhanced response.',
    management:
      'Oral: 50mg daily (can start at 25mg x2 days for tolerability). Injectable IM (Vivitrol): 380mg gluteal injection every 4 weeks. Continue for at least 3-6 months, often 12+ months. Combine with behavioral therapy. Monitor adherence and side effects.',
    pharmacotherapy:
      'Oral naltrexone 50mg/day. Injectable naltrexone (Vivitrol) 380mg IM monthly. Common side effects: nausea (most common, usually transient), headache, dizziness, fatigue. Hepatotoxicity risk at high doses (>300mg/day). Carries opioid blockade — patients cannot receive opioid analgesia while on naltrexone.',
    keyPearls: [
      'Naltrexone can be initiated while patient is still drinking (unlike disulfiram)',
      'Injectable form eliminates adherence concerns — strongly consider for unreliable oral intake',
      'Must be opioid-free 7-10 days before starting to avoid precipitated withdrawal',
      'Patients should carry a medical alert card noting opioid blockade',
      'Can be combined with acamprosate for complementary mechanisms',
    ],
    references: [
      'Anton RF et al. COMBINE study. JAMA. 2006;295(17):2003-2017',
      'Jonas DE et al. Pharmacotherapy for adults with AUD. JAMA. 2014;311(18):1889-1900',
    ],
  },
  {
    id: 'acamprosate',
    name: 'Acamprosate (Campral)',
    category: 'pharmacotherapy',
    description:
      'Glutamate modulator FDA-approved for maintenance of abstinence in AUD. Restores balance between excitatory and inhibitory neurotransmission disrupted by chronic alcohol use.',
    epidemiology:
      'European meta-analyses show NNT ~12 for maintaining abstinence. COMBINE trial showed less robust effect in US population. Most effective in patients with goal of complete abstinence and who have already achieved initial abstinence.',
    pathophysiology:
      'Structural analog of GABA. Modulates glutamatergic neurotransmission — acts as partial agonist at NMDA receptors and may modulate mGluR5 receptors. Restores balance between excitatory glutamate and inhibitory GABA disrupted by chronic alcohol, reducing hyperexcitability associated with protracted withdrawal.',
    screening:
      'Assess renal function (renally cleared, contraindicated if CrCl <30mL/min). No hepatic contraindication — safe in liver disease (advantage over naltrexone). Assess for suicidality (monitor).',
    clinicalPresentation:
      'Best for patients who have already achieved abstinence and want to maintain it. Less effective for reducing drinking in active drinkers. Targets the "negative reinforcement" (dysphoria, anxiety) of protracted withdrawal.',
    management:
      '666mg (two 333mg tablets) TID. Begin after patient has been abstinent for several days (typically after withdrawal management). Continue for 12 months or longer. High pill burden is a compliance barrier. Safe in hepatic impairment.',
    pharmacotherapy:
      'Acamprosate 666mg PO TID (six 333mg tablets/day). Side effects: diarrhea (most common), nausea, flatulence. Dose adjustment for renal impairment (CrCl 30-50: 333mg TID). No significant drug interactions. No hepatotoxicity. No abuse potential.',
    keyPearls: [
      'Only FDA-approved AUD medication safe in severe liver disease',
      'High pill burden (6 tablets/day) limits adherence — counsel patients',
      'Works best in patients already abstinent (unlike naltrexone which works in active drinkers)',
      'Complementary mechanism to naltrexone — can be combined',
      'Requires dose adjustment for renal impairment, contraindicated if CrCl <30',
    ],
    references: [
      'Mason BJ, Heyser CJ. Acamprosate: a prototypic neuromodulator in the treatment of AUD. CNS Neurol Disord Drug Targets. 2010;9(1):23-32',
      'Rösner S et al. Acamprosate for alcohol dependence. Cochrane Database Syst Rev. 2010;(9):CD004332',
    ],
  },
  {
    id: 'disulfiram',
    name: 'Disulfiram (Antabuse)',
    category: 'pharmacotherapy',
    description:
      'Aldehyde dehydrogenase inhibitor that causes unpleasant reaction when alcohol is consumed. FDA-approved aversive therapy for AUD. Effectiveness depends on supervised administration.',
    epidemiology:
      'Limited efficacy in unsupervised use (poor adherence). Supervised disulfiram shows significant benefit. Most effective in highly motivated patients with external accountability. Used less frequently than naltrexone/acamprosate.',
    pathophysiology:
      'Irreversibly inhibits aldehyde dehydrogenase (ALDH), blocking metabolism of acetaldehyde (ethanol metabolite). Acetaldehyde accumulation causes the disulfiram-ethanol reaction (DER): flushing, nausea, vomiting, headache, hypotension, tachycardia. Some evidence of dopamine beta-hydroxylase inhibition affecting norepinephrine.',
    screening:
      'Confirm abstinence for at least 12 hours (ideally 24h) before starting. Check LFTs (hepatotoxicity risk). Rule out cardiac disease (DER can cause hypotension, arrhythmias). Assess motivation and ability to comply. Inform about all alcohol sources (mouthwash, cooking wine, sauces).',
    clinicalPresentation:
      'Target: highly motivated patients who want an external deterrent. DER occurs within 10-30 minutes of alcohol ingestion: facial flushing, throbbing headache, nausea/vomiting, diaphoresis, hypotension, tachycardia. Severe reactions: respiratory depression, cardiovascular collapse, death (rare).',
    management:
      '250mg daily (range 125-500mg). Supervised administration (spouse, pharmacist, clinic) greatly improves efficacy. Begin after at least 12h abstinence. Effects persist 1-2 weeks after discontinuation. Regular LFT monitoring. Warn about all alcohol-containing products.',
    pharmacotherapy:
      'Disulfiram 250mg PO daily (start 250mg, range 125-500mg). Must be opioid- and alcohol-free. Side effects: drowsiness, metallic taste, hepatotoxicity (rare but serious), peripheral neuropathy, psychosis (rare). Contraindicated with metronidazole, certain anticoagulants. DER lasts 30min-several hours.',
    keyPearls: [
      'Supervised administration is key — unsupervised use has poor outcomes',
      'Effects last up to 14 days after last dose — patients must be informed',
      'Patients must avoid ALL alcohol sources: mouthwash, hand sanitizer, cooking alcohol, sauces',
      'Best for highly motivated patients with good social support',
      'Hepatotoxicity risk — obtain baseline LFTs and monitor periodically',
    ],
    references: [
      'Jorgensen CH et al. The efficacy of disulfiram for the treatment of AUD. Alcohol Clin Exp Res. 2011;35(10):1749-1758',
      'Skinner MD et al. Disulfiram efficacy in the treatment of AUD. PLoS One. 2014;9(2):e87366',
    ],
  },
  // ── OPIOID ─────────────────────────────────────────────────────
  {
    id: 'oud-overview',
    name: 'Opioid Use Disorder (OUD) Overview',
    category: 'opioid',
    description:
      'Chronic brain disorder characterized by compulsive opioid use despite harmful consequences. Involves prescription opioids, heroin, and synthetic opioids (fentanyl). DSM-5 criteria parallel AUD.',
    epidemiology:
      '~2.7 million Americans with OUD. >80,000 opioid overdose deaths annually (majority fentanyl-related). Opioid crisis declared a public health emergency. Affects all demographics — initial wave driven by prescription opioids, current wave dominated by illicit fentanyl and fentanyl analogs.',
    pathophysiology:
      'Opioids bind mu-opioid receptors (MOR) in VTA and nucleus accumbens, triggering dopamine release. Chronic use: receptor down-regulation, cAMP superactivation, locus coeruleus hyperactivity (withdrawal). Neuroplastic changes in prefrontal cortex impair executive control. Tolerance develops to analgesic/euphoric effects faster than respiratory depression.',
    screening:
      'Prescription Drug Monitoring Programs (PDMP). Urine drug screen (immunoassay, confirmatory GC-MS). NIDA Quick Screen. ORT (Opioid Risk Tool) for prescribing risk. SOAPP-R (Screener and Opioid Assessment for Patients with Pain-Revised). Ask about route, frequency, source, overdose history.',
    clinicalPresentation:
      'Compulsive use, craving, inability to cut down. Tolerance, withdrawal. Social/occupational impairment. Risk-taking (sharing needles, buying from unknown sources). Complications: overdose, infectious disease (HIV, HCV, endocarditis), constipation, hypogonadism.',
    management:
      'Medications for OUD (MOUD) are first-line — see individual entries. Buprenorphine (office-based), methadone (OTP), or injectable naltrexone. Psychosocial support (but MOUD alone is effective). Harm reduction: naloxone distribution, syringe services, fentanyl test strips. Treat co-occurring conditions. Long-term/indefinite MOUD is recommended.',
    pharmacotherapy:
      'Buprenorphine/naloxone (Suboxone): partial agonist, first-line. Methadone: full agonist, OTP-dispensed. Injectable naltrexone (Vivitrol): antagonist, requires full detox. Evidence strongly supports MOUD over abstinence-only approaches. MOUD reduces mortality by 50%+.',
    keyPearls: [
      'MOUD is first-line treatment — not "replacing one drug with another"',
      'MOUD reduces all-cause mortality by ~50% and overdose mortality even more',
      'Fentanyl dominates current opioid crisis — patients may not know what they are using',
      'X-waiver requirement eliminated in 2023 — any DEA-licensed prescriber can prescribe buprenorphine',
      'OUD is a chronic condition — indefinite MOUD is appropriate and recommended',
      'Naloxone should be co-prescribed to all patients with OUD and those on high-dose opioids',
    ],
    references: [
      'Mattick RP et al. Buprenorphine maintenance vs. placebo. Cochrane Database Syst Rev. 2014',
      'SAMHSA TIP 63: Medications for Opioid Use Disorder (2021)',
      'National Academies of Sciences. Medications for Opioid Use Disorder Save Lives (2019)',
    ],
  },
  {
    id: 'buprenorphine',
    name: 'Buprenorphine (Suboxone/Sublocade)',
    category: 'pharmacotherapy',
    description:
      'Partial mu-opioid agonist and kappa antagonist. First-line MOUD for OUD. Available as sublingual (Suboxone), buccal, and monthly injectable (Sublocade). Ceiling effect on respiratory depression improves safety.',
    epidemiology:
      'Over 1.4 million buprenorphine prescriptions annually. Reduces opioid-positive drug tests by 75%+. Reduces overdose mortality by ~50%. Retained in treatment better than naltrexone. Office-based prescribing dramatically increases access.',
    pathophysiology:
      'Partial mu-agonist: produces submaximal receptor activation (ceiling effect). High binding affinity but lower intrinsic activity than full agonists. Displaces other opioids from receptors. Kappa antagonism may have antidepressant/anti-dysphoric effects. Long half-life (24-60h) prevents withdrawal cycling.',
    screening:
      'Confirm OUD diagnosis. Assess for current opioid use (type, amount, timing). COWS (Clinical Opiate Withdrawal Scale) score >=8-12 before induction. Urine drug screen. Assess for pregnancy (buprenorphine monoproduct preferred). Check hepatic function. X-waiver no longer required (post-2023).',
    clinicalPresentation:
      'Induction: patient must be in mild-moderate withdrawal (COWS >=8-12) to avoid precipitated withdrawal. Stabilization: dose adjustment over 1-2 weeks. Maintenance: stable dosing with reduced cravings and withdrawal. Side effects: headache, constipation, nausea, insomnia.',
    management:
      'Standard induction: start 2-4mg SL, observe 1-2h, repeat if needed (Day 1 max 8mg). Day 2: 8-16mg. Target maintenance: 16-24mg/day (some need 32mg). Low-dose ("micro-dosing" / Bernese method) induction allows initiation without full withdrawal. Sublocade (injectable): 300mg SC monthly x2, then 100mg or 300mg monthly.',
    pharmacotherapy:
      'Sublingual buprenorphine/naloxone (Suboxone): 2/0.5mg, 4/1mg, 8/2mg, 12/3mg films/tablets. Buprenorphine monoproduct (Subutex): for pregnancy. Sublocade: 300mg/100mg SC monthly depot. Common side effects: constipation, headache, nausea, insomnia, diaphoresis. Precipitated withdrawal if given too early.',
    keyPearls: [
      'Ceiling effect on respiratory depression makes buprenorphine safer than methadone',
      'Must wait until patient is in withdrawal (COWS >=8-12) before standard induction',
      'Micro-dosing (Bernese method) allows induction without waiting for withdrawal — increasingly used with fentanyl',
      'X-waiver eliminated 2023 — any DEA-licensed prescriber can prescribe',
      'Naloxone component in Suboxone deters IV misuse (poorly bioavailable sublingually)',
      'Sublocade depot injection eliminates diversion and adherence concerns',
    ],
    references: [
      'SAMHSA TIP 63: Medications for Opioid Use Disorder (2021)',
      'Hämmig R et al. Use of microdoses for induction of buprenorphine. Clin Pharmacol Ther. 2016;99(2):226-231',
      'Tompkins DA et al. Buprenorphine pharmacology. Drug Alcohol Depend. 2020;218:108361',
    ],
  },
  {
    id: 'methadone-oud',
    name: 'Methadone for Opioid Use Disorder',
    category: 'pharmacotherapy',
    description:
      'Full mu-opioid agonist dispensed through Opioid Treatment Programs (OTPs). Longest-studied MOUD. Eliminates withdrawal, reduces craving, and blocks euphoric effects at adequate doses through cross-tolerance.',
    epidemiology:
      'Over 400,000 patients in methadone maintenance in the US. Reduces opioid use by 33-69%, reduces mortality. Superior retention vs. buprenorphine in some studies. Only available through federally regulated OTPs (with some recent telehealth exceptions).',
    pathophysiology:
      'Full mu-opioid agonist with long half-life (24-36h). Achieves steady state in 3-5 days. NMDA receptor antagonist properties (may help with neuropathic pain). At adequate doses, produces cross-tolerance that blocks euphoria from illicit opioids. QTc prolongation via hERG channel blockade.',
    screening:
      'Confirm OUD diagnosis. ECG recommended (QTc prolongation risk). LFTs, hepatitis B/C, HIV. Urine drug screen. Pregnancy test. Assess for concurrent CNS depressant use (benzodiazepines — risk of respiratory depression). Review PDMP.',
    clinicalPresentation:
      'Induction: unlike buprenorphine, no need to be in withdrawal. Start low, go slow (risk of accumulation and delayed overdose). Stabilization phase with daily observed dosing. Maintenance with earned take-home doses. Side effects: constipation, diaphoresis, QTc prolongation, sexual dysfunction, weight gain.',
    management:
      'Induction: 20-30mg first dose (max 40mg Day 1). Increase 5-10mg every 5-7 days. Therapeutic range usually 60-120mg/day. Daily observed dosing initially; earn take-home doses. ECG monitoring (QTc). Drug interaction vigilance (CYP3A4, CYP2B6). Split dosing if rapid metabolizer.',
    pharmacotherapy:
      'Methadone 60-120mg/day (oral liquid or tablet). Start 20-30mg, titrate slowly (deaths occur during induction from accumulation). QTc monitoring: baseline ECG, repeat at 30 days, annually, and if dose >100mg. Avoid concurrent QTc-prolonging drugs. Taper very slowly if discontinuing (5-10%/week).',
    keyPearls: [
      'Most deaths from methadone occur during the first 2 weeks of induction (drug accumulation)',
      'Long half-life means steady state takes 3-5 days — titrate slowly',
      'Doses <60mg are subtherapeutic for most patients — inadequate dosing leads to treatment failure',
      'QTc monitoring is essential — risk of torsades de pointes',
      'Methadone can only be dispensed for OUD through federally regulated OTPs',
      'Despite regulatory barriers, methadone has the strongest evidence base for OUD treatment retention',
    ],
    references: [
      'Mattick RP et al. Methadone maintenance therapy vs. no opioid replacement therapy for opioid dependence. Cochrane Database Syst Rev. 2009',
      'Chou R et al. Methadone safety: a clinical practice guideline. J Pain. 2014;15(4):321-337',
    ],
  },
  {
    id: 'naltrexone-opioid',
    name: 'Injectable Naltrexone (Vivitrol) for OUD',
    category: 'pharmacotherapy',
    description:
      'Extended-release injectable mu-opioid antagonist for OUD prevention of relapse. Requires complete opioid detoxification before initiation. Monthly gluteal injection eliminates daily adherence concerns.',
    epidemiology:
      'X:BOT trial showed comparable outcomes to buprenorphine once successfully initiated — but initiation is the major barrier (many patients unable to complete detox). Higher dropout during induction phase.',
    pathophysiology:
      'Competitive mu-opioid receptor antagonist. Blocks opioid effects for ~28 days per injection. No agonist activity — does not produce euphoria, physical dependence, or tolerance. Does not address withdrawal or craving directly. Risk of overdose if patient attempts to override blockade.',
    screening:
      'Must be opioid-free for 7-14 days (7 days for short-acting, 14 days for methadone/buprenorphine). Naloxone challenge test if uncertain. Urine drug screen negative for opioids. Assess motivation and ability to complete detox. LFTs.',
    clinicalPresentation:
      'Best for: highly motivated patients, those completing residential treatment, criminal justice populations, those who prefer non-agonist approach. Precipitated withdrawal if opioids still present. Loss of tolerance creates high overdose risk if patient relapses after stopping.',
    management:
      '380mg IM gluteal injection every 4 weeks. Facilitate detoxification first. Naloxone challenge (0.8mg IM) if opioid status uncertain. Bridge with oral naltrexone (25mg, then 50mg) before injection. Monitor for injection site reactions. Counsel about loss of tolerance and overdose risk.',
    pharmacotherapy:
      'Injectable naltrexone (Vivitrol) 380mg IM monthly. Oral naltrexone 50mg/day (poor adherence as standalone). Side effects: injection site reactions/nodules, nausea, headache, hepatotoxicity (rare). Black box warning: hepatotoxicity. Cannot use opioid analgesics while on naltrexone — need non-opioid pain management plan.',
    keyPearls: [
      'The biggest barrier is induction — patients must be fully detoxed from opioids',
      'Loss of opioid tolerance after naltrexone creates potentially fatal overdose risk upon relapse',
      'X:BOT trial: comparable to buprenorphine once initiated, but harder to initiate',
      'Good option for criminal justice settings and patients opposed to agonist therapy',
      'Patients must have non-opioid pain management plan in place',
    ],
    references: [
      'Lee JD et al. (X:BOT Trial). Lancet. 2018;391(10118):309-318',
      'Krupitsky E et al. Injectable extended-release naltrexone for opioid dependence. Lancet. 2011;377(9776):1506-1513',
    ],
  },
  {
    id: 'opioid-overdose-naloxone',
    name: 'Opioid Overdose and Naloxone',
    category: 'opioid',
    description:
      'Opioid overdose causes respiratory depression, CNS depression, and miosis. Naloxone is a competitive opioid antagonist that rapidly reverses overdose. Available as intranasal (Narcan) and injectable formulations.',
    epidemiology:
      'Over 80,000 opioid overdose deaths annually in the US. Fentanyl involved in >70% of opioid overdose deaths. Naloxone distribution programs have reversed >50,000 overdoses since 1996. Narcan approved OTC in 2023.',
    pathophysiology:
      'Opioid overdose: mu-receptor activation in brainstem respiratory centers (pre-Bötzinger complex) depresses respiratory drive. Progressive hypoventilation leads to hypoxia, hypercapnia, respiratory acidosis, and death. Naloxone: competitive antagonist with higher affinity than most opioids; displaces opioids from receptors within 1-3 minutes.',
    screening:
      'Recognize opioid overdose: unresponsiveness, slow/absent breathing (<12/min), pinpoint pupils (triad). Agonal breathing, cyanosis, gurgling. Scene clues: drug paraphernalia, pill bottles. Note: fentanyl overdose may not show classic miosis in all cases.',
    clinicalPresentation:
      'Classic triad: CNS depression (unresponsive), respiratory depression (slow/absent breathing), miosis (pinpoint pupils). Additional: hypotension, bradycardia, hypothermia, pulmonary edema (noncardiogenic). Fentanyl: may present with chest wall rigidity ("wooden chest syndrome").',
    management:
      'ABCs: rescue breathing is critical. Naloxone 0.4-2mg IV/IM/SC or 4mg intranasal. Repeat every 2-3 minutes. Titrate to respiratory effort (not full consciousness — avoid precipitating severe withdrawal). Observe 2-4 hours minimum (fentanyl/methadone may require prolonged monitoring or naloxone infusion). Call emergency services.',
    pharmacotherapy:
      'Naloxone (Narcan): 4mg intranasal spray (OTC), 0.4mg/mL injectable. Onset: 1-3 min IV, 3-5 min IM/IN. Duration: 30-90 min (shorter than most opioids — re-dosing often needed). Higher doses may be needed for fentanyl/carfentanil. Naloxone infusion: 2/3 of effective bolus dose per hour. Side effects: precipitated withdrawal (not life-threatening).',
    keyPearls: [
      'Naloxone duration (30-90 min) is shorter than most opioids — observe for re-sedation',
      'Titrate to breathing, not consciousness — full reversal causes severe withdrawal',
      'Fentanyl overdoses may require higher/repeated naloxone doses',
      'Narcan nasal spray approved OTC 2023 — should be widely available',
      'Prescribe/distribute naloxone to all patients on opioids and their families',
      'Rescue breathing is the most critical intervention — naloxone is an adjunct',
    ],
    references: [
      'Boyer EW. Management of opioid analgesic overdose. NEJM. 2012;367:146-155',
      'FDA Narcan OTC approval, 2023',
      'Wheeler E et al. Opioid overdose prevention programs providing naloxone. MMWR. 2015;64(23):631-635',
    ],
  },
  {
    id: 'opioid-withdrawal',
    name: 'Opioid Withdrawal Syndrome',
    category: 'withdrawal',
    description:
      'Intensely uncomfortable but not life-threatening syndrome occurring upon cessation of opioids. Symptoms resemble severe flu. Managed with MOUD initiation (preferred) or symptomatic treatment.',
    epidemiology:
      'Occurs in virtually all physically dependent individuals upon cessation. Short-acting opioids: onset 8-24h, peak 36-72h, duration 5-7 days. Long-acting (methadone): onset 36-72h, peak 4-6 days, duration 14+ days. Fentanyl withdrawal may have accelerated/atypical timeline.',
    pathophysiology:
      'Chronic opioid use suppresses locus coeruleus (LC) noradrenergic activity via mu-receptor-mediated cAMP inhibition. Upon cessation, rebound LC hyperactivity produces noradrenergic storm: autonomic symptoms. Loss of mu-receptor-mediated GI slowing produces diarrhea/cramping.',
    screening:
      'COWS (Clinical Opiate Withdrawal Scale): 11 items, max score 48. Mild (5-12), moderate (13-24), moderate-severe (25-36), severe (>36). SOWS (Subjective Opiate Withdrawal Scale): patient self-report. Timing depends on last opioid used and half-life.',
    clinicalPresentation:
      'Early: anxiety, restlessness, yawning, lacrimation, rhinorrhea, diaphoresis, piloerection ("gooseflesh/cold turkey"). Late: nausea, vomiting, diarrhea, abdominal cramping, myalgias, arthralgias, insomnia, mydriasis. NOT life-threatening (unlike alcohol/benzodiazepine withdrawal) but extremely uncomfortable.',
    management:
      'PREFERRED: Initiate MOUD (buprenorphine or methadone) — treats withdrawal AND transitions to maintenance. Symptom-based if MOUD refused: clonidine 0.1-0.3mg q6-8h (autonomic symptoms), loperamide (diarrhea), ondansetron (nausea), NSAIDs (pain), trazodone/hydroxyzine (insomnia). Avoid "detox only" without MOUD bridge — high relapse/overdose risk.',
    pharmacotherapy:
      'Buprenorphine induction (preferred): start when COWS >=8-12. Clonidine 0.1-0.3mg TID (alpha-2 agonist, reduces noradrenergic hyperactivity). Lofexidine (Lucemyra): FDA-approved non-opioid for withdrawal. Symptomatic: dicyclomine, ondansetron, loperamide, ibuprofen, methocarbamol, trazodone.',
    keyPearls: [
      'Opioid withdrawal is profoundly uncomfortable but NOT life-threatening (unlike alcohol/benzo withdrawal)',
      'MOUD initiation during withdrawal is the standard of care — not "detox and discharge"',
      '"Detox only" without MOUD transition has very high relapse and overdose rates',
      'Fentanyl withdrawal may start earlier and have atypical features (precipitated withdrawal risk with buprenorphine)',
      'Lofexidine (Lucemyra) is the only FDA-approved non-opioid for opioid withdrawal symptoms',
    ],
    references: [
      'Wesson DR, Ling W. The Clinical Opiate Withdrawal Scale (COWS). J Psychoactive Drugs. 2003;35(2):253-259',
      'Gowing L et al. Alpha2-adrenergic agonists for the management of opioid withdrawal. Cochrane Database Syst Rev. 2016',
    ],
  },
  // ── STIMULANT ──────────────────────────────────────────────────
  {
    id: 'cocaine-use-disorder',
    name: 'Cocaine Use Disorder',
    category: 'stimulant',
    description:
      'Stimulant use disorder involving cocaine (powder or crack). Characterized by intense euphoria, rapid development of tolerance and binge patterns, and severe psychological dependence. No FDA-approved pharmacotherapy.',
    epidemiology:
      '~1.4 million Americans with cocaine use disorder. Crack cocaine associated with higher addiction potential. Rising deaths from cocaine combined with fentanyl ("speedball" with heroin or fentanyl-laced cocaine). Higher prevalence in males, ages 18-25.',
    pathophysiology:
      'Blocks dopamine transporter (DAT), preventing dopamine reuptake in nucleus accumbens. Also blocks serotonin and norepinephrine reuptake. Intense but brief euphoria drives binge pattern. Chronic use: dopamine depletion, receptor down-regulation, prefrontal cortex hypofunction. Sensitization to psychomotor/paranoid effects.',
    screening:
      'Urine drug screen: benzoylecgonine (metabolite) detectable 2-4 days (longer with heavy use). History of binge use pattern, financial problems, nasal symptoms (insufflation). Screen for concurrent alcohol and opioid use. Cardiac screening if chest pain.',
    clinicalPresentation:
      'Intoxication: euphoria, increased energy, grandiosity, tachycardia, hypertension, mydriasis, diaphoresis, psychomotor agitation. Severe: chest pain (coronary vasospasm), stroke, seizures, hyperthermia, aortic dissection, rhabdomyolysis. Withdrawal: "crash" — fatigue, hypersomnia, dysphoria, increased appetite, psychomotor retardation, intense craving.',
    management:
      'No FDA-approved medication. Behavioral therapies are mainstay: CBT, contingency management (strongest evidence — voucher-based reinforcement), community reinforcement approach (CRA). Treat comorbid conditions (depression, ADHD). Harm reduction for injection users. Topiramate, disulfiram, stimulants (for ADHD comorbidity) studied with mixed results.',
    pharmacotherapy:
      'No FDA-approved pharmacotherapy. Investigated agents: topiramate (some positive trials), disulfiram (mixed results), modafinil (modest benefit), N-acetylcysteine (glutamate modulation), dextroamphetamine (substitution approach, limited data). Contingency management has strongest evidence of any treatment. Treat cocaine-related chest pain with benzodiazepines, NOT beta-blockers.',
    keyPearls: [
      'Contingency management has the strongest evidence for stimulant use disorders',
      'No FDA-approved pharmacotherapy — behavioral treatments are primary',
      'Cocaine + alcohol produces cocaethylene (longer-acting, more cardiotoxic)',
      'Cocaine chest pain: benzodiazepines and nitrates — avoid beta-blockers (unopposed alpha-stimulation)',
      'Rising fentanyl contamination of cocaine supply — naloxone should be available',
      'Crack cocaine has faster onset and higher addiction potential than powder cocaine',
    ],
    references: [
      'Kampman KM. The treatment of cocaine use disorder. Sci Adv. 2019;5(10):eaax1532',
      'De Crescenzo F et al. Pharmacological interventions for cocaine use disorder. Cochrane Database Syst Rev. 2018',
    ],
  },
  {
    id: 'methamphetamine-use-disorder',
    name: 'Methamphetamine Use Disorder',
    category: 'stimulant',
    description:
      'Stimulant use disorder involving methamphetamine. Highly addictive with neurotoxic effects. Rising prevalence and increasing involvement in overdose deaths. No FDA-approved pharmacotherapy.',
    epidemiology:
      '~1.6 million Americans report past-year methamphetamine use. Methamphetamine-involved overdose deaths have quadrupled since 2015 (often combined with fentanyl). Geographic spread from rural West/Midwest to nationwide. Increasing use in MSM population.',
    pathophysiology:
      'Releases stored dopamine from vesicles (reverses DAT, VMAT2), blocks reuptake, inhibits MAO. More potent and longer-lasting than cocaine. Neurotoxic: damages dopaminergic and serotonergic neurons, microglial activation, blood-brain barrier disruption. Long half-life (10-12h) vs cocaine (1h).',
    screening:
      'Urine drug screen: amphetamine-positive (1-3 days, up to 7 days with heavy use). History: dental deterioration ("meth mouth"), skin picking (formication), weight loss, insomnia. Psychiatric screening: meth-induced psychosis common. Screen for STIs (high-risk sexual behavior).',
    clinicalPresentation:
      'Intoxication: euphoria, increased energy/libido, decreased appetite, tachycardia, hypertension, hyperthermia, bruxism, psychomotor agitation. Severe: psychosis (paranoia, hallucinations — can persist weeks/months), seizures, rhabdomyolysis, intracranial hemorrhage, cardiomyopathy. Withdrawal: profound fatigue, hypersomnia, increased appetite, dysphoria, anhedonia (lasts weeks to months).',
    management:
      'Contingency management (strongest evidence). MIEDAR protocol (motivational incentives). CBT, Matrix Model. No FDA-approved medications. Mirtazapine (some evidence for reduced use), bupropion (mixed), naltrexone + bupropion combination (promising ADAPT-2 trial results). Manage psychosis with antipsychotics (resolves over days to weeks). Extended withdrawal/anhedonia may need long-term support.',
    pharmacotherapy:
      'No FDA-approved pharmacotherapy. Promising: injectable naltrexone + bupropion (ADAPT-2 trial showed significant reduction). Mirtazapine 30mg/day (some evidence). Topiramate, methylphenidate (if comorbid ADHD). Meth-induced psychosis: second-generation antipsychotics (olanzapine, risperidone). Avoid haloperidol if possible (dopaminergic neurotoxicity concerns).',
    keyPearls: [
      'Methamphetamine is directly neurotoxic (unlike cocaine) — dopaminergic damage can be long-lasting',
      'Meth-induced psychosis can persist for weeks to months after cessation',
      'ADAPT-2 trial: naltrexone + bupropion showed promise — potential first pharmacotherapy',
      'Contingency management is the most effective behavioral treatment',
      '"Meth mouth" (severe dental decay) is multifactorial: xerostomia, bruxism, poor hygiene, high-sugar diet',
      'Rising combination with fentanyl ("goofball") increases overdose risk',
    ],
    references: [
      'Trivedi MH et al. (ADAPT-2 Trial). NEJM. 2021;384(2):140-153',
      'Courtney KE, Ray LA. Methamphetamine: an update on epidemiology, pharmacology, and treatment. Drug Alcohol Depend. 2014;143:11-21',
    ],
  },
  // ── SEDATIVE ───────────────────────────────────────────────────
  {
    id: 'benzodiazepine-withdrawal',
    name: 'Benzodiazepine Withdrawal',
    category: 'sedative',
    description:
      'Potentially life-threatening withdrawal syndrome from benzodiazepine dependence. Similar mechanism to alcohol withdrawal (GABAergic). Requires slow taper; abrupt cessation can cause seizures and death.',
    epidemiology:
      'Benzodiazepines prescribed to ~30 million Americans. Physical dependence can develop in as few as 2-4 weeks of daily use. Withdrawal severity correlates with dose, duration, and potency. Short-acting agents (alprazolam) associated with more severe withdrawal.',
    pathophysiology:
      'Chronic benzodiazepine use causes GABA-A receptor down-regulation and glutamatergic up-regulation (parallels alcohol). Abrupt cessation unmasks excitatory state. Short-acting/high-potency agents (alprazolam, lorazepam) have more abrupt onset of withdrawal. Cross-tolerance with alcohol and barbiturates.',
    screening:
      'Clinical history of benzodiazepine use (prescribed or illicit). Duration, dose, type (short vs. long-acting). CIWA-B (Clinical Institute Withdrawal Assessment for Benzodiazepines). History of prior withdrawal seizures. Concurrent alcohol use (additive risk). UDS for benzodiazepine confirmation.',
    clinicalPresentation:
      'Onset depends on half-life (short-acting: 1-2 days; long-acting: 2-7 days). Symptoms: anxiety (rebound), insomnia, tremor, diaphoresis, tachycardia, hypertension, nausea, perceptual disturbances. Severe: seizures (generalized tonic-clonic), psychosis, delirium. Protracted withdrawal: anxiety, insomnia, cognitive difficulties lasting weeks to months.',
    management:
      'Gradual taper is standard of care (NEVER abrupt discontinuation). Convert to equivalent dose of long-acting benzodiazepine (diazepam or chlordiazepoxide). Taper 10-25% every 1-2 weeks. Slower taper at lower doses. Adjuncts: gabapentin/pregabalin, carbamazepine, propranolol (autonomic symptoms). Inpatient if high-dose, concurrent alcohol, or prior seizures.',
    pharmacotherapy:
      'Diazepam taper (long-acting, smooth decline). Chlordiazepoxide taper (alternative). Phenobarbital taper or substitution (some protocols). Adjuncts: gabapentin 300-600mg TID, carbamazepine 200mg BID-TID, valproate. Flumazenil (paradoxically studied for protracted withdrawal at micro-doses). Avoid abrupt cessation of any benzodiazepine at doses >2-4 weeks.',
    keyPearls: [
      'Benzodiazepine withdrawal can be fatal (seizures) — never stop abruptly',
      'Convert short-acting to long-acting (diazepam) for smoother taper',
      'Taper 10-25% every 1-2 weeks; slower at lower doses (last 25% is hardest)',
      'Protracted withdrawal (anxiety, insomnia, cognitive issues) can last months',
      'Cross-tolerance with alcohol — assess for concurrent alcohol use',
      'Alprazolam (Xanax) withdrawal is particularly difficult due to short half-life and high potency',
    ],
    references: [
      'Ashton CH. Benzodiazepines: how they work and how to withdraw (The Ashton Manual). 2002',
      'Brett J, Murnion B. Management of benzodiazepine misuse and dependence. Aust Prescr. 2015;38(5):152-155',
    ],
  },
  {
    id: 'sedative-use-disorder',
    name: 'Sedative, Hypnotic, or Anxiolytic Use Disorder',
    category: 'sedative',
    description:
      'DSM-5 diagnosis encompassing problematic use of benzodiazepines, Z-drugs (zolpidem, zaleplon), barbiturates, and other sedative-hypnotics. Significant morbidity and mortality from overdose and withdrawal.',
    epidemiology:
      'Benzodiazepines involved in ~16% of overdose deaths (usually combined with opioids). Prescriptions have increased significantly since 2000s. Elderly at high risk for falls, cognitive impairment. Z-drug misuse rising. Barbiturate use disorder now rare.',
    pathophysiology:
      'All enhance GABAergic neurotransmission. Benzodiazepines: allosteric modulators at GABA-A (increase frequency of Cl- channel opening). Barbiturates: increase duration of Cl- channel opening (higher overdose risk — no ceiling effect). Z-drugs: selective GABA-A alpha-1 subunit agonists.',
    screening:
      'Prescription monitoring (PDMP). History of dose escalation, multiple prescribers, early refills. UDS (note: some benzodiazepines not detected on standard immunoassay — e.g., clonazepam, lorazepam may require specific testing). Assess concurrent opioid and alcohol use.',
    clinicalPresentation:
      'Intoxication: sedation, slurred speech, ataxia, impaired coordination, cognitive impairment. Similar to alcohol intoxication. Overdose: respiratory depression (especially combined with opioids). Behavioral signs: dose escalation, running out early, visiting multiple providers.',
    management:
      'Stabilize and taper (see benzodiazepine withdrawal entry). Long-term: address underlying anxiety/insomnia with non-benzodiazepine approaches (CBT-I for insomnia, SSRIs/SNRIs for anxiety). Avoid benzodiazepine prescribing in patients on opioids. Flumazenil for acute overdose (risk of seizures in dependent patients).',
    pharmacotherapy:
      'Taper protocol (see benzodiazepine withdrawal). Alternative anxiolytics: buspirone, hydroxyzine, gabapentin. Alternative sleep agents: trazodone, melatonin, doxepin, suvorexant. CBT-I is first-line for chronic insomnia. Flumazenil 0.2mg IV for acute benzodiazepine overdose (use cautiously in dependent patients — seizure risk).',
    keyPearls: [
      'Benzodiazepine + opioid combination is the most dangerous drug interaction in overdose',
      'Flumazenil in benzodiazepine-dependent patients can precipitate seizures — use cautiously',
      'CBT-I is first-line for chronic insomnia (not benzodiazepines or Z-drugs)',
      'Elderly are particularly vulnerable to sedative side effects (falls, cognitive decline, delirium)',
      'Barbiturate overdose has no ceiling effect and is more lethal than benzodiazepine overdose',
    ],
    references: [
      'Lader M. Benzodiazepine harm: how can it be reduced? Br J Clin Pharmacol. 2014;77(2):295-301',
      'Sun EC et al. Association between concurrent use of prescription opioids and benzodiazepines and overdose. BMJ. 2017;356:j760',
    ],
  },
  // ── CANNABIS ───────────────────────────────────────────────────
  {
    id: 'cannabis-use-disorder',
    name: 'Cannabis Use Disorder',
    category: 'cannabis',
    description:
      'Most commonly used illicit substance worldwide. Increasing potency (THC content) has amplified addiction risk. DSM-5 recognizes cannabis use disorder and cannabis withdrawal syndrome.',
    epidemiology:
      '~49 million past-year users in US. ~16 million meet criteria for cannabis use disorder. Legalization has increased adult use and potency. Concentrates can exceed 90% THC (vs. ~4% in 1990s). Adolescent onset associated with higher addiction and psychiatric risk.',
    pathophysiology:
      'THC (delta-9-tetrahydrocannabinol) is a partial agonist at CB1 receptors (dense in hippocampus, prefrontal cortex, basal ganglia, cerebellum). Modulates dopamine release in mesolimbic pathway. Chronic use: CB1 receptor down-regulation and desensitization. Adolescent use may impair neurodevelopment (prefrontal cortex maturation).',
    screening:
      'CUDIT-R (Cannabis Use Disorders Identification Test-Revised): 8 items, score >=8 suggestive. Screen for frequency, quantity, mode of use (smoking, vaping, edibles, concentrates). Ask about high-potency products. Screen for comorbid mental health conditions. UDS: THC-COOH detectable 3-30+ days depending on use pattern.',
    clinicalPresentation:
      'Intoxication: euphoria, relaxation, altered time perception, increased appetite, conjunctival injection, dry mouth, tachycardia. Adverse effects: anxiety/panic, paranoia, psychosis (dose-dependent). Cannabis Hyperemesis Syndrome (CHS): cyclic vomiting relieved by hot showers. Amotivational syndrome (controversial). Withdrawal recognized in DSM-5.',
    management:
      'No FDA-approved pharmacotherapy. Behavioral: CBT, motivational enhancement therapy (MET), contingency management. Brief interventions for mild cases. Address co-occurring psychiatric conditions. Cannabis withdrawal management: supportive care. N-acetylcysteine (NAC) showed promise in adolescents. Gabapentin studied with some benefit.',
    pharmacotherapy:
      'No FDA-approved medications. Investigated: N-acetylcysteine (NAC) 1200mg BID (positive in adolescents, negative in adults), gabapentin 1200mg/day (reduced use and withdrawal), dronabinol (agonist substitution — mixed results), CBD (preliminary data). Cannabis withdrawal: supportive — sleep aids, anxiolytics short-term if needed. CHS: capsaicin cream, ondansetron, haloperidol.',
    keyPearls: [
      'Cannabis potency has increased dramatically — modern products are not the same as decades ago',
      'Cannabis withdrawal is real and recognized in DSM-5: irritability, insomnia, decreased appetite, anxiety',
      'Cannabis Hyperemesis Syndrome (CHS): cyclic vomiting + compulsive hot bathing — cessation is curative',
      'Adolescent cannabis use is associated with increased psychosis risk, especially with high-potency products',
      'THC may remain detectable in urine for 30+ days in chronic heavy users',
      'No FDA-approved pharmacotherapy — behavioral interventions are mainstay',
    ],
    references: [
      'Connor JP et al. Cannabis use and cannabis use disorder. Nat Rev Dis Primers. 2021;7:16',
      'Gray KM et al. A double-blind randomized controlled trial of N-acetylcysteine in cannabis-dependent adolescents. Am J Psychiatry. 2012;169(8):805-812',
    ],
  },
  {
    id: 'synthetic-cannabinoids',
    name: 'Synthetic Cannabinoids (K2/Spice)',
    category: 'cannabis',
    description:
      'Laboratory-produced compounds that bind CB1 receptors with much higher affinity and efficacy than THC. Sold as "herbal incense" or "potpourri." Highly variable potency with unpredictable and potentially life-threatening effects.',
    epidemiology:
      'Prevalence peaked 2010-2015, remains significant. Mass casualty events ("zombie outbreaks") from contaminated batches. Disproportionately affects homeless populations. Not reliably detected on standard UDS. Some batches contaminated with brodifacoum (rat poison) causing coagulopathy.',
    pathophysiology:
      'Full agonists at CB1 receptors (vs. THC which is a partial agonist). 2-100x higher binding affinity. No CBD counterbalancing effect. Unpredictable pharmacology as new analogs constantly created. Some compounds also act at non-cannabinoid receptors.',
    screening:
      'Standard UDS does NOT detect synthetic cannabinoids. Specialized immunoassays or mass spectrometry required. Clinical suspicion based on presentation. History: "spice," "K2," "herbal incense," purchased from gas stations/head shops/online.',
    clinicalPresentation:
      'Agitation, psychosis, tachycardia, hypertension, seizures, acute kidney injury, rhabdomyolysis, myocardial ischemia, status epilepticus, coma. More severe than natural cannabis. Brodifacoum contamination: unexplained bleeding/coagulopathy, elevated INR.',
    management:
      'Supportive care. Benzodiazepines for agitation/seizures. IV fluids for rhabdomyolysis/AKI. Monitor renal function, CK, coagulation. Brodifacoum contamination: high-dose vitamin K1 (up to 10mg/kg/day) for months. Antipsychotics for persistent psychosis. Behavioral treatments for use disorder.',
    pharmacotherapy:
      'No specific antidote. Symptomatic: benzodiazepines (agitation, seizures), IV fluids, electrolyte repletion. Brodifacoum coagulopathy: vitamin K1 25mg PO BID-QID for 6-12 months (brodifacoum half-life ~16-36 days). Standard SUD treatment approaches for use disorder.',
    keyPearls: [
      'Synthetic cannabinoids are full CB1 agonists — much more dangerous than natural cannabis',
      'Standard urine drug screens do NOT detect synthetic cannabinoids',
      'Brodifacoum-contaminated batches cause life-threatening coagulopathy requiring months of vitamin K',
      'Presentations can mimic excited delirium, serotonin syndrome, or anticholinergic toxicity',
      'New analogs are constantly synthesized to evade regulation',
    ],
    references: [
      'Trecki J et al. Synthetic cannabinoid-related illnesses and deaths. NEJM. 2015;373(2):103-107',
      'Kelkar AH et al. Brodifacoum intoxication from synthetic cannabinoids. NEJM. 2018;379(13):1275-1277',
    ],
  },
  // ── TOBACCO ────────────────────────────────────────────────────
  {
    id: 'tobacco-use-disorder',
    name: 'Tobacco Use Disorder',
    category: 'tobacco',
    description:
      'Most common substance use disorder and leading preventable cause of death. Nicotine is the primary addictive component. Multiple evidence-based cessation treatments available. Every clinical encounter is an opportunity to intervene.',
    epidemiology:
      '~30 million US adult smokers (~12.5% prevalence, down from ~42% in 1965). Tobacco kills ~480,000 Americans/year (>1,300/day). Disparities: higher rates in low SES, mental illness, LGBTQ+, rural, American Indian/Alaska Native populations. E-cigarette/vaping use rising especially in youth.',
    pathophysiology:
      'Nicotine binds alpha4-beta2 nicotinic acetylcholine receptors (nAChRs) in VTA, stimulating dopamine release in nucleus accumbens. Fastest drug delivery to brain (~10 seconds with inhalation). Rapid tolerance to each cigarette but resets overnight. Receptor up-regulation with chronic use.',
    screening:
      '5 As: Ask about tobacco use at every visit, Advise to quit, Assess willingness, Assist with quit attempt, Arrange follow-up. Fagerström Test for Nicotine Dependence (FTND): 6 items, assesses severity. Key question: "How soon after waking do you smoke your first cigarette?" (<30 min = high dependence).',
    clinicalPresentation:
      'Nicotine dependence: craving, irritability, anxiety, difficulty concentrating, increased appetite, insomnia within hours of last cigarette. Peak withdrawal at 2-3 days, lasts 2-4 weeks. Weight gain averages 4-5 kg. Health consequences: cancer (lung, head/neck, bladder, etc.), COPD, cardiovascular disease, stroke.',
    management:
      'Combination of pharmacotherapy + behavioral counseling is most effective (OR 1.8-3.5). Behavioral: individual/group counseling, quitlines (1-800-QUIT-NOW), text programs (SmokefreeTXT), apps. Set quit date. Pharmacotherapy for all willing to quit (see entries). Relapse is common and expected — does not equal failure.',
    pharmacotherapy:
      'First-line: varenicline (most effective), combination NRT (patch + short-acting), bupropion SR. NRT: patch (21mg/14mg/7mg), gum (2mg/4mg), lozenge (2mg/4mg), inhaler, nasal spray. Bupropion SR 150mg BID. Varenicline 0.5mg daily x3 days, 0.5mg BID x4 days, then 1mg BID. Combination therapy (varenicline + NRT or bupropion + NRT) for heavy smokers.',
    keyPearls: [
      'Tobacco is the #1 preventable cause of death — brief interventions are effective',
      'Varenicline is the most effective single agent for smoking cessation',
      'Combination NRT (patch + gum/lozenge) is comparable to varenicline',
      'Time to first cigarette <30 min indicates high nicotine dependence',
      'Always offer pharmacotherapy — it doubles quit rates vs. willpower alone',
      'Average smoker makes 6-11 quit attempts before sustained cessation — relapse is expected',
    ],
    references: [
      'US Public Health Service Clinical Practice Guideline: Treating Tobacco Use and Dependence (2008 update)',
      'Anthenelli RM et al. (EAGLES trial). Lancet. 2016;387(10037):2507-2520',
    ],
  },
  {
    id: 'nicotine-replacement-therapy',
    name: 'Nicotine Replacement Therapy (NRT)',
    category: 'pharmacotherapy',
    description:
      'FDA-approved nicotine delivery systems that reduce withdrawal and craving by replacing nicotine without the harmful combustion products. Five forms available. Combination NRT (patch + short-acting) is most effective approach.',
    epidemiology:
      'NRT approximately doubles quit rates vs. placebo (OR ~1.7). Combination NRT (patch + gum/lozenge) is comparable to varenicline (OR ~2.0-2.7). Widely available OTC (patch, gum, lozenge). Underutilized — most quit attempts are unassisted.',
    pathophysiology:
      'Provides controlled nicotine delivery to attenuate withdrawal symptoms and craving without the ~7,000 chemicals in cigarette smoke. Slower onset than cigarettes (no bolus delivery). Reduces but does not eliminate withdrawal. Patch provides steady-state; short-acting forms provide bolus for breakthrough cravings.',
    screening:
      'Assess nicotine dependence severity (FTND, cigarettes/day, time to first cigarette). Current cardiovascular conditions (caution, but NRT is safer than smoking). Pregnancy (behavioral counseling first, NRT if needed). Dental/TMJ conditions (gum may be problematic). Skin conditions (patch).',
    clinicalPresentation:
      'Side effects by formulation: patch (skin irritation, insomnia, vivid dreams), gum (jaw soreness, hiccups, dyspepsia, if chewed incorrectly), lozenge (hiccups, heartburn, nausea), inhaler (mouth/throat irritation, cough), nasal spray (nasal irritation, sneezing, rhinorrhea).',
    management:
      'Patch: 21mg/day x6 weeks, 14mg x2 weeks, 7mg x2 weeks (start 14mg if <10 cig/day). Add short-acting form for breakthrough: gum (4mg if >25 cig/day, otherwise 2mg) q1-2h, or lozenge (4mg if first cig <30min after waking). Start on quit date. Duration 8-12 weeks, can extend. Combination NRT: patch + gum/lozenge.',
    pharmacotherapy:
      'Patch: 21/14/7mg stepped down over 8-10 weeks. Gum: 2mg or 4mg, "chew and park" technique, max 24 pieces/day. Lozenge: 2mg or 4mg, dissolve (no chew), max 20/day. Inhaler: 6-16 cartridges/day. Nasal spray: 1-2 sprays/nostril q1h. All OTC except inhaler and spray (prescription). Safe in cardiovascular disease (safer than continued smoking).',
    keyPearls: [
      'Combination NRT (patch + short-acting form) is the most effective NRT strategy',
      '"Chew and park" technique for gum — chew briefly until tingling, then park between cheek and gum',
      'NRT is safe in cardiovascular disease — it is always safer than continuing to smoke',
      'Patch can be worn 16h (remove at night to reduce insomnia) or 24h',
      'Pre-quit NRT ("reduce to quit") is a valid alternative to abrupt quit date',
      'Combine with behavioral counseling for best outcomes',
    ],
    references: [
      'Hartmann-Boyce J et al. Nicotine replacement therapy versus control for smoking cessation. Cochrane Database Syst Rev. 2018;5:CD000146',
      'US Preventive Services Task Force. Interventions for tobacco smoking cessation in adults. JAMA. 2021;325(3):265-279',
    ],
  },
  {
    id: 'varenicline',
    name: 'Varenicline (Chantix)',
    category: 'pharmacotherapy',
    description:
      'Partial agonist at alpha4-beta2 nicotinic acetylcholine receptors. Most effective single agent for smoking cessation. Reduces craving (partial agonism) and blocks smoking reward (competitive antagonism).',
    epidemiology:
      'Most effective single medication for smoking cessation (OR ~2.2-3.0 vs. placebo). EAGLES trial confirmed no increased neuropsychiatric risk vs. NRT or placebo. Generic available. Previously recalled (nitrosamine contamination) — returned to market.',
    pathophysiology:
      'Dual mechanism: (1) partial agonist — stimulates nAChR at ~40-60% of nicotine effect, reducing withdrawal and craving; (2) competitive antagonist — blocks nicotine binding, reducing satisfaction if patient smokes. Selective for alpha4-beta2 subtype (primary addiction-mediating receptor).',
    screening:
      'Assess psychiatric history (monitor for mood changes, though EAGLES trial was reassuring). Renal function (dose adjust if CrCl <30). Drug interactions: minimal (not CYP-metabolized, renally cleared). Can be used with NRT (combination may improve rates). No hepatotoxicity concern.',
    clinicalPresentation:
      'Common side effects: nausea (most common — 30%, usually transient), insomnia, vivid/abnormal dreams, headache, flatulence. Rare: mood changes, suicidal ideation (black box warning removed after EAGLES trial, but monitor). Nausea managed by taking with food, starting at lower dose.',
    management:
      'Start 1 week before quit date (or set quit date within days 8-35). Week 1: 0.5mg daily x3 days, then 0.5mg BID x4 days. Weeks 2-12: 1mg BID. Can extend to 24 weeks for relapse prevention. Take with food and full glass of water to reduce nausea. Dose reduce if CrCl <30: 0.5mg BID max.',
    pharmacotherapy:
      'Varenicline 1mg PO BID (after titration week). 12-week standard course, 24 weeks for extended therapy. Nausea mitigation: take with food, evening dose with dinner. No clinically significant drug interactions. Can combine with NRT patch for enhanced efficacy. Renal dosing: 0.5mg BID if CrCl <30. Not recommended in pregnancy.',
    keyPearls: [
      'Most effective single agent for smoking cessation — should be first-line',
      'EAGLES trial: no increased neuropsychiatric risk vs. NRT/placebo in patients with and without psychiatric illness',
      'Nausea is the most common side effect — take with food and water, usually resolves in 1-2 weeks',
      'Start 1 week before quit date to allow steady-state levels',
      'Can be combined with NRT for additional benefit in highly dependent smokers',
      'Black box neuropsychiatric warning was removed by FDA in 2016 based on EAGLES data',
    ],
    references: [
      'Anthenelli RM et al. (EAGLES trial). Lancet. 2016;387(10037):2507-2520',
      'Cahill K et al. Pharmacological interventions for smoking cessation. Cochrane Database Syst Rev. 2013;(5):CD006103',
    ],
  },
  {
    id: 'bupropion-cessation',
    name: 'Bupropion for Smoking Cessation',
    category: 'pharmacotherapy',
    description:
      'Atypical antidepressant (norepinephrine-dopamine reuptake inhibitor) FDA-approved for smoking cessation as Zyban. Also treats comorbid depression. Non-nicotine, non-controlled pharmacotherapy option.',
    epidemiology:
      'Approximately doubles quit rates vs. placebo (OR ~1.6-1.8). Less effective than varenicline or combination NRT as monotherapy. Useful when concurrent depression is present. Can be combined with NRT for enhanced efficacy.',
    pathophysiology:
      'Inhibits norepinephrine and dopamine reuptake (addresses dopamine deficit during nicotine withdrawal). Non-competitive antagonist at nAChRs (may reduce smoking satisfaction). Antidepressant effect addresses mood symptoms of withdrawal. No nicotinic agonist activity.',
    screening:
      'Seizure history (CONTRAINDICATED — lowers seizure threshold). Eating disorders (bulimia/anorexia — seizure risk). Concurrent MAO inhibitors. Assess for bipolar disorder (can precipitate mania). Hepatic impairment (reduce dose). Concurrent medications that lower seizure threshold.',
    clinicalPresentation:
      'Side effects: insomnia (take second dose by afternoon), dry mouth, headache, nausea, agitation. Rare but serious: seizures (~0.1% at 300mg), hypertension. Advantage: no weight gain (may even reduce weight gain during cessation). Can improve mood during quit attempt.',
    management:
      'Start 1-2 weeks before quit date. Bupropion SR 150mg daily x3 days, then 150mg BID. Duration 7-12 weeks, can extend to 6 months. Take second dose in early afternoon (not at bedtime — insomnia). Can combine with NRT patch. Monitor blood pressure. Contraindicated with MAOIs (14-day washout).',
    pharmacotherapy:
      'Bupropion SR 150mg PO BID (after 3-day titration). Zyban (cessation-specific) or Wellbutrin SR/XL (same drug). Maximum 300mg/day. Hepatic impairment: 150mg daily. Renal impairment: use caution, reduce dose. Drug interactions: CYP2D6 inhibitor. Do not use with MAOIs. Seizure risk at doses >450mg/day.',
    keyPearls: [
      'Seizure risk is the major safety concern — contraindicated in seizure disorders and eating disorders',
      'Helps with weight gain prevention during cessation (unlike NRT/varenicline)',
      'Dual benefit for patients with comorbid depression',
      'Take second dose by early afternoon to minimize insomnia',
      'Can be combined with NRT for enhanced efficacy',
      'Zyban and Wellbutrin are the same drug — do not prescribe both simultaneously',
    ],
    references: [
      'Hughes JR et al. Antidepressants for smoking cessation. Cochrane Database Syst Rev. 2014;(1):CD000031',
      'Aubin HJ et al. Varenicline versus transdermal nicotine patch for smoking cessation. Thorax. 2008;63(8):717-724',
    ],
  },
  // ── BEHAVIORAL ADDICTIONS ──────────────────────────────────────
  {
    id: 'gambling-disorder',
    name: 'Gambling Disorder',
    category: 'behavioral-addiction',
    description:
      'Only behavioral addiction in DSM-5 (reclassified from impulse control disorders). Persistent and recurrent problematic gambling causing clinically significant impairment. Shares neurobiological features with substance use disorders.',
    epidemiology:
      'Lifetime prevalence ~0.4-1.6%. Higher in males. Strong association with comorbid substance use disorders, mood disorders, and ADHD. Online gambling has increased access and prevalence. Sports betting legalization expanding problem gambling.',
    pathophysiology:
      'Dysregulation of mesolimbic dopamine reward pathway similar to SUDs. Altered prefrontal cortex function (impaired decision-making, impulsivity). Near-miss effect activates reward circuits similar to actual wins. Genetic overlap with substance use disorders.',
    screening:
      'SOGS (South Oaks Gambling Screen): 20 items. PGSI (Problem Gambling Severity Index): 9 items. Brief Biosocial Gambling Screen (BBGS): 3 items for primary care. Ask about financial difficulties, borrowing, legal problems related to gambling.',
    clinicalPresentation:
      'Preoccupation with gambling, increasing amounts to achieve excitement (tolerance), repeated unsuccessful efforts to stop, restlessness/irritability when cutting down (withdrawal-like), gambling as escape, chasing losses, lying about gambling, jeopardized relationships/job, relying on others for money (bailout).',
    management:
      'CBT (strongest evidence). Gamblers Anonymous (12-step). Financial counseling and restrictions (self-exclusion programs, credit counseling). Treat comorbid conditions. No FDA-approved medications but several studied. Address suicide risk (high in gambling disorder).',
    pharmacotherapy:
      'No FDA-approved medications. Naltrexone 50-150mg/day (best evidence — reduces urges). N-acetylcysteine 1200-1800mg/day (glutamate modulation). Lithium/valproate (if bipolar comorbidity). SSRIs (mixed results — may help comorbid depression/anxiety). Nalmefene (approved in Europe). Opioid antagonists most promising.',
    keyPearls: [
      'Only behavioral addiction included in DSM-5 (classified with substance-related disorders)',
      'Suicide risk is significantly elevated — always screen',
      'Naltrexone has the best pharmacotherapy evidence (similar mechanism as in AUD)',
      'Near-miss cognitive distortion is a key maintaining factor',
      'Financial devastation is often severe — include financial counseling in treatment',
    ],
    references: [
      'Potenza MN. Gambling disorder. NEJM. 2017;376(4):352-363',
      'Grant JE et al. Gambling disorder. Lancet Psychiatry. 2016;3(1):81-90',
    ],
  },
  {
    id: 'internet-gaming-disorder',
    name: 'Internet Gaming Disorder',
    category: 'behavioral-addiction',
    description:
      'Proposed diagnosis in DSM-5 Section III (conditions for further study). Also recognized by ICD-11 as "Gaming Disorder." Persistent and recurrent use of internet games leading to clinically significant impairment.',
    epidemiology:
      'Estimated prevalence 1-9% (varies by country, higher in East Asian countries). Predominantly adolescents and young adult males. Increasing recognition globally. WHO included Gaming Disorder in ICD-11 (2019).',
    pathophysiology:
      'Shares neurobiological features with substance addictions: mesolimbic dopamine dysregulation, prefrontal cortex hypofunction, cue reactivity. Intermittent reinforcement schedules in game design (loot boxes, variable rewards) mirror slot machine mechanics. Reduced gray matter in prefrontal cortex and striatum on neuroimaging.',
    screening:
      'Internet Gaming Disorder Scale (IGDS9-SF): 9 items based on DSM-5 criteria. AICA-S (Assessment of Internet and Computer Game Addiction Scale). Screen for excessive time gaming (>30h/week), neglect of obligations, withdrawal-like symptoms when unable to play.',
    clinicalPresentation:
      'Preoccupation with gaming, withdrawal symptoms (irritability, anxiety when unable to play), tolerance (increasing time), unsuccessful attempts to control, loss of interest in other activities, continued despite problems, deceiving others about gaming, using gaming to escape, jeopardizing relationships/education/employment.',
    management:
      'CBT (adapted for internet/gaming). Family therapy (especially for adolescents). Motivational interviewing. Digital detox/structured screen time. Treat comorbid ADHD, depression, social anxiety. Address underlying social deficits. No FDA-approved medications. In some Asian countries: residential treatment programs.',
    pharmacotherapy:
      'No FDA-approved medications. Investigated: bupropion (may reduce craving and game play time), escitalopram (if comorbid depression), methylphenidate (if comorbid ADHD reduces gaming time), naltrexone (case reports). Primary treatment is behavioral/psychosocial.',
    keyPearls: [
      'ICD-11 includes Gaming Disorder as a formal diagnosis; DSM-5 lists it as needing further study',
      'Game design mechanics (loot boxes, variable reinforcement) intentionally exploit reward pathways',
      'Screen for comorbid ADHD, depression, and social anxiety — treating these may reduce gaming',
      'Family involvement is crucial, especially for adolescents',
      'Distinguish between heavy gaming and disordered gaming — functional impairment is key',
    ],
    references: [
      'WHO. ICD-11: Gaming Disorder. 2019',
      'Petry NM et al. Internet gaming disorder in the DSM-5. Addiction. 2014;109(9):1399-1406',
    ],
  },
  // ── TREATMENT APPROACHES ───────────────────────────────────────
  {
    id: 'sbirt',
    name: 'SBIRT (Screening, Brief Intervention, and Referral to Treatment)',
    category: 'alcohol',
    description:
      'Evidence-based public health framework for early identification and intervention for substance misuse. Integrates screening into routine healthcare. Applicable across all substances and settings.',
    epidemiology:
      'SBIRT reduces alcohol consumption in hazardous drinkers (NNT ~7-8 for brief intervention). Less robust evidence for drugs other than alcohol. CMS and many insurers reimburse for SBIRT services. Recommended by USPSTF for alcohol screening in adults.',
    pathophysiology:
      'Not directly applicable. Framework addresses the spectrum from risky use to severe SUD, recognizing that most hazardous users are not dependent and can benefit from brief intervention without specialty treatment.',
    screening:
      'Screening: universal validated tools (AUDIT, DAST-10, NIDA Quick Screen, single-item screeners). Brief Intervention: motivational interviewing-based feedback (5-15 minutes). Brief Treatment: 1-5 sessions for moderate-risk. Referral to Treatment: specialty SUD treatment for severe cases. Systematic implementation in primary care, ED, trauma centers.',
    clinicalPresentation:
      'SBIRT is a clinical approach, not a condition. Target populations: all adult patients in healthcare settings, ED presentations, trauma patients (>50% of trauma has substance involvement), prenatal visits, pre-surgical assessments.',
    management:
      'Screening: administer validated tool at every visit. Score interpretation guides next step. Brief Intervention: express concern, provide feedback, assess readiness to change, negotiate goals. Use motivational interviewing techniques (OARS: Open questions, Affirmations, Reflections, Summaries). Referral: warm handoff to treatment when indicated.',
    pharmacotherapy:
      'SBIRT itself is not pharmacotherapy but can identify patients who benefit from medication. Screening results guide pharmacotherapy decisions. Brief intervention can include medication education and initiation (e.g., NRT for smokers, naltrexone for AUD).',
    keyPearls: [
      'SBIRT is most effective for hazardous alcohol use — evidence weaker for other substances',
      'Brief intervention (5-15 minutes) can reduce drinking in risky drinkers — NNT ~7-8',
      'Universal screening is more effective than targeted screening (reduces stigma and bias)',
      'Warm handoff (direct introduction to specialist) improves referral completion rates',
      'SBIRT is reimbursable by CMS and many insurers (CPT codes available)',
      'USPSTF Grade B recommendation for alcohol screening in all adults',
    ],
    references: [
      'SAMHSA SBIRT overview and implementation resources',
      'Babor TF et al. Screening, Brief Intervention, and Referral to Treatment. Substance Abuse. 2017;38(4):382-389',
      'Jonas DE et al. Screening for unhealthy alcohol use. JAMA. 2012;308(19)',
    ],
  },
  {
    id: 'motivational-interviewing',
    name: 'Motivational Interviewing (MI)',
    category: 'behavioral-addiction',
    description:
      'Collaborative, person-centered communication method for strengthening motivation and commitment to change. Developed by Miller and Rollnick. Core technique in addiction treatment and behavioral health. Not confrontational.',
    epidemiology:
      'Over 200 RCTs across substance use, health behaviors, and chronic disease. Moderate but consistent effect sizes (d=0.25-0.57). Effective as standalone brief intervention and as adjunct to other treatments. Can be delivered by trained non-specialists.',
    pathophysiology:
      'Addresses ambivalence about change — a normal psychological phenomenon. Relies on self-determination theory: autonomy, competence, and relatedness drive behavior change. Confrontation increases resistance; empathy reduces it. Change talk (patient arguing for change) predicts behavioral change.',
    screening:
      'Assess readiness to change (Stages of Change model): precontemplation, contemplation, preparation, action, maintenance. Importance ruler (0-10): "How important is it to you to change?" Confidence ruler (0-10): "How confident are you?" Explore ambivalence and discrepancy.',
    clinicalPresentation:
      'MI is a therapeutic approach, not a condition. Applied when: patient is ambivalent about change, resistance to advice-giving is present, behavior change is the goal. Effective across substances, chronic diseases, medication adherence, and health behaviors.',
    management:
      'Spirit of MI: partnership, acceptance, compassion, evocation. Core skills (OARS): Open-ended questions, Affirmations, Reflections (simple and complex), Summaries. Key processes: engaging, focusing, evoking, planning. Avoid the "righting reflex" (urge to fix/advise). Develop discrepancy between current behavior and values/goals. Roll with resistance.',
    pharmacotherapy:
      'MI is not pharmacotherapy but enhances medication adherence and treatment engagement. MI combined with pharmacotherapy improves outcomes in AUD (COMBINE trial), tobacco cessation, and MOUD adherence.',
    keyPearls: [
      'MI is collaborative, not confrontational — "dancing, not wrestling"',
      'OARS skills: Open questions, Affirmations, Reflections, Summaries',
      'Elicit change talk — patient arguments for change predict actual behavior change',
      'Avoid the righting reflex — resist the urge to tell patients what to do',
      'Develop discrepancy: help patients see gap between their values and current behavior',
      'MI is a skill that requires training and practice — not just "being nice"',
    ],
    references: [
      'Miller WR, Rollnick S. Motivational Interviewing: Helping People Change, 3rd ed. Guilford Press, 2013',
      'Lundahl B et al. Motivational interviewing in medical care settings: a systematic review and meta-analysis. Patient Educ Couns. 2013;93(2):157-168',
    ],
  },
  {
    id: 'harm-reduction',
    name: 'Harm Reduction Approaches',
    category: 'behavioral-addiction',
    description:
      'Practical strategies and policies aimed at reducing negative consequences of substance use without requiring abstinence. Meets people "where they are." Includes naloxone distribution, syringe services, supervised consumption sites, and drug checking.',
    epidemiology:
      'Syringe service programs (SSPs) reduce HIV transmission by ~50% and HCV by ~56%. Naloxone distribution programs have reversed tens of thousands of overdoses. Supervised injection facilities (SIFs) in Canada/Europe show zero overdose deaths on-site. Fentanyl test strips reduce overdose risk.',
    pathophysiology:
      'Not directly applicable. Harm reduction recognizes that substance use exists on a spectrum and that reducing harm is a valid goal even when abstinence is not immediately achievable. Rooted in public health principles of pragmatism and non-judgment.',
    screening:
      'Assess individual risk profile: injection drug use (needle sharing, injection site infections), overdose risk factors (recent release from incarceration, reduced tolerance, polysubstance use, using alone), infectious disease exposure (HIV, HCV, HBV). Screen for readiness for any level of change.',
    clinicalPresentation:
      'Harm reduction is a framework, not a clinical condition. Applied in: active substance users not seeking abstinence, patients who have not yet engaged in treatment, community-based outreach, public health programming. Can serve as bridge to treatment.',
    management:
      'Naloxone distribution (Narcan OTC). Syringe service programs (reduce bloodborne infections, provide safe disposal, gateway to treatment). Fentanyl test strips. Drug checking services. Supervised consumption sites. Managed alcohol programs. Safe supply programs. Housing first approaches. Low-barrier MOUD access.',
    pharmacotherapy:
      'MOUD without abstinence requirements (low-barrier buprenorphine). Pre-exposure prophylaxis (PrEP) for HIV prevention. Hepatitis B vaccination. HCV treatment (direct-acting antivirals). Wound care for injection-related infections. NRT for smokers not ready to quit ("reduce to quit").',
    keyPearls: [
      'Harm reduction does NOT enable use — it reduces death and disease',
      'Syringe services are evidence-based public health interventions that reduce HIV/HCV',
      'People who access harm reduction services are 5x more likely to enter treatment',
      'Naloxone distribution saves lives — no evidence of increased drug use',
      'Fentanyl test strips should be widely available given contaminated drug supply',
      'Harm reduction and treatment are complementary, not competing approaches',
    ],
    references: [
      'Harm Reduction International. What is harm reduction? Position statement.',
      'Aspinall EJ et al. Are needle and syringe programmes associated with a reduction in HIV/HCV? Int J Drug Policy. 2014;25(2):141-148',
      'SAMHSA. Harm Reduction framework. 2023',
    ],
  },
  {
    id: 'contingency-management',
    name: 'Contingency Management',
    category: 'behavioral-addiction',
    description:
      'Evidence-based behavioral intervention providing tangible reinforcement (incentives) for verified positive behaviors (e.g., negative drug tests, treatment attendance). Strongest evidence for stimulant use disorders.',
    epidemiology:
      'Largest effect sizes of any SUD behavioral treatment (d=0.42-0.62). Most effective for stimulant use disorders (where no pharmacotherapy exists). California implemented first Medicaid-funded contingency management program (2024). Historically underused due to stigma, cost, and regulatory concerns.',
    pathophysiology:
      'Based on operant conditioning: positive reinforcement increases probability of desired behavior. Substance use disorders involve hijacked reward systems — incentives provide alternative reinforcement. Dopaminergic reward pathway activation from incentives may help normalize disrupted reward processing.',
    screening:
      'Appropriate for all SUD patients, especially stimulant use disorders. Assess ability to provide objective verification of target behavior (UDS, breathalyzer, attendance tracking). Consider patient values and potential motivators.',
    clinicalPresentation:
      'CM is a treatment approach. Target behaviors: drug-free urine samples, treatment session attendance, medication adherence, completion of therapeutic tasks. Incentive types: vouchers for goods/services, prize-based draws ("fishbowl"), cash/gift cards. Escalating reinforcement schedule maximizes effect.',
    management:
      'Define target behavior clearly (negative UDS, attendance). Provide immediate reinforcement upon verification. Escalating schedule: increasing value for consecutive successes, reset upon non-compliance (with rapid re-escalation). Typical prize-based: draw slips from fishbowl — 50% "good job" (no prize), 41.8% small ($1), 8% large ($20), 0.2% jumbo ($100).',
    pharmacotherapy:
      'CM is not pharmacotherapy but is best combined with pharmacotherapy when available. For stimulants (no pharmacotherapy), CM is the primary evidence-based treatment. Can reinforce MOUD adherence and medication compliance in other SUDs.',
    keyPearls: [
      'Strongest evidence base of any behavioral SUD treatment — especially for stimulants',
      'Immediate reinforcement is essential — delayed rewards are less effective',
      'Escalating/reset schedule maintains motivation over time',
      'Historically underused due to "paying people not to use drugs" stigma — reframe as medical treatment',
      'California Medicaid coverage (2024) is a landmark policy change',
      'Most cost-effective SUD intervention when considering outcomes per dollar spent',
    ],
    references: [
      'Petry NM et al. Contingency management in substance abuse treatment. Am J Psychiatry. 2011;168(2):170-179',
      'De Crescenzo F et al. Comparative efficacy and acceptability of psychosocial interventions for stimulant use disorders. JAMA Psychiatry. 2018;75(11):1143-1152',
    ],
  },
  {
    id: 'cbt-addiction',
    name: 'Cognitive Behavioral Therapy for Addiction',
    category: 'behavioral-addiction',
    description:
      'Structured psychotherapy targeting maladaptive thought patterns and behaviors maintaining substance use. Identifies triggers, develops coping skills, and prevents relapse. Applicable across all substances.',
    epidemiology:
      'Moderate effect sizes across SUDs (d=0.25-0.45). Effects are durable and may increase after treatment ends (unlike some other approaches). Evidence base across alcohol, cannabis, cocaine, and polysubstance use. Relapse Prevention (Marlatt model) is a key CBT-derived framework.',
    pathophysiology:
      'Addresses cognitive distortions (permission-giving beliefs, minimization), maladaptive behavioral patterns (environmental cue exposure, social pressure), and skills deficits (stress management, assertiveness). Maps to prefrontal cortex function (executive control over automated substance-seeking behavior).',
    screening:
      'Appropriate for most SUD patients with adequate cognitive function and motivation. Assess cognitive capacity, literacy, and engagement ability. Can be adapted for various populations. Individual or group format.',
    clinicalPresentation:
      'CBT is a treatment modality. Core components: functional analysis of substance use (triggers, thoughts, behaviors, consequences), skills training (coping with cravings, refusing substances, managing negative emotions), cognitive restructuring (challenging permission-giving thoughts), relapse prevention planning.',
    management:
      'Typically 12-16 weekly sessions (individual or group). Structured format with homework assignments. Functional analysis: identify high-risk situations, thoughts, and emotional states preceding use. Develop and practice coping strategies. Cognitive restructuring of substance-related beliefs. Relapse prevention: identify warning signs, develop emergency plan.',
    pharmacotherapy:
      'CBT is not pharmacotherapy but enhances medication outcomes. COMBINE trial: CBT + naltrexone was effective for AUD. CBT combined with MOUD improves OUD outcomes. Combined behavioral + pharmacological approach is gold standard across SUDs.',
    keyPearls: [
      'CBT effects may be durable and increase over time ("sleeper effect")',
      'Functional analysis of substance use is the cornerstone technique',
      'Relapse prevention: identify high-risk situations and develop concrete coping plans',
      'Can be delivered effectively in group format — increases access and affordability',
      'Combine with pharmacotherapy for best outcomes across all SUDs',
      'Homework completion is a strong predictor of treatment outcomes',
    ],
    references: [
      'Carroll KM, Kiluk BD. Cognitive behavioral interventions for alcohol and drug use disorders. Am J Psychiatry. 2017;174(7):611-621',
      'Marlatt GA, Donovan DM. Relapse Prevention, 2nd ed. Guilford Press, 2005',
    ],
  },
  // ── ADDITIONAL PHARMACOTHERAPY ─────────────────────────────────
  {
    id: 'gabapentin-addiction',
    name: 'Gabapentin in Addiction Medicine',
    category: 'pharmacotherapy',
    description:
      'Anticonvulsant with emerging evidence in addiction medicine: alcohol withdrawal (adjunct), AUD treatment, cannabis withdrawal, and neuropathic pain in SUD patients. Off-label use. Increasingly recognized as having its own misuse potential.',
    epidemiology:
      'Gabapentin 1200mg/day reduced heavy drinking days in AUD trial (Mason, 2014). Used as adjunct in alcohol withdrawal protocols. Some benefit for cannabis withdrawal symptoms. However, gabapentin misuse is rising, especially co-used with opioids — now scheduled in several states.',
    pathophysiology:
      'Binds alpha-2-delta subunit of voltage-gated calcium channels (does not directly affect GABA despite the name). Modulates glutamate release. May normalize stress-related GABA and glutamate dysregulation in alcohol dependence. Reduces hyperexcitability in withdrawal states.',
    screening:
      'Assess for gabapentin/pregabalin misuse history. Review PDMP. Gabapentin increasingly co-used with opioids to enhance euphoria. Monitor for signs of misuse (dose escalation, early refills). Not detected on standard UDS.',
    clinicalPresentation:
      'Side effects: sedation, dizziness, peripheral edema, weight gain. In addiction contexts: may improve sleep, anxiety, and craving in AUD. Misuse presentation: sedation, euphoria, dissociation (especially at high doses combined with opioids).',
    management:
      'AUD: gabapentin 300-1200mg/day (titrate). Alcohol withdrawal adjunct: 300-400mg TID. Cannabis withdrawal: 300-1200mg/day for symptom management. Always combine with behavioral therapy. Monitor for misuse potential. State-specific scheduling regulations may apply.',
    pharmacotherapy:
      'Gabapentin 300mg-1200mg TID (varies by indication). Start low, titrate. Renal dosing required. No hepatic concerns. Not metabolized by CYP enzymes. Relatively benign side effect profile but sedation can be significant. Scheduled substance in some states due to misuse potential.',
    keyPearls: [
      'Gabapentin has growing evidence for AUD but is NOT FDA-approved for any addiction indication',
      'Rising misuse potential — especially co-used with opioids for enhanced euphoria',
      'Several US states have scheduled gabapentin (require PDMP reporting)',
      'Useful adjunct in alcohol withdrawal protocols (reduces benzodiazepine requirements)',
      'Despite the name, gabapentin does NOT act on GABA receptors',
    ],
    references: [
      'Mason BJ et al. Gabapentin treatment for alcohol dependence. JAMA Intern Med. 2014;174(1):70-77',
      'Smith RV et al. Gabapentin misuse, abuse, and diversion. Ann Pharmacother. 2016;50(3):229-233',
    ],
  },
  {
    id: 'topiramate-addiction',
    name: 'Topiramate in Addiction Medicine',
    category: 'pharmacotherapy',
    description:
      'Anticonvulsant with off-label evidence for AUD and cocaine use disorder. Modulates glutamate and enhances GABA. May reduce heavy drinking and promote abstinence. Weight loss is a potentially beneficial side effect.',
    epidemiology:
      'Multiple RCTs support topiramate for AUD: reduces heavy drinking days, increases abstinent days, decreases drinks per day. NNT ~6-7 for heavy drinking reduction. Also studied for cocaine use disorder with mixed but some promising results.',
    pathophysiology:
      'Multiple mechanisms: enhances GABA-A receptor function (non-benzodiazepine site), antagonizes AMPA/kainate glutamate receptors, inhibits carbonic anhydrase. Net effect: reduces excitatory neurotransmission and enhances inhibition. May normalize reward circuitry dysregulation in AUD.',
    screening:
      'Check renal function (risk of kidney stones), assess for glaucoma risk, pregnancy test (teratogenic — category D). Monitor metabolic acidosis risk. Cognitive side effects may limit tolerability.',
    clinicalPresentation:
      'Side effects: paresthesias (most common), cognitive impairment ("brain fog," word-finding difficulty), weight loss, taste alteration, metabolic acidosis, kidney stones, acute angle-closure glaucoma (rare). Cognitive effects are dose-dependent and often limit dose escalation.',
    management:
      'Slow titration is essential for tolerability: start 25mg/day, increase by 25-50mg/week. Target dose: 200-300mg/day in divided doses. BID dosing. Adequate hydration to prevent kidney stones. Duration: 12+ weeks. Monitor bicarbonate levels.',
    pharmacotherapy:
      'Topiramate 200-300mg/day PO in divided doses (BID). Very slow titration over 6-8 weeks. Dose-limiting side effects: cognitive impairment, paresthesias. Renal stones: maintain hydration, avoid carbonic anhydrase inhibitor combinations. Contraindicated in pregnancy (cleft palate risk). Weight loss may be beneficial or unwanted.',
    keyPearls: [
      'Not FDA-approved for AUD but has strong evidence — some guidelines recommend as second-line',
      'Slow titration essential — cognitive side effects are the most common reason for discontinuation',
      'Weight loss side effect can be beneficial for patients with AUD and obesity',
      'Paresthesias ("tingling") are very common — counsel patients in advance',
      'Teratogenic — reliable contraception required in women of childbearing potential',
    ],
    references: [
      'Johnson BA et al. Topiramate for treating alcohol dependence. JAMA. 2007;298(14):1641-1651',
      'Blodgett JC et al. A meta-analysis of topiramate for the treatment of AUD. Addiction. 2014;109(9):1368-1380',
    ],
  },
  // ── ADDITIONAL WITHDRAWAL / CLINICAL TOPICS ────────────────────
  {
    id: 'neonatal-abstinence-syndrome',
    name: 'Neonatal Abstinence Syndrome (NAS) / Neonatal Opioid Withdrawal Syndrome (NOWS)',
    category: 'withdrawal',
    description:
      'Withdrawal syndrome in neonates born to mothers with opioid dependence. Characterized by CNS irritability, GI dysfunction, autonomic dysregulation, and poor feeding. Managed with non-pharmacologic care first, then morphine or methadone if needed.',
    epidemiology:
      'Incidence increased 5-fold from 2004-2014. ~7 per 1,000 hospital births. Mean hospital stay 17-23 days. Costs >$500 million annually. Can occur with maternal use of any opioid (prescribed or illicit, including MOUD — but MOUD in pregnancy is still recommended).',
    pathophysiology:
      'Fetal opioid exposure causes dependence. After delivery, placental supply ceases, precipitating withdrawal. Onset: 24-72h for short-acting opioids, 48-72h+ for methadone/buprenorphine. Severity influenced by maternal opioid type/dose, polysubstance use, and neonatal metabolism.',
    screening:
      'Maternal screening: UDS at delivery, substance use history. Neonatal assessment: Finnegan Neonatal Abstinence Scoring System (FNASS) or Eat, Sleep, Console (ESC) approach. Serial assessments q3-4h. Observation for 4-7 days depending on maternal opioid.',
    clinicalPresentation:
      'CNS: high-pitched cry, tremors, irritability, hypertonicity, seizures (rare). GI: poor feeding, vomiting, diarrhea, excessive sucking. Autonomic: fever, sweating, nasal stuffiness, yawning, sneezing, mottling. Signs begin within 1-5 days depending on opioid half-life.',
    management:
      'Non-pharmacologic first: rooming-in with mother, skin-to-skin contact, low-stimulation environment, swaddling, breastfeeding (encouraged if mother is stable on MOUD and HIV-negative). Eat, Sleep, Console (ESC) approach reduces need for pharmacotherapy. Pharmacologic if needed: morphine or methadone. Clonidine as adjunct. Phenobarbital for polysubstance exposure.',
    pharmacotherapy:
      'First-line: morphine 0.05-0.1mg/kg PO q3-4h (titrate based on scores). Alternative: methadone 0.05-0.1mg/kg PO q6-12h. Clonidine adjunct: 0.5-1 mcg/kg q3-6h. Phenobarbital for non-opioid sedative withdrawal. Buprenorphine sublingual (emerging evidence — shorter treatment duration). Wean 10-20% every 24-48h when stable.',
    keyPearls: [
      'MOUD (methadone or buprenorphine) in pregnancy is standard of care — NAS is manageable',
      'Eat, Sleep, Console (ESC) approach reduces pharmacotherapy need by 50%+ and shortens LOS',
      'Breastfeeding is encouraged for mothers on stable MOUD (unless HIV+ or active illicit use)',
      'Buprenorphine in pregnancy may cause less severe NAS than methadone',
      'Rooming-in with mother significantly improves outcomes',
      'NAS is NOT a reason to withhold MOUD from pregnant patients — untreated OUD has worse outcomes',
    ],
    references: [
      'Hudak ML et al. Neonatal drug withdrawal. Pediatrics. 2012;129(2):e540-e560',
      'Grossman MR et al. An initiative to improve the quality of care of infants with NAS. Pediatrics. 2017;139(6):e20163360',
    ],
  },
  {
    id: 'polysubstance-use',
    name: 'Polysubstance Use',
    category: 'alcohol',
    description:
      'Concurrent or sequential use of multiple substances. The norm rather than exception in SUD populations. Complicates assessment, withdrawal management, and treatment. Increases morbidity and mortality.',
    epidemiology:
      'Majority of SUD patients use multiple substances. Alcohol + cocaine, opioids + benzodiazepines, and opioids + stimulants ("speedball") are common combinations. Fentanyl contamination of non-opioid drug supply creates unintentional polysubstance exposure. Polysubstance use increases overdose mortality significantly.',
    pathophysiology:
      'Synergistic pharmacology: alcohol + benzodiazepines (additive GABAergic sedation), cocaine + alcohol (cocaethylene formation — more cardiotoxic), opioids + benzodiazepines (synergistic respiratory depression). Cross-sensitization between stimulants and stress. Shared reward circuitry dysfunction.',
    screening:
      'Comprehensive substance use assessment — ask about ALL substances (including prescription, OTC, supplements). UDS with confirmatory testing. PDMP review. Alcohol + drugs screening: AUDIT + DAST-10 or NIDA Quick Screen + TAPS tool. Do not assume single substance.',
    clinicalPresentation:
      'Complex presentations depending on combination. Mixed intoxication states (e.g., alert but respiratory-depressed = opioid + stimulant). Complicated withdrawal (concurrent alcohol + benzodiazepine withdrawal is additive). Increased psychiatric comorbidity. Higher medical acuity.',
    management:
      'Address most dangerous withdrawal first (alcohol/benzodiazepine > opioid > stimulant). Integrated treatment for all substances. MOUD for OUD even with concurrent polysubstance use. Harm reduction for all substances. Treat psychiatric comorbidities. Avoid discharging patients after treating one substance while ignoring others.',
    pharmacotherapy:
      'Prioritize medications for most severe/dangerous SUD. MOUD for OUD (even with concurrent stimulant/alcohol use). Naltrexone may address both AUD and OUD. Address tobacco cessation (often neglected). Benzodiazepine taper protocol for sedative dependence. No pharmacotherapy for stimulant component. Caution with drug interactions.',
    keyPearls: [
      'Polysubstance use is the norm, not the exception — always screen for multiple substances',
      'Opioid + benzodiazepine combination is the most lethal polysubstance pattern',
      'Treat all substance use disorders, not just the "primary" one',
      'Fentanyl contamination means any illicit drug use carries opioid overdose risk',
      'MOUD should not be withheld because of concurrent stimulant or other substance use',
      'Alcohol/benzodiazepine withdrawal is medically dangerous — prioritize these in management',
    ],
    references: [
      'Connor JP et al. Polysubstance use: diagnostic and clinical challenges. Curr Opin Psychiatry. 2014;27(4):269-275',
      'Jones CM et al. Poly-substance use among heroin users. Drug Alcohol Depend. 2015;146:e140',
    ],
  },
  {
    id: 'wernicke-korsakoff',
    name: 'Wernicke-Korsakoff Syndrome',
    category: 'alcohol',
    description:
      'Neuropsychiatric emergency caused by thiamine (vitamin B1) deficiency, most commonly in AUD. Wernicke encephalopathy is acute and reversible; Korsakoff syndrome is chronic and often irreversible. Prevention with thiamine is essential.',
    epidemiology:
      'Wernicke encephalopathy is underdiagnosed — clinical triad present in only ~16% of cases. Autopsy studies suggest prevalence of 1-3% in general population, 12-14% in AUD. Korsakoff syndrome develops in ~80% of untreated Wernicke cases. Mortality of untreated Wernicke: ~20%.',
    pathophysiology:
      'Thiamine is a cofactor for pyruvate dehydrogenase, alpha-ketoglutarate dehydrogenase, and transketolase. Deficiency impairs aerobic metabolism in high-energy-demand areas: mammillary bodies, medial thalami, periaqueductal gray, cerebellar vermis. Alcohol impairs thiamine absorption, storage, and phosphorylation.',
    screening:
      'Clinical diagnosis (serum thiamine levels unreliable). Suspect in any malnourished, AUD, or chronic vomiting patient. MRI: mammillary body and medial thalamic signal changes (sensitivity ~53%). Low threshold to treat empirically with thiamine. Erythrocyte transketolase activity (research tool, not practical).',
    clinicalPresentation:
      'Wernicke triad (only ~16% have all three): (1) encephalopathy/confusion, (2) oculomotor dysfunction (nystagmus, ophthalmoplegia, conjugate gaze palsy), (3) ataxia (cerebellar). Korsakoff: anterograde amnesia (inability to form new memories), retrograde amnesia, confabulation, preserved consciousness and social skills.',
    management:
      'EMERGENCY: IV thiamine 500mg TID x3 days, then 250mg daily x5 days (Caine criteria or clinical suspicion). Give BEFORE glucose (glucose metabolism consumes thiamine and can precipitate Wernicke). Oral thiamine is inadequately absorbed in AUD — IV/IM route essential for acute treatment. Korsakoff: long-term thiamine, supportive care, cognitive rehabilitation.',
    pharmacotherapy:
      'Thiamine (vitamin B1): acute Wernicke — 500mg IV TID x 2-3 days, then 250mg IV/IM daily x 3-5 days. Prophylaxis in AUD patients: 100-250mg IV/IM before glucose administration. Oral supplementation for ongoing prevention. Also supplement magnesium (required cofactor for thiamine utilization). Korsakoff has no specific pharmacotherapy beyond thiamine.',
    keyPearls: [
      'Classic triad is present in only ~16% of Wernicke cases — have a low threshold to treat',
      'ALWAYS give thiamine BEFORE glucose (glucose without thiamine can precipitate Wernicke)',
      'IV/IM thiamine is required for acute treatment — oral absorption is unreliable in AUD',
      'Korsakoff syndrome (amnesia, confabulation) develops in ~80% of untreated Wernicke cases',
      'Magnesium is a required cofactor — replete before/with thiamine',
      'Wernicke encephalopathy is a medical emergency with 20% mortality if untreated',
    ],
    references: [
      'Sechi G, Serra A. Wernicke encephalopathy: new clinical settings and recent advances. Lancet Neurol. 2007;6(5):442-455',
      'Thomson AD et al. The Royal College of Physicians report on alcohol: guidelines for managing Wernicke encephalopathy. Alcohol Alcohol. 2002;37(6):513-521',
    ],
  },
  {
    id: 'alcohol-related-liver-disease',
    name: 'Alcohol-Related Liver Disease',
    category: 'alcohol',
    description:
      'Spectrum from steatosis to alcoholic hepatitis to cirrhosis. Leading indication for liver transplantation. Abstinence is the most important intervention at every stage. Increasing recognition of early transplantation for severe alcoholic hepatitis.',
    epidemiology:
      '~25% of heavy drinkers develop clinically significant liver disease. Alcoholic hepatitis mortality: 20-40% at 28 days for severe cases (Maddrey DF >=32). Cirrhosis is the 12th leading cause of death in the US. Rising in younger adults.',
    pathophysiology:
      'Ethanol metabolism (ADH, CYP2E1) produces acetaldehyde (toxic). Oxidative stress, lipid peroxidation, mitochondrial damage. Gut barrier dysfunction allows endotoxin translocation (activates Kupffer cells). Stellate cell activation leads to fibrosis. Steatosis is reversible; cirrhosis generally is not.',
    screening:
      'Liver function tests: AST:ALT ratio >2:1 classic for alcohol-related disease. Elevated GGT (sensitive but nonspecific). MCV elevation. CDT (carbohydrate-deficient transferrin) — more specific for heavy drinking. FIB-4 and APRI for fibrosis staging. Elastography (FibroScan). Maddrey discriminant function for acute alcoholic hepatitis severity.',
    clinicalPresentation:
      'Steatosis: often asymptomatic, hepatomegaly. Alcoholic hepatitis: jaundice, fever, tender hepatomegaly, leukocytosis, coagulopathy, ascites. Cirrhosis: portal hypertension (varices, ascites, splenomegaly), hepatic encephalopathy, coagulopathy, jaundice, spider angiomata, palmar erythema.',
    management:
      'All stages: ABSTINENCE is most important (reduces mortality at every stage). Nutrition support (high calorie, high protein). Alcoholic hepatitis (severe, Maddrey DF >=32): prednisolone 40mg daily x28 days (if no contraindication) — reassess at day 7 (Lille score). Pentoxifylline is no longer recommended (STOPAH trial). Cirrhosis: standard management. Early liver transplant: emerging for severe alcoholic hepatitis non-responders.',
    pharmacotherapy:
      'Alcoholic hepatitis: prednisolone 40mg PO daily x28 days (Maddrey DF >=32, Lille score <0.45 at day 7 to continue). N-acetylcysteine as adjunct (improved 30-day survival). Infection prophylaxis if on steroids. AUD pharmacotherapy once stable: naltrexone (caution in liver disease — acamprosate preferred), acamprosate (safe in liver disease, renally cleared).',
    keyPearls: [
      'AST:ALT ratio >2:1 is classic for alcohol-related liver disease',
      'Abstinence improves outcomes at EVERY stage — including cirrhosis',
      'Maddrey discriminant function >=32 defines severe alcoholic hepatitis requiring treatment',
      'Prednisolone, not pentoxifylline, is standard for severe alcoholic hepatitis (STOPAH trial)',
      'Acamprosate is the preferred AUD medication in liver disease (renally cleared, no hepatotoxicity)',
      'Early liver transplant for alcoholic hepatitis is changing the "6-month sobriety rule" paradigm',
    ],
    references: [
      'Thursz MR et al. (STOPAH Trial). NEJM. 2015;372:1619-1628',
      'Louvet A et al. Early liver transplant for severe alcohol-related hepatitis. NEJM. 2022;387:1482-1492',
      'Crabb DW et al. Diagnosis and treatment of alcohol-related liver diseases. Am J Gastroenterol. 2020;115(3):306-338',
    ],
  },
];

// ── Utility Functions ──────────────────────────────────────────────

/** Search entries by query across name, description, clinicalPresentation, management, and keyPearls */
export const searchAddictionEntries = (query: string): AddictionMedicineEntry[] => {
  const q = query.toLowerCase();
  return addictionMedicineDatabase.filter((e) => {
    const fields = [e.name, e.description, e.clinicalPresentation, e.management, e.screening, e.pharmacotherapy, ...e.keyPearls];
    return fields.some((f) => f.toLowerCase().includes(q));
  });
};

/** Filter entries by one or more categories */
export const filterByCategory = (categories: AddictionCategory[]): AddictionMedicineEntry[] =>
  addictionMedicineDatabase.filter((e) => categories.includes(e.category));

/** Get a single entry by its id */
export const getEntryById = (id: string): AddictionMedicineEntry | undefined =>
  addictionMedicineDatabase.find((e) => e.id === id);
