/**
 * Thyroid Gland - Anatomy
 *
 * Butterfly-shaped gland in the neck producing thyroid hormones
 * that regulate metabolism throughout the body.
 */

import { EducationalContent } from '../../types';

export const THYROID_GLAND_ANATOMY: EducationalContent = {
  id: 'anatomy-thyroid-gland',
  type: 'structure',
  name: 'Thyroid Gland',
  alternateNames: ['Thyroid', 'Glandula thyroidea'],
  fmaId: 'FMA:9603',

  levels: {
    1: {
      level: 1,
      summary: 'The thyroid is a butterfly-shaped gland in your neck that controls how fast your body uses energy and how quickly you grow.',
      explanation: `Your thyroid gland sits in the front of your neck, just below your Adam\'s apple. It\'s shaped like a butterfly with two "wings" connected in the middle.

**What Does It Do?**
The thyroid makes hormones that act like the gas pedal for your body. These hormones control:
- How fast you burn calories (your metabolism)
- How warm or cold you feel
- How fast your heart beats
- How quickly you grow and develop
- How alert and energetic you feel

**Why Is It Important?**
Without enough thyroid hormone, everything slows down - you feel tired, cold, and sluggish. With too much, everything speeds up - you feel hot, anxious, and your heart races.

**Interesting Facts:**
- The thyroid is one of the largest glands that makes hormones
- It uses iodine from your food to make its hormones
- Doctors can often feel your thyroid by touching your neck`,
      keyTerms: [
        { term: 'thyroid', definition: 'A butterfly-shaped gland in your neck that controls how fast your body works' },
        { term: 'metabolism', definition: 'How your body turns food into energy' },
        { term: 'iodine', definition: 'A mineral found in seafood and salt that the thyroid needs to work properly' },
      ],
      analogies: [
        'The thyroid is like the thermostat and gas pedal of your body combined - it controls both your temperature and how fast everything runs.',
        'Think of thyroid hormone like the speed setting on a fan - low hormone is like the slow setting, and high hormone is like the fast setting.',
      ],
      examples: [
        'When you eat iodized salt, you\'re giving your thyroid the iodine it needs to make hormones.',
        'When you grow during puberty, your thyroid helps control how fast you get taller.',
      ],
    },
    2: {
      level: 2,
      summary: 'The thyroid gland is an endocrine organ located in the anterior neck that produces thyroxine (T4) and triiodothyronine (T3) to regulate metabolism, as well as calcitonin for calcium regulation.',
      explanation: `**Location and Structure:**
The thyroid gland is located in the anterior (front) neck, wrapping around the trachea (windpipe) just below the larynx (voice box). It consists of:
- Two lateral lobes (right and left)
- An isthmus connecting them across the midline
- Sometimes a pyramidal lobe extending upward

The adult thyroid weighs about 15-25 grams and is highly vascular (has lots of blood vessels), giving it a reddish-brown color.

**Hormones Produced:**

| Hormone | Full Name | Function |
|---------|-----------|----------|
| T4 | Thyroxine | Main hormone released; converted to T3 in tissues |
| T3 | Triiodothyronine | Active form; speeds up metabolism |
| Calcitonin | Calcitonin | Lowers blood calcium (minor role in humans) |

**Important Relationships:**
- **Parathyroid glands**: Four tiny glands on the back of the thyroid
- **Recurrent laryngeal nerves**: Run behind the thyroid; control voice box
- **Carotid arteries and jugular veins**: Major blood vessels nearby

**Blood Supply:**
- Superior thyroid artery (from external carotid)
- Inferior thyroid artery (from thyrocervical trunk)
- Sometimes a thyroid ima artery (from aorta or brachiocephalic)

The thyroid has one of the highest blood flow rates per gram of tissue in the body.`,
      keyTerms: [
        { term: 'T4 (thyroxine)', definition: 'The main thyroid hormone, containing four iodine atoms', pronunciation: 'thy-ROX-een' },
        { term: 'T3 (triiodothyronine)', definition: 'The active thyroid hormone with three iodine atoms', pronunciation: 'try-eye-oh-doh-THY-roh-neen' },
        { term: 'isthmus', definition: 'The narrow band of tissue connecting the two lobes of the thyroid', pronunciation: 'IS-mus' },
        { term: 'calcitonin', definition: 'A hormone from thyroid C cells that helps lower blood calcium' },
        { term: 'recurrent laryngeal nerve', definition: 'Nerve behind the thyroid that controls vocal cord movement' },
      ],
      analogies: [
        'The thyroid wrapping around the trachea is like a bowtie sitting on your windpipe.',
        'T4 is like a prodrug - it needs to be converted to T3 to become fully active, like how some medications need to be processed by your body to work.',
      ],
    },
    3: {
      level: 3,
      summary: 'The thyroid gland is a bilobed endocrine organ consisting of follicular epithelium producing T3/T4 and parafollicular C cells producing calcitonin, with its function regulated by the hypothalamic-pituitary-thyroid axis and intrinsic autoregulation.',
      explanation: `**Gross Anatomy:**

*Dimensions and Weight:*
- Each lobe: ~4 cm (height) × 2 cm (width) × 2 cm (depth)
- Isthmus: 1.5 cm in height and width
- Weight: 15-25 g (varies with iodine status and body size)

*Anatomical Relations:*
- Anterior: Sternothyroid, sternohyoid, omohyoid muscles; anterior jugular veins
- Posterior: Trachea, esophagus, recurrent laryngeal nerves
- Lateral: Carotid sheath (common carotid artery, internal jugular vein, vagus nerve)
- Superior: Thyroid cartilage, external branch of superior laryngeal nerve

**Fascial Layers:**
- Investing layer of deep cervical fascia covers the gland
- Pretracheal fascia (visceral fascia) creates the thyroid sheath
- Ligament of Berry: Dense attachment to cricoid cartilage (surgical landmark)

**Arterial Supply:**
1. **Superior thyroid artery**: First branch of external carotid
   - Enters upper pole of each lobe
   - Near external laryngeal nerve (risk during surgery)
2. **Inferior thyroid artery**: From thyrocervical trunk (subclavian)
   - Enters gland posteriorly at middle third
   - Recurrent laryngeal nerve crosses near its branches
3. **Thyroidea ima**: Present in 3-10%; rises from aortic arch or brachiocephalic

**Venous Drainage:**
- Superior thyroid vein → internal jugular
- Middle thyroid vein → internal jugular
- Inferior thyroid veins → brachiocephalic veins

**Lymphatic Drainage:**
- Central compartment: Pretracheal, paratracheal, prelaryngeal (Delphian) nodes
- Lateral compartment: Deep cervical chain
- Mediastinal nodes for inferior drainage

**Histological Organization:**
The thyroid parenchyma contains two cell types:
1. **Follicular cells (thyrocytes)**: Form follicles, produce T3/T4
2. **Parafollicular C cells**: Scattered between follicles, produce calcitonin

Follicles are spherical structures filled with colloid (thyroglobulin storage). During active hormone synthesis, colloid appears scalloped at margins.

**Embryology:**
- Develops from endoderm at the foramen cecum of the tongue (week 3-4)
- Descends via thyroglossal duct to final position (week 7)
- C cells derive from neural crest via ultimobranchial body (pharyngeal pouch 4/5)`,
      keyTerms: [
        { term: 'ligament of Berry', definition: 'Dense connective tissue attaching the thyroid to the cricoid cartilage; contains branches of the inferior thyroid artery' },
        { term: 'thyroglossal duct', definition: 'Embryonic structure marking the path of thyroid descent; remnants can form thyroglossal duct cysts' },
        { term: 'follicular cells', definition: 'Thyroid cells arranged in follicles that synthesize and secrete T3 and T4' },
        { term: 'parafollicular C cells', definition: 'Neural crest-derived cells producing calcitonin; origin of medullary thyroid carcinoma' },
        { term: 'colloid', definition: 'Thyroglobulin-rich material stored within thyroid follicles' },
      ],
      clinicalNotes: 'The recurrent laryngeal nerve is at highest risk during thyroid surgery where it courses posterior to the gland near the inferior thyroid artery branches. The external branch of the superior laryngeal nerve, running with the superior thyroid vessels, can be injured during upper pole dissection, causing voice changes. Thyroglossal duct remnants may persist as cysts or ectopic thyroid tissue anywhere from the tongue base to the thyroid.',
    },
    4: {
      level: 4,
      summary: 'The thyroid gland exhibits specialized morphology for iodine concentration and organification, with follicular architecture optimized for thyroglobulin synthesis and hormone storage, while vascular and neural anatomy create critical surgical considerations for thyroidectomy.',
      explanation: `**Detailed Vascular Anatomy:**

*Superior Thyroid Artery (STA):*
- First anterior branch of external carotid artery
- Descends with external laryngeal nerve (but nerve is medial)
- External laryngeal nerve classification (Cernea):
  - Type 1 (68%): Nerve crosses >1 cm above upper pole
  - Type 2a (18%): Nerve crosses <1 cm above upper pole
  - Type 2b (14%): Nerve crosses below upper pole (highest risk)

*Inferior Thyroid Artery (ITA):*
- Arises from thyrocervical trunk
- Ascends posterior to carotid sheath
- Arches medially at C6 level
- Relationship to RLN is variable:
  - RLN posterior to ITA: 60%
  - RLN anterior to ITA: 20%
  - RLN between branches: 20%

*Recurrent Laryngeal Nerve (RLN):*
- Right RLN: Loops under subclavian artery; shorter, more oblique course
- Left RLN: Loops under aortic arch; longer, more vertical course
- Non-recurrent laryngeal nerve: 0.5-1% on right (with aberrant subclavian), extremely rare on left
- Final course: Enters larynx posterior to cricothyroid joint

**Thyroid Capsule:**
- True capsule: Thin, adherent fibrous layer
- False capsule: Pretracheal fascia forming surgical plane
- Parathyroid glands lie between true and false capsules (important for preservation)

**Microanatomy of Follicles:**

*Follicular Cell Polarity:*
- Apical surface: Microvilli projecting into colloid
  - Contains: Thyroid peroxidase, dual oxidase, pendrin, NIS expression
- Basolateral surface: Faces capillaries
  - Contains: TSH receptor, Na⁺/K⁺ ATPase, thyroid hormone transporters

*Follicular Organization:*
- Follicle diameter: 50-500 μm
- Cuboidal epithelium when inactive (abundant colloid)
- Columnar epithelium when active (reduced, scalloped colloid)
- Follicular lumen contains thyroglobulin (660 kDa glycoprotein)

**C Cell Distribution:**
- Concentrated in middle and upper thirds of lateral lobes
- Rarely found in isthmus
- Total C cells: <1% of thyroid epithelium
- Not visible on standard H&E (require immunostaining for calcitonin)

**Autonomic Innervation:**
- Sympathetic: Superior and middle cervical ganglia
- Parasympathetic: Vagus nerve
- Function: Modulates blood flow, minimal direct effect on hormone secretion

**Venous Plexus and Drainage:**
- Extensive venous plexus on gland surface
- Middle thyroid vein: Short, drains directly to IJV; easily torn during surgery
- Inferior thyroid veins: Variable, unpaired; can be prominent in goiter

**Lymphatic Anatomy (Surgical Compartments):**

| Compartment | Level | Key Nodes |
|-------------|-------|-----------|
| Central (VI) | Midline | Pretracheal, paratracheal, prelaryngeal |
| Lateral (II-V) | Unilateral | Internal jugular chain, spinal accessory chain |
| Superior mediastinal | VII | Anterior mediastinal, upper tracheal |

*Sentinel Lymph Node:*
- Delphian node (prelaryngeal): First echelon drainage
- Positive Delphian node: Predictor of central compartment metastases`,
      keyTerms: [
        { term: 'Cernea classification', definition: 'System categorizing external laryngeal nerve position relative to superior thyroid pole' },
        { term: 'non-recurrent laryngeal nerve', definition: 'Rare variant where RLN arises from vagus at neck level, associated with aberrant right subclavian artery' },
        { term: 'Delphian node', definition: 'Prelaryngeal lymph node serving as sentinel for thyroid cancer central compartment metastases' },
        { term: 'thyroglobulin', definition: '660 kDa glycoprotein serving as scaffold for thyroid hormone synthesis and storage in follicular colloid' },
        { term: 'pendrin', definition: 'Apical iodide-chloride transporter essential for iodide efflux into the follicular lumen' },
      ],
      clinicalNotes: 'Intraoperative nerve monitoring (IONM) is increasingly used to identify and preserve the RLN and external laryngeal nerve during thyroidectomy. The middle thyroid vein, being short and fragile, requires careful ligation early in surgery to prevent hemorrhage. For thyroid cancer, central compartment dissection (level VI) is performed with the thyroidectomy, while lateral neck dissection is guided by imaging and/or biopsy evidence of nodal metastases.',
    },
    5: {
      level: 5,
      summary: 'The thyroid gland represents a highly specialized endocrine organ whose anatomy reflects its function in iodine metabolism and hormone biosynthesis, with clinical anatomy essential for surgical planning, cancer staging, and understanding patterns of disease spread and paraneoplastic syndromes.',
      explanation: `**Developmental Anatomy and Anomalies:**

*Normal Development Timeline:*
- Day 22-24: Thyroid primordium appears at foramen cecum
- Week 4-5: Descent via thyroglossal duct begins
- Week 7: Reaches final position, thyroglossal duct involutes
- Week 10-11: Follicle formation begins
- Week 10-12: Hormone synthesis begins; C cells incorporated

*Developmental Anomalies:*

| Anomaly | Incidence | Clinical Significance |
|---------|-----------|----------------------|
| Thyroglossal duct cyst | 7% of population | Midline neck mass, moves with swallowing |
| Pyramidal lobe | 50-80% | May harbor pathology, important surgical finding |
| Ectopic thyroid | 1:100,000-300,000 | Lingual (most common), mediastinal, struma ovarii |
| Thyroid hemiagenesis | 0.02-0.05% | Usually asymptomatic, left lobe absent more common |
| Accessory thyroid | Variable | Along thyroglossal duct path |

*Lingual Thyroid:*
- Represents failure of descent
- May be the only thyroid tissue (70%)
- Presents with dysphagia, bleeding, or airway obstruction
- Requires nuclear medicine scan before excision

**Advanced Vascular Considerations:**

*Inferior Thyroid Artery and RLN - Beahrs Classification:*
- Type I: RLN posterior to ITA trunk
- Type II: RLN anterior to ITA trunk
- Type III: RLN between ITA branches
- Type IV: RLN passing through vascular trunk

*Berry's Ligament Anatomy:*
- Dense fibrous attachment at cricoid cartilage
- Contains terminal branches of ITA
- RLN passes deep to it, entering larynx
- Zone of Beahr: High-risk area for nerve injury

*Arteria Thyroidea Ima:*
- Present in 1.5-12.2% of population
- Origin: Brachiocephalic trunk (most common), aortic arch, or right common carotid
- Supplies isthmus and inferior gland
- Surgical relevance: Unexpected bleeding during tracheostomy

**Thyroid Cancer Anatomy:**

*Papillary Thyroid Cancer (PTC):*
- Lymph node metastases in 30-80%
- Central compartment → lateral neck → mediastinum
- Skip metastases (lateral without central) in 20%
- Lung and bone are distant sites

*Follicular Thyroid Cancer (FTC):*
- Hematogenous spread predominant
- Lymph node metastases uncommon
- Lungs, bones (lytic lesions), brain

*Medullary Thyroid Cancer (MTC):*
- Originates from C cells (middle/upper lobes)
- Both lymphatic and hematogenous spread
- Central and lateral neck mets common
- Liver metastases characteristic

*Anaplastic Thyroid Cancer:*
- Rapid local invasion
- Encases trachea, esophagus, carotid
- Often unresectable at presentation

**TNM Staging Anatomical Considerations:**

*T Classification:*
- T1: ≤2 cm, confined to thyroid
- T2: >2 to ≤4 cm, confined to thyroid
- T3a: >4 cm, confined to thyroid
- T3b: Any size, with gross extrathyroidal extension into strap muscles only
- T4a: Gross ETE invading subcutaneous tissue, larynx, trachea, esophagus, or RLN
- T4b: Gross ETE invading prevertebral fascia, encasing carotid or mediastinal vessels

*Surgical Implications of T4 Disease:*
- T4a may still be resectable (tracheal shave vs. resection, RLN sacrifice if encased)
- T4b generally indicates unresectability
- Preoperative assessment: CT/MRI for invasion, laryngoscopy for cord function

**Paraneoplastic and Ectopic Syndromes:**

*Struma Ovarii:*
- Teratoma with >50% thyroid tissue
- Can produce thyrotoxicosis
- Rarely malignant (papillary histology)
- Treatment: Oophorectomy + thyroidectomy if malignant

*Functioning Thyroid Cancer Metastases:*
- Can cause thyrotoxicosis (rare)
- Suppress TSH, negative feedback
- Treatment requires thyroidectomy before RAI ablation

**Interventional Anatomy:**

*Ultrasound-Guided Procedures:*
- FNA biopsy: Approach from lateral, avoiding vessels
- Ethanol ablation: For cystic nodules, autonomously functioning nodules
- Radiofrequency/laser ablation: For benign nodules, requires understanding of critical structures

*Thyroidectomy Surgical Anatomy:*
- Kocher incision: 2 finger-breadths above clavicular heads
- Strap muscle division: Longitudinal raphe separation
- Superior pole: Ligate vessels close to gland, protect external laryngeal nerve
- Inferior pole: Identify parathyroids, avoid devascularization
- RLN identification: In tracheoesophageal groove, or at Berry's ligament insertion`,
      keyTerms: [
        { term: 'foramen cecum', definition: 'Depression at tongue base marking embryologic origin of thyroid; origin of thyroglossal duct' },
        { term: 'struma ovarii', definition: 'Ovarian teratoma containing functional thyroid tissue; rare cause of ectopic hyperthyroidism' },
        { term: 'Beahr zone', definition: 'Area near Berry\'s ligament where recurrent laryngeal nerve is at highest surgical risk' },
        { term: 'extrathyroidal extension', definition: 'Tumor spread beyond thyroid capsule; important T-staging determinant' },
        { term: 'skip metastases', definition: 'Lateral compartment nodal involvement without central compartment disease in thyroid cancer' },
      ],
      clinicalNotes: 'Preoperative assessment of thyroid cancer requires high-resolution ultrasound (primary and nodal staging), CT with contrast for locally advanced disease, and preoperative laryngoscopy to document vocal cord function. The extent of surgery (lobectomy vs. total thyroidectomy, central vs. lateral neck dissection) depends on tumor size, nodal involvement, and risk stratification. For differentiated thyroid cancer, the ATA risk stratification system guides postoperative RAI and monitoring intensity. Completion thyroidectomy may be required if final pathology reveals higher-risk features after lobectomy.',
    },
  },

  media: [
    {
      id: 'thyroid-anatomy-1',
      type: 'diagram',
      filename: 'thyroid-anterior-view.svg',
      title: 'Thyroid Gland Anterior View',
      description: 'Gross anatomy showing lobes, isthmus, and vascular supply',
    },
    {
      id: 'thyroid-surgical-1',
      type: 'diagram',
      filename: 'thyroid-surgical-anatomy.svg',
      title: 'Surgical Anatomy of the Thyroid',
      description: 'Relationship to recurrent laryngeal nerve and parathyroid glands',
    },
  ],

  citations: [
    {
      id: 'netter-thyroid',
      type: 'textbook',
      title: 'Thyroid Gland',
      source: 'Atlas of Human Anatomy, Netter, 7th Edition',
      license: 'Copyrighted',
    },
    {
      id: 'moore-neck',
      type: 'textbook',
      title: 'Neck',
      source: 'Clinically Oriented Anatomy, Moore, 8th Edition',
      chapter: '8',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-parathyroid-glands', targetType: 'structure', relationship: 'related', label: 'Parathyroid Glands' },
    { targetId: 'physiology-thyroid-hormone-synthesis', targetType: 'pathway', relationship: 'related', label: 'Thyroid Hormone Synthesis' },
    { targetId: 'histology-thyroid-follicles', targetType: 'topic', relationship: 'related', label: 'Thyroid Histology' },
    { targetId: 'pathology-hyperthyroidism', targetType: 'condition', relationship: 'see-also', label: 'Hyperthyroidism' },
    { targetId: 'pathology-thyroid-nodules-cancer', targetType: 'condition', relationship: 'see-also', label: 'Thyroid Cancer' },
    { targetId: 'clinical-thyroid-examination', targetType: 'topic', relationship: 'related', label: 'Thyroid Examination' },
  ],

  tags: {
    systems: ['endocrine'],
    structures: ['FMA:9603', 'thyroid gland', 'thyroid'],
    topics: ['anatomy', 'surgical anatomy'],
    keywords: ['thyroid', 'T3', 'T4', 'thyroid surgery', 'recurrent laryngeal nerve', 'metabolism'],
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
