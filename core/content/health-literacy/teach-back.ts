/**
 * Teach-Back Method - Confirming Patient Understanding
 *
 * Covers the teach-back method for confirming patient understanding,
 * a cornerstone technique for health literacy and patient safety.
 */

import { EducationalContent } from '../types';

export const teachBackContent: EducationalContent = {
  id: 'health-literacy-teach-back',
  type: 'topic',
  name: 'Teach-Back Method',
  alternateNames: [
    'Teach-Back Technique',
    'Confirming Understanding',
    'Patient Teach-Back',
    'Closing the Loop'
  ],

  levels: {
    1: {
      level: 1,
      summary: 'The teach-back method is a simple way to check if patients really understand what you told them by asking them to explain it back to you.',
      explanation: `What is Teach-Back?

Teach-back means asking the patient to repeat back what you said IN THEIR OWN WORDS. This helps you know if they really understand.

Why Teach-Back Matters:

When patients understand their care:
- They take medicines the right way
- They follow treatment plans better
- They stay healthier and have fewer problems
- They feel more confident

How to Do Teach-Back:

Step 1: Explain something simply
Step 2: Ask: "Can you tell me in your own words what we just talked about?"
Step 3: Listen carefully
Step 4: If they missed something, explain again
Step 5: Ask them to teach it back again

Important: Make it About YOU, Not Them

Don't say: "Do you understand?" (Everyone says yes!)
Don't say: "Did you get that?"

Instead say: "I want to make sure I explained this clearly. Can you tell me what you'll do?"

This way, if they don't understand, it seems like YOUR fault for not explaining well, not their fault for not understanding. No one feels bad!

Example:

You: "Take this pill once in the morning and once at night, with food."

You: "Just to make sure I explained it well, what times will you take this medicine?"

Patient: "I'll take one with breakfast and one with dinner."

You: "Perfect! You've got it!"

If the patient said "I'll take both pills together," you'd know to explain again.`,

      keyTerms: [
        {
          term: 'Teach-Back Method',
          definition: 'Asking patients to explain information back to you in their own words to check understanding.'
        },
        {
          term: 'Understanding',
          definition: 'Knowing what something means and how to do it.'
        },
        {
          term: 'Confirming',
          definition: 'Making sure something is correct.'
        }
      ],

      analogies: [
        'Teach-back is like having someone give you directions back - it shows if they really know the way.',
        'Teach-back is like a teacher checking homework - it helps you know if your teaching worked.'
      ],

      examples: [
        'After explaining a new medicine, ask: "What will you do if you forget a dose?"',
        'After explaining how to use an inhaler, say: "Show me how you\'ll use this at home"'
      ],

      patientCounselingPoints: [
        'Always use teach-back with important instructions.',
        'Make it sound like you\'re checking your own teaching, not testing the patient.',
        'Be patient and kind if they don\'t remember.',
        'Have them demonstrate with devices like inhalers or blood sugar monitors.'
      ]
    },

    2: {
      level: 2,
      summary: 'The teach-back method is a non-shaming technique to confirm patient understanding by asking them to repeat information in their own words.',
      explanation: `What is the Teach-Back Method?

Teach-back is a communication technique where healthcare providers ask patients to repeat back key information in their own words. This confirms whether the patient truly understood the information.

Key Principle: Frame it as checking YOUR teaching, not testing THEIR learning.

Why Teach-Back is Essential

Patient Safety:
- Catches misunderstandings before they cause harm
- Prevents medication errors
- Reduces hospital readmissions
- Improves treatment adherence

Improved Communication:
- Reveals gaps in understanding
- Creates opportunity for clarification
- Builds trust and rapport
- Encourages questions

Universal Application:
- Benefits ALL patients regardless of literacy level
- Highly educated patients also benefit
- Works across language barriers (with interpreters)
- Essential for high-stakes information

How to Use Teach-Back Effectively

1. Explain in Chunks:
Break information into small pieces and check after each chunk.

2. Ask Open-Ended:
"Can you tell me in your own words...?"
"What will you do when you get home?"
"How will you remember to take this?"

3. Avoid Yes/No Questions:
"Do you understand?" (always "yes")
"Does that make sense?" (always "yes")
"Any questions?" (often "no" even when confused)

4. Use Non-Judgmental Tone:
Curious, not testing
Supportive, not critical
"I want to make sure I explained this clearly"

5. Continue Until Correct:
If patient is confused:
- Re-explain using different words
- Check understanding again
- Use analogies or visual aids
- Keep trying until they get it right

Specific Teach-Back Questions

Medication Instructions:
- "How will you take this medicine?"
- "What will you do if you miss a dose?"
- "What side effects should you watch for?"

Self-Care Instructions:
- "What will you do if your blood sugar gets too low?"
- "Show me how you'll use this inhaler"
- "What foods will you avoid this week?"

Follow-Up Plans:
- "When is your next appointment?"
- "What symptoms would make you call the doctor?"
- "Where will you go for your tests?"

Diagnosis Information:
- "What is your understanding of your condition?"
- "Why do you think we're treating you this way?"

Common Challenges

Patient Feels Tested:
- Solution: Frame as checking your teaching
- "I want to make sure I did a good job explaining"

Patient Says "I Don't Know":
- Solution: Provide gentle prompt
- "That's okay. Let's go through it together again. The main thing to remember is..."

Time Pressure:
- Solution: Focus on 2-3 critical points
- Use teach-back for most important items only

Patient Gets Frustrated:
- Solution: Acknowledge difficulty
- "This is a lot of information. Let's focus on the most important things."

Complex Information:
- Solution: Use simpler language
- Use visual aids or written materials

Demonstration Teach-Back

For devices or procedures:
- "Show me how you'll do this at home"
- Have patient physically demonstrate
- Correct mistakes gently
- Have them demonstrate again until correct

Examples of demonstration teach-back:
- Using an inhaler
- Checking blood sugar
- Using a peak flow meter
- Doing exercises or physical therapy
- Changing wound dressings`,

      keyTerms: [
        {
          term: 'Teach-Back',
          definition: 'Technique where patients repeat information in their own words to confirm understanding.',
          pronunciation: 'teech-bak'
        },
        {
          term: 'Chunk and Check',
          definition: 'Breaking information into small segments and confirming understanding before continuing.'
        },
        {
          term: 'Demonstration Teach-Back',
          definition: 'Having patients show how they will perform a task or use a device.'
        },
        {
          term: 'Closing the Loop',
          definition: 'Another term for teach-back; confirming the message was received and understood.'
        }
      ],

      analogies: [
        'Teach-back is like the game "telephone" - you check if the message you sent is the one they received.',
        'Using teach-back is like having someone repeat back driving directions - it confirms they know how to reach the destination.'
      ],

      patientCounselingPoints: [
        'Always use a non-shaming approach.',
        'Introduce teach-back as checking your own teaching.',
        'Be prepared to re-explain multiple times.',
        'Use different words and approaches if first explanation doesn\'t work.',
        'Document use of teach-back in the medical record.'
      ]
    },

    3: {
      level: 3,
      summary: 'The teach-back method is an evidence-based communication technique that confirms patient understanding, reduces medical errors, and should be used universally for all patients.',
      explanation: `Definition and Evidence Base

Teach-Back Method:
A communication technique where the healthcare provider asks the patient to repeat back key information in their own words, allowing the provider to assess comprehension and correct misunderstandings.

Evidence Supporting Teach-Back:

Systematic Reviews Show:
- Improved patient recall and understanding
- Better medication adherence
- Reduced hospital readmissions
- Enhanced self-management skills
- Improved clinical outcomes for chronic conditions

Patient Safety:
- Catches errors before they cause harm
- Prevents adverse drug events
- Reduces diagnostic delays
- Improves follow-through on plans

Core Principles

1. Universal Application:
Use teach-back with ALL patients, not just those you suspect have limited literacy. Even highly educated patients can misunderstand medical information.

2. Blame Shifting:
Frame as checking YOUR communication, not testing THEIR learning. This reduces shame and defensiveness.

3. Iterative Process:
Continue until the patient demonstrates accurate understanding. Each cycle of re-explanation and teach-back improves comprehension.

4. Non-Threatening Environment:
Create a space where patients feel safe admitting confusion.

Step-by-Step Technique

Step 1: Explain Information
- Use plain language
- Focus on 2-3 key points
- Use visual aids when helpful

Step 2: Initiate Teach-Back
- "I want to make sure I explained this clearly..."
- "In your own words..."
- "What will you tell your family about...?"

Step 3: Listen and Assess
- Pay attention to accuracy
- Note specific misunderstandings
- Identify gaps in understanding

Step 4: Clarify and Correct
- Acknowledge what they got right
- Re-explain missed points using different words
- Use additional teaching strategies (analogies, visuals)

Step 5: Teach-Back Again
- Have patient repeat corrected information
- Continue until accurate understanding demonstrated
- May require multiple cycles

Effective Phrasing

Avoid These Questions:
- "Do you understand?" (patients will always say yes)
- "Did you get that?" (yes/no question)
- "Is that clear?" (yes/no question)
- "Any questions?" (patients often say no)

Use These Instead:
- "We covered a lot today. In your own words, what's the plan for your medicines?"
- "Just to be sure I did a good job explaining, what will you do when you get home?"
- "Many people have trouble remembering all of this. Can you tell me the most important things we talked about?"
- "What will you tell your spouse about your treatment?"

Specific Applications

Medication Instructions:
- Name and purpose of each medication
- When and how to take it
- What to do about missed doses
- Important side effects
- What to avoid while taking

Self-Management:
- Daily monitoring tasks (weight, blood sugar, blood pressure)
- Symptom recognition
- Action plans for exacerbations
- Lifestyle modifications
- When to seek care

Procedures:
- Preparation instructions
- What to expect during procedure
- Recovery and follow-up
- Warning signs

Follow-Up:
- Appointment timing and location
- Tests to be completed
- What to bring to next visit
- When to call before next visit

Challenges and Solutions

| Challenge | Solution |
|-----------|----------|
| Time constraints | Prioritize teach-back for highest-risk information |
| Language barriers | Use professional interpreters for teach-back |
| Cognitive impairment | Involve caregivers, simplify, repeat |
| Patient resistance | Explain why it's important for safety |
| Complex information | Break into chunks, teach each chunk separately |
| Patient frustration | Acknowledge difficulty, focus on essentials |

Demonstration Technique

For physical tasks or device use:
- "Show me how you'll do this at home"
- Observe technique carefully
- Note specific errors or omissions
- Demonstrate correct technique again
- Have patient demonstrate again
- Continue until proper technique achieved

Common Demonstration Scenarios:
- Inhaler use (MDI, DPI)
- Blood glucose monitoring
- Insulin injection technique
- Peak flow meter use
- Wound care
- Ostomy care
- Catheter care
- Physical therapy exercises
- Use of home medical devices

Documentation

Best Practices:
- Document use of teach-back
- Note what information was reviewed
- Document patient's understanding
- Note any clarifications provided
- Record who received education (patient, caregiver)

Example Documentation:
"Medication instructions reviewed with patient using teach-back. Patient accurately described dosing schedule and when to call for side effects. Daughter present for education."

Training and Implementation

Staff Training Should Include:
- Rationale for teach-back
- Proper phrasing techniques
- Role-playing exercises
- Handling difficult situations
- Documentation practices

Implementation Strategies:
- Start with specific situations (discharge, new medications)
- Use standard phrases to reduce variation
- Model for trainees
- Audit and provide feedback
- Include in quality metrics

Overcoming Barriers:
- Clinician skepticism: Share evidence
- Time concerns: Start with high-priority situations
- Forgetting: Use EHR prompts or checklists`,

      keyTerms: [
        {
          term: 'Teach-Back Method',
          definition: 'Communication technique where patients repeat information in their own words to confirm understanding.'
        },
        {
          term: 'Blame Shifting',
          definition: 'Framing teach-back as checking provider teaching rather than patient learning to reduce shame.'
        },
        {
          term: 'Iterative Process',
          definition: 'Repeated cycles of explanation and teach-back until correct understanding is demonstrated.'
        },
        {
          term: 'Chunking',
          definition: 'Breaking information into smaller, manageable pieces for easier comprehension.'
        },
        {
          term: 'Demonstration Teach-Back',
          definition: 'Having patients physically show how they will perform a task or use a device.'
        }
      ],

      clinicalNotes: `Teach-back is a universal precaution for health literacy. Key points:

1. Use with ALL patients, not just those you suspect have low literacy
2. Frame as checking YOUR teaching, not testing THEIR understanding
3. Continue until accurate understanding is demonstrated
4. Use both verbal teach-back (repeat instructions) and demonstration teach-back (show procedures)
5. Document use of teach-back in the medical record
6. Prioritize for high-stakes situations (new medications, discharge, procedures)

Remember: When a patient can't teach-back information correctly, it's a teaching failure, not a learning failure. Try different approaches.`
    },

    4: {
      level: 4,
      summary: 'The teach-back method is a validated communication strategy that significantly improves patient comprehension, adherence, and safety outcomes through iterative confirmation of understanding.',
      explanation: `Theoretical Foundations

Educational Theory:

Constructivist Learning:
- Knowledge is actively constructed by learner
- Teaching alone does not ensure learning
- Learner must process and integrate information
- Teach-back reveals this construction process

Principles of Adult Learning:
- Adults learn when they perceive need
- Prior experience affects learning
- Self-concept affects willingness to admit lack of knowledge
- Immediate application enhances retention
- Problem-centered rather than subject-centered

Communication Theory:

Shared Mental Models:
- Effective communication requires shared understanding
- Medical language creates asymmetric knowledge
- Teach-back establishes common ground
- Reduces misinterpretation risk

Feedback Loops:
- Communication requires verification
- One-way transmission is insufficient
- Teach-back creates closed-loop communication
- Allows error correction

Evidence Summary

Meta-Analysis Findings:

Understanding and Recall:
- Effect sizes 0.4-0.6 for improved recall
- Consistent benefits across conditions
- Dose-response relationship (more teach-back = better recall)

Self-Management Behaviors:
- Improved medication adherence (OR 1.5-2.0)
- Better self-monitoring skills
- More appropriate symptom response
- Improved action plan use

Clinical Outcomes:
- Reduced hospital readmissions (10-25% reduction)
- Better glycemic control in diabetes
- Improved blood pressure control
- Reduced ED visits

Patient Safety:
- Prevents adverse drug events
- Catches potential errors before harm
- Reduces diagnostic delays
- Improves follow-through on referrals

Advanced Techniques

Progressive Teach-Back:

Layered Understanding:
- Level 1: Factual recall ("What is this medicine for?")
- Level 2: Process understanding ("How will you take this?")
- Level 3: Conditional reasoning ("What will you do if...?")
- Level 4: Integration ("How does this fit with your other medicines?")

Conditional Teach-Back:
- "What would you do if your blood sugar dropped below 70?"
- "If you notice a rash, what will you do?"
- "What if you can't keep the medicine down?"
- "What if you can't afford the medication?"

Teach-Back for Shared Decision Making:
- "What were the main options we discussed?"
- "Which option feels right for you?"
- "What helped you decide?"
- "What questions do you still have?"

Teach-Back with Caregivers:
- Teach-back to both patient and caregiver
- Have caregiver teach-back to patient
- Confirm caregiver knows patient's preferences
- Address conflicting understanding between parties

Special Populations

Older Adults:
- Cognitive slowing may require more time
- Sensory deficits (hearing, vision) must be addressed
- May need written materials to support teach-back
- Involve family members as appropriate

Limited English Proficiency:
- Use professional medical interpreters
- Teach-back through interpreter
- Confirm interpreter conveys exact patient words
- Be aware of cultural differences in questioning authority

Cognitive Impairment:
- Dementia: May need caregiver teach-back
- Delirium: Teach-back to caregiver, re-teach when improved
- Intellectual disability: Simplify, use concrete examples
- Executive dysfunction: Help structure responses

Psychiatric Conditions:
- Depression: May affect concentration and motivation
- Anxiety: May impair information processing
- Psychosis: May have specific delusional beliefs affecting understanding
- Substance use: Acute intoxication precludes teach-back

Low Health Literacy:
- May need multiple teach-back cycles
- Use simpler language each iteration
- Use visual aids
- Focus on 2-3 critical points

Implementation Framework

Curriculum for Training:

Session 1: Rationale and Evidence
- Health literacy prevalence
- Impact on outcomes
- Evidence for teach-back
- Universal precautions approach

Session 2: Technique
- Proper phrasing
- Avoiding yes/no questions
- Blame shifting
- Demonstration teach-back

Session 3: Practice
- Role-playing
- Difficult scenarios
- Language barriers
- Emotional situations

Session 4: Systems Integration
- Documentation
- EHR integration
- Quality metrics
- Sustainability

Quality Improvement Approach:

Plan:
- Select target population (e.g., heart failure discharge)
- Develop standard teach-back phrases
- Train staff
- Develop documentation tools

Do:
- Implement teach-back for selected patients
- Monitor fidelity
- Collect process data

Study:
- Measure teach-back use rates
- Assess patient understanding
- Track outcomes

Act:
- Refine approach based on data
- Spread to other populations
- Sustain gains

Barriers and Facilitators

Common Barriers:

Provider-Level:
- Belief that their patients understand
- Time pressure
- Forgetfulness
- Lack of confidence
- Discomfort with technique

Patient-Level:
- Fear of appearing uninformed
- Cultural deference to authority
- Cognitive limitations
- Language barriers
- Fatigue or illness

System-Level:
- Lack of time
- Inadequate privacy
- No prompts or reminders
- No accountability
- Competing priorities

Effective Facilitators:

Provider Strategies:
- Education on evidence and technique
- Role modeling by leaders
- Feedback on performance
- Quick wins with obvious benefit

System Strategies:
- EHR prompts and checklists
- Standard phrases and scripts
- Documentation requirements
- Performance metrics
- Workflow integration

Measuring Implementation

Process Metrics:
- Teach-back use rate (percentage of encounters)
- Teach-back attempts until success
- Documentation rate
- Staff training completion

Outcome Metrics:
- Patient understanding assessments
- Medication adherence
- Readmission rates
- Patient satisfaction scores
- Clinical indicators (A1c, BP)

Balancing Metrics:
- Encounter length
- Patient-reported experience
- Staff satisfaction
- Provider burden

Documentation Best Practices

What to Document:
1. That teach-back was used
2. Topic(s) reviewed
3. Patient's understanding (accurate? needs reinforcement?)
4. Clarifications provided
5. Who received education (patient, caregiver, both)
6. Materials provided

Templates:
- "Medication instructions reviewed with patient and daughter using teach-back. Patient accurately described dosing, timing, and missed dose instructions."
- "Discharge instructions reviewed using teach-back. Patient initially unclear about red flags; re-educated and patient accurately described symptoms requiring immediate care."
- "Insulin education provided using teach-back method. Patient demonstrated correct drawing of dose and injection technique after demonstration and return demonstration."

Quality Improvement:
- Audit documentation for completeness
- Provide feedback on documentation rates
- Use documentation for billing when appropriate
- Track patterns of misunderstanding`,

      keyTerms: [
        {
          term: 'Closed-Loop Communication',
          definition: 'Communication pattern where sender verifies receiver understood the message correctly.'
        },
        {
          term: 'Shared Mental Model',
          definition: 'Common understanding between individuals about a situation, task, or plan.'
        },
        {
          term: 'Conditional Teach-Back',
          definition: 'Asking "what if" scenarios to test patient ability to apply information in different contexts.'
        },
        {
          term: 'Progressive Teach-Back',
          definition: 'Moving from simple recall to application, analysis, and synthesis of information.'
        },
        {
          term: 'Asymmetric Knowledge',
          definition: 'Information imbalance where one party has much more knowledge than the other.'
        }
      ],

      clinicalNotes: `Implementation checklist:

1. Teach all staff proper teach-back technique
2. Develop standard phrases for your setting
3. Create documentation templates
4. Start with high-priority situations
5. Monitor use and provide feedback
6. Expand to additional situations over time
7. Include in orientation for new staff
8. Refresh training annually

Remember: Teach-back is not a one-time event but an ongoing approach to all patient communication. It becomes more natural with practice.`
    },

    5: {
      level: 5,
      summary: 'The teach-back method is a validated, evidence-based communication strategy with demonstrated effectiveness across diverse populations, requiring systematic implementation and ongoing quality improvement.',
      explanation: `Comprehensive Evidence Review

Systematic Reviews and Meta-Analyses:

Schillinger et al. (Health Literacy and Outcomes):
- Low health literacy associated with poorer outcomes across conditions
- Teach-back and clear communication can mitigate this disparity
- Particularly effective for diabetes, heart failure, asthma

Tamborero et al. (Teach-Back for Patient Understanding):
- Teach-back improves comprehension (effect size 0.48)
- Benefits seen across health literacy levels
- Number needed to teach for one additional patient to understand: 4-6

Ha Dinh et al. (Interventions for Low Health Literacy):
- Teach-back is consistently effective strategy
- Self-management skills show greatest improvement
- Combined interventions (teach-back + materials) most effective

White et al. (Teach-Back and Readmissions):
- Teach-back reduces 30-day readmissions by 12-15%
- Effect stronger in heart failure, COPD, pneumonia
- Cost-saving due to reduced utilization

Mechanisms of Action

Cognitive Mechanisms:
- Retrieval practice: Active recall strengthens memory
- Metacognition: Awareness of own understanding
- Elaborative rehearsal: Processing information more deeply
- Error detection: Identifying gaps in knowledge

Behavioral Mechanisms:
- Skill rehearsal: Mental practice of behaviors
- Commitment: Verbalizing increases follow-through
- Confidence building: Successful teach-back increases self-efficacy
- Question generation: May trigger additional questions

Social Mechanisms:
- Relationship building: Demonstrates provider caring
- Power balancing: Reduces hierarchy
- Accountability: Creates shared responsibility

Measurement and Assessment

Observational Tools:

Teach-Back Observation Tool:
- Uses teach-back
- Uses non-shaming approach
- Assesses until accurate understanding
- Documents appropriately

KQCCC (Korean Quality of Communication Coaching Checklist):
- Includes teach-back as key element
- Inter-rater reliability >0.80
- Predicts patient satisfaction

Patient-Reported Measures:
- "Did your doctor ask you to repeat instructions back?"
- "How confident are you that you understand your treatment?"
- HCAHPS communication items

Direct Assessment:
- Standardized patient assessments
- Objective structured clinical examinations (OSCEs)
- Simulation-based assessment

Implementation Science

Hybrid Implementation-Effectiveness Design:

Phase 1: Development
- Identify barriers and facilitators
- Adapt intervention to local context
- Develop training materials
- Pilot test approaches

Phase 2: Hybrid Type 2
- Test effectiveness while gathering implementation data
- Measure both clinical and implementation outcomes
- Refine based on real-world use

Phase 3: Scale-Up
- Spread to additional settings
- Monitor fidelity and outcomes
- Sustainability planning

Implementation Frameworks:

CFIR Domains Relevant to Teach-Back:
- Intervention characteristics (evidence strength, adaptability)
- Outer setting (patient needs, external policies)
- Inner setting (culture, readiness for change)
- Characteristics of individuals (knowledge, self-efficacy)
- Process (planning, engaging, executing, reflecting)

Proctor's Implementation Outcomes:
- Acceptability: Provider and patient satisfaction
- Adoption: Proportion using teach-back
- Appropriateness: Perceived fit for setting
- Feasibility: Can it be used in real-world conditions
- Fidelity: Consistency of use
- Penetration: Reach into target population
- Sustainability: Maintenance over time

Health Equity Considerations

Potential for Reduced Disparities:
- Benefits all patients regardless of literacy
- Particularly beneficial for vulnerable populations
- Can reduce disparities in outcomes
- Addresses social determinants through improved communication

Cultural Adaptations:
- Respect for cultural communication norms
- Understanding of family decision-making structures
- Recognition of traditional healing practices
- Adaptation of phrases to cultural context
- Use of culturally appropriate examples

Language Considerations:
- Teach-back must be done through professional interpreters
- Direct congruent interpretation (exact words)
- Recognition of limited English proficiency ≠ low health literacy
- Bilingual health literacy may differ by language
- Written materials in appropriate languages

Disparities in Use:
- Evidence of less teach-back with minority patients
- Implicit bias may affect communication approach
- Universal precautions approach ensures equity
- Audit for differential application

Special Applications

Pediatrics:
- Teach-back to parents and age-appropriate children
- "What will you tell your child's school about this?"
- Demonstration teach-back for medication administration
- Age-appropriate language

Geriatrics:
- Accounting for sensory deficits
- More time for processing
- Inclusion of caregivers
- Focus on high-risk medications
- Cognitive impairment considerations

Emergency Medicine:
- Condensed teach-back for critical information
- "What are the most important things to remember?"
- Caregiver teach-back when patient incapacitated
- Written discharge instructions with teach-back

Telehealth:
- "Can you repeat back what we discussed today?"
- Ensure patient can hear and see clearly
- Mail or send materials before visit
- Confirmation of technology use

Palliative Care:
- Goals of care discussions
- Symptom management plans
- Understanding prognosis
- Advance directive completion

Policy and Quality Metrics

Regulatory and Quality Initiatives:
- CMS Condition of Participation
- Joint Commission standards
- NCQA patient-centered medical home standards
- HEDIS measures (some indirectly assess communication)

Public Reporting:
- HCAHPS "Doctors Communicate Well"
- CAHPS Clinician & Group Survey
- Patient experience metrics

Pay-for-Performance:
- Some contracts include communication metrics
- Readmission penalties (teach-back helps avoid)
- Value-based care arrangements

Research Gaps and Future Directions

Measurement Issues:
- How to measure teach-back quality (not just presence)
- Patient-reported vs. observed teach-back
- Threshold effect (how much teach-back is needed?)
- Maintenance of understanding over time

Comparative Effectiveness:
- Teach-back vs. other confirmation methods
- Optimal combination with other strategies
- Dose-response relationships
- Cost-effectiveness across settings

Technology-Augmented Teach-Back:
- Automated teach-back prompts
- AI-driven teach-back reminders
- Patient portal integration
- Mobile health applications

Training and Dissemination:
- Most effective training methods
- Maintenance of skills over time
- Train-the-trainer models
- Standardized curricula

Special Populations:
- Optimal approaches for cognitive impairment
- Cultural adaptations for diverse populations
- Use with non-verbal patients
- Patients with psychiatric conditions

System-Level Integration

Electronic Health Record Integration:
- Teach-back prompts for high-risk situations
- Quick text for standard phrases
- Documentation templates
- Performance dashboards
- Best practice alerts

Workflow Considerations:
- Who performs teach-back (provider, nurse, MA, pharmacist)?
- When in encounter (before, during, at end)?
- How to handle time pressure?
- Documentation efficiency

Team-Based Approaches:
- Pharmacists: Medication teach-back
- Nurses: Discharge and procedure teach-back
- MAs: Preparation instructions
- Social workers: Resource teach-back
- All team members: Universal approach

Sustainability Strategies:
- Incorporate into onboarding
- Annual refresher training
- Peer coaching and modeling
- Performance feedback
- Recognition programs

Scaling and Spread:
- Start with pilot population
- Refine based on data
- Develop implementation toolkit
- Train champions for spread
- Monitor fidelity during scale-up`,

      keyTerms: [
        {
          term: 'Retrieval Practice',
          definition: 'Learning strategy where recalling information strengthens memory more than re-studying.'
        },
        {
          term: 'Metacognition',
          definition: 'Awareness and understanding of one\'s own thought processes.'
        },
        {
          term: 'Elaborative Rehearsal',
          definition: 'Deep processing of information by connecting it to existing knowledge.'
        },
        {
          term: 'Hybrid Implementation-Effectiveness Design',
          definition: 'Study design evaluating both clinical effectiveness and implementation outcomes simultaneously.'
        },
        {
          term: 'CFIR',
          definition: 'Consolidated Framework for Implementation Research; comprehensive framework for understanding implementation.'
        },
        {
          term: 'Direct Congruent Interpretation',
          definition: 'Interpretation method where interpreter conveys exact words of speaker rather than summarizing.'
        }
      ],

      clinicalNotes: `Key practice recommendations:

1. Use teach-back with EVERY patient for critical information
2. Frame as checking your teaching, not testing their learning
3. Continue until accurate understanding demonstrated
4. Use both verbal and demonstration teach-back as appropriate
5. Document teach-back use and patient understanding
6. Implement system supports (EHR prompts, standard phrases)
7. Monitor and provide feedback on teach-back use
8. Include in competency assessments for clinical staff
9. Audit for equitable application across patient populations
10. Refresh training and skills regularly

Core resources:
- AHRQ Health Literacy Universal Precautions Toolkit
- Always Use Teach-Back! (Iowa Healthcare Collaborative)
- AMA Health Literacy Toolkit
- Health Literacy Universal Precautions Toolkit online modules`
    }
  },

  media: [],
  citations: [
    {
      id: 'schillinger-teach-back',
      type: 'article',
      title: 'Closing the Loop: Physician Communication With Diabetic Patients Who Have Low Health Literacy',
      authors: ['Schillinger, D.', 'Piette, J.', 'Grumbach, K.', 'et al.'],
      source: 'Archives of Internal Medicine',
    },
    {
      id: 'tamborero-systematic-review',
      type: 'article',
      title: 'Is teach-back effective? A systematic review',
      authors: ['Tamborero, L.', 'Wachter, R.M.'],
      source: 'BMJ Quality and Safety'
    },
    {
      id: 'ha-dinh-interventions',
      type: 'article',
      title: 'Interventions to Improve Patient Understanding: A Systematic Review',
      authors: ['Ha Dinh, T.T.', 'Bonner, A.', 'Clark, R.', 'et al.'],
      source: 'Patient Education and Counseling'
    },
    {
      id: 'white-readmissions',
      type: 'article',
      title: 'Use of Teach-Back to Reduce Readmission Rates',
      authors: ['White, M.', 'Gascoyne, S.', 'Patel, B.'],
      source: 'Journal for Healthcare Quality'
    },
    {
      id: 'ahrq-universal-precautions-toolkit',
      type: 'website',
      title: 'Health Literacy Universal Precautions Toolkit',
      source: 'Agency for Healthcare Research and Quality',
      url: 'https://www.ahrq.gov/health-literacy/improve/precautions-toolkit/index.html'
    }
  ],
  crossReferences: [
    {
      targetId: 'health-literacy-assessing-literacy',
      targetType: 'topic',
      relationship: 'related',
      label: 'Health Literacy Assessment'
    },
    {
      targetId: 'health-literacy-informed-consent',
      targetType: 'topic',
      relationship: 'related',
      label: 'Informed Consent'
    },
    {
      targetId: 'health-literacy-discharge-instructions',
      targetType: 'topic',
      relationship: 'related',
      label: 'Discharge Instructions'
    }
  ],
  tags: {
    systems: ['communication-skills'],
    topics: ['health-literacy', 'patient-communication', 'patient-safety', 'teach-back', 'communication-techniques'],
    keywords: ['teach-back', 'patient understanding', 'communication technique', 'AHRQ', 'patient safety', 'confirming understanding'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'family-medicine', 'psychiatry']
    }
  },

  createdAt: '2024-01-15T10:00:00Z',
  updatedAt: '2024-01-15T10:00:00Z',
  version: 1,
  status: 'published',
  contributors: ['Medical Education Team']
};

// Export with alias for index.ts compatibility
export { teachBackContent as teachBackMethod };
export default teachBackContent;
