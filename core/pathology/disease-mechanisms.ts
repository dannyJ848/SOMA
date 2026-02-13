/**
 * Disease Mechanisms Database
 *
 * Educational content explaining how diseases happen at the cellular
 * and molecular level. Attending physician-level pathophysiology.
 */

import type {
  DiseaseMechanism,
  CellInjuryMechanism,
  InflammationMechanism,
  HypersensitivityReaction,
  HemodynamicDisorder,
  NeoplasiaEducation,
} from './types.js';

// ============================================
// Cell Injury Mechanisms
// ============================================

export const CELL_INJURY_MECHANISMS: CellInjuryMechanism[] = [
  {
    id: 'ischemic-injury',
    type: 'ischemic',
    name: 'Ischemic Cell Injury',
    description: 'Cell damage from insufficient blood supply, reducing oxygen and nutrients while allowing waste accumulation.',

    initialResponse: {
      name: 'Oxidative Phosphorylation Failure',
      mechanism: 'Without oxygen, mitochondria cannot produce ATP via electron transport chain',
      purpose: 'Cell attempts to maintain energy through glycolysis',
      duration: 'Seconds to minutes',
    },

    reversibleChanges: [
      {
        name: 'ATP Depletion',
        organelle: 'Mitochondria',
        description: 'Energy stores rapidly depleted',
        appearance: 'No visible change initially',
        mechanism: 'Oxidative phosphorylation stops, glycolysis insufficient',
        consequence: 'All ATP-dependent processes fail',
      },
      {
        name: 'Cell Swelling',
        organelle: 'Plasma membrane',
        description: 'Cell and organelles swell with water',
        appearance: 'Pale, swollen cells on histology',
        mechanism: 'Na+/K+-ATPase fails, sodium and water enter cell',
        consequence: 'Organelle dysfunction',
      },
      {
        name: 'Fatty Change',
        organelle: 'Cytoplasm',
        description: 'Lipid accumulation in cytoplasm',
        appearance: 'Clear vacuoles in cytoplasm',
        mechanism: 'Impaired lipid metabolism and export',
        consequence: 'Cell dysfunction but potentially reversible',
      },
      {
        name: 'ER Swelling',
        organelle: 'Endoplasmic reticulum',
        description: 'Ribosome detachment, ER dilation',
        appearance: 'Dilated ER cisternae',
        mechanism: 'Impaired protein synthesis',
        consequence: 'Reduced protein production',
      },
    ],

    irreversibilityThreshold: 'When plasma membrane integrity is lost and calcium floods the cell, triggering destructive enzymes. This typically occurs after 20-60 minutes of total ischemia in heart muscle, faster in brain tissue.',

    irreversibleChanges: [
      {
        name: 'Membrane Damage',
        organelle: 'Plasma membrane',
        description: 'Holes form in cell membrane',
        appearance: 'Membrane blebs, disruption',
        mechanism: 'Phospholipid degradation, cytoskeletal damage',
        consequence: 'Cell contents leak out, cell death',
      },
      {
        name: 'Calcium Influx',
        organelle: 'Cytoplasm',
        description: 'Massive calcium entry into cell',
        appearance: 'Calcium deposits visible',
        mechanism: 'Failed calcium pumps, membrane damage',
        consequence: 'Activates destructive enzymes (proteases, lipases)',
      },
      {
        name: 'Mitochondrial Damage',
        organelle: 'Mitochondria',
        description: 'Mitochondrial permeability transition',
        appearance: 'Swollen mitochondria with dense bodies',
        mechanism: 'High calcium opens permeability transition pore',
        consequence: 'Releases cytochrome c, triggers apoptosis',
      },
      {
        name: 'Lysosomal Rupture',
        organelle: 'Lysosomes',
        description: 'Lysosomal enzymes released into cytoplasm',
        appearance: 'Autolysis begins',
        mechanism: 'Membrane instability from lipid peroxidation',
        consequence: 'Self-digestion of cell',
      },
    ],

    deathPathway: 'necrosis',

    markers: [
      {
        name: 'Troponin',
        source: 'Cardiac myocytes',
        timing: 'Rises 4-6 hours after injury, peaks 12-24 hours',
        clinicalUse: 'Diagnose myocardial infarction',
        examples: ['Troponin I', 'Troponin T'],
      },
      {
        name: 'CK-MB',
        source: 'Cardiac muscle',
        timing: 'Rises 4-8 hours, peaks 24 hours, normalizes 48-72 hours',
        clinicalUse: 'Earlier marker of MI, detect reinfarction',
        examples: ['Creatine kinase MB isoenzyme'],
      },
      {
        name: 'LDH',
        source: 'Many tissues (heart, liver, muscle)',
        timing: 'Rises 24-48 hours, peaks 3-4 days',
        clinicalUse: 'Less specific, used less commonly now',
        examples: ['Lactate dehydrogenase'],
      },
      {
        name: 'AST/ALT',
        source: 'Liver (also muscle)',
        timing: 'Rises within hours of hepatocyte injury',
        clinicalUse: 'Liver injury detection',
        examples: ['Aspartate aminotransferase', 'Alanine aminotransferase'],
      },
    ],
  },
  {
    id: 'oxidative-injury',
    type: 'toxic',
    name: 'Oxidative Stress Injury',
    description: 'Cell damage from reactive oxygen species (free radicals) overwhelming antioxidant defenses.',

    initialResponse: {
      name: 'Antioxidant Response',
      mechanism: 'Cells activate Nrf2 pathway, increase glutathione and antioxidant enzymes',
      purpose: 'Neutralize reactive oxygen species',
      duration: 'Minutes to hours',
    },

    reversibleChanges: [
      {
        name: 'Lipid Peroxidation',
        organelle: 'Cell membranes',
        description: 'Free radicals attack membrane lipids',
        appearance: 'Membrane alterations on electron microscopy',
        mechanism: 'Chain reaction of lipid oxidation',
        consequence: 'Membrane dysfunction, increased permeability',
      },
      {
        name: 'Protein Oxidation',
        organelle: 'Cytoplasm, organelles',
        description: 'Protein carbonylation and misfolding',
        appearance: 'Protein aggregates',
        mechanism: 'Direct oxidation of amino acid side chains',
        consequence: 'Loss of enzyme function, aggregation',
      },
    ],

    irreversibilityThreshold: 'When DNA damage accumulates beyond repair capacity and mitochondrial function is severely impaired.',

    irreversibleChanges: [
      {
        name: 'DNA Damage',
        organelle: 'Nucleus',
        description: 'Strand breaks, base modifications',
        appearance: 'DNA fragmentation',
        mechanism: 'Direct oxidation of DNA bases',
        consequence: 'Mutations, cell death signals',
      },
      {
        name: 'Mitochondrial DNA Damage',
        organelle: 'Mitochondria',
        description: 'mtDNA more vulnerable than nuclear DNA',
        appearance: 'Mitochondrial dysfunction',
        mechanism: 'Proximity to ROS source, less repair capacity',
        consequence: 'Energy failure, more ROS production (vicious cycle)',
      },
    ],

    deathPathway: 'apoptosis',

    markers: [
      {
        name: 'Malondialdehyde (MDA)',
        source: 'Peroxidized lipids',
        timing: 'Immediate marker of oxidative damage',
        clinicalUse: 'Research marker of oxidative stress',
        examples: ['TBARS assay'],
      },
      {
        name: '8-OHdG',
        source: 'Oxidized DNA',
        timing: 'Reflects recent DNA oxidative damage',
        clinicalUse: 'Urinary marker of oxidative stress',
        examples: ['8-hydroxy-2-deoxyguanosine'],
      },
    ],
  },
];

