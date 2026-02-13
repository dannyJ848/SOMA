/**
 * Calcium and Phosphorus Disorders - Comprehensive Educational Content
 *
 * Covers hypercalcemia, hypocalcemia, hyperphosphatemia, hypophosphatemia,
 * with pathophysiology, diagnosis, and management.
 */

import { EducationalContent } from '../../types';

export const calciumPhosphorusDisorders: EducationalContent = {
  id: 'condition-calcium-phosphorus-disorders',
  type: 'condition',
  name: 'Calcium and Phosphorus Disorders',
  alternateNames: ['Calcium Disorders', 'Phosphorus Disorders', 'Mineral Metabolism Disorders'],

  levels: {
    1: {
      level: 1,
      summary: 'Calcium and phosphorus are minerals your body needs for strong bones, working muscles, and healthy nerves.',
      explanation: `Calcium and phosphorus are two very important minerals in your body. They work together like partners:

**Calcium's Jobs:**
- Makes your bones and teeth strong
- Helps your muscles move
- Helps your heart beat properly
- Helps your nerves send messages

**Phosphorus's Jobs:**
- Also makes bones strong (works with calcium)
- Helps your body make energy
- Helps repair cells and tissues

**What Keeps Them Balanced?**
Your body has a control system using three things:
1. **Parathyroid hormone (PTH)** - from tiny glands in your neck
2. **Vitamin D** - the "sunshine vitamin"
3. **Your kidneys** - they control how much leaves your body in urine

**Problems That Can Happen:**

*Too Much Calcium (Hypercalcemia):*
- You might feel very thirsty
- Have to urinate a lot
- Feel confused or tired
- Get constipated
- Can be caused by overactive parathyroid glands or some cancers

*Too Little Calcium (Hypocalcemia):*
- Muscle cramps or spasms
- Tingling in fingers and toes
- Can be caused by low vitamin D or parathyroid problems

*Too Much Phosphorus (Hyperphosphatemia):*
- Usually happens when kidneys don't work well
- Can make calcium levels drop
- Can cause itchy skin and bone problems

*Too Little Phosphorus (Hypophosphatemia):*
- Feeling very weak
- Can happen with poor nutrition or certain conditions`,
      keyTerms: [
        { term: 'calcium', definition: 'A mineral that makes bones strong and helps muscles work' },
        { term: 'phosphorus', definition: 'A mineral that works with calcium for bone health and energy' },
        { term: 'parathyroid glands', definition: 'Tiny glands in your neck that control calcium levels' },
        { term: 'vitamin D', definition: 'A vitamin that helps your body absorb calcium from food' },
      ],
      analogies: [
        'Calcium and phosphorus are like two construction workers building a wall together. If one shows up but the other doesnt, the wall wont be built properly.',
        'Your parathyroid glands are like a thermostat for calcium - they sense when levels are low and turn up the "heat" to bring more calcium into your blood.',
      ],
      examples: [
        'A person who never goes outside and doesnt take vitamin D supplements might develop low calcium because vitamin D helps absorb calcium.',
        'Someone with kidney disease might have high phosphorus because their kidneys cant remove it properly.',
      ],
    },
    2: {
      level: 2,
      summary: 'Calcium and phosphorus homeostasis involves PTH, vitamin D, and renal regulation, with disorders causing neuromuscular, cardiac, and skeletal complications.',
      explanation: `## Calcium and Phosphorus Regulation

**Normal Values:**
- Serum calcium: 8.5-10.5 mg/dL (2.1-2.6 mmol/L)
- Ionized calcium: 4.5-5.3 mg/dL (1.12-1.32 mmol/L)
- Serum phosphorus: 2.5-4.5 mg/dL (0.81-1.45 mmol/L)

**Key Regulators:**

| Hormone | Effect on Calcium | Effect on Phosphorus |
|---------|------------------|---------------------|
| PTH | Increases | Decreases |
| Vitamin D | Increases | Increases |
| Calcitonin | Decreases | Decreases |
| FGF-23 | Decreases (indirectly) | Decreases |

## Hypercalcemia (Ca >10.5 mg/dL)

**Common Causes ("CHIMPANZEES"):**
- Calcium supplementation, hyperparathyroidism
- Hyperthyroidism, immobilization
- Milk-alkali syndrome, metastases/malignancy
- Paget disease, Addison disease
- Neoplasm, Zollinger-Ellison
- Excess vitamin D, excess vitamin A
- Sarcoidosis (granulomatous disease)

**Two Most Common:**
1. Primary hyperparathyroidism (outpatient)
2. Malignancy (hospitalized patients)

**Symptoms (depends on severity):**
- Mild: Often asymptomatic
- Moderate: "Stones, bones, groans, and psychiatric moans"
  - Kidney stones
  - Bone pain
  - Abdominal pain, constipation
  - Confusion, depression

## Hypocalcemia (Ca <8.5 mg/dL)

**Common Causes:**
- Hypoparathyroidism (post-surgical most common)
- Vitamin D deficiency
- Chronic kidney disease
- Acute pancreatitis
- Hypomagnesemia

**Symptoms:**
- Neuromuscular: Tetany, muscle cramps, paresthesias
- Chvostek sign: Facial muscle twitch when tapping facial nerve
- Trousseau sign: Carpopedal spasm with BP cuff inflation
- Cardiac: Prolonged QT interval, arrhythmias

## Hyperphosphatemia (Phos >4.5 mg/dL)

**Common Causes:**
- Chronic kidney disease (most common)
- Hypoparathyroidism
- Tumor lysis syndrome
- Rhabdomyolysis

**Effects:**
- Precipitates with calcium → metastatic calcification
- Lowers serum calcium
- Contributes to secondary hyperparathyroidism in CKD

## Hypophosphatemia (Phos <2.5 mg/dL)

**Common Causes:**
- Refeeding syndrome
- Alcoholism
- Respiratory alkalosis
- Diabetic ketoacidosis recovery
- Hyperparathyroidism

**Symptoms:**
- Muscle weakness, respiratory failure
- Confusion, seizures
- Hemolysis, rhabdomyolysis (severe cases)`,
      keyTerms: [
        { term: 'PTH', definition: 'Parathyroid hormone; raises calcium by stimulating bone resorption, kidney reabsorption, and vitamin D activation' },
        { term: 'ionized calcium', definition: 'The "active" free form of calcium in blood; most clinically relevant' },
        { term: 'Chvostek sign', definition: 'Facial muscle twitch when tapping the facial nerve; sign of hypocalcemia', pronunciation: 'KVOS-tek' },
        { term: 'Trousseau sign', definition: 'Hand spasm when BP cuff inflated; sign of hypocalcemia', pronunciation: 'troo-SOH' },
        { term: 'tetany', definition: 'Involuntary muscle contractions from low calcium' },
      ],
      analogies: [
        'PTH acts like a "calcium thermostat" - when calcium drops, PTH rises to bring it back up by pulling calcium from bones and kidneys.',
        'The calcium-phosphorus relationship is like a seesaw - when one goes up, the other tends to go down.',
      ],
    },
    3: {
      level: 3,
      summary: 'Calcium-phosphorus homeostasis involves complex hormonal regulation affecting intestinal absorption, bone turnover, and renal handling, with derangements causing specific clinical syndromes requiring targeted diagnosis and treatment.',
      explanation: `## Calcium Physiology

### Distribution of Total Serum Calcium
- **Ionized (free)**: ~50% - biologically active
- **Protein-bound**: ~40% - mainly albumin
- **Complexed**: ~10% - bound to citrate, phosphate

**Corrected Calcium Formula:**
Corrected Ca = Measured Ca + 0.8 × (4 - Albumin)

### Calcium Homeostasis

**PTH Effects:**
1. **Bone**: Stimulates osteoclastic resorption → releases Ca and Phos
2. **Kidney**: Increases Ca reabsorption, decreases Phos reabsorption
3. **Indirect**: Stimulates 1-alpha-hydroxylase → active vitamin D

**Vitamin D Activation:**
Cholecalciferol (D3) → 25(OH)D (liver) → 1,25(OH)2D (kidney)

1,25(OH)2D effects:
- Increases intestinal Ca and Phos absorption
- Mobilizes Ca from bone (with PTH)
- Suppresses PTH secretion (negative feedback)

## Hypercalcemia Workup

### Algorithm
1. **Confirm true hypercalcemia** (check ionized Ca or correct for albumin)
2. **Check PTH level**:
   - PTH elevated or inappropriately normal → PTH-mediated
   - PTH suppressed → Non-PTH-mediated

**PTH-Mediated Hypercalcemia:**
- Primary hyperparathyroidism (adenoma 85%, hyperplasia 15%, carcinoma <1%)
- Familial hypocalciuric hypercalcemia (FHH) - benign, no treatment needed
- Tertiary hyperparathyroidism (CKD with autonomous PTH)

**Non-PTH-Mediated Hypercalcemia:**
- Malignancy (PTHrP, osteolytic metastases, 1,25(OH)2D production)
- Granulomatous disease (activated macrophages make 1,25(OH)2D)
- Vitamin D toxicity
- Milk-alkali syndrome

### Malignancy-Associated Hypercalcemia
**Mechanisms:**
1. PTHrP secretion (humoral hypercalcemia of malignancy) - most common
   - Squamous cell cancers, breast, renal cell
2. Local osteolytic metastases
   - Breast, multiple myeloma
3. 1,25(OH)2D production
   - Lymphoma

**Key lab finding:** Low PTH, may have elevated PTHrP

## Hypocalcemia Workup

### Algorithm
1. **Rule out pseudohypocalcemia** (low albumin)
2. **Check PTH level**:
   - PTH low → Hypoparathyroidism
   - PTH high → Secondary causes

**Causes by PTH Level:**
- Low PTH: Post-surgical, autoimmune, infiltrative, genetic (DiGeorge)
- High PTH: Vitamin D deficiency, CKD, PTH resistance (pseudohypoparathyroidism)

### Critical Findings Requiring Urgent Treatment
- Symptomatic tetany
- Seizures
- QTc prolongation with arrhythmia risk
- Ca <7.5 mg/dL

**Emergency Treatment:**
- IV calcium gluconate 1-2g over 10-20 minutes
- Continuous infusion as needed
- Address underlying cause

## Phosphorus Homeostasis

### FGF-23 Role
- Produced by osteocytes
- Decreases phosphate reabsorption in proximal tubule
- Inhibits 1-alpha-hydroxylase
- Elevated early in CKD (before PTH rises)

### Refeeding Syndrome
- Insulin surge → shifts phosphorus intracellularly
- Can cause severe hypophosphatemia
- Monitor and replete during nutritional recovery

### Tumor Lysis Syndrome
- Massive cell death → phosphorus release
- Precipitates calcium → hypocalcemia
- Can cause acute kidney injury`,
      keyTerms: [
        { term: 'ionized calcium', definition: 'Free, unbound calcium; the physiologically active form' },
        { term: 'PTHrP', definition: 'Parathyroid hormone-related peptide; tumor-secreted factor causing hypercalcemia of malignancy' },
        { term: 'FGF-23', definition: 'Fibroblast growth factor-23; phosphaturic hormone from bone' },
        { term: '1,25(OH)2D', definition: 'Calcitriol; active form of vitamin D', pronunciation: 'one-twenty-five OH-two-D' },
        { term: '25(OH)D', definition: 'Calcidiol; storage form of vitamin D measured to assess status', pronunciation: 'twenty-five OH-D' },
        { term: 'FHH', definition: 'Familial hypocalciuric hypercalcemia; benign genetic cause of mild hypercalcemia' },
      ],
      clinicalNotes: 'Always check ionized calcium or correct for albumin before diagnosing hypocalcemia. PTH is the key branch point in hypercalcemia workup. In hospital hypercalcemia, assume malignancy until proven otherwise. Hypomagnesemia causes PTH resistance and must be corrected before hypocalcemia will respond to treatment.',
    },
    4: {
      level: 4,
      summary: 'Advanced management of calcium-phosphorus disorders requires understanding molecular mechanisms, distinguishing specific disease entities, and employing targeted therapies for primary hyperparathyroidism, CKD-MBD, and hypercalcemia of malignancy.',
      explanation: `## Primary Hyperparathyroidism (PHPT)

### Epidemiology and Presentation
- Prevalence: 1-7 per 1000 adults
- F:M = 3:1, peak age 50-60
- 80% now discovered incidentally (asymptomatic hypercalcemia)

### Diagnostic Criteria
- Elevated calcium with inappropriately normal or elevated PTH
- 24-hour urine calcium >100 mg/day (excludes FHH)

### Guidelines for Surgery (Parathyroidectomy)
**2022 International Workshop Criteria (any one):**
- Age <50 years
- Serum calcium >1 mg/dL above normal
- eGFR <60 mL/min/1.73m²
- T-score <-2.5 at any site
- Vertebral fracture
- Kidney stones or nephrocalcinosis
- 24-hour urine calcium >400 mg/day

### Preoperative Localization
1. Sestamibi scan (Tc-99m-MIBI)
2. Neck ultrasound
3. 4D-CT if above inconclusive
4. Intraoperative PTH monitoring (>50% drop confirms cure)

### Medical Management (if surgery not pursued)
- Cinacalcet: Calcimimetic; lowers PTH and calcium
- Bisphosphonates: For bone protection
- Adequate hydration, avoid thiazides

## Familial Hypocalciuric Hypercalcemia (FHH)

### Pathophysiology
- Inactivating mutation in calcium-sensing receptor (CaSR)
- Higher calcium "set point" → inappropriately normal PTH

### Diagnosis
- Mild hypercalcemia, PTH normal or slightly elevated
- **Low urine calcium**: Ca/Cr clearance ratio <0.01
- Family history of hypercalcemia

### Management
- No treatment needed (benign condition)
- Avoid parathyroidectomy (does not cure, causes hypoparathyroidism)

## CKD-Mineral and Bone Disorder (CKD-MBD)

### Pathophysiology Sequence
1. Nephron loss → phosphate retention
2. FGF-23 rises (adaptive)
3. Decreased 1,25(OH)2D production
4. Hypocalcemia (stimulus for PTH)
5. Secondary hyperparathyroidism
6. Bone disease and vascular calcification

### Management Targets (KDIGO 2017)
| Parameter | Target |
|-----------|--------|
| Phosphorus | Toward normal (not strict range) |
| Calcium | Avoid hypercalcemia |
| PTH | 2-9× upper limit of normal in Stage 5D |

### Phosphate Binders
| Type | Examples | Considerations |
|------|----------|----------------|
| Calcium-based | Calcium carbonate, acetate | Risk of vascular calcification |
| Non-calcium | Sevelamer, lanthanum | Preferred in vascular calcification |
| Iron-based | Ferric citrate, sucroferric oxyhydroxide | Also treats anemia |

### Vitamin D Therapy
- Nutritional vitamin D (ergocalciferol/cholecalciferol): For 25(OH)D deficiency
- Active vitamin D (calcitriol, paricalcitol): For secondary hyperparathyroidism
- Paricalcitol: Selective VDR activator, less hypercalcemia

### Calcimimetics
- Cinacalcet: Activates CaSR → suppresses PTH
- Etelcalcetide: IV calcimimetic for dialysis patients
- EVOLVE trial: No mortality benefit, reduces parathyroidectomy

### Refractory Hyperparathyroidism
- Consider parathyroidectomy if:
  - PTH persistently >800 pg/mL
  - Hypercalcemia unresponsive to medical therapy
  - Calciphylaxis
- Subtotal vs total with autotransplant

## Hypercalcemia of Malignancy

### Mechanism-Specific Treatment
**All cases:**
- IV saline hydration (restore intravascular volume)
- Bisphosphonates (zoledronic acid 4mg IV, pamidronate 60-90mg IV)
- Effect in 2-4 days, lasts 2-4 weeks

**PTHrP-mediated:**
- Treat underlying malignancy
- Denosumab if refractory to bisphosphonates

**1,25(OH)2D-mediated (lymphoma, granulomatous):**
- Glucocorticoids (inhibit 1-alpha-hydroxylase in macrophages)

**Refractory hypercalcemia:**
- Denosumab 120mg SC
- Calcitonin (rapid onset but tachyphylaxis)
- Hemodialysis (severe, symptomatic)

## Hungry Bone Syndrome

### Pathophysiology
- Post-parathyroidectomy: Sudden PTH drop
- Bones rapidly take up calcium ("hungry")
- Profound, prolonged hypocalcemia

### Risk Factors
- High preoperative PTH and calcium
- Significant bone disease (osteitis fibrosa cystica)
- Large adenoma

### Management
- Aggressive calcium and vitamin D replacement
- May require IV calcium infusion for days to weeks
- Monitor magnesium and phosphorus`,
      keyTerms: [
        { term: 'cinacalcet', definition: 'Calcimimetic drug that sensitizes CaSR to suppress PTH secretion' },
        { term: 'sestamibi scan', definition: 'Nuclear medicine imaging to localize parathyroid adenomas preoperatively' },
        { term: 'denosumab', definition: 'RANKL inhibitor that blocks osteoclast-mediated bone resorption' },
        { term: 'hungry bone syndrome', definition: 'Severe hypocalcemia after parathyroidectomy due to rapid bone calcium uptake' },
        { term: 'calciphylaxis', definition: 'Life-threatening calcification of skin vessels causing necrotic ulcers, seen in CKD' },
        { term: 'VDR activator', definition: 'Vitamin D receptor activator; paricalcitol is a selective form with less hypercalcemia risk' },
      ],
      clinicalNotes: 'Distinguish FHH from PHPT before parathyroidectomy - check urine calcium/creatinine clearance ratio. In CKD-MBD, avoid over-suppressing PTH (causes adynamic bone disease). Calciphylaxis is an emergency - stop calcium-based binders, consider sodium thiosulfate. Hungry bone syndrome can last weeks; plan for prolonged monitoring post-parathyroidectomy.',
    },
    5: {
      level: 5,
      summary: 'Expert management of calcium-phosphorus disorders integrates molecular genetics, novel therapeutics targeting mineral metabolism pathways, precision approaches to CKD-MBD, and multidisciplinary care for complex phenotypes including calciphylaxis and genetic syndromes.',
      explanation: `## Molecular Genetics of Calcium Disorders

### Genetic Forms of Hyperparathyroidism
**MEN Syndromes:**
- MEN1 (11q13): Parathyroid hyperplasia + pituitary + pancreatic tumors
- MEN2A (RET mutation): Parathyroid hyperplasia + MTC + pheo
- MEN4 (CDKN1B): Similar to MEN1

**Parathyroid Carcinoma:**
- CDC73/HRPT2 mutation in most sporadic cases
- Hyperparathyroidism-jaw tumor syndrome (CDC73)

### Genetic Hypoparathyroidism
- Autoimmune polyglandular syndrome type 1 (APS1/APECED): AIRE mutation
- DiGeorge syndrome (22q11.2 deletion): Parathyroid aplasia
- Isolated familial hypoparathyroidism: Various gene mutations (PTH, GCM2, CASR activating)

### CaSR Mutations
- Inactivating (FHH1, FHH2, FHH3): Hypercalcemia with hypocalciuria
- Activating (ADH1, Bartter type V): Hypocalcemia with hypercalciuria

### Genetic Phosphorus Disorders
- X-linked hypophosphatemia (XLH): PHEX mutation → elevated FGF-23
- Autosomal dominant hypophosphatemic rickets: FGF23 mutation
- Tumor-induced osteomalacia: Ectopic FGF-23 production

## Novel Therapeutics

### Burosumab (Anti-FGF-23 Antibody)
- FDA-approved for XLH and tumor-induced osteomalacia
- Blocks FGF-23 → increases phosphate reabsorption and 1,25(OH)2D
- Transformed treatment of genetic hypophosphatemic rickets

### PTH Replacement Therapy
**Natpara (rhPTH 1-84):**
- Approved for refractory hypoparathyroidism
- Once-daily injection
- REMS program due to osteosarcoma risk (black box warning)
- Reduces calcium and vitamin D supplementation needs

**TransCon PTH (investigational):**
- Prodrug with sustained PTH release
- Phase 3 trials ongoing

### Novel Approaches to CKD-MBD
- Etelcalcetide: IV calcimimetic, superior PTH suppression vs cinacalcet
- Evocalcet: Next-generation oral calcimimetic
- Tenapanor: NHE3 inhibitor, reduces phosphate absorption
- Extended-release calcifediol: Gradual 25(OH)D repletion in CKD

## Calciphylaxis (Calcific Uremic Arteriolopathy)

### Pathophysiology
- Medial calcification of small dermal vessels
- Thrombosis and skin necrosis
- Often precipitated by warfarin (inhibits matrix Gla protein)

### Risk Factors
- Dialysis patients, obesity, diabetes
- Warfarin use, hypercoagulable states
- Calcium-based binders, high calcium dialysate
- High calcium-phosphorus product

### Diagnosis
- Clinical: Painful, necrotic skin lesions (often proximal/adipose areas)
- Histology: Medial calcification, intimal proliferation, thrombosis
- Imaging: Vascular calcification on plain films (but often not diagnostic)

### Management
**Immediate:**
- Stop calcium-based binders, stop warfarin
- Reduce dialysate calcium
- Intensive wound care

**Specific Therapies:**
- Sodium thiosulfate: IV during dialysis, may dissolve calcium
- Hyperbaric oxygen: If available
- Cinacalcet: Lowers Ca-Phos product
- Consider parathyroidectomy if PTH markedly elevated

**Prognosis:**
- Mortality 50-80% with proximal lesions
- Early aggressive therapy essential

## Precision Medicine in CKD-MBD

### Biomarker-Guided Therapy
- FGF-23: Earliest marker of phosphate dysregulation
- Intact vs. whole PTH: Implications for adynamic bone vs. high-turnover
- Bone turnover markers (P1NP, CTx): Help guide PTH targets

### Bone Biopsy
**Indications:**
- Unexplained fractures in CKD
- Suspected aluminum toxicity
- Before starting anabolic bone therapy
- Uncertain PTH target (adynamic vs. high-turnover)

**Classification (TMV):**
- Turnover: High, normal, low
- Mineralization: Normal, abnormal
- Volume: High, normal, low

### Cardiovascular Calcification Assessment
- CAC scoring on CT
- Informs use of calcium-based binders
- Prognostic significance

## Special Populations

### Pregnancy and Calcium Disorders
**Hyperparathyroidism in pregnancy:**
- Increased fetal risks (hypocalcemia, tetany)
- Surgery preferred in 2nd trimester if indicated
- Cinacalcet: Limited data, not routinely recommended

**Hypoparathyroidism in pregnancy:**
- Increased calcium and vitamin D requirements
- Monitor closely; calcitriol often needs increase

### Post-Transplant Bone Disease
- Tertiary hyperparathyroidism may persist
- Glucocorticoid-induced osteoporosis
- Bisphosphonates with caution (monitor renal function)
- Denosumab: Risk of hypocalcemia in CKD

### Pediatric Considerations
- Rickets presentation differs from adult osteomalacia
- Growth plate abnormalities
- Genetic testing essential in familial cases
- Burosumab transforming XLH management

## Quality Improvement and Systems Approaches

### CKD-MBD Monitoring Protocols
- Automated lab ordering based on CKD stage
- Decision support for binder and vitamin D adjustments
- Pharmacist-led phosphorus management programs

### Preventing Calciphylaxis
- Avoid calcium-based binders in high-risk patients
- Warfarin alternatives (NOACs) when possible
- Lower calcium dialysate in susceptible patients
- Screen for hypercoagulability`,
      keyTerms: [
        { term: 'burosumab', definition: 'Anti-FGF-23 monoclonal antibody for X-linked hypophosphatemia and tumor-induced osteomalacia' },
        { term: 'Natpara', definition: 'Recombinant PTH 1-84 for refractory hypoparathyroidism; carries osteosarcoma black box warning' },
        { term: 'calciphylaxis', definition: 'Calcific uremic arteriolopathy; life-threatening skin necrosis from vessel calcification in CKD' },
        { term: 'sodium thiosulfate', definition: 'Treatment for calciphylaxis; may dissolve calcium deposits in vessels' },
        { term: 'TMV classification', definition: 'Turnover, Mineralization, Volume; bone biopsy classification system in CKD' },
        { term: 'matrix Gla protein', definition: 'Vitamin K-dependent calcification inhibitor; warfarin blocks its function' },
        { term: 'XLH', definition: 'X-linked hypophosphatemia; most common genetic cause of rickets' },
      ],
      clinicalNotes: `Key clinical pearls:
1. Consider genetic testing in early-onset or familial hyperparathyroidism (MEN syndromes)
2. Burosumab has transformed XLH - refer to specialized centers
3. Calciphylaxis is an emergency - stop warfarin immediately, consider sodium thiosulfate
4. PTH replacement (Natpara) can reduce supplement burden in refractory hypoparathyroidism
5. Bone biopsy remains gold standard for complex CKD-MBD phenotyping
6. FGF-23 rises before PTH in CKD - may guide earlier intervention
7. Post-kidney transplant: Watch for persistent hyperparathyroidism and glucocorticoid bone effects`,
    },
  },

  media: [
    {
      id: 'calcium-regulation-diagram',
      type: 'diagram',
      filename: 'calcium-regulation.svg',
      title: 'Calcium Homeostasis Regulation',
      description: 'Diagram showing PTH, vitamin D, and calcitonin effects on calcium balance',
    },
    {
      id: 'hypercalcemia-algorithm',
      type: 'diagram',
      filename: 'hypercalcemia-workup.svg',
      title: 'Hypercalcemia Diagnostic Algorithm',
      description: 'PTH-based approach to hypercalcemia differential diagnosis',
    },
  ],

  citations: [
    {
      id: 'kdigo-ckd-mbd-2017',
      type: 'article',
      title: 'KDIGO 2017 Clinical Practice Guideline Update for the Diagnosis, Evaluation, Prevention, and Treatment of CKD-MBD',
      authors: ['KDIGO CKD-MBD Work Group'],
      source: 'Kidney International Supplements',
      url: 'https://kdigo.org/guidelines/ckd-mbd/',
    },
    {
      id: 'phpt-guidelines-2022',
      type: 'article',
      title: 'Fifth International Workshop on Primary Hyperparathyroidism',
      authors: ['Bilezikian JP', 'et al.'],
      source: 'Journal of Bone and Mineral Research',
    },
    {
      id: 'brenner-rector-mineral',
      type: 'textbook',
      title: 'Disorders of Calcium and Phosphorus Metabolism',
      source: "Brenner and Rector's The Kidney",
      chapter: '18-19',
    },
  ],

  crossReferences: [
    { targetId: 'condition-chronic-kidney-disease', targetType: 'condition', relationship: 'related', label: 'CKD (causes CKD-MBD)' },
    { targetId: 'structure-parathyroid-glands', targetType: 'structure', relationship: 'related', label: 'Parathyroid Glands' },
    { targetId: 'process-dialysis', targetType: 'process', relationship: 'related', label: 'Dialysis' },
    { targetId: 'condition-potassium-disorders', targetType: 'condition', relationship: 'sibling', label: 'Potassium Disorders' },
  ],

  tags: {
    systems: ['urinary', 'renal', 'endocrine', 'skeletal'],
    topics: ['nephrology', 'endocrinology', 'electrolytes', 'bone metabolism'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'endocrinology'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default calciumPhosphorusDisorders;
