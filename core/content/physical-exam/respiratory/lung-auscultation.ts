/**
 * Lung Auscultation - Physical Examination
 */

import { EducationalContent } from '../../types';

export const lungAuscultation: EducationalContent = {
  id: 'respiratory-lung-auscultation',
  type: 'process',
  name: 'Lung Auscultation',
  alternateNames: ['Chest Auscultation', 'Breathing Sound Exam', 'Pulmonary Auscultation'],

  levels: {
    1: {
      level: 1,
      summary: 'Lung auscultation is when doctors listen to your breathing with a stethoscope to check for lung problems.',
      explanation: '## Listening to Your Lungs\n\nDoctors listen to your lungs with a stethoscope to hear how air moves in and out. Different sounds mean different things.\n\n### Normal Breath Sounds\n\n**Vesicular:**\n- Soft, low-pitched\n- Heard over most of the lungs\n- Rustling sound\n\n**Bronchial:**\n- Loud, high-pitched\n- Heard over the windpipe\n- Hollow sound\n\n### Abnormal Sounds\n\n**Wheezing:**\n- High-pitched whistle\n- Narrowed airways\n- Often from asthma\n\n**Crackles:**\n- Popping or bubbling\n- Fluid in lungs\n- Like opening velcro\n\n**Rhonchi:**\n- Low-pitched snoring\n- Mucus in airways\n- Clears with coughing\n\n**Pleural rub:**\n- Grating sound\n- Inflamed lung lining\n- Worse with breathing\n\n### Where to Listen\n\nDoctors listen on your back and chest:\n- Upper, middle, lower lung zones\n- Right and left sides\n- Comparing both sides',

      keyTerms: [
        { term: 'auscultation', definition: 'Listening to body sounds with a stethoscope' },
        { term: 'vesicular', definition: 'Normal soft breath sounds' },
        { term: 'wheezing', definition: 'Musical sound from narrowed airways' },
        { term: 'crackles', definition: 'Popping sounds from fluid in airways' },
      ],

      analogies: [
        'Listening to lungs is like listening to wind through different spaces.',
      ],

      examples: [
        'Wheezing suggests asthma or narrowed airways.',
        'Crackles at lung bases suggest fluid or fibrosis.',
      ],

      patientCounselingPoints: [
        'Breathe normally during the exam.',
        'Take deep breaths when asked.',
        'Cough if you feel the need.',
      ],
    },

    2: {
      level: 2,
      summary: 'Systematic lung auscultation identifies normal and abnormal breath sounds to diagnose respiratory conditions.',
      explanation: '## Technique\n\n**Preparation:**\n- Warm stethoscope\n- Quiet environment\n- Patient sitting upright\n- Deep breaths through mouth\n\n**Sequence:**\n- Compare side to side\n- Posterior: 10 locations\n- Anterior: 6-8 locations\n- Lateral: 2-4 locations\n\n## Breath Sound Characteristics\n\n**Vesicular:**\n- Inspiration > expiration\n- No pause between\n- Peripheral lung fields\n\n**Bronchovesicular:**\n- Inspiration = expiration\n- Over major bronchi\n\n**Bronchial:**\n- Expiration > inspiration\n- Pause between\n- Over trachea\n\n### Adventitious Sounds\n\n**Wheezes:**\n- Continuous, musical\n- >400 Hz\n- Airway narrowing\n\n**Rhonchi:**\n- Continuous, low-pitched\n- <200 Hz\n- Secretions in large airways\n\n**Crackles (Rales):\n- Discontinuous\n- Fine or coarse\n- Fluid or fibrosis\n\n**Pleural Friction Rub:**\n- Grating, leathery\n- Pleural inflammation',

      keyTerms: [
        { term: 'adventitious sounds', definition: 'Abnormal breath sounds' },
        { term: 'bronchovesicular', definition: 'Breath sound over bronchi' },
        { term: 'rales', definition: 'Alternative term for crackles' },
      ],

      examples: [
        'Bilateral wheezing suggests asthma.',
        'Unilateral absent sounds suggests pneumothorax or effusion.',
        'Basilar crackles suggest heart failure.',
      ],

      clinicalNotes: 'Always compare symmetric points. Listen during full inspiratory and expiratory phases.',
    },

    3: {
      level: 3,
      summary: 'Advanced auscultation interprets sound patterns to differentiate respiratory pathologies and guide treatment.',
      explanation: '## Pathological Patterns\n\n**Consolidation:**\n- Bronchial breath sounds\n- Egophony (E to A change)\n- Whispered pectoriloquy\n- Increased transmission\n\n**Pleural Effusion:**\n- Decreased/absent sounds\n- Dullness to percussion\n- Bronchial sounds above fluid\n\n**Pneumothorax:**\n- Absent breath sounds\n- Hyperresonant percussion\n- May have subcutaneous emphysema\n\n**Obstruction:**\n- Wheezing\n- Prolonged expiration\n- Decreased breath sounds distal\n\n### Quality Assessment\n\n**Egophony:**\n- Patient says "E"\n- Sounds like "A" over consolidation\n\n**Whispered Pectoriloquy:**\n- Whispered words heard clearly\n- Consolidated lung\n\n**Bronchophony:**\n- Spoken words louder over consolidation',

      keyTerms: [
        { term: 'consolidation', definition: 'Airspace filled with fluid/pus' },
        { term: 'egophony', definition: 'E to A sound change' },
        { term: 'pectoriloquy', definition: 'Transmission of whispered words' },
      ],

      examples: [
        'Focal bronchial breathing suggests pneumonia.',
        'Diffuse polyphonic wheeze suggests asthma.',
      ],

      clinicalNotes: 'Egophony and pectoriloquy indicate lung consolidation from pneumonia.',
    },

    4: {
      level: 4,
      summary: 'Clinical integration of auscultation findings with imaging and management of respiratory disease.',
      explanation: '## Differential Diagnosis\n\n**Wheezing:**\n- Asthma\n- COPD\n- Foreign body\n- Anaphylaxis\n- Heart failure (cardiac asthma)\n\n**Crackles:**\n- Pulmonary edema\n- Pneumonia\n- Pulmonary fibrosis\n- Atelectasis\n- Bronchiectasis\n\n**Stridor:**\n- Upper airway obstruction\n- Epiglottitis\n- Croup\n- Anaphylaxis\n- Foreign body\n\n### Integration with Imaging\n\n**Chest X-ray:**\n- Confirm consolidation\n- Identify effusions\n- Assess heart size\n\n**CT:**\n- Characterize interstitial disease\n- Identify masses\n- Assess bronchiectasis\n\n**Ultrasound:**\n- Bedside effusion detection\n- Thoracentesis guidance',

      keyTerms: [
        { term: 'stridor', definition: 'High-pitched inspiratory sound from upper airway' },
        { term: 'atelectasis', definition: 'Collapsed lung tissue' },
        { term: 'bronchiectasis', definition: 'Dilated airways with chronic infection' },
      ],

      clinicalNotes: 'Stridor is a medical emergency - assess airway patency immediately.',
    },

    5: {
      level: 5,
      summary: 'Expert pulmonary auscultation in critical care and advanced diagnostic applications.',
      explanation: '## Critical Care Applications\n\n**Mechanical Ventilation:**\n- Asymmetric breath sounds\n- Endotracheal tube position\n- Pneumothorax detection\n- Secretions\n\n**ARDS:**\n- Diffuse crackles\n- Decreased compliance\n- Bilateral infiltrates\n\n**Post-operative:**\n- Atelectasis prevention\n- Secretion clearance\n- Early pneumonia detection\n\n### Advanced Techniques\n\n**Acoustic Monitoring:**\n- Computerized analysis\n- Continuous monitoring\n- Automated detection\n\n**Ultrasound:**\n- Bedside lung imaging\n- Comet tails (interstitial)\n- Consolidation patterns\n- Pleural abnormalities\n\n**Electrical Impedance Tomography:**\n- Real-time ventilation imaging\n- Regional distribution\n- PEEP optimization',

      keyTerms: [
        { term: 'ARDS', definition: 'Acute respiratory distress syndrome' },
        { term: 'PEEP', definition: 'Positive end-expiratory pressure' },
      ],

      clinicalNotes: 'Bedside lung ultrasound is increasingly used for rapid assessment in critical care.',
    },
  },

  media: [],

  citations: [
    {
      id: 'bates-resp',
      type: 'textbook',
      title: 'Bates Guide to Physical Examination',
      source: 'Lippincott',
    },
  ],

  crossReferences: [
    { targetId: 'respiratory-percussion', targetType: 'process', relationship: 'sibling', label: 'Percussion' },
    { targetId: 'respiratory-inspection', targetType: 'process', relationship: 'sibling', label: 'Inspection' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['physical-examination'],
    keywords: ['lungs', 'auscultation', 'breath sounds', 'wheezing'],
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

export default lungAuscultation;
