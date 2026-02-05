/**
 * Fluid and Electrolyte Balance Data Store
 * 
 * Comprehensive database of fluid compartments, electrolyte physiology,
 * and clinical fluid/electrolyte disorders.
 */

import type {
  BodyFluidCompartment,
  ElectrolytePhysiology,
  FluidBalanceMechanism,
  AcidBaseBalance,
  OsmolarityConcept,
  DehydrationType,
  VolumeStatusAssessment,
  FluidTherapy,
} from './types';

// ============================================================================
// BODY FLUID COMPARTMENTS
// ============================================================================

const fluidCompartments: Map<string, BodyFluidCompartment> = new Map();

fluidCompartments.set('total-body-water', {
  id: 'total-body-water',
  name: 'Total Body Water',
  percentageTBW: 100,
  volumeIn70kgAdult: '42 L (60% of body weight)',
  composition: {
    cations: [{ ion: 'Sodium', concentration: '140 mEq/L' }, { ion: 'Potassium', concentration: '4 mEq/L' }],
    anions: [{ ion: 'Chloride', concentration: '100 mEq/L' }, { ion: 'Bicarbonate', concentration: '24 mEq/L' }],
  },
  barriers: ['Cell membranes', 'Capillary walls'],
  regulation: ['Osmoreceptors', 'Baroreceptors', 'Volume receptors'],
  clinicalSignificance: ['Varies with age, sex, and body composition', 'Decreases with age and obesity'],
});

fluidCompartments.set('intracellular-fluid', {
  id: 'intracellular-fluid',
  name: 'Intracellular Fluid',
  percentageTBW: 67,
  volumeIn70kgAdult: '28 L (2/3 of TBW)',
  composition: {
    cations: [{ ion: 'Potassium', concentration: '150 mEq/L' }, { ion: 'Magnesium', concentration: '40 mEq/L' }],
    anions: [{ ion: 'Phosphate', concentration: '100 mEq/L' }, { ion: 'Proteins', concentration: 'Variable' }],
  },
  barriers: ['Cell membranes', 'Na+/K+-ATPase'],
  regulation: ['Na+/K+-ATPase maintains gradient', 'Cell membrane permeability'],
  clinicalSignificance: ['Major changes with cell death', 'Potassium released in hemolysis/rhabdo'],
});

fluidCompartments.set('extracellular-fluid', {
  id: 'extracellular-fluid',
  name: 'Extracellular Fluid',
  percentageTBW: 33,
  volumeIn70kgAdult: '14 L (1/3 of TBW)',
  composition: {
    cations: [{ ion: 'Sodium', concentration: '140 mEq/L' }, { ion: 'Potassium', concentration: '4 mEq/L' }],
    anions: [{ ion: 'Chloride', concentration: '110 mEq/L' }, { ion: 'Bicarbonate', concentration: '24 mEq/L' }],
  },
  barriers: ['Capillary walls'],
  regulation: ['Aldosterone', 'ADH', 'Natriuretic peptides'],
  clinicalSignificance: ['Easily accessible for sampling', 'Reflects whole-body status'],
});

fluidCompartments.set('interstitial-fluid', {
  id: 'interstitial-fluid',
  name: 'Interstitial Fluid',
  percentageTBW: 25,
  volumeIn70kgAdult: '10.5 L (3/4 of ECF)',
  composition: {
    cations: [{ ion: 'Sodium', concentration: '140 mEq/L' }],
    anions: [{ ion: 'Chloride', concentration: '110 mEq/L' }],
  },
  barriers: ['Capillary endothelium', 'Glycocalyx'],
  regulation: ['Starling forces', 'Lymphatic drainage'],
  clinicalSignificance: ['Site of edema formation', 'Lymphatic obstruction causes lymphedema'],
});

fluidCompartments.set('intravascular-fluid', {
  id: 'intravascular-fluid',
  name: 'Intravascular Fluid (Plasma)',
  percentageTBW: 8,
  volumeIn70kgAdult: '3.5 L (1/4 of ECF)',
  composition: {
    cations: [{ ion: 'Sodium', concentration: '140 mEq/L' }],
    anions: [{ ion: 'Chloride', concentration: '100 mEq/L' }, { ion: 'Proteins', concentration: '7 g/dL' }],
  },
  barriers: ['Capillary endothelium'],
  regulation: ['Albumin (colloid osmotic pressure)', 'Hydrostatic pressure'],
  clinicalSignificance: ['Decreased in hemorrhage', 'Increased in fluid overload'],
});

