/**
 * Thyroid Function Tests
 *
 * Comprehensive guide to thyroid laboratory evaluation including TSH, T4, T3,
 * thyroid antibodies, and specialized testing protocols.
 */

import { EducationalContent } from '../../types';

export const THYROID_FUNCTION_TESTS: EducationalContent = {
  id: 'endocrine-thyroid-function-tests',
  type: 'concept',
  name: 'Thyroid Function Tests',
  alternateNames: ['TFTs', 'Thyroid panel', 'Thyroid labs', 'TSH testing'],

  levels: {
    1: {
      level: 1,
      summary: 'Thyroid function tests are blood tests that check if your thyroid gland is working properly by measuring hormone levels.',
      explanation: `**What Are Thyroid Function Tests?**

Thyroid function tests (TFTs) are simple blood tests that tell your doctor how well your thyroid is working. The thyroid is a butterfly-shaped gland in your neck that controls how fast your body uses energy.

**The Main Tests:**

1. **TSH (Thyroid Stimulating Hormone)**
   - The most important test
   - Made by your brain to tell the thyroid what to do
   - High TSH = thyroid is underactive
   - Low TSH = thyroid is overactive

2. **T4 (Thyroxine)**
   - The main hormone your thyroid makes
   - Free T4 is the active form
   - Low T4 with high TSH = underactive thyroid
   - High T4 with low TSH = overactive thyroid

3. **T3 (Triiodothyronine)**
   - Another thyroid hormone
   - Most active form
   - Sometimes tested when T4 is normal but symptoms persist

**When Are These Tests Done?**

- Feeling very tired all the time
- Unexplained weight changes
- Feeling too hot or too cold
- Fast or slow heartbeat
- Checking if thyroid medication is working

**What to Expect:**

- Simple blood draw from your arm
- Usually no need to fast
- Results in 1-2 days
- Your doctor will explain what the numbers mean`,
      keyTerms: [
        { term: 'TSH', definition: 'Thyroid stimulating hormone - a signal from your brain telling your thyroid how much hormone to make' },
        { term: 'T4', definition: 'Thyroxine - the main hormone your thyroid gland produces' },
        { term: 'T3', definition: 'Triiodothyronine - the most active thyroid hormone' },
        { term: 'Free T4', definition: 'The part of T4 that is available to work in your body' },
      ],
      analogies: [
        'TSH is like a thermostat - when the room (your body) is too cold, the thermostat turns up the heat (tells thyroid to make more hormone).',
        'The thyroid is like your body\'s gas pedal - too much hormone speeds everything up, too little slows everything down.',
      ],
      examples: [
        'A woman feeling tired with high TSH and low T4 is diagnosed with an underactive thyroid.',
        'A man with rapid heartbeat has low TSH and high T4, showing an overactive thyroid.',
      ],
    },
    2: {
      level: 2,
      summary: 'Thyroid function tests measure TSH, free T4, and T3 levels to assess the hypothalamic-pituitary-thyroid axis, with interpretation based on the inverse relationship between TSH and thyroid hormones.',
      explanation: `**Understanding the Thyroid Axis:**

The thyroid system works through feedback:
- Hypothalamus releases TRH
- Pituitary releases TSH in response
- Thyroid releases T4 and T3 in response to TSH
- High T4/T3 suppresses TSH (negative feedback)

**Standard Thyroid Panel:**

| Test | Normal Range | What It Tells Us |
|------|--------------|------------------|
| TSH | 0.4-4.0 mIU/L | Pituitary response to thyroid levels |
| Free T4 | 0.8-1.8 ng/dL | Active thyroid hormone |
| Free T3 | 2.3-4.2 pg/mL | Most potent thyroid hormone |
| Total T4 | 5-12 mcg/dL | Bound + free hormone |
| Total T3 | 80-180 ng/dL | Bound + free hormone |

**Interpretation Patterns:**

| TSH | Free T4 | Diagnosis |
|-----|---------|-----------|
| High | Low | Primary hypothyroidism |
| Low | High | Primary hyperthyroidism |
| Low | Low | Central hypothyroidism |
| High | Normal | Subclinical hypothyroidism |
| Low | Normal | Subclinical hyperthyroidism |
| Normal | Low | Consider protein binding issue |

**Additional Thyroid Tests:**

*Thyroid Antibodies:*
- Anti-TPO: Hashimoto's disease marker
- Anti-thyroglobulin: Autoimmune thyroid disease
- TSI/TRAb: Graves' disease marker

*Thyroglobulin:*
- Tumor marker for thyroid cancer follow-up
- Not useful for diagnosis

*Thyroid Uptake and Scan:*
- Uses radioactive iodine
- Differentiates causes of hyperthyroidism

**Common Testing Situations:**

| Situation | Initial Test | Follow-up Tests |
|-----------|--------------|-----------------|
| Screening | TSH only | Free T4 if abnormal |
| Hypothyroid symptoms | TSH, Free T4 | Anti-TPO if hypothyroid |
| Hyperthyroid symptoms | TSH, Free T4, Free T3 | TSI if hyperthyroid |
| On thyroid medication | TSH | Free T4 if adjusting |`,
      keyTerms: [
        { term: 'Primary hypothyroidism', definition: 'Underactive thyroid caused by thyroid gland problem (high TSH, low T4)' },
        { term: 'Subclinical hypothyroidism', definition: 'Mildly underactive thyroid with high TSH but normal T4' },
        { term: 'Anti-TPO', definition: 'Antibodies against thyroid peroxidase, marker for Hashimoto\'s disease' },
        { term: 'Negative feedback', definition: 'When thyroid hormones are high, they signal the pituitary to make less TSH' },
      ],
      analogies: [
        'TSH and thyroid hormones work like a seesaw - when one goes up, the other goes down.',
        'Anti-TPO antibodies are like friendly fire - your immune system attacking your own thyroid.',
      ],
      examples: [
        'TSH of 8.5 with Free T4 of 0.6 indicates primary hypothyroidism needing treatment.',
        'TSH of 0.1 with Free T4 of 2.8 and positive TSI confirms Graves\' disease.',
      ],
    },
    3: {
      level: 3,
      summary: 'Thyroid function assessment requires understanding assay methodology, binding protein effects, and the distinction between primary, secondary, and peripheral thyroid disorders, with appropriate use of specialized testing protocols.',
      explanation: `**Assay Considerations:**

*TSH Assays:*
- Third-generation assays: Sensitivity 0.01-0.02 mIU/L
- Essential for detecting suppressed TSH in hyperthyroidism
- Second-generation inadequate for low-end discrimination

*Free Hormone Measurement:*
| Method | Principle | Limitations |
|--------|-----------|-------------|
| Analog immunoassay | Most common | Binding protein effects |
| Two-step immunoassay | Better accuracy | Still some limitations |
| Equilibrium dialysis | Gold standard | Labor-intensive, expensive |
| Ultrafiltration | Research | Not routine |

**Binding Protein Effects:**

*Thyroxine-Binding Globulin (TBG):*
| Condition | TBG Level | Total T4 | Free T4 | TSH |
|-----------|-----------|----------|---------|-----|
| Estrogen (pregnancy, OCP) | Increased | High | Normal | Normal |
| Androgens, nephrosis | Decreased | Low | Normal | Normal |
| Congenital TBG deficiency | Absent | Very low | Normal | Normal |

*Free T4 Index (FTI):*
- FTI = Total T4 x T3 Resin Uptake
- Corrects for binding protein abnormalities
- Useful when direct free T4 unreliable

**Non-Thyroidal Illness (Sick Euthyroid):**

*Pattern Evolution:*
| Phase | TSH | T4 | T3 | rT3 |
|-------|-----|----|----|-----|
| Acute illness | Low-normal | Normal-low | Low | High |
| Severe illness | Low | Low | Very low | High |
| Recovery | May be high | Normalizing | Normalizing | Normalizing |

- Avoid testing during acute illness when possible
- Recheck 6-8 weeks after recovery
- Low T3 is earliest change

**Central Hypothyroidism:**

*Distinguishing Features:*
- TSH inappropriately normal or low with low free T4
- Requires pituitary imaging
- Other pituitary hormones may be affected
- TSH may have reduced bioactivity

*Diagnosis:*
- Free T4 consistently low
- TSH not appropriately elevated
- Consider TRH stimulation test (rarely used)
- MRI pituitary

**Resistance to Thyroid Hormone:**

*Patterns:*
| Type | TSH | FT4/FT3 | Clinical |
|------|-----|---------|----------|
| Generalized (RTH-beta) | High-normal | High | Euthyroid or mixed |
| Pituitary (RTH) | High | High | Hyperthyroid peripherally |
| Peripheral only | Low | Normal | Hypothyroid symptoms |

*Genetic Basis:*
- THRB gene mutations (RTH-beta)
- THRA gene mutations (RTH-alpha)

**Thyroid Antibody Testing:**

| Antibody | Target | Clinical Use |
|----------|--------|--------------|
| Anti-TPO | Thyroid peroxidase | Hashimoto diagnosis, risk prediction |
| Anti-Tg | Thyroglobulin | Autoimmune disease, Tg interference |
| TRAb | TSH receptor | Graves disease (all types) |
| TSI | TSH receptor (stimulating) | Graves disease activity |
| TBI | TSH receptor (blocking) | Atrophic thyroiditis, neonatal |

**Dynamic Testing:**

*Thyroid Hormone Suppression (Liothyronine):*
- Suppresses TSH in normal individuals
- Fails to suppress in TSH-oma
- Rarely used

*TRH Stimulation Test:*
- TRH 200-500 mcg IV
- Measure TSH at 0, 30 minutes
- Flat response in hyperthyroidism
- Exaggerated in hypothyroidism
- Rarely needed now`,
      keyTerms: [
        { term: 'Non-thyroidal illness', definition: 'Altered thyroid tests during acute illness without true thyroid dysfunction' },
        { term: 'Reverse T3', definition: 'Inactive T3 metabolite elevated in illness, reflecting reduced peripheral conversion' },
        { term: 'TRAb', definition: 'TSH receptor antibodies encompassing stimulating (TSI) and blocking (TBI) types' },
        { term: 'RTH', definition: 'Resistance to thyroid hormone due to receptor mutations' },
      ],
      clinicalNotes: 'Avoid thyroid testing during acute illness as results are unreliable and rarely change management. Free T4 by equilibrium dialysis should be considered in pregnancy, critical illness, and when results are discordant with clinical picture. TSI titers correlate with Graves\' ophthalmopathy severity and can guide treatment decisions.',
    },
    4: {
      level: 4,
      summary: 'Advanced thyroid function assessment integrates understanding of assay interference, biotin effects, heterophilic antibodies, and specialized protocols for complex clinical scenarios including pregnancy, thyroid cancer monitoring, and drug-induced thyroid dysfunction.',
      explanation: `**Assay Interference - Detailed:**

*Biotin (Vitamin B7):*
| Assay Design | Effect | Clinical Consequence |
|--------------|--------|---------------------|
| Competitive (T4, T3) | False elevation | Appears hyperthyroid |
| Sandwich (TSH) | False decrease | Confirms false hyperthyroidism |
| Combined | Classic Graves pattern | Misdiagnosis risk |

- Washout: 48-72 hours for standard supplements
- High-dose biotin (MS treatment): May need 7+ days
- Increasingly common with supplement use

*Heterophilic Antibodies:*
- Human anti-mouse antibodies (HAMA)
- Can cause false high or low results
- Suspect when results discordant with clinical picture
- Solutions: Different assay platform, blocking tubes

*Macro-TSH:*
- TSH-IgG complex
- Elevated TSH with euthyroid clinical state
- PEG precipitation confirms
- No treatment needed

**Pregnancy-Specific Considerations:**

*Physiological Changes:*
| Trimester | TSH Range | Notes |
|-----------|-----------|-------|
| First | 0.1-2.5 mIU/L | hCG suppresses TSH |
| Second | 0.2-3.0 mIU/L | Approaching normal |
| Third | 0.3-3.0 mIU/L | Near normal |

*Free T4 Challenges:*
- Analog assays unreliable (TBG effect)
- Options: Trimester-specific ranges, free T4 index, equilibrium dialysis
- Total T4 x 1.5 approximates pregnant normal

*Gestational Thyrotoxicosis:*
- hCG-mediated TSH suppression
- Associated with hyperemesis
- Resolves by mid-pregnancy
- Usually no treatment needed

*Postpartum Thyroiditis:*
- Hyperthyroid phase (2-6 months)
- Hypothyroid phase (3-12 months)
- Permanent hypothyroidism 20-30%
- Anti-TPO predicts risk

**Thyroid Cancer Monitoring:**

*Thyroglobulin (Tg):*
| Status | Suppressed Tg | Stimulated Tg | Interpretation |
|--------|---------------|---------------|----------------|
| Complete response | <0.2 ng/mL | <1 ng/mL | No evidence disease |
| Biochemical incomplete | <1 ng/mL or rising | >10 ng/mL | Active disease |
| Structural incomplete | Any detectable | Usually elevated | Imaging needed |

*Tg Antibody Interference:*
- TgAb positive in 20-25% of DTC patients
- Causes false-low Tg in immunoassays
- Trend TgAb (declining = favorable)
- Consider mass spectrometry Tg

*Stimulated Testing:*
- rhTSH (Thyrogen): Preferred, no hypothyroid symptoms
- Thyroid hormone withdrawal: More sensitive, poorly tolerated
- Goal TSH >30 mIU/L if withdrawal

**Drug-Induced Thyroid Dysfunction:**

| Drug | Mechanism | Effect | Management |
|------|-----------|--------|------------|
| Amiodarone | Iodine load, destructive | Hypo or hyperthyroidism | Complex algorithm |
| Lithium | Blocks hormone release | Hypothyroidism | Monitor q6-12 months |
| Checkpoint inhibitors | Immune destruction | Thyroiditis, hypothyroid | Monitor before each cycle |
| TKIs (sunitinib) | Destructive thyroiditis | Hypothyroidism | Monitor regularly |
| Contrast media | Iodine load | Hypo or hyper | Caution if thyroid disease |

*Amiodarone-Induced Thyroid Dysfunction:*
| Type | Mechanism | Ultrasound | IL-6 | Treatment |
|------|-----------|------------|------|-----------|
| Type 1 | Jod-Basedow | Goiter/nodule | Normal | Antithyroid drugs |
| Type 2 | Destructive | Normal | Elevated | Steroids |
| Mixed | Both | Variable | Variable | Combination |

**TSH Reference Range Controversies:**

*Age-Specific Ranges:*
- TSH upper limit increases with age
- 70+ years: Upper limit may be 6-7 mIU/L
- Treating to standard range may cause harm

*Lower Limit for Treatment:*
- Traditional: >10 mIU/L warrants treatment
- Current debate: 4.5-10 mIU/L ("gray zone")
- Consider symptoms, antibodies, cardiovascular risk

**Functional Testing:**

*Perchlorate Discharge Test:*
- Assess iodide organification defects
- Give radioiodine, then perchlorate
- >10% discharge = organification defect
- Used in Pendred syndrome, other defects

*Thyroid Hormone Absorption Test:*
- Supervised levothyroxine ingestion
- Measure T4 at intervals
- Distinguishes non-adherence from malabsorption`,
      keyTerms: [
        { term: 'Macro-TSH', definition: 'TSH bound to immunoglobulin creating falsely elevated measurement without clinical significance' },
        { term: 'Thyrogen', definition: 'Recombinant human TSH used for stimulated thyroglobulin testing without hormone withdrawal' },
        { term: 'Jod-Basedow', definition: 'Iodine-induced hyperthyroidism in patients with underlying thyroid autonomy' },
        { term: 'Gestational thyrotoxicosis', definition: 'hCG-mediated suppression of TSH in early pregnancy, usually self-limited' },
      ],
      clinicalNotes: 'Always ask about biotin supplements before interpreting thyroid tests - even multivitamins may contain enough to cause interference. In thyroid cancer monitoring, mass spectrometry Tg may be useful when TgAb are present. Amiodarone thyroid dysfunction requires careful distinction between Type 1 and 2 as treatments differ significantly. Age-adjusted TSH ranges should be considered in elderly patients to avoid overtreatment.',
    },
    5: {
      level: 5,
      summary: 'Expert thyroid function assessment encompasses mass spectrometry applications, ultrasensitive assays, genetic determinants of thyroid function, and integration of emerging biomarkers with advanced understanding of assay limitations and novel testing paradigms.',
      explanation: `**Mass Spectrometry in Thyroid Testing:**

*LC-MS/MS Applications:*
| Analyte | Advantage | Clinical Scenario |
|---------|-----------|-------------------|
| Free T4 | No protein binding effects | Pregnancy, critical illness |
| Free T3 | Accurate at low levels | Peripheral conversion assessment |
| Thyroglobulin | TgAb resistance | Cancer monitoring with antibodies |
| rT3 | Specific measurement | Sick euthyroid evaluation |

*Equilibrium Dialysis + MS:*
- Separates free hormone physically
- LC-MS/MS quantifies accurately
- Gold standard for free hormones
- Research and reference method

**Ultrasensitive TSH:**

*Fourth-Generation Assays:*
- Functional sensitivity <0.01 mIU/L
- Distinguishes overt from subclinical hyperthyroidism
- Important for TSH suppression therapy monitoring
- Detects minimally suppressed TSH

*Clinical Applications:*
- Thyroid cancer: Target TSH to specific range
- Differentiate Graves' from subclinical hyperthyroidism
- Monitor radioiodine therapy response

**Genetic Determinants of Thyroid Function:**

*TSH Setpoint Variation:*
| Gene | Effect | Clinical Implication |
|------|--------|---------------------|
| PDE8B | TSH level | Population variation |
| FOXE1 | Thyroid development | TSH variation |
| TSHR | Receptor sensitivity | Individual setpoint |
| DIO1/2 | Conversion enzymes | T3 generation |

*Intraindividual Variation:*
- TSH varies less within individuals than reference range suggests
- "Normal" for one person may be abnormal
- Serial measurements more informative

*Pharmacogenomics:*
| Gene | Drug | Effect |
|------|------|--------|
| DIO2 Thr92Ala | T4 monotherapy | May need T3 addition |
| SLC16A2 | Thyroid hormones | Transport deficiency (Allan-Herndon-Dudley) |

**Advanced Thyroid Autoimmunity Testing:**

*Functional TRAb Characterization:*
- TSI (stimulating) vs TBI (blocking) vs neutral
- Bioassays distinguish functional effects
- Important in:
  - Neonatal thyroid disease prediction
  - Atrophic thyroiditis
  - Post-RAI hypothyroidism

*Predictive Autoantibodies:*
| Antibody Status | Risk of Future Hypothyroidism |
|-----------------|------------------------------|
| TPO+, Tg+ | 4-5% per year |
| TPO+ only | 2-4% per year |
| High-titer TPO+ | Higher risk |
| TPO+, elevated TSH | Treat consideration |

**Deiodinase Biology:**

*Isoenzyme Patterns:*
| DIO | Location | Function | Clinical Relevance |
|-----|----------|----------|-------------------|
| D1 | Liver, kidney, thyroid | T4→T3, clearance | PTU inhibits |
| D2 | Brain, pituitary, BAT | Local T3 generation | Setpoint regulation |
| D3 | Placenta, brain, skin | T4→rT3, T3→T2 | Inactivation |

*Deiodinase Polymorphisms:*
- DIO2 Thr92Ala: Controversial T4+T3 response
- May affect brain T3, psychological wellbeing
- Research ongoing on clinical significance

**Novel and Emerging Biomarkers:**

*Thyroid-Specific mRNAs:*
- TSHR mRNA in Graves' disease
- May correlate with disease activity
- Research application

*Thyroid Hormone Metabolites:*
| Metabolite | Significance |
|------------|--------------|
| Tetrac (T4 acetic acid) | Antagonist at integrin receptor |
| 3-T1AM | Novel signaling molecule |
| 3,5-T2 | Metabolic effects |

*Integrative Hormone Assessment:*
- T3/T4 ratio: Reflects conversion
- T3/rT3 ratio: Euthyroid sick syndrome
- Free T3/Free T4 ratio: Deiodinase activity

**Complex Clinical Scenarios:**

*TSH-Secreting Pituitary Adenoma:*
\`\`\`
Diagnostic Algorithm:
1. Elevated TSH with elevated FT4/FT3
2. Rule out assay interference (different platforms)
3. Alpha-subunit / TSH ratio (>1 suggests adenoma)
4. T3 suppression test (fails to suppress)
5. MRI pituitary
6. Consider macro-TSH (PEG precipitation)
\`\`\`

*Consumptive Hypothyroidism:*
- Massive D3 expression in tumors (hemangiomas)
- Elevated T4 requirements despite replacement
- Monitor with free T4 (TSH may lag)
- Treat underlying tumor

*Non-Thyroidal Illness - Advanced:*
\`\`\`
Cytokine Effects:
- IL-6, TNF-α, IL-1β suppress TSH
- Reduce T4→T3 conversion (D1 inhibition)
- Increase T4→rT3 (D3 induction)
- Decrease TBG synthesis
- May be adaptive (reduce catabolism)
\`\`\`

**Quality Assurance and Standardization:**

*International Standardization:*
- IFCC reference methods development
- CDC Hormone Standardization Program
- Moving toward harmonization

*Reference Change Value:*
\`\`\`
RCV = √2 × Z × √(CVa² + CVi²)

TSH: CVi ~20%, typical RCV ~50%
Free T4: CVi ~7%, typical RCV ~25%

Use to assess if change is clinically significant
\`\`\`

*Point-of-Care Thyroid Testing:*
- TSH rapid tests emerging
- Not yet validated for clinical decisions
- May have role in screening
- Laboratory confirmation needed`,
      keyTerms: [
        { term: 'Fourth-generation TSH assay', definition: 'Ultrasensitive TSH measurement with functional sensitivity below 0.01 mIU/L' },
        { term: 'DIO2 polymorphism', definition: 'Genetic variant affecting type 2 deiodinase that may influence T4 to T3 conversion' },
        { term: 'Consumptive hypothyroidism', definition: 'Hypothyroidism caused by tumor-expressed deiodinase 3 rapidly inactivating thyroid hormone' },
        { term: 'Reference change value', definition: 'Statistical measure of minimum change between serial measurements representing true biological change' },
      ],
      clinicalNotes: 'Mass spectrometry thyroglobulin offers superior specificity in TgAb-positive patients, enabling continued cancer surveillance. The clinical significance of DIO2 polymorphisms remains debated; routine genetic testing is not currently recommended. TSH-secreting adenomas are rare but should be considered when TSH is inappropriately elevated with high thyroid hormones - exclude assay interference first. Individual TSH setpoints vary within the population reference range; serial monitoring in an individual patient is more informative than single values.',
    },
  },

  media: [
    {
      id: 'tft-algorithm-1',
      type: 'diagram',
      filename: 'thyroid-testing-algorithm.svg',
      title: 'Thyroid Function Testing Algorithm',
      description: 'Step-by-step approach to thyroid function test interpretation',
    },
    {
      id: 'tft-patterns-1',
      type: 'diagram',
      filename: 'tft-patterns.svg',
      title: 'TFT Interpretation Patterns',
      description: 'Common patterns of TSH and thyroid hormone abnormalities',
    },
  ],

  citations: [
    {
      id: 'ata-guidelines-hypothyroidism',
      type: 'article',
      title: 'Guidelines for the Treatment of Hypothyroidism',
      authors: ['Jonklaas, J', 'Bianco, AC', 'Bauer, AJ', 'et al'],
      source: 'Thyroid',
      license: 'Copyrighted',
    },
    {
      id: 'baloch-thyroid-testing',
      type: 'article',
      title: 'Laboratory Medicine Practice Guidelines: Laboratory Support for the Diagnosis and Monitoring of Thyroid Disease',
      authors: ['Baloch, Z', 'Carayon, P', 'Conte-Devolx, B', 'et al'],
      source: 'Thyroid',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'endocrine-thyroid-pathology', targetType: 'condition', relationship: 'related', label: 'Thyroid Pathology' },
    { targetId: 'endocrine-hormone-testing', targetType: 'concept', relationship: 'parent', label: 'Hormone Testing' },
    { targetId: 'endocrine-thyroid-anatomy', targetType: 'structure', relationship: 'related', label: 'Thyroid Anatomy' },
    { targetId: 'endocrine-clinical-assessment', targetType: 'concept', relationship: 'related', label: 'Clinical Assessment' },
  ],

  tags: {
    systems: ['endocrine'],
    topics: ['laboratory testing', 'diagnosis', 'thyroid'],
    keywords: ['TSH', 'T4', 'T3', 'thyroid', 'laboratory', 'testing', 'hypothyroidism', 'hyperthyroidism'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['endocrinology', 'medicine', 'pathology'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
