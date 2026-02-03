/**
 * Body Systems Database
 *
 * Comprehensive physiology education at attending physician level.
 * Deep understanding of how the body works.
 */

import type {
  BodySystem,
  BodySystemId,
  PhysiologicalProcess,
} from './types.js';

// ============================================
// Cardiovascular System
// ============================================

export const CARDIOVASCULAR_SYSTEM: BodySystem = {
  id: 'cardiovascular',
  name: 'Cardiovascular System',
  overview: `The cardiovascular system is your body's transport network, delivering oxygen, nutrients, hormones, and immune cells to every tissue while removing waste products. At rest, your heart pumps about 5 liters of blood per minute through 100,000 kilometers of blood vessels. Understanding this system is crucial because cardiovascular disease remains the leading cause of death worldwide.`,

  functions: [
    {
      name: 'Oxygen Delivery',
      description: 'Carries oxygen from lungs to every cell in the body',
      importance: 'vital',
      mechanismSummary: 'Hemoglobin in red blood cells binds oxygen in the lungs (high O2 environment) and releases it in tissues (low O2 environment). This is facilitated by the oxygen-hemoglobin dissociation curve.',
    },
    {
      name: 'Nutrient Transport',
      description: 'Delivers glucose, amino acids, fatty acids, and vitamins to tissues',
      importance: 'vital',
      mechanismSummary: 'Absorbed nutrients enter portal circulation to liver, then systemic circulation. Glucose enters cells via GLUT transporters; amino acids via various transporters; lipids via lipoproteins.',
    },
    {
      name: 'Waste Removal',
      description: 'Carries CO2 to lungs, metabolic waste to kidneys and liver',
      importance: 'vital',
      mechanismSummary: 'CO2 is transported as bicarbonate (70%), bound to hemoglobin (23%), and dissolved (7%). Metabolic waste is filtered by kidneys or processed by liver.',
    },
    {
      name: 'Hormone Distribution',
      description: 'Circulates hormones from endocrine glands to target tissues',
      importance: 'essential',
      mechanismSummary: 'Hormones travel in blood either free (water-soluble) or bound to carrier proteins (steroid/thyroid). Target tissues have specific receptors.',
    },
    {
      name: 'Immune Surveillance',
      description: 'Transports immune cells to sites of infection/injury',
      importance: 'essential',
      mechanismSummary: 'White blood cells circulate in blood, detect inflammatory signals, and migrate through vessel walls (diapedesis) to affected tissues.',
    },
    {
      name: 'Temperature Regulation',
      description: 'Distributes heat and adjusts blood flow for thermoregulation',
      importance: 'essential',
      mechanismSummary: 'Vasodilation of skin vessels dissipates heat; vasoconstriction conserves heat. Blood acts as heat transfer medium from core to periphery.',
    },
  ],

  organs: [
    {
      name: 'Heart',
      description: 'Four-chambered muscular pump that generates pressure to circulate blood',
      functions: [
        'Pumps deoxygenated blood to lungs (right side)',
        'Pumps oxygenated blood to body (left side)',
        'Maintains continuous circulation',
        'Regulates cardiac output based on demand',
      ],
      location: 'Mediastinum, between lungs, slightly left of midline',
      bloodSupply: 'Coronary arteries (left main → LAD, circumflex; right coronary)',
      innervation: 'Sympathetic (increases rate/force), Parasympathetic via vagus (decreases rate)',
      microanatomy: [
        {
          structure: 'Myocardium',
          function: 'Contractile muscle layer',
          cellTypes: ['Cardiomyocytes', 'Fibroblasts', 'Endothelial cells'],
        },
        {
          structure: 'Endocardium',
          function: 'Inner lining, prevents clot formation',
          cellTypes: ['Endothelial cells'],
        },
        {
          structure: 'Pericardium',
          function: 'Protective sac, reduces friction',
          cellTypes: ['Mesothelial cells'],
        },
        {
          structure: 'Cardiac conduction system',
          function: 'Generates and conducts electrical impulses',
          cellTypes: ['Pacemaker cells', 'Purkinje fibers'],
        },
      ],
      clinicalNotes: 'The left ventricle has the thickest wall (~1cm) because it generates the highest pressure. Coronary arteries fill during diastole (relaxation).',
    },
    {
      name: 'Arteries',
      description: 'High-pressure vessels that carry blood away from heart',
      functions: [
        'Conduct blood under high pressure',
        'Maintain blood flow between heartbeats (elastic recoil)',
        'Regulate peripheral resistance',
      ],
      location: 'Throughout body, deep to protect from injury',
      microanatomy: [
        {
          structure: 'Tunica intima',
          function: 'Endothelial barrier, regulates vessel tone',
          cellTypes: ['Endothelial cells'],
        },
        {
          structure: 'Tunica media',
          function: 'Smooth muscle and elastic tissue for constriction/dilation',
          cellTypes: ['Smooth muscle cells'],
        },
        {
          structure: 'Tunica adventitia',
          function: 'Connective tissue support',
          cellTypes: ['Fibroblasts'],
        },
      ],
      clinicalNotes: 'Arterial walls become stiffer with age and atherosclerosis, contributing to hypertension. The aorta can accommodate ~70ml during systole.',
    },
    {
      name: 'Capillaries',
      description: 'Microscopic vessels where exchange occurs',
      functions: [
        'Exchange of gases (O2/CO2)',
        'Nutrient and waste exchange',
        'Fluid filtration and reabsorption',
        'Immune cell migration',
      ],
      location: 'Throughout all tissues (except cornea, cartilage)',
      microanatomy: [
        {
          structure: 'Endothelial cells',
          function: 'Form thin barrier for exchange',
          cellTypes: ['Endothelial cells'],
        },
        {
          structure: 'Basement membrane',
          function: 'Structural support, filtration barrier',
        },
        {
          structure: 'Pericytes',
          function: 'Regulate capillary diameter and permeability',
          cellTypes: ['Pericytes'],
        },
      ],
      clinicalNotes: 'Capillary walls are only one cell thick (~0.5μm) to facilitate exchange. Total capillary surface area is ~600m² - size of a tennis court.',
    },
    {
      name: 'Veins',
      description: 'Low-pressure vessels returning blood to heart',
      functions: [
        'Return blood to heart',
        'Blood reservoir (contain ~65% of blood volume)',
        'Prevent backflow via valves',
      ],
      location: 'Throughout body, often superficial in limbs',
      microanatomy: [
        {
          structure: 'Thinner walls than arteries',
          function: 'Low pressure system',
        },
        {
          structure: 'Venous valves',
          function: 'Prevent backflow, especially in legs',
        },
      ],
      clinicalNotes: 'Veins can dilate significantly to hold extra blood. Leg muscle contraction ("muscle pump") helps return blood against gravity. Valve failure causes varicose veins.',
    },
  ],

  processes: [
    {
      id: 'cardiac-cycle',
      name: 'Cardiac Cycle',
      system: 'cardiovascular',
      category: 'transport',
      overview: 'The cardiac cycle is the sequence of contraction (systole) and relaxation (diastole) that allows the heart to fill with blood and eject it. One complete cycle takes about 0.8 seconds at rest (75 bpm).',
      steps: [
        {
          order: 1,
          name: 'Atrial Diastole (filling)',
          description: 'Blood flows passively from veins into relaxed atria',
          duration: '~0.4 seconds',
          location: 'Right atrium (from vena cava), Left atrium (from pulmonary veins)',
          results: ['Atria fill with blood'],
        },
        {
          order: 2,
          name: 'Atrial Systole',
          description: 'Atria contract, pushing remaining blood into ventricles',
          duration: '~0.1 seconds',
          location: 'Both atria',
          triggers: ['SA node depolarization', 'P wave on ECG'],
          results: ['Ventricles filled to capacity (end-diastolic volume ~120ml)'],
        },
        {
          order: 3,
          name: 'Isovolumetric Contraction',
          description: 'Ventricles begin contracting but all valves are closed',
          duration: '~0.05 seconds',
          location: 'Both ventricles',
          triggers: ['QRS complex on ECG'],
          results: ['Pressure builds rapidly in ventricles'],
        },
        {
          order: 4,
          name: 'Ventricular Ejection',
          description: 'Semilunar valves open, blood ejected into arteries',
          duration: '~0.25 seconds',
          location: 'Right ventricle → Pulmonary artery, Left ventricle → Aorta',
          results: ['~70ml ejected (stroke volume)', 'Ejection fraction ~60%'],
        },
        {
          order: 5,
          name: 'Isovolumetric Relaxation',
          description: 'Ventricles relax but all valves closed',
          duration: '~0.05 seconds',
          location: 'Both ventricles',
          triggers: ['Repolarization', 'T wave on ECG'],
          results: ['Pressure drops rapidly'],
        },
        {
          order: 6,
          name: 'Ventricular Filling',
          description: 'AV valves open, blood flows from atria to ventricles',
          duration: '~0.35 seconds',
          location: 'Both sides of heart',
          results: ['Ventricles fill ~80% passively', 'Remaining 20% from atrial kick'],
        },
      ],
      keyMolecules: [
        {
          name: 'Calcium ions (Ca²⁺)',
          type: 'ion',
          role: 'Triggers muscle contraction by binding to troponin',
          clinicalSignificance: 'Calcium channel blockers reduce contractility',
        },
        {
          name: 'ATP',
          type: 'other',
          role: 'Energy source for contraction and relaxation',
          clinicalSignificance: 'Ischemia depletes ATP, causing contractile dysfunction',
        },
        {
          name: 'Norepinephrine',
          type: 'hormone',
          role: 'Increases heart rate and contractility',
          clinicalSignificance: 'Beta-blockers block this effect',
        },
      ],
      regulation: [
        {
          name: 'Sympathetic Stimulation',
          type: 'neural',
          description: 'Increases heart rate and contractility during stress/exercise',
          mediators: ['Norepinephrine', 'Epinephrine'],
          effect: 'stimulates',
          clinicalApplications: ['Beta-blockers reduce this effect', 'Important in heart failure'],
        },
        {
          name: 'Parasympathetic Stimulation',
          type: 'neural',
          description: 'Decreases heart rate during rest',
          mediators: ['Acetylcholine'],
          effect: 'inhibits',
          clinicalApplications: ['Atropine blocks this', 'Vagal maneuvers'],
        },
        {
          name: 'Frank-Starling Mechanism',
          type: 'intrinsic',
          description: 'Increased filling → increased contraction force',
          mediators: ['Sarcomere stretch'],
          effect: 'modulates',
          clinicalApplications: ['Maintains output balance between ventricles'],
        },
      ],
      dysfunction: [
        {
          name: 'Heart Failure',
          mechanism: 'Reduced contractility or filling impairment',
          consequences: ['Reduced cardiac output', 'Fluid backup', 'Fatigue'],
          clinicalPresentation: 'Dyspnea, edema, fatigue, reduced exercise tolerance',
          associatedConditions: ['Coronary artery disease', 'Hypertension', 'Cardiomyopathy'],
        },
        {
          name: 'Arrhythmias',
          mechanism: 'Abnormal electrical impulse generation or conduction',
          consequences: ['Irregular heartbeat', 'Inefficient pumping', 'Blood clot risk'],
          clinicalPresentation: 'Palpitations, syncope, chest discomfort',
          associatedConditions: ['Atrial fibrillation', 'Ventricular tachycardia'],
        },
      ],
      clinicalRelevance: [
        'ECG reflects electrical activity of cardiac cycle',
        'Heart sounds (S1, S2) correspond to valve closures',
        'Ejection fraction measures pump efficiency',
        'Heart failure occurs when cycle cannot meet body demands',
      ],
      relatedProcesses: ['action-potential', 'blood-pressure-regulation'],
      complexity: 'intermediate',
    },
  ],

  homeostasis: [
    {
      id: 'blood-pressure-regulation',
      name: 'Blood Pressure Regulation',
      type: 'negative-feedback',
      regulatedVariable: 'Mean Arterial Pressure (MAP)',
      normalRange: '70-100',
      unit: 'mmHg',
      sensor: {
        name: 'Baroreceptors',
        location: 'Carotid sinus and aortic arch',
        mechanism: 'Stretch receptors detect arterial wall tension (reflects pressure)',
      },
      controlCenter: {
        name: 'Cardiovascular Center',
        location: 'Medulla oblongata (brainstem)',
        mechanism: 'Integrates baroreceptor input, adjusts sympathetic/parasympathetic output',
      },
      effector: {
        name: 'Heart and Blood Vessels',
        location: 'Throughout body',
        mechanism: 'Heart rate and contractility change; vessels constrict or dilate',
      },
      responseToIncrease: 'Decreased sympathetic tone → slower heart rate, vasodilation → pressure drops',
      responseToDecrease: 'Increased sympathetic tone → faster heart rate, vasoconstriction → pressure rises',
      dysfunctionExamples: [
        'Hypertension: sustained elevated pressure despite normal feedback',
        'Orthostatic hypotension: slow baroreceptor response when standing',
        'Autonomic dysfunction: impaired reflex responses',
      ],
      pharmacologicalModifiers: [
        'Beta-blockers: reduce heart rate and contractility',
        'ACE inhibitors: reduce vasoconstriction',
        'Calcium channel blockers: vasodilation',
        'Diuretics: reduce blood volume',
      ],
    },
  ],

  systemInteractions: [
    {
      targetSystem: 'respiratory',
      interactionType: 'depends-on',
      description: 'Cardiovascular system depends on respiratory system for gas exchange',
      mechanisms: ['Pulmonary circulation delivers deoxygenated blood to lungs', 'Oxygenated blood returns via pulmonary veins'],
      clinicalImplications: 'Pulmonary disease affects cardiac function; heart failure causes pulmonary edema',
    },
    {
      targetSystem: 'nervous',
      interactionType: 'regulates',
      description: 'Nervous system regulates cardiovascular function via autonomic control',
      mechanisms: ['Sympathetic activation increases cardiac output', 'Parasympathetic slows heart rate', 'Baroreceptor reflex maintains blood pressure'],
      clinicalImplications: 'Autonomic dysfunction affects blood pressure; stress affects heart',
    },
    {
      targetSystem: 'urinary',
      interactionType: 'depends-on',
      description: 'Kidneys regulate blood volume and thus blood pressure',
      mechanisms: ['RAAS system', 'Natriuresis', 'Fluid balance'],
      clinicalImplications: 'Kidney disease causes hypertension; heart failure affects kidney perfusion',
    },
    {
      targetSystem: 'endocrine',
      interactionType: 'regulates',
      description: 'Hormones modulate cardiovascular function',
      mechanisms: ['Epinephrine increases cardiac output', 'Thyroid hormone affects heart rate', 'ANP regulates blood volume'],
      clinicalImplications: 'Thyroid disorders affect heart; adrenal tumors cause hypertension',
    },
  ],

  clinicalCorrelations: [
    {
      name: 'Atherosclerosis',
      normalPhysiology: 'Arteries have smooth, flexible walls for blood flow',
      pathophysiology: 'Lipid accumulation, inflammation, and plaque formation narrow and stiffen arteries',
      symptoms: ['Often asymptomatic until severe', 'Angina (heart)', 'Claudication (legs)', 'TIA/stroke (brain)'],
      signs: ['Reduced pulses', 'Bruits', 'Fundoscopic changes'],
      conditions: ['Coronary artery disease', 'Peripheral artery disease', 'Carotid stenosis'],
      diagnosticTests: ['Lipid panel', 'Stress test', 'CT angiography', 'Ankle-brachial index'],
      treatmentPrinciples: ['Risk factor modification', 'Statins', 'Antiplatelets', 'Revascularization if severe'],
    },
    {
      name: 'Heart Failure',
      normalPhysiology: 'Heart maintains adequate cardiac output to meet tissue demands',
      pathophysiology: 'Damaged or overworked heart cannot pump effectively; compensatory mechanisms eventually fail',
      symptoms: ['Dyspnea', 'Fatigue', 'Edema', 'Orthopnea', 'PND'],
      signs: ['Elevated JVP', 'Pulmonary crackles', 'S3 gallop', 'Peripheral edema'],
      conditions: ['HFrEF', 'HFpEF', 'Right heart failure'],
      diagnosticTests: ['BNP/NT-proBNP', 'Echocardiogram', 'Chest X-ray', 'ECG'],
      treatmentPrinciples: ['Diuretics for congestion', 'ACE-I/ARB/ARNI', 'Beta-blockers', 'Aldosterone antagonists'],
    },
  ],

  normalParameters: [
    {
      name: 'Blood Pressure',
      normalRange: '< 120/80',
      unit: 'mmHg',
      significance: 'Pressure in arterial system; systolic during contraction, diastolic during relaxation',
      highImplications: 'Hypertension increases risk of stroke, heart attack, kidney disease',
      lowImplications: 'Hypotension can cause dizziness, syncope, organ hypoperfusion',
      factorsAffecting: ['Age', 'Stress', 'Sodium intake', 'Exercise', 'Medications'],
    },
    {
      name: 'Heart Rate',
      normalRange: '60-100',
      unit: 'bpm',
      significance: 'Number of heartbeats per minute; reflects cardiac activity',
      highImplications: 'Tachycardia may indicate fever, anxiety, hyperthyroidism, arrhythmia',
      lowImplications: 'Bradycardia may be normal in athletes or indicate conduction disease',
      factorsAffecting: ['Fitness level', 'Medications', 'Caffeine', 'Emotions', 'Temperature'],
    },
    {
      name: 'Cardiac Output',
      normalRange: '4-8',
      unit: 'L/min',
      significance: 'Volume of blood pumped per minute; HR × Stroke Volume',
      highImplications: 'Increased with exercise, fever, anemia (compensatory)',
      lowImplications: 'Decreased in heart failure, shock, hypovolemia',
      factorsAffecting: ['Heart rate', 'Contractility', 'Preload', 'Afterload'],
    },
  ],

  commonConditions: [
    'Hypertension',
    'Coronary artery disease',
    'Heart failure',
    'Atrial fibrillation',
    'Peripheral artery disease',
    'Deep vein thrombosis',
    'Valvular heart disease',
  ],

  visualizations: [
    {
      id: 'cardiac-cycle-animation',
      type: 'animation',
      name: 'Cardiac Cycle Animation',
      description: 'Animated visualization of one complete cardiac cycle with pressure-volume loops',
      conceptsCovered: ['Systole', 'Diastole', 'Valve function', 'Pressure changes'],
    },
    {
      id: 'ecg-animation',
      type: 'animation',
      name: 'ECG and Cardiac Electrical Activity',
      description: 'Correlation between electrical conduction and ECG waveforms',
      conceptsCovered: ['SA node', 'AV node', 'Bundle branches', 'P wave', 'QRS', 'T wave'],
    },
  ],
};

