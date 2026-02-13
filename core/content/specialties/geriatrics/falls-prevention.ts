/**
 * Falls Prevention - Comprehensive Educational Content
 *
 * Covers fall risk assessment, prevention strategies, post-fall evaluation,
 * and multifactorial intervention approaches in older adults.
 */

import { EducationalContent } from '../../types';

export const fallsPrevention: EducationalContent = {
  id: 'concept-falls-prevention',
  type: 'concept',
  name: 'Falls Prevention',
  alternateNames: ['Fall Risk Management', 'Fall Prevention in Elderly', 'Geriatric Falls'],

  levels: {
    1: {
      level: 1,
      summary: 'Falls are very common in older adults and can cause serious injuries, but many falls can be prevented with simple changes.',
      explanation: `Falls are one of the biggest health risks for older adults. Every year, about 1 in 4 adults over 65 falls, and falls are the leading cause of injuries in this age group.

**Why Do Older Adults Fall More Often?**

Think of balance like a three-legged stool. To stay upright, you need:
1. **Good vision** - to see where you're going
2. **Strong muscles** - to keep you steady
3. **Good balance signals** - from your inner ear and feet

As we age, all three of these can weaken, making falls more likely.

**What Makes Falls More Likely?**

**Body Changes:**
- Weaker muscles
- Stiffer joints
- Slower reflexes
- Vision problems
- Dizziness

**Medicines:**
- Some medicines cause dizziness
- Sleeping pills and anxiety medicines
- Blood pressure medicines
- Taking many medicines at once

**Home Hazards:**
- Loose rugs
- Poor lighting
- Clutter on floors
- No grab bars in bathroom
- Stairs without handrails

**What Happens After a Fall?**

Falls can cause:
- Bruises and scrapes
- Broken bones (especially hip, wrist, spine)
- Head injuries
- Fear of falling (which can limit activity)
- Loss of independence

**How Can Falls Be Prevented?**

**Exercise:**
- Walking regularly
- Strength training
- Balance exercises (like Tai Chi)
- Even standing on one foot while brushing teeth!

**Home Safety:**
- Remove loose rugs or tape them down
- Add grab bars in bathroom
- Improve lighting, especially at night
- Keep pathways clear
- Use non-slip mats in bathtub

**Health Steps:**
- Get eyes checked every year
- Have hearing checked
- Review medicines with doctor
- Treat dizziness or lightheadedness
- Wear proper footwear (not slippers!)

**If You Fall:**
1. Don't panic
2. Check for injuries before moving
3. If you can't get up, scoot to furniture or phone
4. Tell your doctor about every fall, even if not hurt`,
      keyTerms: [
        { term: 'fall', definition: 'Accidentally going to the ground or a lower level' },
        { term: 'balance', definition: 'The ability to stay steady and upright' },
        { term: 'grab bars', definition: 'Metal bars attached to walls to hold onto, especially in bathrooms' },
        { term: 'hip fracture', definition: 'A broken bone in the hip area, a serious injury common in falls' },
      ],
      analogies: [
        'Balance is like a three-legged stool - if any leg is weak, the stool tips over.',
        'Your muscles are like the brakes on a bicycle - if they are weak, you can not stop yourself from falling.',
        'Falls prevention is like car maintenance - regular check-ups and fixes prevent bigger problems later.',
      ],
      examples: [
        'A grandmother who started doing balance exercises and reduced her falls from several per year to almost none.',
        'A family that installed nightlights and grab bars in their father\'s house after he had a fall.',
        'An older man who stopped taking a sleeping pill and found his dizziness went away.',
      ],
    },
    2: {
      level: 2,
      summary: 'Falls in older adults result from interactions between intrinsic factors (age-related changes, medical conditions) and extrinsic factors (medications, environment), requiring multifactorial assessment and intervention.',
      explanation: `## The Scope of the Problem

### Statistics
- 30% of adults ≥65 fall each year
- 50% of adults ≥80 fall each year
- Falls are #1 cause of injury and injury death in 65+
- 3 million ED visits annually for fall injuries
- 800,000 hospitalizations for fall injuries (most for hip fracture or head trauma)
- Total cost: >$50 billion annually

### Consequences of Falls
- **Physical**: Fractures (hip, wrist, pelvis, spine), head injuries, soft tissue injuries
- **Psychological**: Fear of falling, anxiety, depression, loss of confidence
- **Social**: Activity restriction, social isolation, loss of independence
- **Economic**: Healthcare costs, long-term care placement

## Risk Factors

### Intrinsic Factors (Within the Person)

**Age-Related Changes:**
- Decreased muscle strength and mass
- Reduced vision and depth perception
- Impaired proprioception (position sense)
- Slower reaction time
- Vestibular dysfunction

**Medical Conditions:**
| Category | Examples |
|----------|----------|
| Neurological | Stroke, Parkinson's, peripheral neuropathy, dementia |
| Cardiovascular | Orthostatic hypotension, arrhythmias, syncope |
| Musculoskeletal | Arthritis, foot problems, muscle weakness |
| Sensory | Cataracts, glaucoma, macular degeneration, hearing loss |
| Psychiatric | Depression, anxiety, cognitive impairment |

**High-Risk Medications:**
- Sedatives/hypnotics (benzodiazepines, "Z-drugs")
- Antidepressants (especially SSRIs, TCAs)
- Antipsychotics
- Opioids
- Antihypertensives (especially vasodilators)
- Anticholinergics
- Diuretics
- Taking ≥4 medications (polypharmacy)

### Extrinsic Factors (Environmental)

**Home Hazards:**
- Poor lighting
- Loose rugs/carpets
- Clutter/obstacles
- Lack of grab bars
- Slippery surfaces
- Steep stairs
- Low furniture

**Footwear:**
- Loose slippers
- High heels
- Worn-out shoes
- Walking barefoot or in socks

## Assessment

### Screening Questions (CDC STEADI)
1. Have you fallen in the past year?
2. Do you feel unsteady when standing or walking?
3. Do you worry about falling?

Any "yes" → Full fall risk assessment

### Clinical Assessment Components

**1. History:**
- Fall details (circumstances, location, time)
- Symptoms before fall (dizziness, lightheadedness, palpitations)
- Medications
- Previous falls
- Fear of falling

**2. Physical Examination:**
- Vision screening
- Orthostatic vital signs
- Cardiovascular exam
- Neurological exam (strength, sensation, coordination)
- Musculoskeletal exam (joints, feet)
- Gait and balance assessment

**3. Functional Tests:**
| Test | Description | Abnormal Result |
|------|-------------|-----------------|
| Timed Up and Go (TUG) | Rise from chair, walk 3m, return, sit | >12 seconds |
| 30-Second Chair Stand | Stand from chair as many times as possible | <8 stands |
| 4-Stage Balance Test | Feet together, semi-tandem, tandem, one leg | Cannot hold 10 sec |

### Post-Fall Evaluation

For falls with injury or unexplained falls:
- ECG (arrhythmia)
- Labs (anemia, electrolytes, glucose)
- CT head (if head injury or anticoagulated)
- Bone density testing (if fracture)

## Interventions

### Evidence-Based Prevention

**Exercise (Strongest Evidence):**
- Reduces falls by 23-30%
- Must include balance training
- Tai Chi particularly effective
- Strength training important
- At least 3 hours/week for benefit

**Medication Review:**
- Reduce psychotropic medications
- Avoid polypharmacy
- Review fall-risk medications

**Home Safety:**
- Home hazard assessment and modification
- Professional OT assessment ideal
- Focus on bathroom and stairs

**Vision Correction:**
- Annual eye exams
- Cataract surgery when indicated
- Avoid multifocal lenses for walking

**Vitamin D:**
- Supplement if deficient
- Dose: 800-1000 IU daily
- Role in fall prevention debated`,
      keyTerms: [
        { term: 'Timed Up and Go', definition: 'A test measuring time to rise from a chair, walk 3 meters, return, and sit; >12 seconds suggests fall risk' },
        { term: 'orthostatic hypotension', definition: 'A drop in blood pressure when standing that can cause dizziness and falls', pronunciation: 'or-tho-STAT-ik hy-po-TEN-shun' },
        { term: 'proprioception', definition: 'The body\'s sense of its position in space', pronunciation: 'pro-pree-oh-SEP-shun' },
        { term: 'intrinsic factors', definition: 'Fall risk factors within the person, such as medical conditions and age-related changes' },
        { term: 'extrinsic factors', definition: 'Environmental fall risk factors, such as home hazards and footwear' },
        { term: 'STEADI', definition: 'Stopping Elderly Accidents, Deaths & Injuries; CDC fall prevention initiative' },
      ],
      analogies: [
        'Fall risk is like a scale - the more risk factors on one side, the more likely the scale tips toward a fall.',
        'Balance training is like practicing catching a ball - the more you practice, the better your reflexes become.',
      ],
    },
    3: {
      level: 3,
      summary: 'Comprehensive fall prevention requires systematic risk stratification, multifactorial assessment including gait analysis and vestibular testing, and evidence-based multicomponent interventions tailored to individual risk profiles.',
      explanation: `## Pathophysiology of Falls

### Balance Control System

**Three Sensory Systems:**
1. **Visual system**: Orientation to environment
2. **Vestibular system**: Head position and acceleration
3. **Somatosensory/proprioceptive**: Joint position, pressure on feet

**Central Processing:**
- Brainstem (vestibular nuclei)
- Cerebellum (coordination)
- Basal ganglia (postural responses)
- Cortex (voluntary movement)

**Motor Output:**
- Automatic postural responses
- Voluntary corrective movements
- Anticipatory postural adjustments

### Age-Related Changes

| System | Change | Clinical Effect |
|--------|--------|-----------------|
| Visual | ↓ contrast sensitivity, ↓ depth perception | Miss hazards, misjudge distances |
| Vestibular | ↓ hair cells, ↓ VOR gain | Impaired gaze stability, vertigo |
| Proprioceptive | ↓ joint receptors, ↓ vibration sense | Poor position sense, especially dark |
| Motor | ↓ muscle mass, ↓ power, ↑ reaction time | Weak/slow corrective responses |
| Central | ↓ processing speed, white matter changes | Impaired multitasking (dual-task gait) |

### Gait Changes with Aging

**Normal Age-Related Changes:**
- Decreased gait speed (0.01 m/s per year after 60)
- Shorter stride length
- Wider base of support
- Increased double stance time
- Decreased arm swing

**Pathological Gait Patterns:**
| Pattern | Characteristics | Associated Conditions |
|---------|-----------------|----------------------|
| Antalgic | Shortened stance on painful side | Arthritis, hip pathology |
| Parkinsonian | Shuffling, festination, en bloc turning | Parkinson's, vascular parkinsonism |
| Ataxic | Wide-based, irregular steps | Cerebellar, sensory ataxia |
| Spastic | Circumduction, toe drag | Stroke, cervical myelopathy |
| Frontal/Apraxic | Hesitation, magnetic gait | NPH, frontal lobe disease |

## Advanced Assessment

### Comprehensive Fall Risk Assessment

**History Elements:**
- Circumstances of each fall (activity, location, time, symptoms)
- Postural symptoms (dizziness, lightheadedness, syncope)
- Cognitive symptoms (confusion)
- Cardiovascular symptoms (palpitations, chest pain)
- Detailed medication history
- Alcohol use
- Fear of falling (FES-I score)
- Activity level

**Physical Examination:**

*Cardiovascular:*
- Orthostatic vital signs (supine → standing at 1 and 3 min)
- Orthostatic hypotension: ↓SBP ≥20 or ↓DBP ≥10 mmHg
- Carotid sinus massage (if unexplained falls, with monitoring)
- Heart rate and rhythm

*Neurological:*
- Mental status (cognitive impairment ↑ fall risk 2-3x)
- Cranial nerves (esp. vision, vestibular)
- Motor strength (hip flexors, knee extensors critical)
- Sensation (vibration, proprioception)
- Coordination (finger-nose, heel-shin)
- Romberg test

*Musculoskeletal:*
- Range of motion (hips, knees, ankles)
- Foot examination (bunions, calluses, nail problems)
- Footwear assessment

### Quantitative Gait and Balance Assessment

**Performance Tests:**

| Test | Methodology | Cut-Point | Evidence |
|------|-------------|-----------|----------|
| TUG | Chair rise → walk 3m → return → sit | >12 sec | Sensitivity 87% |
| TUG-cognitive | TUG + counting backward | >15 sec | Dual-task impairment |
| SPPB | Balance + gait speed + chair stands | ≤9/12 | Strong predictor |
| Berg Balance Scale | 14 items, 0-56 | <45 | Fall risk; <36 high risk |
| Gait speed | Usual pace over 4m | <0.8 m/s | Frailty, mortality |
| Mini-BESTest | 14 items, balance systems | ≤20/28 | Multiple balance domains |

**Instrumented Assessment:**
- Pressure-sensing walkways (gait variability)
- Wearable sensors (accelerometers)
- Force plates (center of pressure)
- Motion capture (joint kinematics)

### Vestibular Assessment

**Clinical Tests:**
- Head impulse test (VOR assessment)
- Dix-Hallpike maneuver (BPPV)
- Dynamic visual acuity

**Referral for Vestibulography if:**
- Recurrent unexplained falls
- Vertigo history
- Abnormal clinical vestibular exam

## Multicomponent Interventions

### Exercise Programs

**Evidence from Cochrane Reviews:**
- Exercise reduces falls by 23% (rate ratio 0.77)
- Must include balance challenge
- Higher dose = greater effect (>3 hrs/week)
- Home-based can be effective

**Program Components:**
| Component | Examples | Frequency |
|-----------|----------|-----------|
| Balance | Tai Chi, standing on one foot, tandem stance | 3x/week |
| Strength | Squats, heel raises, hip abduction | 2-3x/week |
| Flexibility | Stretching, yoga | Daily |
| Endurance | Walking, swimming | 5x/week |

**Evidence-Based Programs:**
- Otago Exercise Program: 35% fall reduction
- Tai Chi: 19-40% fall reduction
- Matter of Balance: Addresses fear of falling

### Medication Optimization

**Systematic Review Approach:**
1. List all medications
2. Identify fall-risk-increasing drugs (FRIDs)
3. Assess necessity of each
4. Deprescribe or reduce dose where possible
5. Monitor effects

**FRIDs Categories (STOPP):**
- Benzodiazepines and Z-drugs
- Antipsychotics
- Opioids
- First-generation antihistamines
- Vasodilators for hypertension
- Loop diuretics without indication
- Alpha-1 blockers

### Home Safety Modifications

**Evidence:**
- OT-delivered home assessment: 19% fall reduction
- Most effective in high-risk individuals
- Must include equipment provision and follow-up

**Key Modifications:**
| Area | Modifications |
|------|---------------|
| Bathroom | Grab bars, raised toilet, non-slip mats, walk-in shower |
| Bedroom | Bedside light, clear path to bathroom |
| Stairs | Handrails both sides, non-slip strips, contrast edges |
| Living areas | Remove rugs, reduce clutter, adequate lighting |
| Kitchen | Non-slip flooring, accessible storage |`,
      keyTerms: [
        { term: 'SPPB', definition: 'Short Physical Performance Battery; includes balance, gait speed, and chair stands; predicts falls and mortality' },
        { term: 'FRIDs', definition: 'Fall-Risk-Increasing Drugs; medications associated with increased fall risk' },
        { term: 'VOR', definition: 'Vestibulo-Ocular Reflex; maintains stable vision during head movement' },
        { term: 'Otago Exercise Program', definition: 'Evidence-based fall prevention program; individualized strength and balance exercises' },
        { term: 'dual-task gait', definition: 'Walking while performing a cognitive task; impairment predicts falls' },
        { term: 'postural sway', definition: 'Body movement while trying to stand still; increased sway indicates fall risk' },
      ],
      clinicalNotes: 'The TUG is quick and predictive - include it in every geriatric assessment. Orthostatic vitals require proper technique: patient supine 5 min, then standing measurements at 1 and 3 minutes. Many clinicians miss delayed orthostatic hypotension. Exercise prescription must be specific - just saying "exercise more" is insufficient.',
    },
    4: {
      level: 4,
      summary: 'Advanced fall prevention integrates precision risk stratification, vestibular rehabilitation, pharmacological interventions for orthostatic hypotension, and health system approaches to reduce fall-related morbidity and mortality.',
      explanation: `## Precision Fall Risk Assessment

### Risk Stratification Tools

**Validated Prediction Models:**
| Tool | Population | Components | Performance |
|------|------------|------------|-------------|
| FRAT | Community | 5 items, 0-5 | AUC 0.65-0.75 |
| STRATIFY | Hospital | 5 items, 0-5 | Sensitivity 93% |
| Hendrich II | Hospital | 8 items | AUC 0.73 |
| PROFET | ED after fall | Comprehensive | Targeted intervention |

**Novel Risk Markers:**
- Gait variability (step-to-step variability predicts falls)
- Dual-task cost (performance decrement under cognitive load)
- Quiet standing postural sway
- Composite measures (physiological profile assessment)

### Wearable Technology for Fall Detection and Prediction

**Current Capabilities:**
- Fall detection (accelerometer-based)
- Activity monitoring
- Gait parameter tracking
- Pre-fall signature detection (emerging)

**Clinical Applications:**
- Real-time fall alerts
- Longitudinal gait monitoring
- Response to intervention tracking
- Research on fall mechanisms

## Orthostatic Hypotension Management

### Diagnosis and Classification

**Diagnostic Criteria:**
- Classic OH: ↓SBP ≥20 or ↓DBP ≥10 within 3 minutes of standing
- Initial OH: Transient ↓SBP >40 within 15 seconds
- Delayed OH: ↓BP after 3 minutes (requires tilt table)

**Etiology:**
| Category | Examples |
|----------|----------|
| Neurogenic | Parkinson's, MSA, pure autonomic failure, diabetic neuropathy |
| Non-neurogenic | Dehydration, medications, adrenal insufficiency |
| Age-related | Reduced baroreceptor sensitivity, venous compliance |

### Stepwise Management

**Step 1: Non-Pharmacological**
- Discontinue/reduce offending medications
- Increase salt intake (10-12 g/day if tolerated)
- Increase fluid intake (2-3 L/day)
- Compression stockings (30-40 mmHg, waist-high)
- Abdominal binders
- Physical counter-maneuvers (leg crossing, squatting)
- Avoid triggers (large meals, alcohol, heat)
- Elevate head of bed 10-20 degrees (reduce nocturnal natriuresis)

**Step 2: Pharmacological (if non-pharm insufficient)**

| Agent | Mechanism | Dose | Considerations |
|-------|-----------|------|----------------|
| Midodrine | α-1 agonist | 2.5-10 mg TID | Supine HTN; avoid within 4h of bedtime |
| Droxidopa | NE prodrug | 100-600 mg TID | FDA approved for neurogenic OH |
| Fludrocortisone | Mineralocorticoid | 0.1-0.3 mg daily | Volume expansion; monitor for HF, hypokalemia |
| Pyridostigmine | Cholinesterase inhibitor | 30-60 mg TID | Ganglionic enhancement; fewer supine HTN |
| Atomoxetine | NE reuptake inhibitor | 10-18 mg BID | Alternative agent |

**Monitoring:**
- Supine and standing BP
- Symptoms
- Supine hypertension (common side effect)
- Electrolytes, weight (fludrocortisone)

## Post-Fall Syndrome and Fear of Falling

### Fear of Falling (FOF)

**Prevalence:**
- 30-50% of fallers
- 20-30% of non-fallers
- Higher in women, those with depression, prior falls

**Consequences:**
- Activity restriction → physical decline → more falls
- Social isolation
- Depression
- Institutionalization

**Assessment:**
- Falls Efficacy Scale-International (FES-I)
- Activities-specific Balance Confidence (ABC) scale

### Interventions for FOF

**Cognitive-Behavioral:**
- A Matter of Balance program (8 sessions)
- Targets catastrophic cognitions about falls
- Education + exercise + activity restructuring
- 29% reduction in FOF

**Exercise-Based:**
- Tai Chi reduces FOF
- Progressive challenge builds confidence
- Group classes provide social support

**Combined Approaches:**
- CBT + exercise superior to either alone

## Health System Interventions

### Hospital-Based Fall Prevention

**AHRQ Toolkit Components:**
1. Fall risk assessment on admission
2. Individualized care plan
3. Post-fall huddle
4. Environmental modifications
5. Education for staff, patients, families
6. Leadership support

**Effective Interventions:**
- Bed alarms (limited evidence; may reduce injury severity)
- Low beds
- Hip protectors (for high-risk)
- Exercise programs
- Medication review
- Toileting schedules

**Avoiding Unintended Consequences:**
- Physical restraints: Increase injury, do not prevent falls
- Bed alarms: May increase anxiety, disrupt sleep
- Excessive restrictions: Functional decline

### Post-Acute Care Transition

**High-Risk Period:**
- 30 days post-hospitalization
- 50% of falls occur within 30 days of discharge
- New medications, deconditioning, new environment

**Transition Interventions:**
- Comprehensive discharge planning
- Home safety assessment before discharge
- Early physical therapy
- Medication reconciliation
- Caregiver education
- Follow-up within 72 hours

### Population Health Approaches

**Community Programs:**
- Stepping On: Group-based, 7 sessions (31% fall reduction)
- Tai Chi: Moving for Better Balance
- Matter of Balance: Fear of falling intervention
- CAPABLE: Home-based OT/nursing/handyman

**Implementation Science:**
- Reach, Effectiveness, Adoption, Implementation, Maintenance (RE-AIM)
- Barriers: Cost, transportation, awareness
- Facilitators: Healthcare referral, insurance coverage

## Special Populations

### Falls in Dementia

**Unique Considerations:**
- 2-3x higher fall rate
- Higher injury rate
- Limited ability to report symptoms
- Behavioral issues affect interventions

**Modified Approaches:**
- Simplified exercise programs
- Caregiver involvement essential
- Environmental modification emphasis
- Medication review critical
- Avoid restraints

### Falls in Parkinson's Disease

**Specific Risk Factors:**
- Freezing of gait
- Postural instability
- Medication-related fluctuations
- Orthostatic hypotension

**Targeted Interventions:**
- Cueing strategies (visual, auditory)
- Dual-task training
- Boxing-based exercise
- Optimize dopaminergic therapy
- Manage orthostatic hypotension`,
      keyTerms: [
        { term: 'neurogenic orthostatic hypotension', definition: 'OH caused by autonomic nervous system dysfunction; seen in Parkinson\'s, MSA, diabetic neuropathy' },
        { term: 'droxidopa', definition: 'Norepinephrine prodrug FDA-approved for neurogenic OH; converts to NE peripherally' },
        { term: 'Falls Efficacy Scale', definition: 'Validated questionnaire assessing fear of falling and activity avoidance' },
        { term: 'post-fall syndrome', definition: 'Complex of fear of falling, activity restriction, and functional decline after a fall' },
        { term: 'dual-task cost', definition: 'Degree of performance decrement when walking while doing a cognitive task' },
        { term: 'CAPABLE', definition: 'Community Aging in Place - Advancing Better Living for Elders; home-based intervention program' },
      ],
      clinicalNotes: 'Always measure standing BP at 1 AND 3 minutes - delayed OH is common and missed. Midodrine must be dosed with last dose 4+ hours before bedtime to avoid supine hypertension. Fear of falling is a treatable condition - don\'t ignore it. A Matter of Balance is Medicare-covered.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art fall prevention integrates precision medicine approaches, advanced diagnostics including wearable sensors and machine learning algorithms, comprehensive vestibular rehabilitation, and systems-level interventions targeting the multiple determinants of falls.',
      explanation: `## Precision Fall Prevention

### Phenotyping Fall Risk

**Beyond Global Risk:**
Traditional approaches treat all "fallers" similarly. Precision approach identifies:
- Specific impairment patterns
- Dominant contributing factors
- Targeted intervention matching

**Phenotyping Framework:**
| Phenotype | Key Features | Targeted Intervention |
|-----------|--------------|----------------------|
| Vestibular | Dizziness, vertigo, abnormal VOR | Vestibular rehabilitation |
| Sensory | Neuropathy, proprioceptive loss | Balance training, footwear |
| Orthostatic | Syncope, postural symptoms | OH management, hydration |
| Medication-related | Polypharmacy, CNS drugs | Deprescribing |
| Cognitive | Dementia, dual-task impairment | Environmental modification |
| Musculoskeletal | Weakness, arthritis | Strength training, PT |
| Environmental | Home hazards, footwear | OT home assessment |

### Advanced Vestibular Assessment

**Comprehensive Testing:**
- Videonystagmography (VNG)
- Rotary chair testing
- Video head impulse test (vHIT)
- Vestibular evoked myogenic potentials (VEMP)
- Computerized dynamic posturography

**Clinical Implications:**
| Finding | Interpretation | Intervention |
|---------|----------------|--------------|
| Unilateral vestibular loss | Single labyrinth or nerve dysfunction | Vestibular rehabilitation |
| Bilateral vestibular loss | Ototoxicity, aging, Meniere's | Vision/proprioception emphasis |
| Central vestibular dysfunction | Brainstem/cerebellar pathology | Neurological workup |
| BPPV | Posterior canal most common | Canalith repositioning maneuver |

### Vestibular Rehabilitation

**Components:**
1. **Gaze stabilization**: VOR adaptation exercises
2. **Habituation**: Repeated exposure to provocative movements
3. **Balance training**: Sensory reweighting, postural control
4. **Functional training**: Activity-specific practice

**Evidence:**
- Moderate evidence for reduced falls in vestibular disorders
- Improves balance confidence
- Reduces dizziness

## Technology-Enabled Fall Prevention

### Wearable Sensors

**Current Applications:**

*Activity Monitoring:*
- Step counts, activity patterns
- Sedentary behavior
- Sleep quality

*Gait Analysis:*
- Stride length, cadence
- Gait variability (fall predictor)
- Asymmetry
- Turning characteristics

*Fall Detection:*
- Accelerometer-based algorithms
- Impact + lack of movement detection
- Automatic alert systems

**Emerging Capabilities:**
- Pre-fall detection (balance perturbation patterns)
- Real-time feedback for gait training
- Remote rehabilitation monitoring

### Machine Learning for Fall Prediction

**Data Sources:**
- Electronic health records
- Wearable sensor data
- Home monitoring systems
- Natural language processing of clinical notes

**Model Development:**
- Training on large fall datasets
- Feature engineering from multiple data types
- Temporal patterns (progression to fall)

**Performance:**
- AUC 0.80-0.90 in validation studies
- Superior to traditional screening tools
- Challenge: Implementation in clinical workflow

### Smart Home Technologies

**Environmental Monitoring:**
- Motion sensors
- Pressure-sensitive flooring
- Video monitoring (privacy concerns)
- Acoustic monitoring

**Predictive Detection:**
- Changes in activity patterns
- Gait deterioration
- Increased bathroom visits (infection, medication effect)
- Sleep disturbance

## Comprehensive Syncope Evaluation

### Falls Due to Syncope

**Prevalence:**
- 10-20% of unexplained falls in elderly may be syncope
- Often unrecognized (amnesia for event)
- Higher risk for serious injury

**Evaluation Algorithm:**

\`\`\`
Unexplained Fall
        ↓
History: Loss of consciousness? Prodrome? Witnessed?
        ↓
    ┌───┴───┐
Syncope suspected    No syncope features
    ↓                      ↓
ECG + orthostatic VS       Gait/balance focus
    ↓
Abnormal → Cardiology referral
    ↓
Normal + recurrent → Consider:
    - Holter/event monitor
    - Echocardiogram
    - Tilt table testing
    - Carotid sinus massage (with monitoring)
    - Implantable loop recorder
\`\`\`

### Carotid Sinus Hypersensitivity

**Definition:**
- Ventricular pause >3 sec (cardioinhibitory)
- ↓SBP >50 mmHg (vasodepressor)
- Mixed type

**Evaluation:**
- Carotid sinus massage with continuous monitoring
- Supine and upright positions
- Contraindications: Carotid bruit, recent stroke, recent MI

**Management:**
- Cardioinhibitory: Pacemaker consideration
- Vasodepressor: Behavioral modifications, possibly midodrine

## Systems-Level Interventions

### Integrated Care Pathways

**Falls Clinic Model:**
- Multidisciplinary team (geriatrician, PT, OT, pharmacist, nurse)
- Comprehensive assessment
- Individualized intervention plan
- Coordination with primary care
- Follow-up and monitoring

**Evidence:**
- 24-30% fall reduction in meta-analyses
- Most effective for high-risk individuals
- Cost-effective over time

### Quality Improvement Frameworks

**Plan-Do-Study-Act Cycles:**
1. Identify high-impact interventions
2. Pilot implementation
3. Measure outcomes (fall rates, injury rates)
4. Refine and spread

**Key Metrics:**
- Fall rate (falls per 1,000 patient days)
- Injury rate (falls with injury per 1,000)
- Screening rate
- Intervention completion rate
- Time to fall risk assessment

### Policy and Reimbursement

**Current Medicare Coverage:**
- Annual Wellness Visit includes fall risk assessment
- PT/OT for fall prevention
- Evidence-based community programs (Matter of Balance, Tai Chi)

**Future Directions:**
- Value-based models including fall outcomes
- Coverage for home safety assessments
- Technology reimbursement
- Community program expansion

## Research Frontiers

### Preventing Fall-Related Injuries

**Hip Protectors:**
- Mixed evidence in community; modest effect in nursing homes
- Adherence is major barrier
- New designs improving acceptance

**Bone Health Optimization:**
- Fracture risk (FRAX) assessment
- Treat osteoporosis aggressively in fallers
- Balance vitamin D supplementation evidence

### Novel Interventions

**Whole-Body Vibration:**
- Platform-based training
- May improve balance, bone density
- Evidence still emerging

**Virtual Reality:**
- Immersive balance training
- Gamification improves adherence
- Emerging evidence for efficacy

**Exergaming:**
- Video game-based exercise
- Nintendo Wii, Xbox Kinect studies
- Engages patients, improves adherence

### Genomics of Falls

**Emerging Research:**
- Genetic variants affecting:
  - Muscle strength/sarcopenia
  - Balance/vestibular function
  - Drug metabolism (pharmacogenomics)
  - Bone density

**Future Applications:**
- Risk stratification
- Personalized intervention selection
- Drug selection (pharmacogenomics)`,
      keyTerms: [
        { term: 'vHIT', definition: 'Video Head Impulse Test; quantitative assessment of vestibulo-ocular reflex function' },
        { term: 'VEMP', definition: 'Vestibular Evoked Myogenic Potentials; test of otolith organ and central vestibular pathway function' },
        { term: 'carotid sinus hypersensitivity', definition: 'Abnormal reflex causing bradycardia and/or hypotension with carotid pressure; cause of unexplained falls' },
        { term: 'implantable loop recorder', definition: 'Subcutaneous cardiac monitor for detecting arrhythmias causing syncope/falls' },
        { term: 'sensory reweighting', definition: 'Process of adjusting reliance on different sensory inputs for balance when one system is impaired' },
        { term: 'gait variability', definition: 'Step-to-step variation in gait parameters; increased variability predicts falls' },
      ],
      clinicalNotes: `Key practice points for advanced fall prevention:

1. **Phenotype the faller**: Don't use one-size-fits-all; identify dominant contributing factors
2. **Consider occult syncope**: ECG and orthostatic vitals on every unexplained fall; consider carotid sinus massage
3. **Measure gait variability** when available: Predicts falls better than gait speed alone
4. **Vestibular rehabilitation** is underutilized: Refer for persistent dizziness or vestibular findings
5. **Fear of falling** is treatable: Cognitive-behavioral approaches work
6. **Multifactorial intervention** works best: Falls clinic model for high-risk patients
7. **Technology is evolving**: Wearables increasingly useful for monitoring and prediction`,
    },
  },

  media: [
    {
      id: 'tug-demonstration',
      type: 'video',
      filename: 'timed-up-and-go.mp4',
      title: 'Timed Up and Go Test Demonstration',
      description: 'Proper technique for administering the TUG test',
      duration: 120,
    },
    {
      id: 'balance-control-diagram',
      type: 'diagram',
      filename: 'balance-control-systems.svg',
      title: 'Balance Control Systems',
      description: 'Visual, vestibular, and somatosensory contributions to balance',
    },
  ],

  citations: [
    {
      id: 'cdc-steadi',
      type: 'website',
      title: 'STEADI - Stopping Elderly Accidents, Deaths & Injuries',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov/steadi/',
    },
    {
      id: 'cochrane-exercise',
      type: 'article',
      title: 'Exercise for preventing falls in older people living in the community',
      authors: ['Sherrington C', 'Fairhall NJ', 'Wallbank GK', 'et al.'],
      source: 'Cochrane Database of Systematic Reviews',
    },
    {
      id: 'ags-guideline',
      type: 'article',
      title: 'Guideline for the Prevention of Falls in Older Persons',
      authors: ['American Geriatrics Society', 'British Geriatrics Society'],
      source: 'Journal of the American Geriatrics Society',
    },
  ],

  crossReferences: [
    { targetId: 'concept-polypharmacy', targetType: 'concept', relationship: 'related', label: 'Polypharmacy' },
    { targetId: 'concept-frailty-sarcopenia', targetType: 'concept', relationship: 'related', label: 'Frailty and Sarcopenia' },
    { targetId: 'concept-cognitive-impairment-assessment', targetType: 'concept', relationship: 'related', label: 'Cognitive Assessment' },
    { targetId: 'topic-vestibular-disorders', targetType: 'topic', relationship: 'related', label: 'Vestibular Disorders' },
  ],

  tags: {
    systems: ['neurological', 'musculoskeletal', 'vestibular'],
    topics: ['geriatrics', 'injury prevention', 'rehabilitation', 'patient safety'],
    keywords: ['falls', 'balance', 'gait', 'orthostatic hypotension', 'vestibular', 'home safety'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine', 'emergency medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default fallsPrevention;
