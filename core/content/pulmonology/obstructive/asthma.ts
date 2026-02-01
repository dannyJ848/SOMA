import { EducationalContent } from '../../types';

export const asthma: EducationalContent = {
  id: 'pulm-obstructive-asthma',
  type: 'condition',
  name: 'Asthma',
  nameEs: 'Asma',
  alternateNames: ['Bronchial Asthma', 'Reactive Airway Disease'],
  levels: {
    1: {
      level: 1,
      summary: 'Asthma is a condition where your airways swell, tighten, and produce extra mucus, making it hard to breathe. It comes and goes in episodes called attacks.',
      explanation: 'During an asthma attack, the muscles around the airways tighten, the lining swells, and extra mucus blocks airflow. Common triggers include allergies, exercise, cold air, and smoke. A rescue inhaler relaxes the muscles quickly. A controller inhaler taken daily prevents attacks.',
      keyTerms: [{ term: 'Bronchospasm', definition: 'Sudden tightening of the muscles around the airways' }, { term: 'Trigger', definition: 'Something that causes an asthma attack' }],
      analogies: ['Airways are like garden hoses that squeeze shut when irritated, then relax again'],
      patientCounselingPoints: ['Always carry your rescue inhaler', 'Identify and avoid your personal triggers']
    },
    2: {
      level: 2,
      summary: 'Asthma is a chronic inflammatory airway disease causing reversible bronchoconstriction, airway edema, and mucus production with variable airflow obstruction.',
      explanation: 'Asthma is classified by severity (intermittent, mild/moderate/severe persistent) using symptom frequency and FEV1. Allergic asthma involves IgE-mediated mast cell degranulation. Diagnosis confirmed by >12% FEV1 improvement post-bronchodilator on spirometry. Step-up therapy ranges from PRN SABA to high-dose ICS/LABA plus biologics.',
      keyTerms: [{ term: 'ICS', definition: 'Inhaled corticosteroids, the cornerstone controller medication' }, { term: 'Peak Flow', definition: 'A measurement of how fast you can blow air out, used to monitor asthma control' }],
      examples: ['A child with nighttime cough worsened by cats and spring pollen, relieved by albuterol']
    },
    3: {
      level: 3,
      summary: 'Asthma involves Th2-driven eosinophilic airway inflammation with mast cell activation, smooth muscle hyperreactivity, and airway remodeling in chronic disease.',
      explanation: 'Type 2 inflammation drives most asthma: IL-4/IL-13 promote IgE class switching, IL-5 recruits eosinophils, IL-33/TSLP activate ILC2s. Non-T2 phenotypes (neutrophilic, paucigranulocytic) respond poorly to ICS. GINA stepwise approach: Step 1 PRN low-dose ICS-formoterol, Steps 2-5 escalate maintenance. Fractional exhaled nitric oxide (FeNO) >25 ppb supports eosinophilic inflammation.',
      keyTerms: [{ term: 'FeNO', definition: 'Fractional exhaled nitric oxide, a biomarker of eosinophilic airway inflammation' }, { term: 'Airway Remodeling', definition: 'Structural changes including subepithelial fibrosis, smooth muscle hypertrophy, and goblet cell metaplasia' }],
      clinicalNotes: 'GINA 2023 removed SABA-only therapy from Step 1; PRN ICS-formoterol is now preferred at all steps.'
    },
    4: {
      level: 4,
      summary: 'Severe asthma phenotyping guides biologic selection targeting specific inflammatory pathways: anti-IgE, anti-IL-5/5R, anti-IL-4Ralpha, and anti-TSLP.',
      explanation: 'Biologics for severe asthma: omalizumab (anti-IgE, allergic phenotype), mepolizumab/benralizumab (anti-IL-5/IL-5R, eosinophilic), dupilumab (anti-IL-4Ralpha, T2-high with elevated FeNO), tezepelumab (anti-TSLP, broad T2 and some non-T2). Bronchial thermoplasty reduces smooth muscle mass. Asthma-COPD overlap (ACO) requires combined approaches. Occupational asthma requires workplace exposure elimination.',
      keyTerms: [{ term: 'Biologics', definition: 'Monoclonal antibodies targeting specific immune mediators in severe asthma' }, { term: 'TSLP', definition: 'Thymic stromal lymphopoietin, an upstream epithelial alarmin driving multiple inflammatory cascades' }],
      clinicalNotes: 'Check blood eosinophils, total IgE, FeNO, and specific IgE to guide biologic choice; reassess at 4 months.'
    },
    5: {
      level: 5,
      summary: 'Cutting-edge asthma research explores epithelial barrier dysfunction, microbiome influences, precision endotyping via multi-omics, and disease remission strategies.',
      explanation: 'Single-cell transcriptomics reveal heterogeneous airway epithelial states driving asthma. The "epithelial barrier hypothesis" implicates tight junction disruption (ORMDL3/GSDMB loci) in disease initiation. Lung microbiome dysbiosis (reduced Bacteroidetes) correlates with steroid resistance. PRECISION and RASP-UK trials explore biologic-guided step-down achieving clinical remission. Machine learning integrating genomics, proteomics, and clinical data enables molecular endotyping beyond T2/non-T2 binary.',
      keyTerms: [{ term: 'Clinical Remission', definition: 'Absence of symptoms, exacerbations, and airflow limitation without systemic corticosteroids, an emerging treatment goal' }, { term: 'Epithelial Barrier Hypothesis', definition: 'Theory that environmental exposures disrupt airway epithelial integrity initiating chronic inflammation' }],
      clinicalNotes: 'Tezepelumab is the first biologic effective regardless of baseline eosinophil count; NAVIGATOR trial showed benefit across inflammatory phenotypes.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'pulm-obstructive-copd', targetType: 'condition', relationship: 'sibling', label: 'COPD' },
    { targetId: 'pulm-critical-care-ards', targetType: 'condition', relationship: 'related', label: 'ARDS' }
  ],
  tags: { systems: ['respiratory'], topics: ['pulmonology', 'obstructive', 'allergy'], clinicalRelevance: 'critical', examRelevance: { usmle: true, shelf: ['medicine', 'pediatrics'] } },
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published'
};
