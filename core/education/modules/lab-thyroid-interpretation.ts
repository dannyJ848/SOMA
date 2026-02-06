/**
 * Lab Thyroid Interpretation Educational Module
 * 
 * Comprehensive guide to interpreting thyroid function tests and understanding
 * thyroid disorders from foundation to clinical level.
 */

import type { EducationalModule } from '../../types.js';

export const labThyroidInterpretationModule: EducationalModule = {
  id: 'lab-thyroid-interpretation',
  type: 'clinical-application',
  specialty: 'endocrinology',

  title: 'Lab Thyroid Interpretation: From TSH to Clinical Decision-Making',
  description: 'Master thyroid function test interpretation including TSH, T3, T4, FT3, FT4, thyroid antibodies (TPO, Tg), and TRAb. Learn to distinguish hypothyroidism, hyperthyroidism, and subclinical patterns with clinical scenarios.',
  version: '1.0.0',
  lastUpdated: '2026-02-06',
  author: 'Biological Self Medical Education Team',

  prerequisites: [
    'endocrine-system-basics',
    'hormone-feedback-loops',
  ],

  learningObjectives: [
    'Interpret TSH, FT4, FT3, and understand the hypothalamic-pituitary-thyroid axis',
    'Distinguish between hypothyroidism, hyperthyroidism, and euthyroid states',
    'Recognize and manage subclinical thyroid disease patterns',
    'Understand the clinical significance of TPO, Tg, and TRAb antibodies',
    'Apply thyroid testing knowledge to real-world clinical scenarios',
  ],

  estimatedTime: {
    1: '12 minutes',
    2: '18 minutes',
    3: '28 minutes',
    4: '40 minutes',
    5: '55 minutes',
    6: '75 minutes',
  },

  content: {
    // Level 1: Foundation
    1: {
      summary: `Your thyroid is a small butterfly-shaped gland in your neck that works like your body's thermostat. It makes hormones that control how fast or slow everything runs—your metabolism. When doctors check your thyroid, they look at several blood tests: TSH (the signal from your brain), T3 and T4 (the actual thyroid hormones), and sometimes antibodies (signs of immune system attack). Think of TSH like a thermostat setting—if it's high, your body is asking for more heat (hypothyroidism). If it's low, your body is telling the furnace to cool down (hyperthyroidism).`,

      analogy: `Imagine your body is a house and your thyroid is the furnace:

🌡️ THE THERMOSTAT (TSH from your brain)
- Checks the temperature and sends signals
- High setting = house is too cold (not enough heat)
- Low setting = house is too hot (too much heat)

🔥 THE FURNACE (Your thyroid gland)
- Produces heat (hormones T3 and T4)
- Can be broken (hypothyroidism = not enough heat)
- Can be overactive (hyperthyroidism = too much heat)

🛡️ THE SECURITY SYSTEM (Antibodies)
- TPO antibodies = Security system attacking the furnace
- Means your body is mistakenly damaging your thyroid

A normal, comfortable house has the thermostat in the middle, the furnace working just right, and no security problems.`,

      keyPoints: [
        'TSH is the signal from your brain that tells your thyroid to work',
        'High TSH usually means your thyroid is underactive (hypothyroidism)',
        'Low TSH usually means your thyroid is overactive (hyperthyroidism)',
        'T3 and T4 are the actual thyroid hormones that control your energy',
        'Antibodies (TPO, Tg) show if your immune system is attacking your thyroid',
        'Hypothyroidism makes you feel tired, cold, and gain weight',
        'Hyperthyroidism makes you feel anxious, hot, and lose weight',
      ],

      visualAid: 'thyroid-thermostat-analogy-diagram',
    },

    // Level 2: Developing
    2: {
      summary: `Thyroid function tests measure several important markers. TSH (Thyroid Stimulating Hormone) is produced by the pituitary gland and is the most sensitive test for thyroid problems—it goes up when your thyroid is underactive and down when it's overactive. T4 (thyroxine) is the main hormone your thyroid makes. Free T4 (FT4) is the active, unbound portion that your body can actually use. T3 (triiodothyronine) is the more active hormone, mostly converted from T4 in your tissues. Free T3 (FT3) measures the active form. Thyroid antibodies include TPO antibodies (against thyroid peroxidase) and thyroglobulin antibodies (Tg), which indicate autoimmune thyroid disease.`,

      keyConcepts: [
        {
          term: 'TSH (Thyroid Stimulating Hormone)',
          explanation: 'Made by the pituitary gland. The most sensitive test—rises when thyroid is underactive, falls when overactive. Normal range is roughly 0.4 to 4.0 mIU/L.',
        },
        {
          term: 'Free T4 (FT4)',
          explanation: 'The unbound, active form of thyroxine. Measures how much hormone is actually available to your cells. Normal range approximately 0.8 to 1.8 ng/dL.',
        },
        {
          term: 'Free T3 (FT3)',
          explanation: 'The more active thyroid hormone. Some is made by the thyroid, but most is converted from T4 in tissues. Normal range approximately 2.3 to 4.2 pg/mL.',
        },
        {
          term: 'TPO Antibodies',
          explanation: 'Antibodies against thyroid peroxidase, an enzyme needed to make thyroid hormones. Positive in Hashimoto\'s thyroiditis (most common cause of hypothyroidism).',
        },
        {
          term: 'Thyroglobulin Antibodies (TgAb)',
          explanation: 'Antibodies against thyroglobulin, the protein that stores thyroid hormone. Also seen in Hashimoto\'s disease.',
        },
        {
          term: 'TRAb (TSH Receptor Antibodies)',
          explanation: 'Antibodies that stimulate the TSH receptor, causing Graves\' disease (hyperthyroidism). Can be blocking or stimulating.',
        },
      ],

      keyPoints: [
        'TSH is usually the first and best test to screen for thyroid problems',
        'High TSH + Low FT4 = Primary hypothyroidism (thyroid gland problem)',
        'Low TSH + High FT4 = Hyperthyroidism (too much thyroid hormone)',
        'TPO antibodies positive = Autoimmune thyroiditis (Hashimoto\'s disease)',
        'TRAb positive = Graves\' disease (cause of hyperthyroidism)',
        'Subclinical hypothyroidism: High TSH with normal FT4 (mild underactivity)',
        'Subclinical hyperthyroidism: Low TSH with normal FT4 (mild overactivity)',
      ],

      howItWorks: `THE THYROID CONTROL SYSTEM:

1. HYPOTHALAMUS (brain region) monitors hormone levels
2. Releases TRH (Thyrotropin Releasing Hormone)
3. TRH signals PITUITARY GLAND to release TSH
4. TSH travels through blood to THYROID GLAND
5. Thyroid produces T4 and some T3
6. T4 is converted to active T3 in body tissues
7. T3 enters cells and controls metabolism
8. When levels are adequate, T3/T4 signal back to reduce TSH (negative feedback loop)`,
    },

    // Level 3: Standard
    3: {
      summary: `The hypothalamic-pituitary-thyroid (HPT) axis maintains thyroid hormone homeostasis through negative feedback. TSH has a log-linear relationship with free T4—a small change in FT4 produces a large inverse change in TSH, making TSH the most sensitive indicator of thyroid dysfunction. Primary thyroid disease affects the gland itself (Hashimoto's, Graves', toxic nodules). Secondary disease involves pituitary dysfunction (rare). Tertiary disease involves hypothalamic dysfunction (very rare). Antibody testing helps identify etiology: TPO and thyroglobulin antibodies for autoimmune hypothyroidism, TSH receptor antibodies (TRAb) for Graves' disease. Subclinical disease refers to abnormal TSH with normal free T4/T3.`,

      mechanisms: [
        {
          name: 'HPT Axis Negative Feedback',
          description: 'Thyroid hormones inhibit TRH and TSH secretion at hypothalamus and pituitary. The log-linear relationship means TSH changes logarithmically for linear changes in FT4.',
        },
        {
          name: 'Thyroid Hormone Synthesis',
          description: 'Iodine trapping by NIS, organification by thyroid peroxidase (TPO), coupling to form T3 and T4 on thyroglobulin, storage as colloid, then release upon TSH stimulation.',
        },
        {
          name: 'Peripheral Conversion',
          description: 'T4 (prohormone) is converted to active T3 by deiodinase enzymes (D1, D2) in liver, kidney, and other tissues. D3 converts T4 to inactive reverse T3.',
        },
        {
          name: 'Autoimmune Thyroid Disease',
          description: 'TPO and thyroglobulin antibodies mark Hashimoto\'s thyroiditis. TSH receptor stimulating antibodies (TSI) cause Graves\' hyperthyroidism. Blocking antibodies can cause hypothyroidism.',
        },
      ],

      clinicalCorrelates: [
        'Hashimoto\'s thyroiditis: Most common hypothyroidism. High TSH, low FT4, positive TPO antibodies. Lymphocytic infiltration destroys thyroid over time.',
        'Graves\' disease: Most common hyperthyroidism. Low TSH, high FT4/FT3, positive TRAb. Associated with ophthalmopathy and pretibial myxedema.',
        'Subclinical hypothyroidism (TSH 4.5-10, normal FT4): Treat if symptomatic, TPO positive, pregnancy planned, or cardiovascular risk factors.',
        'Subclinical hyperthyroidism (TSH 0.1-0.4, normal FT4): Increases atrial fibrillation and osteoporosis risk. Treat if TSH < 0.1 or high-risk patients.',
        'Sick euthyroid syndrome: Abnormal thyroid tests during acute illness; usually adaptive response, not true thyroid dysfunction.',
        'Medication effects: Amiodarone can cause hypo or hyperthyroidism; lithium commonly causes hypothyroidism; glucocorticoids suppress TSH.',
      ],

      normalVsAbnormal: {
        normal: 'TSH 0.4-4.0 mIU/L with FT4 0.8-1.8 ng/dL and FT3 2.3-4.2 pg/mL. Negative thyroid antibodies. Optimal metabolism without symptoms.',
        abnormal: 'TSH elevated with low FT4/FT3 (hypothyroidism), or TSH suppressed with elevated FT4/FT3 (hyperthyroidism). Antibodies may indicate autoimmune etiology.',
        whyItMatters: 'Thyroid dysfunction affects cardiovascular, neurological, reproductive, and metabolic systems. Untreated hypothyroidism causes heart disease, cognitive impairment, and metabolic syndrome. Untreated hyperthyroidism causes atrial fibrillation, osteoporosis, and thyroid storm.',
      },
    },

    // Level 4: Advanced
    4: {
      summary: `Thyroid hormone action occurs via nuclear thyroid hormone receptors (TRα and TRβ) that function as ligand-activated transcription factors. T3 has 10-fold higher affinity than T4 for these receptors. Deiodinases regulate local T3 availability: D1 in liver/kidney, D2 in brain/pituitary/brown fat (critical for intracellular T3), D3 in placenta/brain/skin (inactivates T4 to reverse T3). The T3/T4 secretion ratio is approximately 1:10, but D2 conversion significantly increases tissue T3. Thyroid hormone transporters (MCT8, MCT10, OATP1C1) enable cellular uptake—MCT8 deficiency causes Allan-Herndon-Dudley syndrome. Binding proteins (TBG, transthyretin, albumin) affect total hormone levels but free hormone remains constant.`,

      molecularMechanisms: [
        {
          pathway: 'Thyroid Hormone Receptor Signaling',
          defect: 'THRβ mutations cause Resistance to Thyroid Hormone (RTH); THRα mutations cause isolated peripheral hypothyroidism with normal serum tests',
          consequence: 'Impaired gene transcription affecting metabolism, cardiac function, bone development, and CNS myelination',
        },
        {
          pathway: 'Deiodinase Regulation',
          defect: 'DIO2 Thr92Ala polymorphism reduces D2 activity; selenium deficiency impairs all deiodinases; D2 upregulated in hypothyroidism',
          consequence: 'Reduced T4 to T3 conversion in tissues; may explain persistent symptoms despite "adequate" levothyroxine therapy',
        },
        {
          pathway: 'Thyroid Hormone Transport',
          defect: 'MCT8 deficiency (X-linked); mutations in SLC16A2',
          consequence: 'Allan-Herndon-Dudley syndrome: severe intellectual disability, hypotonia, elevated serum T3 due to impaired uptake',
        },
        {
          pathway: 'Thyroid Autoimmunity Genetics',
          defect: 'HLA associations (DR3, DR5, CTLA-4, PTPN22 polymorphisms); loss of immune tolerance',
          consequence: 'T-cell mediated destruction (Hashimoto\'s) or antibody-mediated stimulation (Graves\'); shared genetic susceptibility with other autoimmune diseases',
        },
      ],

      pathways: [
        {
          name: 'Thyroid Hormone Synthesis and Release',
          steps: [
            'Iodide trapping via NIS (sodium-iodide symporter) on basolateral membrane',
            'Organification: TPO oxidizes iodide and iodinates tyrosine residues on thyroglobulin',
            'Coupling: TPO couples MIT and DIT to form T3 and T4 on thyroglobulin',
            'Storage: Thyroglobulin with bound hormones stored as colloid in follicles',
            'Endocytosis: TSH stimulates uptake of colloid droplets',
            'Proteolysis: Lysosomal enzymes release free T4 and T3',
            'Secretion: T4 and T3 enter circulation (ratio ~10:1)',
          ],
          regulation: 'TSH via cAMP pathway stimulates iodide uptake, hormone synthesis, and release. Iodine availability modulates hormone synthesis.',
        },
        {
          name: 'Thyroid Hormone Cellular Action',
          steps: [
            'T4 and T3 enter cells via MCT8, MCT10, OATP1C1 transporters',
            'D2 converts T4 to T3 in target tissues; D3 inactivates to reverse T3',
            'T3 binds nuclear thyroid hormone receptors (TR) forming heterodimers with RXR',
            'TR-T3 complex binds thyroid response elements (TRE) on DNA',
            'Recruits coactivators or corepressors to modulate transcription',
            'Target genes include myosin heavy chain, SERCA2, UCPs, BMR regulators',
          ],
          regulation: 'Tissue-specific deiodinase expression allows local thyroid hormone regulation independent of serum levels.',
        },
      ],

      references: [
        'Bianco AC, et al. The deiodinases are not garbage cans. Endocrinology. 2006;147(11):5014-5016.',
        'Mullur R, et al. Thyroid hormone regulation of metabolism. Physiol Rev. 2014;94(2):355-382.',
        'Visser WE, et al. Thyroid hormone transport by monocarboxylate transporters. Best Pract Res Clin Endocrinol Metab. 2007;21(2):223-236.',
      ],
    },

    // Level 5: Expert
    5: {
      summary: `Contemporary thyroidology emphasizes tissue-specific thyroid hormone action and limitations of serum TSH as a proxy for intracellular T3 status. The T3/T4 combination therapy debate reflects this—patients with DIO2 polymorphisms may have reduced peripheral T4-to-T3 conversion and could potentially benefit from liothyronine supplementation despite normal serum TSH. The "thyroid allostasis in critical illness" (TACIT) paradigm recognizes non-thyroidal illness syndrome (NTIS) as potentially adaptive. Liquid levothyroxine formulations show improved absorption with less food interaction. Thyroid hormone mimetics (sobetirome, VK2809) targeting specific tissues are in development. Genetic testing for DIO2 variants may guide personalized therapy in the future.`,

      researchFrontiers: [
        'Thyroid hormone mimetics: Tissue-selective thyromimetics (eaglet thyromimetics for cholesterol, sobetirome for CNS) in clinical trials',
        'Liquid levothyroxine formulations: Improved bioavailability, less interference from coffee, food, and PPIs; beneficial in malabsorption',
        'T3/T4 combination therapy: CONTINUED trial showed no general benefit; ongoing research on DIO2 genotype-guided therapy',
        'Immunotherapy-related thyroid dysfunction: Checkpoint inhibitors causing thyroiditis—hypothyroidism common, hyperthyroidism less common but severe',
        'Liquid chromatography-tandem mass spectrometry (LC-MS/MS): Gold standard for hormone measurement, replacing immunoassays',
        'AI and machine learning: Algorithms predicting levothyroxine dose and identifying thyroid nodule malignancy',
      ],

      controversies: [
        {
          topic: 'Optimal TSH Target Range',
          perspectives: [
            'Traditional: 0.4-4.0 or 0.5-5.0 mIU/L based on population distributions',
            'Proposed narrow range: 0.3-2.5 based on log-Gaussian distribution in healthy populations without thyroid disease',
            'Age-adjusted: Upper limit increases with age; aggressive treatment of elderly may be harmful',
            'Individual set-point: Each person has genetically determined optimal TSH; variation of 0.5-1.0 may be significant',
          ],
        },
        {
          topic: 'Combination T4/T3 Therapy',
          perspectives: [
            'Standard: Levothyroxine monotherapy is sufficient for vast majority',
            'Dissident: Some patients symptomatic despite normal TSH; tissue T3 may be inadequate',
            'Genetic subgroup: DIO2 polymorphism carriers may benefit from T3 supplementation',
            'Evidence: Meta-analyses show no consistent benefit; need for personalized approaches',
          ],
        },
        {
          topic: 'Desiccated Thyroid Extract',
          perspectives: [
            'Advocates: More "natural," contains T3, some patients prefer',
            'Opponents: Variable hormone content, difficult to titrate, not recommended by guidelines',
            'Evidence: No RCTs showing superiority to levothyroxine',
          ],
        },
      ],

      statisticalContext: `The log-linear TSH-FT4 relationship has clinical implications:
- For any TSH value, FT4 can vary 2-fold (e.g., TSH 2.0 can correspond to FT4 1.0 or 2.0 ng/dL)
- Individual set-points vary genetically; some patients feel best at TSH 1.0, others at 2.5
- The TSH distribution is right-skewed; median is ~1.5, but upper limit often set at 4.0-5.0

DIO2 genetics:
- Thr92Ala polymorphism in ~12% of population
- Associated with insulin resistance, psychological distress, hypertension
- May require higher levothyroxine doses or benefit from combination therapy
- Currently not standard to test, but may guide therapy in refractory cases`,

      references: [
        'Bianco AC, et al. The tissue-specific pattern of the T3/T4 ratio reflects the activity of the deiodinases. Endocrinology. 2002;143(6):2119-2122.',
        'Panicker V, et al. Heritability of serum TSH, free T4 and free T3 concentrations. Clin Endocrinol (Oxf). 2008;68(4):652-659.',
        'Stott DJ, et al. Thyroid hormone therapy for older adults with subclinical hypothyroidism. N Engl J Med. 2017;376(26):2534-2544.',
        'Jonklaas J, et al. Guidelines for the treatment of hypothyroidism. Thyroid. 2014;24(12):1670-1751.',
      ],
    },

    // Level 6: Clinical
    6: {
      summary: `Clinical thyroid management requires systematic evaluation of the HPT axis, judicious use of antibody testing, and individualized treatment. For hypothyroidism, levothyroxine is first-line with TSH target 0.5-2.5 (or 1-2 in pregnancy). In pregnancy, TSH targets are trimester-specific and levothyroxine needs increase 20-50%. For hyperthyroidism, etiology determines treatment: Graves' disease (methimazole first-line, consider radioiodine or surgery); toxic nodules (radioiodine or surgery preferred); thyroiditis (symptomatic treatment only). TRAb measurement guides Graves' diagnosis and pregnancy management (high levels predict neonatal hyperthyroidism). Thyroid nodules require ultrasound risk stratification (ACR TI-RADS) and FNA based on size/features. Thyroid cancer management involves surgery, radioiodine for intermediate/high risk, and TSH suppression therapy.`,

      clinicalApproach: [
        'Initial evaluation: TSH with reflex FT4 if abnormal. Add TPO antibodies if hypothyroid. Add TRAb if hyperthyroid with diffuse goiter.',
        'Subclinical hypothyroidism: Treat if TSH > 10, or if TSH 4.5-10 with symptoms, positive TPO, goiter, pregnancy desire, or cardiovascular disease.',
        'Subclinical hyperthyroidism: Treat if TSH < 0.1, or if TSH 0.1-0.4 with age > 65, osteoporosis, atrial fibrillation, or cardiac disease.',
        'Levothyroxine dosing: Weight-based 1.6 mcg/kg for full replacement; reduce by 25% if elderly or coronary disease; increase 20-50% immediately upon pregnancy confirmation.',
        'Hyperthyroidism workup: RAIU scan distinguishes Graves\' (diffuse high uptake) from thyroiditis (low uptake); helpful if etiology unclear.',
        'Nodule evaluation: Ultrasound with TI-RADS scoring; FNA for TR5 > 1cm, TR4 > 1.5cm, TR3 > 2.5cm.',
        'Pregnancy: First trimester TSH upper limit ~2.5, second ~3.0, third ~3.5. Check TSH every 4 weeks first half of pregnancy.',
      ],

      differentialConsiderations: [
        'Hashimoto\'s thyroiditis: Most common hypothyroidism. High TSH, low FT4, positive TPO antibodies. May have transient hyperthyroid phase (hashitoxicosis).',
        'Graves\' disease: Diffuse goiter, ophthalmopathy, dermopathy. Low TSH, high FT4/FT3, positive TRAb. Elevated RAIU with diffuse uptake.',
        'Toxic multinodular goiter: Multiple autonomous nodules. Patchy RAIU. More common in elderly, iodine-deficient areas. Subacute onset.',
        'Toxic adenoma: Single autonomous nodule. Focal increased RAIU. "Hot nodule" suppresses surrounding tissue.',
        'Subacute (de Quervain) thyroiditis: Painful thyroid, elevated ESR, transient hyperthyroidism then hypothyroidism. Low RAIU. Post-viral.',
        'Painless/silent thyroiditis: Postpartum or autoimmune. Transient hyperthyroidism phase. May be confused with Graves\'.',
        'Drug-induced: Amiodarone (hypo or hyper), lithium (hypo common), interferon (thyroiditis), immune checkpoint inhibitors.',
        'Central hypothyroidism: Pituitary/hypothalamic disease. Low/normal TSH with low FT4. Other pituitary deficits usually present.',
        'TSH-secreting adenoma: Elevated TSH with elevated FT4. Rare. Differentiate from thyroid hormone resistance by alpha-subunit elevation.',
      ],

      guidelines: [
        'Jonklaas J, et al. Guidelines for the treatment of hypothyroidism. Thyroid. 2014;24(12):1670-1751.',
        'Ross DS, et al. 2016 American Thyroid Association Guidelines for Diagnosis and Management of Hyperthyroidism. Thyroid. 2016;26(10):1343-1421.',
        'Alexander EK, et al. 2017 ATA Guidelines for Thyroid Disease During Pregnancy and the Postpartum. Thyroid. 2017;27(3):315-389.',
        'Haugen BR, et al. 2015 ATA Management Guidelines for Adult Patients with Thyroid Nodules and Differentiated Thyroid Cancer. Thyroid. 2016;26(1):1-133.',
        'Tessler FN, et al. ACR Thyroid Imaging, Reporting and Data System (TI-RADS). J Am Coll Radiol. 2017;14(5):587-595.',
      ],

      caseExamples: [
        {
          presentation: '42-year-old female, fatigue, constipation, dry skin, 8 lb weight gain over 6 months. TSH 12.5 mIU/L (elevated), FT4 0.7 ng/dL (low-normal), TPO antibodies 650 IU/mL (positive).',
          keyFindings: [
            'Elevated TSH with low-normal FT4',
            'Positive TPO antibodies at high titer',
            'Symptoms consistent with hypothyroidism',
            'No thyroid tenderness (argues against thyroiditis)',
          ],
          teachingPoints: [
            'Primary hypothyroidism with autoimmune etiology (Hashimoto\'s thyroiditis)',
            'Start levothyroxine 75-100 mcg daily (based on weight ~1.6 mcg/kg)',
            'Recheck TSH in 6-8 weeks; target TSH 0.5-2.5',
            'Patient education: Take on empty stomach 30-60 min before breakfast; separate from calcium/iron by 4 hours',
            'Positive TPO antibodies predict ongoing autoimmune destruction; monitor annually even if controlled',
          ],
        },
        {
          presentation: '32-year-old female, 3 months postpartum, presents with palpitations, anxiety, heat intolerance, 5 lb weight loss. TSH 0.01 mIU/L (suppressed), FT4 2.8 ng/dL (elevated), FT3 5.8 pg/mL (elevated). Thyroid not tender. No eye symptoms.',
          keyFindings: [
            'Suppressed TSH with elevated FT4 and FT3',
            'Postpartum timing suggests painless/postpartum thyroiditis',
            'Absence of eye disease argues against Graves\' disease',
            'Non-tender thyroid distinguishes from subacute thyroiditis',
          ],
          teachingPoints: [
            'Postpartum thyroiditis: transient hyperthyroid phase followed by hypothyroid phase',
            'Differentiate from Graves\': TRAb negative in thyroiditis; RAIU contraindicated if breastfeeding but would be low in thyroiditis',
            'Treatment: Beta-blocker (propranolol 20-40mg TID) for symptom control; antithyroid drugs NOT indicated (destructive, not overproduction)',
            'Monitor for hypothyroid phase in 2-4 months; may need temporary levothyroxine',
            'Recurrence risk in subsequent pregnancies; increased risk of permanent hypothyroidism',
          ],
        },
      ],

      references: [
        'Brent GA. Hypothyroidism and thyroiditis. In: Williams Textbook of Endocrinology. 14th ed. Elsevier; 2020:404-432.',
        'Davies TF, et al. Thyroid storm. J Clin Endocrinol Metab. 2020;105(9):e3874-e3882.',
        'Haugen BR, et al. 2015 American Thyroid Association Management Guidelines. Thyroid. 2016;26(1):1-133.',
        'De Leo S, et al. Hyperthyroidism. Lancet. 2016;388(10047):906-918.',
      ],
    },
  },

  interactions: {
    anatomyPoints: [
      { structure: 'thyroid', focus: 'follicular-cells', description: 'Produce T3 and T4; site of autoimmune attack in Hashimoto\'s' },
      { structure: 'pituitary', focus: 'anterior', description: 'Produces TSH which regulates thyroid hormone production' },
      { structure: 'hypothalamus', focus: 'paraventricular-nucleus', description: 'Produces TRH that stimulates TSH release from pituitary' },
      { structure: 'heart', focus: 'myocardium', description: 'Thyroid hormone increases heart rate and contractility; excess causes atrial fibrillation' },
      { structure: 'brain', focus: 'cortex', description: 'Thyroid hormone essential for neurodevelopment and cognitive function' },
      { structure: 'bone', focus: 'osteoclasts', description: 'Hyperthyroidism increases bone turnover and osteoporosis risk' },
    ],

    relatedLabs: [
      'tsh',
      'free-t4',
      'free-t3',
      'tpo-antibodies',
      'thyroglobulin-antibodies',
      'tsh-receptor-antibodies',
      'thyroglobulin',
      'rai-uptake-scan',
      'thyroid-ultrasound',
      'reverse-t3',
    ],

    relatedMedications: [
      'levothyroxine',
      'liothyronine',
      'methimazole',
      'propylthiouracil',
      'propranolol',
      'radioactive-iodine',
      'potassium-iodide',
    ],

    relatedConditions: [
      'hashimotos-thyroiditis',
      'graves-disease',
      'subclinical-hypothyroidism',
      'subclinical-hyperthyroidism',
      'postpartum-thyroiditis',
      'de-quervains-thyroiditis',
      'toxic-nodular-goiter',
      'thyroid-nodules',
      'thyroid-cancer',
    ],
  },

  quiz: {
    title: 'Thyroid Interpretation Clinical Scenarios',
    questions: [
      {
        id: 'thyroid-scenario-1',
        type: 'case-study',
        complexity: 3,
        question: 'Clinical Scenario: A 35-year-old woman presents with fatigue, weight gain, and cold intolerance. Her lab results show: TSH 8.2 mIU/L (reference: 0.4-4.0), Free T4 0.9 ng/dL (reference: 0.8-1.8), TPO antibodies positive at 450 IU/mL. What is the most likely diagnosis and appropriate management?',
        options: [
          'Graves\' disease; start methimazole immediately',
          'Subclinical hypothyroidism due to Hashimoto\'s thyroiditis; treat with levothyroxine',
          'Primary hyperthyroidism; refer for radioactive iodine ablation',
          'Central hypothyroidism; order pituitary MRI',
        ],
        correctAnswer: 1,
        explanation: 'This patient has subclinical hypothyroidism (elevated TSH with normal FT4) with positive TPO antibodies, indicating Hashimoto\'s thyroiditis. The presence of symptoms and positive antibodies warrants treatment with levothyroxine. Target TSH should be 0.5-2.5 mIU/L.',
        hint: 'Look at the pattern: High TSH + normal FT4 = subclinical hypothyroidism. Positive TPO antibodies indicate autoimmune etiology.',
      },
      {
        id: 'thyroid-scenario-2',
        type: 'case-study',
        complexity: 4,
        question: 'Clinical Scenario: A 28-year-old woman at 10 weeks gestation has a routine prenatal thyroid screen. Results: TSH 4.8 mIU/L, Free T4 1.1 ng/dL. She reports mild fatigue but no other symptoms. What is the appropriate management?',
        options: [
          'This is normal in pregnancy; no treatment needed',
          'Start levothyroxine immediately; target TSH <2.5 in first trimester',
          'Recheck TSH in 6 months after delivery',
          'Order thyroid ultrasound to evaluate for nodules',
        ],
        correctAnswer: 1,
        explanation: 'In pregnancy, the TSH upper limit is lower—approximately 2.5 mIU/L in the first trimester. A TSH of 4.8 with symptoms warrants treatment with levothyroxine. The dose should be increased by 20-50% immediately, and TSH should be monitored every 4 weeks during the first half of pregnancy.',
        hint: 'Pregnancy changes thyroid hormone requirements and reference ranges. First trimester TSH upper limit is lower than standard ranges.',
      },
      {
        id: 'thyroid-scenario-3',
        type: 'case-study',
        complexity: 5,
        question: 'Clinical Scenario: A 52-year-old man presents with palpitations, tremor, and 12 lb weight loss over 2 months. Labs: TSH <0.01 mIU/L, FT4 3.5 ng/dL, FT3 6.2 pg/mL, TRAb positive. He has a diffuse goiter but no eye symptoms. What is the diagnosis and first-line treatment?',
        options: [
          'Toxic multinodular goiter; treat with radioactive iodine',
          'Subacute thyroiditis; treat with NSAIDs and beta-blocker only',
          'Graves\' disease; start methimazole with beta-blocker',
          'Thyroid storm; hospitalize and start IV steroids',
        ],
        correctAnswer: 2,
        explanation: 'This patient has Graves\' disease: suppressed TSH, elevated FT4/FT3, positive TRAb, and diffuse goiter. First-line treatment is methimazole (10-30mg daily) along with a beta-blocker (propranolol) for symptom control. Check CBC and liver enzymes before starting methimazole due to rare but serious side effects (agranulocytosis, hepatotoxicity).',
        hint: 'TRAb positivity in the setting of hyperthyroidism with diffuse goiter is diagnostic of Graves\' disease.',
      },
      {
        id: 'thyroid-scenario-4',
        type: 'case-study',
        complexity: 4,
        question: 'Clinical Scenario: A 68-year-old woman is found to have TSH 0.2 mIU/L (low) with normal FT4 and FT3 during routine screening. She is asymptomatic. She has hypertension and osteopenia on DEXA scan. Her last screening was 2 years ago when TSH was normal. What is the next best step?',
        options: [
          'Start methimazole immediately to normalize TSH',
          'Repeat TSH in 6 weeks and if still low, consider treatment given age and osteopenia',
          'This is normal variant; no follow-up needed',
          'Order radioactive iodine uptake scan immediately',
        ],
        correctAnswer: 1,
        explanation: 'This patient has subclinical hyperthyroidism (TSH 0.1-0.4 with normal FT4/FT3). Treatment should be considered in patients over 65, those with osteoporosis, or cardiac disease. The low TSH should be confirmed on repeat testing. If persistent, treatment is indicated given her age and osteopenia (low TSH increases bone loss and atrial fibrillation risk).',
        hint: 'Subclinical hyperthyroidism carries risks in elderly patients and those with cardiovascular disease or osteoporosis.',
      },
      {
        id: 'thyroid-scenario-5',
        type: 'case-study',
        complexity: 6,
        question: 'Clinical Scenario: A 30-year-old woman with known Graves\' disease on methimazole 20mg daily becomes pregnant. Her most recent labs before pregnancy were TSH 1.2, FT4 1.4. She is now 6 weeks pregnant with TSH 0.3, FT4 2.1. She feels mildly hyperthyroid. What is the appropriate management?',
        options: [
          'Continue methimazole at current dose; it is safe throughout pregnancy',
          'Switch to PTU immediately for first trimester, then return to methimazole after 16 weeks',
          'Stop all antithyroid medication; Graves\' disease remits in pregnancy',
          'Proceed with thyroidectomy in first trimester',
        ],
        correctAnswer: 1,
        explanation: 'Methimazole is associated with embryopathy (aplasia cutis, choanal atresia) in the first trimester, so PTU is preferred during this period. After 16 weeks, switch back to methimazole due to PTU\'s risk of hepatotoxicity. The goal is to use the lowest effective dose to keep FT4 at the upper limit of normal or slightly elevated, as overtreatment causes fetal hypothyroidism and goiter.',
        hint: 'Pregnancy affects Graves\' disease management. Consider teratogenicity in first trimester vs. hepatotoxicity in second/third trimesters.',
      },
    ],
    passingScore: 80,
  },

  references: [
    {
      citation: 'Jonklaas J, et al. Guidelines for the treatment of hypothyroidism. Thyroid. 2014;24(12):1670-1751.',
      pmid: '25266247',
      doi: '10.1089/thy.2014.0028',
    },
    {
      citation: 'Ross DS, et al. 2016 American Thyroid Association Guidelines for Diagnosis and Management of Hyperthyroidism. Thyroid. 2016;26(10):1343-1421.',
      pmid: '27521067',
      doi: '10.1089/thy.2016.0229',
    },
    {
      citation: 'Alexander EK, et al. 2017 Guidelines of the American Thyroid Association for the Diagnosis and Management of Thyroid Disease During Pregnancy and the Postpartum. Thyroid. 2017;27(3):315-389.',
      pmid: '28056690',
      doi: '10.1089/thy.2016.0457',
    },
    {
      citation: 'Haugen BR, et al. 2015 American Thyroid Association Management Guidelines for Adult Patients with Thyroid Nodules and Differentiated Thyroid Cancer. Thyroid. 2016;26(1):1-133.',
      pmid: '26462967',
      doi: '10.1089/thy.2015.0020',
    },
    {
      citation: 'Brent GA. Hypothyroidism and thyroiditis. In: Williams Textbook of Endocrinology. 14th ed. Elsevier; 2020:404-432.',
    },
    {
      citation: 'Davies TF, et al. Thyroid storm. J Clin Endocrinol Metab. 2020;105(9):e3874-e3882.',
      pmid: '32525579',
      doi: '10.1210/clinem/dgaa321',
    },
    {
      citation: 'Bianco AC, et al. The deiodinases are not garbage cans. Endocrinology. 2006;147(11):5014-5016.',
      pmid: '17023574',
      doi: '10.1210/en.2006-0944',
    },
    {
      citation: 'Stott DJ, et al. Thyroid hormone therapy for older adults with subclinical hypothyroidism. N Engl J Med. 2017;376(26):2534-2544.',
      pmid: '28595332',
      doi: '10.1056/NEJMoa1603825',
    },
  ],

  resources: [
    {
      title: 'American Thyroid Association Patient Resources',
      type: 'website',
      url: 'https://www.thyroid.org/patient-thyroid-information/',
      description: 'Comprehensive patient education on thyroid conditions and testing',
    },
    {
      title: 'EndocrineWeb Thyroid Function Tests',
      type: 'website',
      url: 'https://www.endocrineweb.com/conditions/thyroid/understanding-thyroid-function-tests',
      description: 'Detailed guide to understanding thyroid test results',
    },
    {
      title: 'Thyroid Disease Manager',
      type: 'website',
      url: 'http://www.thyroidmanager.org/',
      description: 'Professional resource for thyroid disease management',
    },
  ],
};

export default labThyroidInterpretationModule;
