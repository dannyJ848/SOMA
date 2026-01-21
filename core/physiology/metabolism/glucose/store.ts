/**
 * Glucose Metabolism Data Store
 *
 * Comprehensive data for glucose absorption, insulin signaling,
 * metabolic pathways, and diabetes pathophysiology.
 */

import type {
  GlucoseAbsorptionStep,
  GLUTTransporter,
  InsulinSecretionStep,
  InsulinSignalingStep,
  MetabolicPathway,
  GlucosePathwayType,
  DiabetesPathophysiology,
  DiabetesType,
  DiabeticComplication,
  AntiDiabeticDrug,
  LabGlucoseCorrelation,
  GlucoseMetabolismStatistics,
} from './types';

// ============================================================================
// GLUCOSE ABSORPTION
// ============================================================================

export const GLUCOSE_ABSORPTION_STEPS: GlucoseAbsorptionStep[] = [
  {
    stepNumber: 1,
    name: 'Carbohydrate Digestion',
    location: 'Mouth and small intestine',
    description: 'Complex carbohydrates broken down to monosaccharides',
    transporters: [],
    mechanism: 'Salivary and pancreatic amylase cleave starch to maltose; brush border enzymes (maltase, sucrase, lactase) produce glucose, fructose, galactose',
    clinicalNote: 'Lactase deficiency causes lactose intolerance',
  },
  {
    stepNumber: 2,
    name: 'Apical Glucose Uptake',
    location: 'Enterocyte brush border (jejunum)',
    description: 'Glucose and galactose enter enterocytes via SGLT1 (secondary active transport)',
    transporters: ['SGLT1'],
    mechanism: 'SGLT1 cotransports 2 Na+ with 1 glucose, using sodium gradient established by basolateral Na-K-ATPase',
    clinicalNote: 'SGLT1 mutations cause glucose-galactose malabsorption',
  },
  {
    stepNumber: 3,
    name: 'Fructose Uptake',
    location: 'Enterocyte brush border',
    description: 'Fructose enters enterocytes via GLUT5 (facilitated diffusion)',
    transporters: ['GLUT5'],
    mechanism: 'GLUT5 is fructose-specific, insulin-independent facilitated transporter',
    clinicalNote: 'High fructose intake overwhelms absorption, causing GI symptoms',
  },
  {
    stepNumber: 4,
    name: 'Basolateral Export',
    location: 'Enterocyte basolateral membrane',
    description: 'All monosaccharides exit enterocyte via GLUT2',
    transporters: ['GLUT2'],
    mechanism: 'GLUT2 is a low-affinity, high-capacity transporter facilitating exit into portal blood',
    clinicalNote: 'GLUT2 mutations cause Fanconi-Bickel syndrome',
  },
  {
    stepNumber: 5,
    name: 'Portal Circulation',
    location: 'Portal vein to liver',
    description: 'Absorbed glucose travels to liver for first-pass metabolism',
    transporters: [],
    mechanism: 'Postprandial glucose first encounters hepatocytes, which extract ~30% for glycogen synthesis',
  },
  {
    stepNumber: 6,
    name: 'Systemic Distribution',
    location: 'Systemic circulation',
    description: 'Remaining glucose enters systemic circulation for peripheral tissue uptake',
    transporters: ['GLUT1', 'GLUT3', 'GLUT4'],
    mechanism: 'Different tissues use specific GLUT transporters; muscle and adipose require insulin for GLUT4 translocation',
  },
];

// ============================================================================
// GLUT TRANSPORTERS
// ============================================================================

const glutTransporters = new Map<string, GLUTTransporter>();

glutTransporters.set('GLUT1', {
  id: 'glut1',
  name: 'GLUT1',
  gene: 'SLC2A1',
  km: '1-2 mM (high affinity)',
  tissues: ['Red blood cells', 'Brain (blood-brain barrier)', 'Placenta', 'Most tissues (basal)'],
  regulation: 'Constitutive expression; hypoxia increases',
  function: 'Basal glucose uptake; ensures glucose supply to glucose-dependent tissues',
  insulinDependent: false,
  clinicalNote: 'GLUT1 deficiency syndrome causes epilepsy, developmental delay (low CSF glucose)',
});

glutTransporters.set('GLUT2', {
  id: 'glut2',
  name: 'GLUT2',
  gene: 'SLC2A2',
  km: '15-20 mM (low affinity, high capacity)',
  tissues: ['Liver', 'Pancreatic beta cells', 'Kidney', 'Small intestine (basolateral)'],
  regulation: 'Constitutive; allows bidirectional glucose flux',
  function: 'Glucose sensor in beta cells; hepatic glucose uptake/release; intestinal absorption',
  insulinDependent: false,
  clinicalNote: 'Low Km allows beta cell glucose sensing; mutations cause Fanconi-Bickel syndrome',
});

glutTransporters.set('GLUT3', {
  id: 'glut3',
  name: 'GLUT3',
  gene: 'SLC2A3',
  km: '1.4 mM (highest affinity)',
  tissues: ['Neurons', 'Placenta', 'Sperm'],
  regulation: 'Constitutive in neurons',
  function: 'High-affinity neuronal glucose uptake; ensures glucose supply even at low concentrations',
  insulinDependent: false,
  clinicalNote: 'Highest affinity GLUT ensures neuronal glucose supply',
});

glutTransporters.set('GLUT4', {
  id: 'glut4',
  name: 'GLUT4',
  gene: 'SLC2A4',
  km: '5 mM (moderate affinity)',
  tissues: ['Skeletal muscle', 'Cardiac muscle', 'Adipose tissue'],
  regulation: 'Insulin and exercise cause translocation from intracellular vesicles to plasma membrane',
  function: 'Major pathway for postprandial glucose disposal (~80%)',
  insulinDependent: true,
  clinicalNote: 'Impaired GLUT4 translocation is key defect in type 2 diabetes',
});

glutTransporters.set('GLUT5', {
  id: 'glut5',
  name: 'GLUT5',
  gene: 'SLC2A5',
  km: '6 mM',
  tissues: ['Small intestine (apical)', 'Sperm', 'Kidney'],
  regulation: 'Dietary fructose increases expression',
  function: 'Fructose-specific transporter; intestinal fructose absorption',
  insulinDependent: false,
  clinicalNote: 'Limited capacity explains fructose malabsorption with excess intake',
});

