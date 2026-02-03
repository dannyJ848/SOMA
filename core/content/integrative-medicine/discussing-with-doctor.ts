/**
 * Discussing with Your Doctor - Educational Content
 *
 * Comprehensive content covering communication strategies for discussing
 * complementary and alternative therapies with healthcare providers.
 */

import { EducationalContent } from "../types";

export const discussingWithDoctor: EducationalContent = {
  id: "integrative-medicine-discussing-with-doctor",
  type: "concept",
  name: "Discussing Integrative Therapies with Your Doctor",
  alternateNames: [
    "Patient-Doctor Communication",
    "CAM Disclosure",
    "Integrative Medicine Conversations",
    "Healthcare Provider Communication",
  ],

  levels: {
    1: {
      level: 1,
      summary:
        "It is important to tell your doctor about all the treatments you use, including vitamins, herbs, and other alternative therapies. This helps keep you safe and ensures your care works well together.",
      explanation: `**Why tell your doctor?**
Many people use treatments beyond regular medicine - things like vitamins, herbs, acupuncture, or massage. Your doctor needs to know about ALL of these to take the best care of you.

**Reasons to share:**

*Safety:*
Some supplements can interact badly with your medicines. For example:
- St. John's Wort can stop birth control pills from working
- Ginkgo can cause bleeding if you take blood thinners
- High-dose vitamins can affect how your body handles surgery

*Better care:*
When your doctor knows everything you are doing for your health, they can:
- Watch for problems
- Suggest what works best together
- Help you avoid wasting money on things that do not help

*Honest relationship:*
Good healthcare depends on trust. When you share openly, your doctor can help you more.

**What to tell your doctor:**

*Make a list of:*
- All vitamins and supplements you take
- Herbs and natural remedies
- Special diets you follow
- Treatments like acupuncture, chiropractic, or massage
- Practices like yoga or meditation

*For each one, note:*
- What it is called
- How much you take
- How often you use it
- Why you started using it

**How to bring it up:**

*Be direct:*
- "I want to tell you about some other things I am doing for my health"
- "I take some supplements I should tell you about"
- "I have been seeing an acupuncturist - is that okay with my treatment?"

*Expect questions, not judgment:*
Good doctors want to work with you. They may ask questions to understand, not to criticize.

**What if you are nervous?**
Many people worry their doctor will judge them. Remember:
- Your doctor's job is to help you, not judge you
- Keeping secrets can be dangerous
- Most doctors respect patient choices
- You have a right to make decisions about your health

If your doctor dismisses your concerns without listening, you may want to find one who communicates better with you.`,
      keyTerms: [
        {
          term: "disclosure",
          definition: "Telling your doctor about all the treatments and supplements you use",
        },
        {
          term: "interaction",
          definition: "When two treatments affect each other in your body",
        },
        {
          term: "integrative medicine",
          definition: "Using both regular medicine and other healing approaches together",
        },
      ],
      analogies: [
        "Your healthcare team is like a sports team - everyone needs to know the game plan for things to work well.",
        "Not telling your doctor about supplements is like not telling your mechanic about changes you made to your car - they cannot fix problems they do not know about.",
      ],
      examples: [
        "A patient taking blood pressure medicine should tell their doctor about licorice supplements, which can raise blood pressure.",
        "Someone using both a chiropractor and a physical therapist should make sure both know about each other so the treatments work together.",
      ],
    },
    2: {
      level: 2,
      summary:
        "Effective communication about complementary therapies requires preparation, honest disclosure, and collaborative decision-making. Understanding common barriers helps patients advocate for themselves while maintaining productive healthcare relationships.",
      explanation: `**Why Disclosure Matters:**

*Clinical safety:*
- Drug-supplement interactions can be serious
- Some therapies contraindicated with certain conditions
- Pre-surgical disclosure prevents complications
- Comprehensive care requires complete information

*Care coordination:*
- Avoid duplicate or conflicting treatments
- Optimize timing of different therapies
- Identify what is actually helping
- Reduce unnecessary costs

*Research shows:*
- 30-70% of patients use some form of CAM
- Less than half tell their conventional providers
- Non-disclosure associated with adverse events
- Patients often assume doctors will not ask

**Preparing for the Conversation:**

*Gather information:*
- List all supplements (exact names, doses, frequency)
- Note all practitioners you see
- Include treatments like acupuncture, chiropractic, massage
- Record practices like meditation, special diets, yoga
- Note why you use each therapy

*Questions to consider:*
- What do I hope to achieve with this therapy?
- What evidence have I found?
- What are my concerns about conventional treatment?
- What would I like my doctor to do with this information?

*Bring documentation:*
- Product labels or photos
- Information from practitioners
- Any test results from other providers

**Starting the Conversation:**

*Opening approaches:*
- "I want to make sure you know about everything I am using for my health"
- "I have been researching some complementary approaches and wanted to discuss them"
- "I am interested in trying [specific therapy] and want your input"

*If you have been using something without telling:*
- "I should have mentioned this sooner, but I have been taking..."
- "I was nervous to bring this up, but I know it is important for my care"

*If you are considering something new:*
- "I read about [therapy] for my condition. What do you think?"
- "A friend recommended [supplement]. Is it safe with my medications?"

**Responding to Different Reactions:**

*If your doctor is supportive:*
- Share your research and reasoning
- Ask for their perspective on evidence
- Develop a monitoring plan together
- Agree on communication with other practitioners

*If your doctor is dismissive:*
- Ask specifically what concerns them
- Request evidence-based information
- Consider their expertise vs. their bias
- Decide if this is the right provider for you

*If your doctor has concerns:*
- Listen to their reasoning
- Ask about specific risks
- Discuss alternatives
- Make an informed decision together

**Overcoming Common Barriers:**

*Patient barriers:*
- Fear of judgment: Most providers are less judgmental than expected
- Assumption providers will not ask: They may not - you must volunteer
- Belief it is not relevant: Everything you take affects your health
- Forgetting to mention: Bring a list

*Provider barriers:*
- Limited time: Ask for a dedicated appointment if needed
- Limited knowledge: Ask for referrals or resources
- Dismissive attitude: Advocate for yourself respectfully

**Building an Effective Partnership:**

*Your responsibilities:*
- Be honest and complete
- Come prepared with information
- Follow up as agreed
- Report changes in what you use
- Report any side effects

*What to expect from your provider:*
- Listening without judgment
- Evidence-based guidance
- Safety monitoring
- Respect for your autonomy
- Referrals when appropriate`,
      keyTerms: [
        {
          term: "CAM",
          definition: "Complementary and Alternative Medicine - treatments used alongside or instead of conventional medicine",
        },
        {
          term: "shared decision-making",
          definition: "Process where patients and providers work together to make healthcare choices",
        },
        {
          term: "contraindication",
          definition: "A reason why a treatment should not be used",
        },
        {
          term: "informed consent",
          definition: "Understanding the benefits and risks before agreeing to treatment",
        },
      ],
      analogies: [
        "Your healthcare relationship is like a partnership - both sides need to share information openly for it to work well.",
        "Hiding supplement use from your doctor is like not telling your allergist about a new pet - you may get the wrong advice because they are missing important information.",
      ],
      examples: [
        "A patient with heart failure asks their doctor about CoQ10 after reading it might help. The doctor explains the limited evidence but agrees it is safe to try with monitoring.",
        "Someone preparing for surgery mentions they take fish oil supplements, allowing their doctor to recommend stopping two weeks before to reduce bleeding risk.",
      ],
    },
    3: {
      level: 3,
      summary:
        "Healthcare communication about integrative therapies involves navigating disclosure barriers, evidence-based counseling, and establishing collaborative care models that respect patient autonomy while ensuring safety.",
      explanation: `**Communication Science:**

*Motivational interviewing principles:*
- Open-ended questions
- Affirmations
- Reflective listening
- Summarizing
- Avoiding confrontation

*Shared decision-making model:*
- Provider shares medical knowledge
- Patient shares preferences and values
- Together evaluate options
- Patient makes informed choice
- Provider supports decision

*Health literacy considerations:*
- Assess understanding
- Use plain language
- Confirm comprehension
- Provide written information
- Consider cultural factors

**Disclosure Rates and Patterns:**

*Research findings:*
- 33-77% of adults use some CAM
- Only 23-57% disclose to physicians
- Higher disclosure with:
  - Prompted inquiry
  - Established relationship
  - Integrative medicine setting
  - Perceived provider openness

*Why patients do not disclose:*
- Provider did not ask (most common)
- Did not think it was important
- Fear of negative response
- Concern about being told to stop
- Not enough time in visit

*Consequences of non-disclosure:*
- Missed drug-herb interactions
- Delayed diagnosis (using CAM instead of effective treatment)
- Duplicate therapies
- Adverse events
- Reduced care quality

**Clinical Communication Skills:**

*Routine inquiry approach:*
- Include in medication reconciliation
- Use non-judgmental language
- Normalize the question
- Probe for specifics

*Example questions:*
- "What vitamins, supplements, or herbs do you take?"
- "Do you use any therapies besides what we prescribe?"
- "Have you tried any natural or alternative treatments?"
- "Do you see any other practitioners for health concerns?"

*When patient discloses:*

Assessment:
- What exactly are you taking/doing?
- What dose and how often?
- Why did you start?
- What effects have you noticed?
- Where do you get information?

Response:
- Thank them for sharing
- Provide evidence-based information
- Discuss safety concerns
- Acknowledge their goals
- Develop collaborative plan

**Evidence-Based Counseling:**

*Providing information:*
- Distinguish evidence levels
- Explain strength of evidence
- Address mechanism of action
- Discuss safety profile
- Consider individual factors

*When evidence supports use:*
- Affirm patient choice
- Recommend quality products
- Establish monitoring
- Coordinate with other providers

*When evidence is lacking:*
- Explain state of evidence honestly
- Assess potential harms
- Respect patient autonomy
- Agree on monitoring

*When evidence suggests harm:*
- Explain concerns clearly
- Provide specific risk information
- Offer alternatives
- Document discussion
- Respect final decision if capacity intact

**Care Coordination:**

*With CAM practitioners:*
- Establish communication pathways
- Share relevant medical information
- Clarify roles and responsibilities
- Coordinate treatment timing
- Monitor for overlap or conflict

*Documentation:*
- Include all supplements in medication list
- Note CAM practitioners
- Document discussions and decisions
- Update regularly
- Flag significant interactions

**Challenging Conversations:**

*Patient using ineffective or harmful therapy:*
- Express concern without judgment
- Provide clear evidence
- Explore underlying needs
- Offer alternatives
- Maintain relationship even if disagreement

*Patient refusing conventional treatment for CAM:*
- Understand reasoning
- Provide complete information on risks
- Document informed refusal
- Keep door open
- Schedule follow-up

*Cultural or religious practices:*
- Respect beliefs
- Find common ground
- Identify safety concerns
- Seek cultural competency resources
- Involve interpreters or cultural brokers`,
      keyTerms: [
        {
          term: "motivational interviewing",
          definition: "Counseling approach focused on exploring and resolving ambivalence to promote change",
        },
        {
          term: "health literacy",
          definition: "Capacity to obtain, process, and understand health information for decision-making",
        },
        {
          term: "medication reconciliation",
          definition: "Process of comparing all medications and supplements a patient is taking",
        },
        {
          term: "informed refusal",
          definition: "Patient's right to decline treatment after understanding risks, documented in chart",
        },
      ],
      clinicalNotes:
        "Include CAM inquiry in every medication reconciliation. Use non-judgmental phrasing. When patients disclose, thank them, assess specifics, provide evidence-based guidance, and document. For concerning practices, maintain relationship while providing clear information. Document all discussions, especially informed refusals.",
    },
    4: {
      level: 4,
      summary:
        "Advanced communication competencies for integrative medicine include cultural humility, ethical navigation of disagreements, health system integration strategies, and quality improvement approaches to disclosure and care coordination.",
      explanation: `**Advanced Communication Competencies:**

*Cultural humility framework:*
- Lifelong self-reflection
- Addressing power imbalances
- Institutional accountability
- Recognizing limitations of cultural competency
- Patient as expert in their own culture

*Trauma-informed communication:*
- Many CAM users have had negative healthcare experiences
- Avoid re-traumatization
- Offer choices and control
- Build trust through transparency
- Recognize survival strategies

*Ethical frameworks:*
- Respect for autonomy
- Beneficence and non-maleficence
- Justice in resource allocation
- Veracity in evidence presentation
- Fidelity to therapeutic relationship

**Complex Clinical Scenarios:**

*Cancer patient using alternative therapies:*
- Common situation (40-80% use CAM)
- High stakes for both parties
- Balance autonomy with safety
- Address fear and hope
- Oncology-specific resources (MSKCC About Herbs)

*Vaccine hesitancy and "natural immunity":*
- Avoid dismissiveness
- Understand underlying concerns
- Provide clear evidence
- Respect final decision
- Document discussion

*Mental health and alternative approaches:*
- Recognize treatment-seeking as positive
- Assess for delay of effective treatment
- Consider integrative approaches
- Monitor for deterioration
- Maintain therapeutic alliance

*Pediatric patients:*
- Parents making decisions for children
- Different risk-benefit calculus
- Mandatory reporting considerations
- Best interest standard
- Developmentally appropriate assent

**Ethical Navigation:**

*When to support patient choice:*
- Low risk therapy
- Adequate informed consent
- Conventional treatment not refused
- Monitoring in place
- Evidence not clearly negative

*When to advocate strongly against:*
- High risk of harm
- Foregoing effective treatment
- Vulnerable populations
- Lack of informed consent
- Exploitative practices

*Documentation for protection:*
- Clear explanation of risks provided
- Patient understanding confirmed
- Decision capacity assessed
- Alternatives discussed
- Follow-up arranged

**Health System Integration:**

*EHR optimization:*
- Supplement documentation fields
- CAM practitioner fields
- Interaction alerts
- Patient-facing portals for entry
- Integration with decision support

*Team-based care:*
- Pharmacy involvement
- RD consultation
- Integrative medicine specialists
- Social work for psychosocial aspects
- Care coordination roles

*Quality measures:*
- CAM disclosure rates
- Interaction identification
- Care coordination metrics
- Patient satisfaction
- Safety event tracking

**Provider Education:**

*Competency development:*
- Evidence-based CAM education
- Communication skills training
- Cultural humility training
- Bias recognition
- Resource familiarity

*Overcoming provider barriers:*
- Time: Structured inquiry tools
- Knowledge: Just-in-time resources
- Bias: Self-reflection and feedback
- System: Process improvement

**Research and Policy:**

*Evidence gaps:*
- Disclosure intervention effectiveness
- Optimal communication strategies
- Care coordination models
- Outcome improvement from disclosure

*Policy implications:*
- Licensure and scope of practice
- Insurance coverage
- Informed consent requirements
- Reporting obligations
- Privacy considerations

**Quality Improvement:**

*Improving disclosure:*
- Routine screening implementation
- Staff training programs
- Patient education materials
- System prompts and reminders
- Feedback mechanisms

*Measuring success:*
- Disclosure rates
- Interaction identification
- Patient experience
- Safety outcomes
- Care coordination metrics

*PDSA cycles:*
- Plan: Identify target and intervention
- Do: Pilot implementation
- Study: Measure outcomes
- Act: Spread or modify`,
      keyTerms: [
        {
          term: "cultural humility",
          definition: "Ongoing process of self-reflection and self-critique about one's own cultural biases",
        },
        {
          term: "trauma-informed care",
          definition: "Framework recognizing impact of trauma and emphasizing safety and choice",
        },
        {
          term: "PDSA cycle",
          definition: "Plan-Do-Study-Act - quality improvement methodology for testing changes",
        },
        {
          term: "clinical decision support",
          definition: "Tools providing clinicians with knowledge and patient information at point of care",
        },
      ],
      clinicalNotes:
        "Advanced competencies: cultural humility, trauma-informed approaches, ethical navigation. In complex scenarios (cancer, mental health, pediatrics), maintain therapeutic relationship while providing clear guidance. Use system-level approaches: EHR optimization, team-based care, quality improvement. Document thoroughly for both safety and legal protection.",
    },
    5: {
      level: 5,
      summary:
        "Leadership in integrative medicine communication requires expertise in system transformation, policy development, research advancement, and fostering cultural change toward truly patient-centered care that bridges conventional and complementary approaches.",
      explanation: `**System Transformation:**

*Organizational culture change:*
- Leadership commitment
- Staff education and buy-in
- Process redesign
- Metrics and accountability
- Continuous improvement

*Infrastructure development:*
- EHR capabilities for CAM documentation
- Clinical decision support for interactions
- Care coordination pathways
- Referral networks
- Quality monitoring systems

*Integrative medicine programs:*
- Evidence-based service offerings
- Credentialing and privileging
- Outcomes tracking
- Patient selection criteria
- Integration with conventional care

**Policy and Advocacy:**

*Institutional policy:*
- CAM disclosure requirements
- Documentation standards
- Care coordination protocols
- Quality and safety standards
- Education requirements

*Regional and national advocacy:*
- Scope of practice legislation
- Insurance coverage policies
- Research funding priorities
- Consumer protection
- Professional standards

*Regulatory engagement:*
- FDA supplement oversight
- FTC advertising standards
- State licensure boards
- Accreditation standards
- Professional society positions

**Research Leadership:**

*Communication research priorities:*
- Effective disclosure interventions
- Cultural adaptation of approaches
- Outcome measurement
- Implementation science
- Health equity focus

*Study design considerations:*
- Pragmatic trials for real-world settings
- Mixed methods for complex interventions
- Community-based participatory research
- Implementation-effectiveness hybrids
- Patient-centered outcomes

*Dissemination and implementation:*
- Evidence-to-practice translation
- Stakeholder engagement
- Adaptation frameworks
- Sustainability planning
- Scale-up strategies

**Workforce Development:**

*Curriculum development:*
- Medical education integration
- Continuing education programs
- Interprofessional training
- Competency assessment
- Faculty development

*Core competencies:*
- Communication skills
- Evidence appraisal
- Cultural humility
- Ethical reasoning
- Care coordination

*Certification and credentialing:*
- Board certification in integrative medicine
- Continuing education requirements
- Competency maintenance
- Quality standards

**Health Equity:**

*Disparities in CAM use and disclosure:*
- Access barriers
- Insurance coverage limitations
- Cultural factors
- Provider bias
- Language barriers

*Equity-focused solutions:*
- Community health workers
- Culturally adapted materials
- Language access
- Financial assistance
- Trust-building initiatives

*Traditional healing integration:*
- Respect for traditional practices
- Cultural brokers
- Community partnerships
- Evidence generation
- Safety considerations

**Future Directions:**

*Technology integration:*
- Patient portals for disclosure
- Decision support tools
- Telehealth for integrative care
- AI-assisted interaction checking
- Wearables and monitoring

*Care model evolution:*
- Patient-centered medical homes
- Accountable care organizations
- Value-based care incentives
- Team-based approaches
- Chronic care models

*Research evolution:*
- Precision integrative medicine
- Real-world evidence
- Patient-generated data
- Comparative effectiveness
- Implementation science

**Leadership Framework:**

*Personal practice:*
- Model effective communication
- Stay current with evidence
- Practice cultural humility
- Engage in self-reflection
- Seek feedback

*Team leadership:*
- Foster learning culture
- Develop protocols and systems
- Support staff education
- Address barriers
- Celebrate successes

*Organizational leadership:*
- Advocate for resources
- Develop policies
- Build partnerships
- Track outcomes
- Drive improvement

*Professional leadership:*
- Contribute to guidelines
- Publish and present
- Mentor next generation
- Engage in policy
- Advance the field

**Implementation Toolkit:**

*Assessment tools:*
- CAM disclosure questionnaires
- Communication competency assessment
- Cultural humility inventories
- Quality metrics dashboards

*Training resources:*
- Communication skills curricula
- Evidence-based CAM education
- Cultural competency programs
- Simulation exercises

*Decision support:*
- Interaction databases
- Evidence summaries
- Patient education materials
- Referral resources

*Quality improvement:*
- Process maps
- PDSA worksheets
- Audit tools
- Feedback mechanisms`,
      keyTerms: [
        {
          term: "implementation science",
          definition: "Study of methods to promote adoption and integration of evidence-based practices",
        },
        {
          term: "health equity",
          definition: "Attainment of highest level of health for all people through addressing systemic disparities",
        },
        {
          term: "dissemination",
          definition: "Active approach to spreading evidence-based interventions to target audiences",
        },
        {
          term: "value-based care",
          definition: "Healthcare delivery model focused on outcomes and quality rather than volume",
        },
      ],
      clinicalNotes: `Leadership summary:

System level:
- Champion EHR integration for CAM documentation
- Develop care coordination protocols
- Build quality monitoring systems
- Support workforce development

Policy engagement:
- Advocate for evidence-based standards
- Engage with regulatory bodies
- Support research funding
- Address health equity

Personal practice:
- Model excellent communication
- Stay current with evidence
- Practice cultural humility
- Mentor colleagues

Key resources:
- Academic Consortium for Integrative Medicine
- NCCIH clearinghouse
- Bravewell Collaborative frameworks
- AHRQ implementation resources`,
    },
  },

  media: [
    {
      id: "disclosure-conversation-guide",
      type: "diagram",
      filename: "disclosure_conversation_guide.svg",
      title: "CAM Disclosure Conversation Guide",
      description: "Step-by-step guide for discussing complementary therapies",
    },
    {
      id: "shared-decision-making-diagram",
      type: "diagram",
      filename: "shared_decision_making.svg",
      title: "Shared Decision-Making Model",
      description: "Framework for collaborative healthcare decisions",
    },
  ],

  citations: [
    {
      id: "nccih-talking-provider",
      type: "website",
      title: "Talking to Your Health Care Providers About Complementary Health Approaches",
      source: "National Center for Complementary and Integrative Health",
      url: "https://www.nccih.nih.gov/health/talking-to-your-health-care-providers-about-complementary-health-approaches",
    },
    {
      id: "aafp-cam-communication",
      type: "website",
      title: "Discussing Complementary and Alternative Medicine",
      source: "American Academy of Family Physicians",
      url: "https://www.aafp.org/",
    },
    {
      id: "acim",
      type: "website",
      title: "Academic Consortium for Integrative Medicine and Health",
      source: "ACIM",
      url: "https://imconsortium.org/",
    },
  ],

  crossReferences: [
    {
      targetId: "integrative-medicine-evidence-overview",
      targetType: "concept",
      relationship: "parent",
      label: "Evidence-Based Complementary Therapies",
    },
    {
      targetId: "patient-communication-skills",
      targetType: "concept",
      relationship: "related",
      label: "Patient Communication Skills",
    },
    {
      targetId: "shared-decision-making",
      targetType: "concept",
      relationship: "related",
      label: "Shared Decision-Making",
    },
  ],

  tags: {
    systems: ["integrative", "healthcare-delivery"],
    topics: [
      "patient communication",
      "CAM disclosure",
      "shared decision-making",
      "patient safety",
      "healthcare relationships",
    ],
    clinicalRelevance: "high",
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ["medicine", "family medicine", "psychiatry"],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: "published",
};

export default discussingWithDoctor;
