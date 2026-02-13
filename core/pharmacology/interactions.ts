/**
 * Drug-Drug Interactions Database
 *
 * Comprehensive database of clinically significant drug interactions
 * with mechanisms, severity, and management recommendations.
 */

import type { DrugInteraction } from './types.js';

// ============================================
// Interaction Severity Definitions
// ============================================

export type InteractionSeverity = 'contraindicated' | 'major' | 'moderate' | 'minor';

export interface DrugInteractionEntry {
  id: string;
  drug1: string;
  drug1Names: string[];
  drug2: string;
  drug2Names: string[];
  severity: InteractionSeverity;
  type: 'pharmacokinetic' | 'pharmacodynamic';
  mechanism: string;
  effect: string;
  management: string;
  clinicalSignificance: string;
  evidenceLevel: 'established' | 'probable' | 'suspected' | 'theoretical';
  monitoring: string[];
  affectedSystems: string[];
  onsetTiming: 'immediate' | 'rapid' | 'delayed' | 'variable';
  documentation: string;
}

// ============================================
// Cardiovascular Drug Interactions
// ============================================

export const CARDIOVASCULAR_INTERACTIONS: DrugInteractionEntry[] = [
  // Beta-blockers + Calcium Channel Blockers
  {
    id: 'bb-ccb-nondhp',
    drug1: 'metoprolol',
    drug1Names: ['metoprolol', 'lopressor', 'toprol-xl'],
    drug2: 'verapamil',
    drug2Names: ['verapamil', 'calan', 'verelan', 'isoptin'],
    severity: 'major',
    type: 'pharmacodynamic',
    mechanism: 'Both agents depress cardiac conduction (SA and AV node) and contractility',
    effect: 'Risk of severe bradycardia, heart block, and hypotension. May precipitate heart failure.',
    management: 'Avoid combination if possible. If used together, monitor closely for bradycardia and heart block. Start with low doses.',
    clinicalSignificance: 'Can cause clinically significant cardiac depression requiring intervention',
    evidenceLevel: 'established',
    monitoring: ['Heart rate', 'Blood pressure', 'ECG', 'Signs of heart failure'],
    affectedSystems: ['cardiovascular'],
    onsetTiming: 'rapid',
    documentation: 'Well-documented; contraindicated by many guidelines for IV verapamil + beta-blocker',
  },
  {
    id: 'bb-ccb-diltiazem',
    drug1: 'metoprolol',
    drug1Names: ['metoprolol', 'lopressor', 'toprol-xl', 'carvedilol', 'coreg', 'bisoprolol', 'zebeta', 'atenolol', 'tenormin'],
    drug2: 'diltiazem',
    drug2Names: ['diltiazem', 'cardizem', 'tiazac', 'cartia xt'],
    severity: 'major',
    type: 'pharmacodynamic',
    mechanism: 'Additive negative chronotropic and dromotropic effects on cardiac conduction system',
    effect: 'Increased risk of bradycardia, AV block, and hypotension',
    management: 'Use with caution. Monitor heart rate and BP closely. Consider alternative if HR <50 or symptomatic bradycardia.',
    clinicalSignificance: 'May require dose adjustment or alternative therapy',
    evidenceLevel: 'established',
    monitoring: ['Heart rate', 'Blood pressure', 'ECG if symptomatic'],
    affectedSystems: ['cardiovascular'],
    onsetTiming: 'rapid',
    documentation: 'Case reports and clinical experience support this interaction',
  },

  // ACE Inhibitors + Potassium
  {
    id: 'acei-potassium',
    drug1: 'lisinopril',
    drug1Names: ['lisinopril', 'zestril', 'prinivil', 'enalapril', 'vasotec', 'ramipril', 'altace', 'benazepril', 'lotensin'],
    drug2: 'potassium chloride',
    drug2Names: ['potassium chloride', 'k-dur', 'klor-con', 'potassium', 'k+', 'potassium supplements'],
    severity: 'major',
    type: 'pharmacodynamic',
    mechanism: 'ACE inhibitors reduce aldosterone, decreasing potassium excretion. Potassium supplements add to this effect.',
    effect: 'Hyperkalemia risk, which can cause cardiac arrhythmias and arrest',
    management: 'Avoid routine potassium supplementation. Monitor potassium levels closely. Use with caution in renal impairment.',
    clinicalSignificance: 'Potentially life-threatening hyperkalemia',
    evidenceLevel: 'established',
    monitoring: ['Serum potassium', 'Renal function', 'ECG if K+ elevated'],
    affectedSystems: ['cardiovascular', 'renal'],
    onsetTiming: 'delayed',
    documentation: 'Well-established in clinical practice and literature',
  },
  {
    id: 'acei-arb',
    drug1: 'lisinopril',
    drug1Names: ['lisinopril', 'zestril', 'prinivil', 'enalapril', 'vasotec', 'ramipril', 'altace'],
    drug2: 'losartan',
    drug2Names: ['losartan', 'cozaar', 'valsartan', 'diovan', 'olmesartan', 'benicar', 'irbesartan', 'avapro', 'candesartan', 'atacand'],
    severity: 'major',
    type: 'pharmacodynamic',
    mechanism: 'Both block the renin-angiotensin system at different points, causing excessive RAAS inhibition',
    effect: 'Increased risk of hypotension, hyperkalemia, and acute kidney injury without additional clinical benefit',
    management: 'Do NOT combine ACE inhibitor and ARB. Choose one class. ONTARGET trial showed no benefit and more harm.',
    clinicalSignificance: 'No benefit, increased harm. Avoid combination.',
    evidenceLevel: 'established',
    monitoring: ['Blood pressure', 'Potassium', 'Creatinine'],
    affectedSystems: ['cardiovascular', 'renal'],
    onsetTiming: 'delayed',
    documentation: 'ONTARGET trial established lack of benefit with increased adverse events',
  },

  // ACE Inhibitors + NSAIDs
  {
    id: 'acei-nsaid',
    drug1: 'lisinopril',
    drug1Names: ['lisinopril', 'zestril', 'prinivil', 'enalapril', 'vasotec', 'ramipril', 'altace', 'benazepril', 'lotensin', 'captopril', 'capoten'],
    drug2: 'ibuprofen',
    drug2Names: ['ibuprofen', 'advil', 'motrin', 'naproxen', 'aleve', 'naprosyn', 'indomethacin', 'indocin', 'meloxicam', 'mobic', 'celecoxib', 'celebrex', 'diclofenac', 'voltaren', 'ketorolac', 'toradol'],
    severity: 'moderate',
    type: 'pharmacodynamic',
    mechanism: 'NSAIDs inhibit prostaglandins which are needed for ACE inhibitor effects on afferent arteriole',
    effect: 'Reduced antihypertensive effect. Increased risk of acute kidney injury, especially with diuretics (triple whammy).',
    management: 'Monitor BP closely. Use lowest effective NSAID dose for shortest duration. Avoid in patients on diuretics + ACE-I.',
    clinicalSignificance: 'May reduce BP control and increase AKI risk',
    evidenceLevel: 'established',
    monitoring: ['Blood pressure', 'Serum creatinine', 'Potassium'],
    affectedSystems: ['cardiovascular', 'renal'],
    onsetTiming: 'delayed',
    documentation: 'Multiple studies demonstrate this interaction',
  },

  // Statins + CYP3A4 Inhibitors
  {
    id: 'statin-clarithromycin',
    drug1: 'atorvastatin',
    drug1Names: ['atorvastatin', 'lipitor', 'simvastatin', 'zocor', 'lovastatin', 'mevacor', 'altoprev'],
    drug2: 'clarithromycin',
    drug2Names: ['clarithromycin', 'biaxin', 'erythromycin', 'ery-tab', 'e-mycin'],
    severity: 'major',
    type: 'pharmacokinetic',
    mechanism: 'Macrolide antibiotics inhibit CYP3A4, markedly increasing statin plasma concentrations',
    effect: 'Greatly increased risk of myopathy and rhabdomyolysis',
    management: 'Hold statin during clarithromycin/erythromycin course, or use azithromycin (minimal CYP3A4 inhibition).',
    clinicalSignificance: 'Case reports of rhabdomyolysis and death',
    evidenceLevel: 'established',
    monitoring: ['Muscle symptoms', 'CK if symptomatic'],
    affectedSystems: ['musculoskeletal', 'hepatic'],
    onsetTiming: 'delayed',
    documentation: 'FDA warnings and multiple case reports',
  },
  {
    id: 'statin-gemfibrozil',
    drug1: 'simvastatin',
    drug1Names: ['simvastatin', 'zocor', 'atorvastatin', 'lipitor', 'lovastatin', 'mevacor', 'rosuvastatin', 'crestor', 'pravastatin', 'pravachol'],
    drug2: 'gemfibrozil',
    drug2Names: ['gemfibrozil', 'lopid'],
    severity: 'contraindicated',
    type: 'pharmacokinetic',
    mechanism: 'Gemfibrozil inhibits statin glucuronidation via OATP1B1 and UGT, dramatically increasing statin exposure',
    effect: 'High risk of severe myopathy and rhabdomyolysis',
    management: 'Contraindicated with most statins. If fibrate needed, use fenofibrate which has minimal interaction.',
    clinicalSignificance: 'Multiple cases of rhabdomyolysis and acute renal failure',
    evidenceLevel: 'established',
    monitoring: ['Avoid combination'],
    affectedSystems: ['musculoskeletal', 'renal'],
    onsetTiming: 'delayed',
    documentation: 'FDA contraindication for most statins with gemfibrozil',
  },

  // Anticoagulant Interactions
  {
    id: 'warfarin-nsaid',
    drug1: 'warfarin',
    drug1Names: ['warfarin', 'coumadin', 'jantoven'],
    drug2: 'ibuprofen',
    drug2Names: ['ibuprofen', 'advil', 'motrin', 'naproxen', 'aleve', 'naprosyn', 'aspirin', 'ketorolac', 'toradol', 'meloxicam', 'mobic', 'celecoxib', 'celebrex', 'diclofenac', 'voltaren', 'piroxicam', 'feldene'],
    severity: 'major',
    type: 'pharmacodynamic',
    mechanism: 'NSAIDs inhibit platelet function and damage GI mucosa; warfarin inhibits clotting factors',
    effect: 'Significantly increased risk of GI bleeding and other hemorrhage',
    management: 'Avoid if possible. If necessary, use lowest dose for shortest time. Consider GI protection with PPI.',
    clinicalSignificance: '3-6 fold increased risk of GI bleeding',
    evidenceLevel: 'established',
    monitoring: ['Signs of bleeding', 'Hemoglobin', 'Stool guaiac', 'INR'],
    affectedSystems: ['hematologic', 'gastrointestinal'],
    onsetTiming: 'variable',
    documentation: 'Extensive epidemiologic data',
  },
  {
    id: 'warfarin-antibiotics',
    drug1: 'warfarin',
    drug1Names: ['warfarin', 'coumadin', 'jantoven'],
    drug2: 'ciprofloxacin',
    drug2Names: ['ciprofloxacin', 'cipro', 'levofloxacin', 'levaquin', 'moxifloxacin', 'avelox', 'metronidazole', 'flagyl', 'fluconazole', 'diflucan', 'trimethoprim-sulfamethoxazole', 'bactrim', 'septra'],
    severity: 'major',
    type: 'pharmacokinetic',
    mechanism: 'Antibiotics inhibit CYP2C9 or vitamin K-producing gut flora, increasing warfarin effect',
    effect: 'Elevated INR and increased bleeding risk',
    management: 'Monitor INR more frequently. May need to reduce warfarin dose by 25-50% during antibiotic course.',
    clinicalSignificance: 'Can cause supratherapeutic INR and bleeding',
    evidenceLevel: 'established',
    monitoring: ['INR at least twice during antibiotic course', 'Signs of bleeding'],
    affectedSystems: ['hematologic'],
    onsetTiming: 'delayed',
    documentation: 'Well-documented; fluoroquinolones and metronidazole are particularly significant',
  },
  {
    id: 'doac-dronedarone',
    drug1: 'rivaroxaban',
    drug1Names: ['rivaroxaban', 'xarelto', 'apixaban', 'eliquis', 'edoxaban', 'savaysa', 'dabigatran', 'pradaxa'],
    drug2: 'dronedarone',
    drug2Names: ['dronedarone', 'multaq', 'amiodarone', 'pacerone', 'cordarone'],
    severity: 'major',
    type: 'pharmacokinetic',
    mechanism: 'Dronedarone and amiodarone inhibit P-glycoprotein and CYP3A4, increasing DOAC levels',
    effect: 'Increased DOAC exposure and bleeding risk',
    management: 'Reduce DOAC dose per labeling. For apixaban with dronedarone, reduce to 2.5mg BID if patient has 2+ of: age≥80, weight≤60kg, Cr≥1.5.',
    clinicalSignificance: 'Increased bleeding risk requiring dose adjustment',
    evidenceLevel: 'established',
    monitoring: ['Signs of bleeding', 'Renal function'],
    affectedSystems: ['hematologic'],
    onsetTiming: 'delayed',
    documentation: 'FDA labeling recommendations',
  },

  // Digoxin Interactions
  {
    id: 'digoxin-amiodarone',
    drug1: 'digoxin',
    drug1Names: ['digoxin', 'lanoxin', 'digitek'],
    drug2: 'amiodarone',
    drug2Names: ['amiodarone', 'pacerone', 'cordarone', 'nexterone'],
    severity: 'major',
    type: 'pharmacokinetic',
    mechanism: 'Amiodarone inhibits P-glycoprotein, reducing digoxin renal and nonrenal clearance',
    effect: 'Digoxin levels increase 70-100%, risk of digoxin toxicity',
    management: 'Reduce digoxin dose by 50% when starting amiodarone. Monitor digoxin levels and for toxicity.',
    clinicalSignificance: 'Near-universal increase in digoxin levels',
    evidenceLevel: 'established',
    monitoring: ['Digoxin level', 'Heart rate', 'Signs of toxicity (nausea, vision changes, arrhythmia)'],
    affectedSystems: ['cardiovascular'],
    onsetTiming: 'delayed',
    documentation: 'Well-characterized; dose reduction universally recommended',
  },
  {
    id: 'digoxin-verapamil',
    drug1: 'digoxin',
    drug1Names: ['digoxin', 'lanoxin', 'digitek'],
    drug2: 'verapamil',
    drug2Names: ['verapamil', 'calan', 'verelan', 'isoptin'],
    severity: 'major',
    type: 'pharmacokinetic',
    mechanism: 'Verapamil inhibits P-glycoprotein and renal tubular secretion of digoxin',
    effect: 'Digoxin levels increase 50-75%. Also additive effect on AV node conduction.',
    management: 'Reduce digoxin dose by 33-50%. Monitor digoxin levels. Watch for bradycardia and heart block.',
    clinicalSignificance: 'Increased digoxin toxicity risk plus additive cardiac effects',
    evidenceLevel: 'established',
    monitoring: ['Digoxin level', 'Heart rate', 'ECG'],
    affectedSystems: ['cardiovascular'],
    onsetTiming: 'delayed',
    documentation: 'Standard clinical knowledge',
  },
];

