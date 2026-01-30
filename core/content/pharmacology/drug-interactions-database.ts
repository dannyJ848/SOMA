/**
 * Drug Interactions Database
 *
 * Comprehensive database of 42 clinically significant drug-drug interactions
 * with mechanisms, severity, clinical effects, and management strategies.
 */

// ============================================
// Types
// ============================================

export type InteractionCategory =
  | 'pharmacokinetic'
  | 'pharmacodynamic'
  | 'cyp450'
  | 'absorption'
  | 'renal'
  | 'serotonergic'
  | 'qt-prolongation'
  | 'bleeding-risk'
  | 'nephrotoxic'
  | 'hepatotoxic';

export interface DrugInteractionEntry {
  id: string;
  drug1: string;
  drug2: string;
  category: InteractionCategory;
  mechanism: string;
  severity: 'major' | 'moderate' | 'minor';
  clinicalEffect: string;
  management: string;
  evidence: string;
}

// ============================================
// Helper
// ============================================

function di(
  id: string,
  drug1: string,
  drug2: string,
  category: InteractionCategory,
  mechanism: string,
  severity: DrugInteractionEntry['severity'],
  clinicalEffect: string,
  management: string,
  evidence: string,
): DrugInteractionEntry {
  return { id, drug1, drug2, category, mechanism, severity, clinicalEffect, management, evidence };
}

// ============================================
// Database (42 entries)
// ============================================

