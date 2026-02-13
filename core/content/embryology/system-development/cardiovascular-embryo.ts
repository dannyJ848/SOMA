import { LegacyEducationalContent } from '../../types';

export const cardiovascularEmbryoContent: LegacyEducationalContent = {
  id: 'cardiovascular-embryo',
  title: 'Cardiovascular System Development',
  category: 'Embryology',
  subcategory: 'System Development',
  description: 'The formation of the heart, blood vessels, and blood cells during embryonic development',
  levels: {
    1: {
      title: 'Introduction to Cardiovascular Development',
      description: 'Learn how the heart and blood vessels form in the embryo',
      content: `
# Introduction to Cardiovascular Development

## Why the Heart Develops First

The cardiovascular system is the **first functional organ system** to develop in the embryo. This is essential because the growing embryo needs oxygen and nutrients long before other organs are formed. The heart begins beating around **day 22-23** (week 4) of development!

## Timeline of Heart Development

| Day/Week | Milestone |
|----------|-----------|
| Day 15-16 | Heart-forming cells appear |
| Day 18-19 | Cardiogenic crescent forms |
| Day 19-21 | Heart tube forms and begins to fuse |
| Day 22-23 | Heart begins to beat! |
| Week 4 | Heart tube loops |
| Week 5-8 | Heart chambers divide and septa form |
| Week 8 | Heart basically complete |

## Early Formation

### Heart Fields
The heart forms from two areas of special cells called **heart fields**:

1. **First heart field**: Forms the left ventricle and parts of atria
2. **Second heart field**: Forms the right ventricle and outflow tract

### The Heart Tube
The early heart is a simple **tube** that:
- Forms in the center of the embryo
- Begins to pump blood even though it has no chambers
- Will undergo dramatic reshaping

## Heart Looping (Week 4)

Around day 23-28, the simple heart tube bends and twists in a process called **looping**:

\`\`\`
Straight tube
      ↓
Bends to the RIGHT (D-loop)
      ↓
Creates an S-shape
      ↓
Positions for chamber development
\`\`\`

This is CRITICAL because it:
- Puts the future ventricles in the correct position
- Brings the atria above the ventricles
- Sets up the proper connections

## Chamber Formation

### Atria (Upper Chambers)
- Form from the primitive atrium
- Start as one chamber, will divide into two
- Receive blood from the body and lungs

### Ventricles (Lower Chambers)
- Form from the primitive ventricle
- Start as one chamber, will divide into two
- Pump blood out to lungs and body

### Important Note!
For a while, the atria communicate with each other through a hole called the **foramen ovale**. This is NORMAL in the fetus and closes after birth!

## Major Blood Vessels

### Arteries (carry blood away from heart)
- **Aortic arches**: Early arteries that will form major vessels
- **Dorsal aorta**: Main artery running down the back
- **Vitelline arteries**: To the yolk sac (early nutrition)
- **Umbilical arteries**: Carry waste to placenta

### Veins (carry blood toward heart)
- **Cardinal veins**: Drain the body
- **Vitelline veins**: From yolk sac
- **Umbilical vein**: Brings oxygen from placenta

## Fetal Circulation

Fetal circulation is DIFFERENT from adult circulation!

### Three Special Fetal Structures
| Structure | Function | After Birth |
|-----------|----------|-------------|
| Foramen ovale | Hole between atria | Closes |
| Ductus arteriosus | Bypasses lungs | Closes |
| Ductus venosus | Bypasses liver | Closes |

These structures work together to send most blood AWAY from the lungs (which aren't used before birth).

## Common Congenital Heart Defects

### Ventricular Septal Defect (VSD)
- Hole between the two ventricles
- Most common congenital heart defect
- May close on its own or need surgery

### Atrial Septal Defect (ASD)
- Hole between the two atria
- May be the foramen ovale not closing properly
- Can cause problems if large

### Patent Ductus Arteriosus (PDA)
- Ductus arteriosus doesn't close after birth
- Common in premature babies
- Can be treated with medication or surgery

### Tetralogy of Fallot
- Combination of four heart defects
- Causes "blue baby" syndrome
- Requires surgical repair

## Key Terms to Remember

- **Cardiogenic crescent**: Early heart-forming region
- **Heart tube**: Simple tube that becomes the heart
- **Looping**: Bending of the heart tube
- **Septation**: Division of chambers
- **Foramen ovale**: Normal fetal hole between atria
- **Ductus arteriosus**: Fetal vessel bypassing lungs
- **Congenital**: Present from birth

## Summary

The cardiovascular system develops early and rapidly:
1. Heart-forming cells appear around day 15
2. Heart tube forms and fuses by day 21
3. Heart begins beating around day 22-23
4. Heart loops to position chambers
5. Chambers divide and septa form
6. By week 8, the basic heart structure is complete

The fetal circulation has special features that change dramatically at birth when the baby begins breathing air!
      `,
      flashcards: [
        {
          id: 'cv1',
          front: 'When does the heart begin to beat?',
          back: 'The heart begins beating around day 22-23 of development (week 4).'
        },
        {
          id: 'cv2',
          front: 'Why is the cardiovascular system the first to develop?',
          back: 'The growing embryo needs oxygen and nutrients before other organs are formed, so a functional circulatory system is essential from early development.'
        },
        {
          id: 'cv3',
          front: 'What is heart looping?',
          back: 'The process where the straight heart tube bends and twists (usually to the right) to position the future chambers correctly.'
        },
        {
          id: 'cv4',
          front: 'What are the three special structures in fetal circulation?',
          back: 'Foramen ovale (between atria), ductus arteriosus (bypasses lungs), and ductus venosus (bypasses liver).'
        },
        {
          id: 'cv5',
          front: 'What is the most common congenital heart defect?',
          back: 'Ventricular septal defect (VSD) - a hole between the two ventricles.'
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: 'At approximately what day does the embryonic heart begin to beat?',
          options: ['Day 10-12', 'Day 15-16', 'Day 22-23', 'Day 30-31'],
          correctAnswer: 2,
          explanation: 'The heart begins beating around day 22-23 (week 4), making it the first functional organ system.'
        },
        {
          id: 'q2',
          question: 'What is the purpose of the foramen ovale in the fetus?',
          options: ['To prevent blood clots', 'To allow blood to bypass the lungs', 'To strengthen the heart wall', 'To regulate heart rate'],
          correctAnswer: 1,
          explanation: 'The foramen ovale allows blood to shunt from the right to left atrium, bypassing the non-functional fetal lungs.'
        },
        {
          id: 'q3',
          question: 'What is the ductus arteriosus?',
          options: ['A chamber in the heart', 'A vessel connecting pulmonary artery to aorta', 'A valve in the heart', 'A vein in the liver'],
          correctAnswer: 1,
          explanation: 'The ductus arteriosus connects the pulmonary artery to the aorta, allowing blood to bypass the fetal lungs.'
        },
        {
          id: 'q4',
          question: 'What happens during cardiac looping?',
          options: ['The heart stops beating', 'The heart tube bends to form an S-shape', 'The heart chambers divide', 'Blood vessels form'],
          correctAnswer: 1,
          explanation: 'During looping (around week 4), the straight heart tube bends to the right, forming an S-shape that positions the future chambers correctly.'
        },
        {
          id: 'q5',
          question: 'Which congenital heart defect is characterized by a hole between the ventricles?',
          options: ['ASD', 'VSD', 'PDA', 'Coarctation'],
          correctAnswer: 1,
          explanation: 'VSD (ventricular septal defect) is a hole between the two ventricles and is the most common congenital heart defect.'
        }
      ]
    },
    intermediate: {
      title: 'Cardiovascular Morphogenesis',
      description: 'Detailed understanding of heart and vessel formation',
      content: `
# Cardiovascular Morphogenesis

## Early Heart Development

### Cardiogenic Mesoderm Specification

#### Induction Signals
\`\`\`
Anterior endoderm → BMP2, FGF8
    ↓
Lateral plate mesoderm → NKX2-5 expression
    ↓
Cardiogenic crescent formation
    ↓
Heart tube formation
\`\`\`

#### Molecular Determinants
- **NKX2-5**: Master cardiac transcription factor
- **GATA4**: Cardiac development and septation
- **TBX5**: Chamber specification
- **HAND1/2**: Ventricular development
- **MEF2C**: Muscle differentiation

### Formation of the Heart Tube

#### Primary and Secondary Heart Fields
| Feature | First Heart Field | Second Heart Field |
|---------|-------------------|-------------------|
| Location | Cardiac crescent | Pharyngeal/splanchnic mesoderm |
| Derivatives | Left ventricle, atria | Right ventricle, outflow tract |
| Timing | Earlier | Later, adds to arterial pole |
| Markers | NKX2-5, TBX5 | FGF10, ISL1 |

#### Fusion Process
1. **Lateral plate mesoderm** forms two angiogenic cell clusters
2. **Endothelial tubes** form on each side
3. **Lateral and cranial folding** brings tubes to ventral midline
4. **Fusion** occurs at day 21, forming single heart tube

## Cardiac Looping

### Mechanisms of Looping

#### Direction and Timing
- **Onset**: Day 23 (Carnegie stage 10)
- **Direction**: Dextral (rightward) looping in normal development
- **Completion**: Day 28 (Carnegie stage 12)
- **Result**: S-shaped tube with primitive chambers positioned

#### Molecular Regulation
\`\`\`
Left-right determination (NODAL, LEFTY, PITX2)
    ↓
Asymmetric gene expression
    ↓
Cytoskeletal changes
    ↓
Differential cell proliferation
    ↓
Tube bending and rotation
\`\`\`

#### Looping Abnormalities
- **D-loop**: Normal rightward bending
- **L-loop**: Leftward bending → congenital heart defects
- **Situs inversus**: Complete mirror image
- **Dextrocardia**: Heart on right side
- **Heterotaxy**: Abnormal arrangement of organs

## Chamber Formation and Septation

### Atrial Development

### Septum Primum (First Septum)
- **Growth**: Grows downward from atrial roof
- **Ostium primum**: Opening below septum primum
- **Ostium secundum**: Holes form in septum primum
- **Septum secundum**: Grows to right of septum primum
- **Foramen ovale**: Overlapping septa create flap valve

### Atrial Septal Defects
| Type | Defect | Clinical Significance |
|------|--------|---------------------|
| Ostium secundum ASD | Hole in fossa ovalis | Most common ASD |
| Ostium primum ASD | Low atrial septal defect | Associated with AVSD |
| Sinus venosus ASD | High atrial septal defect | Associated with PAPVC |
| Coronary sinus ASD | Unroofed coronary sinus | Rare |

### Ventricular Development

### Interventricular Septum Formation
1. **Muscular portion**: Grows upward from apex
2. **Membranous portion**: Completes closure from endocardial cushions
3. **VSD**: Most common at membranous portion

### Ventricular Septal Defects
| Location | Description |
|----------|-------------|
| Membranous | Most common (80%), below aortic valve |
| Muscular | In muscular septum, may be multiple |
| Outlet (supracristal) | Below pulmonary valve |
| Inlet (AVSD type) | Associated with endocardial cushion defects |

## Endocardial Cushions and AV Canal

### Cushion Formation
\`\`\`
Endocardial cells → EMT → Mesenchymal migration
    ↓
Superior and inferior cushions form
    ↓
Cushion fusion → Division of AV canal
    ↓
AV valves form from cushions
\`\`\`

### Derivatives of Endocardial Cushions
- **Atrial septum**: Septum primum contribution
- **Ventricular septum**: Membranous portion
- **Mitral valve**: Anterior leaflet
- **Tricuspid valve**: Septal leaflet
- **AV node**: Contribution

### Atrioventricular Septal Defect (AVSD)
- **Complete**: Common AV valve, large ASD + VSD
- **Partial**: Separate AV valves, primum ASD
- **Intermediate**: Variable
- **Association**: 40% of Down syndrome patients

## Outflow Tract Development

### Truncus Arteriosus and Conus

#### Septation Process
1. **Neural crest cells** migrate into outflow tract
2. **Truncoconal ridges** appear (spiral orientation)
3. **Aorticopulmonary septum** forms (spiral septum)
4. **Aorta** and **pulmonary artery** separate

#### Rotation of Outflow Tract
\`\`\`
Anterior (cranial) → Pulmonary artery
Posterior (caudal) → Aorta
    ↓
180° rotation
    ↓
Proper alignment with ventricles
\`\`\`

### Conotruncal Defects
| Defect | Pathology | Clinical Features |
|--------|-----------|-------------------|
| Tetralogy of Fallot | Anterior deviation of conal septum | RVOT obstruction, VSD, overriding aorta, RVH |
| Truncus arteriosus | Failed septation | Single vessel from both ventricles |
| Transposition | Failed rotation | Parallel circulations |
| Pulmonary atresia | No pulmonary valve | VSD or intact septum |

## Aortic Arch Derivatives

### Pharyngeal Arch Arteries

#### Transformation of Arch Arteries
| Original | Adult Derivative | Notes |
|----------|------------------|-------|
| 1st arch | Maxillary artery | Regresses |
| 2nd arch | Stapedial artery | Mostly regresses |
| 3rd arch | Common carotid + proximal ICA | |
| 4th arch (left) | Aortic arch | Between LCC and LSCA |
| 4th arch (right) | R subclavian artery | |
| 5th arch | Regresses | |
| 6th arch (left) | Ductus arteriosus → Ligamentum | |
| 6th arch (right) | R pulmonary artery | |

### Common Arch Anomalies
- **Coarctation**: Narrowing of aorta, typically at isthmus
- **Interrupted aortic arch**: Complete discontinuity
- **Aberrant subclavian**: Retroesophageal course
- **Double aortic arch**: Vascular ring

## Venous System Development

### Systemic Veins

#### Cardinal Vein Transformation
| Structure | Fate |
|-----------|------|
| Anterior cardinal | Internal jugular, SVC |
| Common cardinal | SVC |
| Posterior cardinal | Regresses largely |
| Subcardinal | Renal vein, gonadal vein |
| Supracardinal | Azygos/hemiazygos |

### Pulmonary Veins

#### Connection
- **Initially**: Drain to cardinal veins/sinus venosus
- **Migration**: Pulmonary vein moves to LA
- **Incorporation**: 4 pulmonary veins incorporated into LA

#### Anomalies
- **Partial anomalous PVD**: Drainage to SVC/RA
- **Total anomalous PVD**: All veins drain to right side
- **Cor triatriatum**: Membrane divides LA

## Conduction System Development

### Pacemaker and Conduction Tissue

#### Sinus Node
- **Origin**: Right sinus venosus
- **Location**: SVC-right atrium junction
- **Innervation**: Vagal and sympathetic fibers

#### AV Node
- **Origin**: AV canal region
- **Location**: Triangle of Koch (RA septum)
- **Blood supply**: RCA (80%) or LCX (20%)

#### His-Purkinje System
- **Bundle of His**: Penetrates central fibrous body
- **Right and left bundle branches**: Descend on septal surface
- **Purkinje fibers**: Extend into ventricular myocardium

## Clinical Correlations

### Fetal Circulation Assessment

#### Ultrasound Markers
- **Four-chamber view**: Basic structural assessment
- **Outflow tracts**: Great vessel alignment
- **Ductus venosus Doppler**: Cardiac function
- **Umbilical artery**: Placental resistance

### Critical Congenital Heart Disease Screening
- **Pulse oximetry**: Screening after 24 hours
- **Critical lesions**: Ductal-dependent lesions
- **Timing**: Before hospital discharge

### Prenatal Diagnosis
- **Timing**: 18-22 weeks anatomy scan
- **Detection rate**: ~40% of significant CHD
- **Indications for fetal echo**: Family history, abnormal screening, maternal conditions
      `,
      flashcards: [
        {
          id: 'cv1-int',
          front: 'What is the role of neural crest cells in heart development?',
          back: 'Neural crest cells migrate into the outflow tract, form the truncoconal ridges, and contribute to the aorticopulmonary septum.'
        },
        {
          id: 'cv2-int',
          front: 'What are the derivatives of the 3rd and 4th aortic arches?',
          back: '3rd arch: Common carotid + proximal internal carotid. 4th arch (left): Aortic arch between LCC and LSCA. 4th arch (right): Right subclavian artery.'
        },
        {
          id: 'cv3-int',
          front: 'What is the difference between septum primum and septum secundum?',
          back: 'Septum primum grows downward from atrial roof. Septum secundum grows to the right of septum primum. Their overlap creates the foramen ovale flap valve.'
        },
        {
          id: 'cv4-int',
          front: 'What structures form from the endocardial cushions?',
          back: 'Part of atrial and ventricular septa (membranous), mitral and tricuspid valve leaflets, and contribution to AV node.'
        },
        {
          id: 'cv5-int',
          front: 'What is the most common location for a VSD?',
          back: 'The membranous portion of the interventricular septum is the most common location (about 80% of VSDs).'
        },
        {
          id: 'cv6-int',
          front: 'What causes dextro-looping versus levo-looping?',
          back: 'Dextral (rightward) looping is normal. Levo (leftward) looping results from disruption of left-right determination genes (NODAL, LEFTY, PITX2).'
        }
      ],
      quiz: [
        {
          id: 'q1-int',
          question: 'Which embryonic cells contribute to the outflow tract septation?',
          options: ['First heart field cells', 'Second heart field cells', 'Neural crest cells', 'Endodermal cells'],
          correctAnswer: 2,
          explanation: 'Neural crest cells migrate into the outflow tract and form the truncoconal ridges that create the aorticopulmonary septum.'
        },
        {
          id: 'q2-int',
          question: 'The aortic arch between the left common carotid and left subclavian arteries derives from which aortic arch?',
          options: ['3rd arch', '4th arch (left)', '4th arch (right)', '6th arch (left)'],
          correctAnswer: 1,
          explanation: 'The left 4th aortic arch forms the aortic arch between the left common carotid and left subclavian arteries.'
        },
        {
          id: 'q3-int',
          question: 'What is the most common type of atrial septal defect?',
          options: ['Ostium primum', 'Ostium secundum', 'Sinus venosus', 'Coronary sinus'],
          correctAnswer: 1,
          explanation: 'Ostium secundum ASD, located in the fossa ovalis, is the most common type of atrial septal defect.'
        },
        {
          id: 'q4-int',
          question: 'Which transcription factor is considered the master regulator of cardiac development?',
          options: ['GATA4', 'TBX5', 'NKX2-5', 'HAND2'],
          correctAnswer: 2,
          explanation: 'NKX2-5 is considered the master cardiac transcription factor. Mutations cause congenital heart defects and AV conduction abnormalities.'
        },
        {
          id: 'q5-int',
          question: 'What cardiac defect is most commonly associated with Down syndrome?',
          options: ['Tetralogy of Fallot', 'AV septal defect', 'Coarctation of the aorta', 'Hypoplastic left heart'],
          correctAnswer: 1,
          explanation: 'About 40% of patients with Down syndrome (trisomy 21) have AV septal defect (complete or partial).'
        }
      ]
    },
    advanced: {
      title: 'Advanced Cardiovascular Embryology',
      description: 'Molecular regulation and complex cardiac malformations',
      content: `
# Advanced Cardiovascular Embryology

## Molecular Regulation of Heart Development

### Core Cardiac Transcription Factor Network

### The Cardiac Code
\`\`\`
NKX2-5 + GATA4 + TBX5 + MEF2C
    ↓
Enhancer/promoter binding
    ↓
Activation of cardiac structural genes
    ↓
MYH6/MYH7, ACTC1, TNNT2, etc.
\`\`\`

### Interactions and Feedback
- **NKX2-5**: Activates GATA4, MEF2C; repressed by FOG2
- **GATA4**: Interacts with TBX5; activates NPPA (ANF)
- **TBX5**: Activates chamber-specific genes; repressed in conducting system
- **MEF2C**: Activates muscle structural genes; interacts with HDACs

### Chromatin Remodeling
- **SWI/SNF complexes**: BAF60c, BAF180 for cardiac gene activation
- **Histone modifications**: H3K4me3 at active cardiac genes
- **DNA methylation**: Dynamic changes during differentiation

## Second Heart Field Biology

### SHF Characteristics

#### Progenitor Pool
- **Location**: Pharyngeal and splanchnic mesoderm
- **Proliferation**:持续 contribution to arterial pole
- **Markers**: ISL1, FGF8, FGF10, TBX1
- **Addition**: Adds cells to outflow tract and right ventricle

#### Regulatory Network
\`\`\`
ISL1 → FGF8/FGF10 → FGFR1/FGFR2
    ↓
TBX1 activation
    ↓
Proliferation and survival
    ↓
Addition to arterial pole
\`\`\`

### SHF Clinical Correlations

#### DiGeorge Syndrome (22q11.2 deletion)
- **Gene**: TBX1 haploinsufficiency
- **Features**: Conotruncal defects, thymic hypoplasia, hypocalcemia
- **Cardiac defects**: TOF, truncus arteriosus, IAA type B
- **Incidence**: ~1 in 4,000

## Left-Right Asymmetry Determination

### Molecular Cascade

### Early Asymmetry (Cilia at Node)
- **Node cilia**: Monocilia rotating clockwise
- **Leftward flow**: Creates asymmetric distribution of morphogens
- **Calcium signaling**: Left-sided calcium increase
- **Left-right determination**: Asymmetric gene expression cascade

### Genetic Cascade
\`\`\`
Leftward flow → Nodal (left lateral plate mesoderm)
    ↓
Lefty1/Lefty2 (left side)
    ↓
PITX2 (left-sided asymmetric expression)
    ↓
Snail (left side) → Snail inhibition (right side)
    ↓
Dextral (rightward) cardiac looping
\`\`\`

### Asymmetry Disorders
| Disorder | Genetics | Cardiac Features |
|----------|----------|------------------|
| Heterotaxy | Multiple genes | Complex CHD, asplenia/polysplenia |
| Situs inversus | Usually sporadic | Mirror-image anatomy |
| Primary ciliary dyskinesia | DNAH5, DNAI1 | Situs inversus (~50%), sinusitis |
| Ivemark syndrome | Usually sporadic | Asplenia, complex CHD |

## Neural Crest in Cardiac Development

### Cardiac Neural Crest Cells

#### Migration Path
\`\`\`
Dorsal neural tube (hindbrain levels)
    ↓
Pharyngeal arches 3, 4, 6
    ↓
Outflow tract (aorticopulmonary septum)
    ↓
Branchial arch arteries
\`\`\`

#### Molecular Guidance
- **SDF1/CXCR4**: Chemotactic guidance
- **Semaphorin/Neuropilin**: Repulsive cues
- **Endothelin**: Survival and differentiation

### Neural Crest Contributions
- **Aorticopulmonary septum**: Complete separation
- **Valve cusps**: Semilunar valves
- **Conduction system**: Contribution to AV node region
- **Great vessel smooth muscle**: Media of arch arteries

### Neural Crest-Related Defects

#### Persistent Truncus Arteriosus
- **Pathology**: Failed septation
- **Type I**: Single trunk, partial division
- **Type II**: Partial division of pulmonary arteries
- **Type III**: Separate pulmonary arteries from trunk
- **Type IV**: No pulmonary arteries (PDA for flow)

#### Arch Abnormalities
- **Interrupted aortic arch**: Type A (distal to LSCA) vs Type B (between LCC and LSCA)
- **Aberrant subclavian**: Retroesophageal course from descending aorta
- **Vascular rings**: Double aortic arch, pulmonary sling

## Valve Development

### Endocardial Cushion Remodeling

### EMT (Epithelial-Mesenchymal Transition)
\`\`\`
Endocardial cells → TGFβ2, Snail1
    ↓
Mesenchymal transformation
    ↓
Invasion into cardiac jelly
    ↓
Cushion formation
\`\`\`

### Valve Elongation and Thinning
- **BMP2**: Ventricular cushion formation
- **FGB8**: Atrioventricular cushion formation
- **NFATC1**: Valve remodeling
- **Ras/MAPK**: Cell proliferation in cushions

### Valve Disease Susceptibility
| Gene | Associated Defect |
|------|-------------------|
| NOTCH1 | Bicuspid aortic valve |
| GATA5 | Pulmonary valve stenosis |
| NKX2-5 | Mitral valve abnormalities |
| FBN1 | Marfan syndrome (aortic pathology) |

## Myocardial Development

### Chamber Myocardium

### Working Myocardium vs. Conduction System
- **Chamber myocardium**: NKX2-5, GATA4, TBX5 expressed
- **Conduction**: Repressed NKX2-5, TBX3, HOX expression
- **Boundary formation**: TGFβ/BMP gradients

### Trabeculation

#### Compaction Process
- **Trabeculae**: Finger-like projections from ventricular wall
- **Purpose**: Increase surface area for nutrition before coronary circulation
- **Regulation**: Neuregulin/ErbB signaling, BMP10
- **Failure**: Noncompaction cardiomyopathy

## Coronary Vessel Development

### Coronary Vasculogenesis

### Progenitor Origin
- **Proepicardial organ**: Transient structure on venous pole
- **Epicardial-derived cells (EPDCs)**: Migrate into myocardium
- **VEGF, Angiopoietin**: Vessel formation
- **Connections**: Coronary stems connect to aorta

### Coronary Anomalies
| Anomaly | Description | Clinical Significance |
|---------|-------------|----------------------|
| ALCAPA | LCA from pulmonary artery | Heart failure, murmur |
| Anomalous origin | Between aorta/pulmonary | Sudden death risk |
| Fistula | Direct coronary chamber connection | Shunt, ischemia |
| Atresia | Coronary artery absent | Collateral dependent |

## Conduction System Development

### Specialized Cardiac Tissue

### Molecular Specification
\`\`\`
Tbx3 + Tbx18 + Hcn4
    ↓
Repression of chamber myocardium program
    ↓
Pacemaker/conduction phenotype
    ↓
SAN, AVN, His-Purkinje formation
\`\`\`

### Developmental Origins
| Component | Origin | Molecular Marker |
|-----------|--------|------------------|
| Sinus node | Right sinus venosus | TBX18, SHOX2, HCN4 |
| AV node | AV canal region | TBX3, NKX2-5 low |
| His bundle | Ventricular septum | NKX2-5 low |
| Purkinje | Ventricular trabeculae | IRX3, Cx40 |

## Clinical Genetics

### Syndromic Congenital Heart Disease

### 22q11.2 Deletion Syndrome
- **Genes**: TBX1 (primary), CRKL
- **Incidence**: 1 in 4,000
- **Cardiac defects**: TOF, truncus, IAA type B
- **Non-cardiac**: Thymic hypoplasia, hypocalcemia, facial features, speech delay

### Noonan Syndrome
- **Genes**: PTPN11 (50%), SOS1, RAF1, KRAS
- **Cardiac defects**: Pulmonic stenosis (60%), HCM (20%)
- **Other features**: Short stature, webbed neck, developmental delay

### Holt-Oram Syndrome
- **Gene**: TBX5 (haploinsufficiency)
- **Cardiac defects**: ASD secundum, VSD, conduction disease
- **Upper limb**: Thumb abnormalities, radial defects

### Alagille Syndrome
- **Genes**: JAG1 (94%), NOTCH2 (2%)
- **Cardiac defects**: Peripheral pulmonic stenosis, TOF
- **Other features**: Liver, face, eye, spine abnormalities

## Fetal Echocardiography

### Indications
- **Maternal**: Diabetes, autoimmune disease, infections
- **Fetal**: Arrhythmia, hydrops, abnormal four-chamber view
- **Family**: Previous child with CHD, genetic syndrome
- **Medications**: Teratogens (lithium, isotretinoin, anticonvulsants)

### Assessment Protocol
1. **Four-chamber view**: Situs, size, function, AV valves
2. **Outflow tracts**: Great vessel alignment, crossing
3. **Three-vessel view**: Pulmonary artery, aorta, SVC
4. **Aortic arch**: Size, isthmus, head and neck vessels
5. **Ductus venosus**: Waveform analysis
6. **Systemic veins**: SVC, IVC, hepatic veins

## Interventional Fetal Cardiology

### Current Interventions
- **Severe aortic stenosis with evolving HLHS**: Fetal balloon valvuloplasty
- **Pulmonary atresia with intact septum**: Fetal pulmonary valvuloplasty
- **Hydrops due to arrhythmia**: Maternal antiarrhythmics

### Future Directions
- **In utero stem cell therapy**: Regenerative approaches
- **Gene therapy**: CRISPR for monogenic disorders
- **Tissue engineering**: Bioengineered heart valves
      `,
      flashcards: [
        {
          id: 'cv1-adv',
          front: 'What is the molecular cascade for left-right asymmetry?',
          back: 'Leftward flow → Nodal (left LPM) → Lefty1/Lefty2 → PITX2 → Snail (left) / Snail inhibition (right) → Dextral cardiac looping.'
        },
        {
          id: 'cv2-adv',
          front: 'What is the genetic basis of DiGeorge syndrome?',
          back: '22q11.2 deletion causing TBX1 haploinsufficiency. Results in conotruncal defects, thymic hypoplasia, hypocalcemia, and facial features.'
        },
        {
          id: 'cv3-adv',
          front: 'What is ALCAPA?',
          back: 'Anomalous Left Coronary Artery from the Pulmonary Artery. Causes coronary steal, myocardial ischemia, and heart failure in infants.'
        },
        {
          id: 'cv4-adv',
          front: 'What molecular factors distinguish conduction system from working myocardium?',
          back: 'Conduction system expresses TBX3, TBX18, SHOX2, HCN4 with repressed NKX2-5 and working myocardium genes.'
        },
        {
          id: 'cv5-adv',
          front: 'What characterizes noncompaction cardiomyopathy developmentally?',
          back: 'Failed trabecular compaction due to defects in Neuregulin/ErbB, BMP10, or other compaction pathways. Results in prominent trabeculae and deep recesses.'
        },
        {
          id: 'cv6-adv',
          front: 'What is the clinical triad of Alagille syndrome?',
          back: 'CHD (peripheral pulmonic stenosis), liver disease (bile duct paucity), and characteristic facies. Caused by JAG1 or NOTCH2 mutations.'
        }
      ],
      quiz: [
        {
          id: 'q1-adv',
          question: 'What is the primary genetic cause of DiGeorge syndrome?',
          options: ['21q11.2 deletion', '22q11.2 deletion', '4p16.3 deletion', '7q11.23 deletion'],
          correctAnswer: 1,
          explanation: 'DiGeorge syndrome (velocardiofacial syndrome) is caused by a 22q11.2 deletion, primarily affecting TBX1.'
        },
        {
          id: 'q2-adv',
          question: 'Which transcription factor is repressed in the cardiac conduction system compared to working myocardium?',
          options: ['TBX3', 'TBX5', 'NKX2-5', 'GATA4'],
          correctAnswer: 2,
          explanation: 'NKX2-5 is repressed in the conduction system while TBX3, TBX18, and SHOX2 are expressed, creating the specialized conduction phenotype.'
        },
        {
          id: 'q3-adv',
          question: 'What is the pathophysiology of ALCAPA?',
          options: ['Coronary artery compression', 'Coronary steal from pulmonary artery', 'Coronary artery aneurysm', 'Coronary artery spasm'],
          correctAnswer: 1,
          explanation: 'In ALCAPA, the left coronary artery arises from the low-pressure pulmonary artery, causing coronary steal with blood flowing away from the myocardium.'
        },
        {
          id: 'q4-adv',
          question: 'Which gene is most commonly mutated in Noonan syndrome?',
          options: ['TBX5', 'PTPN11', 'JAG1', 'FBN1'],
          correctAnswer: 1,
          explanation: 'PTPN11 encodes SHP-2, a protein tyrosine phosphatase in the RAS/MAPK pathway. Mutations cause ~50% of Noonan syndrome cases.'
        },
        {
          id: 'q5-adv',
          question: 'What process creates the cardiac valves from the endocardial cushions?',
          options: ['Mesenchymal-epithelial transition', 'Epithelial-mesenchymal transition (EMT)', 'Apoptosis', 'Hyperplasia'],
          correctAnswer: 1,
          explanation: 'Endocardial cells undergo EMT, invade the cardiac jelly, and form the mesenchymal cushions that remodel into mature valves.'
        }
      ]
    },
    expert: {
      title: 'Expert-Level Cardiovascular Embryology',
      description: 'Molecular mechanisms, genetics, and cutting-edge research',
      content: `
# Expert-Level Cardiovascular Embryology

## Epigenetic Regulation of Cardiac Development

### Chromatin State Dynamics

### Bivalent Domains in Cardiac Progenitors
- **H3K4me3 + H3K27me3**: Poised at developmental genes
- **Resolution upon differentiation**: Activating or repressive marks
- **Key regulators**: UTX (KDM6A), JMJD3 (KDM6B) demethylases
- **Clinical relevance**: Mutations cause congenital heart disease

### DNA Methylation Landscapes
\`\`\`
CpG island methylation → Gene silencing
    ↓
TET enzymes (TET1/2/3) → Active demethylation
    ↓
Dynamic methylation during cardiogenesis
    ↓
Gene expression regulation
\`\`\`

### Non-Coding RNAs in Heart Development

#### MicroRNAs
| miRNA | Function | Target |
|-------|----------|--------|
| miR-1 | Myogenesis, differentiation | HDAC4, Notch ligands |
| miR-133 | Myoblast proliferation | RhoA, SRF |
| miR-208a | Myosin switching | THRAP1, MYH7 |
| miR-499 | Hypertrophy | Sox6, Rod1 |
| miR-126 | Angiogenesis | SPRED1, PI3K inhibitor |

#### Long Non-Coding RNAs
- **Braveheart**: Early cardiac commitment
- **Fendrr**: Lateral plate mesoderm specification
- **Malat1**: Splicing regulation in heart
- **Kcnq1ot1**: Imprinting, conduction disorders

### Three-Dimensional Genome Organization

### Chromatin Topology
- **TADs (Topologically Associating Domains)**: 3D chromatin loops
- **Enhancer-promoter contacts**: CTCF and cohesin-mediated
- **CTCF boundaries**: Insulate cardiac regulatory domains
- **Reorganization**: During differentiation

### Nuclear Architecture
- **Lamina-associated domains (LADs)**: Gene silencing at periphery
- **Nucleolar organizing regions**: rDNA transcription
- **Phase separation**: Transcriptional condensates

## Single-Cell Transcriptomics of Heart Development

### Cell Type Mapping

### Cardiac Lineage Tree
\`\`\`
Cardiogenic mesoderm
    ├── First heart field
    │   ├── Left ventricle cardiomyocytes
    │   └── Atrial cardiomyocytes (subset)
    ├── Second heart field
    │   ├── Right ventricle cardiomyocytes
    │   ├── Outflow tract cardiomyocytes
    │   └── Atrial cardiomyocytes (subset)
    ├── Proepicardium → Epicardial cells → EPDCs
    ├── Endocardial cells → Valve interstitial cells
    └── Cardiac neural crest → Smooth muscle, etc.
\`\`\`

### Spatial Transcriptomics
- **Slide-seq**: High-resolution spatial mapping
- **MERFISH**: Multiplexed error-robust FISH
- **10x Visium**: Spatial gene expression
- **Applications**: Understanding regional specialization

## Cardiac Regeneration and Stem Cells

### Developmental Regeneration Capacity

### Zebrafish Heart Regeneration
- **Complete regeneration**: After apical resection
- **Mechanism**: Dedifferentiation and proliferation
- **Key regulators**: Notch, FGF, RA signaling
- **Epicardial activation**: Essential for regeneration

### Mammalian Heart Regeneration
| Stage | Regeneration Capacity |
|-------|----------------------|
| Embryonic | Complete (P0-P1 in mouse) |
| Early postnatal | Partial (P1-P7 in mouse) |
| Adult | Minimal (fibrosis predominates) |

### Regenerative Mechanisms

#### Cardiomyocyte Cell Cycle Control
- **Binucleation**: Terminally differentiated state
- **Hypertrophy**: Primary response to stress
- **Cell cycle re-entry**: Limited in adult mammalian heart
- **Regulatory nodes**: Cyclins, CDKs, CDK inhibitors

#### Reprogramming Approaches
\`\`\`
Fibroblasts + GMT (GATA4, MEF2C, TBX5)
    ↓
Direct reprogramming
    ↓
Induced cardiomyocyte-like cells (iCMs)
\`\`\`

### Stem Cell-Based Therapies

#### Pluripotent Stem Cell-Derived Cardiomyocytes
- **Differentiation protocols**: Wnt modulation (CHIR99021 → IWP2)
- **Maturation**: Electrical, mechanical, metabolic
- **Purity concerns**: Arrhythmia risk from non-cardiac cells
- **Current trials**: Heart failure, post-MI therapy

#### Direct Cardiac Reprogramming
- **Advantages**: In situ conversion, no cell transplantation
- **Efficiency**: Still low (~10%)
- **Barriers**: Epigenetic landscape, reprogramming efficiency
- **Clinical translation**: Years away

## Genetics of Congenital Heart Disease

### Mendelian CHD Genetics

### High-Penetrance Genes
| Gene | Syndrome | Defects |
|------|----------|--------|
| NKX2-5 | NSRD, ASD, AV block | Septal, conduction |
| TBX5 | Holt-Oram | ASD, VSD, conduction |
| GATA4 | Familial ASD | Septal |
| JAG1 | Alagille | Pulmonic stenosis |
| NOTCH1 | BAV, HLHS | Left-sided lesions |
| TBX1 | DiGeorge (22q11) | Conotruncal |

### Oligogenic and Polygenic Inheritance
- **Common variant risk**: Polygenic risk scores
- **Gene-gene interactions**: Epistasis
- **Incomplete penetrance**: Variable expressivity
- **Modifier genes**: Influence phenotype severity

### De Novo Mutations

#### CHD Exome Studies
- **De novo rate**: Elevated in CHD probands
- **Affected genes**: Chromatin modifiers, cilia, NOTCH, Wnt
- **Genotype-phenotype correlation**: Limited
- **Future directions**: Polygenic risk integration

## Precision Medicine in CHD

### Genotype-Guided Management

### Long QT Syndrome
- **LQT1 (KCNQ1)**: Exercise-triggered events
- **LQT2 (KCNH2)**: Auditory trigger, postpartum risk
- **LQT3 (SCN5A)**: Sleep/rest triggers
- **Therapy**: Beta-blockers, genotype-specific considerations

### Marfan Syndrome
- **Gene**: FBN1 mutation
- **Aortic root**: Progressive dilation, dissection risk
- **Management**: Beta-blockers, ARBs, surveillance
- **Surgery**: At defined diameter thresholds

### Hypertrophic Cardiomyopathy
- **Genes**: MYH7, MYBPC3 (most common)
- **Mechanism**: Sarcomere mutation → hypercontractility
- **Risk stratification**: Genotype + phenotype
- **Management**: Beta-blockers, disopyramide, ICD

## Developmental Origins of Adult Heart Disease

### Developmental Programming

### Prenatal Exposures
- **Maternal diabetes**: Fetal cardiomyopathy, septal hypertrophy
- **Alcohol**: Septal defects, conotruncal defects
- **Retinoids**: Conotruncal defects, great vessel anomalies
- **Anticonvulsants**: Septal defects, coarctation

### Epigenetic Memory
- **Gestational stress**: HPA axis programming
- **Nutrition**: One-carbon metabolism effects
- **Hypoxia**: Hypoxia-inducible factor pathways
- **Transgenerational**: Potential epigenetic inheritance

## Modeling Heart Development

### Animal Models

### Mouse Models
- **Knockout**: Targeted gene deletion
- **Knock-in**: Specific mutation introduction
- **Conditional**: Tissue/temporal specificity (Cre-lox)
- **CRISPR**: Rapid generation of models

### Zebrafish
- **Advantages**: External development, transparency
- **Forward genetics**: Large-scale screens
- **Heart regeneration**: Complete regenerative capacity
- **High-throughput**: Drug screening

### Stem Cell Models

#### Cardiac Organoids
- **Self-organization**: Chamber-like structures
- **Ventricular vs. atrial**: Region-specific programming
- **Limitations**: Size, maturation state
- **Applications**: Disease modeling, drug testing

#### Engineered Heart Tissues
- **3D constructs**: Cardiomyocytes + scaffold
- **Mechanical properties**: Force measurement
- **Vascularization**: Ongoing challenge
- **Therapeutic**: Potential for repair

## Future Directions

### Gene Editing for CHD
- **CRISPR-Cas9**: Correcting mutations in iPSCs
- **Base editing**: Single nucleotide changes
- **Prime editing**: Flexible editing
- **In vivo editing**: Future therapeutic possibility

### Biomaterials and Tissue Engineering
- **Decellularized matrices**: Native ECM scaffold
- **3D bioprinting**: Spatial patterning of cells
- **Synthetic scaffolds**: Defined properties
- **Bioactive factors**: Incorporated morphogens

### Artificial Intelligence in Cardiology
- **Imaging analysis**: Automated CHD detection
- **Genotype-phenotype**: Machine learning predictions
- **Risk stratification**: Personalized medicine
- **Drug discovery**: In silico screening

## Clinical Translation Challenges

### Cell Therapy Barriers
- **Cell retention**: <10% remain after injection
- **Engraftment**: Limited survival of transplanted cells
- **Arrhythmogenicity**: Electrical integration issues
- **Immunogenicity**: Allogeneic cell rejection

### Gene Therapy Challenges
- **Delivery efficiency**: Cardiomyocyte transduction
- **Off-target effects**: Unintended genomic changes
- **Immune response**: To viral vectors or edited cells
- **Long-term safety**: Unknown consequences

### Regulatory Considerations
- **Cell therapy products**: Complex manufacturing
- **Gene editing**: Germline vs. somatic concerns
- **Combination products**: Cells + scaffolds + factors
- **Personalized medicine**: Manufacturing challenges

## Conclusion

Expert understanding of cardiovascular embryology requires integration across:
- **Molecular genetics**: From single gene disorders to polygenic risk
- **Epigenetics**: Chromatin, non-coding RNAs, 3D genome
- **Cell biology**: Differentiation, regeneration, reprogramming
- **Systems biology**: Networks, emergent properties
- **Clinical medicine**: From embryology to cardiology
- **Therapeutics**: Gene therapy, cell therapy, pharmacology

The field continues to evolve rapidly, with new discoveries constantly reshaping our understanding of how the heart forms and how we might repair it when it fails.
      `,
      flashcards: [
        {
          id: 'cv1-exp',
          front: 'What are the key cardiac miRNAs and their functions?',
          back: 'miR-1 (myogenesis), miR-133 (proliferation control), miR-208a (myosin switching), miR-499 (hypertrophy), miR-126 (angiogenesis).'
        },
        {
          id: 'cv2-exp',
          front: 'What is the regenerative capacity difference between zebrafish and mammalian hearts?',
          back: 'Zebrafish: complete regeneration throughout life via dedifferentiation/proliferation. Mammals: complete only embryonic, partial early postnatal (P1-P7), minimal adult (fibrosis).'
        },
        {
          id: 'cv3-exp',
          front: 'What is the GMT reprogramming cocktail?',
          back: 'GATA4, MEF2C, and TBX5. These three transcription factors can reprogram fibroblasts into induced cardiomyocyte-like cells (iCMs).'
        },
        {
          id: 'cv4-exp',
          front: 'What is bivalent chromatin in cardiac progenitors?',
          back: 'Regions marked by both H3K4me3 (activating) and H3K27me3 (repressive) that keep developmental genes poised for activation upon differentiation.'
        },
        {
          id: 'cv5-exp',
          front: 'What are the barriers to cardiac cell therapy?',
          back: 'Low cell retention (<10%), poor engraftment/survival, arrhythmia risk from poor electrical integration, and immune rejection of allogeneic cells.'
        }
      ],
      quiz: [
        {
          id: 'q1-exp',
          question: 'What distinguishes mammalian from zebrafish cardiac regeneration?',
          options: ['Zebrafish regenerate by fibrosis, mammals by cardiomyocyte proliferation', 'Zebrafish maintain cardiomyocyte proliferative capacity throughout life, mammals lose it after early postnatal period', 'Mammals have better regenerative capacity', 'Both regenerate similarly'],
          correctAnswer: 1,
          explanation: 'Zebrafish maintain the ability to regenerate their heart throughout life via cardiomyocyte dedifferentiation and proliferation. Mammals have complete regeneration only in the embryonic period, partial in early postnatal (P1-P7), and minimal in adulthood where fibrosis predominates.'
        },
        {
          id: 'q2-exp',
          question: 'What is the GMT direct cardiac reprogramming cocktail?',
          options: ['GATA4, MEF2C, TBX5', 'GATA4, NKX2-5, TBX5', 'OCT4, SOX2, KLF4', 'NKX2-5, GATA4, HAND2'],
          correctAnswer: 0,
          explanation: 'GMT (GATA4, MEF2C, TBX5) was the first combination shown to directly reprogram fibroblasts into induced cardiomyocyte-like cells.'
        },
        {
          id: 'q3-exp',
          question: 'What is the primary barrier to cell therapy for heart failure?',
          options: ['Cell production cost', 'Cell retention and engraftment', 'Ethical concerns', 'Lack of cell types'],
          correctAnswer: 1,
          explanation: 'While multiple barriers exist, the primary biological barrier is low cell retention (<10% remain at injection site) and poor long-term engraftment of transplanted cells.'
        },
        {
          id: 'q4-exp',
          question: 'What is the primary function of bivalent chromatin domains in cardiac progenitors?',
          options: ['Permanently silence genes', 'Permanently activate genes', 'Keep developmental genes poised for activation or repression upon differentiation', 'Prevent DNA damage'],
          correctAnswer: 2,
          explanation: 'Bivalent domains (H3K4me3 + H3K27me3) keep developmental genes in a poised state, ready to be activated or repressed upon differentiation signals.'
        },
        {
          id: 'q5-exp',
          question: 'Which miRNA is most specific for cardiomyocytes and regulates myosin switching?',
          options: ['miR-1', 'miR-133', 'miR-208a', 'miR-126'],
          correctAnswer: 2,
          explanation: 'miR-208a is encoded within an intron of MYH6 (α-MHC) and specifically regulates myosin switching, targeting THRAP1 and influencing MYH7 (β-MHC) expression.'
        }
      ]
    },
    master: {
      title: 'Mastering Cardiovascular Embryology',
      description: 'Complete understanding from basic concepts to research frontiers',
      content: `
# Mastering Cardiovascular Embryology

## Historical Foundations

### Key Discoveries

| Era | Discovery | Significance |
|-----|-----------|--------------|
| 1628 | Harvey (De Motu Cordis) | Circulation of blood |
| 1906 | His (Atrioventricular bundle) | Conduction pathway |
| 1940s | Spemann & organizer | Induction concept |
| 1950s | DeHaan (Heart tube) | Primary heart field |
| 1980s | Kirby (Neural crest) | Outflow tract development |
| 1990s | Nodal gene cascade | Left-right asymmetry |
| 2000s | CHD genetics | Molecular basis of defects |

## Clinical Classification System

### Segmental Analysis

### Sequential Segmental Approach
1. **Atrial arrangement**: Situs solitus, inversus, ambiguus
2. **Ventricular looping**: D-loop, L-loop
3. **Great artery relationships**: Normally related, transposed, parallel
4. **Atrioventricular connections**: Concordant, discordant, ambiguous
5. **Ventriculoarterial connections**: Concordant, discordant, double outlet

### Nomenclature
- **Situs solitus**: Normal arrangement
- **Situs inversus**: Mirror image
- **Situs ambiguus**: Heterotaxy (abnormal arrangement)
- **Dextrocardia**: Heart in right chest
- **Levocardia**: Heart in left chest (normal)

## Comprehensive CHD Classification

### Septal Defects

### Atrial Septal Defects
| Type | Location | Shunt Direction | Notes |
|------|----------|-----------------|-------|
| Ostium secundum | Fossa ovalis | L→R | Most common (70%) |
| Ostium primum | Lower atrial septum | L→R | Part of AVSD |
| Sinus venosus | SVC/IVC junction | L→R | Associated with PAPVC |
| Coronary sinus | Unroofed CS | L→R | Rare |

### Ventricular Septal Defects
| Type | Location | %
|------|----------|-----|
| Perimembranous | Below aortic valve | 80% |
| Muscular | In muscular septum | 5-20% |
| Outlet (supracristal) | Below pulmonary valve | 5-7% |
| Inlet (AVSD type) | Posterior/inlet | <5% |

### Right-Heart Obstructive Lesions

### Pulmonary Stenosis/Atresia
- **Valvar PS**: Thickened, doming valve
- **Supravalvar PS': Above valve (TOF-like)
- **Subvalvar PS': Infundibular obstruction
- **Pulmonary atresia**: No valve opening, with or without VSD

### Complex Defects

### Tetralogy of Fallot
1. **VSD**: Large, unrestrictive
2. **Overriding aorta**: >50% over LV
3. **Right ventricular outflow tract obstruction**: Variable
4. **Right ventricular hypertrophy**: Secondary

### Transposition of the Great Arteries
- **d-TGA**: Aorta anterior from RV, PA posterior from LV
- **l-TGA**: Aorta anterior from LV, PA posterior from RV (ventricular inversion also)
- **Physiology**: Parallel circulations → mixing required for survival

### Single Ventricle Physiology
- **Hypoplastic left heart**: Small LV, aortic/mitral atresia/hypoplasia
- **Hypoplastic right heart**: Small RV, pulmonary atresia/tricuspid atresia
- **Unbalanced AVSD**: Dominant one ventricle
- **Fontan pathway**: Surgical palliation

## Prenatal Diagnosis and Management

### Fetal Echocardiography Protocol

### Standard Views
1. **Abdominal situs**: Stomach and heart position
2. **Four-chamber view**: Size, function, AV valves
3. **Left ventricular outflow**: Aortic root, ascending aorta
4. **Right ventricular outflow**: Pulmonary valve, MPA
5. **Three-vessel view**: PA, aorta, SVC relationships
6. **Aortic arch**: Size, isthmus, head and neck vessels
7. **Ductus venosus**: Waveform analysis

### Advanced Assessment
- **M-mode**: Function, dimensions
- **Doppler**: Flow patterns, pressures
- **Color flow**: Regurgitation, shunts
- **3D/4D**: Spatial relationships
- **Speckle tracking**: Strain analysis

### Counseling Considerations

### Prognosis by Lesion
| Lesion | Survival with Intervention | Quality of Life |
|--------|---------------------------|-----------------|
Isolated VSD | Excellent | Normal |
| TOF | Good | Near normal |
| d-TGA | Good | Good |
| HLHS | Fair | Variable |
| Truncus | Fair | Good |
| Heterotaxy | Guarded | Variable |

## Postnatal Management

### Transitional Physiology

### Ductal-Dependent Lesions

### Right-Sided Obstructive (Prostaglandin Dependent)
- **Critical pulmonary stenosis/atresia**: Need PDA for pulmonary blood flow
- **Management**: PGE1 infusion, surgical shunt or repair

### Left-Sided Obstructive (Prostaglandin Dependent)
- **Critical aortic stenosis/atresia**: Need PDA for systemic blood flow
- **Management**: PGE1 infusion, Norwood/repair

### Mixing Lesions (Balanced Circulation)
- **d-TGA**: Need atrial communication (balloon septostomy)
- **TAPVR**: Obstructed → surgical emergency

## Surgical Approaches

### Palliative Procedures

### Systemic-to-Pulmonary Shunt
- **Classic Blalock-Taussig**: Subclavian to PA (direct)
- **Modified Blalock-Taussig**: Goretex graft (3-4 mm)
- **Central shunt**: Ascending aorta to MPA
- **Risk**: Pulmonary overcirculation, shunt thrombosis

### Pulmonary Artery Banding
- **Indication**: Limit pulmonary blood flow
- **Technique**: Adjustable band around MPA
- **Complications**: Distortion, stenosis, migration

### Definitive Repair

### Biventricular Repair
- **VSD closure**: Patch or primary
- **TOF repair**: VSD closure + RVOT reconstruction
- **AV canal repair**: Two-patch technique
- **TGA arterial switch**: Great artery translocation + coronary transfer

### Single Ventricle Palliation

### Fontan Pathway
1. **Stage I (Norwood)**: Neonatal period
2. **Stage II (Glenn/Hemi-Fontan)**: 4-6 months
3. **Stage III (Fontan)**: 2-4 years

### Fontan Physiology
- **Passive pulmonary blood flow**: No ventricular pump
- **Elevated systemic venous pressure**: Consequence
- **Low cardiac output**: Limitation
- **Long-term complications**: PLE, arrhythmias, liver fibrosis

## Long-Term Outcomes

### Neurodevelopmental Outcomes

### Risk Factors
- **Cyanosis duration**: Longer = worse
- **Open-heart surgery age**: Younger = higher risk
- **Cardiopulmonary bypass**: Duration matters
- **Genetic syndromes**: Independent risk factor

### Adult Congenital Heart Disease

### Transition Considerations
- **Lifelong follow-up**: Required
- **Arrhythmia risk**: Increases with age
- **Reoperation risk**: Many patients need multiple surgeries
- **Reproductive counseling**: Pregnancy risk assessment
- **Exercise recommendations**: Individualized

## Research Frontiers

### Stem Cell-Based Regeneration
- **iPSC-derived cardiomyocytes**: Disease modeling, potential therapy
- **Direct reprogramming**: In situ conversion of fibroblasts
- **Tissue engineering**: Bioengineered heart tissue
- **Decellularized scaffolds**: Native ECM structure

### Gene Therapy
- **Monogenic disorders**: Specific targets
- **Delivery systems**: Viral vectors, nanoparticles
- **CRISPR-based**: Precise editing
- **Challenges**: Off-target effects, delivery efficiency

### Precision Medicine
- **Pharmacogenomics**: Drug response variability
- **Risk stratification**: Genetic and clinical data
- **Personalized implants**: 3D printing based on imaging
- **Wearable monitoring**: Continuous physiologic data

## Ethical Considerations

### Prenatal Decision-Making
- **Viability thresholds**: Periviable counseling
- **Complexity**: Severity spectrum
- **Maternal-fetal balance**: Risk/benefit
- **Resource allocation**: High-cost, low-volume care

### Research Ethics
- **Animal models**: Necessary but limitations
- **Stem cell sources**: ESC vs. iPSC vs. adult
- **Gene editing**: Germline vs. somatic
- **Equity**: Access to advanced therapies

## Conclusion

Mastering cardiovascular embryology requires:
- **Foundational knowledge**: Normal and abnormal development
- **Clinical correlation**: From embryo to adult
- **Surgical understanding**: How we correct abnormalities
- **Long-term perspective**: Lifelong implications of CHD
- **Research awareness**: Current and future directions
- **Ethical sensitivity**: Complex decision-making

The developing heart is both remarkably resilient and vulnerable. Understanding its formation is essential for improving outcomes for the millions affected by congenital heart disease worldwide.
      `,
      flashcards: [
        {
          id: 'cv1-mas',
          front: 'What are the four components of tetralogy of Fallot?',
          back: '1) VSD, 2) Overriding aorta, 3) RV outflow tract obstruction, 4) Right ventricular hypertrophy. Remember "PROV" - Pulmonary stenosis, Right ventricular hypertrophy, Overriding aorta, VSD.'
        },
        {
          id: 'cv2-mas',
          front: 'What is the sequential segmental analysis approach to CHD?',
          back: '1) Atrial situs, 2) Ventricular looping, 3) Great artery relationships, 4) AV connections, 5) VA connections. Systematic approach to complex CHD.'
        },
        {
          id: 'cv3-mas',
          front: 'What are the three stages of single ventricle (Fontan) palliation?',
          back: 'Stage I (Norwood): Neonatal, Stage II (Glenn/Hemi-Fontan): 4-6 months, Stage III (Fontan completion): 2-4 years. Creates passive pulmonary blood flow.'
        },
        {
          id: 'cv4-mas',
          front: 'What are the indications for prostaglandin (PGE1) in a neonate with CHD?',
          back: 'Ductal-dependent lesions: Right-sided obstructive (need PDA for pulmonary flow) or left-sided obstructive (need PDA for systemic flow). Keeps ductus arteriosus patent.'
        },
        {
          id: 'cv5-mas',
          front: 'What is the most common type of VSD?',
          back: 'Perimembranous VSD (80% of cases) located below the aortic valve in the membranous portion of the interventricular septum.'
        }
      ],
      quiz: [
        {
          id: 'q1-mas',
          question: 'Which of the following is NOT part of tetralogy of Fallot?',
          options: ['Ventricular septal defect', 'Overriding aorta', 'Atrial septal defect', 'Right ventricular outflow tract obstruction'],
          correctAnswer: 2,
          explanation: 'TOF consists of VSD, overriding aorta, RV outflow tract obstruction, and RV hypertrophy. ASD is not part of TOF.'
        },
        {
          id: 'q2-mas',
          question: 'What is the purpose of prostaglandin E1 (PGE1) in a neonate with critical pulmonary stenosis?',
          options: ['Increase heart rate', 'Maintain ductus arteriosus patency', 'Reduce pulmonary pressure', 'Treat arrhythmia'],
          correctAnswer: 1,
          explanation: 'PGE1 maintains ductus arteriosus patency, providing pulmonary blood flow in ductal-dependent right-sided obstructive lesions like critical pulmonary stenosis.'
        },
        {
          id: 'q3-mas',
          question: 'At what age is the Fontan completion (stage III single ventricle palliation) typically performed?',
          options: ['6-12 months', '12-18 months', '2-4 years', '5-7 years'],
          correctAnswer: 2,
          explanation: 'Fontan completion is typically performed at 2-4 years of age, after the Glenn (stage II) at 4-6 months and initial palliation (stage I) in the neonatal period.'
        },
        {
          id: 'q4-mas',
          question: 'What is the most common type of atrial septal defect?',
          options: ['Ostium primum', 'Ostium secundum', 'Sinus venosus', 'Coronary sinus'],
          correctAnswer: 1,
          explanation: 'Ostium secundum ASD (in the fossa ovalis) accounts for about 70% of atrial septal defects.'
        },
        {
          id: 'q5-mas',
          question: 'In d-Transposition of the Great Arteries (d-TGA), what is the relationship of the great arteries?',
          options: ['Both from left ventricle', 'Both from right ventricle', 'Aorta from RV, PA from LV (parallel)', 'Normally related'],
          correctAnswer: 2,
          explanation: 'In d-TGA, the aorta arises from the RV and is anterior, while the PA arises from the LV and is posterior, creating parallel circulations.'
        }
      ]
    }
  }
};
