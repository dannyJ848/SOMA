import { LegacyEducationalContent } from '../../types';

export const malpracticeOverview: LegacyEducationalContent = {
  title: 'Medical Malpractice Overview',
  description: 'Understanding the fundamentals of medical malpractice law and its implications for healthcare providers.',
  category: 'medical-legal',
  levels: {
    1: {
      title: 'Introduction to Medical Malpractice',
      content: `Medical malpractice occurs when a healthcare professional provides treatment that falls below the accepted standard of care, resulting in injury or death to a patient.

What is Medical Malpractice?
Medical malpractice is a legal concept that holds healthcare providers accountable for negligence in their professional duties. It is not simply when a treatment goes wrong—it requires proof that the provider deviated from accepted medical practices.

Key Points:
- Malpractice is a form of professional negligence
- The standard of care is defined by what a reasonable healthcare provider would do in similar circumstances
- Not all poor outcomes constitute malpractice
- Patients must prove damages resulted from the negligence

Common Misconceptions:
- A bad outcome doesn't always mean malpractice occurred
- Malpractice requires a breach of the standard of care
- Known complications of procedures are not necessarily malpractice
- Honest mistakes don't always qualify as legal malpractice`,
      keyPoints: [
        'Medical malpractice involves breach of professional duty',
        'Standard of care is the legal benchmark',
        'Poor outcomes alone do not constitute malpractice',
        'Patients must prove causation and damages'
      ],
      vocabulary: [
        { term: 'Standard of Care', definition: 'The level of care that a reasonably competent healthcare professional would provide under similar circumstances.' },
        { term: 'Negligence', definition: 'Failure to exercise the care that a reasonably prudent person would exercise in like circumstances.' },
        { term: 'Plaintiff', definition: 'The party who brings a lawsuit against another party.' },
        { term: 'Defendant', definition: 'The party against whom a lawsuit is filed.' }
      ]
    },
    beginner: {
      title: 'Elements of Medical Malpractice',
      content: `To establish a medical malpractice claim, four essential elements must be proven. Understanding these elements is crucial for both healthcare providers and patients.

The Four Essential Elements:

1. Duty of Care
The healthcare provider must have owed a professional duty to the patient. This is typically established when a provider-patient relationship exists. The duty requires the provider to adhere to the appropriate medical standard of care.

2. Breach of Duty
The provider must have breached that duty by failing to meet the standard of care. This is proven by showing what a reasonable practitioner would have done differently under the same circumstances.

3. Causation
The breach of duty must have directly caused the patient's injury. This involves:
- Actual cause: The injury would not have occurred but for the provider's actions
- Proximate cause: The injury was a foreseeable consequence of the provider's actions

4. Damages
The patient must have suffered actual damages, which may include:
- Physical pain and suffering
- Mental anguish
- Additional medical expenses
- Lost wages or earning capacity
- Disability or impairment

Burden of Proof:
The plaintiff (patient) bears the burden of proving each element by a preponderance of the evidence (more likely than not).`,
      keyPoints: [
        'Duty of care established through provider-patient relationship',
        'Breach must deviate from accepted standard of care',
        'Causation connects breach to injury directly',
        'Damages must be measurable and proven'
      ],
      vocabulary: [
        { term: 'Actual Cause', definition: 'Also known as "cause-in-fact," meaning the harm would not have occurred without the defendant\'s actions.' },
        { term: 'Proximate Cause', definition: 'A legal concept determining whether the defendant\'s actions were sufficiently related to the harm to justify liability.' },
        { term: 'Preponderance of Evidence', definition: 'The standard of proof in civil cases, requiring that a fact is more likely true than not.' },
        { term: 'Expert Testimony', definition: 'Testimony from a qualified medical professional about the standard of care and whether it was breached.' }
      ]
    },
    intermediate: {
      title: 'Standard of Care and Its Determination',
      content: `The standard of care is the cornerstone of any medical malpractice case. It serves as the benchmark against which a healthcare provider's actions are measured.

How Standard of Care is Determined:

1. Professional Custom Test
The traditional approach looks to what practitioners in the same field, region, and similar circumstances would do. This varies by:
- Medical specialty
- Geographic location (though this is diminishing in importance)
- Available resources and facilities
- Time of treatment

2. National Standards
Modern trends increasingly favor national standards rather than local variations, particularly for board-certified specialists who are held to the standards of their specialty nationwide.

3. Evidence-Based Medicine
Courts increasingly rely on:
- Clinical practice guidelines
- Peer-reviewed medical literature
- Consensus statements from professional organizations
- Institutional protocols and procedures

4. Expert Testimony
Expert witnesses are typically required to establish:
- The applicable standard of care
- How the defendant breached that standard
- The causal connection between the breach and injury
- The extent of damages

Qualifying as an Expert:
- Similar training, education, and experience
- Knowledge of the relevant standard at the time of treatment
- Active practice in the same or similar field
- Familiarity with the community's practices (for locality rule jurisdictions)

Respectable Minority Rule:
Some jurisdictions recognize that when a respected minority of practitioners supports a particular treatment approach, following that approach may meet the standard of care even if it differs from majority practice.`,
      keyPoints: [
        'Standard of care varies by specialty and circumstances',
        'National standards increasingly supersede local variations',
        'Expert testimony is typically required to establish standards',
        'Respectable minority rule protects legitimate innovation'
      ],
      vocabulary: [
        { term: 'Locality Rule', definition: 'A legal doctrine holding providers to the standard of care in their local community, now largely replaced by national standards.' },
        { term: 'Respectable Minority Rule', definition: 'A doctrine holding that following a recognized minority practice can still meet the standard of care.' },
        { term: 'Clinical Practice Guidelines', definition: 'Systematically developed statements to assist practitioner and patient decisions about appropriate healthcare.' },
        { term: 'Daubert Standard', definition: 'A legal standard for evaluating the admissibility of expert testimony, emphasizing scientific validity.' }
      ]
    },
    advanced: {
      title: 'Medical Malpractice Claims Process and Defenses',
      content: `Navigating a medical malpractice claim involves complex procedural requirements and potential defenses. Understanding these processes is essential for healthcare providers.

Pre-Litigation Requirements:

Certificate of Merit
Many states require plaintiffs to obtain a certificate from a qualified medical expert attesting that:
- The defendant breached the standard of care
- This breach caused the plaintiff's injuries
- The claim has merit

Notice Requirements
Some jurisdictions require:
- Pre-suit notice to potential defendants
- Opportunity for pre-litigation settlement discussions
- Waiting periods before filing suit

Statute of Limitations
Time limits for filing vary by state and may include:
- Standard period (typically 2-3 years from injury)
- Discovery rule (from when injury was discovered)
- Foreign object exceptions
- Minor tolling until age of majority

Common Defenses:

1. Contributory Negligence
- Plaintiff's own actions contributed to injury
- May reduce or bar recovery depending on jurisdiction
- Includes failure to follow medical advice

2. Assumption of Risk
- Patient knowingly accepted risks
- Valid informed consent may be a defense
- Limited to known and explained risks

3. Good Faith and Standard of Care
- Deviation was justified by emergency circumstances
- Treatment followed acceptable alternative approaches
- Judgement calls within appropriate clinical discretion

4. Intervening Causes
- Subsequent events superseded defendant's actions
- Third-party actions caused the injury
- Patient's non-compliance broke causal chain

5. Statute of Limitations
- Claim filed outside statutory period
- Different rules for different types of claims
- Tolling exceptions may apply

Damages Available:

Compensatory Damages
- Economic: medical expenses, lost wages, rehabilitation costs
- Non-economic: pain and suffering, emotional distress, loss of enjoyment

Punitive Damages
- Available only for intentional or reckless misconduct
- Rare in pure negligence cases
- Subject to constitutional caps and limitations

Damage Caps
Many states impose caps on:
- Non-economic damages
- Punitive damages
- Total recovery amounts
- These vary widely and face constitutional challenges`,
      keyPoints: [
        'Pre-litigation requirements vary significantly by jurisdiction',
        'Multiple defenses may apply to reduce or eliminate liability',
        'Damages include both economic and non-economic compensation',
        'Statute of limitations is a critical defense in many cases'
      ],
      vocabulary: [
        { term: 'Certificate of Merit', definition: 'A document from a qualified expert verifying that a malpractice claim has merit, required before filing suit in some jurisdictions.' },
        { term: 'Discovery Rule', definition: 'A legal doctrine that the statute of limitations begins when the injury is discovered or reasonably should have been discovered.' },
        { term: 'Tolling', definition: 'Pausing or delaying the running of the statute of limitations for certain reasons, such as the plaintiff\'s minority.' },
        { term: 'Contributory Negligence', definition: 'A defense asserting that the plaintiff\'s own negligence contributed to their injury.' }
      ]
    },
    expert: {
      title: 'Risk Management, Insurance, and System-Level Approaches',
      content: `Expert-level understanding of medical malpractice requires knowledge of risk management strategies, insurance systems, and broader efforts to improve patient safety and reduce litigation.

Risk Management Fundamentals:

1. Clinical Risk Assessment
- Identify high-risk procedures and providers
- Analyze patterns of adverse events
- Monitor complaint and claim trends
- Evaluate communication breakdown points

2. Communication and Disclosure
- "Sorry works" - disclosure and apology programs
- Early offer programs for resolving claims
- Proactive communication about adverse events
- Training in difficult conversations

3. Documentation Excellence
- Complete and timely charting
- Clear rationale for clinical decisions
- Documentation of patient communications
- Preservation of records and evidence

4. Systems Improvements
- Standardized protocols and checklists
- Decision support systems
- Second opinion programs
- Peer review and quality improvement

Medical Malpractice Insurance:

Types of Coverage
- Claims-made: covers claims made during policy period
- Occurrence: covers incidents during policy period regardless of when claim is made
- Tail coverage: extends claims-made coverage after policy expiration

Insurance Market Factors
- Specialty-specific risk profiles
- Geographic variation in premium costs
- Claims history and individual risk assessment
- Coverage limits and deductibles

Alternative Liability Systems:

1. Health Courts
- Specialized courts for medical injury claims
- Expert judges rather than juries
- Scheduled damages based on injury type
- Limited right to appeal

2. Administrative Compensation Systems
- No-fault approach to avoidable medical injuries
- Lower transaction costs
- Faster compensation
- Focus on system improvement rather than individual blame

3. Safe Harbor Provisions
- Protection from liability for following evidence-based guidelines
- Limited to clearly defined clinical situations
- May encourage defensive medicine avoidance

4. Contractual Alternatives
- Arbitration agreements
- Limited liability arrangements
- Alternative dispute resolution clauses

Emerging Trends:

Telemedicine Malpractice
- Cross-border licensure issues
- Standard of care across jurisdictions
- Technology failure liability
- Limited physical examination concerns

AI and Decision Support
- Liability for algorithm recommendations
- Human versus machine responsibility
- Training data biases
- Black box decision problems

Value-Based Care Implications
- Quality metrics as evidence of care quality
- Bundled payment risk allocation
- Population health management liability
- Shared savings arrangements`,
      keyPoints: [
        'Proactive risk management reduces claim frequency and severity',
        'Insurance models significantly impact litigation patterns',
        'Alternative liability systems aim to reduce adversarial processes',
        'New technologies create novel liability challenges'
      ],
      vocabulary: [
        { term: 'Claims-Made Policy', definition: 'Insurance covering claims made during the policy period regardless of when the incident occurred.' },
        { term: 'Tail Coverage', definition: 'Extended reporting coverage allowing claims-made policyholders to report claims after policy expiration.' },
        { term: 'Early Offer Programs', definition: 'Systems where defendants offer early compensation to avoid litigation, often with reduced transaction costs.' },
        { term: 'Defensive Medicine', definition: 'Medical practices motivated by liability concerns rather than patient benefit, including unnecessary tests and referrals.' }
      ]
    }
  }
};
