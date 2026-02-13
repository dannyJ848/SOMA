/**
 * Parathyroid Glands - Anatomy
 *
 * Four small glands critical for calcium homeostasis through
 * parathyroid hormone (PTH) secretion.
 */

import { EducationalContent } from '../../types';

export const PARATHYROID_GLANDS_ANATOMY: EducationalContent = {
  id: 'anatomy-parathyroid-glands',
  type: 'structure',
  name: 'Parathyroid Glands',
  alternateNames: ['Parathyroids', 'PTH glands'],
  fmaId: 'FMA:13890',

  levels: {
    1: {
      level: 1,
      summary: 'The parathyroid glands are four tiny glands on the back of your thyroid that control how much calcium is in your blood.',
      explanation: `Hidden behind your thyroid gland are four small glands about the size of a grain of rice. Even though they\'re tiny, they\'re very important!

**What Do They Do?**
The parathyroid glands make a hormone called PTH (parathyroid hormone) that controls calcium in your blood. Calcium is super important for:
- Building strong bones and teeth
- Making your muscles work, including your heart
- Helping your nerves send messages
- Helping blood clot when you get a cut

**How Do They Work?**
When calcium in your blood gets too low, the parathyroid glands release PTH. This hormone:
- Tells your bones to release some calcium
- Tells your kidneys to keep more calcium
- Helps your body absorb more calcium from food

When calcium is high enough, the glands stop making PTH.`,
      keyTerms: [
        { term: 'parathyroid', definition: 'Four tiny glands behind the thyroid that control calcium in your blood' },
        { term: 'PTH', definition: 'Parathyroid hormone; a chemical that raises blood calcium when it\'s too low' },
        { term: 'calcium', definition: 'A mineral needed for bones, muscles, and nerves to work properly' },
      ],
      analogies: [
        'The parathyroid glands work like a calcium thermostat - when calcium gets too low, they turn on to bring it back up.',
        'Think of PTH like a withdrawal slip at a bone bank - it takes calcium out of your bone savings when your blood needs it.',
      ],
      examples: [
        'If you don\'t drink enough milk or eat calcium-rich foods, your parathyroid glands work harder to keep your blood calcium normal.',
        'The parathyroid glands are so small that for a long time, doctors didn\'t even know they existed!',
      ],
    },
    2: {
      level: 2,
      summary: 'The parathyroid glands are four endocrine glands located on the posterior thyroid that sense blood calcium levels and secrete PTH to regulate calcium homeostasis through effects on bone, kidney, and intestine.',
      explanation: `**Location:**
The four parathyroid glands are located on the posterior surface of the thyroid gland:
- Two superior parathyroid glands (upper)
- Two inferior parathyroid glands (lower)

Each gland is typically 3-8 mm in size and weighs about 30-50 mg. They have a yellowish-brown color that distinguishes them from the redder thyroid tissue and tan fat.

**Anatomy:**
- Superior glands: Located near junction of upper and middle third of thyroid
- Inferior glands: More variable position, usually near lower thyroid pole

**Function:**
The parathyroid glands produce parathyroid hormone (PTH), which raises blood calcium by:
1. **Bone**: Stimulates osteoclasts to break down bone and release calcium
2. **Kidney**:
   - Increases calcium reabsorption
   - Decreases phosphate reabsorption
   - Activates vitamin D
3. **Intestine**: Indirectly increases calcium absorption via activated vitamin D

**Regulation:**
- Calcium-sensing receptors (CaSR) on parathyroid cells detect blood calcium
- Low calcium → PTH release
- High calcium → PTH suppression
- This is a negative feedback system

**Clinical Importance:**
The parathyroid glands are at risk during thyroid surgery because they're so small and close to the thyroid. If damaged, patients can develop low blood calcium (hypocalcemia).`,
      keyTerms: [
        { term: 'parathyroid hormone (PTH)', definition: 'A hormone that increases blood calcium levels', pronunciation: 'pair-ah-THY-royd' },
        { term: 'calcium-sensing receptor', definition: 'A receptor on parathyroid cells that detects blood calcium levels' },
        { term: 'osteoclasts', definition: 'Bone cells that break down bone tissue and release calcium' },
        { term: 'vitamin D', definition: 'A vitamin that helps absorb calcium from food; activated by kidneys with PTH help' },
        { term: 'hypocalcemia', definition: 'Low blood calcium, which can cause muscle cramps and tingling' },
      ],
      analogies: [
        'The calcium-sensing receptor is like a security guard that monitors calcium levels and decides whether to release more PTH.',
      ],
    },
    3: {
      level: 3,
      summary: 'The parathyroid glands are four encapsulated endocrine organs derived from pharyngeal pouches 3 and 4, containing chief cells that secrete PTH in response to hypocalcemia sensed by CaSR, with critical anatomical relationships affecting surgical approaches.',
      explanation: `**Embryology:**
- **Superior parathyroids**: Derived from 4th pharyngeal pouch
  - More consistent location (descend short distance)
  - Located posterior to upper thyroid at cricothyroid junction
- **Inferior parathyroids**: Derived from 3rd pharyngeal pouch
  - Longer descent with thymus
  - More variable position (thyrothymic ligament to mediastinum)

*Clinical Pearl*: The "inferior" glands come from a "superior" pouch (3rd) and vice versa - they pass each other during development.

**Anatomical Positions:**

*Superior Parathyroids (most consistent):*
- Located 1 cm above intersection of RLN and inferior thyroid artery
- Usually within 1 cm of where RLN enters cricothyroid joint
- Posterior to upper third of thyroid lobe

*Inferior Parathyroids (variable):*
- Usually anterior to recurrent laryngeal nerve
- May be found: near lower thyroid pole, in thyrothymic ligament, within thymus, intrathyroidal (rare)

**Histology:**
1. **Chief cells (principal cells)**:
   - Predominant cell type
   - Produce PTH
   - Small, pale-staining with central nucleus

2. **Oxyphil cells**:
   - Larger cells with eosinophilic cytoplasm
   - Abundant mitochondria
   - Function unclear; increase with age

3. **Fat cells**: Increase with age (up to 50% in elderly)

**PTH Secretion:**

*Calcium-Sensing Receptor (CaSR):*
- G protein-coupled receptor on chief cell surface
- Binds ionized calcium
- High Ca²⁺ → activates CaSR → inhibits PTH release
- Low Ca²⁺ → CaSR inactive → stimulates PTH release

*PTH Molecule:*
- 84 amino acid polypeptide (PTH 1-84)
- N-terminal fragment (PTH 1-34) is biologically active
- Half-life: 2-4 minutes
- Cleaved in liver and kidney

**Blood Supply:**
- Primarily from inferior thyroid artery
- Superior parathyroids may receive blood from superior thyroid artery
- End-artery supply makes glands vulnerable to devascularization

**Venous Drainage:**
- Superior, middle, and inferior thyroid veins
- Follows thyroid venous drainage`,
      keyTerms: [
        { term: 'chief cells', definition: 'Parathyroid cells that produce PTH; predominant cell type' },
        { term: 'oxyphil cells', definition: 'Mitochondria-rich parathyroid cells of unclear function that increase with age' },
        { term: 'pharyngeal pouches', definition: 'Embryonic structures giving rise to various head and neck structures including parathyroids' },
        { term: 'CaSR', definition: 'Calcium-sensing receptor; GPCR that detects ionized calcium and regulates PTH secretion' },
        { term: 'thyrothymic ligament', definition: 'Embryonic remnant connecting lower thyroid to thymus; may contain ectopic inferior parathyroids' },
      ],
      clinicalNotes: 'During thyroidectomy, the superior parathyroids are typically preserved in situ due to consistent location. Inferior parathyroids are at greater risk due to variable position. If a parathyroid is devascularized or inadvertently removed, autotransplantation into the sternocleidomastoid or forearm muscle is performed. Post-thyroidectomy hypocalcemia may be transient (stunning) or permanent.',
    },
    4: {
      level: 4,
      summary: 'Parathyroid gland function integrates calcium-sensing receptor signaling with vitamin D and FGF23 pathways to maintain mineral homeostasis, with anatomical variants from aberrant embryological descent creating challenges in surgical localization and hyperparathyroid disease management.',
      explanation: `**Detailed PTH Signaling:**

*Intracellular CaSR Signaling:*
- CaSR is a Class C GPCR
- High Ca²⁺ → CaSR activation → Gq/11 → PLC → IP3 + DAG
- Results in: Decreased PTH gene transcription, decreased PTH secretion
- Also activates Gi → inhibits adenylyl cyclase

*Allosteric Modulators of CaSR:*
- Calcimimetics (cinacalcet): Positive allosteric modulators → decrease PTH
- Calcilytics: Negative allosteric modulators → increase PTH (investigational for osteoporosis)

**PTH Gene Regulation:**
- Chromosome 11p15
- Negative calcium-response elements in promoter
- Vitamin D suppresses PTH gene transcription
- FGF23 from bone suppresses PTH

**Mineral Homeostasis Integration:**

*PTH Actions in Detail:*
| Target | Receptor | Effect |
|--------|----------|--------|
| Bone (osteoblasts) | PTH1R | Stimulates RANKL → osteoclast activation |
| Kidney (PCT) | PTH1R | Inhibits NaPi2a → phosphaturia |
| Kidney (DCT) | PTH1R | Increases TRPV5 → Ca reabsorption |
| Kidney (PCT) | PTH1R | Activates 1α-hydroxylase → 1,25(OH)2D |

*Opposing Hormones:*
- Calcitonin: Minor role in calcium lowering
- FGF23: Phosphaturic hormone from bone, inhibits 1α-hydroxylase

**Anatomical Variants and Ectopic Locations:**

*Ectopic Parathyroid Positions (important for failed neck exploration):*
| Location | Frequency | Associated With |
|----------|-----------|-----------------|
| Intrathyroidal | 2-5% | Superior or inferior |
| Undescended (near carotid bifurcation) | Rare | Superior gland |
| Tracheoesophageal groove | 2-5% | Superior gland |
| Retroesophageal | 1-2% | Superior gland |
| Thymic/anterior mediastinum | 15-20% | Inferior gland |
| Posterior mediastinum | Rare | Inferior gland |
| Carotid sheath | <1% | Either |

*Supernumerary Glands:*
- 5th gland present in 3-5%
- Usually in thymus or near inferior thyroid
- Important to consider in persistent/recurrent hyperparathyroidism

**Preoperative Localization:**

*First-Line:*
- Sestamibi (99mTc-MIBI) scan: Uptake and delayed washout in adenoma
- Neck ultrasound: Hypoechoic nodule posterior to thyroid

*Second-Line:*
- 4D-CT: Arterial phase enhancement with washout
- 11C-methionine or 18F-fluorocholine PET/CT

**Intraoperative Adjuncts:**
- Intraoperative PTH monitoring: >50% decline at 10 minutes predicts cure
- Gamma probe with sestamibi
- Near-infrared autofluorescence: Parathyroids fluoresce green

**Parathyroid Preservation Techniques:**

*During Thyroidectomy:*
1. Capsular dissection (stay on thyroid true capsule)
2. Ligate inferior thyroid artery branches at thyroid
3. Preserve posterior thyroid capsule blood supply
4. Identify and protect each gland

*If Devascularized:*
- Confirm parathyroid tissue (biopsy small portion if uncertain)
- Mince into 1mm fragments
- Implant into muscle pocket
- Mark location (clip or suture)`,
      keyTerms: [
        { term: 'calcimimetics', definition: 'Drugs that allosterically activate CaSR to reduce PTH; used in secondary hyperparathyroidism' },
        { term: 'PTH1R', definition: 'PTH/PTHrP receptor; GPCR mediating PTH effects on bone and kidney' },
        { term: 'RANKL', definition: 'Receptor activator of nuclear factor kappa-B ligand; stimulates osteoclast differentiation' },
        { term: '4D-CT', definition: 'Four-dimensional CT with arterial and venous phases used for parathyroid localization' },
        { term: 'intraoperative PTH monitoring', definition: 'Serial PTH measurements during surgery to confirm successful adenoma removal' },
        { term: 'near-infrared autofluorescence', definition: 'Imaging technique using parathyroid tissue natural fluorescence for intraoperative identification' },
      ],
      clinicalNotes: 'Modern parathyroidectomy for primary hyperparathyroidism often uses a focused approach with preoperative localization and intraoperative PTH monitoring. However, multigland disease occurs in 15-20%, and negative localization requires four-gland exploration. Cinacalcet is an alternative for patients who are poor surgical candidates. Post-surgical hungry bone syndrome (hypocalcemia from rapid bone remineralization) occurs with severe hyperparathyroidism.',
    },
    5: {
      level: 5,
      summary: 'The parathyroid glands serve as calcium-sensing endocrine organs whose developmental, anatomical, and molecular features inform the diagnosis and management of primary, secondary, and tertiary hyperparathyroidism, with implications for genetic syndromes, surgical technique, and emerging medical therapies.',
      explanation: `**Molecular Pathophysiology of Parathyroid Disease:**

*Parathyroid Adenoma Genetics:*
- Cyclin D1/PRAD1 overexpression (inversion at 11q13): ~30% of sporadic adenomas
- MEN1 inactivation (menin): Found in MEN1 syndrome and sporadic adenomas
- CDC73/HRPT2 mutation: Parathyroid carcinoma, HPT-JT syndrome

*Hereditary Syndromes:*

| Syndrome | Gene | Parathyroid Features |
|----------|------|---------------------|
| MEN1 | MEN1 (menin) | Multigland hyperplasia, 90% penetrance |
| MEN2A | RET | Mild hyperparathyroidism in 20-30% |
| MEN4 | CDKN1B | Similar to MEN1, rare |
| HPT-JT | CDC73 | Adenomas, high carcinoma risk |
| FHH | CASR (inactivating) | Hypercalcemia, inappropriately normal PTH |
| Neonatal severe HPT | CASR (homozygous) | Life-threatening hypercalcemia |
| ADH | CASR (activating) | Hypocalcemia, hypoparathyroidism phenotype |

*Familial Hypocalciuric Hypercalcemia (FHH):*
- Heterozygous inactivating CaSR mutation
- Benign condition often mistaken for primary HPT
- Calcium:creatinine clearance ratio <0.01
- Surgery NOT indicated (will not cure hypercalcemia)

**Secondary Hyperparathyroidism:**

*Chronic Kidney Disease Progression:*
1. Decreased 1,25(OH)2D → reduced intestinal Ca absorption
2. Phosphate retention → direct PTH stimulation
3. Increased FGF23 (initially adaptive)
4. Parathyroid hyperplasia → autonomous secretion
5. Tertiary HPT if very prolonged

*CKD-MBD Treatment Targets:*
- PTH: 2-9x upper normal in ESRD
- Phosphorus: Near normal
- Calcium: Avoid hypercalcemia

*Medical Management:*
- Phosphate binders: Calcium-based vs. non-calcium (sevelamer, lanthanum)
- Vitamin D analogs: Calcitriol, paricalcitol (less hypercalcemia)
- Calcimimetics: Cinacalcet, etelcalcetide
- Surgical parathyroidectomy for refractory disease

**Parathyroid Carcinoma:**

*Clinical Clues:*
- Very high calcium (>14 mg/dL), very high PTH (>500 pg/mL)
- Palpable neck mass
- Renal and skeletal disease prominent
- Elevated alkaline phosphatase

*Histopathology:*
- Invasion of capsule, vessels, or surrounding structures
- Thick fibrous bands
- High mitotic rate
- Ki-67 >5%
- Loss of parafibromin (CDC73/HRPT2 marker)

*Management:*
- En bloc resection (thyroid lobectomy, central neck dissection)
- Avoid capsule rupture (seeding)
- Adjuvant radiation: Role unclear
- Recurrence common; re-operation when possible
- Severe hypercalcemia: Cinacalcet, denosumab, bisphosphonates

**Advanced Surgical Concepts:**

*Parathyroid Autotransplantation:*
- Sites: Sternocleidomastoid, forearm brachioradialis
- Forearm allows easy access for future surgery if needed
- Function returns in 4-6 weeks
- Confirm function: PTH gradient from implant site vein

*Subtotal Parathyroidectomy (for 4-gland hyperplasia):*
- Leave 50-60 mg of most normal-appearing gland
- Mark remnant with clip
- Cryopreserve removed tissue for possible autotransplant if hypocalcemia

*Total Parathyroidectomy with Autotransplant:*
- Used in MEN1, secondary HPT
- All tissue removed, then autotransplant performed
- Forearm preferred for easier future surgery

**Postoperative Calcium Management:**

*Hungry Bone Syndrome Risk Factors:*
- High preoperative PTH
- Large adenoma
- Elevated alkaline phosphatase
- Vitamin D deficiency
- Extensive bone disease (osteitis fibrosa cystica)

*Prevention/Treatment:*
- Preoperative vitamin D loading
- Postoperative calcium monitoring (q6h initially)
- Oral calcium carbonate + calcitriol
- IV calcium gluconate infusion if symptomatic hypocalcemia

**Emerging Therapies:**

*Abaloparatide and Teriparatide:*
- PTH analogs used for osteoporosis (anabolic effect)
- Intermittent PTH stimulates bone formation
- Contrasts with continuous PTH (resorption)

*PTH Replacement:*
- PTH(1-84) approved for hypoparathyroidism (Natpara)
- Reduces calcium and vitamin D requirements
- Black box warning: Osteosarcoma in rats

*TransCon PTH:*
- Prodrug with sustained release
- Once-daily injection for hypoparathyroidism
- Phase 3 trials ongoing`,
      keyTerms: [
        { term: 'FHH', definition: 'Familial hypocalciuric hypercalcemia; benign CaSR mutation causing hypercalcemia not requiring surgery' },
        { term: 'HPT-JT syndrome', definition: 'Hyperparathyroidism-jaw tumor syndrome (CDC73); high risk of parathyroid carcinoma' },
        { term: 'parafibromin', definition: 'Protein product of CDC73 gene; loss of staining suggests parathyroid carcinoma' },
        { term: 'hungry bone syndrome', definition: 'Severe hypocalcemia after parathyroidectomy due to rapid bone remineralization' },
        { term: 'CKD-MBD', definition: 'Chronic kidney disease-mineral bone disorder; encompasses secondary hyperparathyroidism and bone disease' },
        { term: 'Natpara', definition: 'Recombinant PTH(1-84) for hypoparathyroidism; once-daily injection' },
      ],
      clinicalNotes: 'Distinguishing primary hyperparathyroidism from FHH is crucial - check calcium:creatinine clearance ratio before surgery. In CKD, the goal is to prevent progression to severe secondary HPT through phosphate control and vitamin D supplementation; once parathyroid hyperplasia is established, it may become autonomous (tertiary HPT) even after transplant. For parathyroid carcinoma, maintaining calcium control becomes the main challenge as disease progresses - combinations of calcimimetics, bisphosphonates, and denosumab may be needed.',
    },
  },

  media: [
    {
      id: 'parathyroid-anatomy-1',
      type: 'diagram',
      filename: 'parathyroid-posterior-view.svg',
      title: 'Parathyroid Glands Posterior View',
      description: 'Location of superior and inferior parathyroid glands',
    },
    {
      id: 'parathyroid-histology-1',
      type: 'histology',
      filename: 'parathyroid-chief-oxyphil.jpg',
      title: 'Parathyroid Histology',
      description: 'Chief cells and oxyphil cells with adipose tissue',
    },
  ],

  citations: [
    {
      id: 'bilezikian-hpt',
      type: 'article',
      title: 'Primary Hyperparathyroidism',
      authors: ['Bilezikian, JP', 'Khan, AA', 'Silverberg, SJ'],
      source: 'Lancet',
      license: 'Copyrighted',
    },
    {
      id: 'aace-hpt-guidelines',
      type: 'article',
      title: 'AACE/AAES Guidelines for Primary Hyperparathyroidism',
      source: 'Endocrine Practice',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-thyroid-gland', targetType: 'structure', relationship: 'related', label: 'Thyroid Gland' },
    { targetId: 'physiology-calcium-homeostasis', targetType: 'pathway', relationship: 'related', label: 'Calcium Homeostasis' },
    { targetId: 'histology-parathyroid-cells', targetType: 'topic', relationship: 'related', label: 'Parathyroid Histology' },
    { targetId: 'pathology-hyperparathyroidism', targetType: 'condition', relationship: 'see-also', label: 'Hyperparathyroidism' },
    { targetId: 'pathology-hypoparathyroidism', targetType: 'condition', relationship: 'see-also', label: 'Hypoparathyroidism' },
  ],

  tags: {
    systems: ['endocrine', 'skeletal'],
    structures: ['FMA:13890', 'parathyroid glands'],
    topics: ['anatomy', 'calcium metabolism'],
    keywords: ['parathyroid', 'PTH', 'calcium', 'hyperparathyroidism', 'CaSR'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['endocrinology', 'surgery', 'medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