// ============================================
// Antiplatelet/Anticoagulant Interactions
// ============================================

export const ANTICOAGULANT_INTERACTIONS: DrugInteractionEntry[] = [
  {
    id: 'aspirin-clopidogrel',
    drug1: 'aspirin',
    drug1Names: ['aspirin', 'bayer', 'ecotrin', 'acetylsalicylic acid', 'asa'],
    drug2: 'clopidogrel',
    drug2Names: ['clopidogrel', 'plavix'],
    severity: 'moderate',
    type: 'pharmacodynamic',
    mechanism: 'Both inhibit platelet aggregation through different mechanisms (COX-1 vs P2Y12)',
    effect: 'Increased bleeding risk, but often clinically necessary for cardiovascular benefit',
    management: 'This is intentional dual antiplatelet therapy (DAPT). Monitor for bleeding. Use GI prophylaxis in high-risk patients.',
    clinicalSignificance: 'Intentional synergistic effect in most cases; monitor for bleeding',
    evidenceLevel: 'established',
    monitoring: ['Signs of bleeding', 'Hemoglobin if prolonged use'],
    affectedSystems: ['hematologic', 'gastrointestinal'],
    onsetTiming: 'immediate',
    documentation: 'Standard of care post-ACS and post-PCI',
  },
  {
    id: 'aspirin-ibuprofen-competition',
    drug1: 'aspirin',
    drug1Names: ['aspirin', 'bayer', 'ecotrin', 'acetylsalicylic acid', 'asa'],
    drug2: 'ibuprofen',
    drug2Names: ['ibuprofen', 'advil', 'motrin', 'naproxen', 'aleve', 'naprosyn'],
    severity: 'major',
    type: 'pharmacodynamic',
    mechanism: 'Ibuprofen blocks aspirin access to COX-1, preventing irreversible platelet inhibition',
    effect: 'Loss of aspirin cardioprotective effect if ibuprofen taken before aspirin',
    management: 'Take aspirin at least 30 min before ibuprofen, or 8 hours after. Consider acetaminophen alternative.',
    clinicalSignificance: 'May negate antiplatelet benefit of low-dose aspirin',
    evidenceLevel: 'established',
    monitoring: ['Advise on timing of medications'],
    affectedSystems: ['cardiovascular', 'hematologic'],
    onsetTiming: 'immediate',
    documentation: 'FDA advisory on timing of aspirin and NSAIDs',
  },
  {
    id: 'clopidogrel-omeprazole',
    drug1: 'clopidogrel',
    drug1Names: ['clopidogrel', 'plavix'],
    drug2: 'omeprazole',
    drug2Names: ['omeprazole', 'prilosec', 'esomeprazole', 'nexium'],
    severity: 'moderate',
    type: 'pharmacokinetic',
    mechanism: 'Omeprazole inhibits CYP2C19, reducing conversion of clopidogrel prodrug to active metabolite',
    effect: 'Reduced antiplatelet effect of clopidogrel (controversial clinical significance)',
    management: 'Consider pantoprazole (least CYP2C19 inhibition) or H2 blocker. Clinical outcome data are conflicting.',
    clinicalSignificance: 'FDA warning issued, but clinical outcome studies show mixed results',
    evidenceLevel: 'probable',
    monitoring: ['Clinical outcomes rather than platelet function tests'],
    affectedSystems: ['hematologic'],
    onsetTiming: 'delayed',
    documentation: 'FDA warning, but COGENT trial showed no difference in CV outcomes',
  },
  {
    id: 'warfarin-vitamin-k',
    drug1: 'warfarin',
    drug1Names: ['warfarin', 'coumadin', 'jantoven'],
    drug2: 'vitamin k',
    drug2Names: ['vitamin k', 'phytonadione', 'mephyton', 'vitamin k rich foods', 'kale', 'spinach', 'broccoli'],
    severity: 'moderate',
    type: 'pharmacodynamic',
    mechanism: 'Vitamin K provides substrate for synthesis of clotting factors that warfarin inhibits',
    effect: 'Reduced anticoagulant effect, subtherapeutic INR',
    management: 'Maintain consistent vitamin K intake. Do not drastically change dietary habits. Adjust warfarin as needed.',
    clinicalSignificance: 'Can cause INR fluctuations if intake varies significantly',
    evidenceLevel: 'established',
    monitoring: ['INR', 'Dietary vitamin K intake'],
    affectedSystems: ['hematologic'],
    onsetTiming: 'delayed',
    documentation: 'Fundamental to warfarin pharmacology',
  },
];

