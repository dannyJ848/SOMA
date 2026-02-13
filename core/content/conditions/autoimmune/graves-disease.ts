/**
 * Graves Disease - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const gravesDiseaseContent: EducationalContent = {
  id: 'condition-graves-disease',
  type: 'condition',
  name: 'Graves Disease',
  nameEs: 'Enfermedad de Graves',
  alternateNames: ['Graves\' Disease', 'Basedow Disease', 'Diffuse Toxic Goiter'],
  hpoId: 'HP:0000869',

  levels: {
    1: {
      level: 1,
      summary: 'Graves disease is an autoimmune condition that causes the thyroid gland to become overactive (hyperthyroidism), producing too much thyroid hormone.',
      explanation: `In Graves disease, your immune system makes antibodies that stimulate your thyroid gland to work too hard. This causes your body to speed up in many ways.

**Common symptoms:**
- Rapid or irregular heartbeat
- Feeling hot and sweating
- Weight loss despite increased appetite
- Tremors (shaking hands)
- Anxiety and irritability
- Trouble sleeping
- Bulging eyes (exophthalmos)
- Goiter (enlarged thyroid in neck)
- Muscle weakness

**Who gets Graves disease:**
- More common in women than men
- Usually ages 20-50
- Can run in families
- May be triggered by stress

**Eye problems (Graves ophthalmopathy):**
- Eyes bulging outward
- Red, irritated eyes
- Double vision
- Light sensitivity
- May occur before, during, or after thyroid problems

**Treatment options:**
- Medications to block thyroid hormone production
- Radioactive iodine to shrink the thyroid
- Surgery to remove part or all of thyroid
- Beta-blockers for rapid heartbeat`,
      keyTerms: [
        { term: 'hyperthyroidism', definition: 'Overactive thyroid producing too much thyroid hormone' },
        { term: 'goiter', definition: 'Enlarged thyroid gland causing swelling in the neck' },
        { term: 'exophthalmos', definition: 'Bulging of the eyes caused by tissue swelling behind the eye' },
        { term: 'thyroid', definition: 'Butterfly-shaped gland in the neck that controls metabolism' },
      ],
      analogies: [
        'Graves disease is like a car with a stuck gas pedal - the engine (thyroid) keeps revving too high.',
        'Think of the thyroid as a furnace that\'s been turned up too high, making everything overheat.',
      ],
      examples: [
        'A 30-year-old woman notices her heart racing, unexpected weight loss despite eating more, and eyes that appear to bulge.',
        'Someone with a shaking hand, feeling hot all the time, and a lump in their neck may have Graves disease.',
        'A patient develops double vision along with a racing heartbeat and anxiety.',
      ],
      patientCounselingPoints: [
        'Take your thyroid medication exactly as prescribed - don\'t stop without talking to your doctor',
        'Report any eye symptoms promptly - early treatment helps prevent complications',
        'Avoid smoking - it worsens eye problems',
        'Be patient with treatment - it can take weeks or months to feel better',
        'Tell your doctor if you become pregnant or plan to become pregnant',
      ],
    },
    2: {
      level: 2,
      summary: 'Graves disease is an autoimmune disorder causing hyperthyroidism through thyroid-stimulating immunoglobulins (TSI), with characteristic features including diffuse goiter, ophthalmopathy, and dermopathy.',
      explanation: `## Epidemiology
- Most common cause of hyperthyroidism (60-80%)
- Female:male ratio ~5-10:1
- Peak onset 20-50 years
- Genetic predisposition (40% familial)
- HLA-DR3 association

## Pathogenesis
- Autoantibodies against TSH receptor
- Thyroid-stimulating immunoglobulins (TSI)
- TSI continuously stimulate thyroid
- TSH suppressed (negative feedback)
- Diffuse thyroid hyperplasia

## Clinical Features

**Hyperthyroid Symptoms:**
- **Cardiovascular:** Tachycardia, atrial fibrillation, palpitations
- **Neuromuscular:** Tremor, hyperreflexia, proximal myopathy
- **Psychiatric:** Anxiety, irritability, emotional lability
- **Constitutional:** Heat intolerance, sweating, weight loss
- **GI:** Increased appetite, frequent bowel movements
- **Reproductive:** Menstrual irregularities, infertility
- **Dermatologic:** Hair thinning, onycholysis, warm moist skin

**Graves-Specific Manifestations:**
- **Diffuse goiter:** Smooth, enlarged, bruit present
- **Ophthalmopathy:** Proptosis, periorbital edema, diplopia
- **Dermopathy:** Pretibial myxedema (rare)
- **Thyroid acropachy:** Clubbing (rare)

## Laboratory Findings

**Thyroid Function Tests:**
- **TSH:** Suppressed (<0.01 mIU/L)
- **Free T4:** Elevated
- **Free T3:** Elevated (may be disproportionately high)
- T3 toxicosis possible (elevated T3, normal T4)

**Autoantibodies:**
- **TSI (Thyroid-Stimulating Immunoglobulin):** Positive, specific for Graves
- **TRAb (TSH Receptor Antibody):** Positive, confirms Graves
- **Anti-TPO:** Often positive (not specific)
- **Anti-thyroglobulin:** Often positive

**Other Labs:**
- Hypercalcemia (mild)
- Elevated alkaline phosphatase (bone turnover)
- Decreased LDL, total cholesterol

## Graves Ophthalmopathy

**Clinical Features:**
- Proptosis (exophthalmos)
- Periorbital edema
- Conjunctival injection
- Diplopia (extraocular muscle enlargement)
- Optic neuropathy (severe cases)
- Exposure keratopathy

**Activity Scoring:**
- Clinical Activity Score (CAS)
- Pain, redness, swelling
- Score ≥4 indicates active inflammation

**Severity Classification:**
- Mild: No impact on daily life
- Moderate: Impact on daily life, no threat to sight
- Severe: Sight-threatening (optic nerve compression, corneal breakdown)

## Diagnosis

**Diagnostic Criteria:**
- Suppressed TSH, elevated free T4/T3
- Evidence of Graves disease (goiter, ophthalmopathy)
- Positive TRAb confirms diagnosis

**Imaging:**
- **Thyroid ultrasound:** Diffuse hypervascularity
- **Radioactive iodine uptake (RAIU):** Diffusely increased
- **CT/MRI orbits:** For ophthalmopathy evaluation`,
      keyTerms: [
        { term: 'TSI', definition: 'Thyroid-stimulating immunoglobulin; antibody that activates TSH receptor causing hyperthyroidism' },
        { term: 'TRAb', definition: 'TSH receptor antibody; testing confirms Graves disease' },
        { term: 'pretibial myxedema', definition: 'Thickened, discolored skin over shins; rare Graves manifestation' },
        { term: 'onycholysis', definition: 'Separation of nail from nailbed; seen in hyperthyroidism' },
        { term: 'thyroid acropachy', definition: 'Clubbing of fingers and toes; rare Graves manifestation' },
      ],
      analogies: [
        'TSI antibodies are like "fake keys" that turn on the thyroid when it should be off.',
      ],
      examples: [
        'A 28-year-old woman with suppressed TSH, elevated free T4, palpitations, and diffuse goiter has Graves disease.',
        'Positive TRAb in a hyperthyroid patient confirms Graves disease vs other causes.',
        'Graves ophthalmopathy can occur even without active hyperthyroidism.',
      ],
    },
    3: {
      level: 3,
      summary: 'Graves disease pathogenesis involves TSH receptor autoantibodies causing diffuse thyroid hyperplasia and hyperthyroidism, with unique extrathyroidal manifestations including ophthalmopathy, dermopathy, and acropachy.',
      explanation: `## Pathophysiology

**Autoantibody Production:**
- Loss of tolerance to TSH receptor
- TSH receptor as autoantigen
- TSI (stimulating antibodies) predominate
- Also TSH-blocking antibodies (can coexist)

**Mechanism of Hyperthyroidism:**
- TSI binds TSH receptor (G-protein coupled)
- Activates adenylate cyclase → cAMP
- Increased thyroid hormone synthesis
- Thyroid hyperplasia and hypertrophy
- Increased vascularity

**Extrathyroidal Manifestations:**
- **Ophthalmopathy:** TSHR expression on orbital fibroblasts
  - Glycosaminoglycan accumulation
  - Adipogenesis, muscle enlargement
  - Tissue expansion behind orbit

- **Dermopathy:** Similar process in pretibial fibroblasts
  - GAG accumulation → myxedema

- **Acropachy:** Clubbing mechanism unclear

**Genetic Factors:**
- HLA-DR3, HLA-B8 association
- CTLA-4 polymorphisms
- CD40 gene variants
- PTPN22 polymorphism
- 40% have affected relative

**Environmental Triggers:**
- Stress (emotional, physical)
- Pregnancy (postpartum flare)
- Iodine excess
- Smoking (worsens ophthalmopathy)
- Infection (Yersinia molecular mimicry)

## Graves Ophthalmopathy (GO)

**Natural History:**
- Active phase: 6-24 months (inflammatory)
- Fibrotic phase: Permanent changes
- May precede, coincide with, or follow thyroid disease

**Pathogenesis:**
- TSHR on orbital fibroblasts
- T-cell mediated inflammation
- Cytokine release → GAG production
- Tissue expansion, muscle enlargement
- Increased orbital pressure → proptosis

**Clinical Manifestations:**
| Sign | Description |
|------|-------------|
| Proptosis | Hertel exophthalmometry >21 mm |
| Lid lag | Upper lid lag on downward gaze |
| Lid retraction | Upper sclera visible |
| Periorbital edema | Swelling around eyes |
| Conjunctival injection | Red eyes |
| Diplopia | Double vision (muscle restriction) |
| Optic neuropathy | Vision loss, color vision loss |

**Graves Ophthalmopathy Classification:**
1. **Class 0:** No signs/symptoms
2. **Class 1:** Only signs (lid lag, retraction)
3. **Class 2:** Soft tissue involvement (edema, redness)
4. **Class 3:** Proptosis
5. **Class 4:** Extraocular muscle involvement
6. **Class 5:** Corneal involvement
7. **Class 6:** Sight loss (optic neuropathy)

## Graves Dermopathy
- Pretibial myxedema (0.5-4%)
- Raised, discolored plaques
- Orange-peel appearance
- Non-pitting edema
- Associated with severe GO

## Diagnostic Evaluation

**Laboratory:**
- TSH: Suppressed (sensitive screening)
- Free T4: Elevated
- Free T3: Elevated
- TRAb: Confirms Graves, predicts GO
- TSI: Alternative to TRAb
- Anti-TPO: Positive (not specific)

**Imaging:**
- **RAIU scan:** Diffusely increased uptake (confirms Graves)
- **Ultrasound:** Diffuse hypoechogenicity, hypervascularity
- **CT orbits:** For GO evaluation (muscle enlargement)

**Differential Diagnosis:**
- Toxic multinodular goiter (focal uptake on RAIU)
- Toxic adenoma (single nodule)
- Thyroiditis (low RAIU, transient)
- Factitious thyroid hormone ingestion (low RAIU)

## Treatment Strategies

**Antithyroid Drugs (ATDs):**
- **Methimazole:** First-line, once daily
  - Mild disease, small goiter
  - Pregnancy (after 1st trimester)
  - Pediatric population

- **PTU (Propylthiouracil):**
  - First trimester of pregnancy
  - Thyroid storm
  - Methimazole intolerance

**Radioactive Iodine (RAI):**
- I-131 ablation
- Definitive therapy
- Contraindicated in pregnancy, breastfeeding
- May worsen GO (give steroids if active GO)

**Thyroidectomy:**
- Total thyroidectomy
- Large goiter, compressive symptoms
- Failed medical therapy
- Patient preference
- Pregnancy (2nd trimester)
- Significant eye disease (RAI contraindicated)`,
      keyTerms: [
        { term: 'T3 toxicosis', definition: 'Elevated T3 with normal T4; early Graves variant' },
        { term: 'Hertel exophthalmometry', definition: 'Measurement of eye protrusion using specialized instrument' },
        { term: 'lid lag', definition: 'Upper eyelid lags behind downward gaze; Graves sign' },
        { term: 'GAG', definition: 'Glycosaminoglycans; accumulate in orbital tissue causing swelling' },
        { term: 'RAIU', definition: 'Radioactive iodine uptake; measures thyroid activity' },
      ],
      clinicalNotes: 'Board pearls: TRAb positive confirms Graves. Pretibial myxedema and Graves ophthalmopathy are pathognomonic. RAIU: diffusely increased in Graves, decreased in thyroiditis. Methimazole first-line (except 1st trimester). RAI contraindicated in pregnancy. Give prednisone with RAI if active GO.',
    },
    4: {
      level: 4,
      summary: 'Advanced Graves management incorporates antithyroid drug therapy with remission strategies, radioactive iodine preparation and post-treatment care, surgical considerations, and comprehensive ophthalmopathy management.',
      explanation: `## Antithyroid Drug Therapy

**Treatment Protocol:**
- **Methimazole:** Start 10-20 mg daily
  - Titrate based on free T4/T3
  - Maintenance: 5-10 mg daily
  - Duration: 12-18 months
  - Goal: Remission (normalize TSH off medication)

**Monitoring:**
- Check TFTs every 4-6 weeks initially
- Monitor liver enzymes, CBC (PTU more hepatotoxic)
- Watch for agranulocytosis (rare, serious)
- Counsel to stop ATD for fever/sore throat

**Remission Predictors:**
- Small goiter
- Mild disease
- Negative TRAb at treatment end
- Longer treatment duration

**Relapse Management:**
- RAI or thyroidectomy after relapse
- Consider second ATD course if patient prefers

**Adverse Effects:**
- Minor: Rash, arthralgias, GI upset
- Major: Agranulocytosis (0.3%), hepatotoxicity, vasculitis
- PTU: Higher liver toxicity risk

## Radioactive Iodine Therapy

**Indications:**
- Definitive therapy preferred
- Failed ATD therapy
- Contraindications to ATD
- Patient preference

**Contraindications:**
- Pregnancy, breastfeeding
- Active moderate-severe GO (without steroids)
- Severe thyroiditis

**Protocol:**
- Fixed dose (10-15 mCi) or calculated dose
- Discontinue ATD 3-7 days prior
- Restart ATD 3-7 days post (if needed)
- Hypothyroidism expected in 80-90%

**Post-RAI:**
- Monitor TFTs every 4-6 weeks
- Levothyroxine when hypothyroid
- Monitor GO for progression

**Pregnancy after RAI:**
- Wait 6 months after treatment
- Confirm euthyroid before conception

## Thyroidectomy

**Indications:**
- Large goiter with compression
- Suspicious nodules
- Failed ATD, RAI contraindicated
- Severe ophthalmopathy
- Patient preference
- Pregnancy (2nd trimester)

**Preparation:**
- Euthyroid before surgery
- ATD + beta-blocker or iodine (saturated solution of potassium iodide)
- SSKI: 5 drops TID x 10 days pre-op

**Surgical Options:**
- Total thyroidectomy (preferred)
- Subtotal thyroidectomy (higher recurrence)

**Complications:**
- Recurrent laryngeal nerve injury (1-2%)
- Hypoparathyroidism (transient 10-20%, permanent 1-2%)
- Hemorrhage, infection
- Need for lifelong levothyroxine

## Graves Ophthalmopathy Management

**Mild GO:**
- Selenium (200 mcg daily) - improves mild GO
- Lubricating eye drops
- Ophthalmology referral
- Smoking cessation (critical)
- Control thyroid dysfunction

**Moderate-Severe Active GO:**
- High-dose IV methylprednisolone
  - 500 mg weekly x 6 weeks, then 250 mg weekly x 6 weeks
  - OR cumulative dose 4.5-8 g
- Oral steroids alternative (higher side effects)
- Radiotherapy: 20 Gy in 10 fractions (controversial)

**Surgical Rehabilitation:**
- Orbital decompression for optic neuropathy, severe proptosis
- Strabismus surgery for diplopia
- Eyelid surgery for retraction
- Sequence: Decompression → Strabismus → Eyelid

**Contraindications:**
- RAI without steroids in active GO
- Smoking cessation critical

## Thyroid Storm

**Precipitants:**
- Infection, surgery, trauma
- RAI therapy
- Medication non-adherence
- Iodine exposure (contrast)

**Diagnostic Criteria (Burch-Wartofsky):**
- Hyperpyrexia >40°C (10 pts)
- Tachycardia >130 bpm (10 pts)
- Heart failure (10 pts)
- Atrial fibrillation (5 pts)
- GI/hepatic manifestations (10 pts)
- CNS dysfunction (10 pts)
- Precipitating history (10 pts)
- Score ≥45: Highly likely
- Score 25-44: Probable

**Treatment:**
1. Supportive care (cooling, fluids)
2. **ATD:** PTU 500-1000 mg loading, then 250 mg q6h
3. **Beta-blocker:** Propranolol 60-80 mg q4h
4. **Inorganic iodide:** SSKI 5 drops q6h (1 hour after ATD)
5. **Glucocorticoids:** Hydrocortisone 100 mg q8h (peripheral conversion)
6. **Plasma exchange** for refractory cases`,
      keyTerms: [
        { term: 'agranulocytosis', definition: 'Dangerous drop in white blood cells; rare ATD side effect requiring prompt drug cessation' },
        { term: 'thyroid storm', definition: 'Life-threatening hyperthyroidism with multi-organ dysfunction' },
        { term: 'Burch-Wartofsky score', definition: 'Diagnostic point system for thyroid storm' },
        { term: 'orbital decompression', definition: 'Surgical removal of bone/fat behind eye to relieve pressure' },
      ],
      clinicalNotes: 'Board pearls: ATD first-line for mild disease. RAI definitive therapy (contraindicated in pregnancy, active GO without steroids). Surgery for large goiter, compressive symptoms, or active GO. Give steroids with RAI if active GO. Treat thyroid storm with PTU + propranolol + iodine + steroids. Stop ATD for fever/sore throat (agranulocytosis).',
    },
    5: {
      level: 5,
      summary: 'Contemporary Graves care incorporates novel therapies, biomarker-guided management, precision medicine approaches, and evidence-based protocols while addressing long-term outcomes, pregnancy considerations, and quality of life.',
      explanation: `## Precision Medicine in Graves

**Biomarker Applications:**
- **TRAb levels:**
  - Diagnosis confirmation
  - Predict GO severity
  - Monitor treatment response
  - Predict relapse after ATD withdrawal
  - Guide duration of ATD therapy

- **TRAb-Guided ATD Duration:**
  - High TRAb: Continue ATD longer
  - Normalizing TRAb: Can consider stopping
  - Rising TRAb: Predicts relapse

- **Novel Autoantibodies:**
  - TSH-blocking antibodies
  - Neutral antibodies
  - Explain biphasic thyroid dysfunction

## Novel Therapeutic Approaches

**Small Molecule Inhibitors:**
- **TSHR antagonists:** Small molecule allosteric inhibitors
  - Investigational for Graves disease
  - Potential alternative to ATD/RAI

- **IGF-1R inhibitors:**
  - Tepezumab (teprotumumab)
  - Approved for moderate-severe GO
  - Significant reduction in proptosis
  - EXPAND and OPTIC trials

**Biologic Therapies for GO:**
- **Tepezumab (IGF-1R inhibitor):**
  - SC every 3 weeks x 8 doses
  - Rapid reduction in proptosis
  - Improves diplopia, QoL
  - Now first-line for moderate-severe GO

- **Rituximab:**
  - B-cell depletion
  - Some benefit in active GO
  - May reduce relapse after ATD

- **Tocilizumab:**
  - IL-6 receptor inhibitor
  - Investigational for steroid-refractory GO

## Pregnancy Considerations

**Pre-conception Counseling:**
- Achieve euthyroidism before conception
- Discuss treatment options
- TRAb monitoring (cross placenta)

**Pregnancy Management:**
- **1st Trimester:** PTU preferred (less teratogenic)
- **2nd-3rd Trimester:** Switch to methimazole
- Target high-normal free T4
- Monitor TFTs every 2-4 weeks

**Fetal/Neonatal Considerations:**
- TRAb crosses placenta
- High maternal TRab: Risk fetal/neonatal hyperthyroidism
- Monitor fetal heart rate, growth
- Check neonatal TFTs at birth

**Breastfeeding:**
- Methimazole safe (<20 mg/day)
- PTU safe (but higher hepatotoxicity risk)

## Long-Term Management

**After RAI:**
- Lifelong levothyroxine in 80-90%
- Annual TFTs
- Monitor TRAb (may persist)

**After Thyroidectomy:**
- Lifelong levothyroxine
- Calcium/parathyroid monitoring
- Voice assessment if RLN injury

**After ATD Remission:**
- Monitor for relapse (first 6-12 months highest risk)
- Annual TFTs for several years
- Counsel regarding recurrence risk

**Quality of Life:**
- Anxiety, depression common
- Cognitive symptoms may persist
- Goiter appearance concerns
- Eye disease impact
- Support groups valuable

## Graves Ophthalmopathy Advances

**Tepezumab Revolution:**
- IGF-1R receptor inhibition
- Dramatic proptosis reduction
- Now preferred over steroids
- High cost, access issues

**Surgical Timing:**
- Wait for inactive phase (quiescent)
- Orbital decompression first
- Strabismus surgery second
- Eyelid surgery last
- Wait 3-6 months between procedures

**Emerging Therapies:**
- TSHR inhibitors (investigational)
- Rituximab for steroid-refractory
- Tocilizumab for active disease

## Cardiovascular Considerations

**Atrial Fibrillation:**
- Treat hyperthyroidism first
- Rate control with beta-blockers
- Anticoagulate per CHA2DS2-VASc
- Cardioversion after euthyroid

**Heart Failure:**
- High-output state
- Treat thyroid dysfunction
- Avoid amiodarone (iodine load)

**Bone Health:**
- Increased bone turnover
- Screen for osteoporosis
- Treat per guidelines
- Bone density monitoring

## Future Directions

**Immunomodulation:**
- Antigen-specific tolerance induction
- Peptide-based immunotherapy
- Regulatory T cell therapy

**Gene Therapy:**
- TSH receptor modulation
- siRNA approaches

**Biomarker Development:**
- MicroRNA signatures
- Proteomic profiles
- Predict treatment response

**Personalized Treatment:**
- Genetic risk profiling
- Biomarker-guided duration
- Individualized RAI dosing`,
      keyTerms: [
        { term: 'tepezumab', definition: 'IGF-1R inhibitor monoclonal antibody; breakthrough therapy for moderate-severe Graves ophthalmopathy' },
        { term: 'IGF-1R', definition: 'Insulin-like growth factor 1 receptor; expressed in orbital tissue, targeted for GO therapy' },
        { term: 'TSHR antagonists', definition: 'Small molecules blocking TSH receptor; investigational therapy for Graves' },
        { term: 'EXPAND trial', definition: 'Clinical trial establishing tepezumab efficacy in Graves ophthalmopathy' },
      ],
      clinicalNotes: 'Board pearls: TRAb confirms Graves diagnosis. Methimazole first-line except 1st trimester (PTU). RAI definitive but avoid in pregnancy, active GO without steroids. Surgery for large goiter, compressive symptoms. Tepezumab for moderate-severe GO. Thyroid storm: PTU + propranolol + iodine + steroids.',
    },
  },

  media: [
    {
      id: 'graves-exophthalmos',
      type: 'image',
      filename: 'graves-ophthalmopathy-proptosis.jpg',
      title: 'Graves Ophthalmopathy',
      description: 'Proptosis, periorbital edema, and lid retraction characteristic of Graves disease',
    },
  ],
  citations: [
    {
      id: 'ross-2016',
      type: 'article',
      title: '2016 American Thyroid Association Guidelines for Diagnosis and Management of Hyperthyroidism and Other Causes of Thyrotoxicosis',
      authors: ['Ross DS', 'Burch HB', 'Cooper DS', 'et al.'],
      source: 'Thyroid',
      url: 'https://doi.org/10.1089/thy.2016.0129',
    },
    {
      id: 'bartley-2021',
      type: 'article',
      title: 'Graves ophthalmopathy: A concise overview of management',
      authors: ['Bartley GB', 'Stan MN'],
      source: 'Nature Reviews Endocrinology',
    },
  ],
  crossReferences: [
    { targetId: 'condition-hypothyroidism', targetType: 'condition', relationship: 'related', label: 'Hypothyroidism' },
    { targetId: 'condition-hyperthyroidism', targetType: 'condition', relationship: 'related', label: 'Hyperthyroidism' },
    { targetId: 'topic-autoimmune-serology', targetType: 'topic', relationship: 'related', label: 'Autoimmune Serology' },
  ],
  tags: {
    systems: ['endocrine', 'immune', 'ocular'],
    topics: ['endocrinology', 'autoimmunity', 'ophthalmology'],
    keywords: ['Graves disease', 'hyperthyroidism', 'goiter', 'exophthalmos', 'ophthalmopathy', 'TRAb', 'TSI', 'methimazole', 'PTU', 'radioactive iodine'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },

  createdAt: '2026-01-26T00:00:00.000Z',
  updatedAt: '2026-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default gravesDiseaseContent;
