/**
 * ADL Training - Comprehensive Educational Content
 *
 * Covers activities of daily living training including self-care,
 * instrumental ADLs, and adaptive techniques.
 */

import { EducationalContent } from '../../types';

export const adlTraining: EducationalContent = {
  id: 'rehab-adl-training',
  type: 'concept',
  name: 'Activities of Daily Living (ADL) Training',
  alternateNames: ['ADL Retraining', 'Self-Care Training', 'Daily Living Skills'],

  levels: {
    1: {
      level: 1,
      summary: 'ADL training teaches you new ways to do everyday activities like getting dressed, bathing, and eating when illness or injury makes these tasks difficult.',
      explanation: `ADL stands for Activities of Daily Living - the basic things we all do every day to take care of ourselves. When you're hurt or sick, these simple tasks can become really hard. ADL training helps you do them again.

**Basic ADLs include:**
- **Bathing**: showering or taking a bath
- **Dressing**: putting on and taking off clothes
- **Eating**: feeding yourself
- **Toileting**: using the bathroom
- **Grooming**: brushing teeth, combing hair, shaving
- **Moving around**: getting in and out of bed or chairs

**How does ADL training help?**

**1. Learning New Ways**
If you can't do something the old way, there's usually a new way. For example:
- Putting on pants while sitting instead of standing
- Using one hand when the other is weak
- Breaking tasks into smaller, easier steps

**2. Using Special Tools**
Helpful gadgets make tasks easier:
- Long-handled shoehorn to put on shoes without bending
- Button hook for buttoning with one hand
- Built-up handles on utensils for weak grip
- Shower chair to sit while bathing

**3. Building Strength and Skills**
Practice helps you get better at:
- Using your weaker hand or arm
- Balancing while standing
- Remembering the steps of an activity

**4. Staying Safe**
Your therapist teaches you how to:
- Avoid falls in the bathroom
- Transfer safely in and out of the shower
- Conserve energy so you don't get too tired

The goal is to help you be as independent as possible in taking care of yourself!`,
      keyTerms: [
        { term: 'ADL', definition: 'Activities of Daily Living - basic self-care tasks like bathing, dressing, and eating' },
        { term: 'adaptive equipment', definition: 'Special tools that make daily activities easier' },
        { term: 'transfer', definition: 'Moving from one surface to another, like from bed to wheelchair' },
        { term: 'independence', definition: 'Being able to do things by yourself without help' },
      ],
      analogies: [
        'ADL training is like learning to cook with your non-dominant hand - there are tricks and tools that make it work.',
        'Adaptive equipment is like wearing glasses - it helps you do something your body can\'t do well on its own.',
      ],
      examples: [
        'After a stroke, you learn to dress using your strong arm to help your weak arm.',
        'With a broken leg, you learn to shower safely using a shower chair and grab bars.',
      ],
    },
    2: {
      level: 2,
      summary: 'ADL training encompasses systematic instruction in basic self-care and instrumental activities using therapeutic techniques, adaptive strategies, and assistive devices to maximize functional independence.',
      explanation: `ADL training is a core component of occupational therapy that focuses on helping people regain or maintain their ability to perform daily activities. It addresses both Basic ADLs (BADLs) and Instrumental ADLs (IADLs).

**Categories of Daily Living Activities:**

**Basic ADLs (BADLs):**
| Activity | Components |
|----------|------------|
| Bathing | Showering, bathing, washing body parts |
| Dressing | Upper and lower body, fasteners, shoes |
| Eating | Using utensils, bringing food to mouth |
| Toileting | Transfers, hygiene, clothing management |
| Grooming | Hair care, dental care, shaving, makeup |
| Functional mobility | Bed mobility, transfers, ambulation |

**Instrumental ADLs (IADLs):**
| Activity | Components |
|----------|------------|
| Meal preparation | Planning, cooking, cleanup |
| Household management | Cleaning, laundry, organization |
| Financial management | Budgeting, paying bills, banking |
| Medication management | Organizing, taking medications correctly |
| Community mobility | Driving, using public transportation |
| Shopping | Making lists, navigating stores, carrying items |

**ADL Training Approaches:**

**1. Remediation**
- Practicing the actual activity to improve skill
- Strengthening weak muscles used in ADLs
- Improving coordination and motor control
- Building endurance for daily tasks

**2. Compensation/Adaptation**
- Changing HOW the activity is done
- Using adaptive equipment
- Modifying the environment
- Using one-handed techniques

**3. Education**
- Energy conservation techniques
- Joint protection principles
- Safety awareness
- Task simplification

**Common Adaptive Equipment:**

*Dressing:*
- Sock aid, long-handled shoehorn
- Button hook, zipper pull
- Dressing stick
- Elastic shoelaces

*Bathing:*
- Shower chair or bench
- Handheld showerhead
- Long-handled sponge
- Grab bars

*Eating:*
- Built-up utensils
- Plate guards
- Rocker knife
- Non-slip mat

*Grooming:*
- Electric razor
- Suction brush for one-handed use
- Long-handled comb

**One-Handed Techniques:**
After stroke or arm injury, people learn to:
- Dress: affected arm first when dressing, last when undressing
- Tie shoes: one-handed method or elastic laces
- Cut food: rocker knife technique
- Open containers: stabilization strategies`,
      keyTerms: [
        { term: 'BADL', definition: 'Basic Activities of Daily Living - fundamental self-care tasks', pronunciation: 'BAY-del' },
        { term: 'IADL', definition: 'Instrumental Activities of Daily Living - more complex daily tasks', pronunciation: 'EYE-ay-del' },
        { term: 'remediation', definition: 'Treatment approach focused on restoring underlying abilities' },
        { term: 'compensation', definition: 'Treatment approach using alternative methods to accomplish tasks' },
        { term: 'energy conservation', definition: 'Techniques to accomplish activities with less fatigue' },
      ],
      analogies: [
        'Adaptive equipment is like a shortcut app on your phone - it lets you do the same task more efficiently.',
        'One-handed techniques are like learning to type with one hand - different method, same result.',
      ],
    },
    3: {
      level: 3,
      summary: 'ADL training integrates task analysis, grading principles, standardized assessment, and evidence-based intervention strategies to optimize functional independence across self-care and instrumental activity domains.',
      explanation: `## Assessment of ADL Performance

**Standardized Assessments:**

| Assessment | Domain | Format | Scoring |
|------------|--------|--------|---------|
| Functional Independence Measure (FIM) | BADL, mobility, cognition | 18 items | 1-7 scale |
| Barthel Index | BADL, mobility | 10 items | 0-100 total |
| Katz Index | BADL | 6 items | Independent/dependent |
| Lawton IADL Scale | IADL | 8 items | 0-8 total |
| COPM | Client priorities | Interview | 1-10 performance/satisfaction |
| AMPS | ADL quality | Observation | Logit scores |

**FIM Scoring Levels:**
- 7: Complete independence
- 6: Modified independence (device, extra time)
- 5: Supervision or setup
- 4: Minimal assist (75%+ patient effort)
- 3: Moderate assist (50-74% patient effort)
- 2: Maximal assist (25-49% patient effort)
- 1: Total assist (<25% patient effort)

## Task Analysis and Grading

**Activity Analysis Components:**
- Objects used and their properties
- Space demands
- Social demands
- Sequencing and timing
- Required actions
- Required body functions
- Required body structures

**Grading Strategies:**
- Simplify → complex task components
- Familiar → novel activities
- Stable → dynamic environment
- Structured → unstructured context
- Part → whole task practice

## Condition-Specific ADL Training

**Stroke/Hemiplegia:**
- Affected extremity positioning and incorporation
- One-handed techniques
- Visual-perceptual compensation strategies
- Safety awareness training

**Spinal Cord Injury:**

| Level | ADL Expectations |
|-------|------------------|
| C4 | Dependent; adaptive equipment with assist |
| C5 | Setup assist for feeding, grooming with devices |
| C6 | Independent feeding/grooming; assist dressing |
| C7 | Independent most ADLs with equipment |
| C8-T1 | Independent ADLs; may use equipment |
| Paraplegia | Independent; wheelchair level |

**Traumatic Brain Injury:**
- Cognitive strategy training
- External memory aids
- Task sequencing support
- Safety and judgment training

**Orthopedic Conditions:**
- Joint protection techniques
- Precaution compliance (hip, spine)
- Assistive device use
- Energy conservation

## Intervention Strategies

**Motor Learning Principles Applied:**
- Task-specific practice
- Variable practice conditions
- Appropriate feedback schedules
- Distributed practice sessions

**Cognitive Approaches:**
- Errorless learning
- Spaced retrieval
- Chaining (forward/backward)
- External cuing systems

**Environmental Modification:**
- Bathroom adaptations
- Kitchen organization
- Bedroom setup
- Lighting optimization

## Documentation

**Goal Writing for ADLs:**
- Occupation-focused
- Measurable (FIM levels often used)
- Time-bound
- Client-centered

Example: "Patient will independently don lower body clothing using adaptive equipment within 10 minutes, with FIM score of 6, in 4 weeks."

**Progress Notes:**
- Level of assistance required
- Equipment used
- Cueing needs
- Time to complete
- Quality of performance`,
      keyTerms: [
        { term: 'FIM', definition: 'Functional Independence Measure - standardized ADL assessment tool', pronunciation: 'fim' },
        { term: 'activity analysis', definition: 'Systematic breakdown of activity demands and requirements' },
        { term: 'grading', definition: 'Systematically adjusting activity demands to match patient abilities' },
        { term: 'chaining', definition: 'Teaching technique breaking activities into steps taught sequentially' },
        { term: 'errorless learning', definition: 'Teaching approach minimizing errors during skill acquisition' },
        { term: 'hip precautions', definition: 'Movement restrictions after hip replacement to prevent dislocation' },
      ],
      clinicalNotes: 'FIM scores drive rehabilitation reimbursement and are critical for documentation. Task-specific practice is more effective than component training for ADL outcomes. Consider cognitive status when selecting teaching approach - errorless learning is preferable for patients with memory impairment.',
    },
    4: {
      level: 4,
      summary: 'ADL training integrates motor learning science, cognitive rehabilitation principles, and assistive technology within evidence-based protocols tailored to diagnostic populations and individual functional profiles.',
      explanation: `## Evidence-Based ADL Intervention

**Research Support by Approach:**

*Strong Evidence:*
- Task-specific training for ADL improvement
- Constraint-induced movement therapy for upper extremity ADL
- Cognitive strategy training (CO-OP approach)
- Assistive technology for appropriate candidates

*Moderate Evidence:*
- Mirror therapy for upper extremity function
- Mental practice combined with physical practice
- Environmental modification
- Caregiver training

*Emerging/Limited Evidence:*
- Virtual reality ADL training
- Robotic-assisted training for ADLs
- Brain-computer interface applications

## Advanced Assessment

**Performance-Based Assessment:**
- Assessment of Motor and Process Skills (AMPS)
  - Standardized ADL observation
  - Motor and process skill analysis
  - Rasch-analyzed measures

- Performance Assessment of Self-Care Skills (PASS)
  - FM, IADL, mobility tasks
  - Three scoring domains: independence, safety, outcome

**Executive Function Impact:**
- Executive Function Performance Test (EFPT)
  - Four IADL tasks
  - Measures executive function in real activities
  - Cueing levels scored

## Motor Learning Application

**Practice Structure:**
- Blocked vs. random practice
- Massed vs. distributed practice
- Part vs. whole task practice
- Mental vs. physical practice

**Feedback:**
- Knowledge of results vs. knowledge of performance
- Frequency and timing considerations
- Fading feedback schedules
- Intrinsic vs. extrinsic feedback

**Transfer:**
- Near transfer: similar tasks/contexts
- Far transfer: different tasks/contexts
- Generalization strategies
- Variable practice for transfer

## Cognitive Rehabilitation Integration

**Strategy Training:**
- Goal-Plan-Do-Check framework
- Domain-specific strategies
- Metacognitive awareness
- Self-monitoring skills

**External Aids:**
- Memory notebooks
- Smartphone applications
- Environmental cues
- Checklists and schedules

**Dual-Task Training:**
- ADL performance while managing cognitive load
- Progressive complexity
- Real-world simulation

## Assistive Technology

**Assessment Frameworks:**
- HAAT: Human Activity Assistive Technology
- MPT: Matching Person and Technology
- SETT: Student Environment Tasks Tools

**High-Tech Solutions:**
- Smart home technology
- Voice-activated systems
- Robotic assistance
- Environmental control units

**Abandonment Prevention:**
- User-centered selection
- Training and follow-up
- Psychosocial factors
- Practical considerations

## Population-Specific Protocols

**Stroke Upper Extremity:**
- Intensity: 2-3 hours/day evidence-supported
- Constraint-induced movement therapy criteria
- Task-oriented training protocols
- Bilateral training approaches

**Dementia:**
- Errorless learning application
- Spaced retrieval technique
- Environmental modification emphasis
- Caregiver training integration

**Parkinson's Disease:**
- External cueing strategies
- Amplitude-based training (LSVT-BIG)
- Dual-task considerations
- On/off medication timing

## Caregiver Training

**Components:**
- Safe assist techniques
- Cueing strategies
- Environmental setup
- Emergency procedures
- Self-care for caregivers

**Evidence:**
- Reduces caregiver burden
- Improves patient outcomes
- Cost-effective intervention
- Essential for discharge success`,
      keyTerms: [
        { term: 'AMPS', definition: 'Assessment of Motor and Process Skills - standardized observational measure of ADL quality' },
        { term: 'EFPT', definition: 'Executive Function Performance Test - assessment measuring executive function during IADLs' },
        { term: 'near transfer', definition: 'Application of learned skills to similar tasks or contexts' },
        { term: 'HAAT model', definition: 'Human Activity Assistive Technology - framework for AT assessment and selection' },
        { term: 'spaced retrieval', definition: 'Learning technique using progressively longer intervals between practice' },
        { term: 'environmental control unit', definition: 'Device allowing control of home electronics/appliances for people with physical limitations' },
      ],
      clinicalNotes: 'Task-specific practice produces better outcomes than impairment-focused training for ADL performance. High intensity (hours per day) is associated with better stroke outcomes but must be balanced with practical constraints. Assistive technology abandonment rates are high - careful assessment and follow-up are essential.',
    },
    5: {
      level: 5,
      summary: 'Contemporary ADL training integrates precision assessment, technology-enhanced intervention, implementation science, and healthcare system considerations within person-centered frameworks addressing participation and quality of life.',
      explanation: `## Precision ADL Rehabilitation

**Individual Profiling:**
- Motor capability assessment
- Cognitive profile
- Psychosocial factors
- Environmental context
- Personal goals and values

**Predictive Modeling:**
- Outcome prediction based on assessment
- Treatment response identification
- Resource allocation optimization
- Discharge planning guidance

**Biomarker Integration:**
- Neuroimaging for prognosis
- Neurophysiological measures
- Genetic factors in recovery
- Emerging precision approaches

## Technology-Enhanced ADL Training

**Virtual Reality:**
- Simulated home environments
- Safe error experience
- Unlimited practice opportunities
- Engagement enhancement

**Robotics:**
- Upper extremity assist devices
- ADL-specific training robots
- Exoskeletons for mobility ADLs
- Evidence base developing

**Wearables:**
- Activity monitoring
- Movement quality assessment
- Real-time feedback
- Remote monitoring

**AI Applications:**
- Automated assessment
- Personalized intervention selection
- Progress prediction
- Adaptive difficulty adjustment

## Healthcare System Integration

**Value-Based Care:**
- ADL outcomes as quality metrics
- Cost-effectiveness evidence
- Episode-of-care models
- Performance benchmarking

**Care Transitions:**
- Acute to rehabilitation
- Inpatient to home
- Information transfer
- Outcome tracking across settings

**Reimbursement Considerations:**
- FIM-based payment systems
- Documentation requirements
- Medical necessity justification
- Appeal processes

## Implementation Science

**Evidence-Practice Gaps:**
- Intensity recommendations vs. reality
- Technology availability
- Training and competency
- Resource constraints

**Implementation Strategies:**
- Clinical decision support
- Protocol standardization
- Quality improvement initiatives
- Outcome feedback systems

## Participation and Quality of Life

**Beyond Basic ADLs:**
- Participation focus
- Role resumption
- Community integration
- Life satisfaction

**ICF Framework Application:**
- Body function/structure
- Activity (ADL performance)
- Participation (societal roles)
- Environmental factors
- Personal factors

**Outcome Expansion:**
- Patient-reported outcomes
- Participation measures
- Quality of life assessments
- Goal attainment scaling

## Global Perspectives

**WHO Rehabilitation 2030:**
- Universal access goals
- Integration with health systems
- Workforce development
- Resource optimization

**Low-Resource Settings:**
- Task-shifting approaches
- Low-cost adaptive equipment
- Community-based programs
- Family training emphasis

**Cultural Considerations:**
- Occupation meaning variation
- Family roles in care
- Independence vs. interdependence
- Adaptation of assessments

## Research Frontiers

**Mechanisms:**
- Neural substrates of ADL performance
- Plasticity and ADL recovery
- Cognitive-motor interactions
- Learning mechanisms

**Intervention Development:**
- Optimal dosing
- Technology integration
- Personalized approaches
- Novel interventions

**Implementation:**
- Knowledge translation
- Sustainment research
- Scale-up studies
- Policy impact

## Expert Practice Considerations

**Complex Cases:**
- Multiple comorbidities
- Cognitive-physical interaction
- Psychosocial complexity
- Limited resources

**Clinical Reasoning:**
- Hypothesis testing
- Outcome monitoring
- Treatment modification
- Goal revision

**Leadership:**
- Evidence-based practice promotion
- Quality improvement
- Mentorship
- Advocacy`,
      keyTerms: [
        { term: 'precision rehabilitation', definition: 'Approach matching interventions to individual profiles based on assessment and predictive modeling' },
        { term: 'goal attainment scaling', definition: 'Individualized outcome measure where goals are rated on standardized attainment scale' },
        { term: 'ICF', definition: 'International Classification of Functioning, Disability and Health - WHO framework', pronunciation: 'I-C-F' },
        { term: 'task-shifting', definition: 'Delegation of tasks to less specialized workers to increase service access' },
        { term: 'knowledge translation', definition: 'Process of moving research evidence into clinical practice' },
        { term: 'participation', definition: 'Involvement in life situations beyond basic activity performance' },
      ],
      clinicalNotes: `Key considerations for advanced ADL practice:
1. Move beyond independence to participation and quality of life outcomes
2. Technology offers promise but requires careful implementation
3. Healthcare system factors significantly impact intervention delivery
4. Cultural humility essential for person-centered practice
5. Implementation science provides tools for evidence-practice gaps
6. Interprofessional collaboration enhances complex case management
7. Advocate for appropriate intensity and duration of rehabilitation`,
    },
  },

  media: [
    {
      id: 'fim-scoring-diagram',
      type: 'diagram',
      filename: 'fim-scoring-diagram.svg',
      title: 'FIM Scoring Levels',
      description: 'Visual representation of Functional Independence Measure scoring levels 1-7',
    },
    {
      id: 'adaptive-equipment-gallery',
      type: 'image',
      filename: 'adaptive-equipment-gallery.jpg',
      title: 'Common ADL Adaptive Equipment',
      description: 'Photo collection of common dressing, bathing, and eating adaptive devices',
    },
  ],

  citations: [
    {
      id: 'pedretti-ot',
      type: 'textbook',
      title: 'Pedretti\'s Occupational Therapy: Practice Skills for Physical Dysfunction',
      authors: ['Pendleton, H.M.', 'Schultz-Krohn, W.'],
      source: 'Elsevier',
    },
    {
      id: 'guide-uniform-data',
      type: 'textbook',
      title: 'Guide for the Uniform Data Set for Medical Rehabilitation',
      authors: ['Uniform Data System for Medical Rehabilitation'],
      source: 'UB Foundation Activities',
    },
  ],

  crossReferences: [
    { targetId: 'rehab-occupational-therapy-principles', targetType: 'topic', relationship: 'parent', label: 'OT Principles' },
    { targetId: 'rehab-adaptive-equipment', targetType: 'topic', relationship: 'related', label: 'Adaptive Equipment' },
    { targetId: 'rehab-home-modifications', targetType: 'topic', relationship: 'related', label: 'Home Modifications' },
  ],

  tags: {
    systems: ['neurological', 'musculoskeletal'],
    topics: ['rehabilitation', 'occupational therapy', 'ADL', 'self-care', 'independence'],
    clinicalRelevance: 'critical',
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

export default adlTraining;