// ============================================================================
// ELECTROLYTE PHYSIOLOGY
// ============================================================================

const electrolytePhysiology: Map<string, ElectrolytePhysiology> = new Map();

electrolytePhysiology.set('sodium', {
  ion: 'sodium',
  symbol: 'Na+',
  atomicNumber: 11,
  normalRange: { serum: '135-145 mEq/L', intracellular: '10-15 mEq/L' },
  dailyIntake: '2-4 g (87-174 mEq)',
  dailyExcretion: 'Matches intake (urine)',
  functions: {
    cellular: ['Major extracellular cation', 'Maintains osmotic pressure', 'Action potential generation'],
    organSystem: [
      { system: 'Nervous', role: 'Action potentials' },
      { system: 'Cardiovascular', role: 'Blood pressure maintenance' },
      { system: 'Renal', role: 'Volume regulation' },
    ],
  },
  homeostasis: {
    intake: ['Diet', 'IV fluids'],
    distribution: ['Cell membrane Na+/K+-ATPase'],
    excretion: ['Renal (aldosterone regulated)'],
    hormonalRegulation: ['Aldosterone', 'ADH', 'Natriuretic peptides'],
  },
  regulation: {
    sensors: ['Osmoreceptors', 'Baroreceptors', 'Volume receptors'],
    effectors: ['Kidney', 'Thirst center'],
    hormones: ['ADH', 'Aldosterone', 'ANP'],
  },
  abnormalities: {
    hyper: {
      condition: 'Hypernatremia',
      prefix: 'Hyper',
      definition: 'Serum Na+ > 145 mEq/L',
      causes: ['Dehydration', 'Diabetes insipidus', 'Excess salt intake', 'Cushing syndrome'],
      symptoms: ['Thirst', 'Lethargy', 'Confusion', 'Seizures'],
      signs: ['Dry mucous membranes', 'Decreased skin turgor', 'Tachycardia'],
      treatment: ['Free water replacement', 'Treat underlying cause'],
      urgency: 'urgent',
    },
    hypo: {
      condition: 'Hyponatremia',
      prefix: 'Hypo',
      definition: 'Serum Na+ < 135 mEq/L',
      causes: ['SIADH', 'Heart failure', 'Cirrhosis', 'Diuretics', 'Hypothyroidism'],
      symptoms: ['Nausea', 'Headache', 'Confusion', 'Seizures'],
      signs: ['Altered mental status', 'Hyporeflexia'],
      treatment: ['Fluid restriction', 'Hypertonic saline (if severe)', 'Treat underlying cause'],
      urgency: 'emergency',
    },
  },
  explanations: {
    level1: 'Sodium is the main salt in your blood that controls water balance.',
    level2: 'The major extracellular cation that maintains blood volume and blood pressure.',
    level3: 'Primary determinant of extracellular fluid osmolarity and volume status.',
    level4: 'Regulated by complex neurohormonal systems including RAAS, ADH, and natriuretic peptides.',
  },
});

