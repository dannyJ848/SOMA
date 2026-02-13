/**
 * Bone Metabolism - Laboratory Interpretation Content (EducationalContent format)
 *
 * Educational content for bone metabolism lab interpretation:
 * - Calcium (Total & Ionized)
 * - Phosphorus
 * - Alkaline Phosphatase (Bone-Specific)
 * - Parathyroid Hormone (PTH)
 * - Vitamin D (25-OH)
 * - Osteocalcin
 * - CTX / NTX (Bone Resorption Markers)
 *
 * Spanish translations (nameEs) included per SOMA convention.
 */

import { EducationalContent } from '../types';

// =============================================================================
// CALCIUM (TOTAL)
// =============================================================================

const calciumTotal: EducationalContent = {
  id: 'bone-calcium-total',
  type: 'concept',
  name: 'Calcium (Total)',
  alternateNames: ['Serum Calcium', 'Ca Total', 'Calcio Total'],

  levels: {
    1: {
      level: 1,
      summary: 'Calcium is a mineral that keeps your bones strong and helps your muscles and nerves work.',
      explanation: 'About 99% of your calcium lives in bones and teeth. The tiny amount in blood is vital for heartbeat, muscle movement, and nerve signals. A simple blood test checks whether you have too much or too little.',
      keyTerms: [
        { term: 'calcium (calcio)', definition: 'A mineral that strengthens bones and helps muscles contract' },
      ],
      analogies: ['Calcium is like cement in a building — bones crumble without enough of it.'],
      patientCounselingPoints: ['Dairy, leafy greens, and fortified foods are good sources.', 'Vitamin D helps your body absorb calcium.'],
    },
    2: {
      level: 2,
      summary: 'Total serum calcium (normal 8.5–10.5 mg/dL) includes albumin-bound, complexed, and free ionized fractions. Abnormalities point to bone, kidney, or parathyroid disorders.',
      explanation: 'Calcium circulates as 45% albumin-bound, 10% complexed with anions, and 45% free ionized (active). Correct for albumin: add 0.8 mg/dL for every 1 g/dL albumin below 4.0.\n\n**High calcium**: parathyroid overactivity or cancer. Symptoms include fatigue, confusion, kidney stones.\n**Low calcium**: vitamin D deficiency, kidney disease, or parathyroid removal. Symptoms include tingling and muscle spasms.',
      keyTerms: [
        { term: 'hypercalcemia (hipercalcemia)', definition: 'Abnormally high blood calcium', pronunciation: 'HY-per-kal-SEE-mee-ah' },
        { term: 'hypocalcemia (hipocalcemia)', definition: 'Abnormally low blood calcium', pronunciation: 'HY-po-kal-SEE-mee-ah' },
        { term: 'corrected calcium (calcio corregido)', definition: 'Calcium adjusted for albumin level' },
      ],
      clinicalNotes: 'Corrected Ca = measured Ca + 0.8 × (4.0 − albumin). Ionized calcium preferred in critically ill patients.',
    },
    3: {
      level: 3,
      summary: 'Calcium homeostasis is regulated by PTH, vitamin D, and calcitonin acting on bone, kidney, and intestine.',
      explanation: '## Regulation\n1. **PTH** raises calcium via bone resorption, renal reabsorption, and calcitriol synthesis.\n2. **Calcitriol (1,25-(OH)₂D)** increases intestinal absorption.\n3. **Calcitonin** inhibits osteoclasts (minor clinical role).\n\n### Hypercalcemia\n- PTH-dependent (elevated PTH): primary hyperparathyroidism, FHH, lithium\n- PTH-independent (suppressed PTH): malignancy (PTHrP), vitamin D excess, granulomatous disease\n\n### Hypocalcemia\n- Low PTH: post-surgical, autoimmune, DiGeorge\n- High PTH: vitamin D deficiency, CKD, pseudohypoparathyroidism',
      keyTerms: [
        { term: 'osteoclast (osteoclasto)', definition: 'Cell that resorbs bone, releasing calcium', pronunciation: 'OS-tee-oh-klast' },
        { term: 'calcitriol (calcitriol)', definition: 'Active vitamin D, 1,25-dihydroxyvitamin D', pronunciation: 'kal-SIH-tree-ol' },
      ],
      examples: ['A 60-year-old with Ca 12.5 and fatigue: check PTH first to distinguish hyperparathyroidism from malignancy.'],
    },
    4: {
      level: 4,
      summary: 'Integrated PTH–vitamin D–FGF23 axes maintain calcium via CaSR signaling, RANKL-mediated resorption, and renal TRPV5 channels.',
      explanation: '## CaSR & PTH Axis\nCaSR on parathyroid chief cells detects ionized calcium. Hypocalcemia triggers PTH, activating osteoclastic resorption (RANKL), renal Ca reabsorption (TRPV5), and 1-alpha hydroxylase (CYP27B1).\n\n## FGF23 Integration\nOsteocyte-derived FGF23 inhibits 1-alpha hydroxylase and promotes phosphaturia; elevated early in CKD.\n\n## Decision Algorithm\n1. Confirm with ionized Ca or albumin correction\n2. PTH elevated → 24h urine Ca (PHPT vs FHH; Ca/Cr clearance ratio <0.01 = FHH)\n3. PTH suppressed → PTHrP, vitamin D metabolites, protein electrophoresis',
      keyTerms: [
        { term: 'CaSR', definition: 'Calcium-sensing receptor regulating PTH secretion' },
        { term: 'RANKL', definition: 'Receptor activator of NF-κB ligand; drives osteoclast differentiation' },
        { term: 'FGF23', definition: 'Fibroblast growth factor 23; phosphaturic hormone from osteocytes' },
      ],
      clinicalNotes: 'In CKD-MBD, target Ca × P product <55 mg²/dL² to reduce vascular calcification.',
    },
    5: {
      level: 5,
      summary: 'Expert evaluation integrates CaSR gain/loss-of-function genetics, RANKL/OPG balance, Wnt–sclerostin pathway, and targeted therapeutics.',
      explanation: '## Molecular Targets\n- **CaSR**: Gain-of-function = autosomal dominant hypocalcemia; loss-of-function = FHH. Cinacalcet is an allosteric activator.\n- **RANKL/OPG**: Denosumab mimics OPG. Rebound hypercalcemia and vertebral fractures on discontinuation.\n- **Wnt/Sclerostin**: Romosozumab (anti-sclerostin) is the newest anabolic agent; contraindicated within 1 year of CV event.\n\n### Current Evidence\n- Sequential therapy: anabolic first then antiresorptive maximises BMD gains\n- VITAL trial showed no fracture reduction with vitamin D supplementation in replete adults\n- TransCon PTH (palopegteriparatide) approved for chronic hypoparathyroidism',
      keyTerms: [
        { term: 'romosozumab', definition: 'Anti-sclerostin mAb; anabolic bone agent', pronunciation: 'roh-MOH-soh-zoo-mab' },
        { term: 'denosumab (denosumab)', definition: 'Anti-RANKL mAb; potent antiresorptive', pronunciation: 'den-OH-soo-mab' },
      ],
      clinicalNotes: 'Bisphosphonate holiday after 5 yr oral / 3 yr IV zoledronic acid for low-risk patients. Reassess with FRAX and bone turnover markers.',
    },
  },

  media: [],
  citations: [{ id: 'bone-ca-ref1', type: 'textbook', title: 'Williams Textbook of Endocrinology', source: 'Elsevier, 14th Ed', chapter: 'Calcium and Bone Metabolism' }],
  crossReferences: [{ targetId: 'bone-pth', targetType: 'concept', relationship: 'related', label: 'PTH' }],
  tags: { systems: ['musculoskeletal', 'endocrine'], topics: ['bone metabolism', 'calcium'], clinicalRelevance: 'high' },
  createdAt: '2025-01-15', updatedAt: '2025-01-15', version: 1, status: 'published',
};

