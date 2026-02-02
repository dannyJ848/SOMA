import { EducationalContent } from '../../types';

export const copd: EducationalContent = {
  id: 'pulm-obstructive-copd',
  type: 'condition',
  name: 'Chronic Obstructive Pulmonary Disease (COPD)',
  nameEs: 'Enfermedad Pulmonar Obstructiva Cronica',
  alternateNames: ['COPD', 'Emphysema', 'Chronic Bronchitis'],
  levels: {
    1: {
      level: 1,
      summary: 'COPD is a long-term lung disease where the airways become damaged and narrowed, making it very hard to breathe out.',
      explanation: 'COPD is usually caused by smoking for many years. The lungs get damaged and cannot move air in and out properly. People feel short of breath, cough a lot, and produce extra mucus. It gets worse over time but treatments like inhalers and quitting smoking can help.',
      keyTerms: [{ term: 'Emphysema', definition: 'Damage to the tiny air sacs in the lungs' }, { term: 'Chronic Bronchitis', definition: 'Long-term swelling and mucus in the airways' }],
      analogies: ['Imagine breathing through a straw that keeps getting narrower over time'],
      patientCounselingPoints: ['Stop smoking to slow disease progression', 'Use inhalers as prescribed daily']
    },
    2: {
      level: 2,
      summary: 'COPD encompasses emphysema and chronic bronchitis, both causing irreversible airflow limitation primarily from cigarette smoking.',
      explanation: 'COPD is classified by GOLD stages (1-4) using FEV1 values from spirometry. Emphysema destroys alveolar walls reducing gas exchange surface area. Chronic bronchitis causes mucus hypersecretion and airway inflammation. Exacerbations are acute worsenings often triggered by infections.',
      keyTerms: [{ term: 'FEV1', definition: 'Volume of air exhaled in the first second of a forced breath' }, { term: 'Spirometry', definition: 'A breathing test measuring lung function' }],
      examples: ['A 60-year-old with 40 pack-year smoking history presenting with progressive dyspnea']
    },
    3: {
      level: 3,
      summary: 'COPD is a heterogeneous disease characterized by persistent airflow limitation with FEV1/FVC ratio <0.70, driven by chronic inflammation of small airways and parenchymal destruction.',
      explanation: 'Pathogenesis involves protease-antiprotease imbalance (neutrophil elastase vs alpha-1-antitrypsin) and oxidative stress. GOLD classification combines spirometric severity (GOLD 1-4) with symptom burden (CAT/mMRC) and exacerbation history (groups A-D). Pharmacotherapy includes LABA, LAMA, ICS in stepwise fashion. Pulmonary rehabilitation improves exercise tolerance and quality of life.',
      keyTerms: [{ term: 'GOLD Classification', definition: 'Global Initiative for Obstructive Lung Disease staging system' }, { term: 'FEV1/FVC', definition: 'Ratio of forced expiratory volume to forced vital capacity, <0.70 confirms obstruction' }],
      clinicalNotes: 'Always assess for alpha-1-antitrypsin deficiency in patients under 45 or with basilar emphysema.'
    },
    4: {
      level: 4,
      summary: 'COPD involves complex interplay of small airway fibrosis, mucous gland hypertrophy, and alveolar destruction with systemic inflammatory consequences and multiple phenotypic presentations.',
      explanation: 'Endotyping by Th2-high vs Th2-low inflammation guides ICS use. Frequent exacerbator phenotype (>=2/year) warrants ICS/LABA/LAMA triple therapy. Eosinophilic COPD (blood eos >=300) predicts ICS responsiveness. LVRS and endobronchial valves benefit select hyperinflated patients. Comorbidity burden (cardiovascular, osteoporosis, depression) drives mortality independently.',
      keyTerms: [{ term: 'Hyperinflation', definition: 'Air trapping increasing residual volume, flattening the diaphragm and impairing respiratory mechanics' }, { term: 'BODE Index', definition: 'BMI, Obstruction, Dyspnea, Exercise capacity composite prognostic score' }],
      clinicalNotes: 'Roflumilast (PDE4 inhibitor) adds benefit in frequent exacerbators with chronic bronchitis phenotype and FEV1 <50%.'
    },
    5: {
      level: 5,
      summary: 'Advanced COPD management integrates precision phenotyping, treatable traits paradigm, biologics for eosinophilic disease, and lung volume reduction strategies with evolving evidence for disease-modifying therapies.',
      explanation: 'The treatable traits framework replaces one-size-fits-all management. Anti-IL-5 biologics (mepolizumab, benralizumab) show promise in eosinophilic COPD. Bronchoscopic lung volume reduction via endobronchial valves requires intact fissures on CT. Single-cell RNA sequencing reveals distinct alveolar macrophage populations in smoker vs non-smoker COPD. Senolytic therapies targeting cellular senescence are in early trials.',
      keyTerms: [{ term: 'Treatable Traits', definition: 'Precision medicine approach identifying and targeting specific pathobiological and behavioral characteristics' }, { term: 'Endobronchial Valves', definition: 'One-way valves placed bronchoscopically to achieve lobar atelectasis in heterogeneous emphysema' }],
      clinicalNotes: 'ETHOS and IMPACT trials established triple therapy superiority; consider blood eosinophils >=100 as threshold for ICS inclusion in GOLD 2024 recommendations.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'pulm-obstructive-asthma', targetType: 'condition', relationship: 'sibling', label: 'Asthma' },
    { targetId: 'pulm-critical-care-mechanical-ventilation', targetType: 'topic', relationship: 'related', label: 'Mechanical Ventilation' }
  ],
  tags: { systems: ['respiratory'], topics: ['pulmonology', 'obstructive'], clinicalRelevance: 'critical', examRelevance: { usmle: true, shelf: ['medicine'] } },
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published'
};