electrolytePhysiology.set('potassium', {
  ion: 'potassium',
  symbol: 'K+',
  atomicNumber: 19,
  normalRange: { serum: '3.5-5.0 mEq/L', intracellular: '150 mEq/L' },
  dailyIntake: '2-4 g (50-100 mEq)',
  dailyExcretion: 'Matches intake (90% renal)',
  functions: {
    cellular: ['Major intracellular cation', 'Resting membrane potential', 'Action potential repolarization'],
    organSystem: [
      { system: 'Cardiac', role: 'Cardiac action potentials' },
      { system: 'Neuromuscular', role: 'Muscle contraction' },
    ],
  },
  homeostasis: {
    intake: ['Diet', 'Supplements'],
    distribution: ['Insulin shifts K+ into cells', 'Beta-adrenergic stimulation', 'Acid-base status'],
    excretion: ['Renal (aldosterone regulated)', 'GI (10%)'],
    hormonalRegulation: ['Aldosterone', 'Insulin', 'Catecholamines'],
  },
  regulation: {
    sensors: ['Serum K+ concentration', 'Aldosterone'],
    effectors: ['Distal nephron', 'GI tract'],
    hormones: ['Aldosterone', 'Insulin'],
  },
  abnormalities: {
    hyper: {
      condition: 'Hyperkalemia',
      prefix: 'Hyper',
      definition: 'Serum K+ > 5.0 mEq/L',
      causes: ['Renal failure', 'ACE inhibitors', 'Potassium-sparing diuretics', 'Rhabdomyolysis', 'Acidosis'],
      symptoms: ['Weakness', 'Paresthesias', 'Palpitations'],
      signs: ['Decreased deep tendon reflexes'],
      ecgChanges: ['Peaked T waves', 'Prolonged PR', 'Wide QRS', 'Sine wave'],
      treatment: ['Calcium gluconate (cardiac protection)', 'Insulin + glucose', 'Beta-agonists', 'Kayexalate', 'Dialysis'],
      urgency: 'emergency',
    },
    hypo: {
      condition: 'Hypokalemia',
      prefix: 'Hypo',
      definition: 'Serum K+ < 3.5 mEq/L',
      causes: ['Diuretics', 'Vomiting', 'Diarrhea', 'Alkalosis', 'Hyperaldosteronism'],
      symptoms: ['Weakness', 'Fatigue', 'Constipation', 'Polyuria'],
      signs: ['Hyporeflexia', 'Ileus'],
      ecgChanges: ['Flat T waves', 'U waves', 'ST depression'],
      treatment: ['Oral or IV potassium replacement', 'Treat underlying cause'],
      urgency: 'urgent',
    },
  },
  explanations: {
    level1: 'Potassium is the main salt inside your cells that keeps your heart and muscles working.',
    level2: 'The major intracellular cation essential for muscle and nerve function.',
    level3: 'Critical for maintaining resting membrane potential and cardiac rhythm.',
    level4: 'Tightly regulated by renal, hormonal, and transcellular shifts. Critical for cardiac electrophysiology.',
  },
});

electrolytePhysiology.set('calcium', {
  ion: 'calcium',
  symbol: 'Ca2+',
  atomicNumber: 20,
  normalRange: { serum: '8.5-10.5 mg/dL (2.1-2.6 mmol/L)', intracellular: 'Very low' },
  dailyIntake: '800-1200 mg',
  dailyExcretion: '200 mg (urine), 800 mg (feces)',
  functions: {
    cellular: ['Second messenger', 'Exocytosis', 'Cell signaling'],
    organSystem: [
      { system: 'Skeletal', role: 'Bone mineralization' },
      { system: 'Neuromuscular', role: 'Muscle contraction, neurotransmission' },
      { system: 'Cardiac', role: 'Cardiac contractility' },
    ],
  },
  homeostasis: {
    intake: ['Diet', 'Supplements'],
    distribution: ['99% in bone', '1% in ECF (50% free)'],
    excretion: ['Renal', 'GI'],
    hormonalRegulation: ['PTH', 'Vitamin D', 'Calcitonin'],
  },
  regulation: {
    sensors: ['Ca2+-sensing receptor'],
    effectors: ['Bone', 'Kidney', 'GI tract'],
    hormones: ['PTH', 'Calcitriol', 'Calcitonin'],
  },
  abnormalities: {
    hyper: {
      condition: 'Hypercalcemia',
      prefix: 'Hyper',
      definition: 'Serum Ca2+ > 10.5 mg/dL',
      causes: ['Primary hyperparathyroidism', 'Malignancy', 'Vitamin D toxicity', 'Thiazide diuretics'],
      symptoms: ['Stones', 'Bones', 'Groans', 'Thrones', 'Psychiatric overtones'],
      signs: ['Short QT interval'],
      treatment: ['IV fluids', 'Bisphosphonates', 'Calcitonin', 'Treat underlying cause'],
      urgency: 'urgent',
    },
    hypo: {
      condition: 'Hypocalcemia',
      prefix: 'Hypo',
      definition: 'Serum Ca2+ < 8.5 mg/dL',
      causes: ['Hypoparathyroidism', 'Vitamin D deficiency', 'Renal failure', 'Acute pancreatitis'],
      symptoms: ['Paresthesias', 'Muscle cramps', 'Tetany'],
      signs: ['Chvostek sign', 'Trousseau sign', 'Prolonged QT interval'],
      treatment: ['Calcium replacement', 'Vitamin D', 'Treat underlying cause'],
      urgency: 'urgent',
    },
  },
  explanations: {
    level1: 'Calcium is important for strong bones and muscles, especially your heart.',
    level2: 'Essential for bone health, muscle contraction, and nerve function.',
    level3: 'Tightly regulated by PTH, vitamin D, and calcitonin. Critical for neuromuscular function.',
    level4: 'Ionized calcium is the biologically active form. Complex feedback between parathyroid, bone, kidney, and GI tract.',
  },
});