// =============================================================================
// CALCIUM (IONIZED)
// =============================================================================

const calciumIonized: EducationalContent = {
  id: 'bone-calcium-ionized',
  type: 'concept',
  name: 'Calcium (Ionized)',
  alternateNames: ['Free Calcium', 'iCa', 'Calcio Ionizado'],

  levels: {
    1: { level: 1, summary: 'Ionized calcium is the active form of calcium in your blood that your body actually uses.', explanation: 'Only about half the calcium in your blood is "free" and able to work. This test measures that active portion directly, making it more accurate than total calcium when protein levels are abnormal.', keyTerms: [{ term: 'ionized calcium (calcio ionizado)', definition: 'The free, usable form of calcium in blood' }], patientCounselingPoints: ['This test is often done in the hospital when a more precise reading is needed.'] },
    2: { level: 2, summary: 'Ionized calcium (normal 4.6–5.3 mg/dL or 1.15–1.33 mmol/L) is the physiologically active fraction unaffected by albumin changes.', explanation: 'Unlike total calcium, ionized calcium is not influenced by albumin. Preferred in ICU patients, liver disease, and during massive transfusion (citrate binds Ca²⁺). pH affects binding: alkalosis lowers ionized Ca; acidosis raises it.', keyTerms: [{ term: 'ionized calcium', definition: 'Unbound calcium; the fraction responsible for physiologic effects' }], clinicalNotes: 'Arterial or venous sample on ice; analyze within 30 min. Tourniquet time and air exposure affect results.' },
    3: { level: 3, summary: 'Ionized calcium reflects true calcium status independent of protein binding. It is the gold standard in critical care, post-transfusion, and acid-base disturbances.', explanation: '## When to Order Ionized Ca\n- Hypoalbuminemia (cirrhosis, nephrotic syndrome)\n- Critical illness, cardiopulmonary bypass\n- Massive transfusion (citrate chelation)\n- Acid-base disturbance (pH-dependent binding)\n\nAcidosis shifts albumin-bound Ca → ionized; alkalosis does the reverse. Hyperventilation-induced tetany is mediated by acute respiratory alkalosis lowering ionized Ca.', keyTerms: [{ term: 'citrate chelation', definition: 'Citrate in banked blood binds calcium, lowering ionized levels' }] },
    4: { level: 4, summary: 'Ionized calcium is sensed by CaSR and is the regulated variable in calcium homeostasis. Point-of-care analyzers measure activity, not concentration.', explanation: 'CaSR on parathyroid chief cells responds to ionized Ca²⁺, not total. Point-of-care ion-selective electrodes measure Ca²⁺ activity at pH 7.4 (normalized). In DKA correction, rising pH lowers ionized Ca — monitor closely during insulin/bicarb therapy.', keyTerms: [{ term: 'ion-selective electrode', definition: 'Sensor in blood gas analyzers that directly measures ionized calcium activity' }], clinicalNotes: 'During massive transfusion protocol, give 1 g IV calcium gluconate per 4 units PRBCs to prevent citrate-induced hypocalcemia.' },
    5: { level: 5, summary: 'Expert use of ionized calcium integrates point-of-care analytics, citrate anticoagulation in CRRT, and CaSR pharmacology.', explanation: 'In regional citrate anticoagulation for CRRT, ionized Ca is monitored in circuit (target <0.4 mmol/L) and systemically (target 1.0–1.2 mmol/L). Citrate accumulation (rising total:ionized Ca ratio >2.5) signals impaired hepatic metabolism. Calcimimetics (cinacalcet, etelcalcetide) target CaSR to lower PTH in secondary HPT on dialysis.', keyTerms: [{ term: 'citrate lock', definition: 'Regional anticoagulation technique using citrate chelation of calcium in extracorporeal circuits' }], clinicalNotes: 'Total-to-ionized calcium ratio >2.5 suggests citrate accumulation; switch to heparin anticoagulation.' },
  },

  media: [], citations: [], crossReferences: [{ targetId: 'bone-calcium-total', targetType: 'concept', relationship: 'sibling', label: 'Total Calcium' }],
  tags: { systems: ['musculoskeletal', 'endocrine'], topics: ['bone metabolism', 'calcium', 'critical care'], clinicalRelevance: 'high' },
  createdAt: '2025-01-15', updatedAt: '2025-01-15', version: 1, status: 'published',
};

