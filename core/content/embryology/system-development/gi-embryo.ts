import { LegacyEducationalContent } from '../../types';

export const giEmbryoContent: LegacyEducationalContent = {
  id: 'gi-embryo',
  title: 'Gastrointestinal System Development',
  category: 'Embryology',
  subcategory: 'System Development',
  description: 'The formation of the digestive tract and associated organs',
  levels: {
    1: {
      title: 'Introduction to GI Development',
      description: 'Learn how the digestive system forms',
      content: `
# Introduction to Gastrointestinal Development

## Overview

The gastrointestinal (GI) system develops from a simple tube into a complex digestive system! It begins as the **primitive gut** during week 4 and eventually forms the esophagus, stomach, intestines, and associated organs like the liver and pancreas.

## The Primitive Gut

At **week 4** of development:
- The embryo folds, creating a tube inside
- This tube is called the **primitive gut**
- It has THREE main sections:
  - **Foregut** (front part)
  - **Midgut** (middle part)
  - **Hindgut** (back part)

## What Each Part Becomes

### Foregut (Weeks 4-7)
- Esophagus
- Stomach
- First part of small intestine (duodenum)
- Liver
- Gallbladder
- Pancreas

### Midgut (Weeks 6-11)
- Most of small intestine (jejunum and ileum)
- First part of large intestine (cecum, appendix, ascending colon, part of transverse colon)

### Hindgut (Weeks 7-12)
- Rest of large intestine (transverse, descending, sigmoid colon)
- Rectum
- Upper part of anal canal

## Key Events

### Week 4: Gut Tube Forms
- Embryo folds create the gut tube
- Suspended by mesentery (supporting tissue)
- Connected to yolk sac early on

### Week 5: Stomach Begins to Form
- Starts as a simple dilation
- Rotates to its adult position
- Greater curvature (longer side) and lesser curvature (shorter side)

### Week 6-10: Intestinal Growth and Rotation
- Midgut grows rapidly and loops
- Rotates 270° (counter-clockwise)
- Returns to abdominal cavity
- Fixed in its adult position

### Week 4-8: Liver and Pancreas Develop
- Liver grows rapidly (fills much of abdomen)
- Pancreas develops from two buds
- Both connect to digestive tract

## Important Supporting Structures

### Mesentery
- **Double layer of tissue** that suspends intestines
- Contains blood vessels, nerves, lymphatics
- Some parts persist, others disappear

### Omentum
- **Greater omentum**: Fat-filled apron-like structure
- **Lesser omentum**: Connects liver to stomach
- Important for protection and blood supply

### Peritoneum
- Thin membrane lining abdominal cavity
- Covers some organs (intraperitoneal)
- Some organs are behind it (retroperitoneal)

## Common Congenital Problems

### Tracheoesophageal Fistula (TEF)
- Abnormal connection between trachea and esophagus
- Causes feeding and breathing problems
- Requires surgical repair

### Hypertrophic Pyloric Stenosis
- Muscle at stomach outlet becomes too thick
- Causes projectile vomiting
- Usually develops at 2-8 weeks of age

### Meckel's Diverticulum
- Persistent remnant of yolk sac connection
- Most common GI congenital anomaly
- Can cause bleeding or obstruction

### Intestinal Atresia
- Complete blockage of intestine
- Missing segment of intestine
- Requires surgical repair

### Hirschsprung Disease
- Missing nerve cells in part of colon
- Causes severe constipation
- Requires surgical removal of affected segment

## Key Terms to Remember

- **Foregut/Midgut/Hindgut**: The three divisions of primitive gut
- **Mesentery**: Supporting tissue with blood vessels
- **Peritoneum**: Lining of abdominal cavity
- **Omentum**: Fat-filled supportive structure
- **Atresia**: Complete blockage
- **Stenosis**: Narrowing

## Summary

GI development is a complex process:
1. **Week 4**: Primitive gut tube forms
2. **Weeks 4-7**: Foregut structures develop
3. **Weeks 6-11**: Midgut grows and rotates
4. **Weeks 7-12**: Hindgut forms
5. **Weeks 4-8**: Liver and pancreas develop
6. **Birth**: Fully functional digestive system

The gut transforms from a simple tube into a complete digestive system with specialized organs, complex blood supply, and nerves that work together to digest food!
      `,
      flashcards: [
        {
          id: 'gi1',
          front: 'What are the three divisions of the primitive gut?',
          back: 'Foregut (esophagus, stomach, duodenum, liver, pancreas), Midgut (jejunum, ileum, cecum, appendix, ascending colon), Hindgut (remaining colon, rectum).'
        },
        {
          id: 'gi2',
          front: 'How much does the midgut rotate during development?',
          back: '270° counterclockwise around the superior mesenteric artery.'
        },
        {
          id: 'gi3',
          front: 'What is Meckel\'s diverticulum?',
          back: 'A persistent remnant of the vitelline (yolk stalk) duct. It\'s the most common congenital GI anomaly and can cause bleeding or obstruction.'
        },
        {
          id: 'gi4',
          front: 'What is hypertrophic pyloric stenosis?',
          back: 'Thickening of the pyloric sphincter muscle causing gastric outlet obstruction, typically presenting at 2-8 weeks with projectile vomiting.'
        },
        {
          id: 'gi5',
          front: 'What is Hirschsprung disease?',
          back: 'Congenital absence of ganglion cells (aganglionosis) in the distal colon, causing functional obstruction and severe constipation.'
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: 'How much does the midgut rotate during development?',
          options: ['90°', '180°', '270°', '360°'],
          correctAnswer: 2,
          explanation: 'The midgut rotates 270° counterclockwise around the superior mesenteric artery during development.'
        },
        {
          id: 'q2',
          question: 'The liver and pancreas develop from which division of the primitive gut?',
          options: ['Foregut', 'Midgut', 'Hindgut', 'Neural crest'],
          correctAnswer: 0,
          explanation: 'The liver and pancreas are foregut derivatives, developing as outgrowths from the foregut endoderm.'
        },
        {
          id: 'q3',
          question: 'What is the most common congenital gastrointestinal anomaly?',
          options: ['Hypertrophic pyloric stenosis', 'Meckel\'s diverticulum', 'Hirschsprung disease', 'Intestinal atresia'],
          correctAnswer: 1,
          explanation: 'Meckel\'s diverticulum is the most common congenital GI anomaly, occurring in about 2% of the population.'
        },
        {
          id: 'q4',
          question: 'What causes Hirschsprung disease?',
          options: ['Too much muscle in the bowel wall', 'Missing nerve cells (ganglion cells) in the bowel', 'Blockage by meconium', 'Twisted intestine'],
          correctAnswer: 1,
          explanation: 'Hirschsprung disease is caused by the failure of neural crest cells to form ganglion cells in the distal colon (aganglionosis).'
        },
        {
          id: 'q5',
          question: 'What is the typical age of presentation for hypertrophic pyloric stenosis?',
          options: ['Birth', '1-2 weeks', '2-8 weeks', '6-12 months'],
          correctAnswer: 2,
          explanation: 'Hypertrophic pyloric stenosis typically presents at 2-8 weeks of age with projectile vomiting.'
        }
      ]
    },
    intermediate: {
      title: 'GI Morphogenesis',
      description: 'Detailed understanding of digestive tract formation',
      content: `
# Gastrointestinal Morphogenesis

## Foregut Development

### Esophagus Formation

#### Tracheoesophageal Separation
\`\`\`
Foregut endoderm (week 4)
    ↓
Lung bud grows ventrally
    ↓
Tracheoesophageal folds grow medially
    ↓
Tracheoesophageal septum forms (week 5-6)
    ↓
Complete separation: Trachea (anterior) + Esophagus (posterior)
\`\`\`

#### Molecular Regulation
- **SOX2**: Esophageal specification
- **NKX2-1**: Respiratory specification (mutually exclusive)
- **SHH**: Separation signaling
- **FOXF1**: Mesenchymal signaling

### Stomach Development

#### Stomach Rotation and Positioning
| Stage | Description |
|-------|-------------|
| Week 4 | Simple fusiform dilation |
| Week 5-6 | 90° clockwise rotation (viewed from above) |
| Week 7 | Greater curvature (left side, longer) |
| Week 8+ | Final adult position |

#### Curvatures
- **Greater curvature**: Left side, longer, contains omental bursa
- **Lesser curvature**: Right side, shorter, hepatogastric ligament

#### Mesenteries
- **Dorsal mesogastrium**: Greater omentum (spleen, pancreas contained)
- **Ventral mesogastrium**: Lesser omentum (liver connection)

### Liver and Biliary System

#### Hepatic Diverticulum Formation
- **Origin**: Ventral foregut endoderm (week 3-4)
- **Location**: Just distal to septum transversum
- **Divides**: Hepatic cords (cranial) and cystic duct (caudal)

#### Liver Development Stages
1. **Hepatic specification**: Endoderm responds to FGF from heart
2. **Hepatoblast proliferation**: Rapid expansion
3. **Hepatocyte differentiation**: Albumin production by week 5
4. **Hemopoiesis**: Blood cell production (weeks 6-28)
5. **Bile production**: Begins week 12

#### Biliary Tree Development
- **Gallbladder**: From cystic diverticulum
- **Cystic duct**: Connects gallbladder to common bile duct
- **Common bile duct**: Joins pancreatic duct (often)

### Pancreas Development

#### Dual Origin
| Structure | Origin | Duct System |
|-----------|--------|-------------|
| Ventral bud | Ventral foregut | Main pancreatic duct |
| Dorsal bud | Dorsal foregut | Accessory pancreatic duct |

#### Fusion Process
\`\`\`
Week 4-5: Two buds form separately
    ↓
Week 6-7: Ventral bud rotates with duodenum
    ↓
Week 7-8: Fusion of buds
    ↓
Week 8+: Single organ with dual duct system
\`\`\`

#### Molecular Regulation
- **PDX1**: Master pancreatic regulator
- **PTF1A**: Pancreas specification
- **SOX9**: Pancreatic progenitor maintenance
- **NOTCH**: Progenitor maintenance

## Midgut Development

### Midgut Loop Formation

#### Physiological Herniation
- **Week 6**: Rapid growth exceeds abdominal capacity
- **Week 6-10**: Intestines herniate into umbilical cord
- **Week 10**: Return to abdominal cavity
- **Week 11-12**: Final fixation

#### Midgut Loop Structure
- **Cranial limb**: Forms jejunum and most of ileum
- **Caudal limb**: Forms distal ileum, cecum, ascending colon
- **Vitelline duct**: Connects to yolk sac (usually obliterates)

### Intestinal Rotation

#### Rotation Stages
| Stage | Rotation | Description |
|-------|----------|-------------|
| 1 | 90° (week 6) | Herniation, cranial limb moves right, caudal left |
| 2 | 180° total (week 8) | Additional 90°, cranial now inferior |
| 3 | 270° total (week 10) | Final rotation before return |

#### Consequences of Rotation
- **Jejunum and ileum**: Central and left abdomen
- **Cecum**: Right lower quadrant
- **Ascending and descending colon**: Retroperitoneal fixation
- **Transverse colon**: Intraperitoneal with mesentery

## Hindgut Development

### Colon and Rectum Formation

#### Hindgut Derivatives
- **Distal transverse colon**: Hepatic flexure to splenic flexure
- **Descending colon**: Left side, retroperitoneal
- **Sigmoid colon**: Intraperitoneal, mesocolon
- **Rectum**: Retroperitoneal, mesorectum
- **Upper anal canal**: Hindgut endoderm

#### Mesenteries
- **Transverse mesocolon**: Attached to pancreas
- **Sigmoid mesocolon**: V-shaped attachment
- **Mesorectum**: Perirectal fat, lymphatics

### Cloaca and Anorectal Development

#### Cloacal Division
\`\`\`
Cloaca (common chamber)
    ↓
Urorectal septum descends (weeks 4-7)
    ↓
Separation into:
    ├── Urogenital sinus (anterior)
    └── Anal canal (posterior)
\`\`\`

#### Anal Canal Formation
- **Upper anal canal**: From hindgut endoderm (columnar epithelium)
- **Lower anal canal**: From ectoderm (stratified squamous)
- **Pectinate line**: Boundary between the two
- **Dentate line**: Clinical landmark (also pectinate)

## Associated Structures

### Spleen Development
- **Origin**: Mesenchymal cells (not endoderm!)
- **Location**: Left upper quadrant, dorsal mesogastrium
- **Function**: Hematopoiesis (fetal), immune (adult)
- **Ligaments**: Gastrosplenic, splenorenal (from dorsal mesogastrium)

### Peritoneum and Mesenteries

#### Intraperitoneal vs Retroperitoneal
| Intraperitoneal | Retroperitoneal |
|-----------------|-----------------|
| Stomach | Duodenum (2nd, 3rd, 4th parts) |
| Small intestine | Ascending colon |
| Transverse colon | Descending colon |
| Sigmoid colon | Pancreas |
| Liver | Kidneys, adrenal glands |
| Spleen | Aorta, IVC |

#### Mesenteries
- **Small bowel mesentery**: Fan-shaped, suspends jejunum/ileum
- **Transverse mesocolon**: Attaches transverse colon to posterior abdomen
- **Sigmoid mesocolon**: Attaches sigmoid colon
- **Mesoappendix**: Appendix mesentery

## Molecular Regulation

### Key Signaling Pathways

### SHH Pathway
- **Source**: Endoderm throughout gut tube
- **Function**: Pattern formation, proliferation
- **Target**: Mesenchymal proliferation

### BMP Pathway
- **Source**: Mesenchyme
- **Function**: Dorsal-ventral patterning
- **Targets**: Endothelial and smooth muscle differentiation

### HOX Genes
- **Function**: Cranial-caudal patterning
- **Expression**: Regional specificity
- **Clinical**: Hoxa5 knockout - lung and gut defects

### Wnt Signaling
- **Function**: Proliferation, stem cell maintenance
- **Location**: Crypt base (adult)
- **Targets**: Lgr5+ stem cells
      `,
      flashcards: [
        {
          id: 'gi1-int',
          front: 'What are the two pancreatic buds and their ducts?',
          back: 'Ventral bud (main pancreatic duct) and dorsal bud (accessory pancreatic duct). They fuse during weeks 7-8 to form a single pancreas.'
        },
        {
          id: 'gi2-int',
          front: 'What is the urorectal septum?',
          back: 'A structure that descends during weeks 4-7, dividing the cloaca into the urogenital sinus (anterior) and anal canal (posterior).'
        },
        {
          id: 'gi3-int',
          front: 'What is the pectinate/dentate line and its significance?',
          back: 'The boundary between upper anal canal (hindgut endoderm, columnar epithelium) and lower anal canal (ectoderm, stratified squamous). Important for lymphatic drainage, venous drainage, and innervation.'
        },
        {
          id: 'gi4-int',
          front: 'What is physiological umbilical herniation?',
          back: 'Normal midgut herniation into umbilical cord from weeks 6-10 due to rapid intestinal growth exceeding abdominal capacity. Returns by week 10.'
        },
        {
          id: 'gi5-int',
          front: 'What is the master pancreatic transcription factor?',
          back: 'PDX1 (pancreatic and duodenal homeobox 1) is the master regulator of pancreatic development. Required for pancreas specification and beta cell function.'
        },
        {
          id: 'gi6-int',
          front: 'Which transcription factor defines esophageal vs respiratory epithelium?',
          back: 'SOX2 marks esophageal epithelium while NKX2-1 (TTF-1) marks respiratory epithelium. Their expression domains are mutually exclusive.'
        }
      ],
      quiz: [
        {
          id: 'q1-int',
          question: 'What is the master transcription factor for pancreatic development?',
          options: ['SOX2', 'PDX1', 'NKX2-1', 'FOXF1'],
          correctAnswer: 1,
          explanation: 'PDX1 is the master regulator of pancreatic development, required for pancreas specification and continued beta cell function.'
        },
        {
          id: 'q2-int',
          question: 'The pancreas develops from how many embryonic buds?',
          options: ['One', 'Two', 'Three', 'Four'],
          correctAnswer: 1,
          explanation: 'The pancreas develops from two buds: a dorsal bud (forms most of pancreas, accessory duct) and a ventral bud (forms uncinate process, main duct).'
        },
        {
          id: 'q3-int',
          question: 'During which weeks does physiological umbilical herniation occur?',
          options: ['4-6 weeks', '6-10 weeks', '10-14 weeks', '14-18 weeks'],
          correctAnswer: 1,
          explanation: 'Physiological umbilical herniation occurs from weeks 6-10 when the midgut returns to the abdominal cavity after completing its 270° rotation.'
        },
        {
          id: 'q4-int',
          question: 'The pectinate line marks the transition between which two embryonic origins?',
          options: ['Ectoderm and mesoderm', 'Endoderm and ectoderm', 'Mesoderm and endoderm', 'Neural crest and mesoderm'],
          correctAnswer: 1,
          explanation: 'The pectinate line marks the transition from upper anal canal (hindgut endoderm) to lower anal canal (ectoderm), affecting epithelium, innervation, and drainage.'
        },
        {
          id: 'q5-int',
          question: 'Which structure divides the cloaca into urogenital sinus and anal canal?',
          options: ['Urorectal septum', 'Tracheoesophageal septum', 'Septum transversum', 'Atrioventricular septum'],
          correctAnswer: 0,
          explanation: 'The urorectal septum descends during weeks 4-7, dividing the cloaca into the urogenital sinus (anterior) and anal canal (posterior).'
        }
      ]
    },
    advanced: {
      title: 'Advanced GI Embryology',
      description: 'Molecular regulation and congenital disorders',
      content: `
# Advanced Gastrointestinal Embryology

## Molecular Regulation of Gut Development

### Anterior-Posterior Patterning

### HOX Gene Code
\`\`\`
HOX genes expressed in spatially restricted domains
    ↓
Regional identity along gut tube
    ↓
Organ-specific differentiation
\`\`\`

### Regional Specifiers
| Region | HOX Genes | Additional Factors |
|--------|-----------|-------------------|
| Esophagus | HOX4 | SOX2, BARX1 |
| Stomach | HOX5 | SOX2, BARX1 |
| Small intestine | HOX6 | CDX1, CDX2 |
| Large intestine | HOX9-13 | CDX1, CDX2 |

### CDX Genes
- **CDX1/2**: Caudal-type homeobox genes
- **Function**: Intestinal specification
- **Targets**: Mucins, digestive enzymes
- **Clinical**: CDX2 loss in colorectal cancer

## Enteric Nervous System Development

### Neural Crest Cell Migration

#### Vagal Neural Crest Journey
\`\`\`
Neural tube (hindbrain levels)
    ↓
Vagus nerve pathways
    ↓
Foregut → Midgut → Hindgut
    ↓
Wavefront colonization
    ↓
Enteric nervous system (ENS) formation
\`\`\`

#### Migration Wavefront
- **Vagal neural crest**: Colonize entire gut (cranial to caudal)
- **Sacral neural crest**: Contribute to distal hindgut and pelvic plexus
- **Timing**: Weeks 4-12 (complete colonization)
- **Speed**: ~100 μm/hour

#### ENS Patterning
- **Myenteric plexus**: Between circular and longitudinal muscle
- **Submucosal plexus**: Between mucosa and circular muscle
- **Secondary plexuses**: Deep muscular, subserosal

### Molecular Regulation of ENS Development

#### Glial-Derived Neurotrophic Factor (GDNF)
- **Source**: Gut mesenchyme
- **Receptor**: RET tyrosine kinase
- **Co-receptors**: GFRα1, NCAM
- **Function**: ENS progenitor survival, proliferation, migration
- **Clinical**: RET mutations → Hirschsprung disease

#### Endothelin-3 (EDN3) and EDNRB
- **Source**: Gut mesenchyme
- **Receptor**: EDNRB on neural crest
- **Function**: Inhibits premature differentiation
- **Clinical**: EDN3/EDNRB mutations → Hirschsprung disease

#### SOX10
- **Function**: Neural crest specification
- **Targets**: RET, EDNRB
- **Clinical**: SOX10 mutations → Waardenburg-Shah syndrome

### Hirschsprung Disease Pathogenesis

#### Aganglionosis Mechanism
\`\`\`
Neural crest migration arrest
    ↓
Aganglionic segment (usually distal)
    ↓
Persistent smooth muscle contraction
    ↓
Functional obstruction
\`\`\`

#### Associated Genes
| Gene | Inheritance | Syndrome |
|------|-------------|----------|
| RET | AD | HSCR alone or MEN2A |
| EDNRB | AR | Waardenburg-Shah |
| EDN3 | AR | Waardenburg-Shah |
| SOX10 | AD | Waardenburg IV |
| ZEB2 | AD | Mowat-Wilson |

## Gut Rotation Anomalies

### Classification

### Non-Rotation (Failure to Rotate)
- **Pathology**: Intestines do not rotate 270°
- **Arrangement**: Small intestine on right, colon on left
- **Clinical**: Usually asymptomatic unless associated with volvulus

### Malrotation
- **Pathology**: Incomplete rotation (often 90° only)
- **Arrangement**: Abnormal positioning, narrow mesenteric base
- **Risk**: Midgut volvulus
- **Emergency**: Volvulus causes bowel ischemia

### Reverse Rotation
- **Pathology**: Rotation in wrong direction
- **Arrangement**: Colon superior to duodenum, transverse colon posterior
- **Clinical**: Duodenal obstruction

### Midgut Volvulus
- **Mechanism**: Twisting of entire midgut around narrow mesenteric base
- **Consequence**: Mesenteric vascular occlusion → bowel necrosis
- **Clinical**: Bilious vomiting, abdominal distension
- **Imaging**: "Whirlpool sign" on ultrasound/CT
- **Treatment**: Emergency surgery, Ladd's procedure

## Liver Development and Disease

### Hepatoblast Lineage Specification

### Hepatocyte vs Cholangiocyte Fate
\`\`\`
Hepatoblast (bipotent)
    ├── Notch high → Cholangiocyte (bile duct)
    └── Notch low → Hepatocyte
\`\`\`

#### Molecular Determinants
- **HNF4α**: Hepatocyte differentiation
- **HNF1β**: Cholangiocyte differentiation
- **Notch signaling**: Biliary specification
- **TGFβ**: Ductal plate remodeling

### Biliary Atresia

#### Pathogenesis
- **Ductal plate malformation**: Failure of remodeling
- **Inflammatory**: Possible viral trigger
- **Fibrosis**: Progressive obliteration of bile ducts
- **Clinical**: Neonatal jaundice, acholic stools, dark urine

#### Kasai Procedure
- **Technique**: Portoenterostomy
- **Goal**: Restore bile flow
- **Timing**: Best results before 60 days
- **Outcome**: Bridge to transplantation

## Pancreas Development and Anomalies

### Pancreatic Divisum

#### Embryology
- **Normal**: Ducts fuse, main drainage through papilla
- **Divisum**: Failed fusion, dorsal duct drains separately
- **Frequency**: ~10% of population
- **Clinical**: May cause pancreatitis (controversial)

### Annular Pancreas

#### Pathogenesis
- **Ventral bud**: Abnormally splits and surrounds duodenum
- **Clinical**: Duodenal obstruction (neonatal) or pancreatitis (adult)
- **Treatment**: Bypass gastrojejunostomy

### Ectopic Pancreas
- **Location**: Stomach, duodenum, jejunum, Meckel's
- **Frequency**: ~2% autopsies
- **Clinical**: Usually asymptomatic, may cause pain/bleeding

## Anorectal Malformations

### Classification

#### High vs Low Anomalies
| Feature | High (Supralevator) | Low (Translevator) |
|---------|---------------------|-------------------|
| Level | Levator ani | Below levator |
| Fistula | Common | Variable |
| Treatment | PSARP | Perineal anoplasty |
| Prognosis | Fair-good | Good |

#### Spectrum of Anomalies
- **Imperforate anus**: No anal opening
- **Anal stenosis**: Narrow anal canal
- **Ectopic anus**: Misplaced opening
- **Rectovestibular fistula**: Female, low
- **Rectourethral fistula**: Male, usually high
- **Cloaca**: Female, common channel for urethra, vagina, rectum

### VACTERL Association
- **V**: Vertebral anomalies
- **A**: Anal atresia
- **C**: Cardiac defects
- **TE**: Tracheoesophageal fistula
- **R**: Renal anomalies
- **L**: Limb abnormalities

## Gut Barrier and Immune Development

### Epithelial Barrier Formation

#### Tight Junction Development
- **Claudins**: Tissue-specific expression
- **Occludin**: Tight junction integrity
- **ZO proteins**: Scaffolding
- **Maturation**: Postnatal, influenced by microbiota

### Gut-Associated Lymphoid Tissue (GALT)

#### Peyer's Patches Development
- **Week 11**: Begin as lymphoid aggregates
- **Week 19**: Organized follicles
- **Birth**: Functional but immature
- **Maturation**: Antigen exposure (microbiota)

## Molecular Diagnostics

### Genetic Testing for GI Malformations

### Multigene Panels
- **Hirschsprung**: RET, EDNRB, EDN3, SOX10, ZEB2
- **Biliary atresia**: Not typically genetic (acquired)
- **Anorectal malformations**: VACTERL genes, SHH, HOX genes

### Prenatal Diagnosis
- **Ultrasound**: Dilated bowel, ascites, cysts
- **Fetal MRI**: Better characterization
- **Genetic testing**: Exome sequencing for syndromic cases
      `,
      flashcards: [
        {
          id: 'gi1-adv',
          front: 'What is the genetic basis of most Hirschsprung disease cases?',
          back: 'RET gene mutations (most common), also EDNRB, EDN3, SOX10. RET is a receptor tyrosine kinase for GDNF, critical for ENS migration.'
        },
        {
          id: 'gi2-adv',
          front: 'What causes pancreatic divisum?',
          back: 'Failed fusion of the dorsal and ventral pancreatic ducts. The dorsal duct drains through the minor papilla while the ventral duct drains through the major papilla.'
        },
        {
          id: 'gi3-adv',
          front: 'What is the Ladd\'s procedure?',
          back: 'Surgical correction of intestinal malrotation: widen mesenteric base, divide bands (Ladd\'s), appendectomy, arrange intestines in non-rotated position.'
        },
        {
          id: 'gi4-adv',
          front: 'What are the two lineages that hepatoblasts can differentiate into?',
          back: 'Hepatocytes (Notch low, HNF4α high) or cholangiocytes/bile duct cells (Notch high, HNF1β high).'
        },
        {
          id: 'gi5-adv',
          front: 'What is the Kasai procedure?',
          back: 'Portoenterostomy for biliary atresia. The fibrous biliary tree is removed and a Roux limb of jejunum is anastomosed to the porta hepatis to restore bile flow.'
        },
        {
          id: 'gi6-adv',
          front: 'What is VACTERL association?',
          back: 'Vertebral, Anorectal, Cardiac, TracheoEsophageal, Renal, Limb abnormalities. Non-random association of congenital anomalies of unknown cause (multifactorial).'
        }
      ],
      quiz: [
        {
          id: 'q1-adv',
          question: 'Which gene is most commonly mutated in Hirschsprung disease?',
          options: ['EDNRB', 'EDN3', 'RET', 'SOX10'],
          correctAnswer: 2,
          explanation: 'RET is the most commonly mutated gene in Hirschsprung disease. It encodes a receptor tyrosine kinase for GDNF, critical for ENS migration and survival.'
        },
        {
          id: 'q2-adv',
          question: 'What is the surgical procedure for correcting intestinal malrotation?',
          options: ['Whipple procedure', 'Ladd\'s procedure', 'Kasai procedure', 'Nissen fundoplication'],
          correctAnswer: 1,
          explanation: 'Ladd\'s procedure corrects malrotation by widening the mesenteric base, dividing peritoneal bands, performing appendectomy, and arranging intestines in a non-rotated position.'
        },
        {
          id: 'q3-adv',
          question: 'What signaling pathway determines hepatocyte vs cholangiocyte fate?',
          options: ['Wnt pathway', 'Notch pathway', 'Hedgehog pathway', 'TGF-beta pathway'],
          correctAnswer: 1,
          explanation: 'Notch signaling determines hepatoblast fate: high Notch → cholangiocyte (bile duct), low Notch → hepatocyte.'
        },
        {
          id: 'q4-adv',
          question: 'What is the Kasai procedure used to treat?',
          options: ['Hypertrophic pyloric stenosis', 'Biliary atresia', 'Intestinal atresia', 'Meckel\'s diverticulum'],
          correctAnswer: 1,
          explanation: 'The Kasai procedure (portoenterostomy) is used to treat biliary atresia by creating an anastomosis between the jejunum and porta hepatis to restore bile flow.'
        },
        {
          id: 'q5-adv',
          question: 'What is the primary embryological defect in annular pancreas?',
          options: ['Failure of pancreatic bud fusion', 'Abnormal ventral bud split encircling duodenum', 'Ectopic pancreatic tissue', 'Dorsal bud agenesis'],
          correctAnswer: 1,
          explanation: 'Annular pancreas results from abnormal ventral bud split that encircles the duodenum, potentially causing obstruction.'
        }
      ]
    },
    expert: {
      title: 'Expert-Level GI Embryology',
      description: 'Molecular mechanisms, genetics, and cutting-edge research',
      content: `
# Expert-Level Gastrointestinal Embryology

## Epigenetic Regulation

### DNA Methylation Dynamics

### Gut Region-Specific Methylation
\`\`\`
Foregut → High methylation at CDX loci
    ↓
Midgut → Intermediate CDX methylation
    ↓
Hindgut → Low methylation at CDX loci → CDX expression
\`\`\`

### Imprinted Genes in Gut Development
- **IGF2**: Growth regulation, mesenchymal proliferation
- **H19**: Non-coding RNA, regulates IGF2
- **MEG3**: Imprinted, affects stem cell function
- **Aberrant imprinting**: Associated with Beckwith-Wiedemann, GI tumors

### Histone Modifications
- **H3K27ac**: Active enhancers, organ-specific
- **H3K4me1**: Primed enhancers
- **H3K27me3**: Polycomb repression, developmental genes
- **Bivalent domains**: Poised at key developmental loci

## Stem Cell Biology

### Intestinal Stem Cells

### Crypt Base Columnar Cells (CBCs)
- **Marker**: LGR5 (R-spondin receptor)
- **Location**: Crypt base interspersed with Paneth cells
- **Function**: Continuous epithelial renewal (3-5 days)
- **Hierarchy**: CBC → TA cells → differentiated cells

### Reserve Stem Cells
- **Markers**: Bmi1, Hopx, Tert, Lrig1
- **Location**: Above Paneth cells (+4 position)
- **Function**: Activated upon injury or Lgr5+ loss
- **Plasticity**: Can become CBCs when needed

### Wnt Signaling in Stem Cell Maintenance
\`\`\`
Paneth cells → Wnt3, R-spondin
    ↓
Frizzled/LGR5 on CBC stem cells
    ↓
β-catenin stabilization
    ↓
Stem cell proliferation
\`\`\`

### Organoid Models

### Intestinal Organoids
- **Source**: Lgr5+ stem cells
- **Culture**: Matrigel + Wnt, R-spondin, Noggin, EGF
- **Applications**: Disease modeling, drug testing, regeneration
- **Personalized medicine**: Patient-specific responses

### Gastric Organoids
- **Source**: Gastric stem cells
- **Differentiation**: Chief cells, parietal cells
- **Applications**: H. pylori pathogenesis, cancer

## Molecular Genetics of GI Malformations

### Hirschsprung Disease Genetics

### Oligogenic Inheritance
\`\`\`
RET (major risk gene)
    +
EDNRB or EDN3 (modifier)
    +
Other common variants (polygenic risk)
    ↓
Disease threshold crossed
\`\`\`

### RET Signaling
- **GDNF binding**: GFRα1 co-receptor
- **Dimerization**: RET autophosphorylation
- **Downstream**: MAPK, PI3K, JNK pathways
- **Penetrance**: Incomplete, variable expressivity

### Modifier Genes
| Gene | Function | Effect |
|------|----------|--------|
| NRG1 | ENS development | Aganglionosis length |
| SEMA3 | Axon guidance | ENS precursor migration |
| PROK1/2 | Angiogenesis | Gut vascularization |
| SOX10 | Neural crest specification | Syndromic HSCR |

## Liver Development and Regeneration

### Hepatic Stem Cells

### Hepatoblast Plasticity
- **Fetal liver**: Bipotent progenitors
- **Adult liver**: Hepatocyte self-renewal
- **Oval cells**: Facultative progenitors after injury

### Zonation
- **Periportal (zone 1)**: Gluconeogenesis, β-oxidation, cholesterol synthesis
- **Midlobular (zone 2)**: Glutamine synthesis, xenobiotic metabolism
- **Pericentral (zone 3)**: Glycolysis, lipogenesis, glutamine synthesis, detoxification

### Wnt/β-catenin Gradient
\`\`\`
Pericentral Wnt → β-catenin high
    ↓
Zone 3 gene expression (GS, CYP2E1, CYP1A2)
\`\`\`

### Liver Regeneration

### Hepatocyte Proliferation
- **Trigger**: Partial hepatectomy or injury
- **Primers**: TNF-α, IL-6
- **Growth factors**: HGF, EGF, TGF-α
- **Cell cycle**: G0 → G1 → S → G2 → M
- **Termination**: TGF-β, activin stop proliferation

## Gut Microbiota Influence

### Developmental Origins

### In Utero Microbiota?
- **Traditional view**: Sterile womb
- **Emerging evidence**: Low-biomass microbiota may exist
- **Placental microbiome**: Controversial, may contain pathogens
- **Meconium**: Not sterile in some studies

### Postnatal Colonization
- **Mode of delivery**: Vaginal (maternal flora) vs C-section (skin/environment)
- **Feeding**: Breast milk (Bifidobacteria) vs formula (diverse)
- **Antibiotics**: Major disruption, long-term effects
- **Critical window**: First 2-3 years crucial

### Microbiota-Gut-Brain Axis

### Signaling Pathways
- **Vagus nerve**: Direct neural communication
- **Immune**: Cytokine signaling
- **Endocrine**: Short-chain fatty acids, tryptophan metabolites
- **Neuroendocrine**: Serotonin (90% in gut!)

### Developmental Programming
- **Animal studies**: Germ-free → social deficits, anxiety-like
- **Human studies**: Associations with autism, ADHD
- **Therapeutic**: Probiotics, fecal transplant

## Congenital Diaphragmatic Hernia (CDH)

### Embryology
- **Diaphragm components**: Septum transversum, pleuroperitoneal membranes, body wall
- **Defect**: Posterolateral (Bochdalek) most common
- **Herniation**: Abdominal contents into thorax
- **Lung hypoplasia**: Compression during development

### Genetics
- **Multifactorial**: Complex inheritance
- **Genes**: GATA4, FOG2 (ZFPM2), COUP-TFII
- **Chromosomal**: 15q26.1 deletions, 8p23.1
- **Syndromic**: Fryns, Simpson-Golabi-Behmel, Donnai-Barrow

### Long-Term Outcomes
- **Pulmonary**: Hypoplasia, pulmonary hypertension
- **Neurodevelopmental**: Risk of delays
- **GI**: Reflux, feeding difficulties, oral aversion
- **Musculoskeletal**: Scoliosis, chest wall deformity

## Future Therapeutic Directions

### Stem Cell Therapy
- **Hirschsprung**: ENS progenitor transplantation
- **Liver failure**: Hepatocyte or organoid transplantation
- **Intestinal failure**: Intestinal organoid engineering
- **IBD**: Local immunomodulation

### Gene Therapy
- **CRISPR-Cas9**: RET mutation correction (HSCR)
- **AAV vectors**: Liver gene transfer
- **Ex vivo**: Patient cell correction and transplantation

### Tissue Engineering
- **Intestinal grafts**: Decellularized scaffolds
- **Liver**: Bioengineered liver tissue
- **Esophagus**: Tissue-engineered replacement

## Clinical Translation Challenges

### Immunogenicity
- **Allogeneic cells**: Immune rejection
- **HLA matching**: Stem cell banking
- **Immune modulation**: Tolerance induction

### Engraftment
- **Cell retention**: Low engraftment efficiency
- **Vascularization**: Critical for survival
- **Functional integration**: Connection to enteric nervous system

### Safety
- **Tumorigenicity**: Stem cell risks
- **Off-target effects**: Gene editing concerns
- **Long-term monitoring**: Unknown consequences
      `,
      flashcards: [
        {
          id: 'gi1-exp',
          front: 'What is the LGR5+ cell in intestinal crypts?',
          back: 'LGR5 marks crypt base columnar cells (CBCs), the active intestinal stem cells responsible for continuous epithelial renewal. Respond to Wnt/R-spondin signaling.'
        },
        {
          id: 'gi2-exp',
          front: 'What is the inheritance pattern of Hirschsprung disease?',
          back: 'Oligogenic - multiple genes contribute (RET major, EDNRB/EDN3 modifiers) with incomplete penetrance and variable expressivity. Not simple Mendelian.'
        },
        {
          id: 'gi3-exp',
          front: 'What is the microbiota-gut-brain axis?',
          back: 'Bidirectional communication between gut microbiota and brain via vagus nerve, immune signaling (cytokines), endocrine (SCFAs), and neuroendocrine (serotonin) pathways.'
        },
        {
          id: 'gi4-exp',
          front: 'What are the three zones of liver acinus and their functions?',
          back: 'Zone 1 (periportal): Gluconeogenesis, β-oxidation. Zone 2 (mid): Glutamine, xenobiotic metabolism. Zone 3 (pericentral): Glycolysis, lipogenesis, detoxification.'
        },
        {
          id: 'gi5-exp',
          front: 'What is the key growth factor for liver regeneration?',
          back: 'HGF (hepatocyte growth factor) is the primary mitogen for hepatocyte proliferation. Works with EGF, TGF-α. TGF-β inhibits regeneration (terminates it).'
        }
      ],
      quiz: [
        {
          id: 'q1-exp',
          question: 'Which cell type marks active intestinal stem cells in the crypt base?',
          options: ['Bmi1+ cells', 'LGR5+ cells', 'Hopx+ cells', 'Paneth cells'],
          correctAnswer: 1,
          explanation: 'LGR5+ crypt base columnar cells are the active intestinal stem cells responsible for continuous epithelial renewal.'
        },
        {
          id: 'q2-exp',
          question: 'What is the inheritance pattern of Hirschsprung disease best described as?',
          options: ['Autosomal dominant', 'Autosomal recessive', 'Oligogenic with incomplete penetrance', 'X-linked'],
          correctAnswer: 2,
          explanation: 'Hirschsprung disease has oligogenic inheritance with multiple genes contributing (RET major, modifiers like EDNRB) and incomplete penetrance.'
        },
        {
          id: 'q3-exp',
          question: 'What is the primary mitogen for liver regeneration?',
          options: ['EGF', 'HGF', 'TGF-α', 'FGF'],
          correctAnswer: 1,
          explanation: 'HGF (hepatocyte growth factor) is the primary mitogen driving hepatocyte proliferation during liver regeneration.'
        },
        {
          id: 'q4-exp',
          question: 'What signaling gradient creates liver zonation?',
          options: ['FGF gradient', 'Wnt/β-catenin gradient', 'BMP gradient', 'SHH gradient'],
          correctAnswer: 1,
          explanation: 'A Wnt/β-catenin gradient from central vein to portal vein creates zonation, with pericentral cells having high β-catenin activity.'
        },
        {
          id: 'q5-exp',
          question: 'Which neurotransmitter is primarily produced in the gut?',
          options: ['Dopamine', 'Norepinephrine', 'Serotonin (5-HT)', 'GABA'],
          correctAnswer: 2,
          explanation: 'Approximately 90% of the body\'s serotonin is produced in the gut by enterochromaffin cells, highlighting the importance of the gut-brain axis.'
        }
      ]
    },
    master: {
      title: 'Mastering GI Embryology',
      description: 'Complete understanding from basics to research frontiers',
      content: `
# Mastering Gastrointestinal Embryology

## Clinical-Embryology Integration

## Diagnostic Approach

### Antenatal Diagnosis

### Ultrasound Findings
| Finding | Significance | Differential |
|----------|--------------|--------------|
| Dilated bowel | Obstruction, atresia | Atresia, meconium ileus |
| Echogenic bowel | CF, chromosomal, infection | Cystic fibrosis, T21, CMV |
| Ascites | Liver failure, obstruction | Biliary atresia, urinary |
| Intra-abdominal cysts | Choledochal, ovarian, mesenteric | Location-specific |
| Absent stomach | Esophageal atresia | EA, EA-TEF |

### Postnatal Investigation

### Imaging Modalities
- **Abdominal X-ray**: Dilated loops, pneumoperitoneum
- **Upper GI series**: Anatomic relationships, rotation
- **Barium enema**: Colonic position, microcolon
- **Ultrasound**: Biliary atresia, choledochal cyst
- **CT/MRI**: Complex anatomy, vascular anatomy

### Genetic Testing Strategy
\`\`\`
Phenotype identification
    ↓
Isolated vs syndromic?
    ↓
Targeted panel or exome?
    ↓
Family studies (segregation)
    ↓
Genetic counseling
\`\`\`

## Therapeutic Applications

### Surgical Embryology

### Ladd's Procedure (Malrotation)
- **Goal**: Prevent volvulus, treat obstruction
- **Steps**:
  1. Divide Ladd's bands
  2. Widely mobilize right colon and duodenum
  3. Widen mesenteric base
  4. Place small bowel on right, colon on left
  5. Incidental appendectomy

### Pull-Through Procedures (Hirschsprung)
- **Swenson**: Full thickness resection, colo-anal anastomosis
- **Duhamel**: Retrorectal pull-through, side-to-end anastomosis
- **Soave**: Endorectal pull-through, muscular cuff preservation
- **Transanal**: Single-stage, perineal approach

### Kasai Portoenterostomy (Biliary Atresia)
- **Principle**: Drain bile to bowel
- **Technique**: Excise fibrous biliary tree, anastomose jejunal Roux limb to porta hepatis
- **Success**: Age-dependent (best <60 days)
- **Outcome**: Bridge to transplantation in many

### PSARP (Anorectal Malformations)
- **Principle**: Anatomic reconstruction through perineum
- **Approach**: Posterior sagittal, preserves sphincters
- **Stages**: Colostomy (often) → PSARP → Colostomy closure
- **Long-term**: Bowel function, continence

## Developmental Origins of Adult GI Disease

### DOHaD (Developmental Origins of Health and Disease)

### Early-Life Programming
| Exposure | GI Consequence | Mechanism |
|----------|----------------|-----------|
| Antibiotics (infancy) | Altered microbiota, IBD risk | Dysbiosis |
| C-section | Allergy, obesity risk | Microbiota alteration |
| Breastfeeding vs formula | IBD risk, obesity | Microbiota, immune |
| Malnutrition | Exocrine pancreas, gut barrier | Epigenetic |

### Inflammatory Bowel Disease
- **Hygiene hypothesis**: Early microbial exposure protective
- **Antibiotics**: Increased risk (dose-dependent)
- **Diet**: Western diet predisposes
- **Vaginal birth**: Protective (microbiota)

### Functional GI Disorders
- **IBS**: Developmental stress, early life adversity
- **Functional dyspepsia**: Early trauma association
- **Brain-gut dysregulation**: HPA axis programming

## Systems Biology Approaches

### Multi-Omic Integration

### Transcriptomics
- **Single-cell RNA-seq**: Cell type atlas
- **Spatial transcriptomics**: Anatomic localization
- **Bulk RNA-seq**: Tissue-level changes

### Epigenomics
- **DNA methylation**: Cell-type specific patterns
- **ATAC-seq**: Chromatin accessibility
- **ChIP-seq**: Transcription factor binding
- **Hi-C**: 3D chromatin structure

### Microbiomics
- **16S rRNA**: Bacterial composition
- **Metagenomics**: Functional potential
- **Metatranscriptomics**: Active pathways
- **Metabolomics**: Microbial products

### Proteomics and Metabolomics
- **Mass spectrometry**: Protein identification
- **Serum biomarkers**: Pancreatitis, fibrosis
- **Breath tests**: H. pylori, bacterial overgrowth
- **Fecal markers**: Calprotectin, lactoferrin

## Precision Medicine Applications

### Pharmacogenomics in GI

### Drug Metabolism
| Gene | Drug | Variant Effect |
|------|------|----------------|
| TPMT | Azathioprine, 6-MP | Deficiency → toxicity |
| NUDT15 | Thiopurines | Deficiency → toxicity |
| UGT1A1 | Irinotecan | *28 → neutropenia |
| CYP2C19 | PPIs | Metabolism variation |

### IBD Treatment
- **Anti-TNF**: Primary nonresponse in 30-40%
- **Vedolizumab**: Gut-selective, responders identified
- **Ustekinumab**: IL-12/23 p40, responders
- **Tofacitinib**: JAK inhibitor, pharmacogenomics relevant

## Emerging Therapeutics

### Stem Cell-Based Therapies

### Intestinal Failure
- **TESI (Tissue-engineered small intestine)**: Implantation of organoid-scaffold constructs
- **Clinical trials**: Early phase, safety focused
- **Challenges**: Vascularization, peristalsis

### Liver Disease
- **Hepatocyte transplantation**: Metabolic diseases
- **iPSC-derived hepatocytes**: Disease modeling, therapy
- **Bioartificial liver**: Bridge to transplant

### Hirschsprung Disease
- **ENS progenitor transplantation**: Animal models promising
- **Cell sources**: Neural crest stem cells, iPSC-derived
- **Challenges**: Integration, functional innervation

### Gene Therapy

### Liver as Target Organ
- **AAV vectors**: Liver tropism, long-term expression
- **Hemophilia**: Factor IX gene therapy approved
- **Familial hypercholesterolemia**: PCSK9 targeting
- **Urea cycle disorders**: OTC deficiency

### GI Tract Delivery
- **Oral AAV**: Capsid engineering
- **Colon-targeted**: Promoter specificity
- **Microbiome engineering**: Live biotherapeutics

## Future Directions

### Organoid Transplantation
- **Intestinal grafts**: For short bowel syndrome
- **Liver tissue**: For metabolic diseases, failure
- **Esophageal replacement**: For caustic injury

### In Utero Therapy
- **Fetal surgery**: CDH (experimental)
- **Stem cell transplantation**: For structural defects
- **Gene editing**: Before birth, immune advantage

### Microbiome Therapeutics
- **Defined consortia**: Rebuild healthy microbiota
- **Engineered bacteria**: Therapeutic molecule production
- **Fecal transplant**: Standardized preparations

## Ethical Considerations

### Gene Editing
- **Germline**: Heritable changes (prohibited)
- **Somatic**: Individual treatment
- **Enhancement**: Treatment vs. enhancement distinction
- **Equity**: Access to expensive therapies

### Fetal Therapy
- **Maternal risk**: Acceptable for fetal benefit?
- **Informed consent**: Complex decision-making
- **Long-term outcomes**: Unknown consequences
- **Resource allocation**: High-cost interventions

### Stem Cell Therapy
- **Source**: ESC vs. iPSC vs. adult
- **Tumorigenicity**: Safety concerns
- **Clinical trials**: Balancing hope and realistic expectations

## Conclusion

Mastering GI embryology requires:
- **Foundational knowledge**: Normal development
- **Clinical correlation**: From anatomy to disease
- **Molecular understanding**: Genes, signals, pathways
- **Systems thinking**: Multi-organ integration
- **Therapeutic awareness**: From surgery to stem cells
- **Research literacy**: Cutting-edge developments
- **Ethical sensitivity**: Complex decision-making

The developing GI system exemplifies the integration of endoderm, mesoderm, and ectoderm into a functional unit that interfaces with the outside world through nutrition, immunity, and the microbiome. Understanding its development is essential for advancing treatment of GI diseases throughout life.
      `,
      flashcards: [
        {
          id: 'gi1-mas',
          front: 'What are the key components of the Ladd\'s procedure?',
          back: '1) Divide Ladd\'s bands, 2) Mobilize right colon and duodenum, 3) Widen mesenteric base, 4) Place small bowel right, colon left, 5) Appendectomy.'
        },
        {
          id: 'gi2-mas',
          front: 'What is the optimal timing for the Kasai procedure in biliary atresia?',
          back: 'Best outcomes before 60 days of age. Success declines significantly after 90 days. Earlier intervention yields better bile drainage and native liver survival.'
        },
        {
          id: 'gi3-mas',
          front: 'What are the main pull-through procedures for Hirschsprung disease?',
          back: 'Swenson (full-thickness resection), Duhamel (retrorectal, side-to-end), Soave (endorectal, muscular cuff), Transanal (single-stage, perineal).'
        },
        {
          id: 'gi4-mas',
          front: 'What pharmacogenomic test is important before starting azathioprine?',
          back: 'TPMT and NUDT15 testing. Deficiency causes severe myelosuppression. Dose reduction or alternative therapy needed for deficient patients.'
        },
        {
          id: 'gi5-mas',
          front: 'What is the developmental origins hypothesis for IBD?',
          back: 'Hygiene hypothesis - early microbial exposure protective. Antibiotics, C-section, formula feeding increase risk through microbiota disruption and immune dysregulation.'
        }
      ],
      quiz: [
        {
          id: 'q1-mas',
          question: 'What is the optimal timing for the Kasai procedure in biliary atresia?',
          options: ['<30 days', '<60 days', '<90 days', '<120 days'],
          correctAnswer: 1,
          explanation: 'The Kasai procedure has the best outcomes when performed before 60 days of age, with success declining significantly after 90 days.'
        },
        {
          id: 'q2-mas',
          question: 'Which pharmacogenomic testing is essential before initiating thiopurine therapy?',
          options: ['CYP2C19', 'TPMT/NUDT15', 'UGT1A1', 'VKORC1'],
          correctAnswer: 1,
          explanation: 'TPMT and NUDT15 testing is essential before thiopurines (azathioprine, 6-MP). Deficiency causes severe myelosuppression; dose reduction or alternative therapy needed.'
        },
        {
          id: 'q3-mas',
          question: 'What is the primary goal of the Ladd\'s procedure?',
          options: ['Cure Hirschsprung disease', 'Prevent midgut volvulus and treat obstruction', 'Repair tracheoesophageal fistula', 'Treat biliary atresia'],
          correctAnswer: 1,
          explanation: 'The Ladd\'s procedure corrects intestinal malrotation to prevent midgut volvulus (life-threatening) and treat any associated obstruction.'
        },
        {
          id: 'q4-mas',
          question: 'What is PSARP used to treat?',
          options: ['Hirschsprung disease', 'Anorectal malformations', 'Biliary atresia', 'Intestinal atresia'],
          correctAnswer: 1,
          explanation: 'PSARP (Posterior Sagittal Anorectoplasty) is the surgical procedure for correcting anorectal malformations, creating an anatomically positioned anus.'
        },
        {
          id: 'q5-mas',
          question: 'According to the hygiene hypothesis, what factor is protective against IBD development?',
          options: ['C-section delivery', 'Early antibiotic exposure', 'Early microbial exposure', 'Formula feeding'],
          correctAnswer: 2,
          explanation: 'The hygiene hypothesis proposes that early microbial exposure (vaginal birth, siblings, farm animals) protects against IBD by properly educating the immune system.'
        }
      ]
    }
  }
};
