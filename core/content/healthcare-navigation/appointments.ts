/**
 * Medical Appointments and Preparation - Comprehensive Educational Content
 *
 * Guides patients through scheduling, preparing for, and getting the most
 * from medical appointments, including what to bring and questions to ask.
 */

import { EducationalContent } from '../types';

export const appointmentsContent: EducationalContent = {
  id: 'topic-appointments',
  type: 'topic',
  name: 'Medical Appointments and Preparation',
  nameEs: 'Citas Medicas y Preparacion',
  alternateNames: ['Preparing for Doctor Visits', 'Getting the Most from Appointments', 'Doctor Visit Guide'],

  levels: {
    1: {
      level: 1,
      summary: 'Preparing for a doctor visit helps you get better care. Bring your medicines, write down your questions, and be ready to talk about your health.',
      explanation: `Going to the doctor can feel scary, but being prepared makes it easier. When you plan ahead, you and your doctor can work better as a team to help you stay healthy.

**Before Your Appointment:**

**Make a List:**
- Write down why you want to see the doctor
- List any symptoms you have
- Write down questions you want to ask

**Gather Important Information:**
- List all your medicines (including vitamins)
- Write down any allergies you have
- Bring your insurance card

**During Your Appointment:**

**Talk Openly:**
- Be honest about how you feel
- Don't be embarrassed to share anything
- Your doctor has heard it all before!

**Ask Questions:**
- What is wrong with me?
- What tests do I need?
- What should I do to get better?
- When will I feel better?

**Take Notes:**
- Write down what the doctor tells you
- Or ask if you can record the conversation
- Bring someone with you to help remember

**After Your Appointment:**

**Follow the Plan:**
- Take medicine exactly as directed
- Do the treatments your doctor recommended
- Make any follow-up appointments

**Common Types of Appointments:**

**Check-up (Physical):**
- The doctor makes sure you are healthy
- Checks your blood pressure, heart, etc.
- Ask questions about staying healthy

**Sick Visit:**
- You don't feel well and need help
- Doctor examines you to find the problem
- Gives treatment to help you feel better

**Specialist Visit:**
- A doctor who is an expert in one area
- Your regular doctor sent you there
- They focus on one specific health problem

**Remember:**
Your doctor wants to help you. The more you share and ask, the better they can help!`,
      keyTerms: [
        { term: 'appointment', definition: 'A scheduled time to meet with a doctor or healthcare provider' },
        { term: 'symptom', definition: 'A physical or mental feeling that shows you might be sick or have a health problem' },
        { term: 'follow-up', definition: 'Another appointment to check how you are doing after treatment' },
        { term: 'referral', definition: 'When your doctor sends you to see a specialist' },
      ],
      analogies: [
        'A doctor\'s appointment is like a team huddle - you and your doctor work together to create a game plan for your health.',
        'Think of your appointment like an important meeting at work - preparing beforehand helps you get better results.',
      ],
      examples: [
        'Before your appointment, write down: "I have had a headache for 3 days, it hurts behind my eyes, and ibuprofen doesn\'t help."',
        'Ask your doctor: "What does this word mean?" if you don\'t understand something.',
        'Bring a friend to your appointment if you feel nervous or want help remembering what the doctor says.',
      ],
      patientCounselingPoints: [
        'Write down your questions before your appointment - it\'s easy to forget when you\'re in the office',
        'Be honest about your lifestyle - doctors aren\'t there to judge you',
        'Bring a complete list of ALL your medicines, including over-the-counter ones',
        'If you don\'t understand something, ask the doctor to explain it in plain words',
        'Always know how to contact your doctor if you have questions after your visit',
      ],
    },
    2: {
      level: 2,
      summary: 'Effective medical appointments require preparation including documenting symptoms, listing medications, preparing questions, and understanding what to expect during and after the visit.',
      explanation: `## Getting the Most from Medical Appointments

Preparing for appointments helps you get better care and ensures your concerns are addressed. Think of your appointment as a collaboration - you and your healthcare provider are partners in your health.

## Before Your Appointment

### Scheduling Considerations

**Timing:**
- Book first appointment of the day or right after lunch if you want to minimize wait time
- Mid-week appointments often have less rush than Monday or Friday
- Avoid scheduling important activities immediately after (appointments can run late)

**What to Expect:**
- New patient visits are usually longer (30-60 minutes)
- Follow-up visits are usually shorter (15-30 minutes)
- Specialist visits may involve waiting for test results

### Preparing Your Health Information

**Symptom Diary:**
- Track symptoms for 1-2 weeks before appointment
- Note when symptoms occur, what makes them better or worse
- Rate severity on a scale of 1-10
- Include any patterns you notice

**Medication List:**
- Include ALL medications:
  - Prescription drugs
  - Over-the-counter medicines (pain relievers, allergy meds, etc.)
  - Vitamins and supplements
  - Herbal remedies
- Note dose and frequency
- Include medications you've stopped taking and why

**Medical History:**
- Previous surgeries and hospitalizations
- Major illnesses
- Family history of important conditions (heart disease, cancer, diabetes)
- Allergies to medications, foods, or other things

### Preparing Questions

**The Three-Question Rule:**
- Identify your top 3 concerns
- Ask these first - appointments can go quickly
- Write them down or bring a list

**Helpful Questions to Ask:**
1. What do you think is causing my problem?
2. Do I need any tests? What will they show?
3. What are my treatment options?
4. What are the benefits and risks of each option?
5. What happens if I don't treat this?
6. When should I expect to feel better?
7. What warning signs should I watch for?
8. When do I need to follow up?
9. Is there anything I should read or learn about my condition?
10. How will we know if the treatment is working?

## During Your Appointment

### Getting Started

**Check-In:**
- Arrive 15-20 minutes early for new patient visits
- Bring insurance card and ID
- Bring copay if applicable
- Complete paperwork carefully

**Setting the Agenda:**
- Start by sharing your main concerns
- Say something like: "I have three things I want to discuss today"
- This helps your provider prioritize time

### Communicating Effectively

**Be Specific and Descriptive:**
- Instead of: "My stomach hurts"
- Try: "I have a sharp pain in the lower left part of my stomach that comes and goes. It's worse after eating and better when I rest."

**Share Your Perspective:**
- What do you think is causing the problem?
- What are you most worried about?
- How is this affecting your daily life?

**Be Honest:**
- Share lifestyle habits (diet, exercise, smoking, alcohol, drug use)
- Mention if you're not taking medications as prescribed
- Discuss financial concerns that affect treatment options
- Share if you're feeling stressed or having emotional difficulties

**Ask for Clarification:**
- If your provider uses medical terms you don't understand, ask: "What does that mean?"
- Repeat back what you heard to confirm understanding

### Making Decisions Together

**Shared Decision-Making:**
- Your provider should explain options and involve you in decisions
- You have the right to accept or decline recommended treatments
- Ask about the evidence behind recommendations
- Discuss pros and cons of each option

## After Your Appointment

### Understanding the Plan

**Treatment Plan:**
- Write down or ask for written instructions
- Understand what medications to take and when
- Know what symptoms to watch for
- Understand when to call if you're not improving

**Follow-Up:**
- Schedule any follow-up appointments before you leave
- Understand why follow-up is needed
- Know what should improve before the next visit

### Test Results

**Getting Results:**
- Ask when and how you'll receive test results
- Many offices use patient portals - make sure you have access
- Don't assume "no news is good news" - call if you don't hear back
- Ask for copies of important test results

### Medications

**New Prescriptions:**
- Ask what the medication is for
- Understand how and when to take it
- Ask about side effects and what to do if they occur
- Check if there are cheaper alternatives (generics)
- Ask about interactions with other medications or foods

## For Specific Appointment Types

### Annual Physical / Wellness Visit
- Goal: prevention and health maintenance
- Update all screenings and immunizations
- Discuss healthy lifestyle habits
- No specific problem required - it's a check-in

### Sick Visit
- Focus on your current symptoms
- Be specific about when symptoms started
- What you've tried to treat it
- What helped or made it worse

### Pre-Procedure Appointment
- Understand why the procedure is needed
- Learn how to prepare
- Discuss risks and benefits
- Plan for recovery

### Specialist Visit
- Bring referral from primary care if required
- Expect focused discussion on one area
- Ask how the specialist will communicate with your regular doctor
- Consider bringing relevant medical records or test results

## Tips for Success

**Bring Someone With You:**
- Helps you remember what was discussed
- Takes notes while you talk
- Provides another set of ears
- Can offer emotional support

**Use a Patient Portal:**
- View test results online
- Send questions to your provider
- Request prescription refills
- Schedule appointments
- View your medical records

**Be Your Own Advocate:**
- Speak up if something doesn't make sense
- Get second opinions for serious conditions
- Change providers if the relationship isn't working
- You are the expert on your body and your life`,
      keyTerms: [
        { term: 'symptom', definition: 'Physical or mental indication of illness or disease' },
        { term: 'diagnosis', definition: 'Identification of a disease or condition based on symptoms and tests' },
        { term: 'treatment plan', definition: 'The recommended approach to managing your health condition' },
        { term: 'patient portal', definition: 'Secure online website that gives patients 24-hour access to personal health information' },
        { term: 'shared decision-making', definition: 'Process where patients and providers work together to make healthcare decisions' },
        { term: 'follow-up', definition: 'Subsequent appointment to monitor progress or adjust treatment' },
      ],
      analogies: [
        'Your appointment is like a consultation with an expert - you bring the knowledge about your body and symptoms, and your doctor brings medical expertise.',
        'Think of your healthcare team like a pit crew - each specialist has a role, but communication between them keeps you running smoothly.',
      ],
      patientCounselingPoints: [
        'Keep a health journal or use a phone app to track symptoms between appointments',
        'Update your medication list whenever there\'s a change',
        'After your appointment, summarize what you learned: what\'s wrong, what\'s the plan, and what\'s next',
        'Call your provider if your symptoms get worse or don\'t improve as expected',
        'Ask for copies of your medical records and test results for your personal files',
      ],
    },
    3: {
      level: 3,
      summary: 'Maximizing appointment value requires systematic preparation including symptom documentation, medication reconciliation, question prioritization, and effective communication strategies including shared decision-making.',
      explanation: `## Optimizing Healthcare Encounters

### Appointment Preparation Framework

**Pre-Visit Phase (1-2 weeks before):**

**Symptom Documentation:**
- Onset, duration, frequency, progression
- Severity rating (0-10 scale)
- Location and radiation
- Aggravating and alleviating factors
- Associated symptoms
- Impact on daily function and quality of life
- Previous treatments attempted and response

**Medication Reconciliation:**
- Complete medication list including:
  - Prescription medications with dose and frequency
  - Over-the-counter medications and supplements
  - Herbal and complementary therapies
- Include:
  - Indication (why you take each)
  - Duration of use
  - Previous adverse reactions
  - Adherence challenges (if any)

**Questions and Concerns:**
- Prioritize top 3 concerns
- Categorize: diagnosis, treatment, prognosis, lifestyle, prevention
- Include family history updates
- Consider bringing written list or using phone

**Gathering Records:**
- Previous relevant test results (imaging, lab work)
- Specialists' notes or reports
- Hospital discharge summaries
- Immunization records

### During the Appointment

**Initial Agenda Setting:**
- Begin with: "I have X concerns to discuss"
- Most important issues first
- Confirm time allows addressing all concerns
- Ask: "Which should we prioritize today?"

**Effective History Communication:**
- Use OLDCARTS mnemonic:
  - **O**nset: When did it start?
  - **L**ocation: Where is it? Does it radiate?
  - **D**uration: How long does it last?
  - **C**haracteristics: What does it feel like?
  - **A**ggravating factors: What makes it worse?
  - **R**elieving factors: What makes it better?
  - **T**iming: Is it constant or intermittent?
  - **S**everity: How bad is it (0-10)?

**Physical Examination:**
- Ask what to expect
- Understand what the examiner is checking
- Mention if any part of exam causes discomfort
- Ask about findings as they occur (if appropriate)

**Diagnostic Discussions:**
- Purpose of each test
- How the test is performed
- Preparation required
- Potential risks and benefits
- When and how you'll receive results
- Cost considerations (insurance coverage)

**Treatment Planning:**
- Evidence supporting recommendations
- All reasonable options
- Benefits and risks of each option
- Your preferences and values
- Cost implications
- Expected timeline for improvement
- Warning signs requiring immediate attention

### Shared Decision-Making

**When to Use:**
- Preference-sensitive decisions (multiple reasonable options)
- High-stakes decisions (significant benefits and risks)
- Decisions affecting quality of life
- Situations where scientific evidence is equivocal

**Process:**
1. **Team talk**: Invite you to be involved
2. **Option talk**: Present all reasonable options
3. **Decision talk**: Help you deliberate based on values and preferences
4. **Decision aid**: Use tools when available (pamphlets, videos, online tools)

**Elements to Discuss:**
- Your understanding of the condition
- Your goals and priorities
- Your tolerance for risk
- Impact on daily life
- Financial considerations
- Social support and resources

### Special Appointment Scenarios

**New Patient Visit:**
- Comprehensive history
- Full physical examination
- Establish care goals
- Review existing medical records
- Discuss preventive care needs
- Expected duration: 30-60 minutes

**Annual Wellness Visit:**
- Focus on prevention (not problem-specific)
- Update health risks and family history
- Age-appropriate screenings
- Immunizations
- Advance care planning (for older adults)
- Health promotion counseling

**Problem-Focused Visit:**
- Single concern addressed
- Limited physical examination
- Focused testing or treatment
- Expected duration: 15-20 minutes
- May need separate appointment for other concerns

**Pre-Procedure Consultation:**
- Indication for procedure
- Alternative approaches
- Risks and benefits
- Preparation instructions
- Recovery expectations
- Follow-up plan

**Telehealth Visit:**
- Technical requirements tested beforehand
- Have vital signs if possible (weight, blood pressure, temperature)
- Video preferred over audio-only
- Prepare medications and devices for show-and-tell
- Ensure privacy and good lighting

### Post-Visit Actions

**Understanding Test Results:**
- Reference ranges: what's normal
- Abnormal values: what they mean
- Clinical significance: what matters
- Next steps: monitoring, treatment, referral

**Treatment Adherence:**
- Understand medication instructions
- Know side effects and when to call
- Plan for refills
- Integrate into daily routine
- Identify barriers and solutions

**Follow-Up Planning:**
- When to return
- What should improve by then
- Red flag symptoms requiring earlier contact
- How to contact provider with questions

### Documentation and Health Records

**What to Keep:**
- Copies of test results and imaging reports
- Discharge summaries from hospitalizations
- Procedure reports
- Vaccination records
- Current medication list
- Contact information for providers

**Patient Portal Benefits:**
- Access to medical records
- Test results (often before provider call)
- Secure messaging
- Appointment scheduling
- Prescription refills
- Educational materials

### Communication Challenges

**Overcoming Barriers:**
- Language: Request interpreter services (usually free)
- Hearing: Request accommodation, use messaging through portal
- Literacy: Ask for plain language explanations
- Memory: Bring companion, request written instructions, record conversation
- Anxiety: Bring support person, share concerns with provider

**Dealing with Difficult Topics:**
- Sexual health
- Mental health
- Substance use
- Domestic violence
- Financial concerns
- Embarrassing symptoms

Remember: Providers are trained professionals who have discussed these topics many times. Open communication leads to better care.`,
      keyTerms: [
        { term: 'OLDCARTS', definition: 'Mnemonics for structured symptom history: Onset, Location, Duration, Characteristics, Aggravating factors, Relieving factors, Treatment, Severity' },
        { term: 'shared decision-making', definition: 'Collaborative process where clinician and patient work together to make decisions based on evidence and patient preferences' },
        { term: 'medication reconciliation', definition: 'Systematic process of comparing patient\'s current medications with what has been prescribed' },
        { term: 'advance care planning', definition: 'Process of planning for future medical care in case you become unable to make decisions' },
        { term: 'clinical significance', definition: 'Whether a test result or finding is medically important enough to affect care' },
      ],
      clinicalNotes: 'Preparation and effective communication significantly improve diagnostic accuracy and treatment adherence. Patients who actively participate in their care have better outcomes.',
      patientCounselingPoints: [
        'Complete any pre-visit questionnaires thoughtfully - they help your provider focus on your concerns',
        'Update your provider on any changes since your last visit, even if they seem unrelated',
        'For chronic conditions, track symptoms between visits to identify patterns',
        'Request after-visit summaries and review them for accuracy',
        'Report medication side effects rather than stopping medications without discussion',
      ],
    },
    4: {
      level: 4,
      summary: 'Optimal healthcare delivery requires patients to actively participate through systematic preparation, effective communication, shared decision-making, and understanding of the diagnostic and treatment process.',
      explanation: `## Advanced Appointment Strategies

### Evidence-Based Preparation

**Question Asking Effectiveness:**
- Patients who ask questions receive more information
- "Teach-back" method confirms understanding
- Written question lists increase satisfaction
- Photo/audio recording of visit improves recall

**Question Response Framework:**
- Ask Back: "Can you help me understand?"
- Check Understanding: "Let me repeat what I heard..."
- Express Concern: "I'm worried about..."
- Clarify: "What does that mean in everyday terms?"

### Diagnostic Process Engagement

**Presenting Illness Framework:**
1. Opening statement (why you're here)
2. History of present illness (detailed narrative)
3. Context (life circumstances, impact)
4. Ideas (what you think is wrong)
5. Concerns (what you're worried about)
6. Expectations (what you hope for)

**Diagnostic Uncertainty:**
- Most diagnoses are probabilistic, not absolute
- Workup may be stepwise rather than immediate
- Time may be appropriate diagnostic tool
- Ask: "What else could this be?" (differential diagnosis)

**Understanding Tests:**
- Sensitivity: How good at finding disease if present
- Specificity: How good at ruling out disease if absent
- Positive predictive value: Likelihood disease is present with positive test
- Negative predictive value: Likelihood disease is absent with negative test
- Pre-test probability: How likely before testing

**Value of Testing:**
- Not all tests are helpful
- False positives and false negatives occur
- Overdiagnosis: finding conditions that would never cause harm
- Incidentalomas: unexpected findings requiring follow-up
- Discuss: "How will this test change your management?"

### Treatment Decision-Making

**Decision Aids:**
- Visual representations of risks and benefits
- Personalized risk calculators
- Videos and interactive tools
- Available for many common conditions

**Risk Communication:**
- Absolute risk vs relative risk
- Number needed to treat (NNT)
- Number needed to harm (NNH)
- Natural history: what happens without treatment

**Harms of Treatment:**
- Side effects and adverse events
- Medicalization of normal life experiences
- Financial toxicity
- Opportunity cost
- Psychological impact of diagnosis

### Special Situations

**Multiple Chronic Conditions:**
- Prioritize concerns
- Consider disease burden vs number of conditions
- Medication reconciliation critical
- Deprescribing may be appropriate
- Care coordination between specialists

**Medically Unexplained Symptoms:**
- Symptoms are real even if cause unclear
- Focus on symptom management
- Avoid diagnostic escalation
- Consider functional disorders
- Mental health comorbidity common

**Difficult Diagnosis:**
- Second opinions appropriate
- Consider academic medical centers
- Prepare to retell history (new provider needs direct information)
- Request records transfer beforehand
- Ask about expertise in specific condition

**End-of-Life Discussions:**
- Goals of care conversations
- Code status preferences
- Life-sustaining treatment preferences
- Hospice vs palliative care
- Advance directives

### Communication Techniques

**BATHEing the Visit:**
- **B**ackground: What's going on in your life?
- **A**ffect: How are you feeling about it?
- **T**rouble: What troubles you the most?
- **H**andling: How are you handling it?
- **E**mpathy: I understand this is difficult

**Ask-Tell-Ask:**
- Ask what patient already knows/wants to know
- Tell information in small chunks
- Ask for understanding and concerns

**NURSE for Responding to Emotion:**
- **N**aming: I can see this is upsetting
- **U**nderstanding: This makes sense given...
- **R**especting: You've handled this bravely
- **S**upporting: How can I help?
- **E**xploring: Tell me more about...

### Health System Navigation

**Getting Your Needs Met:**
- Persistent but polite advocacy
- Ask to speak to nurse supervisor or patient advocate if needed
- Document conversations (date, person, what was said)
- Understand appeals processes
- Know when to change providers

**Medication Access:**
- Prior authorization requirements
- Step therapy protocols
- Patient assistance programs
- Generic alternatives
- Therapeutic substitutions

**Specialty Access:**
- Insurance referral requirements
- Appointment wait times
- Geographic considerations
- Telehealth options
- Research participation opportunities

### Digital Health Tools

**Patient Portals:**
- HIPAA-compliant secure messaging
- Access to visit notes (OpenNotes)
- Test result notification
- Appointment scheduling
- Prescription refill requests

**Wearables and Home Monitoring:**
- Bring data to appointments
- Discuss relevance and interpretation
- Understand limitations
- Avoid obsessive monitoring

### Interprofessional Care

**Who You Might See:**
- Physicians (MD/DO)
- Nurse Practitioners (NP)
- Physician Assistants (PA)
- Pharmacists
- Nurses, Case Managers, Social Workers
- Physical/Occupational Therapists
- Dietitians
- Mental health professionals

**Team-Based Care:**
- Clarify roles and responsibilities
- Understand who to contact for what
- Team huddles for complex patients
- Shared care plans

### Follow-Up and Monitoring

**Symptom Monitoring:**
- What to track
- How often to measure
- When to be concerned
- Reporting thresholds
- Tools: apps, paper diaries, scales

**Medication Monitoring:**
- Therapeutic effects
- Side effects
- Drug interactions
- Lab monitoring
- Adherence assessment`,
      keyTerms: [
        { term: 'OpenNotes', definition: 'Movement giving patients access to clinical visit notes, improving transparency and engagement' },
        { term: 'number needed to treat (NNT)', definition: 'Number of patients who need treatment for one to benefit' },
        { term: 'incidentaloma', definition: 'Unexpected finding on imaging unrelated to the reason for the test' },
        { term: 'deprescribing', definition: 'Systematic process of reducing or stopping medications that are no longer beneficial or may be harmful' },
        { term: 'medicalization', definition: 'Defining a problem in medical terms when it may be better understood as a normal life experience' },
        { term: 'functional disorder', definition: 'Symptoms and disability due to problems with how the body functions, not structural damage' },
      ],
      clinicalNotes: `Patient preparation and engagement significantly impact diagnostic accuracy and treatment outcomes. As clinicians, we should:
1. Encourage patients to prepare questions and concerns
2. Use teach-back to confirm understanding
3. Involve patients in decision-making, especially for preference-sensitive decisions
4. Provide written instructions or after-visit summaries
5. Ensure test results are communicated effectively
6. Address barriers to adherence proactively

Research shows that activated patients have better outcomes, lower costs, and higher satisfaction.`,
      patientCounselingPoints: [
        'Request copies of your visit notes (OpenNotes) - reviewing them can improve understanding',
        'For serious conditions, consider bringing a family member or friend to take notes',
        'If you don\'t understand a diagnosis or treatment plan, ask your provider to explain using examples',
        'Before agreeing to a test, ask: "How will this test change your management?"',
        'Keep a personal health record with test results, medication list, and important medical information',
        'For complex decisions, ask if there are decision aids or online resources to review',
      ],
    },
    5: {
      level: 5,
      summary: 'Effective healthcare delivery requires sophisticated patient engagement incorporating evidence-based communication strategies, shared decision-making frameworks, diagnostic literacy, and navigation of complex healthcare systems.',
      explanation: `## Advanced Patient-Provider Communication

### Communication Science

**Evidence-Based Techniques:**
- **Teach-back method**: Associated with improved understanding and adherence
- **Ask-Tell-Ask**: Improves information retention
- **Graphic risk display**: Improves risk comprehension
- **Decision aids**: Improve knowledge, reduce decisional conflict
- **Prompted visit agendas**: Increases patient activation

**Communication Domains:**
- Information exchange
- Emotional support
- Partnership building
- Shared decision-making
- Manage uncertainty

**Time Efficiency Strategies:**
- Prioritize concerns at visit start
- Focused physical exam based on history
- Electronic health record use while maintaining eye contact
- Team-based care (rooming by nurse, MA)
- Asynchronous communication (portal messaging)

### Diagnostic Process

**Diagnostic Timeline:**
1. Initial encounter: Data gathering, hypothesis generation
2. Testing: Data gathering, hypothesis refinement
3. Diagnosis: Synthesis and conclusion
4. Treatment: Implementation
5. Follow-up: Refinement, confirmation, or revision

**Cognitive Biases in Diagnosis:**
- **Anchoring**: Fixating on initial diagnostic impression
- **Confirmation bias**: Seeking confirming evidence
- **Premature closure**: Stopping when one diagnosis is found
- **Availability**: Recent diagnoses come to mind
- **Satisfaction of search**: Stopping after first finding

**Patient Role in Diagnosis:**
- Provide accurate, organized history
- Mention prior similar experiences
- Express concerns and expectations
- Ask "What else could this be?"
- Participate in test decisions
- Follow up on results

**Safety Netting:**
- What symptoms should prompt return
- Expected timeline for improvement
- How and when to access care
- Red flag symptoms requiring immediate attention

### Shared Decision-Making Advanced

**Decision Aid Characteristics:**
- Present balanced information
- Use plain language
- Include probabilities in multiple formats
- Clarify patient values
- Guide deliberation
- Help patients communicate preferences

**Risk Communication Methods:**
- Absolute risk (more easily understood)
- Relative risk (can be misleading)
- Natural frequencies (X in 100)
- Visual displays (icon arrays, bar charts)
- Time trade-off: "Would you trade 5 years of life in perfect health for 10 years with this condition?"

**Preference Assessment:**
- What outcomes matter most?
- Tolerance for risk?
- Acceptable burden of treatment?
- Financial considerations?
- Impact on family/caregivers?
- Cultural/spiritual values?

### Special Clinical Contexts

**Multiple Chronic Conditions:**
- Guideline conflict: Treatments for one condition may harm another
- Polypharmacy: Medication burden and interactions
- Disease-disease interactions
- Competing priorities
- Deprescribing opportunities

**Diagnostic Uncertainty:**
- Probability rather than certainty
- Bayesian reasoning: revise probability based on new information
- Watchful waiting vs aggressive workup
- Value of time as diagnostic test
- Accepting uncertainty may be appropriate

**Palliative and End-of-Life:**
- Goals of care conversations
- Prognosis communication (accurate but hopeful)
- Code status: CPR, mechanical ventilation, feeding tubes
- Hospice eligibility and benefits
- Advance care planning: living will, healthcare proxy

**Chronic Pain:**
- Function over pain score
- Multimodal management
- Risk-benefit of opioids
- Non-pharmacologic approaches
- Psychological comorbidities
- Functional goals

**Mental Health:**
- Stigma and willingness to discuss
- Integrating with physical health
- Medication options and side effects
- Psychotherapy options
- Crisis planning
- Safety assessment

### Health System Navigation

**Access Challenges:**
- Insurance barriers (prior authorization, formularies)
- Specialty access (wait times, geography)
- Transportation barriers
- Health literacy
- Digital divide

**Advocacy Strategies:**
- Document all communications
- Understand appeals processes
- Engage patient advocates or social workers
- Utilize nurse hotlines
- Request supervisor when appropriate
- Change providers if relationship not working

**Cost Considerations:**
- Ask about costs before procedures
- Generic medications
- Financial assistance programs
- Hospital charity care
- Negotiated pricing options

### Digital Health Integration

**Telehealth:**
- Appropriate for: follow-up, medication management, mental health, consults
- Not appropriate for: physical exam needs, emergencies, procedures
- Technical requirements: video, audio, internet
- Documentation and privacy considerations

**Patient Portals and OpenNotes:**
- Access to visit notes improves:
  - Understanding
  - Medication adherence
  - Safety (error detection)
  - Engagement
- Concerns: confusion, worry, time spent addressing questions

**Wearables and Remote Monitoring:**
- Data can be useful but overwhelming
- Discuss relevance before using
- Avoid over-monitoring
- Understand limitations

**Artificial Intelligence:**
- Symptom checkers and chatbots
- Diagnostic support (not replacement)
- Information retrieval
- Personalized risk prediction

### Cross-Cultural Communication

**LEARN Model:**
- **L**isten to patient's perception
- **E**xplain your perceptions
- **A**cknowledge differences and similarities
- **R**ecommend treatment
- **N**egotiate agreement

**Cultural Humility:**
- Lifelong learning about other cultures
- Self-reflection on biases
- Community engagement
- Respect for cultural practices

**Language Access:**
- Professional medical interpreters (required by law)
- Not family members or children
- Trained in medical terminology
- Confidentiality

### Research Participation

**Clinical Trials:**
- Potential benefits: access to new treatments, close monitoring
- Potential risks: unknown effects, side effects
- Informed consent: thorough explanation
- Right to withdraw
- Consider: phase of trial, randomization, control group

**Observational Studies:**
- Surveys, registries, cohort studies
- Contribute to generalizable knowledge
- Typically minimal risk
- Privacy considerations

### Professional Responsibility

**Transparency:**
- Share uncertainties openly
- Acknowledge when you don't know
- Explain reasoning for recommendations
- Discuss alternative viewpoints

**Patient Education:**
- Confirm understanding (teach-back)
- Written materials at appropriate literacy level
- Link to reputable online resources
- Encourage questions between visits

**Continuity:**
- Importance of longitudinal relationship
- Build trust over time
- Understand patient as whole person
- Recognize life circumstances

**Self-Reflection:**
- How did the visit go?
- Was patient engagement adequate?
- Was shared decision-making utilized?
- Were patient concerns addressed?
- What could improve next time?`,
      keyTerms: [
        { term: 'teach-back', definition: 'Patient-centered communication technique where patient explains understanding in own words' },
        { term: 'diagnostic timeout', definition: 'Intentional pause to consider diagnostic possibilities before premature closure' },
        { term: 'safety netting', definition: 'Planning what to do if symptoms don\'t improve as expected or worsen' },
        { term: 'deprescribing', definition: 'Systematic process of reducing or stopping medications that are no longer beneficial or may be harmful' },
        { term: 'health literacy', definition: 'Degree to which individuals can obtain, process, and understand basic health information' },
        { term: 'Bayesian reasoning', definition: 'Method of updating probability of a diagnosis based on new information (test results, symptoms)' },
      ],
      clinicalNotes: `As clinicians, we must:
1. Prepare for visits by reviewing records and anticipating concerns
2. Begin each visit with agenda setting: "What are your concerns today?"
3. Use teach-back to confirm understanding at multiple points
4. Involve patients in decisions, explaining risks and benefits
5. Document conversations and decisions clearly
6. Provide written after-visit summaries
7. Ensure test results are communicated with explanation
8. Practice cultural humility and health literacy universal precautions

Remember: Patients are experts on their bodies and lives. Our role is to bring medical expertise to support their decision-making.`,
    },
  },

  media: [
    {
      id: 'appointment-prep-checklist',
      type: 'diagram',
      filename: 'appointment-prep-checklist.svg',
      title: 'Appointment Preparation Checklist',
      description: 'Interactive checklist for preparing for medical appointments',
    },
    {
      id: 'questions-to-ask',
      type: 'diagram',
      filename: 'questions-to-ask.svg',
      title: 'Essential Questions to Ask Your Doctor',
      description: 'Framework of important questions for different appointment types',
    },
  ],

  citations: [
    {
      id: 'ahrq-questions',
      type: 'website',
      title: 'Questions Are the Answer',
      source: 'Agency for Healthcare Research and Quality',
      url: 'https://www.ahrq.gov/questionsaretheanswer/index.html',
    },
    {
      id: 'opennotes',
      type: 'website',
      title: 'OpenNotes: Giving Patients Access to Visit Notes',
      source: 'OpenNotes',
      url: 'https://www.opennotes.org/',
    },
    {
      id: 'shared-decision-making',
      type: 'article',
      title: 'Shared Decision Making: The Pinnacle of Patient-Centered Care',
      source: 'American Family Physician',
    },
  ],

  crossReferences: [
    { targetId: 'topic-healthcare-system-basics', targetType: 'topic', relationship: 'related', label: 'Healthcare System Basics' },
    { targetId: 'topic-finding-providers', targetType: 'topic', relationship: 'related', label: 'Finding Providers' },
    { targetId: 'topic-advocacy', targetType: 'topic', relationship: 'related', label: 'Self-Advocacy in Healthcare' },
  ],

  tags: {
    systems: ['healthcare-navigation'],
    topics: ['appointments', 'patient-provider communication', 'preparation', 'shared decision-making'],
    keywords: ['doctor visit', 'preparing for appointment', 'questions to ask', 'patient portal'],
    clinicalRelevance: 'high',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default appointmentsContent;
