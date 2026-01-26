/**
 * Mobility Changes with Aging - Educational Content
 *
 * Covers age-related changes in gait, balance, muscle strength,
 * and strategies to maintain mobility and independence.
 */

import { EducationalContent } from '../types';

export const mobilityChanges: EducationalContent = {
  id: 'geriatric-mobility-changes',
  type: 'concept',
  name: 'Mobility Changes with Aging',
  alternateNames: ['Age-Related Mobility', 'Gait Changes in Elderly', 'Balance and Walking Changes'],

  levels: {
    1: {
      level: 1,
      summary: 'As we age, we may walk a bit slower, feel less steady, and have less strength. Staying active helps keep us moving well.',
      explanation: `**How Walking Changes with Age**

As we get older, our bodies change in ways that affect how we move around:

- We may walk more slowly
- Our steps may be shorter
- We might shuffle our feet more
- Getting up from a chair takes more effort
- We may feel less steady on our feet

**Why This Happens**

- Muscles get weaker if we do not use them
- Joints get stiffer
- Balance is not as good as it used to be
- We may have less energy

**What You Can Do**

The good news is that staying active helps a lot! Here are some things that help:

- Walk every day, even if it is just around your home
- Stand up and sit down from a chair several times (builds leg strength)
- Hold onto something sturdy and stand on one foot
- Join an exercise class for older adults

**When to Be Concerned**

See a doctor if you notice:
- Falling more than once in a year
- Being afraid of falling
- Having trouble getting up from a chair
- Walking much slower than before
- Pain when walking

**Staying Independent**

Moving well helps you:
- Do things for yourself
- Go places you want to go
- Stay connected with family and friends
- Feel confident and happy

Remember: It is normal to slow down a bit, but you should still be able to do most things you want to do. If mobility problems are limiting your life, help is available.`,
      keyTerms: [
        { term: 'mobility', definition: 'The ability to move around freely and easily' },
        { term: 'balance', definition: 'The ability to stay steady and not fall' },
        { term: 'gait', definition: 'The way you walk' },
        { term: 'strength', definition: 'How strong your muscles are' },
      ],
      analogies: [
        'Muscles are like a car battery - they stay charged when you use them regularly. If a car sits too long without being driven, the battery goes dead. Keep your muscles "charged" by moving every day.',
        'Balance is like riding a bike - you get better with practice. The more you challenge your balance safely, the better it stays.',
      ],
      examples: [
        'Taking a walk around the block each morning helps keep your legs strong.',
        'Getting up from a chair without using your hands is a great leg exercise.',
      ],
    },
    2: {
      level: 2,
      summary: 'Age-related mobility changes include slower gait speed, reduced stride length, decreased muscle mass and strength, and impaired balance, all of which can be improved with appropriate exercise and intervention.',
      explanation: `## Common Mobility Changes

**Gait (Walking) Changes**
- Slower walking speed (about 1% decrease per year after 60)
- Shorter stride length
- Wider stance for stability
- More time with both feet on ground
- Reduced arm swing
- Stooped posture

**Muscle Changes (Sarcopenia)**
- Loss of muscle mass (3-8% per decade after 30)
- Greater loss of fast-twitch fibers (power)
- Reduced muscle strength
- Decreased muscle quality

**Balance Changes**
- Reduced ability to correct for unexpected movements
- Longer reaction time
- More sway when standing
- Difficulty on uneven surfaces

**Joint Changes**
- Reduced range of motion
- Stiffness, especially in morning
- Changes in cartilage
- Posture changes (kyphosis)

## Impact on Daily Life

| Activity | How It May Change | Adaptation |
|----------|-------------------|------------|
| Getting out of bed | Slower, need support | Use bed rail, sit first |
| Walking | Slower, cautious | Allow more time, use cane if needed |
| Climbing stairs | More difficult | Use handrail, one step at a time |
| Getting up from chair | Harder | Use armrests, higher seat |
| Reaching overhead | Less range | Use step stool carefully, reorganize storage |

## Prevention and Improvement

**Exercise Recommendations**
- Aerobic: Walking, swimming, cycling (150 min/week)
- Strength: Resistance exercises 2-3 times/week
- Balance: Tai Chi, standing exercises, yoga
- Flexibility: Stretching, gentle range of motion

**Evidence-Based Programs**
- Otago Exercise Program (reduces falls 35%)
- Tai Chi (improves balance, reduces falls)
- Matter of Balance (reduces fear of falling)
- Silver Sneakers (comprehensive fitness)

**When to Seek Help**

See a healthcare provider if you experience:
- Falls (any fall deserves evaluation)
- Fear of falling that limits activities
- Significant decline in walking distance
- Difficulty with stairs or rising from chairs
- Unsteadiness requiring furniture for support

## Assistive Devices

| Device | When to Consider |
|--------|-----------------|
| Cane | Mild unsteadiness, leg weakness |
| Walker | Moderate balance problems |
| Rollator | Need for rest, carrying items |
| Wheelchair | Longer distances when walking not feasible |

Proper fitting and training essential for all devices.`,
      keyTerms: [
        { term: 'sarcopenia', definition: 'Age-related loss of muscle mass and strength', pronunciation: 'sar-koh-PEE-nee-uh' },
        { term: 'gait speed', definition: 'How fast a person walks, usually measured in meters per second' },
        { term: 'kyphosis', definition: 'Increased forward curvature of the upper spine', pronunciation: 'ky-FOH-sis' },
        { term: 'stride length', definition: 'The distance covered by one complete step' },
      ],
      analogies: [
        'Muscles are like a savings account - you need to keep depositing (exercise) or the balance (strength) slowly decreases.',
      ],
    },
    3: {
      level: 3,
      summary: 'Age-related mobility decline results from neuromuscular changes, altered biomechanics, and reduced physiological reserve, assessed through validated tools including gait speed and SPPB, with strong evidence supporting multicomponent exercise interventions.',
      explanation: `## Neuromuscular Changes

### Motor Unit Changes
- Progressive motor neuron loss (starting ~50s)
- Motor unit remodeling (larger, less precise units)
- Reduced firing rates
- Decreased motor unit recruitment speed

### Muscle Fiber Changes
- Preferential Type II (fast-twitch) fiber loss
- Type II fiber atrophy
- Relative preservation of Type I (slow-twitch)
- Fat and connective tissue infiltration

### Neuromuscular Junction
- Reduced acetylcholine receptors
- Altered presynaptic function
- Impaired neuromuscular transmission

## Biomechanical Adaptations

### Gait Modifications
**Spatiotemporal Parameters**
- Velocity: 0.8-1.0 m/s (normal >1.0 m/s)
- Cadence: Relatively preserved
- Stride length: Decreased (primary adaptation)
- Double support time: Increased (safety strategy)

**Kinematic Changes**
- Reduced hip extension at push-off
- Decreased ankle plantarflexion power
- Reduced trunk rotation
- Increased pelvic tilt

### Energy Expenditure
- Higher oxygen cost per unit distance
- Reduced walking efficiency
- Earlier fatigue
- Self-selected slower speed is most efficient

## Postural Control

### Balance Components
1. **Sensory integration**: Vision, vestibular, proprioception
2. **Central processing**: Slowed, requires more attention
3. **Motor output**: Delayed, reduced range

### Standing Balance
- Increased center of pressure variability
- Reduced limits of stability
- Altered postural strategies
- Difficulty with eyes closed

### Dynamic Balance
- Reduced ability to recover from perturbations
- Slower stepping responses
- Impaired voluntary weight shifting

## Assessment Tools

### Gait Speed
- Single best predictor of adverse outcomes
- Comfortable vs fast pace
- Normal: >1.0 m/s
- Impaired: <0.8 m/s predicts disability, falls, hospitalization

### Short Physical Performance Battery (SPPB)
Three components (0-4 points each, max 12):
1. Balance (tandem, semi-tandem, side-by-side)
2. Gait speed (4-meter walk)
3. Chair stands (5x timed)

**Interpretation**
- 10-12: High function
- 7-9: Intermediate
- ≤6: Low function, high risk

### Timed Up and Go (TUG)
- Rise from chair, walk 3m, turn, return, sit
- Normal: <10 seconds
- Increased fall risk: >12-14 seconds

### Additional Assessments
- 6-minute walk test (endurance)
- Berg Balance Scale (comprehensive balance)
- Functional Reach (anticipatory balance)

## Evidence-Based Interventions

### Exercise Components
**Resistance Training**
- 2-3 sessions/week
- Major muscle groups
- Progressive overload
- 8-12 repetitions, 2-3 sets

**Balance Training**
- Progressive challenge
- Multiple sensory conditions
- Reactive and anticipatory
- Dual-task integration

**Aerobic Training**
- 150 min/week moderate intensity
- Walking, cycling, swimming
- Improves efficiency and endurance

### Program Examples
**Otago Exercise Program**
- Home-based, individualized
- PT-delivered initially
- 30% fall reduction
- Strength and balance focus

**Tai Chi**
- Multiple meta-analyses support benefit
- 40-50% fall reduction in some studies
- Improves balance, flexibility, strength
- Mind-body component

### Physical Therapy
- Individualized assessment and treatment
- Gait training
- Balance exercises
- Home exercise program
- Assistive device recommendations`,
      keyTerms: [
        { term: 'motor unit', definition: 'A motor neuron and all the muscle fibers it controls' },
        { term: 'Type II fibers', definition: 'Fast-twitch muscle fibers responsible for power and quick movements' },
        { term: 'SPPB', definition: 'Short Physical Performance Battery - validated assessment of lower extremity function' },
        { term: 'center of pressure', definition: 'The point where ground reaction forces act during standing' },
        { term: 'postural sway', definition: 'Small movements of the body while trying to stand still' },
      ],
      clinicalNotes: 'Gait speed is the "sixth vital sign" in geriatrics. A gait speed <0.8 m/s should prompt further evaluation and intervention. Decline in gait speed over time predicts adverse events better than single measurements.',
    },
    4: {
      level: 4,
      summary: 'Mobility assessment integrates biomechanical, neurological, and systemic evaluation using validated instruments to identify modifiable factors, stratify fall risk, and develop individualized multicomponent interventions targeting strength, balance, and endurance.',
      explanation: `## Comprehensive Mobility Assessment

### History Components
- Functional mobility baseline (6 months-1 year ago)
- Trajectory of decline (gradual vs sudden)
- Fall history (number, circumstances, injuries)
- Fear of falling and activity restriction
- Medications (sedatives, antihypertensives, psychotropics)
- Chronic conditions affecting mobility

### Physical Examination
**Neurological**
- Peripheral neuropathy screening
- Proprioception (vibration, position sense)
- Romberg test
- Cerebellar examination
- Parkinsonism screening

**Musculoskeletal**
- Hip, knee, ankle ROM
- Joint pain and deformity
- Foot examination (calluses, deformities)
- Spinal alignment

**Cardiovascular**
- Orthostatic vital signs
- Heart rate and rhythm
- Signs of heart failure

### Quantitative Assessment

**Gait Analysis**
- Instrumented walkway (GAITRite, Zeno)
- Parameters: velocity, cadence, stride length, variability
- Dual-task walking (walking while talking)
- Gait variability predicts falls better than mean values

**Balance Assessment**
- Sensory organization test (computerized posturography)
- Limits of stability
- Perturbation response
- Single-leg stance time

**Strength Testing**
- Grip strength (hand dynamometer)
- Chair stand time (5x or 30-second count)
- Isokinetic testing (research settings)

### Risk Stratification

**Fall Risk Assessment Algorithm**
1. Falls in past year? If yes → multifactorial assessment
2. Gait/balance problem? If yes → multifactorial assessment
3. Neither → annual screening

**Multifactorial Assessment Components**
- Fall circumstances
- Gait and balance
- Vision
- Medications
- Orthostatic BP
- Cognitive function
- Fear of falling
- Home hazards
- Footwear

### Differential Diagnosis of Mobility Impairment

| Pattern | Characteristics | Common Causes |
|---------|-----------------|---------------|
| Antalgic | Short stance on painful leg | Arthritis, hip fracture |
| Ataxic | Wide-based, irregular | Cerebellar, vestibular |
| Parkinsonian | Shuffling, reduced arm swing | Parkinson's, NPH |
| Hemiparetic | Circumduction, foot drop | Stroke |
| Neuropathic | High steppage, slapping | Peripheral neuropathy |
| Cautious | Slow, wide-based, fearful | Fear of falling, multifactorial |

### Intervention Framework

**Multicomponent Exercise**
Evidence strongly supports combinations of:
- Progressive resistance training
- Balance and gait training
- Flexibility exercises
- Functional task practice

**Intensity and Progression**
- Start at appropriate level (may need seated exercises initially)
- Progress gradually (10-20% increase when comfortable)
- Challenge balance safely
- Include reactive balance training

**Adjunctive Interventions**
- Vitamin D (if deficient or at risk)
- Vision correction
- Medication review
- Home modification
- Footwear optimization

### Special Populations

**Frail Elderly**
- Modified intensity
- Chair-based exercises initially
- Focus on functional transfers
- Fall risk remains modifiable

**Cognitive Impairment**
- Simplified instructions
- More supervision needed
- Caregiver involvement
- Still benefits from exercise

**Post-Hospital**
- High-risk period for falls
- Transitional care coordination
- Early rehabilitation
- Close follow-up

### Outcome Measures

**Minimal Clinically Important Differences**
- Gait speed: 0.05-0.1 m/s improvement meaningful
- SPPB: 1-point change significant
- TUG: 3-4 second improvement meaningful

**Long-term Monitoring**
- Reassess every 3-6 months
- Track trajectory
- Adjust interventions
- Monitor for new conditions`,
      keyTerms: [
        { term: 'dual-task walking', definition: 'Walking while simultaneously performing a cognitive task' },
        { term: 'gait variability', definition: 'Step-to-step differences in gait parameters, increased variability predicts falls' },
        { term: 'perturbation training', definition: 'Exercise involving unexpected disturbances to improve reactive balance' },
        { term: 'NPH', definition: 'Normal pressure hydrocephalus - treatable cause of gait disturbance' },
        { term: 'circumduction', definition: 'Swinging leg outward during gait to clear the foot' },
      ],
      clinicalNotes: 'Dual-task gait testing (walking while counting backwards or naming animals) is highly sensitive for detecting early mobility problems and predicting falls. A >10-15% decrease in gait speed during dual-task indicates impaired motor-cognitive reserve.',
    },
    5: {
      level: 5,
      summary: 'Advanced mobility management integrates biomechanical science, fall prediction algorithms, precision exercise prescriptions, and systems-level implementation of evidence-based programs to maximize functional independence while addressing the complex interplay of sarcopenia, neurodegeneration, and multimorbidity.',
      explanation: `## Pathophysiology of Mobility Decline

### Sarcopenia: Current Understanding
**Diagnostic Criteria (EWGSOP2, 2019)**
1. Low muscle strength (probable sarcopenia)
   - Grip: <27 kg men, <16 kg women
   - Chair stand: >15 sec for 5 rises
2. Low muscle quantity/quality (confirmed)
   - DXA, BIA, or imaging
3. Low physical performance (severe)
   - SPPB ≤8, gait speed <0.8 m/s, TUG ≥20 sec

**Mechanisms**
- Reduced satellite cell function
- Increased myostatin
- Mitochondrial dysfunction
- Chronic inflammation
- Insulin resistance
- Reduced anabolic hormones
- Inadequate protein intake

### Neural Contributions
**Central**
- White matter hyperintensities → gait slowing
- Basal ganglia changes → reduced automaticity
- Prefrontal involvement → increased attention needed
- Cerebellar changes → coordination decline

**Peripheral**
- Large fiber neuropathy → proprioception loss
- Small fiber neuropathy → autonomic dysfunction
- Motor neuron loss → weakness, fatigue

### Systemic Factors
- Cardiovascular efficiency reduction
- Pulmonary reserve decline
- Deconditioning spiral
- Pain and fear avoidance

## Precision Assessment

### Technology-Enhanced Evaluation
**Wearable Sensors**
- Accelerometry for community mobility
- Fall detection algorithms
- Activity monitoring
- Sleep and circadian assessment

**Instrumented Assessment**
- Force plates for balance quantification
- Instrumented walkways (spatiotemporal parameters)
- 3D motion analysis (kinetics, kinematics)
- EMG for muscle activation patterns

### Biomarkers
**Sarcopenia Biomarkers (Emerging)**
- N-terminal agrin fragment
- Myostatin
- GDF-15
- C-terminal agrin fragment

**Frailty Biomarkers**
- IL-6
- CRP
- IGF-1
- Vitamin D

### Fall Prediction Models
**Validated Tools**
- STEADI (CDC)
- FROP-Com
- STRATIFY
- Downton Index

**Machine Learning Approaches**
- Sensor-derived features
- Electronic health record data
- Combined clinical and sensor models
- Real-time risk assessment

## Advanced Interventions

### Resistance Training Protocols
**High-Intensity Training in Elderly**
- Safe and effective even in frail elderly
- 70-85% 1RM for strength gains
- Progressive overload essential
- 2-3 sets of 8-12 repetitions

**Power Training**
- High-velocity contractions
- May be more functionally relevant
- Address Type II fiber loss
- Requires careful supervision

### Balance Training Evolution
**Perturbation-Based Training**
- Treadmill-based perturbations
- Platform-based training
- Reduces fall rate by 46% (meta-analysis)
- Improves reactive stepping

**Virtual Reality Balance Training**
- Immersive and interactive
- Cognitive-motor integration
- Promising early results
- Motivation and engagement

### Pharmacological Considerations
**Myostatin Inhibitors**
- In development for sarcopenia
- Bimagrumab (trial ongoing)
- Potential for muscle mass increase

**Selective Androgen Receptor Modulators (SARMs)**
- Under investigation
- Anabolic effects without steroid side effects
- Not approved for sarcopenia

**Vitamin D**
- Meta-analysis: Reduces falls if vitamin D deficient
- 800-1000 IU daily recommended
- Check levels in at-risk patients

### Nutritional Interventions
**Protein Optimization**
- 1.0-1.2 g/kg/day (higher than younger adults)
- Even distribution across meals (25-30g per meal)
- Leucine-rich sources
- May combine with exercise for synergy

**HMB (Beta-hydroxy beta-methylbutyrate)**
- Leucine metabolite
- May preserve muscle in bedrest/illness
- Evidence modest but growing

## Implementation Science

### Program Dissemination
**Otago Exercise Program**
- Strong evidence base
- PT-delivered with home program
- Cost-effective
- Can be adapted for different settings

**Matter of Balance**
- Addresses fear of falling
- Group-based (8 sessions)
- Community-scalable
- Reduces fall-related activity restriction

**Stepping On**
- Multifaceted fall prevention
- Community-based
- Occupational therapist-led
- 31% fall reduction

### Healthcare System Integration
**Primary Care**
- Annual wellness visit screening
- Gait speed as vital sign
- Referral pathways to PT/OT
- CDC STEADI toolkit

**Hospital-Based**
- Mobility protocols during admission
- Early ambulation
- PT consult for mobility decline
- Discharge planning for falls risk

**Post-Acute**
- Rehabilitation after hospitalization
- SNF mobility programs
- Home health PT
- Transitional care coordination

### Quality Metrics
- Fall screening rates
- Time to PT evaluation
- Gait speed documentation
- Fall rates (inpatient, community)
- Mobility-related readmissions

## Research Frontiers

### Exercise Molecular Mechanisms
- Myokine signaling (IL-6, BDNF)
- Mitochondrial biogenesis
- Satellite cell activation
- Epigenetic modifications

### Cognitive-Motor Interactions
- Dual-task interventions
- Exergaming
- Dance-based programs
- Music-enhanced exercise

### Precision Medicine Approaches
- Genetic determinants of response
- Biomarker-guided interventions
- Personalized exercise prescription
- Risk phenotyping`,
      keyTerms: [
        { term: 'EWGSOP2', definition: 'European Working Group on Sarcopenia in Older People, updated 2019 consensus' },
        { term: 'myostatin', definition: 'Protein that inhibits muscle growth, potential therapeutic target' },
        { term: 'perturbation-based training', definition: 'Balance training using unexpected disturbances to improve reactive responses' },
        { term: 'HMB', definition: 'Beta-hydroxy beta-methylbutyrate, a leucine metabolite that may preserve muscle' },
        { term: 'STEADI', definition: 'Stopping Elderly Accidents, Deaths, and Injuries - CDC fall prevention initiative' },
      ],
      clinicalNotes: `Key clinical implementation points:
1. Measure gait speed at every geriatric encounter (simple, powerful predictor)
2. High-intensity resistance training is safe and effective even in frail elderly
3. Multicomponent programs work better than single interventions
4. Address fear of falling - activity restriction accelerates decline
5. Perturbation training shows strongest fall prevention evidence
6. Consider dual-task training for those with cognitive-motor interactions
7. Hospital mobility protocols prevent deconditioning and iatrogenic disability`,
    },
  },

  media: [
    {
      id: 'mobility-assessment-flowchart',
      type: 'diagram',
      filename: 'mobility-assessment-algorithm.svg',
      title: 'Mobility Assessment and Intervention Algorithm',
      description: 'Clinical decision pathway for evaluating and treating mobility problems',
    },
  ],

  citations: [
    {
      id: 'cruz-jentoft-2019',
      type: 'article',
      title: 'Sarcopenia: revised European consensus on definition and diagnosis',
      authors: ['Cruz-Jentoft, A.J.', 'Bahat, G.', 'Bauer, J.', 'et al.'],
      source: 'Age and Ageing',
      url: 'https://doi.org/10.1093/ageing/afz046',
    },
    {
      id: 'sherrington-2019',
      type: 'article',
      title: 'Exercise for preventing falls in older people living in the community',
      authors: ['Sherrington, C.', 'Fairhall, N.J.', 'Wallbank, G.K.', 'et al.'],
      source: 'Cochrane Database of Systematic Reviews',
      url: 'https://doi.org/10.1002/14651858.CD012424.pub2',
    },
  ],

  crossReferences: [
    { targetId: 'geriatric-falls-prevention', targetType: 'concept', relationship: 'related', label: 'Falls Prevention' },
    { targetId: 'geriatric-sarcopenia', targetType: 'concept', relationship: 'related', label: 'Sarcopenia Prevention' },
    { targetId: 'geriatric-exercise-options', targetType: 'concept', relationship: 'related', label: 'Safe Exercise Options' },
  ],

  tags: {
    systems: ['musculoskeletal', 'nervous', 'geriatrics'],
    topics: ['mobility', 'gait', 'balance', 'sarcopenia', 'fall prevention'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default mobilityChanges;
