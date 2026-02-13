/**
 * Medication Database Store
 *
 * Comprehensive database of common medications with mechanisms,
 * body system effects, therapeutic targets, and adverse effects.
 */

import type {
  MedicationPhysiology,
  MedicationSummary,
  MedicationSearchResult,
  MedicationAnatomyHighlight,
} from './types';

// ============================================
// Medication Database
// ============================================

const medicationDatabase: Map<string, MedicationPhysiology> = new Map([
  // ============================================
  // CARDIOVASCULAR MEDICATIONS
  // ============================================

  // Lisinopril (ACE Inhibitor)
  [
    'lisinopril',
    {
      medicationId: 'lisinopril',
      brandNames: ['Prinivil', 'Zestril'],
      genericName: 'Lisinopril',
      drugClass: 'ace-inhibitor',
      drugSubclass: 'ACE Inhibitor',
      description: 'Angiotensin-converting enzyme (ACE) inhibitor used to treat hypertension and heart failure',
      indications: ['Hypertension', 'Heart failure', 'Post-MI cardioprotection', 'Diabetic nephropathy'],
      mechanism: {
        primaryMechanism: 'Inhibits angiotensin-converting enzyme (ACE), blocking conversion of angiotensin I to angiotensin II',
        molecularTarget: 'Angiotensin-converting enzyme',
        receptorType: undefined,
        bindingType: 'inhibitor',
        downstreamEffects: [
          'Decreased angiotensin II levels',
          'Reduced aldosterone secretion',
          'Vasodilation (arterial > venous)',
          'Decreased preload and afterload',
          'Reduced cardiac remodeling',
        ],
        timeToEffect: '1-2 hours (peak: 6 hours)',
        durationOfAction: '24 hours',
      },
      therapeuticTargets: [
        {
          targetId: 'ace-enzyme',
          targetName: 'Angiotensin-Converting Enzyme',
          targetType: 'enzyme',
          structureIds: ['pulmonary-vasculature', 'kidney'],
          mechanism: 'Competitive inhibition of ACE, preventing angiotensin I to II conversion',
          effect: 'Systemic vasodilation and reduced fluid retention',
          pathway: 'Renin-Angiotensin-Aldosterone System (RAAS)',
          highlightColor: '#22c55e',
        },
      ],
      affectedSystems: [
        {
          systemId: 'cardiovascular',
          systemName: 'Cardiovascular System',
          effectType: 'therapeutic',
          intensity: 'strong',
          mechanism: 'Vasodilation reduces peripheral resistance and blood pressure; reduced cardiac workload',
          highlightColor: '#22c55e',
          affectedStructures: ['heart', 'aorta', 'arteries'],
          onsetTime: '1-2 hours',
        },
        {
          systemId: 'renal',
          systemName: 'Renal System',
          effectType: 'therapeutic',
          intensity: 'moderate',
          mechanism: 'Reduces intraglomerular pressure, slowing diabetic nephropathy progression',
          highlightColor: '#4ade80',
          affectedStructures: ['kidney', 'glomerulus'],
        },
        {
          systemId: 'respiratory',
          systemName: 'Respiratory System',
          effectType: 'adverse',
          intensity: 'mild',
          mechanism: 'ACE inhibition increases bradykinin levels, potentially causing cough',
          highlightColor: '#fca5a5',
          affectedStructures: ['lungs', 'bronchi'],
        },
      ],
      adverseEffects: [
        {
          effectId: 'ace-cough',
          effectName: 'Dry Cough',
          severity: 'mild',
          frequency: 'common',
          affectedStructures: ['lungs', 'bronchi'],
          mechanism: 'Increased bradykinin levels cause airway irritation',
          management: 'Switch to ARB if intolerable',
          highlightColor: '#fca5a5',
          symptoms: ['Persistent dry cough', 'Throat irritation'],
        },
        {
          effectId: 'ace-hyperkalemia',
          effectName: 'Hyperkalemia',
          severity: 'moderate',
          frequency: 'uncommon',
          affectedStructures: ['kidney'],
          mechanism: 'Reduced aldosterone decreases potassium excretion',
          management: 'Monitor potassium; dietary modification',
          seekCareIf: 'Muscle weakness, palpitations, nausea',
          highlightColor: '#f87171',
          symptoms: ['Muscle weakness', 'Fatigue', 'Palpitations'],
        },
        {
          effectId: 'ace-angioedema',
          effectName: 'Angioedema',
          severity: 'life-threatening',
          frequency: 'rare',
          affectedStructures: ['face', 'lips', 'tongue', 'larynx'],
          mechanism: 'Bradykinin accumulation causes tissue swelling',
          management: 'Discontinue immediately; epinephrine if airway compromise',
          seekCareIf: 'Any facial/lip/tongue swelling; difficulty breathing',
          blackBoxWarning: true,
          highlightColor: '#dc2626',
          symptoms: ['Facial swelling', 'Lip swelling', 'Difficulty breathing'],
        },
      ],
      pharmacokinetics: {
        absorption: {
          route: 'Oral',
          bioavailability: '25%',
          tmax: '7 hours',
          foodEffect: 'None significant',
        },
        distribution: {
          proteinBinding: '<25%',
          crossesBBB: false,
          crossesPlacenta: true,
        },
        metabolism: {
          primarySite: 'None (not metabolized)',
          cyp450Enzymes: [],
        },
        excretion: {
          primaryRoute: 'Renal (unchanged)',
          halfLife: '12 hours',
          renalElimination: '100%',
        },
      },
      contraindications: [
        {
          contraindicationId: 'pregnancy',
          condition: 'Pregnancy (2nd and 3rd trimester)',
          type: 'absolute',
          reason: 'Fetal toxicity: oligohydramnios, fetal renal failure, hypotension',
          alternatives: ['Labetalol', 'Methyldopa', 'Nifedipine'],
        },
        {
          contraindicationId: 'angioedema-history',
          condition: 'History of ACE inhibitor-induced angioedema',
          type: 'absolute',
          reason: 'High risk of recurrence',
          alternatives: ['ARBs (with caution)', 'Calcium channel blockers'],
        },
      ],
      dosing: {
        standardDose: '10-20 mg daily',
        doseRange: '2.5-40 mg daily',
        frequency: 'Once daily',
        route: 'Oral',
        maxDailyDose: '40 mg',
        renalAdjustment: 'Reduce dose if CrCl <30 mL/min',
      },
      explanations: {
        level1: 'This medicine helps lower your blood pressure by relaxing your blood vessels, making it easier for your heart to pump blood.',
        level2: 'Lisinopril blocks an enzyme that normally tightens blood vessels. By blocking this enzyme, blood vessels relax and widen, which lowers blood pressure and reduces strain on your heart.',
        level3: 'Lisinopril inhibits ACE (angiotensin-converting enzyme), preventing the conversion of angiotensin I to angiotensin II. This causes vasodilation, reduced aldosterone secretion, and decreased cardiac workload.',
        level4: 'As an ACE inhibitor, lisinopril competitively blocks the conversion of angiotensin I to angiotensin II in the RAAS. This results in decreased peripheral vascular resistance, reduced preload/afterload, and inhibition of aldosterone-mediated sodium and water retention. Increased bradykinin levels contribute to vasodilation but also cause the characteristic dry cough.',
        level5: 'Lisinopril competitively inhibits ACE, a zinc-containing dipeptidyl carboxypeptidase. Primary effects include: (1) blockade of Ang I→Ang II conversion reducing AT1 receptor activation, (2) decreased aldosterone secretion reducing sodium/water retention, (3) accumulation of bradykinin (ACE normally degrades it) contributing to vasodilation via NO/prostacyclin release but also causing cough/angioedema, (4) reduction of cardiac remodeling through decreased angiotensin II-mediated fibroblast activation. The efferent arteriolar dilation provides renoprotection in diabetic nephropathy.',
      },
      anatomySettings: {
        recommendedView: 'anterior',
        recommendedLayers: ['cardiovascular', 'urinary'],
        focusRegion: 'thorax',
      },
      monitoring: {
        labTests: ['Serum potassium', 'BUN/Creatinine', 'Blood pressure'],
        vitalSigns: ['Blood pressure'],
        frequency: '1-2 weeks after initiation, then periodically',
      },
      patientEducation: [
        'Take at the same time each day',
        'Rise slowly to prevent dizziness',
        'Report any swelling of face, lips, or tongue immediately',
        'Avoid potassium supplements unless directed',
        'Notify provider if you become pregnant',
      ],
      clinicalPearls: [
        'Start low and go slow, especially in elderly or volume-depleted patients',
        'First-dose hypotension is more common if patient is on diuretics',
        'African American patients may have reduced response as monotherapy',
        'Check K+ and creatinine 1-2 weeks after starting',
      ],
    },
  ],

  // Metoprolol (Beta Blocker)
  [
    'metoprolol',
    {
      medicationId: 'metoprolol',
      brandNames: ['Lopressor', 'Toprol-XL'],
      genericName: 'Metoprolol',
      drugClass: 'beta-blocker',
      drugSubclass: 'Cardioselective Beta-1 Blocker',
      description: 'Cardioselective beta-1 adrenergic receptor blocker for hypertension, heart failure, and arrhythmias',
      indications: ['Hypertension', 'Heart failure', 'Angina', 'Post-MI', 'Atrial fibrillation rate control'],
      mechanism: {
        primaryMechanism: 'Selectively blocks beta-1 adrenergic receptors in the heart',
        molecularTarget: 'Beta-1 adrenergic receptor',
        receptorType: 'Beta-1',
        bindingType: 'antagonist',
        downstreamEffects: [
          'Decreased heart rate (negative chronotropy)',
          'Decreased cardiac contractility (negative inotropy)',
          'Decreased AV conduction (negative dromotropy)',
          'Reduced myocardial oxygen demand',
          'Decreased renin release',
        ],
        timeToEffect: '1-2 hours',
        durationOfAction: '6-12 hours (immediate release); 24 hours (extended release)',
      },
      therapeuticTargets: [
        {
          targetId: 'beta1-receptor',
          targetName: 'Beta-1 Adrenergic Receptor',
          targetType: 'receptor',
          structureIds: ['heart', 'sa-node', 'av-node'],
          mechanism: 'Competitive antagonism of beta-1 receptors in cardiac tissue',
          effect: 'Reduced heart rate, contractility, and blood pressure',
          pathway: 'Sympathetic nervous system',
          highlightColor: '#22c55e',
        },
      ],
      affectedSystems: [
        {
          systemId: 'cardiovascular',
          systemName: 'Cardiovascular System',
          effectType: 'therapeutic',
          intensity: 'strong',
          mechanism: 'Beta-1 blockade reduces heart rate, contractility, and BP; decreases myocardial O2 demand',
          highlightColor: '#22c55e',
          affectedStructures: ['heart', 'sa-node', 'av-node'],
        },
        {
          systemId: 'respiratory',
          systemName: 'Respiratory System',
          effectType: 'adverse',
          intensity: 'mild',
          mechanism: 'At higher doses, may block beta-2 receptors causing bronchoconstriction',
          highlightColor: '#fca5a5',
          affectedStructures: ['bronchi', 'lungs'],
        },
        {
          systemId: 'metabolic',
          systemName: 'Metabolic System',
          effectType: 'adverse',
          intensity: 'mild',
          mechanism: 'May mask hypoglycemia symptoms; can worsen glucose tolerance',
          highlightColor: '#fca5a5',
        },
      ],
      adverseEffects: [
        {
          effectId: 'bradycardia',
          effectName: 'Bradycardia',
          severity: 'moderate',
          frequency: 'common',
          affectedStructures: ['heart', 'sa-node'],
          mechanism: 'Beta-1 blockade reduces SA node automaticity',
          management: 'Dose reduction; rarely requires discontinuation',
          seekCareIf: 'Heart rate <50 with symptoms (dizziness, syncope)',
          highlightColor: '#f87171',
        },
        {
          effectId: 'fatigue',
          effectName: 'Fatigue',
          severity: 'mild',
          frequency: 'common',
          affectedStructures: ['heart', 'skeletal-muscle'],
          mechanism: 'Reduced cardiac output and possibly central effects',
          highlightColor: '#fca5a5',
        },
        {
          effectId: 'cold-extremities',
          effectName: 'Cold Extremities',
          severity: 'mild',
          frequency: 'common',
          affectedStructures: ['peripheral-arteries', 'hands', 'feet'],
          mechanism: 'Peripheral vasoconstriction from unopposed alpha activity',
          highlightColor: '#fca5a5',
        },
      ],
      explanations: {
        level1: 'This medicine slows down your heart and helps it beat more regularly. It makes your heart work less hard, which lowers blood pressure.',
        level2: 'Metoprolol blocks signals that tell your heart to beat faster and harder. By slowing the heart and reducing its workload, it helps lower blood pressure and can prevent chest pain.',
        level3: 'Metoprolol is a beta-blocker that primarily affects the heart. It blocks beta-1 receptors, reducing heart rate, contractility, and blood pressure. This is beneficial for hypertension, heart failure, and preventing heart attacks.',
        level4: 'As a cardioselective beta-1 antagonist, metoprolol reduces sympathetic drive to the heart, resulting in negative chronotropic, inotropic, and dromotropic effects. This decreases myocardial oxygen demand, making it useful for angina. In heart failure, chronic beta-blockade reverses adverse remodeling and improves survival.',
        level5: 'Metoprolol competitively antagonizes beta-1 adrenergic receptors, blocking catecholamine-mediated activation of adenylyl cyclase in cardiac myocytes. This reduces cAMP, decreasing PKA-mediated phosphorylation of L-type Ca2+ channels and phospholamban, resulting in decreased Ca2+ influx and reduced contractility. Selectivity for beta-1 over beta-2 is dose-dependent; at higher doses, bronchospasm may occur. Long-term use in HFrEF improves ejection fraction by reducing neurohumoral activation and adverse remodeling.',
      },
      anatomySettings: {
        recommendedView: 'anterior',
        recommendedLayers: ['cardiovascular'],
        focusRegion: 'heart',
      },
      patientEducation: [
        'Do not stop suddenly - taper dose to avoid rebound hypertension',
        'May cause dizziness; rise slowly from sitting/lying',
        'Check pulse daily; report if <50 beats/min',
        'May mask symptoms of low blood sugar (diabetics)',
      ],
    },
  ],

  // Amlodipine (Calcium Channel Blocker)
  [
    'amlodipine',
    {
      medicationId: 'amlodipine',
      brandNames: ['Norvasc'],
      genericName: 'Amlodipine',
      drugClass: 'calcium-channel-blocker',
      drugSubclass: 'Dihydropyridine CCB',
      description: 'Long-acting dihydropyridine calcium channel blocker for hypertension and angina',
      indications: ['Hypertension', 'Chronic stable angina', 'Vasospastic angina'],
      mechanism: {
        primaryMechanism: 'Blocks L-type calcium channels in vascular smooth muscle',
        molecularTarget: 'L-type calcium channel (Cav1.2)',
        receptorType: 'L-type calcium channel',
        bindingType: 'antagonist',
        downstreamEffects: [
          'Vascular smooth muscle relaxation',
          'Arterial vasodilation',
          'Decreased peripheral vascular resistance',
          'Reduced afterload',
          'Coronary artery dilation',
        ],
        timeToEffect: '6-12 hours',
        durationOfAction: '24 hours',
      },
      therapeuticTargets: [
        {
          targetId: 'l-type-ca-channel',
          targetName: 'L-type Calcium Channel',
          targetType: 'channel',
          structureIds: ['arteries', 'aorta', 'coronary-arteries'],
          mechanism: 'Blocks voltage-gated calcium influx into vascular smooth muscle',
          effect: 'Arterial vasodilation and reduced blood pressure',
          highlightColor: '#22c55e',
        },
      ],
      affectedSystems: [
        {
          systemId: 'cardiovascular',
          systemName: 'Cardiovascular System',
          effectType: 'therapeutic',
          intensity: 'strong',
          mechanism: 'Arterial vasodilation reduces peripheral resistance and BP; coronary dilation relieves angina',
          highlightColor: '#22c55e',
          affectedStructures: ['arteries', 'aorta', 'coronary-arteries'],
        },
        {
          systemId: 'lower-extremity',
          systemName: 'Lower Extremities',
          effectType: 'adverse',
          intensity: 'moderate',
          mechanism: 'Preferential arteriolar dilation increases capillary hydrostatic pressure',
          highlightColor: '#f87171',
          affectedStructures: ['ankles', 'feet'],
        },
      ],
      adverseEffects: [
        {
          effectId: 'peripheral-edema',
          effectName: 'Peripheral Edema',
          severity: 'mild',
          frequency: 'common',
          affectedStructures: ['ankles', 'feet', 'lower-legs'],
          mechanism: 'Arteriolar dilation increases capillary hydrostatic pressure, causing fluid extravasation',
          management: 'Dose reduction; add ACE inhibitor (provides venodilation)',
          highlightColor: '#f87171',
          symptoms: ['Ankle swelling', 'Leg heaviness'],
        },
        {
          effectId: 'headache',
          effectName: 'Headache',
          severity: 'mild',
          frequency: 'common',
          affectedStructures: ['cerebral-arteries'],
          mechanism: 'Vasodilation of cerebral vessels',
          highlightColor: '#fca5a5',
        },
        {
          effectId: 'flushing',
          effectName: 'Flushing',
          severity: 'mild',
          frequency: 'common',
          affectedStructures: ['face', 'skin'],
          mechanism: 'Cutaneous vasodilation',
          highlightColor: '#fca5a5',
        },
      ],
      explanations: {
        level1: 'This medicine relaxes and widens your blood vessels, making it easier for blood to flow and lowering your blood pressure.',
        level2: 'Amlodipine blocks calcium from entering the muscle cells in your blood vessel walls. Without calcium, the muscles relax and blood vessels widen, which lowers blood pressure.',
        level3: 'Amlodipine is a calcium channel blocker that primarily affects arteries. It blocks L-type calcium channels in vascular smooth muscle, causing vasodilation and reducing blood pressure without significantly affecting the heart.',
        level4: 'As a dihydropyridine CCB, amlodipine selectively blocks L-type calcium channels in vascular smooth muscle, with minimal effect on cardiac tissue. This causes arterial vasodilation, reducing afterload. Its long half-life allows once-daily dosing. Unlike non-dihydropyridines, it does not slow heart rate.',
        level5: 'Amlodipine binds to the alpha-1 subunit of L-type (Cav1.2) calcium channels in vascular smooth muscle during depolarization, stabilizing the inactivated state. This reduces calcium influx necessary for actin-myosin cross-bridge cycling, causing relaxation. The dihydropyridine binding site has higher affinity in vessels than myocardium (voltage-dependent selectivity). Peripheral edema results from precapillary arteriolar dilation without concurrent venodilation, increasing capillary hydrostatic pressure.',
      },
      anatomySettings: {
        recommendedView: 'anterior',
        recommendedLayers: ['cardiovascular'],
        focusRegion: 'thorax',
      },
      patientEducation: [
        'Take at the same time each day, with or without food',
        'Swelling of ankles is common but usually not serious',
        'Avoid grapefruit juice (increases drug levels)',
        'May cause dizziness; rise slowly',
      ],
    },
  ],

  // Atorvastatin (Statin)
  [
    'atorvastatin',
    {
      medicationId: 'atorvastatin',
      brandNames: ['Lipitor'],
      genericName: 'Atorvastatin',
      drugClass: 'statin',
      drugSubclass: 'HMG-CoA Reductase Inhibitor',
      description: 'High-intensity statin for cholesterol reduction and cardiovascular risk prevention',
      indications: ['Hyperlipidemia', 'ASCVD prevention', 'Familial hypercholesterolemia', 'Post-ACS'],
      mechanism: {
        primaryMechanism: 'Inhibits HMG-CoA reductase, the rate-limiting enzyme in cholesterol synthesis',
        molecularTarget: 'HMG-CoA reductase',
        bindingType: 'inhibitor',
        downstreamEffects: [
          'Decreased hepatic cholesterol synthesis',
          'Upregulation of LDL receptors',
          'Increased LDL clearance',
          'Reduced LDL-C, triglycerides',
          'Plaque stabilization',
          'Anti-inflammatory effects',
        ],
        timeToEffect: '2-4 weeks',
        durationOfAction: '24 hours',
      },
      therapeuticTargets: [
        {
          targetId: 'hmg-coa-reductase',
          targetName: 'HMG-CoA Reductase',
          targetType: 'enzyme',
          structureIds: ['liver'],
          mechanism: 'Competitive inhibition of the rate-limiting enzyme in cholesterol biosynthesis',
          effect: 'Reduced hepatic cholesterol, increased LDL receptor expression',
          pathway: 'Mevalonate pathway',
          highlightColor: '#22c55e',
        },
      ],
      affectedSystems: [
        {
          systemId: 'hepatic',
          systemName: 'Hepatic System',
          effectType: 'therapeutic',
          intensity: 'strong',
          mechanism: 'Inhibits cholesterol synthesis; upregulates LDL receptors',
          highlightColor: '#22c55e',
          affectedStructures: ['liver'],
        },
        {
          systemId: 'cardiovascular',
          systemName: 'Cardiovascular System',
          effectType: 'therapeutic',
          intensity: 'moderate',
          mechanism: 'Plaque stabilization, anti-inflammatory effects on endothelium',
          highlightColor: '#4ade80',
          affectedStructures: ['coronary-arteries', 'carotid-arteries'],
        },
        {
          systemId: 'musculoskeletal',
          systemName: 'Musculoskeletal System',
          effectType: 'adverse',
          intensity: 'mild',
          mechanism: 'Possible mitochondrial dysfunction or CoQ10 depletion in muscle',
          highlightColor: '#fca5a5',
          affectedStructures: ['skeletal-muscle'],
        },
      ],
      adverseEffects: [
        {
          effectId: 'myalgia',
          effectName: 'Myalgia (Muscle Pain)',
          severity: 'mild',
          frequency: 'common',
          affectedStructures: ['skeletal-muscle'],
          mechanism: 'Uncertain; possibly related to reduced CoQ10 or altered membrane cholesterol',
          management: 'Dose reduction; CoQ10 supplementation; switch to different statin',
          highlightColor: '#fca5a5',
          symptoms: ['Muscle aches', 'Weakness', 'Cramping'],
        },
        {
          effectId: 'rhabdomyolysis',
          effectName: 'Rhabdomyolysis',
          severity: 'life-threatening',
          frequency: 'very-rare',
          affectedStructures: ['skeletal-muscle', 'kidney'],
          mechanism: 'Severe muscle breakdown releasing myoglobin, causing kidney damage',
          management: 'Discontinue immediately; hydration; monitor renal function',
          seekCareIf: 'Severe muscle pain, dark urine, weakness',
          blackBoxWarning: true,
          highlightColor: '#dc2626',
        },
        {
          effectId: 'liver-enzyme-elevation',
          effectName: 'Elevated Liver Enzymes',
          severity: 'mild',
          frequency: 'uncommon',
          affectedStructures: ['liver'],
          mechanism: 'Hepatocellular stress from altered lipid metabolism',
          management: 'Monitor; discontinue if >3x ULN',
          highlightColor: '#f87171',
        },
      ],
      explanations: {
        level1: 'This medicine lowers cholesterol in your blood by blocking your liver from making as much cholesterol. This helps protect your heart.',
        level2: 'Atorvastatin blocks an enzyme your liver needs to make cholesterol. With less cholesterol being made, your liver pulls more cholesterol from your blood, lowering your LDL ("bad") cholesterol.',
        level3: 'Atorvastatin inhibits HMG-CoA reductase, the rate-limiting enzyme in cholesterol synthesis. This reduces hepatic cholesterol, upregulates LDL receptors, and increases LDL clearance from blood. It also has pleiotropic effects including plaque stabilization.',
        level4: 'As a potent statin, atorvastatin competitively inhibits HMG-CoA reductase, reducing mevalonate synthesis and downstream cholesterol production. Hepatocytes compensate by upregulating LDL receptor expression, increasing LDL-C clearance (40-50% reduction typical). Pleiotropic effects include improved endothelial function, reduced inflammation, and plaque stabilization.',
        level5: 'Atorvastatin is a lipophilic statin with high hepatic extraction. It competitively inhibits HMG-CoA reductase conversion of HMG-CoA to mevalonate (Ki ~8 nM). Reduced intracellular cholesterol activates SREBP-2, increasing LDL receptor transcription. Beyond LDL-C reduction, statins inhibit isoprenoid synthesis affecting Rho/Ras signaling, reducing vascular inflammation. Myotoxicity may relate to reduced isoprenylation of small GTPases, mitochondrial dysfunction, or altered membrane fluidity. CYP3A4 metabolism creates interaction potential.',
      },
      anatomySettings: {
        recommendedView: 'anterior',
        recommendedLayers: ['cardiovascular', 'digestive'],
        focusRegion: 'liver',
      },
      monitoring: {
        labTests: ['Lipid panel', 'LFTs', 'CK if symptomatic'],
        frequency: '4-12 weeks after initiation, then annually',
      },
      patientEducation: [
        'Take in the evening (cholesterol synthesis peaks at night)',
        'Avoid grapefruit juice',
        'Report muscle pain, weakness, or dark urine immediately',
        'Continue even if feeling well - prevents future heart problems',
      ],
    },
  ],

  // Aspirin (Antiplatelet)
  [
    'aspirin',
    {
      medicationId: 'aspirin',
      brandNames: ['Bayer', 'Ecotrin'],
      genericName: 'Aspirin (Acetylsalicylic Acid)',
      drugClass: 'antiplatelet',
      drugSubclass: 'COX Inhibitor',
      description: 'Irreversible COX inhibitor used for antiplatelet therapy and pain relief',
      indications: ['ASCVD prevention', 'Post-MI/stent', 'Acute coronary syndrome', 'Ischemic stroke prevention', 'Pain/fever (higher doses)'],
      mechanism: {
        primaryMechanism: 'Irreversibly acetylates and inhibits cyclooxygenase (COX), preventing thromboxane A2 synthesis',
        molecularTarget: 'Cyclooxygenase-1 (COX-1)',
        bindingType: 'inhibitor',
        downstreamEffects: [
          'Decreased thromboxane A2 (platelet aggregation inhibited)',
          'Decreased prostaglandins',
          'Reduced platelet aggregation for platelet lifespan (~10 days)',
          'Anti-inflammatory effects at higher doses',
        ],
        timeToEffect: '15-30 minutes',
        durationOfAction: '7-10 days (platelet lifespan)',
      },
      therapeuticTargets: [
        {
          targetId: 'cox-1',
          targetName: 'Cyclooxygenase-1 (COX-1)',
          targetType: 'enzyme',
          structureIds: ['platelets'],
          mechanism: 'Irreversible acetylation of serine residue in COX-1 active site',
          effect: 'Permanent inhibition of thromboxane A2 synthesis in platelets',
          highlightColor: '#22c55e',
        },
      ],
      affectedSystems: [
        {
          systemId: 'hematologic',
          systemName: 'Hematologic System',
          effectType: 'therapeutic',
          intensity: 'strong',
          mechanism: 'Inhibits platelet aggregation, reducing thrombotic risk',
          highlightColor: '#22c55e',
          affectedStructures: ['blood', 'platelets'],
        },
        {
          systemId: 'gastrointestinal',
          systemName: 'Gastrointestinal System',
          effectType: 'adverse',
          intensity: 'moderate',
          mechanism: 'Reduced prostaglandins decrease gastric mucosal protection',
          highlightColor: '#f87171',
          affectedStructures: ['stomach', 'duodenum'],
        },
      ],
      adverseEffects: [
        {
          effectId: 'gi-bleeding',
          effectName: 'GI Bleeding',
          severity: 'severe',
          frequency: 'uncommon',
          affectedStructures: ['stomach', 'duodenum', 'small-intestine'],
          mechanism: 'Loss of prostaglandin-mediated gastric protection plus antiplatelet effect',
          management: 'PPI co-therapy; H. pylori eradication if present',
          seekCareIf: 'Black/tarry stools, vomiting blood, severe abdominal pain',
          highlightColor: '#ef4444',
        },
        {
          effectId: 'bleeding-risk',
          effectName: 'Increased Bleeding Risk',
          severity: 'moderate',
          frequency: 'common',
          affectedStructures: ['blood'],
          mechanism: 'Impaired platelet function',
          management: 'Avoid with other anticoagulants unless indicated; hold before surgery',
          highlightColor: '#f87171',
        },
        {
          effectId: 'tinnitus',
          effectName: 'Tinnitus',
          severity: 'mild',
          frequency: 'uncommon',
          affectedStructures: ['inner-ear'],
          mechanism: 'Salicylate toxicity affecting cochlear function',
          management: 'Dose reduction',
          highlightColor: '#fca5a5',
        },
      ],
      explanations: {
        level1: 'Low-dose aspirin helps prevent heart attacks and strokes by keeping your blood from forming dangerous clots.',
        level2: 'Aspirin prevents blood cells called platelets from sticking together. This keeps clots from forming in your arteries, which can cause heart attacks or strokes.',
        level3: 'Aspirin irreversibly inhibits cyclooxygenase in platelets, blocking thromboxane A2 production. Without TXA2, platelets cannot aggregate properly. This antiplatelet effect lasts the lifespan of the platelet (~10 days), providing sustained cardiovascular protection with daily low-dose therapy.',
        level4: 'Low-dose aspirin (81-100mg) selectively and irreversibly acetylates COX-1 in platelets, preventing TXA2 synthesis. Since platelets are anucleate and cannot regenerate COX, the effect persists for the platelet lifespan. The cardiovascular benefit derives from reduced platelet-mediated thrombosis, while GI risk stems from prostaglandin-dependent gastroprotection.',
        level5: 'Aspirin irreversibly acetylates Ser530 in the COX-1 active site, blocking arachidonic acid access. In platelets, this prevents TXA2 synthesis, inhibiting the amplification loop of platelet activation. The selectivity at low doses arises from: (1) presystemic acetylation in portal circulation, (2) lack of COX regeneration in anucleate platelets. Endothelial prostacyclin (COX-2 dependent) is relatively spared. GI toxicity occurs through reduced PGE2/PGI2 (decreases mucus, bicarbonate, mucosal blood flow) and direct topical irritation.',
      },
      anatomySettings: {
        recommendedView: 'anterior',
        recommendedLayers: ['cardiovascular'],
        focusRegion: 'thorax',
      },
      patientEducation: [
        'Take with food to reduce stomach upset',
        'Report signs of bleeding (black stools, unusual bruising)',
        'Tell all providers you take aspirin before procedures',
        'Do not take with other NSAIDs (reduces effectiveness)',
      ],
    },
  ],

  // ============================================
  // DIABETES MEDICATIONS
  // ============================================

  // Metformin
  [
    'metformin',
    {
      medicationId: 'metformin',
      brandNames: ['Glucophage', 'Glumetza'],
      genericName: 'Metformin',
      drugClass: 'biguanide',
      drugSubclass: 'Biguanide',
      description: 'First-line oral antidiabetic that reduces hepatic glucose production and improves insulin sensitivity',
      indications: ['Type 2 diabetes mellitus', 'Prediabetes', 'PCOS'],
      mechanism: {
        primaryMechanism: 'Activates AMP-activated protein kinase (AMPK), reducing hepatic gluconeogenesis',
        molecularTarget: 'Mitochondrial complex I / AMPK pathway',
        bindingType: 'inhibitor',
        downstreamEffects: [
          'Decreased hepatic gluconeogenesis',
          'Improved peripheral insulin sensitivity',
          'Reduced intestinal glucose absorption',
          'No direct insulin secretion (no hypoglycemia risk)',
        ],
        timeToEffect: '1-2 weeks',
        durationOfAction: '8-12 hours',
      },
      therapeuticTargets: [
        {
          targetId: 'liver-ampk',
          targetName: 'Hepatic AMPK Pathway',
          targetType: 'pathway',
          structureIds: ['liver'],
          mechanism: 'Activates AMPK, inhibiting gluconeogenic gene expression',
          effect: 'Reduced fasting glucose production',
          highlightColor: '#22c55e',
        },
        {
          targetId: 'muscle-insulin-sensitivity',
          targetName: 'Skeletal Muscle',
          targetType: 'pathway',
          structureIds: ['skeletal-muscle'],
          mechanism: 'Improves GLUT4 translocation and glucose uptake',
          effect: 'Increased peripheral glucose disposal',
          highlightColor: '#4ade80',
        },
      ],
      affectedSystems: [
        {
          systemId: 'hepatic',
          systemName: 'Hepatic System',
          effectType: 'therapeutic',
          intensity: 'strong',
          mechanism: 'Reduces hepatic glucose output through AMPK activation',
          highlightColor: '#22c55e',
          affectedStructures: ['liver'],
        },
        {
          systemId: 'gastrointestinal',
          systemName: 'Gastrointestinal System',
          effectType: 'adverse',
          intensity: 'moderate',
          mechanism: 'GI intolerance from altered intestinal glucose metabolism and serotonin release',
          highlightColor: '#f87171',
          affectedStructures: ['stomach', 'small-intestine'],
        },
      ],
      adverseEffects: [
        {
          effectId: 'gi-intolerance',
          effectName: 'GI Intolerance',
          severity: 'mild',
          frequency: 'very-common',
          affectedStructures: ['stomach', 'small-intestine'],
          mechanism: 'Altered intestinal glucose handling and serotonin pathways',
          management: 'Take with food; start low and titrate slowly; extended-release formulation',
          highlightColor: '#fca5a5',
          symptoms: ['Nausea', 'Diarrhea', 'Abdominal discomfort', 'Metallic taste'],
        },
        {
          effectId: 'b12-deficiency',
          effectName: 'Vitamin B12 Deficiency',
          severity: 'moderate',
          frequency: 'uncommon',
          affectedStructures: ['stomach', 'bone-marrow'],
          mechanism: 'Reduced calcium-dependent B12-intrinsic factor absorption',
          management: 'Monitor B12 levels; supplement if deficient',
          highlightColor: '#f87171',
        },
        {
          effectId: 'lactic-acidosis',
          effectName: 'Lactic Acidosis',
          severity: 'life-threatening',
          frequency: 'very-rare',
          affectedStructures: ['liver', 'kidney'],
          mechanism: 'Accumulation in renal impairment leads to impaired lactate metabolism',
          management: 'Contraindicated in severe renal/hepatic impairment; hold for contrast procedures',
          blackBoxWarning: true,
          highlightColor: '#dc2626',
        },
      ],
      contraindications: [
        {
          contraindicationId: 'severe-renal',
          condition: 'Severe renal impairment (eGFR <30)',
          type: 'absolute',
          reason: 'Risk of lactic acidosis due to metformin accumulation',
        },
        {
          contraindicationId: 'metabolic-acidosis',
          condition: 'Metabolic acidosis including DKA',
          type: 'absolute',
          reason: 'May worsen acidosis',
        },
      ],
      explanations: {
        level1: 'This medicine helps control blood sugar by stopping your liver from making too much sugar and helping your body use insulin better.',
        level2: 'Metformin works mainly in your liver, reducing how much sugar it releases into your blood. It also helps your muscles use sugar more effectively. It does not cause low blood sugar when used alone.',
        level3: 'Metformin reduces hepatic gluconeogenesis and improves peripheral insulin sensitivity without stimulating insulin secretion. This makes it unlikely to cause hypoglycemia. GI side effects are common but often improve with time and dose titration.',
        level4: 'Metformin activates AMPK in hepatocytes, suppressing gluconeogenic gene transcription (PEPCK, G6Pase). It also inhibits mitochondrial complex I, reducing ATP/AMP ratio and further activating AMPK. Unlike sulfonylureas, it does not increase insulin secretion, avoiding hypoglycemia. Weight neutrality and cardiovascular benefits make it first-line for T2DM.',
        level5: 'Metformin accumulates in mitochondria, mildly inhibiting complex I of the electron transport chain. This decreases ATP production and increases AMP:ATP ratio, activating AMPK. Hepatic AMPK phosphorylates and inactivates CRTC2 and class IIa HDACs, reducing CREB-mediated transcription of gluconeogenic genes. Enhanced GLP-1 secretion from intestinal L-cells may also contribute. B12 malabsorption occurs through impaired calcium-dependent intrinsic factor binding. Lactic acidosis risk increases when metformin accumulates (renal failure) or lactate production increases (hypoxia).',
      },
      anatomySettings: {
        recommendedView: 'anterior',
        recommendedLayers: ['digestive'],
        focusRegion: 'liver',
      },
      monitoring: {
        labTests: ['HbA1c', 'Fasting glucose', 'eGFR', 'Vitamin B12'],
        frequency: 'Every 3-6 months',
      },
      patientEducation: [
        'Take with meals to reduce stomach upset',
        'Start with low dose and increase gradually',
        'Does not cause low blood sugar when used alone',
        'Hold before contrast procedures and surgery',
        'Report any unusual muscle pain or weakness',
      ],
    },
  ],

  // Glipizide
  [
    'glipizide',
    {
      medicationId: 'glipizide',
      brandNames: ['Glucotrol', 'Glucotrol XL'],
      genericName: 'Glipizide',
      drugClass: 'sulfonylurea',
      drugSubclass: 'Second-generation Sulfonylurea',
      description: 'Sulfonylurea that stimulates pancreatic insulin secretion for type 2 diabetes',
      indications: ['Type 2 diabetes mellitus'],
      mechanism: {
        primaryMechanism: 'Blocks ATP-sensitive potassium channels on pancreatic beta cells, stimulating insulin release',
        molecularTarget: 'SUR1/Kir6.2 (KATP channel)',
        bindingType: 'inhibitor',
        downstreamEffects: [
          'Beta cell depolarization',
          'Calcium influx',
          'Insulin granule exocytosis',
          'Increased serum insulin',
        ],
        timeToEffect: '1-3 hours',
        durationOfAction: '12-24 hours',
      },
      therapeuticTargets: [
        {
          targetId: 'katp-channel',
          targetName: 'Beta Cell KATP Channel',
          targetType: 'channel',
          structureIds: ['pancreas'],
          mechanism: 'Binds SUR1 subunit, closing KATP channels',
          effect: 'Glucose-independent insulin release',
          highlightColor: '#22c55e',
        },
      ],
      affectedSystems: [
        {
          systemId: 'endocrine',
          systemName: 'Endocrine System',
          effectType: 'therapeutic',
          intensity: 'strong',
          mechanism: 'Stimulates insulin release from pancreatic beta cells',
          highlightColor: '#22c55e',
          affectedStructures: ['pancreas'],
        },
        {
          systemId: 'metabolic',
          systemName: 'Metabolic System',
          effectType: 'adverse',
          intensity: 'moderate',
          mechanism: 'Insulin secretion occurs regardless of blood glucose level',
          highlightColor: '#f87171',
        },
      ],
      adverseEffects: [
        {
          effectId: 'hypoglycemia',
          effectName: 'Hypoglycemia',
          severity: 'severe',
          frequency: 'common',
          affectedStructures: ['brain', 'heart'],
          mechanism: 'Insulin release is glucose-independent, can lower blood sugar excessively',
          management: 'Glucose tablets; regular meals; dose adjustment',
          seekCareIf: 'Confusion, loss of consciousness, severe sweating',
          highlightColor: '#ef4444',
          symptoms: ['Shakiness', 'Sweating', 'Confusion', 'Hunger'],
        },
        {
          effectId: 'weight-gain',
          effectName: 'Weight Gain',
          severity: 'mild',
          frequency: 'common',
          affectedStructures: ['adipose-tissue'],
          mechanism: 'Increased insulin promotes fat storage',
          highlightColor: '#fca5a5',
        },
      ],
      explanations: {
        level1: 'This medicine tells your pancreas to make more insulin, which helps lower your blood sugar.',
        level2: 'Glipizide works on your pancreas to release more insulin. Insulin is the hormone that moves sugar from your blood into your cells. This can cause low blood sugar if you skip meals.',
        level3: 'Glipizide is a sulfonylurea that stimulates insulin secretion from pancreatic beta cells by closing KATP channels. Unlike metformin, it works independently of glucose levels and can cause hypoglycemia, especially if meals are skipped.',
        level4: 'Glipizide binds the SUR1 subunit of the beta cell KATP channel (SUR1/Kir6.2), promoting channel closure independent of intracellular ATP. This causes membrane depolarization, voltage-gated calcium channel activation, and insulin exocytosis. The glucose-independent mechanism creates hypoglycemia risk, particularly in elderly patients or those with erratic eating.',
        level5: 'Glipizide binds with high affinity to the benzamido binding site on SUR1, stabilizing the closed state of the Kir6.2 pore. This depolarizes the beta cell, activating L-type Ca2+ channels and triggering insulin exocytosis via SNARE-mediated fusion. Unlike GLP-1 agonists, the effect is glucose-independent, causing "obligate" insulin secretion. Hypoglycemia risk is higher in renal impairment (decreased clearance), hepatic disease (decreased gluconeogenesis reserve), and elderly (blunted counter-regulatory response).',
      },
      anatomySettings: {
        recommendedView: 'anterior',
        recommendedLayers: ['digestive'],
        focusRegion: 'pancreas',
      },
      patientEducation: [
        'Take 30 minutes before meals',
        'Do not skip meals (risk of low blood sugar)',
        'Carry glucose tablets for low blood sugar',
        'Recognize symptoms of low blood sugar (sweating, shakiness, confusion)',
        'Avoid excessive alcohol',
      ],
    },
  ],

  // Semaglutide
  [
    'semaglutide',
    {
      medicationId: 'semaglutide',
      brandNames: ['Ozempic', 'Wegovy', 'Rybelsus'],
      genericName: 'Semaglutide',
      drugClass: 'glp1-agonist',
      drugSubclass: 'GLP-1 Receptor Agonist',
      description: 'Long-acting GLP-1 agonist for type 2 diabetes and obesity with cardiovascular benefits',
      indications: ['Type 2 diabetes mellitus', 'Obesity/weight management', 'Cardiovascular risk reduction'],
      mechanism: {
        primaryMechanism: 'Activates GLP-1 receptors to enhance glucose-dependent insulin secretion',
        molecularTarget: 'GLP-1 receptor',
        receptorType: 'GLP-1',
        bindingType: 'agonist',
        downstreamEffects: [
          'Glucose-dependent insulin secretion',
          'Glucagon suppression',
          'Delayed gastric emptying',
          'Reduced appetite (central effect)',
          'Beta cell preservation',
        ],
        timeToEffect: '1-2 weeks',
        durationOfAction: '7 days',
      },
      therapeuticTargets: [
        {
          targetId: 'glp1-receptor-pancreas',
          targetName: 'Pancreatic GLP-1 Receptor',
          targetType: 'receptor',
          structureIds: ['pancreas'],
          mechanism: 'Activates GLP-1R on beta cells, enhancing GSIS',
          effect: 'Glucose-dependent insulin secretion',
          highlightColor: '#22c55e',
        },
        {
          targetId: 'glp1-receptor-brain',
          targetName: 'Hypothalamic GLP-1 Receptor',
          targetType: 'receptor',
          structureIds: ['hypothalamus', 'brain'],
          mechanism: 'Activates satiety centers',
          effect: 'Reduced appetite and food intake',
          highlightColor: '#4ade80',
        },
      ],
      affectedSystems: [
        {
          systemId: 'endocrine',
          systemName: 'Endocrine System',
          effectType: 'therapeutic',
          intensity: 'strong',
          mechanism: 'Enhances glucose-dependent insulin secretion and suppresses glucagon',
          highlightColor: '#22c55e',
          affectedStructures: ['pancreas'],
        },
        {
          systemId: 'central-nervous',
          systemName: 'Central Nervous System',
          effectType: 'therapeutic',
          intensity: 'moderate',
          mechanism: 'Reduces appetite via hypothalamic GLP-1 receptors',
          highlightColor: '#4ade80',
          affectedStructures: ['hypothalamus'],
        },
        {
          systemId: 'gastrointestinal',
          systemName: 'Gastrointestinal System',
          effectType: 'adverse',
          intensity: 'moderate',
          mechanism: 'Delayed gastric emptying causes nausea',
          highlightColor: '#f87171',
          affectedStructures: ['stomach'],
        },
      ],
      adverseEffects: [
        {
          effectId: 'gi-effects',
          effectName: 'Gastrointestinal Effects',
          severity: 'mild',
          frequency: 'very-common',
          affectedStructures: ['stomach', 'small-intestine'],
          mechanism: 'Delayed gastric emptying and central effects',
          management: 'Eat smaller meals; dose titration; usually improves over time',
          highlightColor: '#fca5a5',
          symptoms: ['Nausea', 'Vomiting', 'Diarrhea', 'Constipation'],
        },
        {
          effectId: 'pancreatitis',
          effectName: 'Pancreatitis',
          severity: 'severe',
          frequency: 'rare',
          affectedStructures: ['pancreas'],
          mechanism: 'Uncertain; possible increased pancreatic enzyme secretion',
          management: 'Discontinue if suspected; supportive care',
          seekCareIf: 'Severe abdominal pain radiating to back',
          blackBoxWarning: false,
          highlightColor: '#ef4444',
        },
        {
          effectId: 'thyroid-tumors',
          effectName: 'Thyroid C-cell Tumors',
          severity: 'severe',
          frequency: 'very-rare',
          affectedStructures: ['thyroid'],
          mechanism: 'GLP-1 receptor activation on thyroid C-cells (in rodents)',
          management: 'Contraindicated in MEN2 or history of MTC',
          blackBoxWarning: true,
          highlightColor: '#dc2626',
        },
      ],
      contraindications: [
        {
          contraindicationId: 'mtc-men2',
          condition: 'Personal/family history of medullary thyroid carcinoma or MEN2',
          type: 'absolute',
          reason: 'GLP-1 agonists cause thyroid C-cell tumors in rodents',
        },
        {
          contraindicationId: 'pancreatitis-history',
          condition: 'History of pancreatitis',
          type: 'relative',
          reason: 'May increase risk of recurrence',
        },
      ],
      explanations: {
        level1: 'This medicine helps control blood sugar and can help with weight loss. It works by helping your body release insulin when blood sugar is high and by making you feel less hungry.',
        level2: 'Semaglutide mimics a natural hormone (GLP-1) that your gut releases after eating. It helps your pancreas release insulin when needed, slows down digestion, and reduces appetite.',
        level3: 'Semaglutide is a GLP-1 receptor agonist that enhances glucose-dependent insulin secretion, suppresses glucagon, delays gastric emptying, and reduces appetite. Unlike sulfonylureas, hypoglycemia risk is low because it only works when blood sugar is elevated.',
        level4: 'Semaglutide is an acylated GLP-1 analog resistant to DPP-4 degradation, with albumin binding enabling weekly dosing. It activates GLP-1 receptors on beta cells (enhanced GSIS), alpha cells (glucagon suppression), and hypothalamus (satiety). Cardiovascular benefits in T2DM are likely multifactorial, including weight loss, improved lipids, and direct vascular effects.',
        level5: 'Semaglutide binds GLP-1R, a class B GPCR, activating Gαs-cAMP-PKA signaling in beta cells. This potentiates glucose-induced closure of KATP channels (only when glucose is elevated), distinguishing it from sulfonylureas. Hypothalamic GLP-1R activation in POMC/CART neurons reduces appetite. Delayed gastric emptying involves vagal afferent signaling. The fatty acid side chain promotes albumin binding (97%), extending half-life to 7 days. Cardiovascular benefit may involve reduced inflammation (hs-CRP), improved endothelial function, and weight reduction.',
      },
      anatomySettings: {
        recommendedView: 'anterior',
        recommendedLayers: ['digestive', 'nervous'],
        focusRegion: 'pancreas',
      },
      patientEducation: [
        'Inject once weekly on the same day each week',
        'Nausea usually improves after first few weeks',
        'Eat smaller meals to reduce nausea',
        'Report severe abdominal pain immediately',
        'Low hypoglycemia risk unless combined with insulin/sulfonylurea',
      ],
    },
  ],

  // ============================================
  // PAIN/ANTI-INFLAMMATORY MEDICATIONS
  // ============================================

  // Ibuprofen
  [
    'ibuprofen',
    {
      medicationId: 'ibuprofen',
      brandNames: ['Advil', 'Motrin'],
      genericName: 'Ibuprofen',
      drugClass: 'nsaid',
      drugSubclass: 'Propionic Acid NSAID',
      description: 'Non-selective COX inhibitor for pain, fever, and inflammation',
      indications: ['Pain', 'Fever', 'Inflammation', 'Arthritis', 'Dysmenorrhea'],
      mechanism: {
        primaryMechanism: 'Reversibly inhibits cyclooxygenase-1 and -2, reducing prostaglandin synthesis',
        molecularTarget: 'COX-1 and COX-2',
        bindingType: 'inhibitor',
        downstreamEffects: [
          'Decreased prostaglandin synthesis',
          'Reduced inflammation',
          'Decreased pain sensitization',
          'Antipyretic effect',
        ],
        timeToEffect: '30-60 minutes',
        durationOfAction: '4-6 hours',
      },
      therapeuticTargets: [
        {
          targetId: 'cox-enzymes',
          targetName: 'Cyclooxygenase-1/2',
          targetType: 'enzyme',
          structureIds: ['inflamed-tissue'],
          mechanism: 'Competitive, reversible inhibition of COX active site',
          effect: 'Reduced prostaglandin-mediated inflammation and pain',
          highlightColor: '#22c55e',
        },
      ],
      affectedSystems: [
        {
          systemId: 'musculoskeletal',
          systemName: 'Musculoskeletal System',
          effectType: 'therapeutic',
          intensity: 'strong',
          mechanism: 'Reduces prostaglandin-mediated inflammation and pain',
          highlightColor: '#22c55e',
          affectedStructures: ['joints', 'muscles'],
        },
        {
          systemId: 'gastrointestinal',
          systemName: 'Gastrointestinal System',
          effectType: 'adverse',
          intensity: 'moderate',
          mechanism: 'Reduced gastroprotective prostaglandins',
          highlightColor: '#f87171',
          affectedStructures: ['stomach', 'duodenum'],
        },
        {
          systemId: 'renal',
          systemName: 'Renal System',
          effectType: 'adverse',
          intensity: 'moderate',
          mechanism: 'Reduced renal prostaglandins decrease renal blood flow',
          highlightColor: '#f87171',
          affectedStructures: ['kidney'],
        },
        {
          systemId: 'cardiovascular',
          systemName: 'Cardiovascular System',
          effectType: 'adverse',
          intensity: 'mild',
          mechanism: 'COX-2 inhibition may promote thrombosis and hypertension',
          highlightColor: '#fca5a5',
          affectedStructures: ['heart', 'arteries'],
        },
      ],
      adverseEffects: [
        {
          effectId: 'gi-ulcer',
          effectName: 'GI Ulceration/Bleeding',
          severity: 'severe',
          frequency: 'uncommon',
          affectedStructures: ['stomach', 'duodenum'],
          mechanism: 'Loss of prostaglandin-mediated mucosal protection',
          management: 'Take with food; PPI co-therapy for high-risk patients',
          highlightColor: '#ef4444',
        },
        {
          effectId: 'aki',
          effectName: 'Acute Kidney Injury',
          severity: 'severe',
          frequency: 'rare',
          affectedStructures: ['kidney'],
          mechanism: 'Reduced renal prostaglandins impair autoregulation',
          management: 'Avoid in CKD; hydration; monitor creatinine',
          highlightColor: '#ef4444',
        },
        {
          effectId: 'cv-events',
          effectName: 'Cardiovascular Events',
          severity: 'severe',
          frequency: 'rare',
          affectedStructures: ['heart', 'arteries'],
          mechanism: 'COX-2 inhibition shifts prostacyclin/thromboxane balance',
          blackBoxWarning: true,
          highlightColor: '#dc2626',
        },
      ],
      explanations: {
        level1: 'This medicine reduces pain, fever, and swelling by blocking chemicals your body makes when something is inflamed.',
        level2: 'Ibuprofen blocks enzymes (COX) that make prostaglandins - chemicals that cause pain, fever, and inflammation. It works throughout your body wherever there is inflammation.',
        level3: 'Ibuprofen non-selectively inhibits COX-1 and COX-2, reducing prostaglandin synthesis. This provides anti-inflammatory, analgesic, and antipyretic effects. However, COX-1 inhibition also reduces gastroprotective prostaglandins, risking GI bleeding.',
        level4: 'As a non-selective NSAID, ibuprofen reversibly inhibits both COX isoforms. COX-2 inhibition mediates anti-inflammatory effects; COX-1 inhibition contributes to GI and renal toxicity. Cardiovascular risk arises from imbalanced prostacyclin (vasodilatory/antithrombotic) versus thromboxane (vasoconstricting/prothrombotic) synthesis.',
        level5: 'Ibuprofen competitively inhibits arachidonic acid binding to the COX active site. In inflammation, COX-2-derived PGE2 sensitizes nociceptors via EP1/EP2 receptors and increases hypothalamic PGE2 causing fever. COX-1 in gastric mucosa produces PGE2/PGI2, maintaining mucosal blood flow and mucus secretion. Renal prostaglandins (especially PGI2, PGE2) vasodilate afferent arterioles, maintaining GFR in volume-depleted states; NSAID use removes this protective mechanism. CV risk reflects COX-2 inhibition reducing endothelial prostacyclin while platelet thromboxane (COX-1) remains.',
      },
      anatomySettings: {
        recommendedView: 'anterior',
        recommendedLayers: ['musculoskeletal'],
        focusRegion: 'joints',
      },
      patientEducation: [
        'Take with food or milk to reduce stomach upset',
        'Do not exceed 1200 mg/day without medical advice',
        'Avoid if you have kidney disease or heart failure',
        'Report black stools or severe stomach pain',
        'Do not combine with aspirin for heart protection',
      ],
    },
  ],

  // Acetaminophen
  [
    'acetaminophen',
    {
      medicationId: 'acetaminophen',
      brandNames: ['Tylenol'],
      genericName: 'Acetaminophen (Paracetamol)',
      drugClass: 'analgesic',
      drugSubclass: 'Para-aminophenol derivative',
      description: 'Analgesic and antipyretic without significant anti-inflammatory activity',
      indications: ['Pain', 'Fever'],
      mechanism: {
        primaryMechanism: 'Inhibits central COX enzymes and may activate descending serotonergic pathways',
        molecularTarget: 'Central COX-3 / Serotonergic pathways',
        downstreamEffects: [
          'Reduced central prostaglandin synthesis',
          'Antipyretic effect via hypothalamus',
          'Analgesic effect (central)',
          'Minimal peripheral anti-inflammatory effect',
        ],
        timeToEffect: '30-60 minutes',
        durationOfAction: '4-6 hours',
      },
      therapeuticTargets: [
        {
          targetId: 'central-cox',
          targetName: 'Central COX / Serotonin Pathways',
          targetType: 'pathway',
          structureIds: ['brain', 'hypothalamus', 'spinal-cord'],
          mechanism: 'Central prostaglandin inhibition and serotonergic pathway activation',
          effect: 'Pain relief and fever reduction',
          highlightColor: '#22c55e',
        },
      ],
      affectedSystems: [
        {
          systemId: 'central-nervous',
          systemName: 'Central Nervous System',
          effectType: 'therapeutic',
          intensity: 'moderate',
          mechanism: 'Central analgesic and antipyretic actions',
          highlightColor: '#22c55e',
          affectedStructures: ['brain', 'hypothalamus'],
        },
        {
          systemId: 'hepatic',
          systemName: 'Hepatic System',
          effectType: 'adverse',
          intensity: 'strong',
          mechanism: 'Toxic metabolite NAPQI causes hepatocellular necrosis in overdose',
          highlightColor: '#ef4444',
          affectedStructures: ['liver'],
        },
      ],
      adverseEffects: [
        {
          effectId: 'hepatotoxicity',
          effectName: 'Hepatotoxicity',
          severity: 'life-threatening',
          frequency: 'rare',
          affectedStructures: ['liver'],
          mechanism: 'CYP2E1 converts acetaminophen to NAPQI; glutathione depletion leads to hepatocyte death',
          management: 'N-acetylcysteine (NAC) antidote; liver transplant if fulminant',
          seekCareIf: 'Overdose (>4g/day), dark urine, jaundice, RUQ pain',
          blackBoxWarning: true,
          highlightColor: '#dc2626',
          symptoms: ['Nausea', 'Vomiting', 'Abdominal pain', 'Jaundice'],
        },
      ],
      contraindications: [
        {
          contraindicationId: 'severe-liver-disease',
          condition: 'Severe hepatic impairment',
          type: 'relative',
          reason: 'Reduced glutathione stores and impaired metabolism',
        },
        {
          contraindicationId: 'chronic-alcohol',
          condition: 'Chronic alcohol use (>3 drinks/day)',
          type: 'relative',
          reason: 'CYP2E1 induction increases NAPQI production; glutathione depletion',
        },
      ],
      explanations: {
        level1: 'This medicine relieves pain and reduces fever. Unlike ibuprofen, it does not reduce swelling. It is processed by your liver, so do not take more than directed.',
        level2: 'Acetaminophen works in your brain to reduce pain and fever, but it does not reduce inflammation like ibuprofen. It is very safe at recommended doses but can damage your liver if you take too much.',
        level3: 'Acetaminophen has analgesic and antipyretic effects through central mechanisms, likely involving COX inhibition and serotonergic pathway activation. It lacks significant anti-inflammatory activity. Hepatotoxicity occurs when the toxic metabolite NAPQI depletes glutathione.',
        level4: 'Acetaminophen\'s mechanism involves central COX inhibition (possibly COX-3 or peroxide-dependent inhibition) and activation of descending serotonergic pathways. Unlike NSAIDs, peripheral anti-inflammatory effect is minimal. Hepatotoxicity occurs when CYP2E1-generated NAPQI exceeds glutathione detoxification capacity, causing centrilobular necrosis.',
        level5: 'Acetaminophen is a weak central COX inhibitor; its analgesic effect may also involve the descending serotonergic pain-inhibitory pathway and CB1 receptor activation via its metabolite AM404. Hepatotoxicity: CYP2E1 and CYP3A4 oxidize acetaminophen to NAPQI. Normally, glutathione conjugates NAPQI. In overdose or with glutathione depletion (alcoholism, fasting), NAPQI binds mitochondrial proteins, causing oxidative stress and hepatocyte necrosis. N-acetylcysteine restores glutathione.',
      },
      anatomySettings: {
        recommendedView: 'anterior',
        recommendedLayers: ['nervous', 'digestive'],
        focusRegion: 'brain',
      },
      patientEducation: [
        'Do not exceed 3000-4000 mg per day',
        'Check other medications for hidden acetaminophen',
        'Avoid alcohol while taking this medication',
        'Does not reduce inflammation (use ibuprofen for swelling)',
        'Seek help immediately if you take too much',
      ],
    },
  ],

  // Naproxen
  [
    'naproxen',
    {
      medicationId: 'naproxen',
      brandNames: ['Aleve', 'Naprosyn'],
      genericName: 'Naproxen',
      drugClass: 'nsaid',
      drugSubclass: 'Propionic Acid NSAID',
      description: 'Long-acting NSAID for pain, fever, and inflammation',
      indications: ['Pain', 'Fever', 'Inflammation', 'Arthritis', 'Gout'],
      mechanism: {
        primaryMechanism: 'Non-selective COX-1/COX-2 inhibition with longer duration than ibuprofen',
        molecularTarget: 'COX-1 and COX-2',
        bindingType: 'inhibitor',
        downstreamEffects: [
          'Decreased prostaglandin synthesis',
          'Anti-inflammatory effects',
          'Analgesic effects',
          'Antipyretic effects',
        ],
        timeToEffect: '1-2 hours',
        durationOfAction: '8-12 hours',
      },
      therapeuticTargets: [
        {
          targetId: 'cox-12',
          targetName: 'Cyclooxygenase-1/2',
          targetType: 'enzyme',
          structureIds: ['inflamed-tissue', 'joints'],
          mechanism: 'Reversible COX inhibition',
          effect: 'Reduced inflammation and pain',
          highlightColor: '#22c55e',
        },
      ],
      affectedSystems: [
        {
          systemId: 'musculoskeletal',
          systemName: 'Musculoskeletal System',
          effectType: 'therapeutic',
          intensity: 'strong',
          mechanism: 'Reduces prostaglandin-mediated inflammation',
          highlightColor: '#22c55e',
          affectedStructures: ['joints', 'muscles'],
        },
        {
          systemId: 'gastrointestinal',
          systemName: 'Gastrointestinal System',
          effectType: 'adverse',
          intensity: 'moderate',
          mechanism: 'Loss of gastroprotective prostaglandins',
          highlightColor: '#f87171',
          affectedStructures: ['stomach'],
        },
      ],
      adverseEffects: [
        {
          effectId: 'gi-bleed',
          effectName: 'GI Bleeding',
          severity: 'severe',
          frequency: 'uncommon',
          affectedStructures: ['stomach', 'duodenum'],
          mechanism: 'Reduced mucosal protection',
          management: 'Take with food; PPI if high risk',
          highlightColor: '#ef4444',
        },
        {
          effectId: 'renal-effects',
          effectName: 'Renal Impairment',
          severity: 'moderate',
          frequency: 'rare',
          affectedStructures: ['kidney'],
          mechanism: 'Reduced renal prostaglandins',
          highlightColor: '#f87171',
        },
      ],
      explanations: {
        level1: 'This medicine reduces pain, fever, and swelling. It lasts longer than ibuprofen, so you take it less often.',
        level2: 'Naproxen is similar to ibuprofen but lasts longer (8-12 hours vs 4-6 hours). It blocks chemicals that cause pain and swelling. Like other NSAIDs, it can affect your stomach and kidneys.',
        level3: 'Naproxen is a non-selective NSAID with a longer half-life than ibuprofen, allowing twice-daily dosing. It provides anti-inflammatory, analgesic, and antipyretic effects through COX inhibition. GI and renal risks are similar to other NSAIDs.',
        level4: 'Naproxen non-selectively inhibits COX-1 and COX-2, with a half-life of 12-17 hours. Interestingly, its balanced COX-1/COX-2 inhibition may confer lower cardiovascular risk compared to COX-2 selective agents. GI toxicity remains a concern, especially with chronic use.',
        level5: 'Naproxen\'s longer half-life (12-17h vs ibuprofen 2h) results from higher protein binding (99%) and slower renal excretion. Its relatively balanced COX-1/COX-2 inhibition ratio may explain the lower cardiovascular risk seen in some studies (COX-2 selectivity correlates with CV risk). Like all NSAIDs, it inhibits platelet aggregation (reversible) and reduces renal prostaglandin-mediated vasodilation.',
      },
      anatomySettings: {
        recommendedView: 'anterior',
        recommendedLayers: ['musculoskeletal'],
        focusRegion: 'joints',
      },
      patientEducation: [
        'Take with food to reduce stomach upset',
        'Take only every 8-12 hours (longer-acting than ibuprofen)',
        'Report black stools or severe stomach pain',
        'Avoid if kidney problems or heart failure',
      ],
    },
  ],

  // ============================================
  // RESPIRATORY MEDICATIONS
  // ============================================

  // Albuterol
  [
    'albuterol',
    {
      medicationId: 'albuterol',
      brandNames: ['ProAir', 'Ventolin', 'Proventil'],
      genericName: 'Albuterol (Salbutamol)',
      drugClass: 'bronchodilator',
      drugSubclass: 'Short-Acting Beta-2 Agonist (SABA)',
      description: 'Rapid-onset bronchodilator for acute bronchospasm in asthma and COPD',
      indications: ['Acute bronchospasm', 'Asthma', 'COPD', 'Exercise-induced bronchospasm'],
      mechanism: {
        primaryMechanism: 'Activates beta-2 adrenergic receptors in bronchial smooth muscle causing relaxation',
        molecularTarget: 'Beta-2 adrenergic receptor',
        receptorType: 'Beta-2',
        bindingType: 'agonist',
        downstreamEffects: [
          'Bronchial smooth muscle relaxation',
          'Bronchodilation',
          'Increased mucociliary clearance',
          'Mild effects on heart rate (beta-1 at higher doses)',
        ],
        timeToEffect: '5-15 minutes',
        durationOfAction: '4-6 hours',
      },
      therapeuticTargets: [
        {
          targetId: 'beta2-receptor-lung',
          targetName: 'Bronchial Beta-2 Receptor',
          targetType: 'receptor',
          structureIds: ['bronchi', 'bronchioles', 'lungs'],
          mechanism: 'Activates beta-2 receptors, increasing cAMP and causing smooth muscle relaxation',
          effect: 'Rapid bronchodilation',
          highlightColor: '#22c55e',
        },
      ],
      affectedSystems: [
        {
          systemId: 'respiratory',
          systemName: 'Respiratory System',
          effectType: 'therapeutic',
          intensity: 'strong',
          mechanism: 'Beta-2 agonism relaxes bronchial smooth muscle',
          highlightColor: '#22c55e',
          affectedStructures: ['bronchi', 'bronchioles', 'lungs'],
        },
        {
          systemId: 'cardiovascular',
          systemName: 'Cardiovascular System',
          effectType: 'adverse',
          intensity: 'mild',
          mechanism: 'Beta-2 effects on heart and peripheral vasodilation',
          highlightColor: '#fca5a5',
          affectedStructures: ['heart'],
        },
      ],
      adverseEffects: [
        {
          effectId: 'tachycardia',
          effectName: 'Tachycardia',
          severity: 'mild',
          frequency: 'common',
          affectedStructures: ['heart'],
          mechanism: 'Beta-2 stimulation in heart; reflex tachycardia from vasodilation',
          highlightColor: '#fca5a5',
          symptoms: ['Racing heart', 'Palpitations'],
        },
        {
          effectId: 'tremor',
          effectName: 'Tremor',
          severity: 'mild',
          frequency: 'common',
          affectedStructures: ['skeletal-muscle'],
          mechanism: 'Beta-2 stimulation of skeletal muscle',
          highlightColor: '#fca5a5',
        },
        {
          effectId: 'hypokalemia',
          effectName: 'Hypokalemia',
          severity: 'moderate',
          frequency: 'uncommon',
          affectedStructures: ['blood'],
          mechanism: 'Beta-2 activation drives potassium into cells',
          highlightColor: '#f87171',
        },
      ],
      explanations: {
        level1: 'This is a rescue inhaler that quickly opens your airways when you are having trouble breathing. It works within minutes.',
        level2: 'Albuterol relaxes the muscles around your airways, making them wider so you can breathe easier. It works fast (5-15 minutes) but only lasts a few hours.',
        level3: 'Albuterol is a short-acting beta-2 agonist (SABA) that causes rapid bronchodilation by relaxing bronchial smooth muscle. It is used as a rescue medication for acute bronchospasm. Frequent use (>2 days/week) suggests inadequate controller therapy.',
        level4: 'Albuterol activates beta-2 adrenergic receptors, increasing cAMP via Gαs-adenylyl cyclase. This activates PKA, phosphorylating myosin light chain kinase (reducing activity) and opening calcium-activated K+ channels (hyperpolarization). The result is smooth muscle relaxation. At higher doses, beta-1 cross-reactivity causes tachycardia.',
        level5: 'Albuterol is a selective beta-2 agonist with R-enantiomer (levalbuterol) having higher receptor affinity. Gs-coupled beta-2 receptor activation increases cAMP, activating PKA. PKA phosphorylates: (1) MLCK, reducing its affinity for Ca2+-calmodulin, (2) BKCa channels, causing hyperpolarization, (3) IP3 receptor, reducing Ca2+ release. Additionally, beta-2 agonists increase mucociliary clearance. Tolerance (tachyphylaxis) with chronic use involves receptor phosphorylation by GRK and beta-arrestin-mediated internalization.',
      },
      anatomySettings: {
        recommendedView: 'anterior',
        recommendedLayers: ['respiratory'],
        focusRegion: 'lungs',
      },
      patientEducation: [
        'Shake inhaler before each use',
        'Use only as needed for breathing problems',
        'If using more than 2 days/week, see your doctor',
        'Wait 1 minute between puffs',
        'Rinse mouth after use to prevent throat irritation',
      ],
    },
  ],

  // Fluticasone
  [
    'fluticasone',
    {
      medicationId: 'fluticasone',
      brandNames: ['Flovent', 'Flonase', 'Arnuity'],
      genericName: 'Fluticasone',
      drugClass: 'corticosteroid',
      drugSubclass: 'Inhaled Corticosteroid (ICS)',
      description: 'Potent inhaled corticosteroid for long-term asthma and COPD control',
      indications: ['Asthma (maintenance)', 'COPD', 'Allergic rhinitis'],
      mechanism: {
        primaryMechanism: 'Activates glucocorticoid receptor, suppressing inflammatory gene transcription',
        molecularTarget: 'Glucocorticoid receptor (NR3C1)',
        bindingType: 'agonist',
        downstreamEffects: [
          'Decreased inflammatory cytokine production',
          'Reduced inflammatory cell recruitment',
          'Decreased airway hyperresponsiveness',
          'Reduced mucus production',
        ],
        timeToEffect: '1-2 weeks for full effect',
        durationOfAction: '12-24 hours',
      },
      therapeuticTargets: [
        {
          targetId: 'glucocorticoid-receptor',
          targetName: 'Glucocorticoid Receptor',
          targetType: 'receptor',
          structureIds: ['bronchi', 'bronchioles', 'lungs'],
          mechanism: 'GR activation leads to anti-inflammatory gene transcription and inflammatory gene suppression',
          effect: 'Reduced airway inflammation',
          highlightColor: '#22c55e',
        },
      ],
      affectedSystems: [
        {
          systemId: 'respiratory',
          systemName: 'Respiratory System',
          effectType: 'therapeutic',
          intensity: 'strong',
          mechanism: 'Reduces airway inflammation and hyperresponsiveness',
          highlightColor: '#22c55e',
          affectedStructures: ['bronchi', 'bronchioles', 'lungs'],
        },
        {
          systemId: 'oral-pharyngeal',
          systemName: 'Oral/Pharyngeal',
          effectType: 'adverse',
          intensity: 'mild',
          mechanism: 'Local immunosuppression allows fungal overgrowth',
          highlightColor: '#fca5a5',
          affectedStructures: ['mouth', 'pharynx'],
        },
      ],
      adverseEffects: [
        {
          effectId: 'oral-candidiasis',
          effectName: 'Oral Candidiasis (Thrush)',
          severity: 'mild',
          frequency: 'common',
          affectedStructures: ['mouth', 'pharynx'],
          mechanism: 'Local immunosuppression allows Candida overgrowth',
          management: 'Rinse mouth after use; use spacer',
          highlightColor: '#fca5a5',
          symptoms: ['White patches in mouth', 'Sore throat'],
        },
        {
          effectId: 'dysphonia',
          effectName: 'Dysphonia (Hoarseness)',
          severity: 'mild',
          frequency: 'common',
          affectedStructures: ['larynx'],
          mechanism: 'Local steroid effect on vocal cords',
          highlightColor: '#fca5a5',
        },
        {
          effectId: 'adrenal-suppression',
          effectName: 'Adrenal Suppression',
          severity: 'moderate',
          frequency: 'rare',
          affectedStructures: ['adrenal-glands'],
          mechanism: 'Systemic absorption with high doses suppresses HPA axis',
          highlightColor: '#f87171',
        },
      ],
      explanations: {
        level1: 'This is a controller inhaler that you use every day to prevent asthma attacks. It reduces swelling in your airways over time.',
        level2: 'Fluticasone is a steroid inhaler that reduces inflammation in your airways when used daily. It does not work immediately for attacks - use it regularly for prevention.',
        level3: 'Fluticasone is an inhaled corticosteroid (ICS) that reduces airway inflammation, hyperresponsiveness, and mucus production. It takes 1-2 weeks to reach full effect and must be used regularly for benefit. Rinsing the mouth prevents oral candidiasis.',
        level4: 'Fluticasone activates glucocorticoid receptors, which translocate to the nucleus and modulate gene transcription. It suppresses pro-inflammatory genes (transrepression via NF-κB/AP-1 interference) and activates anti-inflammatory genes. The result is reduced inflammatory cell infiltration, cytokine production, and airway remodeling.',
        level5: 'Fluticasone has high GR affinity and lipophilicity, promoting lung retention. Upon binding GR, the complex undergoes conformational change, dissociates from HSP90, and translocates to the nucleus. Anti-inflammatory effects occur via: (1) transrepression - GR tethers to p65(NF-κB) or c-Jun(AP-1), recruiting HDACs to suppress inflammatory genes, (2) transactivation - GRE-mediated induction of anti-inflammatory genes (annexin-1, IκBα). Oral candidiasis results from local immunosuppression. Systemic effects (adrenal suppression, osteoporosis) are rare with proper technique due to high first-pass metabolism.',
      },
      anatomySettings: {
        recommendedView: 'anterior',
        recommendedLayers: ['respiratory'],
        focusRegion: 'lungs',
      },
      patientEducation: [
        'Use every day, even when feeling well',
        'Rinse mouth and spit after each use',
        'Use a spacer device for better delivery',
        'Not for acute attacks - use rescue inhaler instead',
        'May take 1-2 weeks to feel full benefit',
      ],
    },
  ],

  // ============================================
  // GASTROINTESTINAL MEDICATIONS
  // ============================================

  // Omeprazole
  [
    'omeprazole',
    {
      medicationId: 'omeprazole',
      brandNames: ['Prilosec'],
      genericName: 'Omeprazole',
      drugClass: 'ppi',
      drugSubclass: 'Proton Pump Inhibitor',
      description: 'Irreversible proton pump inhibitor that suppresses gastric acid secretion',
      indications: ['GERD', 'Peptic ulcer disease', 'H. pylori eradication', 'Zollinger-Ellison syndrome', 'NSAID gastroprophylaxis'],
      mechanism: {
        primaryMechanism: 'Irreversibly inhibits H+/K+-ATPase (proton pump) in gastric parietal cells',
        molecularTarget: 'H+/K+-ATPase',
        bindingType: 'inhibitor',
        downstreamEffects: [
          'Profound suppression of gastric acid secretion',
          'Increased gastric pH',
          'Enhanced healing of erosive lesions',
        ],
        timeToEffect: '2-3 days for full effect',
        durationOfAction: '24 hours (due to irreversible binding)',
      },
      therapeuticTargets: [
        {
          targetId: 'proton-pump',
          targetName: 'Gastric H+/K+-ATPase',
          targetType: 'enzyme',
          structureIds: ['stomach'],
          mechanism: 'Forms covalent bond with cysteine residues in the proton pump',
          effect: 'Irreversible acid suppression until new pumps are synthesized',
          highlightColor: '#22c55e',
        },
      ],
      affectedSystems: [
        {
          systemId: 'gastrointestinal',
          systemName: 'Gastrointestinal System',
          effectType: 'therapeutic',
          intensity: 'strong',
          mechanism: 'Profound acid suppression promotes healing and symptom relief',
          highlightColor: '#22c55e',
          affectedStructures: ['stomach', 'esophagus'],
        },
        {
          systemId: 'skeletal',
          systemName: 'Skeletal System',
          effectType: 'adverse',
          intensity: 'mild',
          mechanism: 'Reduced calcium absorption may affect bone density with chronic use',
          highlightColor: '#fca5a5',
          affectedStructures: ['bones'],
        },
      ],
      adverseEffects: [
        {
          effectId: 'c-diff',
          effectName: 'C. difficile Infection',
          severity: 'moderate',
          frequency: 'rare',
          affectedStructures: ['colon'],
          mechanism: 'Reduced gastric acid allows bacterial overgrowth',
          highlightColor: '#f87171',
        },
        {
          effectId: 'b12-deficiency',
          effectName: 'B12 Deficiency',
          severity: 'mild',
          frequency: 'uncommon',
          affectedStructures: ['stomach'],
          mechanism: 'Acid required for B12 release from food proteins',
          highlightColor: '#fca5a5',
        },
        {
          effectId: 'hypomagnesemia',
          effectName: 'Hypomagnesemia',
          severity: 'moderate',
          frequency: 'rare',
          affectedStructures: ['intestines'],
          mechanism: 'Reduced intestinal magnesium absorption',
          highlightColor: '#f87171',
        },
        {
          effectId: 'fracture-risk',
          effectName: 'Increased Fracture Risk',
          severity: 'moderate',
          frequency: 'rare',
          affectedStructures: ['bones', 'hip', 'spine'],
          mechanism: 'Chronic acid suppression may reduce calcium absorption',
          highlightColor: '#f87171',
        },
      ],
      explanations: {
        level1: 'This medicine reduces stomach acid to help heal heartburn and ulcers. Take it before eating for best results.',
        level2: 'Omeprazole is a proton pump inhibitor (PPI) that blocks the final step of acid production in your stomach. It works for 24 hours but takes a few days to reach full effect.',
        level3: 'Omeprazole irreversibly inhibits the H+/K+-ATPase (proton pump) in gastric parietal cells. This provides more profound and sustained acid suppression than H2 blockers. Best taken 30 minutes before meals when proton pumps are being activated.',
        level4: 'As a prodrug, omeprazole requires acidic conditions to convert to its active sulfenamide form. This active metabolite binds covalently to cysteine residues on the alpha subunit of H+/K+-ATPase. New proton pump synthesis (half-life ~54 hours) is required to restore acid secretion. Take before meals to ensure activation when pumps are stimulated.',
        level5: 'Omeprazole is a substituted benzimidazole that accumulates in the acidic secretory canaliculi of parietal cells (pKa-dependent trapping). Protonation converts it to a reactive sulfenamide that forms disulfide bonds with Cys813/Cys892 on the α-subunit of H+/K+-ATPase. Full effect requires 2-3 days as existing pumps are progressively inactivated. Long-term risks relate to achlorhydria: reduced iron/B12/calcium absorption, altered gut microbiome (C. diff risk), and hypergastrinemia (theoretical carcinoid concern, though not clinically demonstrated).',
      },
      anatomySettings: {
        recommendedView: 'anterior',
        recommendedLayers: ['digestive'],
        focusRegion: 'stomach',
      },
      patientEducation: [
        'Take 30 minutes before breakfast',
        'Swallow whole; do not crush or chew',
        'May take 1-4 days for full symptom relief',
        'Do not use for more than 14 days without medical advice (OTC)',
        'Long-term use may require monitoring of B12 and magnesium',
      ],
    },
  ],

  // Famotidine
  [
    'famotidine',
    {
      medicationId: 'famotidine',
      brandNames: ['Pepcid'],
      genericName: 'Famotidine',
      drugClass: 'h2-blocker',
      drugSubclass: 'H2 Receptor Antagonist',
      description: 'Competitive H2 receptor antagonist that reduces gastric acid secretion',
      indications: ['GERD', 'Peptic ulcer disease', 'Heartburn prevention', 'Stress ulcer prophylaxis'],
      mechanism: {
        primaryMechanism: 'Competitively blocks histamine H2 receptors on gastric parietal cells',
        molecularTarget: 'Histamine H2 receptor',
        receptorType: 'H2',
        bindingType: 'antagonist',
        downstreamEffects: [
          'Reduced basal and stimulated acid secretion',
          'Increased gastric pH',
          'Reduced pepsin activity',
        ],
        timeToEffect: '1-3 hours',
        durationOfAction: '10-12 hours',
      },
      therapeuticTargets: [
        {
          targetId: 'h2-receptor',
          targetName: 'Histamine H2 Receptor',
          targetType: 'receptor',
          structureIds: ['stomach'],
          mechanism: 'Competitive antagonism blocks histamine-stimulated acid secretion',
          effect: 'Moderate reduction in gastric acid',
          highlightColor: '#22c55e',
        },
      ],
      affectedSystems: [
        {
          systemId: 'gastrointestinal',
          systemName: 'Gastrointestinal System',
          effectType: 'therapeutic',
          intensity: 'moderate',
          mechanism: 'Reduces acid secretion by ~70%',
          highlightColor: '#22c55e',
          affectedStructures: ['stomach'],
        },
      ],
      adverseEffects: [
        {
          effectId: 'headache',
          effectName: 'Headache',
          severity: 'mild',
          frequency: 'common',
          affectedStructures: ['head'],
          mechanism: 'Unknown',
          highlightColor: '#fca5a5',
        },
        {
          effectId: 'constipation',
          effectName: 'Constipation',
          severity: 'mild',
          frequency: 'uncommon',
          affectedStructures: ['colon'],
          mechanism: 'Unknown',
          highlightColor: '#fca5a5',
        },
      ],
      explanations: {
        level1: 'This medicine reduces stomach acid to relieve heartburn and help ulcers heal. It works within an hour.',
        level2: 'Famotidine blocks histamine signals that tell your stomach to make acid. It reduces acid by about 70% and works faster than omeprazole, but the effect is not as strong or long-lasting.',
        level3: 'Famotidine is an H2 receptor antagonist that competitively blocks histamine-stimulated acid secretion. It reduces acid secretion by ~70% but is less potent than PPIs. Useful for on-demand heartburn relief or when PPIs are contraindicated.',
        level4: 'Famotidine competitively antagonizes H2 receptors on parietal cell basolateral membranes. H2 receptor activation normally stimulates adenylyl cyclase, increasing cAMP and activating the apical proton pump. H2 blockers primarily affect histamine-mediated (nocturnal) acid secretion; gastrin and acetylcholine pathways remain functional, explaining the lesser efficacy versus PPIs.',
        level5: 'H2 receptors couple to Gαs, activating adenylyl cyclase and increasing cAMP. This activates PKA, which phosphorylates proteins involved in H+/K+-ATPase trafficking and activation. Famotidine competitive antagonism blocks histamine but not gastrin (CCK-B receptor) or acetylcholine (M3 receptor) stimulation. Tachyphylaxis occurs with continuous use due to receptor upregulation. Unlike PPIs, H2 blockers do not affect intrinsic factor secretion or significantly alter gut microbiome.',
      },
      anatomySettings: {
        recommendedView: 'anterior',
        recommendedLayers: ['digestive'],
        focusRegion: 'stomach',
      },
      patientEducation: [
        'Can take with or without food',
        'For heartburn prevention, take 15-60 minutes before eating',
        'Works faster than omeprazole but effect is not as strong',
        'Safe for occasional use; see doctor if needed daily',
      ],
    },
  ],
]);

