/**
 * Alveolar Structure - Respiratory Histology
 *
 * Microscopic anatomy of alveoli including type I and type II pneumocytes,
 * alveolar macrophages, and the blood-air barrier.
 */

import { EducationalContent } from '../../types';

export const alveolarStructureContent: EducationalContent = {
  id: 'histology-alveolar-structure',
  type: 'structure',
  name: 'Alveolar Structure',
  alternateNames: ['Alveoli', 'Air Sacs', 'Pulmonary Alveoli'],

  levels: {
    1: {
      level: 1,
      summary: 'Alveoli are tiny air sacs in your lungs where oxygen enters your blood and carbon dioxide leaves it, like tiny balloons at the end of breathing tubes.',
      explanation: `## What Are Alveoli?

Alveoli are microscopic air sacs at the end of your breathing tubes. They are where the magic of breathing happens - oxygen moves into your blood and carbon dioxide moves out.

### How Many Alveoli Do You Have?
- About 300-500 million alveoli in adult lungs
- Together they create a huge surface area
- Spread out, they would cover a tennis court
- This large area allows lots of gas exchange

### What Do Alveoli Look Like?
- Tiny grape-like clusters at the ends of bronchioles
- Very thin walls - only one cell thick
- Surrounded by tiny blood vessels called capillaries
- Look like small bubbles or sacs

### Two Main Cell Types

**Type I Pneumocytes:**
- Very thin, flat cells
- Cover most of the alveolar surface
- Allow gases to pass through easily
- Like the walls of a balloon

**Type II Pneumocytes:**
- Rounder, cuboidal cells
- Make surfactant (a soapy substance)
- Surfactant keeps alveoli from collapsing
- Can become Type I cells if needed

### The Blood-Air Barrier
- Extremely thin layer between air and blood
- Only about 0.5 micrometers thick
- Made of alveolar wall + capillary wall
- Allows oxygen and carbon dioxide to pass quickly

### Alveolar Macrophages
- Special immune cells in the alveoli
- "Dust cells" that clean up debris
- Eat bacteria and particles
- Protect the lungs from infection

### Why Alveoli Matter
Without healthy alveoli, your body cannot get enough oxygen. Diseases that damage alveoli make it hard to breathe and exercise.`,
      keyTerms: [
        { term: 'alveoli', definition: 'Tiny air sacs in the lungs where gas exchange occurs' },
        { term: 'pneumocytes', definition: 'The cells that line the alveoli' },
        { term: 'surfactant', definition: 'A soapy substance that prevents alveoli from collapsing' },
        { term: 'capillaries', definition: 'Tiny blood vessels that surround the alveoli' },
        { term: 'macrophages', definition: 'Immune cells that clean up debris and fight infection' },
      ],
      analogies: [
        'Alveoli are like tiny grape clusters at the end of stems - many small sacs bunched together.',
        'The blood-air barrier is like a very thin screen door - it lets air through but keeps things separated.',
        'Surfactant is like dish soap that prevents water from beading up - it spreads out to keep alveoli open.',
      ],
      examples: [
        'In emphysema, the walls between alveoli break down, creating larger but fewer air spaces.',
        'In pneumonia, the alveoli fill with fluid and pus, preventing oxygen from reaching the blood.',
      ],
    },
    2: {
      level: 2,
      summary: 'Alveoli are thin-walled sacs lined by type I pneumocytes for gas exchange and type II pneumocytes for surfactant production. The blood-air barrier consists of alveolar epithelium, basement membrane, and capillary endothelium.',
      explanation: `## Alveolar Architecture

### Gross Structure
- Approximately 300-500 million alveoli per lung
- Average diameter: 75-300 micrometers
- Total surface area: 70-100 square meters
- Ideal for efficient gas exchange

### Alveolar Wall Components

**Epithelial Layer:**
- Type I pneumocytes: 95% of surface area
- Type II pneumocytes: 5% of surface area, but more numerous
- Both rest on basement membrane

**Interstitial Space:**
- Loose connective tissue
- Contains capillaries, elastic fibers, collagen
- Site of fluid and solute exchange

**Capillary Endothelium:**
- Continuous endothelium
- Fused basement membrane with epithelium
- Forms blood-air barrier

### Type I Pneumocytes (Squamous Alveolar Cells)

**Characteristics:**
- Extremely thin (0.1-0.2 micrometers)
- Large surface area per cell
- Cover 95% of alveolar surface
- Cannot divide - replaced by Type II differentiation

**Function:**
- Provide thin surface for gas exchange
- Tight junctions prevent fluid leakage
- Structural support

### Type II Pneumocytes (Granular Pneumocytes)

**Characteristics:**
- Cuboidal shape
- Microvilli on apical surface
- Lamellar bodies (contain surfactant)
- Can proliferate and differentiate into Type I

**Functions:**
1. Surfactant synthesis and secretion
2. Alveolar fluid clearance
3. Progenitor cells for Type I
4. Immune modulation

### Surfactant

**Composition:**
- 80% phospholipids (mainly dipalmitoylphosphatidylcholine)
- 10% proteins (SP-A, SP-B, SP-C, SP-D)
- 10% neutral lipids

**Functions:**
- Reduces surface tension
- Prevents alveolar collapse
- Reduces work of breathing
- Host defense (SP-A and SP-D)

### Blood-Air Barrier

**Structure (thickness: 0.5 micrometers):**
1. Surfactant layer
2. Type I pneumocyte
3. Fused basement membranes
4. Capillary endothelial cell
5. Plasma membrane

**Function:**
- Allows rapid gas diffusion
- Prevents fluid transudation
- Extremely thin but structurally sound

### Alveolar Macrophages (Dust Cells)

**Origin:**
- Derived from blood monocytes
- Enter alveoli from capillaries

**Functions:**
- Phagocytosis of inhaled particles
- Bacterial killing
- Debris clearance
- Present in alveolar spaces and interstitium

### Alveolar Pores (Pores of Kohn)
- Connect adjacent alveoli
- Allow collateral ventilation
- Become more numerous with age
- Route for infection spread`,
      keyTerms: [
        { term: 'type I pneumocyte', definition: 'Thin squamous cells covering 95% of alveolar surface for gas exchange' },
        { term: 'type II pneumocyte', definition: 'Cuboidal cells producing surfactant and serving as progenitor cells' },
        { term: 'surfactant', definition: 'Surface-active lipoprotein complex reducing alveolar surface tension' },
        { term: 'blood-air barrier', definition: 'Thin membrane separating alveolar air from capillary blood' },
        { term: 'lamellar bodies', definition: 'Storage granules in Type II cells containing surfactant' },
      ],
      analogies: [
        'Type I pneumocytes are like plastic wrap - extremely thin to let gases through.',
        'Type II pneumocytes are like factories that make soap to keep the air sacs open.',
        'The blood-air barrier is like a coffee filter - thin enough for exchange but strong enough to hold back fluid.',
      ],
      examples: [
        'Hyaline membrane disease in premature infants results from insufficient surfactant production.',
        'In ARDS, the blood-air barrier becomes leaky, causing fluid accumulation in alveoli.',
      ],
    },
    3: {
      level: 3,
      summary: 'Alveolar histology involves understanding cell ultrastructure, surfactant metabolism, barrier function, and cellular responses to injury. Type II cells function as stem cells while maintaining ion transport and immune functions.',
      explanation: `## Cellular Ultrastructure

### Type I Pneumocyte Ultrastructure
**Cytoplasmic Features:**
- Extremely attenuated cytoplasm (50-100 nm)
- Few organelles
- Caveolae for transcytosis
- Tight junctions with adjacent cells
- Intermediate filaments for structural support

**Membrane Domains:**
- Apical: Facing alveolar space, gas exchange surface
- Basal: Facing basement membrane and capillaries
- Lateral: Cell-cell contacts with tight junctions

### Type II Pneumocyte Ultrastructure
**Lamellar Bodies:**
- 1-2 micrometers in diameter
- Concentric layers of surfactant phospholipids
- Secreted by exocytosis
- Recycled via reuptake

**Other Organelles:**
- Abundant rough ER for protein synthesis
- Golgi for processing
- Multivesicular bodies for recycling
- Microvilli increase surface area

### Surfactant Metabolism

**Synthesis:**
- Phospholipids synthesized in ER
- Assembled in lamellar bodies
- Surfactant proteins added
- Stored until secretion

**Secretion:**
- Stimulated by stretch, beta-agonists, ATP
- Exocytosis of lamellar bodies
- Forms tubular myelin (intermediate form)
- Spreads as monolayer at air-liquid interface

**Recycling:**
- Alveolar macrophages catabolize
- Type II cells reuptake
- Reutilize components
- Turnover every 5-10 hours

### Blood-Air Barrier Physiology

**Diffusion Capacity:**
- Thickness: 0.5 micrometers
- Surface area: 70-100 m2
- Fick\'s law determines gas exchange
- O2 diffusion limited in health

**Barrier Function:**
- Tight junctions prevent protein leakage
- Fluid clearance via Na+ transport
- Maintains dry alveolar space
- Compromised in lung injury

### Alveolar Fluid Clearance

**Mechanism:**
- Type II cells transport Na+ actively
- Creates osmotic gradient
- Water follows via aquaporins
- Clears edema fluid

**Regulation:**
- Catecholamines stimulate transport
- Glucocorticoids upregulate channels
- Impaired in ALI/ARDS

### Alveolar Macrophage Biology

**Subsets:**
- Alveolar macrophages (airspace)
- Interstitial macrophages (tissue)
- Different origins and functions

**Activation States:**
- M1: Pro-inflammatory, microbicidal
- M2: Anti-inflammatory, tissue repair
- Plasticity between states

**Functions:**
- Phagocytosis via Fc and complement receptors
- Cytokine production
- Antigen presentation
- Matrix remodeling

### Cellular Response to Injury

**Type I Cell Injury:**
- Cannot regenerate
- Denuded basement membrane
- Type II cells proliferate
- Differentiate to restore barrier

**Resolution:**
- Type II hyperplasia
- Differentiation to Type I
- Restoration of barrier
- Surfactant production resumes

### Aging Changes

**Structural:**
- Alveolar ducts dilate
- Pores of Kohn increase
- Surface area decreases
- Elastic recoil diminishes

**Functional:**
- Reduced surfactant production
- Impaired fluid clearance
- Decreased compliance
- Ventilation-perfusion mismatch`,
      keyTerms: [
        { term: 'tubular myelin', definition: 'Lattice-like form of surfactant at the air-liquid interface' },
        { term: 'caveolae', definition: 'Small membrane invaginations involved in transcytosis and signaling' },
        { term: 'alveolar fluid clearance', definition: 'Active transport of fluid out of alveolar space' },
        { term: 'surfactant proteins', definition: 'SP-A, SP-B, SP-C, SP-D; regulate surfactant function and host defense' },
        { term: 'pores of Kohn', definition: 'Interalveolar connections allowing collateral ventilation' },
      ],
      clinicalNotes: 'Type II pneumocytes serve as the stem cell population for the alveolar epithelium. After injury, they proliferate to cover the basement membrane and then differentiate into Type I cells to restore the gas exchange surface.',
    },
    4: {
      level: 4,
      summary: 'Advanced alveolar histology covers molecular mechanisms of surfactant dysfunction, barrier regulation, epithelial-mesenchymal interactions, and histopathological changes in disease states including ARDS and pulmonary fibrosis.',
      explanation: `## Molecular Biology of Surfactant

### Surfactant Protein Functions

**SP-A and SP-D (Collectins):**
- Innate immune defense
- Pathogen opsonization
- Regulation of surfactant secretion
- Modulation of inflammation

**SP-B and SP-C (Hydrophobic):**
- Essential for surface tension reduction
- SP-B critical for life (fatal deficiency)
- SP-C mutations cause familial IPF
- Facilitate surfactant spreading

### Genetic Disorders

**SP-B Deficiency:**
- Autosomal recessive
- Fatal neonatal respiratory failure
- Hyaline membrane disease unresponsive to surfactant
- Requires lung transplantation

**ABCA3 Deficiency:**
- Transports phospholipids into lamellar bodies
- Deficiency causes surfactant dysfunction
- Presentation: neonatal to childhood
- Histology: abnormal lamellar bodies

**SP-C Mutations:**
- Associated with familial IPF
- Protein misfolding and aggregation
- Endoplasmic reticulum stress
- Accelerated lung fibrosis

### Blood-Air Barrier Dysfunction

**ARDS Pathology:**
- Type I cell necrosis and apoptosis
- Type II cell injury and dysfunction
- Basement membrane exposure
- Protein-rich edema formation
- Hyaline membrane formation

**Epithelial Repair:**
- Type II cell proliferation
- Temporary cover by fibrin matrix
- Gradual redifferentiation
- Fibroproliferation if delayed

### Epithelial-Mesenchymal Transition (EMT)

**Mechanism:**
- Alveolar epithelial cells lose markers
- Acquire mesenchymal phenotype
- Contribute to fibroblast pool
- Driven by TGF-beta, mechanical stress

**Significance:**
- Source of fibroblasts in fibrosis
- Reversible process
- Therapeutic target
- Controversial extent in vivo

### Alveolar Stem Cells

**Type II Cells as Stem Cells:**
- Self-renewal capacity
- Differentiation to Type I
- Injury-responsive proliferation
- Marked by surfactant proteins

**Other Progenitor Populations:**
- BASCs (bronchioalveolar stem cells)
- Located at BADJ
- Express both Clara and Type II markers
- Role in distal lung regeneration

### Histopathology of Alveolar Disease

**Emphysema:**
- Destruction of alveolar walls
- Enlarged air spaces
- Reduced surface area
- Loss of elastic recoil
- Panacinar vs centrilobular patterns

**Pulmonary Fibrosis:**
- Fibroblast foci at leading edge
- Honeycomb remodeling
- Alveolar epithelial injury
- Excessive matrix deposition
- Myofibroblast accumulation

**Pneumonia:**
- Alveolar exudate
- Neutrophil infiltration
- Fibrin deposition
- Type II cell hyperplasia in resolution
- Organization if prolonged

**Desquamative Interstitial Pneumonia (DIP):**
- Accumulation of macrophages in alveoli
- Mild inflammation
- Associated with smoking
- Better prognosis than UIP

### Special Stains and Techniques

**Histochemical:**
- Periodic acid-Schiff (PAS) for surfactant
- Oil red O for lipids
- Phosphotungstic acid hematoxylin for fibrin

**Immunohistochemical:**
- TTF-1 (Type II cells)
- AQP5 (Type I cells)
- Pro-SP-C (Type II cells)
- CD68 (macrophages)

**Electron Microscopy:**
- Gold standard for lamellar bodies
- Blood-air barrier thickness
- Cellular ultrastructure
- Diagnostic for storage diseases`,
      keyTerms: [
        { term: 'hyaline membrane', definition: 'Proteinaceous material lining alveoli in RDS; composed of necrotic cells and plasma proteins' },
        { term: 'epithelial-mesenchymal transition', definition: 'Process where epithelial cells acquire mesenchymal phenotype' },
        { term: 'fibroblast focus', definition: 'Aggregates of proliferating fibroblasts at leading edge of fibrosis' },
        { term: 'ABCA3', definition: 'ATP-binding cassette transporter essential for lamellar body formation' },
        { term: 'BASC', definition: 'Bronchioalveolar stem cell; progenitor at bronchioalveolar duct junction' },
      ],
      clinicalNotes: 'In ARDS, the combination of Type I cell death and Type II cell dysfunction leads to impaired fluid clearance and surfactant deficiency. Understanding these histological changes guides therapeutic approaches including surfactant replacement and fluid management.',
    },
    5: {
      level: 5,
      summary: 'Expert-level alveolar histology integrates cutting-edge research on single-cell transcriptomics, organoid models, regenerative biology, and precision molecular diagnostics for alveolar diseases.',
      explanation: `## Single-Cell Transcriptomics

**Alveolar Epithelial Cell Heterogeneity:**
- scRNA-seq reveals subpopulations
- Type I cells: transcriptional gradients
- Type II cells: functional subsets
- Transitional states during injury

**Cellular Atlas:**
- Human Lung Cell Atlas (HLCA)
- Mouse Lung Atlas
- Disease-specific atlases
- Developmental trajectories

### Type II Cell Subpopulations

**Functional Diversity:**
- Surfactant-producing subset
- Progenitor-enriched subset
- Immune-modulatory subset
- Injury-responsive subset

**Transcriptional Signatures:**
- SFTPC, SFTPB expression levels
- Cell cycle gene expression
- Stress response genes
- Differentiation markers

### Regenerative Biology

**Alveolar Regeneration Models:**
- Organoid culture systems
- 3D bioprinting
- Decellularized scaffolds
- Xenograft models

**Cell Therapy Approaches:**
- Type II cell transplantation
- iPSC-derived alveolar cells
- MSC therapy for lung repair
- Exosome-based therapies

### Molecular Diagnostics

**Biomarkers:**
- Surfactant protein levels in serum
- KL-6 (MUC1) in ILD
- SP-D in alveolar proteinosis
- Cytokeratins in injury

**Genetic Testing:**
- Next-generation sequencing panels
- Telomere length (short in some ILD)
- Rare variant identification
- Pharmacogenomics

### Advanced Imaging Techniques

**Intravital Microscopy:**
- Real-time alveolar imaging
- Cellular dynamics in living lung
- Injury and repair visualization
- Microcirculation assessment

**3D Reconstruction:**
- Serial section electron microscopy
- Micro-CT of alveolar structure
- Quantitative morphology
- Architecture changes in disease

### Mechanobiology

**Mechanical Forces:**
- Cyclic stretch effects on cells
- Matrix stiffness signaling
- YAP/TAZ mechanotransduction
- Force-induced differentiation

**Ventilation-Induced Changes:**
- Barotrauma at cellular level
- Volutrauma mechanisms
- Atelectrauma and reopening
- Biotrauma signaling

### Emerging Therapeutic Targets

**Surfactant Biology:**
- Synthetic surfactant formulations
- Peptide-enhanced surfactants
- Targeted delivery systems
- Gene therapy for SP deficiencies

**Barrier Enhancement:**
- Keratinocyte growth factor (KGF)
- Hepatocyte growth factor (HGF)
- Angiopoietin signaling
- Tight junction modulation

**Fibrosis Reversal:**
- Senolytic therapy
- TGF-beta inhibition
- Integrin blockade
- LOXL2 inhibition

### Precision Pathology

**Digital Pathology:**
- Whole slide imaging
- Machine learning classification
- Quantitative histomorphometry
- Automated cell counting

**Molecular Subtyping:**
- Transcriptomic signatures
- Mutational profiling
- Proteomic analysis
- Multi-omics integration

### Research Frontiers

**COVID-19 Lung Pathology:**
- Diffuse alveolar damage
- ACE2 expression patterns
- Endothelial injury
- Organizing pneumonia
- Long-term sequelae

**Aging Research:**
- Cellular senescence in alveoli
- Telomere dysfunction
- Senescence-associated secretory phenotype
- Rejuvenation strategies

**Lung Bioengineering:**
- Whole lung decellularization
- Recellularization with stem cells
- Bioreactor culture
- Transplantation approaches`,
      keyTerms: [
        { term: 'scRNA-seq', definition: 'Single-cell RNA sequencing; reveals transcriptional profiles of individual cells' },
        { term: 'organoid', definition: 'Self-organizing 3D tissue culture resembling organ architecture' },
        { term: 'KL-6', definition: 'Krebs von den Lungen-6; glycoprotein marker elevated in interstitial lung diseases' },
        { term: 'mechanotransduction', definition: 'Conversion of mechanical forces into biochemical signals' },
        { term: 'senolytic', definition: 'Agents that selectively eliminate senescent cells' },
      ],
      clinicalNotes: `Key research insights in alveolar biology:

1. **Cellular plasticity:** Type II cells show remarkable heterogeneity and plasticity. Understanding their subpopulations may enable targeted regenerative therapies.

2. **Single-cell atlases:** The Human Lung Cell Atlas provides unprecedented resolution of alveolar cell types and states, revealing new therapeutic targets.

3. **Organoid models:** 3D lung organoids now allow study of alveolar biology and disease modeling in vitro, enabling drug screening and personalized medicine.

4. **Mechanobiology:** Mechanical forces critically regulate alveolar cell behavior. This explains VILI and suggests new protective ventilation strategies.

5. **Precision medicine:** Genetic testing for surfactant mutations, telomere length, and molecular profiling enables personalized approaches to ILD management.

6. **Regenerative potential:** Emerging cell therapies using Type II cells, BASCs, or iPSC-derived cells may revolutionize treatment of alveolar diseases.

7. **Senescence:** Targeting cellular senescence represents a promising approach for age-related alveolar dysfunction and fibrosis.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'mason-alveolar-review',
      type: 'article',
      title: 'Alveolar Epithelial Type II Cell Biology',
      authors: ['Mason RJ', 'Williams MC'],
      source: 'Annual Review of Physiology',
    },
    {
      id: 'hlca-2020',
      type: 'article',
      title: 'A molecular cell atlas of the human lung from single-cell RNA sequencing',
      authors: ['Travaglini KJ', 'Nabhan AN', 'Penland L', 'et al.'],
      source: 'Nature',
      url: 'https://doi.org/10.1038/s41586-020-2922-4',
    },
  ],

  crossReferences: [
    { targetId: 'histology-bronchial-tree', targetType: 'structure', relationship: 'related', label: 'Bronchial Tree' },
    { targetId: 'physiology-gas-exchange', targetType: 'concept', relationship: 'related', label: 'Gas Exchange' },
    { targetId: 'condition-ards', targetType: 'condition', relationship: 'related', label: 'ARDS' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['histology', 'pulmonology', 'cell-biology'],
    keywords: ['alveoli', 'pneumocytes', 'surfactant', 'blood-air barrier', 'histology'],
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

export default alveolarStructureContent;
