/**
 * Doctor-Patient Communication
 *
 * Shared decision-making, motivational interviewing basics, breaking bad news
 * (SPIKES protocol), teach-back method, and cultural competence in healthcare.
 */

import { EducationalContent } from '../types';

export const doctorPatientCommunication: EducationalContent = {
  id: 'concept-doctor-patient-communication',
  type: 'concept',
  name: 'Doctor-Patient Communication',
  alternateNames: ['Clinical Communication Skills', 'Therapeutic Communication'],

  levels: {
    1: {
      level: 1,
      summary: 'Good communication between you and your doctor helps you get better care, understand your treatment, and feel respected.',
      explanation: `Talking with your doctor should feel like a conversation. You and your doctor are a team.

**Making Decisions Together**
Your doctor should not just tell you what to do. Instead, you decide together:
- The doctor explains your options
- You share what matters to you
- Together you pick what is best

**When the Doctor Asks About Habits**
Doctors ask about smoking, exercise, or diet to help you — not to judge. They can help you make a small, realistic plan.

**Hearing Difficult News**
A good doctor will sit down, speak clearly and gently, give you time to react, and answer your questions.

**Checking Understanding**
Your doctor may ask you to explain things back in your own words. This is called "teach-back." It helps the doctor make sure the explanation was clear.

**Everyone Deserves Respect**
- You can ask for an interpreter if you need one
- You can share religious or cultural needs
- Your doctor should listen without judging`,
      keyTerms: [
        { term: 'shared decision-making', definition: 'When you and your doctor decide together what treatment is best' },
        { term: 'teach-back', definition: 'When the doctor asks you to repeat instructions in your own words' },
        { term: 'interpreter', definition: 'A person who translates what the doctor says into your language' },
      ],
      analogies: [
        'Shared decision-making is like planning a trip with a travel agent — they know the options, but you choose the destination.',
        'Teach-back is like repeating directions out loud to make sure you got them right.',
      ],
      examples: [
        'A doctor says, "We found something on your X-ray. Let me explain what it means and what we can do."',
        'A nurse asks, "Can you show me how you will use your inhaler at home?"',
      ],
      patientCounselingPoints: [
        'You have the right to ask questions until you understand.',
        'You can ask for a family member to be present during important conversations.',
        'If you feel rushed, say: "I need a little more time to understand this."',
      ],
    },

    2: {
      level: 2,
      summary: 'Effective doctor-patient communication relies on shared decision-making, motivational interviewing, structured delivery of difficult news, teach-back, and culturally sensitive care.',
      explanation: `Strong communication improves outcomes, reduces errors, and increases satisfaction.

**Shared Decision-Making (SDM)**
*Three Steps:*
1. **Choice talk**: The provider says there are options
2. **Option talk**: Details about each option
3. **Decision talk**: Patient preferences guide the final choice

**Motivational Interviewing (MI) — OARS**
A conversation style that helps people find their own motivation to change:
- **Open questions**: "What concerns do you have about your weight?"
- **Affirmations**: "It took courage to come in today."
- **Reflections**: "It sounds like you want to quit smoking but worry about stress."
- **Summaries**: "So you would like to start walking three times a week."

MI avoids confrontation — the provider helps the patient explore their own reasons for change.

**Breaking Bad News — SPIKES Protocol**
| Step | Action |
|---|---|
| **S**etting | Private room, sit down, no interruptions |
| **P**erception | Ask what the patient already knows |
| **I**nvitation | Ask how much detail the patient wants |
| **K**nowledge | Share the news clearly and simply |
| **E**motions | Acknowledge and respond to feelings |
| **S**ummary | Plan next steps together |

**Teach-Back Method**
1. Explain in plain language
2. Ask: "Can you tell me in your own words?"
3. If the patient struggles, re-explain differently
4. Repeat until understanding is confirmed

*Teach-back tests the explanation, not the patient.*

**Cultural Competence**
- Use professional interpreters, not family members
- Ask about cultural or religious care preferences
- Use the patient's preferred name and pronouns
- Avoid assumptions based on appearance`,
      keyTerms: [
        { term: 'OARS', definition: 'Open questions, Affirmations, Reflections, Summaries — core motivational interviewing skills' },
        { term: 'SPIKES protocol', definition: 'Six-step framework for breaking bad news: Setting, Perception, Invitation, Knowledge, Emotions, Summary' },
        { term: 'decision aid', definition: 'A tool that helps patients understand options and make informed choices' },
        { term: 'cultural competence', definition: 'Ability to provide care that respects diverse cultural backgrounds and practices' },
        { term: 'motivational interviewing', definition: 'A counseling approach helping people find their own motivation for positive change' },
      ],
      analogies: [
        'MI is like being a hiking guide — you walk alongside the person rather than pushing from behind.',
        'SPIKES is like a pilot\'s landing checklist — each step ensures nothing important is missed.',
      ],
    },

    3: {
      level: 3,
      summary: 'Clinical communication integrates SDM frameworks, MI theory, structured bad news delivery, teach-back methodology, and culturally responsive care within patient-centered models.',
      explanation: `## Evidence-Based Clinical Communication

### Shared Decision-Making
**Three-Talk Model (Elwyn et al.):** Team talk (partnership), Option talk (evidence-based options with decision aids), Decision talk (elicit preferences).

**When SDM matters most:** preference-sensitive decisions, treatments with significant trade-offs, chronic disease management, end-of-life care. **Barriers:** time pressure, health literacy gaps, power differentials, insufficient decision aid availability.

### Motivational Interviewing — Deeper Framework
**Spirit of MI:** Partnership, Acceptance (autonomy, empathy, affirmation, worth), Compassion, Evocation.

**Change talk vs. sustain talk:** Change talk favors change ("I need to exercise more"); sustain talk favors the status quo. MI reinforces change talk and gently explores sustain talk.

**Readiness ruler:** "On a scale of 0–10, how important is it to [change]?" Follow-up: "Why a 5 and not a 2?" — elicits the patient's own reasons.

### SPIKES in Depth
- **Setting**: privacy, support person, eye level, 15–20 min minimum
- **Perception**: "What have you been told so far?"
- **Invitation**: "Some people want all details; others prefer the big picture."
- **Knowledge**: warning shot first, small chunks, no jargon
- **Emotions**: name and validate; allow silence
- **Summary**: key points, follow-up plan, contact information

### Teach-Back Implementation
Reduces 30-day readmissions, improves adherence, reduces adverse events. Recommended by AHRQ, IHI, Joint Commission. Extensions: **show-back** (demonstrate a skill), **chunk-and-check** (verify incrementally), written reinforcement.

### Cultural Competence
**LEARN Model:** Listen, Explain, Acknowledge differences, Recommend, Negotiate.

**Kleinman's Explanatory Model** (key questions): What caused this? Why now? What does the sickness do? What treatment do you expect? What do you fear most? These uncover health beliefs affecting adherence.`,
      keyTerms: [
        { term: 'Three-Talk Model', definition: 'Elwyn et al.\'s SDM framework: team talk, option talk, decision talk' },
        { term: 'change talk', definition: 'Patient statements favoring behavior change; a target in MI' },
        { term: 'sustain talk', definition: 'Patient statements favoring the status quo; explored without confrontation in MI' },
        { term: 'LEARN model', definition: 'Cross-cultural communication: Listen, Explain, Acknowledge, Recommend, Negotiate' },
        { term: 'explanatory model', definition: 'Kleinman\'s framework for understanding patient beliefs about illness and treatment' },
        { term: 'show-back', definition: 'Extension of teach-back where the patient physically demonstrates a skill' },
      ],
      clinicalNotes: 'Physician empathy during bad news delivery correlates with reduced anxiety and improved information retention. Average oncology bad news conversations last 3–6 minutes, well below the recommended 15–20.',
    },

    4: {
      level: 4,
      summary: 'Advanced clinical communication encompasses validated SDM outcome measures, MI fidelity coding, specialty-adapted SPIKES protocols, teach-back implementation science, and structural competency.',
      explanation: `## Advanced Clinical Communication

### SDM — Measurement
**Validated tools:** OPTION scale (12-item observer-rated), CollaboRATE (3-item patient-reported), SDM-Q-9, Decision Conflict Scale. NICE mandates SDM; CMS includes SDM in value-based payment. **IPDAS** standards: balanced options, outcome probabilities, values clarification, patient input in development.

### MI — Fidelity and Application
**MITI 4.2** measures technical (cultivating change talk, softening sustain talk) and relational (partnership, empathy) components. Strongest evidence: substance use (Project MATCH), HIV adherence, diabetes self-management, smoking cessation.

**Advanced strategies:** developing discrepancy between behavior and values, rolling with resistance, decisional balance, confidence/importance rulers with strategic follow-up.

### SPIKES — Specialty Adaptations
- **Oncology**: prognostic uncertainty as ranges, early goals-of-care, existential distress screening
- **Pediatrics**: age-appropriate disclosure, parental coping, developmental stage
- **Emergency**: compressed timeline, surrogate identification, death notification (GRIEV_ING mnemonic)
- **Psychiatry**: capacity integration, risk communication, therapeutic alliance preservation

### Teach-Back — Implementation Science
Staff training (4–8 hours), EHR documentation templates, quality metrics tracking, patient experience correlation. Challenges addressed: time constraints (focus on high-risk info), embarrassment (frame as checking your explanation), language barriers (professional interpreters), cognitive impairment (include caregivers).

### Cultural Humility and Structural Competency
**Cultural humility** (Tervalon & Murray-Garcia, 1998): lifelong learning, power imbalance recognition, institutional accountability. **Structural competency** (Metzl & Hansen): how institutions and policies create inequities. IAT research shows implicit biases affect communication patterns; structured protocols and diverse teams help mitigate this.`,
      keyTerms: [
        { term: 'OPTION scale', definition: 'Validated 12-item observer-rated instrument measuring provider SDM behaviors' },
        { term: 'MITI 4.2', definition: 'Motivational Interviewing Treatment Integrity coding system — the standard MI fidelity measure' },
        { term: 'IPDAS', definition: 'International Patient Decision Aids Standards — criteria for developing decision aids' },
        { term: 'structural competency', definition: 'Framework recognizing how institutional structures and policies shape health outcomes' },
        { term: 'cultural humility', definition: 'Orientation emphasizing lifelong self-reflection, power awareness, and institutional accountability' },
        { term: 'GRIEV_ING', definition: 'Death notification mnemonic: Gather, Resources, Identify, Educate, Verify, Inquiry, Nuts and bolts, Give' },
      ],
      clinicalNotes: 'MITI 4.2 requires trained coders, used primarily in research and training. SDM measurement is increasingly required for quality reporting in value-based care.',
    },

    5: {
      level: 5,
      summary: 'Expert clinical communication integrates communication science theory, validated fidelity measures, outcomes research, implementation frameworks, and critical analysis of power in medical discourse.',
      explanation: `## Expert Clinical Communication

### Theoretical Foundations
- **RIAS** (Roter Interaction Analysis System): quantitative coding of task-focused vs. socioemotional exchanges
- **Street's Ecological Model**: outcomes mediated by participation, communication style, context
- **Mishler's Voices Framework**: tension between "voice of medicine" and "voice of the lifeworld"

### SDM — Research Frontiers
Cochrane reviews (Stacey et al.): decision aids improve knowledge (high-quality evidence), reduce decisional conflict, increase values-choice congruence. **Do NOT** consistently improve clinical outcomes. Ottawa Decision Support Framework: needs assessment, intervention design, decision quality evaluation. Unresolved: does SDM reduce or widen health disparities?

### MI — Meta-Analytic Evidence
| Domain | Effect Size | Evidence |
|---|---|---|
| Substance use | Small-moderate | High (multiple RCTs) |
| Tobacco cessation | Small | Moderate |
| Diet/exercise | Small | Moderate |
| Medication adherence | Small | Low-moderate |

Change talk frequency likely mediates outcomes (MISC sequential coding). MI + CBT, MI + SDM, and brief MI (15–20 min, primary care) show promise.

### SPIKES Alternatives
- **ABCDE**: Advanced communication, Build relationship, Communicate, Deal with reactions, Encourage emotions
- **COMFORT**: Communication, Orientation, Mindfulness, Family, Openings, Relating, Team
- **Serious Illness Conversation Guide** (Ariadne Labs): Understanding, Preferences, Prognosis, Goals, Fears, Function, Trade-offs, Family

### Teach-Back Evidence
Consistent knowledge improvement, modest self-management gains, reduced heart failure readmissions. ACGME milestones include communication competencies assessed via OSCEs.

### Cultural Humility — Advanced
**Epistemic injustice**: systematic dismissal of patient testimony based on social identity. **Narrative medicine** as counter-practice. Language-concordant care improves outcomes; professional interpreters reduce adverse events vs. ad hoc. **Disability communication**: Universal Design, AAC devices, supported decision-making. Foucauldian discourse analysis reveals how clinical communication reproduces power asymmetries.`,
      keyTerms: [
        { term: 'RIAS', definition: 'Roter Interaction Analysis System — quantitative method coding medical dialogue into task-focused and socioemotional categories', pronunciation: 'REE-ahs' },
        { term: 'epistemic injustice', definition: 'Systematic dismissal of a person\'s testimony based on social identity (race, gender, disability)' },
        { term: 'Serious Illness Conversation Guide', definition: 'Structured goals-of-care communication framework from Ariadne Labs' },
        { term: 'Patient Activation Measure', definition: 'Validated instrument measuring patient knowledge, skill, and confidence in self-management', relatedTerms: ['PAM'] },
        { term: 'narrative medicine', definition: 'Clinical practice using close reading and reflective writing to build empathy and counter epistemic injustice' },
        { term: 'language concordance', definition: 'When provider and patient share a primary language, associated with improved outcomes' },
      ],
      clinicalNotes: `Expert competencies: apply multiple SDM frameworks (Ottawa, Three-Talk, IPDAS); assess MI fidelity via MITI 4.2; adapt bad news protocols to specialty; design organizational teach-back programs; critically analyze structural communication inequity; integrate interpreter research; address epistemic injustice and implicit bias.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'elwyn-2012-sdm',
      type: 'article',
      title: 'Shared decision making: a model for clinical practice',
      authors: ['Elwyn G', 'Frosch D', 'Thomson R'],
      source: 'Journal of General Internal Medicine',
      url: 'https://doi.org/10.1007/s11606-012-2077-6',
    },
    {
      id: 'miller-rollnick-mi',
      type: 'textbook',
      title: 'Motivational Interviewing: Helping People Change (3rd Ed.)',
      authors: ['Miller WR', 'Rollnick S'],
      source: 'Guilford Press',
    },
    {
      id: 'baile-2000-spikes',
      type: 'article',
      title: 'SPIKES — A six-step protocol for delivering bad news',
      authors: ['Baile WF', 'Buckman R', 'Lenzi R'],
      source: 'The Oncologist',
      url: 'https://doi.org/10.1634/theoncologist.5-4-302',
    },
    {
      id: 'tervalon-1998-cultural-humility',
      type: 'article',
      title: 'Cultural humility versus cultural competence: a critical distinction',
      authors: ['Tervalon M', 'Murray-Garcia J'],
      source: 'Journal of Health Care for the Poor and Underserved',
    },
    {
      id: 'stacey-2017-cochrane',
      type: 'article',
      title: 'Decision aids for people facing health treatment or screening decisions',
      authors: ['Stacey D', 'Legare F', 'Lewis K'],
      source: 'Cochrane Database of Systematic Reviews',
    },
  ],

  crossReferences: [
    { targetId: 'concept-health-literacy', targetType: 'concept', relationship: 'sibling', label: 'Health Literacy' },
    { targetId: 'concept-talking-to-your-doctor', targetType: 'concept', relationship: 'related', label: 'Talking to Your Doctor' },
    { targetId: 'concept-asking-questions-effectively', targetType: 'concept', relationship: 'related', label: 'Asking Questions Effectively' },
    { targetId: 'concept-health-literacy-basics', targetType: 'concept', relationship: 'related', label: 'Health Literacy Basics' },
  ],

  tags: {
    systems: ['patient-communication'],
    topics: ['shared-decision-making', 'motivational-interviewing', 'breaking-bad-news', 'teach-back', 'cultural-competence'],
    clinicalRelevance: 'critical',
    keywords: ['SPIKES', 'motivational interviewing', 'shared decision-making', 'teach-back', 'cultural humility', 'OARS', 'structural competency'],
  },

  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default doctorPatientCommunication;