// ============================================
// Store Functions
// ============================================

/**
 * Get medication by ID
 */
export function getMedication(medicationId: string): MedicationPhysiology | undefined {
  return medicationDatabase.get(medicationId.toLowerCase());
}

/**
 * Get all medications
 */
export function getAllMedications(): MedicationPhysiology[] {
  return Array.from(medicationDatabase.values());
}

/**
 * Get medication summaries for list display
 */
export function getMedicationSummaries(): MedicationSummary[] {
  return Array.from(medicationDatabase.values()).map((med) => ({
    medicationId: med.medicationId,
    brandNames: med.brandNames,
    genericName: med.genericName,
    drugClass: med.drugClass,
    primaryIndication: med.indications[0],
    primaryMechanism: med.mechanism.primaryMechanism,
  }));
}

/**
 * Search medications by name, brand, or class
 */
export function searchMedications(query: string): MedicationSearchResult[] {
  const normalizedQuery = query.toLowerCase().trim();
  const results: MedicationSearchResult[] = [];

  for (const med of medicationDatabase.values()) {
    let matchType: MedicationSearchResult['matchType'] | null = null;
    let relevanceScore = 0;

    // Exact generic match
    if (med.genericName.toLowerCase() === normalizedQuery) {
      matchType = 'exact';
      relevanceScore = 100;
    }
    // Brand name match
    else if (med.brandNames.some((b) => b.toLowerCase() === normalizedQuery)) {
      matchType = 'brand';
      relevanceScore = 95;
    }
    // Generic partial match
    else if (med.genericName.toLowerCase().includes(normalizedQuery)) {
      matchType = 'generic';
      relevanceScore = 80;
    }
    // Brand partial match
    else if (med.brandNames.some((b) => b.toLowerCase().includes(normalizedQuery))) {
      matchType = 'brand';
      relevanceScore = 75;
    }
    // Drug class match
    else if (med.drugClass.toLowerCase().includes(normalizedQuery) ||
             (med.drugSubclass && med.drugSubclass.toLowerCase().includes(normalizedQuery))) {
      matchType = 'class';
      relevanceScore = 60;
    }
    // Indication match
    else if (med.indications.some((i) => i.toLowerCase().includes(normalizedQuery))) {
      matchType = 'partial';
      relevanceScore = 50;
    }

    if (matchType) {
      results.push({
        medicationId: med.medicationId,
        genericName: med.genericName,
        brandNames: med.brandNames,
        matchType,
        relevanceScore,
      });
    }
  }

  return results.sort((a, b) => b.relevanceScore - a.relevanceScore);
}

