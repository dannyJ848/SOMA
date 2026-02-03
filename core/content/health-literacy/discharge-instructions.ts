/**
 * Discharge Instructions - Post-Discharge Comprehension
 *
 * Covers creating clear, understandable discharge instructions to ensure
 * safe transitions from hospital to home and prevent readmissions.
 */

import { EducationalContent } from '../types';

export const dischargeInstructionsContent: EducationalContent = {
  id: 'health-literacy-discharge-instructions',
  type: 'topic',
  name: 'Clear Discharge Instructions',
  alternateNames: [
    'Discharge Communication',
    'Hospital Discharge Instructions',
    'Transition of Care Communication'
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Clear discharge instructions help patients understand what to do after leaving the hospital, which is crucial for healing and preventing return trips to the hospital.',
      explanation: `Why Discharge Instructions Matter

When patients leave the hospital, they need to know:
- What medicines to take and when
- What warning signs to watch for
- When to see the doctor again
- How to take care of themselves at home

If instructions aren't clear, patients might:
- Take medicines wrong
- Not know when something is wrong
- End up back in the hospital

What Makes Instructions Clear:

Use Simple Words:
- Instead of "worsening dyspnea" say "trouble breathing"
- Instead of "edema" say "swelling"
- Instead of "adhere to regimen" say "follow your plan"
- Instead of "ambulate" say "walk"

Focus on the Most Important Things:

Medicines: What to take, when, how
Warning signs: When to call the doctor
Follow-up: When and where to see the doctor
Self-care: What to do at home

Use Visual Aids:
- Pictures of medicines
- Calendar for appointments
- Checklists for daily care
- Drawings showing exercises or care

Check Understanding:
- "Can you tell me in your own words what you'll do when you get home?"
- Have patient explain back the plan

Give Written Instructions:
- At a reading level they can understand
- Large enough print
- Include pictures when helpful
- Available in their language

Key Information Every Patient Needs:

1. Medicines
   - List of all medicines
   - What each one is for
   - When to take each one
   - What to do about missed doses

2. Warning Signs
   - What changes to watch for
   - When to call the doctor
   - When to call 911
   - Emergency numbers clearly listed

3. Follow-Up Care
   - When is your next appointment?
   - Where is the appointment?
   - What to bring to the appointment
   - How to schedule if not already scheduled

4. Daily Activities
   - What you CAN do
   - What you should avoid
   - How to bathe/dress/wound care
   - Eating and drinking instructions

5. Who to Call
   - Your doctor's number
   - A number for questions
   - Emergency numbers

Remember: Patients are often tired and stressed when leaving the hospital. Keep instructions simple and focused!`,

      keyTerms: [
        {
          term: 'Discharge Instructions',
          definition: 'Information given to patient when leaving hospital about home care and follow-up.'
        },
        {
          term: 'Readmission',
          definition: 'Going back into the hospital shortly after being sent home.'
        },
        {
          term: 'Warning Signs',
          definition: 'Changes in health that mean the patient should call the doctor.'
        },
        {
          term: 'Follow-Up',
          definition: 'Seeing the doctor after a hospital stay or procedure.'
        }
      ],

      analogies: [
        'Discharge instructions are like a roadmap for getting better at home.',
        'Leaving the hospital without clear instructions is like being lost without a map.'
      ],

      examples: [
        'Instead of "Watch for signs of infection," say "Call if the area around your wound gets red, hot, or has pus"',
        'Instead of "Take as directed," say "Take one pill in the morning and one pill at night"'
      ],

      patientCounselingPoints: [
        'Always give written instructions at 5th grade reading level.',
        'Use teach-back to confirm understanding of discharge plan.',
        'Include a family member or caregiver in discharge teaching.',
        'Provide phone numbers for questions.'
      ]
    },

    2: {
      level: 2,
      summary: 'Clear, well-structured discharge instructions are essential for safe transitions from hospital to home, preventing complications and readmissions.',
      explanation: `Why Discharge Instructions Matter

The Problem:
- 20% of patients have adverse events after discharge
- Nearly 20% of Medicare patients readmitted within 30 days
- Many readmissions preventable with better communication
- Patients often don't understand discharge instructions

The Impact:
- Poor understanding leads to medication errors
- Missed warning signs cause complications
- Follow-up appointments not kept
- Worsening of conditions

Core Components

Essential Elements:

1. Diagnosis: What brought you to the hospital
2. Medications: What to take, changes from before
3. Warning Signs: What to watch for
4. Follow-Up: When and where to see doctor
5. Self-Care: What to do at home
6. Diet: Any eating or drinking restrictions
7. Activity: What you can and cannot do
8. Who to Call: Contact numbers for questions

Medication Instructions

Common Problems:
- Medications stopped that should continue
- New medications not explained
- Dose changes not clear
- Timing not specified
- Drug interactions not addressed

Clear Medication Instructions:
- Complete list of all medications
- Mark which are new vs continued
- Purpose for each medication
- Specific timing (not just "twice daily")
- What to do about missed doses
- Pictures of pills when helpful

Reconciliation:
- Compare discharge meds to admission meds
- Explain any changes
- Note what was stopped and why
- Highlight new medications
- Check for interactions

Warning Signs

Be Specific:
- NOT: "Watch for signs of infection"
- INSTEAD: "Call if you have fever over 101°F, redness around wound, or pus"

Organize by Urgency:

Call 911 If:
- Chest pain or pressure
- Trouble breathing
- Sudden severe pain
- Sudden weakness or trouble speaking
- Fainting

Call Your Doctor If:
- Fever over 101°F
- Pain that gets worse
- Vomiting that won't stop
- Any new symptoms

Schedule Follow-Up If:
- Symptoms that don't go away
- Questions about medicines
- Need referral to specialist

Follow-Up Care

Clear Follow-Up Instructions:
- Date and time of appointment
- Location with address
- What to bring
- Who to call to confirm
- Transportation options

Medication Follow-Up:
- Blood tests needed
- When to check levels
- Dose adjustments expected
- What to track at home

Activity and Self-Care

Activity Instructions:
- What activities are allowed
- What to avoid
- When normal activities can resume
- Specific exercises if needed

Self-Care Tasks:
- Wound care instructions
- Using medical equipment
- Daily monitoring (weight, blood sugar, blood pressure)
- Bathing and dressing restrictions

Diet Instructions:
- Foods to eat
- Foods to avoid
- Fluid restrictions
- Special diets explained simply

Communication Strategies

Use Plain Language:
- "Heart attack" instead of "myocardial infarction"
- "Stroke" instead of "cerebrovascular accident"
- "Pain medicine" instead of "analgesic"
- "Water pill" instead of "diuretic"

Be Specific:
"Take as directed" becomes "Take 1 pill morning and 1 pill night"
"Watch for infection" becomes "Call if red, hot, swelling, or fever"
"Follow up in office" becomes "See Dr. Smith on Tuesday at 10 AM"
"Watch your diet" becomes "Limit salt to less than 2000 mg per day"

Use Visual Aids:
- Pictures of medications
- Clock for medication timing
- Calendar for appointments
- Checklist for daily tasks
- Diagrams for wound care

Confirm Understanding

Teach-Back for Discharge:

Medications:
- "What medicines will you take at home?"
- "When will you take each one?"

Warning Signs:
- "What would make you call the doctor?"
- "What would make you call 911?"

Follow-Up:
- "When is your next appointment?"
- "Where is it located?"

Self-Care:
- "What will you do at home to take care of yourself?"
- "What activities will you avoid?"

Written Instructions

Creating Clear Written Materials:
- 5th-8th grade reading level
- Large font (12 point minimum)
- Short sentences
- Headings and bullet points
- White space
- Pictures when helpful

Key Sections:
1. Your diagnosis (what brought you here)
2. Your medicines (complete list)
3. Warning signs (when to call)
4. Your follow-up appointment
5. What to do at home
6. Who to call with questions

Special Situations

Older Adults:
- Include family caregiver
- Larger print materials
- Fewer instructions at once
- Repeat information
- Arrange help at home

Limited Literacy:
- Very simple language
- Heavy use of pictures
- Focus on 2-3 key points
- Demonstrate rather than just explain
- Include family member

Non-English Speakers:
- Professional interpreter for teaching
- Translated written materials
- Visual aids (transcend language)
- Family member as backup (not replacement for interpreter)

Complex Discharges:
- Multiple diagnoses
- Multiple new medications
- Medical equipment needed
- Home health services
- Multiple follow-up appointments

Consider home health referral for extra support!`,

      keyTerms: [
        {
          term: 'Readmission',
          definition: 'Returning to hospital shortly after discharge, often preventable.'
        },
        {
          term: 'Medication Reconciliation',
          definition: 'Creating accurate list of all medications and comparing to previous lists.'
        },
        {
          term: 'Transition of Care',
          definition: 'Moving patient between care settings (hospital to home, etc.).'
        },
        {
          term: 'Discharge Summary',
          definition: 'Document summarizing hospital stay sent to follow-up providers.'
        },
        {
          term: 'Teach-Back',
          definition: 'Method where patient repeats information to confirm understanding.'
        }
      ],

      analogies: [
        'Discharge is like leaving a hotel - you need to know where you\'re going next and what to bring with you.',
        'Medication reconciliation is like checking your packing list before a trip.'
      ],

      patientCounselingPoints: [
        'Always use teach-back to confirm understanding.',
        'Include family members or caregivers in teaching.',
        'Provide written instructions at appropriate reading level.',
        'Make sure follow-up appointments are scheduled before discharge.'
      ]
    },

    3: {
      level: 3,
      summary: 'Effective discharge instructions require systematic approaches including plain language, teach-back confirmation, caregiver involvement, and post-discharge follow-up to prevent adverse events and readmissions.',
      explanation: `Impact of Discharge Communication

Statistics:
- 20% of patients experience adverse events after discharge
- 50% of these events preventable
- Nearly 20% of Medicare patients readmitted within 30 days
- Cost of readmissions: $26 billion annually for Medicare
- Poor communication contributes significantly to readmissions

Project RED (Re-Engineered Discharge):
Evidence-based intervention that reduced readmissions by 30% through:
- Patient education throughout stay
- Discharge planning starting at admission
- Post-discharge follow-up
- Patient-centered discharge instructions

Systematic Approach

Starting at Admission:
- Assess health literacy early
- Identify learning needs
- Involve family/caregivers
- Begin patient education
- Plan for post-discharge needs

Throughout Hospitalization:
- Daily education on conditions
- Teach-back for new information
- Medication reconciliation as medications change
- Prepare for self-care at home
- Assess support systems

At Discharge:
- Comprehensive medication review
- Clear discharge instructions
- Scheduled follow-up appointments
- Arranged services (home health, equipment)
- Post-discharge follow-up planned

Medication Reconciliation

Process:
1. Get accurate list of pre-admission medications
2. Compare to admission orders
3. Compare to discharge medications
4. Explain all changes
5. Document all changes

Common Discrepancies:
- Medications omitted that should continue
- Doses changed without explanation
- New medications without purpose explained
- Stopping medications without reason
- Duplicate medications

Clear Communication:
- Complete medication list provided
- Purpose for each medication
- Specific timing instructions
- What changed and why
- Side effects to watch for
- What to do about missed doses

Warning Signs Communication

Be Specific and Actionable:

Instead of:
- "Watch for signs of infection"
- "Report any concerning symptoms"
- "Call if you feel worse"

Use:
- "Call your doctor if your temperature goes over 101°F"
- "Go to the ER if you have chest pain or trouble breathing"
- "Call the clinic if your wound is red, hot, or draining pus"

Organize by Urgency:

Emergency - Call 911:
- Chest pain or pressure
- Sudden shortness of breath
- Sudden weakness on one side
- Fainting
- Severe pain

Urgent - Call Doctor Today:
- Fever over 101°F
- Pain not controlled by medicine
- Vomiting or diarrhea
- Wound problems
- New symptoms

Non-Urgent - Call Office:
- Questions about medications
- Minor symptoms
- Appointment concerns
- Prescription refill needs

Structured Discharge Instructions

AHRQ Recommended Format:

1. Your Stay Summary
   - Why you were in the hospital
   - What treatments you received
   - What you learned about your condition

2. Your Medicines
   - Complete list with times
   - New medicines highlighted
   - What each medicine is for
   - Side effects to watch for

3. Your Appointments
   - When and where
   - What to bring
   - How to get there
   - Contact information

4. What to Watch For
   - Warning signs organized by urgency
   - What to do for each sign
   - Emergency numbers clearly listed

5. What to Do at Home
   - Daily care tasks
   - Activity restrictions
   - Diet instructions
   - Equipment use

6. Who to Call
   - Questions line
   - After-hours number
   - Emergency numbers

Teach-Back for Discharge

Confirm Understanding:
- "Can you tell me in your own words what you'll do when you get home?"
- "What medicines will you take and when?"
- "What would make you call the doctor?"
- "When is your follow-up appointment?"

Assess Caregiver Understanding:
- Include family member in teaching
- Have caregiver explain plan
- Confirm caregiver can help
- Provide caregiver contact information

Post-Discharge Follow-Up

Timely Follow-Up:
- Schedule before discharge
- Usually within 7 days for high-risk patients
- Transportation arranged if needed
- Provider receives discharge summary

Follow-Up Calls:
- Within 48-72 hours after discharge
- Review medications
- Check for complications
- Reinforce warning signs
- Confirm follow-up appointment

Medication Follow-Up:
- Labs scheduled when needed
- Dose adjustments planned
- Monitoring requirements explained
- Who to contact for problems

Special Populations

High-Risk Patients:
- Age 65+ with multiple conditions
- Multiple hospitalizations
- Multiple medications
- Limited health literacy
- Limited social support

Extra Support:
- Home health referral
- Pharmacist medication review
- Extra teaching time
- More frequent follow-up
- Family/caregiver involvement

Older Adults:
- Assess cognitive status
- Involve family caregivers
- Simplify medication regimen
- Consider medication management assistance
- Home safety assessment

Limited Health Literacy:
- Very simple materials
- Heavy use of visual aids
- Teach-back for each element
- Multiple teaching sessions
- Family member involvement

Non-English Speakers:
- Professional interpreters
- Translated materials
- Visual aids
- Bilingual staff
- Culturally appropriate explanations

Quality Improvement

Metrics to Track:
- Patient understanding scores
- Readmission rates
- Emergency department visits
- Medication errors after discharge
- Follow-up appointment completion
- Patient satisfaction

Process Measures:
- Teach-back use rate
- Written instruction provision
- Follow-up scheduling rate
- Medication reconciliation completion
- Post-discharge call completion`,

      keyTerms: [
        {
          term: 'Project RED',
          definition: 'Re-Engineered Discharge; evidence-based approach reducing readmissions through systematic discharge process.'
        },
        {
          term: 'Medication Reconciliation',
          definition: 'Process of creating accurate medication list and resolving discrepancies.'
        },
        {
          term: 'Adverse Event',
          definition: 'Unintended harm caused by medical care rather than underlying condition.'
        },
        {
          term: 'High-Risk Patient',
          definition: 'Patient at increased risk for readmission or complications after discharge.'
        }
      ],

      clinicalNotes: `Key principles for discharge:

1. Start discharge planning at admission
2. Use plain language for all communication
3. Confirm understanding with teach-back
4. Involve family/caregivers when appropriate
5. Schedule follow-up before discharge
6. Provide clear written instructions
7. Arrange post-discharge follow-up
8. Ensure medication reconciliation complete

Remember: The best discharge instructions are clear, specific, and confirmed through teach-back before the patient leaves.`
    },

    4: {
      level: 4,
      summary: 'Optimal discharge communication requires systematic approaches including Project RED principles, health literacy universal precautions, medication reconciliation, and post-discharge follow-up.',
      explanation: `Evidence-Based Approaches

Project RED (Re-Engineered Discharge):

Twelve Components:
1. Patient education throughout hospital stay
2. Discharge planning initiated at admission
3. Discharge plan reviewed with patient
4. Patient education about diagnosis
5. Medication reconciliation
6. Discharge counseling using teach-back
7. Patient-centered discharge instructions
8. Post-discharge follow-up call
9. Scheduled follow-up appointment
10. Discharge summary sent to follow-up providers
11. Patient activation: encourage questions
12. Clinical pharmacist review of medications

Outcomes:
- 30% reduction in hospital readmissions
- Reduced emergency department visits
- Lower costs
- Higher patient satisfaction

Care Transitions Intervention (CTI):
- Transition coach works with patient
- Home visit within 48-72 hours
- Medication self-management support
- Patient record with essential information
- Follow-up phone calls
- Facilitated communication between providers

BOOST (Better Outcomes for Older adults through Safe Transitions):
- Focus on older adults
- Medication management
- Patient-centered discharge instructions
- Follow-up appointment scheduled
- Post-discharge follow-up call

Medication Safety at Transitions

High-Risk Medications:
- Anticoagulants
- Insulin and oral hypoglycemics
- Opioids
- Diuretics
- Antihypertensives
- Antibiotics

Special Considerations:
- Pharmacist review before discharge
- Detailed counseling on each medication
- Monitoring plan clearly explained
- Who to contact for problems
- Early follow-up for lab monitoring

Reconciliation Process:

Admission:
- Obtain accurate home medication list
- Compare to admission orders
- Document discrepancies
- Prescribe appropriate medications

Throughout Stay:
- Reconcile at each care transition
- Document changes clearly
- Explain changes to patient
- Update medication list

Discharge:
- Compare to admission medications
- Compare to pre-admission medications
- Explain ALL changes
- Provide complete list
- Send list to follow-up providers

Communication for Special Conditions

Heart Failure:
- Daily weight monitoring
- Low sodium diet explained
- Medication purposes clear
- Symptom monitoring (shortness of breath, swelling)
- When to call: weight gain of 3 lbs in a day or 5 lbs in a week
- Follow-up within 7 days

COPD:
- Inhaler technique demonstrated
- Action plan for exacerbations
- When to call: increased shortness of breath, changes in sputum
- Oxygen use explained
- Smoking cessation support

Diabetes:
- Blood sugar monitoring
- Insulin or oral medication instructions
- Hypoglycemia recognition and treatment
- Sick day rules
- What to do about missed doses
- Follow-up for A1c check

Surgery:
- Wound care instructions with pictures
- Activity restrictions explained
- Pain management plan
- Constipation from opioids addressed
- When to call surgeon vs emergency
- Follow-up appointment scheduled

Pneumonia:
- Antibiotic completion importance
- Symptom improvement timeline
- When worsening = call doctor
- Follow-up chest X-ray if indicated
- Smoking cessation if applicable

Readmission Risk Assessment

Risk Factors for Readmission:
- Age 65+
- Multiple chronic conditions
- Prior hospitalizations
- Multiple medications
- Depression or cognitive impairment
- Limited social support
- Low health literacy
- Financial difficulties

Risk Stratification:
- High-risk: Intensive interventions
- Moderate-risk: Standard interventions
- Low-risk: Basic interventions

Interventions by Risk:

High-Risk:
- Home health referral
- Pharmacist medication review
- Transition coach
- Early follow-up (within 3-5 days)
- Post-discharge calls at 48 hours and 7 days
- Family/caregiver heavily involved

Standard-Risk:
- Clear discharge instructions
- Medication reconciliation
- Follow-up within 7-14 days
- Post-discharge call within 72 hours

Low-Risk:
- Clear discharge instructions
- Medication reconciliation
- Follow-up as needed
- Call if questions

Quality Implementation

System-Level Changes:

Standardized Templates:
- Discharge instruction templates
- Medication list format
- Warning signs section
- Follow-up summary

EHR Integration:
- Discharge summary generation
- Medication reconciliation tools
- Follow-up scheduling prompts
- Readmission risk alerts
- Patient-friendly discharge document

Staff Training:
- Discharge communication skills
- Teach-back method
- Health literacy awareness
- Motivational interviewing for adherence

Process Changes:
- Discharge planning at admission
- Daily education rounds
- Pharmacist involvement for high-risk
- Follow-up scheduling before discharge
- Post-discharge call system

Measuring Quality:

Process Metrics:
- Discharge instruction provision rate
- Teach-back documentation rate
- Medication reconciliation completion
- Follow-up appointment scheduling
- Post-discharge call completion

Outcome Metrics:
- 30-day readmission rate
- 30-day ED visit rate
- Medication error rates
- Patient satisfaction scores
- Patient-reported understanding

Documentation

Discharge Summary Components:
- Reason for admission
- Significant findings
- Procedures performed
- Discharge medications
- Discharge diagnoses
- Discharge condition
- Instructions given
- Follow-up arrangements
- Treating physicians

Patient-Facing Document:
- Separate from clinical discharge summary
- Written at 5th-8th grade level
- Organized by priority
- Includes phone numbers
- Visually clear (headings, white space)

Communication with Follow-Up Providers:
- Discharge summary sent before follow-up
- Medication changes highlighted
- Pending tests noted
- Follow-up needs specified
- Contact information for questions`,

      keyTerms: [
        {
          term: 'Project RED',
          definition: 'Re-Engineered Discharge; evidence-based discharge protocol reducing readmissions.'
        },
        {
          term: 'Care Transitions Intervention',
          definition: 'Coach-led transition support program reducing readmissions.'
        },
        {
          term: 'BOOST',
          definition: 'Better Outcomes for Older adults through Safe Transitions.'
        },
        {
          term: 'Medication Reconciliation',
          definition: 'Systematic process for creating accurate medication list across transitions.'
        },
        {
          term: 'Readmission Risk Stratification',
          definition: 'Categorizing patients by likelihood of readmission to target interventions.'
        }
      ],

      clinicalNotes: `Evidence-based practices:

1. Start discharge planning at admission
2. Use standardized discharge instruction templates
3. Ensure medication reconciliation complete
4. Use teach-back to confirm understanding
5. Schedule follow-up before discharge
6. Plan post-discharge follow-up call
7. Send discharge summary to follow-up providers
8. High-risk patients get intensive interventions

Remember: The discharge process starts at admission, not at discharge!`
    },

    5: {
      level: 5,
      summary: 'Optimal discharge communication requires systematic implementation of evidence-based protocols, health literacy principles, and quality improvement to prevent readmissions and adverse events.',
      explanation: `Comprehensive Evidence Base

Systematic Review Findings:

Effective Interventions:
- Structured discharge protocols reduce readmissions 20-30%
- Post-discharge follow-up calls reduce readmissions 10-15%
- Medication reconciliation prevents adverse events
- Patient education throughout stay improves outcomes
- Scheduled follow-up prevents readmissions

Critical Components:
- Patient-centered discharge instructions
- Medication reconciliation
- Scheduled follow-up appointments
- Post-discharge follow-up
- Communication with outpatient providers

Cost-Effectiveness:
- Interventions cost less than readmissions
- ROI of 3:1 to 10:1 demonstrated
- Most cost-effective for high-risk patients
- Savings from prevented readmissions

Theoretical Framework

Transition Theory:
- Transitions are vulnerable periods
- Multiple handoffs increase risk
- Relationship disruption affects outcomes
- Information gaps are common
- Patient engagement improves outcomes

Donabedian Framework:
- Structure: Resources, organization
- Process: What is done
- Outcome: Health status, satisfaction

Knowledge-Attitudes-Behavior:
- Knowledge: Understanding instructions
- Attitudes: Beliefs about self-care
- Behavior: Following discharge plan

Advanced Implementation Strategies

Care Transition Models:

Project RED Enhancement:
- EHR-integrated decision support
- Automated post-discharge calls
- Patient portal access to discharge summary
- Remote monitoring for high-risk patients
- Community health worker integration

Transitional Care Model:
- Advanced practice nurse-led
- Hospital and home visits
- Evidence-based protocols
- Patient and caregiver engagement
- Primary care integration

GRACE (Geriatric Resources for Assessment and Care of Elders):
- Interdisciplinary team
- In-home comprehensive assessment
- Integrated care plan
- Ongoing care coordination

Medication Management:

Pharmacist-Led Interventions:
- Medication therapy management
- Discharge counseling
- Post-discharge follow-up
- Deprescribing when appropriate
- Polypharmacy reduction

Technology Solutions:
- Electronic medication lists
- Decision support for interactions
- Automated refill reminders
- Tele-pharmacy consultations
- Adherence monitoring devices

Special Populations and Contexts

Health Disparities:
- Readmission rates higher for vulnerable populations
- Language barriers affect comprehension
- Cultural differences in care preferences
- Limited access to follow-up care
- Social determinants affect outcomes

Addressing Disparities:
- Cultural tailoring of materials
- Professional interpretation
- Community health workers
- Addressing social needs
- Transportation assistance

Psychiatric Conditions:
- Higher readmission rates
- Medication adherence challenges
- Lack of insight complicates discharge
- Social support often limited
- Stigma affects care seeking

Approach:
- Involve mental health team
- Caregiver engagement critical
- Simplify medication regimens
- Address social determinants
- Intensive outpatient follow-up

Surgical Patients:
- Preoperative optimization
- Discharge planning before surgery
- Expected recovery timeline
- Complication recognition
- Pain management plan

Medical-Surgical Transitions:
- Procedure complications
- Anesthesia effects
- Wound care needs
- Activity restrictions
- Follow-up with surgeon

Quality Implementation Science

CFIR Application:

Intervention Characteristics:
- Evidence strength for discharge interventions
- Relative advantage (fewer readmissions, lower costs)
- Adaptability to local context
- Complexity can be managed with standardization

Outer Setting:
- Penalties for readmissions (HRRP)
- Community resources availability
- Patient expectations
- Referral networks

Inner Setting:
- Organizational culture
- Readiness for change
- Leadership support
- Available resources
- Interprofessional collaboration

Characteristics of Individuals:
- Provider beliefs about importance
- Self-efficacy for discharge communication
- Skills in patient education
- Time perceptions

Process:
- Planning
- Engaging stakeholders
- Executing implementation
- Reflecting and evaluating
- Continuous improvement

Quality Improvement Framework:

Plan:
- Identify readmission drivers
- Map current discharge process
- Select evidence-based interventions
- Develop implementation plan

Do:
- Implement interventions
- Train staff
- Monitor fidelity

Study:
- Measure outcomes
- Compare to baseline
- Assess process metrics
- Gather stakeholder feedback

Act:
- Refine based on data
- Spread successful practices
- Modify based on feedback
- Plan next cycle

Health Information Technology

EHR Applications:
- Discharge order sets
- Medication reconciliation modules
- Readmission risk alerts
- Automated follow-up scheduling
- Patient portal discharge summary

Patient-Facing Technology:
- Patient portal access
- Automated appointment reminders
- Medication reminder apps
- Symptom monitoring apps
- Telehealth follow-up visits

Health Information Exchange:
- Discharge summary to primary care
- Medication list synchronization
- Lab result sharing
- Imaging result transmission
- Care plan communication

Professional Training

Interprofessional Education:
- Team-based care training
- Communication across settings
- Role clarity in discharge
- Collaborative practice

Competencies:
- Discharge planning
- Patient education
- Health literacy
- Medication reconciliation
- Care coordination
- Communication with outpatient providers

Training Methods:
- Simulation with standardized patients
- OSCE stations
- Role-playing
- Case-based learning
- Direct observation with feedback

Research and Innovation

Emerging Interventions:
- Remote patient monitoring
- AI-powered readmission prediction
- Virtual health coaching
- Community paramedicine
- Social needs screening and intervention

Research Gaps:
- Optimal timing of follow-up
- Best methods for risk stratification
- Long-term outcomes of interventions
- Cost-effectiveness in different settings
- Health equity impact of interventions

Implementation Research:
- Spread of effective practices
- Sustainability strategies
- Context-specific adaptations
- Policy impacts
- Payment model effects

Policy and Payment

Hospital Readmissions Reduction Program (HRRP):
- CMS penalizes hospitals for excess readmissions
- Targeted conditions: AMI, HF, pneumonia, COPD, CABG, THR, TKA
- Focuses on 30-day readmissions
- Creates financial incentive

Value-Based Care:
- Bundled payments for care episodes
- Accountable care organizations
- Shared savings programs
- Population health management

Policy Implications:
- Incentives align with reducing readmissions
- Payment for transition care
- Support for post-acute care
- Investment in IT infrastructure

Future Directions

Integrated Care Models:
- Hospital and primary care integration
- Post-acute care networks
- Community resource connections
- Social determinants addressed
- Palliative care integration

Personalized Approaches:
- Risk prediction using AI
- Tailored interventions based on risk
- Patient preferences incorporated
- Social needs addressed
- Cultural tailoring

Measurement and Feedback:
- Real-time readmission risk
- Patient-reported outcomes
- Experience measures
- Equity metrics
- Cost tracking

Community Engagement:
- Community health workers
- Peer support programs
- Community-based organizations
- Faith community partnerships
- Public health integration`,

      keyTerms: [
        {
          term: 'HRRP',
          definition: 'Hospital Readmissions Reduction Program; CMS penalties for excess 30-day readmissions.'
        },
        {
          term: 'Transitional Care Model',
          definition: 'Advanced practice nurse-led transitional care intervention.'
        },
        {
          term: 'GRACE',
          definition: 'Geriatric Resources for Assessment and Care of Elders; transitional care model for older adults.'
        },
        {
          term: 'Community Paramedicine',
          definition: 'Paramedics providing care in community settings, often for post-discharge support.'
        },
        {
          term: 'Social Determinants of Health',
          definition: 'Economic and social conditions that influence health outcomes.'
        }
      ],

      clinicalNotes: `System-level implementation requires:

1. Organizational commitment to readmission reduction
2. Standardized discharge protocols implemented
3. EHR integration for decision support and documentation
4. Comprehensive staff training
5. Post-discharge follow-up system
6. Quality metrics and monitoring
7. Community partnerships for high-risk patients
8. Continuous improvement cycles

Core principle: Discharge is a process, not an event. It begins at admission and continues until the patient is safely established with outpatient providers.`
    }
  },

  media: [],
  citations: [
    {
      id: 'project-red',
      type: 'article',
      title: 'Re-Engineered Discharge (RED) Toolkit',
      authors: ['Jack, B.W.', 'Chetty, V.K.', 'Anthony, D.', 'et al.'],
      source: 'Agency for Healthcare Research and Quality',
      url: 'https://www.ahrq.gov/research/findings/final-reports/medredtoolkit/index.html'
    },
    {
      id: 'case-care-transitions',
      type: 'article',
      title: 'The Care Transitions Intervention',
      authors: ['Coleman, E.A.', 'Parry, C.', 'Chalmers, S.', 'Min, S.J.'],
      source: 'Archives of Internal Medicine',
    },
    {
      id: 'boost-intervention',
      type: 'website',
      title: 'BOOST: Better Outcomes for Older Adults through Safe Transitions',
      source: 'Society of Hospital Medicine',
      url: 'https://hospitalmedicine.org/BOOST/'
    },
    {
      id: 'hrrp-cms',
      type: 'website',
      title: 'Hospital Readmissions Reduction Program (HRRP)',
      source: 'Centers for Medicare & Medicaid Services',
      url: 'https://www.cms.gov/Medicare/Quality-Initiatives-Patient-Assessment-Instruments/HospitalQualityInits/HRRP'
    }
  ],
  crossReferences: [
    {
      targetId: 'health-literacy-teach-back',
      targetType: 'topic',
      relationship: 'related',
      label: 'Teach-Back Method'
    },
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
    }
  ],
  tags: {
    systems: ['communication-skills', 'hospital-medicine'],
    topics: ['health-literacy', 'discharge-planning', 'readmission-prevention', 'care-transitions', 'patient-safety'],
    keywords: ['discharge instructions', 'readmission', 'Project RED', 'medication reconciliation', 'transitions of care'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'family-medicine']
    }
  },

  createdAt: '2024-01-15T10:00:00Z',
  updatedAt: '2024-01-15T10:00:00Z',
  version: 1,
  status: 'published',
  contributors: ['Medical Education Team']
};

// Export with alias for index.ts compatibility
export { dischargeInstructionsContent as dischargeInstructions };
export default dischargeInstructionsContent;
