import { EducationalContent } from '../../types';

export const ards: EducationalContent = {
  id: 'pulm-critical-care-ards',
  type: 'condition',
  name: 'Acute Respiratory Distress Syndrome (ARDS)',
  nameEs: 'Sindrome de Dificultad Respiratoria Aguda',
  alternateNames: ['ARDS', 'Acute Lung Injury', 'Non-cardiogenic Pulmonary Edema'],
  levels: {
    1: {
      level: 1,
      summary: 'ARDS is a severe lung condition where fluid leaks into the air sacs, making it very difficult to get enough oxygen into the blood.',
      explanation: 'When the lungs are badly injured (from pneumonia, sepsis, trauma, or other causes), the tiny air sacs fill with fluid. This prevents oxygen from reaching the blood. Patients become critically ill and need a breathing machine (ventilator) in the ICU. Recovery can take weeks to months.',
      keyTerms: [{ term: 'Ventilator', definition: 'A machine that breathes for you when your lungs cannot work well enough on their own' }, { term: 'ICU', definition: 'Intensive care unit, where critically ill patients receive close monitoring' }],
      analogies: ['Like a sponge soaked in water -- the air sacs fill with fluid so oxygen cannot get through'],
      patientCounselingPoints: ['Recovery from ARDS takes time; physical rehabilitation is important', 'Follow up for lung function and mental health after ICU discharge']
    },
    2: {
      level: 2,
      summary: 'ARDS is acute hypoxemic respiratory failure from diffuse alveolar damage causing bilateral pulmonary infiltrates not explained by heart failure, defined by the Berlin criteria.',
      explanation: 'Berlin definition: acute onset (<1 week), bilateral opacities on CXR/CT, PaO2/FiO2 ratio classifies severity (mild 200-300, moderate 100-200, severe <100) with PEEP >=5 cmH2O. Common causes: pneumonia, sepsis, aspiration, trauma, pancreatitis. Treatment: lung-protective ventilation (6 mL/kg IBW, plateau pressure <30), prone positioning for severe ARDS, conservative fluid strategy, and neuromuscular blockade in early severe ARDS.',
      keyTerms: [{ term: 'PaO2/FiO2 Ratio', definition: 'Ratio of arterial oxygen to fraction of inspired oxygen; lower values indicate worse oxygenation' }, { term: 'PEEP', definition: 'Positive end-expiratory pressure, keeps air sacs open at end of breath to improve oxygenation' }],
      examples: ['A septic patient developing bilateral infiltrates with PaO2/FiO2 of 120 despite antibiotics and fluids']
    },
    3: {
      level: 3,
      summary: 'ARDS pathophysiology involves three overlapping phases (exudative, proliferative, fibrotic) with disruption of the alveolar-capillary barrier, neutrophilic inflammation, and surfactant dysfunction.',
      explanation: 'Exudative phase (days 1-7): DAD with hyaline membrane formation, type I pneumocyte necrosis, protein-rich edema fluid. Proliferative phase (days 7-21): type II pneumocyte proliferation, fibroblast organization. Fibrotic phase: collagen deposition in some patients. ARDSNet ARMA trial: 6 mL/kg vs 12 mL/kg tidal volume reduced mortality from 40% to 31%. PROSEVA: 16-hour prone positioning reduced mortality in moderate-severe ARDS. Driving pressure (<15 cmH2O) better predicts outcomes than plateau pressure alone. ECMO for refractory hypoxemia (EOLIA trial).',
      keyTerms: [{ term: 'Driving Pressure', definition: 'Plateau pressure minus PEEP; reflects tidal strain on aerated lung and correlates with mortality' }, { term: 'VILI', definition: 'Ventilator-induced lung injury from overdistension (volutrauma) or cyclic opening/closing (atelectrauma)' }],
      clinicalNotes: 'Calculate IBW for tidal volume: males 50 + 2.3(height in inches - 60), females 45.5 + 2.3(height in inches - 60); common error is using actual body weight.'
    },
    4: {
      level: 4,
      summary: 'Advanced ARDS management integrates phenotype-guided therapy, mechanical power minimization, ECMO rescue, and recognition of long-term post-ARDS morbidity including ICU-acquired weakness and PTSD.',
      explanation: 'ARDS sub-phenotypes: hypo-inflammatory (phenotype 1) vs hyper-inflammatory (phenotype 2, elevated IL-6/sTNFR1, worse prognosis, potential SIMV response). Mechanical power concept: energy delivered per minute incorporating tidal volume, rate, PEEP, driving pressure, and flow. ROSE trial: neuromuscular blockade did not show benefit with lighter sedation strategy. Dexamethasone (DEXA-ARDS, CoDEX) reduces ventilator-free days. Awake proning for non-intubated patients (COVID era evidence). Post-ARDS: 25% develop fibroproliferative ARDS; ICU-acquired weakness and cognitive impairment affect most survivors.',
      keyTerms: [{ term: 'Mechanical Power', definition: 'Total energy per minute delivered to the respiratory system by the ventilator, integrating all VILI determinants' }, { term: 'ARDS Phenotypes', definition: 'Biologically distinct subgroups (hypo/hyper-inflammatory) with different treatment responses and outcomes' }],
      clinicalNotes: 'Hyper-inflammatory phenotype (30% of ARDS) shows mortality benefit with higher PEEP and simvastatin in secondary analyses -- prospective phenotype-guided trials are underway.'
    },
    5: {
      level: 5,
      summary: 'Frontier ARDS research explores real-time phenotyping via point-of-care biomarkers, mesenchymal stem cell therapy, lung-on-chip models, and AI-driven ventilator management.',
      explanation: 'PHIND trial tests rapid phenotype identification using parsimonious biomarker panels (IL-8, bicarbonate, sTNFR1) to guide enrollment in phenotype-specific RCTs. MSC therapy (START, MUST-ARDS trials) targets paracrine anti-inflammatory and reparative signaling. Electrical impedance tomography (EIT) enables bedside regional ventilation monitoring for personalized PEEP titration. Closed-loop ventilation with reinforcement learning algorithms (MIMIC-III trained) optimize ventilator settings in real time. Exhaled breath condensate metabolomics and volatile organic compounds for non-invasive phenotyping.',
      keyTerms: [{ term: 'EIT', definition: 'Electrical impedance tomography: bedside imaging modality measuring regional lung ventilation distribution in real time' }, { term: 'Mesenchymal Stem Cells', definition: 'Multipotent stromal cells with anti-inflammatory, anti-fibrotic, and pro-reparative paracrine effects in injured lung' }],
      clinicalNotes: 'PRoVENT-COVID and LOCO2 trials challenged liberal vs conservative oxygenation targets; current evidence supports SpO2 88-95% to avoid both hypoxemia and hyperoxia.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'pulm-critical-care-mechanical-ventilation', targetType: 'topic', relationship: 'sibling', label: 'Mechanical Ventilation' },
    { targetId: 'pulm-vascular-pulmonary-embolism', targetType: 'condition', relationship: 'related', label: 'Pulmonary Embolism' }
  ],
  tags: { systems: ['respiratory'], topics: ['pulmonology', 'critical-care', 'respiratory-failure'], clinicalRelevance: 'critical', examRelevance: { usmle: true, shelf: ['medicine', 'surgery'] } },
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published'
};
