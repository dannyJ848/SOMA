import { EducationalContent } from '../../../types';

export const boneAnatomyContent: EducationalContent = {
  id: 'ortho-bone-anatomy-healing',
  type: 'structure',
  name: 'Bone Anatomy and Healing',
  alternateNames: ['Osseous tissue', 'Skeletal anatomy', 'Bone structure', 'Fracture healing'],
  fmaId: 'FMA:5018',

  levels: {
    1: {
      level: 1,
      summary: 'Bones are the hard structures that make up your skeleton and protect your organs, and they can heal themselves when broken.',
      explanation: `Your body has 206 bones that work together to help you move, protect your organs, and give your body its shape. Bones might seem like dead, dry sticks, but they're actually alive and always changing!

**What Bones Do:**
- **Support**: Hold up your body like a frame holds up a building
- **Protection**: Shield important organs (your skull protects your brain, ribs protect your heart)
- **Movement**: Muscles attach to bones to help you move
- **Make blood cells**: The inside of some bones makes new blood cells
- **Store minerals**: Bones store calcium and other minerals your body needs

**Parts of a Bone:**
- **Outside (compact bone)**: The hard, smooth outer layer you can see
- **Inside (spongy bone)**: Looks like a honeycomb, lighter but still strong
- **Bone marrow**: The soft, jelly-like center where blood cells are made
- **Periosteum**: A thin skin covering the bone with nerves and blood vessels

**How Bones Heal:**
When you break a bone, your body starts fixing it right away:
1. **Blood clot forms**: Like a scab inside your body
2. **Soft callus**: New, soft bone material fills the gap (like putty)
3. **Hard callus**: The soft material hardens into bone
4. **Remodeling**: The bone reshapes itself to be strong again

This healing takes about 6-8 weeks for most bones, but bigger bones take longer.`,
      keyTerms: [
        { term: 'bone', definition: 'The hard tissue that makes up your skeleton' },
        { term: 'skeleton', definition: 'All the bones in your body working together' },
        { term: 'compact bone', definition: 'The hard, solid outer part of a bone' },
        { term: 'spongy bone', definition: 'The lighter, honeycomb-like inside part of a bone' },
        { term: 'bone marrow', definition: 'The soft material inside bones that makes blood cells' },
        { term: 'fracture', definition: 'A broken bone' },
      ],
      analogies: [
        'Bones are like the steel frame of a building - they provide structure and support for everything else.',
        'The periosteum is like the bark on a tree - it protects the bone and helps it grow.',
        'Bone healing is like fixing a pothole - first you fill it with soft material, then it hardens.',
      ],
      examples: [
        'When you fall and break your arm, the bone immediately starts the healing process.',
        'Athletes drink milk because calcium helps keep their bones strong.',
        'Your skull is made of several bones fused together to protect your brain.',
      ],
    },
    2: {
      level: 2,
      summary: 'Bones are living organs composed of cells embedded in a mineralized matrix, capable of growth, remodeling, and self-repair through coordinated cellular processes.',
      explanation: `Bones are dynamic living tissues that constantly remodel throughout life. Understanding bone structure helps explain how fractures heal and why bone health matters.

**Bone Composition:**
- **Organic component (35%)**: Collagen fibers provide flexibility
- **Inorganic component (65%)**: Hydroxyapatite crystals (calcium phosphate) provide hardness
- This combination gives bone both strength and some flexibility

**Bone Cell Types:**
1. **Osteoblasts**: Build new bone tissue
2. **Osteocytes**: Mature bone cells that maintain bone tissue
3. **Osteoclasts**: Break down old bone tissue

**Bone Structure Types:**

*Compact (Cortical) Bone:*
- Dense outer layer (80% of bone mass)
- Organized in concentric rings called osteons (Haversian systems)
- Contains central canal with blood vessels and nerves

*Spongy (Trabecular) Bone:*
- Porous inner structure (20% of bone mass)
- Network of trabeculae (thin plates/rods)
- Found at ends of long bones and in vertebrae
- Contains red bone marrow

**Bone Healing Phases:**

1. **Inflammatory Phase (Days 1-7)**
   - Hematoma (blood clot) forms at fracture site
   - Inflammatory cells arrive to clean debris
   - Growth factors released to start healing

2. **Reparative Phase (Weeks 1-12)**
   - Soft callus: Fibrocartilage forms across the gap
   - Hard callus: Woven bone replaces cartilage
   - Callus is larger than original bone

3. **Remodeling Phase (Months to years)**
   - Woven bone replaced by lamellar bone
   - Bone reshaped along stress lines (Wolff's Law)
   - Excess callus removed

**Factors Affecting Healing:**
- Blood supply to the area
- Age (younger heals faster)
- Nutrition (calcium, vitamin D, protein)
- Immobilization and alignment
- Smoking delays healing significantly`,
      keyTerms: [
        { term: 'osteoblast', definition: 'Bone cell that builds new bone tissue', pronunciation: 'OS-tee-oh-blast' },
        { term: 'osteoclast', definition: 'Bone cell that breaks down and resorbs bone tissue', pronunciation: 'OS-tee-oh-clast' },
        { term: 'osteocyte', definition: 'Mature bone cell embedded in bone matrix that maintains tissue', pronunciation: 'OS-tee-oh-site' },
        { term: 'osteon', definition: 'The basic structural unit of compact bone (also called Haversian system)', pronunciation: 'OS-tee-on' },
        { term: 'trabecular bone', definition: 'Spongy bone with a lattice-like structure', pronunciation: 'trah-BEK-yoo-lar' },
        { term: 'callus', definition: 'New bone and cartilage that forms during fracture healing', pronunciation: 'KAL-us' },
        { term: 'periosteum', definition: 'Fibrous membrane covering the outer surface of bone', pronunciation: 'peri-OS-tee-um' },
      ],
      analogies: [
        'Osteoblasts and osteoclasts are like construction and demolition crews constantly renovating bone.',
        'Osteons are like bundles of straws glued together, each with a central tube for blood supply.',
        'Fracture healing callus is like scaffolding - temporary structure that supports repair before being removed.',
      ],
    },
    3: {
      level: 3,
      summary: 'Bone tissue exhibits hierarchical organization from molecular collagen-mineral composites to macroscopic cortical and trabecular architecture, with healing occurring through overlapping phases of inflammation, repair, and remodeling governed by mechanical and biological signals.',
      explanation: `Bone represents a specialized connective tissue with unique mechanical properties derived from its hierarchical structure and dynamic cellular regulation.

**Hierarchical Bone Structure:**

1. **Molecular Level**
   - Type I collagen triple helix (tensile strength)
   - Hydroxyapatite crystals [Ca10(PO4)6(OH)2] (compressive strength)
   - Non-collagenous proteins: osteocalcin, osteonectin, osteopontin

2. **Nanoscale (1-100 nm)**
   - Mineralized collagen fibrils
   - Hydroxyapatite crystals aligned along collagen

3. **Microscale (1-500 μm)**
   - Lamellae: Layers of organized collagen/mineral
   - Osteons: Concentric lamellae around Haversian canals
   - Lacunae: Spaces containing osteocytes
   - Canaliculi: Channels connecting lacunae

4. **Macroscale**
   - Cortical bone: Dense, low porosity (5-10%)
   - Trabecular bone: High porosity (50-90%), oriented along stress lines

**Bone Remodeling:**

*Basic Multicellular Unit (BMU):*
- Osteoclast resorption (2-3 weeks)
- Reversal phase (1-2 weeks)
- Osteoblast bone formation (4-6 months)
- Balance maintains bone mass

*RANK/RANKL/OPG System:*
- RANKL (Receptor Activator of NF-κB Ligand): Promotes osteoclast differentiation
- OPG (Osteoprotegerin): Decoy receptor, inhibits osteoclastogenesis
- Balance determines net bone resorption or formation

**Fracture Healing Biology:**

*Phase 1: Inflammatory (Hours to Days)*
- Hematoma formation and hypoxia
- Inflammatory cells: Neutrophils, then macrophages
- Cytokines: IL-1, IL-6, TNF-α
- Growth factors: PDGF, TGF-β recruitment

*Phase 2: Soft Callus (Days to Weeks)*
- Angiogenesis into fracture site
- Mesenchymal stem cell (MSC) recruitment
- Chondrogenesis (cartilage formation)
- Stabilization through fibrocartilage

*Phase 3: Hard Callus (Weeks to Months)*
- Endochondral ossification: Cartilage replaced by woven bone
- Direct (intramembranous) ossification at periosteum
- Callus bridges fracture gap
- Key factors: BMP-2, BMP-7, IGF-1

*Phase 4: Remodeling (Months to Years)*
- Osteoclast-mediated resorption of woven bone
- Osteoblast deposition of lamellar bone
- Wolff's Law: Bone adapts to mechanical stress
- Restoration of normal architecture

**Types of Ossification:**
- **Endochondral**: Cartilage template replaced by bone (long bone growth, fracture healing)
- **Intramembranous**: Direct bone formation from mesenchyme (flat bones, fracture periosteum)

**Clinical Factors in Healing:**
- Fracture stability (movement stimulates callus but excess prevents union)
- Vascular supply (essential for cell recruitment and oxygenation)
- Infection (inflammatory imbalance delays healing)
- NSAIDs (may impair early healing phases)
- Diabetes, smoking (impaired angiogenesis and cell function)`,
      keyTerms: [
        { term: 'hydroxyapatite', definition: 'Calcium phosphate mineral [Ca10(PO4)6(OH)2] that provides bone hardness', pronunciation: 'hy-drox-ee-AP-a-tite' },
        { term: 'Haversian system', definition: 'Osteon; the structural unit of compact bone with central vascular canal' },
        { term: 'RANKL', definition: 'Receptor Activator of NF-κB Ligand; cytokine that promotes osteoclast formation and activity' },
        { term: 'endochondral ossification', definition: 'Bone formation through a cartilage intermediate, seen in long bone growth and fracture healing' },
        { term: 'Wolff\'s Law', definition: 'Principle that bone remodels in response to mechanical stress, becoming stronger along lines of force' },
        { term: 'basic multicellular unit', definition: 'BMU; coordinated group of osteoclasts and osteoblasts that remodel bone' },
        { term: 'woven bone', definition: 'Rapidly formed, disorganized bone seen in healing; later replaced by lamellar bone' },
      ],
      clinicalNotes: 'NSAIDs may inhibit prostaglandin-mediated healing in early phases. Consider limiting use in acute fractures. Bisphosphonates can delay remodeling but do not prevent callus formation.',
    },
    4: {
      level: 4,
      summary: 'Bone homeostasis involves mechanotransduction through the osteocyte lacunocanalicular network, hormonal regulation of calcium/phosphate metabolism, and coordinated coupling of resorption and formation. Fracture healing recapitulates developmental pathways with distinct molecular signatures in each phase.',
      explanation: `Bone physiology integrates mechanical, hormonal, and local factors to maintain skeletal integrity. Understanding these mechanisms informs treatment of fractures and metabolic bone diseases.

**Osteocyte Biology and Mechanotransduction:**

*Osteocyte Network:*
- Most abundant bone cell (90-95%)
- Embedded in lacunae, connected via canaliculi
- Dendritic processes form syncytium (gap junctions)
- Acts as mechanosensor and master regulator

*Mechanosensing Mechanisms:*
- Fluid flow shear stress through canaliculi
- Primary cilium detection of strain
- Integrin-cytoskeleton-nucleus mechanotransduction
- Piezo channels respond to membrane stretch

*Osteocyte Signaling:*
- Sclerostin (SOST): Inhibits Wnt pathway, reduces bone formation
- Mechanical loading decreases sclerostin → increased formation
- RANKL secretion: Promotes osteoclastogenesis
- PGE2, NO: Rapid response to loading

**Hormonal Regulation:**

*Parathyroid Hormone (PTH):*
- Pulsatile: Anabolic (increases osteoblast activity)
- Continuous: Catabolic (increases RANKL, bone resorption)
- Stimulates 1α-hydroxylase → active vitamin D
- Clinical: Teriparatide (PTH 1-34) for osteoporosis

*Vitamin D:*
- 25-hydroxylation in liver, 1α-hydroxylation in kidney
- 1,25(OH)2D3: Increases intestinal calcium absorption
- Regulates osteocalcin, osteopontin expression
- Deficiency → osteomalacia (adults), rickets (children)

*Calcitonin:*
- From thyroid C cells
- Inhibits osteoclast activity (minor role in adults)

*Estrogen:*
- Inhibits osteoclast formation and activity
- Promotes osteoclast apoptosis
- Deficiency accelerates bone loss (menopause)

*Glucocorticoids:*
- Excess inhibits osteoblast function
- Increases osteocyte apoptosis
- Decreases calcium absorption
- GIOP: Glucocorticoid-induced osteoporosis

**Fracture Healing at Molecular Level:**

*Inflammatory Phase Signaling:*
- Hypoxia induces HIF-1α → VEGF expression
- Macrophage polarization: M1 (inflammatory) → M2 (reparative)
- Platelet degranulation: PDGF, TGF-β
- Complement activation and debris clearance

*Soft Callus Molecular Events:*
- Sox9 expression → chondrogenic differentiation
- Aggrecan, type II collagen production
- VEGF gradient guides vascular invasion
- Indian hedgehog (Ihh) regulates chondrocyte maturation

*Endochondral Ossification Sequence:*
1. Chondrocyte proliferation
2. Hypertrophic differentiation (type X collagen, MMP-13)
3. Vascular invasion (VEGF-dependent)
4. Apoptosis of hypertrophic chondrocytes
5. Osteoblast colonization and bone deposition

*BMP Signaling:*
- BMP-2, BMP-7: Most osteoinductive
- Smad 1/5/8 pathway activation
- Runx2 (master osteoblast transcription factor)
- rhBMP-2 used clinically for nonunion

**Wnt/β-catenin Pathway:**
- Canonical Wnt signaling promotes osteoblast differentiation
- LRP5/6 co-receptors
- Inhibitors: DKK1, sclerostin, SFRP
- Romosozumab: Anti-sclerostin antibody for osteoporosis

**Types of Bone Union:**

*Primary (Direct) Bone Healing:*
- Requires rigid fixation, anatomic reduction
- Direct osteonal remodeling without callus
- Cutting cones cross fracture site
- Seen with compression plating

*Secondary Bone Healing:*
- Relative stability, some micromotion
- Callus formation (endochondral + intramembranous)
- More common physiologically
- Intramedullary nailing, casting

**Delayed Union and Nonunion:**

*Risk Factors:*
- Inadequate blood supply
- Excessive motion (unstable fixation)
- Infection
- Gap > 5mm
- Interposed soft tissue
- Patient factors: Smoking, diabetes, malnutrition

*Types of Nonunion:*
- Hypertrophic: Abundant callus, inadequate stability (needs fixation)
- Atrophic: No callus, inadequate biology (needs grafting)
- Oligotrophic: Minimal callus (intermediate)`,
      keyTerms: [
        { term: 'mechanotransduction', definition: 'Process by which cells convert mechanical stimuli into biochemical signals affecting gene expression' },
        { term: 'sclerostin', definition: 'Protein (SOST gene) secreted by osteocytes that inhibits Wnt signaling and bone formation' },
        { term: 'Runx2', definition: 'Master transcription factor required for osteoblast differentiation' },
        { term: 'hypertrophic chondrocyte', definition: 'Terminal differentiation state of cartilage cells preceding mineralization and vascular invasion' },
        { term: 'cutting cone', definition: 'Osteoclast-led structure that tunnels through bone during remodeling, followed by osteoblasts' },
        { term: 'nonunion', definition: 'Failure of fracture to heal, typically defined as no healing progress at 6-9 months' },
        { term: 'GIOP', definition: 'Glucocorticoid-induced osteoporosis; most common cause of secondary osteoporosis' },
      ],
      clinicalNotes: 'Denosumab (anti-RANKL) and romosozumab (anti-sclerostin) represent targeted biological therapies for osteoporosis based on understanding of bone cell signaling. Teriparatide exploits the anabolic window of pulsatile PTH. Atypical femoral fractures and ONJ are rare complications of prolonged bisphosphonate therapy related to over-suppression of remodeling.',
    },
    5: {
      level: 5,
      summary: 'Contemporary understanding of bone biology integrates single-cell genomics revealing osteoblast/osteoclast lineage heterogeneity, biomechanical finite element modeling, and emerging gene and cell therapies for fracture nonunion and metabolic bone disease.',
      explanation: `Advanced bone biology encompasses cutting-edge research in cellular heterogeneity, biomechanics, and translational therapeutics with implications for clinical practice.

**Osteoblast Lineage Heterogeneity:**

*Single-Cell Transcriptomics Findings:*
- Multiple MSC subpopulations with distinct differentiation potential
- Pre-osteoblast stages: Proliferating, matrix-producing, mineralizing
- Spatial variation: Periosteal vs. endosteal osteoblasts
- Bone lining cells: Quiescent osteoblasts, can reactivate

*Key Transcriptional Markers:*
- Runx2: Commitment to osteoblast lineage
- Osterix (Sp7): Required for bone formation
- Osteocalcin (Bglap): Mature osteoblasts
- Col1a1: Matrix production

*Osteoblast-Osteocyte Transition:*
- Embedding process takes 3 days
- Dendritic process extension
- Autophagy essential for survival
- Changes in gene expression: ↑DMP1, SOST, FGF23

**Osteoclast Biology:**

*Origin and Differentiation:*
- Hematopoietic origin (monocyte-macrophage lineage)
- M-CSF: Survival and proliferation
- RANKL: Differentiation and activation
- NFATc1: Master transcription factor

*Bone Resorption Mechanism:*
- Sealing zone: Integrin αvβ3 attachment
- Ruffled border: H+-ATPase acidification (pH ~4.5)
- Cathepsin K: Collagen degradation
- TRAP: Marker enzyme

*Coupling Factors:*
- Osteoclast-derived: S1P, BMP-6, Wnt10b, CT-1
- Matrix-released: TGF-β, IGF-1, BMPs
- Bidirectional ephrinB2-EphB4 signaling

**Biomechanical Principles:**

*Bone Material Properties:*
- Elastic modulus: Cortical 15-25 GPa, Trabecular 0.1-2 GPa
- Ultimate strength: Cortical 100-230 MPa
- Anisotropic: Direction-dependent properties
- Viscoelastic: Rate-dependent behavior

*Finite Element Analysis (FEA):*
- HR-pQCT-based models predict fracture
- Patient-specific implant design
- Fracture risk assessment beyond DXA

*Strain Environment and Healing:*
- Interfragmentary strain theory (Perren)
- Strain > 100%: Fibrous tissue
- Strain 10-100%: Fibrocartilage
- Strain < 10%: Bone formation
- Optimal micromotion: 0.2-1.0 mm

**Emerging Therapeutics:**

*Biological Augmentation:*
- rhBMP-2: FDA-approved for spine fusion, tibial nonunion
- rhBMP-7 (OP-1): Discontinued (efficacy concerns)
- Platelet-rich plasma (PRP): Mixed evidence
- Bone marrow aspirate concentrate (BMAC): Autologous MSCs

*Gene Therapy Approaches:*
- BMP gene delivery (viral and non-viral vectors)
- CRISPR-based correction of genetic bone diseases
- RNA interference for osteoclast targeting

*Cell-Based Therapies:*
- MSC transplantation for nonunion
- Induced pluripotent stem cells (iPSCs)
- Tissue engineering with scaffolds

*Novel Pharmacologic Targets:*
- Anti-sclerostin (romosozumab): Dual effect
- Cathepsin K inhibitors: Resorption without coupling defect
- Wnt pathway agonists: Development stage
- PTHrP analogs (abaloparatide)

**Clinical Application Matrix:**

*Fracture Healing Assessment:*
- Radiographic: Callus, cortical bridging (RUST score)
- CT: 3D assessment, especially spine
- Biochemical: P1NP (formation), CTX (resorption)

*Nonunion Management Algorithm:*
1. Assess biology vs. mechanical etiology
2. Hypertrophic: Improve stability (exchange nailing, plating)
3. Atrophic: Biological augmentation (bone graft, BMP, BMAC)
4. Infected: Debridement, antibiotics, staged reconstruction
5. Consider: Metabolic workup, vitamin D, smoking cessation

*Metabolic Bone Disease Workup:*
- Calcium, phosphate, alkaline phosphatase
- 25-OH vitamin D (target >30 ng/mL)
- PTH
- Consider: Celiac panel, 24-hr urine calcium, bone markers

**Fracture Liaison Service Model:**
- Secondary fracture prevention
- Post-fragility fracture DXA
- Treatment initiation
- 50% reduction in subsequent fractures

**Research Frontiers:**

*Organoid and In Vitro Models:*
- Bone organoids from iPSCs
- Organ-on-chip systems
- Patient-specific disease modeling

*Advanced Imaging:*
- HR-pQCT for microarchitecture
- PET tracers for bone metabolism
- Biomechanical CT (virtual stress testing)

*Personalized Medicine:*
- Genetic risk scores for osteoporosis
- Pharmacogenomics of bisphosphonate response
- Machine learning fracture prediction`,
      keyTerms: [
        { term: 'HR-pQCT', definition: 'High-resolution peripheral quantitative CT; imaging modality for bone microarchitecture assessment' },
        { term: 'Cathepsin K', definition: 'Cysteine protease essential for osteoclast-mediated collagen degradation during bone resorption' },
        { term: 'RUST score', definition: 'Radiographic Union Scale for Tibial fractures; standardized healing assessment' },
        { term: 'interfragmentary strain', definition: 'Relative movement at fracture site divided by gap width; determines healing tissue type' },
        { term: 'coupling', definition: 'Coordination between bone resorption and formation maintaining bone mass during remodeling' },
        { term: 'fracture liaison service', definition: 'Systematic program identifying and treating patients at risk for secondary fragility fractures' },
        { term: 'abaloparatide', definition: 'PTHrP analog approved for osteoporosis; may have lower hypercalcemia risk than teriparatide' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- Strain theory: >100% = fibrous tissue, 10-100% = cartilage, <10% = bone
- BMP-2 off-label use in spine associated with complications (heterotopic bone, swelling)
- Romosozumab: Black box for cardiovascular events; avoid in recent MI/stroke
- Atypical femoral fractures: Prodromal thigh pain, lateral cortex beaking, prolonged bisphosphonate use
- ONJ risk factors: IV bisphosphonates > oral, dental procedures, duration >4 years
- Denosumab discontinuation: Rapid bone loss, vertebral fractures; transition to bisphosphonate

**Surgical Considerations:**
- Primary bone healing requires <2% strain (rigid compression)
- Diamond concept for nonunion: Osteogenic cells + osteoconductive scaffold + osteoinductive signals + mechanical stability
- Masquelet technique: Induced membrane + delayed bone graft for large defects`,
    },
  },

  media: [
    {
      id: 'bone-structure-diagram',
      type: 'diagram',
      filename: 'bone-microarchitecture.svg',
      title: 'Bone Hierarchical Structure',
      description: 'Diagram showing bone organization from molecular to macroscopic levels',
    },
    {
      id: 'fracture-healing-phases',
      type: 'diagram',
      filename: 'fracture-healing-phases.svg',
      title: 'Fracture Healing Phases',
      description: 'Timeline of inflammatory, reparative, and remodeling phases',
    },
    {
      id: 'bone-remodeling-cycle',
      type: 'diagram',
      filename: 'bone-remodeling-bmu.svg',
      title: 'Bone Remodeling Cycle (BMU)',
      description: 'Osteoclast-osteoblast coupling in basic multicellular unit',
    },
  ],
  citations: [
    {
      id: 'einhorn-2015',
      type: 'article',
      title: 'Fracture healing: mechanisms and interventions',
      authors: ['Einhorn TA', 'Gerstenfeld LC'],
      source: 'Nature Reviews Rheumatology',
      url: 'https://doi.org/10.1038/nrrheum.2014.164',
      license: 'Copyright Nature Publishing Group',
    },
    {
      id: 'openstax-ap-ch6',
      type: 'textbook',
      title: 'Bone Tissue and the Skeletal System',
      source: 'OpenStax Anatomy and Physiology 2e',
      chapter: '6',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/6-introduction',
      license: 'CC BY 4.0',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-fracture-types', targetType: 'condition', relationship: 'related', label: 'Fracture Types' },
    { targetId: 'ortho-osteoporosis', targetType: 'condition', relationship: 'related', label: 'Osteoporosis' },
    { targetId: 'ortho-joint-anatomy', targetType: 'structure', relationship: 'sibling', label: 'Joint Anatomy' },
  ],
  tags: {
    systems: ['musculoskeletal', 'skeletal'],
    structures: ['FMA:5018'],
    topics: ['anatomy', 'physiology', 'orthopedics', 'bone biology', 'fracture healing'],
    keywords: ['bone', 'osteoblast', 'osteoclast', 'osteocyte', 'fracture', 'healing', 'remodeling'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['surgery', 'medicine'] },
  },

  createdAt: '2024-01-24T00:00:00.000Z',
  updatedAt: '2024-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default boneAnatomyContent;