glutTransporters.set('SGLT1', {
  id: 'sglt1',
  name: 'SGLT1',
  gene: 'SLC5A1',
  km: '0.3 mM (very high affinity)',
  tissues: ['Small intestine (apical)', 'Kidney (S3 segment)'],
  regulation: 'Constitutive',
  function: 'Secondary active transport of glucose/galactose against gradient using Na+ cotransport',
  insulinDependent: false,
  clinicalNote: 'Mutations cause glucose-galactose malabsorption with severe diarrhea',
});

glutTransporters.set('SGLT2', {
  id: 'sglt2',
  name: 'SGLT2',
  gene: 'SLC5A2',
  km: '2 mM',
  tissues: ['Kidney proximal tubule (S1/S2 segments)'],
  regulation: 'Constitutive; reabsorbs 90% of filtered glucose',
  function: 'Primary renal glucose reabsorption; maintains glucose conservation',
  insulinDependent: false,
  clinicalNote: 'SGLT2 inhibitors (empagliflozin, dapagliflozin) treat diabetes by inducing glucosuria',
});

// ============================================================================
// INSULIN SECRETION
// ============================================================================

export const INSULIN_SECRETION_STEPS: InsulinSecretionStep[] = [
  {
    stepNumber: 1,
    name: 'Glucose Entry',
    location: 'Beta cell membrane',
    description: 'Glucose enters beta cell via GLUT2 (proportional to blood glucose)',
    molecules: ['Glucose', 'GLUT2'],
    mechanism: 'GLUT2 has low affinity (Km ~15mM), allowing glucose entry proportional to plasma concentration',
  },
  {
    stepNumber: 2,
    name: 'Glucose Phosphorylation',
    location: 'Beta cell cytoplasm',
    description: 'Glucokinase phosphorylates glucose to G6P (rate-limiting)',
    molecules: ['Glucokinase', 'Glucose-6-phosphate', 'ATP'],
    mechanism: 'Glucokinase is the glucose sensor - Km ~8mM ensures response at physiological glucose; not inhibited by G6P',
  },
  {
    stepNumber: 3,
    name: 'Glycolytic Metabolism',
    location: 'Cytoplasm and mitochondria',
    description: 'Glycolysis and oxidative phosphorylation generate ATP',
    molecules: ['Pyruvate', 'ATP', 'NADH'],
    mechanism: 'Complete glucose oxidation increases ATP/ADP ratio',
  },
  {
    stepNumber: 4,
    name: 'KATP Channel Closure',
    location: 'Beta cell membrane',
    description: 'Increased ATP/ADP ratio closes ATP-sensitive K+ channels',
    molecules: ['KATP channel (Kir6.2/SUR1)', 'ATP'],
    mechanism: 'ATP binds Kir6.2, closing channel; ADP normally keeps it open',
  },
  {
    stepNumber: 5,
    name: 'Membrane Depolarization',
    location: 'Beta cell membrane',
    description: 'K+ channel closure depolarizes the membrane',
    molecules: ['K+'],
    mechanism: 'Reduced K+ efflux causes depolarization from -70mV toward threshold',
  },
  {
    stepNumber: 6,
    name: 'Calcium Influx',
    location: 'Beta cell membrane',
    description: 'Voltage-gated Ca2+ channels open, allowing calcium entry',
    molecules: ['Ca2+', 'L-type Ca2+ channels'],
    mechanism: 'Depolarization activates L-type Ca2+ channels; Ca2+ enters cell',
  },
  {
    stepNumber: 7,
    name: 'Insulin Exocytosis',
    location: 'Beta cell',
    description: 'Calcium triggers fusion of insulin vesicles with membrane',
    molecules: ['Insulin granules', 'SNARE proteins', 'Ca2+'],
    mechanism: 'Ca2+ activates SNARE-mediated vesicle fusion; insulin released with C-peptide',
  },
  {
    stepNumber: 8,
    name: 'Incretin Amplification',
    location: 'Beta cell',
    description: 'GLP-1 and GIP potentiate glucose-stimulated insulin secretion',
    molecules: ['GLP-1', 'GIP', 'cAMP', 'PKA'],
    mechanism: 'Incretins bind GPCRs, increase cAMP, potentiate Ca2+-triggered exocytosis (only effective when glucose elevated)',
  },
];

// ============================================================================
// INSULIN SIGNALING CASCADE
// ============================================================================

export const INSULIN_SIGNALING_STEPS: InsulinSignalingStep[] = [
  {
    stepNumber: 1,
    name: 'Insulin Binding',
    molecules: ['Insulin', 'Insulin receptor (IR)'],
    description: 'Insulin binds α-subunits of insulin receptor',
    effect: 'Conformational change activates β-subunit tyrosine kinase',
    defectConsequence: 'IR mutations cause severe insulin resistance (Donohue syndrome)',
  },
  {
    stepNumber: 2,
    name: 'Receptor Autophosphorylation',
    molecules: ['IR β-subunit', 'Tyrosine residues'],
    description: 'Activated IR autophosphorylates tyrosine residues',
    effect: 'Creates docking sites for downstream signaling molecules',
  },
  {
    stepNumber: 3,
    name: 'IRS Recruitment and Phosphorylation',
    molecules: ['IRS-1', 'IRS-2', 'Phosphotyrosine'],
    description: 'Insulin receptor substrates dock and are tyrosine phosphorylated',
    effect: 'Phospho-IRS recruits PI3K',
    defectConsequence: 'Serine phosphorylation of IRS (by JNK, IKK) causes insulin resistance in obesity',
  },
  {
    stepNumber: 4,
    name: 'PI3K Activation',
    molecules: ['PI3K', 'PIP2', 'PIP3'],
    description: 'PI3K converts PIP2 to PIP3 at membrane',
    effect: 'PIP3 recruits PDK1 and Akt to membrane',
    defectConsequence: 'PTEN dephosphorylates PIP3, terminating signal',
  },
  {
    stepNumber: 5,
    name: 'Akt Activation',
    molecules: ['Akt (PKB)', 'PDK1', 'mTORC2'],
    description: 'PDK1 phosphorylates Akt Thr308; mTORC2 phosphorylates Ser473',
    effect: 'Fully activated Akt phosphorylates multiple downstream targets',
    defectConsequence: 'Key node in insulin action; Akt defects cause severe metabolic dysfunction',
  },
  {
    stepNumber: 6,
    name: 'AS160 Phosphorylation',
    molecules: ['AS160 (TBC1D4)', 'Rab proteins'],
    description: 'Akt phosphorylates AS160, inactivating its GAP activity',
    effect: 'Rab proteins remain GTP-bound, enabling GLUT4 vesicle translocation',
    defectConsequence: 'AS160 mutations cause insulin resistance',
  },
  {
    stepNumber: 7,
    name: 'GLUT4 Translocation',
    molecules: ['GLUT4 vesicles', 'SNARE proteins'],
    description: 'GLUT4-containing vesicles fuse with plasma membrane',
    effect: 'GLUT4 exposed at cell surface; glucose entry increases 10-40 fold',
    defectConsequence: 'Impaired GLUT4 translocation is hallmark of type 2 diabetes',
  },
  {
    stepNumber: 8,
    name: 'Metabolic Effects',
    molecules: ['GSK3', 'FOXO1', 'mTORC1'],
    description: 'Akt phosphorylates metabolic enzymes and transcription factors',
    effect: 'GSK3 inhibition → glycogen synthesis; FOXO1 inhibition → reduced gluconeogenesis; mTORC1 activation → protein synthesis',
  },
];