// =============================================================================
// PHOSPHORUS
// =============================================================================

const phosphorus: EducationalContent = {
  id: 'bone-phosphorus',
  type: 'concept',
  name: 'Phosphorus (Inorganic Phosphate)',
  alternateNames: ['Phosphate', 'PO4', 'Fósforo'],

  levels: {
    1: { level: 1, summary: 'Phosphorus works with calcium to build strong bones and helps your cells make energy.', explanation: '85% of phosphorus is in bones. The rest helps cells produce energy (ATP) and is part of DNA. Your kidneys control blood levels. Too much or too little can weaken muscles.', keyTerms: [{ term: 'phosphorus (fósforo)', definition: 'A mineral that strengthens bones and fuels cells' }], patientCounselingPoints: ['Found in dairy, meat, beans, and nuts.', 'Kidney disease can cause phosphorus to build up.'] },
    2: { level: 2, summary: 'Phosphorus (normal 2.5–4.5 mg/dL) has an inverse relationship with calcium. PTH lowers phosphorus by promoting renal excretion.', explanation: '**High**: CKD (most common), tumor lysis, rhabdomyolysis. Drives calcium down.\n**Low**: Refeeding syndrome, vitamin D deficiency, hyperparathyroidism. Severe deficiency (<1.0) causes respiratory failure and hemolysis.', keyTerms: [{ term: 'hyperphosphatemia (hiperfosfatemia)', definition: 'High blood phosphorus' }, { term: 'hypophosphatemia (hipofosfatemia)', definition: 'Low blood phosphorus' }] },
    3: { level: 3, summary: 'Phosphorus homeostasis is regulated by PTH, FGF23, and vitamin D. Disorders classified by redistribution, absorption, or renal handling.', explanation: '## Regulation\n1. **PTH**: Promotes renal phosphorus excretion\n2. **FGF23**: Phosphaturia + inhibits 1-alpha hydroxylase\n3. **Calcitriol**: Increases intestinal absorption\n\n### Key Scenarios\n- **CKD**: Phosphorus retention → FGF23/PTH elevation\n- **Refeeding**: Insulin drives PO₄ intracellularly; can be fatal\n- **Oncogenic osteomalacia**: FGF23-secreting tumor causes phosphate wasting', keyTerms: [{ term: 'FGF23', definition: 'Phosphaturic hormone from osteocytes' }, { term: 'refeeding syndrome (síndrome de realimentación)', definition: 'Dangerous electrolyte shifts when malnourished patients resume eating' }] },
    4: { level: 4, summary: 'NaPi-IIa/IIc transporter regulation, FGF23–Klotho signaling, and CKD-MBD cascade govern phosphorus metabolism.', explanation: '### Renal Handling\nNaPi-IIa/IIc in proximal tubule mediate 80% reabsorption. PTH and FGF23 promote their endocytic removal.\n\n### FGF23–Klotho\nFGF23 requires alpha-Klotho co-receptor. Klotho decline precedes phosphorus retention in CKD.\n\n### Therapeutics\n- XLH: burosumab (anti-FGF23)\n- CKD: sevelamer, lanthanum, sucroferric oxyhydroxide, tenapanor', keyTerms: [{ term: 'Klotho', definition: 'Co-receptor for FGF23 signaling' }, { term: 'burosumab', definition: 'Anti-FGF23 antibody for X-linked hypophosphatemia' }], clinicalNotes: 'KDIGO: target phosphorus toward normal in CKD G3a–G5D; avoid calcium-based binders with vascular calcification.' },
    5: { level: 5, summary: 'Expert management integrates Pit-1–mediated vascular calcification, KDIGO CKD-MBD guidelines, and emerging phosphate-lowering agents.', explanation: 'Hyperphosphatemia promotes VSMC osteoblastic transformation via Pit-1, activating Runx2 and hydroxyapatite deposition. Serial FGF23 is the earliest CKD-MBD marker. Tenapanor (NHE3 inhibitor) reduces paracellular phosphate absorption; iron-based binders offer dual benefit in iron-deficient CKD.', keyTerms: [{ term: 'Runx2', definition: 'Transcription factor driving vascular smooth muscle osteoblastic transformation' }, { term: 'tenapanor', definition: 'NHE3 inhibitor reducing paracellular phosphate absorption' }], clinicalNotes: 'Phosphorus is an independent cardiovascular mortality risk factor even within the normal range.' },
  },

  media: [], citations: [], crossReferences: [],
  tags: { systems: ['musculoskeletal', 'renal'], topics: ['bone metabolism', 'electrolytes'], clinicalRelevance: 'high' },
  createdAt: '2025-01-15', updatedAt: '2025-01-15', version: 1, status: 'published',
};

