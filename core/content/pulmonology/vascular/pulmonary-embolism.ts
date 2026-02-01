import { EducationalContent } from '../../types';

export const pulmonaryEmbolism: EducationalContent = {
  id: 'pulm-vascular-pulmonary-embolism',
  type: 'condition',
  name: 'Pulmonary Embolism',
  nameEs: 'Embolia Pulmonar',
  alternateNames: ['PE', 'Pulmonary Thromboembolism', 'Lung Clot'],
  levels: {
    1: {
      level: 1,
      summary: 'A pulmonary embolism (PE) is a blood clot that travels to the lungs and blocks blood flow, which can be life-threatening.',
      explanation: 'A blood clot usually forms in a leg vein (deep vein thrombosis) and breaks loose, traveling through the bloodstream to the lungs. It gets stuck and blocks blood flow. This causes sudden shortness of breath, chest pain, and rapid heart rate. Quick treatment with blood thinners is essential.',
      keyTerms: [{ term: 'Blood Clot', definition: 'A solid lump of blood that blocks a blood vessel' }, { term: 'Anticoagulant', definition: 'A blood-thinning medicine that prevents new clots from forming' }],
      analogies: ['Like a log floating downstream that gets stuck at a narrow point, blocking the river'],
      patientCounselingPoints: ['Move your legs during long trips or bed rest', 'Seek emergency care for sudden shortness of breath with leg swelling']
    },
    2: {
      level: 2,
      summary: 'Pulmonary embolism occurs when a thrombus, usually from deep veins of the legs, embolizes to the pulmonary arterial circulation causing ventilation-perfusion mismatch and potentially right heart failure.',
      explanation: 'Virchow triad (stasis, endothelial injury, hypercoagulability) underlies DVT formation. Wells score and D-dimer triage workup. CT pulmonary angiography (CTPA) is the gold standard. Risk stratification: massive (hypotension), submassive (RV dysfunction), low-risk. Treatment: anticoagulation (heparin then DOAC); thrombolytics for massive PE. Duration: 3-6 months minimum, longer for unprovoked PE.',
      keyTerms: [{ term: 'D-dimer', definition: 'A blood test for clot breakdown products; useful to exclude PE when low' }, { term: 'Wells Score', definition: 'Clinical prediction rule estimating PE probability using symptoms and risk factors' }],
      examples: ['A post-surgical patient with sudden pleuritic chest pain, tachycardia, and hypoxia on day 5']
    },
    3: {
      level: 3,
      summary: 'PE pathophysiology involves acute increase in pulmonary vascular resistance causing RV pressure overload, interventricular septal bowing, and decreased LV preload potentially leading to obstructive shock.',
      explanation: 'Hemodynamic impact: clot >30-50% of vascular bed causes acute cor pulmonale. Neurohormonal activation (catecholamines, endothelin) worsens vasoconstriction. Biomarkers: troponin (myocardial injury), BNP (RV strain). CTPA signs: RV/LV ratio >0.9 indicates RV dysfunction. PESI/sPESI scores guide outpatient vs inpatient management. DOACs (rivaroxaban, apixaban) are first-line over warfarin for most PE. Catheter-directed therapy bridges the gap between anticoagulation and systemic thrombolysis.',
      keyTerms: [{ term: 'Acute Cor Pulmonale', definition: 'Acute right ventricular failure from sudden increase in pulmonary vascular resistance' }, { term: 'PESI Score', definition: 'Pulmonary Embolism Severity Index stratifying 30-day mortality risk' }],
      clinicalNotes: 'Subsegmental PE without DVT and low clinical probability may not require anticoagulation -- consider serial imaging or D-dimer surveillance.'
    },
    4: {
      level: 4,
      summary: 'Advanced PE management encompasses risk-adapted reperfusion strategies, catheter-directed therapies, pulmonary embolism response teams (PERT), and long-term sequelae including CTEPH.',
      explanation: 'Submassive PE: PERT teams evaluate catheter-directed thrombolysis (reduced-dose tPA via EkoSonic catheter), surgical embolectomy, or anticoagulation alone. MOPETT trial: half-dose tPA showed benefit in moderate PE. FLARE trial: CDT with ultrasound-assisted reduced RV/LV ratio. CTEPH develops in 2-4%: diagnosed by V/Q mismatch persisting >3 months. Pulmonary endarterectomy is curative for proximal CTEPH. Balloon pulmonary angioplasty for distal disease. Riociguat for inoperable CTEPH.',
      keyTerms: [{ term: 'CTEPH', definition: 'Chronic thromboembolic pulmonary hypertension from organized clot causing fixed pulmonary vascular obstruction' }, { term: 'PERT', definition: 'Pulmonary Embolism Response Team: multidisciplinary rapid-response team for intermediate/high-risk PE' }],
      clinicalNotes: 'Follow-up echocardiography and functional assessment at 3-6 months post-PE to screen for CTEPH; persistent dyspnea warrants V/Q scan.'
    },
    5: {
      level: 5,
      summary: 'Evolving PE research addresses AI-enabled CTPA interpretation, novel fibrinolytic approaches, PE in special populations, and molecular mechanisms of clot resolution versus organization.',
      explanation: 'Deep learning algorithms detect PE on CTPA with sensitivity >90%, enabling automated triage. HI-PEITHO trial evaluates reduced-dose tenecteplase for intermediate-high-risk PE. Single-pass pharmacomechanical thrombectomy (FlowTriever, Indigo) shows promise without lytic. Neutrophil extracellular traps (NETs) promote clot stability and resistance to fibrinolysis. Plasminogen activator inhibitor-1 (PAI-1) polymorphisms influence clot resolution vs CTEPH progression. Cancer-associated PE: LMWH vs DOAC choice depends on GI/GU cancer bleeding risk (Caravaggio, ADAM-VTE trials).',
      keyTerms: [{ term: 'NETs', definition: 'Neutrophil extracellular traps: web-like DNA/protein structures stabilizing thrombus and promoting organization' }, { term: 'Pharmacomechanical Thrombectomy', definition: 'Catheter-based mechanical clot disruption with or without local thrombolytic infusion' }],
      clinicalNotes: 'FlowTriever (FLASH registry) and Indigo systems enable large-bore aspiration thrombectomy without lytics, expanding treatment options for patients with contraindications to fibrinolysis.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'pulm-vascular-pulmonary-hypertension', targetType: 'condition', relationship: 'sibling', label: 'Pulmonary Hypertension' },
    { targetId: 'pulm-critical-care-ards', targetType: 'condition', relationship: 'related', label: 'ARDS' }
  ],
  tags: { systems: ['respiratory', 'cardiovascular'], topics: ['pulmonology', 'vascular', 'thromboembolism'], clinicalRelevance: 'critical', examRelevance: { usmle: true, shelf: ['medicine', 'surgery'] } },
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published'
};
