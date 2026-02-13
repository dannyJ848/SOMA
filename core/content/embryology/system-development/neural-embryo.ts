import { LegacyEducationalContent } from '../../types';

export const neuralEmbryoContent: LegacyEducationalContent = {
  id: 'neural-embryo',
  title: 'Neural System Development',
  category: 'Embryology',
  subcategory: 'System Development',
  description: 'The formation of the brain, spinal cord, and nervous system',
  levels: {
    1: {
      title: 'Introduction to Neural Development',
      description: 'Learn how the brain and nervous system form',
      content: `
# Introduction to Neural Development

## Overview

The nervous system is one of the **first systems** to develop in the embryo. It begins as a simple plate of cells and transforms into the incredibly complex brain and spinal cord!

## Neurulation: Forming the Neural Tube

### Week 3: The Beginning

The process of forming the neural tube is called **neurulation**:

1. **Neural plate forms** (day 18)
   - A special plate of cells develops on the back of the embryo
   - These cells are called **neuroectoderm**

2. **Neural folds elevate** (day 20)
   - The edges of the plate rise up
   - Creates a groove in the middle

3. **Neural folds fuse** (day 22-23)
   - The folds come together in the middle
   - They zip up toward both ends
   - Creates a **neural tube**

4. **Neural tube is complete** (day 26-28)
   - Now a closed tube
   - Will become brain and spinal cord

## Brain Vesicles

By week 4, the neural tube develops **three swellings** (vesicles):

### Primary Vesicles
- **Prosencephalon** (forebrain): Becomes cerebrum
- **Mesencephalon** (midbrain): Stays as midbrain
- **Rhombencephalon** (hindbrain): Becomes cerebellum, pons, medulla

### Secondary Vesicles (week 5)
The forebrain divides:
- **Telencephalon**: Cerebral hemispheres
- **Diencephalon**: Thalamus, hypothalamus

The hindbrain divides:
- **Metencephalon**: Pons, cerebellum
- **Myelencephalon**: Medulla

## Major Brain Regions

### Cerebrum (Forebrain)
- Largest part of the brain
- Has two hemispheres (left and right)
- Responsible for thinking, memory, language
- Has convolutions (wrinkles) called **gyri** and **sulci**

### Cerebellum (Hindbrain)
- "Little brain"
- Located at the back of the brain
- Important for balance and coordination
- Also has wrinkled appearance

### Brainstem
- Connects cerebrum to spinal cord
- Has three parts:
  - **Midbrain**: Eye movement, hearing
  - **Pons**: Breathing, sleep
  - **Medulla**: Vital functions (heart rate, breathing)

### Spinal Cord
- Runs down the back
- Protected by vertebrae (back bones)
- Carries signals between brain and body
- Has **gray matter** inside, **white matter** outside

## Neural Crest Cells

### What Are They?
- Special cells that migrate from neural tube
- Travel to many places in the body
- Form important structures:
  - **Pigment cells** (melanocytes)
  - **Adrenal medulla** (makes adrenaline)
  - **Peripheral nerves**
  - **Facial bones/cartilage**

## Myelination

### What Is It?
- Fatty covering around nerve fibers
- Acts like **insulation** on electrical wires
- Made by cells called **oligodendrocytes** (CNS) and **Schwann cells** (PNS)
- Speeds up nerve signals dramatically

### When Does It Happen?
- **Starts**: Around month 4 of fetal development
- **Most rapid**: Last trimester and first 2 years after birth
- **Continues**: Until about 25 years old!

## Common Problems

### Neural Tube Defects

#### Spina Bifida
- **Spina bifida occulta**: Mild, hidden
- **Meningocele**: Meninges protrude
- **Myelomeningocele**: Severe, spinal cord involved

#### Anencephaly
- Brain and skull don't form properly
- Usually fatal before or soon after birth

#### Encephalocele
- Brain tissue protrudes through skull opening
- Can be treated with surgery

### Hydrocephalus
- **Too much CSF** in the brain
- Causes head to enlarge
- Requires shunt surgery to drain fluid

### Cerebral Palsy
- Brain damage before/during/after birth
- Affects movement and muscle coordination
- Many causes (prematurity, infection, lack of oxygen)

## Key Terms

- **Neurulation**: Formation of neural tube
- **Neural tube**: Becomes brain and spinal cord
- **Neural crest**: Migratory cells forming many structures
- **Myelination**: Fatty insulation on nerves
- **Cerebrospinal fluid (CSF)**: Fluid cushioning brain and spinal cord
- **Gyrus**: Ridge on brain surface
- **Sulcus**: Groove on brain surface

## Summary

Nervous system development:
1. **Day 18**: Neural plate forms
2. **Day 22-23**: Neural folds fuse
3. **Week 4**: Three brain vesicles form
4. **Week 5**: Five brain regions visible
5. **Month 4**: Myelination begins
6. **Birth**: ~100 billion neurons present
7. **Age 25**: Myelination complete

The nervous system develops from a simple tube into the incredibly complex human brain, capable of consciousness, thought, and creativity!
      `,
      flashcards: [
        {
          id: 'n1',
          front: 'What is neurulation?',
          back: 'The process of forming the neural tube from the neural plate, occurring primarily during week 3 of development.'
        },
        {
          id: 'n2',
          front: 'What are the three primary brain vesicles?',
          back: 'Prosencephalon (forebrain), Mesencephalon (midbrain), and Rhombencephalon (hindbrain).'
        },
        {
          id: 'n3',
          front: 'What do neural crest cells become?',
          back: 'Neural crest cells migrate and form pigment cells (melanocytes), adrenal medulla, peripheral nerves, and some facial bones/cartilage.'
        },
        {
          id: 'n4',
          front: 'What is myelination?',
          back: 'The process of wrapping nerve fibers with a fatty myelin sheath, which acts as insulation and dramatically speeds up nerve signal transmission.'
        },
        {
          id: 'n5',
          front: 'What is the most severe type of spina bifida?',
          back: 'Myelomeningocele - the most severe form where the spinal cord and meninges protrude through a defect in the vertebral column.'
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: 'During which week of development does neurulation primarily occur?',
          options: ['Week 2', 'Week 3', 'Week 4', 'Week 5'],
          correctAnswer: 1,
          explanation: 'Neurulation primarily occurs during week 3, with the neural plate forming around day 18 and the neural tube closing by days 26-28.'
        },
        {
          id: 'q2',
          question: 'The forebrain (prosencephalon) eventually divides into which two structures?',
          options: ['Midbrain and hindbrain', 'Telencephalon and diencephalon', 'Metencephalon and myelencephalon', 'Cerebellum and pons'],
          correctAnswer: 1,
          explanation: 'The prosencephalon divides into the telencephalon (cerebral hemispheres) and diencephalon (thalamus, hypothalamus).'
        },
        {
          id: 'q3',
          question: 'What cells produce myelin in the central nervous system?',
          options: ['Schwann cells', 'Oligodendrocytes', 'Astrocytes', 'Microglia'],
          correctAnswer: 1,
          explanation: 'Oligodendrocytes produce myelin in the CNS. Schwann cells produce myelin in the peripheral nervous system.'
        },
        {
          id: 'q4',
          question: 'Which neural tube defect is characterized by an open spinal cord with meninges protruding?',
          options: ['Spina bifida occulta', 'Meningocele', 'Myelomeningocele', 'Anencephaly'],
          correctAnswer: 2,
          explanation: 'Myelomeningocele is the most severe and common form of spina bifida where the spinal cord and meninges protrude through the vertebral defect.'
        },
        {
          id: 'q5',
          question: 'What is the function of neural crest cells?',
          options: ['Form the neural tube', 'Migrate and form various structures including pigment cells and peripheral nerves', 'Produce cerebrospinal fluid', 'Form the vertebrae'],
          correctAnswer: 1,
          explanation: 'Neural crest cells are migratory cells that form pigment cells (melanocytes), peripheral nervous system components, adrenal medulla, and some craniofacial structures.'
        }
      ]
    },
    intermediate: {
      title: 'Neural Morphogenesis',
      description: 'Detailed understanding of nervous system formation',
      content: `
# Neural Morphogenesis

## Neural Induction

### Primary Neurulation

#### Neural Plate Formation
\`\`\`
Ectoderm (epiblast)
    ↓
Signals from notochord (SHH, chordin, noggin, follistatin)
    ↓
Inhibition of BMP/TGF-β signaling
    ↓
Neural plate specification (day 18)
    ↓
Neural plate elevation and folding
    ↓
Neural tube closure (day 22-28)
\`\`\`

#### Neural Tube Closure Sites
| Closure Site | Location | Timing |
|--------------|----------|--------|
| Closure 1 | Cervical region | Initiates closure |
| Closure 2 | Forebrain | Cranial neuropore closes |
| Closure 3 | Caudal region | Closes last |

### Molecular Regulation

#### BMP Inhibition
- **Noggin**: Binds BMP, prevents receptor binding
- **Chordin**: BMP antagonist
- **Follistatin**: Activin/BMP antagonist
- **Effect**: Neural induction (default model)

#### SHH Signaling
- **Source**: Notochord and floor plate
- **Function**: Ventral neural tube patterning
- **Gradient**: High ventrally (floor plate), low dorsally

#### BMP Signaling (Dorsal)
- **Source**: Roof plate, overlying ectoderm
- **Function**: Dorsal neural tube patterning
- **Gradient**: High dorsally, low ventrally

## Brain Regionalization

### Forebrain Development

#### Prosencephalon Divisions
\`\`\`
Prosencephalon
    ├── Telencephalon
    │   ├── Cerebral hemispheres
    │   ├── Basal ganglia
    │   ├── Olfactory bulbs
    │   └── Cortex (pallium + subpallium)
    └── Diencephalon
        ├── Thalamus
        ├── Hypothalamus
        ├── Epithalamus (pineal)
        └── Subthalamus
\`\`\`

#### Cerebral Cortex Development
1. **Ventricular zone**: Neural progenitors proliferate
2. **Subventricular zone**: Intermediate progenitors
3. **Radial migration**: Along radial glia to pial surface
4. **Cortical plate**: Six-layered neocortex forms
5. **Inside-out pattern**: Deep layers first, superficial later

### Midbrain (Mesencephalon)

#### Structures
- **Tectum**: Superior and inferior colliculi
- **Tegmentum**: Red nucleus, substantia nigra, reticular formation
- **Cerebral peduncles**: Fiber tracts

### Hindbrain Development

#### Rhombencephalon Divisions
\`\`\`
Rhombencephalon
    ├── Metencephalon
    │   ├── Pons
    │   └── Cerebellum
    └── Myelencephalon
        └── Medulla oblongata
\`\`\`

#### Rhombomeres
- **Segments**: Eight transient segments (r1-r8)
- **Boundaries**: Eph/ephrin signaling
- **Hox genes**: Anterior-posterior patterning
- **Fate**: Each rhombomere has specific destiny

## Spinal Cord Development

### Neural Patterning

### Dorsoventral Patterning
\`\`\`
Roof plate → BMPs/Wnts
    ↓
Dorsal interneurons (dI1-dI6)
    ↓
Motor neuron progenitors (pMN)
    ↓
V0-V3 interneurons
    ↓
Floor plate → SHH
\`\`\`

### Progenitor Domains
| Domain | Position | Derivative |
|--------|----------|------------|
| dP1-6 | Dorsal | Sensory interneurons |
| p0 | Ventral | V0 interneurons |
| p1 | Ventral | V1 interneurons |
| p2 | Ventral | V2 interneurons |
| pMN | Ventral | Motor neurons |
| p3 | Ventral | V3 interneurons |

### Motor Neuron Development
- **Generation**: pMN domain
- **Molecular**: Olig2, Ngn2, Isl1, Lhx3
- **Axon outgrowth**: Ventral root formation
- **Connection**: To skeletal muscle

## Neural Crest Development

### Neural Crest Formation

#### Specification and Migration
\`\`\`
Neural plate border
    ↓
Border specifier genes (Pax3/7, Msx1/2, Zic1)
    ↓
Neural crest specification (Snai1/2, Twist)
    ↓
EMT and delamination
    ↓
Migration via EMT
\`\`\`

#### Migration Pathways
| Pathway | Derivatives |
|---------|-------------|
| Cranial | Craniofacial cartilage, melanocytes, peripheral ganglia |
| Vagal | Enteric nervous system, cardiac outflow |
| Trunk | Melanocytes, dorsal root ganglia, adrenal medulla |
| Sacral | Enteric nervous system (hindgut) |

### Neural Crest Derivatives

#### Peripheral Nervous System
- **Sensory ganglia**: Dorsal root ganglia, cranial ganglia
- **Autonomic ganglia**: Sympathetic, parasympathetic
- **Enteric nervous system**: Submucosal and myenteric plexuses
- **Glial cells**: Schwann cells, satellite cells

#### Non-Neural Derivatives
- **Melanocytes**: Skin, hair pigment
- **Adrenal medulla**: Chromaffin cells (catecholamines)
- **Craniofacial**: Bones, cartilage, connective tissue
- **Other**: Odontoblasts, meninges, C cells of thyroid

## Meninges Development

### Dura Mater
- **Origin**: Mesoderm (paraxial)
- **Structure**: Two layers (periosteal and meningeal)
- **Function**: Strong outer covering

### Arachnoid Mater
- **Origin**: Neural crest
- **Structure**: Delicate middle layer
- **Subarachnoid space**: CSF, major blood vessels

### Pia Mater
- **Origin**: Neural crest
- **Structure**: Vascular layer adherent to CNS
- **Function**: Nourishment, support

## Ventricular System

### Development of Ventricles
\`\`\`
Neural tube lumen
    ↓
Ventricular system
    ├── Lateral ventricles (telencephalon)
    ├── Third ventricle (diencephalon)
    ├── Cerebral aqueduct (mesencephalon)
    └── Fourth ventrence (rhombencephalon)
\`\`\`

### CSF Production
- **Choroid plexus**: Forms in ventricles
- **Ependymal cells**: Line ventricles
- **CSF flow**: Ventricles → subarachnoid space → absorption

## Clinical Correlations

### Neural Tube Defects

#### Closure Failure Types
- **Craniorachischisis**: Complete failure (fatal)
- **Anencephaly**: Cranial neuropore failure (fatal)
- **Myelomeningocele**: Caudal neuropore failure (variable survival)

#### Prevention
- **Folic acid**: 400-800 μg before and during early pregnancy
- **Reduction**: 70% reduction in NTD risk
- **Mechanism**: Methylation, DNA synthesis

### Syringomyelia
- **Pathology**: Fluid-filled cavity in spinal cord
- **Location**: Cervical region typically
- **Association**: Chiari malformation, trauma

### Chiari Malformations
- **Type I**: Tonsillar herniation (often adult)
- **Type II**: With myelomeningocele (neonatal)
- **Type III**: Cervical encephalocele
- **Type IV**: Cerebellar hypoplasia

### Neural Crest Disorders
- **Waardenburg syndrome**: Pigmentary abnormalities, hearing loss
- **Hirschsprung disease**: Enteric ganglia absence
- **Neuroblastoma**: Sympathoadrenal lineage tumor
- **Treacher Collins**: Craniofacial abnormality
      `,
      flashcards: [
        {
          id: 'n1-int',
          front: 'What are the neural tube closure sites?',
          back: 'Closure 1 (cervical) initiates closure, Closure 2 (forebrain) closes cranial neuropore, Closure 3 (caudal) closes last.'
        },
        {
          id: 'n2-int',
          front: 'What signals from the notochord induce neural plate formation?',
          back: 'SHH (Sonic hedgehog), chordin, noggin, and follistatin. These inhibit BMP/TGF-β signaling, allowing neural induction (default model).'
        },
        {
          id: 'n3-int',
          front: 'What is the "inside-out" pattern of cortical development?',
          back: 'Neurons migrate along radial glia with deep layers (VI, V) forming first and superficial layers (II, III) forming later. This is called inside-out development.'
        },
        {
          id: 'n4-int',
          front: 'What are rhombomeres?',
          back: 'Eight transient segments (r1-r8) in the hindbrain that establish regional identity through Hox gene expression. Each rhombomere has a specific developmental fate.'
        },
        {
          id: 'n5-int',
          front: 'What tissues are derived from neural crest cells?',
          back: 'PNS (sensory, autonomic, enteric ganglia), melanocytes, adrenal medulla, craniofacial cartilage/bone, meninges, C cells of thyroid.'
        },
        {
          id: 'n6-int',
          front: 'What is the ventral patterning signal in the neural tube?',
          back: 'Sonic hedgehog (SHH) from the notochord and floor plate. High ventrally (floor plate), creates a gradient that patterns cell types along the DV axis.'
        }
      ],
      quiz: [
        {
          id: 'q1-int',
          question: 'Which molecular signal is primarily responsible for ventral neural tube patterning?',
          options: ['BMP4', 'SHH (Sonic hedgehog)', 'Wnt', 'FGF8'],
          correctAnswer: 1,
          explanation: 'SHH from the notochord and floor plate creates a ventral-to-dorsal gradient that patterns ventral neural tube cell types including motor neurons.'
        },
        {
          id: 'q2-int',
          question: 'What is the developmental pattern of cortical neurogenesis?',
          options: ['Outside-in (superficial first)', 'Inside-out (deep first)', 'Random', 'Simultaneous'],
          correctAnswer: 1,
          explanation: 'Cortical development follows an inside-out pattern where deep layer neurons (VI, V) are born first and migrate first, while superficial layers (II, III) are born and migrate later.'
        },
        {
          id: 'q3-int',
          question: 'What is the origin of the meninges?',
          options: ['All from mesoderm', 'All from neural crest', 'Dura from mesoderm, arachnoid/pia from neural crest', 'All from ectoderm'],
          correctAnswer: 2,
          explanation: 'The dura mater develops from mesoderm, while the arachnoid and pia mater develop from neural crest cells.'
        },
        {
          id: 'q4-int',
          question: 'Which structure forms the boundary between individual rhombomeres?',
          options: ['Floor plate', 'Roof plate', 'Eph/ephrin signaling boundaries', 'Neural crest cells'],
          correctAnswer: 2,
          explanation: 'Eph/ephrin signaling creates sharp boundaries between rhombomeres, preventing cell mixing and establishing segmental identity in the hindbrain.'
        },
        {
          id: 'q5-int',
          question: 'Which neural crest derivative is responsible for enteric nervous system formation?',
          options: ['Cranial neural crest', 'Vagal neural crest', 'Trunk neural crest', 'Sacral neural crest'],
          correctAnswer: 1,
          explanation: 'The vagal neural crest migrates to the entire gut, while sacral neural crest contributes to the hindgut. Together they form the enteric nervous system.'
        }
      ]
    },
    advanced: {
      title: 'Advanced Neural Embryology',
      description: 'Molecular regulation and congenital disorders',
      content: `
# Advanced Neural Embryology

## Molecular Regulation of Neural Induction

### Neural Plate Border Specifiers

### Border Genes
\`\`\`
Non-neural ectoderm (BMP high)
    ↓
Border specifiers: Pax3/7, Msx1/2, Zic1
    ↓
Neural crest specifiers: Snai1/2, Twist, FoxD3
    ↓
Neural plate (BMP low)
\`\`\`

### Cross-Repressive Interactions
| Boundary | Genes | Function |
|-----------|-------|----------|
| Neural plate | Sox2, Zic, Otx2 | Neural fate |
| Border | Pax3/7, Zic1, Msx1/2 | Border specification |
| Neural crest | Snai1/2, FoxD3, Twist | EMT, migration |
| Epidermis | Dlx5/6, Gata2 | Epidermal fate |

### BMP and FGF Interplay

### Neural Induction (Default Model)
- **Default**: In absence of BMP → neural
- **BMP inhibition**: Noggin, chordin, follistatin
- **FGF**: Supports neural induction
- **Wnt**: Posterior neural

### Neural Crest Specification
- **Wnt**: BMP signaling synergism
- **FGF**: Posterior neural crest
- **Notch**: Maintains progenitor state

## Cerebral Cortex Development

### Cortical Progenitors

### Ventricular Zone Radial Glia
- **Markers**: Pax6, Sox2, Nestin
- **Function**: Primary progenitors
- **Divisions**:
  - Symmetric proliferative: Expand progenitor pool
  - Asymmetric neurogenic: One progenitor + one neuron
  - Symmetric neurogenic: Two neurons (late)

### Subventricular Zone (SVZ)
- **Intermediate progenitors**: Tbr2
- **Outer SVZ (primates)**: Additional proliferative layer
- **Function**: Expand neuronal output

### Cortical Neurogenesis Timeline
| Age | Cortical Layer | Neurons |
|-----|----------------|---------|
| E30-35 | VI (deep) | First born |
| E35-40 | V | |
| E40-45 | IV | |
| E45-50 | II-III (superficial) | Last born |

### Cortical Areas and Specialization

### Protomap vs. Protocortex
- **Protomap**: Intrinsic area specification
- **Protocortex**: Input-driven specialization
- **Current consensus**: Both contribute
- **Molecular**: FGF8 (rostral), Wnt, BMP (caudal)

### Genes Involved
- **Emx2**: Caudal-medial (visual)
- **Pax6**: Rostral-lateral (motor/sensory)
- **Lhx2**: Medial (hippocampal)

## Axon Guidance

### Major Guidance Cues

### Attractive Cues
- **Netrin-1**: Attracts commissural axons
- **SHH**: Ventral midline attraction
- **Neurotrophins**: Target-derived

### Repulsive Cues
- **Slit**: Repels from midline (Robo receptor)
- **Semaphorin**: Channel restriction, repulsion
- **Ephrin**: Topographic mapping

### Growth Cone Biology
\`\`\`
Growth cone structure
    ├── Filopodia (actin-rich probes)
    ├── Lamellipodia (veil-like)
    └── Microtubules (central domain)
    ↓
Guidance cue reception
    ↓
Signal transduction
    ↓
Cytoskeletal rearrangement
    ↓
Steering
\`\`\`

### Commissural Formation

### Corpus Callosum
- **Pioneer axons**: Cals (midline glial cells)
- **Guidance**: Netrin, Slit, Semaphorin
- **Time**: Week 8-12 formation
- **Agenesis**: 1 in 4,000, more common in males

### Anterior Commissure
- **Development**: Before corpus callosum
- **Function**: Connects temporal lobes, anterior frontal
- **Clinical**: Usually preserved in callosal agenesis

## Synaptogenesis and Refinement

### Synapse Formation

### Trans-Synaptic Adhesion
- **Neuroligin**: Postsynaptic cell adhesion
- **Neurexin**: Presynaptic binding partner
- **LRRTMs**: Leucine-rich repeat transmembrane proteins
- **Function**: Synapse specification, maturation

### Critical Periods
- **Visual**: 3-8 years (amblyopia)
- **Language**: 0-puberty (second language harder)
- **Motor**: Variable by skill
- **Mechanism**: Synaptic pruning, NMDA-dependent

### Synaptic Pruning
\`\`\`
Excess synapses (early development)
    ↓
Activity-dependent competition
    ↓
Weaker connections eliminated
    ↓
Stronger connections strengthened
    ↓
Refined neural circuits
\`\`\`

## Myelination

### Oligodendrocyte Development

### Specification and Differentiation
\`\`\`
Motor neuron progenitor (pMN) domain
    ↓
Oligodendrocyte precursors (OPCs): NG2, PDGFRα
    ↓
Migration throughout CNS
    ↓
Pre-myelinating oligodendrocytes: O4, O1
    ↓
Myelinating oligodendrocytes: MBP, PLP
\`\`\`

### Myelination Timeline
| Region | Myelination Onset | Completion |
|--------|-------------------|------------|
| Brainstem | Fetal (month 4) | 1 year |
| Cerebellum | Late fetal | 2 years |
| Occipital | Birth | 3-4 years |
| Frontal | 6 months | Adolescence |
| Association areas | 6-12 months | 25+ years |

### Molecular Regulators
- **PDGF**: OPC proliferation
- **FGF2**: OPC maintenance
- **Thyroid hormone**: Differentiation trigger
- **AXL, TAM receptors**: Myelination efficiency

## Neurotransmitter Systems

### Dopaminergic System

### Development
- **SNc (Substantia nigra pars compacta)**: Motor control
- **VTA (Ventral tegmental area)**: Reward
- **Molecular**: Lmx1a/b, Foxa2, Nurr1
- **Clinical**: Parkinson's disease (SNc loss)

### Serotonergic System

### Development
- **Raphe nuclei**: Multiple groups
- **Molecular**: Pet1, Lmx1b, Nkx2-2
- **Function**: Mood, sleep, appetite
- **Clinical**: Depression, anxiety

### Cholinergic System

### Basal Forebrain
- **Nucleus basalis**: Cortex (attention)
- **Septal nuclei**: Hippocampus (memory)
- **Molecular**: Lhx8, Gbx1
- **Clinical**: Alzheimer's (basal forebrain degeneration)

## Clinical Correlations

### Cortical Malformations

### Lissencephaly
- **Type I (Classic)**: Smooth brain, agyria
  - **LIS1 (PAFAH1B1)**: X-linked (males)
  - **DCX**: X-linked (males)
- **Type II (Cobblestone)**: Overmigration
  - **POMT1/2**: Walker-Warburg syndrome
  - **FKRP**: Muscle-eye-brain disease

### Polymicrogyria
- **Pathology**: Too many small, disorganized gyri
- **Causes**: Genetic (SRPX2), ischemic, infections (CMV)
- **Clinical**: Seizures, developmental delay

### Focal Cortical Dysplasia
- **Type I**: Abnormal lamination
- **Type II**: Dysmorphic neurons, balloon cells
- **Clinical**: Medically refractory epilepsy

### Corpus Callosum Abnormalities

### Agenesis of the Corpus Callosum
- **Complete**: Complete absence
- **Partial**: Rostrum or splenium missing
- **Associated**: Intellectual disability, seizures
- **Prognosis**: Variable, depends on associated anomalies

### Axon Guidance Disorders
- **Horizontal gaze palsy**: ROBO3 mutation
- **Mirror movements**: DCC mutation
- **Kallmann syndrome**: Anosmia, hypogonadism (ANOS1, FGFR1)

## Neurodevelopmental Disorders

### Autism Spectrum Disorders

### Genetics
- **Heritability**: ~80%
- **Genes**: Hundreds of risk genes
- **Pathways**: Synaptic function (SHANK, NRXN/NLGN), chromatin remodeling
- **Development**: Early brain overgrowth, later pruning abnormal

### Schizophrenia

### Neurodevelopmental Hypothesis
- **Genetics**: Polygenic, DISC1, NRG1, DTNBP1
- **Development**: Prenatal insults + adolescent trigger
- **Pathology**: Dysconnectivity, synaptic pruning abnormality
- **Mechanism**: NMDA hypofunction, dopamine dysregulation

### Intellectual Disability

### Genetic Causes
- **Fragile X**: FMR1 CGG expansion
- **Rett syndrome**: MECP2 mutation (X-linked dominant)
- **Down syndrome**: Trisomy 21
- **Many others**: Hundreds of genes identified
      `,
      flashcards: [
        {
          id: 'n1-adv',
          front: 'What genes are critical for neural crest specification?',
          back: 'Snai1/2 (EMT, delamination), Twist (EMT), FoxD3 (neural crest specifier), Sox10 (maintenance). Border specifiers (Pax3/7, Msx1/2, Zic1) establish border region.'
        },
        {
          id: 'n2-adv',
          front: 'What is the protomap vs. protocortex debate?',
          back: 'Protomap: intrinsic area specification by molecular gradients (FGF8 rostral, Wnt/BMP caudal). Protocortex: input-driven specialization. Current consensus is both contribute to cortical arealization.'
        },
        {
          id: 'n3-adv',
          front: 'What causes lissencephaly?',
          back: 'Type I: LIS1 or DCX mutations (neuronal migration failure). Type II: POMT1/2 or FKRP mutations (cobblestone malformation from overmigration). Both cause smooth brain.'
        },
        {
          id: 'n4-adv',
          front: 'What is the role of neuroligin-neurexin in synapse formation?',
          back: 'Trans-synaptic adhesion molecules that connect pre- and postsynaptic neurons. Neuroligin (postsynaptic) binds neurexin (presynaptic) to specify and mature synapses. Mutations linked to autism.'
        },
        {
          id: 'n5-adv',
          front: 'What OPC markers define oligodendrocyte precursors?',
          back: 'NG2 (CSPG4) and PDGFRα are the classic markers for OPCs. They migrate widely before differentiating into pre-myelinating (O4, O1) and mature myelinating oligodendrocytes (MBP, PLP).'
        },
        {
          id: 'n6-adv',
          front: 'What is the critical period for visual development?',
          back: 'Approximately 3-8 years of age. During this window, the visual cortex is plastic and amblyopia (lazy eye) can develop from abnormal input and can be treated. After this window, treatment is much less effective.'
        }
      ],
      quiz: [
        {
          id: 'q1-adv',
          question: 'Which genes are mutated in classic lissencephaly (Type I)?',
          options: ['POMT1/2', 'LIS1 or DCX', 'TSC1/2', 'SHANK3'],
          correctAnswer: 1,
          explanation: 'LIS1 (PAFAH1B1) or DCX mutations cause Type I lissencephaly by disrupting neuronal migration, resulting in a smooth brain with agyria/pachygyria.'
        },
        {
          id: 'q2-adv',
          question: 'What is the protomap hypothesis of cortical development?',
          options: ['Cortical areas are determined entirely by sensory input', 'Intrinsic molecular gradients pre-specify cortical areas', 'Cortex is blank slate at birth', 'All cortical areas develop identically'],
          correctAnswer: 1,
          explanation: 'The protomap hypothesis proposes that intrinsic molecular gradients (FGF8 rostrally, Wnt/BMP caudally) pre-specify cortical areas before thalamic input arrives.'
        },
        {
          id: 'q3-adv',
          question: 'What is the function of the neuroligin-neurexin complex?',
          options: ['Axon guidance', 'Synaptic adhesion and specification', 'Myelination', 'Cell migration'],
          correctAnswer: 1,
          explanation: 'Neuroligin (postsynaptic) binds neurexin (presynaptic) to form a trans-synaptic adhesion complex that specifies and matures synapses. Mutations are linked to autism and epilepsy.'
        },
        {
          id: 'q4-adv',
          question: 'What markers identify oligodendrocyte precursor cells (OPCs)?',
          options: ['MBP and PLP', 'O4 and O1', 'NG2 and PDGFRα', 'GFAP'],
          correctAnswer: 2,
          explanation: 'NG2 (CSPG4) and PDGFRα are markers of OPCs. O4/O1 mark pre-myelinating oligodendrocytes, and MBP/PLP mark mature, myelinating oligodendrocytes.'
        },
        {
          id: 'q5-adv',
          question: 'Which signaling pathway has a high concentration ventrally to pattern the neural tube?',
          options: ['BMP', 'Wnt', 'SHH', 'FGF'],
          correctAnswer: 2,
          explanation: 'SHH (Sonic hedgehog) is secreted by the notochord and floor plate, creating a ventral-to-dorsal gradient that patterns ventral neural tube fates including motor neurons.'
        }
      ]
    },
    expert: {
      title: 'Expert-Level Neural Embryology',
      description: 'Molecular mechanisms and cutting-edge research',
      content: `
# Expert-Level Neural Embryology

## Single-Cell Transcriptomics

### Cellular Atlas of Brain Development

### Cortical Cell Types
\`\`\`
Radial glia (Pax6, Sox2)
    ├── Intermediate progenitors (Tbr2)
    │   └── Excitatory neurons (Satb2, Ctip2, Tbr1)
    └── Outer radial glia (primates)
        └── Increased neuronal output
\`\`\`

### Gliogenesis Timeline
- **GFAP+ astrocyte progenitors**: Appears mid-neurogenesis
- **OPCs**: Mid-gestation
- **Mature astrocytes**: Late gestation
- **Mature oligodendrocytes**: Postnatal

### Interneuron Diversity

### Medial Ganglionic Eminence
- **LGE**: Striatal projection neurons, some interneurons
- **MGE**: PV+, SST+ interneurons
- **CGE**: VIP+, RELN+, reelin+, calretinin+
- **POA**: SST+, VIP+ hypothalamic neurons

### Migration Routes
- **Tangential**: Interneurons along MGE/LGE-derived pathways
- **Radial**: Projection neurons along radial glia
- **Timing**: Interneurons born before projection neurons in cortex

## Epigenetic Regulation

### Chromatin Remodeling

### Bivalent Domains
\`\`\`
Developmental genes
    ↓
H3K4me3 + H3K27me3 (bivalent)
    ↓
Poised for activation or repression
    ↓
Resolution upon differentiation
\`\`\`

### Key Regulators
- **BAF complex**: ATP-dependent chromatin remodeling
- **CHD8**: Autism risk gene, chromatin remodeler
- **MECP2**: Rett syndrome, methyl-CpG binding
- **HDAC**: Histone deacetylation, repression

### DNA Methylation Dynamics
- **Methylome remodeling**: Widespread during fetal brain development
- **Non-CpG methylation**: Neuronal-specific (esp. prefrontal)
- **Activity-dependent**: Altered by experience
- **TET enzymes**: Active demethylation

### Non-Coding RNAs

### microRNAs in Neurodevelopment
| miRNA | Function | Target |
|-------|----------|--------|
| miR-9 | Neurogenesis, migration | REST, Foxg1 |
| miR-124 | Neuronal differentiation | PTBP1, Sox9 |
| miR-137 | Proliferation vs. differentiation | Ezh2, LSD1 |
| miR-132 | Dendritic development | p250GAP |

### Long Non-Coding RNAs
- **Evf2**: Dlx5/6 enhancer RNA, interneuron development
- **Pnky**: Neural stem cell self-renewal
- **LncRNA-ES1**: ESC pluripotency, neural differentiation
- **RMST**: Sox2 partner in neural differentiation

## Connectome Development

### Structural Connectivity

### Diffusion Tensor Imaging (DTI)
- **Fractional anisotropy (FA)**: Fiber organization
- **Mean diffusivity (MD)**: Barriers to diffusion
- **Tractography**: Map white matter pathways
- **Development**: Increases in FA with age

### Tract Development
| Tract | Myelination Onset | Completion |
|-------|-------------------|------------|
| Corpus callosum | ~3 months | 25+ years |
| Corticospinal | ~birth | 2-3 years |
| Optic radiation | ~birth | 2-3 years |
| Association fibers | 6-12 months | Adolescence |

### Functional Connectivity

### Resting-State Networks
- **Default mode**: Medial PFC, PCC, angular gyrus
- **Salience**: Anterior insula, dACC
- **Central executive**: DLPFC, parietal
- **Development**: From local to distributed connectivity

### Network Integration
\`\`\`
Neonatal: Local connectivity dominant
    ↓
Infancy: Short-range connections increase
    ↓
Childhood: Long-range connections develop
    ↓
Adolescence: Network refinement, efficiency
    ↓
Adulthood: Stable network architecture
\`\`\`

## Neurodevelopmental Disorders

### Autism Spectrum Disorders

### Synaptic Gene Mutations
| Gene | Function | Phenotype |
|------|----------|----------|
| SHANK3 | Postsynaptic scaffold | Phelan-McDermid |
| NLGN3/4 | Trans-synaptic adhesion | Autism, ID |
| NRXN1 | Presynaptic adhesion | Autism, ID |
| SYNGAP1 | Synaptic regulation | ID, epilepsy |
| CHD8 | Chromatin remodeling | Macrocephaly, autism |

### Convergent Pathways
- **Synaptic function**: Majority of high-confidence genes
- **Transcriptional regulation**: CHD8, ADNP, MECP2
- **Excitation/inhibition**: Imbalance hypothesis

### Schizophrenia

### Genetic Architecture
- **Polygenic**: Thousands of common variants
- **Heritability**: ~80%
- **GWAS loci**: Over 200 identified
- **Convergent pathways**: Synaptic function, immunity, calcium signaling

### Neurodevelopmental Hypothesis
- **Prenatal**: Malnutrition, infection, stress
- **Perinatal**: Obstetric complications
- **Childhood**: Developmental delay, social deficits
- **Adolescence**: Psychosis onset, synaptic pruning

### Genetic Risk Factors
| Gene | Function | Effect |
|------|----------|--------|
| DISC1 | Synaptic function, cilia | Rare variants |
| NRG1 | ErbB4 signaling | GWAS hit |
| DTNBP1 | Synaptic function | GWAS hit |
| C4 | Synaptic pruning | GWAS hit |

### Intellectual Disability

### Monogenic Forms
- **Fragile X**: FMR1 CGG expansion >200
- **Rett**: MECP2 de novo (X-linked dominant)
- **Angelman**: UBE3A deletion/mutation (maternal)
- **Prader-Willi**: 15q11-13 deletion (paternal)
- **Syngap1**: Synaptic GAP protein

### Epigenetic Mechanisms
- **Imprinting**: Angelman (maternal), Prader-Willi (paternal)
- **Repeat expansion**: Fragile X, myotonic dystrophy
- **Somatic mosaicism**: Some MECP2 mutations (Rett)

## Clinical Applications

### Prenatal Diagnosis

### Ultrasound Markers
- **Nuchal translucency**: Aneuploidy, heart defects
- **Choroid plexus cysts**: Trisomy 18
- **Ventriculomegaly**: Obstruction, brain malformation
- **Cranial defects**: Anencephaly, encephalocele
- **Corpus callosum**: Agenesis, dysgenesis

### Fetal MRI
- **Weeks 18-22**: Optimal for structural assessment
- **Indications**: Abnormal ultrasound, family history
- **Findings**: Migration disorders, callosal agenesis, posterior fossa anomalies

### Genetic Testing Strategy
- **Karyotype**: Aneuploidy screening
- **CMA**: Microdeletions/microduplications
- **Exome**: Single gene disorders
- **Panel testing**: Targeted for specific phenotype

## Therapeutic Approaches

### Gene Therapy

### AAV Vectors for CNS
- **Serotypes**: AAV9, AAVrh.10 (cross BBB)
- **Promoters**: Cell-type specific (SYN1, GFAP, MBP)
- **Clinical**: SMA (onasemnogene abeparvovec)
- **Challenges**: Manufacturing, dosing, immunity

### Antisense Oligonucleotides
- **SMA**: Nusinersen (SMN2 splicing)
- **Duchenne**: Eteplirsen (exon skipping)
- **Huntington**: ASOs in trials
- **Delivery**: Intrathecal injection

### Stem Cell Therapy

### Cell Replacement
- **PD**: Dopaminergic neuron replacement (fetal grafts, iPSC)
- **SCI**: Oligodendrocyte precursors, neural progenitors
- **Stroke**: Neural progenitor cell transplants
- **Challenges**: Integration, functional connectivity

### Trophic Support
- **MSCs**: Paracrine effects, immunomodulation
- **Clinical**: Limited benefit so far, many trials

## Future Directions

### Brain Organoids

### Cerebral Organoids
- **hPSC derivation**: 3D culture, spinning bioreactors
- **Organization**: Radial organization, cortical layers
- **Limitations**: No vasculature, limited maturation, variability
- **Applications**: Disease modeling (microcephaly), drug testing

### Region-Specific Organoids
- **Hypothalamus**: Feeding, sleep disorders
- **Midbrain**: Parkinson's modeling
- **Optic cup**: Retinal development

### In Utero Therapy

### Fetal Surgery
- **Myelomeningocele**: Repair before birth (MOMS trial)
- **Benefits**: Reduced motor deficit, shunting
- **Timing**: 19-26 weeks gestation

### Stem Cell Transplantation
- **Rationale**: Fetal immunologic tolerance
- **Targets**: Metabolic disorders, neurodegeneration
- **Status**: Preclinical, clinical trials planned

## Ethical Considerations

### Prenatal Testing
- **Incidental findings**: Managing unexpected results
- **Termination**: Ethical frameworks for decision-making
- **Equity**: Access to testing and interventions
- **Future**: Gene editing in embryos

### Brain Organoid Consciousness
- **Sentience**: When might organoids become conscious?
- **Moral status**: How should we treat brain organoids?
- **Research limits**: What experiments are permissible?
- **Governance**: Developing ethical frameworks

## Conclusion

Expert-level understanding of neural embryology requires integration of:
- **Molecular genetics**: From single gene to polygenic
- **Cell biology**: Progenitors, migration, synapses
- **Systems neuroscience**: Connectivity, networks
- **Clinical neurology**: From development to disease
- **Psychiatry**: Neurodevelopmental disorders
- **Research**: Stem cells, organoids, gene therapy
- **Ethics**: Prenatal testing, brain organoids

The developing brain is the most complex structure in the known universe. Understanding its development is essential for treating neurological, psychiatric, and developmental disorders.
      `,
      flashcards: [
        {
          id: 'n1-exp',
          front: 'What is the difference between MGE and CGE-derived interneurons?',
          back: 'MGE (medial ganglionic eminence): PV+, SST+ interneurons. CGE (caudal ganglionic eminence): VIP+, RELN+, Calretinin+ interneurons. They migrate tangentially at different times to populate cortex.'
        },
        {
          id: 'n2-exp',
          front: 'What are bivalent chromatin domains in neurodevelopment?',
          back: 'Regions marked by both H3K4me3 (activating) and H3K27me3 (repressive) that keep developmental genes poised for activation or repression upon differentiation signals.'
        },
        {
          id: 'n3-exp',
          front: 'What synaptic genes are commonly mutated in autism?',
          back: 'SHANK3 (postsynaptic scaffold), NLGN3/4 (trans-synaptic adhesion), NRXN1 (presynaptic adhesion), SYNGAP1 (synaptic regulation). Converge on synaptic function pathway.'
        },
        {
          id: 'n4-exp',
          front: 'What is the genetic basis of Fragile X syndrome?',
          back: 'FMR1 CGG repeat expansion (>200 repeats = full mutation) causing methylation and silencing of FMRP (Fragile X Mental Retardation Protein), an RNA-binding protein regulating synaptic protein synthesis.'
        },
        {
          id: 'n5-exp',
          front: 'What is the difference between Angelman and Prader-Willi syndromes?',
          back: 'Both involve 15q11-13. Angelman: Maternal deletion/mutation of UBE3A. Prader-Willi: Paternal deletion. Demonstrate genomic imprinting - parent-of-origin effects.'
        }
      ],
      quiz: [
        {
          id: 'q1-exp',
          question: 'Which ganglionic eminence gives rise to parvalbumin-positive (PV+) interneurons?',
          options: ['LGE (lateral)', 'MGE (medial)', 'CGE (caudal)', 'POA (preoptic area)'],
          correctAnswer: 1,
          explanation: 'The medial ganglionic eminence (MGE) gives rise to PV+ and SST+ interneurons. The CGE gives rise to VIP+, RELN+, and calretinin+ interneurons.'
        },
        {
          id: 'q2-exp',
          question: 'What is the molecular basis of genomic imprinting in Angelman vs. Prader-Willi syndromes?',
          options: ['Both involve maternal deletions', 'Angelman: maternal UBE3A; Prader-Willi: paternal 15q11-13 deletion', 'Both involve paternal deletions', 'Both involve mutations in the same gene'],
          correctAnswer: 1,
          explanation: 'Angelman syndrome results from maternal UBE3A mutation/deletion, while Prader-Willi results from paternal 15q11-13 deletion. Both demonstrate parent-of-origin imprinting effects.'
        },
        {
          id: 'q3-exp',
          question: 'What is the primary mechanism of the first FDA-approved gene therapy for SMA (spinal muscular atrophy)?',
          options: ['CRISPR gene editing', 'AAV9-mediated SMN1 gene replacement', 'Antisense oligonucleotide', 'Stem cell transplant'],
          correctAnswer: 1,
          explanation: 'Onasemnogene abeparvovec (Zolgensma) uses AAV9 to deliver a functional SMN1 gene. AAV9 crosses the blood-brain barrier to reach motor neurons.'
        },
        {
          id: 'q4-exp',
          question: 'What are the two most common high-confidence autism risk genes?',
          options: ['MECP2 and FMR1', 'SHANK3 and NLGN3/4', 'DISC1 and NRG1', 'LIS1 and DCX'],
          correctAnswer: 1,
          explanation: 'SHANK3 and neuroligin 3/4 are among the most common high-confidence autism risk genes, both involved in synaptic adhesion and function.'
        },
        {
          id: 'q5-exp',
          question: 'What is the significance of bivalent chromatin domains in neural development?',
          options: ['They permanently silence genes', 'They keep developmental genes poised for activation or repression upon differentiation', 'They are only found in neurons', 'They contain only repressive marks'],
          correctAnswer: 1,
          explanation: 'Bivalent domains contain both H3K4me3 (activating) and H3K27me3 (repressive) marks, keeping developmental genes poised for either activation or repression upon differentiation signals.'
        }
      ]
    },
    master: {
      title: 'Mastering Neural Embryology',
      description: 'Complete understanding from basics to research frontiers',
      content: `
# Mastering Neural Embryology

## Clinical Framework

## Neurological Examination

### Prenatal Ultrasound

### First Trimester (11-14 weeks)
- **Nuchal translucency**: Marker for aneuploidy, heart defects
- **Cranial findings**: Cystic hygroma, anencephaly (detectable late 1st)
- **Brain**: Not well visualized yet

### Second Trimester (18-22 weeks)
- **Head circumference**: Microcephaly, macrocephaly
- **Ventricles**: Ventriculomegaly (>10 mm atrium)
- **Posterior fossa**: Dandy-Walker malformation
- **Corpus callosum**: Agenesis, dysgenesis
- **Cortex**: Lissencephaly (smooth brain), polymicrogyria

### Third Trimester
- **Growth trajectories**: Microcephaly progression
- **Migration abnormalities**: Cobblestone cortex, heterotopia
- **Cerebellar vermis**: Hypoplasia, Dandy-Walker
- **Hemorrhage**: Germinal matrix, IVH

## Postnatal Assessment

### Neurologic Examination
- **Head circumference**: Macrocephaly (hydrocephalus, megalencephaly), microcephaly (gene-environment)
- **Tone**: Hypertonia (spasticity), hypotonia (flaccidity)
- **Reflexes**: Hyperreflexia (UMN), hyporeflexia (LMN)
- **Development**: Milestones, regression

### Neuroimaging

### MRI Indications
- **Seizures**: Cortical malformations
- **Developmental delay**: Migration disorders, white matter
- **Macrocephaly**: Hydrocephalus, megalencephaly, tumors
- **Microcephaly**: Simplified gyri, white matter loss

### Specific Findings
| Finding | Significance |
|---------|--------------|
| Lissencephaly | LIS1, DCX (neuronal migration) |
| Polymicrogyria | Genetic, ischemic, infectious (CMV) |
| Heterotopia | FLNA (periventricular nodular heterotopia) |
| Callosal agenesis | ACC alone vs. syndromic |
| Cerebellar hypoplasia | Dandy-Walker, Joubert, pontocerebellar hypoplasia |

## Multidisciplinary Management

### Neurodevelopmental Disorders

### Autism Spectrum Disorder
- **Diagnosis**: DSM-5 criteria, ADOS, ADI-R
- **Medical evaluation**: Genetic testing (CMA, MECP2, FMR1)
- **Management**: Behavioral therapy, educational support, speech, OT
- **Pharmacotherapy**: Irritability (risperidone, aripiprazole), ADHD (stimulants)

### Intellectual Disability
- **Evaluation**: Etiology investigation (genetics, metabolic)
- **Management**: Supportive, educational, adaptive skills
- **Associated**: Seizures (25%), behavioral problems, autism
- **Genetic counseling**: Recurrence risk, family planning

### Cerebral Palsy
- **Types**: Spastic (70%), dyskinetic (10%), ataxic (5%), mixed (15%)
- **Etiology**: Preterm (PVL, IVH), term (HIE, stroke, malformation)
- **Management**: PT, OT, speech, orthopedics, spasticity medications, baclofen pump
- **Associated**: Intellectual disability (50%), epilepsy (33%), visual/hearing impairment

## Surgical Considerations

### Neurosurgical Interventions

### Shunt Placement
- **Indication**: Hydrocephalus (communicating, obstructive)
- **Types**: Ventriculoperitoneal, ventriculoatrial
- **Complications**: Infection, shunt malfunction, overdrainage
- **Endoscopic third ventriculostomy**: Alternative for some

### Epilepsy Surgery
- **Hemispherectomy**: Hemimegalencephaly, Sturge-Weber, Rasmussen's
- **Focal resection**: Cortical dysplasia, tumor, vascular lesion
- **Corpus callosotomy**: Drop attacks (atonic seizures)
- **VNS/DBS**: Palliative for refractory epilepsy

### Fetal Myelomeningocele Repair
- **MOMS trial**: Improved outcomes vs. postnatal
- **Timing**: 19-26 weeks gestation
- **Benefits**: Reduced motor deficit, shunting, hindbrain herniation
- **Maternal risk**: Preterm labor, uterine scar, obstetric complications

## Long-Term Outcomes

### Prognostic Factors

### Favorable Indicators
- **Normal early imaging**: Except hydrocephalus that resolves
- **Mild ventriculomegaly** (10-12 mm): Often normal outcome
- **Unilateral findings**: Better than bilateral
- **Family support**: Major impact on development

### Poor Prognostic Indicators
- **Severe microcephaly** (<3rd percentile): Intellectual disability
- **Simplified gyri**: Lissencephaly, severe pachygyria
- **Brainstem abnormalities**: Breathing, swallowing problems
- **Severe ventriculomegaly** (>15 mm): Often with parenchymal injury

## Transition to Adult Care

### Neurodevelopmental Disorders

### Transition Planning
- **Adolescence**: Begin discussion
- **Adult providers**: Neurology, psychiatry, primary care comfortable with adults with neurodevelopmental conditions
- **Guardianship**: Decision-making capacity assessment
- **Residential**: Group homes, supported living, independent

### Adult Outcomes
- **ASD**: Variable, ~30% minimally verbal, many employed with support
- **ID**: Many live semi-independently with support
- **CP**: Life expectancy near normal, mobility limitations
- **Epilepsy**: 60-70% seizure-free, 30% refractory

## Research Frontiers

### Stem Cell Therapy

### Clinical Trials
- **CP**: Autologous cord blood (early studies)
- **Stroke**: Stem cell infusion (mixed results)
- **ALS**: MSCs (safety established)
- **Spinal cord injury**: Ongoing trials

### Challenges
- **Timing**: Optimal window unclear
- **Cell type**: Which stem cells for what condition?
- **Dosing**: Cell number, route, frequency
- **Outcome measures**: Standardization needed

### Gene Therapy

### Approved Therapies
- **SMA**: Onasemnogene abeparvovec (Zolgensma)
- **Spinal muscular atrophy**: Nusinersen (Spinraza), Risdiplam (Evrysdi)
- **Duchenne**: Eteplirsen (Exondys 51) - exon 51 skipping
- **Retinal**: Luxturna (RPE65 mutation) - vision restoration

### Pipeline
- **Huntington**: ASOs, AAV-miRNA
- **Canavan**: AAV gene therapy
- **Metachromatic leukodystrophy**: Lentiviral gene therapy
- **X-linked adrenoleukodystrophy**: Lentiviral (Skysona)

### Neuroprotection

### Hypothermia for HIE
- **Indication**: Moderate-severe HIE <6 hours old
- **Protocol**: 33.5°C for 72 hours
- **Outcome**: 15-20% absolute risk reduction in death/disability
- **Long-term**: Improved neurodevelopmental outcomes

### Future Directions
- **Erythropoietin**: Neurotrophic factor (trials)
- **Stem cells**: Paracrine effects
- **Melatonin**: Antioxidant (preclinical)
- **Magnesium**: Neuroprotection (stroke, preterm)

## Ethical Considerations

### Prenatal Decision-Making

### Severe Neural Tube Defects
- **Myelomeningocele**: Continuation vs. termination
- **Anencephaly**: Universal lethality, comfort care
- **Encephalocele**: Variable, depends on brain tissue

### Ethical Framework
- **Parental autonomy**: Right to decide
- **Fetal interests**: Difficult to assess prenatally
- **Resources**: Access to care, disability community perspective
- **Non-directive counseling**: Present options without bias

### Gene Editing
- **Somatic**: Individual treatment (consent)
- **Germline**: Heritable changes (prohibited)
- **Enhancement**: Treatment vs. enhancement
- **Access**: Who gets expensive therapies?

## Conclusion

Mastering neural embryology requires:
- **Foundational knowledge**: Normal brain development
- **Clinical correlation**: From prenatal to adult
- **Molecular understanding**: Genes, signals, pathways
- **Systems thinking**: Connectivity, networks
- **Therapeutic awareness**: Medical, surgical, rehabilitative
- **Research literacy**: Gene therapy, stem cells, organoids
- **Ethical sensitivity**: Complex decisions at beginning and end of life

The developing brain is the most complex structure known. Understanding its development is essential for advancing treatment of neurological and psychiatric disorders while respecting the profound ethical questions raised by our growing capabilities.
      `,
      flashcards: [
        {
          id: 'n1-mas',
          front: 'What is the MOMS trial?',
          back: 'Management of Myelomeningocele Study - showed fetal surgical repair (19-26 weeks) reduces need for shunting and improves motor outcomes compared to postnatal repair.'
        },
        {
          id: 'n2-mas',
          front: 'What are the ventriculomegaly cutoffs and significance?',
          back: 'Mild 10-12 mm (often normal), Moderate 12-15 mm (variable), Severe >15 mm (high risk of parenchymal injury, poor outcome).'
        },
        {
          id: 'n3-mas',
          front: 'What genetic testing is recommended for autism evaluation?',
          back: 'Chromosomal microarray (CMA) first tier. If negative and clinical features suggest, consider fragile X (FMR1), Rett (MECP2 in females), and possibly epilepsy gene panel or exome.'
        },
        {
          id: 'n4-mas',
          front: 'What is the first-line treatment for hypoxic-ischemic encephalopathy in neonates?',
          back: 'Therapeutic hypothermia (33.5°C for 72 hours) initiated within 6 hours of birth. Reduces death/disability by 15-20% absolute risk reduction.'
        },
        {
          id: 'n5-mas',
          front: 'What is the difference between callosal agenesis and dysgenesis?',
          back: 'Agenesis: Complete absence. Dysgenesis: Partial or abnormal development (hypoplastic, partially present). Both have variable outcomes depending on associated anomalies.'
        }
      ],
      quiz: [
        {
          id: 'q1-mas',
          question: 'What did the MOMS trial demonstrate?',
          options: ['Postnatal repair is superior to fetal', 'Fetal repair reduces shunting and improves motor outcomes', 'No difference in outcomes', 'Fetal repair increases maternal complications without benefit'],
          correctAnswer: 1,
          explanation: 'The MOMS trial demonstrated that fetal surgical repair of myelomeningocele (19-26 weeks) reduces the need for shunting and improves motor outcomes compared to postnatal repair.'
        },
        {
          id: 'q2-mas',
          question: 'What is the treatment window for therapeutic hypothermia in neonatal HIE?',
          options: ['Within 12 hours of birth', 'Within 6 hours of birth', 'Within 24 hours of birth', 'Within 48 hours of birth'],
          correctAnswer: 1,
          explanation: 'Therapeutic hypothermia must be initiated within 6 hours of birth to be effective, with cooling to 33.5°C for 72 hours.'
        },
        {
          id: 'q3-mas',
          question: 'What is the first-tier genetic test recommended for autism evaluation?',
          options: ['Karyotype only', 'FMR1 testing', 'Chromosomal microarray (CMA)', 'Whole exome sequencing'],
          correctAnswer: 2,
          explanation: 'Chromosomal microarray (CMA) is the first-tier genetic test for autism evaluation. FMR1 testing is recommended if clinical features suggest fragile X.'
        },
        {
          id: 'q4-mas',
          question: 'Which ventriculomegaly measurement is most strongly associated with poor neurodevelopmental outcome?',
          options: ['8-10 mm atrial width', '10-12 mm atrial width', '12-15 mm atrial width', '>15 mm atrial width'],
          correctAnswer: 3,
          explanation: 'Severe ventriculomegaly (>15 mm) is highly associated with poor neurodevelopmental outcome due to associated parenchymal brain injury.'
        },
        {
          id: 'q5-mas',
          question: 'What is the difference between agenesis and dysgenesis of the corpus callosum?',
          options: ['Agenesis is partial, dysgenesis is complete', 'Agenesis is complete absence, dysgenesis is partial/abnormal development', 'Both are the same', 'Dysgenesis is more severe'],
          correctAnswer: 1,
          explanation: 'Agenesis refers to complete absence of the corpus callosum, while dysgenesis refers to partial or abnormal development. Both can have variable outcomes depending on associated anomalies.'
        }
      ]
    }
  }
};
