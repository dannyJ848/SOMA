/**
 * Second Opinions - Comprehensive Educational Content
 *
 * Covers patients' rights to seek second opinions, when and how to do so,
 * and how to communicate with healthcare providers about getting additional perspectives.
 */

import { EducationalContent } from '../types';

export const secondOpinions: EducationalContent = {
  id: 'concept-second-opinions',
  type: 'concept',
  name: 'Second Opinions',
  alternateNames: ['Second Medical Opinion', 'Additional Medical Consultation', 'Getting Another Opinion'],

  levels: {
    1: {
      level: 1,
      summary: 'You can ask another doctor what they think about your health problem, and this is called getting a second opinion.',
      explanation: `Sometimes when you or your parents are told something important about your health, you might want to ask another doctor what they think. This is called getting a "second opinion."

**Why Get a Second Opinion?**

Think about when you're not sure about something - maybe you ask a friend AND a teacher. With health, you can do the same thing!

- Maybe you want to make sure the first doctor's idea is right
- Maybe you want to learn about different ways to feel better
- Maybe you just feel more comfortable hearing from more than one person

**Is It Okay to Ask?**

Yes! Good doctors want you to feel comfortable with your care. They won't be upset if you want another doctor's thoughts. It's like asking for help with homework from different people - sometimes different teachers explain things in ways that make more sense to you.

**What Happens:**

1. You tell your parents you'd like another doctor's opinion
2. Your parents find another doctor
3. That doctor looks at your information and tells you what they think
4. You and your parents decide what to do with both opinions`,
      keyTerms: [
        { term: 'second opinion', definition: 'When you ask a different doctor what they think about your health problem' },
        { term: 'diagnosis', definition: 'What the doctor thinks is making you feel sick' },
        { term: 'treatment', definition: 'What the doctor suggests to help you feel better' },
      ],
      analogies: [
        'Getting a second opinion is like asking two different teachers to help you with a hard math problem.',
        'It\'s like when you\'re not sure what game to play, so you ask a few friends for ideas.',
      ],
      examples: [
        'If a doctor says you need surgery, your parents might want another doctor to check and agree.',
        'If you\'ve been sick for a long time and not getting better, another doctor might have new ideas.',
      ],
    },
    2: {
      level: 2,
      summary: 'Patients have the right to seek second opinions from other healthcare providers, especially for serious diagnoses, major treatments, or when they have concerns about their care plan.',
      explanation: `## Understanding Second Opinions

A second opinion means consulting with another doctor or specialist about your medical condition, diagnosis, or treatment plan. This is a normal and accepted part of healthcare.

### When to Consider a Second Opinion

- **Serious diagnosis**: Cancer, heart disease, rare conditions
- **Major surgery or treatment**: Especially if irreversible
- **Uncertain diagnosis**: Doctors seem unsure or tests are inconclusive
- **Treatment not working**: Condition isn't improving as expected
- **Complex decision**: Multiple treatment options with significant trade-offs
- **Comfort level**: You don't feel confident in the recommended plan

### How to Get a Second Opinion

1. **Tell your doctor**: Most doctors support this and can help
2. **Get your records**: Request copies of tests, scans, and notes
3. **Find a specialist**: Consider a doctor at a different medical system
4. **Prepare questions**: Write down what you want to know
5. **Compare opinions**: Discuss any differences with your doctors

### Your Rights

- You can seek a second opinion without your doctor's permission
- Insurance often covers second opinions (especially for surgery)
- Your doctor should not refuse to share your records
- You can return to your original doctor after getting a second opinion

### Talking to Your Doctor

You don't need to feel embarrassed. You might say:
- "I'd like to get another perspective before making this decision"
- "This is a big decision, and I want to be sure we're on the right track"
- "Can you recommend someone else I could consult with?"`,
      keyTerms: [
        { term: 'specialist', definition: 'A doctor who focuses on one area of medicine, like heart problems or cancer' },
        { term: 'diagnosis', definition: 'The identification of what disease or condition a patient has' },
        { term: 'treatment plan', definition: 'The specific steps and treatments recommended to address a health condition' },
        { term: 'prognosis', definition: 'The expected outcome or course of a medical condition' },
      ],
      analogies: [
        'Getting a second opinion is like getting quotes from multiple contractors before a home renovation.',
        'Just as you might research major purchases from different sources, you can gather information from multiple doctors.',
      ],
    },
    3: {
      level: 3,
      summary: 'Second opinions are an essential component of patient autonomy, supported by ethical principles, often required by insurers for major procedures, and associated with improved diagnostic accuracy and treatment outcomes.',
      explanation: `## Medical and Ethical Framework

### Evidence for Second Opinions

Research demonstrates the value of second opinions:
- Studies show 10-62% of second opinions result in major diagnostic or treatment changes
- Highest impact for cancer diagnoses, pathology reviews, and complex surgeries
- Reduces unnecessary procedures and improves appropriate care

### Insurance and Coverage

**Medicare:**
- Covers second opinions for surgery
- Covers third opinion if first two disagree
- Specialist visit coverage applies

**Private Insurance:**
- Many plans require second opinions for certain surgeries
- Pre-authorization may be needed
- In-network vs. out-of-network considerations

### Types of Second Opinions

**Formal Second Opinion:**
- In-person consultation with complete evaluation
- Review of all records and imaging
- May include additional testing

**Pathology Second Opinion:**
- Review of tissue samples by another pathologist
- Especially important for cancer diagnosis
- Many cancer centers require this routinely

**Radiology Second Opinion:**
- Re-interpretation of imaging studies
- Important when diagnosis depends on imaging findings

**Remote/Virtual Second Opinion:**
- Telemedicine consultations
- Expert review programs at major medical centers
- Record review without in-person visit

### Navigating the Process

**Preparing for a Second Opinion:**
1. Compile complete medical records
2. Gather all imaging on disc/electronically
3. Obtain pathology slides if relevant
4. List current medications
5. Prepare timeline of illness
6. Write out specific questions

**After the Second Opinion:**
- Compare recommendations systematically
- Ask both doctors to address discrepancies
- Consider patient values and preferences
- Make informed decision
- Document the decision-making process`,
      keyTerms: [
        { term: 'pathology review', definition: 'Examination of tissue samples by a pathologist to diagnose disease' },
        { term: 'pre-authorization', definition: 'Insurance approval required before certain medical services are covered' },
        { term: 'tertiary care center', definition: 'A specialized hospital providing advanced medical care and expertise' },
        { term: 'multidisciplinary tumor board', definition: 'A group of specialists who meet to discuss cancer cases and recommend treatment' },
      ],
      clinicalNotes: 'Clinicians should support patients seeking second opinions and provide complete records. Discordant opinions should be discussed openly. Consider facilitating tumor board or multidisciplinary review for complex cases.',
    },
    4: {
      level: 4,
      summary: 'Second opinions involve complex considerations including diagnostic discordance rates, institutional expertise variation, insurance requirements, and shared decision-making frameworks, with evidence supporting their role in improving care quality.',
      explanation: `## Clinical Evidence and Practice Patterns

### Diagnostic Discordance Research

**Key Studies:**
- Mayo Clinic study (2017): 21% of second opinions resulted in distinctly different diagnosis
- Breast cancer pathology: 8-25% discordance in diagnosis
- Prostate cancer grading: Up to 35% Gleason score changes on review
- Sarcoma diagnosis: 25-40% revised diagnoses at expert centers

**Factors Affecting Discordance:**
- Disease complexity and rarity
- Subjective interpretation elements
- Institutional expertise and volume
- Completeness of available information
- Time since original diagnosis

### Quality and Outcomes

**Benefits:**
- Reduction in unnecessary surgery
- More appropriate treatment intensity
- Improved staging accuracy
- Better surgical planning
- Enhanced patient confidence

**Potential Concerns:**
- Delay in treatment initiation
- Additional healthcare costs
- Patient anxiety during waiting period
- Conflicting information confusion

### Institutional Considerations

**Center of Excellence Programs:**
- Volume-outcome relationships for complex procedures
- Specialized multidisciplinary teams
- Access to clinical trials
- Advanced diagnostic capabilities

**Referral Networks:**
- Academic medical center consultations
- Virtual second opinion programs
- Insurance-sponsored expert review
- Employer-sponsored second opinion benefits

### Implementation Frameworks

**Mandatory Second Opinion Programs:**
- Certain surgeries require pre-authorization second opinion
- Cost containment rationale
- Evidence of reduced surgery rates
- Quality improvement focus

**Clinical Triggers for Second Opinion:**
| Situation | Rationale |
|-----------|-----------|
| Rare cancer diagnosis | Expertise concentration |
| Discordant pathology | Accuracy improvement |
| Multiple treatment options | Decision support |
| Treatment failure | Diagnostic reconsideration |
| High-risk surgery | Surgical appropriateness |

### Communication Strategies

**With Referring Physician:**
- Frame as shared goal of optimal care
- Maintain relationship continuity
- Discuss findings collegially
- Document curbside vs. formal consultation

**With Patient:**
- Normalize second opinion seeking
- Explain process and logistics
- Address potential conflicting information
- Support informed decision-making`,
      keyTerms: [
        { term: 'diagnostic discordance', definition: 'Disagreement between two diagnostic interpretations of the same case' },
        { term: 'Gleason score', definition: 'Grading system for prostate cancer based on microscopic appearance of tissue' },
        { term: 'volume-outcome relationship', definition: 'Association between how many procedures a center performs and patient outcomes' },
        { term: 'curbside consultation', definition: 'Informal discussion between physicians about a case without formal patient evaluation' },
      ],
      clinicalNotes: 'Track second opinion discordance rates for quality improvement. Develop clear protocols for facilitating second opinions. Consider systematic pathology review for cancer diagnoses. Support patient navigation services.',
    },
    5: {
      level: 5,
      summary: 'Second opinions require integration of evidence-based medicine, shared decision-making science, health services research, and practical implementation strategies to optimize diagnostic accuracy and treatment appropriateness while respecting patient autonomy.',
      explanation: `## Evidence Synthesis and Application

### Systematic Review Findings

**Diagnostic Impact:**
- Meta-analyses show 10-30% major diagnostic change rates
- Highest impact in:
  - Rare diseases
  - Pathology-dependent diagnoses
  - Complex surgical decisions
  - Treatment-resistant conditions

**Treatment Modification:**
- 30-40% of second opinions suggest treatment changes
- More conservative approaches often recommended
- Clinical trial identification
- Timing and sequencing adjustments

### Health Services Research

**Utilization Patterns:**
- Higher utilization among educated, insured populations
- Geographic variation in access
- Digital second opinion growth
- Employer-sponsored program expansion

**Cost-Effectiveness:**
- Mixed evidence on overall cost impact
- Potential savings from avoided unnecessary surgery
- Quality-adjusted life year gains
- Insurance program ROI analyses

### Program Design Considerations

**Expert Second Opinion Programs:**
| Component | Best Practice |
|-----------|---------------|
| Case selection | High-impact diagnoses |
| Expert matching | Disease-specific expertise |
| Record compilation | Standardized complete package |
| Turnaround time | 5-7 days target |
| Report format | Structured, actionable |
| Integration | Return to referring physician |

**Quality Metrics:**
- Time to second opinion completion
- Discordance rate by diagnosis
- Treatment plan change rate
- Patient satisfaction
- Outcomes tracking (when feasible)

### Special Populations and Contexts

**Pediatric Considerations:**
- Parental decision-making authority
- Child assent as appropriate
- Pediatric specialist networks
- Rare disease expertise concentration

**Oncology Excellence:**
- NCI-designated cancer centers
- Tumor board requirement
- Biomarker-driven trials
- Germline genetic assessment
- Pathology central review

**Surgical Decision-Making:**
- Appropriateness criteria application
- Conservative alternative consideration
- Surgeon volume data availability
- Surgical risk calculators

### Emerging Models

**Digital Health Solutions:**
- Asynchronous expert review platforms
- AI-assisted triage and matching
- Integrated EHR record transfer
- Video consultation capabilities

**Value-Based Approaches:**
- Accountable care organization programs
- Bundled payment incentives
- Shared savings models
- Quality bonus structures

**Global Expert Networks:**
- International rare disease consultation
- Cross-border specialty access
- Regulatory and licensing considerations
- Cultural and language factors

### Ethical Considerations

**Autonomy vs. Efficiency:**
- Patient right to seek opinions
- Resource utilization concerns
- Insurance gatekeeping
- Paternalism avoidance

**Disclosure and Conflicts:**
- Disclosure of institutional financial interests
- Research enrollment pressures
- Treatment preference biases
- Outcome data transparency

**Communication Challenges:**
- Managing conflicting recommendations
- Patient information overload
- Decision paralysis prevention
- Trust maintenance`,
      keyTerms: [
        { term: 'NCI-designated cancer center', definition: 'Cancer research institutions recognized by the National Cancer Institute for scientific excellence' },
        { term: 'appropriateness criteria', definition: 'Evidence-based guidelines defining when a medical procedure is considered appropriate' },
        { term: 'germline genetic assessment', definition: 'Testing for inherited genetic mutations that may affect cancer risk and treatment' },
        { term: 'asynchronous expert review', definition: 'Second opinion provided through record review without real-time patient-physician interaction' },
      ],
      clinicalNotes: `Implementation priorities:
1. Develop standardized second opinion request protocols
2. Partner with expert centers for complex cases
3. Implement routine pathology second review for cancer diagnoses
4. Offer patient navigation support for second opinion logistics
5. Track and report discordance rates by diagnosis category
6. Integrate second opinion findings into multidisciplinary conferences
7. Consider telemedicine platforms for expanded access
8. Address health equity in second opinion access`,
    },
  },

  media: [
    {
      id: 'second-opinion-decision-guide',
      type: 'diagram',
      filename: 'when-to-seek-second-opinion.svg',
      title: 'When to Seek a Second Opinion',
      description: 'Decision guide for when a second opinion may be valuable',
    },
  ],

  citations: [
    {
      id: 'mayo-second-opinion',
      type: 'article',
      title: 'Diagnostic Accuracy of Second Opinions',
      authors: ['Van Such, M.', 'Naessens, J.M.', 'et al.'],
      source: 'Journal of Evaluation in Clinical Practice',
      url: 'https://onlinelibrary.wiley.com/journal/13652753',
      accessedDate: '2026-01-24',
    },
    {
      id: 'asco-second-opinion',
      type: 'website',
      title: 'Getting a Second Opinion',
      source: 'American Society of Clinical Oncology',
      url: 'https://www.cancer.net/navigating-cancer-care/how-find-cancer-doctor/getting-second-opinion',
      accessedDate: '2026-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'concept-patient-bill-of-rights', targetType: 'concept', relationship: 'related', label: 'Patient Bill of Rights' },
    { targetId: 'concept-informed-consent', targetType: 'concept', relationship: 'related', label: 'Informed Consent' },
  ],

  tags: {
    systems: ['healthcare-system'],
    topics: ['patient-advocacy', 'medical-decision-making', 'healthcare-quality'],
    keywords: ['second opinion', 'medical consultation', 'diagnostic accuracy', 'patient rights'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default secondOpinions;
