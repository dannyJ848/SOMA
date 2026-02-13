/**
 * Colorectal Cancer Screening Educational Module
 * 
 * Comprehensive coverage of CRC screening: guidelines, colonoscopy prep,
 * FIT test, polyps, risk stratification, and prevention strategies.
 */

import type { EducationalModule } from '../types.js';

export const colorectalCancerScreeningModule: EducationalModule = {
  id: 'colorectal-cancer-screening-comprehensive',
  type: 'specialty',
  specialty: 'oncology',
  
  title: 'Understanding Colorectal Cancer Screening',
  description: 'A complete guide to colorectal cancer prevention: screening options from colonoscopy to stool tests, understanding polyps, preparation instructions, and how screening saves lives by detecting cancer early or preventing it entirely.',
  version: '1.0.0',
  lastUpdated: '2026-02-06',
  author: 'Biological Self Medical Education Team',
  
  prerequisites: [
    'colon-anatomy-basics',
    'cancer-biology-intro',
    'adenoma-carcinoma-sequence',
  ],
  
  learningObjectives: [
    'Understand how colorectal cancer develops from polyps over many years',
    'Learn screening options: colonoscopy, FIT, stool DNA, CT colonography, flexible sigmoidoscopy',
    'Know current screening guidelines by age and risk factors',
    'Understand proper colonoscopy preparation and what to expect',
    'Learn how to reduce colorectal cancer risk through lifestyle',
  ],
  
  estimatedTime: {
    1: '15 minutes',
    2: '20 minutes',
    3: '30 minutes',
    4: '45 minutes',
    5: '60 minutes',
    6: '80 minutes',
  },
  
  content: {
    // Level 1: Foundation (8th grade)
    1: {
      summary: `Colorectal cancer is cancer of the colon (large intestine) or rectum. It usually starts as small growths called polyps that form on the inside lining of the colon. Not all polyps become cancer, but some can turn into cancer over many years (usually 10-15 years). Screening tests can find polyps so they can be removed before they become cancer. Screening can also find cancer early when it's easier to treat. Everyone age 45 and older should be screened regularly.`,
      
      analogy: `Think of your colon like a long garden hose. Over time, small bumps (polyps) can grow on the inside of the hose. Most bumps are harmless, but some can slowly turn into a problem if left alone for many years.

Screening is like checking inside the hose with a camera (colonoscopy) or testing what comes out of it (stool tests). If we find bumps, we can snip them off before they become dangerous. Finding cancer early is like catching a weed when it's small instead of when it's taken over the whole garden.`,
      
      keyPoints: [
        'Colorectal cancer starts in the colon or rectum (the large intestine)',
        'Most cancers start as small growths called polyps',
        'Polyps can take 10-15 years to turn into cancer',
        'Screening finds polyps so they can be removed before becoming cancer',
        'Screening also finds cancer early when treatment works better',
        'Regular screening should start at age 45 for most people',
      ],
      
      visualAid: 'polyp-to-cancer-animation',
      story: 'Mike, 48, had no symptoms but his doctor recommended screening. His colonoscopy found a 1cm polyp that was removed during the procedure. The lab showed it was a "precancerous" polyp that would have become cancer if left alone. Now Mike tells everyone: "Getting screened saved me from ever getting cancer."',
    },
    
    // Level 2: Developing (10th grade)
    2: {
      summary: `Colorectal cancer (CRC) is the third most common cancer and second leading cause of cancer death in the US. The adenoma-carcinoma sequence describes the progression from normal mucosa to adenomatous polyp (adenoma) to cancer, driven by accumulated genetic mutations. Most CRCs are sporadic (70%), but 20-30% have familial clustering and 5-10% are hereditary (Lynch syndrome, FAP). Screening modalities include direct visualization tests (colonoscopy, sigmoidoscopy, CT colonography) that detect polyps and cancer, and stool-based tests (FIT, stool DNA) that detect blood or abnormal DNA from cancer or large polyps.`,
      
      keyConcepts: [
        {
          term: 'Polyp',
          explanation: 'A growth on the inner lining of the colon or rectum. Can be flat or raised (pedunculated). Types include hyperplastic (usually low risk) and adenomatous (precancerous).',
        },
        {
          term: 'Adenoma',
          explanation: 'A precancerous polyp that has the potential to become cancer. Also called an adenomatous polyp.',
        },
        {
          term: 'FIT Test',
          explanation: 'Fecal Immunochemical Test - checks for hidden blood in stool using antibodies that detect human hemoglobin. Done yearly.',
        },
        {
          term: 'Colonoscopy',
          explanation: 'A procedure using a flexible tube with a camera to examine the entire colon. Polyps can be removed during the procedure.',
        },
      ],
      
      keyPoints: [
        'Most CRC develops through the adenoma-carcinoma sequence over 10-15 years',
        'Genetic mutations accumulate: APC (early), KRAS (intermediate), TP53 (late), leading to cancer',
        'Colonoscopy can prevent cancer by removing polyps before they become cancerous',
        'FIT detects blood from large polyps or cancer; positive test requires follow-up colonoscopy',
        'Risk factors include age, family history, inflammatory bowel disease, obesity, smoking, alcohol',
        'Average risk screening starts at age 45; earlier for those with risk factors',
      ],
      
      howItWorks: `The Adenoma-Carcinoma Sequence:

Normal Colon Cell
    ↓ (APC mutation - gatekeeper gene)
Small Adenoma (low-grade dysplasia)
    ↓ (KRAS mutation - oncogene activation)
Large Adenoma (high-grade dysplasia)
    ↓ (TP53 mutation - tumor suppressor loss)
Carcinoma (cancer)
    ↓ (Additional mutations)
Metastatic Disease

Timeline: Each step takes years, providing a window for screening and intervention.`,
    },
    
    // Level 3: Standard (12th grade)
    3: {
      summary: `Colorectal cancer screening reduces both incidence (by removing polyps) and mortality (by detecting cancer at earlier stages). The USPSTF and ACS recommend screening begin at age 45 for average-risk individuals. High-quality colonoscopy has the highest sensitivity for polyps and cancer and is the only test that allows both detection and removal in one procedure. FIT is the preferred stool-based test with 70-80% sensitivity for cancer and 25-30% for advanced adenomas. Multitarget stool DNA (mt-sDNA) combines FIT with DNA markers (KRAS, BMP3, NDRG4) achieving ~92% sensitivity for cancer and 42% for advanced adenomas.`,
      
      mechanisms: [
        {
          name: 'Molecular Pathogenesis',
          description: 'Chromosomal instability pathway (85%): APC mutation → adenoma formation; CpG island methylator phenotype (CIMP-high, 15%); microsatellite instability (MSI-high, 15%, often Lynch syndrome or sporadic MLH1 methylation)',
        },
        {
          name: 'FIT Mechanism',
          description: 'Detects globin from human hemoglobin using antibodies. Specific for lower GI bleeding (upper GI blood degraded by digestive enzymes). More specific than guaiac-based FOBT; no dietary restrictions needed.',
        },
        {
          name: 'Stool DNA Detection',
          description: 'Detects abnormal DNA shed from cancer/polyp cells: KRAS mutations, aberrant methylation of BMP3 and NDRG4 promoters, and β-actin (human DNA quantification).',
        },
        {
          name: 'Colonoscopy Quality Metrics',
          description: 'Cecal intubation rate >95%, adenoma detection rate (ADR) benchmark ≥25% (men) and ≥15% (women), withdrawal time ≥6 minutes, adequate bowel preparation (BBPS ≥6)',
        },
      ],
      
      clinicalCorrelates: [
        'Average risk: No personal/family history of CRC or advanced adenoma, no IBD, no hereditary syndrome',
        'Screening interval: Colonoscopy every 10 years; FIT yearly; mt-sDNA every 3 years; CT colonography every 5 years',
        'Colonoscopy is diagnostic and therapeutic - polyps removed during the same procedure',
        'Positive stool test MUST be followed by colonoscopy within 3 months',
        'Interval cancer: Cancer diagnosed before next scheduled screening; associated with missed lesions',
      ],
      
      normalVsAbnormal: {
        normal: 'Intact mucosal barrier; regular crypt architecture; no dysplasia; no polyps; APC, KRAS, TP53 genes functioning normally',
        abnormal: 'Polyp formation with dysplastic epithelium; APC loss → dysregulated Wnt signaling; KRAS activation → constitutive proliferation; TP53 loss → genome instability; eventual invasion through basement membrane',
        whyItMatters: 'Understanding the multistep genetic progression explains why screening works - we have years to intervene between adenoma formation and invasive cancer.',
      },
    },
    
    // Level 4: Advanced (College)
    4: {
      summary: `Colorectal carcinogenesis involves three major molecular pathways. The chromosomal instability (CIN) pathway (70-85%) features sequential mutations in APC, KRAS, SMAD4, and TP53 with widespread chromosomal gains and losses. The microsatellite instability (MSI) pathway (15%) results from defective DNA mismatch repair (dMMR) causing accumulation of mutations at repetitive DNA sequences. The CpG island methylator phenotype (CIMP) involves hypermethylation of promoter regions silencing tumor suppressor genes (MLH1, p16). Serrated polyps (traditional serrated adenomas, sessile serrated lesions) represent an alternative pathway to cancer with BRAF mutations and CIMP.`,
      
      molecularMechanisms: [
        {
          pathway: 'Wnt/β-catenin Signaling',
          defect: 'APC (adenomatous polyposis coli) mutations found in 80% of sporadic CRC; loss of APC function prevents β-catenin degradation',
          consequence: 'Nuclear accumulation of β-catenin → TCF/LEF transcription factor activation → target genes (MYC, CCND1) → uncontrolled proliferation',
        },
        {
          pathway: 'Mismatch Repair Deficiency',
          defect: 'Mutations in MLH1, MSH2, MSH6, PMS2 (Lynch syndrome) or MLH1 promoter methylation (sporadic); leads to MSI',
          consequence: 'Accumulation of mutations in coding microsatellites (TGFβRII, BAX, CASP5) → accelerated carcinogenesis; right-sided, mucinous, lymphocytic infiltrate; excellent immunotherapy response',
        },
        {
          pathway: 'Serrated Pathway',
          defect: 'BRAF V600E mutation (often early) → CIMP → MLH1 methylation (in subset); sessile serrated lesions with subtle endoscopic appearance',
          consequence: 'Rapid progression possible; flat lesions harder to detect; accounts for interval cancers after colonoscopy',
        },
        {
          pathway: 'TGF-β Signaling',
          defect: 'SMAD4 (DPC4) loss in 30% of advanced adenomas and 50% of carcinomas; TGFβRII mutations in MSI tumors',
          consequence: 'Loss of growth inhibitory signaling; SMAD4 loss associated with metastasis and poor prognosis',
        },
      ],
      
      pathways: [
        {
          name: 'Conventional Adenoma-Carcinoma Sequence',
          steps: [
            'Normal mucosa with APC wild-type',
            'Early adenoma: APC loss ("gatekeeper mutation")',
            'Intermediate adenoma: KRAS/BRAF activation',
            'Late adenoma: 18q loss (SMAD4/DCC)',
            'Carcinoma: TP53 loss, additional alterations',
            'Metastasis: Additional genetic events',
          ],
          regulation: '10-15 year timeline; left-sided predominance; well-differentiated histology early',
        },
        {
          name: 'Serrated Pathway',
          steps: [
            'Normal mucosa',
            'Hyperplastic polyp (BRAF V600E)',
            'Sessile serrated lesion (BRAF + CIMP)',
            'Traditional serrated adenoma (cytologic dysplasia)',
            'Serrated adenocarcinoma',
          ],
          regulation: 'Right-sided predominance; can progress rapidly; associated with cigarette smoking; sessile serrated lesions with dysplasia or ≥1cm require close surveillance (3-year interval)',
        },
      ],
      
      references: [
        'Fearon ER, Vogelstein B. A genetic model for colorectal tumorigenesis. Cell. 1990;61(5):759-767.',
        'Carethers JM, Jung BH. Genetics and Genetic Biomarkers in Sporadic Colorectal Cancer. Gastroenterology. 2015;149(5):1177-1190.',
        'Imperiale TF, et al. Multitarget stool DNA testing for colorectal-cancer screening. N Engl J Med. 2014;370(14):1287-1297.',
      ],
    },
    
    // Level 5: Expert (Graduate)
    5: {
      summary: `The 2021 USPSTF recommendation lowered screening initiation to age 45 based on modeling studies and rising CRC incidence in younger adults. Risk-stratified approaches identify individuals needing earlier or more intensive screening. Advanced neoplasia risk models incorporate age, sex, family history, smoking, BMI, and diabetes. Lynch syndrome (2-4% of CRC) requires colonoscopy every 1-2 years starting age 20-25. The National Cancer Institute's CISNET models informed screening policy by projecting life-years gained and colonoscopy resource needs. Post-polypectomy surveillance intervals are based on number, size, and histology of adenomas found. Quality indicators for screening colonoscopy significantly impact effectiveness - ADR below thresholds associated with increased interval cancer risk.`,
      
      researchFrontiers: [
        'Blood-based screening: Epi proColon (SEPT9 methylation) approved for patients who refuse other methods; multi-cancer early detection (MCED) tests in development',
        'Artificial intelligence in colonoscopy: Computer-aided detection (CADe) increases ADR by 10-20%; CADx for optical biopsy/characterization',
        'Risk-stratified screening: Polygenic risk scores, lifestyle factors, and biomarkers to personalize screening intensity and age of initiation',
        'Extended interval strategies: Using negative FIT results or low-risk findings to extend screening intervals and optimize resources',
        'Chemoprevention: Aspirin for Lynch syndrome (CAPP2 trial); calcium, vitamin D, NSAIDs for general population with mixed evidence',
        'Improved bowel prep: Split-dose preparation standard; same-day prep for afternoon procedures; low-volume preps for improved tolerance',
      ],
      
      controversies: [
        {
          topic: 'Age to Stop Screening',
          perspectives: [
            'USPSTF: Screen through age 75 for average risk; individualized 76-85',
            'ACS: Screen through age 75; individualized 76-85 based on health',
            'Limited life expectancy (<10 years) suggests screening may not provide benefit',
          ],
        },
        {
          topic: 'CT Colonography vs Colonoscopy',
          perspectives: [
            'CTC less invasive, no sedation, detects extracolonic findings',
            'Radiation exposure; requires bowel prep; does not allow polypectomy',
            'Positive CTC requires colonoscopy anyway; cost-effectiveness depends on adherence',
          ],
        },
        {
          topic: 'Screening in Young Adults',
          perspectives: [
            'Rising early-onset CRC (age <50) is alarming and poorly understood',
            'USPSTF lowered to 45; some advocate starting earlier in high-risk groups',
            'Cost-effectiveness and absolute risk in 40-44 age group being evaluated',
          ],
        },
      ],
      
      statisticalContext: `Screening effectiveness data:
- Flexible sigmoidoscopy trials (SCORE, PLCO, NORCCAP): 26% reduction in CRC mortality, 21% reduction in incidence
- Colonoscopy case-control studies: 56-69% reduction in CRC mortality; 67-88% reduction in incidence
- FIT annual screening: 33% reduction in CRC mortality in Dutch population study
- Cologuard (mt-sDNA): 92% sensitivity for CRC, 42% for advanced adenomas vs 74% and 24% for FIT alone

Risk stratification:
- ADR benchmarks: ≥25% men, ≥15% women; each 1% increase in ADR associated with 3% decrease in interval cancer risk
- Interval cancer rate: 5-9 per 10,000 person-years after negative colonoscopy
- Risk of CRC with one first-degree relative: 2-fold increased; 3+ relatives or early onset: 4-6 fold increased`,
      
      references: [
        'USPSTF. Screening for Colorectal Cancer: US Preventive Services Task Force Recommendation Statement. JAMA. 2021;325(19):1965-1977.',
        'Imperiale TF, et al. Multitarget stool DNA testing for colorectal-cancer screening. N Engl J Med. 2014;370(14):1287-1297.',
        'Corley DA, et al. Adenoma Detection Rate and Risk of Colorectal Cancer and Death. N Engl J Med. 2014;370(14):1298-1306.',
      ],
    },
    
    // Level 6: Clinical (Physician-level)
    6: {
      summary: `Colorectal cancer screening requires risk stratification to determine appropriate timing and modality. Average-risk adults begin at age 45 with any of several validated strategies. Individuals with first-degree relative with CRC or advanced adenoma diagnosed <60 years, or two first-degree relatives at any age, should begin at age 40 or 10 years before earliest case. Hereditary CRC syndromes require specialized surveillance. Bowel preparation quality critically impacts detection - split-dose preparation is standard. Post-polypectomy surveillance intervals follow USMSTF guidelines: normal colonoscopy (10 years); 1-2 small tubular adenomas (7-10 years); 3-4 small adenomas (3-5 years); 5-10 adenomas, any adenoma ≥10mm, or high-grade dysplasia (3 years); >10 adenomas (1 year); piecemeal resection of large polyp (2-6 months). Serrated lesions have specific surveillance recommendations.`,
      
      clinicalApproach: [
        'Risk stratification: Average risk (start 45); Increased risk (family history - start 40 or 10 years earlier); High risk (hereditary syndromes, IBD - specialized protocols)',
        'Shared decision-making: Discuss options considering patient preferences, resources, likelihood of adherence',
        'Bowel preparation: Split-dose polyethylene glycol or sodium picosulfate; clear liquids day before; hold iron supplements',
        'Surveillance after polypectomy: Based on number, size, and histology of index adenomas; sessile serrated lesions ≥1cm or with dysplasia need 3-year follow-up',
        'Quality metrics: Document ADR, withdrawal time, bowel prep quality, cecal intubation; feedback to endoscopists',
        'Positive stool test follow-up: Colonoscopy within 3 months; navigation support to ensure completion',
      ],
      
      differentialConsiderations: [
        'Diverticulosis: Outpouchings in colon wall; may cause bleeding but not cancer risk; incidental finding',
        'Inflammatory bowel disease (Crohn\'s, ulcerative colitis): Increased CRC risk; surveillance colonoscopy with random biopsies every 1-2 years after 8-10 years of colitis',
        'Hemorrhoids: Common cause of rectal bleeding; do not cause cancer but may obscure visualization',
        'Angiodysplasia: Vascular malformations causing bleeding; especially in right colon, elderly, renal disease',
        'Ischemic colitis: Acute onset abdominal pain with bloody diarrhea; watershed areas affected',
        'Infectious colitis: C. difficile, Campylobacter, Shigella - usually acute, self-limited; endoscopy if persistent',
      ],
      
      guidelines: [
        'USPSTF Recommendation Statement: Screening for Colorectal Cancer (2021)',
        'ACS Guideline for Colorectal Cancer Screening (2018, update 2023)',
        'US Multi-Society Task Force on Colorectal Cancer (USMSTF) - Surveillance Guidelines',
        'NCCN Clinical Practice Guidelines: Colorectal Cancer Screening (2024)',
        'ASGE Quality Indicators for Colonoscopy (2024)',
      ],
      
      caseExamples: [
        {
          presentation: '52-year-old male with no symptoms. Father diagnosed with colon cancer at age 55. Patient had been putting off screening.',
          keyFindings: [
            'First-degree relative with CRC diagnosed <60 years = increased risk category',
            'Should have started screening at age 40 or 10 years before father\'s diagnosis (age 45)',
            '5 years overdue for screening',
          ],
          teachingPoints: [
            'Recommend colonoscopy (preferred for high-risk) vs FIT if refuses',
            'If normal, repeat in 5 years (not 10) due to family history',
            'If polyps found, surveillance based on findings',
            'Counsel siblings to begin screening at age 40',
            'If Lynch syndrome suspected (early onset, multiple relatives), genetic counseling',
          ],
        },
        {
          presentation: '64-year-old female had colonoscopy showing 3 tubular adenomas (8mm, 5mm, 4mm). No high-grade dysplasia. Returned for surveillance colonoscopy 5 years later.',
          keyFindings: [
            '3-4 small (<1cm) tubular adenomas on index colonoscopy',
            'No advanced features (villous histology, high-grade dysplasia, ≥1cm)',
            'Followed appropriate 3-year surveillance interval',
          ],
          teachingPoints: [
            'USMSTF guideline: 3-4 small tubular adenomas → 3-year interval (can extend to 5 if adequate prep and complete examination)',
            'If surveillance shows 1-2 small tubular adenomas → 5-10 year interval',
            'If surveillance normal → 5-year interval (not 10, due to history)',
            'Document quality metrics: prep quality, withdrawal time, completeness',
          ],
        },
      ],
      
      references: [
        'US Preventive Services Task Force. Screening for Colorectal Cancer: US Preventive Services Task Force Recommendation Statement. JAMA. 2021;325(19):1965-1977.',
        'Lieberman DA, et al. Guidelines for colonoscopy surveillance after screening and polypectomy: a consensus update by the US Multi-Society Task Force on Colorectal Cancer. Gastroenterology. 2012;143(3):844-857.',
        'Corley DA, et al. Adenoma Detection Rate and Risk of Colorectal Cancer and Death. N Engl J Med. 2014;370(14):1298-1306.',
      ],
    },
  },
  
  interactions: {
    calculators: [
      {
        name: 'Colorectal Cancer Risk Calculator',
        inputs: [
          { name: 'Age', type: 'number', unit: 'years' },
          { name: 'Sex', type: 'select', options: ['Male', 'Female'] },
          { name: 'First-degree relative with CRC', type: 'select', options: ['No', 'Yes'] },
          { name: 'Smoking History', type: 'select', options: ['Never', 'Former', 'Current'] },
          { name: 'BMI', type: 'number', unit: 'kg/m²' },
          { name: 'Physical Activity', type: 'select', options: ['Regular', 'Occasional', 'Sedentary'] },
        ],
        formula: 'Risk stratification based on age, family history, and lifestyle factors',
        interpretation: 'Average risk: Start screening at 45. Increased risk (family history): Start at 40 or 10 years before earliest case. High risk: May need colonoscopy every 1-2 years starting earlier.',
      },
      {
        name: 'Post-Polypectomy Surveillance Interval',
        inputs: [
          { name: 'Number of Adenomas', type: 'number' },
          { name: 'Largest Adenoma Size', type: 'select', options: ['<5mm', '5-9mm', '≥10mm'] },
          { name: 'Histology', type: 'select', options: ['Tubular', 'Tubulovillous', 'Villous'] },
          { name: 'High-grade Dysplasia', type: 'select', options: ['No', 'Yes'] },
        ],
        formula: 'Based on USMSTF surveillance guidelines',
        interpretation: 'Normal: 10 years. 1-2 small tubular: 7-10 years. 3-4 small tubular: 3-5 years. ≥5 adenomas, any ≥10mm, villous, or HGD: 3 years. Piecemeal resection: 2-6 months.',
      },
    ],
    
    anatomyPoints: [
      { structure: 'colon', focus: 'cecum', description: 'Beginning of the large intestine; appendix attached; common site for cancers in Lynch syndrome' },
      { structure: 'colon', focus: 'ascending-colon', description: 'Right side of colon; absorbs water; common site for flat serrated lesions' },
      { structure: 'colon', focus: 'transverse-colon', description: 'Middle section crossing upper abdomen; watershed area prone to ischemia' },
      { structure: 'colon', focus: 'descending-colon', description: 'Left side; common site for diverticulosis and typical adenomas' },
      { structure: 'colon', focus: 'sigmoid-colon', description: 'S-shaped segment leading to rectum; where most cancers occur; accessible by sigmoidoscopy' },
      { structure: 'colon', focus: 'rectum', description: 'Last 12-15 cm; important for continence; treatment differs from colon cancer' },
    ],
    
    relatedLabs: [
      'fit-test',
      'stool-dna-test',
      'cea-tumor-marker',
      'cbc-anemia',
      'guaiac-fobt',
    ],
    
    relatedConditions: [
      'colorectal-cancer',
      'colon-polyps',
      'lynch-syndrome',
      'familial-adenomatous-polyposis',
      'inflammatory-bowel-disease',
      'diverticulosis',
      'hemorrhoids',
    ],
  },
  
  quiz: {
    title: 'Colorectal Cancer Screening Knowledge Assessment',
    passingScore: 80,
    questions: [
      {
        id: 'crc-q1',
        type: 'multiple-choice',
        complexity: 1,
        question: 'Why is colorectal cancer screening important?',
        options: [
          'It can find and remove polyps before they become cancer',
          'It is required by law for everyone over 40',
          'It prevents all types of cancer',
          'It replaces the need for a healthy diet',
        ],
        correctAnswer: 0,
        explanation: 'Colorectal cancer screening can detect precancerous polyps, which can be removed before they turn into cancer. Screening can also find cancer at an early stage when treatment is more effective. This makes colorectal cancer one of the most preventable cancers.',
      },
      {
        id: 'crc-q2',
        type: 'multiple-choice',
        complexity: 2,
        question: 'At what age should most people start regular colorectal cancer screening?',
        options: [
          'Age 35',
          'Age 45',
          'Age 55',
          'Age 65',
        ],
        correctAnswer: 1,
        explanation: 'The USPSTF and American Cancer Society recommend that average-risk adults begin screening at age 45. Those with risk factors such as a family history of colorectal cancer may need to start earlier.',
      },
      {
        id: 'crc-q3',
        type: 'multiple-choice',
        complexity: 3,
        question: 'A 50-year-old patient had a colonoscopy that found two small (6mm and 4mm) tubular adenomas with no high-grade dysplasia. When should their next colonoscopy be?',
        options: [
          '1 year',
          '3 years',
          '7-10 years',
          'They never need another colonoscopy',
        ],
        correctAnswer: 2,
        explanation: 'According to US Multi-Society Task Force guidelines, patients with 1-2 small (<1cm) tubular adenomas without high-grade dysplasia should have their next colonoscopy in 7-10 years. This reflects the low risk of these findings progressing to cancer.',
      },
      {
        id: 'crc-q4',
        type: 'case-study',
        complexity: 4,
        question: 'A 45-year-old woman has a positive FIT test (detects blood in stool). What is the appropriate next step?',
        options: [
          'Repeat the FIT test in 6 months',
          'Schedule a colonoscopy within 3 months',
          'Start taking iron supplements',
          'Ignore it since she has no symptoms',
        ],
        correctAnswer: 1,
        explanation: 'A positive stool-based screening test (FIT or stool DNA) must be followed by a diagnostic colonoscopy to identify the source of bleeding and remove any polyps. Delayed follow-up increases the risk of advanced disease if cancer is present.',
      },
      {
        id: 'crc-q5',
        type: 'case-study',
        complexity: 6,
        question: 'A 38-year-old patient is referred for colonoscopy due to rectal bleeding. His father was diagnosed with colon cancer at age 48, and his paternal aunt had endometrial cancer at 45. Colonoscopy shows 15+ adenomatous polyps throughout the colon, some with high-grade dysplasia. What is the most likely diagnosis and management?',
        options: [
          'Sporadic adenomas; repeat colonoscopy in 3 years',
          'Familial adenomatous polyposis (FAP); consider genetic testing and prophylactic colectomy',
          'Diverticulosis; high-fiber diet and repeat colonoscopy in 10 years',
          'Lynch syndrome; surveillance only, no surgery needed',
        ],
        answer: 1,
        explanation: 'The combination of young age, numerous adenomas (>100 suggests classic FAP, but 15+ is concerning for attenuated FAP), and family history of early-onset CRC is highly suggestive of Familial Adenomatous Polyposis. Management requires genetic testing for APC mutations, upper endoscopy for gastric/duodenal polyps, and consideration of prophylactic colectomy given the near 100% lifetime CRC risk. Family members need genetic counseling and testing.',
      },
    ],
  },
  
  references: [
    {
      citation: 'US Preventive Services Task Force. Screening for Colorectal Cancer: US Preventive Services Task Force Recommendation Statement. JAMA. 2021;325(19):1965-1977.',
      doi: '10.1001/jama.2021.6238',
    },
    {
      citation: 'Wolf AMD, et al. Colorectal cancer screening for average-risk adults: 2018 guideline update from the American Cancer Society. CA Cancer J Clin. 2018;68(4):250-281.',
      doi: '10.3322/caac.21457',
    },
    {
      citation: 'Imperiale TF, et al. Multitarget stool DNA testing for colorectal-cancer screening. N Engl J Med. 2014;370(14):1287-1297.',
      doi: '10.1056/NEJMoa1311194',
    },
    {
      citation: 'Corley DA, et al. Adenoma Detection Rate and Risk of Colorectal Cancer and Death. N Engl J Med. 2014;370(14):1298-1306.',
      doi: '10.1056/NEJMoa1309086',
    },
    {
      citation: 'Lieberman DA, et al. Guidelines for colonoscopy surveillance after screening and polypectomy: a consensus update by the US Multi-Society Task Force on Colorectal Cancer. Gastroenterology. 2012;143(3):844-857.',
      doi: '10.1053/j.gastro.2012.06.001',
    },
    {
      citation: 'Carethers JM, Jung BH. Genetics and Genetic Biomarkers in Sporadic Colorectal Cancer. Gastroenterology. 2015;149(5):1177-1190.',
      doi: '10.1053/j.gastro.2015.06.031',
    },
    {
      citation: 'Fearon ER, Vogelstein B. A genetic model for colorectal tumorigenesis. Cell. 1990;61(5):759-767.',
      doi: '10.1016/0092-8674(90)90186-I',
    },
    {
      citation: 'Rex DK, et al. Colorectal Cancer Screening: Recommendations for Physicians and Patients from the U.S. Multi-Society Task Force on Colorectal Cancer. Am J Gastroenterol. 2017;112(7):1016-1030.',
      doi: '10.1038/ajg.2017.174',
    },
  ],
  
  resources: [
    {
      title: 'American Cancer Society - Colorectal Cancer',
      type: 'website',
      url: 'https://www.cancer.org/cancer/types/colon-rectal-cancer.html',
      description: 'Comprehensive information on prevention, screening, and treatment',
    },
    {
      title: 'CDC Colorectal Cancer Screening',
      type: 'website',
      url: 'https://www.cdc.gov/cancer/colorectal',
      description: 'Public health information and screening guidelines',
    },
    {
      title: 'Colorectal Cancer Alliance',
      type: 'website',
      url: 'https://www.ccalliance.org',
      description: 'Patient support, screening resources, and advocacy',
    },
    {
      title: 'Fight Colorectal Cancer',
      type: 'website',
      url: 'https://fightcolorectalcancer.org',
      description: 'Advocacy organization for colorectal cancer patients and families',
    },
    {
      title: 'ASGE Colonoscopy Prep Information',
      type: 'website',
      url: 'https://www.asge.org',
      description: 'Preparation instructions and what to expect during colonoscopy',
    },
  ],
};

export default colorectalCancerScreeningModule;