// ============================================
// Psychiatric Drug Interactions
// ============================================

export const PSYCHIATRIC_INTERACTIONS: DrugInteractionEntry[] = [
  // Serotonin Syndrome Risk
  {
    id: 'ssri-tramadol',
    drug1: 'sertraline',
    drug1Names: ['sertraline', 'zoloft', 'fluoxetine', 'prozac', 'paroxetine', 'paxil', 'citalopram', 'celexa', 'escitalopram', 'lexapro', 'fluvoxamine', 'luvox'],
    drug2: 'tramadol',
    drug2Names: ['tramadol', 'ultram', 'conzip'],
    severity: 'major',
    type: 'pharmacodynamic',
    mechanism: 'Both increase serotonin: SSRIs inhibit reuptake, tramadol inhibits reuptake and has serotonergic activity',
    effect: 'Risk of serotonin syndrome (agitation, hyperthermia, tachycardia, tremor, hyperreflexia)',
    management: 'Use with caution. Start with lower tramadol doses. Monitor for serotonin syndrome symptoms.',
    clinicalSignificance: 'Multiple case reports of serotonin syndrome',
    evidenceLevel: 'established',
    monitoring: ['Mental status', 'Vital signs', 'Neuromuscular signs'],
    affectedSystems: ['neurological', 'psychiatric'],
    onsetTiming: 'rapid',
    documentation: 'FDA warning; case reports and pharmacology support',
  },
  {
    id: 'ssri-maoi',
    drug1: 'sertraline',
    drug1Names: ['sertraline', 'zoloft', 'fluoxetine', 'prozac', 'paroxetine', 'paxil', 'citalopram', 'celexa', 'escitalopram', 'lexapro', 'venlafaxine', 'effexor', 'duloxetine', 'cymbalta'],
    drug2: 'phenelzine',
    drug2Names: ['phenelzine', 'nardil', 'tranylcypromine', 'parnate', 'isocarboxazid', 'marplan', 'selegiline', 'emsam', 'linezolid', 'zyvox'],
    severity: 'contraindicated',
    type: 'pharmacodynamic',
    mechanism: 'Extreme serotonin accumulation from combined reuptake inhibition and reduced degradation',
    effect: 'Life-threatening serotonin syndrome: hyperthermia, rigidity, autonomic instability, death',
    management: 'NEVER combine. Wait 2 weeks after stopping most SSRIs (5 weeks for fluoxetine) before starting MAOI.',
    clinicalSignificance: 'Fatal serotonin syndrome has occurred',
    evidenceLevel: 'established',
    monitoring: ['This combination should not occur'],
    affectedSystems: ['neurological', 'psychiatric'],
    onsetTiming: 'rapid',
    documentation: 'Absolute contraindication in all guidelines',
  },
  {
    id: 'ssri-triptans',
    drug1: 'sertraline',
    drug1Names: ['sertraline', 'zoloft', 'fluoxetine', 'prozac', 'paroxetine', 'paxil', 'citalopram', 'celexa', 'escitalopram', 'lexapro', 'venlafaxine', 'effexor', 'duloxetine', 'cymbalta'],
    drug2: 'sumatriptan',
    drug2Names: ['sumatriptan', 'imitrex', 'rizatriptan', 'maxalt', 'zolmitriptan', 'zomig', 'eletriptan', 'relpax', 'naratriptan', 'amerge', 'frovatriptan', 'frova', 'almotriptan', 'axert'],
    severity: 'moderate',
    type: 'pharmacodynamic',
    mechanism: 'Triptans are 5-HT1B/1D agonists; combined with serotonin reuptake inhibition may increase serotonin syndrome risk',
    effect: 'Potential serotonin syndrome, though clinical occurrence appears rare',
    management: 'FDA warning exists. Many experts consider combination safe in practice. Monitor for serotonin syndrome symptoms.',
    clinicalSignificance: 'FDA warning, but clinical significance debated; combination widely used',
    evidenceLevel: 'probable',
    monitoring: ['Symptoms of serotonin syndrome'],
    affectedSystems: ['neurological'],
    onsetTiming: 'rapid',
    documentation: 'FDA warning exists but based on theoretical concern; clinical experience suggests low risk',
  },

  // Benzodiazepine Interactions
  {
    id: 'benzo-opioid',
    drug1: 'alprazolam',
    drug1Names: ['alprazolam', 'xanax', 'lorazepam', 'ativan', 'diazepam', 'valium', 'clonazepam', 'klonopin', 'temazepam', 'restoril', 'triazolam', 'halcion'],
    drug2: 'oxycodone',
    drug2Names: ['oxycodone', 'oxycontin', 'percocet', 'roxicodone', 'hydrocodone', 'vicodin', 'norco', 'lortab', 'morphine', 'ms contin', 'fentanyl', 'duragesic', 'hydromorphone', 'dilaudid', 'methadone', 'tramadol', 'ultram', 'codeine', 'buprenorphine', 'suboxone'],
    severity: 'contraindicated',
    type: 'pharmacodynamic',
    mechanism: 'Both cause CNS depression through different mechanisms (GABA-A vs opioid receptors)',
    effect: 'Profound sedation, respiratory depression, coma, and death',
    management: 'FDA black box warning. Avoid concurrent use if possible. If necessary, use lowest doses and monitor closely.',
    clinicalSignificance: 'Major contributor to overdose deaths',
    evidenceLevel: 'established',
    monitoring: ['Respiratory rate', 'Oxygen saturation', 'Level of consciousness'],
    affectedSystems: ['neurological', 'respiratory'],
    onsetTiming: 'immediate',
    documentation: 'FDA black box warning issued 2016',
  },

  // Antipsychotic Interactions
  {
    id: 'antipsychotic-qt-prolongers',
    drug1: 'haloperidol',
    drug1Names: ['haloperidol', 'haldol', 'ziprasidone', 'geodon', 'thioridazine', 'mellaril', 'pimozide', 'orap'],
    drug2: 'sotalol',
    drug2Names: ['sotalol', 'betapace', 'amiodarone', 'pacerone', 'dofetilide', 'tikosyn', 'quinidine', 'procainamide', 'pronestyl', 'dronedarone', 'multaq', 'moxifloxacin', 'avelox', 'azithromycin', 'zithromax', 'ondansetron', 'zofran', 'methadone'],
    severity: 'major',
    type: 'pharmacodynamic',
    mechanism: 'Additive QT prolongation from multiple drugs blocking cardiac potassium channels',
    effect: 'Increased risk of Torsades de Pointes and sudden cardiac death',
    management: 'Avoid combinations. If unavoidable, obtain baseline ECG, correct electrolytes, monitor QTc.',
    clinicalSignificance: 'Risk of fatal arrhythmia',
    evidenceLevel: 'established',
    monitoring: ['ECG/QTc', 'Potassium', 'Magnesium'],
    affectedSystems: ['cardiovascular'],
    onsetTiming: 'variable',
    documentation: 'CredibleMeds QT Drug Lists and multiple case reports',
  },

  // Lithium Interactions
  {
    id: 'lithium-nsaid',
    drug1: 'lithium',
    drug1Names: ['lithium', 'lithobid', 'eskalith', 'lithonate'],
    drug2: 'ibuprofen',
    drug2Names: ['ibuprofen', 'advil', 'motrin', 'naproxen', 'aleve', 'naprosyn', 'indomethacin', 'indocin', 'meloxicam', 'mobic', 'celecoxib', 'celebrex', 'diclofenac', 'voltaren', 'piroxicam', 'feldene', 'ketorolac', 'toradol'],
    severity: 'major',
    type: 'pharmacokinetic',
    mechanism: 'NSAIDs reduce renal prostaglandins, decreasing renal blood flow and lithium clearance',
    effect: 'Increased lithium levels (20-60% increase), risk of lithium toxicity',
    management: 'Avoid NSAIDs if possible. If needed, monitor lithium levels closely. Reduce lithium dose.',
    clinicalSignificance: 'Can cause lithium toxicity (tremor, GI symptoms, confusion, seizures)',
    evidenceLevel: 'established',
    monitoring: ['Lithium level', 'Signs of toxicity', 'Renal function'],
    affectedSystems: ['neurological', 'renal'],
    onsetTiming: 'delayed',
    documentation: 'Well-established; all NSAIDs affect lithium to varying degrees',
  },
  {
    id: 'lithium-acei',
    drug1: 'lithium',
    drug1Names: ['lithium', 'lithobid', 'eskalith', 'lithonate'],
    drug2: 'lisinopril',
    drug2Names: ['lisinopril', 'zestril', 'prinivil', 'enalapril', 'vasotec', 'ramipril', 'altace', 'benazepril', 'lotensin', 'captopril', 'capoten', 'losartan', 'cozaar', 'valsartan', 'diovan'],
    severity: 'major',
    type: 'pharmacokinetic',
    mechanism: 'ACE inhibitors/ARBs reduce angiotensin II, decreasing aldosterone and sodium reabsorption, which increases lithium reabsorption',
    effect: 'Increased lithium levels (up to 4-fold reported), lithium toxicity risk',
    management: 'Use with caution. Monitor lithium levels closely when starting, stopping, or changing ACEI/ARB dose.',
    clinicalSignificance: 'Potentially severe lithium toxicity',
    evidenceLevel: 'established',
    monitoring: ['Lithium level', 'Signs of toxicity', 'Sodium', 'Renal function'],
    affectedSystems: ['neurological', 'renal'],
    onsetTiming: 'delayed',
    documentation: 'Case reports and pharmacokinetic studies',
  },
];

