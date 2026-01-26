/**
 * What Is Physical Therapy - Patient Education Content
 *
 * Comprehensive introduction to physical therapy for patients,
 * explaining what PT is, who provides it, and what benefits it offers.
 */

import { EducationalContent } from '../../../types';

export const whatIsPhysicalTherapy: EducationalContent = {
  id: 'pt-basics-what-is-physical-therapy',
  type: 'concept',
  name: 'What Is Physical Therapy?',
  alternateNames: ['What Is Physiotherapy?', 'PT Overview', 'Physical Therapy Introduction'],

  levels: {
    1: {
      level: 1,
      summary: 'Physical therapy is a type of healthcare that helps you move better and hurt less without needing medicine or surgery.',
      explanation: `Physical therapy (PT) is like having a special helper who knows exactly how to make your body feel better and work better.

**Who are physical therapists?**
Physical therapists are doctors of movement. They went to school for many years to learn:
- How your body moves
- Why things hurt
- How to help you get better

**What do physical therapists help with?**
- Making pain go away
- Getting stronger after an injury
- Moving better after surgery
- Preventing injuries
- Helping you do activities you love

**Why choose physical therapy?**
Physical therapy helps your body heal naturally. Instead of just taking medicine for pain, you learn exercises and movements that fix the real problem.

Think of it this way: If your car had a flat tire, you wouldn't just put tape on it. You'd fix the tire! Physical therapy fixes the actual problem, not just covers it up.

**Is physical therapy safe?**
Yes! Physical therapy is one of the safest ways to treat pain and movement problems. Your therapist watches you carefully and adjusts everything to work for YOUR body.`,
      keyTerms: [
        { term: 'physical therapy', definition: 'A type of healthcare that uses exercises and movement to help your body heal' },
        { term: 'physical therapist', definition: 'A doctor who specializes in helping people move better and hurt less' },
        { term: 'treatment', definition: 'The care you receive to help you get better' },
        { term: 'injury', definition: 'When a part of your body gets hurt' },
      ],
      analogies: [
        'A physical therapist is like a coach for your body - they teach you exactly what your body needs to get stronger and healthier.',
        'Physical therapy is like physical education class, but customized just for you and your specific needs.',
      ],
      examples: [
        'A soccer player who hurt their ankle sees a physical therapist to learn exercises that make the ankle strong again.',
        'A grandparent who has trouble walking steadily goes to physical therapy to improve their balance and prevent falls.',
        'Someone with back pain from sitting at a computer all day learns stretches and posture tips from their physical therapist.',
      ],
    },
    2: {
      level: 2,
      summary: 'Physical therapy is a healthcare profession that uses movement, exercise, and hands-on techniques to restore function, reduce pain, and prevent disability.',
      explanation: `Physical therapy (PT) is a specialized healthcare field focused on helping people of all ages who have medical conditions, illnesses, or injuries that limit their ability to move and function normally.

**What Makes Physical Therapy Unique?**

Physical therapy takes a different approach than many other treatments:
- **Active approach**: You participate in your own healing through exercises and movement
- **Non-invasive**: No surgery or medications required
- **Whole-body focus**: Treats the underlying cause, not just symptoms
- **Prevention-oriented**: Helps prevent future problems

**Who Are Physical Therapists?**

Physical therapists (PTs) are highly educated healthcare professionals who:
- Hold a Doctor of Physical Therapy (DPT) degree
- Complete 7+ years of university education
- Pass national licensing examinations
- Are licensed in every state to practice

Many PTs also specialize in areas like:
- Sports injuries
- Pediatrics (children)
- Geriatrics (older adults)
- Neurology (brain and nerve conditions)

**How Physical Therapy Works**

1. **Evaluation**: Your PT examines how you move, where you have pain, and what activities are difficult
2. **Diagnosis**: The PT identifies what's causing your problems
3. **Treatment Plan**: Together, you set goals and create a plan
4. **Treatment**: You receive hands-on care and learn exercises
5. **Progress Check**: Your PT adjusts treatment as you improve

**What Conditions Does PT Treat?**
- Back and neck pain
- Joint problems (shoulder, knee, hip)
- Recovery after surgery
- Sports injuries
- Arthritis
- Balance problems
- Neurological conditions (stroke, Parkinson's)
- Chronic pain

**Benefits of Physical Therapy**
- Reduces or eliminates pain
- Avoids surgery in many cases
- Improves mobility and strength
- Helps recovery from injury or surgery
- Prevents future injuries
- Improves balance to prevent falls`,
      keyTerms: [
        { term: 'Doctor of Physical Therapy (DPT)', definition: 'The professional degree required to become a physical therapist' },
        { term: 'mobility', definition: 'The ability to move freely and easily' },
        { term: 'function', definition: 'How well you can perform daily activities' },
        { term: 'rehabilitation', definition: 'The process of restoring health and ability after injury or illness', pronunciation: 'ree-huh-bil-ih-TAY-shun' },
        { term: 'chronic pain', definition: 'Pain that lasts for more than three months' },
      ],
      analogies: [
        'Physical therapy is like having a personal mechanic for your body - they identify what\'s not working properly and give you the tools to fix it.',
        'Just as a personal trainer helps athletes perform better, a physical therapist helps injured or limited people regain their abilities.',
      ],
    },
    3: {
      level: 3,
      summary: 'Physical therapy is an evidence-based healthcare profession utilizing examination, diagnosis, prognosis, and intervention to optimize movement and quality of life while addressing impairments, functional limitations, and participation restrictions.',
      explanation: `## Definition and Scope

Physical therapy is a dynamic healthcare profession that addresses human movement and function across the lifespan. The profession is grounded in movement science and guided by the biopsychosocial model of health and disability.

**Core Philosophy**
- Movement is essential to health and well-being
- The body has inherent capacity for healing and adaptation
- Active participation enhances outcomes
- Treatment should address the whole person, not just symptoms

## Education and Credentialing

**Entry-Level Requirements:**
- Doctor of Physical Therapy (DPT) degree
- Typically 3 years of graduate education after bachelor's degree
- Clinical internships (minimum 30 weeks)
- National Physical Therapy Examination (NPTE)
- State licensure

**Advanced Credentials:**
- Board-certified clinical specialists (e.g., OCS, NCS, SCS)
- Residency and fellowship training
- Continuing education requirements

## The Physical Therapy Process

**1. Examination**
Systematic process including:
- Patient history (medical, social, occupational)
- Systems review (cardiovascular, musculoskeletal, neuromuscular)
- Tests and measures specific to presentation

**2. Evaluation**
Clinical judgment to synthesize examination findings:
- Identification of impairments, functional limitations
- Recognition of patterns and classifications
- Determination of treatment approach

**3. Diagnosis**
Physical therapy diagnosis identifies:
- Movement dysfunction patterns
- Tissue involvement
- Contributing factors
- Not a medical diagnosis but complementary

**4. Prognosis**
Prediction of:
- Optimal level of improvement
- Time needed to achieve goals
- Factors affecting outcomes

**5. Intervention**
Evidence-based treatments including:
- Therapeutic exercise
- Manual therapy
- Physical agents and modalities
- Patient education
- Functional training

**6. Outcomes Assessment**
Measurement of:
- Goal achievement
- Functional improvement
- Patient satisfaction
- Quality of life changes

## Practice Settings

| Setting | Focus |
|---------|-------|
| Outpatient clinic | Orthopedic, sports injuries |
| Hospital (acute care) | Post-surgical, critical illness |
| Inpatient rehabilitation | Stroke, brain injury, complex conditions |
| Skilled nursing facility | Geriatric rehabilitation |
| Home health | Homebound patients |
| Schools | Pediatric developmental needs |
| Sports/fitness | Performance enhancement, injury prevention |

## Evidence-Based Practice

Physical therapists integrate:
- Best available research evidence
- Clinical expertise
- Patient values and preferences

High-quality evidence supports PT for:
- Low back pain (often first-line treatment)
- Knee osteoarthritis (delays/prevents surgery)
- Post-surgical rehabilitation
- Balance disorders and fall prevention
- Chronic pain management`,
      keyTerms: [
        { term: 'impairment', definition: 'Loss or abnormality in body structure or physiological function' },
        { term: 'functional limitation', definition: 'Difficulty performing physical actions or tasks' },
        { term: 'prognosis', definition: 'Prediction of optimal improvement and time to achieve goals', pronunciation: 'prog-NOH-sis' },
        { term: 'biopsychosocial model', definition: 'Framework viewing health as influenced by biological, psychological, and social factors' },
        { term: 'evidence-based practice', definition: 'Clinical decision-making integrating research, expertise, and patient preferences' },
      ],
      clinicalNotes: 'In many states, patients can see a physical therapist without a physician referral (direct access). This is particularly valuable for musculoskeletal conditions where early PT intervention improves outcomes and reduces healthcare costs.',
    },
    4: {
      level: 4,
      summary: 'Physical therapy practice integrates movement science, neuroscience, and behavioral science within the ICF framework to deliver patient-centered care addressing the spectrum from impairment to participation while considering contextual factors.',
      explanation: `## Theoretical Foundations

### Movement Science
- Biomechanics and kinesiology
- Motor control and motor learning
- Exercise physiology
- Tissue mechanics and adaptation

### Neuroscience
- Neuroplasticity and neural adaptation
- Pain neuroscience and central sensitization
- Sensorimotor integration
- Motor recovery mechanisms

### Behavioral Science
- Health behavior change theories
- Self-efficacy and patient activation
- Therapeutic alliance
- Motivational strategies

## International Classification of Functioning, Disability and Health (ICF)

Physical therapy practice is organized around the WHO ICF framework:

**Body Functions and Structures**
- Physiological functions (strength, ROM, sensation)
- Anatomical structures involved
- Impairments identified

**Activities**
- Execution of tasks
- Capacity (what patient can do)
- Performance (what patient does do)
- Limitations assessed

**Participation**
- Involvement in life situations
- Work, recreation, social roles
- Restrictions identified

**Contextual Factors**
- Environmental: Physical, social, attitudinal
- Personal: Age, gender, coping styles, motivation

## Clinical Reasoning Models

### Hypothesis-Oriented Algorithm for Clinicians (HOAC)
1. Collect initial data
2. Generate problem list
3. Formulate examination hypotheses
4. Conduct focused examination
5. Evaluate data and refine hypotheses
6. Establish diagnosis and prognosis
7. Develop treatment plan

### Pattern Recognition
- Expert clinicians recognize clinical patterns
- Integrated with analytical reasoning
- Requires extensive clinical experience

### Movement System Diagnosis
- APTA Vision 2020 initiative
- Classification based on movement dysfunction
- Complements medical diagnosis

## Intervention Categories (APTA Guide to PT Practice)

| Category | Examples |
|----------|----------|
| Therapeutic Exercise | Strength, flexibility, endurance, balance training |
| Functional Training | ADL training, gait training, ergonomics |
| Manual Therapy | Joint mobilization, soft tissue techniques |
| Physical Agents | Thermal, electrical, mechanical modalities |
| Electrotherapeutic Modalities | TENS, NMES, iontophoresis |
| Airway Clearance | Percussion, vibration, postural drainage |
| Patient Education | Movement strategies, self-management |

## Measurement and Outcomes

### Types of Outcome Measures
- **Patient-reported outcomes (PROs)**: Questionnaires, functional scales
- **Performance-based measures**: Timed tests, strength measurements
- **Clinician-assessed measures**: ROM, MMT, special tests

### Psychometric Properties
- Validity: Does it measure what it claims?
- Reliability: Are results consistent?
- Responsiveness: Does it detect change?
- MCID: What change is meaningful?

### Common Outcome Tools
- Oswestry Disability Index (ODI) - low back
- Neck Disability Index (NDI)
- Lower Extremity Functional Scale (LEFS)
- DASH - upper extremity
- SF-36 - general health

## Healthcare System Integration

### Value-Based Care
- Shift from volume to value
- Quality metrics and reporting
- Episode-of-care models
- Bundled payments

### Direct Access
- Patients can see PT without referral
- Available in all 50 states (varying provisions)
- Improves access, reduces costs
- Appropriate triage and referral essential`,
      keyTerms: [
        { term: 'ICF framework', definition: 'WHO model classifying health into body functions/structures, activities, participation, and contextual factors' },
        { term: 'central sensitization', definition: 'Amplification of neural signaling within the CNS causing pain hypersensitivity' },
        { term: 'motor control', definition: 'Ability to regulate mechanisms essential for movement' },
        { term: 'movement system', definition: 'Integrated physiological systems that produce and control movement' },
        { term: 'therapeutic alliance', definition: 'Collaborative relationship between therapist and patient' },
        { term: 'MCID', definition: 'Minimal Clinically Important Difference - smallest meaningful change to patients' },
      ],
      clinicalNotes: 'The therapeutic alliance is a significant predictor of outcomes in physical therapy, independent of treatment type. Patient education, shared decision-making, and addressing psychosocial factors are essential components of contemporary PT practice.',
    },
    5: {
      level: 5,
      summary: 'Physical therapy as a profession is evolving toward precision rehabilitation, primary care integration for musculoskeletal conditions, and value-based models while addressing healthcare disparities and leveraging technological advances.',
      explanation: `## Evolution of the Profession

### Historical Context
- Origins in rehabilitation after WWI and polio epidemics
- Evolution from technician to autonomous practitioner
- DPT as entry-level degree (2015 mandate)
- Growing direct access legislation
- Recognition as primary care providers for MSK conditions

### APTA Vision 2020 and Beyond
- "Transforming society by optimizing movement to improve the human experience"
- Movement System concept
- Identity as MSK specialists
- Public awareness initiatives

## Precision Rehabilitation

### Individual Response Variability
- Treatment response varies significantly between patients
- Need for personalized approaches
- Biomarker and phenotype identification

### Subgrouping and Classification
- Treatment-based classification systems
- Predictive modeling for treatment selection
- Clinical prediction rules validation
- Pragmatic trials for subgroup identification

### Emerging Precision Approaches
- Genomic influences on tissue healing
- Inflammatory biomarkers
- Psychophysical profiling
- Movement quality assessment via technology

## Healthcare System Transformation

### PT in Primary Care
- First-contact provider for MSK conditions
- Reduces imaging, medications, specialty referrals
- Cost-effective pathway for common conditions
- Military and large health systems leading implementation

### Value-Based Care Implications
- Episode-of-care thinking
- Outcome transparency
- Standardized measurement
- Cost-effectiveness evidence

### Opioid Crisis Response
- PT as non-pharmacological alternative
- CDC guidelines recommend PT for chronic pain
- Evidence for PT effectiveness in pain management
- Challenges in access and coverage

## Technology Integration

### Telehealth/Telerehabilitation
- COVID-19 accelerated adoption
- Evidence for effectiveness in various populations
- Hybrid models emerging
- Reimbursement evolution

### Wearable Technology
- Remote monitoring capabilities
- Objective movement assessment
- Real-time feedback
- Adherence tracking

### Artificial Intelligence Applications
- Movement analysis via computer vision
- Outcome prediction models
- Clinical decision support
- Documentation automation

### Virtual/Augmented Reality
- Immersive rehabilitation environments
- Pain neuroscience applications
- Motor learning enhancement
- Telerehabilitation platforms

## Research Priorities

### High-Priority Areas
- Mechanisms of action for interventions
- Optimal dosing parameters
- Implementation science
- Health disparities
- Prevention and wellness
- Comparative effectiveness

### Methodological Advances
- Adaptive trial designs
- N-of-1 trials
- Big data analytics
- Practice-based research networks
- Patient-centered outcomes research

## Workforce and Access

### Current Landscape
- Workforce shortages in many regions
- Rural access challenges
- Increasing demand with aging population
- Productivity pressures affecting care quality

### Addressing Disparities
- Racial/ethnic disparities in PT utilization
- Socioeconomic barriers
- Geographic maldistribution
- Cultural competency training

### Future Workforce Needs
- Growing demand projections
- Generalist vs. specialist balance
- PT assistant utilization
- Interdisciplinary team roles

## Global Perspectives

### WHO Rehabilitation 2030
- Recognition of rehabilitation as essential health service
- Strengthening rehabilitation in health systems
- Universal health coverage inclusion

### International Variations
- Entry-level education differences
- Scope of practice variations
- Healthcare system integration models
- Professional reciprocity challenges`,
      keyTerms: [
        { term: 'precision rehabilitation', definition: 'Tailoring interventions based on individual patient characteristics, biomarkers, and predicted response' },
        { term: 'implementation science', definition: 'Study of methods to promote adoption of research findings into routine practice' },
        { term: 'practice-based research network', definition: 'Collaborative research conducted in real-world clinical settings' },
        { term: 'direct access', definition: 'Patient ability to receive PT evaluation and treatment without physician referral' },
        { term: 'value-based care', definition: 'Healthcare delivery emphasizing outcomes and value rather than volume of services' },
      ],
      clinicalNotes: `Key trends shaping physical therapy practice:
1. Integration as primary care providers for musculoskeletal conditions
2. Precision rehabilitation approaches matching treatments to patient phenotypes
3. Technology-enabled care including telehealth, wearables, and AI
4. Value-based payment models emphasizing outcomes and efficiency
5. Growing evidence base for PT as opioid alternative
6. Addressing access disparities and workforce challenges
7. Interprofessional practice and care coordination
8. Prevention and wellness in addition to treatment`,
    },
  },

  media: [
    {
      id: 'pt-overview-infographic',
      type: 'diagram',
      filename: 'what-is-physical-therapy-infographic.svg',
      title: 'What Is Physical Therapy?',
      description: 'Infographic overview of physical therapy profession',
    },
  ],

  citations: [
    {
      id: 'apta-guide',
      type: 'website',
      title: 'Guide to Physical Therapist Practice',
      authors: ['American Physical Therapy Association'],
      source: 'APTA',
      url: 'https://guide.apta.org/',
    },
    {
      id: 'who-rehabilitation',
      type: 'website',
      title: 'Rehabilitation 2030',
      authors: ['World Health Organization'],
      source: 'WHO',
      url: 'https://www.who.int/initiatives/rehabilitation-2030',
    },
  ],

  crossReferences: [
    { targetId: 'pt-basics-first-visit', targetType: 'topic', relationship: 'sibling', label: 'What to Expect at First Visit' },
    { targetId: 'pt-basics-how-pt-helps-healing', targetType: 'topic', relationship: 'sibling', label: 'How PT Helps Healing' },
    { targetId: 'rehab-physical-therapy-principles', targetType: 'topic', relationship: 'related', label: 'Physical Therapy Principles' },
  ],

  tags: {
    systems: ['musculoskeletal', 'neurological'],
    topics: ['rehabilitation', 'physical therapy', 'patient education'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: false,
      nbme: false,
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default whatIsPhysicalTherapy;