// ============================================
// Inflammation Mechanisms
// ============================================

export const INFLAMMATION_MECHANISMS: InflammationMechanism[] = [
  {
    id: 'acute-inflammation',
    type: 'acute',
    name: 'Acute Inflammation',
    overview: 'The immediate, stereotyped response to injury or infection. Cardinal signs: redness (rubor), heat (calor), swelling (tumor), pain (dolor), and loss of function (functio laesa).',

    triggers: [
      'Infection (bacteria, viruses, fungi)',
      'Tissue necrosis (infarction, trauma)',
      'Foreign bodies',
      'Immune reactions',
      'Physical agents (burns, frostbite, radiation)',
      'Chemical agents (toxins, caustics)',
    ],

    vascularChanges: [
      {
        name: 'Transient Vasoconstriction',
        timing: 'Immediate (seconds)',
        mechanism: 'Neural reflex',
        effect: 'Brief reduction in blood flow',
      },
      {
        name: 'Vasodilation',
        timing: 'Seconds to minutes',
        mechanism: 'Histamine, prostaglandins relax arteriolar smooth muscle',
        effect: 'Increased blood flow → redness and heat',
      },
      {
        name: 'Increased Permeability',
        timing: 'Minutes',
        mechanism: 'Endothelial contraction creates gaps; histamine, leukotrienes',
        effect: 'Protein-rich fluid leaks into tissue → swelling',
      },
      {
        name: 'Stasis',
        timing: 'Minutes to hours',
        mechanism: 'Fluid loss concentrates red cells, increases viscosity',
        effect: 'Slower flow allows leukocyte margination',
      },
    ],

    cellularEvents: [
      {
        cell: 'Neutrophils',
        action: 'First responders - phagocytosis, degranulation',
        timing: '6-24 hours',
        mediators: ['IL-8', 'C5a', 'LTB4'],
        purpose: 'Kill pathogens, remove debris',
      },
      {
        cell: 'Monocytes/Macrophages',
        action: 'Phagocytosis, cytokine production, antigen presentation',
        timing: '24-48 hours',
        mediators: ['MCP-1', 'TNF', 'IL-1'],
        purpose: 'Sustained defense, cleanup, coordinate response',
      },
      {
        cell: 'Mast Cells',
        action: 'Degranulation (histamine release)',
        timing: 'Immediate',
        mediators: ['IgE crosslinking', 'C3a', 'C5a'],
        purpose: 'Initiate vascular response',
      },
    ],

    mediators: [
      {
        name: 'Histamine',
        source: 'Mast cells, basophils',
        actions: ['Vasodilation', 'Increased permeability', 'Itching'],
        clinicalCorrelate: 'Blocked by antihistamines',
      },
      {
        name: 'Prostaglandins (PGE2, PGI2)',
        source: 'Most cells via COX enzymes',
        actions: ['Vasodilation', 'Pain sensitization', 'Fever'],
        clinicalCorrelate: 'Blocked by NSAIDs and aspirin',
      },
      {
        name: 'Leukotrienes (LTB4, LTC4)',
        source: 'Leukocytes via 5-lipoxygenase',
        actions: ['Chemotaxis (LTB4)', 'Bronchoconstriction (LTC4)'],
        clinicalCorrelate: 'LT receptor antagonists for asthma',
      },
      {
        name: 'TNF-α',
        source: 'Macrophages, T cells',
        actions: ['Fever', 'Acute phase response', 'Endothelial activation'],
        clinicalCorrelate: 'Anti-TNF drugs for autoimmune disease',
      },
      {
        name: 'IL-1β',
        source: 'Macrophages',
        actions: ['Fever', 'Acute phase proteins', 'Leukocyte activation'],
        clinicalCorrelate: 'IL-1 antagonists available',
      },
      {
        name: 'Complement (C3a, C5a)',
        source: 'Plasma proteins (liver)',
        actions: ['Opsonization', 'Chemotaxis', 'Membrane attack complex'],
        clinicalCorrelate: 'Complement deficiencies increase infection risk',
      },
    ],

    outcomes: [
      {
        name: 'Resolution',
        likelihood: 'Most common with minor injuries',
        conditions: ['Limited injury', 'Normal immunity', 'Effective drainage'],
        description: 'Complete restoration of normal tissue',
      },
      {
        name: 'Fibrosis/Scarring',
        likelihood: 'Common with significant tissue destruction',
        conditions: ['Extensive necrosis', 'Fibrin deposition', 'Tissue cannot regenerate'],
        description: 'Replacement with collagenous scar tissue',
      },
      {
        name: 'Abscess Formation',
        likelihood: 'With pyogenic bacteria',
        conditions: ['Certain pathogens', 'Tissue necrosis', 'Pus accumulation'],
        description: 'Walled-off collection of pus',
      },
      {
        name: 'Chronic Inflammation',
        likelihood: 'When acute inflammation fails to resolve',
        conditions: ['Persistent infection', 'Autoimmune', 'Foreign body'],
        description: 'Ongoing inflammation with tissue damage',
      },
    ],

    systemicEffects: [
      {
        name: 'Fever',
        mechanism: 'IL-1, IL-6, TNF act on hypothalamus; PGE2 raises set point',
        clinicalFeature: 'Elevated body temperature',
        severity: 'Mild to severe',
      },
      {
        name: 'Leukocytosis',
        mechanism: 'IL-1, TNF stimulate bone marrow release',
        clinicalFeature: 'Elevated white blood cell count',
        severity: 'Proportional to inflammation severity',
      },
      {
        name: 'Acute Phase Response',
        mechanism: 'IL-6 stimulates liver to produce acute phase proteins',
        clinicalFeature: 'Elevated CRP, ESR, fibrinogen',
        severity: 'Correlates with inflammation level',
      },
      {
        name: 'Sepsis/SIRS',
        mechanism: 'Overwhelming systemic inflammatory response',
        clinicalFeature: 'Hypotension, organ dysfunction',
        severity: 'Life-threatening',
      },
    ],
  },
  {
    id: 'chronic-inflammation',
    type: 'chronic',
    name: 'Chronic Inflammation',
    overview: 'Prolonged inflammation (weeks to years) with simultaneous tissue destruction, inflammation, and repair. Characterized by mononuclear cell infiltrate.',

    triggers: [
      'Persistent infection (TB, hepatitis)',
      'Autoimmune diseases',
      'Prolonged toxin exposure',
      'Foreign bodies',
      'Some cancers',
      'Chronic diseases (atherosclerosis)',
    ],

    vascularChanges: [
      {
        name: 'Angiogenesis',
        timing: 'Ongoing',
        mechanism: 'VEGF and other growth factors',
        effect: 'New blood vessel formation in granulation tissue',
      },
    ],

    cellularEvents: [
      {
        cell: 'Macrophages',
        action: 'Central orchestrators - phagocytosis, cytokine production',
        timing: 'Persistent',
        mediators: ['IFN-γ activates', 'IL-4 creates M2 phenotype'],
        purpose: 'Sustained defense, tissue remodeling',
      },
      {
        cell: 'Lymphocytes',
        action: 'T cells direct response, B cells produce antibodies',
        timing: 'Predominant in chronic phase',
        mediators: ['IL-2', 'IFN-γ', 'IL-4'],
        purpose: 'Adaptive immune response',
      },
      {
        cell: 'Plasma Cells',
        action: 'Antibody secretion',
        timing: 'In chronic phase',
        mediators: ['Immunoglobulins'],
        purpose: 'Humoral immunity',
      },
      {
        cell: 'Fibroblasts',
        action: 'Collagen deposition, tissue repair',
        timing: 'Concurrent with inflammation',
        mediators: ['TGF-β', 'PDGF'],
        purpose: 'Tissue repair and scarring',
      },
    ],

    mediators: [
      {
        name: 'IFN-γ',
        source: 'Th1 cells, NK cells',
        actions: ['Macrophage activation', 'Enhances microbicidal activity'],
        clinicalCorrelate: 'Important in intracellular infections',
      },
      {
        name: 'IL-12',
        source: 'Macrophages, dendritic cells',
        actions: ['Promotes Th1 response', 'Activates NK cells'],
        clinicalCorrelate: 'Deficiency leads to mycobacterial infections',
      },
      {
        name: 'TGF-β',
        source: 'Many cells',
        actions: ['Fibrosis', 'Immunosuppression', 'Wound healing'],
        clinicalCorrelate: 'Excess causes fibrotic diseases',
      },
    ],

    outcomes: [
      {
        name: 'Fibrosis',
        likelihood: 'Common outcome',
        conditions: ['Prolonged injury', 'TGF-β signaling'],
        description: 'Replacement of functional tissue with scar',
      },
      {
        name: 'Tissue Destruction',
        likelihood: 'Variable',
        conditions: ['Autoimmune attack', 'Persistent infection'],
        description: 'Progressive loss of tissue function',
      },
      {
        name: 'Amyloidosis',
        likelihood: 'In prolonged chronic inflammation',
        conditions: ['Chronic infections', 'Autoimmune diseases'],
        description: 'Abnormal protein deposition',
      },
    ],

    systemicEffects: [
      {
        name: 'Anemia of Chronic Disease',
        mechanism: 'IL-6 induces hepcidin, sequestering iron',
        clinicalFeature: 'Normocytic anemia',
        severity: 'Mild to moderate',
      },
      {
        name: 'Fatigue/Malaise',
        mechanism: 'Cytokine effects on CNS',
        clinicalFeature: 'Persistent tiredness',
        severity: 'Variable',
      },
      {
        name: 'Weight Loss',
        mechanism: 'TNF (cachexin) increases metabolism',
        clinicalFeature: 'Unintentional weight loss',
        severity: 'Can be severe (cachexia)',
      },
    ],
  },
];