// ============================================
// Diabetes Drug Interactions
// ============================================

export const DIABETES_INTERACTIONS: DrugInteractionEntry[] = [
  {
    id: 'metformin-contrast',
    drug1: 'metformin',
    drug1Names: ['metformin', 'glucophage', 'glumetza', 'fortamet', 'riomet'],
    drug2: 'iodinated contrast',
    drug2Names: ['iodinated contrast', 'contrast dye', 'iv contrast', 'radiocontrast', 'iohexol', 'omnipaque', 'iodixanol', 'visipaque'],
    severity: 'major',
    type: 'pharmacokinetic',
    mechanism: 'Contrast can cause acute kidney injury, which impairs metformin excretion, leading to accumulation',
    effect: 'Increased risk of metformin-associated lactic acidosis if AKI occurs',
    management: 'Hold metformin at time of or before contrast. Resume 48 hours after if renal function stable.',
    clinicalSignificance: 'Rare but potentially fatal lactic acidosis',
    evidenceLevel: 'established',
    monitoring: ['Renal function before and 48h after contrast', 'Lactate if symptomatic'],
    affectedSystems: ['renal', 'metabolic'],
    onsetTiming: 'delayed',
    documentation: 'ACR guidelines; standard of care',
  },
  {
    id: 'sulfonylurea-azole',
    drug1: 'glipizide',
    drug1Names: ['glipizide', 'glucotrol', 'glyburide', 'diabeta', 'micronase', 'glynase', 'glimepiride', 'amaryl'],
    drug2: 'fluconazole',
    drug2Names: ['fluconazole', 'diflucan', 'miconazole', 'monistat', 'ketoconazole', 'nizoral', 'itraconazole', 'sporanox', 'voriconazole', 'vfend'],
    severity: 'major',
    type: 'pharmacokinetic',
    mechanism: 'Azole antifungals inhibit CYP2C9, which metabolizes sulfonylureas',
    effect: 'Increased sulfonylurea levels, prolonged and severe hypoglycemia',
    management: 'Monitor blood glucose closely. May need to reduce sulfonylurea dose by 50% or more.',
    clinicalSignificance: 'Severe, prolonged hypoglycemia reported',
    evidenceLevel: 'established',
    monitoring: ['Blood glucose', 'Symptoms of hypoglycemia'],
    affectedSystems: ['metabolic'],
    onsetTiming: 'delayed',
    documentation: 'Case reports and pharmacokinetic studies',
  },
  {
    id: 'insulin-betablocker',
    drug1: 'insulin',
    drug1Names: ['insulin', 'humalog', 'novolog', 'lantus', 'levemir', 'basaglar', 'tresiba', 'humulin', 'novolin', 'insulin aspart', 'insulin lispro', 'insulin glargine', 'insulin detemir', 'insulin degludec'],
    drug2: 'propranolol',
    drug2Names: ['propranolol', 'inderal', 'metoprolol', 'lopressor', 'toprol', 'atenolol', 'tenormin', 'nadolol', 'corgard', 'timolol', 'blocadren', 'carvedilol', 'coreg'],
    severity: 'moderate',
    type: 'pharmacodynamic',
    mechanism: 'Beta-blockers mask adrenergic symptoms of hypoglycemia (tachycardia, tremor, anxiety) and may impair gluconeogenesis',
    effect: 'Delayed recognition of hypoglycemia; may prolong hypoglycemia',
    management: 'Cardioselective beta-blockers (metoprolol, bisoprolol) are preferred. Educate patient that sweating remains as hypoglycemia warning sign.',
    clinicalSignificance: 'Important for patient education; rarely causes severe problems',
    evidenceLevel: 'established',
    monitoring: ['Blood glucose', 'Hypoglycemia awareness education'],
    affectedSystems: ['metabolic'],
    onsetTiming: 'variable',
    documentation: 'Well-known; part of diabetes education',
  },
  {
    id: 'sglt2-diuretic',
    drug1: 'empagliflozin',
    drug1Names: ['empagliflozin', 'jardiance', 'canagliflozin', 'invokana', 'dapagliflozin', 'farxiga', 'ertugliflozin', 'steglatro'],
    drug2: 'furosemide',
    drug2Names: ['furosemide', 'lasix', 'bumetanide', 'bumex', 'torsemide', 'demadex', 'hydrochlorothiazide', 'hctz', 'chlorthalidone', 'hygroton'],
    severity: 'moderate',
    type: 'pharmacodynamic',
    mechanism: 'Both cause diuresis and volume depletion through different mechanisms',
    effect: 'Increased risk of hypotension, dehydration, and acute kidney injury',
    management: 'Assess volume status before starting SGLT2 inhibitor. Consider reducing diuretic dose. Ensure adequate hydration.',
    clinicalSignificance: 'AKI and hypotension risk, especially in elderly',
    evidenceLevel: 'established',
    monitoring: ['Blood pressure', 'Renal function', 'Volume status'],
    affectedSystems: ['renal', 'cardiovascular'],
    onsetTiming: 'rapid',
    documentation: 'FDA labeling and clinical trial data',
  },
];

