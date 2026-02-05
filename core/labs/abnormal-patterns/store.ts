/**
 * Lab Abnormal Pattern Recognition Data Store
 * 
 * Comprehensive database of abnormal lab patterns and their clinical significance.
 */

import type {
  LabAbnormalityPattern,
  LabCombinationPattern,
  CriticalValue,
  LabArtifact,
} from './types';

// ============================================================================
// ABNORMAL PATTERNS
// ============================================================================

const abnormalPatterns: Map<string, LabAbnormalityPattern> = new Map();

// Hyponatremia patterns
abnormalPatterns.set('hyponatremia-hypovolemic', {
  id: 'hyponatremia-hypovolemic',
  name: 'Hypovolemic Hyponatremia',
  category: 'electrolyte',
  description: 'Low sodium with volume depletion',
  pattern: {
    primaryAbnormality: 'Na+ < 135 mEq/L',
    associatedFindings: [
      { lab: 'Urine Na', finding: '< 20 mEq/L', required: false },
      { lab: 'BUN/Cr', finding: '> 20:1', required: false },
      { lab: 'Physical exam', finding: 'Dry mucous membranes, orthostasis', required: false },
    ],
    calculating: 'Check volume status clinically',
  },
  differentialDiagnosis: [
    {
      condition: 'GI losses (vomiting, diarrhea)',
      pretestProbability: 'high',
      distinguishingFeatures: ['History of GI symptoms', 'Urine Na < 20'],
      confirmatoryTest: 'Clinical history',
      urgency: 'urgent',
    },
    {
      condition: 'Third spacing (burns, pancreatitis)',
      pretestProbability: 'moderate',
      distinguishingFeatures: ['Clinical context', 'Hemoconcentration'],
      confirmatoryTest: 'Clinical assessment',
      urgency: 'urgent',
    },
    {
      condition: 'Diuretic use',
      pretestProbability: 'moderate',
      distinguishingFeatures: ['Medication history', 'Urine Na > 20'],
      confirmatoryTest: 'Medication review',
      urgency: 'routine',
    },
  ],
  clinicalContext: {
    patientPopulation: ['Elderly', 'Patients on diuretics', 'GI illness'],
    clinicalScenarios: ['Vomiting/diarrhea', 'Diuretic overuse', 'Adrenal insufficiency'],
    redFlags: ['Altered mental status', 'Seizures', 'Severe symptoms'],
  },
  workup: {
    additionalLabs: ['Serum osmolality', 'Urine Na', 'Urine osmolality', 'TSH', 'Cortisol'],
    imaging: ['None specific'],
    procedures: ['Volume status assessment'],
    clinicalPearls: ['Urine Na < 20 suggests extrarenal losses', 'Correct slowly to avoid ODS'],
  },
  management: {
    immediate: ['Volume replacement with normal saline', 'Check correction rate'],
    definitive: ['Treat underlying cause', 'Correct no more than 8-12 mEq/L in 24h'],
    monitoring: ['Serial sodium q4-6h', 'Neurologic checks'],
  },
  explanations: {
    level1: 'Low salt levels caused by losing too much fluid from vomiting, diarrhea, or sweating.',
    level2: 'Low sodium with dehydration. Your body loses both salt and water, but replaces water more than salt.',
    level3: 'Hypovolemic hyponatremia occurs when sodium and water are lost, but water is retained via ADH due to volume depletion.',
    level4: 'Volume depletion stimulates baroreceptor-mediated ADH release, causing water retention that dilutes serum sodium despite total body sodium depletion.',
  },
});

