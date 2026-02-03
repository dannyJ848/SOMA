import { LegacyEducationalContent } from '../../types';

export const liability: LegacyEducationalContent = {
  title: 'Medical Liability and Legal Responsibility',
  description: 'Understanding the various forms of medical liability, legal responsibilities, and accountability frameworks in healthcare.',
  category: 'medical-legal',
  levels: {
    1: {
      title: 'Introduction to Medical Liability',
      content: `Medical liability refers to the legal responsibility healthcare providers have for their actions and decisions that affect patients. Understanding who is legally responsible and when is fundamental to practicing medicine.

What is Medical Liability?
Medical liability means healthcare providers can be held legally accountable for harm caused to patients while providing care. This accountability ensures providers maintain appropriate standards and patients have recourse when harmed.

Who Can Be Held Liable?

Individual Healthcare Providers
- Doctors and physicians
- Nurses and nurse practitioners
- Pharmacists
- Therapists and rehabilitation specialists
- Mental health professionals
- Dentists and other specialists

Healthcare Organizations
- Hospitals
- Clinics and medical centers
- Nursing homes and long-term care facilities
- Pharmacies
- Insurance companies (in some situations)

Other Parties
- Medical device manufacturers
- Pharmaceutical companies
- Healthcare administrators
- Medical staff overseeing care

Types of Liability Concerns:
- Prescribing the wrong medication
- Surgical errors
- Missed or delayed diagnoses
- Failure to obtain informed consent
- Inadequate patient monitoring
- Poor communication with patients
- Documentation errors

Why Liability Matters:
- Protects patient safety
- Encourages quality care
- Provides recourse for harmed patients
- Shapes how medicine is practiced
- Influences healthcare costs`,
      keyPoints: [
        'Medical liability holds providers accountable for patient harm',
        'Both individuals and organizations can be liable',
        'Liability affects many aspects of healthcare delivery',
        'Proper training and documentation help reduce liability risk'
      ],
      vocabulary: [
        { term: 'Liable', definition: 'Legally responsible or obligated according to the law.' },
        { term: 'Healthcare Provider', definition: 'Any professional or organization that delivers medical care or services to patients.' },
        { term: 'Accountability', definition: 'The obligation to accept responsibility for one\'s actions and disclose results in a transparent manner.' },
        { term: 'Professional Negligence', definition: 'Failure of a professional to exercise the skill and care normally exercised in their profession.' }
      ]
    },
    beginner: {
      title: 'Types of Medical Liability',
      content: `Medical liability encompasses various legal theories under which healthcare providers can be held responsible for patient harm. Understanding these different types is essential for comprehensive risk management.

1. Negligence (Malpractice)
The most common form of medical liability, negligence requires:
- A duty of care existed
- The duty was breached by failing to meet the standard of care
- The breach caused the patient's injury
- Damages resulted

Examples of Negligence:
- Failure to diagnose a condition that a competent provider would have identified
- Medication errors (wrong dose, wrong drug, wrong patient)
- Surgical mistakes (operating on wrong site, leaving instruments behind)
- Inadequate monitoring during procedures
- Failure to follow up on test results

2. Intentional Torts
Actions taken intentionally that cause harm:
- Battery: Performing procedures without consent
- False imprisonment: Involuntary confinement without justification
- Fraud: Misrepresentation of qualifications or treatment outcomes
- Defamation: Damaging a patient's reputation

3. Vicarious Liability
Employers are liable for employees' actions performed within scope of employment:
- Hospitals liable for employed physicians
- Hospitals potentially liable for independent contractors under certain circumstances
- "Respondeat superior" doctrine applies

4. Corporate Liability
Organizations can be directly liable for:
- Negligent hiring or credentialing
- Inadequate policies or procedures
- Failure to maintain safe facilities
- Understaffing or inadequate supervision
- Failure to properly supervise independent contractors

5. Products Liability
Medical products can create liability for:
- Manufacturers (defective devices or drugs)
- Hospitals that select or maintain equipment
- Providers who use products improperly

6. Breach of Contract
Failure to fulfill agreed-upon obligations:
- Insurance company denial of covered benefits
- Failure to provide promised care
- Violation of provider-patient agreements`,
      keyPoints: [
        'Negligence is the most common liability theory in healthcare',
        'Intentional torts involve deliberate harmful actions',
        'Employers can be liable for employee actions',
        'Organizations have direct liability for systemic failures'
      ],
      vocabulary: [
        { term: 'Tort', definition: 'A civil wrong that causes harm, for which the injured party can seek compensation through legal action.' },
        { term: 'Battery (Medical)', definition: 'Intentional harmful or offensive contact with a patient, often performing procedures without proper consent.' },
        { term: 'Respondeat Superior', definition: 'A legal doctrine holding employers responsible for employees\' actions performed within the scope of employment.' },
        { term: 'Scope of Employment', definition: 'Activities that are reasonably related to job duties and authorized by the employer.' }
      ]
    },
    intermediate: {
      title: 'Vicarious Liability and Corporate Responsibility',
      content: `Vicarious liability and corporate responsibility are crucial concepts in medical law, extending liability beyond individual providers to the organizations that employ or credential them.

Vicarious Liability Fundamentals:

Doctrine of Respondeat Superior
- "Let the master answer"
- Employers liable for employees' torts committed within scope of employment
- Applies regardless of employer's personal fault
- Based on policy of ensuring victims have financially responsible defendants

Scope of Employment Analysis
Courts consider:
- Whether the act was authorized by the employer
- Whether it occurred during work hours and at the workplace
- Whether it was motivated by serving the employer's interests
- Whether it was foreseeable that the employee might act this way

Independent Contractor Problem
- General rule: employers NOT liable for independent contractors
- Exceptions:
  * Non-delegable duties (e.g., providing emergency care)
  * Negligent selection of contractors
  * Contractor is apparent agent
  * Employer controls contractor's work methods

Hospital Liability Specifically:

1. Direct Corporate Liability
- Negligent credentialing: Failing to properly vet medical staff
- Inadequate staffing or resources
- Failure to maintain safe facilities
- Defective policies or protocols
- Failure to supervise patient care

2. Vicarious Liability for Medical Staff
- Traditional rule: Independent contractor physicians exempted
- Modern trend: Hospital liability expanded through:
  * Apparent agency theory
  * Borrowed servant doctrine
  * Non-delegable duty exceptions
  * Statutory expansions

3. Emergency Department Liability
- EMTALA creates federal duty to provide emergency care
- Hospitals liable for failures regardless of physician status
- On-call specialists may create hospital liability

Apparent Agency Doctrine
- Hospital liable if patient reasonably believed:
  * Physician was hospital employee
  * Hospital controlled physician's care
- Factors: hospital's representations, patient's understanding, control exercised

Non-Delegable Duties
Certain duties cannot be delegated to escape liability:
- Emergency medical care
- Care of admitted patients
- Services held out as provided by the hospital
- Duties imposed by regulation

Corporate Negligence Elements
- Duty owed directly to patient
- Breach of corporate duty (not individual provider failure)
- Causation (corporate failure caused injury)
- Damages resulted

Practical Implications:
- Credentialing and privileging processes are legally significant
- Medical staff bylaws matter for liability determinations
- Hospital policies can create direct liability
- Proper classification of workers is crucial
- Contractual arrangements affect liability allocation`,
      keyPoints: [
        'Hospitals face both direct and vicarious liability',
        'Independent contractor status provides limited protection',
        'Apparent agency can create liability despite contractual arrangements',
        'Proper credentialing is a critical corporate duty'
      ],
      vocabulary: [
        { term: 'Apparent Agency', definition: 'A legal theory holding principals liable for agents who appear to have authority to act on their behalf, even if no actual agency exists.' },
        { term: 'Non-Delegable Duty', definition: 'A legal duty that cannot be assigned to another party; the delegator remains responsible regardless of assignment.' },
        { term: 'Credentialing', definition: 'The process of verifying and assessing a healthcare provider\'s qualifications, education, training, and licensure.' },
        { term: 'Borrowed Servant Doctrine', definition: 'A legal concept determining which employer is liable when an employee is temporarily working under another\'s supervision.' }
      ]
    },
    advanced: {
      title: 'Multi-Party Liability and Complex Claims',
      content: `Complex medical cases often involve multiple parties who may share liability. Understanding how responsibility is allocated among defendants is crucial for both plaintiffs and defense counsel.

Joint and Several Liability:

Traditional Rule
- Each defendant liable for full amount of damages
- Plaintiff could collect entire judgment from any defendant
- Defendants then sought contribution from others
- Plaintiff benefited from ability to collect from "deep pockets"

Modern Trends
- Many states have abolished or modified joint and several liability
- Several-only liability: each defendant pays only their share
- Hybrid approaches: joint and several for certain types of defendants or damages
- Thresholds for application (e.g., only if defendant >50% at fault)

Contribution and Indemnity:
- Contribution: Right of paying defendant to recover from other tortfeasors
- Indemnity: Complete shifting of liability from one party to another
- Contractual indemnification common in healthcare arrangements
- Implied indemnity based on relationship between parties

Multi-Defendant Scenarios:

1. Surgical Teams
- Surgeon, anesthesiologist, nurses, assisting physicians
- Each professional responsible for own specialty
- Attending surgeon may have supervisory liability
- Hospital potentially liable for all employees

2. Complex Care Teams
- Primary care physician, specialists, consultants
- Coordination failures can create shared liability
- "Buck stops" questions about who coordinates care
- Referring versus treating physician responsibilities

3. Institutional Providers
- Multiple facilities involved in care
- Transfer liability between institutions
- Discharge planning responsibilities
- Follow-up care coordination

4. Product Liability Claims
- Manufacturer, distributor, seller, and healthcare provider
- Each potentially liable for different aspects of harm
- Comparative fault principles apply
- Settlement contribution agreements common

Comparative Fault Systems:

Pure Comparative Fault
- Plaintiff recovers damages reduced by their percentage of fault
- Recovery possible even if plaintiff 99% at fault
- Plaintiff's own negligence considered

Modified Comparative Fault (50% Rule)
- Plaintiff recovers if less than 50% at fault
- Barred if 50% or more at fault
- Majority approach in U.S.

Modified Comparative Fault (51% Rule)
- Plaintiff recovers if 50% or less at fault
- Barred if more than 50% at fault
- Variation of 50% rule

Settlement Issues:
- Empty chair problem: Settling defendant removed from case
- Good faith settlement protections
- Credit for settlements against judgment
- Structured settlements and future damages

Successor Liability:
- Acquiring entities may assume liability
- Corporate mergers and acquisitions
- Continuity of enterprise doctrine
- Contractual assumption or non-assumption`,
      keyPoints: [
        'Joint and several liability rules vary significantly by jurisdiction',
        'Multiple defendants require careful fault allocation',
        'Comparative fault systems affect recovery',
        'Settlements among defendants create complex issues'
      ],
      vocabulary: [
        { term: 'Joint and Several Liability', definition: 'A legal rule allowing plaintiffs to recover the full judgment amount from any of multiple defendants regardless of individual fault shares.' },
        { term: 'Comparative Fault', definition: 'A system allocating damages based on each party\'s degree of responsibility for the harm.' },
        { term: 'Contribution', definition: 'The right of a defendant who has paid more than their share of liability to recover proportions from other liable parties.' },
        { term: 'Empty Chair Defense', definition: 'Argument that a defendant should not be liable because the fault lies with a settled or absent defendant.' }
      ]
    },
    expert: {
      title: 'Enterprise Liability and System-Level Accountability',
      content: `Enterprise liability represents an evolving approach to medical accountability, focusing on system-level responsibility rather than individual blame. This expert-level examination explores emerging frameworks for allocating healthcare liability.

Enterprise Liability Concepts:

Theoretical Foundations
- Systems approach to medical error
- Organization rather than individual as responsible party
- "Swiss cheese model" of organizational accidents
- Alignment with quality improvement and patient safety

Traditional vs. Enterprise Liability
- Traditional: Individual provider responsible for negligence
- Enterprise: Organization responsible for system failures
- Traditional: Tort-based compensation
- Enterprise: Administrative or insurance-based systems
- Traditional: Focus on blame
- Enterprise: Focus on improvement

Models of Enterprise Liability:

1. Institutional Enterprise Liability
- Hospital or health system liable for all patient injuries
- Individual provider liability replaced or secondary
- Organization controls quality and safety processes
- Aligns incentives for system improvement

2. Specialty-Based Enterprise Liability
- Liability organized by medical specialty
- Professional societies assume liability roles
- Specialty-wide insurance and quality programs
- Peer review and practice standardization

3. System-Wide Enterprise Liability
- Universal coverage for medical injury
- Government or national insurance primary payer
- Individual tort actions limited or eliminated
- Compensation outside adversarial system

Implementation Considerations:

Advantages
- Consistent compensation without proving negligence
- Reduced transaction costs
- Focus on system improvement rather than blame
- Better alignment with quality improvement
- Reduced defensive medicine
- Broader coverage of medical errors

Challenges
- Moral hazard potential
- Reduced individual accountability
- Transition costs from existing system
- Political feasibility
- Provider resistance
- Determining appropriate compensation levels
- Maintaining quality oversight

International Examples:

Sweden's No-Fault System
- Pharmaceutical insurance covers all drug-related injuries
- No requirement to prove negligence
- Faster, less adversarial compensation
- Lower administrative costs

New Zealand's Accident Compensation Corporation
- Comprehensive no-fault accident insurance
- Covers medical injuries
- Bar on most tort actions
- Government-administered system

Virginia's Birth Injury Neurological Compensation Program
- No-fault system for birth-related neurological injuries
- Funded by provider fees
- Alternative to malpractice litigation
- Limited to specified injuries

Future Directions:

Value-Based Liability
- Liability tied to quality metrics
- Bundled payment arrangements with risk allocation
- Population health accountability
- Shared savings/risk arrangements

Technology-Mediated Liability
- AI and algorithm accountability
- Telehealth jurisdiction questions
- Remote monitoring responsibilities
- Data-driven decision support liability

Learning Health System Liability
- Continuous learning as standard of care
- Rapid cycle improvement expectations
- Implementation science obligations
- Knowledge translation requirements`,
      keyPoints: [
        'Enterprise liability shifts focus from individual to system responsibility',
        'Multiple models exist with varying structures and incentives',
        'International examples provide alternative frameworks',
        'Future systems may integrate with value-based care'
      ],
      vocabulary: [
        { term: 'Enterprise Liability', definition: 'A legal approach holding organizations rather than individuals primarily responsible for medical errors and system failures.' },
        { term: 'Swiss Cheese Model', definition: 'A conceptual model of accidents showing how multiple system failures align to allow harm to occur.' },
        { term: 'No-Fault System', definition: 'A compensation system that pays for injuries without requiring proof of negligence or fault.' },
        { term: 'Moral Hazard', definition: 'The increased risk of problematic behavior when individuals are protected from consequences of their actions.' }
      ]
    }
  }
};