// ============================================
// Antibiotic Interactions
// ============================================

export const ANTIBIOTIC_INTERACTIONS: DrugInteractionEntry[] = [
  {
    id: 'fluoroquinolone-nsaid',
    drug1: 'ciprofloxacin',
    drug1Names: ['ciprofloxacin', 'cipro', 'levofloxacin', 'levaquin', 'moxifloxacin', 'avelox', 'ofloxacin', 'floxin', 'norfloxacin', 'noroxin'],
    drug2: 'ibuprofen',
    drug2Names: ['ibuprofen', 'advil', 'motrin', 'naproxen', 'aleve', 'naprosyn', 'meloxicam', 'mobic', 'indomethacin', 'indocin', 'piroxicam', 'feldene'],
    severity: 'moderate',
    type: 'pharmacodynamic',
    mechanism: 'Both inhibit GABA, lowering seizure threshold',
    effect: 'Increased risk of CNS stimulation and seizures',
    management: 'Use with caution in patients with seizure history. Consider acetaminophen for pain.',
    clinicalSignificance: 'Case reports of seizures; risk factors include renal impairment and seizure history',
    evidenceLevel: 'probable',
    monitoring: ['CNS symptoms', 'Seizure activity'],
    affectedSystems: ['neurological'],
    onsetTiming: 'variable',
    documentation: 'Case reports and pharmacology support',
  },
  {
    id: 'fluoroquinolone-theophylline',
    drug1: 'ciprofloxacin',
    drug1Names: ['ciprofloxacin', 'cipro'],
    drug2: 'theophylline',
    drug2Names: ['theophylline', 'theo-dur', 'uniphyl', 'elixophyllin', 'aminophylline'],
    severity: 'major',
    type: 'pharmacokinetic',
    mechanism: 'Ciprofloxacin inhibits CYP1A2, which metabolizes theophylline',
    effect: 'Increased theophylline levels (15-75%), risk of theophylline toxicity',
    management: 'Monitor theophylline levels. Reduce theophylline dose by 30-50%. Use alternative antibiotic if possible.',
    clinicalSignificance: 'Theophylline toxicity (tachycardia, seizures) reported',
    evidenceLevel: 'established',
    monitoring: ['Theophylline level', 'Heart rate', 'Signs of toxicity'],
    affectedSystems: ['respiratory', 'cardiovascular', 'neurological'],
    onsetTiming: 'delayed',
    documentation: 'Well-established; dose adjustment recommended',
  },
  {
    id: 'aminoglycoside-loop',
    drug1: 'gentamicin',
    drug1Names: ['gentamicin', 'garamycin', 'tobramycin', 'tobi', 'bethkis', 'amikacin', 'amikin', 'streptomycin'],
    drug2: 'furosemide',
    drug2Names: ['furosemide', 'lasix', 'bumetanide', 'bumex', 'ethacrynic acid', 'edecrin', 'torsemide', 'demadex'],
    severity: 'major',
    type: 'pharmacodynamic',
    mechanism: 'Both are ototoxic and nephrotoxic; additive toxicity',
    effect: 'Increased risk of permanent hearing loss and acute kidney injury',
    management: 'Avoid combination if possible. If necessary, monitor closely. Ensure adequate hydration.',
    clinicalSignificance: 'Can cause irreversible hearing loss',
    evidenceLevel: 'established',
    monitoring: ['Hearing assessment', 'Renal function', 'Drug levels'],
    affectedSystems: ['auditory', 'renal'],
    onsetTiming: 'delayed',
    documentation: 'Well-established; ethacrynic acid has highest ototoxicity risk',
  },
  {
    id: 'tetracycline-antacid',
    drug1: 'doxycycline',
    drug1Names: ['doxycycline', 'vibramycin', 'doryx', 'monodox', 'tetracycline', 'sumycin', 'minocycline', 'minocin', 'solodyn'],
    drug2: 'calcium carbonate',
    drug2Names: ['calcium carbonate', 'tums', 'caltrate', 'os-cal', 'aluminum hydroxide', 'maalox', 'mylanta', 'magnesium hydroxide', 'milk of magnesia', 'iron supplements', 'ferrous sulfate'],
    severity: 'major',
    type: 'pharmacokinetic',
    mechanism: 'Divalent and trivalent cations chelate with tetracyclines, forming insoluble complexes',
    effect: 'Dramatically reduced tetracycline absorption (up to 80-90% reduction)',
    management: 'Separate dosing by 2-4 hours. Take tetracycline 1 hour before or 2 hours after cations.',
    clinicalSignificance: 'Treatment failure if not separated appropriately',
    evidenceLevel: 'established',
    monitoring: ['Clinical response to antibiotic'],
    affectedSystems: ['gastrointestinal'],
    onsetTiming: 'immediate',
    documentation: 'Fundamental to tetracycline pharmacology',
  },
  {
    id: 'macrolide-statin',
    drug1: 'clarithromycin',
    drug1Names: ['clarithromycin', 'biaxin', 'erythromycin', 'ery-tab', 'e-mycin'],
    drug2: 'simvastatin',
    drug2Names: ['simvastatin', 'zocor', 'lovastatin', 'mevacor', 'atorvastatin', 'lipitor'],
    severity: 'major',
    type: 'pharmacokinetic',
    mechanism: 'Macrolides strongly inhibit CYP3A4, dramatically increasing statin levels',
    effect: 'High risk of rhabdomyolysis',
    management: 'Hold statin during macrolide course. Use azithromycin (does not inhibit CYP3A4) as alternative.',
    clinicalSignificance: 'Cases of fatal rhabdomyolysis reported',
    evidenceLevel: 'established',
    monitoring: ['Muscle symptoms', 'CK if symptomatic'],
    affectedSystems: ['musculoskeletal', 'renal'],
    onsetTiming: 'delayed',
    documentation: 'FDA warnings and black box on simvastatin labeling',
  },
];