// ============================================
// Respiratory System
// ============================================

export const RESPIRATORY_SYSTEM: BodySystem = {
  id: 'respiratory',
  name: 'Respiratory System',
  overview: `The respiratory system enables gas exchange - bringing oxygen into the body and removing carbon dioxide. You take about 12-20 breaths per minute at rest, moving ~500ml of air each breath. The lungs have a surface area of about 70m² (size of a tennis court) optimized for gas exchange. Understanding respiration is essential because it's tightly linked to cardiovascular function and acid-base balance.`,

  functions: [
    {
      name: 'Gas Exchange',
      description: 'Exchange O2 and CO2 between air and blood',
      importance: 'vital',
      mechanismSummary: 'Oxygen diffuses from alveoli into pulmonary capillaries; CO2 diffuses in opposite direction. Driven by partial pressure gradients.',
    },
    {
      name: 'Acid-Base Regulation',
      description: 'Regulate blood pH by controlling CO2 levels',
      importance: 'vital',
      mechanismSummary: 'CO2 + H2O ↔ H2CO3 ↔ H+ + HCO3-. Increasing ventilation removes CO2, raising pH; decreasing ventilation does opposite.',
    },
    {
      name: 'Protection',
      description: 'Filter, warm, and humidify inhaled air',
      importance: 'essential',
      mechanismSummary: 'Nasal passages filter particles, warm air to body temperature, add moisture. Mucociliary escalator removes trapped particles.',
    },
    {
      name: 'Vocalization',
      description: 'Produce sound for speech',
      importance: 'supportive',
      mechanismSummary: 'Air passing through vocal cords causes vibration; tongue, lips, and palate shape sounds.',
    },
    {
      name: 'Olfaction',
      description: 'Enable sense of smell',
      importance: 'supportive',
      mechanismSummary: 'Olfactory receptors in nasal cavity detect airborne chemicals.',
    },
  ],

  organs: [
    {
      name: 'Nasal Cavity',
      description: 'Entry point for air with filtering, warming, humidifying functions',
      functions: ['Filter particles', 'Warm air to body temperature', 'Humidify air', 'Olfaction'],
      location: 'Behind the nose',
      clinicalNotes: 'Nasal breathing is preferred; mouth breathing bypasses these protective functions.',
    },
    {
      name: 'Pharynx and Larynx',
      description: 'Passageway connecting nasal cavity to trachea',
      functions: ['Conduct air', 'Produce voice (larynx)', 'Prevent aspiration'],
      location: 'Throat region',
      clinicalNotes: 'Epiglottis closes during swallowing to prevent aspiration. Vocal cords can spasm (laryngospasm).',
    },
    {
      name: 'Trachea',
      description: 'Cartilage-reinforced tube conducting air to bronchi',
      functions: ['Conduct air', 'Mucociliary clearance'],
      location: 'Anterior to esophagus, from larynx to carina',
      microanatomy: [
        {
          structure: 'C-shaped cartilage rings',
          function: 'Keep airway open',
        },
        {
          structure: 'Ciliated epithelium',
          function: 'Move mucus upward',
        },
        {
          structure: 'Goblet cells',
          function: 'Produce mucus',
        },
      ],
      clinicalNotes: 'Trachea bifurcates at carina (T4-5 level). Right main bronchus is more vertical - aspiration more common on right.',
    },
    {
      name: 'Bronchi and Bronchioles',
      description: 'Branching airways that conduct air to alveoli',
      functions: ['Conduct air', 'Regulate airflow (bronchioles)'],
      location: 'Within lungs',
      microanatomy: [
        {
          structure: 'Bronchi',
          function: 'Larger airways with cartilage',
        },
        {
          structure: 'Bronchioles',
          function: 'Smaller airways with smooth muscle',
        },
        {
          structure: 'Terminal bronchioles',
          function: 'Smallest conducting airways',
        },
      ],
      clinicalNotes: 'Bronchospasm (asthma) constricts bronchioles. Each lung has ~30,000 terminal bronchioles.',
    },
    {
      name: 'Alveoli',
      description: 'Tiny air sacs where gas exchange occurs',
      functions: ['Gas exchange', 'Surfactant production'],
      location: 'Throughout lung parenchyma',
      microanatomy: [
        {
          structure: 'Type I pneumocytes',
          function: 'Gas exchange (95% of surface)',
          cellTypes: ['Squamous epithelial cells'],
        },
        {
          structure: 'Type II pneumocytes',
          function: 'Produce surfactant, regenerate Type I',
          cellTypes: ['Cuboidal secretory cells'],
        },
        {
          structure: 'Alveolar macrophages',
          function: 'Phagocytose particles and pathogens',
          cellTypes: ['Macrophages'],
        },
      ],
      clinicalNotes: '~300 million alveoli per lung. Surfactant reduces surface tension, preventing collapse. Premature infants lack surfactant (RDS).',
    },
  ],

  processes: [
    {
      id: 'breathing-mechanics',
      name: 'Mechanics of Breathing',
      system: 'respiratory',
      category: 'transport',
      overview: 'Breathing is the mechanical process of moving air in and out of the lungs. It relies on pressure differences created by the respiratory muscles, particularly the diaphragm. Understanding these mechanics is essential for understanding respiratory diseases and ventilator management.',
      steps: [
        {
          order: 1,
          name: 'Inspiration Initiation',
          description: 'Respiratory center in medulla sends signals to respiratory muscles',
          duration: 'Continuous cycle',
          location: 'Brainstem to phrenic nerve (C3-C5)',
          triggers: ['Increased CO2', 'Decreased O2', 'Voluntary control'],
          results: ['Nerve impulses to diaphragm and intercostals'],
        },
        {
          order: 2,
          name: 'Diaphragm Contraction',
          description: 'Dome-shaped diaphragm flattens, increasing thoracic volume vertically',
          duration: '~1-2 seconds for inspiration',
          location: 'Separates thorax from abdomen',
          results: ['Thoracic volume increases ~500ml', 'Accounts for 75% of tidal volume'],
        },
        {
          order: 3,
          name: 'External Intercostal Contraction',
          description: 'External intercostal muscles elevate ribs, increasing thoracic volume horizontally',
          duration: 'Concurrent with diaphragm',
          location: 'Between ribs',
          results: ['Bucket-handle and pump-handle movements', 'Additional volume increase'],
        },
        {
          order: 4,
          name: 'Intrapulmonary Pressure Drop',
          description: 'Expanded thorax creates negative pressure in lungs',
          duration: 'During expansion',
          location: 'Pleural and alveolar spaces',
          results: ['Pressure drops below atmospheric (~-3 cmH2O)', 'Boyles law: increased volume = decreased pressure'],
        },
        {
          order: 5,
          name: 'Air Flow Into Lungs',
          description: 'Air flows down pressure gradient from atmosphere to alveoli',
          duration: '~1-2 seconds',
          location: 'Airways from nose/mouth to alveoli',
          results: ['~500ml tidal volume at rest', 'Fresh air reaches alveoli'],
        },
        {
          order: 6,
          name: 'Passive Expiration',
          description: 'Respiratory muscles relax, elastic recoil compresses lungs',
          duration: '~2-3 seconds (longer than inspiration)',
          location: 'Thorax and lungs',
          triggers: ['Muscle relaxation', 'Lung elastic recoil', 'Surface tension'],
          results: ['Pressure rises above atmospheric', 'Air expelled'],
        },
      ],
      keyMolecules: [
        {
          name: 'Surfactant',
          type: 'other',
          role: 'Reduces surface tension in alveoli, preventing collapse',
          clinicalSignificance: 'Deficiency causes ARDS in adults, RDS in premature infants',
        },
        {
          name: 'Acetylcholine',
          type: 'neurotransmitter',
          role: 'Neuromuscular junction transmission for muscle contraction',
          clinicalSignificance: 'Paralytic agents block this for intubation',
        },
      ],
      regulation: [
        {
          name: 'Medullary Respiratory Center',
          type: 'neural',
          description: 'Sets basic rhythm of breathing',
          mediators: ['Dorsal respiratory group (inspiration)', 'Ventral respiratory group (forced breathing)'],
          effect: 'stimulates',
          clinicalApplications: ['Opioids depress this center', 'Brain injury affects breathing'],
        },
        {
          name: 'Pontine Respiratory Group',
          type: 'neural',
          description: 'Fine-tunes breathing pattern and transitions',
          mediators: ['Pneumotaxic center', 'Apneustic center'],
          effect: 'modulates',
          clinicalApplications: ['Damage causes abnormal breathing patterns'],
        },
        {
          name: 'Hering-Breuer Reflex',
          type: 'reflex',
          description: 'Stretch receptors prevent overinflation',
          mediators: ['Pulmonary stretch receptors', 'Vagus nerve'],
          effect: 'inhibits',
          clinicalApplications: ['Protective against barotrauma', 'Active in newborns'],
        },
      ],
      dysfunction: [
        {
          name: 'Respiratory Failure',
          mechanism: 'Inability to maintain adequate gas exchange',
          consequences: ['Hypoxemia', 'Hypercapnia', 'Acidosis'],
          clinicalPresentation: 'Dyspnea, confusion, cyanosis, accessory muscle use',
          associatedConditions: ['COPD exacerbation', 'ARDS', 'Pneumonia', 'Neuromuscular disease'],
        },
        {
          name: 'Restrictive Lung Disease',
          mechanism: 'Reduced lung compliance limits expansion',
          consequences: ['Reduced tidal volumes', 'Increased work of breathing'],
          clinicalPresentation: 'Dyspnea, rapid shallow breathing',
          associatedConditions: ['Pulmonary fibrosis', 'Chest wall deformity', 'Obesity'],
        },
        {
          name: 'Obstructive Lung Disease',
          mechanism: 'Airway narrowing increases resistance to airflow',
          consequences: ['Air trapping', 'Prolonged expiration', 'Hyperinflation'],
          clinicalPresentation: 'Wheezing, dyspnea, barrel chest',
          associatedConditions: ['Asthma', 'COPD', 'Bronchiectasis'],
        },
      ],
      clinicalRelevance: [
        'Spirometry measures lung volumes and flow rates',
        'Work of breathing increases in lung disease',
        'Mechanical ventilation supports failed breathing mechanics',
        'Accessory muscle use indicates respiratory distress',
      ],
      relatedProcesses: ['gas-exchange', 'respiratory-regulation'],
      complexity: 'intermediate',
    },
    {
      id: 'gas-exchange',
      name: 'Pulmonary Gas Exchange',
      system: 'respiratory',
      category: 'metabolism',
      overview: 'Gas exchange is the diffusion of oxygen from alveoli into blood and carbon dioxide from blood into alveoli. This occurs across the extremely thin blood-air barrier (~0.5 micrometers) driven by partial pressure gradients. Efficient gas exchange requires ventilation-perfusion matching.',
      steps: [
        {
          order: 1,
          name: 'Alveolar Ventilation',
          description: 'Fresh air reaches alveoli, establishing alveolar partial pressures',
          duration: 'Each breath',
          location: 'Alveoli',
          results: ['PAO2 ~100 mmHg', 'PACO2 ~40 mmHg'],
        },
        {
          order: 2,
          name: 'Oxygen Diffusion',
          description: 'O2 diffuses from alveoli (high PO2) to pulmonary capillary blood (low PO2)',
          duration: '~0.25 seconds (of 0.75s capillary transit time)',
          location: 'Blood-air barrier',
          triggers: ['Partial pressure gradient (~60 mmHg)'],
          results: ['Blood PO2 equilibrates with alveolar PO2', 'Hemoglobin saturation increases to ~98%'],
        },
        {
          order: 3,
          name: 'CO2 Diffusion',
          description: 'CO2 diffuses from blood (high PCO2) to alveoli (low PCO2)',
          duration: 'Very rapid (CO2 diffuses 20x faster than O2)',
          location: 'Blood-air barrier',
          triggers: ['Partial pressure gradient (~6 mmHg)'],
          results: ['Blood PCO2 drops to ~40 mmHg', 'CO2 exhaled'],
        },
        {
          order: 4,
          name: 'V/Q Matching',
          description: 'Local mechanisms match ventilation to perfusion',
          duration: 'Continuous',
          location: 'Throughout lungs',
          triggers: ['Local O2 and CO2 levels'],
          results: ['Hypoxic vasoconstriction shunts blood from poorly ventilated areas', 'Optimal gas exchange efficiency'],
        },
      ],
      keyMolecules: [
        {
          name: 'Hemoglobin',
          type: 'other',
          role: 'Carries 98% of blood oxygen bound to heme iron',
          clinicalSignificance: 'Anemia reduces O2 carrying capacity; CO poisoning blocks binding',
        },
        {
          name: '2,3-DPG',
          type: 'other',
          role: 'Shifts O2-hemoglobin dissociation curve, facilitating O2 release',
          clinicalSignificance: 'Increased in chronic hypoxia; decreased in stored blood',
        },
        {
          name: 'Carbonic Anhydrase',
          type: 'enzyme',
          role: 'Catalyzes CO2 + H2O ↔ H2CO3 for CO2 transport as bicarbonate',
          clinicalSignificance: 'Inhibitors (acetazolamide) used for altitude sickness',
        },
      ],
      regulation: [
        {
          name: 'Hypoxic Pulmonary Vasoconstriction',
          type: 'local',
          description: 'Low alveolar O2 causes local arteriolar constriction',
          mediators: ['Oxygen-sensitive K+ channels', 'Endothelin'],
          effect: 'stimulates',
          clinicalApplications: ['Protective mechanism', 'Causes pulmonary HTN at altitude'],
        },
        {
          name: 'Bohr Effect',
          type: 'chemical',
          description: 'Lower pH and higher CO2 reduce hemoglobin O2 affinity',
          mediators: ['H+', 'CO2'],
          effect: 'modulates',
          clinicalApplications: ['Facilitates O2 release in metabolically active tissues'],
        },
      ],
      dysfunction: [
        {
          name: 'V/Q Mismatch',
          mechanism: 'Ventilation and perfusion not properly matched',
          consequences: ['Hypoxemia', 'Inefficient gas exchange'],
          clinicalPresentation: 'Low O2 saturation despite supplemental oxygen',
          associatedConditions: ['Pulmonary embolism', 'COPD', 'Pneumonia'],
        },
        {
          name: 'Diffusion Impairment',
          mechanism: 'Thickened blood-air barrier slows diffusion',
          consequences: ['Exercise-induced hypoxemia'],
          clinicalPresentation: 'Dyspnea on exertion, normal rest oxygenation',
          associatedConditions: ['Pulmonary fibrosis', 'Interstitial lung disease'],
        },
        {
          name: 'Shunt',
          mechanism: 'Blood bypasses ventilated alveoli',
          consequences: ['Hypoxemia unresponsive to supplemental O2'],
          clinicalPresentation: 'Severe hypoxemia, cyanosis',
          associatedConditions: ['ARDS', 'Pneumonia', 'Atelectasis', 'Cardiac shunts'],
        },
      ],
      clinicalRelevance: [
        'ABG measures PaO2 and PaCO2 directly',
        'A-a gradient indicates gas exchange efficiency',
        'Supplemental O2 helps V/Q mismatch but not shunt',
        'Pulse oximetry monitors O2 saturation continuously',
      ],
      relatedProcesses: ['breathing-mechanics', 'oxygen-transport'],
      complexity: 'advanced',
    },
  ],

  homeostasis: [
    {
      id: 'respiratory-regulation',
      name: 'Respiratory Rate Regulation',
      type: 'negative-feedback',
      regulatedVariable: 'Arterial CO2 (PaCO2)',
      normalRange: '35-45',
      unit: 'mmHg',
      sensor: {
        name: 'Central and Peripheral Chemoreceptors',
        location: 'Medulla (central), Carotid/aortic bodies (peripheral)',
        mechanism: 'Central receptors detect H+ (from CO2); peripheral detect O2, CO2, pH',
      },
      controlCenter: {
        name: 'Respiratory Centers',
        location: 'Medulla and pons',
        mechanism: 'Adjust rate and depth of breathing',
      },
      effector: {
        name: 'Respiratory Muscles',
        location: 'Diaphragm, intercostals',
        mechanism: 'Increase or decrease ventilation',
      },
      responseToIncrease: 'Increased CO2 → increased ventilation → CO2 blown off → PaCO2 decreases',
      responseToDecrease: 'Decreased CO2 → decreased ventilation → CO2 retained → PaCO2 increases',
      dysfunctionExamples: [
        'COPD: chronically elevated CO2, chemoreceptors adapt',
        'Sleep apnea: periodic breathing cessation',
        'Central hypoventilation: impaired respiratory drive',
      ],
    },
  ],

  systemInteractions: [
    {
      targetSystem: 'cardiovascular',
      interactionType: 'supports',
      description: 'Oxygenates blood and removes CO2 for cardiovascular transport',
      mechanisms: ['Pulmonary circulation', 'V/Q matching'],
      clinicalImplications: 'Pulmonary hypertension affects right heart; heart failure causes pulmonary edema',
    },
    {
      targetSystem: 'urinary',
      interactionType: 'supports',
      description: 'Both systems regulate acid-base balance',
      mechanisms: ['Lungs regulate CO2 (respiratory acid)', 'Kidneys regulate HCO3- (metabolic)'],
      clinicalImplications: 'Kidneys compensate for respiratory disorders and vice versa',
    },
  ],

  clinicalCorrelations: [
    {
      name: 'Asthma',
      normalPhysiology: 'Bronchioles relax and constrict to regulate airflow',
      pathophysiology: 'Hypersensitive airways undergo inflammation and bronchoconstriction in response to triggers',
      symptoms: ['Wheezing', 'Dyspnea', 'Cough', 'Chest tightness'],
      signs: ['Wheezes', 'Prolonged expiration', 'Accessory muscle use'],
      conditions: ['Allergic asthma', 'Exercise-induced asthma'],
      diagnosticTests: ['Spirometry', 'Peak flow', 'Methacholine challenge'],
      treatmentPrinciples: ['Bronchodilators (beta-agonists)', 'Inhaled corticosteroids', 'Trigger avoidance'],
    },
    {
      name: 'COPD (Chronic Obstructive Pulmonary Disease)',
      normalPhysiology: 'Airways remain open, alveoli maintain structure for gas exchange',
      pathophysiology: 'Chronic inflammation destroys alveolar walls (emphysema) and causes airway narrowing with mucus (chronic bronchitis)',
      symptoms: ['Progressive dyspnea', 'Chronic cough', 'Sputum production', 'Exercise intolerance'],
      signs: ['Barrel chest', 'Pursed lip breathing', 'Hyperresonance', 'Decreased breath sounds'],
      conditions: ['Emphysema', 'Chronic bronchitis'],
      diagnosticTests: ['Spirometry (FEV1/FVC < 0.7)', 'Chest X-ray', 'CT chest', 'ABG'],
      treatmentPrinciples: ['Smoking cessation (most important)', 'Bronchodilators', 'Inhaled steroids', 'Pulmonary rehab', 'Oxygen therapy'],
    },
    {
      name: 'Pneumonia',
      normalPhysiology: 'Alveoli remain clear for gas exchange, immune defenses eliminate pathogens',
      pathophysiology: 'Infection causes alveolar inflammation and fluid/pus accumulation (consolidation)',
      symptoms: ['Cough (productive)', 'Fever', 'Dyspnea', 'Pleuritic chest pain'],
      signs: ['Crackles/rales', 'Bronchial breath sounds', 'Dullness to percussion', 'Fever'],
      conditions: ['Community-acquired pneumonia', 'Hospital-acquired pneumonia', 'Aspiration pneumonia'],
      diagnosticTests: ['Chest X-ray', 'Sputum culture', 'Blood cultures', 'Procalcitonin'],
      treatmentPrinciples: ['Antibiotics (based on likely pathogen)', 'Supportive care', 'Oxygen if hypoxic'],
    },
    {
      name: 'Pulmonary Embolism',
      normalPhysiology: 'Blood flows freely through pulmonary vasculature for gas exchange',
      pathophysiology: 'Clot (usually from DVT) lodges in pulmonary artery, blocking perfusion to ventilated lung',
      symptoms: ['Sudden dyspnea', 'Pleuritic chest pain', 'Hemoptysis', 'Syncope'],
      signs: ['Tachypnea', 'Tachycardia', 'Hypoxemia', 'Clear lungs (often)'],
      conditions: ['Acute PE', 'Chronic thromboembolic pulmonary hypertension'],
      diagnosticTests: ['CT pulmonary angiography', 'D-dimer', 'V/Q scan', 'Echocardiogram'],
      treatmentPrinciples: ['Anticoagulation', 'Thrombolysis (massive PE)', 'IVC filter (if anticoagulation contraindicated)'],
    },
  ],

  normalParameters: [
    {
      name: 'Respiratory Rate',
      normalRange: '12-20',
      unit: 'breaths/min',
      significance: 'Number of breaths per minute',
      highImplications: 'Tachypnea may indicate hypoxia, pain, fever, anxiety',
      lowImplications: 'Bradypnea may indicate CNS depression, hypothermia',
      factorsAffecting: ['Exercise', 'Anxiety', 'Fever', 'Altitude', 'Medications'],
    },
    {
      name: 'Oxygen Saturation (SpO2)',
      normalRange: '95-100',
      unit: '%',
      significance: 'Percentage of hemoglobin saturated with oxygen',
      highImplications: '100% is normal when breathing supplemental oxygen',
      lowImplications: '<90% indicates hypoxemia requiring evaluation',
      factorsAffecting: ['Altitude', 'Lung disease', 'Anemia', 'Circulation'],
    },
  ],

  commonConditions: [
    'Asthma',
    'COPD',
    'Pneumonia',
    'Pulmonary embolism',
    'Lung cancer',
    'Sleep apnea',
    'Pulmonary fibrosis',
  ],

  visualizations: [],
};