// ============================================
// Hypersensitivity Reactions
// ============================================

export const HYPERSENSITIVITY_REACTIONS: HypersensitivityReaction[] = [
  {
    type: 'type1',
    name: 'Type I - Immediate (Anaphylactic)',
    mechanism: 'IgE-mediated mast cell degranulation. Allergen crosslinks IgE on mast cells → massive mediator release.',
    timing: 'Minutes (immediate)',
    mediators: ['Histamine', 'Tryptase', 'Leukotrienes', 'Prostaglandins', 'PAF'],
    examples: [
      'Anaphylaxis (bee stings, peanuts)',
      'Allergic rhinitis (hay fever)',
      'Allergic asthma',
      'Food allergies',
      'Urticaria (hives)',
    ],
    treatment: ['Epinephrine (anaphylaxis)', 'Antihistamines', 'Corticosteroids', 'Allergen avoidance', 'Immunotherapy'],
  },
  {
    type: 'type2',
    name: 'Type II - Antibody-Mediated (Cytotoxic)',
    mechanism: 'IgG/IgM antibodies against cell surface or matrix antigens → complement activation or ADCC.',
    timing: 'Hours to days',
    mediators: ['IgG', 'IgM', 'Complement', 'Fc receptors on phagocytes'],
    examples: [
      'Autoimmune hemolytic anemia',
      'Goodpasture syndrome',
      'Transfusion reactions',
      'Hemolytic disease of newborn',
      'Graves disease (stimulatory)',
      'Myasthenia gravis (blocking)',
    ],
    treatment: ['Treat underlying cause', 'Plasmapheresis', 'Immunosuppression', 'Blood type matching (transfusions)'],
  },
  {
    type: 'type3',
    name: 'Type III - Immune Complex',
    mechanism: 'Antigen-antibody complexes deposit in tissues → complement activation → neutrophil recruitment → tissue damage.',
    timing: 'Hours to days (3-10 hours typical)',
    mediators: ['IgG complexes', 'Complement', 'Neutrophils', 'Lysosomal enzymes'],
    examples: [
      'Systemic lupus erythematosus',
      'Serum sickness',
      'Arthus reaction',
      'Post-streptococcal glomerulonephritis',
      'Rheumatoid arthritis',
    ],
    treatment: ['Anti-inflammatory drugs', 'Immunosuppression', 'Plasmapheresis', 'Treat underlying antigen source'],
  },
  {
    type: 'type4',
    name: 'Type IV - Delayed (Cell-Mediated)',
    mechanism: 'T cell-mediated. CD4+ Th1 cells activate macrophages; CD8+ T cells directly kill cells.',
    timing: 'Days (24-72 hours)',
    mediators: ['T cells', 'IFN-γ', 'TNF', 'Macrophages', 'Granzymes', 'Perforin'],
    examples: [
      'Contact dermatitis (poison ivy)',
      'Tuberculin skin test (PPD)',
      'Granulomatous diseases',
      'Type 1 diabetes (CD8-mediated)',
      'Multiple sclerosis',
      'Transplant rejection',
    ],
    treatment: ['Corticosteroids', 'Immunosuppressants', 'Allergen avoidance', 'Anti-TNF agents'],
  },
];

