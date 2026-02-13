import { EducationalContent } from '../../types';

export const sharedDecisionMaking: EducationalContent = {
  id: 'shared-decision-making',
  type: 'concept',
  name: 'Shared Decision Making',
  alternateNames: ['SDM', 'Collaborative Decision Making', 'Informed Choice', 'Patient-Centered Decision Making'],
  
  levels: {
    1: {
      level: 1,
      summary: 'Working together with your doctor to make healthcare decisions that are right for you.',
      explanation: `Shared decision making means you and your doctor work as a team to make health choices. Your doctor provides medical information and options, while you share your preferences, values, and concerns. Together, you choose the treatment that fits your life and goals best.`,
      keyTerms: [
        { term: 'shared decision making', definition: 'A process where patients and providers make health decisions together' }
      ],
      analogies: [
        'Like planning a vacation where a travel agent suggests destinations and options, but you decide based on what you want from the trip'
      ],
      examples: [
        'Choosing between surgery and physical therapy for back pain',
        'Deciding whether to start medication or try lifestyle changes first for high blood pressure'
      ]
    },
    2: {
      level: 2,
      summary: 'A collaborative process where patients and healthcare providers work together to make informed decisions aligned with patient values.',
      explanation: `Shared decision making (SDM) is a process where healthcare providers and patients collaborate to make decisions about medical tests, treatments, and care plans. It combines the provider\'s medical expertise with the patient\'s knowledge of their own values, preferences, and circumstances.

Key elements of shared decision making:

1. Information sharing:
   - Provider explains the health condition and options
   - Risks and benefits of each option are discussed
   - Uncertainty is acknowledged when evidence is unclear

2. Deliberation:
   - Patient expresses preferences and concerns
   - Provider asks about patient\'s goals and values
   - Both discuss how options fit with patient\'s life

3. Decision:
   - Patient and provider agree on the best option
   - Patient feels supported in their choice
   - Plan is made for next steps

When shared decision making is especially important:
- Multiple treatment options with different trade-offs
- No single "best" choice for everyone
- Decisions about screening tests
- End-of-life care choices
- Elective surgeries or procedures

Benefits of shared decision making:
- Better informed patients
- Decisions aligned with personal values
- Improved satisfaction with care
- Better adherence to treatment plans
- Reduced decision regret`,
      keyTerms: [
        { term: 'shared decision making', definition: 'A collaborative process allowing patients and their providers to make healthcare decisions together' },
        { term: 'informed consent', definition: 'Permission given with full knowledge of risks and benefits' },
        { term: 'patient preference', definition: 'The choices patients make based on their values and circumstances' },
        { term: 'decision regret', definition: 'Distress or remorse about a decision after seeing its consequences' }
      ],
      analogies: [
        'An architect brings expertise in design and engineering, but you decide what kind of house you want based on how you live, your budget, and your style preferences'
      ],
      examples: [
        'Prostate cancer treatment: Active surveillance vs surgery vs radiation - each has different side effect profiles that matter differently to different men',
        'Knee osteoarthritis: Physical therapy, injections, or knee replacement - depends on pain tolerance, activity goals, and willingness to undergo surgery',
        'Statins for heart disease prevention: Weighing pill burden and potential side effects vs cardiovascular risk reduction'
      ]
    },
    3: {
      level: 3,
      summary: 'A structured, evidence-based approach to healthcare decision-making that integrates clinical expertise with patient values and preferences.',
      explanation: `Shared decision making is a cornerstone of patient-centered care, increasingly recognized as an ethical imperative and quality marker in healthcare. It represents a shift from paternalistic models to collaborative partnerships that respect patient autonomy while leveraging clinical expertise.

Theoretical Framework:

Evidence-based medicine integration:
- SDM combines best available evidence with clinical expertise and patient values
- Recognizes that evidence alone cannot determine the "right" choice for an individual
- Addresses preference-sensitive decisions where outcomes vary by patient priorities

Ethical foundation:
- Respects patient autonomy and self-determination
- Supports beneficence by ensuring decisions align with patient goals
- Promotes justice through equitable participation in decisions

Patient activation:
- Engages patients as active participants rather than passive recipients
- Builds health literacy through information exchange
- Develops self-efficacy for future health decisions

Implementation Components:

Decision support tools:
- Decision aids: Evidence-based materials describing options, outcomes, and probabilities
- Option grids: One-page summaries comparing alternatives
- Patient decision aids: Videos, websites, or booklets for deliberation
- Risk calculators: Personalized estimates of treatment benefits/harms

The SDM process:
1. Choice talk: Acknowledge that a decision needs to be made
2. Option talk: Describe available options using decision aids
3. Decision talk: Support deliberation and preference exploration
4. Decision: Reach agreement on the preferred option

Clinical applications:
- Preference-sensitive conditions: Prostate cancer screening, menopausal hormone therapy, elective surgery
- Chronic disease management: Treatment intensity decisions in diabetes, heart failure
- Screening decisions: Mammography, PSA testing, colonoscopy when guidelines offer options
- End-of-life care: CPR decisions, hospice enrollment, advance care planning

Provider competencies:
- Risk communication: Using natural frequencies, visual aids, and absolute risks
- Eliciting preferences: Open-ended questions about what matters most
- Supporting deliberation: Allowing time, involving family, addressing emotions
- Collaborative communication: Partnership language, checking understanding

Outcomes evidence:
- Improved patient knowledge and accurate risk perception
- Values-concordant choices
- Reduced decisional conflict
- Enhanced patient satisfaction and trust
- Better adherence to chosen treatments
- More appropriate healthcare utilization`,
      keyTerms: [
        { term: 'patient-centered care', definition: 'Healthcare that respects and responds to individual patient preferences, needs, and values' },
        { term: 'preference-sensitive decision', definition: 'A medical decision where reasonable people would choose differently based on their values' },
        { term: 'decision aid', definition: 'Evidence-based tools that help patients understand their options and the likely outcomes' },
        { term: 'decisional conflict', definition: 'Personal uncertainty about which course of action to take when choice involves risk, regret, or challenge to values' },
        { term: 'risk communication', definition: 'The open two-way exchange of information and opinion about risk between experts and the public' }
      ]
    },
    4: {
      level: 4,
      summary: 'A systematic approach to clinical decision-making integrating evidence synthesis, risk communication, and patient values assessment to achieve personalized healthcare decisions.',
      explanation: `Shared decision making represents the operationalization of patient-centered care principles in clinical practice, with formal recognition in clinical guidelines, quality metrics, and reimbursement policies. Its implementation requires structured approaches, decision support tools, and provider training.

Clinical Implementation:

Decision aid development:
- Systematic review of evidence for all options
- Quantitative outcome data using natural frequencies
- Visual representations of probabilities
- Patient testimonials representing different choices
- Values clarification exercises
- Certification by international standards (IPDAS)

Risk communication techniques:
- Natural frequencies ("10 out of 100 people") vs percentages
- Absolute vs relative risk presentations
- Visual aids: Icon arrays, bar charts, decision trees
- Framing effects: Presenting both positive and negative frames
- Personalized risk estimation using validated calculators

Patient preference assessment:
- Structured values clarification methods
- Discrete choice experiments
- Standardized gambles for utility assessment
- Multi-criteria decision analysis
- Narrative approaches exploring patient stories

Specialty applications:

Oncology:
- Adjuvant therapy decisions balancing survival benefit vs toxicity
- Palliative chemotherapy with limited benefit
- Genetic testing and prophylactic surgery (BRCA, Lynch syndrome)
- Clinical trial participation decisions

Cardiology:
- Anticoagulation in atrial fibrillation (stroke prevention vs bleeding risk)
- Revascularization decisions in stable coronary disease
- ICD implantation in heart failure
- Transcatheter aortic valve replacement candidacy

Orthopedics:
- Joint replacement timing and approach
- Conservative vs surgical management
- Prosthetic selection
- Rehabilitation intensity

Barriers and facilitators:
- Time constraints: Decision aids for pre-visit preparation
- Health literacy: Plain language and teach-back integration
- Cultural factors: Family involvement, communication norms
- Cognitive impairment: Surrogate decision-makers, simplified approaches
- Clinical uncertainty: Transparent communication of evidence gaps

Quality measurement:
- Decision quality: Knowledge, values concordance, decisional conflict
- Process measures: Decision aid delivery, SDM documentation
- Outcome measures: Decision regret, satisfaction, adherence
- Cost measures: Utilization, downstream healthcare costs

Integration with clinical workflows:
- Electronic health record prompts for SDM-eligible decisions
- Automated risk calculator integration
- Patient portal decision aid distribution
- Care coordination for complex decisions
- Audit and feedback for providers`,
      keyTerms: [
        { term: 'IPDAS', definition: 'International Patient Decision Aid Standards - criteria for evaluating decision aid quality' },
        { term: 'natural frequency', definition: 'Risk presented as numbers of events in a defined population (e.g., "8 out of 100")' },
        { term: 'values clarification', definition: 'Process of helping patients consider and communicate what matters most to them' },
        { term: 'discrete choice experiment', definition: 'Quantitative method for eliciting preferences by asking individuals to choose between alternatives' },
        { term: 'decision quality', definition: 'The extent to which decisions are informed and values-concordant' }
      ],
      clinicalNotes: `Clinical Pearl: Shared decision making is most valuable when there is genuine uncertainty about the best option. For decisions where evidence strongly favors one approach (e.g., antibiotics for bacterial pneumonia), SDM should focus on ensuring understanding rather than presenting false equivalence between options.

Documentation Example: "Discussed treatment options for localized prostate cancer including active surveillance, surgery, and radiation. Used decision aid and discussed risks of incontinence and impotence with each option. Patient values sexual function highly and prefers to avoid immediate treatment. Shared decision to pursue active surveillance with PSA monitoring every 3 months."

When to Escalate: Complex decisions involving high stakes, multiple specialists, or significant uncertainty may benefit from:
- Multidisciplinary tumor boards or case conferences
- Ethics consultation for value conflicts
- Second opinions from specialty centers
- Palliative care consultation for goals-of-care clarification
- Psychosocial support during deliberation period`
    },
    5: {
      level: 5,
      summary: 'A transformative healthcare paradigm integrating evidence-based medicine, ethics, and implementation science to personalize medical decisions and reduce unwarranted practice variation.',
      explanation: `Shared decision making represents a fundamental restructuring of the patient-provider relationship, with implications for healthcare quality, cost, and equity. Its advancement reflects convergence of ethical imperatives, evidence demands, and policy initiatives addressing value in healthcare.

Evidence Synthesis:

Cochrane systematic review (2017):
- 105 studies, 31,043 participants
- Decision aids increase knowledge (MD 13.5/100), accuracy of risk perception
- Reduce decisional conflict, increase values-concordant choices
- Reduce elective surgery rates when multiple options exist
- No adverse effects on health outcomes or satisfaction

Implementation science research:
- Diffusion patterns across healthcare systems
- Provider adoption barriers and facilitators
- Organizational change strategies
- Sustainability and scaling challenges
- Cost-effectiveness analyses

Policy and Regulatory Landscape:

Patient Protection and Affordable Care Act:
- SDM recognition in prevention and wellness provisions
- Patient-Centered Outcomes Research Institute (PCORI) funding for SDM research
- Accountable care organization patient engagement requirements

Center for Medicare and Medicaid Innovation:
- SDM as component of episode-based payment models
- Decision aid coverage determinations
- Quality metrics incorporating patient-reported outcomes

Professional guidelines:
- American College of Physicians: High-value care and SDM
- American Society of Clinical Oncology: Informed consent and SDM
- Choosing Wisely: SDM to reduce unnecessary care

International developments:
- UK National Health Service: SDM mandated in NHS Constitution
- European Union: Patient rights directives
- Australia: Commission on Safety and Quality in Health Care standards

Health Economics:

Cost implications:
- Decision aid development costs ($50,000-$200,000 per aid)
- Implementation costs: Training, workflow modification, technology
- Savings: Reduced unwanted care, complications, decision regret
- Cost-effectiveness: Favorable in most studied contexts

Value-based care alignment:
- SDM supports appropriate utilization
- Patient-reported outcomes inform value assessment
- Reduces low-value care and associated costs
- Aligns payment with patient-centered outcomes

Digital health innovations:
- AI-powered personalized decision aids
- Natural language processing for preference elicitation
- Virtual reality for procedure visualization
- Mobile apps for deliberation support
- Blockchain for patient-controlled data sharing

Health Equity Considerations:

Addressing disparities:
- SDM reduces information asymmetry that disadvantages vulnerable groups
- Decision aids available in multiple languages and formats
- Addresses cultural barriers to participation
- Supports health literacy development

Persistent challenges:
- Digital divide affecting access to online decision aids
- Cognitive burden for those with limited health literacy
- Cultural norms around authority and decision-making
- Time and resource constraints in safety-net settings

Future Directions:

Research priorities:
- Real-time SDM in acute care settings
- Integration of genomics and precision medicine
- SDM for public health decisions
- Artificial intelligence augmentation of decision support
- Cross-cultural validity and adaptation

Clinical practice evolution:
- SDM as core competency in medical education
- Interprofessional team-based SDM
- Patient and family advisory council integration
- Community-engaged research and practice

System transformation:
- Payment models rewarding SDM
- Transparency in outcomes and costs
- Patient-generated data integration
- Population health SDM strategies
- Global health applications`,
      keyTerms: [
        { term: 'PCORI', definition: 'Patient-Centered Outcomes Research Institute - funding comparative effectiveness and SDM research' },
        { term: 'unwarranted variation', definition: 'Differences in healthcare utilization that cannot be explained by patient illness or preferences' },
        { term: 'value-based care', definition: 'Healthcare payment and delivery models that reward quality and outcomes over volume' },
        { term: 'comparative effectiveness research', definition: 'Research comparing health outcomes of different treatment options' },
        { term: 'patient-reported outcome', definition: 'Health outcome reported directly by the patient without interpretation by others' }
      ],
      clinicalNotes: `Leadership and Quality Improvement: Healthcare leaders should establish SDM as an organizational priority through:
- Executive sponsorship and governance structures
- Investment in decision aid libraries and development
- EHR integration and clinical decision support
- Training curricula with skills assessment
- Outcomes measurement and public reporting
- Recognition and incentive programs

Research Contributions: Clinicians can advance SDM science by:
- Participating in decision aid validation studies
- Documenting implementation strategies and adaptations
- Studying SDM in under-researched populations and decisions
- Evaluating technology-enhanced approaches
- Publishing case studies of complex decision support

Ethics and Professionalism: SDM embodies medical professionalism by:
- Respecting patient autonomy while exercising beneficence
- Transparently communicating uncertainty and limitations
- Acknowledging and addressing conflicts of interest
- Committing to continuous improvement in communication skills
- Advocating for patient access to decision support resources`
    }
  },
  
  media: [],
  
  citations: [
    { id: 'stacey-2017', type: 'article', title: 'Decision aids for people facing health treatment or screening decisions', source: 'Cochrane Database of Systematic Reviews', authors: ['Stacey D'] },
    { id: 'elwyn-2012', type: 'article', title: 'Shared decision making: a model for clinical practice', source: 'Journal of General Internal Medicine', authors: ['Elwyn G'] },
    { id: 'barry-2012', type: 'article', title: 'Shared decision making: pinnacle of patient-centered care', source: 'New England Journal of Medicine', authors: ['Barry MJ'] },
    { id: 'hoffmann-2014', type: 'article', title: 'Shared decision making: what do clinicians need to know and why should they bother?', source: 'Medical Journal of Australia', authors: ['Hoffmann TC'] }
  ],
  
  crossReferences: [
    { targetId: 'ask-me-3', targetType: 'concept', relationship: 'related', label: 'Ask Me 3' },
    { targetId: 'teach-back-method', targetType: 'concept', relationship: 'related', label: 'Teach-Back Method' },
    { targetId: 'care-coordination', targetType: 'concept', relationship: 'related', label: 'Care Coordination' },
    { targetId: 'finding-providers', targetType: 'concept', relationship: 'related', label: 'Finding Providers' }
  ],
  
  tags: {
    systems: ['health-system'],
    topics: ['patient-education', 'communication'],
    keywords: ['shared decision making', 'patient-centered care', 'informed consent', 'decision aids', 'healthcare decisions']
  },
  
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
