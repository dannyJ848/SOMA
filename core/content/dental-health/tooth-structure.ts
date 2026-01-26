/**
 * Tooth Structure - Comprehensive Educational Content
 *
 * Covers the detailed histology of tooth tissues including enamel,
 * dentin, cementum, and pulp. Explains the microscopic organization
 * and clinical significance of each tissue type.
 */

import { EducationalContent } from '../types';

export const toothStructure: EducationalContent = {
  id: 'structure-tooth-structure',
  type: 'structure',
  name: 'Tooth Structure',
  alternateNames: [
    'Dental Tissues',
    'Tooth Histology',
    'Dental Hard Tissues',
    'Tooth Composition',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Teeth are made of four main types of tissue: enamel (the hard outer shell), dentin (the middle layer), cementum (covering the root), and pulp (the soft center with nerves and blood vessels).',
      explanation: `**The Four Tissues of a Tooth**

Your teeth are like a layered cake, with each layer having a special job:

**1. Enamel - The Hard Shield**
- The white, shiny part you see when you smile
- Hardest substance in your entire body!
- Protects the softer inner layers
- Cannot grow back once damaged

**2. Dentin - The Middle Layer**
- Underneath the enamel
- Makes up most of the tooth
- Yellowish color (shows through thin enamel)
- Has tiny tubes that can sense heat and cold

**3. Cementum - The Root Cover**
- Covers the roots of your teeth
- Helps attach the tooth to the jawbone
- Softer than enamel
- You can\'t see it - it\'s under your gums

**4. Pulp - The Living Center**
- Soft tissue in the very center
- Contains blood vessels and nerves
- Keeps the tooth alive and healthy
- This is why a deep cavity hurts!

**How These Layers Work Together:**

Enamel protects the dentin like a shell. When you eat sweet foods, acids can make holes in the enamel (cavities). If the cavity goes through to the dentin, you might feel sensitivity. If it reaches the pulp, you'll probably have a toothache!

**Fun Fact:**
Enamel is harder than bone, but it can't repair itself like bone can. That's why it's so important to protect your teeth by brushing and avoiding too much sugar!`,
      keyTerms: [
        { term: 'enamel', definition: 'The super-hard white outer layer of your tooth that you can see' },
        { term: 'dentin', definition: 'The yellowish layer under the enamel that makes up most of your tooth' },
        { term: 'cementum', definition: 'The covering on the roots that helps hold the tooth in place', pronunciation: 'seh-MEN-tum' },
        { term: 'pulp', definition: 'The soft center of the tooth containing nerves and blood vessels' },
      ],
      analogies: [
        'A tooth is like a house: enamel is the roof and walls, dentin is the structure, and pulp is the living area inside.',
        'Enamel is like the shell on a hard-boiled egg - hard on the outside, soft on the inside.',
        'Dentinal tubes are like tiny straws that let feelings travel to the nerve center.',
      ],
      examples: [
        'When you drink hot chocolate and your tooth hurts, the heat is traveling through the dentin tubes to the pulp.',
        'If you chip your tooth, the enamel layer has been damaged, exposing the dentin underneath.',
      ],
      patientCounselingPoints: [
        'Once enamel is gone, it cannot grow back - that\'s why prevention is so important!',
        'Yellow teeth usually mean the enamel has worn thin, letting the dentin show through.',
        'Sensitive teeth often have exposed dentin from receding gums or worn enamel.',
      ],
    },
    2: {
      level: 2,
      summary: 'Tooth structure consists of four distinct tissues: enamel (96% mineral, hardest biological tissue), dentin (70% mineral with tubules), cementum (bone-like root covering), and pulp (vascular connective tissue).',
      explanation: `## The Four Dental Tissues

### Hard Tissues (Three)

**1. Enamel**
- **Composition**: 96% mineral, 3% water, 1% organic
- **Primary mineral**: Hydroxyapatite crystals
- **Thickness**: 2.5mm at cusps, thinning toward cervical line
- **Hardest biological tissue in the body**
- **Avascular**: No blood supply, cannot regenerate
- **Functions**: Protection, mastication, esthetics

**2. Dentin**
- **Composition**: 70% mineral, 20% organic, 10% water
- **Primary structure**: Dentinal tubules (microscopic canals)
- **Tubule density**: 20,000-75,000 per square millimeter
- **Forms throughout life**: Primary, secondary, and tertiary dentin
- **Sensitivity**: Transmits thermal, mechanical, chemical stimuli
- **Color**: Yellowish (affects overall tooth color)

**3. Cementum**
- **Composition**: 45-50% mineral (similar to bone)
- **Location**: Covers the entire root surface
- **Thickness**: 50-200 micrometers (thickest at apex)
- **Attachment**: Periodontal ligament fibers insert here
- **Types**: Cellular (apical) and acellular (cervical)
- **Continuous deposition**: Increases with age

### Soft Tissue (One)

**4. Dental Pulp**
- **Location**: Central chamber and root canals
- **Composition**: Connective tissue with blood vessels, nerves, lymphatics
- **Functions**:
  - Nutrition: Supplies blood to dentin
  - Sensation: Pain, temperature, touch
  - Defense: Immune response to injury
  - Formation: Produces dentin (primary, secondary, tertiary)
- **Pulp horns**: Extensions into cusps

## Structural Relationships

**From Outside In:**
1. Enamel (crown only)
2. Dentin (crown and root)
3. Cementum (root only)
4. Pulp (center of crown and roots)

**Key Junctions:**
- **CEJ (Cemento-enamel junction)**: Where enamel and cementum meet
  - 60%: Butt joint
  - 30%: Cementum overlaps enamel
  - 10%: Gap (exposed dentin)

**DEJ (Dentinoenamel junction)**: Scalloped interface between enamel and dentin
- Prevents crack propagation
- Stronger bond than either tissue alone

## Clinical Significance

| Tissue | Injury | Consequence | Treatment |
|--------|--------|-------------|-----------|
| Enamel | Caries | Cavity forms | Filling |
| Dentin exposed | Sensitivity | Pain response | Desensitizing agents |
| Pulp exposed | Inflammation | Pain, possible necrosis | Root canal or extraction |
| Cementum lost | Root sensitivity | Pain on exposure | Desensitizing, coverage |`,
      keyTerms: [
        { term: 'hydroxyapatite', definition: 'Calcium phosphate mineral that forms the crystalline structure of enamel and dentin', pronunciation: 'hi-DROKS-ee-AP-ah-tite' },
        { term: 'dental tubules', definition: 'Microscopic canals in dentin that contain nerve endings and transmit sensations' },
        { term: 'CEJ', definition: 'Cemento-enamel junction; the line where the crown enamel meets root cementum' },
        { term: 'DEJ', definition: 'Dentinoenamel junction; the scalloped boundary between enamel and dentin' },
        { term: 'pulp chamber', definition: 'The space in the crown containing the pulp tissue' },
        { term: 'root canal', definition: 'The portion of the pulp chamber extending down the root' },
      ],
      analogies: [
        'The DEJ is like Velcro - the scalloped interface creates a strong mechanical bond.',
        'Dentinal tubules are like tiny straws that connect the outside of the tooth to the nerve center.',
        'The pulp chamber is like the living room of the tooth - where all the vital supplies enter.',
      ],
      clinicalNotes: 'Dentin sensitivity occurs when tubules are exposed by enamel loss, gingival recession, or cervical abrasion. The DEJ\'s scalloped architecture prevents enamel cracks from spreading into dentin - an evolutionary adaptation.',
      patientCounselingPoints: [
        'Exposed dentin causes sensitivity - use desensitizing toothpaste with potassium nitrate',
        'Grinding teeth can wear away enamel, exposing sensitive dentin',
      ],
    },
    3: {
      level: 3,
      summary: 'Dental hard tissues have complex microstructural organization: enamel consists of interlocking prisms, dentin contains tubules with odontoblast processes, and cementum exhibits incremental lines. The pulp-dentin complex functions as a biological unit.',
      explanation: `## Enamel Microstructure

**Enamel Prisms (Rods):**
- Dimensions: ~4-5 μm diameter, 2-3 μm at tails
- Course: Winding path from DEJ to surface
- Orientation: Perpendicular at DEJ, more complex superficially
- Keyhole cross-section with "tail" pointing occlusally
- Hunter-Schreger bands: Alternating light/dark bands from prism decussation
  - Prevents crack propagation
  - More pronounced in thick enamel areas

**Interprismatic Enamel:**
- Crystals oriented differently than prisms
- Reinforces structure between prisms
- More prominent near DEJ

**Enamel Lamellae:**
- Thin, sheet-like defects
- Extend from surface toward DEJ
- May be pathway for bacterial penetration

**Incremental Growth Lines:**
- **Striae of Retzius**: Incremental lines from enamel formation rhythm
- **Perikymata**: Surface manifestation of Retzius lines
- **Neonatal line**: Accentuated line at birth
- **Cross-striations**: Daily increments (4 μm intervals)

**Crystalline Structure:**
- Hydroxyapatite: Ca₁₀(PO₄)₆(OH)₂
- Crystal size: 50 × 25 × 1000+ nanometers
- Substitutions: Fluoride (F⁻), carbonate (CO₃²⁻), chloride (Cl⁻)
- Fluorapatite > Hydroxyapatite (more acid-resistant)

## Dentin Microstructure

**Dentinal Tubules:**
- Density: Highest near pulp (~75,000/mm²), lowest at DEJ (~20,000/mm²)
- Diameter: ~2.5 μm at pulp, ~1 μm at DEJ
- Course: S-shaped (primary curvature), more complex in root
- Contents: Odontoblast process, fluid, nerve fibers (Aδ and C)

**Peritubular and Intertubular Dentin:**
- **Peritubular**: Highly calcified collar around tubule
- **Intertubular**: Between tubules, less calcified
- Ratio varies by location, age

**Dentin Types:**
1. **Primary dentin**: Formed during tooth development
2. **Secondary dentin**: Physiologic, continuous after root completion
3. **Tertiary dentin**: Response to injury
   - **Reactionary**: From surviving odontoblasts
   - **Reparative**: From new odontoblast-like cells

**Incremental Lines:**
- **Von Ebner lines**: 5-10 day increments (in root dentin)
- **Imbrication lines**: Longer-term pattern
- **Tomes granular layer**: In root dentin near CEJ

**Interglobular Dentin:**
- Areas of incomplete mineralization
- Common in coronal dentin
- More prominent in vitamin D deficiency

## Cementum Structure

**Acellular Cementum (AF):**
- Location: Cervical two-thirds of root
- First formed, lacks cells (cementocytes)
- Type I collagen fibers: Sharpey's fibers from PDL
- Function: PDL attachment

**Cellular Cementum (CF):**
- Location: Apical third, furcation areas
- Contains cementocytes in lacunae
- Formed after AF
- Incremental lines: 20-30 μm apart

**Cementoenamel Junction (CEJ) Types:**
1. ** Butt joint**: Enamel meets cementum (60%)
2. **Cementum overlaps enamel** (30%)
3. **Gap with exposed dentin** (10%) - cervical sensitivity risk

## Pulp-Dentin Complex

**Pulp Zones (peripheral to central):**
1. **Odontoblast layer**: Single layer of dentin-forming cells
2. **Cell-free zone of Weil**: Few cells, rich in nerves and capillaries
3. **Cell-rich zone**: Fibroblasts, undifferentiated mesenchymal cells
4. **Pulp core**: Major vessels and nerves

**Odontoblasts:**
- High columnar cells (50 μm tall)
- Process extends full length of dentinal tubule
- Primary function: Dentin formation (dentinogenesis)
- Secondary functions: Sensory, immune, defensive

**Pulp Vascularity:**
- Arterioles: From apical foramen, branch peripherally
- Capillaries: Dense in odontoblast layer
- Venules: Drain to apical veins
- No lymphatic vessels in pulp (drainage via periapical tissues)

**Pulp Innervation:**
- Aδ fibers: Sharp, localized pain (myelinated)
- C fibers: Dull, aching pain (unmyelinated)
- Autonomic: Sympathetic vasomotor fibers
- No proprioceptive fibers in pulp`,
      keyTerms: [
        { term: 'enamel prism', definition: 'Crystalline rod of hydroxyapatite oriented from DEJ to surface; basic structural unit of enamel' },
        { term: 'Hunter-Schreger bands', definition: 'Alternating light/dark bands in enamel from prism decussation; visible in reflected light' },
        { term: 'Striae of Retzius', definition: 'Incremental growth lines in enamel from rhythmic enamel deposition' },
        { term: 'peritubular dentin', definition: 'Highly mineralized collar surrounding each dentinal tubule' },
        { term: 'Sharpey\'s fibers', definition: 'Collagen fibers from periodontal ligament inserting into cementum and alveolar bone' },
        { term: 'odontoblast', definition: 'Dentin-forming cell lining the pulp; extends process into dentinal tubule' },
        { term: 'zone of Weil', definition: 'Cell-free zone in pulp rich in nerves and capillaries' },
      ],
      clinicalNotes: 'Dentin permeability decreases with age due to continued dentin deposition (sclerosis). Aδ fibers respond to stimuli applied to dentin (hydrodynamic theory), while C fibers fire primarily during inflammation. The DEJ\'s scalloped shape creates a large surface area for stress transfer.',
      patientCounselingPoints: [
        'Dentin sensitivity occurs because fluid movement in tubules triggers nerve impulses',
        'Age-related dentin thickening reduces sensitivity but also reduces pulp chamber size',
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced tooth biology encompasses the molecular regulation of amelogenesis and dentinogenesis, enamel biomechanics at the nanoscale, pulp stem cell biology, and the genetic basis of dental tissue disorders.',
      explanation: `## Molecular Regulation of Dental Tissues

### Amelogenesis (Enamel Formation)

**Stages:**

1. **Presecretory**: Differentiation of ameloblasts
2. **Secretory**: Enamel matrix deposition
3. **Transition**: Major protein change
4. **Maturation**: Mineralization, protein removal

**Key Proteins:**

| Protein | Gene | Function | Stage |
|---------|------|----------|-------|
| Amelogenin | AMELX/AMELY | 90% of matrix, scaffold | Secretory |
| Enamelin | ENAM | Nucleation, framework | Secretory |
| Ameloblastin | AMBN | Cell adhesion | Secretory |
| Amamelin | AMTN | Maturation | Maturation |
| Enamelysin | MMP20 | Matrix processing | Secretory |
| Kallikrein-4 | KLK4 | Matrix removal | Maturation |

**Protein Processing:**
- MMP20 processes initial matrix during secretion
- KLK4 degrades proteins during maturation
- Residual proteins <1% in mature enamel

**Regulatory Transcription Factors:**
- **MSX2**: Ameloblast differentiation
- **RUNX2**: Early enamel formation
- **DLX3**: Amelogenin expression (mutations cause tricho-dento-osseous syndrome)
- **SP6**: Ameloblast-specific transcription factor

### Dentinogenesis (Dentin Formation)

**Key Proteins:**

| Protein | Gene | Function |
|---------|------|----------|
| DSPP | DSPP | Sialophosphoprotein → DSP + DPP |
| DMP1 | DMP1 | Matrix organization, mineralization |
| DSP | DSPP | Dentin sialoprotein |
| DPP | DSPP | Dentin phosphoprotein |
| Type I collagen | COL1A1/A2 | Fibrillar scaffold |

**DSPP Processing:**
- Synthesized as full-length protein
- Cleaved into DSP and DPP
- DPP: Highly phosphorylated, nucleates hydroxyapatite
- DSP: Regulates mineralization

**Signaling Pathways:**
- **BMP**: Triggers odontoblast differentiation
- **TGF-β**: Maintains odontoblast phenotype
- **Wnt/β-catenin**: Cell fate decisions
- **FGF**: Proliferation of dental papilla cells

### Cementogenesis

**Cementoblast Origin:**
- From follicular mesenchyme
- Hertwig\'s epithelial root sheath induces differentiation
- ERM (epithelial cell rests of Malassez) involved

**Regulators:**
- **BMP2/4**: Cementoblast differentiation
- **Cementum protein 1 (CEMP1)**: Specific marker
- **Periodontal ligament-associated protein-1 (PLAP-1)**

## Enamel Biomechanics

**Hierarchical Structure:**
1. **Nanoscale**: Hydroxyapatite crystals (50 × 25 × 1000+ nm)
2. **Microscale**: Prisms (4-8 μm diameter) with interprismatic enamel
3. **Mesoscale**: Hunter-Schreger bands, enamel rods organization
4. **Macroscale**: Tooth shape, enamel thickness distribution

**Mechanical Properties:**
| Property | Value | Significance |
|----------|-------|--------------|
| Elastic modulus | 70-120 GPa | Stiffness, varies by prism orientation |
| Hardness | 3-5 GPa | Wear resistance |
| Fracture toughness | 0.7-1.5 MPa·m¹/² | Crack resistance |
| Density | 2.9 g/cm³ | Compact structure |

**Anisotropy:**
- Prisms oriented perpendicular to DEJ
- Mechanical properties vary by direction
- Enamel stiffer parallel to prisms

**Crack Propagation Resistance:**
- DEJ acts as crack deflection zone
- Prism decussation (Hunter-Schreger bands) blunts cracks
- Uncracked ligament bridge mechanism

**Wear and Abrasion:**
- Enamel wears at ~0.3 μm/year with normal mastication
- Attrition (tooth-tooth): ~20-40 μm/year
- Abrasion (external agents): Variable, can be dramatic

**Remineralization:**
- Surface layer can exchange ions with saliva
- Fluoride incorporation forms fluorapatite
- CPP-ACP delivers calcium and phosphate
- Limit: Cannot restore extensive crystalline structure

## Pulp Stem Cell Biology

**Stem Cell Types:**

| Cell Type | Source | Potential |
|-----------|--------|-----------|
| DPSC | Dental pulp | Dentin-pulp complex |
| SHED | Exfoliated deciduous | Higher proliferation |
| SCAP | Apical papilla | Root formation |
| PDLSC | Periodontal ligament | Periodontium |
| DFSC | Dental follicle | Periodontium |

**DPSC Characteristics:**
- CD73+, CD90+, CD105+, CD166+
- Negative for hematopoietic markers
- Clonogenic, multipotent
- Osteogenic/dentinogenic differentiation

**Regenerative Potential:**
- Tertiary dentin formation
- Vascularization potential
- Neural differentiation capacity
- Immunomodulatory properties

**Clinical Translation:**
- Revascularization protocols for immature teeth
- Cell-based pulp regeneration (experimental)
- Scaffold-based tissue engineering

## Genetic Disorders of Dental Tissues

**Amelogenesis Imperfecta (AI):**
- Incidence: 1:700 to 1:14,000
- Types:
  - **Hypoplastic**: Thin enamel (AMELX, ENAM)
  - **Hypomaturation**: Soft enamel (MMP20, KLK4)
  - **Hypocalcified**: Normal thickness, poorly mineralized (FAM83H)
- Inheritance: X-linked, autosomal dominant/recessive
- Treatment: Full coverage restorations

**Dentinogenesis Imperfecta (DI):**
- Type I: With osteogenesis imperfecta (COL1A1, COL1A2)
- Type II: Isolated (DSPP)
- Type III: Brandywine type (DSPP)
- Clinical: Opalescent teeth, bulbous crowns, cervical constriction, obliterated pulp chambers

**Dentin Dysplasia:**
- Type I: Radicular dentin dysplasia
  - Short roots, obliterated canals, periapical radiolucencies
- Type II: Coronal dentin dysplasia
  - Thistle-tube pulp chambers, permanent teeth affected
  - Primary teeth: Opalescent (like DI)

**Regional Odontodysplasia:**
- "Ghost teeth" appearance
- Both enamel and dentin affected
- Localized, etiology unknown`,
      keyTerms: [
        { term: 'amelogenesis', definition: 'The process of enamel formation by ameloblasts' },
        { term: 'dentinogenesis', definition: 'The process of dentin formation by odontoblasts' },
        { term: 'DSPP', definition: 'Dentin sialophosphoprotein; major noncollagenous dentin protein' },
        { term: 'DPSC', definition: 'Dental pulp stem cells; mesenchymal stem cells from pulp tissue' },
        { term: 'hydrodynamic theory', definition: 'Theory that dentin sensitivity results from fluid movement in tubules stimulating nerve endings' },
        { term: 'CEMP1', definition: 'Cementum protein 1; marker for cementoblast differentiation' },
      ],
      clinicalNotes: 'AI requires genetic testing for precise diagnosis. DI type I patients need osteogenesis imperfecta evaluation. DPSCs show promise for regenerative endodontics but vascularization remains a challenge. Enamel cannot truly regenerate because ameloblasts die after tooth eruption.',
    },
    5: {
      level: 5,
      summary: 'Contemporary research in tooth biology focuses on biomimetic enamel regeneration, stem cell-based pulp therapies, molecular diagnostics for dental disorders, and the role of dental tissues as biomarkers of systemic health and environmental exposure.',
      explanation: `## Emerging Frontiers in Tooth Biology

### Biomimetic Enamel Regeneration

**Current Limitations:**
- Enamel cannot biologically regenerate (ameloblasts post-apoptotic)
- Current treatments are restorative, not regenerative

**Biomimetic Approaches:**

1. **Protein-Mediated Remineralization:**
   - Amelogenin-inspired peptides (e.g., LRAP)
   - Self-assembling peptide scaffolds (P11-4)
   - Guided hydroxyapatite crystallization
   - Status: Early clinical trials (Curodont)

2. **ACP/DCPD Precursors:**
   - Amorphous calcium phosphate precursors
   - Dicalcium phosphate dihydrate intermediates
   - Transformation to hydroxyapatite
   - Mimics natural enamel formation pathway

3. **Layer-by-Layer Assembly:**
   - Nanoscale control of crystal orientation
   - Polymer-induced liquid precursor (PILP) process
   - Challenges: Adhesion, long-term stability

**Clinical Translation Barriers:**
- Bonding to natural enamel
- Achieving proper prism orientation
- Wear resistance matching natural enamel
- Regulatory pathway for combination products

### Regenerative Pulp Therapy

**Revascularization/Revitalization:**
- Indication: Immature permanent teeth with necrosis
- Protocol:
  1. Disinfection (antibiotics/irrigants)
  2. Blood clot induction (overinstrumentation)
  3. MTA coronal barrier
  4. Coronal seal
- Outcomes: Root maturation, apical closure, increased wall thickness
- Controversy: True regeneration vs. repair

**Cell-Based Approaches:**
- Stem cell transplantation (DPSCs, SHED, SCAP)
- Scaffold materials: Collagen, fibrin, synthetic polymers
- Growth factors: VEGF, FGF, BMP, TGF-β
- Challenges: Vascularization, innervation, cost

**Cell-Free Approaches:**
- Platelet-rich plasma (PRP)
- Platelet-rich fibrin (PRF)
- Conditioned media from stem cells

**Clinical Status:**
- Revascularization: Standard of care for immature necrotic teeth
- Cell-based therapy: Experimental, limited clinical data
- Regulatory pathway: Cell-based products face stringent requirements

### Molecular Diagnostics

**Salivary Biomarkers for Dental Tissues:**

| Condition | Biomarkers | Clinical Utility |
|-----------|------------|------------------|
| Caries activity | Lactobacilli, S. mutans, MMP-8 | Risk assessment |
| Periodontal disease | IL-1β, IL-6, TNF-α, MMP-8 | Disease activity |
| Enamel defects | Enamelin, amelogenin fragments | AI screening |
| Pulp inflammation | CGRP, Substance P | Diagnosis |

**Genetic Testing:**
- AI: AMELX, ENAM, MMP20, KLK4, FAM83H
- DI/Dent dysplasia: DSPP
- Hypodontia: PAX9, MSX1, AXIN2
- Sjögren syndrome: Risk of caries

### Dental Tissues as Biomarkers

**Environmental Exposure:**
- Lead lines in dentin (Burton lines)
- Fluoride exposure patterns
- Drug/antibiotic incorporation (tetracycline staining)

**Systemic Disease:**
- Periodontitis as diabetes marker
- Enamel defects in celiac disease
- Dentin changes in renal osteodystrophy

**Forensic Applications:**
- Age estimation: Cemental annulations, dentin translucency, root transparency
- Identification: Antemortem dental records
- Bite mark analysis (limitations recognized)

### Emerging Concepts

**Enamel-Retained Proteins:**
- Ancient proteins in fossilized enamel
- Evolutionary studies
- Species identification in paleontology

**Oral Microbiome-Tissue Interactions:**
- S. mutans acid production → enamel demineralization
- Scardovia wiggsiae: Aciduric, caries-associated
- P. gingivalis: Systemic implications

**Materials Science Integration:**
- Bioactive materials that stimulate reparative dentin
- Calcium silicate cements (MTA, Biodentine)
- Resin infiltration of early lesions (ICON)

**Future Directions:**
- Whole tooth engineering (tooth germ transplantation)
- Gene therapy for AI/DI
- Personalized prevention based on genetic risk
- AI-driven caries detection and monitoring`,
      keyTerms: [
        { term: 'biomimetic', definition: 'Mimicking biological processes; synthetic approaches that copy nature\'s methods' },
        { term: 'PILP', definition: 'Polymer-induced liquid precursor; process for biomimetic mineralization' },
        { term: 'revascularization', definition: 'Regenerative procedure for immature necrotic teeth using blood clot scaffold' },
        { term: 'PRF', definition: 'Platelet-rich fibrin; autologous biomaterial with growth factors' },
        { term: 'cemental annulations', definition: 'Incremental growth lines in cementum used for age estimation' },
      ],
      clinicalNotes: `Clinical practice implications:
1. Biomimetic enamel repair is not yet clinically available - prevention remains key
2. Revascularization is standard for immature necrotic teeth with open apices
3. Salivary diagnostics for caries risk are emerging but not yet routine
4. Genetic testing for AI/DI is available - refer for evaluation when indicated
5. Bioactive materials (MTA, Biodentine) stimulate reparative dentin formation
6. Early lesion resin infiltration can prevent cavity progression in select cases`,
    },
  },

  media: [
    {
      id: 'tooth-structure-cross-section',
      type: 'diagram',
      filename: 'tooth-structure-histology.svg',
      title: 'Tooth Structure Histology',
      description: 'Microscopic structure of enamel, dentin, cementum, and pulp',
    },
    {
      id: 'enamel-prisms',
      type: 'diagram',
      filename: 'enamel-prism-structure.svg',
      title: 'Enamel Prism Structure',
      description: 'Organization of enamel prisms and interprismatic enamel',
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
      id: 'hargreaves-pulp',
      type: 'textbook',
      title: 'Cohen\'s Pathways of the Pulp',
      authors: ['Hargreaves, K.M.', 'Berman, L.H.'],
      source: 'Elsevier',
    },
    {
      id: 'jernvall-enamel',
      type: 'article',
      title: 'Developmental Biology of Tooth Enamel',
      authors: ['Jernvall, J.', 'Thesleff, I.'],
      source: 'European Journal of Oral Sciences',
      chapter: '2012',
    },
  ],

  crossReferences: [
    { targetId: 'structure-tooth-anatomy', targetType: 'structure', relationship: 'related', label: 'Tooth Anatomy' },
    { targetId: 'structure-oral-anatomy', targetType: 'structure', relationship: 'sibling', label: 'Oral Anatomy' },
    { targetId: 'condition-cavities-decay', targetType: 'condition', relationship: 'related', label: 'Cavities and Decay' },
    { targetId: 'procedure-root-canal-therapy', targetType: 'topic', relationship: 'related', label: 'Root Canal Therapy' },
  ],

  tags: {
    systems: ['dental'],
    structures: ['enamel', 'dentin', 'cementum', 'pulp', 'tooth'],
    topics: ['histology', 'development', 'embryology', 'molecular-biology'],
    keywords: ['tooth structure', 'enamel', 'dentin', 'cementum', 'pulp', 'dental tissues', 'amelogenesis', 'dentinogenesis'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default toothStructure;