// ============================================
// Hemodynamic Disorders
// ============================================

export const HEMODYNAMIC_DISORDERS: HemodynamicDisorder[] = [
  {
    id: 'edema',
    name: 'Edema',
    category: 'edema',
    overview: 'Abnormal accumulation of fluid in interstitial spaces or body cavities.',
    pathophysiology: [
      'Increased hydrostatic pressure (heart failure, venous obstruction)',
      'Decreased oncotic pressure (low albumin - nephrotic syndrome, liver failure)',
      'Lymphatic obstruction (tumor, surgery, infection)',
      'Increased vascular permeability (inflammation)',
      'Sodium/water retention (kidney disease)',
    ],
    causes: [
      'Congestive heart failure',
      'Liver cirrhosis',
      'Nephrotic syndrome',
      'Deep vein thrombosis',
      'Lymphedema',
      'Inflammation',
      'Malnutrition',
    ],
    consequences: [
      'Impaired tissue oxygenation',
      'Skin breakdown',
      'Difficulty breathing (pulmonary edema)',
      'Decreased mobility',
    ],
    clinicalFeatures: [
      'Pitting edema (press finger, leaves indent)',
      'Weight gain',
      'Dyspnea (if pulmonary)',
      'Ascites (abdominal)',
    ],
    management: [
      'Treat underlying cause',
      'Diuretics',
      'Sodium restriction',
      'Compression stockings',
      'Elevation',
    ],
  },
  {
    id: 'thrombosis',
    name: 'Thrombosis',
    category: 'thrombosis',
    overview: 'Formation of a blood clot (thrombus) within a blood vessel.',
    pathophysiology: [
      "Virchow's triad:",
      '1. Endothelial injury - exposes collagen, activates platelets',
      '2. Abnormal blood flow - stasis or turbulence allows clot formation',
      '3. Hypercoagulability - genetic or acquired clotting tendency',
    ],
    causes: [
      'Atherosclerosis (arterial)',
      'Immobility (venous)',
      'Surgery/trauma',
      'Cancer',
      'Inherited thrombophilias',
      'Oral contraceptives',
      'Atrial fibrillation',
    ],
    consequences: [
      'Vessel obstruction → ischemia',
      'Embolization (piece breaks off)',
      'Infarction of supplied tissue',
      'Post-thrombotic syndrome',
    ],
    clinicalFeatures: [
      'DVT: leg pain, swelling, warmth',
      'Arterial: cold, pulseless limb or stroke/MI',
      'May be asymptomatic',
    ],
    management: [
      'Anticoagulation (heparin, warfarin, DOACs)',
      'Thrombolysis (if severe/acute)',
      'Thrombectomy',
      'Prevention (mobilization, compression, prophylactic anticoagulation)',
    ],
  },
  {
    id: 'embolism',
    name: 'Embolism',
    category: 'embolism',
    overview: 'Obstruction of a vessel by material traveling through the bloodstream.',
    pathophysiology: [
      'Embolus travels until it lodges in vessel too small to pass',
      'Most common: thromboembolism (from venous thrombus → pulmonary; from heart/arterial → systemic)',
      'Other types: fat, air, amniotic fluid, tumor, septic',
    ],
    causes: [
      'Deep vein thrombosis → pulmonary embolism',
      'Atrial fibrillation → stroke',
      'Long bone fracture → fat embolism',
      'Central line → air embolism',
      'Delivery → amniotic fluid embolism',
    ],
    consequences: [
      'Tissue infarction',
      'Pulmonary embolism: hypoxia, right heart strain, death',
      'Stroke: neurological deficits',
      'Peripheral: limb ischemia',
    ],
    clinicalFeatures: [
      'PE: sudden dyspnea, pleuritic pain, hemoptysis',
      'Stroke: sudden focal neurological deficit',
      'Fat embolism triad: petechiae, respiratory distress, confusion',
    ],
    management: [
      'Anticoagulation',
      'Thrombolysis (massive PE, acute stroke)',
      'Embolectomy',
      'Supportive care',
      'Prevention of source thrombus',
    ],
  },
  {
    id: 'infarction',
    name: 'Infarction',
    category: 'infarction',
    overview: 'Death of tissue due to inadequate blood supply (ischemic necrosis).',
    pathophysiology: [
      'Vascular occlusion (thrombus, embolus, compression)',
      'Tissue downstream is deprived of oxygen and nutrients',
      'Cell injury progresses from reversible to irreversible',
      'Coagulative necrosis in most organs; liquefactive in brain',
      'If survive: scar formation (fibrosis)',
    ],
    causes: [
      'Thrombosis (atherosclerosis)',
      'Embolism',
      'Vasospasm',
      'External compression',
      'Torsion (testis, ovary)',
    ],
    consequences: [
      'Loss of function of affected tissue',
      'May be fatal if vital organ (heart, brain)',
      'Scarring and permanent damage',
      'Compensatory hypertrophy of remaining tissue',
    ],
    clinicalFeatures: [
      'Pain (often severe)',
      'Loss of function',
      'Tissue-specific markers released (troponin for MI)',
      'Imaging changes',
    ],
    management: [
      'Restore blood flow ASAP (time-critical)',
      'Thrombolysis or revascularization',
      'Supportive care',
      'Prevent expansion',
      'Secondary prevention',
    ],
  },
  {
    id: 'shock',
    name: 'Shock',
    category: 'shock',
    overview: 'Systemic hypoperfusion leading to inadequate tissue oxygenation and cellular dysfunction.',
    pathophysiology: [
      'Inadequate cardiac output and/or vascular dysfunction',
      'Tissue hypoxia → anaerobic metabolism → lactic acidosis',
      'Compensatory mechanisms: tachycardia, vasoconstriction, fluid retention',
      'If prolonged: cell death, multi-organ failure, death',
    ],
    causes: [
      'Cardiogenic: MI, arrhythmia, myocarditis',
      'Hypovolemic: hemorrhage, dehydration',
      'Distributive: sepsis, anaphylaxis, neurogenic',
      'Obstructive: PE, tamponade, tension pneumothorax',
    ],
    consequences: [
      'Multi-organ failure',
      'Acute kidney injury',
      'ARDS',
      'DIC',
      'Death (30-50% mortality in severe cases)',
    ],
    clinicalFeatures: [
      'Hypotension (SBP <90 or MAP <65)',
      'Tachycardia',
      'Altered mental status',
      'Cool, clammy skin (except distributive)',
      'Oliguria',
      'Metabolic acidosis, elevated lactate',
    ],
    management: [
      'Identify and treat underlying cause',
      'IV fluids (except cardiogenic)',
      'Vasopressors if needed',
      'Support organ function',
      'ICU monitoring',
      'Source control for sepsis',
    ],
  },
];

