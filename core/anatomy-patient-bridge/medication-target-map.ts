/**
 * Medication-to-Target Organ Mapping
 *
 * Maps 50+ common medications to their primary and secondary target organs.
 * Used to bridge medication information with anatomical visualization and patient education.
 */

export interface MedicationTargetMapping {
  medicationName: string;
  drugClass: string;
  rxNormCode?: string;
  primaryTargets: {
    organ: string;
    regionId: string;
    effect: string;
  }[];
  secondaryTargets?: {
    organ: string;
    regionId: string;
    effect: string;
  }[];
}

export const MEDICATION_TARGET_MAP: Record<string, MedicationTargetMapping> = {
  // ============================================
  // Cardiovascular - Beta Blockers (4 medications)
  // ============================================
  'metoprolol': {
    medicationName: 'Metoprolol',
    drugClass: 'beta-blocker',
    rxNormCode: '6918',
    primaryTargets: [
      {
        organ: 'heart',
        regionId: 'body.torso.thorax.heart',
        effect: 'Slows heart rate and reduces blood pressure by blocking beta-1 receptors',
      },
    ],
    secondaryTargets: [
      {
        organ: 'kidneys',
        regionId: 'body.torso.abdomen.kidneys',
        effect: 'Reduces renin release',
      },
    ],
  },
  'atenolol': {
    medicationName: 'Atenolol',
    drugClass: 'beta-blocker',
    rxNormCode: '1202',
    primaryTargets: [
      {
        organ: 'heart',
        regionId: 'body.torso.thorax.heart',
        effect: 'Slows heart rate and reduces cardiac workload',
      },
    ],
    secondaryTargets: [
      {
        organ: 'kidneys',
        regionId: 'body.torso.abdomen.kidneys',
        effect: 'Reduces renin secretion',
      },
    ],
  },
  'carvedilol': {
    medicationName: 'Carvedilol',
    drugClass: 'beta-blocker',
    rxNormCode: '20352',
    primaryTargets: [
      {
        organ: 'heart',
        regionId: 'body.torso.thorax.heart',
        effect: 'Reduces heart rate and blood pressure; also blocks alpha receptors',
      },
    ],
    secondaryTargets: [
      {
        organ: 'blood-vessels',
        regionId: 'body.circulatory.arteries',
        effect: 'Causes vasodilation through alpha-blockade',
      },
    ],
  },
  'propranolol': {
    medicationName: 'Propranolol',
    drugClass: 'beta-blocker',
    rxNormCode: '8787',
    primaryTargets: [
      {
        organ: 'heart',
        regionId: 'body.torso.thorax.heart',
        effect: 'Slows heart rate; non-selective beta-blocker',
      },
    ],
    secondaryTargets: [
      {
        organ: 'brain',
        regionId: 'body.head.brain',
        effect: 'Reduces anxiety symptoms and migraine prevention',
      },
      {
        organ: 'thyroid',
        regionId: 'body.neck.thyroid',
        effect: 'Reduces symptoms of hyperthyroidism',
      },
    ],
  },

  // ============================================
  // Cardiovascular - ACE Inhibitors (4 medications)
  // ============================================
  'lisinopril': {
    medicationName: 'Lisinopril',
    drugClass: 'ACE-inhibitor',
    rxNormCode: '29046',
    primaryTargets: [
      {
        organ: 'blood-vessels',
        regionId: 'body.circulatory.arteries',
        effect: 'Relaxes blood vessels by blocking ACE, lowering blood pressure',
      },
    ],
    secondaryTargets: [
      {
        organ: 'kidneys',
        regionId: 'body.torso.abdomen.kidneys',
        effect: 'Protects kidneys, especially in diabetes; reduces protein in urine',
      },
      {
        organ: 'heart',
        regionId: 'body.torso.thorax.heart',
        effect: 'Reduces cardiac remodeling in heart failure',
      },
    ],
  },
  'enalapril': {
    medicationName: 'Enalapril',
    drugClass: 'ACE-inhibitor',
    rxNormCode: '3827',
    primaryTargets: [
      {
        organ: 'blood-vessels',
        regionId: 'body.circulatory.arteries',
        effect: 'Reduces blood pressure by inhibiting angiotensin-converting enzyme',
      },
    ],
    secondaryTargets: [
      {
        organ: 'heart',
        regionId: 'body.torso.thorax.heart',
        effect: 'Improves cardiac function in heart failure',
      },
    ],
  },
  'ramipril': {
    medicationName: 'Ramipril',
    drugClass: 'ACE-inhibitor',
    rxNormCode: '35296',
    primaryTargets: [
      {
        organ: 'blood-vessels',
        regionId: 'body.circulatory.arteries',
        effect: 'Lowers blood pressure; provides cardiovascular protection',
      },
    ],
    secondaryTargets: [
      {
        organ: 'kidneys',
        regionId: 'body.torso.abdomen.kidneys',
        effect: 'Renal protection in diabetic nephropathy',
      },
    ],
  },
  'benazepril': {
    medicationName: 'Benazepril',
    drugClass: 'ACE-inhibitor',
    rxNormCode: '18867',
    primaryTargets: [
      {
        organ: 'blood-vessels',
        regionId: 'body.circulatory.arteries',
        effect: 'Reduces blood pressure by ACE inhibition',
      },
    ],
    secondaryTargets: [
      {
        organ: 'kidneys',
        regionId: 'body.torso.abdomen.kidneys',
        effect: 'Nephroprotective effects',
      },
    ],
  },

  // ============================================
  // Cardiovascular - ARBs (3 medications)
  // ============================================
  'losartan': {
    medicationName: 'Losartan',
    drugClass: 'ARB',
    rxNormCode: '52175',
    primaryTargets: [
      {
        organ: 'blood-vessels',
        regionId: 'body.circulatory.arteries',
        effect: 'Blocks angiotensin II receptors to lower blood pressure',
      },
    ],
    secondaryTargets: [
      {
        organ: 'kidneys',
        regionId: 'body.torso.abdomen.kidneys',
        effect: 'Protects kidneys in diabetic nephropathy',
      },
    ],
  },
  'valsartan': {
    medicationName: 'Valsartan',
    drugClass: 'ARB',
    rxNormCode: '69749',
    primaryTargets: [
      {
        organ: 'blood-vessels',
        regionId: 'body.circulatory.arteries',
        effect: 'Angiotensin receptor blocker for blood pressure control',
      },
    ],
    secondaryTargets: [
      {
        organ: 'heart',
        regionId: 'body.torso.thorax.heart',
        effect: 'Used in heart failure management',
      },
    ],
  },
  'irbesartan': {
    medicationName: 'Irbesartan',
    drugClass: 'ARB',
    rxNormCode: '83818',
    primaryTargets: [
      {
        organ: 'blood-vessels',
        regionId: 'body.circulatory.arteries',
        effect: 'Blocks AT1 receptors to reduce blood pressure',
      },
    ],
    secondaryTargets: [
      {
        organ: 'kidneys',
        regionId: 'body.torso.abdomen.kidneys',
        effect: 'Nephroprotection in type 2 diabetes',
      },
    ],
  },

  // ============================================
  // Cardiovascular - Calcium Channel Blockers (3 medications)
  // ============================================
  'amlodipine': {
    medicationName: 'Amlodipine',
    drugClass: 'calcium-channel-blocker',
    rxNormCode: '17767',
    primaryTargets: [
      {
        organ: 'blood-vessels',
        regionId: 'body.circulatory.arteries',
        effect: 'Relaxes blood vessels by blocking calcium channels',
      },
    ],
    secondaryTargets: [
      {
        organ: 'heart',
        regionId: 'body.torso.thorax.heart',
        effect: 'Reduces cardiac workload; used in angina',
      },
    ],
  },
  'diltiazem': {
    medicationName: 'Diltiazem',
    drugClass: 'calcium-channel-blocker',
    rxNormCode: '3443',
    primaryTargets: [
      {
        organ: 'heart',
        regionId: 'body.torso.thorax.heart',
        effect: 'Slows heart rate and reduces blood pressure',
      },
      {
        organ: 'blood-vessels',
        regionId: 'body.circulatory.arteries',
        effect: 'Causes vasodilation',
      },
    ],
  },
  'nifedipine': {
    medicationName: 'Nifedipine',
    drugClass: 'calcium-channel-blocker',
    rxNormCode: '7417',
    primaryTargets: [
      {
        organ: 'blood-vessels',
        regionId: 'body.circulatory.arteries',
        effect: 'Potent vasodilator; lowers blood pressure',
      },
    ],
    secondaryTargets: [
      {
        organ: 'heart',
        regionId: 'body.torso.thorax.heart',
        effect: 'Used in angina; reduces cardiac oxygen demand',
      },
    ],
  },

  // ============================================
  // Cardiovascular - Diuretics (4 medications)
  // ============================================
  'furosemide': {
    medicationName: 'Furosemide',
    drugClass: 'loop-diuretic',
    rxNormCode: '4603',
    primaryTargets: [
      {
        organ: 'kidneys',
        regionId: 'body.torso.abdomen.kidneys',
        effect: 'Blocks sodium reabsorption in loop of Henle; powerful diuretic',
      },
    ],
    secondaryTargets: [
      {
        organ: 'heart',
        regionId: 'body.torso.thorax.heart',
        effect: 'Reduces fluid overload in heart failure',
      },
      {
        organ: 'lungs',
        regionId: 'body.torso.thorax.lungs',
        effect: 'Reduces pulmonary edema',
      },
    ],
  },
  'hydrochlorothiazide': {
    medicationName: 'Hydrochlorothiazide',
    drugClass: 'thiazide-diuretic',
    rxNormCode: '5487',
    primaryTargets: [
      {
        organ: 'kidneys',
        regionId: 'body.torso.abdomen.kidneys',
        effect: 'Inhibits sodium reabsorption in distal tubule',
      },
    ],
    secondaryTargets: [
      {
        organ: 'blood-vessels',
        regionId: 'body.circulatory.arteries',
        effect: 'Long-term vasodilatory effect',
      },
    ],
  },
  'spironolactone': {
    medicationName: 'Spironolactone',
    drugClass: 'potassium-sparing-diuretic',
    rxNormCode: '9997',
    primaryTargets: [
      {
        organ: 'kidneys',
        regionId: 'body.torso.abdomen.kidneys',
        effect: 'Blocks aldosterone; potassium-sparing diuretic',
      },
    ],
    secondaryTargets: [
      {
        organ: 'heart',
        regionId: 'body.torso.thorax.heart',
        effect: 'Reduces cardiac remodeling in heart failure',
      },
    ],
  },
  'chlorthalidone': {
    medicationName: 'Chlorthalidone',
    drugClass: 'thiazide-like-diuretic',
    rxNormCode: '2409',
    primaryTargets: [
      {
        organ: 'kidneys',
        regionId: 'body.torso.abdomen.kidneys',
        effect: 'Long-acting thiazide-like diuretic',
      },
    ],
  },

  // ============================================
  // Cardiovascular - Statins (4 medications)
  // ============================================
  'atorvastatin': {
    medicationName: 'Atorvastatin',
    drugClass: 'HMG-CoA-reductase-inhibitor',
    rxNormCode: '83367',
    primaryTargets: [
      {
        organ: 'liver',
        regionId: 'body.torso.abdomen.liver',
        effect: 'Inhibits cholesterol synthesis; lowers LDL',
      },
    ],
    secondaryTargets: [
      {
        organ: 'blood-vessels',
        regionId: 'body.circulatory.arteries',
        effect: 'Stabilizes atherosclerotic plaques; anti-inflammatory effects',
      },
    ],
  },
  'simvastatin': {
    medicationName: 'Simvastatin',
    drugClass: 'HMG-CoA-reductase-inhibitor',
    rxNormCode: '36567',
    primaryTargets: [
      {
        organ: 'liver',
        regionId: 'body.torso.abdomen.liver',
        effect: 'Reduces hepatic cholesterol production',
      },
    ],
    secondaryTargets: [
      {
        organ: 'blood-vessels',
        regionId: 'body.circulatory.arteries',
        effect: 'Cardiovascular protection',
      },
    ],
  },
  'rosuvastatin': {
    medicationName: 'Rosuvastatin',
    drugClass: 'HMG-CoA-reductase-inhibitor',
    rxNormCode: '301542',
    primaryTargets: [
      {
        organ: 'liver',
        regionId: 'body.torso.abdomen.liver',
        effect: 'Potent inhibitor of cholesterol synthesis',
      },
    ],
  },
  'pravastatin': {
    medicationName: 'Pravastatin',
    drugClass: 'HMG-CoA-reductase-inhibitor',
    rxNormCode: '42463',
    primaryTargets: [
      {
        organ: 'liver',
        regionId: 'body.torso.abdomen.liver',
        effect: 'Lowers LDL cholesterol; hydrophilic statin',
      },
    ],
  },

  // ============================================
  // Diabetes Medications (6 medications)
  // ============================================
  'metformin': {
    medicationName: 'Metformin',
    drugClass: 'biguanide',
    rxNormCode: '6809',
    primaryTargets: [
      {
        organ: 'liver',
        regionId: 'body.torso.abdomen.liver',
        effect: 'Reduces hepatic glucose production',
      },
    ],
    secondaryTargets: [
      {
        organ: 'muscles',
        regionId: 'body.muscular.skeletal-muscle',
        effect: 'Improves insulin sensitivity in muscle tissue',
      },
      {
        organ: 'small-intestine',
        regionId: 'body.torso.abdomen.small-intestine',
        effect: 'Reduces glucose absorption',
      },
    ],
  },
  'glipizide': {
    medicationName: 'Glipizide',
    drugClass: 'sulfonylurea',
    rxNormCode: '4821',
    primaryTargets: [
      {
        organ: 'pancreas',
        regionId: 'body.torso.abdomen.pancreas',
        effect: 'Stimulates insulin release from beta cells',
      },
    ],
  },
  'glimepiride': {
    medicationName: 'Glimepiride',
    drugClass: 'sulfonylurea',
    rxNormCode: '25789',
    primaryTargets: [
      {
        organ: 'pancreas',
        regionId: 'body.torso.abdomen.pancreas',
        effect: 'Increases insulin secretion from pancreatic beta cells',
      },
    ],
  },
  'insulin-glargine': {
    medicationName: 'Insulin Glargine',
    drugClass: 'long-acting-insulin',
    rxNormCode: '274783',
    primaryTargets: [
      {
        organ: 'muscles',
        regionId: 'body.muscular.skeletal-muscle',
        effect: 'Facilitates glucose uptake into muscle cells',
      },
      {
        organ: 'liver',
        regionId: 'body.torso.abdomen.liver',
        effect: 'Suppresses hepatic glucose output',
      },
      {
        organ: 'adipose-tissue',
        regionId: 'body.torso.adipose',
        effect: 'Promotes glucose uptake and fat storage',
      },
    ],
  },
  'insulin-lispro': {
    medicationName: 'Insulin Lispro',
    drugClass: 'rapid-acting-insulin',
    rxNormCode: '86009',
    primaryTargets: [
      {
        organ: 'muscles',
        regionId: 'body.muscular.skeletal-muscle',
        effect: 'Rapid glucose uptake into cells',
      },
      {
        organ: 'liver',
        regionId: 'body.torso.abdomen.liver',
        effect: 'Rapid suppression of glucose production',
      },
    ],
  },
  'sitagliptin': {
    medicationName: 'Sitagliptin',
    drugClass: 'DPP-4-inhibitor',
    rxNormCode: '593411',
    primaryTargets: [
      {
        organ: 'pancreas',
        regionId: 'body.torso.abdomen.pancreas',
        effect: 'Increases incretin levels to enhance insulin release',
      },
    ],
    secondaryTargets: [
      {
        organ: 'stomach',
        regionId: 'body.torso.abdomen.stomach',
        effect: 'Slows gastric emptying',
      },
    ],
  },
  'empagliflozin': {
    medicationName: 'Empagliflozin',
    drugClass: 'SGLT2-inhibitor',
    rxNormCode: '1545653',
    primaryTargets: [
      {
        organ: 'kidneys',
        regionId: 'body.torso.abdomen.kidneys',
        effect: 'Blocks glucose reabsorption; increases urinary glucose excretion',
      },
    ],
    secondaryTargets: [
      {
        organ: 'heart',
        regionId: 'body.torso.thorax.heart',
        effect: 'Cardiovascular and heart failure benefits',
      },
    ],
  },
  'semaglutide': {
    medicationName: 'Semaglutide',
    drugClass: 'GLP-1-receptor-agonist',
    rxNormCode: '1991302',
    primaryTargets: [
      {
        organ: 'pancreas',
        regionId: 'body.torso.abdomen.pancreas',
        effect: 'Stimulates glucose-dependent insulin release',
      },
    ],
    secondaryTargets: [
      {
        organ: 'brain',
        regionId: 'body.head.brain',
        effect: 'Reduces appetite through hypothalamic effects',
      },
      {
        organ: 'stomach',
        regionId: 'body.torso.abdomen.stomach',
        effect: 'Slows gastric emptying',
      },
    ],
  },

  // ============================================
  // Respiratory Medications (5 medications)
  // ============================================
  'albuterol': {
    medicationName: 'Albuterol',
    drugClass: 'beta2-agonist',
    rxNormCode: '435',
    primaryTargets: [
      {
        organ: 'lungs',
        regionId: 'body.torso.thorax.lungs',
        effect: 'Relaxes bronchial smooth muscle; rapid bronchodilation',
      },
    ],
    secondaryTargets: [
      {
        organ: 'heart',
        regionId: 'body.torso.thorax.heart',
        effect: 'May cause increased heart rate',
      },
    ],
  },
  'fluticasone': {
    medicationName: 'Fluticasone',
    drugClass: 'inhaled-corticosteroid',
    rxNormCode: '41126',
    primaryTargets: [
      {
        organ: 'lungs',
        regionId: 'body.torso.thorax.lungs',
        effect: 'Reduces airway inflammation',
      },
    ],
  },
  'budesonide': {
    medicationName: 'Budesonide',
    drugClass: 'inhaled-corticosteroid',
    rxNormCode: '19831',
    primaryTargets: [
      {
        organ: 'lungs',
        regionId: 'body.torso.thorax.lungs',
        effect: 'Anti-inflammatory effect in airways',
      },
    ],
  },
  'tiotropium': {
    medicationName: 'Tiotropium',
    drugClass: 'anticholinergic-bronchodilator',
    rxNormCode: '274528',
    primaryTargets: [
      {
        organ: 'lungs',
        regionId: 'body.torso.thorax.lungs',
        effect: 'Long-acting bronchodilation by blocking muscarinic receptors',
      },
    ],
  },
  'montelukast': {
    medicationName: 'Montelukast',
    drugClass: 'leukotriene-receptor-antagonist',
    rxNormCode: '88249',
    primaryTargets: [
      {
        organ: 'lungs',
        regionId: 'body.torso.thorax.lungs',
        effect: 'Blocks leukotrienes to reduce inflammation and bronchoconstriction',
      },
    ],
  },

  // ============================================
  // Gastrointestinal Medications (5 medications)
  // ============================================
  'omeprazole': {
    medicationName: 'Omeprazole',
    drugClass: 'proton-pump-inhibitor',
    rxNormCode: '7646',
    primaryTargets: [
      {
        organ: 'stomach',
        regionId: 'body.torso.abdomen.stomach',
        effect: 'Blocks gastric acid secretion by inhibiting proton pumps',
      },
    ],
    secondaryTargets: [
      {
        organ: 'esophagus',
        regionId: 'body.torso.thorax.esophagus',
        effect: 'Allows healing of esophageal erosions in GERD',
      },
    ],
  },
  'pantoprazole': {
    medicationName: 'Pantoprazole',
    drugClass: 'proton-pump-inhibitor',
    rxNormCode: '40790',
    primaryTargets: [
      {
        organ: 'stomach',
        regionId: 'body.torso.abdomen.stomach',
        effect: 'Reduces gastric acid production',
      },
    ],
  },
  'famotidine': {
    medicationName: 'Famotidine',
    drugClass: 'H2-receptor-antagonist',
    rxNormCode: '4278',
    primaryTargets: [
      {
        organ: 'stomach',
        regionId: 'body.torso.abdomen.stomach',
        effect: 'Blocks histamine H2 receptors to reduce acid secretion',
      },
    ],
  },
  'ondansetron': {
    medicationName: 'Ondansetron',
    drugClass: '5-HT3-antagonist',
    rxNormCode: '26225',
    primaryTargets: [
      {
        organ: 'brain',
        regionId: 'body.head.brain',
        effect: 'Blocks serotonin receptors in vomiting center',
      },
    ],
    secondaryTargets: [
      {
        organ: 'small-intestine',
        regionId: 'body.torso.abdomen.small-intestine',
        effect: 'Blocks peripheral serotonin receptors',
      },
    ],
  },
  'dicyclomine': {
    medicationName: 'Dicyclomine',
    drugClass: 'antispasmodic',
    rxNormCode: '3356',
    primaryTargets: [
      {
        organ: 'large-intestine',
        regionId: 'body.torso.abdomen.large-intestine',
        effect: 'Relaxes smooth muscle; reduces intestinal spasms',
      },
    ],
  },

  // ============================================
  // Thyroid Medications (2 medications)
  // ============================================
  'levothyroxine': {
    medicationName: 'Levothyroxine',
    drugClass: 'thyroid-hormone',
    rxNormCode: '10582',
    primaryTargets: [
      {
        organ: 'thyroid',
        regionId: 'body.neck.thyroid',
        effect: 'Replaces or supplements thyroid hormone (T4)',
      },
    ],
    secondaryTargets: [
      {
        organ: 'heart',
        regionId: 'body.torso.thorax.heart',
        effect: 'Increases metabolic rate and cardiac output',
      },
      {
        organ: 'bones',
        regionId: 'body.skeletal.bones',
        effect: 'Affects bone metabolism',
      },
    ],
  },
  'methimazole': {
    medicationName: 'Methimazole',
    drugClass: 'antithyroid-agent',
    rxNormCode: '6835',
    primaryTargets: [
      {
        organ: 'thyroid',
        regionId: 'body.neck.thyroid',
        effect: 'Inhibits thyroid hormone synthesis',
      },
    ],
  },

  // ============================================
  // Pain/Inflammatory Medications (5 medications)
  // ============================================
  'ibuprofen': {
    medicationName: 'Ibuprofen',
    drugClass: 'NSAID',
    rxNormCode: '5640',
    primaryTargets: [
      {
        organ: 'whole-body',
        regionId: 'body',
        effect: 'Inhibits COX enzymes; reduces inflammation, pain, and fever',
      },
    ],
    secondaryTargets: [
      {
        organ: 'stomach',
        regionId: 'body.torso.abdomen.stomach',
        effect: 'May cause gastric irritation and ulcers',
      },
      {
        organ: 'kidneys',
        regionId: 'body.torso.abdomen.kidneys',
        effect: 'May affect renal function',
      },
    ],
  },
  'naproxen': {
    medicationName: 'Naproxen',
    drugClass: 'NSAID',
    rxNormCode: '7258',
    primaryTargets: [
      {
        organ: 'whole-body',
        regionId: 'body',
        effect: 'Long-acting NSAID for pain and inflammation',
      },
    ],
    secondaryTargets: [
      {
        organ: 'stomach',
        regionId: 'body.torso.abdomen.stomach',
        effect: 'GI side effects possible',
      },
    ],
  },
  'celecoxib': {
    medicationName: 'Celecoxib',
    drugClass: 'COX-2-inhibitor',
    rxNormCode: '140587',
    primaryTargets: [
      {
        organ: 'whole-body',
        regionId: 'body',
        effect: 'Selective COX-2 inhibition for pain with less GI effects',
      },
    ],
    secondaryTargets: [
      {
        organ: 'heart',
        regionId: 'body.torso.thorax.heart',
        effect: 'May increase cardiovascular risk',
      },
    ],
  },
  'acetaminophen': {
    medicationName: 'Acetaminophen',
    drugClass: 'analgesic-antipyretic',
    rxNormCode: '161',
    primaryTargets: [
      {
        organ: 'brain',
        regionId: 'body.head.brain',
        effect: 'Inhibits central prostaglandin synthesis; reduces pain and fever',
      },
    ],
    secondaryTargets: [
      {
        organ: 'liver',
        regionId: 'body.torso.abdomen.liver',
        effect: 'Metabolized by liver; can cause toxicity in overdose',
      },
    ],
  },
  'prednisone': {
    medicationName: 'Prednisone',
    drugClass: 'corticosteroid',
    rxNormCode: '8640',
    primaryTargets: [
      {
        organ: 'immune-system',
        regionId: 'body.lymphatic.immune',
        effect: 'Suppresses immune response and inflammation',
      },
    ],
    secondaryTargets: [
      {
        organ: 'adrenal-glands',
        regionId: 'body.torso.abdomen.adrenal-glands',
        effect: 'Suppresses natural cortisol production',
      },
      {
        organ: 'bones',
        regionId: 'body.skeletal.bones',
        effect: 'Long-term use can cause bone loss',
      },
      {
        organ: 'pancreas',
        regionId: 'body.torso.abdomen.pancreas',
        effect: 'Can raise blood glucose',
      },
    ],
  },

  // ============================================
  // Neurological/Psychiatric Medications (6 medications)
  // ============================================
  'sertraline': {
    medicationName: 'Sertraline',
    drugClass: 'SSRI',
    rxNormCode: '36437',
    primaryTargets: [
      {
        organ: 'brain',
        regionId: 'body.head.brain',
        effect: 'Increases serotonin in synapses; treats depression and anxiety',
      },
    ],
  },
  'fluoxetine': {
    medicationName: 'Fluoxetine',
    drugClass: 'SSRI',
    rxNormCode: '4493',
    primaryTargets: [
      {
        organ: 'brain',
        regionId: 'body.head.brain',
        effect: 'Selective serotonin reuptake inhibitor for depression',
      },
    ],
  },
  'escitalopram': {
    medicationName: 'Escitalopram',
    drugClass: 'SSRI',
    rxNormCode: '321988',
    primaryTargets: [
      {
        organ: 'brain',
        regionId: 'body.head.brain',
        effect: 'Highly selective SSRI for depression and anxiety',
      },
    ],
  },
  'bupropion': {
    medicationName: 'Bupropion',
    drugClass: 'NDRI',
    rxNormCode: '42347',
    primaryTargets: [
      {
        organ: 'brain',
        regionId: 'body.head.brain',
        effect: 'Inhibits norepinephrine and dopamine reuptake',
      },
    ],
  },
  'gabapentin': {
    medicationName: 'Gabapentin',
    drugClass: 'anticonvulsant',
    rxNormCode: '25480',
    primaryTargets: [
      {
        organ: 'brain',
        regionId: 'body.head.brain',
        effect: 'Modulates calcium channels; used for seizures and nerve pain',
      },
    ],
    secondaryTargets: [
      {
        organ: 'peripheral-nerves',
        regionId: 'body.nervous.peripheral',
        effect: 'Reduces neuropathic pain signaling',
      },
    ],
  },
  'levetiracetam': {
    medicationName: 'Levetiracetam',
    drugClass: 'anticonvulsant',
    rxNormCode: '39998',
    primaryTargets: [
      {
        organ: 'brain',
        regionId: 'body.head.brain',
        effect: 'Modulates synaptic vesicle protein; prevents seizures',
      },
    ],
  },

  // ============================================
  // Antibiotics (4 medications)
  // ============================================
  'amoxicillin': {
    medicationName: 'Amoxicillin',
    drugClass: 'penicillin-antibiotic',
    rxNormCode: '723',
    primaryTargets: [
      {
        organ: 'bacteria',
        regionId: 'body.infectious.bacterial',
        effect: 'Inhibits bacterial cell wall synthesis',
      },
    ],
    secondaryTargets: [
      {
        organ: 'large-intestine',
        regionId: 'body.torso.abdomen.large-intestine',
        effect: 'May disrupt gut microbiome',
      },
    ],
  },
  'azithromycin': {
    medicationName: 'Azithromycin',
    drugClass: 'macrolide-antibiotic',
    rxNormCode: '18631',
    primaryTargets: [
      {
        organ: 'bacteria',
        regionId: 'body.infectious.bacterial',
        effect: 'Inhibits bacterial protein synthesis',
      },
    ],
    secondaryTargets: [
      {
        organ: 'heart',
        regionId: 'body.torso.thorax.heart',
        effect: 'May prolong QT interval',
      },
    ],
  },
  'ciprofloxacin': {
    medicationName: 'Ciprofloxacin',
    drugClass: 'fluoroquinolone-antibiotic',
    rxNormCode: '2551',
    primaryTargets: [
      {
        organ: 'bacteria',
        regionId: 'body.infectious.bacterial',
        effect: 'Inhibits bacterial DNA gyrase',
      },
    ],
    secondaryTargets: [
      {
        organ: 'tendons',
        regionId: 'body.musculoskeletal.tendons',
        effect: 'Risk of tendon damage',
      },
    ],
  },
  'doxycycline': {
    medicationName: 'Doxycycline',
    drugClass: 'tetracycline-antibiotic',
    rxNormCode: '3640',
    primaryTargets: [
      {
        organ: 'bacteria',
        regionId: 'body.infectious.bacterial',
        effect: 'Inhibits bacterial protein synthesis',
      },
    ],
    secondaryTargets: [
      {
        organ: 'skin',
        regionId: 'body.integumentary.skin',
        effect: 'Increases sun sensitivity',
      },
    ],
  },

  // ============================================
  // Anticoagulants (3 medications)
  // ============================================
  'warfarin': {
    medicationName: 'Warfarin',
    drugClass: 'vitamin-K-antagonist',
    rxNormCode: '11289',
    primaryTargets: [
      {
        organ: 'liver',
        regionId: 'body.torso.abdomen.liver',
        effect: 'Inhibits vitamin K-dependent clotting factor synthesis',
      },
    ],
    secondaryTargets: [
      {
        organ: 'blood',
        regionId: 'body.circulatory.blood',
        effect: 'Reduces blood clot formation',
      },
    ],
  },
  'apixaban': {
    medicationName: 'Apixaban',
    drugClass: 'direct-factor-Xa-inhibitor',
    rxNormCode: '1364430',
    primaryTargets: [
      {
        organ: 'blood',
        regionId: 'body.circulatory.blood',
        effect: 'Directly inhibits factor Xa; prevents clot formation',
      },
    ],
  },
  'rivaroxaban': {
    medicationName: 'Rivaroxaban',
    drugClass: 'direct-factor-Xa-inhibitor',
    rxNormCode: '1114195',
    primaryTargets: [
      {
        organ: 'blood',
        regionId: 'body.circulatory.blood',
        effect: 'Direct factor Xa inhibitor anticoagulant',
      },
    ],
  },

  // ============================================
  // Osteoporosis Medications (2 medications)
  // ============================================
  'alendronate': {
    medicationName: 'Alendronate',
    drugClass: 'bisphosphonate',
    rxNormCode: '1727',
    primaryTargets: [
      {
        organ: 'bones',
        regionId: 'body.skeletal.bones',
        effect: 'Inhibits osteoclast activity; increases bone density',
      },
    ],
    secondaryTargets: [
      {
        organ: 'esophagus',
        regionId: 'body.torso.thorax.esophagus',
        effect: 'Can cause esophageal irritation if not taken properly',
      },
    ],
  },
  'denosumab': {
    medicationName: 'Denosumab',
    drugClass: 'RANKL-inhibitor',
    rxNormCode: '993458',
    primaryTargets: [
      {
        organ: 'bones',
        regionId: 'body.skeletal.bones',
        effect: 'Inhibits RANKL; reduces bone resorption',
      },
    ],
  },
};

