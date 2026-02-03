/**
 * Common Congenital Anomalies - Anatomical Variations
 *
 * Frequently encountered congenital anatomical variations that are
 * clinically significant and commonly encountered in medical practice.
 */

import { EducationalContent } from '../../types';

export const COMMON_CONGENITAL: EducationalContent = {
  id: 'anatomy-anomalies-common-congenital',
  type: 'topic',
  name: 'Common Congenital Anomalies',
  alternateNames: ['Frequent Congenital Variants', 'Common Developmental Anomalies', 'Routine Congenital Variations'],

  levels: {
    1: {
      level: 1,
      summary: 'Common congenital anomalies are anatomical differences that many people are born with that usually don\'t cause health problems but are important for doctors to know about.',
      explanation: `**What Are Common Congenital Anomalies?**

Congenital anomalies are differences in body structure that people are born with. The word "congenital" means "present at birth," and "anomaly" means something that's different from usual. Many of these are very common and normal variations.

**Why Are They Important?**

Even though most congenital anomalies don't cause problems, they're important because:

- Doctors need to recognize them so they don't confuse them with diseases
- Surgeons need to know about them before operating
- Some can cause problems later in life
- They might run in families

**Most Common Types:**

**Heart Variations:**
- Heart valves that look slightly different
- Small holes between heart chambers that often close on their own
- Extra blood vessels

**Digestive System:**
- Extra spleens
- Different shapes of the liver
- Intestines that formed in different positions

**Bone and Joint Variations:**
- Extra ribs
- Bones that didn't fully separate
- Extra small bones in the feet or hands

**Other Common Findings:**
- Kidneys in different positions
- Different shapes of the uterus
- Extra bone pieces in the skull

**How Are They Found?**

Many congenital anomalies are found by accident when:
- Having X-rays or scans for other reasons
- During surgery for something else
- During routine physical exams
- When investigating a health problem

**What Should You Know?**

- Most congenital anomalies are completely normal
- They don't usually need treatment
- If you have one, it should be noted in your medical records
- Your family members might have similar variations`,

      keyTerms: [
        { term: 'congenital anomaly', definition: 'A difference in body structure that you\'re born with' },
        { term: 'variation', definition: 'A difference from what\'s typical, but not necessarily wrong or harmful' },
        { term: 'incidental finding', definition: 'Something found by accident while looking for something else' },
        { term: 'family history', definition: 'Information about health conditions that run in your family' },
      ],

      analogies: [
        'Congenital anomalies are like different eye colors - they\'re variations that make each person unique, not diseases that need to be fixed.',
        'Think of congenital anomalies like different architectural styles in houses - they all provide shelter but have different features.',
      ],

      examples: [
        'About 10% of people have an extra rib near the bottom of their neck.',
        'Some people are born with just one kidney but never have any problems.',
        'Many people have small holes in their heart that closed before they were born.',
      ],

      patientCounselingPoints: [
        'Most congenital anomalies are variations of normal anatomy, not diseases.',
        'If you have a congenital anomaly, your doctor will explain if it needs any special attention.',
        'Many congenital anomalies run in families, so tell your doctor about your family history.',
      ],
    },

    2: {
      level: 2,
      summary: 'Common congenital anomalies are anatomical variations present at birth that occur in a significant proportion of the population, typically asymptomatic but requiring recognition to avoid misdiagnosis and for appropriate surgical planning.',
      explanation: `**Overview of Common Congenital Anomalies**

Congenital anomalies are structural differences present from birth resulting from alterations in embryological development. While some are rare, many occur frequently enough to be considered normal variations.

**Prevalence and Significance:**

- Approximately 3-5% of newborns have a congenital anomaly
- Most are minor and don't affect health or function
- Recognition prevents unnecessary intervention and misdiagnosis
- Documentation important for future medical care

**Cardiovascular System (Most Clinically Significant):**

| Anomaly | Incidence | Clinical Significance |
|---------|-----------|----------------------|
| Patent foramen ovale | 25% | Potential for paradoxical embolism |
| Bicuspid aortic valve | 1-2% | Stenosis later in life |
| Mitral valve prolapse | 2-3% | Usually asymptomatic |
| Coronary artery anomalies | 1% | Can cause sudden death |
| Aberrant subclavian artery | 0.5-2% | Usually asymptomatic |

**Gastrointestinal System:**

| Anomaly | Incidence | Clinical Significance |
|---------|-----------|----------------------|
| Meckel's diverticulum | 2% | May bleed, cause obstruction |
| Intestinal malrotation | 1:500 | Volvulus risk |
| Gallbladder agenesis | 1:10,000 | Usually asymptomatic |
| Annular pancreas | 1:20,000 | May cause obstruction |
| Heterotaxia | 1:10,000 | Complex organ arrangement |

**Genitourinary System:**

| Anomaly | Incidence | Clinical Significance |
|---------|-----------|----------------------|
| Renal agenesis (unilateral) | 1:1,000 | Compensatory hypertrophy |
| Horseshoe kidney | 1:400-500 | Increased stone risk |
| Uterine anomalies | 5-10% of females | Variable fertility impact |
| Cryptorchidism | 1-3% males | Infertility, cancer risk |
| Hypospadias | 1:200 males | Surgical correction |

**Musculoskeletal System:**

| Anomaly | Incidence | Clinical Significance |
|---------|-----------|----------------------|
| Cervical rib | 0.5-1% | Thoracic outlet syndrome |
| Accessory navicular | 10-25% | Foot pain possible |
| Bipartite patella | 2-3% | Confused with fracture |
| Trigger thumb (congenital) | 0.3% | Requires release |
| Clubfoot | 1:1,000 | Requires treatment |

**Nervous System:**

| Anomaly | Incidence | Clinical Significance |
|---------|-----------|----------------------|
| Chiari I malformation | 0.1% | Headaches, syrinx |
| Cerebral aneurysm | 1-3% | Risk of rupture |
| Arachnoid cyst | 1% | Usually asymptomatic |
| Cavum septum pellucidum | Common in infants | Usually resolves |`,

      keyTerms: [
        { term: 'patent foramen ovale (PFO)', definition: 'Incomplete closure of the foramen ovale, allowing potential blood flow between atria', pronunciation: 'FO-rah-men oh-VAY-lee' },
        { term: 'bicuspid aortic valve', definition: 'Aortic valve with only two leaflets instead of the normal three', pronunciation: 'by-KUS-pid' },
        { term: 'Meckel\'s diverticulum', definition: 'True intestinal diverticulum from persistent embryonic vitelline duct', pronunciation: 'MEK-elz di-ver-TIK-yoo-lum' },
        { term: 'horseshoe kidney', definition: 'Fusion of both kidneys at lower poles, creating U-shaped configuration' },
        { term: 'cryptorchidism', definition: 'Undescended testicle(s) that fail to descend into the scrotum', pronunciation: 'krip-TOR-ki-dizm' },
      ],

      analogies: [
        'A PFO is like a trapdoor between heart chambers that didn\'t completely close - it usually stays shut but can open under certain conditions.',
        'Horseshoe kidney is like two buildings connected at the basement - they function separately but share a foundation.',
      ],

      clinicalNotes: 'The most clinically significant congenital anomalies are cardiovascular, particularly coronary artery anomalies with interarterial course which can cause sudden death in young athletes. Bicuspid aortic valve requires lifelong monitoring for aortic stenosis and regurgitation.',
    },

    3: {
      level: 3,
      summary: 'Common congenital anomalies arise from specific alterations during critical periods of embryogenesis, affecting particular organ systems with characteristic patterns that reflect the developmental timing and the specific molecular processes disrupted.',
      explanation: `**Developmental Timing and Associated Anomalies:**

| Critical Period | Vulnerable Structures | Characteristic Anomalies |
|-----------------|----------------------|--------------------------|
| Weeks 3-4 | Cardiac septation, aortic arches | VSD, PFO, arch anomalies |
| Weeks 4-5 | Gut tube rotation, liver/bud | Malrotation, biliary variants |
| Weeks 5-7 | Kidney ascent, genital fusion | Renal ectopia, hypospadias |
| Weeks 6-8 | Palate formation, abdominal wall | Cleft palate, omphalocele |
| Weeks 8-12 | Organ refinement, positioning | Positional variants |

**Detailed Cardiac Anomalies:**

*Septal Defects:*
- **Ventricular septal defect (VSD)**: Most common congenital heart defect (30%)
  - Muscular (80%): Often close spontaneously
  - Perimembranous (15%): Most common surgical type
  - Outlet (5%): Associated with other anomalies

- **Atrial septal defects**:
  - Secundum type (70%): Central fossa ovalis defect
  - Primum type (20%): Associated with AV canal defects
  - Sinus venosus (10%): Associated with PAPVR

*Valve Anomalies:*
- **Bicuspid aortic valve**:
  - Most common congenital valve anomaly
  - Male predominance (3:1)
  - 30% develop aortic stenosis by age 70
  - Associated with coarctation, aortic dilation

- **Ebstein anomaly**:
  - Apical displacement of septal tricuspid leaflet
  - Atrialization of right ventricle
  - Associated with WPW, interatrial shunt

**Gastrointestinal Anomalies in Detail:**

*Malrotation:*
- Arrest of normal intestinal rotation (week 10-11)
- Mesentery remains narrow-based
- Risk of midgut volvulus (life-threatening)
- Ladd's procedure for correction

*Meckel's Diverticulum:*
- True diverticulum (all layers)
- 2 feet from ileocecal valve (rule of 2s)
- May contain gastric/pancreatic tissue
- Presents with painless bleeding in children

*Anorectal Malformations:*
- Spectrum from imperforate anus to stenosis
- Associated with urogenital anomalies (50%)
- Classification based to puborectalis
- Surgical correction required

**Genitourinary Anomalies:**

*Renal Anomalies:*
- **Unilateral renal agenesis** (1:1,000):
  - Usually asymptomatic
  - Contralateral hypertrophy
  - Monitor for proteinuria, hypertension

- **Multicystic dysplastic kidney**:
  - Non-functional, cystic kidney
  - Often involutes
  - May require nephrectomy if symptomatic

- **Ureteropelvic junction obstruction**:
  - Most common cause of hydronephrosis in infants
  - May require pyeloplasty

*External Genitalia:*
- **Hypospadias** (1:200):
  - Ventral urethral opening
  - Glandular (70%), penile (25%), perineal (5%)
  - Surgical correction at 6-12 months

- **Epispadias** (1:120,000):
  - Dorsal urethral opening
  - Part of exstrophy-epispadias complex

**Musculoskeletal Anomalies:**

*Vertebral:*
- **Spina bifida occulta** (5-10%):
  - Incomplete posterior arch fusion
  - Usually no neural involvement
  - May have overlying cutaneous stigmata

- **Hemivertebrae** (0.3-1%):
  - Wedge-shaped vertebra
  - Causes congenital scoliosis
  - May require fusion

*Upper Limb:*
- **Trigger thumb** (0.3%):
  - Nodule in flexor tendon
  - Fixed flexion at IP joint
  - Surgical release if persistent

*Lower Limb:*
- **Clubfoot (talipes equinovarus)** (1:1,000):
  - Plantar flexion, inversion, adduction
  - Idiopathic vs. syndromic
  - Ponseti casting successful in >90%`,

      keyTerms: [
        { term: 'VSD', definition: 'Ventricular septal defect; abnormal opening between ventricles' },
        { term: 'Ebstein anomaly', definition: 'Congenital tricuspid valve anomaly with apical displacement of septal leaflet' },
        { term: 'pyeloplasty', definition: 'Surgical reconstruction of ureteropelvic junction to relieve obstruction' },
        { term: 'hypospadias', definition: 'Congenital malposition of urethral meatus on ventral penis' },
        { term: 'talipes equinovarus', definition: 'Medical term for clubfoot deformity' },
      ],

      analogies: [
        'VSD is like a hole in the wall between two rooms - blood can flow where it shouldn\'t, causing problems.',
        'The Ponseti method for clubfoot is like gradually training a plant to grow straight - gentle, consistent correction over time.',
      ],

      clinicalNotes: 'Congenital heart disease is the most common cause of birth defect-related mortality. Bicuspid aortic valve patients require aortic surveillance due to risk of dilation and dissection. Hypospadias repair is ideally performed at 6-12 months when testosterone levels are naturally low, reducing recurrence risk.',
    },

    4: {
      level: 4,
      summary: 'Common congenital anomalies represent the clinical manifestation of specific genetic and epigenetic disturbances during organogenesis, with characteristic patterns reflecting the developmental timing and molecular pathways affected.',
      explanation: `**Genetic Basis of Congenital Anomalies:**

*Chromosomal Abnormalities:*
- Trisomy 21 (Down syndrome): Cardiac defects (40%), duodenal atresia
- Trisomy 18 (Edwards): VSD, horseshoe kidney, radial anomalies
- Trisomy 13 (Patau): Holoprosencephaly, cardiac defects
- Turner (45,X): Bicuspid aortic valve, coarctation, renal anomalies
- Klinefelter (47,XXY): Usually no major structural anomalies

*Single Gene Disorders:*
- **Marfan syndrome** (FBN1): Aortic root dilation, lens dislocation
- **Noonan syndrome** (PTPN11): Pulmonic stenosis, chest deformity
- **Williams syndrome** (7q11.23): Supravalvular aortic stenosis
- **Alagille syndrome** (JAG1): Posterior embryotoxon, heart defects
- **CHARGE syndrome** (CHD7): Coloboma, heart, atresia choanae

*Multifactorial Inheritance:*
- Neural tube defects
- Congenital heart defects (most)
- Cleft lip/palate
- Hypospadias
- Clubfoot

**Etiological Categories:**

*Environmental Factors:*
- **Teratogens**: Alcohol (FAS), isotretinoin, anticonvulsants, lithium
- **Maternal conditions**: Diabetes (caudal regression), PKU, obesity
- **Infections**: TORCH (Toxo, Rubella, CMV, HSV), Zika
- **Physical agents**: Hyperthermia, radiation

**Specific Anomaly Complexes:**

*VACTERL Association:**
- Vertebral anomalies
- Anal atresia
- Cardiac defects
- Tracheoesophageal fistula
- Renal anomalies
- Limb abnormalities
- Diagnosis requires at least 3 components

*Laterality Sequences:*
- **Heterotaxy**: Randomized organ arrangement
  - Polysplenia (left isomerism)
  - Asplenia (right isomerism)
  - Complex cardiac disease almost always

- **Situs inversus totalis**: Complete mirror image
  - Usually asymptomatic
  - Kartagener syndrome if with primary ciliary dyskinesia

**Clinical Genetic Evaluation:**

*When to Suspect Genetic Etiology:*
- Multiple congenital anomalies
- Dysmorphic features
- Developmental delay
- Family history of similar findings
- Recurrence in sibs

*Testing Modalities:*
- **Karyotype**: Chromosomal abnormalities
- **FISH**: Microdeletions/duplications
- **CMA (Chromosomal microarray)**: Submicroscopic CNVs
- **Exome sequencing**: Single gene variants
- **Specific gene testing**: Known syndromes`,

      keyTerms: [
        { term: 'teratogen', definition: 'Agent that causes developmental abnormalities in embryo/fetus' },
        { term: 'VACTERL', definition: 'Association of Vertebral, Anal, Cardiac, Tracheoesophageal, Renal, Limb anomalies' },
        { term: 'heterotaxy', definition: 'Abnormal arrangement of thoracoabdominal organs across left-right axis' },
        { term: 'CMA', definition: 'Chromosomal microarray analysis for detecting copy number variants' },
        { term: 'exome sequencing', definition: 'Sequencing of all protein-coding regions of the genome' },
      ],

      clinicalNotes: 'Environmental teratogens cause congenital anomalies through disruption of specific developmental pathways depending on timing of exposure. Neural tube defects have been significantly reduced through folic acid fortification. Preconception counseling is essential for women on teratogenic medications.',
    },

    5: {
      level: 5,
      summary: 'Common congenital anomalies represent the intersection of genetic susceptibility, epigenetic regulation, environmental influences, and stochastic events during critical windows of development, with implications extending beyond structural anatomy to functional physiology and lifelong health.',
      explanation: `**Advanced Molecular and Developmental Concepts:**

*Epigenetic Regulation of Development:*

**DNA Methylation:**
- Tissue-specific methylation patterns
- Imprinting disorders (Prader-Willi, Angelman)
- Transgenerational epigenetic inheritance
- Environmental modification of methylation

**Histone Modifications:**
- Chromatin accessibility during development
- HAT/HDAC balance in organogenesis
- Histone variant incorporation
- Crosstalk with DNA methylation

**Non-coding RNAs:**
- miRNAs: Post-transcriptional regulation
- lncRNAs: Chromatin organization
- CircRNAs: miRNA sponging
- Developmental stage-specific expression

*Developmental Pathway Interactions:*

**Canonical Pathways:**
- Wnt/β-catenin: Body axis, organ specification
- Hedgehog: Neural tube, limb patterning
- TGF-β/BMP: Germ layer specification
- Notch: Cell fate decisions, somitogenesis
- FGF: Organ size, branching morphogenesis

**Network Properties:**
- Pathway redundancy and compensation
- Threshold effects and dosage sensitivity
- Temporal specificity windows
- Spatial gradient patterning

**Clinical Implications and Management:**

*Prenatal Detection and Counseling:*
- First trimester ultrasound (11-14 weeks): Nuchal translucency, major anomalies
- Second trimester ultrasound (18-22 weeks): Detailed anatomic survey
- Fetal echocardiography (18-24 weeks): Cardiac evaluation
- Fetal MRI: CNS anomalies not clarified by US

*Postnatal Management:*
- Multidisciplinary care teams
- Age-appropriate interventions
- Transition to adult care
- Reproductive counseling

**Specific Anomaly Management:**

*Congenital Heart Disease:*
- Bicuspid aortic valve: Lifelong aortic imaging
- Coarctation: Recoarctation surveillance, hypertension
- Tetralogy of Fallot: Pulmonary regurgitation, arrhythmia risk
- Single ventricle: Fontan complications

*Neural Tube Defects:*
- Myelomeningocele: Surgical closure, shunt if needed
- Lipomyelomeningocele: Tethered cord risk
- Tethered cord: Surgical release before symptoms
- Chiari II: Symptomatic treatment

*Renal Anomalies:*
- Renal agenesis: Renal protective measures
- Dysplastic kidneys: Monitor for hypertension
- UPJ obstruction: Pyeloplasty vs. observation
- Reflux: Antibiotic prophylaxis vs. surgery

**Emerging Concepts:**

*In Utero Interventions:*
- Fetal spina bifida closure (MOMS trial benefit)
- Fetal cardiac interventions (aortic valve dilation)
- Fetal myelomeningocele repair
- EXIT procedures for airway compromise

*Regenerative Medicine:*
- Stem cell therapies for structural defects
- Tissue engineering approaches
- 3D printing for surgical planning
- Bioengineered organ replacement

*Precision Medicine:*
- Genotype-phenotype correlations
- Pharmacogenomic considerations
- Personalized surveillance protocols
- Gene therapy for monogenic disorders`,

      keyTerms: [
        { term: 'epigenetics', definition: 'Heritable changes in gene expression without changes in DNA sequence' },
        { term: 'genomic imprinting', definition: 'Parent-of-origin specific gene expression' },
        { term: 'MOMS trial', definition: 'Management of Myelomeningocele Study; demonstrated benefit of fetal closure' },
        { term: 'EXIT procedure', definition: 'Ex Utero Intrapartum Treatment; delivery strategy for airway compromise' },
        { term: 'pharmacogenomics', definition: 'Study of how genes affect drug response' },
      ],

      clinicalNotes: 'Fetal surgery for myelomeningocele reduces need for shunting and improves motor outcomes. Bicuspid aortic valve requires lifelong aortic imaging due to risk of dilation and dissection. Genetic counseling is essential for recurrence risk assessment. Multidisciplinary care optimizes outcomes for complex anomalies.',
    },
  },

  media: [
    {
      id: 'common-congenital-1',
      type: 'diagram',
      filename: 'congenital-heart-defects.svg',
      title: 'Common Congenital Heart Defects',
      description: 'Illustration of VSD, ASD, PDA, and other common defects',
    },
    {
      id: 'common-congenital-2',
      type: 'diagram',
      filename: 'neural-tube-defects.svg',
      title: 'Neural Tube Defect Types',
      description: 'Classification of spina bifida and other neural tube defects',
    },
  ],

  citations: [
    {
      id: 'moore-embryology',
      type: 'textbook',
      title: 'Embryology',
      source: 'The Developing Human: Clinically Oriented Embryology, Moore, 11th Edition',
      license: 'Copyrighted',
    },
    {
      id: 'moss-adams',
      type: 'textbook',
      title: 'Congenital Heart Disease',
      source: 'Moss and Adams\' Heart Disease in Infants, Children, and Adolescents, 9th Edition',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-variations-vascular', targetType: 'topic', relationship: 'related', label: 'Vascular Variations' },
    { targetId: 'anatomy-variations-organ', targetType: 'topic', relationship: 'related', label: 'Organ Variations' },
    { targetId: 'anatomy-variations-skeletal', targetType: 'topic', relationship: 'related', label: 'Skeletal Variations' },
    { targetId: 'genetics-basics', targetType: 'topic', relationship: 'related', label: 'Genetics Basics' },
  ],

  tags: {
    systems: ['all'],
    structures: [],
    topics: ['anatomy', 'congenital', 'embryology', 'genetics', 'pediatrics'],
    keywords: ['congenital anomalies', 'birth defects', 'developmental', 'embryology', 'genetics'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pediatrics', 'surgery', 'obgyn', 'family medicine'],
    },
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
