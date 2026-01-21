/**
 * Lipid Metabolism Data Store
 *
 * Comprehensive data for lipid absorption, lipoprotein metabolism,
 * cholesterol transport, and atherosclerosis.
 */

import type {
  LipidAbsorptionStep,
  LipoproteinParticle,
  LipoproteinClass,
  LipoproteinLifecycleStage,
  ReverseTransportStep,
  AtherosclerosisStage,
  LipidDrugMechanism,
  LabLipidCorrelation,
  LipidMetabolismStatistics,
} from './types';

// ============================================================================
// LIPID ABSORPTION
// ============================================================================

export const LIPID_ABSORPTION_STEPS: LipidAbsorptionStep[] = [
  {
    stepNumber: 1,
    name: 'Emulsification',
    location: 'Duodenum',
    description: 'Bile salts emulsify dietary fat into small droplets, increasing surface area for enzymatic digestion',
    molecules: ['Bile salts', 'Phospholipids', 'Dietary triglycerides'],
    clinicalNote: 'Bile salt deficiency (cholestasis, ileal resection) causes fat malabsorption',
  },
  {
    stepNumber: 2,
    name: 'Enzymatic Hydrolysis',
    location: 'Duodenum and jejunum',
    description: 'Pancreatic lipase with colipase hydrolyzes triglycerides to 2-monoacylglycerol and free fatty acids',
    molecules: ['Triglycerides', '2-Monoacylglycerol', 'Free fatty acids'],
    enzymes: ['Pancreatic lipase', 'Colipase', 'Phospholipase A2', 'Cholesterol esterase'],
    clinicalNote: 'Chronic pancreatitis or cystic fibrosis impairs lipase secretion',
  },
  {
    stepNumber: 3,
    name: 'Micelle Formation',
    location: 'Jejunal lumen',
    description: 'Bile salts form mixed micelles with digestion products, solubilizing them for absorption',
    molecules: ['Mixed micelles', '2-MAG', 'FFAs', 'Cholesterol', 'Fat-soluble vitamins'],
    clinicalNote: 'Critical for cholesterol and fat-soluble vitamin absorption (A, D, E, K)',
  },
  {
    stepNumber: 4,
    name: 'Enterocyte Uptake',
    location: 'Jejunal enterocyte brush border',
    description: 'Micelle contents diffuse across the membrane; cholesterol is actively transported by NPC1L1',
    molecules: ['2-MAG', 'FFAs', 'Cholesterol'],
    transporters: ['NPC1L1 (cholesterol)', 'CD36 (fatty acids)', 'FATP4'],
    clinicalNote: 'Ezetimibe blocks NPC1L1, reducing cholesterol absorption',
  },
  {
    stepNumber: 5,
    name: 'Re-esterification',
    location: 'Enterocyte ER',
    description: 'Fatty acids and 2-MAG are re-esterified to triglycerides; cholesterol is esterified by ACAT2',
    molecules: ['Triglycerides', 'Cholesterol esters'],
    enzymes: ['MGAT', 'DGAT', 'ACAT2'],
    clinicalNote: 'ACAT inhibitors were tested but failed due to toxicity',
  },
  {
    stepNumber: 6,
    name: 'Chylomicron Assembly',
    location: 'Enterocyte ER and Golgi',
    description: 'MTP transfers lipids onto ApoB-48, forming chylomicrons',
    molecules: ['Chylomicrons', 'ApoB-48', 'ApoA-I', 'ApoA-IV'],
    enzymes: ['MTP (microsomal triglyceride transfer protein)'],
    clinicalNote: 'MTP deficiency causes abetalipoproteinemia',
  },
  {
    stepNumber: 7,
    name: 'Lymphatic Secretion',
    location: 'Enterocyte basolateral → lymphatics',
    description: 'Chylomicrons are secreted into lacteals (lymphatic vessels) due to large size',
    molecules: ['Chylomicrons'],
    clinicalNote: 'Bypasses liver first-pass; enters blood via thoracic duct',
  },
];

// ============================================================================
// LIPOPROTEIN PARTICLES
// ============================================================================

const lipoproteins = new Map<string, LipoproteinParticle>();