/**
 * Get medication mapping by medication ID
 */
export function getMedicationMapping(medicationId: string): MedicationTargetMapping | undefined {
  return MEDICATION_TARGET_MAP[medicationId];
}

/**
 * Get all medications targeting a specific organ
 */
export function getMedicationsForOrgan(organ: string): MedicationTargetMapping[] {
  return Object.values(MEDICATION_TARGET_MAP).filter(
    med =>
      med.primaryTargets.some(t => t.organ === organ) ||
      med.secondaryTargets?.some(t => t.organ === organ)
  );
}

/**
 * Get all medications in a specific drug class
 */
export function getMedicationsByClass(drugClass: string): MedicationTargetMapping[] {
  return Object.values(MEDICATION_TARGET_MAP).filter(med => med.drugClass === drugClass);
}

/**
 * Get all medications targeting a specific region ID
 */
export function getMedicationsForRegion(regionId: string): MedicationTargetMapping[] {
  return Object.values(MEDICATION_TARGET_MAP).filter(
    med =>
      med.primaryTargets.some(t => t.regionId === regionId) ||
      med.secondaryTargets?.some(t => t.regionId === regionId)
  );
}

/**
 * Get all unique drug classes in the mapping
 */
export function getAllDrugClasses(): string[] {
  const classes = new Set<string>();
  Object.values(MEDICATION_TARGET_MAP).forEach(med => classes.add(med.drugClass));
  return Array.from(classes).sort();
}

