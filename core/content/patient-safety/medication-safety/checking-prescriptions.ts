/**
 * Checking Prescriptions
 *
 * How to verify your prescriptions for safety and accuracy.
 */

import { EducationalContent } from '../../types';

export const checkingPrescriptions: EducationalContent = {
  id: 'concept-checking-prescriptions',
  type: 'concept',
  name: 'Checking Prescriptions',
  alternateNames: ['Prescription Verification', 'Medication Verification', 'Prescription Safety'],

  levels: {
    1: {
      level: 1,
      summary: 'Always check that you get the right medicine by looking at the label and asking questions.',
      explanation: `When you get medicine, it's important to make sure it's the right one. Mistakes can happen, and you can help catch them!

**At the Pharmacy:**
- Make sure the name on the bottle is YOUR name
- Check that it's the medicine your doctor told you about
- Look at what the pills look like

**Things to Check:**
- Your name is spelled right
- The medicine name matches what the doctor said
- You know how many to take and when

**Questions to Ask:**
- "What is this medicine for?"
- "How do I take it?"
- "Are there any side effects?"

**If Something Seems Wrong:**
- Tell the pharmacist right away
- Call your doctor if you're not sure
- Don't take medicine if something seems wrong

**Remember:**
It's always okay to ask questions about your medicine. Pharmacists are there to help you!`,
      keyTerms: [
        { term: 'prescription', definition: 'Medicine that a doctor says you need' },
        { term: 'pharmacist', definition: 'A person trained to prepare and give out medicine' },
        { term: 'label', definition: 'The sticker on the medicine bottle with important information' },
      ],
      analogies: [
        'Checking your prescription is like checking your order at a restaurant - make sure you got what you asked for!',
      ],
      examples: [
        'Looking at the bottle to make sure it says your name, not someone else\'s.',
        'Asking the pharmacist what the medicine is for if you forgot.',
      ],
    },
    2: {
      level: 2,
      summary: 'Verifying prescriptions involves checking the drug name, dose, frequency, and comparing with what your doctor prescribed to catch potential errors.',
      explanation: `Prescription errors can happen at any point - when the doctor writes it, when it's sent to the pharmacy, or when it's filled. You are an important safety check.

**What to Verify:**

**1. The "Five Rights":**
- Right patient (your name)
- Right drug (correct medication)
- Right dose (correct amount)
- Right route (how to take it)
- Right time (when to take it)

**2. At the Doctor's Office:**
- Ask the name of the medication
- Ask why you need it
- Ask how to take it
- Get written instructions

**3. At the Pharmacy:**
Check the label for:
- Your full name spelled correctly
- Medication name matches prescription
- Dose matches what the doctor said
- Number of pills/refills is correct
- Clear instructions for taking it

**4. Visual Check:**
- If you've taken this before, do the pills look the same?
- New generic versions may look different - ask about changes

**Common Errors to Watch For:**
- Look-alike/sound-alike drug names
- Wrong strength (50mg vs 500mg)
- Wrong frequency (once daily vs twice daily)
- Wrong quantity

**Questions for Your Pharmacist:**
- "Is this the same as what I was taking before?"
- "Why does this look different than before?"
- "What should I do if I miss a dose?"
- "Are there any foods or drugs I should avoid?"

**Keep Records:**
- Maintain a medication list
- Note any allergies
- Update when medications change`,
      keyTerms: [
        { term: 'five rights', definition: 'Safety checklist: right patient, right drug, right dose, right route, right time' },
        { term: 'generic', definition: 'A medication that is the same as a brand-name drug but usually costs less' },
        { term: 'dose', definition: 'The amount of medicine you take at one time' },
        { term: 'refill', definition: 'Getting more of the same medicine without a new prescription' },
      ],
      analogies: [
        'Checking your prescription is like proofreading an important document - catching small errors prevents big problems.',
      ],
    },
    3: {
      level: 3,
      summary: 'Prescription verification requires systematic checking of medication identity, strength, dosage form, and instructions while understanding common error patterns and utilizing pharmacist expertise.',
      explanation: `## Systematic Prescription Verification

### Understanding Prescription Labels

**Required Label Elements:**
| Element | What to Check |
|---------|--------------|
| Patient name | Spelled correctly, not another family member |
| Drug name | Generic and/or brand name |
| Strength | Dose per unit (e.g., 10mg) |
| Quantity | Number of pills/volume |
| Directions | When and how to take |
| Refills | Number remaining |
| Prescriber | Doctor's name |
| Pharmacy info | Contact information |
| Expiration | Current dating |
| Warnings | Special precautions |

### Common Medication Error Types

**Prescribing Errors:**
- Wrong drug selection
- Incorrect dose
- Drug-drug interactions missed
- Allergy not considered
- Unclear or ambiguous orders

**Dispensing Errors:**
- Wrong drug dispensed
- Wrong strength
- Wrong quantity
- Wrong patient
- Labeling errors

**Look-Alike/Sound-Alike Drugs:**
Examples of commonly confused medications:
| Drug A | Drug B |
|--------|--------|
| Metformin | Metronidazole |
| Lisinopril | Losartan |
| Hydroxyzine | Hydralazine |
| Prednisone | Prednisolone |

### Verification Strategies

**Before Leaving the Pharmacy:**
1. Open the bag and review the label
2. Count pills if quantity seems wrong
3. Compare to your medication list
4. Ask about any changes
5. Request medication counseling

**At Home:**
1. Compare to previous bottles if refill
2. Use pill identifier tools if appearance changed
3. Read patient information leaflet
4. Store properly

### Utilizing the Pharmacist

**Pharmacist Consultation Rights:**
- You have the right to speak with the pharmacist
- OBRA '90 requires pharmacists to offer counseling
- Use this opportunity for questions

**High-Value Questions:**
- What are the most common side effects?
- Are there any serious reactions to watch for?
- Does this interact with my other medications?
- Can I crush or split this medication?
- What if I miss a dose?

### Documentation

**Personal Medication List Should Include:**
- Drug name (generic and brand)
- Strength and dose
- How often you take it
- Why you take it
- Prescribing doctor
- Start date
- Any reactions experienced`,
      keyTerms: [
        { term: 'OBRA 90', definition: 'Federal law requiring pharmacists to offer counseling on new prescriptions' },
        { term: 'look-alike/sound-alike', definition: 'Medications with names that can be easily confused with other drugs' },
        { term: 'medication reconciliation', definition: 'Process of comparing all medications a patient is taking to ensure safety' },
        { term: 'adverse drug reaction', definition: 'Harmful or unintended response to a medication' },
      ],
      clinicalNotes: 'Studies show that patients who actively verify their prescriptions and ask questions catch errors that would otherwise go undetected. Always speak up if something seems wrong.',
    },
    4: {
      level: 4,
      summary: 'Advanced prescription verification encompasses understanding pharmacokinetic considerations, therapeutic substitution, formulary management, and systematic approaches to detecting and preventing medication errors.',
      explanation: `## Advanced Prescription Safety

### Understanding Therapeutic Substitution

**Generic Substitution:**
- Same active ingredient, strength, dosage form
- May have different inactive ingredients
- Bioequivalence demonstrated by FDA
- Generally safe and cost-effective

**Therapeutic Substitution:**
- Different drug in same class
- May be done for formulary reasons
- Requires physician authorization
- May have different dosing or effects

**When to Question Substitution:**
- Previous adverse reaction to class
- Narrow therapeutic index drugs
- Complex dose titration history
- Significant appearance change

### Narrow Therapeutic Index Drugs

These require extra vigilance:
| Drug | Concern |
|------|---------|
| Warfarin | Bleeding vs clotting risk |
| Digoxin | Toxicity at high levels |
| Phenytoin | Seizure control vs toxicity |
| Lithium | Mood stabilization vs toxicity |
| Levothyroxine | Consistent dosing important |

**For NTI Drugs:**
- Consistent brand/generic use may be important
- Monitoring is essential
- Dose changes should be gradual
- Report any changes promptly

### Understanding Pharmacy Systems

**Technology Safeguards:**
- Barcode scanning verification
- Automated dispensing
- Drug interaction alerts
- Allergy checking

**Potential Failure Points:**
- Alert fatigue leading to overrides
- Barcode scanning errors
- Similar packaging confusion
- Workflow interruptions

### High-Alert Medications

**Medications Requiring Extra Caution:**
- Anticoagulants (blood thinners)
- Insulin
- Opioids
- Chemotherapy
- Concentrated electrolytes

**Patient Verification Steps:**
1. Confirm indication matches prescription
2. Verify dose is within expected range
3. Check for necessary monitoring (labs)
4. Understand warning signs of toxicity

### Insurance and Formulary Impact

**Understanding Prior Authorization:**
- Why medications may be denied
- How to appeal denials
- Therapeutic alternatives
- Patient assistance programs

**Step Therapy:**
- Requirement to try cheaper drugs first
- Documentation of failures
- Appeal options

### Self-Verification Tools

**Resources for Patients:**
- FDA Pill Identifier
- Drugs.com Pill Identifier
- Your pharmacy's app
- Medication information leaflets

**Questions for Complex Regimens:**
- What is the complete daily schedule?
- Which medications can be taken together?
- Which require food or empty stomach?
- What monitoring is needed?`,
      keyTerms: [
        { term: 'narrow therapeutic index', definition: 'Medications where small dose changes significantly affect effectiveness or toxicity' },
        { term: 'bioequivalence', definition: 'Same rate and extent of drug absorption for generic vs brand' },
        { term: 'therapeutic substitution', definition: 'Replacing prescribed drug with different drug in same therapeutic class' },
        { term: 'prior authorization', definition: 'Insurance requirement for approval before covering certain medications' },
        { term: 'high-alert medication', definition: 'Drugs with heightened risk of significant harm if used in error' },
      ],
      clinicalNotes: 'The Institute for Safe Medication Practices (ISMP) maintains lists of high-alert medications and look-alike/sound-alike drug pairs. Patients can access these resources at ismp.org.',
    },
    5: {
      level: 5,
      summary: 'Expert prescription verification integrates understanding of medication safety systems, regulatory frameworks, quality improvement methodologies, and patient advocacy strategies within complex healthcare delivery systems.',
      explanation: `## Expert-Level Prescription Safety

### Healthcare System Medication Safety

**Regulatory Framework:**
- FDA drug approval and monitoring
- State pharmacy board requirements
- CMS Conditions of Participation
- Joint Commission medication management standards
- USP standards

**Error Reporting Systems:**
- FDA MedWatch
- ISMP Medication Errors Reporting Program
- Facility-level reporting
- Root cause analysis requirements

### Systematic Error Prevention

**Swiss Cheese Model Application:**
Multiple barriers prevent errors from reaching patients:
1. Computerized physician order entry
2. Clinical decision support
3. Pharmacist review
4. Dispensing verification
5. Nursing verification
6. **Patient verification** (final barrier)

**When Systems Fail:**
Patient verification becomes critical when:
- Care transitions occur
- Multiple providers involved
- Complex regimens
- Communication gaps
- Technology failures

### Advanced Verification Strategies

**For Complex Patients:**
| Situation | Strategy |
|-----------|----------|
| Polypharmacy | Comprehensive medication review |
| Multiple prescribers | Centralized medication list |
| Care transitions | Medication reconciliation |
| High-risk medications | Enhanced monitoring |
| Cognitive impairment | Caregiver involvement |

**Medication Therapy Management:**
- Comprehensive medication review
- Medication action plan
- Drug therapy problem identification
- Follow-up interventions

### Advocating in Medication Safety

**When Errors Are Discovered:**
1. Document what happened
2. Report to pharmacy/prescriber
3. Request incident report
4. Consider formal complaint if needed
5. Use patient safety reporting systems

**Systemic Issues to Address:**
- Workload and staffing concerns
- Technology gaps
- Communication failures
- Process breakdowns

### Understanding Quality Metrics

**Medication Safety Indicators:**
- Adverse drug event rates
- Medication error rates
- High-alert medication errors
- Readmissions related to medications

**Hospital Compare Metrics:**
Patients can review facility performance on:
- Communication about medicines
- Medication reconciliation at discharge

### Special Populations

**Considerations for:**
- Pediatric patients (weight-based dosing)
- Geriatric patients (renal/hepatic function)
- Pregnant/lactating patients
- Patients with allergies
- Patients with organ impairment

### Technology-Enabled Verification

**Digital Tools:**
- Electronic medication lists
- Pill identification apps
- Drug interaction checkers
- Adherence tracking
- Telehealth medication review

**Limitations to Recognize:**
- Not all drugs in databases
- Interaction checkers have false positives
- Technology doesn't replace clinical judgment
- Privacy considerations

### Future Directions

**Emerging Safety Technologies:**
- Artificial intelligence for error detection
- Pharmacogenomic prescribing
- Smart packaging
- Real-time monitoring
- Blockchain for supply chain verification`,
      keyTerms: [
        { term: 'Swiss cheese model', definition: 'Error prevention model showing how multiple barriers prevent errors from reaching patients' },
        { term: 'medication therapy management', definition: 'Comprehensive review of all medications by a pharmacist to optimize therapy' },
        { term: 'root cause analysis', definition: 'Systematic process for identifying contributing factors to adverse events' },
        { term: 'pharmacovigilance', definition: 'Science relating to detection, assessment, understanding, and prevention of adverse drug effects' },
        { term: 'ISMP', definition: 'Institute for Safe Medication Practices - nonprofit organization devoted to medication error prevention' },
      ],
      clinicalNotes: `Expert medication verification competencies:
1. Understanding healthcare system safety mechanisms
2. Recognition of system failure points
3. Advanced verification for complex scenarios
4. Effective advocacy when errors occur
5. Quality metric interpretation
6. Technology-enabled verification
7. Special population considerations
8. Engagement with safety reporting systems`,
    },
  },

  media: [],

  citations: [
    {
      id: 'ismp-safety',
      type: 'website',
      title: 'For Consumers',
      source: 'Institute for Safe Medication Practices',
      url: 'https://www.ismp.org/resources/consumer-resources',
    },
    {
      id: 'fda-medwatch',
      type: 'website',
      title: 'MedWatch: The FDA Safety Information and Adverse Event Reporting Program',
      source: 'U.S. Food and Drug Administration',
      url: 'https://www.fda.gov/safety/medwatch-fda-safety-information-and-adverse-event-reporting-program',
    },
  ],

  crossReferences: [
    { targetId: 'concept-medication-reconciliation', targetType: 'concept', relationship: 'related', label: 'Medication Reconciliation' },
    { targetId: 'concept-understanding-drug-interactions', targetType: 'concept', relationship: 'related', label: 'Understanding Drug Interactions' },
    { targetId: 'concept-avoiding-medication-errors', targetType: 'concept', relationship: 'related', label: 'Avoiding Medication Errors' },
  ],

  tags: {
    systems: ['patient-safety'],
    topics: ['medication-safety', 'prescription-verification', 'pharmacy'],
    clinicalRelevance: 'critical',
    keywords: ['prescription safety', 'medication errors', 'pharmacy safety', 'prescription verification'],
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default checkingPrescriptions;
