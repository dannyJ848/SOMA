/**
 * Type 2 Diabetes Educational Module
 * 
 * Complete educational content across all 6 complexity levels.
 * Mirrors what endocrinologists learn, adapted for patient education.
 */

import type { EducationalModule } from '../types.js';

export const type2DiabetesModule: EducationalModule = {
  id: 'diabetes-type-2-comprehensive',
  type: 'specialty',
  specialty: 'endocrinology',
  
  // Metadata
  title: 'Understanding Type 2 Diabetes',
  description: 'A complete guide to Type 2 diabetes: what it is, how it develops, and how it affects your body. Learn what endocrinologists know, explained at your level.',
  version: '1.0.0',
  lastUpdated: '2026-02-04',
  author: 'Biological Self Medical Education Team',
  
  // Learning structure
  prerequisites: [
    'glucose-metabolism-basics',
    'insulin-action-basics',
    'pancreas-function-overview',
  ],
  
  learningObjectives: [
    'Understand what Type 2 diabetes is and how it differs from Type 1',
    'Learn about insulin resistance and beta-cell function',
    'Recognize how diabetes affects different organs',
    'Understand the role of genetics and lifestyle',
    'Know the importance of glucose monitoring',
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
    // Level 1: Foundation (8th grade)
    1: {
      summary: `Your body needs sugar (glucose) for energy. Normally, a key called "insulin" opens doors on your cells to let sugar in. In Type 2 diabetes, those doors get sticky and don't open as well. Also, your body doesn't make enough keys. So sugar builds up in your blood instead of getting into cells where it's needed.`,
      
      analogy: `Think of insulin like a key to your house, and your cells are the rooms inside. Type 2 diabetes is like two problems happening at once:

1. The locks get rusty (insulin resistance) - even with the key, it's hard to open the door
2. The key factory starts making fewer keys (beta cell decline) - you don't have enough keys for all the doors

Either way, you can't get inside easily, and things pile up outside (sugar in your blood).`,
      
      keyPoints: [
        'Your cells need sugar for energy, like a car needs gas',
        'Insulin is like a key that opens cell doors to let sugar in',
        'In Type 2 diabetes, cells resist insulin - the key doesn't work as well',
        'The pancreas also makes less insulin over time',
        'Sugar stays in blood instead of entering cells - this causes problems',
      ],
      
      visualAid: 'simple-cell-door-diagram',
    },
    
    // Level 2: Developing (10th grade)
    2: {
      summary: `Type 2 diabetes develops when your cells become resistant to insulin's message. Insulin normally binds to receptors on cell surfaces, signaling glucose transporters to move to the cell membrane. In insulin resistance, this signaling is impaired. Meanwhile, beta cells in the pancreas work harder to compensate by producing more insulin, eventually burning out from the increased demand.`,
      
      keyConcepts: [
        {
          term: 'Insulin Resistance',
          explanation: 'Cells don\'t respond normally to insulin. The insulin is present, but cells ignore its signal.',
        },
        {
          term: 'Beta Cells',
          explanation: 'Specialized cells in the pancreas that produce insulin. They are located in clusters called Islets of Langerhans.',
        },
        {
          term: 'Glucose Transporters (GLUT4)',
          explanation: 'Proteins that move glucose from the blood into cells. Insulin signals them to move to the cell surface.',
        },
        {
          term: 'Pancreas',
          explanation: 'An organ behind your stomach that produces insulin and digestive enzymes.',
        },
      ],
      
      keyPoints: [
        'Insulin binds to cell surface receptors like a key fitting in a lock',
        'This triggers glucose transporters (GLUT4) to move to the cell membrane',
        'In insulin resistance, this signal is weak - cells don\'t "hear" the insulin well',
        'The pancreas compensates by making more insulin (hyperinsulinemia)',
        'Beta cells eventually fail from overwork, producing less insulin',
        'High blood sugar (hyperglycemia) results from both problems',
      ],
      
      howItWorks: `1. You eat food containing carbohydrates
2. Carbs are broken down into glucose (sugar)
3. Glucose enters your bloodstream
4. Pancreas releases insulin in response
5. Insulin should tell cells to absorb glucose
6. In Type 2 diabetes, cells resist this signal
7. Glucose stays in blood, causing high blood sugar`,
    },
    
    // Level 3: Standard (12th grade)
    3: {
      summary: `Type 2 diabetes mellitus is characterized by two core defects: insulin resistance in peripheral tissues (skeletal muscle, liver, and adipose tissue) and progressive beta-cell dysfunction. The "twin cycle hypothesis" suggests ectopic fat accumulation in liver and pancreas drives both processes. Understanding these mechanisms helps explain why lifestyle interventions can sometimes reverse the condition.`,
      
      mechanisms: [
        {
          name: 'Peripheral Insulin Resistance',
          description: 'Decreased glucose uptake in skeletal muscle, increased hepatic glucose production (gluconeogenesis), and impaired suppression of lipolysis in adipose tissue.',
        },
        {
          name: 'Beta-Cell Dysfunction',
          description: 'Progressive failure of pancreatic beta cells to produce adequate insulin. Driven by glucotoxicity (toxic effects of high glucose) and lipotoxicity (toxic effects of fatty acids).',
        },
        {
          name: 'Hepatic Steatosis (Fatty Liver)',
          description: 'Fat accumulation in the liver drives excessive glucose production and VLDL (bad cholesterol) secretion, creating a vicious cycle.',
        },
        {
          name: 'Ectopic Lipid Storage',
          description: 'Fat stored in organs where it doesn't belong (liver, pancreas, muscle) interferes with insulin signaling and beta-cell function.',
        },
      ],
      
      clinicalCorrelates: [
        'Fasting hyperglycemia results primarily from hepatic glucose overproduction',
        'Postprandial hyperglycemia (after meals) results from impaired peripheral glucose uptake',
        'Dyslipidemia (abnormal cholesterol) stems from altered lipid metabolism',
        'Weight loss often improves insulin sensitivity dramatically',
        'Some patients can achieve remission through significant weight loss',
      ],
      
      normalVsAbnormal: {
        normal: 'Insulin effectively suppresses liver glucose production and promotes glucose uptake in muscle and fat. Beta cells produce appropriate amounts of insulin. Blood glucose remains 70-100 mg/dL fasting.',
        abnormal: 'Insulin fails to suppress liver glucose production. Muscle and fat resist insulin\'s signal. Beta cells produce insufficient insulin despite high demand. Blood glucose exceeds 126 mg/dL fasting or 200 mg/dL after meals.',
        whyItMatters: 'Persistent hyperglycemia damages blood vessels, nerves, kidneys, eyes, and heart. Understanding the mechanism reveals why controlling blood sugar prevents complications.',
      },
    },
    
    // Level 4: Advanced (College)
    4: {
      summary: `The pathophysiology of Type 2 diabetes involves complex interactions between genetic susceptibility, epigenetic modifications, and environmental factors. Key molecular mechanisms include serine phosphorylation of IRS-1/2 impairing PI3K activation, inflammatory signaling via JNK and IKKβ/NF-κB pathways, and endoplasmic reticulum stress in beta cells. The adipose tissue expands beyond its vascular capacity, leading to hypoxia, inflammation, and altered adipokine secretion.`,
      
      molecularMechanisms: [
        {
          pathway: 'Insulin Signaling Cascade',
          defect: 'Serine phosphorylation of IRS-1/2 instead of tyrosine phosphorylation impairs PI3K (phosphoinositide 3-kinase) activation',
          consequence: 'Reduced AKT activation → decreased GLUT4 translocation → impaired glucose uptake',
        },
        {
          pathway: 'Inflammatory Signaling',
          defect: 'Activation of JNK (c-Jun N-terminal kinase) and IKKβ (IκB kinase β) by cytokines (TNF-α, IL-6) and lipids',
          consequence: 'Serine phosphorylation of IRS proteins → insulin resistance; NF-κB activation → chronic inflammation',
        },
        {
          pathway: 'ER Stress',
          defect: 'Chronic high demand for insulin synthesis overwhelms the endoplasmic reticulum protein folding capacity',
          consequence: 'Unfolded protein response (UPR) activation → initially protective, eventually triggers beta-cell apoptosis',
        },
        {
          pathway: 'Adipose Tissue Dysfunction',
          defect: 'Expansion beyond vascular supply causes hypoxia; macrophage infiltration increases inflammation',
          consequence: 'Altered adipokine profile (decreased adiponectin, increased resistin); elevated circulating free fatty acids',
        },
      ],
      
      pathways: [
        {
          name: 'Glucose-Stimulated Insulin Secretion (GSIS)',
          steps: [
            'Glucose enters beta cell via GLUT2',
            'Glucose phosphorylated by glucokinase',
            'Glycolysis and mitochondrial oxidation increase ATP',
            'ATP/ADP ratio rises, closing K-ATP channels',
            'Membrane depolarization opens voltage-gated Ca2+ channels',
            'Calcium influx triggers insulin vesicle exocytosis',
          ],
          regulation: 'In Type 2 diabetes, glucotoxicity and lipotoxicity impair multiple steps, particularly mitochondrial function and vesicle trafficking',
        },
        {
          name: 'Gluconeogenesis in Liver',
          steps: [
            'Pyruvate → oxaloacetate (pyruvate carboxylase)',
            'Oxaloacetate → phosphoenolpyruvate (PEPCK)',
            'Fructose-1,6-bisphosphate → fructose-6-phosphate (FBPase)',
            'Glucose-6-phosphate → glucose (G6Pase)',
          ],
          regulation: 'Insulin normally suppresses PEPCK and G6Pase expression. In insulin resistance, this suppression fails → excessive glucose production',
        },
      ],
      
      references: [
        'Kahn SE, Cooper ME, Del Prato S. Pathophysiology and treatment of type 2 diabetes: perspectives on the past, present, and future. Lancet. 2014;383(9922):1068-1083.',
        'Taylor R. Type 2 diabetes: etiology and reversibility. Diabetes Care. 2013;36(4):1047-1055.',
        'Eckel RH, et al. Obesity and type 2 diabetes: what can be unified and what needs to be individualized? J Clin Endocrinol Metab. 2011;96(6):1654-1663.',
      ],
    },
    
    // Level 5: Expert (Graduate)
    5: {
      summary: `Contemporary understanding positions Type 2 diabetes as a heterogeneous syndrome with variable contributions from insulin resistance and beta-cell failure across populations. Genome-wide association studies have identified >400 loci, yet explain <15% of heritability, suggesting importance of epigenetic modifications, microbiome composition, and intrauterine programming. The "personalized medicine" approach seeks to phenotype patients (SIDD, SIRD, MOD, MARD) to guide targeted therapy selection.`,
      
      researchFrontiers: [
        'Precision medicine: Phenotype-based treatment selection using clustering algorithms (Ahlqvist et al. classification)',
        'Beta-cell regeneration strategies: GLP-1 receptor agonists, GABA signaling, inflammation modulation',
        'Incretin-based therapies and gastric bypass mechanisms: Gut-brain-pancreas axis',
        'Microbiome modulation: Fecal transplant, probiotics, prebiotics for metabolic improvement',
        'Epigenetic interventions: Histone deacetylase inhibitors, DNA methylation modifiers',
        'Immunometabolism: Targeting macrophage polarization in adipose tissue',
      ],
      
      controversies: [
        {
          topic: 'Diabetes Reversibility vs Remission',
          perspectives: [
            'Taylor Twin Cycle Hypothesis: Reversal is possible with substantial weight loss removing ectopic fat',
            'Critics argue "remission" not "cure" - beta-cell dysfunction may remain subclinical',
            'Duration of diabetes matters - early intervention more likely successful',
          ],
        },
        {
          topic: 'Macrovascular Benefit of Intensive Glucose Control',
          perspectives: [
            'UKPDS legacy effect: Early tight control reduces long-term complications',
            'ACCORD raised concerns about harm in high-risk patients with aggressive targets',
            'Individualization based on age, comorbidities, and diabetes duration is now standard',
          ],
        },
        {
          topic: 'Low-Carb vs Low-Fat Diet',
          perspectives: [
            'Low-carb approaches show superior short-term glycemic control',
            'Long-term adherence and cardiovascular outcomes less clear',
            'Individual metabolic phenotypes may determine optimal diet composition',
          ],
        },
      ],
      
      statisticalContext: `Type 2 diabetes heritability is estimated at 30-70%, yet GWAS loci explain only 10-15% of this. This "missing heritability" suggests:
- Rare variants with large effects not captured by GWAS
- Gene-environment interactions
- Epigenetic inheritance
- Parent-of-origin effects
- Mitochondrial DNA variation

The DIAMANTE consortium meta-analysis (2022) of ~1 million individuals identified 611 loci, yet polygenic risk scores still have limited clinical utility for prediction.`,
      
      references: [
        'Ahlqvist E, et al. Novel subgroups of adult-onset diabetes and their association with outcomes: a data-driven cluster analysis of six variables. Lancet Diabetes Endocrinol. 2018;6(5):361-369.',
        'Mahajan A, et al. Multi-ancestry genetic study of type 2 diabetes highlights the power of diverse populations for discovery and translation. Nat Genet. 2022;54(5):560-572.',
        'Zeevi D, et al. Personalized Nutrition by Prediction of Glycemic Responses. Cell. 2015;163(5):1079-1094.',
      ],
    },
    
    // Level 6: Clinical (Physician-level)
    6: {
      summary: `From a clinical perspective, Type 2 diabetes represents a heterogeneous syndrome requiring individualized phenotyping. The ADA/EASD algorithm provides evidence-based guidance, but emerging data supports precision medicine approaches. Treatment selection should consider the predominant defect (insulin resistance vs. secretion), cardiovascular/renal comorbidities, hypoglycemia risk, weight goals, and patient preferences. First-line metformin remains standard, but early combination therapy and the cardiorenal protective benefits of SGLT2 inhibitors and GLP-1 receptor agonists have transformed management priorities.`,
      
      clinicalApproach: [
        'Phenotype-based classification using Ahlqvist clusters: Severe Insulin-Deficient Diabetes (SIDD), Severe Insulin-Resistant Diabetes (SIRD), Mild Obesity-Related Diabetes (MOD), Mild Age-Related Diabetes (MARD)',
        'Individualized HbA1c targets based on age, comorbidities, diabetes duration, and hypoglycemia risk',
        'Cardiorenal protection as primary consideration independent of glucose control',
        'Weight-centric treatment paradigms: Prioritize agents promoting weight loss',
        'Early combination therapy rather than sequential add-on to prevent glucotoxicity',
        'Continuous glucose monitoring for appropriate candidates to optimize time-in-range',
      ],
      
      differentialConsiderations: [
        'Type 1 diabetes (GAD65, IA-2, ZnT8 antibodies; low C-peptide)',
        'Latent Autoimmune Diabetes in Adults (LADA)',
        'Maturity Onset Diabetes of the Young (MODY) - consider in lean, young, strong family history',
        'Secondary diabetes: Cushing syndrome, acromegaly, hemochromatosis, pancreatitis',
        'Drug-induced: Glucocorticoids, atypical antipsychotics, protease inhibitors',
        'Gestational diabetes history (indicates beta-cell vulnerability)',
      ],
      
      guidelines: [
        'ADA Standards of Medical Care in Diabetes 2024',
        'EASD/ADA Consensus Algorithm 2018 (updated 2022)',
        'ADA/EASD Precision Medicine in Diabetes Consensus Report 2023',
        'KDIGO 2022 Diabetes in CKD Guideline',
      ],
      
      caseExamples: [
        {
          presentation: '45-year-old Hispanic male, BMI 34, HbA1c 8.5%, no complications. Father with T2DM. Works construction, diet high in carbohydrates.',
          keyFindings: [
            'Likely MOD phenotype given age and obesity',
            'High cardiovascular risk due to ethnicity and BMI',
            'Job involves physical activity - lifestyle intervention feasible',
          ],
          teachingPoints: [
            'Metformin first-line unless contraindicated',
            'Consider GLP-1 RA or SGLT2i for weight and CV benefit',
            'Early nutrition consultation - construction schedules challenging',
            'Screen for sleep apnea given BMI',
          ],
        },
        {
          presentation: '68-year-old female, BMI 24, HbA1c 9.2%, eGFR 45, UACR 350. History of MI 2 years ago.',
          keyFindings: [
            'MARD phenotype likely given age and normal BMI',
            'Established ASCVD and CKD stage 3b',
            'Beta-cell dysfunction prominent over insulin resistance',
          ],
          teachingPoints: [
            'SGLT2 inhibitor mandatory for renal protection (if eGFR permits)',
            'GLP-1 RA with proven CV benefit (liraglutide, semaglutide)',
            'Metformin dose adjust for eGFR',
            'Aspirin, statin intensification for secondary prevention',
            'Consider insulin earlier given beta-cell likely failing',
          ],
        },
      ],
      
      references: [
        'American Diabetes Association. Standards of Care in Diabetes—2024. Diabetes Care. 2024;47(Suppl 1):S1-S321.',
        'Davies MJ, et al. Management of Hyperglycemia in Type 2 Diabetes, 2022. A Consensus Report. Diabetes Care. 2022;45(11):2753-2786.',
        'Chung WK, et al. Precision Medicine in Diabetes: A Consensus Report From the American Diabetes Association (ADA) and the European Association for the Study of Diabetes (EASD). Diabetes Care. 2023;46(8):1559-1583.',
      ],
    },
  },
  
  // Interactive elements
  interactions: {
    anatomyPoints: [
      { structure: 'pancreas', focus: 'islets-of-langerhans', description: 'Beta cells in the islets produce insulin' },
      { structure: 'liver', focus: 'hepatocytes', description: 'The liver produces glucose and is a major site of insulin action' },
      { structure: 'skeletal-muscle', focus: 'myocytes', description: 'Muscle takes up glucose in response to insulin' },
      { structure: 'adipose-tissue', focus: 'adipocytes', description: 'Fat tissue stores energy and secretes hormones affecting metabolism' },
    ],
    
    relatedLabs: [
      'glucose-fasting',
      'glucose-pp',
      'hba1c',
      'insulin',
      'c-peptide',
      'lipid-panel',
      'microalbumin',
    ],
    
    relatedMedications: [
      'metformin',
      'insulin',
      'sglt2-inhibitors',
      'glp1-receptor-agonists',
      'sulfonylureas',
      'dpp4-inhibitors',
    ],
    
    relatedConditions: [
      'metabolic-syndrome',
      'diabetic-neuropathy',
      'diabetic-nephropathy',
      'diabetic-retinopathy',
      'cardiovascular-disease',
      'fatty-liver-disease',
    ],
  },
  
  // Self-assessment
  quiz: {
    title: 'Test Your Understanding',
    questions: [
      {
        id: 't2dm-q1',
        type: 'multiple-choice',
        complexity: 1,
        question: 'What is insulin\'s main job in the body?',
        options: [
          'Lower blood pressure',
          'Help sugar enter cells for energy',
          'Fight infections',
          'Digest food',
        ],
        correctAnswer: 1,
        explanation: 'Insulin acts like a key, allowing glucose (sugar) to enter your cells where it can be used for energy. Without insulin or with insulin resistance, sugar stays in the blood.',
      },
      {
        id: 't2dm-q2',
        type: 'multiple-choice',
        complexity: 2,
        question: 'What happens to beta cells in Type 2 diabetes over time?',
        options: [
          'They multiply to make more insulin',
          'They become resistant to glucose',
          'They burn out from overwork',
          'They move to the liver',
        ],
        correctAnswer: 2,
        explanation: 'Beta cells initially compensate for insulin resistance by working harder and producing more insulin. However, they eventually exhaust and fail from this chronic overwork.',
      },
      {
        id: 't2dm-q3',
        type: 'multiple-choice',
        complexity: 3,
        question: 'According to the twin cycle hypothesis, what primarily drives both insulin resistance and beta-cell dysfunction?',
        options: [
          'Genetic mutations',
          'Viral infections',
          'Ectopic fat accumulation',
          'Autoimmune attacks',
        ],
        correctAnswer: 2,
        explanation: 'Taylor\'s twin cycle hypothesis proposes that fat accumulation in the liver (hepatic steatosis) and pancreas drives both insulin resistance and beta-cell dysfunction, creating a vicious cycle.',
      },
      {
        id: 't2dm-q4',
        type: 'multiple-choice',
        complexity: 4,
        question: 'What molecular change impairs insulin signaling in insulin resistance?',
        options: [
          'Tyrosine phosphorylation of IRS-1',
          'Serine phosphorylation of IRS-1/2',
          'Increased PI3K activation',
          'Enhanced GLUT4 translocation',
        ],
        correctAnswer: 1,
        explanation: 'In insulin resistance, inflammatory kinases (JNK, IKKβ) cause serine phosphorylation of IRS proteins instead of the normal tyrosine phosphorylation. This impairs PI3K activation and downstream signaling.',
      },
      {
        id: 't2dm-q5',
        type: 'multiple-choice',
        complexity: 6,
        question: 'According to current ADA/EASD guidelines, what is the primary consideration when selecting diabetes medications for a patient with established cardiovascular disease?',
        options: [
          'Lowest cost option',
          'Greatest HbA1c reduction',
          'Proven cardiovascular benefit',
          'Lowest risk of hypoglycemia only',
        ],
        correctAnswer: 2,
        explanation: 'For patients with established ASCVD, guidelines prioritize agents with proven cardiovascular benefit (certain SGLT2 inhibitors and GLP-1 RAs) independent of their glucose-lowering effects or cost.',
      },
    ],
    passingScore: 80,
  },
  
  // References
  references: [
    {
      citation: 'Kahn SE, Cooper ME, Del Prato S. Pathophysiology and treatment of type 2 diabetes: perspectives on the past, present, and future. Lancet. 2014;383(9922):1068-1083.',
      doi: '10.1016/S0140-6736(13)62154-6',
    },
    {
      citation: 'Taylor R. Type 2 diabetes: etiology and reversibility. Diabetes Care. 2013;36(4):1047-1055.',
      doi: '10.2337/dc12-1805',
    },
    {
      citation: 'American Diabetes Association. Standards of Care in Diabetes—2024. Diabetes Care. 2024;47(Suppl 1).',
      url: 'https://diabetesjournals.org/care/issue/47/Supplement_1',
    },
  ],
  
  resources: [
    {
      title: 'What is Diabetes? (ADA)',
      type: 'website',
      url: 'https://www.diabetes.org/diabetes',
      description: 'Comprehensive overview from the American Diabetes Association',
    },
    {
      title: 'Diabetes UK Learning Zone',
      type: 'website',
      url: 'https://www.diabetes.org.uk/learning-zone',
      description: 'Interactive learning for people with diabetes',
    },
  ],
};

export default type2DiabetesModule;
