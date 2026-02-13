/**
 * Hypothyroidism Educational Module
 * 
 * Comprehensive educational content across all 6 complexity levels.
 * Covers Hashimoto's thyroiditis, subclinical vs overt disease, levothyroxine therapy,
 * T4 to T3 conversion, myxedema, and pregnancy considerations.
 */

import type { EducationalModule } from '../types.js';

export const hypothyroidismModule: EducationalModule = {
  id: 'endocrinology-hypothyroidism-comprehensive',
  type: 'specialty',
  specialty: 'endocrinology',

  // Metadata
  title: 'Understanding Hypothyroidism',
  description: 'A comprehensive guide to hypothyroidism: causes, diagnosis, and treatment. Learn about Hashimoto\'s disease, thyroid hormone replacement, and special considerations including pregnancy and myxedema.',
  version: '1.0.0',
  lastUpdated: '2026-02-06',
  author: 'Biological Self Medical Education Team',

  // Learning structure
  prerequisites: [
    'endocrine-system-basics',
    'hormone-feedback-loops',
    'thyroid-function-basics',
  ],

  learningObjectives: [
    'Understand what hypothyroidism is and how it affects the body',
    'Learn about Hashimoto\'s thyroiditis as the most common cause',
    'Distinguish between subclinical and overt hypothyroidism',
    'Understand levothyroxine therapy and proper administration',
    'Learn about T4 to T3 conversion and its clinical significance',
    'Recognize myxedema as a life-threatening complication',
    'Understand pregnancy-related thyroid considerations',
  ],

  estimatedTime: {
    1: '15 minutes',
    2: '20 minutes',
    3: '30 minutes',
    4: '45 minutes',
    5: '60 minutes',
    6: '90 minutes',
  },

  // Content by complexity level
  content: {
    // Level 1: Foundation
    1: {
      summary: `Hypothyroidism means your thyroid gland is not making enough thyroid hormone. Think of thyroid hormone as your body's gas pedal - when you don't have enough, everything slows down. You might feel tired, cold, and gain weight even though you're eating the same amount of food. Your hair might become dry, and you might feel sad or forgetful. The most common cause is Hashimoto's disease, where your immune system accidentally attacks your thyroid. The good news is that taking a daily thyroid hormone pill (levothyroxine) can replace what your body is missing and help you feel normal again.`,

      analogy: `Imagine your body is a car and thyroid hormone is the gas pedal:

🚗 NORMAL THYROID = Just the right amount of gas
- You cruise along smoothly
- Energy levels are steady
- Body temperature feels comfortable

🐢 HYPOTHYROIDISM = Foot barely on the gas pedal
- The car slows down to a crawl
- You feel sluggish and tired
- Everything works slower than it should
- The "engine" (your metabolism) isn't producing enough heat

With Hashimoto's disease, it's like the gas pedal is being slowly damaged by rust (your immune system). Taking levothyroxine is like having a co-pilot who presses the gas pedal for you, keeping you moving at the right speed!`,

      keyPoints: [
        'Hypothyroidism means your thyroid doesn\'t make enough hormone',
        'It causes your body to slow down - like a car with not enough gas',
        'Symptoms include feeling tired, cold, weight gain, dry skin, and sadness',
        'Hashimoto\'s disease is the most common cause - your immune system attacks your thyroid',
        'Levothyroxine is a daily pill that replaces the missing thyroid hormone',
        'With proper treatment, most people feel completely normal',
      ],

      visualAid: 'thyroid-gland-location-hormones',
    },

    // Level 2: Developing
    2: {
      summary: `Hypothyroidism occurs when the thyroid gland produces insufficient thyroid hormones (T3 and T4). These hormones regulate metabolism, body temperature, heart rate, and energy production. When levels are low, the hypothalamus and pituitary try to compensate by increasing TSH (Thyroid Stimulating Hormone). Hashimoto's thyroiditis is an autoimmune condition where antibodies attack the thyroid. Subclinical hypothyroidism has elevated TSH but normal hormone levels, while overt hypothyroidism has both high TSH and low thyroid hormones with more pronounced symptoms.`,

      keyConcepts: [
        {
          term: 'TSH (Thyroid Stimulating Hormone)',
          explanation: 'Produced by the pituitary gland to signal the thyroid to work. Rises when thyroid hormone is low.',
        },
        {
          term: 'T4 (Thyroxine)',
          explanation: 'The main hormone produced by the thyroid. Most circulates bound to proteins.',
        },
        {
          term: 'T3 (Triiodothyronine)',
          explanation: 'The more active thyroid hormone, mostly converted from T4 in the body.',
        },
        {
          term: 'Hashimoto\'s Thyroiditis',
          explanation: 'Autoimmune disease where the immune system attacks the thyroid, causing inflammation and gradual destruction.',
        },
        {
          term: 'Subclinical Hypothyroidism',
          explanation: 'Early stage with elevated TSH but normal T4 levels. May have mild or no symptoms.',
        },
        {
          term: 'Overt Hypothyroidism',
          explanation: 'More advanced disease with high TSH and low T4, causing clear symptoms.',
        },
      ],

      keyPoints: [
        'TSH comes from the brain and tells the thyroid to make hormones',
        'In hypothyroidism, TSH goes UP because the brain is trying to stimulate the thyroid more',
        'Hashimoto\'s is diagnosed by finding TPO antibodies in the blood',
        'Subclinical hypothyroidism: High TSH, normal T4 - may or may not need treatment',
        'Overt hypothyroidism: High TSH, low T4 - always needs treatment',
        'Levothyroxine is synthetic T4 that replaces what the thyroid can\'t make',
      ],

      howItWorks: `1. The hypothalamus monitors thyroid hormone levels in your blood
2. If levels are low, it sends TRH to the pituitary gland
3. The pituitary releases TSH into the bloodstream
4. TSH travels to the thyroid and stimulates hormone production
5. The thyroid makes T4 (and some T3)
6. T4 is converted to the more active T3 in your tissues
7. When levels are adequate, the hypothalamus reduces TRH (negative feedback)

In Hashimoto's disease:
- Immune cells infiltrate the thyroid
- TPO antibodies attack thyroid cells
- The thyroid gradually loses function
- TSH rises as the brain tries to compensate
- Eventually, T4 production falls despite high TSH`,
    },

    // Level 3: Standard
    3: {
      summary: `Hypothyroidism results from inadequate thyroid hormone production, most commonly due to Hashimoto's thyroiditis (chronic autoimmune thyroiditis), which involves lymphocytic infiltration and antibody-mediated destruction. The diagnosis relies on thyroid function tests showing elevated TSH with low or low-normal free T4. TPO antibodies confirm autoimmune etiology. Subclinical hypothyroidism (TSH 4.5-10 mIU/L with normal T4) may progress to overt disease, especially with positive antibodies. Levothyroxine sodium is the treatment of choice - a synthetic T4 that is converted to active T3 in peripheral tissues. Dosage is weight-based (approximately 1.6 mcg/kg) and titrated to normalize TSH.`,

      mechanisms: [
        {
          name: 'Hypothalamic-Pituitary-Thyroid (HPT) Axis',
          description: 'Negative feedback loop where T4/T3 suppress TRH and TSH secretion. In hypothyroidism, reduced feedback causes compensatory TSH elevation. The log-linear relationship means TSH changes dramatically with small T4 changes.',
        },
        {
          name: 'Autoimmune Destruction in Hashimoto\'s',
          description: 'CD4+ T-cells infiltrate thyroid, B-cells produce TPO and thyroglobulin antibodies. Gradual lymphocytic destruction of follicular cells leads to fibrosis. HLA associations include DR3, DR5, CTLA-4 polymorphisms.',
        },
        {
          name: 'Peripheral T4 to T3 Conversion',
          description: 'T4 (prohormone) is converted to active T3 by deiodinase enzymes (D1, D2). About 80% of circulating T3 comes from peripheral conversion, not direct thyroid secretion. This provides tissue-specific hormone regulation.',
        },
        {
          name: 'Levothyroxine Absorption and Metabolism',
          description: 'Absorbed in the small intestine (40-80% bioavailability). Requires gastric acid for optimal absorption. Binds to plasma proteins (mainly thyroxine-binding globulin). Half-life 7 days, allowing once-daily dosing.',
        },
      ],

      clinicalCorrelates: [
        'Hashimoto\'s thyroiditis: Most common cause in iodine-sufficient regions. Female predominance (5-10:1). Associated with other autoimmune diseases (vitiligo, type 1 diabetes, celiac disease).',
        'Subclinical hypothyroidism: Treat if TSH > 10, or TSH 4.5-10 with symptoms, positive TPO antibodies, goiter, or pregnancy. Annual monitoring if untreated.',
        'Levothyroxine dosing: Full replacement ~1.6 mcg/kg/day. Start lower in elderly or coronary artery disease. Adjust by 12.5-25 mcg every 6-8 weeks based on TSH.',
        'Drug interactions: Calcium, iron, soy, coffee reduce absorption. Separate by 4 hours. PPIs may reduce absorption. Warfarin, phenytoin increase metabolism.',
        'Pregnancy: Levothyroxine requirement increases 20-50%. Target TSH <2.5 first trimester, <3.0 second and third. Critical for fetal neurodevelopment.',
        'Myxedema coma: Life-threatening decompensated hypothyroidism. Precipitated by infection, cold exposure, sedatives. Treated with IV levothyroxine + hydrocortisone.',
      ],

      normalVsAbnormal: {
        normal: 'TSH 0.4-4.0 mIU/L with free T4 in normal range. Steady energy, normal body temperature, healthy hair and skin, regular bowel movements, normal mood and cognition.',
        abnormal: 'Elevated TSH (>4.0-10 mIU/L in subclinical, >10 in overt) with low or low-normal free T4. Fatigue, cold intolerance, weight gain, constipation, dry skin, depression, cognitive slowing, bradycardia, elevated cholesterol.',
        whyItMatters: 'Untreated hypothyroidism causes cardiovascular disease (elevated LDL, diastolic hypertension), cognitive impairment, depression, infertility, and in severe cases, myxedema coma. Early detection and treatment prevent complications and restore quality of life.',
      },
    },

    // Level 4: Advanced
    4: {
      summary: `The pathophysiology of hypothyroidism encompasses disruption at multiple levels of the HPT axis. Hashimoto's thyroiditis involves genetic susceptibility (HLA-DR3, -DR5, CTLA-4, PTPN22) with environmental triggers initiating loss of immune tolerance. Thyroid peroxidase (TPO) antibodies mediate complement-dependent cytotoxicity and antibody-dependent cell-mediated cytotoxicity. Levothyroxine therapy provides exogenous T4, which must be converted to T3 by deiodinases. DIO2 polymorphisms (Thr92Ala) affect this conversion and may explain persistent symptoms in some euthyroid patients. Peripheral thyroid hormone action requires membrane transporters (MCT8, MCT10, OATP1C1) and nuclear receptors (TRα1, TRβ1, TRβ2).`,

      molecularMechanisms: [
        {
          pathway: 'Thyroid Hormone Synthesis',
          defect: 'In Hashimoto\'s, TPO antibodies inhibit organification; lymphocytic destruction reduces functional thyroid mass',
          consequence: 'Impaired iodide trapping, reduced T4/T3 synthesis, compensatory TSH elevation, eventual thyroid atrophy',
        },
        {
          pathway: 'Deiodinase Function',
          defect: 'DIO2 Thr92Ala polymorphism reduces D2 activity; selenium deficiency impairs all deiodinases',
          consequence: 'Reduced T4 to T3 conversion in tissues; higher levothyroxine dose requirements; tissue-specific hypothyroidism despite normal serum TSH',
        },
        {
          pathway: 'Thyroid Hormone Transport',
          defect: 'MCT8 mutations (Allan-Herndon-Dudley syndrome) prevent neuronal T3 uptake',
          consequence: 'Severe neurological impairment; high serum T3 does not reach target tissues; triac therapy under investigation',
        },
        {
          pathway: 'Thyroid Hormone Receptor Signaling',
          defect: 'THRβ mutations cause Resistance to Thyroid Hormone (RTH); THRα mutations cause selective tissue hypothyroidism',
          consequence: 'Impaired gene transcription; elevated T4/T3 with inappropriately normal/high TSH; variable clinical presentation',
        },
      ],

      pathways: [
        {
          name: 'Levothyroxine to Active T3',
          steps: [
            'Oral levothyroxine absorbed in jejunum/ileum (40-80% bioavailability)',
            'Binds to TBG, TBPA, and albumin in circulation (>99% bound)',
            'Free T4 enters cells via MCT8, MCT10 transporters',
            'Type 2 deiodinase (D2) removes outer ring iodine, converting T4 → T3',
            'Type 3 deiodinase (D3) converts T4 to inactive reverse T3 (rT3)',
            'T3 binds nuclear thyroid hormone receptors, regulating gene transcription',
          ],
          regulation: 'D2 activity is regulated by ubiquitination (WSB-1) - high T4 increases D2 degradation, protecting against hyperthyroidism',
        },
        {
          name: 'Hashimoto\'s Autoimmune Pathogenesis',
          steps: [
            'Genetic predisposition + environmental trigger (viral infection, iodine excess, pregnancy)',
            'Loss of immune tolerance to thyroid antigens (TPO, thyroglobulin)',
            'Infiltration of CD4+ T-cells, CD8+ cytotoxic T-cells, B-cells',
            'TPO antibodies cause complement fixation and ADCC',
            'Cytokine release (IFN-γ, TNF-α) perpetuates inflammation',
            'Progressive follicular cell destruction and fibrosis',
          ],
          regulation: 'Regulatory T-cells (Tregs) normally suppress autoreactivity; defects in Treg function contribute to autoimmune thyroid disease',
        },
      ],

      references: [
        'Bianco AC, et al. Biochemistry, cellular and molecular biology, and physiological roles of the iodothyronine selenodeiodinases. Endocr Rev. 2002;23(1):38-89.',
        'Mullur R, et al. Thyroid hormone regulation of metabolism. Physiol Rev. 2014;94(2):355-382.',
        'Panicker V, et al. Common variation in the DIO2 gene predicts baseline psychological well-being and response to combination thyroxine plus triiodothyronine therapy in hypothyroid patients. J Clin Endocrinol Metab. 2009;94(5):1623-1629.',
      ],
    },

    // Level 5: Expert
    5: {
      summary: `Contemporary thyroidology recognizes that serum TSH normalization with levothyroxine may not equate to euthyroidism in all tissues. The T3/T4 ratio in thyroidal secretion is physiologically higher than achieved with standard levothyroxine monotherapy. The DIO2 Thr92Ala polymorphism (present in ~12% of populations) impairs intracellular T3 generation, potentially explaining persistent symptoms despite biochemical euthyroidism. Combination T4/T3 therapy remains controversial - while the CONTINUED trial showed no general benefit, personalized approaches based on genetic profiling are being explored. Liquid levothyroxine formulations offer improved absorption in patients with malabsorption, coffee interference, or proton pump inhibitor use.`,

      researchFrontiers: [
        'Liquid levothyroxine: Better absorption, less food interaction; beneficial in malabsorption, bariatric surgery patients, and those with impaired gastric acid',
        'T3/T4 combination therapy: CONTINUED trial showed no general benefit; personalized approaches based on DIO2 genetics and phenotype being explored',
        'Thyroid hormone mimetics: Sobetirome (CNS-penetrant) for X-linked adrenoleukodystrophy; selective thyromimetics for dyslipidemia',
        'Immunotherapy-induced thyroiditis: Checkpoint inhibitors causing hypothyroidism; patterns of dysfunction vary by agent',
        'Intracellular thyroid hormone assessment: Urinary T3/T4 ratios as markers of tissue thyroid status',
        'Artificial intelligence: Machine learning algorithms predicting optimal levothyroxine dosing based on clinical and pharmacogenomic data',
      ],

      controversies: [
        {
          topic: 'TSH Target in Levothyroxine Therapy',
          perspectives: [
            'Traditional: Target TSH 0.5-4.0 or 0.5-2.5 mIU/L',
            'Age-adjusted: Higher TSH may be normal in elderly; overtreatment may be harmful',
            'Individual set-point: Each person has a genetically determined TSH set-point; deviation causes symptoms',
          ],
        },
        {
          topic: 'Combination T4/T3 Therapy',
          perspectives: [
            'Traditional view: Levothyroxine monotherapy sufficient; TSH normalized = euthyroid',
            'Dissident view: Some patients symptomatic despite normal TSH; DIO2 polymorphisms impair tissue T3; thyroid secretes T3 directly',
            'Evidence: RCTs generally negative for general population; potential subset of responders with specific genotypes',
          ],
        },
        {
          topic: 'Subclinical Hypothyroidism Treatment Threshold',
          perspectives: [
            'Conservative: Treat only if TSH > 10, or with specific risk factors',
            'Aggressive: Treat if TSH > 4 with symptoms or antibodies; target TSH 1-2',
            'Evidence: TRUST trial showed no symptomatic benefit in elderly; cardiovascular outcomes debated',
          ],
        },
      ],

      statisticalContext: `The DIO2 Thr92Ala polymorphism:
- Occurs in ~12% of the population (heterozygous or homozygous)
- Associated with insulin resistance, hypertension, psychological distress
- Meta-analysis shows modest association with depression in hypothyroid patients
- May require higher levothyroxine doses or benefit from T3 supplementation

Serum vs tissue thyroid status:
- Serum TSH reflects pituitary thyroid hormone status (regulated by D2)
- Peripheral tissues may have different thyroid status depending on local D2 activity
- This dissociation may explain "symptoms despite normal TSH"

Levothyroxine absorption variability:
- Coefficient of variation for same dose: 15-20%
- Food, coffee, calcium, iron significantly reduce absorption
- Liquid and soft-gel formulations may reduce variability`,

      references: [
        'Bianco AC, et al. The tissue-specific pattern of the T3/T4 ratio reflects the activity of the deiodinases. Endocrinology. 2002;143(6):2119-2122.',
        'Panicker V, et al. Heritability of serum TSH, free T4 and free T3 concentrations: a study of a large UK twin cohort. Clin Endocrinol (Oxf). 2008;68(4):652-659.',
        'Stott DJ, et al. Thyroid hormone therapy for older adults with subclinical hypothyroidism. N Engl J Med. 2017;376(26):2534-2544.',
        'Jonklaas J, et al. Guideline recommendations for hypothyroidism: A contrasting appraisal looking at the ATA, Endocrine Society, and AACE guidelines. Endocr Pract. 2023;29(1):65-78.',
      ],
    },

    // Level 6: Clinical
    6: {
      summary: `Clinical management of hypothyroidism requires systematic evaluation of the HPT axis, appropriate use of antibody testing, and individualized levothyroxine therapy. Primary hypothyroidism (elevated TSH, low T4) is most common and treated with levothyroxine replacement. Central hypothyroidism (low/normal TSH, low T4) requires investigation of pituitary/hypothalamic disease. Myxedema coma represents life-threatening decompensation requiring ICU-level care with IV levothyroxine and glucocorticoid coverage. Pregnancy demands trimester-specific TSH targets and typically 20-50% increased levothyroxine dosing. Drug interactions, malabsorption states, and patient adherence must be considered in refractory cases.`,

      clinicalApproach: [
        'Initial evaluation: TSH with reflex free T4 if abnormal. Add TPO antibodies to confirm Hashimoto\'s etiology. Consider central hypothyroidism if low/normal TSH with low T4.',
        'Subclinical hypothyroidism: Treat if TSH > 10, or if TSH 4.5-10 with symptoms, positive TPO antibodies, goiter, pregnancy, cardiovascular risk, or infertility.',
        'Levothyroxine initiation: Full replacement ~1.6 mcg/kg/day for young healthy patients. Start 25-50 mcg in elderly or CAD. Titrate every 6-8 weeks to TSH target.',
        'Pregnancy management: Preconception counseling, increase dose 20-30% when pregnancy confirmed, check TSH every 4 weeks first half, target trimester-specific ranges.',
        'Myxedema coma: IV levothyroxine 200-400 mcg loading then 50-100 mcg daily; IV liothyronine 10 mcg every 8-12 hours; hydrocortisone 50-100 mg IV q8h until adrenal insufficiency ruled out; supportive care in ICU.',
        'Refractory cases: Check adherence (pill count, prescription refill), timing with food/medications, malabsorption (celiac, H. pylori, atrophic gastritis), drug interactions, pregnancy, DIO2 polymorphisms.',
      ],

      differentialConsiderations: [
        'Hashimoto\'s thyroiditis: Most common cause. Positive TPO antibodies, may have goiter early, atrophic later. Associated with other autoimmune diseases.',
        'Iatrogenic hypothyroidism: Post-thyroidectomy, post-radioiodine, external beam radiation. Dose requirements vary by extent of residual tissue.',
        'Drug-induced: Amiodarone (Wolff-Chaikoff effect), lithium (inhibits hormone release), interferon-alpha, immune checkpoint inhibitors, tyrosine kinase inhibitors.',
        'Central hypothyroidism: Pituitary or hypothalamic disease. Low/normal TSH with low free T4. Check other pituitary hormones, MRI if indicated.',
        'Thyroid hormone resistance: Elevated T4/T3 with normal/elevated TSH. THRβ mutations. Differentiate from TSH-secreting adenoma by absence of alpha-subunit elevation.',
        'Non-thyroidal illness (sick euthyroid syndrome): Abnormal thyroid tests during acute illness; typically not treated with thyroid hormone.',
        'Subacute/chronic thyroiditis: Transient hypothyroid phase after hyperthyroid phase. May recover spontaneously; permanent hypothyroidism in 10-20%.',
      ],

      guidelines: [
        'Jonklaas J, et al. Guidelines for the treatment of hypothyroidism. Thyroid. 2014;24(12):1670-1751.',
        'Alexander EK, et al. 2017 Guidelines of the American Thyroid Association for the Diagnosis and Management of Thyroid Disease During Pregnancy and the Postpartum. Thyroid. 2017;27(3):315-389.',
        'Garber JR, et al. Clinical practice guidelines for hypothyroidism in adults: cosponsored by the American Association of Clinical Endocrinologists and the American Thyroid Association. Endocr Pract. 2012;18(6):988-1028.',
        'Brent GA. Hypothyroidism and thyroiditis. In: Williams Textbook of Endocrinology. 14th ed. Elsevier; 2020:404-432.',
      ],

      caseExamples: [
        {
          presentation: '32-year-old female, 8 weeks pregnant, history of Hashimoto\'s on levothyroxine 75 mcg daily. Pre-pregnancy TSH 1.8. Current TSH 4.2, free T4 0.9 ng/dL.',
          keyFindings: [
            'Elevated TSH in first trimester (target <2.5)',
            'Free T4 at lower end of normal',
            'Increased levothyroxine requirement in pregnancy',
          ],
          teachingPoints: [
            'Increase levothyroxine dose by 20-30% immediately (to ~100 mcg)',
            'Recheck TSH in 4 weeks; adjust to maintain TSH <2.5 first trimester',
            'Thyroid hormone critical for fetal neurodevelopment first trimester',
            'TSH should be checked every 4 weeks through mid-pregnancy',
            'Most patients return to pre-pregnancy dose after delivery',
          ],
        },
        {
          presentation: '68-year-old female found unresponsive at home. Temperature 90.2°F, HR 48, BP 82/50. History of hypothyroidism but stopped medications 2 months ago. Recent URI symptoms.',
          keyFindings: [
            'Hypothermia, bradycardia, hypotension',
            'History of hypothyroidism with medication non-adherence',
            'Precipitating illness (URI)',
            'Altered mental status',
          ],
          teachingPoints: [
            'Myxedema coma - life-threatening emergency with 30-60% mortality',
            'Start IV levothyroxine 200-400 mcg loading dose',
            'Give IV hydrocortisone 50-100 mg q8h until adrenal insufficiency excluded',
            'Consider IV liothyronine 10 mcg q8-12h if no response to T4',
            'Aggressive supportive care: warming (passive only), ventilatory support, treat precipitating cause',
            'ICU admission; mortality high even with optimal treatment',
          ],
        },
      ],

      references: [
        'Jonklaas J, et al. Guidelines for the treatment of hypothyroidism. Thyroid. 2014;24(12):1670-1751.',
        'Alexander EK, et al. 2017 Guidelines of the American Thyroid Association for the Diagnosis and Management of Thyroid Disease During Pregnancy and the Postpartum. Thyroid. 2017;27(3):315-389.',
        'Klubo-Gwiezdzinska J, Wartofsky L. Thyroid emergencies. Med Clin North Am. 2012;96(2):385-403.',
      ],
    },
  },

  // Interactive elements
  interactions: {
    anatomyPoints: [
      { structure: 'thyroid', focus: 'follicular-cells', description: 'Follicular cells produce T3 and T4; site of autoimmune attack in Hashimoto\'s' },
      { structure: 'pituitary', focus: 'anterior', description: 'Produces TSH which regulates thyroid function; D2 converts T4 to T3 here' },
      { structure: 'hypothalamus', focus: 'paraventricular-nucleus', description: 'Produces TRH that stimulates TSH release from pituitary' },
      { structure: 'heart', focus: 'myocardium', description: 'Thyroid hormone increases heart rate and contractility; hypothyroidism causes bradycardia' },
      { structure: 'brain', focus: 'cortex', description: 'Thyroid hormone essential for neurodevelopment and cognitive function; hypothyroidism causes depression and cognitive slowing' },
      { structure: 'skin', focus: 'dermis', description: 'Myxedema - accumulation of glycosaminoglycans causing non-pitting edema in severe hypothyroidism' },
    ],

    relatedLabs: [
      'tsh',
      'free-t4',
      'free-t3',
      'tpo-antibodies',
      'thyroglobulin-antibodies',
      'lipid-panel',
      'cbc',
      'comprehensive-metabolic-panel',
    ],

    relatedMedications: [
      'levothyroxine',
      'liothyronine',
      'desiccated-thyroid',
      'methimazole',
      'propylthiouracil',
    ],

    relatedConditions: [
      'hashimotos-thyroiditis',
      'subclinical-hypothyroidism',
      'myxedema-coma',
      'graves-disease',
      'postpartum-thyroiditis',
      'thyroid-nodules',
      'thyroid-cancer',
    ],
  },

  // Self-assessment
  quiz: {
    title: 'Test Your Understanding',
    questions: [
      {
        id: 'hypothyroid-q1',
        type: 'multiple-choice',
        complexity: 1,
        question: 'What is the main problem in hypothyroidism?',
        options: [
          'The thyroid makes too much hormone',
          'The thyroid doesn\'t make enough hormone',
          'The pituitary gland is overactive',
          'The body has too much iodine',
        ],
        correctAnswer: 1,
        explanation: 'Hypothyroidism is a condition where the thyroid gland does not produce enough thyroid hormone, causing the body\'s metabolism to slow down.',
      },
      {
        id: 'hypothyroid-q2',
        type: 'multiple-choice',
        complexity: 2,
        question: 'What is the difference between subclinical and overt hypothyroidism?',
        options: [
          'Subclinical has no symptoms; overt has severe symptoms',
          'Subclinical has elevated TSH with normal T4; overt has elevated TSH with low T4',
          'Subclinical is temporary; overt is permanent',
          'Subclinical is caused by infection; overt is autoimmune',
        ],
        correctAnswer: 1,
        explanation: 'Subclinical hypothyroidism is defined as elevated TSH with normal free T4. Overt hypothyroidism has both elevated TSH and low free T4, with more pronounced symptoms.',
      },
      {
        id: 'hypothyroid-q3',
        type: 'multiple-choice',
        complexity: 3,
        question: 'Which enzyme converts T4 to the more active T3 in peripheral tissues?',
        options: [
          'Thyroid peroxidase (TPO)',
          'Deiodinase type 2 (D2)',
          'Thyroglobulin',
          'Thyroid stimulating hormone (TSH)',
        ],
        correctAnswer: 1,
        explanation: 'Deiodinase type 2 (D2) converts the prohormone T4 to the active T3 in peripheral tissues. This conversion is critical for local tissue thyroid hormone regulation.',
      },
      {
        id: 'hypothyroid-q4',
        type: 'multiple-choice',
        complexity: 4,
        question: 'What is the significance of the DIO2 Thr92Ala polymorphism in hypothyroid patients on levothyroxine?',
        options: [
          'It increases risk of thyroid cancer',
          'It reduces T4 to T3 conversion and may cause persistent symptoms despite normal TSH',
          'It causes Graves\' disease',
          'It has no clinical significance',
        ],
        correctAnswer: 1,
        explanation: 'The DIO2 Thr92Ala polymorphism reduces deiodinase 2 activity, impairing T4 to T3 conversion in tissues. This may explain why some patients have persistent symptoms despite normal serum TSH on levothyroxine therapy.',
      },
      {
        id: 'hypothyroid-q5',
        type: 'multiple-choice',
        complexity: 6,
        question: 'A 28-year-old female with known Hashimoto\'s thyroiditis is 6 weeks pregnant. She takes levothyroxine 88 mcg daily. Her pre-pregnancy TSH was 1.5. What is the most appropriate management?',
        options: [
          'Continue current dose; TSH will not change in pregnancy',
          'Increase levothyroxine by 20-30% now and recheck TSH in 4 weeks',
          'Stop levothyroxine until after delivery',
          'Switch to desiccated thyroid extract',
        ],
        correctAnswer: 1,
        explanation: 'Levothyroxine requirements increase by 20-50% in pregnancy due to increased metabolism, increased TBG, and placental transfer. The dose should be increased immediately upon confirmation of pregnancy, with TSH monitored every 4 weeks through mid-pregnancy to maintain trimester-specific targets.',
      },
    ],
    passingScore: 80,
  },

  // References
  references: [
    {
      citation: 'Jonklaas J, et al. Guidelines for the treatment of hypothyroidism. Thyroid. 2014;24(12):1670-1751.',
      doi: '10.1089/thy.2014.0028',
    },
    {
      citation: 'Alexander EK, et al. 2017 Guidelines of the American Thyroid Association for the Diagnosis and Management of Thyroid Disease During Pregnancy and the Postpartum. Thyroid. 2017;27(3):315-389.',
      doi: '10.1089/thy.2016.0457',
    },
    {
      citation: 'Garber JR, et al. Clinical practice guidelines for hypothyroidism in adults: cosponsored by the American Association of Clinical Endocrinologists and the American Thyroid Association. Endocr Pract. 2012;18(6):988-1028.',
      doi: '10.4158/EP12280.GL',
    },
    {
      citation: 'Bianco AC, et al. The deiodinases are not garbage cans. Endocrinology. 2006;147(11):5014-5016.',
      doi: '10.1210/en.2006-0908',
    },
    {
      citation: 'Brent GA. Hypothyroidism and thyroiditis. In: Williams Textbook of Endocrinology. 14th ed. Elsevier; 2020:404-432.',
    },
  ],

  resources: [
    {
      title: 'American Thyroid Association Patient Resources',
      type: 'website',
      url: 'https://www.thyroid.org/patient-education/',
      description: 'Comprehensive patient education materials on thyroid disorders',
    },
    {
      title: 'Hypothyroidism (MedlinePlus)',
      type: 'website',
      url: 'https://medlineplus.gov/hypothyroidism.html',
      description: 'Trusted health information from the National Library of Medicine',
    },
  ],
};

export default hypothyroidismModule;