// ============================================
// Neoplasia Education
// ============================================

export const NEOPLASIA_EDUCATION: NeoplasiaEducation = {
  id: 'neoplasia-overview',
  name: 'Understanding Cancer (Neoplasia)',
  overview: 'Cancer is not one disease but hundreds of diseases sharing common features: uncontrolled cell growth from accumulated genetic mutations.',

  cellularBehavior: {
    property: 'Growth regulation',
    normalCell: 'Responds to growth signals, stops when told',
    neoplasticCell: 'Ignores stop signals, generates own growth signals',
  },

  hallmarks: [
    {
      name: 'Sustaining Proliferative Signaling',
      description: 'Cancer cells produce their own growth signals',
      mechanism: 'Oncogene activation (e.g., RAS), autocrine signaling',
      therapeuticTarget: 'Signal transduction inhibitors',
      examples: ['EGFR mutations in lung cancer', 'HER2 amplification in breast cancer'],
    },
    {
      name: 'Evading Growth Suppressors',
      description: 'Cancer cells ignore signals that should stop growth',
      mechanism: 'Tumor suppressor loss (RB, p53)',
      therapeuticTarget: 'Restore tumor suppressor function',
      examples: ['RB loss in retinoblastoma', 'p53 mutations in many cancers'],
    },
    {
      name: 'Resisting Cell Death',
      description: 'Cancer cells avoid apoptosis',
      mechanism: 'BCL-2 overexpression, p53 loss',
      therapeuticTarget: 'BH3 mimetics, restore apoptosis',
      examples: ['BCL-2 in follicular lymphoma'],
    },
    {
      name: 'Enabling Replicative Immortality',
      description: 'Cancer cells bypass senescence',
      mechanism: 'Telomerase reactivation, ALT pathway',
      therapeuticTarget: 'Telomerase inhibitors',
      examples: ['Telomerase active in 90% of cancers'],
    },
    {
      name: 'Inducing Angiogenesis',
      description: 'Tumors grow new blood vessels',
      mechanism: 'VEGF production, hypoxia response',
      therapeuticTarget: 'Anti-VEGF antibodies (bevacizumab)',
      examples: ['Angiogenesis in solid tumors'],
    },
    {
      name: 'Activating Invasion & Metastasis',
      description: 'Cancer spreads to distant sites',
      mechanism: 'EMT, matrix degradation, motility',
      therapeuticTarget: 'Limited, major research area',
      examples: ['E-cadherin loss in metastatic cancer'],
    },
    {
      name: 'Reprogramming Energy Metabolism',
      description: 'Cancer cells use glycolysis even with oxygen (Warburg effect)',
      mechanism: 'HIF activation, metabolic enzyme alterations',
      therapeuticTarget: 'Metabolic inhibitors',
      examples: ['PET scans detect increased glucose uptake'],
    },
    {
      name: 'Evading Immune Destruction',
      description: 'Cancer cells hide from immune system',
      mechanism: 'PD-L1 expression, MHC downregulation, Tregs',
      therapeuticTarget: 'Checkpoint inhibitors (pembrolizumab)',
      examples: ['Anti-PD-1 therapy in melanoma'],
    },
  ],

  geneticBasis: [
    {
      type: 'oncogene',
      gene: 'RAS',
      normalFunction: 'Signal transduction from growth factor receptors',
      alteration: 'Point mutation → constitutively active',
      consequence: 'Continuous growth signaling without external signals',
      associatedCancers: ['Pancreatic', 'Colorectal', 'Lung'],
    },
    {
      type: 'tumor-suppressor',
      gene: 'TP53',
      normalFunction: '"Guardian of genome" - arrests cell cycle for DNA repair or triggers apoptosis',
      alteration: 'Loss of function mutations',
      consequence: 'Damaged cells survive and accumulate more mutations',
      associatedCancers: ['Most human cancers (>50%)', 'Li-Fraumeni syndrome'],
    },
    {
      type: 'tumor-suppressor',
      gene: 'RB',
      normalFunction: 'Blocks G1→S transition until appropriate',
      alteration: 'Loss of both copies',
      consequence: 'Uncontrolled entry into S phase',
      associatedCancers: ['Retinoblastoma', 'Osteosarcoma'],
    },
    {
      type: 'dna-repair',
      gene: 'BRCA1/BRCA2',
      normalFunction: 'Homologous recombination repair of double-strand breaks',
      alteration: 'Inherited loss-of-function mutations',
      consequence: 'Genome instability, accumulation of mutations',
      associatedCancers: ['Breast', 'Ovarian', 'Prostate', 'Pancreatic'],
    },
  ],

  progression: [
    {
      stage: 'Normal',
      characteristics: ['Normal cell morphology', 'Regulated growth', 'Normal differentiation'],
      geneticChanges: ['None'],
      clinicalCorrelate: 'Normal tissue',
    },
    {
      stage: 'Hyperplasia',
      characteristics: ['Increased cell number', 'Normal cell appearance', 'Reversible'],
      geneticChanges: ['Growth stimulation (often not genetic)'],
      clinicalCorrelate: 'Enlarged organ/tissue',
    },
    {
      stage: 'Dysplasia',
      characteristics: ['Abnormal cell appearance', 'Disordered growth', 'Potentially reversible'],
      geneticChanges: ['Early mutations accumulating'],
      clinicalCorrelate: 'Pre-cancerous changes (e.g., cervical dysplasia)',
    },
    {
      stage: 'Carcinoma in situ',
      characteristics: ['Malignant cells', 'Confined to epithelium', 'No invasion through basement membrane'],
      geneticChanges: ['Multiple mutations', 'Still localized'],
      clinicalCorrelate: 'Early cancer, highly curable',
    },
    {
      stage: 'Invasive carcinoma',
      characteristics: ['Invasion through basement membrane', 'Local spread', 'Potential for metastasis'],
      geneticChanges: ['Full malignant phenotype'],
      clinicalCorrelate: 'Cancer requiring treatment',
    },
    {
      stage: 'Metastatic cancer',
      characteristics: ['Spread to distant sites', 'Multiple tumors', 'Most difficult to treat'],
      geneticChanges: ['Additional mutations enabling spread'],
      clinicalCorrelate: 'Advanced cancer, often incurable but treatable',
    },
  ],

  metastasisMechanisms: [
    {
      order: 1,
      name: 'Local Invasion',
      description: 'Cancer cells break through basement membrane into surrounding tissue',
      barriers: ['Basement membrane', 'Cell adhesion', 'Extracellular matrix'],
      facilitators: ['Loss of E-cadherin', 'Matrix metalloproteinases', 'EMT'],
    },
    {
      order: 2,
      name: 'Intravasation',
      description: 'Cancer cells enter blood or lymphatic vessels',
      barriers: ['Vessel wall', 'Shear stress', 'Immune cells'],
      facilitators: ['VEGF-induced leaky vessels', 'Tumor-associated macrophages'],
    },
    {
      order: 3,
      name: 'Survival in Circulation',
      description: 'Cancer cells survive transit through bloodstream',
      barriers: ['Immune attack', 'Shear stress', 'Anoikis (death from detachment)'],
      facilitators: ['Platelet coating', 'Circulating tumor cell clusters'],
    },
    {
      order: 4,
      name: 'Extravasation',
      description: 'Cancer cells exit blood vessels at distant site',
      barriers: ['Vessel wall', 'Local immune response'],
      facilitators: ['Adhesion molecules', 'Pre-metastatic niche preparation'],
    },
    {
      order: 5,
      name: 'Colonization',
      description: 'Cancer cells establish growth at new site',
      barriers: ['Hostile microenvironment', 'Immune surveillance', 'Need for new blood supply'],
      facilitators: ['Compatible "soil" (organ tropism)', 'Growth factors', 'Angiogenesis'],
    },
  ],

  clinicalEffects: [
    {
      type: 'local',
      name: 'Mass Effect',
      mechanism: 'Growing tumor compresses or invades adjacent structures',
      symptoms: ['Pain', 'Obstruction', 'Organ dysfunction', 'Bleeding'],
    },
    {
      type: 'systemic',
      name: 'Cachexia',
      mechanism: 'TNF and other cytokines cause metabolic derangement',
      symptoms: ['Weight loss', 'Muscle wasting', 'Weakness', 'Anorexia'],
    },
    {
      type: 'paraneoplastic',
      name: 'Paraneoplastic Syndromes',
      mechanism: 'Tumor secretes hormones or triggers immune response',
      symptoms: ['SIADH (lung cancer)', 'Hypercalcemia (squamous cell)', 'Lambert-Eaton (small cell)'],
    },
  ],
};

