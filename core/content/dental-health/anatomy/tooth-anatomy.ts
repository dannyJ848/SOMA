/**
 * Tooth Anatomy - Comprehensive Educational Content
 *
 * Covers tooth structure, types of teeth, dental tissues,
 * and clinical correlations for dental and medical professionals.
 */

import { EducationalContent } from '../../types';

export const toothAnatomy: EducationalContent = {
  id: 'structure-tooth-anatomy',
  type: 'structure',
  name: 'Tooth Anatomy',
  alternateNames: [
    'Dental Anatomy',
    'Tooth Structure',
    'Dental Morphology',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Teeth are hard structures in your mouth used for biting and chewing food. Each tooth has a visible crown and hidden roots that hold it in place.',
      explanation: `**What are teeth made of?**

Your teeth are some of the hardest parts of your body! Each tooth has several parts:

**The parts you can see:**
- **Crown**: The white part above your gums that you see when you smile
- **Enamel**: The super-hard, shiny outer layer that protects your tooth (it's the hardest thing in your whole body!)

**The parts hidden inside:**
- **Dentin**: A yellowish layer under the enamel that makes up most of the tooth
- **Pulp**: The soft center with blood vessels and nerves (this is why cavities can hurt!)
- **Root**: The part buried in your jawbone that holds the tooth in place

**Types of teeth:**
You have different teeth for different jobs:
- **Incisors** (front teeth): For biting and cutting food, like scissors
- **Canines** (pointy teeth): For tearing food, like a fork
- **Premolars and Molars** (back teeth): For grinding and chewing, like a mortar and pestle

**How many teeth?**
- Baby teeth: 20 teeth
- Adult teeth: 32 teeth (including wisdom teeth)`,
      keyTerms: [
        { term: 'enamel', definition: 'The hard, white outer coating of a tooth - the hardest substance in your body' },
        { term: 'crown', definition: 'The visible part of the tooth above the gums' },
        { term: 'root', definition: 'The hidden part of the tooth that anchors it in your jaw' },
        { term: 'pulp', definition: 'The soft inside of the tooth containing nerves and blood vessels' },
        { term: 'dentin', definition: 'The layer of tooth under the enamel, softer and yellowish' },
      ],
      analogies: [
        'Enamel is like the hard shell on an M&M candy, protecting the softer inside.',
        'The pulp is like the filling in a jelly donut - it\'s the soft center.',
        'Your teeth are like tools in a toolkit - different shapes for different jobs.',
      ],
      examples: [
        'When you bite into an apple, your front teeth (incisors) cut through it first.',
        'When you have a cavity that reaches the pulp, it hurts because the nerves are exposed.',
      ],
    },
    2: {
      level: 2,
      summary: 'Teeth consist of enamel, dentin, cementum, and pulp tissues. The 32 permanent teeth include incisors, canines, premolars, and molars, each adapted for specific functions in mastication.',
      explanation: `## Tooth Structure

**Hard Tissues:**

1. **Enamel**
   - Outermost layer of the crown
   - 96% mineral (hydroxyapatite crystals)
   - Hardest biological tissue
   - Cannot regenerate once formed
   - Thickness: 2-2.5 mm at cusps, thinner at cervical margin

2. **Dentin**
   - Forms the bulk of the tooth
   - 70% mineral, 20% organic, 10% water
   - Contains microscopic tubules (dentinal tubules)
   - Can form throughout life (secondary and tertiary dentin)
   - More elastic than enamel, provides support

3. **Cementum**
   - Thin layer covering the root surface
   - Similar composition to bone
   - Attachment site for periodontal ligament fibers
   - Thickness: 50-200 micrometers

**Soft Tissue:**

4. **Dental Pulp**
   - Connective tissue in the center
   - Contains blood vessels, nerves, and lymphatics
   - Provides nutrition and sensation
   - Pulp chamber (in crown) and root canals (in roots)

## Tooth Types and Function

| Type | Number (Adult) | Function | Location |
|------|----------------|----------|----------|
| Incisors | 8 | Cutting, biting | Front |
| Canines | 4 | Tearing, piercing | Corners |
| Premolars | 8 | Crushing | Behind canines |
| Molars | 12 | Grinding | Back |

## Supporting Structures (Periodontium)

- **Gingiva** (gums): Soft tissue covering the alveolar bone
- **Periodontal ligament**: Connects tooth to bone
- **Alveolar bone**: The socket that holds the tooth
- **Cementum**: Root surface for ligament attachment`,
      keyTerms: [
        { term: 'enamel', definition: 'Highly mineralized (96%) outer layer of the crown; hardest tissue in the body', pronunciation: 'eh-NAM-el' },
        { term: 'dentin', definition: 'Main structural tissue of tooth containing tubules; 70% mineral', pronunciation: 'DEN-tin' },
        { term: 'cementum', definition: 'Bone-like tissue covering the root; attachment for periodontal ligament', pronunciation: 'seh-MEN-tum' },
        { term: 'pulp', definition: 'Soft tissue core containing neurovascular bundle' },
        { term: 'periodontium', definition: 'Supporting structures: gingiva, periodontal ligament, alveolar bone, cementum', pronunciation: 'pair-ee-oh-DON-shee-um' },
        { term: 'hydroxyapatite', definition: 'Calcium phosphate mineral forming the crystalline structure of enamel', pronunciation: 'hi-DROKS-ee-AP-ah-tite' },
      ],
      analogies: [
        'The layers of a tooth are like the layers of Earth: enamel (crust), dentin (mantle), pulp (core).',
        'Dentinal tubules are like tiny drinking straws running through the dentin, connecting the pulp to the outer layers.',
      ],
    },
    3: {
      level: 3,
      summary: 'Tooth histology reveals enamel prisms oriented perpendicular to the DEJ, dentinal tubules radiating from the pulp, and specialized pulpal tissues. Understanding tooth development (odontogenesis) explains congenital anomalies.',
      explanation: `## Enamel Microstructure

**Enamel Prisms (Rods):**
- Tightly packed crystalline rods running from DEJ to surface
- Each prism: ~4 micrometers diameter
- Keyhole/paddlelike cross-section
- Orientation changes create Hunter-Schreger bands
- Gnarled enamel near cusps and incisal edges

**Enamel Features:**
- Striae of Retzius: Incremental growth lines
- Perikymata: External manifestations of Retzius lines
- Enamel tufts, lamellae, spindles: Structural defects
- Dentinoenamel junction (DEJ): Scalloped interface with dentin

**Enamel Composition:**
- 96% inorganic (hydroxyapatite: Ca₁₀(PO₄)₆(OH)₂)
- Substitutions: Fluorapatite (fluoride replaces OH⁻), carbonated apatite
- 1% organic matrix (enamelins, amelogenins remnants)
- 3% water

## Dentin Microstructure

**Dentinal Tubules:**
- 20,000-75,000 tubules/mm² (more near pulp)
- Contain odontoblast processes
- S-shaped course (primary curvature)
- Secondary curvatures in root dentin

**Dentin Types:**
1. **Primary dentin**: Formed during tooth development
2. **Secondary dentin**: Physiologic, formed after root completion
3. **Tertiary (reparative) dentin**: Response to injury/caries
   - Reactionary: From surviving odontoblasts
   - Reparative: From newly differentiated cells

**Dentin Composition:**
- 70% inorganic (hydroxyapatite)
- 20% organic (Type I collagen, proteoglycans)
- 10% water

## Pulp Histology

**Zones (outer to inner):**
1. Odontoblast layer: Dentin-producing cells
2. Cell-free zone (of Weil): Sparse cells
3. Cell-rich zone: Fibroblasts, defense cells
4. Pulp core: Neurovascular bundle

**Pulp Contents:**
- Odontoblasts
- Fibroblasts
- Undifferentiated mesenchymal cells
- Immune cells (dendritic cells, macrophages)
- Nerves: A-delta (sharp pain) and C fibers (dull pain)
- Blood vessels: Arterioles, venules, capillaries

## Tooth Development (Odontogenesis)

**Stages:**
1. **Initiation** (6-7 weeks IU): Dental lamina formation
2. **Bud stage**: Epithelial thickening
3. **Cap stage**: Enamel organ forms
4. **Bell stage**: Differentiation of ameloblasts and odontoblasts
5. **Maturation**: Hard tissue formation

**Key Structures:**
- Enamel organ: Inner/outer enamel epithelium, stellate reticulum, stratum intermedium
- Dental papilla: Becomes pulp and dentin
- Dental follicle: Becomes periodontium`,
      keyTerms: [
        { term: 'enamel prism', definition: 'Crystalline rod of hydroxyapatite running from DEJ to enamel surface; basic structural unit of enamel' },
        { term: 'dentinal tubule', definition: 'Microscopic canal containing odontoblast process; permits sensitivity and permeability' },
        { term: 'odontoblast', definition: 'Dentin-producing cell lining the pulp chamber; process extends into tubules' },
        { term: 'ameloblast', definition: 'Enamel-producing cell from inner enamel epithelium; dies after enamel formation' },
        { term: 'dentinoenamel junction (DEJ)', definition: 'Scalloped interface between enamel and dentin' },
        { term: 'tertiary dentin', definition: 'Dentin formed in response to injury; reactionary or reparative' },
      ],
      clinicalNotes: 'Understanding dentin permeability explains why deep cavities cause pain - dentinal tubules transmit stimuli to the pulp. Tertiary dentin formation is a protective response that can sometimes prevent pulp exposure in slowly progressing caries.',
    },
    4: {
      level: 4,
      summary: 'Advanced tooth biology encompasses the molecular regulation of odontogenesis, enamel biomechanics at the nanoscale, pulp-dentin complex immune responses, and the relationship between dental development and systemic genetic disorders.',
      explanation: `## Molecular Odontogenesis

**Signaling Cascades:**

**Initiation and Patterning:**
- Epithelial-mesenchymal interactions
- Signaling centers: Enamel knots (primary and secondary)
- Key pathways: Shh, Wnt/β-catenin, BMP, FGF

**Transcription Factors:**
| Factor | Role | Associated Conditions |
|--------|------|----------------------|
| PAX9 | Tooth initiation | Oligodontia |
| MSX1 | Early development | Tooth agenesis, clefting |
| RUNX2 | Odontoblast differentiation | Cleidocranial dysplasia |
| DLX1/2 | Mandibular patterning | - |
| PITX2 | Incisor/canine specification | Rieger syndrome |

**Amelogenesis:**
- AMELX gene: Amelogenin (90% of enamel matrix)
- ENAM: Enamelin (nucleation)
- AMBN: Ameloblastin (cell adhesion)
- MMP20: Enamelysin (matrix processing)
- KLK4: Maturation stage protease

**Dentinogenesis:**
- DSPP: Dentin sialophosphoprotein → DSP + DPP
- Type I collagen (COL1A1/COL1A2)
- DMP1: Dentin matrix protein 1 (mineralization)

## Enamel Biomechanics

**Hierarchical Structure:**
- Nanoscale: Hydroxyapatite crystallites (50nm × 25nm × 1000+ nm)
- Microscale: Prisms (rods) 4-8 μm diameter
- Macroscale: Prism orientation, DEJ architecture

**Mechanical Properties:**
- Elastic modulus: 70-120 GPa (direction-dependent)
- Hardness: 3-5 GPa (highest of biological tissues)
- Brittleness offset by underlying dentin flexibility
- DEJ acts as crack deflection zone

**Wear Resistance:**
- Self-healing capacity via ion exchange with saliva
- Fluorapatite more resistant than hydroxyapatite
- Prism decussation prevents crack propagation

## Pulp-Dentin Complex Immunology

**Innate Immune Response:**
- Odontoblasts express TLRs (TLR2, TLR4) → detect bacterial PAMPs
- Cytokine production: IL-1β, TNF-α, IL-6, IL-8
- Recruitment of dendritic cells, macrophages, neutrophils

**Adaptive Response:**
- Antigen-presenting cells migrate to regional lymph nodes
- T-cell activation (Th1/Th2/Th17 responses)
- Antibody production (less prominent)

**Neurogenic Inflammation:**
- Neuropeptide release: Substance P, CGRP
- Vasodilation, increased permeability
- Neurogenic contribution to pulpal inflammation

**Pulp Repair Capacity:**
- Stem cells in pulp: Dental pulp stem cells (DPSCs)
- Can differentiate into odontoblast-like cells
- Tertiary dentin formation limited by:
  - Severity of injury
  - Blood supply compromise
  - Patient age

## Genetic Disorders Affecting Teeth

**Amelogenesis Imperfecta (AI):**
- Enamel defects: Hypoplastic, hypomineralized, hypomatured
- Genes: AMELX, ENAM, MMP20, KLK4, FAM83H
- Prevalence: 1:700 to 1:14,000

**Dentinogenesis Imperfecta (DI):**
- Type I: Associated with osteogenesis imperfecta (COL1A1/A2)
- Type II: DSPP mutations (most common isolated form)
- Type III: DSPP mutations (Brandywine type)
- Features: Opalescent teeth, bulbous crowns, obliterated pulps

**Dentin Dysplasia:**
- Type I: Root malformation, periapical radiolucencies
- Type II: Thistle-tube pulp chambers

**Hypodontia/Oligodontia:**
- PAX9: Molars predominantly affected
- MSX1: Second premolars and third molars
- AXIN2: Also associated with colorectal cancer risk`,
      keyTerms: [
        { term: 'enamel knot', definition: 'Signaling center in developing tooth that regulates cusp patterning via Shh, BMP, FGF' },
        { term: 'amelogenesis imperfecta', definition: 'Hereditary enamel defects caused by mutations in amelogenin pathway genes' },
        { term: 'dentinogenesis imperfecta', definition: 'Hereditary dentin defect with opalescent teeth; DSPP or collagen mutations' },
        { term: 'dental pulp stem cells (DPSCs)', definition: 'Mesenchymal stem cells in pulp with multilineage differentiation potential' },
        { term: 'DSPP', definition: 'Dentin sialophosphoprotein; major noncollagenous dentin protein' },
        { term: 'TLR', definition: 'Toll-like receptor; pattern recognition receptor on odontoblasts detecting bacteria' },
      ],
      clinicalNotes: 'Patients with osteogenesis imperfecta often have dentinogenesis imperfecta - screen for dental manifestations. AXIN2 mutations causing oligodontia are associated with colorectal cancer risk - genetic counseling indicated. DPSCs are being investigated for regenerative endodontics.',
    },
    5: {
      level: 5,
      summary: 'Contemporary dental science explores regenerative endodontics using pulp stem cells, biomimetic enamel remineralization strategies, and the oral-systemic axis connecting dental pathology to cardiovascular disease, diabetes, and adverse pregnancy outcomes.',
      explanation: `## Regenerative Endodontics

**Current Paradigm:**
Traditional root canal therapy replaces vital pulp with inert filling. Regenerative approaches aim to restore pulp vitality and function.

**Revascularization/Revitalization:**
- Indication: Necrotic immature permanent teeth
- Protocol: Disinfection → blood clot scaffold → MTA barrier → restoration
- Outcomes: Root maturation, apical closure; true pulp regeneration debated

**Stem Cell-Based Approaches:**

| Cell Type | Source | Potential |
|-----------|--------|-----------|
| DPSCs | Permanent pulp | Dentin-pulp regeneration |
| SHED | Primary teeth | Higher proliferation |
| SCAPs | Apical papilla | Root development |
| PDLSCs | Periodontal ligament | Periodontium regeneration |

**Scaffolds:**
- Natural: Collagen, fibrin, decellularized matrix
- Synthetic: PLGA, PEG, self-assembling peptides
- Growth factors: TGF-β, BMPs, VEGF, FGF

**Challenges:**
- Vascularization of regenerated tissue
- Innervation recovery
- Functional dentin formation vs. bone-like tissue
- Regulatory pathway for clinical translation

## Advanced Enamel Biology and Remineralization

**Remineralization Strategies:**

1. **Fluoride:**
   - Mechanism: Forms fluorapatite, inhibits demineralization
   - Optimal: Low-concentration, high-frequency exposure
   - Topical >> systemic for caries prevention

2. **Casein Phosphopeptide-Amorphous Calcium Phosphate (CPP-ACP):**
   - Stabilizes supersaturated calcium/phosphate
   - Delivers ions to enamel surface
   - Clinical products: MI Paste, Tooth Mousse

3. **Bioactive Glass:**
   - Releases calcium, phosphate, silica ions
   - Precipitates hydroxycarbonate apatite
   - Used in sensitivity treatment

4. **Self-Assembling Peptides:**
   - P11-4: Nucleates hydroxyapatite formation
   - Infiltrates early lesions
   - Clinical trials: Curodont Repair

**Biomimetic Enamel Engineering:**
- Amelogenin-based approaches
- Hierarchical crystal growth
- Not yet clinically available

## Oral-Systemic Health Connections

**Cardiovascular Disease:**

*Evidence:*
- Periodontitis associated with 1.5-2x increased CVD risk
- Meta-analyses: Significant association with MI, stroke, peripheral artery disease
- Periodontal treatment may improve endothelial function

*Mechanisms:*
- Bacteremia: P. gingivalis DNA found in atherosclerotic plaques
- Systemic inflammation: Elevated CRP, IL-6, TNF-α
- Molecular mimicry: Bacterial HSP cross-reaction
- Direct invasion: P. gingivalis infects endothelial cells

**Diabetes Mellitus:**

*Bidirectional Relationship:*
- Diabetes → periodontal disease: 2-3x risk
  - Impaired neutrophil function
  - AGE accumulation in periodontium
  - Altered collagen metabolism

- Periodontal disease → diabetes: Poor glycemic control
  - Meta-analysis: Periodontal treatment reduces HbA1c by 0.4%
  - Chronic inflammation → insulin resistance

*Clinical Implications:*
- ADA/AAP: Periodontal exam for all diabetics
- Optimize periodontal health to improve glycemic control

**Adverse Pregnancy Outcomes:**

*Associations:*
- Preterm birth (OR ~1.6)
- Low birth weight
- Preeclampsia

*Mechanisms:*
- Hematogenous spread of periodontal pathogens
- Inflammatory mediators (PGE2, TNF-α) → uterine contractions
- F. nucleatum crosses placenta in animal models

*Clinical Evidence:*
- Periodontal treatment during pregnancy is safe
- Prevention of APO by treatment: Mixed results in RCTs

**Other Systemic Associations:**

| Condition | Association | Strength |
|-----------|-------------|----------|
| Rheumatoid arthritis | P. gingivalis PPAD → citrullination | Moderate-strong |
| Alzheimer's disease | P. gingivalis in brain; gingipains | Emerging |
| Respiratory infections | Aspiration of oral pathogens | Strong |
| Chronic kidney disease | Bidirectional inflammation | Moderate |

## Precision Dentistry

**Salivary Diagnostics:**
- Biomarkers for caries risk, periodontal disease
- Systemic disease detection (cancer, cardiovascular)
- Pharmacogenomics for drug metabolism

**Caries Risk Assessment:**
- CAMBRA (Caries Management by Risk Assessment)
- Integration of clinical, behavioral, biological factors
- Personalized prevention protocols

**Genetic Susceptibility:**
- Caries: CA6, DSPP, AMELX variants
- Periodontitis: IL-1 polymorphisms, Fc receptors
- Future: Targeted interventions based on genetic profile`,
      keyTerms: [
        { term: 'revascularization/revitalization', definition: 'Regenerative endodontic procedure using blood clot scaffold to enable root maturation in necrotic immature teeth' },
        { term: 'SHED', definition: 'Stem cells from human exfoliated deciduous teeth; high proliferative capacity' },
        { term: 'CPP-ACP', definition: 'Casein phosphopeptide-amorphous calcium phosphate; delivers remineralizing ions to enamel' },
        { term: 'P. gingivalis', definition: 'Porphyromonas gingivalis; keystone pathogen in periodontitis with systemic implications' },
        { term: 'PPAD', definition: 'Peptidylarginine deiminase from P. gingivalis; citrullinates proteins, linked to RA pathogenesis' },
        { term: 'CAMBRA', definition: 'Caries Management by Risk Assessment; evidence-based caries prevention protocol' },
      ],
      clinicalNotes: `Clinical pearls for oral-systemic health:
1. All diabetic patients should have periodontal screening; treatment may improve HbA1c
2. Consider periodontal evaluation in patients with unexplained elevated CRP
3. Preoperative dental clearance reduces endocarditis, prosthetic joint infection risk
4. P. gingivalis association with Alzheimer's is being actively investigated - watch emerging data
5. Regenerative endodontics is standard of care for necrotic immature permanent teeth
6. Fluoride varnish application is cost-effective population-level caries prevention
7. Salivary diagnostics are emerging for chairside disease risk assessment`,
    },
  },

  media: [
    {
      id: 'tooth-cross-section',
      type: 'diagram',
      filename: 'tooth-anatomy-cross-section.svg',
      title: 'Tooth Cross-Section',
      description: 'Diagram showing enamel, dentin, pulp, cementum, and periodontal structures',
    },
    {
      id: 'tooth-types',
      type: 'diagram',
      filename: 'tooth-types-comparison.svg',
      title: 'Types of Teeth',
      description: 'Comparison of incisors, canines, premolars, and molars',
    },
  ],

  citations: [
    {
      id: 'nanci-oral-histology',
      type: 'textbook',
      title: 'Ten Cate\'s Oral Histology',
      authors: ['Nanci, A.'],
      source: 'Elsevier',
      chapter: 'Chapters 5-8',
    },
    {
      id: 'hargreaves-pathways',
      type: 'textbook',
      title: 'Cohen\'s Pathways of the Pulp',
      authors: ['Hargreaves, K.M.', 'Berman, L.H.'],
      source: 'Elsevier',
    },
  ],

  crossReferences: [
    { targetId: 'structure-gum-anatomy', targetType: 'structure', relationship: 'sibling', label: 'Gum Anatomy' },
    { targetId: 'condition-cavities-decay', targetType: 'condition', relationship: 'related', label: 'Cavities and Decay' },
    { targetId: 'procedure-root-canal-therapy', targetType: 'topic', relationship: 'see-also', label: 'Root Canal Therapy' },
  ],

  tags: {
    systems: ['digestive', 'dental'],
    structures: ['tooth', 'enamel', 'dentin', 'pulp'],
    topics: ['anatomy', 'histology', 'development'],
    keywords: ['tooth', 'dental anatomy', 'enamel', 'dentin', 'pulp', 'odontogenesis'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default toothAnatomy;