// =============================================================================
// ALKALINE PHOSPHATASE (BONE-SPECIFIC)
// =============================================================================

const alpBoneSpecific: EducationalContent = {
  id: 'bone-alp',
  type: 'concept',
  name: 'Alkaline Phosphatase (Bone-Specific)',
  alternateNames: ['Bone ALP', 'BALP', 'Fosfatasa Alcalina Ósea'],

  levels: {
    1: { level: 1, summary: 'Bone ALP is an enzyme that shows how actively your body is building new bone.', explanation: 'When bones are forming or healing, cells called osteoblasts release this enzyme. High levels can mean bones are repairing, growing (normal in kids), or affected by disease like Paget disease.', keyTerms: [{ term: 'alkaline phosphatase (fosfatasa alcalina)', definition: 'An enzyme released when bones are being built' }], patientCounselingPoints: ['A high level does not always mean something is wrong — children naturally have higher levels.'] },
    2: { level: 2, summary: 'Bone-specific ALP (normal 6–30 U/L) reflects osteoblast activity. It differentiates bone from liver sources of total ALP elevation.', explanation: 'Total ALP has bone and liver isoforms. Bone ALP rises in fracture healing, Paget disease, osteomalacia, and bone metastases. If total ALP is elevated, GGT helps: normal GGT suggests bone origin.\n\n**Normal ranges vary by age**: children/adolescents have 2–3× adult values during growth spurts.', keyTerms: [{ term: 'osteoblast (osteoblasto)', definition: 'Bone-building cell that produces ALP' }, { term: 'Paget disease (enfermedad de Paget)', definition: 'Disorder of excessive, disorganized bone remodeling' }], clinicalNotes: 'GGT normal + high ALP = bone source. GGT elevated + high ALP = liver source.' },
    3: { level: 3, summary: 'Bone-specific ALP is a formation marker used alongside resorption markers (CTX) to assess bone turnover rate and treatment response.', explanation: '## Clinical Use\n- **Paget disease**: ALP markedly elevated (10–20× normal); monitors treatment\n- **Osteomalacia**: Elevated ALP + low calcium/phosphorus/vitamin D\n- **Bone metastases**: Osteoblastic mets (prostate) raise ALP; osteolytic (myeloma) may not\n- **CKD-MBD**: Reflects bone turnover; very low = adynamic bone disease\n\nBone ALP is measured by immunoassay; heat inactivation is an older method (bone ALP is heat-labile).', keyTerms: [{ term: 'adynamic bone disease', definition: 'Low-turnover bone state in CKD from excessive PTH suppression' }, { term: 'formation marker', definition: 'Biomarker reflecting osteoblast activity and new bone formation' }] },
    4: { level: 4, summary: 'BALP is a GPI-anchored ectoenzyme on osteoblasts catalyzing pyrophosphate hydrolysis; its kinetics inform CKD-MBD and antiresorptive monitoring.', explanation: 'BALP hydrolyzes inorganic pyrophosphate (PPi), removing a mineralization inhibitor. In hypophosphatasia (ALPL mutations), PPi accumulates causing osteomalacia.\n\n### Monitoring\n- Antiresorptive therapy: BALP decreases 30–50% within 3–6 months (expected)\n- Anabolic therapy (teriparatide): BALP rises early, peaks at 6–9 months\n- CKD: BALP >20 suggests high-turnover bone disease; <10 suggests adynamic', keyTerms: [{ term: 'hypophosphatasia (hipofosfatasia)', definition: 'Genetic deficiency of ALPL causing defective bone mineralization' }, { term: 'asfotase alfa', definition: 'Enzyme replacement for hypophosphatasia' }], clinicalNotes: 'BALP is preferred over total ALP for bone turnover monitoring in patients with liver disease.' },
    5: { level: 5, summary: 'Expert use of BALP integrates ALPL genetics, enzyme replacement, and multi-marker bone turnover assessment with P1NP for treatment algorithms.', explanation: 'IOF/IFCC recommend P1NP (formation) and CTX (resorption) as reference bone turnover markers. BALP remains essential when P1NP is unavailable or in CKD (P1NP less validated). In perinatal hypophosphatasia, asfotase alfa is life-saving. Monitor substrate (PLP, PEA, PPi) to titrate dosing.', keyTerms: [{ term: 'P1NP', definition: 'Procollagen type I N-terminal propeptide; reference formation marker' }], clinicalNotes: 'IOF fracture prevention: monitor P1NP or BALP at baseline and 3–6 months to verify antiresorptive response.' },
  },

  media: [], citations: [], crossReferences: [],
  tags: { systems: ['musculoskeletal'], topics: ['bone metabolism', 'bone turnover'], clinicalRelevance: 'high' },
  createdAt: '2025-01-15', updatedAt: '2025-01-15', version: 1, status: 'published',
};

