/**
 * Thyroid Disorders - Comprehensive Educational Content
 *
 * Covers hypothyroidism, hyperthyroidism, Graves disease, Hashimoto thyroiditis,
 * thyroid storm, myxedema coma, thyroid nodule workup (Bethesda system),
 * and thyroid cancer types across all five complexity levels.
 */

import { EducationalContent } from '../types';

export const thyroidDisorders: EducationalContent = {
  id: 'condition-thyroid-disorders',
  type: 'condition',
  name: 'Thyroid Disorders',
  nameEs: 'Trastornos de la Tiroides',
  alternateNames: ['Thyroid Disease', 'Thyroid Dysfunction'],
  hpoId: 'HP:0000820',

  levels: {
    1: {
      level: 1,
      summary:
        'The thyroid is a small gland in your neck that controls how fast your body works. When it makes too much or too little hormone, it causes health problems.',
      explanation: `**What Is the Thyroid?**

The thyroid is a butterfly-shaped gland at the front of your neck. It makes hormones that act like a thermostat for your body, controlling how fast or slow everything runs -- your heart rate, how quickly you burn calories, and how warm you feel.

**When the Thyroid Is Too Slow (Hypothyroidism):**
- Feeling tired all the time
- Gaining weight easily
- Feeling cold when others are comfortable
- Dry skin and hair loss
- Constipation
- Feeling sad or foggy-headed
- Most common cause: Hashimoto disease (your immune system attacks the thyroid)

**When the Thyroid Is Too Fast (Hyperthyroidism):**
- Feeling jittery or anxious
- Losing weight without trying
- Feeling hot and sweaty
- Fast heartbeat
- Trouble sleeping
- Shaky hands
- Most common cause: Graves disease (your immune system overstimulates the thyroid)

**Thyroid Lumps (Nodules):**
- Bumps in the thyroid gland
- Very common (many people have them)
- Most are NOT cancer
- Doctors may do an ultrasound or biopsy to check

**Thyroid Cancer:**
- Usually slow-growing and very treatable
- Found as a lump in the neck
- Treatment usually includes surgery and sometimes radioactive iodine
- Most people do very well after treatment`,
      keyTerms: [
        {
          term: 'thyroid',
          definition:
            'A butterfly-shaped gland in your neck that makes hormones controlling your body\'s speed',
        },
        {
          term: 'hypothyroidism',
          definition: 'When the thyroid does not make enough hormone, making everything slow down',
        },
        {
          term: 'hyperthyroidism',
          definition: 'When the thyroid makes too much hormone, making everything speed up',
        },
        {
          term: 'nodule',
          definition: 'A lump or bump that forms in the thyroid gland',
        },
      ],
      analogies: [
        'The thyroid is like the thermostat in your house -- it sets how fast or slow your body runs.',
        'Hypothyroidism is like turning the thermostat too low: everything slows down and you feel cold and tired.',
        'Hyperthyroidism is like turning the thermostat too high: everything speeds up, you feel hot and your heart races.',
      ],
      examples: [
        'A woman who feels extremely tired, gains weight, and cannot stay warm may have an underactive thyroid.',
        'A young person with unexplained weight loss, a racing heart, and trembling hands may have an overactive thyroid.',
      ],
      patientCounselingPoints: [
        'Thyroid problems are very common and treatable with medication.',
        'If you take thyroid hormone pills, take them on an empty stomach in the morning for best absorption.',
        'Most thyroid nodules are not cancer -- your doctor will check to be sure.',
        'Thyroid conditions often run in families.',
      ],
    },

    2: {
      level: 2,
      summary:
        'Thyroid disorders encompass hypothyroidism (most commonly Hashimoto thyroiditis), hyperthyroidism (most commonly Graves disease), thyroid nodules requiring systematic evaluation, and thyroid cancers classified by histologic type.',
      explanation: `## Hypothyroidism

**Causes:**
- Hashimoto thyroiditis (chronic autoimmune; most common cause in iodine-sufficient areas)
- Iodine deficiency (most common cause worldwide)
- Post-thyroidectomy or radioactive iodine ablation
- Medications (lithium, amiodarone, immune checkpoint inhibitors)
- Central hypothyroidism (pituitary or hypothalamic disease) -- rare

**Diagnosis:**
- Elevated TSH with low free T4 (primary hypothyroidism)
- Low/normal TSH with low free T4 (central hypothyroidism)
- Subclinical: Elevated TSH with normal free T4

**Treatment:**
- Levothyroxine (T4 replacement) -- take on empty stomach
- Goal TSH: 0.5-2.5 mIU/L for most patients
- Monitor TSH every 6-8 weeks after dose changes

## Hyperthyroidism

**Causes:**
- Graves disease (autoimmune; TSH receptor stimulating antibodies)
- Toxic multinodular goiter (autonomous nodules)
- Toxic adenoma (single hyperactive nodule)
- Thyroiditis (transient hyperthyroidism from gland inflammation)
- Exogenous thyroid hormone (factitious or iatrogenic)

**Graves Disease Features:**
- Diffuse goiter
- Ophthalmopathy (bulging eyes, lid retraction, diplopia)
- Pretibial myxedema (skin thickening on shins)
- Thyroid acropachy (finger clubbing) -- rare

**Diagnosis:**
- Low TSH with elevated free T4 and/or free T3
- TSH receptor antibodies (TRAb) confirm Graves disease
- Radioactive iodine uptake (RAIU): Elevated and diffuse in Graves, low in thyroiditis

**Treatment Options:**
| Treatment | Mechanism | Considerations |
|-----------|-----------|----------------|
| Methimazole | Blocks thyroid hormone synthesis | First-line; risk of agranulocytosis |
| PTU | Blocks synthesis + T4-to-T3 conversion | Preferred in first trimester pregnancy, thyroid storm |
| Radioactive Iodine (I-131) | Destroys thyroid tissue | Definitive; causes hypothyroidism |
| Surgery | Thyroidectomy | For large goiters, suspicious nodules, or Graves ophthalmopathy |

## Thyroid Nodules

**Epidemiology:**
- Palpable in 4-7% of adults; found on ultrasound in 30-50%
- Vast majority benign (only 5-15% are malignant)

**Workup:**
1. Check TSH
2. If TSH low: Radioactive iodine scan (hot nodule = likely benign)
3. Thyroid ultrasound for all palpable nodules
4. Fine needle aspiration (FNA) biopsy based on size and ultrasound features

**Concerning Ultrasound Features:**
- Hypoechoic solid nodule
- Irregular margins
- Microcalcifications
- Taller-than-wide shape
- Extrathyroidal extension

## Thyroid Cancer

**Types (by frequency):**
| Type | Frequency | Prognosis | Key Features |
|------|-----------|-----------|--------------|
| Papillary | ~80% | Excellent | Psammoma bodies, lymph node spread |
| Follicular | ~10-15% | Good | Hematogenous spread (lung, bone) |
| Medullary | ~5% | Intermediate | C-cells, calcitonin, MEN2 association |
| Anaplastic | ~1-2% | Very poor | Aggressive, elderly patients |

**Treatment:**
- Surgery: Total thyroidectomy for most (lobectomy for small papillary)
- Radioactive iodine ablation for papillary and follicular
- Thyroid hormone suppression (TSH suppression)
- External beam radiation for anaplastic
- Targeted therapy: Tyrosine kinase inhibitors for advanced/refractory disease`,
      keyTerms: [
        {
          term: 'Hashimoto thyroiditis',
          definition:
            'Autoimmune condition where the immune system attacks the thyroid, causing hypothyroidism',
          pronunciation: 'hah-shee-MOH-toe',
        },
        {
          term: 'Graves disease',
          definition:
            'Autoimmune condition where antibodies stimulate the thyroid to make excess hormone',
        },
        {
          term: 'TSH',
          definition:
            'Thyroid-stimulating hormone from the pituitary that regulates thyroid hormone production',
        },
        {
          term: 'levothyroxine',
          definition:
            'Synthetic T4 hormone used to treat hypothyroidism',
          pronunciation: 'lee-voh-thy-ROX-een',
        },
        {
          term: 'FNA biopsy',
          definition:
            'Fine needle aspiration -- using a thin needle to sample cells from a thyroid nodule',
        },
        {
          term: 'radioactive iodine uptake',
          definition:
            'Test measuring how much iodine the thyroid absorbs, helping determine the cause of hyperthyroidism',
        },
      ],
    },

    3: {
      level: 3,
      summary:
        'Thyroid disorders involve complex autoimmune mechanisms (Graves, Hashimoto), require systematic diagnostic algorithms for nodule evaluation using the Bethesda classification system, and include life-threatening emergencies (thyroid storm, myxedema coma) requiring immediate intervention.',
      explanation: `## Hashimoto Thyroiditis -- Pathophysiology

**Autoimmune Mechanisms:**
- CD4+ T cell-mediated destruction of thyroid follicular cells
- Antibodies: Anti-TPO (>90%), anti-thyroglobulin (60-80%)
- Th1-dominant response with IFN-gamma and TNF-alpha
- Leads to lymphocytic infiltration, germinal center formation, and Hurthle cell change
- Progressive fibrosis and gland atrophy

**Associations:**
- HLA-DR3, HLA-DR5
- Other autoimmune diseases: T1DM, celiac disease, pernicious anemia, vitiligo
- Part of Autoimmune Polyglandular Syndrome types 1 and 2
- Increased risk of thyroid lymphoma (MALT lymphoma)

**Clinical Course:**
- Hashitoxicosis: Transient hyperthyroidism from inflammatory hormone release
- Euthyroid phase with positive antibodies
- Progressive hypothyroidism
- Subclinical hypothyroidism may precede overt disease for years

## Graves Disease -- Pathophysiology

**Immune Mechanism:**
- TSH receptor-stimulating antibodies (TSI/TRAb) activate thyroid
- Continuous, unregulated thyroid hormone production
- Thyroid growth (diffuse goiter)
- TSH suppressed by negative feedback but irrelevant (antibody-driven)

**Graves Ophthalmopathy:**
- TSH receptor expression on orbital fibroblasts
- Autoimmune inflammation of retro-orbital tissues
- Glycosaminoglycan accumulation and adipogenesis
- Extraocular muscle enlargement (especially inferior and medial rectus)
- Clinical: Proptosis, lid retraction, diplopia, corneal exposure, optic neuropathy
- Clinical Activity Score (CAS) guides treatment
- Can worsen after radioactive iodine therapy

**Graves Dermopathy (Pretibial Myxedema):**
- Localized accumulation of glycosaminoglycans in dermis
- Typically pretibial; non-pitting, waxy, erythematous plaques
- Occurs in <5% of Graves patients

## Thyroid Emergencies

**Thyroid Storm:**
- Life-threatening thyrotoxicosis with systemic decompensation
- Mortality: 10-30% even with treatment
- Triggers: Surgery, infection, trauma, iodine contrast, DKA, childbirth

*Burch-Wartofsky Score (>45 = thyroid storm):*
- Temperature, CNS effects, GI-hepatic dysfunction, heart rate, heart failure, atrial fibrillation

*Treatment (all components simultaneously):*
1. Beta-blocker: Propranolol (also inhibits T4->T3 conversion)
2. Thionamide: PTU preferred (blocks T4->T3 conversion and synthesis)
3. Iodine: Lugol solution or SSKI (blocks hormone release -- give 1 hour AFTER thionamide)
4. Glucocorticoid: Hydrocortisone (blocks T4->T3 conversion, treats possible adrenal insufficiency)
5. Supportive: Cooling, fluids, ICU monitoring

**Myxedema Coma:**
- Severe hypothyroidism with altered mental status and hypothermia
- Mortality: 30-60%
- Triggers: Infection, surgery, sedatives, cold exposure, medication noncompliance

*Treatment:*
1. IV levothyroxine loading dose (200-400 mcg)
2. Consider IV liothyronine (T3) for severe cases
3. Stress-dose hydrocortisone (until adrenal insufficiency excluded)
4. Passive rewarming (active rewarming can cause vasodilation and shock)
5. Supportive: Ventilation, fluids, vasopressors, treat precipitant

## Thyroid Nodule Evaluation -- Bethesda System

**The Bethesda System for Reporting Thyroid Cytopathology:**

| Category | Diagnosis | Cancer Risk | Recommended Action |
|----------|-----------|-------------|-------------------|
| I | Nondiagnostic/Unsatisfactory | 5-10% | Repeat FNA |
| II | Benign | 0-3% | Follow-up |
| III | Atypia of Undetermined Significance (AUS/FLUS) | 10-30% | Repeat FNA, molecular testing, or lobectomy |
| IV | Follicular Neoplasm / Suspicious for FN | 25-40% | Lobectomy or molecular testing |
| V | Suspicious for Malignancy | 50-75% | Total thyroidectomy or lobectomy |
| VI | Malignant | 97-99% | Total thyroidectomy |

**Molecular Testing (for indeterminate cytology -- Bethesda III/IV):**
- Afirma Gene Sequencing Classifier (GSC): Rule-out test (high NPV)
- ThyroSeq v3: Rule-in test (panels mutations: BRAF, RAS, RET/PTC, PAX8-PPARg)
- Can prevent unnecessary diagnostic surgery in 50-60% of indeterminate nodules

## Thyroid Cancer -- Detailed Classification

**Papillary Thyroid Cancer (PTC):**
- Most common (~80%); excellent prognosis (10-year survival >95%)
- Pathology: Papillary architecture, nuclear grooves, "Orphan Annie eye" nuclei, psammoma bodies
- Spreads via lymphatics to cervical lymph nodes
- Variants: Classic, follicular variant, tall cell (aggressive), diffuse sclerosing
- Key mutation: BRAF V600E (45-50%), RET/PTC rearrangements

**Follicular Thyroid Cancer (FTC):**
- Second most common (~10-15%); good prognosis
- Cannot be diagnosed by FNA alone (need capsular/vascular invasion on histology)
- Spreads hematogenously (lung, bone)
- Key mutations: RAS, PAX8-PPARg rearrangement

**Medullary Thyroid Cancer (MTC):**
- Arises from parafollicular C-cells (produces calcitonin)
- ~5% of thyroid cancers
- 25% hereditary (MEN2A, MEN2B, familial MTC)
- RET proto-oncogene mutations (germline in hereditary, somatic in sporadic)
- Prophylactic thyroidectomy based on RET mutation risk stratification
- Monitor: Calcitonin and CEA

**Anaplastic Thyroid Cancer:**
- Rare (~1-2%) but most aggressive thyroid cancer
- Rapidly growing neck mass, often in elderly
- Median survival: 3-6 months
- May arise from de-differentiation of papillary or follicular cancer
- Treatment: Multimodal (surgery if feasible, radiation, chemotherapy)
- BRAF V600E + PI3K/AKT pathway mutations common`,
      keyTerms: [
        {
          term: 'thyroid storm',
          definition:
            'Life-threatening exacerbation of thyrotoxicosis with multi-organ dysfunction requiring emergent treatment',
        },
        {
          term: 'myxedema coma',
          definition:
            'Severe, decompensated hypothyroidism with altered consciousness, hypothermia, and high mortality',
        },
        {
          term: 'Bethesda system',
          definition:
            'Standardized six-category classification for thyroid FNA cytology guiding clinical management',
        },
        {
          term: 'anti-TPO antibodies',
          definition:
            'Antibodies against thyroid peroxidase, the hallmark serologic marker of Hashimoto thyroiditis',
        },
        {
          term: 'BRAF V600E',
          definition:
            'Most common driver mutation in papillary thyroid cancer, associated with aggressive features',
        },
        {
          term: 'psammoma bodies',
          definition:
            'Laminated calcified structures characteristic of papillary thyroid cancer on histology',
        },
        {
          term: 'TSH receptor antibodies (TRAb)',
          definition:
            'Autoantibodies that stimulate the TSH receptor causing unregulated thyroid hormone production in Graves disease',
        },
        {
          term: 'Burch-Wartofsky score',
          definition:
            'Clinical scoring system to assess likelihood of thyroid storm based on vital signs and organ dysfunction',
        },
      ],
      clinicalNotes:
        'In thyroid storm, give PTU first and wait at least 1 hour before administering iodine (Lugol solution or SSKI). If iodine is given before the thionamide blocks organification, the iodine load can paradoxically worsen thyrotoxicosis (Jod-Basedow effect). In myxedema coma, always administer stress-dose glucocorticoids before or concurrently with thyroid hormone replacement, as treating hypothyroidism can precipitate adrenal crisis in patients with undiagnosed coexistent adrenal insufficiency. For Bethesda III/IV nodules, molecular testing can reduce unnecessary surgeries by over 50%.',
    },

    4: {
      level: 4,
      summary:
        'Advanced thyroid disorder management incorporates molecular diagnostics for cancer risk stratification, targeted kinase inhibitor therapy for refractory thyroid cancer, evolving understanding of Graves ophthalmopathy pathogenesis with biologic therapies, and nuanced interpretation of thyroid function in non-thyroidal illness.',
      explanation: `## Molecular Pathogenesis of Thyroid Cancer

**MAPK Pathway Activation:**
- BRAF V600E -> constitutive activation of RAF-MEK-ERK signaling
- RAS mutations (NRAS, HRAS, KRAS) -> activate MAPK and PI3K/AKT
- RET/PTC rearrangements -> constitutive RET kinase activation (radiation-associated)
- NTRK fusions -> rare but targetable with larotrectinib/entrectinib

**PI3K/AKT Pathway:**
- PTEN loss -> activated in follicular and poorly differentiated thyroid cancer
- PIK3CA mutations -> commonly in anaplastic cancer
- Synergy with MAPK pathway in de-differentiation and aggressive behavior

**Genomic Landscape by Histotype:**

| Cancer Type | Driver Mutations | Pathway | Clinical Implications |
|-------------|-----------------|---------|----------------------|
| Papillary (classic) | BRAF V600E (45%) | MAPK | Aggressive variants, less RAI avid |
| Papillary (follicular variant) | RAS (30-40%) | MAPK/PI3K | Generally indolent |
| Follicular | RAS, PAX8-PPARg | PI3K/MAPK | Hematogenous spread |
| Medullary | RET (germline + somatic) | RET kinase | Targeted therapy available |
| Poorly differentiated | BRAF, RAS, TERT promoter | Multiple | TERT + BRAF = worst prognosis |
| Anaplastic | BRAF, TP53, TERT, PIK3CA | Multiple | Combination targeted therapy |

**TERT Promoter Mutations:**
- Present in 7-22% of differentiated and >70% of anaplastic thyroid cancers
- Co-occurrence with BRAF V600E = synergistic poor prognosis
- Associated with radioiodine resistance, distant metastasis, disease-related mortality
- Emerging as key prognostic biomarker

## Targeted Therapy for Thyroid Cancer

**Differentiated Thyroid Cancer (RAI-Refractory):**
- Lenvatinib (multi-kinase inhibitor: VEGFR, FGFR, RET, KIT): SELECT trial -- PFS 18.3 vs 3.6 months
- Sorafenib (multi-kinase inhibitor): DECISION trial -- PFS 10.8 vs 5.8 months
- BRAF + MEK inhibitor combination (dabrafenib + trametinib): FDA approved for BRAF V600E anaplastic thyroid cancer

**Medullary Thyroid Cancer:**
- Vandetanib (RET + VEGFR + EGFR inhibitor): ZETA trial
- Cabozantinib (RET + MET + VEGFR inhibitor): EXAM trial
- Selpercatinib (selective RET inhibitor): LIBRETTO-001 -- ORR 73% (treatment-naive), 69% (previously treated)
- Pralsetinib (selective RET inhibitor): ARROW trial

**Immunotherapy:**
- Limited single-agent activity in thyroid cancer
- Combination with targeted therapy under investigation
- Anaplastic thyroid cancer: Pembrolizumab with lenvatinib showing promise

## Graves Ophthalmopathy -- Advanced Management

**Pathogenesis Update:**
- TSH receptor and IGF-1 receptor co-activation on orbital fibroblasts
- CD34+ fibrocytes migrate to orbit and differentiate
- Th1-mediated inflammation (early active phase) -> Th2-mediated fibrosis (late inactive phase)
- IL-6, IL-1, TNF-alpha drive glycosaminoglycan accumulation
- Orbital volume expansion causes proptosis and motility restriction

**Teprotumumab (Tepezza):**
- IGF-1 receptor inhibitor (monoclonal antibody)
- Phase 3 OPTIC trial: 83% vs 10% proptosis response at 24 weeks
- First FDA-approved medical therapy for thyroid eye disease
- Dramatic reduction in proptosis, diplopia, and inflammatory signs
- Concerns: Hearing loss (10%), hyperglycemia, potential relapse after completion

**Management Algorithm:**
1. Mild/inactive: Observation, selenium supplementation, local measures
2. Moderate-severe active (CAS >= 3): Teprotumumab or IV glucocorticoid pulses
3. Sight-threatening (optic neuropathy): Urgent IV methylprednisolone +/- orbital decompression
4. Inactive with residual findings: Rehabilitative surgery (decompression -> strabismus -> eyelid)

## Non-Thyroidal Illness Syndrome (Sick Euthyroid)

**Pathophysiology:**
- Acute illness suppresses hypothalamic TRH and pituitary TSH
- Decreased peripheral T4-to-T3 conversion (reduced deiodinase 1 activity)
- Increased reverse T3 (rT3) production
- Cytokine-mediated suppression (IL-6, TNF-alpha, IL-1)

**Lab Pattern Progression:**
| Phase | TSH | Free T4 | Free T3 | rT3 |
|-------|-----|---------|---------|-----|
| Acute | Low/normal | Normal/low | Low | High |
| Severe/Prolonged | Low | Low | Low | High |
| Recovery | Elevated (transiently) | Normalizing | Normalizing | Normalizing |

**Clinical Approach:**
- Do NOT treat with thyroid hormone (no proven benefit, may worsen outcomes)
- Exception: Profound, persistent hypothyroxinemia in cardiac surgery patients (controversial)
- Recheck thyroid function 6-8 weeks after recovery
- Low T3 is the earliest and most common finding

## Subclinical Thyroid Disease

**Subclinical Hypothyroidism (elevated TSH, normal FT4):**
- Treat if: TSH >10, symptoms present, positive TPO antibodies, pregnancy, infertility
- Consider treatment: TSH 7-10 with risk factors
- Monitor: TSH 4.5-7 without symptoms or antibodies

**Subclinical Hyperthyroidism (low TSH, normal FT4/FT3):**
- Increased risk: Atrial fibrillation (3x risk if TSH <0.1), osteoporosis in postmenopausal women
- Treat if: TSH persistently <0.1 in patients >65 or with cardiac risk
- Monitor: TSH 0.1-0.4 in younger patients without comorbidities`,
      keyTerms: [
        {
          term: 'teprotumumab',
          definition:
            'IGF-1 receptor inhibitor, first FDA-approved therapy for Graves ophthalmopathy, dramatically reducing proptosis',
          pronunciation: 'teh-PRO-too-moo-mab',
        },
        {
          term: 'selpercatinib',
          definition:
            'Highly selective RET inhibitor for RET-mutant medullary thyroid cancer and RET-fusion thyroid cancers',
        },
        {
          term: 'TERT promoter mutation',
          definition:
            'Telomerase reverse transcriptase mutation conferring poor prognosis in thyroid cancer, especially with BRAF co-mutation',
        },
        {
          term: 'non-thyroidal illness syndrome',
          definition:
            'Abnormal thyroid function tests in critically ill patients not reflecting true thyroid disease; also called sick euthyroid syndrome',
        },
        {
          term: 'lenvatinib',
          definition:
            'Multi-kinase inhibitor targeting VEGFR, FGFR, and RET, approved for radioiodine-refractory differentiated thyroid cancer',
        },
        {
          term: 'reverse T3',
          definition:
            'Inactive thyroid metabolite that increases in non-thyroidal illness due to altered peripheral deiodination',
        },
      ],
      clinicalNotes:
        'Teprotumumab has transformed Graves ophthalmopathy management but costs approximately $300,000 per course and relapse may occur. For medullary thyroid cancer, selective RET inhibitors (selpercatinib, pralsetinib) have largely replaced older multi-kinase inhibitors as first-line systemic therapy due to superior selectivity and tolerability. TERT promoter mutation testing is increasingly used to risk-stratify differentiated thyroid cancer -- co-occurrence with BRAF V600E identifies a particularly high-risk subgroup requiring aggressive follow-up. In non-thyroidal illness, avoid thyroid hormone replacement; recheck after recovery.',
    },

    5: {
      level: 5,
      summary:
        'State-of-the-art thyroid care integrates next-generation molecular diagnostics, risk-adapted cancer management guided by ATA 2015 guidelines and dynamic risk stratification, emerging immunotherapy and redifferentiation strategies for refractory thyroid cancer, and evolving understanding of thyroid autoimmunity and precision medicine approaches.',
      explanation: `## Dynamic Risk Stratification in Differentiated Thyroid Cancer

**ATA 2015 Risk Stratification (Initial):**

| Risk Level | Criteria | Structural Recurrence |
|------------|----------|----------------------|
| Low | Intrathyroidal, N0, M0, no aggressive histology, no vascular invasion | 1-3% |
| Intermediate | Minor extrathyroidal extension, N1a, aggressive variant, BRAF V600E, minor vascular invasion | 8-23% |
| High | Gross extrathyroidal extension, N1b, M1, incomplete resection | 30-40% |

**Dynamic Risk Stratification (Response to Therapy):**

| Response | Definition | Recurrence | Action |
|----------|------------|------------|--------|
| Excellent | Negative imaging, suppressed Tg <0.2 or stimulated Tg <1 | 1-4% | Reduce follow-up intensity |
| Indeterminate | Non-specific findings, Tg mildly detectable | 15-20% | Continue surveillance |
| Biochemical incomplete | Abnormal Tg or rising Tg antibodies, negative imaging | ~20% | Observe or treat |
| Structural incomplete | Structural disease on imaging | 50-85% | Consider additional therapy |

**Key Principle:** Initial risk can be reclassified over time based on treatment response, allowing de-escalation in excellent responders and escalation in incomplete responders.

## Active Surveillance for Low-Risk Thyroid Cancer

**Paradigm Shift:**
- Papillary microcarcinoma (<1 cm, intrathyroidal, no nodes): Active surveillance is a viable alternative to immediate surgery
- Kuma Hospital (Japan) data: 1,235 patients followed 10+ years
  - Only 8% showed tumor growth >= 3 mm
  - Lymph node metastasis in 3.8%
  - No disease-specific mortality
  - Most who eventually had surgery were cured

**Criteria for Active Surveillance:**
- Tumor <1.0-1.5 cm
- No extrathyroidal extension
- No suspicious lymph nodes
- Not adjacent to trachea or recurrent laryngeal nerve
- Patient preference and reliable follow-up
- No aggressive cytology features

## Redifferentiation Strategies for RAI-Refractory Cancer

**Concept:** Restore iodine avidity in dedifferentiated thyroid cancer

**MAPK Pathway Inhibition:**
- Selumetinib (MEK inhibitor): Phase 2 showed RAI re-uptake in 12/20 patients with BRAF or NRAS mutations
- Dabrafenib/trametinib followed by RAI: Case series showing restoration of RAI avidity
- Ongoing trials combining targeted therapy with RAI

**Mechanisms of RAI Resistance:**
- Loss of NIS (sodium-iodide symporter) expression
- Loss of TSH receptor expression
- Defective iodine organification
- All driven by constitutive MAPK pathway activation

**Clinical Protocol (Investigational):**
1. Molecular profiling of tumor
2. Select targeted therapy (BRAF inhibitor for BRAF-mutant, MEK inhibitor for RAS-mutant)
3. Treat 4-6 weeks
4. Repeat RAI scan (diagnostic I-123 or I-131)
5. If RAI-avid: Administer therapeutic RAI
6. Continue monitoring

## Immunotherapy in Thyroid Cancer

**Checkpoint Inhibitors:**
- Limited single-agent activity in differentiated thyroid cancer (low TMB, immunologically cold)
- Anaplastic thyroid cancer: Higher TMB, better candidates
  - Pembrolizumab + lenvatinib: Phase 2 data showing improved responses
  - Spartalizumab (anti-PD-1): Phase 2 in anaplastic showing partial responses

**Combination Strategies:**
- BRAF/MEK + anti-PD-1: Rationale that MAPK inhibition increases tumor antigen presentation
- Lenvatinib + pembrolizumab: Leveraging VEGFR inhibition-mediated immune modulation

## Precision Medicine in Thyroid Autoimmunity

**Genetic Architecture of Autoimmune Thyroid Disease:**
- HLA class II: DR3 (Graves), DR4/DR5 (Hashimoto)
- Non-HLA: CTLA4, PTPN22, FOXP3, CD40, TSHR polymorphisms
- Shared susceptibility with other autoimmune conditions (T1DM, celiac)
- Epigenetic modifications: DNA methylation, histone modification, microRNAs

**Emerging Biomarkers:**
- Th17/Treg ratio: Correlates with disease activity
- Circulating thyroid-specific T cells: Research tool for monitoring
- MicroRNA signatures: Potential diagnostic and prognostic utility

**Novel Therapeutic Targets:**
- Anti-CD20 (rituximab): For severe Graves ophthalmopathy
- Mycophenolate mofetil: For Graves ophthalmopathy
- Tocilizumab (anti-IL-6): Case series in refractory Graves ophthalmopathy
- Small molecule TSHR antagonists: Preclinical development

## Thyroid Cancer in Pregnancy

**Management Principles:**
- FNA safe during pregnancy
- Surgery if needed: Ideally second trimester
- RAI absolutely contraindicated during pregnancy and breastfeeding
- Monitor: Thyroglobulin, ultrasound
- Most papillary thyroid cancers can be monitored until postpartum for definitive treatment
- TSH suppression: Maintain on levothyroxine but avoid severe suppression

## Emerging Technologies

**Molecular Testing Evolution:**
- Whole-exome sequencing of thyroid nodules
- Liquid biopsy: Circulating tumor DNA for monitoring recurrence
- AI-assisted ultrasound interpretation (reducing operator dependence)
- Radiomic features on ultrasound for malignancy prediction

**Next-Generation Therapeutics:**
- RET-specific inhibitors: Next-generation agents overcoming resistance mutations (e.g., pralsetinib, selpercatinib resistance)
- ETV6-NTRK3 fusion targeting (larotrectinib, entrectinib, repotrectinib)
- BRAF V600E + anti-EGFR combinations
- Antibody-drug conjugates targeting thyroid-specific antigens`,
      keyTerms: [
        {
          term: 'dynamic risk stratification',
          definition:
            'Reclassification of thyroid cancer risk over time based on treatment response rather than fixed initial staging',
        },
        {
          term: 'active surveillance',
          definition:
            'Monitoring small low-risk papillary thyroid microcarcinomas with serial imaging instead of immediate surgery',
        },
        {
          term: 'redifferentiation therapy',
          definition:
            'Using targeted therapies (MEK/BRAF inhibitors) to restore radioiodine avidity in RAI-refractory thyroid cancer',
        },
        {
          term: 'NIS (sodium-iodide symporter)',
          definition:
            'Thyroid cell membrane protein responsible for iodine uptake; its loss causes radioiodine resistance in dedifferentiated cancers',
        },
        {
          term: 'ThyroSeq v3',
          definition:
            'Next-generation sequencing panel analyzing 112 genes for thyroid nodule molecular classification',
        },
        {
          term: 'Afirma GSC',
          definition:
            'Genomic sequencing classifier using gene expression to rule out malignancy in indeterminate thyroid nodules',
        },
      ],
      clinicalNotes:
        'The paradigm in differentiated thyroid cancer management has shifted significantly. Active surveillance is now endorsed by ATA guidelines for papillary microcarcinomas meeting strict criteria, reflecting data showing minimal progression risk. Dynamic risk stratification allows de-escalation of monitoring in excellent responders, reducing unnecessary testing and patient anxiety. For RAI-refractory disease, redifferentiation with MAPK inhibitors before RAI is a promising strategy, though not yet standard of care. Selective RET inhibitors represent a major advance for medullary thyroid cancer and RET-fusion cancers. The ATA strongly recommends germline RET testing for all medullary thyroid cancer patients, as 25% harbor hereditary mutations requiring family screening and prophylactic thyroidectomy in mutation carriers.',
    },
  },

  media: [],
  citations: [
    {
      id: 'ata-thyroid-nodule-2015',
      type: 'article',
      title:
        '2015 American Thyroid Association Management Guidelines for Adult Patients with Thyroid Nodules and Differentiated Thyroid Cancer',
      authors: ['Haugen BR', 'Alexander EK', 'Bible KC', 'et al.'],
      source: 'Thyroid',
    },
    {
      id: 'bethesda-system-2023',
      type: 'article',
      title:
        'The Bethesda System for Reporting Thyroid Cytopathology, Third Edition',
      authors: ['Ali SZ', 'Baloch ZW', 'Cochand-Priollet B', 'et al.'],
      source: 'Thyroid',
    },
    {
      id: 'teprotumumab-optic',
      type: 'article',
      title:
        'Teprotumumab for Thyroid-Associated Ophthalmopathy (OPTIC Trial)',
      authors: ['Douglas RS', 'Kahaly GJ', 'Patel A', 'et al.'],
      source: 'New England Journal of Medicine',
    },
    {
      id: 'selpercatinib-libretto',
      type: 'article',
      title:
        'Selpercatinib in RET-Mutant Thyroid Cancers (LIBRETTO-001)',
      authors: ['Wirth LJ', 'Sherman E', 'Robinson B', 'et al.'],
      source: 'New England Journal of Medicine',
    },
  ],
  crossReferences: [
    {
      targetId: 'condition-hypothyroidism',
      targetType: 'condition',
      relationship: 'child',
      label: 'Hypothyroidism',
    },
    {
      targetId: 'condition-hyperthyroidism',
      targetType: 'condition',
      relationship: 'child',
      label: 'Hyperthyroidism',
    },
    {
      targetId: 'condition-thyroid-nodules',
      targetType: 'condition',
      relationship: 'child',
      label: 'Thyroid Nodules',
    },
    {
      targetId: 'condition-thyroid-cancer',
      targetType: 'condition',
      relationship: 'child',
      label: 'Thyroid Cancer',
    },
    {
      targetId: 'endocrine-autoimmune-polyglandular',
      targetType: 'condition',
      relationship: 'related',
      label: 'Autoimmune Polyglandular Syndromes',
    },
  ],
  tags: {
    systems: ['endocrine'],
    topics: [
      'thyroid',
      'endocrinology',
      'autoimmune',
      'oncology',
      'emergency medicine',
    ],
    keywords: [
      'thyroid',
      'hypothyroidism',
      'hyperthyroidism',
      'Graves disease',
      'Hashimoto',
      'thyroid nodule',
      'Bethesda',
      'thyroid cancer',
      'papillary',
      'medullary',
      'thyroid storm',
      'myxedema coma',
      'BRAF',
      'RET',
      'teprotumumab',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'endocrinology', 'surgery'],
    },
  },
  createdAt: '2025-01-30T00:00:00.000Z',
  updatedAt: '2025-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default thyroidDisorders;
