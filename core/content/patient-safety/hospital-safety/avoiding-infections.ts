import { EducationalContent } from '../../types';

export const avoidingInfectionsContent: EducationalContent = {
  id: 'avoiding-infections',
  type: 'concept',
  name: 'Avoiding Healthcare-Associated Infections',
  alternateNames: ['Hospital Infection Prevention', 'HAI Prevention', 'Infection Control'],
  levels: {
    1: {
      level: 1,
      summary: 'Healthcare-associated infections are infections people get while receiving medical care. Simple steps like hand washing help prevent them.',
      explanation: `## Preventing Infections in Healthcare

Healthcare-associated infections are infections people get while receiving medical care. Simple steps like hand washing help prevent them.

### What Are Healthcare Infections?

These are infections you get:
- While in the hospital
- During surgery
- From medical equipment
- From other patients or staff

### Common Types

- Urinary tract infections from catheters
- Lung infections (pneumonia)
- Wound infections after surgery
- Bloodstream infections

### How to Stay Safe

**Wash Your Hands:**
- Before eating
- After using bathroom
- After touching wounds
- Ask visitors to wash hands too

**Speak Up:**
- Ask if staff washed their hands
- Ask why you need tubes or lines
- Ask when they can be removed
- Report symptoms early

### Signs of Infection

Tell your nurse if you have:
- Fever or chills
- Redness or swelling
- Drainage from wounds
- Pain that gets worse
- Burning when urinating

### What Staff Does

- Wash hands between patients
- Wear gloves when needed
- Clean equipment
- Use antibiotics carefully
- Follow special precautions`,
      keyTerms: [
        { term: 'Healthcare-associated infection', definition: 'Infection gotten during medical care' },
        { term: 'Catheter', definition: 'Tube placed in body for drainage or access' },
        { term: 'Antibiotics', definition: 'Medicines that fight bacterial infections' },
        { term: 'Hand hygiene', definition: 'Washing or sanitizing hands' }
      ],
      analogies: [
        'Hand washing is like a shield that protects you from germs'
      ],
      examples: [
        'A patient asks everyone to wash hands before touching their surgery site',
        'Early reporting of fever allows quick treatment of infection'
      ]
    },
    2: {
      level: 2,
      summary: 'Healthcare-associated infections (HAIs) affect 1 in 31 hospitalized patients. Prevention requires hand hygiene compliance, sterile techniques for procedures, appropriate device use, antibiotic stewardship, and environmental cleaning.',
      explanation: `## Understanding Healthcare-Associated Infections

Healthcare-associated infections (HAIs) affect 1 in 31 hospitalized patients. Prevention requires hand hygiene compliance, sterile techniques for procedures, appropriate device use, antibiotic stewardship, and environmental cleaning.

### Major Types of HAIs

**Catheter-Associated Urinary Tract Infection (CAUTI):**
- Most common HAI
- Linked to urinary catheters
- Prevention: avoid unnecessary catheters, remove promptly

**Central Line-Associated Bloodstream Infection (CLABSI):**
- Serious, can be life-threatening
- Linked to IV catheters in large veins
- Prevention: sterile insertion, proper maintenance

**Surgical Site Infection (SSI):**
- Occur after surgery
- Affect incisions or deeper tissues
- Prevention: antibiotics, sterile technique, glucose control

**Ventilator-Associated Pneumonia (VAP):**
- Lung infection in ventilated patients
- Serious in ICU setting
- Prevention: elevate head, oral care, minimize sedation

**Clostridioides difficile (C. diff):**
- Diarrheal illness
- Associated with antibiotic use
- Highly contagious spores

### Hand Hygiene

**When to Perform:**
- Before touching patient
- After touching patient
- After body fluid exposure
- After touching patient surroundings

**Methods:**
- Alcohol-based sanitizer (most situations)
- Soap and water (C. diff, norovirus, visible dirt)

**Compliance:**
- Goal: 90% or higher
- Often observed at 40-60%
- Patient and family reminders help

### Device-Related Prevention

**Insertion Bundles:**
- Checklists for placement
- Sterile technique required
- Appropriate site selection
- Verification processes

**Maintenance Bundles:**
- Daily review of necessity
- Site care protocols
- Aseptic access technique
- Prompt removal when no longer needed`,
      keyTerms: [
        { term: 'HAI', definition: 'Healthcare-associated infection' },
        { term: 'Catheter', definition: 'Tube inserted into body' },
        { term: 'Central line', definition: 'IV catheter in large central vein' },
        { term: 'Bundle', definition: 'Group of evidence-based practices' },
        { term: 'Antibiotic stewardship', definition: 'Appropriate antibiotic use' }
      ],
      analogies: [
        'Infection prevention bundles are like a pilot checklist before takeoff'
      ],
      examples: [
        'A daily checklist reminds nurses to evaluate if urinary catheter is still needed',
        'Hand hygiene compliance improved when patients were encouraged to remind staff'
      ]
    },
    3: {
      level: 3,
      summary: 'Healthcare-associated infections cause significant morbidity, mortality, and cost. Prevention requires multifaceted approaches including surveillance, outbreak investigation, antimicrobial stewardship programs, and adherence to transmission-based precautions for contagious pathogens.',
      explanation: `## HAI Prevention Programs

Healthcare-associated infections cause significant morbidity, mortality, and cost. Prevention requires multifaceted approaches including surveillance, outbreak investigation, antimicrobial stewardship programs, and adherence to transmission-based precautions for contagious pathogens.

### Impact of HAIs

**Statistics:**
- 1.7 million HAIs annually in US hospitals
- 99,000 deaths associated with HAIs
- $28-45 billion in direct costs
- Extend hospital stays 8-9 days on average

**Most Common Pathogens:**
- Staphylococcus aureus (MRSA and MSSA)
- Enterococcus (VRE)
- E. coli and Klebsiella (ESBL, CRE)
- C. difficile
- Candida species

### Surveillance

**NHSN (National Healthcare Safety Network):**
- CDC surveillance system
- Standardized definitions
- Benchmarking data
- Required for CMS reporting

**Process Measures:**
- Hand hygiene compliance
- Device utilization ratios
- Bundle compliance
- Antibiotic usage

**Outcome Measures:**
- Infection rates
- Device-associated infection rates
- SSI rates by procedure
- C. difficile rates

### Transmission-Based Precautions

**Contact Precautions:**
- Gloves and gown required
- For C. difficile, MRSA, VRE, RSV
- Dedicated equipment
- Patient room restriction

**Droplet Precautions:**
- Surgical mask within 3 feet
- For influenza, pertussis, meningitis
- Private room preferred

**Airborne Precautions:**
- N95 respirator required
- Negative pressure room
- For TB, measles, varicella, COVID-19

**Protective Environment:**
- For severely immunocompromised
- HEPA filtration
- Restricted entry

### Antimicrobial Stewardship

**Core Elements:**
- Leadership commitment
- Accountability
- Drug expertise
- Action: policies and protocols
- Tracking: monitoring usage
- Reporting: regular feedback
- Education: ongoing training

**Interventions:**
- Pre-authorization for restricted antibiotics
- Prospective audit and feedback
- IV to oral conversion
- De-escalation based on cultures
- Duration optimization
- Automatic stop orders

### Outbreak Investigation

**Recognition:**
- Cluster of similar infections
- Unusual organism
- Increased rate above baseline

**Investigation Steps:**
1. Confirm outbreak
2. Case definition
3. Case finding
4. Descriptive epidemiology
5. Hypothesis generation
6. Analytic studies
7. Control measures
8. Communication

**Common Sources:**
- Contaminated equipment
- Healthcare worker colonization
- Environmental reservoirs
- Water systems
- Foodborne`,
      keyTerms: [
        { term: 'NHSN', definition: 'CDC infection surveillance system' },
        { term: 'MRSA', definition: 'Methicillin-resistant Staphylococcus aureus' },
        { term: 'VRE', definition: 'Vancomycin-resistant Enterococcus' },
        { term: 'ESBL', definition: 'Extended-spectrum beta-lactamase' },
        { term: 'Cohorting', definition: 'Grouping patients with same infection' }
      ]
    },
    4: {
      level: 4,
      summary: 'Infection prevention and control requires organizational infrastructure including trained infection preventionists, microbiology laboratory support, environmental services collaboration, and engagement with quality improvement. Regulatory requirements from CMS and accreditation bodies drive mandatory programs.',
      explanation: `## Institutional Infection Prevention

Infection prevention and control requires organizational infrastructure including trained infection preventionists, microbiology laboratory support, environmental services collaboration, and engagement with quality improvement. Regulatory requirements from CMS and accreditation bodies drive mandatory programs.

### Organizational Structure

**Infection Prevention Program:**
- Medical director (physician leader)
- Infection preventionists (specialized nurses)
- Data analyst
- Administrative support

**Infection Preventionist Role:**
- Surveillance and data analysis
- Outbreak investigation
- Policy development
- Education and training
- Consultation

**Recommended Ratios:**
- 1 IP per 100-150 occupied beds
- More for high-acuity settings
- Adjust for teaching hospitals

### Laboratory Partnership

**Rapid Diagnostics:**
- PCR for rapid organism identification
- Antibiotic resistance gene detection
- Blood culture identification in hours
- Faster targeted therapy

**Antibiotic Susceptibility Testing:****
- Traditional cultures (24-48 hours)
- Automated systems
- Newer rapid methods
- Interpretation guidelines

**Whole Genome Sequencing:**
- Outbreak investigation
- Transmission mapping
- Resistance prediction
- Research applications

### Environmental Cleaning

**High-Touch Surfaces:**
- Bed rails
- Call buttons
- IV pumps
- Door handles
- Light switches

**Cleaning Verification:**
- ATP bioluminescence
- Fluorescent markers
- Visual inspection
- Cultures (research)

**Novel Technologies:**
- UV-C disinfection
- Hydrogen peroxide vapor
- Continuous room decontamination
- Self-disinfecting surfaces

### High-Risk Settings

**Intensive Care Units:**
- Highest HAI rates
- Multiple invasive devices
- Immunocompromised patients
- Antibiotic resistance

**Oncology Units:**
- Neutropenia common
- Protective environment
- Mold concerns
- Viral reactivation

**Transplant Units:****
- Profound immunosuppression
- CMV and EBV monitoring
- Fungal prophylaxis
- Isolation requirements

**Operating Rooms:**
- Sterile technique critical
- Laminar airflow
- Surgical attire
- Traffic control

### Regulatory Requirements

**CMS Conditions of Participation:**
- Infection control program required
- antibiotic stewardship required
- QAPI integration
- Survey and enforcement

**The Joint Commission:**
- National Patient Safety Goals
- IC standards
- Hand hygiene monitoring
- Required improvement activities

**State Requirements:**
- Reporting mandates vary
- C. difficile, MRSA often reportable
- Licensing requirements
- Public health collaboration`,
      keyTerms: [
        { term: 'Infection preventionist', definition: 'Specialist in infection control' },
        { term: 'ATP bioluminescence', definition: 'Method detecting organic material' },
        { term: 'Neutropenia', definition: 'Low white blood cell count' },
        { term: 'QAPI', definition: 'Quality Assurance Performance Improvement' }
      ],
      clinicalNotes: 'Hand hygiene compliance rarely exceeds 70% without active monitoring and feedback. UV-C room disinfection reduces C. difficile by 20-40% when added to standard cleaning. Infection preventionist staffing below recommended ratios associated with higher HAI rates. Rapid diagnostic testing with stewardship intervention reduces antibiotic use and improves outcomes.'
    },
    5: {
      level: 5,
      summary: 'Emerging challenges in infection prevention include antimicrobial resistance, Candida auris, new diagnostic technologies, and healthcare delivery changes. Future directions involve predictive analytics, bacteriophage therapy, microbiome modulation, and global health security approaches to pandemic preparedness.',
      explanation: `## Advanced Infection Prevention

Emerging challenges in infection prevention include antimicrobial resistance, Candida auris, new diagnostic technologies, and healthcare delivery changes. Future directions involve predictive analytics, bacteriophage therapy, microbiome modulation, and global health security approaches to pandemic preparedness.

### Antimicrobial Resistance Crisis

**Carbapenem-Resistant Organisms (CRE):**
- Limited treatment options
- High mortality
- Environmental persistence
- Colonization screening

**Candida auris:**
- Multidrug-resistant fungus
- Colonizes skin and environment
- Outbreak potential
- Specialized decontamination needed

**Colistin Resistance:**
- Last-resort antibiotic
- Mobile resistance genes
- Pan-resistant organisms
- Therapeutic dilemma

### Diagnostic Advances

**Metagenomic Sequencing:**
- Culture-independent diagnosis
- Rapid pathogen identification
- Resistance gene detection
- Unbiased detection

**Artificial Intelligence:**
- Predicting sepsis
- Identifying outbreaks
- Antibiotic recommendation
- Antimicrobial stewardship

**Point-of-Care Testing:**
- PCR at bedside
- Rapid influenza/COVID/strep
- Immediate isolation decisions
- Streamlined workflows

### Innovative Prevention Strategies

**Microbiome Therapeutics:**
- Fecal microbiota transplant for C. diff
- Probiotics (mixed evidence)
- Decolonization strategies
- Skin microbiome modulation

**Bacteriophage Therapy:**
- Viruses that kill bacteria
- Personalized treatments
- Experimental currently
- Growing interest for resistant infections

**Vaccines in Development:**
- Staphylococcus aureus (challenges)
- C. difficile toxoid
- Pseudomonas
- Fungal vaccines

**Passive Immunization:****
- Monoclonal antibodies
- Pre-exposure prophylaxis
- Post-exposure prophylaxis
- Emerging applications

### Pandemic Preparedness

**Lessons from COVID-19:**
- Surge capacity limitations
- PPE supply chain
- Staffing challenges
- Visitor policies
- Telemedicine expansion

**Future Preparedness:**
- Stockpiles and reserves
- Flexible facility design
- Workforce surge plans
- Regional collaboration
- Rapid research infrastructure

**Global Health Security:**
- International Health Regulations
- Pathogen surveillance
- Vaccine development platforms
- Equity in access
- One Health approach

### Measurement and Accountability

**Public Reporting:**
- Hospital Compare website
- State reporting requirements
- Consumer transparency
- Benchmarking

**Pay-for-Performance:**
- CMS HAC Reduction Program
- Value-based purchasing
- Alternative payment models
- Shared savings

**Zero Harm Goals:**
- Perfection vs improvement
- Realistic expectations
- System approach
- Just culture

### Research Priorities

**Transmission Science:**
- Aerosol vs droplet debate
- Surface contamination
- Asymptomatic transmission
- Environmental reservoirs

**Intervention Studies:**
- Pragmatic trials
- Implementation science
- Economic evaluation
- Sustainability

**Human Factors:****
- Behavioral interventions
- Workflow design
- Device design
- Team communication`,
      keyTerms: [
        { term: 'CRE', definition: 'Carbapenem-resistant Enterobacterales' },
        { term: 'Metagenomics', definition: 'Study of genetic material from environment' },
        { term: 'Bacteriophage', definition: 'Virus that infects bacteria' },
        { term: 'One Health', definition: 'Integrated human, animal, environmental health' }
      ],
      clinicalNotes: 'Candida auris requires specialized infection control - contact precautions plus environmental cleaning with EPA-registered disinfectants effective against C. auris. Metagenomic sequencing changing diagnostic approach but requires expertise for interpretation. Bacteriophage therapy remains experimental in US with FDA expanded access pathway. COVID-19 demonstrated need for flexible surge capacity and highlighted importance of global surveillance.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['patient-safety', 'hospital-safety'],
    keywords: ['infection control', 'HAI', 'hand hygiene', 'antibiotic stewardship', 'prevention']
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
