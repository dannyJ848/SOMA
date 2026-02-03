import { EducationalContent } from '../../types';

export const onlineHealthInfo: EducationalContent = {
  id: 'online-health-info',
  type: 'concept',
  name: 'Evaluating Online Health Information',
  alternateNames: ['Internet Health Information', 'Digital Health Literacy', 'Online Health Resources', 'Health Information Quality'],
  
  levels: {
    1: {
      level: 1,
      summary: 'How to find trustworthy health information online and avoid misleading websites.',
      explanation: `The internet has lots of health information, but not all of it is accurate or trustworthy. To find good information, look for websites from well-known health organizations, government sites, and established medical centers. Be careful of sites trying to sell products, sites with no author information, or information that seems too good to be true. Always talk to your doctor about health information you find online.`,
      keyTerms: [
        { term: 'credible source', definition: 'A trustworthy and reliable place to get information' },
        { term: '.gov', definition: 'Websites run by government organizations, usually reliable' },
        { term: '.edu', definition: 'Websites from educational institutions like universities' }
      ],
      analogies: [
        'Choosing food at a grocery store: Like checking food labels and expiration dates to choose safe, healthy food, you should check website sources and dates to choose reliable health information'
      ],
      examples: [
        'Trustworthy: CDC.gov, MayoClinic.org, NIH.gov',
        'Warning signs: Sites selling miracle cures, sites with lots of spelling errors, sites without dates',
        'Always verify online information with your healthcare provider'
      ]
    },
    2: {
      level: 2,
      summary: 'Strategies for evaluating the credibility, accuracy, and currency of online health information from various sources.',
      explanation: `Evaluating online health information requires critical assessment of sources, content quality, and potential biases. Learning to identify trustworthy resources helps you make better health decisions and have more productive conversations with healthcare providers.

Signs of trustworthy health websites:

Source credibility:
- Government health agencies (CDC, NIH, FDA, WHO)
- Recognized medical institutions (Mayo Clinic, Cleveland Clinic)
- Professional medical organizations (American Heart Association)
- Academic medical centers
- Peer-reviewed medical journals

Quality indicators:
- Author credentials clearly displayed
- Medical review by qualified professionals
- Dates showing when content was written and updated
- References to scientific research
- Privacy policy protecting your information
- Contact information available
- Professional website design

Warning signs of unreliable information:

Red flags:
- Promises of miracle cures or quick fixes
- Claims that sound too good to be true
- Personal testimonials instead of scientific evidence
- Claims that one product cures many different diseases
- Secret formulas or ingredients
- Attacks on established medical treatments
- Grammar and spelling errors throughout
- No information about who runs the site
- No dates on articles
- Aggressive sales tactics

Domain indicators:
- .gov: Government sites, generally reliable
- .edu: Educational institutions, usually credible
- .org: Non-profit organizations, evaluate individually
- .com: Commercial sites, may have profit motives

Finding reliable information:

Search strategies:
- Use specific medical terms
- Include site:.gov or site:.edu in search
- Look for recent information
- Check multiple sources for consistency
- Use medical library resources

Evaluating research studies:
- Was study published in peer-reviewed journal?
- How many people were in the study?
- Was there a control group?
- Who funded the research?
- Have other studies found similar results?

When to be extra careful:
- Information about serious diseases
- Treatment decisions
- Medication information
- Supplement and alternative medicine claims
- Vaccine information
- Weight loss products
- Mental health treatments

Discussing online information with doctors:
- Print or save relevant pages
- Note the website and date accessed
- Ask specific questions about the information
- Be open to your doctor\'s perspective
- Use information to enhance, not replace, medical advice`,
      keyTerms: [
        { term: 'peer-reviewed', definition: 'Content evaluated by experts before publication' },
        { term: 'bias', definition: 'Prejudice in favor of or against one thing, person, or group' },
        { term: 'primary source', definition: 'Original research or first-hand documentation' },
        { term: 'secondary source', definition: 'Information that summarizes or interprets primary sources' },
        { term: 'conflict of interest', definition: 'Situation where personal interests could affect professional judgment' },
        { term: 'anecdotal evidence', definition: 'Evidence based on personal stories rather than systematic research' }
      ],
      analogies: [
        'Detective work: Like a detective checking multiple sources and looking for evidence to solve a case, you should verify health information across multiple trusted sources before making decisions'
      ],
      examples: [
        'Good source: A Mayo Clinic article about diabetes management written by endocrinologists, reviewed in 2023, with references to research studies',
        'Concerning source: A blog promising to cure diabetes with a secret herbal formula, no author credentials, lots of testimonials, selling the product',
        'Verifying claims: Finding multiple peer-reviewed studies supporting a treatment mentioned online vs. finding only one old study with small sample size'
      ]
    },
    3: {
      level: 3,
      summary: 'A comprehensive framework for critically evaluating digital health information, understanding health misinformation, and leveraging online resources for health management.',
      explanation: `Digital health literacy encompasses the ability to seek, find, understand, and appraise health information from electronic sources and apply knowledge to address health problems. This skill is increasingly essential as more health information and services move online.

Information Quality Frameworks:

DISCERN instrument criteria:
- Are aims clear and achieved?
- Are sources of information clear?
- Is information balanced and unbiased?
- Are additional sources of support listed?
- Are areas of uncertainty mentioned?
- Is it clear when information was produced?
- Does it describe benefits of each treatment?
- Does it describe risks of each treatment?
- Does it describe what would happen without treatment?

HONcode principles (Health on the Net):
- Authority: Medical advice only from qualified professionals
- Complementarity: Information supports, not replaces, doctor-patient relationship
- Privacy: Respect for privacy of site users
- Attribution: Citation of source and date of information
- Justifiability: Claims backed by evidence
- Transparency: Clear authorship and ownership
- Financial disclosure: Identification of funding sources
- Advertising: Clear distinction between content and advertising

Types of Online Health Resources:

Health information websites:
- Consumer health libraries (MedlinePlus, Healthfinder)
- Disease-specific organizations (American Cancer Society, Diabetes Association)
- Medical encyclopedias and decision support tools
- Symptom checkers (with limitations understood)

Online communities:
- Patient support groups and forums
- Social media health communities
- Benefits: Peer support, shared experiences
- Risks: Misinformation, cyberchondria, privacy concerns

Telemedicine and digital health:
- Virtual visits with healthcare providers
- Remote patient monitoring
- Mobile health applications
- Wearable devices and sensors
- Online prescription services

Health Misinformation:

Types of misinformation:
- False connection: Unrelated headlines, captions, or visuals
- False context: Genuine content shared with false contextual information
- Manipulated content: Genuine information or imagery manipulated to deceive
- Fabricated content: 100% false, designed to deceive and do harm
- Imposter content: Impersonation of genuine sources
- Misleading content: Misleading use of information to frame issues

Why misinformation spreads:
- Cognitive biases (confirmation bias, availability heuristic)
- Emotional appeal (fear, hope, anger)
- Social proof and repetition
- Algorithmic amplification
- Trust in personal networks over institutions
- Information overload and complexity

Combating misinformation:
- Fact-checking organizations (Snopes, FactCheck.org)
- Pre-bunking and inoculation strategies
- Lateral reading (checking other sources)
- Source evaluation skills
- Media literacy education

Evaluating Mobile Health Apps:

FDA oversight:
- Apps that function as medical devices
- Wellness apps vs. diagnostic apps
- Software as medical device (SaMD)
- Enforcement discretion policies

App evaluation frameworks:
- Purpose: What does app claim to do?
- Evidence: Is there research supporting effectiveness?
- Privacy: What data is collected and how is it used?
- Security: How is data protected?
- Usability: Is app easy to use?
- Accessibility: Can people with disabilities use it?

Professional evaluation resources:
- APA App Evaluation Model
- IMS Health AppScript
- Health Navigator App Library
- NHS App Library
- ORCHA ( Organisation for the Review of Care and Health Apps)

Privacy and Security:

HIPAA considerations:
- Covered entities and business associates
- Health apps and HIPAA applicability
- De-identification standards
- Breach notification requirements

Personal data protection:
- Reading privacy policies
- Understanding data sharing practices
- Consent mechanisms
- Data portability and deletion rights
- Cross-border data transfers

Digital Health Ethics:

Algorithmic bias:
- Training data representativeness
- Fairness across demographic groups
- Health equity implications
- Transparency and explainability

Informed consent in digital contexts:
- Terms of service complexity
- Data use beyond original purpose
- Secondary research uses
- Withdrawal of consent

Digital divide considerations:
- Access disparities (broadband, devices)
- Health literacy and digital literacy interactions
- Age-related disparities
- Socioeconomic factors
- Rural vs urban access`,
      keyTerms: [
        { term: 'digital health literacy', definition: 'Ability to seek, find, understand, and appraise health information from electronic sources' },
        { term: 'health misinformation', definition: 'Health-related information that is false, inaccurate, or misleading' },
        { term: 'cyberchondria', definition: 'Excessive health anxiety caused by online searches about symptoms' },
        { term: 'lateral reading', definition: 'Fact-checking technique involving leaving website to verify credibility' },
        { term: 'algorithmic bias', definition: 'Systematic errors in computer systems that create unfair outcomes' },
        { term: 'pre-bunking', definition: 'Warning people about misinformation techniques before exposure' }
      ]
    },
    4: {
      level: 4,
      summary: 'Advanced evaluation of digital health resources, including clinical decision support tools, patient-generated health data, and integration with evidence-based practice.',
      explanation: `Sophisticated navigation of digital health resources requires understanding of evidence hierarchies, clinical informatics principles, and the appropriate integration of digital tools into healthcare decision-making. Advanced evaluation encompasses both individual and population-level digital health applications.

Evidence Hierarchies for Digital Health:

Levels of evidence:
1. Systematic reviews of RCTs of digital health interventions
2. Individual RCTs with low risk of bias
3. Controlled observational studies
4. Uncontrolled observational studies
5. Expert opinion, case reports

Digital-specific considerations:
- Digital placebo effects
- Engagement and adherence challenges
- Rapid technology obsolescence
- Context dependency
- Implementation fidelity

Clinical Decision Support Systems:

Types of CDSS:
- Knowledge-based: Rules, logic, evidence
- Non-knowledge-based: Machine learning, neural networks
- Active: Interruptive alerts and reminders
- Passive: Reference information and guidelines

Integration with electronic health records:
- Order sets and protocols
- Drug-drug interaction checking
- Allergy alerts
- Clinical guidelines at point of care
- Diagnostic support

Evaluation frameworks:
- Technology Acceptance Model
- Unified Theory of Acceptance and Use of Technology
- Human-Computer Interaction principles
- Usability testing methodologies
- Clinical workflow integration

Patient-Generated Health Data (PGHD):

Sources of PGHD:
- Wearable devices (fitness trackers, smartwatches)
- Home monitoring devices (blood pressure, glucose)
- Patient-reported outcomes (symptoms, quality of life)
- Mobile health app data
- Patient portal entries

Integration challenges:
- Data validity and accuracy
- Volume and velocity of data
- Interoperability standards (HL7 FHIR)
- Clinical workflow integration
- Provider burden and alert fatigue
- Reimbursement and liability

Clinical utility:
- Chronic disease management
- Remote patient monitoring
- Post-acute care surveillance
- Wellness and prevention
- Clinical trial outcomes

Artificial Intelligence in Health Information:

Natural language processing:
- Clinical note analysis
- Patient portal message triage
- Social media health surveillance
- Clinical question answering
- Text simplification for health literacy

Machine learning applications:
- Diagnostic imaging interpretation
- Risk prediction models
- Personalized treatment recommendations
- Drug discovery
- Population health analytics

Chatbots and conversational agents:
- Symptom checking
- Mental health support
- Medication adherence coaching
- Health education
- Limitations and safety concerns

Consumer Health Informatics:

Personal health records:
- Tethered (provider-connected)
- Untethered (patient-controlled)
- Interoperability challenges
- Data liquidity
- Patient activation benefits

Health information seeking behavior:
- Search patterns and health topics
- Trust and credibility assessment
- Social media influence
- Health literacy interactions
- Cultural and linguistic factors

Online health communities:
- Peer support mechanisms
- Information sharing norms
- Moderation and quality control
- Privacy and anonymity
- Integration with clinical care

Quality Improvement and Research:

Digital health evaluation:
- RE-AIM framework adaptation
- Implementation science methods
- Pragmatic clinical trials
- Rapid cycle evaluation
- Real-world evidence generation

Patient engagement measurement:
- eHealth Literacy Scale (eHEALS)
- Digital health engagement metrics
- Patient activation measures
- Technology acceptance measures
- Usability scales (SUS, PSSUQ)

Ethical research considerations:
- Informed consent for digital data
- Privacy and confidentiality
- Algorithmic transparency
- Data sharing and ownership
- Return of results`,
      keyTerms: [
        { term: 'clinical decision support', definition: 'Health information technology that provides clinicians with knowledge and person-specific information' },
        { term: 'patient-generated health data', definition: 'Health-related data created, recorded, or gathered by patients or caregivers' },
        { term: 'HL7 FHIR', definition: 'Fast Healthcare Interoperability Resources - standard for exchanging healthcare information electronically' },
        { term: 'natural language processing', definition: 'AI technology analyzing and understanding human language' },
        { term: 'alert fatigue', definition: 'Desensitization to alerts due to excessive numbers of warnings' },
        { term: 'data liquidity', definition: 'Ability of data to flow throughout the healthcare system' }
      ],
      clinicalNotes: `Clinical Pearl: When patients bring online health information to appointments, use it as an opportunity for shared decision-making rather than dismissing it. Acknowledge their engagement, evaluate the information together, and guide them toward reliable sources for future searches.

Addressing Cyberchondria: Patients with excessive health anxiety from online searching may benefit from:
- Setting boundaries on search frequency
- Using structured decision aids instead of open-ended searches
- Behavioral health referral when anxiety is impairing
- Scheduled follow-up to address concerns rather than episodic urgent visits
- Education on uncertainty tolerance

Documentation Considerations:
- Note when patient decisions are influenced by online information
- Record discussions about internet health information quality
- Document recommendations for reliable resources
- Track patient portal engagement as relevant to care
- Note use of patient-generated data in clinical decisions`
    },
    5: {
      level: 5,
      summary: 'Expert analysis of the digital health ecosystem, including policy frameworks, global health applications, emerging technologies, and the transformation of health communication.',
      explanation: `The digital transformation of health information represents a fundamental shift in how health knowledge is created, distributed, and consumed. Expert-level understanding requires analysis of policy, technology, ethics, and the societal implications of democratized health information.

Policy and Regulatory Landscape:

FDA digital health oversight:
- Software as Medical Device (SaMD) framework
- Clinical Decision Support Software guidance
- Artificial Intelligence/Machine Learning-based SaMD
- Digital Therapeutics regulation
- Pre-certification pilot program

International regulation:
- European MDR for medical device software
- Health Canada guidance on digital health
- Australia TGA software as medical device
- WHO digital health guidelines
- Cross-border data flow regulations

Health data governance:
- 21st Century Cures Act information blocking
- HIPAA modernization discussions
- Consumer privacy legislation (GDPR, CCPA)
- Data portability requirements
- Consent management frameworks

Digital Public Health:

Infodemiology:
- Monitoring online health information trends
- Disease surveillance through search patterns
- Social media outbreak detection
- Vaccine sentiment monitoring
- Misinformation tracking

Digital health interventions:
- Text message health programs
- Social media health campaigns
- Gamification for health behavior
- Virtual reality for health education
- Chatbot population health programs

Health equity in digital health:
- Digital redlining concerns
- Algorithmic fairness
- Accessibility requirements
- Linguistic diversity
- Community-based participatory approaches

Global Health and Digital Transformation:

Low-resource settings:
- Mobile health (mHealth) innovations
- Telemedicine for specialist access
- Community health worker support tools
- Offline-capable applications
- Solar-powered devices

Digital divide strategies:
- Community technology centers
- Mobile-first design
- Low-bandwidth applications
- Text-based (SMS) interventions
- Radio and television integration

Digital health diplomacy:
- WHO digital health strategy
- Global Digital Health Partnership
- Standard harmonization efforts
- Capacity building initiatives
- Technology transfer agreements

Emerging Technologies:

Blockchain in healthcare:
- Distributed health records
- Supply chain integrity
- Clinical trial verification
- Credentialing and verification
- Smart contracts for payments

Internet of Medical Things (IoMT):
- Connected medical devices
- Remote monitoring ecosystems
- Smart home health integration
- Edge computing for health
- 5G-enabled healthcare

Extended reality (XR):
- Virtual reality therapy
- Augmented reality surgery
- Mixed reality medical education
- Pain management applications
- Exposure therapy

Quantum computing applications:
- Drug discovery simulation
- Genomic data analysis
- Medical image processing
- Optimization problems in healthcare
- Cryptography and security

Health Communication Science:

Risk communication:
- Message framing effects
- Numeracy and risk comprehension
- Visual risk communication
- Cultural risk perception
- Trust and credibility factors

Behavior change theories:
- Social cognitive theory
- Theory of planned behavior
- Fogg Behavior Model
- COM-B model
- Implementation intentions

Message design:
- Tailoring and personalization
- Narrative persuasion
- Gain vs loss framing
- Source effects
- Channel selection

Future Directions:

Metaverse and health:
- Virtual healthcare environments
- Digital twins for health simulation
- Virtual support communities
- Telepresence consultations
- Ethical and privacy considerations

Brain-computer interfaces:
- Assistive communication
- Neuroprosthetics
- Cognitive enhancement
- Privacy of thought
- Regulatory challenges

Synthetic media and health:
- Deepfakes in health misinformation
- Synthetic patient data generation
- Virtual health influencers
- Authentication technologies
- Media literacy evolution

Research Frontiers:

Computational social science:
- Large-scale health behavior analysis
- Social network health influence
- Natural experiments in digital health
- Agent-based modeling
- Systems dynamics approaches

Human-centered design:
- Participatory design with patients
- Design justice in health technology
- Accessibility and universal design
- Trauma-informed design
- Equity-centered design

Implementation science:
- Digital health scale-up
- Sustainability research
- De-implementation of ineffective technologies
- Context adaptation
- Economic evaluation methods`,
      keyTerms: [
        { term: 'infodemiology', definition: 'Study of distribution and determinants of information in electronic media' },
        { term: 'digital therapeutics', definition: 'Evidence-based therapeutic interventions delivered through software' },
        { term: 'software as medical device', definition: 'Software intended for medical purposes without being part of hardware medical device' },
        { term: 'information blocking', definition: 'Practices that interfere with access, exchange, or use of electronic health information' },
        { term: 'digital redlining', definition: 'Discrimination in digital services based on demographics or geography' },
        { term: 'edge computing', definition: 'Processing data near the source rather than in centralized cloud' }
      ],
      clinicalNotes: `Systems Leadership: Healthcare organizations should advance digital health literacy through:
- Digital health literacy programs for patients
- Provider training on discussing online health information
- Curated lists of reliable online resources
- Patient portal optimization
- Telehealth access initiatives
- Digital health equity programs
- Misinformation response protocols

Research and Policy Engagement: Opportunities for advancing digital health:
- Participate in digital health validation studies
- Study health misinformation spread and countermeasures
- Evaluate AI health tools for bias and effectiveness
- Contribute to digital health policy development
- Study digital divide interventions
- Advance health communication science

Ethical Leadership: Professional responsibility in digital health:
- Advocate for algorithmic transparency and fairness
- Promote patient data rights and control
- Address digital health equity gaps
- Support evidence-based digital health adoption
- Combat health misinformation professionally
- Mentor patients in digital health literacy`
    }
  },
  
  media: [],
  
  citations: [
    { id: 'eysenbach-2011', type: 'article', title: 'Infodemiology and infoveillance: framework for an emerging set of public health informatics methods', authors: ['Eysenbach G'], source: 'American Journal of Preventive Medicine' },
    { id: 'diviani-2015', type: 'article', title: 'Low health literacy and evaluation of online health information', authors: ['Diviani N'], source: 'Journal of Medical Internet Research' },
    { id: 'singh-2016', type: 'article', title: 'The patient perspective: engaging patients in the development of mobile health applications', authors: ['Singh K'], source: 'Journal of Mobile Technology in Medicine' },
    { id: 'gottlieb-2017', type: 'article', title: 'The FDA Digital Health Innovation Action Plan', authors: ['Gottlieb S'], source: 'FDA Publication' }
  ],
  
  crossReferences: [
    { targetId: 'reading-medication-labels', targetType: 'concept', relationship: 'related' },
    { targetId: 'interpreting-test-results', targetType: 'concept', relationship: 'related' },
    { targetId: 'ask-me-3', targetType: 'concept', relationship: 'see-also' },
    { targetId: 'teach-back-method', targetType: 'concept', relationship: 'see-also' }
  ],
  
  tags: {
    systems: ['health-system'],
    topics: ['patient-education'],
    keywords: ['online health information', 'digital health literacy', 'health misinformation', 'internet health', 'health websites', 'mobile health apps']
  },
  
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