// High anion gap metabolic acidosis
abnormalPatterns.set('high-AG-metabolic-acidosis', {
  id: 'high-AG-metabolic-acidosis',
  name: 'High Anion Gap Metabolic Acidosis',
  category: 'metabolic',
  description: 'Metabolic acidosis with increased anion gap',
  pattern: {
    primaryAbnormality: 'HCO3- < 24 mEq/L, pH < 7.35',
    associatedFindings: [
      { lab: 'Anion gap', finding: '> 12 mEq/L', required: true },
      { lab: 'Delta gap', finding: 'Delta gap > 6', required: false },
    ],
    calculating: 'Anion gap = Na - (Cl + HCO3). Delta gap = (AG - 12) / (24 - HCO3)',
  },
  differentialDiagnosis: [
    {
      condition: 'Lactic acidosis',
      pretestProbability: 'high',
      distinguishingFeatures: ['Elevated lactate', 'Tissue hypoperfusion'],
      confirmatoryTest: 'Serum lactate',
      urgency: 'emergent',
    },
    {
      condition: 'DKA',
      pretestProbability: 'high',
      distinguishingFeatures: ['Hyperglycemia', 'Positive ketones', 'History of diabetes'],
      confirmatoryTest: 'Serum ketones, glucose',
      urgency: 'emergent',
    },
    {
      condition: 'Toxic alcohols (methanol, ethylene glycol)',
      pretestProbability: 'moderate',
      distinguishingFeatures: ['Osmolar gap', 'Vision changes (methanol)', 'Calcium oxalate crystals (ethylene glycol)'],
      confirmatoryTest: 'Serum osmolality, toxicology',
      urgency: 'emergent',
    },
    {
      condition: 'Uremia/Renal failure',
      pretestProbability: 'moderate',
      distinguishingFeatures: ['Elevated BUN/Cr', 'History of CKD'],
      confirmatoryTest: 'BUN, Cr',
      urgency: 'urgent',
    },
    {
      condition: 'Aspirin toxicity',
      pretestProbability: 'low',
      distinguishingFeatures: ['Respiratory alkalosis + metabolic acidosis', 'History of ingestion'],
      confirmatoryTest: 'Salicylate level',
      urgency: 'emergent',
    },
  ],
  clinicalContext: {
    patientPopulation: ['Diabetics', 'Patients with shock', 'Poisoning victims'],
    clinicalScenarios: ['DKA', 'Septic shock', 'Toxic ingestion', 'Renal failure'],
    redFlags: ['Severe acidosis (pH < 7.1)', 'Altered mental status', 'Hemodynamic instability'],
  },
  workup: {
    additionalLabs: ['Lactate', 'Ketones', 'Serum osmolality', 'Toxicology screen', 'BUN/Cr'],
    imaging: ['Chest X-ray (if septic)', 'CT head (if toxic ingestion)'],
    procedures: ['ABG'],
    clinicalPearls: ['MUDPILES for causes', 'Calculate delta gap for mixed disorders', 'Check osmolar gap if toxic ingestion suspected'],
  },
  management: {
    immediate: ['IV fluids', 'Treat underlying cause', 'Bicarbonate if pH < 7.1'],
    definitive: ['Insulin for DKA', 'Dialysis if uremic', 'Antidotes for toxins'],
    monitoring: ['Serial ABG', 'Anion gap', 'Underlying cause markers'],
  },
  explanations: {
    level1: 'A dangerous acid buildup in the blood caused by diabetes, kidney problems, or poisons.',
    level2: 'Too much acid in the blood because the body is producing acid faster than it can be cleared.',
    level3: 'Metabolic acidosis with accumulation of unmeasured anions. The anion gap represents unmeasured anions like lactate, ketones, or toxins.',
    level4: 'Calculated anion gap (Na - Cl - HCO3) increases when unmeasured anions accumulate. Common causes follow MUDPILES: Methanol, Uremia, DKA, Paraldehyde, Iron/Isoniazid, Lactic acidosis, Ethylene glycol, Salicylates.',
  },
});

