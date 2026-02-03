/**
 * Patient Bill of Rights - Comprehensive Educational Content
 *
 * Covers fundamental rights that patients have in healthcare settings,
 * including dignity, privacy, participation in care decisions, and more.
 */

import { EducationalContent } from '../types';

export const patientBillOfRights: EducationalContent = {
  id: 'concept-patient-bill-of-rights',
  type: 'concept',
  name: 'Patient Bill of Rights',
  alternateNames: ['Patient Rights', 'Healthcare Consumer Rights', 'Medical Patient Rights'],

  levels: {
    1: {
      level: 1,
      summary: 'Every patient has special rights when visiting a doctor or hospital, including being treated kindly and being told what is happening with their care.',
      explanation: `When you go to see a doctor or stay in a hospital, you have special rights - kind of like rules that protect you. These rights make sure you are treated fairly and with respect.

**Your Basic Rights:**

1. **Be Treated Nicely**: Doctors and nurses must treat you with kindness and respect, no matter who you are, where you come from, or how much money your family has.

2. **Know What's Happening**: You have the right to understand what the doctor thinks is wrong and what they want to do to help you feel better. If you don't understand something, you can always ask questions!

3. **Say Yes or No**: Before a doctor does something like give you a shot or do a test, someone should explain it to you and your parents. You and your family can say yes or no.

4. **Keep Things Private**: What you tell your doctor is private. They won't tell other people your health information unless you say it's okay.

5. **Get Help When You Need It**: If you're really sick or hurt, the hospital must help you, even in the middle of the night.

6. **Have Someone With You**: You can usually have a parent, guardian, or someone you trust stay with you at the doctor's office or hospital.

Think of these rights like a promise that healthcare workers make to take good care of you!`,
      keyTerms: [
        { term: 'patient', definition: 'A person who goes to a doctor or hospital to get help with their health' },
        { term: 'rights', definition: 'Things you are allowed to have or do that are protected by rules' },
        { term: 'respect', definition: 'Treating someone nicely and caring about their feelings' },
        { term: 'privacy', definition: 'Keeping personal information secret and safe' },
        { term: 'consent', definition: 'Saying yes to something after you understand what it is' },
      ],
      analogies: [
        'Patient rights are like the rules at school that keep everyone safe and treated fairly.',
        'Having rights as a patient is like being a customer at a store - you deserve good service and fair treatment.',
      ],
      examples: [
        'If a nurse is about to give you a shot, they should tell you what the medicine is for and why you need it.',
        'If you\'re scared at the hospital, you can ask for your mom or dad to stay with you.',
      ],
    },
    2: {
      level: 2,
      summary: 'Patient rights are legal and ethical protections ensuring respectful treatment, informed participation in healthcare decisions, privacy of medical information, and access to emergency care.',
      explanation: `The Patient Bill of Rights is a set of standards that outline what you can expect when receiving healthcare. These rights exist to protect you and ensure high-quality, respectful medical care.

## Core Patient Rights

**1. Right to Respectful Care**
- Be treated with dignity regardless of race, religion, gender, disability, or ability to pay
- Receive care that respects your cultural values and beliefs
- Be addressed by your preferred name and pronouns

**2. Right to Information**
- Know the names and roles of people treating you
- Receive clear explanations of your diagnosis and treatment options
- Understand the benefits, risks, and alternatives to proposed treatments
- Get information in a language you understand

**3. Right to Participate in Decisions**
- Be involved in planning your care
- Accept or refuse treatment (with some exceptions for emergencies)
- Seek a second opinion
- Change doctors if you're not satisfied

**4. Right to Privacy**
- Have your medical records kept confidential
- Discuss your care in private settings
- Know who has access to your medical information

**5. Right to Emergency Care**
- Receive stabilizing emergency treatment regardless of ability to pay (EMTALA law)
- Not be transferred unsafely from an emergency room

**6. Right to Know Costs**
- Receive estimates of charges before non-emergency treatments
- Understand your bill and dispute charges you believe are incorrect

## Where These Rights Come From

Patient rights are protected by:
- Federal laws (like HIPAA and EMTALA)
- State laws
- Hospital policies
- Professional ethics codes`,
      keyTerms: [
        { term: 'EMTALA', definition: 'Emergency Medical Treatment and Labor Act - a law requiring hospitals to provide emergency care regardless of ability to pay', pronunciation: 'em-TAL-ah' },
        { term: 'informed consent', definition: 'Agreement to a medical procedure after understanding its risks, benefits, and alternatives' },
        { term: 'confidentiality', definition: 'Keeping medical information private and only sharing it with permission' },
        { term: 'patient advocate', definition: 'A person who helps patients understand and exercise their rights' },
        { term: 'cultural competence', definition: 'Healthcare providers\' ability to respect and respond to patients\' cultural needs' },
      ],
      analogies: [
        'Patient rights are like a contract between you and your healthcare providers - both sides have expectations and responsibilities.',
        'Just as tenants have rights when renting an apartment, patients have rights when receiving healthcare.',
      ],
    },
    3: {
      level: 3,
      summary: 'Patient rights encompass a comprehensive framework of legal protections, ethical principles, and institutional policies governing the patient-provider relationship, including autonomy, beneficence, non-maleficence, and justice.',
      explanation: `## Historical and Legal Foundation

The modern Patient Bill of Rights emerged from the consumer rights movement of the 1960s-70s. The American Hospital Association first adopted patient rights in 1973. Today, these rights are codified in federal regulations (42 CFR 482.13) and state laws.

## Fundamental Rights Categories

### Autonomy Rights
- **Self-determination**: Right to make informed decisions about one's own healthcare
- **Informed consent**: Requires disclosure, comprehension, voluntariness, and capacity
- **Refusal of treatment**: Including the right to leave against medical advice (AMA)
- **Advance directives**: Right to document future healthcare preferences

### Privacy and Confidentiality Rights
- **HIPAA protections**: Control over Protected Health Information (PHI)
- **Minimum necessary standard**: Only relevant information shared for treatment
- **Breach notification**: Right to know if your information is compromised
- **Access to records**: Right to obtain copies of your medical records

### Access Rights
- **EMTALA requirements**: Medical screening examination and stabilization
- **Non-discrimination**: Civil Rights Act, ADA, and Section 1557 of ACA protections
- **Language access**: Interpreter services and translated materials
- **Accessibility**: Physical and communication accommodations

### Quality and Safety Rights
- **Safe environment**: Freedom from abuse, neglect, and harassment
- **Competent care**: Treatment by qualified, licensed professionals
- **Continuity of care**: Appropriate discharge planning and follow-up
- **Pain management**: Assessment and treatment of pain

### Participation Rights
- **Care planning**: Involvement in treatment decisions
- **Second opinions**: Right to seek additional medical opinions
- **Grievance process**: Right to file complaints without retaliation
- **Ethics consultation**: Access to ethics committees for complex decisions

## State Variations

Rights vary by state. Common additional state protections include:
- Specific consent requirements for mental health treatment
- Restrictions on restraint and seclusion use
- Patient notification requirements
- Enhanced privacy protections

## Healthcare Setting Variations

Rights may differ based on setting:
- **Hospitals**: Most comprehensive federal regulations (Conditions of Participation)
- **Nursing facilities**: Specific resident rights under OBRA
- **Home health**: Adapted rights for home-based care
- **Mental health facilities**: Additional protections for involuntary treatment`,
      keyTerms: [
        { term: '42 CFR 482.13', definition: 'Federal regulation establishing patient rights as a condition of Medicare/Medicaid participation for hospitals' },
        { term: 'Protected Health Information (PHI)', definition: 'Any individually identifiable health information held by covered entities under HIPAA' },
        { term: 'Section 1557', definition: 'ACA provision prohibiting discrimination in healthcare programs receiving federal funding' },
        { term: 'OBRA', definition: 'Omnibus Budget Reconciliation Act - includes nursing home reform with resident rights provisions' },
        { term: 'AMA (Against Medical Advice)', definition: 'Patient\'s right to leave a healthcare facility despite medical recommendations to stay' },
        { term: 'Conditions of Participation', definition: 'Federal requirements healthcare facilities must meet to receive Medicare/Medicaid reimbursement' },
      ],
      clinicalNotes: 'Healthcare providers must document informed consent discussions, provide patients with written rights information upon admission, and have processes for handling grievances. Failure to uphold patient rights can result in regulatory citations and legal liability.',
    },
    4: {
      level: 4,
      summary: 'Patient rights represent the intersection of bioethical principles, legal mandates, and healthcare policy, requiring sophisticated understanding of competing interests, capacity assessment, and systems-level implementation.',
      explanation: `## Bioethical Framework

Patient rights operationalize the four principles of biomedical ethics:

### Respect for Autonomy
- **Competent patients**: Full decision-making authority
- **Capacity assessment**: Determination of ability to understand and appreciate consequences
- **Supported decision-making**: Accommodations for patients with cognitive limitations
- **Substituted judgment**: Surrogate decisions based on patient's known values

### Beneficence and Non-maleficence
- **Therapeutic privilege**: Rare exception allowing withholding information if disclosure would cause harm
- **Medical futility**: Limits of obligation to provide non-beneficial treatment
- **Resource stewardship**: Balancing individual rights with population health

### Justice
- **Distributive justice**: Fair allocation of healthcare resources
- **Procedural justice**: Equitable access to decision-making processes
- **Corrective justice**: Remedies for rights violations

## Legal Mechanisms

### Federal Protections
| Law | Key Patient Rights Provisions |
|-----|------------------------------|
| HIPAA (1996) | Privacy, security, breach notification |
| EMTALA (1986) | Emergency screening and stabilization |
| ADA (1990) | Non-discrimination, accommodations |
| Mental Health Parity Act | Equal coverage for mental health |
| 21st Century Cures Act | Information blocking prohibition |

### Enforcement Mechanisms
- **CMS survey and certification**: Conditions of Participation compliance
- **OCR complaints**: HIPAA and civil rights violations
- **State licensing boards**: Professional discipline
- **Private right of action**: Tort litigation
- **Qui tam actions**: False Claims Act violations

## Special Populations

### Minors
- **Mature minor doctrine**: Some states allow minors to consent to certain treatments
- **Emancipated minors**: May have full consent rights
- **Parental consent exceptions**: Emergency, contraception, STI treatment, mental health vary by state

### Incapacitated Adults
- **Hierarchy of surrogates**: Healthcare proxy > court-appointed guardian > statutory surrogates
- **Best interest standard**: When patient preferences unknown
- **Medical orders for life-sustaining treatment (MOLST/POLST)**: Portable advance directives

### Psychiatric Patients
- **Involuntary commitment criteria**: Danger to self/others, grave disability
- **Right to refuse medication**: May be overridden by court order
- **Periodic review**: Ongoing evaluation of need for continued involuntary treatment

## Implementation Challenges

### Systemic Barriers
- **Health literacy**: Average American reads at 8th grade level; medical information often higher
- **Language barriers**: LEP patients may receive inferior care
- **Implicit bias**: Documented disparities in pain treatment, diagnostic workup
- **Time constraints**: Adequate informed consent requires time

### Documentation Requirements
- **Consent documentation**: Elements of valid consent
- **Rights acknowledgment**: Patient signature confirming receipt of rights information
- **Grievance tracking**: Monitoring complaints and resolutions
- **Interpreter documentation**: Language services provided`,
      keyTerms: [
        { term: 'therapeutic privilege', definition: 'Ethical exception allowing physicians to withhold information if disclosure would significantly harm the patient' },
        { term: 'substituted judgment', definition: 'Decision-making standard where surrogate decides based on what the patient would have wanted' },
        { term: 'best interest standard', definition: 'Decision-making standard used when patient\'s preferences are unknown; focuses on objective benefits/burdens' },
        { term: 'mature minor doctrine', definition: 'Legal principle allowing minors to consent to medical treatment if they demonstrate sufficient maturity and understanding' },
        { term: 'medical futility', definition: 'Situation where treatment cannot achieve its intended physiological goal or would not benefit the patient' },
        { term: 'information blocking', definition: 'Practices that interfere with access, exchange, or use of electronic health information (prohibited by 21st Century Cures Act)' },
      ],
      clinicalNotes: 'Capacity is decision-specific and may fluctuate. Document capacity assessments thoroughly. When uncertain, involve psychiatry or ethics consultation. Consider cultural factors in end-of-life discussions. Health literacy assessment (e.g., REALM, TOFHLA) can guide communication strategies.',
    },
    5: {
      level: 5,
      summary: 'Patient rights require integration of evolving legal standards, clinical ethics expertise, health systems science, and practical implementation strategies to navigate complex scenarios involving competing rights, emerging technologies, and vulnerable populations.',
      explanation: `## Contemporary Legal Landscape

### Evolving Standards
- **No Surprises Act (2022)**: Protection from unexpected out-of-network bills, price transparency requirements
- **Information Blocking Rule**: ONC enforcement, eight exceptions defined
- **Right to Access Initiative**: OCR enforcement of HIPAA access rights
- **State surprise billing laws**: Variable additional protections

### Emerging Issues
- **Reproductive healthcare post-Dobbs**: State-specific rights landscape
- **Gender-affirming care**: Intersection of minor rights and parental authority
- **AI and clinical decision support**: Transparency in algorithmic recommendations
- **Genetic information**: GINA protections and limitations

## Complex Scenarios

### Rights Conflicts
| Scenario | Competing Interests | Resolution Framework |
|----------|--------------------|--------------------|
| Minor seeking confidential STI treatment | Minor's privacy vs. parental rights | State-specific minor consent laws |
| Family disputes over life support | Multiple surrogates' views | Hierarchy of authority, ethics consultation |
| Religious refusal of blood products | Autonomy vs. beneficence | Document refusal, explore alternatives |
| Restraint for violent patient | Safety vs. liberty | Least restrictive alternative, continuous monitoring |
| Research on decisionally impaired | Science vs. protection | LAR consent, IRB oversight, risk-benefit |

### Institutional Implementation

**Governance Structure:**
- Patient rights committee
- Ethics committee with patient/community representation
- Patient and Family Advisory Councils (PFACs)
- Compliance and privacy officers

**Quality Metrics:**
- HCAHPS communication scores
- Grievance resolution timelines
- Interpreter utilization rates
- Consent documentation compliance
- Patient access to records (21st Century Cures compliance)

### Risk Management

**High-Risk Situations:**
1. **AMA discharges**: Document capacity, risks discussed, follow-up arranged
2. **Refusal of recommended treatment**: Capacity assessment, informed refusal documentation
3. **Surrogate conflicts**: Ethics consultation, legal counsel if needed
4. **Requests for "futile" treatment**: Communication, palliative care consultation, ethics committee

**Documentation Essentials:**
- Dated, timed entries
- Specific discussions documented
- Patient/surrogate responses recorded
- Interpreter use noted
- Follow-up plans specified

## Health Equity and Rights

### Social Determinants
- Rights are theoretical without addressing access barriers
- Transportation, time off work, childcare affect care-seeking
- Digital divide limits telehealth and patient portal access
- SDOH screening and intervention as rights implementation

### Structural Competency
- Recognition of how institutions perpetuate inequities
- Policy-level interventions beyond individual encounters
- Community engagement in rights implementation
- Data disaggregation to identify disparities

## International Perspective

- **UNESCO Universal Declaration on Bioethics**: Global framework
- **WHO Patient Safety Rights**: International standards
- **EU GDPR**: More stringent privacy than HIPAA
- **Medical tourism**: Navigating rights across jurisdictions

## Future Directions

1. **Data rights**: Ownership and portability of health information
2. **AI transparency**: Right to understand algorithmic clinical decisions
3. **Climate and health**: Environmental health as patient right
4. **Pandemic preparedness**: Balancing individual rights and public health
5. **Consumer-directed healthcare**: Shift toward patient as healthcare consumer`,
      keyTerms: [
        { term: 'No Surprises Act', definition: '2022 federal law protecting patients from unexpected out-of-network bills for emergency and certain non-emergency services' },
        { term: 'information blocking exceptions', definition: 'Eight permitted reasons for not sharing EHI: preventing harm, privacy, security, infeasibility, health IT performance, content/manner, fees, licensing' },
        { term: 'PFAC', definition: 'Patient and Family Advisory Council - formal mechanism for patient/family input in healthcare organization governance' },
        { term: 'HCAHPS', definition: 'Hospital Consumer Assessment of Healthcare Providers and Systems - standardized patient experience survey required for CMS reporting' },
        { term: 'structural competency', definition: 'Framework for understanding how social, political, and economic structures create health inequities' },
        { term: 'GINA', definition: 'Genetic Information Nondiscrimination Act - prohibits discrimination in health insurance and employment based on genetic information' },
      ],
      clinicalNotes: `Key implementation priorities:
1. Embed rights education in patient engagement workflows
2. Train staff on implicit bias and health literacy
3. Leverage EHR for rights documentation (consent tracking, advance directive flags)
4. Monitor and report grievance trends to quality committees
5. Ensure interpreter services available 24/7 for LEP patients
6. Regular audit of information blocking compliance
7. Patient portal adoption initiatives to support access rights
8. Community health worker integration for rights navigation`,
    },
  },

  media: [
    {
      id: 'patient-rights-infographic',
      type: 'diagram',
      filename: 'patient-rights-overview.svg',
      title: 'Patient Rights Overview',
      description: 'Visual summary of fundamental patient rights in healthcare settings',
    },
  ],

  citations: [
    {
      id: 'aha-patient-rights',
      type: 'website',
      title: 'The Patient Care Partnership',
      source: 'American Hospital Association',
      url: 'https://www.aha.org/other-resources/patient-care-partnership',
      accessedDate: '2026-01-24',
    },
    {
      id: 'cms-patient-rights',
      type: 'website',
      title: 'Patient Rights Conditions of Participation',
      source: 'Centers for Medicare & Medicaid Services',
      url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-G/part-482/subpart-C/section-482.13',
      accessedDate: '2026-01-24',
    },
    {
      id: 'hhs-patient-rights',
      type: 'website',
      title: 'Know Your Rights',
      source: 'U.S. Department of Health and Human Services',
      url: 'https://www.hhs.gov/healthcare/about-the-aca/patient-rights/index.html',
      accessedDate: '2026-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'concept-informed-consent', targetType: 'concept', relationship: 'related', label: 'Informed Consent' },
    { targetId: 'concept-hipaa-privacy', targetType: 'concept', relationship: 'related', label: 'HIPAA and Medical Privacy' },
    { targetId: 'concept-healthcare-proxy', targetType: 'concept', relationship: 'related', label: 'Healthcare Proxy' },
    { targetId: 'concept-advance-directives', targetType: 'concept', relationship: 'related', label: 'Advance Directives' },
  ],

  tags: {
    systems: ['healthcare-system'],
    topics: ['patient-advocacy', 'legal-rights', 'healthcare-policy', 'medical-ethics'],
    keywords: ['patient rights', 'healthcare rights', 'EMTALA', 'informed consent', 'patient advocacy'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default patientBillOfRights;