// ============================================================================
// ACID-BASE BALANCE
// ============================================================================

const acidBaseBalance: AcidBaseBalance = {
  id: 'acid-base-balance',
  name: 'Acid-Base Homeostasis',
  normalPH: '7.40',
  normalRange: '7.35-7.45',
  bufferSystems: [
    {
      name: 'Bicarbonate-Carbonic Acid',
      components: ['HCO3-', 'H2CO3', 'CO2'],
      pKa: '6.1',
      capacity: 'Most important buffer',
      mechanism: 'H+ + HCO3- ↔ H2CO3 ↔ CO2 + H2O',
      clinicalSignificance: ['Measured in blood gas', 'Henderson-Hasselbalch equation'],
    },
    {
      name: 'Phosphate Buffer',
      components: ['HPO4^2-', 'H2PO4-'],
      pKa: '6.8',
      capacity: 'Important in urine',
      mechanism: 'H+ + HPO4^2- ↔ H2PO4-',
      clinicalSignificance: ['Renal buffering'],
    },
    {
      name: 'Protein Buffer',
      components: ['Protein-', 'HProtein'],
      pKa: 'Variable',
      capacity: 'Intracellular buffer',
      mechanism: 'H+ + Protein- ↔ HProtein',
      clinicalSignificance: ['Hemoglobin important in RBCs'],
    },
  ],
  respiratoryCompensation: {
    mechanism: 'Hyperventilation or hypoventilation changes CO2',
    timeframe: 'Minutes',
    effectiveness: 'Limited by respiratory drive',
  },
  renalCompensation: {
    mechanism: 'HCO3- reabsorption and generation, H+ secretion',
    timeframe: 'Hours to days',
    effectiveness: 'Very effective',
  },
  disturbances: [
    {
      name: 'Metabolic Acidosis',
      type: 'metabolic-acidosis',
      primaryChange: 'Decreased HCO3-',
      compensation: { expected: 'PaCO2 decreases by 1.2 mmHg per 1 mEq/L HCO3-', mechanism: 'Hyperventilation' },
      causes: ['Lactic acidosis', 'DKA', 'Renal failure', 'Toxic alcohols'],
      clinicalFeatures: ['Kussmaul respirations', 'Altered mental status'],
      treatment: ['Treat underlying cause', 'Bicarbonate if severe'],
    },
    {
      name: 'Metabolic Alkalosis',
      type: 'metabolic-alkalosis',
      primaryChange: 'Increased HCO3-',
      compensation: { expected: 'PaCO2 increases by 0.7 mmHg per 1 mEq/L HCO3-', mechanism: 'Hypoventilation' },
      causes: ['Vomiting', 'Diuretics', 'Hyperaldosteronism'],
      clinicalFeatures: ['Tetany', 'Arrhythmias'],
      treatment: ['Replace volume and potassium', 'Treat underlying cause'],
    },
    {
      name: 'Respiratory Acidosis',
      type: 'respiratory-acidosis',
      primaryChange: 'Increased PaCO2',
      compensation: { expected: 'HCO3- increases by 1 mEq/L per 10 mmHg PaCO2 (acute), 4 mEq/L (chronic)', mechanism: 'Renal HCO3- retention' },
      causes: ['COPD', 'Opioid overdose', 'Neuromuscular disease'],
      clinicalFeatures: ['Confusion', 'Somnolence'],
      treatment: ['Improve ventilation', 'Treat underlying cause'],
    },
    {
      name: 'Respiratory Alkalosis',
      type: 'respiratory-alkalosis',
      primaryChange: 'Decreased PaCO2',
      compensation: { expected: 'HCO3- decreases by 2 mEq/L per 10 mmHg PaCO2 (acute), 5 mEq/L (chronic)', mechanism: 'Renal HCO3- excretion' },
      causes: ['Anxiety', 'Sepsis', 'PE', 'Salicylate toxicity'],
      clinicalFeatures: ['Lightheadedness', 'Tetany', 'Paresthesias'],
      treatment: ['Treat underlying cause', 'Rebreathing (if anxiety)'],
    },
  ],
};

// ============================================================================
// DEHYDRATION TYPES
// ============================================================================

