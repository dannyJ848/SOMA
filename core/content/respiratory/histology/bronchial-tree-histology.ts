/**
 * Bronchial Tree Histology - Respiratory Histology
 *
 * Microscopic structure of conducting airways from trachea to terminal bronchioles,
 * including epithelial types, cartilage, and smooth muscle arrangements.
 */

import { EducationalContent } from '../../types';

export const bronchialTreeHistologyContent: EducationalContent = {
  id: 'histology-bronchial-tree',
  type: 'structure',
  name: 'Bronchial Tree Histology',
  alternateNames: ['Conducting Airways', 'Bronchial Wall Structure', 'Airway Histology'],

  levels: {
    1: {
      level: 1,
      summary: 'The bronchial tree is a system of branching tubes that carry air to your lungs, lined with special cells that clean and protect the airways.',
      explanation: `## What Is the Bronchial Tree?

The bronchial tree is like an upside-down tree inside your chest. It starts with the trachea (windpipe) and branches into smaller and smaller tubes that carry air to your lungs.

### Main Parts

**Trachea (Windpipe):**
- The large tube from your throat to your lungs
- About 4-5 inches long
- Has C-shaped rings of cartilage to keep it open
- Lined with ciliated pseudostratified columnar epithelium

**Bronchi (Large Airways):**
- Right and left main bronchi enter each lung
- Branch into lobar bronchi (3 on right, 2 on left)
- Further divide into segmental bronchi
- Have plates of cartilage and smooth muscle

**Bronchioles (Small Airways):**
- Smaller branches without cartilage
- Have more smooth muscle relative to size
- Terminal bronchioles are the smallest conducting airways

### Special Cells in the Airway Lining

**Ciliated Cells:**
- Have tiny hair-like projections called cilia
- Beat in coordinated waves to move mucus upward
- Like tiny brooms sweeping debris out

**Goblet Cells:**
- Make mucus that traps dust and germs
- Look like little goblets under the microscope
- More numerous in larger airways

**Basal Cells:**
- Stem cells that can replace other cell types
- Sit near the bottom of the epithelium
- Help repair damaged airways

### Protective Features

**Mucus Layer:**
- Sticky layer traps particles
- Moved by cilia toward the throat
- Called the mucociliary escalator

**Cartilage:**
- Keeps airways from collapsing
- C-shaped rings in trachea
- Irregular plates in bronchi
- Absent in bronchioles

**Smooth Muscle:**
- Rings around airways
- Can tighten (bronchospasm) or relax
- More prominent in smaller airways`,
      keyTerms: [
        { term: 'trachea', definition: 'The windpipe; main airway connecting throat to lungs' },
        { term: 'bronchi', definition: 'Large airways that branch from the trachea into the lungs' },
        { term: 'bronchioles', definition: 'Small airways without cartilage that lead to alveoli' },
        { term: 'cilia', definition: 'Tiny hair-like projections that sweep mucus and debris out of airways' },
        { term: 'mucus', definition: 'A sticky substance that traps particles and protects airways' },
      ],
      analogies: [
        'The bronchial tree is like an upside-down tree with the trunk at the top and branches spreading downward into the lungs.',
        'Cilia are like tiny escalators moving upward - they carry mucus and trapped particles out of the lungs.',
        'Cartilage rings are like the wire in a vacuum cleaner hose - they keep the airway open and prevent collapse.',
      ],
      examples: [
        'In chronic bronchitis, goblet cells increase in number, producing excess mucus that causes coughing.',
        'In asthma, the smooth muscle around bronchioles contracts, narrowing the airways and making breathing difficult.',
      ],
    },
    2: {
      level: 2,
      summary: 'The bronchial tree transitions from pseudostratified ciliated columnar epithelium with goblet cells in large airways to simple cuboidal epithelium in bronchioles. Structural support changes from cartilage to smooth muscle.',
      explanation: `## Trachea and Main Bronchi

### Tracheal Wall Structure (from lumen outward)

**Mucosa:**
- Epithelium: Pseudostratified ciliated columnar
- Lamina propria: Loose connective tissue
- Basement membrane: Often thickened

**Submucosa:**
- Connective tissue with glands
- Seromucous glands
- Blood vessels and lymphatics

**Cartilage:**
- Hyaline cartilage, C-shaped rings
- 16-20 rings along trachea
- Open part faces posteriorly (esophagus)

**Adventitia:**
- Connective tissue binding trachea to surrounding structures

### Bronchi (Segmental and Smaller)

**Key Features:**
- Same epithelial type as trachea
- Irregular plates of cartilage (not rings)
- Complete circular smooth muscle layer
- Glands in submucosa (decrease with branching)

**Structural Changes as Bronchi Branch:**
| Feature | Large Bronchi | Small Bronchi |
|---------|--------------|---------------|
| Diameter | 5-10 mm | 1-5 mm |
| Cartilage | Plates | Small plates |
| Glands | Numerous | Few |
| Goblet cells | Many | Fewer |

### Bronchioles

**Primary Bronchioles:**
- Diameter <1 mm
- No cartilage
- Prominent smooth muscle layer
- Simple columnar epithelium
- Fewer goblet cells

**Terminal Bronchioles:**
- Diameter 0.5-1 mm
- Last part of conducting zone
- Simple cuboidal epithelium
- Clara cells predominate
- No goblet cells

### Epithelial Cell Types

**Ciliated Columnar Cells:**
- Most numerous in large airways
- 200-300 cilia per cell
- Beat toward oral cavity
- Coordinate beating via metachronal waves

**Goblet Cells:**
- Unicellular glands
- Produce mucin glycoproteins
- Increase with irritation/inflammation
- Decrease distally

**Basal Cells:**
- Stem/progenitor cells
- Attach to basement membrane
- Do not reach lumen
- Regenerate other epithelial cells

**Brush Cells:**
- Columnar cells with microvilli
- Chemosensory function
- Express taste receptors
- Associated with nerve fibers

**Neuroendocrine Cells:**
- Also called Kulchitsky cells
- Solitary or in clusters (NEBs)
- Produce serotonin, calcitonin, bombesin
- Oxygen sensing function

**Clara Cells (Club Cells):**
- Non-ciliated bronchiolar cells
- Dome-shaped with apical granules
- Secrete surfactant-like substance
- Detoxify inhaled substances
- Progenitor cells for bronchiolar epithelium

### Bronchial Associated Lymphoid Tissue (BALT)
- Lymphoid nodules beneath epithelium
- Increases with antigen exposure
- Part of mucosal immune system
- Contains lymphocytes and plasma cells`,
      keyTerms: [
        { term: 'pseudostratified epithelium', definition: 'Single layer of cells that appears stratified due to nuclei at different levels' },
        { term: 'Clara cells', definition: 'Non-ciliated secretory cells in bronchioles that produce surfactant and detoxify' },
        { term: 'mucociliary escalator', definition: 'Coordinated ciliary movement that transports mucus toward the throat' },
        { term: 'neuroendocrine cells', definition: 'Cells that produce hormones and neurotransmitters; oxygen sensors' },
        { term: 'BALT', definition: 'Bronchial associated lymphoid tissue; lymphoid tissue in bronchial walls' },
      ],
      analogies: [
        'The epithelial transition is like going from a multi-story building (pseudostratified) to a single-story house (simple cuboidal).',
        'Clara cells are like the cleaning crew - they produce protective substances and break down harmful chemicals.',
        'The cartilage-to-muscle transition is like support changing from external scaffolding to internal muscles.',
      ],
      examples: [
        'In smokers, the number of goblet cells increases and cilia are damaged, impairing mucus clearance.',
        'Clara cells contain cytochrome P450 enzymes that can activate pro-carcinogens in cigarette smoke.',
      ],
    },
    3: {
      level: 3,
      summary: 'Bronchial tree histology includes understanding ultrastructural features of cilia and goblet cells, basement membrane zones, neuroendocrine cell function, Clara cell biology, and the mucociliary apparatus at the cellular level.',
      explanation: `## Ultrastructural Features

### Cilia Structure and Function

**9+2 Microtubule Arrangement:**
- 9 peripheral doublet microtubules
- 2 central single microtubules
- Dynein arms generate beating motion
- Nexin links maintain structure

**Ciliary Beat Cycle:**
- Power stroke: stiff, effective sweep
- Recovery stroke: bent, minimal resistance
- Metachronal wave coordination
- Beat frequency: 12-15 Hz normally

**Ciliary Dysfunction:**
- Primary ciliary dyskinesia (immotile cilia syndrome)
- Kartagener syndrome (situs inversus + bronchiectasis)
- Acquired dysfunction from smoking, infection

### Goblet Cell Biology

**Mucin Production:**
- MUC5AC and MUC5B main types
- Synthesized in rough ER and Golgi
- Stored in granules
- Exocytosis regulated by neurohumoral factors

**Regulation:**
- IL-13 increases goblet cells
- EGFR signaling pathway
- Notch signaling in differentiation
- Environmental triggers (smoke, allergens)

### Basement Membrane Zone

**Components:**
- Basal lamina (lamina lucida + lamina densa)
- Reticular lamina
- Type IV collagen, laminin, fibronectin
- Anchoring fibrils (type VII collagen)

**Thickening in Disease:**
- Asthma: reticular basement membrane thickening
- Subepithelial fibrosis
- Increased matrix deposition
- Predictor of airway remodeling

### Clara Cell Ultrastructure

**Secretory Granules:**
- Contain Clara cell secretory protein (CCSP/CC16)
- Surfactant-like material
- Proteases and antiproteases
- Visible as apical dome under EM

**Smooth ER Abundance:**
- Cytochrome P450 monooxygenases
- Detoxification of xenobiotics
- Can activate pro-carcinogens
- Antioxidant enzyme production

**Progenitor Function:**
- Divides after bronchiolar injury
- Gives rise to ciliated cells
- Stem cell markers expressed
- Critical for airway repair

### Neuroendocrine Cells

**Solitary vs Clustered (NEBs):**
- Solitary: scattered individually
- NEBs: 20-30 cells in clusters
- Innervated by vagal sensory fibers
- Hypoxia-sensitive cells

**Secretory Products:**
- Serotonin (5-HT)
- Calcitonin gene-related peptide (CGRP)
- Bombesin/gastrin-releasing peptide (GRP)
- Chromogranin A

**Function:**
- Airway chemoreceptors
- Regulate breathing pattern
- Modulate immune response
- Developmental signaling

### Mucociliary Apparatus

**Periciliary Liquid Layer:**
- Watery, low viscosity
- Allows ciliary beating
- Ion transport regulated

**Mucus Layer:**
- Gel-like, high viscosity
- Traps particles
- Moved by cilia

**Coordination:**
- Ciliary beat frequency regulated
- Mucus secretion matched to clearance
- Breakdown leads to infection

### Goblet Cell Hyperplasia and Metaplasia

**Hyperplasia:**
- Increased goblet cell numbers
- Reversible with stimulus removal
- Common in chronic bronchitis, asthma

**Metaplasia:**
- Transformation from other cell types
- Usually from basal cells
- Persistent even after stimulus removal
- Risk factor for dysplasia`,
      keyTerms: [
        { term: 'dynein arms', definition: 'Motor proteins on microtubule doublets that generate ciliary motion' },
        { term: 'MUC5AC', definition: 'Mucin gene product; major gel-forming mucin in upper airways' },
        { term: 'reticular basement membrane', definition: 'Subepithelial layer beneath true basement membrane; thickens in asthma' },
        { term: 'CC16', definition: 'Clara cell protein 16; anti-inflammatory protein produced by Clara cells' },
        { term: 'NEB', definition: 'Neuroepithelial body; clusters of neuroendocrine cells in airway epithelium' },
      ],
      clinicalNotes: 'The thickness of the reticular basement membrane (Rbm) correlates with asthma severity and airway hyperresponsiveness. Measurement of Rbm thickness is used as a marker of airway remodeling in research studies.',
    },
    4: {
      level: 4,
      summary: 'Advanced bronchial histology covers pathological changes in chronic airway diseases, epithelial remodeling, stem cell biology, immunopathology, and histological features of specific airway disorders.',
      explanation: `## Airway Pathology

### Chronic Bronchitis

**Histological Features:**
- Goblet cell hyperplasia
- Enlarged submucosal glands (Reid index >0.4)
- Gland duct dilation
- Inflammatory cell infiltration
- Squamous metaplasia (smokers)

**Reid Index:**
- Ratio of gland layer thickness to bronchial wall thickness
- Normally <0.4
- Increased in chronic bronchitis
- Measured on cartilage-containing airways

### Asthma

**Epithelial Changes:**
- Fragility and shedding
- Goblet cell hyperplasia
- Basement membrane thickening (5-20 micrometers vs normal 4-7)
- Subepithelial fibrosis

**Inflammatory Infiltrate:**
- Eosinophils (hallmark)
- Mast cells
- Lymphocytes (Th2 predominant)
- Neutrophils (severe asthma)

**Airway Smooth Muscle:**
- Hypertrophy and hyperplasia
- Increased mass in large and small airways
- Correlates with hyperresponsiveness

### Bronchiectasis

**Pathological Features:**
- Permanent bronchial dilation
- Destruction of bronchial wall
- Inflammatory exudate
- Squamous metaplasia
- Neovascularization

**Types:**
- Cylindrical: uniform dilation
- Varicose: beaded appearance
- Saccular/cystic: ballooned ends

### Bronchiolitis

**Constrictive (Proliferative):**
- Subepithelial fibrosis
- Concentric narrowing
- Mosaic attenuation on CT
- Post-infectious, transplant rejection, graft-versus-host disease

**Respiratory:**
- Inflammation of respiratory bronchioles
- Smokers, hypersensitivity pneumonitis
- Center of secondary lobule

**Follicular:**
- Hyperplastic lymphoid follicles
- Childhood infections
- Immunodeficiency states

### Stem Cell Biology

**Basal Cells as Stem Cells:**
- p63+, KRT5+ markers
- Self-renewal capacity
- Differentiate into ciliated and secretory cells
- Critical for epithelial repair

**Lineage Tracing Studies:**
- Single basal cells regenerate epithelium
- Distinct populations for different zones
- Reserve stem cell pool

**Clara Cell Progenitors:**
- Give rise to ciliated cells
- Population specific to bronchioles
- Response to bronchiolar injury

### Pre-malignant Changes

**Squamous Dysplasia:**
- Basal cell hyperplasia
- Squamous metaplasia
- Mild, moderate, severe dysplasia
- Carcinoma in situ

**Glandular Dysplasia:**
- Atypical adenomatous hyperplasia
- Adenocarcinoma in situ
- Minimally invasive adenocarcinoma

### Immunopathology

**BALT in Disease:**
- Increases with chronic inflammation
- Lymphoid follicles with germinal centers
- Plasma cell infiltration
- Autoimmune diseases

**IgA Production:**
- Dimeric IgA secreted by plasma cells
- Transported across epithelium
- First line of mucosal defense
- Deficiency leads to infections

### Special Staining and Markers

**Immunohistochemistry:**
- p63, KRT5: Basal cells
- Acetylated tubulin: Cilia
- MUC5AC: Goblet cells
- CCSP/SCGB1A1: Clara cells
- CGRP, chromogranin: Neuroendocrine cells
- CD45: Leukocytes
- Tryptase: Mast cells

**Histochemical Stains:**
- PAS: Mucus
- Alcian blue: Acid mucins
- Masson trichrome: Collagen/fibrosis
- Elastic stains: Airway architecture

### Airway Remodeling

**Components:**
- Epithelial changes
- Basement membrane thickening
- Subepithelial fibrosis
- Smooth muscle alterations
- Vascular changes
- Mucous gland hyperplasia

**Mechanisms:**
- TGF-beta signaling
- Matrix metalloproteinases
- Growth factor release
- Mechanical stress
- Inflammation-driven`,
      keyTerms: [
        { term: 'Reid index', definition: 'Ratio of mucous gland layer to bronchial wall thickness; increased in chronic bronchitis' },
        { term: 'subepithelial fibrosis', definition: 'Deposition of collagen beneath basement membrane; characteristic of airway remodeling' },
        { term: 'constrictive bronchiolitis', definition: 'Fibrotic narrowing of bronchioles; irreversible airflow obstruction' },
        { term: 'BALT', definition: 'Bronchial associated lymphoid tissue; organized lymphoid structures in bronchial wall' },
        { term: 'lineage tracing', definition: 'Technique to follow cell fate and differentiation in vivo' },
      ],
      clinicalNotes: 'The Reid index, measuring gland hypertrophy, is a classic histological feature of chronic bronchitis but is rarely used clinically today. More emphasis is placed on inflammatory cell infiltrates and remodeling features in modern diagnostic pathology.',
    },
    5: {
      level: 5,
      summary: 'Expert-level bronchial histology integrates single-cell analysis, molecular profiling of airway diseases, regenerative medicine approaches, and precision diagnostics for pre-malignant and inflammatory conditions.',
      explanation: `## Single-Cell Analysis of Airways

**scRNA-seq Insights:**
- Basal cell heterogeneity
- Differentiation trajectories
- Disease-specific signatures
- Cell-cell communication networks

**Airway Cell Atlas:**
- Cartilage-containing vs non-cartilage airways
- Regional differences
- Smoking-induced changes
- Asthma endotypes

### Molecular Profiling

**Transcriptomic Signatures:**
- Asthma endotypes (Th2-high vs Th2-low)
- Smoking-related changes
- COPD subtypes
- Gene expression classifiers

**Epigenetic Changes:**
- DNA methylation patterns
- Histone modifications
- Smoking-associated changes
- Reversible vs persistent marks

### Regenerative Medicine

**Airway Epithelial Culture:**
- Air-liquid interface (ALI) cultures
- Differentiation into ciliated and secretory cells
- Disease modeling
- Drug screening platforms

**Basal Cell Therapy:**
- Autologous basal cell expansion
- Transplantation approaches
- Genetic modification (CF)
- Clinical trials ongoing

**Bioengineered Airways:**
- Decellularized scaffolds
- Recellularization with stem cells
- Tracheal replacement
- Vascularization challenges

### Cystic Fibrosis Airway Histology

**Characteristic Changes:**
- Thick, tenacious mucus
- Impaired mucociliary clearance
- Chronic inflammation
- Bronchiectasis development
- End-stage fibrosis

**CFTR Expression:**
- Primarily in submucosal glands
- Some expression in surface epithelium
- Absent or defective in CF
- Ion transport abnormalities

**Pathogenesis:**
- Dehydrated airway surface liquid
- Reduced periciliary liquid height
- Mucus adhesion
- Impaired bacterial clearance

### Pre-malignancy Detection

**Fluorescence Bronchoscopy:**
- Autofluorescence imaging
- Abnormal patterns in dysplasia
- Guide biopsy placement
- Surveillance of high-risk patients

**Molecular Biomarkers:**
- p53 mutations
- Cyclin D1 overexpression
- EGFR abnormalities
- Telomerase activity

**Risk Stratification:**
- Histological grading
- Genomic instability measures
- Field cancerization assessment
- Personalized surveillance

### Emerging Techniques

**Imaging Mass Cytometry:**
- Multiplexed protein analysis
- Spatial resolution
- Immune cell mapping
- Signaling pathway activation

**Spatial Transcriptomics:**
- Gene expression with location
- Niche-specific signatures
- Cell-cell interactions
- Architectural preservation

**Intravital Microscopy:**
- Real-time airway imaging
- Ciliary function assessment
- Inflammatory cell tracking
- Drug delivery visualization

### Airway Disease Modeling

**Organoid Systems:**
- Basal cell-derived spheroids
- Self-organizing structures
- Ciliated and secretory cells
- Disease phenotype recapitulation

**Microfluidic Airway-on-Chip:**
- Mechanical stretch simulation
- Air-liquid interface
- Immune cell integration
- Personalized medicine platform

**Animal Models:**
- Mouse models of asthma, COPD
- Genetic modification
- Cell type-specific targeting
- Limitations vs human disease

### Precision Diagnostics

**Biomarker Panels:**
- Serum periostatin (Th2 asthma)
- FeNO (eosinophilic inflammation)
- Sputum cytology
- Exhaled breath condensate

**Pharmacogenomics:**
- Beta-agonist response (ADRB2)
- Corticosteroid response
- Individualized therapy selection
- Adverse effect prediction

### Research Frontiers

**Airway Microbiome:**
- Bacterial communities
- Virus-bacteria interactions
- Dysbiosis in disease
- Therapeutic targeting

**Viral Infections:**
- SARS-CoV-2 airway tropism
- ACE2 expression patterns
- Ciliated cell infection
- Repair mechanisms

**Aging Airways:**
- Cellular senescence
- Reduced regenerative capacity
- Increased inflammation
- Susceptibility to infection`,
      keyTerms: [
        { term: 'air-liquid interface', definition: 'Cell culture system where epithelial cells are exposed to air, mimicking in vivo conditions' },
        { term: 'endotype', definition: 'Disease subtype defined by distinct molecular mechanisms' },
        { term: 'field cancerization', definition: 'Presence of pre-malignant changes throughout respiratory tract in smokers' },
        { term: 'spatial transcriptomics', definition: 'Technology measuring gene expression while preserving tissue location' },
        { term: 'organoid', definition: 'Self-organizing 3D tissue culture derived from stem cells' },
      ],
      clinicalNotes: `Key research insights in airway histology:

1. **Single-cell atlases:** The Human Cell Atlas and LungMAP projects are revealing unprecedented heterogeneity in airway epithelial cells, identifying new subtypes and transitional states.

2. **Basal cell therapy:** Autologous basal cell expansion and transplantation shows promise for treating airway diseases including cystic fibrosis and injured airways.

3. **Airway-on-chip:** Microfluidic devices that replicate airway biology are revolutionizing drug testing and personalized medicine approaches.

4. **Senescence:** Cellular senescence in airway epithelium contributes to aging-related lung dysfunction and may be a therapeutic target.

5. **Endotyping:** Moving beyond histology to molecular characterization (Th2-high vs Th2-low asthma) enables precision medicine approaches.

6. **Field cancerization:** Understanding the widespread molecular changes in smokers\' airways is crucial for early lung cancer detection and prevention strategies.

7. **Regeneration:** Unraveling the mechanisms of airway epithelial regeneration after injury (smoking, infection) may lead to therapies that accelerate healing.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'jeffery-airway-review',
      type: 'article',
      title: 'Remodeling and Inflammation of Bronchi in Asthma and Chronic Obstructive Pulmonary Disease',
      authors: ['Jeffery PK'],
      source: 'Proceedings of the American Thoracic Society',
    },
    {
      id: 'rawlins-basal-cells',
      type: 'article',
      title: 'The Airway Epithelium: A Cellular Mosaic of Stem and Progenitor Cells',
      authors: ['Rawlins EL', 'Hogan BL'],
      source: 'Proceedings of the American Thoracic Society',
    },
  ],

  crossReferences: [
    { targetId: 'histology-alveolar-structure', targetType: 'structure', relationship: 'related', label: 'Alveolar Structure' },
    { targetId: 'condition-asthma', targetType: 'condition', relationship: 'related', label: 'Asthma' },
    { targetId: 'condition-copd', targetType: 'condition', relationship: 'related', label: 'COPD' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['histology', 'pulmonology', 'pathology'],
    keywords: ['bronchial tree', 'airway', 'epithelium', 'cilia', 'goblet cells', 'histology'],
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

export default bronchialTreeHistologyContent;
