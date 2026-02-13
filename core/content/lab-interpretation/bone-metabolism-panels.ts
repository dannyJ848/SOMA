/**
 * Bone Metabolism Panel - Laboratory Interpretation Content
 *
 * Comprehensive educational content for bone metabolism interpretation including:
 * - Calcium (Total & Ionized)
 * - Phosphorus
 * - Alkaline Phosphatase (Bone-specific)
 * - Parathyroid Hormone (PTH)
 * - Vitamin D (25-OH)
 * - Osteocalcin
 * - DEXA Interpretation
 */

import { LabInterpretationContent, LabPanel, PanelPattern } from './types';

// =============================================================================
// CALCIUM (TOTAL)
// =============================================================================

export const calciumBoneInterpretation: LabInterpretationContent = {
  id: 'lab-calcium-bone',
  type: 'concept',
  name: 'Calcium (Total) - Bone Metabolism Context',
  alternateNames: ['Serum Calcium', 'Ca2+', 'Total Ca'],

  labMetadata: {
    loincCode: '17861-6',
    testName: 'Calcium Total',
    commonAbbreviations: ['Ca', 'Ca2+'],
    category: 'chemistry',
    panel: 'Bone Metabolism',
    orderingFrequency: 'routine',
  },

  referenceRanges: {
    adult: { low: 8.5, high: 10.5, unit: 'mg/dL' },
    variations: [{ low: 8.8, high: 10.8, unit: 'mg/dL', demographic: { ageGroup: 'pediatric' }, notes: 'Higher in growing children' }],
  },

  criticalValues: {
    low: 6.5, high: 13.0, unit: 'mg/dL', urgency: 'immediate',
    action: 'Obtain ionized calcium, ECG; treat symptomatically',
    notificationRequired: true,
  },

  interpretations: {
    high: {
      direction: 'high', severity: 'moderate',
      causes: [
        { category: 'Endocrine', causes: ['Primary hyperparathyroidism', 'Thyrotoxicosis'], commonality: 'common' },
        { category: 'Malignancy', causes: ['PTHrP-secreting tumors', 'Bone metastases (breast, lung, myeloma)'], commonality: 'common' },
        { category: 'Medications/Other', causes: ['Thiazide diuretics', 'Lithium', 'Vitamin D intoxication', 'Sarcoidosis'], commonality: 'uncommon' },
      ],
      associatedFindings: ['Shortened QT on ECG', 'Polyuria/polydipsia', 'Nephrolithiasis', 'Bone pain'],
      workupSuggestions: ['Intact PTH', 'Phosphorus', 'Vitamin D 25-OH', 'PTHrP if malignancy suspected'],
      clinicalPearls: [
        'Correct calcium for albumin: add 0.8 mg/dL per 1 g/dL albumin below 4.0',
        'Hyperparathyroidism and malignancy account for >90% of hypercalcemia cases',
        'Hypercalcemic crisis (>14 mg/dL): IV normal saline + calcitonin + bisphosphonate',
      ],
    },
    low: {
      direction: 'low', severity: 'moderate',
      causes: [
        { category: 'PTH-Related', causes: ['Hypoparathyroidism (post-surgical, autoimmune)', 'Pseudohypoparathyroidism', 'Hypomagnesemia'], commonality: 'common' },
        { category: 'Vitamin D Related', causes: ['Vitamin D deficiency', 'CKD (impaired 1-alpha hydroxylation)', 'Malabsorption'], commonality: 'common' },
        { category: 'Other', causes: ['Acute pancreatitis', 'Citrated blood transfusions', 'Tumor lysis syndrome'], commonality: 'uncommon' },
      ],
      associatedFindings: ['Prolonged QT', 'Chvostek/Trousseau signs', 'Perioral numbness', 'Muscle spasms/tetany'],
      workupSuggestions: ['Intact PTH', 'Magnesium', 'Phosphorus', 'Vitamin D 25-OH', 'Albumin'],
      clinicalPearls: [
        'Always check magnesium; hypomagnesemia causes PTH resistance',
        'Symptomatic hypocalcemia is a medical emergency: IV calcium gluconate',
        'Post-thyroidectomy hypocalcemia peaks at 24-72 hours',
      ],
    },
  },

  specimen: {
    specimenType: 'serum', tubeType: 'Red or SST top', volume: '3 mL',
    fastingRequired: false,
    specialHandling: ['Avoid prolonged tourniquet use (falsely elevates)'],
    interferences: ['Hemolysis falsely elevates', 'Hypoalbuminemia falsely lowers total calcium'],
  },

  relatedLabs: ['lab-phosphorus-bone', 'lab-pth', 'lab-vitamin-d-25oh', 'lab-alp-bone'],

  organAssociations: [
    { organId: 'bone', organName: 'Bone', relationship: 'Primary calcium reservoir (99%)' },
    { organId: 'parathyroid', organName: 'Parathyroid Glands', relationship: 'PTH regulation' },
    { organId: 'kidney', organName: 'Kidney', relationship: 'Reabsorption and vitamin D activation' },
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Calcium is a mineral that keeps your bones and teeth strong and helps your muscles and nerves work properly.',
      explanation: 'Calcium is the most abundant mineral in your body. About 99% is in your bones and teeth. The remaining 1% in your blood is essential for muscles, nerves, and your heartbeat. Too-high calcium causes tiredness and confusion. Too-low calcium causes muscle cramps and tingling. Your doctor checks calcium to assess your bones, kidneys, and parathyroid glands.',
      keyTerms: [
        { term: 'calcium', definition: 'A mineral that makes bones strong and helps muscles and nerves work' },
        { term: 'parathyroid glands', definition: 'Four tiny glands in your neck that control calcium levels' },
      ],
      analogies: ['Calcium is like the concrete in your bones. Without enough, the structure weakens.'],
      patientCounselingPoints: ['Eat calcium-rich foods like dairy, leafy greens, and fortified cereals.', 'Vitamin D helps your body absorb calcium.'],
    },
    2: {
      level: 2,
      summary: 'Total serum calcium measures the calcium circulating in your blood. Abnormal levels point to bone, kidney, or parathyroid gland disorders.',
      explanation: 'Calcium circulates as: 45% albumin-bound, 10% complexed, 45% free ionized (active form). **Normal**: 8.5-10.5 mg/dL.\n\n**Hypercalcemia**: Most commonly from overactive parathyroids or cancer. Causes fatigue, confusion, kidney stones.\n**Hypocalcemia**: From vitamin D deficiency, kidney disease, or parathyroid removal. Causes numbness, tingling, muscle spasms.\n\nCorrect for albumin when abnormal: add 0.8 mg/dL per 1 g/dL albumin below 4.0.',
      keyTerms: [
        { term: 'hypercalcemia', definition: 'Abnormally high blood calcium', pronunciation: 'HY-per-kal-SEE-mee-ah' },
        { term: 'hypocalcemia', definition: 'Abnormally low blood calcium', pronunciation: 'HY-po-kal-SEE-mee-ah' },
        { term: 'ionized calcium', definition: 'The free, active form of calcium in the blood' },
      ],
      clinicalNotes: 'Corrected calcium = measured Ca + 0.8 x (4.0 - albumin). Ionized calcium is preferred in critically ill patients.',
    },
    3: {
      level: 3,
      summary: 'Calcium homeostasis is tightly regulated by PTH, vitamin D, and calcitonin acting on bone, kidney, and intestine. Disruption causes clinically significant hyper- or hypocalcemia.',
      explanation: '## Calcium Regulation\n\nThree hormones maintain serum calcium:\n1. **PTH**: Raises calcium via bone resorption, renal reabsorption, and calcitriol synthesis\n2. **Calcitriol** (1,25-(OH)2D): Increases intestinal calcium absorption\n3. **Calcitonin**: Lowers calcium by inhibiting osteoclasts (minor clinical role)\n\n### Hypercalcemia Differential\n- **PTH-dependent** (elevated): Primary HPT, FHH, lithium\n- **PTH-independent** (suppressed): Malignancy (PTHrP), vitamin D excess, granulomatous disease\n\n### Hypocalcemia Differential\n- **Low PTH**: Post-surgical, autoimmune, DiGeorge\n- **High PTH**: Vitamin D deficiency, CKD, pseudohypoparathyroidism, hypomagnesemia',
      keyTerms: [
        { term: 'osteoclast', definition: 'Cell that breaks down bone, releasing calcium into blood', pronunciation: 'OS-tee-oh-klast' },
        { term: 'osteoblast', definition: 'Cell that builds new bone, depositing calcium', pronunciation: 'OS-tee-oh-blast' },
        { term: 'calcitriol', definition: 'Active form of vitamin D (1,25-dihydroxyvitamin D)', pronunciation: 'kal-SIH-tree-ol' },
        { term: 'PTHrP', definition: 'Parathyroid hormone-related peptide; produced by some cancers' },
      ],
      examples: ['A 60-year-old woman with fatigue, polyuria, and calcium of 12.5 mg/dL: check PTH to differentiate hyperparathyroidism from malignancy.'],
    },
    4: {
      level: 4,
      summary: 'Calcium homeostasis involves integrated PTH-vitamin D-FGF23 axes with tight feedback loops. Pathophysiology of calcium disorders requires systematic evaluation of PTH, phosphorus, and vitamin D metabolites.',
      explanation: '## Advanced Calcium Pathophysiology\n\n### PTH-Vitamin D Axis\nCaSR on parathyroid chief cells detects ionized calcium. Hypocalcemia triggers PTH release, activating: osteoclastic bone resorption (RANKL), renal Ca reabsorption (TRPV5), and 1-alpha hydroxylase (CYP27B1).\n\n### FGF23 Integration\nFGF23 from osteocytes inhibits 1-alpha hydroxylase and promotes phosphaturia. Elevated in CKD, contributing to secondary hyperparathyroidism.\n\n### Clinical Decision Algorithm\n1. Confirm with ionized calcium or albumin correction\n2. Check PTH: PTH-dependent vs. PTH-independent\n3. PTH elevated: 24h urine calcium (PHPT vs. FHH; ratio <0.01 = FHH)\n4. PTH suppressed: check PTHrP, vitamin D metabolites',
      keyTerms: [
        { term: 'CaSR', definition: 'Calcium-sensing receptor on parathyroid cells that regulates PTH secretion' },
        { term: 'RANKL', definition: 'Receptor activator of nuclear factor kappa-B ligand; stimulates osteoclast differentiation' },
        { term: 'FGF23', definition: 'Fibroblast growth factor 23; phosphaturic hormone from osteocytes' },
        { term: 'FHH', definition: 'Familial hypocalciuric hypercalcemia; benign autosomal dominant condition' },
      ],
      clinicalNotes: 'In CKD-MBD (mineral and bone disorder), target calcium-phosphorus product <55 mg2/dL2 to reduce vascular calcification risk.',
    },
    5: {
      level: 5,
      summary: 'Expert-level calcium evaluation integrates CaSR signaling, RANKL/OPG balance, Wnt/beta-catenin bone remodeling pathways, and pharmacologic targets including denosumab, cinacalcet, and teriparatide.',
      explanation: '## Expert Calcium & Bone Metabolism\n\n### Molecular Regulation\n- **CaSR signaling**: GPCR activating PLC, inhibiting adenylyl cyclase. Gain-of-function = autosomal dominant hypocalcemia; loss-of-function = FHH.\n- **RANKL/OPG axis**: RANKL on osteoclast precursors promotes differentiation. Denosumab mimics OPG (decoy receptor).\n- **Wnt/sclerostin pathway**: Sclerostin (SOST) inhibits Wnt-driven osteoblast activity. Romosozumab (anti-sclerostin) is the newest anabolic bone agent.\n\n### Current Evidence\n- Teriparatide vs. abaloparatide for osteoporosis; sequential antiresorptive therapy after anabolic maximizes BMD\n- VITAL trial: no fracture reduction with vitamin D in replete adults\n- TransCon PTH for chronic hypoparathyroidism; monitor nephrocalcinosis and basal ganglia calcifications',
      keyTerms: [
        { term: 'sclerostin', definition: 'Osteocyte-derived Wnt inhibitor; target of romosozumab', pronunciation: 'skleh-ROS-tin' },
        { term: 'denosumab', definition: 'Monoclonal antibody against RANKL; potent antiresorptive', pronunciation: 'den-OH-soo-mab' },
        { term: 'cinacalcet', definition: 'Calcimimetic that allosterically activates CaSR, lowering PTH', pronunciation: 'sin-ah-KAL-set' },
        { term: 'teriparatide', definition: 'Recombinant PTH(1-34); anabolic bone agent for osteoporosis', pronunciation: 'ter-ih-PAR-ah-tide' },
      ],
      clinicalNotes: 'Bisphosphonate holiday after 5 years (oral) or 3 years (IV zoledronic acid) for low-risk patients. Reassess with FRAX and bone turnover markers. Atypical femur fractures and ONJ are rare but serious complications of prolonged antiresorptive therapy.',
    },
  },

  media: [],
  citations: [
    { id: 'bone-calcium-ref-1', type: 'textbook', title: 'Williams Textbook of Endocrinology', source: 'Elsevier, 14th Edition', chapter: 'Calcium and Bone Metabolism' },
  ],
  crossReferences: [
    { targetId: 'lab-pth', targetType: 'concept', relationship: 'related', label: 'Parathyroid Hormone' },
    { targetId: 'lab-vitamin-d-25oh', targetType: 'concept', relationship: 'related', label: 'Vitamin D (25-OH)' },
  ],
  tags: {
    systems: ['musculoskeletal', 'endocrine', 'renal'],
    topics: ['bone metabolism', 'calcium homeostasis', 'electrolytes'],
    clinicalRelevance: 'high',
  },

  createdAt: '2025-01-15',
  updatedAt: '2025-01-15',
  version: 1,
  status: 'published',
};

