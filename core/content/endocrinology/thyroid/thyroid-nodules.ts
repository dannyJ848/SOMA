/**
 * Thyroid Nodules - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const thyroidNodules: EducationalContent = {
  id: 'condition-thyroid-nodules',
  type: 'condition',
  name: 'Thyroid Nodules',
  alternateNames: ['Thyroid Lumps', 'Thyroid Masses', 'Goiter Nodules'],
  hpoId: 'HP:0000853',

  levels: {
    1: {
      level: 1,
      summary: 'Thyroid nodules are lumps that form in the thyroid gland. Most are benign, but some can be cancerous and need evaluation.',
      explanation: `Thyroid nodules are growths of cells that form lumps in the thyroid gland. They are very common, especially as people get older.

**Key facts:**
- About half of people will develop a thyroid nodule by age 60
- Most nodules (90-95%) are not cancer
- Many people do not know they have them

**How they are found:**
- Feeling a lump in the neck
- During a routine physical exam
- On imaging done for other reasons
- Because of symptoms

**Symptoms:**
- Often no symptoms
- Visible lump in neck
- Trouble swallowing
- Hoarseness
- Breathing difficulty (rare)

**Evaluation:**
- Ultrasound to look at the nodule
- Blood tests for thyroid function
- Needle biopsy if needed

**Treatment:**
- Most just need monitoring
- Some need surgery
- Radioactive iodine for some types
- Thyroid hormone pills rarely help`,
      keyTerms: [
        { term: 'thyroid nodule', definition: 'A lump or growth in the thyroid gland' },
        { term: 'ultrasound', definition: 'Imaging using sound waves to see the thyroid' },
        { term: 'biopsy', definition: 'Taking a small sample of tissue to check for cancer' },
      ],
      analogies: [
        'Thyroid nodules are like weeds in a garden - most are harmless, but you need to check them to make sure none are poisonous (cancerous).',
      ],
      examples: [
        'A person has a CT scan for a car accident and doctors notice a small nodule in the thyroid that needs follow-up ultrasound.',
      ],
    },
    2: {
      level: 2,
      summary: 'Thyroid nodules are common, with 5-10% palpable and up to 70% found on ultrasound. Evaluation includes TSH, ultrasound with risk stratification, and FNA biopsy based on size and features. Most are benign colloid nodules.',
      explanation: `## Epidemiology

**Prevalence:**
- Palpable: 5-10% of adults
- Ultrasound: 20-76% (increases with age)
- More common in women, iodine deficiency, radiation exposure

**Malignancy Risk:**
- Overall: 7-15% of nodules
- Higher with radiation history, family history
- Most thyroid cancers are papillary (good prognosis)

## Evaluation

**History:**
- Radiation exposure (especially childhood)
- Family history of thyroid cancer
- Rapid growth
- Hoarseness, dysphagia
- Symptoms of hyper/hypothyroidism

**Physical Exam:**
- Palpate nodule (size, consistency)
- Cervical lymph nodes
- Vocal cord mobility if indicated

**Laboratory:**
- TSH (essential)
- If TSH low: Radionuclide scan
- If TSH high: May indicate Hashimoto's

**Ultrasound:**
- First-line imaging
- Assess size, features, lymph nodes
- Guide for FNA

## Risk Stratification (ACR TI-RADS)

**Composition:**
- Cystic, spongiform, mixed, solid

**Echogenicity:**
- Anechoic, hyperechoic, isoechoic, hypoechoic, very hypoechoic

**Shape:**
- Wider-than-tall vs taller-than-wide (suspicious)

**Margin:**
- Smooth, irregular, lobulated, extrathyroidal extension

**Echogenic Foci:**
- Comet-tail, macrocalcifications, peripheral, punctate (suspicious)

**Categories:**
| TI-RADS | Risk | FNA Threshold | Follow-up |
|---------|------|---------------|-----------|
| TR1 | Benign | None | None |
| TR2 | Not suspicious | None | None |
| TR3 | Low | >=2.5 cm | >=1.5 cm |
| TR4 | Moderate | >=1.5 cm | >=1.0 cm |
| TR5 | High | >=1.0 cm | >=0.5 cm |`,
      keyTerms: [
        { term: 'TI-RADS', definition: 'Thyroid Imaging Reporting and Data System' },
        { term: 'FNA', definition: 'Fine needle aspiration; biopsy of thyroid nodule' },
        { term: 'echogenicity', definition: 'How bright or dark tissue appears on ultrasound' },
      ],
    },
    3: {
      level: 3,
      summary: 'Thyroid nodule management requires risk stratification using TI-RADS, appropriate FNA biopsy with Bethesda System cytology interpretation, and tailored management based on cytology results ranging from benign observation to surgery for malignancy.',
      explanation: `## Fine Needle Aspiration (FNA)

**Indications:**
- Based on TI-RADS score and size
- Suspicious features
- Growing nodules

**Technique:**
- 25-27 gauge needle
- Ultrasound guidance
- Usually 2-3 passes
- Minimal complications

**Contraindications:**
- None absolute
- Bleeding disorder (relative)

**Bethesda System for Reporting:**
| Category | Risk | Management |
|----------|------|------------|
| I | Nondiagnostic | Repeat FNA |
| II | Benign | Clinical/ultrasound follow-up |
| III | AUS/FLUS | Repeat FNA, molecular testing, or surgery |
| IV | Follicular neoplasm | Surgery or molecular testing |
| V | Suspicious for malignancy | Surgery |
| VI | Malignant | Surgery |

## Benign Nodule Management

**Observation:**
- Most common approach
- Ultrasound follow-up intervals based on risk
- TR3: 1, 3, 5 years
- TR4: 1, 2, 3, 5 years
- TR5: annually up to 5 years

**Thyroid Hormone Suppression:**
- NOT recommended
- Does not shrink nodules
- Risk of atrial fibrillation, bone loss

**Non-Surgical Treatments:**

*Radiofrequency Ablation (RFA):*
- For symptomatic benign nodules
- 50-80% volume reduction
- Outpatient procedure
- Growing availability

*Ethanol Ablation:*
- For cystic nodules
- High success for recurrent cysts

*Laser Ablation:*
- Similar to RFA
- Less commonly used

## Surgery Indications

**For Suspected/Proven Cancer:**
- Lobectomy or total thyroidectomy
- Based on size, extent

**For Benign Nodules:**
- Compression symptoms
- Cosmetic concerns
- Retrosternal extension
- Failed non-surgical treatment
- Patient preference

**Extent:**
- Lobectomy: For low-risk cancer or large benign nodules
- Total thyroidectomy: Cancer, bilateral disease, prior radiation

## Autonomous/Toxic Nodules

**Hot Nodules:**
- Functioning nodules (toxic adenoma)
- Suppress normal thyroid tissue
- Cause hyperthyroidism
- Rarely malignant (<1%)

**Treatment:**
- Radioactive iodine (preferred)
- Surgery
- Avoid biopsy (not needed if hot)
- Antithyroid drugs (pre-treatment only)`,
      keyTerms: [
        { term: 'Bethesda system', definition: 'Standardized reporting system for thyroid cytology' },
        { term: 'radiofrequency ablation', definition: 'Minimally invasive treatment using heat to shrink nodules' },
        { term: 'AUS/FLUS', definition: 'Atypia of undetermined significance/follicular lesion of undetermined significance' },
      ],
      clinicalNotes: 'Thyroid hormone suppression is not recommended for benign thyroid nodules as it does not significantly reduce nodule size and carries risks of atrial fibrillation and osteoporosis.',
    },
    4: {
      level: 4,
      summary: 'Advanced thyroid nodule management includes molecular testing for indeterminate cytology, active surveillance for low-risk papillary microcarcinoma, and management of complex cases including multinodular goiter and substernal extension.',
      explanation: `## Molecular Testing

**Indications:**
- Bethesda III or IV cytology
- To avoid unnecessary surgery

**Tests Available:**

*Afirma (Gene Expression Classifier):*
- GEC: Benign vs suspicious
- GSC: Includes parathyroid, medullary markers
- High negative predictive value

*ThyGenX/ThyraMIR:*
- Mutation panel + microRNA classifier

*ThySeq:*
- Targeted next-generation sequencing

**Interpretation:**
- "Benign" molecular: Observe (avoid surgery)
- "Suspicious" molecular: Surgery
- Reduces unnecessary surgeries by 20-50%

## Papillary Microcarcinoma

**Definition:**
- Papillary thyroid cancer <=1 cm
- Often incidentally found
- Excellent prognosis

**Active Surveillance:**
- Appropriate for low-risk
- No extrathyroidal extension
- No lymph nodes
- No distant metastases

**Surveillance Protocol:**
- Ultrasound every 6 months x 1-2 years
- Then annually if stable
- Growth >3mm or new nodes = surgery

**Outcomes:**
- Most remain stable
- <10% grow significantly
- <1% develop nodes during surveillance
- Cancer-specific survival excellent

## Multinodular Goiter

**Management:**
- Evaluate dominant or suspicious nodules
- TSH to assess for autonomy
- Ultrasound surveillance
- Surgery if compressive symptoms
- RFA for symptomatic benign nodules

## Substernal Goiter

**Considerations:**
- May cause compression
- Can grow into mediastinum
- Surgery more complex
- May need sternotomy
- Pre-op CT for surgical planning

## Pediatric Considerations

**Higher Malignancy Risk:**
- 20-25% of nodules
- More aggressive biology
- Lower threshold for FNA
- Surgery often recommended

**Radiation-Related:**
- Chernobyl experience
- Higher malignancy risk
- Often multifocal

## Surveillance After Treatment

**Benign Nodules:**
- Based on TI-RADS risk
- Stable nodules: Less frequent follow-up
- Growing nodules: Repeat FNA or consider treatment

**After Lobectomy:**
- Ultrasound of remaining lobe
- TSH monitoring
- Thyroid replacement if needed

**After Radioactive Iodine for Toxic Nodule:**
- Monitor for hypothyroidism
- May need thyroid hormone replacement`,
      keyTerms: [
        { term: 'molecular testing', definition: 'Genetic analysis to classify indeterminate nodules' },
        { term: 'papillary microcarcinoma', definition: 'Small papillary thyroid cancer <=1 cm' },
        { term: 'active surveillance', definition: 'Monitoring instead of immediate surgery' },
      ],
      clinicalNotes: 'Active surveillance is now an accepted management strategy for low-risk papillary microcarcinoma, with studies showing excellent outcomes without immediate surgery.',
    },
    5: {
      level: 5,
      summary: 'Contemporary thyroid nodule management integrates AI for risk stratification, advances in molecular diagnostics, minimally invasive ablative techniques, and personalized approaches balancing overdiagnosis against appropriate cancer detection.',
      explanation: `## Artificial Intelligence in Ultrasound

**Deep Learning Applications:**
- Automated TI-RADS scoring
- Nodule detection
- Risk stratification
- Standardizing interpretation

**Benefits:**
- Reduce inter-observer variability
- Assist less experienced operators
- Improve consistency
- Quality control

**Challenges:**
- Validation across populations
- Integration into workflow
- Regulatory approval

## Advanced Molecular Diagnostics

**Next-Generation Sequencing:**
- Broader mutation panels
- Fusion detection
- Copy number variations
- Classifier algorithms

**miRNA Profiling:**
- Non-invasive (blood-based)
- Potential for avoiding FNA
- Still investigational

**Integrated Classifiers:**
- Combining molecular + ultrasound
- Improved accuracy
- Cost-effectiveness considerations

## Ablative Techniques

**Radiofrequency Ablation:**
- Growing evidence base
- Volume reduction 50-80%
- Symptom improvement
- Outpatient procedure
- Learning curve for operators

**Microwave Ablation:**
- Faster heating
- Larger ablation zone
- Less experience than RFA

**High-Intensity Focused Ultrasound (HIFU):**
- Non-invasive
- No needle insertion
- Limited availability
- Still developing

**Laser Ablation:**
- Similar efficacy to RFA
- Less commonly used
- More operator dependent

## Overdiagnosis Debate

**Thyroid Cancer Epidemic:**
- Incidence rising dramatically
- Mortality stable
- Due to increased detection

**Papillary Microcarcinoma:**
- Many never cause problems
- Active surveillance paradigm
- Avoiding overtreatment

**Implications:**
- More conservative approach
- Active surveillance acceptance
- Rethinking screening
- Cost considerations

## Future Directions

**Risk-Stratified Screening:**
- Target high-risk populations
- Avoid universal screening
- Cost-effective approaches

**Liquid Biopsy:**
- Circulating tumor DNA
- miRNA panels
- Non-invasive monitoring

**Precision Surgery:**
- Lobectomy vs total
- Molecular markers
- Individualized extent

**Patient-Centered Care:**
- Shared decision-making
- Active surveillance as option
- Addressing anxiety
- Quality of life focus`,
      keyTerms: [
        { term: 'overdiagnosis', definition: 'Diagnosing conditions that may never cause symptoms' },
        { term: 'liquid biopsy', definition: 'Blood test detecting tumor markers' },
        { term: 'HIFU', definition: 'High-intensity focused ultrasound; non-invasive ablation' },
      ],
      clinicalNotes: 'The thyroid cancer "epidemic" is largely due to overdiagnosis of indolent papillary microcarcinomas detected incidentally on imaging done for other reasons.',
    },
  },

  media: [],
  citations: [
    {
      id: 'aca-thyroid-2015',
      type: 'article',
      title: 'American Thyroid Association Guidelines on Thyroid Nodules and Differentiated Thyroid Cancer',
      source: 'Thyroid',
      authors: ['Haugen BR', 'Alexander EK', 'Bible KC', 'et al.'],
    },
  ],
  crossReferences: [
    { targetId: 'condition-thyroid-cancer', targetType: 'condition', relationship: 'related', label: 'Thyroid Cancer' },
    { targetId: 'condition-thyroiditis', targetType: 'condition', relationship: 'related', label: 'Thyroiditis' },
  ],
  tags: {
    systems: ['endocrine'],
    topics: ['endocrinology', 'surgery'],
    keywords: ['thyroid nodule', 'FNA', 'TI-RADS', 'Bethesda', 'thyroid cancer'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery', 'endocrinology'] },
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default thyroidNodules;