export const DRUG_INTERACTION_ENTRIES: Record<string, DrugInteractionEntry> = {

  // ── Bleeding Risk ────────────────────────────

  warfarin_nsaids: di(
    'warfarin_nsaids', 'Warfarin', 'NSAIDs',
    'bleeding-risk',
    'NSAIDs inhibit COX-1, impairing platelet thromboxane A2 production and reducing platelet aggregation. Combined with warfarin anticoagulation, bleeding risk is synergistically increased. NSAIDs also cause direct GI mucosal injury.',
    'major',
    'Significantly increased risk of GI bleeding (3-6x), intracranial hemorrhage, and other major bleeds. GI ulceration from NSAIDs provides a bleeding site in an anticoagulated patient.',
    'Avoid combination when possible. If NSAID is essential, use lowest dose for shortest duration, add PPI gastroprotection, and monitor INR more frequently. Consider acetaminophen as alternative analgesic.',
    'Multiple cohort studies and meta-analyses confirm 3-6 fold increased GI bleeding risk. ACC/AHA guidelines recommend avoidance.',
  ),

  warfarin_amiodarone: di(
    'warfarin_amiodarone', 'Warfarin', 'Amiodarone',
    'cyp450',
    'Amiodarone inhibits CYP2C9, CYP3A4, and CYP1A2, reducing warfarin metabolism. The S-enantiomer (more potent) is primarily metabolized by CYP2C9. Amiodarone has an extremely long half-life (40-55 days), so the interaction persists weeks after discontinuation.',
    'major',
    'INR increases by 30-50% on average, with risk of supratherapeutic anticoagulation and major bleeding. Effect develops over 1-2 weeks and may persist months after amiodarone is stopped.',
    'Empirically reduce warfarin dose by 30-50% when initiating amiodarone. Monitor INR weekly for first 4-6 weeks, then every 1-2 weeks. Continue close monitoring for months after amiodarone discontinuation.',
    'Well-established interaction with extensive clinical data. ACC/AHA AF guidelines recommend empiric dose reduction.',
  ),

  warfarin_antibiotics: di(
    'warfarin_antibiotics', 'Warfarin', 'Trimethoprim-Sulfamethoxazole',
    'cyp450',
    'TMP-SMX inhibits CYP2C9 (primary metabolic pathway for S-warfarin) and may also reduce vitamin K-producing gut flora, further potentiating warfarin effect.',
    'major',
    'Marked INR elevation, often exceeding therapeutic range within 3-5 days. Significant bleeding risk, especially in elderly patients.',
    'If combination is necessary, reduce warfarin dose by 25-50% and check INR within 3-5 days. Consider alternative antibiotic. Resume usual warfarin dose after antibiotic completion with INR monitoring.',
    'Multiple case series and pharmacokinetic studies. One of the most clinically significant warfarin-antibiotic interactions.',
  ),

  warfarin_cranberry: di(
    'warfarin_cranberry', 'Warfarin', 'Cranberry Juice',
    'cyp450',
    'Cranberry flavonoids may inhibit CYP2C9 and CYP3A4, reducing warfarin metabolism. Mechanism is debated and likely dose-dependent.',
    'moderate',
    'Case reports of markedly elevated INR and bleeding events with large cranberry juice intake. Modest INR changes with typical consumption.',
    'Moderate consumption (< 240 mL/day) is likely safe with standard INR monitoring. Avoid large or unpredictable quantities. Monitor INR if cranberry intake changes significantly.',
    'FDA MedWatch case reports; controlled studies show small to no effect at moderate intake. Clinical significance debated.',
  ),

  // ── Serotonergic ─────────────────────────────

  ssri_maoi: di(
    'ssri_maoi', 'SSRIs', 'MAOIs',
    'serotonergic',
    'MAOIs block enzymatic degradation of serotonin while SSRIs block reuptake. Combined effect produces dangerous synaptic serotonin accumulation triggering serotonin syndrome: a triad of neuromuscular excitation, autonomic hyperactivity, and altered mental status.',
    'major',
    'Life-threatening serotonin syndrome: hyperthermia (>41C), rigidity, clonus, agitation, diaphoresis, tachycardia, hypertension, seizures, coma, and death. Can develop within hours of co-administration.',
    'Absolutely contraindicated. Mandatory 14-day washout between MAOI and SSRI (5 weeks for fluoxetine due to long-acting norfluoxetine metabolite). Educate patients on all serotonergic drugs including OTC dextromethorphan.',
    'Well-documented lethal interaction. All SSRI and MAOI prescribing information carries contraindication. Multiple fatality reports.',
  ),

  ssri_triptans: di(
    'ssri_triptans', 'SSRIs/SNRIs', 'Triptans',
    'serotonergic',
    'Triptans are 5-HT1B/1D agonists; SSRIs/SNRIs increase synaptic serotonin. Theoretical additive serotonergic effect, though triptans act on different receptor subtypes than those primarily involved in serotonin syndrome.',
    'moderate',
    'FDA alert for potential serotonin syndrome, though actual risk is low. Symptoms if they occur: agitation, tremor, tachycardia, diaphoresis, myoclonus.',
    'Combination is commonly used in clinical practice and generally well-tolerated. Counsel patients to recognize serotonin syndrome symptoms. Use lowest effective triptan dose. Avoid in patients on multiple serotonergic agents.',
    'FDA 2006 alert based on theoretical risk and case reports. AHA 2010 review concluded actual risk is very low. Combination used routinely in headache practice.',
  ),

  ssri_tramadol: di(
    'ssri_tramadol', 'SSRIs', 'Tramadol',
    'serotonergic',
    'Tramadol inhibits serotonin and norepinephrine reuptake in addition to its mu-opioid agonist activity. Combined with SSRIs, additive serotonin reuptake inhibition raises serotonin syndrome risk. Tramadol also lowers seizure threshold.',
    'major',
    'Serotonin syndrome risk with features including tremor, agitation, diaphoresis, hyperthermia, myoclonus. Also increased seizure risk due to additive lowering of seizure threshold.',
    'Avoid combination when possible. If necessary, use lowest doses and monitor closely for serotonergic symptoms. Consider alternative analgesics. Educate patient on warning signs.',
    'Multiple case reports of serotonin syndrome. FDA labeling warns of interaction.',
  ),

  linezolid_ssri: di(
    'linezolid_ssri', 'Linezolid', 'SSRIs/SNRIs',
    'serotonergic',
    'Linezolid is a reversible non-selective MAO inhibitor in addition to its antibiotic activity. Combined with serotonin reuptake inhibitors, it produces the same dangerous serotonin accumulation as MAOI-SSRI interaction.',
    'major',
    'Serotonin syndrome: hyperthermia, rigidity, myoclonus, autonomic instability, altered mental status. Can be life-threatening.',
    'If linezolid is essential and no antibiotic alternative exists, discontinue serotonergic agent and observe for 2 weeks (5 weeks for fluoxetine). If urgent, give linezolid with close inpatient monitoring. Resume serotonergic agent 24 hours after last linezolid dose.',
    'FDA 2011 drug safety communication. Multiple case reports of serotonin syndrome.',
  ),

  // ── CYP450 Interactions ──────────────────────

  statins_cyp3a4_inhibitors: di(
    'statins_cyp3a4_inhibitors', 'Simvastatin/Lovastatin', 'CYP3A4 Inhibitors (Clarithromycin, Itraconazole, HIV PIs)',
    'cyp450',
    'Simvastatin and lovastatin are extensively metabolized by CYP3A4. Strong CYP3A4 inhibitors dramatically increase statin plasma concentrations (up to 10-20 fold), overwhelming normal hepatic first-pass metabolism.',
    'major',
    'Rhabdomyolysis: massive skeletal muscle breakdown causing myoglobinuria, acute kidney injury, hyperkalemia, and potentially death. CK levels can exceed 10,000 U/L.',
    'Contraindicated with strong CYP3A4 inhibitors. Switch to pravastatin, rosuvastatin, or pitavastatin (not CYP3A4 dependent). If temporary inhibitor (e.g., antibiotic course), hold statin. Simvastatin max 20mg with moderate inhibitors.',
    'FDA contraindication in labeling. Multiple case reports and pharmacokinetic studies documenting >10x AUC increases.',
  ),

  grapefruit_statins: di(
    'grapefruit_statins', 'Grapefruit Juice', 'Simvastatin/Lovastatin/Atorvastatin',
    'cyp450',
    'Furanocoumarins in grapefruit irreversibly inhibit intestinal CYP3A4 (and to lesser extent hepatic CYP3A4), increasing oral bioavailability of CYP3A4-substrate statins. Effect persists 24-72 hours after ingestion.',
    'moderate',
    'Elevated statin levels increasing risk of myopathy and rhabdomyolysis. Simvastatin AUC can increase 260% with regular grapefruit consumption.',
    'Avoid grapefruit with simvastatin and lovastatin. Small amounts (< half grapefruit) acceptable with atorvastatin. No restriction needed with pravastatin, rosuvastatin, or pitavastatin.',
    'Pharmacokinetic studies showing significant AUC increases. FDA labeling for simvastatin includes grapefruit warning.',
  ),

  phenytoin_many: di(
    'phenytoin_many', 'Phenytoin', 'Multiple Drugs (inducee/inhibitor)',
    'cyp450',
    'Phenytoin is a potent CYP3A4, CYP2C9, and CYP2C19 inducer, reducing levels of many drugs. Conversely, phenytoin has saturable (zero-order) kinetics; small changes in its own metabolism by CYP2C9/2C19 inhibitors cause disproportionate level increases.',
    'major',
    'As inducer: subtherapeutic levels of OCPs, warfarin, immunosuppressants, DOACs, and many others. As substrate: small inhibition causes large, unpredictable phenytoin level increases with toxicity (nystagmus, ataxia, seizures).',
    'Monitor phenytoin levels closely when adding or removing interacting drugs. Adjust doses empirically. Use alternative contraception with OCPs. Consider levetiracetam or lamotrigine as non-inducing anticonvulsant alternatives.',
    'Extensive pharmacokinetic literature. Zero-order kinetics make phenytoin one of the most interaction-prone drugs in clinical use.',
  ),

  rifampin_ocp: di(
    'rifampin_ocp', 'Rifampin', 'Oral Contraceptive Pills',
    'cyp450',
    'Rifampin is the most potent known CYP3A4 and P-glycoprotein inducer. It dramatically increases metabolism of ethinyl estradiol and progestins, rendering hormonal contraception ineffective.',
    'major',
    'Contraceptive failure and unintended pregnancy. Ethinyl estradiol AUC reduced by 40-60%. Breakthrough bleeding is a clinical marker but unreliable predictor of ovulation.',
    'Use non-hormonal contraception (copper IUD, barrier methods) during rifampin therapy and for 28 days after discontinuation. Higher-dose OCPs are NOT a reliable solution. Applies to patches, rings, implants, and oral formulations.',
    'Well-established interaction. WHO and CDC contraceptive guidance recommend non-hormonal methods with rifampin.',
  ),

  rifampin_warfarin: di(
    'rifampin_warfarin', 'Rifampin', 'Warfarin',
    'cyp450',
    'Rifampin massively induces CYP2C9, CYP3A4, and CYP1A2, accelerating warfarin metabolism. Warfarin dose requirements may double or triple.',
    'major',
    'Subtherapeutic INR and loss of anticoagulant protection, risking thromboembolic events (stroke, DVT, PE). Equally dangerous when rifampin is stopped: INR may spike as enzyme induction resolves over 2-4 weeks.',
    'Avoid combination if possible. If necessary, increase warfarin dose significantly with INR monitoring 2-3x/week. When discontinuing rifampin, taper warfarin dose over 2-4 weeks with frequent INR checks.',
    'Established interaction with extensive clinical data. Warfarin dose may need 2-3x increase.',
  ),

  clopidogrel_ppis: di(
    'clopidogrel_ppis', 'Clopidogrel', 'Proton Pump Inhibitors (esp. Omeprazole)',
    'cyp450',
    'Clopidogrel is a prodrug requiring CYP2C19 activation. Omeprazole and esomeprazole are CYP2C19 inhibitors, potentially reducing conversion to the active thiol metabolite and diminishing antiplatelet effect.',
    'moderate',
    'Reduced antiplatelet activity with theoretical increased risk of cardiovascular events (MI, stent thrombosis). Platelet reactivity studies show measurable reduction in clopidogrel effect.',
    'Use pantoprazole (weakest CYP2C19 inhibitor) if PPI is needed with clopidogrel. Alternatively, use H2 blocker (famotidine). FDA advises avoiding omeprazole/esomeprazole. Separate dosing does NOT mitigate interaction.',
    'FDA 2009 safety communication. COGENT trial showed no CV signal but was underpowered. Pharmacokinetic interaction is real; clinical significance debated.',
  ),

  theophylline_fluoroquinolones: di(
    'theophylline_fluoroquinolones', 'Theophylline', 'Fluoroquinolones (Ciprofloxacin, Enoxacin)',
    'cyp450',
    'Ciprofloxacin and enoxacin strongly inhibit CYP1A2, the primary enzyme metabolizing theophylline. This raises theophylline levels into the toxic range. Levofloxacin and moxifloxacin have minimal CYP1A2 effect.',
    'major',
    'Theophylline toxicity: nausea, vomiting, tachycardia, tremor, seizures (at levels >30 mcg/mL), and cardiac arrhythmias. Narrow therapeutic index (10-20 mcg/mL) makes small changes clinically significant.',
    'Reduce theophylline dose by 30-50% with ciprofloxacin. Monitor levels within 24-48 hours. Preferably use levofloxacin or moxifloxacin which do not significantly affect theophylline metabolism.',
    'Well-established interaction with pharmacokinetic studies. Theophylline clearance reduced 20-30% by ciprofloxacin.',
  ),

  alcohol_metronidazole: di(
    'alcohol_metronidazole', 'Alcohol', 'Metronidazole',
    'pharmacokinetic',
    'Metronidazole inhibits aldehyde dehydrogenase, blocking alcohol metabolism and causing acetaldehyde accumulation (disulfiram-like reaction). Recent evidence suggests mechanism may involve other pathways.',
    'moderate',
    'Disulfiram-like reaction: flushing, nausea, vomiting, headache, tachycardia, and hypotension within minutes of alcohol ingestion. Severity varies.',
    'Avoid all alcohol (including mouthwash, cooking wine, alcohol-containing medications) during treatment and for 48-72 hours after last metronidazole dose. Educate patient on hidden alcohol sources.',
    'Classic teaching interaction though some recent reviews question severity. Prudent to maintain avoidance recommendation.',
  ),

  // ── Pharmacodynamic ──────────────────────────

  acei_k_sparing_diuretics: di(
    'acei_k_sparing_diuretics', 'ACE Inhibitors/ARBs', 'Potassium-Sparing Diuretics (Spironolactone)',
    'pharmacodynamic',
    'ACE inhibitors reduce aldosterone secretion, decreasing renal potassium excretion. Spironolactone directly blocks aldosterone receptors. Combined effect significantly impairs potassium elimination.',
    'major',
    'Life-threatening hyperkalemia (K+ > 6.0 mEq/L) causing cardiac arrhythmias (peaked T waves, widened QRS, sine wave, cardiac arrest). Risk highest in CKD, diabetes, and elderly patients.',
    'Monitor potassium within 1 week of initiation and after dose changes. Start spironolactone at low dose (12.5-25mg). Avoid concurrent potassium supplements and salt substitutes. Counsel on high-potassium foods. Discontinue if K+ > 5.5.',
    'RALES trial showed mortality benefit but subsequent real-world data showed increased hyperkalemia hospitalizations. Close monitoring is essential.',
  ),

  potassium_acei_spironolactone: di(
    'potassium_acei_spironolactone', 'Potassium Supplements', 'ACE Inhibitors + Spironolactone',
    'pharmacodynamic',
    'Triple threat to potassium homeostasis: exogenous potassium load + reduced aldosterone-mediated excretion (ACEi) + aldosterone receptor blockade (spironolactone). Renal potassium elimination is maximally impaired.',
    'major',
    'Severe hyperkalemia with high risk of fatal cardiac arrhythmias. This triple combination is one of the most dangerous electrolyte interactions in clinical medicine.',
    'Avoid potassium supplements in patients on both ACEi and spironolactone. Discontinue potassium-containing salt substitutes. Monitor K+ at least weekly when initiating. Ensure adequate renal function (eGFR > 30).',
    'Multiple case reports of fatal hyperkalemia. Consensus guidelines recommend extreme caution with this triple combination.',
  ),

  digoxin_amiodarone: di(
    'digoxin_amiodarone', 'Digoxin', 'Amiodarone',
    'pharmacokinetic',
    'Amiodarone inhibits P-glycoprotein (MDR1) and reduces renal and non-renal clearance of digoxin. Also displaces digoxin from tissue binding sites, raising serum levels. Effect develops over 1-2 weeks.',
    'major',
    'Digoxin toxicity: nausea, vomiting, visual disturbances (yellow-green halos), bradycardia, heart block, ventricular arrhythmias (bidirectional VT), hyperkalemia. Can be fatal.',
    'Reduce digoxin dose by 50% when starting amiodarone. Monitor digoxin level within 1 week and periodically thereafter. Monitor potassium (hypokalemia potentiates digoxin toxicity). Target digoxin 0.5-0.9 ng/mL for heart failure.',
    'Well-established interaction. Digoxin levels increase by approximately 70-100% with amiodarone co-administration.',
  ),

  digoxin_verapamil: di(
    'digoxin_verapamil', 'Digoxin', 'Verapamil',
    'pharmacokinetic',
    'Verapamil inhibits P-glycoprotein-mediated renal tubular secretion of digoxin and reduces its non-renal clearance. Additive negative chronotropic and dromotropic effects compound the pharmacodynamic risk.',
    'major',
    'Elevated digoxin levels (50-75% increase) with toxicity risk, plus additive AV nodal blockade causing severe bradycardia or complete heart block.',
    'Reduce digoxin dose by 33-50% when initiating verapamil. Monitor digoxin levels and heart rate closely. ECG monitoring at initiation. Consider alternative rate control agent.',
    'Well-documented pharmacokinetic and pharmacodynamic interaction with extensive clinical data.',
  ),

  lithium_nsaids: di(
    'lithium_nsaids', 'Lithium', 'NSAIDs',
    'renal',
    'NSAIDs inhibit renal prostaglandin synthesis, reducing renal blood flow and GFR. This decreases lithium clearance (lithium is handled like sodium by the kidney). Reduced prostaglandin-mediated sodium and water excretion further concentrates lithium.',
    'major',
    'Lithium toxicity: tremor, ataxia, slurred speech, confusion, seizures, nephrogenic diabetes insipidus, renal failure, cardiac arrhythmias, coma. Narrow therapeutic index (0.6-1.2 mEq/L).',
    'Avoid NSAIDs if possible; use acetaminophen for pain. If NSAID is essential, monitor lithium levels within 5-7 days and reduce lithium dose preemptively. Aspirin and sulindac may have less effect on lithium clearance.',
    'Consistent pharmacokinetic data showing 15-25% increase in lithium levels. Case reports of serious toxicity.',
  ),

  lithium_thiazides: di(
    'lithium_thiazides', 'Lithium', 'Thiazide Diuretics',
    'renal',
    'Thiazides increase proximal tubular sodium and lithium reabsorption by inducing mild volume depletion. The kidney treats lithium similarly to sodium; contraction of extracellular fluid volume enhances lithium retention.',
    'major',
    'Lithium toxicity from elevated levels (25-40% increase). Symptoms range from coarse tremor and GI upset to seizures, renal failure, and cardiovascular collapse.',
    'If combination is necessary, reduce lithium dose by 25-50% and monitor levels within 5-7 days. Loop diuretics may have a less predictable but still significant effect. Amiloride is the safest diuretic with lithium.',
    'Classic drug interaction. Well-established in pharmacokinetic studies and clinical practice.',
  ),

  methotrexate_nsaids: di(
    'methotrexate_nsaids', 'Methotrexate', 'NSAIDs',
    'renal',
    'NSAIDs reduce renal blood flow and GFR via prostaglandin inhibition, decreasing methotrexate renal clearance. NSAIDs may also displace methotrexate from protein binding and compete for tubular secretion, further increasing free methotrexate levels.',
    'major',
    'Methotrexate toxicity: severe pancytopenia (especially at high doses), mucositis, hepatotoxicity, renal failure, and death. Low-dose methotrexate (e.g., weekly for RA) has lower but still significant risk.',
    'For high-dose methotrexate: avoid NSAIDs for 2 days before and at least 3-5 days after. For low-dose weekly methotrexate: low-dose NSAIDs may be used cautiously with monitoring. Ensure adequate hydration and renal function.',
    'Well-documented with fatal case reports at high methotrexate doses. Risk is dose-dependent.',
  ),

  methotrexate_tmp_smx: di(
    'methotrexate_tmp_smx', 'Methotrexate', 'Trimethoprim-Sulfamethoxazole',
    'pharmacodynamic',
    'Both methotrexate and trimethoprim inhibit folate metabolism (at different enzymatic steps). Additive antifolate effect causes enhanced bone marrow suppression. Trimethoprim may also reduce renal tubular secretion of methotrexate.',
    'major',
    'Severe pancytopenia with potentially fatal bone marrow suppression, megaloblastic anemia, and mucosal toxicity even at low methotrexate doses.',
    'Avoid combination. Use alternative antibiotics for UTI or other infections. If no alternative exists, hold methotrexate, monitor CBC closely, and supplement with leucovorin.',
    'Multiple case reports of fatal pancytopenia. Considered contraindicated in most references.',
  ),

  metformin_contrast: di(
    'metformin_contrast', 'Metformin', 'Iodinated Contrast Dye',
    'nephrotoxic',
    'Contrast media can cause contrast-induced nephropathy (CIN), transiently reducing renal function. Metformin is renally cleared; impaired excretion during CIN leads to accumulation and risk of lactic acidosis.',
    'major',
    'Lactic acidosis (rare but ~50% mortality): altered mental status, hyperventilation, abdominal pain, hypotension, elevated lactate (>5 mmol/L), and anion gap metabolic acidosis.',
    'Hold metformin on the day of and for 48 hours after contrast administration. Check renal function (serum creatinine/eGFR) before resuming. If eGFR was >60 pre-procedure and patient is otherwise stable, some guidelines allow same-day resumption.',
    'ACR guidelines recommend holding metformin in patients with eGFR 30-60 or other risk factors. Lower risk in patients with eGFR >60.',
  ),

  // ── QT Prolongation ──────────────────────────

  macrolides_antipsychotics: di(
    'macrolides_antipsychotics', 'Macrolides (Erythromycin, Clarithromycin)', 'Antipsychotics (Haloperidol, Ziprasidone)',
    'qt-prolongation',
    'Both drug classes independently prolong the QT interval by blocking the hERG (IKr) potassium channel. Combined blockade causes additive or synergistic QT prolongation, predisposing to polymorphic ventricular tachycardia.',
    'major',
    'Torsades de pointes (polymorphic VT), syncope, cardiac arrest, and sudden death. Risk amplified by hypokalemia, hypomagnesemia, bradycardia, female sex, and structural heart disease.',
    'Avoid combination. Use azithromycin (lower QT risk) if macrolide needed, or alternative antibiotic class. If unavoidable, check baseline ECG, QTc, and electrolytes. Correct K+ >4.0 and Mg2+ >2.0. Continuous telemetry.',
    'CredibleMeds QT drug lists. Multiple case reports of fatal torsades de pointes. FDA labeling warnings for both classes.',
  ),

  fluoroquinolones_antiarrhythmics: di(
    'fluoroquinolones_antiarrhythmics', 'Fluoroquinolones (Moxifloxacin)', 'Class IA/III Antiarrhythmics (Sotalol, Amiodarone)',
    'qt-prolongation',
    'Fluoroquinolones (especially moxifloxacin) block hERG channels, prolonging QT. Class IA (procainamide) and III (sotalol, amiodarone) antiarrhythmics inherently prolong QT as part of their mechanism. Additive QT prolongation.',
    'major',
    'Torsades de pointes, ventricular fibrillation, and sudden cardiac death. Moxifloxacin prolongs QTc by ~10-15ms on average; combined with class III agents, QTc can exceed 500ms.',
    'Contraindicated. Use non-QT-prolonging antibiotic. If fluoroquinolone essential, use levofloxacin (lower QT risk) with continuous ECG monitoring, electrolyte correction, and frequent QTc assessment.',
    'FDA black box warning for fluoroquinolones. CredibleMeds classification as known risk. Pharmacological mechanism well-defined.',
  ),

  citalopram_ondansetron: di(
    'citalopram_ondansetron', 'Citalopram/Escitalopram', 'Ondansetron',
    'qt-prolongation',
    'Citalopram causes dose-dependent QTc prolongation (FDA max 40mg, 20mg in elderly). Ondansetron also prolongs QTc via hERG channel blockade. Additive effect increases torsades risk.',
    'moderate',
    'QTc prolongation with risk of torsades de pointes. More significant at higher citalopram doses (>40mg) and with IV ondansetron (>16mg single dose).',
    'Use lowest effective doses of both. Check ECG if both are prescribed. Consider granisetron or alternative antiemetic. Ensure normal electrolytes. Citalopram max dose 20mg in patients over 60.',
    'FDA safety communications for both drugs regarding QTc. Pharmacokinetic interaction data support additive effect.',
  ),

  methadone_qt_drugs: di(
    'methadone_qt_drugs', 'Methadone', 'QT-Prolonging Drugs (Antipsychotics, Macrolides, Fluoroquinolones)',
    'qt-prolongation',
    'Methadone blocks hERG potassium channels in a dose-dependent manner. Its long and variable half-life (8-59 hours) and active metabolites contribute to unpredictable QT prolongation. Any additional QT-prolonging drug compounds the risk.',
    'major',
    'Torsades de pointes and sudden cardiac death. Risk increases with doses >100mg/day, concurrent QT drugs, electrolyte abnormalities, and hepatic impairment (slowing metabolism).',
    'Baseline and follow-up ECGs for all patients on methadone. Correct electrolytes. Avoid combining with other QT-prolonging agents when possible. If QTc >500ms, reduce dose, eliminate other QT drugs, or switch opioid.',
    'SAMHSA guidance for methadone programs. Multiple epidemiologic studies linking methadone to QT-related death.',
  ),

  // ── Nephrotoxic ──────────────────────────────

  aminoglycosides_loop_diuretics: di(
    'aminoglycosides_loop_diuretics', 'Aminoglycosides (Gentamicin, Tobramycin)', 'Loop Diuretics (Furosemide)',
    'nephrotoxic',
    'Aminoglycosides accumulate in renal proximal tubular cells, causing direct tubular necrosis. Loop diuretics cause volume depletion and may increase aminoglycoside renal cortical concentration. Both are independently ototoxic; combined ototoxicity is synergistic.',
    'major',
    'Nephrotoxicity: acute tubular necrosis, rising creatinine, oliguria. Ototoxicity: irreversible vestibular and cochlear damage (tinnitus, vertigo, hearing loss). Risk increases with duration and dehydration.',
    'Monitor aminoglycoside trough levels (gentamicin <1 mcg/mL), serum creatinine daily, and urine output. Maintain euvolemia. Use extended-interval (once-daily) aminoglycoside dosing when appropriate. Limit duration to <7 days. Baseline and serial audiometry if feasible.',
    'Synergistic toxicity well-established in animal models and clinical studies. Both agents independently carry ototoxicity and nephrotoxicity risk.',
  ),

  nsaid_acei_diuretic: di(
    'nsaid_acei_diuretic', 'NSAIDs', 'ACE Inhibitors + Diuretics (Triple Whammy)',
    'nephrotoxic',
    'NSAIDs constrict the afferent arteriole (blocking prostaglandin-mediated dilation). ACEi dilate the efferent arteriole (blocking angiotensin II). Diuretics reduce intravascular volume. Together, they critically reduce glomerular perfusion pressure.',
    'major',
    'Acute kidney injury (the "triple whammy"), potentially requiring dialysis. Risk is especially high in volume-depleted, elderly, or CKD patients. May also cause severe hyperkalemia.',
    'Avoid triple combination whenever possible. If NSAID is essential, use lowest dose for shortest duration, maintain hydration, and monitor creatinine and potassium within 1 week. Educate patients to avoid OTC NSAIDs.',
    'Large epidemiological studies (BMJ 2013) showing 31% increased AKI risk with triple therapy. Well-recognized clinical entity.',
  ),

  vancomycin_aminoglycosides: di(
    'vancomycin_aminoglycosides', 'Vancomycin', 'Aminoglycosides',
    'nephrotoxic',
    'Both agents are nephrotoxic through different mechanisms. Vancomycin causes oxidative stress and tubular damage; aminoglycosides cause direct proximal tubular necrosis via lysosomal disruption. Combined nephrotoxic insult is additive.',
    'major',
    'Significantly increased incidence of acute kidney injury (up to 30-40% with combination vs 5-10% with either alone). Delayed creatinine rise may occur after 5-7 days.',
    'When combination is necessary (e.g., MRSA + Gram-negative coverage), monitor renal function daily. Use vancomycin AUC-guided dosing (target AUC/MIC 400-600). Use extended-interval aminoglycoside dosing and limit duration.',
    'Multiple clinical studies documenting additive nephrotoxicity. IDSA guidelines acknowledge the risk.',
  ),

  // ── Absorption Interactions ──────────────────

  tetracyclines_antacids: di(
    'tetracyclines_antacids', 'Tetracyclines (Doxycycline, Tetracycline)', 'Antacids/Calcium/Iron/Dairy',
    'absorption',
    'Polyvalent cations (Ca2+, Mg2+, Al3+, Fe2+/3+) form insoluble chelation complexes with tetracyclines in the GI tract, dramatically reducing oral absorption. The chelate cannot cross the intestinal mucosa.',
    'major',
    'Subtherapeutic antibiotic levels leading to treatment failure. Absorption can be reduced by 50-90% depending on the cation and dose. May promote antimicrobial resistance.',
    'Separate tetracyclines from antacids, calcium, iron, and dairy by at least 2 hours before or 4 hours after. Doxycycline is somewhat less affected than tetracycline but separation is still recommended.',
    'Classic pharmacokinetic interaction established in the 1960s. Consistent data across multiple studies.',
  ),

  levothyroxine_calcium_iron: di(
    'levothyroxine_calcium_iron', 'Levothyroxine', 'Calcium/Iron/Antacids/PPIs',
    'absorption',
    'Calcium, iron, and aluminum-containing antacids form complexes with levothyroxine in the GI tract, reducing absorption. PPIs raise gastric pH, impairing levothyroxine dissolution (which requires acidic environment).',
    'moderate',
    'Subtherapeutic thyroid hormone levels leading to hypothyroid symptoms and elevated TSH. Clinically significant changes in TSH can occur.',
    'Take levothyroxine on an empty stomach 30-60 minutes before food. Separate from calcium and iron supplements by at least 4 hours. Monitor TSH 6-8 weeks after starting interacting medication. Consider liquid or softgel formulation with PPIs.',
    'Multiple pharmacokinetic studies. Clinical significance well-documented with TSH changes.',
  ),

  fluoroquinolones_cations: di(
    'fluoroquinolones_cations', 'Fluoroquinolones', 'Polyvalent Cations (Antacids, Iron, Calcium, Zinc)',
    'absorption',
    'Similar to tetracyclines, fluoroquinolones form chelation complexes with polyvalent cations, reducing GI absorption. The 4-oxo-3-carboxylic acid moiety is the chelation site.',
    'major',
    'Treatment failure due to subtherapeutic antibiotic levels. Ciprofloxacin absorption reduced by up to 90% with concurrent aluminum/magnesium antacids.',
    'Administer fluoroquinolone 2 hours before or 6 hours after cation-containing products. Applies to antacids, sucralfate, iron, calcium, zinc, and multivitamins with minerals.',
    'Well-established absorption interaction with extensive pharmacokinetic data. Consistent across the fluoroquinolone class.',
  ),

  // ── Hepatotoxic ──────────────────────────────

  acetaminophen_alcohol: di(
    'acetaminophen_alcohol', 'Acetaminophen', 'Chronic Alcohol Use',
    'hepatotoxic',
    'Chronic alcohol induces CYP2E1, increasing acetaminophen conversion to the hepatotoxic metabolite NAPQI. Simultaneously, chronic alcohol depletes glutathione stores needed to detoxify NAPQI. Dual mechanism dramatically lowers the threshold for hepatotoxicity.',
    'major',
    'Acute hepatic necrosis at lower acetaminophen doses (potentially <4g/day in alcoholics). Fulminant hepatic failure requiring transplant or causing death.',
    'Limit acetaminophen to <2g/day in chronic alcohol users. Educate patients that OTC cold/flu products often contain hidden acetaminophen. Avoid combination when possible in heavy drinkers. Consider alternative analgesics.',
    'Extensive literature on alcohol-acetaminophen syndrome. FDA max dose reduced to 3g/day for general population; experts recommend 2g/day for alcohol users.',
  ),

  isoniazid_rifampin_hepatotoxicity: di(
    'isoniazid_rifampin_hepatotoxicity', 'Isoniazid', 'Rifampin',
    'hepatotoxic',
    'Both agents are independently hepatotoxic. Rifampin induces CYP2E1, increasing hydrazine (hepatotoxic metabolite of isoniazid) formation. Combined hepatotoxicity is greater than additive.',
    'major',
    'Drug-induced liver injury with incidence of 2-6% (vs ~1% with either alone). Ranges from asymptomatic transaminase elevation to fatal fulminant hepatic failure.',
    'Monitor LFTs at baseline, 2 weeks, then monthly during combination therapy. Educate patients on hepatotoxicity symptoms (jaundice, dark urine, abdominal pain, fatigue). Stop both drugs if ALT >3x ULN with symptoms or >5x ULN without symptoms.',
    'ATS/IDSA TB treatment guidelines. Well-recognized additive hepatotoxicity in clinical trials and surveillance data.',
  ),

  statins_fibrates: di(
    'statins_fibrates', 'Statins', 'Fibrates (Gemfibrozil)',
    'hepatotoxic',
    'Gemfibrozil inhibits OATP1B1 (hepatic uptake transporter) and glucuronidation of statins, markedly increasing statin systemic exposure. This dramatically increases myotoxicity risk. Fenofibrate has minimal effect on these pathways.',
    'major',
    'Rhabdomyolysis risk increased 5-10 fold with gemfibrozil + statin (especially cerivastatin, which was withdrawn). Myoglobinuria, acute kidney injury, hyperkalemia, and death.',
    'Avoid gemfibrozil with statins (especially simvastatin and lovastatin). If a fibrate is needed, use fenofibrate which does not inhibit statin glucuronidation. FDA contraindicates gemfibrozil + statin combination.',
    'FDA contraindication based on pharmacokinetic data and post-marketing rhabdomyolysis reports. Cerivastatin withdrawal was largely driven by gemfibrozil combination.',
  ),

  valproate_lamotrigine: di(
    'valproate_lamotrigine', 'Valproate', 'Lamotrigine',
    'hepatotoxic',
    'Valproate inhibits UGT-mediated glucuronidation of lamotrigine, doubling its half-life and plasma levels. This pharmacokinetic interaction is compounded by additive effects on hepatic function and potential for SJS/TEN.',
    'major',
    'Doubled lamotrigine levels increasing risk of SJS/TEN (especially during titration), dizziness, ataxia, and diplopia. Can be fatal.',
    'Reduce lamotrigine target dose by 50% when used with valproate. Use the specific slower titration schedule designed for valproate co-administration. Start at 25mg every other day. Monitor for rash.',
    'Well-established pharmacokinetic interaction. Lamotrigine prescribing information includes specific dosing for valproate combination.',
  ),

  // ── Additional Clinically Important ──────────

  maois_tyramine: di(
    'maois_tyramine', 'MAOIs (Phenelzine, Tranylcypromine)', 'Tyramine-Rich Foods (Aged Cheese, Wine, Fermented Foods)',
    'pharmacodynamic',
    'MAOIs inhibit intestinal and hepatic MAO-A, which normally metabolizes dietary tyramine. Unmetabolized tyramine enters the systemic circulation and displaces norepinephrine from synaptic vesicles, causing massive sympathomimetic surge.',
    'major',
    'Hypertensive crisis: severe headache, hypertension (>180/120 mmHg), diaphoresis, nausea, vomiting, intracranial hemorrhage, stroke, and death.',
    'Strict tyramine-restricted diet while on MAOI and for 2 weeks after discontinuation. Educate patient with written dietary guidelines. Have phentolamine or nifedipine available for emergencies. Consider selegiline transdermal (lower dietary restriction at low dose).',
    'Classic interaction known since the 1960s. Remains the primary reason MAOIs are underutilized despite efficacy in treatment-resistant depression.',
  ),

  opioids_benzodiazepines: di(
    'opioids_benzodiazepines', 'Opioids', 'Benzodiazepines',
    'pharmacodynamic',
    'Both classes cause CNS depression via distinct mechanisms (mu-opioid receptors and GABA-A receptors). Combined respiratory depression is synergistic rather than merely additive, dramatically lowering the threshold for fatal respiratory arrest.',
    'major',
    'Respiratory depression, profound sedation, coma, and death. The combination is the leading cause of prescription drug overdose death. Risk is highest during initiation and dose escalation.',
    'FDA black box warning on both classes. Avoid combination unless no alternative. If co-prescribed, use lowest doses, slow titration, and counsel on respiratory depression signs. Consider naloxone prescription for at-risk patients.',
    'FDA 2016 black box warning. CDC Opioid Prescribing Guidelines. Epidemiologic data showing exponential increase in overdose death risk with combination.',
  ),

  opioids_gabapentinoids: di(
    'opioids_gabapentinoids', 'Opioids', 'Gabapentinoids (Gabapentin, Pregabalin)',
    'pharmacodynamic',
    'Gabapentinoids enhance CNS depression when combined with opioids through complementary depressant mechanisms. Gabapentinoids modulate calcium channels while opioids act on mu receptors; combined sedation and respiratory depression exceed expectations.',
    'major',
    'Increased risk of respiratory depression, overdose, and death. Observational studies show 50-60% increased opioid-related death risk when gabapentinoids are co-prescribed.',
    'FDA added warnings in 2019. Avoid combination when possible. If necessary, start gabapentinoid at lowest dose with careful titration. Monitor for sedation and respiratory depression. Consider non-gabapentinoid adjuvant analgesia.',
    'FDA 2019 safety communication. Multiple large epidemiologic studies showing increased overdose risk.',
  ),

  carbamazepine_valproate: di(
    'carbamazepine_valproate', 'Carbamazepine', 'Valproate',
    'cyp450',
    'Bidirectional interaction: carbamazepine induces valproate metabolism (reducing levels by ~50%). Valproate inhibits epoxide hydrolase, increasing carbamazepine-10,11-epoxide (active, toxic metabolite) without changing parent drug levels.',
    'major',
    'Reduced valproate efficacy (seizure breakthrough) and carbamazepine-epoxide toxicity (diplopia, ataxia, nausea) even with "therapeutic" carbamazepine levels (since epoxide is not routinely measured).',
    'Monitor both drug levels and carbamazepine-epoxide level if available. Increase valproate dose as needed. Watch for epoxide toxicity signs even with normal carbamazepine levels. Consider alternative combinations.',
    'Well-characterized bidirectional interaction. Important for epilepsy management.',
  ),

  cyclosporine_nsaids: di(
    'cyclosporine_nsaids', 'Cyclosporine', 'NSAIDs',
    'nephrotoxic',
    'Both agents reduce renal blood flow: cyclosporine causes afferent arteriolar vasoconstriction; NSAIDs block prostaglandin-mediated vasodilation. Combined effect severely compromises renal perfusion. Cyclosporine also increases NSAID levels.',
    'major',
    'Accelerated nephrotoxicity with risk of acute and chronic kidney injury. Blood pressure elevation and hyperkalemia may also occur.',
    'Avoid NSAIDs in transplant patients on cyclosporine when possible. If needed, use lowest dose for shortest duration. Monitor creatinine and blood pressure closely. Consider acetaminophen or topical analgesics as alternatives.',
    'Transplant medicine literature and cyclosporine labeling. Well-recognized interaction in solid organ transplant management.',
  ),

  ssris_anticoagulants: di(
    'ssris_anticoagulants', 'SSRIs', 'Anticoagulants (Warfarin, DOACs)',
    'bleeding-risk',
    'SSRIs inhibit serotonin reuptake into platelets, depleting platelet serotonin stores needed for aggregation. This impairs hemostasis independently of the anticoagulant effect, producing additive bleeding risk.',
    'moderate',
    'Increased risk of GI bleeding (2-3x with SSRI + anticoagulant vs anticoagulant alone), bruising, and other hemorrhagic events. Upper GI bleeding is the most common manifestation.',
    'Consider PPI gastroprotection if combining SSRI + anticoagulant, especially with additional risk factors (age >65, history of GI bleeding, concurrent NSAID). Monitor for bleeding signs. Consider mirtazapine or bupropion as alternatives with lower bleeding risk.',
    'Meta-analyses showing significantly increased bleeding risk. European guidelines recommend gastroprotection with the combination.',
  ),

  spironolactone_ace_k: di(
    'spironolactone_ace_k', 'Spironolactone', 'ACE Inhibitors + High-Potassium Diet',
    'renal',
    'Spironolactone blocks aldosterone-mediated K+ secretion in collecting duct. ACE inhibitors reduce aldosterone production. High dietary potassium provides exogenous K+ load. Triple mechanism overwhelms compensatory potassium excretion.',
    'major',
    'Dangerous hyperkalemia (K+ >6.0) causing cardiac conduction abnormalities, muscular weakness, and risk of cardiac arrest.',
    'Educate patients on dietary potassium restriction. Avoid potassium-rich salt substitutes (KCl). Monitor serum K+ within 3-7 days of starting or dose change. Use low-dose spironolactone (25mg). Maintain eGFR monitoring.',
    'Post-RALES hyperkalemia studies. Clinical practice guidelines for heart failure management.',
  ),

  clozapine_carbamazepine: di(
    'clozapine_carbamazepine', 'Clozapine', 'Carbamazepine',
    'pharmacodynamic',
    'Carbamazepine induces CYP1A2 and CYP3A4, reducing clozapine levels. More dangerously, both agents independently suppress bone marrow. The additive myelosuppressive effect dramatically increases agranulocytosis risk.',
    'major',
    'Fatal agranulocytosis from additive bone marrow suppression. Absolute neutrophil count can drop precipitously. Also reduced clozapine efficacy from enzyme induction.',
    'Contraindicated. Do not use carbamazepine concurrently with clozapine. Use valproate, lamotrigine, or other non-myelosuppressive anticonvulsants/mood stabilizers. If seizure prophylaxis is needed for clozapine, use valproate.',
    'Clozapine labeling contraindicates concurrent myelosuppressive agents. Case reports of fatal agranulocytosis with combination.',
  ),

  sildenafil_nitrates: di(
    'sildenafil_nitrates', 'PDE5 Inhibitors (Sildenafil, Tadalafil)', 'Nitrates (Nitroglycerin, Isosorbide)',
    'pharmacodynamic',
    'PDE5 inhibitors block cGMP degradation while nitrates stimulate cGMP production via guanylyl cyclase activation. Synergistic cGMP accumulation causes profound vasodilation and catastrophic hypotension.',
    'major',
    'Severe refractory hypotension (systolic BP < 70 mmHg), syncope, myocardial infarction, and death. Cannot be reversed with standard vasopressors.',
    'Absolutely contraindicated. Ensure 24 hours between sildenafil/vardenafil and nitrate use, or 48 hours for tadalafil (longer half-life). Applies to all nitrate forms including sublingual, transdermal, and recreational (poppers/amyl nitrite).',
    'Fatal case reports and pharmacologic rationale. FDA contraindication in all PDE5 inhibitor labeling.',
  ),

  allopurinol_azathioprine: di(
    'allopurinol_azathioprine', 'Allopurinol', 'Azathioprine/6-Mercaptopurine',
    'pharmacokinetic',
    'Azathioprine is converted to 6-MP, which is metabolized by xanthine oxidase to inactive metabolites. Allopurinol inhibits xanthine oxidase, dramatically increasing 6-MP levels and causing toxic accumulation of thioguanine nucleotides.',
    'major',
    'Severe pancytopenia and fatal bone marrow suppression from 3-5 fold increases in 6-MP active metabolite levels. Onset may be delayed by several weeks.',
    'Reduce azathioprine/6-MP dose by 67-75% if allopurinol cannot be avoided. Monitor CBC weekly for first 8 weeks, then monthly. Consider febuxostat as alternative xanthine oxidase inhibitor (also interacts, but some data suggest less severity).',
    'Well-established lethal interaction. Azathioprine and 6-MP labeling include warnings. Dose reduction guidelines well-documented.',
  ),

  ssris_nsaids_bleeding: di(
    'ssris_nsaids_bleeding', 'SSRIs', 'NSAIDs',
    'bleeding-risk',
    'SSRIs deplete platelet serotonin (needed for platelet aggregation). NSAIDs inhibit COX-1-dependent thromboxane A2 production and directly injure GI mucosa. Combined antiplatelet effect plus mucosal injury synergistically increases GI bleeding risk.',
    'moderate',
    'GI bleeding risk increased 6-15 fold compared to neither drug alone. Upper GI bleeding, epistaxis, bruising, and prolonged surgical bleeding.',
    'Consider PPI gastroprotection if combination is necessary. Evaluate need for NSAID; acetaminophen may suffice. Short-term, low-dose NSAIDs are lower risk. Counsel patients on bleeding signs (black stools, hematemesis).',
    'Multiple cohort studies and meta-analyses. Risk is additive to multiplicative depending on additional risk factors.',
  ),

  ace_inhibitors_arbs: di(
    'ace_inhibitors_arbs', 'ACE Inhibitors', 'ARBs (Dual RAAS Blockade)',
    'pharmacodynamic',
    'Both agents suppress the RAAS at different points (ACE conversion vs AT1 receptor). Dual blockade provides no additional benefit in most patients but significantly increases adverse effects from excessive RAAS suppression.',
    'major',
    'Hyperkalemia, hypotension, acute kidney injury, and syncope. ONTARGET trial showed no cardiovascular benefit and significant harm from dual blockade in most populations.',
    'Avoid dual RAAS blockade. Choose either ACE inhibitor or ARB, not both. Exception: nephrologist-supervised proteinuria management in very select patients. Never add aliskiren to ACE + ARB.',
    'ONTARGET and VA NEPHRON-D trials. FDA warning against dual RAAS blockade. ACC/AHA guidelines recommend against combination.',
  ),
};

