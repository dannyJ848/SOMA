import type { EducationalModule } from '../../types';

/**
 * Comprehensive IBS (Irritable Bowel Syndrome) Educational Module
 * 
 * Covers Rome IV criteria, subtypes (IBS-C, IBS-D, IBS-M), gut-brain axis,
 * FODMAPs, microbiome, and treatment options across all complexity levels.
 */

export const ibsModule: EducationalModule = {
  id: 'gastro-ibs-comprehensive',
  specialty: 'gastroenterology',
  type: 'specialty',
  
  // Metadata
  title: 'Understanding IBS (Irritable Bowel Syndrome)',
  description: 'A comprehensive guide to IBS including diagnostic criteria, subtypes, the gut-brain connection, dietary management with FODMAPs, microbiome factors, and evidence-based treatments.',
  version: '1.0.0',
  lastUpdated: '2025-02-06',
  author: 'Biological Self Medical Education',
  
  // Learning structure
  prerequisites: [],
  learningObjectives: [
    'Understand the Rome IV diagnostic criteria for IBS',
    'Differentiate between IBS-C, IBS-D, and IBS-M subtypes',
    'Explain the gut-brain axis and its role in IBS',
    'Apply the low-FODMAP diet principles',
    'Describe the gut microbiome connection to IBS',
    'Evaluate pharmacological and psychological treatment options',
  ],
  estimatedTime: {
    1: '20-25 minutes',
    2: '25-30 minutes',
    3: '30-35 minutes',
    4: '35-40 minutes',
    5: '40-45 minutes',
    6: '45-50 minutes',
  },
  
  // Content by complexity level
  content: {
    // Level 1: Foundation
    1: {
      summary: 'IBS is a common digestive condition causing stomach pain, bloating, and changes in bowel habits. It is not dangerous but can significantly affect quality of life.',
      analogy: 'Think of your digestive system like a highway. In IBS, the traffic signals are confused—sometimes cars move too fast (diarrhea), sometimes too slow (constipation), and sometimes the road gets congested and painful (cramping and bloating). The road itself is fine, but the signals controlling traffic are not working smoothly.',
      keyPoints: [
        'IBS causes stomach pain and changes in bowel habits',
        'It is a real medical condition, not "just in your head"',
        'There are three main types: constipation-predominant, diarrhea-predominant, and mixed',
        'Stress and certain foods can trigger symptoms',
        'IBS does not cause permanent damage or lead to cancer',
        'Management focuses on diet, stress reduction, and sometimes medication',
      ],
      story: 'Meet Sarah, a 28-year-old teacher. She often feels bloated after lunch and sometimes has urgent bathroom needs during her afternoon classes. She has noticed that pizza and soda make it worse. After talking to her doctor, Sarah learned she has IBS. With some dietary changes and stress management, she now feels much more in control.',
    },
    
    // Level 2: Developing
    2: {
      summary: 'IBS is a functional gastrointestinal disorder where the gut and brain do not communicate properly. It is diagnosed based on symptoms rather than specific tests, and different subtypes require different approaches.',
      keyConcepts: [
        {
          term: 'Functional Disorder',
          explanation: 'A condition where the organ looks normal but does not work properly. In IBS, the intestines appear healthy but function abnormally.',
        },
        {
          term: 'Gut-Brain Axis',
          explanation: 'The two-way communication system between your digestive tract and your brain. In IBS, these signals can become exaggerated.',
        },
        {
          term: 'Visceral Hypersensitivity',
          explanation: 'When the intestines are extra sensitive to normal sensations like gas or digestion, causing pain from things that would not bother most people.',
        },
        {
          term: 'Motility',
          explanation: 'The movement of food through your digestive system. In IBS, this movement can be too fast, too slow, or irregular.',
        },
      ],
      keyPoints: [
        'IBS is diagnosed using the Rome IV criteria: recurrent abdominal pain at least 1 day per week for 3 months, related to bowel movements',
        'IBS-C: Mostly constipation; IBS-D: Mostly diarrhea; IBS-M: Mixed pattern',
        'The gut has its own nervous system (the enteric nervous system) sometimes called the "second brain"',
        'Triggers include stress, certain foods, hormonal changes, and infections',
        'IBS affects 10-15% of people worldwide, more commonly women',
        'There is no cure, but symptoms can be managed effectively',
      ],
      howItWorks: 'Your digestive system is controlled by nerves that communicate with your brain. In IBS, this communication system becomes overly sensitive. Normal digestive processes—like moving gas through your intestines—can trigger pain signals. Meanwhile, the muscles in your intestinal walls may contract too strongly, too weakly, or at the wrong times, causing diarrhea, constipation, or both.',
    },
    
    // Level 3: Standard
    3: {
      summary: 'IBS is a functional bowel disorder characterized by abdominal pain and altered bowel habits. Diagnosis follows Rome IV criteria, with classification into subtypes based on stool patterns. Pathophysiology involves dysmotility, visceral hypersensitivity, gut-brain axis dysfunction, and post-infectious changes.',
      mechanisms: [
        {
          name: 'Rome IV Diagnostic Criteria',
          description: 'Recurrent abdominal pain at least 1 day per week in the last 3 months, associated with 2+ of: related to defecation, change in stool frequency, or change in stool form. Must have symptom onset at least 6 months before diagnosis.',
        },
        {
          name: 'IBS Subtypes (Bristol Stool Scale)',
          description: 'IBS-C: >25% bowel movements Bristol 1-2 (hard/lumpy) and <25% Bristol 6-7; IBS-D: >25% Bristol 6-7 (mushy/watery) and <25% Bristol 1-2; IBS-M: >25% both hard and loose stools.',
        },
        {
          name: 'Enteric Nervous System Dysfunction',
          description: 'The ENS contains 100+ million neurons. In IBS, altered neurotransmitter signaling (serotonin, CGRP, substance P) disrupts motility and sensation.',
        },
        {
          name: 'Low-Grade Inflammation',
          description: 'Some IBS patients show increased mast cells and lymphocytes in intestinal mucosa, particularly post-infectious IBS (PI-IBS).',
        },
      ],
      clinicalCorrelates: [
        'IBS commonly coexists with other functional disorders: fibromyalgia, chronic fatigue, chronic pelvic pain, temporomandibular joint disorder',
        'Psychiatric comorbidities: anxiety and depression rates 2-3x higher in IBS patients',
        'Post-infectious IBS develops in 10-30% of patients after bacterial gastroenteritis',
        'Overlap with functional dyspepsia occurs in 30-40% of patients',
        'Quality of life impact comparable to diabetes, depression, and heart disease',
      ],
      normalVsAbnormal: {
        normal: 'Digestive nerves send appropriate signals; intestinal muscles contract rhythmically; stool passes comfortably; gas causes minimal discomfort',
        abnormal: 'Nerves amplify normal sensations into pain; muscle contractions are disorganized; urgency and incomplete evacuation occur; bloating is frequent and severe',
        whyItMatters: 'Understanding the functional nature helps patients accept that while serious conditions are ruled out, their symptoms are real and treatable',
      },
    },
    
    // Level 4: Advanced
    4: {
      summary: 'IBS pathophysiology involves complex interactions at molecular and cellular levels. Serotonin signaling dysregulation, immune activation, microbiome alterations, and central nervous system processing abnormalities contribute to symptom generation.',
      molecularMechanisms: [
        {
          pathway: 'Serotonin (5-HT) Signaling',
          defect: 'Altered 5-HT synthesis, receptor sensitivity, and reuptake; SERT expression changes',
          consequence: 'IBS-D: excess 5-HT accelerates transit; IBS-C: reduced 5-HT slows transit',
        },
        {
          pathway: 'Mast Cell Activation',
          defect: 'Increased mucosal mast cells releasing histamine, tryptase, and cytokines',
          consequence: 'Sensitizes visceral afferent nerves; increases intestinal permeability',
        },
        {
          pathway: 'Tight Junction Disruption',
          defect: 'Claudin and occludin expression changes increase intestinal permeability',
          consequence: '"Leaky gut" allows antigen exposure; immune activation; symptom generation',
        },
        {
          pathway: 'Bile Acid Malabsorption',
          defect: 'Excess bile acids reach colon (Type 1: ileal disease; Type 2: primary; Type 3: post-cholecystectomy/other)',
          consequence: 'Secretory diarrhea; colonic irritation; IBS-D phenotype',
        },
        {
          pathway: 'SCFA Production and Sensing',
          defect: 'Altered gut microbiome fermentation produces different short-chain fatty acid profiles',
          consequence: 'Butyrate, acetate, propionate modulate immune function and gut motility abnormally',
        },
      ],
      pathways: [
        {
          name: 'Brain-Gut-Microbiome Axis',
          steps: [
            'Gut microbiota produce neurotransmitters and metabolites',
            'Vagal afferents signal to brainstem and limbic system',
            'Hypothalamic-pituitary-adrenal axis activation releases cortisol',
            'Stress hormones alter gut permeability and motility',
            'Changed gut environment alters microbiome composition',
          ],
          regulation: 'Bidirectional signaling through neural, hormonal, and immune pathways creates feedback loops that can amplify or dampen symptoms',
        },
        {
          name: 'FODMAP Fermentation Pathway',
          steps: [
            'Poorly absorbed carbohydrates reach colon',
            'Bacterial fermentation produces gas (H2, CH4, CO2)',
            'Osmotic water retention increases intestinal volume',
            'Visceral distension activates mechanoreceptors',
            'Symptoms: bloating, pain, altered motility',
          ],
          regulation: 'Dietary restriction reduces substrate; microbiome modulation may improve tolerance over time',
        },
        {
          name: 'Visceral Pain Pathway',
          steps: [
            'Intestinal stimuli activate nociceptors',
            'Signals travel via spinal cord to thalamus',
            'Anterior cingulate cortex processes pain affect',
            'Prefrontal cortex modulates pain perception',
            'Descending pathways can amplify or inhibit signals',
          ],
          regulation: 'Central sensitization lowers pain threshold; cognitive/emotional factors modulate perception',
        },
      ],
      references: [
        'Mayer EA. Gut feelings: the emerging biology of gut-brain communication. Nat Rev Neurosci. 2011.',
        'Enck P, et al. Irritable bowel syndrome. Nat Rev Dis Primers. 2016.',
        'Chey WD, et al. Irritable bowel syndrome: a clinical review. JAMA. 2015.',
      ],
    },
    
    // Level 5: Expert
    5: {
      summary: 'Current research frontiers include the role of gut virome, postbiotics, psychobiotics, and precision medicine approaches. Controversies exist around SIBO as a cause versus association, and the clinical significance of intestinal permeability changes.',
      researchFrontiers: [
        'Gut virome: Bacteriophages and eukaryotic viruses may influence IBS pathophysiology through microbiome modulation',
        'Postbiotics: Bacterial metabolites (butyrate, indole-3-lactic acid) show therapeutic potential without live organism concerns',
        'Psychobiotics: Specific probiotic strains with psychotropic effects through vagal and immune pathways',
        'MicroRNA signatures: Non-coding RNAs as diagnostic biomarkers and therapeutic targets',
        'Fecal microbiota transplantation: Mixed results in IBS; donor selection and preparation methods under investigation',
        'Digital therapeutics: Smartphone-based CBT and biofeedback apps show efficacy in clinical trials',
        'Pharmacogenomics: Genetic variants affecting drug metabolism may guide individualized therapy selection',
        'Neuroimaging: Resting-state fMRI reveals distinct brain signatures in IBS subtypes',
      ],
      controversies: [
        {
          topic: 'SIBO and IBS Relationship',
          perspectives: [
            'SIBO is a common underlying cause of IBS symptoms (Pimentel hypothesis)',
            'SIBO and IBS are distinct entities with some overlap; breath testing has poor specificity',
            '"SIBO" in IBS represents dysbiosis rather than true bacterial overgrowth',
          ],
        },
        {
          topic: 'Gluten Sensitivity in IBS',
          perspectives: [
            'Non-celiac gluten sensitivity explains some IBS cases; gluten-free diet helps subset of patients',
            'FODMAPs (fructans) in wheat are the true trigger, not gluten protein',
            'Nocebo effect accounts for much of the perceived gluten sensitivity',
          ],
        },
        {
          topic: 'Leaky Gut Clinical Significance',
          perspectives: [
            'Intestinal permeability changes are real and mechanistically important in IBS',
            'Current tests (lactulose/mannitol ratio) lack standardization and clinical utility',
            'Permeability changes are epiphenomena rather than therapeutic targets',
          ],
        },
        {
          topic: 'Antibiotic Therapy',
          perspectives: [
            'Rifaximin is evidence-based for IBS-D and IBS-M per FDA approval',
            'Repeated courses raise concerns about resistance and long-term microbiome effects',
            'Poor responders may have different underlying pathophysiology',
          ],
        },
      ],
      statisticalContext: 'Placebo response rates in IBS trials range 30-50%, among the highest in medicine. This reflects genuine neurobiological placebo mechanisms, regression to the mean, and natural symptom fluctuation. The FDA now requires 12-week primary endpoints and multiple endpoints (pain and stool consistency) for approval. Number needed to treat (NNT) for effective therapies: rifaximin (~10), eluxadoline (~8), alosetron (~6), peppermint oil (~5), CBT (~4).',
      references: [
        'Lacy BE, et al. ACG Clinical Guideline: Management of Irritable Bowel Syndrome. Am J Gastroenterol. 2021.',
        'Black CJ, et al. Efficacy of pharmacological therapies in patients with IBS with diarrhoea or mixed stool pattern. Lancet Gastroenterol Hepatol. 2020.',
        'Ford AC, et al. Efficacy of prebiotics, probiotics, and synbiotics in irritable bowel syndrome. Systematic review and meta-analysis. Gastroenterology. 2014.',
        'Pimentel M, et al. Methanogenic flora and IBS: a complex relationship. Therap Adv Gastroenterol. 2020.',
      ],
    },
    
    // Level 6: Clinical
    6: {
      summary: 'IBS diagnosis requires careful exclusion of organic disease while avoiding excessive testing. Management follows a stepped approach from dietary and lifestyle interventions through pharmacotherapy to psychological therapies. Subtype-specific treatments improve outcomes.',
      clinicalApproach: [
        'Comprehensive history: Rome IV criteria, stool pattern (Bristol scale), red flags, psychosocial factors, prior treatments',
        'Physical examination: Focus on abdominal masses, organomegaly, rectal exam',
        'Targeted testing: CBC, CRP or fecal calprotectin, celiac serology (IBS-D/M); consider TSH, stool studies based on presentation',
        'Colonoscopy indications: Age >45, alarm features, family history, unexplained weight loss, anemia',
        'Subtype classification guides therapy selection: IBS-C, IBS-D, or IBS-M',
        'Assess IBS severity: Mild (does not interfere with daily activities), Moderate (some limitation), Severe (significant impairment)',
        'Evaluate psychological comorbidities: Anxiety, depression, somatization affect treatment approach',
        'Set realistic expectations: Chronic condition with relapsing-remitting course; goal is symptom control and quality of life',
      ],
      differentialConsiderations: [
        'Celiac disease: Screen all IBS-D/M with tTG-IgA and total IgA',
        'Inflammatory bowel disease: Fecal calprotectin >50 μg/g suggests IBD over IBS',
        'Microscopic colitis: Consider in older adults with IBS-D; diagnosis requires colonoscopy with biopsies',
        'Bile acid malabsorption: SeHCAT scan or therapeutic trial of bile acid sequestrant',
        'Exocrine pancreatic insufficiency: Fecal elastase if steatorrhea or risk factors',
        'SIBO: Breath testing controversial; consider if bloating predominant with risk factors',
        'Pelvic floor dysfunction: Dyssynergic defecation mimics IBS-C; anorectal manometry with balloon expulsion test',
        'Endometriosis: Cyclical symptoms, dyspareunia, infertility in women',
        'Colorectal cancer: Age-appropriate screening, alarm symptoms mandate evaluation',
      ],
      guidelines: [
        'ACG 2021: First-line therapy includes soluble fiber (psyllium), not insoluble fiber; peppermint oil for IBS overall',
        'ACG 2021: Gut-directed hypnotherapy and CBT have strong evidence; recommend for moderate-severe symptoms',
        'ACG 2021: Rifaximin for IBS-D; linaclotide, plecanatide, lubiprostone for IBS-C',
        'Rome Foundation: Low-FODMAP diet effective with dietitian guidance; avoid long-term restriction',
        'NICE UK: Assure patient IBS is real; avoid unnecessary testing; stepped care approach',
        'FDA-approved: Rifaximin (IBS-D), eluxadoline (IBS-D), alosetron (severe IBS-D in women only), linaclotide (IBS-C), plecanatide (IBS-C), lubiprostone (IBS-C in women)',
      ],
      caseExamples: [
        {
          presentation: '32-year-old female with abdominal cramping, bloating, and loose stools 3-4 times daily for 2 years. Worse with stress and dairy. No nocturnal symptoms, no weight loss. Family history of IBS in mother.',
          keyFindings: [
            'Rome IV criteria met: Pain related to bowel movements, change in stool frequency and form',
            'IBS-D subtype: >25% loose stools, <25% hard stools',
            'Celiac serology negative, fecal calprotectin normal',
            'Lactose hydrogen breath test positive',
          ],
          teachingPoints: [
            'Common presentation of IBS-D in young women',
            'Eliminating lactose provided partial relief; added loperamide for urgent diarrhea',
            'Gut-directed CBT addressed stress triggers',
            'Patient achieved good symptom control with multimodal approach',
          ],
        },
        {
          presentation: '45-year-old male with chronic constipation, abdominal pain, and severe bloating. Straining at stool, sensation of incomplete evacuation. Symptoms worsened after food poisoning 6 months ago.',
          keyFindings: [
            'Rome IV criteria met; IBS-C subtype',
            'Normal labs including TSH, negative celiac serology',
            'Anorectal manometry showed dyssynergic defecation pattern',
            'Pelvic floor biofeedback therapy initiated',
          ],
          teachingPoints: [
            'Post-infectious IBS can present as any subtype',
            'Coexisting pelvic floor dysfunction common; responds to biofeedback',
            'Added linaclotide for constipation; bloating improved with combined approach',
            'Demonstrates importance of evaluating for outlet dysfunction in IBS-C',
          ],
        },
        {
          presentation: '28-year-old female with alternating constipation and diarrhea, severe bloating, and anxiety. Failed multiple diets and OTC remedies. Missing work due to symptoms.',
          keyFindings: [
            'IBS-M subtype with severe impact on quality of life',
            'Significant anxiety disorder; symptoms worsen with stress',
            'Normal colonoscopy with biopsies at age 26 (family history of CRC)',
            'Fecal calprotectin normal, ruling out IBD',
          ],
          teachingPoints: [
            'Severe IBS often has prominent psychological component',
            'Low-FODMAP diet with dietitian provided 50% improvement',
            'Started SSRIs for anxiety with secondary benefit on IBS',
            'Gut-directed hypnotherapy resulted in sustained remission',
          ],
        },
      ],
      references: [
        'Lacy BE, et al. ACG Clinical Guideline: Management of Irritable Bowel Syndrome. Am J Gastroenterol. 2021;116(1):17-44. PMID: 33315591',
        'Ford AC, et al. American College of Gastroenterology Monograph on Management of Irritable Bowel Syndrome. Am J Gastroenterol Suppl. 2018;142:1-19.',
        'Black CJ, et al. British Society of Gastroenterology guidelines on the management of irritable bowel syndrome. Gut. 2021.',
        'Longstreth GF, et al. Functional bowel disorders. Gastroenterology. 2006;130(5):1480-91. (Rome III)',
        'Lovell RM, Ford AC. Global prevalence of and risk factors for irritable bowel syndrome: a meta-analysis. Clin Gastroenterol Hepatol. 2012;10(7):712-21.',
        'Moayyedi P, et al. The efficacy of probiotics in the treatment of irritable bowel syndrome: a systematic review. Gut. 2010;59(3):325-32.',
      ],
    },
  },
  
  // Interactive elements
  interactions: {
    anatomyPoints: [
      {
        structure: 'small-intestine',
        focus: 'motility',
        description: 'In IBS, small intestinal motility patterns are disorganized, leading to variable transit times and symptom fluctuation',
      },
      {
        structure: 'large-intestine',
        focus: 'inflammation',
        description: 'Low-grade inflammation with mast cell infiltration contributes to visceral hypersensitivity in IBS',
      },
      {
        structure: 'brain',
        focus: 'nervous-system',
        description: 'The gut-brain axis involves bidirectional communication through the vagus nerve and spinal pathways',
      },
    ],
    relatedLabs: [
      'CBC (rule out anemia)',
      'CRP or fecal calprotectin (rule out IBD)',
      'Celiac serology (tTG-IgA, total IgA)',
      'TSH (rule out thyroid dysfunction)',
      'Fecal calprotectin',
    ],
    relatedMedications: [
      'Rifaximin',
      'Linaclotide',
      'Lubiprostone',
      'Plecanatide',
      'Eluxadoline',
      'Alosetron',
      'Peppermint oil',
      'Tricyclic antidepressants',
      'SSRIs',
    ],
    relatedConditions: [
      'Functional dyspepsia',
      'GERD',
      'Celiac disease',
      'Inflammatory bowel disease',
      'Microscopic colitis',
      'Bile acid malabsorption',
      'Pelvic floor dysfunction',
    ],
    visualizations: [
      {
        type: 'diagram',
        id: 'gut-brain-axis',
        caption: 'Bidirectional communication between gut and brain via neural, hormonal, and immune pathways',
      },
      {
        type: 'diagram',
        id: 'bristol-stool-scale',
        caption: 'Bristol Stool Form Scale used to classify IBS subtypes',
      },
      {
        type: 'diagram',
        id: 'fodmap-foods',
        caption: 'High and low FODMAP food categories',
      },
    ],
    calculators: [
      {
        name: 'IBS Severity Scoring System (IBS-SSS)',
        inputs: [
          { name: 'abdominal pain severity', type: 'number', unit: '0-100 scale' },
          { name: 'abdominal pain frequency', type: 'number', unit: '0-100 scale' },
          { name: 'bloating severity', type: 'number', unit: '0-100 scale' },
          { name: 'bowel dysfunction satisfaction', type: 'number', unit: '0-100 scale' },
          { name: 'life interference', type: 'number', unit: '0-100 scale' },
        ],
        formula: 'Sum of all five components; 0-75 = mild, 75-175 = moderate, 175-300 = severe',
        interpretation: 'Scores >175 indicate severe IBS requiring more intensive therapy',
      },
    ],
  },
  
  // Assessment
  quiz: {
    title: 'IBS Knowledge Assessment',
    questions: [
      {
        id: 'ibs-1',
        type: 'multiple-choice',
        complexity: 3,
        question: 'According to Rome IV criteria, which of the following is required for an IBS diagnosis?',
        options: [
          'Abdominal pain at least 3 days per week for 1 month',
          'Recurrent abdominal pain at least 1 day per week for 3 months, associated with defecation or stool changes',
          'Chronic constipation with abdominal bloating for 6 months',
          'Alternating diarrhea and constipation for at least 2 weeks',
        ],
        correctAnswer: 1,
        explanation: 'Rome IV criteria require recurrent abdominal pain at least 1 day per week in the last 3 months, associated with 2 or more of: related to defecation, change in stool frequency, or change in stool form. Symptoms must have started at least 6 months before diagnosis.',
      },
      {
        id: 'ibs-2',
        type: 'multiple-choice',
        complexity: 3,
        question: 'A patient reports that more than 25% of their bowel movements are Bristol type 6-7 (mushy/watery) and less than 25% are Bristol type 1-2 (hard/lumpy). How would you classify their IBS subtype?',
        options: [
          'IBS-C (constipation-predominant)',
          'IBS-D (diarrhea-predominant)',
          'IBS-M (mixed)',
          'IBS-U (unclassified)',
        ],
        correctAnswer: 1,
        explanation: 'IBS-D is diagnosed when >25% of bowel movements are Bristol types 6-7 (loose/mushy) and <25% are Bristol types 1-2 (hard/lumpy). IBS-C has the opposite pattern, while IBS-M has >25% of both hard and loose stools.',
      },
      {
        id: 'ibs-3',
        type: 'multiple-choice',
        complexity: 4,
        question: 'Which of the following best describes the mechanism of the low-FODMAP diet in IBS management?',
        options: [
          'It eliminates all dietary fiber to rest the colon',
          'It restricts poorly absorbed carbohydrates that are fermented by gut bacteria, reducing gas production and osmotic load',
          'It removes all potential food allergens from the diet',
          'It increases insoluble fiber to bulk the stool',
        ],
        correctAnswer: 1,
        explanation: 'FODMAPs (Fermentable Oligo-, Di-, Mono-saccharides And Polyols) are poorly absorbed short-chain carbohydrates. When they reach the colon, bacteria ferment them, producing gas (hydrogen, methane, carbon dioxide) and causing osmotic water retention. This leads to bloating, pain, and altered motility in sensitive individuals.',
      },
      {
        id: 'ibs-4',
        type: 'multiple-choice',
        complexity: 5,
        question: 'A 35-year-old woman with IBS-D has not responded to dietary modifications and loperamide. Which of the following is FDA-approved for IBS-D and works by activating μ- and κ-opioid receptors while antagonizing δ-opioid receptors in the gut?',
        options: [
          'Linaclotide',
          'Lubiprostone',
          'Eluxadoline',
          'Rifaximin',
        ],
        correctAnswer: 2,
        explanation: 'Eluxadoline is a mixed opioid receptor agonist/antagonist approved for IBS-D. It activates μ- and κ-opioid receptors (reducing intestinal secretion and pain) while antagonizing δ-opioid receptors (minimizing constipation). Linaclotide and lubiprostone are for IBS-C; rifaximin is an antibiotic for IBS-D that alters gut microbiota.',
      },
      {
        id: 'ibs-5',
        type: 'case-study',
        complexity: 6,
        question: 'A 42-year-old male presents with chronic diarrhea, abdominal cramping, and urgency for 8 months. He had a bout of bacterial gastroenteritis while traveling 10 months ago. Physical exam is unremarkable. Labs show normal CBC, CRP 2 mg/L (normal), negative celiac serology, and fecal calprotectin 15 μg/g (normal). Which of the following is the most likely diagnosis?',
        options: [
          'Crohn disease',
          'Post-infectious IBS (PI-IBS)',
          'Microscopic colitis',
          'Bile acid malabsorption',
        ],
        correctAnswer: 1,
        explanation: 'This is classic post-infectious IBS (PI-IBS). The temporal relationship to gastroenteritis (10 months ago, symptoms starting ~2 months after), normal inflammatory markers (CRP, fecal calprotectin), and absence of red flags support this diagnosis. Crohn disease would typically have elevated inflammatory markers. Microscopic colitis usually affects older adults. Bile acid malabsorption is possible but PI-IBS is most likely given the clear infectious trigger.',
      },
    ],
    passingScore: 80,
  },
  
  // Resources
  references: [
    {
      citation: 'Lacy BE, Pimentel M, Brenner DM, et al. ACG Clinical Guideline: Management of Irritable Bowel Syndrome. Am J Gastroenterol. 2021;116(1):17-44.',
      pmid: '33315591',
      doi: '10.14309/ajg.0000000000001036',
    },
    {
      citation: 'Black CJ, Burr NE, Camilleri M, et al. Efficacy of pharmacological therapies in patients with IBS with diarrhoea or mixed stool pattern: systematic review and network meta-analysis. Lancet Gastroenterol Hepatol. 2020;5(8):772-784.',
      pmid: '32470427',
      doi: '10.1016/S2468-1253(20)30103-7',
    },
    {
      citation: 'Staudacher HM, Whelan K. The low FODMAP diet: recent advances in understanding its mechanisms and efficacy in IBS. Gut. 2017;66(8):1517-1527.',
      pmid: '28373115',
      doi: '10.1136/gutjnl-2017-313750',
    },
    {
      citation: 'Ford AC, Harris LA, Lacy BE, et al. Systematic review with meta-analysis: the efficacy of prebiotics, probiotics, synbiotics and antibiotics in irritable bowel syndrome. Aliment Pharmacol Ther. 2018;48(10):1044-1060.',
      pmid: '30267410',
      doi: '10.1111/apt.15001',
    },
    {
      citation: 'Chey WD, Kurlander J, Eswaran S. Irritable bowel syndrome: a clinical review. JAMA. 2015;313(9):949-58.',
      pmid: '25734736',
      doi: '10.1001/jama.2015.0954',
    },
    {
      citation: 'Enck P, Aziz Q, Barbara G, et al. Irritable bowel syndrome. Nat Rev Dis Primers. 2016;2:16014.',
      pmid: '27159638',
      doi: '10.1038/nrdp.2016.14',
    },
  ],
  resources: [
    {
      title: 'Monash University Low FODMAP Diet App',
      type: 'website',
      url: 'https://www.monashfodmap.com/',
      description: 'Official resource for the low-FODMAP diet with food guide and recipes from the creators of the diet',
    },
    {
      title: 'Rome Foundation - IBS Information',
      type: 'website',
      url: 'https://theromefoundation.org/',
      description: 'Evidence-based information on functional GI disorders including diagnostic criteria',
    },
    {
      title: 'International Foundation for Gastrointestinal Disorders (IFFGD)',
      type: 'website',
      url: 'https://www.iffgd.org/',
      description: 'Patient advocacy organization with comprehensive IBS resources and support',
    },
    {
      title: 'Gut-Directed Hypnotherapy for IBS',
      type: 'article',
      url: 'https://www.gastro.org/practice-guidance/gi-patient-center/topic/irritable-bowel-syndrome-ibs',
      description: 'American Gastroenterological Association patient resources on IBS treatments',
    },
  ],
};