lipoproteins.set('chylomicron', {
  id: 'chylomicron',
  name: 'Chylomicron',
  class: 'chylomicron',
  density: '<0.95 g/mL',
  size: '75-1200 nm (largest)',
  composition: {
    triglycerides: '85-90%',
    cholesterol: '3-5%',
    phospholipids: '6-8%',
    protein: '1-2%',
  },
  apolipoproteins: ['ApoB-48 (structural)', 'ApoC-II (activates LPL)', 'ApoE (receptor binding)'],
  source: 'Intestinal enterocytes',
  function: 'Transport dietary lipids from intestine to peripheral tissues',
  metabolism: 'LPL hydrolyzes TG → chylomicron remnants → hepatic uptake via LRP/LDL-R',
  clinicalSignificance: 'Elevated in type I hyperlipoproteinemia; causes milky serum if fasting >12h',
  explanations: {
    level1: 'Chylomicrons are big fat bubbles that carry fat from the food you eat through your blood.',
    level2: 'After you eat fatty food, your intestines package the fat into chylomicrons. These particles deliver fat to muscles for energy and to fat tissue for storage.',
    level3: 'Chylomicrons are the largest lipoproteins, rich in dietary triglycerides. They acquire ApoC-II and ApoE in circulation, enabling lipoprotein lipase activity and hepatic uptake of remnants.',
    level4: 'ApoB-48 (truncated ApoB from RNA editing in intestine) is essential for chylomicron assembly via MTP. LPL on capillary endothelium, activated by ApoC-II, hydrolyzes core triglycerides. The resulting chylomicron remnants are rapidly cleared by hepatic LRP and LDL receptors via ApoE.',
    level5: 'Chylomicrons have a half-life of minutes, with rapid TG hydrolysis by LPL. GPIHBP1 anchors LPL to capillary endothelium. ApoC-III inhibits LPL and hepatic uptake. Chylomicron remnants are atherogenic and associated with postprandial lipemia. Familial chylomicronemia syndrome (LPL, ApoC-II, or GPIHBP1 deficiency) causes severe hypertriglyceridemia and pancreatitis risk.',
  },
});

lipoproteins.set('vldl', {
  id: 'vldl',
  name: 'Very Low-Density Lipoprotein',
  class: 'vldl',
  density: '0.95-1.006 g/mL',
  size: '30-80 nm',
  composition: {
    triglycerides: '50-55%',
    cholesterol: '20-25%',
    phospholipids: '15-20%',
    protein: '8-10%',
  },
  apolipoproteins: ['ApoB-100 (structural)', 'ApoC-II (activates LPL)', 'ApoE', 'ApoC-III'],
  source: 'Hepatocytes',
  function: 'Transport endogenous (liver-synthesized) triglycerides to peripheral tissues',
  metabolism: 'LPL hydrolyzes TG → IDL → further hydrolysis → LDL',
  clinicalSignificance: 'Elevated in metabolic syndrome, diabetes; VLDL-TG used to estimate LDL',
  explanations: {
    level1: 'VLDL is a package that your liver makes to send fat to the rest of your body.',
    level2: 'Your liver makes VLDL to transport fat it has produced or received. As VLDL delivers fat, it gets smaller and eventually becomes LDL (bad cholesterol).',
    level3: 'VLDL is synthesized in hepatocytes containing ApoB-100. It transports endogenous triglycerides. LPL-mediated hydrolysis converts VLDL to IDL, then LDL. VLDL overproduction occurs in insulin resistance.',
    level4: 'Hepatic VLDL assembly requires MTP-mediated lipid transfer onto ApoB-100 in the ER. Insulin suppresses ApoB secretion; insulin resistance causes VLDL overproduction. The triglyceride/ApoB ratio determines VLDL particle size - larger, TG-rich particles in hypertriglyceridemia.',
    level5: 'VLDL secretion is regulated at multiple levels: ApoB-100 synthesis, lipidation by MTP, and ER-associated degradation of unlipidated ApoB. FFA influx and de novo lipogenesis (SREBP-1c) determine TG availability. ApoC-III promotes VLDL-TG secretion and inhibits clearance. Novel therapies target ApoC-III (volanesorsen) to lower triglycerides.',
  },
});

