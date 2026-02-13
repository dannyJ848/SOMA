/**
 * Evaluating Health Sources - How to Find and Assess Reliable Health Information
 *
 * Covers critical evaluation of health information sources, identifying credible
 * sources, spotting misinformation, and making informed decisions based on quality evidence.
 */

import { EducationalContent } from '../../types';

export const evaluatingHealthSources: EducationalContent = {
  id: 'health-literacy-evaluating-sources',
  type: 'concept',
  name: 'Evaluating Health Sources',
  alternateNames: ['Assessing Health Information', 'Finding Reliable Health Info', 'Health Information Quality'],

  levels: {
    1: {
      level: 1,
      summary: 'Learning how to tell the difference between good health information and bad health information helps you make smart choices about your health.',
      explanation: `Not all health information you find is true or helpful. Some is great, and some could actually hurt you! Here's how to find the good stuff:

**Where to Find GOOD Health Information:**

1. **Your doctor or nurse** - They went to school for years to learn this!
2. **Hospital websites** - Places like Mayo Clinic or Cleveland Clinic
3. **Government websites** - Look for .gov at the end (like CDC.gov or NIH.gov)
4. **Your pharmacist** - They know a lot about medicines

**Warning Signs of BAD Health Information:**

1. **"Miracle cure!"** - If it sounds too good to be true, it probably is
2. **"Doctors don't want you to know..."** - Real doctors WANT you to know things that help
3. **Someone trying to sell you something** - They might make stuff up to get your money
4. **One person's story** - Just because it worked for one person doesn't mean it's true for everyone
5. **No sources listed** - Good information tells you where it came from

**Quick Checks:**

- Who wrote this? Are they a real expert?
- When was it written? Health information can get old
- Are they trying to sell me something?
- Does my doctor agree?

**Remember:** When in doubt, ask your doctor!`,
      keyTerms: [
        { term: 'credible source', definition: 'A place where you can trust that the information is true and accurate' },
        { term: 'misinformation', definition: 'False or wrong information that can confuse people or cause harm' },
        { term: 'expert', definition: 'Someone who has special training and knowledge about a topic' },
      ],
      analogies: [
        'Finding good health information is like finding a good restaurant - you want to check reviews and trust recommendations from people who know',
        'Bad health information is like a fake $20 bill - it might look real but it is worthless and can get you in trouble',
      ],
      examples: [
        'A website claims a vitamin can cure cancer with no proof - this is a red flag!',
        'CDC.gov has information about vaccines written by scientists - this is trustworthy',
      ],
      patientCounselingPoints: [
        'Always check with your doctor before trying something you read online',
        'Be extra careful with information on social media - anyone can post anything',
        'Look for websites ending in .gov, .edu, or from known hospitals',
        'If something sounds too amazing to be true, it probably is not true',
      ],
    },
    2: {
      level: 2,
      summary: 'Evaluating health sources involves checking the credibility of authors, recognizing bias, identifying current and evidence-based information, and distinguishing between reliable and unreliable sources.',
      explanation: `## Why Source Evaluation Matters

In the age of the internet, anyone can publish health information. Learning to evaluate sources helps you:
- Avoid harmful misinformation
- Make informed health decisions
- Have better conversations with healthcare providers
- Protect yourself from scams

## The CRAAP Test for Evaluating Sources

**C - Currency**
- When was the information published or updated?
- Is it current enough for your topic?
- Medical guidelines change - older information may be outdated

**R - Relevance**
- Does this information relate to your specific question?
- Is it written for your audience (patients vs. doctors)?
- Does it address your situation?

**A - Authority**
- Who is the author or organization?
- What are their credentials?
- Are they qualified to write about this topic?

**A - Accuracy**
- Is the information supported by evidence?
- Are sources cited?
- Can you verify the claims elsewhere?

**P - Purpose**
- Why was this created? To inform, sell, entertain, or persuade?
- Is there obvious bias?
- Are they trying to sell you something?

## Types of Health Information Sources

**Most Reliable:**
- Government health agencies (CDC, NIH, FDA)
- Major medical institutions (Mayo Clinic, Johns Hopkins)
- Peer-reviewed medical journals
- Professional medical organizations (AMA, AHA)

**Use with Caution:**
- News articles (may oversimplify)
- Health magazines
- Hospital/clinic blogs
- Encyclopedia sites (Wikipedia - good starting point, but verify)

**Be Skeptical:**
- Social media posts
- Personal blogs
- Product websites
- Celebrity endorsements
- Anonymous sources

## Red Flags to Watch For

- Claims of "miracle cures" or "breakthroughs"
- Conspiracy theories ("doctors are hiding this")
- Anecdotal evidence only (one person's story)
- No references or citations
- Selling products alongside information
- Extreme language or fear tactics
- Claims that seem too good to be true`,
      keyTerms: [
        { term: 'peer review', definition: 'Process where experts in a field evaluate research before it is published to ensure quality' },
        { term: 'bias', definition: 'A tendency to favor one perspective over another, which can affect how information is presented' },
        { term: 'anecdotal evidence', definition: 'Evidence based on personal stories rather than scientific research' },
        { term: 'credentials', definition: 'Qualifications that show someone has the education and training to be an expert' },
        { term: 'CRAAP test', definition: 'A method to evaluate sources based on Currency, Relevance, Authority, Accuracy, and Purpose' },
      ],
      patientCounselingPoints: [
        'Use the CRAAP test when evaluating any health information online',
        'Check multiple reliable sources to verify health claims',
        'Be especially careful with information shared on social media',
        'Discuss any new health information with your healthcare provider before acting on it',
      ],
    },
    3: {
      level: 3,
      summary: 'Critical evaluation of health information requires understanding the hierarchy of evidence, recognizing publication bias, assessing methodological quality, and applying health literacy skills to navigate complex medical information.',
      explanation: `## Health Information Landscape

The proliferation of health information online has created both opportunities and challenges:
- Over 70% of adults search online for health information
- Quality varies enormously across sources
- Misinformation spreads rapidly on social media
- Even legitimate sources can have bias or conflicts of interest

## Hierarchy of Evidence

Understanding evidence quality helps evaluate claims:

**Strongest Evidence:**
1. Systematic reviews and meta-analyses
2. Randomized controlled trials (RCTs)
3. Cohort studies
4. Case-control studies

**Weaker Evidence:**
5. Case series and case reports
6. Expert opinion
7. Anecdotal reports

**Key Principle:** Higher-level evidence should generally carry more weight, but context matters.

## Evaluating Research-Based Claims

**Study Design Questions:**
- What type of study was conducted?
- How large was the sample size?
- Was there a control group?
- Was it randomized and blinded?
- How long was the follow-up period?

**Statistical Considerations:**
- What outcomes were measured?
- Were results statistically significant (p-value)?
- What was the effect size (clinical significance)?
- Were confidence intervals reported?

**Bias Assessment:**
- Was there selection bias in participants?
- Who funded the study?
- Were all results reported (publication bias)?
- Are there conflicts of interest?

## Recognizing Misinformation Tactics

**Common Manipulation Strategies:**
1. **Cherry-picking** - Selecting only evidence that supports a claim
2. **False equivalence** - Treating fringe views as equal to scientific consensus
3. **Appeal to nature** - Claiming "natural" means safe/effective
4. **Conspiracy theories** - Suggesting experts are hiding information
5. **Testimonials** - Using emotional personal stories instead of data
6. **Misrepresenting statistics** - Confusing relative and absolute risk

## Digital Health Literacy

**Evaluating Online Sources:**
- Check domain type (.gov, .edu, .org, .com)
- Look for HONcode certification
- Verify author credentials
- Check for editorial review process
- Assess commercial interests
- Review date of publication/update

**Social Media Considerations:**
- Algorithms may amplify misinformation
- Influencers may have hidden conflicts of interest
- Viral content is not evidence of accuracy
- Even healthcare professionals can share misinformation

## Quality Health Information Resources

**Evidence-Based Resources:**
- Cochrane Library (systematic reviews)
- PubMed/MEDLINE (peer-reviewed research)
- UpToDate (clinical decision support)
- DynaMed (point-of-care tool)

**Consumer-Focused Quality Sources:**
- MedlinePlus (NIH)
- CDC.gov
- Healthfinder.gov
- Major academic medical center websites`,
      keyTerms: [
        { term: 'systematic review', definition: 'A comprehensive summary of all available research on a specific topic using rigorous methods' },
        { term: 'meta-analysis', definition: 'Statistical technique combining results from multiple studies to determine overall effect' },
        { term: 'randomized controlled trial', definition: 'Study where participants are randomly assigned to treatment or control groups to minimize bias' },
        { term: 'publication bias', definition: 'Tendency for studies with positive results to be published more often than those with negative results' },
        { term: 'HONcode', definition: 'Health On the Net Foundation Code of Conduct; certification for trustworthy health websites' },
        { term: 'effect size', definition: 'Measure of the magnitude of a treatment effect, distinct from statistical significance' },
      ],
      clinicalNotes: 'When patients bring health information from the internet, approach with curiosity rather than dismissal. Use it as an opportunity to teach source evaluation skills and build trust.',
    },
    4: {
      level: 4,
      summary: 'Advanced health information evaluation requires understanding research methodology, recognizing cognitive biases affecting interpretation, analyzing conflicts of interest, and applying information appraisal frameworks to complex medical literature.',
      explanation: `## Information Appraisal Framework

Sophisticated evaluation of health information requires multiple analytical lenses:

**Source Analysis:**
- Institutional credibility and track record
- Author expertise and potential biases
- Editorial and peer review processes
- Funding sources and conflicts of interest
- Publication venue reputation

**Content Analysis:**
- Methodological rigor
- Appropriate statistical methods
- Generalizability of findings
- Consistency with existing evidence
- Plausibility of mechanisms

**Context Analysis:**
- Alignment with current scientific consensus
- Stage of evidence development
- Applicability to specific populations
- Risk-benefit considerations

## Research Quality Assessment

**Internal Validity:**
- Selection bias minimization
- Performance bias (blinding)
- Detection bias (outcome assessment)
- Attrition bias (loss to follow-up)
- Reporting bias

**External Validity:**
- Population representativeness
- Setting applicability
- Intervention fidelity
- Outcome relevance

**Assessment Tools:**
- Cochrane Risk of Bias Tool (RCTs)
- Newcastle-Ottawa Scale (observational studies)
- GRADE approach (evidence quality)
- AMSTAR (systematic reviews)

## Cognitive Biases in Information Processing

**Affecting Both Patients and Clinicians:**

1. **Confirmation bias** - Seeking information that confirms existing beliefs
2. **Availability heuristic** - Overweighting easily recalled examples
3. **Anchoring** - Over-relying on first piece of information
4. **Authority bias** - Accepting information from perceived experts uncritically
5. **Narrative fallacy** - Finding compelling stories more convincing than data
6. **Dunning-Kruger effect** - Overconfidence in limited knowledge

**Mitigating Strategies:**
- Actively seek disconfirming evidence
- Use systematic evaluation frameworks
- Consult multiple sources
- Recognize emotional responses to information
- Practice intellectual humility

## Conflicts of Interest

**Types of Conflicts:**
- Financial (direct payment, stock ownership)
- Professional (career advancement, publication pressure)
- Intellectual (attachment to theories)
- Personal (relationships, ideology)

**Impact on Research:**
- Industry-funded studies more likely to report favorable results
- Ghost-writing and honorary authorship
- Selective outcome reporting
- Spin in interpretation of results

**Disclosure Assessment:**
- Review conflict of interest statements
- Check Open Payments database
- Consider funding source in interpretation
- Look for independent replication

## Misinformation Dynamics

**Spread Mechanisms:**
- Social media algorithms favoring engagement
- Echo chambers and filter bubbles
- Emotional content sharing patterns
- Authority figure amplification
- Bot and coordinated inauthentic behavior

**Psychological Vulnerability:**
- Health anxiety increases susceptibility
- Distrust of institutions
- Desire for simple explanations
- Need for agency and control
- Community belonging needs

**Correction Challenges:**
- Backfire effect (corrections strengthen beliefs)
- Continued influence of misinformation
- Illusory truth effect (repetition increases belief)
- Source amnesia (forgetting where information came from)

## Teaching Source Evaluation

**Patient Education Approaches:**
- Provide specific reliable source recommendations
- Teach simple evaluation frameworks
- Model critical thinking in discussions
- Avoid condescension when addressing misinformation
- Use motivational interviewing techniques

**Building Digital Health Literacy:**
- Assess patient digital literacy
- Provide written guidance on source evaluation
- Recommend patient portal resources
- Consider health literacy in recommendations`,
      keyTerms: [
        { term: 'internal validity', definition: 'Degree to which study results can be attributed to the intervention rather than confounding factors' },
        { term: 'external validity', definition: 'Degree to which study findings can be generalized to other settings, populations, and conditions' },
        { term: 'GRADE approach', definition: 'Grading of Recommendations Assessment, Development and Evaluation; framework for rating evidence quality' },
        { term: 'confirmation bias', definition: 'Tendency to search for, interpret, and recall information confirming preexisting beliefs' },
        { term: 'backfire effect', definition: 'Phenomenon where correcting misinformation can paradoxically strengthen belief in it' },
        { term: 'echo chamber', definition: 'Environment where beliefs are amplified through repetition within a closed system' },
      ],
      clinicalNotes: `Strategies for addressing patient misinformation:
1. Build rapport before addressing incorrect beliefs
2. Understand the underlying concerns driving information seeking
3. Provide alternative explanations, not just corrections
4. Use trusted messengers when appropriate
5. Focus on shared goals (health, well-being)
6. Follow up to reinforce accurate information`,
    },
    5: {
      level: 5,
      summary: 'Expert-level health information evaluation encompasses advanced critical appraisal skills, understanding of research synthesis methodologies, recognition of systemic biases in medical literature, and application of implementation science principles to translate evidence into practice.',
      explanation: `## Critical Appraisal Mastery

**Systematic Review Evaluation:**
- PICO question formulation
- Search strategy comprehensiveness
- Study selection criteria appropriateness
- Risk of bias assessment rigor
- Data extraction and synthesis methods
- Heterogeneity assessment
- Sensitivity and subgroup analyses
- Publication bias assessment (funnel plots, trim and fill)
- GRADE certainty of evidence ratings

**Meta-Analysis Interpretation:**
- Fixed vs. random effects models
- Heterogeneity statistics (I², Q statistic)
- Forest plot interpretation
- Subgroup and meta-regression analyses
- Network meta-analysis concepts
- Individual patient data meta-analysis advantages

**Observational Study Assessment:**
- Confounding control methods
- Propensity score approaches
- Instrumental variable analysis
- Difference-in-differences
- Regression discontinuity
- Target trial emulation framework

## Systemic Issues in Medical Literature

**Publication and Reporting Biases:**
- Positive result publication bias
- Outcome reporting bias
- Spin in abstracts and conclusions
- Selective citation
- Language bias
- Time-lag bias

**Research Integrity Issues:**
- Data fabrication and falsification
- Plagiarism and duplicate publication
- Image manipulation
- P-hacking and HARKing
- Predatory journals and conferences
- Replication crisis in medical research

**Structural Problems:**
- Industry influence on research agenda
- Academic incentive structures
- Peer review limitations
- Regulatory capture
- Underrepresentation in research
- North-South research inequity

## Evidence Synthesis and Translation

**Living Evidence:**
- Living systematic reviews
- Rapid reviews for emerging evidence
- Evidence surveillance systems
- Guidelines updating processes

**Implementation Considerations:**
- Context adaptation requirements
- Resource implications
- Patient values and preferences
- Opportunity costs
- Equity considerations

**Evidence-to-Decision Frameworks:**
- GRADE Evidence-to-Decision framework
- WHO-INTEGRATE framework
- Contextualization for local settings
- Stakeholder engagement in interpretation

## Infodemic Management

**Public Health Information Challenges:**
- Speed of misinformation spread
- Emotional contagion online
- Politicization of health information
- Expert communication failures
- Media amplification patterns

**Strategic Communication:**
- Pre-bunking (inoculation theory)
- Effective correction strategies
- Trusted messenger identification
- Tailored messaging approaches
- Community engagement methods

**Health Systems Responsibilities:**
- Proactive accurate information provision
- Social media monitoring
- Partnership with platforms
- Healthcare worker training
- Public health literacy initiatives

## Emerging Challenges

**AI-Generated Health Content:**
- Large language model outputs
- Deepfakes and synthetic media
- Chatbot health advice
- Content farm articles
- Detection and labeling needs

**Personalized Information:**
- Algorithm-driven content curation
- Direct-to-consumer genetic testing information
- Precision medicine communication
- Individual risk communication

**Global Information Flows:**
- Cross-border misinformation
- Translation accuracy
- Cultural context in evaluation
- Digital divide implications

## Professional Responsibilities

**Clinician Roles:**
- Modeling critical appraisal
- Patient education on evaluation
- Reporting misinformation concerns
- Contributing to evidence base
- Supporting health literacy initiatives

**Institutional Responsibilities:**
- Clear communication policies
- Staff training programs
- Patient-facing resources
- Social media presence management
- Community partnership building

**Research Community:**
- Transparent reporting practices
- Open science initiatives
- Public engagement
- Conflict of interest management
- Diversity and inclusion in research`,
      keyTerms: [
        { term: 'PICO', definition: 'Framework for clinical questions: Patient/Population, Intervention, Comparison, Outcome' },
        { term: 'heterogeneity', definition: 'Variability in study results beyond what would be expected by chance; measured by I² and Q statistics' },
        { term: 'funnel plot', definition: 'Graphical tool to detect publication bias by plotting study results against sample size' },
        { term: 'propensity score', definition: 'Statistical technique to reduce confounding by balancing measured covariates between groups' },
        { term: 'target trial emulation', definition: 'Framework for designing observational studies to mimic hypothetical randomized trials' },
        { term: 'HARKing', definition: 'Hypothesizing After Results are Known; problematic practice of presenting post-hoc findings as a priori hypotheses' },
        { term: 'pre-bunking', definition: 'Inoculation strategy providing warnings about misinformation before exposure' },
        { term: 'living systematic review', definition: 'Systematic review continuously updated as new evidence becomes available' },
      ],
      clinicalNotes: `Key resources for critical appraisal:
1. CASP (Critical Appraisal Skills Programme) checklists
2. EQUATOR Network reporting guidelines
3. Cochrane Handbook for Systematic Reviews
4. BMJ Evidence-Based Medicine series
5. JAMA Users' Guides to the Medical Literature

Teaching opportunities:
- Journal clubs with structured appraisal
- Morbidity and mortality conferences
- Resident research curricula
- Patient case discussions
- Social media literacy workshops`,
    },
  },

  media: [],

  citations: [
    {
      id: 'craap-test',
      type: 'website',
      title: 'Evaluating Information: The CRAAP Test',
      source: 'California State University, Chico',
      url: 'https://library.csuchico.edu/help/source-or-information-good',
    },
    {
      id: 'cochrane-handbook',
      type: 'website',
      title: 'Cochrane Handbook for Systematic Reviews of Interventions',
      source: 'Cochrane Collaboration',
      url: 'https://training.cochrane.org/handbook',
    },
    {
      id: 'grade-working-group',
      type: 'website',
      title: 'GRADE Working Group',
      source: 'GRADE Working Group',
      url: 'https://www.gradeworkinggroup.org/',
    },
    {
      id: 'medlineplus',
      type: 'website',
      title: 'Evaluating Health Information',
      source: 'MedlinePlus, National Library of Medicine',
      url: 'https://medlineplus.gov/evaluatinghealthinformation.html',
    },
  ],

  crossReferences: [
    { targetId: 'health-literacy-basics', targetType: 'concept', relationship: 'parent', label: 'Health Literacy Basics' },
    { targetId: 'health-literacy-understanding-statistics', targetType: 'concept', relationship: 'sibling', label: 'Understanding Statistics' },
    { targetId: 'health-literacy-reading-medical-literature', targetType: 'concept', relationship: 'sibling', label: 'Reading Medical Literature' },
  ],

  tags: {
    systems: ['health-literacy'],
    topics: ['source evaluation', 'critical thinking', 'evidence-based medicine', 'misinformation'],
    keywords: ['CRAAP test', 'credible sources', 'misinformation', 'evidence evaluation', 'health information', 'digital literacy'],
    clinicalRelevance: 'high',
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default evaluatingHealthSources;
