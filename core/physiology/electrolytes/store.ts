/**
 * Electrolyte and Fluid Balance Data Store
 *
 * Comprehensive data for nephron electrolyte handling, hormonal regulation,
 * acid-base balance, and clinical correlations with 5-level explanations.
 */

import type {
  NephronSegment,
  FluidHormone,
  AldosteroneMechanismStep,
  ADHMechanismStep,
  CalciumRegulationAxis,
  AcidBaseConcept,
  AcidBaseDisorder,
  ElectrolyteDisorder,
  LabElectrolyteCorrelation,
  FluidCompartment,
  ElectrolyteStatistics,
} from './types';

/**
 * Nephron segments with electrolyte handling
 */
export const NEPHRON_SEGMENTS = new Map<string, NephronSegment>([
  [
    'glomerulus',
    {
      id: 'glomerulus',
      name: 'Glomerulus',
      type: 'glomerulus',
      location: 'Renal cortex, Bowman\'s capsule',
      permeability: {
        water: 'high',
        sodium: 'high',
        urea: 'high',
      },
      transporters: [],
      reabsorption: [],
      secretion: [],
      regulation: ['Afferent/efferent arteriole tone', 'GFR autoregulation', 'Tubuloglomerular feedback'],
      osmolarity: '300 mOsm/kg (iso-osmotic)',
      clinicalNote: 'GFR ~125 mL/min filters 180L/day; only 1-2L becomes urine',
      explanations: {
        level1: 'The glomerulus is like a coffee filter in your kidney that separates waste from your blood.',
        level2: 'Blood is filtered in the glomerulus, allowing water and small molecules through while keeping blood cells and proteins.',
        level3: 'The glomerulus performs ultrafiltration based on size and charge, producing 180L/day of filtrate that is iso-osmotic with plasma.',
        level4: 'Glomerular filtration is driven by Starling forces across the fenestrated endothelium, GBM, and podocyte slit diaphragms, with autoregulation maintaining constant GFR.',
        level5: 'Ultrafiltration coefficient (Kf) is determined by hydraulic conductivity and surface area. Net filtration pressure = (PGC - PBS) - (πGC - πBS). Mesangial contraction and TGF via macula densa regulate GFR.',
      },
    },
  ],
  [
    'proximal-convoluted-tubule',
    {
      id: 'proximal-convoluted-tubule',
      name: 'Proximal Convoluted Tubule',
      type: 'proximal-convoluted-tubule',
      location: 'Renal cortex',
      permeability: {
        water: 'high',
        sodium: 'high',
        urea: 'moderate',
      },
      transporters: [
        {
          name: 'Na+/K+-ATPase',
          type: 'pump',
          membrane: 'basolateral',
          ions: ['Na+', 'K+'],
          direction: 'reabsorption',
          energetics: 'active',
          regulation: ['Aldosterone', 'Thyroid hormone'],
        },
        {
          name: 'Na+/H+ exchanger (NHE3)',
          type: 'exchanger',
          membrane: 'apical',
          ions: ['Na+', 'H+'],
          direction: 'reabsorption',
          energetics: 'secondary-active',
          regulation: ['Angiotensin II stimulates', 'Dopamine inhibits'],
          drugTarget: 'Tenapanor (NHE3 inhibitor)',
        },
        {
          name: 'SGLT2',
          type: 'cotransporter',
          membrane: 'apical',
          ions: ['Na+', 'glucose'],
          direction: 'reabsorption',
          energetics: 'secondary-active',
          drugTarget: 'SGLT2 inhibitors (empagliflozin, dapagliflozin)',
        },
        {
          name: 'Na+-phosphate cotransporter',
          type: 'cotransporter',
          membrane: 'apical',
          ions: ['Na+', 'PO4'],
          direction: 'reabsorption',
          energetics: 'secondary-active',
          regulation: ['PTH inhibits (promotes phosphate wasting)'],
        },
        {
          name: 'Aquaporin-1',
          type: 'aquaporin',
          membrane: 'both',
          ions: ['H2O'],
          direction: 'reabsorption',
          energetics: 'passive',
        },
      ],
      reabsorption: [
        { electrolyte: 'sodium', percentage: '65-70%', mechanism: 'Na+/H+ exchange, cotransport', regulation: ['Angiotensin II', 'Sympathetic tone'] },
        { electrolyte: 'potassium', percentage: '65%', mechanism: 'Paracellular, solvent drag', regulation: ['Flow-dependent'] },
        { electrolyte: 'bicarbonate', percentage: '80-90%', mechanism: 'H+ secretion converts to CO2', regulation: ['Acid-base status'] },
        { electrolyte: 'calcium', percentage: '60-70%', mechanism: 'Paracellular, passive', regulation: ['Sodium reabsorption'] },
        { electrolyte: 'phosphate', percentage: '70-80%', mechanism: 'Na+-phosphate cotransport', regulation: ['PTH inhibits'] },
        { electrolyte: 'chloride', percentage: '65%', mechanism: 'Paracellular, late segment', regulation: ['Follows sodium'] },
      ],
      secretion: [],
      regulation: ['Angiotensin II enhances reabsorption', 'Glomerulotubular balance'],
      osmolarity: '300 mOsm/kg (iso-osmotic throughout)',
      clinicalNote: 'SGLT2 inhibitors cause glucosuria and natriuresis here',
      explanations: {
        level1: 'This tube reabsorbs most of the good stuff your body needs - water, salt, sugar, and vitamins.',
        level2: 'The proximal tubule reabsorbs about 65% of filtered sodium and water, plus all glucose and amino acids.',
        level3: 'Bulk reabsorption occurs via Na+/K+-ATPase driving secondary active transport. SGLT2 reabsorbs glucose. Remains iso-osmotic.',
        level4: 'NHE3 mediates apical Na+ entry coupled to H+ secretion. Carbonic anhydrase facilitates HCO3- reabsorption. Angiotensin II upregulates transport.',
        level5: 'Glomerulotubular balance maintains fractional reabsorption constant despite GFR changes. Peritubular capillary Starling forces modulate reabsorption. Cl- reabsorption increases along the tubule as HCO3- decreases.',
      },
    },
  ],
  [
    'thick-ascending-limb',
    {
      id: 'thick-ascending-limb',
      name: 'Thick Ascending Limb',
      type: 'thick-ascending-limb',
      location: 'Outer medulla to cortex',
      permeability: {
        water: 'impermeable',
        sodium: 'high',
        urea: 'impermeable',
      },
      transporters: [
        {
          name: 'NKCC2 (Na-K-2Cl cotransporter)',
          type: 'cotransporter',
          membrane: 'apical',
          ions: ['Na+', 'K+', 'Cl-', 'Cl-'],
          direction: 'reabsorption',
          energetics: 'secondary-active',
          regulation: ['ADH enhances'],
          drugTarget: 'Loop diuretics (furosemide, bumetanide)',
        },
        {
          name: 'ROMK channel',
          type: 'channel',
          membrane: 'apical',
          ions: ['K+'],
          direction: 'secretion',
          energetics: 'passive',
          regulation: ['K+ recycling for NKCC2 function'],
        },
        {
          name: 'Na+/K+-ATPase',
          type: 'pump',
          membrane: 'basolateral',
          ions: ['Na+', 'K+'],
          direction: 'reabsorption',
          energetics: 'active',
        },
        {
          name: 'ClC-Kb channel',
          type: 'channel',
          membrane: 'basolateral',
          ions: ['Cl-'],
          direction: 'reabsorption',
          energetics: 'passive',
        },
      ],
      reabsorption: [
        { electrolyte: 'sodium', percentage: '25-30%', mechanism: 'NKCC2 cotransporter', regulation: ['Loop diuretics block'] },
        { electrolyte: 'potassium', percentage: '25%', mechanism: 'NKCC2 + paracellular', regulation: ['ROMK recycles K+'] },
        { electrolyte: 'calcium', percentage: '20%', mechanism: 'Paracellular (lumen-positive voltage)', regulation: ['Loop diuretics decrease'] },
        { electrolyte: 'magnesium', percentage: '60-70%', mechanism: 'Paracellular via claudin-16', regulation: ['Loop diuretics decrease'] },
        { electrolyte: 'chloride', percentage: '25%', mechanism: 'NKCC2 + ClC-Kb', regulation: ['Follows sodium'] },
      ],
      secretion: [],
      regulation: ['ADH increases NKCC2', 'Prostaglandins inhibit', 'Ca-sensing receptor'],
      osmolarity: 'Decreases to ~100 mOsm/kg (dilution segment)',
      clinicalNote: 'Loop diuretics block NKCC2 causing significant natriuresis, kaliuresis, and Ca/Mg wasting',
      explanations: {
        level1: 'This part of the kidney removes salt but keeps water in, making urine more dilute.',
        level2: 'The thick ascending limb reabsorbs sodium and chloride without water, creating dilute urine and a concentrated medulla.',
        level3: 'NKCC2 cotransporter mediates Na-K-2Cl reabsorption. Water impermeability generates dilute tubular fluid and maintains medullary gradient.',
        level4: 'Lumen-positive voltage from K+ recycling drives paracellular Ca2+ and Mg2+ reabsorption. This is the diluting segment crucial for urine concentration/dilution.',
        level5: 'Loop diuretics abolish lumen-positive potential, causing hypocalciuria and hypomagnesemia. Bartter syndrome mutations affect NKCC2, ROMK, or ClC-Kb. Ca-sensing receptor activation inhibits NKCC2.',
      },
    },
  ],
  [
    'distal-convoluted-tubule',
    {
      id: 'distal-convoluted-tubule',
      name: 'Distal Convoluted Tubule',
      type: 'distal-convoluted-tubule',
      location: 'Renal cortex',
      permeability: {
        water: 'impermeable',
        sodium: 'moderate',
        urea: 'impermeable',
      },
      transporters: [
        {
          name: 'NCC (Na-Cl cotransporter)',
          type: 'cotransporter',
          membrane: 'apical',
          ions: ['Na+', 'Cl-'],
          direction: 'reabsorption',
          energetics: 'secondary-active',
          regulation: ['WNK kinases', 'Aldosterone'],
          drugTarget: 'Thiazide diuretics (hydrochlorothiazide)',
        },
        {
          name: 'TRPV5 channel',
          type: 'channel',
          membrane: 'apical',
          ions: ['Ca2+'],
          direction: 'reabsorption',
          energetics: 'passive',
          regulation: ['PTH stimulates', 'Vitamin D upregulates'],
        },
        {
          name: 'Na+/K+-ATPase',
          type: 'pump',
          membrane: 'basolateral',
          ions: ['Na+', 'K+'],
          direction: 'reabsorption',
          energetics: 'active',
        },
        {
          name: 'NCX1 (Na/Ca exchanger)',
          type: 'exchanger',
          membrane: 'basolateral',
          ions: ['Na+', 'Ca2+'],
          direction: 'reabsorption',
          energetics: 'secondary-active',
        },
        {
          name: 'Calbindin-D28k',
          type: 'channel',
          membrane: 'both',
          ions: ['Ca2+'],
          direction: 'reabsorption',
          energetics: 'passive',
          regulation: ['Vitamin D induces expression'],
        },
      ],
      reabsorption: [
        { electrolyte: 'sodium', percentage: '5-7%', mechanism: 'NCC cotransporter', regulation: ['Thiazides block', 'Aldosterone enhances'] },
        { electrolyte: 'chloride', percentage: '5%', mechanism: 'NCC cotransporter', regulation: ['Follows sodium'] },
        { electrolyte: 'calcium', percentage: '5-10%', mechanism: 'TRPV5 → calbindin → NCX1', regulation: ['PTH', 'Vitamin D', 'Thiazides enhance'] },
      ],
      secretion: [],
      regulation: ['Aldosterone', 'PTH', 'Vitamin D'],
      osmolarity: '~100 mOsm/kg (still dilute)',
      clinicalNote: 'Thiazides cause hypocalciuria (opposite of loop diuretics) - useful in hypercalciuric nephrolithiasis',
      explanations: {
        level1: 'This segment fine-tunes how much salt and calcium your body keeps.',
        level2: 'The distal tubule adjusts sodium reabsorption with thiazide-sensitive transporters and is important for calcium balance.',
        level3: 'NCC reabsorbs Na+ and Cl- (thiazide-sensitive). Active calcium reabsorption via TRPV5 is regulated by PTH and vitamin D.',
        level4: 'Transcellular Ca2+ transport: TRPV5 entry → calbindin buffering → NCX1 exit. PTH increases TRPV5, vitamin D increases calbindin. WNK-SPAK pathway regulates NCC.',
        level5: 'Gitelman syndrome: NCC mutations cause hypokalemic alkalosis with hypocalciuria and hypomagnesemia. Thiazides paradoxically reduce urinary Ca2+ by enhancing proximal reabsorption via volume contraction.',
      },
    },
  ],
  [
    'cortical-collecting-duct',
    {
      id: 'cortical-collecting-duct',
      name: 'Cortical Collecting Duct',
      type: 'cortical-collecting-duct',
      location: 'Renal cortex',
      permeability: {
        water: 'variable',
        sodium: 'low',
        urea: 'low',
      },
      transporters: [
        {
          name: 'ENaC (Epithelial Na Channel)',
          type: 'channel',
          membrane: 'apical',
          ions: ['Na+'],
          direction: 'reabsorption',
          energetics: 'passive',
          regulation: ['Aldosterone upregulates', 'ANP downregulates'],
          drugTarget: 'Amiloride, triamterene',
        },
        {
          name: 'ROMK channel',
          type: 'channel',
          membrane: 'apical',
          ions: ['K+'],
          direction: 'secretion',
          energetics: 'passive',
          regulation: ['Aldosterone upregulates', 'Flow-dependent'],
        },
        {
          name: 'BK channel',
          type: 'channel',
          membrane: 'apical',
          ions: ['K+'],
          direction: 'secretion',
          energetics: 'passive',
          regulation: ['Flow-activated'],
        },
        {
          name: 'Na+/K+-ATPase',
          type: 'pump',
          membrane: 'basolateral',
          ions: ['Na+', 'K+'],
          direction: 'reabsorption',
          energetics: 'active',
          regulation: ['Aldosterone'],
        },
        {
          name: 'Aquaporin-2',
          type: 'aquaporin',
          membrane: 'apical',
          ions: ['H2O'],
          direction: 'reabsorption',
          energetics: 'passive',
          regulation: ['ADH inserts into membrane'],
          drugTarget: 'V2 receptor antagonists (tolvaptan)',
        },
        {
          name: 'H+-ATPase',
          type: 'pump',
          membrane: 'apical',
          ions: ['H+'],
          direction: 'secretion',
          energetics: 'active',
          regulation: ['Aldosterone (type A intercalated cells)'],
        },
      ],
      reabsorption: [
        { electrolyte: 'sodium', percentage: '1-3%', mechanism: 'ENaC channel', regulation: ['Aldosterone', 'ANP opposes'] },
      ],
      secretion: [
        { electrolyte: 'potassium', percentage: 'Variable (10-50%)', mechanism: 'ROMK and BK channels', regulation: ['Aldosterone', 'Flow rate', 'Serum K+'] },
      ],
      regulation: ['Aldosterone (principal cells)', 'ADH (principal cells)', 'Acid-base (intercalated cells)'],
      osmolarity: 'Variable depending on ADH',
      clinicalNote: 'Aldosterone antagonists (spironolactone) cause K+-sparing diuresis',
      explanations: {
        level1: 'This is where hormones decide how much salt and water you keep or lose.',
        level2: 'The collecting duct fine-tunes sodium, potassium, and water balance under hormonal control.',
        level3: 'Principal cells: ENaC reabsorbs Na+ (aldosterone-regulated), ROMK secretes K+. ADH inserts AQP2 for water reabsorption.',
        level4: 'Aldosterone: binds MR → SGK1 activation → ENaC/ROMK upregulation. Type A intercalated cells secrete H+ via H+-ATPase and H+/K+-ATPase.',
        level5: 'ENaC creates lumen-negative potential driving K+ secretion. Liddle syndrome: gain-of-function ENaC causes hypertension and hypokalemia. Pseudohypoaldosteronism: ENaC mutations cause salt-wasting.',
      },
    },
  ],
  [
    'medullary-collecting-duct',
    {
      id: 'medullary-collecting-duct',
      name: 'Medullary Collecting Duct',
      type: 'medullary-collecting-duct',
      location: 'Renal medulla to papilla',
      permeability: {
        water: 'variable',
        sodium: 'low',
        urea: 'high',
      },
      transporters: [
        {
          name: 'Aquaporin-2',
          type: 'aquaporin',
          membrane: 'apical',
          ions: ['H2O'],
          direction: 'reabsorption',
          energetics: 'passive',
          regulation: ['ADH'],
        },
        {
          name: 'Aquaporin-3/4',
          type: 'aquaporin',
          membrane: 'basolateral',
          ions: ['H2O'],
          direction: 'reabsorption',
          energetics: 'passive',
        },
        {
          name: 'UT-A1 (urea transporter)',
          type: 'channel',
          membrane: 'apical',
          ions: ['urea'],
          direction: 'reabsorption',
          energetics: 'passive',
          regulation: ['ADH phosphorylates'],
        },
        {
          name: 'UT-A3',
          type: 'channel',
          membrane: 'basolateral',
          ions: ['urea'],
          direction: 'reabsorption',
          energetics: 'passive',
        },
      ],
      reabsorption: [
        { electrolyte: 'bicarbonate', percentage: 'Remaining', mechanism: 'H+ secretion', regulation: ['Acid-base status'] },
      ],
      secretion: [],
      regulation: ['ADH crucial for water permeability', 'Inner medullary collecting duct permeable to urea with ADH'],
      osmolarity: 'Up to 1200 mOsm/kg in antidiuresis',
      clinicalNote: 'Final site of urine concentration; diabetes insipidus results from ADH deficiency or resistance',
      explanations: {
        level1: 'This is the last stop where your kidneys decide how concentrated your urine will be.',
        level2: 'The medullary collecting duct concentrates urine by reabsorbing water in response to ADH.',
        level3: 'ADH-regulated AQP2 allows water reabsorption into hypertonic medullary interstitium. Urea recycling via UT-A transporters maintains medullary gradient.',
        level4: 'Water follows osmotic gradient (up to 1200 mOsm/kg). Urea enters interstitium, diffuses into thin limbs, is trapped by urea recycling to maintain countercurrent multiplier.',
        level5: 'ADH activates V2R → cAMP → PKA → AQP2 phosphorylation and trafficking to apical membrane. NDI mutations: V2R or AQP2. Lithium causes NDI via GSK3β inhibition of AQP2 expression.',
      },
    },
  ],
]);