// ============================================================================
// METABOLIC PATHWAYS
// ============================================================================

const metabolicPathways = new Map<string, MetabolicPathway>();

metabolicPathways.set('glycolysis', {
  id: 'glycolysis',
  name: 'Glycolysis',
  type: 'glycolysis',
  location: 'Cytoplasm (all cells)',
  netReaction: 'Glucose + 2 NAD+ + 2 ADP + 2 Pi → 2 Pyruvate + 2 NADH + 2 ATP + 2 H2O',
  keyEnzymes: [
    {
      name: 'Hexokinase/Glucokinase',
      ecNumber: '2.7.1.1/2.7.1.2',
      reaction: 'Glucose → Glucose-6-phosphate',
      regulation: ['Hexokinase: inhibited by G6P', 'Glucokinase: induced by insulin, not inhibited by G6P'],
      isRateLimiting: false,
      clinicalNote: 'Glucokinase in liver/beta cells; hexokinase in other tissues',
    },
    {
      name: 'Phosphofructokinase-1 (PFK-1)',
      ecNumber: '2.7.1.11',
      reaction: 'Fructose-6-P → Fructose-1,6-bisphosphate',
      regulation: ['Activated by: AMP, F-2,6-BP, Pi', 'Inhibited by: ATP, citrate'],
      isRateLimiting: true,
      clinicalNote: 'Most important regulatory step; F-2,6-BP is key activator',
    },
    {
      name: 'Pyruvate Kinase',
      ecNumber: '2.7.1.40',
      reaction: 'PEP → Pyruvate + ATP',
      regulation: ['Activated by F-1,6-BP (feedforward)', 'Inhibited by ATP, alanine', 'Liver: inhibited by glucagon (phosphorylation)'],
      isRateLimiting: false,
    },
  ],
  regulatorySteps: ['PFK-1 (committed step)', 'Hexokinase (entry)', 'Pyruvate kinase (exit)'],
  energyYield: '2 ATP (net), 2 NADH per glucose',
  feedingState: 'both',
  primaryTissues: ['All tissues'],
  explanations: {
    level1: 'Glycolysis is how your cells break down sugar for energy. It happens in every cell and makes a little bit of energy very quickly.',
    level2: 'Glycolysis converts one glucose molecule into two pyruvate molecules, producing 2 ATP and 2 NADH. It occurs in the cytoplasm and doesn\'t require oxygen. The pyruvate can then enter mitochondria for more energy production.',
    level3: 'Glycolysis is a 10-step pathway converting glucose to pyruvate. PFK-1 is the rate-limiting enzyme, activated by AMP and F-2,6-BP (high in fed state), inhibited by ATP and citrate. In anaerobic conditions, pyruvate is reduced to lactate to regenerate NAD+.',
    level4: 'Glycolysis has three irreversible steps: hexokinase, PFK-1, and pyruvate kinase - these are regulatory. F-2,6-BP is produced by PFK-2/FBPase-2 (bifunctional enzyme). Insulin activates PFK-2 (increases F-2,6-BP); glucagon activates FBPase-2 (decreases F-2,6-BP). Liver glucokinase has different kinetics than hexokinase, acting as glucose sensor.',
    level5: 'Glycolytic flux is controlled by allosteric regulation and covalent modification. PFK-1 displays sigmoidal ATP kinetics (ATP is both substrate and inhibitor at different sites). Fructose-2,6-bisphosphate is the most potent PFK-1 activator, synthesized by PFK-2 which is regulated by insulin/glucagon via phosphorylation. The Warburg effect (aerobic glycolysis in cancer) involves HIF-1α-mediated enzyme induction and provides biosynthetic precursors.',
  },
});