lipoproteins.set('ldl', {
  id: 'ldl',
  name: 'Low-Density Lipoprotein',
  class: 'ldl',
  density: '1.019-1.063 g/mL',
  size: '18-25 nm',
  composition: {
    triglycerides: '5-10%',
    cholesterol: '45-50%',
    phospholipids: '20-25%',
    protein: '20-25%',
  },
  apolipoproteins: ['ApoB-100 (one per particle)'],
  source: 'VLDL delipidation (hepatic origin)',
  function: 'Deliver cholesterol to peripheral tissues; primary atherogenic lipoprotein',
  metabolism: 'Cleared by hepatic LDL receptors via ApoB-100 binding',
  clinicalSignificance: 'Primary target for CV risk reduction; small dense LDL more atherogenic',
  explanations: {
    level1: 'LDL is the "bad" cholesterol that can stick to your blood vessel walls and cause heart problems.',
    level2: 'LDL carries cholesterol from the liver to body tissues. But too much LDL can deposit cholesterol in artery walls, leading to blockages and heart attacks.',
    level3: 'LDL is the end product of VLDL metabolism. Each particle has one ApoB-100. LDL delivers cholesterol to tissues via LDL receptor-mediated endocytosis. Oxidized LDL in the arterial wall initiates atherosclerosis.',
    level4: 'LDL particle heterogeneity exists: small, dense LDL (pattern B) is more atherogenic due to longer circulation time, greater oxidation susceptibility, and easier penetration of arterial wall. LDL receptor (LDLR) expression is regulated by SREBP-2 in response to intracellular cholesterol.',
    level5: 'LDL retention in the subendothelial space initiates atherosclerosis (response-to-retention hypothesis). Proteoglycans bind ApoB-100. Oxidized LDL is recognized by scavenger receptors (CD36, SR-A) on macrophages, creating foam cells. PCSK9 binds LDLR on the cell surface, targeting it for lysosomal degradation rather than recycling. LDL-C correlates with cardiovascular risk, but LDL particle number (LDL-P, ApoB) may be more predictive.',
  },
});

lipoproteins.set('hdl', {
  id: 'hdl',
  name: 'High-Density Lipoprotein',
  class: 'hdl',
  density: '1.063-1.21 g/mL',
  size: '5-12 nm (smallest)',
  composition: {
    triglycerides: '3-5%',
    cholesterol: '15-25%',
    phospholipids: '25-30%',
    protein: '45-55%',
  },
  apolipoproteins: ['ApoA-I (major)', 'ApoA-II', 'ApoC', 'ApoE'],
  source: 'Liver and intestine (nascent discoidal HDL)',
  function: 'Reverse cholesterol transport - remove cholesterol from peripheral tissues to liver',
  metabolism: 'Cholesterol esterified by LCAT, transferred to liver via SR-BI or to VLDL/LDL via CETP',
  clinicalSignificance: '"Good" cholesterol; low HDL is CV risk factor; raising HDL pharmacologically hasn\'t reduced events',
  explanations: {
    level1: 'HDL is the "good" cholesterol that cleans up extra cholesterol from your body.',
    level2: 'HDL particles pick up excess cholesterol from your tissues and artery walls and bring it back to the liver for disposal. Higher HDL is generally better for heart health.',
    level3: 'HDL mediates reverse cholesterol transport. Nascent HDL (ApoA-I) accepts cholesterol from cells via ABCA1. LCAT esterifies cholesterol, maturing HDL. Cholesterol is delivered to liver via SR-BI or transferred to VLDL/LDL by CETP.',
    level4: 'ApoA-I is synthesized by liver and intestine. ABCA1 effluxes cholesterol to lipid-poor ApoA-I (pre-β HDL). LCAT converts cholesterol to cholesterol esters (hydrophobic core). ABCG1 effluxes to mature HDL. SR-BI is the hepatic HDL receptor mediating selective cholesterol uptake without particle endocytosis.',
    level5: 'HDL functionality (cholesterol efflux capacity) may be more important than HDL-C levels. HDL also has anti-inflammatory, antioxidant, and antithrombotic properties via ApoA-I and associated enzymes (PON1). CETP inhibitors raise HDL but haven\'t reduced CV events (some increased events). ApoA-I mimetics and ABCA1 upregulators are in development. Mendelian randomization suggests HDL-C is not causally protective.',
  },
});

