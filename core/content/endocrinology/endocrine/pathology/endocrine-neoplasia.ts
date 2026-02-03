/**
 * Endocrine Neoplasia - Comprehensive Educational Content
 */

import { EducationalContent } from '../../../types';

export const endocrineNeoplasia: EducationalContent = {
  id: 'pathology-endocrine-neoplasia',
  type: 'condition',
  name: 'Endocrine Neoplasia',
  alternateNames: ['Multiple Endocrine Neoplasia', 'Familial Endocrine Tumors', 'MEN Syndromes'],

  levels: {
    1: {
      level: 1,
      summary: 'Multiple endocrine neoplasia (MEN) syndromes are inherited conditions where people develop tumors in multiple hormone glands.',
      explanation: `Multiple endocrine neoplasia (MEN) syndromes are genetic conditions passed down in families. People with these syndromes have a higher risk of developing tumors in their endocrine glands.

**Types of MEN:**

**MEN1:**
- Parathyroid tumors (most common)
- Pituitary tumors
- Pancreas tumors (gastrinoma, insulinoma)

**MEN2:**
- Medullary thyroid cancer (almost all patients)
- Pheochromocytoma (adrenal tumor)
- Hyperparathyroidism (MEN2A only)

**Why it is important:**
- Tumors can be cancerous
- Extra hormones cause symptoms
- Early detection saves lives
- Family members need screening

**Genetic testing:**
- Can identify who has the gene
- Screening starts at young age
- Prophylactic surgery sometimes needed

**Treatment:**
- Surgery to remove tumors
- Medications
- Regular monitoring
- Lifelong follow-up`,
      keyTerms: [
        { term: 'MEN', definition: 'Multiple endocrine neoplasia; inherited tumor syndrome' },
        { term: 'parathyroid', definition: 'Glands controlling calcium' },
        { term: 'pheochromocytoma', definition: 'Adrenal tumor making adrenaline' },
      ],
      analogies: [
        'MEN syndromes are like having a faulty security system in the endocrine glands - the normal checks that prevent tumors do not work properly.',
      ],
      examples: [
        'A young person diagnosed with medullary thyroid cancer should be tested for MEN2, which would require family screening and possibly preventive surgery.',
      ],
    },
    2: {
      level: 2,
      summary: 'Multiple endocrine neoplasia (MEN) syndromes are autosomal dominant disorders. MEN1 is caused by MEN1 gene mutations; MEN2 by RET mutations. Characteristic tumor patterns guide screening and treatment.',
      explanation: `## MEN1 (Wermer Syndrome)

**Gene:**
- MEN1 (menin) tumor suppressor
- Chromosome 11q13
- Autosomal dominant

**Tumor Penetrance by Age 40:**
- Parathyroid hyperplasia/adenoma: 100%
- Pancreatic NET: 30-80%
- Pituitary adenoma: 15-50%

**Associated Tumors:**
- Gastrinoma (Zollinger-Ellison)
- Insulinoma
- Glucagonoma
- VIPoma
- Non-functioning pancreatic NET
- Adrenal cortical tumors
- Lipomas
- Facial angiofibromas
- Collagenomas

## MEN2

**Gene:**
- RET proto-oncogene
- Gain-of-function mutations
- Chromosome 10q11.2

**Subtypes:**

*MEN2A (95%):*
- Medullary thyroid cancer (MTC) ~100%
- Pheochromocytoma 50%
- Hyperparathyroidism 20-30%
- Cutaneous lichen amyloidosis
- Hirschsprung disease (rare)

*MEN2B (5%):*
- MTC (earlier onset, aggressive)
- Pheochromocytoma 50%
- Marfanoid habitus
- Mucosal neuromas
- Intestinal ganglioneuromatosis
- No hyperparathyroidism

*FMTC (Familial MTC only):*
- MTC only
- Later onset
- Best prognosis

## MEN4

**Gene:**
- CDKN1B (p27)
- Tumor suppressor
- Similar to MEN1 phenotype

## Genetic Testing

**Indications:**
- Clinical diagnosis of MEN
- First-degree relatives
- Features suggesting syndrome

**Implications:**
- Screening protocols
- Prophylactic surgery
- Family planning
- Prenatal testing available`,
      keyTerms: [
        { term: 'menin', definition: 'Protein encoded by MEN1 gene' },
        { term: 'RET', definition: 'Receptor tyrosine kinase; mutated in MEN2' },
        { term: 'penetrance', definition: 'Percentage with mutation who develop condition' },
      ],
    },
    3: {
      level: 3,
      summary: 'MEN syndrome management involves genetic testing, biochemical and imaging surveillance, prophylactic surgery timing, and treatment of hormone excess with multidisciplinary care.',
      explanation: `## MEN1 Management

**Screening Protocol:**
| Test | Age to Start | Frequency |
|------|--------------|-----------|
| Calcium, PTH | 8 years | Annually |
| Prolactin, IGF-1 | 5 years | Annually |
| Fasting gastrin, glucagon | 20 years | Annually |
| MRI pancreas | 20 years | Every 1-3 years |
| MRI pituitary | 5 years | Every 3 years |

**Hyperparathyroidism:**
- Surgery when symptomatic
- Remove 3.5 glands or all with autotransplant
- Recurrence common

**Pancreatic NETs:**
- Surgery if >2 cm or functional
- Enucleation vs resection
- Liver metastases: Surgery, PRRT, somatostatin analogs

**Pituitary:**
- Similar to sporadic
- Surgery, medical therapy

## MEN2 Management

**Risk Stratification (ATA):**
| Level | Codon | Age for Surgery |
|-------|-------|-----------------|
| Highest | 918, 883 | <1 year |
| High | 634 | Before age 5 |
| Moderate | Others | Before age 5-10 |

**Prophylactic Thyroidectomy:**
- Based on risk level
- Must precede pheochromocytoma surgery
- Central neck dissection if elevated calcitonin

**Pheochromocytoma Screening:**
- Plasma metanephrines annually from age 8
- MRI adrenals
- Remove pheo before other surgeries

**Hyperparathyroidism (MEN2A):**
- Less aggressive than MEN1
- Remove only grossly enlarged glands

## Surgical Priorities

**Critical Sequence:**
1. Rule out/maintain pheochromocytoma first
2. Thyroidectomy for MTC
3. Parathyroid surgery
4. Pancreatic surgery

**Preoperative:**
- Screen for all components
- Manage hormone excess
- Genetic counseling

## Biochemical Monitoring

**MEN1:**
- Calcium, PTH
- Gut hormones if symptoms
- Pancreatic polypeptide
- Chromogranin A

**MEN2:**
- Calcitonin (highly sensitive)
- CEA
- Metanephrines
- Calcium (MEN2A)

## Non-Surgical Treatments

**Medical:**
- PPIs for gastrinoma
- Somatostatin analogs
- Cabergoline for prolactinoma
- Vandetanib/cabozantinib for MTC

**Liver-Directed:**
- Embolization
- RFA
- Surgery

**Radiation:**
- PRRT for pancreatic NETs
- EBRT for MTC`,
      keyTerms: [
        { term: 'prophylactic thyroidectomy', definition: 'Preventive removal of thyroid before cancer develops' },
        { term: 'PRRT', definition: 'Peptide receptor radionuclide therapy' },
        { term: 'codon 634', definition: 'Common RET mutation location in MEN2A' },
      ],
      clinicalNotes: 'In MEN2, pheochromocytoma must always be ruled out or treated before any other surgery to avoid hypertensive crisis during procedures.',
    },
    4: {
      level: 4,
      summary: 'Advanced MEN management includes complex surgical reoperations, treatment of metastatic disease, recognition of variant syndromes, and transition from pediatric to adult care with ongoing surveillance.',
      explanation: `## Complex Surgical Cases

**Reoperative Parathyroid Surgery (MEN1):**
- Recurrence common
- Preoperative localization essential
- Intraoperative PTH
- Autotransplantation
- Cryopreservation

**Extensive Pancreatic NET:**
- Pancreatectomy
- Liver metastases
- Multimodal approach
- Quality of life considerations

**Metastatic MTC:**
- Lymph node dissections
- Palliative surgery
- Debulking
- Clinical trials

## Metastatic Disease

**Pancreatic NET:**
- Liver-dominant disease
- Cytoreductive surgery if >90% possible
- Liver transplantation (select cases)
- PRRT
- Chemotherapy (temozolomide-based)

**MTC:**
- Slow-growing often
- Distant metastases: Lung, liver, bone
- Vandetanib, cabozantinib
- Selpercatinib, pralsetinib (RET inhibitors)
- EBRT for local control

**Pheochromocytoma:**
- Usually benign in MEN2
- Malignant: 131I-MIBG, chemotherapy

## Variant Syndromes

**MEN1 Phenocopies:**
- MEN4 (CDKN1B)
- MAX mutations
- Other CDK inhibitors

**MEN2-Like:**
- NTRK1 mutations
- Other RET-related

**VHL:**
- Pheochromocytoma
- Pancreatic NETs
- Different genetics

**NF1:**
- Pheochromocytoma
- Different features

## Pregnancy Considerations

**MEN1:**
- Continue surveillance
- Manage hypercalcemia
- Surgical timing

**MEN2:**
- Calcitonin rises normally
- Pheochromocytoma screening
- Delivery planning

**Genetic Testing:**
- Prenatal available
- PGD for IVF
- Family planning counseling

## Transition of Care

**Pediatric to Adult:**
- Gradual transition
- Self-management education
- Genetic counseling
- Reproductive planning

**Specialized Centers:**
- Multidisciplinary teams
- Endocrine surgery
- Genetics
- Oncology

## Psychosocial Aspects

**Burden:**
- Multiple surgeries
- Lifetime surveillance
- Cancer anxiety
- Family concerns

**Support:**
- Patient organizations
- Genetic counseling
- Mental health
- Peer support`,
      keyTerms: [
        { term: 'phenocopy', definition: 'Condition resembling genetic syndrome but without mutation' },
        { term: 'PGD', definition: 'Preimplantation genetic diagnosis' },
        { term: 'cytoreductive', definition: 'Surgery to reduce tumor burden' },
      ],
      clinicalNotes: 'Metastatic pancreatic NETs in MEN1 are often indolent; careful observation may be appropriate for small, stable liver metastases.',
    },
    5: {
      level: 5,
      summary: 'Contemporary MEN management integrates precision medicine with targeted therapies, improved surgical techniques, and early genetic identification while addressing quality of life and long-term survivor care.',
      explanation: `## Molecular Advances

**RET Inhibitors:**
- Selpercatinib, pralsetinib
- High response rates
- Better tolerability
- For MTC and pheochromocytoma

**mTOR Inhibitors:**
- Everolimus
- Pancreatic NETs
- Limited efficacy

**PRRT:**
- 177Lu-DOTATATE
- Pancreatic NETs
- Good response rates
- Now standard of care

## Surgical Innovations

**Minimally Invasive:**
- Laparoscopic pancreas
- Robotic approaches
- Reduced morbidity

**Intraoperative:**
- Near-infrared imaging
- Confocal microscopy
- Better visualization

**Preservation:**
- Spleen-preserving distal pancreatectomy
- Pancreas-sparing surgery
- Function preservation

## Early Detection

**Liquid Biopsy:**
- Circulating tumor DNA
- Early recurrence detection
- Monitoring response

**Advanced Imaging:**
- 68Ga-DOTATATE PET
- Better sensitivity
- Earlier detection

## Quality of Life

**Patient-Reported Outcomes:**
- Fatigue
- GI symptoms
- Psychological distress
- Sexual dysfunction

**Survivorship:**
- Long-term follow-up
- Second primary screening
- Bone health
- Cardiovascular risk

## Research Directions

**Prevention:**
- Delay progression
- Non-surgical options
- Risk stratification

**Targeted Therapy:**
- Molecular profiles
- Personalized treatment
- Resistance mechanisms

**Gene Therapy:**
- Corrective approaches
- Early stage
- Ethical considerations

## Future Challenges

**Cost:**
- Expensive medications
- Surveillance burden
- Access disparities

**Complexity:**
- Multiple tumors
- Care coordination
- Patient navigation

**Global Health:**
- Resource-limited settings
- Genetic testing access
- Surgical expertise`,
      keyTerms: [
        { term: '177Lu-DOTATATE', definition: 'Lutetium-labeled somatostatin analog for PRRT' },
        { term: 'liquid biopsy', definition: 'Blood test detecting circulating tumor DNA' },
        { term: 'function preservation', definition: 'Sparing normal hormone function when possible' },
      ],
      clinicalNotes: 'Selective RET inhibitors have transformed MTC treatment in MEN2, offering high response rates with improved tolerability compared to multikinase inhibitors.',
    },
  },

  media: [],
  citations: [
    {
      id: 'men-guidelines-2015',
      type: 'article',
      title: 'Guidelines for Diagnosis and Therapy of MEN1 and MEN2',
      source: 'Journal of Clinical Endocrinology and Metabolism',
      authors: ['Thakker RV', 'Newey PJ', 'Walls GV', 'et al.'],
    },
  ],
  crossReferences: [
    { targetId: 'condition-medullary-thyroid-cancer', targetType: 'condition', relationship: 'related', label: 'Medullary Thyroid Cancer' },
    { targetId: 'condition-pheochromocytoma', targetType: 'condition', relationship: 'related', label: 'Pheochromocytoma' },
  ],
  tags: {
    systems: ['endocrine'],
    topics: ['endocrinology', 'oncology', 'genetics'],
    keywords: ['MEN', 'multiple endocrine neoplasia', 'RET', 'menin', 'familial'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'endocrinology', 'surgery'] },
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default endocrineNeoplasia;