// ============================================
// Nervous System
// ============================================

export const NERVOUS_SYSTEM: BodySystem = {
  id: 'nervous',
  name: 'Nervous System',
  overview: `The nervous system is the body's control and communication network, processing information and coordinating responses in milliseconds. It contains approximately 86 billion neurons in the brain alone, each connected to thousands of others. Understanding this system is essential because neurological disorders range from common (migraines, anxiety) to devastating (stroke, dementia). The nervous system integrates sensory information, controls movement, regulates organ function, and enables consciousness, thought, and emotion.`,

  functions: [
    {
      name: 'Sensory Processing',
      description: 'Detect and interpret stimuli from internal and external environment',
      importance: 'vital',
      mechanismSummary: 'Sensory receptors transduce stimuli into electrical signals. These travel via sensory neurons to the CNS where they are processed and perceived.',
    },
    {
      name: 'Motor Control',
      description: 'Generate and coordinate voluntary and involuntary movements',
      importance: 'vital',
      mechanismSummary: 'Motor cortex plans movement; signals descend via corticospinal tract to motor neurons; neuromuscular junction activates muscle contraction.',
    },
    {
      name: 'Autonomic Regulation',
      description: 'Control involuntary functions (heart rate, digestion, respiration)',
      importance: 'vital',
      mechanismSummary: 'Sympathetic (fight-or-flight) and parasympathetic (rest-and-digest) divisions balance organ function automatically.',
    },
    {
      name: 'Cognition and Consciousness',
      description: 'Enable thought, memory, reasoning, and awareness',
      importance: 'vital',
      mechanismSummary: 'Complex neural networks in cortex support higher functions. Memory involves hippocampus encoding and cortical storage.',
    },
    {
      name: 'Homeostatic Control',
      description: 'Maintain internal balance through neuroendocrine integration',
      importance: 'essential',
      mechanismSummary: 'Hypothalamus monitors body state and controls pituitary to regulate hormones affecting temperature, hunger, thirst, circadian rhythms.',
    },
    {
      name: 'Emotional Processing',
      description: 'Generate and regulate emotional responses',
      importance: 'essential',
      mechanismSummary: 'Limbic system (amygdala, hippocampus, cingulate) processes emotions. Prefrontal cortex modulates emotional responses.',
    },
  ],

  organs: [
    {
      name: 'Brain',
      description: 'Central processing organ of the nervous system, seat of consciousness',
      functions: [
        'Process sensory information',
        'Control movement',
        'Enable cognition and memory',
        'Regulate emotions',
        'Coordinate autonomic functions',
      ],
      location: 'Cranial cavity, protected by skull',
      bloodSupply: 'Internal carotid arteries and vertebral arteries form Circle of Willis; receives 20% of cardiac output',
      innervation: 'N/A - is the source of innervation',
      microanatomy: [
        {
          structure: 'Cerebral cortex',
          function: 'Higher cognitive functions, organized into lobes',
          cellTypes: ['Pyramidal neurons', 'Interneurons', 'Glial cells'],
        },
        {
          structure: 'White matter',
          function: 'Myelinated axon tracts connecting brain regions',
          cellTypes: ['Oligodendrocytes', 'Astrocytes'],
        },
        {
          structure: 'Basal ganglia',
          function: 'Movement initiation and coordination',
          cellTypes: ['Medium spiny neurons'],
        },
        {
          structure: 'Thalamus',
          function: 'Relay station for sensory information to cortex',
          cellTypes: ['Relay neurons', 'Interneurons'],
        },
        {
          structure: 'Hypothalamus',
          function: 'Homeostatic control, neuroendocrine regulation',
          cellTypes: ['Neurosecretory cells'],
        },
        {
          structure: 'Brainstem',
          function: 'Vital functions (breathing, heart rate), cranial nerves',
          cellTypes: ['Motor neurons', 'Autonomic neurons'],
        },
        {
          structure: 'Cerebellum',
          function: 'Movement coordination, balance, motor learning',
          cellTypes: ['Purkinje cells', 'Granule cells'],
        },
      ],
      clinicalNotes: 'Brain uses 20% of body oxygen. No pain receptors in brain tissue itself. Cannot regenerate neurons significantly. Blood-brain barrier protects from many toxins but limits drug delivery.',
    },
    {
      name: 'Spinal Cord',
      description: 'Neural conduit connecting brain to body; contains reflex circuits',
      functions: [
        'Conduct sensory information to brain',
        'Conduct motor commands to body',
        'Mediate spinal reflexes',
        'Coordinate autonomic outflow',
      ],
      location: 'Vertebral canal, from foramen magnum to L1-L2',
      bloodSupply: 'Anterior spinal artery, posterior spinal arteries',
      microanatomy: [
        {
          structure: 'Gray matter',
          function: 'Contains neuron cell bodies (H-shaped in cross-section)',
          cellTypes: ['Motor neurons', 'Interneurons'],
        },
        {
          structure: 'White matter',
          function: 'Ascending and descending myelinated tracts',
          cellTypes: ['Oligodendrocytes'],
        },
        {
          structure: 'Dorsal horn',
          function: 'Receives sensory input',
          cellTypes: ['Second-order sensory neurons'],
        },
        {
          structure: 'Ventral horn',
          function: 'Contains motor neurons',
          cellTypes: ['Alpha motor neurons', 'Gamma motor neurons'],
        },
      ],
      clinicalNotes: 'Spinal cord ends at L1-L2; lumbar puncture done below this level. Complete transection causes permanent paralysis below that level. Different tracts carry different sensations.',
    },
    {
      name: 'Peripheral Nerves',
      description: 'Bundles of axons connecting CNS to body tissues',
      functions: [
        'Conduct sensory signals from receptors',
        'Conduct motor signals to muscles',
        'Carry autonomic signals to organs',
      ],
      location: 'Throughout body',
      microanatomy: [
        {
          structure: 'Axons',
          function: 'Conduct electrical signals',
          cellTypes: ['Schwann cells (myelination)'],
        },
        {
          structure: 'Endoneurium',
          function: 'Connective tissue around individual axons',
        },
        {
          structure: 'Perineurium',
          function: 'Bundles axons into fascicles',
        },
        {
          structure: 'Epineurium',
          function: 'Outer connective tissue sheath',
        },
      ],
      clinicalNotes: 'Peripheral nerves can regenerate (unlike CNS). Neuropathy affects millions (diabetic neuropathy common). Nerve conduction studies test function.',
    },
  ],

  processes: [
    {
      id: 'action-potential',
      name: 'Action Potential Generation and Propagation',
      system: 'nervous',
      category: 'signaling',
      overview: 'The action potential is the fundamental unit of neural communication - an all-or-none electrical signal that travels along axons. Understanding this process explains how neurons communicate, why nerve conduction velocity varies, and how many drugs and toxins work.',
      steps: [
        {
          order: 1,
          name: 'Resting Membrane Potential',
          description: 'Neuron maintains -70mV potential via Na+/K+-ATPase pump',
          duration: 'Maintained until stimulation',
          location: 'Entire neuron membrane',
          results: ['Inside negative relative to outside', 'Na+ high outside, K+ high inside'],
        },
        {
          order: 2,
          name: 'Depolarization to Threshold',
          description: 'Stimulus causes local depolarization; if reaches threshold (-55mV), triggers AP',
          duration: '~0.5 ms',
          location: 'Axon hillock (trigger zone)',
          triggers: ['Synaptic input', 'Sensory transduction'],
          results: ['Voltage-gated Na+ channels begin opening'],
        },
        {
          order: 3,
          name: 'Rapid Depolarization',
          description: 'Na+ channels open, Na+ rushes in, membrane rapidly depolarizes',
          duration: '~0.5 ms',
          location: 'Local membrane segment',
          triggers: ['Threshold reached'],
          results: ['Membrane reaches +30mV', 'Na+ channels inactivate'],
        },
        {
          order: 4,
          name: 'Repolarization',
          description: 'K+ channels open (delayed), K+ rushes out, membrane repolarizes',
          duration: '~1 ms',
          location: 'Same membrane segment',
          triggers: ['Depolarization triggers K+ channel opening'],
          results: ['Membrane returns toward resting potential'],
        },
        {
          order: 5,
          name: 'Hyperpolarization (Undershoot)',
          description: 'K+ channels slow to close, membrane briefly hyperpolarizes',
          duration: '~1-2 ms',
          location: 'Same membrane segment',
          results: ['Membrane briefly more negative than rest', 'Absolute refractory period'],
        },
        {
          order: 6,
          name: 'Propagation',
          description: 'Local currents depolarize adjacent membrane, spreading the signal',
          duration: 'Continuous along axon',
          location: 'Entire axon length',
          results: ['Signal travels to axon terminal', 'Saltatory conduction in myelinated axons'],
        },
      ],
      keyMolecules: [
        {
          name: 'Voltage-gated Na+ channels',
          type: 'receptor',
          role: 'Open at threshold, allow Na+ influx for depolarization',
          clinicalSignificance: 'Local anesthetics block these; mutations cause epilepsy, pain disorders',
        },
        {
          name: 'Voltage-gated K+ channels',
          type: 'receptor',
          role: 'Open after depolarization, allow K+ efflux for repolarization',
          clinicalSignificance: 'Some antiarrhythmics block these',
        },
        {
          name: 'Na+/K+-ATPase',
          type: 'enzyme',
          role: 'Maintains ion gradients, restores resting potential',
          clinicalSignificance: 'Digoxin inhibits this; requires significant ATP',
        },
      ],
      regulation: [
        {
          name: 'Myelination',
          type: 'structural',
          description: 'Myelin insulation allows saltatory conduction between nodes of Ranvier',
          mediators: ['Oligodendrocytes (CNS)', 'Schwann cells (PNS)'],
          effect: 'modulates',
          clinicalApplications: ['MS destroys myelin, slowing conduction', 'Demyelinating neuropathies'],
        },
        {
          name: 'Axon Diameter',
          type: 'structural',
          description: 'Larger diameter = faster conduction (less resistance)',
          mediators: [],
          effect: 'modulates',
          clinicalApplications: ['Large motor neurons conduct faster than small pain fibers'],
        },
      ],
      dysfunction: [
        {
          name: 'Demyelinating Diseases',
          mechanism: 'Loss of myelin slows or blocks conduction',
          consequences: ['Slowed nerve conduction', 'Conduction block'],
          clinicalPresentation: 'Weakness, sensory loss, visual problems',
          associatedConditions: ['Multiple sclerosis', 'Guillain-Barré syndrome'],
        },
        {
          name: 'Channelopathies',
          mechanism: 'Ion channel mutations alter excitability',
          consequences: ['Abnormal firing patterns', 'Hyperexcitability or hypoexcitability'],
          clinicalPresentation: 'Seizures, periodic paralysis, pain syndromes',
          associatedConditions: ['Epilepsy', 'Myotonia', 'Erythromelalgia'],
        },
      ],
      clinicalRelevance: [
        'Local anesthetics block Na+ channels to prevent pain signal transmission',
        'Nerve conduction studies measure action potential speed and amplitude',
        'Epilepsy involves excessive neuronal firing',
        'Many toxins (tetrodotoxin, saxitoxin) block Na+ channels',
      ],
      relatedProcesses: ['synaptic-transmission', 'neuromuscular-junction'],
      complexity: 'intermediate',
    },
    {
      id: 'synaptic-transmission',
      name: 'Synaptic Transmission',
      system: 'nervous',
      category: 'signaling',
      overview: 'Synaptic transmission is how neurons communicate with each other and with target cells. Chemical synapses convert electrical signals to chemical signals and back, allowing for signal modulation, integration, and plasticity. Understanding synapses is key to understanding learning, memory, and how most neurological drugs work.',
      steps: [
        {
          order: 1,
          name: 'Action Potential Arrival',
          description: 'AP reaches presynaptic terminal, depolarizing the membrane',
          duration: '~1 ms',
          location: 'Presynaptic terminal',
          results: ['Voltage-gated Ca2+ channels open'],
        },
        {
          order: 2,
          name: 'Calcium Influx',
          description: 'Ca2+ enters presynaptic terminal down concentration gradient',
          duration: '~0.2 ms',
          location: 'Presynaptic terminal',
          triggers: ['Membrane depolarization'],
          results: ['Local Ca2+ concentration rises dramatically'],
        },
        {
          order: 3,
          name: 'Vesicle Fusion',
          description: 'Ca2+ triggers vesicle fusion with presynaptic membrane',
          duration: '~0.5 ms',
          location: 'Active zone',
          triggers: ['Ca2+ binding to synaptotagmin'],
          results: ['SNARE proteins mediate fusion', 'Neurotransmitter released into cleft'],
        },
        {
          order: 4,
          name: 'Neurotransmitter Diffusion',
          description: 'Neurotransmitter diffuses across synaptic cleft (~20nm)',
          duration: '~0.05 ms',
          location: 'Synaptic cleft',
          results: ['Neurotransmitter reaches postsynaptic receptors'],
        },
        {
          order: 5,
          name: 'Receptor Binding',
          description: 'Neurotransmitter binds to postsynaptic receptors',
          duration: 'Variable (ms to seconds)',
          location: 'Postsynaptic membrane',
          results: ['Ion channels open (ionotropic) or second messengers activated (metabotropic)'],
        },
        {
          order: 6,
          name: 'Signal Termination',
          description: 'Neurotransmitter cleared by reuptake, enzymatic degradation, or diffusion',
          duration: 'Variable',
          location: 'Synaptic cleft',
          results: ['Signal ends', 'Synapse ready for next transmission'],
        },
      ],
      keyMolecules: [
        {
          name: 'Glutamate',
          type: 'neurotransmitter',
          role: 'Main excitatory neurotransmitter in CNS',
          clinicalSignificance: 'Excess causes excitotoxicity (stroke); NMDA receptors involved in memory',
        },
        {
          name: 'GABA',
          type: 'neurotransmitter',
          role: 'Main inhibitory neurotransmitter in CNS',
          clinicalSignificance: 'Benzodiazepines and alcohol enhance GABA; deficiency linked to seizures',
        },
        {
          name: 'Acetylcholine',
          type: 'neurotransmitter',
          role: 'Neuromuscular junction, parasympathetic, cognition',
          clinicalSignificance: 'Deficient in Alzheimer; blocked by nerve agents; enhanced by cholinesterase inhibitors',
        },
        {
          name: 'Dopamine',
          type: 'neurotransmitter',
          role: 'Reward, motivation, movement',
          clinicalSignificance: 'Low in Parkinson; dysregulated in schizophrenia and addiction',
        },
        {
          name: 'Serotonin',
          type: 'neurotransmitter',
          role: 'Mood, sleep, appetite',
          clinicalSignificance: 'SSRIs increase serotonin for depression; involved in migraine',
        },
        {
          name: 'Norepinephrine',
          type: 'neurotransmitter',
          role: 'Alertness, attention, fight-or-flight',
          clinicalSignificance: 'SNRIs affect this; involved in ADHD, anxiety',
        },
      ],
      regulation: [
        {
          name: 'Presynaptic Inhibition',
          type: 'neural',
          description: 'Inhibitory synapses on presynaptic terminal reduce release',
          mediators: ['GABA', 'Adenosine'],
          effect: 'inhibits',
          clinicalApplications: ['Pain modulation', 'Caffeine blocks adenosine'],
        },
        {
          name: 'Receptor Desensitization',
          type: 'cellular',
          description: 'Prolonged agonist exposure reduces receptor response',
          mediators: ['Receptor phosphorylation', 'Internalization'],
          effect: 'inhibits',
          clinicalApplications: ['Tolerance to drugs', 'Therapeutic limitations'],
        },
        {
          name: 'Synaptic Plasticity',
          type: 'cellular',
          description: 'Activity-dependent changes in synaptic strength',
          mediators: ['NMDA receptors', 'BDNF', 'Gene expression'],
          effect: 'modulates',
          clinicalApplications: ['Basis of learning and memory', 'Disrupted in cognitive disorders'],
        },
      ],
      dysfunction: [
        {
          name: 'Myasthenia Gravis',
          mechanism: 'Antibodies against ACh receptors at neuromuscular junction',
          consequences: ['Reduced signal transmission', 'Muscle weakness'],
          clinicalPresentation: 'Fatigable weakness, ptosis, diplopia',
          associatedConditions: ['Thymoma'],
        },
        {
          name: 'Parkinson Disease',
          mechanism: 'Loss of dopaminergic neurons in substantia nigra',
          consequences: ['Dopamine deficiency in basal ganglia'],
          clinicalPresentation: 'Tremor, rigidity, bradykinesia, postural instability',
          associatedConditions: ['Lewy body dementia'],
        },
      ],
      clinicalRelevance: [
        'Most psychoactive drugs work at synapses',
        'SSRIs block serotonin reuptake',
        'Antipsychotics block dopamine receptors',
        'Nerve agents and pesticides block acetylcholinesterase',
      ],
      relatedProcesses: ['action-potential', 'neuromuscular-junction'],
      complexity: 'advanced',
    },
  ],

  homeostasis: [
    {
      id: 'autonomic-balance',
      name: 'Autonomic Nervous System Balance',
      type: 'negative-feedback',
      regulatedVariable: 'Autonomic tone',
      normalRange: 'Dynamic balance',
      unit: 'N/A',
      sensor: {
        name: 'Multiple sensors',
        location: 'Throughout body',
        mechanism: 'Baroreceptors, chemoreceptors, visceral afferents detect body state',
      },
      controlCenter: {
        name: 'Autonomic centers',
        location: 'Hypothalamus, brainstem',
        mechanism: 'Integrate sensory input, adjust sympathetic/parasympathetic output',
      },
      effector: {
        name: 'Target organs',
        location: 'Heart, blood vessels, GI tract, glands',
        mechanism: 'Sympathetic (norepinephrine) and parasympathetic (acetylcholine) effects on organs',
      },
      responseToIncrease: 'Stress → increased sympathetic tone → increased heart rate, blood pressure, alertness',
      responseToDecrease: 'Rest → increased parasympathetic tone → decreased heart rate, increased digestion',
      dysfunctionExamples: [
        'Autonomic neuropathy (diabetes): impaired heart rate variability, orthostatic hypotension',
        'Anxiety disorders: excessive sympathetic activation',
        'Vasovagal syncope: excessive parasympathetic activation',
      ],
      pharmacologicalModifiers: [
        'Beta-blockers: reduce sympathetic effects on heart',
        'Anticholinergics: block parasympathetic effects',
        'Clonidine: central sympathetic inhibition',
      ],
    },
  ],

  systemInteractions: [
    {
      targetSystem: 'cardiovascular',
      interactionType: 'regulates',
      description: 'Autonomic nervous system controls heart rate, contractility, and vascular tone',
      mechanisms: ['Sympathetic increases HR and contractility', 'Parasympathetic (vagus) slows HR', 'Baroreceptor reflex'],
      clinicalImplications: 'Beta-blockers, autonomic neuropathy affects heart',
    },
    {
      targetSystem: 'endocrine',
      interactionType: 'regulates',
      description: 'Hypothalamus controls pituitary and thus most hormonal axes',
      mechanisms: ['Hypothalamic-pituitary axes', 'Direct neural control of adrenal medulla', 'Stress response'],
      clinicalImplications: 'Stress affects hormones; hypothalamic tumors cause endocrine dysfunction',
    },
    {
      targetSystem: 'immune',
      interactionType: 'modulates',
      description: 'Neural-immune communication affects inflammation and immunity',
      mechanisms: ['Vagal anti-inflammatory pathway', 'Stress hormones modulate immune cells', 'Neuroimmune signaling'],
      clinicalImplications: 'Chronic stress impairs immunity; depression linked to inflammation',
    },
    {
      targetSystem: 'musculoskeletal',
      interactionType: 'regulates',
      description: 'Motor neurons control voluntary muscle movement',
      mechanisms: ['Neuromuscular junction', 'Motor unit recruitment', 'Reflexes'],
      clinicalImplications: 'ALS, myasthenia gravis affect neuromuscular function',
    },
  ],

  clinicalCorrelations: [
    {
      name: 'Stroke (Cerebrovascular Accident)',
      normalPhysiology: 'Brain receives continuous blood flow for oxygen and glucose',
      pathophysiology: 'Ischemic: clot blocks artery; Hemorrhagic: bleeding into brain tissue',
      symptoms: ['Sudden weakness/numbness (often one-sided)', 'Speech difficulty', 'Vision loss', 'Severe headache (hemorrhagic)'],
      signs: ['Facial droop', 'Arm drift', 'Speech abnormalities', 'NIHSS assessment'],
      conditions: ['Ischemic stroke', 'Hemorrhagic stroke', 'TIA'],
      diagnosticTests: ['CT head (rule out hemorrhage)', 'MRI brain', 'CT angiography', 'Carotid ultrasound'],
      treatmentPrinciples: ['Ischemic: tPA within window, thrombectomy', 'Hemorrhagic: BP control, reverse anticoagulation', 'Rehabilitation'],
    },
    {
      name: 'Epilepsy/Seizures',
      normalPhysiology: 'Neurons fire in coordinated patterns; inhibition balances excitation',
      pathophysiology: 'Abnormal excessive synchronous neuronal activity',
      symptoms: ['Convulsions', 'Loss of consciousness', 'Aura', 'Post-ictal confusion'],
      signs: ['Tonic-clonic movements', 'Automatisms', 'Incontinence', 'Tongue biting'],
      conditions: ['Focal seizures', 'Generalized seizures', 'Status epilepticus'],
      diagnosticTests: ['EEG', 'MRI brain', 'Video EEG monitoring'],
      treatmentPrinciples: ['Antiepileptic drugs (levetiracetam, valproate, etc.)', 'Surgery for refractory cases', 'Lifestyle modifications'],
    },
    {
      name: 'Parkinson Disease',
      normalPhysiology: 'Basal ganglia modulate movement initiation and smoothness',
      pathophysiology: 'Loss of dopaminergic neurons in substantia nigra; Lewy body accumulation',
      symptoms: ['Tremor (rest)', 'Slowness (bradykinesia)', 'Stiffness', 'Balance problems'],
      signs: ['Resting tremor', 'Cogwheel rigidity', 'Shuffling gait', 'Masked facies'],
      conditions: ['Idiopathic Parkinson disease', 'Parkinson-plus syndromes'],
      diagnosticTests: ['Clinical diagnosis', 'DaTscan', 'Response to levodopa'],
      treatmentPrinciples: ['Levodopa/carbidopa', 'Dopamine agonists', 'MAO-B inhibitors', 'Deep brain stimulation'],
    },
    {
      name: 'Multiple Sclerosis',
      normalPhysiology: 'Myelin insulates axons for rapid signal conduction',
      pathophysiology: 'Autoimmune demyelination in CNS; inflammation and neurodegeneration',
      symptoms: ['Vision problems (optic neuritis)', 'Weakness', 'Sensory changes', 'Fatigue'],
      signs: ['Internuclear ophthalmoplegia', 'Lhermitte sign', 'Spasticity', 'Hyperreflexia'],
      conditions: ['Relapsing-remitting MS', 'Secondary progressive MS', 'Primary progressive MS'],
      diagnosticTests: ['MRI brain/spine (periventricular lesions)', 'CSF (oligoclonal bands)', 'Evoked potentials'],
      treatmentPrinciples: ['Disease-modifying therapies', 'Steroids for acute relapses', 'Symptomatic treatment'],
    },
  ],

  normalParameters: [
    {
      name: 'Glasgow Coma Scale (GCS)',
      normalRange: '15',
      unit: 'points',
      significance: 'Standardized assessment of consciousness level',
      highImplications: '15 is fully alert and oriented',
      lowImplications: '3 is completely unresponsive; <8 indicates severe impairment, may need airway protection',
      factorsAffecting: ['Brain injury', 'Intoxication', 'Metabolic encephalopathy', 'Sedation'],
    },
    {
      name: 'Pupil Response',
      normalRange: 'Equal, round, reactive to light',
      unit: 'N/A',
      significance: 'Reflects brainstem function and intracranial pressure',
      highImplications: 'N/A',
      lowImplications: 'Fixed dilated pupils suggest severe brain injury or herniation',
      factorsAffecting: ['Medications (opioids constrict, anticholinergics dilate)', 'Brain injury', 'Eye disease'],
    },
    {
      name: 'Deep Tendon Reflexes',
      normalRange: '2+',
      unit: 'scale 0-4',
      significance: 'Tests integrity of reflex arc and upper/lower motor neuron function',
      highImplications: 'Hyperreflexia (3-4+) suggests upper motor neuron lesion',
      lowImplications: 'Hyporeflexia (0-1+) suggests lower motor neuron lesion or neuropathy',
      factorsAffecting: ['Anxiety', 'Thyroid disease', 'Medications', 'Technique'],
    },
  ],

  commonConditions: [
    'Stroke',
    'Epilepsy',
    'Parkinson disease',
    'Multiple sclerosis',
    'Alzheimer disease',
    'Migraine',
    'Peripheral neuropathy',
    'Bell palsy',
    'Meningitis',
    'Brain tumor',
  ],

  visualizations: [
    {
      id: 'action-potential-animation',
      type: 'animation',
      name: 'Action Potential Animation',
      description: 'Step-by-step visualization of ion channel activity during an action potential',
      conceptsCovered: ['Resting potential', 'Threshold', 'Na+ influx', 'K+ efflux', 'Refractory period'],
    },
    {
      id: 'synapse-transmission',
      type: 'animation',
      name: 'Synaptic Transmission Animation',
      description: 'Visualization of neurotransmitter release, receptor binding, and signal termination',
      conceptsCovered: ['Vesicle fusion', 'Neurotransmitter release', 'Receptor types', 'Reuptake'],
    },
  ],
};