lipoproteins.set('lipoprotein-a', {
  id: 'lipoprotein-a',
  name: 'Lipoprotein(a)',
  class: 'lipoprotein-a',
  density: '1.05-1.12 g/mL',
  size: '25-30 nm',
  composition: {
    triglycerides: '5%',
    cholesterol: '45%',
    phospholipids: '20%',
    protein: '30%',
  },
  apolipoproteins: ['ApoB-100', 'Apo(a) (covalently linked)'],
  source: 'Liver',
  function: 'Unknown physiological function; potent CV risk factor',
  metabolism: 'Not affected by statins; poorly understood clearance',
  clinicalSignificance: 'Independent genetic CV risk factor; levels determined primarily by LPA gene',
  explanations: {
    level1: 'Lipoprotein(a) or Lp(a) is a special type of bad cholesterol that runs in families and increases heart attack risk.',
    level2: 'Lp(a) is similar to LDL but has an extra protein attached. High Lp(a) increases heart disease risk independently of LDL. Levels are mostly determined by your genes and don\'t change much with diet or most medications.',
    level3: 'Lp(a) consists of an LDL-like particle with Apo(a) covalently bound to ApoB-100. Apo(a) is homologous to plasminogen, potentially interfering with fibrinolysis. Lp(a) levels are 80-90% genetically determined by LPA gene variants (kringle repeat number).',
    level4: 'Apo(a) contains multiple kringle IV-2 repeats; fewer repeats = higher Lp(a) levels. Lp(a) is atherogenic (LDL-like) and prothrombotic (plasminogen homology without enzymatic activity). Lp(a) carries oxidized phospholipids, promoting inflammation. PCSK9 inhibitors reduce Lp(a) ~25%.',
    level5: 'Lp(a) assembly occurs in hepatocytes: Apo(a) binds ApoB-100 on nascent or mature LDL via lysine-binding sites. Clearance mechanisms are unclear - may involve LDL receptor, scavenger receptors, and plasminogen receptors. Mendelian randomization confirms Lp(a) causality in ASCVD. Novel therapies: antisense oligonucleotides (pelacarsen) and siRNA targeting hepatic LPA mRNA reduce Lp(a) >80%.',
  },
});

// ============================================================================
// LIPOPROTEIN LIFECYCLE
// ============================================================================

export const VLDL_LDL_LIFECYCLE: LipoproteinLifecycleStage[] = [
  {
    stageName: 'VLDL Assembly',
    lipoprotein: 'vldl',
    location: 'Hepatocyte ER',
    description: 'MTP transfers TG and cholesterol esters onto nascent ApoB-100',
    keyEvents: [
      'ApoB-100 synthesis and translocation into ER',
      'MTP-mediated lipid transfer',
      'Formation of primordial VLDL',
      'Additional lipid loading in ER and Golgi',
    ],
    enzymes: ['MTP'],
  },
  {
    stageName: 'VLDL Secretion',
    lipoprotein: 'vldl',
    location: 'Hepatocyte → plasma',
    description: 'Mature VLDL secreted into space of Disse, enters sinusoidal blood',
    keyEvents: [
      'Golgi processing and maturation',
      'Secretion into space of Disse',
      'Entry into hepatic sinusoids',
      'Acquisition of ApoC-II, ApoC-III, ApoE from HDL',
    ],
  },
  {
    stageName: 'Peripheral Lipolysis',
    lipoprotein: 'vldl',
    location: 'Capillary endothelium (muscle, adipose)',
    description: 'LPL hydrolyzes triglycerides, releasing FFAs for tissue uptake',
    keyEvents: [
      'ApoC-II activates LPL',
      'LPL hydrolyzes core triglycerides',
      'FFAs released and taken up by tissues',
      'Particle shrinks, becomes denser',
    ],
    enzymes: ['Lipoprotein lipase (LPL)'],
    receptors: ['GPIHBP1 (anchors LPL)'],
    products: ['Free fatty acids', 'IDL'],
  },
  {
    stageName: 'IDL Formation',
    lipoprotein: 'idl',
    location: 'Plasma',
    description: 'TG-depleted VLDL becomes IDL; surface components transfer to HDL',
    keyEvents: [
      'Loss of ~50% triglycerides',
      'Surface phospholipids and apolipoproteins transfer to HDL',
      'ApoC returns to HDL, ApoE retained',
      'IDL either cleared by liver or converted to LDL',
    ],
    receptors: ['LDL receptor (via ApoE)', 'LRP'],
  },
  {
    stageName: 'LDL Formation',
    lipoprotein: 'ldl',
    location: 'Plasma (hepatic lipase action)',
    description: 'Hepatic lipase further hydrolyzes IDL triglycerides, forming LDL',
    keyEvents: [
      'Hepatic lipase hydrolyzes residual TG and phospholipids',
      'ApoE lost, only ApoB-100 remains',
      'LDL particle formed - cholesterol-rich, TG-poor',
      'LDL circulates with half-life of 2-3 days',
    ],
    enzymes: ['Hepatic lipase'],
    products: ['LDL'],
  },
  {
    stageName: 'LDL Receptor-Mediated Uptake',
    lipoprotein: 'ldl',
    location: 'Hepatocytes and peripheral cells',
    description: 'LDL receptor binds ApoB-100, internalizing LDL by endocytosis',
    keyEvents: [
      'ApoB-100 binds LDL receptor',
      'Clathrin-coated pit formation',
      'Receptor-mediated endocytosis',
      'LDL degraded in lysosomes',
      'Cholesterol released, receptor recycles',
    ],
    receptors: ['LDL receptor'],
  },
];

