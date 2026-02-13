/**
 * Medication Instructions - Clear Medication Directions
 *
 * Covers creating clear, understandable medication instructions
 * for patients to ensure safe and effective medication use.
 */

import { EducationalContent } from '../types';

export const medicationInstructions: EducationalContent = {
  id: 'health-literacy-medication-instructions',
  type: 'concept',
  name: 'Clear Medication Instructions',
  alternateNames: ['Medication Directions', 'Medication Counseling', 'Patient Medication Education', 'Medication Safety Communication'],

  levels: {
    1: {
      level: 1,
      summary: 'Clear medication instructions help patients take their medicines correctly, which is essential for treatment to work and to avoid harmful mistakes.',
      explanation: `**Why Clear Medication Instructions Matter**

Taking medicines the wrong way can:
- Make treatment not work
- Cause side effects
- Lead to emergency room visits
- Make you sicker

**What Makes Instructions Clear:**

**Use Simple Words:**
- "By mouth" instead of "oral"
- "With food" instead of "take with meals"
- "As needed" instead of "PRN"
- "Twice a day" instead of "bid"

**Be Specific:**
- "Take 1 pill with breakfast and 1 pill with dinner"
- NOT: "Take 2 pills daily"

**Show What the Medicine Looks Like:**
- Show the actual pill
- Write down the color and shape
- Take a picture of the medicine bottle

**Use Visual Aids:**
- Pictures of the pills
- Clock showing when to take each medicine
- Calendar marked with dosing times
- Written instruction sheet

**Important Information Every Patient Needs:**

1. **What is the medicine for?**
   - "This lowers your blood pressure"
   - "This helps with pain"

2. **How much do I take?**
   - "1 pill" or "2 teaspoons"
   - Show them the amount

3. **When do I take it?**
   - "In the morning with breakfast"
   - "At bedtime"

4. **How do I take it?**
   - "Swallow whole with water"
   - "Rub on clean, dry skin"
   - "Use with the device provided"

5. **What if I miss a dose?**
   - Clear instructions for what to do

6. **What side effects should I watch for?**
   - Common side effects
   - Serious side effects to call about

**Checking Understanding:**

Always ask: "Can you tell me in your own words when and how you'll take this medicine?"

If they explain it correctly, great! If not, explain again and ask again.`,
      keyTerms: [
        { term: 'medication instructions', definition: 'Directions telling a patient how to take their medicine correctly' },
        { term: 'side effect', definition: 'An unwanted effect that a medicine can cause' },
        { term: 'dose', definition: 'The amount of medicine to take at one time' },
      ],
      analogies: [
        'Medication instructions are like recipes - you need to follow them exactly for the best result',
        'Missing doses is like missing steps in building something - the finished product may not work',
      ],
      examples: [
        'Good: "Take 1 pill with breakfast and 1 pill with dinner"',
        'Bad: "Take 2 pills PO daily"',
      ],
      patientCounselingPoints: [
        'Always show the patient what the medicine looks like',
        'Use teach-back to confirm they understand instructions',
        'Provide written instructions at 5th grade reading level',
        'Include pictures or visual aids when possible',
      ],
    },
    2: {
      level: 2,
      summary: 'Clear medication instructions using plain language, specific directions, and visual aids significantly improve medication adherence and safety.',
      explanation: `## Why Medication Instructions Matter

**The Impact of Poor Instructions:**
- 50% of medications are not taken as prescribed
- Medication errors cause 1.5 million preventable injuries annually
- Poor adherence leads to treatment failure and complications
- Clear instructions can reduce errors and improve outcomes

**Patients Want Clear Instructions:**
- Most patients want to know what medications do
- Many are afraid to ask questions
- Many don't understand common abbreviations
- Clear instructions build trust

## Principles of Clear Instructions

**1. Use Plain Language**
- "By mouth" not "oral" or "PO"
- "As needed" not "PRN"
- "Twice a day" not "bid" or "BID"
- "At bedtime" not "qhs" or "HS"
- "Every 8 hours" not "q8h"

**2. Be Specific and Concrete**
- "Take 1 pill with breakfast and 1 pill with dinner"
- NOT: "Take 1 tablet PO BID"
- "Apply a pea-sized amount to affected area"
- NOT: "Apply topically to lesion"

**3. Use Visual Aids**
- Pictures of medications
- Color-coded schedules
- Clock faces showing times
- Calendars with check-off boxes

**4. Limit to 2-3 Key Points**
- Most important information first
- Priority on safety information
- One instruction at a time

**5. Provide Written Instructions**
- At 5th-8th grade reading level
- Large font (12 point minimum)
- Available in patient's language
- Include pictures when helpful

## Essential Information for Every Medication

**Basic Information:**
1. **Name and purpose**: What is it and what does it do?
2. **Dose**: How much to take
3. **Timing**: When to take it
4. **Duration**: How long to take it
5. **Route**: How to take it (by mouth, on skin, inhaled, etc.)

**Safety Information:**
6. **Missed dose**: What to do if you forget
7. **Side effects**: What to expect, what to report
8. **Interactions**: What to avoid (foods, other medicines)
9. **Storage**: How to store the medication
10. **Disposal**: How to get rid of unused medication

## Common Abbreviations to Avoid

| Avoid | Use Instead |
|-------|-------------|
| PO, p.o. | By mouth |
| PRN, p.r.n. | As needed |
| BID, b.i.d. | Twice a day |
| TID, t.i.d. | Three times a day |
| QID, q.i.d. | Four times a day |
| QD, q.d. | Once daily |
| QHS, q.h.s. | At bedtime |
| AC, a.c. | Before meals |
| PC, p.c. | After meals |
| Q8H, q8h | Every 8 hours |
| Q6H, q6h | Every 6 hours |
| UT dict | As directed |

## Medication Timing Strategies

**Clear Timing Instructions:**

*Meal-Related:*
- "Take with breakfast" (clear)
- "Take with meals" (confusing - which meals?)
- "Take on an empty stomach" → "Take 1 hour before or 2 hours after eating"

*Clock-Based:*
- "Take at 8 AM and 8 PM"
- "Take morning and evening"
- "Take at bedtime"

*Interval-Based:*
- "Take every 8 hours" → specify: "at 6 AM, 2 PM, and 10 PM"
- "Take twice daily" → "take once in the morning and once at night"

## Visual Medication Aids

**Medication Cards:**
- Picture of medication
- Name, dose, timing
- Space for patient notes
- Emergency contact

**Pill Organizers:**
- Labeled with day/time
- Filled during visit
- Color-coded if needed
- Take-home demonstration

**Clock Diagrams:**
- Clock face showing times
- Medication icons at times
- Morning/evening shading
- Check-off boxes

**Medication Lists:**
- All medications with pictures
- Reason for each medication
- Clear schedule
- Easy to update

## Special Situations

**Multiple Medications:**
- Create master schedule
- Color-code by time of day
- Group medications taken together
- Simplify regimen when possible

**Liquid Medications:**
- Demonstrate measuring device
- Mark syringe or cup with tape
- Practice measuring
- Warn against household spoons

**Inhalers and Devices:**
- Demonstrate proper technique
- Have patient demonstrate back
- Written step-by-step instructions
- Pictures of each step

**As-Needed Medications:**
- Clear indication for use
- Maximum dose clearly stated
- When to call doctor
- Expected timing of effect

**Storage-Requiring Medications:**
- Refrigeration requirements clear
- Protection from light
- Special handling

## Checking Understanding

**Teach-Back Examples:**

*Dose Understanding:*
- "How many pills will you take each day?"
- "Show me how many pills that is."

*Timing Understanding:*
- "What times will you take this medicine?"
- "Show me on this clock when you'll take each dose."

*Instructions Understanding:*
- "What will you do if you forget a dose?"
- "What would make you call the doctor about this medicine?"

*Demonstration:*
- "Show me how you'll measure this liquid."
- "Show me how you'll use this inhaler."

## Documentation

**What to Document:**
- Medications discussed
- Instructions provided
- Visual aids used
- Patient understanding (teach-back)
- Questions asked
- Written materials provided

**Example Note:**
"Medication instructions reviewed for lisinopril 10 mg daily. Patient instructed to take 1 pill by mouth each morning with breakfast. Teach-back confirms patient understands dose, timing, and to call for swelling or difficulty breathing. Written medication card provided. Patient demonstrated understanding of missed dose instructions."`,
      keyTerms: [
        { term: 'medication adherence', definition: 'The extent to which patient takes medications as prescribed', pronunciation: 'ad-HEER-ens' },
        { term: 'medication error', definition: 'Any preventable event that may cause or lead to inappropriate medication use' },
        { term: 'dose', definition: 'The amount of medication to be taken at one time' },
        { term: 'missed dose', definition: 'When a patient forgets to take a scheduled dose of medication' },
        { term: 'side effect', definition: 'Unintended effect of a medication that occurs at normal doses' },
      ],
      analogies: [
        'Medication instructions are like GPS directions - they need to be clear and specific to reach the destination',
        'Using jargon like "PO" or "BID" is like speaking in code - patients may not understand',
      ],
      patientCounselingPoints: [
        'Never use medical abbreviations with patients',
        'Always show the actual medication when possible',
        'Use teach-back to confirm understanding',
        'Provide written instructions at appropriate reading level',
        'Include pictures or visual aids',
      ],
    },
    3: {
      level: 3,
      summary: 'Effective medication instructions require plain language, specific timing directions, visual aids, and confirmation of patient understanding to ensure safe and effective medication use.',
      explanation: `## Impact of Medication Communication

**Statistics on Medication Adherence:**
- 20-30% of new prescriptions never filled
- 50% of medications for chronic disease not taken as prescribed
- Medication nonadherence costs $100-300 billion annually
- 10% of hospitalizations related to medication nonadherence
- 50% of patients discharged on 5+ medications experience an adverse event

**Causes of Nonadherence Related to Communication:**
- Unclear instructions
- Not understanding purpose
- Fear of side effects
- Complex regimens
- Forgetfulness (lack of systems)

## Universal Precautions for Medication Instructions

**Assume ALL Patients May Struggle:**
- Even educated patients misunderstand medical terminology
- Stress and illness reduce comprehension
- Multiple medications increase complexity
- Everyone benefits from clear instructions

## Principles of Effective Instructions

**Plain Language:**
- Concrete, specific words
- Active voice ("Take this medicine" not "This medicine should be taken")
- Simple sentence structure
- One instruction per sentence

**Specificity:**
| Vague | Specific |
|-------|----------|
| "Take daily" | "Take 1 pill every morning at breakfast" |
| "Take with food" | "Take within 30 minutes after eating" |
| "Take twice a day" | "Take 1 pill with breakfast and 1 pill with dinner" |
| "As directed" | Specific instructions |

**Visual Aids:**
- Medication pictures
- Clock diagrams
- Color-coded schedules
- Step-by-step pictures for devices

**Organization:**
- Most critical information first
- Logical grouping
- Clear headings
- White space for readability

## Essential Components

**For Every Medication:**

1. **Name**: Both brand and generic
2. **Purpose**: What it does in plain language
3. **Appearance**: Color, shape, size, imprint
4. **Dose**: Exact amount
5. **Timing**: Specific times with cues (meals, bedtime)
6. **Duration**: How long to continue
7. **Route**: How to administer
8. **Special instructions**: Food restrictions, storage
9. **Common side effects**: What to expect
10. **Serious effects**: What to report
11. **Missed dose**: Clear instructions
12. **Interactions**: What to avoid

## Special Populations

**Older Adults:**
- Polypharmacy common
- Sensory deficits (vision, hearing)
- Cognitive changes
- Multiple prescribers
- Consider simplified regimens
- Larger font materials
- Caregiver involvement

**Limited Literacy:**
- Very simple language
- Focus on 2-3 critical points
- Heavy use of visual aids
- Confirm understanding multiple times
- Involve family members

**Non-English Speakers:**
- Professional interpretation
- Translated written materials
- Visual aids (transcend language)
- Family member as backup to interpreter, not replacement

**Pediatrics:**
- Instructions for both parent and child (age-appropriate)
- Liquid formulations preferred
- Weight-based dosing clearly explained
- Syringe demonstration
- Flavor options

## Common Errors and Solutions

| Error | Solution |
|-------|----------|
| Using abbreviations (PO, BID, PRN) | Use plain language |
| Vague timing (daily, twice daily) | Specific times with cues |
| Missing missed dose instructions | Always provide clear guidance |
| No purpose explanation | Explain what medicine does |
| No appearance description | Show medication, describe it |
| Complex multiple medication schedule | Create master schedule |
| No visual aids | Add pictures, diagrams, clocks |
| No confirmation of understanding | Use teach-back method |

## Multiple Medication Management

**Comprehensive Medication Schedule:**
- Time of day columns (morning, noon, evening, bedtime)
- All medications listed
- Check boxes for each dose
- Special notes highlighted
- Emergency contacts included

**Medication Reconciliation:**
- Always review all medications
- Include prescriptions, OTC, supplements
- Identify duplications
- Check for interactions
- Simplify when possible

**Brown Bag Method:**
- Ask patient to bring all medications
- Review each one
- Confirm purpose, dose, timing
- Update medication list
- Remove unnecessary medications

## Device-Specific Instructions

**Inhalers (MDI, DPI):**
- Pictures of each step
- Priming instructions
- Coordination (breathe out, activate, breathe in slowly, hold breath)
- Cleaning instructions
- Dose counter explanation

**Injectable Medications:**
- Site selection with pictures
- Rotation schedule
- Needle disposal
- Storage requirements
- Demonstration and return demonstration

**Topical Medications:**
- "Pea-sized amount" visual
- Application area pictures
- Hand washing before and after
- Not covering unless instructed
- Avoiding sensitive areas

**Eye/Ear Drops:**
- Pictures showing proper position
- Dropper not touching eye/ear
- Spacing between multiple drops
- Proper storage

## Discharge Medication Considerations

**High-Risk Situations:**
- New medications
- Dose changes
- Multiple medications
- High-alert medications (anticoagulants, insulin, opioids)
- Transition from IV to oral
- Language barriers
- Limited social support

**Best Practices:**
- Written discharge medication list
- Reconcile with admission list
- Explain changes
- Provide follow-up plan
- Supply enough medication until follow-up
- Arrange follow-up for medication check`,
      keyTerms: [
        { term: 'polypharmacy', definition: 'Use of multiple medications, typically 5 or more, common in older adults' },
        { term: 'medication reconciliation', definition: 'Process of comparing patient medication lists to ensure accuracy and completeness' },
        { term: 'brown bag review', definition: 'Asking patient to bring all medications for review during visit' },
        { term: 'high-alert medications', definition: 'Medications that cause significant harm if used incorrectly' },
        { term: 'teach-back', definition: 'Method where patients repeat instructions to confirm understanding' },
      ],
      clinicalNotes: `Key principles for medication counseling:

1. Use plain language - no abbreviations
2. Be specific about dose, timing, route
3. Show the actual medication when possible
4. Use visual aids (pictures, clocks, calendars)
5. Always confirm understanding with teach-back
6. Provide written instructions
7. Address missed dose instructions
8. Include both common and serious side effects
9. Document counseling in medical record
10. Consider regimen simplification when possible`,
    },
    4: {
      level: 4,
      summary: 'Effective medication counseling requires systematic approaches including plain language, visual aids, teach-back confirmation, and special considerations for complex regimens and high-risk populations.',
      explanation: `## Theoretical Framework

**Health Belief Model Application:**
- Perceived susceptibility: Why treatment needed
- Perceived severity: Consequences of non-treatment
- Perceived benefits: How medication helps
- Perceived barriers: Side effects, cost, complexity
- Self-efficacy: Confidence in ability to follow regimen

**Information Processing Theory:**
- Limited working memory capacity
- Chunk information into groups
- Use dual coding (verbal + visual)
- Check understanding before adding information
- Repeat key points

**Motivational Interviewing Elements:**
- Elicit patient's understanding
- Explore ambivalence
- Roll with resistance
- Support self-efficacy
- Develop discrepancy between goals and behavior

## Systematic Approach to Medication Counseling

**Structure of Effective Counseling:**

1. **Elicit Current Understanding**
   - "What do you know about this medication?"
   - "What have you heard about it?"
   - "What concerns do you have?"

2. **Provide Core Information**
   - Name (generic and brand)
   - Purpose in plain language
   - How it works (simplified)
   - Expected benefits

3. **Give Specific Instructions**
   - Exact dose
   - Clear timing with cues
   - Route with demonstration if needed
   - Duration of treatment

4. **Address Safety**
   - Common side effects
   - Serious effects requiring contact
   - What to avoid
   - Drug interactions

5. **Confirm Understanding**
   - Teach-back for each component
   - Demonstration for devices
   - Address gaps in understanding

6. **Provide Written Summary**
   - At appropriate reading level
   - With visual aids
   - Include contact information

## Advanced Communication Techniques

**Eliciting-Providing-Eliciting:**
- Elicit: "What do you know about X?"
- Provide: "Let me tell you about..."
- Elicit: "What questions do you have now?"

**Ask-Tell-Ask:**
- Ask: "What would you like to know?"
- Tell: Provide information
- Ask: "What did you hear me say?"

**Closing the Loop:**
- Provider explains
- Patient teaches back
- Provider confirms or corrects
- Continue until accurate

## Complex Regimen Management

**Polypharmacy Strategies:**

*Simplification:*
- Once-daily dosing when possible
- Combination pills
- Same timing for multiple medications
- Discontinue unnecessary medications

*Organization:*
- Master schedule by time of day
- Color-coded systems
- Automated reminders
- Pill organizers

*Communication:*
- Focus on most important medications
- Explain purpose of each
- Explain why they're taken together
- Clear about which to stop if needed

**High-Alert Medications:**

Require special counseling:
- Anticoagulants (warfarin, DOACs)
- Insulin and oral hypoglycemics
- Opioids
- Chemotherapy agents
- Immunologic agents

Extra steps:
- Written instructions required
- Caregiver education
- Follow-up call scheduled
- Monitoring plan clear
- Emergency contact provided

## Special Populations

**Geriatric Patients:**
- Beers Criteria medications highlighted
- Physiologic changes affecting dosing
- Increased fall risk with certain medications
- Cognitive impairment assessment
- Caregiver involvement
- Larger print materials

**Pediatric Patients:**
- Weight-based dosing explained
- Liquid formulation measurement taught
- Age-appropriate explanation
- Parent and child education
- School communication needs
- Flavor and formulation options

**Pregnant/Breastfeeding:**
- Safety information provided
- Benefits vs risks discussed
- Alternatives considered
- Lactation risk categories
- Clear about what's known vs unknown

**Psychiatric Conditions:**
- Importance of adherence emphasized
- Side effects that might be confused with symptoms
- Time to effect explained
- Not stopping without discussion
- Emergency planning for worsening

**Substance Use Disorders:**
- Interaction risks
- Safe storage considerations
- Non-judgmental approach
- Addiction potential when relevant
- Alternative treatments when possible

## Error Prevention Strategies

**Look-Alike Sound-Alike (LASA) Medications:**
- Highlight differences
- Show both medications
- Use both brand and generic
- Tall man lettering for emphasis

**Dose Confusion:**
- Show actual dose
- Mark syringes/cups
- Avoid decimal points when possible
- Right justified numbers

**Timing Confusion:**
- Specific times, not intervals
- Link to daily activities
- Visual clock diagrams
- Consider spacing for interactions

**Route Confusion:**
- Clearly specify route
- Demonstrate when unusual
- Pictures of correct administration
- Warning about wrong routes

## Health Literacy-Specific Strategies

**For Limited Literacy:**
- 3rd-5th grade reading level materials
- Heavy use of pictures
- One concept at a time
- Limit to 3 key points
- Multiple teach-back cycles
- Involve family members

**For Limited Numeracy:**
- Clear dose demonstrations
- Mark measuring devices
- Calendar for timing
- Count pills with patient
- Visual aids for quantities

**For English Language Learners:**
- Professional interpreters
- Translated materials
- Visual aids (transcend language)
- Teach-back through interpreter
- Family member as supplement only

## Implementation

**Workflow Integration:**
- Medication reconciliation at each visit
- EHR prompts for counseling
- Standardized instructions
- Quick text for common medications
- Documentation templates

**Quality Metrics:**
- Teach-back documentation rate
- Written material provision rate
- Medication reconciliation rate
- Readmission for medication-related causes
- Patient satisfaction with communication

**Staff Training:**
- All staff trained in plain language
- Pharmacy communication protocols
- Nursing medication education
- Provider counseling techniques
- Interprofessional collaboration`,
      keyTerms: [
        { term: 'Beers Criteria', definition: 'List of medications potentially inappropriate for older adults' },
        { term: 'look-alike sound-alike', definition: 'Medications with similar names or appearances that can be confused' },
        { term: 'tall man lettering', definition: 'Using mixed case to highlight differences in similar drug names' },
        { term: 'closing the loop', definition: 'Communication technique confirming message received through repetition' },
        { term: 'ask-tell-ask', definition: 'Motivational interviewing technique for information exchange' },
      ],
      clinicalNotes: `Evidence-based practices:

1. Use universal precautions approach - clear instructions for everyone
2. Plain language with no medical abbreviations
3. Specific timing instructions (with meals, at bedtime)
4. Visual aids for all complex regimens
5. Teach-back for ALL patients, not just those suspected of low literacy
6. Written materials at 5th-8th grade reading level
7. For high-alert medications, consider pharmacist counseling
8. Document counseling and teach-back success
9. Arrange follow-up for complex medication changes
10. Always reconcile medications at transitions of care`,
    },
    5: {
      level: 5,
      summary: 'Optimal medication communication requires systematic application of health literacy principles, behavioral science, and implementation strategies to ensure safety, adherence, and optimal outcomes.',
      explanation: `## Comprehensive Evidence Base

**Systematic Review Findings:**

*Written Medication Information:*
- Improves knowledge recall (effect size 0.5-0.7)
- Mixed effects on adherence
- Patient satisfaction increased
- Most effective when combined with counseling
- Standardized materials more effective than ad-hoc

*Verbal Counseling:*
- Structured counseling improves adherence (OR 1.3-1.8)
- Teach-back method critical component
- Longer counseling time not always better
- Quality more important than quantity
- Counseling plus written materials most effective

*Visual Aids:*
- Pictures improve medication identification
- Pictograms improve adherence in low-literacy populations
- Dose administration aids helpful
- Color-coded systems reduce errors

**Behavioral Economics Applications:**

*Defaults and Choice Architecture:*
- Default to simpler regimens when possible
- Pre-filled organizers improve adherence
- Automated refill reminders effective
- Package size affects adherence behavior

*Present Bias:*
- Immediate side effects weighted more heavily
- Emphasize near-term benefits when possible
- Address barriers to immediate adherence
- Consider monitoring adherence early

*Loss Aversion:*
- Framing adherence as avoiding loss can motivate
- "Not taking this could lead to hospitalization"
- Balance with positive framing
- Cultural differences in framing response

## Advanced Communication Strategies

**Motivational Interviewing for Medication Adherence:**

*OARS Framework:*
- Open-ended questions: "What concerns do you have?"
- Affirmations: "You're asking good questions about this medication."
- Reflections: "You're worried about side effects."
- Summaries: "So you understand the purpose but have concerns about cost."

*Eliciting Change Talk:*
- "What would be the benefits of taking this regularly?"
- "How important is it to you to manage your blood pressure?"
- "What would help you remember to take this?"

*Rolling with Resistance:*
- Validate concerns
- Explore rather than argue
- Emphasize patient autonomy
- Revisit motivation

**Shared Decision Making for Medications:**

*Three-Talk Model:*
1. Team talk: Build relationship
2. Option talk: Present choices (including no medication)
3. Decision talk: Make decision together

*Decision Aids:*
- Present benefits and harms clearly
- Use natural frequencies
- Include patient stories when helpful
- Help patients clarify values
- Address uncertainty

## Implementation Science

**CFIR Application:**

*Intervention Characteristics:*
- Evidence strength for clear communication
- Relative advantage (better outcomes)
- Adaptability (tailored to each patient)
- Complexity (requires training but sustainable)
- Design quality (toolkits available)

*Outer Setting:*
- Patient needs (clear communication desired)
- Resources and reimbursement
- External policies (JC, CMS requirements)
- Peer pressure (other institutions doing this)

*Inner Setting:*
- Structural characteristics (EHR, workflow)
- Networks and communication
- Culture (patient-centered vs paternalistic)
- Readiness for change
- Available resources

*Characteristics of Individuals:*
- Knowledge and beliefs about importance
- Self-efficacy for counseling
- Individual stage of change
- Skills and abilities

*Process:*
- Planning
- Engaging (all stakeholders)
- Executing (training, implementation)
- Reflecting and evaluating
- Continuous improvement

**Quality Improvement Approaches:**

*Plan-Do-Study-Act Cycles:*
- Identify specific medication communication problem
- Implement intervention (e.g., standardized counseling script)
- Measure outcomes (adherence, understanding, errors)
- Refine approach based on data

*Lean Methodology:*
- Value: Clear communication improves outcomes
- Value stream: Map medication prescribing to use process
- Flow: Remove barriers to clear communication
- Pull: Provide information when patient ready
- Perfection: Continuous improvement

## Special Populations and Contexts

**Health Disparities:**
- Lower health literacy populations benefit most
- Language barriers require professional interpretation
- Cultural beliefs about medications vary
- Trust issues affect acceptance
- Tailored approaches needed

**Transitions of Care:**
- Medication reconciliation at each transition
- Clear communication of changes
- Follow-up to confirm understanding
- Engage community pharmacists
- Utilize health information exchange

**Ambulatory Care Settings:**
- e-prescribing considerations
- Prior authorization challenges
- Cost discussions essential
- Generic vs brand discussions
- Formulary restrictions

**Inpatient Settings:**
- Admission medication reconciliation
- Daily review of medications
- Discharge planning starts at admission
- Teach-back for new medications
- Post-discharge follow-up

**Emergency Department:**
- Brief but clear instructions
- Written discharge instructions
- Follow-up arrangements clear
- New medications carefully explained
- Prescription for limited duration

**Specialty Settings:**

*Oncology:*
- Complex regimens with multiple agents
- Side effect management critical
- Adherence essential for outcomes
- Emotional support needed

*Rheumatology:*
- Biologics and DMARDs
- Injection/infusion teaching
- Long-term adherence challenges
- Monitoring requirements

*Infectious Disease:*
- Antibiotic stewardship messaging
- HIV adherence counseling
- Hepatitis C treatment complexity
- PrEP/PEP counseling

## Technology Applications

**EHR Integration:**
- Medication list optimization
- Decision support for prescribing
- Patient instructions generation
- Teach-back prompts
- Translation capabilities

**Patient Portals:**
- Medication lists with pictures
- Refill requests
- Side effect reporting
- Adherence tracking
- Secure messaging

**Mobile Applications:**
- Medication reminders
- Dose tracking
- Drug interaction checkers
- Pill identification
- Educational content

**Telehealth:**
- Verbal counseling via video
- Screen sharing for visual aids
- Electronic materials
- Family member participation
- Follow-up scheduling

## Professional Training

**Curriculum Components:**

*Knowledge:*
- Health literacy prevalence and impact
- Evidence for communication strategies
- Common medication errors
- Special population considerations
- Resources available

*Skills:*
- Plain language use
- Teach-back method
- Motivational interviewing basics
- Visual aid creation
- Documentation

*Attitudes:*
- Value of clear communication
- Universal precautions approach
- Patient-centered care
- Cultural humility
- Commitment to improvement

**Assessment Methods:**
- Direct observation of counseling
- OSCE stations
- Patient feedback
- Teach-back documentation rates
- Medication error rates

## Research Directions

**Gaps in Evidence:**
- Optimal counseling length
- Best training methods
- Technology effectiveness
- Cost-effectiveness data
- Long-term outcome studies

**Emerging Areas:**
- Pharmacogenomics communication
- Digital therapeutics instructions
- AI-powered personalization
- Social media interventions
- Community health worker interventions

**Implementation Research:**
- Best practices for spread
- Sustainability factors
- Context-specific adaptations
- Equity implications
- Policy interventions`,
      keyTerms: [
        { term: 'motivational interviewing', definition: 'Client-centered counseling style for eliciting behavior change by helping patients explore ambivalence' },
        { term: 'shared decision making', definition: 'Collaborative process where clinicians and patients make decisions together based on evidence and patient values' },
        { term: 'OARS', definition: 'Motivational interviewing framework: Open questions, Affirmations, Reflections, Summaries' },
        { term: 'three-talk model', definition: 'Shared decision making approach: team talk, option talk, decision talk' },
        { term: 'present bias', definition: 'Tendency to overweight immediate costs/benefits relative to future ones' },
        { term: 'loss aversion', definition: 'People prefer avoiding losses to acquiring equivalent gains' },
      ],
      clinicalNotes: `System-level implementation requires:

1. Organizational commitment to health literacy universal precautions
2. Standardized medication counseling protocols
3. EHR integration with decision support
4. Comprehensive staff training
5. Quality metrics and monitoring
6. Patient involvement in materials development
7. Regular audit and feedback
8. Resource allocation for visual aids and translations

Core truth: The best medication counseling is clear enough that anyone can understand it, specific enough to be unambiguous, and confirmed through teach-back.`,
    },
  },

  media: [
    {
      id: 'medication-clock-diagram',
      type: 'diagram',
      filename: 'medication-clock-diagram.svg',
      title: 'Medication Timing Clock',
      description: 'Clock face showing medication times at 8 AM, 2 PM, and 8 PM with medication icons',
    },
    {
      id: 'medication-card-example',
      type: 'diagram',
      filename: 'medication-card-example.svg',
      title: 'Patient Medication Card',
      description: 'Example medication card with picture, name, dose, timing, and safety information',
    },
  ],

  citations: [
    {
      id: 'ahrq-medication-counseling',
      type: 'website',
      title: 'Medication Counseling for Health Literacy: AHRQ Guide',
      source: 'Agency for Healthcare Research and Quality',
      url: 'https://www.ahrq.gov/health-literacy/improve/precautions-toolkit/index.html',
    },
    {
      id: 'knous-medication-adherence',
      type: 'article',
      title: 'Systematic Review of Interventions to Improve Medication Adherence',
      authors: ['Knaus, S.', 'Roter, D.', 'Larson, S.'],
      source: 'Patient Education and Counseling',
    },
    {
      id: 'ismp-high-alert',
      type: 'website',
      title: 'High-Alert Medications',
      source: 'Institute for Safe Medication Practices',
      url: 'https://www.ismp.org/resources/high-alert-medications',
    },
    {
      id: 'beers-criteria',
      type: 'article',
      title: 'American Geriatrics Society 2023 Updated Beers Criteria for Potentially Inappropriate Medication Use in Older Adults',
      authors: ['American Geriatrics Society Beers Criteria Update Expert Panel'],
      source: 'Journal of the American Geriatrics Society',
    },
  ],

  crossReferences: [
    { targetId: 'health-literacy-basics', targetType: 'concept', relationship: 'related', label: 'Health Literacy Basics' },
    { targetId: 'health-literacy-teach-back', targetType: 'concept', relationship: 'related', label: 'Teach-Back Method' },
    { targetId: 'health-literacy-plain-language', targetType: 'concept', relationship: 'related', label: 'Plain Language' },
    { targetId: 'health-literacy-visual-aids', targetType: 'concept', relationship: 'related', label: 'Visual Aids' },
    { targetId: 'medications', targetType: 'topic', relationship: 'related', label: 'Medications' },
  ],

  tags: {
    systems: ['communication-skills', 'medications'],
    topics: ['health literacy', 'medication safety', 'patient education', 'medication adherence'],
    keywords: ['medication instructions', 'patient counseling', 'medication safety', 'teach-back', 'AHRQ'],
    clinicalRelevance: 'critical',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default medicationInstructions;