// =============================================================================
// PARATHYROID HORMONE (PTH)
// =============================================================================

const pth: EducationalContent = {
  id: 'bone-pth',
  type: 'concept',
  name: 'Parathyroid Hormone (PTH)',
  alternateNames: ['Intact PTH', 'iPTH', 'Hormona Paratiroidea'],

  levels: {
    1: { level: 1, summary: 'PTH is a hormone from tiny glands in your neck that controls calcium in your blood.', explanation: 'When calcium drops, four small glands behind your thyroid release PTH. It tells bones to release calcium, kidneys to keep it, and your gut to absorb more. Think of PTH as a thermostat for calcium.', keyTerms: [{ term: 'PTH (hormona paratiroidea)', definition: 'Hormone that raises blood calcium' }], patientCounselingPoints: ['Your doctor orders this when calcium is abnormal.', 'Overactive or underactive glands both cause problems.'] },
    2: { level: 2, summary: 'PTH (normal 15–65 pg/mL) must always be interpreted alongside calcium to distinguish primary from secondary hyperparathyroidism.', explanation: '**PTH + Calcium patterns:**\n- High PTH + High Ca = Primary hyperparathyroidism\n- High PTH + Low Ca = Secondary (appropriate response to low D or CKD)\n- Low PTH + Low Ca = Hypoparathyroidism\n- Low PTH + High Ca = Non-PTH cause (malignancy, vitamin D excess)', keyTerms: [{ term: 'hyperparathyroidism (hiperparatiroidismo)', definition: 'Excessive PTH production', pronunciation: 'HY-per-PAR-ah-THY-royd-izm' }] },
    3: { level: 3, summary: 'Systematic PTH interpretation correlates with calcium, phosphorus, and vitamin D to classify primary, secondary, and tertiary hyperparathyroidism.', explanation: '## Assays\n- **Intact PTH (1-84)**: Standard; also detects 7-84 fragment\n- **Bio-intact PTH**: Only 1-84; useful in CKD\n\n### Primary HPT\n85% adenoma. Surgery criteria: age <50, Ca >1.0 above ULN, T-score ≤−2.5, eGFR <60, nephrolithiasis.\n\n### Secondary HPT\nKDIGO: PTH 2–9× ULN in CKD G5D. Treat with calcitriol/calcimimetics.', keyTerms: [{ term: 'sestamibi scan (gammagrafía con sestamibi)', definition: 'Nuclear imaging to localize parathyroid adenomas' }] },
    4: { level: 4, summary: 'CaSR-mediated PTH secretion, PTHR1 signaling, and surgical algorithms form the advanced PTH management framework.', explanation: '### Secretion\nCaSR activates Gq/PLC → suppresses PTH. VDR directly represses PTH gene.\n\n### PTHR1\nClass B GPCR; Gs (cAMP) + Gq (PLC). Intermittent activation = anabolic; continuous = catabolic.\n\n### Surgical Localization\n- Sestamibi-SPECT/CT: 70–90% sensitivity\n- 4D-CT for multigland disease\n- Intraoperative PTH: >50% drop at 10 min = cure', keyTerms: [{ term: 'PTHR1', definition: 'PTH receptor type 1; class B GPCR' }], clinicalNotes: 'Minimally invasive parathyroidectomy cure rate >97% for single adenomas.' },
    5: { level: 5, summary: 'Expert PTH management includes MEN syndromes, CDC73-related carcinoma, and novel hypoparathyroidism therapeutics.', explanation: '### Genetic Syndromes\n- **MEN1** (menin): Parathyroid hyperplasia + pituitary + pancreatic NET\n- **MEN2A** (RET): HPT + MTC + pheo\n- **CDC73**: Parathyroid carcinoma; jaw tumor–HPT syndrome\n\n### Hypoparathyroidism\nPalopegteriparatide (TransCon PTH): sustained-release prodrug. Monitor serum Ca, 24h urine Ca, renal imaging. Screen all primary HPT <40 y/o for MEN1.', keyTerms: [{ term: 'palopegteriparatide', definition: 'TransCon PTH prodrug for chronic hypoparathyroidism' }], clinicalNotes: 'All primary HPT diagnosed before age 40: screen for MEN1 with menin gene testing.' },
  },

  media: [], citations: [], crossReferences: [{ targetId: 'bone-calcium-total', targetType: 'concept', relationship: 'related', label: 'Calcium (Total)' }],
  tags: { systems: ['endocrine', 'musculoskeletal'], topics: ['bone metabolism', 'parathyroid'], clinicalRelevance: 'high' },
  createdAt: '2025-01-15', updatedAt: '2025-01-15', version: 1, status: 'published',
};

