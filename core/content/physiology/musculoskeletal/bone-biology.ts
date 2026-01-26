/**
 * Bone Biology - Comprehensive Educational Content
 *
 * Covers bone remodeling, calcium metabolism, and osteoporosis
 * for orthopedic and rheumatologic patient education.
 */

import { EducationalContent } from '../../types';

export const boneRemodelingContent: EducationalContent = {
  id: 'physiology-bone-remodeling',
  type: 'process',
  name: 'Bone Remodeling',
  alternateNames: ['Bone Turnover', 'Bone Metabolism'],

  levels: {
    1: {
      level: 1,
      summary: 'Your bones are constantly being broken down and rebuilt throughout your life, keeping them strong and healthy.',
      explanation: `Many people think bones are like rocks - solid and unchanging. But bones are actually living tissue that is always being renewed!

**Two types of bone cells work together:**
- **Osteoclasts**: Break down old or damaged bone (like demolition workers)
- **Osteoblasts**: Build new bone (like construction workers)

**Why bones need to remodel:**
1. Repair tiny cracks from daily activities
2. Adjust bone strength based on how you use your body
3. Release calcium into your blood when needed
4. Remove old, worn bone and replace it with new

**What happens when remodeling is out of balance:**
- If breakdown is faster than building: Bones become weak (osteoporosis)
- If building is faster than breakdown: Bones can become too dense but brittle

**Things that help bone remodeling:**
- Exercise (especially weight-bearing like walking)
- Calcium and vitamin D in your diet
- Hormones like estrogen and testosterone

About 10% of your skeleton is replaced every year! By the time you're an adult, you've replaced your entire skeleton several times.`,
      keyTerms: [
        { term: 'osteoclast', definition: 'A cell that breaks down bone tissue' },
        { term: 'osteoblast', definition: 'A cell that builds new bone tissue' },
        { term: 'remodeling', definition: 'The process of breaking down old bone and building new bone' },
      ],
      analogies: [
        'Bone remodeling is like maintaining a road - you have to constantly fix potholes and repave sections to keep it strong.',
        'Osteoclasts and osteoblasts work like a renovation team - some tear down old walls while others build new ones.',
      ],
      examples: [
        'When astronauts spend time in space without gravity, their bones don\'t get the signal to stay strong, so they lose bone.',
        'When you exercise regularly, your bones sense the stress and build themselves stronger.',
      ],
    },
    2: {
      level: 2,
      summary: 'Bone remodeling is a continuous process where osteoclasts resorb old bone in specific sites, followed by osteoblasts forming new bone, maintaining skeletal integrity and mineral homeostasis.',
      explanation: `Bone remodeling occurs in organized units and follows a predictable sequence. About 5-10% of the adult skeleton is replaced each year.

**The Basic Multicellular Unit (BMU):**
The BMU is the team of cells that carries out remodeling at each site:
- Osteoclasts (bone-resorbing cells)
- Osteoblasts (bone-forming cells)
- Blood vessels for nutrition
- Osteocytes (embedded bone cells that sense damage)

**Remodeling Cycle Phases:**

| Phase | Duration | What Happens |
|-------|----------|--------------|
| Activation | Days | Osteoclasts are recruited to the site |
| Resorption | 2-4 weeks | Osteoclasts dissolve old bone |
| Reversal | 1-2 weeks | Transition between resorption and formation |
| Formation | 4-6 months | Osteoblasts lay down new bone |
| Mineralization | Weeks | New bone hardens with calcium |
| Quiescence | Variable | Resting phase until next cycle |

**Types of Bone:**
- **Trabecular bone** (spongy): Found inside bones, remodels faster
- **Cortical bone** (compact): Hard outer shell, remodels slower

**Factors Affecting Remodeling:**

| Factor | Effect |
|--------|--------|
| Exercise | Stimulates bone formation |
| Estrogen | Protects against bone loss |
| Vitamin D | Helps absorb calcium |
| Parathyroid hormone | Regulates calcium balance |
| Aging | Shifts balance toward resorption |

**Clinical Importance:**
- Osteoporosis develops when resorption exceeds formation
- Fractures heal through a remodeling process
- Some medications work by slowing resorption (bisphosphonates)`,
      keyTerms: [
        { term: 'trabecular bone', definition: 'The spongy, honeycomb-like bone found inside vertebrae and at bone ends', pronunciation: 'trah-BEK-yoo-lar' },
        { term: 'cortical bone', definition: 'The dense, hard outer layer of bone', pronunciation: 'KOR-ti-kal' },
        { term: 'osteocyte', definition: 'Mature bone cell embedded in bone that senses mechanical stress and damage' },
        { term: 'resorption', definition: 'The process of breaking down bone tissue' },
      ],
    },
    3: {
      level: 3,
      summary: 'Bone remodeling is regulated by the RANK/RANKL/OPG axis, Wnt signaling, and mechanical loading sensed by osteocytes, with hormones and local factors coordinating the balance between resorption and formation.',
      explanation: `**Cellular Regulation:**

**Osteoclast Differentiation (RANK/RANKL/OPG):**
- RANK: Receptor on osteoclast precursors
- RANKL: Ligand produced by osteoblasts and osteocytes
- OPG (Osteoprotegerin): Decoy receptor that blocks RANKL

Pathway:
1. RANKL binds RANK on monocyte precursors
2. Activates NFkappaB and other signaling cascades
3. Osteoclast differentiation and activation
4. OPG competes with RANK for RANKL, reducing osteoclast activity

**Osteoblast Regulation (Wnt Signaling):**
- Wnt ligands bind Frizzled/LRP5/6 receptors
- Activates beta-catenin pathway
- Promotes osteoblast differentiation and survival
- Sclerostin (from osteocytes) inhibits Wnt signaling

**Hormonal Regulation:**

| Hormone | Effect on Bone | Mechanism |
|---------|---------------|-----------|
| PTH (continuous) | Increases resorption | Increases RANKL |
| PTH (intermittent) | Increases formation | Stimulates osteoblasts |
| Estrogen | Decreases resorption | Decreases RANKL, increases OPG |
| Vitamin D | Supports mineralization | Increases calcium absorption |
| Calcitonin | Decreases resorption | Direct osteoclast inhibition |
| Cortisol (excess) | Increases resorption, decreases formation | Multiple mechanisms |

**Mechanotransduction:**
Osteocytes detect mechanical loading through:
1. Fluid flow in canalicular network
2. Activation of mechanosensitive channels
3. Reduction in sclerostin secretion
4. Enhanced Wnt signaling
5. Increased bone formation

**Coupling of Resorption and Formation:**
- Resorption releases growth factors (TGF-beta, IGF, BMPs) from bone matrix
- These factors recruit osteoblast precursors
- Ensures formation follows resorption at the same site
- Uncoupling leads to pathological bone loss

**Clinical Applications:**
- Bisphosphonates: Inhibit osteoclast activity
- Denosumab: Monoclonal antibody against RANKL
- Teriparatide: PTH analog (intermittent dosing is anabolic)
- Romosozumab: Anti-sclerostin antibody`,
      keyTerms: [
        { term: 'RANKL', definition: 'Receptor activator of nuclear factor kappa-B ligand - promotes osteoclast formation' },
        { term: 'osteoprotegerin', definition: 'Decoy receptor that blocks RANKL and reduces bone resorption' },
        { term: 'sclerostin', definition: 'Protein secreted by osteocytes that inhibits bone formation via Wnt pathway' },
        { term: 'mechanotransduction', definition: 'Process by which cells convert mechanical stimuli into biochemical signals' },
      ],
      clinicalNotes: 'The RANK/RANKL/OPG system is the primary target for understanding and treating osteoporosis. Denosumab (anti-RANKL antibody) is highly effective but requires continued administration - discontinuation leads to rebound bone loss.',
    },
    4: {
      level: 4,
      summary: 'Advanced bone biology encompasses osteocyte network signaling, targeted versus stochastic remodeling, compartment-specific regulation, and the molecular basis of metabolic bone diseases.',
      explanation: `**Osteocyte Biology:**

Osteocytes are master regulators:
- Comprise 90-95% of bone cells
- Embedded in lacunae, connected by canaliculi
- Extensive dendritic network (3D sensing)
- Mechanosensors via primary cilia and integrins
- Orchestrate remodeling through signaling

Key Osteocyte Products:
| Product | Function |
|---------|----------|
| Sclerostin (SOST) | Inhibits Wnt, reduces formation |
| RANKL | Promotes osteoclast differentiation |
| FGF23 | Regulates phosphate homeostasis |
| DMP1 | Mineralization regulation |
| Prostaglandins | Local signaling |

**Targeted vs. Stochastic Remodeling:**

Targeted Remodeling:
- Responds to microdamage
- Osteocyte apoptosis signals damage site
- Precise repair of damaged bone
- Essential for fatigue crack repair

Stochastic Remodeling:
- Random, continuous turnover
- Maintains mineral homeostasis
- Replaces aged bone matrix
- Contributes to overall bone turnover

**Compartment-Specific Regulation:**

Trabecular Bone:
- Higher surface-to-volume ratio
- More active remodeling (~25%/year)
- More responsive to metabolic changes
- First affected in osteoporosis
- Bone marrow microenvironment influences

Cortical Bone:
- Lower surface-to-volume ratio
- Slower remodeling (~3%/year)
- Haversian remodeling (cortical BMU)
- Endocortical and periosteal surfaces
- Affected later in osteoporosis

**Bone Multicellular Unit Dynamics:**

Cortical BMU (Haversian):
- Cutting cone of osteoclasts
- Followed by reversal zone
- Closing cone of osteoblasts
- Creates new osteon over 3-6 months

Trabecular BMU:
- Surface-based remodeling
- Resorption lacuna (Howship's lacuna)
- Followed by osteoblast layer
- Refills resorption pit

**Pathophysiology of Bone Diseases:**

| Disease | Pathogenesis | Key Features |
|---------|--------------|--------------|
| Osteoporosis | Increased RANKL/OPG ratio, decreased Wnt | Low bone mass, fragility |
| Paget's disease | Focal increased turnover, abnormal osteoclasts | Enlarged, deformed bones |
| Osteopetrosis | Osteoclast dysfunction | Dense but brittle bones |
| Fibrous dysplasia | Galphas mutation | Fibrous bone replacement |`,
      keyTerms: [
        { term: 'lacunae', definition: 'Small cavities in bone matrix where osteocytes reside' },
        { term: 'canaliculi', definition: 'Tiny channels connecting osteocyte lacunae, allowing cell communication' },
        { term: 'Howship\'s lacuna', definition: 'Resorption pit created by osteoclasts on bone surface' },
        { term: 'osteon', definition: 'The basic unit of cortical bone, consisting of concentric lamellae around a central Haversian canal' },
      ],
      clinicalNotes: 'Trabecular bone is affected first in postmenopausal osteoporosis due to its higher turnover rate. This explains why vertebral fractures often precede hip fractures. DEXA scans at the spine and hip capture both trabecular and cortical bone.',
    },
    5: {
      level: 5,
      summary: 'Expert-level bone biology integrates signaling crosstalk, epigenetic regulation, bone-fat-muscle interactions, advanced imaging modalities, and emerging therapeutic targets for metabolic bone diseases.',
      explanation: `**Signaling Crosstalk:**

Wnt/Beta-catenin Integration:
- Canonical Wnt: Osteoblast differentiation
- Non-canonical Wnt: Cell polarity, migration
- Crosstalk with BMP, TGF-beta, Notch pathways
- Dickkopf (DKK1) as additional Wnt inhibitor
- LRP5 high bone mass mutations inform biology

RANK/RANKL Complex Signaling:
- NFkappaB, MAPK, NFATc1 pathways
- Costimulatory molecules (DAP12, FcRgamma)
- Calcium oscillations for NFATc1 activation
- miRNAs regulate osteoclast differentiation

**Epigenetic Regulation:**
- DNA methylation of SOST promoter
- Histone modifications at osteoblast genes
- miRNAs: miR-21, miR-155 (osteoclast); miR-29, miR-218 (osteoblast)
- lncRNAs in osteogenesis

**Bone-Fat-Muscle Axis:**

Bone-Adipose Crosstalk:
- Adiponectin: Variable effects on bone
- Leptin: Central (inhibitory) and peripheral (anabolic) effects
- Marrow adipocytes: Compete with osteoblasts for precursors

Bone-Muscle Crosstalk:
- Mechanical loading: Primary stimulus for bone
- Myokines (irisin, myostatin) affect bone
- Sarcopenia often accompanies osteoporosis
- Osteokines (osteocalcin) affect muscle

**Advanced Bone Imaging:**

| Modality | Information Provided |
|----------|---------------------|
| DEXA | Areal BMD, fracture risk |
| QCT | Volumetric BMD, trabecular/cortical |
| HR-pQCT | Microarchitecture at peripheral sites |
| MRI | Marrow composition, microstructure |
| Bone scintigraphy | Remodeling activity, metastases |
| PET | Metabolic activity |

Trabecular Bone Score (TBS):
- Texture analysis of DEXA image
- Correlates with microarchitecture
- Improves fracture prediction beyond BMD

**Bone Biomarkers:**

Formation Markers:
- P1NP (procollagen type 1 N-propeptide) - preferred
- Bone-specific alkaline phosphatase
- Osteocalcin

Resorption Markers:
- CTX (C-telopeptide) - preferred
- NTX (N-telopeptide)
- Tartrate-resistant acid phosphatase

**Emerging Therapeutics:**

| Target | Agent | Mechanism |
|--------|-------|-----------|
| Sclerostin | Romosozumab | Increases Wnt signaling |
| Cathepsin K | Odanacatib (discontinued) | Inhibits osteoclast enzyme |
| DKK1 | BHQ880 | Wnt agonist |
| SFRP1 | In development | Wnt agonist |
| PTHrP analog | Abaloparatide | Anabolic |

**Rare Bone Diseases:**

Osteogenesis Imperfecta:
- Collagen type I mutations
- Brittle bones, blue sclerae
- Treatment: Bisphosphonates, potential gene therapy

Hypophosphatasia:
- TNSALP mutations
- Defective mineralization
- Treatment: Asfotase alfa (enzyme replacement)

X-linked Hypophosphatemia:
- PHEX mutations, elevated FGF23
- Treatment: Burosumab (anti-FGF23 antibody)`,
      keyTerms: [
        { term: 'HR-pQCT', definition: 'High-resolution peripheral quantitative CT - measures bone microarchitecture' },
        { term: 'P1NP', definition: 'Procollagen type 1 N-propeptide - marker of bone formation' },
        { term: 'CTX', definition: 'C-telopeptide - marker of bone resorption' },
        { term: 'burosumab', definition: 'Anti-FGF23 antibody for X-linked hypophosphatemia' },
      ],
      clinicalNotes: `Bone turnover markers (P1NP, CTX) are useful for monitoring treatment response, especially for anabolic agents. Measure at baseline and 3-6 months after starting therapy.

For romosozumab, cardiovascular risk assessment is important given trial signals. Consider alternative agents in patients with recent MI or stroke.

Sequential therapy is important: Anabolic agents (teriparatide, romosozumab) should generally precede antiresorptive therapy for optimal benefit. Stopping anabolics without consolidation leads to bone loss.

In rare bone diseases, multidisciplinary care (genetics, endocrine, orthopedics, dental) is essential.`,
    },
  },

  media: [
    {
      id: 'remodeling-cycle-animation',
      type: 'animation',
      filename: 'bone_remodeling_cycle.mp4',
      title: 'Bone Remodeling Cycle Animation',
      description: 'Animated sequence showing osteoclast resorption and osteoblast formation',
    },
    {
      id: 'rank-rankl-opg-diagram',
      type: 'diagram',
      filename: 'rank_rankl_opg.svg',
      title: 'RANK/RANKL/OPG Signaling',
      description: 'Diagram of the key regulatory pathway for osteoclast activity',
    },
  ],

  citations: [
    {
      id: 'primer-bone-remodeling',
      type: 'textbook',
      title: 'Primer on the Metabolic Bone Diseases and Disorders of Mineral Metabolism',
      authors: ['Bilezikian JP', 'Martin TJ', 'Clemens TL', 'Rosen CJ'],
      source: 'Wiley-Blackwell',
    },
    {
      id: 'bonewald-osteocyte',
      type: 'article',
      title: 'The Amazing Osteocyte',
      authors: ['Bonewald LF'],
      source: 'Journal of Bone and Mineral Research',
    },
  ],

  crossReferences: [
    { targetId: 'physiology-calcium-metabolism', targetType: 'topic', relationship: 'related', label: 'Calcium Metabolism' },
    { targetId: 'condition-osteoporosis', targetType: 'condition', relationship: 'related', label: 'Osteoporosis' },
    { targetId: 'anatomy-bone-structure', targetType: 'structure', relationship: 'see-also', label: 'Bone Structure' },
  ],

  tags: {
    systems: ['musculoskeletal', 'endocrine'],
    topics: ['physiology', 'bone', 'remodeling'],
    keywords: ['osteoclast', 'osteoblast', 'osteocyte', 'RANKL', 'remodeling'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export const calciumMetabolismContent: EducationalContent = {
  id: 'physiology-calcium-metabolism',
  type: 'process',
  name: 'Calcium Metabolism',
  alternateNames: ['Calcium Homeostasis', 'Calcium Regulation'],

  levels: {
    1: {
      level: 1,
      summary: 'Your body carefully controls calcium levels in your blood using hormones, your bones, kidneys, and intestines working together.',
      explanation: `Calcium is incredibly important for your body. It's needed for:
- Strong bones and teeth
- Muscle contractions (including your heart!)
- Nerve signals
- Blood clotting

**Your body keeps calcium levels very stable using three main organs:**

1. **Bones**: The biggest storage of calcium in your body
   - Can release calcium when blood levels are low
   - Can store calcium when levels are high

2. **Intestines**: Where you absorb calcium from food
   - Vitamin D helps your intestines absorb more calcium
   - Dairy products, leafy greens, and fortified foods are good sources

3. **Kidneys**: Filter your blood and control calcium loss
   - Can hold onto calcium or let it go in urine
   - Help activate vitamin D

**Two main hormones control calcium:**
- **Parathyroid hormone (PTH)**: RAISES blood calcium
  - Released when calcium is too low
  - Tells bones to release calcium
  - Tells kidneys to keep calcium

- **Calcitonin**: LOWERS blood calcium (minor role)
  - Released when calcium is too high

**What happens when calcium is out of balance:**
- Too low (hypocalcemia): Muscle cramps, tingling, heart problems
- Too high (hypercalcemia): Weakness, confusion, kidney stones`,
      keyTerms: [
        { term: 'calcium', definition: 'A mineral essential for bones, muscles, and nerves' },
        { term: 'parathyroid hormone', definition: 'A hormone that raises blood calcium levels' },
        { term: 'vitamin D', definition: 'A vitamin that helps your body absorb calcium from food' },
      ],
      analogies: [
        'Your bones are like a calcium bank - they store calcium and release it when your blood needs more.',
        'PTH is like a thermostat for calcium - it senses when levels are low and turns on the system to raise them.',
      ],
      examples: [
        'When you don\'t get enough calcium in your diet, your body takes it from your bones to keep blood levels normal.',
        'Getting enough vitamin D from sunlight or supplements helps your body use the calcium in your food.',
      ],
    },
    2: {
      level: 2,
      summary: 'Calcium homeostasis is maintained by parathyroid hormone and active vitamin D (calcitriol) acting on bone, kidney, and intestine to maintain serum calcium within a narrow range.',
      explanation: `**Normal Calcium Values:**
- Total serum calcium: 8.5-10.5 mg/dL (2.1-2.6 mmol/L)
- Ionized calcium: 4.5-5.5 mg/dL (1.1-1.4 mmol/L)
- Only ionized calcium is physiologically active

**Calcium in Blood:**
- ~45% bound to albumin
- ~10% bound to anions (phosphate, citrate)
- ~45% ionized (free) - the active form

**Key Hormones:**

**Parathyroid Hormone (PTH):**
- Secreted by parathyroid glands (4 glands behind thyroid)
- Responds rapidly to low calcium
- Effects:
  - Bone: Increases resorption (releases calcium)
  - Kidney: Increases calcium reabsorption
  - Kidney: Increases vitamin D activation
  - Kidney: Decreases phosphate reabsorption

**Vitamin D (Calcitriol):**
- Active form: 1,25-dihydroxyvitamin D3
- Activation pathway: Skin/Diet -> Liver (25-OH) -> Kidney (1,25-OH)
- Effects:
  - Intestine: Increases calcium and phosphate absorption
  - Bone: Supports mineralization
  - Kidney: Increases calcium reabsorption

**Organ Responses:**

| Organ | Low Calcium Response | Result |
|-------|---------------------|--------|
| Bone | PTH increases resorption | Calcium released |
| Kidney | PTH increases reabsorption | Less calcium in urine |
| Intestine | Vitamin D increases absorption | More calcium from food |

**Common Disorders:**

| Condition | Calcium | PTH | Common Causes |
|-----------|---------|-----|---------------|
| Primary hyperparathyroidism | High | High | Parathyroid adenoma |
| Hypercalcemia of malignancy | High | Low (or PTHrP high) | Cancer |
| Vitamin D deficiency | Low/normal | High | Inadequate sun/diet |
| Hypoparathyroidism | Low | Low | Post-surgical, autoimmune |`,
      keyTerms: [
        { term: 'ionized calcium', definition: 'The free, unbound form of calcium in blood that is physiologically active' },
        { term: 'calcitriol', definition: 'The active form of vitamin D (1,25-dihydroxyvitamin D)', pronunciation: 'kal-si-TRY-ol' },
        { term: 'PTHrP', definition: 'Parathyroid hormone-related peptide, produced by some cancers', pronunciation: 'P-T-H-R-P' },
        { term: 'hypercalcemia', definition: 'High blood calcium levels' },
        { term: 'hypocalcemia', definition: 'Low blood calcium levels' },
      ],
    },
    3: {
      level: 3,
      summary: 'Calcium homeostasis involves calcium-sensing receptor signaling, PTH-mediated bone resorption and renal effects, vitamin D metabolism through hepatic and renal hydroxylation, and FGF23-mediated phosphate regulation.',
      explanation: `**Calcium-Sensing Receptor (CaSR):**
- G-protein coupled receptor on parathyroid cells
- Senses extracellular calcium concentration
- High calcium -> activates CaSR -> inhibits PTH secretion
- Low calcium -> less CaSR activation -> increases PTH secretion
- Mutations cause familial hypocalciuric hypercalcemia or hypocalcemia

**PTH Secretion and Actions:**

Regulation of PTH:
- Primary: Serum ionized calcium (inverse relationship)
- Secondary: 1,25(OH)2D (inhibits transcription)
- Tertiary: Phosphate (stimulates PTH)
- Magnesium: Required for PTH secretion

PTH Mechanism of Action:
- Binds PTH1R (GPCR)
- Activates Gs-cAMP-PKA pathway
- Activates Gq-PLC-IP3-DAG pathway

**Bone Effects:**
- Rapid: Osteocytic osteolysis (hours)
- Delayed: Increased RANKL, decreased OPG (days)
- Osteoclast activation and bone resorption

**Renal Effects:**
| Nephron Segment | PTH Effect |
|-----------------|------------|
| Proximal tubule | Decreases PO4 reabsorption (via NPT2a) |
| Proximal tubule | Increases 1-alpha-hydroxylase |
| Thick ascending limb | Increases Ca2+ reabsorption |
| Distal tubule | Increases Ca2+ reabsorption (via TRPV5) |

**Vitamin D Metabolism:**

1. Skin: 7-dehydrocholesterol + UVB -> Cholecalciferol (D3)
2. Liver: 25-hydroxylase -> 25(OH)D (calcidiol)
3. Kidney: 1-alpha-hydroxylase -> 1,25(OH)2D (calcitriol)

Regulation of 1-alpha-hydroxylase:
- Stimulated by: PTH, low phosphate, low calcium
- Inhibited by: FGF23, high calcium, high 1,25(OH)2D

**Intestinal Calcium Absorption:**
- Transcellular (active, vitamin D-dependent):
  - TRPV6 (apical entry)
  - Calbindin (cytosolic transport)
  - PMCA1b (basolateral exit)
- Paracellular (passive, concentration-dependent)

**FGF23-Klotho Axis:**
- FGF23: Produced by osteocytes
- Requires Klotho as co-receptor
- Effects:
  - Decreases renal phosphate reabsorption
  - Inhibits 1-alpha-hydroxylase
  - Net effect: Phosphate wasting, low vitamin D

**Clinical Scenarios:**

| Lab Pattern | Ca | PO4 | PTH | 25(OH)D | Diagnosis |
|-------------|-----|-----|-----|---------|-----------|
| Primary HPT | High | Low/N | High | N | Adenoma |
| FHH | Mild high | N | N/High | N | CaSR mutation |
| Vit D deficiency | Low/N | Low | High | Low | Inadequate D |
| Hypoparathyroid | Low | High | Low | N | Post-surgical |`,
      keyTerms: [
        { term: 'calcium-sensing receptor', definition: 'G-protein coupled receptor that senses calcium and regulates PTH secretion' },
        { term: '1-alpha-hydroxylase', definition: 'Renal enzyme that converts 25(OH)D to active 1,25(OH)2D' },
        { term: 'FGF23', definition: 'Fibroblast growth factor 23 - bone-derived hormone regulating phosphate' },
        { term: 'calbindin', definition: 'Calcium-binding protein in intestinal cells that facilitates calcium absorption' },
      ],
      clinicalNotes: 'Always correct total calcium for albumin: Corrected Ca = Measured Ca + 0.8 x (4 - Albumin). Better yet, measure ionized calcium directly. In hyperparathyroidism workup, always check 24-hour urine calcium to exclude FHH before surgery.',
    },
    4: {
      level: 4,
      summary: 'Advanced calcium metabolism encompasses molecular signaling cascades, PTH receptor dynamics, renal handling mechanisms, bone-kidney endocrine axis, and the pathophysiology of primary and secondary hyperparathyroidism.',
      explanation: `**PTH Receptor Signaling:**

PTH1R Signaling Cascades:
- Gs pathway: cAMP -> PKA -> CREB activation
- Gq pathway: PLCbeta -> IP3 + DAG -> Ca2+ release + PKC
- Beta-arrestin pathway: MAPK activation
- Receptor internalization and recycling

PTH Kinetics:
- Intact PTH (1-84): Active hormone
- N-terminal fragments (1-34): Full biological activity
- C-terminal fragments: Inactive, accumulate in renal failure
- Half-life: 2-4 minutes

**Renal Calcium Handling:**

| Segment | % Reabsorbed | Mechanism | Regulation |
|---------|--------------|-----------|------------|
| Proximal tubule | 60-70% | Paracellular | Volume status |
| Thick ascending limb | 20% | Paracellular via claudins | PTH, CaSR |
| Distal tubule | 10% | Transcellular (TRPV5) | PTH, vitamin D |

TRPV5 Channel:
- Apical calcium entry in DCT
- Regulated by klotho, vitamin D, PTH
- Calbindin-D28k for cytosolic transit
- NCX1, PMCA for basolateral exit

**Phosphate Homeostasis:**

NPT2a/c Transporters:
- Proximal tubule sodium-phosphate cotransporters
- PTH: Decreases surface expression (endocytosis)
- FGF23: Decreases expression
- Dietary phosphate: Acute regulation

FGF23 in Detail:
- Produced by osteocytes in response to high PO4, high vitamin D
- Requires alpha-Klotho as co-receptor
- Signals via FGFR1c in kidney
- Downregulates NPT2a/c and 1-alpha-hydroxylase
- Elevated in CKD -> secondary hyperparathyroidism

**Bone-Kidney Endocrine Axis:**

PTH -> Bone:
- Increases RANKL/OPG ratio
- Osteoclast activation
- Releases calcium and phosphate
- Continuous PTH is catabolic

PTH -> Kidney:
- Increases 1,25(OH)2D synthesis
- Increases calcium reabsorption
- Decreases phosphate reabsorption
- Net effect: Raises calcium, lowers phosphate

Vitamin D -> Bone:
- Supports osteoblast function
- Required for proper mineralization
- Deficiency leads to osteomalacia/rickets

**Hyperparathyroidism Subtypes:**

Primary Hyperparathyroidism:
- Autonomous PTH secretion
- Causes: Adenoma (85%), hyperplasia (15%), carcinoma (<1%)
- Biochemistry: High Ca, low/normal PO4, high PTH
- Complications: Stones, bones, groans, moans

Secondary Hyperparathyroidism:
- Compensatory PTH elevation
- Causes: CKD (most common), vitamin D deficiency
- CKD-MBD: Low 1,25(OH)2D, hyperphosphatemia, high FGF23
- Biochemistry: Low/normal Ca, high PO4, high PTH

Tertiary Hyperparathyroidism:
- Autonomous after prolonged secondary
- Usually post-transplant
- Biochemistry: High Ca, high PTH despite correction

**Normocalcemic Primary Hyperparathyroidism:**
- Elevated PTH with normal calcium
- May be early primary HPT
- Exclude vitamin D deficiency first
- Monitor or treat if progression`,
      keyTerms: [
        { term: 'NPT2a', definition: 'Sodium-phosphate cotransporter in proximal tubule, main site of phosphate reabsorption' },
        { term: 'TRPV5', definition: 'Calcium channel in distal convoluted tubule for active calcium reabsorption' },
        { term: 'CKD-MBD', definition: 'Chronic kidney disease-mineral bone disorder - complex of bone and mineral abnormalities in renal failure' },
        { term: 'tertiary hyperparathyroidism', definition: 'Autonomous parathyroid function developing after prolonged secondary hyperparathyroidism' },
      ],
      clinicalNotes: 'In CKD-MBD, manage phosphate first (dietary restriction, binders), then vitamin D (calcitriol or analogs), then consider calcimimetics (cinacalcet) or parathyroidectomy if uncontrolled. Target PTH varies by CKD stage.',
    },
    5: {
      level: 5,
      summary: 'Expert calcium physiology integrates molecular genetics of calcium disorders, advanced CKD-MBD management, post-surgical hypocalcemia prevention, calcimimetics and vitamin D analogs, and emerging diagnostic and therapeutic approaches.',
      explanation: `**Molecular Genetics of Calcium Disorders:**

Calcium-Sensing Receptor Mutations:
- Inactivating (loss-of-function):
  - Heterozygous: Familial hypocalciuric hypercalcemia (FHH)
  - Homozygous: Neonatal severe hyperparathyroidism
- Activating (gain-of-function):
  - Autosomal dominant hypocalcemia (ADH)
  - Bartter syndrome type V

FHH Subtypes:
- FHH1: CaSR mutations (most common)
- FHH2: GNA11 mutations
- FHH3: AP2S1 mutations

Other Genetic Disorders:
- MEN1, MEN2A: Hyperparathyroidism
- CDC73 (HRPT2): Parathyroid carcinoma
- PHEX, FGF23 mutations: Hypophosphatemic rickets

**Advanced CKD-MBD Management:**

Pathophysiology Cascade:
1. Decreased renal phosphate excretion
2. Hyperphosphatemia
3. Decreased 1,25(OH)2D synthesis
4. Increased FGF23
5. Secondary hyperparathyroidism
6. Renal osteodystrophy

Treatment Targets (KDIGO):
| Parameter | Target |
|-----------|--------|
| Phosphorus | Toward normal |
| Calcium | Avoid hypercalcemia |
| PTH | 2-9x normal for dialysis |

Phosphate Management:
- Dietary restriction (800-1000 mg/day)
- Non-calcium binders: Sevelamer, lanthanum
- Calcium binders: Limited use (vascular calcification concern)
- Dialysis optimization

Vitamin D Therapy:
- Ergocalciferol/cholecalciferol: If 25(OH)D low
- Calcitriol: Active vitamin D
- Paricalcitol, doxercalciferol: Selective VDR activators

Calcimimetics:
- Cinacalcet: Oral allosteric CaSR activator
- Etelcalcetide: IV CaSR agonist
- Lower PTH without raising calcium

**Parathyroidectomy Considerations:**

Indications for Primary HPT Surgery:
- Symptomatic (stones, fractures, neuromuscular)
- Serum calcium >1 mg/dL above normal
- eGFR <60 mL/min
- Age <50
- T-score <-2.5
- Vertebral fracture

Preoperative Localization:
- Sestamibi scan
- Ultrasound
- 4D-CT
- Choline PET (emerging)

Intraoperative PTH Monitoring:
- Miami criterion: >50% decline from baseline
- Confirms successful adenoma removal
- Allows minimally invasive approach

**Hungry Bone Syndrome:**
- Post-parathyroidectomy hypocalcemia
- Risk factors: High preop PTH, large adenoma, bone disease
- Mechanism: Rapid bone uptake of calcium
- Prevention: Calcium, vitamin D preoperatively
- Treatment: High-dose calcium, calcitriol, IV calcium if severe

**Post-Thyroidectomy Hypoparathyroidism:**

Prevention:
- Parathyroid identification and preservation
- Autotransplantation if devascularized
- Intraoperative PTH monitoring

Acute Management:
- IV calcium gluconate if symptomatic
- Oral calcium + calcitriol
- Check magnesium

Chronic Management:
- Calcium carbonate (1-3 g elemental/day)
- Calcitriol (0.5-2 mcg/day)
- Thiazide diuretics (reduce hypercalciuria)
- Target low-normal calcium (avoid hypercalciuria)

Emerging: rhPTH(1-84) (Natpara):
- Recombinant PTH for hypoparathyroidism
- Reduces calcium and vitamin D requirements
- Black box warning: Osteosarcoma in rodents

**Emerging Diagnostics:**

- 18F-Choline PET/CT: Superior parathyroid localization
- Whole-exome sequencing: Hereditary disorders
- Calcium-sensing receptor antibodies: Autoimmune hypoparathyroidism
- Bone turnover markers in real-time management`,
      keyTerms: [
        { term: 'FHH', definition: 'Familial hypocalciuric hypercalcemia - benign condition mimicking hyperparathyroidism, caused by CaSR mutations' },
        { term: 'calcimimetic', definition: 'Drug that activates the calcium-sensing receptor to suppress PTH secretion' },
        { term: 'hungry bone syndrome', definition: 'Severe hypocalcemia after parathyroidectomy due to rapid bone calcium uptake' },
        { term: 'Natpara', definition: 'Recombinant human PTH(1-84) for treatment of chronic hypoparathyroidism' },
      ],
      clinicalNotes: `Before parathyroidectomy for primary HPT, rule out FHH with 24-hour urine calcium. Calcium-creatinine clearance ratio <0.01 suggests FHH.

For hungry bone syndrome prevention, start calcium 1 g TID and calcitriol 0.5 mcg BID several days before surgery in patients with significant bone disease. Monitor calcium closely postoperatively.

In chronic hypoparathyroidism, target the lower end of normal calcium to reduce hypercalciuria and renal complications. 24-hour urine calcium should be monitored. rhPTH may be considered for difficult-to-control cases.

For CKD-MBD, recognize that PTH targets are ranges, not absolute numbers. Trends matter more than single values. Avoid oversuppression of PTH which can lead to adynamic bone disease.`,
    },
  },

  media: [
    {
      id: 'calcium-homeostasis-diagram',
      type: 'diagram',
      filename: 'calcium_homeostasis.svg',
      title: 'Calcium Homeostasis Overview',
      description: 'Integrated diagram showing PTH and vitamin D effects on bone, kidney, and intestine',
    },
    {
      id: 'pth-actions-diagram',
      type: 'diagram',
      filename: 'pth_actions.svg',
      title: 'PTH Organ Actions',
      description: 'Detailed diagram of PTH effects on each target organ',
    },
  ],

  citations: [
    {
      id: 'primer-calcium',
      type: 'textbook',
      title: 'Primer on the Metabolic Bone Diseases and Disorders of Mineral Metabolism',
      authors: ['Bilezikian JP', 'Martin TJ', 'Clemens TL', 'Rosen CJ'],
      source: 'Wiley-Blackwell',
    },
    {
      id: 'brown-casr',
      type: 'article',
      title: 'Extracellular Calcium Sensing and Extracellular Calcium Signaling',
      authors: ['Brown EM'],
      source: 'Physiological Reviews',
    },
  ],

  crossReferences: [
    { targetId: 'physiology-bone-remodeling', targetType: 'topic', relationship: 'related', label: 'Bone Remodeling' },
    { targetId: 'condition-osteoporosis', targetType: 'condition', relationship: 'related', label: 'Osteoporosis' },
    { targetId: 'anatomy-parathyroid', targetType: 'structure', relationship: 'see-also', label: 'Parathyroid Glands' },
  ],

  tags: {
    systems: ['musculoskeletal', 'endocrine', 'renal'],
    topics: ['physiology', 'calcium', 'parathyroid', 'vitamin D'],
    keywords: ['PTH', 'vitamin D', 'hypercalcemia', 'hypocalcemia', 'osteoporosis'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export const osteoporosisContent: EducationalContent = {
  id: 'physiology-osteoporosis',
  type: 'condition',
  name: 'Osteoporosis',
  alternateNames: ['Bone Loss', 'Fragility Bone Disease'],

  levels: {
    1: {
      level: 1,
      summary: 'Osteoporosis is a condition where bones become weak and thin, making them more likely to break from minor falls or even everyday activities.',
      explanation: `Osteoporosis means "porous bones." In this condition, bones lose their strength and become fragile like a dried-out sponge.

**Who is at risk:**
- Older adults (especially women after menopause)
- People who don't get enough calcium or vitamin D
- People who don't exercise
- Those with a family history of osteoporosis
- Smokers and heavy drinkers

**Common places for breaks:**
- Hip (often from falls)
- Spine (can happen just from bending or lifting)
- Wrist (often from catching yourself during a fall)

**Why it matters:**
- Hip fractures can be life-threatening in older adults
- Spine fractures cause loss of height and a hunched back
- Broken bones cause pain and loss of independence

**Prevention:**
- Get enough calcium (dairy, leafy greens, fortified foods)
- Get enough vitamin D (sunlight, supplements)
- Do weight-bearing exercise (walking, climbing stairs)
- Don't smoke
- Limit alcohol

**Treatment:**
- Medications can slow bone loss or help build new bone
- Fall prevention is crucial
- Exercise programs to improve balance and strength`,
      keyTerms: [
        { term: 'osteoporosis', definition: 'A disease where bones become weak and break easily' },
        { term: 'bone density', definition: 'How thick and strong your bones are' },
        { term: 'fracture', definition: 'A broken bone' },
      ],
      analogies: [
        'Healthy bone is like a strong honeycomb structure. In osteoporosis, the honeycomb gets thinner with bigger holes, making it easy to break.',
        'Think of bones like a bank account - you need to keep making deposits (calcium, exercise) or you\'ll run out of savings.',
      ],
      examples: [
        'A grandmother with osteoporosis might break her hip just from stepping off a curb.',
        'Someone with a spine fracture from osteoporosis might notice their clothes don\'t fit because they\'ve gotten shorter.',
      ],
    },
    2: {
      level: 2,
      summary: 'Osteoporosis is characterized by low bone mineral density and microarchitectural deterioration, leading to increased fracture risk, diagnosed by DEXA scan and managed with lifestyle modifications and medications.',
      explanation: `**Definition and Diagnosis:**

WHO Diagnostic Criteria (DEXA T-score):
| Category | T-score |
|----------|---------|
| Normal | > -1.0 |
| Osteopenia | -1.0 to -2.5 |
| Osteoporosis | < -2.5 |
| Severe osteoporosis | < -2.5 with fracture |

**Risk Factors:**

Non-modifiable:
- Age (risk increases with age)
- Female sex
- Caucasian or Asian ethnicity
- Family history of osteoporosis or fracture
- Personal history of fracture
- Small body frame

Modifiable:
- Low calcium/vitamin D intake
- Sedentary lifestyle
- Smoking
- Excessive alcohol
- Low body weight
- Medications (steroids, some seizure drugs)

**Types of Osteoporosis:**
1. **Primary (most common)**
   - Postmenopausal (Type I): Estrogen deficiency
   - Age-related (Type II): Occurs in both sexes after 70

2. **Secondary**
   - Medications (glucocorticoids, aromatase inhibitors)
   - Endocrine (hyperthyroidism, hyperparathyroidism)
   - Gastrointestinal (malabsorption, celiac disease)
   - Rheumatologic (rheumatoid arthritis)
   - Hematologic (multiple myeloma)

**Fracture Sites:**
| Site | Impact |
|------|--------|
| Vertebral | Most common; may be asymptomatic; causes kyphosis |
| Hip | Most serious; high mortality in elderly |
| Wrist | Often first fracture; Colles' fracture |

**Prevention and Treatment:**

Lifestyle:
- Calcium: 1000-1200 mg/day
- Vitamin D: 600-800 IU/day (more if deficient)
- Weight-bearing exercise
- Fall prevention

Medications:
- Bisphosphonates (alendronate, risedronate)
- Denosumab (RANKL inhibitor)
- Teriparatide (PTH analog - anabolic)
- Hormone therapy (select patients)`,
      keyTerms: [
        { term: 'T-score', definition: 'Comparison of bone density to a healthy young adult; measures standard deviations from normal' },
        { term: 'DEXA', definition: 'Dual-energy X-ray absorptiometry - the gold standard test for bone density', pronunciation: 'DEX-ah' },
        { term: 'bisphosphonate', definition: 'Medication that slows bone breakdown; most common osteoporosis treatment' },
        { term: 'kyphosis', definition: 'Forward curvature of the upper spine (hunchback)', pronunciation: 'ky-FOH-sis' },
      ],
    },
    3: {
      level: 3,
      summary: 'Osteoporosis results from imbalanced bone remodeling with excessive resorption, involving estrogen deficiency, increased RANKL/OPG ratio, and treatment targeting osteoclast inhibition or osteoblast stimulation.',
      explanation: `**Pathophysiology:**

Postmenopausal Osteoporosis:
- Estrogen deficiency is key
- Estrogen normally suppresses RANKL, increases OPG
- Loss of estrogen -> increased RANKL/OPG ratio
- Increased osteoclast activity
- Accelerated bone resorption > formation
- Trabecular bone affected first (vertebrae)

Age-Related Osteoporosis:
- Decreased osteoblast function
- Reduced ability to respond to PTH
- Decreased vitamin D activation
- Secondary hyperparathyroidism
- Cortical and trabecular bone affected

**Bone Quality vs. Quantity:**
- BMD measures quantity
- Quality factors: Microarchitecture, mineralization, collagen crosslinks
- Both contribute to fracture risk

**Fracture Risk Assessment:**

FRAX Tool:
- Calculates 10-year fracture probability
- Inputs: Age, sex, BMI, prior fracture, family history, glucocorticoids, smoking, alcohol, secondary causes, femoral neck BMD
- Thresholds for treatment vary by country

**Screening Recommendations:**
- Women >= 65 years
- Men >= 70 years
- Younger patients with risk factors
- Anyone with fragility fracture

**Treatment Approach:**

| Category | Medications | Mechanism |
|----------|-------------|-----------|
| Antiresorptive | Bisphosphonates | Osteoclast apoptosis |
| Antiresorptive | Denosumab | RANKL inhibitor |
| Antiresorptive | Estrogen | Multiple mechanisms |
| Anabolic | Teriparatide | PTH analog |
| Anabolic | Abaloparatide | PTHrP analog |
| Dual | Romosozumab | Anti-sclerostin antibody |

**Bisphosphonate Details:**
- Nitrogen-containing: Alendronate, risedronate, ibandronate, zoledronic acid
- Mechanism: Inhibit farnesyl pyrophosphate synthase in mevalonate pathway
- Long skeletal half-life (years)
- Must take on empty stomach, stay upright (oral)
- Side effects: GI upset, osteonecrosis of jaw (rare), atypical femur fractures (rare)

**Monitoring:**
- DEXA every 1-2 years on treatment
- Bone turnover markers (CTX, P1NP) for early response
- Duration: Drug holiday after 5 years oral, 3 years IV (if stable)`,
      keyTerms: [
        { term: 'FRAX', definition: 'Fracture Risk Assessment Tool - calculates 10-year probability of hip and major osteoporotic fracture' },
        { term: 'fragility fracture', definition: 'Fracture from low-energy trauma (fall from standing height or less)' },
        { term: 'drug holiday', definition: 'Temporary discontinuation of bisphosphonates after prolonged use' },
        { term: 'atypical femur fracture', definition: 'Rare complication of long-term bisphosphonate use; transverse fracture of femoral shaft' },
      ],
      clinicalNotes: 'A fragility fracture at any BMD indicates need for treatment. Vertebral fractures may be asymptomatic - consider vertebral imaging in high-risk patients. Drug holidays are appropriate for bisphosphonates but not for denosumab (rebound bone loss).',
    },
    4: {
      level: 4,
      summary: 'Advanced osteoporosis management includes understanding molecular mechanisms of therapies, sequential treatment strategies, management of treatment failure, glucocorticoid-induced osteoporosis, and rare complications of antiresorptive therapy.',
      explanation: `**Molecular Mechanisms of Therapies:**

Bisphosphonates:
- Bind to hydroxyapatite in bone matrix
- Released during osteoclast-mediated resorption
- Internalized by osteoclasts
- Inhibit farnesyl pyrophosphate synthase
- Prevent prenylation of small GTPases (Ras, Rho, Rac)
- Disrupt osteoclast cytoskeleton and function
- Induce osteoclast apoptosis

Denosumab:
- Fully human monoclonal antibody against RANKL
- Prevents RANK activation on osteoclast precursors
- Blocks osteoclast differentiation and activity
- Reversible effects (requires ongoing treatment)
- Rebound bone loss on discontinuation (must transition to bisphosphonate)

Teriparatide (PTH 1-34):
- Intermittent PTH is anabolic (vs. continuous which is catabolic)
- Activates cAMP-PKA and other pathways in osteoblasts
- Increases osteoblast number and activity
- Decreases osteoblast apoptosis
- Initial increase in formation > resorption ("anabolic window")
- Eventually increases resorption too (limited duration: 2 years)

Romosozumab:
- Anti-sclerostin antibody
- Blocks sclerostin inhibition of Wnt pathway
- Increases bone formation
- Also decreases bone resorption (dual effect)
- Modeling-based bone formation
- Cardiovascular concern (BRIDGE trial)

**Sequential Treatment Strategies:**

Optimal Sequence:
1. Anabolic agent first (if very high risk)
2. Follow with antiresorptive to consolidate gains
3. Never stop antiresorptive without transition plan (especially denosumab)

Suboptimal Sequences:
- Antiresorptive then anabolic: Blunted anabolic response
- Stopping denosumab without transition: Rebound vertebral fractures

**Glucocorticoid-Induced Osteoporosis (GIOP):**

Pathophysiology:
- Decreases osteoblast function and survival
- Increases osteoclast activity (early)
- Decreases intestinal calcium absorption
- Increases renal calcium excretion
- Suppresses gonadotropins

Treatment Thresholds (ACR Guidelines):
- >= 40 years, moderate-high fracture risk: Treat
- >= 40 years, low fracture risk: Consider if prednisone >= 7.5 mg/day for >= 3 months
- < 40 years: Lower threshold for treatment

Agent Selection:
- Bisphosphonates: First-line
- Teriparatide: If severe GIOP or failure of bisphosphonates
- Denosumab: Alternative

**Treatment Failure:**

Definition:
- Two or more fractures on therapy, or
- One fracture + declining BMD, or
- Persistently elevated bone turnover markers

Evaluation:
- Adherence? (Very common issue)
- Adequate calcium/vitamin D?
- Secondary causes? (Reconsider workup)
- Correct diagnosis?

Management:
- Switch drug class
- Consider anabolic therapy
- Optimize modifiable factors

**Rare Complications:**

Osteonecrosis of Jaw (ONJ):
- Risk factors: Dental procedures, cancer, high-dose IV bisphosphonates
- Prevention: Dental clearance before starting therapy
- Management: Conservative (antibiotics, oral rinses, limited debridement)

Atypical Femoral Fractures (AFF):
- Transverse or short oblique fracture of femoral shaft
- Associated with prolonged bisphosphonate use (>5 years)
- May have prodromal thigh pain
- Bilateral imaging recommended
- Consider drug holiday after 5 years in appropriate patients`,
      keyTerms: [
        { term: 'anabolic window', definition: 'Period when PTH therapy increases formation more than resorption, resulting in net bone gain' },
        { term: 'GIOP', definition: 'Glucocorticoid-induced osteoporosis - bone loss from corticosteroid therapy' },
        { term: 'osteonecrosis of jaw', definition: 'Rare complication of antiresorptive therapy with exposed bone that doesn\'t heal' },
        { term: 'atypical femoral fracture', definition: 'Rare fracture pattern in femoral shaft associated with long-term bisphosphonate use' },
      ],
      clinicalNotes: 'For high-risk patients (very low BMD, multiple fractures), consider starting with anabolic therapy then consolidating with antiresorptive. For GIOP, treat early - bone loss is rapid in first 6-12 months of steroid use. Denosumab discontinuation requires careful planning with transition to bisphosphonate.',
    },
    5: {
      level: 5,
      summary: 'Expert osteoporosis management encompasses advanced imaging interpretation, genetic factors, special populations, emerging therapies, and multidisciplinary fracture liaison service models.',
      explanation: `**Advanced Imaging and Assessment:**

Trabecular Bone Score (TBS):
- Texture analysis from lumbar spine DEXA
- Correlates with bone microarchitecture
- Improves fracture prediction beyond BMD
- Incorporated into FRAX in some countries
- Particularly useful in diabetes (normal BMD but increased fracture risk)

Vertebral Fracture Assessment (VFA):
- Low-radiation lateral spine imaging during DEXA
- Identifies prevalent vertebral fractures
- Many are asymptomatic but increase future fracture risk
- Indicated in: Older adults, height loss, glucocorticoid use

HR-pQCT:
- High-resolution imaging of distal radius and tibia
- Measures trabecular and cortical microarchitecture
- Research tool, limited clinical availability
- Reveals microstructural changes before BMD decline

Bone Turnover Markers:
- P1NP (formation): Baseline and monitoring
- CTX (resorption): Baseline and monitoring
- Useful for early assessment of treatment response
- Not routinely recommended but helpful in selected cases

**Genetic Factors:**

Known Genetic Associations:
- LRP5 mutations: High bone mass or osteoporosis-pseudoglioma
- WNT1 mutations: Early-onset osteoporosis
- SOST mutations: High bone mass (van Buchem, sclerosteosis)
- COL1A1/COL1A2: Osteogenesis imperfecta spectrum

Pharmacogenetics:
- VDR polymorphisms: Variable vitamin D response
- ESR1 polymorphisms: Estrogen therapy response
- FDPS polymorphisms: Bisphosphonate response (research)

**Special Populations:**

Premenopausal Women:
- Consider secondary causes
- Z-score used (not T-score)
- Pregnancy and lactation bone loss is transient
- Treatment if secondary cause or severe fractures

Men:
- ~20% of osteoporotic fractures
- Screen if fracture, glucocorticoids, hypogonadism, other risks
- Secondary causes more common than in women
- Same medications (except estrogen)

Chronic Kidney Disease:
- CKD-MBD complicates picture
- DEXA less predictive
- Bone biopsy may be needed
- Antiresorptives with caution (no bisphosphonates if eGFR <30-35)
- Denosumab with close calcium monitoring

Diabetes:
- Increased fracture risk despite normal/high BMD
- TBS adds value
- Consider earlier treatment
- Avoid thiazolidinediones (cause bone loss)

Transplantation:
- Rapid bone loss post-transplant
- Pre-transplant assessment recommended
- Bisphosphonates or denosumab

**Emerging Therapies:**

Investigational Agents:
- Cathepsin K inhibitors: (Odanacatib - discontinued due to stroke risk)
- Novel anti-sclerostin antibodies
- Activin receptor inhibitors
- Wnt pathway agonists

Long-Acting Formulations:
- Extended interval bisphosphonates
- Long-duration PTH analogs

Combination Strategies:
- Anabolic + antiresorptive simultaneously (under investigation)
- Sequential optimization studies ongoing

**Fracture Liaison Services (FLS):**

Model:
- Systematic identification of fracture patients
- DEXA and fracture risk assessment
- Treatment initiation
- Follow-up coordination
- Communication with primary care

Evidence:
- Reduces secondary fracture rate by 30-40%
- Cost-effective
- Endorsed by major societies
- Variable implementation

Components:
- Case identification
- Investigation
- Initiation of treatment
- Long-term management plan

**Multidisciplinary Approach:**

Team Members:
- Endocrinology/Rheumatology/Geriatrics
- Orthopedic surgery
- Physical therapy
- Occupational therapy (fall prevention)
- Nutrition
- Pharmacy
- Primary care coordination`,
      keyTerms: [
        { term: 'Trabecular Bone Score', definition: 'Texture analysis of DEXA images that provides information about bone microarchitecture' },
        { term: 'Fracture Liaison Service', definition: 'Systematic program to identify, assess, and treat patients with fragility fractures to prevent secondary fractures' },
        { term: 'Z-score', definition: 'Comparison of bone density to age-matched peers, used in premenopausal women and men <50' },
        { term: 'VFA', definition: 'Vertebral Fracture Assessment - lateral spine imaging during DEXA to identify vertebral fractures' },
      ],
      clinicalNotes: `For patients with diabetes and fragility fractures, treat osteoporosis even if BMD is "normal" - TBS and fracture history may be better indicators of bone fragility.

In CKD patients, bisphosphonates are generally contraindicated with eGFR <30-35 due to accumulation and potential for adynamic bone disease. Denosumab can be used but requires close calcium monitoring and vitamin D repletion.

Fracture Liaison Services represent best practice for secondary fracture prevention. The "treatment gap" - where most fracture patients are not assessed or treated for osteoporosis - remains a major healthcare quality issue.

For very high-risk patients (multiple fractures, very low BMD), consider romosozumab or teriparatide as initial therapy, followed by antiresorptive consolidation. This "build then maintain" approach optimizes bone gains.`,
    },
  },

  media: [
    {
      id: 'osteoporosis-bone-comparison',
      type: 'image',
      filename: 'osteoporosis_bone_comparison.jpg',
      title: 'Normal vs. Osteoporotic Bone',
      description: 'Visual comparison of healthy and osteoporotic trabecular bone microstructure',
    },
    {
      id: 'frax-calculator',
      type: 'diagram',
      filename: 'frax_inputs.svg',
      title: 'FRAX Risk Factors',
      description: 'Visual summary of FRAX input variables',
    },
  ],

  citations: [
    {
      id: 'aace-osteoporosis',
      type: 'article',
      title: 'American Association of Clinical Endocrinology Clinical Practice Guideline for the Diagnosis and Treatment of Postmenopausal Osteoporosis',
      authors: ['Camacho PM', 'et al.'],
      source: 'Endocrine Practice',
    },
    {
      id: 'nof-guidelines',
      type: 'website',
      title: 'Clinician\'s Guide to Prevention and Treatment of Osteoporosis',
      source: 'National Osteoporosis Foundation',
    },
  ],

  crossReferences: [
    { targetId: 'physiology-bone-remodeling', targetType: 'topic', relationship: 'related', label: 'Bone Remodeling' },
    { targetId: 'physiology-calcium-metabolism', targetType: 'topic', relationship: 'related', label: 'Calcium Metabolism' },
    { targetId: 'procedure-dexa', targetType: 'topic', relationship: 'see-also', label: 'DEXA Scan' },
  ],

  tags: {
    systems: ['musculoskeletal', 'endocrine'],
    topics: ['pathophysiology', 'bone', 'fracture', 'prevention'],
    keywords: ['osteoporosis', 'bone density', 'DEXA', 'bisphosphonate', 'fracture'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'family medicine'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export const boneBiologyContent = {
  boneRemodeling: boneRemodelingContent,
  calciumMetabolism: calciumMetabolismContent,
  osteoporosis: osteoporosisContent,
};
