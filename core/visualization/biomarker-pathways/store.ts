/**
 * Biomarker Pathway Visualization Data Store
 *
 * Connects lab results to metabolic pathways
 * with enzyme steps, abnormal states, and treatment targets.
 */

import type {
  BiomarkerPathway,
  LabPathwayLink,
  MetabolicPathwayCategory,
  BiomarkerVisualizationStatistics,
} from './types';

// ============================================================================
// BIOMARKER PATHWAYS
// ============================================================================

const biomarkerPathways = new Map<string, BiomarkerPathway>();

// ----------------------------------------------------------------------------
// Heme Synthesis and Bilirubin Metabolism
// ----------------------------------------------------------------------------

biomarkerPathways.set('heme-bilirubin', {
  id: 'heme-bilirubin',
  name: 'Heme Synthesis and Bilirubin Metabolism',
  category: 'heme',
  description: 'Pathway from porphyrin synthesis through heme to bilirubin excretion',
  linkedLabs: ['bilirubin', 'direct-bilirubin', 'hemoglobin', 'reticulocyte-count'],
  steps: [
    {
      stepNumber: 1,
      enzyme: 'ALA Synthase (ALAS)',
      ecNumber: '2.3.1.37',
      gene: 'ALAS1/ALAS2',
      substrate: 'Glycine + Succinyl-CoA',
      product: 'δ-Aminolevulinic acid (ALA)',
      cofactors: ['Pyridoxal phosphate (B6)'],
      location: 'mitochondria',
      organLocation: 'Bone marrow (erythroid), Liver',
      regulation: ['Rate-limiting step', 'Inhibited by heme (feedback)'],
      clinicalNote: 'Lead inhibits ALAS; ALAS2 mutations cause sideroblastic anemia',
    },
    {
      stepNumber: 2,
      enzyme: 'ALA Dehydratase (ALAD)',
      ecNumber: '4.2.1.24',
      gene: 'ALAD',
      substrate: '2 ALA',
      product: 'Porphobilinogen (PBG)',
      location: 'cytoplasm',
      organLocation: 'Bone marrow, Liver',
      clinicalNote: 'Lead inhibits ALAD; ALAD porphyria is rare',
    },
    {
      stepNumber: 3,
      enzyme: 'PBG Deaminase',
      ecNumber: '2.5.1.61',
      gene: 'HMBS',
      substrate: '4 PBG',
      product: 'Hydroxymethylbilane',
      location: 'cytoplasm',
      organLocation: 'Bone marrow, Liver',
      clinicalNote: 'Deficiency causes acute intermittent porphyria (AIP)',
    },
    {
      stepNumber: 4,
      enzyme: 'Uroporphyrinogen III Synthase',
      ecNumber: '4.2.1.75',
      gene: 'UROS',
      substrate: 'Hydroxymethylbilane',
      product: 'Uroporphyrinogen III',
      location: 'cytoplasm',
      organLocation: 'Bone marrow, Liver',
      clinicalNote: 'Deficiency causes congenital erythropoietic porphyria',
    },
    {
      stepNumber: 5,
      enzyme: 'Uroporphyrinogen Decarboxylase',
      ecNumber: '4.1.1.37',
      gene: 'UROD',
      substrate: 'Uroporphyrinogen III',
      product: 'Coproporphyrinogen III',
      location: 'cytoplasm',
      organLocation: 'Bone marrow, Liver',
      clinicalNote: 'Deficiency causes porphyria cutanea tarda (PCT)',
    },
    {
      stepNumber: 6,
      enzyme: 'Coproporphyrinogen Oxidase',
      ecNumber: '1.3.3.3',
      gene: 'CPOX',
      substrate: 'Coproporphyrinogen III',
      product: 'Protoporphyrinogen IX',
      location: 'mitochondria',
      organLocation: 'Bone marrow, Liver',
      clinicalNote: 'Deficiency causes hereditary coproporphyria',
    },
    {
      stepNumber: 7,
      enzyme: 'Protoporphyrinogen Oxidase',
      ecNumber: '1.3.3.4',
      gene: 'PPOX',
      substrate: 'Protoporphyrinogen IX',
      product: 'Protoporphyrin IX',
      location: 'mitochondria',
      organLocation: 'Bone marrow, Liver',
      clinicalNote: 'Deficiency causes variegate porphyria',
    },
    {
      stepNumber: 8,
      enzyme: 'Ferrochelatase',
      ecNumber: '4.99.1.1',
      gene: 'FECH',
      substrate: 'Protoporphyrin IX + Fe²⁺',
      product: 'Heme',
      cofactors: ['Iron'],
      location: 'mitochondria',
      organLocation: 'Bone marrow, Liver',
      clinicalNote: 'Deficiency causes erythropoietic protoporphyria; lead inhibits this step',
    },
    {
      stepNumber: 9,
      enzyme: 'Heme Oxygenase',
      ecNumber: '1.14.14.18',
      gene: 'HMOX1',
      substrate: 'Heme (from senescent RBCs)',
      product: 'Biliverdin + CO + Fe',
      location: 'endoplasmic-reticulum',
      organLocation: 'Spleen, Liver (macrophages)',
      clinicalNote: 'Rate-limiting for heme degradation; releases CO and iron',
    },
    {
      stepNumber: 10,
      enzyme: 'Biliverdin Reductase',
      ecNumber: '1.3.1.24',
      gene: 'BLVRA',
      substrate: 'Biliverdin',
      product: 'Unconjugated bilirubin',
      location: 'cytoplasm',
      organLocation: 'Spleen, Liver',
      clinicalNote: 'Unconjugated bilirubin is lipid-soluble, bound to albumin in blood',
    },
    {
      stepNumber: 11,
      enzyme: 'UGT1A1 (UDP-glucuronosyltransferase)',
      ecNumber: '2.4.1.17',
      gene: 'UGT1A1',
      substrate: 'Unconjugated bilirubin',
      product: 'Conjugated bilirubin (bilirubin diglucuronide)',
      location: 'endoplasmic-reticulum',
      organLocation: 'Liver (hepatocytes)',
      clinicalNote: 'Deficiency causes Gilbert syndrome (mild) or Crigler-Najjar (severe)',
    },
    {
      stepNumber: 12,
      enzyme: 'MRP2 (canalicular transporter)',
      ecNumber: 'N/A',
      gene: 'ABCC2',
      substrate: 'Conjugated bilirubin',
      product: 'Bile excretion',
      location: 'plasma-membrane',
      organLocation: 'Liver (canalicular membrane)',
      clinicalNote: 'Deficiency causes Dubin-Johnson syndrome',
    },
  ],
  normalState: {
    description: 'Balanced heme synthesis and bilirubin excretion maintains normal levels',
    labRanges: 'Total bilirubin 0.1-1.2 mg/dL, Direct bilirubin <0.3 mg/dL',
  },
  abnormalStates: [
    {
      state: 'increased',
      cause: 'Hemolysis (increased RBC breakdown)',
      affectedSteps: [9, 10],
      labChanges: [
        { labId: 'bilirubin', direction: 'increased', explanation: 'Increased unconjugated bilirubin from excess heme degradation' },
        { labId: 'hemoglobin', direction: 'decreased', explanation: 'Anemia from RBC destruction' },
        { labId: 'reticulocyte-count', direction: 'increased', explanation: 'Bone marrow compensatory response' },
      ],
      clinicalConsequences: ['Jaundice', 'Anemia', 'Splenomegaly'],
      conditions: ['Autoimmune hemolytic anemia', 'Sickle cell disease', 'G6PD deficiency', 'Hereditary spherocytosis'],
    },
    {
      state: 'blocked',
      cause: 'Hepatocyte dysfunction (hepatitis, cirrhosis)',
      affectedSteps: [11],
      labChanges: [
        { labId: 'bilirubin', direction: 'increased', explanation: 'Mixed elevation - both conjugated and unconjugated' },
        { labId: 'direct-bilirubin', direction: 'increased', explanation: 'Impaired excretion of conjugated bilirubin' },
      ],
      clinicalConsequences: ['Jaundice', 'Dark urine', 'Pale stools (if cholestatic)'],
      conditions: ['Viral hepatitis', 'Alcoholic hepatitis', 'Cirrhosis', 'Drug-induced liver injury'],
    },
    {
      state: 'blocked',
      cause: 'Biliary obstruction',
      affectedSteps: [12],
      labChanges: [
        { labId: 'bilirubin', direction: 'increased', explanation: 'Predominantly conjugated (direct) hyperbilirubinemia' },
        { labId: 'direct-bilirubin', direction: 'increased', explanation: 'Blocked excretion into bile' },
      ],
      clinicalConsequences: ['Obstructive jaundice', 'Clay-colored stools', 'Dark urine', 'Pruritus'],
      conditions: ['Gallstones', 'Pancreatic cancer', 'Cholangiocarcinoma', 'Primary sclerosing cholangitis'],
    },
    {
      state: 'decreased',
      cause: 'Gilbert syndrome (reduced UGT1A1 activity)',
      affectedSteps: [11],
      labChanges: [
        { labId: 'bilirubin', direction: 'increased', explanation: 'Mild unconjugated hyperbilirubinemia, fluctuating' },
      ],
      clinicalConsequences: ['Benign jaundice during fasting or stress'],
      conditions: ['Gilbert syndrome (affects 5-10% of population)'],
    },
  ],
  treatmentTargets: [
    {
      targetStep: 9,
      drug: 'Phototherapy (blue light)',
      mechanism: 'product-replacement',
      target: 'Unconjugated bilirubin',
      effect: 'Converts bilirubin to water-soluble isomers for excretion',
      labEffect: [{ labId: 'bilirubin', change: 'Decreased unconjugated bilirubin' }],
      sideEffects: ['Bronze baby syndrome (rare)'],
    },
    {
      targetStep: 11,
      drug: 'Phenobarbital',
      mechanism: 'enzyme-inducer',
      target: 'UGT1A1',
      effect: 'Induces glucuronidation of bilirubin',
      labEffect: [{ labId: 'bilirubin', change: 'Decreased total bilirubin' }],
      sideEffects: ['Sedation', 'CYP induction'],
    },
  ],
  modelHighlights: [
    { organId: 'bone-marrow', organName: 'Bone Marrow', highlightColor: '#ff6b6b', intensity: 0.8, label: 'Heme synthesis', stepReferences: [1, 2, 3, 4, 5, 6, 7, 8] },
    { organId: 'spleen', organName: 'Spleen', highlightColor: '#feca57', intensity: 0.8, label: 'RBC breakdown', stepReferences: [9, 10] },
    { organId: 'liver', organName: 'Liver', highlightColor: '#48dbfb', intensity: 0.8, label: 'Bilirubin conjugation', stepReferences: [11, 12] },
    { organId: 'gallbladder', organName: 'Gallbladder', highlightColor: '#1dd1a1', intensity: 0.6, label: 'Bile storage', stepReferences: [12] },
  ],
  relatedPathways: ['enterohepatic-circulation'],
  explanations: {
    level1: 'When old red blood cells break down, they release heme which becomes bilirubin - the yellow substance that causes jaundice when it builds up.',
    level2: 'Heme from aging red blood cells is converted to bilirubin in the spleen, then travels to the liver where it\'s modified to be water-soluble and excreted in bile. Problems anywhere in this pathway can cause jaundice.',
    level3: 'Heme synthesis requires 8 enzymes, with porphyrias resulting from specific enzyme defects. Heme degradation produces unconjugated bilirubin, which is conjugated by hepatic UGT1A1 for biliary excretion. Unconjugated hyperbilirubinemia indicates hemolysis or conjugation defect; conjugated elevation suggests hepatic or biliary disease.',
    level4: 'The heme pathway begins with glycine and succinyl-CoA forming ALA (rate-limiting, inhibited by heme feedback). Eight enzymatic steps produce protoporphyrin IX, which ferrochelatase combines with iron to form heme. RBC senescence triggers macrophage phagocytosis; heme oxygenase produces biliverdin, CO, and iron. Biliverdin reductase forms unconjugated bilirubin, which is albumin-bound, hepatocyte-uptaken via OATP, conjugated by UGT1A1, and excreted via MRP2.',
    level5: 'ALAS1 (housekeeping) and ALAS2 (erythroid-specific) are differentially regulated - ALAS1 by heme feedback via Bach1 transcription factor, ALAS2 by iron via IRP/IRE system. Lead poisoning inhibits ALAD and ferrochelatase, causing ALA accumulation and microcytic anemia. Gilbert syndrome involves UGT1A1*28 promoter polymorphism (TA repeat) reducing expression. Bilirubin glucuronides are deconjugated by intestinal bacteria; urobilinogen undergoes enterohepatic circulation or fecal excretion as stercobilin.',
  },
  keyFacts: [
    'Heme synthesis requires 8 enzymes across mitochondria and cytoplasm',
    'Lead inhibits 2 enzymes: ALAD and ferrochelatase',
    'Gilbert syndrome affects 5-10% of the population',
    'Unconjugated bilirubin is neurotoxic (kernicterus in neonates)',
    'Bilirubin is the only human molecule excreted as a color (yellow bile, brown stool)',
  ],
});