// =============================================================================
// VITAMIN D (25-OH)
// =============================================================================

const vitaminD25OH: EducationalContent = {
  id: 'bone-vitamin-d-25oh',
  type: 'concept',
  name: 'Vitamin D (25-Hydroxyvitamin D)',
  alternateNames: ['25-OH Vitamin D', 'Calcidiol', 'Vitamina D'],

  levels: {
    1: { level: 1, summary: 'Vitamin D helps your body absorb calcium and keeps bones strong. Most people get it from sunlight and some foods.', explanation: 'Your skin makes vitamin D from sunlight. The liver converts it to 25-OH vitamin D, which is what the blood test measures. Low levels are very common and can weaken bones over time.', keyTerms: [{ term: 'vitamin D (vitamina D)', definition: 'A vitamin that helps your body absorb calcium' }], patientCounselingPoints: ['Sunlight, fortified milk, fatty fish, and supplements are sources.', 'Many people need a supplement, especially in winter.'] },
    2: { level: 2, summary: '25-OH vitamin D is the best measure of vitamin D status. Deficiency (<20 ng/mL) is extremely common and causes secondary hyperparathyroidism and bone loss.', explanation: '**Levels:**\n- Deficient: <20 ng/mL\n- Insufficient: 20–29 ng/mL\n- Sufficient: 30–100 ng/mL\n- Toxic: >150 ng/mL\n\nDeficiency causes osteomalacia (adults) and rickets (children). Risk factors: dark skin, obesity, malabsorption, limited sun exposure, elderly.', keyTerms: [{ term: 'osteomalacia (osteomalacia)', definition: 'Softening of adult bones from vitamin D deficiency' }, { term: 'rickets (raquitismo)', definition: 'Bone deformity in children from vitamin D deficiency' }] },
    3: { level: 3, summary: '25-OH D reflects total body stores (t½ ~3 weeks). The kidney converts it to active 1,25-(OH)₂D via 1-alpha hydroxylase, regulated by PTH and FGF23.', explanation: '## Metabolism\n- Skin/diet → liver 25-hydroxylase → **25-OH D** (measured)\n- Kidney 1-alpha hydroxylase (CYP27B1) → **1,25-(OH)₂D** (active)\n\n### When to Check 1,25-OH₂D\n- Granulomatous disease (sarcoid, TB): extra-renal CYP27B1\n- CKD: impaired conversion despite adequate 25-OH D\n- Suspected hereditary vitamin D–resistant rickets\n\n### Treatment\nD₂ (ergocalciferol) or D₃ (cholecalciferol); D₃ preferred for potency. Recheck at 8–12 weeks.', keyTerms: [{ term: '1-alpha hydroxylase (CYP27B1)', definition: 'Renal enzyme converting 25-OH D to active calcitriol' }] },
    4: { level: 4, summary: 'VDR signaling has pleiotropic effects beyond calcium. CYP24A1 inactivation, extra-renal hydroxylation, and pharmacogenomics refine clinical management.', explanation: '### VDR Signaling\nVDR is a nuclear receptor expressed in >30 tissues. Ligand-bound VDR/RXR heterodimer modulates >200 genes including CYP24A1 (catabolic), TRPV6 (intestinal Ca transport), and cathelicidin (innate immunity).\n\n### CYP24A1 Mutations\nBiallelic loss-of-function → infantile hypercalcemia; impaired calcitriol degradation.\n\n### Pharmacology\n- Cholecalciferol 50,000 IU weekly × 8 weeks for deficiency\n- Calcitriol (0.25–0.5 μg/d) in CKD or hypoparathyroidism\n- DBP polymorphisms (GC gene) affect 25-OH D measurement and bioavailability', keyTerms: [{ term: 'CYP24A1', definition: '24-hydroxylase; inactivates calcitriol; mutations cause hypercalcemia' }, { term: 'DBP', definition: 'Vitamin D–binding protein; GC gene polymorphisms affect bioavailability' }], clinicalNotes: 'Free 25-OH D (not DBP-bound) may better predict outcomes in CKD and pregnancy.' },
    5: { level: 5, summary: 'Expert vitamin D management integrates pharmacogenomics, extra-renal autocrine signaling, and evidence-based screening guidelines.', explanation: 'USPSTF finds insufficient evidence for universal screening in asymptomatic adults. Endocrine Society recommends screening at-risk groups. Extra-renal CYP27B1 in macrophages/placenta produces local calcitriol for immune modulation — rationale for vitamin D in autoimmunity trials (VITAL, D-Health) which showed no benefit for cancer/CVD prevention. LC-MS/MS is the gold standard assay; immunoassays may under-measure D₂.', keyTerms: [{ term: 'LC-MS/MS', definition: 'Liquid chromatography–tandem mass spectrometry; reference method for 25-OH D' }], clinicalNotes: 'Vitamin D toxicity is rare but can cause severe hypercalcemia; always from supplements, never from sun exposure.' },
  },

  media: [], citations: [], crossReferences: [],
  tags: { systems: ['musculoskeletal', 'endocrine', 'immune'], topics: ['bone metabolism', 'vitamin D'], clinicalRelevance: 'high' },
  createdAt: '2025-01-15', updatedAt: '2025-01-15', version: 1, status: 'published',
};

// =============================================================================
// OSTEOCALCIN
// =============================================================================