/**
 * Aldosterone mechanism steps
 */
export const ALDOSTERONE_MECHANISM_STEPS: AldosteroneMechanismStep[] = [
  {
    stepNumber: 1,
    name: 'Stimulus Recognition',
    location: 'Juxtaglomerular apparatus / Adrenal cortex',
    description: 'Decreased renal perfusion, hyponatremia, or hyperkalemia triggers aldosterone release',
    molecules: ['Renin', 'Angiotensin II', 'K+', 'ACTH'],
    effect: 'Initiates aldosterone synthesis',
  },
  {
    stepNumber: 2,
    name: 'Aldosterone Synthesis',
    location: 'Zona glomerulosa of adrenal cortex',
    description: 'Angiotensin II and K+ stimulate aldosterone synthase (CYP11B2)',
    molecules: ['Cholesterol', 'Pregnenolone', 'Corticosterone', 'Aldosterone synthase'],
    effect: 'Aldosterone released into circulation',
  },
  {
    stepNumber: 3,
    name: 'Receptor Binding',
    location: 'Principal cells of collecting duct',
    description: 'Aldosterone crosses cell membrane and binds mineralocorticoid receptor (MR)',
    molecules: ['Aldosterone', 'Mineralocorticoid receptor', '11β-HSD2'],
    effect: 'MR activation (11β-HSD2 prevents cortisol from activating MR)',
  },
  {
    stepNumber: 4,
    name: 'Nuclear Translocation',
    location: 'Principal cell nucleus',
    description: 'Aldosterone-MR complex translocates to nucleus and acts as transcription factor',
    molecules: ['MR-aldosterone complex', 'HRE (hormone response elements)'],
    effect: 'Gene transcription activation',
  },
  {
    stepNumber: 5,
    name: 'Protein Synthesis',
    location: 'Principal cell cytoplasm',
    description: 'Increased synthesis of ENaC subunits, Na+/K+-ATPase, and ROMK channels',
    molecules: ['SGK1', 'ENaC (α, β, γ subunits)', 'Na+/K+-ATPase', 'ROMK'],
    effect: 'Increased transporter abundance',
  },
  {
    stepNumber: 6,
    name: 'Sodium Reabsorption',
    location: 'Apical membrane of principal cells',
    description: 'ENaC channels reabsorb Na+ from tubular lumen',
    molecules: ['ENaC', 'Na+'],
    effect: 'Na+ retention, lumen-negative voltage',
  },
  {
    stepNumber: 7,
    name: 'Potassium Secretion',
    location: 'Apical membrane of principal cells',
    description: 'Lumen-negative voltage drives K+ secretion through ROMK and BK channels',
    molecules: ['ROMK', 'BK channel', 'K+'],
    effect: 'K+ excretion, maintaining K+ balance',
  },
  {
    stepNumber: 8,
    name: 'Net Effect',
    location: 'Systemic',
    description: 'Na+ and water retention increases blood volume; K+ excretion prevents hyperkalemia',
    molecules: ['Na+', 'H2O', 'K+'],
    effect: 'Increased blood pressure, decreased serum K+',
  },
];

/**
 * ADH (Vasopressin) mechanism steps
 */
