/**
 * Asthma Educational Module
 * 
 * Complete educational content across all 6 complexity levels.
 * Covers: airway inflammation, triggers, rescue vs controller meds,
 * inhaler technique, action plans, and severe asthma phenotypes.
 */

import type { EducationalModule } from '../../types.js';

export const asthmaModule: EducationalModule = {
  id: 'pulmonology-asthma-comprehensive',
  type: 'specialty',
  specialty: 'pulmonology',
  
  title: 'Understanding Asthma',
  description: 'Learn about asthma, a chronic condition that affects your airways and makes breathing difficult. Understand triggers, medications, inhaler techniques, and how to manage your asthma effectively.',
  version: '1.0.0',
  lastUpdated: '2026-02-06',
  author: 'Biological Self Medical Education Team',
  
  prerequisites: [
    'respiratory-system-basics',
    'lung-anatomy-fundamentals',
  ],
  
  learningObjectives: [
    'Understand what happens in the airways during an asthma attack',
    'Identify common asthma triggers and how to avoid them',
    'Distinguish between rescue and controller medications',
    'Learn proper inhaler technique for maximum benefit',
    'Know how to use and follow an asthma action plan',
    'Recognize signs of severe asthma and when to seek emergency care',
  ],
  
  estimatedTime: {
    1: '15 minutes',
    2: '20 minutes',
    3: '30 minutes',
    4: '40 minutes',
    5: '55 minutes',
    6: '80 minutes',
  },
  
  content: {
    // Level 1: Foundation
    1: {
      summary: `Asthma is a condition that affects the tubes in your lungs called airways. When someone with asthma encounters a trigger (like dust, pollen, or cold air), their airways get inflamed and swollen. The muscles around the airways tighten, making the tubes narrower. It's like trying to breathe through a straw that's being squeezed. This makes it hard to breathe and can cause coughing, wheezing, and chest tightness.`,
      
      analogy: `Imagine your airways are like garden hoses. Normally, water flows through easily. But with asthma, three things happen when you encounter a trigger:

1. The hose lining gets swollen and puffy (inflammation)
2. The hose gets squeezed tighter (muscle tightening)
3. Sticky mucus fills up inside (extra mucus production)

All three make the opening smaller, making it harder for air to get through. That's why people with asthma feel like they can't catch their breath.`,
      
      keyPoints: [
        'Asthma affects the airways (tubes) in your lungs',
        'During an asthma attack, airways get swollen, tight, and filled with mucus',
        'Common triggers include dust, pollen, pets, smoke, cold air, and exercise',
        'Symptoms include wheezing, coughing, chest tightness, and shortness of breath',
        'Asthma cannot be cured, but it can be controlled with proper treatment',
        'Always have your rescue inhaler nearby for emergencies',
      ],
      
      visualAid: 'asthma-airway-comparison-diagram',
      
      story: `Meet Sarah, 10 years old. She loves playing soccer but sometimes has trouble breathing during games. One fall day, the pollen count was high. Sarah started coughing and felt tightness in her chest. Her coach noticed she was wheezing and helped her use her inhaler. Within minutes, Sarah could breathe easier and sat out the rest of the game. Her parents later worked with her doctor to update her asthma action plan, noting that fall pollen was a trigger for her. Now Sarah checks pollen counts before outdoor activities and always keeps her inhaler in her soccer bag.`,
    },
    
    // Level 2: Developing
    2: {
      summary: `Asthma is a chronic inflammatory disease of the airways characterized by bronchial hyperresponsiveness. When exposed to triggers, the airways undergo three key changes: inflammation (swelling of the airway lining), bronchospasm (tightening of smooth muscles around airways), and increased mucus production. These changes cause airflow obstruction, leading to wheezing, coughing, chest tightness, and shortness of breath. Understanding your triggers is essential for asthma control.`,
      
      keyConcepts: [
        {
          term: 'Airways',
          explanation: 'The tubes that carry air into your lungs, including the trachea, bronchi, and bronchioles',
        },
        {
          term: 'Bronchospasm',
          explanation: 'When the smooth muscles around airways tighten, making the airways narrower',
        },
        {
          term: 'Inflammation',
          explanation: 'Swelling and irritation of the airway lining caused by immune system activation',
        },
        {
          term: 'Trigger',
          explanation: 'Anything that causes asthma symptoms or makes them worse',
        },
        {
          term: 'Rescue inhaler',
          explanation: 'Fast-acting medicine that quickly opens airways during an asthma attack',
        },
        {
          term: 'Controller medication',
          explanation: 'Daily medicine that reduces airway inflammation and prevents attacks',
        },
      ],
      
      keyPoints: [
        'Asthma involves chronic inflammation of the airways, even when you feel fine',
        'The three components of an asthma attack: inflammation, bronchospasm, and mucus',
        'Triggers can be allergens (pollen, dust mites, pet dander) or irritants (smoke, pollution, cold air)',
        'Exercise can trigger asthma, but with proper management, physical activity is encouraged',
        'Rescue inhalers (like albuterol) work quickly but only last a few hours',
        'Controller medications must be taken daily to prevent attacks, even when feeling well',
      ],
      
      howItWorks: `1. A trigger enters your airways (pollen, dust, cold air, etc.)
2. Your immune system senses the trigger and sends signals
3. Inflammatory cells release chemicals that cause swelling
4. Smooth muscles around airways contract (bronchospasm)
5. Goblet cells produce extra mucus
6. The airway opening gets smaller
7. Air has trouble moving in and out
8. You feel wheezing, coughing, chest tightness, and shortness of breath
9. A rescue inhaler relaxes the muscles and opens the airway
10. Controller medications reduce inflammation over time`,
    },
    
    // Level 3: Standard
    3: {
      summary: `Asthma is a chronic inflammatory disorder of the airways characterized by variable and recurring symptoms, reversible airflow obstruction, and bronchial hyperresponsiveness. The pathophysiology involves a complex interplay of inflammatory cells (mast cells, eosinophils, T lymphocytes, neutrophils), structural cells (epithelial cells, smooth muscle cells), and mediators (histamine, leukotrienes, prostaglandins). This inflammation leads to airway hyperresponsiveness, causing recurrent episodes of wheezing, breathlessness, chest tightness, and coughing, particularly at night or in the early morning.`,
      
      mechanisms: [
        {
          name: 'Early Asthmatic Response',
          description: 'Occurs within minutes of trigger exposure. Mast cells release histamine, leukotrienes, and prostaglandins causing immediate bronchospasm and increased mucus secretion.',
        },
        {
          name: 'Late Asthmatic Response',
          description: 'Occurs 4-8 hours after exposure. Involves recruitment of eosinophils, T-cells, and neutrophils causing sustained inflammation and airway hyperresponsiveness.',
        },
        {
          name: 'Airway Remodeling',
          description: 'Chronic inflammation leads to structural changes: subepithelial fibrosis, smooth muscle hypertrophy, goblet cell hyperplasia, and increased angiogenesis.',
        },
        {
          name: 'Bronchial Hyperresponsiveness',
          description: 'Airways are overly sensitive and react excessively to various stimuli, causing exaggerated bronchoconstriction compared to normal airways.',
        },
      ],
      
      clinicalCorrelates: [
        'Peak Expiratory Flow (PEF): Measures how fast you can exhale; decreases during attacks',
        'FEV1/FVC ratio: Reduced in asthma due to obstructed airflow; improves with bronchodilators',
        'Eosinophil count: Often elevated in allergic asthma; correlates with severity',
        'IgE levels: Elevated in allergic asthma; indicates sensitization to allergens',
        'Exhaled nitric oxide (FeNO): Marker of eosinophilic airway inflammation',
        'Atopy: Personal or family history of allergies, eczema, or allergic rhinitis commonly associated with asthma',
      ],
      
      normalVsAbnormal: {
        normal: 'Airways are open with thin mucus lining. Air flows freely with minimal resistance. Bronchial smooth muscle is relaxed. Inflammatory cells are present at baseline levels.',
        abnormal: 'Airways are inflamed with swollen mucosal lining. Excess thick mucus obstructs airflow. Smooth muscle is hypertrophied and hyperresponsive. Inflammatory cells infiltrate airway walls.',
        whyItMatters: 'Chronic untreated inflammation leads to airway remodeling, permanent structural changes, and fixed airflow obstruction. Early treatment prevents progression and preserves lung function.',
      },
    },
    
    // Level 4: Advanced
    4: {
      summary: `The immunopathogenesis of asthma involves a complex interplay between innate and adaptive immune responses. Type 2 inflammation (driven by Th2 cells, ILC2s, and cytokines IL-4, IL-5, IL-13) predominates in allergic asthma, while non-type 2 inflammation (neutrophilic, paucigranulocytic) occurs in severe and obesity-related asthma. Key molecular mechanisms include IgE-mediated mast cell activation, leukotriene synthesis via the 5-lipoxygenase pathway, and cholinergic signaling. Airway remodeling involves TGF-β mediated fibroblast activation, matrix metalloproteinase dysregulation, and epithelial-mesenchymal transition.`,
      
      molecularMechanisms: [
        {
          pathway: 'Type 2 Inflammation (Th2/ILC2 pathway)',
          defect: 'Dysregulated ILC2 and Th2 cell activation; epithelial-derived alarmins (TSLP, IL-25, IL-33)',
          consequence: 'IL-4 drives IgE class switching; IL-5 recruits eosinophils; IL-13 causes goblet cell hyperplasia and smooth muscle contraction',
        },
        {
          pathway: 'IgE-Mediated Mast Cell Activation',
          defect: 'Allergen cross-links FcεRI-bound IgE on mast cells',
          consequence: 'Degranulation releases histamine, tryptase, leukotrienes (LTC4, LTD4, LTE4), prostaglandin D2; immediate bronchospasm and vascular permeability',
        },
        {
          pathway: 'Leukotriene Synthesis',
          defect: 'Arachidonic acid released from membrane phospholipids via phospholipase A2',
          consequence: '5-lipoxygenase pathway produces LTB4 (neutrophil chemotaxis) and cysteinyl leukotrienes (potent bronchoconstrictors 1000x histamine)',
        },
        {
          pathway: 'Cholinergic Mechanism',
          defect: 'Excessive acetylcholine release from vagus nerve; upregulated muscarinic M3 receptors on smooth muscle',
          consequence: 'Increased intracellular calcium; smooth muscle contraction; mucus hypersecretion via M3 receptors',
        },
        {
          pathway: 'Airway Remodeling',
          defect: 'TGF-β activation of fibroblasts; MMP-9/TIMP-1 imbalance; epithelial-mesenchymal transition',
          consequence: 'Subepithelial fibrosis; smooth muscle hypertrophy/hyperplasia; basement membrane thickening; angiogenesis',
        },
      ],
      
      pathways: [
        {
          name: 'Type 2 Inflammatory Cascade',
          steps: [
            'Epithelial cells sense allergen/irritant and release TSLP, IL-25, IL-33',
            'Dendritic cells activate naive T cells → Th2 differentiation',
            'Th2 cells and ILC2s produce IL-4, IL-5, IL-13',
            'IL-4 promotes B cell class switching to IgE',
            'IL-5 recruits, activates, and prolongs survival of eosinophils',
            'IL-13 causes goblet cell metaplasia, mucus hypersecretion, smooth muscle hypercontractility',
            'Eosinophils release cytotoxic proteins (ECP, MBP) causing tissue damage',
          ],
          regulation: 'Counter-regulated by Th1 cells (IFN-γ), Tregs (IL-10, TGF-β), and IL-12; vitamin D and microbial exposure influence Th1/Th2 balance',
        },
        {
          name: 'Beta-2 Adrenergic Signaling',
          steps: [
            'Beta-2 agonist binds to β2 receptor on smooth muscle',
            'Gs protein activates adenylyl cyclase',
            'ATP converted to cAMP (second messenger)',
            'Protein kinase A (PKA) activated',
            'Phosphorylation opens large-conductance calcium-activated potassium channels',
            'Membrane hyperpolarization; decreased intracellular calcium',
            'Smooth muscle relaxation; bronchodilation',
          ],
          regulation: 'Chronic β2-agonist use causes receptor downregulation and desensitization; corticosteroids increase β2 receptor expression',
        },
      ],
      
      references: [
        'Lambrecht BN, et al. Immunological mechanisms of asthma. Nat Rev Immunol. 2019;19(3):195-197.',
        'Fahy JV. Type 2 inflammation in asthma—present in most, absent in many. Nat Rev Immunol. 2015;15(1):57-65.',
        'Holgate ST. Innate and adaptive immune responses in asthma. Nat Med. 2012;18(5):673-683.',
        'Barnes PJ. Pathophysiology of allergic inflammation. Immunol Rev. 2011;242(1):31-50.',
      ],
    },
    
    // Level 5: Expert
    5: {
      summary: `Asthma heterogeneity is now recognized as a spectrum of distinct phenotypes and endotypes with varying inflammatory profiles, clinical presentations, and treatment responses. Beyond the traditional type 2/non-type 2 dichotomy, advanced clustering analyses identify distinct subgroups including early-onset allergic, late-onset eosinophilic, obesity-related, aspirin-exacerbated respiratory disease (AERD), and neutrophilic asthma. Biologic therapies targeting specific pathways (anti-IgE, anti-IL5/5R, anti-IL4Rα, anti-TSLP) have revolutionized severe asthma management but require precise phenotyping. The microbiome, particularly airway and gut dysbiosis, emerges as a key modulator of immune development and asthma pathogenesis.`,
      
      researchFrontiers: [
        'Biologic precision medicine: Matching biologics to specific inflammatory endotypes using biomarkers (FeNO, blood eosinophils, IgE, periostatin)',
        'Anti-TSLP (tezepelumab): First biologic effective across type 2 and non-type 2 severe asthma; targets epithelial alarmin upstream',
        'Airway microbiome: Haemophilus, Moraxella, Streptococcus dominance in severe asthma; microbiome-directed therapies under investigation',
        'Epithelial barrier dysfunction: Claudin deficiencies, tight junction disruption, and "leaky epithelium" as therapeutic targets',
        'Small airway disease: Peripheral airway dysfunction contributes to symptoms despite normal spirometry; impulse oscillometry and novel imaging approaches',
        'Bronchial thermoplasty: Long-term 10-year safety data show sustained reduction in attacks; proper patient selection remains key',
        'Exhaled breath condensate: Volatile organic compounds for non-invasive phenotyping and monitoring',
      ],
      
      controversies: [
        {
          topic: 'SABA-Only Treatment Paradigm',
          perspectives: [
            'GINA 2019 shift: As-needed ICS-formoterol preferred over SABA-only for mild asthma',
            'Evidence: SABA-only associated with increased exacerbation risk and mortality',
            'Practical barriers: Cost, availability, patient acceptance in some regions',
            'Debate: Is as-needed ICS-formoterol sufficient or should maintenance ICS be mandatory?',
          ],
        },
        {
          topic: 'Biologic Selection Criteria',
          perspectives: [
            'Biomarker-driven: FeNO, blood eosinophils, IgE levels guide selection',
            'Clinical phenotyping: Allergic vs eosinophilic vs corticosteroid-dependent patterns',
            'Cost-effectiveness: Biologics expensive; strict criteria for initiation and continuation',
            'Combination biologics: Experimental approaches for multi-pathway involvement',
          ],
        },
        {
          topic: 'ICS Dose-Response Relationship',
          perspectives: [
            'Flat dose-response curve for clinical outcomes above low-moderate doses',
            'Higher doses increase systemic side effects (adrenal suppression, bone density)',
            'Individual variation in glucocorticoid receptor sensitivity affects response',
            'Debate on optimal dosing strategies and step-down protocols',
          ],
        },
        {
          topic: 'Role of LAMA in Asthma',
          perspectives: [
            'GINA guidelines: Add-on LAMA for step 4-5 treatment',
            'Evidence from SMART and CAPTA trials show modest benefit',
            'Unclear if LAMA provides additional benefit over optimized ICS-LABA',
            'Potential role in specific phenotypes (obesity, smoking-related)',
          ],
        },
      ],
      
      statisticalContext: `Severe asthma affects approximately 5-10% of asthma patients but accounts for >50% of asthma costs. Biologic therapy response rates vary by phenotype:

- Anti-IgE (omalizumab): 50-60% responders; better with higher IgE and allergy component
- Anti-IL5/5R (mepolizumab, reslizumab, benralizumab): 60-70% reduction in exacerbations in eosinophilic phenotype
- Anti-IL4Rα (dupilumab): 47-50% reduction in exacerbations; effective in both allergic and non-allergic type 2
- Anti-TSLP (tezepelumab): 56% reduction; effective regardless of baseline eosinophil count

Predictors of poor response: Smoking history, obesity, fixed airflow obstruction, psychological comorbidities, non-adherence.`,
      
      references: [
        'Peters MC, et al. Measures of gene expression in sputum cells can identify TH2-high and TH2-low subtypes of asthma. J Allergy Clin Immunol. 2014;133(2):388-394.',
        'Menzies-Gow A, et al. Tezepelumab in adults and adolescents with severe, uncontrolled asthma. N Engl J Med. 2021;384(19):1800-1809.',
        'GINA Global Initiative for Asthma. Global Strategy for Asthma Management and Prevention, 2024 Update.',
        'Holguin F, et al. Management of severe asthma: a European Respiratory Society/American Thoracic Society guideline. Eur Respir J. 2020;55(4):1900588.',
      ],
    },
    
    // Level 6: Clinical
    6: {
      summary: `From a clinical perspective, asthma management requires comprehensive assessment, accurate diagnosis, phenotype identification, and stepwise treatment according to GINA guidelines. Key elements include objective confirmation with spirometry, assessment of inhaler technique and adherence, identification of comorbidities, and evaluation for severe asthma requiring specialist referral. Stepwise pharmacotherapy ranges from as-needed low-dose ICS-formoterol for mild asthma to high-dose ICS-LABA plus LAMA and biologics for severe disease. Non-pharmacological interventions (smoking cessation, allergen avoidance, breathing exercises, pulmonary rehabilitation) are essential adjuncts.`,
      
      clinicalApproach: [
        'Diagnosis confirmation: Spirometry showing reversible airflow obstruction (≥12% and ≥200ml improvement in FEV1 after bronchodilator)',
        'Initial assessment: Symptom control (ACT score), exacerbation history, lung function, comorbidities, inhaler technique, adherence',
        'Phenotyping: Type 2 vs non-type 2; allergic vs non-allergic; eosinophilic vs neutrophilic; early vs late onset',
        'Stepwise treatment: GINA steps 1-5 with regular review and adjustment',
        'Severe asthma referral: Criteria include requiring GINA step 4-5 treatment, persistent poor control, or ≥2 exacerbations/year',
        'Comorbidity management: Allergic rhinitis, rhinosinusitis, GERD, obesity, anxiety/depression, obstructive sleep apnea',
        'Patient education: Action plans, trigger avoidance, proper inhaler technique, recognition of worsening symptoms',
      ],
      
      differentialConsiderations: [
        'COPD: History of smoking, onset after age 40, persistent airflow obstruction not fully reversible',
        'Chronic cough syndromes: Upper airway cough syndrome, GERD-related cough, ACE inhibitor-induced',
        'Vocal cord dysfunction: Paradoxical vocal cord movement; flow-volume loop shows inspiratory plateau',
        'Heart failure: Orthopnea, paroxysmal nocturnal dyspnea, fine crackles, elevated BNP',
        'Pulmonary embolism: Acute dyspnea, pleuritic chest pain, tachycardia, risk factors',
        'Eosinophilic granulomatosis with polyangiitis (EGPA): Asthma + eosinophilia + systemic vasculitis',
        'Allergic bronchopulmonary aspergillosis (ABPA): Central bronchiectasis, elevated IgE, positive Aspergillus sensitization',
        'Cystic fibrosis: Young adult onset, chronic productive cough, bronchiectasis, digital clubbing',
      ],
      
      guidelines: [
        'GINA Global Initiative for Asthma. Global Strategy for Asthma Management and Prevention, 2024 Update.',
        'National Asthma Education and Prevention Program (NAEPP). Expert Panel Report 4: Guidelines for the Diagnosis and Management of Asthma, 2020.',
        'British Thoracic Society/Scottish Intercollegiate Guidelines Network. British Guideline on the Management of Asthma, 2019 Update.',
        'Holguin F, et al. Management of severe asthma: a European Respiratory Society/American Thoracic Society guideline. Eur Respir J. 2020;55(4):1900588.',
      ],
      
      caseExamples: [
        {
          presentation: '24-year-old female with intermittent wheezing and chest tightness triggered by cat exposure and during spring pollen season. Symptoms occur 2-3 times per month and respond to albuterol. No nighttime symptoms. FEV1 92% predicted with 15% bronchodilator response.',
          keyFindings: [
            'Allergic triggers identified (cats, pollen)',
            'Intermittent symptoms with good baseline lung function',
            'Reversible airflow obstruction confirmed',
            'GINA Step 2 classification (mild persistent)',
          ],
          teachingPoints: [
            'As-needed low-dose ICS-formoterol is preferred over SABA-only (GINA 2024)',
            'Trigger avoidance strategies: HEPA filter, keeping cats out of bedroom, pre-treating with ICS-formoterol before exposure',
            'Allergen immunotherapy should be considered for confirmed cat and pollen allergy',
            'Review inhaler technique; provide written asthma action plan',
            'Follow-up in 3 months to assess control',
          ],
        },
        {
          presentation: '52-year-old male with severe asthma despite high-dose fluticasone/salmeterol (500/50 twice daily), tiotropium, montelukast, and requiring 3 prednisone bursts in past year. Former smoker (10 pack-years). BMI 34. Blood eosinophils 450/μL. FeNO 65 ppb.',
          keyFindings: [
            'Severe asthma by GINA definition (Step 5)',
            'Type 2 inflammation phenotype: elevated eosinophils, high FeNO',
            'Obesity and smoking history may contribute to symptoms',
            'On multiple controllers with poor control',
          ],
          teachingPoints: [
            'Refer to severe asthma clinic for biologic therapy evaluation',
            'Anti-IL5/5R (mepolizumab, benralizumab) or anti-IL4Rα (dupilumab) appropriate given eosinophilic phenotype',
            'Consider anti-TSLP (tezepelumab) if comorbidities present or eosinophils fluctuate',
            'Weight loss counseling: 5-10% reduction improves symptoms and medication response',
            'Check adherence and inhaler technique before escalating',
            'Evaluate for comorbidities: OSA, GERD, anxiety/depression',
            'Smoking cessation absolutely essential',
          ],
        },
        {
          presentation: '35-year-old female with asthma since childhood, worsening nasal polyposis, and severe reactions to aspirin (bronchospasm, rhinorrhea). Nasal polyps requiring 3 surgeries. Poor asthma control on high-dose ICS-LABA.',
          keyFindings: [
            'Classic triad of Aspirin-Exacerbated Respiratory Disease (AERD)',
            'Asthma + nasal polyps + NSAID sensitivity',
            'Type 2 inflammation with likely prostaglandin/ leukotriene dysregulation',
            'Frequent surgeries indicate inadequate medical management',
          ],
          teachingPoints: [
            'Diagnosis: AERD (Samter\'s Triad) - absolute NSAID avoidance essential',
            'Dupilumab (anti-IL4Rα) FDA-approved for AERD; reduces polyp size and improves smell',
            'Omalizumab and mepolizumab also effective for nasal polyps',
            'Consider aspirin desensitization if not controlled on biologics',
            'Daily intranasal corticosteroids essential for polyp management',
            'Leukotriene modification (montelukast or 5-lipoxygenase inhibitor) as adjunct',
          ],
        },
      ],
      
      references: [
        'GINA Global Initiative for Asthma. Global Strategy for Asthma Management and Prevention, 2024 Update.',
        'Papi A, et al. Biologic therapies for severe asthma: an updated guideline from the ATS. Am J Respir Crit Care Med. 2023;207(12):1593-1607.',
        'Lazarus SC. Clinical practice. Emergency treatment of asthma. N Engl J Med. 2010;363(8):755-764.',
        'Covar RA, et al. Issues in comorbidities in childhood asthma. J Allergy Clin Immunol Pract. 2021;9(4):1455-1464.',
      ],
    },
  },
  
  interactions: {
    anatomyPoints: [
      { structure: 'lungs', focus: 'bronchi', description: 'Large airways where asthma inflammation primarily occurs' },
      { structure: 'lungs', focus: 'bronchioles', description: 'Small airways that also participate in bronchoconstriction' },
      { structure: 'respiratory-system', focus: 'trachea', description: 'Upper airway connection to the bronchial tree' },
      { structure: 'immune-system', focus: 'mast-cells', description: 'Key cells in immediate allergic response' },
    ],
    
    relatedLabs: [
      'spirometry',
      'peak-expiratory-flow',
      'fractional-exhaled-nitric-oxide',
      'complete-blood-count',
      'total-ige',
      'allergen-specific-ige',
    ],
    
    relatedMedications: [
      'albuterol-salbutamol',
      'inhaled-corticosteroids',
      'long-acting-beta-agonists',
      'leukotriene-receptor-antagonists',
      'biologics-omalizumab',
      'biologics-mepolizumab',
      'biologics-dupilumab',
    ],
    
    relatedConditions: [
      'allergic-rhinitis',
      'chronic-rhinosinusitis',
      'nasal-polyps',
      'aspirin-exacerbated-respiratory-disease',
      'eosinophilic-esophagitis',
      'atopic-dermatitis',
    ],
    
    visualizations: [
      { type: 'animation', id: 'asthma-airway-inflammation', caption: '3D animation showing airway changes during asthma attack' },
      { type: 'diagram', id: 'inhaler-technique-steps', caption: 'Step-by-step proper inhaler technique' },
      { type: 'graph', id: 'peak-flow-zones', caption: 'Asthma action plan with green, yellow, and red zones' },
    ],
  },
  
  quiz: {
    title: 'Test Your Understanding',
    questions: [
      {
        id: 'asthma-q1',
        type: 'multiple-choice',
        complexity: 1,
        question: 'What happens to your airways during an asthma attack?',
        options: [
          'They become larger and more open',
          'They get swollen, tight, and filled with mucus',
          'They completely close up',
          'They move faster',
        ],
        correctAnswer: 1,
        explanation: 'During an asthma attack, three things happen: the airway lining swells (inflammation), muscles tighten around the airways (bronchospasm), and extra mucus is produced. All three narrow the airway opening.',
      },
      {
        id: 'asthma-q2',
        type: 'multiple-choice',
        complexity: 2,
        question: 'What is the difference between a rescue inhaler and a controller medication?',
        options: [
          'There is no difference - they work the same way',
          'Rescue inhalers work quickly for immediate relief; controllers work slowly to prevent attacks',
          'Rescue inhalers are stronger and should be used daily',
          'Controller medications are only for severe asthma',
        ],
        correctAnswer: 1,
        explanation: 'Rescue inhalers (like albuterol) work within minutes to open airways during an attack but only last 4-6 hours. Controller medications (usually inhaled corticosteroids) reduce inflammation over time and must be taken daily to prevent attacks, even when you feel fine.',
      },
      {
        id: 'asthma-q3',
        type: 'multiple-choice',
        complexity: 3,
        question: 'Which cells are most characteristic of Type 2 inflammation in allergic asthma?',
        options: [
          'Neutrophils and macrophages',
          'Eosinophils and mast cells',
          'Red blood cells and platelets',
          'Neurons and glial cells',
        ],
        correctAnswer: 1,
        explanation: 'Type 2 inflammation in allergic asthma is characterized by eosinophils (recruited by IL-5) and mast cells (activated by IgE-mediated allergen cross-linking). These cells release inflammatory mediators that cause bronchospasm, mucus production, and airway hyperresponsiveness.',
      },
      {
        id: 'asthma-q4',
        type: 'multiple-choice',
        complexity: 4,
        question: 'What is the mechanism of bronchodilation with beta-2 agonists like albuterol?',
        options: [
          'They block histamine receptors',
          'They increase cAMP via Gs-coupled receptors, leading to smooth muscle relaxation',
          'They inhibit leukotriene synthesis',
          'They block acetylcholine at muscarinic receptors',
        ],
        correctAnswer: 1,
        explanation: 'Beta-2 agonists bind to β2 receptors on airway smooth muscle, activating Gs proteins which stimulate adenylyl cyclase to produce cAMP. This activates protein kinase A (PKA), leading to potassium channel opening, membrane hyperpolarization, decreased intracellular calcium, and smooth muscle relaxation.',
      },
      {
        id: 'asthma-q5',
        type: 'multiple-choice',
        complexity: 6,
        question: 'According to GINA 2024 guidelines, what is the preferred treatment for a patient with mild asthma (Step 2) who has intermittent symptoms?',
        options: [
          'SABA-only as needed',
          'Daily low-dose ICS with SABA as reliever',
          'As-needed low-dose ICS-formoterol',
          'High-dose ICS-LABA daily',
        ],
        correctAnswer: 2,
        explanation: 'GINA 2024 recommends as-needed low-dose ICS-formoterol as the preferred treatment for mild asthma (Step 2). This approach reduces severe exacerbations compared to SABA-only regimens by providing anti-inflammatory coverage when symptoms occur. The combination acts as both reliever and controller.',
      },
    ],
    passingScore: 80,
  },
  
  references: [
    {
      citation: 'GINA Global Initiative for Asthma. Global Strategy for Asthma Management and Prevention, 2024 Update.',
      url: 'https://ginasthma.org/gina-reports/',
    },
    {
      citation: 'Papi A, et al. Biologic therapies for severe asthma: an updated guideline from the ATS. Am J Respir Crit Care Med. 2023;207(12):1593-1607.',
      doi: '10.1164/rccm.202307-1244ST',
    },
    {
      citation: 'Lambrecht BN, et al. Immunological mechanisms of asthma. Nat Rev Immunol. 2019;19(3):195-197.',
      doi: '10.1038/s41577-019-0147-3',
    },
    {
      citation: 'Menzies-Gow A, et al. Tezepelumab in adults and adolescents with severe, uncontrolled asthma. N Engl J Med. 2021;384(19):1800-1809.',
      doi: '10.1056/NEJMoa2034975',
    },
    {
      citation: 'National Asthma Education and Prevention Program (NAEPP). Expert Panel Report 4: Guidelines for the Diagnosis and Management of Asthma, 2020.',
      url: 'https://www.nhlbi.nih.gov/health-topics/guidelines-for-diagnosis-management-of-asthma',
    },
  ],
  
  resources: [
    {
      title: 'Asthma and Allergy Foundation of America',
      type: 'website',
      url: 'https://www.aafa.org/',
      description: 'Patient resources, educational materials, and support for asthma management',
    },
    {
      title: 'American Lung Association - Asthma',
      type: 'website',
      url: 'https://www.lung.org/lung-health-diseases/lung-disease-lookup/asthma',
      description: 'Comprehensive asthma information and educational videos',
    },
    {
      title: 'GINA Patient Guide',
      type: 'article',
      url: 'https://ginasthma.org/patient-guide/',
      description: 'Patient-friendly guide to asthma management from GINA',
    },
    {
      title: 'Proper Inhaler Technique Videos',
      type: 'video',
      url: 'https://www.use-inhalers.com/',
      description: 'Visual demonstrations of correct inhaler use for different device types',
    },
  ],
};

export default asthmaModule;
