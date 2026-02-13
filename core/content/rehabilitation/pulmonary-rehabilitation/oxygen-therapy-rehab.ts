/**
 * Oxygen Therapy in Rehabilitation - Educational Content
 */

import { EducationalContent } from '../../types';

export const oxygenTherapyRehab: EducationalContent = {
  id: 'rehab-oxygen-therapy-rehab',
  type: 'concept',
  name: 'Oxygen Therapy in Rehabilitation',
  alternateNames: ['Supplemental Oxygen', 'O2 Therapy'],

  levels: {
    1: {
      level: 1,
      summary: 'Some people need extra oxygen during exercise or daily activities to keep their body working well.',
      explanation: `If your lungs cannot get enough oxygen into your blood, you may need supplemental oxygen - extra oxygen that you breathe in through a tube or mask.

**When might you need oxygen?**
- Your oxygen level drops during activity
- You have severe lung disease
- You feel very short of breath
- Your doctor says you need it

**How is oxygen given?**
- Through a small tube in your nose (nasal cannula)
- Through a face mask
- From a tank, machine, or portable device

**Using oxygen during exercise:**
- Allows you to exercise longer
- Helps you feel less short of breath
- Keeps your oxygen levels safe
- May help you get more benefit from rehab

**Safety rules:**
- Never smoke near oxygen
- Keep away from flames and heat
- Follow your prescribed flow rate
- Check your equipment regularly`,
      keyTerms: [
        { term: 'supplemental oxygen', definition: 'Extra oxygen you breathe to help when your lungs cannot get enough' },
        { term: 'nasal cannula', definition: 'A small tube with two prongs that goes in your nose to deliver oxygen' },
        { term: 'oxygen saturation', definition: 'A measure of how much oxygen is in your blood' },
      ],
      analogies: [
        'Supplemental oxygen is like giving your car extra fuel when it is struggling to go up a hill.',
      ],
      examples: [
        'A person uses portable oxygen during pulmonary rehab exercise sessions to maintain safe oxygen levels.',
      ],
    },
    2: {
      level: 2,
      summary: 'Supplemental oxygen during rehabilitation allows patients with hypoxemia to exercise safely and at higher intensities, potentially improving training outcomes.',
      explanation: `Oxygen therapy during rehabilitation is used to maintain adequate oxygenation during exercise and activities.

**Indications for Oxygen During Exercise:**
- Resting SpO2 < 88-90%
- SpO2 drops below 88% during exercise
- Known exercise-induced hypoxemia
- Severe dyspnea limiting exercise

**Benefits of Oxygen During Exercise:**
- Maintains safe oxygen levels
- Allows higher exercise intensity
- May reduce dyspnea
- Extends exercise duration
- Improves exercise tolerance

**Assessment:**
- Resting oxygen saturation
- 6-minute walk test with oximetry
- Exercise testing with oxygen titration
- Ambulatory oxygen assessment

**Delivery Systems:**

**Stationary Systems:**
- Oxygen concentrators (most common)
- Large cylinders
- Liquid oxygen reservoirs

**Portable Systems:**
- Small cylinders
- Portable concentrators
- Liquid portable units

**Prescribing Oxygen:**
- Flow rate to maintain SpO2 > 90%
- May need different rates at rest vs. activity
- Titrate during exercise testing
- Consider continuous vs. pulse delivery

**Important Considerations:**
- Proper fitting of cannula
- Humidification if needed
- Safety education
- Regular reassessment`,
      keyTerms: [
        { term: 'hypoxemia', definition: 'Low oxygen levels in the blood' },
        { term: 'SpO2', definition: 'Oxygen saturation measured by pulse oximetry' },
        { term: 'oxygen concentrator', definition: 'Device that filters room air to provide concentrated oxygen' },
        { term: 'pulse delivery', definition: 'Oxygen delivered in bursts timed to inhalation' },
      ],
      analogies: [
        'An oxygen concentrator is like an air filter that removes everything except oxygen.',
      ],
    },
    3: {
      level: 3,
      summary: 'Supplemental oxygen during pulmonary rehabilitation corrects exercise-induced hypoxemia, enabling higher training intensities and potentially augmenting physiological adaptations.',
      explanation: `## Physiological Rationale

**Exercise-Induced Hypoxemia:**
- Ventilation-perfusion mismatch
- Diffusion limitation
- Reduced mixed venous oxygen
- Dynamic hyperinflation effects

**Effects of Hypoxemia During Exercise:**
- Increased dyspnea perception
- Reduced exercise capacity
- Potential cardiac stress
- Limited training intensity

**Effects of Supplemental Oxygen:**
- Corrects arterial hypoxemia
- Reduces ventilatory drive
- Decreases dyspnea
- May improve peripheral oxygen delivery

## Assessment for Ambulatory Oxygen

**Who Needs Assessment:**
- Resting SpO2 < 94%
- Desaturation suspected on exertion
- Severe COPD (FEV1 < 30% predicted)
- Exercise limitation with dyspnea

**Testing Protocol:**
1. Baseline 6MWT on room air
2. Repeat with titrated oxygen
3. Document flow rate achieving SpO2 > 90%
4. Note improvement in distance or symptoms

**Titration Goals:**
- SpO2 > 90% (or > 88% in some guidelines)
- During representative exercise
- Practical flow rate
- Achievable with portable equipment

## Oxygen During Rehabilitation

**Benefits:**
- Higher achievable workloads
- Longer exercise duration
- Reduced dyspnea
- Potentially greater training effect

**Evidence:**
- Acute benefits well-documented
- Chronic training benefits less clear
- May enable rehabilitation in severe disease
- Cost-effectiveness uncertain

## Delivery Considerations

| Device | Flow Range | Considerations |
|--------|-----------|----------------|
| Nasal cannula | 1-6 L/min | Most common, comfortable |
| Simple mask | 5-10 L/min | Higher flows, less comfortable |
| Venturi mask | Variable | Precise FiO2 |
| Reservoir cannula | 1-4 L/min | Oxygen-conserving |

**Pulse vs. Continuous:**
- Pulse-dose conserves oxygen
- May not match continuous at higher demands
- Individual testing important
- Consider continuous for exercise

## Practical Management

**Portable Equipment Selection:**
- Weight and size
- Battery life (for concentrators)
- Flow capabilities
- Pulse vs. continuous option
- Patient preference

**Safety Education:**
- Fire hazard awareness
- Proper use and maintenance
- Travel considerations
- When to seek help`,
      keyTerms: [
        { term: 'ambulatory oxygen', definition: 'Portable oxygen for use during movement and activities' },
        { term: 'FiO2', definition: 'Fraction of inspired oxygen - the percentage of oxygen in inspired air' },
        { term: 'pulse oximetry', definition: 'Non-invasive measurement of oxygen saturation using light absorption' },
        { term: 'Venturi mask', definition: 'Oxygen mask that delivers precise oxygen concentration' },
      ],
      clinicalNotes: 'Testing for ambulatory oxygen should be performed with realistic activity (walking, not cycling) at an intensity the patient is likely to encounter. Pulse-dose portable concentrators may not deliver equivalent oxygenation to continuous flow during exercise.',
    },
    4: {
      level: 4,
      summary: 'Advanced oxygen therapy in rehabilitation requires individualized assessment, consideration of delivery device characteristics, and integration with training protocols to optimize exercise capacity and quality of life.',
      explanation: `## Detailed Oxygen Assessment

**Comprehensive Testing:**
- Arterial blood gas at rest
- CPET with arterial sampling (gold standard)
- 6MWT or shuttle walk with oximetry
- Overnight oximetry if sleep desaturation suspected

**Interpreting Desaturation:**
- Magnitude of drop
- Rate of desaturation
- Recovery pattern
- Correlation with symptoms

**Threshold Decisions:**
- SpO2 < 88% widely used threshold
- Some advocate for maintaining > 90%
- Individual factors influence target
- Guidelines vary internationally

## Advanced Delivery Modes

**High-Flow Nasal Cannula (HFNC):**
- Heated, humidified oxygen
- Flows 10-60 L/min
- Provides washout of dead space
- Some PEEP effect
- Emerging role in rehabilitation

**Portable Oxygen Concentrators (POC):**
- Battery-powered
- No cylinder refills needed
- Weight and size improvements
- Pulse-dose common
- Maximum output varies by model

**Liquid Oxygen Systems:**
- Higher flow capabilities
- Lighter portable units
- Requires refilling
- Less common currently

## Training Considerations

**Oxygen and Exercise Intensity:**
- Oxygen allows higher training intensity
- Debate about necessity for non-hypoxemic patients
- Individual response variability
- No clear evidence oxygen enhances training effect in normoxemic patients

**Protocol Integration:**
- Oxygen titrated before exercise
- Monitor during training
- Adjust as fitness improves
- Reassess periodically

**Weaning Considerations:**
- Oxygen needs may decrease with training
- Regular reassessment indicated
- Avoid unnecessary long-term use
- Patient may become anxious about removal

## Special Situations

**Air Travel:**
- Commercial aircraft cabin altitude ~8,000 feet
- PaO2 drops approximately 25%
- Pre-flight hypoxic challenge may be indicated
- In-flight oxygen arrangements needed

**High Altitude:**
- Similar physiology to air travel
- Acclimatization considerations
- May need increased oxygen
- Activity limitations

**Sleep:**
- Desaturation common during sleep
- May need nocturnal oxygen
- Different from ambulatory needs
- Consider sleep study

## Practical Challenges

**Adherence:**
- Stigma of visible oxygen use
- Device burden
- Interference with activities
- Cost and insurance issues

**Device Limitations:**
- Weight and battery constraints
- Noise
- Maintenance requirements
- Not all devices adequate for exercise

**Coordination:**
- Multiple prescribers
- Equipment suppliers
- Insurance authorization
- Reassessment scheduling`,
      keyTerms: [
        { term: 'CPET', definition: 'Cardiopulmonary exercise testing - comprehensive assessment including gas exchange' },
        { term: 'HFNC', definition: 'High-flow nasal cannula - heated, humidified, high-flow oxygen delivery' },
        { term: 'hypoxic challenge', definition: 'Test simulating altitude to assess oxygen needs during air travel' },
        { term: 'dead space washout', definition: 'Clearing of CO2-rich gas from airways by high fresh gas flow' },
      ],
      clinicalNotes: 'Portable oxygen concentrators (POCs) vary widely in maximum output and may not match continuous flow at higher activity levels. Testing with the specific device the patient will use is important to ensure adequate oxygenation during activity.',
    },
    5: {
      level: 5,
      summary: 'Contemporary research on oxygen therapy in rehabilitation addresses optimal prescribing strategies, novel delivery technologies, and the complex interplay between oxygen supplementation and exercise training adaptations.',
      explanation: `## Research Controversies

**Long-Term Oxygen in Moderate Hypoxemia:**
- LOTT trial: No benefit for moderate desaturation
- Questions optimal criteria for prescription
- Resting vs. exertional desaturation distinction
- Individual benefit vs. population evidence

**Oxygen and Training Effect:**
- Acute benefits clear
- Chronic training benefits uncertain
- Does oxygen improve or mask training stimulus?
- Hyperoxia studies inconclusive

**Normoxemic Supplementation:**
- No clear benefit for training
- May reduce dyspnea acutely
- Not recommended for non-hypoxemic patients
- Potential for oxidative stress

## Advanced Technologies

**Closed-Loop Systems:**
- Automatic flow adjustment
- Based on SpO2 feedback
- Maintains target saturation
- Research stage

**Wearable Monitoring:**
- Continuous SpO2 tracking
- Activity correlation
- Data for clinical decisions
- Adherence monitoring potential

**Lightweight Delivery:**
- Advanced materials
- Improved battery technology
- Miniaturization
- Wearable configurations

## Precision Oxygen Prescription

**Phenotype Considerations:**
- COPD phenotypes differ in oxygen response
- ILD vs. COPD desaturation patterns
- Pulmonary hypertension considerations
- Neuromuscular disease specifics

**Activity-Specific Prescribing:**
- Different needs for different activities
- Exercise vs. ADLs vs. sleep
- Multiple flow settings
- Patient education for self-titration

## Quality and Outcomes

**Outcome Measures:**
- Exercise capacity
- Quality of life
- Healthcare utilization
- Survival

**Implementation Challenges:**
- Appropriate assessment capacity
- Equipment access
- Insurance barriers
- Follow-up systems

## Future Directions

**Research Needs:**
- Optimal assessment protocols
- Training with vs. without oxygen
- Long-term outcomes
- Cost-effectiveness

**Technology Developments:**
- Smarter, smaller devices
- Better pulse-dose algorithms
- Integration with monitoring
- Alternative delivery methods

**Healthcare Delivery:**
- Telemedicine for oxygen management
- Remote monitoring integration
- Simplified prescribing pathways
- Quality metrics development`,
      keyTerms: [
        { term: 'LOTT trial', definition: 'Long-Term Oxygen Treatment Trial - landmark study of oxygen in moderate hypoxemia' },
        { term: 'closed-loop oxygen', definition: 'System automatically adjusting oxygen flow based on saturation feedback' },
        { term: 'hyperoxia', definition: 'Higher than normal oxygen levels in tissues or blood' },
        { term: 'auto-titration', definition: 'Automatic adjustment of oxygen flow to maintain target saturation' },
      ],
      clinicalNotes: 'The LOTT trial found no benefit of supplemental oxygen for patients with COPD and moderate resting or exercise-induced desaturation (SpO2 89-93%). This has informed more restrictive prescribing for moderate hypoxemia, though severe desaturation (SpO2 < 88%) remains an indication for oxygen.',
    },
  },

  media: [
    {
      id: 'oxygen-delivery-devices',
      type: 'diagram',
      filename: 'oxygen-delivery-devices.svg',
      title: 'Oxygen Delivery Devices',
      description: 'Visual overview of oxygen delivery systems for rehabilitation',
    },
  ],

  citations: [
    {
      id: 'lott-trial',
      type: 'article',
      title: 'A Randomized Trial of Long-Term Oxygen for COPD with Moderate Desaturation',
      authors: ['Long-Term Oxygen Treatment Trial Research Group'],
      source: 'New England Journal of Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'rehab-pulmonary-rehabilitation-program', targetType: 'topic', relationship: 'parent', label: 'Pulmonary Rehabilitation Program' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['rehabilitation', 'oxygen therapy', 'pulmonary'],
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

export default oxygenTherapyRehab;
