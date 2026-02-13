import { EducationalContent } from '../../types';

export const mechanicalVentilation: EducationalContent = {
  id: 'pulm-critical-care-mechanical-ventilation',
  type: 'topic',
  name: 'Mechanical Ventilation',
  nameEs: 'Ventilacion Mecanica',
  alternateNames: ['Invasive Ventilation', 'Positive Pressure Ventilation', 'Life Support Breathing'],
  levels: {
    1: {
      level: 1,
      summary: 'Mechanical ventilation is when a machine helps you breathe by pushing air into your lungs through a tube in your throat.',
      explanation: 'When someone is too sick to breathe on their own, doctors place a tube into the windpipe (intubation) and connect it to a ventilator machine. The machine delivers breaths with the right amount of air and oxygen. The medical team adjusts settings based on blood oxygen levels. The goal is always to get the patient breathing on their own again as soon as safely possible.',
      keyTerms: [{ term: 'Intubation', definition: 'Placing a breathing tube through the mouth into the windpipe' }, { term: 'Ventilator', definition: 'A machine that pushes air into the lungs to help or replace normal breathing' }],
      analogies: ['Like a bicycle pump that gently fills a balloon with air at just the right pressure and speed'],
      patientCounselingPoints: ['The tube prevents talking but communication boards are available', 'Daily weaning assessments are done to check readiness for breathing on your own']
    },
    2: {
      level: 2,
      summary: 'Mechanical ventilation provides respiratory support via positive pressure delivery through an endotracheal tube, using volume-controlled or pressure-controlled modes with adjustable FiO2, PEEP, and respiratory rate.',
      explanation: 'Primary modes: Assist-Control (AC) delivers set tidal volume or pressure with every breath; SIMV allows spontaneous breaths between mandatory ones; Pressure Support (PS) augments patient-triggered breaths. Key settings: tidal volume (6-8 mL/kg IBW), FiO2 (target SpO2 92-96%), PEEP (5-20 cmH2O), respiratory rate (12-20). Monitoring: peak pressure, plateau pressure, ABG analysis. Weaning: daily spontaneous breathing trials (SBT) when FiO2 <=40% and PEEP <=8.',
      keyTerms: [{ term: 'Tidal Volume', definition: 'Volume of air delivered with each breath, typically set at 6-8 mL/kg of ideal body weight' }, { term: 'FiO2', definition: 'Fraction of inspired oxygen, ranging from 0.21 (room air) to 1.0 (100% oxygen)' }],
      examples: ['A pneumonia patient intubated for hypoxemic respiratory failure, started on AC mode with TV 420 mL, PEEP 10, FiO2 60%']
    },
    3: {
      level: 3,
      summary: 'Mechanical ventilation requires understanding of respiratory mechanics (compliance, resistance, time constants), mode selection based on pathophysiology, and prevention of ventilator-associated complications.',
      explanation: 'Respiratory mechanics: compliance (deltaV/deltaP, normal 50-100 mL/cmH2O), resistance (peak minus plateau pressure). Obstructive disease: increase expiratory time, monitor auto-PEEP. Restrictive disease: low tidal volume, higher rate. Pressure-volume curves guide optimal PEEP (lower inflection point). VAP prevention bundle: HOB elevation, oral chlorhexidine, daily sedation interruption, DVT/peptic ulcer prophylaxis. Liberation: RSBI (RR/VT) <105 predicts successful extubation. High-flow nasal cannula post-extubation reduces reintubation.',
      keyTerms: [{ term: 'Auto-PEEP', definition: 'Intrinsic PEEP from incomplete exhalation (air trapping), common in obstructive disease, increases work of breathing' }, { term: 'RSBI', definition: 'Rapid Shallow Breathing Index (RR/VT): <105 breaths/min/L predicts successful extubation with 80% accuracy' }],
      clinicalNotes: 'Plateau pressure >30 cmH2O signals overdistension risk; reduce tidal volume and accept permissive hypercapnia if needed.'
    },
    4: {
      level: 4,
      summary: 'Advanced ventilation strategies include APRV, neurally adjusted ventilatory assist (NAVA), esophageal pressure monitoring for transpulmonary pressure optimization, and systematic approaches to difficult weaning.',
      explanation: 'APRV (airway pressure release ventilation): sustained high CPAP with brief releases for CO2 clearance, promotes recruitment. NAVA: ventilator responds to diaphragmatic electrical activity via esophageal catheter, improves patient-ventilator synchrony. Transpulmonary pressure (Pairway - Ppleural) via esophageal manometry optimizes PEEP in obesity and abdominal compartment syndrome. Difficult weaning (>7 days): assess cardiac causes (SBT-induced pulmonary edema), diaphragm dysfunction (ultrasound thickening fraction <30%), neuropsychological barriers. Tracheostomy timing: percutaneous at day 10-14 for anticipated prolonged ventilation.',
      keyTerms: [{ term: 'Transpulmonary Pressure', definition: 'Alveolar distending pressure (airway minus pleural), the true pressure stretching lung parenchyma' }, { term: 'NAVA', definition: 'Neurally adjusted ventilatory assist, synchronizing ventilator delivery with phrenic nerve-driven diaphragm activation' }],
      clinicalNotes: 'Diaphragm ultrasound: thickening fraction >30% during SBT predicts extubation success; atrophy (thickness <2.1 mm) suggests ventilator-induced diaphragm dysfunction.'
    },
    5: {
      level: 5,
      summary: 'Cutting-edge ventilation research integrates closed-loop automation, AI-driven protocols, personalized mechanical power targets, and novel extracorporeal support modalities.',
      explanation: 'Closed-loop FiO2/PEEP systems (INTELLiVENT-ASV) titrate settings automatically based on end-tidal CO2 and SpO2. Reinforcement learning models trained on MIMIC-IV data optimize ventilation strategies outperforming physician protocols in simulation. Personalized mechanical power thresholds based on functional lung size (aerated lung volume on CT) aim for <17 J/min/L. Extracorporeal CO2 removal (ECCO2R) enables ultra-protective ventilation (3-4 mL/kg TV) in moderate ARDS (REST trial). Partial liquid ventilation with perfluorocarbons abandoned but novel liquid-assisted ventilation concepts re-emerging. Digital twins of patient-ventilator interaction enable virtual trial-and-error of settings.',
      keyTerms: [{ term: 'ECCO2R', definition: 'Extracorporeal CO2 removal: low-flow venovenous circuit for CO2 clearance enabling ultra-low tidal volume ventilation' }, { term: 'Closed-Loop Ventilation', definition: 'Automated systems using continuous physiological feedback to self-adjust ventilator parameters within safety limits' }],
      clinicalNotes: 'REST trial (ECCO2R for moderate ARDS) terminated early for futility and bleeding; next-generation lower-flow ECCO2R devices with improved membrane oxygenators under development.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'pulm-critical-care-ards', targetType: 'condition', relationship: 'sibling', label: 'ARDS' },
    { targetId: 'pulm-obstructive-copd', targetType: 'condition', relationship: 'related', label: 'COPD' }
  ],
  tags: { systems: ['respiratory'], topics: ['pulmonology', 'critical-care', 'ventilation'], clinicalRelevance: 'critical', examRelevance: { usmle: true, shelf: ['medicine', 'surgery'] } },
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published'
};