// ============================================================================
// HDL REVERSE CHOLESTEROL TRANSPORT
// ============================================================================

export const REVERSE_CHOLESTEROL_TRANSPORT: ReverseTransportStep[] = [
  {
    stepNumber: 1,
    name: 'Nascent HDL Formation',
    location: 'Liver and intestine',
    description: 'ApoA-I secreted as lipid-poor pre-β HDL',
    molecules: ['ApoA-I', 'Pre-β HDL'],
  },
  {
    stepNumber: 2,
    name: 'Cholesterol Efflux via ABCA1',
    location: 'Peripheral cells (macrophages, foam cells)',
    description: 'ABCA1 transporter effluxes cholesterol and phospholipids to lipid-poor ApoA-I',
    molecules: ['Free cholesterol', 'Phospholipids'],
    transporters: ['ABCA1'],
    clinicalNote: 'ABCA1 mutations cause Tangier disease (very low HDL)',
  },
  {
    stepNumber: 3,
    name: 'LCAT Esterification',
    location: 'Plasma (HDL surface)',
    description: 'LCAT esterifies cholesterol, which moves to HDL core, maturing the particle',
    molecules: ['Cholesterol esters'],
    enzymes: ['LCAT (lecithin-cholesterol acyltransferase)'],
    clinicalNote: 'LCAT deficiency causes fish-eye disease and corneal opacities',
  },
  {
    stepNumber: 4,
    name: 'Further Cholesterol Efflux via ABCG1',
    location: 'Peripheral cells',
    description: 'ABCG1 effluxes cholesterol to mature, lipidated HDL',
    molecules: ['Free cholesterol'],
    transporters: ['ABCG1'],
  },
  {
    stepNumber: 5,
    name: 'CETP-Mediated Transfer',
    location: 'Plasma',
    description: 'CETP transfers cholesterol esters from HDL to VLDL/LDL in exchange for TG',
    molecules: ['Cholesterol esters (to VLDL/LDL)', 'Triglycerides (to HDL)'],
    enzymes: ['CETP (cholesterol ester transfer protein)'],
    clinicalNote: 'CETP inhibitors raise HDL but failed to reduce CV events',
  },
  {
    stepNumber: 6,
    name: 'Hepatic Uptake via SR-BI',
    location: 'Hepatocyte',
    description: 'SR-BI receptor mediates selective cholesterol ester uptake from HDL without internalizing particle',
    molecules: ['Cholesterol esters'],
    transporters: ['SR-BI (scavenger receptor B1)'],
    clinicalNote: 'SR-BI transfers cholesterol for biliary excretion or bile acid synthesis',
  },
  {
    stepNumber: 7,
    name: 'Biliary Excretion',
    location: 'Hepatocyte → bile',
    description: 'Cholesterol excreted directly into bile or converted to bile acids',
    molecules: ['Free cholesterol', 'Bile acids'],
    transporters: ['ABCG5/G8 (cholesterol)', 'BSEP (bile acids)'],
  },
];

// ============================================================================
// ATHEROSCLEROSIS STAGES
// ============================================================================