// ============================================
// GI Drug Interactions
// ============================================

export const GI_INTERACTIONS: DrugInteractionEntry[] = [
  {
    id: 'ppi-clopidogrel',
    drug1: 'omeprazole',
    drug1Names: ['omeprazole', 'prilosec', 'esomeprazole', 'nexium'],
    drug2: 'clopidogrel',
    drug2Names: ['clopidogrel', 'plavix'],
    severity: 'moderate',
    type: 'pharmacokinetic',
    mechanism: 'Omeprazole inhibits CYP2C19, which converts clopidogrel prodrug to active metabolite',
    effect: 'Reduced antiplatelet effect (clinical significance debated)',
    management: 'FDA recommends avoiding omeprazole/esomeprazole. Pantoprazole or famotidine may be safer alternatives.',
    clinicalSignificance: 'FDA warning, but COGENT trial showed no CV outcome difference',
    evidenceLevel: 'probable',
    monitoring: ['Clinical outcomes'],
    affectedSystems: ['hematologic', 'cardiovascular'],
    onsetTiming: 'delayed',
    documentation: 'FDA warning; conflicting clinical outcome data',
  },
  {
    id: 'ppi-iron',
    drug1: 'omeprazole',
    drug1Names: ['omeprazole', 'prilosec', 'esomeprazole', 'nexium', 'lansoprazole', 'prevacid', 'pantoprazole', 'protonix', 'rabeprazole', 'aciphex'],
    drug2: 'ferrous sulfate',
    drug2Names: ['ferrous sulfate', 'feosol', 'slow fe', 'ferrous gluconate', 'fergon', 'ferrous fumarate', 'iron supplements'],
    severity: 'moderate',
    type: 'pharmacodynamic',
    mechanism: 'Gastric acid is required to convert ferric iron to absorbable ferrous form',
    effect: 'Reduced iron absorption, may lead to iron deficiency',
    management: 'Monitor iron studies with long-term PPI use. May need IV iron or ascorbic acid with oral iron.',
    clinicalSignificance: 'Clinically significant with long-term use',
    evidenceLevel: 'established',
    monitoring: ['Iron studies', 'Hemoglobin'],
    affectedSystems: ['hematologic'],
    onsetTiming: 'delayed',
    documentation: 'Pharmacology-based; clinical studies support',
  },
  {
    id: 'ppi-b12',
    drug1: 'omeprazole',
    drug1Names: ['omeprazole', 'prilosec', 'esomeprazole', 'nexium', 'lansoprazole', 'prevacid', 'pantoprazole', 'protonix', 'rabeprazole', 'aciphex'],
    drug2: 'vitamin b12',
    drug2Names: ['vitamin b12', 'cyanocobalamin', 'methylcobalamin', 'b12'],
    severity: 'moderate',
    type: 'pharmacodynamic',
    mechanism: 'Gastric acid required to release B12 from food proteins for absorption',
    effect: 'Reduced B12 absorption with chronic use, potential B12 deficiency',
    management: 'Monitor B12 levels with long-term PPI use (>2 years). Supplement if deficient.',
    clinicalSignificance: 'May cause anemia and neurological symptoms',
    evidenceLevel: 'established',
    monitoring: ['B12 level', 'CBC'],
    affectedSystems: ['neurological', 'hematologic'],
    onsetTiming: 'delayed',
    documentation: 'Epidemiologic studies and pharmacology support',
  },
  {
    id: 'antacid-fluoroquinolone',
    drug1: 'aluminum hydroxide',
    drug1Names: ['aluminum hydroxide', 'maalox', 'mylanta', 'magnesium hydroxide', 'milk of magnesia', 'calcium carbonate', 'tums'],
    drug2: 'ciprofloxacin',
    drug2Names: ['ciprofloxacin', 'cipro', 'levofloxacin', 'levaquin', 'moxifloxacin', 'avelox', 'ofloxacin'],
    severity: 'major',
    type: 'pharmacokinetic',
    mechanism: 'Divalent cations chelate fluoroquinolones, forming insoluble complexes',
    effect: 'Reduced fluoroquinolone absorption (up to 90% reduction)',
    management: 'Take fluoroquinolone 2 hours before or 6 hours after antacids',
    clinicalSignificance: 'Treatment failure if not separated',
    evidenceLevel: 'established',
    monitoring: ['Clinical response'],
    affectedSystems: ['gastrointestinal'],
    onsetTiming: 'immediate',
    documentation: 'FDA labeling; well-established',
  },
];