export const ADH_MECHANISM_STEPS: ADHMechanismStep[] = [
  {
    stepNumber: 1,
    name: 'Osmotic Stimulus',
    location: 'Hypothalamus (osmoreceptors)',
    description: 'Increased plasma osmolality (>285 mOsm/kg) detected by TRPV1 channels in osmoreceptors',
    molecules: ['TRPV1', 'Plasma osmolality'],
    effect: 'Osmoreceptor depolarization',
  },
  {
    stepNumber: 2,
    name: 'Volume Stimulus',
    location: 'Left atrium, carotid sinus, aortic arch',
    description: 'Decreased blood volume/pressure detected by baroreceptors',
    molecules: ['Stretch receptors', 'Baroreceptors'],
    effect: 'Reduced inhibitory input to hypothalamus',
  },
  {
    stepNumber: 3,
    name: 'ADH Synthesis',
    location: 'Hypothalamic magnocellular neurons (SON, PVN)',
    description: 'ADH synthesized as preprohormone, processed during axonal transport',
    molecules: ['Preprovasopressin', 'Neurophysin II'],
    effect: 'ADH and neurophysin packaged in vesicles',
  },
  {
    stepNumber: 4,
    name: 'ADH Release',
    location: 'Posterior pituitary (neurohypophysis)',
    description: 'Action potentials trigger Ca2+-dependent exocytosis of ADH',
    molecules: ['ADH (AVP)', 'Ca2+', 'SNARE proteins'],
    effect: 'ADH released into systemic circulation',
  },
  {
    stepNumber: 5,
    name: 'V2 Receptor Binding',
    location: 'Basolateral membrane of collecting duct principal cells',
    description: 'ADH binds V2 receptor (Gs-coupled GPCR)',
    molecules: ['ADH', 'V2 receptor', 'Gs protein'],
    effect: 'Adenylyl cyclase activation',
  },
  {
    stepNumber: 6,
    name: 'cAMP Cascade',
    location: 'Principal cell cytoplasm',
    description: 'cAMP activates PKA, which phosphorylates AQP2 and regulatory proteins',
    molecules: ['cAMP', 'PKA', 'AQP2', 'Ser256 phosphorylation'],
    effect: 'AQP2 phosphorylation triggers trafficking',
  },
  {
    stepNumber: 7,
    name: 'AQP2 Insertion',
    location: 'Apical membrane of principal cells',
    description: 'Phosphorylated AQP2 vesicles fuse with apical membrane via exocytosis',
    molecules: ['AQP2 vesicles', 'SNARE complex', 'Actin cytoskeleton'],
    effect: 'Increased water permeability',
  },
  {
    stepNumber: 8,
    name: 'Water Reabsorption',
    location: 'Collecting duct → medullary interstitium → vasa recta',
    description: 'Water follows osmotic gradient through AQP2 (apical) and AQP3/4 (basolateral)',
    molecules: ['AQP2', 'AQP3', 'AQP4', 'H2O'],
    effect: 'Concentrated urine, dilute plasma',
  },
  {
    stepNumber: 9,
    name: 'Urea Contribution',
    location: 'Inner medullary collecting duct',
    description: 'ADH also phosphorylates UT-A1, enhancing urea permeability and medullary gradient',
    molecules: ['UT-A1', 'Urea'],
    effect: 'Maintained medullary hypertonicity',
  },
];

/**
 * Fluid-regulating hormones
 */
export const FLUID_HORMONES = new Map<string, FluidHormone>([
  [
    'aldosterone',
    {
      id: 'aldosterone',
      name: 'Aldosterone',
      type: 'aldosterone',
      source: 'Zona glomerulosa of adrenal cortex',
      stimulus: ['Angiotensin II', 'Hyperkalemia', 'ACTH (minor)'],
      inhibitors: ['ANP', 'Dopamine', 'Hypokalemia'],
      targetOrgan: ['Kidney (collecting duct)', 'Colon', 'Salivary glands', 'Sweat glands'],
      targetCells: ['Principal cells', 'Intercalated cells'],
      receptorType: 'Mineralocorticoid receptor (MR) - nuclear receptor',
      mechanism: [
        'Binds cytoplasmic MR → nuclear translocation',
        'Transcriptional regulation (takes hours)',
        'Increases ENaC, Na+/K+-ATPase, ROMK expression',
        'SGK1 reduces ENaC degradation',
      ],
      effects: [
        { target: 'Collecting duct', action: 'Increases ENaC-mediated Na+ reabsorption', netEffect: 'Na+ retention' },
        { target: 'Collecting duct', action: 'Increases ROMK K+ secretion', netEffect: 'K+ excretion' },
        { target: 'Intercalated cells', action: 'Enhances H+-ATPase', netEffect: 'H+ secretion (alkalosis if excess)' },
        { target: 'Vascular', action: 'Promotes fibrosis long-term', netEffect: 'Cardiac/vascular remodeling' },
      ],
      feedback: ['Increased BP suppresses renin', 'Corrected K+ removes stimulus'],
      halfLife: '15-20 minutes',
      clinicalUse: 'Fludrocortisone for adrenal insufficiency; spironolactone/eplerenone as MR antagonists',
      explanations: {
        level1: 'Aldosterone tells your kidneys to hold onto salt and release potassium.',
        level2: 'Aldosterone is made by the adrenal glands and acts on the kidney to retain sodium and excrete potassium.',
        level3: 'Aldosterone binds mineralocorticoid receptors in principal cells, increasing ENaC and ROMK expression to enhance Na+ reabsorption and K+ secretion.',
        level4: 'MR activation induces SGK1, which phosphorylates Nedd4-2 to prevent ENaC ubiquitination. 11β-HSD2 inactivates cortisol to ensure aldosterone specificity.',
        level5: 'Primary aldosteronism (Conn syndrome) causes resistant hypertension with hypokalemia. MR antagonists reduce mortality in heart failure by blocking aldosterone-mediated cardiac fibrosis.',
      },
    },
  ],
  [
    'ADH',
    {
      id: 'ADH',
      name: 'Antidiuretic Hormone (Vasopressin)',
      type: 'ADH',
      source: 'Hypothalamus (SON, PVN) → posterior pituitary release',
      stimulus: ['Hyperosmolality (>285 mOsm/kg)', 'Hypovolemia', 'Hypotension', 'Nausea', 'Pain', 'Stress'],
      inhibitors: ['Hypo-osmolality', 'Alcohol', 'ANP', 'Cold'],
      targetOrgan: ['Kidney (collecting duct)', 'Vascular smooth muscle', 'Anterior pituitary'],
      targetCells: ['Principal cells', 'Vascular smooth muscle cells'],
      receptorType: 'V2R (kidney, Gs-coupled), V1aR (vessels, Gq-coupled), V1bR (pituitary)',
      mechanism: [
        'V2R → Gs → adenylyl cyclase → cAMP → PKA',
        'PKA phosphorylates AQP2 at Ser256',
        'AQP2 vesicles translocate to apical membrane',
        'V1aR causes vasoconstriction (high doses)',
      ],
      effects: [
        { target: 'Collecting duct', action: 'Inserts AQP2 channels', netEffect: 'Water reabsorption, concentrated urine' },
        { target: 'Inner medulla', action: 'Activates UT-A1 urea transporter', netEffect: 'Maintains medullary gradient' },
        { target: 'Blood vessels (V1a)', action: 'Vasoconstriction', netEffect: 'Increased blood pressure' },
        { target: 'Thick ascending limb', action: 'Enhances NKCC2', netEffect: 'Increased medullary gradient' },
      ],
      feedback: ['Restored osmolality and volume inhibit release'],
      halfLife: '10-20 minutes',
      clinicalUse: 'Desmopressin for central DI, nocturnal enuresis; tolvaptan (V2 antagonist) for SIADH/hyponatremia',
      explanations: {
        level1: 'ADH tells your kidneys to save water when you\'re dehydrated.',
        level2: 'ADH is released when you\'re dehydrated, causing the kidney to reabsorb water and produce concentrated urine.',
        level3: 'ADH binds V2 receptors on collecting duct cells, triggering insertion of aquaporin-2 water channels into the apical membrane.',
        level4: 'V2R-Gs-cAMP-PKA cascade phosphorylates AQP2 at Ser256, enabling vesicle trafficking and membrane fusion. Chronic ADH also increases AQP2 gene expression.',
        level5: 'Central DI: hypothalamic ADH deficiency. Nephrogenic DI: V2R or AQP2 mutations, lithium toxicity. SIADH: inappropriate ADH causes dilutional hyponatremia despite euvolemia.',
      },
    },
  ],
  [
    'PTH',
    {
      id: 'PTH',
      name: 'Parathyroid Hormone',
      type: 'PTH',
      source: 'Chief cells of parathyroid glands',
      stimulus: ['Hypocalcemia', 'Hyperphosphatemia', 'Low vitamin D'],
      inhibitors: ['Hypercalcemia (via CaSR)', 'Calcitriol', 'Hypermagnesemia (severe)'],
      targetOrgan: ['Bone', 'Kidney', 'Intestine (indirect via vitamin D)'],
      targetCells: ['Osteoblasts → osteoclasts', 'Proximal and distal tubule cells'],
      receptorType: 'PTH1R (Gs and Gq-coupled GPCR)',
      mechanism: [
        'Kidney: inhibits Na+-phosphate cotransporter → phosphaturia',
        'Kidney: stimulates 1α-hydroxylase → calcitriol synthesis',
        'Kidney: increases Ca2+ reabsorption in DCT (TRPV5)',
        'Bone: stimulates osteoclast activity via osteoblast RANKL',
      ],
      effects: [
        { target: 'Proximal tubule', action: 'Inhibits phosphate reabsorption', netEffect: 'Phosphaturia' },
        { target: 'Proximal tubule', action: 'Stimulates 1α-hydroxylase', netEffect: 'Increased calcitriol' },
        { target: 'Distal tubule', action: 'Increases TRPV5 Ca2+ channels', netEffect: 'Ca2+ retention' },
        { target: 'Bone', action: 'RANKL-mediated osteoclast activation', netEffect: 'Ca2+ and PO4 release' },
      ],
      feedback: ['Calcium binds CaSR to suppress PTH', 'Calcitriol suppresses PTH gene'],
      halfLife: '2-4 minutes (intact PTH)',
      clinicalUse: 'Teriparatide (PTH analog) for osteoporosis; PTH for hypoparathyroidism',
      explanations: {
        level1: 'PTH raises blood calcium by telling bones to release calcium and kidneys to keep it.',
        level2: 'PTH is released when calcium is low. It increases calcium by acting on bone, kidney, and indirectly on intestine.',
        level3: 'PTH stimulates bone resorption, renal calcium reabsorption, phosphate excretion, and vitamin D activation, all raising serum calcium.',
        level4: 'PTH1R couples to Gs (cAMP) and Gq (IP3/Ca2+). In bone, PTH induces RANKL on osteoblasts to activate osteoclast-mediated resorption. Phosphaturia prevents Ca-PO4 precipitation.',
        level5: 'Primary hyperparathyroidism: adenoma causes hypercalcemia with inappropriately normal/high PTH. Secondary: CKD causes hypocalcemia → PTH elevation. Pseudohypoparathyroidism: PTH resistance (Gsα mutation).',
      },
    },
  ],
  [
    'calcitonin',
    {
      id: 'calcitonin',
      name: 'Calcitonin',
      type: 'calcitonin',
      source: 'Parafollicular (C) cells of thyroid',
      stimulus: ['Hypercalcemia', 'Gastrin', 'CCK'],
      inhibitors: ['Hypocalcemia'],
      targetOrgan: ['Bone', 'Kidney'],
      targetCells: ['Osteoclasts', 'Renal tubular cells'],
      receptorType: 'Calcitonin receptor (Gs-coupled GPCR)',
      mechanism: [
        'Directly inhibits osteoclast activity',
        'Decreases renal Ca2+ and phosphate reabsorption',
        'Effects relatively minor in humans (PTH dominant)',
      ],
      effects: [
        { target: 'Osteoclasts', action: 'Inhibits bone resorption', netEffect: 'Decreased serum Ca2+' },
        { target: 'Kidney', action: 'Decreases Ca2+ reabsorption', netEffect: 'Calciuria' },
        { target: 'Kidney', action: 'Decreases phosphate reabsorption', netEffect: 'Phosphaturia' },
      ],
      feedback: ['Corrected calcium removes stimulus'],
      halfLife: '5-10 minutes',
      clinicalUse: 'Salmon calcitonin for Paget\'s disease, acute hypercalcemia (limited use); tumor marker for medullary thyroid cancer',
      explanations: {
        level1: 'Calcitonin lowers blood calcium, but it\'s not very important in humans.',
        level2: 'Calcitonin from the thyroid can lower calcium by inhibiting bone breakdown, but its role in humans is minor.',
        level3: 'Calcitonin directly inhibits osteoclasts and increases renal calcium excretion. Its physiological importance in adult humans is limited.',
        level4: 'Calcitonin receptor activation in osteoclasts disrupts ruffled border formation and reduces acid secretion. Clinically used for acute hypercalcemia and Paget\'s disease.',
        level5: 'Loss of calcitonin (thyroidectomy) doesn\'t cause hypercalcemia, confirming its minor role. Elevated calcitonin is a sensitive marker for medullary thyroid carcinoma (C-cell origin).',
      },
    },
  ],
  [
    'vitamin-D',
    {
      id: 'vitamin-D',
      name: 'Vitamin D (Calcitriol)',
      type: 'vitamin-D',
      source: 'Skin (cholecalciferol) → liver (25-OH) → kidney (1,25-OH / calcitriol)',
      stimulus: ['PTH stimulates 1α-hydroxylase', 'Hypophosphatemia', 'Hypocalcemia'],
      inhibitors: ['FGF-23', 'Hypercalcemia', 'Hyperphosphatemia (via FGF-23)'],
      targetOrgan: ['Intestine', 'Bone', 'Kidney', 'Parathyroid'],
      targetCells: ['Enterocytes', 'Osteoblasts', 'Renal tubular cells'],
      receptorType: 'Vitamin D receptor (VDR) - nuclear receptor',
      mechanism: [
        'Intestine: increases Ca2+ and PO4 absorption (TRPV6, calbindin)',
        'Bone: promotes mineralization, also enables PTH-induced resorption',
        'Kidney: increases Ca2+ reabsorption',
        'Parathyroid: suppresses PTH gene transcription',
      ],
      effects: [
        { target: 'Intestine', action: 'Increases Ca2+ absorption via TRPV6, calbindin', netEffect: 'Increased serum Ca2+' },
        { target: 'Intestine', action: 'Increases phosphate absorption', netEffect: 'Increased serum PO4' },
        { target: 'Bone', action: 'Promotes mineralization and resorption', netEffect: 'Bone turnover' },
        { target: 'Parathyroid', action: 'Suppresses PTH synthesis', netEffect: 'Negative feedback' },
      ],
      feedback: ['Calcitriol inhibits 1α-hydroxylase', 'Induces 24-hydroxylase for inactivation'],
      halfLife: '4-6 hours (calcitriol); weeks (25-OH-D)',
      clinicalUse: 'Calcitriol/analogs for CKD bone disease, hypoparathyroidism; ergocalciferol/cholecalciferol for deficiency',
      explanations: {
        level1: 'Vitamin D helps your body absorb calcium from food.',
        level2: 'Vitamin D is activated in the kidney and increases calcium absorption from the intestine.',
        level3: 'Calcitriol (active vitamin D) increases intestinal calcium and phosphate absorption, supports bone mineralization, and provides negative feedback on PTH.',
        level4: 'PTH stimulates 1α-hydroxylase in proximal tubule to convert 25-OH-D to 1,25-OH-D (calcitriol). VDR-RXR heterodimer activates TRPV6 and calbindin genes.',
        level5: 'CKD: reduced 1α-hydroxylase → secondary hyperparathyroidism → renal osteodystrophy. FGF-23 (from osteocytes) inhibits 1α-hydroxylase and promotes 24-hydroxylase, linking phosphate to vitamin D.',
      },
    },
  ],
  [
    'ANP',
    {
      id: 'ANP',
      name: 'Atrial Natriuretic Peptide',
      type: 'ANP',
      source: 'Atrial cardiomyocytes (released from granules)',
      stimulus: ['Atrial stretch (volume expansion)', 'Endothelin', 'Sympathetic activation'],
      inhibitors: ['Volume depletion'],
      targetOrgan: ['Kidney', 'Adrenal gland', 'Blood vessels', 'Heart'],
      targetCells: ['Collecting duct cells', 'Zona glomerulosa', 'Vascular smooth muscle'],
      receptorType: 'NPR-A (guanylyl cyclase receptor)',
      mechanism: [
        'NPR-A → cGMP → PKG activation',
        'Inhibits ENaC in collecting duct',
        'Inhibits aldosterone and renin release',
        'Causes vasodilation',
      ],
      effects: [
        { target: 'Collecting duct', action: 'Inhibits ENaC Na+ reabsorption', netEffect: 'Natriuresis' },
        { target: 'Adrenal', action: 'Inhibits aldosterone secretion', netEffect: 'Reduced Na+ retention' },
        { target: 'JG cells', action: 'Inhibits renin release', netEffect: 'RAAS suppression' },
        { target: 'Vessels', action: 'Relaxes vascular smooth muscle', netEffect: 'Decreased blood pressure' },
        { target: 'Glomerulus', action: 'Dilates afferent > efferent', netEffect: 'Increased GFR' },
      ],
      feedback: ['Reduced atrial stretch stops release'],
      halfLife: '2-3 minutes',
      clinicalUse: 'Nesiritide (BNP) for acute heart failure (limited use); BNP/NT-proBNP as heart failure biomarkers',
      explanations: {
        level1: 'ANP tells your body to get rid of extra salt and water when your heart is stretched.',
        level2: 'ANP is released when the heart is overfilled, causing the kidney to excrete sodium and water.',
        level3: 'ANP opposes the renin-angiotensin-aldosterone system by causing natriuresis, inhibiting aldosterone, and vasodilation.',
        level4: 'NPR-A receptor has intrinsic guanylyl cyclase activity. cGMP activates PKG which phosphorylates ENaC causing internalization. ANP also increases GFR via afferent dilation.',
        level5: 'Heart failure: elevated BNP/NT-proBNP reflects ventricular stretch. Neprilysin inhibitors (sacubitril) prevent natriuretic peptide degradation, enhancing their beneficial effects.',
      },
    },
  ],
]);