// ----------------------------------------------------------------------------
// Urea Cycle and BUN
// ----------------------------------------------------------------------------

biomarkerPathways.set('urea-cycle', {
  id: 'urea-cycle',
  name: 'Urea Cycle',
  category: 'amino-acid',
  description: 'Hepatic cycle converting toxic ammonia to urea for renal excretion',
  linkedLabs: ['bun', 'ammonia', 'creatinine'],
  steps: [
    {
      stepNumber: 1,
      enzyme: 'Carbamoyl Phosphate Synthetase I (CPS1)',
      ecNumber: '6.3.4.16',
      gene: 'CPS1',
      substrate: 'NH₃ + CO₂ + 2 ATP',
      product: 'Carbamoyl phosphate',
      cofactors: ['N-acetylglutamate (allosteric activator)'],
      location: 'mitochondria',
      organLocation: 'Liver',
      regulation: ['Rate-limiting step', 'Activated by N-acetylglutamate'],
      clinicalNote: 'CPS1 deficiency causes severe hyperammonemia',
    },
    {
      stepNumber: 2,
      enzyme: 'Ornithine Transcarbamylase (OTC)',
      ecNumber: '2.1.3.3',
      gene: 'OTC',
      substrate: 'Carbamoyl phosphate + Ornithine',
      product: 'Citrulline',
      location: 'mitochondria',
      organLocation: 'Liver',
      clinicalNote: 'OTC deficiency is most common urea cycle disorder (X-linked)',
    },
    {
      stepNumber: 3,
      enzyme: 'Argininosuccinate Synthetase (ASS)',
      ecNumber: '6.3.4.5',
      gene: 'ASS1',
      substrate: 'Citrulline + Aspartate + ATP',
      product: 'Argininosuccinate',
      location: 'cytoplasm',
      organLocation: 'Liver',
      clinicalNote: 'Deficiency causes citrullinemia type I',
    },
    {
      stepNumber: 4,
      enzyme: 'Argininosuccinate Lyase (ASL)',
      ecNumber: '4.3.2.1',
      gene: 'ASL',
      substrate: 'Argininosuccinate',
      product: 'Arginine + Fumarate',
      location: 'cytoplasm',
      organLocation: 'Liver',
      clinicalNote: 'Deficiency causes argininosuccinic aciduria; fumarate links to TCA cycle',
    },
    {
      stepNumber: 5,
      enzyme: 'Arginase',
      ecNumber: '3.5.3.1',
      gene: 'ARG1',
      substrate: 'Arginine',
      product: 'Urea + Ornithine',
      location: 'cytoplasm',
      organLocation: 'Liver',
      clinicalNote: 'Final step; ornithine re-enters cycle; urea enters blood for renal excretion',
    },
  ],
  normalState: {
    description: 'Efficient conversion of protein-derived ammonia to urea maintains low ammonia levels',
    labRanges: 'BUN 7-20 mg/dL, Ammonia <35 µmol/L',
  },
  abnormalStates: [
    {
      state: 'increased',
      cause: 'Renal failure (decreased urea excretion)',
      affectedSteps: [],
      labChanges: [
        { labId: 'bun', direction: 'increased', explanation: 'Reduced renal clearance of urea' },
        { labId: 'creatinine', direction: 'increased', explanation: 'Parallel decrease in GFR' },
      ],
      clinicalConsequences: ['Uremia', 'Encephalopathy', 'Nausea'],
      conditions: ['Acute kidney injury', 'Chronic kidney disease', 'Dehydration'],
    },
    {
      state: 'increased',
      cause: 'Increased protein catabolism',
      affectedSteps: [1, 2, 3, 4, 5],
      labChanges: [
        { labId: 'bun', direction: 'increased', explanation: 'Increased urea production from protein breakdown' },
      ],
      clinicalConsequences: ['Elevated BUN with normal creatinine'],
      conditions: ['GI bleeding', 'Catabolic states', 'High protein diet', 'Corticosteroids'],
    },
    {
      state: 'blocked',
      cause: 'Urea cycle enzyme deficiency',
      affectedSteps: [1, 2, 3, 4, 5],
      labChanges: [
        { labId: 'bun', direction: 'decreased', explanation: 'Impaired urea synthesis' },
        { labId: 'ammonia', direction: 'increased', explanation: 'Accumulation of toxic ammonia' },
      ],
      clinicalConsequences: ['Hyperammonemia', 'Encephalopathy', 'Cerebral edema', 'Coma'],
      conditions: ['OTC deficiency', 'CPS1 deficiency', 'Citrullinemia', 'Argininosuccinic aciduria'],
    },
    {
      state: 'decreased',
      cause: 'Liver failure',
      affectedSteps: [1, 2, 3, 4, 5],
      labChanges: [
        { labId: 'bun', direction: 'decreased', explanation: 'Reduced hepatic urea synthesis capacity' },
        { labId: 'ammonia', direction: 'increased', explanation: 'Impaired ammonia detoxification' },
      ],
      clinicalConsequences: ['Hepatic encephalopathy', 'Low BUN despite catabolism'],
      conditions: ['Acute liver failure', 'Decompensated cirrhosis'],
    },
  ],
  treatmentTargets: [
    {
      targetStep: 1,
      drug: 'Sodium benzoate',
      mechanism: 'substrate-supplement',
      target: 'Alternative nitrogen excretion pathway',
      effect: 'Conjugates with glycine to form hippurate (excreted in urine)',
      labEffect: [{ labId: 'ammonia', change: 'Decreased ammonia levels' }],
      sideEffects: ['Nausea', 'Vomiting'],
    },
    {
      targetStep: 1,
      drug: 'Sodium phenylbutyrate',
      mechanism: 'substrate-supplement',
      target: 'Alternative nitrogen excretion pathway',
      effect: 'Converted to phenylacetate which conjugates glutamine',
      labEffect: [{ labId: 'ammonia', change: 'Decreased ammonia levels' }],
      sideEffects: ['Body odor', 'Menstrual irregularities'],
    },
    {
      targetStep: 1,
      drug: 'N-carbamylglutamate (Carbaglu)',
      mechanism: 'enzyme-inducer',
      target: 'CPS1',
      effect: 'Replaces N-acetylglutamate in CPS1 deficiency or NAGS deficiency',
      labEffect: [{ labId: 'ammonia', change: 'Decreased ammonia levels' }],
    },
  ],
  modelHighlights: [
    { organId: 'liver', organName: 'Liver', highlightColor: '#ff6b6b', intensity: 0.9, label: 'Urea synthesis', stepReferences: [1, 2, 3, 4, 5] },
    { organId: 'kidney', organName: 'Kidney', highlightColor: '#48dbfb', intensity: 0.7, label: 'Urea excretion', stepReferences: [] },
  ],
  relatedPathways: ['glucose-insulin'],
  explanations: {
    level1: 'The urea cycle is how your liver turns ammonia (a toxic waste from protein) into urea, which your kidneys can safely remove in urine.',
    level2: 'Protein digestion produces ammonia, which is toxic. The liver converts ammonia to urea through 5 enzymatic steps (urea cycle). Urea travels in blood to kidneys for excretion. BUN measures this urea.',
    level3: 'The urea cycle occurs in liver mitochondria and cytoplasm. CPS1 (rate-limiting, requires N-acetylglutamate) produces carbamoyl phosphate. OTC, ASS, ASL, and arginase complete the cycle, regenerating ornithine. Defects cause hyperammonemia. BUN rises with renal failure or increased protein catabolism.',
    level4: 'The urea cycle disposes of 2 nitrogen atoms per urea: one from free ammonia (via CPS1) and one from aspartate (via ASS). Fumarate from ASL connects to TCA cycle. OTC deficiency (X-linked) is most common; orotic aciduria distinguishes it from CPS1 deficiency (CPS1 deficiency has no orotic acid elevation). N-acetylglutamate synthetase (NAGS) activates CPS1.',
    level5: 'Ammonia detoxification involves glutamine synthetase (perivenous hepatocytes) and urea cycle (periportal hepatocytes). Glutaminase in kidney generates ammonia for acid-base regulation. In liver failure, muscle becomes the primary ammonia sink via glutamine synthesis. Portosystemic shunts bypass hepatic detoxification, causing hyperammonemia. Lactulose treats hepatic encephalopathy by acidifying colon (trapping NH₄⁺) and promoting bacterial nitrogen incorporation.',
  },
  keyFacts: [
    'CPS1 is rate-limiting and requires N-acetylglutamate',
    'OTC deficiency is the most common urea cycle disorder (X-linked)',
    'Two nitrogens per urea: one from NH₃, one from aspartate',
    'BUN/Cr ratio >20 suggests prerenal azotemia or GI bleeding',
    'Lactulose treats hepatic encephalopathy by reducing ammonia absorption',
  ],
});

