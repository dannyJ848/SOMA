/**
 * Pheochromocytoma - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const pheochromocytoma: EducationalContent = {
  id: 'condition-pheochromocytoma',
  type: 'condition',
  name: 'Pheochromocytoma',
  alternateNames: ['Adrenal Medulla Tumor', 'Catecholamine-Secreting Tumor', 'Paraganglioma (extra-adrenal)'],
  hpoId: 'HP:0002666',

  levels: {
    1: {
      level: 1,
      summary: 'Pheochromocytoma is a rare tumor of the adrenal gland that makes too much adrenaline, causing high blood pressure and rapid heartbeat.',
      explanation: `Pheochromocytoma is a tumor that grows in the center part of the adrenal gland (the medulla). This tumor makes too much of hormones like adrenaline, which normally help your body respond to stress.

**Common symptoms:**
- Sudden severe headaches
- Sweating
- Fast heartbeat or palpitations
- High blood pressure
- Feeling anxious or panicky
- Trembling
- Pale skin
- Chest or stomach pain

**The "attacks":**
Symptoms can come and go suddenly. Some people have episodes that last minutes to hours, with normal periods in between.

**Why it is dangerous:**
- Can cause dangerously high blood pressure
- May trigger heart problems
- Can cause stroke

**Treatment:**
- Surgery to remove the tumor (usually curative)
- Medications to control blood pressure before surgery`,
      keyTerms: [
        { term: 'pheochromocytoma', definition: 'A tumor of the adrenal medulla that makes excess adrenaline' },
        { term: 'adrenaline', definition: 'A hormone that increases heart rate and blood pressure' },
        { term: 'catecholamines', definition: 'A group of hormones including adrenaline and noradrenaline' },
      ],
      analogies: [
        'A pheochromocytoma is like having a broken alarm that goes off randomly, flooding your body with stress hormones even when you are safe and calm.',
      ],
      examples: [
        'A person with sudden headaches, sweating, and blood pressure of 180/110 that comes and goes may have a pheochromocytoma.',
      ],
    },
    2: {
      level: 2,
      summary: 'Pheochromocytoma is a catecholamine-secreting tumor of adrenal chromaffin cells causing episodic hypertension; paragangliomas are extra-adrenal equivalents. Diagnosis requires biochemical confirmation with elevated plasma free metanephrines.',
      explanation: `## Definition

**Pheochromocytoma:**
- Adrenal medullary tumor (80-85%)
- Produces catecholamines

**Paraganglioma:**
- Extra-adrenal (15-20%)
- Derived from neural crest cells
- Can be sympathetic or parasympathetic

**Rule of 10:**
- 10% extra-adrenal
- 10% bilateral
- 10% malignant
- 10% familial
- 10% pediatric
- 10% incidentalomas

## Biochemistry

**Hormones Produced:**
- Norepinephrine (noradrenaline): Most common
- Epinephrine (adrenaline)
- Dopamine

**Metabolites:**
- Metanephrines (primary diagnostic)
- Vanillylmandelic acid (VMA)
- Homovanillic acid (HVA)

## Diagnosis

**Biochemical Testing:**
| Test | Sensitivity | Specificity |
|------|-------------|-------------|
| Plasma Free Metanephrines | 97-99% | 85-95% |
| 24h Urine Metanephrines | 95-97% | 90-95% |
| Plasma Chromogranin A | 80% | 85% |

**Interpretation:**
- Metanephrines >4x upper limit: Highly suggestive
- 2-4x upper limit: Confirm with clonidine suppression test
- Consider interfering medications

**Localization:**
- CT abdomen/pelvis (first-line)
- MRI (better for skull base/neck)
- MIBG scan (functional)
- 68Ga-DOTATATE PET (most sensitive)

**Genetic Testing:**
- All patients should be offered testing
- 40% have germline mutations`,
      keyTerms: [
        { term: 'metanephrines', definition: 'Breakdown products of catecholamines; most sensitive diagnostic markers' },
        { term: 'paraganglioma', definition: 'Extra-adrenal catecholamine-secreting tumor' },
        { term: 'chromaffin cells', definition: 'Neural crest-derived cells producing catecholamines' },
      ],
    },
    3: {
      level: 3,
      summary: 'Pheochromocytoma diagnosis requires measurement of plasma free metanephrines, preoperative alpha-blockade with phenoxybenzamine, and careful surgical planning with multidisciplinary team involvement.',
      explanation: `## Pathophysiology

**Catecholamine Actions:**
- Alpha-1: Vasoconstriction, hypertension
- Alpha-2: Presynaptic feedback (inhibits release)
- Beta-1: Tachycardia, increased contractility
- Beta-2: Vasodilation, bronchodilation

**Clinical Manifestations:**
Symptoms reflect catecholamine excess:
- Sustained vs paroxysmal hypertension
- Headache (cerebral vasoconstriction)
- Sweating (cholinergic stimulation)
- Palpitations (beta-adrenergic)
- Anxiety (central effect)
- Weight loss (increased metabolism)

**Cardiomyopathy:**
- Catecholamine-induced
- Takotsubo pattern
- May present as heart failure

## Preoperative Management

**Alpha-Blockade (Essential):**
- Phenoxybenzamine (irreversible): 10mg BID, increase every 2 days
- Doxazosin (selective alpha-1): Alternative
- Goal: BP <130/80 seated, >90/60 standing

**Beta-Blockade:**
- Only AFTER alpha-blockade established
- Prevents reflex tachycardia
- Propranolol or cardioselective
- NEVER give alone (unopposed alpha = hypertensive crisis)

**Volume Expansion:**
- High salt diet
- IV fluids pre-op
- Counteracts catecholamine-induced vasoconstriction

**Other:**
- Calcium channel blockers (alternative/add-on)
- Metyrosine (catecholamine synthesis inhibitor)
- 10-14 days of preparation optimal

## Surgical Approach

**Preoperative Checklist:**
- BP controlled for 48 hours
- HR <100 bpm
- ECG stable
- Volume replete

**Anesthesia:**
- Avoid histamine-releasing drugs (morphine, atracurium)
- Avoid sympathetic stimulation (ketamine, ephedrine)
- Have phentolamine and esmolol ready
- Arterial line, central line

**Surgery:**
- Laparoscopic preferred for adrenal
- Open for large/malignant tumors
- Manipulation of tumor can release catecholamines
- Post-op hypotension common (vasodilation)`,
      keyTerms: [
        { term: 'phenoxybenzamine', definition: 'Irreversible alpha-blocker for preoperative preparation' },
        { term: 'catecholamine cardiomyopathy', definition: 'Heart muscle damage from excess catecholamines' },
        { term: 'metyrosine', definition: 'Tyrosine hydroxylase inhibitor reducing catecholamine synthesis' },
      ],
      clinicalNotes: 'Never start beta-blockers before alpha-blockade in pheochromocytoma - this can cause unopposed alpha-mediated vasoconstriction and hypertensive crisis.',
    },
    4: {
      level: 4,
      summary: 'Advanced pheochromocytoma management includes genetic counseling for hereditary syndromes, malignant disease treatment with 131I-MIBG and chemotherapy, and long-term monitoring for recurrence and metastatic disease.',
      explanation: `## Genetic Syndromes

**MEN2 (Multiple Endocrine Neoplasia Type 2):**
- RET proto-oncogene mutations
- Medullary thyroid cancer + pheochromocytoma + hyperparathyroidism
- Pheochromocytoma usually benign, adrenal
- Screen annually with plasma metanephrines

**VHL (von Hippel-Lindau):**
- VHL gene mutations
- Pheochromocytoma + hemangioblastoma + renal cell carcinoma
- Usually noradrenergic

**NF1 (Neurofibromatosis Type 1):**
- 1-5% develop pheochromocytoma
- Often asymptomatic

**SDHx Mutations:**
- SDHB, SDHC, SDHD, SDHA
- Associated with paragangliomas
- SDHB: Higher malignancy risk
- Parent-of-origin effects (SDHD)

**Other:**
- MAX, TMEM127, FH mutations

## Malignant Pheochromocytoma

**Definition:**
- Presence of metastases (not local invasion)
- Sites: Bone, lung, liver, lymph nodes
- 10-15% overall; higher with SDHB

**Treatment:**
| Modality | Indication |
|----------|------------|
| 131I-MIBG | MIBG-avid disease |
| Chemotherapy (CVD) | Rapid progression |
| Radiation | Bone metastases |
| Surgery | Cytoreduction |
| Targeted therapy | Clinical trials |

**CVD Regimen:**
- Cyclophosphamide, Vincristine, Dacarbazine
- Response rate: 30-50%
- Partial responses, rarely complete

**Newer Agents:**
- Temozolomide
- Sunitinib (tyrosine kinase inhibitor)
- 177Lu-DOTATATE

## Long-term Follow-up

**Post-surgical:**
- Biochemical testing annually
- MRI/CT if recurrence suspected
- Recurrence rate: 6-10% (benign), higher if malignant

**Hereditary Cases:**
- Lifelong surveillance
- Family screening
- Genetic counseling`,
      keyTerms: [
        { term: 'SDHB mutation', definition: 'Succinate dehydrogenase B mutation associated with malignancy' },
        { term: '131I-MIBG', definition: 'Radioactive iodine-labeled MIBG for diagnosis and therapy' },
        { term: 'CVD regimen', definition: 'Chemotherapy for malignant pheochromocytoma' },
      ],
      clinicalNotes: 'All patients with pheochromocytoma should be offered genetic testing, as up to 40% have hereditary disease. SDHB mutation carriers need lifelong surveillance for paragangliomas.',
    },
    5: {
      level: 5,
      summary: 'Contemporary pheochromocytoma practice integrates comprehensive genetic testing, advanced functional imaging, and targeted therapies while understanding the metabolomics and epigenetics of catecholamine-secreting tumors.',
      explanation: `## Genomics and Molecular Biology

**Driver Mutations:**
- Pseudohypoxia pathway (VHL, SDHx): Upregulate angiogenesis
- Kinase signaling pathway (RET, NF1): Growth factor signaling
- Wnt-altered pathway (CSDE1, MAML3): Beta-catenin activation

**Transcriptomic Classification:**
- Cluster 1 (pseudohypoxia): More aggressive
- Cluster 2 (kinase signaling): Better prognosis

**Epigenetics:**
- DNA methylation patterns
- Histone modifications
- Potential therapeutic targets

## Advanced Imaging

**68Ga-DOTATATE PET/CT:**
- Higher sensitivity than MIBG
- Better for metastatic disease
- SDHx-related tumors especially positive

**18F-FDOPA PET:**
- Dopamine precursor uptake
- Useful for head/neck paragangliomas
- Less sensitive for metastases

**18F-FDG PET:**
- Poor for primary diagnosis
- Good for high-grade/metastatic lesions

## Targeted Therapies

**Under Investigation:**

*HIF-2 Alpha Inhibitors:*
- Belzutifan approved for VHL
- Active trials in SDHx pheochromocytoma

*Tyrosine Kinase Inhibitors:*
- Sunitinib, pazopanib
- Mixed results

*Immunotherapy:*
- Checkpoint inhibitors
- Limited data

*Somatostatin Receptor Targeting:*
- 177Lu-DOTATATE
- Promising for SSTR-positive tumors

## Future Directions

- Biomarkers for malignancy prediction
- Personalized therapy based on mutation
- Improved imaging agents
- Minimally invasive ablative techniques
- Understanding neuroendocrine differentiation`,
      keyTerms: [
        { term: 'HIF-2 alpha', definition: 'Hypoxia-inducible factor; therapeutic target in pseudohypoxia pathway' },
        { term: '177Lu-DOTATATE', definition: 'Lutetium-labeled somatostatin analog for PRRT' },
        { term: 'pseudohypoxia', definition: 'Cellular response mimicking hypoxia due to metabolic alterations' },
      ],
      clinicalNotes: 'Belzutifan, an HIF-2 alpha inhibitor, is FDA-approved for VHL-associated renal cell carcinoma and CNS hemangioblastomas, with trials ongoing for pheochromocytoma.',
    },
  },

  media: [],
  citations: [
    {
      id: 'pheo-endocrine-2014',
      type: 'article',
      title: 'Pheochromocytoma and Paraganglioma',
      source: 'Endocrine Society Clinical Practice Guideline',
      authors: ['Lenders JWM', 'Duh QY', 'Eisenhofer G', 'et al.'],
    },
  ],
  crossReferences: [
    { targetId: 'anatomy-adrenal-glands', targetType: 'structure', relationship: 'related', label: 'Adrenal Glands' },
    { targetId: 'condition-cushing-syndrome', targetType: 'condition', relationship: 'related', label: 'Cushing Syndrome' },
  ],
  tags: {
    systems: ['endocrine'],
    topics: ['endocrinology'],
    keywords: ['pheochromocytoma', 'paraganglioma', 'catecholamine', 'metanephrine', 'adrenal'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'endocrinology'] },
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default pheochromocytoma;