/**
 * Calcium regulation axis (PTH-Vitamin D-Calcitonin)
 */
export const CALCIUM_REGULATION_AXIS: CalciumRegulationAxis = {
  id: 'calcium-pth-vitd',
  name: 'PTH-Vitamin D-Calcitonin Calcium Axis',
  organs: ['Parathyroid glands', 'Kidney', 'Bone', 'Intestine', 'Thyroid (C-cells)'],
  hormones: ['PTH', 'Calcitriol (1,25-OH-D)', 'Calcitonin'],
  steps: [
    {
      stepNumber: 1,
      trigger: 'Serum Ca2+ drops below 8.5 mg/dL',
      response: 'Calcium-sensing receptor (CaSR) on parathyroid chief cells detects hypocalcemia',
      effector: 'PTH release increases within seconds',
      outcome: 'PTH secretion rises',
    },
    {
      stepNumber: 2,
      trigger: 'PTH reaches bone',
      response: 'PTH binds PTH1R on osteoblasts, inducing RANKL',
      effector: 'RANKL activates osteoclasts via RANK',
      outcome: 'Bone resorption releases Ca2+ and PO4',
    },
    {
      stepNumber: 3,
      trigger: 'PTH reaches kidney',
      response: 'PTH1R activation in proximal tubule',
      effector: '1α-hydroxylase converts 25-OH-D to calcitriol',
      outcome: 'Active vitamin D synthesis increases',
    },
    {
      stepNumber: 4,
      trigger: 'PTH reaches distal tubule',
      response: 'PTH1R activation increases TRPV5 expression',
      effector: 'Enhanced transcellular Ca2+ reabsorption',
      outcome: 'Reduced urinary Ca2+ loss',
    },
    {
      stepNumber: 5,
      trigger: 'PTH reaches proximal tubule',
      response: 'Inhibits Na+-phosphate cotransporter (NaPi-IIa)',
      effector: 'Phosphaturia',
      outcome: 'Prevents Ca-PO4 precipitation as Ca2+ rises',
    },
    {
      stepNumber: 6,
      trigger: 'Calcitriol reaches intestine',
      response: 'VDR activation induces TRPV6, calbindin, PMCA',
      effector: 'Enhanced transcellular Ca2+ absorption',
      outcome: 'Increased dietary Ca2+ uptake',
    },
    {
      stepNumber: 7,
      trigger: 'Serum Ca2+ normalizes/rises',
      response: 'CaSR activation inhibits PTH release',
      effector: 'Calcitriol also inhibits PTH gene',
      outcome: 'Negative feedback completes the loop',
    },
    {
      stepNumber: 8,
      trigger: 'If Ca2+ rises too high',
      response: 'C-cells release calcitonin',
      effector: 'Inhibits osteoclasts, increases renal Ca2+ excretion',
      outcome: 'Minor role in lowering Ca2+ (humans)',
    },
  ],
  feedbackLoops: [
    'Ca2+ → CaSR → PTH suppression',
    'Calcitriol → VDR on parathyroid → PTH gene suppression',
    'FGF-23 (from bone) → inhibits 1α-hydroxylase, promotes phosphaturia',
    'Phosphate → stimulates FGF-23 → creates P-Ca-D-PTH interplay',
  ],
  disorderExamples: [
    'Primary hyperparathyroidism: adenoma → high Ca2+, high PTH',
    'Secondary hyperparathyroidism: CKD → low Ca2+, high PTH',
    'Hypoparathyroidism: low PTH → low Ca2+, high PO4',
    'Vitamin D deficiency: low calcitriol → low Ca2+, high PTH, rickets/osteomalacia',
  ],
  explanations: {
    level1: 'Your body keeps calcium balanced using hormones from the parathyroid glands and vitamin D.',
    level2: 'PTH raises calcium by releasing it from bone and keeping it in the kidney. Vitamin D helps absorb calcium from food.',
    level3: 'The PTH-vitamin D axis maintains serum calcium through coordinated effects on bone resorption, renal handling, and intestinal absorption.',
    level4: 'CaSR-mediated PTH release triggers bone RANKL-RANK-OPG pathway, renal 1α-hydroxylase activation, and phosphaturic response to prevent Ca-PO4 precipitation.',
    level5: 'FGF-23 from osteocytes integrates phosphate sensing with calcium homeostasis by inhibiting 1α-hydroxylase and promoting 24-hydroxylase, linking skeletal phosphate release to vitamin D metabolism.',
  },
};

/**
 * Acid-base physiology
 */
export const ACID_BASE_CONCEPT: AcidBaseConcept = {
  id: 'acid-base-physiology',
  name: 'Acid-Base Physiology',
  normalValues: {
    pH: '7.35-7.45',
    pCO2: '35-45 mmHg',
    HCO3: '22-26 mEq/L',
    baseExcess: '-2 to +2 mEq/L',
  },
  bufferSystems: [
    {
      name: 'Bicarbonate buffer system',
      components: ['H2CO3', 'HCO3-', 'CO2'],
      location: 'Extracellular fluid (plasma)',
      capacity: 'Largest ECF buffer (~53% of buffering)',
      speed: 'Fast (seconds)',
      equation: 'CO2 + H2O ⇌ H2CO3 ⇌ H+ + HCO3-',
    },
    {
      name: 'Phosphate buffer system',
      components: ['H2PO4-', 'HPO4²-'],
      location: 'Intracellular fluid, urine',
      capacity: 'Important in ICF and renal tubules',
      speed: 'Fast',
      equation: 'H2PO4- ⇌ H+ + HPO4²-',
    },
    {
      name: 'Protein buffer system',
      components: ['Hemoglobin', 'Plasma proteins', 'Intracellular proteins'],
      location: 'Intracellular and plasma',
      capacity: 'Largest total buffering capacity (histidine residues)',
      speed: 'Fast',
    },
    {
      name: 'Bone buffer',
      components: ['CaCO3', 'CaHPO4'],
      location: 'Bone matrix',
      capacity: 'Significant in chronic acidosis',
      speed: 'Slow (hours to days)',
    },
  ],
  regulatoryOrgans: ['Lungs (CO2 excretion)', 'Kidneys (HCO3- regeneration, H+ excretion)'],
  explanations: {
    level1: 'Your body keeps your blood not too acidic and not too basic using your lungs and kidneys.',
    level2: 'Acid-base balance is maintained by buffers, breathing (adjusts CO2), and kidneys (adjust bicarbonate).',
    level3: 'The Henderson-Hasselbalch equation relates pH to the ratio of bicarbonate to carbonic acid. Lungs regulate pCO2 rapidly; kidneys regulate HCO3- slowly.',
    level4: 'Respiratory compensation takes minutes to hours (hyperventilation for acidosis). Renal compensation takes days (increased NH4+ and titratable acid excretion, HCO3- regeneration).',
    level5: 'Renal acid excretion: proximal tubule reclaims filtered HCO3- via H+ secretion and carbonic anhydrase. Collecting duct α-intercalated cells secrete H+ via H+-ATPase and H+/K+-ATPase, generating new HCO3-. NH4+ excretion (glutamine metabolism) is the major adaptive response to chronic acidosis.',
  },
};

