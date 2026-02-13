/**
 * Preparing for Medical Visits - Comprehensive Educational Content
 *
 * Explains how to prepare for a doctor visit, questions to ask, bringing
 * records, medication lists, overcoming language barriers, health literacy
 * considerations, and the teach-back method for verifying understanding.
 */

import { EducationalContent } from '../types';

export const preparingForVisitsContent: EducationalContent = {
  id: 'topic-preparing-for-visits',
  type: 'topic',
  name: 'Preparing for Medical Visits',
  nameEs: 'Como Prepararse para una Cita Medica',
  alternateNames: ['Doctor Visit Preparation', 'Medical Appointment Preparation', 'Getting Ready for the Doctor'],

  levels: {
    1: {
      level: 1,
      summary: 'Getting ready before you see the doctor helps you get better care. Bringing a list of your medicines, writing down your questions, and knowing what to tell the doctor can make your visit more helpful and less stressful.',
      explanation: `Going to the doctor can feel overwhelming, especially if you are not sure what to expect. But a little preparation can make a big difference. Here is how to get ready.

**Before Your Appointment:**

**Make a List of Your Medicines:**
- Write down every medicine you take, including:
  - Prescription medicines (from a doctor)
  - Over-the-counter medicines (like Tylenol, Advil, Tums)
  - Vitamins and supplements (like Vitamin D, fish oil)
  - Herbal remedies (like teas, natural medicines)
- Include HOW MUCH you take and HOW OFTEN
- The easiest way: Put all your medicine bottles in a bag and bring them with you
- Think of this as bringing your "medicine resume" to show the doctor

**Write Down Your Symptoms:**
- What is bothering you? (pain, tiredness, trouble sleeping, etc.)
- When did it start?
- How bad is it? (rate it 1-10, where 10 is the worst)
- Does anything make it better or worse?
- Has it changed over time?
- Writing these down helps you remember everything when you are in the exam room

**Write Down Your Questions:**
- It is easy to forget questions when you are face-to-face with the doctor
- Write them down before you go
- Put the most important questions first (in case you run out of time)

**Good Questions to Ask Your Doctor:**

About Your Condition:
- "What do I have?" (What is my diagnosis?)
- "What caused this?"
- "Will it get better, worse, or stay the same?"
- "How does this affect my daily life?"

About Treatment:
- "What are my treatment options?"
- "What are the benefits and risks of this treatment?"
- "Are there side effects I should watch for?"
- "How long will the treatment take?"
- "Is there a less expensive option?"

About Medicines:
- "What is this medicine for?"
- "How do I take it?" (with food? morning or night?)
- "What if I miss a dose?"
- "Can I take this with my other medicines?"
- "Is there a generic version that costs less?"

About Follow-Up:
- "Do I need to come back? When?"
- "What warning signs should I watch for?"
- "When should I call your office?"
- "Who do I call if I have a problem after hours?"

**Bring Important Information:**

What to Bring:
- Insurance card (or a photo of the front and back)
- Photo ID
- List of medicines (or the bottles themselves)
- Your written questions and symptom notes
- Medical records from other doctors (if this is a new doctor)
- Results of recent lab tests or imaging
- A pen and paper to take notes (or use your phone)

**Consider Bringing Someone With You:**
- A family member or friend can:
  - Help you remember what the doctor says
  - Take notes for you
  - Ask questions you might forget
  - Provide emotional support
  - Help with transportation
- If you need a language interpreter, request one when you schedule the appointment

**During Your Appointment:**

**Be Honest With Your Doctor:**
- Tell the truth about your symptoms, even if it is embarrassing
- Tell them about all medicines you take, including alcohol and recreational drugs
- Doctors cannot help you if they do not have accurate information
- Everything you say is confidential (private)

**Take Notes:**
- Write down what the doctor tells you
- Ask the doctor to write down important information
- If you do not understand something, ask: "Can you explain that in simpler words?"

**Use the "Teach-Back" Method:**
- After the doctor explains something, repeat it back in your own words
- Say: "Let me make sure I understand. You want me to..."
- This helps make sure you understood correctly
- The doctor can correct any misunderstandings right away
- This is NOT about testing you - it is about making sure the doctor explained clearly

**Ask About Next Steps:**
- Do I need lab tests or imaging?
- Do I need to see a specialist?
- Do I need a new prescription?
- When should I come back?
- What should I do if my symptoms get worse?

**After Your Appointment:**

- Review your notes while the information is fresh
- Fill any new prescriptions right away
- Schedule follow-up appointments before you leave the office
- Call the office if you think of more questions later
- Follow through on the doctor's recommendations

**If You Have Limited English:**

- Request an interpreter when you make the appointment
- You have the RIGHT to a free interpreter - the clinic pays for it
- Do not use children as interpreters
- Bring written questions in your language - the interpreter can translate them
- Ask for written instructions in your language

**Remember:**
Your doctor visit is YOUR time. Do not be afraid to ask questions, ask for explanations, or say "I do not understand." A good doctor wants you to understand your health.`,
      keyTerms: [
        { term: 'teach-back method', definition: 'When you repeat what the doctor told you in your own words to make sure you understood correctly' },
        { term: 'symptoms', definition: 'The problems or changes in your body that tell you something might be wrong, like pain, fever, or tiredness' },
        { term: 'diagnosis', definition: 'The name of the health condition or disease that the doctor determines you have' },
        { term: 'follow-up', definition: 'A return visit to the doctor to check on your progress or continue treatment' },
        { term: 'over-the-counter (OTC)', definition: 'Medicines you can buy at a store without a prescription from a doctor' },
        { term: 'confidential', definition: 'Private - your doctor cannot share your medical information without your permission' },
      ],
      analogies: [
        'Preparing for a doctor visit is like preparing for a job interview - the more prepared you are, the better the outcome. Having your questions ready is like having your resume ready.',
        'The teach-back method is like reading back a restaurant order - the waiter repeats your order to make sure they got it right, and you repeat the doctor\'s instructions to make sure you understood.',
        'Bringing your medicine bottles to the doctor is like bringing your ingredients to a cooking class - the instructor needs to see exactly what you are working with.',
      ],
      examples: [
        'Mrs. Lopez writes down three questions before her appointment: (1) Why am I so tired? (2) Could my medicine be causing my headaches? (3) Do I need a flu shot? She gets answers to all three because she was prepared.',
        'Mr. Kim brings all his medicine bottles in a bag. The doctor discovers he is taking two medicines that should not be taken together and makes a change that helps his stomach pain go away.',
        'After the doctor explains how to take her new blood pressure medicine, Sarah says: "So I take one pill every morning with food, and I should not eat grapefruit?" The doctor says "Exactly right!" and Sarah feels confident about her treatment.',
        'David brings his wife to his cardiology appointment. While David focuses on what the doctor is saying, his wife takes notes. Later at home, they review the notes together and remember everything clearly.',
      ],
      patientCounselingPoints: [
        'Write down your top 3 questions before every doctor visit - the most important ones first',
        'Bring ALL your medicines (including vitamins and supplements) to every visit or keep an updated list on your phone',
        'Use the teach-back method: "Let me make sure I understand..." - this is not embarrassing, it is smart',
        'If you do not understand something, always ask the doctor to explain it differently - this is your right',
        'Request an interpreter when scheduling your appointment if you need one - do not wait until you arrive',
        'Bring someone you trust to important appointments to help listen and take notes',
      ],
    },
    2: {
      level: 2,
      summary: 'Effective preparation for medical visits includes organizing medication lists, documenting symptoms and health history, preparing focused questions, understanding health literacy principles, and utilizing the teach-back method to confirm understanding. These strategies improve the quality of the patient-provider encounter and support better health outcomes.',
      explanation: `## Preparing for Medical Visits: A Comprehensive Guide

### Pre-Visit Preparation

**Medication Reconciliation:**
Creating and maintaining an accurate medication list is one of the most important things you can do for your health.

**Your Medication List Should Include:**

| Information | Example | Why It Matters |
|-------------|---------|----------------|
| Drug name (brand and generic) | Lipitor (atorvastatin) | Prevents confusion about the same drug |
| Dose | 20 mg | Ensures correct dosing |
| Frequency | Once daily at bedtime | Confirms proper timing |
| Prescribing doctor | Dr. Smith, cardiologist | Helps coordinate care |
| Reason for taking | High cholesterol | Ensures all conditions are addressed |
| Start date | January 2023 | Helps track treatment duration |
| OTC medications | Ibuprofen 200 mg as needed | Identifies potential interactions |
| Supplements | Vitamin D 2000 IU daily | Important for drug-supplement interactions |
| Allergies | Penicillin - causes rash | Critical safety information |

**Tip:** Many pharmacies provide a printed medication list. You can also use apps like Medisafe, MyChart, or Apple Health to maintain a digital list.

### Symptom Documentation

**The OLDCARTS Method for Describing Symptoms:**
A structured approach helps you give your doctor complete information:

- **O**nset: When did it start? Was it sudden or gradual?
- **L**ocation: Where exactly do you feel it?
- **D**uration: How long does it last? Is it constant or comes and goes?
- **C**haracterization: What does it feel like? (sharp, dull, burning, aching, throbbing)
- **A**ggravating factors: What makes it worse? (movement, food, stress, time of day)
- **R**elieving factors: What makes it better? (rest, medication, ice, heat)
- **T**iming: Is there a pattern? (worse in morning, after meals, during exercise)
- **S**everity: On a scale of 1-10, how bad is it?

**Example Using OLDCARTS:**
"I've had stomach pain for about 2 weeks (Onset). It's in my upper belly, right side (Location). It lasts about 30 minutes at a time (Duration). It feels like a burning sensation (Characterization). It gets worse after eating fatty foods (Aggravating). Antacids help a little (Relieving). It usually happens 30 minutes after meals (Timing). About a 6 out of 10 (Severity)."

### Health History Preparation

**Family Health History:**
- Parents, siblings, and grandparents' major health conditions
- Focus on: heart disease, cancer, diabetes, stroke, mental health conditions
- Age at diagnosis and age at death (if applicable)
- Knowing family history helps your doctor assess your risk

**Personal Health Timeline:**
- Major illnesses and surgeries (with approximate dates)
- Hospitalizations
- Chronic conditions and when diagnosed
- Immunization history
- Previous test results (bring copies if available)

### Asking Effective Questions

**The ASK Framework:**
A simple approach to ensure you cover the important topics:

- **A**sk about your diagnosis and what it means
- **S**eek information about treatment options
- **K**now what to do next (follow-up, warning signs, medications)

**Questions Organized by Visit Type:**

**Annual Physical/Wellness Visit:**
- Am I up to date on my screenings (cancer, cholesterol, diabetes)?
- Are my vaccinations current?
- Based on my age and health, what should I be watching for?
- Are there lifestyle changes I should make?
- When should my next check-up be?

**Sick Visit:**
- What do you think is causing my symptoms?
- Do I need any tests?
- What treatment do you recommend?
- When should I start feeling better?
- What should I do if symptoms get worse?

**Chronic Disease Management:**
- How is my condition progressing?
- Are my current medications working well?
- Should I adjust anything about my treatment?
- What are my latest lab results and what do they mean?
- Are there any new treatments available?

**Pre-Surgical Consultation:**
- What exactly will the procedure involve?
- What are the risks and benefits?
- What are the alternatives to surgery?
- How long is recovery?
- What should I do to prepare?
- What are the costs? Is this covered by my insurance?

**Specialty Referral:**
- Why am I being referred to this specialist?
- What should I bring to the appointment?
- Will you share my medical records with the specialist?
- After the specialist visit, what happens next?
- Should I still see you for follow-up?

### Understanding Health Literacy

**What Is Health Literacy?**
Health literacy is the ability to find, understand, and use health information to make good decisions.

**Low Health Literacy Affects:**
- Understanding medication instructions
- Following treatment plans
- Navigating the healthcare system
- Completing medical forms
- Understanding test results

**Tips for Improving Understanding:**
- Ask your doctor to use simple language, not medical jargon
- Request written instructions
- Use the teach-back method (see below)
- Ask for visual aids (diagrams, pictures)
- Look up information from trusted sources (MedlinePlus.gov, CDC.gov)
- Ask the pharmacist to explain your medications

### The Teach-Back Method

**What It Is:**
A communication technique where you repeat back what the healthcare provider told you in your own words. This confirms understanding and allows the provider to correct any misunderstandings.

**How to Use It as a Patient:**
1. Listen carefully to the doctor's explanation
2. Say: "I want to make sure I understand. What you're telling me is..."
3. Repeat the key points in your own words
4. Ask: "Did I get that right?"
5. If anything is wrong, ask for clarification

**Examples:**
- Doctor: "Take this antibiotic twice a day with food for 10 days, even if you feel better."
- You: "So I take one pill in the morning with breakfast and one with dinner, and I keep taking them for the full 10 days even if my infection clears up. Is that right?"

- Doctor: "Your A1C is 7.8, which is above our goal. We need to adjust your diabetes management."
- You: "My blood sugar number is higher than it should be, so we need to make some changes. You mentioned increasing my metformin. Should I also change my diet?"

### During the Visit

**Communication Strategies:**
- Start with your most important concern
- Be specific about symptoms (use OLDCARTS)
- Be honest about adherence to medications and lifestyle recommendations
- Speak up if you disagree or are uncomfortable with a recommendation
- Ask about alternatives if cost is a concern
- Take notes or ask permission to record the conversation

**Time Management:**
- Most office visits are 15-20 minutes
- Prioritize your concerns (start with the most important)
- If you have multiple issues, mention them all at the beginning so the doctor can plan the visit
- For complex issues, ask about scheduling a longer appointment

**Shared Decision-Making:**
- Your preferences matter in treatment decisions
- Ask about options, not just "the plan"
- Consider: effectiveness, side effects, cost, convenience, your personal values
- It is okay to say "I need time to think about this" before deciding on treatment

### After the Visit

**Follow-Up Checklist:**
- [ ] Review your notes while the visit is fresh
- [ ] Fill new prescriptions within 24 hours
- [ ] Schedule follow-up appointments
- [ ] Complete any recommended tests or referrals
- [ ] Set up reminders for medications or appointments
- [ ] Contact the office if you have questions (use patient portal if available)
- [ ] Share important information with family members/caregivers

**Using the Patient Portal:**
- Review visit notes and test results online
- Send secure messages to your doctor's office
- Request prescription refills
- Schedule appointments
- Access your health history

### Special Considerations

**For Elderly Patients:**
- Bring a family member or caregiver
- Bring a complete medication list (including OTC and supplements)
- Discuss advance directives and care preferences
- Ask about fall risk, cognitive changes, and medication interactions
- Hearing aids, glasses, and large-print materials can improve communication

**For Pediatric Visits:**
- Keep a growth and development record
- Note behavioral changes or concerns
- Bring vaccination records
- Write down questions about developmental milestones
- Both parents/caregivers should be informed about care plans

**For Patients With Limited English Proficiency:**
- Request an interpreter when scheduling
- Bring written questions in your language
- Ask for translated discharge instructions
- Use "I Speak" cards to indicate your language
- Community health workers may be available to help navigate the visit`,
      keyTerms: [
        { term: 'OLDCARTS', definition: 'A method for describing symptoms: Onset, Location, Duration, Characterization, Aggravating factors, Relieving factors, Timing, Severity' },
        { term: 'health literacy', definition: 'The ability to find, understand, and use health information and services to make informed health decisions' },
        { term: 'teach-back method', definition: 'A communication technique where patients repeat information in their own words to confirm understanding' },
        { term: 'shared decision-making', definition: 'A process where patients and providers work together to make treatment decisions based on clinical evidence and patient preferences' },
        { term: 'medication reconciliation', definition: 'The process of creating and verifying an accurate list of all medications a patient is taking' },
        { term: 'patient portal', definition: 'A secure website or app where patients can access their health records, communicate with providers, and manage appointments' },
      ],
      analogies: [
        'The OLDCARTS method for describing symptoms is like a detective\'s report - it gives your doctor all the clues they need to solve the mystery of what is causing your problem.',
        'Shared decision-making is like planning a trip with a travel agent - the agent has expertise about destinations, but you know your preferences and budget. Together you plan the best trip.',
      ],
      patientCounselingPoints: [
        'Use the OLDCARTS method to describe symptoms clearly: Onset, Location, Duration, Character, Aggravating, Relieving, Timing, Severity',
        'Maintain an updated medication list on your phone or in your wallet - this can be life-saving in an emergency',
        'Ask your doctor to explain your test results in plain language and what actions you should take based on them',
        'Use the patient portal to review visit notes - studies show patients who review notes have better understanding and adherence',
        'If you have multiple health concerns, start by listing all of them at the beginning of the visit so your doctor can prioritize time',
        'Shared decision-making is your right - ask about all treatment options, including doing nothing, before agreeing to a plan',
      ],
    },
    3: {
      level: 3,
      summary: 'Optimal preparation for medical visits involves structured approaches to medication reconciliation, symptom documentation using clinical frameworks (OLDCARTS), evidence-based communication strategies including the teach-back method, and health literacy-informed patient engagement. These strategies align with patient-centered care principles and contribute to improved clinical outcomes, reduced medical errors, and enhanced patient-provider relationships.',
      explanation: `## Medical Visit Preparation: Clinical Communication Framework

### Medication Reconciliation: Clinical Importance

**The Scope of the Problem:**
- Medication errors affect 7-10 million patients annually in the U.S.
- 50-67% of medication errors originate from inaccurate medication histories
- Transitions of care (admission, discharge, transfers) are highest-risk periods
- Approximately 25% of prescriptions contain errors related to medication history

**Best Practices for Patient Medication Lists:**

| Component | Details | Clinical Relevance |
|-----------|---------|-------------------|
| Active prescriptions | Name, dose, frequency, route | Ensures current regimen accuracy |
| Over-the-counter drugs | Including frequency of use | Identifies OTC-prescription interactions |
| Supplements/herbals | Include dosage and brand | Drug-supplement interactions (St. John's Wort, ginkgo, etc.) |
| Allergies/adverse reactions | Drug, reaction type, severity | Critical safety data |
| Discontinued medications | Recent changes, reason for stopping | Context for current treatment |
| Adherence patterns | Doses missed, reasons | Informs treatment adjustments |
| Prescribing providers | For each medication | Supports care coordination |

**Brown Bag Review:**
- Patient brings all medication containers to appointment
- Provider physically reviews each container
- Identifies: expired medications, duplications, discontinued drugs still on hand
- Gold standard for medication reconciliation in primary care
- Especially important for elderly patients and those with polypharmacy

### Clinical Communication Models

**SBAR for Patient Communication:**
Originally developed for healthcare team communication, adapted for patient use:
- **S**ituation: "I am calling/visiting because..."
- **B**ackground: "My relevant history includes..."
- **A**ssessment: "I think the problem may be..."
- **R**ecommendation: "I would like to discuss..."

**Example:**
"I'm here because I've been having chest tightness for the past week (Situation). I have a history of high blood pressure and my father had a heart attack at 55 (Background). I'm concerned this might be heart-related because it gets worse with exertion (Assessment). I'd like to discuss whether I need any heart tests (Recommendation)."

**Motivational Interviewing Awareness:**
- Providers may use motivational interviewing to explore behavior change
- Understanding the approach helps patients participate effectively
- Key elements: open-ended questions, reflective listening, affirming, summarizing
- Patients can support this by being honest about behaviors, barriers, and ambivalence

### Health Literacy: Clinical Context

**Health Literacy Levels in the U.S.:**
- Only 12% of adults have proficient health literacy (NAAL, 2003)
- 36% of adults have basic or below basic health literacy
- Low health literacy associated with:
  - Higher hospitalization rates (29% higher)
  - Higher ER utilization
  - Lower medication adherence (40-50% reduction)
  - Worse chronic disease management (HbA1c, blood pressure)
  - Higher mortality risk

**Universal Precautions Approach:**
- Assume ALL patients may have difficulty understanding health information
- Use plain language with all patients (not just those identified as low literacy)
- Avoid or explain medical jargon
- Limit information to 3-5 key points per visit
- Use visual aids and demonstrations
- Confirm understanding with teach-back
- Provide written materials at 5th-6th grade reading level

**Assessing Comprehension:**
- Teach-back method (see detailed section below)
- Ask-Me-3 questions:
  1. What is my main problem?
  2. What do I need to do?
  3. Why is it important for me to do this?
- Observe nonverbal cues: confused expression, nodding without engagement, avoiding questions

### Teach-Back Method: Evidence and Implementation

**Evidence Base:**
- Systematic reviews show teach-back improves:
  - Patient knowledge and comprehension (significant improvement)
  - Self-management behaviors (diabetes, heart failure, asthma)
  - Medication adherence (20-40% improvement)
  - Hospital readmission rates (reduction in 30-day readmissions)
- Recommended by AHRQ, Joint Commission, IHI, and AMA

**Effective Teach-Back Technique:**

**Provider-Initiated Teach-Back:**
1. Explain information clearly using plain language
2. Assess comprehension: "I want to make sure I explained this clearly. Can you tell me in your own words..."
3. Frame as provider responsibility: "I want to make sure I did a good job explaining..."
4. If patient cannot teach back accurately, re-explain and try again
5. Document teach-back use in the medical record

**Patient-Initiated Teach-Back:**
1. After receiving information, say: "Let me make sure I understand..."
2. Repeat key points in your own words
3. Ask: "Did I get that right?"
4. Request clarification on any points you are unsure about
5. Repeat until you feel confident in your understanding

**Teach-Back for Specific Clinical Scenarios:**

| Scenario | Teach-Back Focus |
|----------|-----------------|
| New medication | Name, purpose, dose, timing, side effects to watch for |
| Chronic disease management | Self-monitoring, warning signs, when to call |
| Post-surgical instructions | Activity restrictions, wound care, follow-up timeline |
| Diagnostic test results | What the results mean, what actions to take |
| New diagnosis | Name of condition, what it means for daily life, treatment plan |

### Shared Decision-Making: Framework and Tools

**Ottawa Decision Support Framework:**
- Decisional needs assessment (knowledge, values, support)
- Decision support interventions (counseling, decision aids)
- Outcomes (informed choice, reduced decisional conflict)

**Decision Aid Tools:**
- Patient decision aids for common medical decisions
- Available from: Ottawa Hospital Research Institute, Healthwise, AHRQ
- Cover topics: surgery vs. medication, screening tests, treatment options
- Format: pamphlets, videos, interactive websites
- Evidence shows: improved knowledge, more realistic expectations, greater participation

**Values Clarification:**
- What matters most to you? (longevity, quality of life, independence, cost)
- What are you most worried about? (side effects, surgery, disability)
- What is your preferred role? (doctor decides, shared, patient decides)
- Cultural values: family involvement, spiritual considerations, traditional medicine

### Appointment Logistics

**Time Optimization:**
- Standard primary care visit: 15-20 minutes
- Specialist consultation: 20-40 minutes (initial), 10-15 minutes (follow-up)
- Annual physical: 30-45 minutes
- Complex care visits may need extended time (request when scheduling)

**Pre-Visit Planning Services:**
- Many practices offer pre-visit questionnaires (online or paper)
- Nurse phone calls before complex visits to triage concerns
- Patient portal messaging to communicate concerns before the visit
- Pre-visit labs: Some providers order labs before the appointment so results are ready for discussion

**Telehealth Preparation:**
- Test technology beforehand (camera, microphone, internet connection)
- Find a quiet, private space with good lighting
- Have medication list and questions ready (same as in-person)
- Have thermometer, blood pressure cuff, or other devices ready if requested
- Know the platform: how to join, troubleshoot, contact help

### Care Transitions and Coordination

**Preparing for Specialist Visits:**
- Obtain and bring referral documentation
- Bring relevant test results and imaging (or ensure they are in a shared EHR)
- Understand the reason for the referral
- Prepare questions specific to the specialty concern
- Plan for communication back to the referring provider

**Preparing for Hospital Discharge:**
- Request medication reconciliation before discharge
- Understand each medication: name, purpose, dose, timing
- Know warning signs that require returning to the ER
- Confirm follow-up appointment date and time
- Understand activity restrictions and self-care instructions
- Designate a care partner to help during recovery
- Request written discharge instructions (in your language if needed)

**Multi-Provider Coordination:**
- Maintain a personal health record (paper or digital)
- Share medication list with all providers
- Inform each provider about care from other providers
- Use patient portal to track records across systems
- Consider a care coordinator or patient navigator for complex care

### Cultural Considerations

**Cultural Humility in Healthcare:**
- Every patient brings unique cultural perspectives to the visit
- Cultural factors may influence: symptom expression, treatment preferences, family roles, end-of-life decisions
- Providers should ask, not assume, about cultural preferences
- Patients should feel empowered to share cultural perspectives with providers

**Communication Preferences:**
- Eye contact norms vary by culture
- Physical examination boundaries vary by culture and gender
- Decision-making authority (individual vs. family)
- Disclosure preferences (how much information is desired)
- Complementary/alternative medicine use

**Language Considerations:**
- Request interpreter services before the visit
- Professional interpreters maintain confidentiality and accuracy
- Written materials in preferred language
- "I Speak" cards available in most healthcare facilities
- Right to language access is protected by federal law`,
      keyTerms: [
        { term: 'SBAR', definition: 'Situation, Background, Assessment, Recommendation - a structured communication framework adapted from healthcare team communication for patient-provider interactions' },
        { term: 'polypharmacy', definition: 'The simultaneous use of multiple medications, typically five or more, which increases the risk of drug interactions and adverse effects' },
        { term: 'universal precautions (health literacy)', definition: 'An approach that assumes all patients may have difficulty understanding health information and uses plain language and teach-back with everyone' },
        { term: 'decision aid', definition: 'An evidence-based tool that helps patients understand treatment options and align decisions with their personal values and preferences' },
        { term: 'Ask-Me-3', definition: 'A patient education program encouraging patients to ask three questions: What is my main problem? What do I need to do? Why is it important?' },
        { term: 'brown bag review', definition: 'A medication reconciliation technique where patients bring all their medication containers to the appointment for the provider to physically review' },
      ],
      clinicalNotes: 'The teach-back method is one of the most evidence-supported interventions for improving patient comprehension and reducing adverse events. All clinicians should incorporate teach-back into standard practice, particularly for medication instructions, self-management plans, and discharge education. Universal health literacy precautions should be applied to all patients, not just those identified as having low literacy.',
      patientCounselingPoints: [
        'The SBAR framework can help you organize your thoughts before a visit: Situation, Background, Assessment, and Recommendation',
        'Only 12% of U.S. adults have proficient health literacy - if you do not understand something, you are in the majority. Always ask for clarification',
        'Bring all your medication containers to at least one visit per year for a thorough brown bag review',
        'If you are facing a major treatment decision, ask about decision aids - these tools help you weigh options against your personal values',
        'Use the teach-back method every time: "Let me make sure I understand..." This simple technique catches misunderstandings immediately',
        'For telehealth visits, prepare the same way as in-person visits and test your technology beforehand',
      ],
    },
    4: {
      level: 4,
      summary: 'Patient visit preparation intersects health literacy research, communication science, medication safety systems, and patient-centered care frameworks. Evidence demonstrates that structured visit preparation, medication reconciliation, teach-back, and shared decision-making significantly improve clinical outcomes, reduce medical errors, and enhance patient satisfaction. Health literacy universal precautions, adopted by AHRQ and endorsed by major healthcare organizations, represent a paradigm shift from identifying "low-literacy patients" to creating health-literate organizations.',
      explanation: `## Medical Visit Preparation: Advanced Clinical and Systems Analysis

### Health Literacy: Epidemiology and Impact

**National Assessment of Adult Literacy (NAAL) Framework:**
- Proficient health literacy: 12% of adults
- Intermediate: 53%
- Basic: 22%
- Below basic: 14%
- Low health literacy costs the U.S. healthcare system an estimated $106-$238 billion annually
- Disparities: Age, education, poverty, race/ethnicity, and primary language are all associated with health literacy levels

**Health Literacy and Clinical Outcomes:**

| Outcome | Impact of Low Health Literacy | Evidence Quality |
|---------|------------------------------|-----------------|
| Hospitalization | 29% higher rate | Strong (multiple systematic reviews) |
| ER utilization | 40-60% higher | Moderate |
| Mortality | 26% higher (elderly) | Strong (Baker et al., JAMA) |
| Medication adherence | 40-50% reduction | Strong |
| Preventive care utilization | 30-50% lower | Strong |
| Self-management (diabetes) | 1.4% higher HbA1c | Moderate |
| Readmissions | 30% higher 30-day rate | Moderate |

**Health Literacy as Social Determinant:**
- Healthy People 2030 includes health literacy objectives
- ICD-10 does not have a specific code for low health literacy
- Screening tools: REALM (Rapid Estimate of Adult Literacy in Medicine), S-TOFHLA, Newest Vital Sign
- Controversy: Routine screening may stigmatize patients
- Preferred approach: Universal precautions (treat all patients as potentially at risk)

### Health Literate Organizations: Ten Attributes (IOM/NAM)

1. Has leadership that makes health literacy integral to mission and operations
2. Integrates health literacy into planning, evaluation, patient safety, and quality improvement
3. Prepares workforce to be health literate and monitors progress
4. Includes populations served in design, implementation, and evaluation
5. Meets the needs of populations with a range of health literacy skills while avoiding stigma
6. Uses health literacy strategies in interpersonal communication
7. Provides easy access to health information and services
8. Designs and distributes print, AV, and social media that are easy to understand and act on
9. Addresses health literacy in high-risk situations (transitions, informed consent)
10. Communicates clearly about costs and what health plans cover

### Teach-Back: Advanced Implementation

**Implementation Science:**
- Teach-back is a "closing the loop" communication technique
- Theoretical basis: Health Belief Model, Social Cognitive Theory, adult learning theory
- Implementation barriers: time pressure, provider training, documentation burden, patient discomfort
- Facilitators: organizational culture, standardized protocols, EHR integration, team-based approach

**Research Synthesis:**
- Cochrane review evidence: Teach-back is effective for improving knowledge, self-efficacy, and adherence
- Greatest impact: Chronic disease self-management (diabetes, heart failure, COPD)
- Hospital discharge: Reduces 30-day readmission rates by 12-30% in studies
- Medication safety: Reduces medication errors by 25-50% in transition-of-care contexts

**Documentation:**
- Best practice: Document teach-back use, patient response, and re-teaching if needed
- EHR templates for teach-back documentation
- Quality metric: Proportion of visits with teach-back documented
- Integration with patient education modules

**Training Healthcare Teams:**
- AHRQ Health Literacy Universal Precautions Toolkit
- Teach-back training modules from IHI (Institute for Healthcare Improvement)
- Simulation-based training with standardized patients
- Train all team members (nurses, MAs, pharmacists, discharge planners)
- Role-specific teach-back focus areas

### Medication Reconciliation: Systems Approach

**Joint Commission National Patient Safety Goal (NPSG.03.06.01):**
- Maintain and communicate accurate medication information
- Compare medications across settings at every transition of care
- Provide patients with written medication information at discharge
- Reconciliation required at: admission, transfer, discharge, outpatient visits

**High-Risk Medication Categories:**
- Anticoagulants (warfarin, DOACs): narrow therapeutic index, high-consequence errors
- Insulin: dosing complexity, hypoglycemia risk
- Opioids: overdose risk, drug interactions
- Immunosuppressants: narrow therapeutic index, infection risk
- Chemotherapy: complex regimens, severe toxicity
- Cardiovascular drugs: hemodynamic effects, drug interactions

**Technology-Assisted Reconciliation:**
- Prescription Drug Monitoring Programs (PDMPs)
- Pharmacy claims data integration in EHR
- Patient medication list apps synced with EHR
- Barcode medication administration (inpatient)
- Clinical decision support for drug interactions

### Shared Decision-Making: Evidence and Policy

**PCORI (Patient-Centered Outcomes Research Institute):**
- Federal funding for patient-centered comparative effectiveness research
- Decision aid development and dissemination
- Patient engagement in research design
- Emphasis on outcomes that matter to patients

**Implementation Challenges:**
- Time constraints in clinical encounters
- Provider training in SDM techniques
- Patient readiness and health literacy barriers
- Cultural factors affecting decision-making preferences
- Lack of decision aids for all clinical scenarios
- Measurement challenges: How to assess if SDM occurred

**Decision Quality:**
- Informed: Patient understands options, benefits, and risks
- Aligned: Decision reflects patient values and preferences
- Enacted: Patient follows through on the decision
- Measurement tools: CollaboRATE, SDM-Q-9, OPTION scale

**CMS and Shared Decision-Making:**
- CMS Shared Decision Making Model (2012-2017)
- Certain procedures require documented SDM (e.g., lung cancer screening)
- Value-based payment models increasingly incorporate patient experience and SDM
- Joint Commission standards address informed consent

### Patient Activation and Engagement

**Patient Activation Measure (PAM):**
- 13-item survey measuring patient's knowledge, skill, and confidence for self-management
- Four activation levels:
  1. Disengaged and overwhelmed
  2. Becoming aware, but still struggling
  3. Taking action and gaining control
  4. Maintaining behaviors and pushing further
- Higher PAM scores associated with: better adherence, better outcomes, lower costs
- Tailored interventions based on activation level improve outcomes

**Motivational Interviewing in Patient Engagement:**
- Collaborative, goal-oriented communication style
- Explores and resolves ambivalence about behavior change
- OARS skills: Open questions, Affirmations, Reflections, Summaries
- Proven effective for: medication adherence, lifestyle change, chronic disease management, substance use
- Brief motivational interventions effective in primary care settings

### Visit Preparation in Special Contexts

**Advance Care Planning:**
- Preparation for conversations about goals of care, advance directives
- Tools: Five Wishes, POLST, conversation guides
- Documentation in EHR and portable format
- Engage healthcare proxy/surrogate in discussion
- Revisit regularly (not one-time conversation)

**Pre-Operative Preparation:**
- Enhanced Recovery After Surgery (ERAS) protocols include patient preparation
- Pre-operative education reduces anxiety and improves recovery
- Teach-back for post-operative self-care instructions
- Pre-operative medication management (which to continue, which to hold)
- Informed consent verification with teach-back

**Mental Health Visits:**
- Prepare a mood journal or symptom tracker
- List current stressors and coping strategies
- Medication side effects and adherence
- Safety planning for crisis situations
- Goals for therapy
- Consider PHQ-9, GAD-7 self-assessment before visit

### Health Information Technology and Visit Preparation

**Patient Portals and OpenNotes:**
- OpenNotes initiative: 80+ million patients now have access to clinical notes
- Research shows: Patients who read notes feel more in control, better remember care plans, improve adherence
- Safety benefit: Patients can identify errors in their records
- Equity concern: Portal adoption lower among older adults, low-income, LEP populations

**Pre-Visit Digital Tools:**
- Electronic patient-reported outcomes (ePROs) collected before visit
- Symptom checkers and triage tools
- Pre-visit questionnaires integrated into EHR
- Digital health coaching for visit preparation
- Wearable device data review before visit (blood pressure trends, glucose, activity)

**After-Visit Summaries:**
- CMS Meaningful Use/Promoting Interoperability requires after-visit summaries
- Should include: diagnosis, medications, instructions, follow-up plans
- Health literacy-appropriate formatting
- Available through patient portal
- Patient should review and verify accuracy`,
      keyTerms: [
        { term: 'PAM (Patient Activation Measure)', definition: 'A validated 13-item survey measuring patients\' knowledge, skill, and confidence for managing their health and healthcare' },
        { term: 'NPSG (National Patient Safety Goal)', definition: 'Joint Commission safety goals that include medication reconciliation requirements across transitions of care' },
        { term: 'CollaboRATE', definition: 'A brief patient-reported measure assessing the degree of shared decision-making in a clinical encounter' },
        { term: 'OpenNotes', definition: 'Movement to make clinical notes available to patients through their health records, with evidence of improved adherence and safety' },
        { term: 'ERAS (Enhanced Recovery After Surgery)', definition: 'Evidence-based perioperative care protocols that include patient education and preparation as core components' },
        { term: 'ePRO (electronic Patient-Reported Outcome)', definition: 'Digital collection of patient symptom reports and functional status before or between visits to inform clinical decision-making' },
      ],
      clinicalNotes: `Advanced clinical and systems considerations:

1. **Health literacy universal precautions**: Implement organizational-level health literacy strategies rather than relying on individual patient screening. The AHRQ toolkit provides a systematic approach to transforming practice-level communication.

2. **Teach-back as quality metric**: Track teach-back utilization rates as a process quality measure. Integrate teach-back prompts into EHR documentation templates and after-visit summary workflows.

3. **Medication reconciliation systems**: Invest in technology-assisted medication reconciliation that pulls from pharmacy claims data, PDMP, and patient-reported lists. Designate specific team members (pharmacists, medication reconciliation specialists) for high-risk patients.

4. **Shared decision-making infrastructure**: Stock decision aids for common clinical decisions in your practice. Train all providers in SDM techniques. Measure decision quality, not just patient satisfaction.

5. **Patient activation**: Consider implementing the PAM in your practice. Tailor patient engagement strategies to activation level. Low-activation patients need more support and simpler initial goals; high-activation patients benefit from collaborative goal-setting.

6. **Visit preparation workflows**: Implement pre-visit planning protocols that include: automated appointment reminders, pre-visit questionnaires, pre-visit lab orders, and agenda-setting at visit start. These reduce wasted visit time and improve encounter quality.`,
      patientCounselingPoints: [
        'Patient activation research shows that patients who take an active role in their healthcare have measurably better outcomes - visit preparation is a concrete way to increase your activation',
        'OpenNotes allows you to read your doctor\'s notes after visits - review them to verify accuracy and reinforce what was discussed',
        'Pre-visit questionnaires save valuable face-to-face time - complete them honestly and thoroughly before your appointment',
        'For major treatment decisions, ask if a decision aid is available - these evidence-based tools help you think through options',
        'Medication reconciliation at every visit prevents drug interactions and errors - be thorough and honest about everything you take',
        'After-visit summaries are your right under federal regulations - review them and contact your provider if anything seems incorrect',
      ],
    },
    5: {
      level: 5,
      summary: 'Medical visit preparation represents a critical intervention point in the patient-provider communication continuum, with implications spanning patient safety (medication reconciliation, teach-back), health equity (health literacy, language access), clinical quality (shared decision-making, patient activation), and health system efficiency (visit optimization, care coordination). Expert-level analysis integrates communication science, implementation science, behavioral economics, and health systems engineering to develop evidence-based frameworks for maximizing the clinical value of each patient encounter.',
      explanation: `## Medical Visit Preparation: Expert-Level Analysis

### Theoretical Foundations

**Communication Science in Healthcare:**
- Shannon-Weaver model adapted for clinical communication: encoding (provider), channel (verbal/written), decoding (patient comprehension), feedback (teach-back)
- Health communication theory: Extended Parallel Process Model, Social Cognitive Theory, Theory of Planned Behavior
- Cognitive load theory: Patient capacity to process medical information is limited by working memory constraints, anxiety, illness, and environmental factors
- Dual-process theory: Patients make health decisions using both System 1 (intuitive, fast) and System 2 (deliberate, analytical) processing

**Information Processing in Clinical Encounters:**
- Average patient retains 40-80% of information provided during medical visits
- Retention decreases with: more information, higher complexity, anxiety, pain, low health literacy
- Primacy and recency effects: Patients remember first and last items best
- Chunking: Grouping information into 3-5 categories improves retention
- Multimedia learning: Combining verbal with visual improves comprehension (Mayer's Cognitive Theory of Multimedia Learning)

### Medication Safety: Systems Engineering

**Swiss Cheese Model Applied to Medication Reconciliation:**
- Multiple defense layers: Patient self-report, pharmacy records, PDMP, EHR, clinical pharmacist review
- Each layer has "holes" (limitations)
- Errors occur when holes align across layers
- Patient preparation (accurate medication list) represents a critical defense layer
- Systems approach: Multiple redundant checks, not reliance on any single source

**High-Reliability Organization (HRO) Principles:**
- Preoccupation with failure: Expect medication errors and build safeguards
- Reluctance to simplify: Recognize complexity of medication management
- Sensitivity to operations: Real-time awareness of medication-related risks
- Commitment to resilience: Recover quickly from medication errors
- Deference to expertise: Involve pharmacists, medication reconciliation specialists

**Transitions of Care: Critical Vulnerability:**
- Hospital discharge: 23-29% of patients experience medication discrepancies
- ED to primary care: Significant loss of medication change information
- Specialist to PCP: Medication additions may not be communicated
- Interventions: Pharmacist-led reconciliation, standardized transfer communication, patient medication cards

### Health Literacy: Research Frontiers

**Organizational Health Literacy (Healthy People 2030):**
- Definition: The degree to which organizations equitably enable individuals to find, understand, and use information to make health decisions
- Shift from individual deficit model to organizational responsibility model
- Measurement: Health Literacy Environment of Hospitals and Health Centers (HLEHHC)
- Framework: Building health literate organizations requires leadership commitment, workforce training, environmental design, and patient engagement

**Digital Health Literacy:**
- Emerging construct: Ability to use digital tools for health management
- Patient portal adoption disparities: Age, income, education, language, digital access
- Health equity implications: Digital health interventions may widen disparities if not designed for low digital literacy
- Design principles: User-centered design, co-design with patients, multilingual interfaces, accessibility standards

**Numeracy in Healthcare:**
- Health numeracy: Understanding of quantitative health information (risk, dosing, lab values)
- Lower prevalence than health literacy proficiency
- Critical for: Medication dosing, risk communication, lab result interpretation, insurance benefit understanding
- Communication strategies: Absolute vs. relative risk, icon arrays, plain language risk descriptions

### Teach-Back: Implementation Science Framework

**Consolidated Framework for Implementation Research (CFIR) Applied to Teach-Back:**

| CFIR Domain | Facilitators | Barriers |
|-------------|-------------|---------|
| Intervention characteristics | Simple technique, strong evidence | Perceived time burden |
| Outer setting | Accreditation standards, CMS requirements | No specific reimbursement incentive |
| Inner setting | Leadership support, team culture | Competing priorities, workflow integration |
| Individuals | Champion clinicians, patient feedback | Provider training gaps, habit inertia |
| Process | Protocol standardization, EHR integration | Sustainability, monitoring burden |

**Dose-Response Relationship:**
- Single teach-back episode: Moderate comprehension improvement
- Repeated teach-back (multiple topics within encounter): Greater improvement
- Teach-back across encounters (longitudinal): Best outcomes for chronic disease management
- Optimal dose: Teach-back for each new concept or instruction (not just summary at end)

**Teach-Back Adaptations:**
- Written teach-back: Patient writes down key instructions
- Visual teach-back: Patient demonstrates (e.g., inhaler technique, wound care)
- Digital teach-back: Patient completes post-visit quiz through patient portal
- Family teach-back: Caregiver confirms understanding alongside patient

### Shared Decision-Making: Behavioral Economics

**Choice Architecture in Healthcare:**
- Framing effects: How options are presented affects choices (gain vs. loss framing)
- Default effects: Pre-selected options are chosen more often (organ donation, advance directives)
- Anchoring: First piece of information disproportionately influences subsequent judgments
- Decoy effect: Addition of a dominated option shifts choice toward target option
- Implications: Providers must be aware of how they present options and potential for unconscious bias

**Nudge Theory in Patient Engagement:**
- Appointment reminders (default to attend)
- Pre-visit questionnaire completion (default workflow)
- Decision aid distribution (automatic for qualifying decisions)
- Medication adherence tools (default to auto-refill)
- Ethical considerations: Transparency, patient autonomy, libertarian paternalism

**Decisional Conflict and Regret:**
- Decisional Conflict Scale (DCS): Measures uncertainty about treatment choices
- Decision regret: Post-decision dissatisfaction associated with inadequate SDM
- Factors reducing regret: Adequate information, aligned with values, involvement in decision
- SDM reduces decisional conflict by 20-40% compared to usual care (meta-analysis)

### Patient-Reported Outcomes and Visit Preparation

**PROMs and PREMs:**
- Patient-Reported Outcome Measures (PROMs): Symptoms, function, quality of life
- Patient-Reported Experience Measures (PREMs): Care process, communication, respect
- Pre-visit PROM collection: enables efficient visit focus and trend monitoring
- Examples: PHQ-9 (depression), GAD-7 (anxiety), PROMIS (multiple domains), KOOS (knee function)
- CMS increasing PROM integration in value-based payment programs

**Electronic Clinical Outcome Assessments (eCOA):**
- Digital collection of PROMs before, during, and between visits
- Remote monitoring integration (blood pressure, glucose, weight, activity)
- Adaptive questionnaires (computer-adaptive testing: CAT)
- Population health monitoring dashboards
- Research evidence: Pre-visit ePRO collection improves visit efficiency by 15-25%

### Visit Optimization: Operations Research

**Queuing Theory and Visit Scheduling:**
- Appointment scheduling as queuing problem: arrival rate, service time, variability
- Open access scheduling: Same-day appointments reduce no-shows
- Pre-visit planning reduces same-day workload and improves throughput
- Team-based care: MA/nurse pre-visit protocol, provider visit, team follow-up

**Lean Healthcare Applied to Visits:**
- Value stream mapping: Identify waste in visit workflow
- Patient wait time: Non-value-added time from patient perspective
- Preparation reduces in-visit time needed for information gathering
- Standard work: Consistent visit preparation protocols across team

**Time Motion Studies:**
- Average primary care visit time allocation:
  - Medical history/medication review: 4-6 minutes
  - Physical examination: 3-5 minutes
  - Counseling/education: 3-5 minutes
  - Documentation: 4-8 minutes (often after visit)
  - Total: 15-22 minutes face-to-face
- Pre-visit preparation reclaims 3-5 minutes of face-to-face time for clinical discussion

### Health Systems Integration

**Interoperability and Visit Preparation:**
- FHIR (Fast Healthcare Interoperability Resources) enabling patient data access
- SMART on FHIR apps for patient preparation tools
- National Patient Identifier debates: Impact on care coordination
- Health Information Exchange (HIE): Access to records across systems
- Patient-mediated data exchange (patient as data courier)

**Population Health and Proactive Outreach:**
- Risk stratification to identify patients needing intensive visit preparation
- Care management programs for high-risk patients
- Pre-visit outreach for overdue screenings and preventive care
- Panel management protocols: Proactive scheduling based on clinical needs
- Community health workers for visit preparation support

### Future Directions

**AI-Assisted Visit Preparation:**
- Natural Language Processing (NLP) to summarize patient history from EHR
- AI-generated pre-visit agendas based on due screenings, medication reviews, lab results
- Chatbot-based symptom assessment and question generation
- Machine learning for appointment type optimization and scheduling
- Voice-enabled documentation reducing provider documentation burden

**Precision Communication:**
- Tailoring communication strategy to individual patient characteristics
- Health literacy level, activation level, cultural context, cognitive status
- Dynamic adaptation during the encounter based on verbal and nonverbal cues
- Technology-enabled personalization (reading level adjustment, language selection)

**Value-Based Visit Design:**
- Aligning visit preparation with value-based quality metrics
- Pre-visit gap closure (screenings, vaccinations, medication reconciliation)
- Post-visit follow-up automation based on visit outcomes
- Team-based preparation and follow-up to maximize provider visit time for SDM and clinical reasoning`,
      keyTerms: [
        { term: 'cognitive load theory', definition: 'Framework describing the limited capacity of working memory to process information, with direct implications for how clinical information should be presented to patients' },
        { term: 'CFIR (Consolidated Framework for Implementation Research)', definition: 'A meta-theoretical framework comprising five domains used to guide systematic assessment of implementation context and barriers' },
        { term: 'HRO (High-Reliability Organization)', definition: 'Organizations that operate in complex, high-hazard domains for extended periods without serious accidents, applicable to healthcare safety culture' },
        { term: 'FHIR (Fast Healthcare Interoperability Resources)', definition: 'HL7 standard for electronic exchange of healthcare information, enabling patient-facing applications and clinical data interoperability' },
        { term: 'choice architecture', definition: 'The design of environments in which people make decisions, including how options are presented, with implications for informed consent and shared decision-making' },
        { term: 'PROMs (Patient-Reported Outcome Measures)', definition: 'Standardized questionnaires completed by patients to measure health status, symptoms, and quality of life directly from the patient perspective' },
      ],
      clinicalNotes: `Expert-level systems and research considerations:

1. **Health literacy as systems problem**: Move beyond individual assessment to organizational transformation. Implement the NAM 10 Attributes of Health Literate Organizations as a strategic framework. Measure organizational health literacy with validated environmental assessments.

2. **Teach-back implementation science**: Use CFIR to identify and address implementation barriers. Designate champions, integrate teach-back into EHR documentation workflows, and monitor utilization as a process quality metric. Aim for teach-back at every information exchange point, not just visit summary.

3. **Behavioral economics in SDM**: Be aware of how choice architecture influences patient decisions. Present options in balanced format, use absolute risk rather than relative risk, and provide decision aids for standardized options presentation. Train providers to recognize and mitigate framing bias.

4. **Medication reconciliation as safety system**: Apply Swiss Cheese Model thinking: no single data source is sufficient. Build redundant checks using patient self-report, pharmacy data, PDMP, EHR medication list, and clinical pharmacist review. Target high-risk transitions and polypharmacy patients for intensive reconciliation.

5. **AI and precision communication**: Evaluate emerging AI tools for pre-visit preparation, symptom assessment, and communication personalization. Establish clinical governance for AI tools that interact with patients. Ensure equity in AI tool design and deployment.

6. **Visit preparation ROI**: Frame visit preparation investment in value-based payment terms: reduced unnecessary utilization, improved chronic disease metrics, reduced readmissions, improved patient experience scores. Build the business case for dedicated pre-visit planning staff and technology.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'ahrq-health-literacy-toolkit',
      type: 'guideline',
      title: 'AHRQ Health Literacy Universal Precautions Toolkit, 2nd Edition',
      source: 'Agency for Healthcare Research and Quality',
      url: 'https://www.ahrq.gov/health-literacy/improve/precautions/toolkit.html',
    },
    {
      id: 'ihi-teach-back',
      type: 'website',
      title: 'Always Use Teach Back!',
      source: 'Institute for Healthcare Improvement (IHI)',
      url: 'http://www.teachbacktraining.org/',
    },
    {
      id: 'nam-health-literate-orgs',
      type: 'article',
      title: 'Ten Attributes of Health Literate Health Care Organizations',
      authors: ['Brach, C.', 'Keller, D.', 'Hernandez, L.M.', 'et al.'],
      source: 'National Academy of Medicine (formerly IOM)',
      url: 'https://nam.edu/perspectives-2012-ten-attributes-of-health-literate-health-care-organizations/',
    },
  ],

  crossReferences: [
    { targetId: 'topic-language-services', targetType: 'topic', relationship: 'related', label: 'Language Services in Healthcare' },
    { targetId: 'topic-insurance-basics', targetType: 'topic', relationship: 'related', label: 'Health Insurance Basics' },
    { targetId: 'topic-community-health-centers', targetType: 'topic', relationship: 'related', label: 'Community Health Centers (FQHCs)' },
  ],

  tags: {
    systems: ['healthcare-navigation'],
    topics: ['visit preparation', 'health literacy', 'teach-back', 'shared decision-making', 'medication reconciliation', 'patient engagement'],
    keywords: ['OLDCARTS', 'teach-back', 'health literacy', 'medication list', 'patient activation', 'questions to ask doctor'],
    clinicalRelevance: 'high',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default preparingForVisitsContent;