// Anemia patterns
abnormalPatterns.set('microcytic-anemia', {
  id: 'microcytic-anemia',
  name: 'Microcytic Anemia',
  category: 'hematologic',
  description: 'Anemia with small red blood cells',
  pattern: {
    primaryAbnormality: 'MCV < 80 fL, Hgb < 13.5 (M) or < 12 (F)',
    associatedFindings: [
      { lab: 'Iron studies', finding: 'Variable', required: false },
      { lab: 'RDW', finding: 'Elevated', required: false },
    ],
    calculating: 'MCV from CBC',
  },
  differentialDiagnosis: [
    {
      condition: 'Iron deficiency anemia',
      pretestProbability: 'high',
      distinguishingFeatures: ['Low ferritin', 'High TIBC', 'Low iron'],
      confirmatoryTest: 'Ferritin, iron panel',
      urgency: 'routine',
    },
    {
      condition: 'Thalassemia trait',
      pretestProbability: 'moderate',
      distinguishingFeatures: ['Normal/high ferritin', 'Normal RDW', 'Family history', 'Elevated RBC count'],
      confirmatoryTest: 'Hemoglobin electrophoresis',
      urgency: 'routine',
    },
    {
      condition: 'Anemia of chronic disease',
      pretestProbability: 'moderate',
      distinguishingFeatures: ['Normal/high ferritin', 'Low iron', 'Low TIBC', 'Chronic illness'],
      confirmatoryTest: 'Iron panel, CRP',
      urgency: 'routine',
    },
    {
      condition: 'Sideroblastic anemia',
      pretestProbability: 'low',
      distinguishingFeatures: ['Ring sideroblasts on smear', 'Elevated iron'],
      confirmatoryTest: 'Bone marrow biopsy',
      urgency: 'urgent',
    },
  ],
  clinicalContext: {
    patientPopulation: ['Women of childbearing age', 'Elderly (GI malignancy)', 'Children'],
    clinicalScenarios: ['Menorrhagia', 'GI bleeding', 'Malabsorption', 'Thalassemia carriers'],
    redFlags: ['Pancytopenia', 'Abnormal WBC or platelets', 'Weight loss', 'GI symptoms'],
  },
  workup: {
    additionalLabs: ['Iron panel (iron, TIBC, ferritin)', 'Reticulocyte count', 'Peripheral smear'],
    imaging: ['GI evaluation if iron deficiency without clear cause'],
    procedures: ['Colonoscopy/endoscopy if GI bleeding suspected'],
    clinicalPearls: ['Iron deficiency: low ferritin is diagnostic', 'Thalassemia: normal ferritin, high RBC count', 'RDW helps distinguish IDA from thalassemia'],
  },
  management: {
    immediate: ['Transfusion if Hgb < 7 or symptomatic'],
    definitive: ['Iron supplementation', 'Treat underlying cause', 'Genetic counseling if thalassemia'],
    monitoring: ['Hgb in 4-6 weeks', 'Iron studies'],
  },
  explanations: {
    level1: 'Low blood count with small red blood cells, usually from low iron.',
    level2: 'Anemia caused by either not enough iron, a genetic blood disorder, or chronic illness.',
    level3: 'Anemia with MCV < 80 fL. Causes include iron deficiency, thalassemia, anemia of chronic disease.',
    level4: 'Microcytosis results from impaired hemoglobin synthesis. Iron deficiency is most common; thalassemia involves reduced globin chain production.',
  },
});

