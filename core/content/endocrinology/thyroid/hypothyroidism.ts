/**
 * Hypothyroidism
 *
 * Clinical condition of thyroid hormone deficiency including causes,
 * clinical manifestations, diagnosis, and management.
 */

import { EducationalContent } from '../../types';

export const HYPOTHYROIDISM: EducationalContent = {
  id: 'endocrinology-hypothyroidism',
  type: 'condition',
  name: 'Hypothyroidism',
  alternateNames: ['Underactive thyroid', 'Thyroid hormone deficiency', 'Myxedema'],

  levels: {
    1: {
      level: 1,
      summary: 'Hypothyroidism happens when your thyroid gland does not make enough hormone, making everything in your body slow down.',
      explanation: `**What Is Hypothyroidism?**

Your thyroid gland normally makes hormones that control how fast your body works (your metabolism). In hypothyroidism, your thyroid does not make enough hormone, so everything slows down.

**Common Symptoms:**

- Feeling tired all the time
- Gaining weight without eating more
- Feeling cold when others feel fine
- Dry skin and brittle nails
- Constipation
- Feeling sad or depressed
- Slow thinking and forgetfulness
- Puffy face, especially around the eyes
- Hair loss or thinning hair

**What Causes It?**

1. **Hashimoto's disease** (most common)
   - Your immune system attacks your thyroid by mistake
   - Runs in families

2. **Medical treatments**
   - Surgery to remove thyroid
   - Radiation treatment
   - Some medications

3. **Not enough iodine** (rare in countries with iodized salt)

**Treatment:**

- Taking a thyroid hormone pill every day (levothyroxine)
- Works very well - most people feel completely normal
- Need to take it for life
- Regular blood tests to check the dose is right

**Important to Know:**

- Very common, especially in women and older adults
- Easy to treat once diagnosed
- Without treatment, can cause serious health problems`,
      keyTerms: [
        { term: 'thyroid', definition: 'A butterfly-shaped gland in your neck that makes hormones controlling metabolism' },
        { term: 'metabolism', definition: 'How your body uses energy from food' },
        { term: 'levothyroxine', definition: 'A pill that replaces the hormone your thyroid cannot make' },
        { term: 'Hashimoto disease', definition: 'When your immune system attacks and damages your thyroid' },
      ],
      analogies: [
        'Having hypothyroidism is like driving a car with the emergency brake on - everything works harder but moves slower.',
        'Thyroid hormone is like the gas pedal for your body - too little and you cannot speed up.',
      ],
      examples: [
        'A woman who gains weight, feels cold, and is always tired might have hypothyroidism.',
        'After thyroid surgery, a patient takes levothyroxine every morning to replace the missing hormone.',
      ],
    },
    2: {
      level: 2,
      summary: 'Hypothyroidism results from inadequate thyroid hormone production, most commonly due to autoimmune thyroiditis (Hashimoto), presenting with hypometabolic symptoms and diagnosed by elevated TSH with low free T4.',
      explanation: `**Causes of Hypothyroidism:**

*Primary (Thyroid Gland Problem):*
| Cause | Mechanism | Notes |
|-------|-----------|-------|
| Hashimoto thyroiditis | Autoimmune destruction | Most common in developed countries |
| Iodine deficiency | Cannot make hormone | Most common worldwide |
| Post-ablative | Surgery, radioiodine | Intentional treatment |
| Drugs | Lithium, amiodarone | Reversible if stopped |
| Congenital | Absent/abnormal thyroid | Newborn screening |

*Secondary/Central (Pituitary Problem):*
- TSH deficiency from pituitary disease
- Less common
- Different treatment approach

**Clinical Presentation:**

*Symptoms by System:*
| System | Symptoms |
|--------|----------|
| General | Fatigue, weight gain, cold intolerance |
| Skin | Dry, rough skin; brittle nails; hair loss |
| Cardiovascular | Slow heart rate, elevated cholesterol |
| GI | Constipation |
| Neurologic | Slow thinking, depression, memory problems |
| Reproductive | Irregular periods, infertility |
| Musculoskeletal | Muscle aches, joint pain |

*Physical Findings:*
- Bradycardia (slow heart rate)
- Periorbital edema (puffy eyes)
- Goiter (enlarged thyroid) or atrophic thyroid
- Delayed relaxation of deep tendon reflexes
- Non-pitting edema (myxedema)

**Diagnosis:**

*Initial Testing:*
| Test | Primary Hypothyroidism | Central Hypothyroidism |
|------|----------------------|----------------------|
| TSH | High (>4-10 mIU/L) | Low or normal |
| Free T4 | Low | Low |

*Additional Tests:*
- Anti-TPO antibodies: Confirm Hashimoto
- Anti-thyroglobulin antibodies: Additional marker
- Thyroid ultrasound: If nodules suspected

**Subclinical Hypothyroidism:**
- TSH elevated (4-10 mIU/L)
- Free T4 normal
- May have subtle symptoms
- Treatment controversial; depends on TSH level and symptoms

**Treatment:**

*Levothyroxine (T4):*
- Standard replacement therapy
- Typical dose: 1.6 mcg/kg/day
- Take on empty stomach, 30-60 min before breakfast
- Avoid calcium, iron within 4 hours

*Monitoring:*
- Check TSH 6-8 weeks after dose change
- Goal TSH: 0.5-2.5 mIU/L (younger adults)
- Annual monitoring once stable`,
      keyTerms: [
        { term: 'TSH', definition: 'Thyroid stimulating hormone from pituitary; elevated when thyroid function is low' },
        { term: 'anti-TPO antibodies', definition: 'Autoantibodies against thyroid peroxidase indicating autoimmune thyroiditis' },
        { term: 'subclinical hypothyroidism', definition: 'Elevated TSH with normal thyroid hormone levels' },
        { term: 'myxedema', definition: 'Severe hypothyroidism with non-pitting edema from mucopolysaccharide accumulation' },
      ],
      analogies: [
        'TSH and thyroid hormones work like a thermostat - when the room (T4) is cold, the thermostat (TSH) turns up.',
        'Subclinical hypothyroidism is like a warning light on your dashboard - the engine is still running but something needs attention.',
      ],
    },
    3: {
      level: 3,
      summary: 'Hypothyroidism diagnosis requires interpretation of TSH and free T4 in context of clinical presentation, with management focused on appropriate levothyroxine dosing, monitoring, and attention to special populations including pregnancy.',
      explanation: `**Etiology - Detailed:**

*Hashimoto Thyroiditis:*
- Autoimmune lymphocytic thyroiditis
- Anti-TPO antibodies (90-95%)
- Anti-thyroglobulin antibodies (60-80%)
- HLA-DR3, DR5 associations
- Progressive thyroid destruction
- May have initial hashitoxicosis

*Drug-Induced Hypothyroidism:*
| Drug | Mechanism | Notes |
|------|-----------|-------|
| Lithium | Inhibits hormone release | 10-20% prevalence |
| Amiodarone | Iodine excess, destructive | 5-25% prevalence |
| Immune checkpoint inhibitors | Autoimmune | Usually permanent |
| Tyrosine kinase inhibitors | Multiple | Variable |
| Interferon-alpha | Autoimmune trigger | May be permanent |

**Diagnosis - Nuances:**

*TSH Interpretation:*
\`\`\`
TSH Reference Range:
- Population range: 0.4-4.0 mIU/L
- Individual set point varies only 0.5-1.5 within this
- Upper limit increases with age

Age-Adjusted Upper Limits:
- 20-29 years: 3.6 mIU/L
- 70-79 years: 5.9 mIU/L
\`\`\`

*When to Consider Central Hypothyroidism:*
- Low or normal TSH with low FT4
- Other pituitary hormone deficiencies
- Pituitary/hypothalamic disease history
- No response to TRH stimulation

*Subclinical Hypothyroidism Management:*
| TSH Level | Symptoms | Anti-TPO | Treatment |
|-----------|----------|----------|-----------|
| >10 | Any | Any | Treat |
| 4-10 | Yes | Yes | Consider treating |
| 4-10 | No | Yes | Monitor (high conversion risk) |
| 4-10 | No | No | Monitor |

**Levothyroxine Therapy - Details:**

*Dosing Considerations:*
| Population | Initial Dose | Notes |
|------------|--------------|-------|
| Young, healthy | Full replacement | 1.6 mcg/kg |
| Elderly | Start low (25-50 mcg) | Increase slowly |
| Cardiac disease | Start very low (12.5-25 mcg) | Careful titration |
| Post-thyroidectomy | Full replacement | Higher doses needed |

*Absorption Issues:*
- Food decreases absorption (especially coffee)
- Calcium, iron, PPI reduce absorption
- Celiac disease, IBD affect absorption
- Consistent timing important

*Monitoring:*
\`\`\`
After starting or dose change:
- Check TSH at 6-8 weeks
- Adjust by 12.5-25 mcg increments

Once stable:
- Annual TSH monitoring
- More frequent if symptoms change
\`\`\`

**Pregnancy:**

*Thyroid Hormone Requirements:*
- Increase 25-50% in pregnancy
- Due to: ↑TBG, ↑plasma volume, fetal demands
- Begin increase early first trimester

*Treatment Goals:*
| Trimester | TSH Target |
|-----------|------------|
| First | <2.5 mIU/L (some: <4.0) |
| Second/Third | <3.0 mIU/L |

*Fetal Considerations:*
- Fetal thyroid not functional until week 12-14
- Maternal T4 crosses placenta
- Critical for brain development
- Untreated: Developmental delay, lower IQ

**Myxedema Coma:**

*Features:*
- Severe hypothyroidism
- Altered mental status
- Hypothermia
- Bradycardia, hypotension
- Hyponatremia
- Precipitant (infection, cold, sedatives)

*Treatment:*
- IV levothyroxine loading dose (200-500 mcg)
- +/- T3 (5-20 mcg)
- Stress-dose steroids
- Supportive care
- Treat precipitant`,
      keyTerms: [
        { term: 'hashitoxicosis', definition: 'Transient hyperthyroidism at onset of Hashimoto from hormone release by damaged thyroid' },
        { term: 'myxedema coma', definition: 'Life-threatening severe hypothyroidism with altered consciousness requiring emergency treatment' },
        { term: 'TBG', definition: 'Thyroxine-binding globulin; increases in pregnancy affecting total but not free T4' },
        { term: 'set point', definition: 'Individual-specific TSH level maintained by feedback; varies within population range' },
      ],
      clinicalNotes: 'In pregnancy, check TSH early and increase levothyroxine dose by 30% empirically if already on treatment. Subclinical hypothyroidism treatment is more strongly indicated if TSH >10, symptoms present, or positive antibodies. Myxedema coma has 20-40% mortality and requires ICU-level care with IV thyroid hormone replacement.',
    },
    4: {
      level: 4,
      summary: 'Advanced hypothyroidism management addresses persistent symptoms despite biochemical euthyroidism, combination T4/T3 therapy controversies, drug interactions, and special considerations in cardiac disease, central hypothyroidism, and non-thyroidal illness.',
      explanation: `**Persistent Symptoms on Levothyroxine:**

*Causes to Evaluate:*
| Category | Examples |
|----------|----------|
| Inadequate dose | TSH not optimized (check adherence) |
| Absorption issues | PPIs, coffee, malabsorption |
| Comorbidities | Depression, anemia, sleep apnea |
| Non-thyroid illness | Explaining symptoms |
| DIO2 polymorphism | Thr92Ala variant |

*DIO2 Polymorphism:*
- Type 2 deiodinase converts T4→T3 in tissues
- Thr92Ala variant: Reduced activity
- May have lower tissue T3 despite normal serum
- Hypothesized to benefit from T3 addition
- Evidence still inconclusive

**Combination T4/T3 Therapy:**

*Rationale:*
- Normal thyroid secretes T4 and some T3
- T4 monotherapy relies entirely on peripheral conversion
- Some patients may have inadequate conversion

*Evidence:*
| Study Type | Outcome |
|------------|---------|
| RCTs | No consistent benefit vs T4 alone |
| Meta-analyses | Mixed results |
| Guidelines | Do not routinely recommend |

*When to Consider:*
- Persistent symptoms with optimized T4
- Patient preference after discussion
- Trial period with objective endpoints

*If Using:*
- T4:T3 ratio 13-20:1 (mimic physiology)
- Use low-dose T3 (5-7.5 mcg twice daily)
- Monitor both TSH and T3 levels
- Avoid in cardiac disease, elderly

**Drug Interactions:**

*Reduce Levothyroxine Absorption:*
| Drug | Mechanism | Management |
|------|-----------|------------|
| Calcium carbonate | Chelation | Separate by 4h |
| Iron | Chelation | Separate by 4h |
| PPIs/H2 blockers | ↓gastric acid | May need higher dose |
| Sucralfate | Binding | Separate by 4h |
| Bile acid sequestrants | Binding | Separate by 4h |

*Increase Levothyroxine Metabolism:*
| Drug | Mechanism |
|------|-----------|
| Phenytoin | CYP3A4 induction |
| Carbamazepine | CYP3A4 induction |
| Rifampin | CYP3A4 induction |

*Affect Binding Proteins:*
- Estrogen → ↑TBG → need more T4
- Androgens → ↓TBG → may need less T4

**Cardiac Disease:**

*Challenges:*
- Hypothyroidism worsens cardiac function
- But T4 increases myocardial oxygen demand
- Risk of arrhythmia, angina with rapid replacement

*Approach:*
\`\`\`
Starting Dose:
- Mild/moderate hypothyroidism: 12.5-25 mcg
- Severe hypothyroidism: Consider ICU monitoring

Titration:
- Increase by 12.5-25 mcg every 4-6 weeks
- Accept slightly higher TSH if symptomatic on dose increase
- Target TSH 1-4 mIU/L acceptable

Monitoring:
- Symptoms of angina, arrhythmia
- May need cardiology co-management
\`\`\`

**Central Hypothyroidism:**

*Key Differences:*
| Feature | Primary | Central |
|---------|---------|---------|
| TSH | High | Low/normal/slightly high |
| Diagnosis | TSH + FT4 | FT4 (TSH unreliable) |
| Monitoring | TSH | FT4 (midnormal range) |
| Cortisol | Check if clinical | Must rule out AI before T4 |

*CRITICAL:* Always evaluate adrenal axis before treating central hypothyroidism - T4 increases cortisol metabolism and can precipitate adrenal crisis.

**Non-Thyroidal Illness (Sick Euthyroid):**

*Patterns:*
| Severity | T3 | T4 | TSH |
|----------|----|----|-----|
| Mild | Low | Normal | Normal |
| Moderate | Low | Low | Low/normal |
| Severe | Low | Low | Low |
| Recovery | Low | Normal | High |

*Management:*
- Generally do not treat with thyroid hormone
- Treat underlying illness
- Recheck after recovery (4-6 weeks)
- High TSH in recovery is normal

**Special Formulations:**

*Desiccated Thyroid (Armour):*
- Contains T4 and T3 (4:1 ratio)
- Not recommended by guidelines
- Variable potency
- Some patients prefer subjectively

*Liothyronine (T3):*
- Synthetic T3
- Rapid onset, short half-life
- Difficulty maintaining stable levels
- Not for routine hypothyroidism`,
      keyTerms: [
        { term: 'DIO2 Thr92Ala', definition: 'Polymorphism in type 2 deiodinase gene associated with possible reduced T4 to T3 conversion' },
        { term: 'non-thyroidal illness', definition: 'Sick euthyroid syndrome with abnormal thyroid tests during acute illness; usually resolves' },
        { term: 'liothyronine', definition: 'Synthetic T3; short half-life makes stable dosing difficult' },
        { term: 'desiccated thyroid', definition: 'Animal-derived thyroid extract containing T4 and T3; not recommended by guidelines' },
      ],
      clinicalNotes: 'Before attributing symptoms to inadequate T4 therapy, ensure medication adherence and optimal timing, rule out other causes, and optimize TSH. The DIO2 polymorphism hypothesis remains unproven for routine clinical use. In central hypothyroidism, adrenal function must be assessed before starting thyroid hormone to avoid precipitating adrenal crisis.',
    },
    5: {
      level: 5,
      summary: 'Expert management of hypothyroidism addresses precision medicine approaches including pharmacogenomics, management of treatment-resistant symptoms, myxedema coma, thyroid hormone resistance syndromes, and emerging therapeutic strategies.',
      explanation: `**Pharmacogenomics:**

*DIO2 Polymorphism - Evidence:*
\`\`\`
Thr92Ala Variant:
- ~15-20% homozygous in population
- In vitro: Reduced D2 activity
- Clinical studies: Inconsistent results
- GENBIT trial (ongoing): Testing T4+T3 in carriers

Current Stance:
- Insufficient evidence for routine testing
- Research interest continues
- May identify T3-responsive subgroup
\`\`\`

*Thyroid Hormone Transporters:*
| Gene | Transporter | Relevance |
|------|-------------|-----------|
| SLC16A2 | MCT8 | Allan-Herndon-Dudley syndrome |
| SLC16A10 | MCT10 | T3 transport |
| SLCO1C1 | OATP1C1 | Brain T4 transport |

**Treatment-Resistant Symptoms:**

*Systematic Approach:*
\`\`\`
Step 1: Verify diagnosis and treatment
- Confirm hypothyroidism was correct diagnosis
- Check TSH, FT4 on current regimen
- Assess adherence (absorption issues)

Step 2: Optimize T4 therapy
- TSH to lower normal range (0.5-2.0)
- Consistent timing, avoid interactions
- Consider absorption testing

Step 3: Evaluate comorbidities
- Depression/anxiety
- Sleep apnea
- B12/iron deficiency
- Adrenal insufficiency
- Fibromyalgia/chronic fatigue

Step 4: Consider T4/T3 trial (selected patients)
- Informed consent about evidence
- Defined trial period (3-6 months)
- Objective outcomes
- Stop if no benefit
\`\`\`

**Myxedema Coma - Comprehensive:**

*Diagnosis:*
| Feature | Details |
|---------|---------|
| Mental status | Lethargy to coma |
| Temperature | Often <35°C |
| Cardiovascular | Bradycardia, hypotension, effusions |
| Respiratory | Hypoventilation, CO2 retention |
| Laboratory | Low T4, high TSH, hyponatremia |

*Treatment Protocol:*
\`\`\`
Initial Management:
1. IV levothyroxine 200-400 mcg loading
2. Consider IV T3 5-20 mcg if severe
3. Hydrocortisone 50-100 mg IV q8h
   (until adrenal insufficiency ruled out)
4. Passive rewarming (active can cause vasodilation)
5. Careful fluid management
6. Ventilatory support if needed

Ongoing:
- T4 50-100 mcg IV daily
- T3 optional, controversial
- Taper steroids when stable
- Identify and treat precipitant
\`\`\`

*Precipitants:*
- Infection (most common)
- Cold exposure
- Sedatives, anesthesia
- Trauma, surgery
- Stroke, MI

**Resistance to Thyroid Hormone:**

*RTH-beta (THRB mutations):*
| Feature | Details |
|---------|---------|
| Inheritance | Autosomal dominant |
| Biochemistry | High FT4, high/normal TSH |
| Mechanism | Mutant TRβ dominant negative |
| Clinical | Variable - some symptomatic, some not |

*Pitfalls:*
- May be misdiagnosed as hyperthyroidism
- Do NOT treat with antithyroid drugs
- TSH-secreting adenoma must be excluded

*Management:*
- Many patients require no treatment
- Beta-blockers for tachycardia if needed
- Supraphysiologic T4 if clearly hypothyroid
- TRIAC (tiratricol) in some cases

**Congenital Hypothyroidism:**

*Screening and Diagnosis:*
\`\`\`
Newborn Screen:
- TSH-based: Detects primary hypothyroidism
- T4/TSH: Also detects central

Confirm within 2 weeks:
- Repeat TSH, FT4
- Thyroid ultrasound
- Technetium or I-123 scan (optional)

Molecular Testing:
- TSHR, PAX8, TTF1/2 mutations
- Dyshormonogenesis genes
\`\`\`

*Treatment Goals:*
- Start treatment before 2 weeks of age
- Normalize T4 within 2 weeks
- Higher doses than adults (10-15 mcg/kg)
- Critical for neurodevelopment

**Emerging Therapies:**

*Long-Acting T4 Formulations:*
- Weekly levothyroxine being studied
- May improve adherence
- Pharmacokinetic challenges

*Oral T3 Formulations:*
| Type | Status |
|------|--------|
| Sustained-release T3 | Compounding pharmacies |
| Slow-release T3 | Research |
| Polymer-bound T3 | Development |

*Thyroid Hormone Analogs:*
| Compound | Target | Use |
|----------|--------|-----|
| Eprotirome | TRβ-selective | Lipids (discontinued) |
| Sobetirome | TRβ-selective | Lipids (research) |
| Resmetirom | TRβ-selective | NASH (advancing) |

**Future Directions:**

*Personalized Targets:*
- Individual TSH set-point determination
- Genetic profiling for optimal therapy
- Tissue-specific thyroid hormone levels

*Novel Delivery:*
- Transdermal T4
- Sublingual formulations
- Implantable delivery systems`,
      keyTerms: [
        { term: 'RTH-beta', definition: 'Resistance to thyroid hormone beta due to THRB mutation; elevated T4/T3 with non-suppressed TSH' },
        { term: 'TRIAC', definition: 'Tiratricol; thyroid hormone analog used in some RTH cases' },
        { term: 'MCT8', definition: 'Monocarboxylate transporter 8; transports T3 into cells; deficiency causes severe neurological disease' },
        { term: 'GENBIT', definition: 'Genetic Basis for Individual Thyroxine Treatment trial studying DIO2 polymorphism' },
      ],
      clinicalNotes: 'Myxedema coma mortality remains 20-40% despite treatment; prevention through adequate outpatient management is essential. RTH-beta should be suspected when FT4 is elevated but TSH is not suppressed and patient has mixed hyper/hypothyroid features. Congenital hypothyroidism treatment must begin within the first 2 weeks of life to prevent permanent neurodevelopmental impairment.',
    },
  },

  media: [
    {
      id: 'hypothyroidism-1',
      type: 'diagram',
      filename: 'hypothyroidism-pathophysiology.svg',
      title: 'Hypothyroidism Pathophysiology',
      description: 'Causes and mechanisms of hypothyroidism',
    },
    {
      id: 'hypothyroidism-management-1',
      type: 'diagram',
      filename: 'hypothyroidism-treatment-algorithm.svg',
      title: 'Hypothyroidism Management Algorithm',
      description: 'Approach to diagnosis and treatment',
    },
  ],

  citations: [
    {
      id: 'garber-hypothyroidism',
      type: 'article',
      title: 'ATA/AACE Guidelines for Hypothyroidism in Adults',
      authors: ['Garber, JR', 'et al'],
      source: 'Thyroid',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'endocrinology-hyperthyroidism', targetType: 'condition', relationship: 'related', label: 'Hyperthyroidism' },
    { targetId: 'endocrine-thyroid-pathology', targetType: 'condition', relationship: 'see-also', label: 'Thyroid Pathology' },
    { targetId: 'endocrine-hormone-testing', targetType: 'concept', relationship: 'related', label: 'Hormone Testing' },
  ],

  tags: {
    systems: ['endocrine'],
    topics: ['thyroid', 'endocrinology', 'clinical medicine'],
    keywords: ['hypothyroidism', 'thyroid', 'Hashimoto', 'levothyroxine', 'TSH', 'myxedema'],
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