// ============================================
// Digestive System
// ============================================

export const DIGESTIVE_SYSTEM: BodySystem = {
  id: 'digestive',
  name: 'Digestive System',
  overview: `The digestive system breaks down food into nutrients the body can absorb and use for energy, growth, and repair. It's a ~30-foot tube from mouth to anus, with specialized organs at each stage. The GI tract also houses most of the body's immune tissue and the enteric nervous system (sometimes called the "second brain" with ~500 million neurons). Understanding digestion is crucial because GI complaints are among the most common in medicine.`,

  functions: [
    {
      name: 'Mechanical Digestion',
      description: 'Physical breakdown of food into smaller pieces',
      importance: 'essential',
      mechanismSummary: 'Teeth chew food; stomach churns; intestines mix contents. Increases surface area for enzymatic action.',
    },
    {
      name: 'Chemical Digestion',
      description: 'Enzymatic breakdown of macronutrients into absorbable units',
      importance: 'vital',
      mechanismSummary: 'Enzymes hydrolyze carbohydrates → sugars, proteins → amino acids, fats → fatty acids and glycerol.',
    },
    {
      name: 'Absorption',
      description: 'Transfer of nutrients from GI lumen into blood/lymph',
      importance: 'vital',
      mechanismSummary: 'Primarily in small intestine. Villi and microvilli maximize surface area (~250m²). Active and passive transport.',
    },
    {
      name: 'Secretion',
      description: 'Release of digestive juices, enzymes, and hormones',
      importance: 'essential',
      mechanismSummary: 'Salivary glands, stomach, pancreas, liver, and intestines secrete substances needed for digestion.',
    },
    {
      name: 'Motility',
      description: 'Movement of contents through the GI tract',
      importance: 'essential',
      mechanismSummary: 'Peristalsis propels food; segmentation mixes it. Controlled by enteric nervous system and hormones.',
    },
    {
      name: 'Elimination',
      description: 'Excretion of indigestible material and waste',
      importance: 'essential',
      mechanismSummary: 'Colon absorbs water; forms and stores feces; defecation eliminates waste.',
    },
  ],

  organs: [
    {
      name: 'Mouth and Pharynx',
      description: 'Entry point; mechanical and initial chemical digestion',
      functions: ['Mastication (chewing)', 'Salivary amylase begins starch digestion', 'Swallowing initiation'],
      location: 'Head and neck',
      clinicalNotes: 'Dry mouth affects digestion and dental health. Dysphagia (swallowing difficulty) common in neurological disease.',
    },
    {
      name: 'Esophagus',
      description: 'Muscular tube conducting food from pharynx to stomach',
      functions: ['Peristaltic transport', 'Lower esophageal sphincter prevents reflux'],
      location: 'From pharynx through thorax to stomach',
      microanatomy: [
        {
          structure: 'Stratified squamous epithelium',
          function: 'Protects against abrasion',
        },
        {
          structure: 'Muscularis',
          function: 'Skeletal (upper) → smooth (lower) muscle for peristalsis',
        },
      ],
      clinicalNotes: 'GERD: LES dysfunction allows acid reflux. Barrett esophagus: metaplasia from chronic acid exposure, cancer risk.',
    },
    {
      name: 'Stomach',
      description: 'Reservoir for food; acidic environment for protein digestion',
      functions: ['Store food', 'Mix with gastric juice', 'Begin protein digestion', 'Regulate emptying'],
      location: 'Left upper quadrant, below diaphragm',
      bloodSupply: 'Celiac trunk branches',
      microanatomy: [
        {
          structure: 'Parietal cells',
          function: 'Secrete HCl and intrinsic factor',
          cellTypes: ['Parietal cells'],
        },
        {
          structure: 'Chief cells',
          function: 'Secrete pepsinogen',
          cellTypes: ['Chief cells'],
        },
        {
          structure: 'G cells',
          function: 'Secrete gastrin',
          cellTypes: ['G cells'],
        },
        {
          structure: 'Mucous cells',
          function: 'Secrete protective mucus barrier',
          cellTypes: ['Mucous neck cells'],
        },
      ],
      clinicalNotes: 'Stomach pH ~1-2. PPIs reduce acid secretion. H. pylori causes ulcers. Intrinsic factor needed for B12 absorption.',
    },
    {
      name: 'Small Intestine',
      description: 'Primary site of digestion and absorption (~20 feet)',
      functions: ['Complete digestion', 'Absorb nutrients', 'Immune surveillance'],
      location: 'Central abdomen',
      bloodSupply: 'Superior mesenteric artery',
      microanatomy: [
        {
          structure: 'Duodenum',
          function: 'Receives bile and pancreatic enzymes; iron/calcium absorption',
        },
        {
          structure: 'Jejunum',
          function: 'Major site of nutrient absorption',
        },
        {
          structure: 'Ileum',
          function: 'B12 and bile salt absorption; Peyer patches for immunity',
        },
        {
          structure: 'Villi and microvilli',
          function: 'Increase surface area 600-fold for absorption',
          cellTypes: ['Enterocytes', 'Goblet cells', 'Paneth cells'],
        },
      ],
      clinicalNotes: 'Celiac disease damages villi. Short bowel syndrome after resection. Crohn commonly affects terminal ileum.',
    },
    {
      name: 'Large Intestine (Colon)',
      description: 'Absorbs water and electrolytes; forms and stores feces',
      functions: ['Water/electrolyte absorption', 'Feces formation', 'Host gut microbiome', 'Vitamin K synthesis'],
      location: 'Frames small intestine (ascending, transverse, descending, sigmoid)',
      bloodSupply: 'Superior and inferior mesenteric arteries',
      microanatomy: [
        {
          structure: 'Colonic epithelium',
          function: 'Absorptive cells and mucus-secreting goblet cells',
          cellTypes: ['Colonocytes', 'Goblet cells'],
        },
        {
          structure: 'Haustra',
          function: 'Segmented pouches for mixing and absorption',
        },
        {
          structure: 'Microbiome',
          function: '~100 trillion bacteria; fermentation, vitamin synthesis, immunity',
        },
      ],
      clinicalNotes: 'Diverticulosis common with age. Colon cancer second leading cancer death. Colonoscopy for screening.',
    },
    {
      name: 'Liver',
      description: 'Metabolic powerhouse; produces bile; processes absorbed nutrients',
      functions: ['Bile production', 'Metabolism of nutrients/drugs/toxins', 'Protein synthesis', 'Storage (glycogen, vitamins)'],
      location: 'Right upper quadrant',
      bloodSupply: 'Dual: hepatic artery (oxygenated) + portal vein (nutrient-rich from GI)',
      microanatomy: [
        {
          structure: 'Hepatocytes',
          function: 'Main functional cells; metabolism, bile, protein synthesis',
          cellTypes: ['Hepatocytes'],
        },
        {
          structure: 'Sinusoids',
          function: 'Allow exchange between blood and hepatocytes',
        },
        {
          structure: 'Kupffer cells',
          function: 'Resident macrophages; filter bacteria from portal blood',
          cellTypes: ['Kupffer cells'],
        },
      ],
      clinicalNotes: 'Only organ that can regenerate significantly. Cirrhosis: irreversible scarring. Hepatitis: viral, alcoholic, autoimmune.',
    },
    {
      name: 'Pancreas',
      description: 'Exocrine (digestive enzymes) and endocrine (insulin/glucagon) organ',
      functions: ['Secrete digestive enzymes', 'Secrete bicarbonate to neutralize stomach acid', 'Produce insulin/glucagon'],
      location: 'Retroperitoneal, behind stomach',
      bloodSupply: 'Splenic and pancreaticoduodenal arteries',
      microanatomy: [
        {
          structure: 'Acinar cells',
          function: 'Produce digestive enzymes (amylase, lipase, proteases)',
          cellTypes: ['Acinar cells'],
        },
        {
          structure: 'Ductal cells',
          function: 'Secrete bicarbonate-rich fluid',
          cellTypes: ['Ductal epithelial cells'],
        },
        {
          structure: 'Islets of Langerhans',
          function: 'Endocrine: beta cells (insulin), alpha cells (glucagon)',
          cellTypes: ['Beta cells', 'Alpha cells', 'Delta cells'],
        },
      ],
      clinicalNotes: 'Pancreatitis: enzyme autodigestion (alcohol, gallstones). Pancreatic cancer: poor prognosis. Diabetes: islet dysfunction.',
    },
  ],

  processes: [
    {
      id: 'digestion-absorption',
      name: 'Digestion and Absorption',
      system: 'digestive',
      category: 'metabolism',
      overview: 'The process of breaking down macronutrients into absorbable molecules and transporting them into the body. Each macronutrient (carbohydrates, proteins, fats) has specific enzymes and absorption mechanisms.',
      steps: [
        {
          order: 1,
          name: 'Oral Phase',
          description: 'Mechanical breakdown by teeth; salivary amylase begins starch digestion',
          duration: 'Variable (chewing time)',
          location: 'Mouth',
          results: ['Food bolus formed', '~5% starch digested'],
        },
        {
          order: 2,
          name: 'Gastric Phase',
          description: 'Protein digestion begins; food mixed with HCl and pepsin',
          duration: '2-6 hours',
          location: 'Stomach',
          triggers: ['Food in stomach stimulates gastrin release'],
          results: ['Chyme formed', 'Proteins partially hydrolyzed', 'Fat emulsified'],
        },
        {
          order: 3,
          name: 'Duodenal Phase',
          description: 'Pancreatic enzymes and bile enter; most digestion occurs',
          duration: '3-5 hours total small intestine',
          location: 'Duodenum',
          triggers: ['CCK and secretin release', 'Acidic chyme'],
          results: ['Bile emulsifies fat', 'Pancreatic enzymes digest all macronutrients', 'pH neutralized'],
        },
        {
          order: 4,
          name: 'Absorption Phase',
          description: 'Nutrients absorbed across intestinal epithelium',
          duration: 'Throughout small intestine transit',
          location: 'Jejunum (most nutrients), Ileum (B12, bile salts)',
          results: ['Sugars and amino acids to portal blood', 'Fats to lymphatics as chylomicrons'],
        },
        {
          order: 5,
          name: 'Colonic Phase',
          description: 'Water and electrolyte absorption; bacterial fermentation',
          duration: '12-36 hours',
          location: 'Colon',
          results: ['~1.5L water absorbed', 'Feces formed', 'Short-chain fatty acids produced'],
        },
      ],
      keyMolecules: [
        {
          name: 'Amylase',
          type: 'enzyme',
          role: 'Breaks starch into maltose and dextrins',
          clinicalSignificance: 'Elevated in pancreatitis; salivary and pancreatic forms',
        },
        {
          name: 'Lipase',
          type: 'enzyme',
          role: 'Breaks triglycerides into fatty acids and monoglycerides',
          clinicalSignificance: 'Elevated in pancreatitis; requires bile for substrate access',
        },
        {
          name: 'Pepsin',
          type: 'enzyme',
          role: 'Begins protein digestion in stomach',
          clinicalSignificance: 'Active only in acidic environment; PPIs reduce its function',
        },
        {
          name: 'Bile',
          type: 'other',
          role: 'Emulsifies fats for lipase action',
          clinicalSignificance: 'Gallstones block bile flow; malabsorption of fat-soluble vitamins',
        },
      ],
      regulation: [
        {
          name: 'Gastrin',
          type: 'hormonal',
          description: 'Stimulates gastric acid secretion',
          mediators: ['Gastrin from G cells'],
          effect: 'stimulates',
          clinicalApplications: ['Gastrinoma causes excessive acid', 'PPIs increase gastrin levels'],
        },
        {
          name: 'CCK (Cholecystokinin)',
          type: 'hormonal',
          description: 'Stimulates gallbladder contraction and pancreatic enzyme release',
          mediators: ['CCK from I cells'],
          effect: 'stimulates',
          clinicalApplications: ['Released by fat and protein', 'Causes satiety'],
        },
        {
          name: 'Secretin',
          type: 'hormonal',
          description: 'Stimulates pancreatic bicarbonate secretion',
          mediators: ['Secretin from S cells'],
          effect: 'stimulates',
          clinicalApplications: ['Released by acid in duodenum', 'Neutralizes gastric acid'],
        },
      ],
      dysfunction: [
        {
          name: 'Malabsorption',
          mechanism: 'Impaired nutrient absorption from various causes',
          consequences: ['Diarrhea', 'Weight loss', 'Vitamin deficiencies'],
          clinicalPresentation: 'Steatorrhea, bloating, weight loss',
          associatedConditions: ['Celiac disease', 'Chronic pancreatitis', 'Crohn disease', 'Bacterial overgrowth'],
        },
        {
          name: 'Gastroparesis',
          mechanism: 'Delayed gastric emptying without obstruction',
          consequences: ['Food retention', 'Early satiety', 'Erratic glucose absorption'],
          clinicalPresentation: 'Nausea, vomiting, bloating, poor glucose control',
          associatedConditions: ['Diabetes', 'Post-surgical', 'Idiopathic'],
        },
      ],
      clinicalRelevance: [
        'Understanding absorption sites predicts deficiencies after bowel resection',
        'Pancreatic enzyme replacement for exocrine insufficiency',
        'Fat malabsorption causes fat-soluble vitamin (A, D, E, K) deficiency',
        'Gluten triggers immune response in celiac disease',
      ],
      relatedProcesses: ['hepatic-metabolism', 'glucose-regulation'],
      complexity: 'intermediate',
    },
  ],

  homeostasis: [
    {
      id: 'gi-motility-regulation',
      name: 'GI Motility Regulation',
      type: 'negative-feedback',
      regulatedVariable: 'Transit time and mixing',
      normalRange: 'Variable by segment',
      unit: 'N/A',
      sensor: {
        name: 'Mechanoreceptors and chemoreceptors',
        location: 'Throughout GI wall',
        mechanism: 'Detect stretch, nutrients, pH, osmolarity',
      },
      controlCenter: {
        name: 'Enteric nervous system and CNS',
        location: 'GI wall plexuses (Auerbach, Meissner) + vagus, spinal',
        mechanism: 'Local reflexes and CNS input modulate motility',
      },
      effector: {
        name: 'GI smooth muscle',
        location: 'Throughout GI tract',
        mechanism: 'Peristalsis, segmentation, sphincter function',
      },
      responseToIncrease: 'Food bolus stretches wall → reflex peristalsis → propulsion',
      responseToDecrease: 'Between meals → migrating motor complex (housekeeping waves)',
      dysfunctionExamples: [
        'Ileus: absent motility post-surgery',
        'IBS: altered motility and sensation',
        'Hirschsprung disease: absent ganglion cells',
      ],
    },
  ],

  systemInteractions: [
    {
      targetSystem: 'nervous',
      interactionType: 'depends-on',
      description: 'Enteric nervous system plus autonomic regulation controls GI function',
      mechanisms: ['Parasympathetic stimulates motility/secretion', 'Sympathetic inhibits', 'Brain-gut axis'],
      clinicalImplications: 'Stress affects GI; IBS has strong psychological component',
    },
    {
      targetSystem: 'endocrine',
      interactionType: 'supports',
      description: 'GI hormones regulate digestion; pancreas links digestive and metabolic function',
      mechanisms: ['GI hormones (gastrin, CCK, secretin)', 'Incretin effect on insulin', 'Nutrient sensing'],
      clinicalImplications: 'GLP-1 agonists for diabetes; bariatric surgery affects hormones',
    },
    {
      targetSystem: 'immune',
      interactionType: 'supports',
      description: 'GI tract contains most of body immune tissue (GALT)',
      mechanisms: ['Peyer patches', 'Secretory IgA', 'Microbiome-immune interaction'],
      clinicalImplications: 'IBD is immune-mediated; food allergies; oral tolerance',
    },
  ],

  clinicalCorrelations: [
    {
      name: 'GERD (Gastroesophageal Reflux Disease)',
      normalPhysiology: 'LES prevents stomach contents from refluxing into esophagus',
      pathophysiology: 'LES dysfunction or transient relaxations allow acid reflux',
      symptoms: ['Heartburn', 'Regurgitation', 'Chest pain', 'Chronic cough'],
      signs: ['Normal exam often', 'Dental erosions', 'Laryngitis'],
      conditions: ['GERD', 'Barrett esophagus', 'Esophageal stricture'],
      diagnosticTests: ['Clinical diagnosis', 'EGD if alarm features', 'pH monitoring', 'Manometry'],
      treatmentPrinciples: ['Lifestyle modifications', 'PPIs', 'H2 blockers', 'Surgery (fundoplication) if refractory'],
    },
    {
      name: 'Peptic Ulcer Disease',
      normalPhysiology: 'Mucosal defenses protect against gastric acid',
      pathophysiology: 'Imbalance between acid/pepsin and mucosal protection (H. pylori, NSAIDs)',
      symptoms: ['Epigastric pain', 'Nausea', 'Bloating', 'GI bleeding if severe'],
      signs: ['Epigastric tenderness', 'Melena or hematemesis if bleeding'],
      conditions: ['Gastric ulcer', 'Duodenal ulcer', 'H. pylori gastritis'],
      diagnosticTests: ['EGD', 'H. pylori testing (urea breath, stool antigen, biopsy)'],
      treatmentPrinciples: ['PPI', 'H. pylori eradication if positive', 'Stop NSAIDs', 'Endoscopic hemostasis if bleeding'],
    },
    {
      name: 'Inflammatory Bowel Disease',
      normalPhysiology: 'Intestinal immune tolerance prevents inflammation against gut contents',
      pathophysiology: 'Dysregulated immune response to gut microbiome in genetically susceptible hosts',
      symptoms: ['Diarrhea (bloody in UC)', 'Abdominal pain', 'Weight loss', 'Fatigue'],
      signs: ['Abdominal tenderness', 'Perianal disease (Crohn)', 'Extraintestinal manifestations'],
      conditions: ['Ulcerative colitis', 'Crohn disease'],
      diagnosticTests: ['Colonoscopy with biopsy', 'CT/MR enterography', 'Fecal calprotectin', 'Labs (anemia, CRP)'],
      treatmentPrinciples: ['5-ASA (UC)', 'Steroids for flares', 'Immunomodulators', 'Biologics (anti-TNF, etc.)', 'Surgery if refractory'],
    },
  ],

  normalParameters: [
    {
      name: 'Bowel Movement Frequency',
      normalRange: '3/day to 3/week',
      unit: 'bowel movements',
      significance: 'Wide normal range; change from baseline more important',
      highImplications: '>3/day may indicate diarrhea or IBS-D',
      lowImplications: '<3/week may indicate constipation',
      factorsAffecting: ['Diet (fiber, fluid)', 'Activity', 'Medications', 'Age'],
    },
    {
      name: 'Gastric Emptying Time',
      normalRange: '50% emptied in 2 hours',
      unit: 'hours',
      significance: 'Tested with gastric emptying study',
      highImplications: 'N/A',
      lowImplications: 'Delayed emptying = gastroparesis',
      factorsAffecting: ['Meal composition (fat slows)', 'Diabetes', 'Medications', 'Surgery'],
    },
  ],

  commonConditions: [
    'GERD',
    'Peptic ulcer disease',
    'IBS (Irritable bowel syndrome)',
    'Inflammatory bowel disease',
    'Celiac disease',
    'Diverticular disease',
    'Gallstones',
    'Pancreatitis',
    'Hepatitis',
    'Cirrhosis',
    'Colorectal cancer',
  ],

  visualizations: [],
};

