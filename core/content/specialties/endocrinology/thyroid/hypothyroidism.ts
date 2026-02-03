/**
 * Hypothyroidism
 *
 * Comprehensive content on hypothyroidism pathophysiology, diagnosis, and management.
 */

import { EducationalContent } from '../../../types';

export const HYPOTHYROIDISM: EducationalContent = {
  id: 'endocrine-hypothyroidism',
  type: 'condition',
  name: 'Hypothyroidism',
  alternateNames: ['Underactive thyroid', 'Low thyroid', 'Myxedema'],

  levels: {
    1: {
      level: 1,
      summary: 'Hypothyroidism is a condition where your thyroid gland does not make enough thyroid hormone, causing your body to slow down.',
      explanation: `Your thyroid is a small, butterfly-shaped gland in your neck. It makes hormones that control how fast your body works - like a thermostat for your metabolism.

**What happens in hypothyroidism:**
- Your thyroid does not make enough hormone
- Your body's processes slow down
- You feel tired and sluggish

**Common symptoms:**
- Feeling tired all the time
- Feeling cold when others feel fine
- Gaining weight without eating more
- Dry skin and hair
- Constipation
- Feeling sad or depressed
- Slow thinking or forgetfulness
- Slow heartbeat

**What causes it:**
- Hashimoto's disease (immune system attacks thyroid) - most common
- Previous thyroid surgery or radiation
- Some medications
- Not enough iodine in diet (rare in US)

**Treatment:**
Taking a thyroid hormone pill every day replaces what your body is missing. Most people feel much better within a few weeks of starting treatment.

**Important:**
Hypothyroidism is very common, especially in women, and is easily treated once diagnosed!`,
      keyTerms: [
        { term: 'thyroid', definition: 'A butterfly-shaped gland in your neck that makes hormones controlling metabolism' },
        { term: 'metabolism', definition: 'How your body converts food into energy and runs its processes' },
        { term: 'hormone', definition: 'A chemical messenger that tells your body what to do' },
      ],
      analogies: [
        'The thyroid is like a thermostat for your body. In hypothyroidism, the thermostat is set too low, so everything runs slower.',
        'Thyroid hormone is like the gas pedal for your body\'s engine. Without enough hormone, your engine idles too slowly.',
      ],
      examples: [
        'A woman feels tired all the time and gains weight despite eating the same amount. Blood tests show low thyroid hormone.',
        'After starting thyroid medication, a person notices they have more energy and feel warmer.',
      ],
    },
    2: {
      level: 2,
      summary: 'Hypothyroidism is thyroid hormone deficiency, most commonly caused by autoimmune thyroiditis (Hashimoto\'s). Diagnosis is made by elevated TSH with low free T4, and treatment is levothyroxine replacement.',
      explanation: `**Thyroid Physiology Basics:**
- Hypothalamus releases TRH → Pituitary releases TSH → Thyroid releases T4 and T3
- T4 is converted to active T3 in peripheral tissues
- T3 enters cells and affects metabolism, heart, brain, and other organs
- Negative feedback: T3/T4 suppress TSH release

**Causes:**

*Primary Hypothyroidism (thyroid gland problem):*
- Hashimoto's thyroiditis (autoimmune) - most common in developed countries
- Iodine deficiency - most common worldwide
- Post-surgical (thyroidectomy)
- Post-radiation (radioactive iodine, external beam)
- Medications (amiodarone, lithium, tyrosine kinase inhibitors)
- Subacute/postpartum thyroiditis (recovery phase)

*Secondary/Central Hypothyroidism (pituitary or hypothalamus):*
- Pituitary adenoma, surgery, or radiation
- Sheehan syndrome (postpartum pituitary necrosis)
- Hypothalamic disease

**Symptoms by System:**
| System | Symptoms |
|--------|----------|
| General | Fatigue, cold intolerance, weight gain |
| Skin | Dry skin, hair loss, brittle nails |
| Cardiovascular | Bradycardia, diastolic hypertension |
| GI | Constipation |
| Neurological | Slowed thinking, depression, carpal tunnel |
| Reproductive | Menstrual irregularities, infertility |
| Musculoskeletal | Muscle weakness, cramps, joint pain |

**Diagnosis:**
| Test | Primary Hypothyroidism | Central Hypothyroidism |
|------|----------------------|------------------------|
| TSH | Elevated (>4.5 mU/L) | Low or normal |
| Free T4 | Low | Low |
| Anti-TPO antibodies | Often positive (Hashimoto's) | Negative |

**Treatment:**
- Levothyroxine (synthetic T4): 1.6 mcg/kg/day starting dose
- Take on empty stomach, 30-60 minutes before breakfast
- Recheck TSH in 6-8 weeks
- Goal TSH: 0.5-2.5 mU/L for most patients

**Monitoring:**
- Annual TSH once stable
- Adjust dose if TSH out of range
- Pregnancy requires dose increase (typically 25-30%)`,
      keyTerms: [
        { term: 'TSH', definition: 'Thyroid-stimulating hormone; released by pituitary to stimulate thyroid hormone production', pronunciation: 'T-S-H' },
        { term: 'T4', definition: 'Thyroxine; the main hormone produced by the thyroid', pronunciation: 'T-four' },
        { term: 'T3', definition: 'Triiodothyronine; the active form of thyroid hormone', pronunciation: 'T-three' },
        { term: 'Hashimoto\'s thyroiditis', definition: 'Autoimmune condition where immune system attacks the thyroid' },
        { term: 'levothyroxine', definition: 'Synthetic T4; the standard treatment for hypothyroidism', pronunciation: 'lev-oh-thy-ROX-een' },
        { term: 'anti-TPO', definition: 'Antibodies against thyroid peroxidase; marker of autoimmune thyroid disease' },
      ],
      analogies: [
        'TSH is like a thermostat reading - when the room (your body) is too cold (low thyroid hormone), the thermostat setting (TSH) goes up to try to make more heat.',
        'In Hashimoto\'s, your immune system mistakes your thyroid for an enemy and slowly damages it, like friendly fire.',
      ],
    },
    3: {
      level: 3,
      summary: 'Hypothyroidism results from deficient thyroid hormone production or action, with primary causes (thyroid gland dysfunction) far more common than central causes. Management requires individualized levothyroxine dosing with attention to drug interactions and special populations.',
      explanation: `**Pathophysiology:**

*Hashimoto's Thyroiditis:*
- T-cell mediated destruction of thyrocytes
- CD4+ and CD8+ lymphocyte infiltration
- Antibodies: Anti-TPO (90-95%), anti-thyroglobulin (70-80%)
- Gradual progression to hypothyroidism (may take years)
- Associated with other autoimmune conditions (vitiligo, T1DM, celiac)

*Iodine Deficiency:*
- Iodine required for thyroid hormone synthesis
- Endemic goiter in iodine-deficient regions
- Cretinism (congenital hypothyroidism) if severe
- Salt iodization has largely eliminated in developed countries

**Spectrum of Disease:**

| Classification | TSH | Free T4 | Symptoms |
|----------------|-----|---------|----------|
| Overt hypothyroidism | Elevated | Low | Present |
| Subclinical hypothyroidism | Elevated (4.5-10) | Normal | Often none |
| Severe/Myxedema | Very elevated | Very low | Severe/altered mental status |

**Subclinical Hypothyroidism:**
- Prevalence: 4-10% of adults
- Treatment considerations:
  - TSH >10: Generally treat
  - TSH 4.5-10: Treat if symptomatic, pregnant, trying to conceive, or positive antibodies
  - Elderly (>70): Higher TSH thresholds may be normal; avoid overtreatment

**Drug Interactions:**

*Decreased Levothyroxine Absorption:*
- Calcium, iron supplements
- Proton pump inhibitors
- Bile acid sequestrants (cholestyramine)
- Sucralfate
- Coffee (if taken together)

*Increased Levothyroxine Metabolism:*
- Phenytoin, carbamazepine
- Rifampin
- Estrogen therapy (increase TBG)

**Levothyroxine Dosing:**

*Starting Dose:*
- Young, healthy: Full replacement 1.6 mcg/kg/day
- Elderly or CAD: Start low (25-50 mcg/day) and titrate slowly
- Severe hypothyroidism: Start low to avoid precipitating angina/arrhythmia

*Dose Adjustments:*
| Situation | Adjustment |
|-----------|------------|
| TSH elevated | Increase by 12.5-25 mcg |
| TSH suppressed | Decrease by 12.5-25 mcg |
| Pregnancy | Increase ~30% immediately upon confirmation |
| Starting estrogen | May need increase |
| Aging | Often need decrease |

**Special Populations:**

*Pregnancy:*
- TSH goal: Trimester-specific (typically <2.5 first trimester)
- Inadequate treatment increases miscarriage, preterm birth, developmental delay
- Check TSH every 4 weeks in first half, at least once in second half

*Elderly:*
- Higher TSH may be normal (longevity studies)
- Risk of atrial fibrillation, bone loss with overtreatment
- Target TSH 4-6 mU/L in patients >70-80 years

*Myxedema Coma:*
- Medical emergency (see Endocrine Emergencies)
- IV levothyroxine + supportive care
- Empiric glucocorticoids until adrenal insufficiency ruled out`,
      keyTerms: [
        { term: 'thyrocyte', definition: 'Thyroid follicular cell; produces and secretes thyroid hormones' },
        { term: 'thyroglobulin', definition: 'Protein scaffold for thyroid hormone synthesis; stored in thyroid follicles' },
        { term: 'subclinical hypothyroidism', definition: 'Elevated TSH with normal free T4; often asymptomatic' },
        { term: 'thyroid-binding globulin', definition: 'TBG; main carrier protein for T4 in blood; levels affected by estrogen' },
        { term: 'myxedema', definition: 'Severe hypothyroidism with characteristic skin changes; myxedema coma is life-threatening' },
      ],
      clinicalNotes: 'Levothyroxine is one of the most commonly prescribed medications. Key pearls: (1) Take on empty stomach consistently; (2) Separate from calcium/iron by 4 hours; (3) Recheck TSH 6-8 weeks after any dose change; (4) Brand changes can affect TSH - recheck after switching; (5) In elderly and cardiac patients, start low and go slow.',
    },
    4: {
      level: 4,
      summary: 'Primary hypothyroidism involves failure of thyroid hormone synthesis due to gland destruction, iodine deficiency, or biosynthetic defects. Treatment optimization requires understanding of thyroid hormone pharmacokinetics, deiodinase physiology, and management of persistent symptoms despite biochemical euthyroidism.',
      explanation: `**Thyroid Hormone Biosynthesis:**

*Steps in Hormone Production:*
1. Iodide uptake (NIS - sodium-iodide symporter)
2. Oxidation to iodine (TPO - thyroid peroxidase)
3. Organification (iodination of tyrosine residues on thyroglobulin)
4. Coupling (MIT + DIT → T3; DIT + DIT → T4)
5. Proteolysis of thyroglobulin → T4 and T3 release
6. Peripheral conversion: T4 → T3 (deiodinases)

*Deiodinases:*
| Enzyme | Location | Function |
|--------|----------|----------|
| D1 | Liver, kidney, thyroid | T4→T3 conversion, rT3 clearance |
| D2 | Brain, pituitary, BAT, muscle | Local T3 production (critical for feedback) |
| D3 | Placenta, brain, skin | T4→rT3, T3→T2 (inactivation) |

**Hashimoto's Thyroiditis - Immunopathogenesis:**

*Genetic Susceptibility:*
- HLA-DR3, HLA-DR4, HLA-DR5
- CTLA4, PTPN22 polymorphisms
- Thyroglobulin gene variants

*Immune Mechanisms:*
- Loss of tolerance to thyroid antigens (TPO, Tg)
- Th1-predominant response: IFN-γ, TNF-α
- CD8+ cytotoxic T cells: Direct thyrocyte killing
- Antibody-dependent cytotoxicity
- Complement activation

*Histology:*
- Lymphocytic infiltration
- Germinal centers
- Hurthle cell metaplasia
- Fibrosis (late stage)

**Central Hypothyroidism:**

*Etiology:*
- Pituitary adenomas (nonfunctioning, most common)
- Pituitary surgery or radiation
- Infiltrative disease (hemochromatosis, sarcoidosis)
- Sheehan syndrome
- TRH deficiency (hypothalamic)

*Diagnostic Features:*
- Low or inappropriately normal TSH with low free T4
- Cannot use TSH for monitoring (must use free T4)
- Often other pituitary hormone deficiencies present
- MRI pituitary indicated

**Persistent Symptoms on Levothyroxine:**

*Causes to Investigate:*
1. Inadequate dose (check TSH)
2. Absorption issues (check compliance, timing, interactions)
3. Coexisting conditions (anemia, B12 deficiency, depression)
4. Polymorphisms in deiodinases (DIO2 Thr92Ala)

*Combination T4/T3 Therapy:*
- Rationale: Some tissues depend on local T4→T3 conversion
- DIO2 polymorphisms may impair conversion
- Evidence: Mixed results in trials; no consistent benefit
- Guidelines: Do not recommend routine use; may trial in selected patients
- If used: T4:T3 ratio of 13-20:1, divided T3 doses

**Levothyroxine Pharmacokinetics:**

| Parameter | Value |
|-----------|-------|
| Absorption | 70-80% (fasting), decreased with food |
| Half-life | 7 days |
| Time to steady state | 5-6 weeks |
| Distribution | Highly protein-bound (TBG, transthyretin, albumin) |
| Metabolism | Deiodination, conjugation |

*Implications:*
- Long half-life allows once-daily dosing
- Missed dose: Can take double next day
- Steady state: Wait 6-8 weeks to recheck TSH

**Thyroid Hormone Resistance:**

*Resistance to Thyroid Hormone (RTH):*
- Mutations in thyroid hormone receptor β (THRB)
- Elevated T4, T3 with non-suppressed TSH
- Variable tissue sensitivity
- Usually requires no treatment (compensated)

*Consumptive Hypothyroidism:*
- Rare: Tumors expressing D3 → rapid T4/T3 inactivation
- Requires very high levothyroxine doses

**Congenital Hypothyroidism:**

*Causes:*
- Thyroid dysgenesis (85%): Agenesis, ectopy, hypoplasia
- Dyshormonogenesis (15%): Enzyme defects (TPO, NIS, etc.)
- Central (rare)

*Screening and Treatment:*
- Newborn screening (TSH or T4) in all developed countries
- Early treatment critical to prevent intellectual disability
- Treatment within 2 weeks of birth associated with normal IQ`,
      keyTerms: [
        { term: 'NIS', definition: 'Sodium-iodide symporter; transports iodide into thyrocytes; also expressed in breast, salivary glands' },
        { term: 'TPO', definition: 'Thyroid peroxidase; enzyme catalyzing iodination and coupling reactions; major autoantigen' },
        { term: 'deiodinase', definition: 'Enzymes that remove iodine from thyroid hormones; D2 activates T4→T3, D3 inactivates' },
        { term: 'DIO2 Thr92Ala', definition: 'Common deiodinase 2 polymorphism potentially affecting T4→T3 conversion; clinical significance debated' },
        { term: 'consumptive hypothyroidism', definition: 'Rare condition of accelerated T4/T3 degradation by tumor-expressed D3' },
        { term: 'RTH', definition: 'Resistance to thyroid hormone; genetic syndrome with elevated T4/T3 but non-suppressed TSH' },
      ],
      clinicalNotes: 'Approximately 10-15% of levothyroxine-treated patients report persistent symptoms despite normal TSH. Systematic evaluation should exclude non-thyroid causes, absorption issues, and other autoimmune conditions. DIO2 polymorphisms and combination T4/T3 therapy remain controversial - current guidelines do not support routine combination therapy but acknowledge individual trials may be reasonable.',
    },
    5: {
      level: 5,
      summary: 'Hypothyroidism pathogenesis involves complex genetic, immunological, and environmental interactions. Emerging research addresses tissue-specific thyroid hormone action, the role of the microbiome, precision approaches to treatment, and novel therapeutic targets for Hashimoto\'s disease modification.',
      explanation: `**Genetic Architecture of Hashimoto's:**

*GWAS and Sequencing Studies:*
| Gene/Locus | Function | Mechanism |
|------------|----------|-----------|
| HLA-DR | Antigen presentation | Disease susceptibility |
| CTLA4 | T cell inhibition | Impaired regulation |
| PTPN22 | T cell signaling | Enhanced activation |
| FOXE1 | Thyroid development | Thyroid gene expression |
| IL2RA | Treg function | Immune dysregulation |
| TSHR | TSH receptor | Autoantigen variation |

*Epigenetics:*
- DNA methylation changes at immune genes
- X chromosome inactivation skewing (female predominance)
- MicroRNAs regulating immune response

**Environmental Triggers:**

*Iodine:*
- Paradox: Both deficiency and excess predispose to autoimmunity
- High iodine → increased thyroid antigen immunogenicity
- Salt iodization associated with increased Hashimoto's incidence

*Other Factors:*
- Selenium deficiency: May impair antioxidant defense
- Infections: Molecular mimicry (Yersinia, HCV)
- Gut microbiome: Intestinal permeability, immune modulation
- Endocrine disruptors: Possible role

**Tissue-Specific Thyroid Hormone Action:**

*Deiodinase Distribution and Regulation:*
- D2 in pituitary: Drives TSH feedback (different from peripheral)
- D2 upregulated in hypothyroidism: Compensatory mechanism
- D3 upregulated in illness: "Non-thyroidal illness" syndrome
- Implications: Serum T3 does not reflect tissue T3

*Thyroid Hormone Transporters:*
- MCT8: Critical for brain T3 uptake
- MCT8 mutations: Allan-Herndon-Dudley syndrome (severe neurological impairment)
- MCT10, OATP1C1: Tissue-specific expression
- Drug interactions with transporters

*Nuclear Receptor Coregulators:*
- Tissue-specific expression of coactivators/corepressors
- Modulate gene response to T3
- May explain variable tissue sensitivity

**Thyroid and the Microbiome:**

*Emerging Evidence:*
- Altered gut microbiome in autoimmune thyroid disease
- Intestinal permeability ("leaky gut") hypothesis
- Molecular mimicry between gut bacteria and thyroid antigens
- Microbiome influences iodine and selenium metabolism

*Therapeutic Implications:*
- Probiotics: Limited studies, mixed results
- Gluten-free diet: May benefit celiac-associated Hashimoto's
- Dietary patterns: Mediterranean diet associations

**Non-Thyroidal Illness Syndrome (NTIS):**

*Pathophysiology:*
- Low T3 with variable TSH and T4 in acute/chronic illness
- Mechanism: Decreased D1, increased D3; altered TBG
- Adaptive response (reduce metabolism) vs maladaptive
- Treatment with thyroid hormone: Generally NOT recommended

*Resolution:*
- TSH may transiently elevate during recovery
- Do not diagnose hypothyroidism during acute illness
- Recheck 6-8 weeks after recovery

**Precision Medicine Approaches:**

*Pharmacogenomics:*
- DIO2 Thr92Ala: May predict combination therapy response
- MCT8, MCT10 variants: Theoretical impact on transport
- UGT1A enzymes: T4 glucuronidation and clearance
- Limited clinical application currently

*Individualized Targets:*
- Pre-illness TSH may vary widely (0.4-4.5 range)
- Intra-individual variation much smaller
- Personalizing to individual's "setpoint" - conceptual

*Novel Formulations:*
- Soft gel levothyroxine: Improved absorption
- Liquid levothyroxine: For malabsorption, tube feeds
- T3 slow-release: Reduces peaks (investigational)
- Combination T4/T3 ratios: More physiologic (investigational)

**Disease Modification in Hashimoto's:**

*Selenium Supplementation:*
- Meta-analyses show modest decrease in anti-TPO titers
- Limited evidence for clinical benefit
- 200 mcg/day studied; not routinely recommended

*Immunomodulation (Investigational):*
- Rituximab: Case reports in severe Hashimoto's
- Low-dose naltrexone: Anecdotal, no RCT evidence
- Antigen-specific tolerance: Preclinical

*Preventing Progression:*
- Can we prevent euthyroid Hashimoto's → hypothyroidism?
- Selenium, vitamin D - studied but unproven
- Lifestyle factors under investigation

**Subclinical Hypothyroidism - Evolving Evidence:**

*Treatment Benefit Debate:*
- TRUST trial (elderly): No symptomatic or cardiovascular benefit
- Young adults: May benefit (quality of life, lipids)
- Pregnancy: Clear benefit for maternal and fetal outcomes

*Risk of Overtreatment in Elderly:*
- Atrial fibrillation
- Osteoporosis
- May negate longevity (higher TSH associated with longevity in elderly)

**Future Directions:**

*Regenerative Medicine:*
- Thyroid organoids from iPSCs
- Potential for cell replacement therapy
- Currently preclinical

*Novel Drug Targets:*
- Thyroid hormone mimetics (tissue-selective)
- TRβ agonists for metabolic disease
- Thyromimetics that do not affect heart

*Biomarkers:*
- Better prediction of Hashimoto's progression
- Markers of tissue hypothyroidism beyond TSH
- Personalized TSH targets based on genetics`,
      keyTerms: [
        { term: 'MCT8', definition: 'Monocarboxylate transporter 8; critical for thyroid hormone transport into neurons; mutations cause severe neurological disease' },
        { term: 'Allan-Herndon-Dudley syndrome', definition: 'X-linked disorder from MCT8 mutations causing severe psychomotor retardation with elevated T3' },
        { term: 'NTIS', definition: 'Non-thyroidal illness syndrome; altered thyroid function tests in acute/chronic illness without intrinsic thyroid disease' },
        { term: 'thyromimetics', definition: 'Compounds mimicking thyroid hormone action; in development for metabolic disease with tissue selectivity' },
        { term: 'TRUST trial', definition: 'Thyroid Hormone Replacement for Subclinical Hypothyroidism Trial; showed no benefit in elderly' },
        { term: 'thyroid organoids', definition: 'Three-dimensional thyroid tissue structures derived from stem cells; potential for regenerative therapy' },
      ],
      clinicalNotes: 'Key clinical controversies: (1) Combination T4/T3 therapy - not supported by guidelines but some patients report benefit; consider carefully selected trial; (2) Subclinical hypothyroidism in elderly - avoid overtreatment, consider higher TSH targets; (3) Persistent symptoms on levothyroxine - systematic evaluation essential before attributing to thyroid; most patients do well on T4 monotherapy. The field is moving toward more personalized approaches based on genetics and individual setpoints.',
    },
  },

  media: [
    {
      id: 'hypothyroid-hpa-axis-1',
      type: 'diagram',
      filename: 'hypothalamic-pituitary-thyroid-axis.svg',
      title: 'Hypothalamic-Pituitary-Thyroid Axis',
      description: 'Feedback regulation of thyroid hormone production',
    },
    {
      id: 'hypothyroid-hashimoto-1',
      type: 'diagram',
      filename: 'hashimoto-pathogenesis.svg',
      title: 'Hashimoto\'s Thyroiditis Pathogenesis',
      description: 'Autoimmune mechanisms of thyroid destruction',
    },
  ],

  citations: [
    {
      id: 'garber-2012',
      type: 'article',
      title: 'Clinical Practice Guidelines for Hypothyroidism in Adults',
      authors: ['Garber JR', 'Cobin RH', 'Gharib H', 'et al.'],
      source: 'Thyroid 2012;22:1200-1235',
      license: 'Copyrighted',
    },
    {
      id: 'chaker-2017',
      type: 'article',
      title: 'Hypothyroidism',
      authors: ['Chaker L', 'Bianco AC', 'Jonklaas J', 'Peeters RP'],
      source: 'Lancet 2017;390:1550-1562',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'endocrine-hyperthyroidism', targetType: 'condition', relationship: 'related', label: 'Hyperthyroidism' },
    { targetId: 'endocrine-thyroid-nodules', targetType: 'condition', relationship: 'see-also', label: 'Thyroid Nodules' },
    { targetId: 'endocrine-myxedema-coma', targetType: 'condition', relationship: 'see-also', label: 'Myxedema Coma' },
    { targetId: 'endocrine-thyroid-replacement', targetType: 'topic', relationship: 'see-also', label: 'Thyroid Replacement Therapy' },
  ],

  tags: {
    systems: ['endocrine'],
    topics: ['thyroid', 'autoimmune', 'hormone replacement'],
    keywords: ['hypothyroidism', 'Hashimoto', 'levothyroxine', 'TSH', 'thyroid hormone'],
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
