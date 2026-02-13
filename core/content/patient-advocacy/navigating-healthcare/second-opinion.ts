/**
 * Getting a Second Opinion
 *
 * Information on when and how to seek a second medical opinion,
 * understanding your rights, and navigating the process effectively.
 */

import { EducationalContent } from '../../types';

export const SECOND_OPINION: EducationalContent = {
  id: 'patient-advocacy-second-opinion',
  type: 'topic',
  name: 'Getting a Second Opinion',
  alternateNames: ['Second Medical Opinion', 'Specialist Consultation'],

  levels: {
    1: {
      level: 1,
      summary: 'A second opinion means asking another doctor to look at your health problem - like getting a second opinion on a car repair before doing expensive work.',
      explanation: `Just like you might ask more than one person for advice before making a big decision, it's okay to ask another doctor about your health. In fact, good doctors want you to get the information you need!

**When to Get a Second Opinion:**

*You SHOULD get another opinion when:*
- A doctor says you need surgery
- You're diagnosed with a serious disease (like cancer)
- The treatment seems very scary or has big risks
- You're not sure if the diagnosis is right
- You've tried treatment but it's not helping

*Remember:*
- It's your right to ask for another opinion
- Most doctors understand and support this
- It doesn't hurt your doctor's feelings
- Your health is too important to guess about

**How to Ask:**
Just say: "I'd like to get a second opinion about this. Can you help me find another doctor to talk to?"

A good doctor will say yes and may even help you find someone!`,
      keyTerms: [
        { term: 'second opinion', definition: 'Asking another doctor to review your diagnosis or treatment plan' },
        { term: 'diagnosis', definition: 'When a doctor figures out what sickness or health problem you have', pronunciation: 'dy-ag-NO-sis' },
        { term: 'surgery', definition: 'When doctors need to operate on your body to fix a problem' },
        { term: 'specialist', definition: 'A doctor who focuses on one specific area of health' },
      ],
      analogies: [
        'Getting a second opinion is like checking with another mechanic before agreeing to an expensive car repair.',
        'Think of it like homework - you might ask a classmate to explain a problem differently if you don\'t understand the first explanation.',
      ],
      examples: [
        'If a doctor says you need surgery on your knee, another doctor might suggest physical therapy instead.',
        'For cancer treatment, another doctor might know about a new treatment that the first doctor didn\'t mention.',
      ],
      patientCounselingPoints: [
        'You don\'t have to tell your first doctor you\'re getting a second opinion, but it\'s usually better if you do',
        'Bring your test results and medical records to the second appointment',
        'Ask the second doctor to explain why they agree or disagree with the first doctor',
      ],
    },
    2: {
      level: 2,
      summary: 'Seeking a second opinion is a patient right that can provide peace of mind, confirm diagnoses, explore alternative treatments, and help you make informed healthcare decisions.',
      explanation: `Getting a second opinion is standard medical practice and an important part of being an informed patient. Most doctors encourage second opinions for serious conditions.

**When to Consider a Second Opinion:**

*Medical Situations:*
- Diagnosis of cancer or other life-threatening conditions
- Recommended surgery or invasive procedure
- Starting long-term medication with significant side effects
- Rare or unclear diagnosis
- Chronic condition that isn't improving with current treatment

*Personal Reasons:*
- You don't feel comfortable with the recommended treatment
- You want to explore all treatment options
- The diagnosis doesn't seem to match your symptoms
- You want confirmation before proceeding with something major
- The recommended treatment has significant lifestyle impacts

**Your Rights:**
- You have the legal right to seek a second opinion
- Insurance plans typically cover second opinions for medically necessary care
- Your doctor cannot refuse to treat you for seeking another opinion
- You can request your medical records be shared with another doctor

**Finding a Second Opinion Doctor:**
- Ask your current doctor for a referral
- Contact your insurance for in-network providers
- Look for doctors at different hospitals or medical centers
- Consider academic medical centers for complex conditions
- Use doctor-rating websites (with caution)

**What to Bring:**
- Copies of all test results (lab work, imaging reports)
- List of current medications and dosages
- Summary of your medical history
- Written notes from previous appointments
- Your written questions

**After the Second Opinion:**
Possible outcomes:
- **Agreement**: Both doctors recommend the same treatment
- **Different perspectives**: You now have more options to consider
- **New information**: The second doctor finds something the first missed

Either way, you're more informed to make the best decision for your health.`,
      keyTerms: [
        { term: 'in-network', definition: 'Doctors and hospitals that have agreed to work with your insurance company' },
        { term: 'invasive procedure', definition: 'Medical treatment that requires entering the body, like surgery' },
        { term: 'referral', definition: 'A formal request from your doctor for you to see another doctor or specialist' },
        { term: 'informed consent', definition: 'Process where you learn about and understand a treatment before agreeing to it' },
      ],
      analogies: [
        'A second opinion is like getting a bid from two contractors before building an addition on your house.',
      ],
      examples: [
        'If one surgeon recommends a full knee replacement and another suggests partial replacement or physical therapy, you can make a more informed choice.',
        'For a cancer diagnosis, a second opinion at a National Cancer Institute-designated center might offer access to clinical trials.',
      ],
      patientCounselingPoints: [
        'Be honest with both doctors about your concerns',
        'Ask specifically: "What are all the treatment options?"',
        'Consider how each treatment option fits your lifestyle and values',
        'It\'s okay to take time to decide on major treatments',
      ],
    },
    3: {
      level: 3,
      summary: 'Second opinions are a fundamental patient right that can improve diagnostic accuracy, confirm treatment recommendations, reveal alternative therapeutic options, and reduce unnecessary procedures through validation of medical necessity.',
      explanation: `Seeking a second opinion is a cornerstone of patient-centered care and shared decision-making, particularly for high-stakes medical decisions.

**Evidence-Based Indications for Second Opinion:**

*Diagnostic Uncertainty:*
- Rare or uncommon conditions (zebras)
- Atypical presentation of common diseases
- Conflicting test results or imaging findings
- Failure to respond to expected treatments
- Complex multisystem presentations

*Therapeutic Decisions Warranting Second Opinion:*
- **Surgical interventions**: Especially elective procedures
- **Oncologic treatment**: Chemotherapy, radiation, immunotherapy regimens
- **Cardiovascular procedures**: Stenting, bypass, ablation
- **Organ transplantation**: Evaluation and listing decisions
- **Initiation of biologic agents**: For autoimmune diseases
- **Pain management interventions**: Including implantable devices

**Measurable Benefits:**

*Diagnostic Impact:*
Studies show second opinions result in:
- **10-30%**: Diagnosis changes completely
- **30-60%**: Treatment plan is modified
- **5-15%**: Both diagnosis and treatment change

*Economic Impact:*
- May avoid unnecessary procedures (reducing waste)
- Identifies more cost-effective alternatives
- Can reduce complications from inappropriate interventions
- Insurance companies often require second opinions for expensive procedures

**Optimal Second Opinion Process:**

1. **Selection of Second Opinion Provider**:
   - Different institution than original diagnosis
   - Subspecialty expertise in specific condition
   - Academic centers for rare or complex cases
   - Consider physicians who publish on your condition

2. **Information Transfer**:
   - Request complete medical records (HIPAA right)
   - Include pathology slides (for biopsies)
   - Include original imaging (CD or digital access)
   - Provide treatment summary and response

3. **Second Opinion Consultation**:
   - Disclose previous recommendations
   - Ask specifically: "What would you recommend if this were your family member?"
   - Inquire about clinical trials
   - Discuss risks/benefits of all options

4. **Reconciliation Process**:
   - If opinions differ, determine why (different interpretation of evidence vs. different practice patterns)
   - Consider third "tie-breaking" opinion for major discrepancies
   - Engage in shared decision-making with providers

**When Second Opinion Is Most Valuable:**
- First opinion from non-specialist for complex condition
- Recommended treatment is the doctor's "standard approach"
- You have risk factors that make treatment riskier
- The diagnosis carries significant psychosocial impact
- Treatment may affect fertility or other life goals`,
      keyTerms: [
        { term: 'diagnostic accuracy', definition: 'How correctly a test or doctor identifies a disease' },
        { term: 'zebra', definition: 'Medical slang for a rare diagnosis; based on "When you hear hoofbeats, think horses not zebras"' },
        { term: 'therapeutic', definition: 'Related to treatment of disease' },
        { term: 'shared decision-making', definition: 'Process where patients and providers work together to make medical decisions' },
        { term: 'HIPAA', definition: 'Health Insurance Portability and Accountability Act - protects your health information rights' },
      ],
      clinicalNotes: 'Second opinions are standard of care for cancer diagnosis before initiating treatment. Many insurance plans require second opinions for elective surgeries and expensive procedures. Patients should not be concerned about offending their physician; most physicians welcome second opinions for complex cases.',
    },
    4: {
      level: 4,
      summary: 'Second opinions provide measurable clinical value through diagnostic verification, therapeutic optimization, and identification of practice variation, with substantial evidence supporting their impact on reducing unnecessary care and improving outcomes.',
      explanation: `**Evidence for Second Opinion Value:**

*Diagnostic Second Opinions:*
- **Mayo Clinic study (2017)**: 21% of second opinions resulted in completely new diagnosis; 66% had refined or altered diagnosis
- **Pathology second opinions**: Up to 5-10% discordance rates for cancer diagnoses
- **Radiology second opinions**: 3-10% change in interpretation affecting management

*Surgical Second Opinions:*
- Spine surgery: Up to 30% of second opinions recommend against surgery
- Cardiac procedures: 10-20% change in recommended management
- Joint replacement: Significant variation in surgical candidacy determination

**Sources of Diagnostic Error Requiring Second Opinion:**
- Cognitive biases (anchoring, premature closure)
- Incomplete diagnostic workup
- Atypical disease presentations
- Failure to consider rare diagnoses
- System-related factors (time pressure, information gaps)

**Practice Variation and Second Opinions:**

*Geographic Variation:*
- Dartmouth Atlas demonstrates 2-3 fold variation in surgical rates by region
- Second opinions help patients understand when procedures are truly necessary vs. regional practice patterns

*Intensity Variation:*
- Some physicians倾向于 aggressive treatment, others toward watchful waiting
- Second opinions reveal the spectrum of acceptable approaches

**Structured Approaches to Second Opinions:**

*Multidisciplinary Tumor Boards:*
- Formal second opinion process for cancer cases
- Multiple specialists review case simultaneously
- Evidence-based consensus recommendations
- Particularly valuable for complex or rare cancers

*Virtual Second Opinions:*
- Growing telehealth category
- Allows access to distant specialists
- Requires upload of records and images
- Insurance coverage variable

**Special Considerations:**

*Pediatric Second Opinions:*
- Particularly valuable for rare congenital conditions
- Consider children's hospitals with subspecialty expertise
- Impact on developmental trajectory is significant

*Geriatric Second Opinions:*
- Life expectancy and goals of care affect treatment value
- Geriatric assessment can reveal different risk-benefit calculus
- Polypharmacy considerations may change recommendations

*Mental Health Second Opinions:*
- Psychiatry diagnoses can be subjective
- Medication approaches vary significantly
- Consider academic centers with research programs

**Barriers to Second Opinions:**
- Insurance restrictions (network limitations, pre-authorization)
- Geographic access to specialists
- Cost (even with insurance, copays accumulate)
- Time constraints and work absences
- Fear of damaging physician relationship
- Health literacy and navigation challenges

**Optimizing Second Opinion Value:**
- Seek second opinion BEFORE definitive treatment when possible
- Choose physician with different training or institutional affiliation
- Prepare organized medical summary and question list
- Request written opinion for comparison
- Consider both "confirmation" and "alternative pathway" opinions`,
      keyTerms: [
        { term: 'cognitive bias', definition: 'Systematic errors in thinking that affect medical decision-making' },
        { term: 'premature closure', definition: 'Diagnostic error where doctor stops considering other possibilities once initial diagnosis is made' },
        { term: 'anchoring', definition: 'Cognitive bias where initial information too heavily influences final decision' },
        { term: 'watchful waiting', definition: 'Strategy of monitoring condition without immediate treatment' },
        { term: 'multidisciplinary tumor board', definition: 'Team of cancer specialists who review cases together to make recommendations' },
      ],
      clinicalNotes: 'The "diagnostic Odyssey" describes the prolonged journey patients with rare diseases experience before accurate diagnosis. Early second opinions from academic medical centers with expertise in rare diseases can significantly shorten this journey.',
    },
    5: {
      level: 5,
      summary: 'Second opinions represent a critical quality and safety tool in modern healthcare, providing essential validation of diagnostic accuracy, therapeutic appropriateness, and alignment with patient values while mitigating cognitive and systemic biases.',
      explanation: `**Advanced Concepts in Second Opinion Practice:**

*Diagnostic Error Framework:*
The Institute of Medicine (2015) report "Improving Diagnosis in Health Care" identifies:
- **Most common diagnosis**: Missed, delayed, or wrong diagnosis affects 12 million Americans annually
- **Second opinion role**: Critical safety net preventing diagnostic error
- **System vulnerabilities**: Fragmented care, lack of information sharing, time pressure

*Bayesian Thinking in Second Opinions:*
- First opinion establishes pre-test probability
- Second opinion updates likelihood based on:
  - Additional clinical information gathered
  - Different interpretation of existing data
  - Access to different knowledge base
  - Reduced cognitive bias through fresh perspective

**Decision Science Applications:**

*Value of Information Analysis:*
Second opinions provide "option value" - preserving future decision flexibility
- **Irreversible decisions** (surgery, chemotherapy): High second opinion value
- **Reversible decisions** (medication trials): Lower second opinion value
- **Time-sensitive decisions**: Balance delay risks against information gains

*Regret Minimization:*
- Second opinions reduce decisional regret
- Particularly valuable when:
  - Multiple reasonable options exist
  - Options have different risk-benefit profiles
  - Patient values strongly preference one approach over another

**Quality Measurement:**

*Second Opinion Quality Metrics:*
- Concordance/discordance rates
- Impact on clinical outcomes
- Patient satisfaction with decision process
- Cost-effectiveness (avoided procedures vs. added consultations)
- Time to definitive treatment

**Institutional Second Opinion Programs:**

*Formalized Programs:*
- **Mayo Clinic Executive Health Program**: Built-in second opinions
- **Second Opinion Clinics**: Dedicated services at major centers
- **Quality Assurance Second Opinions**: Built into pathology and radiology workflows

*Payment Models:*
- Traditional fee-for-service: Variable coverage
- Value-based care: Incentivized when prevents unnecessary procedures
- Bundled payments: May include required second opinions
- Direct primary care: Often included without additional cost

**Ethical and Legal Considerations:**

*Professional Obligations:*
- AMA Code of Medical Ethics supports patient right to second opinion
- Physicians should facilitate (not obstruct) second opinions
- False claims about "standard of care" to discourage second opinions unethical

*Legal Liability:*
- Failure to obtain second opinion rarely constitutes malpractice
- However, failure to refer for specialist evaluation when indicated may
- Informed consent includes discussion of alternatives (which second opinion can reveal)

**Emerging Models:**

*AI-Assisted Second Opinions:*
- Diagnostic decision support systems
- Imaging AI algorithms providing second reads
- Pathology AI for cancer detection
- Limitations: AI may share same training biases as first opinion

*Virtual Second Opinion Platforms:*
- Growing direct-to-consumer market
- Companies: Cleveland Clinic MyConsult, Grand Rounds, Teladoc
- Benefits: Access to expertise regardless of geography
- Concerns: Lack of physical examination, fragmentation of care

*Global Second Opinions:*
- Medical tourism for second opinions
- International centers of excellence
- Consideration of varying international practice patterns

**Special Population Considerations:**

*Rare Disease Community:*
- Genetic confirmation often requires second opinion from geneticist
- Foundation-sponsored expert networks (e.g., NIH Undiagnosed Diseases Program)
- Patient advocacy group referrals to true experts

*Clinical Trial Eligibility:*
- Second opinion may determine trial eligibility
- Academic centers have trial access unavailable elsewhere
- Molecular tumor boards for precision therapy matching

**Future Directions:**
- Mandatory second opinions for specified high-stakes procedures
- Standardized second opinion documentation in EHR
- Integration of second opinion findings into care coordination
- Quality measurement incorporating second opinion concordance`,
      keyTerms: [
        { term: 'Institute of Medicine', definition: 'Now National Academy of Medicine; authoritative source on healthcare quality' },
        { term: 'Bayesian thinking', definition: 'Statistical approach incorporating new information to update probability estimates' },
        { term: 'decisional regret', definition: 'Distress experienced after making healthcare decision, related to uncertainty about outcome' },
        { term: 'option value', definition: 'Value of preserving flexibility to make future decisions' },
        { term: 'undifferentiated presentation', definition: 'Symptoms not yet clearly pointing to specific diagnosis' },
      ],
      clinicalNotes: 'The diagnostic process is inherently probabilistic. Second opinions fundamentally reduce uncertainty by providing an independent assessment of the diagnostic and therapeutic landscape. For conditions with high-stakes decisions (cancer, major surgery, chronic medication initiation), second opinions should be considered standard practice, not exceptional.',
    },
  },

  media: [
    {
      id: 'second-opinion-flow-1',
      type: 'diagram',
      filename: 'second-opinion-process-flow.svg',
      title: 'Second Opinion Process Flow',
      description: 'Step-by-step guide for requesting and obtaining a second medical opinion',
    },
  ],

  citations: [
    {
      id: 'iom-diagnostic-error',
      type: 'article',
      title: 'Improving Diagnosis in Health Care',
      authors: ['National Academies of Sciences, Engineering, and Medicine'],
      source: 'The National Academies Press',
      url: 'https://www.nap.edu/catalog/21778/improving-diagnosis-in-health-care',
      license: 'Copyrighted',
    },
    {
      id: 'mayo-second-opinion-study',
      type: 'article',
      title: 'Second Opinions in Medical Practice',
      authors: ['Naessens, JM', 'Baird, MA'],
      source: 'BMJ Quality & Safety',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'patient-advocacy-finding-doctor', targetType: 'topic', relationship: 'related', label: 'Finding the Right Doctor' },
    { targetId: 'patient-advocacy-healthcare-coordination', targetType: 'topic', relationship: 'related', label: 'Healthcare Coordination' },
    { targetId: 'patient-advocacy-informed-consent', targetType: 'topic', relationship: 'related', label: 'Informed Consent' },
  ],

  tags: {
    topics: ['patient-advocacy', 'healthcare-navigation', 'decision-making'],
    keywords: ['second opinion', 'diagnosis', 'treatment options', 'medical decision'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
