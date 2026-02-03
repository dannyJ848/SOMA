import { LegacyEducationalContent } from '../../types';

export const embryogenesisContent: LegacyEducationalContent = {
  id: 'embryogenesis',
  title: 'Embryogenesis',
  category: 'Embryology',
  subcategory: 'General Embryology',
  description: 'The remarkable process by which a single cell transforms into a complex, multicellular organism',
  levels: {
    1: {
      title: 'Introduction to Embryogenesis',
      description: 'Learn how a fertilized egg develops into an embryo',
      content: `
# Introduction to Embryogenesis

## What is Embryogenesis?

Embryogenesis is the process by which a single fertilized egg (zygote) develops into a complex, multicellular embryo. This incredible transformation occurs over the first 8 weeks of human development and creates all the major organ systems of the body.

## Key Events of Early Development

### Week 1: From Zygote to Blastocyst

1. **Cleavage (Days 1-3)**
   - The zygote divides rapidly without growing in size
   - Creates smaller cells called blastomeres
   - Forms a morula (mulberry-like cluster) by day 3-4

2. **Blastocyst Formation (Days 4-5)**
   - Fluid-filled cavity forms inside
   - Two distinct cell types emerge:
     - **Trophoblast**: Outer layer (becomes placenta)
     - **Embryoblast (Inner cell mass)**: Inner cluster (becomes the embryo)

3. **Implantation (Days 6-10)**
   - Blastocyst attaches to uterine wall
   - Burrows into endometrium
   - Receives nourishment from mother

### Week 2: Formation of Bilaminar Disc

Two germ layers form:
- **Epiblast**: Will form the embryo proper
- **Hypoblast**: Contributes to supporting tissues

### Week 3: Gastrulation - Three Germ Layers

The most important week! Three definitive germ layers form:

| Germ Layer | Adult Structures |
|------------|------------------|
| **Ectoderm** | Skin, nervous system, sense organs |
| **Mesoderm** | Muscle, bone, connective tissue, cardiovascular system |
| **Endoderm** | Gut lining, respiratory tract, digestive organs |

### Weeks 4-8: Organogenesis

- **Week 4**: Heart begins beating, limb buds appear
- **Week 5**: Face begins to form
- **Week 6-7**: Organ systems develop rapidly
- **Week 8**: All major organs present, now called a fetus

## Important Structures

### Primitive Streak
- A groove on the embryo surface
- Cells migrate through it during gastrulation
- Establishes the body's basic organization

### Notochord
- Temporary rod-like structure
- Defines the body axis
- Signals nervous system formation
- Contributes to vertebral discs

### Neural Tube
- Forms from ectoderm
- Becomes brain and spinal cord
- Closes by week 4

## Timeline Summary

| Week | Major Event | Description |
|------|-------------|-------------|
| 1 | Cleavage & Implantation | Zygote becomes blastocyst, implants in uterus |
| 2 | Bilaminar disc | Two germ layers form |
| 3 | Gastrulation | Three germ layers form (most critical week) |
| 4 | Folding & Heart | Heart begins beating, embryo folds |
| 5-8 | Organogenesis | All major organs develop |

## Key Terms to Remember

- **Blastocyst**: Hollow ball of cells with inner and outer cell layers
- **Gastrulation**: Formation of three germ layers
- **Neurulation**: Formation of the neural tube
- **Organogenesis**: Development of organs
- **Embryo**: Developing human from week 3-8
- **Fetus**: Developing human from week 9 until birth

## Summary

Embryogenesis transforms a single cell into a complex organism through:
1. Rapid cell division (cleavage)
2. Formation of germ layers (gastrulation)
3. Specialization of tissues (differentiation)
4. Organ formation (organogenesis)

By week 8, all major organ systems are present, and the developing human is called a fetus.
      `,
      flashcards: [
        {
          id: 'e1',
          front: 'What is embryogenesis?',
          back: 'Embryogenesis is the process by which a fertilized egg develops into a complex, multicellular embryo over the first 8 weeks of human development.'
        },
        {
          id: 'e2',
          front: 'What are the three germ layers formed during gastrulation?',
          back: 'Ectoderm (skin, nervous system), Mesoderm (muscle, bone, cardiovascular), and Endoderm (gut, respiratory tract).'
        },
        {
          id: 'e3',
          front: 'What is a blastocyst?',
          back: 'A hollow ball of cells formed around day 5, with an outer trophoblast layer and inner embryoblast (inner cell mass).'
        },
        {
          id: 'e4',
          front: 'What is the difference between an embryo and a fetus?',
          back: 'Embryo refers to the developing human from week 3-8, while fetus refers to the developing human from week 9 until birth.'
        },
        {
          id: 'e5',
          front: 'What is the primitive streak?',
          back: 'A groove on the embryo surface through which cells migrate during gastrulation to form the three germ layers.'
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: 'During which week does gastrulation occur?',
          options: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          correctAnswer: 2,
          explanation: 'Gastrulation, the formation of the three germ layers, occurs during week 3 of development.'
        },
        {
          id: 'q2',
          question: 'Which germ layer gives rise to the nervous system?',
          options: ['Ectoderm', 'Mesoderm', 'Endoderm', 'Trophoblast'],
          correctAnswer: 0,
          explanation: 'The ectoderm gives rise to the entire nervous system, including the brain and spinal cord.'
        },
        {
          id: 'q3',
          question: 'What structure defines the body axis and signals nervous system formation?',
          options: ['Primitive streak', 'Notochord', 'Neural tube', 'Somites'],
          correctAnswer: 1,
          explanation: 'The notochord is a temporary rod-like structure that defines the body axis and secretes signals that induce neural tube formation.'
        },
        {
          id: 'q4',
          question: 'When does the heart begin beating?',
          options: ['Week 3', 'Week 4', 'Week 5', 'Week 6'],
          correctAnswer: 1,
          explanation: 'The heart begins beating around week 4, making it one of the first functional organs in the developing embryo.'
        },
        {
          id: 'q5',
          question: 'What is gastrulation?',
          options: ['Formation of the neural tube', 'Formation of three germ layers', 'Formation of the placenta', 'Formation of limb buds'],
          correctAnswer: 1,
          explanation: 'Gastrulation is the process by which the bilaminar disc reorganizes into three germ layers (ectoderm, mesoderm, endoderm).'
        }
      ]
    },
    intermediate: {
      title: 'Cellular and Molecular Events of Embryogenesis',
      description: 'Understand the cellular mechanisms driving early development',
      content: `
# Cellular and Molecular Events of Embryogenesis

## Preimplantation Development (Week 1)

### Cleavage and Compaction

#### Cleavage Patterns
- **Holoblastic cleavage**: Complete division of the zygote
- **Radial cleavage pattern**: Typical of mammals
- **Asynchronous divisions**: Not all blastomeres divide simultaneously
- **No growth phase**: Cell volume decreases with each division

#### Compaction (8-cell stage, Day 3)
- **E-cadherin expression**: Calcium-dependent cell adhesion
- **Outer cells**: Flatten and become trophectoderm precursors
- **Inner cells**: Remain round and become inner cell mass
- **Polarization**: Outer cells develop apical-basal polarity

### Blastocyst Formation

#### Fluid Accumulation
- **Na+/K+ ATPase**: Establishes osmotic gradient in blastocoel
- **Aquaporins**: Water channels facilitating fluid movement
- **Trophectoderm tight junctions**: Prevent fluid leakage

#### Lineage Specification
| Lineage | Key Transcription Factors | Fate |
|---------|--------------------------|------|
| Trophectoderm | CDX2, GATA3, EOMES | Placenta |
| Inner Cell Mass | OCT4, NANOG, SOX2 | Embryo proper |
| Primitive Endoderm | GATA6, SOX17 | Yolk sac |

## Implantation (Week 2)

### Apposition and Adhesion
- **L-selectin**: Trophectoderm binds to uterine carbohydrates
- **Integrins**: Mediate firm attachment to endometrium
- **MUC1**: Removed from uterine surface at implantation site

### Invasion
- **Matrix metalloproteinases (MMPs)**: Degrade extracellular matrix
- **Cytotrophoblast**: Invasive cells anchoring to decidua
- **Syncytiotrophoblast**: Multinucleated layer producing hCG

## Gastrulation (Week 3)

### Primitive Streak Formation

#### Initiation
- **Posterior epiblast cells**: Begin moving toward midline
- **BMP4 signaling**: From extraembryonic tissues
- **WNT3 expression**: Drives streak formation
- **E-cadherin to N-cadherin switch**: Enables cell migration

#### Structure
- **Primitive groove**: Depression where cells ingress
- **Primitive pit**: Depression at cranial end
- **Hensen's node**: Organizer at cranial end (human equivalent)

### Cell Fate During Gastrulation

#### Epiblast Cell Movements
\`\`\`
Epiblast cells → Primitive streak
                      ↓
              Ingress and move inward
                      ↓
          ┌──────────┴──────────┐
          ↓                     ↓
      Superficial           Deep ingress
          ↓                     ↓
    Endoderm replacement    Mesoderm formation
\`\`\`

#### Mesoderm Subtypes
| Mesoderm Type | Location | Derivatives |
|---------------|----------|-------------|
| Axial | Notochord region | Notochord, prechordal plate |
| Paraxial | Adjacent to neural tube | Somites (skeletal muscle, bone) |
| Intermediate | Between paraxial and lateral | Kidneys, gonads |
| Lateral plate | Body wall | Heart, blood vessels, body wall connective tissue |

### Molecular Regulation

#### Signaling Centers
- **Hensen's node**: Secretes inhibitors (Noggin, Chordin, Follistatin)
- **Primitive streak**: WNT, BMP, FGF signaling
- **Anterior visceral endoderm**: Head organizer signals

#### Gene Expression Patterns
- **Brachyury (T)**: Mesoderm specification marker
- **SOX2**: Neural ectoderm maintenance
- **GATA factors**: Endoderm specification

## Neurulation (Weeks 3-4)

### Primary Neurulation

#### Neural Plate Formation
- **BMP inhibition**: By Hensen's node signals
- **PAX6 expression**: Neural plate identity
- **Apicobasal elongation**: Neural plate cells become columnar

#### Neural Fold Elevation
- **Shh (Sonic hedgehog)**: From notochord, ventralizes neural tube
- **BMP4**: Dorsalizes neural tube
- **Cell shape changes**: Wedge-shaped cells at hinge points

#### Neural Tube Closure
- **Closure 1** (Cervical region): Primary closure site
- **Closure 2** (Forebrain): Rostral closure
- **Closure 3** (Caudal region): Caudal closure
- **Zipper mechanism**: Bidirectional closure from closure sites

### Neural Crest Formation
- **Neural folds**: Specified at border of neural plate
- **Slug/Snail**: EMT transcription factors
- **Delamination**: Cells separate from neural tube
- **Migration**: To peripheral locations

## Embryonic Folding (Week 4)

### Cephalocaudal Folding
- **Head fold**: Forms foregut and pericardial cavity
- **Tail fold**: Forms hindgut and connecting stalk

### Lateral Folding
- **Lateral body walls**: Fold ventrally
- **Ectoderm**: Covers entire embryo surface
- **Intraembryonic coelom**: Forms as body wall fuses

## Somite Formation (Weeks 3-5)

### Somitogenesis Process
- **Presomitic mesoderm**: Unsegmented paraxial mesoderm
- **Clock and wavefront**: Segmentation mechanism
- **Mesoderm posterior (MESP) genes**: Segment boundary formation
- **Epithelialization**: Cells reorganize into epithelial somites

### Somite Differentiation
| Somite Region | Derivative |
|---------------|------------|
| Sclerotome | Vertebrae, ribs |
| Myotome | Skeletal muscle |
| Dermatome | Dorsal dermis |

## Molecular Pathways Summary

### Major Signaling Pathways in Embryogenesis

| Pathway | Role in Embryogenesis |
|---------|----------------------|
| **BMP** | Dorsal-ventral patterning, ectoderm differentiation |
| **WNT** | Primitive streak formation, posterior patterning |
| **FGF** | Mesoderm induction, neural plate border |
| **SHH** | Ventral neural tube patterning, left-right asymmetry |
| **Nodal** | Mesoderm formation, left-right axis |
| **Notch** | Somite segmentation, neurogenesis |
| **Retinoic Acid** | Hindbrain patterning, limb development |

## Clinical Correlations

### Neural Tube Defects
- **Anencephaly**: Failure of cranial neural tube closure
- **Spina bifida**: Failure of caudal neural tube closure
- **Prevention**: Folic acid supplementation (400-800 μg/day)

### Gastrulation Errors
- **Caudal dysgenesis**: Deficient mesoderm formation
- **Sacral agenesis**: Absent sacrum and lower limb defects
- **Conjoined twinning**: Incomplete splitting of primitive streak

### Early Embryonic Lethality
- **Chromosomal abnormalities**: Most common cause of early miscarriage
- **Critical period**: Weeks 3-8 most vulnerable
- **Estimated loss**: 30-50% of conceptions lost before clinical recognition
      `,
      flashcards: [
        {
          id: 'e1-int',
          front: 'What is compaction and when does it occur?',
          back: 'Compaction occurs at the 8-cell stage (day 3) when blastomeres flatten and adhere via E-cadherin, creating outer (trophectoderm) and inner (ICM) cell populations.'
        },
        {
          id: 'e2-int',
          front: 'What are the key transcription factors for trophectoderm vs inner cell mass specification?',
          back: 'Trophectoderm: CDX2, GATA3, EOMES; Inner Cell Mass: OCT4, NANOG, SOX2.'
        },
        {
          id: 'e3-int',
          front: 'What is the difference between primary and secondary neurulation?',
          back: 'Primary neurulation forms the neural tube from neural plate fusion (most of CNS). Secondary neurulation forms the caudal neural tube from cavitation of mesenchymal cells (sacral region).'
        },
        {
          id: 'e4-int',
          front: 'What are the four subtypes of mesoderm formed during gastrulation?',
          back: 'Axial (notochord), Paraxial (somites), Intermediate (kidneys/gonads), Lateral plate (heart, blood vessels, body wall).'
        },
        {
          id: 'e5-int',
          front: 'What signaling molecule from the notochord ventralizes the neural tube?',
          back: 'Sonic hedgehog (SHH) from the notochord ventralizes the neural tube, forming motor neurons ventrally.'
        },
        {
          id: 'e6-int',
          front: 'What are the three sites of neural tube closure?',
          back: 'Closure 1 (cervical region), Closure 2 (forebrain/rostral), Closure 3 (caudal region). Closure proceeds bidirectionally from these sites.'
        }
      ],
      quiz: [
        {
          id: 'q1-int',
          question: 'Which transcription factor is key for trophectoderm specification?',
          options: ['OCT4', 'NANOG', 'CDX2', 'SOX2'],
          correctAnswer: 2,
          explanation: 'CDX2 is the master regulator of trophectoderm specification, while OCT4, NANOG, and SOX2 maintain pluripotency in the inner cell mass.'
        },
        {
          id: 'q2-int',
          question: 'What is the molecular switch that enables cell migration during gastrulation?',
          options: ['E-cadherin to N-cadherin', 'N-cadherin to E-cadherin', 'Upregulation of integrins', 'Downregulation of MMPs'],
          correctAnswer: 0,
          explanation: 'The switch from E-cadherin to N-cadherin reduces cell-cell adhesion and enables epithelial-to-mesenchymal transition (EMT) and cell migration.'
        },
        {
          id: 'q3-int',
          question: 'Which somite derivative gives rise to vertebrae?',
          options: ['Myotome', 'Dermatome', 'Sclerotome', 'Notochord'],
          correctAnswer: 2,
          explanation: 'The sclerotome, the ventromedial portion of the somite, gives rise to vertebrae and ribs. Myotome forms muscle, dermatome forms dermis.'
        },
        {
          id: 'q4-int',
          question: 'What molecule from the notochord is responsible for ventralizing the neural tube?',
          options: ['BMP4', 'SHH (Sonic hedgehog)', 'WNT', 'FGF8'],
          correctAnswer: 1,
          explanation: 'SHH from the notochord patterns the ventral neural tube, inducing floor plate and motor neurons.'
        },
        {
          id: 'q5-int',
          question: 'Which signaling pathway is primarily responsible for primitive streak formation?',
          options: ['BMP signaling', 'WNT signaling', 'SHH signaling', 'Notch signaling'],
          correctAnswer: 1,
          explanation: 'WNT signaling, particularly WNT3, is essential for primitive streak formation and initiation of gastrulation.'
        }
      ]
    },
    advanced: {
      title: 'Advanced Embryogenesis',
      description: 'Deep dive into molecular regulation, stem cell biology, and clinical applications',
      content: `
# Advanced Embryogenesis

## Molecular Control of Cell Fate Decisions

### Pluripotency Networks

### Core Pluripotency Circuitry
\`\`\`
OCT4 + SOX2 + NANOG
    ↓
Auto- and cross-regulation
    ↓
Maintenance of pluripotent state
    ↓
Activation of pluripotency targets (KLF4, ESRRB, TBX3)
\`\`\`

### Epigenetic Landscape
- **Bivalent domains**: H3K4me3 + H3K27me3 at developmental genes
- ** poised state**: Genes ready for activation or repression
- **DNA methylation**: Dynamic changes during lineage restriction
- **Chromatin remodeling**: SWI/SNF complexes, Polycomb group

### Lineage Specification

### Trophectoderm Specification
- **CDX2 induction**: HIPPO signaling pathway in outer cells
- **YAP/TAZ nuclear localization**: In outer cells (low cell density)
- **TEAD4 binding**: Co-activator for CDX2 expression
- **GATA3**: Reinforces trophectoderm fate
- **EOMES**: Trophoblast stem cell maintenance

### Primitive Endoderm Specification
- **GATA6 expression**: Initial marker of PE competence
- **SOX17 cooperation**: PE specification
- **FGF/ERK signaling**: Salt-and-pepper distribution of PE vs EPI cells
- **Sorting**: Differential adhesion sorts PE cells to surface

### Inner Cell Mass Specification
- **OCT4 maintenance**: High levels in ICM
- **NANOG expression**: Repressed in PE, maintained in EPI
- **FGF/MEK inhibition**: Promotes naive pluripotency
- **2i culture conditions**: PD0325901 (MEK inhibitor) + CHIR99021 (GSK3 inhibitor)

## Gastrulation: Cellular and Molecular Mechanisms

### Epithelial-Mesenchymal Transition (EMT)

### Molecular Events of EMT
| Step | Molecular Change | Function |
|------|------------------|----------|
| Initiation | SNAIL/SLUG upregulation | Repress E-cadherin |
| Progression | TWIST, ZEB1/2 induction | Further EMT promotion |
| Execution | MMP production | Basement membrane degradation |
| Migration | N-cadherin switch | Mesenchymal adhesion |
| Completion | Mesenchymal markers (VIM) | Migratory phenotype |

### Single-Cell Transcriptomics of Gastrulation

#### Cell Fate Trajectories
- **Pseudotime analysis**: Reconstruction of developmental trajectories
- **Branch points**: Key decision nodes in lineage specification
- **RNA velocity**: Future cell state prediction
- **Fate mapping**: Lineage tracing at single-cell resolution

### Gastrulation Organoids
- **Gastruloids**: In vitro models of gastrulation
- **3D aggregates**: Embryonic stem cells self-organize
- **Axial organization**: Anterior-posterior patterning
- **Limitations**: Lack extraembryonic tissues, size constraints

## Neural Tube Patterning

### Dorsoventral Patterning

### Morphogen Gradients
\`\`\`
Dorsal (BMP4 from roof plate) → Intermediate → Ventral (SHH from floor plate)
    ↓
Dorsal interneurons → Motor neurons → Ventral interneurons
\`\`\`

### Progenitor Domains
| Domain | Dorsoventral Position | Derivative |
|--------|----------------------|------------|
| dP1-6 | Dorsal | Sensory interneurons |
| p0-3 | Intermediate | V0-V3 interneurons |
| pMN | Ventral (midline) | Motor neurons |
| p3 | Floor plate adjacent | V3 interneurons |

### Anterior-Posterior Patterning

### Hindbrain Rhombomeres
- **HOX genes**: Segmentation identity
- **Krox20 (EGR2)**: Rhombomeres 3 and 5
- **kreisler (MAFB)**: Rhombomeres 5 and 6
- **Boundary formation**: Eph/ephrin signaling

### Forebrain Patterning
- **Telencephalon**: Emx1/2, Pax6
- **Diencephalon**: Six3, Rx1
- **Eye field**: Rx1, Pax6, Lhx2
- **Midbrain-hindbrain boundary**: Otx2/Gbx2 interface, FGF8

## Somitogenesis: The Segmentation Clock

### Molecular Oscillator
- **HES/Hairy genes**: Negative feedback oscillator
- **Lunatic fringe (Lfng)**: Glycosylates Notch receptors
- **Period**: ~30 minute oscillations in human
- **Wavefront**: FGF/WNT gradient that converts oscillations to segments

### Determination Front
- **FGF8 gradient**: High posterior, low anterior
- **WNT3a gradient**: Similar to FGF
- **Retinoic acid**: Anterior gradient opposing FGF/WNT
- **Positional information**: Determines segment size and identity

### Somite Epithelialization
- **Paraxis (Tcf15)**: bHLH transcription factor
- **MESP2**: Segment boundary formation
- **DLL3/Notch**: Segment boundary determination
- **EphA4**: Boundary sharpening

## Left-Right Asymmetry

### Cilia and Leftward Flow
- **Node cilia**: Monocilia at Hensen's node
- **Rotational movement**: Clockwise, creating leftward flow
- **Nodal flow**: Moves left-sided vesicles
- **Calcium signaling**: Asymmetric calcium on left side

### Molecular Asymmetry Cascade
\`\`\`
Leftward flow → Nodal (left lateral plate mesoderm)
    ↓
Lefty2 (left side)
    ↓
Pitx2 (left-sided organ asymmetry)
    ↓
Organ looping (heart, stomach, gut)
\`\`\`

### Situs Inversus and Heterotaxy
- **Kartagener syndrome**: Primary ciliary dyskinesia
- **DNAH5 mutations**: Dynein arm defects
- **Heterotaxy**: Randomized organ positioning
- **Incidence**: 1 in 10,000 for situs inversus

## Stem Cell Biology and Embryogenesis

### Pluripotent Stem Cell States

### Naive Pluripotency
- **Pre-implantation epiblast**: Equivalent to ICM
- **2i/LIF culture conditions**: MEK + GSK3 inhibition + LIF
- **X chromosome activation**: Both X's active in females
- **Global DNA hypomethylation**: Low methylation state

### Primed Pluripotency
- **Post-implantation epiblast**: Later developmental stage
- **FGF2/Activin A culture**: Maintenance conditions
- **X chromosome inactivation**: One X inactive in females
- **Higher methylation**: More restricted epigenetic state

### Direct Reprogramming
- **Yamanaka factors**: OCT4, SOX2, KLF4, c-MYC
- **iPSC generation**: Somatic cell reprogramming
- **Epigenetic memory**: Residual marks from cell of origin
- **Applications**: Disease modeling, cell therapy

## Clinical Embryogenesis Applications

### Preimplantation Genetic Testing
- **PGT-A**: Aneuploidy screening
- **PGT-M**: Monogenic disorder testing
- **PGT-SR**: Structural rearrangement screening
- **Timing**: Blastocyst biopsy (day 5-6)

### Mitochondrial Replacement Therapy
- **Maternal spindle transfer (MST)**: Metaphase II spindle transfer
- **Pronuclear transfer (PNT)**: Post-fertilization transfer
- **Indications**: mtDNA diseases, age-related infertility
- **Safety**: <2% mtDNA carryover targeted

### CRISPR in Embryos
- **Research use only**: Clinical application prohibited
- **Mosaicism**: Incomplete editing in all cells
- **Off-target effects**: Unintended genomic modifications
- **Ethical considerations**: Heritable genome editing

## Embryonic Diagnostics

### Early Pregnancy Ultrasound
- **Gestational sac**: Visible at 4-5 weeks
- **Yolk sac**: Confirms intrauterine pregnancy
- **Fetal pole**: Visible at 5-6 weeks
- **Cardiac activity**: Expected at 6-7 weeks
- **Crown-rump length (CRL)**: Dating accuracy ±5 days

### Maternal Serum Markers
- **hCG**: Produced by syncytiotrophoblast
- **PAPP-A**: First trimester screening
- **AFP**: Neural tube defect screening (second trimester)
- **Inhibin A**: First trimester screening

## Comparative Embryology

### Evolutionary Considerations

### Conserved Mechanisms
- **BMP/chordin axis**: Dorsal-ventral patterning (all bilaterians)
- **HOX clusters**: Anterior-posterior patterning
- **Notch signaling**: Segmentation clock
- **Wnt/β-catenin**: Primary axis formation

### Species Differences
| Feature | Human | Mouse | Zebrafish |
|---------|-------|-------|-----------|
| Gestation | 40 weeks | 19-21 days | 48-72 hours |
| Implantation | Interstitial | Eccentric | External |
| Placentation | Hemochorial | Hemochorial | N/A |
| Early cleavage | Asynchronous | Asynchronous | Synchronous |

### Developmental Timing (Heterochrony)
- **Human extended neurogenesis**: Longer brain development
- **Altricial vs precocial**: Human born relatively immature
- **Life history**: Extended childhood and learning period
      `,
      flashcards: [
        {
          id: 'e1-adv',
          front: 'What signaling pathway drives trophectoderm specification?',
          back: 'The HIPPO signaling pathway: YAP/TAZ nuclear localization in outer cells leads to TEAD4-mediated CDX2 expression.'
        },
        {
          id: 'e2-adv',
          front: 'What are bivalent chromatin domains in pluripotent cells?',
          back: 'Regions marked by both H3K4me3 (activating) and H3K27me3 (repressive) that keep developmental genes poised for activation or repression.'
        },
        {
          id: 'e3-adv',
          front: 'What is the segmentation clock in somitogenesis?',
          back: 'A molecular oscillator involving HES/Hairy genes with ~30-minute oscillations that regulates somite formation in coordination with a determination front.'
        },
        {
          id: 'e4-adv',
          front: 'What is the difference between naive and primed pluripotency?',
          back: 'Naive: Pre-implantation ICM state, 2i/LIF culture, both X active. Primed: Post-implantation epiblast, FGF2/Activin culture, X inactivation.'
        },
        {
          id: 'e5-adv',
          front: 'What establishes left-right asymmetry in the embryo?',
          back: 'Leftward flow generated by node cilia creates asymmetric Nodal expression on the left, leading to Pitx2 and asymmetric organ morphogenesis.'
        },
        {
          id: 'e6-adv',
          front: 'What transcription factors constitute the core pluripotency circuitry?',
          back: 'OCT4, SOX2, and NANOG form an interconnected auto-regulatory network that maintains pluripotency and represses differentiation.'
        }
      ],
      quiz: [
        {
          id: 'q1-adv',
          question: 'Which molecule is the key intracellular transducer of the HIPPO pathway in trophectoderm specification?',
          options: ['β-catenin', 'YAP/TAZ', 'SMAD', 'Notch'],
          correctAnswer: 1,
          explanation: 'YAP/TAZ translocates to the nucleus in outer cells (low cell density) where it binds TEAD4 to activate CDX2 and trophectoderm genes.'
        },
        {
          id: 'q2-adv',
          question: 'What is the approximate period of the segmentation clock in human somitogenesis?',
          options: ['5-10 minutes', '15-20 minutes', '25-30 minutes', '60-90 minutes'],
          correctAnswer: 2,
          explanation: 'The segmentation clock oscillates with a period of approximately 30 minutes in humans, regulating somite formation.'
        },
        {
          id: 'q3-adv',
          question: 'Which culture conditions maintain naive pluripotency?',
          options: ['FGF2 + Activin A', 'BMP4 + LIF', '2i + LIF', 'Retinoic acid'],
          correctAnswer: 2,
          explanation: '2i (MEK inhibitor + GSK3 inhibitor) plus LIF maintains naive pluripotency equivalent to pre-implantation epiblast.'
        },
        {
          id: 'q4-adv',
          question: 'What is the function of node cilia in establishing left-right asymmetry?',
          options: ['Sensing mechanical signals', 'Generating leftward fluid flow', 'Producing SHH', 'Cell division'],
          correctAnswer: 1,
          explanation: 'Node cilia rotate clockwise to generate leftward flow that transports asymmetrically-distributed morphogens, initiating left-sided Nodal expression.'
        },
        {
          id: 'q5-adv',
          question: 'What are the Yamanaka factors for generating iPSCs?',
          options: ['OCT4, SOX2, NANOG, KLF4', 'OCT4, SOX2, KLF4, c-MYC', 'OCT4, NANOG, LIN28, c-MYC', 'SOX2, KLF4, c-MYC, NANOG'],
          correctAnswer: 1,
          explanation: 'The Yamanaka factors are OCT4, SOX2, KLF4, and c-MYC. These four factors can reprogram somatic cells to induced pluripotent stem cells.'
        }
      ]
    },
    expert: {
      title: 'Expert-Level Embryogenesis',
      description: 'Master the molecular mechanisms, research frontiers, and clinical implications',
      content: `
# Expert-Level Embryogenesis

## Systems Biology of Early Development

### Gene Regulatory Networks (GRNs)

### Pluripotency GRN
\`\`\`
Core: OCT4 ↔ SOX2 → NANOG
    ↓
Feed-forward loops
    ↓
Secondary factors: KLF4, ESRRB, TBX3, TCF3
    ↓
Chromatin modifiers: SWI/SNF, Polycomb, NuRD
\`\`\`

### Endomesoderm GRN
\`\`\`
Nodal → SMAD2/3 + FOXH1
    ↓
EOMES, MIXL1, GATA4/6
    ↓
Endoderm: SOX17, FOXA2 | Mesoderm: T/Brachyury, MESP1
\`\`\`

### Single-Cell Multi-Omics Integration

### Multi-Omodal Analysis
- **scRNA-seq**: Transcriptome profiling
- **scATAC-seq**: Chromatin accessibility
- **scMethyl-seq**: DNA methylation
- **scProteomics**: Protein expression (emerging)
- **Spatial transcriptomics**: Positional information

### Computational Analysis
- **Dimensionality reduction**: UMAP, t-SNE, PHATE
- **Trajectory inference**: Slingshot, Monocle, PAGA
- **RNA velocity**: Future state prediction
- **GRN reconstruction**: SCENIC, PIDC
- **Integration**: Seurat, Scanpy, Harmony

## Epigenetic Reprogramming

### Global DNA Methylation Dynamics

### Preimplantation Methylation
\`\`\`
Fertilization
    ↓
Paternal genome: Active demethylation (TET3-mediated)
Maternal genome: Passive demethylation (replication-dependent)
    ↓
Minimum at blastocyst stage (~20% global methylation)
    ↓
De novo methylation (postimplantation)
    ↓
Somatic patterns established (~70% global methylation)
\`\`\`

### Imprinted Gene Loci
- **Protection from demethylation**: PGC7/Stella, ZFP57
- **Differentially methylated regions (DMRs)**: Gamete-specific marks
- **Maintenance**: DNMT1o (oocyte-specific isoform)
- **Failure consequences**: Beckwith-Wiedemann, Angelman, Prader-Willi

### Histone Variant Dynamics

### Reprogramming-Associated Variants
| Variant | Function | Timing |
|---------|----------|--------|
| H3.3 | Replacement variant, active chromatin | Paternal pronucleus |
| H2A.Z | Active promoters, enhancers | Zygotic genome activation |
| macroH2A | X inactivation, heterochromatin | Preimplantation |
| CENP-A | Centromeric specification | Postimplantation |

### 3D Genome Architecture

### Chromatin Reorganization
- **Sperm genome**: Highly compacted protamine-based
- **Oocyte genome**: Histone-based, less compact
- **Zygote**: Gradual establishment of TADs
- **Blastocyst**: TADs largely established
- **Topologically associating domains (TADs)**: 3D chromatin loops
- **Compartment switching**: A/B compartments during differentiation

### Nuclear Architecture
- **Lamina-associated domains (LADs)**: Heterochromatin at periphery
- **Nucleolar organizing regions (NORs)**: rDNA clusters
- **Nuclear bodies**: Cajal bodies, speckles, PML bodies
- **Dynamics**: Reorganization during cell fate transitions

## Zygotic Genome Activation (ZGA)

### Major ZGA Waves

### Minor ZGA (Human: 2-cell stage)
- **Transient transcription**: Limited set of genes
- **Examples**: ZSCAN4, DUX family, HERVK (ERV)
- **Function**: Chromatin remodeling, maternal clearance

### Major ZGA (Human: 4-8 cell stage)
- **Widespread activation**: Thousands of genes
- **DUX4**: Transcription factor activating ZGA genes
- ** pluripotency genes**: OCT4, NANOG, SOX2
- **Repeat elements**: ERV activation, chromatin opening

### ZGA Regulation

### Maternal-to-Zygotic Transition (MZT)
- **Maternal mRNA degradation**: miR-430/302 family
- **Zinc finger proteins**: ZFP352, ZFP42
- **DDX RNA helicases**: DDX4 (VASA), DDX1
- **Chromatin accessibility**: ATAC-seq shows opening

### Transcriptional Bursting
- **Burst kinetics**: Transcription occurs in bursts
- **Single-molecule imaging**: MS2/MCP system
- **Burst frequency**: Regulated by enhancers
- **Burst size**: Polymerase initiation rate

## Cellular Mechanics of Morphogenesis

### Force Generation in Development

### Actomyosin Dynamics
- **Apical constriction**: Actin-myosin purse-string
- **Cell intercalation**: Convergent extension
- **Tissue tension**: Stress fiber networks
- **Mechanical feedback**: YAP/TAZ mechanotransduction

### Cell-Cell Adhesion
- **Adherens junctions**: E-cadherin/β-catenin/α-catenin
- **Mechanical coupling**: Cadherin mechanosensing
- **Junction remodeling**: Endocytosis, recycling
- **Tissue tension**: Balanced with actomyosin

### Extracellular Matrix (ECM)
- **Fibronectin**: Early ECM, fibrillogenesis
- **Laminin**: Basement membrane assembly
- **Collagen**: Later development, structural
- **Proteoglycans**: Hyaluronan, versican

### Mathematical Modeling

### Vertex Models
- **Cell geometry**: Tiling of polygons
- **Energy minimization**: Tissue shape prediction
- **Mechanical properties**: Tension, elasticity
- **Applications**: Neural tube closure, gastrulation

### Continuum Mechanics
- **Tissue as continuum**: Stress-strain relationships
- **Viscoelasticity**: Time-dependent deformation
- **Finite element modeling**: Complex geometries
- **Growth anisotropy**: Directional growth patterns

## Developmental Origins of Health and Disease (DOHaD)

### Epigenetic Programming

### Critical Windows
- **Periconceptional**: Epigenetic reprogramming
- **First trimester**: Organogenesis sensitive
- **Third trimester**: Rapid growth
- **Early postnatal**: Metabolic programming

### Environmental Influences
| Exposure | Epigenetic Effect | Health Outcome |
|----------|------------------|----------------|
| Maternal nutrition | DNA methylation changes | Metabolic syndrome |
| Endocrine disruptors | Imprinting alterations | Reproductive disorders |
| Stress hormones | HPA axis programming | Mental health |
| Hypoxia | HIF pathway changes | Cardiovascular disease |
| Toxins (alcohol, smoking) | Global methylation | Neurodevelopmental deficits |

### Transgenerational Epigenetic Inheritance
- **Evidence in humans**: Dutch Hunger Winter, Överkalix cohort
- **Animal models**: Agouti mouse, endocrine disruptors
- **Mechanisms debated**: Imprinted genes, small RNAs, persistent epigenetic marks
- **Alternative explanations**: Cultural inheritance, shared environment

## Clinical Translation

### Regenerative Medicine

### Organoid Technology
- **Cerebral organoids**: Modeling brain development
- **Intestinal organoids**: Epithelial self-renewal
- **Kidney organoids**: Nephrogenesis modeling
- **Limitations**: Lack vasculature, limited maturation, variability

### Bioengineering Approaches
- **3D bioprinting**: Spatial patterning of cells
- **Decellularized scaffolds**: Native ECM architecture
- **Microfluidic devices**: Organ-on-a-chip systems
- **Synthetic embryos**: Stem cell-based embryo models

### Gene Therapy Considerations
- **Germline editing**: Heritable changes (prohibited)
- **Somatic editing**: Non-heritable (therapeutic)
- **Delivery systems**: AAV, lentivirus, lipid nanoparticles
- **Safety**: Off-target effects, immune responses

## Computational Embryology

### Machine Learning Applications

### Image Analysis
- **Cell tracking**: Automated lineage tracing
- **Segmentation**: Cell/tissue boundary detection
- **Pattern recognition**: Phenotype classification
- **Deep learning**: Convolutional neural networks

### Predictive Modeling
- **Embryo selection**: Morphokinetic parameters
- **Viability prediction**: Time-lapse imaging
- **Genotype-phenotype**: From genetic variants to outcomes
- **Drug discovery**: Screening on organoids

### Simulation Platforms
- **Virtual embryo**: Computational modeling
- **Mechanical simulations**: Finite element modeling
- **Gene network dynamics**: Boolean, ODE models
- **Multi-scale integration**: From molecules to organism

## Ethical and Societal Considerations

### 14-Day Rule Debate
- **Original rationale**: Primitive streak, individuation
- **Current capabilities**: Cultured to 13 days (2021)
- **Arguments for extension**: Research benefits, miscarriage modeling
- **Arguments against**: Moral status, slippery slope
- **International variation**: Different countries, different rules

### Embryo Models
- **Synthetic embryos**: Stem cell-based structures
- **Moral status**: Do they warrant embryo-like protection?
- **Regulatory gap**: Not covered by existing laws
- **Research need**: Disease modeling, infertility

### Germline Editing
- **Scientific consensus**: Not ready for clinical use
- **Technical hurdles**: Mosaicism, off-targets, efficacy
- **Ethical principles**: Safety, justice, solidarity
- **Governance**: International cooperation needed

## Frontiers and Future Directions

### Single-Cell Atlases
- **Human Cell Atlas**: All cell types in human body
- **Developmental atlases**: Time-course of development
- **Spatial mapping**: In situ sequencing, MERFISH
- **Integration**: Multi-omic, multi-scale

### In Vitro Gametogenesis (IVG)
- **Progress**: Mouse IVG achieved (2016)
- **Human challenges**: Longer timeline, ethical concerns
- **Applications**: Infertility, same-sex reproduction, preservation
- **Obstacles**: Complete meiosis, epigenetic normality, safety

### Artificial Wombs
- **Current progress**: Extreme prematurity (animal studies)
- **Ectogestation**: Complete ex vivo gestation
- **Applications**: Fetal therapy, infertility
- **Ethics**: Redefining pregnancy, fetal subjecthood

### Space Embryology
- **Microgravity effects**: Development under zero-g
- **ISS experiments**: Mouse embryo development
- **Radiation concerns**: Cosmic rays, DNA damage
- **Long-term implications**: Human reproduction in space

## Synthesis and Integration

Embryogenesis represents the intersection of:
- **Molecular biology**: Gene regulation, signaling pathways
- **Cell biology**: Morphogenesis, mechanics, metabolism
- **Systems biology**: Networks, emergence, self-organization
- **Evolutionary biology**: Conservation, innovation, constraint
- **Medicine**: Birth defects, regenerative medicine, DOHaD
- **Ethics**: Moral status, research boundaries, societal impact

Expert-level understanding requires integration across these domains, recognizing both the remarkable progress in our knowledge and the profound questions that remain.
      `,
      flashcards: [
        {
          id: 'e1-exp',
          front: 'What are the two waves of zygotic genome activation (ZGA) in humans?',
          back: 'Minor ZGA at 2-cell stage (limited genes like ZSCAN4, DUX) and Major ZGA at 4-8 cell stage (widespread activation including pluripotency genes).'
        },
        {
          id: 'e2-exp',
          front: 'What protects imprinted genes from demethylation after fertilization?',
          back: 'PGC7/Stella and ZFP57 protect differentially methylated regions (DMRs) at imprinted loci from TET3-mediated demethylation.'
        },
        {
          id: 'e3-exp',
          front: 'What is DOHaD?',
          back: 'Developmental Origins of Health and Disease - the concept that environmental exposures during critical developmental windows can program long-term health outcomes.'
        },
        {
          id: 'e4-exp',
          front: 'What is the 14-day rule and why is it being debated?',
          back: 'The 14-day rule limits in vitro embryo culture. Debate exists because technology can now approach this limit, and extending it could yield research benefits but raises ethical concerns.'
        },
        {
          id: 'e5-exp',
          front: 'What are the Yamanaka factors for iPSC generation?',
          back: 'OCT4, SOX2, KLF4, and c-MYC. These four factors can reprogram somatic cells to pluripotency.'
        }
      ],
      quiz: [
        {
          id: 'q1-exp',
          question: 'At what developmental stage does major ZGA occur in humans?',
          options: ['2-cell stage', '4-8 cell stage', 'Morula stage', 'Blastocyst stage'],
          correctAnswer: 1,
          explanation: 'Major ZGA occurs at the 4-8 cell stage in humans, involving widespread activation of thousands of genes.'
        },
        {
          id: 'q2-exp',
          question: 'Which enzyme mediates active demethylation of the paternal genome?',
          options: ['DNMT1', 'TET3', 'DNMT3A', 'AID'],
          correctAnswer: 1,
          explanation: 'TET3 oxidizes 5-methylcytosine to 5-hydroxymethylcytosine, initiating active demethylation of the paternal genome.'
        },
        {
          id: 'q3-exp',
          question: 'What is the principle of DOHaD?',
          options: ['Genes determine all health outcomes', 'Environmental exposures during development program long-term health', 'All diseases are congenital', 'Epigenetics never changes'],
          correctAnswer: 1,
          explanation: 'DOHaD proposes that environmental influences during critical developmental windows can have lifelong programming effects on health.'
        },
        {
          id: 'q4-exp',
          question: 'Which chromatin remodelers are key components of the pluripotency network?',
          options: ['SWI/SNF and Polycomb', 'Cohesin and Condensin', 'Mediator and TFIID', 'ISWI and CHD'],
          correctAnswer: 0,
          explanation: 'SWI/SNF complexes and Polycomb group proteins are key chromatin remodelers that regulate pluripotency and differentiation.'
        },
        {
          id: 'q5-exp',
          question: 'What is the 14-day rule in embryo research?',
          options: ['Time limit for genetic testing', 'Culture limit for human embryos in vitro', 'Gestational age for abortion', 'Storage time for frozen embryos'],
          correctAnswer: 1,
          explanation: 'The 14-day rule limits in vitro culture of human embryos to 14 days post-fertilization, corresponding to primitive streak formation.'
        }
      ]
    },
    master: {
      title: 'Mastering Embryogenesis',
      description: 'Comprehensive understanding from basic principles to clinical applications and research frontiers',
      content: `
# Mastering Embryogenesis

## Unifying Principles of Development

### Core Concepts

1. **Progressive Restriction**: From totipotent → pluripotent → multipotent → unipotent
2. **Induction**: One tissue influences another's development
3. **Competence**: Ability to respond to inductive signals
4. **Specification**: Cell fate determined but not yet irreversible
5. **Determination**: Cell fate is irreversible
6. **Differentiation**: Acquisition of specialized structure/function
7. **Morphogenesis**: Generation of form and shape
8. **Growth**: Increase in size through cell division and expansion

### Developmental Processes
\`\`\`
Cleavage → Patterning → Differentiation → Morphogenesis → Growth
    ↓                                              ↓
Cell fate decisions                       Tissue organization
    ↓                                              ↓
Gene regulatory networks                 Mechanical forces
\`\`\`

## Historical Evolution of Understanding

### Key Paradigm Shifts

#### Preformation to Epigenesis
- **Preformation (17th century)**: Embryo preformed in egg/sperm
- **Epigenesis (Wolff, 1759)**: New structures arise progressively
- **Modern synthesis**: Both genetic information and epigenetic regulation

#### Experimental Embryology
- **Roux (1888)**: Half-embryo experiments
- **Driesch (1892)**: Separation of blastomeres
- **Spemann (1924)**: Organizer discovery (Nobel Prize)
- **Waddington (1940)**: Epigenetic landscape concept

#### Molecular Revolution
- **Nusslein-Volhard & Wieschaus (1980)**: Segmentation genes (Nobel)
- **HOX genes discovery**: Homeotic body patterning
- **Stem cell isolation**: Evans, Kaufman, Martin (Nobel)
- **iPSC generation**: Yamanaka (Nobel)

## Clinical Embryology Practice

### Infertility Assessment

### Female Factor Evaluation
- **Ovarian reserve**: AMH, FSH, antral follicle count
- **Tubal patency**: Hysterosalpingography, laparoscopy
- **Uterine cavity**: Sonohysterography, hysteroscopy
- **Endocrine assessment**: TSH, prolactin, androgens

### Male Factor Evaluation
- **Semen analysis**: WHO parameters (2 samples, 2-7 days abstinence)
- **Hormonal profile**: FSH, LH, testosterone, inhibin B
- **Genetic testing**: Karyotype, Y microdeletion, CFTR
- **Advanced testing**: DNA fragmentation, ROS, CASA

### ART Laboratory Management

### Quality Control
- **Air quality**: HEPA filtration, VOC monitoring
- **Temperature stability**: Incubator and workstation monitoring
- **Gas composition**: O2 (5%), CO2 (6%), N2 balance
- **Media quality**: Batch testing, pH, osmolarity

### Embryo Assessment
- **Cleavage stage**: Cell number, fragmentation, symmetry
- **Blastocyst grading**: Expansion, ICM quality, TE quality
- **Time-lapse parameters**: Pronuclear timing, cleavage synchrony
- **Metabolomics**: Spent media analysis (emerging)

### Preimplantation Genetic Testing

### PGT Methodology
\`\`\`
Embryo biopsy (day 5-6)
    ↓
Whole genome amplification (WGA)
    ↓
Next-generation sequencing (NGS)
    ↓
Bioinformatics analysis
    ↓
Embryo selection for transfer
\`\`\`

### Indications
- **PGT-A**: Advanced maternal age, recurrent pregnancy loss
- **PGT-M**: Single gene disorders (cystic fibrosis, SMA, etc.)
- **PGT-SR**: Balanced translocations, inversions

## Surgical Embryology

### Fetal Surgery

### Indications
- **Spina bifida**: Myelomeningocele repair (MOMS trial)
- **Twin-twin transfusion**: Laser ablation of communicating vessels
- **Congenital diaphragmatic hernia**: FETO (tracheal balloon)
- **Lower urinary tract obstruction**: Vesicoamniotic shunting

### Timing Considerations
- **Early intervention**: Prevent irreversible damage
- **Fetal viability**: Balance maternal/fetal risk
- **Gestational age windows**: Procedure-specific timing

### Fetal Therapy
- **Stem cell transplantation**: In utero for immunologic tolerance
- **Gene therapy**: In utero delivery (experimental)
- **Pharmacologic**: Maternal administration crossing placenta

## Teratology and Prevention

### Principles of Teratology

### Wilson's Principles (1959)
1. **Susceptibility**: Depends on genotype and developmental stage
2. **Critical periods**: Specific tissues vulnerable at specific times
3. **Manifestations**: Dose-response relationship
4. **Mechanisms**: Multiple pathways to final phenotype
5. **Intermediary**: Teratogens act through specialized cells

### Critical Periods
| Period | Teratogen Sensitivity | Major Effects |
|--------|----------------------|---------------|
| Weeks 1-2 | All or none | Embryo loss or normal |
| Weeks 3-8 | HIGH | Major structural malformations |
| Weeks 9-38 | Moderate | Functional defects, growth |

### Known Teratogens

### Infections
- **TORCH**: Toxoplasma, Rubella, CMV, Herpes, Other
- **Rubella**: Cataracts, deafness, cardiac defects
- **CMV**: Microcephaly, hearing loss, intellectual disability
- **Zika**: Microcephaly, intracranial calcifications

### Physical Agents
- **Ionizing radiation**: Microcephaly, growth restriction
- **Hyperthermia**: Neural tube defects
- **Mechanical**: Limb deformities, oligohydramnios sequence

### Chemical Agents
| Agent | Effects | Critical Period |
|-------|---------|-----------------|
| Alcohol | FAS, microcephaly, growth | Entire pregnancy |
| Isotretinoin | CNS, cardiac, ear defects | Organogenesis |
| Thalidomide | Limb defects | Weeks 4-6 |
| Warfarin | Skeletal anomalies, hemorrhage | Entire pregnancy |
| ACE inhibitors | Renal dysgenesis, skull hypoplasia | 2nd-3rd trimester |

### Prevention Strategies
- **Preconception counseling**: Ideally 3+ months prior
- **Folic acid**: 400-800 μg starting 1 month before conception
- **Vaccination**: Rubella, varicella, hepatitis B
- **Medication review**: Teratogen risk assessment
- **Lifestyle modification**: Smoking cessation, alcohol avoidance

## Ethical Framework

### Bioethical Principles

### Belmont Principles
1. **Respect for persons**: Autonomy, informed consent
2. **Beneficence**: Maximize benefits, minimize harms
3. **Justice**: Fair distribution of research benefits/burdens

### Embryo Research Ethics
- **Moral status debate**: When does moral status begin?
- **Respect for potential life**: 14-day rule
- **Research necessity**: Justification for embryo use
- **Alternative methods**: Use of non-embryonic models when possible

### ART Ethics
- **Multiple pregnancy risks**: Elective single embryo transfer
- **Commodification concerns**: Payment for gametes/embryos
- **Access and justice**: Socioeconomic disparities
- **Interests of the child**: Donor anonymity, sibling incest risk

## Future Horizons

### Artificial Embryogenesis
- **Embryo models**: Stem cell-based structures mimicking development
- **Gastruloids**: Self-organizing patterns
- **Synthetic embryos**: Complete embryo-like structures
- **Regulatory challenges**: Not clearly covered by existing laws

### In Utero Gene Editing
- **Potential advantages**: Early treatment, immune tolerance
- **Safety concerns**: Off-target effects, mosaicism
- **Delivery systems**: AAV, LNP, viral vectors
- **Ethical considerations**: Germline vs somatic distinction

### Non-invasive Prenatal Testing (NIPT) Evolution
- **Current**: Cell-free DNA, aneuploidy screening
- **Future**: Whole genome sequencing, single gene disorders
- **Implications**: Earlier, more comprehensive diagnosis
- **Ethics**: Routinization, pregnancy termination decisions

### Artificial Womb Technology
- **Current state**: Animal studies, extreme prematurity
- **Potential applications**: Preterm birth, fetal therapy
- **Limitations**: Placental function, long-term outcomes
- **Ethical questions**: Redefining pregnancy, abortion politics

## Professional Development

### Clinical Embryology Training
- **Certification pathways**: AAB, ESHRE, ACE certifications
- **Core competencies**: Laboratory skills, quality management, genetics
- **Continuing education**: Rapidly evolving field
- **Research literacy**: Critical appraisal of new technologies

### Multidisciplinary Collaboration
- **Reproductive endocrinology**: Medical management
- **Embryology laboratory**: Technical expertise
- **Genetics**: Preconception and prenatal testing
- **Mental health**: Psychological support
- **Ethics consultation**: Complex decision-making
- **Legal/Regulatory**: Compliance, standards

## Integration: The Clinical-Research Continuum

### Translational Pathway
\`\`\`
Basic discovery → Model systems → Clinical trials
    ↓                                            ↓
Understanding disease                  Evidence-based practice
    ↓                                            ↓
Novel interventions ← Quality assessment ← Patient outcomes
\`\`\`

### Knowledge Synthesis
Expert understanding requires integration of:
- **Developmental biology**: Normal and abnormal processes
- **Molecular genetics**: Genomic and epigenetic regulation
- **Clinical medicine**: Diagnosis and treatment
- **Laboratory science**: ART and embryology techniques
- **Bioethics**: Moral reasoning and policy development
- **Research methods**: Critical evaluation and innovation

## Conclusion: The Wonder of Development

Embryogenesis represents one of nature's most remarkable processes:
- From a single cell to a complex organism
- Guided by ancient, conserved genetic programs
- Shaped by millions of years of evolutionary refinement
- Vulnerable to disruption yet remarkably robust
- Understanding improves: Prevention, diagnosis, treatment
- Questions remain: Can we harness this power responsibly?

Mastering embryogenesis requires continuous learning across disciplines, humility in the face of complexity, and commitment to improving human health through scientific understanding and ethical application.
      `,
      flashcards: [
        {
          id: 'e1-mas',
          front: 'What are Wilson\'s principles of teratology?',
          back: '1) Susceptibility depends on genotype/developmental stage; 2) Critical periods exist; 3) Dose-response relationship; 4) Multiple mechanisms; 5) Teratogens act through specialized cells.'
        },
        {
          id: 'e2-mas',
          front: 'What are the Belmont principles for research ethics?',
          back: 'Respect for persons (autonomy), Beneficence (maximize benefit/minimize harm), Justice (fair distribution).'
        },
        {
          id: 'e3-mas',
          front: 'What is the critical period for teratogen-induced structural malformations?',
          back: 'Weeks 3-8 of development (organogenesis) is the period of highest sensitivity for structural malformations.'
        },
        {
          id: 'e4-mas',
          front: 'What is the difference between PGT-A, PGT-M, and PGT-SR?',
          back: 'PGT-A: Aneuploidy screening; PGT-M: Monogenic disorder testing; PGT-SR: Structural rearrangement testing.'
        },
        {
          id: 'e5-mas',
          front: 'What are the four stages of cell fate progression?',
          back: 'Totipotent → Pluripotent → Multipotent → Unipotent, with progressive restriction of developmental potential.'
        }
      ],
      quiz: [
        {
          id: 'q1-mas',
          question: 'Which period of development is most sensitive to teratogen-induced structural malformations?',
          options: ['Weeks 1-2', 'Weeks 3-8', 'Weeks 9-12', 'Weeks 13-40'],
          correctAnswer: 1,
          explanation: 'Weeks 3-8 (organogenesis) is the critical period when major structural malformations can occur from teratogen exposure.'
        },
        {
          id: 'q2-mas',
          question: 'What is the principle of "all or none" regarding teratogens?',
          options: ['Either all organs are affected or none', 'Embryo is lost or develops normally before week 3', 'Teratogens either work or they dont', 'Either mother or fetus is affected'],
          correctAnswer: 1,
          explanation: 'Before week 3, teratogens cause either complete embryonic loss (spontaneous abortion) or no effect - not specific malformations.'
        },
        {
          id: 'q3-mas',
          question: 'Which of the following is NOT a Wilson principle of teratology?',
          options: ['Susceptibility depends on genotype', 'Critical periods exist for teratogens', 'Teratogens only act through DNA damage', 'Dose-response relationship exists'],
          correctAnswer: 2,
          explanation: 'Teratogens act through multiple mechanisms (not just DNA damage), including cellular intermediaries and disrupted signaling pathways.'
        },
        {
          id: 'q4-mas',
          question: 'What does PGT-SR stand for?',
          options: ['Preimplantation Genetic Testing for Single Repeats', 'Preimplantation Genetic Testing for Structural Rearrangements', 'Postnatal Genetic Testing for Structural Rearrangements', 'Preimplantation Genetic Testing for Spontaneous Recovery'],
          correctAnswer: 1,
          explanation: 'PGT-SR is Preimplantation Genetic Testing for Structural Rearrangements, used for translocations and inversions.'
        },
        {
          id: 'q5-mas',
          question: 'What is the purpose of the 14-day rule in embryo research?',
          options: ['Limit genetic testing', 'Limit in vitro embryo culture to 14 days', 'Limit storage of embryos', 'Limit number of embryos created'],
          correctAnswer: 1,
          explanation: 'The 14-day rule limits in vitro culture of human embryos to 14 days post-fertilization, coinciding with primitive streak formation.'
        }
      ]
    }
  }
};
