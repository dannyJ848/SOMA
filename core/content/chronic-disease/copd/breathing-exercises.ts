/**
 * Breathing Exercises - COPD Management
 */

import { EducationalContent } from '../../types';

export const BREATHING_EXERCISES: EducationalContent = {
  id: 'copd-breathing-exercises',
  type: 'concept',
  name: 'Breathing Exercises for COPD',
  alternateNames: ['Pursed lip breathing', 'Diaphragmatic breathing', 'Respiratory exercises'],

  levels: {
    1: {
      level: 1,
      summary: 'Special breathing techniques can help you breathe easier and feel less short of breath with COPD.',
      explanation: `**Why Breathing Exercises Help**
With COPD, air gets trapped in your lungs. Breathing exercises help you empty your lungs better and reduce shortness of breath.

**Pursed Lip Breathing (Most Important!):**
1. Breathe in slowly through your nose (2 counts)
2. Pucker your lips like blowing out a candle
3. Breathe out slowly through pursed lips (4 counts)
4. The exhale should be twice as long as the inhale

Use pursed lip breathing when:
- Feeling short of breath
- During activities
- Before and after using inhaler

**Belly (Diaphragmatic) Breathing:**
1. Sit or lie comfortably
2. Place one hand on chest, one on belly
3. Breathe in through nose - belly should rise
4. Breathe out through pursed lips - belly should fall
5. Keep chest still

**When to Practice:**
- Several times daily
- During activities that cause breathlessness
- When feeling anxious
- Before bed for relaxation

**Tips for Success:**
- Practice when NOT short of breath first
- Start with just a few minutes
- Stay relaxed - don't force it
- Make it a habit`,
      keyTerms: [
        { term: 'pursed lip breathing', definition: 'Breathing out through puckered lips to slow down exhaling' },
        { term: 'diaphragmatic breathing', definition: 'Breathing using your belly muscle (diaphragm) instead of chest' },
      ],
      analogies: [
        'Pursed lip breathing is like letting air out of a balloon slowly through a small opening instead of all at once.',
      ],
      examples: [
        'Tom uses pursed lip breathing when climbing stairs. It helps him feel less out of breath.',
      ],
    },
    2: {
      level: 2,
      summary: 'Breathing exercises improve ventilation efficiency, reduce dyspnea, and enhance exercise tolerance in COPD through techniques that address air trapping and respiratory muscle dysfunction.',
      explanation: `**Physiological Basis:**

In COPD, airflow obstruction causes air trapping and hyperinflation, leading to dyspnea. Breathing exercises address this by:
- Slowing respiratory rate
- Prolonging expiration
- Reducing air trapping
- Optimizing respiratory muscle use

**Key Techniques:**

*Pursed Lip Breathing (PLB):*
| Phase | Technique | Purpose |
|-------|-----------|---------|
| Inhale | Through nose, 2 seconds | Slow intake |
| Exhale | Through pursed lips, 4+ seconds | Maintain airway patency |

Benefits: Reduces RR, improves tidal volume, decreases dyspnea

*Diaphragmatic Breathing:*
- Focus on abdominal movement
- Minimize upper chest movement
- Improve diaphragm efficiency

*Coordinated Breathing:*
- Match breathing to activities
- Exhale during effort
- Inhale during recovery

**Practice Guidelines:**
- Initial: 5-10 minutes, 3-4 times daily
- Progress to use during activities
- Combine with pulmonary rehabilitation

**Evidence:** Breathing exercises reduce dyspnea and improve exercise capacity, though effects on lung function are limited.`,
      keyTerms: [
        { term: 'hyperinflation', definition: 'Air trapping causing lungs to stay inflated beyond normal' },
        { term: 'dynamic hyperinflation', definition: 'Progressive air trapping during exercise causing increasing breathlessness' },
      ],
    },
    3: {
      level: 3,
      summary: 'Breathing retraining techniques address COPD pathophysiology through ventilatory pattern optimization, respiratory muscle training, and activity-specific strategies integrated within pulmonary rehabilitation.',
      explanation: `**Pathophysiology Addressed:**

*Air Trapping Mechanics:*
- Expiratory flow limitation
- Incomplete lung emptying
- Increased end-expiratory lung volume
- Reduced inspiratory capacity
- Increased work of breathing

*PLB Mechanism:*
Pursed Lips → Increased Airway Pressure
     ↓
Splints Open Small Airways
     ↓
More Complete Exhalation
     ↓
Reduced Air Trapping
     ↓
Decreased Dynamic Hyperinflation
     ↓
Improved Exercise Tolerance

**Evidence-Based Techniques:**

| Technique | Evidence Level | Primary Benefit |
|-----------|---------------|-----------------|
| Pursed lip breathing | Moderate | Dyspnea reduction |
| Diaphragmatic breathing | Low-Moderate | Variable |
| Active expiration | Low | Air trapping |
| Inspiratory muscle training | Moderate | Strength, endurance |

**Inspiratory Muscle Training (IMT):**
- Threshold loading devices
- Target: 30% maximal inspiratory pressure
- Duration: 15-30 minutes daily
- Benefits: Improved strength, reduced dyspnea`,
      keyTerms: [
        { term: 'inspiratory muscle training', definition: 'Exercise training for breathing muscles using resistance devices' },
        { term: 'expiratory flow limitation', definition: 'Maximum airflow cannot increase with additional effort' },
      ],
      clinicalNotes: 'PLB has strongest evidence for symptom relief. IMT beneficial when inspiratory muscle weakness present. Integrate breathing exercises within comprehensive pulmonary rehabilitation.',
    },
    4: {
      level: 4,
      summary: 'Advanced breathing interventions integrate ventilatory mechanics understanding, respiratory muscle physiology, and precision approaches to optimize ventilatory efficiency in COPD.',
      explanation: `**Ventilatory Mechanics:**

*Dynamic Hyperinflation:*
Exercise/Activity
     ↓
Increased Ventilatory Demand
     ↓
Shortened Expiratory Time
     ↓
Incomplete Emptying
     ↓
Progressive Air Trapping
     ↓
Increased EELV
     ↓
Reduced IC → Reaches TLC
     ↓
Mechanical Limit → Dyspnea/Exercise Termination

*PLB Effects:*
| Parameter | Change | Magnitude |
|-----------|--------|-----------|
| Respiratory rate | Decreased | 20-30% |
| Tidal volume | Increased | 10-20% |
| SpO2 | Improved | Variable |
| Dyspnea | Reduced | Significant |
| EELV | Decreased | Variable |

**Respiratory Muscle Assessment:**

*Maximal Inspiratory Pressure (MIP):*
- Normal: >80 cmH2O
- Weakness: <60 cmH2O
- Guides IMT prescription

*Inspiratory Muscle Training Protocol:*
- Threshold device at 30% MIP
- Progress to 60-80% MIP
- 15-30 min daily
- 8-12 weeks duration

**Integration with Technology:**

*Biofeedback:*
- Visual feedback of breathing pattern
- Real-time coaching
- Objective measurement

*Wearables:*
- Respiratory rate monitoring
- Pattern analysis
- Adherence tracking`,
      keyTerms: [
        { term: 'EELV', definition: 'End-expiratory lung volume; increased in air trapping' },
        { term: 'inspiratory capacity', definition: 'Maximum volume that can be inhaled from end-expiration; reduced in hyperinflation' },
        { term: 'MIP', definition: 'Maximal inspiratory pressure; measure of inspiratory muscle strength' },
      ],
      clinicalNotes: 'Assess inspiratory muscle strength before prescribing IMT. Dynamic hyperinflation is key mechanism limiting exercise in COPD. Combine breathing techniques with activity pacing for optimal benefit.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art breathing interventions leverage respiratory physiology understanding, precision phenotyping, digital therapeutics, and neuroscience of breathlessness to optimize ventilatory function and symptom control.',
      explanation: `**Precision Respiratory Medicine:**

*Phenotype-Specific Approaches:*
| Phenotype | Characteristics | Intervention Focus |
|-----------|-----------------|-------------------|
| Hyperinflation-predominant | High RV, low IC | PLB, bronchodilation |
| Muscle weakness | Low MIP | IMT |
| Anxiety-associated | Dyspnea-anxiety cycle | CBT + breathing |
| Exercise-limited | Dynamic hyperinflation | Paced breathing |

**Neuroscience of Dyspnea:**

*Brain Mechanisms:*
Respiratory Sensation
     ↓
Afferent Processing (brainstem)
     ↓
Cortical Perception (insula, cingulate)
     ↓
Emotional Processing (amygdala)
     ↓
Dyspnea Experience

*Interventions Targeting Brain:*
- Mindfulness-based breathing
- Cognitive reframing
- Distraction techniques
- Pulmonary rehabilitation psychological component

**Digital Therapeutics:**

*App-Based Training:*
- Guided breathing exercises
- Progress tracking
- Biofeedback integration
- Gamification

*Remote Monitoring:*
- Wearable respiratory sensors
- Pattern analysis
- AI-guided feedback

**Future Directions:**
- Personalized breathing prescriptions
- Neural modulation approaches
- Integrated digital platforms
- Objective dyspnea biomarkers`,
      keyTerms: [
        { term: 'interoception', definition: 'Perception of internal body sensations including breathlessness' },
        { term: 'dyspnea-anxiety cycle', definition: 'Reinforcing relationship between breathlessness and anxiety' },
      ],
      clinicalNotes: 'Dyspnea has both physiological and perceptual components. Address anxiety as part of breathlessness management. Digital breathing training shows promise but needs validation. Personalized approaches based on phenotype may improve outcomes.',
    },
  },

  media: [],
  citations: [{ id: 'gold-report', type: 'article', title: 'GOLD Report', source: 'GOLD' }],
  crossReferences: [{ targetId: 'copd-inhaler-technique', targetType: 'topic', relationship: 'related', label: 'Inhaler Technique' }],
  tags: { systems: ['respiratory'], topics: ['COPD', 'breathing exercises'], keywords: ['pursed lip breathing', 'diaphragmatic breathing'], clinicalRelevance: 'high' },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
