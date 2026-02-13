/**
 * Thyroid Function Tests Interpretation Educational Module
 * 
 * Learn to understand your thyroid function tests and interpret thyroid disorders.
 */

import type { EducationalModule } from '../../types.js';

export const thyroidModule: EducationalModule = {
  id: 'lab-thyroid-interpretation',
  type: 'clinical-application',
  specialty: 'endocrinology',

  title: 'Understanding Your Thyroid Function Tests',
  description: 'Learn what TSH, T3, T4, and thyroid antibodies mean, how to distinguish hypothyroidism from hyperthyroidism, and understand subclinical vs overt thyroid disease. Based on endocrinology training materials.',
  version: '1.0.0',
  lastUpdated: '2026-02-06',
  author: 'Biological Self Medical Education Team',

  prerequisites: [
    'endocrine-system-basics',
    'hormone-feedback-loops',
  ],

  learningObjectives: [
    'Understand what each thyroid test measures and the hypothalamic-pituitary-thyroid axis',
    'Learn to distinguish hypothyroidism from hyperthyroidism patterns',
    'Recognize subclinical vs overt thyroid disease and clinical significance',
    'Understand the role of thyroid antibodies in autoimmune thyroid disease',
    'Know when treatment is needed and appropriate follow-up testing',
  ],

  estimatedTime: {
    1: '15 minutes',
    2: '20 minutes',
    3: '30 minutes',
    4: '40 minutes',
    5: '55 minutes',
    6: '75 minutes',
  },

  content: {
    // Level 1: Foundation
    1: {
      summary: `Your thyroid is a butterfly-shaped gland in your neck that acts like your body's thermostat. It produces hormones that control how fast or slow your body works—your metabolism. Think of it like the accelerator pedal in a car. When working correctly, you cruise smoothly. If it's underactive (hypothyroidism), everything slows down—you feel tired and cold. If it's overactive (hyperthyroidism), everything speeds up—you feel anxious and hot. Blood tests check your thyroid hormone levels to see if your thermostat is set right.`,

      analogy: `Imagine your thyroid gland is like the thermostat in your home:

🌡️ NORMAL THYROID = Perfect temperature setting
- Energy levels just right
- Body temperature comfortable
- Weight stable

❄️ HYPOTHYROIDISM = Thermostat set too LOW
- Everything slows down
- You feel cold and tired
- Metabolism sluggish
- Like a furnace not producing enough heat

🔥 HYPERTHYROIDISM = Thermostat set too HIGH
- Everything speeds up
- You feel hot and anxious
- Heart racing
- Like a furnace working overtime

The TSH test is like checking what temperature the thermostat is SET to, while T3 and T4 tell you how much heat is actually being produced.`,

      keyPoints: [
        'The thyroid gland controls your metabolism - how fast your body uses energy',
        'TSH (Thyroid Stimulating Hormone) comes from the brain and tells the thyroid to work',
        'T3 and T4 are the actual thyroid hormones that control body functions',
        'Hypothyroidism means low thyroid hormones - causes fatigue, weight gain, feeling cold',
        'Hyperthyroidism means high thyroid hormones - causes anxiety, weight loss, feeling hot',
        'Thyroid antibodies can show if your immune system is attacking your thyroid',
        'TSH is usually the first test doctors order to check thyroid function',
      ],

      visualAid: 'thyroid-gland-location-hormones',
    },

    // Level 2: Developing
    2: {
      summary: `Thyroid function tests measure several key hormones. TSH (Thyroid Stimulating Hormone) is produced by the pituitary gland and signals the thyroid to produce hormones. High TSH usually means the thyroid is underactive. Low TSH usually means the thyroid is overactive or suppressed. T4 (thyroxine) is the main hormone produced by the thyroid. Free T4 is the active, unbound form. T3 (triiodothyronine) is the more active form, mostly converted from T4 in tissues. TPO antibodies indicate autoimmune thyroid disease.`,

      keyConcepts: [
        {
          term: 'TSH (Thyroid Stimulating Hormone)',
          explanation: 'Made by the pituitary gland. Tells the thyroid to produce T3 and T4. Goes UP when thyroid is underactive, DOWN when overactive.',
        },
        {
          term: 'T4 (Thyroxine)',
          explanation: 'The main hormone produced by the thyroid gland. Most circulates bound to proteins; free T4 is the active form.',
        },
        {
          term: 'T3 (Triiodothyronine)',
          explanation: 'The more active thyroid hormone. Most is converted from T4 in peripheral tissues. Important for metabolism.',
        },
        {
          term: 'TPO Antibodies',
          explanation: 'Antibodies against thyroid peroxidase, an enzyme needed to make thyroid hormones. Indicates autoimmune thyroiditis.',
        },
        {
          term: 'Hypothyroidism',
          explanation: 'Underactive thyroid. Low T4/T3, usually high TSH. Causes fatigue, weight gain, cold intolerance.',
        },
        {
          term: 'Hyperthyroidism',
          explanation: 'Overactive thyroid. High T4/T3, usually low TSH. Causes anxiety, weight loss, heat intolerance.',
        },
      ],

      keyPoints: [
        'Normal TSH range: approximately 0.4 to 4.0 mIU/L (labs vary slightly)',
        'High TSH + Low Free T4 = Primary hypothyroidism (thyroid problem)',
        'Low TSH + High Free T4 = Hyperthyroidism',
        'TPO antibodies positive = Autoimmune thyroiditis (Hashimoto\'s disease if hypothyroid)',
        'Subclinical hypothyroidism: High TSH with normal T4',
        'Subclinical hyperthyroidism: Low TSH with normal T4',
        'The pituitary adjusts TSH to keep thyroid hormones in balance',
      ],

      howItWorks: `1. Your hypothalamus (brain) senses if you need more thyroid hormone
2. It releases TRH (Thyrotropin Releasing Hormone)
3. TRH tells your pituitary gland to release TSH
4. TSH travels to your thyroid and stimulates hormone production
5. Your thyroid makes mostly T4 and some T3
6. T4 is converted to active T3 in your tissues
7. T3 and T4 control your metabolism
8. When levels are adequate, they signal back to reduce TSH (negative feedback)`,
    },

    // Level 3: Standard
    3: {
      summary: `The hypothalamic-pituitary-thyroid (HPT) axis maintains thyroid hormone homeostasis through negative feedback. TSH is the most sensitive indicator of thyroid dysfunction due to the logarithmic relationship between TSH and free T4—a small change in free T4 produces a large change in TSH. Primary thyroid disease affects the thyroid gland directly (e.g., Hashimoto's thyroiditis, Graves' disease). Secondary disease affects the pituitary (rare). Tertiary disease affects the hypothalamus (very rare). TPO antibodies indicate autoimmune thyroiditis. Thyroglobulin antibodies may also be present. TSH receptor antibodies (TRAb) cause Graves' disease.`,

      mechanisms: [
        {
          name: 'HPT Axis Negative Feedback',
          description: 'T4 and T3 inhibit TRH and TSH secretion. This maintains stable thyroid hormone levels. Log-linear relationship means TSH changes 10-fold for each 2-fold change in free T4.',
        },
        {
          name: 'Thyroid Hormone Synthesis',
          description: 'Iodine trapping, organification by thyroid peroxidase (TPO), coupling of iodotyrosines to form T3 and T4, proteolysis of thyroglobulin to release hormones.',
        },
        {
          name: 'Peripheral Conversion',
          description: 'T4 (prohormone) converted to active T3 by deiodinases (D1, D2). D3 converts T4 to inactive reverse T3. Critical for local tissue thyroid hormone regulation.',
        },
        {
          name: 'Autoimmune Thyroid Disease',
          description: 'TPO and thyroglobulin antibodies mark Hashimoto\'s thyroiditis. TSH receptor stimulating antibodies cause Graves\' hyperthyroidism. TSH receptor blocking antibodies can cause hypothyroidism.',
        },
      ],

      clinicalCorrelates: [
        'Hashimoto\'s thyroiditis: Most common cause of hypothyroidism. TPO antibodies positive. Lymphocytic infiltration gradually destroys thyroid.',
        'Graves\' disease: Most common cause of hyperthyroidism. TSH receptor antibodies stimulate hormone production. Associated with eye disease and pretibial myxedema.',
        'Subclinical hypothyroidism (TSH 4.5-10, normal T4): Treat if symptomatic, TPO positive, goiter, pregnancy planned, or cardiovascular risk.',
        'Subclinical hyperthyroidism (TSH 0.1-0.4, normal T4): Increases risk of atrial fibrillation and osteoporosis. Treat especially if TSH < 0.1.',
        'Sick euthyroid syndrome: Abnormal thyroid tests during acute illness; usually not thyroid dysfunction.',
        'Thyroid hormone binding protein changes: Pregnancy, estrogen, liver disease increase TBG; androgens, steroids, cirrhosis decrease TBG.',
      ],

      normalVsAbnormal: {
        normal: 'TSH 0.4-4.0 mIU/L with free T4 in normal range. Negative thyroid antibodies. Optimal metabolism, energy, and temperature regulation.',
        abnormal: 'TSH elevated (hypothyroidism) or suppressed (hyperthyroidism), with corresponding changes in free T4/T3. Autoantibodies may be present. Symptoms reflect metabolic rate alterations.',
        whyItMatters: 'Thyroid dysfunction affects virtually every organ system. Untreated hypothyroidism causes cardiovascular disease, cognitive impairment, and metabolic syndrome. Untreated hyperthyroidism causes atrial fibrillation, osteoporosis, and thyroid storm.',
      },
    },

    // Level 4: Advanced
    4: {
      summary: `Thyroid hormone action occurs via nuclear thyroid hormone receptors (TRα and TRβ) that function as ligand-activated transcription factors. T3 has 10-fold higher affinity for these receptors than T4. Deiodinases regulate local T3 availability: D1 in liver and kidney, D2 in brain, pituitary, brown fat, and thyroid, D3 in placenta, brain, and skin. D2 polymorphisms affect levothyroxine dose requirements. Thyroid hormone transporters (MCT8, MCT10, OATP1C1) enable cellular uptake. The T3/T4 ratio in thyroid secretion is about 1:10, but D2 conversion increases tissue T3. Reverse T3 (rT3) is an inactive metabolite that increases in severe illness, starvation, and beta-blocker use.`,

      molecularMechanisms: [
        {
          pathway: 'Thyroid Hormone Receptor Signaling',
          defect: 'Mutations in THRβ cause Resistance to Thyroid Hormone (RTH); THRα mutations cause isolated peripheral hypothyroidism',
          consequence: 'Impaired gene transcription affecting metabolism, cardiac function, bone development, and CNS myelination',
        },
        {
          pathway: 'Deiodinase Regulation',
          defect: 'DIO2 Thr92Ala polymorphism reduces D2 activity; selenium deficiency impairs all deiodinases',
          consequence: 'Reduced T4 to T3 conversion; higher levothyroxine dose requirements; tissue-specific hypothyroidism despite normal serum T3',
        },
        {
          pathway: 'Iodine Metabolism',
          defect: 'Iodine deficiency, excess, or organification defects (TPO mutations, Pendred syndrome)',
          consequence: 'Impaired hormone synthesis, goiter formation, hypothyroidism; excess iodine can trigger hyperthyroidism (Jod-Basedow) or hypothyroidism (Wolff-Chaikoff)',
        },
        {
          pathway: 'Thyroid Autoimmunity',
          defect: 'Loss of immune tolerance to thyroid antigens; HLA associations (DR3, DR5, CTLA-4, PTPN22 polymorphisms)',
          consequence: 'T-cell mediated destruction (Hashimoto\'s) or TSH receptor antibody stimulation (Graves\'); shared genetic susceptibility with other autoimmune diseases',
        },
      ],

      pathways: [
        {
          name: 'Thyroid Hormone Synthesis',
          steps: [
            'Iodide trapping via NIS (sodium-iodide symporter) on basolateral membrane',
            'Organification: TPO oxidizes iodide and iodinates tyrosine residues on thyroglobulin',
            'Coupling: TPO couples MIT and DIT to form T3 and T4 on thyroglobulin',
            'Storage: Thyroglobulin with bound hormones stored as colloid',
            'Secretion: Endocytosis, lysosomal proteolysis, release of T4 and T3',
          ],
          regulation: 'TSH stimulates all steps via TSH receptor (GPCR) and cAMP pathway',
        },
        {
          name: 'Thyroid Hormone Action',
          steps: [
            'T4 and T3 enter cells via MCT8, MCT10 transporters',
            'D2 converts T4 to T3 in target tissues; D3 inactivates to rT3',
            'T3 binds nuclear thyroid hormone receptors (TR) forming heterodimers with RXR',
            'TR-T3 complex binds thyroid response elements (TRE) on DNA',
            'Activates or represses transcription of target genes (myosin, SERCA2, UCP, etc.)',
          ],
          regulation: 'Tissue-specific deiodinase expression allows local thyroid hormone regulation independent of serum levels',
        },
      ],

      references: [
        'Bianco AC, et al. The deiodinases are not garbage cans. Endocrinology. 2006;147(11):5014-5016.',
        'Mullur R, et al. Thyroid hormone regulation of metabolism. Physiol Rev. 2014;94(2):355-382.',
        'Yen PM. Physiological and molecular basis of thyroid hormone action. Physiol Rev. 2001;81(3):1097-1142.',
      ],
    },

    // Level 5: Expert
    5: {
      summary: `Contemporary thyroidology encompasses tissue-specific thyroid hormone action and the emerging recognition that serum TSH may not reflect intracellular T3 status in all tissues. The combination therapy debate (levothyroxine + liothyronine) reflects this—some patients with polymorphisms in DIO2 may benefit from T3 supplementation despite normal serum TSH. The "thyroid allostasis in critical illness" (TACIT) paradigm recognizes that non-thyroidal illness syndrome (NTIS) may be adaptive rather than pathological. Thyroid hormone mimetics targeting specific tissues (eaglet thyromimetics for cholesterol, sobetirome for CNS) are in development. Liquid levothyroxine formulations and gel capsules offer improved absorption in patients with malabsorption, coffee interference, or proton pump inhibitor use.`,

      researchFrontiers: [
        'Thyroid hormone mimetics: Sobetirome (CNS-penetrant) for X-linked adrenoleukodystrophy; VK2809 for MASH and dyslipidemia',
        'Liquid levothyroxine: Better absorption, less food interaction; beneficial in malabsorption, bariatric surgery patients',
        'T3/T4 combination therapy: CONTINUED trial showed no general benefit; personalized approaches based on DIO2 genetics being explored',
        'Immunotherapy-induced thyroiditis: Checkpoint inhibitors causing hypothyroidism (common) and hyperthyroidism (uncommon but severe)',
        'Thyroid hormone transport defects: MCT8 deficiency (Allan-Herndon-Dudley syndrome); triac (TRIAC) therapy in development',
        'Artificial intelligence: Machine learning predicting levothyroxine dose based on clinical and genetic factors',
      ],

      controversies: [
        {
          topic: 'TSH Reference Range',
          perspectives: [
            'Traditional: 0.4-4.0 or 0.5-5.0 mIU/L',
            'Proposed narrower range: 0.3-2.5 based on log-Gaussian distribution in thyroid disease-free populations',
            'Age-adjusted: Upper limit increases with age; treating elderly to same target may be harmful',
          ],
        },
        {
          topic: 'Combination T4/T3 Therapy',
          perspectives: [
            'Traditional view: Levothyroxine monotherapy sufficient; TSH normalized = euthyroid',
            'Dissident view: Some patients symptomatic despite normal TSH; tissue T3 may be low; DIO2 polymorphisms matter',
            'Evidence: RCTs generally negative for general population; potential subset of responders',
          ],
        },
        {
          topic: 'Subclinical Hypothyroidism Treatment',
          perspectives: [
            'Conservative: Treat only if TSH > 10, symptomatic, or specific risk factors',
            'Aggressive: Treat if TSH > 4 with symptoms or antibodies; target TSH 1-2',
            'Evidence mixed: TRUST trial showed no symptomatic benefit in elderly; cardiovascular benefits debated',
          ],
        },
      ],

      statisticalContext: `The log-linear TSH-free T4 relationship means that for any given TSH, free T4 can vary 2-fold. This has implications:
- A patient at the upper end of free T4 range may need different management than one at the lower end with the same TSH
- Individual set-points vary; a TSH of 3 may be abnormal for someone whose baseline is 1.5
- In pregnancy, trimester-specific ranges needed: TSH upper limit ~2.5 first trimester, ~3.0 second, ~3.5 third

DIO2 polymorphisms:
- Thr92Ala occurs in ~12% of population
- Associated with insulin resistance, hypertension, psychological distress
- May require higher levothyroxine doses or benefit from T3`,

      references: [
        'Bianco AC, et al. The tissue-specific pattern of the T3/T4 ratio reflects the activity of the deiodinases. Endocrinology. 2002;143(6):2119-2122.',
        'Panicker V, et al. Heritability of serum TSH, free T4 and free T3 concentrations: a study of a large UK twin cohort. Clin Endocrinol (Oxf). 2008;68(4):652-659.',
        'Stott DJ, et al. Thyroid hormone therapy for older adults with subclinical hypothyroidism. N Engl J Med. 2017;376(26):2534-2544.',
      ],
    },

    // Level 6: Clinical
    6: {
      summary: `Clinical thyroid management requires systematic evaluation of the HPT axis, appropriate use and interpretation of antibody testing, and individualized treatment decisions. Primary hypothyroidism treatment involves levothyroxine replacement targeting TSH normalization. In pregnancy, trimester-specific TSH targets apply, and levothyroxine requirements increase 20-50%. Hyperthyroidism management depends on etiology—antithyroid drugs (methimazole, PTU) for Graves\' disease, radioiodine ablation, or surgery. Thyroid nodules require TSH measurement, ultrasound risk stratification (ACR TI-RADS), and fine needle aspiration based on size and features. Thyroid cancer management involves total thyroidectomy, radioiodine for intermediate/high risk, and TSH suppression therapy.`,

      clinicalApproach: [
        'Initial evaluation: TSH with reflex free T4 if abnormal. Add TPO antibodies if hypothyroid. Add TSH receptor antibodies if hyperthyroid.',
        'Subclinical hypothyroidism: Treat if TSH > 10, or if TSH 4.5-10 with symptoms, positive TPO antibodies, goiter, pregnancy, or cardiovascular risk.',
        'Subclinical hyperthyroidism: Treat if TSH < 0.1, or if TSH 0.1-0.4 with symptoms, age > 65, osteoporosis, or cardiac disease.',
        'Levothyroxine dosing: Weight-based (1.6 mcg/kg) for full replacement; reduce 25% if elderly or CAD; increase 20-50% in pregnancy.',
        'Hyperthyroidism etiology: RAIU scan distinguishes Graves\' (diffuse high uptake) from thyroiditis (low uptake).',
        'Nodule evaluation: Ultrasound with TI-RADS scoring; FNA for TR5 nodules > 1cm, TR4 > 1.5cm, TR3 > 2.5cm.',
      ],

      differentialConsiderations: [
        'Hashimoto\'s thyroiditis: Most common hypothyroidism; high TSH, low T4, positive TPO antibodies; may have transient hyperthyroid phase (hashitoxicosis).',
        'Graves\' disease: Diffuse goiter, ophthalmopathy, pretibial myxedema; low TSH, high T4/T3, positive TRAb; elevated RAIU.',
        'Toxic multinodular goiter: Multiple autonomous nodules; patchy RAIU; more common in elderly, iodine-deficient areas.',
        'Toxic adenoma: Single autonomous nodule; focal increased RAIU; "hot nodule" on scan.',
        'Subacute (de Quervain) thyroiditis: Painful thyroid, elevated ESR, transient hyperthyroidism followed by hypothyroidism; low RAIU.',
        'Painless (silent) thyroiditis: Postpartum or autoimmune; transient hyperthyroidism; may be confused with Graves\'.',
        'Drug-induced: Amiodarone (can cause hypo or hyper), lithium (hypo), interferon (thyroiditis), immune checkpoint inhibitors.',
        'Central hypothyroidism: Pituitary or hypothalamic disease; low/normal TSH with low free T4; other pituitary hormone deficits usually present.',
        'Thyroid hormone resistance: Elevated T4/T3 with normal/elevated TSH; THRβ mutations; differentiated from TSH-secreting adenoma by lack of alpha-subunit elevation.',
      ],

      guidelines: [
        'Jonklaas J, et al. Guidelines for the treatment of hypothyroidism. Thyroid. 2014;24(12):1670-1751.',
        'Ross DS, et al. 2016 American Thyroid Association Guidelines for Diagnosis and Management of Hyperthyroidism. Thyroid. 2016;26(10):1343-1421.',
        'Alexander EK, et al. 2017 Guidelines of the American Thyroid Association for the Diagnosis and Management of Thyroid Disease During Pregnancy and the Postpartum. Thyroid. 2017;27(3):315-389.',
        'Tessler FN, et al. ACR Thyroid Imaging, Reporting and Data System (TI-RADS): White Paper of the ACR TI-RADS Committee. J Am Coll Radiol. 2017;14(5):587-595.',
      ],

      caseExamples: [
        {
          presentation: '38-year-old female, fatigue, weight gain, constipation. TSH 8.5, Free T4 0.9 (low-normal), TPO antibodies positive at 450 IU/mL.',
          keyFindings: [
            'Elevated TSH with low-normal free T4',
            'Positive TPO antibodies',
            'Symptoms consistent with hypothyroidism',
          ],
          teachingPoints: [
            'Subclinical hypothyroidism (TSH 4.5-10) with positive antibodies warrants treatment',
            'Start levothyroxine 50-75 mcg daily (weight-based: 1.6 mcg/kg ≈ 88 mcg for 55kg)',
            'Recheck TSH in 6-8 weeks; titrate to TSH 1-2.5',
            'Positive antibodies suggest Hashimoto\'s thyroiditis; monitor annually even if euthyroid',
            'Patient education: Take on empty stomach, 30-60 min before breakfast',
          ],
        },
        {
          presentation: '28-year-old female, anxiety, palpitations, weight loss 10 lbs in 2 months, heat intolerance. TSH < 0.01, Free T4 3.2, TRAb positive.',
          keyFindings: [
            'Suppressed TSH with elevated free T4',
            'Positive TSH receptor antibodies',
            'Classic hyperthyroid symptoms',
          ],
          teachingPoints: [
            'Graves\' disease confirmed by clinical picture + TRAb positivity',
            'Treatment options: Methimazole (first-line), radioiodine, surgery',
            'Start methimazole 10-20mg daily; check CBC and liver enzymes (rare side effects: agranulocytosis, hepatotoxicity)',
            'Add beta-blocker (propranolol 20-40mg TID) for symptom control',
            'Check for Graves\' ophthalmopathy; smoking cessation critical if present',
            'Radioiodine contraindicated in pregnancy; pregnancy test required',
          ],
        },
      ],

      references: [
        'Brent GA. Hypothyroidism and thyroiditis. In: Williams Textbook of Endocrinology. 14th ed. Elsevier; 2020:404-432.',
        'Davies TF, et al. Thyroid storm. J Clin Endocrinol Metab. 2020;105(9):e3874-e3882.',
        'Haugen BR, et al. 2015 American Thyroid Association Management Guidelines for Adult Patients with Thyroid Nodules and Differentiated Thyroid Cancer. Thyroid. 2016;26(1):1-133.',
      ],
    },
  },

  interactions: {
    anatomyPoints: [
      { structure: 'thyroid', focus: 'follicular-cells', description: 'Follicular cells produce T3 and T4; site of autoimmune attack in Hashimoto\'s' },
      { structure: 'pituitary', focus: 'anterior', description: 'Produces TSH which regulates thyroid function' },
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
    ],

    relatedMedications: [
      'levothyroxine',
      'liothyronine',
      'methimazole',
      'propylthiouracil',
      'propranolol',
      'radioactive-iodine',
    ],

    relatedConditions: [
      'hashimotos-thyroiditis',
      'graves-disease',
      'subclinical-hypothyroidism',
      'subclinical-hyperthyroidism',
      'thyroid-nodules',
      'thyroid-cancer',
      'postpartum-thyroiditis',
      'de-quervains-thyroiditis',
    ],
  },

  quiz: {
    title: 'Test Your Understanding',
    questions: [
      // Level 1 Questions
      {
        id: 'thyroid-q1-l1',
        type: 'multiple-choice',
        complexity: 1,
        question: 'The thyroid gland is like a thermostat for your body. What happens when it is underactive (hypothyroidism)?',
        options: [
          'Everything speeds up - you feel anxious and hot',
          'Everything slows down - you feel tired and cold',
          'Nothing changes - you feel normal',
          'You lose weight rapidly',
        ],
        correctAnswer: 1,
        explanation: 'In hypothyroidism, the thyroid produces too little hormone, causing the body\'s metabolism to slow down. This leads to symptoms like fatigue, feeling cold, weight gain, and sluggishness.',
      },
      {
        id: 'thyroid-q2-l1',
        type: 'multiple-choice',
        complexity: 1,
        question: 'What does TSH stand for and what does it do?',
        options: [
          'Thyroid Storage Hormone - stores thyroid hormone',
          'Thyroid Stimulating Hormone - tells the thyroid to make hormones',
          'Thyroid Stopping Hormone - stops thyroid production',
          'Thyroid Sugar Hormone - controls blood sugar',
        ],
        correctAnswer: 1,
        explanation: 'TSH (Thyroid Stimulating Hormone) is produced by the pituitary gland and signals the thyroid gland to produce T3 and T4 hormones.',
      },
      // Level 2 Questions
      {
        id: 'thyroid-q3-l2',
        type: 'multiple-choice',
        complexity: 2,
        question: 'What pattern suggests primary hypothyroidism?',
        options: [
          'Low TSH, High Free T4',
          'High TSH, Low Free T4',
          'Low TSH, Low Free T4',
          'High TSH, High Free T4',
        ],
        correctAnswer: 1,
        explanation: 'Primary hypothyroidism occurs when the thyroid gland itself is underactive. The pituitary compensates by producing more TSH, resulting in high TSH and low free T4.',
      },
      {
        id: 'thyroid-q4-l2',
        type: 'multiple-choice',
        complexity: 2,
        question: 'What do TPO antibodies indicate?',
        options: [
          'Bacterial infection of the thyroid',
          'Autoimmune thyroid disease',
          'Thyroid cancer',
          'Normal thyroid function',
        ],
        correctAnswer: 1,
        explanation: 'TPO (thyroid peroxidase) antibodies indicate autoimmune thyroiditis, most commonly Hashimoto\'s thyroiditis. They signal that the immune system is attacking the thyroid gland.',
      },
      // Level 3 Questions
      {
        id: 'thyroid-q5-l3',
        type: 'multiple-choice',
        complexity: 3,
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
        id: 'thyroid-q6-l3',
        type: 'multiple-choice',
        complexity: 3,
        question: 'Which condition is associated with TSH receptor stimulating antibodies?',
        options: [
          'Hashimoto\'s thyroiditis',
          'Graves\' disease',
          'Thyroid nodules',
          'Subacute thyroiditis',
        ],
        correctAnswer: 1,
        explanation: 'Graves\' disease is caused by TSH receptor stimulating antibodies (TSI or TRAb) that mimic TSH and cause excessive thyroid hormone production.',
      },
      // Level 4 Questions
      {
        id: 'thyroid-q7-l4',
        type: 'multiple-choice',
        complexity: 4,
        question: 'Which enzyme converts T4 to the more active T3 in peripheral tissues?',
        options: [
          'Thyroid peroxidase (TPO)',
          'Deiodinase type 2 (D2)',
          'Thyroglobulin',
          'HMG-CoA reductase',
        ],
        correctAnswer: 1,
        explanation: 'Deiodinases (particularly D2) convert the prohormone T4 to the active T3 in peripheral tissues. This local conversion allows tissue-specific regulation of thyroid hormone activity.',
      },
      {
        id: 'thyroid-q8-l4',
        type: 'multiple-choice',
        complexity: 4,
        question: 'What is the mechanism of action of propylthiouracil (PTU) in treating hyperthyroidism?',
        options: [
          'Destroys thyroid tissue',
          'Inhibits thyroid peroxidase and peripheral T4 to T3 conversion',
          'Blocks TSH receptors',
          'Stimulates thyroid hormone excretion',
        ],
        correctAnswer: 1,
        explanation: 'PTU inhibits thyroid peroxidase (blocking hormone synthesis) and also inhibits peripheral conversion of T4 to T3. This dual mechanism makes it useful in thyroid storm, unlike methimazole.',
      },
      // Level 5 Questions
      {
        id: 'thyroid-q9-l5',
        type: 'multiple-choice',
        complexity: 5,
        question: 'What is the significance of the DIO2 Thr92Ala polymorphism in thyroid hormone therapy?',
        options: [
          'It increases risk of thyroid cancer',
          'It reduces T4 to T3 conversion and may affect levothyroxine dose requirements',
          'It causes Graves\' disease',
          'It has no clinical significance',
        ],
        correctAnswer: 1,
        explanation: 'The DIO2 Thr92Ala polymorphism reduces deiodinase 2 activity, impairing T4 to T3 conversion in tissues. This may explain why some patients have persistent symptoms despite normal TSH on levothyroxine and may benefit from higher doses or T3 supplementation.',
      },
      {
        id: 'thyroid-q10-l5',
        type: 'multiple-choice',
        complexity: 5,
        question: 'According to current evidence, which statement about combination T4/T3 therapy is most accurate?',
        options: [
          'Superior to T4 alone for all hypothyroid patients',
          'Superior to T4 alone for patients with DIO2 polymorphisms only',
          'RCTs generally show no benefit over T4 alone in the general population',
          'Contraindicated in all patients',
        ],
        correctAnswer: 2,
        explanation: 'Randomized controlled trials (including the CONTINUED trial) generally show no symptomatic benefit of combination T4/T3 therapy over T4 alone in the general hypothyroid population. However, some patients with specific genetic variants (DIO2 polymorphisms) may be subset responders.',
      },
      // Level 6 Questions
      {
        id: 'thyroid-q11-l6',
        type: 'multiple-choice',
        complexity: 6,
        question: 'A 30-year-old female presents with TSH < 0.01, Free T4 2.8 ng/dL, and a diffusely enlarged thyroid. She is 8 weeks pregnant. What is the most appropriate management?',
        options: [
          'Start methimazole immediately; it is safe in first trimester',
          'Start PTU for first trimester; switch to methimazole after 16 weeks',
          'Proceed with radioactive iodine ablation',
          'Observation only; thyroid dysfunction resolves spontaneously in pregnancy',
        ],
        correctAnswer: 1,
        explanation: 'This presentation suggests Graves\' disease. In the first trimester, PTU is preferred over methimazole due to the risk of methimazole embryopathy (aplasia cutis, choanal atresia). After 16 weeks, switch to methimazole due to PTU hepatotoxicity risk. Radioiodine is contraindicated in pregnancy.',
      },
      {
        id: 'thyroid-q12-l6',
        type: 'multiple-choice',
        complexity: 6,
        question: 'A patient with a thyroid nodule has an ultrasound showing a solid hypoechoic nodule with microcalcifications and taller-than-wide shape (ACR TI-RADS TR5). The nodule measures 1.2 cm. What is the appropriate next step?',
        options: [
          'Observation with repeat ultrasound in 1 year',
          'Fine needle aspiration biopsy',
          'Start levothyroxine suppression therapy',
          'Total thyroidectomy without biopsy',
        ],
        correctAnswer: 1,
        explanation: 'According to ACR TI-RADS, TR5 nodules (highly suspicious) should undergo fine needle aspiration if > 1.0 cm. The malignant features described (hypoechoic, microcalcifications, taller-than-wide) warrant biopsy to determine if surgery is needed.',
      },
    ],
    passingScore: 80,
  },

  references: [
    {
      citation: 'Jonklaas J, et al. Guidelines for the treatment of hypothyroidism. Thyroid. 2014;24(12):1670-1751.',
    },
    {
      citation: 'Ross DS, et al. 2016 American Thyroid Association Guidelines for Diagnosis and Management of Hyperthyroidism. Thyroid. 2016;26(10):1343-1421.',
    },
    {
      citation: 'Alexander EK, et al. 2017 Guidelines of the American Thyroid Association for the Diagnosis and Management of Thyroid Disease During Pregnancy. Thyroid. 2017;27(3):315-389.',
    },
  ],

  resources: [
    {
      title: 'Thyroid Information (American Thyroid Association)',
      type: 'website',
      url: 'https://www.thyroid.org',
      description: 'Comprehensive patient resources on thyroid conditions',
    },
    {
      title: 'Understanding Thyroid Tests',
      type: 'website',
      url: 'https://www.endocrineweb.com/conditions/thyroid/understanding-thyroid-function-tests',
      description: 'EndocrineWeb guide to thyroid function test interpretation',
    },
  ],
};

export default thyroidModule;