const dehydrationTypes: DehydrationType[] = [
  {
    type: 'isotonic',
    description: 'Loss of water and sodium in equal proportions',
    sodiumLevel: '135-145 mEq/L (normal)',
    waterLoss: 'Proportional to sodium',
    soluteLoss: 'Proportional to water',
    causes: ['Vomiting', 'Diarrhea', 'Hemorrhage'],
    clinicalFeatures: ['Dry mucous membranes', 'Decreased skin turgor', 'Orthostatic hypotension'],
    treatment: 'Isotonic fluids (normal saline or lactated Ringer\'s)',
  },
  {
    type: 'hypertonic',
    description: 'Water loss exceeds sodium loss',
    sodiumLevel: '> 145 mEq/L',
    waterLoss: 'Greater than sodium',
    soluteLoss: 'Less than water',
    causes: ['Diabetes insipidus', 'Fever', 'Excessive sweating', 'Osmotic diuresis'],
    clinicalFeatures: ['Intense thirst', 'Altered mental status', 'Dry skin'],
    treatment: 'Hypotonic fluids (D5W or 0.45% NS)',
  },
  {
    type: 'hypotonic',
    description: 'Sodium loss exceeds water loss',
    sodiumLevel: '< 135 mEq/L',
    waterLoss: 'Less than sodium',
    soluteLoss: 'Greater than water',
    causes: ['Diuretics', 'Addison disease', 'Third spacing'],
    clinicalFeatures: ['Edema', 'Altered mental status', 'Seizures (if severe)'],
    treatment: 'Hypertonic saline (if severe) or isotonic fluids',
  },
];

// ============================================================================
// FLUID THERAPY
// ============================================================================

const fluidTherapies: Map<string, FluidTherapy> = new Map();

fluidTherapies.set('normal-saline', {
  id: 'normal-saline',
  fluidType: '0.9% Sodium Chloride (Normal Saline)',
  composition: { Na: '154 mEq/L', Cl: '154 mEq/L', Osm: '308 mOsm/L' },
  osmolarity: 'Isotonic',
  distribution: ['extracellular'],
  indications: ['Volume resuscitation', 'Hyponatremia', 'Hypercalcemia', 'DKA'],
  contraindications: ['Hypernatremia', 'Volume overload'],
  cautions: ['Can cause hyperchloremic metabolic acidosis'],
  rateCalculation: 'Based on deficit and ongoing losses',
  monitoring: ['Vital signs', 'Urine output', 'Electrolytes'],
});

fluidTherapies.set('lactated-ringers', {
  id: 'lactated-ringers',
  fluidType: 'Lactated Ringer\'s',
  composition: { Na: '130 mEq/L', K: '4 mEq/L', Ca: '3 mEq/L', Cl: '109 mEq/L', Lactate: '28 mEq/L', Osm: '273 mOsm/L' },
  osmolarity: 'Isotonic',
  distribution: ['extracellular'],
  indications: ['Volume resuscitation', 'Burns', 'Surgery'],
  contraindications: ['Hyperkalemia', 'Severe metabolic acidosis'],
  cautions: ['Contains potassium', 'Not compatible with blood transfusions'],
  rateCalculation: 'Based on clinical status',
  monitoring: ['Electrolytes', 'Lactate levels'],
});

fluidTherapies.set('d5w', {
  id: 'd5w',
  fluidType: 'Dextrose 5% in Water (D5W)',
  composition: { Dextrose: '50 g/L', Osm: '252 mOsm/L (metabolized to free water)' },
  osmolarity: 'Hypotonic (becomes)',
  distribution: ['intracellular', 'extracellular'],
  indications: ['Free water deficit', 'Hypernatremia', 'Drug dilution'],
  contraindications: ['Increased ICP', 'Hyperglycemia'],
  cautions: ['Can cause hyponatremia', 'Glucose metabolized quickly'],
  rateCalculation: 'Based on free water deficit',
  monitoring: ['Glucose', 'Sodium'],
});

// ============================================================================
// EXPORT FUNCTIONS
// ============================================================================

export function getFluidCompartment(id: string): BodyFluidCompartment | undefined {
  return fluidCompartments.get(id);
}

export function getAllFluidCompartments(): BodyFluidCompartment[] {
  return Array.from(fluidCompartments.values());
}

export function getElectrolytePhysiology(ion: string): ElectrolytePhysiology | undefined {
  return electrolytePhysiology.get(ion);
}

export function getAllElectrolytes(): ElectrolytePhysiology[] {
  return Array.from(electrolytePhysiology.values());
}

export function getAcidBaseBalance(): AcidBaseBalance {
  return acidBaseBalance;
}

export function getDehydrationTypes(): DehydrationType[] {
  return dehydrationTypes;
}

export function getFluidTherapy(id: string): FluidTherapy | undefined {
  return fluidTherapies.get(id);
}
