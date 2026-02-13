/**
 * Overuse Injuries in Sports - Educational Content
 *
 * Covers prevention and management of injuries from repetitive stress
 * including stress fractures, tendinopathy, and chronic strains.
 */

import { EducationalContent } from '../../types';

export const overuseInjuriesContent: EducationalContent = {
  id: 'sports-med-overuse-injuries',
  type: 'condition',
  name: 'Overuse Injuries in Sports',
  alternateNames: ['Repetitive Strain Injury', 'Overuse Syndrome', 'Cumulative Trauma Disorder'],

  levels: {
    1: {
      level: 1,
      summary: 'Overuse injuries develop gradually from repetitive stress rather than a single traumatic event.',
      explanation: `## Understanding Overuse Injuries

Unlike acute injuries that happen suddenly, overuse injuries develop over time from:
- Repeating the same motion over and over
- Not giving your body enough time to recover
- Doing too much too soon
- Poor technique or equipment

**Common Overuse Injuries:**

*Bone Injuries:*
- Stress fractures: Small cracks in bone from repeated impact

*Tendon Injuries:*
- Tendinopathy: Tendon pain and damage
- Tennis elbow, golfer's elbow, Achilles tendon problems

*Muscle Injuries:*
- Chronic muscle strains
- Shin splints

**Warning Signs:**
- Pain that doesn't go away after warm-up
- Pain that gets worse during activity
- Pain that continues after activity
- Swelling that doesn't go away
- Decreased performance

**Prevention Basics:**
1. Don't do too much too soon - Gradual increases only
2. Take rest days - Recovery is essential
3. Vary your activities - Cross-training helps
4. Use proper equipment - Shoes, racquets, etc.
5. Learn good technique - Coaching matters
6. Listen to your body - Pain is a warning sign`,
      keyTerms: [
        { term: 'overuse injury', definition: 'Damage from repetitive stress without single traumatic event' },
        { term: 'stress fracture', definition: 'Small crack in bone from repeated impact or overuse' },
        { term: 'cross-training', definition: 'Mixing different types of exercise to prevent overuse injuries' },
      ],
      analogies: [
        'Overuse injuries are like bending a paperclip back and forth - eventually it breaks.',
      ],
      examples: [
        'A runner develops shin pain from increasing mileage too quickly.',
        'A tennis player gets elbow pain from playing too much without rest.',
      ],
    },
    2: {
      level: 2,
      summary: 'Overuse injuries affect bone, tendon, and muscle through repetitive loading exceeding tissue recovery capacity, with prevention relying on gradual progression and the 10% rule.',
      explanation: `## Overuse Injury Categories

**Bone Stress Injuries:**
- Stress reaction: Early bone stress before fracture
- Stress fracture: Actual crack in bone
- Higher risk in certain bones (femoral neck, anterior tibia)

**Tendon Overuse:**
- Tendinopathy: Degenerative changes
- Common: Achilles, patellar, rotator cuff
- May progress to partial tear

**Muscle Overuse:**
- Chronic strain syndromes
- Compartment syndrome (exertional)
- Common: hamstrings, gastrocnemius

**Other Common Conditions:**
- Shin splints (medial tibial stress syndrome)
- Bursitis (inflamed fluid-filled sacs)
- Apophysitis (growth plate irritation in adolescents)

## Risk Factors

**Training Risk Factors:**
- Sudden increase in training volume
- Increasing intensity too quickly
- Too much hard surface training
- Inadequate recovery time
- Year-round single-sport participation

**Individual Risk Factors:**
- Previous overuse injury (strongest predictor)
- Low bone density
- Muscle imbalances
- Leg length discrepancy
- Poor flexibility

## The 10% Rule

**Guideline for Safe Progression:**
- Increase training no more than 10% per week
- Applies to distance, time, or intensity
- Prevents most overuse problems
- Allows adaptation to new stresses`,
      keyTerms: [
        { term: 'apophysitis', definition: 'Irritation of growth plate from repetitive traction in adolescents' },
        { term: 'bursitis', definition: 'Inflammation of bursa (fluid-filled sac) that reduces friction' },
        { term: 'acute:chronic ratio', definition: 'Recent training load compared to long-term average' },
      ],
      analogies: [
        'The 10% rule is like climbing stairs - one step at a time.',
      ],
    },
    3: {
      level: 3,
      summary: 'Overuse injury management involves relative rest rather than complete rest, progressive loading rehabilitation, and addressing contributing biomechanical and training factors.',
      explanation: `## General Treatment Principles

**Initial Management:**
- Activity modification (not necessarily complete rest)
- Identify and address causative factors
- Symptom monitoring during activities
- Maintain fitness with alternative activities

**Relative Rest Concept:**
- Complete rest rarely necessary
- Reduce intensity/duration to symptom-free level
- Cross-training to maintain fitness
- Progressive return when symptom-free

## Specific Treatment Approaches

**Stress Fractures:**
- Low-risk locations: Usually conservative (6-12 weeks)
- High-risk locations: May require surgical fixation
- Immobilization (boot, brace) as indicated

**Tendinopathy:**
- Heavy slow resistance training
- Eccentric exercise programs
- Load management
- Activity modification

**Medial Tibial Stress Syndrome (Shin Splints):**
- Activity modification
- Address contributing factors (shoes, surfaces)
- Calf and anterior tibial strengthening
- Gradual return to running

**Apophysitis (Adolescents):**
- Activity modification
- Stretching and strengthening
- Usually self-limiting
- Resolves with growth plate closure

## Rehabilitation Phases

**Phase 1: Symptom Reduction**
- Reduce aggravating activities
- Cross-training for fitness
- Address causes

**Phase 2: Progressive Loading**
- Gradual increase in loading
- Strengthening of affected area
- Address muscle imbalances

**Phase 3: Functional Return**
- Sport-specific activities
- Monitor for symptom return

**Phase 4: Prevention**
- Maintenance exercises
- Training periodization
- Workload monitoring`,
      keyTerms: [
        { term: 'relative rest', definition: 'Reducing or modifying activity rather than complete cessation' },
        { term: 'eccentric exercise', definition: 'Muscle lengthening while contracting; key in tendon rehab' },
        { term: 'myofascial release', definition: 'Manual therapy technique to release muscle tension' },
      ],
      clinicalNotes: 'Relative rest rather than complete rest is preferred for most overuse injuries. Low-risk stress fractures usually heal with conservative management. Equipment evaluation is essential.',
    },
    4: {
      level: 4,
      summary: 'Overuse injury pathophysiology involves failed healing response with tissue degeneration requiring training load management, biomechanical optimization, and nutritional considerations.',
      explanation: `## Bone Stress Injuries

**Stress Injury Continuum:**
1. Normal bone remodeling
2. Stress reaction: Increased bone turnover, no crack
3. Stress fracture: Disruption of cortical bone
4. Complete fracture: Full cortical disruption

**MRI Grading (Fredericson for Tibia):**
- Grade I: Periosteal edema only
- Grade II: Bone marrow edema
- Grade III: Severe marrow edema
- Grade IV: Fracture line visible

## Tendinopathy Pathology

**Histological Changes:**
- Collagen disorganization
- Neovascularization (new blood vessels)
- Nerve ingrowth (pain source)
- Mucoid degeneration
- Lack of inflammatory cells (typically)

**Failed Healing Theory:**
- Repeated microtrauma
- Inadequate healing response
- Accumulated damage
- Tendon becomes weak and painful

## Modifiable Risk Factors

**Training Load Management:**
- Acute:chronic workload ratio
- Training monotony (lack of variation)
- Inadequate recovery
- Periodization principles

**Biomechanical Factors:**
- Kinetic chain abnormalities
- Muscle imbalances
- Movement pattern faults
- Poor technique

**Nutritional Factors:**
- Relative energy deficiency in sport (RED-S)
- Inadequate calcium and vitamin D
- Poor protein intake`,
      keyTerms: [
        { term: 'mechanotransduction', definition: 'Cellular response to mechanical signals; critical for tissue adaptation' },
        { term: 'osteoclast', definition: 'Cell that breaks down bone tissue' },
        { term: 'osteoblast', definition: 'Cell that forms new bone tissue' },
        { term: 'RED-S', definition: 'Relative Energy Deficiency in Sport; low energy availability affecting health' },
      ],
      clinicalNotes: 'Training load management is critical for prevention. Imaging often lags clinical improvement. Special populations (adolescents, females, masters athletes) require specific considerations.',
    },
    5: {
      level: 5,
      summary: 'Contemporary overuse injury management emphasizes primary prevention through workload monitoring, biomechanical optimization, and individualized return-to-sport protocols based on predictive analytics.',
      explanation: `## Primary Prevention Strategies

**Training Load Optimization:**
- Gradual progression (10% rule guideline)
- Periodization: Plan hard/easy cycles
- Variety in training to reduce repetitive stress
- Recovery weeks integrated into training

**Biomechanical Optimization:**
- Movement screening for at-risk patterns
- Early technique instruction
- Video analysis for form
- Neuromuscular training

**Secondary Prevention:**
- Early recognition of warning signs
- Regular symptom monitoring
- Pre-participation screening
- Workload monitoring tools

## Systemic Approaches

**Athlete Development:**
- Avoid early specialization
- Multi-sport participation encouraged
- Age-appropriate training loads
- Long-term athlete development model

## Risk Prediction Models

**Multifactorial Risk Assessment:**
- Previous injury history (strongest predictor)
- Current biomechanical assessment
- Training load analysis
- Nutritional status
- Psychosocial factors

**Monitoring Technologies:**
- Wearable workload tracking
- GPS and accelerometers
- Heart rate variability
- Subjective wellness measures

## Controversies in Management

**Relative Rest vs. Active Recovery:**
- Historical complete rest outdated
- Subsymptom exercise beneficial
- Maintain fitness while injured
- Loading within pain tolerance

**Imaging and Return Decisions:**
- Imaging often lags clinical improvement
- Don't treat the image, treat the patient
- Clinical improvement guides return more than imaging

**Injections:**
- Corticosteroids: Limited role, potential harm
- PRP: Mixed evidence, not first-line
- Focus on active rehabilitation instead`,
      keyTerms: [
        { term: 'periodization', definition: 'Systematic planning of athletic training with progressive cycles' },
        { term: 'kinetic chain', definition: 'Interrelated body segments that work together for movement' },
        { term: 'neuromuscular', definition: 'Pertaining to interaction between nervous system and muscles' },
      ],
      clinicalNotes: 'Multi-sport participation and delayed specialization reduce overuse injury risk. Relative rest with active rehabilitation is preferred over complete rest. Future directions include predictive analytics and individualized prevention programs.',
    },
  },

  media: [
    {
      id: 'overuse-injury-spectrum',
      type: 'diagram',
      filename: 'overuse-injury-spectrum.svg',
      title: 'Overuse Injury Types',
      description: 'Spectrum of overuse injuries by tissue type',
    },
  ],

  citations: [
    {
      id: 'overuse-injury-guidelines',
      type: 'article',
      title: 'Overuse Injuries in Sports',
      source: 'American Journal of Sports Medicine',
    },
    {
      id: 'workload-monitoring',
      type: 'article',
      title: 'Workload Monitoring in Athletes',
      source: 'British Journal of Sports Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'sports-med-stress-fractures', targetType: 'topic', relationship: 'related', label: 'Stress Fractures' },
    { targetId: 'sports-med-tendinopathy', targetType: 'topic', relationship: 'related', label: 'Tendinopathy' },
    { targetId: 'sports-med-return-to-play-principles', targetType: 'concept', relationship: 'related', label: 'Return to Play' },
  ],

  tags: {
    systems: ['musculoskeletal'],
    topics: ['overuse-injury', 'stress-fracture', 'tendinopathy', 'sports-medicine'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'sports-medicine', 'family-medicine'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default overuseInjuriesContent;
