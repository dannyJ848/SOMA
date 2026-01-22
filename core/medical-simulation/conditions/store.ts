/**
 * Condition Database Store
 *
 * Comprehensive database of medical conditions with simulation data
 * including pathophysiology, progression, and treatment options.
 */

import type {
  ConditionSimulation,
  ConditionSummary,
  ConditionSearchResult,
  ConditionCategory,
} from './types';

// ============================================
// Condition Database
// ============================================

const conditionDatabase: Map<string, ConditionSimulation> = new Map([
  // ============================================
  // CARDIOVASCULAR CONDITIONS
  // ============================================

  // Hypertension
  [
    'hypertension',
    {
      conditionId: 'hypertension',
      name: 'Hypertension',
      aliases: ['High Blood Pressure', 'HTN', 'Essential Hypertension'],
      icdCode: 'I10',
      category: 'cardiovascular',
      subcategory: 'Vascular',
      description:
        'Chronic elevation of systemic blood pressure that increases risk of heart disease, stroke, and kidney damage',
      pathophysiology: {
        summary:
          'Sustained elevation of arterial blood pressure due to increased peripheral vascular resistance and/or cardiac output',
        mechanisms: [
          {
            name: 'Increased Vascular Resistance',
            description:
              'Arterial wall thickening and vasoconstriction increase resistance to blood flow',
            systemsInvolved: ['Cardiovascular', 'Renal'],
            keyMediators: ['Angiotensin II', 'Endothelin', 'Norepinephrine'],
            contribution: 'Primary driver of elevated blood pressure in most cases',
          },
          {
            name: 'RAAS Overactivation',
            description:
              'Renin-angiotensin-aldosterone system causes vasoconstriction and sodium retention',
            systemsInvolved: ['Cardiovascular', 'Renal', 'Endocrine'],
            keyMediators: ['Renin', 'Angiotensin II', 'Aldosterone'],
            contribution: 'Contributes to both acute and chronic blood pressure elevation',
          },
          {
            name: 'Sympathetic Overactivity',
            description:
              'Increased sympathetic nervous system activity increases heart rate and vasoconstriction',
            systemsInvolved: ['Cardiovascular', 'Nervous'],
            keyMediators: ['Norepinephrine', 'Epinephrine'],
            contribution: 'Contributes to initial and sustained hypertension',
          },
        ],
        riskFactors: [
          {
            name: 'Age',
            type: 'non-modifiable',
            impact: 'major',
            description: 'Blood vessels stiffen with age, increasing systolic pressure',
          },
          {
            name: 'Obesity',
            type: 'modifiable',
            impact: 'major',
            description: 'Increases cardiac output and activates RAAS',
            intervention: 'Weight loss of 5-10% can significantly reduce BP',
          },
          {
            name: 'High Sodium Intake',
            type: 'modifiable',
            impact: 'moderate',
            description: 'Causes fluid retention and increases blood volume',
            intervention: 'Reduce sodium to <2300mg/day (ideally <1500mg)',
          },
          {
            name: 'Family History',
            type: 'non-modifiable',
            impact: 'moderate',
            description: 'Genetic factors influence BP regulation',
          },
          {
            name: 'Physical Inactivity',
            type: 'modifiable',
            impact: 'moderate',
            description: 'Reduces vascular compliance and increases weight',
            intervention: '150 minutes/week moderate aerobic exercise',
          },
        ],
      },
      clinicalPresentation: {
        primarySymptoms: [
          {
            name: 'Often Asymptomatic',
            prevalence: 'very-common',
            description:
              'Most patients have no symptoms until target organ damage occurs',
            timing: 'Throughout disease course',
          },
          {
            name: 'Headache',
            prevalence: 'common',
            description: 'Particularly morning headaches with severe hypertension',
            location: 'Occipital region',
            timing: 'More common with hypertensive urgency/emergency',
          },
        ],
        associatedSymptoms: [
          {
            name: 'Dizziness',
            prevalence: 'uncommon',
            description: 'May occur with very high or rapidly changing BP',
          },
          {
            name: 'Visual Changes',
            prevalence: 'uncommon',
            description: 'Blurred vision with hypertensive retinopathy',
            timing: 'Advanced disease',
          },
        ],
        labFindings: [
          {
            testName: 'Basic Metabolic Panel',
            abnormality:
              'May show elevated creatinine in advanced cases (kidney damage)',
            significance: 'Assesses renal function as target organ',
          },
          {
            testName: 'Lipid Panel',
            abnormality: 'Often shows dyslipidemia as comorbidity',
            significance: 'Cardiovascular risk stratification',
          },
        ],
      },
      progression: {
        naturalHistory:
          'Without treatment, hypertension progressively damages blood vessels and target organs over years to decades',
        typicalOnsetToDiagnosis: 'Often years (silent disease)',
        timelineSteps: [
          {
            phaseId: 'prehypertension',
            phase: 'preclinical',
            displayName: 'Pre-Hypertension',
            timeframe: 'BP 120-139/80-89',
            description:
              'Elevated blood pressure not yet meeting hypertension criteria',
            symptoms: ['Usually none'],
            anatomicalChanges: [
              {
                structureId: 'arteries',
                structureName: 'Arteries',
                changeType: 'dysfunction',
                description: 'Early endothelial dysfunction',
                severity: 'mild',
                visualIndicator: { color: '#fbbf24', pulse: false, opacity: 0.4 },
                isNewAtPhase: true,
              },
            ],
            reversibility: 'reversible',
            typicalTreatments: ['Lifestyle modification'],
            goalsOfCare: ['Prevent progression to hypertension'],
          },
          {
            phaseId: 'stage1',
            phase: 'early',
            displayName: 'Stage 1 Hypertension',
            timeframe: 'BP 130-139/80-89',
            description: 'Mild hypertension with minimal target organ damage',
            symptoms: ['Usually asymptomatic', 'Occasional headaches'],
            anatomicalChanges: [
              {
                structureId: 'arteries',
                structureName: 'Arteries',
                changeType: 'hypertrophy',
                description: 'Arterial wall thickening begins',
                severity: 'mild',
                visualIndicator: { color: '#f97316', pulse: false, opacity: 0.5 },
                isNewAtPhase: true,
              },
              {
                structureId: 'heart',
                structureName: 'Heart',
                changeType: 'hypertrophy',
                description: 'Early left ventricular hypertrophy',
                severity: 'mild',
                visualIndicator: { color: '#f97316', pulse: false, opacity: 0.4 },
                isNewAtPhase: true,
              },
            ],
            reversibility: 'reversible',
            typicalTreatments: ['Lifestyle modification', 'Consider medication if high CV risk'],
            goalsOfCare: ['BP <130/80', 'Prevent progression'],
          },
          {
            phaseId: 'stage2',
            phase: 'established',
            displayName: 'Stage 2 Hypertension',
            timeframe: 'BP ≥140/90',
            duration: 'Ongoing without treatment',
            description: 'Moderate to severe hypertension with developing target organ damage',
            symptoms: ['Often asymptomatic', 'Headaches', 'Fatigue'],
            anatomicalChanges: [
              {
                structureId: 'arteries',
                structureName: 'Arteries',
                changeType: 'hypertrophy',
                description: 'Significant arterial wall thickening and stiffening',
                severity: 'moderate',
                visualIndicator: { color: '#ef4444', pulse: false, opacity: 0.6 },
                isNewAtPhase: false,
              },
              {
                structureId: 'heart',
                structureName: 'Heart (Left Ventricle)',
                changeType: 'hypertrophy',
                description: 'Left ventricular hypertrophy with diastolic dysfunction',
                severity: 'moderate',
                visualIndicator: { color: '#ef4444', pulse: true, opacity: 0.6 },
                isNewAtPhase: false,
              },
              {
                structureId: 'kidney',
                structureName: 'Kidneys',
                changeType: 'dysfunction',
                description: 'Early nephrosclerosis with proteinuria',
                severity: 'mild',
                visualIndicator: { color: '#f97316', pulse: false, opacity: 0.5 },
                isNewAtPhase: true,
              },
            ],
            labMarkers: ['Elevated creatinine', 'Microalbuminuria'],
            reversibility: 'partially-reversible',
            typicalTreatments: ['Combination antihypertensives', 'ACE inhibitor/ARB', 'Lifestyle'],
            goalsOfCare: ['BP <130/80', 'Prevent target organ damage'],
          },
          {
            phaseId: 'complicated',
            phase: 'advanced',
            displayName: 'Hypertension with Target Organ Damage',
            timeframe: 'Years of uncontrolled HTN',
            description:
              'Established damage to heart, kidneys, brain, or eyes',
            symptoms: ['Dyspnea on exertion', 'Chest pain', 'Visual changes', 'Edema'],
            anatomicalChanges: [
              {
                structureId: 'heart',
                structureName: 'Heart',
                changeType: 'hypertrophy',
                description: 'Significant LVH with heart failure symptoms',
                severity: 'severe',
                visualIndicator: { color: '#dc2626', pulse: true, opacity: 0.8 },
                isNewAtPhase: false,
              },
              {
                structureId: 'kidney',
                structureName: 'Kidneys',
                changeType: 'fibrosis',
                description: 'Nephrosclerosis with CKD',
                severity: 'moderate',
                visualIndicator: { color: '#ef4444', pulse: false, opacity: 0.7 },
                isNewAtPhase: false,
              },
              {
                structureId: 'brain',
                structureName: 'Brain',
                changeType: 'ischemia',
                description: 'Small vessel disease with lacunar infarcts',
                severity: 'moderate',
                visualIndicator: { color: '#7c3aed', pulse: false, opacity: 0.6 },
                isNewAtPhase: true,
              },
              {
                structureId: 'eyes',
                structureName: 'Retina',
                changeType: 'ischemia',
                description: 'Hypertensive retinopathy',
                severity: 'moderate',
                visualIndicator: { color: '#7c3aed', pulse: false, opacity: 0.5 },
                isNewAtPhase: true,
              },
            ],
            reversibility: 'partially-reversible',
            typicalTreatments: ['Multiple antihypertensives', 'Treat comorbidities', 'Close monitoring'],
            goalsOfCare: ['Prevent further damage', 'Manage complications'],
          },
        ],
        progressionFactors: [
          'Medication non-adherence',
          'Continued high sodium intake',
          'Obesity',
          'Diabetes',
          'Smoking',
        ],
        prognosis:
          'With good BP control, life expectancy approaches normal. Uncontrolled HTN significantly increases CV mortality.',
      },
      complications: [
        {
          complicationId: 'stroke',
          name: 'Stroke',
          category: 'acute',
          severity: 'life-threatening',
          riskLevel: 'high',
          description: 'Cerebrovascular accident due to ischemia or hemorrhage',
          mechanism:
            'Chronic HTN damages cerebral vessels, leading to rupture or thrombosis',
          affectedStructures: [
            {
              structureId: 'brain',
              structureName: 'Brain',
              effect: 'Ischemic or hemorrhagic damage',
              highlightColor: '#7c3aed',
            },
          ],
          warningSymptoms: [
            'Sudden weakness/numbness',
            'Speech difficulty',
            'Vision loss',
            'Severe headache',
          ],
          prevention: ['BP control', 'Antiplatelet therapy if indicated'],
          preventable: true,
        },
        {
          complicationId: 'heart-failure',
          name: 'Heart Failure',
          category: 'chronic',
          severity: 'major',
          riskLevel: 'high',
          description: 'Heart unable to pump effectively due to chronic pressure overload',
          mechanism: 'LVH progresses to diastolic then systolic dysfunction',
          affectedStructures: [
            {
              structureId: 'heart',
              structureName: 'Heart',
              effect: 'Ventricular dysfunction',
              highlightColor: '#dc2626',
            },
            {
              structureId: 'lungs',
              structureName: 'Lungs',
              effect: 'Pulmonary congestion',
              highlightColor: '#06b6d4',
            },
          ],
          warningSymptoms: ['Dyspnea', 'Orthopnea', 'Peripheral edema', 'Fatigue'],
          prevention: ['Aggressive BP control', 'ACE inhibitors/ARBs'],
          treatment: 'GDMT for heart failure',
          preventable: true,
        },
        {
          complicationId: 'ckd',
          name: 'Chronic Kidney Disease',
          category: 'chronic',
          severity: 'major',
          riskLevel: 'moderate',
          description: 'Progressive loss of kidney function',
          mechanism: 'Nephrosclerosis from chronic high pressure in renal vasculature',
          affectedStructures: [
            {
              structureId: 'kidney',
              structureName: 'Kidneys',
              effect: 'Glomerular scarring and tubular damage',
              highlightColor: '#ef4444',
            },
          ],
          warningSymptoms: ['Fatigue', 'Swelling', 'Decreased urine output', 'Nausea'],
          prevention: ['BP control', 'ACE inhibitors/ARBs for renoprotection'],
          preventable: true,
        },
      ],
      treatmentOptions: [
        {
          treatmentId: 'lifestyle-htn',
          name: 'Lifestyle Modification',
          modality: 'lifestyle',
          description:
            'Diet, exercise, weight loss, and sodium restriction',
          efficacy: 'effective',
          evidenceLevel: 'level-1a',
          isFirstLine: true,
          appropriatePhases: ['preclinical', 'early', 'established', 'advanced'],
          goals: ['Reduce BP by 5-15 mmHg', 'Improve overall CV health'],
          expectedOutcomes: ['BP reduction', 'Weight loss', 'Improved lipids'],
          timeToEffect: '4-12 weeks',
          explanations: {
            level1:
              'Eating less salt, losing weight, and exercising can lower your blood pressure naturally.',
            level2:
              'Lifestyle changes including the DASH diet (rich in fruits, vegetables, low-fat dairy), reducing sodium to less than 2300mg daily, maintaining healthy weight, and regular exercise can significantly reduce blood pressure.',
            level3:
              'First-line treatment for all stages of hypertension. DASH diet reduces BP by 8-14 mmHg. Sodium restriction to <1500mg/day adds 5-6 mmHg reduction. Weight loss of 1kg reduces BP by approximately 1 mmHg.',
            level4:
              'Lifestyle interventions have class IA evidence for hypertension management. DASH diet impacts the renin-angiotensin system and improves endothelial function. Physical activity enhances nitric oxide bioavailability and reduces sympathetic tone.',
            level5:
              'Dietary sodium reduction decreases plasma volume and reduces vascular smooth muscle reactivity. DASH diet provides potassium, magnesium, and calcium which optimize vascular function. Aerobic exercise improves arterial compliance through enhanced NO production and reduced oxidative stress.',
          },
        },
        {
          treatmentId: 'ace-inhibitor-htn',
          name: 'ACE Inhibitors',
          modality: 'pharmacological',
          description: 'Block angiotensin-converting enzyme to reduce BP',
          mechanism:
            'Inhibits ACE, reducing angiotensin II and aldosterone levels, causing vasodilation',
          efficacy: 'highly-effective',
          evidenceLevel: 'level-1a',
          isFirstLine: true,
          appropriatePhases: ['early', 'established', 'advanced'],
          goals: ['Reduce BP to target', 'Provide cardio/renoprotection'],
          expectedOutcomes: ['10-15 mmHg systolic reduction', 'Reduced CV events'],
          timeToEffect: '1-2 weeks',
          medicationIds: ['lisinopril'],
          contraindications: ['Pregnancy', 'History of angioedema', 'Bilateral renal artery stenosis'],
          sideEffects: ['Dry cough', 'Hyperkalemia', 'Angioedema (rare)'],
          monitoring: ['Potassium', 'Creatinine', 'Blood pressure'],
          explanations: {
            level1:
              'These medications relax your blood vessels by blocking a chemical that makes them tight.',
            level2:
              'ACE inhibitors like lisinopril block an enzyme that causes blood vessels to constrict, allowing them to relax and lower blood pressure.',
            level3:
              'First-line agents that block the conversion of angiotensin I to angiotensin II. Particularly beneficial in patients with diabetes, CKD, or heart failure due to cardio- and renoprotective effects.',
            level4:
              'ACE inhibitors reduce afterload through decreased angiotensin II-mediated vasoconstriction and reduce preload through decreased aldosterone-mediated sodium retention. They provide end-organ protection beyond BP lowering.',
            level5:
              'Mechanism involves competitive inhibition of ACE, reducing Ang II production and bradykinin degradation. The increased bradykinin contributes to vasodilation via NO and prostacyclin but causes cough. Renoprotection occurs through efferent arteriolar dilation reducing intraglomerular pressure.',
          },
        },
        {
          treatmentId: 'ccb-htn',
          name: 'Calcium Channel Blockers',
          modality: 'pharmacological',
          description: 'Block calcium entry into vascular smooth muscle',
          mechanism:
            'Inhibits L-type calcium channels, causing vasodilation',
          efficacy: 'highly-effective',
          evidenceLevel: 'level-1a',
          isFirstLine: true,
          appropriatePhases: ['early', 'established', 'advanced'],
          goals: ['Reduce BP to target'],
          expectedOutcomes: ['10-15 mmHg systolic reduction'],
          timeToEffect: '1-2 weeks',
          medicationIds: ['amlodipine'],
          contraindications: ['Severe aortic stenosis', 'Heart failure with reduced EF (for non-DHP)'],
          sideEffects: ['Peripheral edema', 'Flushing', 'Constipation'],
          monitoring: ['Blood pressure', 'Heart rate', 'Edema'],
          explanations: {
            level1:
              'These medications relax your blood vessels by blocking calcium from entering the vessel walls.',
            level2:
              'Calcium channel blockers like amlodipine prevent calcium from entering blood vessel walls, which relaxes them and lowers blood pressure.',
            level3:
              'Dihydropyridine CCBs (amlodipine, nifedipine) primarily cause vasodilation. Non-dihydropyridines (diltiazem, verapamil) also reduce heart rate. Particularly effective in elderly and African American patients.',
            level4:
              'L-type calcium channel blockade in vascular smooth muscle reduces calcium-dependent contraction, causing arterial vasodilation. DHPs are vascular-selective while non-DHPs also affect cardiac myocytes.',
            level5:
              'DHPs bind to the alpha-1 subunit of L-type calcium channels in vascular smooth muscle, reducing calcium influx during depolarization. This decreases actin-myosin cross-bridge formation. Reflex tachycardia may occur due to baroreceptor response to acute BP drop.',
          },
        },
      ],
      anatomyMapping: {
        primaryStructures: [
          {
            structureId: 'heart',
            structureName: 'Heart',
            role: 'target-organ',
            involvement: 'Develops left ventricular hypertrophy and eventual failure',
            highlightColor: '#dc2626',
            showByDefault: true,
          },
          {
            structureId: 'arteries',
            structureName: 'Arteries',
            role: 'primary-site',
            involvement: 'Site of increased resistance and vascular damage',
            highlightColor: '#ef4444',
            showByDefault: true,
          },
        ],
        secondaryStructures: [
          {
            structureId: 'kidney',
            structureName: 'Kidneys',
            role: 'target-organ',
            involvement: 'Develops nephrosclerosis',
            highlightColor: '#f97316',
            showByDefault: true,
          },
          {
            structureId: 'brain',
            structureName: 'Brain',
            role: 'target-organ',
            involvement: 'Risk of stroke and small vessel disease',
            highlightColor: '#7c3aed',
            showByDefault: false,
          },
          {
            structureId: 'eyes',
            structureName: 'Eyes',
            role: 'target-organ',
            involvement: 'Hypertensive retinopathy',
            highlightColor: '#7c3aed',
            showByDefault: false,
          },
        ],
        systemsInvolved: ['Cardiovascular', 'Renal', 'Nervous'],
        recommendedView: 'anterior',
        recommendedLayers: ['cardiovascular', 'urinary'],
        focusRegion: 'thorax',
      },
      explanations: {
        level1:
          'High blood pressure means your heart has to work harder than normal to push blood through your body. Over time, this can damage your heart and blood vessels.',
        level2:
          'Hypertension occurs when the force of blood against your artery walls is consistently too high. This extra pressure makes your heart work harder and can damage your arteries, heart, brain, kidneys, and eyes over time.',
        level3:
          'Essential hypertension results from increased peripheral vascular resistance and/or cardiac output. Key mechanisms include RAAS activation, sympathetic overactivity, and endothelial dysfunction. Target organs include the heart (LVH), kidneys (nephrosclerosis), brain (stroke), and eyes (retinopathy).',
        level4:
          'Hypertension pathophysiology involves complex interactions between the RAAS, sympathetic nervous system, endothelium, and kidneys. Vascular remodeling increases peripheral resistance. Target organ damage manifests as left ventricular hypertrophy, nephrosclerosis with proteinuria, cerebral small vessel disease, and hypertensive retinopathy.',
        level5:
          'Essential hypertension represents a polygenic disorder influenced by renal sodium handling, vascular smooth muscle tone, endothelial function, and neurohumoral regulation. Endothelial dysfunction reduces NO bioavailability while increasing endothelin-1 and reactive oxygen species. Arterial stiffening from medial hypertrophy and elastin degradation contributes to systolic hypertension in aging. RAAS-mediated effects include direct vasoconstriction (AT1 receptors), aldosterone-induced sodium retention, and promotion of vascular inflammation and fibrosis.',
      },
      relatedConditions: ['heart-failure', 'coronary-artery-disease', 'stroke', 'ckd'],
      comorbidities: ['diabetes', 'hyperlipidemia', 'obesity'],
      epidemiology: {
        prevalence: '45% of US adults',
        incidence: '~4% annual incidence in adults',
        demographics: 'Increases with age; higher in African Americans',
      },
      clinicalPearls: [
        'Most hypertension is asymptomatic - "silent killer"',
        'Target BP <130/80 for most adults',
        'Always check for secondary causes in resistant or young-onset HTN',
        'RAAS blockade provides renoprotection beyond BP lowering',
      ],
      patientEducation: [
        'Take medications at the same time daily',
        'Monitor your blood pressure at home',
        'Limit sodium to less than 2300mg per day',
        'Maintain a healthy weight through diet and exercise',
        'Limit alcohol consumption',
        'Do not stop medications without consulting your doctor',
      ],
      emergencyWarnings: [
        'Severe headache with vision changes',
        'Chest pain or shortness of breath',
        'Sudden weakness or numbness',
        'Difficulty speaking or understanding',
        'BP >180/120 with symptoms',
      ],
    },
  ],

  // Heart Failure
  [
    'heart-failure',
    {
      conditionId: 'heart-failure',
      name: 'Heart Failure',
      aliases: ['Congestive Heart Failure', 'CHF', 'HF'],
      icdCode: 'I50.9',
      category: 'cardiovascular',
      subcategory: 'Cardiac',
      description:
        'Syndrome where the heart cannot pump blood effectively to meet the body\'s metabolic demands',
      pathophysiology: {
        summary:
          'Cardiac dysfunction leads to inadequate tissue perfusion and fluid accumulation',
        mechanisms: [
          {
            name: 'Neurohormonal Activation',
            description:
              'RAAS and sympathetic activation initially compensate but eventually worsen function',
            systemsInvolved: ['Cardiovascular', 'Renal', 'Endocrine'],
            keyMediators: [
              'Norepinephrine',
              'Angiotensin II',
              'Aldosterone',
              'BNP',
            ],
            contribution:
              'Causes vasoconstriction, fluid retention, and adverse cardiac remodeling',
          },
          {
            name: 'Ventricular Remodeling',
            description:
              'Chamber dilation and wall thinning with altered geometry',
            systemsInvolved: ['Cardiovascular'],
            keyMediators: ['Angiotensin II', 'TGF-beta', 'Matrix metalloproteinases'],
            contribution: 'Progressive decline in cardiac function',
          },
        ],
        riskFactors: [
          {
            name: 'Coronary Artery Disease',
            type: 'partially-modifiable',
            impact: 'major',
            description: 'Leading cause of HF through myocardial damage',
            intervention: 'Revascularization, risk factor control',
          },
          {
            name: 'Hypertension',
            type: 'modifiable',
            impact: 'major',
            description: 'Causes pressure overload and LVH',
            intervention: 'Blood pressure control',
          },
          {
            name: 'Diabetes',
            type: 'partially-modifiable',
            impact: 'moderate',
            description: 'Diabetic cardiomyopathy and accelerated atherosclerosis',
            intervention: 'Glycemic control, SGLT2 inhibitors',
          },
        ],
      },
      clinicalPresentation: {
        primarySymptoms: [
          {
            name: 'Dyspnea',
            prevalence: 'very-common',
            description: 'Shortness of breath, initially on exertion, progressing to rest',
            quality: 'Air hunger, cannot catch breath',
            timing: 'Worse with activity and lying flat',
          },
          {
            name: 'Fatigue',
            prevalence: 'very-common',
            description: 'Decreased exercise tolerance and persistent tiredness',
          },
          {
            name: 'Peripheral Edema',
            prevalence: 'common',
            description: 'Swelling of ankles, legs, and sometimes abdomen',
            location: 'Lower extremities, sacral area if bedridden',
            timing: 'Worse at end of day',
          },
        ],
        associatedSymptoms: [
          {
            name: 'Orthopnea',
            prevalence: 'common',
            description: 'Difficulty breathing when lying flat',
          },
          {
            name: 'Paroxysmal Nocturnal Dyspnea',
            prevalence: 'common',
            description: 'Waking up at night gasping for air',
          },
        ],
        physicalFindings: [
          {
            name: 'Jugular Venous Distension',
            examType: 'Cardiovascular',
            description: 'Elevated JVP indicating fluid overload',
            diagnosticValue: 'Highly specific for elevated filling pressures',
          },
          {
            name: 'S3 Gallop',
            examType: 'Cardiovascular',
            description: 'Third heart sound indicating volume overload',
            diagnosticValue: 'Specific for decompensated HF',
          },
        ],
        labFindings: [
          {
            testName: 'BNP/NT-proBNP',
            abnormality: 'Elevated (BNP >100, NT-proBNP >300)',
            significance: 'Correlates with wall stress and HF severity',
          },
        ],
      },
      progression: {
        naturalHistory:
          'Progressive syndrome with episodic decompensations and declining function',
        timelineSteps: [
          {
            phaseId: 'stage-a',
            phase: 'preclinical',
            displayName: 'Stage A - At Risk',
            timeframe: 'Risk factors present',
            description: 'High risk for HF but no structural disease or symptoms',
            symptoms: ['None from HF'],
            anatomicalChanges: [],
            reversibility: 'reversible',
            typicalTreatments: ['Risk factor control'],
            goalsOfCare: ['Prevent structural heart disease'],
          },
          {
            phaseId: 'stage-b',
            phase: 'early',
            displayName: 'Stage B - Pre-HF',
            timeframe: 'Structural disease present',
            description: 'Structural heart disease but no HF symptoms',
            symptoms: ['None or minimal'],
            anatomicalChanges: [
              {
                structureId: 'heart',
                structureName: 'Heart',
                changeType: 'hypertrophy',
                description: 'LVH or reduced EF without symptoms',
                severity: 'mild',
                visualIndicator: { color: '#f97316', pulse: false, opacity: 0.5 },
                isNewAtPhase: true,
              },
            ],
            reversibility: 'partially-reversible',
            typicalTreatments: ['ACE inhibitor/ARB', 'Beta-blocker if reduced EF'],
            goalsOfCare: ['Prevent symptoms', 'Prevent progression'],
          },
          {
            phaseId: 'stage-c',
            phase: 'established',
            displayName: 'Stage C - Symptomatic HF',
            timeframe: 'NYHA Class I-III',
            description: 'Structural heart disease with current or prior HF symptoms',
            symptoms: [
              'Dyspnea on exertion',
              'Fatigue',
              'Reduced exercise tolerance',
              'Peripheral edema',
            ],
            anatomicalChanges: [
              {
                structureId: 'heart',
                structureName: 'Heart',
                changeType: 'dilation',
                description: 'Ventricular dilation with reduced function',
                severity: 'moderate',
                visualIndicator: { color: '#ef4444', pulse: true, opacity: 0.6 },
                isNewAtPhase: false,
              },
              {
                structureId: 'lungs',
                structureName: 'Lungs',
                changeType: 'edema',
                description: 'Pulmonary congestion',
                severity: 'moderate',
                visualIndicator: { color: '#06b6d4', pulse: false, opacity: 0.5 },
                isNewAtPhase: true,
              },
            ],
            reversibility: 'partially-reversible',
            typicalTreatments: [
              'GDMT: ACEi/ARB/ARNI, Beta-blocker, MRA, SGLT2i',
              'Diuretics for congestion',
            ],
            goalsOfCare: ['Reduce symptoms', 'Prevent hospitalization', 'Improve survival'],
          },
          {
            phaseId: 'stage-d',
            phase: 'advanced',
            displayName: 'Stage D - Advanced HF',
            timeframe: 'NYHA Class IV',
            description: 'Refractory HF requiring specialized interventions',
            symptoms: [
              'Symptoms at rest',
              'Recurrent hospitalizations',
              'Requires IV inotropes',
            ],
            anatomicalChanges: [
              {
                structureId: 'heart',
                structureName: 'Heart',
                changeType: 'dilation',
                description: 'Severely dilated with poor function',
                severity: 'severe',
                visualIndicator: { color: '#dc2626', pulse: true, opacity: 0.8 },
                isNewAtPhase: false,
              },
              {
                structureId: 'lungs',
                structureName: 'Lungs',
                changeType: 'edema',
                description: 'Severe pulmonary congestion',
                severity: 'severe',
                visualIndicator: { color: '#06b6d4', pulse: true, opacity: 0.7 },
                isNewAtPhase: false,
              },
              {
                structureId: 'kidney',
                structureName: 'Kidneys',
                changeType: 'dysfunction',
                description: 'Cardiorenal syndrome',
                severity: 'moderate',
                visualIndicator: { color: '#f97316', pulse: false, opacity: 0.6 },
                isNewAtPhase: true,
              },
            ],
            reversibility: 'irreversible',
            typicalTreatments: ['Advanced therapies', 'Consider transplant/LVAD', 'Palliative care'],
            goalsOfCare: ['Quality of life', 'Symptom management'],
          },
        ],
        prognosis:
          '50% mortality at 5 years. GDMT significantly improves survival.',
      },
      complications: [
        {
          complicationId: 'acute-decompensation',
          name: 'Acute Decompensated Heart Failure',
          category: 'acute',
          severity: 'major',
          riskLevel: 'high',
          description: 'Rapid worsening of HF symptoms requiring hospitalization',
          mechanism: 'Fluid overload, reduced cardiac output',
          affectedStructures: [
            {
              structureId: 'lungs',
              structureName: 'Lungs',
              effect: 'Pulmonary edema',
              highlightColor: '#06b6d4',
            },
          ],
          warningSymptoms: ['Worsening dyspnea', 'Weight gain >2-3 lbs/day', 'Increasing edema'],
          prevention: ['Medication adherence', 'Sodium restriction', 'Daily weights'],
          preventable: true,
        },
        {
          complicationId: 'arrhythmia',
          name: 'Arrhythmia',
          category: 'both',
          severity: 'major',
          riskLevel: 'high',
          description: 'Atrial fibrillation or ventricular arrhythmias',
          mechanism: 'Structural remodeling creates arrhythmogenic substrate',
          affectedStructures: [
            {
              structureId: 'heart',
              structureName: 'Heart',
              effect: 'Electrical instability',
              highlightColor: '#dc2626',
            },
          ],
          warningSymptoms: ['Palpitations', 'Syncope', 'Sudden worsening of symptoms'],
          prevention: ['Beta-blockers', 'ICD if indicated'],
          preventable: true,
        },
      ],
      treatmentOptions: [
        {
          treatmentId: 'gdmt-hf',
          name: 'Guideline-Directed Medical Therapy',
          modality: 'pharmacological',
          description:
            'Four-pillar therapy: ACEi/ARB/ARNI + Beta-blocker + MRA + SGLT2i',
          efficacy: 'highly-effective',
          evidenceLevel: 'level-1a',
          isFirstLine: true,
          appropriatePhases: ['early', 'established'],
          goals: ['Improve survival', 'Reduce hospitalizations', 'Improve symptoms'],
          expectedOutcomes: ['30-40% mortality reduction with full GDMT'],
          timeToEffect: 'Weeks to months',
          medicationIds: ['lisinopril', 'metoprolol'],
          explanations: {
            level1:
              'These medications help your heart pump better and live longer.',
            level2:
              'Guideline-directed therapy includes four types of medications that work together to help your heart, reduce fluid buildup, and significantly improve survival.',
            level3:
              'GDMT for HFrEF includes: ACEi/ARB/ARNI (reduce afterload, prevent remodeling), beta-blockers (reduce heart rate, reverse remodeling), MRA (block aldosterone effects), SGLT2i (reduce preload, cardioprotection).',
            level4:
              'Each component of GDMT independently reduces mortality. The combination provides additive benefit. ARNi superior to ACEi alone. Beta-blockers should be titrated to target doses. SGLT2 inhibitors benefit regardless of diabetes status.',
            level5:
              'GDMT targets neurohormonal activation: RAAS inhibition reduces angiotensin II-mediated vasoconstriction, aldosterone-induced sodium retention, and adverse remodeling. Beta-blockade reduces catecholamine toxicity and improves calcium handling. SGLT2 inhibitors have pleiotropic effects including reduced preload, improved energetics, and anti-inflammatory effects.',
          },
        },
        {
          treatmentId: 'diuretics-hf',
          name: 'Diuretics',
          modality: 'pharmacological',
          description: 'Loop diuretics for volume management',
          efficacy: 'highly-effective',
          evidenceLevel: 'level-1b',
          isFirstLine: true,
          appropriatePhases: ['established', 'advanced'],
          goals: ['Relieve congestion', 'Improve symptoms'],
          timeToEffect: 'Hours to days',
          explanations: {
            level1: 'Water pills help remove extra fluid from your body.',
            level2:
              'Diuretics make you urinate more, removing the excess fluid that causes swelling and breathing problems.',
            level3:
              'Loop diuretics (furosemide, bumetanide) are the cornerstone of decongestion. Dose titrated to achieve euvolemia. No mortality benefit but essential for symptom relief.',
            level4:
              'Loop diuretics inhibit NKCC2 in the thick ascending limb, producing potent diuresis. Diuretic resistance may develop requiring dose escalation or combination therapy with thiazides.',
            level5:
              'Loop diuretics block the Na-K-2Cl cotransporter in the medullary thick ascending limb, disrupting the countercurrent multiplier and producing hypotonic urine. Chronic use leads to nephron remodeling with distal tubule hypertrophy, reducing efficacy over time.',
          },
        },
      ],
      anatomyMapping: {
        primaryStructures: [
          {
            structureId: 'heart',
            structureName: 'Heart',
            role: 'primary-site',
            involvement: 'Impaired pumping function',
            highlightColor: '#dc2626',
            showByDefault: true,
          },
        ],
        secondaryStructures: [
          {
            structureId: 'lungs',
            structureName: 'Lungs',
            role: 'target-organ',
            involvement: 'Pulmonary congestion and edema',
            highlightColor: '#06b6d4',
            showByDefault: true,
          },
          {
            structureId: 'kidney',
            structureName: 'Kidneys',
            role: 'target-organ',
            involvement: 'Cardiorenal syndrome',
            highlightColor: '#f97316',
            showByDefault: false,
          },
        ],
        systemsInvolved: ['Cardiovascular', 'Respiratory', 'Renal'],
        recommendedView: 'anterior',
        recommendedLayers: ['cardiovascular', 'respiratory'],
        focusRegion: 'thorax',
      },
      explanations: {
        level1:
          'Heart failure means your heart is not pumping blood as well as it should. This causes fluid to build up and makes you feel tired and short of breath.',
        level2:
          'In heart failure, your heart muscle is weakened or stiff and cannot pump enough blood to meet your body\'s needs. This leads to fluid backing up in your lungs and legs, causing shortness of breath and swelling.',
        level3:
          'Heart failure is a clinical syndrome characterized by inadequate cardiac output and/or elevated filling pressures. It may involve systolic dysfunction (reduced ejection fraction) or diastolic dysfunction (preserved ejection fraction). The body compensates through neurohormonal activation, which initially helps but eventually worsens the condition.',
        level4:
          'HF pathophysiology involves a vicious cycle of neurohormonal activation (RAAS, SNS, natriuretic peptides) leading to fluid retention, vasoconstriction, and adverse cardiac remodeling. HFrEF features reduced contractility and chamber dilation. HFpEF features impaired relaxation and elevated filling pressures with relatively normal EF.',
        level5:
          'In HFrEF, myocyte loss (ischemia, toxins, genetic) triggers remodeling with chamber dilation and eccentric hypertrophy. Calcium handling abnormalities reduce contractility. Neurohormonal activation initially maintains output but promotes fibrosis, hypertrophy, and apoptosis. In HFpEF, concentric hypertrophy with increased passive stiffness (titin phosphorylation, collagen deposition) impairs filling. Microvascular inflammation and endothelial dysfunction contribute to both phenotypes.',
      },
      relatedConditions: ['hypertension', 'coronary-artery-disease', 'atrial-fibrillation'],
      comorbidities: ['ckd', 'diabetes', 'anemia'],
      epidemiology: {
        prevalence: '6.2 million US adults',
        demographics: 'Increases with age; equal in men and women',
      },
      patientEducation: [
        'Weigh yourself daily - report gain >2-3 lbs',
        'Limit sodium to <2000mg daily',
        'Take all medications as prescribed',
        'Restrict fluids if advised by your doctor',
        'Report worsening symptoms immediately',
      ],
      emergencyWarnings: [
        'Severe difficulty breathing',
        'Chest pain',
        'Fainting or near-fainting',
        'Coughing up pink/frothy sputum',
        'Unable to lie flat due to breathing',
      ],
    },
  ],

  // Type 2 Diabetes (abbreviated for space)
  [
    'type-2-diabetes',
    {
      conditionId: 'type-2-diabetes',
      name: 'Type 2 Diabetes Mellitus',
      aliases: ['T2DM', 'Diabetes', 'Type 2 Diabetes', 'Adult-onset Diabetes'],
      icdCode: 'E11',
      category: 'metabolic',
      subcategory: 'Endocrine',
      description:
        'Metabolic disorder characterized by chronic hyperglycemia due to insulin resistance and relative insulin deficiency',
      pathophysiology: {
        summary:
          'Insulin resistance combined with progressive beta-cell dysfunction leads to chronic hyperglycemia',
        mechanisms: [
          {
            name: 'Insulin Resistance',
            description:
              'Tissues (muscle, liver, fat) have diminished response to insulin',
            systemsInvolved: ['Endocrine', 'Metabolic'],
            keyMediators: ['Insulin', 'Glucose transporters', 'Inflammatory cytokines'],
            contribution: 'Primary defect requiring compensatory hyperinsulinemia',
          },
          {
            name: 'Beta-Cell Dysfunction',
            description:
              'Pancreatic beta cells fail to produce adequate insulin',
            systemsInvolved: ['Endocrine'],
            keyMediators: ['Insulin', 'Amylin', 'GLP-1'],
            contribution: 'Progressive decline leads to worsening hyperglycemia',
          },
        ],
        riskFactors: [
          {
            name: 'Obesity',
            type: 'modifiable',
            impact: 'major',
            description: 'Particularly visceral adiposity increases insulin resistance',
            intervention: 'Weight loss of 5-10% improves glycemic control',
          },
          {
            name: 'Family History',
            type: 'non-modifiable',
            impact: 'major',
            description: 'Strong genetic component',
          },
          {
            name: 'Physical Inactivity',
            type: 'modifiable',
            impact: 'moderate',
            description: 'Reduces insulin sensitivity',
            intervention: '150 minutes/week moderate exercise',
          },
        ],
      },
      clinicalPresentation: {
        primarySymptoms: [
          {
            name: 'Polyuria',
            prevalence: 'common',
            description: 'Frequent urination due to osmotic diuresis',
          },
          {
            name: 'Polydipsia',
            prevalence: 'common',
            description: 'Excessive thirst',
          },
          {
            name: 'Often Asymptomatic',
            prevalence: 'very-common',
            description: 'Many diagnosed on routine screening',
          },
        ],
        labFindings: [
          {
            testName: 'Fasting Glucose',
            abnormality: '≥126 mg/dL',
            normalRange: '<100 mg/dL',
            significance: 'Diagnostic criterion',
          },
          {
            testName: 'HbA1c',
            abnormality: '≥6.5%',
            normalRange: '<5.7%',
            significance: 'Reflects 3-month average glucose',
          },
        ],
      },
      progression: {
        naturalHistory:
          'Progressive disease with declining beta-cell function over time',
        timelineSteps: [
          {
            phaseId: 'prediabetes',
            phase: 'preclinical',
            displayName: 'Prediabetes',
            timeframe: 'FPG 100-125 or A1c 5.7-6.4%',
            description: 'Impaired glucose metabolism not yet meeting diabetes criteria',
            symptoms: ['Usually none'],
            anatomicalChanges: [
              {
                structureId: 'pancreas',
                structureName: 'Pancreas',
                changeType: 'dysfunction',
                description: 'Early beta-cell stress',
                severity: 'mild',
                visualIndicator: { color: '#fbbf24', pulse: false, opacity: 0.4 },
                isNewAtPhase: true,
              },
            ],
            reversibility: 'reversible',
            typicalTreatments: ['Lifestyle modification', 'Consider metformin'],
          },
          {
            phaseId: 'early-diabetes',
            phase: 'early',
            displayName: 'Early Diabetes',
            timeframe: 'A1c 6.5-8%',
            description: 'Newly diagnosed diabetes with preserved beta-cell function',
            symptoms: ['Mild polyuria/polydipsia', 'Fatigue'],
            anatomicalChanges: [
              {
                structureId: 'pancreas',
                structureName: 'Pancreas',
                changeType: 'dysfunction',
                description: 'Reduced insulin secretion',
                severity: 'mild',
                visualIndicator: { color: '#f97316', pulse: false, opacity: 0.5 },
                isNewAtPhase: false,
              },
            ],
            reversibility: 'partially-reversible',
            typicalTreatments: ['Lifestyle', 'Metformin', 'Add second agent if needed'],
          },
          {
            phaseId: 'established-diabetes',
            phase: 'established',
            displayName: 'Established Diabetes',
            timeframe: 'Years of disease',
            description: 'Progressive disease requiring multiple medications',
            symptoms: ['May be asymptomatic', 'Early complications developing'],
            anatomicalChanges: [
              {
                structureId: 'pancreas',
                structureName: 'Pancreas',
                changeType: 'dysfunction',
                description: 'Significant beta-cell decline',
                severity: 'moderate',
                visualIndicator: { color: '#ef4444', pulse: false, opacity: 0.6 },
                isNewAtPhase: false,
              },
              {
                structureId: 'eyes',
                structureName: 'Retina',
                changeType: 'ischemia',
                description: 'Early diabetic retinopathy',
                severity: 'mild',
                visualIndicator: { color: '#7c3aed', pulse: false, opacity: 0.4 },
                isNewAtPhase: true,
              },
              {
                structureId: 'kidney',
                structureName: 'Kidneys',
                changeType: 'dysfunction',
                description: 'Diabetic nephropathy developing',
                severity: 'mild',
                visualIndicator: { color: '#f97316', pulse: false, opacity: 0.5 },
                isNewAtPhase: true,
              },
            ],
            reversibility: 'partially-reversible',
            typicalTreatments: ['Multiple oral agents', 'Consider GLP-1 RA', 'SGLT2 inhibitor'],
          },
          {
            phaseId: 'advanced-diabetes',
            phase: 'advanced',
            displayName: 'Advanced Diabetes with Complications',
            timeframe: 'Long-standing disease',
            description: 'Significant complications and insulin dependence',
            symptoms: ['Complications drive symptoms', 'May require insulin'],
            anatomicalChanges: [
              {
                structureId: 'pancreas',
                structureName: 'Pancreas',
                changeType: 'dysfunction',
                description: 'Near-complete beta-cell failure',
                severity: 'severe',
                visualIndicator: { color: '#dc2626', pulse: false, opacity: 0.7 },
                isNewAtPhase: false,
              },
              {
                structureId: 'eyes',
                structureName: 'Retina',
                changeType: 'ischemia',
                description: 'Proliferative diabetic retinopathy',
                severity: 'severe',
                visualIndicator: { color: '#7c3aed', pulse: true, opacity: 0.7 },
                isNewAtPhase: false,
              },
              {
                structureId: 'kidney',
                structureName: 'Kidneys',
                changeType: 'fibrosis',
                description: 'Diabetic nephropathy with CKD',
                severity: 'moderate',
                visualIndicator: { color: '#ef4444', pulse: false, opacity: 0.6 },
                isNewAtPhase: false,
              },
              {
                structureId: 'peripheral-nerves',
                structureName: 'Peripheral Nerves',
                changeType: 'degeneration',
                description: 'Diabetic neuropathy',
                severity: 'moderate',
                visualIndicator: { color: '#71717a', pulse: false, opacity: 0.6 },
                isNewAtPhase: true,
              },
            ],
            reversibility: 'irreversible',
            typicalTreatments: ['Insulin therapy', 'Manage complications'],
          },
        ],
        prognosis:
          'Life expectancy reduced by 6-7 years without treatment. Good control prevents complications.',
      },
      complications: [
        {
          complicationId: 'diabetic-retinopathy',
          name: 'Diabetic Retinopathy',
          category: 'chronic',
          severity: 'major',
          riskLevel: 'high',
          description: 'Microvascular damage to the retina causing vision loss',
          mechanism: 'Chronic hyperglycemia damages retinal blood vessels',
          affectedStructures: [
            {
              structureId: 'eyes',
              structureName: 'Eyes/Retina',
              effect: 'Hemorrhages, edema, neovascularization',
              highlightColor: '#7c3aed',
            },
          ],
          warningSymptoms: ['Blurred vision', 'Floaters', 'Vision loss'],
          prevention: ['Glycemic control', 'Annual eye exams'],
          preventable: true,
        },
        {
          complicationId: 'diabetic-nephropathy',
          name: 'Diabetic Nephropathy',
          category: 'chronic',
          severity: 'major',
          riskLevel: 'high',
          description: 'Progressive kidney damage leading to CKD',
          mechanism: 'Glomerular hyperfiltration and glycation damage',
          affectedStructures: [
            {
              structureId: 'kidney',
              structureName: 'Kidneys',
              effect: 'Glomerulosclerosis, albuminuria',
              highlightColor: '#ef4444',
            },
          ],
          warningSymptoms: ['Often asymptomatic until advanced', 'Swelling', 'Fatigue'],
          prevention: ['ACE inhibitor/ARB', 'SGLT2 inhibitor', 'BP control'],
          preventable: true,
        },
        {
          complicationId: 'diabetic-neuropathy',
          name: 'Diabetic Neuropathy',
          category: 'chronic',
          severity: 'moderate',
          riskLevel: 'high',
          description: 'Nerve damage causing pain and numbness',
          mechanism: 'Metabolic damage to nerve fibers',
          affectedStructures: [
            {
              structureId: 'peripheral-nerves',
              structureName: 'Peripheral Nerves',
              effect: 'Demyelination, axonal loss',
              highlightColor: '#71717a',
            },
          ],
          warningSymptoms: ['Numbness', 'Tingling', 'Burning pain', 'Loss of sensation'],
          prevention: ['Glycemic control'],
          preventable: true,
        },
      ],
      treatmentOptions: [
        {
          treatmentId: 'metformin-dm',
          name: 'Metformin',
          modality: 'pharmacological',
          description: 'First-line medication for type 2 diabetes',
          mechanism: 'Reduces hepatic glucose production and improves insulin sensitivity',
          efficacy: 'highly-effective',
          evidenceLevel: 'level-1a',
          isFirstLine: true,
          appropriatePhases: ['preclinical', 'early', 'established'],
          goals: ['Lower A1c by 1-1.5%', 'Prevent complications'],
          timeToEffect: '2-4 weeks',
          medicationIds: ['metformin'],
          contraindications: ['eGFR <30', 'Active liver disease'],
          sideEffects: ['GI upset', 'B12 deficiency'],
          explanations: {
            level1: 'This medication helps your body use insulin better and makes less sugar in your liver.',
            level2:
              'Metformin is the first medication most people start for type 2 diabetes. It helps your body respond better to insulin and reduces the amount of sugar your liver makes.',
            level3:
              'Metformin primarily reduces hepatic gluconeogenesis and improves peripheral insulin sensitivity. It has cardiovascular benefits independent of glucose lowering and does not cause hypoglycemia or weight gain.',
            level4:
              'Metformin activates AMPK, suppressing hepatic gluconeogenesis via reduced expression of gluconeogenic enzymes. It also improves insulin sensitivity in skeletal muscle through enhanced GLUT4 translocation.',
            level5:
              'Metformin inhibits mitochondrial complex I, increasing AMP:ATP ratio and activating AMPK. This suppresses mTORC1-mediated lipogenesis, reduces hepatic glucose output through decreased PEPCK and G6Pase expression, and enhances skeletal muscle glucose uptake through AMPK-mediated GLUT4 trafficking.',
          },
        },
        {
          treatmentId: 'lifestyle-dm',
          name: 'Medical Nutrition Therapy & Exercise',
          modality: 'lifestyle',
          description: 'Diet and exercise as foundation of diabetes management',
          efficacy: 'effective',
          evidenceLevel: 'level-1a',
          isFirstLine: true,
          appropriatePhases: ['preclinical', 'early', 'established', 'advanced'],
          goals: ['Lower A1c by 1-2%', 'Weight management', 'Improve insulin sensitivity'],
          timeToEffect: '3-6 months',
          explanations: {
            level1: 'Eating healthy foods and staying active helps control your blood sugar.',
            level2:
              'A balanced diet low in refined carbohydrates combined with regular exercise can significantly improve blood sugar control, sometimes even reversing prediabetes.',
            level3:
              'Medical nutrition therapy emphasizes carbohydrate counting, glycemic index awareness, and portion control. Exercise improves insulin sensitivity and promotes weight loss.',
            level4:
              'Carbohydrate modification has the greatest impact on postprandial glucose. Exercise increases GLUT4 expression independently of insulin. Weight loss of 5-10% can significantly improve glycemic control.',
            level5:
              'Dietary intervention targets both fasting (hepatic) and postprandial (peripheral) glucose. Exercise acutely increases glucose uptake via AMPK-mediated GLUT4 translocation, with chronic adaptations improving mitochondrial density and insulin signaling.',
          },
        },
      ],
      anatomyMapping: {
        primaryStructures: [
          {
            structureId: 'pancreas',
            structureName: 'Pancreas',
            role: 'primary-site',
            involvement: 'Beta-cell dysfunction',
            highlightColor: '#dc2626',
            showByDefault: true,
          },
        ],
        secondaryStructures: [
          {
            structureId: 'kidney',
            structureName: 'Kidneys',
            role: 'target-organ',
            involvement: 'Diabetic nephropathy',
            highlightColor: '#ef4444',
            showByDefault: true,
          },
          {
            structureId: 'eyes',
            structureName: 'Eyes',
            role: 'target-organ',
            involvement: 'Diabetic retinopathy',
            highlightColor: '#7c3aed',
            showByDefault: true,
          },
          {
            structureId: 'peripheral-nerves',
            structureName: 'Peripheral Nerves',
            role: 'target-organ',
            involvement: 'Diabetic neuropathy',
            highlightColor: '#71717a',
            showByDefault: false,
          },
        ],
        systemsInvolved: ['Endocrine', 'Cardiovascular', 'Renal', 'Nervous'],
        recommendedView: 'anterior',
        recommendedLayers: ['endocrine', 'nervous'],
        focusRegion: 'abdomen',
      },
      explanations: {
        level1:
          'Diabetes means your body cannot control blood sugar properly. Over time, high blood sugar can damage your heart, kidneys, eyes, and nerves.',
        level2:
          'In type 2 diabetes, your body does not use insulin effectively (insulin resistance), and your pancreas cannot make enough insulin to compensate. This leads to high blood sugar levels that can damage organs over time.',
        level3:
          'Type 2 diabetes involves insulin resistance (primarily in liver, muscle, fat) and progressive beta-cell dysfunction. Chronic hyperglycemia causes microvascular complications (retinopathy, nephropathy, neuropathy) and accelerates macrovascular disease.',
        level4:
          'The pathophysiology involves the "ominous octet": reduced insulin secretion, increased glucagon, increased hepatic glucose production, reduced peripheral glucose uptake, increased lipolysis, reduced incretin effect, increased renal glucose reabsorption, and neurotransmitter dysfunction.',
        level5:
          'Insulin resistance involves defects in insulin receptor substrate phosphorylation, PI3K/Akt signaling, and GLUT4 translocation. Beta-cell failure occurs through glucotoxicity, lipotoxicity, ER stress, and islet amyloid deposition. Microvascular complications arise from polyol pathway activation, AGE formation, PKC activation, and hexosamine pathway flux.',
      },
      relatedConditions: ['hypertension', 'hyperlipidemia', 'obesity', 'metabolic-syndrome'],
      comorbidities: ['cardiovascular-disease', 'ckd', 'depression'],
      epidemiology: {
        prevalence: '11.3% of US adults',
        incidence: '1.5 million new cases/year in US',
        demographics: 'Increasing in all age groups; higher in minorities',
      },
      patientEducation: [
        'Check blood sugar as directed',
        'Learn to count carbohydrates',
        'Check your feet daily for sores',
        'Get annual eye exams',
        'Take all medications as prescribed',
        'Know the symptoms of low blood sugar',
      ],
      emergencyWarnings: [
        'Blood sugar over 300 with symptoms',
        'Fruity breath odor',
        'Severe nausea/vomiting',
        'Confusion or altered consciousness',
        'Very low blood sugar (<70) with symptoms',
      ],
    },
  ],

  // Atrial Fibrillation (abbreviated)
  [
    'atrial-fibrillation',
    {
      conditionId: 'atrial-fibrillation',
      name: 'Atrial Fibrillation',
      aliases: ['AFib', 'AF', 'A-fib'],
      icdCode: 'I48.91',
      category: 'cardiovascular',
      subcategory: 'Arrhythmia',
      description:
        'Irregular rapid heart rhythm originating from chaotic atrial electrical activity',
      pathophysiology: {
        summary:
          'Disorganized atrial electrical activity causes irregular ventricular response and atrial stasis',
        mechanisms: [
          {
            name: 'Atrial Remodeling',
            description: 'Electrical and structural changes in atria create substrate for AF',
            systemsInvolved: ['Cardiovascular'],
            keyMediators: ['Calcium', 'Fibrosis', 'Ion channels'],
            contribution: 'Creates and maintains arrhythmogenic substrate',
          },
        ],
        riskFactors: [
          {
            name: 'Hypertension',
            type: 'modifiable',
            impact: 'major',
            description: 'Leading risk factor for AF',
            intervention: 'Blood pressure control',
          },
          {
            name: 'Age',
            type: 'non-modifiable',
            impact: 'major',
            description: 'Risk increases significantly with age',
          },
          {
            name: 'Obesity',
            type: 'modifiable',
            impact: 'moderate',
            description: 'Increases atrial pressure and inflammation',
            intervention: 'Weight loss',
          },
        ],
      },
      clinicalPresentation: {
        primarySymptoms: [
          {
            name: 'Palpitations',
            prevalence: 'very-common',
            description: 'Sensation of rapid, irregular heartbeat',
          },
          {
            name: 'Fatigue',
            prevalence: 'very-common',
            description: 'Due to inefficient cardiac output',
          },
        ],
        physicalFindings: [
          {
            name: 'Irregularly Irregular Pulse',
            examType: 'Cardiovascular',
            description: 'Characteristic finding of AF',
            diagnosticValue: 'Highly suggestive',
          },
        ],
      },
      progression: {
        naturalHistory: 'AF begets AF - tends to progress from paroxysmal to persistent to permanent',
        timelineSteps: [
          {
            phaseId: 'paroxysmal',
            phase: 'early',
            displayName: 'Paroxysmal AF',
            timeframe: 'Episodes <7 days, self-terminating',
            description: 'Intermittent AF that converts spontaneously',
            symptoms: ['Episodic palpitations', 'Fatigue during episodes'],
            anatomicalChanges: [
              {
                structureId: 'heart',
                structureName: 'Atria',
                changeType: 'dysfunction',
                description: 'Electrical remodeling beginning',
                severity: 'mild',
                visualIndicator: { color: '#f97316', pulse: true, opacity: 0.5 },
                isNewAtPhase: true,
              },
            ],
            reversibility: 'reversible',
            typicalTreatments: ['Rate control', 'Rhythm control', 'Anticoagulation if indicated'],
          },
          {
            phaseId: 'persistent',
            phase: 'established',
            displayName: 'Persistent AF',
            timeframe: 'Episodes >7 days or requiring cardioversion',
            description: 'AF that does not self-terminate',
            symptoms: ['Continuous symptoms', 'Exercise intolerance'],
            anatomicalChanges: [
              {
                structureId: 'heart',
                structureName: 'Atria',
                changeType: 'fibrosis',
                description: 'Structural remodeling with fibrosis',
                severity: 'moderate',
                visualIndicator: { color: '#ef4444', pulse: true, opacity: 0.6 },
                isNewAtPhase: false,
              },
            ],
            reversibility: 'partially-reversible',
            typicalTreatments: ['Cardioversion', 'Ablation consideration', 'Anticoagulation'],
          },
          {
            phaseId: 'permanent',
            phase: 'chronic',
            displayName: 'Permanent AF',
            timeframe: 'Decision to accept AF',
            description: 'AF accepted as the patient\'s baseline rhythm',
            symptoms: ['Adapted to symptoms', 'Focus on rate control'],
            anatomicalChanges: [
              {
                structureId: 'heart',
                structureName: 'Atria',
                changeType: 'dilation',
                description: 'Dilated atria with significant fibrosis',
                severity: 'moderate',
                visualIndicator: { color: '#dc2626', pulse: true, opacity: 0.7 },
                isNewAtPhase: false,
              },
            ],
            reversibility: 'irreversible',
            typicalTreatments: ['Rate control', 'Long-term anticoagulation'],
          },
        ],
        prognosis: 'Associated with 5x increased stroke risk. Mortality 1.5-2x higher than general population.',
      },
      complications: [
        {
          complicationId: 'stroke-af',
          name: 'Ischemic Stroke',
          category: 'acute',
          severity: 'life-threatening',
          riskLevel: 'high',
          description: 'Stroke from cardioembolic source',
          mechanism: 'Atrial stasis leads to thrombus formation in LAA',
          affectedStructures: [
            {
              structureId: 'brain',
              structureName: 'Brain',
              effect: 'Ischemic damage',
              highlightColor: '#7c3aed',
            },
          ],
          warningSymptoms: ['Sudden weakness', 'Speech difficulty', 'Face drooping'],
          prevention: ['Anticoagulation based on CHA2DS2-VASc score'],
          preventable: true,
        },
      ],
      treatmentOptions: [
        {
          treatmentId: 'anticoagulation-af',
          name: 'Anticoagulation',
          modality: 'pharmacological',
          description: 'Blood thinners to prevent stroke',
          efficacy: 'highly-effective',
          evidenceLevel: 'level-1a',
          isFirstLine: true,
          appropriatePhases: ['early', 'established', 'chronic'],
          goals: ['Prevent stroke', 'Reduce mortality'],
          explanations: {
            level1: 'Blood thinners prevent blood clots that can cause stroke.',
            level2:
              'Anticoagulants prevent clots from forming in your heart, which can travel to your brain and cause a stroke.',
            level3:
              'DOACs (apixaban, rivaroxaban) or warfarin reduce stroke risk by 65-70% compared to aspirin. Decision based on CHA2DS2-VASc score.',
            level4:
              'DOACs are preferred over warfarin for most patients due to better safety profile and no INR monitoring. Bleeding risk assessed with HAS-BLED score.',
            level5:
              'Factor Xa inhibitors and direct thrombin inhibitors provide predictable anticoagulation. LAA occlusion (Watchman) is an alternative for patients unable to take long-term anticoagulation.',
          },
        },
        {
          treatmentId: 'rate-control-af',
          name: 'Rate Control',
          modality: 'pharmacological',
          description: 'Control ventricular rate without converting to sinus rhythm',
          efficacy: 'effective',
          evidenceLevel: 'level-1a',
          isFirstLine: true,
          appropriatePhases: ['early', 'established', 'chronic'],
          goals: ['Heart rate <110 at rest'],
          medicationIds: ['metoprolol'],
          explanations: {
            level1: 'These medications slow your heart rate to a normal speed.',
            level2:
              'Rate control medications like beta-blockers slow your heart rate even though the rhythm stays irregular.',
            level3:
              'Beta-blockers or non-DHP calcium channel blockers are first-line. Target resting HR <110 based on RACE II trial.',
            level4:
              'Lenient rate control (<110) is non-inferior to strict control (<80) for preventing cardiovascular events. AV node agents preferred over digoxin.',
            level5:
              'Beta-blockers slow conduction through the AV node via beta-1 blockade. Calcium channel blockers directly inhibit AV nodal L-type calcium channels.',
          },
        },
      ],
      anatomyMapping: {
        primaryStructures: [
          {
            structureId: 'heart',
            structureName: 'Heart (Atria)',
            role: 'primary-site',
            involvement: 'Chaotic electrical activity',
            highlightColor: '#dc2626',
            showByDefault: true,
          },
        ],
        secondaryStructures: [
          {
            structureId: 'brain',
            structureName: 'Brain',
            role: 'target-organ',
            involvement: 'Stroke risk',
            highlightColor: '#7c3aed',
            showByDefault: false,
          },
        ],
        systemsInvolved: ['Cardiovascular', 'Nervous'],
        recommendedView: 'anterior',
        recommendedLayers: ['cardiovascular'],
        focusRegion: 'thorax',
      },
      explanations: {
        level1:
          'Your heart has an irregular, often fast rhythm. This increases your risk of stroke, so blood thinners are important.',
        level2:
          'In atrial fibrillation, the upper chambers of your heart beat chaotically instead of rhythmically. This can cause palpitations, fatigue, and increases stroke risk because blood can pool and form clots.',
        level3:
          'AF is characterized by rapid, disorganized atrial electrical activity causing an irregularly irregular ventricular response. The main concerns are symptoms from rapid rate and stroke from left atrial appendage thrombus.',
        level4:
          'AF involves multiple reentrant wavelets in the atria, often triggered from pulmonary vein foci. Electrical and structural remodeling perpetuates the arrhythmia ("AF begets AF"). CHA2DS2-VASc stratifies stroke risk.',
        level5:
          'AF mechanisms include pulmonary vein triggers (ectopic automaticity), atrial substrate (fibrosis, ion channel remodeling shortening APD), and perpetuating factors (electrical dissociation from gap junction disruption). Anticoagulation targets coagulation cascade; DOACs inhibit factor Xa or thrombin.',
      },
      relatedConditions: ['hypertension', 'heart-failure', 'coronary-artery-disease'],
      epidemiology: {
        prevalence: '2.7-6.1 million in US',
        demographics: 'Increases dramatically with age',
      },
      emergencyWarnings: [
        'Signs of stroke (FAST)',
        'Chest pain',
        'Severe shortness of breath',
        'Fainting',
      ],
    },
  ],

  // COPD (abbreviated)
  [
    'copd',
    {
      conditionId: 'copd',
      name: 'Chronic Obstructive Pulmonary Disease',
      aliases: ['COPD', 'Emphysema', 'Chronic Bronchitis'],
      icdCode: 'J44.9',
      category: 'respiratory',
      subcategory: 'Obstructive Lung Disease',
      description:
        'Progressive lung disease characterized by airflow limitation that is not fully reversible',
      pathophysiology: {
        summary:
          'Chronic inflammation causes airway obstruction and parenchymal destruction',
        mechanisms: [
          {
            name: 'Chronic Inflammation',
            description: 'Neutrophilic inflammation in airways and lung parenchyma',
            systemsInvolved: ['Respiratory'],
            keyMediators: ['Neutrophils', 'Macrophages', 'Proteases', 'Oxidants'],
            contribution: 'Drives airway remodeling and alveolar destruction',
          },
          {
            name: 'Protease-Antiprotease Imbalance',
            description: 'Excess proteases destroy alveolar walls',
            systemsInvolved: ['Respiratory'],
            keyMediators: ['Elastase', 'Alpha-1 antitrypsin'],
            contribution: 'Causes emphysematous changes',
          },
        ],
        riskFactors: [
          {
            name: 'Smoking',
            type: 'modifiable',
            impact: 'major',
            description: 'Cause of 85-90% of COPD',
            intervention: 'Smoking cessation',
          },
          {
            name: 'Alpha-1 Antitrypsin Deficiency',
            type: 'non-modifiable',
            impact: 'major',
            description: 'Genetic cause of early-onset emphysema',
          },
        ],
      },
      clinicalPresentation: {
        primarySymptoms: [
          {
            name: 'Dyspnea',
            prevalence: 'very-common',
            description: 'Progressive breathlessness, initially on exertion',
            quality: 'Air hunger, increased work of breathing',
          },
          {
            name: 'Chronic Cough',
            prevalence: 'very-common',
            description: 'Often productive, worse in morning',
          },
          {
            name: 'Sputum Production',
            prevalence: 'common',
            description: 'Chronic mucus hypersecretion',
          },
        ],
        physicalFindings: [
          {
            name: 'Decreased Breath Sounds',
            examType: 'Pulmonary',
            description: 'Reduced airflow',
            diagnosticValue: 'Suggestive of COPD',
          },
          {
            name: 'Barrel Chest',
            examType: 'Inspection',
            description: 'Increased AP diameter from hyperinflation',
            diagnosticValue: 'Seen in advanced disease',
          },
        ],
      },
      progression: {
        naturalHistory: 'Progressive decline in lung function, accelerated by continued smoking',
        timelineSteps: [
          {
            phaseId: 'gold1',
            phase: 'early',
            displayName: 'GOLD 1 - Mild',
            timeframe: 'FEV1 ≥80% predicted',
            description: 'Mild airflow limitation, often undiagnosed',
            symptoms: ['Mild dyspnea on exertion', 'Occasional cough'],
            anatomicalChanges: [
              {
                structureId: 'lungs',
                structureName: 'Airways',
                changeType: 'inflammation',
                description: 'Early airway inflammation',
                severity: 'mild',
                visualIndicator: { color: '#f97316', pulse: false, opacity: 0.4 },
                isNewAtPhase: true,
              },
            ],
            reversibility: 'partially-reversible',
            typicalTreatments: ['Smoking cessation', 'SABA as needed'],
          },
          {
            phaseId: 'gold2',
            phase: 'established',
            displayName: 'GOLD 2 - Moderate',
            timeframe: 'FEV1 50-79% predicted',
            description: 'Worsening airflow limitation with symptoms',
            symptoms: ['Dyspnea with activity', 'Regular cough/sputum'],
            anatomicalChanges: [
              {
                structureId: 'lungs',
                structureName: 'Airways',
                changeType: 'fibrosis',
                description: 'Airway wall thickening and fibrosis',
                severity: 'moderate',
                visualIndicator: { color: '#ef4444', pulse: false, opacity: 0.5 },
                isNewAtPhase: false,
              },
              {
                structureId: 'lungs',
                structureName: 'Alveoli',
                changeType: 'degeneration',
                description: 'Alveolar destruction (emphysema)',
                severity: 'mild',
                visualIndicator: { color: '#71717a', pulse: false, opacity: 0.4 },
                isNewAtPhase: true,
              },
            ],
            reversibility: 'partially-reversible',
            typicalTreatments: ['LAMA and/or LABA', 'Pulmonary rehabilitation'],
          },
          {
            phaseId: 'gold34',
            phase: 'advanced',
            displayName: 'GOLD 3-4 - Severe',
            timeframe: 'FEV1 <50% predicted',
            description: 'Severe airflow limitation with significant impact',
            symptoms: ['Dyspnea at rest', 'Frequent exacerbations', 'Exercise intolerance'],
            anatomicalChanges: [
              {
                structureId: 'lungs',
                structureName: 'Lungs',
                changeType: 'degeneration',
                description: 'Extensive emphysema and airway disease',
                severity: 'severe',
                visualIndicator: { color: '#dc2626', pulse: true, opacity: 0.7 },
                isNewAtPhase: false,
              },
              {
                structureId: 'heart',
                structureName: 'Right Ventricle',
                changeType: 'hypertrophy',
                description: 'Cor pulmonale developing',
                severity: 'moderate',
                visualIndicator: { color: '#ef4444', pulse: false, opacity: 0.5 },
                isNewAtPhase: true,
              },
            ],
            reversibility: 'irreversible',
            typicalTreatments: ['Triple therapy', 'Oxygen if hypoxic', 'Consider lung volume reduction'],
          },
        ],
        prognosis: 'FEV1 decline is 50-60 mL/year (vs 30 mL/year in non-smokers). Smoking cessation slows decline.',
      },
      complications: [
        {
          complicationId: 'copd-exacerbation',
          name: 'Acute Exacerbation',
          category: 'acute',
          severity: 'major',
          riskLevel: 'high',
          description: 'Acute worsening of symptoms requiring treatment change',
          mechanism: 'Usually triggered by infection or environmental factors',
          affectedStructures: [
            {
              structureId: 'lungs',
              structureName: 'Lungs',
              effect: 'Increased inflammation and mucus',
              highlightColor: '#ef4444',
            },
          ],
          warningSymptoms: ['Increased dyspnea', 'Increased sputum', 'Sputum color change'],
          prevention: ['Inhaler adherence', 'Vaccinations', 'Avoid triggers'],
          preventable: true,
        },
      ],
      treatmentOptions: [
        {
          treatmentId: 'smoking-cessation-copd',
          name: 'Smoking Cessation',
          modality: 'lifestyle',
          description: 'Only intervention proven to slow disease progression',
          efficacy: 'highly-effective',
          evidenceLevel: 'level-1a',
          isFirstLine: true,
          appropriatePhases: ['early', 'established', 'advanced'],
          goals: ['Slow FEV1 decline', 'Reduce exacerbations'],
          explanations: {
            level1: 'Quitting smoking is the most important thing you can do for your lungs.',
            level2:
              'Stopping smoking is the only treatment that slows down the progression of COPD. It\'s never too late to quit.',
            level3:
              'Smoking cessation reduces FEV1 decline to near-normal rates and reduces exacerbation frequency. Use NRT, bupropion, or varenicline.',
            level4:
              'Smoking cessation is a class 1A recommendation. Brief counseling plus pharmacotherapy increases quit rates from 5% to 25-35%.',
            level5:
              'Continued smoking perpetuates inflammation through oxidant burden and impaired host defense. Cessation reduces inflammatory cell recruitment and protease activity, slowing alveolar destruction.',
          },
        },
        {
          treatmentId: 'bronchodilators-copd',
          name: 'Long-acting Bronchodilators',
          modality: 'pharmacological',
          description: 'LAMA and LABA inhalers for maintenance therapy',
          efficacy: 'effective',
          evidenceLevel: 'level-1a',
          isFirstLine: true,
          appropriatePhases: ['early', 'established', 'advanced'],
          goals: ['Reduce symptoms', 'Reduce exacerbations'],
          timeToEffect: 'Days to weeks',
          explanations: {
            level1: 'These inhalers open your airways to help you breathe easier.',
            level2:
              'Long-acting bronchodilators relax the muscles around your airways, making it easier to breathe throughout the day.',
            level3:
              'LAMAs (tiotropium) and LABAs (salmeterol) are maintenance bronchodilators. Combination LAMA/LABA is more effective than monotherapy.',
            level4:
              'LAMAs block M3 muscarinic receptors; LABAs stimulate beta-2 receptors. Both cause bronchial smooth muscle relaxation. Dual bronchodilation provides additive benefit.',
            level5:
              'M3 antagonism blocks acetylcholine-mediated bronchoconstriction and mucus secretion. Beta-2 agonism increases cAMP, promoting smooth muscle relaxation and improving mucociliary clearance.',
          },
        },
      ],
      anatomyMapping: {
        primaryStructures: [
          {
            structureId: 'lungs',
            structureName: 'Lungs',
            role: 'primary-site',
            involvement: 'Airways and alveoli affected',
            highlightColor: '#dc2626',
            showByDefault: true,
          },
        ],
        secondaryStructures: [
          {
            structureId: 'heart',
            structureName: 'Heart (Right Side)',
            role: 'secondary-site',
            involvement: 'Cor pulmonale in advanced disease',
            highlightColor: '#ef4444',
            showByDefault: false,
          },
        ],
        systemsInvolved: ['Respiratory', 'Cardiovascular'],
        recommendedView: 'anterior',
        recommendedLayers: ['respiratory'],
        focusRegion: 'thorax',
      },
      explanations: {
        level1:
          'COPD is a lung disease that makes it hard to breathe because your airways are narrowed and damaged. Smoking is the main cause.',
        level2:
          'COPD includes chronic bronchitis (inflamed airways with excess mucus) and emphysema (damaged air sacs). The damage is permanent but progression can be slowed by quitting smoking.',
        level3:
          'COPD involves chronic airway inflammation, mucus hypersecretion, and alveolar destruction (emphysema). Airflow limitation is not fully reversible. FEV1/FVC <0.70 confirms diagnosis.',
        level4:
          'COPD pathophysiology involves neutrophilic airway inflammation, protease-antiprotease imbalance causing alveolar destruction, and small airway fibrosis. Air trapping causes hyperinflation and increased work of breathing.',
        level5:
          'Cigarette smoke activates epithelial cells and alveolar macrophages, releasing chemokines (IL-8, LTB4) recruiting neutrophils. Neutrophil elastase overwhelms alpha-1 antitrypsin, degrading elastin and collagen. Oxidative stress impairs antiprotease function. TGF-beta promotes small airway fibrosis.',
      },
      relatedConditions: ['asthma', 'lung-cancer', 'pulmonary-hypertension'],
      epidemiology: {
        prevalence: '16 million diagnosed in US (many more undiagnosed)',
        demographics: 'Third leading cause of death in US',
      },
      emergencyWarnings: [
        'Severe shortness of breath',
        'Cannot speak in full sentences',
        'Blue lips or fingertips',
        'Confusion or drowsiness',
      ],
    },
  ],

  // Osteoarthritis (abbreviated)
  [
    'osteoarthritis',
    {
      conditionId: 'osteoarthritis',
      name: 'Osteoarthritis',
      aliases: ['OA', 'Degenerative Joint Disease', 'Wear and Tear Arthritis'],
      icdCode: 'M19.90',
      category: 'musculoskeletal',
      subcategory: 'Degenerative Joint Disease',
      description:
        'Most common form of arthritis, characterized by progressive cartilage loss and joint changes',
      pathophysiology: {
        summary:
          'Progressive cartilage degeneration with subchondral bone changes and synovial inflammation',
        mechanisms: [
          {
            name: 'Cartilage Degeneration',
            description: 'Loss of articular cartilage due to mechanical and biological factors',
            systemsInvolved: ['Musculoskeletal'],
            keyMediators: ['MMPs', 'Aggrecanases', 'IL-1', 'TNF'],
            contribution: 'Central feature of OA leading to joint space narrowing',
          },
        ],
        riskFactors: [
          {
            name: 'Age',
            type: 'non-modifiable',
            impact: 'major',
            description: 'Prevalence increases dramatically with age',
          },
          {
            name: 'Obesity',
            type: 'modifiable',
            impact: 'major',
            description: 'Increases mechanical load on weight-bearing joints',
            intervention: 'Weight loss reduces knee OA symptoms',
          },
          {
            name: 'Joint Injury',
            type: 'partially-modifiable',
            impact: 'moderate',
            description: 'Prior trauma increases OA risk',
          },
        ],
      },
      clinicalPresentation: {
        primarySymptoms: [
          {
            name: 'Joint Pain',
            prevalence: 'very-common',
            description: 'Pain that worsens with activity and improves with rest',
            quality: 'Aching, sometimes sharp with movement',
            location: 'Affected joints - commonly knees, hips, hands, spine',
          },
          {
            name: 'Stiffness',
            prevalence: 'very-common',
            description: 'Morning stiffness lasting <30 minutes',
          },
          {
            name: 'Functional Limitation',
            prevalence: 'common',
            description: 'Difficulty with activities like walking, climbing stairs',
          },
        ],
        physicalFindings: [
          {
            name: 'Crepitus',
            examType: 'Joint Examination',
            description: 'Grinding sensation with joint movement',
            diagnosticValue: 'Suggestive of cartilage loss',
          },
          {
            name: 'Bony Enlargement',
            examType: 'Joint Examination',
            description: 'Osteophytes palpable at joint margins',
            diagnosticValue: 'Specific for OA',
          },
        ],
        imagingFindings: [
          {
            modality: 'X-ray',
            finding: 'Joint space narrowing, osteophytes, subchondral sclerosis',
            significance: 'Diagnostic findings',
            structures: ['Affected joints'],
          },
        ],
      },
      progression: {
        naturalHistory: 'Slowly progressive over years to decades',
        timelineSteps: [
          {
            phaseId: 'early-oa',
            phase: 'early',
            displayName: 'Early OA',
            timeframe: 'Mild symptoms, minimal X-ray changes',
            description: 'Initial cartilage damage with mild symptoms',
            symptoms: ['Intermittent joint aching', 'Minor stiffness'],
            anatomicalChanges: [
              {
                structureId: 'joint-cartilage',
                structureName: 'Articular Cartilage',
                changeType: 'degeneration',
                description: 'Surface fibrillation and softening',
                severity: 'mild',
                visualIndicator: { color: '#f97316', pulse: false, opacity: 0.4 },
                isNewAtPhase: true,
              },
            ],
            reversibility: 'partially-reversible',
            typicalTreatments: ['Exercise', 'Weight loss', 'Acetaminophen'],
          },
          {
            phaseId: 'moderate-oa',
            phase: 'established',
            displayName: 'Moderate OA',
            timeframe: 'Clear X-ray changes, regular symptoms',
            description: 'Progressive cartilage loss with frequent symptoms',
            symptoms: ['Regular pain with activity', 'Morning stiffness', 'Reduced mobility'],
            anatomicalChanges: [
              {
                structureId: 'joint-cartilage',
                structureName: 'Articular Cartilage',
                changeType: 'degeneration',
                description: 'Significant cartilage thinning',
                severity: 'moderate',
                visualIndicator: { color: '#ef4444', pulse: false, opacity: 0.6 },
                isNewAtPhase: false,
              },
              {
                structureId: 'subchondral-bone',
                structureName: 'Subchondral Bone',
                changeType: 'hypertrophy',
                description: 'Sclerosis and osteophyte formation',
                severity: 'mild',
                visualIndicator: { color: '#f97316', pulse: false, opacity: 0.5 },
                isNewAtPhase: true,
              },
            ],
            reversibility: 'irreversible',
            typicalTreatments: ['NSAIDs', 'Physical therapy', 'Injections'],
          },
          {
            phaseId: 'severe-oa',
            phase: 'advanced',
            displayName: 'Severe OA',
            timeframe: 'Bone-on-bone contact',
            description: 'End-stage disease with near-complete cartilage loss',
            symptoms: ['Constant pain', 'Severe functional limitation', 'Deformity'],
            anatomicalChanges: [
              {
                structureId: 'joint-cartilage',
                structureName: 'Articular Cartilage',
                changeType: 'degeneration',
                description: 'Near-complete cartilage loss',
                severity: 'severe',
                visualIndicator: { color: '#dc2626', pulse: true, opacity: 0.8 },
                isNewAtPhase: false,
              },
              {
                structureId: 'subchondral-bone',
                structureName: 'Subchondral Bone',
                changeType: 'degeneration',
                description: 'Bone cysts and deformity',
                severity: 'moderate',
                visualIndicator: { color: '#ef4444', pulse: false, opacity: 0.6 },
                isNewAtPhase: false,
              },
            ],
            reversibility: 'irreversible',
            typicalTreatments: ['Joint replacement surgery'],
          },
        ],
        prognosis: 'Variable progression. Some remain stable for years, others progress to joint replacement.',
      },
      complications: [],
      treatmentOptions: [
        {
          treatmentId: 'exercise-oa',
          name: 'Exercise and Physical Therapy',
          modality: 'rehabilitative',
          description: 'Strengthening and low-impact aerobic exercise',
          efficacy: 'effective',
          evidenceLevel: 'level-1a',
          isFirstLine: true,
          appropriatePhases: ['early', 'established', 'advanced'],
          goals: ['Reduce pain', 'Improve function', 'Maintain joint mobility'],
          explanations: {
            level1: 'Regular gentle exercise helps reduce pain and keeps your joints moving better.',
            level2:
              'Strengthening the muscles around your joints provides better support and reduces pain. Low-impact activities like swimming and walking are ideal.',
            level3:
              'Exercise is a cornerstone of OA management. Quadriceps strengthening for knee OA reduces pain as effectively as NSAIDs. Aquatic therapy is helpful for those who cannot tolerate land-based exercise.',
            level4:
              'Exercise improves muscle strength, joint stability, and proprioception. The anti-inflammatory effects of muscle contraction may also contribute to pain reduction.',
            level5:
              'Exercise-induced myokine release (IL-6) has anti-inflammatory effects. Mechanical loading promotes cartilage homeostasis through mechanotransduction pathways.',
          },
        },
        {
          treatmentId: 'nsaids-oa',
          name: 'NSAIDs',
          modality: 'pharmacological',
          description: 'Anti-inflammatory pain relievers',
          efficacy: 'effective',
          evidenceLevel: 'level-1a',
          isFirstLine: false,
          appropriatePhases: ['early', 'established'],
          goals: ['Reduce pain', 'Reduce inflammation'],
          timeToEffect: '1-2 weeks',
          medicationIds: ['ibuprofen', 'naproxen'],
          contraindications: ['Active GI bleeding', 'CKD stage 4-5', 'Uncontrolled HTN'],
          sideEffects: ['GI upset', 'Cardiovascular risk', 'Renal effects'],
          explanations: {
            level1: 'These medications reduce pain and swelling in your joints.',
            level2:
              'NSAIDs like ibuprofen reduce inflammation and pain. They work best for flare-ups but should be used at the lowest effective dose.',
            level3:
              'NSAIDs are more effective than acetaminophen for OA pain, especially with inflammation. Use lowest dose for shortest duration. Topical NSAIDs are safer alternative.',
            level4:
              'COX inhibition reduces prostaglandin synthesis, decreasing inflammation and pain. Topical NSAIDs achieve therapeutic joint concentrations with lower systemic exposure.',
            level5:
              'COX-2 selective inhibitors reduce GI risk but maintain cardiovascular risk. Naproxen may have the most favorable CV profile among NSAIDs.',
          },
        },
        {
          treatmentId: 'joint-replacement',
          name: 'Total Joint Replacement',
          modality: 'surgical',
          description: 'Replacement of damaged joint surfaces with prosthetic components',
          efficacy: 'highly-effective',
          evidenceLevel: 'level-1b',
          isFirstLine: false,
          appropriatePhases: ['advanced'],
          goals: ['Eliminate pain', 'Restore function'],
          timeToEffect: '3-6 months for full recovery',
          explanations: {
            level1: 'Surgery to replace the damaged joint with an artificial one, eliminating pain.',
            level2:
              'Joint replacement is highly effective for end-stage OA when other treatments no longer help. Most people have significant pain relief and improved function.',
            level3:
              'TKA and THA are among the most successful surgeries performed. >90% survivorship at 15 years. Reserved for patients who have failed conservative management.',
            level4:
              'Modern prosthetic designs include bearing surfaces with improved wear characteristics. Patient selection, surgical technique, and rehabilitation protocol all impact outcomes.',
            level5:
              'Polyethylene wear debris drives osteolysis and loosening in older designs. Cross-linked polyethylene and ceramic bearings reduce wear. Bone ingrowth for cementless fixation provides long-term stability.',
          },
        },
      ],
      anatomyMapping: {
        primaryStructures: [
          {
            structureId: 'joints',
            structureName: 'Affected Joints',
            role: 'primary-site',
            involvement: 'Cartilage degeneration and bone changes',
            highlightColor: '#dc2626',
            showByDefault: true,
          },
        ],
        systemsInvolved: ['Musculoskeletal'],
        recommendedView: 'anterior',
        recommendedLayers: ['musculoskeletal'],
        focusRegion: 'lower-extremity',
      },
      explanations: {
        level1:
          'Osteoarthritis is wear and tear on your joints. The cushioning cartilage wears away, causing pain and stiffness.',
        level2:
          'In osteoarthritis, the protective cartilage that cushions your joints gradually breaks down. This leads to pain, stiffness, and reduced movement. It most commonly affects knees, hips, hands, and spine.',
        level3:
          'OA involves progressive cartilage loss with subchondral bone changes (sclerosis, cysts, osteophytes) and mild synovial inflammation. Mechanical factors (joint malalignment, obesity) and biological factors (aging, genetics) contribute.',
        level4:
          'OA pathophysiology involves chondrocyte dysfunction with imbalance between cartilage synthesis and degradation. MMPs and aggrecanases break down the extracellular matrix. Subchondral bone changes and osteophyte formation reflect attempted repair.',
        level5:
          'Chondrocyte responses to mechanical stress include increased MMP-13 and ADAMTS expression, degrading type II collagen and aggrecan. Subchondral bone thickening alters load distribution. Synovial inflammation (low-grade) releases cytokines perpetuating cartilage damage.',
      },
      epidemiology: {
        prevalence: '32.5 million US adults',
        demographics: 'Most common form of arthritis; increases with age',
      },
      emergencyWarnings: [
        'Sudden severe joint pain with swelling and redness (may indicate infection)',
        'Unable to bear weight',
        'Joint giving way',
      ],
    },
  ],

  // Migraine (abbreviated)
  [
    'migraine',
    {
      conditionId: 'migraine',
      name: 'Migraine',
      aliases: ['Migraine Headache', 'Classic Migraine', 'Migraine with Aura'],
      icdCode: 'G43.909',
      category: 'neurologic',
      subcategory: 'Headache Disorder',
      description:
        'Recurrent headache disorder characterized by moderate to severe pulsating pain, often with nausea and sensitivity to light/sound',
      pathophysiology: {
        summary:
          'Neurovascular disorder involving cortical spreading depression, trigeminal activation, and neurogenic inflammation',
        mechanisms: [
          {
            name: 'Cortical Spreading Depression',
            description: 'Wave of neuronal depolarization causing aura symptoms',
            systemsInvolved: ['Nervous'],
            keyMediators: ['Glutamate', 'Potassium'],
            contribution: 'Triggers aura and activates trigeminal system',
          },
          {
            name: 'Trigeminal Activation',
            description: 'Activation of trigeminal nociceptors around meninges',
            systemsInvolved: ['Nervous'],
            keyMediators: ['CGRP', 'Substance P', 'Serotonin'],
            contribution: 'Produces headache pain and associated symptoms',
          },
        ],
        riskFactors: [
          {
            name: 'Family History',
            type: 'non-modifiable',
            impact: 'major',
            description: 'Strong genetic component',
          },
          {
            name: 'Female Sex',
            type: 'non-modifiable',
            impact: 'major',
            description: '3:1 female predominance',
          },
          {
            name: 'Triggers',
            type: 'modifiable',
            impact: 'moderate',
            description: 'Stress, sleep changes, certain foods, hormones',
            intervention: 'Trigger identification and avoidance',
          },
        ],
      },
      clinicalPresentation: {
        primarySymptoms: [
          {
            name: 'Headache',
            prevalence: 'very-common',
            description: 'Moderate to severe, often unilateral, pulsating quality',
            location: 'Typically unilateral, may become generalized',
            timing: '4-72 hours duration',
          },
          {
            name: 'Photophobia',
            prevalence: 'very-common',
            description: 'Sensitivity to light',
          },
          {
            name: 'Phonophobia',
            prevalence: 'very-common',
            description: 'Sensitivity to sound',
          },
          {
            name: 'Nausea/Vomiting',
            prevalence: 'common',
            description: 'Often accompanies headache',
          },
        ],
        associatedSymptoms: [
          {
            name: 'Aura',
            prevalence: 'common',
            description: 'Visual, sensory, or speech disturbances preceding headache',
            timing: '5-60 minutes before headache',
          },
        ],
      },
      progression: {
        naturalHistory: 'Episodic disorder that may progress to chronic migraine',
        timelineSteps: [
          {
            phaseId: 'episodic',
            phase: 'established',
            displayName: 'Episodic Migraine',
            timeframe: '<15 headache days/month',
            description: 'Intermittent attacks with normal function between',
            symptoms: ['Periodic attacks', 'Full recovery between'],
            anatomicalChanges: [
              {
                structureId: 'brain',
                structureName: 'Brain',
                changeType: 'dysfunction',
                description: 'Transient neurological changes during attacks',
                severity: 'mild',
                visualIndicator: { color: '#f97316', pulse: true, opacity: 0.5 },
                isNewAtPhase: true,
              },
            ],
            reversibility: 'reversible',
            typicalTreatments: ['Acute treatments (triptans, NSAIDs)', 'Consider prevention if frequent'],
          },
          {
            phaseId: 'chronic',
            phase: 'chronic',
            displayName: 'Chronic Migraine',
            timeframe: '≥15 headache days/month for 3+ months',
            description: 'Frequent attacks with significant disability',
            symptoms: ['Near-daily symptoms', 'Medication overuse common'],
            anatomicalChanges: [
              {
                structureId: 'brain',
                structureName: 'Brain',
                changeType: 'dysfunction',
                description: 'Central sensitization with structural changes',
                severity: 'moderate',
                visualIndicator: { color: '#ef4444', pulse: true, opacity: 0.6 },
                isNewAtPhase: false,
              },
            ],
            reversibility: 'partially-reversible',
            typicalTreatments: ['Preventive medications (CGRP mAbs, etc.)', 'Withdrawal from overused medications'],
          },
        ],
        prognosis: 'Many improve with age, especially women after menopause.',
      },
      complications: [],
      treatmentOptions: [
        {
          treatmentId: 'triptans-migraine',
          name: 'Triptans',
          modality: 'pharmacological',
          description: 'Serotonin receptor agonists for acute migraine',
          efficacy: 'highly-effective',
          evidenceLevel: 'level-1a',
          isFirstLine: true,
          appropriatePhases: ['established', 'chronic'],
          goals: ['Abort migraine attack', 'Relieve pain within 2 hours'],
          timeToEffect: '30-60 minutes',
          contraindications: ['Cardiovascular disease', 'Uncontrolled hypertension'],
          explanations: {
            level1: 'These medications can stop a migraine headache when it starts.',
            level2:
              'Triptans work by narrowing blood vessels and blocking pain pathways in the brain. They work best if taken early in an attack.',
            level3:
              'Triptans are 5-HT1B/1D agonists that constrict cranial vessels and inhibit trigeminal nociceptor activation. Most effective when taken early. Limit use to <10 days/month to prevent medication overuse.',
            level4:
              '5-HT1B receptors on meningeal vessels cause vasoconstriction. 5-HT1D receptors on trigeminal nerve terminals inhibit CGRP release and reduce neurogenic inflammation.',
            level5:
              'Presynaptic 5-HT1D activation inhibits neuropeptide (CGRP, substance P) release from trigeminal afferents. Central 5-HT1D/1F activation in trigeminal nucleus caudalis reduces central sensitization. Cardiovascular caution due to coronary 5-HT1B receptors.',
          },
        },
        {
          treatmentId: 'cgrp-migraine',
          name: 'CGRP Monoclonal Antibodies',
          modality: 'pharmacological',
          description: 'Preventive therapy targeting CGRP pathway',
          efficacy: 'effective',
          evidenceLevel: 'level-1a',
          isFirstLine: false,
          appropriatePhases: ['established', 'chronic'],
          goals: ['Reduce migraine frequency', 'Reduce migraine days by 50%'],
          timeToEffect: 'Weeks to months',
          explanations: {
            level1: 'Monthly injections that help prevent migraines from happening.',
            level2:
              'CGRP inhibitors are preventive medications that block a chemical involved in migraine. They are given monthly or quarterly by injection.',
            level3:
              'CGRP monoclonal antibodies (erenumab, fremanezumab, galcanezumab) target CGRP or its receptor. Well-tolerated with convenient monthly/quarterly dosing. Effective for both episodic and chronic migraine.',
            level4:
              'CGRP is elevated during migraine attacks and plays a key role in trigeminovascular activation. Blocking CGRP or its receptor prevents these downstream effects without causing vasoconstriction.',
            level5:
              'CGRP released from trigeminal afferents causes vasodilation, mast cell degranulation, and neurogenic inflammation. CGRP receptor antagonism prevents these effects. Unlike triptans, no direct vascular effects make these safe in cardiovascular disease.',
          },
        },
      ],
      anatomyMapping: {
        primaryStructures: [
          {
            structureId: 'brain',
            structureName: 'Brain',
            role: 'primary-site',
            involvement: 'Cortical and brainstem dysfunction',
            highlightColor: '#dc2626',
            showByDefault: true,
          },
        ],
        secondaryStructures: [
          {
            structureId: 'trigeminal-nerve',
            structureName: 'Trigeminal Nerve',
            role: 'primary-site',
            involvement: 'Trigeminal activation produces pain',
            highlightColor: '#ef4444',
            showByDefault: true,
          },
        ],
        systemsInvolved: ['Nervous'],
        recommendedView: 'lateral-left',
        recommendedLayers: ['nervous'],
        focusRegion: 'head',
      },
      explanations: {
        level1:
          'Migraines are severe headaches that can cause throbbing pain, nausea, and sensitivity to light and sound. They can be disabling but are treatable.',
        level2:
          'Migraine is a neurological condition causing intense headaches, often with nausea and sensitivity to light/sound. Some people see visual disturbances (aura) before the headache. Triggers like stress, certain foods, and hormonal changes can set them off.',
        level3:
          'Migraine is a neurovascular disorder involving cortical spreading depression (causing aura), trigeminal nerve activation, and neurogenic inflammation. CGRP plays a central role. Treatment includes acute therapies (triptans) and preventive medications for frequent attacks.',
        level4:
          'Migraine pathophysiology involves genetic susceptibility, cortical hyperexcitability, trigeminovascular system activation with CGRP release, and central sensitization. Modern preventive therapies target the CGRP pathway with excellent efficacy and tolerability.',
        level5:
          'Migraine involves a cascade: cortical spreading depression (K+ and glutamate waves) triggers trigeminal afferent activation via meningeal nociceptors. CGRP release causes vasodilation and neurogenic inflammation. Trigeminal nucleus caudalis sensitization leads to allodynia. Brainstem dysfunction (PAG, LC) modulates descending pain control.',
      },
      epidemiology: {
        prevalence: '12% of adults',
        demographics: '3:1 female predominance; peaks in middle age',
      },
      emergencyWarnings: [
        'Worst headache of life',
        'Headache with fever and stiff neck',
        'New neurological symptoms',
        'Headache after head injury',
      ],
    },
  ],

  // Coronary Artery Disease
  [
    'coronary-artery-disease',
    {
      conditionId: 'coronary-artery-disease',
      name: 'Coronary Artery Disease',
      aliases: ['CAD', 'Coronary Heart Disease', 'Ischemic Heart Disease'],
      icdCode: 'I25.10',
      category: 'cardiovascular',
      subcategory: 'Cardiac',
      description: 'Atherosclerotic plaque buildup in coronary arteries causing reduced blood flow to the heart',
      pathophysiology: {
        summary: 'Atherosclerosis of coronary arteries leads to myocardial ischemia',
        mechanisms: [
          {
            name: 'Atherosclerosis',
            description: 'Lipid deposition and inflammation in arterial walls',
            systemsInvolved: ['Cardiovascular'],
            keyMediators: ['LDL cholesterol', 'Inflammatory cytokines', 'Foam cells'],
            contribution: 'Creates plaques that narrow arteries and may rupture',
          },
        ],
        riskFactors: [
          { name: 'Hyperlipidemia', type: 'modifiable', impact: 'major', description: 'Elevated LDL drives plaque formation', intervention: 'Statins, diet' },
          { name: 'Hypertension', type: 'modifiable', impact: 'major', description: 'Increases shear stress on arteries', intervention: 'BP control' },
          { name: 'Diabetes', type: 'partially-modifiable', impact: 'major', description: 'Accelerates atherosclerosis', intervention: 'Glycemic control' },
          { name: 'Smoking', type: 'modifiable', impact: 'major', description: 'Endothelial damage and inflammation', intervention: 'Cessation' },
        ],
      },
      clinicalPresentation: {
        primarySymptoms: [
          { name: 'Angina', prevalence: 'very-common', description: 'Chest pain/pressure with exertion', quality: 'Squeezing, pressure', location: 'Substernal, may radiate to arm/jaw' },
          { name: 'Dyspnea', prevalence: 'common', description: 'Shortness of breath with activity' },
        ],
        labFindings: [
          { testName: 'Lipid Panel', abnormality: 'Elevated LDL', significance: 'Major risk factor' },
          { testName: 'Troponin', abnormality: 'Elevated if MI', significance: 'Indicates myocardial injury' },
        ],
      },
      progression: {
        naturalHistory: 'Progressive plaque buildup; may be stable or present acutely with MI',
        timelineSteps: [
          {
            phaseId: 'subclinical',
            phase: 'preclinical',
            displayName: 'Subclinical Atherosclerosis',
            timeframe: 'Decades',
            description: 'Plaque developing without symptoms',
            symptoms: ['None'],
            anatomicalChanges: [
              { structureId: 'coronary-arteries', structureName: 'Coronary Arteries', changeType: 'inflammation', description: 'Early plaque formation', severity: 'mild', visualIndicator: { color: '#fbbf24', pulse: false, opacity: 0.4 }, isNewAtPhase: true },
            ],
            reversibility: 'partially-reversible',
            typicalTreatments: ['Risk factor modification'],
          },
          {
            phaseId: 'stable-cad',
            phase: 'established',
            displayName: 'Stable CAD',
            timeframe: 'Significant stenosis',
            description: 'Stable angina with exertion',
            symptoms: ['Exertional chest pain', 'Predictable pattern'],
            anatomicalChanges: [
              { structureId: 'coronary-arteries', structureName: 'Coronary Arteries', changeType: 'stenosis', description: '>50% stenosis causing ischemia', severity: 'moderate', visualIndicator: { color: '#ef4444', pulse: false, opacity: 0.6 }, isNewAtPhase: false },
            ],
            reversibility: 'partially-reversible',
            typicalTreatments: ['Anti-anginal medications', 'Antiplatelet therapy', 'Statins', 'Consider revascularization'],
          },
          {
            phaseId: 'acute-coronary',
            phase: 'acute',
            displayName: 'Acute Coronary Syndrome',
            timeframe: 'Plaque rupture',
            description: 'Unstable angina or myocardial infarction',
            symptoms: ['Rest chest pain', 'Crescendo pattern', 'May be silent in diabetics'],
            anatomicalChanges: [
              { structureId: 'coronary-arteries', structureName: 'Coronary Arteries', changeType: 'ischemia', description: 'Plaque rupture with thrombosis', severity: 'severe', visualIndicator: { color: '#dc2626', pulse: true, opacity: 0.8 }, isNewAtPhase: false },
              { structureId: 'heart', structureName: 'Myocardium', changeType: 'ischemia', description: 'Myocardial injury', severity: 'severe', visualIndicator: { color: '#7c3aed', pulse: true, opacity: 0.7 }, isNewAtPhase: true },
            ],
            reversibility: 'partially-reversible',
            typicalTreatments: ['Emergency revascularization', 'DAPT', 'Intensive medical therapy'],
          },
        ],
        prognosis: 'Variable; aggressive risk factor control improves outcomes',
      },
      complications: [
        { complicationId: 'mi', name: 'Myocardial Infarction', category: 'acute', severity: 'life-threatening', riskLevel: 'high', description: 'Heart attack from complete artery blockage', mechanism: 'Plaque rupture with coronary thrombosis', affectedStructures: [{ structureId: 'heart', structureName: 'Heart', effect: 'Myocardial necrosis', highlightColor: '#dc2626' }], warningSymptoms: ['Severe chest pain', 'Shortness of breath', 'Sweating', 'Nausea'], preventable: true },
      ],
      treatmentOptions: [
        { treatmentId: 'statin-cad', name: 'Statin Therapy', modality: 'pharmacological', description: 'LDL-lowering therapy', efficacy: 'highly-effective', evidenceLevel: 'level-1a', isFirstLine: true, appropriatePhases: ['preclinical', 'established', 'acute'], goals: ['LDL <70 mg/dL', 'Plaque stabilization'], medicationIds: ['atorvastatin'], explanations: { level1: 'Cholesterol-lowering medication protects your heart.', level2: 'Statins lower LDL cholesterol, which slows plaque buildup and stabilizes existing plaques.', level3: 'High-intensity statins reduce LDL by >50% and have proven mortality benefit in CAD. Pleiotropic effects include plaque stabilization.', level4: 'Statins inhibit HMG-CoA reductase, reducing hepatic cholesterol synthesis and upregulating LDL receptors. Anti-inflammatory effects reduce plaque vulnerability.', level5: 'Beyond LDL reduction, statins improve endothelial function, reduce inflammation (hsCRP), stabilize plaques by reducing lipid core and matrix metalloproteinase activity.' } },
        { treatmentId: 'antiplatelet-cad', name: 'Antiplatelet Therapy', modality: 'pharmacological', description: 'Aspirin and/or P2Y12 inhibitor', efficacy: 'highly-effective', evidenceLevel: 'level-1a', isFirstLine: true, appropriatePhases: ['established', 'acute'], goals: ['Prevent thrombosis'], medicationIds: ['aspirin'], explanations: { level1: 'Blood thinners prevent clots from forming in your arteries.', level2: 'Aspirin and similar medications prevent platelets from sticking together, reducing the risk of heart attack.', level3: 'Aspirin irreversibly inhibits COX-1, reducing TXA2 production. P2Y12 inhibitors provide additional antiplatelet effect.', level4: 'DAPT (aspirin + P2Y12 inhibitor) is standard after ACS/stent placement. Duration based on ischemic vs bleeding risk balance.', level5: 'Aspirin acetylates COX-1 Ser-530, permanently inhibiting TXA2 synthesis. P2Y12 inhibitors block ADP-mediated platelet activation.' } },
      ],
      anatomyMapping: {
        primaryStructures: [
          { structureId: 'heart', structureName: 'Heart', role: 'target-organ', involvement: 'Myocardial ischemia', highlightColor: '#dc2626', showByDefault: true },
          { structureId: 'coronary-arteries', structureName: 'Coronary Arteries', role: 'primary-site', involvement: 'Atherosclerotic plaques', highlightColor: '#ef4444', showByDefault: true },
        ],
        systemsInvolved: ['Cardiovascular'],
        recommendedView: 'anterior',
        recommendedLayers: ['cardiovascular'],
        focusRegion: 'thorax',
      },
      explanations: {
        level1: 'Fatty buildup in the arteries that feed your heart causes reduced blood flow, which can lead to chest pain or heart attacks.',
        level2: 'Coronary artery disease occurs when cholesterol-containing plaques build up in the arteries that supply your heart, reducing blood flow. This can cause chest pain (angina) and may lead to heart attacks.',
        level3: 'CAD is caused by atherosclerosis of the coronary arteries. Risk factors include dyslipidemia, hypertension, diabetes, and smoking. Presentations range from stable angina to acute coronary syndromes.',
        level4: 'Atherosclerotic plaque development involves endothelial dysfunction, lipid accumulation, inflammatory cell recruitment, and fibrous cap formation. Vulnerable plaques with thin caps and large lipid cores are prone to rupture.',
        level5: 'Endothelial injury initiates atherogenesis. Modified LDL triggers foam cell formation via scavenger receptors. Smooth muscle proliferation and matrix deposition create fibrous cap. Plaque rupture exposes tissue factor, triggering coronary thrombosis.',
      },
      relatedConditions: ['hypertension', 'heart-failure', 'hyperlipidemia'],
      epidemiology: { prevalence: '18.2 million US adults', demographics: 'Leading cause of death' },
      emergencyWarnings: ['Chest pain lasting >20 minutes', 'Pain with sweating or nausea', 'New shortness of breath', 'Loss of consciousness'],
    },
  ],

  // Hyperlipidemia
  [
    'hyperlipidemia',
    {
      conditionId: 'hyperlipidemia',
      name: 'Hyperlipidemia',
      aliases: ['High Cholesterol', 'Dyslipidemia', 'Hypercholesterolemia'],
      icdCode: 'E78.5',
      category: 'metabolic',
      subcategory: 'Lipid Disorder',
      description: 'Elevated lipids (cholesterol and/or triglycerides) in the blood increasing cardiovascular risk',
      pathophysiology: {
        summary: 'Elevated LDL promotes atherosclerosis; elevated triglycerides contribute to cardiovascular risk',
        mechanisms: [
          { name: 'LDL Accumulation', description: 'Excess LDL particles deposit in arterial walls', systemsInvolved: ['Cardiovascular', 'Metabolic'], keyMediators: ['LDL', 'Oxidized LDL', 'Inflammatory cells'], contribution: 'Drives atherosclerotic plaque formation' },
        ],
        riskFactors: [
          { name: 'Diet', type: 'modifiable', impact: 'moderate', description: 'High saturated fat intake', intervention: 'Heart-healthy diet' },
          { name: 'Genetics', type: 'non-modifiable', impact: 'major', description: 'Familial hypercholesterolemia' },
          { name: 'Obesity', type: 'modifiable', impact: 'moderate', description: 'Increases triglycerides and LDL', intervention: 'Weight loss' },
        ],
      },
      clinicalPresentation: {
        primarySymptoms: [
          { name: 'Asymptomatic', prevalence: 'very-common', description: 'Usually no symptoms until cardiovascular event' },
        ],
        labFindings: [
          { testName: 'LDL Cholesterol', abnormality: '>100 mg/dL (varies by risk)', normalRange: '<100 mg/dL', significance: 'Primary treatment target' },
          { testName: 'HDL Cholesterol', abnormality: '<40 M/<50 F mg/dL', normalRange: '>40 M/>50 F', significance: 'Low HDL increases risk' },
          { testName: 'Triglycerides', abnormality: '>150 mg/dL', normalRange: '<150 mg/dL', significance: 'Independent risk factor' },
        ],
      },
      progression: {
        naturalHistory: 'Silently contributes to atherosclerosis over decades',
        timelineSteps: [
          { phaseId: 'elevated-ldl', phase: 'preclinical', displayName: 'Elevated Lipids', timeframe: 'Ongoing', description: 'Laboratory abnormality without clinical disease', symptoms: ['None'], anatomicalChanges: [{ structureId: 'arteries', structureName: 'Arteries', changeType: 'dysfunction', description: 'Early endothelial dysfunction', severity: 'mild', visualIndicator: { color: '#fbbf24', pulse: false, opacity: 0.3 }, isNewAtPhase: true }], reversibility: 'reversible', typicalTreatments: ['Lifestyle modification', 'Consider statin'] },
        ],
        prognosis: 'Each 40 mg/dL reduction in LDL reduces major CV events by ~25%',
      },
      complications: [
        { complicationId: 'atherosclerosis', name: 'Atherosclerotic Cardiovascular Disease', category: 'chronic', severity: 'major', riskLevel: 'high', description: 'CAD, stroke, PAD', mechanism: 'LDL deposition in arterial walls', affectedStructures: [{ structureId: 'arteries', structureName: 'Arteries', effect: 'Plaque formation', highlightColor: '#ef4444' }], warningSymptoms: ['Chest pain', 'Stroke symptoms', 'Leg pain with walking'], preventable: true },
      ],
      treatmentOptions: [
        { treatmentId: 'statin-lipid', name: 'Statin Therapy', modality: 'pharmacological', description: 'First-line lipid-lowering therapy', efficacy: 'highly-effective', evidenceLevel: 'level-1a', isFirstLine: true, appropriatePhases: ['preclinical'], goals: ['LDL reduction based on CV risk'], medicationIds: ['atorvastatin'], explanations: { level1: 'Medications that lower your cholesterol to protect your heart.', level2: 'Statins are the most effective medications for lowering LDL cholesterol and have been proven to prevent heart attacks and strokes.', level3: 'Statins reduce LDL by 30-50% depending on intensity. Treatment intensity based on 10-year ASCVD risk. LDL goal <70 mg/dL for high-risk patients.', level4: 'HMG-CoA reductase inhibition depletes hepatocyte cholesterol, upregulating LDL receptors and increasing LDL clearance from plasma.', level5: 'Beyond LDL reduction, statins demonstrate pleiotropic effects: improved endothelial function via NO production, anti-inflammatory effects reducing hsCRP, plaque stabilization through reduced MMP activity.' } },
        { treatmentId: 'lifestyle-lipid', name: 'Therapeutic Lifestyle Changes', modality: 'lifestyle', description: 'Diet and exercise', efficacy: 'effective', evidenceLevel: 'level-1a', isFirstLine: true, appropriatePhases: ['preclinical'], goals: ['5-15% LDL reduction'], explanations: { level1: 'Healthy eating and exercise can lower your cholesterol.', level2: 'A heart-healthy diet low in saturated fat, combined with regular exercise, can significantly reduce cholesterol levels.', level3: 'TLC includes reducing saturated fat to <7% calories, dietary cholesterol <200mg/day, adding plant stanols/sterols, soluble fiber. Exercise raises HDL.', level4: 'Dietary intervention primarily affects LDL via reduced hepatic cholesterol delivery. Plant stanols compete with cholesterol for absorption.', level5: 'Soluble fiber binds bile acids, increasing fecal excretion and upregulating hepatic LDL receptors for bile acid synthesis. Exercise activates lipoprotein lipase, improving TG clearance.' } },
      ],
      anatomyMapping: {
        primaryStructures: [
          { structureId: 'arteries', structureName: 'Arteries', role: 'target-organ', involvement: 'Site of atherosclerosis', highlightColor: '#ef4444', showByDefault: true },
          { structureId: 'liver', structureName: 'Liver', role: 'primary-site', involvement: 'Cholesterol metabolism', highlightColor: '#f97316', showByDefault: true },
        ],
        systemsInvolved: ['Cardiovascular', 'Metabolic'],
        recommendedView: 'anterior',
        recommendedLayers: ['cardiovascular'],
        focusRegion: 'thorax',
      },
      explanations: {
        level1: 'High cholesterol means too much fat in your blood. This can build up in your arteries and cause heart disease over time.',
        level2: 'Hyperlipidemia is when you have too much cholesterol or triglycerides in your blood. LDL (bad cholesterol) contributes to fatty deposits in arteries, while HDL (good cholesterol) helps remove it.',
        level3: 'Dyslipidemia encompasses elevated LDL, low HDL, and/or elevated triglycerides. It is a major modifiable risk factor for ASCVD. Statin therapy is the cornerstone of pharmacologic treatment.',
        level4: 'LDL particles cross the endothelium and are oxidized, triggering inflammatory cascades and foam cell formation. ASCVD risk is determined by cumulative LDL exposure over time (LDL-years).',
        level5: 'ApoB-containing lipoproteins (LDL, VLDL, Lp(a)) are atherogenic. LDL receptor activity determines plasma LDL levels; PCSK9 promotes LDL receptor degradation. Genetic conditions like FH involve LDL receptor mutations.',
      },
      relatedConditions: ['coronary-artery-disease', 'metabolic-syndrome', 'diabetes'],
      epidemiology: { prevalence: '93 million US adults with elevated LDL', demographics: 'Increases with age' },
    },
  ],

  // Asthma
  [
    'asthma',
    {
      conditionId: 'asthma',
      name: 'Asthma',
      aliases: ['Bronchial Asthma', 'Reactive Airway Disease'],
      icdCode: 'J45.909',
      category: 'respiratory',
      subcategory: 'Obstructive Airway Disease',
      description: 'Chronic inflammatory airway disease with reversible bronchoconstriction and airway hyperresponsiveness',
      pathophysiology: {
        summary: 'Chronic airway inflammation leads to bronchoconstriction, mucus production, and airway remodeling',
        mechanisms: [
          { name: 'Airway Inflammation', description: 'Type 2 inflammation with eosinophils and mast cells', systemsInvolved: ['Respiratory', 'Immune'], keyMediators: ['IgE', 'IL-4', 'IL-5', 'IL-13', 'Leukotrienes'], contribution: 'Causes airway hyperresponsiveness and bronchoconstriction' },
          { name: 'Bronchoconstriction', description: 'Smooth muscle contraction narrows airways', systemsInvolved: ['Respiratory'], keyMediators: ['Histamine', 'Acetylcholine', 'Leukotrienes'], contribution: 'Causes acute symptoms' },
        ],
        riskFactors: [
          { name: 'Atopy', type: 'non-modifiable', impact: 'major', description: 'Genetic predisposition to allergic conditions' },
          { name: 'Environmental Allergens', type: 'partially-modifiable', impact: 'moderate', description: 'Dust mites, pollen, mold, pet dander', intervention: 'Allergen avoidance' },
          { name: 'Obesity', type: 'modifiable', impact: 'moderate', description: 'Increases asthma severity', intervention: 'Weight loss' },
        ],
      },
      clinicalPresentation: {
        primarySymptoms: [
          { name: 'Wheezing', prevalence: 'very-common', description: 'Musical breathing sound on expiration', timing: 'During exacerbations and with triggers' },
          { name: 'Dyspnea', prevalence: 'very-common', description: 'Shortness of breath', timing: 'Variable, worse at night/early morning' },
          { name: 'Cough', prevalence: 'very-common', description: 'Often dry, worse at night' },
          { name: 'Chest Tightness', prevalence: 'common', description: 'Sensation of constriction' },
        ],
        physicalFindings: [
          { name: 'Wheezes', examType: 'Pulmonary', description: 'Expiratory wheezes on auscultation', diagnosticValue: 'Suggestive but not specific' },
        ],
      },
      progression: {
        naturalHistory: 'Variable course; may improve or persist into adulthood',
        timelineSteps: [
          { phaseId: 'intermittent', phase: 'early', displayName: 'Intermittent Asthma', timeframe: 'Symptoms <2 days/week', description: 'Mild, infrequent symptoms', symptoms: ['Occasional wheeze', 'Rare exacerbations'], anatomicalChanges: [{ structureId: 'lungs', structureName: 'Airways', changeType: 'inflammation', description: 'Intermittent inflammation', severity: 'mild', visualIndicator: { color: '#f97316', pulse: false, opacity: 0.4 }, isNewAtPhase: true }], reversibility: 'reversible', typicalTreatments: ['SABA as needed'] },
          { phaseId: 'persistent', phase: 'established', displayName: 'Persistent Asthma', timeframe: 'Daily symptoms', description: 'Regular symptoms requiring daily controller', symptoms: ['Daily or nightly symptoms', 'Activity limitation'], anatomicalChanges: [{ structureId: 'lungs', structureName: 'Airways', changeType: 'inflammation', description: 'Chronic inflammation with early remodeling', severity: 'moderate', visualIndicator: { color: '#ef4444', pulse: true, opacity: 0.6 }, isNewAtPhase: false }], reversibility: 'partially-reversible', typicalTreatments: ['ICS daily', 'LABA if not controlled'] },
          { phaseId: 'severe', phase: 'advanced', displayName: 'Severe Asthma', timeframe: 'Symptoms throughout day', description: 'Uncontrolled despite high-dose therapy', symptoms: ['Constant symptoms', 'Frequent exacerbations', 'Limited activity'], anatomicalChanges: [{ structureId: 'lungs', structureName: 'Airways', changeType: 'fibrosis', description: 'Significant airway remodeling', severity: 'severe', visualIndicator: { color: '#dc2626', pulse: true, opacity: 0.7 }, isNewAtPhase: false }], reversibility: 'partially-reversible', typicalTreatments: ['High-dose ICS/LABA', 'Biologics', 'Oral steroids as needed'] },
        ],
        prognosis: 'Most achieve good control with appropriate therapy. Severe asthma (~5-10%) is difficult to control.',
      },
      complications: [
        { complicationId: 'severe-exacerbation', name: 'Severe Asthma Exacerbation', category: 'acute', severity: 'life-threatening', riskLevel: 'moderate', description: 'Acute severe bronchospasm', mechanism: 'Trigger exposure with severe inflammatory response', affectedStructures: [{ structureId: 'lungs', structureName: 'Lungs', effect: 'Severe bronchoconstriction', highlightColor: '#dc2626' }], warningSymptoms: ['Unable to speak sentences', 'Severe dyspnea', 'Blue lips'], prevention: ['Controller adherence', 'Trigger avoidance', 'Action plan'], preventable: true },
      ],
      treatmentOptions: [
        { treatmentId: 'ics-asthma', name: 'Inhaled Corticosteroids', modality: 'pharmacological', description: 'Daily anti-inflammatory controller', efficacy: 'highly-effective', evidenceLevel: 'level-1a', isFirstLine: true, appropriatePhases: ['early', 'established', 'advanced'], goals: ['Reduce inflammation', 'Prevent exacerbations'], medicationIds: ['fluticasone'], explanations: { level1: 'Daily inhaler that reduces swelling in your airways.', level2: 'Inhaled steroids reduce the inflammation in your airways, making them less likely to react to triggers. They are the most important medications for asthma control.', level3: 'ICS are the cornerstone of persistent asthma management. They reduce airway inflammation, improve symptoms, reduce exacerbations, and may prevent airway remodeling.', level4: 'Corticosteroids suppress multiple inflammatory pathways including cytokine production, eosinophil survival, and mucus secretion. Dose titrated to minimum needed for control.', level5: 'Glucocorticoids translocate to nucleus, activating anti-inflammatory gene transcription (lipocortin-1) and suppressing pro-inflammatory transcription factors (NF-κB, AP-1). Long-term use prevents basement membrane thickening.' } },
        { treatmentId: 'saba-asthma', name: 'Short-Acting Beta Agonists', modality: 'pharmacological', description: 'Rescue inhaler for acute symptoms', efficacy: 'highly-effective', evidenceLevel: 'level-1a', isFirstLine: true, appropriatePhases: ['early', 'established', 'advanced'], goals: ['Rapid symptom relief'], medicationIds: ['albuterol'], explanations: { level1: 'A rescue inhaler that quickly opens your airways when you have symptoms.', level2: 'Short-acting bronchodilators like albuterol relax the muscles around your airways within minutes, providing quick relief during symptoms or attacks.', level3: 'SABAs are rescue therapy for acute symptoms. Use >2 times/week suggests inadequate control. β2-receptor stimulation relaxes airway smooth muscle.', level4: 'β2-agonists activate adenylyl cyclase, increasing cAMP and promoting smooth muscle relaxation. Onset within 5 minutes, duration 4-6 hours.', level5: 'β2-receptor activation increases cAMP, activating PKA which phosphorylates myosin light chain kinase, reducing its affinity for calcium-calmodulin and promoting bronchodilation.' } },
      ],
      anatomyMapping: {
        primaryStructures: [
          { structureId: 'lungs', structureName: 'Lungs (Airways)', role: 'primary-site', involvement: 'Inflammation and bronchoconstriction', highlightColor: '#ef4444', showByDefault: true },
        ],
        systemsInvolved: ['Respiratory'],
        recommendedView: 'anterior',
        recommendedLayers: ['respiratory'],
        focusRegion: 'thorax',
      },
      explanations: {
        level1: 'Asthma makes your airways swollen and sensitive. Triggers like allergens or exercise cause them to narrow, making it hard to breathe.',
        level2: 'Asthma is a chronic condition where your airways become inflamed and narrow in response to triggers. This causes wheezing, coughing, and shortness of breath. Daily controller inhalers reduce inflammation, while rescue inhalers provide quick relief.',
        level3: 'Asthma is characterized by reversible airway obstruction, airway hyperresponsiveness, and chronic inflammation. Type 2 inflammation predominates with eosinophilic infiltration. Treatment is stepwise based on control.',
        level4: 'Asthma pathophysiology involves allergen-triggered IgE-mediated mast cell degranulation (early phase) and subsequent eosinophilic inflammation (late phase). Airway remodeling includes smooth muscle hypertrophy and subepithelial fibrosis.',
        level5: 'Type 2 high asthma involves Th2 cells, ILC2s, and eosinophils driven by IL-4, IL-5, IL-13. TSLP, IL-25, IL-33 initiate the response. Type 2 low asthma is neutrophilic or paucigranulocytic. Biologics target specific cytokines (anti-IL-5, anti-IL-4R, anti-IgE).',
      },
      relatedConditions: ['copd', 'allergic-rhinitis'],
      epidemiology: { prevalence: '25 million US adults', demographics: 'Often begins in childhood' },
      emergencyWarnings: ['Cannot speak full sentences', 'Blue lips or fingernails', 'No improvement with rescue inhaler', 'Drowsiness or confusion', 'Peak flow <50% personal best'],
    },
  ],

  // Osteoporosis
  [
    'osteoporosis',
    {
      conditionId: 'osteoporosis',
      name: 'Osteoporosis',
      aliases: ['Brittle Bone Disease', 'Low Bone Density'],
      icdCode: 'M81.0',
      category: 'musculoskeletal',
      subcategory: 'Metabolic Bone Disease',
      description: 'Skeletal disorder characterized by low bone mass and microarchitectural deterioration, increasing fracture risk',
      pathophysiology: {
        summary: 'Imbalance between bone resorption and formation leads to decreased bone density and structural weakness',
        mechanisms: [
          { name: 'Increased Resorption', description: 'Osteoclast activity exceeds osteoblast bone formation', systemsInvolved: ['Musculoskeletal', 'Endocrine'], keyMediators: ['RANKL', 'Estrogen deficiency', 'PTH'], contribution: 'Net bone loss over time' },
        ],
        riskFactors: [
          { name: 'Postmenopausal Status', type: 'non-modifiable', impact: 'major', description: 'Estrogen loss accelerates bone resorption' },
          { name: 'Age', type: 'non-modifiable', impact: 'major', description: 'Bone loss accelerates with age' },
          { name: 'Low Calcium/Vitamin D', type: 'modifiable', impact: 'moderate', description: 'Necessary for bone health', intervention: 'Supplementation' },
          { name: 'Sedentary Lifestyle', type: 'modifiable', impact: 'moderate', description: 'Weight-bearing exercise maintains bone', intervention: 'Exercise' },
        ],
      },
      clinicalPresentation: {
        primarySymptoms: [
          { name: 'Often Asymptomatic', prevalence: 'very-common', description: 'Silent until fracture occurs' },
          { name: 'Fracture', prevalence: 'common', description: 'Hip, spine, or wrist fracture from minimal trauma', location: 'Hip, vertebrae, distal radius' },
          { name: 'Height Loss', prevalence: 'common', description: 'From vertebral compression fractures' },
        ],
        imagingFindings: [
          { modality: 'DEXA Scan', finding: 'T-score ≤-2.5', significance: 'Diagnostic criterion', structures: ['Spine', 'Hip'] },
        ],
      },
      progression: {
        naturalHistory: 'Progressive bone loss without treatment',
        timelineSteps: [
          { phaseId: 'osteopenia', phase: 'early', displayName: 'Osteopenia', timeframe: 'T-score -1.0 to -2.5', description: 'Low bone mass not yet meeting osteoporosis criteria', symptoms: ['Usually none'], anatomicalChanges: [{ structureId: 'skeleton', structureName: 'Bones', changeType: 'atrophy', description: 'Decreased bone density', severity: 'mild', visualIndicator: { color: '#f97316', pulse: false, opacity: 0.4 }, isNewAtPhase: true }], reversibility: 'partially-reversible', typicalTreatments: ['Calcium, vitamin D', 'Weight-bearing exercise', 'Consider medication if high risk'] },
          { phaseId: 'osteoporosis', phase: 'established', displayName: 'Osteoporosis', timeframe: 'T-score ≤-2.5', description: 'Significantly low bone mass', symptoms: ['High fracture risk', 'May have back pain from compression fractures'], anatomicalChanges: [{ structureId: 'skeleton', structureName: 'Bones', changeType: 'atrophy', description: 'Significant bone loss', severity: 'moderate', visualIndicator: { color: '#ef4444', pulse: false, opacity: 0.6 }, isNewAtPhase: false }], reversibility: 'partially-reversible', typicalTreatments: ['Bisphosphonates', 'Calcium/vitamin D', 'Fall prevention'] },
          { phaseId: 'severe-osteoporosis', phase: 'advanced', displayName: 'Severe Osteoporosis', timeframe: 'T-score ≤-2.5 with fracture', description: 'Osteoporosis with fragility fracture(s)', symptoms: ['History of fracture', 'Chronic pain', 'Disability'], anatomicalChanges: [{ structureId: 'skeleton', structureName: 'Bones', changeType: 'structural-damage', description: 'Fractures present', severity: 'severe', visualIndicator: { color: '#dc2626', pulse: true, opacity: 0.7 }, isNewAtPhase: false }], reversibility: 'partially-reversible', typicalTreatments: ['Anabolic therapy (teriparatide)', 'Followed by bisphosphonate'] },
        ],
        prognosis: 'Treatment reduces fracture risk by 50-70%. Hip fracture carries high mortality.',
      },
      complications: [
        { complicationId: 'hip-fracture', name: 'Hip Fracture', category: 'acute', severity: 'major', riskLevel: 'high', description: 'Fracture of proximal femur', mechanism: 'Bone fragility from osteoporosis', affectedStructures: [{ structureId: 'hip', structureName: 'Hip', effect: 'Fracture requiring surgery', highlightColor: '#dc2626' }], warningSymptoms: ['Fall followed by hip pain', 'Unable to bear weight'], prevention: ['Treatment', 'Fall prevention'], preventable: true },
        { complicationId: 'vertebral-fracture', name: 'Vertebral Compression Fracture', category: 'acute', severity: 'moderate', riskLevel: 'high', description: 'Collapse of vertebral body', mechanism: 'Minimal trauma to weakened bone', affectedStructures: [{ structureId: 'spine', structureName: 'Spine', effect: 'Vertebral compression', highlightColor: '#ef4444' }], warningSymptoms: ['Acute back pain', 'Height loss', 'Kyphosis'], preventable: true },
      ],
      treatmentOptions: [
        { treatmentId: 'bisphosphonate', name: 'Bisphosphonates', modality: 'pharmacological', description: 'First-line antiresorptive therapy', efficacy: 'highly-effective', evidenceLevel: 'level-1a', isFirstLine: true, appropriatePhases: ['early', 'established', 'advanced'], goals: ['Reduce fracture risk', 'Maintain/improve BMD'], timeToEffect: '6-12 months for fracture reduction', contraindications: ['Esophageal abnormalities', 'Inability to remain upright'], sideEffects: ['GI upset', 'Osteonecrosis of jaw (rare)', 'Atypical femur fracture (rare)'], explanations: { level1: 'Medications that slow bone loss and reduce fracture risk.', level2: 'Bisphosphonates like alendronate slow down the cells that break down bone, allowing your bones to become stronger over time.', level3: 'Bisphosphonates inhibit osteoclast function, reducing bone resorption. They reduce hip and vertebral fractures by 40-70%. Treatment holiday considered after 3-5 years.', level4: 'Bisphosphonates incorporate into bone matrix and are released during resorption, inducing osteoclast apoptosis. Long skeletal half-life allows drug holiday.', level5: 'Nitrogen-containing bisphosphonates inhibit farnesyl pyrophosphate synthase in the mevalonate pathway, preventing prenylation of GTPases essential for osteoclast function, inducing apoptosis.' } },
        { treatmentId: 'calcium-vitd', name: 'Calcium and Vitamin D', modality: 'supportive', description: 'Essential supplements for bone health', efficacy: 'moderately-effective', evidenceLevel: 'level-1a', isFirstLine: true, appropriatePhases: ['early', 'established', 'advanced'], goals: ['Achieve adequate calcium/vitamin D', 'Optimize treatment efficacy'], explanations: { level1: 'Calcium and vitamin D supplements help keep your bones strong.', level2: 'Calcium is the main mineral in bones, and vitamin D helps your body absorb it. Most adults need 1000-1200mg calcium and 800-2000 IU vitamin D daily.', level3: 'Calcium 1000-1200mg/day and vitamin D 800-2000 IU/day are recommended for patients with osteoporosis. Vitamin D levels should be >30 ng/mL for optimal absorption.', level4: 'Adequate calcium maintains calcium-phosphate homeostasis without triggering PTH-mediated bone resorption. Vitamin D promotes intestinal calcium absorption via calbindin expression.', level5: 'Vitamin D undergoes 25-hydroxylation in liver and 1α-hydroxylation in kidney to form calcitriol. Calcitriol binds VDR, inducing TRPV6 and calbindin expression for calcium absorption.' } },
      ],
      anatomyMapping: {
        primaryStructures: [
          { structureId: 'skeleton', structureName: 'Skeleton', role: 'primary-site', involvement: 'Decreased bone density throughout', highlightColor: '#ef4444', showByDefault: true },
          { structureId: 'spine', structureName: 'Spine', role: 'target-organ', involvement: 'Common fracture site', highlightColor: '#dc2626', showByDefault: true },
          { structureId: 'hip', structureName: 'Hip', role: 'target-organ', involvement: 'Common fracture site', highlightColor: '#dc2626', showByDefault: true },
        ],
        systemsInvolved: ['Musculoskeletal'],
        recommendedView: 'anterior',
        recommendedLayers: ['musculoskeletal'],
        focusRegion: 'spine',
      },
      explanations: {
        level1: 'Osteoporosis makes your bones weak and fragile, so they can break easily from a minor fall or bump.',
        level2: 'Osteoporosis is a condition where bones become thin and weak. It often has no symptoms until a fracture occurs. Treatment with medications, calcium, vitamin D, and exercise can strengthen bones and prevent fractures.',
        level3: 'Osteoporosis is defined by T-score ≤-2.5 on DEXA scan. It results from imbalanced bone remodeling with excess resorption. Common fracture sites are hip, spine, and wrist. Bisphosphonates are first-line therapy.',
        level4: 'Bone remodeling involves coupled osteoclast (resorption) and osteoblast (formation) activity. Estrogen deficiency increases RANKL expression, promoting osteoclast differentiation. Treatment targets include resorption inhibition or formation stimulation.',
        level5: 'RANKL-RANK signaling activates NFATc1, the master transcription factor for osteoclast differentiation. OPG acts as decoy receptor. Estrogen suppresses osteoclast formation via OPG upregulation and osteoclast apoptosis. Sclerostin, produced by osteocytes, inhibits Wnt signaling and bone formation.',
      },
      relatedConditions: ['vitamin-d-deficiency', 'menopause'],
      epidemiology: { prevalence: '10 million US adults with osteoporosis', demographics: '80% are women' },
      emergencyWarnings: ['Fall with inability to bear weight', 'Sudden severe back pain', 'Visible deformity after minor trauma'],
    },
  ],

  // Rheumatoid Arthritis
  [
    'rheumatoid-arthritis',
    {
      conditionId: 'rheumatoid-arthritis',
      name: 'Rheumatoid Arthritis',
      aliases: ['RA'],
      icdCode: 'M06.9',
      category: 'musculoskeletal',
      subcategory: 'Autoimmune/Inflammatory',
      description: 'Chronic autoimmune inflammatory disease primarily affecting joints, causing progressive joint destruction',
      pathophysiology: {
        summary: 'Autoimmune inflammation of synovium leads to joint destruction',
        mechanisms: [
          { name: 'Autoimmune Synovitis', description: 'Immune cells infiltrate and inflame the joint lining', systemsInvolved: ['Musculoskeletal', 'Immune'], keyMediators: ['TNF-α', 'IL-6', 'IL-1', 'Autoantibodies (RF, anti-CCP)'], contribution: 'Drives joint inflammation and damage' },
          { name: 'Pannus Formation', description: 'Inflamed synovium grows over cartilage', systemsInvolved: ['Musculoskeletal'], contribution: 'Erodes cartilage and bone' },
        ],
        riskFactors: [
          { name: 'Genetic (HLA-DR4)', type: 'non-modifiable', impact: 'major', description: 'Strong genetic association' },
          { name: 'Female Sex', type: 'non-modifiable', impact: 'moderate', description: '3:1 female predominance' },
          { name: 'Smoking', type: 'modifiable', impact: 'major', description: 'Increases risk and severity', intervention: 'Cessation' },
        ],
      },
      clinicalPresentation: {
        primarySymptoms: [
          { name: 'Joint Pain and Swelling', prevalence: 'very-common', description: 'Symmetric polyarthritis', location: 'Small joints (hands, feet) initially', timing: 'Worse in morning with prolonged stiffness' },
          { name: 'Morning Stiffness', prevalence: 'very-common', description: 'Lasting >1 hour', timing: 'Characteristic of inflammatory arthritis' },
          { name: 'Fatigue', prevalence: 'very-common', description: 'Systemic inflammation causes fatigue' },
        ],
        labFindings: [
          { testName: 'Rheumatoid Factor', abnormality: 'Positive in ~70%', significance: 'Diagnostic but not specific' },
          { testName: 'Anti-CCP Antibodies', abnormality: 'Positive in ~70%', significance: 'Highly specific for RA' },
          { testName: 'CRP/ESR', abnormality: 'Elevated', significance: 'Reflects inflammation' },
        ],
      },
      progression: {
        naturalHistory: 'Progressive joint destruction if untreated',
        timelineSteps: [
          { phaseId: 'early-ra', phase: 'early', displayName: 'Early RA', timeframe: 'Symptoms <6 months', description: 'Early inflammatory phase', symptoms: ['Joint pain', 'Swelling', 'Morning stiffness'], anatomicalChanges: [{ structureId: 'joints', structureName: 'Synovium', changeType: 'inflammation', description: 'Synovial inflammation', severity: 'moderate', visualIndicator: { color: '#ef4444', pulse: true, opacity: 0.6 }, isNewAtPhase: true }], reversibility: 'reversible', typicalTreatments: ['Start DMARD (methotrexate)', 'Bridge with steroids'] },
          { phaseId: 'established-ra', phase: 'established', displayName: 'Established RA', timeframe: 'Ongoing disease', description: 'Ongoing inflammation with developing damage', symptoms: ['Persistent polyarthritis', 'Deformities developing'], anatomicalChanges: [{ structureId: 'joints', structureName: 'Joints', changeType: 'degeneration', description: 'Erosions and cartilage loss', severity: 'moderate', visualIndicator: { color: '#dc2626', pulse: true, opacity: 0.7 }, isNewAtPhase: false }], reversibility: 'partially-reversible', typicalTreatments: ['DMARD combinations', 'Consider biologics'] },
          { phaseId: 'advanced-ra', phase: 'advanced', displayName: 'Advanced RA', timeframe: 'Long-standing disease', description: 'Significant joint destruction and deformity', symptoms: ['Deformities', 'Functional impairment', 'Extra-articular manifestations'], anatomicalChanges: [{ structureId: 'joints', structureName: 'Joints', changeType: 'structural-damage', description: 'Severe erosions and deformity', severity: 'severe', visualIndicator: { color: '#dc2626', pulse: true, opacity: 0.8 }, isNewAtPhase: false }], reversibility: 'irreversible', typicalTreatments: ['Biologics', 'Joint replacement if needed'] },
        ],
        prognosis: 'Early aggressive treatment prevents joint damage. Modern biologics have improved outcomes significantly.',
      },
      complications: [],
      treatmentOptions: [
        { treatmentId: 'methotrexate-ra', name: 'Methotrexate', modality: 'pharmacological', description: 'First-line DMARD for RA', efficacy: 'highly-effective', evidenceLevel: 'level-1a', isFirstLine: true, appropriatePhases: ['early', 'established'], goals: ['Remission or low disease activity', 'Prevent joint damage'], timeToEffect: '6-12 weeks', contraindications: ['Pregnancy', 'Significant liver disease'], sideEffects: ['Nausea', 'Mouth sores', 'Liver toxicity', 'Bone marrow suppression'], monitoring: ['CBC', 'LFTs', 'Creatinine'], explanations: { level1: 'A medication that slows down your overactive immune system to reduce joint inflammation.', level2: 'Methotrexate is the most commonly used medication for RA. It reduces immune system activity, decreasing joint inflammation and preventing damage.', level3: 'Methotrexate is the anchor DMARD in RA. Start within 3 months of diagnosis ("window of opportunity"). Doses for RA (7.5-25mg weekly) are much lower than cancer chemotherapy.', level4: 'At RA doses, methotrexate acts through adenosine release (anti-inflammatory) rather than antifolate effects. Used in combination strategies with biologics.', level5: 'Methotrexate polyglutamates accumulate in cells, inhibiting AICAR transformylase and increasing adenosine release. Adenosine A2A receptor activation suppresses inflammatory cytokine production.' } },
        { treatmentId: 'biologics-ra', name: 'Biologic DMARDs', modality: 'pharmacological', description: 'Targeted immune therapy (TNF inhibitors, IL-6 inhibitors, etc.)', efficacy: 'highly-effective', evidenceLevel: 'level-1a', isFirstLine: false, appropriatePhases: ['early', 'established', 'advanced'], goals: ['Remission when methotrexate insufficient'], explanations: { level1: 'Newer injectable medications that target specific parts of your immune system causing joint damage.', level2: 'Biologic medications like TNF inhibitors target the specific immune chemicals causing joint inflammation. They are often added if methotrexate alone is not controlling your disease.', level3: 'TNF inhibitors (adalimumab, etanercept), IL-6 inhibitors (tocilizumab), and other biologics are highly effective. Used after inadequate response to methotrexate or in combination.', level4: 'TNF-α is a key cytokine driving RA synovitis and bone erosion. TNF inhibitors neutralize soluble and transmembrane TNF. IL-6 drives systemic inflammation and acute phase response.', level5: 'TNF signals through TNFR1 (ubiquitous) and TNFR2 (immune cells), activating NF-κB and MAPK pathways. TNF inhibitors reduce osteoclast activation via RANKL and protect against erosive damage.' } },
      ],
      anatomyMapping: {
        primaryStructures: [
          { structureId: 'joints', structureName: 'Small Joints (Hands, Feet)', role: 'primary-site', involvement: 'Symmetric inflammatory arthritis', highlightColor: '#dc2626', showByDefault: true },
        ],
        systemsInvolved: ['Musculoskeletal', 'Immune'],
        recommendedView: 'anterior',
        recommendedLayers: ['musculoskeletal'],
        focusRegion: 'upper-extremity',
      },
      explanations: {
        level1: 'Rheumatoid arthritis is when your immune system attacks your joints by mistake, causing pain, swelling, and eventually damage.',
        level2: 'RA is an autoimmune disease where your immune system mistakenly attacks your joint lining, causing inflammation. Without treatment, this leads to permanent joint damage. Modern medications can prevent this damage.',
        level3: 'RA is a chronic autoimmune disease causing symmetric inflammatory polyarthritis. Early treatment with DMARDs (especially methotrexate) is critical to prevent erosive joint damage. Treat-to-target strategies aim for remission.',
        level4: 'RA involves autoantibody production (RF, anti-CCP), synovial inflammation with pannus formation, and bone/cartilage destruction via osteoclast activation (RANKL pathway) and matrix metalloproteinases.',
        level5: 'Citrullination of self-proteins (via PAD enzymes) generates neoantigens recognized by anti-CCP antibodies. Immune complexes deposit in synovium, activating complement and recruiting inflammatory cells. Fibroblast-like synoviocytes proliferate, producing MMPs that degrade cartilage matrix.',
      },
      relatedConditions: ['osteoarthritis'],
      epidemiology: { prevalence: '1.3 million US adults', demographics: 'Women 3x more common; typical onset 30-50 years' },
      emergencyWarnings: ['Severe joint pain with fever', 'Red hot swollen joint (may be septic arthritis)'],
    },
  ],

  // Peripheral Neuropathy
  [
    'peripheral-neuropathy',
    {
      conditionId: 'peripheral-neuropathy',
      name: 'Peripheral Neuropathy',
      aliases: ['Neuropathy', 'Polyneuropathy'],
      icdCode: 'G62.9',
      category: 'neurologic',
      subcategory: 'Peripheral Nerve Disorder',
      description: 'Damage to peripheral nerves causing weakness, numbness, and pain, typically in hands and feet',
      pathophysiology: {
        summary: 'Nerve fiber damage from various causes leads to sensory, motor, and autonomic dysfunction',
        mechanisms: [
          { name: 'Axonal Degeneration', description: 'Damage to the nerve fiber itself', systemsInvolved: ['Nervous'], contribution: 'Most common mechanism; length-dependent ("stocking-glove" pattern)' },
          { name: 'Demyelination', description: 'Damage to the myelin sheath', systemsInvolved: ['Nervous'], contribution: 'Slows nerve conduction; seen in inflammatory neuropathies' },
        ],
        riskFactors: [
          { name: 'Diabetes', type: 'modifiable', impact: 'major', description: 'Most common cause; hyperglycemia damages nerves', intervention: 'Glycemic control' },
          { name: 'Alcohol', type: 'modifiable', impact: 'moderate', description: 'Direct toxic effect and nutritional deficiency', intervention: 'Cessation' },
          { name: 'B12 Deficiency', type: 'modifiable', impact: 'moderate', description: 'Necessary for nerve health', intervention: 'Supplementation' },
        ],
      },
      clinicalPresentation: {
        primarySymptoms: [
          { name: 'Numbness/Tingling', prevalence: 'very-common', description: 'Starts in feet and spreads proximally', location: 'Distal extremities - stocking-glove distribution' },
          { name: 'Burning Pain', prevalence: 'common', description: 'Neuropathic pain often worse at night' },
          { name: 'Weakness', prevalence: 'common', description: 'Distal weakness affects foot dorsiflexion first' },
        ],
        physicalFindings: [
          { name: 'Decreased Sensation', examType: 'Neurological', description: 'Reduced pin, vibration, or light touch sensation distally', diagnosticValue: 'Confirms sensory neuropathy' },
          { name: 'Absent Ankle Reflexes', examType: 'Neurological', description: 'Often first reflex lost', diagnosticValue: 'Supports neuropathy diagnosis' },
        ],
      },
      progression: {
        naturalHistory: 'Progressive if underlying cause not addressed',
        timelineSteps: [
          { phaseId: 'early-neuropathy', phase: 'early', displayName: 'Early Neuropathy', timeframe: 'Symptoms in feet', description: 'Sensory symptoms in distal feet', symptoms: ['Numbness in toes', 'Tingling', 'Mild discomfort'], anatomicalChanges: [{ structureId: 'peripheral-nerves', structureName: 'Distal Sensory Nerves', changeType: 'degeneration', description: 'Early axonal loss', severity: 'mild', visualIndicator: { color: '#f97316', pulse: false, opacity: 0.4 }, isNewAtPhase: true }], reversibility: 'partially-reversible', typicalTreatments: ['Treat underlying cause', 'Pain management'] },
          { phaseId: 'moderate-neuropathy', phase: 'established', displayName: 'Moderate Neuropathy', timeframe: 'Symptoms ascending', description: 'Symptoms spreading proximally, affecting function', symptoms: ['Numbness to mid-calf', 'Hand involvement beginning', 'Balance problems'], anatomicalChanges: [{ structureId: 'peripheral-nerves', structureName: 'Peripheral Nerves', changeType: 'degeneration', description: 'Progressive axonal degeneration', severity: 'moderate', visualIndicator: { color: '#ef4444', pulse: false, opacity: 0.6 }, isNewAtPhase: false }], reversibility: 'partially-reversible', typicalTreatments: ['Aggressive cause management', 'Neuropathic pain medications', 'Fall prevention'] },
          { phaseId: 'severe-neuropathy', phase: 'advanced', displayName: 'Severe Neuropathy', timeframe: 'Extensive involvement', description: 'Significant sensory loss and weakness', symptoms: ['Sensory loss to knees/elbows', 'Weakness', 'Foot ulcers if diabetic'], anatomicalChanges: [{ structureId: 'peripheral-nerves', structureName: 'Peripheral Nerves', changeType: 'degeneration', description: 'Severe axonal loss with disability', severity: 'severe', visualIndicator: { color: '#dc2626', pulse: false, opacity: 0.7 }, isNewAtPhase: false }], reversibility: 'irreversible', typicalTreatments: ['Symptomatic management', 'Adaptive devices', 'Wound care if ulcers'] },
        ],
        prognosis: 'Depends on cause. Diabetic neuropathy progresses but can stabilize with glycemic control.',
      },
      complications: [
        { complicationId: 'foot-ulcer', name: 'Diabetic Foot Ulcer', category: 'chronic', severity: 'major', riskLevel: 'high', description: 'Ulceration from unrecognized trauma', mechanism: 'Sensory loss leads to unnoticed injury', affectedStructures: [{ structureId: 'feet', structureName: 'Feet', effect: 'Ulceration', highlightColor: '#dc2626' }], warningSymptoms: ['Often painless', 'Skin breakdown', 'Infection'], prevention: ['Daily foot inspection', 'Proper footwear'], preventable: true },
        { complicationId: 'falls', name: 'Falls', category: 'acute', severity: 'moderate', riskLevel: 'high', description: 'Falls due to sensory loss and weakness', mechanism: 'Impaired proprioception and balance', affectedStructures: [], warningSymptoms: ['Unsteady gait', 'Previous falls'], prevention: ['Balance exercises', 'Assistive devices', 'Home safety'], preventable: true },
      ],
      treatmentOptions: [
        { treatmentId: 'treat-cause', name: 'Treat Underlying Cause', modality: 'supportive', description: 'Address diabetes, B12 deficiency, alcohol, etc.', efficacy: 'highly-effective', evidenceLevel: 'level-1a', isFirstLine: true, appropriatePhases: ['early', 'established'], goals: ['Prevent progression', 'Allow nerve recovery'], explanations: { level1: 'Treating the cause of your nerve damage is the most important step.', level2: 'Finding and treating what is causing your neuropathy - like controlling blood sugar in diabetes - is essential to prevent it from getting worse.', level3: 'Identify and treat reversible causes: glycemic control for diabetic neuropathy, B12 supplementation, alcohol cessation. Some neuropathies (inflammatory) require immunotherapy.', level4: 'Tight glycemic control (HbA1c <7%) slows progression of diabetic neuropathy. Inflammatory/demyelinating neuropathies may respond to IVIG or steroids.', level5: 'In diabetic neuropathy, hyperglycemia drives polyol pathway activation (sorbitol accumulation), AGE formation, oxidative stress, and microvascular damage. Normalizing glucose reduces these metabolic insults.' } },
        { treatmentId: 'neuropathic-pain', name: 'Neuropathic Pain Medications', modality: 'pharmacological', description: 'Gabapentin, pregabalin, duloxetine, or TCAs', efficacy: 'effective', evidenceLevel: 'level-1a', isFirstLine: true, appropriatePhases: ['early', 'established', 'advanced'], goals: ['Pain relief'], explanations: { level1: 'Medications that calm overactive nerves and reduce pain.', level2: 'Special medications that work on nerve pain include gabapentin, pregabalin, and certain antidepressants. They work differently than regular pain relievers.', level3: 'First-line agents: gabapentinoids (gabapentin, pregabalin), SNRIs (duloxetine), TCAs (amitriptyline). ~50% of patients achieve 50% pain reduction.', level4: 'Gabapentinoids bind α2δ subunit of voltage-gated calcium channels, reducing excitatory neurotransmitter release. SNRIs enhance descending pain inhibition via norepinephrine and serotonin.', level5: 'Central sensitization in neuropathic pain involves NMDA receptor activation and increased excitability. Gabapentinoids reduce presynaptic calcium influx and glutamate release. TCAs block sodium channels and inhibit norepinephrine/serotonin reuptake.' } },
      ],
      anatomyMapping: {
        primaryStructures: [
          { structureId: 'peripheral-nerves', structureName: 'Peripheral Nerves', role: 'primary-site', involvement: 'Axonal degeneration', highlightColor: '#ef4444', showByDefault: true },
        ],
        secondaryStructures: [
          { structureId: 'feet', structureName: 'Feet', role: 'target-organ', involvement: 'Most affected (longest nerves)', highlightColor: '#f97316', showByDefault: true },
        ],
        systemsInvolved: ['Nervous'],
        recommendedView: 'anterior',
        recommendedLayers: ['nervous'],
        focusRegion: 'lower-extremity',
      },
      explanations: {
        level1: 'Peripheral neuropathy means the nerves in your hands and feet are damaged, causing numbness, tingling, or pain.',
        level2: 'Neuropathy is nerve damage that usually starts in the feet and can spread upward. Common causes include diabetes, vitamin deficiencies, and alcohol. Treatment focuses on the underlying cause and managing symptoms.',
        level3: 'Peripheral neuropathy presents with length-dependent sensory symptoms (stocking-glove distribution), neuropathic pain, and eventual weakness. Workup includes EMG/NCS, metabolic panel, B12, TSH. Diabetic neuropathy is most common.',
        level4: 'Axonal neuropathies show reduced amplitudes on NCS with length-dependent fiber loss. Demyelinating neuropathies show slowed conduction velocities. Small fiber neuropathy may have normal NCS and requires skin biopsy.',
        level5: 'Diabetic neuropathy involves metabolic (polyol, PKC, AGE), vascular (microangiopathy, ischemia), and inflammatory mechanisms. Dying-back axonopathy affects longest fibers first. Small fibers (pain, autonomic) may be affected before large fibers (vibration, proprioception).',
      },
      relatedConditions: ['type-2-diabetes', 'vitamin-deficiency'],
      epidemiology: { prevalence: '3% of general population; >50% of diabetics', demographics: 'Increases with age and diabetes duration' },
      emergencyWarnings: ['Sudden onset with weakness (may be Guillain-Barré)', 'Progressive weakness ascending rapidly', 'Autonomic symptoms (blood pressure changes, urinary retention)'],
    },
  ],

  // ============================================
  // METABOLIC CONDITIONS (continued)
  // ============================================

  // Metabolic Syndrome
  [
    'metabolic-syndrome',
    {
      conditionId: 'metabolic-syndrome',
      name: 'Metabolic Syndrome',
      aliases: ['Syndrome X', 'Insulin Resistance Syndrome', 'Dysmetabolic Syndrome'],
      icdCode: 'E88.81',
      category: 'metabolic',
      subcategory: 'Metabolic',
      description: 'Cluster of metabolic abnormalities including central obesity, insulin resistance, dyslipidemia, and hypertension that dramatically increases cardiovascular disease risk',
      pathophysiology: {
        summary: 'Interconnected metabolic derangements driven by insulin resistance and central adiposity, creating a pro-inflammatory and pro-thrombotic state',
        mechanisms: [
          {
            name: 'Insulin Resistance',
            description: 'Reduced cellular response to insulin leads to compensatory hyperinsulinemia',
            systemsInvolved: ['Endocrine', 'Metabolic', 'Cardiovascular'],
            keyMediators: ['Insulin', 'Free Fatty Acids', 'Adipokines'],
            contribution: 'Central driver linking obesity to metabolic abnormalities',
          },
          {
            name: 'Visceral Adiposity',
            description: 'Excess abdominal fat releases inflammatory cytokines and free fatty acids',
            systemsInvolved: ['Metabolic', 'Cardiovascular'],
            keyMediators: ['TNF-α', 'IL-6', 'Leptin', 'Adiponectin (decreased)'],
            contribution: 'Creates chronic low-grade inflammation and metabolic dysfunction',
          },
          {
            name: 'Dyslipidemia Pattern',
            description: 'Elevated triglycerides, low HDL, and small dense LDL particles',
            systemsInvolved: ['Cardiovascular', 'Metabolic'],
            keyMediators: ['VLDL', 'Apolipoprotein B'],
            contribution: 'Highly atherogenic lipid profile accelerates cardiovascular disease',
          },
        ],
        riskFactors: [
          { name: 'Central Obesity', type: 'modifiable', impact: 'major', description: 'Waist circumference >40 inches (men) or >35 inches (women)', intervention: 'Weight loss, especially visceral fat reduction' },
          { name: 'Sedentary Lifestyle', type: 'modifiable', impact: 'major', description: 'Physical inactivity worsens insulin resistance', intervention: '150+ minutes moderate exercise weekly' },
          { name: 'Genetics', type: 'non-modifiable', impact: 'moderate', description: 'Family history of diabetes and cardiovascular disease' },
          { name: 'Diet', type: 'modifiable', impact: 'major', description: 'High refined carbohydrate and saturated fat intake', intervention: 'Mediterranean or DASH diet' },
        ],
      },
      clinicalPresentation: {
        primarySymptoms: [
          { name: 'Central Obesity', prevalence: 'very-common', description: 'Increased waist circumference, "apple-shaped" body', location: 'Abdomen' },
          { name: 'Often Asymptomatic', prevalence: 'very-common', description: 'Many components are silent until complications occur' },
        ],
        associatedSymptoms: [
          { name: 'Fatigue', prevalence: 'common', description: 'May relate to blood sugar fluctuations' },
          { name: 'Acanthosis Nigricans', prevalence: 'common', description: 'Dark, velvety skin patches in body folds indicating insulin resistance' },
        ],
        labFindings: [
          { testName: 'Fasting Glucose', abnormality: '≥100 mg/dL (impaired)', normalRange: '<100 mg/dL', significance: 'Indicates insulin resistance/prediabetes' },
          { testName: 'Triglycerides', abnormality: '≥150 mg/dL', normalRange: '<150 mg/dL', significance: 'Part of atherogenic dyslipidemia' },
          { testName: 'HDL Cholesterol', abnormality: '<40 mg/dL (men) or <50 mg/dL (women)', significance: 'Low protective cholesterol' },
          { testName: 'Blood Pressure', abnormality: '≥130/85 mmHg', significance: 'Contributes to cardiovascular risk' },
        ],
      },
      progression: {
        naturalHistory: 'Without intervention, metabolic syndrome typically progresses to type 2 diabetes and accelerated atherosclerotic cardiovascular disease',
        timelineSteps: [
          { phaseId: 'early-metsyn', phase: 'early', displayName: 'Early Metabolic Dysfunction', timeframe: '1-2 criteria met', description: 'Developing insulin resistance with some metabolic abnormalities', symptoms: ['Weight gain', 'Mild fatigue'], anatomicalChanges: [{ structureId: 'adipose-tissue', structureName: 'Visceral Fat', changeType: 'hypertrophy', description: 'Increasing visceral adiposity', severity: 'mild', visualIndicator: { color: '#f97316', pulse: false, opacity: 0.4 }, isNewAtPhase: true }], reversibility: 'reversible', typicalTreatments: ['Lifestyle modification'], goalsOfCare: ['Prevent progression to full syndrome'] },
          { phaseId: 'established-metsyn', phase: 'established', displayName: 'Metabolic Syndrome', timeframe: '3+ criteria met', description: 'Full metabolic syndrome with significantly elevated cardiovascular risk', symptoms: ['Central obesity', 'Possibly asymptomatic'], anatomicalChanges: [{ structureId: 'adipose-tissue', structureName: 'Visceral Fat', changeType: 'hypertrophy', description: 'Significant visceral adiposity', severity: 'moderate', visualIndicator: { color: '#ef4444', pulse: false, opacity: 0.5 }, isNewAtPhase: false }, { structureId: 'arteries', structureName: 'Arteries', changeType: 'dysfunction', description: 'Endothelial dysfunction developing', severity: 'mild', visualIndicator: { color: '#f97316', pulse: false, opacity: 0.4 }, isNewAtPhase: true }], reversibility: 'reversible', typicalTreatments: ['Intensive lifestyle', 'Consider pharmacotherapy for components'] },
          { phaseId: 'complications', phase: 'advanced', displayName: 'Complications Developing', timeframe: 'Years without intervention', description: 'Progression to diabetes and/or cardiovascular disease', symptoms: ['Diabetes symptoms', 'Cardiovascular symptoms'], anatomicalChanges: [{ structureId: 'pancreas', structureName: 'Pancreas', changeType: 'dysfunction', description: 'Beta cell exhaustion', severity: 'moderate', visualIndicator: { color: '#ef4444', pulse: false, opacity: 0.5 }, isNewAtPhase: true }, { structureId: 'arteries', structureName: 'Arteries', changeType: 'structural-damage', description: 'Atherosclerotic plaque formation', severity: 'moderate', visualIndicator: { color: '#dc2626', pulse: false, opacity: 0.6 }, isNewAtPhase: false }], reversibility: 'partially-reversible', typicalTreatments: ['Treat diabetes', 'Cardiovascular risk reduction'] },
        ],
        prognosis: 'With aggressive lifestyle intervention, metabolic syndrome can often be reversed. Without treatment, 5-10 year risk of developing diabetes is ~30% and cardiovascular disease risk is doubled.',
      },
      complications: [
        { complicationId: 'metsyn-diabetes', name: 'Type 2 Diabetes', category: 'chronic', severity: 'major', riskLevel: 'high', description: 'Progression to frank diabetes', mechanism: 'Beta cell exhaustion from chronic insulin resistance', affectedStructures: [{ structureId: 'pancreas', structureName: 'Pancreas', effect: 'Beta cell failure', highlightColor: '#dc2626' }], warningSymptoms: ['Increasing fasting glucose', 'Polyuria', 'Polydipsia'], prevention: ['Weight loss', 'Exercise', 'Metformin in high-risk'], preventable: true },
        { complicationId: 'metsyn-cvd', name: 'Cardiovascular Disease', category: 'chronic', severity: 'major', riskLevel: 'high', description: 'Accelerated atherosclerosis', mechanism: 'Atherogenic dyslipidemia, inflammation, and endothelial dysfunction', affectedStructures: [{ structureId: 'coronary-arteries', structureName: 'Coronary Arteries', effect: 'Atherosclerosis', highlightColor: '#dc2626' }], warningSymptoms: ['Chest pain', 'Dyspnea'], prevention: ['Lipid management', 'Blood pressure control', 'Lifestyle changes'], preventable: true },
      ],
      treatmentOptions: [
        { treatmentId: 'metsyn-lifestyle', name: 'Intensive Lifestyle Modification', modality: 'lifestyle', description: 'Weight loss, exercise, and dietary changes targeting all metabolic abnormalities', efficacy: 'highly-effective', evidenceLevel: 'level-1a', isFirstLine: true, appropriatePhases: ['early', 'established'], goals: ['7-10% weight loss', 'Reverse metabolic abnormalities', 'Prevent diabetes and CVD'], expectedOutcomes: ['Improved insulin sensitivity', 'Better lipid profile', 'Lower blood pressure'], timeToEffect: 'Weeks to months', explanations: { level1: 'Losing weight and exercising regularly can reverse metabolic syndrome.', level2: 'Lifestyle changes are the most effective treatment. Losing 7-10% of body weight through diet and exercise can dramatically improve all the metabolic abnormalities.', level3: 'Intensive lifestyle intervention (caloric restriction for 7-10% weight loss + 150 min/week moderate exercise) can resolve metabolic syndrome in 30-50% of patients and reduces diabetes incidence by 58%.', level4: 'Lifestyle intervention improves insulin sensitivity both directly (exercise-mediated GLUT4 translocation) and through weight loss (reduced adipokine dysregulation). Visceral fat reduction is particularly impactful.', level5: 'Exercise increases AMP kinase activity, enhancing glucose uptake independent of insulin. Weight loss reduces IL-6, TNF-α, and leptin while increasing adiponectin, reversing the pro-inflammatory state. Improved endothelial function follows decreased oxidative stress.' } },
        { treatmentId: 'metsyn-metformin', name: 'Metformin', modality: 'pharmacological', description: 'Insulin sensitizer for prediabetes/diabetes prevention', efficacy: 'effective', evidenceLevel: 'level-1b', isFirstLine: false, appropriatePhases: ['established', 'advanced'], goals: ['Improve insulin sensitivity', 'Prevent diabetes'], medicationIds: ['metformin'], explanations: { level1: 'A medication that helps your body use insulin better and can prevent diabetes.', level2: 'Metformin is a medication that helps your body respond better to insulin. It is often used to prevent or delay type 2 diabetes in people with metabolic syndrome.', level3: 'Metformin reduces diabetes incidence by ~30% in high-risk individuals. Also provides modest weight loss and may have cardiovascular benefits independent of glucose lowering.', level4: 'Metformin activates AMPK, suppresses hepatic glucose output, improves peripheral insulin sensitivity. Consider in metabolic syndrome patients with prediabetes, especially if lifestyle alone insufficient.', level5: 'Metformin inhibits mitochondrial complex I, increasing AMP:ATP ratio and activating AMPK. This suppresses gluconeogenesis, enhances fatty acid oxidation, and improves insulin signaling. May also act through gut microbiome alterations.' } },
      ],
      anatomyMapping: {
        primaryStructures: [
          { structureId: 'adipose-tissue', structureName: 'Visceral Adipose Tissue', role: 'primary-site', involvement: 'Central driver of metabolic dysfunction', highlightColor: '#ef4444', showByDefault: true },
          { structureId: 'liver', structureName: 'Liver', role: 'target-organ', involvement: 'Insulin resistance, fatty liver', highlightColor: '#f97316', showByDefault: true },
        ],
        secondaryStructures: [
          { structureId: 'pancreas', structureName: 'Pancreas', role: 'target-organ', involvement: 'Compensatory hyperinsulinemia', highlightColor: '#eab308', showByDefault: false },
          { structureId: 'arteries', structureName: 'Arteries', role: 'target-organ', involvement: 'Endothelial dysfunction', highlightColor: '#f97316', showByDefault: false },
        ],
        systemsInvolved: ['Endocrine', 'Cardiovascular', 'Metabolic'],
        recommendedView: 'anterior',
        recommendedLayers: ['organs', 'cardiovascular'],
        focusRegion: 'abdomen',
      },
      explanations: {
        level1: 'Metabolic syndrome means having a combination of health problems - extra belly fat, high blood sugar, high blood pressure, and abnormal cholesterol - that together put you at much higher risk for heart disease and diabetes.',
        level2: 'Metabolic syndrome is when you have at least three of these problems together: large waist size, high triglycerides, low good cholesterol, high blood pressure, or high fasting blood sugar. Having these together is worse than having them separately because they multiply your risk.',
        level3: 'Metabolic syndrome is diagnosed by having ≥3 of 5 criteria: waist >40"(M)/35"(F), TG ≥150, HDL <40(M)/<50(F), BP ≥130/85, fasting glucose ≥100. It confers 2x CVD risk and 5x diabetes risk. First-line treatment is lifestyle modification.',
        level4: 'Metabolic syndrome represents a pro-inflammatory, pro-thrombotic state driven by insulin resistance and visceral adiposity. The atherogenic dyslipidemia (high TG, low HDL, small dense LDL) and hyperglycemia synergistically accelerate atherosclerosis. Pathophysiologically linked by FFA flux, adipokine dysregulation, and hepatic VLDL overproduction.',
        level5: 'Visceral adipocytes release FFA (promoting hepatic insulin resistance and VLDL synthesis), inflammatory cytokines (IL-6, TNF-α reducing insulin receptor signaling), and exhibit reduced adiponectin (losing its anti-inflammatory and insulin-sensitizing effects). This creates systemic insulin resistance, atherogenic dyslipidemia, and a hypercoagulable state (elevated PAI-1, fibrinogen). The liver becomes a nexus of pathology: insulin resistance leads to both impaired glucose suppression and increased VLDL output.',
      },
      relatedConditions: ['type-2-diabetes', 'hypertension', 'hyperlipidemia', 'coronary-artery-disease'],
      comorbidities: ['Non-alcoholic fatty liver disease', 'Polycystic ovary syndrome', 'Sleep apnea'],
      epidemiology: { prevalence: '~35% of US adults', demographics: 'Increases with age; varies by ethnicity' },
      clinicalPearls: ['Waist circumference is often the most clinically useful screening measure', 'Lifestyle intervention can resolve metabolic syndrome in up to 50% of patients', 'Consider early metformin if lifestyle changes insufficient'],
      emergencyWarnings: ['Chest pain (possible MI)', 'Sudden neurological symptoms (possible stroke)', 'Severely elevated blood pressure'],
    },
  ],

  // ============================================
  // NEUROLOGIC CONDITIONS (continued)
  // ============================================

  // Stroke (Ischemic)
  [
    'stroke',
    {
      conditionId: 'stroke',
      name: 'Ischemic Stroke',
      aliases: ['Stroke', 'CVA', 'Cerebrovascular Accident', 'Brain Attack'],
      icdCode: 'I63.9',
      category: 'neurologic',
      subcategory: 'Cerebrovascular',
      description: 'Acute interruption of blood flow to the brain causing neurological deficits; a medical emergency requiring immediate intervention',
      pathophysiology: {
        summary: 'Occlusion of a cerebral artery (by thrombus or embolus) deprives brain tissue of oxygen and glucose, leading to ischemia and infarction within minutes to hours',
        mechanisms: [
          {
            name: 'Large Vessel Atherothrombosis',
            description: 'Atherosclerotic plaque in large arteries (carotid, MCA) ruptures causing thrombosis',
            systemsInvolved: ['Cardiovascular', 'Nervous'],
            keyMediators: ['Platelets', 'Thrombin', 'Fibrin'],
            contribution: 'Accounts for ~20-25% of ischemic strokes',
          },
          {
            name: 'Cardioembolism',
            description: 'Blood clot forms in heart (atrial fibrillation, valve disease) and travels to brain',
            systemsInvolved: ['Cardiovascular', 'Nervous'],
            keyMediators: ['Thrombus', 'Emboli'],
            contribution: 'Accounts for ~20-30% of ischemic strokes; often larger, more disabling',
          },
          {
            name: 'Small Vessel Disease (Lacunar)',
            description: 'Lipohyalinosis of small penetrating arteries from hypertension',
            systemsInvolved: ['Cardiovascular', 'Nervous'],
            keyMediators: ['Fibrinoid necrosis'],
            contribution: 'Accounts for ~25% of strokes; smaller, deeper infarcts',
          },
          {
            name: 'Ischemic Cascade',
            description: 'Glutamate excitotoxicity, calcium influx, and free radicals cause neuronal death',
            systemsInvolved: ['Nervous'],
            keyMediators: ['Glutamate', 'Calcium', 'Reactive Oxygen Species'],
            contribution: 'Core infarct expands into penumbra without reperfusion',
          },
        ],
        riskFactors: [
          { name: 'Hypertension', type: 'modifiable', impact: 'major', description: 'Most important modifiable risk factor', intervention: 'Blood pressure control (<130/80)' },
          { name: 'Atrial Fibrillation', type: 'modifiable', impact: 'major', description: '5x increased stroke risk without anticoagulation', intervention: 'Anticoagulation (DOACs, warfarin)' },
          { name: 'Diabetes', type: 'partially-modifiable', impact: 'moderate', description: '2-4x increased risk', intervention: 'Glycemic control' },
          { name: 'Hyperlipidemia', type: 'modifiable', impact: 'moderate', description: 'Atherosclerosis acceleration', intervention: 'Statin therapy' },
          { name: 'Smoking', type: 'modifiable', impact: 'moderate', description: 'Doubles stroke risk', intervention: 'Smoking cessation' },
          { name: 'Prior Stroke/TIA', type: 'non-modifiable', impact: 'major', description: '10-15% annual recurrence without treatment' },
        ],
        geneticFactors: ['CADASIL (rare hereditary)', 'Sickle cell disease', 'Family history increases risk 2x'],
      },
      clinicalPresentation: {
        primarySymptoms: [
          { name: 'Sudden Weakness', prevalence: 'very-common', description: 'Unilateral weakness of face, arm, and/or leg', location: 'Contralateral to lesion', timing: 'Sudden onset' },
          { name: 'Speech Difficulty', prevalence: 'very-common', description: 'Aphasia (dominant hemisphere) or dysarthria', timing: 'Sudden onset' },
          { name: 'Facial Droop', prevalence: 'very-common', description: 'Asymmetric facial weakness', location: 'Contralateral lower face', timing: 'Sudden onset' },
        ],
        associatedSymptoms: [
          { name: 'Vision Changes', prevalence: 'common', description: 'Homonymous hemianopia or monocular vision loss' },
          { name: 'Sensory Loss', prevalence: 'common', description: 'Numbness on affected side' },
          { name: 'Ataxia', prevalence: 'uncommon', description: 'Coordination problems (posterior circulation)' },
          { name: 'Severe Headache', prevalence: 'uncommon', description: 'More common in hemorrhagic stroke, but can occur' },
        ],
        physicalFindings: [
          { name: 'NIHSS Score', examType: 'Neurological', description: 'Standardized stroke severity scale (0-42)', diagnosticValue: 'Guides treatment decisions and prognosis' },
          { name: 'Pronator Drift', examType: 'Motor', description: 'Weak arm drifts down and pronates', diagnosticValue: 'Sensitive for mild hemiparesis' },
        ],
        imagingFindings: [
          { modality: 'CT Head', finding: 'Initially normal, then hypodensity evolves over 6-24 hours', significance: 'Rules out hemorrhage; early ischemic changes may be subtle', structures: ['Brain parenchyma'] },
          { modality: 'MRI DWI', finding: 'Restricted diffusion (bright) within minutes', significance: 'Most sensitive for acute ischemia', structures: ['Brain parenchyma'] },
          { modality: 'CT/MR Angiography', finding: 'Vessel occlusion or stenosis', significance: 'Identifies target for thrombectomy', structures: ['Cerebral arteries'] },
        ],
      },
      progression: {
        naturalHistory: 'Without treatment, stroke progresses over hours as ischemic penumbra is recruited into infarct core. Recovery depends on infarct location and size.',
        typicalOnsetToDiagnosis: 'Minutes to hours (time-critical emergency)',
        timelineSteps: [
          { phaseId: 'hyperacute', phase: 'acute', displayName: 'Hyperacute Phase', timeframe: '0-6 hours', description: 'Critical window for reperfusion therapy', symptoms: ['Sudden neurological deficit', 'BE FAST symptoms'], anatomicalChanges: [{ structureId: 'cerebral-artery', structureName: 'Cerebral Artery', changeType: 'stenosis', description: 'Arterial occlusion', severity: 'severe', visualIndicator: { color: '#dc2626', pulse: true, opacity: 0.8 }, isNewAtPhase: true }, { structureId: 'brain', structureName: 'Brain', changeType: 'ischemia', description: 'Ischemic penumbra surrounding core', severity: 'moderate', visualIndicator: { color: '#ef4444', pulse: true, opacity: 0.6 }, isNewAtPhase: true }], reversibility: 'reversible', typicalTreatments: ['IV tPA if <4.5 hours', 'Mechanical thrombectomy if LVO'], goalsOfCare: ['REPERFUSION - Time is brain'] },
          { phaseId: 'acute', phase: 'acute', displayName: 'Acute Phase', timeframe: '6-72 hours', description: 'Infarct evolution, monitoring for complications', symptoms: ['Stable or evolving deficit', 'Risk of brain swelling'], anatomicalChanges: [{ structureId: 'brain', structureName: 'Brain', changeType: 'necrosis', description: 'Infarct core established', severity: 'severe', visualIndicator: { color: '#dc2626', pulse: false, opacity: 0.7 }, isNewAtPhase: false }, { structureId: 'brain', structureName: 'Brain', changeType: 'edema', description: 'Cytotoxic edema develops', severity: 'moderate', visualIndicator: { color: '#06b6d4', pulse: false, opacity: 0.5 }, isNewAtPhase: true }], reversibility: 'irreversible', typicalTreatments: ['Secondary prevention initiated', 'Swallowing evaluation', 'Monitor for hemorrhagic transformation'] },
          { phaseId: 'subacute', phase: 'subacute', displayName: 'Subacute Phase', timeframe: '3 days - 3 months', description: 'Recovery and rehabilitation period', symptoms: ['Some recovery begins', 'Residual deficits become clearer'], anatomicalChanges: [{ structureId: 'brain', structureName: 'Brain', changeType: 'atrophy', description: 'Gliosis replacing infarcted tissue', severity: 'moderate', visualIndicator: { color: '#71717a', pulse: false, opacity: 0.5 }, isNewAtPhase: true }], reversibility: 'partially-reversible', typicalTreatments: ['Intensive rehabilitation', 'Secondary prevention medications'] },
          { phaseId: 'chronic', phase: 'chronic', displayName: 'Chronic Phase', timeframe: '>3 months', description: 'Long-term adaptation and secondary prevention', symptoms: ['Stable residual deficit', 'Ongoing secondary prevention'], anatomicalChanges: [{ structureId: 'brain', structureName: 'Brain', changeType: 'atrophy', description: 'Encephalomalacia (permanent tissue loss)', severity: 'moderate', visualIndicator: { color: '#78716c', pulse: false, opacity: 0.5 }, isNewAtPhase: false }], reversibility: 'irreversible', typicalTreatments: ['Lifelong secondary prevention', 'Adaptive strategies'] },
        ],
        prognosis: 'Variable based on stroke size, location, and time to treatment. ~30% full recovery, ~30% minor disability, ~30% major disability, ~10% mortality at 30 days.',
        outcomes: '50% of patients regain functional independence; early reperfusion dramatically improves outcomes',
      },
      complications: [
        { complicationId: 'hemorrhagic-transformation', name: 'Hemorrhagic Transformation', category: 'acute', severity: 'major', riskLevel: 'moderate', description: 'Bleeding into infarcted tissue', mechanism: 'Reperfusion injury and damaged blood-brain barrier', affectedStructures: [{ structureId: 'brain', structureName: 'Brain', effect: 'Hemorrhage into infarct', highlightColor: '#7f1d1d' }], warningSymptoms: ['Sudden neurological worsening', 'Decreasing consciousness'], treatment: 'Supportive; reverse anticoagulation if applicable', timing: '24-48 hours post-stroke', preventable: false },
        { complicationId: 'cerebral-edema', name: 'Malignant Cerebral Edema', category: 'acute', severity: 'life-threatening', riskLevel: 'moderate', description: 'Life-threatening brain swelling with large MCA strokes', mechanism: 'Cytotoxic edema in large infarcts', affectedStructures: [{ structureId: 'brain', structureName: 'Brain', effect: 'Mass effect and herniation risk', highlightColor: '#dc2626' }], warningSymptoms: ['Declining consciousness', 'New pupil asymmetry'], treatment: 'Decompressive craniectomy in select patients', timing: '2-5 days post-stroke', preventable: false },
        { complicationId: 'stroke-recurrence', name: 'Recurrent Stroke', category: 'chronic', severity: 'major', riskLevel: 'high', description: 'Another stroke without adequate secondary prevention', mechanism: 'Ongoing vascular risk factors', affectedStructures: [{ structureId: 'brain', structureName: 'Brain', effect: 'New infarct', highlightColor: '#dc2626' }], warningSymptoms: ['New sudden neurological symptoms'], prevention: ['Antiplatelet/anticoagulation', 'Statin', 'BP control', 'Lifestyle changes'], preventable: true },
      ],
      treatmentOptions: [
        { treatmentId: 'tpa', name: 'IV Thrombolysis (tPA/Alteplase)', modality: 'interventional', description: 'Clot-dissolving medication given intravenously within 4.5 hours', mechanism: 'Activates plasminogen to lyse fibrin clot', efficacy: 'highly-effective', evidenceLevel: 'level-1a', isFirstLine: true, appropriatePhases: ['acute'], goals: ['Restore blood flow', 'Reduce disability'], expectedOutcomes: ['NNT ~7 for improved outcome'], timeToEffect: 'Minutes', contraindications: ['Recent surgery', 'Active bleeding', 'INR >1.7', 'Severe hypertension'], sideEffects: ['Bleeding (6% symptomatic ICH)', 'Angioedema'], explanations: { level1: 'A clot-busting medication given through an IV that can dissolve the blood clot causing your stroke. Must be given within a few hours.', level2: 'tPA is a powerful clot-dissolving medicine. When given quickly after stroke starts (within 4.5 hours), it can dissolve the clot and restore blood flow to save brain tissue. The main risk is bleeding.', level3: 'IV alteplase (0.9 mg/kg, max 90 mg) given within 4.5 hours of symptom onset. Strict inclusion/exclusion criteria. NNT ~7 for improved 3-month outcome. 6% risk of symptomatic intracranial hemorrhage.', level4: 'tPA converts plasminogen to plasmin, degrading fibrin. Door-to-needle time target <60 minutes. NIHSS improvement in first 24 hours predicts good outcome. Screen carefully for contraindications using standardized checklist.', level5: 'Alteplase is a recombinant tissue plasminogen activator with fibrin-specific binding. Therapeutic window based on NINDS, ECASS-III trials. Extended 4.5-hour window with additional exclusions (age >80, severe stroke, diabetes + prior stroke, anticoagulant use). Consider tenecteplase as single-bolus alternative.' } },
        { treatmentId: 'thrombectomy', name: 'Mechanical Thrombectomy', modality: 'surgical', description: 'Catheter-based clot removal for large vessel occlusions', mechanism: 'Mechanical retrieval of clot using stent retriever or aspiration', efficacy: 'highly-effective', evidenceLevel: 'level-1a', isFirstLine: true, appropriatePhases: ['acute'], goals: ['Remove large clot', 'Restore perfusion'], expectedOutcomes: ['NNT ~3-4 for reduced disability'], timeToEffect: 'Minutes after recanalization', contraindications: ['Small vessel occlusion', 'Large established infarct core', 'Poor baseline function'], explanations: { level1: 'A procedure where doctors thread a thin tube into your brain arteries to physically remove the blood clot.', level2: 'For strokes caused by a clot in a large brain artery, doctors can go in with a catheter and grab the clot to pull it out. This can dramatically improve outcomes, even up to 24 hours in selected patients.', level3: 'Mechanical thrombectomy for LVO (ICA, M1, +/- M2) up to 24 hours in select patients. Based on DAWN/DEFUSE-3 criteria (favorable imaging). NNT ~3-4. Can be done in addition to IV tPA.', level4: 'Endovascular therapy via femoral access. Stent retrievers (Solitaire, Trevo) or aspiration (ADAPT). TICI 2b/3 reperfusion goal. Extended window patients selected by CT perfusion mismatch or DWI-FLAIR mismatch.', level5: 'Seven landmark RCTs (MR CLEAN, ESCAPE, EXTEND-IA, SWIFT-PRIME, REVASCAT, DAWN, DEFUSE-3) established efficacy. Key is patient selection: proximal LVO, small core (ASPECTS ≥6 or core <70mL), and salvageable penumbra. Collateral circulation status influences outcomes.' } },
        { treatmentId: 'secondary-prevention', name: 'Secondary Prevention', modality: 'preventive', description: 'Medications and lifestyle changes to prevent recurrent stroke', efficacy: 'highly-effective', evidenceLevel: 'level-1a', isFirstLine: true, appropriatePhases: ['subacute', 'chronic'], goals: ['Prevent recurrent stroke', 'Reduce cardiovascular events'], medicationIds: ['aspirin', 'clopidogrel', 'atorvastatin'], explanations: { level1: 'Medications and healthy changes to prevent another stroke.', level2: 'After a stroke, taking medications like aspirin and a statin, controlling blood pressure, and making healthy lifestyle changes are essential to prevent it from happening again.', level3: 'Antiplatelet (aspirin +/- clopidogrel for 21-90 days, then monotherapy) or anticoagulation if AFib. High-intensity statin. BP goal <130/80. Address all modifiable risk factors.', level4: 'DAPT (aspirin + clopidogrel) for 21-90 days after minor stroke/TIA per POINT/CHANCE trials. Long-term monotherapy thereafter. Anticoagulation for AFib (CHA2DS2-VASc guided). Target LDL <70 with high-intensity statin.', level5: 'Risk factor management is synergistic. SPARCL trial showed high-dose atorvastatin 80mg reduces recurrent stroke 16%. PROGRESS trial demonstrated BP lowering effective regardless of baseline. Carotid revascularization (CEA/CAS) if symptomatic 50-99% stenosis.' } },
      ],
      anatomyMapping: {
        primaryStructures: [
          { structureId: 'brain', structureName: 'Brain', role: 'target-organ', involvement: 'Ischemic infarction', highlightColor: '#dc2626', showByDefault: true },
          { structureId: 'cerebral-arteries', structureName: 'Cerebral Arteries', role: 'primary-site', involvement: 'Occlusion site', highlightColor: '#ef4444', showByDefault: true },
        ],
        secondaryStructures: [
          { structureId: 'heart', structureName: 'Heart', role: 'secondary-site', involvement: 'Cardioembolic source in AFib', highlightColor: '#f97316', showByDefault: false },
          { structureId: 'carotid-arteries', structureName: 'Carotid Arteries', role: 'secondary-site', involvement: 'Atherosclerotic source', highlightColor: '#f97316', showByDefault: false },
        ],
        systemsInvolved: ['Nervous', 'Cardiovascular'],
        recommendedView: 'lateral-left',
        recommendedLayers: ['nervous', 'cardiovascular'],
        focusRegion: 'head',
      },
      explanations: {
        level1: 'A stroke happens when blood flow to part of your brain is blocked, causing brain cells to die. It is an emergency - getting treatment fast can save your life and prevent disability.',
        level2: 'An ischemic stroke occurs when a blood clot blocks an artery supplying the brain. The blocked area of brain starts to die within minutes. Acting FAST (Face drooping, Arm weakness, Speech difficulty, Time to call 911) and getting to a hospital quickly can allow doctors to dissolve or remove the clot and save brain tissue.',
        level3: 'Ischemic stroke results from arterial occlusion (thrombotic, embolic, or lacunar). The ischemic penumbra is salvageable tissue surrounding the infarct core. Treatment is IV tPA within 4.5 hours and/or mechanical thrombectomy for large vessel occlusion up to 24 hours. Secondary prevention is critical.',
        level4: 'Stroke subtypes (TOAST classification): large artery atherosclerosis, cardioembolism, small vessel disease, other/undetermined. Workup includes brain imaging (CT/MRI), vascular imaging (CTA/MRA), cardiac evaluation (echo, telemetry). Treatment decisions based on NIHSS, imaging (ASPECTS, perfusion), time from last known well.',
        level5: 'The ischemic cascade involves glutamate-mediated excitotoxicity, calcium overload, mitochondrial dysfunction, and free radical generation expanding the infarct into the penumbra. Collateral circulation (assessed by multiphase CTA or perfusion imaging) determines penumbral viability. Modern endovascular therapy achieves TICI 2b/3 recanalization in >80% of cases. Tissue-based selection (DAWN, DEFUSE-3) extends window to 24 hours using perfusion mismatch or DWI-FLAIR mismatch.',
      },
      relatedConditions: ['hypertension', 'atrial-fibrillation', 'hyperlipidemia', 'type-2-diabetes', 'coronary-artery-disease'],
      comorbidities: ['Atrial fibrillation', 'Carotid stenosis', 'Heart failure'],
      epidemiology: { prevalence: '~7 million stroke survivors in US', incidence: '~795,000 strokes per year in US', demographics: 'Risk doubles each decade after 55; higher in Black and Hispanic populations' },
      clinicalPearls: ['Time is brain - every minute of ischemia kills ~1.9 million neurons', 'BE FAST: Balance, Eyes, Face, Arms, Speech, Time', 'Thrombectomy NNT of ~3 is one of the most powerful interventions in medicine', 'Dont forget to screen for AFib - it changes management'],
      patientEducation: ['Know the signs: sudden weakness, trouble speaking, vision changes, severe headache', 'Call 911 immediately - do not drive yourself', 'Note the time symptoms started - this affects treatment options', 'Take prevention medications as prescribed - they save lives'],
      emergencyWarnings: ['Any sudden neurological symptoms - call 911 immediately', 'This is a true medical emergency', 'Do not wait to see if symptoms improve'],
    },
  ],
]);

