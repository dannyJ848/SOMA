/**
 * What to Expect at Your First Physical Therapy Visit
 *
 * Patient education content preparing patients for their initial
 * physical therapy evaluation and setting expectations.
 */

import { EducationalContent } from '../../../types';

export const firstVisit: EducationalContent = {
  id: 'pt-basics-first-visit',
  type: 'concept',
  name: 'What to Expect at Your First Physical Therapy Visit',
  alternateNames: ['First PT Appointment', 'Initial PT Evaluation', 'PT Intake Visit'],

  levels: {
    1: {
      level: 1,
      summary: 'Your first physical therapy visit is when you meet your therapist, talk about what hurts or bothers you, and start making a plan to feel better.',
      explanation: `Going to physical therapy for the first time might feel a little scary, but it's actually pretty simple! Here's what will happen:

**Before Your Visit**
- Wear comfortable clothes you can move in (like gym clothes)
- Bring any papers your doctor gave you
- Write down your questions so you don't forget them

**What Happens When You Arrive**
1. **Paperwork**: You'll fill out forms about your health and what's bothering you
2. **Meet your therapist**: They'll introduce themselves and ask about you
3. **Tell your story**: You'll explain what hurts and when it started

**The Examination**
Your therapist will:
- Watch how you move and stand
- Check how strong you are
- See how far your joints can bend
- Feel the area that hurts (they'll be gentle!)
- Maybe have you do some movements or exercises

**Making a Plan**
Together, you and your therapist will:
- Talk about what you want to get better at
- Set goals for your treatment
- Decide how often you'll come
- Learn some exercises you can do at home

**Tips for Your First Visit**
- Be honest about your pain - don't try to be tough!
- Ask questions if you don't understand something
- Tell your therapist if anything hurts too much

Your first visit usually takes about an hour. After that, regular visits are shorter.`,
      keyTerms: [
        { term: 'evaluation', definition: "When the therapist checks your body to see what's wrong and how to help" },
        { term: 'examination', definition: 'Looking at and testing your body to understand your problem' },
        { term: 'treatment plan', definition: 'The roadmap for how your therapist will help you get better' },
        { term: 'goals', definition: 'The things you want to be able to do after therapy' },
      ],
      analogies: [
        'Your first PT visit is like a detective investigation - the therapist gathers clues about your body to solve the mystery of why you hurt.',
        'It\'s like when a coach watches you play before teaching you new skills - they need to see what you can already do.',
      ],
      examples: [
        'Sarah was nervous about her first PT visit for knee pain, but her therapist was friendly and explained everything. She left feeling hopeful about getting better!',
        'When Jake came in with shoulder pain, his therapist asked about his baseball pitching and watched him throw to understand the problem.',
      ],
    },
    2: {
      level: 2,
      summary: 'Your first physical therapy visit involves a comprehensive evaluation where your therapist assesses your condition, discusses your goals, and develops a personalized treatment plan.',
      explanation: `## Before Your Appointment

**What to Bring:**
- Photo ID and insurance card
- Referral or prescription from your doctor (if required)
- List of current medications
- Any relevant medical records or imaging results (X-rays, MRIs)
- Completed intake forms (often available online beforehand)

**What to Wear:**
- Loose, comfortable clothing that allows movement
- For lower body issues: shorts or athletic pants
- For upper body issues: tank top or loose shirt
- Appropriate footwear (bring different shoes if relevant)

## The Evaluation Process

**1. Patient Interview (15-20 minutes)**
Your therapist will ask about:
- Your main concern and when it started
- How the problem affects your daily life
- What makes it better or worse
- Your medical history
- Your goals for therapy

**2. Physical Examination (20-30 minutes)**
The therapist will assess:
- **Posture**: How you stand and sit
- **Range of motion**: How far your joints move
- **Strength**: How strong your muscles are
- **Flexibility**: How tight your muscles are
- **Movement patterns**: How you move during activities
- **Special tests**: Specific tests to identify the problem

**3. Hands-On Assessment**
The therapist may:
- Feel (palpate) muscles and joints
- Check joint mobility
- Test nerve function
- Assess tissue quality

## Developing Your Treatment Plan

**Goal Setting**
Together you'll establish:
- Short-term goals (2-4 weeks)
- Long-term goals (by discharge)
- Functional goals (activities you want to do)

**Treatment Recommendations**
Your therapist will discuss:
- Recommended visit frequency (usually 1-3 times per week)
- Expected duration of treatment (varies by condition)
- Types of treatment you'll receive
- Home exercise program

## What You'll Leave With

- Understanding of your diagnosis/condition
- Initial home exercises
- Schedule for upcoming appointments
- Written exercise instructions
- Knowledge of what to do if symptoms worsen

## Tips for a Successful First Visit

- Be honest about your pain levels
- Don't minimize or exaggerate symptoms
- Ask questions - there are no dumb questions!
- Take notes or ask for written instructions
- Understand your home program before leaving`,
      keyTerms: [
        { term: 'initial evaluation', definition: 'The first comprehensive assessment that determines your diagnosis and treatment plan' },
        { term: 'range of motion', definition: 'The full movement potential of a joint, usually measured in degrees' },
        { term: 'palpation', definition: 'The therapist using their hands to feel muscles, joints, and other structures', pronunciation: 'pal-PAY-shun' },
        { term: 'functional goals', definition: 'Specific activities or tasks you want to be able to do after therapy' },
        { term: 'home exercise program (HEP)', definition: 'Exercises prescribed for you to do between therapy sessions' },
      ],
      analogies: [
        'The initial evaluation is like a thorough car inspection before repairs - the mechanic needs to understand all the issues before fixing anything.',
        'Setting PT goals is like planning a road trip - you need to know your destination to plan the route.',
      ],
    },
    3: {
      level: 3,
      summary: 'The initial physical therapy evaluation follows a systematic process of history-taking, systems review, tests and measures, evaluation synthesis, and collaborative goal-setting to establish diagnosis, prognosis, and plan of care.',
      explanation: `## Evaluation Framework (APTA Guide)

The initial evaluation follows a structured clinical reasoning process:

### History
**Chief Complaint**
- Primary symptom(s) and location
- Onset: mechanism, date, acute vs. insidious
- Course: constant, intermittent, progressive
- Character: aching, sharp, burning, etc.

**Symptom Behavior**
- Aggravating factors (24-hour pattern)
- Easing factors
- Night symptoms
- Current functional limitations

**Past Medical History**
- Previous episodes and treatments
- Relevant medical conditions
- Surgeries
- Medications

**Psychosocial Factors**
- Work/activity demands
- Living situation
- Support systems
- Goals and expectations
- Beliefs about condition

### Systems Review

Screening of each body system to identify:
- Related problems requiring attention
- Need for referral
- Precautions or contraindications

| System | Screening Components |
|--------|---------------------|
| Cardiovascular/Pulmonary | HR, BP, edema, SOB |
| Integumentary | Skin integrity, scars |
| Musculoskeletal | Gross ROM, strength, posture |
| Neuromuscular | Gait, balance, coordination |
| Communication | Affect, cognition, language |

### Tests and Measures

**Standard Measures**
- Range of motion (goniometry)
- Muscle strength (manual muscle testing)
- Palpation
- Neurological screening
- Posture analysis

**Special Tests**
Orthopedic provocation tests specific to region:
- Sensitivity: ability to detect condition when present
- Specificity: ability to rule out condition when absent

**Outcome Measures**
Region-specific patient-reported outcomes:
- Neck: Neck Disability Index (NDI)
- Low back: Oswestry Disability Index (ODI)
- Lower extremity: LEFS
- Upper extremity: DASH, QuickDASH

### Evaluation and Diagnosis

**Clinical Reasoning Process**
1. Pattern recognition from history and examination
2. Hypothesis generation and testing
3. Identification of key impairments
4. Synthesis into clinical diagnosis

**Physical Therapy Diagnosis**
Movement-based classification distinct from medical diagnosis:
- Describes movement dysfunction
- Guides treatment approach
- Based on examination findings

### Prognosis

**Factors Affecting Prognosis**
- Duration of symptoms
- Severity of impairments
- Presence of yellow flags
- Comorbidities
- Previous treatment response
- Patient goals and motivation

**Expected Outcomes**
- Predicted level of improvement
- Estimated time to achieve goals
- Recommended visit frequency/duration

### Plan of Care

**Goals**
- SMART format: Specific, Measurable, Achievable, Relevant, Time-bound
- Short-term goals (2-4 weeks)
- Long-term goals (by discharge)

**Intervention Plan**
- Treatment approaches to be used
- Frequency and duration
- Progression criteria

**Home Exercise Program**
- Initial exercises with rationale
- Frequency and dosage
- Precautions

**Documentation**
- Required for medical-legal and reimbursement purposes
- Must justify medical necessity
- Supports care coordination`,
      keyTerms: [
        { term: 'systems review', definition: 'Quick screening of body systems to identify relevant problems or referral needs' },
        { term: 'special tests', definition: 'Specific orthopedic tests designed to identify particular pathologies or conditions' },
        { term: 'sensitivity', definition: 'Probability that a test correctly identifies those with the condition' },
        { term: 'specificity', definition: 'Probability that a test correctly identifies those without the condition' },
        { term: 'SMART goals', definition: 'Goals that are Specific, Measurable, Achievable, Relevant, and Time-bound' },
        { term: 'yellow flags', definition: 'Psychosocial factors that may predict poor outcomes or chronic disability' },
      ],
      clinicalNotes: 'The initial evaluation typically requires 45-60 minutes. Documentation must support medical necessity for insurance reimbursement. Baseline outcome measures are essential for tracking progress and demonstrating treatment effectiveness.',
    },
    4: {
      level: 4,
      summary: 'The initial physical therapy evaluation integrates hypothesis-driven examination with clinical prediction rules, validated outcome measures, and biopsychosocial screening to optimize diagnostic accuracy and prognostic determination.',
      explanation: `## Advanced Examination Strategies

### Hypothesis-Driven Examination

**Initial Impression Formation**
- Pattern recognition from subjective history
- Preliminary diagnostic hypotheses
- Examination focused on confirming/refuting hypotheses

**Selective Examination**
- Prioritize tests that change clinical decision-making
- Consider pre-test probability
- Apply Bayesian reasoning to test interpretation

**Test Selection Criteria**
- Diagnostic utility (sensitivity/specificity)
- Likelihood ratios (positive and negative)
- Clinical prediction rule applicability

### Clinical Prediction Rules Application

**Validated CPRs at Initial Evaluation**

| Condition | CPR | Criteria |
|-----------|-----|----------|
| LBP - Manipulation | Flynn et al. | Duration <16d, no sx distal to knee, FABQ-W <19, hip IR >35, lumbar hypomobility |
| LBP - Stabilization | Hicks et al. | Positive prone instability, aberrant movements, SLR >91, age <40 |
| Cervical radiculopathy | Wainner | Spurling+, distraction+, ULTT+, rotation <60 |
| Ankle sprain - Ottawa Rules | Stiell | Bone tenderness, inability to weight bear |

**Interpretation Considerations**
- Understand derivation and validation status
- Apply to appropriate populations
- Use to inform, not replace, clinical reasoning

### Psychosocial Screening

**Yellow Flag Assessment**
Required at initial evaluation for musculoskeletal conditions:

| Factor | Screening Tool |
|--------|---------------|
| Fear-avoidance | FABQ, TSK |
| Catastrophizing | PCS |
| Depression | PHQ-9 |
| Anxiety | GAD-7 |
| Self-efficacy | PSEQ |

**Interpretation**
- High scores indicate need for CBT/graded exposure approaches
- May require referral or consultation
- Affects prognosis and treatment selection

### Diagnostic Accuracy Principles

**Understanding Test Properties**
- Sensitivity: SnNOut (sensitive test, negative result rules out)
- Specificity: SpPIn (specific test, positive result rules in)
- Likelihood ratios change pre-test to post-test probability

**Cluster Testing**
- Combining tests improves accuracy
- Calculate aggregate probability
- Reduces false positive/negative rates

### Outcome Measure Selection

**Criteria for Selection**
- Psychometric properties (validity, reliability, responsiveness)
- MCID established
- Appropriate for population and condition
- Feasible to administer

**Baseline Documentation**
- Required for demonstrating change
- Supports medical necessity
- Enables outcome analysis

### Prognostic Factors

**Literature-Identified Prognostic Factors**

*Favorable:*
- Shorter symptom duration
- Lower baseline disability
- Higher self-efficacy
- Active coping strategies
- Lower fear-avoidance

*Unfavorable:*
- Long symptom duration
- High fear-avoidance beliefs
- Widespread pain
- Poor sleep
- Compensation/litigation
- Previous treatment failure

### Documentation for Medical Necessity

**Required Elements**
- Diagnosis with functional implications
- Objective, measurable impairments
- Skilled intervention need
- Rehabilitation potential
- Specific, measurable goals
- Planned interventions with justification

**Compliance Considerations**
- Insurance requirements vary
- Prior authorization when required
- Appropriate coding
- Clear medical necessity statement`,
      keyTerms: [
        { term: 'likelihood ratio', definition: 'Ratio describing how test result changes probability of condition (LR+ for positive, LR- for negative)' },
        { term: 'Bayesian reasoning', definition: 'Updating probability estimates based on new evidence from tests' },
        { term: 'FABQ', definition: 'Fear-Avoidance Beliefs Questionnaire - measures beliefs about activity and work with pain' },
        { term: 'catastrophizing', definition: 'Exaggerated negative orientation toward actual or anticipated pain' },
        { term: 'medical necessity', definition: 'Documentation requirement that services are reasonable and necessary for condition' },
        { term: 'pre-test probability', definition: 'Estimated likelihood of condition before diagnostic testing' },
      ],
      clinicalNotes: 'Initial evaluations in value-based care models increasingly emphasize prognostic determination and expected outcomes. High FABQ-Work scores (>29) are among the strongest predictors of poor outcomes and warrant psychologically-informed approaches. Routine psychosocial screening is becoming standard of care.',
    },
    5: {
      level: 5,
      summary: 'Contemporary initial evaluation integrates precision medicine approaches, advanced decision support tools, and healthcare system considerations to optimize care pathways, resource utilization, and value-based outcomes.',
      explanation: `## Evolving Evaluation Paradigms

### Precision Evaluation

**Phenotyping Approaches**
- Movement quality assessment (technology-enhanced)
- Pain mechanism classification (nociceptive, neuropathic, nociplastic)
- Psychophysical profiling
- Inflammatory biomarker consideration

**Subgrouping for Treatment Matching**
- Classification systems (TBC, MDT, MSI)
- Phenotype-treatment matching
- Responder identification strategies

### Technology-Enhanced Assessment

**Wearable and Sensor Technology**
- Inertial measurement units for movement analysis
- Force plates for balance/gait
- Real-time biomechanical feedback
- Baseline data for remote monitoring

**Computer Vision Applications**
- Markerless motion capture
- Automated movement quality scoring
- Telehealth examination capabilities

**AI Decision Support**
- Diagnostic prediction models
- Risk stratification algorithms
- Treatment response prediction
- Documentation assistance

### Healthcare System Considerations

**Direct Access Implications**
- Screening for medical conditions requiring referral
- Red flag identification
- Appropriate triage responsibility
- Collaboration with medical providers

**Value-Based Care Requirements**
- Appropriate utilization determination
- Expected outcome documentation
- Cost-effectiveness considerations
- Episode-of-care planning

### Risk Stratification at Initial Evaluation

**STarT Back Approach**
- Stratified care based on prognostic risk
- Low risk: minimal intervention
- Medium risk: PT with physical focus
- High risk: PT with psychologically-informed approach

**Application to Other Regions**
- Keele STarT MSK (general musculoskeletal)
- Neck and shoulder adaptations
- System-level implementation

### Shared Decision-Making

**Elements at Initial Evaluation**
- Diagnosis explanation in patient terms
- Treatment options with evidence
- Expected outcomes and timeframes
- Patient preferences and values
- Collaborative goal-setting

**Decision Aids**
- Visual aids for prognosis
- Treatment option comparison
- Goal-setting tools
- Written information provision

### Addressing Health Disparities

**Assessment Considerations**
- Health literacy evaluation
- Cultural factors affecting presentation
- Access barriers identification
- Social determinants of health

**Equity-Focused Practices**
- Interpreter services when needed
- Culturally-sensitive examination
- Addressing implicit bias
- Flexible scheduling options

### Telehealth Initial Evaluation

**Appropriate Populations**
- Follow-up or re-evaluation
- Low acuity conditions
- Access limitations
- Patient preference

**Adaptations Required**
- Modified physical examination
- Patient self-assessment instruction
- Technology troubleshooting
- Documentation considerations

**Hybrid Models**
- Initial telehealth with in-person follow-up
- Technology-enhanced remote monitoring
- Combination approaches

### Documentation Evolution

**Electronic Health Record Integration**
- Standardized templates
- Outcome measure integration
- Clinical decision support triggers
- Care coordination tools

**Quality Reporting**
- MIPS/quality measure documentation
- Outcome data collection
- Patient satisfaction capture
- Adverse event tracking

### Research Integration

**Practice-Based Evidence**
- Contributing to clinical databases
- Outcomes registries participation
- Quality improvement initiatives
- Real-world evidence generation`,
      keyTerms: [
        { term: 'phenotyping', definition: 'Classification of patients based on observable characteristics, biomarkers, and clinical features' },
        { term: 'nociplastic pain', definition: 'Pain arising from altered nociception despite no evidence of actual or threatened tissue damage' },
        { term: 'STarT Back', definition: 'Stratified targeting approach matching treatment intensity to prognostic risk level' },
        { term: 'shared decision-making', definition: 'Collaborative process where clinicians and patients make decisions together' },
        { term: 'markerless motion capture', definition: 'Computer vision technology analyzing movement without physical markers on the body' },
        { term: 'MIPS', definition: 'Merit-based Incentive Payment System - CMS quality reporting program' },
      ],
      clinicalNotes: `Initial evaluation best practices continue to evolve:
1. Routine psychosocial screening and risk stratification
2. Technology-enhanced assessment where appropriate
3. Shared decision-making and patient education emphasis
4. Value-based care considerations from the first visit
5. Documentation supporting care coordination
6. Telehealth options for appropriate populations
7. Equity and access considerations
8. Integration with healthcare system quality initiatives`,
    },
  },

  media: [
    {
      id: 'first-visit-checklist',
      type: 'diagram',
      filename: 'first-visit-checklist.svg',
      title: 'First PT Visit Checklist',
      description: 'Patient checklist for preparing for initial PT evaluation',
    },
    {
      id: 'evaluation-process-flowchart',
      type: 'diagram',
      filename: 'evaluation-process-flowchart.svg',
      title: 'PT Evaluation Process',
      description: 'Flowchart showing steps in initial PT evaluation',
    },
  ],

  citations: [
    {
      id: 'apta-guide-examination',
      type: 'website',
      title: 'Guide to Physical Therapist Practice - Examination',
      authors: ['American Physical Therapy Association'],
      source: 'APTA',
      url: 'https://guide.apta.org/',
    },
  ],

  crossReferences: [
    { targetId: 'pt-basics-what-is-physical-therapy', targetType: 'topic', relationship: 'sibling', label: 'What Is Physical Therapy?' },
    { targetId: 'pt-basics-how-pt-helps-healing', targetType: 'topic', relationship: 'sibling', label: 'How PT Helps Healing' },
    { targetId: 'pt-basics-home-exercise-importance', targetType: 'topic', relationship: 'sibling', label: 'Home Exercise Importance' },
  ],

  tags: {
    systems: ['musculoskeletal', 'neurological'],
    topics: ['rehabilitation', 'physical therapy', 'patient education', 'evaluation'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default firstVisit;
