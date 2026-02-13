/**
 * Over-the-Counter Safety
 *
 * Safe use of non-prescription medications.
 */

import { EducationalContent } from '../../types';

export const overTheCounterSafety: EducationalContent = {
  id: 'concept-over-the-counter-safety',
  type: 'concept',
  name: 'Over-the-Counter Safety',
  alternateNames: ['OTC Medication Safety', 'Non-Prescription Drug Safety', 'Self-Medication Safety'],

  levels: {
    1: {
      level: 1,
      summary: 'Medicines you can buy without a prescription can still be dangerous if not used correctly.',
      explanation: `Medicines you can buy at the store without a prescription are called "over-the-counter" or OTC medicines. Even though you don't need a prescription, they can still be harmful if not used safely.

**Examples of OTC Medicines:**
- Pain relievers (Tylenol, Advil)
- Cold medicines
- Allergy medicines
- Stomach medicines
- Vitamins and supplements

**How to Stay Safe:**

**Read the Label:**
- How much to take
- How often to take it
- Warnings about who shouldn't take it
- What not to mix it with

**Follow Directions:**
- Don't take more than it says
- Don't take it more often than it says
- Don't give adult medicine to children

**Ask Questions:**
- Ask the pharmacist if you're not sure
- Tell them about other medicines you take
- Tell them about any health problems you have

**Remember:**
Just because you can buy it without a prescription doesn't mean it's always safe. Always read the label and ask questions!`,
      keyTerms: [
        { term: 'over-the-counter (OTC)', definition: 'Medicine you can buy without a prescription from a doctor' },
        { term: 'label', definition: 'The information on medicine that tells you how to use it safely' },
        { term: 'dose', definition: 'How much medicine you should take at one time' },
      ],
      analogies: [
        'OTC medicines are like kitchen knives - useful when used correctly, but can hurt you if used wrong.',
      ],
      examples: [
        'Checking how many Tylenol tablets you can take in one day.',
        'Asking the pharmacist if cold medicine is okay with your other medicine.',
      ],
    },
    2: {
      level: 2,
      summary: 'Over-the-counter medications require careful attention to dosing, interactions, and contraindications despite being available without prescription.',
      explanation: `Over-the-counter medications are generally safe when used as directed, but misuse can cause serious harm.

**Common OTC Categories:**
| Category | Examples | Common Uses |
|----------|----------|-------------|
| Pain relievers | Acetaminophen, ibuprofen | Pain, fever |
| Antihistamines | Diphenhydramine, loratadine | Allergies, sleep |
| Decongestants | Pseudoephedrine, phenylephrine | Nasal congestion |
| Antacids | Tums, Maalox | Heartburn |
| Laxatives | Miralax, Dulcolax | Constipation |

**Reading the Drug Facts Label:**

*Active Ingredient:* What drug it contains and how much
*Uses:* What symptoms it treats
*Warnings:* Who shouldn't take it, interactions
*Directions:* How much and how often
*Inactive Ingredients:* Other contents (important for allergies)

**Common Risks:**

**Acetaminophen (Tylenol):**
- Maximum 3,000-4,000 mg/day
- Liver damage risk if exceeded
- Found in many combination products

**NSAIDs (Ibuprofen, Naproxen):**
- Stomach bleeding risk
- Kidney problems with long-term use
- Heart risks at high doses

**Decongestants:**
- Can raise blood pressure
- Can interact with blood pressure medications
- Can cause insomnia

**Antihistamines:**
- Drowsiness (first-generation)
- Falls risk in elderly
- Urinary problems in some people

**Important Safety Rules:**
1. Don't exceed maximum doses
2. Check all products for the same ingredient
3. Tell your doctor about OTC use
4. Don't use long-term without medical advice
5. Keep away from children

**When to See a Doctor:**
- Symptoms don't improve
- Symptoms worsen
- New symptoms develop
- You need OTC meds frequently`,
      keyTerms: [
        { term: 'drug facts label', definition: 'Standardized label on OTC medications providing safety information' },
        { term: 'active ingredient', definition: 'The actual drug that treats your symptoms' },
        { term: 'NSAID', definition: 'Non-steroidal anti-inflammatory drug like ibuprofen or naproxen' },
        { term: 'contraindication', definition: 'A reason why you should not take a medication' },
      ],
      analogies: [
        'OTC medicine dosing is like following a recipe - the right amount makes it work, too much can ruin it.',
      ],
    },
    3: {
      level: 3,
      summary: 'OTC medication safety requires understanding pharmacology, drug interactions, special population considerations, and the limitations of self-treatment.',
      explanation: `## Comprehensive OTC Safety

### Pharmacology of Common OTC Drugs

**Analgesics/Antipyretics:**
| Drug | Mechanism | Max Daily Dose | Key Concerns |
|------|-----------|----------------|--------------|
| Acetaminophen | Central COX inhibition | 3-4g | Hepatotoxicity |
| Ibuprofen | COX-1/2 inhibition | 1200mg OTC | GI, renal, CV |
| Naproxen | COX-1/2 inhibition | 660mg OTC | GI, renal, CV |
| Aspirin | Irreversible COX inhibition | 4g | GI bleeding, Reye's |

**Antihistamines:**
| Generation | Examples | Sedation | Other Effects |
|------------|----------|----------|---------------|
| First | Diphenhydramine, chlorpheniramine | High | Anticholinergic |
| Second | Loratadine, cetirizine | Low | Fewer systemic effects |

### High-Risk Drug Interactions

**Acetaminophen:**
- Alcohol (hepatotoxicity)
- Warfarin (INR changes)
- Isoniazid (hepatotoxicity)

**NSAIDs:**
- Anticoagulants (bleeding)
- ACE inhibitors/ARBs (renal)
- Aspirin (GI, reduced cardioprotection)
- Lithium (increased levels)
- Methotrexate (toxicity)

**Decongestants:**
- MAO inhibitors (hypertensive crisis)
- Stimulants (cardiovascular)
- Certain antidepressants

### Special Populations

**Pediatric Considerations:**
- Weight-based dosing essential
- Some products not for children under certain ages
- Aspirin avoided (Reye's syndrome)
- Different formulations needed

**Geriatric Considerations:**
- Beers Criteria medications to avoid
- First-generation antihistamines risky
- NSAID risks elevated
- Drug accumulation more common

**Pregnancy/Lactation:**
- Category considerations
- First trimester sensitivity
- Acetaminophen generally preferred
- Many products lack safety data

**Chronic Conditions:**
| Condition | Avoid/Caution |
|-----------|---------------|
| Hypertension | Decongestants, NSAIDs |
| Heart disease | NSAIDs, decongestants |
| Kidney disease | NSAIDs |
| Liver disease | Acetaminophen excess |
| Diabetes | High-sugar preparations |

### Hidden Ingredient Dangers

**Acetaminophen in Combination Products:**
- Cold/flu combinations
- Sleep aids (e.g., Tylenol PM)
- Migraine formulas
- Easy to exceed maximum dose

**Sodium Content:**
- Some effervescent products
- Concern for heart failure, hypertension
- Check labels if sodium restricted

### Appropriate Self-Treatment

**Suitable for Self-Treatment:**
- Minor, self-limiting conditions
- Clear symptom pattern
- Short duration expected
- No red flag symptoms

**Requires Medical Evaluation:**
- Severe or worsening symptoms
- Prolonged duration
- Systemic symptoms (fever, weight loss)
- Uncertain diagnosis
- Failed self-treatment

### Pharmacist Consultation

**When to Ask:**
- New medications or conditions
- Multiple medications
- Special populations
- Persistent symptoms
- Uncertain about appropriate product

**Information to Provide:**
- All current medications
- Medical conditions
- Allergies
- Symptom details
- Previous treatment attempts`,
      keyTerms: [
        { term: 'Beers Criteria', definition: 'List of medications potentially inappropriate for older adults' },
        { term: 'COX inhibition', definition: 'Mechanism of NSAIDs blocking cyclooxygenase enzymes' },
        { term: 'hepatotoxicity', definition: 'Liver damage or toxicity' },
        { term: 'anticholinergic', definition: 'Effects blocking acetylcholine, causing dry mouth, constipation, confusion' },
        { term: 'Reye syndrome', definition: 'Serious condition in children associated with aspirin use during viral illness' },
      ],
      clinicalNotes: 'Acetaminophen toxicity is the most common cause of acute liver failure in the US, often due to unintentional overdose from multiple products containing the same ingredient.',
    },
    4: {
      level: 4,
      summary: 'Advanced OTC safety encompasses regulatory frameworks, pharmacovigilance, therapeutic decision-making, and integration of OTC use into comprehensive medication management.',
      explanation: `## Advanced OTC Medication Safety

### Regulatory Framework

**FDA OTC Monograph System:**
- Active ingredients recognized as safe and effective
- Labeling requirements
- Marketing without individual approval
- Ongoing review and updates

**Prescription to OTC Switches:**
- Demonstrated safety profile
- Conditions appropriate for self-diagnosis
- Low abuse potential
- Adequate labeling for lay use
- Recent examples: omeprazole, loratadine

**Behind-the-Counter Medications:**
- Pseudoephedrine (CMEA regulations)
- Pharmacist required for sale
- Purchase limits and tracking

### Pharmacovigilance

**Adverse Event Reporting:**
- FDA MedWatch for serious events
- Manufacturer reporting requirements
- Post-market surveillance
- Signal detection systems

**Common Underreported Issues:**
- Cumulative toxicity
- Drug interactions
- Use in contraindicated conditions
- Incorrect self-diagnosis

### Therapeutic Decision-Making

**Evidence for OTC Efficacy:**
| Category | Evidence Quality | Considerations |
|----------|-----------------|----------------|
| Pain relievers | Strong | Dose-response established |
| Cold remedies | Variable | Many combination products |
| Cough suppressants | Weak | Limited efficacy data |
| Sleep aids | Moderate | Tolerance develops |
| Probiotics | Emerging | Strain-specific evidence |

**Selecting Appropriate Products:**
1. Identify specific symptoms to treat
2. Choose single-ingredient when possible
3. Consider duration of action needed
4. Account for patient-specific factors
5. Evaluate evidence for efficacy

### Integration with Prescription Therapy

**Comprehensive Medication Review:**
- Include all OTC products
- Identify duplications
- Assess interactions
- Evaluate appropriateness
- Consider deprescribing

**Documentation:**
- OTC use in medical records
- Patient medication lists
- Pharmacy profiles
- Care transition summaries

### Special Product Categories

**Dietary Supplements:**
- Not FDA-approved for efficacy
- Quality varies significantly
- Interaction potential
- USP verification available

**Homeopathic Products:**
- Minimal to no active ingredient
- Not FDA-evaluated for claims
- Labeling requirements limited
- Patient education needed

**Medical Devices (OTC):**
- Different regulatory pathway
- Accuracy varies
- Instructions essential
- Examples: blood pressure monitors, glucose meters

### Cost and Access Considerations

**Insurance Coverage:**
- Most OTC not covered
- HSA/FSA eligible
- CARES Act expanded eligibility
- Medicaid coverage varies by state

**Equivalent Options:**
- Store brands vs. name brands
- Same active ingredients often
- Significant cost differences
- Quality standards equivalent

### Patient Counseling Strategies

**Effective Communication:**
- Assess health literacy
- Use teach-back
- Provide written information
- Address barriers to understanding

**High-Risk Situations:**
- Polypharmacy patients
- Elderly patients
- Patients with multiple conditions
- Low health literacy

### Self-Care Protocols

**Pharmacist Assessment Tools:**
- QuEST/SCHOLAR
- Self-care algorithms
- Referral criteria
- Follow-up recommendations`,
      keyTerms: [
        { term: 'OTC monograph', definition: 'FDA framework establishing conditions under which OTC drugs are generally recognized as safe and effective' },
        { term: 'behind-the-counter', definition: 'OTC medications requiring pharmacist involvement for sale but not a prescription' },
        { term: 'CMEA', definition: 'Combat Methamphetamine Epidemic Act - regulates pseudoephedrine sales' },
        { term: 'pharmacovigilance', definition: 'Science and activities relating to detection and prevention of adverse drug effects' },
        { term: 'USP verification', definition: 'United States Pharmacopeia quality verification program for supplements' },
      ],
      clinicalNotes: 'The FDA is currently modernizing the OTC monograph system to allow more responsive updates to safety information and labeling requirements.',
    },
    5: {
      level: 5,
      summary: 'Expert OTC medication safety integrates health policy, public health perspectives, health systems optimization, and advanced clinical decision-making to maximize benefits and minimize population-level risks of self-medication.',
      explanation: `## Expert-Level OTC Safety

### Health Policy Perspectives

**Rx-to-OTC Switch Policy:**
- Public health implications
- Access vs. safety balance
- Healthcare cost impacts
- International comparisons
- Ongoing policy debates

**Current Policy Issues:**
| Topic | Considerations |
|-------|----------------|
| Contraceptive OTC | Access, safety, counseling needs |
| Naloxone access | Overdose prevention, training |
| Antibiotic access | Resistance concerns, appropriate use |
| Opioid alternatives | OTC pain management options |

### Population Health Considerations

**Self-Medication Patterns:**
- Prevalence of OTC use
- Demographic variations
- Health belief influences
- Economic factors

**Public Health Risks:**
- Antimicrobial resistance potential
- Masking serious conditions
- Interaction with public health interventions
- Health disparities in access

**Surveillance and Monitoring:**
- Poison control data
- Emergency department trends
- Pharmacovigilance signals
- Real-world evidence generation

### Health Systems Optimization

**Pharmacist Practice Evolution:**
- Expanded clinical roles
- Collaborative practice agreements
- Point-of-care testing
- Prescribing authority expansion

**Technology Integration:**
- Decision support for self-care
- Patient-facing apps
- Pharmacy system alerts
- Telehealth triage

**Care Coordination:**
- OTC documentation in EHRs
- Health information exchange
- Patient portal medication lists
- Interprofessional communication

### Advanced Clinical Decision-Making

**Complex Patient Scenarios:**
| Scenario | Considerations |
|----------|----------------|
| Polypharmacy elderly | Beers Criteria, deprescribing, interaction burden |
| Chronic pain management | Multimodal approach, opioid alternatives |
| Pediatric fever | Age-appropriate selection, parent education |
| Pregnancy symptoms | Risk-benefit, limited evidence, timing |

**Evidence-Based Selection:**
- Cochrane reviews for OTC categories
- NNT/NNH considerations
- Clinical significance vs. statistical significance
- Limitations of trial populations

### Quality and Safety Initiatives

**Medication Safety Organizations:**
- ISMP consumer resources
- FDA Safe Use Initiative
- State pharmacy board programs
- Professional organization guidelines

**Patient Safety Interventions:**
- Unit-dose packaging
- Child-resistant containers
- Warning label improvements
- Pictogram development

### Emerging Issues

**Novel OTC Categories:**
- Cannabidiol (CBD) products
- Kratom and botanicals
- Nootropics and "smart drugs"
- Personalized OTC recommendations

**Digital Health Intersection:**
- App-recommended medications
- AI-driven symptom assessment
- Direct-to-consumer advertising evolution
- Social media health claims

### Global Perspectives

**International Comparisons:**
| Country | Approach |
|---------|----------|
| US | OTC monograph system |
| UK | Pharmacy (P) medicines category |
| Australia | Pharmacist-only category |
| Japan | Risk-based categories |

**Harmonization Efforts:**
- International regulatory cooperation
- Labeling standards
- Safety signal sharing

### Research and Future Directions

**Priority Research Areas:**
- Real-world OTC safety data
- Optimal self-care algorithms
- Technology-assisted self-medication
- Health literacy interventions

**Patient Advocacy:**
- Informed self-medication choices
- Recognition of limitations
- Appropriate escalation
- Integration with professional care`,
      keyTerms: [
        { term: 'real-world evidence', definition: 'Clinical evidence from data collected outside traditional clinical trials' },
        { term: 'deprescribing', definition: 'Systematic process of identifying and discontinuing medications when harms outweigh benefits' },
        { term: 'collaborative practice agreement', definition: 'Formal arrangement allowing pharmacists expanded clinical functions under physician oversight' },
        { term: 'NNT/NNH', definition: 'Number Needed to Treat/Harm - measures of treatment benefit and risk' },
        { term: 'health information exchange', definition: 'Electronic sharing of health information across organizations' },
      ],
      clinicalNotes: `Expert OTC safety competencies:
1. Health policy framework understanding
2. Population health perspective
3. Health systems optimization knowledge
4. Advanced clinical decision-making
5. Quality and safety initiative awareness
6. Emerging issues monitoring
7. Global regulatory perspective
8. Research and advocacy engagement`,
    },
  },

  media: [],

  citations: [
    {
      id: 'fda-otc',
      type: 'website',
      title: 'Over-the-Counter Medicines: Know Your Risks and Reduce Them',
      source: 'U.S. Food and Drug Administration',
      url: 'https://www.fda.gov/drugs/special-features/over-counter-medicines-know-your-risks-and-reduce-them',
    },
  ],

  crossReferences: [
    { targetId: 'concept-checking-prescriptions', targetType: 'concept', relationship: 'related', label: 'Checking Prescriptions' },
    { targetId: 'concept-understanding-drug-interactions', targetType: 'concept', relationship: 'related', label: 'Understanding Drug Interactions' },
    { targetId: 'concept-avoiding-medication-errors', targetType: 'concept', relationship: 'related', label: 'Avoiding Medication Errors' },
  ],

  tags: {
    systems: ['patient-safety'],
    topics: ['medication-safety', 'over-the-counter', 'self-medication'],
    clinicalRelevance: 'high',
    keywords: ['OTC', 'over-the-counter', 'non-prescription', 'self-medication', 'medication safety'],
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default overTheCounterSafety;
