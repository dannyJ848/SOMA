/**
 * Addison's Disease (Primary Adrenal Insufficiency)
 *
 * Comprehensive content on adrenal insufficiency pathophysiology, diagnosis, and management.
 */

import { EducationalContent } from '../../../types';

export const ADDISONS_DISEASE: EducationalContent = {
  id: 'endocrine-addisons-disease',
  type: 'condition',
  name: "Addison's Disease",
  alternateNames: ['Primary adrenal insufficiency', 'Hypoadrenalism', 'Adrenocortical insufficiency'],

  levels: {
    1: {
      level: 1,
      summary: "Addison's disease is when your adrenal glands don't make enough of certain important hormones that help your body handle stress and keep blood pressure normal.",
      explanation: `You have two small adrenal glands that sit on top of your kidneys. They make important hormones:
- **Cortisol**: Helps your body handle stress and keeps blood sugar normal
- **Aldosterone**: Helps control blood pressure and salt balance

In Addison's disease, these glands are damaged and can't make enough hormones.

**What happens:**
- You feel very tired and weak
- You may lose weight and not feel hungry
- Your skin may get darker, especially in skin creases
- You can feel dizzy when standing up
- You may crave salty foods

**Treatment:**
People with Addison's disease take pills every day to replace the missing hormones. With proper treatment, they can live normal, active lives.

**Important:**
During illness or stress, people with Addison's disease need extra medication to stay safe.`,
      keyTerms: [
        { term: 'adrenal glands', definition: 'Small organs on top of your kidneys that make important hormones' },
        { term: 'cortisol', definition: 'A hormone that helps your body deal with stress' },
        { term: 'hormone', definition: 'A chemical messenger that tells parts of your body what to do' },
      ],
      analogies: [
        "The adrenal glands are like your body's emergency response team, but in Addison's disease they can't show up for work.",
        'Taking replacement hormones is like refueling a car - you need regular fill-ups to keep running.',
      ],
      examples: [
        "A person with Addison's disease feels very tired and weak, and their doctor finds they need hormone replacement pills.",
        "When someone with Addison's disease gets the flu, they need to take extra medication to help their body cope.",
      ],
    },
    2: {
      level: 2,
      summary: "Addison's disease results from destruction of the adrenal cortex, causing deficiency of cortisol and aldosterone. Autoimmune destruction is the most common cause in developed countries.",
      explanation: `**What happens in the adrenal glands:**
The adrenal cortex (outer layer) produces:
- Glucocorticoids (cortisol): Stress response, glucose regulation
- Mineralocorticoids (aldosterone): Sodium/potassium balance, blood pressure
- Androgens: Minor contribution to sex hormones

In Addison's disease, >90% of the adrenal cortex is destroyed before symptoms appear.

**Causes:**
1. **Autoimmune adrenalitis** (70-90% in developed countries)
   - Antibodies attack adrenal tissue
   - May occur with other autoimmune conditions

2. **Infections**
   - Tuberculosis (common worldwide)
   - Fungal infections, HIV-related

3. **Other causes**
   - Metastatic cancer
   - Adrenal hemorrhage
   - Genetic conditions

**Symptoms:**
- Fatigue and weakness
- Weight loss, anorexia
- Hyperpigmentation (ACTH stimulates melanin)
- Low blood pressure, postural hypotension
- Salt craving (aldosterone deficiency)
- Nausea, vomiting, abdominal pain
- Hypoglycemia

**Diagnosis:**
- Morning cortisol (low)
- ACTH stimulation test (cortisol doesn't rise)
- ACTH level (elevated in primary insufficiency)
- Adrenal antibodies
- Electrolytes (low sodium, high potassium)

**Treatment:**
- Hydrocortisone: 15-25 mg/day in divided doses
- Fludrocortisone: 0.05-0.2 mg/day for aldosterone replacement
- Stress dosing during illness`,
      keyTerms: [
        { term: 'adrenal cortex', definition: 'The outer layer of the adrenal gland that produces steroid hormones' },
        { term: 'glucocorticoid', definition: 'Steroid hormones like cortisol that affect glucose metabolism and stress response' },
        { term: 'mineralocorticoid', definition: 'Steroid hormones like aldosterone that regulate salt and water balance' },
        { term: 'hyperpigmentation', definition: 'Darkening of the skin, especially in creases and scars, due to high ACTH' },
        { term: 'ACTH', definition: 'Hormone from pituitary that stimulates adrenal cortisol production', pronunciation: 'A-C-T-H' },
      ],
      analogies: [
        'The pituitary sends ACTH as a signal to make cortisol. When the adrenals can\'t respond, the pituitary keeps sending louder signals (high ACTH).',
        'Hyperpigmentation occurs because ACTH and melanocyte-stimulating hormone come from the same precursor molecule.',
      ],
    },
    3: {
      level: 3,
      summary: "Primary adrenal insufficiency involves destruction of all three adrenal cortex zones, causing glucocorticoid, mineralocorticoid, and adrenal androgen deficiency. The ACTH stimulation test is diagnostic, and lifelong hormone replacement is required.",
      explanation: `**Adrenal Cortex Zones:**
- Zona glomerulosa: Aldosterone (regulated by renin-angiotensin)
- Zona fasciculata: Cortisol (regulated by ACTH)
- Zona reticularis: DHEA, androstenedione

**Pathophysiology:**

*Autoimmune Adrenalitis:*
- Cell-mediated destruction of adrenocortical cells
- 21-hydroxylase antibodies in 70-90%
- Associated with APS-1 (AIRE mutations) and APS-2

*Autoimmune Polyglandular Syndromes:*
| Type | Components | Genetics |
|------|------------|----------|
| APS-1 | Addison's, hypoparathyroidism, mucocutaneous candidiasis | AIRE gene |
| APS-2 | Addison's, autoimmune thyroid, type 1 DM | HLA-DR3/DR4 |

**Clinical Features:**

*Glucocorticoid Deficiency:*
- Fatigue, weakness, anorexia, weight loss
- Hypoglycemia
- Nausea, vomiting

*Mineralocorticoid Deficiency:*
- Hyponatremia, hyperkalemia
- Hypotension, salt craving
- Volume depletion

*Adrenal Androgen Deficiency:*
- Decreased libido (women)
- Loss of axillary/pubic hair

*Elevated ACTH (from POMC):*
- Hyperpigmentation

**Diagnostic Approach:**

1. *Screening:* Morning cortisol <3 μg/dL highly suggestive
2. *Confirmation:* ACTH stimulation test
   - 250 μg cosyntropin IV/IM
   - Cortisol at 0, 30, 60 minutes
   - Peak cortisol <18-20 μg/dL = adrenal insufficiency
3. *Distinguish primary vs secondary:*
   - Primary: High ACTH (>100 pg/mL)
   - Secondary: Low/normal ACTH
4. *Etiology:* 21-hydroxylase antibodies, CT adrenals

**Treatment:**

*Glucocorticoid Replacement:*
- Hydrocortisone 15-25 mg/day (10-15 mg AM, 5-10 mg early PM)
- Alternative: Prednisone 3-5 mg/day

*Mineralocorticoid Replacement:*
- Fludrocortisone 0.05-0.2 mg/day
- Monitor BP, potassium, renin

*Stress Dosing:*
- Minor illness: Double or triple oral dose
- Major surgery: Hydrocortisone 100 mg IV, then 50 mg q8h

*DHEA (optional):*
- 25-50 mg/day in women with fatigue, low libido`,
      keyTerms: [
        { term: 'ACTH stimulation test', definition: 'Gold standard diagnostic test using synthetic ACTH to assess adrenal cortisol response' },
        { term: '21-hydroxylase antibodies', definition: 'Autoantibodies against adrenal enzyme; marker for autoimmune adrenalitis' },
        { term: 'fludrocortisone', definition: 'Synthetic mineralocorticoid for aldosterone replacement in Addison\'s disease' },
        { term: 'APS', definition: 'Autoimmune polyglandular syndrome; clustering of multiple autoimmune endocrine disorders' },
        { term: 'stress dosing', definition: 'Increased glucocorticoid doses during physiological stress to prevent adrenal crisis' },
      ],
      clinicalNotes: 'Always provide patients with emergency injection kit (hydrocortisone 100mg), medical alert identification, and written sick day rules. Primary adrenal insufficiency requires both glucocorticoid AND mineralocorticoid replacement.',
    },
    4: {
      level: 4,
      summary: "Adrenal insufficiency diagnosis requires understanding the HPA axis, distinguishing primary from secondary causes, and recognizing adrenal crisis. Contemporary management emphasizes physiological replacement, avoiding overtreatment, and personalized sick day rules.",
      explanation: `**HPA Axis Physiology:**

*Cortisol Regulation:*
- Hypothalamus → CRH → Pituitary → ACTH → Adrenal → Cortisol
- Negative feedback at hypothalamus and pituitary
- Circadian rhythm: Peak 6-8 AM, nadir midnight
- Stress response: Bypass normal feedback

*Aldosterone Regulation (RAAS):*
- Renin → Angiotensin II → Aldosterone
- Also stimulated by hyperkalemia
- NOT ACTH-dependent (important distinction)

**Primary vs Secondary Adrenal Insufficiency:**

| Feature | Primary | Secondary |
|---------|---------|-----------|
| ACTH level | High | Low/normal |
| Aldosterone | Deficient | Normal |
| Hyperpigmentation | Present | Absent |
| Hyperkalemia | Common | Rare |
| Cause | Adrenal destruction | Pituitary/hypothalamic |

**Diagnostic Algorithms:**

*Standard ACTH Stimulation Test:*
- Cosyntropin 250 μg IV
- Cortisol <18 μg/dL at 30 or 60 min = abnormal
- Cannot distinguish primary from secondary acutely

*Low-dose ACTH Test (1 μg):*
- More sensitive for secondary AI
- Technically more difficult

*Insulin Tolerance Test (ITT):*
- Gold standard for HPA axis
- Hypoglycemia (<40 mg/dL) should stimulate cortisol >18 μg/dL
- Contraindicated: Seizures, CAD, elderly

*CRH Stimulation Test:*
- Helps localize secondary AI
- Primary: Exaggerated ACTH, blunted cortisol
- Secondary pituitary: Blunted ACTH
- Tertiary hypothalamic: Delayed ACTH rise

**Causes of Adrenal Insufficiency:**

*Primary:*
- Autoimmune (most common in developed world)
- Infectious: TB (most common worldwide), CMV, fungal
- Hemorrhagic: Waterhouse-Friderichsen (meningococcemia)
- Infiltrative: Metastases, lymphoma, amyloid, sarcoid
- Genetic: CAH, adrenoleukodystrophy, familial glucocorticoid deficiency
- Drugs: Ketoconazole, etomidate, mitotane

*Secondary:*
- Exogenous glucocorticoids (most common overall)
- Pituitary tumors/surgery
- Pituitary apoplexy
- Infiltrative (hemochromatosis, sarcoid)
- Traumatic brain injury
- Immunotherapy (checkpoint inhibitors)

**Adrenal Crisis:**

*Precipitants:*
- Infection/illness without stress dosing
- Surgery/trauma
- Abrupt glucocorticoid withdrawal
- Initial presentation (undiagnosed patient)

*Clinical Features:*
- Hypotension/shock refractory to fluids
- Severe nausea, vomiting, abdominal pain
- Altered mental status
- Fever
- Lab: Hyponatremia, hyperkalemia, hypoglycemia, eosinophilia

*Management:*
1. Hydrocortisone 100 mg IV bolus immediately
2. Continue hydrocortisone 50-100 mg q6-8h
3. IV normal saline (avoid hypotonic fluids)
4. Dextrose if hypoglycemic
5. Identify and treat precipitant
6. No fludrocortisone needed acutely (high-dose HC has mineralocorticoid activity)

**Monitoring and Optimization:**

*Clinical Targets:*
- Normal energy, well-being
- Normal blood pressure
- No hyperpigmentation progression
- No signs of overtreatment (Cushingoid features)

*Laboratory Monitoring:*
- Renin (suppressed = fludrocortisone excess; elevated = deficiency)
- Electrolytes
- Do NOT monitor cortisol levels routinely

*Avoiding Overtreatment:*
- Increased cardiovascular risk with high doses
- Metabolic complications
- Use lowest effective dose`,
      keyTerms: [
        { term: 'adrenal crisis', definition: 'Life-threatening acute adrenal insufficiency with shock requiring emergent IV hydrocortisone' },
        { term: 'Waterhouse-Friderichsen syndrome', definition: 'Adrenal hemorrhage and insufficiency associated with meningococcal sepsis' },
        { term: 'RAAS', definition: 'Renin-angiotensin-aldosterone system; regulates aldosterone independent of ACTH' },
        { term: 'checkpoint inhibitor', definition: 'Immunotherapy drugs (anti-PD-1, anti-CTLA-4) that can cause autoimmune hypophysitis/adrenalitis' },
        { term: 'cosyntropin', definition: 'Synthetic ACTH (first 24 amino acids) used in stimulation testing' },
      ],
      clinicalNotes: 'Glucocorticoid-induced adrenal suppression is the most common cause of adrenal insufficiency overall. Consider HPA axis testing after >3 weeks of supraphysiologic glucocorticoids. Never stop chronic glucocorticoids abruptly.',
    },
    5: {
      level: 5,
      summary: "Contemporary adrenal insufficiency management focuses on novel replacement strategies mimicking circadian cortisol rhythm, biomarkers for monitoring, adrenal regeneration research, and optimizing quality of life while preventing excess morbidity and mortality.",
      explanation: `**Advanced Glucocorticoid Replacement:**

*Physiological Considerations:*
- Normal cortisol: Peak 10-20 μg/dL (275-550 nmol/L) at 8 AM
- Nadir <2 μg/dL at midnight
- Pulsatile secretion throughout day
- Total production ~10 mg/day cortisol equivalent

*Modified-Release Hydrocortisone (Plenadren):*
- Once-daily dual-release formulation
- Rapid outer layer + extended inner core
- More physiological profile than divided doses
- Improved metabolic parameters in studies
- Reduced body weight, HbA1c, BP vs conventional

*Continuous Subcutaneous Hydrocortisone Infusion:*
- Pump delivery (similar to insulin)
- Circadian programming possible
- Research setting; improved quality of life
- Practical challenges limit widespread use

*Chronocort (Efmody):*
- Delayed-release hydrocortisone
- Taken at bedtime, peaks in early morning
- Specifically for CAH (timing of ACTH suppression)
- Approved in Europe

**Biomarkers and Monitoring Advances:**

*Salivary Cortisol:*
- Reflects free cortisol
- Day curve assessment feasible
- May help individualize dosing

*Hair Cortisol:*
- Long-term integrated cortisol exposure
- Research tool for over/under-replacement

*Cortisone:Cortisol Ratio:*
- Urine or plasma
- Assesses 11β-HSD activity and replacement adequacy

**Mineralocorticoid Replacement Nuances:**

*Monitoring:*
- Plasma renin activity or concentration
- Target: Upper normal range
- Avoid suppressed renin (overreplacement)

*Fludrocortisone Considerations:*
- No dose adjustment for illness (unlike glucocorticoid)
- Reduce if hypertension develops
- Salt intake affects requirement
- Some patients do well without it (mild deficiency)

**Adrenal Androgen Replacement:**

*DHEA Evidence:*
- Meta-analyses show modest benefits for:
  - Quality of life
  - Mood
  - Sexual function (women)
- Conflicting results; not routinely recommended
- Consider in women with persistent symptoms despite optimized cortisol/fludrocortisone

**Special Populations:**

*Pregnancy:*
- Continue hydrocortisone (dose increase 20-40% third trimester)
- Fludrocortisone may need increase
- Stress dosing for labor/delivery
- No teratogenicity concerns

*Critical Illness:*
- Hydrocortisone 200 mg/day continuous infusion or divided
- Relative adrenal insufficiency controversial
- Do NOT use etomidate for intubation

*Checkpoint Inhibitor-Induced:*
- Can affect pituitary (hypophysitis) or adrenal directly
- Often permanent; lifelong replacement needed
- Occurs in 1-7% of patients on immunotherapy

**Outcomes and Quality of Life:**

*Mortality Data:*
- 2-3× increased mortality vs general population
- Cardiovascular and infectious causes
- Adrenal crisis mortality 0.5/100 patient-years

*Quality of Life Impairments:*
- Fatigue most common complaint
- Depression and anxiety increased
- Cognitive impairment reported
- Work disability higher

*Improving Outcomes:*
- Patient education programs
- Emergency protocols
- Avoiding over-replacement
- Addressing psychological needs

**Emerging Research:**

*Adrenal Regeneration:*
- Stem cell approaches in preclinical stages
- Adrenal cortex has regenerative capacity
- Potential for functional restoration

*Gene Therapy:*
- Relevant for genetic forms (CAH, ALD)
- Adeno-associated virus vectors under study
- Long-term correction potentially achievable

*Autoimmune Modulation:*
- Targeting autoimmune destruction
- Earlier intervention at pre-clinical stage
- 21-hydroxylase antibody screening in at-risk individuals

**Adrenal Crisis Prevention:**

*Patient Education Components:*
1. Sick day rules (when and how to increase dose)
2. Intramuscular/subcutaneous injection training
3. Medical alert identification
4. Emergency card with treatment protocol
5. Education of family members and employers

*Healthcare System Interventions:*
- Flagging in medical records
- Standardized crisis protocols
- Patient registries
- Specialist endocrine nurse support`,
      keyTerms: [
        { term: 'Plenadren', definition: 'Modified-release once-daily hydrocortisone providing more physiological cortisol profile' },
        { term: 'Efmody', definition: 'Delayed-release hydrocortisone taken at bedtime; approved for congenital adrenal hyperplasia in Europe' },
        { term: 'relative adrenal insufficiency', definition: 'Controversial concept of inadequate cortisol response relative to stress severity in critical illness' },
        { term: 'adrenoleukodystrophy', definition: 'X-linked peroxisomal disorder causing adrenal insufficiency and progressive neurodegeneration' },
        { term: 'salivary cortisol', definition: 'Measurement of free cortisol in saliva; research tool for assessing replacement adequacy' },
      ],
      clinicalNotes: 'Despite optimal hormone replacement, patients with adrenal insufficiency have reduced quality of life and increased mortality. This highlights the imperfection of current replacement strategies compared to endogenous hormone production. Emphasis should be on prevention of crisis, avoidance of overtreatment, and addressing the multidimensional health impacts. Novel delivery systems offer promise for improved physiological replacement.',
    },
  },

  media: [
    {
      id: 'addisons-hpa-axis-1',
      type: 'diagram',
      filename: 'hpa-axis-primary-ai.svg',
      title: 'HPA Axis in Primary Adrenal Insufficiency',
      description: 'Feedback disruption with elevated ACTH and low cortisol',
    },
  ],

  citations: [
    {
      id: 'bornstein-guidelines-2016',
      type: 'article',
      title: 'Diagnosis and Treatment of Primary Adrenal Insufficiency: An Endocrine Society Clinical Practice Guideline',
      authors: ['Bornstein SR', 'Allolio B', 'Arlt W', 'et al.'],
      source: 'J Clin Endocrinol Metab 2016;101(2):364-389',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'endocrine-adrenal-crisis', targetType: 'condition', relationship: 'see-also', label: 'Adrenal Crisis' },
    { targetId: 'endocrine-cushings-syndrome', targetType: 'condition', relationship: 'related', label: "Cushing's Syndrome" },
    { targetId: 'endocrine-hypopituitarism', targetType: 'condition', relationship: 'related', label: 'Hypopituitarism' },
  ],

  tags: {
    systems: ['endocrine'],
    topics: ['adrenal', 'autoimmune', 'hormone replacement'],
    keywords: ['Addison', 'adrenal insufficiency', 'cortisol', 'ACTH', 'hydrocortisone', 'fludrocortisone'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['endocrinology', 'medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