metabolicPathways.set('gluconeogenesis', {
  id: 'gluconeogenesis',
  name: 'Gluconeogenesis',
  type: 'gluconeogenesis',
  location: 'Primarily liver cytoplasm and mitochondria; also kidney',
  netReaction: '2 Pyruvate + 4 ATP + 2 GTP + 2 NADH + 6 H2O → Glucose + 4 ADP + 2 GDP + 6 Pi',
  keyEnzymes: [
    {
      name: 'Pyruvate Carboxylase',
      ecNumber: '6.4.1.1',
      reaction: 'Pyruvate + CO2 + ATP → Oxaloacetate',
      regulation: ['Activated by acetyl-CoA', 'Requires biotin'],
      isRateLimiting: false,
      clinicalNote: 'Mitochondrial enzyme; acetyl-CoA signals need for gluconeogenesis',
    },
    {
      name: 'PEPCK (Phosphoenolpyruvate carboxykinase)',
      ecNumber: '4.1.1.32',
      reaction: 'Oxaloacetate + GTP → PEP + CO2 + GDP',
      regulation: ['Transcriptionally induced by glucagon, cortisol', 'Repressed by insulin'],
      isRateLimiting: true,
      clinicalNote: 'Major regulatory point; PEPCK gene expression is key therapeutic target',
    },
    {
      name: 'Fructose-1,6-bisphosphatase (FBPase-1)',
      ecNumber: '3.1.3.11',
      reaction: 'F-1,6-BP → F-6-P + Pi',
      regulation: ['Inhibited by AMP, F-2,6-BP', 'Reciprocal regulation with PFK-1'],
      isRateLimiting: true,
      clinicalNote: 'Key regulatory enzyme opposing PFK-1',
    },
    {
      name: 'Glucose-6-phosphatase',
      ecNumber: '3.1.3.9',
      reaction: 'G-6-P → Glucose + Pi',
      regulation: ['ER membrane enzyme', 'Present only in liver and kidney'],
      isRateLimiting: false,
      clinicalNote: 'Absent in muscle - muscle glycogen cannot contribute to blood glucose',
    },
  ],
  regulatorySteps: ['PEPCK (transcriptional)', 'FBPase-1 (allosteric)', 'G-6-Pase (tissue-specific)'],
  energyYield: 'Consumes 6 ATP equivalents per glucose',
  feedingState: 'fasted',
  primaryTissues: ['Liver (90%)', 'Kidney (10%)'],
  explanations: {
    level1: 'Gluconeogenesis is how your liver makes new sugar when you haven\'t eaten. It keeps your blood sugar stable between meals and overnight.',
    level2: 'Gluconeogenesis makes glucose from non-carbohydrate sources like amino acids, lactate, and glycerol. It occurs mainly in the liver and is activated by glucagon during fasting. It\'s the opposite of glycolysis.',
    level3: 'Gluconeogenesis bypasses the three irreversible glycolytic reactions using different enzymes: pyruvate carboxylase and PEPCK (bypasses pyruvate kinase), FBPase-1 (bypasses PFK-1), and G-6-Pase (bypasses hexokinase). Substrates include lactate (Cori cycle), alanine (glucose-alanine cycle), and glycerol.',
    level4: 'PEPCK gene transcription is the major regulatory point. FOXO1 and CREB activate PEPCK/G6Pase genes; insulin inhibits FOXO1 via Akt phosphorylation. Glucagon activates CREB via cAMP/PKA. Metformin inhibits gluconeogenesis by activating AMPK and inhibiting mitochondrial complex I.',
    level5: 'Gluconeogenic flux is controlled at multiple levels: allosteric (FBPase-1 by AMP, F-2,6-BP), transcriptional (PEPCK, G6Pase by glucocorticoids, glucagon), and post-translational. PGC-1α coactivates FOXO1 and HNF4α to drive gluconeogenic gene expression. In type 2 diabetes, hepatic insulin resistance fails to suppress gluconeogenesis (elevated fasting glucose). Lactate-pyruvate interconversion occurs across mitochondrial membrane (malate-aspartate shuttle needed).',
  },
});

metabolicPathways.set('glycogenesis', {
  id: 'glycogenesis',
  name: 'Glycogenesis (Glycogen Synthesis)',
  type: 'glycogenesis',
  location: 'Liver and muscle cytoplasm',
  netReaction: 'Glucose + UTP + ATP → Glycogen(n+1) + UDP + ADP + 2 Pi',
  keyEnzymes: [
    {
      name: 'Glycogen Synthase',
      ecNumber: '2.4.1.11',
      reaction: 'UDP-glucose + Glycogen(n) → Glycogen(n+1) + UDP',
      regulation: ['Active when dephosphorylated (by protein phosphatase 1)', 'Insulin activates PP1', 'Glucagon/epinephrine inactivate via phosphorylation'],
      isRateLimiting: true,
      clinicalNote: 'GSD type 0 (glycogen synthase deficiency) causes fasting hypoglycemia',
    },
    {
      name: 'UDP-glucose Pyrophosphorylase',
      ecNumber: '2.7.7.9',
      reaction: 'Glucose-1-P + UTP → UDP-glucose + PPi',
      regulation: ['Provides activated glucose for synthesis'],
      isRateLimiting: false,
    },
    {
      name: 'Branching Enzyme',
      ecNumber: '2.4.1.18',
      reaction: 'Creates α-1,6 branches',
      regulation: ['Creates more ends for rapid synthesis/degradation'],
      isRateLimiting: false,
      clinicalNote: 'GSD type IV (branching enzyme deficiency) causes abnormal glycogen',
    },
  ],
  regulatorySteps: ['Glycogen synthase (rate-limiting, hormonal control)'],
  energyYield: 'Consumes 2 ATP equivalents per glucose added',
  feedingState: 'fed',
  primaryTissues: ['Liver (glucose homeostasis)', 'Muscle (local fuel reserve)'],
  explanations: {
    level1: 'Glycogenesis is how your body stores sugar after meals. The sugar is packed into glycogen, like storing food in a pantry for later.',
    level2: 'After eating, insulin stimulates glycogen synthase to convert excess glucose into glycogen, stored in liver and muscle. Liver glycogen maintains blood sugar; muscle glycogen fuels exercise.',
    level3: 'Glycogenesis requires activation of glucose to UDP-glucose. Glycogen synthase adds glucose units in α-1,4 linkages; branching enzyme creates α-1,6 branches. Insulin activates glycogen synthase by stimulating PP1-mediated dephosphorylation; glucagon and epinephrine inhibit by activating PKA which phosphorylates glycogen synthase.',
    level4: 'Glycogen synthase exists as active (dephosphorylated, GSa) and inactive (phosphorylated, GSb) forms. GSK3 phosphorylates and inactivates GS; insulin inhibits GSK3 via Akt, allowing PP1 to activate GS. PP1 is targeted to glycogen by PTG (protein targeting to glycogen). Liver GS is also activated allosterically by G6P.',
    level5: 'Glycogenesis regulation involves reciprocal control of synthase and phosphorylase. PP1 dephosphorylates both: activating synthase and inactivating phosphorylase. Insulin signaling to PP1 involves multiple pathways. Muscle glycogen synthesis is rate-limiting for whole-body glucose disposal. Glycogenin is the primer protein for new glycogen molecule initiation.',
  },
});