// =============================================================================
// PARATHYROID HORMONE (PTH)
// =============================================================================

export const pthInterpretation: LabInterpretationContent = {
  id: 'lab-pth',
  type: 'concept',
  name: 'Parathyroid Hormone (PTH)',
  alternateNames: ['Intact PTH', 'iPTH', 'Parathormone'],

  labMetadata: {
    loincCode: '2731-8', testName: 'Parathyroid Hormone Intact',
    commonAbbreviations: ['PTH', 'iPTH'], category: 'chemistry',
    panel: 'Bone Metabolism', orderingFrequency: 'common',
  },

  referenceRanges: { adult: { low: 15, high: 65, unit: 'pg/mL' } },

  interpretations: {
    high: {
      direction: 'high', severity: 'moderate',
      causes: [
        { category: 'Primary', causes: ['Parathyroid adenoma (85%)', 'Parathyroid hyperplasia (14%)', 'Parathyroid carcinoma (1%)'], commonality: 'common' },
        { category: 'Secondary', causes: ['Vitamin D deficiency', 'Chronic kidney disease', 'Malabsorption', 'Calcium-poor diet'], commonality: 'common' },
        { category: 'Tertiary', causes: ['Autonomous PTH secretion after prolonged secondary HPT (post-transplant)'], commonality: 'rare' },
      ],
      associatedFindings: ['Hypercalcemia (primary HPT)', 'Hypocalcemia (secondary HPT)', 'Elevated ALP'],
      workupSuggestions: ['Calcium', 'Phosphorus', 'Vitamin D 25-OH', '24h urine calcium', 'Sestamibi if surgical'],
      clinicalPearls: ['Primary HPT: high Ca + high PTH. Secondary HPT: low Ca + high PTH'],
    },
    low: {
      direction: 'low', severity: 'moderate',
      causes: [
        { category: 'Acquired', causes: ['Post-surgical (thyroidectomy, parathyroidectomy)', 'Autoimmune hypoparathyroidism', 'Radiation', 'Iron/copper overload'], commonality: 'common' },
        { category: 'Congenital', causes: ['DiGeorge syndrome (22q11.2 deletion)', 'Autoimmune polyglandular syndrome type 1'], commonality: 'rare' },
      ],
      associatedFindings: ['Hypocalcemia', 'Hyperphosphatemia'],
      workupSuggestions: ['Calcium', 'Phosphorus', 'Magnesium', 'Vitamin D 25-OH'],
      clinicalPearls: ['Suppressed PTH with hypercalcemia: think malignancy or vitamin D intoxication', 'Hungry bone syndrome post-parathyroidectomy: massive calcium influx into bone'],
    },
  },

  specimen: {
    specimenType: 'plasma', tubeType: 'EDTA (lavender top)', volume: '3 mL',
    fastingRequired: false,
    specialHandling: ['Process rapidly; PTH degrades at room temperature', 'Keep on ice'],
    interferences: ['Hemolysis degrades PTH', 'Biotin may interfere with immunoassay'],
  },

  relatedLabs: ['lab-calcium-bone', 'lab-phosphorus-bone', 'lab-vitamin-d-25oh'],

  organAssociations: [
    { organId: 'parathyroid', organName: 'Parathyroid Glands', relationship: 'Secretion site' },
    { organId: 'bone', organName: 'Bone', relationship: 'Target for resorption' },
    { organId: 'kidney', organName: 'Kidney', relationship: 'Ca reabsorption and phosphorus excretion' },
  ],

  levels: {
    1: {
      level: 1,
      summary: 'PTH is a hormone from tiny glands in your neck that controls how much calcium is in your blood.',
      explanation: 'Four tiny glands behind your thyroid release PTH when blood calcium drops. PTH tells bones to release calcium, kidneys to hold onto it, and gut to absorb more. Overactive glands raise calcium too high; non-working glands let calcium drop dangerously low.',
      keyTerms: [{ term: 'PTH', definition: 'A hormone that raises calcium in your blood' }],
      patientCounselingPoints: ['PTH works like a thermostat for calcium.', 'Your doctor may order this test if your calcium level is abnormal.'],
    },
    2: {
      level: 2,
      summary: 'PTH is the primary regulator of blood calcium. Interpreting PTH always requires simultaneous calcium measurement.',
      explanation: '**Normal Range**: 15-65 pg/mL\n\nPTH acts on three targets:\n1. **Bone**: Stimulates osteoclasts to release calcium\n2. **Kidney**: Increases calcium reabsorption; decreases phosphorus reabsorption; activates vitamin D\n3. **Intestine** (indirect): Via activated vitamin D, increases calcium absorption\n\n**High PTH + High Calcium** = Primary hyperparathyroidism\n**High PTH + Low Calcium** = Secondary hyperparathyroidism (appropriate response)\n**Low PTH + Low Calcium** = Hypoparathyroidism\n**Low PTH + High Calcium** = Non-PTH cause (malignancy, vitamin D excess)',
      keyTerms: [
        { term: 'hyperparathyroidism', definition: 'Condition where parathyroid glands produce too much PTH', pronunciation: 'HY-per-PAR-ah-THY-royd-izm' },
      ],
    },
    3: {
      level: 3,
      summary: 'PTH interpretation requires a systematic approach correlating with calcium, phosphorus, and vitamin D to distinguish primary, secondary, and tertiary hyperparathyroidism.',
      explanation: '## PTH Interpretation\n\n### Assay Types\n- **Intact PTH (1-84)**: Standard; also detects 7-84 fragment\n- **Bio-intact PTH**: Only 1-84; useful in CKD (fragments accumulate)\n\n### Primary HPT\n85% adenoma, 14% hyperplasia, 1% carcinoma. Surgery criteria: age <50, Ca >1.0 above normal, T-score <-2.5, vertebral fracture, eGFR <60, nephrolithiasis.\n\n### Secondary HPT\nAppropriate PTH elevation from CKD or vitamin D deficiency. KDIGO: PTH 2-9x ULN in CKD G5D.',
      keyTerms: [
        { term: 'osteitis fibrosa cystica', definition: 'Severe bone disease from prolonged PTH excess; brown tumors on imaging' },
        { term: 'sestamibi scan', definition: 'Nuclear medicine imaging to localize parathyroid adenomas' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced PTH physiology integrates CaSR-mediated secretion, PTH receptor signaling (PTHR1), bone remodeling coupling, and surgical/medical management algorithms.',
      explanation: '## Advanced PTH Biology\n\n### Secretion Regulation\nCaSR activation triggers Gq-mediated PLC, suppressing PTH release. Vitamin D directly suppresses PTH gene transcription via VDR.\n\n### PTHR1 Signaling\nPTH binds PTHR1 (class B GPCR) activating Gs (cAMP/PKA) and Gq (PLC/PKC). Intermittent exposure = anabolic (teriparatide basis); continuous = catabolic.\n\n### Surgical Localization\n- Sestamibi-SPECT/CT: 70-90% sensitivity for adenomas\n- 4D-CT: Superior for multigland disease\n- Intraoperative PTH: >50% drop at 10 min confirms cure',
      keyTerms: [
        { term: 'PTHR1', definition: 'PTH receptor type 1; class B GPCR mediating PTH effects on bone and kidney' },
        { term: '4D-CT', definition: 'Four-dimensional CT with contrast timing to localize parathyroid adenomas' },
      ],
      clinicalNotes: 'Minimally invasive parathyroidectomy with intraoperative PTH monitoring has a cure rate >97% for single adenomas.',
    },
    5: {
      level: 5,
      summary: 'Expert PTH management includes MEN syndrome evaluation, targeted molecular diagnostics, novel imaging modalities, and emerging therapies for hypoparathyroidism.',
      explanation: '## Expert PTH Management\n\n### Genetic Syndromes\n- **MEN1** (menin): Parathyroid hyperplasia + pituitary + pancreatic NET\n- **MEN2A** (RET): HPT + medullary thyroid cancer + pheochromocytoma\n- **CDC73**: Parathyroid carcinoma risk; jaw tumor-HPT syndrome\n\n### Parathyroid Carcinoma\nSuspect if Ca >14, PTH >5x ULN, palpable mass. En bloc resection is definitive.\n\n### Hypoparathyroidism Therapeutics\nTransCon PTH (palopegteriparatide): sustained-release PTH prodrug. Monitor serum calcium, 24h urine calcium, renal imaging.',
      keyTerms: [
        { term: 'MEN1', definition: 'Multiple endocrine neoplasia type 1; menin gene mutation' },
        { term: 'palopegteriparatide', definition: 'TransCon PTH; sustained-release PTH prodrug for hypoparathyroidism' },
      ],
      clinicalNotes: 'All patients with primary HPT diagnosed before age 40 should be screened for MEN1 with menin gene testing.',
    },
  },

  media: [], citations: [], crossReferences: [],
  tags: { systems: ['endocrine', 'musculoskeletal'], topics: ['bone metabolism', 'parathyroid'], clinicalRelevance: 'high' },
  createdAt: '2025-01-15', updatedAt: '2025-01-15', version: 1, status: 'published',
};

// =============================================================================
// BONE METABOLISM PANEL
// =============================================================================

export const BONE_METABOLISM_PANEL: LabPanel = {
  id: 'panel-bone-metabolism',
  name: 'Bone Metabolism Panel',
  nameEs: 'Paneles de Metabolismo Oseo',
  abbreviation: 'Bone Panel',
  description: 'Evaluation of calcium-phosphorus homeostasis, parathyroid function, vitamin D status, and bone turnover markers for metabolic bone disease workup.',
  includedTests: ['lab-calcium-bone', 'lab-phosphorus-bone', 'lab-pth', 'lab-vitamin-d-25oh', 'lab-alp-bone', 'lab-osteocalcin'],
  commonIndications: [
    'Osteoporosis evaluation', 'Hypercalcemia or hypocalcemia workup',
    'CKD mineral and bone disorder', 'Parathyroid disorder assessment',
    'Fracture risk evaluation', 'Vitamin D deficiency screening',
  ],
  interpretationGuidance: [
    { level: 1, content: 'This panel checks how well your bones are being maintained by measuring calcium, phosphorus, and the hormones that control them.' },
    { level: 3, content: 'Interpret calcium and phosphorus together with PTH and vitamin D. PTH-calcium discordance narrows the differential. ALP and osteocalcin reflect bone turnover rate.' },
    { level: 5, content: 'Integrate with DEXA results, FRAX score, and bone turnover markers (CTX, P1NP). In CKD, follow KDIGO guidelines for PTH targets relative to assay upper limit. Consider FGF23 in early CKD-MBD.' },
  ],
  patterns: [
    {
      patternName: 'Primary Hyperparathyroidism',
      description: 'Autonomous PTH secretion causing calcium elevation with phosphorus suppression.',
      labFindings: [
        { labId: 'lab-calcium-bone', labName: 'Calcium', expectedDirection: 'high' },
        { labId: 'lab-phosphorus-bone', labName: 'Phosphorus', expectedDirection: 'low' },
        { labId: 'lab-pth', labName: 'PTH', expectedDirection: 'high' },
        { labId: 'lab-alp-bone', labName: 'Alkaline Phosphatase', expectedDirection: 'high' },
      ],
      suggestsDiagnosis: ['Parathyroid adenoma', 'Parathyroid hyperplasia'],
      clinicalContext: 'Most common cause of outpatient hypercalcemia. Postmenopausal women most affected.',
    },
    {
      patternName: 'Vitamin D Deficiency with Secondary HPT',
      description: 'Low vitamin D leads to decreased calcium absorption, triggering compensatory PTH elevation.',
      labFindings: [
        { labId: 'lab-calcium-bone', labName: 'Calcium', expectedDirection: 'low' },
        { labId: 'lab-phosphorus-bone', labName: 'Phosphorus', expectedDirection: 'low' },
        { labId: 'lab-pth', labName: 'PTH', expectedDirection: 'high' },
      ],
      suggestsDiagnosis: ['Vitamin D deficiency', 'Osteomalacia', 'Nutritional rickets'],
      clinicalContext: 'Both calcium and phosphorus low (vitamin D needed for absorption of both). Extremely common worldwide.',
    },
    {
      patternName: 'Hypoparathyroidism',
      description: 'Absent PTH causing hypocalcemia and hyperphosphatemia.',
      labFindings: [
        { labId: 'lab-calcium-bone', labName: 'Calcium', expectedDirection: 'low' },
        { labId: 'lab-phosphorus-bone', labName: 'Phosphorus', expectedDirection: 'high' },
        { labId: 'lab-pth', labName: 'PTH', expectedDirection: 'low' },
      ],
      suggestsDiagnosis: ['Post-surgical hypoparathyroidism', 'Autoimmune hypoparathyroidism'],
      clinicalContext: 'Low PTH with low calcium. Phosphorus high because PTH normally promotes its excretion.',
    },
  ],
};
