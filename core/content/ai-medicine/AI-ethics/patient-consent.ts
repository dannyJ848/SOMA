/**
 * Patient Consent for AI Use in Healthcare
 *
 * Comprehensive content on informed consent for AI-assisted diagnosis,
 * treatment recommendations, data use, transparency requirements, and patient rights.
 */

import { EducationalContent } from '../../types';

export const patientConsent: EducationalContent = {
  id: 'ai-ethics-patient-consent',
  type: 'concept',
  name: 'Patient Consent for AI Use',
  alternateNames: ['AI Informed Consent', 'Consent for Machine Learning', 'Algorithmic Consent', 'AI Disclosure'],

  levels: {
    1: {
      level: 1,
      summary: 'When doctors use computer programs to help make decisions about your health, you have the right to know about it and say whether that\'s okay with you.',
      explanation: `Doctors are starting to use smart computer programs (called artificial intelligence or AI) to help them take care of patients. Just like you have the right to know about medicines and treatments, you also have the right to know when computers are helping with your healthcare.

**What Does AI Do in Healthcare?**
- Helps doctors look at X-rays and scans
- Suggests possible health problems based on symptoms
- Helps decide which treatments might work best
- Keeps track of your health information

**Why Should You Know About It?**
- It's your body and your health
- You might have questions about how decisions are made
- You can ask for a human doctor to check the computer's suggestions
- You might not want your information used in certain ways

**Your Rights:**
- **The right to know:** You can ask if AI is being used in your care
- **The right to understand:** Doctors should explain how the AI helps in simple terms
- **The right to choose:** In some cases, you can say you don't want AI involved
- **The right to ask questions:** You can always ask for more information

**Questions You Can Ask:**
- "Is a computer helping with my diagnosis?"
- "How does the computer program make its suggestions?"
- "Can a doctor double-check what the computer says?"
- "What happens to my health information?"

**What Consent Means:**
Consent means agreeing to something after you understand it. For AI in healthcare, this means:
1. Someone explains that AI is being used
2. They tell you what the AI does
3. You have a chance to ask questions
4. You decide if you're okay with it

**Remember:**
- AI is a tool to help doctors, not replace them
- You can always ask to talk to a human doctor
- Your questions are important and should be answered`,
      keyTerms: [
        { term: 'consent', definition: 'Giving permission for something after you understand what it means' },
        { term: 'artificial intelligence (AI)', definition: 'Computer programs that can learn and help make decisions' },
        { term: 'patient rights', definition: 'The things you\'re entitled to when you receive healthcare' },
      ],
      analogies: [
        'Getting consent for AI is like asking permission before using someone\'s photo - people should know how their information is being used.',
        'AI in healthcare is like a very smart calculator that helps the doctor - but you should know when the calculator is being used.',
        'Just like you\'d want to know all the ingredients in your food, you should know all the tools being used in your healthcare.',
      ],
      examples: [
        'Before looking at your skin with an AI program that spots problems, the doctor explains what the program does and asks if that\'s okay.',
        'When signing up for a patient portal, you read about how AI might be used and check a box to agree.',
        'A nurse explains that a computer program will help monitor your heart rate overnight and asks if you have any questions.',
      ],
    },
    2: {
      level: 2,
      summary: 'Informed consent for AI in healthcare requires that patients understand when and how artificial intelligence is used in their diagnosis, treatment, or data processing, and that they have meaningful opportunities to make decisions about AI involvement.',
      explanation: `## The Basics of AI Consent

When artificial intelligence is used in healthcare, the traditional concept of informed consent expands to include new considerations. Patients need to understand not just their medical options, but also the role of technology in their care.

## Why AI Consent Matters

**Transparency:**
- Patients deserve to know how their care decisions are made
- AI may influence diagnosis, treatment, or monitoring
- Understanding AI involvement helps patients make informed choices

**Trust:**
- Open communication builds trust in healthcare relationships
- Hidden AI use can damage patient-provider relationships
- Transparency supports patient engagement

**Autonomy:**
- Patients have the right to make decisions about their own care
- This includes decisions about AI involvement
- Some patients may prefer human-only decision making

## Elements of AI Consent

| Element | Description | Example |
|---------|-------------|---------|
| Disclosure | Telling patients AI is being used | "We use a computer program to help analyze your X-ray" |
| Explanation | Describing what the AI does | "It highlights areas that might need attention" |
| Purpose | Why AI is being used | "To help catch problems early" |
| Limitations | What AI cannot do | "It assists but doesn't replace doctor judgment" |
| Choice | Options for the patient | "You can ask for review by another physician" |

## Types of AI Use Requiring Consent

**Direct Clinical Care:**
- Diagnostic imaging analysis
- Risk prediction scores
- Treatment recommendations
- Monitoring systems

**Data Use:**
- Training AI systems with patient data
- Research using health information
- Quality improvement projects
- Population health analytics

## Challenges in AI Consent

**Complexity:**
- AI systems can be difficult to explain
- Technical details may overwhelm patients
- Balancing thoroughness with understanding

**Workflow Integration:**
- Multiple consent points may be needed
- Time constraints in clinical settings
- Documentation requirements

**Evolving Technology:**
- AI capabilities change over time
- Consent forms may become outdated
- Continuous disclosure needs

## Patient Rights and AI

**Right to Know:**
- What AI tools are being used
- How AI affects care decisions
- What happens to personal data

**Right to Understand:**
- Clear, plain-language explanations
- Answers to questions
- Access to additional information

**Right to Opt Out:**
- In some circumstances, patients may decline AI
- Understanding what opting out means
- Alternative care pathways

## Best Practices for Healthcare Providers

1. **Be Proactive:** Disclose AI use before it's needed
2. **Use Plain Language:** Avoid technical jargon
3. **Invite Questions:** Create space for patient concerns
4. **Document Discussions:** Record consent conversations
5. **Update Regularly:** Keep patients informed of changes`,
      keyTerms: [
        { term: 'informed consent', definition: 'Agreement given after receiving and understanding relevant information about a proposed treatment or procedure' },
        { term: 'disclosure', definition: 'The act of informing patients about AI involvement in their care' },
        { term: 'patient autonomy', definition: 'The right of patients to make decisions about their own healthcare' },
        { term: 'opt out', definition: 'A patient\'s choice to decline AI involvement in their care' },
        { term: 'transparency', definition: 'Being open and clear about how AI is used in healthcare decisions' },
      ],
      analogies: [
        'AI consent is like the terms of service for an app - you should understand what you\'re agreeing to before using it.',
        'Disclosing AI use is like a restaurant noting which dishes contain allergens - patients need to know what\'s involved in their care.',
      ],
    },
    3: {
      level: 3,
      summary: 'Informed consent for AI in healthcare requires adaptation of traditional consent frameworks to address algorithmic involvement in clinical decision-making, including disclosure requirements, explanation of AI capabilities and limitations, data governance, and mechanisms for patient choice.',
      explanation: `## Expanding the Consent Paradigm

Traditional informed consent encompasses disclosure, understanding, voluntariness, and competence. AI introduces additional dimensions that require thoughtful integration into existing consent frameworks.

## Theoretical Framework

**Transparency Requirements:**
1. **Presence disclosure:** AI is being used
2. **Function disclosure:** What the AI does
3. **Influence disclosure:** How AI affects decisions
4. **Data disclosure:** How patient data is used

**Levels of Explanation:**
| Level | Description | Target Audience |
|-------|-------------|-----------------|
| Existence | AI is involved | All patients |
| Functional | General purpose and capability | All patients |
| Technical | Algorithm details | Patients who request |
| Complete | Full technical documentation | Rarely needed |

## Clinical Decision Support and Consent

**Categories of AI-CDS:**
1. **Assistive:** Enhances clinician efficiency (e.g., data organization)
2. **Suggestive:** Provides recommendations (e.g., dosing calculators)
3. **Predictive:** Forecasts outcomes (e.g., risk scores)
4. **Autonomous:** Makes decisions with minimal oversight (e.g., insulin pumps)

**Consent Requirements by Category:**
- Assistive: Minimal - general disclosure often sufficient
- Suggestive: Moderate - explain AI role in recommendations
- Predictive: Significant - discuss accuracy and limitations
- Autonomous: Comprehensive - detailed consent required

## Regulatory Landscape

**United States:**
- No specific federal AI consent requirements
- State laws vary (California CCPA affects data use)
- FDA regulates AI as medical devices but not consent
- HIPAA governs data use authorization

**European Union:**
- GDPR Article 22: Right not to be subject to automated decisions
- EU AI Act: Transparency requirements for high-risk AI
- Medical device regulations (MDR) for clinical AI

**Key Regulations:**
| Jurisdiction | Regulation | Relevant Provisions |
|--------------|------------|-------------------|
| US | 21st Century Cures Act | Information blocking, interoperability |
| US | HIPAA | Authorization for data use |
| EU | GDPR | Automated decision-making rights |
| EU | AI Act | Transparency, human oversight |

## Data Governance and Consent

**Primary Use vs. Secondary Use:**
- Primary: Data for direct patient care
- Secondary: Research, quality improvement, AI training

**Consent Models:**
1. **Specific consent:** Consent for each use
2. **Broad consent:** General permission for categories of use
3. **Dynamic consent:** Ongoing, updateable preferences
4. **Meta-consent:** Consent to consent framework

**Data Use for AI Training:**
- Training new AI models
- Validating existing algorithms
- Improving algorithm performance
- Federated learning considerations

## Implementation Challenges

**Clinical Workflow:**
- Time constraints for thorough disclosure
- Multiple AI tools requiring separate consents
- Electronic health record integration
- Documentation requirements

**Health Literacy:**
- Varying patient understanding
- Cultural and language considerations
- Cognitive load of multiple disclosures
- Need for appropriate educational materials

**Technology Evolution:**
- AI capabilities change over time
- Learning systems improve with use
- Consent forms may become outdated
- Mechanism for updating consent

## Ethical Considerations

**Autonomy:**
- Meaningful choice vs. mere notification
- Power imbalances in healthcare
- Patients who cannot consent

**Beneficence:**
- AI that improves care should be accessible
- Consent barriers may limit beneficial AI
- Balancing protection with access

**Justice:**
- Equitable access to AI-enhanced care
- Consent burdens on disadvantaged populations
- Language and literacy accommodations

## Practical Implementation

**Disclosure Strategies:**
\`\`\`
1. Tiered approach:
   - Universal brief disclosure
   - Detailed information for interested patients
   - Complete documentation available on request

2. Embedded disclosure:
   - Integrate into existing consent processes
   - Add AI-specific sections to consent forms
   - Include in patient education materials
\`\`\`

**Documentation Templates:**
- AI disclosure statement
- Patient acknowledgment forms
- Opt-out documentation
- Data use authorizations`,
      keyTerms: [
        { term: 'clinical decision support (CDS)', definition: 'Health IT systems designed to assist clinicians in making decisions, increasingly incorporating AI' },
        { term: 'dynamic consent', definition: 'An approach allowing patients to update their consent preferences over time through digital platforms' },
        { term: 'secondary use', definition: 'Use of patient data for purposes beyond direct clinical care, such as research or AI training' },
        { term: 'GDPR Article 22', definition: 'EU regulation providing rights related to automated decision-making, including healthcare AI' },
        { term: 'federated learning', definition: 'AI training approach where data remains local, raising unique consent considerations' },
        { term: 'tiered disclosure', definition: 'Providing information at multiple levels of detail based on patient interest and need' },
      ],
      clinicalNotes: 'When implementing AI tools, ensure consent processes are documented in the EHR. Consider creating standardized disclosure language for common AI applications. Train staff on how to explain AI involvement in plain terms.',
    },
    4: {
      level: 4,
      summary: 'AI consent in healthcare requires sophisticated integration of ethical principles, regulatory requirements, technical understanding, and practical implementation strategies that respect patient autonomy while enabling beneficial AI deployment across the care continuum.',
      explanation: `## Philosophical Foundations

**Consent Theory Applied to AI:**
- **Liberal tradition:** Consent as protection of autonomy
- **Relational autonomy:** Recognition of social context
- **Epistemic considerations:** What understanding is required for valid consent?

**The Explanation Problem:**
- Can complex AI be explained sufficiently for informed consent?
- What constitutes "adequate" understanding?
- Paradox: Simple explanations may oversimplify; complex ones overwhelm

**Contestability Framework:**
Beyond consent, patients may need:
1. Ability to understand AI decisions
2. Mechanisms to challenge AI recommendations
3. Access to human review
4. Remediation pathways

## Advanced Regulatory Analysis

**FDA Framework for AI/ML:**
| Category | Requirements | Consent Implications |
|----------|--------------|---------------------|
| CADe (detection) | 510(k)/De Novo | Disclose AI involvement |
| CADx (diagnosis) | Higher scrutiny | Explain role in diagnosis |
| Autonomous | PMA typically | Comprehensive consent |
| Continuously learning | PCCP required | Dynamic consent considerations |

**International Comparison:**
- **US:** Device-focused, limited consent requirements
- **EU:** Patient rights-focused, GDPR and AI Act
- **UK:** NICE evidence standards, NHS AI Lab guidance
- **Australia:** TGA framework, privacy principles

**Emerging Standards:**
- IEEE standards for AI transparency
- ISO TC 215 health informatics standards
- HL7 FHIR for AI documentation
- Coalition for Health AI guidelines

## Data Governance Deep Dive

**Consent for AI Training Data:**
\`\`\`
Key Questions:
1. Was consent obtained for current use?
2. Does existing consent cover AI training?
3. Is re-consent feasible or necessary?
4. Are de-identification standards sufficient?
\`\`\`

**HIPAA Analysis:**
- 45 CFR 164.514: De-identification standards
- Safe harbor vs. expert determination
- Limited datasets with data use agreements
- Authorization requirements for research

**Common Rule Implications:**
- 45 CFR 46: Human subjects research
- When does AI development constitute research?
- Waiver of consent criteria
- Institutional review board oversight

## Vulnerable Populations

**Pediatric Considerations:**
- Parent/guardian consent
- Assent from older children
- AI explanations appropriate for age
- Long-term data use implications

**Cognitive Impairment:**
- Surrogate decision-makers
- Assessment of capacity
- Fluctuating capacity considerations
- Best interest standards

**Emergency Settings:**
- Deferred consent mechanisms
- Community consultation
- Waiver of consent requirements
- Retrospective notification

## Implementation Science

**Organizational Readiness:**
\`\`\`
Assessment Domains:
1. Leadership commitment
2. Staff AI literacy
3. Technical infrastructure
4. Documentation capabilities
5. Patient engagement resources
6. Monitoring systems
\`\`\`

**Change Management:**
- Stakeholder engagement
- Workflow analysis
- Training programs
- Continuous improvement

**Quality Metrics:**
| Metric | Measurement | Target |
|--------|-------------|--------|
| Disclosure rate | % patients informed | >95% |
| Understanding | Comprehension assessment | Adequate per checklist |
| Satisfaction | Patient surveys | Maintained baseline |
| Opt-out rate | Tracking system | Monitored (not minimized) |

## Emerging Challenges

**Large Language Models:**
- Ubiquitous deployment concerns
- Difficult to disclose all uses
- Consent fatigue risk
- Dynamic capability expansion

**Ambient Clinical Intelligence:**
- AI in documentation, monitoring
- Continuous presence
- Consent for ongoing observation
- Privacy in clinical spaces

**AI-to-AI Communication:**
- Multiple AI systems interacting
- Complexity of explaining interactions
- Attribution of decisions
- Consent for system-level AI

## Ethical Framework Application

**Principle-Based Analysis:**
| Principle | AI Consent Application |
|-----------|----------------------|
| Autonomy | Meaningful choice about AI involvement |
| Beneficence | Ensuring access to beneficial AI |
| Non-maleficence | Protecting from AI harms |
| Justice | Equitable consent processes |

**Case-Based Reasoning:**
- Analogies to other consent contexts
- Precedents from research ethics
- Professional guidance documents
- Institutional experience

## Documentation and Governance

**Policy Components:**
1. Inventory of AI systems
2. Risk categorization scheme
3. Consent requirements by category
4. Standard disclosure language
5. Documentation requirements
6. Audit procedures
7. Review and update process

**Legal Considerations:**
- Liability for AI errors
- Documentation of consent
- Malpractice implications
- Insurance coverage`,
      keyTerms: [
        { term: 'contestability', definition: 'The ability of patients to challenge, review, and seek remedy for AI-influenced decisions' },
        { term: 'predetermined change control plan (PCCP)', definition: 'FDA framework for managing updates to AI/ML devices, affecting consent for learning systems' },
        { term: 'ambient clinical intelligence', definition: 'AI systems that continuously operate in clinical environments for documentation and monitoring' },
        { term: 'Common Rule', definition: 'Federal regulations (45 CFR 46) governing human subjects research, relevant to AI training on patient data' },
        { term: 'relational autonomy', definition: 'Ethical framework recognizing that patient decisions occur within social relationships and contexts' },
        { term: 'deferred consent', definition: 'Consent obtained after initial AI use in emergency situations where prospective consent was not possible' },
      ],
      clinicalNotes: 'Develop institutional policies that categorize AI systems by risk and specify appropriate consent procedures for each category. Create standardized documentation templates and train staff on their use. Establish governance structures for ongoing review.',
    },
    5: {
      level: 5,
      summary: 'Expert leadership in AI consent requires synthesis of bioethics, law, technology, and implementation science to develop adaptive frameworks that protect patient rights while enabling innovation, with attention to evolving AI capabilities, international harmonization, and system-level governance.',
      explanation: `## Theoretical Synthesis

**Beyond Individual Consent:**
Traditional consent models assume:
- Discrete decisions
- Identifiable decision points
- Clear benefit/risk profiles
- Patient understanding

AI challenges each assumption:
- Continuous, integrated AI presence
- Algorithmic decisions difficult to isolate
- Uncertain, evolving benefit/risk
- Explanation challenges

**Proposed Framework Evolution:**
| Traditional | AI-Adapted |
|-------------|------------|
| Event-based consent | Relationship-based consent |
| Individual decision | System-level governance |
| One-time agreement | Dynamic, updateable preferences |
| Binary (consent/refuse) | Graduated involvement options |

**Trust-Based Approaches:**
- Fiduciary obligations of institutions
- AI as extension of provider duty
- Governance as proxy for individual consent
- Accountability structures as consent alternative

## Research Evidence

**Empirical Studies on AI Consent:**
\`\`\`
Key Findings (Literature Synthesis):
1. Patient awareness of AI use is low (typically <30%)
2. Most patients want to be informed about AI
3. Complex explanations reduce understanding
4. Trust in institution affects acceptance
5. Opt-out rates typically low when offered
6. Preferences vary by AI application type
\`\`\`

**Evidence Gaps:**
- Long-term consent preferences
- Impact of consent on AI acceptance
- Optimal disclosure methods
- Cultural variation in preferences
- Pediatric-specific evidence

## International Harmonization

**Comparative Analysis:**
| Domain | US | EU | UK | Canada |
|--------|----|----|----|----|
| Primary regulation | FDA, HIPAA | GDPR, AI Act, MDR | UK GDPR, MHRA | PIPEDA, Health Canada |
| AI-specific rules | Limited | Extensive | Developing | Developing |
| Consent standard | Varies | Explicit for automated decisions | Varies | Varies |
| Enforcement | Device-focused | Rights-focused | Mixed | Mixed |

**Harmonization Efforts:**
- Global Harmonization Working Party
- International Medical Device Regulators Forum
- G7 AI principles
- WHO AI ethics guidance

## System-Level Governance

**Institutional AI Governance:**
\`\`\`
Governance Structure:
├── AI Oversight Committee
│   ├── Clinical representatives
│   ├── IT/Data science
│   ├── Ethics
│   ├── Legal/Compliance
│   ├── Patient representatives
│   └── Administration
├── Consent Review Process
│   ├── Risk categorization
│   ├── Disclosure requirements
│   ├── Documentation standards
│   └── Monitoring requirements
└── Continuous Improvement
    ├── Patient feedback
    ├── Outcome monitoring
    ├── Regulatory updates
    └── Technology evolution
\`\`\`

**Policy Framework:**
1. **AI Inventory:** Comprehensive registry of AI systems
2. **Risk Stratification:** Framework for categorizing AI by risk
3. **Consent Requirements:** Matched to risk level
4. **Standard Language:** Pre-approved disclosure templates
5. **Training:** Staff competency requirements
6. **Documentation:** EHR integration requirements
7. **Monitoring:** Ongoing compliance tracking
8. **Review:** Regular policy updates

## Future Directions

**Technological Developments:**
- Explainable AI (XAI) for consent
- AI-assisted consent processes
- Natural language explanation generation
- Personalized consent information

**Research Priorities:**
1. Optimal consent models for different AI types
2. Methods to assess patient understanding
3. Long-term preference stability
4. Impact on health outcomes
5. Cost-effectiveness of consent approaches

**Policy Evolution:**
- Anticipate EU AI Act implementation
- FDA guidance on consent
- State-level legislation trends
- Voluntary standards adoption

## Leadership Recommendations

**Immediate Actions:**
1. Inventory current AI use
2. Assess consent practices against framework
3. Develop institutional policy
4. Train clinical staff
5. Create patient education materials
6. Establish monitoring system

**Strategic Initiatives:**
1. Build governance infrastructure
2. Engage patients in policy development
3. Contribute to national standards
4. Research effective consent approaches
5. Advocate for appropriate regulation

**Organizational Culture:**
- Embed transparency values
- Support questioning of AI
- Value patient preferences
- Learn from consent challenges
- Share best practices

## Emerging Paradigms

**Consent and Foundation Models:**
- Ubiquity challenges notification
- Embedded in many applications
- Consent for general vs. specific use
- Training data consent implications

**AI Companions and Longitudinal Care:**
- Ongoing AI relationships
- Evolving capabilities
- Consent maintenance
- Relational considerations

**Collective Consent:**
- Population-level AI decisions
- Community consultation models
- Representative governance
- Solidarity approaches

## Practical Implementation Toolkit

**Disclosure Script Example:**
\`\`\`
"At our hospital, we use advanced computer programs
called artificial intelligence to help provide better care.
For example, AI helps analyze imaging studies and may flag
areas for your doctor to review closely. Your doctor always
makes the final decisions about your care. We want you to
know about these tools. Do you have any questions about
how AI is used in your care?"
\`\`\`

**Documentation Checklist:**
□ AI use disclosed to patient
□ Patient given opportunity to ask questions
□ Questions answered to patient satisfaction
□ Patient preference documented
□ Opt-out request (if applicable) documented
□ Follow-up information provided (if requested)`,
      keyTerms: [
        { term: 'fiduciary governance', definition: 'Institutional responsibility model where organizations hold trustee-like duties regarding AI use on behalf of patients' },
        { term: 'foundation models', definition: 'Large AI models (like GPT) trained on broad data, posing unique consent challenges due to ubiquity and capability breadth' },
        { term: 'collective consent', definition: 'Consent frameworks for AI decisions affecting populations rather than individuals' },
        { term: 'explainable AI (XAI)', definition: 'AI systems designed to provide human-understandable explanations of their decisions' },
        { term: 'solidarity approach', definition: 'Ethical framework emphasizing shared responsibility and benefit in data/AI governance' },
        { term: 'dynamic consent platform', definition: 'Digital systems enabling patients to view, modify, and track their consent preferences over time' },
      ],
      clinicalNotes: `Strategic Implementation Priorities:
1. Establish cross-functional AI governance committee
2. Develop tiered consent framework matched to AI risk levels
3. Create standardized, validated disclosure language
4. Build patient-facing transparency tools (portal features)
5. Implement training for all clinical staff
6. Design monitoring systems for consent compliance
7. Engage patient advisory groups in policy development
8. Plan for regulatory evolution (especially EU AI Act implications)
9. Consider certification/accreditation opportunities
10. Contribute to emerging standards development`,
    },
  },

  media: [
    {
      id: 'consent-framework',
      type: 'diagram',
      filename: 'consent-framework.svg',
      title: 'AI Consent Framework',
      description: 'Comprehensive framework for AI consent in healthcare settings',
    },
    {
      id: 'consent-levels',
      type: 'diagram',
      filename: 'consent-levels.svg',
      title: 'Tiered Consent Approach',
      description: 'Diagram showing different levels of disclosure and consent for various AI applications',
    },
    {
      id: 'regulatory-landscape',
      type: 'diagram',
      filename: 'ai-consent-regulations.svg',
      title: 'AI Consent Regulatory Landscape',
      description: 'Overview of key regulations affecting AI consent in healthcare across jurisdictions',
    },
  ],

  citations: [
    {
      id: 'cohen-consent-2020',
      type: 'article',
      title: 'Informed Consent and Medical Artificial Intelligence: What to Tell the Patient?',
      authors: ['Cohen IG', 'Mello MM'],
      source: 'Georgetown Law Journal',
      url: 'https://www.law.georgetown.edu/georgetown-law-journal/',
    },
    {
      id: 'gdpr-article22',
      type: 'website',
      title: 'General Data Protection Regulation Article 22',
      source: 'Official Journal of the European Union',
      url: 'https://gdpr-info.eu/art-22-gdpr/',
    },
    {
      id: 'who-ai-ethics',
      type: 'article',
      title: 'Ethics and Governance of Artificial Intelligence for Health',
      authors: ['World Health Organization'],
      source: 'WHO',
      url: 'https://www.who.int/publications/i/item/9789240029200',
    },
  ],

  crossReferences: [
    { targetId: 'ai-ethics-algorithmic-bias', targetType: 'concept', relationship: 'sibling', label: 'Algorithmic Bias' },
    { targetId: 'informed-consent-what-it-means', targetType: 'concept', relationship: 'related', label: 'Informed Consent' },
    { targetId: 'patient-privacy', targetType: 'concept', relationship: 'related', label: 'Patient Privacy' },
  ],

  tags: {
    systems: ['healthcare-technology', 'artificial-intelligence'],
    topics: ['ethics', 'informed-consent', 'patient-rights', 'privacy', 'regulation'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: false,
      nbme: false,
      shelf: [],
    },
  },

  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default patientConsent;
