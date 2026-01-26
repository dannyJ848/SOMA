/**
 * Medication Reconciliation
 *
 * Keeping accurate medication lists across healthcare transitions.
 */

import { EducationalContent } from '../../types';

export const medicationReconciliation: EducationalContent = {
  id: 'concept-medication-reconciliation',
  type: 'concept',
  name: 'Medication Reconciliation',
  alternateNames: ['Med Rec', 'Medication List Review', 'Medication History'],

  levels: {
    1: {
      level: 1,
      summary: 'Keeping a list of all your medicines helps doctors and nurses give you the best care and avoid mix-ups.',
      explanation: `A medication list is like a checklist of all the medicines you take. Keeping this list updated helps keep you safe!

**Why Keep a Medication List?**
- So doctors know what you're already taking
- To avoid getting the wrong medicine
- To prevent medicines that don't mix well together
- To help in emergencies

**What to Put on Your List:**
- All medicines (pills, liquids, creams)
- Vitamins and supplements
- How much you take
- How often you take them

**When to Update Your List:**
- When you start a new medicine
- When you stop taking something
- When your dose changes
- Before any doctor visit

**Tips:**
- Keep a copy in your wallet
- Give a copy to a family member
- Bring your list to every appointment
- Bring your actual medicine bottles to appointments if you can

**Remember:**
Your medication list is one of the most important things you can bring to any doctor visit!`,
      keyTerms: [
        { term: 'medication list', definition: 'A written record of all the medicines you take' },
        { term: 'dose', definition: 'How much medicine you take at one time' },
        { term: 'supplement', definition: 'Vitamins, minerals, or herbs you take for health' },
      ],
      analogies: [
        'A medication list is like a grocery list for your health - it helps everyone know what you need.',
      ],
      examples: [
        'Writing down: "Vitamin D 1000 units, once a day"',
        'Bringing your pill bottles in a bag to show the doctor.',
      ],
    },
    2: {
      level: 2,
      summary: 'Medication reconciliation is the process of comparing your medications at different points of care to ensure accuracy and safety.',
      explanation: `Medication reconciliation is a safety process used by healthcare providers - and you can be part of it!

**What Is Medication Reconciliation?**
It's comparing medication lists at key times:
- When you go to the hospital
- When you see a new doctor
- When you leave the hospital
- When you move between care settings

**Why It Matters:**
- Up to 67% of patients have errors in their medication histories
- Errors can lead to wrong medications or missed medications
- Transitions in care are high-risk times

**Your Medication List Should Include:**
| Information | Example |
|-------------|---------|
| Drug name | Lisinopril |
| Dose | 10 mg |
| How often | Once daily |
| Purpose | Blood pressure |
| Prescribing doctor | Dr. Smith |
| Pharmacy | Main Street Pharmacy |

**Don't Forget:**
- Over-the-counter medications
- Vitamins and supplements
- Eye drops, inhalers, patches, creams
- Medications you take "as needed"
- Recently stopped medications

**During Healthcare Transitions:**

*Going to the Hospital:*
- Bring your medication list
- Bring actual bottles if possible
- Tell them about recent changes

*Leaving the Hospital:*
- Get a new medication list
- Understand what's changed
- Know what to stop, start, or continue
- Ask about follow-up appointments

*Seeing a New Doctor:*
- Share your complete list
- Mention all your other doctors
- Update your list with any changes

**Keeping Your List Current:**
- Update after every appointment
- Use a phone app or wallet card
- Share with family members
- Review regularly for accuracy`,
      keyTerms: [
        { term: 'medication reconciliation', definition: 'Process of comparing medication lists to identify and resolve discrepancies' },
        { term: 'care transition', definition: 'Moving between healthcare settings or providers' },
        { term: 'discrepancy', definition: 'A difference between medication lists that needs to be resolved' },
        { term: 'over-the-counter (OTC)', definition: 'Medications you can buy without a prescription' },
      ],
      analogies: [
        'Medication reconciliation is like balancing a checkbook - everything needs to match up.',
      ],
    },
    3: {
      level: 3,
      summary: 'Medication reconciliation is a systematic process involving obtaining, verifying, and documenting a complete medication list at care transitions to prevent adverse drug events.',
      explanation: `## The Medication Reconciliation Process

### Standard Steps

**1. Obtain Best Possible Medication History (BPMH):**
- Interview patient/caregiver
- Review pharmacy records
- Check electronic health records
- Examine actual medication containers
- Verify with outpatient providers

**2. Compare with Current Orders:**
- Identify discrepancies
- Classify discrepancy type
- Determine intentional vs. unintentional

**3. Resolve Discrepancies:**
- Clarify with prescriber
- Document decisions
- Update orders as needed

**4. Communicate:**
- Update patient medication list
- Educate patient on changes
- Send updated list to next provider

### Types of Discrepancies

| Type | Definition | Example |
|------|------------|---------|
| Omission | Home medication not ordered | Missing daily aspirin |
| Commission | Medication ordered not on home list | Extra blood pressure med |
| Dose discrepancy | Different dose than home | 10mg vs 20mg |
| Frequency discrepancy | Different schedule | Daily vs twice daily |
| Duplication | Same drug class ordered twice | Two different statins |

### High-Risk Transitions

**Hospital Admission:**
- Acute illness may affect medications
- Multiple providers involved
- Time pressure

**Hospital Discharge:**
- Average 10+ medication changes
- New medications with new instructions
- Requires patient understanding

**Post-Acute Care:**
- Transfer from hospital to rehab/nursing facility
- Multiple handoffs
- Complex patients

### Your Role in Medication Reconciliation

**Preparation:**
- Maintain accurate, current list
- Include all medications and supplements
- Note allergies and past reactions
- Document recent changes

**During the Process:**
- Answer questions completely
- Correct any errors you notice
- Ask about unfamiliar medications
- Confirm understanding of changes

**After the Process:**
- Keep updated list
- Understand what changed and why
- Know when to take new medications
- Know what was stopped

### Red Flags to Watch For

**Potential Errors:**
- Medications you've never taken appearing
- Your regular medications missing
- Doses that seem wrong
- Duplicate medications

**Questions to Ask:**
- "Can you read back my full medication list?"
- "What medications have been changed?"
- "Is there anything I should stop taking?"
- "When do I start the new medications?"

### Documentation for Patients

**What to Record:**
- Complete medication name and strength
- How and when to take each
- Why you take it
- Prescribing doctor
- Start date
- Any special instructions`,
      keyTerms: [
        { term: 'Best Possible Medication History (BPMH)', definition: 'Complete and accurate medication list obtained through systematic interview and verification' },
        { term: 'discrepancy', definition: 'Difference between medication lists requiring resolution' },
        { term: 'unintentional discrepancy', definition: 'Medication difference that is an error requiring correction' },
        { term: 'intentional discrepancy', definition: 'Medication difference that is a deliberate therapeutic decision' },
      ],
      clinicalNotes: 'Studies show that pharmacist-led medication reconciliation reduces medication discrepancies by 70-80%. Patients who actively participate in the process further improve accuracy.',
    },
    4: {
      level: 4,
      summary: 'Comprehensive medication reconciliation integrates systematic processes, health information technology, interprofessional collaboration, and patient engagement to ensure medication safety across complex care transitions.',
      explanation: `## Advanced Medication Reconciliation

### Systematic Process Framework

**MARQUIS (Multi-Center Medication Reconciliation Quality Improvement Study) Best Practices:**
1. Most accurate medication history on admission
2. Verify history with at least two sources
3. Reconcile medications at each transition
4. Provide patient-centered discharge counseling
5. Use teach-back to verify understanding
6. Communicate medication list to post-discharge providers

### Technology Integration

**Electronic Health Record Functions:**
- Medication history auto-population
- Pharmacy data integration
- Decision support alerts
- Documentation templates
- Communication tools

**Limitations:**
- Data fragmentation across systems
- Out-of-date information
- Missing OTC/supplements
- Patient-reported medications may be missing

**Patient-Facing Technology:**
- Patient portal medication lists
- Personal health records
- Medication management apps
- Photo documentation of medications

### High-Risk Medication Categories

**Require Extra Attention:**
| Category | Concern |
|----------|---------|
| Anticoagulants | Bleeding, thrombosis |
| Insulin | Hypoglycemia, hyperglycemia |
| Opioids | Withdrawal, overdose |
| Antiepileptics | Seizure breakthrough |
| Immunosuppressants | Rejection, infection |

**Additional Considerations:**
- Recently started medications
- Recently changed doses
- Medications with complex schedules
- Medications requiring monitoring

### Transition-Specific Considerations

**Emergency Department:**
- Time pressure
- Limited history availability
- Acute presentations complicate assessment
- Importance of subsequent verification

**Surgical Transitions:**
- Pre-operative medication management
- NPO considerations
- Post-operative changes
- Pain management transitions

**Intensive Care:**
- Continuous infusions
- Sedation/analgesia transitions
- Complex titrations
- Multiple organ effects

### Interprofessional Roles

**Team Responsibilities:**
| Team Member | Primary Role |
|-------------|--------------|
| Pharmacist | BPMH, interaction review, counseling |
| Nurse | Administration verification, patient education |
| Physician | Therapeutic decisions, order reconciliation |
| Patient/Caregiver | Information source, understanding confirmation |

### Quality Metrics

**Reconciliation Quality Indicators:**
- Completion rates
- Discrepancy detection rates
- Intervention rates
- Patient-verified accuracy
- Post-discharge medication adherence
- 30-day readmission rates

### Patient Advocacy During Reconciliation

**Proactive Steps:**
- Provide written, verified list
- Report all sources of medications
- Note any adherence challenges
- Ask about expected changes
- Request updated list before discharge

**If Concerns Arise:**
- Speak up about discrepancies
- Request pharmacist review
- Ask for written explanation of changes
- Ensure post-discharge follow-up
- Know who to contact with questions`,
      keyTerms: [
        { term: 'MARQUIS', definition: 'Multi-Center Medication Reconciliation Quality Improvement Study - evidence-based best practices' },
        { term: 'health information exchange', definition: 'Electronic sharing of health information across organizations' },
        { term: 'teach-back', definition: 'Method of confirming understanding by having patients explain information in their own words' },
        { term: 'medication therapy management', definition: 'Comprehensive review of all medications to optimize therapy' },
      ],
      clinicalNotes: 'The Joint Commission includes medication reconciliation in National Patient Safety Goals. Failures in reconciliation are a leading cause of adverse drug events following care transitions.',
    },
    5: {
      level: 5,
      summary: 'Expert medication reconciliation practice integrates systems engineering, quality improvement methodology, health informatics, and patient-centered care principles to achieve reliable medication safety across complex healthcare systems.',
      explanation: `## Expert-Level Medication Reconciliation

### Systems Engineering Approach

**High-Reliability Organization Principles:**
- Preoccupation with failure
- Reluctance to simplify
- Sensitivity to operations
- Commitment to resilience
- Deference to expertise

**Applied to Medication Reconciliation:**
- Standardized processes
- Redundant verification
- Real-time feedback
- Continuous improvement
- Frontline empowerment

### Quality Improvement Methodology

**PDSA Cycle Application:**
| Phase | Reconciliation Application |
|-------|---------------------------|
| Plan | Identify gap, design intervention |
| Do | Implement pilot process |
| Study | Measure discrepancy rates |
| Act | Standardize or modify |

**Key Metrics:**
- Process measures: Completion rates, time to complete
- Outcome measures: Discrepancies, adverse events, readmissions
- Balancing measures: Provider time, alert burden

### Health Informatics Integration

**Interoperability Challenges:**
- Multiple EHR systems
- External pharmacy data
- Long-term care records
- Patient-generated data

**Solutions:**
- FHIR standards for medication data
- National medication databases
- Health information exchanges
- Patient-controlled records

**Clinical Decision Support:**
- Real-time interaction checking
- Dose range validation
- Duplicate therapy alerts
- Allergy cross-checking
- Renal/hepatic dose adjustment

### Regulatory and Accreditation Framework

**Joint Commission Standards:**
- NPSG.03.06.01 requires reconciliation at transitions
- Process must include all medications
- Communication to patient/caregiver required
- Documentation required

**CMS Requirements:**
- Conditions of Participation
- Quality measures linked to payment
- Discharge planning requirements

### Patient-Centered Care Integration

**Shared Decision-Making:**
- Patient preferences in medication selection
- Adherence barrier discussion
- Cost considerations
- Quality of life factors

**Health Literacy Considerations:**
- Plain language communication
- Visual medication schedules
- Teach-back verification
- Written materials in patient's language

**Cultural Competency:**
- Traditional/alternative medicine inclusion
- Health belief assessment
- Family involvement preferences

### Special Populations

**Pediatric Considerations:**
- Weight-based dosing verification
- Formulation appropriateness
- Caregiver understanding

**Geriatric Considerations:**
- Polypharmacy assessment
- Beers Criteria review
- Functional status impact
- Caregiver involvement

**Behavioral Health:**
- Medication adherence challenges
- Complex regimens
- Substance use considerations

### Research and Future Directions

**Emerging Approaches:**
- AI/ML for discrepancy detection
- Natural language processing of medication data
- Predictive modeling for high-risk transitions
- Patient-facing verification apps
- Blockchain for medication tracking

**Evidence Gaps:**
- Optimal process design
- Role of patient engagement technologies
- Cost-effectiveness of interventions
- Implementation in resource-limited settings

### Patient Advocacy at System Level

**Individual Advocacy:**
- Demand complete reconciliation at transitions
- Request pharmacist involvement
- Ensure understanding before discharge
- Follow up on any concerns

**System Advocacy:**
- Support patient safety initiatives
- Participate in quality improvement
- Share experiences constructively
- Advocate for resources and staffing`,
      keyTerms: [
        { term: 'high-reliability organization', definition: 'Organization that operates complex systems with fewer than expected failures through safety culture' },
        { term: 'FHIR', definition: 'Fast Healthcare Interoperability Resources - standard for electronic health data exchange' },
        { term: 'Beers Criteria', definition: 'List of medications potentially inappropriate for older adults' },
        { term: 'clinical decision support', definition: 'Technology providing clinicians with knowledge and patient-specific information to enhance decision-making' },
        { term: 'NPSG', definition: 'National Patient Safety Goals - Joint Commission requirements' },
      ],
      clinicalNotes: `Expert medication reconciliation competencies:
1. Systems engineering approach to process design
2. Quality improvement methodology application
3. Health informatics and interoperability understanding
4. Regulatory and accreditation compliance
5. Patient-centered care integration
6. Special population considerations
7. Research literacy and future directions
8. Individual and system-level advocacy`,
    },
  },

  media: [],

  citations: [
    {
      id: 'ahrq-medrec',
      type: 'website',
      title: 'Medication Reconciliation',
      source: 'Agency for Healthcare Research and Quality',
      url: 'https://psnet.ahrq.gov/primer/medication-reconciliation',
    },
    {
      id: 'joint-commission',
      type: 'website',
      title: 'National Patient Safety Goals',
      source: 'The Joint Commission',
      url: 'https://www.jointcommission.org/standards/national-patient-safety-goals/',
    },
  ],

  crossReferences: [
    { targetId: 'concept-checking-prescriptions', targetType: 'concept', relationship: 'related', label: 'Checking Prescriptions' },
    { targetId: 'concept-understanding-drug-interactions', targetType: 'concept', relationship: 'related', label: 'Understanding Drug Interactions' },
    { targetId: 'concept-avoiding-medication-errors', targetType: 'concept', relationship: 'related', label: 'Avoiding Medication Errors' },
  ],

  tags: {
    systems: ['patient-safety'],
    topics: ['medication-safety', 'medication-reconciliation', 'care-transitions'],
    clinicalRelevance: 'critical',
    keywords: ['medication reconciliation', 'medication list', 'care transitions', 'medication safety'],
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default medicationReconciliation;