export const ATHEROSCLEROSIS_STAGES: AtherosclerosisStage[] = [
  {
    stageName: 'Endothelial Dysfunction',
    timeframe: 'Years to decades (initiating)',
    description: 'Risk factors damage endothelium, increasing permeability and adhesion molecule expression',
    keyEvents: [
      'Hemodynamic stress at branch points',
      'Hyperlipidemia, hypertension, smoking, diabetes',
      'Reduced nitric oxide production',
      'Increased endothelial permeability',
      'Expression of adhesion molecules (VCAM-1, ICAM-1)',
    ],
    cells: ['Endothelial cells'],
    lesionType: 'No visible lesion',
    reversible: true,
  },
  {
    stageName: 'LDL Infiltration and Oxidation',
    timeframe: 'Early fatty streak',
    description: 'LDL particles enter subendothelial space and become oxidized',
    keyEvents: [
      'LDL transcytosis across endothelium',
      'LDL retention by proteoglycans (ApoB-100 binding)',
      'Oxidative modification by ROS',
      'Formation of oxidized LDL (oxLDL)',
      'oxLDL is highly inflammatory and immunogenic',
    ],
    cells: ['Endothelial cells'],
    lesionType: 'Intimal thickening',
    reversible: true,
  },
  {
    stageName: 'Monocyte Recruitment and Foam Cell Formation',
    timeframe: 'Fatty streak',
    description: 'Monocytes enter intima, become macrophages, engulf oxLDL, and transform into foam cells',
    keyEvents: [
      'MCP-1 attracts monocytes',
      'Monocytes adhere and transmigrate',
      'Differentiation to macrophages (M-CSF)',
      'Scavenger receptor uptake of oxLDL (SR-A, CD36)',
      'Cholesterol ester accumulation → foam cells',
    ],
    cells: ['Monocytes', 'Macrophages', 'Foam cells'],
    lesionType: 'Fatty streak (type I-II)',
    reversible: true,
    clinicalConsequence: 'Fatty streaks present in childhood; reversible',
  },
  {
    stageName: 'Smooth Muscle Cell Migration',
    timeframe: 'Pathologic intimal thickening',
    description: 'Vascular smooth muscle cells migrate from media to intima and proliferate',
    keyEvents: [
      'Platelet-derived growth factor (PDGF) release',
      'SMC phenotype switch (contractile → synthetic)',
      'Migration into intima',
      'Proliferation and extracellular matrix production',
      'Collagen, elastin, proteoglycan deposition',
    ],
    cells: ['Smooth muscle cells', 'Macrophages'],
    lesionType: 'Pathologic intimal thickening (type III)',
    reversible: false,
  },
  {
    stageName: 'Fibrous Plaque Formation',
    timeframe: 'Fibroatheroma',
    description: 'Fibrous cap forms over lipid core; early advanced lesion',
    keyEvents: [
      'Thick fibrous cap (collagen-rich)',
      'Lipid core beneath cap',
      'Ongoing inflammation',
      'Calcification may begin',
      'Neovascularization from vasa vasorum',
    ],
    cells: ['SMCs', 'Macrophages', 'T lymphocytes'],
    lesionType: 'Fibroatheroma (type IV)',
    reversible: false,
    clinicalConsequence: 'May cause stable angina if flow-limiting',
  },
  {
    stageName: 'Vulnerable Plaque',
    timeframe: 'Thin-cap fibroatheroma',
    description: 'Thin fibrous cap, large lipid core, active inflammation - high rupture risk',
    keyEvents: [
      'Thin fibrous cap (<65 µm)',
      'Large necrotic lipid core (>40% of plaque)',
      'Abundant inflammatory cells (macrophages)',
      'MMP-mediated cap degradation',
      'Intraplaque hemorrhage from fragile neovessels',
    ],
    cells: ['Macrophages', 'T cells', 'Mast cells'],
    lesionType: 'Thin-cap fibroatheroma (TCFA)',
    reversible: false,
    clinicalConsequence: 'High risk of rupture and acute coronary syndrome',
  },
  {
    stageName: 'Plaque Rupture and Thrombosis',
    timeframe: 'Acute event',
    description: 'Fibrous cap ruptures, exposing thrombogenic lipid core to blood',
    keyEvents: [
      'Mechanical stress or inflammation triggers rupture',
      'Tissue factor exposure from necrotic core',
      'Platelet adhesion and activation',
      'Coagulation cascade activation',
      'Thrombus formation - may be occlusive',
    ],
    cells: ['Platelets', 'Inflammatory cells'],
    lesionType: 'Ruptured plaque with thrombus',
    reversible: false,
    clinicalConsequence: 'Acute MI, unstable angina, sudden cardiac death',
  },
];

// ============================================================================
// LIPID-LOWERING DRUGS
// ============================================================================

