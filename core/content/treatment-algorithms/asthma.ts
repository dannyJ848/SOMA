/**
 * Asthma Treatment Algorithm
 *
 * Based on GINA 2024 Guidelines (Global Initiative for Asthma)
 * Covers stepwise approach, controller therapy, and biologics for severe asthma
 */

import { TreatmentAlgorithm } from './types';

export const asthmaAlgorithm: TreatmentAlgorithm = {
  id: 'treatment-asthma-gina',
  condition: 'Asthma',
  alternateNames: ['Bronchial Asthma', 'Reactive Airway Disease', 'Asthmatic Bronchitis'],
  icdCodes: ['J45.20', 'J45.30', 'J45.40', 'J45.50', 'J45.901'],
  guidelineSource: 'GINA (Global Initiative for Asthma)',
  guidelineYear: 2024,
  lastReviewed: '2026-01-24',

  levels: {
    1: {
      level: 1,
      overview: 'Asthma makes your airways swollen and sensitive. When triggered, they tighten and fill with mucus, making it hard to breathe. Medicine reduces swelling and opens your airways.',
      whyThisApproach: 'There are two types of asthma medicine: one you use every day to prevent symptoms (controller) and one you use when you have trouble breathing (reliever). Both are important.',
      whatToExpect: 'Your doctor will give you inhalers. The daily controller prevents asthma attacks. The reliever helps when you suddenly cannot breathe well. Learning your triggers helps avoid attacks.',
      keyPoints: [
        'Use your controller inhaler every day, even when you feel good',
        'Keep your reliever inhaler with you always for emergencies',
        'Learn what triggers your asthma and try to avoid them',
        'Have an asthma action plan for when symptoms get worse',
        'See your doctor regularly to check your asthma control'
      ],
      patientQuestions: [
        'Why do I need a daily inhaler if I only wheeze sometimes?',
        'How do I know when my asthma is getting worse?',
        'Can I outgrow asthma?'
      ]
    },
    2: {
      level: 2,
      overview: 'Asthma treatment follows a stepwise approach. All patients need an inhaler with ICS (inhaled corticosteroid) - either as daily controller or as-needed with formoterol. The amount of medicine increases or decreases based on how well controlled your asthma is.',
      whyThisApproach: 'Inhaled steroids reduce airway inflammation, which is the underlying problem in asthma. Using an ICS-containing inhaler even for mild symptoms reduces severe attacks and emergency visits compared to using a rescue inhaler alone.',
      whatToExpect: 'Your doctor will assess your asthma control and adjust treatment. Well-controlled asthma means few symptoms, no nighttime waking, rarely needing reliever, and normal activities. The goal is to find the lowest dose that controls your asthma.',
      keyPoints: [
        'GINA recommends ICS-containing therapy for ALL patients, even mild asthma',
        'SABA-only treatment is no longer recommended (increased attack risk)',
        'As-needed ICS-formoterol is an option for mild asthma (Steps 1-2)',
        'Control is assessed by symptoms in past 4 weeks',
        'Step up if not controlled; step down after 3 months of good control'
      ],
      patientQuestions: [
        'What is the difference between controller and reliever inhalers?',
        'Are inhaled steroids safe to use every day?',
        'How do I use a peak flow meter?'
      ]
    },
    3: {
      level: 3,
      overview: 'GINA 2024 recommends ICS-formoterol as preferred controller and reliever (MART - Maintenance and Reliever Therapy) for adults and adolescents. Steps 1-2 can use as-needed ICS-formoterol alone. Steps 3-5 add daily maintenance ICS-formoterol with PRN for symptoms.',
      whyThisApproach: 'The SYGMA studies showed as-needed ICS-formoterol reduces severe exacerbations by 60% compared to SABA-only in mild asthma. For moderate-severe asthma, MART simplifies regimens and reduces exacerbations compared to fixed-dose ICS/LABA plus SABA.',
      whatToExpect: 'Treatment is personalized based on phenotype, lung function, and control. Blood eosinophils and FeNO help identify type 2 inflammation. Poor control despite medium-dose ICS prompts evaluation for alternative diagnoses and consideration of add-on therapy.',
      keyPoints: [
        'Track 1 (preferred): ICS-formoterol MART (maintenance and reliever)',
        'Track 2 (alternative): Maintenance ICS-LABA with SABA reliever',
        'Step 1-2: Low-dose ICS-formoterol PRN (preferred) or daily low-dose ICS',
        'Step 3: Low-dose ICS-formoterol maintenance + PRN (MART)',
        'Step 4: Medium-dose ICS-formoterol MART',
        'Step 5: Add-on LAMA, biologics, or low-dose OCS'
      ],
      detailedSteps: [
        {
          id: 'asthma-step-1',
          order: 1,
          name: 'Step 1-2: Mild Asthma',
          description: 'As-needed low-dose ICS-formoterol or daily low-dose ICS',
          medications: [
            {
              name: 'Budesonide/Formoterol',
              genericName: 'Budesonide/Formoterol',
              class: 'ICS/LABA Combination',
              dosing: '200/6mcg 1 puff PRN (max 6/day for as-needed; max 12/day for MART)',
              commonSideEffects: ['Oral candidiasis', 'Hoarseness', 'Tremor', 'Palpitations'],
              considerations: 'SYGMA 1/2: As-needed non-inferior to daily ICS for exacerbation prevention',
              costCategory: 'moderate'
            },
            {
              name: 'Beclomethasone/Formoterol',
              genericName: 'Beclomethasone/Formoterol',
              class: 'ICS/LABA Combination',
              dosing: '100/6mcg PRN or daily',
              considerations: 'Extra-fine particle formulation; good small airway deposition',
              costCategory: 'moderate'
            }
          ],
          targets: [
            { parameter: 'Symptom control', goal: 'Well-controlled: <=2 daytime symptoms/week, no night symptoms', rationale: 'GINA control criteria' },
            { parameter: 'Exacerbations', goal: 'Zero severe exacerbations', rationale: 'Primary goal of asthma therapy' }
          ],
          patientEducation: 'Using ICS-formoterol for symptoms is as effective as taking daily medicine for mild asthma, and most patients prefer using less medication.'
        },
        {
          id: 'asthma-step-2',
          order: 2,
          name: 'Step 3: Moderate Asthma',
          description: 'Low-dose ICS-formoterol maintenance and reliever (MART)',
          medications: [
            {
              name: 'Budesonide/Formoterol MART',
              genericName: 'Budesonide/Formoterol',
              class: 'ICS/LABA (MART)',
              dosing: '200/6mcg 1-2 puffs BID maintenance + 1 puff PRN (max 12 puffs/day)',
              considerations: "O'Byrne et al.: MART reduces exacerbations 40-50% vs fixed dose + SABA"
            }
          ],
          monitoringRequired: [
            { test: 'Spirometry', frequency: 'At diagnosis and 3-6 months after starting therapy', purpose: 'Document baseline and response' },
            { test: 'ACQ or ACT', frequency: 'Each visit', purpose: 'Standardized control assessment' }
          ],
          timeframe: '3 months to assess control before stepping up or down'
        },
        {
          id: 'asthma-step-3',
          order: 3,
          name: 'Step 4: Moderate-Severe Asthma',
          description: 'Medium-dose ICS-formoterol MART or add LAMA',
          medications: [
            {
              name: 'Budesonide/Formoterol Medium Dose',
              genericName: 'Budesonide/Formoterol',
              class: 'ICS/LABA (MART)',
              dosing: '400/12mcg 1 puff BID maintenance + low-dose PRN',
              considerations: 'Medium-dose ICS: Budesonide 400-800mcg/day'
            },
            {
              name: 'Tiotropium Respimat',
              genericName: 'Tiotropium',
              class: 'LAMA',
              dosing: '2.5mcg 2 puffs once daily (add-on)',
              commonSideEffects: ['Dry mouth', 'Urinary retention'],
              considerations: 'GraziaTinA-asthma trials: Improves FEV1 and reduces exacerbations',
              costCategory: 'moderate'
            }
          ],
          nonPharmacologic: [
            'Assess and address modifiable risk factors',
            'Allergen avoidance if sensitized (dust mites, pets, mold)',
            'Weight loss if obese',
            'Treat comorbidities (rhinitis, GERD, OSA)'
          ]
        },
        {
          id: 'asthma-step-4',
          order: 4,
          name: 'Step 5: Severe Asthma',
          description: 'Phenotype assessment, biologics, specialist referral',
          medications: [
            {
              name: 'Omalizumab',
              genericName: 'Omalizumab',
              class: 'Anti-IgE Monoclonal Antibody',
              dosing: '150-375mg SC every 2-4 weeks (based on IgE and weight)',
              commonSideEffects: ['Injection site reactions', 'Headache'],
              seriousWarnings: ['Anaphylaxis (0.1-0.2%)', 'Malignancy (uncertain)'],
              considerations: 'For allergic asthma with elevated IgE (30-1500 IU/mL) and sensitization',
              costCategory: 'very-high'
            },
            {
              name: 'Mepolizumab',
              genericName: 'Mepolizumab',
              class: 'Anti-IL-5 Monoclonal Antibody',
              dosing: '100mg SC every 4 weeks',
              commonSideEffects: ['Headache', 'Injection site reactions'],
              considerations: 'For eosinophilic asthma (eos >=300 or >=150 on OCS)',
              costCategory: 'very-high'
            },
            {
              name: 'Benralizumab',
              genericName: 'Benralizumab',
              class: 'Anti-IL-5 Receptor Alpha',
              dosing: '30mg SC Q4 weeks x3, then Q8 weeks',
              considerations: 'Depletes eosinophils; may have faster onset',
              costCategory: 'very-high'
            },
            {
              name: 'Dupilumab',
              genericName: 'Dupilumab',
              class: 'Anti-IL-4/IL-13 Receptor Alpha',
              dosing: '200mg or 300mg SC every 2 weeks',
              commonSideEffects: ['Injection site reactions', 'Transient eosinophilia', 'Conjunctivitis'],
              considerations: 'For eosinophilic or OCS-dependent asthma; also treats atopic dermatitis, CRSwNP',
              costCategory: 'very-high'
            },
            {
              name: 'Tezepelumab',
              genericName: 'Tezepelumab',
              class: 'Anti-TSLP Monoclonal Antibody',
              dosing: '210mg SC every 4 weeks',
              considerations: 'NAVIGATOR: Effective across phenotypes (high and low eosinophils)',
              costCategory: 'very-high'
            }
          ],
          targets: [
            { parameter: 'Biologic selection', goal: 'Match to phenotype (allergic, eosinophilic, T2-low)', rationale: 'Precision medicine approach' }
          ],
          patientEducation: 'Biologics are injections that target specific pathways causing severe asthma. They significantly reduce attacks and steroid use.'
        }
      ]
    },
    4: {
      level: 4,
      overview: 'Severe asthma management requires phenotyping (allergic, eosinophilic, T2-low) using biomarkers (IgE, eosinophils, FeNO) to guide biologic selection. Systematic evaluation excludes mimics and addresses treatable traits before escalating therapy.',
      whyThisApproach: 'Approximately 5-10% of asthmatics have severe disease. Biologics targeting type 2 inflammation (IgE, IL-5, IL-4/13, TSLP) reduce exacerbations by 50-70% and enable OCS sparing. T2-low asthma remains challenging with limited targeted therapies.',
      whatToExpect: 'Severe asthma evaluation includes confirmation of diagnosis, assessment of adherence and technique, identification of comorbidities, and biomarker profiling. Response to biologics is assessed at 4 months with ongoing evaluation.',
      keyPoints: [
        'Severe asthma: Uncontrolled on Step 4 therapy or requiring Step 5 to maintain control',
        'Type 2 high: Eos >=300, FeNO >=25 ppb, or IgE-mediated allergy',
        'Type 2 low: Low eosinophils and FeNO; may be neutrophilic or pauci-granulocytic',
        'Biologic trial: 4 months for exacerbation reduction; consider switching if inadequate response',
        'Bronchial thermoplasty: Considered for refractory asthma (limited long-term data)'
      ],
      detailedSteps: [
        {
          id: 'asthma-advanced-1',
          order: 1,
          name: 'Severe Asthma Workup',
          description: 'Systematic evaluation before biologic initiation',
          nonPharmacologic: [
            'Confirm diagnosis: Spirometry with reversibility, peak flow variability',
            'Assess adherence: Electronic monitoring, prescription fills',
            'Inhaler technique: Direct observation and correction',
            'Comorbidities: Rhinosinusitis, GERD, obesity, OSA, vocal cord dysfunction',
            'Triggers: Occupational, allergens, NSAID/aspirin sensitivity, smoking'
          ],
          monitoringRequired: [
            { test: 'Blood eosinophils', frequency: 'Baseline (off OCS if possible)', purpose: 'Type 2 phenotyping' },
            { test: 'FeNO', frequency: 'Baseline', purpose: 'Type 2 inflammation marker' },
            { test: 'Total IgE', frequency: 'Once (if allergic asthma suspected)', purpose: 'Omalizumab dosing' },
            { test: 'Skin prick or specific IgE', frequency: 'Once', purpose: 'Identify allergen sensitization' }
          ],
          targets: [
            { parameter: 'Eos >=300', goal: 'Favors anti-IL-5 or anti-IL-4/13', rationale: 'Eosinophilic phenotype' },
            { parameter: 'FeNO >=25', goal: 'Suggests type 2 inflammation', rationale: 'May respond to dupilumab' },
            { parameter: 'IgE 30-1500 + allergy', goal: 'Omalizumab candidate', rationale: 'Anti-IgE mechanism' }
          ]
        },
        {
          id: 'asthma-advanced-2',
          order: 2,
          name: 'Biologic Selection Algorithm',
          description: 'Phenotype-guided biologic choice',
          medications: [
            {
              name: 'Omalizumab',
              class: 'Anti-IgE',
              considerations: 'Allergic asthma, IgE 30-1500, perennial allergen sensitization'
            },
            {
              name: 'Mepolizumab/Benralizumab',
              class: 'Anti-IL-5 pathway',
              considerations: 'Eosinophilic asthma >=300 (or >=150 on OCS); also for EGPA'
            },
            {
              name: 'Dupilumab',
              class: 'Anti-IL-4/13',
              considerations: 'Eosinophilic or OCS-dependent; comorbid atopic dermatitis or CRSwNP'
            },
            {
              name: 'Tezepelumab',
              class: 'Anti-TSLP',
              considerations: 'Broad efficacy; may be option for T2-low or multiple phenotype overlap'
            }
          ],
          patientEducation: 'Biologics are selected based on your specific type of asthma. Blood tests and allergy tests help determine which will work best for you.'
        },
        {
          id: 'asthma-advanced-3',
          order: 3,
          name: 'OCS Sparing and Step-Down',
          description: 'Reduce oral corticosteroid burden',
          nonPharmacologic: [
            'Target OCS cessation or lowest effective dose',
            'Monitor for adrenal insufficiency during OCS taper',
            'Bone density screening if prolonged OCS exposure',
            'Consider endocrinology referral for adrenal axis recovery'
          ],
          targets: [
            { parameter: 'OCS dose', goal: 'Discontinuation or <5mg prednisone equivalent', rationale: 'Reduce steroid toxicity' }
          ],
          monitoringRequired: [
            { test: 'Morning cortisol', frequency: 'During OCS taper', purpose: 'Screen for adrenal insufficiency' },
            { test: 'DEXA scan', frequency: 'If OCS >=3 months cumulative', purpose: 'Screen for osteoporosis' }
          ]
        }
      ]
    },
    5: {
      level: 5,
      overview: 'Emerging asthma research explores novel biologics (anti-IL-33, anti-alarmins), precision medicine using transcriptomics and proteomics, and allergen-specific immunotherapy. T2-low asthma remains an unmet need with ongoing clinical trials.',
      whyThisApproach: 'The type 2 paradigm has transformed severe asthma care but 30-50% of severe asthmatics are non-T2. Targeting epithelial-derived cytokines (TSLP, IL-33, IL-25) may address upstream pathways. Biomarker-guided therapy optimization is an active research area.',
      whatToExpect: 'Severe asthma centers offer multidisciplinary care, clinical trials access, and advanced phenotyping. Bronchoscopy with airway biopsy can characterize inflammation when non-invasive biomarkers are discordant.',
      keyPoints: [
        'Itepekimab (anti-IL-33): Phase 2b data in moderate-severe asthma',
        'Astegolimab (anti-IL-33): Phase 2b positive in T2-low asthma',
        'ARIA biologic algorithm: Systematic approach to biologic selection',
        'Transcriptomic signatures: May predict biologic response beyond simple biomarkers',
        'Allergen immunotherapy: SCIT or SLIT for allergic asthma with sensitization'
      ],
      detailedSteps: [
        {
          id: 'asthma-specialist-1',
          order: 1,
          name: 'Advanced Phenotyping',
          description: 'Beyond blood eosinophils and FeNO',
          nonPharmacologic: [
            'Induced sputum: Gold standard for airway inflammation (eos, neut, mixed)',
            'Bronchoscopy with biopsy: Characterize airway remodeling and inflammation',
            'Transcriptomic profiling: Research tool for precision medicine',
            'Exhaled breath condensate: Investigational biomarkers'
          ],
          monitoringRequired: [
            { test: 'Sputum induction', frequency: 'If available and discordant phenotype', purpose: 'Characterize airway inflammation' },
            { test: 'High-resolution CT', frequency: 'If structural abnormality suspected', purpose: 'Assess air trapping, bronchiectasis, mucus plugging' }
          ]
        },
        {
          id: 'asthma-specialist-2',
          order: 2,
          name: 'Emerging Therapies',
          description: 'Pipeline biologics and novel approaches',
          medications: [
            {
              name: 'Itepekimab',
              genericName: 'Itepekimab',
              class: 'Anti-IL-33',
              considerations: 'Phase 2b: Reduced exacerbations in moderate-severe asthma; upstream target'
            },
            {
              name: 'Astegolimab',
              genericName: 'Astegolimab',
              class: 'Anti-IL-33',
              considerations: 'Phase 2b: Significant exacerbation reduction in T2-low asthma (ZENYATTA)'
            }
          ],
          nonPharmacologic: [
            'Bronchial thermoplasty: Radiofrequency ablation of airway smooth muscle',
            'Allergen immunotherapy: SCIT or SLIT for confirmed allergic asthma',
            'Anti-fungal therapy: Itraconazole for ABPA or fungal sensitization'
          ]
        },
        {
          id: 'asthma-specialist-3',
          order: 3,
          name: 'Refractory Asthma Management',
          description: 'Options when biologics fail or not indicated',
          medications: [
            {
              name: 'Macrolide therapy',
              genericName: 'Azithromycin',
              class: 'Macrolide',
              dosing: '250mg daily or 500mg three times weekly',
              considerations: 'AMAZES trial: Reduced exacerbations in severe asthma; anti-inflammatory effects'
            },
            {
              name: 'Low-dose OCS',
              class: 'Systemic corticosteroid',
              dosing: 'Lowest effective dose (ideally <7.5mg prednisone)',
              considerations: 'Reserve for refractory cases; minimize dose and duration'
            }
          ],
          patientEducation: 'Some patients with severe asthma do not respond to current treatments. Clinical trials offer access to new therapies being developed.'
        }
      ]
    }
  },

  steps: [
    {
      id: 'asthma-step1-2',
      order: 1,
      name: 'Step 1-2: Mild Asthma',
      description: 'As-needed ICS-formoterol or daily low-dose ICS',
      medications: [
        { name: 'ICS-formoterol PRN', class: 'ICS/LABA', considerations: 'Preferred Track 1' },
        { name: 'Daily low-dose ICS + SABA PRN', class: 'ICS + SABA', considerations: 'Alternative Track 2' }
      ],
      timeframe: 'Ongoing with 3-month reassessment'
    },
    {
      id: 'asthma-step3',
      order: 2,
      name: 'Step 3: Moderate Asthma',
      description: 'Low-dose ICS-formoterol MART',
      medications: [
        { name: 'Low-dose ICS-formoterol MART', class: 'ICS/LABA', considerations: 'Maintenance + reliever' }
      ],
      timeframe: '3 months to assess control'
    },
    {
      id: 'asthma-step4',
      order: 3,
      name: 'Step 4: Moderate-Severe',
      description: 'Medium-dose ICS-formoterol MART or add LAMA',
      medications: [
        { name: 'Medium-dose ICS-formoterol', class: 'ICS/LABA' },
        { name: 'Add-on tiotropium', class: 'LAMA' }
      ],
      timeframe: 'Specialist referral if uncontrolled'
    },
    {
      id: 'asthma-step5',
      order: 4,
      name: 'Step 5: Severe Asthma',
      description: 'Biologics based on phenotype',
      medications: [
        { name: 'Anti-IgE (omalizumab)', class: 'Biologic', considerations: 'Allergic asthma' },
        { name: 'Anti-IL-5 (mepolizumab, benralizumab)', class: 'Biologic', considerations: 'Eosinophilic' },
        { name: 'Anti-IL-4/13 (dupilumab)', class: 'Biologic', considerations: 'Eosinophilic/OCS-dependent' },
        { name: 'Anti-TSLP (tezepelumab)', class: 'Biologic', considerations: 'Broad phenotype' }
      ],
      timeframe: 'Trial of 4 months before switching'
    }
  ],

  stepCriteria: {
    stepUp: {
      triggers: [
        'Daytime symptoms >2 days/week',
        'Night waking due to asthma any night',
        'Reliever use >2 days/week (for symptoms)',
        'Any activity limitation due to asthma',
        'FEV1 <80% personal best or predicted',
        'One or more exacerbations in past year'
      ],
      timeline: 'Reassess in 2-6 weeks after step-up',
      considerations: [
        'Verify diagnosis and adherence before escalating',
        'Check inhaler technique at every visit',
        'Address modifiable risk factors (smoking, allergens, rhinitis)'
      ]
    },
    stepDown: {
      triggers: [
        'Well-controlled asthma for at least 3 months',
        'No exacerbations in past year',
        'FEV1 stable and near personal best'
      ],
      timeline: 'Step down one step at a time; reassess in 3 months',
      considerations: [
        'Never step down during respiratory infection or high-risk periods',
        'Reduce ICS dose by 25-50%, maintain ICS component',
        'Do not discontinue ICS entirely (maintain low-dose ICS-formoterol PRN)',
        'Autumn/winter may require step-up'
      ]
    }
  },

  specialPopulations: [
    {
      population: 'Pregnancy',
      modifications: [
        'Continue controller therapy (ICS/LABA safe)',
        'Poorly controlled asthma more dangerous than medication',
        'Budesonide preferred ICS (most safety data)',
        'Monitor closely; adjust dose as needed'
      ]
    },
    {
      population: 'Aspirin-Exacerbated Respiratory Disease (AERD)',
      modifications: [
        'Avoid NSAIDs and aspirin',
        'Associated with nasal polyps and eosinophilia',
        'Consider aspirin desensitization',
        'Biologics (anti-IL-5 or dupilumab) often needed'
      ]
    },
    {
      population: 'Elderly',
      modifications: [
        'Exclude COPD (or consider overlap)',
        'Soft mist inhaler or nebulizer if poor inspiratory flow',
        'Monitor for osteoporosis with ICS',
        'Consider comorbidities affecting inhaler choice'
      ]
    },
    {
      population: 'Occupational Asthma',
      modifications: [
        'Identify and eliminate causative agent',
        'Early removal improves prognosis',
        'Workers compensation evaluation',
        'May not fully remit even after removal'
      ]
    }
  ],

  emergencyIndications: [
    'Severe exacerbation: Talks in words, sits hunched, agitated, RR >30, HR >120, SpO2 <90%',
    'Life-threatening: Drowsy, confused, silent chest, cyanosis, poor respiratory effort',
    'Near-fatal asthma: PaCO2 rising, requiring mechanical ventilation',
    'Anaphylaxis with bronchospasm'
  ],

  referralCriteria: [
    'Uncontrolled asthma despite Step 4 therapy',
    'More than 2 exacerbations requiring OCS in past year',
    'Life-threatening asthma event (ICU admission, intubation)',
    'Consideration for biologics',
    'Suspected occupational asthma',
    'Diagnostic uncertainty (COPD overlap, VCD)'
  ],

  citations: [
    {
      id: 'gina-2024',
      type: 'article',
      title: 'Global Strategy for Asthma Management and Prevention: 2024 Update',
      authors: ['Global Initiative for Asthma'],
      source: 'GINA',
      url: 'https://ginasthma.org'
    },
    {
      id: 'sygma-1',
      type: 'article',
      title: 'As-Needed Budesonide-Formoterol versus Maintenance Budesonide in Mild Asthma',
      authors: ['Bateman ED', 'Reddel HK', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1715275'
    },
    {
      id: 'navigator',
      type: 'article',
      title: 'Tezepelumab in Adults and Adolescents with Severe, Uncontrolled Asthma',
      authors: ['Menzies-Gow A', 'Corren J', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa2034975'
    }
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['treatment', 'pharmacology', 'guidelines', 'asthma'],
    clinicalRelevance: 'critical',
    keywords: ['asthma', 'ICS', 'LABA', 'biologics', 'GINA', 'MART', 'exacerbation']
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published'
};

export default asthmaAlgorithm;