/**
 * Acid-base disorders
 */
export const ACID_BASE_DISORDERS = new Map<string, AcidBaseDisorder>([
  [
    'metabolic-acidosis',
    {
      id: 'metabolic-acidosis',
      name: 'Metabolic Acidosis',
      type: 'metabolic-acidosis',
      labFindings: {
        pH: 'low',
        pCO2: 'low',
        HCO3: 'low',
      },
      causes: [
        'Increased acid production: DKA, lactic acidosis, toxic ingestions',
        'Decreased acid excretion: Renal failure, RTA',
        'Bicarbonate loss: Diarrhea, proximal RTA',
        'Anion gap vs non-anion gap (NAGMA)',
      ],
      pathophysiology: 'Primary decrease in HCO3- from acid accumulation or loss',
      compensation: {
        type: 'respiratory',
        mechanism: 'Hyperventilation to lower pCO2',
        expectedResponse: 'pCO2 = 1.5 × HCO3 + 8 (±2) (Winter\'s formula)',
        timeframe: 'Minutes to hours',
      },
      clinicalFeatures: ['Kussmaul breathing', 'Altered mental status', 'Hypotension', 'Hyperkalemia'],
      treatment: ['Treat underlying cause', 'Sodium bicarbonate if pH <7.1', 'Dialysis for toxic ingestions'],
      explanations: {
        level1: 'Your blood becomes too acidic, often from diabetes problems or kidney issues.',
        level2: 'Metabolic acidosis occurs when acids build up or bicarbonate is lost. Your breathing speeds up to blow off CO2.',
        level3: 'Low pH with low bicarbonate triggers respiratory compensation. Calculate anion gap to narrow differential.',
        level4: 'Anion gap = Na - (Cl + HCO3). MUDPILES mnemonic for high AG: Methanol, Uremia, DKA, Propylene glycol, Isoniazid, Lactic acid, Ethylene glycol, Salicylates.',
        level5: 'Delta-delta ratio differentiates pure HAGMA from mixed disorders. RTA types: Type 1 (distal) - impaired H+ secretion; Type 2 (proximal) - impaired HCO3- reabsorption; Type 4 - hypoaldosteronism.',
      },
    },
  ],
  [
    'metabolic-alkalosis',
    {
      id: 'metabolic-alkalosis',
      name: 'Metabolic Alkalosis',
      type: 'metabolic-alkalosis',
      labFindings: {
        pH: 'high',
        pCO2: 'high',
        HCO3: 'high',
      },
      causes: [
        'Chloride-responsive: Vomiting, NG suction, diuretics',
        'Chloride-resistant: Hyperaldosteronism, severe hypokalemia',
        'Alkali administration: Citrate in blood products, antacids',
      ],
      pathophysiology: 'Primary increase in HCO3- from H+ loss, volume contraction, or alkali gain',
      compensation: {
        type: 'respiratory',
        mechanism: 'Hypoventilation to raise pCO2',
        expectedResponse: 'pCO2 rises ~0.7 mmHg per 1 mEq/L rise in HCO3',
        timeframe: 'Hours (limited by hypoxia)',
      },
      clinicalFeatures: ['Muscle weakness', 'Tetany', 'Arrhythmias', 'Confusion'],
      treatment: ['Saline for chloride-responsive', 'K+ repletion', 'Acetazolamide', 'Treat underlying cause'],
      explanations: {
        level1: 'Your blood becomes too basic, often from vomiting or certain medications.',
        level2: 'Metabolic alkalosis happens when you lose acid (vomiting) or gain base. Your breathing slows to keep more CO2.',
        level3: 'High pH with high bicarbonate. Check urine chloride: <20 mEq/L = chloride-responsive (volume depletion), >20 mEq/L = chloride-resistant.',
        level4: 'Maintenance factors: hypokalemia (increases HCO3- reabsorption), volume depletion (increases proximal reabsorption), Cl- depletion (limits distal HCO3- secretion).',
        level5: 'Contraction alkalosis: volume loss concentrates HCO3-. Aldosterone excess: Na+ reabsorption drives H+ and K+ secretion. Pendrin Cl-/HCO3- exchanger in β-intercalated cells normally excretes HCO3- but requires Cl-.',
      },
    },
  ],
  [
    'respiratory-acidosis',
    {
      id: 'respiratory-acidosis',
      name: 'Respiratory Acidosis',
      type: 'respiratory-acidosis',
      labFindings: {
        pH: 'low',
        pCO2: 'high',
        HCO3: 'normal',
      },
      causes: [
        'CNS depression: Opioids, sedatives, stroke',
        'Neuromuscular: Myasthenia, ALS, Guillain-Barré',
        'Airway obstruction: COPD, asthma, OSA',
        'Chest wall: Kyphoscoliosis, obesity hypoventilation',
      ],
      pathophysiology: 'Primary increase in pCO2 due to inadequate alveolar ventilation',
      compensation: {
        type: 'renal',
        mechanism: 'Increased H+ secretion and HCO3- regeneration',
        expectedResponse: 'Acute: HCO3 rises 1 mEq/L per 10 mmHg pCO2 rise. Chronic: 3.5 mEq/L per 10 mmHg',
        timeframe: 'Days (3-5 days for full compensation)',
      },
      clinicalFeatures: ['Dyspnea', 'Confusion', 'Headache', 'Papilledema', 'Asterixis'],
      treatment: ['Improve ventilation', 'Treat underlying cause', 'BiPAP/intubation if severe', 'Avoid oxygen-induced hypercapnia in COPD'],
      explanations: {
        level1: 'Your blood becomes acidic because your lungs aren\'t breathing out enough CO2.',
        level2: 'Respiratory acidosis happens when you can\'t breathe well enough to remove CO2. Your kidneys compensate by keeping more bicarbonate.',
        level3: 'Elevated pCO2 causes acidosis. Acute vs chronic distinguished by degree of renal compensation. CO2 narcosis can occur.',
        level4: 'Acute: buffering by proteins and hemoglobin (minimal HCO3 change). Chronic: proximal tubule increases NH4+ production and HCO3- generation. Hypoxic drive in COPD.',
        level5: 'Oxygen therapy in CO2 retainers removes hypoxic drive, worsening hypercapnia. Permissive hypercapnia in ARDS protects lungs but requires acid-base monitoring.',
      },
    },
  ],
  [
    'respiratory-alkalosis',
    {
      id: 'respiratory-alkalosis',
      name: 'Respiratory Alkalosis',
      type: 'respiratory-alkalosis',
      labFindings: {
        pH: 'high',
        pCO2: 'low',
        HCO3: 'normal',
      },
      causes: [
        'Hypoxemia: High altitude, pneumonia, PE, anemia',
        'CNS: Anxiety, pain, fever, stroke, tumor',
        'Drugs: Salicylates (early), progesterone',
        'Liver failure, Sepsis (early), Mechanical ventilation',
      ],
      pathophysiology: 'Primary decrease in pCO2 due to hyperventilation',
      compensation: {
        type: 'renal',
        mechanism: 'Decreased H+ secretion and HCO3- reabsorption',
        expectedResponse: 'Acute: HCO3 falls 2 mEq/L per 10 mmHg pCO2 drop. Chronic: 5 mEq/L per 10 mmHg',
        timeframe: 'Days for full renal compensation',
      },
      clinicalFeatures: ['Lightheadedness', 'Paresthesias', 'Tetany', 'Seizures (severe)'],
      treatment: ['Treat underlying cause', 'Reassurance for anxiety', 'Rebreathing (paper bag) controversial', 'Adjust ventilator'],
      explanations: {
        level1: 'Your blood becomes too basic because you\'re breathing too fast and blowing off too much CO2.',
        level2: 'Respiratory alkalosis occurs with hyperventilation. Common causes include anxiety and being at high altitude.',
        level3: 'Low pCO2 raises pH. Acute respiratory alkalosis can cause symptomatic hypocalcemia due to increased protein binding.',
        level4: 'Hyperventilation shifts hemoglobin-oxygen curve left (increased O2 affinity). Renal compensation: decreased ammoniagenesis and HCO3- generation.',
        level5: 'Salicylate toxicity: early respiratory alkalosis (stimulates respiratory center), later metabolic acidosis (mitochondrial toxicity). Chronic respiratory alkalosis is the most completely compensated acid-base disorder.',
      },
    },
  ],
]);

/**
 * Common electrolyte disorders
 */
