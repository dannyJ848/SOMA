/**
 * Prolactinoma - Comprehensive Educational Content
 *
 * Prolactin-secreting pituitary adenoma, the most common
 * functioning pituitary tumor.
 */

import { EducationalContent } from '../../types';

export const prolactinoma: EducationalContent = {
  id: 'condition-prolactinoma',
  type: 'condition',
  name: 'Prolactinoma',
  nameEs: 'Prolactinoma',
  alternateNames: ['Lactotroph Adenoma', 'Prolactin-secreting Adenoma', 'PRL-secreting Pituitary Tumor'],
  hpoId: 'HP:0002893',

  levels: {
    1: {
      level: 1,
      summary: 'A prolactinoma is a non-cancerous tumor in the pituitary gland that makes too much prolactin, a hormone normally involved in breast milk production.',
      explanation: `**What Is a Prolactinoma?**

The pituitary gland normally makes prolactin, a hormone that helps produce breast milk. A prolactinoma is a small, non-cancerous tumor that makes too much prolactin.

**Symptoms in Women:**
- Irregular or missed periods
- Breast milk when not pregnant or nursing
- Difficulty getting pregnant
- Headaches

**Symptoms in Men:**
- Decreased interest in sex
- Erectile dysfunction
- Breast enlargement
- Headaches and vision problems (tumors often larger in men)

**Treatment:**
- Medications (pills) work very well for most people
- The tumor usually shrinks with medication
- Surgery is rarely needed
- Most people live completely normal lives with treatment`,
      keyTerms: [
        { term: 'prolactin', definition: 'A hormone that helps produce breast milk; too much can cause reproductive problems' },
        { term: 'pituitary gland', definition: 'A pea-sized gland at the base of the brain that controls many hormones' },
        { term: 'galactorrhea', definition: 'Producing breast milk when not pregnant or nursing' },
      ],
      analogies: [
        'A prolactinoma is like a thermostat stuck on high -- it keeps making more prolactin even when the body does not need it.',
      ],
      examples: [
        'A young woman who stops getting her period and notices milky discharge from her breasts may have a prolactinoma.',
      ],
    },
    2: {
      level: 2,
      summary: 'Prolactinomas are the most common functioning pituitary adenomas, causing hyperprolactinemia with hypogonadism and galactorrhea. Dopamine agonists (cabergoline) are first-line, normalizing prolactin and shrinking tumors in >80% of cases.',
      explanation: `## Epidemiology
- Most common pituitary adenoma (40% of all)
- More common in women (diagnosed earlier due to menstrual changes)
- Men present later with larger tumors and mass effects

## Classification by Size
| Type | Size | Prolactin Level |
|------|------|-----------------|
| Microprolactinoma | <10 mm | Usually <200 ng/mL |
| Macroprolactinoma | >=10 mm | Usually >200 ng/mL |
| Giant prolactinoma | >40 mm | Often >1000 ng/mL |

**Rule of Thumb:** Prolactin level correlates with tumor size.

## Clinical Presentation

**Hyperprolactinemia Effects:**
- Women: Oligomenorrhea/amenorrhea, galactorrhea, infertility, low estrogen
- Men: Decreased libido, erectile dysfunction, infertility, gynecomastia
- Both: Osteoporosis (from hypogonadism), mood changes

**Mass Effects (Macroadenomas):**
- Bitemporal hemianopsia (optic chiasm compression)
- Headache
- Cranial nerve palsies (cavernous sinus invasion)
- Hypopituitarism

## Differential Diagnosis of Elevated Prolactin
- Medications (antipsychotics, metoclopramide, SSRIs)
- Pregnancy and lactation
- Hypothyroidism (TRH stimulates prolactin)
- Stalk effect (non-functioning adenoma compressing stalk)
- Renal failure

## Treatment

**Dopamine Agonists (First-Line):**
| Drug | Dose | Advantages |
|------|------|------------|
| Cabergoline | 0.25-1 mg twice weekly | More effective, fewer side effects, preferred |
| Bromocriptine | 2.5-15 mg daily | Cheaper, safe in pregnancy (more data) |

**Response:** Prolactin normalizes in 80-90%; tumor shrinks in 70-80%

**Surgery:** Reserved for medication intolerance/resistance or CSF leak

**Monitoring:** Prolactin levels, MRI follow-up`,
      keyTerms: [
        { term: 'dopamine agonist', definition: 'Medication that mimics dopamine, which naturally inhibits prolactin release' },
        { term: 'cabergoline', definition: 'Preferred dopamine agonist for prolactinomas; taken twice weekly' },
        { term: 'stalk effect', definition: 'Mild prolactin elevation from disrupted dopamine delivery to pituitary via compressed stalk' },
        { term: 'hook effect', definition: 'Lab artifact where very high prolactin reads falsely low; request serial dilutions' },
      ],
      analogies: [
        'Dopamine is the natural brake pedal for prolactin. A dopamine agonist presses that brake harder to bring prolactin levels down.',
      ],
    },
    3: {
      level: 3,
      summary: 'Prolactinoma management requires distinguishing true prolactinomas from stalk effect, recognizing the hook effect in giant tumors, and addressing special scenarios including pregnancy, medication resistance, and dopamine agonist withdrawal.',
      explanation: `## Diagnostic Approach

**Prolactin Level Interpretation:**
\`\`\`
Prolactin Levels and Likely Cause:
- 25-100 ng/mL: Medications, stalk effect, microprolactinoma
- 100-200 ng/mL: Microprolactinoma, macroprolactinoma
- >200 ng/mL: Macroprolactinoma (almost certain)
- >1000 ng/mL: Giant prolactinoma

Stalk Effect vs Prolactinoma:
- Stalk effect: PRL usually <100-150 ng/mL
- True prolactinoma: PRL proportional to size
- Large tumor with PRL <100: Suspect stalk effect -> non-functioning adenoma
\`\`\`

**Hook Effect:**
- In giant prolactinomas with very high PRL (>10,000)
- Immunoassay saturated -> falsely normal/low result
- Always request 1:100 dilution for macroadenomas
- Clinical clue: Large tumor with unexpectedly low PRL

## Medical Management Details

**Cabergoline Protocol:**
- Start: 0.25 mg twice weekly
- Titrate: Increase by 0.25 mg every 4 weeks
- Target: Normal prolactin + symptom resolution
- Maximum: 3 mg/week (higher with cardiac monitoring)
- Duration: Minimum 2 years before withdrawal trial

**Withdrawal Trial:**
\`\`\`
Criteria to Attempt Withdrawal:
1. Normal prolactin for >= 2 years on cabergoline
2. Significant tumor shrinkage (>50%) or no visible tumor
3. No chiasmal compression

Protocol:
- Taper dose gradually over 2-3 months
- Check PRL at 3, 6, 12 months post-discontinuation
- MRI at 12 months
- Recurrence rate: 30-50% (higher with macroadenomas)
\`\`\`

## Special Scenarios

**Pregnancy:**
- Stop cabergoline once pregnancy confirmed
- Bromocriptine has longer safety record (may switch pre-conception)
- Microprolactinomas: <5% symptomatic enlargement
- Macroprolactinomas: 20-30% enlargement risk
- Monitor: Visual symptoms each trimester; MRI if symptomatic
- PRL levels unreliable during pregnancy (normally elevated)

**Medication-Resistant Prolactinomas:**
- Definition: Failure to normalize PRL on max-dose cabergoline
- Occurs in 10-15% of patients
- Options: Transsphenoidal surgery, radiation, temozolomide (aggressive)

**Cardiac Valvulopathy Concerns:**
- High-dose cabergoline (Parkinson doses) causes valvular fibrosis
- Prolactinoma doses (much lower) appear safe
- Echocardiographic surveillance if >2 mg/week
- Clinically significant disease rare at standard doses`,
      keyTerms: [
        { term: 'hook effect', definition: 'Lab artifact causing falsely low prolactin reading in giant prolactinomas; request serial dilutions' },
        { term: 'dopamine agonist withdrawal', definition: 'Supervised trial of stopping medication after sustained remission to assess for cure' },
        { term: 'temozolomide', definition: 'Alkylating chemotherapy agent used for aggressive/malignant prolactinomas' },
      ],
      clinicalNotes: 'Always request diluted prolactin for large pituitary masses -- a falsely normal PRL due to hook effect can lead to unnecessary surgery on a treatable prolactinoma. In pregnancy, microprolactinomas rarely enlarge and can be observed clinically. Macroprolactinomas should ideally be debulked before conception.',
    },
    4: {
      level: 4,
      summary: 'Advanced prolactinoma management addresses aggressive/malignant tumors, molecular pathology, DRD2 receptor biology, estrogen receptor interactions, and evolving strategies for dopamine agonist-resistant disease.',
      explanation: `## Molecular Pathology

**Dopamine Receptor Biology:**
- D2 receptor (DRD2): Primary target on lactotrophs
- DRD2 long isoform: Mediates antiproliferative effects
- DRD2 short isoform: May be less responsive
- Resistance: Often correlates with reduced DRD2 expression

**Genetic Associations:**
| Gene | Syndrome | Features |
|------|----------|----------|
| MEN1 | MEN type 1 | Prolactinoma + parathyroid + pancreatic |
| AIP | FIPA | Young onset, macroadenomas, poor DA response |
| CDKN1B | MEN4 | Similar to MEN1 |

**Estrogen-Prolactin Axis:**
- Estrogen stimulates lactotroph proliferation
- Explains female predominance of microprolactinomas
- Oral contraceptives generally safe with treated prolactinoma
- Estrogen replacement for hypogonadism appropriate when PRL controlled

## Aggressive Prolactinomas

**Definition:**
- Rapidly growing despite medical therapy
- High Ki-67 (>3%), p53 positive
- Invasion of surrounding structures
- WHO classification: Now termed "high-risk" PitNETs

**Management Ladder:**
1. Maximal cabergoline (up to 7-11 mg/week with cardiac monitoring)
2. Transsphenoidal surgery (debulking)
3. Radiation (stereotactic radiosurgery preferred)
4. Temozolomide (150-200 mg/m2, 5/28-day cycles)
   - MGMT promoter methylation predicts response
   - Response rate: 40-60%
   - Duration: Minimum 3 cycles, continue if responding

## Prolactin Carcinoma

- Defined by craniospinal or systemic metastases
- Extremely rare (<0.5% of pituitary tumors)
- Most arise from pre-existing aggressive prolactinomas
- Treatment: Temozolomide + radiation + surgery
- Prognosis: Poor (median survival ~4 years)

## Lactotroph Hyperplasia vs Adenoma

**Conditions Causing Hyperplasia:**
- Pregnancy and lactation
- Primary hypothyroidism (TRH-driven)
- Estrogen therapy
- Stalk section

**Key Difference:** Hyperplasia resolves when stimulus removed; adenoma persists

## Male Prolactinomas

**Clinical Distinctions:**
- Typically macroadenomas at diagnosis (delayed recognition)
- Higher prolactin levels on average
- More invasive, potentially more aggressive
- Testosterone replacement may be needed alongside DA therapy
- Monitor bone density (prolonged hypogonadism)`,
      keyTerms: [
        { term: 'DRD2 long isoform', definition: 'Dopamine D2 receptor splice variant mediating antiproliferative response to dopamine agonists' },
        { term: 'MGMT methylation', definition: 'Epigenetic marker predicting temozolomide response in aggressive pituitary tumors' },
        { term: 'lactotroph hyperplasia', definition: 'Diffuse proliferation of prolactin-producing cells from physiological or pathological stimulation' },
      ],
      clinicalNotes: 'Male prolactinomas are frequently under-diagnosed and present with larger, more invasive tumors. Low testosterone in men should prompt prolactin measurement. Aggressive prolactinomas should be managed at tertiary pituitary centers with access to temozolomide, radiation, and expert neurosurgery.',
    },
    5: {
      level: 5,
      summary: 'Contemporary prolactinoma research explores novel dopamine receptor modulators, immunotherapy for aggressive tumors, fertility optimization strategies, and precision approaches based on molecular tumor profiling.',
      explanation: `## Novel Therapeutic Approaches

**Next-Generation Dopamine Agonists:**
- Quinagolide: Non-ergot D2 agonist (available in Europe)
- No cardiac valvulopathy risk (non-ergot derived)
- May benefit bromocriptine/cabergoline-intolerant patients

**Immunotherapy Potential:**
- Checkpoint inhibitors (anti-PD-1/PD-L1) in aggressive PitNETs
- Case reports of responses in pituitary carcinoma
- PD-L1 expression variable in pituitary tumors
- Combination with temozolomide under investigation

**Targeted Therapies:**
| Target | Agent | Rationale |
|--------|-------|-----------|
| mTOR | Everolimus | PI3K/mTOR pathway active in DA-resistant tumors |
| VEGF | Bevacizumab | Antiangiogenic; case reports of response |
| EGFR | Lapatinib | EGFR overexpressed in some prolactinomas |

## Fertility Management

**Women:**
\`\`\`
Pre-conception:
- Normalize PRL and restore ovulation
- Consider switching to bromocriptine (more pregnancy data)
- Shrink macroadenomas before conception

During Pregnancy:
- Stop DA at positive pregnancy test (microprolactinoma)
- Continue DA through first trimester if macroadenoma near chiasm
- Visual field monitoring each trimester
- MRI without gadolinium if symptomatic expansion

Breastfeeding:
- Generally safe (cabergoline suppresses lactation)
- Bromocriptine compatible with partial breastfeeding
\`\`\`

**Men:**
- DA therapy may restore fertility (normalizing PRL restores gonadotropins)
- If persistent azoospermia: Consider gonadotropin therapy (hCG + FSH)
- Testosterone replacement does NOT restore fertility

## Molecular Predictors of DA Resistance

**Expression Profiles:**
- Low DRD2 (especially long isoform): Poor response
- High E-cadherin: Associated with resistance
- TGF-beta pathway activation
- Filamin A (scaffolding protein for DRD2): Low = resistance
- ERalpha overexpression: May promote proliferation

**Epigenetic Mechanisms:**
- DRD2 promoter methylation -> reduced expression
- MicroRNA dysregulation (miR-93, miR-21)
- Histone modifications affecting DRD2 transcription

## Long-Term Outcomes

**Natural History of Treated Prolactinomas:**
- Many microprolactinomas regress spontaneously over decades
- Successful withdrawal more likely with smaller residual tumors
- Malignant transformation exceedingly rare
- Long-term cure (sustained remission off medication): 30-70%

**Emerging Monitoring Strategies:**
- Cell-free DNA for aggressive tumor surveillance
- Prolactin isoform analysis (big-big prolactin = macroprolactinemia, benign)
- Radiomics: MRI-based AI texture analysis for tumor behavior prediction

## Future Directions
- Biased D2 receptor agonists (preferential signaling)
- siRNA targeting prolactin gene expression
- CAR-T cells for pituitary carcinoma (preclinical)
- Patient-derived organoids for drug sensitivity testing`,
      keyTerms: [
        { term: 'filamin A', definition: 'Cytoskeletal protein that scaffolds DRD2; reduced expression linked to dopamine agonist resistance' },
        { term: 'macroprolactinemia', definition: 'Elevated prolactin due to biologically inactive big-big prolactin complexes; clinically insignificant' },
        { term: 'quinagolide', definition: 'Non-ergot dopamine agonist without cardiac valvulopathy risk; available in select countries' },
      ],
      clinicalNotes: 'Before diagnosing prolactinoma, always rule out macroprolactinemia by requesting PEG precipitation or gel filtration chromatography -- macroprolactinemia accounts for up to 25% of hyperprolactinemia and requires no treatment. Molecular profiling of DA-resistant tumors may guide targeted therapy selection in the future.',
    },
  },

  media: [],
  citations: [
    {
      id: 'melmed-prolactinoma-2020',
      type: 'article',
      title: 'Diagnosis and Treatment of Hyperprolactinemia',
      authors: ['Melmed S', 'Casanueva FF', 'Hoffman AR', 'et al.'],
      source: 'Endocrine Society Clinical Practice Guideline',
    },
  ],
  crossReferences: [
    { targetId: 'condition-pituitary-adenomas', targetType: 'condition', relationship: 'parent', label: 'Pituitary Adenomas' },
    { targetId: 'condition-acromegaly', targetType: 'condition', relationship: 'sibling', label: 'Acromegaly' },
    { targetId: 'condition-diabetes-insipidus', targetType: 'condition', relationship: 'see-also', label: 'Diabetes Insipidus' },
    { targetId: 'anatomy-pituitary-gland', targetType: 'structure', relationship: 'related', label: 'Pituitary Gland' },
  ],
  tags: {
    systems: ['endocrine', 'reproductive'],
    topics: ['endocrinology', 'neurosurgery', 'pituitary', 'reproductive medicine'],
    keywords: ['prolactinoma', 'prolactin', 'dopamine agonist', 'cabergoline', 'hyperprolactinemia', 'galactorrhea'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'endocrinology', 'obgyn'] },
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default prolactinoma;
