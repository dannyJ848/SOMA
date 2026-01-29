import { EducationalContent } from '../../types';

export const medicationReconciliationContent: EducationalContent = {
  id: 'medication-reconciliation',
  type: 'concept',
  name: 'Medication Reconciliation',
  alternateNames: ['Med Rec', 'Medication History Verification', 'Medication Review'],
  levels: {
    1: {
      level: 1,
      summary: 'Medication reconciliation means making sure your medication list is correct when you move between healthcare settings. This prevents errors and harmful drug interactions.',
      explanation: `## Keeping Your Medication List Correct

Medication reconciliation means making sure your medication list is correct when you move between healthcare settings. This prevents errors and harmful drug interactions.

### What is Medication Reconciliation?

It is the process of:
- Comparing your current medications
- With new medications being ordered
- Finding and fixing any differences
- Making sure the list is complete and correct

### When It Happens

- When you enter the hospital
- When you move to a different unit
- When you go home
- When you visit a new doctor

### Why It Matters

Medication errors can happen when:
- A drug is accidentally stopped
- Wrong dose is given
- Duplicate medications prescribed
- Harmful interactions missed

### How You Can Help

- Bring all your medicine bottles
- List all medicines you take
- Include over-the-counter drugs
- Include vitamins and supplements
- Tell about any allergies

### Ask Questions

- "Is this my correct medication list?"
- "Did you include all my medicines?"
- "Can I see what I will take at home?"`,
      keyTerms: [
        { term: 'Medication reconciliation', definition: 'Process of comparing medication lists' },
        { term: 'Drug interaction', definition: 'When two drugs affect each other' },
        { term: 'Over-the-counter', definition: 'Medicines bought without prescription' },
        { term: 'Supplement', definition: 'Vitamins, minerals, or herbs' }
      ],
      analogies: [
        'Medication reconciliation is like checking your grocery list before and after shopping'
      ],
      examples: [
        'A hospital discovers a patient was accidentally given two blood pressure medications',
        'A patient remembers to mention their herbal supplement which interacts with prescribed medicine'
      ]
    },
    2: {
      level: 2,
      summary: 'Medication reconciliation is a formal process comparing a patient\'s medication orders to all medications they have been taking. It is required at care transitions and is a National Patient Safety Goal to prevent adverse drug events.',
      explanation: `## The Medication Reconciliation Process

Medication reconciliation is a formal process comparing a patient\'s medication orders to all medications they have been taking. It is required at care transitions and is a National Patient Safety Goal to prevent adverse drug events.

### Joint Commission Requirements

**National Patient Safety Goal:**
- Required at every care transition
- Admission, transfer, and discharge
- Accurate and complete medication list
- Communication to next provider

### Process Steps

**1. Obtain Current Medication List:**
- Patient interview
- Pharmacy records
- Previous medical records
- Pill bottles if available
- Family input if needed

**2. Verify and Document:**
- Dose, route, frequency
- Last dose taken
- Adherence assessment
- Allergies and reactions

**3. Compare to New Orders:**
- Identify discrepancies
- Check for interactions
- Review for duplications
- Assess indications

**4. Resolve Discrepancies:**
- Clarify with patient
- Contact outpatient providers
- Document reason for changes
- Update medication list

### Common Discrepancies

**Omissions:**
- Medication not ordered
- Intentional vs unintentional
- Home medications stopped
- Prophylactic medications missed

**Additions:**
- New medications appropriate
- Duplications
- Unnecessary medications
- Formulary substitutions

**Differences:**
- Dose changes
- Frequency changes
- Route changes
- Different medication (therapeutic substitution)

### High-Risk Transitions

- Hospital admission
- ICU transfer
- Discharge to home
- Transfer to nursing facility
- Emergency department visits`,
      keyTerms: [
        { term: 'Adverse drug event', definition: 'Harm from medication use' },
        { term: 'Discrepancy', definition: 'Difference between lists' },
        { term: 'Formulary', definition: 'List of medications covered' },
        { term: 'Care transition', definition: 'Movement between healthcare settings' }
      ],
      analogies: [
        'Medication reconciliation is like balancing a checkbook - you need to account for every item'
      ],
      examples: [
        'A patient\'s blood thinner was accidentally held during hospitalization, risking blood clots',
        'Comparing lists reveals a patient has been taking an old and new version of the same drug'
      ]
    },
    3: {
      level: 3,
      summary: 'Medication reconciliation errors are common and contribute significantly to adverse drug events, especially at hospital discharge. Effective reconciliation requires systematic processes, technology support, and patient engagement to ensure accurate medication histories and safe care transitions.',
      explanation: `## Evidence and Best Practices

Medication reconciliation errors are common and contribute significantly to adverse drug events, especially at hospital discharge. Effective reconciliation requires systematic processes, technology support, and patient engagement to ensure accurate medication histories and safe care transitions.

### Scope of Problem

**Error Rates:**
- 30-70% of patients have reconciliation errors
- Up to 50% of medication errors occur at transitions
- 20% of discharge prescriptions have errors
- 15-20% of patients experience adverse events post-discharge

**Consequences:**
- Adverse drug events
- Hospital readmissions
- Emergency department visits
- Cost increases
- Patient harm

### Best Practice Components

**Structured Process:**
- Standardized workflow
- Defined roles
- Accountability
- Documentation requirements

**Technology Support:**
- Electronic reconciliation tools
- Interface with outpatient pharmacies
- Decision support
- Home medication lists

**Pharmacist Involvement:**
- Medication history taking
- Discharge counseling
- High-risk patient focus
- Ambulatory care follow-up

**Patient Engagement:**
- Bring medication bottles
- Teach-back method
- Written instructions
- Phone follow-up

### Obtaining Accurate Histories

**Multiple Sources:**
- Patient interview
- Pharmacy verification
- Previous records
- Pill bottles
- Family/caregivers

**Validated Tools:**
- Brown Bag review
- Medication Therapy Management
- Structured interview techniques
- Technology-assisted verification

**High-Risk Medications:**
- Anticoagulants
- Insulin
- Opioids
- Anti-epileptics
- Immunosuppressants
- Cardiac medications

### Discharge Reconciliation

**Discharge Process:**
- Reconcile to home regimen
- Document changes and reasons
- Provide written list
- Explain changes
- Arrange follow-up

**High-Risk Discharge:**
- Complex medication regimens
- Multiple changes
- Low health literacy
- Language barriers
- Social concerns

**Follow-Up:**
- Phone call within 48-72 hours
- Pharmacy coordination
- Primary care notification
- Address questions and problems`,
      keyTerms: [
        { term: 'Brown Bag review', definition: 'Patients bring all medications for review' },
        { term: 'Teach-back method', definition: 'Patient explains instructions to verify understanding' },
        { term: 'Therapeutic duplication', definition: 'Two drugs from same class' },
        { term: 'Reconciliation error', definition: 'Discrepancy in medication lists' }
      ]
    },
    4: {
      level: 4,
      summary: 'Medication reconciliation requires interdisciplinary collaboration, often led by pharmacists, with technology enabling but not replacing careful clinical judgment. Hospital accreditation standards mandate reconciliation processes, and discharge medication errors contribute significantly to preventable readmissions.',
      explanation: `## Institutional Implementation

Medication reconciliation requires interdisciplinary collaboration, often led by pharmacists, with technology enabling but not replacing careful clinical judgment. Hospital accreditation standards mandate reconciliation processes, and discharge medication errors contribute significantly to preventable readmissions.

### Team Roles

**Physicians:**
- Order medications
- Approve reconciliations
- Document changes
- Communicate with outpatient providers

**Pharmacists:**
- Lead reconciliation process
- Obtain medication histories
- Identify discrepancies
- Provide discharge counseling
- Ambulatory care follow-up

**Nurses:**
- Administer medications
- Verify home medications
- Patient education
- Discharge planning
- Follow-up calls

**Technicians:****
- Assist with histories
- Medication entry
- Phone verification
- Documentation

### Technology Solutions

**Electronic Reconciliation:**
- Side-by-side comparison
- Intelligent matching
- Interface with external data
- Decision support

**External Data Sources:**
- Prescription drug monitoring programs
- Health information exchange
- Pharmacy benefit managers
- Payer data

**Challenges:**
- Data quality issues
- Interface limitations
- Alert fatigue
- Workflow integration

### Regulatory Requirements

**Joint Commission:**
- NPSG.03.06.01
- Must be completed at transitions
- Must include patient/family
- Must communicate to next provider

**CMS Readmission Reduction:**
- Medication reconciliation influences readmissions
- Part of discharge planning requirements
- Tied to value-based purchasing
- Quality measure component

**State Regulations:**
- Pharmacist prescribing authority
- Medication therapy management
- Collaborative practice agreements
- Scope of practice variations

### Quality Improvement

**Metrics:**
- Reconciliation completion rates
- Discrepancy rates
- Adverse drug events
- Readmission rates
- Patient understanding

**Process Measures:**
- Time to completion
- Accuracy of histories
- High-risk medication focus
- Documentation quality

**Balancing Measures:**
- Time burden
- Workflow disruption
- Cost
- Staff satisfaction

### Special Populations

**Pediatrics:**
- Weight-based dosing
- Caregiver involvement
- School medication coordination
- Growth changes

**Geriatrics:**
- Polypharmacy
- Cognitive impairment
- Beers criteria review
- Deprescribing

**Mental Health:**
- Multiple prescribers
- Substance use interactions
- Adherence challenges
- Stigma concerns

**Limited English Proficiency:**
- Interpreter services
- Translated materials
- Family involvement
- Health literacy`,
      keyTerms: [
        { term: 'Polypharmacy', definition: 'Use of multiple medications' },
        { term: 'Beers criteria', definition: 'List of potentially inappropriate meds for elderly' },
        { term: 'Deprescribing', definition: 'Planned reduction of medications' },
        { term: 'Medication therapy management', definition: 'Pharmacist comprehensive medication review' }
      ],
      clinicalNotes: 'Pharmacist-led reconciliation reduces errors by 50-80% when implemented effectively. Best medication histories combine patient interview with pharmacy verification. Discharge counseling by pharmacists improves adherence and reduces readmissions. Technology alone insufficient - requires workflow integration and staff buy-in.'
    },
    5: {
      level: 5,
      summary: 'Future medication reconciliation involves predictive analytics for high-risk patients, improved interoperability for seamless data sharing, patient-controlled medication lists, and integration with precision medicine. Addressing health equity and the challenges of fragmented care remain critical priorities.',
      explanation: `## Advanced Topics in Medication Safety

Future medication reconciliation involves predictive analytics for high-risk patients, improved interoperability for seamless data sharing, patient-controlled medication lists, and integration with precision medicine. Addressing health equity and the challenges of fragmented care remain critical priorities.

### Predictive Analytics

**Risk Stratification:**
- Machine learning models
- Predict high-risk patients
- Target intensive reconciliation
- Resource allocation

**Risk Factors:**
- Number of medications
- High-risk drug classes
- Recent hospitalization
- Cognitive impairment
- Social determinants

**Implementation:**
- EHR integration
- Real-time scoring
- Workflow prompts
- Outcome tracking

### Interoperability Advances

**Pharmacy Data Integration:**
- Real-time fill data
- Adherence measurement
- Formulary information
- Cost data

**Prescription Drug Monitoring:**
- Opioid prescribing data
- Multi-state access
- Controlled substance history
- Integration with EHR

**Patient-Generated Data:**
- Mobile apps
- Wearable devices
- Patient-reported outcomes
- Medication adherence tracking

### Patient-Centered Approaches

**Patient-Mediated Exchange:**
- Patient carries medication list
- Blockchain-enabled verification
- Portable health records
- Cross-border travel

**Medication List Ownership:**
- Patient maintains master list
- Provider contributions
- Unified view
- Update mechanisms

**Consumer Apps:**
- Medication reminders
- Interaction checking
- Cost comparison
- Adherence support

### Precision Medicine Integration

**Pharmacogenomics:**
- Drug-gene interactions
- Dosing based on genetics
- Reconciliation of test results
- Clinical decision support

**Targeted Therapies:**
- Oncology precision medicine
- Complex regimens
- Side effect management
- Adherence challenges

### Health Equity Considerations

**Access Barriers:**
- Medication costs
- Pharmacy deserts
- Transportation
- Insurance coverage gaps

**Cultural Factors:**
- Traditional medicine use
- Health beliefs
- Family dynamics
- Trust in healthcare

**Solutions:**
- 340B drug pricing
- Medication assistance programs
- Home delivery
- Community health workers

### Policy Directions

**Payment Reform:**
- Pharmacist services billing
- Medication therapy management
- Transitional care management
- Value-based incentives

**Scope of Practice:**
- Pharmacist prescribing
- Collaborative agreements
- Telehealth expansion
- Interstate licensure

**Data Sharing:**
- TEFCA implications
- Patient access rights
- Privacy protections
- Research uses

### Research Frontiers

**Natural Language Processing:**
- Extract medications from notes
- Identify discrepancies
- Automated reconciliation
- Quality monitoring

**Blockchain:**
- Immutable medication records
- Patient control
- Provider verification
- Research integrity

**Real-World Evidence:**
- Post-market surveillance
- Effectiveness research
- Safety monitoring
- Health outcomes`,
      keyTerms: [
        { term: 'Pharmacogenomics', definition: 'Study of genetic effect on drug response' },
        { term: 'Patient-mediated exchange', definition: 'Patient controls data sharing' },
        { term: 'Medication adherence', definition: 'Taking medications as prescribed' },
        { term: '340B program', definition: 'Federal drug discount program' }
      ],
      clinicalNotes: 'Pharmacist prescribing and medication therapy management expanding but reimbursement variable. Pharmacogenomic testing becoming more available - reconciliation must include gene-drug interactions. Medication non-adherence contributes significantly to outcomes - technology solutions promising but human support often needed. Health equity requires addressing cost and access barriers beyond clinical care.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['patient-safety', 'medication-safety'],
    keywords: ['medication reconciliation', 'medication safety', 'transitions of care', 'adverse drug events']
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