// ============================================
// Combined Interaction Database
// ============================================

export const ALL_INTERACTIONS: DrugInteractionEntry[] = [
  ...CARDIOVASCULAR_INTERACTIONS,
  ...ANTICOAGULANT_INTERACTIONS,
  ...PSYCHIATRIC_INTERACTIONS,
  ...DIABETES_INTERACTIONS,
  ...ANTIBIOTIC_INTERACTIONS,
  ...GI_INTERACTIONS,
];

// ============================================
// Interaction Lookup Functions
// ============================================

/**
 * Find interactions between two specific drugs
 */
export function findInteractionBetween(drug1: string, drug2: string): DrugInteractionEntry | null {
  const d1 = drug1.toLowerCase().trim();
  const d2 = drug2.toLowerCase().trim();

  for (const interaction of ALL_INTERACTIONS) {
    const drug1Match =
      interaction.drug1Names.some((n) => n.toLowerCase() === d1) ||
      interaction.drug2Names.some((n) => n.toLowerCase() === d1);
    const drug2Match =
      interaction.drug1Names.some((n) => n.toLowerCase() === d2) ||
      interaction.drug2Names.some((n) => n.toLowerCase() === d2);

    if (drug1Match && drug2Match) {
      return interaction;
    }
  }

  return null;
}