/**
 * Get medications by drug class
 */
export function getMedicationsByClass(drugClass: string): MedicationPhysiology[] {
  return Array.from(medicationDatabase.values()).filter(
    (med) => med.drugClass === drugClass || med.drugSubclass?.toLowerCase().includes(drugClass.toLowerCase())
  );
}

/**
 * Get anatomy highlights for a medication
 */
export function getMedicationAnatomyHighlights(medicationId: string): MedicationAnatomyHighlight[] {
  const med = getMedication(medicationId);
  if (!med) return [];

  const highlights: MedicationAnatomyHighlight[] = [];

  // Add therapeutic target highlights
  for (const target of med.therapeuticTargets) {
    for (const structureId of target.structureIds) {
      highlights.push({
        structureId,
        structureName: target.targetName,
        highlightColor: target.highlightColor,
        effectType: 'therapeutic',
        intensity: 'strong',
        mechanism: target.mechanism,
      });
    }
  }

  // Add body system effect highlights
  for (const effect of med.affectedSystems) {
    if (effect.affectedStructures) {
      for (const structureId of effect.affectedStructures) {
        // Avoid duplicates
        if (!highlights.some((h) => h.structureId === structureId)) {
          highlights.push({
            structureId,
            structureName: effect.systemName,
            highlightColor: effect.highlightColor,
            effectType: effect.effectType,
            intensity: effect.intensity,
            mechanism: effect.mechanism,
          });
        }
      }
    }
  }

  return highlights;
}

/**
 * Get medications that affect a specific body system
 */
export function getMedicationsByAffectedSystem(systemId: string): MedicationPhysiology[] {
  return Array.from(medicationDatabase.values()).filter((med) =>
    med.affectedSystems.some((sys) => sys.systemId === systemId)
  );
}

/**
 * Check for interactions between two medications
 */
export function checkInteraction(
  medId1: string,
  medId2: string
): { hasInteraction: boolean; interaction?: import('./types').DrugInteraction } {
  const med1 = getMedication(medId1);
  if (!med1 || !med1.interactions) {
    return { hasInteraction: false };
  }

  const interaction = med1.interactions.find(
    (i) => i.interactingDrugId === medId2
  );

  return {
    hasInteraction: !!interaction,
    interaction,
  };
}
