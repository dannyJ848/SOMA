/**
 * Speech Therapy Principles - Comprehensive Educational Content
 *
 * Covers fundamental principles of speech-language pathology including
 * assessment and treatment of communication and swallowing disorders.
 */

import { EducationalContent } from '../../types';

export const speechTherapyPrinciples: EducationalContent = {
  id: 'rehab-speech-therapy-principles',
  type: 'concept',
  name: 'Speech Therapy Principles',
  alternateNames: ['Speech-Language Pathology', 'SLP Fundamentals', 'Communication Therapy'],

  levels: {
    1: {
      level: 1,
      summary: 'Speech therapy helps people who have trouble speaking, understanding language, or swallowing safely.',
      explanation: `Speech therapy helps people communicate better and swallow safely. Speech-language pathologists (SLPs) are the healthcare professionals who provide this therapy.

**What does speech therapy help with?**

**Speaking problems:**
- Trouble saying words clearly
- Voice sounding hoarse or weak
- Stuttering or fluency problems

**Language problems:**
- Difficulty finding the right words
- Trouble understanding what others say
- Problems with reading or writing

**Swallowing problems:**
- Food or drink going down the wrong way
- Coughing during meals
- Difficulty chewing

**Who might need speech therapy?**
- Children with speech delays
- Adults who had a stroke
- People with brain injuries
- Those with diseases affecting muscles
- Anyone with voice problems

**What happens in speech therapy?**
1. The therapist tests your abilities
2. Together you set goals
3. You practice exercises and strategies
4. You learn techniques to communicate better

Speech therapists work in hospitals, clinics, schools, and even in people's homes. With practice and the right techniques, many people see significant improvement in their communication and swallowing abilities.`,
      keyTerms: [
        { term: 'speech therapy', definition: 'Treatment that helps with speaking, understanding language, and swallowing' },
        { term: 'speech-language pathologist', definition: 'A healthcare expert who helps people with speech, language, and swallowing problems' },
        { term: 'swallowing', definition: 'Moving food and drink safely from your mouth to your stomach' },
        { term: 'communication', definition: 'Sharing thoughts and ideas through speaking, writing, or gestures' },
      ],
      analogies: [
        'A speech therapist is like a coach for your mouth and brain - helping them work together to communicate clearly.',
        'Learning to speak after an injury is like learning a musical instrument - it takes practice, patience, and the right teacher.',
      ],
      examples: [
        'After a stroke, a speech therapist helps someone relearn words and practice speaking.',
        'A child who stutters learns techniques to speak more smoothly.',
      ],
    },
    2: {
      level: 2,
      summary: 'Speech-language pathology addresses the full spectrum of communication and swallowing disorders across the lifespan through evidence-based assessment and intervention.',
      explanation: `Speech-language pathology (SLP) is the healthcare profession focused on evaluating and treating disorders of communication and swallowing. Speech-language pathologists hold master's or doctoral degrees and work across medical, educational, and private practice settings.

**Scope of Practice:**

| Domain | Includes |
|--------|----------|
| Speech | Articulation, fluency, voice, resonance |
| Language | Comprehension, expression, reading, writing |
| Cognitive-Communication | Attention, memory, problem-solving affecting communication |
| Swallowing | Oral, pharyngeal, and esophageal phases |
| Augmentative Communication | Alternative communication methods |

**Speech Disorders:**
- **Articulation**: Difficulty producing specific sounds
- **Phonological**: Patterns of sound errors
- **Motor speech**: Dysarthria (muscle weakness), apraxia (motor planning)
- **Fluency**: Stuttering, cluttering
- **Voice**: Hoarseness, pitch problems, vocal nodules

**Language Disorders:**
- **Receptive**: Difficulty understanding spoken/written language
- **Expressive**: Difficulty producing language
- **Pragmatic**: Difficulty with social language use
- **Reading/Writing**: Literacy-related difficulties

**Cognitive-Communication Disorders:**
- Problems with attention affecting communication
- Memory difficulties impacting conversation
- Executive function deficits affecting social communication

**Swallowing Disorders (Dysphagia):**
- Oral phase: Chewing, moving food to back of mouth
- Pharyngeal phase: Triggering swallow, protecting airway
- Esophageal phase: Moving food to stomach

**The Assessment Process:**
1. Case history and interview
2. Standardized testing
3. Observation and clinical examination
4. Instrumental assessment (if needed)
5. Diagnosis and recommendations

**Treatment Approaches:**
- Direct intervention (exercises, drills)
- Compensatory strategies
- Environmental modifications
- Augmentative and alternative communication (AAC)
- Caregiver training`,
      keyTerms: [
        { term: 'articulation', definition: 'The physical production of speech sounds' },
        { term: 'dysphagia', definition: 'Difficulty swallowing food or liquid safely', pronunciation: 'dis-FAY-juh' },
        { term: 'dysarthria', definition: 'Speech difficulty caused by muscle weakness or coordination problems', pronunciation: 'dis-AR-three-uh' },
        { term: 'AAC', definition: 'Augmentative and Alternative Communication - methods to supplement or replace speech' },
        { term: 'expressive language', definition: 'Ability to produce language through speaking or writing' },
        { term: 'receptive language', definition: 'Ability to understand spoken or written language' },
      ],
      analogies: [
        'Dysphagia assessment is like being a detective for swallowing - the SLP looks for clues about where the process is breaking down.',
        'AAC devices are like text messaging for speaking - they give people another way to communicate their thoughts.',
      ],
    },
    3: {
      level: 3,
      summary: 'Speech-language pathology integrates neurological, anatomical, and linguistic frameworks to diagnose and treat complex communication and swallowing disorders using evidence-based assessment tools and intervention protocols.',
      explanation: `## Theoretical Foundations

**Neuroanatomy of Communication:**
- Language lateralization (typically left hemisphere)
- Broca's area: speech production, grammar
- Wernicke's area: language comprehension
- Arcuate fasciculus: connecting language areas
- Right hemisphere: prosody, pragmatics

**Motor Speech Control:**
- Pyramidal system: voluntary movement
- Extrapyramidal system: tone, posture
- Cerebellar system: coordination, timing
- Lower motor neurons: final common pathway

**Swallowing Neurophysiology:**
- Brainstem swallowing center
- Cranial nerves V, VII, IX, X, XII
- Cortical modulation
- Sensory feedback loops

## Assessment Framework

**Standardized Assessments:**

| Assessment | Domain | Population |
|------------|--------|------------|
| Boston Diagnostic Aphasia Exam | Language | Aphasia |
| Assessment of Motor Speech | Dysarthria | Motor speech disorders |
| Frenchay Dysarthria Assessment | Dysarthria | Neurological |
| Mann Assessment of Swallowing | Dysphagia | Bedside screening |
| ASHA NOMS | Functional outcomes | All populations |

**Instrumental Assessment:**
- **Videofluoroscopic Swallow Study (VFSS)**: X-ray video of swallowing
- **Fiberoptic Endoscopic Evaluation (FEES)**: Endoscope visualization
- **Stroboscopy**: Vocal fold vibration assessment
- **Acoustic analysis**: Computer-based voice analysis

## Motor Speech Disorders

**Dysarthria Types:**

| Type | Lesion Location | Characteristics |
|------|-----------------|-----------------|
| Flaccid | Lower motor neuron | Breathy voice, hypernasality |
| Spastic | Upper motor neuron | Strained voice, slow rate |
| Ataxic | Cerebellum | Irregular rhythm, excess loudness |
| Hypokinetic | Basal ganglia | Reduced loudness, monotone |
| Hyperkinetic | Basal ganglia | Variable, involuntary movements |
| Mixed | Multiple | Combined features |

**Apraxia of Speech:**
- Motor programming disorder
- Inconsistent errors
- Increased errors with complexity
- Groping, self-correction attempts

## Dysphagia Management

**Modified Diet Textures (IDDSI Framework):**
- Level 0-4: Drinks (thin to extremely thick)
- Level 3-7: Foods (liquidized to regular)

**Compensatory Strategies:**
- Chin tuck: Reduces aspiration risk
- Head turn: Redirects bolus
- Effortful swallow: Increases pressure
- Multiple swallows: Clears residue

**Rehabilitation Exercises:**
- Shaker exercise: UES opening
- Mendelsohn maneuver: Laryngeal elevation
- Masako maneuver: Base of tongue strength
- Lee Silverman Voice Treatment: Loudness, effort

## Evidence-Based Practice

**Treatment Efficacy:**
- Constraint-Induced Language Therapy for aphasia
- LSVT LOUD for Parkinson's disease
- McNeill Dysphagia Therapy Program
- Script training for functional communication`,
      keyTerms: [
        { term: 'aphasia', definition: 'Language disorder typically caused by stroke affecting speaking, understanding, reading, or writing', pronunciation: 'uh-FAY-zhuh' },
        { term: 'apraxia of speech', definition: 'Motor planning disorder affecting the ability to program speech movements', pronunciation: 'uh-PRAK-see-uh' },
        { term: 'VFSS', definition: 'Videofluoroscopic Swallow Study - X-ray imaging of swallowing in real-time' },
        { term: 'FEES', definition: 'Fiberoptic Endoscopic Evaluation of Swallowing - direct visualization via nasal endoscope' },
        { term: 'aspiration', definition: 'Entry of food, liquid, or secretions below the vocal folds into the airway' },
        { term: 'IDDSI', definition: 'International Dysphagia Diet Standardisation Initiative - framework for texture modification' },
      ],
      clinicalNotes: 'Silent aspiration (no cough response) requires instrumental assessment for detection. Dysarthria type guides treatment selection. Aphasia therapy should be intensive when possible. Document functional outcomes using standardized measures like ASHA NOMS.',
    },
    4: {
      level: 4,
      summary: 'Advanced speech-language pathology practice integrates neuroimaging correlates, specialized treatment protocols, and interprofessional collaboration to address complex communication and swallowing disorders across clinical populations.',
      explanation: `## Advanced Neurological Foundations

**Lesion-Deficit Correlations:**

*Aphasia Syndromes:*
| Syndrome | Lesion Site | Fluency | Comprehension | Repetition |
|----------|-------------|---------|---------------|------------|
| Broca's | Left frontal | Non-fluent | Intact | Impaired |
| Wernicke's | Left temporal | Fluent | Impaired | Impaired |
| Global | Large left MCA | Non-fluent | Impaired | Impaired |
| Conduction | Arcuate fasciculus | Fluent | Intact | Impaired |
| Anomic | Variable | Fluent | Intact | Intact |
| Transcortical Motor | Anterior watershed | Non-fluent | Intact | Intact |
| Transcortical Sensory | Posterior watershed | Fluent | Impaired | Intact |

**Neuroimaging Applications:**
- Structural MRI for lesion mapping
- Functional MRI for language lateralization
- Diffusion tensor imaging for white matter tracts
- PET for metabolic activity

**Neuroplasticity Principles:**
- Perilesional reorganization
- Homologous region recruitment
- Network-level adaptation
- Experience-dependent plasticity

## Specialized Treatment Protocols

**Aphasia Interventions:**

*Constraint-Induced Language Therapy (CILT):*
- Forced use of verbal communication
- 3+ hours daily, 2 weeks
- Shaping and massed practice
- Strong evidence for chronic aphasia

*Semantic Feature Analysis:*
- Targets word retrieval
- Systematic semantic cueing
- Generalization to untrained words

*Script Training:*
- Functional communication focus
- Personally relevant scripts
- High-intensity practice
- Technology-assisted delivery

**Motor Speech Treatment:**

*LSVT LOUD:*
- Parkinson's disease voice treatment
- 4 sessions/week for 4 weeks
- Focus on loudness and effort
- Strong efficacy evidence

*PROMPT (Prompts for Restructuring Oral Muscular Phonetic Targets):*
- Tactile-kinesthetic approach
- Motor learning principles
- Childhood apraxia focus

**Dysphagia Rehabilitation:**

*Neuromuscular Electrical Stimulation (NMES):*
- Surface electrodes on neck
- Muscle strengthening
- Combined with swallowing exercises
- Mixed evidence base

*McNeil Dysphagia Therapy Program:*
- Systematic exercise progression
- Real food/liquid practice
- Intensive treatment protocol

## Complex Case Management

**Tracheostomy and Ventilator Patients:**
- Speaking valve trials
- Above-cuff vocalization
- Modified swallowing assessment
- Weaning considerations

**Head and Neck Cancer:**
- Pre-treatment baseline
- During treatment support
- Post-treatment rehabilitation
- Prosthetic management

**Progressive Neurological Disease:**
- Baseline establishment
- Anticipatory intervention
- AAC planning
- Quality of life focus

## Augmentative and Alternative Communication

**AAC System Selection:**
- No-tech: Gestures, communication boards
- Low-tech: Picture books, alphabet boards
- High-tech: Speech generating devices

**Feature Matching:**
- Motor access capabilities
- Cognitive/linguistic skills
- Vision and hearing
- Communication needs
- Environmental factors

**Implementation:**
- Device trials
- Vocabulary selection
- Training (user and partners)
- Ongoing adjustment

## Interprofessional Collaboration

**Team Members:**
- Neurologist: Diagnosis, medical management
- ENT: Surgical considerations, endoscopy
- Radiologist: Imaging interpretation
- Dietitian: Nutrition optimization
- Respiratory therapy: Airway management
- Nursing: Daily care, monitoring

**Communication:**
- Standardized reporting
- Family conferences
- Care coordination
- Discharge planning`,
      keyTerms: [
        { term: 'LSVT LOUD', definition: 'Lee Silverman Voice Treatment - intensive voice therapy program for Parkinson\'s disease' },
        { term: 'CILT', definition: 'Constraint-Induced Language Therapy - intensive aphasia treatment restricting non-verbal communication' },
        { term: 'speaking valve', definition: 'One-way valve allowing tracheostomy patients to redirect air through vocal folds for speech' },
        { term: 'SGD', definition: 'Speech Generating Device - electronic AAC device producing synthesized or recorded speech' },
        { term: 'NMES', definition: 'Neuromuscular Electrical Stimulation - electrical current applied to muscles to facilitate strengthening' },
        { term: 'feature matching', definition: 'Process of selecting AAC system based on individual capabilities and needs' },
      ],
      clinicalNotes: 'Intensive treatment (15+ hours) for aphasia produces better outcomes than distributed. LSVT LOUD requires certification and treatment fidelity. Speaking valve candidacy requires SLP assessment. AAC should be introduced early in progressive disease, not as last resort.',
    },
    5: {
      level: 5,
      summary: 'Contemporary speech-language pathology integrates precision diagnostics, emerging technologies, telepractice delivery, and implementation science to advance communication and swallowing rehabilitation across healthcare systems.',
      explanation: `## Precision SLP Practice

**Biomarker Integration:**
- Lesion volume and location prediction models
- Genetic factors in recovery (BDNF, APOE)
- Inflammatory markers and outcomes
- Neuroimaging-based prognostication

**Phenotyping for Treatment:**
- Aphasia subtype classification
- Responder identification
- Optimal intensity determination
- Personalized treatment pathways

**Predictive Analytics:**
- Machine learning outcome models
- Treatment response prediction
- Resource allocation optimization
- Discharge planning support

## Emerging Technologies

**Telepractice:**
- Synchronous therapy delivery
- Remote monitoring
- Hybrid models
- Evidence for equivalence

**Artificial Intelligence:**
- Automated speech analysis
- Swallowing screening algorithms
- Treatment recommendation systems
- Progress monitoring

**Virtual Reality:**
- Immersive therapy environments
- Functional communication simulation
- Motivation enhancement
- Ecological validity

**Brain-Computer Interface:**
- Communication restoration
- Neural speech decoding
- Assistive technology control
- Research applications

**Advanced AAC:**
- Eye-gaze technology
- Brain-computer interfaces
- Predictive text/language
- Personalized voice banking

## Implementation Science

**Evidence-Practice Gaps:**
- Underutilization of intensive aphasia therapy
- Variable dysphagia management
- AAC timing delays
- Inconsistent screening practices

**Implementation Strategies:**
- Clinical decision support
- Provider education
- System-level protocols
- Quality monitoring

**Sustainability:**
- Workflow integration
- Reimbursement alignment
- Workforce capacity
- Technology infrastructure

## Healthcare System Integration

**Value-Based Care:**
- Outcome measurement emphasis
- Cost-effectiveness documentation
- Episode-of-care models
- Quality metrics

**Care Transitions:**
- Acute to rehabilitation handoff
- Inpatient to outpatient continuity
- Home health integration
- Long-term follow-up

**Interprofessional Practice:**
- Collaborative care models
- Shared decision-making
- Team-based approaches
- Communication optimization

## Research Frontiers

**Treatment Mechanisms:**
- Neuroplasticity substrates
- Active ingredients identification
- Optimal dosing parameters
- Moderators and mediators

**Comparative Effectiveness:**
- Head-to-head treatment trials
- Real-world effectiveness
- Long-term outcomes
- Cost-effectiveness

**Personalized Medicine:**
- Biomarker-guided treatment
- Genetic factors
- Individual response patterns
- Precision dosing

## Global and Population Perspectives

**Health Disparities:**
- Access to services
- Cultural and linguistic diversity
- Socioeconomic factors
- Rural/urban differences

**Workforce Development:**
- Training program expansion
- International standards
- Task-shifting considerations
- Specialty development

**Policy Advocacy:**
- Reimbursement advocacy
- Scope of practice protection
- Research funding
- Public awareness

## Future Directions

**Technology Integration:**
- AI-enhanced assessment
- Automated therapy delivery
- Remote monitoring expansion
- Personalized digital interventions

**Practice Evolution:**
- Prevention emphasis
- Primary care integration
- Population health focus
- Community-based models

**Research Priorities:**
- Implementation science
- Mechanisms of action
- Comparative effectiveness
- Health equity`,
      keyTerms: [
        { term: 'telepractice', definition: 'Delivery of SLP services via telecommunications technology' },
        { term: 'voice banking', definition: 'Recording one\'s voice for later use in synthetic speech generation' },
        { term: 'brain-computer interface', definition: 'Technology allowing direct communication between brain and external devices' },
        { term: 'implementation science', definition: 'Study of methods to promote integration of evidence into clinical practice' },
        { term: 'precision rehabilitation', definition: 'Treatment matching based on individual biomarkers and phenotypes' },
        { term: 'neural speech decoding', definition: 'Translating brain activity patterns into synthesized speech' },
      ],
      clinicalNotes: `Key trends shaping SLP practice:
1. Telepractice has demonstrated equivalence and expands access
2. AI and technology augment but don't replace clinical expertise
3. Intensive treatment models produce superior outcomes
4. Implementation science addresses evidence-practice gaps
5. Precision approaches promise better treatment matching
6. AAC technology continues rapid advancement
7. Health equity demands attention to access disparities`,
    },
  },

  media: [
    {
      id: 'communication-system-diagram',
      type: 'diagram',
      filename: 'communication-system-diagram.svg',
      title: 'Neural Basis of Communication',
      description: 'Diagram showing brain regions involved in speech and language',
    },
  ],

  citations: [
    {
      id: 'asha-scope-practice',
      type: 'website',
      title: 'Scope of Practice in Speech-Language Pathology',
      authors: ['American Speech-Language-Hearing Association'],
      source: 'ASHA',
      url: 'https://www.asha.org/policy/',
    },
    {
      id: 'duffy-motor-speech',
      type: 'textbook',
      title: 'Motor Speech Disorders: Substrates, Differential Diagnosis, and Management',
      authors: ['Duffy, J.R.'],
      source: 'Elsevier',
    },
  ],

  crossReferences: [
    { targetId: 'rehab-aphasia-rehabilitation', targetType: 'topic', relationship: 'child', label: 'Aphasia Rehabilitation' },
    { targetId: 'rehab-dysarthria-treatment', targetType: 'topic', relationship: 'child', label: 'Dysarthria Treatment' },
    { targetId: 'rehab-swallowing-disorders', targetType: 'topic', relationship: 'child', label: 'Swallowing Disorders' },
  ],

  tags: {
    systems: ['neurological', 'ENT'],
    topics: ['rehabilitation', 'speech therapy', 'communication', 'swallowing'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default speechTherapyPrinciples;
