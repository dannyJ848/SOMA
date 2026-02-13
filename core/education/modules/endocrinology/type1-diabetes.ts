/**
 * Type 1 Diabetes Educational Module
 * 
 * Comprehensive coverage of T1D: autoimmune pathophysiology, insulin types,
 * carb counting, DKA prevention, CGM technology, and pump therapy.
 */

import type { EducationalModule } from '../types.js';

export const type1DiabetesModule: EducationalModule = {
  id: 'diabetes-type-1-comprehensive',
  type: 'specialty',
  specialty: 'endocrinology',
  
  title: 'Understanding Type 1 Diabetes',
  description: 'A complete guide to Type 1 diabetes: the autoimmune condition that destroys insulin-producing cells, how to manage blood sugar with insulin, carb counting, continuous glucose monitoring, and preventing complications.',
  version: '1.0.0',
  lastUpdated: '2026-02-06',
  author: 'Biological Self Medical Education Team',
  
  prerequisites: [
    'glucose-metabolism-basics',
    'insulin-action-basics',
    'pancreas-function-overview',
  ],
  
  learningObjectives: [
    'Understand what causes Type 1 diabetes and how it differs from Type 2',
    'Learn about different types of insulin and their action profiles',
    'Master carbohydrate counting for meal-based insulin dosing',
    'Know the signs of diabetic ketoacidosis (DKA) and how to prevent it',
    'Understand continuous glucose monitoring (CGM) and insulin pump technology',
  ],
  
  estimatedTime: {
    1: '20 minutes',
    2: '25 minutes',
    3: '35 minutes',
    4: '50 minutes',
    5: '70 minutes',
    6: '100 minutes',
  },
  
  content: {
    // Level 1: Foundation (8th grade)
    1: {
      summary: `Type 1 diabetes is an autoimmune disease where your immune system mistakenly attacks and destroys the insulin-producing cells in your pancreas. Without insulin, your body cannot use sugar from food for energy. This causes high blood sugar and can lead to a dangerous condition called diabetic ketoacidosis (DKA). People with Type 1 diabetes must take insulin injections (or use a pump) every day to survive. It is not caused by eating sugar or being overweight.`,
      
      analogy: `Imagine your pancreas is a factory that makes "keys" (insulin) to open doors on your cells and let sugar in. In Type 1 diabetes, your body's security system (immune system) thinks the key factory workers are enemies and attacks them. 

The factory gets destroyed, and no more keys are made. Without keys, sugar piles up outside the doors (in your blood) and can't get into the cells where it's needed for energy. You have to bring in keys from outside (insulin injections) to unlock the doors and let the sugar in.`,
      
      keyPoints: [
        'Type 1 diabetes is an autoimmune disease - the body attacks itself',
        'The immune system destroys insulin-producing beta cells in the pancreas',
        'Without insulin, sugar cannot enter cells and builds up in the blood',
        'People with Type 1 diabetes must take insulin every day to live',
        'It is NOT caused by eating sugar, being overweight, or lack of exercise',
        'It usually develops in children, teens, and young adults',
      ],
      
      visualAid: 'pancreas-beta-cell-animation',
      story: 'Emma was 12 when she started drinking water constantly and losing weight. Her parents thought it was just a growth spurt, but when she became tired and confused, they rushed to the ER. Her blood sugar was over 600. She spent 3 days in the ICU for DKA. Now, at 16, she manages her T1D with a pump and CGM, plays varsity soccer, and is planning to study nursing.',
    },
    
    // Level 2: Developing (10th grade)
    2: {
      summary: `Type 1 diabetes results from T-cell mediated autoimmune destruction of pancreatic beta cells. The process can begin years before symptoms appear, triggered by genetic susceptibility (HLA-DR3/DQ2 and HLA-DR4/DQ8 haplotypes) and environmental factors. Autoantibodies against insulin, GAD65, IA-2, and ZnT8 are markers of the autoimmune process. Without insulin, cells cannot absorb glucose, leading to hyperglycemia, osmotic diuresis, and fat breakdown with ketone production.`,
      
      keyConcepts: [
        {
          term: 'Autoimmune Disease',
          explanation: 'A condition where the immune system mistakenly attacks the body\'s own healthy cells. In T1D, T-cells attack beta cells.',
        },
        {
          term: 'Beta Cells',
          explanation: 'Insulin-producing cells located in the Islets of Langerhans in the pancreas. Normally 1-2% of pancreatic mass.',
        },
        {
          term: 'Diabetic Ketoacidosis (DKA)',
          explanation: 'A life-threatening emergency where the body burns fat for energy, producing acids called ketones that build up in the blood.',
        },
        {
          term: 'Hemoglobin A1c (HbA1c)',
          explanation: 'A blood test showing average blood sugar over 2-3 months. Target for most people with T1D is under 7%.',
        },
      ],
      
      keyPoints: [
        'T1D is a T-cell mediated autoimmune disease - not caused by lifestyle',
        'Genetic susceptibility plus environmental trigger starts the process',
        'Multiple autoantibodies appear before symptoms (pre-stage 1)',
        'Symptoms appear when 80-90% of beta cells are destroyed',
        'Without insulin, the body breaks down fat, producing ketones',
        'DKA occurs when ketones build up, making blood dangerously acidic',
      ],
      
      howItWorks: `Normal State:
1. Food is eaten → digested into glucose
2. Glucose enters bloodstream
3. Beta cells detect glucose → release insulin
4. Insulin opens glucose "doors" (GLUT4 transporters) on cells
5. Cells absorb glucose for energy

Type 1 Diabetes:
1. No beta cells → no insulin produced
2. Glucose cannot enter cells
3. Cells starve for energy despite high blood glucose
4. Body breaks down fat as alternative fuel
5. Fat breakdown produces ketones
6. Without insulin, ketones accumulate → DKA`,
    },
    
    // Level 3: Standard (12th grade)
    3: {
      summary: `Type 1 diabetes affects approximately 1.6 million Americans, with incidence increasing 2-3% annually. The disease progresses through three stages: Stage 1 (autoimmunity, normal glucose), Stage 2 (autoimmunity, dysglycemia), and Stage 3 (symptomatic diabetes). Management requires basal-bolus insulin therapy: long-acting insulin for background needs and rapid-acting insulin for meals. Carbohydrate counting allows precise meal-time dosing. Continuous glucose monitoring (CGM) provides real-time glucose data and trend arrows.`,
      
      mechanisms: [
        {
          name: 'Autoimmune Beta Cell Destruction',
          description: 'CD8+ cytotoxic T-cells infiltrate pancreatic islets and directly kill beta cells. CD4+ T-cells provide help. Autoantibodies are markers but do not cause damage.',
        },
        {
          name: 'Honeymoon Period',
          description: 'After diagnosis, remaining beta cells may recover partially with exogenous insulin, leading to temporarily reduced insulin needs. Lasts weeks to months.',
        },
        {
          name: 'Dawn Phenomenon',
          description: 'Morning rise in blood glucose caused by counter-regulatory hormones (growth hormone, cortisol, catecholamines) released in early morning hours.',
        },
        {
          name: 'Insulin Action Profiles',
          description: 'Rapid-acting: onset 10-20 min, peak 1-2 hr, duration 3-5 hr. Long-acting: onset 1-2 hr, minimal peak, duration 20-24 hr or flat 42 hr (glargine U300, degludec).',
        },
      ],
      
      clinicalCorrelates: [
        'Typical presentation: Polyuria, polydipsia, polyphagia with weight loss over weeks',
        'Diagnosis: Fasting glucose ≥126, random ≥200 with symptoms, or A1c ≥6.5%',
        'DKA at presentation occurs in 25-40% of cases, more common in younger children',
        'Multiple Daily Injections (MDI): 3-4 rapid-acting doses + 1-2 basal doses daily',
        'Insulin-to-carb ratio (I:C): Units of insulin per grams of carbohydrate (typically 1:10 to 1:20)',
        'Correction factor: How much 1 unit lowers blood glucose (typically 40-50 mg/dL)',
      ],
      
      normalVsAbnormal: {
        normal: 'Beta cells automatically adjust insulin minute-by-minute: 0.5-1.0 units/hr basal between meals; 5-10 units bolus for meals; suppression during exercise and hypoglycemia',
        abnormal: 'No endogenous insulin production. All insulin must be provided exogenously: basal insulin covers background needs and hepatic glucose output; bolus insulin covers carbohydrates and corrects high blood sugar',
        whyItMatters: 'Without careful insulin dosing, blood glucose fluctuates wildly. Too little insulin leads to hyperglycemia and DKA; too much leads to hypoglycemia, seizures, or death.',
      },
    },
    
    // Level 4: Advanced (College)
    4: {
      summary: `The immunopathogenesis of Type 1 diabetes involves genetic susceptibility (HLA class II genes account for 30-50% of genetic risk), environmental triggers (enteroviruses, gut microbiome alterations), and loss of immune tolerance. The insulitis lesion shows CD8+ T-cell predominance with CD4+ T-cells, B-cells, and macrophages. Modern insulin analogs (lispro, aspart, glulisine; glargine, detemir, degludec) have optimized pharmacokinetics. Closed-loop systems (artificial pancreas) combine CGM, control algorithm, and insulin pump to automate delivery.`,
      
      molecularMechanisms: [
        {
          pathway: 'HLA Association',
          defect: 'HLA-DR3-DQ2 (DRB1*03:01-DQA1*05:01-DQB1*02:01) and HLA-DR4-DQ8 (DRB1*04-DQA1*03:01-DQB1*03:02) confer highest risk',
          consequence: 'These MHC molecules have specific binding pockets that present beta-cell antigens (proinsulin, GAD65) to autoreactive T-cells',
        },
        {
          pathway: 'T-Cell Mediated Killing',
          defect: 'Autoreactive CD8+ cytotoxic T-cells recognize beta-cell peptides presented on MHC class I',
          consequence: 'Perforin/granzyme-mediated apoptosis and Fas-FasL interactions destroy beta cells',
        },
        {
          pathway: 'Insulin Structure and Processing',
          defect: 'Proinsulin converted to insulin and C-peptide in beta cell secretory granules',
          consequence: 'Loss of beta cells eliminates both insulin and C-peptide production; C-peptide is a marker of endogenous insulin secretion',
        },
        {
          pathway: 'Counter-Regulatory Response',
          defect: 'In T1D, glucagon response to hypoglycemia is impaired within 1-5 years of diagnosis',
          consequence: 'Increased risk of severe hypoglycemia; epinephrine becomes the primary defense but may be inadequate',
        },
      ],
      
      pathways: [
        {
          name: 'Insulin Signal Transduction',
          steps: [
            'Insulin binds to insulin receptor tyrosine kinase (extracellular α-subunit)',
            'Conformational change activates intrinsic kinase (intracellular β-subunit)',
            'Autophosphorylation of tyrosine residues on β-subunit',
            'Recruitment and phosphorylation of IRS-1/2',
            'PI3K activation → PIP3 → PDK1 → AKT activation',
            'AKT phosphorylates AS160 → GLUT4 vesicle translocation to membrane',
          ],
          regulation: 'Defects in this pathway in T2D; absent insulin in T1D means no signal regardless of receptor function',
        },
        {
          name: 'Ketogenesis',
          steps: [
            'No insulin → hormone-sensitive lipase activated in adipose tissue',
            'Increased lipolysis → elevated circulating free fatty acids',
            'FFAs transported to liver → converted to acetyl-CoA',
            'Acetyl-CoA exceeds TCA cycle capacity → shunted to ketogenesis',
            'HMG-CoA synthase produces acetoacetate → β-hydroxybutyrate and acetone',
          ],
          regulation: 'Insulin normally suppresses lipolysis and ketogenesis; its absence leads to uncontrolled ketone production',
        },
      ],
      
      references: [
        'Atkinson MA, et al. Type 1 diabetes. Lancet. 2014;383(9911):69-82.',
        'Tauschmann M, et al. Closed-loop insulin delivery in suboptimally controlled type 1 diabetes: a multicentre, 12-week randomised trial. Lancet. 2018;392(10155):1321-1329.',
        'Herold KC, et al. An Anti-CD3 Antibody, Teplizumab, in Relatives at Risk for Type 1 Diabetes. N Engl J Med. 2019;381(7):603-613.',
      ],
    },
    
    // Level 5: Expert (Graduate)
    5: {
      summary: `Type 1 diabetes is increasingly understood as a heterogeneous condition. The Type 1 Diabetes TrialNet and TEDDY study have characterized the natural history and identified stages of progression. Immunotherapy trials (teplizumab, rituximab, abatacept) have shown modest delay in progression. The DCCT/EDIC established that intensive glucose control reduces microvascular and macrovascular complications. Modern management emphasizes Time-in-Range (TIR) 70-180 mg/dL as the key metric, with goals of >70% TIR, <4% below 70, and <1% below 54. Advanced hybrid closed-loop systems (Tandem Control-IQ, Medtronic 770G/780G) can achieve >70% TIR.`,
      
      researchFrontiers: [
        'Disease-modifying therapy: Teplizumab delays T1D onset in stage 2 by median 2 years - FDA approved for delay of clinical T1D',
        'Beta-cell replacement: Allogeneic islet transplantation (Edmonton protocol), stem cell-derived islets (Vertex VX-880 trial)',
        'Immune tolerance: Antigen-specific immunotherapy (proinsulin peptide, GAD-alum) to restore tolerance',
        'Advanced closed-loop: Dual-hormone systems (insulin + glucagon), faster insulin analogs, improved algorithms',
        'Artificial intelligence: Machine learning for glucose prediction, personalized insulin dosing recommendations',
        'Biomarkers: C-peptide preservation as endpoint, novel immune markers for monitoring',
      ],
      
      controversies: [
        {
          topic: 'A1c vs Time-in-Range',
          perspectives: [
            'A1c has limitations: does not capture glycemic variability, affected by hemoglobinopathies, racial differences',
            'CGM metrics (TIR, GMI, CV) provide richer data on daily glucose patterns',
            'A1c still predicts complications and is widely available; CGM access remains limited',
          ],
        },
        {
          topic: 'Low Carbohydrate Diets in T1D',
          perspectives: [
            'Some advocate very low carb (<50g/day) for improved stability and reduced insulin needs',
            'Concerns about growth in children, lipid effects, and sustainability',
            'Limited long-term outcome data; individual preference and medical supervision important',
          ],
        },
        {
          topic: 'Adjunctive Therapies',
          perspectives: [
            'SGLT2 inhibitors improve glucose but increase DKA risk even with normal glucose (euDKA)',
            'GLP-1 agonists may help in overweight T1D but not standard of care',
            'Metformin does not improve control in T1D (REMOVAL trial showed no benefit on A1c)',
          ],
        },
      ],
      
      statisticalContext: `The DCCT (1983-1993) randomized 1,441 T1D patients to intensive vs conventional therapy:
- Intensive: 3+ insulin injections or pump, frequent SMBG, education
- Results: 76% reduction in retinopathy, 54% nephropathy, 60% neuropathy
- EDIC follow-up: Legacy effect with continued CV and microvascular benefit

Modern CGM data from T1D Exchange:
- Mean TIR: ~50-60% in routine care
- Mean A1c: ~8.0% (suboptimal vs <7% target)
- Severe hypoglycemia: ~8% per year with insulin analogs

Closed-loop trial outcomes (Control-IQ):
- TIR: 71% vs 59% (SAP control)
- A1c: 7.0% vs 7.4%
- Time <70: 1.4% vs 1.8%`,
      
      references: [
        'Herold KC, et al. An Anti-CD3 Antibody, Teplizumab, in Relatives at Risk for Type 1 Diabetes. N Engl J Med. 2019;381(7):603-613.',
        'Tauschmann M, et al. Closed-loop insulin delivery in suboptimally controlled type 1 diabetes: a multicentre, 12-week randomised trial. Lancet. 2018;392(10155):1321-1329.',
        'T1D Exchange. Current State of Type 1 Diabetes Treatment in the United States. Diabetes Care. 2024.',
      ],
    },
    
    // Level 6: Clinical (Physician-level)
    6: {
      summary: `Clinical management of Type 1 diabetes requires a comprehensive approach addressing insulin therapy, glucose monitoring, nutrition, exercise, hypoglycemia prevention, and psychosocial support. Insulin dosing should be individualized based on insulin:carbohydrate ratios (typically 1:8 to 1:20 in children; 1:10 to 1:15 in adults), correction factors (ISF: 30-100 mg/dL drop per unit), and basal requirements (0.3-0.6 units/kg/day total; 40-50% as basal). CGM targets: >70% TIR 70-180 mg/dL, <4% time <70, <1% time <54, coefficient of variation <36%. Annual screening includes albumin-to-creatinine ratio, lipid panel, dilated eye exam, foot exam, and thyroid antibodies/TSH.`,
      
      clinicalApproach: [
        'Initial insulin dosing: Total daily dose (TDD) = 0.3-0.6 units/kg; 40-50% basal, 50-60% bolus',
        'I:C ratio calculation: 500/TDD = grams of carb covered by 1 unit',
        'Correction factor (ISF): 1800/TDD = mg/dL drop per unit (if using rapid analogs)',
        'Basal testing: Overnight and fasting glucose stable indicates appropriate basal rate/dose',
        'Active insulin time: 3-5 hours for rapid analogs; adjust for insulin stacking avoidance',
        'Sick day rules: Never stop insulin; check ketones if glucose >250; hydrate; seek help for DKA signs',
      ],
      
      differentialConsiderations: [
        'Type 2 diabetes: Older, overweight, positive family history, acanthosis nigricans, measurable C-peptide',
        'MODY (Maturity Onset Diabetes of Young): Autosomal dominant, non-insulin dependent initially, mild hyperglycemia',
        'Secondary diabetes: Pancreatitis, cystic fibrosis, hemochromatosis, Cushing syndrome',
        'Stress hyperglycemia: Transient elevation during acute illness, steroids',
        'Neonatal diabetes: Onset <6 months, often genetic (KCNJ11, ABCC8 mutations)',
      ],
      
      guidelines: [
        'ADA Standards of Medical Care in Diabetes 2024 - Children and Adolescents',
        'ISPAD Clinical Practice Consensus Guidelines 2022',
        'Endocrine Society Clinical Practice Guideline for Management of T1D in Adults',
        'AACE/ACE Consensus Statement on Comprehensive T1D Management',
      ],
      
      caseExamples: [
        {
          presentation: '16-year-old female with T1D for 8 years, using MDI (glargine 18u at bedtime, lispro per meals). A1c 8.9%, frequent hypoglycemia at night. CGM shows dawn rise to 250s, then crashes to 60s by 10am.',
          keyFindings: [
            'Nocturnal hypoglycemia with rebound hyperglycemia (Somogyi effect vs dawn phenomenon)',
            'Likely over-basalized with glargine peaking overnight',
            'Morning correction insulin stacking on dawn rise',
          ],
          teachingPoints: [
            'Consider split glargine (2/3 evening, 1/3 morning) or switch to degludec for flatter profile',
            'Reduce basal by 10-20% and shift timing',
            'Use CGM trend arrows to prevent stacking',
            'Consider pump therapy for more precise basal control',
          ],
        },
        {
          presentation: '28-year-old male, newly diagnosed T1D, honeymoon phase. Currently on 6 units glargine daily, no meal insulin. Fasting glucose 120-150, post-meal 180-220. C-peptide 0.8 ng/mL (low-normal).',
          keyFindings: [
            'Significant endogenous insulin production remaining',
            'Post-prandial hyperglycemia indicates need for bolus insulin',
            'Preserve beta cell function with intensive management',
          ],
          teachingPoints: [
            'Start meal insulin: conservative I:C ratio 1:20 (adjust based on results)',
            'Continue basal to suppress hepatic glucose output overnight',
            'Educate on recognizing progression when honeymoon ends',
            'Consider participating in clinical trial if available',
            'Optimize control now to preserve remaining beta cells',
          ],
        },
      ],
      
      references: [
        'American Diabetes Association. Standards of Care in Diabetes—2024. Diabetes Care. 2024;47(Suppl 1).',
        'Codner E, et al. ISPAD Clinical Practice Consensus Guidelines 2022: Glycemic control targets and glucose monitoring for children, adolescents, and young adults with diabetes. Pediatr Diabetes. 2022;23(8):1270-1276.',
        'Peters AL, et al. Diabetes Technology—Continuous Subcutaneous Insulin Infusion Therapy and Continuous Glucose Monitoring in Adults: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab. 2016;101(11):3922-3937.',
      ],
    },
  },
  
  interactions: {
    calculators: [
      {
        name: 'Insulin-to-Carb Ratio Calculator',
        inputs: [
          { name: 'Total Daily Insulin Dose (TDD)', type: 'number', unit: 'units' },
        ],
        formula: '500 / TDD = grams of carbohydrate covered by 1 unit of insulin',
        interpretation: 'Example: TDD = 50 units → 500/50 = 1:10 ratio. This is a starting point and must be individualized based on blood glucose response.',
      },
      {
        name: 'Correction Factor Calculator (ISF)',
        inputs: [
          { name: 'Total Daily Insulin Dose (TDD)', type: 'number', unit: 'units' },
        ],
        formula: '1800 / TDD = mg/dL drop per unit of rapid-acting insulin',
        interpretation: 'Example: TDD = 45 units → 1800/45 = 40 mg/dL per unit. If target is 120 and current is 200, need 2 units correction (80 mg/dL ÷ 40 = 2).',
      },
      {
        name: 'Bolus Insulin Calculator',
        inputs: [
          { name: 'Current Blood Glucose', type: 'number', unit: 'mg/dL' },
          { name: 'Target Blood Glucose', type: 'number', unit: 'mg/dL' },
          { name: 'Carbohydrates to Eat', type: 'number', unit: 'grams' },
          { name: 'I:C Ratio', type: 'select', options: ['1:5', '1:8', '1:10', '1:12', '1:15', '1:20'] },
          { name: 'Correction Factor', type: 'number', unit: 'mg/dL per unit' },
        ],
        formula: 'Carb bolus = Carbs ÷ I:C ratio. Correction = (Current - Target) ÷ Correction Factor. Total = Carb bolus + Correction.',
        interpretation: 'Total bolus covers both the meal and corrects high blood sugar. Do not correct if active insulin still working from previous bolus.',
      },
      {
        name: 'Total Daily Insulin Estimator',
        inputs: [
          { name: 'Body Weight', type: 'number', unit: 'kg' },
          { name: 'Insulin Sensitivity', type: 'select', options: ['High (0.3 u/kg)', 'Average (0.5 u/kg)', 'Low/Resistant (0.7 u/kg)'] },
        ],
        formula: 'Weight × insulin sensitivity factor = estimated TDD',
        interpretation: 'Children often need 0.5-0.8 u/kg; adolescents 0.8-1.2 u/kg (puberty hormones cause resistance); adults 0.4-0.6 u/kg.',
      },
    ],
    
    anatomyPoints: [
      { structure: 'pancreas', focus: 'islets-of-langerhans', description: 'Clusters of cells containing beta cells that are destroyed in T1D' },
      { structure: 'liver', focus: 'hepatocytes', description: 'Major site of glucose storage and release; requires basal insulin to regulate output' },
      { structure: 'skeletal-muscle', focus: 'myocytes', description: 'Primary site of insulin-mediated glucose uptake after meals' },
      { structure: 'adipose-tissue', focus: 'adipocytes', description: 'Fat cells where insulin suppresses breakdown and promotes storage' },
      { structure: 'brain', focus: 'hypothalamus', description: 'Glucose sensing and counter-regulatory hormone control center' },
    ],
    
    relatedLabs: [
      'glucose-fasting',
      'glucose-random',
      'hba1c',
      'c-peptide',
      'insulin-autoantibodies',
      'gad65-antibodies',
      'ia-2-antibodies',
      'znt8-antibodies',
      'ketones-blood',
      'ketones-urine',
    ],
    
    relatedMedications: [
      'insulin-lispro',
      'insulin-aspart',
      'insulin-glulisine',
      'insulin-regular',
      'insulin-nph',
      'insulin-glargine',
      'insulin-detemir',
      'insulin-degludec',
      'glucagon',
      'pramlintide',
    ],
    
    relatedConditions: [
      'diabetic-ketoacidosis',
      'hypoglycemia',
      'diabetic-retinopathy',
      'diabetic-nephropathy',
      'diabetic-neuropathy',
      'celiac-disease',
      'autoimmune-thyroid-disease',
      'addisons-disease',
    ],
  },
  
  quiz: {
    title: 'Type 1 Diabetes Knowledge Assessment',
    passingScore: 80,
    questions: [
      {
        id: 't1d-q1',
        type: 'multiple-choice',
        complexity: 1,
        question: 'What causes Type 1 diabetes?',
        options: [
          'Eating too much sugar',
          'The immune system attacks insulin-producing cells',
          'Being overweight and not exercising',
          'A bacterial infection of the pancreas',
        ],
        correctAnswer: 1,
        explanation: 'Type 1 diabetes is an autoimmune disease where the body\'s immune system mistakenly destroys the beta cells in the pancreas that produce insulin. It is NOT caused by lifestyle factors like diet or exercise.',
      },
      {
        id: 't1d-q2',
        type: 'multiple-choice',
        complexity: 2,
        question: 'A person with Type 1 diabetes weighs 70 kg and uses about 50 units of insulin per day. What is their estimated insulin-to-carb ratio?',
        options: [
          '1:5 (1 unit per 5 grams carbs)',
          '1:10 (1 unit per 10 grams carbs)',
          '1:15 (1 unit per 15 grams carbs)',
          '1:25 (1 unit per 25 grams carbs)',
        ],
        correctAnswer: 1,
        explanation: 'The 500 rule estimates insulin-to-carb ratio: 500 ÷ TDD (total daily dose). 500 ÷ 50 = 10. So approximately 1 unit of insulin covers 10 grams of carbohydrate. This is a starting point and must be individualized.',
      },
      {
        id: 't1d-q3',
        type: 'multiple-choice',
        complexity: 3,
        question: 'What happens in the body during diabetic ketoacidosis (DKA)?',
        options: [
          'Blood sugar becomes dangerously low',
          'The body burns fat for energy and produces ketones, making blood acidic',
          'The kidneys stop working completely',
          'The pancreas suddenly starts producing insulin again',
        ],
        correctAnswer: 1,
        explanation: 'Without insulin, the body cannot use glucose for energy and breaks down fat instead. Fat breakdown produces ketones (acids) that accumulate in the blood, causing metabolic acidosis. DKA is a medical emergency requiring immediate treatment.',
      },
      {
        id: 't1d-q4',
        type: 'case-study',
        complexity: 4,
        question: 'A 14-year-old with T1D has dinner with 75g carbohydrates. Her I:C ratio is 1:12 and correction factor is 50. Current blood sugar is 220 mg/dL and target is 120. How much insulin should she take for this meal?',
        options: [
          '4 units',
          '6 units',
          '8 units',
          '10 units',
        ],
        correctAnswer: 3,
        explanation: 'Carb bolus: 75g ÷ 12 = 6.25 units. Correction: (220-120) ÷ 50 = 2 units. Total: 6.25 + 2 = 8.25, rounded to 8 units.',
      },
      {
        id: 't1d-q5',
        type: 'case-study',
        complexity: 6,
        question: 'A 25-year-old with T1D on an insulin pump presents to the ED with nausea, vomiting, abdominal pain, and fruity breath. Glucose is 380 mg/dL, pH 7.25, bicarbonate 12, ketones positive. She mentions her insulin pump tubing disconnected last night. What is the most appropriate immediate management?',
        options: [
          'Increase basal insulin rate and send home with antiemetics',
          'Subcutaneous insulin aspart 20 units STAT',
          'IV normal saline bolus, IV regular insulin 0.1 units/kg bolus then 0.1 units/kg/hr infusion, electrolyte monitoring',
          'Oral fluids and wait for ketones to clear',
        ],
        correctAnswer: 2,
        explanation: 'This is moderate DKA (pH 7.25, bicarb 12). Management requires aggressive IV fluids for dehydration, IV insulin infusion (not subcutaneous - absorption impaired in DKA), and close monitoring of potassium, glucose, and acid-base status. SC insulin is inadequate for DKA treatment.',
      },
    ],
  },
  
  references: [
    {
      citation: 'Atkinson MA, et al. Type 1 diabetes. Lancet. 2014;383(9911):69-82.',
      doi: '10.1016/S0140-6736(13)60591-7',
    },
    {
      citation: 'Herold KC, et al. An Anti-CD3 Antibody, Teplizumab, in Relatives at Risk for Type 1 Diabetes. N Engl J Med. 2019;381(7):603-613.',
      doi: '10.1056/NEJMoa1902226',
    },
    {
      citation: 'Tauschmann M, et al. Closed-loop insulin delivery in suboptimally controlled type 1 diabetes: a multicentre, 12-week randomised trial. Lancet. 2018;392(10155):1321-1329.',
      doi: '10.1016/S0140-6736(18)31947-0',
    },
    {
      citation: 'American Diabetes Association. Standards of Care in Diabetes—2024: Children and Adolescents. Diabetes Care. 2024;47(Suppl 1).',
      url: 'https://diabetesjournals.org/care/issue/47/Supplement_1',
    },
    {
      citation: 'Codner E, et al. ISPAD Clinical Practice Consensus Guidelines 2022. Pediatr Diabetes. 2022;23(8):1270-1276.',
      doi: '10.1111/pedi.13409',
    },
    {
      citation: 'Diabetes Control and Complications Trial Research Group. The effect of intensive treatment of diabetes on the development and progression of long-term complications in insulin-dependent diabetes mellitus. N Engl J Med. 1993;329(14):977-986.',
      doi: '10.1056/NEJM199309303291401',
    },
    {
      citation: 'Peters AL, et al. Diabetes Technology—Continuous Subcutaneous Insulin Infusion Therapy and Continuous Glucose Monitoring in Adults: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab. 2016;101(11):3922-3937.',
      doi: '10.1210/jc.2016-2534',
    },
    {
      citation: 'Battelino T, et al. Clinical targets for continuous glucose monitoring data interpretation: recommendations from the international consensus on time in range. Diabetes Care. 2019;42(8):1593-1603.',
      doi: '10.2337/dci19-0028',
    },
  ],
  
  resources: [
    {
      title: 'JDRF (Juvenile Diabetes Research Foundation)',
      type: 'website',
      url: 'https://www.jdrf.org',
      description: 'Leading global organization funding T1D research and providing resources',
    },
    {
      title: 'Beyond Type 1',
      type: 'website',
      url: 'https://www.beyondtype1.org',
      description: 'Community and resources for people living with Type 1 diabetes',
    },
    {
      title: 'Children with Diabetes',
      type: 'website',
      url: 'https://www.childrenwithdiabetes.com',
      description: 'Support community for families living with diabetes',
    },
    {
      title: 'ADA Type 1 Diabetes Resources',
      type: 'website',
      url: 'https://www.diabetes.org/diabetes/type-1',
      description: 'American Diabetes Association comprehensive T1D information',
    },
    {
      title: 'T1D Exchange',
      type: 'website',
      url: 'https://t1dexchange.org',
      description: 'Research and quality improvement organization for T1D',
    },
  ],
};

export default type1DiabetesModule;