const osteocalcin: EducationalContent = {
  id: 'bone-osteocalcin',
  type: 'concept',
  name: 'Osteocalcin',
  alternateNames: ['Bone Gla Protein', 'BGP', 'Osteocalcina'],

  levels: {
    1: { level: 1, summary: 'Osteocalcin is a protein made by bone-building cells that shows how fast new bone is being formed.', explanation: 'Osteoblasts release osteocalcin when they build bone. A blood test can measure it to see if your bones are actively remodeling. It may also play a role in blood sugar and energy.', keyTerms: [{ term: 'osteocalcin (osteocalcina)', definition: 'A protein from bone-building cells that indicates bone formation' }], patientCounselingPoints: ['This test helps your doctor understand how your bones are responding to treatment.'] },
    2: { level: 2, summary: 'Osteocalcin is a bone formation marker produced by osteoblasts. It is vitamin K–dependent and reflects bone turnover rate.', explanation: 'Normal range varies by age and sex. Elevated in high-turnover states: Paget disease, hyperparathyroidism, fracture healing. Low in low-turnover states: glucocorticoid therapy, hypothyroidism. Vitamin K is required for its carboxylation. Undercarboxylated osteocalcin has endocrine functions.', keyTerms: [{ term: 'bone turnover (recambio óseo)', definition: 'The continuous process of bone resorption and formation' }] },
    3: { level: 3, summary: 'Osteocalcin (BGLAP gene) is a gamma-carboxylated protein incorporated into bone matrix and released during both formation and resorption.', explanation: '## Biology\nOsteocalcin binds hydroxyapatite via gamma-carboxyglutamic acid residues (vitamin K–dependent). During resorption, matrix-embedded osteocalcin is released as undercarboxylated osteocalcin (ucOC).\n\n## Endocrine Role\nucOC promotes insulin secretion (beta cells) and testosterone production. Animal data are strong; human clinical significance is debated.\n\n## Limitations\nFragile analyte; requires careful specimen handling. Not an IOF reference marker (P1NP preferred for formation).', keyTerms: [{ term: 'undercarboxylated osteocalcin (ucOC)', definition: 'Form of osteocalcin with hormonal activity affecting glucose metabolism' }] },
    4: { level: 4, summary: 'BGLAP-encoded osteocalcin undergoes vitamin K–dependent carboxylation; its ucOC form represents an osteoblast–beta cell–Leydig cell endocrine axis.', explanation: 'Osteocalcin is carboxylated by GGCX (gamma-glutamyl carboxylase) using vitamin K as cofactor. VKORC1 recycling explains why warfarin increases ucOC and may affect glucose metabolism. Osteoclastic resorption at pH 4.5 decarboxylates matrix osteocalcin → ucOC enters circulation.\n\nAssay variability (intact vs N-mid fragment) limits clinical adoption compared to P1NP.', keyTerms: [{ term: 'GGCX', definition: 'Gamma-glutamyl carboxylase; vitamin K–dependent enzyme modifying osteocalcin' }], clinicalNotes: 'Warfarin therapy increases ucOC; theoretical link to metabolic effects, not yet clinically actionable.' },
    5: { level: 5, summary: 'Expert assessment of osteocalcin encompasses the bone–pancreas–testis axis, Esp/OST-PTP regulation, and limitations as a clinical biomarker.', explanation: 'Mouse BGLAP knockout shows glucose intolerance and male infertility, mediated by ucOC acting on GPRC6A receptor. Protein tyrosine phosphatase Esp (osteoblast) and OST-PTP (osteoclast pH-activated) regulate ucOC bioactivity. Human translation is incomplete; GPRC6A variants show inconsistent metabolic associations. Standardized osteocalcin assays remain unavailable; P1NP is preferred for clinical monitoring per IOF/IFCC.', keyTerms: [{ term: 'GPRC6A', definition: 'Receptor for undercarboxylated osteocalcin in beta cells and Leydig cells' }], clinicalNotes: 'Osteocalcin as an endocrine hormone is well-established in mice; clinical utility in humans requires standardized assays and prospective trials.' },
  },

  media: [], citations: [], crossReferences: [],
  tags: { systems: ['musculoskeletal', 'endocrine'], topics: ['bone metabolism', 'bone turnover'], clinicalRelevance: 'medium' },
  createdAt: '2025-01-15', updatedAt: '2025-01-15', version: 1, status: 'published',
};

// =============================================================================
// CTX / NTX (BONE RESORPTION MARKERS)
// =============================================================================

