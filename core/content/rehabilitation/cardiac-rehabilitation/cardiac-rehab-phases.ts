/**
 * Cardiac Rehabilitation Phases - Educational Content
 */

import { EducationalContent } from '../../types';

export const cardiacRehabPhases: EducationalContent = {
  id: 'rehab-cardiac-rehab-phases',
  type: 'concept',
  name: 'Cardiac Rehabilitation Phases',
  alternateNames: ['Phases of Cardiac Rehab', 'Cardiac Recovery Stages'],

  levels: {
    1: {
      level: 1,
      summary: 'Cardiac rehabilitation has three phases that help you go from being in the hospital to exercising on your own at home.',
      explanation: `After a heart problem, you go through different steps to get better. These are called phases.

**Phase 1: In the Hospital**
- Starts right after your heart event
- You begin moving as soon as it is safe
- Learn about your medications and what to expect

**Phase 2: Outpatient Program**
- You come to a special center for exercise
- Staff watch your heart while you work out
- You learn about healthy eating and lifestyle
- Usually lasts 2-3 months

**Phase 3: On Your Own**
- You exercise at home or at a gym
- You keep up the healthy habits you learned
- Some people join maintenance programs

Each phase prepares you for the next one!`,
      keyTerms: [
        { term: 'phase', definition: 'A stage or step in a process' },
        { term: 'inpatient', definition: 'When you are staying in the hospital' },
        { term: 'outpatient', definition: 'When you come to a clinic but do not stay overnight' },
      ],
      analogies: [
        'The phases are like learning to swim - first you learn in shallow water with lots of help, then gradually move to deeper water on your own.',
      ],
      examples: [
        'After heart surgery, someone walks in the hospital halls (Phase 1), then exercises at a rehab center (Phase 2), then continues at their local gym (Phase 3).',
      ],
    },
    2: {
      level: 2,
      summary: 'Cardiac rehabilitation progresses through three phases: inpatient mobilization and education, supervised outpatient exercise with monitoring, and independent maintenance of lifestyle changes.',
      explanation: `Cardiac rehabilitation is delivered in phases, each with specific goals and activities.

**Phase I: Inpatient (Hospital)**

**When:** During hospitalization after cardiac event or surgery

**Goals:**
- Early mobilization
- Prevent complications of bed rest
- Patient and family education
- Assess appropriateness for outpatient rehab

**Activities:**
- Sitting, standing, walking in room and halls
- Self-care activities
- Education on disease, medications, warning signs
- Discharge planning

**Phase II: Outpatient (Supervised)**

**When:** Begins 1-3 weeks after discharge, lasts 6-12 weeks

**Goals:**
- Improve cardiovascular fitness
- Modify risk factors
- Return to normal activities

**Activities:**
- Supervised exercise 3 times per week
- ECG monitoring during exercise
- Education sessions
- Nutritional counseling
- Psychological support

**Phase III: Maintenance (Independent)**

**When:** Begins after completing Phase II, continues lifelong

**Goals:**
- Maintain fitness gains
- Continue risk factor control
- Prevent recurrence

**Activities:**
- Independent exercise (home, gym, community)
- Periodic check-ups
- Support groups
- Some programs offer maintenance classes

**Transition Between Phases:**
- Clear criteria for progression
- Individualized based on response
- Ongoing communication with healthcare team`,
      keyTerms: [
        { term: 'ECG monitoring', definition: 'Watching the heart rhythm during exercise for safety' },
        { term: 'Phase I', definition: 'Hospital-based initial rehabilitation phase' },
        { term: 'Phase II', definition: 'Supervised outpatient rehabilitation phase' },
        { term: 'Phase III', definition: 'Independent maintenance phase' },
      ],
      analogies: [
        'Phase II is like driver\'s education - you practice with supervision before driving alone.',
      ],
    },
    3: {
      level: 3,
      summary: 'The three-phase cardiac rehabilitation model systematically progresses patients from acute inpatient stabilization through monitored outpatient exercise to independent maintenance, with evidence-based criteria guiding transitions.',
      explanation: `## Phase I: Inpatient Rehabilitation

**Setting:** Hospital cardiac unit, step-down unit, ICU as appropriate

**Timeline:** During hospitalization (typically 3-7 days post-event)

**Components:**
- Early mobilization protocol
- Activities of daily living assessment
- Patient education
- Risk stratification
- Referral for outpatient rehabilitation

**Mobilization Progression:**
| Day | Activity Level |
|-----|----------------|
| 1-2 | Bed mobility, sitting on edge of bed |
| 2-3 | Sitting in chair, room ambulation |
| 3-5 | Hall ambulation, stairs |
| 5+ | Independent ambulation, discharge preparation |

**Education Topics:**
- Understanding the cardiac event
- Medication purposes and schedules
- Warning signs requiring medical attention
- Activity guidelines after discharge
- Risk factor overview

## Phase II: Outpatient Rehabilitation

**Setting:** Hospital-based or free-standing cardiac rehab center

**Timeline:** Typically 36 sessions over 12 weeks (Medicare standard)

**Exercise Training:**
- Warm-up (5-10 min)
- Aerobic conditioning (20-45 min)
- Cool-down (5-10 min)
- Resistance training (after initial aerobic phase)

**Monitoring:**
- Continuous ECG telemetry initially
- Blood pressure before and after
- RPE and symptom assessment
- Progressing to intermittent monitoring

**Education Curriculum:**
- Disease pathophysiology
- Nutrition and diet
- Physical activity beyond program
- Stress management
- Medications and adherence
- Psychosocial adjustment

**Risk Stratification for Monitoring:**
| Risk Level | Characteristics | ECG Monitoring |
|------------|-----------------|----------------|
| Low | Normal EF, no complications | 6-12 sessions |
| Moderate | EF 40-49%, controlled arrhythmias | 12-18 sessions |
| High | EF <40%, significant ischemia | 18-36 sessions |

## Phase III: Maintenance

**Setting:** Community gym, home, maintenance program

**Timeline:** Lifelong

**Goals:**
- Sustain fitness improvements
- Maintain risk factor control
- Support long-term adherence

**Options:**
- Independent exercise
- Community fitness programs
- Cardiac rehab maintenance programs
- Online or app-based support`,
      keyTerms: [
        { term: 'risk stratification', definition: 'Categorizing patients by likelihood of adverse events to guide monitoring intensity' },
        { term: 'telemetry', definition: 'Continuous remote monitoring of heart rhythm via wireless ECG' },
        { term: 'METs', definition: 'Metabolic equivalents - measure of energy expenditure and exercise capacity' },
      ],
      clinicalNotes: 'Medicare covers up to 36 supervised sessions of Phase II cardiac rehabilitation. For eligible conditions, Intensive Cardiac Rehabilitation (ICR) programs may cover up to 72 sessions.',
    },
    4: {
      level: 4,
      summary: 'Contemporary cardiac rehabilitation models are evolving beyond the traditional three-phase structure to include flexible delivery modes, extended monitoring, and integration with digital health platforms while maintaining evidence-based core components.',
      explanation: `## Phase I Optimization

**Very Early Mobilization:**
- Evidence supports mobilization within 12-24 hours post-PCI
- Post-CABG: mobilization by day 1 with sternal precautions
- HF: Early mobility improves outcomes

**Standardized Education:**
- Teach-back methodology
- Health literacy considerations
- Caregiver inclusion
- Discharge checklist utilization

**Automatic Referral:**
- Significantly increases enrollment
- Electronic health record integration
- Standing orders by diagnosis
- Staff education and accountability

## Phase II Evolution

**Alternative Delivery Models:**

**Home-Based Programs:**
- Equal efficacy to center-based
- Increases access
- Evidence: Cochrane review supports equivalence
- Models: Heart Manual, MULTIFIT

**Hybrid Programs:**
- Combines center and home-based
- Initial supervised sessions
- Transition to remote monitoring
- Telehealth check-ins

**Virtual/Telehealth:**
- Video-supervised exercise
- Remote monitoring technology
- Mobile app engagement
- Accelerated by COVID-19

**Extended Programs:**

**Intensive Cardiac Rehabilitation (ICR):**
- 72 sessions covered by Medicare
- Enhanced lifestyle intervention
- Examples: Pritikin, Ornish programs
- More intensive dietary and stress components

**Duration Considerations:**
- Some benefit from >36 sessions
- Individualized based on progress
- Insurance coverage limitations

## Phase III Enhancement

**Maintenance Program Models:**
- Facility-based maintenance classes
- Remote monitoring with periodic visits
- Community partnerships (YMCA)
- Online support communities

**Technology Support:**
- Wearable devices for activity tracking
- Apps for exercise logging
- Telehealth maintenance visits
- Social media communities

**Long-Term Outcomes:**
- Sustainability of benefits
- Risk of decline without structure
- Re-enrollment for setbacks
- Booster interventions

## Special Populations

**Heart Failure:**
- HF-ACTION trial supports exercise
- Careful monitoring required
- Often requires modified progression
- Home-based options beneficial

**Post-Transplant:**
- Unique exercise considerations
- Denervated heart response
- Immunosuppression effects
- Specialized protocols

**Elderly/Frail:**
- Modified intensity
- Functional outcome focus
- Fall prevention integration
- Caregiver involvement

## Quality Metrics

**Process Measures:**
- Referral rates
- Enrollment rates
- Completion rates
- Session attendance

**Outcome Measures:**
- Functional capacity improvement
- Risk factor achievement
- Quality of life change
- Event rates (rehospitalization, mortality)`,
      keyTerms: [
        { term: 'ICR', definition: 'Intensive Cardiac Rehabilitation - extended program with enhanced lifestyle intervention' },
        { term: 'Heart Manual', definition: 'Structured home-based cardiac rehabilitation program developed in Scotland' },
        { term: 'HF-ACTION', definition: 'Heart Failure: A Controlled Trial Investigating Outcomes of Exercise Training' },
        { term: 'hybrid program', definition: 'Cardiac rehabilitation combining supervised and home-based components' },
      ],
      clinicalNotes: 'Home-based cardiac rehabilitation programs have been shown to be as effective as center-based programs in multiple meta-analyses, offering an important alternative for patients with access barriers. The Cochrane review found no difference in mortality, cardiac events, or quality of life.',
    },
    5: {
      level: 5,
      summary: 'Future cardiac rehabilitation models are trending toward personalized, continuous care paradigms integrating precision medicine, artificial intelligence-driven adaptation, and health system integration to optimize long-term cardiovascular outcomes.',
      explanation: `## Reimagining Phase Structure

**From Phases to Continuum:**
- Traditional phases may be artificial boundaries
- Risk-based rather than time-based progression
- Individualized duration and intensity
- Seamless transitions

**Precision Rehabilitation:**
- Phenotype-based programming
- Genetic factors in exercise response
- Biomarker-guided intensity
- Personalized risk factor targets

## Advanced Phase I

**Enhanced Recovery Protocols:**
- Preoperative prehabilitation
- Standardized recovery pathways
- Reduced length of stay goals
- Early risk stratification

**Digital Preparation:**
- Virtual pre-event education (elective procedures)
- App-based engagement before discharge
- Seamless data continuity

## Phase II Innovation

**Adaptive Algorithms:**
- AI-driven exercise prescription
- Real-time intensity adjustment
- Predictive analytics for response
- Automated progression

**Intensive Tracking:**
- Continuous physiological monitoring
- Wearable integration
- Activity outside sessions
- Sleep and recovery data

**Behavioral Science Integration:**
- Just-in-time adaptive interventions
- Gamification for engagement
- Social network leverage
- Personalized messaging

## Phase III Transformation

**Connected Care:**
- Ongoing remote monitoring
- Automated alerts for decline
- Proactive outreach
- Integration with primary care

**Community Integration:**
- Partnerships with fitness industry
- Workplace wellness programs
- Faith-based communities
- Peer support networks

**Long-Term Data:**
- Lifetime cardiovascular monitoring
- Population health management
- Registry participation
- Outcomes tracking

## Research Directions

**Key Questions:**
- Optimal program duration
- Dose-response relationships
- Cost-effective delivery models
- Long-term maintenance strategies
- Disparities reduction approaches

**Methodological Advances:**
- Pragmatic trials
- Adaptive designs
- Implementation science focus
- Real-world evidence utilization

## System Integration

**Value-Based Care:**
- Bundled payments including rehab
- Quality metrics alignment
- Accountable care organization integration
- Total cost of care consideration

**Health Information Exchange:**
- Seamless data sharing
- Automated referral systems
- Progress communication to PCPs
- Medication reconciliation integration

## Global Perspectives

**Low-Resource Settings:**
- Task-shifting models
- Community health worker delivery
- Mobile health solutions
- Essential medication focus

**International Variation:**
- Duration and intensity differences
- Reimbursement models
- Program structure variation
- Outcome benchmarking`,
      keyTerms: [
        { term: 'prehabilitation', definition: 'Rehabilitation interventions before a planned procedure to optimize recovery' },
        { term: 'just-in-time adaptive intervention', definition: 'Technology-delivered support triggered by real-time assessment of need' },
        { term: 'pragmatic trial', definition: 'Clinical trial designed to evaluate effectiveness in real-world conditions' },
        { term: 'task-shifting', definition: 'Redistributing healthcare tasks to less specialized workers to increase access' },
      ],
      clinicalNotes: 'The traditional three-phase model is evolving toward a more flexible, patient-centered continuum of care. Digital health technologies enable continuous engagement and monitoring that blur traditional phase boundaries. Future programs will likely be characterized by personalization, connectivity, and integration rather than discrete phases.',
    },
  },

  media: [
    {
      id: 'cardiac-rehab-phases-timeline',
      type: 'diagram',
      filename: 'cardiac-rehab-phases-timeline.svg',
      title: 'Cardiac Rehabilitation Phases Timeline',
      description: 'Visual timeline showing progression through phases I, II, and III',
    },
  ],

  citations: [
    {
      id: 'aacvpr-guidelines',
      type: 'textbook',
      title: 'Guidelines for Cardiac Rehabilitation and Secondary Prevention Programs',
      authors: ['AACVPR'],
      source: 'Human Kinetics',
    },
  ],

  crossReferences: [
    { targetId: 'rehab-cardiac-rehabilitation-program', targetType: 'topic', relationship: 'parent', label: 'Cardiac Rehabilitation Program' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['rehabilitation', 'cardiac', 'program phases'],
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

export default cardiacRehabPhases;
