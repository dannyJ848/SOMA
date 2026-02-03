/**
 * Thyroid Examination - Physical Examination
 */

import { EducationalContent } from '../../types';

export const thyroidExam: EducationalContent = {
  id: 'heent-thyroid-exam',
  type: 'process',
  name: 'Thyroid Gland Examination',
  alternateNames: ['Thyroid Palpation', 'Neck Exam - Thyroid', 'Thyroid Assessment'],

  levels: {
    1: {
      level: 1,
      summary: 'A thyroid exam checks the gland in your neck that controls metabolism to see if it is enlarged or has lumps.',
      explanation: `## Checking Your Thyroid

Your thyroid is a butterfly-shaped gland in the front of your neck. It makes hormones that control how your body uses energy.

### Where Is the Thyroid?

- Located in the lower front of your neck
- Below the Adam's apple (thyroid cartilage)
- Wraps around the windpipe (trachea)
- Usually not visible or easy to feel when normal

### How Doctors Check the Thyroid

**Looking (Inspection):**
- Doctor looks at your neck while you swallow
- May ask you to drink water
- Swelling or lumps may be visible
- Enlarged thyroid is called a goiter

**Feeling (Palpation):**
- Doctor feels the front of your neck
- Checks the size and shape
- Feels for any lumps or nodules
- Checks if it is tender
- Asks you to swallow during exam

### Why the Thyroid Matters

The thyroid controls your metabolism:
- **Too active (hyperthyroidism)** - Weight loss, fast heartbeat, feeling hot
- **Too slow (hypothyroidism)** - Weight gain, tiredness, feeling cold
- **Lumps (nodules)** - Usually benign, but need checking
- **Enlarged (goiter)** - May affect swallowing or breathing

### What Doctors Find

**Normal thyroid:**
- Small, smooth
- Moves when you swallow
- Not tender
- Symmetric

**Possible problems:**
- Enlarged (goiter)
- Lumps or nodules
- Tender (thyroiditis)
- Firm or hard texture

### Tests If Needed

- **Blood tests** - Check hormone levels
- **Ultrasound** - Look at size and nodules
- **Biopsy** - Check lumps for cancer
- **Scan** - See how thyroid is working

Most thyroid problems are easily treated with medication.`,

      keyTerms: [
        { term: 'thyroid', definition: 'Gland in the neck that makes hormones controlling metabolism' },
        { term: 'goiter', definition: 'Enlarged thyroid gland' },
        { term: 'nodule', definition: 'A lump in the thyroid' },
        { term: 'metabolism', definition: 'How the body uses energy' },
        { term: 'palpation', definition: 'Using hands to feel body parts during exam' },
      ],

      analogies: [
        'The thyroid is like a thermostat - it controls the speed of your body\'s engine.',
        'A goiter is like a balloon slowly inflating - the gland gets bigger over time.',
        'Checking the thyroid while swallowing is like feeling a necklace move when you tilt your head.',
      ],

      examples: [
        'A smooth, enlarged thyroid might be from lack of iodine.',
        'A single firm nodule needs checking to make sure it is not cancer.',
        'A tender, enlarged thyroid might be from inflammation (thyroiditis).',
      ],

      patientCounselingPoints: [
        'Most thyroid nodules are not cancer.',
        'Thyroid problems are common and usually treatable.',
        'Tell your doctor if you notice neck swelling or difficulty swallowing.',
        'Regular checkups help catch thyroid problems early.',
      ],
    },

    2: {
      level: 2,
      summary: 'Thyroid examination uses inspection and palpation to assess gland size, texture, tenderness, and nodules, aiding diagnosis of thyroid dysfunction and masses.',
      explanation: `## Anatomy Review

**Thyroid Gland:**
- Two lobes (right and left)
- Connected by isthmus
- Weighs 15-25 grams normally
- Located C5-T1 vertebral levels

**Relations:**
- Anterior: Sternothyroid, sternohyoid muscles
- Posterior: Trachea, esophagus
- Lateral: Carotid sheath

## Examination Technique

### Inspection
- Patient seated with neck slightly extended
- Good lighting
- Look for visible mass or asymmetry
- Ask patient to swallow (thyroid rises)
- Ask patient to protrude tongue (thyroglossal cyst rises)

### Palpation - Anterior Approach
1. Stand facing patient
2. Place fingers on either side of trachea
3. Feel for thyroid isthmus
4. Palpate each lobe
5. Have patient swallow
6. Note: size, shape, consistency, tenderness, nodules

### Palpation - Posterior Approach
1. Stand behind seated patient
2. Place hands around neck
3. Fingers on thyroid lobes
4. Thumbs on posterior neck
5. Often preferred method

### Thyroid Assessment

| Feature | Normal | Abnormal Findings |
|---------|--------|-------------------|
| Size | Not visible, barely palpable | Visible, enlarged |
| Consistency | Smooth, rubbery | Firm, hard, nodular |
| Tenderness | Non-tender | Tender (thyroiditis) |
| Mobility | Moves with swallowing | Fixed (invasive) |
| Nodules | None | Single or multiple |
| Tenderness | None | Pain suggests thyroiditis |

### Associated Lymph Nodes
- Pretracheal
- Prelaryngeal (Delphian)
- Lateral cervical chains
- Enlarged nodes concerning for malignancy

### Associated Findings
- Tachycardia (hyperthyroidism)
- Tremor (hyperthyroidism)
- Delayed reflexes (hypothyroidism)
- Exophthalmos (Graves disease)
- Pretibial myxedema (Graves)`,

      keyTerms: [
        { term: 'isthmus', definition: 'Tissue connecting the two thyroid lobes' },
        { term: 'thyroglossal cyst', definition: 'Cyst from remnant of thyroid migration' },
        { term: 'exophthalmos', definition: 'Bulging of the eyes' },
        { term: 'Delphian node', definition: 'Prelaryngeal lymph node' },
      ],

      analogies: [
        'The thyroid moves with swallowing like an elevator going up and down.',
        'A multinodular goiter feels like a bag of marbles.',
      ],

      examples: [
        'Diffuse smooth goiter with hyperthyroidism suggests Graves disease.',
        'Single hard nodule raises concern for carcinoma.',
        'Tender thyroid after viral illness suggests subacute thyroiditis.',
      ],

      clinicalNotes: 'Always palpate for cervical lymphadenopathy with thyroid nodules - concerning for malignancy if present.',
    },

    3: {
      level: 3,
      summary: 'Comprehensive thyroid examination differentiates causes of goiter and nodules, guiding diagnostic workup and management decisions.',
      explanation: `## Goiter Classification

**Diffuse Goiter:**
- Smooth, symmetric enlargement
- Causes: Graves disease, Hashimoto thyroiditis, iodine deficiency, drugs

**Nodular Goiter:**
- Single or multiple nodules
- Multinodular goiter (MNG) most common
- Risk of malignancy varies

**Toxic vs Non-toxic:**
- Toxic: Hyperthyroidism present
- Non-toxic: Euthyroid

### Nodule Evaluation

**Risk Factors for Malignancy:**
- Male sex
- Age <20 or >60
- History of head/neck radiation
- Family history of thyroid cancer/MEN2
- Firm, fixed nodule
- Cervical lymphadenopathy
- Hoarseness
- Rapid growth

**Characteristics Suggesting Benign:**
- Multiple nodules
- Soft, cystic
- Functioning (hot) on scan
- Stable over time

**Characteristics Suggesting Malignant:**
- Single solid nodule
- Hard, irregular
- Fixed to surrounding tissue
- Associated lymph nodes
- Microcalcifications on ultrasound

### Thyroid Function Patterns

**Hyperthyroidism:**
- TSH low, T4/T3 high
- Causes: Graves, toxic nodule, thyroiditis
- Symptoms: heat intolerance, weight loss, tremor, anxiety

**Hypothyroidism:**
- TSH high, T4 low (primary)
- Causes: Hashimoto, post-ablative, iodine deficiency
- Symptoms: cold intolerance, weight gain, fatigue, constipation

**Thyroiditis:**
- Transient hyperthyroidism (leakage)
- Followed by hypothyroidism
- May recover to euthyroid
- Painful or painless variants

### Diagnostic Workup

**Laboratory:**
- TSH (screening test)
- Free T4, T3 if TSH abnormal
- Thyroid antibodies (TPO, Tg, TSI)
- Calcitonin if medullary carcinoma suspected

**Imaging:**
- Ultrasound (first-line for nodules)
- Assess size, number, characteristics
- Guide FNA biopsy

**Fine Needle Aspiration:**
- Indicated by size and ultrasound features
- Bethesda system for reporting
- Determines need for surgery

**Radioactive Iodine Uptake:**
- Differential of hyperthyroidism
- Hot nodule (toxic adenoma)
- Diffuse uptake (Graves)
- Low uptake (thyroiditis, exogenous hormone)`,

      keyTerms: [
        { term: 'multinodular goiter', definition: 'Enlarged thyroid with multiple nodules' },
        { term: 'TSH', definition: 'Thyroid stimulating hormone from pituitary' },
        { term: 'TPO antibodies', definition: 'Thyroid peroxidase antibodies in Hashimoto' },
        { term: 'TSI', definition: 'Thyroid stimulating immunoglobulin in Graves' },
        { term: 'Bethesda system', definition: 'Classification for thyroid FNA cytology' },
      ],

      analogies: [
        'TSH is like a thermostat - low when thyroid overactive, high when underactive.',
        'Hot nodules on scan are like overactive factories making too much hormone.',
      ],

      examples: [
        'Diffusely enlarged, tender thyroid after URI suggests de Quervain thyroiditis.',
        'Single nodule >1 cm with microcalcifications on ultrasound needs FNA.',
        'Low RAIU with elevated thyroid hormones suggests thyroiditis.',
      ],

      clinicalNotes: 'All thyroid nodules >1 cm or with suspicious features on ultrasound should have FNA biopsy.',
    },

    4: {
      level: 4,
      summary: 'Clinical integration of thyroid examination with management of thyroid cancer, surgical decisions, and complex thyroid disorders.',
      explanation: `## Thyroid Cancer Types

**Papillary Carcinoma:**
- Most common (80%)
- Excellent prognosis
- Lymphatic spread
- Radioactive iodine responsive

**Follicular Carcinoma:**
- 10% of thyroid cancers
- Hematogenous spread
- Minimally invasive vs widely invasive
- Prognosis good

**Medullary Carcinoma:**
- From C cells (calcitonin)
- Sporadic or familial (MEN2)
- Screen with calcitonin
- Not iodine-avid

**Anaplastic Carcinoma:**
- Rare, aggressive
- Elderly patients
- Rapidly growing mass
- Poor prognosis

### Thyroid Nodule Management

**Indications for Surgery:**
- Malignant or suspicious FNA
- Symptomatic compression
- Retrosternal extension
- Cosmetic concerns
- Patient preference with risk factors

**Extent of Surgery:**
- Lobectomy vs total thyroidectomy
- Depends on cancer type, size, risk
- Central neck dissection if lymph nodes involved

**Post-Operative Care:**
- Thyroid hormone replacement
- TSH suppression for cancer
- Radioactive iodine for high-risk
- Monitoring thyroglobulin

### Special Populations

**Pregnancy:**
- Increased thyroid hormone needs
- TSH goals different trimesters
- Propylthiouracil first trimester, methimazole after
- Surgery second trimester if needed

**Pediatrics:**
- Nodules more likely malignant
- Genetic testing for MEN2
- Conservative surgery when possible
- Lifetime surveillance

**Elderly:**
- Subclinical hyperthyroidism - treat if cardiac risks
- Subclinical hypothyroidism - often observe
- Higher surgical risks

### Complications

**Recurrent Laryngeal Nerve Injury:**
- Hoarseness
- Bilateral: airway obstruction
- Risk in surgery and advanced cancer

**Hypoparathyroidism:**
- Post-total thyroidectomy
- Transient or permanent
- Requires calcium and vitamin D

**Thyroid Storm:**
- Severe hyperthyroidism
- Fever, tachycardia, confusion
- Medical emergency
- Requires ICU care

**Myxedema Coma:**
- Severe hypothyroidism
- Hypothermia, altered mental status
- Medical emergency`,

      keyTerms: [
        { term: 'MEN2', definition: 'Multiple endocrine neoplasia type 2' },
        { term: 'thyroglobulin', definition: 'Tumor marker for differentiated thyroid cancer' },
        { term: 'TSH suppression', definition: 'Keeping TSH low to prevent cancer recurrence' },
        { term: 'thyroid storm', definition: 'Life-threatening hyperthyroidism' },
        { term: 'myxedema coma', definition: 'Life-threatening hypothyroidism' },
      ],

      clinicalNotes: 'Recurrent laryngeal nerve monitoring during surgery reduces risk of vocal cord paralysis.',
    },

    5: {
      level: 5,
      summary: 'Expert thyroid management including complex surgical cases, advanced thyroid cancer, and multidisciplinary care coordination.',
      explanation: `## Advanced Thyroid Surgery

**Reoperative Thyroid Surgery:**
- Higher complication risk
- Identify RLN preoperatively
- Consider intraoperative nerve monitoring
- Central compartment more difficult

**Retro sternal Goiter:**
- Extends into mediastinum
- May cause compressive symptoms
- CT for evaluation
- May need sternotomy or thoracic surgery

**Minimally Invasive Techniques:**
- Robotic thyroidectomy
- Transoral approaches
- Smaller incisions
- Selected patients only

## Advanced Thyroid Cancer

**Differentiated Thyroid Cancer:**
- Radioactive iodine therapy
- TSH suppression lifelong
- Monitoring thyroglobulin
- Cross-sectional imaging for recurrence

**Radioactive Iodine-Refractory Disease:**
- Tyrosine kinase inhibitors (lenvatinib, sorafenib)
- Clinical trials
- External beam radiation
- Redifferentiation strategies

**Medullary Thyroid Cancer:**
- Genetic counseling
- RET mutation testing
- Prophylactic surgery in carriers
- Vandetanib, cabozantinib for advanced

**Anaplastic Thyroid Cancer:**
- Multimodality therapy
- Dabrafenib/trametinib if BRAF mutant
- Clinical trials
- Palliative care integration

### Molecular Testing

**Indications:**
- Indeterminate FNA (Bethesda III-IV)
- Preoperative risk stratification
- Targeted therapy selection

**Mutations:**
- BRAF (papillary cancer)
- RAS (follicular lesions)
- RET/PTC (papillary)
- PAX8/PPARgamma (follicular)

### Surveillance

**Low-Risk Differentiated Cancer:**
- TSH suppressed slightly
- Annual thyroglobulin
- Neck ultrasound
- Minimize imaging radiation

**High-Risk Disease:**
- More aggressive TSH suppression
- Frequent thyroglobulin
- Cross-sectional imaging
- Radioactive iodine scans if indicated`,

      keyTerms: [
        { term: 'RET/PTC', definition: 'Rearranged during transfection/papillary thyroid carcinoma' },
        { term: 'redifferentiation', definition: 'Inducing RAI uptake in refractory cancer' },
        { term: 'tyrosine kinase inhibitor', definition: 'Targeted therapy blocking growth signals' },
      ],

      clinicalNotes: 'Molecular testing of indeterminate nodules can reduce unnecessary surgery by 50%.',
    },
  },

  media: [],

  citations: [
    {
      id: 'ata-thyroid',
      type: 'article',
      title: 'American Thyroid Association Guidelines for Management of Thyroid Nodules',
      source: 'Thyroid Journal',
    },
  ],

  crossReferences: [
    { targetId: 'heent-fundoscopic-exam', targetType: 'process', relationship: 'sibling', label: 'Fundoscopic Exam' },
    { targetId: 'endocrinology-thyroid', targetType: 'topic', relationship: 'related', label: 'Thyroid Disease' },
  ],

  tags: {
    systems: ['endocrine'],
    topics: ['physical-examination'],
    keywords: ['thyroid', 'goiter', 'nodule', 'thyroid cancer'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default thyroidExam;
