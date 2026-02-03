/**
 * Pituitary Adenomas - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const pituitaryAdenomas: EducationalContent = {
  id: 'condition-pituitary-adenomas',
  type: 'condition',
  name: 'Pituitary Adenomas',
  alternateNames: ['Pituitary Tumors', 'Pituitary Microadenoma', 'Pituitary Macroadenoma'],
  hpoId: 'HP:0002893',

  levels: {
    1: {
      level: 1,
      summary: 'Pituitary adenomas are non-cancerous tumors of the pituitary gland that can cause hormone problems or vision changes.',
      explanation: `The pituitary gland is a small gland at the base of your brain that controls many other glands in your body. Sometimes a benign tumor called an adenoma grows there.

**Types based on size:**
- Microadenoma: Smaller than 1 cm
- Macroadenoma: 1 cm or larger

**How they cause problems:**
- Make too much of a hormone
- Press on nearby structures (like optic nerves)
- Damage normal pituitary function

**Common types:**
- Prolactinoma (makes prolactin)
- Somatotroph adenoma (makes growth hormone)
- Corticotroph adenoma (makes ACTH)
- Non-functioning (does not make excess hormone)

**Symptoms depend on type:**
- Vision problems (loss of side vision)
- Headaches
- Hormone problems
- For women: milk production when not pregnant
- For men: erectile dysfunction

**Treatment:**
- Medication (for some types)
- Surgery through the nose
- Radiation (rarely)
- Watchful waiting`,
      keyTerms: [
        { term: 'pituitary gland', definition: 'The "master gland" at the base of the brain controlling other glands' },
        { term: 'adenoma', definition: 'A benign tumor of gland tissue' },
        { term: 'prolactin', definition: 'A hormone that causes milk production' },
      ],
      analogies: [
        'The pituitary gland is like the conductor of an orchestra. A tumor there is like the conductor playing one instrument too loud, drowning out the others.',
      ],
      examples: [
        'A woman who is not pregnant but produces breast milk may have a prolactinoma.',
      ],
    },
    2: {
      level: 2,
      summary: 'Pituitary adenomas are classified by size (micro <10mm, macro >=10mm) and function. Diagnosis requires MRI, hormone panels, and visual field testing. Treatment depends on type and may include medical, surgical, or radiation therapy.',
      explanation: `## Classification

**By Size:**
- Microadenoma: <10 mm
- Macroadenoma: >=10 mm
- Giant adenoma: >40 mm

**By Function:**
| Type | Hormone | Clinical Syndrome |
|------|---------|-------------------|
| Prolactinoma | Prolactin | Galactorrhea, amenorrhea, hypogonadism |
| Somatotroph | GH | Acromegaly |
| Corticotroph | ACTH | Cushing disease |
| Thyrotroph | TSH | Hyperthyroidism (rare) |
| Gonadotroph | FSH/LH | Usually non-functioning |
| Non-functioning | None | Mass effects, hypopituitarism |

## Clinical Presentation

**Hormonal Effects:**
- Hyperfunction: Specific to hormone type
- Hypopituitarism: From compression of normal tissue

**Mass Effects:**
- Headache (40-60%)
- Visual field defects (bitemporal hemianopsia)
- Ophthalmoplegia (CN III, IV, VI)
- CSF rhinorrhea (rare)

**Pituitary Apoplexy:**
- Acute hemorrhage or infarction
- Severe headache, vision loss, ophthalmoplegia
- Emergency

## Diagnosis

**MRI:**
- T1 with gadolinium (gold standard)
- Assess size, invasion, compression

**Hormone Evaluation:**
- Prolactin, IGF-1
- 24h urine free cortisol, dexamethasone suppression
- TSH, free T4
- LH, FSH, testosterone/estradiol
- 8 AM cortisol, ACTH

**Visual Testing:**
- Formal visual fields (Humphrey)
- Acuity, color vision

## Treatment Overview

**Prolactinoma:**
- Dopamine agonists first-line (cabergoline, bromocriptine)
- Surgery if resistant or intolerant

**GH-secreting:**
- Surgery first-line
- Somatostatin analogs, GH receptor antagonist
- Radiation for residual

**ACTH-secreting:**
- Transsphenoidal surgery
- Bilateral adrenalectomy if failed
- Medical therapy (limited)

**Non-functioning:**
- Surgery for mass effects
- Observation if small, no compression
- Radiation for residual/recurrence`,
      keyTerms: [
        { term: 'bitemporal hemianopsia', definition: 'Loss of side vision in both eyes from optic chiasm compression' },
        { term: 'transsphenoidal surgery', definition: 'Surgery through the nose to reach the pituitary' },
        { term: 'hypopituitarism', definition: 'Deficiency of one or more pituitary hormones' },
      ],
    },
    3: {
      level: 3,
      summary: 'Pituitary adenoma management requires multidisciplinary care with endocrinology, neurosurgery, and ophthalmology. Surgical approach is transsphenoidal with endoscopic techniques preferred, while medical therapy with dopamine agonists effectively treats prolactinomas.',
      explanation: `## Transsphenoidal Surgery

**Approaches:**
- Microscopic: Traditional
- Endoscopic: Better visualization, preferred
- Extended endoscopic: For larger, invasive tumors

**Surgical Goals:**
- Remove tumor
- Preserve normal pituitary function
- Decompress optic apparatus
- Obtain tissue diagnosis

**Outcomes:**
- Microadenoma: 80-90% remission
- Macroadenoma: 40-60% remission
- Cushing disease: 70-90% remission (microadenomas)

**Complications:**
- CSF leak (1-4%)
- Diabetes insipidus (temporary or permanent)
- Hypopituitarism
- Vascular injury (carotid)
- Meningitis

## Prolactinoma Management

**Dopamine Agonists:**
| Drug | Dosing | Notes |
|------|--------|-------|
| Cabergoline | 0.25-1mg twice weekly | Preferred; better tolerated |
| Bromocriptine | 2.5-15mg daily | Cheaper; more side effects |

**Response:**
- Prolactin normalizes in 80-90%
- Tumor shrinks in 70-80%
- Visual improvement if present

**Resistance:**
- Consider surgery
- Higher doses (cardiac surveillance)
- Temozolomide (rare)

## Acromegaly (GH-secreting)

**Diagnosis:**
- Elevated IGF-1 (age-matched)
- Failure to suppress GH to <1 ng/mL after glucose

**Treatment:**
1. Surgery (first-line for most)
2. Medical if residual/recurrence:
   - Somatostatin analogs (octreotide, lanreotide)
   - Pegvisomant (GH receptor blocker)
   - Dopamine agonists (limited efficacy)
3. Radiation for refractory

**Goals:**
- IGF-1 normalized
- GH <1 ng/mL

## Cushing Disease

**Diagnosis:**
- Elevated UFC, loss of diurnal rhythm
- ACTH inappropriately normal/elevated
- MRI (may be normal in 40%)
- IPSS if imaging negative

**Treatment:**
- Transsphenoidal surgery
- 70-90% remission for microadenomas
- Recurrence 10-20%
- Bilateral adrenalectomy for failed surgery

**Medical Options:**
- Ketoconazole, metyrapone, osilodrostat
- Pasireotide
- Mifepristone
- For pre-op or refractory`,
      keyTerms: [
        { term: 'cabergoline', definition: 'Dopamine agonist preferred for prolactinomas' },
        { term: 'pegvisomant', definition: 'GH receptor antagonist for acromegaly' },
        { term: 'IPSS', definition: 'Inferior petrosal sinus sampling; gold standard for Cushing disease localization' },
      ],
      clinicalNotes: 'Cabergoline is preferred over bromocriptine for prolactinomas due to better efficacy and tolerability, though cardiac surveillance is needed for high doses due to valvulopathy risk.',
    },
    4: {
      level: 4,
      summary: 'Advanced pituitary adenoma management includes surgical reoperation, stereotactic radiosurgery for residual disease, management of aggressive/invasive tumors, and recognition of familial syndromes requiring genetic screening.',
      explanation: `## Reoperation and Salvage Therapy

**Indications for Reoperation:**
- Persistent Cushing disease
- Recurrent acromegaly with visible tumor
- Symptomatic residual non-functioning adenoma

**Outcomes:**
- Lower remission rates than primary surgery
- Higher complication risk
- Experienced pituitary surgeon essential

## Radiation Therapy

**Indications:**
- Residual/recurrent tumor after surgery
- Medical therapy failure
- Unresectable invasive tumors
- Patient preference

**Modalities:**
- Stereotactic radiosurgery (Gamma Knife, CyberKnife)
- Fractionated radiotherapy

**Outcomes:**
- Tumor control: 90%+ at 10 years
- Hormone normalization: 40-60% at 10 years
- Slow onset of effect (years)

**Complications:**
- Hypopituitarism (30-50% at 10 years)
- Optic neuropathy (rare with SRS)
- Cerebrovascular disease
- Secondary tumors (rare)

## Aggressive Pituitary Tumors

**Characteristics:**
- Rapid growth
- Invasion of cavernous sinus, bone
- Multiple recurrences
- Atypical histology (mitoses, Ki-67 >3%)

**Treatment:**
- Maximal surgical debulking
- Radiation
- Temozolomide (alkylating agent)
- Second-line chemotherapy if temozolomide fails

## Pituitary Carcinoma

**Definition:**
- Metastasis outside CNS
- Very rare (<0.2% of pituitary tumors)
- Most are hormone-secreting (PRL or ACTH)

**Treatment:**
- Temozolomide first-line
- Radiation
- Procarbazine/lomustine
- Poor prognosis

## Familial Syndromes

**MEN1:**
- Pituitary + parathyroid + pancreas
- 30-40% develop pituitary tumors
- Mostly prolactinomas
- Annual screening with MRI and prolactin

**MEN4:**
- CDKN1B mutations
- Similar to MEN1

**Familial Isolated Pituitary Adenoma:**
- AIP mutations
- Young onset, aggressive, often GH-secreting
- Screen family members

**Carney Complex:**
- PRKAR1A mutations
- GH-secreting tumors
- Spotty skin pigmentation, myxomas`,
      keyTerms: [
        { term: 'temozolomide', definition: 'Chemotherapy for aggressive pituitary tumors' },
        { term: 'AIP mutation', definition: 'Aryl hydrocarbon receptor interacting protein; causes familial pituitary adenomas' },
        { term: 'stereotactic radiosurgery', definition: 'Precise radiation delivery to tumor sparing surrounding tissue' },
      ],
      clinicalNotes: 'Temozolomide has emerged as first-line chemotherapy for aggressive pituitary tumors and pituitary carcinoma, with MGMT promoter methylation predicting better response.',
    },
    5: {
      level: 5,
      summary: 'Contemporary pituitary care integrates molecular classification, advanced imaging, minimally invasive surgical techniques, and targeted medical therapies while addressing quality of life and long-term outcomes in pituitary tumor survivors.',
      explanation: `## Molecular Pathology

**Classification Updates:**
- WHO 2022 classification
- Pituitary neuroendocrine tumors (PitNETs)
- Transcription factor classification
- Prognostic markers (Ki-67, p53, mitotic count)

**Genetic Drivers:**
- GNAS: Somatotroph and corticotroph
- USP8: Cushing disease (40%)
- MEN1: Familial tumors
- AIP: Familial isolated pituitary adenomas

**Predictive Markers:**
- Dopamine receptor expression (prolactinoma)
- Somatostatin receptor subtypes (acromegaly)
- SSTR2 predicts octreotide response

## Advanced Imaging

**7T MRI:**
- Improved resolution
- Better detection of microadenomas
- Research applications

**PET Tracers:**
- 11C-methionine: Pituitary adenoma uptake
- 68Ga-DOTATATE: SSTR imaging
- Helpful for localization

**Intraoperative:**
- MRI (iMRI)
- Navigation systems
- Indocyanine green fluorescence

## Surgical Innovations

**Endoscopic Evolution:**
- Extended approaches
- 3D visualization
- Exoscope technology

**Molecular-Guided Surgery:**
- Fluorescence-guided resection
- Tumor-specific markers
- Real-time identification

## Medical Therapy Advances

**Oral Somatostatin Analogs:**
- Paltusotine
- Mycapssa (octreotide oral)
- Improved convenience

**Combination Therapy:**
- Somatostatin analog + cabergoline
- Pegvisomant + somatostatin analog
- Enhanced efficacy

**Novel Targets:**
- DRD2 agonists (new formulations)
- GH secretagogue receptor antagonists
- Actin inhibitors (research)

## Quality of Life

**Patient-Reported Outcomes:**
- Acromegaly QoL questionnaire
- Depression screening
- Fatigue assessment

**Long-term Survivorship:**
- Hypopituitarism management
- Cardiovascular risk (acromegaly, Cushing)
- Bone health
- Fertility considerations
- Psychological support

## Future Directions

- Liquid biopsy for tumor monitoring
- Immunotherapy for aggressive tumors
- Gene therapy for hereditary forms
- Artificial intelligence in imaging
- Personalized medicine approaches
- Improved biomarkers for treatment response`,
      keyTerms: [
        { term: 'PitNET', definition: 'Pituitary neuroendocrine tumor; WHO 2022 terminology' },
        { term: 'USP8 mutation', definition: 'Common driver mutation in Cushing disease' },
        { term: 'paltusotine', definition: 'Oral somatostatin receptor agonist in development' },
      ],
      clinicalNotes: 'Quality of life remains impaired in many patients with controlled pituitary disease. Addressing fatigue, psychological wellbeing, and long-term comorbidities is essential.',
    },
  },

  media: [],
  citations: [
    {
      id: 'pituitary-society-2017',
      type: 'article',
      title: 'Treatment of Pituitary Adenomas',
      source: 'Pituitary Society Guidelines',
      authors: ['Fleseriu M', 'Balogun JA', 'Borson-Chazot F', 'et al.'],
    },
    {
      id: 'who-classification-2022',
      type: 'article',
      title: 'WHO Classification of Endocrine and Neuroendocrine Tumors',
      source: 'WHO',
      authors: ['Asa SL', 'Mete O', 'Perry A', 'et al.'],
    },
  ],
  crossReferences: [
    { targetId: 'anatomy-pituitary-gland', targetType: 'structure', relationship: 'related', label: 'Pituitary Gland' },
    { targetId: 'condition-cushing-syndrome', targetType: 'condition', relationship: 'related', label: 'Cushing Syndrome' },
  ],
  tags: {
    systems: ['endocrine'],
    topics: ['endocrinology', 'neurosurgery'],
    keywords: ['pituitary', 'adenoma', 'prolactinoma', 'acromegaly', 'transsphenoidal'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'neurosurgery', 'endocrinology'] },
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default pituitaryAdenomas;
