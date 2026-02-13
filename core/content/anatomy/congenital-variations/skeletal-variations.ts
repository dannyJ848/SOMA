/**
 * Skeletal Variations - Congenital Anatomical Variations
 *
 * Developmental variations in bones and joints including size, shape,
 * number, and structural differences that occur congenitally.
 */

import { EducationalContent } from '../../types';

export const SKELETAL_VARIATIONS: EducationalContent = {
  id: 'anatomy-variations-skeletal',
  type: 'topic',
  name: 'Skeletal Variations',
  alternateNames: ['Bone Anomalies', 'Osseous Variants', 'Skeletal Anomalies'],

  levels: {
    1: {
      level: 1,
      summary: 'Skeletal variations are natural differences in how bones are shaped, sized, or connected that some people are born with.',
      explanation: `**What Are Skeletal Variations?**

Just like people have different heights, face shapes, or foot sizes, the bones inside our bodies can also vary from person to person. These differences in bone structure are called skeletal variations.

**Types of Skeletal Variations:**

1. **Extra Bones**: Some people have bones that others don't have
2. **Missing Bones**: Some people might be born without certain bones
3. **Shape Differences**: Bones might be curved differently or have different shapes
4. **Size Differences**: Bones can be larger or smaller than average
5. **Connection Differences**: How bones connect at joints might vary

**Common Examples:**

- Extra ribs at the bottom of the rib cage
- Extra bones in the feet (accessory ossicles)
- Bones that are naturally fused together
- Different shapes of vertebrae (spine bones)
- Wrist bones that vary in number

**Why Do They Happen?**

Skeletal variations occur as a baby's bones develop before birth. The blueprint for bone formation can vary slightly, leading to these natural differences. It's similar to how some families tend to have certain physical traits.

**Are They a Problem?**

Most skeletal variations are completely normal and don't cause any issues:

- Many people never know they have them
- They usually don't affect movement or strength
- They're often found by accident during X-rays for other reasons

**When Do They Matter?**

Sometimes skeletal variations can:
- Cause pain or stiffness
- Make joints less stable
- Affect how well someone can move
- Need treatment if they press on nerves

**Interesting Facts:**

- About 10% of people have an extra rib
- The number of bones can vary from person to person
- X-rays often reveal variations that were never noticed`,

      keyTerms: [
        { term: 'skeletal variation', definition: 'A difference in bone shape, size, number, or connection that you\'re born with' },
        { term: 'congenital', definition: 'Something that develops before birth' },
        { term: 'vertebrae', definition: 'The individual bones that stack to form your spine', pronunciation: 'VER-tuh-bree' },
        { term: 'ossicles', definition: 'Small bones, especially the tiny bones in the middle ear or extra bones in feet', pronunciation: 'OS-sih-kuls' },
        { term: 'accessory', definition: 'Extra or additional, like an accessory bone that not everyone has' },
      ],

      analogies: [
        'Skeletal variations are like different architectural styles - the overall structure serves the same purpose, but the details vary.',
        'Think of skeletal variations like different car models - they all have wheels, engines, and seats, but the specific designs differ.',
      ],

      examples: [
        'Some people have an extra rib near their neck called a cervical rib.',
        'The small bones in your wrist might be arranged differently than someone else\'s.',
        'Some people have naturally fused bones in their feet that were meant to be separate.',
      ],

      patientCounselingPoints: [
        'Having a skeletal variation is usually normal and doesn\'t require treatment.',
        'These variations are often found accidentally during X-rays for unrelated problems.',
        'If a variation is causing pain or problems, your doctor can discuss treatment options.',
      ],
    },

    2: {
      level: 2,
      summary: 'Skeletal variations are congenital differences in bone morphology, number, and articulation patterns that occur during embryological development and ossification, with most being asymptomatic but requiring recognition for surgical planning and radiographic interpretation.',
      explanation: `**Overview of Skeletal Variations**

Skeletal variations represent deviations from typical osseous anatomy that develop during embryogenesis and childhood growth. These variations are distinct from pathological conditions and fractures.

**Classification by Type:**

*Variations in Number:*
- Accessory bones (additional ossicles)
- Wormian bones (skull suture bones)
- Extra ribs (cervical, lumbar)
- Sesamoid bone variations

*Variations in Shape:*
- Elongated processes
- Enlarged tubercles
- Atypical curvature patterns
- Fusion anomalies

*Variations in Articulation:*
- Accessory joints
- Fusion of normally separate elements
- Variant joint configurations

**Common Skeletal Variations:**

| Variation | Location | Frequency | Clinical Significance |
|-----------|----------|-----------|----------------------|
| Cervical rib | C7 vertebra | 0.5-1% | May cause thoracic outlet syndrome |
| Lumbar rib | L1 vertebra | 1-15% | Usually asymptomatic |
| Wormian bones | Skull sutures | Common | Mostly normal, some pathologic associations |
| Accessory navicular | Foot | 10-25% | May cause foot pain |
| Bipartite patella | Knee | 2-3% | Usually asymptomatic |
| Sesamoid variations | Hand/foot | Variable | Can cause pain if enlarged |
| Os acromiale | Shoulder | 1-15% | May contribute to impingement |

**Embryological Basis:**

*Ossification Patterns:*
- **Endochondral ossification**: Long bones, vertebrae, pelvis
- **Intramembranous ossification**: Flat bones of skull, mandible, clavicle
- **Variations arise from**: Altered ossification centers, fusion timing, or mechanical forces

*Developmental Timing:*
- Primary ossification centers: Weeks 8-12 embryonic
- Secondary ossification centers: Birth through puberty
- Final fusion: Late adolescence to early adulthood

**Clinical Relevance:**

*Why Recognition Matters:*

1. **Radiographic Interpretation**: Variants can mimic fractures
2. **Surgical Planning**: Anomalous anatomy affects approach
3. **Differential Diagnosis**: Distinguish variant from pathology
4. **Trauma Assessment**: Congenital variants vs. acute injuries
5. **Pain Generation**: Some variants become symptomatic`,

      keyTerms: [
        { term: 'ossification', definition: 'The natural process of bone formation from cartilage or fibrous tissue', pronunciation: 'ah-sih-fih-KAY-shun' },
        { term: 'Wormian bones', definition: 'Small accessory bones within cranial sutures, named after Danish anatomist Ole Worm', pronunciation: 'WOR-mee-un' },
        { term: 'cervical rib', definition: 'Accessory rib arising from cervical vertebra, usually C7', pronunciation: 'SIR-vih-kul' },
        { term: 'sesamoid bone', definition: 'Bone embedded within tendon, typically where tendon passes over joint', pronunciation: 'SEH-sah-moyd' },
        { term: 'os acromiale', definition: 'Failure of fusion of acromial ossification centers, creating separate bone fragment', pronunciation: 'OS ah-kro-mee-AH-lay' },
      ],

      analogies: [
        'Bone development is like a construction project where different building sections are built at different times and then connected - variations occur when the connections happen differently.',
        'Sesamoid bones are like pebbles that form under rope when it rubs against ground - they develop where tendons experience high pressure.',
      ],

      clinicalNotes: 'Cervical ribs can cause thoracic outlet syndrome by compressing the brachial plexus or subclavian vessels. Accessory navicular can become painful with flatfoot deformity. Bipartite patella can be mistaken for fracture on radiographs - the smooth edges and typical location help distinguish the variant.',
    },

    3: {
      level: 3,
      summary: 'Skeletal variations result from alterations in the complex processes of endochondral and intramembranous ossification, including variations in ossification center number, timing of fusion, and response to mechanical forces during development.',
      explanation: `**Detailed Developmental Ossification**

*Endochondral Ossification Sequence:*

1. **Mesenchymal condensation** → cartilage model formation
2. **Perichondral bone collar** → primary ossification center
3. **Vascular invasion** → secondary ossification centers
4. **Growth plate formation** → longitudinal growth
5. **Epiphyseal fusion** → cessation of growth

*Intramembranous Ossification Sequence:*

1. **Mesenchymal condensation**
2. **Direct bone deposition** (no cartilage intermediate)
3. **Expansion** and remodeling
4. **Suture formation** (in skull)

**Axial Skeleton Variations:**

*Vertebral Anomalies:*

| Type | Description | Frequency | Clinical Impact |
|------|-------------|-----------|-----------------|
| Transition vertebrae | Lumbarized S1 or sacralized L5 | 5-15% | Alters biomechanics |
| Accessory ribs | Cervical or lumbar | Variable | Can cause nerve compression |
| Spina bifida occulta | Failure of posterior arch fusion | 5-10% | Usually asymptomatic |
| Hemivertebrae | Wedge-shaped vertebrae | 0.3-1% | Scoliosis, if multiple |
*Butterfly vertebrae | Failure of notochord regression | Rare | May cause instability |
| Block vertebrae | Congenital fusion | Rare | Reduced motion |

*Rib Variations:*
- **Cervical rib**: Usually C7, can be partial or complete
  - Bilateral in 50-70% of cases
  - More common in females
  - Thoracic outlet syndrome in 10% of those with cervical rib

- **Lumbar rib**: L1 most common, usually rudimentary
  - Associated with lumbosacral transitions
  - Usually asymptomatic

- **Bifid rib**: Split rib, usually anterior
  - May mimic fracture on imaging
  - Usually right-sided, upper ribs

**Appendicular Skeleton Variations:**

*Upper Extremity:*

**Shoulder Girdle:**
- **Os acromiale**: Failure of acromial fusion
  - Type I (meso-acromion): Most common
  - Types II-IV: More rare patterns
  - May contribute to rotator cuff pathology

- **Clavicular variations**:
  - Rhomboid fossa in medial clavicle (costoclavicular ligament)
  - Congenital pseudarthrosis (rare)

**Hand:**
- **Accessory ossicles**: Common in wrist
  - Os radiale (scaphoid accessory)
  - Os centrale (between scaphoid, capitate, trapezoid)
  - Os triangulare (triquetral accessory)

- **Sesamoid variations**:
  - Two at 1st MCP (normal)
  - Variable at other MCPs
  - May enlarge and become painful

**Lower Extremity:**

**Pelvis:**
- **Accessory ossification centers**: Iliac crest, ischium
- **Pelvic variations**: Sacralization of L5, lumbarization of S1

**Knee:**
- **Bipartite patella**: Failure of patellar fusion
  - Superolateral fragment most common (75%)
  - Bilateral in 40-50%
  - Smooth margins distinguish from fracture

- **Fabella**: Sesamoid in lateral gastrocnemius head
  - Present in 10-30% of population
  - Bilateral in 60-80%
  - Can cause popliteal fossa pain

**Foot:**
- **Accessory navicular**:
  - Type I: Sesamoid in posterior tibial tendon
  - Type II: Accessory ossification center (most symptomatic)
  - Type III: Cornuated navicular (enlarged tuberosity)
  - May cause flatfoot, medial foot pain

- **Os trigonum**: Stedella's process
  - Accessory bone posterior to talus
  - 5-15% of population
  - Can cause posterior ankle impingement

- **Other foot variants**:
  - Os peroneum (peroneus longus sesamoid): 10-20%
  - Os vesalianum (base of 5th metatarsal): Rare
  - Os intermetatarseum: Between metatarsal bases`,

      keyTerms: [
        { term: 'endochondral ossification', definition: 'Bone formation that occurs through a cartilage intermediate template' },
        { term: 'intramembranous ossification', definition: 'Direct bone formation from mesenchymal tissue without cartilage intermediate' },
        { term: 'transitional vertebrae', definition: 'Vertebrae with characteristics of both adjacent regions (lumbarized or sacralized)' },
        { term: 'hemivertebrae', definition: 'Congenital wedge-shaped vertebra causing scoliosis due to asymmetric growth' },
        { term: 'bipartite patella', definition: 'Patella composed of two or more unfused ossification centers' },
        { term: 'fabella', definition: 'Sesamoid bone in lateral head of gastrocnemius muscle, posterior to knee joint' },
      ],

      analogies: [
        'Transitional vertebrae are like border towns - they have characteristics of both neighboring regions.',
        'The bipartite patella is like a puzzle piece that never fused together - the separate pieces fit together perfectly but never bonded.',
      ],

      clinicalNotes: 'Os acromiale can cause rotator cuff tears due to altered biomechanics and mobility of the unfused fragment. Bipartite patella can be confused with fracture - smooth cortical margins and typical superolateral location favor the congenital variant. Accessory navicular may require excision or fusion if conservative treatment fails.',
    },

    4: {
      level: 4,
      summary: 'Skeletal variations reflect disturbances in the tightly regulated processes of osteogenesis, including genetic programming of ossification centers, molecular signaling pathways governing bone formation, and mechanical influences during critical developmental windows.',
      explanation: `**Molecular Basis of Osteogenesis**

*Key Signaling Pathways:*

**Hedgehog Signaling:**
- Indian Hedgehog (Ihh): Essential for endochondral ossification
- Regulates chondrocyte proliferation and hypertrophy
- Controls growth plate organization
- Interacts with PTHrP pathway

**BMP Signaling:**
- BMP2, BMP4, BMP7: Critical for bone formation
- Induce osteoblast differentiation
- Regulate both intramembranous and endochondral ossification
- Mutations cause skeletal dysplasias

**Wnt/β-Catenin Pathway:**
- Wnt signaling: Osteoblast differentiation
- Sclerostin: Inhibits bone formation
- LRP5/6: Wnt co-receptors
- Mutations cause high or low bone mass phenotypes

**FGF Signaling:**
- FGF receptors: Growth plate regulation
- FGFR3 mutations: Achondroplasia, thanatophoric dysplasia
- Balance between proliferation and differentiation

**Runx2 and Osterix:**
- Runx2: Master transcription factor for osteogenesis
- Osterix (Sp7): Required for osteoblast differentiation
- Genetic ablation: No bone formation

**Complex Skeletal Anomalies:**

*Craniosynostosis:*
- Premature suture fusion
- Syndromic (Apert, Crouzon, Pfeiffer) vs. non-syndromic
- FGFR mutations common
- Cranial vault remodeling required

*Skeletal Dysplasias:*
- Achondroplasia: FGFR3 mutation (most common dwarfism)
- Osteogenesis imperfecta: COL1A1/COL1A2 mutations
- Thanatophoric dysplasia: Lethal FGFR3 mutation
- Multiple epiphyseal dysplasia: COMP mutations

**Specific Variant Patterns:**

*Os Acromiale:*
- Failure of fusion of one or more acromial ossification centers
- Development: 3-4 centers fuse by age 18-25
- Classification: Types I-IV based on which centers fail to fuse
- Clinical significance: Impingement, rotator cuff pathology
- Treatment: Resection or fusion if symptomatic

*Cervical Rib:*
- Developmental anomaly of C7 transverse process
- Classification:
  - Complete: Forms true rib with anterior component
  - Incomplete: Only posterior component
- Thoracic outlet syndrome mechanisms:
  - Scalene triangle narrowing
  - Brachial plexus compression
  - Subclavian artery/vein compression
- Surgical: First rib resection, scalenectomy

*Accessory Navicular:*
- Type I (30%): Sesamoid within PT tendon
- Type II (55%): Secondary ossification center
- Type III (15%): Cornuated navicular
- Symptomatic Type II: Medial foot pain, flatfoot
- Treatment: Orthotics, surgical excision (Kidner procedure)`,

      keyTerms: [
        { term: 'craniosynostosis', definition: 'Premature fusion of one or more cranial sutures, causing abnormal skull shape' },
        { term: 'skeletal dysplasia', definition: 'Group of genetic disorders affecting bone and cartilage development' },
        { term: 'achondroplasia', definition: 'Most common form of dwarfism, caused by FGFR3 mutation affecting cartilage growth' },
        { term: 'Indian Hedgehog (Ihh)', definition: 'Signaling molecule critical for endochondral bone formation and growth plate regulation' },
        { term: 'PTHrP', definition: 'Parathyroid hormone-related protein; regulates growth plate chondrocyte differentiation' },
      ],

      clinicalNotes: 'Os acromiale should be considered in young overhead athletes with impingement symptoms. Cervical rib causing thoracic outlet syndrome requires surgical decompression for definitive treatment. Accessory navicular Type II is most likely to become symptomatic due to micro-motion at the synchondrosis.',
    },

    5: {
      level: 5,
      summary: 'Skeletal variations represent the phenotypic expression of complex genetic, epigenetic, and biomechanical influences during osteogenesis, with implications extending beyond anatomical variation to encompass functional biomechanics, disease susceptibility, and personalized orthopedic approaches.',
      explanation: `**Advanced Genetic and Developmental Concepts**

*Developmental Gene Networks:*

**Osteoblast Lineage:**
- MSC (Mesenchymal Stem Cell) commitment
- Runx2: Early osteoblast determination
- Osterix: Osteoblast differentiation
- Dlx5, Msx2: Craniofacial skeletogenesis
- ATF4: Late osteoblast function

**Osteoclast Lineage:**
- M-CSF: Precursor proliferation
- RANKL: Differentiation and activation
- OPG: Decoy receptor, inhibits RANKL
- Cathepsin K: Bone resorption

**Wnt Signaling in Detail:**
- Wnt10b: Promotes osteoblastogenesis
- Sclerostin (SOST): Osteocyte-derived inhibitor
- Dkk1: Wnt pathway inhibitor
- LRP5/6: Co-receptors for Wnt

**FGF Signaling Complexity:**
- FGFR1-3: Growth plate regulation
- FGF18: Chondrocyte proliferation inhibitor
- Sprouty genes: Negative feedback regulators
- MAPK pathway: Downstream signaling

**Rare Skeletal Anomalies and Syndromes:**

*Meyer's Dysplasia:*
- Multiple epiphyseal dysplasia variant
- Affects hips primarily
- May be mistaken for Perthes disease
- Usually resolves spontaneously

*Blount's Disease:*
- Tibia vara from medial proximal tibial growth disturbance
- Infantile vs. late-onset types
- Associated with early walking, obesity
- Surgical: Guided growth, osteotomy

*Progressive Diaphyseal Dysplasia (Camurati-Engelmann):*
- TGFB1 mutation
- Cortical thickening of diaphyses
- Muscle weakness, pain
- Corticosteroids may help

**Clinical Implications by Region:**

*Spine:*
- Transitional vertebrae alter biomechanics
- May accelerate adjacent segment degeneration
- Confuse pain referral patterns
- Affect surgical level counting

*Shoulder:*
- Os acromiale: Alters impingement dynamics
- Buford complex: Absent superior glenohumeral ligament
- Coracoid process variations: Subcoracoid impingement

*Hip:*
- Cam morphology: Femoral head-neck offset abnormality
- Pincer morphology: Acetabular overcoverage
- Combined femoroacetabular impingement
- Associated with labral tears, early arthritis

*Foot and Ankle:*
- Accessory navicular: Medial longitudinal arch support
- Os trigonum syndrome: Posterior impingement
- Coalition: Tarsal coalition (calcaneonavicular, talocalcaneal)
- Hallux valgus variants: First ray hypermobility

**Surgical Decision-Making:**

*When to Treat Variants:*
- Symptomatic variants: Pain, dysfunction
- Progressive deformity: Growth imbalance
- Secondary effects: Arthritis, instability
- Cosmetic concerns: Visible deformity

*Treatment Algorithms:*
- Conservative first: Activity modification, orthotics
- Targeted injections: Diagnostic and therapeutic
- Surgical indications: Failed conservative, progression
- Technique selection: Resection, fusion, osteotomy

**Emerging Concepts:**

*Biomolecular Influences:*
- Epigenetics: Methylation affects bone genes
- MicroRNA: Post-transcriptional regulation
- Extracellular vesicles: Cell-cell communication
- Mechanotransduction: Mechanical to biochemical signals

*Personalized Medicine:*
- Genetic testing for suspected syndromes
- 3D preoperative planning from CT
- Custom implants for unique anatomy
- Biological augmentation: BMP, PRP, stem cells

*Future Directions:*
- In utero detection and intervention
- Genetic therapies for dysplasias
- Pharmacological modification of variants
- Enhanced understanding of biomechanics`,

      keyTerms: [
        { term: 'MSC', definition: 'Mesenchymal stem cells; multipotent progenitors of osteoblasts, chondrocytes, adipocytes' },
        { term: 'RANKL/OPG', definition: 'Receptor activator of nuclear factor kappa-B ligand / osteoprotegerin; key regulators of bone resorption' },
        { term: 'cam morphology', definition: 'Femoral head-neck junction asphericity causing femoroacetabular impingement' },
        { term: 'pincer morphology', definition: 'Acetabular overcoverage causing femoroacetabular impingement' },
        { term: 'tarsal coalition', definition: 'Abnormal fibrous, cartilaginous, or osseous connection between tarsal bones' },
      ],

      clinicalNotes: 'Femoroacetabular impingement morphology (cam and/or pincer) is increasingly recognized as a major cause of hip pain in young adults and precursor to osteoarthritis. Early arthroscopic treatment can potentially alter disease progression. Accessory navicular in athletes often requires surgical excision for return to sport. Tarsal coalition requires CT or MRI for definitive diagnosis; surgical treatment depends on type, location, and degenerative changes.',
    },
  },

  media: [
    {
      id: 'skeletal-variations-1',
      type: 'diagram',
      filename: 'skeletal-variants-summary.svg',
      title: 'Common Skeletal Variations',
      description: 'Illustration of common accessory bones and skeletal variants',
    },
    {
      id: 'skeletal-variations-2',
      type: 'diagram',
      filename: 'vertebral-anomalies.svg',
      title: 'Vertebral Anomalies',
      description: 'Classification of vertebral congenital anomalies',
    },
    {
      id: 'skeletal-variations-3',
      type: 'diagram',
      filename: 'accessory-navicular-types.svg',
      title: 'Accessory Navicular Types',
      description: 'Three types of accessory navicular classification',
    },
  ],

  citations: [
    {
      id: 'moore-skeletal',
      type: 'textbook',
      title: 'Skeletal System',
      source: 'Clinically Oriented Anatomy, Moore, 9th Edition',
      chapter: 'Skeletal System',
      license: 'Copyrighted',
    },
    {
      id: 'standring-bone',
      type: 'textbook',
      title: 'Bones and Cartilage',
      source: 'Gray\'s Anatomy, 42nd Edition',
      chapter: 'Osteology',
      license: 'Copyrighted',
    },
    {
      id: 'resnick-skeletal',
      type: 'textbook',
      title: 'Imaging of Skeletal Variants and Anomalies',
      source: 'Diagnosis of Bone and Joint Disorders, Resnick',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-vertebra', targetType: 'structure', relationship: 'related', label: 'Vertebrae' },
    { targetId: 'anatomy-ribs', targetType: 'structure', relationship: 'related', label: 'Ribs' },
    { targetId: 'anatomy-clavicle', targetType: 'structure', relationship: 'related', label: 'Clavicle' },
    { targetId: 'anatomy-patella', targetType: 'structure', relationship: 'related', label: 'Patella' },
    { targetId: 'pathology-thoracic-outlet', targetType: 'condition', relationship: 'see-also', label: 'Thoracic Outlet Syndrome' },
    { targetId: 'pathology-fai', targetType: 'condition', relationship: 'see-also', label: 'Femoroacetabular Impingement' },
  ],

  tags: {
    systems: ['musculoskeletal'],
    structures: ['bones', 'skeleton', 'vertebrae', 'ribs', 'patella', 'accessory bones'],
    topics: ['anatomy', 'congenital variations', 'skeletal system', 'orthopedics'],
    keywords: ['skeletal variants', 'accessory bones', 'cervical rib', 'bipartite patella', 'ossification'],
    clinicalRelevance: 'medium',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['orthopedics', 'radiology', 'anatomy'],
    },
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
