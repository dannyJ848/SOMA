/**
 * Organ Variations - Congenital Anatomical Variations
 *
 * Developmental variations in internal organs including size, shape,
 * position, and structural differences that occur congenitally.
 */

import { EducationalContent } from '../../types';

export const ORGAN_VARIATIONS: EducationalContent = {
  id: 'anatomy-variations-organ',
  type: 'topic',
  name: 'Organ Variations',
  alternateNames: ['Visceral Variants', 'Splanchnic Anomalies', 'Organ Anomalies'],

  levels: {
    1: {
      level: 1,
      summary: 'Organ variations are natural differences in how organs look, where they sit in the body, or how they\'re connected that some people are born with.',
      explanation: `**What Are Organ Variations?**

Just like people come in different shapes and sizes, the organs inside our bodies can also be different from person to person. These differences are called organ variations.

**Types of Organ Variations:**

1. **Size Differences**: Some organs are naturally bigger or smaller
2. **Position Changes**: Organs might sit in slightly different places
3. **Shape Differences**: Organs might have different shapes or extra parts
4. **Number Variations**: Some people have extra organs or parts of organs
5. **Connection Differences**: How organs connect to other body parts might vary

**Common Examples:**

- Kidneys: Some people have one kidney instead of two, or they might be shaped differently
- Liver: Can have extra lobes or different shapes
- Lungs: Some people have an extra lung lobe
- Stomach: Can be shaped differently
- Intestines: Might have different lengths or attachment patterns

**Why Do They Happen?**

Organ variations happen while a baby is developing before birth. As organs form and grow, small changes in how they develop can create these variations. It's similar to how some people are born with different eye colors or hair types.

**Are They Dangerous?**

Most organ variations are completely harmless! People can live their entire lives without knowing they have one. However:

- Some variations might cause health problems
- Doctors need to know about them before surgery
- A few can affect how organs work

**Interesting Facts:**

- About 1 in 5 people have some type of organ variation
- The most common organ variation is having an extra lobe in the lung
- Kidney variations are the most commonly discovered on imaging tests`,

      keyTerms: [
        { term: 'organ variation', definition: 'A difference in how an organ looks, where it is, or how it\'s connected that you\'re born with' },
        { term: 'congenital', definition: 'Something that develops before birth' },
        { term: 'visceral', definition: 'Related to the internal organs in your chest and belly' },
        { term: 'lobes', definition: 'The sections or divisions of an organ like the lung, liver, or brain' },
        { term: 'asymptomatic', definition: 'Not causing any symptoms or problems' },
      ],

      analogies: [
        'Organ variations are like different car models of the same make - they all do the same job but have slightly different designs and features.',
        'Think of organ variations like different house layouts on the same street - the number and type of rooms might vary, but they\'re all perfectly functional homes.',
      ],

      examples: [
        'Some people are born with just one kidney but can live completely normal lives.',
        'The liver can have an extra piece called the "pyramidal lobe" that not everyone has.',
        'The right lung usually has three sections but some people have four.',
      ],

      patientCounselingPoints: [
        'Having an organ variation is usually normal and doesn\'t affect your health.',
        'These variations are often found accidentally during imaging for other reasons.',
        'If your doctor finds a variation, they can explain whether it needs any special attention.',
      ],
    },

    2: {
      level: 2,
      summary: 'Organ variations are congenital anatomical differences affecting the size, morphology, position, or number of internal organs, with most being asymptomatic but requiring recognition for surgical planning and diagnostic interpretation.',
      explanation: `**Overview of Organ Variations**

Organ variations represent deviations from typical anatomical patterns that occur during embryological development. These variations are present from birth and are distinct from acquired changes or pathological conditions.

**Classification by Organ System:**

*Digestive System:*
- Liver morphology variations
- Gallbladder position and structure
- Pancreas fusion anomalies
- Stomach shape and position
- Intestinal malrotation

*Respiratory System:*
- Lung lobe variations
- Accessory lung tissue
- Bronchial tree patterns
- Diaphragmatic defects

*Urinary System:*
- Renal position anomalies
- Kidney fusion anomalies
- Ureteral variations
- Bladder morphology

*Reproductive System:*
- Uterine anomalies
- Ovarian position variations
- Testicular anomalies

**Common Organ Variations by Frequency:**

| Variation | Approximate Frequency | Clinical Significance |
|-----------|----------------------|----------------------|
| Accessory spleen | 10-30% | Usually none; may mimic tumor |
| Horseshoe kidney | 1:400-500 | Increased stone risk |
| Retroverted uterus | 20-30% | Usually asymptomatic |
| Accessory hepatic lobe | 5-30% | Surgical relevance |
| Azygos lobe of lung | 1% | Usually asymptomatic |
| Gallbladder agenesis | 1:10,000 | Asymptomatic or symptoms |
| Intestinal malrotation | 1:500 | Potential volvulus |

**Embryological Basis:**

Organ variations arise from alterations in normal developmental processes:

1. **Failed Migration**: Organs don't reach typical positions
2. **Incomplete Fusion**: Paired structures don't fully merge
3. **Persistence**: Embryonic structures remain
4. **Hyperplasia/Hypoplasia**: Overdevelopment or underdevelopment
5. **Agenesis**: Complete absence of an organ

**Clinical Relevance:**

*Why Recognition Matters:*

1. **Surgical Planning**: Approach and technique may need modification
2. **Differential Diagnosis**: Variants can mimic pathology
3. **Imaging Interpretation**: Avoiding misdiagnosis
4. **Procedure Safety**: Avoiding injury to atypically located structures
5. **Transplant Considerations**: Affects donor organ suitability`,

      keyTerms: [
        { term: 'agenesis', definition: 'Complete absence of an organ or structure due to failure of development during embryogenesis', pronunciation: 'uh-JEN-uh-sis' },
        { term: 'hypoplasia', definition: 'Underdevelopment or incomplete development of a tissue or organ', pronunciation: 'hy-po-PLAY-zha' },
        { term: 'hyperplasia', definition: 'Overdevelopment or excessive proliferation of cells', pronunciation: 'hy-per-PLAY-zha' },
        { term: 'malrotation', definition: 'Abnormal rotation of an organ during development, resulting in atypical position', pronunciation: 'mal-ro-TAY-shun' },
        { term: 'fusion anomaly', definition: 'Failure of paired structures to properly fuse during development', pronunciation: 'FYU-zhun' },
      ],

      analogies: [
        'Organ development is like baking - the recipe is generally the same, but small variations in temperature or ingredients result in different but still functional outcomes.',
        'Think of organ variations like different architectural designs - they may have different layouts but all serve the same essential functions.',
      ],

      clinicalNotes: 'Organ variations are most commonly identified incidentally on cross-sectional imaging. Recognition prevents unnecessary intervention and guides surgical planning. Some variations, like intestinal malrotation, have clinical implications that require specific management.',
    },

    3: {
      level: 3,
      summary: 'Organ variations arise from disruptions in the complex embryological processes of organogenesis, including abnormal migration, fusion defects, persistence of embryonic structures, and altered morphogenetic patterning, with variable clinical significance.',
      explanation: `**Embryology of Organ Development**

Understanding the timing and processes of organ development is key to understanding variations:

*Key Developmental Timeline:*

| Period | Developmental Events | Vulnerable Variations |
|--------|---------------------|----------------------|
| Weeks 3-4 | Lateral plate folding, gut tube formation | Foregut/hindgut anomalies |
| Weeks 4-5 | Hepatic diverticulum, lung bud | Liver, lung anomalies |
| Weeks 5-7 | Kidney ascent, pancreatic fusion | Renal, pancreatic anomalies |
| Weeks 6-8 | Gut rotation, herniation/reduction | Malrotation, omphalocele |
| Weeks 8-12 | Organ refinement, positioning | Positional variants |

**Hepatic Variations:**

*Gallbladder and Biliary Variants:*
- Gallbladder agenesis: 0.01-0.04%
- Phrygian cap (folded fundus): 2-6%
- Floating gallbladder (excessive peritoneum): Rare
- Duplicate gallbladder: 1:4000
- Accessory hepatic ducts: Variable

*Liver Morphology:*
- Accessory lobes: 5-30%
- Riedel's lobe: Tongue-like projection from right lobe (3-5%)
- Papillary process of caudate lobe: Variable size
- Left lobe hypertrophy: Common in cirrhosis

**Pancreatic Variations:**

*Fusion Anomalies:*
- Pancreas divisum: Failure of dorsal/ventral fusion (5-10%)
- Annular pancreas: Pancreatic tissue encircling duodenum
- Accessory pancreatic tissue: Heterotopic pancreas

*Pancreas Divisum Details:*
- Dorsal duct drains majority of gland via minor papilla
- Ventral duct drains only via major papilla
- Associated with recurrent pancreatitis
- ERCP demonstrates separate drainage systems

**Renal Variations:**

*Positional Anomalies:*
- Pelvic kidney: Failed ascent from pelvis (1:500-1:1200)
- Crossed fused ectopia: Kidney crosses midline (1:1000)
- Thoracic kidney: Rare, above diaphragm

*Fusion Anomalies:*
- Horseshoe kidney: 90% fuse at lower poles
- Cake kidney: Complete fusion (rare)
- Disc kidney: Medial fusion without parenchymal bridging

*Morphological Variants:*
- Renal agenesis: Unilateral (1:1000), bilateral (1:4000)
- Hypoplastic kidney: Small but functional
- Supernumerary kidney: Very rare
- Renal cysts: Simple cysts (50% after age 50)

**Pulmonary Variations:**

*Lung Lobation:*
- Right lung typically has 3 lobes (upper, middle, lower)
- Left lung typically has 2 lobes (upper, lower)
- Azygos lobe: 1% (right side, created by azygos vein)
- Accessory cardiac lobe of right middle lobe: Variable

*Bronchial Variations:*
- Trifurcation of right main bronchus: Common
- Cardiac bronchus: Supernumerary bronchus to cardiac notch
- Apical segmental bronchus variations: Common

**Gastrointestinal Variations:**

*Intestinal Malrotation:*
- Incomplete rotation during development (1:500)
- Mesenteric root shortening
- Risk of midgut volvulus (life-threatening)
- Ladd's procedure for correction

*Meckel's Diverticulum:*
- Persistent vitelline duct (2% of population)
- Rule of 2s: 2% population, 2 inches long, 2 feet from ileocecal valve
- May contain ectopic gastric or pancreatic tissue
- Can cause bleeding or obstruction

*Appendix Variations:*
- Retrocecal position: 65%
| Pelvic: 30%
| Postileal: 2-5%
| Subcecal: 2%
| Long appendix: May reach left upper quadrant`,

      keyTerms: [
        { term: 'pancreas divisum', definition: 'Congenital failure of dorsal and ventral pancreatic ducts to fuse, resulting in separate drainage' },
        { term: 'annular pancreas', definition: 'Pancreatic tissue completely encircling the duodenum, potentially causing obstruction' },
        { term: 'horseshoe kidney', definition: 'Fusion of both kidneys at lower poles, creating U-shaped configuration' },
        { term: 'Riedel\'s lobe', definition: 'Tongue-like projection of right hepatic lobe that may extend inferiorly' },
        { term: 'Meckel\'s diverticulum', definition: 'True intestinal diverticulum from persistent vitelline duct, containing all bowel wall layers' },
        { term: 'azygos lobe', definition: 'Accessory lobe of right lung created by aberrant course of azygos vein' },
      ],

      analogies: [
        'The pancreas divisum is like two houses that never connected their plumbing - they both work but drain separately.',
        'Kidney ascent is like an elevator - if it stops at the wrong floor, the kidney ends up in an abnormal position.',
      ],

      clinicalNotes: 'Pancreas divisum is the most common congenital pancreatic anomaly and may predispose to recurrent pancreatitis. Malrotation requires surgical correction due to volvulus risk. Horseshoe kidney is associated with increased risk of renal calculi and urinary tract infections.',
    },

    4: {
      level: 4,
      summary: 'Organ variations result from specific disruptions in molecular signaling pathways, morphogenetic movements, and tissue interactions during embryogenesis, with patterns reflecting the timing of developmental arrest and the nature of the perturbed process.',
      explanation: `**Molecular Basis of Organogenesis**

*Key Signaling Pathways:*

**Hox Genes:**
- HOXC6: Important for kidney positioning
- HOXA13: Müllerian duct development
- HOXD13: Limb and genital development

**Retinoic Acid Signaling:**
- Essential for left-right asymmetry
- Regulates heart looping, gut rotation
- Deficiency causes heterotaxy syndromes

**Sonic Hedgehog (Shh):**
- Lung bud formation and branching
- Gut tube patterning
- Pancreatic bud specification

**FGF Signaling:**
- Branching morphogenesis in lung, kidney
- Liver specification
- Limb bud development

**BMP and Wnt Pathways:**
- Kidney nephrogenesis
- Pancreatic cell fate determination
- Lung branching

**Complex Organ Variations:**

*Heterotaxy Syndromes:*
- Situs ambiguous: Neither situs solitus nor inversus
- Polysplenia: Multiple small spleens
- Asplenia: Absent spleen (Ivemark syndrome)
- Associated with complex cardiac anomalies

*Laterality Sequences:*
- Primary ciliary dyskinesia: Kartagener syndrome (situs inversus)
- Randomization of situs in 50% of cases
- Associated with infertility, respiratory infections

*Ovarian and Testicular Variations:*
- Ovarian agenesis: unilateral (rare), bilateral (Turner syndrome)
- Testicular agenesis: bilateral (anorchia), unilateral
- Ovotesticular disorder: Both ovarian and testicular tissue
- Cryptorchidism: Undescended testes (1-3% term males)

**Uterine Anomalies (AFR Classification):**

| Class | Description | Frequency | Clinical Impact |
|-------|-------------|-----------|-----------------|
| I | Hypoplasia/agenesis | 1:10,000 | Amenorrhea, infertility |
| II | Unicornuate | 1:40,000 | Pregnancy loss, preterm |
| III | Didelphys (double uterus) | 1:1000 | Usually normal fertility |
| IV | Bicornuate | 1:200 | Pregnancy loss |
| V | Septate | 1:500 | Highest pregnancy loss |
| VI | Arcuate | 1:25 | Minimal impact |
| VII | DES-related | Historical exposure | Structural + functional |

**Splenic Variations:**

*Accessory Spleens:*
- Single: 10-30%
- Multiple: 10-20% of those with accessory
- Common locations: Splenic hilum, tail of pancreas, gastrocolic ligament
- Clinical significance: May hypertrophy after splenectomy, mimic disease

*Asplenia/Polysplenia:*
- Part of heterotaxy spectrum
- Associated with congenital heart disease
- Impaired immune function (asplenia)
- Vaccination essential (asplenia)

**Adrenal Variations:**

*Ectopic Adrenal Tissue:*
- Along path of gonadal descent
- Spermatic cord/round ligament
- May undergo hyperplasia, cause symptoms

*Adrenal Fusion:*
- Over kidney (adrenorenal fusion)
- With liver (adrenohepatic fusion)
- Can complicate surgical identification

**Gastric Variations:**

*Congenital Anomalies:*
- Gastric atresia: Extremely rare
- Pyloric atresia: Rare, often associated with epidermolysis bullosa
- Duplication cysts: Variable presentation
- Diverticula: Usually along greater curvature

*Positional:*
- Thoracic stomach: congenital hiatal hernia
- Gastric volvulus potential with mobile stomach`,

      keyTerms: [
        { term: 'heterotaxy', definition: 'Abnormal arrangement of thoraco-abdominal organs across the left-right axis of the body' },
        { term: 'polysplenia', definition: 'Condition of having multiple small spleens instead of one normal spleen' },
        { term: 'AFR classification', definition: 'American Fertility Society system for categorizing Müllerian duct anomalies' },
        { term: 'cryptorchidism', definition: 'Failure of one or both testicles to descend into the scrotum' },
        { term: 'situs inversus', definition: 'Complete mirror-image reversal of thoracic and abdominal organs' },
        { term: 'Kartagener syndrome', definition: 'Primary ciliary dyskinesia with situs inversus, chronic sinusitis, and bronchiectasis' },
      ],

      clinicalNotes: 'The septate uterus has the highest association with reproductive complications and is treated by hysteroscopic septum resection. Unicornuate uterus often has a rudimentary horn that may contain endometrium, requiring surgical excision due to ectopic pregnancy risk. Heterotaxy syndromes require comprehensive cardiac evaluation due to high association with complex congenital heart disease.',
    },

    5: {
      level: 5,
      summary: 'Organ variations represent the phenotypic expression of complex genetic, epigenetic, and environmental influences during critical windows of organogenesis, with implications extending beyond anatomy to encompass functional physiology, disease susceptibility, and personalized surgical approaches.',
      explanation: `**Advanced Genetic and Epigenetic Concepts**

*Developmental Gene Networks:*

**Laterality Determination:**
- Nodal signaling cascade: Left-sided expression
- PITX2: Left-sided morphogenesis master regulator
- Lefty2: Left-sided signaling inhibition
- ZIC3: Human heterotaxy gene (X-linked)

**Renal Development Genes:**
- RET: Ureteric bud outgrowth
- GDNF: RET ligand, guides bud branching
- WT1: Wilms tumor gene, renal development
- PAX2: Kidney and urinary tract formation
- HNF1B: Renal cysts and diabetes syndrome

**Müllerian Duct Development:**
- WNT4: Female duct development, regression of Wolffian
- WNT7A: Duct patterning
- LHX1: Duct formation
- HOXA10-13: Segmentation and fusion

**Epigenetic Regulation:**
- DNA methylation: Gene silencing during differentiation
- Histone modification: Chromatin accessibility
- Non-coding RNAs: Post-transcriptional regulation
- Environmental influences: Nutrition, toxins, stress

**Rare Complex Organ Anomalies:**

*Gastric Duplication Cyst:*
- Rare congenital foregut anomaly
- Contains all bowel wall layers
- May communicate with gastric lumen
- Malignant transformation potential
- Treatment: Surgical excision

*Renal Fusion Anomalies:*
- Pancake kidney: Rare complete fusion
- Disk kidney: Medial fusion
- Crossed renal ectopia without fusion: Uncommon
- Associated with VUR in 20-30%

*Hepatopulmonary Fusion:*
- Rare congenital anomaly
- Direct connection between liver and lung
- Associated with diaphragmatic hernia
- Usually right-sided

**Clinical Implications and Management:**

*Impact on Organ Function:*

| Variation | Functional Impact | Long-term Risks |
|-----------|-------------------|-----------------|
| Renal agenesis | Compensatory hypertrophy | Hyperfiltration injury |
| Pancreas divisum | Possible outflow obstruction | Recurrent pancreatitis |
| Intestinal malrotation | Normal motility usually | Volvulus risk |
| Septate uterus | Normal implantation possible | Higher loss rate |
| Accessory spleen | Normal splenic function | Confuses lymphoma staging |

*Surgical Considerations:*

**Oncologic Surgery:**
- Organ variants alter resection margins
- Lymphatic drainage patterns differ
- Vascular supply may be atypical
- Reconstruction techniques modified

**Minimally Invasive Surgery:**
- Anomalous anatomy challenges orientation
- Accessory organs may be confused with pathology
- Vascular variants increase bleeding risk
- Preoperative imaging essential

**Transplant Surgery:**
- Living donor evaluation identifies variants
- Reconstruction techniques accommodate anomalies
- Recipient anatomy influences implantation
- Vascular anomalies require modified anastomoses

*Diagnostic Dilemmas:*

- Accessory spleen mistaken for lymphadenopathy
- Retrocecal appendix mimics pelvic pathology
- Horseshoe kidney confused with abdominal mass
- Lung nodules mistaken for pathology
- Uterine septum vs. bicornuate differentiation

**Emerging Concepts:**

*Prenatal Detection:*
- Ultrasound detection of major anomalies
- Fetal MRI for detailed characterization
- Genetic testing for associated syndromes
- Parental counseling and delivery planning

*Personalized Surgical Planning:*
- 3D printing from patient imaging
- Virtual reality surgical simulation
- Patient-specific implant fabrication
- Robotic surgery adaptation to variants

*Long-term Surveillance:*
- Renal variant: Regular renal function monitoring
- Pancreatic divisum: Pancreatitis surveillance
- Uterine anomaly: Pregnancy planning
- Splenic variants: Post-splenectomy precautions`,

      keyTerms: [
        { term: 'PITX2', definition: 'Paired-like homeodomain transcription factor 2; master regulator of left-sided morphogenesis' },
        { term: 'RET/GDNF pathway', definition: 'Signaling system essential for ureteric bud outgrowth and renal branching morphogenesis' },
        { term: 'WT1', definition: 'Wilms tumor 1 gene; transcription factor critical for kidney and gonadal development' },
        { term: 'Müllerian duct anomalies', definition: 'Developmental defects of female reproductive tract from abnormal Müllerian duct formation/fusion' },
        { term: 'compensatory hypertrophy', definition: 'Enlargement of remaining organ/tissue after contralateral loss or agenesis' },
      ],

      clinicalNotes: 'Organ variants require systematic evaluation for associated anomalies. For example, renal agenesis prompts evaluation for Müllerian anomalies in females. Preoperative imaging is essential when variants are suspected. In oncologic surgery, anomalous anatomy may change resection margins and lymphadenectomy templates. The presence of organ variants should be clearly documented in medical records and communicated to the surgical team.',
    },
  },

  media: [
    {
      id: 'organ-variations-1',
      type: 'diagram',
      filename: 'renal-variants.svg',
      title: 'Renal Anomalies',
      description: 'Illustration of various kidney position and fusion anomalies',
    },
    {
      id: 'organ-variations-2',
      type: 'diagram',
      filename: 'uterine-anomalies.svg',
      title: 'Müllerian Duct Anomalies (AFR Classification)',
      description: 'Classification system for uterine congenital anomalies',
    },
    {
      id: 'organ-variations-3',
      type: 'diagram',
      filename: 'pancreas-divisum.svg',
      title: 'Pancreas Divisum Anatomy',
      description: 'Normal pancreatic duct anatomy vs. pancreas divisum',
    },
  ],

  citations: [
    {
      id: 'moore-organogenesis',
      type: 'textbook',
      title: 'Embryology',
      source: 'The Developing Human: Clinically Oriented Embryology, Moore, 11th Edition',
      license: 'Copyrighted',
    },
    {
      id: 'standring-organ',
      type: 'textbook',
      title: 'Abdominal and Pelvic Viscera',
      source: 'Gray\'s Anatomy, 42nd Edition',
      chapter: 'Abdomen',
      license: 'Copyrighted',
    },
    {
      id: 'afs-classification',
      type: 'article',
      title: 'The American Fertility Society Classifications of Adnexal Adhesions, Tubal Occlusion, Tubal Diseases, Mullerian Anomalies and Intrauterine Adhesions',
      source: 'Fertility and Sterility',
      authors: ['Buttram, V.C.', 'Gomel, V.'],
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-kidney', targetType: 'structure', relationship: 'related', label: 'Kidney' },
    { targetId: 'anatomy-liver', targetType: 'structure', relationship: 'related', label: 'Liver' },
    { targetId: 'anatomy-pancreas', targetType: 'structure', relationship: 'related', label: 'Pancreas' },
    { targetId: 'anatomy-uterus', targetType: 'structure', relationship: 'related', label: 'Uterus' },
    { targetId: 'pathology-malrotation', targetType: 'condition', relationship: 'see-also', label: 'Intestinal Malrotation' },
  ],

  tags: {
    systems: ['digestive', 'urinary', 'reproductive', 'respiratory'],
    structures: ['organs', 'viscera', 'kidney', 'liver', 'pancreas', 'uterus', 'lung'],
    topics: ['anatomy', 'congenital variations', 'embryology', 'surgical anatomy'],
    keywords: ['organ variants', 'visceral anomalies', 'congenital', 'organogenesis', 'morphology'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'obgyn', 'pediatrics', 'radiology'],
    },
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