// Elevated transaminases
abnormalPatterns.set('elevated-transaminases', {
  id: 'elevated-transaminases',
  name: 'Elevated Hepatic Transaminases',
  category: 'hepatic',
  description: 'Elevated AST and/or ALT',
  pattern: {
    primaryAbnormality: 'ALT > 40 U/L or AST > 40 U/L',
    associatedFindings: [
      { lab: 'AST/ALT ratio', finding: 'Variable', required: false },
      { lab: 'ALP, GGT, bilirubin', finding: 'Variable', required: false },
    ],
    calculating: 'AST/ALT ratio',
  },
  differentialDiagnosis: [
    {
      condition: 'NAFLD/NASH',
      pretestProbability: 'high',
      distinguishingFeatures: ['Metabolic syndrome', 'AST/ALT < 1', 'Mild elevation'],
      confirmatoryTest: 'Liver ultrasound, elastography',
      urgency: 'routine',
    },
    {
      condition: 'Alcoholic liver disease',
      pretestProbability: 'moderate',
      distinguishingFeatures: ['AST/ALT > 2:1', 'Elevated GGT', 'History of alcohol use'],
      confirmatoryTest: 'CDT, history',
      urgency: 'routine',
    },
    {
      condition: 'Viral hepatitis',
      pretestProbability: 'moderate',
      distinguishingFeatures: ['Risk factors', 'Fatigue', 'Jaundice'],
      confirmatoryTest: 'Hepatitis panel',
      urgency: 'urgent',
    },
    {
      condition: 'Medication-induced',
      pretestProbability: 'moderate',
      distinguishingFeatures: ['New medication', 'Temporal relationship'],
      confirmatoryTest: 'Medication review',
      urgency: 'routine',
    },
    {
      condition: 'Acute viral hepatitis/ischemia',
      pretestProbability: 'low',
      distinguishingFeatures: ['AST > 1000', 'Clinical context'],
      confirmatoryTest: 'Viral serologies, hemodynamics',
      urgency: 'emergent',
    },
  ],
  clinicalContext: {
    patientPopulation: ['General population (NAFLD)', 'Alcohol users', 'Medication users'],
    clinicalScenarios: ['Routine screening', 'Symptomatic hepatitis', 'Medication monitoring'],
    redFlags: ['AST/ALT > 1000', 'Encephalopathy', 'Coagulopathy', 'Jaundice with elevated INR'],
  },
  workup: {
    additionalLabs: ['Hepatitis panel', 'Iron studies', 'Ceruloplasmin', 'Alpha-1 antitrypsin', 'Autoimmune markers'],
    imaging: ['Liver ultrasound', 'CT/MRI if mass suspected'],
    procedures: ['Liver biopsy if diagnosis unclear'],
    clinicalPearls: ['AST/ALT > 2:1 suggests alcohol', 'ALT > AST suggests viral/NAFLD', 'AST > 1000 suggests ischemia or toxin'],
  },
  management: {
    immediate: ['Stop hepatotoxic medications', 'Supportive care'],
    definitive: ['Treat underlying cause', 'Lifestyle modification for NAFLD', 'Abstinence for alcohol'],
    monitoring: ['Serial LFTs', 'Fibrosis assessment'],
  },
  explanations: {
    level1: 'Liver enzyme elevation indicating liver irritation or damage.',
    level2: 'Elevated liver enzymes from fatty liver, alcohol, viral infection, or medications.',
    level3: 'Hepatocellular injury pattern. AST and ALT leak from damaged hepatocytes.',
    level4: 'Transaminases indicate hepatocyte integrity. Pattern recognition: AST/ALT ratio, degree of elevation, and associated findings guide differential.',
  },
});

