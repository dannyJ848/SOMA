/**
 * Asking Questions Effectively
 *
 * Strategies for getting the information you need from healthcare providers.
 */

import { EducationalContent } from '../../types';

export const askingQuestionsEffectively: EducationalContent = {
  id: 'concept-asking-questions-effectively',
  type: 'concept',
  name: 'Asking Questions Effectively',
  alternateNames: ['Medical Questions', 'Patient Questions', 'Healthcare Questions'],

  levels: {
    1: {
      level: 1,
      summary: 'Asking good questions helps you understand what the doctor is telling you and what you need to do to stay healthy.',
      explanation: `Asking questions at the doctor is important! Good questions help you understand your health and what to do to feel better.

**Why Ask Questions?**
- To understand what's happening with your body
- To know how to take care of yourself
- To make sure you do the right things to get better
- Because your health matters!

**Easy Questions to Ask:**
- "What's wrong with me?"
- "What do I need to do to get better?"
- "When should I take my medicine?"
- "When should I come back?"
- "What should I do if I feel worse?"

**If You Don't Understand:**
It's totally okay to say:
- "I don't understand. Can you explain again?"
- "Can you use easier words?"
- "Can you show me what you mean?"
- "Can you write that down for me?"

**Tips for Asking Questions:**
- Write your questions down before you go
- It's okay to read from your paper
- Bring a parent or friend to help you remember
- Ask all your questions, even if you think they're silly

**Remember:**
Doctors expect you to ask questions! There are no dumb questions about your health. The more you understand, the better you can take care of yourself.`,
      keyTerms: [
        { term: 'question', definition: 'Something you ask to learn or understand something better' },
        { term: 'instructions', definition: 'Steps that tell you what to do' },
        { term: 'treatment', definition: 'What the doctor does or gives you to help you feel better' },
      ],
      analogies: [
        'Asking questions is like raising your hand in class - it helps you learn and understand better.',
        'Questions are like keys that unlock information you need to stay healthy.',
      ],
      examples: [
        'After the doctor says to take medicine, you might ask: "Should I take it with food?"',
        'If the doctor uses a big word, you can say: "What does that word mean?"',
      ],
    },
    2: {
      level: 2,
      summary: 'Effective questioning during medical visits ensures you understand your diagnosis, treatment options, and self-care instructions.',
      explanation: `Asking the right questions can transform a confusing medical visit into a clear action plan. Here's how to ask questions effectively.

**The Big Three Questions:**
Medical experts recommend these three essential questions at every visit:

1. **"What is my main problem?"**
   - Understand your diagnosis or concern

2. **"What do I need to do?"**
   - Know your next steps and treatment plan

3. **"Why is it important for me to do this?"**
   - Understand the consequences and motivation

**Questions About Your Condition:**
- What do you think is causing my symptoms?
- Is there a name for what I have?
- How serious is this?
- Is this something that will go away or is it long-term?
- Could there be other explanations?

**Questions About Tests:**
- Why do I need this test?
- What will the test tell us?
- How should I prepare?
- When will I get results?
- What happens after we get results?

**Questions About Treatment:**
- What are my treatment options?
- What are the benefits of this treatment?
- What are the risks or side effects?
- How long will I need treatment?
- What if I don't do the treatment?
- Are there alternatives?

**Questions About Medications:**
- What is this medication for?
- How and when do I take it?
- What side effects might I have?
- Can I take it with my other medications?
- What should I avoid while taking it?
- What if I miss a dose?

**Questions About Follow-Up:**
- When should I schedule a follow-up?
- What warning signs should I watch for?
- When should I call the office?
- Who should I contact with questions?

**Strategies for Better Answers:**
- Start with your most important questions
- Ask one question at a time
- Take notes or record (with permission)
- Repeat back what you heard to confirm understanding
- Ask for written materials or reliable websites`,
      keyTerms: [
        { term: 'diagnosis', definition: 'The identification of what medical condition you have', pronunciation: 'dy-ig-NOH-sis' },
        { term: 'prognosis', definition: 'The expected outcome or future course of your condition', pronunciation: 'prog-NOH-sis' },
        { term: 'side effects', definition: 'Additional effects of a medication beyond the main intended effect' },
        { term: 'treatment options', definition: 'Different ways your condition could be treated' },
      ],
      analogies: [
        'Questions are like a flashlight in a dark room - they illuminate what you need to see.',
      ],
    },
    3: {
      level: 3,
      summary: 'Strategic questioning during medical encounters enhances informed decision-making by eliciting comprehensive information about diagnosis, treatment alternatives, risk-benefit profiles, and anticipated outcomes.',
      explanation: `## The Science of Effective Medical Questioning

Research in health communication demonstrates that patients who ask questions have better understanding, adherence, and outcomes. However, studies also show most patients ask fewer than 5 questions per visit.

## Framework for Comprehensive Questioning

### BRAIN Method for Procedures and Treatments
| Letter | Question |
|--------|----------|
| **B**enefits | What are the benefits of this approach? |
| **R**isks | What are the risks and side effects? |
| **A**lternatives | What other options do I have? |
| **I**ntuition | What does my gut tell me? |
| **N**othing | What if I do nothing or wait? |

### Questions by Visit Type

**Diagnostic Visits:**
- What diagnoses are you considering?
- How confident are you in the diagnosis?
- What would change your thinking?
- What is the differential diagnosis?

**Treatment Planning:**
- What evidence supports this treatment?
- What is the expected response rate?
- How will we measure success?
- What is the timeline for improvement?

**Chronic Disease Management:**
- Are we meeting our treatment goals?
- Should we adjust the treatment plan?
- What self-monitoring should I do?
- When do I need emergency care?

**Specialist Consultations:**
- What is your specific question for this specialist?
- How will this consultation change my care?
- Will you communicate with my primary doctor?
- What follow-up will be needed?

## Understanding Test Results

### Questions About Lab Work
- What does this test measure?
- What are normal values?
- How far from normal am I?
- What factors can affect results?
- Do I need to repeat this test?

### Questions About Imaging
- What are you looking for?
- What did the images show?
- Is there anything unclear or uncertain?
- Do I need additional imaging?

## Medication-Specific Questions

**Before Starting:**
- Is generic available and equivalent?
- How long until I notice effects?
- What should I do if it doesn't work?
- Are there foods or activities to avoid?

**Ongoing Monitoring:**
- Do I need lab tests while on this medication?
- How often should levels be checked?
- What are signs of toxicity?
- When can I stop taking it?

## Navigating Uncertainty

When your doctor isn't certain:
- What is the most likely diagnosis?
- What are you most concerned about ruling out?
- What additional information would help?
- What is our plan if things don't improve?
- What is the timeframe for reassessment?

## Documentation Strategies

**Create a Question Record:**
- Write questions before the visit
- Leave space for answers
- Note follow-up questions
- Record action items

**Verify Understanding:**
Use teach-back: "Let me make sure I understand. You're saying I should..."`,
      keyTerms: [
        { term: 'differential diagnosis', definition: 'List of possible conditions that could explain the symptoms, ranked by likelihood' },
        { term: 'informed decision-making', definition: 'Making choices based on understanding options, risks, benefits, and personal values' },
        { term: 'BRAIN method', definition: 'Question framework covering Benefits, Risks, Alternatives, Intuition, and Nothing/waiting' },
        { term: 'teach-back', definition: 'Method of confirming understanding by restating information in your own words' },
        { term: 'treatment goals', definition: 'Measurable objectives for therapy such as target blood pressure or symptom reduction' },
      ],
      clinicalNotes: 'Research shows patients typically remember less than 50% of information discussed during visits. Written questions, note-taking, and teach-back significantly improve retention and adherence.',
    },
    4: {
      level: 4,
      summary: 'Advanced medical questioning incorporates understanding of evidence quality, diagnostic reasoning, risk communication principles, and system-level factors to facilitate truly informed participation in complex medical decisions.',
      explanation: `## Evidence-Informed Questioning

### Understanding Treatment Evidence

When discussing treatment options, ask about evidence quality:

**Hierarchy of Evidence:**
1. Systematic reviews/meta-analyses
2. Randomized controlled trials (RCTs)
3. Cohort studies
4. Case-control studies
5. Case series/reports
6. Expert opinion

**Key Evidence Questions:**
- What is the evidence for this treatment?
- Are there clinical trials supporting this?
- What outcomes were measured?
- How applicable is the evidence to my situation?
- What do professional guidelines recommend?

### Understanding Numbers in Medicine

**Absolute vs. Relative Risk:**
- "50% reduction in risk" sounds dramatic
- But 50% reduction from 2% to 1% is only 1% absolute difference
- Ask: "What are the actual numbers?"

**Questions About Risk:**
- What is my baseline risk without treatment?
- How much does treatment reduce my risk?
- What is the Number Needed to Treat (NNT)?
- What are the Numbers Needed to Harm (NNH)?

### Questions About Diagnostic Tests

**Test Performance:**
- How accurate is this test? (sensitivity/specificity)
- What is the false positive rate?
- What is the false negative rate?
- If positive, what's the probability I actually have the condition?

**Example Application:**
A test with 95% sensitivity and 95% specificity sounds great, but in a low-prevalence condition, most positive results may be false positives. Understanding this helps frame follow-up decisions.

## Navigating Diagnostic Uncertainty

### When Diagnosis Is Unclear

**Questions to Ask:**
- What is your working diagnosis?
- What alternative diagnoses are you considering?
- What findings support or refute each possibility?
- What is your level of confidence?
- What would a specialist add?

### Red Flag Recognition
Ask about symptoms requiring immediate attention:
- What symptoms mean I should go to the emergency room?
- What changes suggest the condition is worsening?
- What timeline should I expect for improvement?

## Complex Treatment Decisions

### Shared Decision-Making Questions

**Exploring Options:**
- Are there equally effective alternatives?
- What would you recommend for a family member?
- What do most patients in my situation choose?
- What factors should guide my decision?

**Understanding Tradeoffs:**
- If I prioritize quality of life, how does that change the recommendation?
- If I want to avoid side effects, what's my best option?
- What are the consequences of delaying treatment?

### Questions for Surgical Decisions

**Surgeon Experience:**
- How many of these procedures have you performed?
- What is your complication rate?
- What is the hospital's complication rate?
- Are there higher-volume centers available?

**Procedure Specifics:**
- What exactly will be done?
- What are the alternatives to surgery?
- What is the expected recovery timeline?
- What complications should I watch for?
- What are chances I'll need additional surgery?

## System Navigation Questions

### Insurance and Access
- Is this covered by my insurance?
- Is there a less expensive alternative?
- Are there patient assistance programs?
- What prior authorization is needed?

### Care Coordination
- Who is coordinating my care?
- How will my other doctors be informed?
- Should I bring results to my other providers?
- Is there a patient portal for communication?

## Preparing for Complex Visits

**Before Major Decisions:**
1. Research the condition (reputable sources)
2. Write prioritized questions
3. Bring an advocate
4. Request adequate appointment time
5. Consider recording (with permission)
6. Request a follow-up discussion if needed`,
      keyTerms: [
        { term: 'Number Needed to Treat (NNT)', definition: 'Number of patients who must receive treatment for one patient to benefit; lower is better' },
        { term: 'Number Needed to Harm (NNH)', definition: 'Number of patients who must receive treatment for one patient to experience harm; higher is better' },
        { term: 'sensitivity', definition: 'Ability of a test to correctly identify those with a condition (true positive rate)' },
        { term: 'specificity', definition: 'Ability of a test to correctly identify those without a condition (true negative rate)' },
        { term: 'working diagnosis', definition: 'The most likely diagnosis based on current information, which may change as more data becomes available' },
        { term: 'evidence hierarchy', definition: 'Ranking of research evidence by quality and reliability, with systematic reviews at the top' },
      ],
      clinicalNotes: 'High-value questions focus on the strength of evidence, absolute rather than relative risk, individual applicability of population data, and understanding uncertainty. Patients who understand NNT/NNH make more informed decisions about elective treatments.',
    },
    5: {
      level: 5,
      summary: 'Expert-level medical questioning integrates understanding of clinical decision-making processes, healthcare delivery systems, evidence appraisal, and patient safety principles to optimize outcomes and ensure truly informed consent in complex medical scenarios.',
      explanation: `## Advanced Question Strategies for Complex Scenarios

### Understanding Clinical Decision-Making

Physicians use two cognitive systems:
1. **System 1 (Intuitive):** Pattern recognition, heuristics
2. **System 2 (Analytical):** Deliberate reasoning, algorithms

**Questions That Prompt Analytical Thinking:**
- "What findings would make you reconsider the diagnosis?"
- "Are there any atypical features in my presentation?"
- "What diagnoses are you intentionally ruling out?"
- "If this treatment fails, what will be our next step?"

### Diagnostic Error Prevention

**Questions to Reduce Missed Diagnoses:**
- Have we considered less common causes?
- What diagnosis would I not want you to miss?
- Are my symptoms fully explained by this diagnosis?
- Should we get a second opinion on the diagnosis?

**Anchoring Bias Recognition:**
If you feel locked into one explanation:
- "I notice we keep coming back to X. Are we certain there's nothing else?"
- "My symptoms have changed. Should we reconsider the diagnosis?"

### Evidence Appraisal for Complex Decisions

**Evaluating Research Evidence:**
| Question | Why It Matters |
|----------|----------------|
| What was the study population? | Results may not apply to you |
| What outcomes were measured? | Surrogate vs. patient-important outcomes |
| How long was follow-up? | Short-term benefit may not persist |
| Who funded the study? | Potential bias |
| What were the absolute differences? | Relative risk can mislead |

**Questions About Guidelines:**
- What guidelines apply to my situation?
- How strong is the recommendation?
- When were guidelines last updated?
- Do I have factors that might change the standard approach?

### Multi-Disciplinary Decision-Making

**Tumor Boards and Case Conferences:**
- Will my case be discussed at a multi-disciplinary conference?
- What specialties will be represented?
- Can I receive a summary of recommendations?
- How do I reconcile different specialist opinions?

**Second Opinion Considerations:**
- Academic medical center vs. community
- High-volume specialty center
- Different diagnostic approach
- Fresh perspective without anchoring

### Healthcare Quality Questions

**Institutional Factors:**
- What is this hospital's experience with this procedure?
- Is this a designated center of excellence?
- What are the complication and mortality rates?
- Are outcomes publicly reported?

**Provider Factors:**
- What is your specialty training in this area?
- How often do you treat this condition?
- Are you up-to-date on current guidelines?
- Do you participate in continuing education on this topic?

### Clinical Trial Considerations

**Questions About Trial Participation:**
- Am I eligible for any clinical trials?
- What are the potential benefits of trial participation?
- What additional monitoring would I receive?
- What are the risks of experimental treatment?
- What are my rights as a research participant?
- Can I withdraw at any time?

### End-of-Life and Goals of Care Questions

**Prognosis Discussions:**
- What is my life expectancy?
- What is the best case and worst case scenario?
- What will decline first - physical or cognitive function?
- What symptoms should I expect?

**Treatment Intensity:**
- At what point do treatments stop helping?
- What are the tradeoffs between longevity and quality of life?
- What would you recommend if I prioritize comfort?
- When should we involve palliative care?

### Patient Safety Questions

**Preventing Errors:**
- Can you verify my identity and the procedure?
- Is this the correct medication, dose, and route?
- What monitoring will ensure safety?
- What are early warning signs of complications?
- Who should I contact with concerns?

**After Adverse Events:**
- What happened and why?
- Will there be a formal review?
- How will recurrence be prevented?
- What is the disclosure policy?
- What are my options if I have concerns about my care?

### Advocacy and Escalation

**When Concerns Aren't Addressed:**
- Request charge nurse or nursing supervisor
- Ask for patient advocate/ombudsman
- Request attending physician involvement
- Utilize hospital patient relations
- Know your escalation pathways

**Documentation for Complex Situations:**
- Request copies of all test results
- Keep a symptom and communication diary
- Document names of providers involved
- Retain copies of consent forms
- Note any concerns about care quality`,
      keyTerms: [
        { term: 'anchoring bias', definition: 'Cognitive tendency to rely too heavily on the first piece of information encountered, potentially missing alternative diagnoses' },
        { term: 'surrogate outcome', definition: 'Measurable substitute for a clinically meaningful outcome (e.g., cholesterol level vs. heart attack rate)' },
        { term: 'tumor board', definition: 'Multi-disciplinary conference where complex cases are discussed by specialists from different fields' },
        { term: 'center of excellence', definition: 'Healthcare facility designated for high-quality, high-volume care in a specific condition or procedure' },
        { term: 'clinical equipoise', definition: 'State of genuine uncertainty about which treatment option is superior, ethically justifying randomized trials' },
        { term: 'patient-important outcomes', definition: 'Outcomes that directly matter to patients (survival, function, symptoms) vs. surrogate measures' },
      ],
      clinicalNotes: `Expert questioning competencies:
1. Recognition of cognitive biases in clinical reasoning
2. Evidence appraisal including study quality and applicability
3. Understanding of healthcare quality metrics and system factors
4. Navigation of multi-disciplinary care and conflicting opinions
5. Goals of care and prognosis discussions
6. Patient safety awareness and escalation
7. Clinical trial literacy
8. Effective advocacy and documentation`,
    },
  },

  media: [],

  citations: [
    {
      id: 'ahrq-questions',
      type: 'website',
      title: 'Questions To Ask Your Doctor',
      source: 'Agency for Healthcare Research and Quality',
      url: 'https://www.ahrq.gov/questions/',
    },
    {
      id: 'shared-decision',
      type: 'article',
      title: 'Shared decision making in the medical encounter',
      authors: ['Charles, C.', 'Gafni, A.', 'Whelan, T.'],
      source: 'Social Science & Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'concept-talking-to-your-doctor', targetType: 'concept', relationship: 'related', label: 'How to Talk to Your Doctor' },
    { targetId: 'concept-what-informed-consent-means', targetType: 'concept', relationship: 'related', label: 'What Informed Consent Means' },
    { targetId: 'concept-health-literacy-basics', targetType: 'concept', relationship: 'related', label: 'Health Literacy Basics' },
  ],

  tags: {
    systems: ['patient-safety'],
    topics: ['communication', 'patient-advocacy', 'informed-consent', 'shared-decision-making'],
    clinicalRelevance: 'critical',
    keywords: ['medical questions', 'doctor questions', 'patient questions', 'informed decision'],
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default askingQuestionsEffectively;
