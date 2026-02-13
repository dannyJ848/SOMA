import { EducationalContent } from '../../types';

export const pulmonaryHypertension: EducationalContent = {
  id: 'pulm-vascular-pulmonary-hypertension',
  type: 'condition',
  name: 'Pulmonary Hypertension',
  nameEs: 'Hipertension Pulmonar',
  alternateNames: ['PH', 'Pulmonary Arterial Hypertension', 'PAH'],
  levels: {
    1: {
      level: 1,
      summary: 'Pulmonary hypertension is high blood pressure in the blood vessels of the lungs, making the heart work harder to pump blood through them.',
      explanation: 'The blood vessels in the lungs become narrowed and stiff, raising the pressure inside them. The right side of the heart has to pump harder to push blood through. Over time, the heart gets tired and weak. Symptoms include shortness of breath, fatigue, dizziness, and swollen ankles. Medications can help lower the pressure and improve symptoms.',
      keyTerms: [{ term: 'Pulmonary Arteries', definition: 'Blood vessels that carry blood from the heart to the lungs' }, { term: 'Right Heart Failure', definition: 'When the right side of the heart becomes too weak to pump effectively' }],
      analogies: ['Like trying to push water through a garden hose that is being squeezed -- the pump has to work much harder'],
      patientCounselingPoints: ['Avoid high altitudes and strenuous exercise until cleared by your doctor', 'Take all medications consistently; missing doses can cause dangerous pressure spikes']
    },
    2: {
      level: 2,
      summary: 'Pulmonary hypertension is defined as mean pulmonary artery pressure >20 mmHg at rest, classified into 5 WHO groups by etiology, with progressive right ventricular failure as the common endpoint.',
      explanation: 'WHO Groups: 1 (PAH -- idiopathic, heritable, drug-induced), 2 (left heart disease), 3 (lung disease/hypoxia), 4 (CTEPH), 5 (miscellaneous). Right heart catheterization is required for diagnosis. Echocardiography estimates PA systolic pressure via tricuspid regurgitation jet velocity. Group 1 PAH treated with pulmonary vasodilators (PDE5 inhibitors, endothelin receptor antagonists, prostacyclin pathway agents). 6-minute walk distance monitors functional capacity.',
      keyTerms: [{ term: 'Right Heart Catheterization', definition: 'Procedure threading a catheter into the right heart and pulmonary artery to directly measure pressures' }, { term: 'WHO Functional Class', definition: 'Classification of symptom severity from I (no limitation) to IV (symptoms at rest)' }],
      examples: ['A young woman with Raynaud phenomenon and progressive dyspnea found to have elevated RVSP on echo']
    },
    3: {
      level: 3,
      summary: 'PAH pathobiology involves pulmonary arterial endothelial dysfunction, smooth muscle proliferation, and in situ thrombosis creating plexiform lesions and progressive increase in pulmonary vascular resistance.',
      explanation: 'Three therapeutic pathways: nitric oxide (PDE5i: sildenafil/tadalafil; sGC stimulator: riociguat), endothelin (ERAs: ambrisentan, bosentan, macitentan), prostacyclin (epoprostenol IV, treprostinil SC/IV/inhaled, selexipag oral). AMBITION trial: upfront combination ambrisentan + tadalafil superior to monotherapy. Hemodynamic definitions updated: mPAP >20, PVR >2 WU. Vasoreactivity testing with inhaled NO identifies rare CCB responders (<10% of IPAH). Prognostic markers: NT-proBNP, cardiac output, right atrial pressure, mixed venous O2 saturation.',
      keyTerms: [{ term: 'Plexiform Lesion', definition: 'Pathognomonic vascular lesion of PAH with disorganized endothelial cell proliferation occluding small pulmonary arteries' }, { term: 'PVR', definition: 'Pulmonary vascular resistance: (mPAP - PAWP) / cardiac output, measured in Wood units' }],
      clinicalNotes: 'Upfront combination therapy is now standard of care for newly diagnosed PAH; triple therapy considered for WHO FC III-IV at diagnosis.'
    },
    4: {
      level: 4,
      summary: 'Advanced PAH management involves risk stratification-guided therapy escalation, parenteral prostacyclin for severe disease, atrial septostomy, and lung transplantation evaluation.',
      explanation: 'ESC/ERS risk stratification: low/intermediate/high mortality risk using multiparametric assessment (WHO FC, 6MWD, NT-proBNP, hemodynamics, cardiac MRI). COMPERA 2.0 and REVEAL 2.0 calculators guide therapy. Sotatercept (activin signaling inhibitor) represents a novel fourth pathway targeting pulmonary vascular remodeling (STELLAR trial). Balloon atrial septostomy decompresses RV as bridge to transplant. Right ventricular adaptation vs maladaptation (RV-PA coupling) predicts outcomes better than PVR alone. Cardiac MRI-derived RVEF and strain imaging emerging as gold standard for RV function.',
      keyTerms: [{ term: 'Sotatercept', definition: 'Activin receptor IIA-Fc fusion protein rebalancing pro-proliferative/anti-proliferative signaling in pulmonary vasculature' }, { term: 'RV-PA Coupling', definition: 'Ratio of RV contractility to afterload; uncoupling indicates transition from adaptive to maladaptive RV remodeling' }],
      clinicalNotes: 'STELLAR trial: sotatercept added to background therapy improved 6MWD by 40.8 m and reduced NT-proBNP; FDA-approved 2024 as first-in-class reverse remodeling agent.'
    },
    5: {
      level: 5,
      summary: 'Frontier PAH research explores BMPR2 pathway restoration, epigenetic therapies, single-cell vascular biology, and gene therapy approaches for heritable disease.',
      explanation: 'BMPR2 loss-of-function mutations underlie 70% of heritable PAH; FK506 (tacrolimus at low dose) rescues BMPR2 signaling. Single-cell RNA-seq of PAH lungs reveals endothelial-to-mesenchymal transition (EndMT) as driver of vascular remodeling. Epigenetic dysregulation: HDAC inhibitors and BET bromodomain inhibitors show preclinical efficacy. AAV-mediated BMPR2 gene delivery restores signaling in animal models. Metabolic reprogramming (Warburg effect) in PAH smooth muscle cells creates therapeutic targets (dichloroacetate, fatty acid oxidation modulators). Digital twin models of RV-pulmonary circulation enable personalized treatment simulation.',
      keyTerms: [{ term: 'BMPR2', definition: 'Bone morphogenetic protein receptor type 2; loss-of-function mutations are the most common genetic cause of heritable PAH' }, { term: 'EndMT', definition: 'Endothelial-to-mesenchymal transition: pathologic process where endothelial cells acquire mesenchymal phenotype contributing to vascular remodeling' }],
      clinicalNotes: 'TransformPAH registry and PVDOMICS are the largest multi-omic consortia advancing molecular phenotyping of pulmonary vascular disease.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'pulm-vascular-pulmonary-embolism', targetType: 'condition', relationship: 'sibling', label: 'Pulmonary Embolism' },
    { targetId: 'pulm-restrictive-sarcoidosis', targetType: 'condition', relationship: 'related', label: 'Sarcoidosis' }
  ],
  tags: { systems: ['respiratory', 'cardiovascular'], topics: ['pulmonology', 'vascular', 'hypertension'], clinicalRelevance: 'critical', examRelevance: { usmle: true, shelf: ['medicine'] } },
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published'
};
