/**
 * Medication Information - Understanding Your Prescriptions
 */

import { EducationalContent } from '../../types';

export const medicationInfo: EducationalContent = {
  id: 'health-literacy-medication-info',
  type: 'concept',
  name: 'Understanding Medication Information',
  alternateNames: ['Prescription Instructions', 'Drug Information'],

  levels: {
    1: {
      level: 1,
      summary: 'Understanding your medication instructions helps you take medicines safely and correctly.',
      explanation: `**What to Know About Your Medicine:**

1. **Name:** What is the medicine called?
2. **Purpose:** What is it for?
3. **Dose:** How much do I take?
4. **Timing:** When do I take it?
5. **Duration:** For how long?

**Common Label Instructions:**

- "Take with food" = Eat something when you take it
- "Twice daily" = Once in morning, once in evening
- "As needed" or "PRN" = Only when you need it

**Important Safety Tips:**

- Take the full course even if you feel better
- Do not share your medicine with others
- Keep medicines in a safe place
- Tell your doctor about ALL medicines you take`,
      keyTerms: [
        { term: 'dose', definition: 'The amount of medicine you take at one time' },
        { term: 'prescription', definition: 'An order from your doctor for medicine' },
        { term: 'side effect', definition: 'An unwanted effect that can happen when taking medicine' },
      ],
      analogies: ['Taking medicine correctly is like following a recipe - the right ingredients in the right amounts'],
      examples: ['Take one tablet twice daily with food means one pill at breakfast and one at dinner'],
      patientCounselingPoints: ['Ask what the medicine is for and how to take it', 'Know what side effects to watch for'],
    },
    2: {
      level: 2,
      summary: 'Medication literacy involves understanding prescriptions, labels, and safe medication use practices.',
      explanation: `## Prescription Components

**On the Label:**
- Drug name (brand and/or generic)
- Strength (e.g., 500mg)
- Directions (how and when to take)
- Prescriber name
- Refill information
- Warnings

**Patient Information Sheets:**
- Indications (what it treats)
- How it works
- Side effects and warnings
- Interactions with other drugs or food
- Storage instructions

## Medication Safety

**Five Rights:**
1. Right patient
2. Right drug
3. Right dose
4. Right route
5. Right time

**Avoiding Errors:**
- Keep an updated medication list
- Use one pharmacy when possible
- Use pill organizers if taking multiple medications
- Never take someone else's prescription`,
      keyTerms: [
        { term: 'generic', definition: 'A medicine with the same active ingredient as the brand name, usually less expensive' },
        { term: 'drug interaction', definition: 'When medicines affect each other, changing how they work' },
        { term: 'contraindication', definition: 'A condition or factor that makes a treatment inadvisable' },
      ],
      patientCounselingPoints: ['Keep a complete medication list', 'Ask about generic alternatives'],
    },
    3: {
      level: 3,
      summary: 'Medication adherence and safety require understanding pharmacology basics, risk-benefit assessment, and self-management strategies.',
      explanation: `## Pharmacology Basics for Patients

**Drug Classes:**
- Antibiotics: Fight infections
- Antihypertensives: Lower blood pressure
- Statins: Lower cholesterol
- Analgesics: Relieve pain

**Administration Routes:**
- Oral (by mouth): Tablets, capsules, liquids
- Topical: Creams, patches on skin
- Inhaled: For lungs (inhalers)
- Injectable: Shots, insulin pens

## Adherence Factors

**Barriers:**
- Complex regimens
- Side effects
- Cost
- Forgetfulness
- Health beliefs

**Strategies:**
- Pill boxes and reminders
- Routine integration (with meals)
- Pharmacy auto-refills
- Addressing side effects

## Special Considerations

- High-risk medications (anticoagulants, insulin, opioids)
- Polypharmacy risks in older adults
- Drug-food interactions
- Pregnancy and breastfeeding`,
      keyTerms: [
        { term: 'adherence', definition: 'Taking medication as prescribed consistently' },
        { term: 'polypharmacy', definition: 'Taking multiple medications, often five or more' },
        { term: 'therapeutic window', definition: 'Range of drug levels that are effective without being toxic' },
      ],
      clinicalNotes: 'Assess adherence barriers. Simplify regimens when possible. Provide medication reconciliation.',
    },
    4: {
      level: 4,
      summary: 'Medication management requires system-level approaches to optimize therapy, prevent errors, and address adherence.',
      explanation: `## Medication Optimization

**Comprehensive Medication Management:**
- Indication assessment
- Effectiveness evaluation
- Safety monitoring
- Convenience optimization
- Deprescribing when appropriate

**Clinical Decision Support:**
- Drug-drug interaction alerts
- Renal/hepatic dosing
- Therapeutic duplication
- Formulary guidance

## Safety Systems

**Medication Reconciliation:**
- At transitions of care
- Accurate medication list
- Discrepancy resolution
- Patient/caregiver verification

**High-Alert Medications:**
- Enhanced protocols
- Independent double-checks
- Patient education requirements
- Monitoring parameters

## Adherence Interventions

**Evidence-Based Strategies:**
- Simplification of regimens
- Motivational interviewing
- Technology (apps, smart bottles)
- Team-based care (pharmacist involvement)`,
      keyTerms: [
        { term: 'medication reconciliation', definition: 'Process of comparing patient medications across care settings' },
        { term: 'deprescribing', definition: 'Planned reduction or discontinuation of medications no longer needed' },
        { term: 'high-alert medication', definition: 'Drug that carries heightened risk of significant harm if used in error' },
      ],
      clinicalNotes: 'Implement systematic medication reconciliation. Engage pharmacists in complex medication management.',
    },
    5: {
      level: 5,
      summary: 'Medication safety is a healthcare quality priority requiring interprofessional collaboration, technology, and patient engagement.',
      explanation: `## Quality and Safety Framework

**Medication Error Prevention:**
- Culture of safety
- Just culture for reporting
- Root cause analysis
- Proactive risk assessment (FMEA)

**Technology Applications:**
- CPOE with clinical decision support
- Barcode medication administration
- Smart pumps
- Automated dispensing

## Pharmacovigilance

**Post-Market Surveillance:**
- Adverse event reporting (MedWatch)
- Signal detection
- Risk evaluation and mitigation strategies (REMS)
- Drug safety communications

## Health Equity Considerations

**Disparities in Medication Use:**
- Access and affordability barriers
- Health literacy effects
- Cultural factors in medication beliefs
- Language-appropriate counseling

## Future Directions

- Pharmacogenomics integration
- AI for medication optimization
- Patient-reported outcomes
- Value-based medication management`,
      keyTerms: [
        { term: 'REMS', definition: 'Risk Evaluation and Mitigation Strategy - FDA safety program for high-risk drugs' },
        { term: 'pharmacovigilance', definition: 'Science of detecting, assessing, and preventing adverse drug effects' },
        { term: 'CPOE', definition: 'Computerized provider order entry for electronic prescribing' },
      ],
      clinicalNotes: 'Foster safety culture. Leverage technology for error prevention. Address equity in medication access.',
    },
  },

  media: [],
  citations: [{ id: 'fda-medication', type: 'website', title: 'Safe Use of Medicines', source: 'FDA' }],
  crossReferences: [{ targetId: 'health-literacy-reading-lab-results', targetType: 'concept', relationship: 'sibling', label: 'Reading Lab Results' }],
  tags: { systems: ['understanding-health-info'], topics: ['medications', 'prescriptions'], keywords: ['medication', 'prescriptions', 'drug safety'], clinicalRelevance: 'critical' },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default medicationInfo;