export const ELECTROLYTE_DISORDERS = new Map<string, ElectrolyteDisorder>([
  [
    'hyponatremia',
    {
      id: 'hyponatremia',
      name: 'Hyponatremia',
      electrolyte: 'sodium',
      direction: 'hypo',
      definition: 'Serum sodium <135 mEq/L',
      causes: [
        { category: 'Hypovolemic', examples: ['Diuretics', 'Vomiting/diarrhea', 'Adrenal insufficiency', 'Cerebral salt wasting'] },
        { category: 'Euvolemic', examples: ['SIADH', 'Hypothyroidism', 'Primary polydipsia', 'Beer potomania'] },
        { category: 'Hypervolemic', examples: ['Heart failure', 'Cirrhosis', 'Nephrotic syndrome', 'Advanced CKD'] },
      ],
      pathophysiology: 'Relative excess of water compared to sodium (dilutional); rarely true Na+ depletion',
      clinicalFeatures: [
        { system: 'Neurologic', symptoms: ['Headache', 'Confusion', 'Seizures', 'Coma'], severity: 'severe' },
        { system: 'GI', symptoms: ['Nausea', 'Vomiting'], severity: 'mild' },
        { system: 'Musculoskeletal', symptoms: ['Muscle cramps', 'Weakness'], severity: 'moderate' },
      ],
      ecgFindings: ['Generally none specific to hyponatremia'],
      diagnosis: ['Serum osmolality', 'Urine osmolality', 'Urine sodium', 'Volume status assessment'],
      treatment: [
        { indication: 'Severe symptoms', intervention: 'Hypertonic saline (3%) 100-150 mL bolus', monitoring: ['Serum Na q2h', 'Neuro checks'], cautions: ['Avoid >10-12 mEq/L/day correction'] },
        { indication: 'Hypovolemic', intervention: 'Normal saline', monitoring: ['Serum Na', 'Volume status'], cautions: ['May overcorrect if SIADH unmasked'] },
        { indication: 'SIADH', intervention: 'Fluid restriction, salt tabs, tolvaptan', monitoring: ['Serum Na', 'Urine output'], cautions: ['Tolvaptan contraindicated in liver disease'] },
        { indication: 'Hypervolemic', intervention: 'Fluid/salt restriction, diuretics', monitoring: ['Serum Na', 'Weight'], cautions: ['Treat underlying condition'] },
      ],
      complications: ['Cerebral edema', 'Herniation', 'Osmotic demyelination syndrome (if corrected too fast)'],
      explanations: {
        level1: 'Low sodium usually means too much water in your body, not too little salt.',
        level2: 'Hyponatremia is caused by dilution (too much water) or sodium loss. It can cause brain swelling if severe.',
        level3: 'Classify by volume status and tonicity. SIADH shows concentrated urine (>100 mOsm/kg) despite dilute serum. Correct slowly to avoid ODS.',
        level4: 'Diagnostic algorithm: serum osm → urine osm → urine Na → volume assessment. Osmotic demyelination syndrome (central pontine myelinolysis) from rapid correction.',
        level5: 'SIADH criteria: hypo-osmolality, inappropriately concentrated urine, euvolemia, UNa >40, normal adrenal/thyroid. Aquaretics (V2 antagonists) block ADH effect. ODS: restrict correction to <8 mEq/L/day in high-risk patients.',
      },
    },
  ],
  [
    'hypernatremia',
    {
      id: 'hypernatremia',
      name: 'Hypernatremia',
      electrolyte: 'sodium',
      direction: 'hyper',
      definition: 'Serum sodium >145 mEq/L',
      causes: [
        { category: 'Water loss', examples: ['Insensible losses', 'Diabetes insipidus (central or nephrogenic)', 'Osmotic diuresis'] },
        { category: 'Inadequate intake', examples: ['Altered mental status', 'No access to water', 'Impaired thirst'] },
        { category: 'Sodium gain (rare)', examples: ['Hypertonic saline', 'Sodium bicarbonate', 'Salt ingestion'] },
      ],
      pathophysiology: 'Water deficit relative to sodium; always indicates impaired water access or thirst',
      clinicalFeatures: [
        { system: 'Neurologic', symptoms: ['Lethargy', 'Irritability', 'Seizures', 'Coma'], severity: 'severe' },
        { system: 'General', symptoms: ['Thirst', 'Dry mucous membranes'], severity: 'mild' },
      ],
      diagnosis: ['Urine osmolality', 'Urine volume', 'Response to desmopressin (for DI)', 'Calculate free water deficit'],
      treatment: [
        { indication: 'Acute (<48h)', intervention: 'Can correct faster (1-2 mEq/L/hr)', monitoring: ['Serum Na q1-2h'], cautions: ['Usually iatrogenic'] },
        { indication: 'Chronic (>48h)', intervention: 'D5W or hypotonic saline, correct 10-12 mEq/L/day max', monitoring: ['Serum Na q4-6h'], cautions: ['Avoid cerebral edema'] },
        { indication: 'Central DI', intervention: 'Desmopressin + water', monitoring: ['Urine output', 'Serum Na'], cautions: ['Adjust DDAVP to avoid hyponatremia'] },
        { indication: 'Nephrogenic DI', intervention: 'Thiazides, low-salt/low-protein diet, NSAIDs', monitoring: ['Serum Na', 'Hydration'], cautions: ['Treat underlying cause'] },
      ],
      complications: ['Brain shrinkage', 'Intracranial hemorrhage', 'Cerebral edema if corrected too fast'],
      explanations: {
        level1: 'High sodium means you\'ve lost too much water or can\'t drink enough.',
        level2: 'Hypernatremia is almost always from water loss, not salt excess. The brain can shrink and bleed if severe.',
        level3: 'Hypernatremia = hyperosmolar state. Distinguish DI from other causes with urine osmolality. Correct slowly to prevent cerebral edema.',
        level4: 'Free water deficit = TBW × (Na/140 - 1). Central DI: responds to DDAVP. Nephrogenic DI: no response to DDAVP (lithium, hypercalcemia, hypokalemia).',
        level5: 'Aquaporin-2 is the ADH-sensitive channel. Lithium enters principal cells via ENaC, accumulates, and inhibits AQP2 trafficking. Paradox: thiazides help NDI by causing mild volume depletion that enhances proximal reabsorption.',
      },
    },
  ],
  [
    'hypokalemia',
    {
      id: 'hypokalemia',
      name: 'Hypokalemia',
      electrolyte: 'potassium',
      direction: 'hypo',
      definition: 'Serum potassium <3.5 mEq/L',
      causes: [
        { category: 'Transcellular shift', examples: ['Insulin', 'Beta-agonists', 'Alkalosis', 'Refeeding syndrome'] },
        { category: 'Renal losses', examples: ['Diuretics', 'Hyperaldosteronism', 'RTA types 1 and 2', 'Hypomagnesemia'] },
        { category: 'GI losses', examples: ['Diarrhea', 'Vomiting (renal loss from alkalosis)', 'Laxative abuse'] },
        { category: 'Inadequate intake', examples: ['Anorexia', 'Alcoholism'] },
      ],
      pathophysiology: 'Total body K+ depletion or redistribution into cells',
      clinicalFeatures: [
        { system: 'Cardiac', symptoms: ['Arrhythmias', 'Palpitations'], severity: 'severe' },
        { system: 'Musculoskeletal', symptoms: ['Weakness', 'Cramps', 'Rhabdomyolysis'], severity: 'moderate' },
        { system: 'GI', symptoms: ['Constipation', 'Ileus'], severity: 'moderate' },
        { system: 'Renal', symptoms: ['Polyuria', 'Nephrogenic DI'], severity: 'mild' },
      ],
      ecgFindings: ['Flattened T waves', 'U waves', 'ST depression', 'Prolonged QT', 'Increased arrhythmia risk'],
      diagnosis: ['Serum K+', 'Urine K+ (<20 extrarenal, >20 renal loss)', 'Transtubular K gradient (TTKG)', 'Acid-base status'],
      treatment: [
        { indication: 'Mild (3.0-3.5)', intervention: 'Oral KCl 40-80 mEq/day', monitoring: ['Serum K+'], cautions: ['Dietary sources'] },
        { indication: 'Moderate (2.5-3.0)', intervention: 'Oral KCl or IV 10-20 mEq/hr', monitoring: ['Serum K+', 'ECG'], cautions: ['Check Mg'] },
        { indication: 'Severe (<2.5) or symptomatic', intervention: 'IV KCl 10-20 mEq/hr via central line', monitoring: ['Continuous ECG', 'K+ q1-2h'], cautions: ['Max 40 mEq/hr with cardiac monitoring'] },
      ],
      complications: ['Fatal arrhythmias', 'Respiratory failure', 'Rhabdomyolysis'],
      explanations: {
        level1: 'Low potassium can make your muscles weak and cause dangerous heart rhythms.',
        level2: 'Hypokalemia is often caused by diuretics, vomiting, or diarrhea. It affects muscles and the heart.',
        level3: 'Urine K+ helps distinguish renal from non-renal losses. Always check and replace magnesium (required for K+ repletion).',
        level4: 'Alkalosis causes H+/K+ exchange, shifting K+ into cells. Vomiting: not GI K+ loss but renal loss from volume depletion and metabolic alkalosis. TTKG >3 with hypokalemia suggests renal wasting.',
        level5: 'Hypokalemia impairs insulin release and concentrating ability (AQP2 downregulation). Gitelman: NCC mutation causes hypokalemic metabolic alkalosis with hypocalciuria. Hypomagnesemia causes refractory hypokalemia via ROMK activation.',
      },
    },
  ],
  [
    'hyperkalemia',
    {
      id: 'hyperkalemia',
      name: 'Hyperkalemia',
      electrolyte: 'potassium',
      direction: 'hyper',
      definition: 'Serum potassium >5.0 mEq/L',
      causes: [
        { category: 'Pseudohyperkalemia', examples: ['Hemolysis', 'Thrombocytosis', 'Leukocytosis', 'Tourniquet'] },
        { category: 'Transcellular shift', examples: ['Acidosis', 'Insulin deficiency', 'Beta-blockers', 'Cell lysis (tumor lysis)'] },
        { category: 'Decreased excretion', examples: ['Renal failure', 'Hypoaldosteronism', 'K+-sparing diuretics', 'ACEi/ARBs'] },
        { category: 'Increased intake', examples: ['Supplements', 'Salt substitutes', 'Massive transfusion'] },
      ],
      pathophysiology: 'Impaired renal excretion (most common) or shift out of cells',
      clinicalFeatures: [
        { system: 'Cardiac', symptoms: ['Arrhythmias', 'Cardiac arrest'], severity: 'severe' },
        { system: 'Musculoskeletal', symptoms: ['Weakness', 'Paralysis'], severity: 'moderate' },
        { system: 'GI', symptoms: ['Nausea', 'Vomiting'], severity: 'mild' },
      ],
      ecgFindings: ['Peaked T waves', 'Prolonged PR', 'Widened QRS', 'Sine wave', 'Asystole/VF'],
      diagnosis: ['Repeat K+ (rule out pseudohyperkalemia)', 'ECG', 'BUN/Cr', 'Aldosterone/renin'],
      treatment: [
        { indication: 'ECG changes', intervention: 'Calcium gluconate 1-2g IV (membrane stabilization)', monitoring: ['ECG'], cautions: ['Does not lower K+'] },
        { indication: 'Shift K+ into cells', intervention: 'Insulin 10 units + D50 25g, or albuterol nebulizer', monitoring: ['K+ q1h', 'Glucose'], cautions: ['Temporary effect'] },
        { indication: 'Remove K+', intervention: 'Loop diuretic, patiromer/SZC, kayexalate, dialysis', monitoring: ['K+', 'Volume'], cautions: ['Kayexalate risk of intestinal necrosis'] },
        { indication: 'Severe (>6.5) or symptomatic', intervention: 'All above + emergent dialysis', monitoring: ['Continuous ECG'], cautions: ['Life-threatening emergency'] },
      ],
      complications: ['Cardiac arrest', 'Fatal arrhythmias'],
      explanations: {
        level1: 'High potassium is dangerous because it can stop your heart.',
        level2: 'Hyperkalemia usually happens when kidneys can\'t excrete enough potassium. It causes characteristic ECG changes.',
        level3: 'Treat ECG changes immediately with calcium (stabilizes membrane). Shift K+ into cells with insulin/glucose. Remove K+ from body with diuretics or dialysis.',
        level4: 'Hyperkalemia depolarizes resting membrane potential, inactivating Na+ channels → conduction abnormalities. ECG progression: peaked T → PR prolongation → QRS widening → sine wave → VF/asystole.',
        level5: 'Type 4 RTA: aldosterone deficiency or resistance causes hyperkalemia and non-AG acidosis. RAAS inhibitors + NSAID + K+-sparing diuretic = "triple whammy" for hyperkalemia. SZC and patiromer are newer K+ binders with better safety profile than kayexalate.',
      },
    },
  ],
  [
    'hypocalcemia',
    {
      id: 'hypocalcemia',
      name: 'Hypocalcemia',
      electrolyte: 'calcium',
      direction: 'hypo',
      definition: 'Total calcium <8.5 mg/dL or ionized Ca <4.5 mg/dL',
      causes: [
        { category: 'PTH deficiency', examples: ['Post-thyroidectomy', 'Autoimmune', 'DiGeorge syndrome'] },
        { category: 'PTH resistance', examples: ['Pseudohypoparathyroidism', 'Hypomagnesemia'] },
        { category: 'Vitamin D deficiency', examples: ['Nutritional', 'Malabsorption', 'CKD (decreased 1α-hydroxylase)'] },
        { category: 'Other', examples: ['Acute pancreatitis', 'Citrate (massive transfusion)', 'Hungry bone syndrome', 'Tumor lysis'] },
      ],
      pathophysiology: 'Decreased PTH, vitamin D, or Ca2+ binding/sequestration',
      clinicalFeatures: [
        { system: 'Neuromuscular', symptoms: ['Paresthesias', 'Tetany', 'Muscle cramps', 'Laryngospasm'], severity: 'severe' },
        { system: 'Cardiac', symptoms: ['QT prolongation', 'Arrhythmias', 'Heart failure'], severity: 'severe' },
        { system: 'Neurologic', symptoms: ['Seizures', 'Altered mental status'], severity: 'severe' },
        { system: 'Signs', symptoms: ['Chvostek sign', 'Trousseau sign'], severity: 'moderate' },
      ],
      ecgFindings: ['Prolonged QT interval (QTc)', 'Torsades de pointes risk'],
      diagnosis: ['Ionized Ca (preferred)', 'Correct for albumin if total', 'PTH', 'Vitamin D (25-OH and 1,25-OH)', 'Mg', 'Phosphorus'],
      treatment: [
        { indication: 'Symptomatic or severe', intervention: 'IV calcium gluconate 1-2g over 10 min, then infusion', monitoring: ['ECG', 'Ionized Ca'], cautions: ['Avoid if hyperphosphatemia (risk of precipitation)'] },
        { indication: 'Chronic', intervention: 'Oral calcium + vitamin D (calcitriol if CKD)', monitoring: ['Serum Ca', 'Urine Ca'], cautions: ['Avoid hypercalciuria'] },
        { indication: 'Hypomagnesemia', intervention: 'Replece Mg first', monitoring: ['Mg', 'Ca'], cautions: ['Ca won\'t correct until Mg normal'] },
      ],
      complications: ['Seizures', 'Laryngospasm', 'Arrhythmias', 'Cardiomyopathy'],
      explanations: {
        level1: 'Low calcium makes your muscles twitch and can affect your heart.',
        level2: 'Hypocalcemia can be from thyroid surgery, vitamin D deficiency, or kidney disease. It causes numbness and muscle spasms.',
        level3: 'Check PTH: low = hypoparathyroidism, high = vitamin D deficiency or resistance. Always check and correct magnesium.',
        level4: 'Chvostek: facial twitch with tapping facial nerve. Trousseau: carpal spasm with BP cuff inflation. Alkalosis decreases ionized Ca by increasing protein binding.',
        level5: 'Hungry bone syndrome: post-parathyroidectomy hypocalcemia from rapid bone uptake. Pseudohypoparathyroidism type 1a: Gsα mutation (Albright hereditary osteodystrophy phenotype) with PTH resistance. Hypomagnesemia impairs PTH secretion and causes PTH resistance.',
      },
    },
  ],
  [
    'hypercalcemia',
    {
      id: 'hypercalcemia',
      name: 'Hypercalcemia',
      electrolyte: 'calcium',
      direction: 'hyper',
      definition: 'Total calcium >10.5 mg/dL or ionized Ca >5.2 mg/dL',
      causes: [
        { category: 'PTH-mediated', examples: ['Primary hyperparathyroidism (adenoma)', 'Tertiary hyperparathyroidism', 'Lithium', 'FHH'] },
        { category: 'Non-PTH-mediated', examples: ['Malignancy (PTHrP, bone mets, myeloma)', 'Vitamin D excess', 'Granulomatous disease', 'Thiazides'] },
        { category: 'Other', examples: ['Immobilization', 'Milk-alkali syndrome', 'Thyrotoxicosis', 'Adrenal insufficiency'] },
      ],
      pathophysiology: 'Increased bone resorption, intestinal absorption, or renal reabsorption',
      clinicalFeatures: [
        { system: 'General', symptoms: ['Stones, bones, groans, psychiatric overtones'], severity: 'varies' },
        { system: 'Renal', symptoms: ['Polyuria', 'Nephrolithiasis', 'Nephrogenic DI'], severity: 'moderate' },
        { system: 'GI', symptoms: ['Constipation', 'Nausea', 'Pancreatitis'], severity: 'moderate' },
        { system: 'Neuropsychiatric', symptoms: ['Confusion', 'Depression', 'Coma'], severity: 'severe' },
        { system: 'Cardiac', symptoms: ['Short QT', 'Arrhythmias'], severity: 'severe' },
      ],
      ecgFindings: ['Short QT interval', 'Osborn waves (severe)', 'Arrhythmias'],
      diagnosis: ['PTH (first test)', 'If PTH low: PTHrP, vitamin D, malignancy workup', 'If PTH high: primary hyperparathyroidism', '24h urine Ca (to distinguish from FHH)'],
      treatment: [
        { indication: 'Mild/asymptomatic', intervention: 'Hydration, avoid thiazides/lithium, monitor', monitoring: ['Ca levels'], cautions: ['May not need acute treatment'] },
        { indication: 'Moderate/symptomatic', intervention: 'IV saline 200-300 mL/hr, loop diuretics after volume replete', monitoring: ['Ca', 'Volume status'], cautions: ['Avoid diuretics until euvolemic'] },
        { indication: 'Severe or malignancy', intervention: 'Bisphosphonate (zoledronate) or denosumab', monitoring: ['Ca over days'], cautions: ['Bisphosphonates take 2-4 days to work'] },
        { indication: 'Life-threatening', intervention: 'Calcitonin (rapid but temporary) + bisphosphonate, dialysis', monitoring: ['Ca', 'Neuro status'], cautions: ['Calcitonin tachyphylaxis'] },
      ],
      complications: ['Cardiac arrest', 'Renal failure', 'Pancreatitis', 'Coma'],
      explanations: {
        level1: 'High calcium can cause kidney stones, weak bones, stomach problems, and confusion.',
        level2: 'Hypercalcemia is usually from overactive parathyroid glands or cancer. Remember "stones, bones, groans, and psychiatric overtones."',
        level3: 'PTH level distinguishes PTH-mediated (primary hyperparathyroidism) from non-PTH-mediated (malignancy, vitamin D excess). Hydration is first-line treatment.',
        level4: 'Primary hyperPTH: elevated Ca with normal/high PTH. Malignancy: suppressed PTH, often PTHrP-mediated (squamous cell, renal, breast). FHH: familial, benign, high Ca but low urine Ca (Ca/Cr clearance ratio <0.01).',
        level5: 'Humoral hypercalcemia of malignancy: PTHrP activates PTH1R. Local osteolytic: cytokines activate osteoclasts. Bisphosphonates inhibit farnesyl diphosphate synthase in osteoclasts. Denosumab is a RANKL antibody.',
      },
    },
  ],
]);