// Acute kidney injury patterns
abnormalPatterns.set('aki-prerenal', {
  id: 'aki-prerenal',
  name: 'Prerenal Acute Kidney Injury',
  category: 'renal',
  description: 'AKI due to decreased renal perfusion',
  pattern: {
    primaryAbnormality: 'Rising Cr, low UOP',
    associatedFindings: [
      { lab: 'BUN/Cr ratio', finding: '> 20:1', required: false },
      { lab: 'Urine Na', finding: '< 20 mEq/L', required: false },
      { lab: 'FeNa', finding: '< 1%', required: false },
      { lab: 'Urine osmolality', finding: '> 500 mOsm/kg', required: false },
    ],
    calculating: 'FeNa = (Urine Na × Serum Cr) / (Serum Na × Urine Cr) × 100',
  },
  differentialDiagnosis: [
    {
      condition: 'Hypovolemia',
      pretestProbability: 'high',
      distinguishingFeatures: ['Volume loss history', 'Orthostasis', 'Dry mucous membranes'],
      confirmatoryTest: 'Clinical assessment',
      urgency: 'urgent',
    },
    {
      condition: 'CHF',
      pretestProbability: 'moderate',
      distinguishingFeatures: ['Volume overload signs', 'Low cardiac output', 'Elevated JVP'],
      confirmatoryTest: 'Echo, BNP',
      urgency: 'urgent',
    },
    {
      condition: 'Hepatorenal syndrome',
      pretestProbability: 'low',
      distinguishingFeatures: ['Cirrhosis', 'No response to volume', 'Low urine Na'],
      confirmatoryTest: 'Clinical diagnosis of exclusion',
      urgency: 'emergent',
    },
    {
      condition: 'NSAIDs/ACEi',
      pretestProbability: 'moderate',
      distinguishingFeatures: ['Medication history', 'Afferent arteriole constriction'],
      confirmatoryTest: 'Medication review',
      urgency: 'urgent',
    },
  ],
  clinicalContext: {
    patientPopulation: ['Elderly', 'CHF patients', 'Cirrhosis patients'],
    clinicalScenarios: ['Volume depletion', 'Cardiogenic shock', 'Sepsis'],
    redFlags: ['Refractory to volume', 'Progressive azotemia', 'Uremic symptoms'],
  },
  workup: {
    additionalLabs: ['BUN/Cr', 'Urinalysis', 'Urine electrolytes', 'FeNa or FeUrea'],
    imaging: ['Renal ultrasound (rule out obstruction)'],
    procedures: ['Volume challenge'],
    clinicalPearls: ['Prerenal: kidneys are working to conserve sodium and water', 'FeNa < 1% suggests prerenal (unless diuretics)', 'BUN/Cr > 20:1 supports prerenal'],
  },
  management: {
    immediate: ['Volume resuscitation if hypovolemic', 'Optimize cardiac output'],
    definitive: ['Treat underlying cause', 'Avoid nephrotoxins'],
    monitoring: ['Creatinine daily', 'Urine output', 'Volume status'],
  },
  explanations: {
    level1: 'Kidney problems caused by not enough blood flow to the kidneys.',
    level2: 'Kidney injury from decreased blood flow, often from dehydration or heart problems.',
    level3: 'Functional kidney response to decreased perfusion. Kidneys intact but underperfused.',
    level4: 'Prerenal azotemia represents appropriate renal response to decreased effective arterial blood volume. Kidneys avidly retain sodium (FeNa < 1%) and concentrate urine.',
  },
});

// ============================================================================
// LAB COMBINATION PATTERNS
// ============================================================================

const combinationPatterns: LabCombinationPattern[] = [
  {
    id: 'triad-dka',
    name: 'DKA Triad',
    description: 'Classic laboratory findings in diabetic ketoacidosis',
    labs: {
      glucose: { expected: '> 250 mg/dL', mechanism: 'Insulin deficiency' },
      bicarbonate: { expected: '< 18 mEq/L', mechanism: 'Ketoacid accumulation' },
      ph: { expected: '< 7.30', mechanism: 'Metabolic acidosis' },
      ketones: { expected: 'Positive', mechanism: 'Fat metabolism' },
      anionGap: { expected: 'Elevated', mechanism: 'Unmeasured anions (ketones)' },
    },
    differential: ['DKA', 'HHS', 'Alcoholic ketoacidosis', 'Starvation ketosis'],
    clinicalSignificance: ['Medical emergency', 'Requires insulin and fluids', 'Monitor potassium closely'],
  },
  {
    id: 'pattern-cholestasis',
    name: 'Cholestatic Pattern',
    description: 'Obstructive liver disease pattern',
    labs: {
      alp: { expected: 'Elevated disproportionately', mechanism: 'Biliary epithelial damage' },
      ggt: { expected: 'Elevated', mechanism: 'Induced by alcohol/drugs/biliary obstruction' },
      bilirubin: { expected: 'Elevated, predominantly direct', mechanism: 'Impaired bile flow' },
      alt: { expected: 'Normal or mildly elevated', mechanism: 'Hepatocyte preservation' },
    },
    differential: ['Biliary obstruction', 'Primary biliary cholangitis', 'Primary sclerosing cholangitis', 'Medication-induced'],
    clinicalSignificance: ['Requires imaging to rule out obstruction', 'Pruritis common', 'Fat malabsorption'],
  },
  {
    id: 'pattern-hepatocellular',
    name: 'Hepatocellular Pattern',
    description: 'Hepatocyte injury pattern',
    labs: {
      alt: { expected: 'Elevated disproportionately', mechanism: 'Hepatocyte leakage' },
      ast: { expected: 'Elevated', mechanism: 'Hepatocyte/mitochondrial damage' },
      alp: { expected: 'Normal or mildly elevated', mechanism: 'Relative preservation of bile ducts' },
      bilirubin: { expected: 'Variable', mechanism: 'Variable severity' },
    },
    differential: ['Viral hepatitis', 'NAFLD', 'Alcoholic hepatitis', 'Ischemic hepatitis', 'Toxic/medication-induced'],
    clinicalSignificance: ['Degree of elevation guides urgency', 'AST/ALT ratio helps etiology'],
  },
];

