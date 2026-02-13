/**
 * Airway Clearance Techniques - Educational Content
 */

import { EducationalContent } from '../../types';

export const airwayClearanceTechniques: EducationalContent = {
  id: 'rehab-airway-clearance-techniques',
  type: 'concept',
  name: 'Airway Clearance Techniques',
  alternateNames: ['Mucus Clearance', 'Chest Physiotherapy'],

  levels: {
    1: {
      level: 1,
      summary: 'Airway clearance techniques are special methods to help move mucus out of your lungs so you can breathe better.',
      explanation: `Sometimes mucus (phlegm) builds up in your lungs and makes it hard to breathe. Special techniques can help move this mucus out.

**Why does mucus build up?**
- Lung diseases like cystic fibrosis or bronchitis
- After being sick
- After surgery
- Not being able to cough well

**Simple ways to clear mucus:**

**Coughing:**
- Take a deep breath
- Cough strongly to push mucus out
- Repeat until clear

**Huffing:**
- Like coughing but gentler
- Take a medium breath
- Push air out quickly saying "huff"
- Less tiring than hard coughing

**Position changes:**
- Certain positions help mucus drain
- Gravity helps move mucus
- A therapist can show you the best positions

**Chest clapping:**
- Someone gently claps on your back and chest
- This loosens mucus
- Then you cough it out`,
      keyTerms: [
        { term: 'mucus', definition: 'Thick, slippery fluid made in your lungs and airways' },
        { term: 'airway', definition: 'The tubes that carry air to and from your lungs' },
        { term: 'huff', definition: 'A gentle, forced breath out to move mucus' },
      ],
      analogies: [
        'Mucus clearance is like getting ketchup out of a bottle - you need the right technique and position.',
      ],
      examples: [
        'A person with cystic fibrosis uses a vest that shakes their chest to loosen mucus every day.',
      ],
    },
    2: {
      level: 2,
      summary: 'Airway clearance techniques use positioning, breathing maneuvers, and mechanical aids to mobilize and remove secretions from the airways in patients with impaired clearance.',
      explanation: `Effective airway clearance is essential for patients who cannot clear secretions normally due to disease or weakness.

**When Are These Techniques Needed?**
- Cystic fibrosis
- Bronchiectasis
- Chronic bronchitis
- Neuromuscular diseases
- Post-operative patients
- ICU patients

**Categories of Techniques:**

**1. Conventional Chest Physiotherapy:**
- Postural drainage (positioning)
- Percussion (clapping)
- Vibration
- Usually combined

**2. Breathing Techniques:**
- Active cycle of breathing technique (ACBT)
- Autogenic drainage
- Forced expiratory technique (huffing)

**3. Positive Expiratory Pressure (PEP):**
- Breathing out against resistance
- Keeps airways open
- Helps move mucus
- Devices: Flutter, Acapella, PEP mask

**4. High-Frequency Chest Wall Oscillation:**
- Inflatable vest
- Rapid vibrations loosen mucus
- Common in cystic fibrosis

**5. Assisted Coughing:**
- Manually assisted cough
- Mechanical insufflation-exsufflation (cough assist)
- For patients with weak cough

**Active Cycle of Breathing Technique (ACBT):**
1. Breathing control (relaxed breathing)
2. Deep breathing exercises (thoracic expansion)
3. Forced expiration technique (huffs)

Cycle repeated until airway is clear.`,
      keyTerms: [
        { term: 'postural drainage', definition: 'Using body positions to help gravity drain mucus from different lung areas' },
        { term: 'percussion', definition: 'Rhythmic clapping on the chest to loosen mucus' },
        { term: 'PEP', definition: 'Positive expiratory pressure - breathing out against resistance' },
        { term: 'HFCWO', definition: 'High-frequency chest wall oscillation - vest therapy' },
      ],
      analogies: [
        'PEP devices are like creating a backup of air pressure that helps push mucus along.',
      ],
    },
    3: {
      level: 3,
      summary: 'Airway clearance techniques optimize mucociliary clearance through mechanical and physiological mechanisms, with selection based on patient characteristics, disease state, and evidence of effectiveness.',
      explanation: `## Physiology of Mucociliary Clearance

**Normal Clearance:**
- Mucus produced by goblet cells and submucosal glands
- Ciliary escalator moves mucus toward pharynx
- Cough provides backup mechanism
- Clearance rate affected by mucus properties and ciliary function

**Impairment Mechanisms:**
- Thick, dehydrated mucus (CF)
- Ciliary dysfunction (PCD)
- Airway inflammation (COPD, asthma)
- Reduced cough strength (neuromuscular disease)
- Architectural changes (bronchiectasis)

## Technique Mechanisms

**Postural Drainage:**
- Gravity-assisted drainage
- Position based on affected segments
- Typically 10-15 minutes per position
- May be modified for reflux risk

**Percussion and Vibration:**
- Mechanical energy transmission
- Loosens adherent secretions
- Applied during exhalation
- Concern about hypoxemia in some patients

**PEP Therapy:**
- Creates back-pressure in airways
- Prevents premature airway collapse
- Allows air behind mucus
- Facilitates subsequent removal

**Oscillating PEP (Flutter, Acapella):**
- Adds oscillation component
- Intermittent positive pressure
- May enhance mucus rheology
- Patient-controlled technique

## Evidence Summary

| Technique | Evidence Level | Primary Use |
|-----------|---------------|-------------|
| ACBT | Moderate | Bronchiectasis, CF |
| PEP | Moderate | CF, bronchiectasis |
| HFCWO | Moderate | CF |
| Postural drainage | Low-moderate | Various |
| Autogenic drainage | Low-moderate | CF |

**Cochrane Reviews:**
- No single technique superior overall
- Patient preference important
- Independence favors some techniques
- Adherence critical for effectiveness

## Disease-Specific Approaches

**Cystic Fibrosis:**
- Multiple techniques used
- HFCWO common
- PEP devices popular
- Combined with mucolytics

**Bronchiectasis:**
- ACBT commonly taught
- PEP devices effective
- Exercise enhances clearance
- May combine with hypertonic saline

**COPD:**
- Limited evidence for routine use
- May benefit during exacerbations
- Focus on huffing and coughing
- PEP if productive cough

**Neuromuscular Disease:**
- Assisted cough techniques
- Mechanical insufflation-exsufflation
- Combined with breath stacking
- Suctioning when needed`,
      keyTerms: [
        { term: 'mucociliary clearance', definition: 'The coordinated system of mucus production and ciliary movement that clears airways' },
        { term: 'autogenic drainage', definition: 'Technique using varied breath volumes and controlled breathing to mobilize secretions' },
        { term: 'ACBT', definition: 'Active Cycle of Breathing Technique - sequence of breathing exercises for clearance' },
        { term: 'rheology', definition: 'The study of flow properties of substances like mucus' },
      ],
      clinicalNotes: 'No airway clearance technique has been proven superior to others in comparative trials. Patient preference and adherence are crucial, so technique selection should be individualized.',
    },
    4: {
      level: 4,
      summary: 'Advanced airway clearance integrates mechanical devices, pharmacological adjuncts, and disease-specific protocols optimized through assessment of clearance physiology and treatment response.',
      explanation: `## Comprehensive Assessment

**Secretion Characteristics:**
- Volume and frequency of expectoration
- Viscosity and color
- Relationship to symptoms
- Response to interventions

**Pulmonary Function:**
- Spirometry pre/post clearance
- Lung volumes
- Gas exchange

**Imaging:**
- Chest radiograph
- CT for bronchiectasis extent
- May guide postural drainage positions

## Advanced Techniques

**Mechanical Insufflation-Exsufflation (MI-E):**
- Positive pressure inflation followed by rapid negative pressure
- Simulates cough
- Critical for neuromuscular disease
- Settings: +40/-40 cmH2O typical

**Intrapulmonary Percussive Ventilation (IPV):**
- Delivers high-frequency mini-bursts of gas
- Combines with aerosol delivery
- Percussion + aerosolization
- Acute care and chronic use

**High-Frequency Chest Wall Oscillation:**
- Vest delivers 5-25 Hz oscillations
- Multiple frequency settings
- Combined with nebulized medications
- Twice daily typical in CF

## Pharmacological Adjuncts

**Mucolytics:**
- Dornase alfa (CF specific)
- N-acetylcysteine (limited evidence)
- Hypertonic saline (osmotic effect)

**Bronchodilators:**
- Pre-treatment to open airways
- Improves technique effectiveness
- Standard in CF protocols

**Anti-inflammatory:**
- Reduce mucus production
- Decrease airway inflammation
- Disease-specific indications

## Protocol Development

**CF Foundation Guidelines:**
- Twice daily minimum
- Duration 15-30 minutes
- Combine with nebulized medications
- Technique matched to patient

**Bronchiectasis:**
- Once or twice daily
- Regular sputum production indicates benefit
- Exacerbation intensification
- Long-term maintenance

## Outcome Measures

**Objective:**
- Sputum weight/volume
- Lung function (FEV1, FVC)
- Radioaerosol clearance (research)
- Hospitalizations/exacerbations

**Subjective:**
- Ease of clearance
- Dyspnea
- Quality of life
- Patient preference

## Special Considerations

**Hemoptysis:**
- Avoid percussion
- Gentle techniques
- Position bleeding lung down
- Medical management primary

**Recent Surgery:**
- Splinting for comfort
- Modified techniques
- Pain management
- Incentive spirometry combined

**Mechanical Ventilation:**
- Positioning challenges
- Manual hyperinflation
- Suction integration
- Team coordination`,
      keyTerms: [
        { term: 'MI-E', definition: 'Mechanical insufflation-exsufflation - device providing assisted cough' },
        { term: 'IPV', definition: 'Intrapulmonary percussive ventilation - high-frequency ventilation with percussion' },
        { term: 'dornase alfa', definition: 'Recombinant DNase that breaks down DNA in CF sputum, reducing viscosity' },
        { term: 'breath stacking', definition: 'Taking multiple breaths without exhaling to maximize lung volume before cough' },
      ],
      clinicalNotes: 'Mechanical insufflation-exsufflation (cough assist) is the most effective technique for augmenting cough in patients with neuromuscular weakness. Settings of +40/-40 cmH2O approximate normal cough pressures.',
    },
    5: {
      level: 5,
      summary: 'Contemporary airway clearance research focuses on mucus biology, novel device development, and personalized approaches to optimize secretion management across the spectrum of airways disease.',
      explanation: `## Mucus Biology Advances

**Mucus Composition:**
- MUC5AC and MUC5B predominant gel-forming mucins
- Inflammatory mediators alter properties
- Hydration state critical
- DNA and actin from cell death

**CF Pathophysiology:**
- CFTR dysfunction leads to ASL depletion
- Thickened, dehydrated mucus
- Impaired ciliary transport
- Bacterial colonization facilitated

**Therapeutic Targets:**
- CFTR modulators (transformative for CF)
- ENaC inhibitors
- Hydration strategies
- Anti-inflammatory approaches

## Novel Technologies

**Smart Devices:**
- Sensor-embedded PEP devices
- Real-time feedback
- Adherence monitoring
- Technique optimization

**Personalized Oscillation:**
- Patient-specific frequency optimization
- Impedance-based guidance
- Automated adjustment

**Airway Surface Liquid Hydration:**
- Hypertonic saline mechanisms
- Dry powder mannitol
- Novel osmotic agents
- Combined with clearance techniques

## Research Frontiers

**Imaging-Guided Clearance:**
- Functional MRI of mucociliary transport
- CT-guided postural drainage
- Real-time clearance visualization

**Computational Modeling:**
- Airflow simulation
- Mucus transport prediction
- Technique optimization
- Individual anatomy consideration

**Biomarkers:**
- Sputum inflammatory markers
- Exhaled breath analysis
- Response prediction
- Treatment monitoring

## Population-Specific Advances

**CF in CFTR Modulator Era:**
- Reduced mucus burden
- May change clearance needs
- Ongoing techniques often still needed
- Protocol modification

**Non-CF Bronchiectasis:**
- Growing recognition
- Standardized protocols lacking
- Research investment increasing
- Phenotype-based approaches

**Critical Care:**
- Ventilator-associated complications
- Prone positioning integration
- Sedation/paralysis challenges
- Early mobilization impact

## Implementation Challenges

**Adherence:**
- Time-consuming techniques
- Lifestyle impact
- Simplification efforts
- Technology assistance

**Access:**
- Device costs
- Training requirements
- Geographic disparities
- Insurance coverage

**Evidence Gaps:**
- Comparative effectiveness
- Long-term outcomes
- Cost-effectiveness
- Optimal frequency and duration

## Future Directions

**Precision Airway Clearance:**
- Phenotype matching
- Biomarker-guided
- Response-based adjustment
- Individualized protocols

**Technology Integration:**
- Wearable monitoring
- AI-assisted technique selection
- Remote supervision
- Automated devices

**Implementation Science:**
- Adherence interventions
- Healthcare system integration
- Training standardization
- Quality improvement`,
      keyTerms: [
        { term: 'ASL', definition: 'Airway surface liquid - thin fluid layer lining airways essential for mucociliary clearance' },
        { term: 'CFTR modulators', definition: 'Drugs targeting the underlying CFTR protein defect in cystic fibrosis' },
        { term: 'ENaC', definition: 'Epithelial sodium channel - potential therapeutic target for airway hydration' },
        { term: 'mucin', definition: 'Large glycoprotein molecules that form the gel component of mucus' },
      ],
      clinicalNotes: 'CFTR modulator therapy (elexacaftor/tezacaftor/ivacaftor) has dramatically improved lung function and mucus clearance in eligible CF patients. However, most patients still benefit from ongoing airway clearance therapy, though intensity may be reduced.',
    },
  },

  media: [
    {
      id: 'airway-clearance-methods',
      type: 'diagram',
      filename: 'airway-clearance-methods.svg',
      title: 'Airway Clearance Techniques',
      description: 'Visual overview of different airway clearance methods',
    },
  ],

  citations: [
    {
      id: 'mccool-airway-clearance',
      type: 'article',
      title: 'Nonpharmacologic Airway Clearance Therapies: ACCP Evidence-Based Clinical Practice Guidelines',
      authors: ['McCool, F.D.', 'Rosen, M.J.'],
      source: 'Chest',
    },
  ],

  crossReferences: [
    { targetId: 'rehab-pulmonary-rehabilitation-program', targetType: 'topic', relationship: 'parent', label: 'Pulmonary Rehabilitation Program' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['rehabilitation', 'airway clearance', 'chest physiotherapy'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pulmonology'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default airwayClearanceTechniques;