/**
 * Fluid compartments
 */
export const FLUID_COMPARTMENTS = new Map<string, FluidCompartment>([
  [
    'intracellular',
    {
      id: 'intracellular',
      name: 'Intracellular Fluid (ICF)',
      volumePercent: '~40% of body weight',
      volumeAbsolute: '~28L in 70kg adult',
      mainCation: 'Potassium (K+) - 140 mEq/L',
      mainAnion: 'Phosphate (PO4) and proteins',
      osmolarity: '~290 mOsm/kg',
      barriers: ['Cell membrane'],
      movementFactors: ['Osmotic gradients', 'Na+/K+-ATPase'],
      explanations: {
        level1: 'This is all the water inside your cells - the biggest water compartment in your body.',
        level2: 'Intracellular fluid makes up 2/3 of total body water. It\'s high in potassium, unlike blood.',
        level3: 'ICF is 40% of body weight. K+ is maintained at 140 mEq/L by Na+/K+-ATPase. Osmolarity matches ECF.',
        level4: 'Cell membrane with Na+/K+-ATPase maintains ionic gradients. Water equilibrates across membranes to equalize osmolarity between ICF and ECF.',
        level5: 'ICF volume changes with effective osmolality (tonicity). Acute hypernatremia causes water shift out of cells; hyponatremia causes cell swelling. Brain adapts via organic osmolytes.',
      },
    },
  ],
  [
    'extracellular',
    {
      id: 'extracellular',
      name: 'Extracellular Fluid (ECF)',
      volumePercent: '~20% of body weight',
      volumeAbsolute: '~14L in 70kg adult',
      mainCation: 'Sodium (Na+) - 140 mEq/L',
      mainAnion: 'Chloride (Cl-) and bicarbonate (HCO3-)',
      osmolarity: '~290 mOsm/kg',
      barriers: ['Capillary endothelium divides into plasma and interstitial'],
      movementFactors: ['Starling forces', 'Lymphatic drainage'],
      explanations: {
        level1: 'This is the water outside your cells - in your blood and between your tissues.',
        level2: 'Extracellular fluid is 1/3 of total body water. It\'s high in sodium and includes both blood plasma and tissue fluid.',
        level3: 'ECF is 20% of body weight, divided into plasma (5%) and interstitial fluid (15%). Na+ is the main determinant of ECF volume.',
        level4: 'Sodium is the effective osmole that determines ECF volume. Changes in total body sodium alter ECF volume; changes in water alter sodium concentration.',
        level5: 'Edema states (CHF, cirrhosis, nephrotic) have increased total body Na+ but often hyponatremia due to non-osmotic ADH release. Effective arterial blood volume determines RAAS activation.',
      },
    },
  ],
  [
    'plasma',
    {
      id: 'plasma',
      name: 'Plasma (Intravascular)',
      volumePercent: '~5% of body weight',
      volumeAbsolute: '~3.5L in 70kg adult',
      mainCation: 'Sodium (Na+)',
      mainAnion: 'Chloride (Cl-), bicarbonate (HCO3-), proteins (albumin)',
      osmolarity: '~290 mOsm/kg',
      barriers: ['Capillary endothelium'],
      movementFactors: ['Oncotic pressure (albumin)', 'Hydrostatic pressure', 'Capillary permeability'],
      explanations: {
        level1: 'This is the liquid part of your blood that carries cells around.',
        level2: 'Plasma is the fluid in blood vessels. Proteins like albumin help keep fluid in the vessels.',
        level3: 'Plasma is ~3.5L and separated from interstitial fluid by capillary wall. Albumin creates oncotic pressure that retains fluid.',
        level4: 'Starling equation: Jv = Kf[(Pc-Pi) - σ(πc-πi)]. Pc = capillary hydrostatic, πc = capillary oncotic. Hypoalbuminemia reduces πc causing edema.',
        level5: 'Albumin contributes ~80% of plasma oncotic pressure (~25 mmHg). Sepsis increases capillary permeability (decreased σ), causing fluid extravasation despite normal albumin.',
      },
    },
  ],
  [
    'interstitial',
    {
      id: 'interstitial',
      name: 'Interstitial Fluid',
      volumePercent: '~15% of body weight',
      volumeAbsolute: '~10.5L in 70kg adult',
      mainCation: 'Sodium (Na+)',
      mainAnion: 'Chloride (Cl-)',
      osmolarity: '~290 mOsm/kg',
      barriers: ['Cell membrane (from ICF)', 'Capillary wall (from plasma)'],
      movementFactors: ['Starling forces', 'Lymphatic return'],
      explanations: {
        level1: 'This is the water that surrounds your cells, bathing them in nutrients.',
        level2: 'Interstitial fluid is between cells and blood vessels. It\'s where nutrients and wastes are exchanged.',
        level3: 'Interstitial fluid is ~10.5L and has similar composition to plasma but less protein. Lymphatics return filtered fluid to circulation.',
        level4: 'Interstitial fluid is an ultrafiltrate of plasma. Lymphatic system returns ~3L/day of filtered fluid and protein to venous circulation.',
        level5: 'Interstitial compliance is initially low, then increases with edema formation. Subcutaneous tissue and lungs have different interstitial compliance curves affecting edema distribution.',
      },
    },
  ],
]);

