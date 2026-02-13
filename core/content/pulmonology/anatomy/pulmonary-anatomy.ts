/**
 * Pulmonary Anatomy
 *
 * Comprehensive anatomy of the respiratory system covering airway structures,
 * alveolar architecture, pulmonary vasculature, pleura, respiratory muscles,
 * and fundamentals of pulmonary function testing.
 */

import { EducationalContent } from '../../types';

export const pulmonaryAnatomyContent: EducationalContent = {
  id: 'pulmonology-anatomy-pulmonary',
  type: 'structure',
  name: 'Pulmonary Anatomy',
  alternateNames: ['Respiratory System Anatomy', 'Lung Anatomy'],
  fmaId: 'FMA7195',

  levels: {
    1: {
      level: 1,
      summary:
        'Your lungs are two spongy organs in your chest that help you breathe. Air travels through your nose or mouth, down your windpipe, and into your lungs where oxygen enters your blood and carbon dioxide leaves.',
      explanation: `## How Your Lungs Work

Your respiratory system is like a delivery service. It brings fresh oxygen into your body and removes waste carbon dioxide every time you breathe.

## The Path Air Takes

1. **Nose and Mouth** - Air enters here and is warmed, moistened, and filtered
2. **Throat (Pharynx)** - Shared pathway for air and food
3. **Voice Box (Larynx)** - Contains your vocal cords
4. **Windpipe (Trachea)** - A sturdy tube held open by C-shaped rings of cartilage
5. **Bronchi** - The windpipe splits into two branches, one for each lung
6. **Smaller Tubes (Bronchioles)** - Branches keep splitting into tinier tubes
7. **Air Sacs (Alveoli)** - Tiny balloon-like sacs where oxygen and carbon dioxide are exchanged

## Your Lungs

- You have two lungs: the right lung has three sections (lobes) and the left has two
- The left lung is slightly smaller to make room for your heart
- Lungs are soft and spongy because of millions of tiny air sacs

## The Diaphragm

- A large dome-shaped muscle under your lungs
- When it contracts (flattens), air is pulled in
- When it relaxes (domes up), air is pushed out

## Protective Covering

Your lungs are wrapped in a thin, slippery membrane called the pleura, which lets them slide smoothly as you breathe.

## Gas Exchange

Oxygen passes from the air sacs into tiny blood vessels, and carbon dioxide moves the opposite direction. This swap happens with every single breath.`,

      keyTerms: [
        { term: 'Lungs', definition: 'Two spongy organs in your chest used for breathing' },
        { term: 'Trachea', definition: 'The windpipe; the main tube carrying air to the lungs' },
        { term: 'Alveoli', definition: 'Tiny air sacs in the lungs where gas exchange happens' },
        { term: 'Diaphragm', definition: 'The main breathing muscle located below the lungs' },
        { term: 'Bronchi', definition: 'The two large tubes that branch off the windpipe into each lung' },
      ],
      analogies: [
        'The airway is like an upside-down tree: the trunk is your windpipe and the leaves are millions of tiny air sacs.',
        'The diaphragm works like a bellows: pulling down sucks air in, pushing up squeezes air out.',
        'Alveoli are like tiny balloons bundled together, giving your lungs a huge surface for swapping gases.',
      ],
      examples: [
        'Feeling your chest expand when you take a deep breath shows the diaphragm flattening.',
        'Fogging up a mirror with your breath demonstrates warm, moist air leaving your lungs.',
      ],
      patientCounselingPoints: [
        'Breathing through your nose filters and warms air better than mouth breathing.',
        'Your lungs have a built-in cleaning system using mucus and tiny hair-like structures called cilia.',
        'Smoking damages the tiny air sacs and the cleaning system, making breathing harder over time.',
      ],
    },

    2: {
      level: 2,
      summary:
        'The respiratory system is divided into upper and lower airways. The lower airway consists of the trachea, bronchi, bronchioles, and alveoli. The lungs are enclosed by the pleura and ventilated primarily by the diaphragm.',
      explanation: `## Upper vs. Lower Airways

**Upper Airway** (above the larynx):
- Nasal cavity and paranasal sinuses
- Pharynx (nasopharynx, oropharynx, laryngopharynx)
- Larynx (contains vocal cords and the epiglottis)

**Lower Airway** (below the larynx):
- Trachea, bronchi, bronchioles, and alveoli

## The Bronchial Tree

The trachea divides at the **carina** into the right and left main bronchi. Each main bronchus enters its lung at the **hilum**.

- **Right main bronchus** - wider, shorter, and more vertical (foreign objects more likely to enter here)
- **Left main bronchus** - narrower, longer, more horizontal

Bronchi subdivide into **lobar bronchi** (3 right, 2 left), then **segmental bronchi**, then **bronchioles**, and finally **terminal and respiratory bronchioles**.

## Alveolar Structure

- ~480 million alveoli provide approximately 70 m² of gas exchange surface
- Each alveolus is surrounded by capillaries
- The air-blood barrier is extremely thin (~0.5 micrometers)

## Pulmonary Vasculature

- **Pulmonary arteries** carry deoxygenated blood from the right ventricle to the lungs
- **Pulmonary veins** return oxygenated blood to the left atrium
- **Bronchial arteries** supply oxygen to lung tissue itself

## Pleura

- **Visceral pleura** covers the lung surface
- **Parietal pleura** lines the chest wall
- A thin layer of pleural fluid between them reduces friction

## Diaphragm and Accessory Muscles

- **Diaphragm** - primary muscle of inspiration; innervated by the phrenic nerve (C3-C5)
- **External intercostals** - elevate the ribs during inspiration
- **Accessory muscles** - sternocleidomastoid and scalenes assist during labored breathing

## Pulmonary Function Testing (PFT) Basics

- **Spirometry** measures airflow: FEV1 (air exhaled in 1 second) and FVC (total air exhaled forcefully)
- **FEV1/FVC ratio** helps distinguish obstructive from restrictive lung disease
- **Peak flow meters** are portable devices to monitor airway obstruction`,

      keyTerms: [
        { term: 'Carina', definition: 'The ridge where the trachea divides into the two main bronchi' },
        { term: 'Hilum', definition: 'The area where bronchi, vessels, and nerves enter each lung' },
        { term: 'Pleura', definition: 'Double-layered membrane surrounding each lung' },
        { term: 'Phrenic nerve', definition: 'Nerve from C3-C5 that controls the diaphragm' },
        { term: 'FEV1', definition: 'Volume of air forcefully exhaled in the first second' },
        { term: 'Spirometry', definition: 'A test that measures how much and how fast you can move air in and out of your lungs' },
      ],
      analogies: [
        'The bronchial tree branches like a real tree: the trunk (trachea) splits into limbs (bronchi), branches (bronchioles), and leaves (alveoli).',
        'The pleural space works like two wet glass slides pressed together: they slide easily but resist being pulled apart.',
      ],
      examples: [
        'A peanut aspirated into the airway most commonly lodges in the right main bronchus because it is wider and more vertical.',
        'Damage to the phrenic nerve (e.g., during cardiac surgery) can paralyze one side of the diaphragm.',
      ],
    },

    3: {
      level: 3,
      summary:
        'The tracheobronchial tree undergoes approximately 23 generations of branching. Conducting airways (generations 0-16) warm and humidify air, while respiratory zones (generations 17-23) participate in gas exchange across the alveolar-capillary membrane.',
      explanation: `## Airway Generations

~23 generations of branching: conducting zone (0-16: trachea through terminal bronchioles), transitional (17-19: respiratory bronchioles), and respiratory zone (20-23: alveolar ducts and sacs). The conducting zone is **anatomical dead space** (~150 mL).

## Bronchial Wall Composition

- **Trachea/bronchi**: cartilage rings/plates, smooth muscle, pseudostratified ciliated columnar epithelium with goblet cells
- **Bronchioles**: no cartilage, smooth muscle dominant, Club cells replace goblet cells
- **Respiratory bronchioles**: scattered alveoli appear in walls

## Alveolar Architecture

- **Type I pneumocytes** (~95% surface area): thin squamous cells for gas diffusion
- **Type II pneumocytes** (~5% surface area): cuboidal, produce **surfactant**, progenitors for Type I
- **Alveolar macrophages**: phagocytic immune defense

**Surfactant** (DPPC) reduces surface tension, preventing collapse. Deficiency causes NRDS.

## Pulmonary Vasculature

- **Low-pressure, high-compliance** system (mean PAP ~15 mmHg)
- **HPV**: arterioles constrict in low O2, redirecting blood to ventilated regions
- **Bronchial circulation**: from thoracic aorta; supplies conducting airways; partly drains to pulmonary veins (physiological shunt)

## Pleural Anatomy and Respiratory Muscles

- Pleural space: 5-15 mL serous fluid; sub-atmospheric pressure (-3 to -5 cmH2O) maintains expansion
- **Inspiration**: diaphragm descent, external intercostal rib elevation (bucket/pump-handle); accessory muscles (scalenes, SCM) in labored breathing
- **Expiration**: normally passive (elastic recoil); forced uses internal intercostals and abdominals

## Pulmonary Function Testing

- **FEV1/FVC ratio**: normal >0.70; reduced in obstruction
- **FEF25-75%**: sensitive early small airway disease marker
- **Lung volumes** (plethysmography): TLC/RV elevated in obstruction, reduced in restriction`,

      keyTerms: [
        {
          term: 'Type I pneumocyte',
          definition: 'Thin squamous alveolar cell covering ~95% of the alveolar surface; facilitates gas diffusion',
        },
        {
          term: 'Type II pneumocyte',
          definition: 'Cuboidal alveolar cell producing surfactant; progenitor for Type I cells',
        },
        {
          term: 'Surfactant',
          definition: 'Phospholipid mixture (mainly DPPC) that reduces alveolar surface tension and prevents collapse',
        },
        {
          term: 'Anatomical dead space',
          definition: 'Volume of conducting airways (~150 mL) that does not participate in gas exchange',
        },
        {
          term: 'Hypoxic pulmonary vasoconstriction',
          definition: 'Constriction of pulmonary arterioles in low-O2 regions to optimize ventilation-perfusion matching',
        },
        {
          term: 'Club cells',
          definition: 'Non-ciliated secretory cells in bronchioles (formerly Clara cells) that produce protective proteins and act as progenitors',
        },
      ],
      analogies: [
        'The 23 airway generations are like a fractal tree: each branch splits into smaller branches, dramatically increasing total cross-sectional area.',
        'Surfactant is like dish soap on water: it breaks surface tension and keeps tiny bubbles (alveoli) from collapsing into bigger ones.',
      ],
      examples: [
        'Premature infants lacking surfactant develop NRDS because alveoli collapse at end-expiration.',
        'A patient with COPD has a reduced FEV1/FVC ratio (<0.70), indicating airflow obstruction.',
        'One-lung ventilation during thoracic surgery relies on HPV to redirect blood away from the collapsed lung.',
      ],
    },

    4: {
      level: 4,
      summary:
        'The pulmonary system features a dichotomous branching airway tree, a dual blood supply (pulmonary and bronchial circulations), a surfactant-lined alveolar-capillary membrane optimized for gas diffusion, and complex neurohumoral regulation of airway caliber and vascular tone.',
      explanation: `## Advanced Airway Anatomy

### Tracheal and Bronchial Microanatomy
- Trachea: 16-20 C-shaped hyaline cartilage rings; posterior **trachealis muscle** (smooth muscle)
- Submucosal glands (serous and mucous) regulated by vagal parasympathetic innervation
- Epithelial transition: pseudostratified columnar ciliated -> simple columnar -> simple cuboidal -> squamous (Type I)

### Autonomic Control of Airway Caliber
- **Parasympathetic (vagus)**: M3 receptors -> bronchoconstriction and glandular secretion
- **Sympathetic**: beta-2 adrenergic receptors -> bronchodilation (via circulating catecholamines; no direct innervation)
- **NANC**: inhibitory (VIP, NO -> dilation) and excitatory (substance P, neurokinin A -> constriction)

## Alveolar-Capillary Membrane

Diffusion barrier layers (air to blood): surfactant -> Type I pneumocyte -> fused basement membranes -> capillary endothelium. Total thickness: **0.2-0.5 um**. Gas transfer follows **Fick's law** (proportional to area and pressure gradient, inversely proportional to thickness).

### Surfactant Biology
- Produced by Type II pneumocytes from ~24 weeks gestation; mature by ~35 weeks
- ~90% lipid (DPPC primary), ~10% protein: SP-A/SP-D (collectins, innate immunity), SP-B/SP-C (hydrophobic, film formation)
- Stored in lamellar bodies; secretion stimulated by deep breathing, beta-agonists

## Pulmonary Vascular Physiology

- mPAP: 12-16 mmHg; PVR ~1/10th systemic; recruitment/distension accommodate increased CO
- **West Zones**: Zone 1 (PA>Pa>Pv, minimal flow); Zone 2 (Pa>PA>Pv, flow varies); Zone 3 (Pa>Pv>PA, continuous flow)
- **HPV mechanism**: hypoxia inhibits K+ channels -> depolarization -> Ca2+ influx -> vasoconstriction; unique to pulmonary circulation

## Pleural Mechanics

- Fluid produced by parietal pleura, absorbed via lymphatic stomata; Starling forces govern balance
- Intrapleural pressure gradient: apex (-8 cmH2O) more negative than base (-2 cmH2O), affecting ventilation distribution

## Respiratory Muscle Physiology

- Diaphragm generates ~70% of tidal volume; zone of apposition expands lower thorax
- Fatigue involves shift from slow-twitch (Type I) to fast-twitch (Type II) fiber recruitment

## PFT: Advanced Interpretation

- **DLCO**: gas transfer efficiency; reduced in emphysema, ILD, pulmonary vascular disease
- **Flow-volume loops**: scooped (obstruction), reduced volumes (restriction), flattened (upper airway obstruction)
- **Body plethysmography**: gold standard for absolute lung volumes (TLC, RV, FRC) via Boyle's law`,

      keyTerms: [
        {
          term: 'NANC innervation',
          definition: 'Non-adrenergic non-cholinergic neural pathways using neuropeptides (VIP, NO, substance P) to modulate airway tone',
        },
        {
          term: 'West zones',
          definition: 'Model describing pulmonary blood flow distribution based on relationships among alveolar, arterial, and venous pressures',
        },
        {
          term: 'DLCO',
          definition: 'Diffusing capacity of the lung for carbon monoxide; measures efficiency of gas transfer across the alveolar-capillary membrane',
        },
        {
          term: 'Lamellar bodies',
          definition: 'Organelles in Type II pneumocytes that store and secrete surfactant',
        },
        {
          term: 'Zone of apposition',
          definition: 'Area of diaphragm directly apposed to the inner rib cage wall; contraction here expands the lower thorax',
        },
      ],
      clinicalNotes:
        'Reduced DLCO with preserved spirometry may indicate early interstitial lung disease or pulmonary vascular disease. Flow-volume loop morphology is essential for differentiating upper airway obstruction (variable vs fixed) from lower airway disease. Surfactant protein deficiencies (SP-B, SP-C mutations) cause severe neonatal and childhood ILD.',
    },

    5: {
      level: 5,
      summary:
        'Pulmonary anatomy intersects with advanced clinical practice through ventilator-lung interactions, segmental bronchial anatomy for interventional procedures, molecular surfactant biology, and evolving understanding of the pulmonary vascular endothelium in health and disease.',
      explanation: `## Surgical and Interventional Bronchial Anatomy

### Bronchopulmonary Segments
- 10 segments per lung (some classifications: 10 right, 8-10 left); each functionally independent with own segmental bronchus, artery, and intersegmental venous drainage
- Critical for: segmentectomy, bronchoscopic valve placement, bronchial thermoplasty

### Airway Dimensions
- Adult trachea: ~12 cm length, 2.0-2.5 cm diameter; subglottic region narrowest in children
- RUL bronchus takeoff ~2.5 cm from carina (landmark for double-lumen tube placement)

## Molecular Surfactant Pathology

- **SP-B deficiency** (SFTPB): autosomal recessive, lethal without transplant; absent lamellar bodies
- **SP-C mutations** (SFTPC): neonatal RDS to adult familial pulmonary fibrosis
- **ABCA3 mutations**: lipid transporter defect; overlapping SP-B phenotype
- **PAP**: surfactant accumulation from GM-CSF autoantibodies impairing macrophage clearance

## Pulmonary Vascular Endothelium

- Metabolic: ACE converts angiotensin I->II; inactivates bradykinin, serotonin, norepinephrine, prostaglandins
- Produces PGI2 and NO (vasodilation/antiplatelet)
- PAH: reduced NO/PGI2, increased ET-1; targets include PDE-5i, ERA, prostacyclins, sGC stimulators, sotatercept

## Ventilator-Lung Interactions

- Positive pressure reverses ventilation distribution (non-dependent > dependent); dependent atelectasis causes V/Q mismatch
- **VILI**: volutrauma (overdistension; 6 mL/kg PBW protective), atelectrauma (cyclic recruitment; PEEP mitigates), biotrauma (NF-kB -> IL-6/IL-8/TNF-alpha -> systemic inflammation)
- Driving pressure (Pplat - PEEP) independently predicts ARDS mortality

## Advanced PFT

- **Oscillometry**: effort-independent impedance measurement; X5 at 5 Hz reflects small airway disease
- **CPET**: VE/VCO2 slope >34 suggests pulmonary vascular limitation; used in PAH risk stratification
- **FeNO**: eosinophilic inflammation marker guiding ICS therapy in asthma`,

      keyTerms: [
        {
          term: 'Bronchopulmonary segment',
          definition: 'Functionally independent lung unit supplied by a segmental bronchus and artery; the smallest resectable anatomic unit',
        },
        {
          term: 'Driving pressure',
          definition: 'Plateau pressure minus PEEP; reflects tidal volume normalized to respiratory system compliance; independently predicts mortality in ARDS',
        },
        {
          term: 'Sotatercept',
          definition: 'Activin signaling inhibitor (activin receptor IIA-Fc fusion) targeting pulmonary vascular remodeling in PAH',
        },
        {
          term: 'Oscillometry',
          definition: 'Effort-independent technique measuring respiratory impedance (resistance and reactance) using sound waves superimposed on tidal breathing',
        },
        {
          term: 'Pulmonary alveolar proteinosis',
          definition: 'Disease characterized by surfactant accumulation in alveoli; most commonly caused by GM-CSF autoantibodies impairing macrophage surfactant clearance',
        },
      ],
      clinicalNotes:
        'Segmental anatomy knowledge is essential for bronchoscopic navigation and targeted interventions. Lung-protective ventilation (low tidal volume, adequate PEEP, driving pressure <15 cmH2O) remains the cornerstone of ARDS management. Oscillometry is increasingly incorporated into clinical practice guidelines for asthma and COPD assessment, particularly when spirometry is difficult to perform (children, elderly, acute settings). CPET-derived VE/VCO2 slope is incorporated into PAH risk stratification algorithms (ESC/ERS guidelines).',
    },
  },

  media: [
    {
      id: 'pulm-anat-bronchial-tree',
      type: 'diagram',
      filename: 'bronchial-tree-generations.svg',
      title: 'Bronchial Tree Generations',
      description: 'Airway branching from trachea through 23 generations to alveolar sacs',
    },
    {
      id: 'pulm-anat-alveolar-membrane',
      type: 'diagram',
      filename: 'alveolar-capillary-membrane.svg',
      title: 'Alveolar-Capillary Membrane',
      description: 'Gas exchange barrier layers: surfactant, Type I cell, basement membranes, endothelium',
    },
    {
      id: 'pulm-anat-west-zones',
      type: 'diagram',
      filename: 'west-zones-lung.svg',
      title: 'West Zones of the Lung',
      description: 'Zones 1-3 pressure relationships governing pulmonary blood flow distribution',
    },
  ],

  citations: [
    {
      id: 'cite-west-respiratory',
      type: 'textbook',
      title: "West's Respiratory Physiology: The Essentials",
      authors: ['John B. West', 'Andrew M. Luks'],
      source: 'Wolters Kluwer',
    },
    {
      id: 'cite-netter-atlas',
      type: 'textbook',
      title: 'Atlas of Human Anatomy',
      authors: ['Frank H. Netter'],
      source: 'Elsevier',
    },
    {
      id: 'cite-murray-nadel',
      type: 'textbook',
      title: 'Murray and Nadel\'s Textbook of Respiratory Medicine',
      authors: ['V. Courtney Broaddus', 'Joel D. Ernst', 'Talmadge E. King Jr.'],
      source: 'Elsevier',
    },
    {
      id: 'cite-amato-driving-pressure',
      type: 'article',
      title: 'Driving Pressure and Survival in ARDS',
      authors: ['Marcelo B.P. Amato', 'Maureen O. Meade', 'Arthur S. Slutsky'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMsa1410639',
    },
  ],

  crossReferences: [
    { targetId: 'pulmonology-asthma', targetType: 'topic', relationship: 'related', label: 'Asthma' },
    { targetId: 'pulmonology-copd', targetType: 'topic', relationship: 'related', label: 'COPD' },
    { targetId: 'pulmonology-pneumonia', targetType: 'topic', relationship: 'related', label: 'Pneumonia' },
  ],

  tags: {
    systems: ['respiratory'],
    structures: ['trachea', 'bronchi', 'bronchioles', 'alveoli', 'pleura', 'diaphragm'],
    topics: ['anatomy', 'physiology', 'pulmonary function testing'],
    keywords: ['airway anatomy', 'bronchial tree', 'gas exchange', 'surfactant', 'West zones'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] },
  },

  createdAt: '2026-01-30',
  updatedAt: '2026-01-30',
  version: 1,
  status: 'published',
  contributors: ['Claude Opus 4.5'],
};
