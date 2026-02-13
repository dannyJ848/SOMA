/**
 * Polycystic Ovary Syndrome (PCOS)
 *
 * Comprehensive coverage of PCOS including pathophysiology,
 * diagnosis, and management.
 */

import { EducationalContent } from '../../../types';

export const polycysticOvarySyndrome: EducationalContent = {
  id: 'obgyn-conditions-pcos',
  type: 'condition',
  name: 'Polycystic Ovary Syndrome',
  alternateNames: ['PCOS', 'Stein-Leventhal Syndrome', 'Polycystic Ovarian Syndrome'],

  levels: {
    1: {
      level: 1,
      summary: 'PCOS is a common hormone problem that can cause irregular periods, excess hair growth, and difficulty getting pregnant.',
      explanation: `PCOS affects how a woman's ovaries work and is one of the most common hormone conditions in women of childbearing age.

**Main features:**
- Irregular or missed periods
- Higher levels of male hormones (androgens)
- Many small cysts on the ovaries (not always present)

**Common symptoms:**
- Periods that are irregular, light, or absent
- Excess facial or body hair
- Acne that doesn't go away
- Weight gain, especially around the middle
- Difficulty getting pregnant
- Thinning hair on the head

**What causes it:**
- Exact cause unknown
- Runs in families
- Related to insulin resistance

**Treatment:**
- Lifestyle changes (diet, exercise, weight loss)
- Birth control pills to regulate periods
- Medications for hair growth and acne
- Fertility treatments if trying to conceive`,
      keyTerms: [
        { term: 'PCOS', definition: 'A hormone disorder causing irregular periods, excess hair growth, and ovarian cysts' },
        { term: 'androgens', definition: 'Male hormones that women also have in small amounts; elevated in PCOS' },
        { term: 'insulin resistance', definition: 'When the body doesn\'t respond well to insulin, linked to PCOS' },
      ],
      analogies: [
        'In PCOS, the ovaries are like a factory where the workers (hormones) aren\'t coordinating well - some are overproducing while others aren\'t doing their job.',
      ],
      examples: [
        'A woman with PCOS might only have 4-6 periods per year instead of the usual 12.',
      ],
    },
    2: {
      level: 2,
      summary: 'PCOS is diagnosed by the Rotterdam criteria (2 of 3: oligo/anovulation, hyperandrogenism, polycystic ovaries) and is associated with metabolic syndrome, infertility, and long-term health risks.',
      explanation: `**Diagnosis (Rotterdam Criteria - need 2 of 3):**

1. **Oligo-ovulation or anovulation:**
   - <8 periods per year
   - Or cycles >35 days

2. **Clinical or biochemical hyperandrogenism:**
   - Clinical: Hirsutism, acne, male-pattern hair loss
   - Biochemical: Elevated testosterone, DHEAS

3. **Polycystic ovaries on ultrasound:**
   - ≥20 follicles (2-9 mm) per ovary OR
   - Ovarian volume >10 mL

*Must rule out other causes (thyroid, prolactin, CAH)*

**Associated Conditions:**
- Insulin resistance (50-70%)
- Obesity (40-60%)
- Type 2 diabetes
- Dyslipidemia
- Hypertension
- Sleep apnea
- Depression/anxiety
- Endometrial hyperplasia/cancer

**Workup:**
- TSH, prolactin (rule out other causes)
- Total testosterone, free testosterone
- 17-hydroxyprogesterone (rule out CAH)
- Fasting glucose, lipid panel
- Consider: HbA1c, oral glucose tolerance test

**Treatment by Goal:**

*Irregular periods:*
- Combined oral contraceptives
- Cyclic progestins

*Hirsutism/acne:*
- OCPs (anti-androgenic progestins)
- Spironolactone
- Topical treatments

*Infertility:*
- Weight loss
- Letrozole (first-line)
- Clomiphene
- Metformin (adjunct)
- IVF if needed`,
      keyTerms: [
        { term: 'Rotterdam criteria', definition: 'Diagnostic criteria for PCOS requiring 2 of 3 features' },
        { term: 'hirsutism', definition: 'Excess hair growth in male pattern distribution in women' },
        { term: 'oligo-ovulation', definition: 'Infrequent ovulation, causing irregular periods' },
      ],
    },
    3: {
      level: 3,
      summary: 'PCOS involves hypothalamic-pituitary-ovarian axis dysfunction with elevated LH/FSH ratio, theca cell hyperandrogenism, and peripheral insulin resistance, requiring phenotype-specific management.',
      explanation: `**Pathophysiology:**

*HPO Axis:*
- Increased GnRH pulse frequency
- Elevated LH, normal/low FSH
- LH/FSH ratio often >2:1
- Impaired negative feedback

*Ovarian Dysfunction:*
- Theca cell hyperplasia
- Increased androgen production
- Arrested follicular development
- Anovulation

*Insulin Resistance:*
- Hyperinsulinemia
- Insulin stimulates ovarian androgen production
- Decreases hepatic SHBG
- Increases free testosterone

*Adipose Tissue:*
- Peripheral androgen conversion
- Inflammatory cytokines
- Adipokine dysregulation

**PCOS Phenotypes:**

| Phenotype | Features | Metabolic Risk |
|-----------|----------|----------------|
| A (Classic) | HA + OD + PCO | Highest |
| B (Classic) | HA + OD | High |
| C | HA + PCO | Moderate |
| D (Ovulatory) | OD + PCO | Lower |

*HA = Hyperandrogenism, OD = Ovulatory dysfunction, PCO = Polycystic ovaries*

**Laboratory Findings:**

*Typical:*
- LH elevated, FSH normal/low
- Total/free testosterone elevated
- DHEAS mildly elevated
- SHBG decreased
- AMH elevated (correlates with follicle count)

*Metabolic:*
- Fasting insulin elevated
- HOMA-IR increased
- Impaired glucose tolerance (30-40%)
- Dyslipidemia (elevated TG, low HDL)

**Management by Phenotype:**

*Metabolic Phenotypes (A, B):*
- Lifestyle modification priority
- Metformin consideration
- Aggressive metabolic monitoring

*Hyperandrogenic Phenotypes (A, B, C):*
- Anti-androgen therapy
- OCPs with anti-androgenic progestins
- Dermatologic treatments

*All Phenotypes:*
- Endometrial protection
- Cardiovascular risk management
- Mental health screening

**Fertility Treatment:**

*First-line:*
- Lifestyle/weight loss
- Letrozole (aromatase inhibitor)
  - Higher live birth rate than clomiphene
  - Less multiple pregnancy

*Second-line:*
- Clomiphene citrate
- Metformin (adjunct, insulin-resistant)
- Gonadotropins (specialist management)

*Third-line:*
- Ovarian drilling (rarely used)
- IVF (OHSS risk higher in PCOS)`,
      keyTerms: [
        { term: 'SHBG', definition: 'Sex hormone binding globulin; decreased in PCOS, leading to higher free testosterone' },
        { term: 'letrozole', definition: 'Aromatase inhibitor; first-line ovulation induction in PCOS' },
        { term: 'OHSS', definition: 'Ovarian hyperstimulation syndrome; higher risk in PCOS during fertility treatment' },
      ],
      clinicalNotes: 'Letrozole is now first-line for ovulation induction in PCOS (PPCOS II trial showed higher live birth rates than clomiphene). Anti-Mullerian hormone (AMH) is often markedly elevated in PCOS and may be used diagnostically.',
    },
    4: {
      level: 4,
      summary: 'PCOS management requires long-term metabolic surveillance, phenotype-directed therapy, and attention to psychological well-being, with emerging understanding of genetic and epigenetic factors informing future treatments.',
      explanation: `**Genetic and Epigenetic Factors:**

*Heritability:*
- Strong familial clustering
- 70% heritability
- Polygenic inheritance
- GWAS loci: DENND1A, THADA, LHCGR, FSHR

*Epigenetics:*
- Fetal androgen exposure hypothesis
- Developmental programming
- DNA methylation alterations
- Potential transgenerational effects

*Environmental Factors:*
- Obesity amplifies phenotype
- Diet composition effects
- Endocrine disruptors
- Stress

**Long-term Health Monitoring:**

*Cardiovascular:*
- Annual BP monitoring
- Lipid panel every 1-2 years
- Consider coronary calcium score
- Lifestyle counseling

*Metabolic:*
- Screening for prediabetes/T2DM
- OGTT preferred (fasting may miss IGT)
- HbA1c as alternative
- Repeat every 1-3 years based on risk

*Mental Health:*
- Depression screening (2-3x risk)
- Anxiety screening (increased prevalence)
- Body image concerns
- Eating disorder risk

*Endometrial:*
- Prolonged amenorrhea >90 days requires progestin
- Consider ultrasound for persistent AUB
- Biopsy threshold lower in PCOS
- Annual progestin withdrawal or continuous protection

**Anti-Androgen Therapy:**

*Spironolactone:*
- 100-200 mg daily
- Contraception required (teratogenic)
- Monitor potassium
- Takes 6 months for hair effect

*Finasteride:*
- 5α-reductase inhibitor
- Off-label for hirsutism
- Pregnancy category X
- Less effective than spironolactone

*Flutamide:*
- Hepatotoxicity limits use
- Rarely used in US

*Combined OCPs:*
- Suppresses ovarian androgens
- Increases SHBG
- Anti-androgenic progestins best (drospirenone, cyproterone)

**Adolescent PCOS:**

*Diagnostic Challenges:*
- Irregular cycles common post-menarche
- Polycystic ovaries common in adolescents
- Require all 3 Rotterdam criteria
- OR persistent irregularity (>2 years) + hyperandrogenism

*Management:*
- Lifestyle first
- OCPs for menstrual regulation
- Metformin if insulin resistant
- Address psychosocial aspects

**Pregnancy in PCOS:**

*Increased Risks:*
- Gestational diabetes (2-3x)
- Pregnancy-induced hypertension
- Preeclampsia
- Preterm birth
- Cesarean delivery

*Management:*
- Preconception weight optimization
- Early GDM screening (first trimester)
- Blood pressure monitoring
- Aspirin for preeclampsia prevention`,
      keyTerms: [
        { term: 'DENND1A', definition: 'Gene associated with PCOS susceptibility; involved in theca cell androgen production' },
        { term: 'developmental programming', definition: 'Theory that fetal androgen exposure predisposes to PCOS development' },
        { term: 'drospirenone', definition: 'Progestin with anti-androgenic and anti-mineralocorticoid properties; used in OCPs for PCOS' },
      ],
      clinicalNotes: 'PCOS in adolescents is often underdiagnosed or overdiagnosed. Require stricter criteria than adults. Lifestyle intervention should be primary approach before medications in this age group.',
    },
    5: {
      level: 5,
      summary: 'Contemporary PCOS care integrates international guidelines, addresses phenotypic heterogeneity, emphasizes cardiometabolic risk reduction, and incorporates patient-centered approaches to this complex, lifelong condition.',
      explanation: `**International Guidelines (2023):**

*Diagnosis Updates:*
- AMH as potential alternative to ultrasound
- Adolescent-specific criteria
- Phenotype classification recommended
- Ethnic variations in presentation

*Key Recommendations:*
- Lifestyle as first-line for all phenotypes
- Letrozole first-line for ovulation induction
- Combined OCP for menstrual/hyperandrogenism
- Metformin for metabolic comorbidities
- Long-term follow-up for all

**Emerging Therapies:**

*Metabolic Targets:*
- GLP-1 agonists (liraglutide, semaglutide)
  - Weight loss
  - Improved insulin sensitivity
  - Some evidence for menstrual regularity
- Inositols (myo-inositol, D-chiro-inositol)
  - Insulin sensitizing
  - Limited but promising evidence
  - Generally well tolerated

*Anti-androgens:*
- Oral contraceptive combinations
- Newer progestins
- Topical antiandrogens (in development)

*Novel Approaches:*
- Anti-Mullerian hormone antagonists
- Kisspeptin modulators
- Gut microbiome interventions

**Quality Metrics:**

*Process Measures:*
- Documentation of diagnostic criteria
- Metabolic screening completion
- Endometrial protection provided
- Mental health screening

*Outcome Measures:*
- Menstrual regularity achieved
- Metabolic parameters improved
- Quality of life scores
- Fertility outcomes

**Disparities and Access:**

*Diagnostic Disparities:*
- Delay in diagnosis (often years)
- Racial differences in presentation
- Hirsutism assessment varies by ethnicity
- Access to specialists limited

*Management Disparities:*
- Weight stigma in healthcare
- Insurance coverage for fertility
- Access to lifestyle programs
- Mental health resources

*Improving Equity:*
- Provider education
- Culturally sensitive care
- Shared decision-making
- Advocacy for coverage

**Patient-Centered Care:**

*Education:*
- Explain heterogeneity of condition
- Long-term health implications
- Treatment options and tradeoffs
- Self-management strategies

*Lifestyle Support:*
- Realistic goal setting
- Behavioral approaches
- Community resources
- Address barriers

*Emotional Support:*
- Validate challenges
- Fertility concerns
- Body image issues
- Support groups

*Care Coordination:*
- Endocrinology for complex metabolic
- Dermatology for severe hirsutism
- Mental health providers
- Fertility specialists

**Research Priorities:**

*Identified Needs:*
- Non-invasive diagnostic biomarkers
- Targeted therapies by phenotype
- Long-term CVD outcome data
- Effective weight management
- Adolescent-specific evidence
- Ethnically diverse research
- Implementation science`,
      keyTerms: [
        { term: 'GLP-1 agonists', definition: 'Medications like semaglutide showing promise for weight and metabolic management in PCOS' },
        { term: 'inositols', definition: 'Supplements (myo-inositol, D-chiro-inositol) used as insulin sensitizers in PCOS' },
        { term: 'kisspeptin', definition: 'Neuropeptide regulating GnRH; potential therapeutic target in PCOS' },
      ],
      clinicalNotes: 'PCOS is increasingly recognized as a lifelong metabolic and reproductive condition. International guidelines emphasize patient-centered care, phenotype-specific management, and long-term cardiometabolic surveillance. GLP-1 agonists represent an exciting emerging option for metabolic management.',
    },
  },

  media: [
    {
      id: 'pcos-pathophysiology',
      type: 'diagram',
      filename: 'pcos-mechanisms.svg',
      title: 'PCOS Pathophysiology',
      description: 'Illustration of the hormonal and metabolic dysregulation in PCOS',
    },
  ],

  citations: [
    {
      id: 'pcos-guidelines-2023',
      type: 'article',
      title: 'International Evidence-based Guideline for the Assessment and Management of PCOS',
      source: 'Monash University/ESHRE/ASRM',
      authors: ['Teede HJ', 'Tay CT', 'Laven J'],
      license: 'Open Access',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-physiology-menstrual-cycle', targetType: 'process', relationship: 'related', label: 'Menstrual Cycle' },
    { targetId: 'obgyn-conditions-aub', targetType: 'condition', relationship: 'related', label: 'Abnormal Uterine Bleeding' },
  ],

  tags: {
    systems: ['reproductive', 'endocrine'],
    topics: ['gynecology', 'endocrinology', 'PCOS', 'infertility'],
    keywords: ['PCOS', 'polycystic ovary', 'hyperandrogenism', 'insulin resistance', 'infertility'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['obgyn', 'medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