// ============================================
// Store Access Functions
// ============================================

/**
 * Get a condition by ID
 */
export function getCondition(conditionId: string): ConditionSimulation | undefined {
  return conditionDatabase.get(conditionId.toLowerCase());
}

/**
 * Get all conditions
 */
export function getAllConditions(): ConditionSimulation[] {
  return Array.from(conditionDatabase.values());
}

/**
 * Get condition summaries for list display
 */
export function getConditionSummaries(): ConditionSummary[] {
  return Array.from(conditionDatabase.values()).map((condition) => ({
    conditionId: condition.conditionId,
    name: condition.name,
    category: condition.category,
    icdCode: condition.icdCode,
    description: condition.description,
    primarySymptoms: condition.clinicalPresentation.primarySymptoms
      .slice(0, 3)
      .map((s) => s.name),
    numberOfPhases: condition.progression.timelineSteps.length,
    numberOfTreatments: condition.treatmentOptions.length,
  }));
}

/**
 * Get conditions by category
 */
export function getConditionsByCategory(
  category: ConditionCategory
): ConditionSimulation[] {
  return Array.from(conditionDatabase.values()).filter(
    (c) => c.category === category
  );
}

/**
 * Search conditions by query
 */
export function searchConditions(query: string): ConditionSearchResult[] {
  const normalizedQuery = query.toLowerCase().trim();
  const results: ConditionSearchResult[] = [];

  for (const condition of conditionDatabase.values()) {
    let matchType: ConditionSearchResult['matchType'] | null = null;
    let relevanceScore = 0;

    // Check exact name match
    if (condition.name.toLowerCase() === normalizedQuery) {
      matchType = 'exact';
      relevanceScore = 100;
    }
    // Check alias match
    else if (
      condition.aliases?.some((a) => a.toLowerCase() === normalizedQuery)
    ) {
      matchType = 'alias';
      relevanceScore = 90;
    }
    // Check name contains
    else if (condition.name.toLowerCase().includes(normalizedQuery)) {
      matchType = 'partial';
      relevanceScore = 70;
    }
    // Check alias contains
    else if (
      condition.aliases?.some((a) => a.toLowerCase().includes(normalizedQuery))
    ) {
      matchType = 'partial';
      relevanceScore = 60;
    }
    // Check category
    else if (condition.category.toLowerCase().includes(normalizedQuery)) {
      matchType = 'category';
      relevanceScore = 40;
    }
    // Check symptoms
    else if (
      condition.clinicalPresentation.primarySymptoms.some((s) =>
        s.name.toLowerCase().includes(normalizedQuery)
      )
    ) {
      matchType = 'symptom';
      relevanceScore = 30;
    }

    if (matchType) {
      results.push({
        conditionId: condition.conditionId,
        name: condition.name,
        aliases: condition.aliases,
        category: condition.category,
        matchType,
        relevanceScore,
      });
    }
  }

  return results.sort((a, b) => b.relevanceScore - a.relevanceScore);
}