metabolicPathways.set('glycogenolysis', {
  id: 'glycogenolysis',
  name: 'Glycogenolysis (Glycogen Breakdown)',
  type: 'glycogenolysis',
  location: 'Liver and muscle cytoplasm',
  netReaction: 'Glycogen(n) + Pi → Glycogen(n-1) + Glucose-1-P',
  keyEnzymes: [
    {
      name: 'Glycogen Phosphorylase',
      ecNumber: '2.4.1.1',
      reaction: 'Glycogen(n) + Pi → Glycogen(n-1) + Glucose-1-P',
      regulation: ['Active when phosphorylated (by phosphorylase kinase)', 'Glucagon/epinephrine activate', 'Insulin inactivates', 'Muscle: AMP activates'],
      isRateLimiting: true,
      clinicalNote: 'GSD type V (McArdle) = muscle phosphorylase deficiency; GSD VI (Hers) = liver',
    },
    {
      name: 'Debranching Enzyme',
      ecNumber: '3.2.1.33/2.4.1.25',
      reaction: 'Removes α-1,6 branches (transferase + glucosidase activities)',
      regulation: ['Required for complete glycogen degradation'],
      isRateLimiting: false,
      clinicalNote: 'GSD type III (Cori/Forbes disease) = debranching enzyme deficiency',
    },
  ],
  regulatorySteps: ['Glycogen phosphorylase (hormonal and allosteric control)'],
  energyYield: 'Yields ~90% G-1-P (no ATP cost), ~10% free glucose from branches',
  feedingState: 'fasted',
  primaryTissues: ['Liver (blood glucose)', 'Muscle (local ATP production)'],
  explanations: {
    level1: 'Glycogenolysis is how your body uses stored sugar when you need energy. It\'s like getting food out of the pantry when you\'re hungry.',
    level2: 'When blood sugar drops, glucagon (from pancreas) signals the liver to break down glycogen and release glucose. In muscle, epinephrine triggers glycogenolysis during exercise for local fuel.',
    level3: 'Glycogen phosphorylase cleaves α-1,4 bonds releasing G-1-P. Debranching enzyme handles branch points. Phosphorylase is activated by phosphorylation (cAMP/PKA cascade) and inhibited by dephosphorylation (PP1). In muscle, AMP directly activates phosphorylase.',
    level4: 'The phosphorylase cascade: glucagon/epinephrine → GPCR → cAMP → PKA → phosphorylase kinase → phosphorylase a (active). Ca2+ also activates phosphorylase kinase in muscle. Phosphorylase a is inhibited by glucose in liver (signals adequate glucose). PP1 dephosphorylates and inactivates both phosphorylase and phosphorylase kinase.',
    level5: 'Liver phosphorylase has a glucose binding site that induces conformational change promoting PP1 binding and inactivation (glucose sensing). Muscle phosphorylase lacks this site but has an AMP binding site for energy-sensing activation. Phosphorylase kinase is a Ca2+-activated enzyme with calmodulin as subunit (δ). Glycogen storage diseases result from defects in these enzymes.',
  },
});

// ============================================================================
// DIABETES PATHOPHYSIOLOGY
// ============================================================================

const diabetesTypes = new Map<string, DiabetesPathophysiology>();

diabetesTypes.set('type1', {
  type: 'type1',
  name: 'Type 1 Diabetes Mellitus',
  prevalence: '5-10% of diabetes; ~1.6 million in US',
  pathogenesis: [
    'Autoimmune destruction of pancreatic beta cells',
    'T-cell mediated attack on islets',
    'Loss of insulin secretory capacity',
    'Absolute insulin deficiency',
  ],
  geneticFactors: [
    'HLA-DR3, HLA-DR4 (class II MHC)',
    'HLA-DQ associations',
    'INS gene variants',
    'PTPN22 polymorphisms',
  ],
  environmentalFactors: [
    'Viral infections (enteroviruses, coxsackie)',
    'Early cow milk exposure (controversial)',
    'Vitamin D deficiency',
    'Gut microbiome alterations',
  ],
  metabolicDefects: [
    'Complete loss of insulin secretion',
    'Unrestrained lipolysis',
    'Ketogenesis from excess fatty acid oxidation',
    'Protein catabolism',
  ],
  clinicalFeatures: [
    'Young age of onset (typically <30)',
    'Rapid onset of symptoms',
    'Polyuria, polydipsia, polyphagia',
    'Weight loss despite increased appetite',
    'DKA may be presenting symptom',
  ],
  diagnosticCriteria: [
    'Fasting glucose ≥126 mg/dL',
    'Random glucose ≥200 mg/dL with symptoms',
    'HbA1c ≥6.5%',
    'Positive autoantibodies (GAD65, IA-2, insulin, ZnT8)',
    'Low/absent C-peptide',
  ],
  complications: [
    'Diabetic ketoacidosis (DKA)',
    'Retinopathy',
    'Nephropathy',
    'Neuropathy',
    'Cardiovascular disease',
  ],
  treatments: [
    'Insulin (basal-bolus or pump)',
    'Carbohydrate counting',
    'Continuous glucose monitoring',
    'Transplantation (islet or pancreas)',
  ],
  explanations: {
    level1: 'In type 1 diabetes, the body\'s immune system attacks the cells that make insulin, so people with type 1 diabetes need to take insulin every day.',
    level2: 'Type 1 diabetes is an autoimmune disease where the immune system destroys insulin-producing beta cells in the pancreas. Without insulin, glucose can\'t enter cells. People with type 1 need lifelong insulin injections.',
    level3: 'T1DM results from T-cell mediated destruction of beta cells in genetically susceptible individuals (HLA-associated). Autoantibodies (GAD65, IA-2) appear before symptoms. The disease presents when ~80-90% of beta cells are destroyed. Without insulin, unopposed glucagon causes hyperglycemia and ketosis.',
    level4: 'T1DM pathogenesis involves both innate and adaptive immunity. Antigen-presenting cells present beta cell autoantigens to autoreactive T cells that escaped thymic deletion. CD8+ T cells directly kill beta cells; CD4+ cells provide help. The insulitis (islet inflammation) progresses over months to years before clinical presentation.',
    level5: 'T1DM has a prolonged preclinical phase with detectable autoantibodies (stage 1-2) before dysglycemia (stage 3). The "accelerator hypothesis" suggests metabolic stress on beta cells increases antigen presentation. Regulatory T cells (Tregs) are defective in T1DM. Immune checkpoint therapy for cancer can precipitate T1DM. C-peptide may persist in "honeymoon phase" and even decades later at low levels.',
  },
});

