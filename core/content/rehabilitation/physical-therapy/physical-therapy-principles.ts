/**
 * Physical Therapy Principles - Comprehensive Educational Content
 *
 * Covers the fundamental principles of physical therapy including
 * assessment, goal setting, treatment planning, and evidence-based interventions.
 */

import { EducationalContent } from '../../types';

export const physicalTherapyPrinciples: EducationalContent = {
  id: 'rehab-physical-therapy-principles',
  type: 'concept',
  name: 'Physical Therapy Principles',
  alternateNames: ['Physiotherapy Fundamentals', 'PT Basics'],

  levels: {
    1: {
      level: 1,
      summary: 'Physical therapy helps you move better and feel less pain through special exercises and treatments.',
      explanation: `Physical therapy (PT) is like having a movement coach who helps your body work better. Physical therapists are healthcare experts who understand how your muscles, bones, and joints work together.

**Why might you need physical therapy?**
- You got hurt and need help getting better
- Something hurts when you move
- You had surgery and need to get strong again
- You want to move better and prevent injuries

**What happens in physical therapy?**
1. **Evaluation**: The therapist watches how you move and asks about your pain
2. **Goal setting**: You work together to decide what you want to achieve
3. **Treatment**: You do special exercises and receive hands-on treatment
4. **Home program**: You learn exercises to do at home

**Common treatments include:**
- Stretching tight muscles
- Strengthening weak muscles
- Learning to move safely
- Using heat, cold, or other tools to reduce pain

Physical therapy works because your body can heal and get stronger when you give it the right exercises and care. The therapist guides you every step of the way!`,
      keyTerms: [
        { term: 'physical therapy', definition: 'Treatment that uses exercise and movement to help you feel better and move easier' },
        { term: 'physical therapist', definition: 'A healthcare expert who specializes in helping people move better' },
        { term: 'exercise', definition: 'Planned body movements that help you get stronger or more flexible' },
        { term: 'evaluation', definition: 'When the therapist checks how well you can move' },
      ],
      analogies: [
        'A physical therapist is like a personal trainer who specializes in healing - they know exactly what exercises your body needs to get better.',
        'Physical therapy is like learning to ride a bike again - the therapist helps you practice until moving feels natural.',
      ],
      examples: [
        'After hurting your knee playing soccer, a physical therapist teaches you exercises to make it strong again.',
        'If your back hurts from sitting too much, a physical therapist shows you stretches and better ways to sit.',
      ],
    },
    2: {
      level: 2,
      summary: 'Physical therapy uses evidence-based evaluation and treatment techniques to restore movement, reduce pain, and prevent disability.',
      explanation: `Physical therapy is a healthcare profession focused on restoring function, reducing pain, and preventing disability through movement-based interventions. Physical therapists (PTs) are doctoral-level professionals who evaluate and treat movement disorders.

**Core Principles of Physical Therapy:**

**1. Evidence-Based Practice**
Physical therapists use treatments proven by research to work. This means combining:
- Best available research evidence
- Clinical expertise and experience
- Patient values and preferences

**2. Patient-Centered Care**
Treatment is designed around YOUR goals and needs, not a one-size-fits-all approach.

**3. Movement is Medicine**
The foundation of PT is the belief that proper movement promotes healing and prevents problems.

**The Physical Therapy Process:**

**Step 1: Examination**
- Medical history review
- Observation of posture and movement
- Specific tests for strength, flexibility, and balance
- Pain assessment

**Step 2: Evaluation and Diagnosis**
- Analysis of findings
- Identification of movement problems
- PT diagnosis (different from medical diagnosis)

**Step 3: Prognosis and Plan of Care**
- Prediction of expected outcomes
- Goal setting (short-term and long-term)
- Treatment frequency and duration

**Step 4: Intervention**
- Therapeutic exercises
- Manual therapy (hands-on treatment)
- Physical agents (heat, cold, electrical stimulation)
- Patient education

**Step 5: Outcomes**
- Measuring progress toward goals
- Modifying treatment as needed
- Discharge planning

**Common Conditions Treated:**
- Orthopedic injuries (sprains, strains, fractures)
- Post-surgical rehabilitation
- Neurological conditions (stroke, Parkinson's)
- Chronic pain conditions
- Sports injuries
- Balance and vestibular disorders`,
      keyTerms: [
        { term: 'evidence-based practice', definition: 'Using treatments that research has shown to be effective', pronunciation: 'EH-vih-dens based PRAK-tis' },
        { term: 'manual therapy', definition: 'Hands-on treatment techniques like massage and joint mobilization' },
        { term: 'therapeutic exercise', definition: 'Specific exercises prescribed to address movement problems' },
        { term: 'range of motion', definition: 'How far a joint can move in different directions' },
        { term: 'prognosis', definition: 'The expected outcome or recovery prediction', pronunciation: 'prog-NOH-sis' },
      ],
      analogies: [
        'Physical therapy evaluation is like a detective investigation - the PT gathers clues about your movement to solve the mystery of your pain.',
        'A PT treatment plan is like a GPS for recovery - it maps out where you are, where you want to go, and the best route to get there.',
      ],
    },
    3: {
      level: 3,
      summary: 'Physical therapy integrates biomechanical, neurophysiological, and behavioral principles to restore optimal movement through structured examination, targeted interventions, and outcomes measurement.',
      explanation: `## Theoretical Foundations

Physical therapy practice is grounded in several key scientific domains:

**Biomechanics**
- Force-motion relationships in human movement
- Kinetics (forces) and kinematics (motion description)
- Load-bearing capacity and tissue adaptation

**Neurophysiology**
- Motor control and motor learning principles
- Neuroplasticity and neural adaptation
- Sensorimotor integration

**Tissue Healing Science**
- Phases of tissue repair (inflammation, proliferation, remodeling)
- Effects of mechanical loading on tissue healing
- Time-based treatment progression

**Behavioral Science**
- Health behavior change models
- Self-efficacy and patient motivation
- Adherence to exercise programs

## The ICF Model in Physical Therapy

Physical therapists use the WHO International Classification of Functioning, Disability and Health (ICF) framework:

| ICF Domain | Examples in PT Practice |
|------------|------------------------|
| Body Functions & Structures | Muscle strength, joint mobility, pain |
| Activity | Walking, climbing stairs, reaching |
| Participation | Work, sports, social activities |
| Environmental Factors | Home setup, assistive devices, social support |
| Personal Factors | Age, motivation, prior activity level |

## Examination Components

**Systems Review:**
- Cardiovascular/pulmonary
- Integumentary (skin)
- Musculoskeletal
- Neuromuscular

**Tests and Measures:**
- Anthropometric measurements
- Goniometry (joint angle measurement)
- Manual muscle testing (MMT)
- Neurological screening
- Special tests (orthopedic provocation tests)
- Functional movement assessment
- Patient-reported outcome measures (PROMs)

## Intervention Categories (APTA Guide)

1. **Therapeutic Exercise**
   - Aerobic conditioning
   - Strength training
   - Flexibility exercises
   - Balance and coordination training
   - Functional training

2. **Manual Therapy**
   - Joint mobilization/manipulation
   - Soft tissue mobilization
   - Neural mobilization

3. **Physical Agents**
   - Thermal agents (heat/cold)
   - Electrotherapeutic agents
   - Mechanical agents (traction, compression)

4. **Patient Education**
   - Disease process education
   - Movement strategies
   - Self-management techniques

## Evidence Levels for PT Interventions

Physical therapists critically appraise evidence:
- Level I: Systematic reviews, meta-analyses
- Level II: Randomized controlled trials
- Level III: Cohort studies
- Level IV: Case series
- Level V: Expert opinion

Clinical practice guidelines synthesize evidence to guide treatment decisions.`,
      keyTerms: [
        { term: 'ICF', definition: 'International Classification of Functioning, Disability and Health - WHO framework for describing health and disability', pronunciation: 'I-C-F' },
        { term: 'goniometry', definition: 'Measurement of joint angles using a goniometer', pronunciation: 'go-nee-AH-meh-tree' },
        { term: 'manual muscle testing', definition: 'Systematic assessment of muscle strength graded 0-5' },
        { term: 'neuroplasticity', definition: 'The brain\'s ability to reorganize and form new neural connections' },
        { term: 'motor learning', definition: 'The process by which movement skills are acquired through practice' },
        { term: 'kinetics', definition: 'The study of forces causing movement', pronunciation: 'kih-NEH-tiks' },
      ],
      clinicalNotes: 'PT diagnosis uses movement-based terminology (e.g., "movement coordination impairment" rather than medical diagnosis). Treatment frequency typically follows dose-response principles with higher intensity early in rehabilitation.',
    },
    4: {
      level: 4,
      summary: 'Physical therapy employs sophisticated clinical reasoning integrating biopsychosocial factors, movement system diagnosis, and dosage-specific interventions guided by treatment-based classification and clinical prediction rules.',
      explanation: `## Movement System Diagnosis

The APTA has developed a movement system diagnosis framework:

**Movement System Impairment Syndromes:**
- Pattern recognition based on movement analysis
- Directional preference identification
- Movement coordination deficits
- Tissue-specific pathology correlation

**Classification Systems:**

1. **Treatment-Based Classification (TBC)**
   - Originally developed for low back pain
   - Categorizes patients by likely treatment response
   - Subgroups: manipulation, stabilization, specific exercise, traction

2. **Mechanical Diagnosis and Therapy (MDT/McKenzie)**
   - Derangement syndromes
   - Dysfunction syndromes
   - Postural syndromes
   - Directional preference assessment

3. **Movement Impairment Syndromes (Sahrmann)**
   - Identifies habitual movement patterns
   - Tissue adaptation to sustained positions
   - Movement precision assessment

## Clinical Prediction Rules (CPRs)

Validated prediction rules guide treatment selection:

**Manipulation CPR for LBP:**
- Duration <16 days
- No symptoms distal to knee
- FABQ-W score <19
- Hip IR >35 degrees
- Hypomobility at one segment
- (+LR = 13.2 with 4/5 criteria)

**Stabilization CPR:**
- Positive prone instability test
- Aberrant movements
- SLR >91 degrees
- Age <40 years

## Dosage Parameters

**Exercise Prescription (FITT-VP):**
- Frequency: sessions per week
- Intensity: %1RM, RPE, heart rate
- Time: duration per session
- Type: mode of exercise
- Volume: total work
- Progression: systematic advancement

**Tissue-Specific Loading:**

| Tissue | Healing Phase | Loading Parameters |
|--------|---------------|-------------------|
| Muscle | Proliferation (3-21 days) | Low load, high repetition |
| Muscle | Remodeling (21+ days) | Progressive overload |
| Tendon | Early (<6 weeks) | Isometric loading |
| Tendon | Late (>12 weeks) | Eccentric loading, energy storage |
| Bone | Callus formation | Weight-bearing as tolerated |
| Ligament | Maturation (6-12 months) | Progressive stress, proprioception |

## Motor Learning Principles in PT

**Practice Variables:**
- Massed vs. distributed practice
- Blocked vs. random practice
- Part vs. whole practice
- Mental practice

**Feedback:**
- Knowledge of results (KR) vs. knowledge of performance (KP)
- Faded feedback schedules
- Internal vs. external focus of attention

**Transfer:**
- Task specificity
- Contextual interference effect
- Generalizability of learned movements

## Biopsychosocial Integration

**Yellow Flags (Psychosocial Risk Factors):**
- Fear-avoidance beliefs
- Catastrophizing
- Low self-efficacy
- Depression/anxiety
- Work dissatisfaction
- Compensation/litigation

**Addressing Psychosocial Factors:**
- Pain neuroscience education
- Graded exposure
- Cognitive functional therapy
- Motivational interviewing

## Outcome Measurement

**Minimal Clinically Important Difference (MCID):**
- Oswestry Disability Index: 10-12 points
- Neck Disability Index: 5-7 points
- Lower Extremity Functional Scale: 9 points
- Visual Analog Scale pain: 10-20mm

**Patient-Reported Outcome Measures (PROMs):**
- Region-specific measures (ODI, NDI, LEFS, DASH)
- Generic health measures (SF-36, EQ-5D)
- Fear-avoidance measures (FABQ, TSK)
- Psychological measures (PHQ-9, GAD-7)`,
      keyTerms: [
        { term: 'clinical prediction rule', definition: 'Validated decision tool combining clinical findings to predict treatment response or prognosis' },
        { term: 'MCID', definition: 'Minimal Clinically Important Difference - smallest change that is meaningful to patients' },
        { term: 'fear-avoidance', definition: 'Maladaptive behavior pattern where fear of pain leads to activity avoidance and disability' },
        { term: 'yellow flags', definition: 'Psychosocial risk factors for chronic disability development' },
        { term: 'treatment-based classification', definition: 'System categorizing patients by predicted response to specific interventions' },
        { term: 'contextual interference', definition: 'Motor learning principle where random practice improves retention despite slower acquisition' },
      ],
      clinicalNotes: 'High FABQ scores (>29 work subscale) predict poorer outcomes and indicate need for cognitive-behavioral approaches. CPRs should be applied with understanding of pre-test probability and used to inform, not replace, clinical reasoning.',
    },
    5: {
      level: 5,
      summary: 'Contemporary physical therapy practice integrates precision medicine approaches, advanced outcome prediction models, and emerging technologies within healthcare systems to optimize movement-related health across the lifespan.',
      explanation: `## Precision Physical Therapy

The field is moving toward precision medicine approaches:

**Phenotyping Patients:**
- Clinical subgrouping based on presentation patterns
- Biomarker integration (inflammatory, genetic)
- Imaging-clinical correlation
- Psychophysical profiling

**Treatment Response Prediction:**
- Machine learning models for outcome prediction
- Genetic factors affecting tissue healing (COL5A1, VEGF polymorphisms)
- Baseline prognostic factors identification
- Responder vs. non-responder profiles

## Advanced Clinical Reasoning

**Hypothesis-Oriented Algorithm for Clinicians II (HOAC II):**
1. Generate initial concept
2. Conduct examination
3. Generate hypotheses
4. Evaluate hypothesis validity
5. Plan intervention strategy
6. Implement intervention
7. Reassess and modify

**Pattern Recognition vs. Hypothetico-Deductive Reasoning:**
- Novice: systematic, rule-based approach
- Expert: pattern recognition with selective testing
- Adaptive expertise: flexible integration of both

## Emerging Technologies

**Wearable Technology:**
- Inertial measurement units (IMUs) for movement analysis
- Force-sensing insoles for gait assessment
- Real-time biofeedback systems
- Remote monitoring capabilities

**Virtual Reality and Augmented Reality:**
- Immersive rehabilitation environments
- Motor imagery enhancement
- Pain distraction and exposure therapy
- Telerehabilitation applications

**Robotics:**
- Exoskeletons for gait training
- End-effector devices for upper extremity
- Dosage standardization
- High-intensity training delivery

**Artificial Intelligence Applications:**
- Computer vision for movement assessment
- Automated exercise prescription
- Predictive analytics for outcomes
- Natural language processing for documentation

## Healthcare System Integration

**Value-Based Care:**
- Episode-of-care models
- Bundled payments
- Quality metrics and benchmarking
- Cost-effectiveness considerations

**PT's Role in Primary Care:**
- Direct access legislation (all 50 states have some form)
- Primary care for musculoskeletal conditions
- Opioid alternative strategies
- Prevention and wellness programs

**Interprofessional Practice:**
- Integrated care teams
- Shared decision-making models
- Care coordination
- Handoff communication

## Research Priorities and Evidence Gaps

**High-Priority Research Areas:**
- Comparative effectiveness of treatment approaches
- Implementation science for evidence-practice gaps
- Health disparities in rehabilitation access
- Long-term outcomes and durability of interventions
- Mechanisms of action for manual therapy
- Optimal dosage parameters

**Methodological Advances:**
- Adaptive trial designs
- N-of-1 trials for individualized treatment
- Big data analytics
- Practice-based evidence networks

## Specialty Practice and Advanced Competencies

**ABPTS Specialty Certifications:**
- Orthopaedic (OCS)
- Sports (SCS)
- Neurologic (NCS)
- Geriatric (GCS)
- Pediatric (PCS)
- Cardiovascular and Pulmonary (CCS)
- Clinical Electrophysiology (ECS)
- Women's Health (WCS)
- Oncologic (OncCS)
- Wound Management (WCC)

**Advanced Practice:**
- Fellowship training
- Residency programs
- Credentialing requirements
- Maintenance of certification

## Global Health and Population Perspectives

**Burden of Musculoskeletal Conditions:**
- Leading cause of disability globally
- Disability-adjusted life years (DALYs)
- Workforce impact
- Healthcare utilization patterns

**Access to Rehabilitation:**
- WHO Rehabilitation 2030 initiative
- Rehabilitation in health systems strengthening
- Task-shifting strategies
- Telerehabilitation for underserved populations

## Professional and Ethical Considerations

**Scope of Practice:**
- Autonomous practice evolution
- Referral relationships
- Medical-legal considerations
- Documentation requirements

**Ethical Decision-Making:**
- Resource allocation
- Evidence uncertainty management
- Patient autonomy
- Conflicts of interest`,
      keyTerms: [
        { term: 'precision rehabilitation', definition: 'Approach matching treatments to individual patient characteristics based on phenotypic and biomarker profiling' },
        { term: 'direct access', definition: 'Patient ability to see a physical therapist without physician referral' },
        { term: 'value-based care', definition: 'Healthcare delivery model focusing on outcomes relative to costs' },
        { term: 'ABPTS', definition: 'American Board of Physical Therapy Specialties - credentialing body for specialist certification' },
        { term: 'implementation science', definition: 'Study of methods to promote adoption of evidence-based practices into routine care' },
        { term: 'practice-based evidence', definition: 'Research conducted in real-world clinical settings to complement randomized trials' },
      ],
      clinicalNotes: `Key trends shaping PT practice:
1. Shift toward primary care MSK provider role with direct access
2. Technology integration for measurement and intervention
3. Value-based payment models emphasizing outcomes
4. Addressing psychosocial factors as standard practice
5. Precision approaches based on individual characteristics
6. Growing emphasis on prevention and wellness
7. Telehealth integration accelerated by COVID-19 pandemic`,
    },
  },

  media: [
    {
      id: 'pt-examination-flowchart',
      type: 'diagram',
      filename: 'pt-examination-flowchart.svg',
      title: 'Physical Therapy Examination Process',
      description: 'Flowchart showing steps from initial examination through treatment planning',
    },
    {
      id: 'icf-model-diagram',
      type: 'diagram',
      filename: 'icf-model-diagram.svg',
      title: 'ICF Model in Physical Therapy',
      description: 'Visual representation of ICF domains and their interactions',
    },
  ],

  citations: [
    {
      id: 'apta-guide-pt-practice',
      type: 'textbook',
      title: 'Guide to Physical Therapist Practice 4.0',
      authors: ['American Physical Therapy Association'],
      source: 'APTA',
      url: 'https://guide.apta.org/',
    },
    {
      id: 'magee-orthopedic',
      type: 'textbook',
      title: 'Orthopedic Physical Assessment',
      authors: ['Magee, D.J.'],
      source: 'Elsevier',
      chapter: '1',
    },
    {
      id: 'who-icf',
      type: 'website',
      title: 'International Classification of Functioning, Disability and Health',
      authors: ['World Health Organization'],
      source: 'WHO',
      url: 'https://www.who.int/standards/classifications/international-classification-of-functioning-disability-and-health',
    },
  ],

  crossReferences: [
    { targetId: 'rehab-therapeutic-exercise', targetType: 'topic', relationship: 'child', label: 'Therapeutic Exercise' },
    { targetId: 'rehab-manual-therapy', targetType: 'topic', relationship: 'child', label: 'Manual Therapy' },
    { targetId: 'rehab-physical-modalities', targetType: 'topic', relationship: 'child', label: 'Physical Modalities' },
    { targetId: 'rehab-functional-assessment', targetType: 'topic', relationship: 'related', label: 'Functional Assessment' },
  ],

  tags: {
    systems: ['musculoskeletal', 'neurological'],
    topics: ['rehabilitation', 'physical therapy', 'movement'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default physicalTherapyPrinciples;