export const LIPID_DRUG_MECHANISMS: LipidDrugMechanism[] = [
  {
    drug: 'Statins (atorvastatin, rosuvastatin)',
    drugClass: 'HMG-CoA reductase inhibitors',
    target: 'HMG-CoA reductase (rate-limiting enzyme)',
    mechanism: 'Competitive inhibition of cholesterol synthesis; depletes hepatocyte cholesterol',
    effect: 'Upregulates LDL receptors, increasing LDL clearance from blood',
    ldlReduction: '30-50% (intensity-dependent)',
    sideEffects: ['Myopathy/myalgia', 'Elevated LFTs', 'New-onset diabetes'],
    contraindications: ['Active liver disease', 'Pregnancy'],
  },
  {
    drug: 'Ezetimibe',
    drugClass: 'Cholesterol absorption inhibitor',
    target: 'NPC1L1 (intestinal cholesterol transporter)',
    mechanism: 'Blocks intestinal cholesterol absorption',
    effect: 'Reduces cholesterol delivery to liver, upregulates LDL receptors',
    ldlReduction: '15-20% (additional to statin)',
    sideEffects: ['Diarrhea', 'Arthralgia'],
  },
  {
    drug: 'PCSK9 inhibitors (evolocumab, alirocumab)',
    drugClass: 'Monoclonal antibodies',
    target: 'PCSK9 (promotes LDL receptor degradation)',
    mechanism: 'Binds and inhibits PCSK9, preventing LDL receptor degradation',
    effect: 'More LDL receptors on hepatocyte surface, increased LDL clearance',
    ldlReduction: '50-70% (additional to statin)',
    sideEffects: ['Injection site reactions', 'Flu-like symptoms'],
  },
  {
    drug: 'Bempedoic acid',
    drugClass: 'ATP citrate lyase inhibitor',
    target: 'ACL (upstream of HMG-CoA reductase)',
    mechanism: 'Inhibits cholesterol synthesis upstream of statins; activated only in liver',
    effect: 'Reduces cholesterol synthesis; upregulates LDL receptors',
    ldlReduction: '15-25%',
    sideEffects: ['Hyperuricemia', 'Tendon rupture'],
    contraindications: ['Not activated in muscle - may avoid myopathy'],
  },
  {
    drug: 'Inclisiran',
    drugClass: 'siRNA',
    target: 'PCSK9 mRNA',
    mechanism: 'Small interfering RNA silences hepatic PCSK9 production',
    effect: 'Reduces PCSK9 synthesis; increases LDL receptor expression',
    ldlReduction: '50%',
    sideEffects: ['Injection site reactions'],
  },
  {
    drug: 'Fibrates (fenofibrate, gemfibrozil)',
    drugClass: 'PPARα agonists',
    target: 'PPARα nuclear receptor',
    mechanism: 'Increases LPL, reduces ApoC-III, enhances fatty acid oxidation',
    effect: 'Lowers triglycerides, modestly raises HDL',
    ldlReduction: 'Variable (may increase LDL if baseline TG very high)',
    sideEffects: ['Myopathy (especially with statin)', 'Gallstones', 'Elevated LFTs'],
    contraindications: ['Severe renal/hepatic disease'],
  },
  {
    drug: 'Omega-3 fatty acids (icosapent ethyl)',
    drugClass: 'Omega-3 fatty acid ethyl ester',
    target: 'Multiple (VLDL production, LPL activity)',
    mechanism: 'Reduces hepatic VLDL-TG production, enhances TG clearance',
    effect: 'Lowers triglycerides; EPA reduces CV events beyond TG lowering',
    ldlReduction: 'None (may slightly increase LDL)',
    sideEffects: ['Fishy aftertaste', 'Atrial fibrillation (high doses)'],
  },
  {
    drug: 'Bile acid sequestrants (cholestyramine, colesevelam)',
    drugClass: 'Bile acid binders',
    target: 'Bile acids in intestine',
    mechanism: 'Binds bile acids, preventing enterohepatic recycling',
    effect: 'Liver increases bile acid synthesis from cholesterol, upregulates LDL receptors',
    ldlReduction: '15-25%',
    sideEffects: ['GI upset', 'Constipation', 'Drug interactions'],
    contraindications: ['Hypertriglyceridemia (may worsen)'],
  },
];

// ============================================================================
// LAB-LIPID CORRELATIONS
// ============================================================================

