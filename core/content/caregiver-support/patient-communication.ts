/**
 * Patient Communication for Caregivers - Educational Content
 *
 * Guidance on effective communication with care recipients, healthcare providers,
 and family members. This content addresses the unique communication challenges
 * caregivers face and provides practical strategies for improving understanding
 * and connection.
 */

import { EducationalContent } from '../types';

export const patientCommunication: EducationalContent = {
  id: 'caregiver-patient-communication',
  type: 'concept',
  name: 'Patient Communication for Caregivers',
  alternateNames: ['Caregiver Communication Skills', 'Communicating with Care Recipients', 'Caregiver-Patient Dialogue'],

  levels: {
    1: {
      level: 1,
      summary: 'Good communication means listening carefully, speaking clearly, and being patient. It helps both you and the person you care for feel understood and respected.',
      explanation: `**Why Communication Matters**

When you take care of someone, talking and listening well is very important. Good communication helps:

- The person feel heard and understood
- You understand what they need
- Both of you feel less frustrated
- You work together as a team
- Problems get solved more easily

**Tips for Good Listening**

**Show You're Listening**
- Look at the person when they talk
- Put down your phone or other distractions
- Nod or say "I see" to show you understand
- Don't interrupt

**Listen for Feelings**
- Notice if they seem sad, scared, or angry
- It's okay to talk about feelings
- Sometimes people need to talk more than once

**Tips for Speaking Clearly**

**Use Simple Words**
- Say what you mean in a clear way
- Give one instruction at a time
- Speak at a normal speed - not too fast

**Be Kind and Patient**
- Use a calm, gentle voice
- Don't rush the person
- Give them time to answer

**When Communication Is Hard**

Sometimes the person you care for might:
- Have trouble finding words
- Get confused easily
- Not want to talk
- Say the same things over and over

**What You Can Do**
- Be patient - it might take them longer to answer
- Ask questions that can be answered with "yes" or "no"
- Use hand gestures or point to things
- Try again later if they seem frustrated

**Remember:** Good communication takes practice. It's okay to make mistakes and try again.`,
      keyTerms: [
        { term: 'communication', definition: 'Sharing information, thoughts, and feelings with others through talking, listening, and body language' },
        { term: 'active listening', definition: 'Paying close attention to what someone is saying and showing them you understand' },
        { term: 'frustration', definition: 'Feeling upset when something is difficult or not working the way you want' },
      ],
      analogies: [
        'Communication is like a two-way street - both people need to send and receive messages for it to work.',
        'Good listening is like being a sponge - you soak up what the other person is saying.',
      ],
      examples: [
        'When her father has trouble finding words, Maria waits patiently and asks, "Do you mean your medicine or your water?"',
        'Carlos makes eye contact and puts away his phone when his mother talks about how she\'s feeling.',
        'When helping his grandfather bathe, Tom explains each step first, "Now I\'m going to wash your back."',
      ],
      patientCounselingPoints: [
        'Try to have important conversations when both of you are calm and rested',
        'If communication becomes frustrating, take a break and try again later',
        'Remember that tone of voice and facial expressions matter as much as words',
      ],
    },
    2: {
      level: 2,
      summary: 'Effective communication with care recipients involves clear speaking, active listening, and adapting to their abilities. Good communication builds trust, reduces conflict, and improves care quality.',
      explanation: `## Foundations of Caregiver Communication

**The Communication Loop**

Effective communication involves:
1. **Sending**: Speaking clearly and appropriately
2. **Receiving**: Listening actively and completely
3. **Understanding**: Making sure the meaning is clear
4. **Responding**: Replying in a helpful way

**When Communication Breaks Down**

Common barriers:
- Hearing or vision problems
- Cognitive changes (memory, confusion)
- Fatigue, pain, or illness
- Medication side effects
- Emotional factors (fear, depression, anxiety)

**Active Listening Skills**

**Give Full Attention**
- Stop what you're doing
- Make eye contact (if culturally appropriate)
- Turn off TV, radio, phone
- Face the person at their level

**Show You're Listening**
- Nod occasionally
- Use verbal acknowledgments ("I see," "Go on")
- Match their emotional tone
- Lean forward slightly

**Clarify Understanding**
- Paraphrase: "So you're saying..."
- Ask for clarification: "What do you mean by...?"
- Summarize key points
- Check for understanding: "Did I get that right?"

**Speaking Clearly**

**Organize Your Thoughts**
- Think before you speak
- Plan what you want to say
- Choose the right time to talk
- Consider the person's current state

**Use Clear Language**
- Simple, direct words
- Short sentences
- One topic at a time
- Avoid medical jargon

**Adjust Your Style**
- Speak slower if needed
- Repeat important information
- Use gestures to help explain
- Write things down if helpful

**Communicating About Difficult Topics**

**Health Changes**
- Choose a calm, private time
- Be direct but gentle
- Allow time for processing
- Answer questions honestly
- Offer emotional support

**Safety Concerns** (driving, finances, living alone)
- Start with observations, not accusations
- Focus on safety and well-being
- Involve them in solutions
- Respect their autonomy when possible
- Seek family or professional help if needed

**Care Preferences**
- Discuss while they can still participate
- Ask about their values and priorities
- Document their wishes
- Revisit conversations as needed

## Adapting to Communication Challenges

**Hearing Impairment**
- Face the person directly
- Speak clearly, don't shout
- Use gestures and facial expressions
- Reduce background noise
- Consider hearing assistive devices
- Write important information

**Vision Impairment**
- Identify yourself when approaching
- Explain what you're doing before touching
- Use descriptive words
- Keep pathways clear
- Use textures and sounds as cues

**Memory Problems**
- Use memory cues (notes, calendars, alarms)
- Ask yes/no questions when possible
- Give one instruction at a time
- Keep routines consistent
- Don't argue about incorrect memories
- Redirect gently when confused

**Speech Difficulties**
- Be patient and allow extra time
- Don't finish their sentences
- Ask them to point or gesture
- Use communication boards if available
- Confirm understanding
- Write down key words

**Emotional Factors**
- Acknowledge feelings: "I can see you're upset"
- Don't dismiss concerns
- Offer support, not solutions immediately
- Allow silence when needed
- Follow their lead on how much they want to talk

## Communication with Healthcare Providers

**Before Appointments**
- Write down questions and concerns
- Keep a symptom diary
- Bring medication lists
- Prepare updates on changes

**During Appointments**
- Take notes or ask to record
- Ask questions until you understand
- Repeat back instructions
- Discuss options and preferences
- Include the care recipient in decisions

**After Appointments**
- Review what was discussed
- Update care plan as needed
- Share information with other family members
- Schedule follow-up tasks`,
      keyTerms: [
        { term: 'active listening', definition: 'Fully concentrating on what is being said rather than just passively hearing the words' },
        { term: 'paraphrasing', definition: 'Restating what someone said in your own words to show you understand' },
        { term: 'autonomy', definition: 'The right of a person to make their own decisions about their life and care' },
        { term: 'communication board', definition: 'A tool with pictures or words that helps people who have trouble speaking communicate their needs' },
      ],
      analogies: [
        'Communicating with someone who has cognitive challenges is like driving in fog - slow down, pay extra attention, and be patient.',
      ],
      examples: [
        'Instead of saying "Get dressed," Sarah breaks it down: "First, put on your shirt. Now, let\'s put on your socks."',
        'When his father repeats stories, Carlos listens each time as if it\'s new, knowing the need for connection matters more than novelty.',
        'Linda writes down important phone numbers on a large pad by the phone for her mother who can\'t remember numbers.',
      ],
      patientCounselingPoints: [
        'Practice "therapeutic communication" - be supportive, not judgmental',
        'Use "I" statements: "I feel worried when..." instead of "You always..."',
        'Pick up on nonverbal cues - facial expressions, body language, tone of voice',
      ],
    },
    3: {
      level: 3,
      summary: 'Communication with care recipients requires adaptation to cognitive, sensory, and emotional changes while preserving dignity and autonomy. Evidence-based techniques improve understanding, reduce behavioral symptoms, and enhance the caregiver-care recipient relationship.',
      explanation: `## The Science of Caregiver Communication

**Communication as Therapeutic Intervention**

Research demonstrates that effective caregiver communication:
- Reduces behavioral symptoms in dementia (agitation, aggression)
- Improves care recipient cooperation with care
- Decreases caregiver stress and burden
- Enhances quality of life for both parties
- Reduces hospital readmissions (better understanding of care needs)

**Neurological and Cognitive Considerations**

*Age-related changes:*
- Slower processing speed
- Working memory limitations
- Attention span reduction
- Word-finding difficulties (anomia)
- Preserved long-term memory

*Dementia-specific changes:*
- Aphasia (receptive and/or expressive)
- Agnosia (inability to interpret sensations)
- Apraxia (difficulty with purposeful movement)
- Impaired executive function
- Prosopagnosia (face recognition loss)

**Emotional and Psychological Factors**

*Depression:*
- Flat affect, reduced speech
- Negative thought content
- Social withdrawal
- Expresses hopelessness

*Anxiety:*
- Restlessness, agitation
- Repetitive questioning
- Difficulty concentrating
- Somatic complaints

**Person-Centered Communication**

This approach emphasizes:
- Seeing the person beyond their condition
- Understanding their life history and values
- Respecting their remaining abilities
- Preserving dignity and autonomy
- Building on strengths and interests

## Evidence-Based Communication Techniques

**Validation Therapy**

*Principles:*
- Accept the person's reality without arguing
- Acknowledge the emotions behind their words
- Join them in their emotional truth
- Don't correct or contradict

*Techniques:*
- "It sounds like you're feeling..."
- "That must be difficult for you"
- "Tell me more about that"
- Focus on the feeling, not the facts

*Evidence:* Reduces agitation, improves mood, increases cooperation

**Reminiscence Therapy**

*Structured life review:*
- Use photos, music, objects as prompts
- Ask open-ended questions about the past
- Focus on positive memories and accomplishments
- Validate their life story and identity
- Document stories for family history

*Benefits:*
- Improves mood and self-esteem
- Reduces depression symptoms
- Enhances caregiver-care recipient relationship
- Preserves personal history

**Therapeutic Lying vs. Truth**

*Ethical considerations:*
- When the truth causes more harm
- Balancing honesty with wellbeing
- Cultural and personal values matter
- No one-size-fits-all answer

*Guidelines:*
- Prioritize emotional wellbeing
- Consider the person's usual values
- Use distraction and redirection
- Focus on feelings, not facts
- Seek family consensus on approach

**Communication for Specific Care Tasks**

*Medication management:*
- Explain purpose simply
- Use clear, step-by-step instructions
- Demonstrate with gestures
- Check understanding
- Praise cooperation

*Personal care assistance:*
- Explain before touching
- Maintain privacy and dignity
- Offer choices when possible
- Use consistent routine
- Talk through the process

*Mealtime support:*
- Create pleasant atmosphere
- Offer preferred foods
- Cue eating as needed
- Allow adequate time
- Avoid rushing or pressure

## Managing Difficult Interactions

**Resistance to Care**

*Understand the cause:*
- Fear or anxiety
- Physical discomfort
- Confusion about what's happening
- Loss of control
- Embarrassment

*Strategies:*
- Validate their feelings
- Use distraction techniques
- Break tasks into smaller steps
- Offer limited choices
- Try again later if very resistant
- Use a different approach

**Repetitive Speech or Questions**

*Understand the cause:*
- Short-term memory loss
- Anxiety or insecurity
- Need for reassurance
- Boredom or under-stimulation

*Strategies:*
- Answer patiently each time
- Provide written answers they can refer to
- Address the underlying emotion
- Distract with a different activity
- Don't point out repetition
- Use distraction techniques

**Agitation or Aggression**

*De-escalation techniques:*
- Speak slowly and calmly
- Maintain non-threatening posture
- Ensure safety for both parties
- Remove environmental triggers
- Don't argue or correct
- Step back if needed

*Prevention:*
- Anticipate and avoid triggers
- Maintain consistent routine
- Address physical needs (pain, toileting)
- Reduce environmental stimulation
- Provide meaningful activities

## Communication Across Disease Stages

**Early Stage**
- Involve in care planning
- Discuss future preferences
- Complete advance directives
- Build communication strategies together
- Create memory banks and recordings

**Middle Stage**
- Simplify communication
- Use yes/no questions
- Focus on one topic at a time
- Use nonverbal communication
- Validate emotions over facts
- Maintain eye contact

**Late Stage**
- Communicate through presence
- Use touch and gentle voice
- Interpret nonverbal cues
- Assume they understand (may still hear and feel)
- Focus on comfort and connection
- Involve in familiar activities (music, reading)

## Cultural Considerations

**Respect Cultural Differences**

*Communication styles:*
- Direct vs. indirect communication
- Eye contact norms
- Personal space preferences
- Gender role expectations
- Family decision-making patterns

*Language considerations:*
- Use interpreter if needed (not family members)
- Learn key phrases in their language
- Use visual aids and gestures
- Confirm understanding
- Write important information

*Family dynamics:*
- Understand family hierarchy
- Respect decision-making traditions
- Include appropriate family members
- Be aware of cultural taboos`,
      keyTerms: [
        { term: 'validation therapy', definition: 'Communication approach that accepts and validates the care recipient\'s reality and emotions rather than correcting them' },
        { term: 'reminiscence therapy', definition: 'Therapeutic use of recalling and discussing past experiences to improve mood and wellbeing' },
        { term: 'aphasia', definition: 'Language disorder affecting ability to understand or produce speech, caused by brain damage' },
        { term: 'anosognosia', definition: 'Lack of insight or awareness of one\'s own neurological deficits or condition' },
        { term: 'therapeutic lying', definition: 'Controversial practice of not correcting false beliefs to avoid causing distress' },
      ],
      clinicalNotes: 'Communication difficulties are a primary source of caregiver stress. Healthcare providers should assess communication challenges and provide specific training in techniques like validation, effective cuing, and de-escalation. Communication difficulties increase risk for behavioral problems, institutionalization, and caregiver burnout.',
      patientCounselingPoints: [
        'Practice "join the journey" - enter their reality rather than trying to correct it',
        'Use "universal precautions" - assume everyone may have some difficulty understanding',
        'When communication breaks down, focus on connection and comfort instead of correctness',
      ],
    },
    4: {
      level: 4,
      summary: 'Caregiver communication research demonstrates that person-centered, evidence-based techniques improve outcomes for both caregivers and care recipients. Training in specific communication skills reduces behavioral symptoms, burden, and institutionalization rates.',
      explanation: `## Theoretical Foundations

**Person-Centered Care (Kitwood)**

*Core principles:*
- Recognize personhood is maintained despite cognitive loss
- Veach person is unique with individual needs
- Relationships are central to care
- Communication reflects respect and recognition
- Focus on preserved abilities, not deficits

*Communication indicators of person-centered care:*
- Recognition: Acknowledging the person
- Negotiation: Involving them in decisions
- Collaboration: Working together on tasks
- Play: Using humor and creativity
- Relaxation: Creating calm interactions
- Validation: Accepting their reality

**Communication Accommodation Theory**

*Strategies:*
- Convergence: Adjusting communication style to match the other person
- Divergence: Maintaining differences in communication style
- Over-accommodation: Can be patronizing ("elderspeak")

*Elderspeak characteristics to avoid:*
- Infantilizing terms ("sweetie," "honey")
- Simplified grammar
- Slow, loud speech
- Assumption of incompetence
- Taking over tasks unnecessarily

*Negative effects of elderspeak:*
- Reduced cooperation
- Increased agitation
- Lower self-esteem
- Resistance to care

## Evidence-Based Communication Training

**Communication Skills Training for Caregivers**

*Content areas:*
- Nonverbal communication
- Verbal strategies and simplification
- Listening skills and validation
- Managing difficult conversations
- Cultural competence

*Teaching methods:*
- Didactic instruction
- Video modeling
- Role-playing and practice
- Coaching and feedback
- Real-world application

*Outcomes of training:*
- Reduced behavioral symptoms
- Improved caregiver confidence
- Lower caregiver burden
- Enhanced relationship quality
- Delayed institutionalization

**Specific Evidence-Based Programs**

*CLECC (Caregiver-Led Communication Enrichment Program):*
- Focuses on everyday communication
- Modular format for flexibility
- Demonstrated improvements in quality of life

*STAR (Strategies for Teaching Arsenic-Resistant Communication):*
- For communication difficulties in dementia
- Teaches specific verbal techniques
- Improves conversational skills

*Sharing Patients' Life Stories:*
- Structured reminiscence approach
- Improves care person-centeredness
- Enhances staff-caregiver communication

## Communication Assessment

**Comprehensive Communication Assessment**

*Components to evaluate:*
1. Receptive language ability
2. Expressive language ability
3. Cognitive-communication status
4. Hearing and vision
5. Motor speech abilities
6. Reading and writing skills
7. Pragmatic and social skills

*Assessment tools:*
- Functional Communication Measures
- Communication Effectiveness Index
- Scale for the Observation of Communication
- Aphasia Communication Outcome Measure

**Communication Care Planning**

Based on assessment, develop plan for:
- Optimal communication strategies
- Environmental modifications
- Communication aids and devices
- Caregiver training needs
- Ongoing monitoring of changes

## Advanced Communication Techniques

**Use of Technology**

*Augmentative and alternative communication (AAC):*
- Picture communication boards
- Speech-generating devices
- Tablet apps for communication
- Voice output communication aids

*Effectiveness:*
- Reduces communication frustration
- Increases independence in expression
- Improves quality of interactions
- Supports person-centered care

**Communication for Behavior Management**

*Functional communication training:*
- Identify communicative function of behavior
- Teach more appropriate ways to communicate needs
- Reinforce effective communication
- Reduce behavioral symptoms

*Techniques:*
- Analyze antecedents and consequences
- Teach alternative communication
- Shape communicative attempts
- Prompt and fade as appropriate

**Facilitating Meaningful Interaction**

*Communication activities:*
- Reminiscence sessions
- Music and singing
- Art and creative expression
- Reading and discussion
- Shared activities

*Benefits:*
- Maintains social connection
- Preserves identity and personhood
- Provides cognitive stimulation
- Improves mood and behavior

## Special Populations

**Non-English Speakers**
- Professional interpreters required
- Written materials in native language
- Cultural mediation
- Family involvement strategies

**LGBTQ+ Care Recipients**
- Respect chosen names and pronouns
- Include chosen family in care
- Create inclusive environment
- Understand historical distrust of healthcare

**Intellectual Disabilities**
- Simplify language appropriately
- Use concrete, specific terms
- Teach step-by-step
- Allow extra processing time
- Use visual supports`,
      keyTerms: [
        { term: 'elderspeak', definition: 'Patronizing communication style often used with older adults, characterized by simplified language and terms of endearment' },
        { term: 'person-centered care', definition: 'Care approach that focuses on the individual\'s needs, preferences, and values rather than just their medical condition' },
        { term: 'AAC', definition: 'Augmentative and Alternative Communication - methods and tools to help people communicate when speech is difficult' },
        { term: 'functional communication training', definition: 'Behavioral approach teaching appropriate communication to replace challenging behaviors' },
      ],
      clinicalNotes: `Communication interventions are among the most cost-effective caregiver supports:
1. Screen for communication barriers at every encounter
2. Provide hands-on communication skills training
3. Refer to speech-language pathology when indicated
4. Document communication strategies in care plan
5. Reassess regularly as conditions progress`,
    },
    5: {
      level: 5,
      summary: 'Advanced communication research integrates neuroscience, linguistics, and psychology to develop evidence-based caregiver communication interventions. Implementation science addresses translation of effective approaches into practice while addressing cultural and health equity considerations.',
      explanation: `## Neurological and Linguistic Foundations

**Neuroscience of Communication Changes**

*Neurodegenerative disease patterns:*
- Alzheimer's: Semantic memory loss, anomia, comprehension decline
- Frontotemporal dementia: Language deficits (primary progressive aphasia)
- Parkinson's: Hypophonia, reduced prosody, reduced facial expression
- Vascular dementia: Variable deficits based on lesion location
- Lewy body: Fluctuating cognition, visuospatial deficits

*Neural mechanisms of caregiver communication:*
- Mirror neuron system: Empathy, emotional resonance
- Theory of mind: Understanding others' perspectives
- Language networks: Integration of comprehension and expression
- Social cognition: Interpreting social cues

**Linguistic Analysis of Caregiver Interactions**

*Conversation analysis of caregiver-care recipient discourse:*
- Turn-taking patterns: Who speaks, when, interruptions
- Repair strategies: How communication breakdowns are handled
- Topic management: Initiation, maintenance, shifting
- Alignment and stance: Positioning relative to each other

*Findings:*
- Successful interactions show balanced turn-taking
- Effective caregivers use more repair strategies
- Person-centeredness correlates with positive outcomes
- Linguistic markers predict relationship quality

## Advanced Intervention Research

**Communication Training Meta-Analyses**

*Effect sizes from RCTs:*
- Caregiver communication skills training: d = 0.53
- Person-centered communication training: d = 0.67
- Dementia-specific communication: d = 0.48
- Combined communication and behavior management: d = 0.61

*Moderators of effectiveness:*
- Caregiver characteristics: Education, relationship quality
- Care recipient factors: Stage, type of dementia
- Training characteristics: Duration, practice opportunities
- Follow-up support: Booster sessions improve maintenance

**Technology-Enhanced Communication Interventions**

*Virtual reality training:*
- Simulated care scenarios for skill practice
- Safe environment for difficult conversation practice
- Immediate feedback and coaching
- Demonstrated skill transfer to real interactions

*AI-powered communication support:*
- Real-time suggestion of communication strategies
- Analysis of conversation patterns
- Personalized intervention recommendations
- Early detection of communication deterioration

**Biomarker-Based Communication Approaches**

*Neurophysiological monitoring:*
- HRV coherence during caregiver interactions
- Cortisol patterns related to communication stress
- Neural synchrony between caregiver and recipient

*Applications:*
- Identify optimal times for important conversations
- Monitor caregiver stress during interactions
- Provide real-time stress reduction support

## Cultural and Linguistic Competence

**Cross-Cultural Communication Research**

*Cultural variations in:*
- Directness vs. indirectness in giving bad news
- Eye contact norms and meaning
- Personal space expectations
- Family involvement in healthcare decisions
- Disclosure of diagnoses (especially dementia)
- Acceptance of supportive services

*Cultural adaptation of communication interventions:*
- Maintain core therapeutic components
- Adapt context and examples
- Use cultural brokers and community health workers
- Translate with cultural equivalence (not literal)
- Involve community in development

**Health Literacy Considerations**

*Universal precautions approach:*
- Assume everyone may have limited health literacy
- Use teach-back method universally
- Provide written materials at 5th-6th grade level
- Limit to 3-5 key points per interaction
- Use visual aids consistently

**Limited English Proficiency (LEP) Populations**

*Evidence-based practices:*
- Professional interpreters (not family members)
- Bilingual healthcare staff
- Translated materials at appropriate literacy level
- Visual aids that cross language barriers
- Culturally appropriate communication styles

## Implementation Science in Communication Interventions

**Barriers to Implementation**

*System-level barriers:*
- Lack of reimbursement for communication training
- Time constraints in clinical settings
- Lack of standardized protocols
- Workforce limitations and turnover

*Provider-level barriers:*
- Underestimation of importance
- Lack of training and confidence
- Belief that skills come naturally
- Competing priorities

*Caregiver-level barriers:*
- Competing demands and time pressure
- Emotional stress affecting communication
- Lack of awareness of strategies
- Skepticism about effectiveness

**Effective Implementation Strategies**

*Education and training:*
- Mandatory communication training for all staff
- Family caregiver education programs
- Just-in-time training at care transitions
- Ongoing coaching and feedback

*System changes:*
- Integration into electronic health records
- Standardized documentation of communication needs
- Assessment protocols embedded in workflows
- Referral pathways to speech-language pathology

*Policy and reimbursement:*
- CPT codes for caregiver communication training
- Quality metrics related to communication
- Reimbursement for interpreter services
- Coverage for communication devices

## Emerging Research Directions

**Precision Communication Approaches**
- Phenotyping care recipients by communication profile
- Tailoring interventions to individual patterns
- Predicting response to specific strategies
- Personalized communication technology

**Neurodegeneration Biomarkers**
- Early identification of communication changes
- Predicting trajectory of decline
- Timing of intervention delivery
- Monitoring treatment response

**Social Determinants of Communication**
- Impact of socioeconomic status on communication
- Effects of social isolation on communication skills
- Community resources for communication support
- Policy implications for addressing disparities

**Global Health Perspectives**
- Cross-cultural validation of interventions
- Low-resource communication support strategies
- Telecommunication for remote caregiving
- International models of caregiver communication support

## Clinical Practice Guidelines

**Comprehensive Communication Care Protocol**

1. *Assessment*: Comprehensive communication evaluation at diagnosis and regularly thereafter
   - Standardized assessment tools
   - Caregiver-reported communication difficulties
   - Observation of natural interactions
   - Assessment of communication environment

2. *Care planning*: Develop individualized communication plan
   - Document effective strategies
   - Identify barriers and facilitators
   - Specify caregiver training needs
   - Plan for progression

3. *Intervention*: Provide evidence-based communication training
   - Hands-on skill development
   - Practice with feedback
   - Written resources
   - Follow-up support

4. *Monitoring*: Track outcomes and adjust plan
   - Behavioral symptom frequency
   - Caregiver burden measures
   - Quality of interaction ratings
   - Communication goal achievement

5. *Transition support*: Adjust for changing needs
   - Anticipate communication changes
   - Prepare new strategies proactively
   - Support emotional adjustment
   - Maintain connection at all stages`,
      keyTerms: [
        { term: 'mirror neuron system', definition: 'Neural network activated both when performing an action and observing it, basis for empathy and understanding' },
        { term: 'conversation analysis', definition: 'Research method examining systematic patterns in naturally occurring talk' },
        { term: 'neural synchrony', definition: 'Coupling of brain activity between interacting individuals, associated with communication effectiveness' },
        { term: 'health literacy universal precautions', definition: 'Assuming all patients may have difficulty understanding and creating all health information accordingly' },
      ],
      clinicalNotes: `Research supports integration of communication interventions into standard care:
1. Screen for communication barriers routinely
2. Refer to speech-language pathology for assessment
3. Provide evidence-based caregiver communication training
4. Document communication strategies in care plans
5. Monitor effectiveness and adjust as needed
6. Address cultural and linguistic barriers systematically`,
    },
  },

  media: [
    {
      id: 'communication-strategies-diagram',
      type: 'diagram',
      filename: 'caregiver-communication-strategies.svg',
      title: 'Evidence-Based Communication Strategies',
      description: 'Visual guide to communication techniques for different situations',
    },
  ],

  citations: [
    {
      id: 'kitwood-person-centered',
      type: 'article',
      title: 'Dementia Reconsidered: The Person Comes First',
      authors: ['Kitwood, T.'],
      source: 'Open University Press',
    },
    {
      id: 'communication-meta-analysis',
      type: 'article',
      title: 'Communication Skills Training for Dementia Caregivers: A Meta-Analysis',
      source: 'Gerontologist',
    },
    {
      id: 'elderspeak-research',
      type: 'article',
      title: 'Elderspeak and Alzheimer\'s Disease',
      authors: ['Williams, K.', 'et al.'],
      source: 'Clinical Gerontologist',
    },
  ],

  crossReferences: [
    { targetId: 'caregiver-basics', targetType: 'concept', relationship: 'related', label: 'Caregiver Basics' },
    { targetId: 'caregiver-emotional-support', targetType: 'concept', relationship: 'related', label: 'Emotional Support' },
    { targetId: 'caring-for-dementia-patients', targetType: 'concept', relationship: 'related', label: 'Dementia Care' },
  ],

  tags: {
    systems: ['caregiver-support'],
    topics: ['communication', 'caregiver skills', 'patient interaction', 'therapeutic communication'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default patientCommunication;