// ============================================
// Utility Functions
// ============================================

/**
 * Retrieve a drug interaction entry by its ID.
 */
export function getDrugInteraction(id: string): DrugInteractionEntry | undefined {
  return DRUG_INTERACTION_ENTRIES[id];
}

/**
 * Search drug interactions by case-insensitive query string.
 * Matches against drug names, mechanism, clinical effect, and management.
 */
export function searchDrugInteractions(query: string): DrugInteractionEntry[] {
  const q = query.toLowerCase();
  return Object.values(DRUG_INTERACTION_ENTRIES).filter((entry) => {
    return (
      entry.drug1.toLowerCase().includes(q) ||
      entry.drug2.toLowerCase().includes(q) ||
      entry.mechanism.toLowerCase().includes(q) ||
      entry.clinicalEffect.toLowerCase().includes(q) ||
      entry.management.toLowerCase().includes(q) ||
      entry.category.toLowerCase().includes(q)
    );
  });
}

/**
 * Get all interactions for a specific drug (matches drug1 or drug2, case-insensitive).
 */
export function getInteractionsForDrug(drugName: string): DrugInteractionEntry[] {
  const q = drugName.toLowerCase();
  return Object.values(DRUG_INTERACTION_ENTRIES).filter((entry) => {
    return entry.drug1.toLowerCase().includes(q) || entry.drug2.toLowerCase().includes(q);
  });
}

