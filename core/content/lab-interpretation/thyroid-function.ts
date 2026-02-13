/**
 * Thyroid Function Tests - Laboratory Interpretation Content
 *
 * Comprehensive educational content for thyroid function test interpretation including:
 * - TSH (Thyroid Stimulating Hormone)
 * - Free T4 (Thyroxine)
 * - Free T3 (Triiodothyronine)
 * - Total T4 and T3
 * - Thyroid Antibodies
 */

import { LabInterpretationContent, LabPanel, PanelPattern } from './types';

// =============================================================================
// TSH (THYROID STIMULATING HORMONE)
// =============================================================================

export const tshInterpretation: LabInterpretationContent = {
  id: 'lab-tsh',
  type: 'concept',
  name: 'TSH (Thyroid Stimulating Hormone)',
  alternateNames: ['Thyrotropin', 'Thyroid Stimulating Hormone'],

  labMetadata: {
    loincCode: '3016-3',
    testName: 'TSH',
    commonAbbreviations: ['TSH'],
    category: 'thyroid',
    panel: 'Thyroid Panel',
    orderingFrequency: 'routine',
  },

  referenceRanges: {
    adult: {
      low: 0.4,
      high: 4.0,
      unit: 'mIU/L',
      notes: 'Standard adult reference range; some labs use 0.5-4.5',
    },
    variations: [
      {
        low: 0.1,
        high: 2.5,
        unit: 'mIU/L',
        demographic: { trimester: 1 },
        notes: 'First trimester pregnancy - lower due to hCG stimulation',
      },
      {
        low: 0.5,
        high: 4.5,
        unit: 'mIU/L',
        demographic: { ageGroup: 'geriatric' },
        notes: 'Elderly may have slightly higher upper limit',
      },
    ],
  },

  criticalValues: {
    low: 0.1,
    high: 10.0,
    unit: 'mIU/L',
    urgency: 'expedited',
    action: 'Low: evaluate for hyperthyroidism, thyroid storm risk. High: evaluate for hypothyroidism, myxedema coma risk in severe cases.',
    notificationRequired: true,
  },

  interpretations: {
    low: {
      direction: 'low',
      severity: 'moderate',
      causes: [
        {
          category: 'Primary Hyperthyroidism',
          causes: [
            'Graves disease (most common)',
            'Toxic multinodular goiter',
            'Toxic adenoma',
            'Subacute thyroiditis (transient)',
            'Postpartum thyroiditis (transient)',
          ],
          commonality: 'common',
        },
        {
          category: 'Exogenous',
          causes: [
            'Thyroid hormone excess (overreplacement or intentional)',
            'Factitious thyrotoxicosis',
          ],
          commonality: 'common',
        },
        {
          category: 'Central',
          causes: [
            'Pituitary disease (secondary hypothyroidism - low TSH with low T4)',
            'Hypothalamic disease',
            'Non-thyroidal illness (sick euthyroid)',
          ],
          commonality: 'uncommon',
        },
      ],
      associatedFindings: [
        'Elevated free T4 and/or T3 in hyperthyroidism',
        'Weight loss, palpitations, tremor, heat intolerance',
        'Goiter, ophthalmopathy in Graves disease',
      ],
      workupSuggestions: [
        'Free T4 and Free T3',
        'TSH receptor antibodies (if Graves suspected)',
        'Thyroid ultrasound',
        'Radioactive iodine uptake if diagnosis unclear',
      ],
      clinicalPearls: [
        'Suppressed TSH with normal T4/T3 = subclinical hyperthyroidism',
        'TSH may be low in first trimester pregnancy (normal)',
        'Low TSH + low T4 suggests central hypothyroidism',
      ],
    },
    high: {
      direction: 'high',
      severity: 'moderate',
      causes: [
        {
          category: 'Primary Hypothyroidism',
          causes: [
            'Hashimoto thyroiditis (most common)',
            'Post-thyroidectomy or radioactive iodine',
            'Iodine deficiency (rare in developed countries)',
            'Drug-induced (lithium, amiodarone, checkpoint inhibitors)',
            'Congenital hypothyroidism',
          ],
          commonality: 'common',
        },
        {
          category: 'Other',
          causes: [
            'TSH-secreting pituitary adenoma (rare)',
            'Thyroid hormone resistance (rare)',
            'Recovery from non-thyroidal illness',
            'Assay interference (heterophilic antibodies)',
          ],
          commonality: 'rare',
        },
      ],
      associatedFindings: [
        'Low free T4 in overt hypothyroidism',
        'Fatigue, weight gain, cold intolerance, constipation',
        'Goiter may be present',
        'Elevated cholesterol',
      ],
      workupSuggestions: [
        'Free T4 to confirm hypothyroidism',
        'TPO antibodies to identify autoimmune cause',
        'Lipid panel (hypercholesterolemia common)',
      ],
      clinicalPearls: [
        'Elevated TSH with normal T4 = subclinical hypothyroidism',
        'TSH >10 with symptoms usually warrants treatment',
        'TSH 4.5-10 is gray zone - treat if symptoms or TPO antibodies positive',
      ],
    },
  },

  specimen: {
    specimenType: 'serum',
    tubeType: 'Red top or gold top (SST)',
    volume: '3 mL',
    fastingRequired: false,
    stability: {
      roomTemp: '24 hours',
      refrigerated: '7 days',
    },
    interferences: ['Biotin supplements can interfere with some assays', 'Heterophilic antibodies'],
  },

  relatedLabs: ['lab-free-t4', 'lab-free-t3', 'lab-tpo-antibody', 'lab-thyroglobulin'],

  organAssociations: [
    { organId: 'pituitary', organName: 'Pituitary Gland', relationship: 'TSH secretion site' },
    { organId: 'thyroid', organName: 'Thyroid Gland', relationship: 'Target of TSH action' },
  ],

  levels: {
    1: {
      level: 1,
      summary: 'TSH is a hormone that tells your thyroid gland how much thyroid hormone to make. It helps doctors check if your thyroid is working properly.',
      explanation: `TSH stands for "Thyroid Stimulating Hormone." It's made by a small gland in your brain called the pituitary gland.

**How it works:**
- When your body needs more thyroid hormone, TSH goes UP to tell your thyroid to work harder
- When you have enough thyroid hormone, TSH goes DOWN

**What the results mean:**
- High TSH: Your thyroid is underactive (hypothyroidism)
- Low TSH: Your thyroid is overactive (hyperthyroidism)
- Normal TSH: Your thyroid is working properly

**Normal range:** Usually 0.4-4.0 mIU/L

TSH is usually the first test doctors order to check thyroid function.`,
      keyTerms: [
        { term: 'TSH', definition: 'Thyroid Stimulating Hormone - signals the thyroid gland to make thyroid hormones' },
        { term: 'hypothyroidism', definition: 'Underactive thyroid - not making enough thyroid hormone' },
        { term: 'hyperthyroidism', definition: 'Overactive thyroid - making too much thyroid hormone' },
      ],
      analogies: [
        'TSH is like a thermostat - when thyroid hormone is low, TSH turns up to make more; when hormone is high, TSH turns down.',
      ],
    },
    2: {
      level: 2,
      summary: 'TSH is the primary screening test for thyroid dysfunction. It has an inverse relationship with thyroid hormone levels due to negative feedback.',
      explanation: `## TSH Overview

**Normal Range:** 0.4-4.0 mIU/L (varies by lab)

**Negative Feedback Loop:**
- Hypothalamus → TRH → Pituitary → TSH → Thyroid → T4/T3
- T4/T3 inhibit TSH release (feedback inhibition)
- Low T4 → High TSH
- High T4 → Low TSH

## Interpretation Patterns

| TSH | Free T4 | Interpretation |
|-----|---------|----------------|
| High | Low | Primary hypothyroidism |
| High | Normal | Subclinical hypothyroidism |
| Low | High | Primary hyperthyroidism |
| Low | Normal | Subclinical hyperthyroidism |
| Low | Low | Central hypothyroidism |
| Normal | Normal | Euthyroid |

## Common Causes

**Hypothyroidism (High TSH):**
- Hashimoto thyroiditis (autoimmune, most common)
- Post-treatment (surgery, radioiodine)
- Medications (lithium, amiodarone)

**Hyperthyroidism (Low TSH):**
- Graves disease (autoimmune, most common)
- Toxic nodule(s)
- Thyroiditis (transient)`,
      keyTerms: [
        { term: 'negative feedback', definition: 'System where high hormone levels suppress the signal to make more' },
        { term: 'subclinical', definition: 'Abnormal TSH but normal thyroid hormones - early or mild disease' },
        { term: 'Hashimoto thyroiditis', definition: 'Autoimmune attack on thyroid causing hypothyroidism' },
      ],
      analogies: [
        'The thyroid system is like a thermostat: TSH is the temperature setting, T4 is the actual room temperature. If the room is cold (low T4), the thermostat calls for more heat (high TSH).',
      ],
    },
    3: {
      level: 3,
      summary: 'TSH interpretation requires understanding of assay sensitivity, clinical context, and recognition of patterns that suggest primary vs central thyroid dysfunction.',
      explanation: `## Systematic TSH Interpretation

### TSH Sensitivity
- Third-generation assays: Sensitivity <0.01 mIU/L
- Can distinguish between mildly and severely suppressed TSH
- Important for hyperthyroidism assessment

### Subclinical Disease

**Subclinical Hypothyroidism (TSH 4.5-10):**
| Factor | Consider Treatment |
|--------|-------------------|
| TSH >10 | Usually treat |
| Symptoms present | Treat |
| TPO antibodies positive | Higher progression risk, consider treating |
| Pregnancy or planning | Treat |
| Young patient | More likely to treat |
| Elderly (>70-80) | May observe (higher TSH normal for age) |

**Subclinical Hyperthyroidism:**
| TSH Level | Significance |
|-----------|--------------|
| 0.1-0.4 | Mild suppression - often observe |
| <0.1 | More significant - evaluate for cause |

### Special Situations

**Pregnancy:**
| Trimester | TSH Range |
|-----------|-----------|
| First | 0.1-2.5 mIU/L |
| Second | 0.2-3.0 mIU/L |
| Third | 0.3-3.0 mIU/L |

**Non-Thyroidal Illness (Sick Euthyroid):**
- TSH may be low, normal, or mildly elevated
- T3 typically low
- T4 variable
- Do not treat; reassess after recovery

**Central Hypothyroidism:**
- TSH normal or low despite low T4
- Pituitary/hypothalamic disease
- Diagnose by clinical context and MRI

### Drug Effects on TSH
| Drug | Effect |
|------|--------|
| Glucocorticoids | ↓ TSH |
| Dopamine | ↓ TSH |
| Metformin | May ↓ TSH slightly |
| Amiodarone | ↑ or ↓ (complex) |
| Biotin | Assay interference (usually low TSH) |`,
      keyTerms: [
        { term: 'non-thyroidal illness syndrome', definition: 'Abnormal thyroid tests during acute illness without thyroid disease' },
        { term: 'central hypothyroidism', definition: 'Low thyroid function due to pituitary or hypothalamus problem, not thyroid itself' },
      ],
      clinicalNotes: 'In hospitalized patients, defer non-urgent thyroid testing. TSH and T4 are often abnormal due to illness and normalize with recovery.',
    },
    4: {
      level: 4,
      summary: 'Advanced TSH interpretation includes understanding of TSH heterogeneity, assay interference, and TSH in complex clinical scenarios.',
      explanation: `## Advanced TSH Interpretation

### TSH Bioactivity
- Not all TSH molecules are equally bioactive
- Glycosylation affects potency
- May explain some discordant results

### Assay Interference

**Biotin Interference:**
- Many supplements contain biotin
- Can cause falsely low TSH (and false high T4/T3)
- Hold biotin 48-72 hours before testing
- Increasing problem with biotin popularity

**Heterophilic Antibodies:**
- Can cause falsely high or low results
- Suspect with discordant clinical picture
- Request dilution studies or different assay

**Hook Effect:**
- Very high TSH may give falsely normal result
- Rare; occurs with TSH-secreting adenomas

### Complex Scenarios

**Amiodarone Effects:**
| Phase | Effect |
|-------|--------|
| Early | TSH may rise (inhibits T4→T3 conversion) |
| Type 1 | Hyperthyroidism (iodine-induced) |
| Type 2 | Thyroiditis (destructive hyperthyroidism) |
| Late | Hypothyroidism (iodine excess) |

**Post-Thyroidectomy Monitoring:**
- For differentiated thyroid cancer: TSH suppression
- Target TSH based on risk stratification
- High risk: TSH <0.1 mIU/L
- Low risk: TSH 0.5-2.0 mIU/L

**TSH-Secreting Adenoma:**
- TSH elevated or normal with elevated T4/T3
- Alpha subunit elevated
- MRI shows pituitary mass
- Rare (<1% of pituitary adenomas)

### Resistance Syndromes

**Thyroid Hormone Resistance:**
- Mutations in thyroid hormone receptor
- Elevated T4/T3 with normal or elevated TSH
- Usually no treatment needed
- Distinguish from TSH-oma`,
      keyTerms: [
        { term: 'biotin interference', definition: 'Vitamin B7 supplements causing falsely abnormal thyroid test results' },
        { term: 'TSH-secreting adenoma', definition: 'Rare pituitary tumor producing excessive TSH' },
        { term: 'thyroid hormone resistance', definition: 'Genetic syndrome with impaired response to thyroid hormone' },
      ],
      clinicalNotes: 'Always ask about biotin-containing supplements. High-dose biotin (for hair/nails or neurologic conditions) is a common cause of unexplained thyroid test abnormalities.',
    },
    5: {
      level: 5,
      summary: 'Expert TSH interpretation encompasses assay methodology, population-based reference ranges, and precision medicine approaches to thyroid management.',
      explanation: `## Expert-Level TSH Interpretation

### Assay Methodology
**Generations of TSH Assays:**
| Generation | Sensitivity | Use |
|------------|-------------|-----|
| First | 1-2 mIU/L | Historical |
| Second | 0.1-0.2 mIU/L | Basic screening |
| Third | 0.01-0.02 mIU/L | Current standard |
| Fourth | 0.001-0.002 mIU/L | Research |

**Standardization:**
- WHO International Reference Preparation
- Significant inter-assay variability remains
- Use same lab for monitoring

### Population-Specific Ranges

**Age-Specific Ranges:**
| Age | Upper Limit Consideration |
|-----|--------------------------|
| 20-40 | 4.0 mIU/L |
| 60-80 | 5.0-6.0 mIU/L may be normal |
| >80 | 7.0+ mIU/L may be normal |

**Treating elderly with mildly elevated TSH may increase mortality**

**Race/Ethnicity:**
- African Americans have lower mean TSH
- May explain some diagnostic discrepancies

### Precision Medicine

**Individual Set Point:**
- Each person has a narrow TSH set point
- Population reference range is wide
- Small changes may be significant for individuals

**Genetics:**
- Polymorphisms affect TSH set point
- DIO1, DIO2 affect T4→T3 conversion
- May explain some persistent symptoms despite normal TSH

### Controversial Areas

**Optimal TSH in Hypothyroidism Treatment:**
- Guidelines suggest 0.5-2.5 mIU/L on treatment
- Some patients feel better at lower end
- Evidence for specific target is limited
- Avoid TSH <0.1 (cardiac, bone risks)

**Subclinical Hypothyroidism Treatment:**
- Clear benefit if TSH >10 with symptoms
- Uncertain benefit if TSH 5-10
- Possible harm from treating elderly
- Pregnancy: treat if TSH >2.5 + TPO+ or >4

### Quality Considerations

**Pre-analytical:**
- Diurnal variation (highest early morning)
- Seasonal variation (higher in winter)
- Fasting vs non-fasting: minimal difference

**Analytical:**
- Standardization efforts ongoing
- Report reference range with result
- Different assays may give different results`,
      keyTerms: [
        { term: 'TSH set point', definition: 'Individual optimal TSH level that may be narrower than population range' },
        { term: 'deiodinase polymorphisms', definition: 'Genetic variants affecting thyroid hormone conversion' },
      ],
      clinicalNotes: 'Expert interpretation recognizes that population reference ranges may not apply to all individuals. Some patients may have persistent symptoms despite "normal" TSH, possibly due to individual set points or conversion issues.',
    },
  },

  media: [],
  citations: [
    {
      id: 'ata-hypothyroidism',
      type: 'article',
      title: 'ATA Guidelines for Treatment of Hypothyroidism',
      source: 'Thyroid',
      authors: ['Jonklaas J', 'et al'],
    },
  ],
  crossReferences: [
    { targetId: 'lab-free-t4', targetType: 'concept', relationship: 'related' },
    { targetId: 'thyroid-disease', targetType: 'concept', relationship: 'parent' },
  ],
  tags: {
    systems: ['endocrine'],
    topics: ['laboratory', 'endocrinology', 'thyroid'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pediatrics'] },
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

// =============================================================================
// FREE T4
// =============================================================================

export const freeT4Interpretation: LabInterpretationContent = {
  id: 'lab-free-t4',
  type: 'concept',
  name: 'Free T4 (Free Thyroxine)',
  alternateNames: ['FT4', 'Free Thyroxine'],

  labMetadata: {
    loincCode: '3024-7',
    testName: 'Free T4',
    commonAbbreviations: ['FT4', 'Free T4'],
    category: 'thyroid',
    panel: 'Thyroid Panel',
    orderingFrequency: 'routine',
  },

  referenceRanges: {
    adult: {
      low: 0.8,
      high: 1.8,
      unit: 'ng/dL',
      notes: 'Reference range varies by assay',
    },
  },

  criticalValues: {
    low: 0.3,
    high: 5.0,
    unit: 'ng/dL',
    urgency: 'urgent',
    action: 'Very low: myxedema coma risk. Very high: thyroid storm risk.',
    notificationRequired: true,
  },

  interpretations: {
    high: {
      direction: 'high',
      severity: 'moderate',
      causes: [
        {
          category: 'Hyperthyroidism',
          causes: [
            'Graves disease',
            'Toxic nodular goiter',
            'Thyroiditis (subacute, postpartum)',
            'Exogenous thyroid hormone excess',
          ],
          commonality: 'common',
        },
        {
          category: 'Other',
          causes: [
            'Acute psychiatric illness',
            'Medications (amiodarone, heparin)',
            'Familial dysalbuminemic hyperthyroxinemia',
            'Assay interference',
          ],
          commonality: 'uncommon',
        },
      ],
      associatedFindings: ['Low TSH in primary hyperthyroidism', 'Symptoms of thyrotoxicosis'],
      workupSuggestions: ['TSH if not already done', 'Free T3', 'TSI/TRAb if Graves suspected'],
      clinicalPearls: ['High FT4 with normal TSH suggests assay interference or resistance syndrome'],
    },
    low: {
      direction: 'low',
      severity: 'moderate',
      causes: [
        {
          category: 'Hypothyroidism',
          causes: [
            'Primary hypothyroidism (Hashimoto, post-treatment)',
            'Central hypothyroidism (pituitary/hypothalamic)',
          ],
          commonality: 'common',
        },
        {
          category: 'Other',
          causes: [
            'Non-thyroidal illness',
            'Medications (phenytoin displaces T4 from binding)',
            'Pregnancy (modest decrease)',
          ],
          commonality: 'common',
        },
      ],
      associatedFindings: ['High TSH in primary hypothyroidism', 'Low or normal TSH in central hypothyroidism'],
      workupSuggestions: ['TSH if not done', 'TPO antibodies', 'Pituitary MRI if central hypothyroidism suspected'],
      clinicalPearls: ['Low FT4 with normal/low TSH suggests central hypothyroidism or non-thyroidal illness'],
    },
  },

  specimen: {
    specimenType: 'serum',
    tubeType: 'Red top or gold top (SST)',
    volume: '3 mL',
    fastingRequired: false,
    stability: {
      roomTemp: '24 hours',
      refrigerated: '7 days',
    },
    interferences: ['Biotin supplements', 'Heparin', 'High fatty acids'],
  },

  relatedLabs: ['lab-tsh', 'lab-free-t3', 'lab-total-t4'],

  organAssociations: [
    { organId: 'thyroid', organName: 'Thyroid Gland', relationship: 'T4 production site' },
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Free T4 measures the active form of the main thyroid hormone in your blood.',
      explanation: `T4 (thyroxine) is the main hormone made by your thyroid gland. "Free" T4 is the portion that is active and available for your body to use.

**What it measures:**
- The amount of active thyroid hormone in your blood
- Works together with TSH to show how your thyroid is functioning

**What the results mean:**
- High free T4 + Low TSH = Overactive thyroid (hyperthyroidism)
- Low free T4 + High TSH = Underactive thyroid (hypothyroidism)
- Normal free T4 with abnormal TSH = Subclinical thyroid disease

Free T4 is often checked along with TSH to get a complete picture of thyroid health.`,
      keyTerms: [
        { term: 'T4 (thyroxine)', definition: 'The main hormone produced by the thyroid gland' },
        { term: 'free', definition: 'The active portion of hormone not bound to proteins' },
      ],
      analogies: [
        'T4 is like fuel for your body. Free T4 is the fuel that\'s ready to use right now, while the rest is stored in the tank.',
      ],
    },
    2: {
      level: 2,
      summary: 'Free T4 measures the metabolically active fraction of thyroxine not bound to carrier proteins. It is less affected by binding protein changes than total T4.',
      explanation: `## Free T4 Overview

**Thyroid Hormone in Blood:**
- 99.97% of T4 is protein-bound (inactive)
- 0.03% is free (active)
- Free T4 reflects metabolically available hormone

**Binding Proteins:**
| Protein | % Bound |
|---------|---------|
| Thyroxine-binding globulin (TBG) | 75% |
| Transthyretin (prealbumin) | 15% |
| Albumin | 10% |

## Interpretation with TSH

| TSH | Free T4 | Diagnosis |
|-----|---------|-----------|
| Low | High | Overt hyperthyroidism |
| Low | Normal | Subclinical hyperthyroidism |
| High | Low | Overt hypothyroidism |
| High | Normal | Subclinical hypothyroidism |
| Low | Low | Central hypothyroidism |

## Conditions Affecting Binding Proteins

**Increased TBG (↑ Total T4, normal Free T4):**
- Pregnancy, estrogen therapy
- Liver disease (acute)
- Genetics

**Decreased TBG (↓ Total T4, normal Free T4):**
- Androgens, glucocorticoids
- Nephrotic syndrome
- Cirrhosis`,
      keyTerms: [
        { term: 'TBG', definition: 'Thyroxine-binding globulin - main carrier protein for T4 in blood' },
        { term: 'protein-bound', definition: 'Hormone attached to carrier proteins, inactive until released' },
      ],
      analogies: [
        'Binding proteins are like taxis carrying T4 passengers. Free T4 has gotten out of the taxi and is ready to work.',
      ],
    },
    3: {
      level: 3,
      summary: 'Free T4 interpretation requires understanding of assay methodology limitations and clinical situations that affect accuracy.',
      explanation: `## Systematic Free T4 Interpretation

### Assay Methods

**Immunoassay (Most Common):**
- Equilibrium dialysis method is gold standard but impractical
- Analog methods estimate free T4
- Affected by binding protein abnormalities
- May be inaccurate in pregnancy, illness

**Mass Spectrometry:**
- More accurate, less affected by binding proteins
- Reference method
- Not widely available

### Common Pitfalls

**Discordant Results (High FT4, Normal TSH):**
| Cause | Clue |
|-------|------|
| Biotin interference | Ask about supplements |
| Heparin | Recent heparin exposure |
| Familial dysalbuminemic hyperthyroxinemia | FT4 falsely high, FT3 normal |
| Thyroid hormone resistance | Genetic, clinically euthyroid |
| TSH-secreting adenoma | Rare, elevated alpha subunit |

**Situations Where FT4 May Be Inaccurate:**
- Severe non-thyroidal illness
- Pregnancy (particularly third trimester)
- Low albumin states
- Certain medications (heparin, carbamazepine)

### Free T4 in Pregnancy

**Changes:**
- First trimester: May be slightly high (hCG stimulation)
- Second/third trimester: May appear low (assay artifact)
- Use trimester-specific ranges
- Total T4 increases (due to increased TBG)

**Recommendation:**
- Use TSH as primary test in pregnancy
- If TSH abnormal, check free T4
- Consider total T4 × 1.5 as alternative in later pregnancy

### Monitoring Thyroid Treatment
- Wait 6-8 weeks after dose change before rechecking
- Free T4 normalizes before TSH in hypothyroidism treatment
- TSH is primary monitoring test once stable`,
      keyTerms: [
        { term: 'analog method', definition: 'Common free T4 assay technique that estimates rather than directly measures free hormone' },
        { term: 'familial dysalbuminemic hyperthyroxinemia', definition: 'Genetic variant causing falsely elevated T4 measurements' },
      ],
      clinicalNotes: 'In pregnancy, use trimester-specific reference ranges. Free T4 assays may be less accurate in later pregnancy - some guidelines suggest using total T4 × 1.5 as a rough estimate.',
    },
    4: {
      level: 4,
      summary: 'Advanced free T4 interpretation includes understanding of equilibrium effects, ultra-sensitive assay applications, and management of discordant results.',
      explanation: `## Advanced Free T4 Interpretation

### Understanding Assay Limitations

**Equilibrium Dialysis Issues:**
- Gold standard but time-consuming
- Dilution shifts equilibrium
- Temperature affects binding
- Not practical for routine use

**Immunoassay Limitations:**
- Assumes normal binding proteins
- May be affected by:
  - FFA (free fatty acids) - displace T4
  - Heterophilic antibodies
  - Autoantibodies to T4
  - Abnormal albumin variants

### Discordant Results Workup

**High FT4 + Normal/High TSH:**
1. Rule out biotin interference (hold 48-72h, repeat)
2. Consider heterophilic antibodies (request blocking study)
3. Check for T4 autoantibodies
4. Evaluate for thyroid hormone resistance
5. Rule out TSH-secreting adenoma (alpha subunit, MRI)

**Low FT4 + Normal/Low TSH:**
1. Consider sick euthyroid syndrome
2. Evaluate for central hypothyroidism
3. Check for medication effects
4. Repeat test after acute illness resolves

### Special Assay Considerations

**Free Thyroxine Index (FTI):**
- Calculated: Total T4 × T3 resin uptake
- Corrects for binding protein changes
- Alternative when FT4 assays unreliable
- Less commonly used now

**Liquid Chromatography-Mass Spectrometry (LC-MS/MS):**
- Reference method for free T4
- Not affected by binding proteins
- Used for research, specialized labs
- May become more available

### Non-Thyroidal Illness Syndrome

**Patterns:**
| Severity | FT4 | FT3 | TSH |
|----------|-----|-----|-----|
| Mild | Normal | Low | Normal/Low |
| Moderate | Low-normal | Low | Low |
| Severe | Low | Very low | Low |
| Recovery | May be high | Rising | May be high |

**Management:**
- Generally do not treat
- Reassess 6-8 weeks after recovery
- Very low T4 in critically ill: controversial; consider IV T4 if very low + hemodynamic instability`,
      keyTerms: [
        { term: 'free thyroxine index', definition: 'Calculated value correcting for binding protein abnormalities' },
        { term: 'LC-MS/MS', definition: 'Mass spectrometry method providing accurate free T4 measurement' },
      ],
      clinicalNotes: 'When FT4 and TSH are discordant, consider assay interference before diagnosing rare conditions. Simple steps like stopping biotin often resolve the discrepancy.',
    },
    5: {
      level: 5,
      summary: 'Expert free T4 interpretation encompasses advanced assay troubleshooting, understanding of protein binding kinetics, and precision approaches to thyroid assessment.',
      explanation: `## Expert-Level Free T4 Interpretation

### Protein Binding Dynamics

**Free Hormone Hypothesis:**
- Only free hormone is available to tissues
- Binding proteins serve as reservoir
- Maintains stable free hormone delivery

**Integrin-Mediated Transport:**
- Some protein-bound T4 may enter cells directly
- Challenges simple free hormone hypothesis
- Explains some clinical observations

### Assay Troubleshooting

**Systematic Approach to Discordant Results:**
1. Verify sample handling
2. Stop biotin supplements, repeat in 48-72h
3. Request different assay platform
4. Consider dilution studies
5. Check for heterophilic/rheumatoid factor
6. Consider reference laboratory (equilibrium dialysis, LC-MS/MS)

**Rare Interferences:**
| Interference | Mechanism |
|--------------|-----------|
| Anti-T4 autoantibodies | Bind T4, affect assay |
| Anti-streptavidin antibodies | Affect streptavidin-biotin assays |
| Macro-TSH | May cause discordant TSH |

### Ultra-Sensitive Monitoring

**Thyroid Cancer Follow-up:**
- Aim for specific TSH range based on risk
- FT4 helps assess adequacy of suppression
- Balance between suppression and T3 toxicosis

**Levothyroxine Overtreatment:**
| Finding | Concern |
|---------|---------|
| FT4 high-normal, TSH low | Possible tissue hyperthyroidism |
| FT4 high, FT3 normal | Less concerning (T4 only treatment) |
| FT4 high, FT3 high | More likely symptomatic |

### Pregnancy-Specific Issues

**Assay Performance:**
- Most FT4 assays inaccurate in pregnancy
- TBG increase + albumin decrease
- Heparin effect if using blood thinners

**Alternative Approaches:**
- Total T4 with adjusted range (normal × 1.5)
- FT4 index
- Reference ranges from same assay/trimester

**Gestational Hyperthyroidism:**
- hCG cross-reacts with TSH receptor
- Molar pregnancy, hyperemesis
- Distinguished from Graves by TRAb negativity

### Inter-Individual Variation

**Personal Set Point:**
- Individual FT4 range narrower than population
- May explain persistent symptoms with "normal" labs
- Research area

**Deiodinase Polymorphisms:**
- DIO2 Thr92Ala associated with symptoms despite normal labs
- May affect T4→T3 conversion in tissues
- Clinical significance debated`,
      keyTerms: [
        { term: 'free hormone hypothesis', definition: 'Concept that only unbound hormone is available for tissue uptake' },
        { term: 'macro-TSH', definition: 'TSH bound to immunoglobulins causing falsely elevated TSH' },
      ],
      clinicalNotes: 'Expert interpretation recognizes that thyroid hormone assays are complex and subject to many interferences. When clinical picture does not match laboratory values, pursue systematic troubleshooting before attributing to rare diagnoses.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'lab-tsh', targetType: 'concept', relationship: 'related' },
  ],
  tags: {
    systems: ['endocrine'],
    topics: ['laboratory', 'endocrinology', 'thyroid'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

// =============================================================================
// THYROID PANEL
// =============================================================================

export const THYROID_PANEL: LabPanel = {
  id: 'panel-thyroid',
  name: 'Thyroid Function Panel',
  nameEs: 'Funcion Tiroidea',
  abbreviation: 'TFTs',
  description: 'Assessment of thyroid function including TSH and free thyroid hormones.',
  includedTests: [
    'lab-tsh',
    'lab-free-t4',
    'lab-free-t3',
    'lab-tpo-antibody',
    'lab-thyroglobulin',
  ],
  commonIndications: [
    'Evaluation of suspected thyroid disease',
    'Monitoring thyroid hormone replacement',
    'Screening in pregnancy',
    'Evaluation of goiter or thyroid nodules',
    'Assessment of fatigue, weight changes, or mood symptoms',
    'Monitoring amiodarone or lithium therapy',
  ],
  interpretationGuidance: [
    {
      level: 1,
      content: 'Thyroid tests check if your thyroid gland is working properly. TSH is the main screening test - high TSH usually means underactive thyroid, low TSH usually means overactive thyroid.',
    },
    {
      level: 3,
      content: 'Systematic thyroid interpretation: Start with TSH. If abnormal, check Free T4. Low TSH + high FT4 = hyperthyroidism (consider Graves, toxic nodule, thyroiditis). High TSH + low FT4 = hypothyroidism (consider Hashimoto). Subclinical disease has abnormal TSH but normal FT4.',
    },
    {
      level: 5,
      content: 'Expert interpretation recognizes assay limitations (biotin interference, pregnancy effects), evaluates discordant results systematically, and considers central hypothyroidism (low TSH + low T4), resistance syndromes, and non-thyroidal illness. Integrate with antibodies (TPO, TRAb) for etiologic diagnosis.',
    },
  ],
  patterns: [
    {
      patternName: 'Primary Hypothyroidism',
      description: 'Thyroid gland failure with compensatory TSH elevation',
      labFindings: [
        { labId: 'lab-tsh', labName: 'TSH', expectedDirection: 'high' },
        { labId: 'lab-free-t4', labName: 'Free T4', expectedDirection: 'low' },
      ],
      suggestsDiagnosis: ['Hashimoto thyroiditis', 'Post-thyroidectomy hypothyroidism', 'Iodine deficiency'],
      clinicalContext: 'High TSH with low FT4 indicates overt hypothyroidism. Check TPO antibodies to identify autoimmune cause. Treat with levothyroxine.',
    },
    {
      patternName: 'Primary Hyperthyroidism',
      description: 'Excessive thyroid hormone production with suppressed TSH',
      labFindings: [
        { labId: 'lab-tsh', labName: 'TSH', expectedDirection: 'low' },
        { labId: 'lab-free-t4', labName: 'Free T4', expectedDirection: 'high' },
      ],
      suggestsDiagnosis: ['Graves disease', 'Toxic multinodular goiter', 'Toxic adenoma', 'Thyroiditis'],
      clinicalContext: 'Low TSH with high FT4 indicates overt hyperthyroidism. Check TSI/TRAb for Graves. Radioactive iodine uptake helps distinguish causes.',
    },
    {
      patternName: 'Central Hypothyroidism',
      description: 'Pituitary or hypothalamic dysfunction causing low TSH and low T4',
      labFindings: [
        { labId: 'lab-tsh', labName: 'TSH', expectedDirection: 'low' },
        { labId: 'lab-free-t4', labName: 'Free T4', expectedDirection: 'low' },
      ],
      suggestsDiagnosis: ['Pituitary adenoma', 'Pituitary surgery/radiation', 'Hypothalamic disease', 'Sheehan syndrome'],
      clinicalContext: 'Low or normal TSH with low FT4 suggests central hypothyroidism. Evaluate other pituitary hormones. MRI of pituitary/hypothalamus indicated.',
    },
    {
      patternName: 'Subclinical Hypothyroidism',
      description: 'Elevated TSH with normal thyroid hormones - early or mild thyroid failure',
      labFindings: [
        { labId: 'lab-tsh', labName: 'TSH', expectedDirection: 'high' },
        { labId: 'lab-free-t4', labName: 'Free T4', expectedDirection: 'normal' },
      ],
      suggestsDiagnosis: ['Early Hashimoto thyroiditis', 'Recovery from thyroiditis', 'Inadequate levothyroxine replacement'],
      clinicalContext: 'TSH 4.5-10 with normal FT4 is subclinical. Treatment decision based on symptoms, TPO antibodies, TSH level, and patient factors (pregnancy planning, age).',
    },
  ],
};