// ============================================================================
// CRITICAL VALUES
// ============================================================================

const criticalValues: CriticalValue[] = [
  {
    lab: 'Sodium',
    criticalLow: '< 120 mEq/L',
    criticalHigh: '> 160 mEq/L',
    clinicalSignificance: 'Risk of seizures and cerebral edema',
    immediateActions: ['Neurologic monitoring', 'Slow correction', 'Treat underlying cause'],
    lifeThreatening: true,
  },
  {
    lab: 'Potassium',
    criticalLow: '< 2.8 mEq/L',
    criticalHigh: '> 6.5 mEq/L',
    clinicalSignificance: 'Cardiac arrhythmias',
    immediateActions: ['ECG', 'Cardiac monitoring', 'Calcium for membrane stabilization (if high)'],
    lifeThreatening: true,
  },
  {
    lab: 'Glucose',
    criticalLow: '< 40 mg/dL',
    criticalHigh: '> 1000 mg/dL',
    clinicalSignificance: 'Hypoglycemia: seizures, death. Hyperglycemia: DKA/HHS',
    immediateActions: ['Glucose monitoring', 'Insulin protocol (if high)', 'D50 (if low)'],
    lifeThreatening: true,
  },
  {
    lab: 'Hemoglobin',
    criticalLow: '< 7.0 g/dL',
    clinicalSignificance: 'Severe anemia, risk of ischemia',
    immediateActions: ['Transfusion consideration', 'Oxygen', 'Monitor for bleeding'],
    lifeThreatening: true,
  },
  {
    lab: 'Platelets',
    criticalLow: '< 20,000/μL',
    clinicalSignificance: 'Risk of spontaneous bleeding',
    immediateActions: ['Bleeding precautions', 'Transfusion if bleeding', 'Avoid procedures'],
    lifeThreatening: true,
  },
  {
    lab: 'WBC',
    criticalLow: '< 2000/μL',
    criticalHigh: '> 30,000/μL',
    clinicalSignificance: 'Severe immunosuppression or severe infection/leukemia',
    immediateActions: ['Infection precautions', 'Neutropenic precautions (if low)', 'Blood cultures'],
    lifeThreatening: true,
  },
  {
    lab: 'pH',
    criticalLow: '< 7.20',
    criticalHigh: '> 7.60',
    clinicalSignificance: 'Severe acidosis or alkalosis',
    immediateActions: ['Ventilatory support', 'Bicarbonate (if severe acidosis)', 'Treat underlying cause'],
    lifeThreatening: true,
  },
  {
    lab: 'pCO2',
    criticalHigh: '> 70 mmHg',
    clinicalSignificance: 'Severe respiratory acidosis, risk of obtundation',
    immediateActions: ['Ventilatory support', 'Reversal of sedation'],
    lifeThreatening: true,
  },
  {
    lab: 'Troponin',
    criticalHigh: 'Above 99th percentile with clinical context',
    clinicalSignificance: 'Myocardial injury/infarction',
    immediateActions: ['ECG', 'Cardiac monitoring', 'Cardiology consultation'],
    lifeThreatening: true,
  },
  {
    lab: 'Creatinine',
    criticalHigh: '> 10 mg/dL or rapid rise',
    clinicalSignificance: 'Severe renal failure, uremic complications',
    immediateActions: ['Nephrology consultation', 'Dialysis consideration', 'Electrolyte monitoring'],
    lifeThreatening: false,
  },
  {
    lab: 'INR',
    criticalHigh: '> 5.0 (not on warfarin)',
    clinicalSignificance: 'Severe coagulopathy, bleeding risk',
    immediateActions: ['FFP if bleeding', 'Vitamin K', 'Hold anticoagulants'],
    lifeThreatening: true,
  },
];