diabetesTypes.set('type2', {
  type: 'type2',
  name: 'Type 2 Diabetes Mellitus',
  prevalence: '90-95% of diabetes; ~37 million in US',
  pathogenesis: [
    'Insulin resistance in muscle, liver, and adipose tissue',
    'Progressive beta cell dysfunction',
    'Relative insulin deficiency',
    'Chronic low-grade inflammation',
  ],
  geneticFactors: [
    'TCF7L2 (strongest common variant)',
    'PPARG, KCNJ11, IRS1 variants',
    'Multiple GWAS loci (>400)',
    'Strong family history component',
  ],
  environmentalFactors: [
    'Obesity (especially visceral)',
    'Physical inactivity',
    'High-calorie diet',
    'Aging',
    'Gut microbiome changes',
  ],
  metabolicDefects: [
    'Impaired GLUT4 translocation in muscle',
    'Failure to suppress hepatic gluconeogenesis',
    'Adipose tissue insulin resistance (increased lipolysis)',
    'Beta cell failure to compensate',
    'Lipotoxicity and glucotoxicity',
  ],
  clinicalFeatures: [
    'Often asymptomatic initially',
    'Gradual onset',
    'Obesity (80-90% of patients)',
    'Acanthosis nigricans',
    'Family history common',
    'Metabolic syndrome features',
  ],
  diagnosticCriteria: [
    'Fasting glucose ≥126 mg/dL',
    'OGTT 2-hour glucose ≥200 mg/dL',
    'HbA1c ≥6.5%',
    'Random glucose ≥200 mg/dL with symptoms',
  ],
  complications: [
    'Macrovascular (MI, stroke, PAD)',
    'Microvascular (retinopathy, nephropathy, neuropathy)',
    'HHS (hyperosmolar hyperglycemic state)',
    'Increased infection risk',
  ],
  treatments: [
    'Lifestyle modification (diet, exercise, weight loss)',
    'Metformin (first-line)',
    'GLP-1 receptor agonists',
    'SGLT2 inhibitors',
    'DPP-4 inhibitors',
    'Thiazolidinediones',
    'Sulfonylureas',
    'Insulin (if needed)',
  ],
  explanations: {
    level1: 'In type 2 diabetes, the body doesn\'t use insulin properly and may not make enough. It usually develops in adults and is often related to being overweight.',
    level2: 'Type 2 diabetes develops when cells become resistant to insulin\'s effects and the pancreas can\'t make enough insulin to overcome this resistance. It\'s associated with obesity and can often be managed with lifestyle changes and medications.',
    level3: 'T2DM involves insulin resistance (primarily muscle, liver, adipose) and beta cell dysfunction. Initially, beta cells compensate with hyperinsulinemia. Over time, beta cell failure occurs from glucolipotoxicity and ER stress. Hepatic insulin resistance causes persistent gluconeogenesis.',
    level4: 'T2DM pathophysiology involves the "ominous octet": decreased muscle glucose uptake, increased hepatic glucose production, decreased insulin secretion, increased lipolysis, increased glucagon, decreased incretin effect, increased renal glucose reabsorption, and neurotransmitter dysfunction. IRS serine phosphorylation (by inflammatory kinases JNK, IKKβ) impairs insulin signaling.',
    level5: 'Beta cell failure in T2DM involves multiple mechanisms: glucotoxicity (oxidative stress, decreased insulin gene expression), lipotoxicity (ceramide, ER stress), amyloid deposition (IAPP), dedifferentiation, and apoptosis. Adipose dysfunction releases pro-inflammatory cytokines (TNF-α, IL-6) and decreased adiponectin. Ectopic fat deposition in liver and muscle correlates with insulin resistance. Bariatric surgery rapidly improves glycemia independent of weight loss (bile acid, gut hormone changes).',
  },
});

// ============================================================================
// DIABETIC COMPLICATIONS
// ============================================================================

export const DIABETIC_COMPLICATIONS: DiabeticComplication[] = [
  {
    id: 'retinopathy',
    name: 'Diabetic Retinopathy',
    category: 'microvascular',
    pathogenesis: [
      'Hyperglycemia damages retinal capillaries',
      'Pericyte loss and basement membrane thickening',
      'Increased vascular permeability',
      'Capillary occlusion and ischemia',
      'VEGF release causes neovascularization',
    ],
    affectedOrgans: ['Eye (retina)'],
    clinicalFeatures: [
      'Non-proliferative: microaneurysms, hemorrhages, hard exudates',
      'Proliferative: neovascularization, vitreous hemorrhage, tractional detachment',
      'Macular edema at any stage',
    ],
    screening: ['Annual dilated eye exam', 'Fundus photography', 'OCT for macular edema'],
    prevention: ['Tight glycemic control', 'Blood pressure control', 'Lipid management'],
    treatment: ['Anti-VEGF injections', 'Laser photocoagulation', 'Vitrectomy'],
  },
  {
    id: 'nephropathy',
    name: 'Diabetic Nephropathy',
    category: 'microvascular',
    pathogenesis: [
      'Glomerular hyperfiltration initially',
      'Mesangial expansion and GBM thickening',
      'Podocyte injury and loss',
      'Nodular glomerulosclerosis (Kimmelstiel-Wilson)',
      'Tubulointerstitial fibrosis',
    ],
    affectedOrgans: ['Kidney'],
    clinicalFeatures: [
      'Microalbuminuria (30-300 mg/day) - early',
      'Macroalbuminuria (>300 mg/day)',
      'Progressive GFR decline',
      'Hypertension',
      'ESRD requiring dialysis',
    ],
    screening: ['Annual urine albumin-creatinine ratio', 'Serum creatinine/eGFR'],
    prevention: ['Glycemic control', 'ACE inhibitors/ARBs', 'Blood pressure <130/80', 'SGLT2 inhibitors'],
    treatment: ['ACE inhibitors/ARBs', 'SGLT2 inhibitors', 'Finerenone (MRA)', 'Dialysis/transplant if ESRD'],
  },
  {
    id: 'neuropathy',
    name: 'Diabetic Neuropathy',
    category: 'microvascular',
    pathogenesis: [
      'Polyol pathway accumulation (sorbitol)',
      'Advanced glycation end products (AGEs)',
      'Oxidative stress',
      'Vasa nervorum ischemia',
      'Impaired nerve repair',
    ],
    affectedOrgans: ['Peripheral nerves', 'Autonomic nerves'],
    clinicalFeatures: [
      'Distal symmetric polyneuropathy (stocking-glove)',
      'Burning, tingling, numbness in feet',
      'Loss of protective sensation → foot ulcers',
      'Autonomic: gastroparesis, orthostatic hypotension, erectile dysfunction',
      'Mononeuropathies (cranial nerve palsies)',
    ],
    screening: ['Annual foot exam with monofilament', 'Vibration sense testing'],
    prevention: ['Glycemic control', 'Foot care education', 'Regular foot exams'],
    treatment: ['Pain management (gabapentin, duloxetine, pregabalin)', 'Foot care', 'Treatment of autonomic symptoms'],
  },
  {
    id: 'macrovascular',
    name: 'Macrovascular Disease (Atherosclerosis)',
    category: 'macrovascular',
    pathogenesis: [
      'Accelerated atherosclerosis',
      'Endothelial dysfunction',
      'Increased inflammation and oxidative stress',
      'Dyslipidemia (small dense LDL, low HDL, high TG)',
      'Prothrombotic state',
    ],
    affectedOrgans: ['Coronary arteries', 'Cerebral arteries', 'Peripheral arteries'],
    clinicalFeatures: [
      'Coronary artery disease (silent MI common)',
      'Stroke/TIA',
      'Peripheral arterial disease (claudication, amputation)',
      '2-4x increased CV mortality',
    ],
    screening: ['Cardiovascular risk assessment', 'Lipid panel', 'Blood pressure', 'Consider stress testing'],
    prevention: ['Statin therapy', 'Blood pressure control', 'Aspirin (if indicated)', 'Smoking cessation', 'GLP-1 RA or SGLT2i with CV benefit'],
    treatment: ['Aggressive risk factor modification', 'Antiplatelet therapy', 'Revascularization as indicated'],
  },
  {
    id: 'dka',
    name: 'Diabetic Ketoacidosis (DKA)',
    category: 'metabolic',
    pathogenesis: [
      'Absolute or relative insulin deficiency',
      'Counter-regulatory hormone excess',
      'Unrestrained lipolysis → FFAs to liver',
      'Hepatic ketogenesis (beta-oxidation)',
      'Ketone body accumulation (β-hydroxybutyrate, acetoacetate)',
    ],
    affectedOrgans: ['Systemic (metabolic derangement)'],
    clinicalFeatures: [
      'Hyperglycemia (usually >250 mg/dL)',
      'Ketosis (positive serum/urine ketones)',
      'Metabolic acidosis (pH <7.3, bicarb <18)',
      'Anion gap elevation',
      'Dehydration, Kussmaul breathing, fruity breath',
      'Altered mental status',
    ],
    screening: ['Ketone monitoring during illness'],
    prevention: ['Sick day management', 'Never stop basal insulin', 'Adequate hydration', 'Early recognition'],
    treatment: ['IV fluids', 'Insulin infusion', 'Potassium replacement', 'Monitor closely'],
  },
];