export const LAB_LIPID_CORRELATIONS: LabLipidCorrelation[] = [
  {
    labId: 'total-cholesterol',
    labName: 'Total Cholesterol',
    lipoproteins: ['ldl', 'hdl', 'vldl'],
    interpretation: 'Sum of cholesterol in all lipoprotein fractions; less specific than LDL',
    targetValues: '<200 mg/dL desirable',
  },
  {
    labId: 'ldl',
    labName: 'LDL Cholesterol',
    lipoproteins: ['ldl'],
    interpretation: 'Primary atherogenic lipoprotein; main target for therapy',
    targetValues: '<70 mg/dL very high risk; <100 mg/dL high risk; <130 mg/dL moderate risk',
  },
  {
    labId: 'hdl',
    labName: 'HDL Cholesterol',
    lipoproteins: ['hdl'],
    interpretation: 'Reverse cholesterol transport marker; low HDL is CV risk factor',
    targetValues: '>40 mg/dL (men), >50 mg/dL (women)',
  },
  {
    labId: 'triglycerides',
    labName: 'Triglycerides',
    lipoproteins: ['vldl', 'chylomicron'],
    interpretation: 'Reflects VLDL-TG primarily; elevated in metabolic syndrome, diabetes',
    targetValues: '<150 mg/dL normal; >500 mg/dL pancreatitis risk',
  },
  {
    labId: 'non-hdl',
    labName: 'Non-HDL Cholesterol',
    lipoproteins: ['ldl', 'vldl', 'idl', 'lipoprotein-a'],
    interpretation: 'Total cholesterol minus HDL; captures all atherogenic particles; better than LDL in high TG',
    targetValues: 'LDL goal + 30 mg/dL',
  },
  {
    labId: 'apob',
    labName: 'Apolipoprotein B',
    lipoproteins: ['ldl', 'vldl', 'idl', 'lipoprotein-a'],
    interpretation: 'One ApoB per atherogenic particle; reflects particle number rather than cholesterol content',
    targetValues: '<90 mg/dL high risk; <65 mg/dL very high risk',
  },
  {
    labId: 'lipoprotein-a',
    labName: 'Lipoprotein(a)',
    lipoproteins: ['lipoprotein-a'],
    interpretation: 'Genetically determined; independent CV risk factor; check once in lifetime',
    targetValues: '<50 nmol/L (or <30 mg/dL) desirable',
  },
];

// ============================================================================
// STATISTICS
// ============================================================================

export const LIPID_METABOLISM_STATISTICS: LipidMetabolismStatistics = {
  dailyCholesterolSynthesis: '~1000 mg/day (liver)',
  dailyCholesterolAbsorption: '~300-500 mg/day (50% of dietary)',
  dailyBileAcidSynthesis: '~500 mg/day',
  ldlHalfLife: '2-3 days',
  hdlHalfLife: '3-5 days',
};

// ============================================================================
// API FUNCTIONS
// ============================================================================

export function getLipoprotein(id: string): LipoproteinParticle | undefined {
  return lipoproteins.get(id);
}

export function getAllLipoproteins(): LipoproteinParticle[] {
  return Array.from(lipoproteins.values());
}

export function getLipoproteinsByClass(
  className: LipoproteinClass
): LipoproteinParticle[] {
  return Array.from(lipoproteins.values()).filter((l) => l.class === className);
}

export function getLipidAbsorptionSteps(): LipidAbsorptionStep[] {
  return LIPID_ABSORPTION_STEPS;
}

export function getVLDLLDLLifecycle(): LipoproteinLifecycleStage[] {
  return VLDL_LDL_LIFECYCLE;
}

export function getReverseTransportSteps(): ReverseTransportStep[] {
  return REVERSE_CHOLESTEROL_TRANSPORT;
}

export function getAtherosclerosisStages(): AtherosclerosisStage[] {
  return ATHEROSCLEROSIS_STAGES;
}

export function getLipidDrugMechanisms(): LipidDrugMechanism[] {
  return LIPID_DRUG_MECHANISMS;
}

export function getLabLipidCorrelations(): LabLipidCorrelation[] {
  return LAB_LIPID_CORRELATIONS;
}

export function getLipidMetabolismStatistics(): LipidMetabolismStatistics {
  return LIPID_METABOLISM_STATISTICS;
}

export function getLipoproteinExplanation(
  id: string,
  level: 1 | 2 | 3 | 4 | 5
): string | undefined {
  const lp = lipoproteins.get(id);
  if (!lp) return undefined;
  return lp.explanations[`level${level}`];
}

export function searchLipidMetabolism(query: string): {
  lipoproteins: LipoproteinParticle[];
  drugs: LipidDrugMechanism[];
} {
  const q = query.toLowerCase();
  return {
    lipoproteins: Array.from(lipoproteins.values()).filter(
      (l) =>
        l.name.toLowerCase().includes(q) ||
        l.function.toLowerCase().includes(q)
    ),
    drugs: LIPID_DRUG_MECHANISMS.filter(
      (d) =>
        d.drug.toLowerCase().includes(q) ||
        d.target.toLowerCase().includes(q)
    ),
  };
}
