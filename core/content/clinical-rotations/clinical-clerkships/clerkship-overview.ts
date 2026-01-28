/**
 * Clinical Clerkship Overview - Guide to Medical Student Clinical Rotations
 *
 * Educational content covering the structure, expectations, and strategies
 * for success in clinical clerkships during medical school.
 */

import { EducationalContent } from '../../types';

export const clerkshipOverview: EducationalContent = {
  id: 'education-clerkship-overview',
  type: 'concept',
  name: 'Clinical Clerkship Overview',
  alternateNames: ['Clinical Rotations', 'Core Clerkships', 'Clinical Training'],

  levels: {
    1: {
      level: 1,
      summary: 'Clinical clerkships are when medical students work in hospitals and clinics with real patients. This is when students learn how to actually be doctors by practicing under supervision.',
      explanation: `## What Are Clinical Clerkships?

Clinical clerkships are the part of medical school where students start working with real patients. Instead of sitting in classrooms, students go to hospitals and clinics to learn.

## When Do Clerkships Happen?

- Usually in the third and fourth years of medical school
- After learning the basics in years 1-2
- Before becoming a doctor (residency)

## What Students Do

**In the hospital:**
- Talk to patients about their health
- Help with physical exams
- Write notes about patients
- Present patients to their team
- Learn procedures

**They work with:**
- Doctors (attendings)
- Residents (doctors in training)
- Nurses and other staff

## The Main Clerkships

Most students must complete these:
- **Internal Medicine** - Adult diseases
- **Surgery** - Operations and surgical care
- **Pediatrics** - Children's health
- **OB/GYN** - Pregnancy and women's health
- **Psychiatry** - Mental health
- **Family Medicine** - Primary care
- **Neurology** - Brain and nerve diseases

Each rotation usually lasts 4-8 weeks.

## What Students Learn

- How to talk to patients
- How to examine patients
- How to figure out what's wrong
- How to suggest treatments
- How to work on a medical team

## Getting Evaluated

Students are graded on:
- How they work with patients
- What they know (shelf exams)
- Their professionalism
- How well they work with the team

## Tips for Success

- Be helpful and eager to learn
- Ask questions
- Be on time
- Study for your shelf exams
- Be kind to everyone`,
      keyTerms: [
        { term: 'clerkship', definition: 'A period of clinical training where medical students work with patients in hospitals or clinics' },
        { term: 'attending', definition: 'A fully trained doctor who supervises medical students and residents' },
        { term: 'resident', definition: 'A doctor who is completing additional training after medical school' },
        { term: 'shelf exam', definition: 'A standardized test at the end of each clerkship' },
      ],
      analogies: [
        'Clerkships are like student teaching for teachers - you practice the real job with supervision.',
        'Moving from classroom to clerkships is like going from flight simulators to actual flight training.',
        'The attending is like a coach watching the game from the sideline, ready to step in when needed.',
      ],
      examples: [
        'During her surgery rotation, a student watches and assists with operations while learning about surgical patients.',
        'On pediatrics, a student examines children during well-child visits and helps care for sick kids in the hospital.',
      ],
      patientCounselingPoints: [
        'Medical students are learning to be doctors and are always supervised by experienced physicians',
        'Teaching hospitals help train the next generation of doctors while providing excellent care',
      ],
    },

    2: {
      level: 2,
      summary: 'Clinical clerkships are required rotations in major medical specialties where students develop clinical skills through supervised patient care. Success requires balancing clinical learning, shelf exam preparation, and professional development.',
      explanation: `## Clinical Clerkship Structure

Clinical clerkships mark the transition from preclinical to clinical education, typically occurring in the third year of medical school.

## Core Clerkships

| Clerkship | Duration | Focus |
|-----------|----------|-------|
| Internal Medicine | 8-12 weeks | Adult inpatient/outpatient |
| Surgery | 6-8 weeks | Surgical care, OR exposure |
| Pediatrics | 6-8 weeks | Child health, development |
| OB/GYN | 6-8 weeks | Obstetrics, gynecology |
| Psychiatry | 6-8 weeks | Mental health |
| Family Medicine | 4-6 weeks | Primary care, outpatient |
| Neurology | 4 weeks | Neurologic conditions |

## Daily Responsibilities

**Morning Activities:**
- Pre-round (check on patients before rounds)
- Write daily progress notes
- Morning rounds with team
- Teaching conferences

**Afternoon/Evening:**
- Follow up on patients
- New admissions
- Procedures and learning
- Study for shelf exam
- Sign out to night team

## The Clinical Team

| Role | Responsibilities |
|------|------------------|
| Attending | Supervision, teaching, final decisions |
| Senior Resident | Team leadership, teaching |
| Junior Resident/Intern | Direct patient care |
| Medical Student | Learning, assisting, presentations |

## Assessment Components

**Clinical Evaluation:**
- Patient interaction
- Clinical reasoning
- Work ethic
- Professionalism
- Team participation

**Shelf Examination:**
- Standardized NBME exam
- End-of-rotation test
- Multiple choice format
- Tests clinical knowledge

**Final Grade:**
- Clinical evaluation: 50-60%
- Shelf exam: 30-40%
- Other factors: 10%

## Skills to Develop

**History Taking:**
- Complete, efficient histories
- Focused questioning
- Rapport building

**Physical Examination:**
- Thorough, organized exams
- Specialty-specific techniques
- Documentation of findings

**Presentations:**
- Oral case presentations
- Written notes (H&Ps, progress notes)
- Handoffs

**Clinical Reasoning:**
- Differential diagnosis
- Assessment and plan
- Evidence-based decisions

## Keys to Success

**Clinical Performance:**
| Do | Don't |
|----|-------|
| Be proactive | Wait to be told |
| Ask questions | Pretend to know |
| Arrive early | Be late |
| Follow up | Drop balls |
| Stay positive | Complain |

**Shelf Exam Preparation:**
- Study throughout rotation
- Use question banks (UWorld, Amboss)
- Review common conditions
- Integrate clinical experience

**Professionalism:**
- Respect all team members
- Maintain patient confidentiality
- Accept feedback gracefully
- Be reliable

## Electives and Sub-Internships

**Fourth Year:**
- Elective rotations
- Sub-internships (acting interns)
- Away rotations
- Interview season preparation`,
      keyTerms: [
        { term: 'pre-rounding', definition: 'Checking on patients before team rounds to gather updated information' },
        { term: 'H&P', definition: 'History and Physical - the comprehensive initial patient documentation' },
        { term: 'progress note', definition: 'Daily documentation of patient status and care plan' },
        { term: 'sub-internship', definition: 'An advanced rotation where students function at an intern level' },
        { term: 'away rotation', definition: 'A clinical rotation at another institution, often for residency exposure' },
      ],
      analogies: [
        'Pre-rounding is like doing homework before class - you come prepared to participate.',
        'Shelf exams are like final exams for each subject, testing what you learned on the rotation.',
        'A sub-internship is like being assistant manager before becoming manager - more responsibility to prepare for the next level.',
      ],
      examples: [
        'On internal medicine, a student follows 3-4 patients, writing daily notes and presenting on rounds each morning.',
        'A student studies 20-30 UWorld questions daily during their surgery rotation to prepare for the shelf exam.',
      ],
      patientCounselingPoints: [
        'Medical students on clerkships are supervised by experienced physicians while learning clinical skills',
        'Student involvement in your care is part of the training process that creates skilled doctors',
      ],
    },

    3: {
      level: 3,
      summary: 'Clinical clerkships provide structured clinical education through supervised patient care across core specialties. Success requires integration of clinical skill development, medical knowledge application, and professional identity formation while preparing for shelf examinations and residency selection.',
      explanation: `## Clerkship Education Framework

Clinical clerkships represent the transition from knowledge acquisition to knowledge application in authentic clinical environments.

## Educational Structure

**Clerkship Design Elements:**
| Element | Purpose |
|---------|---------|
| Clinical immersion | Authentic experience |
| Supervision | Safe learning |
| Didactics | Structured teaching |
| Assessment | Competency verification |

**Learning Environment Characteristics:**
- Variable (each day different)
- Authentic (real patients)
- High-stakes (patient safety)
- Time-pressured
- Team-based

## Core Competencies

**ACGME/Medical School Competencies:**
1. Patient Care
2. Medical Knowledge
3. Practice-Based Learning
4. Interpersonal/Communication Skills
5. Professionalism
6. Systems-Based Practice

**Skill Development Progression:**
| Phase | Focus |
|-------|-------|
| Early | Basic skills, orientation |
| Mid | Efficiency, integration |
| Late | Independence, complexity |

## Clinical Workflow Mastery

**Daily Structure:**
| Time | Activity |
|------|----------|
| 5:30-6:30 AM | Pre-round |
| 7:00-8:00 | Morning rounds |
| 8:00-12:00 | Patient care, OR |
| 12:00-1:00 | Conferences, teaching |
| 1:00-5:00 | Afternoon work |
| 5:00-6:00 | Sign-out |

**Note Writing:**
| Type | Content | Timing |
|------|---------|--------|
| H&P | Complete assessment | Admission |
| Progress note | Daily SOAP | Morning |
| Procedure note | Documentation | After procedure |
| Discharge summary | Care summary | Discharge |

## Assessment System

**Clinical Evaluation:**
| Domain | Assessment Method |
|--------|-------------------|
| Patient care | Direct observation |
| Medical knowledge | Questions, shelf |
| Communication | Observed encounters |
| Professionalism | Behavioral observation |

**Shelf Examination Preparation:**
- Integrate with clinical learning
- Question banks (UWorld, Amboss)
- Review texts (Step Up, Case Files)
- Practice application questions

**Grade Calculation:**
| Component | Weight | How to Excel |
|-----------|--------|--------------|
| Clinical | 50-60% | Initiative, skill |
| Shelf | 30-40% | Consistent study |
| Other | 10% | Participation, professionalism |

## Specialty-Specific Strategies

**Internal Medicine:**
- Focus on pathophysiology
- Learn systematic approach
- Master oral presentations
- Develop differential thinking

**Surgery:**
- Learn OR etiquette
- Know your patients' anatomy
- Be ready to answer questions
- Demonstrate suturing skills

**Pediatrics:**
- Adapt to different ages
- Learn developmental milestones
- Know vaccine schedules
- Communicate with parents

**OB/GYN:**
- Understand pregnancy physiology
- Learn delivery procedures
- Comfortable with sensitive exams
- Gynecologic pathology

**Psychiatry:**
- Mental status examination
- Safety assessment
- Medication knowledge
- Therapeutic communication

## Professional Development

**Building Your Reputation:**
- Reliability and consistency
- Proactive contribution
- Appropriate autonomy
- Receptive to feedback

**Handling Challenges:**
| Challenge | Strategy |
|-----------|----------|
| Difficult feedback | Listen, reflect, respond |
| Team conflict | Professionalism, perspective |
| Work-life balance | Boundaries, efficiency |
| Moral distress | Support, reflection |

## Residency Preparation

**Clinical Year for Applications:**
- Strong evaluations
- Good shelf scores
- Letters of recommendation
- Career exploration

**Strategy:**
- Identify target specialty early
- Seek relevant experiences
- Build relationships for letters
- Document achievements`,
      keyTerms: [
        { term: 'ACGME competencies', definition: 'Six core competencies defining physician training outcomes' },
        { term: 'moral distress', definition: 'Stress from situations where one knows the right action but faces barriers to taking it' },
        { term: 'acting internship', definition: 'A rotation where students function with near-intern-level responsibility' },
        { term: 'entrustment', definition: 'The level of supervision required for a student to perform specific clinical activities' },
      ],
      analogies: [
        'Clinical clerkships are like apprenticeships - learning by doing under expert guidance.',
        'The progression through clerkship is like learning to drive - from supervised practice to independent operation.',
        'Building a reputation is like building credit - consistent reliable behavior compounds over time.',
        'Shelf exams are like comprehensive final exams for each rotation, testing clinical application.',
      ],
      examples: [
        'A student on medicine presents a patient with heart failure, generating a differential that impresses the attending and leads to a strong evaluation.',
        'By consistently arriving early and following up on patients, a surgery student earns the team\'s trust and more OR opportunities.',
      ],
      patientCounselingPoints: [
        'Medical student involvement is carefully supervised to ensure patient safety while providing educational experience',
        'Clinical clerkships are where future doctors develop the skills they\'ll use throughout their careers',
      ],
    },

    4: {
      level: 4,
      summary: 'Graduate-level understanding of clerkships encompasses educational theory, assessment methodology, and professional development. Optimal performance requires strategic integration of clinical learning, examination preparation, and career planning within the hidden curriculum of medical education.',
      explanation: `## Advanced Clerkship Framework

Graduate-level clerkship navigation requires understanding educational theory, assessment systems, and the professional formation process.

## Educational Theory Application

**Experiential Learning Theory:**
| Phase | Application |
|-------|-------------|
| Concrete experience | Patient encounters |
| Reflective observation | Case review |
| Abstract conceptualization | Pattern recognition |
| Active experimentation | Clinical application |

**Legitimate Peripheral Participation:**
- Start at periphery of practice
- Gradually increase participation
- Community of practice membership
- Identity formation through participation

**Cognitive Apprenticeship:**
| Element | Clinical Application |
|---------|---------------------|
| Modeling | Observe expert practice |
| Coaching | Guided skill development |
| Scaffolding | Supported independence |
| Articulation | Verbalize reasoning |
| Reflection | Self-assessment |
| Exploration | Autonomous practice |

## Assessment Science

**Workplace-Based Assessment:**
| Method | Measures |
|--------|----------|
| Mini-CEX | Clinical encounter skills |
| DOPS | Procedural competence |
| CBD | Clinical reasoning |
| MSF | Professionalism |

**Validity Considerations:**
- Sampling adequacy
- Rater training
- Criterion definition
- Consequential validity

**Competency-Based Assessment:**
- Entrustable Professional Activities (EPAs)
- Milestones
- Progressive entrustment
- Competency committee review

## Hidden Curriculum Navigation

**Unwritten Rules:**
| Area | Implicit Expectations |
|------|----------------------|
| Team dynamics | Know your role, adapt |
| Communication | Different audiences, styles |
| Work ethic | Exceed stated minimums |
| Initiative | Anticipate needs |

**Political Intelligence:**
- Read team dynamics
- Adapt to different attendings
- Navigate hierarchy appropriately
- Build strategic relationships

## Optimization Strategies

**Clinical Performance:**
| Strategy | Implementation |
|----------|----------------|
| Preparation | Pre-read patients, topics |
| Presence | Engaged, attentive |
| Participation | Active, appropriate |
| Follow-through | Complete all tasks |

**Time Management:**
- Efficient pre-rounding
- Protected study time
- Integration of learning
- Recovery periods

**Shelf Exam Excellence:**
| Resource | Use |
|----------|-----|
| UWorld | Primary questions |
| Case Files | Quick review |
| Step Up | Focused reading |
| OME | Conceptual understanding |

## Professional Identity Formation

**Stages of Development:**
1. Pre-contemplation: Absorbing medicine
2. Contemplation: Considering physician role
3. Action: Adopting physician behaviors
4. Maintenance: Consolidating identity

**Socialization Processes:**
- Role modeling
- Formal teaching
- Informal experiences
- Reflection

## Specialty Selection

**Exploration Framework:**
| Factor | Assessment Method |
|--------|-------------------|
| Interest | Rotation experience |
| Fit | Self-reflection |
| Competitiveness | Research, advising |
| Lifestyle | Specialty characteristics |

**Strategic Timing:**
- Explore broadly early
- Focus by end of third year
- Sub-internship selection
- Application strategy

## Letter of Recommendation Strategy

**Building Relationships:**
- Consistent engagement
- Quality patient care
- Intellectual curiosity
- Professional behavior

**Requesting Letters:**
- Timing (end of rotation or soon after)
- Provide materials (CV, personal statement draft)
- Appropriate ask (attendings who know you)
- Follow up professionally

## Feedback Integration

**Receiving Feedback:**
| Type | Response |
|------|----------|
| Positive | Thank, internalize |
| Constructive | Listen, clarify, implement |
| Unfair | Professional response, seek perspective |

**Self-Assessment:**
- Pre-rotation goals
- Mid-rotation check
- Post-rotation reflection
- Portfolio development`,
      keyTerms: [
        { term: 'hidden curriculum', definition: 'The unwritten, informal lessons and values transmitted in educational settings' },
        { term: 'legitimate peripheral participation', definition: 'Learning through gradual participation in a community of practice' },
        { term: 'cognitive apprenticeship', definition: 'Learning model emphasizing observation, coaching, and guided practice' },
        { term: 'Mini-CEX', definition: 'Mini Clinical Evaluation Exercise - brief observed clinical encounter assessment' },
        { term: 'professional identity formation', definition: 'The process of developing a sense of oneself as a physician' },
      ],
      analogies: [
        'The hidden curriculum is like the unwritten rules of a workplace - essential to know but rarely stated.',
        'Legitimate peripheral participation is like joining a band - you start with small parts and gradually take on bigger roles.',
        'Professional identity formation is like growing into a uniform - it gradually fits better and feels more natural.',
        'Navigating attendings is like adjusting to different coaches - each has different expectations and styles.',
      ],
      examples: [
        'A student recognizes the hidden curriculum expectation to arrive 30 minutes before stated start time, earning positive evaluations for reliability.',
        'Using experiential learning theory, a student actively reflects on each patient encounter, identifying patterns that improve future performance.',
      ],
      patientCounselingPoints: [
        'Medical education involves both formal curriculum and professional formation through supervised practice',
        'Student assessment ensures competence before independent practice',
      ],
    },

    5: {
      level: 5,
      summary: 'Professional mastery of clerkship education integrates educational theory, assessment science, and career development strategy. Expert medical students optimize learning environments, navigate institutional dynamics, and strategically position themselves for residency while developing professional identity.',
      explanation: `## Professional Clerkship Mastery

Expert-level clerkship navigation synthesizes educational science, professional formation theory, and strategic career planning.

## Educational Theory Deep Dive

**Situated Learning Theory:**
| Concept | Application |
|---------|-------------|
| Authentic context | Real patient care |
| Social participation | Team membership |
| Identity development | Becoming a physician |
| Meaning negotiation | Understanding practice |

**Communities of Practice:**
- Shared domain (medicine)
- Shared practice (clinical care)
- Shared community (healthcare team)
- Boundaries and brokers

**Transformative Learning:**
- Disorienting dilemmas
- Critical reflection
- Perspective transformation
- Identity revision

## Assessment Theory Application

**Programmatic Assessment:**
| Principle | Application |
|-----------|-------------|
| Multiple methods | Varied assessment tools |
| Multiple assessors | Different perspectives |
| Over time | Longitudinal picture |
| Low-stakes informing high-stakes | Continuous feedback |

**Trustworthiness in Assessment:**
- Credibility (confidence in findings)
- Transferability (applicability)
- Dependability (consistency)
- Confirmability (neutrality)

## Learning Environment Optimization

**Psychological Safety:**
- Safe to ask questions
- Safe to make mistakes
- Safe to be vulnerable
- Safe to challenge

**Learning Climate Factors:**
| Factor | Student Action |
|--------|----------------|
| Autonomy support | Seek appropriate independence |
| Competence support | Request feedback |
| Relatedness | Build relationships |

## Strategic Career Planning

**Early Match Planning:**
| Year | Actions |
|------|---------|
| M2 | Explore, shadow |
| M3 | Experience rotations, identify interests |
| M3/4 | Decide specialty, research |
| M4 | Sub-Is, applications |

**Competitive Positioning:**
| Factor | Development Strategy |
|--------|---------------------|
| Grades | Clinical excellence, shelf scores |
| Board scores | Strategic preparation |
| Research | Meaningful involvement |
| Letters | Relationship cultivation |
| Experiences | Strategic selection |

## Institutional Navigation

**Stakeholder Relationships:**
| Stakeholder | Approach |
|-------------|----------|
| Attendings | Respect, engagement |
| Residents | Collegiality, support |
| Nurses | Collaboration, respect |
| Administration | Professionalism, compliance |

**System Awareness:**
- Understand institutional culture
- Know decision-making processes
- Identify key influencers
- Navigate politics appropriately

## Advanced Professional Formation

**Reflective Practice:**
| Level | Practice |
|-------|----------|
| Technical | Skill refinement |
| Practical | Clinical judgment |
| Critical | Values and systems |

**Moral Development:**
- Ethical reasoning development
- Moral distress navigation
- Values clarification
- Professional courage

## Residency Application Excellence

**Application Timeline:**
| Date | Action |
|------|--------|
| March-May M3 | Decide specialty |
| June-August | CV, PS drafts, letters |
| September | ERAS submission |
| October-January | Interviews |
| February | Rank lists |
| March | Match |

**Interview Performance:**
- Self-presentation
- Program evaluation
- Question preparation
- Follow-up strategy

## Wellness Integration

**Sustainable Performance:**
| Domain | Strategy |
|--------|----------|
| Physical | Sleep, exercise, nutrition |
| Emotional | Support, processing |
| Intellectual | Curiosity, growth |
| Social | Connection, belonging |

**Burnout Prevention:**
- Early recognition
- Support seeking
- Boundary maintenance
- Purpose reconnection

## Transition Preparation

**Intern Readiness:**
| Domain | Development |
|--------|-------------|
| Clinical skills | Competence verification |
| Knowledge | Board preparation |
| Efficiency | Time management |
| Resilience | Coping strategies |`,
      keyTerms: [
        { term: 'situated learning', definition: 'Theory that learning is embedded in authentic activity, context, and culture' },
        { term: 'programmatic assessment', definition: 'Comprehensive assessment approach using multiple methods and assessors over time' },
        { term: 'psychological safety', definition: 'Belief that the environment is safe for interpersonal risk-taking' },
        { term: 'transformative learning', definition: 'Learning that results in fundamental change in perspective and identity' },
        { term: 'ERAS', definition: 'Electronic Residency Application Service - the platform for residency applications' },
      ],
      clinicalNotes: `Expert perspective on clinical clerkships:

1. **Learning Is Primary:** Despite pressure, remember you're there to learn. Every patient encounter is a learning opportunity; approach them with curiosity.

2. **Hidden Curriculum Awareness:** Much of clerkship success depends on understanding unwritten expectations. Observe successful peers and adapt.

3. **Relationship Building:** Medicine is relational. Invest in relationships with attendings, residents, nurses, and patients. These relationships are the foundation of your career.

4. **Strategic Assessment:** Understand how you're being assessed and optimize accordingly. Clinical evaluations often matter more than shelf scores for final grades.

5. **Proactive Learning:** The clinical environment doesn't teach by default. You must actively seek learning, request feedback, and reflect on experiences.

6. **Professional Identity:** Clerkships are where you become a doctor. Take identity formation seriously - it's not just about skills, but about who you're becoming.

7. **Wellness Non-Negotiable:** Burnout begins in medical school. Protect sleep, maintain relationships, and seek support when struggling.

8. **Specialty Exploration:** Use clerkships to genuinely explore specialties, not just to rule options out. Keep an open mind.

9. **Feedback as Gift:** Seek feedback actively and receive it non-defensively. The best students are coachable.

10. **Preparation for Residency:** Everything in clerkships prepares you for residency. Develop the clinical skills, efficiency, and resilience you'll need as an intern.`,
    },
  },

  media: [
    {
      id: 'clerkship-structure-diagram',
      type: 'diagram',
      filename: 'clerkship-structure-diagram.svg',
      title: 'Clinical Clerkship Structure',
      description: 'Overview of core clerkships and their organization',
    },
    {
      id: 'clinical-team-hierarchy',
      type: 'diagram',
      filename: 'clinical-team-hierarchy.svg',
      title: 'Clinical Team Structure',
      description: 'Illustration of clinical team roles and relationships',
    },
  ],

  citations: [
    {
      id: 'cruess-2014',
      type: 'article',
      title: 'Reframing Medical Education to Support Professional Identity Formation',
      authors: ['Cruess, R.L.', 'Cruess, S.R.', 'Boudreau, J.D.', 'Snell, L.', 'Steinert, Y.'],
      source: 'Academic Medicine',
      accessedDate: '2025-01-28',
    },
    {
      id: 'ten-cate-2005',
      type: 'article',
      title: 'Entrustability of Professional Activities and Competency-Based Training',
      authors: ['ten Cate, O.'],
      source: 'Medical Education',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'education-clinical-documentation', targetType: 'concept', relationship: 'related', label: 'Clinical Documentation' },
    { targetId: 'education-step2-clinical-skills', targetType: 'concept', relationship: 'related', label: 'Clinical Skills Development' },
    { targetId: 'education-usmle-step2-overview', targetType: 'concept', relationship: 'related', label: 'USMLE Step 2 Overview' },
  ],

  tags: {
    systems: ['medical-education'],
    topics: ['clinical clerkships', 'medical education', 'clinical training', 'rotations'],
    keywords: ['clerkships', 'clinical rotations', 'medical student', 'shelf exams', 'clinical skills'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['internal medicine', 'surgery', 'pediatrics', 'obgyn', 'psychiatry'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default clerkshipOverview;