// ============================================================================
// ANTI-DIABETIC DRUGS
// ============================================================================

export const ANTI_DIABETIC_DRUGS: AntiDiabeticDrug[] = [
  {
    drug: 'Metformin',
    drugClass: 'Biguanide',
    mechanism: 'Activates AMPK; inhibits hepatic gluconeogenesis; improves insulin sensitivity',
    target: 'Mitochondrial complex I, AMPK pathway',
    effect: 'Decreases hepatic glucose output; modest peripheral insulin sensitization',
    hba1cReduction: '1.0-1.5%',
    sideEffects: ['GI upset', 'B12 deficiency', 'Lactic acidosis (rare)'],
    contraindications: ['eGFR <30', 'Acute illness with hypoperfusion risk'],
  },
  {
    drug: 'GLP-1 Receptor Agonists (semaglutide, liraglutide)',
    drugClass: 'Incretin mimetic',
    mechanism: 'Activates GLP-1 receptor; enhances glucose-dependent insulin secretion; suppresses glucagon; slows gastric emptying; promotes satiety',
    target: 'GLP-1 receptor (beta cells, CNS)',
    effect: 'Improves insulin secretion, reduces glucagon, promotes weight loss',
    hba1cReduction: '1.0-1.5%',
    sideEffects: ['Nausea', 'Vomiting', 'Pancreatitis (rare)', 'Thyroid C-cell tumors (rodent)'],
    contraindications: ['MTC or MEN2 history'],
    cvBenefit: 'Proven CV benefit (semaglutide, liraglutide, dulaglutide)',
  },
  {
    drug: 'SGLT2 Inhibitors (empagliflozin, dapagliflozin, canagliflozin)',
    drugClass: 'Sodium-glucose cotransporter 2 inhibitor',
    mechanism: 'Blocks renal glucose reabsorption; induces glucosuria',
    target: 'SGLT2 in proximal tubule',
    effect: 'Lowers glucose independent of insulin; promotes weight loss and BP reduction',
    hba1cReduction: '0.5-1.0%',
    sideEffects: ['Genital mycotic infections', 'UTI', 'Euglycemic DKA', 'Fournier gangrene (rare)'],
    contraindications: ['Frequent UTI/GU infections', 'T1DM (euglycemic DKA risk)'],
    cvBenefit: 'Proven CV and renal benefit; reduces heart failure hospitalization',
  },
  {
    drug: 'DPP-4 Inhibitors (sitagliptin, linagliptin)',
    drugClass: 'Dipeptidyl peptidase-4 inhibitor',
    mechanism: 'Inhibits DPP-4 enzyme that degrades GLP-1; increases endogenous incretin levels',
    target: 'DPP-4 enzyme',
    effect: 'Prolongs GLP-1 action; glucose-dependent insulin secretion',
    hba1cReduction: '0.5-0.8%',
    sideEffects: ['Joint pain', 'Pancreatitis (rare)', 'Heart failure (saxagliptin)'],
    contraindications: ['History of pancreatitis'],
  },
  {
    drug: 'Sulfonylureas (glipizide, glyburide, glimepiride)',
    drugClass: 'Insulin secretagogue',
    mechanism: 'Closes KATP channels independent of glucose; triggers insulin release',
    target: 'SUR1 subunit of KATP channel',
    effect: 'Stimulates insulin secretion regardless of glucose level',
    hba1cReduction: '1.0-1.5%',
    sideEffects: ['Hypoglycemia', 'Weight gain'],
    contraindications: ['Sulfa allergy (relative)', 'Severe renal/hepatic impairment'],
  },
  {
    drug: 'Thiazolidinediones (pioglitazone)',
    drugClass: 'PPARγ agonist',
    mechanism: 'Activates PPARγ; improves insulin sensitivity in adipose, muscle, liver',
    target: 'PPARγ nuclear receptor',
    effect: 'Enhances insulin sensitivity; favorable effect on adipose distribution',
    hba1cReduction: '1.0-1.5%',
    sideEffects: ['Weight gain', 'Edema', 'Heart failure', 'Fractures', 'Bladder cancer (pioglitazone)'],
    contraindications: ['Heart failure', 'Active bladder cancer'],
  },
  {
    drug: 'Insulin (various types)',
    drugClass: 'Hormone replacement',
    mechanism: 'Replaces endogenous insulin; activates insulin receptor',
    target: 'Insulin receptor',
    effect: 'Promotes glucose uptake, suppresses hepatic glucose output, prevents ketosis',
    hba1cReduction: 'Variable (dose-dependent)',
    sideEffects: ['Hypoglycemia', 'Weight gain', 'Injection site reactions'],
  },
];