/**
 * Get all unique target organs in the mapping
 */
export function getAllTargetOrgans(): string[] {
  const organs = new Set<string>();
  Object.values(MEDICATION_TARGET_MAP).forEach(med => {
    med.primaryTargets.forEach(t => organs.add(t.organ));
    med.secondaryTargets?.forEach(t => organs.add(t.organ));
  });
  return Array.from(organs).sort();
}

/**
 * Statistics about the medication-target mappings
 */
export interface MedicationTargetMapStats {
  totalMedications: number;
  drugClassCounts: Record<string, number>;
  primaryTargetOrganCounts: Record<string, number>;
  medicationsWithRxNormCodes: number;
  medicationsWithSecondaryTargets: number;
}

export function getMedicationTargetMapStats(): MedicationTargetMapStats {
  const meds = Object.values(MEDICATION_TARGET_MAP);
  const drugClassCounts: Record<string, number> = {};
  const primaryTargetOrganCounts: Record<string, number> = {};
  let medicationsWithRxNormCodes = 0;
  let medicationsWithSecondaryTargets = 0;

  meds.forEach(med => {
    // Count drug classes
    drugClassCounts[med.drugClass] = (drugClassCounts[med.drugClass] || 0) + 1;

    // Count primary target organs
    med.primaryTargets.forEach(t => {
      primaryTargetOrganCounts[t.organ] = (primaryTargetOrganCounts[t.organ] || 0) + 1;
    });

    // Count medications with RxNorm codes
    if (med.rxNormCode) medicationsWithRxNormCodes++;

    // Count medications with secondary targets
    if (med.secondaryTargets && med.secondaryTargets.length > 0) {
      medicationsWithSecondaryTargets++;
    }
  });

  return {
    totalMedications: meds.length,
    drugClassCounts,
    primaryTargetOrganCounts,
    medicationsWithRxNormCodes,
    medicationsWithSecondaryTargets,
  };
}