/**
 * Get anatomy highlights for a condition at a specific phase
 */
export function getConditionAnatomyHighlights(
  conditionId: string,
  phaseId?: string
): Array<{
  structureId: string;
  color: string;
  pulse: boolean;
  opacity: number;
  label: string;
}> {
  const condition = getCondition(conditionId);
  if (!condition) return [];

  const highlights: Array<{
    structureId: string;
    color: string;
    pulse: boolean;
    opacity: number;
    label: string;
  }> = [];

  // If a specific phase is requested, get changes for that phase
  if (phaseId) {
    const phase = condition.progression.timelineSteps.find(
      (s) => s.phaseId === phaseId
    );
    if (phase) {
      for (const change of phase.anatomicalChanges) {
        highlights.push({
          structureId: change.structureId,
          color: change.visualIndicator.color,
          pulse: change.visualIndicator.pulse,
          opacity: change.visualIndicator.opacity,
          label: change.description,
        });
      }
    }
  } else {
    // Otherwise, return highlights from anatomy mapping
    for (const structure of condition.anatomyMapping.primaryStructures) {
      if (structure.showByDefault) {
        highlights.push({
          structureId: structure.structureId,
          color: structure.highlightColor,
          pulse: true,
          opacity: 0.7,
          label: structure.involvement,
        });
      }
    }
    for (const structure of condition.anatomyMapping.secondaryStructures || []) {
      if (structure.showByDefault) {
        highlights.push({
          structureId: structure.structureId,
          color: structure.highlightColor,
          pulse: false,
          opacity: 0.5,
          label: structure.involvement,
        });
      }
    }
  }

  return highlights;
}