// ----------------------------------------------------------------------------
// Cholesterol Synthesis and Statin Mechanism
// ----------------------------------------------------------------------------

biomarkerPathways.set('cholesterol-synthesis', {
  id: 'cholesterol-synthesis',
  name: 'Cholesterol Synthesis Pathway',
  category: 'lipid',
  description: 'Hepatic cholesterol synthesis and the mechanism of statin therapy',
  linkedLabs: ['total-cholesterol', 'ldl', 'hdl', 'triglycerides'],
  steps: [
    {
      stepNumber: 1,
      enzyme: 'Acetyl-CoA Acetyltransferase (Thiolase)',
      ecNumber: '2.3.1.9',
      gene: 'ACAT1',
      substrate: '2 Acetyl-CoA',
      product: 'Acetoacetyl-CoA',
      location: 'cytoplasm',
      organLocation: 'Liver',
    },
    {
      stepNumber: 2,
      enzyme: 'HMG-CoA Synthase',
      ecNumber: '2.3.3.10',
      gene: 'HMGCS1',
      substrate: 'Acetoacetyl-CoA + Acetyl-CoA',
      product: 'HMG-CoA',
      location: 'cytoplasm',
      organLocation: 'Liver',
    },
    {
      stepNumber: 3,
      enzyme: 'HMG-CoA Reductase',
      ecNumber: '1.1.1.34',
      gene: 'HMGCR',
      substrate: 'HMG-CoA',
      product: 'Mevalonate',
      cofactors: ['NADPH'],
      location: 'endoplasmic-reticulum',
      organLocation: 'Liver',
      regulation: ['Rate-limiting step', 'Target of statins', 'SREBP-2 regulated'],
      clinicalNote: 'Target of statin drugs - competitive inhibitors',
    },
    {
      stepNumber: 4,
      enzyme: 'Mevalonate Kinase',
      ecNumber: '2.7.1.36',
      gene: 'MVK',
      substrate: 'Mevalonate',
      product: 'Mevalonate-5-phosphate',
      location: 'cytoplasm',
      organLocation: 'Liver',
    },
    {
      stepNumber: 5,
      enzyme: 'Multiple enzymes',
      substrate: 'Mevalonate-5-phosphate',
      product: 'Isopentenyl pyrophosphate (IPP)',
      location: 'cytoplasm',
      organLocation: 'Liver',
      clinicalNote: 'IPP is precursor for other isoprenoids (CoQ10, dolichol)',
    },
    {
      stepNumber: 6,
      enzyme: 'Squalene Synthase',
      ecNumber: '2.5.1.21',
      gene: 'FDFT1',
      substrate: '2 Farnesyl-PP',
      product: 'Squalene',
      location: 'endoplasmic-reticulum',
      organLocation: 'Liver',
    },
    {
      stepNumber: 7,
      enzyme: 'Squalene Epoxidase',
      ecNumber: '1.14.14.17',
      gene: 'SQLE',
      substrate: 'Squalene',
      product: 'Squalene epoxide',
      location: 'endoplasmic-reticulum',
      organLocation: 'Liver',
    },
    {
      stepNumber: 8,
      enzyme: 'Lanosterol Synthase',
      ecNumber: '5.4.99.7',
      gene: 'LSS',
      substrate: 'Squalene epoxide',
      product: 'Lanosterol',
      location: 'endoplasmic-reticulum',
      organLocation: 'Liver',
    },
    {
      stepNumber: 9,
      enzyme: 'Multiple enzymes (19 steps)',
      substrate: 'Lanosterol',
      product: 'Cholesterol',
      location: 'endoplasmic-reticulum',
      organLocation: 'Liver',
      clinicalNote: '19 enzymatic steps convert lanosterol to cholesterol',
    },
  ],
  normalState: {
    description: 'Balanced cholesterol synthesis and clearance maintains normal levels',
    labRanges: 'Total cholesterol <200 mg/dL, LDL <100 mg/dL, HDL >40 mg/dL',
  },
  abnormalStates: [
    {
      state: 'increased',
      cause: 'Familial hypercholesterolemia (LDL receptor defect)',
      affectedSteps: [],
      labChanges: [
        { labId: 'total-cholesterol', direction: 'increased', explanation: 'Severely elevated due to impaired LDL clearance' },
        { labId: 'ldl', direction: 'increased', explanation: 'LDL receptor mutations prevent hepatic uptake' },
      ],
      clinicalConsequences: ['Premature atherosclerosis', 'Xanthomas', 'Arcus corneae'],
      conditions: ['Familial hypercholesterolemia (heterozygous or homozygous)'],
    },
    {
      state: 'increased',
      cause: 'Hypothyroidism',
      affectedSteps: [],
      labChanges: [
        { labId: 'total-cholesterol', direction: 'increased', explanation: 'Reduced LDL receptor expression' },
        { labId: 'ldl', direction: 'increased', explanation: 'Decreased hepatic LDL clearance' },
      ],
      clinicalConsequences: ['Hyperlipidemia', 'Accelerated atherosclerosis'],
      conditions: ['Primary hypothyroidism'],
    },
    {
      state: 'increased',
      cause: 'Nephrotic syndrome',
      affectedSteps: [3],
      labChanges: [
        { labId: 'total-cholesterol', direction: 'increased', explanation: 'Compensatory hepatic synthesis due to protein loss' },
        { labId: 'ldl', direction: 'increased', explanation: 'Increased VLDL production and LDL formation' },
      ],
      clinicalConsequences: ['Hyperlipidemia', 'Lipiduria'],
      conditions: ['Nephrotic syndrome'],
    },
  ],
  treatmentTargets: [
    {
      targetStep: 3,
      drug: 'Statins (atorvastatin, rosuvastatin, etc.)',
      mechanism: 'enzyme-inhibitor',
      target: 'HMG-CoA reductase',
      effect: 'Competitive inhibition of rate-limiting enzyme; hepatic cholesterol depletion upregulates LDL receptors',
      labEffect: [
        { labId: 'ldl', change: 'Decreased 30-50%' },
        { labId: 'total-cholesterol', change: 'Decreased' },
        { labId: 'hdl', change: 'Slight increase' },
      ],
      sideEffects: ['Myopathy', 'Elevated LFTs', 'Diabetes risk'],
    },
    {
      targetStep: 9,
      drug: 'Ezetimibe',
      mechanism: 'transporter-inhibitor',
      target: 'NPC1L1 (intestinal cholesterol absorption)',
      effect: 'Blocks intestinal cholesterol absorption',
      labEffect: [
        { labId: 'ldl', change: 'Additional 15-20% reduction with statin' },
      ],
      sideEffects: ['Diarrhea', 'Myalgia'],
    },
    {
      targetStep: 9,
      drug: 'PCSK9 inhibitors (evolocumab, alirocumab)',
      mechanism: 'receptor-agonist',
      target: 'PCSK9 (LDL receptor degradation)',
      effect: 'Prevents LDL receptor degradation, increasing hepatic LDL clearance',
      labEffect: [
        { labId: 'ldl', change: 'Decreased 50-70% additional' },
      ],
      sideEffects: ['Injection site reactions', 'Flu-like symptoms'],
    },
  ],
  modelHighlights: [
    { organId: 'liver', organName: 'Liver', highlightColor: '#ff6b6b', intensity: 0.9, label: 'Cholesterol synthesis', stepReferences: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
    { organId: 'intestine', organName: 'Intestine', highlightColor: '#48dbfb', intensity: 0.6, label: 'Cholesterol absorption', stepReferences: [] },
    { organId: 'artery', organName: 'Arteries', highlightColor: '#feca57', intensity: 0.7, label: 'Atherosclerosis site', stepReferences: [] },
  ],
  relatedPathways: ['enterohepatic-circulation'],
  explanations: {
    level1: 'Your liver makes cholesterol from the food you eat. Too much cholesterol can clog your arteries. Statin medicines block cholesterol production.',
    level2: 'Cholesterol is synthesized in the liver through many enzyme steps. HMG-CoA reductase is the key enzyme that statins block. When the liver makes less cholesterol, it pulls more from the blood, lowering LDL.',
    level3: 'Cholesterol synthesis involves mevalonate pathway enzymes, with HMG-CoA reductase as the rate-limiting step. Statins competitively inhibit this enzyme, depleting hepatocyte cholesterol. This activates SREBP-2, which upregulates LDL receptor expression, increasing LDL clearance from blood.',
    level4: 'SREBP-2 is the master regulator of cholesterol homeostasis. In ER membrane, SCAP binds SREBP-2; low cholesterol causes SCAP conformational change, allowing transport to Golgi for proteolytic activation. Nuclear SREBP-2 induces HMG-CoA reductase and LDL receptor genes. PCSK9 (also SREBP-2 induced) promotes LDL receptor degradation.',
    level5: 'Mevalonate pathway produces isoprenoids beyond cholesterol: CoQ10 (electron transport), dolichol (glycoprotein synthesis), farnesyl/geranylgeranyl (protein prenylation). Statin myopathy may relate to CoQ10 depletion. HMGCR degradation is accelerated by lanosterol (feed-forward regulation). LDL receptor undergoes clathrin-mediated endocytosis; in endosomes, LDL dissociates and receptor recycles unless PCSK9-bound (targets to lysosome). PCSK9 gain-of-function mutations cause severe hypercholesterolemia.',
  },
  keyFacts: [
    'HMG-CoA reductase is the rate-limiting enzyme and statin target',
    'Statins lower LDL by upregulating hepatic LDL receptors',
    'PCSK9 inhibitors prevent LDL receptor degradation',
    'Mevalonate pathway also produces CoQ10 (potential statin side effect link)',
    'SREBP-2 coordinates cholesterol synthesis and uptake genes',
  ],
});

// ----------------------------------------------------------------------------
// Coagulation Cascade
// ----------------------------------------------------------------------------

biomarkerPathways.set('coagulation-cascade', {
  id: 'coagulation-cascade',
  name: 'Coagulation Cascade',
  category: 'coagulation',
  description: 'Blood clotting pathway from initiation to fibrin formation',
  linkedLabs: ['pt', 'ptt', 'inr', 'fibrinogen', 'platelets'],
  steps: [
    {
      stepNumber: 1,
      enzyme: 'Tissue Factor (TF) / Factor VIIa complex',
      gene: 'F3, F7',
      substrate: 'Factor X',
      product: 'Factor Xa',
      location: 'extracellular',
      organLocation: 'Site of injury',
      regulation: ['Initiated by vascular injury exposing TF'],
      clinicalNote: 'Extrinsic pathway - measured by PT',
    },
    {
      stepNumber: 2,
      enzyme: 'Factor XIIa → XIa → IXa cascade',
      gene: 'F12, F11, F9',
      substrate: 'Factor XII → XI → IX',
      product: 'Factor IXa',
      location: 'extracellular',
      organLocation: 'Blood',
      clinicalNote: 'Intrinsic pathway - measured by PTT; Factor XII deficiency prolongs PTT without bleeding',
    },
    {
      stepNumber: 3,
      enzyme: 'Factor IXa/VIIIa complex (Tenase)',
      gene: 'F9, F8',
      substrate: 'Factor X',
      product: 'Factor Xa',
      cofactors: ['Ca²⁺', 'Phospholipid surface'],
      location: 'plasma-membrane',
      organLocation: 'Platelet surface',
      clinicalNote: 'Factor VIII deficiency = Hemophilia A; Factor IX deficiency = Hemophilia B',
    },
    {
      stepNumber: 4,
      enzyme: 'Factor Xa/Va complex (Prothrombinase)',
      gene: 'F10, F5',
      substrate: 'Prothrombin (Factor II)',
      product: 'Thrombin (Factor IIa)',
      cofactors: ['Ca²⁺', 'Phospholipid surface'],
      location: 'plasma-membrane',
      organLocation: 'Platelet surface',
      clinicalNote: 'Factor V Leiden mutation causes resistance to activated protein C',
    },
    {
      stepNumber: 5,
      enzyme: 'Thrombin',
      ecNumber: '3.4.21.5',
      gene: 'F2',
      substrate: 'Fibrinogen',
      product: 'Fibrin monomers',
      location: 'extracellular',
      organLocation: 'Blood',
      clinicalNote: 'Thrombin also activates factors V, VIII, XI, XIII and protein C',
    },
    {
      stepNumber: 6,
      enzyme: 'Factor XIIIa (Transglutaminase)',
      gene: 'F13A1, F13B',
      substrate: 'Fibrin monomers',
      product: 'Cross-linked fibrin clot',
      location: 'extracellular',
      organLocation: 'Blood',
      clinicalNote: 'Factor XIII deficiency causes delayed bleeding and poor wound healing',
    },
  ],
  normalState: {
    description: 'Balanced coagulation and anticoagulation maintains hemostasis without thrombosis',
    labRanges: 'PT 11-13 sec, INR 1.0, PTT 25-35 sec, Fibrinogen 200-400 mg/dL',
  },
  abnormalStates: [
    {
      state: 'decreased',
      cause: 'Hemophilia A (Factor VIII deficiency)',
      affectedSteps: [3],
      labChanges: [
        { labId: 'ptt', direction: 'increased', explanation: 'Intrinsic pathway impaired' },
        { labId: 'pt', direction: 'decreased', explanation: 'PT normal (extrinsic pathway intact)' },
      ],
      clinicalConsequences: ['Spontaneous bleeding', 'Hemarthrosis', 'Prolonged bleeding after injury'],
      conditions: ['Hemophilia A (X-linked recessive)'],
    },
    {
      state: 'decreased',
      cause: 'Warfarin therapy',
      affectedSteps: [1, 3, 4],
      labChanges: [
        { labId: 'pt', direction: 'increased', explanation: 'Vitamin K-dependent factors (II, VII, IX, X) reduced' },
        { labId: 'inr', direction: 'increased', explanation: 'Target INR 2-3 for most indications' },
        { labId: 'ptt', direction: 'increased', explanation: 'Also prolonged but PT more sensitive' },
      ],
      clinicalConsequences: ['Anticoagulation', 'Bleeding risk'],
      conditions: ['Therapeutic anticoagulation', 'Vitamin K deficiency'],
    },
    {
      state: 'decreased',
      cause: 'Liver disease',
      affectedSteps: [1, 3, 4, 5],
      labChanges: [
        { labId: 'pt', direction: 'increased', explanation: 'Decreased synthesis of coagulation factors' },
        { labId: 'ptt', direction: 'increased', explanation: 'Multiple factors affected' },
        { labId: 'fibrinogen', direction: 'decreased', explanation: 'Decreased hepatic synthesis' },
      ],
      clinicalConsequences: ['Bleeding tendency', 'But also thrombosis risk (balanced hemostasis disruption)'],
      conditions: ['Cirrhosis', 'Acute liver failure'],
    },
    {
      state: 'blocked',
      cause: 'DIC (disseminated intravascular coagulation)',
      affectedSteps: [4, 5, 6],
      labChanges: [
        { labId: 'pt', direction: 'increased', explanation: 'Factor consumption' },
        { labId: 'ptt', direction: 'increased', explanation: 'Factor consumption' },
        { labId: 'fibrinogen', direction: 'decreased', explanation: 'Consumed in widespread clotting' },
        { labId: 'platelets', direction: 'decreased', explanation: 'Consumed in microthrombi' },
      ],
      clinicalConsequences: ['Simultaneous bleeding and thrombosis', 'End-organ damage'],
      conditions: ['Sepsis', 'Malignancy', 'Trauma', 'Obstetric complications'],
    },
  ],
  treatmentTargets: [
    {
      targetStep: 4,
      drug: 'Warfarin',
      mechanism: 'enzyme-inhibitor',
      target: 'Vitamin K epoxide reductase (VKORC1)',
      effect: 'Inhibits vitamin K recycling, preventing γ-carboxylation of factors II, VII, IX, X',
      labEffect: [
        { labId: 'inr', change: 'Target 2-3 for most indications' },
        { labId: 'pt', change: 'Prolonged' },
      ],
      sideEffects: ['Bleeding', 'Skin necrosis (early protein C depletion)', 'Teratogenicity'],
    },
    {
      targetStep: 5,
      drug: 'Direct thrombin inhibitors (dabigatran)',
      mechanism: 'enzyme-inhibitor',
      target: 'Thrombin (Factor IIa)',
      effect: 'Directly inhibits thrombin activity',
      labEffect: [
        { labId: 'ptt', change: 'Prolonged' },
        { labId: 'pt', change: 'Mildly prolonged' },
      ],
      sideEffects: ['Bleeding', 'Dyspepsia', 'Renal elimination'],
    },
    {
      targetStep: 4,
      drug: 'Factor Xa inhibitors (rivaroxaban, apixaban)',
      mechanism: 'enzyme-inhibitor',
      target: 'Factor Xa',
      effect: 'Directly inhibits factor Xa',
      labEffect: [
        { labId: 'pt', change: 'Prolonged (variable)' },
        { labId: 'ptt', change: 'Variable' },
      ],
      sideEffects: ['Bleeding'],
    },
    {
      targetStep: 4,
      drug: 'Heparin/LMWH',
      mechanism: 'enzyme-inducer',
      target: 'Antithrombin III (potentiates)',
      effect: 'Enhances antithrombin inhibition of thrombin and factor Xa',
      labEffect: [
        { labId: 'ptt', change: 'Prolonged (UFH)' },
      ],
      sideEffects: ['Bleeding', 'HIT', 'Osteoporosis (long-term)'],
    },
  ],
  modelHighlights: [
    { organId: 'liver', organName: 'Liver', highlightColor: '#ff6b6b', intensity: 0.8, label: 'Factor synthesis', stepReferences: [1, 2, 3, 4, 5, 6] },
    { organId: 'blood-vessel', organName: 'Blood Vessels', highlightColor: '#48dbfb', intensity: 0.7, label: 'Cascade activation', stepReferences: [1, 2, 3, 4, 5, 6] },
  ],
  relatedPathways: [],
  explanations: {
    level1: 'When you get a cut, your blood clots to stop bleeding. This happens through a chain reaction of proteins that ends with a fibrin mesh that seals the wound.',
    level2: 'The coagulation cascade has two pathways (intrinsic and extrinsic) that converge to form a clot. PT tests the extrinsic pathway; PTT tests the intrinsic. Warfarin and heparin are blood thinners that work on different parts of this cascade.',
    level3: 'Tissue factor exposure initiates the extrinsic pathway (TF/VIIa → Xa). Contact activation starts the intrinsic pathway (XII → XI → IX). Both converge on the prothrombinase complex (Xa/Va) which converts prothrombin to thrombin. Thrombin cleaves fibrinogen to fibrin.',
    level4: 'The cascade operates on phospholipid surfaces (platelets). Tenase (IXa/VIIIa) and prothrombinase (Xa/Va) complexes increase reaction rates 100,000-fold. Vitamin K-dependent factors (II, VII, IX, X, protein C, S) require γ-carboxylation for calcium-mediated membrane binding. Warfarin inhibits VKORC1, preventing vitamin K recycling.',
    level5: 'Coagulation is regulated by TFPI (limits TF/VIIa), antithrombin (inhibits thrombin, Xa, IXa - potentiated by heparin), and protein C/S (inactivates Va, VIIIa). Thrombomodulin-bound thrombin activates protein C. Factor V Leiden (R506Q) is resistant to APC cleavage, causing thrombophilia. Cell-based model emphasizes initiation (TF-bearing cells), amplification (platelet activation by thrombin), and propagation (platelet surface burst).',
  },
  keyFacts: [
    'PT measures extrinsic pathway (VII) and common pathway',
    'PTT measures intrinsic pathway (XII, XI, IX, VIII) and common pathway',
    'Factor VII has shortest half-life (6h) - first to decrease in liver failure',
    'Vitamin K-dependent factors: II, VII, IX, X (and protein C, S)',
    'Factor V Leiden is the most common inherited thrombophilia',
  ],
});

// ============================================================================
// LAB-TO-PATHWAY LINKS
// ============================================================================

export const LAB_PATHWAY_LINKS: LabPathwayLink[] = [
  {
    labId: 'bilirubin',
    labName: 'Total Bilirubin',
    pathways: [
      { pathwayId: 'heme-bilirubin', pathwayName: 'Heme/Bilirubin Metabolism', relevance: 'Direct product of heme degradation', affectedSteps: [9, 10, 11, 12] },
    ],
  },
  {
    labId: 'bun',
    labName: 'Blood Urea Nitrogen',
    pathways: [
      { pathwayId: 'urea-cycle', pathwayName: 'Urea Cycle', relevance: 'Direct product of urea cycle', affectedSteps: [5] },
    ],
  },
  {
    labId: 'ldl',
    labName: 'LDL Cholesterol',
    pathways: [
      { pathwayId: 'cholesterol-synthesis', pathwayName: 'Cholesterol Synthesis', relevance: 'Product of hepatic cholesterol metabolism', affectedSteps: [9] },
    ],
  },
  {
    labId: 'total-cholesterol',
    labName: 'Total Cholesterol',
    pathways: [
      { pathwayId: 'cholesterol-synthesis', pathwayName: 'Cholesterol Synthesis', relevance: 'Sum of all cholesterol pools', affectedSteps: [9] },
    ],
  },
  {
    labId: 'pt',
    labName: 'Prothrombin Time',
    pathways: [
      { pathwayId: 'coagulation-cascade', pathwayName: 'Coagulation Cascade', relevance: 'Measures extrinsic and common pathways', affectedSteps: [1, 4, 5] },
    ],
  },
  {
    labId: 'ptt',
    labName: 'Partial Thromboplastin Time',
    pathways: [
      { pathwayId: 'coagulation-cascade', pathwayName: 'Coagulation Cascade', relevance: 'Measures intrinsic and common pathways', affectedSteps: [2, 3, 4, 5] },
    ],
  },
  {
    labId: 'ammonia',
    labName: 'Ammonia',
    pathways: [
      { pathwayId: 'urea-cycle', pathwayName: 'Urea Cycle', relevance: 'Substrate for urea synthesis; accumulates when cycle impaired', affectedSteps: [1] },
    ],
  },
  {
    labId: 'hemoglobin',
    labName: 'Hemoglobin',
    pathways: [
      { pathwayId: 'heme-bilirubin', pathwayName: 'Heme/Bilirubin Metabolism', relevance: 'Contains heme; source of bilirubin', affectedSteps: [8, 9] },
    ],
  },
];

// ============================================================================
// API FUNCTIONS
// ============================================================================

export function getBiomarkerPathway(id: string): BiomarkerPathway | undefined {
  return biomarkerPathways.get(id);
}

export function getAllBiomarkerPathways(): BiomarkerPathway[] {
  return Array.from(biomarkerPathways.values());
}

export function getBiomarkerPathwaysByCategory(
  category: MetabolicPathwayCategory
): BiomarkerPathway[] {
  return Array.from(biomarkerPathways.values()).filter(
    (p) => p.category === category
  );
}

export function getPathwaysForLab(labId: string): BiomarkerPathway[] {
  return Array.from(biomarkerPathways.values()).filter((p) =>
    p.linkedLabs.includes(labId)
  );
}

export function getLabPathwayLink(labId: string): LabPathwayLink | undefined {
  return LAB_PATHWAY_LINKS.find((l) => l.labId === labId);
}

export function getAllLabPathwayLinks(): LabPathwayLink[] {
  return LAB_PATHWAY_LINKS;
}

export function getTreatmentTargetsForPathway(
  pathwayId: string
): BiomarkerPathway['treatmentTargets'] {
  const pathway = biomarkerPathways.get(pathwayId);
  return pathway?.treatmentTargets ?? [];
}

export function getModelHighlightsForPathway(
  pathwayId: string
): BiomarkerPathway['modelHighlights'] {
  const pathway = biomarkerPathways.get(pathwayId);
  return pathway?.modelHighlights ?? [];
}

export function getAbnormalStatesForPathway(
  pathwayId: string
): BiomarkerPathway['abnormalStates'] {
  const pathway = biomarkerPathways.get(pathwayId);
  return pathway?.abnormalStates ?? [];
}

export function searchBiomarkerPathways(query: string): BiomarkerPathway[] {
  const q = query.toLowerCase();
  return Array.from(biomarkerPathways.values()).filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.linkedLabs.some((l) => l.toLowerCase().includes(q))
  );
}

export function getBiomarkerPathwayExplanation(
  id: string,
  level: 1 | 2 | 3 | 4 | 5
): string | undefined {
  const pathway = biomarkerPathways.get(id);
  if (!pathway) return undefined;
  return pathway.explanations[`level${level}`];
}

export function getBiomarkerVisualizationStatistics(): BiomarkerVisualizationStatistics {
  const pathways = Array.from(biomarkerPathways.values());
  return {
    totalPathways: pathways.length,
    totalLabLinks: LAB_PATHWAY_LINKS.length,
    totalTreatmentTargets: pathways.reduce(
      (sum, p) => sum + p.treatmentTargets.length,
      0
    ),
  };
}