// ============================================
// All Body Systems Collection
// ============================================

export const BODY_SYSTEMS: Record<BodySystemId, BodySystem> = {
  cardiovascular: CARDIOVASCULAR_SYSTEM,
  respiratory: RESPIRATORY_SYSTEM,
  nervous: NERVOUS_SYSTEM,
  digestive: DIGESTIVE_SYSTEM,
  // Placeholder for other systems - to be expanded
  endocrine: createPlaceholderSystem('endocrine', 'Endocrine System'),
  urinary: createPlaceholderSystem('urinary', 'Urinary System'),
  musculoskeletal: createPlaceholderSystem('musculoskeletal', 'Musculoskeletal System'),
  immune: createPlaceholderSystem('immune', 'Immune System'),
  integumentary: createPlaceholderSystem('integumentary', 'Integumentary System'),
  reproductive: createPlaceholderSystem('reproductive', 'Reproductive System'),
  lymphatic: createPlaceholderSystem('lymphatic', 'Lymphatic System'),
  hematologic: createPlaceholderSystem('hematologic', 'Hematologic System'),
};

function createPlaceholderSystem(id: BodySystemId, name: string): BodySystem {
  return {
    id,
    name,
    overview: `Comprehensive education for the ${name} coming soon.`,
    functions: [],
    organs: [],
    processes: [],
    homeostasis: [],
    systemInteractions: [],
    clinicalCorrelations: [],
    normalParameters: [],
    commonConditions: [],
    visualizations: [],
  };
}

// ============================================
// Helper Functions
// ============================================

export function getBodySystem(id: BodySystemId): BodySystem {
  return BODY_SYSTEMS[id];
}

export function getAllBodySystems(): BodySystem[] {
  return Object.values(BODY_SYSTEMS);
}

export function getSystemInteractions(systemId: BodySystemId): SystemInteraction[] {
  const system = BODY_SYSTEMS[systemId];
  return system?.systemInteractions || [];
}

export function getProcessById(processId: string): PhysiologicalProcess | undefined {
  for (const system of Object.values(BODY_SYSTEMS)) {
    const process = system.processes.find(p => p.id === processId);
    if (process) return process;
  }
  return undefined;
}

// Import for type
type SystemInteraction = BodySystem['systemInteractions'][0];