// ============================================
// Disease Mechanisms
// ============================================

export const DISEASE_MECHANISMS: DiseaseMechanism[] = [
  {
    id: 'atherosclerosis',
    name: 'Atherosclerosis',
    category: 'degenerative',
    overview: 'Progressive disease of arterial walls characterized by lipid accumulation, inflammation, and plaque formation that can lead to vessel narrowing or acute rupture.',

    etiology: [
      {
        name: 'Hyperlipidemia',
        category: 'chemical',
        mechanism: 'Elevated LDL cholesterol accumulates in arterial intima',
        examples: ['Familial hypercholesterolemia', 'High-fat diet', 'Obesity'],
        preventable: true,
      },
      {
        name: 'Endothelial Dysfunction',
        category: 'chemical',
        mechanism: 'Damaged endothelium becomes permeable and dysfunctional',
        examples: ['Hypertension', 'Smoking', 'Diabetes', 'Oxidative stress'],
        preventable: true,
      },
      {
        name: 'Inflammation',
        category: 'immunologic',
        mechanism: 'Chronic inflammatory state drives plaque progression',
        examples: ['Elevated CRP', 'IL-6', 'Chronic infections'],
        preventable: true,
      },
    ],

    pathogenesis: [
      {
        order: 1,
        name: 'Endothelial Injury',
        description: 'Hemodynamic stress and risk factors damage endothelial cells',
        cellularLevel: 'Endothelial dysfunction, increased permeability',
        molecularLevel: 'Reduced NO production, increased adhesion molecules',
        reversible: true,
      },
      {
        order: 2,
        name: 'Lipoprotein Entry',
        description: 'LDL particles enter intima and become oxidized',
        cellularLevel: 'LDL accumulates in subendothelial space',
        molecularLevel: 'LDL oxidation by ROS, forms ox-LDL',
        reversible: true,
      },
      {
        order: 3,
        name: 'Inflammatory Recruitment',
        description: 'Monocytes adhere to endothelium and enter intima',
        cellularLevel: 'Monocytes become macrophages in tissue',
        molecularLevel: 'MCP-1, VCAM-1, selectins mediate adhesion',
        reversible: true,
      },
      {
        order: 4,
        name: 'Foam Cell Formation',
        description: 'Macrophages engulf ox-LDL, becoming lipid-laden foam cells',
        cellularLevel: 'Macrophages transform into foam cells',
        molecularLevel: 'Scavenger receptors (SR-A, CD36) take up ox-LDL',
        reversible: false,
      },
      {
        order: 5,
        name: 'Fatty Streak',
        description: 'Accumulation of foam cells forms visible fatty streak',
        cellularLevel: 'Subendothelial foam cell collection',
        molecularLevel: 'Lipid accumulation, cytokine release',
        timeframe: 'Can begin in childhood',
        reversible: false,
      },
      {
        order: 6,
        name: 'Fibrous Plaque',
        description: 'Smooth muscle migration and collagen deposition form cap',
        cellularLevel: 'Smooth muscle cells migrate from media',
        molecularLevel: 'PDGF, TGF-β stimulate smooth muscle proliferation',
        reversible: false,
      },
      {
        order: 7,
        name: 'Complicated Plaque',
        description: 'Calcification, hemorrhage, ulceration, or thrombosis',
        cellularLevel: 'Plaque instability, rupture risk',
        molecularLevel: 'Matrix metalloproteinases degrade cap',
        reversible: false,
      },
    ],

    morphologicalChanges: [
      {
        level: 'gross',
        description: 'Yellow plaques in arterial intima',
        appearance: 'Raised yellow lesions, may be calcified',
        significance: 'Indicates significant atherosclerosis',
      },
      {
        level: 'microscopic',
        description: 'Foam cells, cholesterol clefts, fibrous cap',
        appearance: 'Lipid-laden macrophages, necrotic core, smooth muscle cap',
        significance: 'Thin cap increases rupture risk',
      },
    ],

    clinicalManifestations: [
      {
        type: 'symptom',
        name: 'Angina',
        mechanism: 'Coronary stenosis limits blood flow during exertion',
        timing: 'late',
        severity: 'moderate',
      },
      {
        type: 'symptom',
        name: 'Claudication',
        mechanism: 'Leg artery stenosis causes ischemia with exercise',
        timing: 'late',
        severity: 'moderate',
      },
      {
        type: 'sign',
        name: 'Diminished Pulses',
        mechanism: 'Arterial narrowing reduces pulse amplitude',
        timing: 'late',
      },
    ],

    associatedConditions: [
      'Coronary artery disease',
      'Myocardial infarction',
      'Stroke',
      'Peripheral artery disease',
      'Aortic aneurysm',
    ],

    keyMediators: [
      {
        name: 'Oxidized LDL',
        type: 'other',
        role: 'Primary driver of plaque formation',
        source: 'Oxidation of circulating LDL',
        effects: ['Foam cell formation', 'Inflammation', 'Endothelial dysfunction'],
        clinicalRelevance: 'Target of statin therapy',
      },
      {
        name: 'Matrix Metalloproteinases',
        type: 'enzyme',
        role: 'Degrade fibrous cap, increasing rupture risk',
        source: 'Macrophages in plaque',
        effects: ['Cap thinning', 'Plaque vulnerability'],
        clinicalRelevance: 'Thin cap more likely to rupture → heart attack',
      },
    ],

    diagnosticFeatures: [
      {
        name: 'Lipid Panel',
        type: 'laboratory',
        finding: 'Elevated LDL, low HDL',
        significance: 'Identifies dyslipidemia risk',
      },
      {
        name: 'Coronary Angiography',
        type: 'imaging',
        finding: 'Vessel narrowing (stenosis)',
        significance: 'Gold standard for coronary disease',
      },
      {
        name: 'Carotid Ultrasound',
        type: 'imaging',
        finding: 'Increased intima-media thickness, plaques',
        significance: 'Non-invasive assessment of arterial health',
      },
    ],

    compensatoryMechanisms: [
      'Arterial remodeling (vessel enlarges to accommodate plaque)',
      'Collateral vessel development',
    ],

    therapeuticTargets: [
      {
        target: 'LDL Cholesterol',
        mechanism: 'Reduce substrate for plaque formation',
        drugClasses: ['Statins', 'PCSK9 inhibitors', 'Ezetimibe'],
        examples: ['Atorvastatin', 'Evolocumab'],
        effectiveness: '30-50% CVD risk reduction',
      },
      {
        target: 'Platelet Aggregation',
        mechanism: 'Prevent thrombosis on ruptured plaque',
        drugClasses: ['Antiplatelet agents'],
        examples: ['Aspirin', 'Clopidogrel'],
        effectiveness: 'Prevents acute events',
      },
      {
        target: 'Blood Pressure',
        mechanism: 'Reduce hemodynamic stress on vessels',
        drugClasses: ['ACE inhibitors', 'ARBs', 'Calcium channel blockers'],
        examples: ['Lisinopril', 'Amlodipine'],
        effectiveness: 'Major CV risk reduction',
      },
    ],

    complexity: 'intermediate',
  },
];

// ============================================
// Helper Functions
// ============================================

export function getCellInjuryMechanism(id: string): CellInjuryMechanism | undefined {
  return CELL_INJURY_MECHANISMS.find(m => m.id === id);
}

export function getInflammationMechanism(type: 'acute' | 'chronic'): InflammationMechanism | undefined {
  return INFLAMMATION_MECHANISMS.find(m => m.type === type);
}

export function getHypersensitivityReaction(type: string): HypersensitivityReaction | undefined {
  return HYPERSENSITIVITY_REACTIONS.find(r => r.type === type);
}

export function getHemodynamicDisorder(id: string): HemodynamicDisorder | undefined {
  return HEMODYNAMIC_DISORDERS.find(d => d.id === id);
}

export function getDiseaseMechanism(id: string): DiseaseMechanism | undefined {
  return DISEASE_MECHANISMS.find(m => m.id === id);
}