// ============================================================================
// LAB ARTIFACTS
// ============================================================================

const labArtifacts: LabArtifact[] = [
  {
    abnormality: 'Hyperkalemia',
    causes: [
      { mechanism: 'Hemolysis', cause: 'Traumatic draw, delayed processing' },
      { mechanism: 'Thrombocytosis', cause: 'Platelet clumping releases K+' },
      { mechanism: 'Fist clenching', cause: 'Local potassium release' },
    ],
    howToVerify: ['Repeat with careful technique', 'Check for hemolysis', 'Plasma vs serum potassium'],
    clinicalContext: ['Always correlate with ECG', 'Patient asymptomatic'],
  },
  {
    abnormality: 'Hyponatremia',
    causes: [
      { mechanism: 'Pseudohyponatremia', cause: 'Hyperlipidemia or hyperproteinemia' },
      { mechanism: 'Sample dilution', cause: 'IV fluid contamination' },
    ],
    howToVerify: ['Direct ion-selective electrode', 'Check serum osmolality', 'Lipid panel'],
    clinicalContext: ['Normal osmolality suggests artifact', 'Patient asymptomatic'],
  },
  {
    abnormality: 'Hyperglycemia',
    causes: [
      { mechanism: 'Sample degradation', cause: 'Delayed processing without glycolysis inhibitor' },
    ],
    howToVerify: ['Repeat with fluoride tube', 'Check HbA1c'],
    clinicalContext: ['Unexpected result in non-diabetic'],
  },
  {
    abnormality: 'Thrombocytopenia',
    causes: [
      { mechanism: 'Pseudothrombocytopenia', cause: 'EDTA-dependent agglutination' },
      { mechanism: 'Clumping', cause: 'Delayed mixing' },
    ],
    howToVerify: ['Repeat with citrate tube', 'Check peripheral smear for clumping'],
    clinicalContext: ['Patient without bleeding'],
  },
];

// ============================================================================
// EXPORT FUNCTIONS
// ============================================================================

export function getAbnormalPattern(id: string): LabAbnormalityPattern | undefined {
  return abnormalPatterns.get(id);
}

export function getAllAbnormalPatterns(): LabAbnormalityPattern[] {
  return Array.from(abnormalPatterns.values());
}

export function getPatternsByCategory(category: string): LabAbnormalityPattern[] {
  return getAllAbnormalPatterns().filter(p => p.category === category);
}

export function getCombinationPatterns(): LabCombinationPattern[] {
  return combinationPatterns;
}

export function getCriticalValues(): CriticalValue[] {
  return criticalValues;
}

export function getCriticalValue(lab: string): CriticalValue | undefined {
  return criticalValues.find(cv => cv.lab.toLowerCase() === lab.toLowerCase());
}

export function getLabArtifacts(): LabArtifact[] {
  return labArtifacts;
}

export function searchPatterns(query: string): LabAbnormalityPattern[] {
  const lowerQuery = query.toLowerCase();
  return getAllAbnormalPatterns().filter(p =>
    p.name.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.differentialDiagnosis.some(d => d.condition.toLowerCase().includes(lowerQuery))
  );
}
