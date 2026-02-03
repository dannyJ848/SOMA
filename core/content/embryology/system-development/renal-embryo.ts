import { LegacyEducationalContent } from '../../types';

export const renalEmbryoContent: LegacyEducationalContent = {
  id: 'renal-embryo',
  title: 'Renal System Development',
  category: 'Embryology',
  subcategory: 'System Development',
  description: 'The formation of the kidneys, ureters, bladder, and urinary tract',
  levels: {
    1: {
      title: 'Introduction to Renal Development',
      description: 'Learn how the kidneys and urinary system form',
      content: `
# Introduction to Renal Development

## Overview

The urinary system develops from **intermediate mesoderm** and goes through **three different kidney systems** before the final kidneys form! Only the last system (metanephros) persists to become the adult kidneys.

## The Three Kidney Systems

### 1. Pronephros (Weeks 3-4)
- **Location**: Cervical region (neck area)
- **Function**: Transient, non-functional in humans
- **Fate**: Regresses completely
- **Significance**: Important for inducing the next system

### 2. Mesonephros (Weeks 4-8)
- **Location**: Thoracic and lumbar region
- **Function**: Temporary kidney, produces some urine
- **Fate**: Most regresses, some parts become male reproductive structures
- **Significance**: Forms the duct system for next kidney

### 3. Metanephros (Weeks 5+)
- **Location**: Lumbar/sacral region
- **Function**: Permanent kidney, produces urine
- **Fate**: Becomes the adult kidney
- **Timeline**: Starts week 5, functional by week 10-12

## Kidney Development Stages

### Week 5: Beginning of Metanephros
- **Ureteric bud** grows from mesonephric duct
- Invades **metanephric mesenchyme** (specialized tissue)
- These two tissues interact to form the kidney

### Weeks 5-10: Branching and Nephron Formation
- Ureteric bud **branches repeatedly** (like a tree)
- Forms collecting system (collecting ducts, calyces, pelvis)
- Metanephric mesenchyme forms **nephrons** (filtering units)

### Weeks 10-36: Maturation
- Nephrons continue to form
- Kidney moves from pelvis to abdomen
- Becomes functional (produces urine)

## Parts of the Kidney

### Nephron (The Functional Unit)
Each kidney contains about **1 million nephrons!**

Parts of a nephron:
- **Glomerulus**: Ball of capillaries (blood filtering)
- **Bowman's capsule**: Cup around glomerulus
- **Proximal tubule**: Reabsorption
- **Loop of Henle**: Concentration
- **Distal tubule**: Fine-tuning
- **Collecting duct**: Final concentration

### Collecting System
- **Collecting ducts**: Receive urine from nephrons
- **Minor calyces**: Cup-shaped structures
- **Major calyces**: Formed from minor calyces
- **Renal pelvis**: Funnel for urine
- **Ureter**: Tube to bladder

## Bladder and Urethra Development

### Bladder Formation
- Forms from **cloaca** (end of gut tube)
- Divided by **urorectal septum**:
  - Front part becomes bladder and urethra
  - Back part becomes rectum
- **Urogenital sinus** connects to developing ureters

### Urethra Formation
- **Prostatic urethra**: From urogenital sinus
- **Membranous urethra**: From pelvic urethra
- **Penile urethra**: From genital tubercle
- Differences between males and females develop

## The Ascent of the Kidneys

The kidneys "climb" from the pelvis to the abdomen:

| Week | Kidney Position |
|------|-----------------|
| Week 5-6 | Pelvic region |
| Week 9 | Abdominal cavity |
| Week 12 | Reaching adult position |

During ascent, the kidneys **rotate** and receive **new blood supply** from higher arteries.

## Common Congenital Problems

### Renal Agenesis
- **Unilateral**: One kidney missing (usually asymptomatic)
- **Bilateral**: Both kidneys missing (fatal - no amniotic fluid)

### Renal Ectopia
- Kidney doesn't reach proper position
- Usually in pelvis ("pelvic kidney")
- Can work normally

### Horseshoe Kidney
- Kidneys fused at lower poles
- Shaped like a horseshoe
- Usually functions normally
- Higher risk of kidney stones

### Hydronephrosis
- Swelling of kidney due to urine backup
- Can be caused by obstruction
- Most common congenital kidney problem

### Posterior Urethral Valves
- Flaps of tissue in male urethra
- Block urine flow
- Can cause severe kidney damage

### Vesicoureteral Reflux (VUR)
- Urine flows backward from bladder to kidney
- Can cause kidney infections
- Often resolves spontaneously in mild cases

## Key Terms to Remember

- **Nephron**: Functional unit of kidney
- **Glomerulus**: Blood filtering unit
- **Ureter**: Tube from kidney to bladder
- **Bladder**: Urine storage
- **Urethra**: Tube from bladder to outside
- **Bilateral**: Both sides
- **Unilateral**: One side

## Summary

Kidney development involves:
1. **Weeks 3-4**: Pronephros appears and disappears
2. **Weeks 4-8**: Mesonephros functions temporarily
3. **Week 5**: Metanephros (permanent kidney) begins
4. **Weeks 5-10**: Nephrons form, branching occurs
5. **Weeks 5-12**: Kidney ascends to adult position
6. **Birth**: Functional kidneys, continue maturing

The kidneys are essential for filtering blood, removing waste, and maintaining fluid balance. Understanding their development helps explain many congenital kidney problems!
      `,
      flashcards: [
        {
          id: 'ren1',
          front: 'What are the three embryonic kidney systems?',
          back: 'Pronephros (weeks 3-4, transient), Mesonephros (weeks 4-8, temporary), and Metanephros (week 5+, permanent kidney).'
        },
        {
          id: 'ren2',
          front: 'From which germ layer do the kidneys develop?',
          back: 'The kidneys develop from intermediate mesoderm.'
        },
        {
          id: 'ren3',
          front: 'What is the functional unit of the kidney?',
          back: 'The nephron is the functional unit of the kidney. Each kidney contains approximately 1 million nephrons.'
        },
        {
          id: 'ren4',
          front: 'What is horseshoe kidney?',
          back: 'A congenital anomaly where the lower poles of the kidneys fuse, creating a horseshoe-shaped kidney. Usually functions normally but has higher risk of stones.'
        },
        {
          id: 'ren5',
          front: 'What is vesicoureteral reflux (VUR)?',
          back: 'Backward flow of urine from bladder into ureters/kidneys. Common in children, can cause kidney infections, often resolves spontaneously.'
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: 'From which embryonic tissue layer do the kidneys develop?',
          options: ['Ectoderm', 'Endoderm', 'Mesoderm', 'Neural crest'],
          correctAnswer: 2,
          explanation: 'The kidneys develop from intermediate mesoderm, one of the three primary germ layers.'
        },
        {
          id: 'q2',
          question: 'Which of the three kidney systems becomes the permanent adult kidney?',
          options: ['Pronephros', 'Mesonephros', 'Metanephros', 'All of them'],
          correctAnswer: 2,
          explanation: 'The metanephros is the permanent kidney that begins development around week 5 and continues functioning throughout life.'
        },
        {
          id: 'q3',
          question: 'What is the functional unit of the kidney?',
          options: ['Glomerulus', 'Nephron', 'Ureter', 'Renal pelvis'],
          correctAnswer: 1,
          explanation: 'The nephron is the functional unit of the kidney, containing the glomerulus, tubules, and collecting duct.'
        },
        {
          id: 'q4',
          question: 'What characterizes a horseshoe kidney?',
          options: ['One kidney missing', 'Kidneys fused at lower poles', 'Kidney in pelvis', 'Kidney divided into two parts'],
          correctAnswer: 1,
          explanation: 'In horseshoe kidney, the lower poles of both kidneys fuse, creating a U or horseshoe-shaped organ.'
        },
        {
          id: 'q5',
          question: 'Vesicoureteral reflux is characterized by:',
          options: ['Blockage of urine flow', 'Backward flow of urine from bladder to kidney', 'Absence of one kidney', 'Excessive urine production'],
          correctAnswer: 1,
          explanation: 'Vesicoureteral reflux (VUR) is the backward flow of urine from the bladder into the ureters and kidneys.'
        }
      ]
    },
    intermediate: {
      title: 'Renal Morphogenesis',
      description: 'Detailed understanding of kidney and urinary tract formation',
      content: `
# Renal Morphogenesis

## The Three Kidney Systems in Detail

### Pronephros (Week 3)
- **Structure**: 7-10 cell clusters in cervical region
- **Ducts**: Pronephric ducts grow caudally
- **Function**: Transient, largely non-functional
- **Regression**: Disappears by week 4
- **Legacy**: Pronephric duct becomes mesonephric duct

### Mesonephros (Weeks 4-8)
- **Location**: Thoracic and upper lumbar segments
- **Structure**: Glomeruli and mesonephric tubules
- **Function**: Transient renal function
- **Male derivatives**: Epididymis, vas deferens, ejaculatory ducts
- **Female fate**: Regression (forms epoophoron and paroophoron)

### Metanephros (Week 5-Birth)
- **Location**: Sacral region initially, ascends to T12-L3
- **Two components**: Ureteric bud + metanephric mesenchyme
- **Function**: Permanent kidney
- **Nephrogenesis**: Continues until ~36 weeks (1 million nephrons)

## Kidney Development: Reciprocal Induction

### Ureteric Bud Branching

#### Initial Interaction
\`\`\`
Metanephric mesenchyme secretes GDNF
    ↓
GDNF binds Ret receptor on mesonephric duct
    ↓
Ureteric bud outgrowth (week 5)
    ↓
Bud penetrates metanephric mesenchyme
\`\`\`

#### Branching Morphogenesis
- **First 10 generations**: Form collecting ducts
- **Weeks 5-15**: Rapid branching
- **Weeks 15-20**: Slower branching, calyces form
- **Weeks 20-36**: Terminal branching, nephron induction
- **Total**: ~15 generations of branching

### Nephron Formation

#### Induction Process
1. **UB tip**: Signals to adjacent mesenchyme
2. **Condensation**: Mesenchymal cells cluster
3. **Epithelialization**: Mesenchyme → epithelium
4. **Formation**: Renal vesicle → comma-shaped body → S-shaped body
5. **Maturation**: Glomerular tuft, proximal/distal tubules

#### Molecular Regulation of Nephrogenesis
| Factor | Source | Function |
|--------|--------|----------|
| WNT9b | Ureteric bud | Induction of nephron progenitors |
| WNT4 | Renal vesicle | Epithelial transformation |
| FGF8 | Mesenchyme | Survival of nephron progenitors |
| BMP7 | Mesenchyme | Branching, nephron formation |
| Notch | Renal vesicle | Proximal-distal patterning |

## Collecting System Development

### Ureteric Bud Derivatives
\`\`\`
Ureteric bud
    ├── Repeated branching (15 generations)
    │
    ├── Collecting ducts (1-10 generations)
    │
    ├── Papillary ducts (terminal)
    │
    ├── Minor calyces (10-12 generations)
    │
    ├── Major calyces
    │
    ├── Renal pelvis
    │
    └── Ureter
\`\`\`

### Ureter Maturation
- **Week 5**: UB emerges from mesonephric duct
- **Week 6-7**: Separation from duct (common excretory duct)
- **Week 8**: Ureterovesical junction forms
- **Week 12**: Bladder insertion complete

## Bladder and Urethra Development

### Cloacal Division

#### Urorectal Septum Formation
\`\`\`
Cloaca (common chamber)
    ↓
Tourneux's septum (cranial)
    ↓
Rathke's folds (lateral)
    ↓
Complete separation (week 7)
    ├── Urogenital sinus (anterior)
    └── Anal canal (posterior)
\`\`\`

### Bladder Formation
- **Trigone**: Mesonephric duct incorporation
- **Ureteric orifices**: Migrate superiorly and laterally
- **Urethra**: From urogenital sinus
- **Allantois**: Becomes urachus (median umbilical ligament)

### Urethral Development

#### Male Urethra
| Segment | Origin | Description |
|---------|--------|-------------|
| Prostatic | Urogenital sinus | Prostate develops |
| Membranous | Urogenital sinus | Urogenital diaphragm |
| Penile | Genital tubercle | Endodermal + ectodermal |

#### Female Urethra
- **Origin**: Entirely from urogenital sinus
- **Length**: ~4 cm
- **Epithelium**: Stratified squamous at meatus, transitional elsewhere

## Renal Vasculature Development

### Changing Blood Supply During Ascent

| Renal Position | Arterial Supply |
|----------------|-----------------|
| Pelvic | Sacral arteries, internal iliac |
| Mid-abdominal | Abdominal aorta branches |
| Final position | Renal arteries at L1-L2 |

### Renal Artery Branches
- **Segmental arteries**: 5 (superior, anterior superior, anterior inferior, inferior, posterior)
- **Interlobar**: Through renal parenchyma
- **Arcuate**: At corticomedullary junction
- **Interlobular**: Into cortex
- **Afferent arterioles**: To glomeruli

## Molecular Regulation

### Key Signaling Pathways

### RET/GDNF Signaling
\`\`\`
Metanephric mesenchyme → GDNF
    ↓
GFRα1 co-receptor + RET tyrosine kinase
    ↓
Ureteric bud outgrowth
    ↓
Branching morphogenesis
\`\`\`

### WT1 (Wilms Tumor 1)
- **Location**: Metanephric mesenchyme
- **Function**: Mesenchymal survival, GDNF production
- **Clinical**: WT1 mutations → Wilms tumor, Denys-Drash

### PAX2
- **Location**: UB tip and renal vesicles
- **Function**: UB branching, nephron formation
- **Clinical**: PAX2 mutations → renal coloboma syndrome

## Clinical Correlations

### Renal Agensis

#### Bilateral Renal Agenesis
- **Incidence**: 1 in 10,000
- **Features**: Oligohydramnios (no fetal urine), Potter facies, pulmonary hypoplasia
- **Prognosis**: Fatal (no renal function)
- **Recurrence**: Autosomal recessive

#### Unilateral Renal Agenesis
- **Incidence**: 1 in 1,000
- **Clinical**: Often asymptomatic, solitary kidney hypertrophies
- **Associated**: VUR, genital anomalies

### Urinary Tract Obstruction

#### Ureteropelvic Junction (UPJ) Obstruction
- **Location**: Junction of renal pelvis and ureter
- **Pathology**: Intrinsic narrowing or crossing vessel
- **Clinical**: Hydronephrosis, may require pyeloplasty

#### Posterior Urethral Valves
- **Sex**: Males only
- **Pathology**: Membranes in prostatic urethra
- **Clinical**: Bladder outlet obstruction, hydroureter, hydronephrosis, renal dysplasia
- **Diagnosis**: Prenatal ultrasound, voiding cystourethrogram

### Vesicoureteral Reflux

### Grading System
| Grade | Description |
|-------|-------------|
| I | Ureter only, no dilation |
| II | Ureter + pelvis + calyces, no dilation |
| III | Mild/moderate dilation |
| IV | Moderate dilation, forniceal blunting |
| V | Severe dilation with loss of papillary impressions |

### Congenital Renal Cysts
- **Multicystic dysplastic kidney**: Non-functional, multiple cysts
- **Autosomal recessive PKD**: Perinatal, large kidneys
- **Autosomal dominant PKD**: Adult, multiple bilateral cysts
      `,
      flashcards: [
        {
          id: 'ren1-int',
          front: 'What are the two interacting components that form the metanephric kidney?',
          back: 'Ureteric bud (forms collecting system) and metanephric mesenchyme (forms nephrons). Their interaction through reciprocal induction creates the kidney.'
        },
        {
          id: 'ren2-int',
          front: 'What is the role of the RET/GDNF signaling pathway in kidney development?',
          back: 'Metanephric mesenchyme produces GDNF which binds RET receptor on ureteric bud, stimulating outgrowth and branching morphogenesis.'
        },
        {
          id: 'ren3-int',
          front: 'What is the urachus?',
          back: 'Remnant of the allantois, becoming the median umbilical ligament connecting bladder to umbilicus. Can cause urachal cysts/sinus/fistula if patent.'
        },
        {
          id: 'ren4-int',
          front: 'What is the difference between multicystic dysplastic kidney (MCDK) and polycystic kidney disease (PKD)?',
          back: 'MCDK: Non-functional kidney with random cysts, unilateral usually. PKD: Bilateral, inherited, functional parenchyma between cysts.'
        },
        {
          id: 'ren5-int',
          front: 'What is Potter sequence?',
          back: 'Oligohydramnios due to bilateral renal agenesis or urinary obstruction → fetal compression → Potter facies, limb deformities, pulmonary hypoplasia, death.'
        },
        {
          id: 'ren6-int',
          front: 'What genes are critical for ureteric bud outgrowth and branching?',
          back: 'RET (receptor) and GDNF (ligand) are essential. WT1 and PAX2 also critical - WT1 in mesenchyme, PAX2 in UB tips.'
        }
      ],
      quiz: [
        {
          id: 'q1-int',
          question: 'Which signaling pathway is essential for ureteric bud outgrowth and branching?',
          options: ['WNT signaling', 'RET/GDNF signaling', 'SHH signaling', 'BMP signaling'],
          correctAnswer: 1,
          explanation: 'RET/GDNF signaling is essential. The metanephric mesenchyme produces GDNF which binds the RET receptor on the ureteric bud.'
        },
        {
          id: 'q2-int',
          question: 'What structure connects the bladder to the umbilicus in the fetus?',
          options: ['Mesonephric duct', 'Allantois (urachus)', 'Urogenital sinus', 'Cloaca'],
          correctAnswer: 1,
          explanation: 'The allantois connects the bladder to the umbilicus for urine drainage. It becomes the urachus (median umbilical ligament) after birth.'
        },
        {
          id: 'q3-int',
          question: 'What is Potter sequence?',
          options: ['Genetic kidney disorder', 'Consequences of oligohydramnios from renal agenesis', 'Type of polycystic kidney disease', 'Vesicoureteral reflux grading'],
          correctAnswer: 1,
          explanation: 'Potter sequence describes the consequences of oligohydramnios due to bilateral renal agenesis or obstruction, causing Potter facies, limb deformities, and pulmonary hypoplasia.'
        },
        {
          id: 'q4-int',
          question: 'Posterior urethral valves occur in:',
          options: ['Both sexes equally', 'Males only', 'Females only', 'Neither sex'],
          correctAnswer: 1,
          explanation: 'Posterior urethral valves occur only in males, caused by mucosal folds in the prostatic urethra that obstruct urine outflow.'
        },
        {
          id: 'q5-int',
          question: 'What congenital anomaly is characterized by non-functioning kidney with multiple cysts?',
          options: ['Autosomal dominant PKD', 'Multicystic dysplastic kidney', 'Wilms tumor', 'Renal agenesis'],
          correctAnswer: 1,
          explanation: 'Multicystic dysplastic kidney (MCDK) is a non-functioning kidney characterized by multiple cysts and no functional renal parenchyma.'
        }
      ]
    },
    advanced: {
      title: 'Advanced Renal Embryology',
      description: 'Molecular regulation and congenital disorders',
      content: `
# Advanced Renal Embryology

## Molecular Genetics of Kidney Development

### Transcription Factor Networks

### Early Kidney Specification
\`\`\`
Intermediate mesoderm
    ↓
OSR1, WT1, PAX2/8 expression
    ↓
Metanephric mesenchyme competence
    ↓
GDNF production → ureteric bud attraction
\`\`\`

### WT1 (Wilms Tumor 1)
- **Isoforms**: +KTS and -KTS alternative splicing
- **Function**: Mesenchymal survival, GDNF production
- **Targets**: GDNF, EYA1, PAX2
- **Clinical**:
  - Germline mutations → Wilms tumor
  - Denys-Drash syndrome (WT1 + diffuse mesangial sclerosis)
  - Frasier syndrome (WT1 + gonadal dysgenesis)

### PAX2
- **Function**: UB branching, nephron formation
- **Targets**: RET, GDNF, WNT11
- **Clinical**: Renal-coloboma syndrome (optic nerve coloboma + renal hypoplasia)

### EYA1 and SIX
- **EYA1**: Co-activator with SIX proteins
- **SIX1**: Transcription factor for UB branching
- **Clinical**: Branchio-oto-renal syndrome (branchial cysts, ear anomalies, renal dysplasia)

## Nephron Progenitor Biology

### Cap Mesenchyme

### Self-Renewing Nephron Progenitors
- **Location**: Around ureteric bud tips
- **Markers**: SIX2, CITED1, WT1, SALL1
- **Function**: Continuous nephron production
- **Balance**: Self-renewal vs. differentiation

### Molecular Regulation
\`\`\`
SIX2 + SALL1 + WT1 (maintenance)
    +
WNT9b (from UB) + FGF9 (mesenchyme)
    ↓
CITED1+ progenitor pool maintained
    ↓
WNT4 triggers differentiation
\`\`\`

### Nephron Segmentation

### Pattern Formation
\`\`\`
Renal vesicle (SIX2+, WT1+)
    ↓
Comma-shaped body
    ↓
S-shaped body
    ↓
Segmentation:
├── Podocytes (WT1+, PODXL+, NEPHRIN)
├── Proximal tubule (CADHERIN6, HNF4α)
├── Loop of Henle (SLC12A1, UMOD)
└── Distal tubule (PAX2, GATA3, E-cadherin)
\`\`\`

### Stop Signal
- **Final nephron number**: ~1 million per kidney
- **Cessation**: ~36 weeks gestation (no postnatal nephrogenesis)
- **Clinical**: Low birth weight → fewer nephrons → adult hypertension

## Collecting Duct Development

### Principal vs Intercalated Cells

### Cell Type Differentiation
| Cell Type | Function | Markers |
|-----------|----------|---------|
| Principal cell | Sodium reabsorption, K+ secretion | AQP2, ENaC, ROMK |
| Type A intercalated | Acid secretion (H+) | H+-ATPase, AE1 |
| Type B intercalated | Bicarbonate secretion | Pendrin |

### ENaC Regulation
- **Structure**: α, β, γ subunits
- **Regulation**: Aldosterone, vasopressin
- **Clinical**: Liddle syndrome (gain of function), pseudohypoaldosteronism (loss of function)

## CAKUT (Congenital Anomalies of Kidney and Urinary Tract)

### Classification

### Renal Anomalies
- **Agenesis**: Unilateral or bilateral
- **Hypoplasia**: Small kidney with normal architecture
- **Dysplasia**: Abnormal tissue, cysts, disorganized
- **Multicystic dysplastic kidney**: Non-functional, cystic

### Ureteral Anomalies
- **Duplication**: Complete or partial
- **Ectopic ureter**: Inserts elsewhere in bladder
- **Ureterocele**: Ballooning of distal ureter
- **Megaureter**: Dilated ureter, reflux or obstruction

### Bladder Anomalies
- **Exstrophy**: Anterior bladder wall defect
- **Prune belly syndrome**: Absent abdominal muscles, bladder dilation
- **Diverticula**: Outpouchings

### Urethral Anomalies
- **Posterior valves**: Male, obstructive
- **Anterior valves**: Rare, obstructive
- **Diverticula**: Sac-like outpouchings

### Genetic Basis

### Single Gene Disorders
| Gene | Syndrome | Features |
|------|----------|----------|
| RET | Hirschsprung, CAKUT | Renal agenesis, VUR |
| PAX2 | Renal-coloboma | Hypoplasia, coloboma |
| EYA1 | Branchio-oto-renal | Dysplasia, branchial cysts |
| SALL1 | Townes-Brocks | Dysplasia, imperforate anus |
| HNF1β | Renal cysts and diabetes | Cysts, genital tract anomalies |

### Complex Inheritance
- **Most CAKUT**: Multifactorial
- **Recurrence risk**: 10-15% for siblings
- **Variable expression**: Same gene, different severity

## Molecular Diagnosis

### Prenatal Testing

### Ultrasound Markers
- **Renal size**: Agenesis, hypoplasia
- **Cysts**: PKD, MCDK
- **Hydronephrosis**: Obstruction, reflux
- **Amniotic fluid**: Oligohydramnios (renal dysfunction)
- **Bladder**: Megacystis, exstrophy

### Genetic Testing Strategy
- **Isolated anomaly**: Chromosomal microarray first
- **Multiple anomalies**: Exome sequencing
- **Family history**: Targeted testing
- **Prenatal counseling**: Discuss recurrence, prognosis

## Pediatric Renal Disease

### Congenital Nephrotic Syndrome

### Finnish Type (NPHS1)
- **Gene**: NPHS1 (nephrin)
- **Pathology**: Slit diaphragm defect
- **Clinical**: Massive proteinuria from birth
- **Treatment**: Nephrectomy, transplant

### Diffuse Mesangial Sclerosis (WT1)
- **Gene**: WT1 mutations
- **Syndrome**: Denys-Drash or Frasier
- **Clinical**: Nephrotic syndrome, genital anomalies, Wilms tumor

### Renal Cystic Diseases

### Autosomal Recessive PKD
- **Gene**: PKHD1 (fibrocystin)
- **Onset**: Perinatal
- **Features**: Enlarged echogenic kidneys, oligohydramnios, pulmonary hypoplasia
- **Prognosis**: Often fatal in neonatal period

### Autosomal Dominant PKD
- **Genes**: PKD1 (polycystin-1), PKD2 (polycystin-2)
- **Onset**: Adult (usually)
- **Features**: Multiple bilateral cysts, hypertension, renal failure
- **Mechanism**: Cilia dysfunction (primary cilia!)

### Nephronophthisis
- **Genes**: NPHP1-20 (all encode ciliary proteins)
- **Onset**: Childhood-adolescence
- **Features**: Medullary cysts, tubulointerstitial nephritis
- **Extrarenal**: Retinal degeneration (Senior-Løken), cerebellar vermis hypoplasia (Joubert)

## Cystic Kidney Disease Mechanisms

### Primary Cilia and Ciliopathies

### Cilia Structure
\`\`\`
Basal body (microtubule organizing center)
    ↓
Axoneme (9+2 microtubule doublets)
    ↓
Ciliary membrane (unique composition)
\`\`\`

### Polycystin Function
- **PC1 (PKD1)**: Mechanosensor, cell-cell adhesion
- **PC2 (PKD2)**: Calcium channel (TRP family)
- **Complex**: PC1 + PC2 at primary cilium
- **Function**: Sense fluid flow, regulate calcium signaling

### Cilia Dysfunction → Cystogenesis
1. **Ciliary defect**: Loss of flow sensing
2. **Calcium signaling**: Decreased intracellular calcium
3. **cAMP**: Increased (opposite of calcium)
4. **Proliferation**: Stimulated by cAMP
5. **Fluid secretion**: Driven by CFTR
6. **Cyst expansion**: Proliferation + secretion

## Molecular Therapeutics

### Targeted Therapies

### ADPKD (Tolvaptan)
- **Target**: V2 receptor (vasopressin)
- **Mechanism**: Reduce cAMP production
- **Effect**: Slower cyst growth, eGFR decline
- **Adverse**: Polydipsia, polyuria, hepatotoxicity

### Other Approaches
- **Somatostatin analogs**: Reduce cAMP
- **mTOR inhibitors**: Anti-proliferative (limited benefit)
- **Triptolide**: Inhibits cyst growth (experimental)
- **CFTR inhibitors**: Reduce fluid secretion (experimental)

### Future Directions
- **Gene therapy**: AAV delivery of PC1/PC2
- **Read-through compounds**: For nonsense mutations
- **Stem cell**: Nephron regeneration (future)
- **Xenotransplantation**: Pig kidneys (future)

## Biomarkers

### Prenatal/Neonatal
- **Amniotic fluid**: Volume reflects fetal urine output
- **β2-microglobulin**: Fetal renal function
- **Cystatin C**: GFR estimation

### Pediatric/Adult
- **Proteinuria**: Glomerular damage
- **NGAL**: Acute kidney injury
- **KIM-1**: Proximal tubule injury
- **MicroRNAs**: Emerging biomarkers
      `,
      flashcards: [
        {
          id: 'ren1-adv',
          front: 'What is the cap mesenchyme?',
          back: 'Self-renewing nephron progenitor cells (SIX2+, CITED1+, WT1+, SALL1+) surrounding ureteric bud tips. Give rise to all nephron epithelia until ~36 weeks.'
        },
        {
          id: 'ren2-adv',
          front: 'What genes are mutated in autosomal dominant polycystic kidney disease?',
          back: 'PKD1 (polycystin-1) or PKD2 (polycystin-2). Both encode proteins at primary cilium that function as mechanosensors and calcium channels.'
        },
        {
          id: 'ren3-adv',
          front: 'What is the mechanism of action of tolvaptan in ADPKD?',
          back: 'V2 receptor antagonist reduces vasopressin-stimulated cAMP production in collecting duct cells, slowing cyst growth and GFR decline.'
        },
        {
          id: 'ren4-adv',
          front: 'What is congenital nephrotic syndrome of the Finnish type?',
          back: 'NPHS1 mutation (nephrin). Causes massive proteinuria from birth due to defective slit diaphragm. Requires nephrectomy and transplant.'
        },
        {
          id: 'ren5-adv',
          front: 'What is CAKUT?',
          back: 'Congenital Anomalies of Kidney and Urinary Tract. Includes renal agenesis, hypoplasia, dysplasia, hydronephrosis, reflux, ureteropelvic obstruction. Most common cause of pediatric ESRD.'
        },
        {
          id: 'ren6-adv',
          front: 'Why are low birth weight infants at risk for adult hypertension?',
          back: 'Fewer nephrons formed during nephrogenesis (<36 weeks). Fewer nephrons → hyperfiltration of remaining nephrons → glomerulosclerosis → hypertension.'
        }
      ],
      quiz: [
        {
          id: 'q1-adv',
          question: 'What cell type maintains the nephron progenitor pool?',
          options: ['Podocytes', 'Principal cells', 'Cap mesenchyme (SIX2+ cells)', 'Intercalated cells'],
          correctAnswer: 2,
          explanation: 'Cap mesenchyme cells (SIX2+, CITED1+, WT1+, SALL1+) around ureteric bud tips are self-renewing nephron progenitors.'
        },
        {
          id: 'q2-adv',
          question: 'Which genes are mutated in autosomal dominant polycystic kidney disease?',
          options: ['PKHD1', 'PKD1/PKD2', 'NPHP1', 'NPHS1'],
          correctAnswer: 1,
          explanation: 'ADPKD is caused by mutations in PKD1 (polycystin-1) or PKD2 (polycystin-2), which encode proteins localized to the primary cilium.'
        },
        {
          id: 'q3-adv',
          question: 'What is the mechanism of action of tolvaptan in ADPKD?',
          options: ['Calcium channel blocker', 'V2 receptor antagonist', 'ACE inhibitor', 'mTOR inhibitor'],
          correctAnswer: 1,
          explanation: 'Tolvaptan is a V2 receptor antagonist that reduces vasopressin-stimulated cAMP production, slowing cyst growth and GFR decline in ADPKD.'
        },
        {
          id: 'q4-adv',
          question: 'What is the significance of primary cilia in kidney disease?',
          options: ['They produce urine', 'They are flow sensors, dysfunction causes cystic diseases (ciliopathies)', 'They filter blood', 'They produce hormones'],
          correctAnswer: 1,
          explanation: 'Primary cilia on renal epithelial cells act as flow sensors. Dysfunction causes cystic kidney diseases (ciliopathies) like ADPKD, ARPKD, and nephronophthisis.'
        },
        {
          id: 'q5-adv',
          question: 'What is the nephrogenesis window in humans?',
          options: ['Until birth', 'Until 1 month postpartum', 'Until ~36 weeks gestation', 'Throughout childhood'],
          correctAnswer: 2,
          explanation: 'Nephrogenesis (formation of new nephrons) stops at ~36 weeks gestation in humans. No new nephrons form after birth, explaining why low birth weight correlates with adult kidney disease.'
        }
      ]
    },
    expert: {
      title: 'Expert-Level Renal Embryology',
      description: 'Molecular mechanisms and cutting-edge research',
      content: `
# Expert-Level Renal Embryology

## Single-Cell Transcriptomics

### Cellular Atlas of Kidney Development

### Nephron Progenitor Trajectory
\`\`\`
Cap mesenchyme (SIX2+, CITED1+)
    ├── Self-renewal (WT1, SALL1, Lhx1)
    └── Differentiation (WNT4, FGF8, Notch)
        ↓
Renal vesicle (WT1, PAX2, LHX1)
    ↓
Comma-shaped body (WT1, PAX2)
    ↓
S-shaped body
    ├── Podocytes (WT1, SYNAPTOPODIN, PODXL)
    ├── Proximal tubule (SLC5A2, CYP27B1)
    ├── Loop of Henle (UMOD, SLC12A1)
    └── Distal tubule (SLC12A3, PAX2)
\`\`\`

### Collecting Duct Cell Types
- **Principal cells**: AQP2, SCNN1 (ENaC), KCNJ1 (ROMK)
- **Type A intercalated**: ATP6V0A4, SLC4A1 (AE1)
- **Type B intercalated**: SLC26A4 (pendrin)
- **Intercalated (non-A/non-B)**: SLC4A9
- **Urine concentrating cells**: AQP3, AQP4

### Endothelial Diversity
- **Glomerular endothelial**: PLVAP, PODXL, highly fenestrated
- **Peritubular capillary**: PLVAP, fenestrated
- **Vasa recta**: Less fenestrated, countercurrent exchange
- **Lymphatic**: LYVE1, PROX1 (minimal in cortex)

## Epigenetic Regulation

### Chromatin Accessibility

### Enhancer Landscape
\`\`\`
Developmental stage-specific enhancers
    ↓
ATAC-seq reveals accessible chromatin
    ↓
H3K27ac marks active enhancers
    ↓
TF binding (SIX2, WT1, HNF1β)
    ↓
Target gene activation
\`\`\`

### DNA Methylation Dynamics
- **Early nephron progenitors**: Hypomethylated, pluripotent
- **Differentiating nephrons**: Progressive methylation at lineage-specific genes
- **Terminal differentiation**: Hypermethylation of pluripotency genes

### Histone Modifications in Nephrogenesis
| Modification | Location | Function |
|--------------|----------|----------|
| H3K4me3 | Promoters | Active transcription |
| H3K27me3 | Polycomb targets | Repression of alternative lineages |
| H3K27ac | Enhancers | Active regulatory elements |
| H3K4me1 | Poised enhancers | Developmental priming |

### Non-Coding RNAs

### microRNAs in Kidney Development
| miRNA | Function | Target |
|-------|----------|--------|
| miR-17~92 | Nephron progenitor proliferation | p21, PTEN, BIM |
| miR-192 | Proximal tubule differentiation | ZEB2 |
| miR-200 | Podocyte differentiation | ZEB1/2 |
| miR-30 | Podocyte health | Notch1 |

### Long Non-Coding RNAs
- **H19**: Imprinted, regulates Igf2
- **Mirc1**: Hosts miR-17~92 cluster
- **LncRNA-1777**: Regulates Wnt signaling in UB
- **PAX2-AS**: Natural antisense to PAX2

## Stem Cells and Regeneration

### Adult Kidney Stem Cells

### Controversial Existence
- **Traditional view**: No stem cells in adult kidney
- **Proposed candidates**:
  - Papillary stem cells (CD133+, CD24+)
  - Parietal epithelial cells (PECs)
  - Proximal tubule dedifferentiation (after injury)

### Injury Response
\`\`\`
Acute kidney injury
    ↓
Dedifferentiation of surviving tubular cells
    ↓
Cell cycle re-entry (Sox9, Lhx1, Pax2 re-expression)
    ↓
Migration, proliferation
    ↓
Redifferentiation
\`\`\`

### Organoid Models

### Kidney Organoids from hPSCs
\`\`\`
hPSCs (embryonic or induced)
    ↓
Primitive streak (Activin A, CHIR)
    ↓
Intermediate mesoderm (CHIR, FGF9)
    ↓
Metanephric mesenchyme (FGF9, RA inhibition)
    ↓
3D culture + WNT activation
    ↓
Nephron structures
\`\`\`

### Applications
- **Disease modeling**: PKD, congenital nephrotic syndrome
- **Drug screening**: Nephrotoxicity testing
- **Regeneration**: Future cell therapy
- **Limitations**: No vasculature, limited maturation

## Ciliopathies

### Primary Cilia Biology

### Ciliogenesis
\`\`\`
Basal body formation (centrosome)
    ↓
Axoneme elongation (IFT particles)
    ↓
Transition zone gate
    ↓
Ciliary membrane localization
    ↓
Functional cilium
\`\`\`

### Intraflagellar Transport (IFT)
- **Kinesin-2**: Anterograde (base to tip)
- **Dynein-2**: Retrograde (tip to base)
- **IFT particles**: Protein complexes (IFT-A, IFT-B)
- **Cargo**: Membrane proteins, signaling molecules

### Ciliary Signaling Pathways
- **Polycystins**: Mechanosensation, calcium signaling
- **Hedgehog**: GLI transcription factors (cilia-dependent)
- **PDGFRα**: Platelet-derived growth factor signaling
- **Wnt**: Planar cell polarity (convergent extension)

### Ciliopathy Spectrum
| Disorder | Gene(s) | Kidney Features | Extrarenal |
|----------|---------|-----------------|------------|
| ADPKD | PKD1/2 | Cysts | Liver cysts, aneurysms |
| ARPKD | PKHD1 | Enlarged cystic kidneys | Liver fibrosis |
| Nephronophthisis | NPHP1-20 | Medullary cysts | Retinal degeneration |
| Bardet-Biedl | BBS1-21 | Cysts, dysplasia | Obesity, retinal degeneration, polydactyly |
| Joubert | AHI1, CEP290 | Cysts, dysplasia | Cerebellar vermis hypoplasia |
| Meckel-Gruber | MKS1-12 | Cysts, dysplasia | Encephalocele, polydactyly |
| Oral-facial-digital | OFD1 | Cysts | Oral, facial, digital anomalies |

## Gene Editing and Therapy

### CRISPR Applications

### Kidney Organoid Gene Correction
\`\`\`
Patient iPSCs (disease mutation)
    ↓
CRISPR-Cas9 gene editing
    ↓
Corrected iPSCs
    ↓
Kidney organoid differentiation
    ↓
Disease model + isogenic control
\`\`\`

### In Vivo Gene Editing
- **AAV vectors**: Kidney tropism (AAV9, AAV2)
- **CRISPR-Cas9**: PKD1/2 editing (preclinical)
- **Base editing**: Point mutation correction
- **Prime editing**: Flexible editing without DSBs

### Challenges
- **Delivery**: Efficient kidney targeting
- **Off-target**: Unintended edits
- **Immune response**: To Cas9, AAV
- **Mosaicism**: Incomplete editing

## Computational Modeling

### Kidney Development Simulation

### Branching Morphogenesis Models
- **Rule-based**: UB branching algorithms
- **Mechanical**: Forces, tissue properties
- **Reaction-diffusion**: GDNF gradient formation
- **Integration**: Multi-scale modeling

### Nephron Formation
- **Cellular Potts model**: Individual cell behavior
- **Gene regulatory network**: SIX2, WNT, FGF, BMP integration
- **Predictive**: Simulating knockout phenotypes

## Clinical Translation

### Biomarker Development

### Novel Biomarkers
| Biomarker | Source | Clinical Use |
|-----------|--------|---------------|
| NGAL | Tubule cells | AKI detection |
| KIM-1 | Proximal tubule | AKI, CKD prognosis |
| L-FABP | Proximal tubule | CKD progression |
| Cystatin C | All nucleated cells | GFR estimation |
| uMCP-1 | Interstitial cells | Lupus nephritis activity |
| miR-21 | Urine | Fibrosis progression |

### Precision Medicine

### Pharmacogenomics
- **ACE inhibitors/ARBs**: Gene variants affecting response
- **CNI dosing**: CYP3A5 polymorphisms (transplant)
- **Steroid resistance**: Genetic predictors (nephrotic syndrome)

### Gene-Specific Therapies
- **NPHS1**: Read-through compounds (nonsense mutations)
- **COL4A5 (Alport)**: RNA therapy, chaperone molecules
- **PKD1/2**: Tolvaptan (approved), gene therapy (trial)

## Future Horizons

### Bioengineering
- **Decellularized kidney scaffolds**: Native ECM structure
- **3D bioprinting**: Patient-specific constructs
- **Vascularization**: Perfusion bioreactors
- **Innervation**: Functional integration

### Xenotransplantation
- **Pig kidneys**: CRISPR-edited (xenoantigen removal)
- **Preclinical**: Non-human primate studies
- **Challenges**: Immune rejection, zoonosis, ethics

### In Utero Therapy
- **Fetal intervention**: For lower urinary tract obstruction
- **Stem cell**: Fetal kidney regeneration
- **Gene therapy**: Early intervention advantages

## Conclusion

Expert-level understanding of renal embryology requires integration of:
- **Molecular genetics**: From single gene to polygenic disorders
- **Cell biology**: Progenitors, differentiation, regeneration
- **Systems biology**: Multi-omics, computational modeling
- **Clinical medicine**: From prenatal diagnosis to adult disease
- **Therapeutics**: Gene therapy, stem cells, precision medicine
- **Ethics**: Gene editing, xenotransplantation, fetal therapy

The developing kidney is a model of branching morphogenesis, nephron formation, and stem cell biology. Understanding its development is essential for advancing treatment of kidney diseases throughout life.
      `,
      flashcards: [
        {
          id: 'ren1-exp',
          front: 'What are SIX2+ cells in the developing kidney?',
          back: 'Cap mesenchyme cells - self-renewing nephron progenitors that surround ureteric bud tips and give rise to all nephron epithelia until ~36 weeks.'
        },
        {
          id: 'ren2-exp',
          front: 'What is the mechanism of cyst formation in ADPKD?',
          back: 'Primary cilia dysfunction (PC1/2) → impaired flow sensing → decreased intracellular calcium → increased cAMP → cellular proliferation and fluid secretion → cyst expansion.'
        },
        {
          id: 'ren3-exp',
          front: 'What is nephronophthisis?',
          back: 'Autosomal recessive medullary cystic kidney disease caused by mutations in NPHP genes (1-20) encoding ciliary proteins. Associated with retinal degeneration (Senior-Løken), cerebellar vermis hypoplasia (Joubert).'
        },
        {
          id: 'ren4-exp',
          front: 'What is the current approach to generating kidney organoids from hPSCs?',
          back: 'hPSCs → Primitive streak (Activin A, CHIR) → Intermediate mesoderm (CHIR, FGF9) → Metanephric mesenchyme (FGF9) → 3D culture + WNT activation → Nephron structures.'
        },
        {
          id: 'ren5-exp',
          front: 'What biomarkers are used for early AKI detection?',
          back: 'NGAL (neutrophil gelatinase-associated lipocalin), KIM-1 (kidney injury molecule-1), L-FABP (liver-type fatty acid binding protein), Cystatin C.'
        }
      ],
      quiz: [
        {
          id: 'q1-exp',
          question: 'What is the mechanism of cystogenesis in ADPKD?',
          options: ['Uncontrolled cell division only', 'Primary cilia dysfunction → decreased Ca2+ → increased cAMP → proliferation + secretion', 'Obstruction of urine flow', 'Immune-mediated damage'],
          correctAnswer: 1,
          explanation: 'Polycystin dysfunction at primary cilia impairs flow sensing, decreasing intracellular calcium and increasing cAMP, which drives cellular proliferation and fluid secretion leading to cyst formation.'
        },
        {
          id: 'q2-exp',
          question: 'What genes are mutated in nephronophthisis?',
          options: ['PKD1/PKD2', 'NPHP genes (NPHP1-20)', 'PKHD1', 'NPHS1'],
          correctAnswer: 1,
          explanation: 'Nephronophthisis is caused by mutations in NPHP genes (1-20 identified), all encoding proteins involved in primary cilium function.'
        },
        {
          id: 'q3-exp',
          question: 'What is the purpose of using CHIR99021 during kidney organoid differentiation?',
          options: ['Inhibit WNT signaling', 'Activate WNT signaling (GSK3 inhibitor)', 'Induce apoptosis', 'Promote neuronal differentiation'],
          correctAnswer: 1,
          explanation: 'CHIR99021 is a GSK3 inhibitor that activates WNT/β-catenin signaling, essential for specifying intermediate mesoderm and kidney progenitors.'
        },
        {
          id: 'q4-exp',
          question: 'Which biomarker is most specific for proximal tubule injury?',
          options: ['NGAL', 'KIM-1', 'Cystatin C', 'Creatinine'],
          correctAnswer: 1,
          explanation: 'KIM-1 (Kidney Injury Molecule-1) is highly specific for proximal tubule injury, being expressed in dedifferentiated proximal tubule cells after AKI.'
        },
        {
          id: 'q5-exp',
          question: 'What is the relationship between low birth weight and adult hypertension?',
          options: ['No relationship', 'Fewer nephrons → hyperfiltration → glomerulosclerosis → hypertension', 'Direct genetic link', 'Coincidental'],
          correctAnswer: 1,
          explanation: 'Low birth weight is associated with fewer nephrons because nephrogenesis stops at ~36 weeks. Fewer nephrons cause hyperfiltration of remaining nephrons, leading to glomerulosclerosis and hypertension in adulthood.'
        }
      ]
    },
    master: {
      title: 'Mastering Renal Embryology',
      description: 'Complete understanding from basics to research frontiers',
      content: `
# Mastering Renal Embryology

## Clinical Decision-Making

## Prenatal Assessment

### Ultrasound Findings

### Renal Abnormalities
| Finding | Significance | Next Steps |
|----------|--------------|------------|
| Bilateral renal agenesis | Fatal (Potter) | Confirm, discuss |
| Unilateral agenesis | Good prognosis | Monitor other kidney |
| MCDK | Non-functional | Observe vs. nephrectomy |
| Hydronephrosis | Obstruction or reflux | Grade, follow-up |
| Cysts | PKD vs. MCDK | Genetic testing |
| Megacystis | Bladder outlet obstruction | Evaluate for PUV |

### Amniotic Fluid Assessment
- **Normal**: 5-25 cm deepest pocket
- **Oligohydramnios**: Renal dysfunction, rupture
- **Anhydramnios**: Severe renal compromise (fatal)
- **Polyhydramnios**: Good urine output (rule obstruction)

### Genetic Testing

### Indications for Testing
- **Bilateral renal anomalies**: Chromosomal microarray
- **Syndromic features**: Exome sequencing
- **Family history**: Targeted single gene testing
- **Consanguinity**: AR conditions (ARPKD, NPHP)

### Postnatal Management

### Initial Evaluation
- **Renal ultrasound**: Confirm anatomy
- **VCUG**: Evaluate for reflux (if hydronephrosis)
- **Serum creatinine**: Baseline renal function
- **Urine studies**: Infection, proteinuria
- **Blood pressure**: Baseline, follow

### Surgical Timing
| Condition | Timing | Indication |
|-----------|--------|------------|
| UPJ obstruction | Symptomatic or worsening hydronephrosis | Pyeloplasty |
| PUV | Immediately after diagnosis | Ablation |
| Reflux | Medical first; surgery if breakthrough infections | Ureteral reimplant |
| MCDK | Observation; nephrectomy if symptomatic | Laparoscopic |

## Long-Term Follow-Up

### CAKUT Progression
- **Renal agenesis**: Compensatory hypertrophy, monitor function
- **VUR**: Spontaneous resolution (lower grades)
- **Obstruction**: Progressive damage if untreated
- **Dysplasia**: Non-progressive but reduced reserve

### Transition to Adult Care
- **Renal function**: eGFR, proteinuria
- **Blood pressure**: Hypertension risk
- **Pregnancy counseling**: Preeclampsia risk
- **Genetic counseling**: Recurrence risk for offspring

## Systems Integration

### Cardio-Renal Connection

### Renin-Angiotensin System Development
- **Kidney**: Renin production (juxtaglomerular cells)
- **Lung**: ACE (angiotensin converting enzyme)
- **Adrenal**: Aldosterone production
- **Development**: Fetal RAS hyperactive, suppressed at birth

### Clinical Implications
- **ACE inhibitors**: Contraindicated in pregnancy (renal dysgenesis)
- **ARBs**: Same contraindication
- **Prenatal exposure**: Renal anomalies, oligohydramnios

### Uro-Gynecologic Considerations

### Female Reproductive Tract
- **Müllerian ducts**: Regress under male influence
- **Maldescent kidney:**
  - Pelvic kidney (common)
  - "Cake" or "pancake" kidney (fusion)
  - "Disc" kidney (complete medial fusion)
  - "L" kidney (one vertical, other horizontal)
  - "S" kidney (superior/inferior)

### Genetic Counseling

### Recurrence Risks
| Condition | Inheritance | Recurrence |
|-----------|-------------|------------|
| Renal agenesis (bilateral) | AR | 25% (carrier × carrier) |
| Unilateral agenesis | Multifactorial | 1-2% |
| ADPKD | AD | 50% (affected parent) |
| ARPKD | AR | 25% |
| Reflux | Multifactorial | 10-15% |
| PUV | Sporadic (male) | Low recurrence |

### Prenatal Diagnosis
- **Known familial mutation**: CVS or amniocentesis
- **Structural finding**: Detailed ultrasound, fetal MRI
- **Counseling**: Discuss range of outcomes

## Research Frontiers

### Stem Cell Therapy

### Acute Kidney Injury
- **MSCs**: Paracrine effects, anti-inflammatory
- **ESC/iPSC-derived**: Nephron progenitors
- **Challenges**: Engraftment, functional integration

### Chronic Kidney Disease
- **Kidney organoids**: Disease modeling
- **Bioengineered kidneys**: Decellularized scaffolds
- **Xenotransplantation**: Gene-edited pigs

### Gene Therapy

### Approaches
- **AAV delivery**: Kidney tropism (AAV9, AAV2)
- **CRISPR**: PKD1/2, NPHS1 (preclinical)
- **Antisense**: Oligonucleotides for splice variants
- **Exon skipping**: For Alport syndrome

## Ethical Considerations

### Prenatal Interventions
- **Fetal surgery**: For lower urinary obstruction
- **Risk/benefit**: Maternal risk for fetal benefit
- **Informed consent**: Complex decision-making

### Gene Editing
- **Germline**: Heritable (prohibited)
- **Somatic**: Individual treatment
- **Enhancement**: Ethical concerns

### Organ Shortage
- **Dialysis**: Bridge to transplant
- **Living donors**: Ethical considerations
- **Xenotransplantation**: Animal welfare, infection risk
- **Allocation**: Justice concerns

## Conclusion

Mastering renal embryology requires:
- **Foundational knowledge**: Normal development
- **Clinical correlation**: Prenatal to adult
- **Molecular understanding**: Genes, signals, pathways
- **Systems thinking**: Multi-organ integration
- **Therapeutic awareness**: Medical to surgical
- **Research literacy**: Current and future
- **Ethical sensitivity**: Complex decisions

The developing kidney is a marvel of branching morphogenesis, stem cell biology, and developmental programming. Understanding its formation is essential for preventing and treating kidney disease throughout life.
      `,
      flashcards: [
        {
          id: 'ren1-mas',
          front: 'What is the most common congenital renal anomaly?',
          back: 'Vesicoureteral reflux (VUR), occurring in about 1% of children. More common in females, spontaneous resolution in many lower-grade cases.'
        },
        {
          id: 'ren2-mas',
          front: 'What are the VCUG indications in evaluating prenatal hydronephrosis?',
          back: 'Grade 3-4 hydronephrosis, atypical kidneys, bilateral hydronephrosis, UTI, family history of VUR, or parental preference for definitive diagnosis.'
        },
        {
          id: 'ren3-mas',
          front: 'What is the recurrence risk for bilateral renal agenesis?',
          back: 'About 25% if both parents are carriers of an autosomal recessive mutation. Requires genetic counseling and carrier testing if possible.'
        },
        {
          id: 'ren4-mas',
          front: 'What medications are contraindicated in pregnancy due to renal teratogenicity?',
          back: 'ACE inhibitors and ARBs (angiotensin receptor blockers). Can cause renal dysgenesis, oligohydramnios, fetal death, and persistent fetal circulation effects.'
        },
        {
          id: 'ren5-mas',
          front: 'What is the spontaneous resolution rate of VUR?',
          back: 'Grade I: >80%, II: ~50-60%, III: ~30-40%, IV: ~10-20%, V: ~0% (surgery typically required for higher grades).'
        }
      ],
      quiz: [
        {
          id: 'q1-mas',
          question: 'Which medication class is absolutely contraindicated in pregnancy due to risk of fetal renal dysgenesis?',
          options: ['Beta-blockers', 'ACE inhibitors/ARBs', 'Calcium channel blockers', 'Diuretics'],
          correctAnswer: 1,
          explanation: 'ACE inhibitors and ARBs are teratogenic in pregnancy, causing renal dysgenesis, oligohydramnios, fetal hypocalvaria, and death.'
        },
        {
          id: 'q2-mas',
          question: 'What is the recurrence risk for vesicoureteral reflux?',
          options: ['<1%', '5%', '10-15%', '50%'],
          correctAnswer: 2,
          explanation: 'The recurrence risk for VUR in siblings is approximately 10-15%, reflecting its multifactorial inheritance pattern.'
        },
        {
          id: 'q3-mas',
          question: 'When is VCUG indicated for evaluation of prenatal hydronephrosis?',
          options: ['All cases of hydronephrosis', 'Grade 1-2 only', 'Grade 3-4, atypical kidneys, bilateral, or UTI', 'Never in the neonatal period'],
          correctAnswer: 2,
          explanation: 'VCUG is indicated for higher-grade hydronephrosis (3-4), atypical kidney anatomy, bilateral hydronephrosis, UTI, or family history of VUR.'
        },
        {
          id: 'q4-mas',
          question: 'What is the spontaneous resolution rate of grade III VUR?',
          options: ['~10%', '~30-40%', '~70%', '~90%'],
          correctAnswer: 1,
          explanation: 'Grade III VUR has approximately 30-40% spontaneous resolution rate. Lower grades have higher resolution rates; higher grades have lower and typically require surgery.'
        },
        {
          id: 'q5-mas',
          question: 'Bilateral renal agenesis has what inheritance pattern and recurrence risk?',
          options: ['Autosomal dominant, 50%', 'Autosomal recessive, 25%', 'X-linked, 50% of males', 'Multifactorial, 1-2%'],
          correctAnswer: 1,
          explanation: 'Bilateral renal agenesis is usually autosomal recessive with a 25% recurrence risk when both parents are carriers of the same mutation.'
        }
      ]
    }
  }
};
