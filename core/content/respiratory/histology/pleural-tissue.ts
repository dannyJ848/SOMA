/**
 * Pleural Tissue - Respiratory Histology
 *
 * Structure of the pleura including visceral and parietal layers,
 * mesothelial cells, and pleural fluid dynamics.
 */

import { EducationalContent } from '../../types';

export const pleuralTissueContent: EducationalContent = {
  id: 'histology-pleural-tissue',
  type: 'structure',
  name: 'Pleural Tissue',
  alternateNames: ['Pleura', 'Pleural Membrane', 'Serous Membrane of Lung'],

  levels: {
    1: {
      level: 1,
      summary: 'The pleura is a thin, slippery membrane that covers the lungs and lines the chest cavity, allowing lungs to move smoothly during breathing.',
      explanation: `## What Is the Pleura?

The pleura is a thin, smooth membrane that covers your lungs and lines the inside of your chest wall. It acts like a lubricated sac that allows your lungs to slide smoothly when you breathe.

### Two Layers of Pleura

**Visceral Pleura:**
- Covers the surface of the lungs
- Sticks directly to the lung tissue
- Cannot be separated from the lung
- Contains blood vessels and nerves

**Parietal Pleura:**
- Lines the inside of the chest wall
- Covers the ribs, diaphragm, and mediastinum
- Has different names based on location:
  - Costal pleura (over ribs)
  - Diaphragmatic pleura (over diaphragm)
  - Mediastinal pleura (over mediastinum)

### The Pleural Space
- Thin space between the two pleural layers
- Contains a small amount of fluid (about 10-20 mL)
- Fluid lubricates the surfaces
- Allows smooth movement during breathing
- Normally a "potential space" - barely any gap

### Pleural Fluid
- Clear, straw-colored liquid
- Like a lubricant between the layers
- Made by the pleura itself
- Constantly produced and absorbed
- Allows lungs to expand and contract without friction

### What Can Go Wrong?

**Pleural Effusion:**
- Too much fluid builds up
- Can compress the lung
- Makes breathing difficult
- Many possible causes

**Pneumothorax:**
- Air gets into the pleural space
- Lung can collapse
- Can be spontaneous or from injury
- Medical emergency

**Pleurisy (Pleuritis):**
- Inflammation of the pleura
- Causes sharp chest pain
- Worse with breathing
- Feels like stabbing pain`,
      keyTerms: [
        { term: 'pleura', definition: 'The thin membrane that covers the lungs and lines the chest cavity' },
        { term: 'visceral pleura', definition: 'The layer of pleura that covers the lung surface' },
        { term: 'parietal pleura', definition: 'The layer of pleura that lines the chest wall' },
        { term: 'pleural space', definition: 'The thin space between visceral and parietal pleura containing lubricating fluid' },
        { term: 'pleural effusion', definition: 'Abnormal accumulation of fluid in the pleural space' },
      ],
      analogies: [
        'The pleura is like a wet plastic bag - two layers that slide smoothly against each other.',
        'Pleural fluid is like oil in a car engine - it reduces friction between moving parts.',
        'The pleural space is like a vacuum-sealed bag - the negative pressure keeps the lung expanded.',
      ],
      examples: [
        'In pneumonia, fluid can leak into the pleural space causing a parapneumonic effusion.',
        'A chest wall injury can let air into the pleural space, causing a pneumothorax and collapsed lung.',
      ],
    },
    2: {
      level: 2,
      summary: 'The pleura consists of a single layer of mesothelial cells resting on connective tissue. The visceral pleura covers the lung while parietal pleura lines the thoracic cavity. Pleural fluid is produced by parietal pleura and absorbed by visceral pleura and lymphatics.',
      explanation: `## Pleural Histology

### Mesothelial Cells

**Structure:**
- Single layer of flat to cuboidal cells
- Microvilli on apical surface
- Connected by tight junctions
- Rest on basement membrane

**Functions:**
- Produce glycosaminoglycans for lubrication
- Phagocytic activity
- Synthesis and repair of pleural membrane
- Transport of fluid and solutes

### Connective Tissue Layer

**Beneath Mesothelium:**
- Collagen fibers
- Elastic fibers
- Blood vessels
- Lymphatics
- Nerves (parietal pleura only)

### Visceral Pleura

**Anatomy:**
- Intimately attached to lung parenchyma
- Extends into fissures
- Cannot be separated from lung
- Supplied by pulmonary circulation
- Innervated by autonomic nerves (insensitive to pain)

**Layers:**
1. Mesothelial layer
2. Connective tissue with elastic fibers
3. Interstitial layer with blood vessels

### Parietal Pleura

**Divisions:**
- **Costal:** Over ribs and intercostal spaces
- **Diaphragmatic:** Over diaphragm
- **Mediastinal:** Over mediastinum
- **Cervical (cupula):** Above first rib

**Characteristics:**
- Thicker than visceral pleura
- Supplied by systemic circulation
- Innervated by somatic nerves (pain-sensitive)
- Produces pleural fluid

### Pleural Fluid Dynamics

**Production:**
- Mainly by parietal pleura
- Passive filtration from capillaries
- Normal volume: 0.1-0.2 mL/kg
- Turnover: 1-2 liters per day

**Absorption:**
- Visceral pleura (minor role)
- Lymphatic stomata in parietal pleura
- Predominantly costal and diaphragmatic regions
- Rate: 0.3-0.8 mL/kg/hour

**Composition:**
- Protein: 1-2 g/dL (low)
- LDH: <2/3 serum level
- Glucose: Similar to serum
- pH: 7.60-7.66
- Specific gravity: <1.015

### Pleural Space Physiology

**Negative Pressure:**
- Intrapleural pressure: -5 cm H2O at rest
- Becomes more negative during inspiration
- Maintains lung expansion
- Prevents lung collapse

**Compliance:**
- Low compliance (resists expansion)
- High elastance (returns to original shape)
- Couples lung and chest wall mechanics`,
      keyTerms: [
        { term: 'mesothelial cells', definition: 'Specialized epithelial-like cells lining serous cavities including pleura' },
        { term: 'glycosaminoglycans', definition: 'Long unbranched polysaccharides that lubricate pleural surfaces' },
        { term: 'lymphatic stomata', definition: 'Small openings in mesothelium allowing fluid entry into lymphatics' },
        { term: 'parietal pleura', definition: 'Pleural layer lining the thoracic wall; pain-sensitive' },
        { term: 'visceral pleura', definition: 'Pleural layer covering the lung; receives pulmonary circulation' },
      ],
      analogies: [
        'Mesothelial cells are like tiles on a bathroom wall - flat cells that form a smooth, watertight surface.',
        'Lymphatic stomata are like drains in a shower - they let fluid escape so it does not build up.',
        'Pleural fluid turnover is like a fountain - constantly flowing in and out to keep fresh lubricant.',
      ],
      examples: [
        'In heart failure, increased hydrostatic pressure causes transudative pleural effusions.',
        'Malignant pleural mesothelioma arises from mesothelial cells, usually after asbestos exposure.',
      ],
    },
    3: {
      level: 3,
      summary: 'Pleural histology includes understanding mesothelial cell ultrastructure, pleural lymphatic drainage, microvascular anatomy, and mechanisms of pleural fluid formation and absorption.',
      explanation: `## Mesothelial Cell Ultrastructure

### Surface Features
**Microvilli:**
- 3-4 micrometers long
- Increase surface area
- Trap hyaluronic acid
- Enhance lubrication
- More numerous on parietal pleura

**Cilia:**
- Rare in normal pleura
- May increase in inflammation
- Help move fluid

### Cytoplasmic Features
**Organelles:**
- Well-developed rough ER
- Prominent Golgi apparatus
- Secretory granules
- Desmosomes and tight junctions
- Intermediate filaments

**Functions:**
- Secretion of surfactant
- Phagocytosis of particles
- Antigen presentation
- Inflammatory mediator production
- Fibrinolysis

### Pleural Microvasculature

**Parietal Pleura:**
- Systemic capillaries
- High pressure (30 mmHg)
- Filtration site
- Arterial supply from intercostal, internal mammary, musculophrenic

**Visceral Pleura:**
- Pulmonary capillaries
- Low pressure (10 mmHg)
- Minor role in fluid turnover
- Dual supply: pulmonary and bronchial

### Lymphatic Drainage

**Lymphatic Stomata:**
- 2-6 micrometers in diameter
- Found on parietal pleura only
- Clustered over ribs and diaphragm
- One-way valves
- Connect to lymphatic lacunae

**Drainage Pathways:**
- Costal pleura: Parasternal, intercostal nodes
- Diaphragmatic pleura: Mediastinal, paraaortic nodes
- Mediastinal pleura: Tracheobronchial, mediastinal nodes

### Pleural Fluid Formation and Absorption

**Starling Forces:**

**Formation (Parietal):**
- Capillary hydrostatic pressure: +30 mmHg
- Plasma oncotic pressure: -25 mmHg
- Interstitial hydrostatic: -5 mmHg
- Interstitial oncotic: +8 mmHg
- Net filtration: ~8 mmHg

**Absorption (Visceral):**
- Low hydrostatic pressure favors reabsorption
- Mainly via lymphatics
- Can reverse with increased permeability

### Pleural Immunology

**Resident Cells:**
- Mesothelial cells
- Macrophages
- Mast cells
- Lymphocytes
- Fibroblasts

**Defense Mechanisms:**
- Mucosal IgA production
- Complement activation
- Cytokine production
- Phagocytosis
- Fibrinolytic activity

### Innervation

**Parietal Pleura:**
- Somatic innervation
- Intercostal nerves (costal)
- Phrenic nerve (mediastinal, central diaphragmatic)
- Pain-sensitive
- Referred pain patterns

**Visceral Pleura:**
- Autonomic innervation
- Pulmonary plexus
- Insensitive to pain
- Stretch receptors only

### Pleural Permeability

**Normal Barrier:**
- Restricts large molecules
- Allows small solutes
- Semi-permeable membrane
- Surface area: ~2000 cm2

**Increased Permeability:**
- Inflammation
- Infection
- Malignancy
- Capillary leak
- Protein-rich effusions`,
      keyTerms: [
        { term: 'Starling forces', definition: 'Hydrostatic and oncotic pressures governing fluid movement across capillaries' },
        { term: 'hyaluronic acid', definition: 'Glycosaminoglycan in pleural fluid providing lubrication' },
        { term: 'lymphatic lacunae', definition: 'Enlarged lymphatic channels beneath stomata' },
        { term: 'fibrinolysis', definition: 'Breakdown of fibrin by plasmin; keeps pleural space clear' },
        { term: 'pleural stomata', definition: 'Openings in mesothelium connecting pleural space to lymphatics' },
      ],
      clinicalNotes: 'The parietal pleura, not the visceral pleura, is the primary site of fluid production. The costal parietal pleura is also the primary site of fluid absorption via lymphatic stomata, explaining why loculated effusions often form in dependent areas.',
    },
    4: {
      level: 4,
      summary: 'Advanced pleural histology covers pathological changes in pleural diseases, pleural effusion classification, mesothelioma pathology, pleural biopsy interpretation, and mechanisms of pleural fibrosis.',
      explanation: `## Pleural Pathology

### Pleural Effusion Types

**Transudate:**
- Light\'s criteria negative
- Low protein (<3 g/dL)
- Low LDH (<2/3 serum)
- Clear, straw-colored
- Causes: CHF, cirrhosis, nephrotic syndrome

**Exudate:**
- Light\'s criteria positive
- High protein (>3 g/dL)
- High LDH
- Often turbid
- Causes: Infection, malignancy, inflammation

**Empyema:**
- Frank pus in pleural space
- Neutrophilic infiltration
- Fibrin deposition
- Loculation common
- Requires drainage

### Mesothelioma

**Epidemiology:**
- Asbestos exposure (70-80%)
- Latency 20-40 years
- Male predominance
- Rising incidence globally

**Histological Types:**

**Epithelioid (60%):**
- Tubulopapillary pattern
- Solid sheets
- Deciduoid variant
- Best prognosis

**Sarcomatoid (15%):**
- Spindle cells
- Resembles sarcoma
- Worst prognosis

**Biphasic (25%):**
- Both patterns
- >10% of each component
- Intermediate prognosis

**Immunohistochemistry:**
- Positive: Calretinin, WT-1, CK5/6, mesothelin
- Negative: CEA, Ber-EP4, TTF-1, B72.3

### Pleural Biopsy Interpretation

**Abrams Needle Biopsy:**
- Blind technique
- Diagnostic yield: 60-70%
- Complications: Pneumothorax, bleeding

**Medical Thoracoscopy:**
- Direct visualization
- Targeted biopsies
- Yield: 90-95%
- Can perform talc pleurodesis

**Specimen Handling:**
- Fix in formalin
- Multiple sections
- Immunohistochemistry essential
- Electron microscopy if needed

### Pleural Inflammation

**Acute Pleuritis:**
- Fibrinous exudate
- Neutrophil infiltration
- Congested vessels
- Seen in pneumonia, infarction

**Chronic Pleuritis:**
- Mononuclear infiltrate
- Fibrosis
- Adhesions
- Calcification (old TB, asbestos)

**Granulomatous Pleuritis:**
- Caseating granulomas (TB)
- Non-caseating (sarcoidosis, fungal)
- Epithelioid histiocytes
- Multinucleated giant cells

### Pleural Fibrosis

**Pathogenesis:**
- Fibrin deposition
- Fibroblast proliferation
- Collagen deposition
- Pleural thickening
- Restrictive physiology

**Causes:**
- Hemothorax organization
- Empyema
- Asbestos exposure
- Collagen vascular disease
- Previous pleurodesis

**Diffuse Pleural Thickening:**
- Extensive fibrosis
- Often bilateral
- Asbestos-related
- Restrictive lung function

### Pleural Tumors

**Primary:**
- Solitary fibrous tumor (benign)
- Malignant mesothelioma
- Localized mesothelioma (rare)

**Secondary (Metastatic):**
- Lung cancer (most common)
- Breast cancer
- Lymphoma
- Ovarian cancer
- Gastric cancer

**Cytology:**
- Sensitivity: 60% for malignancy
- Higher for adenocarcinoma
- Lower for mesothelioma
- Immunocytochemistry helpful

### Vasculitis and Pleura

**Rheumatoid Pleuritis:**
- Necrotizing granulomas
- High pleural fluid rheumatoid factor
- Low glucose, low pH
- Chronic course

**Systemic Lupus Erythematosus:**
- Small vessel vasculitis
- Immune complex deposition
- LE cells occasionally seen
- Often responsive to steroids

### Special Stains and Markings

**Cytology:**
- Papanicolaou stain
- Diff-Quik for rapid assessment
- Cell block for immunohistochemistry

**Histology:**
- H&E for general structure
- Special stains for organisms
- Elastic stains for architecture
- Trichrome for collagen

**Immunohistochemistry Panel:**
- Mesothelioma markers: Calretinin, WT-1, D2-40
- Carcinoma markers: CEA, MOC-31, Ber-EP4
- Site-specific: TTF-1 (lung), GATA3 (breast), PAX8 (renal/ovarian)`,
      keyTerms: [
        { term: 'Light\'s criteria', definition: 'Rules distinguishing transudative from exudative pleural effusions' },
        { term: 'empyema', definition: 'Collection of pus in the pleural space' },
        { term: 'pleurodesis', definition: 'Procedure to obliterate pleural space and prevent fluid reaccumulation' },
        { term: 'tubulopapillary', definition: 'Growth pattern with tubular and papillary structures' },
        { term: 'calretinin', definition: 'Calcium-binding protein immunohistochemical marker for mesothelioma' },
      ],
      clinicalNotes: 'The diagnosis of malignant mesothelioma requires immunohistochemical confirmation. A panel including both positive (calretinin, WT-1, D2-40) and negative (CEA, Ber-EP4, MOC-31) markers is essential to distinguish from metastatic adenocarcinoma.',
    },
    5: {
      level: 5,
      summary: 'Expert pleural histology encompasses molecular mechanisms of mesothelioma, biomarker development, advanced diagnostic techniques, pleural fluid analysis innovations, and emerging therapies for pleural diseases.',
      explanation: `## Molecular Pathology of Mesothelioma

**Genetic Alterations:**
- Loss of BAP1 (50-70%)
- CDKN2A deletion (70-80%)
- NF2 mutations (40-50%)
- TP53 mutations (common)
- Chromosomal aneuploidy

**Molecular Subtypes:**
- Epithelioid transcriptome signatures
- Sarcomatoid de-differentiation
- Immune microenvironment heterogeneity
- Prognostic molecular classifications

### Biomarker Development

**Diagnostic Biomarkers:**

**Soluble Mesothelin-Related Peptides (SMRP):**
- Elevated in mesothelioma
- Sensitivity: 50-70%
- Specificity: 80-90%
- False positives: Renal failure, pleuritis

**Fibulin-3:**
- Elevated in mesothelioma
- Plasma and pleural fluid
- Complements mesothelin

**HMGB1:**
- Hyperacetylated form specific
- Early diagnostic potential
- Distinguishes asbestos-exposed

**Prognostic Biomarkers:**
- Serum mesothelin trajectory
- Plasma osteopontin
- MicroRNA signatures
- Circulating tumor DNA

### Advanced Diagnostic Techniques

**Next-Generation Sequencing:**
- BAP1 mutation detection
- CDKN2A homozygous deletion
- Actionable mutations (rare)
- Clinical trial enrollment

**Fluorescence In Situ Hybridization (FISH):**
- 9p21 (CDKN2A) deletion
- p16 immunohistochemistry surrogate
- Diagnostic adjunct

**Liquid Biopsy:**
- Circulating tumor cells
- Cell-free DNA analysis
- Exosome characterization
- Minimally invasive monitoring

### Pleural Fluid Analysis Advances

**Biomarker Panels:**
- Proteomic profiling
- Metabolomic signatures
- Cytokine arrays
- Integrated scoring systems

**Flow Cytometry:**
- Lymphocyte subsets
- Clonality assessment
- Lymphoma diagnosis
- Immunophenotyping

**Digital Pathology:**
- Automated cell counting
- Image analysis algorithms
- Machine learning classification
- Telepathology consultation

### Thoracoscopy and Imaging

**Autofluorescence:**
- Abnormal patterns in malignancy
- Targeted biopsy guidance
- Real-time assessment

**Narrow Band Imaging:**
- Enhanced vascular patterns
- Early cancer detection
- Improved visualization

**Optical Coherence Tomography:**
- Cross-sectional imaging
- Depth-resolved structure
- Optical biopsy potential
- Research application

### Pleural Disease Mechanisms

**Inflammation and Fibrosis:**
- TGF-beta signaling
- SMAD pathways
- Myofibroblast differentiation
- Matrix remodeling

**Angiogenesis:**
- VEGF in malignant effusions
- Anti-angiogenic therapy
- Pleural fluid formation
- Targeted agents

**Immune Microenvironment:**
- Tumor-infiltrating lymphocytes
- PD-L1 expression
- Immune checkpoint inhibitors
- Combination strategies

### Emerging Therapies

**Intrapleural Therapies:**
- Gene therapy
- Oncolytic viruses
- Immunotherapy instillation
- Targeted drug delivery

**Nanotechnology:**
- Drug delivery systems
- Imaging agents
- Theranostic applications
- Pleural retention enhancement

**Tissue Engineering:**
- Pleural regeneration
- Scaffold materials
- Mesothelial cell seeding
- Anti-adhesion barriers

### Research Frontiers

**Organoids:**
- Mesothelioma cell lines
- Patient-derived models
- Drug screening
- Personalized therapy

**Spatial Transcriptomics:**
- Tumor heterogeneity
- Microenvironment mapping
- Biomarker discovery
- Treatment prediction

**Artificial Intelligence:**
- Radiographic diagnosis
- Pathology interpretation
- Risk stratification
- Treatment planning

### Quality and Standardization

**Pathology Reporting:**
- International guidelines
- Standardized templates
- synoptic reports
- Multidisciplinary integration

**Biobanking:**
- Specimen collection protocols
- Quality control
- Molecular preservation
- Research accessibility

### Clinical Integration

**Molecular Tumor Boards:**
- NGS result interpretation
- Clinical trial matching
- Treatment recommendations
- Multidisciplinary approach

**Personalized Medicine:**
- Biomarker-driven therapy
- Resistance monitoring
- Dynamic risk assessment
- Patient-centered outcomes`,
      keyTerms: [
        { term: 'BAP1', definition: 'BRCA1 associated protein 1; tumor suppressor frequently mutated in mesothelioma' },
        { term: 'SMRP', definition: 'Soluble mesothelin-related peptides; biomarker for mesothelioma' },
        { term: 'liquid biopsy', definition: 'Analysis of circulating tumor components in blood or fluid' },
        { term: 'theranostic', definition: 'Combined therapeutic and diagnostic approach' },
        { term: 'spatial transcriptomics', definition: 'Mapping gene expression while preserving tissue architecture' },
      ],
      clinicalNotes: `Key advances in pleural pathology:

1. **BAP1 testing:** Loss of BAP1 nuclear staining by immunohistochemistry is a reliable diagnostic marker for malignant mesothelioma, distinguishing it from reactive mesothelial hyperplasia.

2. **CDKN2A homozygous deletion:** FISH detection of 9p21 deletion is highly specific for malignancy and can resolve difficult diagnostic cases.

3. **Biomarker panels:** Combining mesothelin, fibulin-3, and HMGB1 improves diagnostic accuracy over any single marker.

4. **Immunotherapy:** PD-1/PD-L1 inhibitors show promise in malignant mesothelioma, with PD-L1 expression helping guide patient selection.

5. **Liquid biopsies:** Circulating tumor DNA analysis may enable minimally invasive diagnosis and monitoring of treatment response.

6. **Digital pathology:** AI-powered image analysis is being developed to assist in cytological diagnosis of malignant pleural effusions.

7. **Intrapleural therapies:** Direct instillation of therapeutics into the pleural space offers high local concentration with reduced systemic toxicity.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'light-pleural-effusion',
      type: 'article',
      title: 'Pleural Effusions: The Diagnostic Separation of Transudates and Exudates',
      authors: ['Light RW', 'Macgregor MI', 'Luchsinger PC', 'Ball WC'],
      source: 'Annals of Internal Medicine',
    },
    {
      id: 'mesothelioma-who',
      type: 'textbook',
      title: 'WHO Classification of Tumours of the Pleura',
      authors: ['Galateau-Salle F', 'Churg A', 'Roggli V', 'Travis WD'],
      source: 'WHO Classification of Tumours',
    },
  ],

  crossReferences: [
    { targetId: 'histology-pulmonary-vessels', targetType: 'structure', relationship: 'related', label: 'Pulmonary Vessels' },
    { targetId: 'pathology-pulmonary-fibrosis', targetType: 'condition', relationship: 'related', label: 'Pulmonary Fibrosis' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['histology', 'pathology', 'pulmonology'],
    keywords: ['pleura', 'mesothelioma', 'pleural effusion', 'mesothelial cells', 'histology'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pathology'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default pleuralTissueContent;
