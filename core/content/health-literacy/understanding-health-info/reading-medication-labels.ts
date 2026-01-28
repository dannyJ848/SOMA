import { EducationalContent } from '../../types';

export const readingMedicationLabels: EducationalContent = {
  id: 'reading-medication-labels',
  type: 'concept',
  name: 'Reading Medication Labels',
  alternateNames: ['Medication Labels', 'Prescription Instructions', 'Drug Labeling', 'Medication Safety'],
  
  levels: {
    1: {
      level: 1,
      summary: 'How to read and understand your prescription medicine labels to take medications safely.',
      explanation: `Medication labels contain important information about how to take your medicine safely. The label shows the medicine name, how much to take, when to take it, and important warnings. Reading your labels carefully helps prevent mistakes and keeps you safe. Always ask your pharmacist if you have questions.`,
      keyTerms: [
        { term: 'prescription', definition: 'A doctor\'s order for medication' },
        { term: 'dosage', definition: 'How much medicine to take' },
        { term: 'pharmacy label', definition: 'The sticker on your medicine bottle with instructions' }
      ],
      analogies: [
        'Recipe card: Like a recipe card that tells you ingredients and cooking steps, a medication label tells you what medicine you have and how to use it'
      ],
      examples: [
        'Reading "Take 1 tablet by mouth twice daily" to know you take one pill two times a day',
        'Checking the label to see if medicine should be taken with food',
        'Looking at the expiration date to make sure medicine is still good'
      ]
    },
    2: {
      level: 2,
      summary: 'Understanding the key components of prescription medication labels to ensure safe and effective medication use.',
      explanation: `Prescription medication labels contain critical information for safe use. Understanding each section helps prevent medication errors, drug interactions, and adverse effects. Pharmacists are available to explain any confusing information.

Key parts of a medication label:

Patient information:
- Patient name
- Prescription number (Rx#)
- Pharmacy name and phone number
- Date filled
- Refill information

Drug information:
- Brand name (if applicable)
- Generic name (scientific name)
- Strength (mg, mcg, etc.)
- Quantity dispensed
- Physical description

Directions (Sig):
- How much to take (one tablet, two capsules)
- How to take it (by mouth, apply to skin)
- How often (once daily, twice daily, every 8 hours)
- When to take it (with food, at bedtime, in the morning)
- Duration (for 7 days, until gone)

Common abbreviations:
- PO: by mouth
- BID: twice daily
- TID: three times daily
- QID: four times daily
- PRN: as needed
- AC: before meals
- PC: after meals
- HS: at bedtime
- Q: every (Q4H = every 4 hours)

Warnings and precautions:
- Do not drive or operate machinery
- Avoid alcohol
- May cause drowsiness
- Take with food to prevent stomach upset
- Do not crush or chew
- Keep out of reach of children

Storage instructions:
- Room temperature
- Refrigerate
- Protect from light
- Keep dry

Additional information:
- Prescriber name
- Pharmacy information
- Expiration date
- Lot number
- NDC number

Over-the-counter (OTC) labels:
- Drug Facts panel standardized format
- Active ingredients
- Uses (symptoms treated)
- Warnings
- Directions
- Other information (storage, inactive ingredients)
- Questions section

Tips for medication safety:
- Read the label every time before taking
- Use the same pharmacy for all prescriptions
- Keep an updated medication list
- Ask about generic alternatives
- Understand what to do if you miss a dose
- Know common side effects to watch for`,
      keyTerms: [
        { term: 'generic name', definition: 'The official scientific name of a medication' },
        { term: 'brand name', definition: 'The trademark name given by the manufacturer' },
        { term: 'Sig', definition: 'The directions for taking medication from the Latin "signa" meaning write' },
        { term: 'NDC', definition: 'National Drug Code - unique identifier for medications' },
        { term: 'contraindication', definition: 'Situation when medication should not be used' },
        { term: 'refill', definition: 'Additional supply of medication without new prescription' }
      ],
      analogies: [
        'Traffic signs: Like traffic signs that use colors and symbols to quickly communicate important rules, medication labels use formatting and abbreviations to convey safety information efficiently'
      ],
      examples: [
        'Amoxicillin 500mg: Take 1 capsule by mouth three times daily for 10 days until all gone',
        'Lisinopril 10mg: Take 1 tablet by mouth once daily in the morning. Warning: Do not use if pregnant. May cause dizziness.',
        'Ibuprofen (OTC): Active ingredient: Ibuprofen 200mg. Warnings: Ask doctor before use if you have stomach problems, take blood thinners, or are over 60.'
      ]
    },
    3: {
      level: 3,
      summary: 'Comprehensive guide to interpreting prescription and over-the-counter medication labels, including FDA requirements, safety systems, and patient counseling standards.',
      explanation: `Medication labeling represents a critical safety interface between the healthcare system and patients. FDA regulations govern label content and format, while auxiliary labels and patient counseling requirements enhance understanding for safe medication use.

FDA Label Requirements:

Prescription container label standards:
- Patient name prominently displayed
- Drug name (generic or brand)
- Strength and dosage form
- Clear directions for use
- Auxiliary warnings when appropriate
- Pharmacy contact information
- Prescription number for tracking

OTC Drug Facts labeling:
- Standardized format required since 1999
- Organized sections: Active ingredient, Purpose, Uses, Warnings, Directions, Other information, Inactive ingredients, Questions
- Pictograms for key warnings
- Standardized concentration expressions

Package insert (prescribing information):
- Comprehensive technical information
- Indications and usage
- Dosage and administration
- Contraindications
- Warnings and precautions
- Adverse reactions
- Drug interactions
- Use in specific populations
- Overdosage management
- Description and clinical pharmacology
- Clinical studies summary

Auxiliary Labels and Warnings:

Common auxiliary labels:
- "Take with food" - reduces GI irritation
- "Take on an empty stomach" - improves absorption
- "May cause drowsiness" - sedation warning
- "Do not drink alcohol" - interaction warning
- "Avoid sunlight" - photosensitivity
- "Shake well" - suspension medications
- "Refrigerate" - storage requirement
- "Do not crush or chew" - extended-release warning
- "Discard after [date]" - reconstituted antibiotics

Color-coded warning systems:
- Some pharmacies use color codes for specific warnings
- High-risk medication alerts
- Look-alike/sound-alike warnings

Patient Counseling Requirements:

OBRA \'90 mandates:
- Pharmacists must offer to counsel on new prescriptions
- Counsel must include:
  * Name and description of medication
  * Route of administration
  * Dosage form, dose, and schedule
  * Duration of therapy
  * Special directions and precautions
  * Common severe side effects
  * Techniques for self-monitoring
  * Storage requirements
  * Refill information
  * Action if dose is missed

Medication therapy management:
- Comprehensive medication reviews
- Personal medication records
- Medication action plans
- Intervention and referral
- Follow-up monitoring

Health Literacy Considerations:

Plain language requirements:
- Directions should avoid Latin abbreviations when possible
- "Take one tablet by mouth twice daily" preferred over "1 tab PO BID"
- Clear meal-related timing ("with breakfast" vs "AC")

Readability challenges:
- Small font sizes on labels
- Complex medical terminology
- Multiple medications with confusing instructions
- Patients with limited English proficiency

Improvement strategies:
- Simplified directions
- Larger fonts
- Icon-based instructions
- Translated labels
- Teach-back verification of understanding

High-Risk Medications:

Anticoagulants (warfarin, DOACs):
- INR monitoring requirements
- Bleeding precautions
- Drug and food interactions
- Missed dose instructions

Insulin and hypoglycemics:
- Blood glucose monitoring
- Hypoglycemia recognition and treatment
- Meal timing coordination
- Sick day rules

Opioids:
- Addiction and dependence risks
- Respiratory depression warnings
- Driving restrictions
- Safe storage and disposal
- Naloxone co-prescription

Pediatric and geriatric considerations:
- Weight-based dosing
- Dosing devices (oral syringes preferred)
- Fall risk medications in elderly
- Cognitive impairment considerations`,
      keyTerms: [
        { term: 'OBRA', definition: 'Omnibus Budget Reconciliation Act - includes pharmacist counseling requirements' },
        { term: 'auxiliary label', definition: 'Additional warning or instruction sticker applied to medication container' },
        { term: 'package insert', definition: 'Official FDA-approved prescribing information for healthcare professionals' },
        { term: 'medication therapy management', definition: 'Professional services to optimize medication use and improve outcomes' },
        { term: 'look-alike/sound-alike', definition: 'Medications with similar names that can be confused' },
        { term: 'indication', definition: 'The condition or disease a medication is approved to treat' }
      ]
    },
    4: {
      level: 4,
      summary: 'Advanced medication label analysis including regulatory frameworks, error prevention strategies, population-specific labeling, and integration with medication safety systems.',
      explanation: `Medication labeling operates within a comprehensive regulatory framework designed to maximize safety while ensuring clear communication. Advanced understanding encompasses regulatory compliance, error prevention engineering, and specialized labeling for vulnerable populations.

Regulatory Framework:

FDA Center for Drug Evaluation and Research:
- Labeling guidance documents
- Safety labeling changes
- Medication guide requirements
- Risk evaluation and mitigation strategies (REMS)
- Biosimilar labeling

USP Chapter <7>: Labeling
- Label content standards
- Storage condition terminology
- Expiration dating requirements
- Beyond-use dating for preparations

State pharmacy regulations:
- Label format requirements
- Generic substitution laws
- Counseling mandates
- Prescription monitoring program integration

Error Prevention and Human Factors:

Tall Man lettering:
- Mixed case to distinguish look-alike names
- Example: hydrALAZINE vs hydrOXYzine
- Required for specified drug pairs

Barcode medication administration:
- NDC barcode on unit-dose packaging
- Integration with electronic health records
- Point-of-care scanning requirements
- Error reduction through verification

Smart pump technology:
- Drug libraries with standardized concentrations
- Dose error reduction systems
- Clinical advisory alerts
- Wireless connectivity for updates

Institute for Safe Medication Practices (ISMP):
- List of confused drug names
- Error-prone abbreviations to avoid
- High-alert medication recommendations
- Labeling best practices

Specialized Labeling Requirements:

Pregnancy and lactation labeling (PLLR):
- Pregnancy exposure registry information
- Risk summary
- Clinical considerations
- Data description
- Replaced letter categories (A, B, C, D, X)

Geriatric labeling:
- Beers Criteria considerations
- Fall risk warnings
- Cognitive impairment cautions
- Renal/hepatic adjustment guidance

Pediatric labeling:
- FDA pediatric rule compliance
- Age-appropriate formulations
- Dosing device specifications
- Taste masking information

Controlled substance labeling:
- DEA schedule designation
- Dispensing limitation statements
- Refill restrictions
- Partial fill regulations
- Prescription validity periods

Medication Guides and Patient Counseling:

FDA-required Medication Guides:
- Serious adverse effects
- Distribution requirements with dispensing
- Specific medications requiring guides
- Format and content standards
- Patient comprehension testing

Patient package inserts:
- Oral contraceptives
- Estrogens
- Isotretinoin
- Specific risk communication

Medication reconciliation:
- Home medication verification
- Allergy documentation
- Indication clarification
- Dose and frequency confirmation
- Discrepancy resolution

Technology and Innovation:

Electronic prescribing:
- Structured sig directions
- Dose range checking
- Drug-drug interaction alerts
- Allergy checking
- Formulary status display

Smart labels:
- Temperature monitoring sensors
- Adherence monitoring
- Near-field communication
- QR codes for additional information
- Electronic reminder systems

Personalized labeling:
- Pharmacogenomic information
- Biomarker-based dosing
- Patient-specific warnings
- Culturally tailored instructions
- Health literacy-appropriate formats

Quality Improvement:

Label error reporting:
- MedWatch program
- ISMP reporting
- State board reporting
- Manufacturer notification
- Recall procedures

Continuous quality improvement:
- Label accuracy audits
- Patient comprehension assessments
- Readability testing
- Counseling effectiveness evaluation
- Technology integration assessment`,
      keyTerms: [
        { term: 'REMS', definition: 'Risk Evaluation and Mitigation Strategy - FDA program for medications with serious safety risks' },
        { term: 'Tall Man lettering', definition: 'Mixed-case lettering to distinguish look-alike drug names' },
        { term: 'ISMP', definition: 'Institute for Safe Medication Practices - nonprofit organization focused on preventing medication errors' },
        { term: 'Beers Criteria', definition: 'List of medications potentially inappropriate for older adults' },
        { term: 'beyond-use date', definition: 'Date after which a compounded or repackaged medication should not be used' },
        { term: 'pharmacogenomics', definition: 'Study of how genes affect individual response to medications' }
      ],
      clinicalNotes: `Clinical Pearl: When reviewing medications with patients, have them read the label aloud. This identifies both vision problems and comprehension issues. "Teach-back" verification that patients can explain when and how to take each medication.

High-Risk Labeling Situations:
- Discharge medication reconciliation - highest risk for errors
- High-alert medications (anticoagulants, insulin, opioids, chemotherapy)
- Patients with limited health literacy or English proficiency
- Complex regimens (5+ medications, multiple doses per day)
- Recent medication changes
- Transition between care settings

Documentation Best Practices:
- Note patient understanding of label instructions
- Document counseling provided and patient questions
- Record use of translated labels or auxiliary aids
- Flag high-risk medications in patient record
- Note adherence concerns or barriers identified`
    },
    5: {
      level: 5,
      summary: 'Expert analysis of medication labeling policy, international regulatory harmonization, emerging technologies, and the role of labeling in population-level medication safety.',
      explanation: `Medication labeling represents a critical intersection of regulatory science, health communication, pharmacovigilance, and health systems engineering. Expert-level analysis encompasses global regulatory frameworks, health outcomes research, and the future of medication information delivery.

Global Regulatory Harmonization:

ICH guidelines:
- E2C: Periodic safety update reports
- E2E: Pharmacovigilance planning
- M5: Data elements and standards for drug dictionaries
- Patient labeling harmonization efforts

Regional variations:
- FDA (United States) requirements
- EMA (European Union) patient information leaflets
- PMDA (Japan) labeling standards
- Health Canada requirements
- WHO essential medicines labeling

Challenges in harmonization:
- Language and cultural differences
- Regulatory timeline misalignment
- Differing risk tolerance
- Post-market surveillance variations
- Generic labeling requirements

Pharmacovigilance and Labeling:

Signal detection:
- Adverse event database mining
- Disproportionality analysis
- Case series identification
- Literature surveillance
- Social media monitoring

Label updates:
- Safety labeling changes
- Dear Healthcare Professional letters
- Direct healthcare professional communication
- Risk minimization measure updates
- Withdrawal and recall labeling

Risk communication science:
- Numeracy and risk comprehension
- Framing effects
- Visual risk presentation
- Cultural risk perception
- Trust and source effects

Health Services Research:

Labeling outcomes research:
- Impact of label changes on prescribing
- Patient comprehension studies
- Adherence and label design
- Error rate associations
- Cost-effectiveness of interventions

Health disparities:
- Labeling equity across populations
- Language access and outcomes
- Health literacy interventions
- Adherence gaps and labeling
- Technology access disparities

Medication adherence:
- Label simplification effects
- Reminder systems
- Packaging interventions
- Behavioral economics applications
- Adherence measurement

Emerging Technologies:

Digital therapeutics:
- Software as medical device labeling
- Prescription digital therapeutic requirements
- App-based dosing guidance
- Real-time adherence monitoring
- Integration with EHRs

Artificial intelligence:
- Natural language processing for label optimization
- Personalized risk prediction
- Automated drug interaction checking
- Predictive adherence modeling
- Voice-activated medication information

Blockchain and verification:
- Supply chain integrity
- Counterfeit prevention
- Temperature excursion documentation
- Smart contract adherence programs
- Decentralized clinical trials

Advanced drug delivery:
- Connected inhalers
- Smart pills with sensors
- Implantable devices
- Wearable drug delivery
- Biosimilars and interchangeable products

Policy and Public Health:

Health literacy initiatives:
- Plain writing standards
- Universal precautions approach
- Teach-back implementation
- Patient navigation support
- Community health worker integration

Opioid crisis response:
- Prescription drug monitoring programs
- Naloxone co-prescribing
- REMS modifications
- Patient education requirements
- Disposal and take-back programs

Antimicrobial stewardship:
- Diagnostic testing requirements
- Duration optimization
- Resistance communication
- Narrowing therapy guidance
- De-escalation protocols

Future Directions:

Precision labeling:
- Pharmacogenomic-guided instructions
- Real-world evidence integration
- Patient-reported outcome incorporation
- Dynamic label updating
- Individualized risk assessment

Regulatory science:
- Labeling simulation and modeling
- Patient cognition studies
- Eye-tracking research
- Comprehension validation
- Health equity integration

Global health:
- Essential medicines labeling
- Low-resource setting adaptations
- Illiteracy accommodations
- Multilingual requirements
- Cold chain maintenance`,
      keyTerms: [
        { term: 'ICH', definition: 'International Council for Harmonisation - develops guidelines for pharmaceutical regulation' },
        { term: 'pharmacovigilance', definition: 'Science of detecting, assessing, understanding, and preventing adverse effects of medications' },
        { term: 'signal detection', definition: 'Process of identifying potential safety issues from adverse event data' },
        { term: 'digital therapeutics', definition: 'Evidence-based therapeutic interventions delivered through software' },
        { term: 'antimicrobial stewardship', definition: 'Coordinated efforts to improve appropriate use of antimicrobial agents' },
        { term: 'real-world evidence', definition: 'Data on health outcomes from sources outside traditional clinical trials' }
      ],
      clinicalNotes: `Systems Leadership: Healthcare organizations should optimize medication labeling systems through:
- Standardized label formats across system
- Integrated clinical decision support
- Health literacy universal precautions
- Translation services and multilingual labels
- Patient comprehension verification
- Technology-enabled adherence support
- Medication safety committees
- Continuous quality monitoring

Research Contributions: Opportunities for advancing medication labeling science:
- Participate in FDA patient labeling studies
- Evaluate novel label formats and technologies
- Study health equity in labeling comprehension
- Assess technology-enabled interventions
- Document error reduction strategies
- Contribute to pharmacovigilance reporting

Policy Engagement: Professional advocacy for:
- Health literacy integration in labeling standards
- Technology-enabled labeling innovation
- Health equity in medication information access
- International harmonization efforts
- Patient-centered drug development`
    }
  },
  
  media: [],
  
  citations: [
    { id: 'davis-2006', type: 'article', authors: ['Davis TC'], title: 'Literacy and misunderstanding prescription drug labels', source: 'Annals of Internal Medicine' },
    { id: 'ismp-2022', type: 'article', authors: ['Institute for Safe Medication Practices'], title: 'ISMP\'s list of error-prone abbreviations, symbols, and dose designations', source: 'ISMP Medication Safety Alert' },
    { id: 'wolf-2010', type: 'article', authors: ['Wolf MS'], title: 'Improving prescription drug warnings to promote patient comprehension', source: 'Archives of Internal Medicine' },
    { id: 'fda-2013', type: 'website', authors: ['FDA'], title: 'Guidance for industry: Safety labeling changes - implementation of section 505(o)(4) of the FD&C Act', source: 'FDA Guidance Document' }
  ],
  
  crossReferences: [
    { targetId: 'ask-me-3', targetType: 'concept', relationship: 'related', label: 'Ask Me 3' },
    { targetId: 'teach-back-method', targetType: 'concept', relationship: 'related', label: 'Teach-Back Method' },
    { targetId: 'interpreting-test-results', targetType: 'concept', relationship: 'related', label: 'Interpreting Test Results' },
    { targetId: 'care-coordination', targetType: 'concept', relationship: 'related', label: 'Care Coordination' }
  ],
  
  tags: {
    systems: ['health-system', 'integumentary'],
    topics: ['patient-education', 'pharmacology'],
    keywords: ['medication labels', 'prescription safety', 'drug information', 'medication adherence', 'pharmacy', 'medication errors']
  },
  
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
