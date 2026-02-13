/**
 * Hyponatremia - Nephrology Educational Content
 */
import { EducationalContent } from '../../../types';

export const hyponatremia: EducationalContent = {
  id: 'nephro-hyponatremia',
  type: 'condition',
  name: 'Hyponatremia',
  nameEs: 'Hiponatremia',
  alternateNames: ['Low Sodium', 'Hyponatraemia'],
  hpoId: 'HP:0002902',
  levels: {
    1: {
      level: 1,
      summary: 'Hyponatremia means the sodium level in your blood is too low, which can cause symptoms from mild confusion to seizures if severe.',
      explanation: `Sodium is a mineral in your blood that helps control how much water is in and around your cells. When sodium gets too low, water moves into your cells and makes them swell -- especially dangerous in the brain.

**Symptoms:** Mild -- headache, nausea, confusion. Severe -- seizures, coma.

**Common causes:**
- Drinking too much water
- Certain medications (especially "water pills" / thiazide diuretics)
- Heart failure, liver cirrhosis, kidney problems
- A hormone problem called SIADH

**Important:** Sodium must be corrected slowly to avoid a dangerous brain condition called osmotic demyelination.`,
      keyTerms: [
        { term: 'sodium', definition: 'A mineral in your blood that helps balance water in your body' },
        { term: 'SIADH', definition: 'A condition where too much of a water-retaining hormone is made, diluting your blood sodium' },
      ],
      analogies: ['Sodium is like salt in soup -- too much water dilutes the soup (blood), making the sodium concentration too low.'],
      patientCounselingPoints: ['Don\'t restrict fluids on your own without medical guidance.', 'Tell your doctor about all medications, especially diuretics.'],
    },
    2: {
      level: 2,
      summary: 'Hyponatremia (serum Na <135 mEq/L) is the most common electrolyte disorder, classified by volume status and osmolality, with SIADH, thiazides, and heart failure as leading causes.',
      explanation: `## Classification by Osmolality
- **Hypotonic (true):** Serum osmolality <280; most common
- **Isotonic:** Pseudohyponatremia (hyperlipidemia, paraproteinemia)
- **Hypertonic:** Dilutional from glucose (corrected Na = measured + 1.6 per 100 mg/dL glucose above 100)

## Hypotonic Hyponatremia by Volume Status
| Volume Status | Causes | Urine Na |
|--------------|--------|----------|
| Hypovolemic | Vomiting, diarrhea, diuretics, adrenal insufficiency | <20 (extrarenal) or >20 (renal) |
| Euvolemic | SIADH, hypothyroidism, cortisol deficiency, psychogenic polydipsia | >20 (SIADH) |
| Hypervolemic | Heart failure, cirrhosis, nephrotic syndrome | <20 (avid retention) |

## SIADH Criteria (Bartter & Schwartz)
- Serum Na <135, serum osmolality <275
- Urine osmolality >100 (inappropriately concentrated)
- Urine sodium >30
- Euvolemic, no diuretics, no thyroid/adrenal insufficiency

## Treatment Approach
- **Acute symptomatic:** 3% hypertonic saline; raise Na by 1-2 mEq/L/hr until symptoms improve
- **Chronic:** Fluid restriction, salt tabs, treat underlying cause
- **Correction limit:** No more than 8-10 mEq/L in 24 hours to prevent osmotic demyelination syndrome`,
      keyTerms: [
        { term: 'SIADH', definition: 'Syndrome of inappropriate ADH secretion; excess ADH causes water retention and dilutional hyponatremia' },
        { term: 'osmotic demyelination syndrome', definition: 'Brain damage from correcting sodium too quickly; also called central pontine myelinolysis' },
        { term: 'pseudohyponatremia', definition: 'Falsely low sodium reading from high lipids or proteins displacing plasma water' },
        { term: 'hypertonic saline', definition: '3% NaCl solution used for emergency treatment of severe symptomatic hyponatremia' },
      ],
    },
    3: {
      level: 3,
      summary: 'Hyponatremia management requires systematic evaluation of tonicity, volume status, urine studies, and identification of underlying etiology, with correction rates carefully limited to prevent osmotic demyelination syndrome.',
      explanation: `## Pathophysiology
- ADH (vasopressin) is the master regulator of water balance
- ADH inserts aquaporin-2 channels in collecting duct principal cells
- "Appropriate" ADH: Response to hypovolemia, hypotension (overrides osmolality)
- "Inappropriate" ADH (SIADH): Autonomous secretion despite low osmolality

**SIADH Etiologies:**
- CNS: Stroke, hemorrhage, infection, trauma
- Pulmonary: Pneumonia, TB, positive pressure ventilation
- Medications: SSRIs, carbamazepine, cyclophosphamide, opioids, ecstasy
- Malignancy: Small cell lung cancer (#1 malignant cause), head/neck cancers
- Pain, nausea, postoperative state

## Diagnostic Algorithm
1. Confirm true hypotonic hyponatremia (measure serum osmolality)
2. Assess urine osmolality: >100 = ADH-mediated; <100 = primary polydipsia or low solute (beer potomania)
3. Assess urine sodium: >30 = SIADH, diuretics, adrenal insufficiency; <20 = low effective arterial volume
4. Clinical volume assessment (imperfect -- use urine studies to guide)

## Correction Strategies
- **Severe symptoms (seizures, obtundation):** 100 mL bolus of 3% NaCl over 10 min, repeat x2 if needed
- **Goal:** 4-6 mEq/L in first 6 hours for symptom relief
- **24-hour limit:** 8 mEq/L (10 in low-risk patients; 6 in high-risk: alcoholism, malnutrition, hypokalemia, liver disease)
- **Overcorrection rescue:** DDAVP 2 mcg IV q8h + D5W to relower sodium

## SIADH Treatment
- Fluid restriction (500-1000 mL/day) -- first-line
- Salt tablets + loop diuretic (increase free water excretion)
- Urea (30-60 g/day) -- increasing use in Europe
- Vaptans (tolvaptan): V2 receptor antagonist; effective but risk of overcorrection; do NOT use in liver disease`,
      keyTerms: [
        { term: 'aquaporin-2', definition: 'Water channel inserted into collecting duct by ADH; allows water reabsorption' },
        { term: 'tolvaptan', definition: 'Oral vasopressin V2 receptor antagonist; promotes free water excretion in SIADH' },
        { term: 'beer potomania', definition: 'Hyponatremia from low solute intake (beer, tea-toast diet); low urine osmolality; impaired free water excretion' },
        { term: 'DDAVP clamp', definition: 'Technique of administering DDAVP to prevent overly rapid sodium correction by holding ADH constant' },
      ],
      clinicalNotes: 'Always check thyroid function and cortisol before diagnosing SIADH. Urine osmolality is the single most important test -- if <100 mOsm, ADH is suppressed and the problem is excessive water intake or low solute.',
    },
    4: {
      level: 4,
      summary: 'Advanced hyponatremia management involves proactive DDAVP clamping protocols, recognition of high-risk populations for osmotic demyelination, management of exercise-associated hyponatremia, and emerging therapies including oral urea and novel vasopressin antagonists.',
      explanation: `## Proactive Correction Strategies

**DDAVP Clamp Protocol:**
1. Administer DDAVP 2 mcg IV at start of correction
2. Co-administer 3% NaCl to raise Na at controlled rate
3. DDAVP prevents unpredictable water diuresis (common when underlying cause resolves)
4. Redose DDAVP every 8 hours, titrate 3% NaCl to achieve target correction
5. Eliminates most overcorrection events

**Risk Factors for Osmotic Demyelination:**
- Chronic hyponatremia (>48h), Na <120
- Alcoholism, malnutrition
- Hypokalemia (correcting K raises Na!)
- Liver disease, transplant recipients
- Hypoxia concurrent with hyponatremia

**Osmotic Demyelination Syndrome:**
- Classically: Central pontine myelinolysis (locked-in syndrome)
- Extrapontine involvement common (basal ganglia, cerebellum)
- MRI changes lag 2-4 weeks behind symptoms
- Treatment: Relower sodium, supportive; plasmapheresis (case reports)

## Special Populations

**Exercise-Associated Hyponatremia (EAH):**
- Endurance athletes overdrinking hypotonic fluids
- Non-osmotic ADH release from exercise, nausea, NSAIDs
- Encephalopathy/death if unrecognized
- Treatment: Hypertonic saline (NOT isotonic); restrict fluids

**Cerebral Salt Wasting vs SIADH:**
| Feature | SIADH | CSW |
|---------|-------|-----|
| Volume | Euvolemic | Hypovolemic |
| Urine output | Normal/low | High |
| Treatment | Fluid restriction | Saline replacement |
Context: Post-neurosurgery, SAH; CSW is rarer than once thought

**Reset Osmostat:**
- ADH regulated around a lower set point
- Serum Na stable at 125-130; concentrates and dilutes normally around new set point
- No treatment needed

## Pharmacotherapy Deep Dive
- **Tolvaptan:** Start 15 mg; max 60 mg; hepatotoxicity risk (do not use >30 days; avoid in liver disease)
- **Conivaptan:** IV vaptan; CYP3A4 inhibitor (drug interactions)
- **Oral urea:** 15-60 g/day; effective, safe, inexpensive; poor palatability (mix with orange juice)
- **Loop diuretic + salt tabs:** Practical outpatient strategy for chronic SIADH`,
      keyTerms: [
        { term: 'DDAVP clamp', definition: 'Proactive protocol using exogenous DDAVP to prevent uncontrolled water diuresis and overcorrection during hyponatremia treatment' },
        { term: 'exercise-associated hyponatremia', definition: 'Potentially fatal hyponatremia in endurance athletes from overhydration and non-osmotic ADH release' },
        { term: 'reset osmostat', definition: 'Variant of SIADH where ADH regulation occurs around a lower osmolality set point; benign condition' },
        { term: 'central pontine myelinolysis', definition: 'Demyelination of basis pontis from overly rapid sodium correction; may cause quadriplegia, locked-in syndrome' },
      ],
      clinicalNotes: 'The proactive DDAVP clamp approach is increasingly replacing reactive management for severe hyponatremia. Always account for potassium correction -- each mEq of K administered raises serum Na equivalently. In suspected SIADH, always rule out adrenal insufficiency with morning cortisol.',
    },
    5: {
      level: 5,
      summary: 'Contemporary hyponatremia research addresses molecular mechanisms of osmotic demyelination, precision approaches to water balance disorders, copeptin-based diagnostics, and outcomes data driving protocol-based correction strategies.',
      explanation: `## Molecular Mechanisms and Novel Insights

**Osmotic Demyelination Pathophysiology:**
- Rapid osmolality changes damage oligodendrocytes (organic osmolyte depletion)
- Complement activation and microglial inflammation
- Blood-brain barrier disruption at correction rates >8 mEq/L/24h
- Animal models: Minocycline, dexamethasone may be protective
- Clinical data: Outcomes better than historically reported when caught early and sodium relowered

**Copeptin as Diagnostic Tool:**
- Copeptin: C-terminal fragment of pro-vasopressin; stable, easy to measure (unlike ADH)
- Copeptin <30 pmol/L with polyuria: Central diabetes insipidus
- Copeptin-based algorithm distinguishes SIADH subtypes and guides therapy selection
- Replacing water deprivation test in some centers for DI diagnosis

## Evidence-Based Correction Targets (2023 European Guidelines)
- Limit correction to 10 mEq/L in first 24h and 8 mEq/L in any subsequent 24h
- High-risk patients (liver disease, hypokalemia, malnutrition): 8 mEq/L in 24h
- Proactive DDAVP approach reduces overcorrection from ~30% to <5% in observational studies
- No RCT comparing correction strategies (equipoise persists)

## Outcomes and Long-Term Impact
- Even mild chronic hyponatremia (Na 130-135) associated with:
  - Increased falls and fractures (3-4x risk)
  - Osteoporosis (direct osteoclast activation by hypo-osmolality)
  - Cognitive impairment (attention, gait stability)
  - Increased mortality
- SIADH treatment improves cognitive function (SALSA trial: tolvaptan)
- Hospital-acquired hyponatremia: Associated with increased length of stay and mortality; prevention protocols underway

## Emerging Therapies
- Oral selective V2 antagonists with improved safety profiles in development
- Lixivaptan: Reformulated for autosomal dominant PKD (ALERT trial) and SIADH
- Small molecule AQP2 inhibitors: Preclinical
- AI-driven sodium correction calculators deployed in some EMR systems`,
      keyTerms: [
        { term: 'copeptin', definition: 'Stable surrogate biomarker for vasopressin; facilitates differential diagnosis of water balance disorders' },
        { term: 'lixivaptan', definition: 'Novel V2 receptor antagonist in development for SIADH and ADPKD with improved hepatic safety profile' },
        { term: 'organic osmolytes', definition: 'Intracellular solutes (myoinositol, taurine) that protect brain volume; depleted in chronic hyponatremia, making rapid correction dangerous' },
      ],
      clinicalNotes: 'Chronic mild hyponatremia is not benign -- it causes falls, fractures, and cognitive impairment. Proactive DDAVP clamping should be standard practice for severe hyponatremia correction. Copeptin testing is replacing older diagnostic algorithms in many centers. Always address hyponatremia even when asymptomatic.',
    },
  },
  media: [],
  citations: [
    { id: 'european-hyponatremia-2023', type: 'article', title: 'European Clinical Practice Guideline on Hyponatremia Management', source: 'European Journal of Endocrinology' },
    { id: 'sterns-hyponatremia', type: 'article', title: 'Treatment of Hyponatremia', authors: ['Sterns RH'], source: 'New England Journal of Medicine' },
  ],
  crossReferences: [
    { targetId: 'nephro-chronic-kidney-disease', targetType: 'condition', relationship: 'related', label: 'Chronic Kidney Disease' },
    { targetId: 'nephro-hyperkalemia', targetType: 'condition', relationship: 'see-also', label: 'Hyperkalemia' },
    { targetId: 'condition-heart-failure', targetType: 'condition', relationship: 'related', label: 'Heart Failure' },
  ],
  tags: {
    systems: ['renal', 'endocrine'],
    topics: ['electrolytes', 'critical care', 'therapeutics'],
    keywords: ['hyponatremia', 'SIADH', 'sodium', 'osmotic demyelination', 'tolvaptan', 'ADH', 'vasopressin'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'emergency medicine', 'surgery'] },
  },
  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default hyponatremia;
