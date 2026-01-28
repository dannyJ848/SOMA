/**
 * Hyperthyroidism
 *
 * Clinical condition of thyroid hormone excess including causes,
 * clinical manifestations, diagnosis, and management approaches.
 */

import { EducationalContent } from '../../types';

export const HYPERTHYROIDISM: EducationalContent = {
  id: 'endocrinology-hyperthyroidism',
  type: 'condition',
  name: 'Hyperthyroidism',
  alternateNames: ['Overactive thyroid', 'Thyrotoxicosis', 'Thyroid hormone excess'],

  levels: {
    1: {
      level: 1,
      summary: 'Hyperthyroidism happens when your thyroid gland makes too much hormone, causing everything in your body to speed up.',
      explanation: `**What Is Hyperthyroidism?**

Your thyroid gland normally makes hormones that control how fast your body works. In hyperthyroidism, your thyroid makes too much hormone, so everything speeds up.

**Common Symptoms:**

- Fast or irregular heartbeat (palpitations)
- Losing weight even though you eat normally or more
- Feeling hot and sweaty when others feel comfortable
- Trembling hands
- Feeling nervous, anxious, or irritable
- Trouble sleeping
- Frequent bowel movements or diarrhea
- Muscle weakness
- Eye problems (in Graves' disease)

**What Causes It?**

1. **Graves' disease** (most common)
   - Your immune system makes antibodies that stimulate the thyroid
   - Can cause bulging eyes and skin problems

2. **Thyroid nodules**
   - Lumps that produce extra hormone
   - Can be single or multiple

3. **Thyroiditis**
   - Inflammation releases stored hormone
   - Often temporary

**Treatment Options:**

1. **Medications** - Pills that slow down the thyroid
2. **Radioactive iodine** - Shrinks the thyroid permanently
3. **Surgery** - Removes part or all of the thyroid

**Important to Know:**

- Without treatment, can cause serious heart problems
- Most treatments are very effective
- May need thyroid hormone replacement after some treatments`,
      keyTerms: [
        { term: 'Graves disease', definition: 'The most common cause of hyperthyroidism, where antibodies stimulate the thyroid' },
        { term: 'palpitations', definition: 'Feeling your heart beat fast or irregularly' },
        { term: 'thyroid nodule', definition: 'A lump in the thyroid that may produce extra hormone' },
        { term: 'radioactive iodine', definition: 'A treatment that shrinks the thyroid by destroying some thyroid cells' },
      ],
      analogies: [
        'Having hyperthyroidism is like a car engine racing at high RPMs all the time - it wears you out.',
        'Graves\' disease antibodies are like someone stepping on your thyroid\'s gas pedal and not letting go.',
      ],
      examples: [
        'A person who loses weight, has shaky hands, and feels hot might have an overactive thyroid.',
        'A woman with Graves\' disease may notice her eyes becoming more prominent.',
      ],
    },
    2: {
      level: 2,
      summary: 'Hyperthyroidism results from excess thyroid hormone production (Graves disease, toxic nodules) or release (thyroiditis), presenting with hypermetabolic symptoms and diagnosed by suppressed TSH with elevated free T4/T3.',
      explanation: `**Causes of Hyperthyroidism:**

*Primary Hyperthyroidism:*
| Cause | Mechanism | Frequency |
|-------|-----------|-----------|
| Graves disease | TSH receptor antibodies | 60-80% |
| Toxic multinodular goiter | Autonomous nodules | 15-20% |
| Toxic adenoma | Single autonomous nodule | 5-10% |
| Thyroiditis | Hormone release from damage | 5-10% |

*Secondary/Other:*
- TSH-secreting pituitary adenoma (rare)
- Factitious (exogenous hormone intake)
- Struma ovarii (ovarian teratoma)
- Gestational thyrotoxicosis (hCG effect)

**Clinical Presentation:**

*Symptoms by System:*
| System | Symptoms |
|--------|----------|
| General | Weight loss, heat intolerance, sweating |
| Cardiovascular | Palpitations, tachycardia, atrial fibrillation |
| Neuropsychiatric | Anxiety, tremor, insomnia, hyperactivity |
| GI | Increased appetite, diarrhea |
| Musculoskeletal | Weakness, proximal myopathy |
| Skin | Warm, moist skin; hair thinning |

*Physical Findings:*
- Tachycardia, arrhythmias
- Tremor (fine hand tremor)
- Hyperreflexia
- Goiter (diffuse in Graves, nodular in TMNG)
- Thyroid bruit (in Graves)
- Eye findings (Graves-specific)

*Graves-Specific Signs:*
| Finding | Description |
|---------|-------------|
| Exophthalmos | Bulging eyes (proptosis) |
| Lid retraction | Upper eyelid raised |
| Lid lag | Upper lid doesn't follow downgaze |
| Pretibial myxedema | Skin thickening on shins |

**Diagnosis:**

*Initial Testing:*
| Test | Typical Finding |
|------|-----------------|
| TSH | Suppressed (<0.1 mIU/L) |
| Free T4 | Elevated |
| Free T3 | Elevated (may be elevated before T4) |

*Determining Etiology:*
| Test | Graves | Toxic Nodule | Thyroiditis |
|------|--------|--------------|-------------|
| TSH receptor Ab | Positive | Negative | Negative |
| Radioiodine uptake | High, diffuse | High, focal | Low |
| ESR | Normal | Normal | Elevated |

**Treatment Overview:**

*Anti-Thyroid Drugs:*
- Methimazole (preferred)
- Propylthiouracil (PTU) - pregnancy, thyroid storm
- Block hormone synthesis

*Radioactive Iodine (RAI):*
- I-131 destroys thyroid tissue
- Definitive treatment
- Usually causes hypothyroidism

*Surgery:*
- Thyroidectomy (partial or total)
- For large goiters, nodules, or RAI contraindications

*Beta-Blockers:*
- Symptom control (tachycardia, tremor)
- Not definitive treatment`,
      keyTerms: [
        { term: 'TSH receptor antibodies', definition: 'Autoantibodies that stimulate the thyroid in Graves disease' },
        { term: 'radioiodine uptake', definition: 'Test measuring how much iodine the thyroid absorbs; helps determine cause' },
        { term: 'methimazole', definition: 'Primary anti-thyroid drug that blocks hormone synthesis' },
        { term: 'thyroid storm', definition: 'Severe, life-threatening hyperthyroidism requiring emergency treatment' },
      ],
      analogies: [
        'The radioiodine uptake test is like checking if the factory (thyroid) is actively producing or if stored products are just leaking out (thyroiditis).',
        'Beta-blockers treat the symptoms of hyperthyroidism like turning down the volume, while anti-thyroid drugs address the source.',
      ],
    },
    3: {
      level: 3,
      summary: 'Hyperthyroidism management requires accurate etiologic diagnosis through clinical features, antibody testing, and imaging, followed by individualized treatment selection among anti-thyroid drugs, radioiodine, or surgery.',
      explanation: `**Etiologic Diagnosis:**

*Radioiodine Uptake (RAIU) Patterns:*
| Condition | 24h RAIU | Scan Pattern |
|-----------|----------|--------------|
| Graves disease | High (35-95%) | Diffuse, homogeneous |
| Toxic MNG | High (20-60%) | Patchy, multiple hot areas |
| Toxic adenoma | High | Single hot nodule, rest suppressed |
| Subacute thyroiditis | Low (<5%) | No uptake |
| Painless thyroiditis | Low | No uptake |
| Factitious | Very low | No uptake |

*When RAIU Not Available:*
- TSH receptor antibodies (TRAb) → Graves if positive
- Ultrasound with Doppler (high flow in Graves)
- Thyroglobulin (low in factitious)

**Anti-Thyroid Drug Therapy:**

*Methimazole (MMI):*
| Aspect | Details |
|--------|---------|
| Mechanism | Inhibits TPO (blocks organification) |
| Starting dose | 10-30 mg daily |
| Duration | 12-18 months for Graves |
| Advantages | Once daily, fewer side effects |
| Monitoring | TSH, FT4 every 4-6 weeks initially |

*Propylthiouracil (PTU):*
| Aspect | Details |
|--------|---------|
| Mechanism | Inhibits TPO + peripheral T4→T3 |
| Starting dose | 100-200 mg TID |
| Duration | Same as MMI |
| Indications | First trimester pregnancy, thyroid storm |
| Caution | Hepatotoxicity risk |

*Side Effects:*
| Common | Serious |
|--------|---------|
| Rash (5%) | Agranulocytosis (0.3%) |
| Arthralgia | PTU: Hepatotoxicity |
| GI upset | Vasculitis (ANCA+) |

*Agranulocytosis Warning:*
- Occurs in first 3 months usually
- Present with fever, sore throat
- Educate patient to stop drug and seek care
- Check WBC urgently

**Radioactive Iodine (RAI):**

*Protocol:*
\`\`\`
Preparation:
- Stop anti-thyroid drugs 3-7 days before
- Low iodine diet (optional, improves uptake)
- Pregnancy test in women of childbearing age

Administration:
- I-131 oral capsule or liquid
- Dose: 10-15 mCi typical for Graves
- Higher for toxic nodular goiter

Post-Treatment:
- Radiation precautions (1-3 days)
- Avoid pregnancy for 6-12 months
- Most become hypothyroid (expected)
\`\`\`

*Considerations:*
| Favor RAI | Avoid RAI |
|-----------|-----------|
| Older patients | Active Graves ophthalmopathy |
| Surgical risk | Pregnancy/planning pregnancy soon |
| Failed medical therapy | Very large goiter |
| Toxic nodular disease | Cannot follow radiation precautions |

**Thyroidectomy:**

*Indications:*
- Large goiter with compressive symptoms
- Thyroid nodule concerning for malignancy
- Cannot tolerate anti-thyroid drugs
- Contraindication to RAI
- Patient preference
- Moderate-severe Graves ophthalmopathy

*Preparation:*
- Normalize thyroid levels (medical therapy)
- Potassium iodide (SSKI) last 10 days (reduces vascularity)
- Beta-blocker continuation

**Special Situations:**

*Subclinical Hyperthyroidism:*
- TSH low, FT4/FT3 normal
- May be mild (0.1-0.4) or severe (<0.1)
- Treat if: TSH persistently <0.1, AF risk factors, bone loss
- Monitor if: TSH 0.1-0.4, asymptomatic

*Thyroiditis:*
- Destructive process; RAIU low
- Self-limited (weeks to months)
- Beta-blockers for symptom control
- Anti-thyroid drugs NOT effective
- May progress to hypothyroidism

*Pregnancy:*
- First trimester: PTU preferred
- Second/third trimester: Switch to methimazole
- Lowest effective dose (minimize fetal effects)
- Monitor monthly`,
      keyTerms: [
        { term: 'agranulocytosis', definition: 'Severe drop in white blood cells; rare but serious complication of anti-thyroid drugs' },
        { term: 'SSKI', definition: 'Saturated solution of potassium iodide; used to reduce thyroid vascularity before surgery' },
        { term: 'subclinical hyperthyroidism', definition: 'Low TSH with normal FT4/FT3; may require treatment if severe or symptomatic' },
        { term: 'TRAb', definition: 'TSH receptor antibodies; confirms Graves disease' },
      ],
      clinicalNotes: 'Patients on anti-thyroid drugs must be educated about agranulocytosis symptoms and instructed to stop medication and seek immediate care if fever or sore throat develops. RAI should be avoided or steroid-covered in active moderate-severe Graves ophthalmopathy due to risk of worsening. PTU has black box warning for hepatotoxicity; use only when methimazole is contraindicated.',
    },
    4: {
      level: 4,
      summary: 'Advanced hyperthyroidism management addresses Graves ophthalmopathy, amiodarone-induced thyroid dysfunction, thyroid storm, and special populations with personalized treatment selection based on disease characteristics and patient factors.',
      explanation: `**Graves Ophthalmopathy (TED):**

*Pathophysiology:*
- TSH receptor expression on orbital fibroblasts
- Cross-reactive antibodies trigger inflammation
- Glycosaminoglycan accumulation, adipogenesis
- Extraocular muscle fibrosis

*Clinical Activity Score (CAS):*
\`\`\`
Score 1 point each (max 7 for initial):
1. Spontaneous orbital pain
2. Pain with eye movement
3. Eyelid erythema
4. Eyelid swelling
5. Conjunctival redness
6. Conjunctival edema (chemosis)
7. Caruncle swelling

Active disease: CAS ≥3/7
\`\`\`

*Management:*
| Severity | Treatment |
|----------|-----------|
| Mild | Artificial tears, sunglasses, head elevation |
| Moderate-severe active | IV glucocorticoids, teprotumumab |
| Sight-threatening | IV steroids, urgent decompression |
| Inactive/stable | Rehabilitative surgery if needed |

*Teprotumumab:*
- IGF-1R inhibitor
- Dramatic proptosis reduction
- FDA approved 2020
- High cost, infusion therapy

**Amiodarone-Induced Thyrotoxicosis (AIT):**

*Two Types:*
| Feature | Type 1 | Type 2 |
|---------|--------|--------|
| Mechanism | Iodine excess in underlying thyroid disease | Drug-induced thyroiditis |
| Thyroid | Abnormal (goiter, nodules) | Normal |
| RAIU | Low/normal | Very low |
| Color Doppler | Increased flow | Absent/decreased |
| Treatment | Anti-thyroid drugs | Steroids |

*Management Challenge:*
- Often mixed type (Type 1 + Type 2)
- May need combination therapy
- Consider stopping amiodarone (if cardiologically safe)
- Thyroidectomy if refractory

**Thyroid Storm:**

*Burch-Wartofsky Score:*
| Parameter | Points |
|-----------|--------|
| Temperature 99-99.9°F | 5 |
| Temperature 100-100.9°F | 10 |
| Temperature >104°F | 30 |
| Heart rate 100-109 | 5 |
| Heart rate ≥140 | 25 |
| CNS: Mild agitation | 10 |
| CNS: Delirium, coma | 30 |
| GI: Diarrhea, nausea | 10 |
| GI: Jaundice | 20 |
| CHF: Mild | 5 |
| CHF: Severe | 25 |
| AF | 10 |
| Precipitant present | 10 |

Score ≥45: Highly suggestive

*Treatment Protocol:*
\`\`\`
1. Block Synthesis:
   - PTU 500-1000 mg load, then 250 mg q4h
   (preferred over MMI - also blocks conversion)

2. Block Release (1 hour after PTU):
   - SSKI 5 drops q6h OR
   - Lugol's solution OR
   - Lithium (if iodine allergic)

3. Block Conversion:
   - PTU (already giving)
   - Hydrocortisone 100 mg q8h

4. Block Adrenergic Effects:
   - Propranolol 60-80 mg q4h
   - Or esmolol drip

5. Supportive:
   - Cooling (avoid salicylates)
   - IV fluids
   - Treat precipitant

6. Definitive:
   - Consider urgent thyroidectomy if refractory
\`\`\`

**Special Populations:**

*Pregnancy:*
| Trimester | Drug | Notes |
|-----------|------|-------|
| First | PTU | MMI associated with birth defects |
| Second/Third | MMI or PTU | Switch from PTU to avoid hepatotoxicity |
| All | Lowest dose | Keep FT4 high-normal |

*Gestational Thyrotoxicosis:*
- hCG cross-reacts with TSH receptor
- Peak at 10-12 weeks
- Resolves by second trimester
- Usually no treatment needed
- Distinguish from Graves (TRAb negative)

*Atrial Fibrillation:*
- Present in 10-25% of hyperthyroid patients
- Rate control (beta-blocker)
- Anticoagulation per guidelines
- May convert spontaneously once euthyroid
- Cardioversion after euthyroid 3+ months

**Treatment Selection Algorithm:**

\`\`\`
Graves Disease:
├─ First episode, young, small goiter → ATD trial
├─ Failed ATD or relapse → RAI or surgery
├─ Large goiter, nodule → Surgery
├─ Moderate-severe TED → Avoid RAI; consider surgery
└─ Planning pregnancy → ATD; consider surgery before pregnancy

Toxic Multinodular Goiter:
├─ Small goiter, no compressive → RAI
├─ Large goiter, compressive → Surgery
└─ Surgical risk → RAI (may need higher dose)

Toxic Adenoma:
├─ <3 cm → RAI
├─ ≥3 cm → Surgery
└─ Surgical risk → RAI
\`\`\``,
      keyTerms: [
        { term: 'Burch-Wartofsky score', definition: 'Point-based scoring system for diagnosing thyroid storm severity' },
        { term: 'AIT', definition: 'Amiodarone-induced thyrotoxicosis; Type 1 (iodine excess) or Type 2 (thyroiditis)' },
        { term: 'teprotumumab', definition: 'IGF-1R inhibitor for Graves ophthalmopathy; reduces proptosis' },
        { term: 'Wolff-Chaikoff effect', definition: 'Transient inhibition of thyroid hormone synthesis with high iodine; therapeutic in thyroid storm' },
      ],
      clinicalNotes: 'Thyroid storm is a clinical diagnosis; do not wait for labs to start treatment. PTU is preferred over methimazole in thyroid storm because it also inhibits peripheral T4→T3 conversion. Give iodine at least 1 hour after anti-thyroid drugs to avoid providing substrate for more hormone synthesis. Teprotumumab has revolutionized Graves ophthalmopathy treatment but is extremely expensive.',
    },
    5: {
      level: 5,
      summary: 'Expert hyperthyroidism management encompasses precision treatment selection, management of refractory disease, emerging targeted therapies, and understanding of molecular mechanisms driving autoimmunity and autonomous hormone production.',
      explanation: `**Molecular Mechanisms:**

*Graves Disease:*
\`\`\`
TSH Receptor Antibodies:
- Stimulating (TSI): Activate receptor → hyperthyroidism
- Blocking (TBI): Block TSH binding → hypothyroidism
- Neutral: Bind without effect

Individual patients may have combinations
Ratio affects clinical presentation

Epitope Specificity:
- Different antibodies bind different receptor regions
- May explain variable clinical features
- TRAb assays don't distinguish subtypes
\`\`\`

*Toxic Adenoma - Somatic Mutations:*
| Gene | Mutation | Frequency |
|------|----------|-----------|
| TSHR | Constitutively activating | 60-80% |
| GNAS | Gs-alpha | 5-10% |
| Other | Various | Rare |

**Refractory Hyperthyroidism:**

*ATD Failure Predictors:*
| Factor | Higher Relapse Risk |
|--------|---------------------|
| Large goiter | >40 mL |
| High TRAb | >10 IU/L at diagnosis |
| High T3:T4 ratio | Suggests ongoing stimulation |
| Young age | <40 years |
| Male sex | Higher relapse |
| Smoking | Higher relapse, worse TED |

*Management of ATD Failure:*
\`\`\`
After 12-18 month course:
- ~50% relapse within 1 year of stopping
- Options: Extended ATD, RAI, or surgery

Long-term low-dose ATD:
- Consider if patient prefers
- Monitor periodically for side effects
- May be continued for years
\`\`\`

**Emerging Therapies:**

*TSH Receptor Antagonists:*
| Agent | Status | Mechanism |
|-------|--------|-----------|
| K1-70 | Clinical trials | Monoclonal antibody |
| Small molecule | Preclinical | Receptor antagonist |

*Potential Advantages:*
- Target underlying disease mechanism
- Could avoid ablative therapy
- Might address TED directly

*Immunomodulation:*
- Rituximab (anti-CD20): Limited efficacy data
- ATX-GD-59 (immunotherapy): Phase 1
- Tolerogenic approaches: Research

**RAI Considerations - Advanced:**

*Dosimetry:*
\`\`\`
Approaches:
1. Fixed dose (10-15 mCi) - Simple, common
2. Calculated dose (target Gray delivery) - More precise

Calculated:
Dose (mCi) = (Thyroid mass × Target Gy) / (Uptake × 0.67)

Target typically 150-200 Gy for Graves
Higher (250-300 Gy) for toxic nodular disease
\`\`\`

*Predictors of RAI Outcome:*
| Factor | Effect |
|--------|--------|
| Higher RAIU | Better response |
| Larger thyroid | May need higher dose |
| Severe disease | May need repeat treatment |
| ATD pretreatment | Some studies: lower cure rate |

**Thyroid Eye Disease - Comprehensive:**

*Pathophysiology Updates:*
\`\`\`
Key Players:
- IGF-1R: Expressed on orbital fibroblasts
- TSH-R: Cross-reactive with thyroid antibodies
- CD34+/CD34- fibroblasts: Different responses
- IL-6, IL-1β, TNF-α: Inflammatory mediators

Teprotumumab Success:
- IGF-1R blockade reduces:
  - Hyaluronan production
  - Adipogenesis
  - Orbital inflammation
- Proptosis improvement in >80%
\`\`\`

*Treatment Algorithm:*
\`\`\`
Assessment:
├─ Activity (CAS score)
├─ Severity (EUGOGO classification)
└─ QOL impact

Active Mild:
└─ Selenium, artificial tears, observation

Active Moderate-Severe:
├─ Teprotumumab (if available/affordable)
├─ Or IV methylprednisolone pulse
├─ Second-line: Orbital radiation
└─ Refractory: Combination therapy

Sight-Threatening:
├─ IV steroids (high dose)
└─ Urgent orbital decompression

Inactive Disease:
└─ Rehabilitative surgery (sequence matters)
   1. Decompression
   2. Strabismus
   3. Eyelid
\`\`\`

**Pregnancy - Detailed Management:**

*Fetal Considerations:*
| Issue | Monitoring/Management |
|-------|----------------------|
| ATD-induced congenital defects | Lowest dose, avoid MMI in T1 |
| Fetal/neonatal thyrotoxicosis | TRAb level at 20-24 weeks |
| Fetal goiter/hypothyroidism | Fetal ultrasound, adjust ATD |

*TRAb in Pregnancy:*
\`\`\`
If TRAb elevated at 20-24 weeks:
- Monitor fetal HR (persistently >160 concerning)
- Serial ultrasounds for goiter
- Neonatal TSH/FT4 at birth and 3-5 days

Neonatal thyrotoxicosis:
- Due to transplacental maternal TRAb
- May be delayed (if mother on ATD)
- Usually self-limited (TRAb clears)
\`\`\`

**Long-term Outcomes:**

*Cardiovascular Risk:*
- AF: Screen and treat; anticoagulate appropriately
- Subclinical hyperthyroidism: Increased CV mortality
- Heart failure: Consider early definitive therapy

*Bone Health:*
- Hyperthyroidism increases bone turnover
- Prolonged TSH suppression: Osteoporosis risk
- Monitor bone density in at-risk patients

*Malignancy Considerations:*
- Thyroid cancer incidence in Graves: Debated
- RAI and secondary malignancy: Minimal risk at therapeutic doses
- Overall mortality: May be slightly elevated in Graves`,
      keyTerms: [
        { term: 'TSI', definition: 'Thyroid-stimulating immunoglobulin; specific stimulating TSH receptor antibody' },
        { term: 'EUGOGO', definition: 'European Group on Graves Orbitopathy; developed TED classification and guidelines' },
        { term: 'K1-70', definition: 'Monoclonal antibody TSH receptor antagonist in clinical trials' },
        { term: 'dosimetry', definition: 'Calculation of RAI dose based on thyroid mass, uptake, and target radiation delivery' },
      ],
      clinicalNotes: 'TSH receptor antagonists in development may eventually provide disease-modifying treatment for Graves disease. Teprotumumab has transformed TED management but cost (~$300,000/course) limits access. For pregnant patients with Graves, TRAb should be measured in the third trimester to assess neonatal risk. Long-term subclinical hyperthyroidism increases cardiovascular risk and should be treated in older patients or those with risk factors.',
    },
  },

  media: [
    {
      id: 'hyperthyroidism-1',
      type: 'diagram',
      filename: 'hyperthyroidism-causes.svg',
      title: 'Causes of Hyperthyroidism',
      description: 'Differential diagnosis of thyrotoxicosis',
    },
    {
      id: 'hyperthyroidism-treatment-1',
      type: 'diagram',
      filename: 'hyperthyroidism-treatment-algorithm.svg',
      title: 'Hyperthyroidism Treatment Algorithm',
      description: 'Treatment selection based on etiology',
    },
  ],

  citations: [
    {
      id: 'ross-hyperthyroidism',
      type: 'article',
      title: 'ATA Guidelines for Hyperthyroidism and Thyrotoxicosis',
      authors: ['Ross, DS', 'et al'],
      source: 'Thyroid',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'endocrinology-hypothyroidism', targetType: 'condition', relationship: 'related', label: 'Hypothyroidism' },
    { targetId: 'endocrinology-thyroid-nodules', targetType: 'condition', relationship: 'see-also', label: 'Thyroid Nodules' },
    { targetId: 'endocrine-thyroid-pathology', targetType: 'condition', relationship: 'see-also', label: 'Thyroid Pathology' },
  ],

  tags: {
    systems: ['endocrine'],
    topics: ['thyroid', 'endocrinology', 'clinical medicine'],
    keywords: ['hyperthyroidism', 'Graves', 'thyrotoxicosis', 'methimazole', 'radioiodine', 'thyroid storm'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['endocrinology', 'medicine'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