/**
 * Get all interactions of a specific category.
 */
export function getInteractionsByCategory(category: InteractionCategory): DrugInteractionEntry[] {
  return Object.values(DRUG_INTERACTION_ENTRIES).filter((entry) => entry.category === category);
}

/**
 * Get all interactions of a specific severity level.
 */
export function getInteractionsBySeverity(severity: DrugInteractionEntry['severity']): DrugInteractionEntry[] {
  return Object.values(DRUG_INTERACTION_ENTRIES).filter((entry) => entry.severity === severity);
}

/**
 * Get total number of drug interactions in the database.
 */
export function getDrugInteractionCount(): number {
  return Object.keys(DRUG_INTERACTION_ENTRIES).length;
}

/**
 * Check if two drugs have a known interaction (case-insensitive partial match).
 * Returns all matching interactions.
 */
export function checkInteraction(drugA: string, drugB: string): DrugInteractionEntry[] {
  const a = drugA.toLowerCase();
  const b = drugB.toLowerCase();
  return Object.values(DRUG_INTERACTION_ENTRIES).filter((entry) => {
    const d1 = entry.drug1.toLowerCase();
    const d2 = entry.drug2.toLowerCase();
    return (
      (d1.includes(a) && d2.includes(b)) ||
      (d1.includes(b) && d2.includes(a))
    );
  });
}
