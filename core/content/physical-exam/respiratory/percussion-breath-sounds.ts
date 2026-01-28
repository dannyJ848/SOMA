/**
 * Percussion and Breath Sounds - Physical Examination
 */

import { EducationalContent } from '../../types';

export const percussionBreathSounds: EducationalContent = {
  id: 'respiratory-percussion-breath-sounds',
  type: 'process',
  name: 'Chest Percussion and Breath Sound Assessment',
  alternateNames: ['Chest Percussion', 'Percussion Exam', 'Respiratory Percussion'],

  levels: {
    1: {
      level: 1,
      summary: 'Chest percussion is tapping the chest to check if lungs are filled with air, fluid, or something else.',
      explanation: '## Percussion of the Chest\n\nPercussion means tapping on your chest with fingers. The sound helps doctors tell what is inside your lungs.\n\n### Percussion Sounds\n\n**Resonant:**\n- Low-pitched, hollow\n- Normal over healthy lung\n\n**Dull:**\n- Thud-like\n- Fluid or solid tissue\n- Like tapping a thigh\n\n**Hyperresonant:**\n- Very hollow, booming\n- Too much air (emphysema)\n\n**Tympanic:**\n- Drum-like\n- Large air pocket\n\n### What It Shows\n\n- **Dullness:** Fluid, consolidation, tumor\n- **Hyperresonance:** Pneumothorax, emphysema\n- **Normal:** Air-filled lung',

      keyTerms: [
        { term: 'percussion', definition: 'Tapping body to determine underlying structure' },
        { term: 'resonant', definition: 'Normal hollow sound over air-filled lung' },
        { term: 'dullness', definition: 'Thud-like sound over fluid or solid tissue' },
        { term: 'hyperresonant', definition: 'Abnormally hollow sound' },
      ],

      analogies: [
        'Percussion is like tapping a watermelon to check if it is ripe - different sounds mean different contents.',
      ],

      examples: [
        'Dullness at lung base suggests pleural effusion.',
        'Hyperresonance suggests pneumothorax or COPD.',
      ],

      patientCounselingPoints: [
        'This may feel like gentle tapping.',
        'It should not hurt.',
        'Breathe normally during the exam.',
      ],
    },

    2: {
      level: 2,
      summary: 'Systematic chest percussion technique identifies underlying pathology through sound interpretation.',
      explanation: '## Technique\n\n**Position:**\n- Patient sitting or supine\n- Arms crossed in front\n- Or hands on opposite shoulders\n\n**Method:**\n- Hyperextend middle finger (pleximeter)\n- Place firmly on chest\n- Tap middle phalanx with opposite finger\n- Compare side to side\n\n**Sequence:**\n- Anterior, lateral, posterior\n- Corresponding points\n- Top to bottom\n\n### Sound Interpretation\n\n| Sound | Pitch | Duration | Indicates |\n|-------|-------|----------|-----------|\n| Resonant | Low | Long | Normal lung |\n| Hyperresonant | Lower | Longer | Emphysema, pneumothorax |\n| Dull | High | Short | Consolidation, effusion |\n| Flat | Very high | Very short | Massive effusion, consolidation |\n| Tympanic | High | Medium | Pneumothorax, large cavity |',

      keyTerms: [
        { term: 'pleximeter', definition: 'Finger placed on chest for percussion' },
        { term: 'consolidation', definition: 'Airspace filled with fluid or cells' },
        { term: 'diaphragmatic excursion', definition: 'Movement of diaphragm with breathing' },
      ],

      examples: [
        'Dullness to percussion with decreased breath sounds suggests effusion.',
        'Unilateral hyperresonance suggests pneumothorax.',
      ],

      clinicalNotes: 'Percussion is most useful for detecting pleural effusions and consolidation.',
    },

    3: {
      level: 3,
      summary: 'Advanced percussion techniques including measurement of diaphragmatic excursion and localization of pathology.',
      explanation: '## Diaphragmatic Excursion\n\n**Technique:**\n- Percuss downward in scapular line\n- Mark where sound becomes dull\n- Have patient take deep breath\n- Mark new level of dullness\n- Normal: 5-6 cm movement\n\n**Interpretation:**\n- Reduced: COPD, obesity, neuromuscular\n- Asymmetric: phrenic nerve palsy, subphrenic process\n\n### Clinical Applications\n\n**Pleural Effusion:**\n- Dullness in dependent areas\n- Blunting of costophrenic angles\n- Meniscus sign\n- Mediastinal shift if large\n\n**Consolidation:**\n- Dullness over affected area\n- Bronchial breath sounds\n- Egophony\n\n**Pneumothorax:**\n- Hyperresonance\n- Absent breath sounds\n- Tracheal deviation away\n\n**Cavity:**\n- Dullness around\n- Tympany within\n- Amphoric breath sounds',

      keyTerms: [
        { term: 'phrenic nerve', definition: 'Nerve controlling diaphragm' },
        { term: 'meniscus sign', definition: 'Curved upper border of effusion' },
        { term: 'amphoric', definition: 'Hollow, blowing breath sound' },
      ],

      examples: [
        'Decreased diaphragmatic excursion in COPD.',
        'Elevated hemidiaphragm after abdominal surgery.',
      ],

      clinicalNotes: 'Percussion of diaphragmatic excursion requires patient cooperation for deep breathing.',
    },

    4: {
      level: 4,
      summary: 'Integration of percussion with other physical exam findings for diagnosis of respiratory conditions.',
      explanation: '## Diagnostic Patterns\n\n**Pleural Effusion:**\n- Dullness to percussion\n- Decreased tactile fremitus\n- Absent breath sounds\n- Bronchial breathing above\n\n**Pneumonia with Consolidation:**\n- Dullness\n- Increased tactile fremitus\n- Bronchial breath sounds\n- Crackles\n\n**Pneumothorax:**\n- Hyperresonance\n- Absent tactile fremitus\n- Absent breath sounds\n- May have tracheal deviation\n\n**Atelectasis:**\n- Dullness\n- Decreased fremitus\n- Decreased/absent breath sounds\n- Volume loss signs\n\n### Tactile Fremitus\n- Patient says "ninety-nine"\n- Feel vibrations on chest\n- Increased with consolidation\n- Decreased with effusion, pneumothorax',

      keyTerms: [
        { term: 'tactile fremitus', definition: 'Vibrations felt on chest wall' },
        { term: 'tracheal deviation', definition: 'Shift of trachea from midline' },
        { term: 'volume loss', definition: 'Collapsed or reduced lung volume' },
      ],

      clinicalNotes: 'Tactile fremitus is increased in consolidation and decreased in effusion or pneumothorax.',
    },

    5: {
      level: 5,
      summary: 'Expert percussion assessment in complex cases and correlation with imaging modalities.',
      explanation: '## Advanced Applications\n\n**Comparative Percussion:**\n- Serial examinations\n- Track effusion size\n- Post-thoracentesis assessment\n\n**Pediatric Considerations:**\n- Thinner chest wall\n- Different technique\n- Higher normal resonance\n\n**Obesity:**\n- Technique modification\n- Deeper pressure needed\n- May be less reliable\n\n### Imaging Correlation\n\n**Chest X-ray:**\n- Confirm percussion findings\n- Quantify effusion size\n- Identify underlying cause\n\n**Ultrasound:**\n- Bedside confirmation\n- Characterize effusion\n- Guide procedures\n\n**CT:**\n- Detailed anatomy\n- Characterize masses\n- Assess mediastinum',

      keyTerms: [
        { term: 'thoracentesis', definition: 'Removal of pleural fluid' },
        { term: 'mediastinum', definition: 'Central chest compartment' },
      ],

      clinicalNotes: 'Percussion remains valuable for bedside assessment despite availability of ultrasound.',
    },
  },

  media: [],

  citations: [
    {
      id: 'bates-perc',
      type: 'textbook',
      title: 'Bates Guide to Physical Examination',
      source: 'Lippincott',
    },
  ],

  crossReferences: [
    { targetId: 'respiratory-lung-auscultation', targetType: 'process', relationship: 'sibling', label: 'Auscultation' },
    { targetId: 'respiratory-inspection', targetType: 'process', relationship: 'sibling', label: 'Inspection' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['physical-examination'],
    keywords: ['percussion', 'lungs', 'chest', 'respiratory'],
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

export default percussionBreathSounds;
