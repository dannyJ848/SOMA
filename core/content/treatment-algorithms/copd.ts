/**
 * COPD Management Algorithm
 *
 * Based on GOLD 2024 Guidelines (Global Initiative for Chronic Obstructive Lung Disease)
 * Covers diagnosis, ABCD assessment, pharmacotherapy, and exacerbation management
 */

import { TreatmentAlgorithm } from './types';

export const copdAlgorithm: TreatmentAlgorithm = {
  id: 'treatment-copd-gold',
  condition: 'Chronic Obstructive Pulmonary Disease',
  alternateNames: ['COPD', 'Emphysema', 'Chronic Bronchitis'],
  icdCodes: ['J44.9', 'J44.0', 'J44.1', 'J43.9'],
  guidelineSource: 'GOLD (Global Initiative for Chronic Obstructive Lung Disease)',
  guidelineYear: 2024,
  lastReviewed: '2026-01-24',

  levels: {
    1: {
      level: 1,
      overview: 'COPD makes it hard to breathe because your airways are narrowed and damaged. Inhalers help open your airways and reduce inflammation so you can breathe more easily.',
      whyThisApproach: 'There are different types of inhalers. Some work quickly to help you breathe right away. Others work slowly but keep your lungs open all day. Using them regularly helps you feel better.',
      whatToExpect: 'You will use one or more inhalers every day. Your doctor will teach you how to use them correctly. Quitting smoking is the most important thing you can do.',
      keyPoints: [
        'Quitting smoking is the most important treatment',
        'Use your inhalers every day, even when you feel okay',
        'Learn to recognize when your breathing is getting worse',
        'Stay active - exercise helps your lungs work better',
        'Get your flu shot every year and pneumonia vaccine'
      ],
      patientQuestions: [
        'Why do I need daily inhalers if I feel fine?',
        'What should I do if my breathing suddenly gets worse?',
        'Is it too late to quit smoking?'
      ]
    },
    2: {
      level: 2,
      overview: 'COPD treatment uses long-acting bronchodilators (LABAs, LAMAs) to keep airways open and inhaled steroids to reduce inflammation in some patients. The combination you need depends on your symptoms and how often you have flare-ups.',
      whyThisApproach: 'COPD damages the lungs over time. Bronchodilators relax the muscles around your airways, making breathing easier. Inhaled steroids can help if you have frequent flare-ups. The goal is to reduce symptoms and prevent exacerbations.',
      whatToExpect: 'Your doctor will assess your symptoms and exacerbation history to choose the right inhalers. You may start with one inhaler and add more if needed. Inhaler technique is important - ask for a demonstration.',
      keyPoints: [
        'GOLD groups (A, B, E) guide treatment based on symptoms and exacerbations',
        'LAMAs (like tiotropium) and LABAs (like formoterol) are the foundation',
        'Inhaled steroids added only if frequent exacerbations (especially with high eosinophils)',
        'Rescue inhalers (short-acting) are for sudden symptoms, not daily use',
        'Pulmonary rehabilitation improves exercise capacity and quality of life'
      ],
      patientQuestions: [
        'What is the difference between my daily and rescue inhalers?',
        'Why does my doctor check my blood count?',
        'Should I use a spacer with my inhaler?'
      ]
    },
    3: {
      level: 3,
      overview: 'GOLD 2024 classifies COPD into groups A, B, and E based on symptoms (mMRC/CAT) and exacerbation history. Initial therapy ranges from monotherapy (LAMA or LABA) to dual bronchodilation (LAMA+LABA) to triple therapy (LAMA+LABA+ICS). Eosinophil count guides ICS use.',
      whyThisApproach: 'The GOLD framework separates airflow limitation severity (spirometry) from clinical impact (symptoms/exacerbations). This phenotype-guided approach targets therapy to those most likely to benefit. Dual bronchodilation is preferred over ICS-containing regimens unless eosinophils elevated.',
      whatToExpect: 'Diagnosis requires spirometry (post-bronchodilator FEV1/FVC <0.7). Treatment escalation follows the GOLD ABE assessment algorithm. Non-pharmacologic interventions (smoking cessation, vaccination, pulmonary rehab) are as important as medications.',
      keyPoints: [
        'Group A: Few symptoms, 0-1 moderate exacerbations - Bronchodilator PRN or LAMA/LABA',
        'Group B: More symptoms, 0-1 moderate exacerbations - LAMA + LABA preferred',
        'Group E (Exacerbator): >=2 moderate or >=1 hospitalization - LAMA + LABA, add ICS if eos >=300',
        'Blood eosinophils >=300: Favors ICS benefit; <100: Limited ICS benefit',
        'FEV1 <50% predicted indicates severe/very severe obstruction'
      ],
      detailedSteps: [
        {
          id: 'copd-step-1',
          order: 1,
          name: 'Non-Pharmacologic Interventions',
          description: 'Foundation of COPD management',
          nonPharmacologic: [
            'Smoking cessation: Most effective intervention to slow disease progression',
            'Pulmonary rehabilitation: 6-8 week program improves dyspnea and QOL',
            'Vaccinations: Influenza (annual), pneumococcal (PCV20 or PCV15+PPSV23), Tdap, Zoster, COVID-19',
            'Supplemental oxygen: If PaO2 <=55 or SpO2 <=88% at rest',
            'Nutritional support: Maintain BMI; underweight associated with poor outcomes'
          ],
          targets: [
            { parameter: 'Smoking cessation', goal: '100% quit rate', rationale: 'Only intervention proven to slow FEV1 decline' },
            { parameter: 'Pulmonary rehab', goal: 'Complete 6-8 week program', rationale: 'Grade A evidence for symptom improvement' }
          ],
          patientEducation: 'Quitting smoking at any stage of COPD is beneficial. Nicotine replacement therapy and medications can double quit rates.'
        },
        {
          id: 'copd-step-2',
          order: 2,
          name: 'Initial Pharmacotherapy by GOLD Group',
          description: 'Group-based initial therapy selection',
          medications: [
            {
              name: 'Tiotropium',
              genericName: 'Tiotropium',
              class: 'LAMA (Long-Acting Muscarinic Antagonist)',
              dosing: '18mcg (HandiHaler) or 2.5mcg x2 puffs (Respimat) daily',
              commonSideEffects: ['Dry mouth', 'Urinary retention', 'Constipation'],
              contraindications: ['Severe renal impairment (Respimat)', 'Narrow-angle glaucoma'],
              considerations: 'UPLIFT trial: Reduced exacerbations; foundation of COPD therapy',
              costCategory: 'moderate'
            },
            {
              name: 'Umeclidinium/Vilanterol',
              genericName: 'Umeclidinium/Vilanterol',
              class: 'LAMA/LABA Combination',
              dosing: '62.5/25mcg one inhalation daily',
              commonSideEffects: ['Dry mouth', 'Headache', 'Nasopharyngitis'],
              considerations: 'EMAX: Superior to monotherapy for FEV1 and symptoms',
              costCategory: 'high'
            },
            {
              name: 'Fluticasone Furoate/Umeclidinium/Vilanterol',
              genericName: 'Fluticasone Furoate/Umeclidinium/Vilanterol',
              class: 'Triple Therapy (ICS/LAMA/LABA)',
              dosing: '100/62.5/25mcg one inhalation daily',
              commonSideEffects: ['Oral candidiasis', 'Dysphonia', 'Pneumonia risk'],
              seriousWarnings: ['Increased pneumonia risk with ICS'],
              considerations: 'IMPACT: 25% reduction in moderate/severe exacerbations vs LAMA/LABA',
              costCategory: 'very-high'
            }
          ],
          targets: [
            { parameter: 'Group A', goal: 'Bronchodilator PRN or single LAMA/LABA', rationale: 'Low symptom burden' },
            { parameter: 'Group B', goal: 'LAMA + LABA preferred', rationale: 'More symptoms, dual bronchodilation superior' },
            { parameter: 'Group E', goal: 'LAMA + LABA; consider triple if eos >=300', rationale: 'Exacerbation reduction priority' }
          ]
        },
        {
          id: 'copd-step-3',
          order: 3,
          name: 'Escalation and De-escalation',
          description: 'Adjust therapy based on response and treatable traits',
          medications: [
            {
              name: 'Roflumilast',
              genericName: 'Roflumilast',
              class: 'PDE4 Inhibitor',
              dosing: '500mcg daily',
              commonSideEffects: ['Nausea', 'Diarrhea', 'Weight loss', 'Headache'],
              seriousWarnings: ['Psychiatric symptoms (depression, suicidality)'],
              contraindications: ['Moderate-severe liver impairment'],
              considerations: 'For chronic bronchitis phenotype with frequent exacerbations on triple therapy',
              costCategory: 'high'
            },
            {
              name: 'Azithromycin',
              genericName: 'Azithromycin',
              class: 'Macrolide Antibiotic',
              dosing: '250mg daily or 500mg three times weekly',
              commonSideEffects: ['Hearing impairment', 'QTc prolongation', 'GI upset'],
              contraindications: ['QTc prolongation', 'Hearing loss'],
              considerations: 'For frequent exacerbators; obtain baseline audiometry and ECG',
              costCategory: 'low'
            }
          ],
          nonPharmacologic: [
            'ICS de-escalation: If pneumonia, poor initial response, or low eosinophils',
            'Consider treatable traits: Eosinophilia, chronic bronchitis, pulmonary hypertension',
            'Bronchoscopic interventions: Endobronchial valves for severe hyperinflation'
          ]
        },
        {
          id: 'copd-step-4',
          order: 4,
          name: 'Exacerbation Management',
          description: 'Acute treatment of COPD flares',
          medications: [
            {
              name: 'Prednisone',
              genericName: 'Prednisone',
              class: 'Systemic Corticosteroid',
              dosing: '40mg daily for 5 days',
              commonSideEffects: ['Hyperglycemia', 'Insomnia', 'GI upset'],
              considerations: 'REDUCE trial: 5 days non-inferior to 14 days; shorter course preferred'
            },
            {
              name: 'Albuterol nebulizer',
              genericName: 'Albuterol',
              class: 'SABA (Short-Acting Beta-Agonist)',
              dosing: '2.5mg nebulized Q4-6h PRN',
              considerations: 'Cornerstone of acute bronchodilation'
            }
          ],
          monitoringRequired: [
            { test: 'Spirometry', frequency: 'Not during exacerbation; recheck 4-6 weeks after', purpose: 'Assess for baseline decline' },
            { test: 'Blood eosinophils', frequency: 'During stable state', purpose: 'Guide ICS therapy' }
          ],
          patientEducation: 'Exacerbations accelerate lung function decline. Having an action plan and early treatment improves outcomes.'
        }
      ]
    },
    4: {
      level: 4,
      overview: 'Advanced COPD management integrates biomarker-guided therapy (eosinophils, exhaled nitric oxide), treatable traits identification, and interventional approaches. The GOLD 2024 report emphasizes personalized medicine through phenotyping and endotyping.',
      whyThisApproach: 'Heterogeneity in COPD requires precision approaches. Eosinophil-guided ICS prescribing prevents overuse while identifying responders. Asthma-COPD overlap (ACO), alpha-1 antitrypsin deficiency, and pulmonary hypertension require specific management.',
      whatToExpect: 'Complex COPD patients benefit from multidisciplinary teams including pulmonology, cardiology, palliative care, and rehabilitation. Lung volume reduction procedures offer options for select patients with severe hyperinflation.',
      keyPoints: [
        'Blood eosinophils: <100 cells/uL minimal ICS benefit; >=300 cells/uL clear ICS benefit',
        'IMPACT/ETHOS trials: Triple therapy reduces exacerbations and mortality vs dual',
        'Alpha-1 antitrypsin augmentation: For patients with confirmed AAT deficiency (PiZZ)',
        'Lung volume reduction surgery: For upper lobe predominant emphysema with low exercise capacity',
        'Endobronchial valves: Alternative to surgery in select patients with complete fissures'
      ],
      detailedSteps: [
        {
          id: 'copd-advanced-1',
          order: 1,
          name: 'Biomarker-Guided Therapy',
          description: 'Precision approaches using eosinophils and imaging',
          targets: [
            { parameter: 'Eosinophils <100', goal: 'Avoid ICS (low benefit, pneumonia risk)', rationale: 'WISDOM trial ICS withdrawal safe' },
            { parameter: 'Eosinophils 100-300', goal: 'Consider ICS if >=2 exacerbations', rationale: 'Intermediate benefit zone' },
            { parameter: 'Eosinophils >=300', goal: 'Strong ICS indication', rationale: 'IMPACT subgroup analysis' }
          ],
          monitoringRequired: [
            { test: 'Blood eosinophils', frequency: 'Stable state, not during exacerbation', purpose: 'ICS decision-making' },
            { test: 'CT chest', frequency: 'As indicated', purpose: 'Assess emphysema distribution for interventions' }
          ]
        },
        {
          id: 'copd-advanced-2',
          order: 2,
          name: 'Alpha-1 Antitrypsin Deficiency',
          description: 'Screening and augmentation therapy',
          medications: [
            {
              name: 'Alpha-1 Proteinase Inhibitor',
              class: 'Augmentation Therapy',
              dosing: '60mg/kg IV weekly',
              considerations: 'For PiZZ phenotype with FEV1 25-80% predicted; slows emphysema progression on CT'
            }
          ],
          nonPharmacologic: [
            'Screen all symptomatic COPD patients at least once',
            'AAT level <11 uM suggests deficiency; confirm with phenotype/genotype',
            'Family screening if index case identified'
          ],
          patientEducation: 'Alpha-1 antitrypsin deficiency is genetic. Family members should be tested. Augmentation therapy slows lung damage but requires weekly infusions.'
        },
        {
          id: 'copd-advanced-3',
          order: 3,
          name: 'Interventional Approaches',
          description: 'Lung volume reduction for severe hyperinflation',
          nonPharmacologic: [
            'LVRS: For upper lobe predominant emphysema with low exercise capacity (NETT criteria)',
            'Endobronchial valves: For heterogeneous emphysema with complete fissures and no collateral ventilation',
            'Bullectomy: For giant bulla occupying >1/3 hemithorax compressing adjacent lung'
          ],
          targets: [
            { parameter: 'LVRS candidacy', goal: 'Upper lobe emphysema, low max VO2', rationale: 'NETT trial showed survival benefit' },
            { parameter: 'Valve candidacy', goal: 'Intact fissure, no collateral ventilation', rationale: 'Chartis assessment pre-procedure' }
          ]
        }
      ]
    },
    5: {
      level: 5,
      overview: 'Cutting-edge COPD management explores biologics for eosinophilic COPD, regenerative medicine, and artificial intelligence-driven exacerbation prediction. Palliative care integration addresses symptom burden and advance care planning in severe disease.',
      whyThisApproach: 'Despite optimal therapy, many patients have refractory symptoms. Biologics targeting type 2 inflammation show promise. Lung transplantation offers survival benefit for end-stage disease. Comprehensive palliative care improves quality of life.',
      whatToExpect: 'Research into COPD heterogeneity identifies novel therapeutic targets. Clinical trials are ongoing for multiple biologic agents. End-stage COPD requires shared decision-making about transplantation, mechanical ventilation, and end-of-life care.',
      keyPoints: [
        'Biologics: Dupilumab (BOREAS/NOTUS), benralizumab under investigation for eosinophilic COPD',
        'Lung transplant: For FEV1 <25%, significant exacerbations, hypoxemia with cor pulmonale',
        'Noninvasive ventilation: For chronic hypercapnic respiratory failure (RESCUE trial)',
        'Palliative care: Early integration improves symptoms, reduces hospitalizations',
        'Digital health: AI-based exacerbation prediction may enable preemptive therapy'
      ],
      detailedSteps: [
        {
          id: 'copd-specialist-1',
          order: 1,
          name: 'Biologics for Eosinophilic COPD',
          description: 'Emerging therapies targeting type 2 inflammation',
          medications: [
            {
              name: 'Dupilumab',
              genericName: 'Dupilumab',
              class: 'IL-4/IL-13 Inhibitor',
              dosing: '300mg subcutaneous every 2 weeks',
              considerations: 'BOREAS/NOTUS: 30% exacerbation reduction in COPD with eos >=300 on triple therapy; first biologic with positive Phase 3 data in COPD'
            },
            {
              name: 'Benralizumab',
              genericName: 'Benralizumab',
              class: 'Anti-IL-5R Alpha',
              dosing: '30mg Q4 weeks x3, then Q8 weeks',
              considerations: 'GALATHEA/TERRANOVA: Did not meet primary endpoint in COPD; eosinophil depletion achieved'
            }
          ],
          patientEducation: 'Biologics are investigational for COPD but may become options for patients with high eosinophils who continue to have exacerbations despite triple therapy.'
        },
        {
          id: 'copd-specialist-2',
          order: 2,
          name: 'Respiratory Failure Management',
          description: 'NIV and transplant evaluation',
          nonPharmacologic: [
            'Nocturnal NIV: For chronic hypercapnic COPD (PaCO2 >52) with repeated hospitalizations',
            'High-flow nasal cannula: Reduces work of breathing, improves secretion clearance',
            'Lung transplant evaluation: FEV1 <25%, hypoxia, hypercapnia, cor pulmonale, BODE 7-10'
          ],
          targets: [
            { parameter: 'NIV settings', goal: 'IPAP/EPAP targeting PaCO2 reduction', rationale: 'HOT-HMV trial improved survival' },
            { parameter: 'Transplant timing', goal: 'Refer when BODE 5-6', rationale: 'Early evaluation allows optimization' }
          ],
          monitoringRequired: [
            { test: 'Arterial blood gas', frequency: 'To guide NIV titration', purpose: 'Target normocapnia overnight' },
            { test: 'BODE index', frequency: 'Annually in severe COPD', purpose: 'Transplant timing' }
          ]
        },
        {
          id: 'copd-specialist-3',
          order: 3,
          name: 'Palliative Care Integration',
          description: 'Symptom management and advance care planning',
          medications: [
            {
              name: 'Low-dose Opioids',
              class: 'Opioid Analgesic',
              dosing: 'Morphine 2.5-5mg PO Q4h PRN or extended-release formulation',
              considerations: 'Reduces dyspnea without significant respiratory depression at low doses'
            }
          ],
          nonPharmacologic: [
            'Advance care planning: Discuss goals of care, intubation preferences',
            'Dyspnea management: Fans, positioning, breathing techniques',
            'Anxiety and depression screening and treatment',
            'Hospice referral: When prognosis <6 months and comfort-focused care preferred'
          ],
          patientEducation: 'Palliative care focuses on quality of life and can be provided alongside active treatment. It is not the same as hospice.'
        }
      ]
    }
  },

  steps: [
    {
      id: 'copd-foundation',
      order: 1,
      name: 'Non-Pharmacologic Foundation',
      description: 'Smoking cessation, vaccination, pulmonary rehab',
      nonPharmacologic: ['Smoking cessation', 'Vaccinations', 'Pulmonary rehabilitation', 'Oxygen if indicated'],
      timeframe: 'Ongoing'
    },
    {
      id: 'copd-initial',
      order: 2,
      name: 'Initial Pharmacotherapy',
      description: 'GOLD group-based initial therapy',
      medications: [
        { name: 'LAMA', class: 'Long-acting muscarinic antagonist', considerations: 'Group A or B' },
        { name: 'LAMA + LABA', class: 'Dual bronchodilation', considerations: 'Group B or E' }
      ],
      timeframe: 'Start at diagnosis'
    },
    {
      id: 'copd-escalate',
      order: 3,
      name: 'Escalate to Triple Therapy',
      description: 'Add ICS if eosinophils elevated and frequent exacerbations',
      medications: [
        { name: 'ICS/LAMA/LABA', class: 'Triple therapy', considerations: 'Group E with eos >=300' }
      ],
      timeframe: 'If persistent exacerbations on LAMA/LABA'
    },
    {
      id: 'copd-additional',
      order: 4,
      name: 'Additional Therapies',
      description: 'Roflumilast, azithromycin, interventions',
      medications: [
        { name: 'Roflumilast', class: 'PDE4 inhibitor', considerations: 'Chronic bronchitis phenotype' },
        { name: 'Azithromycin', class: 'Macrolide', considerations: 'Frequent exacerbator, non-smoker' }
      ],
      timeframe: 'If persistent exacerbations on triple therapy'
    }
  ],

  stepCriteria: {
    stepUp: {
      triggers: [
        'Persistent dyspnea (mMRC >=2) despite current therapy',
        'Two or more moderate exacerbations in past year',
        'One or more hospitalizations for COPD exacerbation',
        'Blood eosinophils >=300 cells/uL (favors ICS addition)'
      ],
      timeline: 'Reassess every 3-6 months or after exacerbation',
      considerations: [
        'Verify inhaler technique before escalating',
        'Check adherence to current therapy',
        'Assess for comorbidities contributing to symptoms (cardiac, anxiety)'
      ]
    },
    stepDown: {
      triggers: [
        'No exacerbations in past year on current therapy',
        'Blood eosinophils <300 cells/uL (consider ICS withdrawal)',
        'Pneumonia events on ICS',
        'Palliative goals of care with focus on symptom control'
      ],
      timeline: 'Gradual reduction with monitoring',
      considerations: [
        'WISDOM trial supports ICS withdrawal if eosinophils <300',
        'Maintain dual bronchodilation after ICS withdrawal',
        'Monitor closely for 3-6 months after step-down'
      ]
    }
  },

  specialPopulations: [
    {
      population: 'Asthma-COPD Overlap',
      modifications: [
        'ICS indicated regardless of eosinophils',
        'Do not use LAMA alone (asthma component needs ICS)',
        'Consider referral for bronchoscopy if diagnostic uncertainty'
      ]
    },
    {
      population: 'Alpha-1 Antitrypsin Deficiency',
      modifications: [
        'Augmentation therapy if FEV1 25-80% predicted',
        'Screen all symptomatic COPD patients at least once',
        'Genetic counseling for family members'
      ]
    },
    {
      population: 'Elderly',
      modifications: [
        'Consider dry powder inhaler limitations (inspiratory flow)',
        'Soft mist inhalers or nebulizers may be easier',
        'Watch for anticholinergic side effects (urinary retention, cognitive)'
      ]
    }
  ],

  emergencyIndications: [
    'Acute respiratory failure (pH <7.35, PaCO2 >50)',
    'Severe dyspnea with accessory muscle use',
    'Altered mental status',
    'Hemodynamic instability',
    'Failure of outpatient exacerbation treatment'
  ],

  referralCriteria: [
    'Uncertain diagnosis (consider asthma overlap, bronchiectasis)',
    'Frequent exacerbations despite optimal therapy',
    'Rapid FEV1 decline (>40 mL/year)',
    'Alpha-1 antitrypsin deficiency',
    'Consideration for lung volume reduction or transplant',
    'Oxygen evaluation'
  ],

  citations: [
    {
      id: 'gold-2024',
      type: 'article',
      title: 'Global Strategy for the Diagnosis, Management, and Prevention of COPD: 2024 Report',
      authors: ['Global Initiative for Chronic Obstructive Lung Disease'],
      source: 'GOLD',
      url: 'https://goldcopd.org'
    },
    {
      id: 'impact-trial',
      type: 'article',
      title: 'Triple Therapy versus Dual Bronchodilator Therapy in COPD',
      authors: ['Lipson DA', 'Barnhart F', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1713901'
    },
    {
      id: 'uplift-trial',
      type: 'article',
      title: 'A 4-Year Trial of Tiotropium in COPD',
      authors: ['Tashkin DP', 'Celli B', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa0805800'
    }
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['treatment', 'pharmacology', 'guidelines', 'COPD'],
    clinicalRelevance: 'critical',
    keywords: ['COPD', 'emphysema', 'chronic bronchitis', 'LAMA', 'LABA', 'ICS', 'GOLD']
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published'
};

export default copdAlgorithm;
