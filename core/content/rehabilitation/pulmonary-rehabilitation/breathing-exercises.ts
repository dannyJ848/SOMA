/**
 * Breathing Exercises - Educational Content
 */

import { EducationalContent } from '../../types';

export const breathingExercises: EducationalContent = {
  id: 'rehab-breathing-exercises',
  type: 'concept',
  name: 'Breathing Exercises',
  alternateNames: ['Respiratory Exercises', 'Breathing Techniques'],

  levels: {
    1: {
      level: 1,
      summary: 'Special breathing exercises can help you breathe easier, relax, and get more air when you feel short of breath.',
      explanation: `Learning to breathe in special ways can help when you have trouble breathing or feel stressed.

**Pursed-Lip Breathing:**
1. Breathe in slowly through your nose (count to 2)
2. Pucker your lips like you are going to whistle
3. Breathe out slowly through pursed lips (count to 4)

This helps you breathe out more air and feel less short of breath.

**Belly Breathing (Diaphragmatic):**
1. Put one hand on your chest and one on your belly
2. Breathe in slowly - your belly should rise, not your chest
3. Breathe out slowly - feel your belly go down

This helps you use your breathing muscle (diaphragm) better.

**When to use these:**
- When you feel short of breath
- During activities that make you breathless
- When you feel stressed or anxious
- To help you relax`,
      keyTerms: [
        { term: 'pursed-lip breathing', definition: 'Breathing out through slightly closed lips' },
        { term: 'diaphragm', definition: 'The main muscle you use to breathe, located below your lungs' },
        { term: 'inhale', definition: 'Breathing in' },
        { term: 'exhale', definition: 'Breathing out' },
      ],
      analogies: [
        'Pursed-lip breathing is like slowly letting air out of a balloon instead of letting it rush out.',
        'The diaphragm works like a pump - when it moves down, air comes in.',
      ],
      examples: [
        'Using pursed-lip breathing when walking up stairs to prevent getting too out of breath.',
      ],
    },
    2: {
      level: 2,
      summary: 'Breathing exercises including pursed-lip breathing and diaphragmatic breathing improve ventilation efficiency, reduce dyspnea, and are core components of pulmonary rehabilitation.',
      explanation: `Breathing exercises are therapeutic techniques that optimize respiratory function and reduce the sensation of breathlessness.

**Pursed-Lip Breathing (PLB):**

**Technique:**
- Inhale through nose for 2 seconds
- Exhale through pursed lips for 4-6 seconds
- Ratio of 1:2 or 1:3 (inhale:exhale)

**How it Works:**
- Creates positive pressure in airways
- Keeps airways open longer during exhale
- Reduces air trapping
- Slows breathing rate

**When to Use:**
- During physical activity
- When feeling short of breath
- To recover after exertion

**Diaphragmatic Breathing:**

**Technique:**
- Place hand on abdomen
- Breathe in, allowing abdomen to rise
- Keep chest still
- Exhale slowly

**Benefits:**
- Engages diaphragm more effectively
- Reduces use of accessory muscles
- Promotes relaxation
- May improve oxygen levels

**Other Techniques:**

**Paced Breathing:**
- Coordinating breathing with activity
- Exhale during exertion phase
- Example: Breathe out when climbing, in when resting

**Segmental Breathing:**
- Directing breath to specific lung areas
- Used after surgery or with atelectasis
- Combined with positioning

**Relaxation Breathing:**
- Slow, controlled breaths
- Helps with anxiety
- Can lower heart rate and blood pressure`,
      keyTerms: [
        { term: 'air trapping', definition: 'Air that gets stuck in the lungs because airways close too early' },
        { term: 'accessory muscles', definition: 'Neck and shoulder muscles that help with breathing when the diaphragm needs help' },
        { term: 'atelectasis', definition: 'Collapsed or deflated area of the lung', pronunciation: 'at-el-EK-tah-sis' },
        { term: 'ventilation', definition: 'The movement of air in and out of the lungs' },
      ],
      analogies: [
        'Air trapping is like water getting stuck in a hose because you kinked it - pursed-lip breathing helps keep the "hose" open.',
      ],
    },
    3: {
      level: 3,
      summary: 'Breathing exercises optimize ventilatory mechanics through conscious control of respiratory pattern, timing, and muscle recruitment, with evidence supporting their role in dyspnea management and functional improvement.',
      explanation: `## Physiological Mechanisms

**Pursed-Lip Breathing:**
- Creates positive end-expiratory pressure (PEEP)
- Prevents premature airway collapse
- Reduces dynamic hyperinflation
- Decreases respiratory rate
- Improves tidal volume
- Promotes gas exchange efficiency

**Diaphragmatic Breathing:**
- Optimizes length-tension relationship of diaphragm
- Reduces work of breathing
- Decreases respiratory rate
- Improves ventilation-perfusion matching
- May reduce oxygen cost of breathing

## Evidence Base

**Pursed-Lip Breathing:**
- Demonstrated improvement in SpO2
- Reduced respiratory rate
- Decreased dyspnea perception
- Improved exercise tolerance
- Better recovery from exertion

**Diaphragmatic Breathing:**
- Mixed evidence in COPD
- May not be beneficial in severe hyperinflation
- Better evidence in post-operative populations
- Useful for anxiety-related dyspnea

## Clinical Application

**Assessment:**
- Observation of breathing pattern
- Respiratory rate and depth
- Accessory muscle use
- Chest wall motion
- Patient report of dyspnea

**Teaching Progression:**
1. Demonstrate technique
2. Practice at rest in comfortable position
3. Apply during mild activity
4. Use during challenging situations
5. Integrate automatically

## Specific Techniques

**Paced Breathing for Activity:**
- Count steps with breaths
- Inhale for 2 steps, exhale for 4 steps (example)
- Adjust to individual capacity
- Practice with specific activities

**Breathing Coordination:**
| Activity | Breathing Pattern |
|----------|------------------|
| Standing from sitting | Exhale during rise |
| Lifting | Exhale during lift |
| Climbing stairs | Exhale climbing, inhale resting |
| Bending | Exhale while bending |

**Controlled Coughing:**
- Deep breath, brief hold
- Short huff or cough
- Prevents airway collapse
- More effective secretion clearance

## Position-Enhanced Breathing

**Positions for Dyspnea:**
- Tripod position (leaning forward)
- Supported sitting
- Side-lying
- High Fowler's (in bed)

These positions optimize diaphragm mechanics and support respiratory muscles.`,
      keyTerms: [
        { term: 'dynamic hyperinflation', definition: 'Progressive air trapping during activity causing increased lung volumes' },
        { term: 'PEEP', definition: 'Positive end-expiratory pressure - pressure in airways at end of exhale' },
        { term: 'tripod position', definition: 'Sitting leaning forward with hands on knees, optimizing breathing mechanics' },
        { term: 'huff', definition: 'Forced exhale with open glottis, more effective than cough for secretion clearance' },
      ],
      clinicalNotes: 'Diaphragmatic breathing may increase work of breathing in patients with severe COPD and flattened diaphragms due to hyperinflation. In these patients, pursed-lip breathing is often more effective.',
    },
    4: {
      level: 4,
      summary: 'Advanced breathing techniques integrate respiratory muscle training, biofeedback, and activity-specific strategies to optimize ventilatory efficiency and functional capacity in chronic respiratory disease.',
      explanation: `## Respiratory Muscle Function

**Diaphragm Dysfunction in Disease:**
- Flattening in COPD (mechanical disadvantage)
- Weakness from disease or disuse
- Fatigue with increased loads
- Altered length-tension relationship

**Assessment of Respiratory Muscles:**
- Maximal inspiratory pressure (MIP/PImax)
- Maximal expiratory pressure (MEP/PEmax)
- Sniff nasal inspiratory pressure
- Ultrasound diaphragm assessment

## Inspiratory Muscle Training (IMT)

**Devices:**
- Threshold loading devices
- Resistive loading devices
- Tapered flow resistive devices

**Protocol:**
- 30% of MIP initially
- Progress as tolerated
- 30 breaths, twice daily
- 6-8 weeks minimum

**Evidence:**
- Improved MIP
- Reduced dyspnea
- Improved exercise capacity
- May reduce hospitalizations

## Biofeedback-Assisted Techniques

**Capnography Biofeedback:**
- Real-time ETCO2 monitoring
- Guides breathing rate and depth
- Prevents hyperventilation
- Useful for anxiety-related dyspnea

**EMG Biofeedback:**
- Accessory muscle monitoring
- Promotes diaphragmatic breathing
- Reduces unnecessary muscle activity

**Visual Feedback:**
- Incentive spirometry
- Movement biofeedback bands
- Apps with visual cues

## Activity-Specific Breathing

**Stairs:**
- Rhythm breathing with steps
- Rest and recover at landings
- Pursed-lip during climb
- May ascend during inhale (controlled)

**Walking:**
- Coordinated breathing-step ratio
- Pursed-lip as needed
- Pacing strategy
- Recovery positions

**Upper Extremity Activities:**
- Exhale during exertion
- Frequent rest periods
- Energy conservation
- Supported positions when possible

## Yoga and Mindfulness

**Pranayama (Yoga Breathing):**
- Alternate nostril breathing
- Controlled breath holds
- Slow breathing techniques
- Some evidence for COPD benefit

**Mindfulness-Based Breathing:**
- Attention to breath
- Acceptance of sensations
- Reduced anxiety
- May improve dyspnea perception

## Special Populations

**Post-Surgical:**
- Incentive spirometry
- Segmental breathing
- Coughing/splinting
- Deep breathing exercises

**Neuromuscular Disease:**
- Glossopharyngeal breathing
- Breath stacking
- Assisted cough techniques

**Anxiety-Related Dyspnea:**
- Slow breathing focus
- Extended exhale techniques
- Mindfulness integration
- Cognitive restructuring`,
      keyTerms: [
        { term: 'MIP/PImax', definition: 'Maximal inspiratory pressure - measure of inspiratory muscle strength' },
        { term: 'threshold loading', definition: 'Respiratory training requiring set pressure to open valve' },
        { term: 'capnography', definition: 'Measurement of exhaled carbon dioxide' },
        { term: 'glossopharyngeal breathing', definition: 'Gulp breathing technique using mouth and throat muscles' },
      ],
      clinicalNotes: 'Inspiratory muscle training is most beneficial in patients with demonstrated inspiratory muscle weakness (MIP <60% predicted). In patients with normal inspiratory muscle strength, benefits are less clear.',
    },
    5: {
      level: 5,
      summary: 'Contemporary research in breathing exercises explores mechanistic pathways, technology-enhanced delivery, and precision approaches to optimize respiratory interventions across diverse populations and settings.',
      explanation: `## Mechanistic Understanding

**Central Effects:**
- Reduced central respiratory drive
- Altered dyspnea perception
- Vagal afferent modulation
- Cortical influences on breathing pattern

**Peripheral Effects:**
- Respiratory muscle adaptation
- Chest wall compliance changes
- Airway patency maintenance
- Gas exchange optimization

**Psychophysiological:**
- Anxiety reduction pathways
- Interoceptive awareness
- Mind-body connection
- Autonomic modulation

## Technology Applications

**Wearable Sensors:**
- Respiratory rate monitoring
- Breathing pattern analysis
- Real-time feedback
- Long-term trend tracking

**Mobile Applications:**
- Guided breathing exercises
- Visual pacing cues
- Progress tracking
- Reminder systems

**Virtual Reality:**
- Immersive breathing guidance
- Distraction during dyspnea
- Biofeedback integration
- Emerging research area

## Research Frontiers

**Optimal Dosing:**
- Frequency and duration questions
- IMT protocol optimization
- Maintenance requirements
- Individualized prescription

**Mechanism Studies:**
- Neural imaging of breathing control
- Biomarker correlates
- Responder characteristics
- Long-term adaptations

**Comparative Effectiveness:**
- Head-to-head technique comparisons
- Component analysis
- Cost-effectiveness
- Real-world effectiveness

## Implementation Considerations

**Teaching Strategies:**
- Multi-modal instruction
- Repeated practice with feedback
- Integration into daily routine
- Maintenance prompts

**Barriers:**
- Cognitive demands
- Forgetting to practice
- Limited evidence awareness
- Time constraints

**Facilitators:**
- Technology reminders
- Group instruction
- Visual feedback
- Routine integration

## Special Applications

**Acute Dyspnea:**
- Emergency breathing techniques
- Position optimization
- Panic management
- Recovery strategies

**Mechanical Ventilation Weaning:**
- Diaphragm reconditioning
- Inspiratory muscle training
- Breathing pattern optimization
- Psychological preparation

**Palliative Care:**
- Comfort-focused breathing
- Anxiety management
- Symptom control
- Non-pharmacological approaches

## Global and Cultural Considerations

**Traditional Practices:**
- Yoga pranayama integration
- Tai chi breathing
- Qigong techniques
- Cultural adaptation

**Resource-Limited Settings:**
- Low-cost approaches
- Group instruction efficiency
- Community-based delivery
- Task-shifting potential`,
      keyTerms: [
        { term: 'interoceptive awareness', definition: 'Conscious perception of internal body signals' },
        { term: 'pranayama', definition: 'Yogic breathing exercises with various techniques and purposes' },
        { term: 'qigong', definition: 'Chinese practice integrating movement, breathing, and meditation' },
        { term: 'respiratory biofeedback', definition: 'Real-time feedback about breathing patterns to facilitate learning' },
      ],
      clinicalNotes: 'The integration of technology-assisted breathing exercises with traditional pulmonary rehabilitation shows promise for extending reach and maintaining engagement. However, face-to-face instruction remains important for proper technique development.',
    },
  },

  media: [
    {
      id: 'breathing-techniques-diagram',
      type: 'diagram',
      filename: 'breathing-techniques.svg',
      title: 'Breathing Exercise Techniques',
      description: 'Visual guide to pursed-lip and diaphragmatic breathing',
    },
  ],

  citations: [
    {
      id: 'gosselink-breathing',
      type: 'article',
      title: 'Controlled breathing and dyspnea in patients with COPD',
      authors: ['Gosselink, R.'],
      source: 'Journal of Rehabilitation Research and Development',
    },
  ],

  crossReferences: [
    { targetId: 'rehab-pulmonary-rehabilitation-program', targetType: 'topic', relationship: 'parent', label: 'Pulmonary Rehabilitation Program' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['rehabilitation', 'breathing', 'exercises'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default breathingExercises;