/**
 * Find all interactions for a specific drug
 */
export function findInteractionsForDrug(drugName: string): DrugInteractionEntry[] {
  const name = drugName.toLowerCase().trim();

  return ALL_INTERACTIONS.filter((interaction) => {
    return (
      interaction.drug1Names.some((n) => n.toLowerCase() === name) ||
      interaction.drug2Names.some((n) => n.toLowerCase() === name)
    );
  });
}

/**
 * Check multiple drugs for all pairwise interactions
 */
export function checkMultipleDrugInteractions(
  drugNames: string[]
): { drug1: string; drug2: string; interaction: DrugInteractionEntry }[] {
  const results: { drug1: string; drug2: string; interaction: DrugInteractionEntry }[] = [];

  for (let i = 0; i < drugNames.length; i++) {
    for (let j = i + 1; j < drugNames.length; j++) {
      const interaction = findInteractionBetween(drugNames[i], drugNames[j]);
      if (interaction) {
        results.push({
          drug1: drugNames[i],
          drug2: drugNames[j],
          interaction,
        });
      }
    }
  }

  // Sort by severity
  const severityOrder: Record<InteractionSeverity, number> = {
    contraindicated: 0,
    major: 1,
    moderate: 2,
    minor: 3,
  };

  results.sort((a, b) => severityOrder[a.interaction.severity] - severityOrder[b.interaction.severity]);

  return results;
}

/**
 * Get interaction severity color
 */
export function getInteractionSeverityColor(severity: InteractionSeverity): string {
  switch (severity) {
    case 'contraindicated':
      return '#7c2d12'; // dark red
    case 'major':
      return '#dc2626'; // red
    case 'moderate':
      return '#f97316'; // orange
    case 'minor':
      return '#eab308'; // yellow
  }
}

/**
 * Get overall risk level for a medication list
 */
export function getOverallInteractionRisk(
  drugNames: string[]
): 'low' | 'moderate' | 'high' | 'critical' {
  const interactions = checkMultipleDrugInteractions(drugNames);

  if (interactions.some((i) => i.interaction.severity === 'contraindicated')) {
    return 'critical';
  }
  if (interactions.filter((i) => i.interaction.severity === 'major').length >= 2) {
    return 'critical';
  }
  if (interactions.some((i) => i.interaction.severity === 'major')) {
    return 'high';
  }
  if (interactions.filter((i) => i.interaction.severity === 'moderate').length >= 2) {
    return 'high';
  }
  if (interactions.some((i) => i.interaction.severity === 'moderate')) {
    return 'moderate';
  }
  if (interactions.some((i) => i.interaction.severity === 'minor')) {
    return 'low';
  }
  return 'low';
}
