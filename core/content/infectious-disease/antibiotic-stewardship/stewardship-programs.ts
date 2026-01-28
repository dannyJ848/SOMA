import { EducationalContent } from '../../types';

export const stewardshipPrograms: EducationalContent = {
  id: 'infectious-disease-stewardship-programs',
  type: 'concept',
  name: 'Antibiotic Stewardship Programs',
  alternateNames: ['ASP', 'Antimicrobial Stewardship', 'Antibiotic Management Programs'],

  levels: {
    1: {
      level: 1,
      summary: 'Antibiotic stewardship programs are hospital teams that make sure antibiotics are used correctly to keep them working for future patients.',
      explanation: `Antibiotic stewardship programs are like quality control teams in hospitals. Their job is to make sure doctors use antibiotics the right way - giving the right drug, at the right dose, for the right amount of time.

**Why These Programs Exist:**
When antibiotics are used too much or incorrectly, bacteria learn to resist them. This means the antibiotics stop working. Stewardship programs help prevent this by:
- Reviewing antibiotic prescriptions
- Suggesting better alternatives when needed
- Teaching doctors and nurses about proper antibiotic use
- Tracking how antibiotics are being used

**How They Help Patients:**
- Patients get the most effective treatment
- Fewer side effects from unnecessary antibiotics
- Lower risk of getting infections like C. difficile
- Antibiotics remain effective for serious infections

**Common Activities:**
- Checking if patients still need IV antibiotics (switching to pills when possible)
- Making sure patients are not on antibiotics longer than needed
- Preventing antibiotic use when they will not help (like for viral colds)
- Tracking patterns of antibiotic use and resistance`,
      keyTerms: [
        { term: 'stewardship', definition: 'The careful and responsible management of something' },
        { term: 'antibiotic resistance', definition: 'When bacteria change and antibiotics can no longer kill them' },
        { term: 'prescription', definition: 'A doctor\'s order for medication' },
      ],
      analogies: [
        'Antibiotic stewardship is like managing a fishing stock - if you fish too much without rules, there will be no fish left. Stewardship programs set rules so antibiotics remain available and effective.',
        'Think of it like a library system. Stewardship programs make sure books (antibiotics) are borrowed properly and returned on time so everyone can use them.',
      ],
      examples: [
        'A patient with pneumonia is switched from IV to oral antibiotics once they can eat and drink.',
        'A doctor asks the stewardship team which antibiotic to use for a resistant infection.',
        'The team reviews all patients on broad-spectrum antibiotics daily to suggest narrower options.',
      ],
    },
    2: {
      level: 2,
      summary: 'Antimicrobial stewardship programs (ASPs) are coordinated interventions designed to improve and measure appropriate antimicrobial use to optimize patient outcomes, reduce resistance, and decrease unnecessary costs.',
      explanation: `Antimicrobial stewardship programs are formal, organized efforts within healthcare facilities to ensure antibiotics are used optimally. These programs have become mandatory in many jurisdictions and are recognized as essential patient safety initiatives.

**Core Program Components:**

*Leadership and Accountability:*
- Physician leader (often an infectious disease specialist)
- Pharmacy leader (clinical pharmacist with ID training)
- Support from hospital administration
- Defined program goals and metrics

*Key Interventions:*

1. **Prospective Audit and Feedback**
   - Pharmacists review antibiotic orders in real-time
   - Provide recommendations to prescribing physicians
   - Focus on broad-spectrum agents and prolonged courses
   - Non-punitive, educational approach

2. **Preauthorization Requirements**
   - Certain antibiotics require approval before use
   - Typically reserved for newest, broadest-spectrum agents
   - Ensures appropriate use of reserve antibiotics
   - Prevents overuse of expensive medications

3. **IV to Oral Conversion Programs**
   - Automatic switches when patients clinically stable
   - Criteria-based protocols
   - Reduces IV line infections and length of stay

4. **Antibiotic Time-Outs**
   - Mandatory review at 48-72 hours
   - Reassess need for antibiotics
   - Narrow spectrum based on culture results
   - Define treatment duration

**Outcome Measures:**
- Antibiotic consumption (days of therapy per 1000 patient-days)
- Resistance patterns in hospital
- C. difficile infection rates
- Antibiotic costs
- Length of stay
- Mortality rates

**Regulatory Requirements:**
- Joint Commission standards for hospital accreditation
- CMS conditions of participation
- State-level mandates in many US states`,
      keyTerms: [
        { term: 'prospective audit', definition: 'Review of antibiotic orders as they occur, with feedback to prescribers' },
        { term: 'preauthorization', definition: 'Requirement for approval before prescribing certain antibiotics' },
        { term: 'days of therapy', definition: 'A measure of antibiotic use - one day of therapy equals one day a patient receives any amount of an antibiotic' },
        { term: 'broad-spectrum', definition: 'Antibiotics that work against many different types of bacteria' },
      ],
      analogies: [
        'Antibiotic stewardship is like air traffic control - coordinating many flights (prescriptions) to ensure safety and efficiency while preventing collisions (drug interactions, resistance).',
      ],
      examples: [
        'A pharmacist reviews all orders for carbapenems and suggests alternatives when appropriate.',
        'Patients on IV vancomycin are automatically switched to oral when they meet clinical criteria.',
        'Weekly reports show antibiotic use trends by hospital unit.',
      ],
    },
    3: {
      level: 3,
      summary: 'Antimicrobial stewardship programs implement evidence-based interventions including formulary restriction, prospective review, education, and clinical decision support to optimize antimicrobial use across healthcare settings.',
      explanation: `Antimicrobial stewardship programs represent a comprehensive approach to improving antibiotic prescribing through multiple simultaneous interventions targeting prescribers, processes, and systems.

**Program Structure:**

*Required Expertise:*
- Infectious diseases physician
- Clinical pharmacist with ID training
- Microbiology laboratory collaboration
- Information technology support
- Infection prevention specialists
- Hospital administration champion

*Intervention Strategies:*

**Restrictive Strategies (Active):**
- Formulary restriction with preauthorization
- Automatic stop orders
- Required infectious diseases consultation
- Rapid diagnostic test-driven protocols
- Computerized decision support alerts

**Persuasive Strategies (Passive):**
- Education and guidelines
- Prospective audit with feedback
- Public reporting of prescribing patterns
- Academic detailing
- Clinical pathways and order sets

**Implementation Approaches:**

*Front-end (Restriction):*
- Limits access to certain agents
- Requires justification for broad-spectrum antibiotics
- Prevents inappropriate initiation

*Back-end (Review):*
- Reviews ongoing therapy
- Suggests de-escalation
- Optimizes dosing and duration
- Facilitates IV-to-oral switches

**Measurement and Metrics:**

*Process Measures:*
- Time to appropriate therapy
- Compliance with guidelines
- Time to de-escalation
- IV-to-oral conversion rates

*Outcome Measures:*
- Antimicrobial consumption (DOT per 1000 patient-days)
- Clinical outcomes (mortality, length of stay)
- Resistance rates
- C. difficile rates
- Adverse drug events
- Cost savings

**Expanding Settings:**
- Long-term care facilities
- Outpatient clinics
- Dental practices
- Veterinary medicine
- Agriculture (One Health approach)`,
      keyTerms: [
        { term: 'formulary', definition: 'A list of medications approved for use in a healthcare facility' },
        { term: 'de-escalation', definition: 'Narrowing antibiotic spectrum based on culture results' },
        { term: 'clinical pathway', definition: 'Standardized care protocol for specific conditions' },
        { term: 'academic detailing', definition: 'One-on-one educational outreach to clinicians' },
        { term: 'One Health', definition: 'Approach recognizing connection between human, animal, and environmental health' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced antimicrobial stewardship integrates clinical decision support, rapid diagnostic technologies, pharmacokinetic optimization, and outcome monitoring within frameworks of regulatory compliance and quality improvement.',
      explanation: `Contemporary antimicrobial stewardship programs employ sophisticated tools and methodologies to optimize prescribing across complex healthcare environments while navigating regulatory requirements and demonstrating value.

**Technology Integration:**

*Clinical Decision Support Systems:*
- Real-time alerts for drug interactions
- Dose adjustment recommendations for renal dysfunction
- Allergy checking and cross-reactivity guidance
- Culture result notifications
- Automated IV-to-oral conversion suggestions

*Rapid Diagnostic Technologies:*
- Matrix-assisted laser desorption/ionization time-of-flight (MALDI-TOF) mass spectrometry
- Multiplex PCR panels for respiratory and bloodstream infections
- FilmArray and similar rapid molecular diagnostics
- Beta-lactamase detection assays
- PCT-guided antibiotic discontinuation

**Advanced Interventions:**

*Dose Optimization:*
- Therapeutic drug monitoring programs (vancomycin, aminoglycosides)
- Extended infusion beta-lactam protocols
- Dosing based on pharmacokinetic/pharmacodynamic principles
- Obesity and critical illness dosing adjustments

*Antifungal Stewardship:*
- Appropriate antifungal prescribing
- Diagnostic stewardship (limiting inappropriate fungal testing)
- Antifungal resistance monitoring
- Prophylaxis optimization

*Surgical Prophylaxis Optimization:*
- Pre-operative dosing timing
- Appropriate agent selection
- Discontinuation within 24 hours
- Redosing protocols for prolonged procedures

**Regulatory and Accreditation:**

*Joint Commission Standards:*
- MM.09.01.01: Antimicrobial stewardship program required
- Leadership accountability
- Physician and pharmacy expertise
- Actionable goals and interventions
- Ongoing program evaluation

*CMS Conditions of Participation:*
- Hospital-wide program requirement
- Documented policies and procedures
- Reporting mechanisms

**Quality Improvement Methodologies:****
- Plan-Do-Study-Act (PDSA) cycles
- Statistical process control charts
- Benchmarking against similar institutions
- Cost-benefit analyses`,
      keyTerms: [
        { term: 'MALDI-TOF', definition: 'Matrix-assisted laser desorption/ionization time-of-flight mass spectrometry for rapid organism identification' },
        { term: 'procalcitonin (PCT)', definition: 'Biomarker used to guide antibiotic discontinuation in respiratory infections and sepsis' },
        { term: 'pharmacokinetics', definition: 'Study of how drugs move through the body (absorption, distribution, metabolism, excretion)' },
        { term: 'diagnostic stewardship', definition: 'Guiding appropriate test ordering and result interpretation' },
      ],
      clinicalNotes: 'The most effective stewardship programs combine restrictive and persuasive strategies. Programs with active pharmacist participation demonstrate greater impact on prescribing. Rapid diagnostic technologies can reduce time to optimal therapy from days to hours but require integration with stewardship workflows to achieve maximal benefit.',
    },
    5: {
      level: 5,
      summary: 'Expert antimicrobial stewardship encompasses precision medicine approaches, advanced diagnostic integration, system-wide implementation across care transitions, and novel intervention strategies to address emerging resistance and optimize outcomes in diverse patient populations.',
      explanation: `Advanced antimicrobial stewardship requires sophisticated understanding of healthcare systems, implementation science, and emerging technologies to address the global challenge of antimicrobial resistance.

**Precision Stewardship:**

*Risk Stratification:*
- Predictive models for resistant organism colonization
- Individualized antibiotic selection based on patient risk factors
- Machine learning for infection prediction
- Pharmacogenomic-guided dosing

*Personalized Duration:*
- Biomarker-guided therapy (PCT, CRP)
- Severity-adjusted treatment courses
- Site-specific infection considerations
- Immunocompetence assessment

**Advanced Diagnostic Integration:**

*Next-Generation Sequencing:*
- Metagenomic pathogen detection
- Resistance gene identification
- Rapid whole-genome sequencing for outbreak investigation
- Identification of uncommon pathogens

*Artificial Intelligence Applications:*
- Natural language processing of clinical notes
- Predictive algorithms for sepsis and infection
- Automated stewardship recommendations
- Image analysis for rapid diagnostics

**Implementation Science:**

*Behavioral Economics:*
- Nudges in electronic health records
- Default options in order sets
- Social norm feedback
- Loss framing vs gain framing

*Care Transitions:*
- Antibiotic reconciliation at discharge
- Post-discharge stewardship
- Long-term care stewardship integration
- Outpatient parenteral therapy monitoring

**Special Populations:**

*Immunocompromised Hosts:*
- Neutropenic fever protocols
- Transplant-specific considerations
- Prophylaxis optimization
- Fungal surveillance

*Critical Care:*
- De-escalation in sepsis
- Source control prioritization
- PK/PD optimization
- Device-associated infection prevention

**Novel Interventions:**

*Phage Therapy Stewardship:*
- Compassionate use protocols
- Regulatory frameworks
- Manufacturing and quality standards

*Microbiome-Based Interventions:*
- Fecal microbiota transplantation for C. difficile
- Live biotherapeutic products
- Probiotic stewardship

**Global Health Considerations:**
- Stewardship in resource-limited settings
- Access vs excess framework
- International resistance surveillance
- Antibiotic pollution and environmental stewardship`,
      keyTerms: [
        { term: 'pharmacogenomics', definition: 'Study of how genetic variations affect drug response' },
        { term: 'antibiotic reconciliation', definition: 'Review and optimization of antibiotic therapy at care transitions' },
        { term: 'bacteriophage therapy', definition: 'Treatment using viruses that infect bacteria' },
        { term: 'live biotherapeutic products', definition: 'Live organisms used as drugs to prevent or treat disease' },
      ],
      clinicalNotes: 'The future of antimicrobial stewardship lies in precision approaches using advanced diagnostics and AI to deliver the right drug to the right patient at the right time. Implementation science frameworks are essential for translating evidence-based interventions into practice. Addressing antimicrobial resistance requires stewardship across human health, agriculture, and environmental sectors (One Health).',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['infectious'],
    topics: ['stewardship', 'quality-improvement'],
    keywords: ['antibiotic stewardship', 'ASP', 'antimicrobial management', 'resistance prevention'],
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default stewardshipPrograms;