const ctxNtx: EducationalContent = {
  id: 'bone-ctx-ntx',
  type: 'concept',
  name: 'CTX / NTX (Bone Resorption Markers)',
  alternateNames: ['C-Telopeptide', 'N-Telopeptide', 'Beta-CrossLaps', 'Telopéptidos Óseos'],

  levels: {
    1: { level: 1, summary: 'CTX and NTX are blood or urine tests that show how fast your bones are being broken down.', explanation: 'When old bone is removed to make room for new bone, tiny fragments called telopeptides are released into your blood. Measuring them tells doctors if bone is being lost too quickly, such as in osteoporosis.', keyTerms: [{ term: 'CTX (telopéptido C-terminal)', definition: 'A fragment released when bone breaks down' }, { term: 'NTX (telopéptido N-terminal)', definition: 'Another bone breakdown fragment measured in blood or urine' }], patientCounselingPoints: ['This test is often done fasting in the morning for accuracy.', 'It helps your doctor know if osteoporosis treatment is working.'] },
    2: { level: 2, summary: 'CTX (serum, fasting) and NTX (urine or serum) are type I collagen degradation products reflecting osteoclast activity. CTX is the IOF reference resorption marker.', explanation: '**CTX (Beta-CrossLaps)**:\n- Serum, fasting AM draw\n- Normal varies by age/sex; postmenopausal women: higher baseline\n- Decreases 50–70% within 3 months of bisphosphonate therapy\n\n**NTX**:\n- Urine (corrected for creatinine) or serum\n- Less commonly used than CTX\n\nBoth elevated in: osteoporosis with high turnover, Paget disease, bone metastases, hyperparathyroidism.', keyTerms: [{ term: 'bone resorption (resorción ósea)', definition: 'The process of osteoclasts breaking down bone tissue' }, { term: 'type I collagen', definition: 'Main structural protein in bone; its fragments become CTX and NTX' }] },
    3: { level: 3, summary: 'CTX (beta-isomerized C-telopeptide of type I collagen) is the IOF/IFCC reference marker for bone resorption monitoring in osteoporosis treatment.', explanation: '## Pre-analytic Requirements\n- Fasting AM (nadir of diurnal variation)\n- Avoid exercise before draw\n- Serum; stable at room temperature for 8 hours\n\n## Clinical Applications\n- **Treatment monitoring**: >50% CTX decrease at 3 months confirms bisphosphonate response\n- **Drug holiday assessment**: Rising CTX suggests resumed resorption\n- **Fracture risk**: Elevated CTX associated with hip fracture risk independent of BMD\n\n## CTX in Dental\nCTX <150 pg/mL may increase osteonecrosis of jaw (ONJ) risk with invasive dental procedures in bisphosphonate-treated patients (controversial).', keyTerms: [{ term: 'beta-isomerization', definition: 'Age-related modification of collagen cross-links used to distinguish old bone resorption' }] },
    4: { level: 4, summary: 'CTX reflects cathepsin K–mediated type I collagen degradation. NTX is an alternative less affected by food but less standardized.', explanation: '### Biochemistry\nOsteoclasts secrete cathepsin K and H⁺ into resorption lacunae, degrading type I collagen. CTX contains isomerized Asp-Gly (beta-CTX); alpha-CTX reflects newly synthesized collagen degradation.\n\n### Monitoring Algorithm\nBaseline CTX → start antiresorptive → repeat at 3 months:\n- Decrease ≥50% or below premenopausal mean → adherent, responsive\n- <50% decrease → assess adherence, absorption (bisphosphonate must be taken correctly)\n\n### Least Significant Change\nCTX: ~30% (within-subject biological variation ~10–15% + analytical CV). Changes within this margin are not clinically meaningful.', keyTerms: [{ term: 'cathepsin K', definition: 'Cysteine protease secreted by osteoclasts; cleaves type I collagen' }, { term: 'least significant change', definition: 'Minimum change exceeding biological + analytical variability' }], clinicalNotes: 'Odanacatib (cathepsin K inhibitor) was effective but withdrawn due to cardiovascular risk. Denosumab suppresses CTX more profoundly than bisphosphonates.' },
    5: { level: 5, summary: 'Expert CTX/NTX use integrates IOF/IFCC reference marker guidelines, fracture liaison service protocols, and emerging resorption biomarkers.', explanation: 'IOF/IFCC position: serum CTX (resorption) and P1NP (formation) are the reference markers for clinical trials and practice. In fracture liaison services, CTX identifies high-turnover patients for early antiresorptive therapy. PINP/CTX ratio helps distinguish coupling state.\n\nEmerging markers: TRAP5b (osteoclast number, not collagen degradation); DPD (urine deoxypyridinoline, less used). In multiple myeloma, CTX may underestimate resorption due to MMP-mediated (not cathepsin K) collagen degradation.', keyTerms: [{ term: 'TRAP5b', definition: 'Tartrate-resistant acid phosphatase 5b; reflects osteoclast number' }, { term: 'fracture liaison service', definition: 'Secondary prevention program for fragility fracture patients' }], clinicalNotes: 'In myeloma, NTX or ICTP (MMP-generated fragment) may better reflect bone destruction than CTX.' },
  },

  media: [], citations: [], crossReferences: [{ targetId: 'bone-alp', targetType: 'concept', relationship: 'related', label: 'Bone ALP (Formation Marker)' }],
  tags: { systems: ['musculoskeletal'], topics: ['bone metabolism', 'bone turnover', 'osteoporosis'], clinicalRelevance: 'high' },
  createdAt: '2025-01-15', updatedAt: '2025-01-15', version: 1, status: 'published',
};

// =============================================================================
// EXPORT
// =============================================================================

export const boneMetabolismContent: Record<string, EducationalContent> = {
  'calcium-total': calciumTotal,
  'calcium-ionized': calciumIonized,
  'phosphorus': phosphorus,
  'alkaline-phosphatase-bone': alpBoneSpecific,
  'pth': pth,
  'vitamin-d-25oh': vitaminD25OH,
  'osteocalcin': osteocalcin,
  'ctx-ntx': ctxNtx,
};