/**
 * Lab correlations for electrolytes
 */
export const LAB_ELECTROLYTE_CORRELATIONS: LabElectrolyteCorrelation[] = [
  {
    labId: 'sodium',
    labName: 'Sodium',
    normalRange: '136-145',
    unit: 'mEq/L',
    interpretation: {
      low: 'Hyponatremia - assess volume status, consider SIADH, diuretics, heart failure',
      high: 'Hypernatremia - usually indicates water deficit, assess thirst mechanism and access to water',
    },
    relatedLabs: ['Osmolality', 'Urine sodium', 'Urine osmolality', 'ADH level'],
    urgentValues: { criticalLow: '<120', criticalHigh: '>160' },
  },
  {
    labId: 'potassium',
    labName: 'Potassium',
    normalRange: '3.5-5.0',
    unit: 'mEq/L',
    interpretation: {
      low: 'Hypokalemia - check urine K+, assess for diuretics, GI losses, consider hypomagnesemia',
      high: 'Hyperkalemia - rule out hemolysis, check renal function, consider ACEi/ARB, K+-sparing diuretics',
    },
    relatedLabs: ['Magnesium', 'BUN/Cr', 'Aldosterone', 'Urine potassium', 'ECG'],
    urgentValues: { criticalLow: '<2.5', criticalHigh: '>6.5' },
  },
  {
    labId: 'calcium-total',
    labName: 'Calcium (Total)',
    normalRange: '8.5-10.5',
    unit: 'mg/dL',
    interpretation: {
      low: 'Hypocalcemia - check PTH, vitamin D, magnesium; correct for albumin',
      high: 'Hypercalcemia - check PTH first; if low consider malignancy, vitamin D toxicity',
    },
    relatedLabs: ['Ionized calcium', 'PTH', 'Vitamin D (25-OH)', 'Phosphorus', 'Albumin', 'Magnesium'],
    urgentValues: { criticalLow: '<6.5', criticalHigh: '>14' },
  },
  {
    labId: 'calcium-ionized',
    labName: 'Ionized Calcium',
    normalRange: '4.5-5.2',
    unit: 'mg/dL',
    interpretation: {
      low: 'True hypocalcemia - more accurate than total; check PTH, Mg',
      high: 'True hypercalcemia - useful when albumin abnormal',
    },
    relatedLabs: ['PTH', 'Magnesium', 'pH (affects binding)'],
    urgentValues: { criticalLow: '<3.5', criticalHigh: '>6.5' },
  },
  {
    labId: 'magnesium',
    labName: 'Magnesium',
    normalRange: '1.7-2.3',
    unit: 'mg/dL',
    interpretation: {
      low: 'Hypomagnesemia - causes refractory hypokalemia and hypocalcemia; common with diuretics, alcoholism',
      high: 'Hypermagnesemia - usually iatrogenic or renal failure; can cause muscle weakness, hypotension',
    },
    relatedLabs: ['Potassium', 'Calcium', 'BUN/Cr', 'Urine magnesium'],
    urgentValues: { criticalLow: '<1.0', criticalHigh: '>4.0' },
  },
  {
    labId: 'phosphorus',
    labName: 'Phosphorus',
    normalRange: '2.5-4.5',
    unit: 'mg/dL',
    interpretation: {
      low: 'Hypophosphatemia - refeeding syndrome, alcoholism, DKA treatment; can cause weakness, rhabdomyolysis',
      high: 'Hyperphosphatemia - renal failure, tumor lysis; risk of calciphylaxis with calcium',
    },
    relatedLabs: ['Calcium', 'PTH', 'Vitamin D', 'BUN/Cr', 'FGF-23'],
    urgentValues: { criticalLow: '<1.0', criticalHigh: '>10' },
  },
  {
    labId: 'bicarbonate',
    labName: 'Bicarbonate (CO2)',
    normalRange: '22-26',
    unit: 'mEq/L',
    interpretation: {
      low: 'Low HCO3- indicates metabolic acidosis - calculate anion gap; or compensation for respiratory alkalosis',
      high: 'High HCO3- indicates metabolic alkalosis - assess volume status; or compensation for respiratory acidosis',
    },
    relatedLabs: ['ABG (pH, pCO2)', 'Anion gap', 'Lactate', 'BUN/Cr'],
    urgentValues: { criticalLow: '<10', criticalHigh: '>40' },
  },
  {
    labId: 'chloride',
    labName: 'Chloride',
    normalRange: '98-106',
    unit: 'mEq/L',
    interpretation: {
      low: 'Hypochloremia - often parallels sodium; metabolic alkalosis (vomiting)',
      high: 'Hyperchloremia - often parallels sodium; non-anion gap acidosis',
    },
    relatedLabs: ['Sodium', 'Bicarbonate', 'Anion gap'],
    urgentValues: { criticalLow: '<80', criticalHigh: '>120' },
  },
];

/**
 * Electrolyte physiology statistics
 */
export const ELECTROLYTE_STATISTICS: ElectrolyteStatistics = {
  totalBodyWater: '~60% of body weight (42L in 70kg male)',
  dailySodiumIntake: '~100-200 mEq/day (matches excretion)',
  dailyPotassiumIntake: '~40-80 mEq/day',
  dailyCalciumIntake: '~1000 mg/day recommended',
  glomerularFiltrationRate: '~180 L/day (125 mL/min)',
  sodiumFiltered: '~25,000 mEq/day',
  sodiumExcreted: '~100-200 mEq/day (>99% reabsorbed)',
};

// ============ API Functions ============

/**
 * Get all nephron segments
 */
export function getAllNephronSegments(): NephronSegment[] {
  return Array.from(NEPHRON_SEGMENTS.values());
}

/**
 * Get nephron segment by ID
 */
export function getNephronSegment(id: string): NephronSegment | undefined {
  return NEPHRON_SEGMENTS.get(id);
}

/**
 * Get aldosterone mechanism steps
 */
export function getAldosteroneMechanism(): AldosteroneMechanismStep[] {
  return ALDOSTERONE_MECHANISM_STEPS;
}

/**
 * Get ADH mechanism steps
 */
export function getADHMechanism(): ADHMechanismStep[] {
  return ADH_MECHANISM_STEPS;
}

/**
 * Get all fluid-regulating hormones
 */
export function getAllFluidHormones(): FluidHormone[] {
  return Array.from(FLUID_HORMONES.values());
}

/**
 * Get fluid hormone by ID
 */
export function getFluidHormone(id: string): FluidHormone | undefined {
  return FLUID_HORMONES.get(id);
}

/**
 * Get calcium regulation axis
 */
export function getCalciumRegulationAxis(): CalciumRegulationAxis {
  return CALCIUM_REGULATION_AXIS;
}

/**
 * Get acid-base concept
 */
export function getAcidBaseConcept(): AcidBaseConcept {
  return ACID_BASE_CONCEPT;
}

/**
 * Get all acid-base disorders
 */
export function getAllAcidBaseDisorders(): AcidBaseDisorder[] {
  return Array.from(ACID_BASE_DISORDERS.values());
}

/**
 * Get acid-base disorder by ID
 */
export function getAcidBaseDisorder(id: string): AcidBaseDisorder | undefined {
  return ACID_BASE_DISORDERS.get(id);
}

/**
 * Get all electrolyte disorders
 */
export function getAllElectrolyteDisorders(): ElectrolyteDisorder[] {
  return Array.from(ELECTROLYTE_DISORDERS.values());
}

/**
 * Get electrolyte disorder by ID
 */
export function getElectrolyteDisorder(id: string): ElectrolyteDisorder | undefined {
  return ELECTROLYTE_DISORDERS.get(id);
}

/**
 * Get disorders by electrolyte type
 */
export function getDisordersByElectrolyte(electrolyte: string): ElectrolyteDisorder[] {
  return Array.from(ELECTROLYTE_DISORDERS.values()).filter(
    (d) => d.electrolyte === electrolyte
  );
}

/**
 * Get all fluid compartments
 */
export function getAllFluidCompartments(): FluidCompartment[] {
  return Array.from(FLUID_COMPARTMENTS.values());
}

/**
 * Get fluid compartment by ID
 */
export function getFluidCompartment(id: string): FluidCompartment | undefined {
  return FLUID_COMPARTMENTS.get(id);
}

/**
 * Get lab correlations
 */
export function getLabElectrolyteCorrelations(): LabElectrolyteCorrelation[] {
  return LAB_ELECTROLYTE_CORRELATIONS;
}

/**
 * Get lab correlation by ID
 */
export function getLabElectrolyteCorrelation(
  labId: string
): LabElectrolyteCorrelation | undefined {
  return LAB_ELECTROLYTE_CORRELATIONS.find((l) => l.labId === labId);
}

/**
 * Get electrolyte statistics
 */
export function getElectrolyteStatistics(): ElectrolyteStatistics {
  return ELECTROLYTE_STATISTICS;
}

/**
 * Get explanation for a nephron segment at specified level
 */
export function getNephronSegmentExplanation(
  id: string,
  level: 1 | 2 | 3 | 4 | 5
): string | undefined {
  const segment = NEPHRON_SEGMENTS.get(id);
  return segment?.explanations[`level${level}`];
}

/**
 * Get explanation for an electrolyte disorder at specified level
 */
export function getElectrolyteDisorderExplanation(
  id: string,
  level: 1 | 2 | 3 | 4 | 5
): string | undefined {
  const disorder = ELECTROLYTE_DISORDERS.get(id);
  return disorder?.explanations[`level${level}`];
}

/**
 * Get explanation for acid-base disorder at specified level
 */
export function getAcidBaseDisorderExplanation(
  id: string,
  level: 1 | 2 | 3 | 4 | 5
): string | undefined {
  const disorder = ACID_BASE_DISORDERS.get(id);
  return disorder?.explanations[`level${level}`];
}

/**
 * Search electrolyte content
 */
export function searchElectrolyteContent(query: string): {
  nephronSegments: NephronSegment[];
  hormones: FluidHormone[];
  disorders: ElectrolyteDisorder[];
  acidBaseDisorders: AcidBaseDisorder[];
} {
  const lowerQuery = query.toLowerCase();

  const nephronSegments = Array.from(NEPHRON_SEGMENTS.values()).filter(
    (s) =>
      s.name.toLowerCase().includes(lowerQuery) ||
      s.transporters.some((t) => t.name.toLowerCase().includes(lowerQuery))
  );

  const hormones = Array.from(FLUID_HORMONES.values()).filter(
    (h) =>
      h.name.toLowerCase().includes(lowerQuery) ||
      h.mechanism.some((m) => m.toLowerCase().includes(lowerQuery))
  );

  const disorders = Array.from(ELECTROLYTE_DISORDERS.values()).filter(
    (d) =>
      d.name.toLowerCase().includes(lowerQuery) ||
      d.causes.some((c) => c.examples.some((e) => e.toLowerCase().includes(lowerQuery)))
  );

  const acidBaseDisorders = Array.from(ACID_BASE_DISORDERS.values()).filter(
    (a) =>
      a.name.toLowerCase().includes(lowerQuery) ||
      a.causes.some((c) => c.toLowerCase().includes(lowerQuery))
  );

  return { nephronSegments, hormones, disorders, acidBaseDisorders };
}
