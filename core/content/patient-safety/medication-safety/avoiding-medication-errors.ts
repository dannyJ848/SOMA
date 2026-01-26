/**
 * Avoiding Medication Errors
 *
 * Strategies for preventing medication mistakes.
 */

import { EducationalContent } from '../../types';

export const avoidingMedicationErrors: EducationalContent = {
  id: 'concept-avoiding-medication-errors',
  type: 'concept',
  name: 'Avoiding Medication Errors',
  alternateNames: ['Medication Error Prevention', 'Medication Safety', 'Safe Medication Use'],

  levels: {
    1: {
      level: 1,
      summary: 'Medication mistakes can happen, but you can help prevent them by asking questions and being careful.',
      explanation: `Medication errors are mistakes with medicine. They can happen to anyone, but there are ways to prevent them!

**Types of Mistakes:**
- Taking the wrong medicine
- Taking too much or too little
- Taking medicine at the wrong time
- Missing doses

**How to Stay Safe:**

**Know Your Medicine:**
- Know the name of your medicine
- Know what it looks like
- Know when to take it
- Know why you take it

**Ask Questions:**
- "What is this medicine for?"
- "How do I take it?"
- "What does it look like?"

**Double-Check:**
- Check the label before taking medicine
- Make sure it's YOUR medicine
- Ask if something looks different

**Tell Your Doctor:**
- About all medicines you take
- About any allergies
- If you have side effects

**Remember:**
You are an important part of staying safe with medicines. It's always okay to ask questions!`,
      keyTerms: [
        { term: 'medication error', definition: 'A mistake with medicine that could cause harm' },
        { term: 'dose', definition: 'How much medicine you take at one time' },
        { term: 'allergy', definition: 'When your body has a bad reaction to something' },
      ],
      analogies: [
        'Checking your medicine is like checking your seat belt - a simple check keeps you safe!',
      ],
      examples: [
        'Looking at your pill before taking it to make sure it\'s the right one.',
        'Asking the pharmacist if a pill looks different than usual.',
      ],
    },
    2: {
      level: 2,
      summary: 'Medication errors can occur at any stage - prescribing, dispensing, or administering. Understanding common errors helps you prevent them.',
      explanation: `Medication errors affect millions of people each year, but many are preventable with awareness and action.

**Where Errors Happen:**

**1. Prescribing Errors:**
- Wrong drug prescribed
- Wrong dose
- Drug interaction missed
- Allergy not checked

**2. Pharmacy Errors:**
- Wrong drug dispensed
- Wrong strength
- Wrong quantity
- Wrong label information

**3. Administration Errors:**
- Taking wrong dose
- Missing doses
- Taking at wrong time
- Wrong route (chewing extended-release, etc.)

**Common Error Types:**
| Error | Example | Prevention |
|-------|---------|------------|
| Wrong drug | Similar names confused | Verify drug name |
| Wrong dose | 10mg vs 100mg | Check numbers carefully |
| Wrong time | Morning vs evening | Use reminders |
| Wrong patient | Same name in household | Check full name |

**Prevention Strategies:**

**At the Doctor's Office:**
- Ask the name and purpose of any new medication
- Mention all medications you take
- Report any allergies
- Get written instructions

**At the Pharmacy:**
- Verify your name and medication
- Check if pills look different
- Ask about any concerns
- Request counseling

**At Home:**
- Read the label before taking
- Use a pill organizer
- Set reminders
- Keep medications in original bottles
- Don't share medications

**High-Risk Situations:**
- Multiple medications
- Similar-sounding drug names
- Similar-looking pills
- Complicated schedules
- Recent changes in medications

**When Something Seems Wrong:**
- Trust your instincts
- Ask before taking
- Contact your pharmacist or doctor
- Report errors so others can be protected`,
      keyTerms: [
        { term: 'prescribing error', definition: 'A mistake made when a doctor writes a prescription' },
        { term: 'dispensing error', definition: 'A mistake made when the pharmacy fills a prescription' },
        { term: 'administration error', definition: 'A mistake made when taking medication' },
        { term: 'look-alike sound-alike', definition: 'Drugs with similar names or appearances that are easily confused' },
      ],
      analogies: [
        'Medication safety is like defensive driving - anticipate problems and stay alert.',
      ],
    },
    3: {
      level: 3,
      summary: 'Medication error prevention requires systematic approaches addressing human factors, system design, and active patient participation at each stage of the medication use process.',
      explanation: `## Understanding Medication Errors

### Medication Use Process

**Stages Where Errors Occur:**
1. Prescribing (39% of errors)
2. Transcribing (12%)
3. Dispensing (11%)
4. Administering (38%)
5. Monitoring (ongoing)

### Error Classification

**By Outcome:**
| Category | Definition |
|----------|------------|
| Near miss | Caught before reaching patient |
| No harm | Reached patient, no harm |
| Harm | Caused patient injury |
| Sentinel | Serious harm or death |

**By Error Type:**
- Wrong drug
- Wrong dose
- Wrong route
- Wrong time
- Wrong patient
- Wrong duration
- Omission

### High-Risk Medications

**ISMP High-Alert Medications:**
- Anticoagulants (blood thinners)
- Insulin
- Opioids
- Concentrated electrolytes
- Chemotherapy

**Extra Precautions Needed:**
- Independent double-checks
- Standard concentrations
- Clear labeling
- Patient education

### Human Factors in Errors

**Contributing Factors:**
- Fatigue and workload
- Interruptions and distractions
- Similar packaging
- Confusing abbreviations
- Poor handwriting/communication

**Cognitive Biases:**
- Confirmation bias (seeing what expected)
- Anchoring (first information dominates)
- Automation complacency (over-relying on technology)

### System Defenses

**Technological:**
- Computerized physician order entry
- Barcode medication administration
- Clinical decision support
- Smart infusion pumps

**Process:**
- Standardized protocols
- Independent double-checks
- Medication reconciliation
- Tall-man lettering for similar names

### Patient Role in Error Prevention

**The "Speak Up" Campaign:**
- **S**peak up if you have concerns
- **P**ay attention to care you receive
- **E**ducate yourself about your illness
- **A**sk a trusted family member to advocate
- **K**now what medicines you take
- **U**se a health care organization that has been evaluated
- **P**articipate in all decisions about your treatment

**Specific Actions:**
1. Maintain accurate medication list
2. Understand each medication's purpose
3. Know what medications look like
4. Use one pharmacy when possible
5. Ask about interactions
6. Report side effects promptly

### When to Speak Up

**Warning Signs:**
- Medication looks different than usual
- Instructions seem different
- Name on bottle isn't yours
- Dose seems unusually high or low
- You weren't told about a new medication

**How to Respond:**
- Ask before taking
- Contact pharmacist
- Call prescriber if needed
- Trust your judgment`,
      keyTerms: [
        { term: 'near miss', definition: 'Error that was caught before reaching the patient' },
        { term: 'sentinel event', definition: 'Serious, often preventable event causing significant patient harm' },
        { term: 'tall-man lettering', definition: 'Using capital letters to distinguish look-alike drug names (e.g., hydrALAZINE vs hydrOXYzine)' },
        { term: 'ISMP', definition: 'Institute for Safe Medication Practices - organization focused on medication error prevention' },
        { term: 'independent double-check', definition: 'Having two people separately verify high-risk medications' },
      ],
      clinicalNotes: 'The FDA estimates that medication errors cause at least one death every day and injure approximately 1.3 million people annually in the United States. Most are preventable.',
    },
    4: {
      level: 4,
      summary: 'Advanced medication error prevention integrates human factors engineering, just culture principles, sophisticated technology systems, and structured patient engagement to create multi-layered safety defenses.',
      explanation: `## Advanced Medication Safety Systems

### Human Factors Engineering

**Error-Prone Conditions:**
| Condition | Risk | Mitigation |
|-----------|------|------------|
| Sound-alike names | Wrong drug | Tall-man lettering, separation |
| Look-alike packaging | Wrong drug/strength | Distinct packaging, labeling |
| Complex calculations | Dose errors | Pre-calculated doses, protocols |
| Multiple steps | Omission | Checklists, forcing functions |
| Interruptions | Any error type | Protected tasks, redundancy |

**Forcing Functions:**
Design features that prevent errors:
- Unique connectors for different routes
- Sequential steps that must be completed
- Physical barriers preventing wrong selections

### Technology-Enabled Safety

**Clinical Decision Support:**
- Drug-drug interaction alerts
- Allergy cross-checking
- Dose range checking
- Renal/hepatic dose adjustment
- Duplicate therapy detection

**Barcode Medication Administration:**
- Verifies right patient
- Verifies right drug
- Verifies right dose
- Documents administration time
- Reduces errors by 40-50%

**Smart Infusion Pumps:**
- Drug libraries with dose limits
- Soft and hard stops
- Documentation integration
- Reduced infusion errors

### Just Culture Approach

**Principles:**
- Human error is inevitable
- Most errors result from system failures
- Blame prevents learning
- Accountability is still important
- Distinguish error from reckless behavior

**Response Framework:**
| Behavior | Response |
|----------|----------|
| Human error | Console, fix system |
| At-risk behavior | Coach, incentivize safe choices |
| Reckless behavior | Disciplinary action |

### High-Reliability Strategies

**Principles Applied to Medication Safety:**
1. **Preoccupation with failure:** Actively look for error potential
2. **Reluctance to simplify:** Understand system complexity
3. **Sensitivity to operations:** Frontline awareness
4. **Commitment to resilience:** Plan for errors
5. **Deference to expertise:** Listen to those closest to work

### Structured Patient Engagement

**Teach-Back Method:**
"I want to make sure I explained this clearly. Can you tell me how you will take this medication?"

**Patient Questions Framework:**
At every transition:
- What medications am I taking?
- What are they for?
- What changed?
- What should I watch for?
- Who do I call with questions?

### Special Risk Situations

**Care Transitions:**
- Hospital admission/discharge
- Provider changes
- Setting changes
- Multiple providers

**Polypharmacy:**
- Drug-drug interactions increase
- Complexity increases errors
- Regular medication review needed
- Deprescribing consideration

**Vulnerable Populations:**
- Pediatric (weight-based dosing)
- Geriatric (pharmacokinetic changes)
- Renal/hepatic impairment
- Cognitive impairment

### Error Reporting and Learning

**Why Report:**
- Identifies system weaknesses
- Enables learning
- Prevents future errors
- Required by some regulations

**What to Report:**
- Near misses (caught before harm)
- Errors reaching patient
- Unsafe conditions
- Concerns about systems

**Patient Reporting:**
- To facility patient safety officer
- To FDA MedWatch
- To ISMP consumer reporting`,
      keyTerms: [
        { term: 'forcing function', definition: 'Design feature that makes it difficult or impossible to make a specific error' },
        { term: 'just culture', definition: 'Approach balancing accountability with system improvement, distinguishing human error from reckless behavior' },
        { term: 'high-reliability organization', definition: 'Organization achieving consistent safety despite complex, hazardous operations' },
        { term: 'teach-back', definition: 'Communication technique having patients repeat information to verify understanding' },
        { term: 'deprescribing', definition: 'Systematic process of identifying and discontinuing unnecessary or harmful medications' },
      ],
      clinicalNotes: 'Research shows that most medication errors result from system failures rather than individual negligence. Effective safety programs address both human factors and system design.',
    },
    5: {
      level: 5,
      summary: 'Expert medication error prevention encompasses systems-level safety science, regulatory frameworks, quality improvement methodology, and sophisticated patient advocacy to achieve and sustain medication use system reliability.',
      explanation: `## Expert-Level Medication Safety

### Medication Safety Science

**Swiss Cheese Model Application:**
Multiple barriers with inherent weaknesses:
1. Prescriber knowledge and decision support
2. Pharmacist review and verification
3. Nursing administration checks
4. Patient final verification

**Reason's Model of Accident Causation:**
- Active failures (immediate unsafe acts)
- Latent conditions (system weaknesses)
- Error-producing conditions
- Violation-producing conditions

### Regulatory and Accreditation Framework

**FDA Regulations:**
- Adverse event reporting requirements
- Drug labeling standards
- Risk Evaluation and Mitigation Strategies (REMS)
- Post-market surveillance

**Joint Commission Standards:**
- National Patient Safety Goals
- Medication management chapter
- Sentinel event reporting
- Root cause analysis requirements

**CMS Conditions of Participation:**
- Medication administration requirements
- Pharmacy services standards
- Quality assurance requirements

### Quality Improvement Methodology

**Root Cause Analysis:**
When serious errors occur:
1. Identify what happened
2. Determine why it happened
3. Identify contributing factors
4. Develop corrective actions
5. Measure effectiveness

**Failure Mode and Effects Analysis:**
Proactive risk assessment:
1. Map medication use process
2. Identify potential failure modes
3. Assess severity, probability, detectability
4. Prioritize improvement efforts
5. Implement and monitor changes

### Informatics and Technology

**Medication Decision Support Optimization:**
| Challenge | Solution |
|-----------|----------|
| Alert fatigue | Tiered, relevant alerts |
| Workarounds | User-centered design |
| Interoperability | Standard data formats |
| Maintenance | Governance structures |

**Emerging Technologies:**
- Artificial intelligence for error prediction
- Machine learning for pattern detection
- Natural language processing for prescriptions
- Blockchain for supply chain integrity

### Complex System Navigation

**Multi-Provider Scenarios:**
- Specialty medications
- Transitions of care
- Polypharmacy management
- Conflicting recommendations

**High-Stakes Situations:**
- Chemotherapy protocols
- Anticoagulation management
- Pediatric dosing
- Critical care infusions

### Measurement and Benchmarking

**Key Metrics:**
| Metric | Purpose |
|--------|---------|
| Error rate | Overall safety performance |
| Near miss rate | System sensitivity |
| Harm rate | Patient outcome |
| High-alert medication events | High-risk performance |

**Benchmarking Resources:**
- ISMP medication safety self-assessment
- Hospital Compare data
- State reporting programs
- Collaborative networks

### Patient Advocacy Strategies

**Individual Level:**
- Comprehensive medication verification
- Understanding of each medication's purpose
- Awareness of warning signs
- Confidence to speak up

**System Level:**
- Participation in safety committees
- Engagement in quality improvement
- Support for safety culture
- Advocacy for resources

### Future Directions

**Medication Safety Research:**
- Implementation science
- Patient engagement strategies
- Technology effectiveness
- System resilience

**Policy Development:**
- Standardization efforts
- Interoperability requirements
- Transparency initiatives
- Patient safety infrastructure`,
      keyTerms: [
        { term: 'root cause analysis', definition: 'Systematic investigation method to identify fundamental causes of adverse events' },
        { term: 'failure mode and effects analysis', definition: 'Proactive risk assessment identifying potential failures before they occur' },
        { term: 'REMS', definition: 'Risk Evaluation and Mitigation Strategy - FDA-required safety programs for certain drugs' },
        { term: 'implementation science', definition: 'Study of methods to promote adoption of evidence-based practices' },
        { term: 'safety culture', definition: 'Organizational commitment to safety as a core value, including just culture and continuous learning' },
      ],
      clinicalNotes: `Expert medication safety competencies:
1. Systems-level safety science understanding
2. Regulatory and accreditation framework knowledge
3. Quality improvement methodology application
4. Health informatics and technology optimization
5. Complex system navigation
6. Measurement and benchmarking
7. Individual and system-level advocacy
8. Future directions and research literacy`,
    },
  },

  media: [],

  citations: [
    {
      id: 'ismp-resources',
      type: 'website',
      title: 'Medication Safety Resources',
      source: 'Institute for Safe Medication Practices',
      url: 'https://www.ismp.org/',
    },
    {
      id: 'ahrq-psnet',
      type: 'website',
      title: 'Patient Safety Network: Medication Errors',
      source: 'Agency for Healthcare Research and Quality',
      url: 'https://psnet.ahrq.gov/primer/medication-errors-and-adverse-drug-events',
    },
  ],

  crossReferences: [
    { targetId: 'concept-checking-prescriptions', targetType: 'concept', relationship: 'related', label: 'Checking Prescriptions' },
    { targetId: 'concept-understanding-drug-interactions', targetType: 'concept', relationship: 'related', label: 'Understanding Drug Interactions' },
    { targetId: 'concept-medication-reconciliation', targetType: 'concept', relationship: 'related', label: 'Medication Reconciliation' },
  ],

  tags: {
    systems: ['patient-safety'],
    topics: ['medication-safety', 'error-prevention', 'patient-advocacy'],
    clinicalRelevance: 'critical',
    keywords: ['medication errors', 'medication safety', 'error prevention', 'patient safety'],
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default avoidingMedicationErrors;