// ============================================================================
// LAB-GLUCOSE CORRELATIONS
// ============================================================================

export const LAB_GLUCOSE_CORRELATIONS: LabGlucoseCorrelation[] = [
  {
    labId: 'fasting-glucose',
    labName: 'Fasting Plasma Glucose',
    interpretation: 'Reflects hepatic glucose output and overnight glycemic control',
    diagnosticCriteria: [
      'Normal: <100 mg/dL',
      'Prediabetes (IFG): 100-125 mg/dL',
      'Diabetes: ≥126 mg/dL (confirmed on repeat)',
    ],
    targetValues: '80-130 mg/dL (ADA target for most adults with diabetes)',
  },
  {
    labId: 'hba1c',
    labName: 'Hemoglobin A1c',
    interpretation: 'Reflects average glucose over 2-3 months (RBC lifespan); correlates with complication risk',
    diagnosticCriteria: [
      'Normal: <5.7%',
      'Prediabetes: 5.7-6.4%',
      'Diabetes: ≥6.5%',
    ],
    targetValues: '<7% for most adults; individualized (6.0-8.0%)',
  },
  {
    labId: 'ogtt',
    labName: 'Oral Glucose Tolerance Test (2-hour)',
    interpretation: 'Measures glucose disposal after standardized glucose load; sensitive for early diabetes',
    diagnosticCriteria: [
      'Normal: <140 mg/dL',
      'Prediabetes (IGT): 140-199 mg/dL',
      'Diabetes: ≥200 mg/dL',
    ],
    targetValues: '<140 mg/dL',
  },
  {
    labId: 'c-peptide',
    labName: 'C-Peptide',
    interpretation: 'Marker of endogenous insulin production; 1:1 molar ratio with insulin',
    diagnosticCriteria: [
      'Normal: 0.5-2.0 ng/mL (fasting)',
      'Low: suggests T1DM or late T2DM',
      'High: suggests insulin resistance or insulinoma',
    ],
    targetValues: 'Context-dependent',
  },
  {
    labId: 'fructosamine',
    labName: 'Fructosamine',
    interpretation: 'Reflects average glucose over 2-3 weeks (protein glycation); useful when HbA1c unreliable',
    diagnosticCriteria: [
      'Normal: 200-285 µmol/L',
      'Useful in hemoglobinopathies, pregnancy, rapid glucose change',
    ],
    targetValues: 'Correlates with HbA1c; individualized',
  },
];

// ============================================================================
// STATISTICS
// ============================================================================

export const GLUCOSE_METABOLISM_STATISTICS: GlucoseMetabolismStatistics = {
  dailyGlucoseProduction: '~200 g/day (liver: gluconeogenesis + glycogenolysis)',
  brainGlucoseUsage: '~120 g/day (obligate glucose consumer)',
  liverGlycogenCapacity: '~100 g',
  muscleGlycogenCapacity: '~400 g (total body muscle)',
  insulinHalfLife: '5-6 minutes',
};

// ============================================================================
// API FUNCTIONS
// ============================================================================

export function getGlucoseAbsorptionSteps(): GlucoseAbsorptionStep[] {
  return GLUCOSE_ABSORPTION_STEPS;
}

export function getGLUTTransporter(id: string): GLUTTransporter | undefined {
  return glutTransporters.get(id);
}

export function getAllGLUTTransporters(): GLUTTransporter[] {
  return Array.from(glutTransporters.values());
}

export function getInsulinSecretionSteps(): InsulinSecretionStep[] {
  return INSULIN_SECRETION_STEPS;
}

export function getInsulinSignalingSteps(): InsulinSignalingStep[] {
  return INSULIN_SIGNALING_STEPS;
}

export function getMetabolicPathway(id: string): MetabolicPathway | undefined {
  return metabolicPathways.get(id);
}

export function getAllMetabolicPathways(): MetabolicPathway[] {
  return Array.from(metabolicPathways.values());
}

export function getMetabolicPathwaysByType(
  type: GlucosePathwayType
): MetabolicPathway[] {
  return Array.from(metabolicPathways.values()).filter((p) => p.type === type);
}

export function getDiabetesPathophysiology(
  type: DiabetesType
): DiabetesPathophysiology | undefined {
  return diabetesTypes.get(type);
}

export function getAllDiabetesTypes(): DiabetesPathophysiology[] {
  return Array.from(diabetesTypes.values());
}

export function getDiabeticComplications(): DiabeticComplication[] {
  return DIABETIC_COMPLICATIONS;
}

export function getAntiDiabeticDrugs(): AntiDiabeticDrug[] {
  return ANTI_DIABETIC_DRUGS;
}

export function getLabGlucoseCorrelations(): LabGlucoseCorrelation[] {
  return LAB_GLUCOSE_CORRELATIONS;
}

export function getGlucoseMetabolismStatistics(): GlucoseMetabolismStatistics {
  return GLUCOSE_METABOLISM_STATISTICS;
}

export function getMetabolicPathwayExplanation(
  id: string,
  level: 1 | 2 | 3 | 4 | 5
): string | undefined {
  const pathway = metabolicPathways.get(id);
  if (!pathway) return undefined;
  return pathway.explanations[`level${level}`];
}

export function getDiabetesExplanation(
  type: DiabetesType,
  level: 1 | 2 | 3 | 4 | 5
): string | undefined {
  const diabetes = diabetesTypes.get(type);
  if (!diabetes) return undefined;
  return diabetes.explanations[`level${level}`];
}

export function searchGlucoseMetabolism(query: string): {
  pathways: MetabolicPathway[];
  transporters: GLUTTransporter[];
  drugs: AntiDiabeticDrug[];
} {
  const q = query.toLowerCase();
  return {
    pathways: Array.from(metabolicPathways.values()).filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.keyEnzymes.some((e) => e.name.toLowerCase().includes(q))
    ),
    transporters: Array.from(glutTransporters.values()).filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.tissues.some((tissue) => tissue.toLowerCase().includes(q))
    ),
    drugs: ANTI_DIABETIC_DRUGS.filter(
      (d) =>
        d.drug.toLowerCase().includes(q) ||
        d.mechanism.toLowerCase().includes(q)
    ),
  };
}
