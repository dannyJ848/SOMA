/**
 * Pulmonary Vessels - Respiratory Histology
 *
 * Structure of pulmonary arteries, veins, and bronchial circulation
 * including differences from systemic vessels and pathological changes.
 */

import { EducationalContent } from '../../types';

export const pulmonaryVesselsContent: EducationalContent = {
  id: 'histology-pulmonary-vessels',
  type: 'structure',
  name: 'Pulmonary Vessels',
  alternateNames: ['Pulmonary Circulation', 'Pulmonary Arteries and Veins', 'Lung Vasculature'],

  levels: {
    1: {
      level: 1,
      summary: 'Pulmonary vessels are the blood vessels that carry blood to and from the lungs - arteries bring deoxygenated blood to the lungs and veins return oxygenated blood to the heart.',
      explanation: `## What Are Pulmonary Vessels?

Pulmonary vessels are the blood vessels that form a special circulation just for the lungs. Unlike other parts of the body, the pulmonary arteries carry blood that needs oxygen, and the pulmonary veins carry oxygen-rich blood back to the heart.

### Two Types of Circulation in the Lungs

**Pulmonary Circulation:**
- Pulmonary arteries: Carry oxygen-poor blood from the heart to the lungs
- Pulmonary veins: Carry oxygen-rich blood from the lungs back to the heart
- This is where gas exchange happens
- Large surface area for oxygen absorption

**Bronchial Circulation:**
- Bronchial arteries: Bring oxygen-rich blood to nourish lung tissue
- Bronchial veins: Drain some of this blood
- Like regular body circulation
- Supports the airways and lung structure

### Pulmonary Arteries
- Start from the right side of the heart
- Branch into smaller and smaller vessels
- Walls are thinner than regular arteries
- Carry blood under lower pressure
- End in tiny capillaries around alveoli

### Pulmonary Veins
- Collect oxygenated blood from alveolar capillaries
- Merge into larger veins
- Return blood to the left side of the heart
- Walls are also thinner than regular veins
- No valves (unlike other veins)

### Pulmonary Capillaries
- Tiny vessels surrounding alveoli
- Walls are only one cell thick
- Allow oxygen and carbon dioxide to pass through
- Form dense network around air sacs
- Where the actual gas exchange occurs

### Special Features
- Pulmonary vessels are different from body vessels
- Thinner walls because pressure is lower
- Can stretch more to accommodate blood flow
- Very sensitive to oxygen levels in blood`,
      keyTerms: [
        { term: 'pulmonary arteries', definition: 'Blood vessels carrying oxygen-poor blood from the heart to the lungs' },
        { term: 'pulmonary veins', definition: 'Blood vessels carrying oxygen-rich blood from the lungs to the heart' },
        { term: 'pulmonary capillaries', definition: 'Tiny blood vessels surrounding alveoli where gas exchange occurs' },
        { term: 'bronchial arteries', definition: 'Blood vessels supplying oxygen and nutrients to lung tissue' },
        { term: 'gas exchange', definition: 'The process where oxygen enters blood and carbon dioxide leaves' },
      ],
      analogies: [
        'Pulmonary circulation is like a car wash - dirty blood goes in, gets cleaned (oxygenated), and clean blood comes out.',
        'Pulmonary vessels are like garden hoses that are thin and flexible rather than rigid pipes.',
        'Capillaries around alveoli are like a dense fishing net wrapped around each air sac.',
      ],
      examples: [
        'In pulmonary hypertension, the pulmonary arteries become thickened and stiff, making it hard for blood to flow.',
        'In a pulmonary embolism, a blood clot blocks a pulmonary artery, preventing blood from reaching part of the lung.',
      ],
    },
    2: {
      level: 2,
      summary: 'Pulmonary arteries have thinner walls with less smooth muscle than systemic arteries, reflecting low-pressure circulation. Pulmonary veins lack valves. The bronchial circulation provides systemic blood supply to lung parenchyma and airways.',
      explanation: `## Pulmonary Artery Structure

### Histological Layers (Tunica)

**Intima:**
- Endothelium (single layer)
- Thin basement membrane
- Minimal subendothelial connective tissue
- Longitudinal elastic fibers in large arteries

**Media:**
- Much thinner than systemic arteries
- Circular smooth muscle
- Elastic fibers (more in large vessels)
- No external elastic lamina (distinctive feature)

**Adventitia:**
- Connective tissue
- Contains vasa vasorum (in larger vessels)
- Nerve fibers
- Lymphatics

### Size-Based Classification

**Elastic Pulmonary Arteries (>1 mm):**
- Pulmonary trunk, main pulmonary arteries
- Lobar and segmental arteries
- Multiple elastic laminae
- Similar to aorta but thinner

**Muscular Pulmonary Arteries (0.1-1 mm):**
- Pre-acinar vessels
- Well-developed media
- Internal and external elastic laminae
- Structure more like systemic arteries

**Arterioles (<0.1 mm):**
- Partial muscular layer or none
- Single elastic lamina
- Pre-capillary sphincters

### Pulmonary Veins

**Structure:**
- Thin walls
- No valves (unique among veins)
- Interlobular and peribronchial locations
- Variable layers - sometimes 3, sometimes 2

**Layers:**
- Intima: Endothelium, thin connective tissue
- Media: Scant smooth muscle, connective tissue
- Adventitia: Thickest layer, collagen

### Bronchial Circulation

**Bronchial Arteries:**
- Systemic circulation origin
- Usually 2 left, 1 right
- Supply bronchi, vessels, pleura
- Arise from aorta or intercostal arteries

**Microscopic Features:**
- Standard systemic arterial structure
- Thicker walls than pulmonary arteries
- Higher pressure system
- Anastomoses with pulmonary circulation

**Bronchial Veins:**
- Drain part of bronchial blood
- Partial drainage into pulmonary veins (shunt)
- Remainder to azygos/hemiazygos

### Pulmonary Capillaries

**Structure:**
- Continuous endothelium
- Basement membrane fused with alveolus
- Forms blood-air barrier
- Extensive surface area (70-100 m2)
- Sheet-like flow pattern

**Special Features:**
- Very thin (0.5 micrometers)
- Allows rapid gas diffusion
- Minimal diffusion barrier
- Fenestrations absent (unlike other capillaries)

### Comparison with Systemic Vessels

| Feature | Pulmonary | Systemic |
|---------|-----------|----------|
| Pressure | Low (25/8 mmHg) | High (120/80 mmHg) |
| Wall thickness | Thin | Thick |
| Smooth muscle | Less | More |
| Compliance | High | Lower |
| Response to hypoxia | Vasoconstriction | Vasodilation |

### Lymphatic Vessels

**Structure:**
- Thin-walled, valve-containing
- Present in pleura, interlobular septa
- Bronchial associated
- Drain to hilar lymph nodes

**Function:**
- Fluid drainage
- Immune surveillance
- Particulate clearance
- Returns to systemic circulation`,
      keyTerms: [
        { term: 'tunica media', definition: 'Middle layer of blood vessel wall containing smooth muscle' },
        { term: 'elastic lamina', definition: 'Layer of elastic tissue in vessel walls' },
        { term: 'vasa vasorum', definition: 'Small vessels supplying the walls of larger vessels' },
        { term: 'anastomosis', definition: 'Connection between two blood vessels' },
        { term: 'hypoxic vasoconstriction', definition: 'Constriction of pulmonary vessels in response to low oxygen' },
      ],
      analogies: [
        'Pulmonary artery walls are like a thin balloon - they expand easily under low pressure.',
        'Systemic arteries are like a garden hose - thick and rigid to handle high pressure.',
        'Pulmonary capillaries are like a single sheet of plastic wrap - extremely thin for gas exchange.',
      ],
      examples: [
        'In pulmonary hypertension, the normally thin pulmonary artery walls become thickened with increased smooth muscle.',
        'The bronchial circulation can enlarge in chronic inflammation, contributing to hemoptysis (coughing blood).',
      ],
    },
    3: {
      level: 3,
      summary: 'Pulmonary vascular histology includes understanding the unique responses to hypoxia, remodeling in hypertension, ultrastructural features of capillaries, and the dual circulation\'s integration in lung function.',
      explanation: `## Pulmonary Vascular Ultrastructure

### Endothelial Cell Specialization

**Pulmonary Arterial Endothelium:**
- Weibel-Palade bodies (von Willebrand factor)
- Cytoskeletal arrangement for flow sensing
- Nitric oxide synthase expression
- Low angiotensin-converting enzyme

**Pulmonary Capillary Endothelium:**
- Continuous type (non-fenestrated)
- Caveolae for transport
- Minimal pinocytosis
- Tight junctions

**Venous Endothelium:**
- Similar to arterial but flatter
- Valve endothelial differentiation
- Lymphatic endothelium (podoplanin+)

### Hypoxic Pulmonary Vasoconstriction (HPV)

**Mechanism:**
- Oxygen sensing in smooth muscle
- Inhibition of voltage-gated potassium channels
- Membrane depolarization
- Calcium influx
- Vasoconstriction

**Purpose:**
- Diverts blood away from hypoxic alveoli
- Optimizes V/Q matching
- Localized response
- Rapid onset (seconds)

**Molecular Mediators:**
- Endothelin-1 (vasoconstrictor)
- Nitric oxide (vasodilator)
- Prostacyclin (vasodilator)
- Reactive oxygen species

### Pulmonary Vascular Remodeling

**Hypertensive Changes:**

**Grade 1 (Medial Hypertrophy):**
- Smooth muscle thickening
- Extension into normally non-muscular vessels
- Cellular hypertrophy and hyperplasia
- Reversible with treatment

**Grade 2 (Cellular Intimal Proliferation):**
- Concentric intimal thickening
- Myofibroblast accumulation
- Onion-skin appearance
- Lumen narrowing

**Grade 3 (Fibrotic Intimal Proliferation):**
- Dense fibrous tissue
- Little cellularity
- Severe lumen reduction
- Irreversible changes

**Grade 4 (Complex Lesions):**
- Plexiform lesions
- Dilatation lesions
- Fibrinoid necrosis
- Obliteration

### Plexiform Lesion

**Structure:**
- Characteristic of severe PAH
- Disorganized capillary proliferation
- Channels within dilated artery
- Focal dilatation beyond obstruction

**Pathogenesis:**
- Shear stress response
- Monoclonal endothelial proliferation
- Angiogenic phenotype
- Poor prognostic marker

### Bronchial-Pulmonary Anastomoses

**Normal Anatomy:**
- Pre-capillary connections
- 15-30 micrometers diameter
- Protective role
- Expand in disease

**Clinical Significance:**
- Shunt physiology
- Hemoptysis source
- Regional blood flow redistribution
- Embolization target

### Pericytes

**Location:**
- Capillary and venular walls
- Embedded in basement membrane
- Contractile cells

**Functions:**
- Vessel stability
- Blood flow regulation
- Barrier maintenance
- Stem cell properties

### Vasa Vasorum

**Pulmonary Arteries:**
- Present in vessels >1 mm
- Origin from bronchial or pulmonary arteries
- Supply outer two-thirds of wall
- Extend to adventitia

**Significance:**
- Nourishes thick-walled vessels
- Expands in remodeling
- Source of inflammatory cells
- Target for therapy

### Vascular Development

**Embryology:**
- Arise from sixth aortic arch
- Distal angiogenesis
- Parallel airway branching
- Alveolar capillary development

**Postnatal Remodeling:**
- Rapid adaptation to air breathing
- Reduction in medial thickness
- Muscularization changes
- Continues into childhood

### Vascular Immunology

**Endothelial Activation:**
- Adhesion molecule expression
- Cytokine production
- Antigen presentation
- Leukocyte recruitment

**Inflammatory Cells:**
- Mast cells in adventitia
- Dendritic cells
- Macrophages
- T lymphocytes`,
      keyTerms: [
        { term: 'plexiform lesion', definition: 'Disorganized capillary proliferation within dilated pulmonary artery; hallmark of severe PAH' },
        { term: 'hypoxic pulmonary vasoconstriction', definition: 'Vasoconstrictor response to alveolar hypoxia; diverts blood to ventilated areas' },
        { term: 'Weibel-Palade bodies', definition: 'Storage granules in endothelial cells containing von Willebrand factor' },
        { term: 'vasa vasorum', definition: 'Vessels that supply the walls of larger blood vessels' },
        { term: 'pericytes', definition: 'Contractile cells surrounding capillaries and venules' },
      ],
      clinicalNotes: 'The plexiform lesion is pathognomonic for severe pulmonary arterial hypertension. These lesions represent disorganized angiogenic proliferation within the lumen of muscular pulmonary arteries and indicate advanced, often irreversible disease.',
    },
    4: {
      level: 4,
      summary: 'Advanced pulmonary vascular histology covers the spectrum of pulmonary hypertension classifications, vascular pathology in various lung diseases, tumor vasculature, and histological assessment for clinical management.',
      explanation: `## Pulmonary Hypertension Classification

### Group 1: Pulmonary Arterial Hypertension (PAH)

**Idiopathic PAH:**
- Plexiform lesions
- Medial hypertrophy
- Intimal fibrosis
- Necrotizing arteritis (rare)

**Heritable PAH:**
- BMPR2 mutations (most common)
- ALK1, ENG, CAV1, KCNK3
- Similar histology to idiopathic

**Associated PAH:**
- Connective tissue disease
- HIV infection
- Portal hypertension
- Congenital heart disease
- Schistosomiasis

### Group 2: PH due to Left Heart Disease

**Histological Features:**
- Pulmonary venous changes
- Capillary proliferation
- Interstitial edema
- Hemosiderin-laden macrophages
- Arterialization of veins

**Pulmonary Veno-Occlusive Disease (PVOD):**
- Fibrous occlusion of venules
- Septal capillary proliferation
- Patchy distribution
- Interlobular vein involvement
- Edema, hemorrhage

### Group 3: PH due to Lung Disease

**COPD:**
- Intimal thickening
- Medial hypertrophy
- Rare plexiform lesions
- Correlates with hypoxemia

**Interstitial Lung Disease:**
- Variable changes
- Pulmonary vein involvement
- Capillary loss
- Fibrotic obliteration

### Group 4: Chronic Thromboembolic PH

**Organized Thrombi:**
- Recanalization channels
- Fibrous webs
- Intimal thickening
- Distal microvascular disease

**Histological Grading:**
- Type A: Fresh thrombus
- Type B: Organized thrombus
- Type C: Complete recanalization

### Group 5: PH with Unclear Mechanisms

**Sarcoidosis:**
- Granulomatous compression
- Direct vascular invasion
- Fibrosis

**Langerhans Cell Histiocytosis:**
- Nodular proliferation
- Cystic destruction
- Peribronchiolar involvement

### Vascular Tumors

**Capillary Hemangioma:**
- Benign proliferation
- Well-circumscribed
- Glomus cells may be present

**Epithelioid Hemangioendothelioma:**
- Malignant vascular tumor
- Intravenous growth
- Epithelioid endothelial cells
- Myxohyaline stroma

**Angiosarcoma:**
- Rare in lung
- Anastomosing channels
- Atypical endothelial cells
- Poor prognosis

**Kaposi Sarcoma:**
- HIV-associated
- HHV-8 positive
- Spindle cells
- Slit-like spaces

### Vasculitis

**Granulomatosis with Polyangiitis (Wegener):**
- Necrotizing granulomas
- Vasculitis of small vessels
- Capillaritis
- Geographic necrosis

**Microscopic Polyangiitis:**
- Pauci-immune vasculitis
- Capillaritis
- No granulomas
- p-ANCA positive

**Eosinophilic Granulomatosis with Polyangiitis (Churg-Strauss):**
- Asthma history
- Eosinophil-rich infiltrate
- Granulomas
- Vasculitis

**Behcet Disease:**
- Systemic vasculitis
- Aneurysm formation
- Thrombosis
- Hemoptysis

### Histological Grading

**Heath-Edwards Classification:**
- Grade I: Medial hypertrophy
- Grade II: Cellular intimal proliferation
- Grade III: Fibrous intimal proliferation
- Grade IV: Dilatation lesions
- Grade V: Plexiform lesions
- Grade VI: Fibrinoid necrosis

### Vascular Changes in Lung Cancer

**Angiogenesis:**
- Tumor vessel proliferation
- Disorganized architecture
- Endothelial activation
- VEGF expression

**Vascular Invasion:**
- Prognostic significance
- Lymphatic vs blood vessel
- Elastic stains helpful
- Endothelial markers (CD31, CD34)

### Special Stains and Techniques

**Elastic Stains:**
- Verhoeff-van Gieson
- Orcein
- Shows internal/external elastic laminae
- Assesses intimal thickening

**Immunohistochemistry:**
- CD31, CD34: Endothelial cells
- SMA: Smooth muscle
- D2-40: Lymphatics
- Factor VIII: Endothelium
- Elastin: Elastic tissue

**Morphometry:**
- Wall thickness measurements
- Media-to-lumen ratio
- Percent occlusion
- Computer-assisted analysis`,
      keyTerms: [
        { term: 'plexiform lesion', definition: 'Complex vascular lesion with disorganized capillary channels; characteristic of severe PAH' },
        { term: 'PVOD', definition: 'Pulmonary veno-occlusive disease; rare cause of PH with venous occlusion' },
        { term: 'Heath-Edwards classification', definition: 'Histological grading system for hypertensive pulmonary vascular disease' },
        { term: 'recanalization', definition: 'Formation of new channels through organized thrombus' },
        { term: 'vasa vasorum', definition: 'Vessels supplying the walls of larger pulmonary arteries' },
      ],
      clinicalNotes: 'PVOD should be suspected when patients with PAH have severe hypoxemia, crackles on exam, and radiographic signs of pulmonary edema. Histologically, PVOD shows occluded pulmonary venules with capillary proliferation, but lung biopsy is high-risk in these patients.',
    },
    5: {
      level: 5,
      summary: 'Expert pulmonary vascular histology encompasses molecular mechanisms of vascular disease, biomarkers, advanced imaging techniques, regenerative approaches, and translational research in pulmonary hypertension.',
      explanation: `## Molecular Pathology

**BMPR2 Pathway:**
- Mutations in 70% of heritable PAH
- 20% of idiopathic PAH
- TGF-beta superfamily member
- Smooth muscle proliferation signal
- Therapeutic target

**Other Genetic Factors:**
- ALK1, ENG (HHT-related)
- CAV1 (caveolin-1)
- KCNK3 (potassium channel)
- TBX4 (pediatric PAH)
- SMAD9

**Epigenetic Changes:**
- DNA methylation
- Histone modifications
- MicroRNA dysregulation
- miR-204 downregulation in PAH

### Biomarkers

**Diagnostic:**
- NT-proBNP (right heart strain)
- Troponin T (prognosis)
- Uric acid
- Growth differentiation factor-15

**Mechanistic:**
- Endothelin-1
- VEGF
- Angiopoietin-2
- Inflammatory cytokines

**Emerging:**
- Circulating endothelial cells
- Endothelial microparticles
- Cell-free DNA
- Metabolomic signatures

### Advanced Imaging

**Micro-CT:**
- 3D vascular reconstruction
- Rat models of PAH
- Therapeutic monitoring
- Preclinical studies

**Optical Coherence Tomography:**
- Intravascular imaging
- OCT catheter in pulmonary arteries
- Intimal thickness assessment
- Clinical application developing

**Molecular Imaging:**
- PET with tracers
- Proliferation markers
- Perfusion imaging
- Stem cell tracking

### Regenerative Medicine

**Endothelial Progenitor Cells:**
- Bone marrow-derived
- Circulating EPCs depleted in PAH
- Therapeutic potential
- Clinical trials ongoing

**Induced Pluripotent Stem Cells:**
- Disease modeling
- Drug screening
- Personalized medicine
- Endothelial differentiation

**Tissue Engineering:**
- Vascular grafts
- Decellularized matrices
- Endothelial seeding
- Bioreactor culture

### Translational Research

**Animal Models:**
- Monocrotaline rat model
- SU5416/hypoxia mouse model
- BMPR2 transgenic models
- Large animal models (pig, sheep)

**Precision Medicine:**
- Genetic testing
- Risk stratification
- Treatment selection
- Biomarker-guided therapy

**Drug Development:**
- Prostacyclin analogs
- Endothelin antagonists
- PDE5 inhibitors
- Soluble guanylate cyclase stimulators
- Emerging: Tyrosine kinase inhibitors

### Single-Cell Analysis

**scRNA-seq of Pulmonary Vasculature:**
- Endothelial heterogeneity
- Smooth muscle subpopulations
- Fibroblast diversity
- Immune cell profiling

**Findings:**
- Arterial vs venous signatures
- Capillary zonation
- Disease-specific changes
- Therapeutic targets

### Exosomes and Microvesicles

**Role in PAH:**
- Intercellular communication
- miRNA transport
- Pro-fibrotic signaling
- Diagnostic potential

**Clinical Applications:**
- Liquid biopsy
- Disease monitoring
- Therapeutic delivery
- Biomarker source

### Metabolic Reprogramming

**Warburg Effect:**
- Glycolytic shift in PAH
- Mitochondrial dysfunction
- Pyruvate dehydrogenase kinase
- Dichloroacetate trials

**Other Pathways:**
- Glutaminolysis
- Fatty acid oxidation
- Serotonin metabolism
- Arginine pathway

### Right Heart Pathology

**Cor Pulmonale:**
- Right ventricular hypertrophy
- Eccentric vs concentric remodeling
- Fibrosis
- Ischemia

**Histological Features:**
- Cardiomyocyte hypertrophy
- Interstitial fibrosis
- Capillary rarefaction
- Arrhythmogenic foci

### Future Directions

**Gene Therapy:**
- BMPR2 restoration
- Gene editing (CRISPR)
- Endothelial targeting
- Clinical trials planned

**Immunotherapy:**
- Inflammation in PAH
- Immune checkpoint inhibitors
- Anti-inflammatory strategies
- Combination approaches

**Artificial Intelligence:**
- Pathology image analysis
- Prognostic prediction
- Drug discovery
- Clinical decision support`,
      keyTerms: [
        { term: 'BMPR2', definition: 'Bone morphogenetic protein receptor type 2; most common mutation in heritable PAH' },
        { term: 'Warburg effect', definition: 'Shift to glycolytic metabolism even in presence of oxygen; observed in PAH' },
        { term: 'endothelial progenitor cells', definition: 'Bone marrow-derived cells that can differentiate into endothelial cells' },
        { term: 'scRNA-seq', definition: 'Single-cell RNA sequencing; reveals cellular heterogeneity' },
        { term: 'cor pulmonale', definition: 'Right heart failure secondary to pulmonary disease' },
      ],
      clinicalNotes: `Key advances in pulmonary vascular pathology:

1. **BMPR2 testing:** Genetic screening for BMPR2 mutations should be offered to all PAH patients and their families, as it affects prognosis and screening recommendations.

2. **Precision medicine:** PAH is moving toward molecular subtyping based on genetic mutations, inflammatory profiles, and metabolic signatures to guide therapy selection.

3. **Plexiform lesions:** These remain the pathognomonic lesion of severe PAH. Understanding their molecular drivers (monoclonal endothelial proliferation) has opened new therapeutic avenues.

4. **PVOD recognition:** Increased awareness of pulmonary veno-occlusive disease, often misdiagnosed as PAH, is critical as these patients may worsen with standard PAH vasodilators.

5. **Single-cell atlases:** Comprehensive mapping of pulmonary vascular cells is revealing new therapeutic targets and understanding of cellular plasticity in disease.

6. **Metabolic therapies:** Targeting the Warburg effect and other metabolic abnormalities represents a novel approach beyond vasodilation.

7. **Regenerative approaches:** Endothelial progenitor cell therapy and gene therapy for BMPR2 restoration are advancing toward clinical application.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'heath-edwards',
      type: 'article',
      title: 'The Pathology of Hypertensive Pulmonary Vascular Disease',
      authors: ['Heath D', 'Edwards JE'],
      source: 'Circulation',
    },
    {
      id: 'nicolls-pah-review',
      type: 'article',
      title: 'New Molecular Mechanisms of Pulmonary Arterial Hypertension',
      authors: ['Nicolls MR', 'Tuder RM'],
      source: 'American Journal of Respiratory and Critical Care Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'histology-alveolar-structure', targetType: 'structure', relationship: 'related', label: 'Alveolar Structure' },
    { targetId: 'histology-pleural-tissue', targetType: 'structure', relationship: 'related', label: 'Pleural Tissue' },
    { targetId: 'condition-pulmonary-hypertension', targetType: 'condition', relationship: 'related', label: 'Pulmonary Hypertension' },
  ],

  tags: {
    systems: ['respiratory', 'cardiovascular'],
    topics: ['histology', 'pathology', 'pulmonology', 'vascular-medicine'],
    keywords: ['pulmonary vessels', 'pulmonary hypertension', 'vasculature', 'endothelium', 'histology'],
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

export default pulmonaryVesselsContent;
