import { EducationalContent } from '../../types';

export const whatIsInformedConsentContent: EducationalContent = {
  id: 'what-is-informed-consent',
  type: 'concept',
  name: 'What is Informed Consent',
  alternateNames: ['Medical Consent', 'Treatment Consent', 'Informed Decision-Making'],
  levels: {
    1: {
      level: 1,
      summary: 'Informed consent means your doctor explains your treatment options and you agree to the plan. It helps you make choices about your own healthcare.',
      explanation: `## Understanding Informed Consent

Informed consent means your doctor explains your treatment options and you agree to the plan. It helps you make choices about your own healthcare.

### What You Should Know

Before any treatment, your doctor should tell you:
- What is wrong with your health
- What treatment they recommend
- What the treatment will do
- Possible risks and side effects
- Other options you could choose
- What happens if you do nothing

### Your Right to Ask Questions

You can ask:
- "What will this procedure involve?"
- "What are the risks?"
- "Are there other choices?"
- "What if I wait or do nothing?"

### You Can Say Yes or No

- You have the right to agree to treatment
- You have the right to refuse treatment
- No one can force you without a very good reason

### Written Consent

For serious procedures, you will sign a form. This shows you understand and agree.`,
      keyTerms: [
        { term: 'Informed consent', definition: 'Agreeing to treatment after understanding it' },
        { term: 'Treatment options', definition: 'Different ways to treat a health problem' },
        { term: 'Risks', definition: 'Possible bad things that could happen' },
        { term: 'Side effects', definition: 'Unwanted effects from treatment' }
      ],
      analogies: [
        'Informed consent is like reading the terms before signing a contract'
      ],
      examples: [
        'Before surgery, the doctor explains the operation and you sign a form',
        'A patient learns about medication side effects before starting a new drug'
      ]
    },
    2: {
      level: 2,
      summary: 'Informed consent is both an ethical principle and legal requirement in healthcare. It ensures patients understand their condition, treatment options, risks, and alternatives before making healthcare decisions.',
      explanation: `## The Process of Informed Consent

Informed consent is both an ethical principle and legal requirement in healthcare. It ensures patients understand their condition, treatment options, risks, and alternatives before making healthcare decisions.

### Elements of Informed Consent

**Information Provided:**
- Nature of the proposed treatment
- Risks and potential complications
- Benefits and likelihood of success
- Alternative treatments available
- Consequences of declining treatment

**Patient Understanding:**
- Information presented clearly
- Opportunity to ask questions
- Time to consider options
- Explanation in preferred language
- Appropriate education level

**Voluntary Agreement:**
- Decision made without coercion
- Right to refuse without penalty
- Freedom to change providers
- No undue pressure

### When Consent is Required

**Always Required:**
- Surgery and invasive procedures
- Anesthesia
- Experimental treatments
- Blood transfusions
- Major diagnostic procedures

**Exceptions:**
- Life-threatening emergencies
- Patient lacks decision-making capacity
- Therapeutic privilege (rare)
- Waiver by patient (uncommon)

### Documentation

**Written Consent:**
- Required for most procedures
- Signed by patient or surrogate
- Witnessed when appropriate
- Kept in medical record

**Verbal Consent:**
- May suffice for minor procedures
- Documented in chart
- Still requires full disclosure

### Special Situations

**Language Barriers:**
- Professional interpreter required
- Translated consent forms
- Cannot use family for medical discussions

**Cultural Considerations:**
- Understanding of medical concepts
- Family involvement preferences
- Religious beliefs affecting care`,
      keyTerms: [
        { term: 'Voluntary', definition: 'Done by choice without pressure' },
        { term: 'Capacity', definition: 'Ability to understand and make decisions' },
        { term: 'Surrogate', definition: 'Person making decisions for someone else' },
        { term: 'Therapeutic privilege', definition: 'Withholding information believed harmful to patient' }
      ],
      analogies: [
        'Informed consent is like a two-way street requiring both information sharing and understanding'
      ],
      examples: [
        'A patient with diabetes learns about insulin therapy risks before starting treatment',
        'Parents provide consent for their child\'s tonsillectomy after meeting with the surgeon'
      ]
    },
    3: {
      level: 3,
      summary: 'Informed consent rests on the ethical principles of autonomy and respect for persons. Legally, it protects both patient self-determination and providers from liability, with requirements varying by jurisdiction and procedure risk level.',
      explanation: `## Legal and Ethical Foundations

Informed consent rests on the ethical principles of autonomy and respect for persons. Legally, it protects both patient self-determination and providers from liability, with requirements varying by jurisdiction and procedure risk level.

### Ethical Principles

**Autonomy:**
- Right to self-determination
- Control over one\'s body
- Foundation of Western bioethics
- Respects personhood

**Beneficence and Non-Maleficence:**
- Acting in patient best interest
- Avoiding harm
- Balancing with patient autonomy
- Evidence-based recommendations

**Justice:**
- Fair access to information
- Equitable consent processes
- Addressing health literacy disparities
- Cultural sensitivity

### Legal Standards

**Disclosure Standards:**
- **Professional practice standard**: What reasonable provider would disclose
- **Reasonable person standard**: What reasonable patient would want to know
- **Subjective standard**: What this specific patient wants to know

**Negligence Claims:**
- Duty to obtain consent
- Breach of duty (inadequate disclosure)
- Causation (patient would have chosen differently)
- Damages (harm occurred)

**Battery vs Negligence:**
- Battery: Touching without any consent
- Negligence: Consent without adequate information
- Battery requires only lack of permission

### Capacity Assessment

**Elements of Capacity:**
- Understand relevant information
- Appreciate situation and consequences
- Reason about treatment options
- Communicate choice

**Assessment Process:**
- Clinical interview
- Cognitive screening if indicated
- Decision-specific evaluation
- Documentation of findings

**Impaired Capacity Causes:**
- Delirium
- Dementia
- Psychosis
- Severe depression
- Developmental disability
- Intoxication

### Research Consent

**Additional Requirements:**
- Institutional Review Board approval
- Research-specific information
- Right to withdraw anytime
- No penalty for withdrawal
- Compensation for research-related injury

**Vulnerable Populations:**
- Enhanced protections
- Independent monitor
- Community consultation
- Limited inducements`,
      keyTerms: [
        { term: 'Battery', definition: 'Unlawful touching without consent' },
        { term: 'Reasonable person standard', definition: 'What average patient would want to know' },
        { term: 'Decisional capacity', definition: 'Ability to make specific healthcare decision' },
        { term: 'Institutional Review Board', definition: 'Committee protecting research subjects' }
      ]
    },
    4: {
      level: 4,
      summary: 'Informed consent in clinical practice requires balancing comprehensive disclosure with patient understanding. Shared decision-making represents the gold standard, integrating patient values with clinical evidence to arrive at mutually acceptable treatment plans.',
      explanation: `## Clinical Practice of Informed Consent

Informed consent in clinical practice requires balancing comprehensive disclosure with patient understanding. Shared decision-making represents the gold standard, integrating patient values with clinical evidence to arrive at mutually acceptable treatment plans.

### Shared Decision-Making Model

**Key Components:**
- Information exchange (both directions)
- Deliberation about options
- Decision-making together
- Implementation and follow-up

**Tools and Aids:**
- Decision aids (pamphlets, videos)
- Risk visualizations
- Option grids
- Patient decision aids

### Risk Communication

**Presenting Statistics:**
- Natural frequencies preferred
- Absolute vs relative risk
- Visual aids improve understanding
- Avoid denominators of different sizes

**Framing Effects:**
- Survival vs mortality framing
- Impact on patient choices
- Transparent presentation
- Balance positive and negative

**Uncertainty Communication:**
- Honest about unknowns
- Confidence intervals when appropriate
- "Best guess" language
- Ranges rather than point estimates

### Documentation Best Practices

**Required Elements:**
- Procedure description
- Risks discussed
- Alternatives presented
- Questions answered
- Voluntary agreement

**Quality Indicators:**
- Specific rather than generic
- Signed before sedation
- Witness when indicated
- Copy provided to patient

**Electronic Consent:**
- Growing use in healthcare
- Audit trails
- Accessibility considerations
- Legal validity

### Challenging Scenarios

**Low Health Literacy:**
- Teach-back method
- Simplified materials
- Visual aids
- Extra time for questions

**Cultural and Language Barriers:**
- Professional interpreters
- Culturally adapted materials
- Family dynamics consideration
- Health belief exploration

**Time Pressures:**
- Pre-visit information
- Decision aids
- Team-based consent
- Staged consent process

**Emotional Distress:**
- Acknowledge emotions
- Allow time to process
- Offer support resources
- Consider delaying if possible`,
      keyTerms: [
        { term: 'Shared decision-making', definition: 'Collaborative process between patient and clinician' },
        { term: 'Teach-back method', definition: 'Patient explains back to confirm understanding' },
        { term: 'Natural frequency', definition: 'Presenting risk as X out of Y people' },
        { term: 'Decision aid', definition: 'Tool helping patients understand options' }
      ],
      clinicalNotes: 'Teach-back method significantly improves comprehension - ask patients to explain in their own words. Decision aids reduce decisional conflict and improve knowledge. Document specific risks discussed, not just "risks explained." Professional interpreters required for informed consent - family members should not interpret medical information.'
    },
    5: {
      level: 5,
      summary: 'Informed consent continues to evolve with technological advances, raising questions about genomic medicine disclosure obligations, artificial intelligence in decision-making, virtual consent processes, and the boundaries of provider responsibility for ensuring understanding.',
      explanation: `## Evolving Frontiers of Informed Consent

Informed consent continues to evolve with technological advances, raising questions about genomic medicine disclosure obligations, artificial intelligence in decision-making, virtual consent processes, and the boundaries of provider responsibility for ensuring understanding.

### Genomic Medicine

**Incidental Findings:**
- Secondary discoveries in genome sequencing
- Duty to return vs not looking
- Patient preferences for categories
- Variability in clinical significance

**Familial Implications:**
- Genetic information affects relatives
- Duty to warn at-risk family members
- Privacy vs beneficence tension
- Legal precedents evolving

**Direct-to-Consumer Testing:**
- Bypass traditional medical consultation
- Variable clinical validity
- Responsibility for result interpretation
- Cascade testing considerations

### Artificial Intelligence and Consent

**Algorithmic Transparency:**
- Right to know AI involvement
- Understanding AI limitations
- "Black box" challenges
- Explainable AI requirements

**AI-Specific Risks:**
- Training data bias
- Generalizability limitations
- Error patterns different from humans
- Liability allocation

**Consent for AI Training:**
- Using patient data for algorithm development
- De-identification limitations
- Commercial uses
- Opt-out rights

### Digital and Remote Consent

**Telehealth Consent:**
- Technology limitations disclosure
- Privacy and security risks
- Emergency protocol differences
- Cross-state licensing issues

**Electronic Consent Platforms:**
- Interactive multimedia presentations
- Embedded comprehension checks
- Digital signatures
- Accessibility requirements

**Remote Monitoring Consent:**
- Continuous data collection
- Third-party device manufacturers
- Data sharing implications
- Withdrawal procedures

### Expanding Disclosure Obligations

**Financial Conflicts:**
- Device manufacturer relationships
- Research funding sources
- Equity ownership
- Speaking fees and consulting

**Provider Performance:**
- Individual outcome statistics
- Experience with specific procedures
- Complication rates
- Comparison to benchmarks

**Institutional Factors:**
- Teaching hospital involvement
- Resident participation
- Observational learning
- Recording for quality improvement

### Measuring Consent Quality

**Process Measures:**
- Time spent on consent
- Questions asked by patients
- Use of decision aids
- Documentation quality

**Outcome Measures:**
- Comprehension testing
- Decisional regret
- Decisional conflict scores
- Treatment adherence

**System-Level Metrics:**
- Consent-related complaints
- Litigation patterns
- Patient experience scores
- Quality improvement initiatives

### Policy Considerations

**Standardization vs Individualization:**
- Procedure-specific consent templates
- Flexibility for patient needs
- Quality vs efficiency trade-offs
- Regulatory requirements

**Consent as Process vs Event:****
- Ongoing consent for long-term treatments
- Re-consent for changes
- Dynamic consent for research
- Withdrawal procedures

**Global Harmonization:****
- International research ethics
- Cultural adaptation
- Regulatory convergence
- Capacity building`,
      keyTerms: [
        { term: 'Incidental findings', definition: 'Unexpected discoveries during testing' },
        { term: 'Explainable AI', definition: 'Artificial intelligence whose decisions can be understood by humans' },
        { term: 'Dynamic consent', definition: 'Ongoing consent with ability to modify preferences' },
        { term: 'Decisional regret', definition: 'Remorse about treatment choice made' }
      ],
      clinicalNotes: 'Genomic consent requires discussion of incidental findings potential. AI decision support tools need validation before clinical use; consent should acknowledge AI limitations. Electronic consent platforms improve documentation but must not replace conversation. Performance transparency remains controversial - institutional averages may be more reliable than individual statistics.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['patient-safety', 'informed-consent'],
    keywords: ['informed consent', 'autonomy', 'medical ethics', 'shared decision-making', 'patient rights']
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
