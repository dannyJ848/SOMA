/**
 * Respiratory Inspection - Physical Examination
 */

import { EducationalContent } from '../../types';

export const respiratoryInspection: EducationalContent = {
  id: 'respiratory-respiratory-inspection',
  type: 'process',
  name: 'Respiratory Inspection',
  alternateNames: ['Chest Inspection', 'Respiratory Visual Exam'],

  levels: {
    1: {
      level: 1,
      summary: 'Respiratory inspection looks at your breathing, chest shape, and signs of breathing difficulty.',
      explanation: '## Looking at Your Breathing\n\nInspection means looking at how you breathe and your chest appearance. This gives important clues about your lung health.\n\n### What Is Observed\n\n**Breathing rate:**\n- Normal: 12-20 breaths per minute\n- Fast breathing may mean distress\n\n**Breathing pattern:**\n- Should be regular\n- Both sides should move equally\n\n**Use of neck muscles:**\n- Extra muscle use suggests difficulty\n- Seen in severe asthma or COPD\n\n**Chest shape:**\n- Should be symmetric\n- Barrel chest in some lung diseases\n\n**Skin color:**\n- Blue lips or fingers (low oxygen)\n- Pale or sweaty (distress)',

      keyTerms: [
        { term: 'inspection', definition: 'Visual examination' },
        { term: 'respiratory rate', definition: 'Number of breaths per minute' },
        { term: 'barrel chest', definition: 'Rounded, enlarged chest shape' },
        { term: 'cyanosis', definition: 'Blue discoloration from low oxygen' },
      ],

      analogies: [
        'Watching breathing is like watching a metronome - it should be steady and regular.',
      ],

      examples: [
        'Rapid breathing with nostril flaring suggests respiratory distress.',
        'Barrel chest suggests chronic COPD.',
      ],

      patientCounselingPoints: [
        'Breathe normally while being observed.',
        'The doctor is watching your natural breathing pattern.',
      ],
    },

    2: {
      level: 2,
      summary: 'Systematic respiratory inspection identifies rate, rhythm, effort, and physical signs of respiratory disease.',
      explanation: '## Inspection Elements\n\n**Rate:**\n- Count for 30 seconds x2\n- Normal 12-20/min adult\n- Tachypnea: >20\n- Bradypnea: <12\n\n**Rhythm:**\n- Regular vs irregular\n- Cheyne-Stokes\n- Kussmaul\n\n**Depth:**\n- Tidal volume\n- Shallow vs deep\n\n**Effort:**\n- Use of accessory muscles\n- Intercostal retraction\n- Suprasternal retraction\n- Nasal flaring\n- Pursed lip breathing\n\n**Chest Configuration:**\n- Symmetry\n- Anteroposterior diameter\n- Kyphosis/scoliosis\n- Pectus excavatum/carinatum\n\n**Skin:**\n- Color (cyanosis, pallor)\n- Diaphoresis\n- Clubbing\n- Scars\n\n**Other:**\n- Barrel chest (AP=lateral)\n- Harrison sulcus\n- Trapeziuse retractions',

      keyTerms: [
        { term: 'tachypnea', definition: 'Fast breathing' },
        { term: 'accessory muscles', definition: 'Extra muscles used for breathing' },
        { term: 'intercostal retraction', definition: 'Skin pulling between ribs' },
        { term: 'clubbing', definition: 'Enlarged fingertips with lung disease' },
      ],

      examples: [
        'Pursed lip breathing seen in COPD.',
        'Nasal flaring in infants indicates distress.',
        'Intercostal retractions suggest airway obstruction.',
      ],

      clinicalNotes: 'Clubbing suggests chronic hypoxia, lung cancer, or other serious lung disease.',
    },

    3: {
      level: 3,
      summary: 'Advanced inspection identifies patterns of respiratory distress and specific disease states.',
      explanation: '## Patterns of Respiratory Distress\n\n**Mild:**\n- Slight tachypnea\n- Minimal accessory muscle use\n- Able to speak in sentences\n\n**Moderate:**\n- Moderate tachypnea\n- Clear accessory muscle use\n- Speaks in phrases\n\n**Severe:**\n- Marked tachypnea\n- Severe retractions\n- Single words only\n- Altered consciousness\n\n### Specific Patterns\n\n**Cheyne-Stokes:**\n- Crescendo-decrescendo\n- Periods of apnea\n- Heart failure, brain injury\n\n**Kussmaul:**\n- Deep, rapid\n- Metabolic acidosis\n\n**Agonal:**\n- Irregular, gasping\n- Pre-terminal\n\n**Biot:**\n- Cluster breathing\n- Brainstem lesions\n\n### Disease Associations\n\n**COPD:**\n- Barrel chest\n- Pursed lips\n- Tripod position\n\n**Asthma:**\n- Tachypnea\n- Accessory muscle use\n- Hunched posture\n\n**Pneumonia:**\n- Splinting on affected side\n- Tachypnea\n- Shallow breathing',

      keyTerms: [
        { term: 'Cheyne-Stokes', definition: 'Cyclical breathing with apnea' },
        { term: 'Kussmaul breathing', definition: 'Deep rapid breathing in acidosis' },
        { term: 'tripod position', definition: 'Sitting leaning forward on hands' },
        { term: 'splinting', definition: 'Guarding painful area during breathing' },
      ],

      examples: [
        'Tripod position suggests severe respiratory distress.',
        'Cheyne-Stokes respiration in heart failure.',
      ],

      clinicalNotes: 'Altered mental status with respiratory distress indicates severe hypoxia or hypercapnia.',
    },

    4: {
      level: 4,
      summary: 'Clinical correlation of inspection findings with respiratory monitoring and emergency assessment.',
      explanation: '## Monitoring Applications\n\n**Respiratory Score:**\n- Rate\n- Effort\n- Oxygen saturation\n- Mental status\n\n**Early Warning Systems:**\n- Track trends\n- Trigger rapid response\n- Prevent deterioration\n\n### Emergency Assessment\n\n**ABC Assessment:**\n- Airway patency\n- Breathing effort/rate\n- Circulation\n\n**Life-Threatening Signs:**\n- Cyanosis\n- Silent chest\n- Altered consciousness\n- Severe retractions\n- Apnea\n\n**Pediatric Considerations:**\n- Faster normal rates\n- Earlier accessory muscle use\n- Head bobbing\n- Grunting',

      keyTerms: [
        { term: 'silent chest', definition: 'No breath sounds in severe asthma' },
        { term: 'head bobbing', definition: 'Accessory muscle use in infants' },
        { term: 'grunting', definition: 'Sound made by infant with respiratory distress' },
      ],

      clinicalNotes: 'Silent chest in asthma is a medical emergency - impending respiratory failure.',
    },

    5: {
      level: 5,
      summary: 'Expert respiratory assessment in critical care with advanced monitoring techniques.',
      explanation: '## Critical Care Monitoring\n\n**Capnography:**\n- End-tidal CO2\n- Waveform analysis\n- Airway verification\n\n**Pulse Oximetry:**\n- Continuous SpO2\n- Limitations\n- Waveform quality\n\n**Respiratory Mechanics:**\n- Tidal volume\n- Minute ventilation\n- Work of breathing\n\n**Imaging:**\n- Bedside ultrasound\n- Portable X-ray\n- Chest CT\n\n**Laboratory:**\n- ABG analysis\n- Lactate\n- D-dimer',

      keyTerms: [
        { term: 'capnography', definition: 'CO2 monitoring' },
        { term: 'ABG', definition: 'Arterial blood gas' },
        { term: 'work of breathing', definition: 'Effort required to breathe' },
      ],

      clinicalNotes: 'Capnography is standard of care for intubated patients.',
    },
  },

  media: [],

  citations: [
    {
      id: 'bates-insp',
      type: 'textbook',
      title: 'Bates Guide to Physical Examination',
      source: 'Lippincott',
    },
  ],

  crossReferences: [
    { targetId: 'respiratory-lung-auscultation', targetType: 'process', relationship: 'sibling', label: 'Auscultation' },
    { targetId: 'respiratory-percussion', targetType: 'process', relationship: 'sibling', label: 'Percussion' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['physical-examination'],
    keywords: ['inspection', 'respiratory', 'breathing', 'chest'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pulmonology'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default respiratoryInspection;
