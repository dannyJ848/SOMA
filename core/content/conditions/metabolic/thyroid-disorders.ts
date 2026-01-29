/**
 * Thyroid Disorders - Comprehensive Educational Content
 *
 * Covers hypothyroidism, hyperthyroidism, and thyroid nodules.
 */

import { EducationalContent } from '../../types';

export const thyroidDisorders: EducationalContent = {
  id: 'condition-thyroid-disorders',
  type: 'condition',
  name: 'Thyroid Disorders',
  alternateNames: ['Hypothyroidism', 'Hyperthyroidism', 'Thyroid Disease', 'Goiter'],
  hpoId: 'HP:0000820',

  levels: {
    1: {
      level: 1,
      summary: 'Thyroid disorders are conditions that affect the thyroid gland, a butterfly-shaped organ in your neck that controls metabolism.',
      explanation: `The thyroid is a small gland in your neck that makes hormones controlling how your body uses energy. When the thyroid does not work properly, it can cause health problems.

**Two main types of problems:**

**Hypothyroidism (underactive thyroid):**
- Gland does not make enough hormone
- Body processes slow down
- Feel tired, cold, gain weight
- Most common cause: Hashimoto disease

**Hyperthyroidism (overactive thyroid):**
- Gland makes too much hormone
- Body processes speed up
- Feel nervous, hot, lose weight
- Most common cause: Graves disease

**Other thyroid problems:**
- Thyroid nodules (lumps in the gland)
- Goiter (enlarged gland)
- Thyroid cancer

**How thyroid problems are found:**
- Blood tests measuring hormone levels
- Physical exam of the neck
- Ultrasound imaging

**Treatment:**
- Hypothyroidism: Daily hormone pills
- Hyperthyroidism: Medications, radioactive iodine, or surgery
- Most people live normal lives with treatment`,
      keyTerms: [
        { term: 'thyroid gland', definition: 'A gland in the neck that makes hormones controlling metabolism' },
        { term: 'hormone', definition: 'A chemical messenger that controls body functions' },
        { term: 'metabolism', definition: 'How your body uses energy from food' },
        { term: 'goiter', definition: 'An enlarged thyroid gland' },
      ],
      analogies: [
        'The thyroid is like the thermostat for your body - when it is broken, the temperature is either too high or too low.',
        'Think of thyroid hormone as the gas pedal for your body - too much speeds everything up, too little slows everything down.',
      ],
      examples: [
        'A woman who feels tired, cold, and has dry skin may have hypothyroidism.',
        'A person with rapid heartbeat, anxiety, and weight loss may have hyperthyroidism.',
      ],
    },
    2: {
      level: 2,
      summary: 'Thyroid disorders include hypothyroidism (insufficient hormone production) and hyperthyroidism (excess hormone production), each with distinct etiologies, clinical presentations, and management approaches.',
      explanation: `## Thyroid Physiology Basics

**The hypothalamic-pituitary-thyroid axis:**
- Hypothalamus releases TRH (thyrotropin-releasing hormone)
- Pituitary releases TSH (thyroid-stimulating hormone)
- Thyroid produces T3 (triiodothyronine) and T4 (thyroxine)
- T3 is the active hormone; T4 converts to T3 in tissues

## Hypothyroidism

**Causes:**
- **Hashimoto thyroiditis** (autoimmune, most common)
- Thyroidectomy or radioactive iodine treatment
- Medications (amiodarone, lithium)
- Iodine deficiency or excess
- Congenital hypothyroidism

**Symptoms:**
- Fatigue, weakness
- Cold intolerance
- Weight gain
- Constipation
- Dry skin, hair loss
- Depression
- Menstrual irregularities
- Bradycardia (slow heart rate)

**Diagnosis:**
- Elevated TSH (primary)
- Low free T4
- Positive anti-TPO antibodies (Hashimoto)

**Treatment:**
- Levothyroxine (synthetic T4)
- Monitor TSH 6-8 weeks after dose changes

## Hyperthyroidism

**Causes:**
- **Graves disease** (autoimmune, most common)
- Toxic multinodular goiter
- Toxic adenoma
- Thyroiditis (subacute, painless, postpartum)
- Exogenous thyroid hormone

**Symptoms:**
- Heat intolerance, sweating
- Weight loss despite increased appetite
- Anxiety, irritability, tremor
- Palpitations, tachycardia
- Insomnia
- Frequent bowel movements
- Goiter, eye problems (Graves)

**Diagnosis:**
- Low TSH
- Elevated free T4 and/or T3
- Thyroid uptake scan (determines etiology)
- TSII or TRAb (Graves disease)

**Treatment:**
- Antithyroid drugs (methimazole, PTU)
- Radioactive iodine ablation
- Thyroidectomy
- Beta-blockers for symptom control`,
      keyTerms: [
        { term: 'TSH', definition: 'Thyroid-stimulating hormone from pituitary; primary screening test' },
        { term: 'T4', definition: 'Thyroxine; main hormone produced by thyroid gland' },
        { term: 'Hashimoto thyroiditis', definition: 'Autoimmune destruction of thyroid gland causing hypothyroidism' },
        { term: 'Graves disease', definition: 'Autoimmune stimulation of thyroid causing hyperthyroidism' },
      ],
      analogies: [
        'The hypothalamic-pituitary-thyroid axis is like a thermostat - the hypothalamus sets the temperature, the pituitary reads it, and the thyroid provides the heat.',
        'In Graves disease, the immune system acts like a stuck gas pedal, constantly telling the thyroid to speed up.',
      ],
    },
    3: {
      level: 3,
      summary: 'Thyroid disorders involve complex autoimmunity in Hashimoto and Graves disease, with detailed understanding of hormone synthesis, conversion, and receptor interactions guiding diagnosis and targeted therapy including antithyroid drugs and radioiodine.',
      explanation: `## Pathophysiology

### Thyroid Hormone Synthesis
1. Iodide uptake via NIS (sodium-iodide symporter)
2. Organification and coupling (TPO-mediated)
3. Storage as colloid (thyroglobulin-bound)
4. Release: T4 (90%) and T3 (10%)
5. Peripheral conversion: T4 -> T3 (via deiodinases)

### Hashimoto Thyroiditis
**Autoimmune mechanism:**
- T-cell mediated destruction of thyroid follicles
- Anti-TPO and anti-thyroglobulin antibodies
- Lymphocytic infiltration on histology
- Progressive hypothyroidism

**Associated conditions:**
- Other autoimmune diseases (vitiligo, celiac, type 1 diabetes)
- Increased risk of thyroid lymphoma

### Graves Disease
**Pathophysiology:**
- TSI (thyroid-stimulating immunoglobulins) bind TSH receptor
- Mimic TSH action, causing hyperstimulation
- Hyperplasia and hormone overproduction

**Graves ophthalmopathy:**
- TSI stimulates orbital fibroblasts
- Glycosaminoglycan deposition
- Extraocular muscle enlargement
- Risk factors: smoking, high TSI levels

## Laboratory Interpretation

| Condition | TSH | Free T4 | Free T3 | Notes |
|-----------|-----|---------|---------|-------|
| Primary hypothyroidism | High | Low | Low | Most common |
| Secondary hypothyroidism | Low | Low | Low | Pituitary problem |
| Primary hyperthyroidism | Low | High | High | Most common |
| T3 toxicosis | Low | Normal | High | Early/mild hyperthyroidism |
| Subclinical hypothyroidism | High | Normal | Normal | Consider treatment |
| Subclinical hyperthyroidism | Low | Normal | Normal | Increased CV risk |

## Pharmacology

**Levothyroxine:**
- Synthetic T4, once daily
- Absorption affected by food, supplements
- Full effect takes 6 weeks

**Methimazole:**
- Inhibits TPO (organification)
- Preferred over PTU (except first trimester pregnancy)
- Side effects: rash, agranulocytosis, hepatotoxicity

**PTU (Propylthiouracil):**
- Inhibits TPO and peripheral T4->T3 conversion
- Preferred first trimester (teratogenicity concerns with methimazole)
- Risk of severe hepatotoxicity

**Radioactive iodine (I-131):**
- Concentrated by thyroid, destroys tissue
- Contraindicated in pregnancy, breastfeeding
- Most patients become hypothyroid`,
      keyTerms: [
        { term: 'TSI', definition: 'Thyroid-stimulating immunoglobulins; TSH receptor antibodies in Graves disease' },
        { term: 'TPO', definition: 'Thyroid peroxidase; enzyme for hormone synthesis' },
        { term: 'deiodinases', definition: 'Enzymes converting T4 to active T3 or inactive rT3' },
        { term: 'NIS', definition: 'Sodium-iodide symporter; brings iodine into thyroid cells' },
      ],
      clinicalNotes: 'TSH is the most sensitive screening test for thyroid dysfunction. In pregnancy, trimester-specific TSH ranges apply. Check TSH annually in treated hypothyroidism. Subclinical hyperthyroidism (low TSH, normal T4) increases risk of atrial fibrillation and osteoporosis.',
    },
    4: {
      level: 4,
      summary: 'Advanced thyroidology encompasses the molecular basis of thyroid autoimmunity, complex diagnostic scenarios including thyroid hormone resistance, interpretation of specialized testing, and multidisciplinary management of thyroid nodules and cancer with attention to surgical and oncologic principles.',
      explanation: `## Advanced Pathophysiology

### Thyroid Autoimmunity Mechanisms
**Hashimoto disease:**
- Th1-dominant response
- CD8+ T-cell cytotoxicity
- Fas-mediated apoptosis of thyrocytes
- Genetic susceptibility: HLA-DR3, CTLA-4, PTPN22

**Graves disease:**
- Th2-dominant response
- TSH receptor antibodies (stimulating vs blocking)
- Intrathyroidal B-cell activation
- Genetic: HLA-DR3, CTLA-4, TSHR polymorphisms

### Thyroid Hormone Transport and Action
**Transporters:**
- MCT8, MCT10, OATP1C1
- Defects cause Allan-Herndon-Dudley syndrome

**Receptors:**
- Thyroid hormone receptors (TR-alpha, TR-beta)
- Nuclear receptors regulating gene transcription
- Tissue-specific expression patterns

**Resistance to thyroid hormone (RTH):**
- TR-beta mutations
- Elevated T4/T3 with normal/high TSH
- Variable clinical phenotype

## Specialized Testing

**Thyroglobulin:**
- Marker for thyroid cancer recurrence
- Must be interpreted with anti-thyroglobulin antibodies
- Suppressed in treated patients, rise indicates recurrence

**Calcitonin:**
- Marker for medullary thyroid cancer
- C-cell derived
- Basal and stimulated (calcium/pentagastrin) levels

**Thyroid uptake scan:**
- Differentiates causes of hyperthyroidism
- High, diffuse (Graves)
- Patchy/multifocal (toxic multinodular goiter)
- Focal hot spot (toxic adenoma)
- Low (thyroiditis, exogenous hormone)

## Thyroid Nodules

**Evaluation:**
- TSH (if suppressed -> radionuclide scan)
- Ultrasound (risk stratification)
- FNA if suspicious features

**Ultrasound risk features:**
- Microcalcifications
- Irregular margins
- Taller-than-wide shape
- Hypoechogenicity
- Extrathyroidal extension

**Bethesda System (cytology):**
- I: Non-diagnostic
- II: Benign
- III: AUS/FLUS (follicular lesion of undetermined significance)
- IV: Follicular neoplasm
- V: Suspicious for malignancy
- VI: Malignant

## Thyroid Cancer

**Types:**
- Papillary (80-85%)
- Follicular (10-15%)
- Medullary (3-5%) - MEN2 association
- Anaplastic (<2%) - aggressive, poor prognosis

**Management:**
- Surgery (lobectomy vs total thyroidectomy)
- Radioactive iodine (for high-risk differentiated)
- TSH suppression (levothyroxine)
- Long-term surveillance`,
      keyTerms: [
        { term: 'RTH', definition: 'Resistance to thyroid hormone; genetic defect in TR-beta' },
        { term: 'Bethesda System', definition: 'Standardized reporting for thyroid cytopathology' },
        { term: 'MEN2', definition: 'Multiple endocrine neoplasia type 2; associated with medullary thyroid cancer' },
        { term: 'AUS/FLUS', definition: 'Atypia of undetermined significance/follicular lesion of undetermined significance' },
      ],
      clinicalNotes: 'Thyroid nodules >1 cm or with suspicious features need FNA. Most thyroid nodules are benign. Papillary thyroid cancer has excellent prognosis. Anaplastic thyroid cancer is uniformly fatal. Medullary thyroid cancer requires RET proto-oncogene testing.',
    },
    5: {
      level: 5,
      summary: 'Contemporary thyroidology integrates molecular diagnostics for indeterminate nodules, targeted therapies for advanced thyroid cancer, advanced imaging techniques, and personalized approaches to thyroid hormone replacement including desiccated thyroid and combination T4/T3 therapy controversies.',
      explanation: `## Molecular Diagnostics

### Afirma Gene Expression Classifier
- mRNA expression profiling
- Reclassifies indeterminate nodules (Bethesda III-IV)
- "Benign" result has high negative predictive value

### ThyroSeq and mutation panels
- Detects BRAF, RAS, RET/PTC, PAX8/PPAR-gamma
- Aids in surgical planning
- BRAF V600E predicts more aggressive papillary cancer

### Molecular markers in thyroid cancer
| Marker | Significance |
|--------|--------------|
| BRAF V600E | Aggressive PTC, recurrence risk |
| RAS | Follicular variant PTC, follicular adenoma/carcinoma |
| RET/PTC | Radiation-associated PTC |
| TERT promoter | High-risk feature, poor prognosis |
| TP53 | Anaplastic transformation |

## Advanced Thyroid Cancer Management

### Radioactive iodine-refractory disease
**Redifferentiation therapy:**
- MEK inhibitors (selumetinib)
- RET inhibitors (selpercatinib, pralsetinib)
- Attempt to restore iodine avidity

**Targeted therapy:**
- Lenvatinib, sorafenib (multi-kinase inhibitors)
- Cabozantinib (vandetanib for MTC)
- Side effects significant

**Immunotherapy:**
- Pembrolizumab for MSI-high/TMB-high tumors
- Trials ongoing for combination approaches

### Medullary Thyroid Cancer
**RET inhibitors:**
- Selpercatinib, pralsetinib
- Highly effective for RET-mutant MTC
- Major advance in systemic therapy

## Advanced Imaging

**PET-CT:**
- Iodine-negative, thyroglobulin-positive disease
- Detects metastases when radioactive iodine scan negative

**18F-FDG PET:**
- Aggressive, dedifferentiated tumors
- Higher SUV correlates with worse prognosis

**Sestamibi scan:**
- Parathyroid and thyroid nodule imaging
- Identifies toxic adenomas

## Controversies in Thyroid Hormone Therapy

### Desiccated thyroid extract
- Porcine-derived T4 and T3
- Some patients prefer over synthetic
- Not recommended by guidelines due to batch variability

### Combination T4/T3 therapy
**Rationale:**
- Some patients have impaired T4-to-T3 conversion
- DIO2 polymorphisms may affect conversion

**Evidence:**
- Mixed trial results
- Some patients report improved symptoms
- Not routinely recommended

**Trial approach:**
- Consider in patients with persistent symptoms on T4 alone
- Liothyronine (T3) 5-10 mcg with reduced T4 dose
- Monitor carefully

### Subclinical Thyroid Dysfunction
**Treatment thresholds:**
- TSH >10: Treat hypothyroidism
- TSH 4.5-10: Consider if symptoms, antibodies, pregnancy plans
- TSH <0.1: Treat hyperthyroidism
- TSH 0.1-0.4: Individualize based on age, comorbidities`,
      keyTerms: [
        { term: 'Afirma', definition: 'Gene expression classifier for thyroid nodule risk stratification' },
        { term: 'radioactive iodine-refractory', definition: 'Thyroid cancer that no longer concentrates radioactive iodine' },
        { term: 'DIO2', definition: 'Type 2 deiodinase; converts T4 to T3 in tissues' },
        { term: 'TERT promoter', definition: 'Genetic alteration associated with aggressive thyroid cancer behavior' },
      ],
      clinicalNotes: 'BRAF V600E testing can guide extent of initial surgery. TERT promoter mutations are high-risk regardless of histology. In differentiated thyroid cancer, TSH suppression (target based on risk) reduces recurrence. RET inhibitor therapy has transformed MTC management. Consider combination T4/T3 trial in select patients with persistent symptoms.',
    },
  },

  media: [
    {
      id: 'thyroid-anatomy',
      type: 'diagram',
      filename: 'thyroid-anatomy.svg',
      title: 'Thyroid Gland Anatomy',
      description: 'Location and structure of the thyroid gland',
    },
  ],

  citations: [
    {
      id: 'ata-guidelines-2015',
      type: 'article',
      title: 'ATA Guidelines for Diagnosis and Management of Thyroid Disease',
      source: 'Thyroid',
    },
  ],

  crossReferences: [
    { targetId: 'condition-hashimoto', targetType: 'condition', relationship: 'related', label: 'Hashimoto Disease' },
    { targetId: 'condition-graves', targetType: 'condition', relationship: 'related', label: 'Graves Disease' },
  ],

  tags: {
    systems: ['endocrine'],
    topics: ['endocrinology'],
    keywords: ['thyroid', 'hypothyroidism', 'hyperthyroidism', 'TSH', 'T4'],
    clinicalRelevance: 'high',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default thyroidDisorders;
