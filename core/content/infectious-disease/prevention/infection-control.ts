import { EducationalContent } from '../../types';

export const infectionControl: EducationalContent = {
  id: 'infectious-disease-infection-control',
  type: 'concept',
  name: 'Infection Control and Prevention',
  alternateNames: ['Infection Prevention', 'IPAC', 'Hospital Epidemiology'],

  levels: {
    1: {
      level: 1,
      summary: 'Infection control is the practice of preventing germs from spreading in hospitals and communities through cleanliness, barriers, and safe practices.',
      explanation: `Infection control includes all the steps we take to stop germs from spreading from person to person. This is especially important in hospitals where sick people are more vulnerable.

**Key Infection Control Practices:**

1. **Hand Hygiene**
   - Washing hands with soap and water
   - Using alcohol-based hand sanitizer
   - Most important way to stop spread
   - Before and after touching patients

2. **Personal Protective Equipment (PPE)**
   - Gloves: For touching body fluids
   - Masks: For respiratory protection
   - Gowns: For contact precautions
   - Eye protection: For splash risk

3. **Cleaning and Disinfection**
   - Cleaning surfaces regularly
   - Using appropriate disinfectants
   - Special attention to high-touch areas
   - Sterilizing medical equipment

4. **Safe Injection Practices**
   - Using new needles for each patient
   - Proper disposal of sharps
   - Never reusing syringes

5. **Respiratory Hygiene**
   - Covering coughs and sneezes
   - Wearing masks when sick
   - Separating ill patients

**Standard Precautions:**
- Use for ALL patients
- Hand hygiene
- Gloves when touching body fluids
- Safe needle practices
- Clean environment

**Why It Matters:**
- Prevents healthcare-associated infections
- Protects patients and healthcare workers
- Reduces antibiotic resistance
- Saves lives and healthcare costs`,
      keyTerms: [
        { term: 'hand hygiene', definition: 'Cleaning hands to remove germs' },
        { term: 'PPE', definition: 'Personal protective equipment like gloves and masks' },
        { term: 'disinfection', definition: 'Killing germs on surfaces' },
        { term: 'standard precautions', definition: 'Safety practices used for all patients' },
      ],
      analogies: [
        'Infection control is like a castle\'s defenses - multiple layers (hand washing, gloves, masks, cleaning) protect against invading germs.',
        'Think of hand hygiene like a seatbelt - simple, effective, and should be automatic every time.',
      ],
      examples: [
        'A nurse washes hands before and after examining each patient.',
        'A hospital room is thoroughly cleaned after a patient with infectious disease leaves.',
        'Doctors wear gloves and gowns when caring for patients with contagious diarrhea.',
      ],
    },
    2: {
      level: 2,
      summary: 'Infection control programs use evidence-based practices including hand hygiene, transmission-based precautions, environmental controls, and surveillance to prevent healthcare-associated infections.',
      explanation: `Healthcare-associated infections (HAIs) are infections that patients acquire during medical care. Infection prevention and control programs systematically implement evidence-based interventions to reduce these preventable infections.

**Transmission Routes:**

1. **Contact Transmission**
   - Direct: Person-to-person contact
   - Indirect: Contaminated surfaces/fomites
   - Most common route in healthcare
   - Examples: MRSA, C. difficile, VRE

2. **Droplet Transmission**
   - Large respiratory droplets (>5 microns)
   - Travel short distances (3-6 feet)
   - Examples: Influenza, pertussis, meningococcus

3. **Airborne Transmission**
   - Small particles (<5 microns) remain suspended
   - Travel long distances
   - Examples: Tuberculosis, measles, chickenpox

4. **Vehicle/Vector Transmission**
   - Contaminated food, water, medications
   - Vector-borne (mosquitoes, ticks)

**Transmission-Based Precautions:**

*Contact Precautions:*
- Gloves and gown
- Dedicated equipment
- Enhanced cleaning
- For: MRSA, VRE, C. difficile, RSV

*Droplet Precautions:*
- Surgical mask within 3 feet
- Patient masking during transport
- Private room or cohorting
- For: Influenza, pertussis, adenovirus

*Airborne Precautions:*
- N95 respirator or higher
- Negative pressure room
- Door closed
- For: TB, measles, varicella, SARS-CoV-2 (aerosol procedures)

*Protective Environment:*
- For severely immunocompromised
- HEPA filtration, positive pressure
- Restricted entry

**Hand Hygiene:**

*WHO 5 Moments:*
1. Before touching a patient
2. Before clean/aseptic procedure
3. After body fluid exposure risk
4. After touching a patient
5. After touching patient surroundings

*Alcohol-Based Hand Rub:*
- Preferred method
- 60-95% alcohol content
- Kills most germs in 20-30 seconds
- Not effective against C. difficile spores or norovirus

*Soap and Water:*
- Required when hands visibly soiled
- After caring for C. difficile patients
- After restroom use
- 40-60 seconds technique`,
      keyTerms: [
        { term: 'HAI', definition: 'Healthcare-associated infection' },
        { term: 'fomite', definition: 'Inanimate object contaminated with infectious agents' },
        { term: 'cohorting', definition: 'Grouping patients with same infection together' },
        { term: 'negative pressure room', definition: 'Room where air flows in and is filtered before exhaust' },
        { term: 'HEPA', definition: 'High-efficiency particulate air filter' },
      ],
      analogies: [
        'Transmission routes are like different delivery methods - contact is like hand delivery, droplet is like short-range missiles, and airborne is like long-range ballistic missiles.',
      ],
      examples: [
        'A patient with TB is placed in a negative pressure room with airborne precautions.',
        'During flu season, patients with respiratory symptoms are placed on droplet precautions.',
        'A patient with C. difficile requires contact precautions and soap-and-water handwashing.',
      ],
    },
    3: {
      level: 3,
      summary: 'Comprehensive infection control integrates surveillance systems, antimicrobial stewardship, device bundles, and outbreak investigation to reduce HAIs including CLABSI, CAUTI, VAP, and surgical site infections.',
      explanation: `Modern infection control programs employ multifaceted approaches including surveillance, process measurement, feedback mechanisms, and evidence-based interventions to prevent specific types of healthcare-associated infections.

**Surveillance Methods:**

*Definitions and Criteria:*
- NHSN (CDC National Healthcare Safety Network) definitions
- Standardized infection ratios (SIR)
- Device-associated rates (per 1000 device-days)
- Risk-adjusted comparisons

*Active Surveillance:*
- Culturing patients on admission
- MRSA, VRE screening
- Allows for contact precautions
- Decolonization protocols

*Process Measures:*
- Hand hygiene compliance
- Central line bundle compliance
- Environmental cleaning audits
- Antibiotic use metrics

**Device-Associated Infection Prevention:**

*Central Line-Associated Bloodstream Infection (CLABSI):*
- Insertion bundle:
  * Hand hygiene
  * Maximal sterile barriers
  * Chlorhexidine skin prep
  * Optimal site selection
  * Daily review of line necessity
- Maintenance bundle
- Antimicrobial-impregnated catheters

*Catheter-Associated UTI (CAUTI):*
- Avoid unnecessary catheters
- Aseptic insertion technique
- Proper maintenance
- Early removal protocols
- Alternatives to indwelling catheters

*Ventilator-Associated Pneumonia (VAP):*
- Head of bed elevated 30-45 degrees
- Daily sedation interruptions
- Daily spontaneous breathing trials
- Peptic ulcer disease prophylaxis
- DVT prophylaxis
- Oral care with chlorhexidine

*Surgical Site Infection (SSI):*
- Preoperative:
  * Hair removal by clippers (not razors)
  * Antibiotic prophylaxis within 60 minutes
  * Skin prep (alcohol-based preferred)
  * Glycemic control
- Perioperative: Normothermia, oxygenation
- Postoperative: Glucose control, sterile dressing changes

**Antimicrobial Stewardship Integration:**
- Restrict broad-spectrum antibiotics
- De-escalation protocols
- C. difficile reduction strategies
- Surgical prophylaxis optimization

**Outbreak Investigation:**

*Steps:*
1. Verify diagnosis and outbreak
2. Case definition and case finding
3. Descriptive epidemiology
4. Hypothesis generation
5. Analytic studies (cohort, case-control)
6. Environmental sampling
7. Intervention and monitoring

*Molecular Epidemiology:*
- PFGE (pulsed-field gel electrophoresis)
- Whole-genome sequencing
- Determining clonality
- Distinguishing outbreak from pseudo-outbreak`,
      keyTerms: [
        { term: 'NHSN', definition: 'National Healthcare Safety Network - CDC surveillance system' },
        { term: 'SIR', definition: 'Standardized infection ratio - observed vs expected infections' },
        { term: 'maximal sterile barrier', definition: 'Cap, mask, sterile gown, sterile gloves, large sterile drape' },
        { term: 'decolonization', definition: 'Removing colonizing bacteria from body surfaces' },
        { term: 'PFGE', definition: 'Pulsed-field gel electrophoresis for bacterial typing' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced infection control addresses emerging pathogens, multidrug-resistant organisms, construction-associated risks, and healthcare worker safety while implementing quality improvement methodologies for sustained HAI reduction.',
      explanation: `Expert infection control practice requires managing complex challenges including emerging infectious diseases, antibiotic resistance, occupational health, and continuous quality improvement.

**Multidrug-Resistant Organisms (MDROs):**

*C. difficile:*
- Spore-forming, alcohol-resistant
- Contact precautions, soap-and-water handwashing
- Environmental disinfection (bleach, sporicidal agents)
- Antibiotic stewardship critical
- Fecal microbiota transplantation for recurrent

*Carbapenem-Resistant Enterobacterales (CRE):*
- Active surveillance on high-risk units
- Contact precautions
- Cohorting patients and staff
- Device restrictions
- Environmental cleaning audits

*Candida auris:*
- Emerging multidrug-resistant fungus
- Colonizes skin and environment
- Contact precautions
- Specialized disinfectants
- Screen contacts

**Emerging Pathogens:**

*Novel Respiratory Viruses:*
- SARS, MERS, SARS-CoV-2
- Airborne/contact precautions
- PPE optimization
- Vaccination programs

*Viral Hemorrhagic Fevers:*
- Ebola, Marburg
- Specialized isolation units
- Trained personnel
- Safe handling of bodily fluids

**Construction and Renovation:**
- Infection control risk assessment (ICRA)
- Dust containment
- Aspergillus prevention (immunocompromised protection)
- Temporary barriers
- Negative pressure construction zones

**Occupational Health:**

*Exposure Management:*
- Bloodborne pathogen exposures
- Post-exposure prophylaxis (HIV, HBV)
- Percutaneous injury prevention
- Safety-engineered devices

*Immunization:*
- Healthcare worker vaccination requirements
- Influenza, hepatitis B, MMR, varicella
- Tdap boosters
- Documentation and declination tracking

*Health Surveillance:*
- TB screening
- Illness surveillance during outbreaks
- Restrictions for infectious personnel

**Quality Improvement:**

*PDSA Cycles:*
- Plan-Do-Study-Act for interventions
- Small tests of change
- Spread of successful interventions

*Human Factors Engineering:*
- Design for safety
- Simplifying processes
- Reducing cognitive load
- Environmental cues

*Behavioral Science:*
- Nudges for hand hygiene
- Social norm feedback
- Leadership engagement
- Just culture for reporting

**Environmental Services:**
- Cleaning and disinfection protocols
- ATP bioluminescence monitoring
- Fluorescent marker audits
- UV-C or hydrogen peroxide vapor for terminal cleaning
- High-touch surface focus`,
      keyTerms: [
        { term: 'MDRO', definition: 'Multidrug-resistant organism' },
        { term: 'ICRA', definition: 'Infection control risk assessment' },
        { term: 'PDSA', definition: 'Plan-Do-Study-Act quality improvement cycle' },
        { term: 'ATP bioluminescence', definition: 'Method to detect organic matter on surfaces' },
        { term: 'terminal cleaning', definition: 'Thorough cleaning after patient discharge' },
      ],
      clinicalNotes: 'Infection control is a team sport requiring engagement from frontline staff, environmental services, pharmacy, laboratory, and leadership. The most successful programs combine surveillance, feedback, education, and accountability. For C. difficile, remember that alcohol hand rub does not kill spores - soap and water is essential.',
    },
    5: {
      level: 5,
      summary: 'Expert infection control encompasses molecular epidemiology, antimicrobial resistance surveillance, healthcare system resilience, pandemic preparedness, and implementation science to achieve sustained elimination of preventable infections.',
      explanation: `Advanced infection control practice integrates cutting-edge diagnostics, systems thinking, and implementation science to address complex healthcare epidemiology challenges.

**Molecular Epidemiology:**

*Whole-Genome Sequencing (WGS):*
- Resolution to single nucleotide level
- Rapid outbreak confirmation
- Distinguish related vs unrelated cases
- Determine direction of transmission
- Identify resistance mechanisms

*Metagenomic Surveillance:*
- Unbiased pathogen detection
- Environmental monitoring
- Early outbreak detection
- Unknown pathogen identification

**Antimicrobial Resistance Surveillance:**

*Global Networks:*
- WHO GLASS (Global Antimicrobial Resistance Surveillance System)
- CDC AR Lab Network
- EARS-Net (Europe)
- National action plans

*Resistance Mechanism Tracking:*
- Carbapenemase genes (blaKPC, blaNDM, blaVIM, blaOXA-48)
- mcr genes (colistin resistance)
- van genes (vancomycin resistance)
- mecA/mecC (methicillin resistance)

**Healthcare System Resilience:**

*Surge Capacity:*
- PPE stockpiling strategies
- Staffing models
- Alternate care sites
- Resource allocation frameworks

*Business Continuity:*
- Critical function identification
- Cross-training
- Supply chain resilience
- Emergency operations plans

**Pandemic Preparedness:**

*Surveillance:*
- Syndromic surveillance
- Wastewater surveillance
- International cooperation
- One Health approach

*Response:*
- Incident command systems
- Crisis standards of care
- Vaccine deployment
- Communication strategies

**Implementation Science:**

*Frameworks:*
- RE-AIM (Reach, Effectiveness, Adoption, Implementation, Maintenance)
- CFIR (Consolidated Framework for Implementation Research)
- PARIHS (Promoting Action on Research Implementation in Health Services)

*Strategies:*
- Audit and feedback
- Reminders and checklists
- Opinion leader engagement
- Academic detailing
- Financial incentives

**Research Priorities:**

*Environmental Contamination:*
- Role in transmission
- Optimal disinfection methods
- Novel technologies (antimicrobial surfaces)

*Microbiome:*
- Impact of healthcare exposures
- Probiotic and fecal transplant interventions
- Restoration strategies

*Diagnostic Stewardship:*
- Appropriate testing
- Rapid diagnostics impact
- Antimicrobial resistance detection

**Global Health Equity:**
- HAI burden in low-resource settings
- Affordable interventions
- Capacity building
- International standards adaptation`,
      keyTerms: [
        { term: 'WGS', definition: 'Whole-genome sequencing' },
        { term: 'GLASS', definition: 'WHO Global Antimicrobial Resistance Surveillance System' },
        { term: 'RE-AIM', definition: 'Framework for evaluating implementation' },
        { term: 'One Health', definition: 'Integrated approach to human, animal, and environmental health' },
        { term: 'crisis standards of care', definition: 'Guidelines for allocating scarce resources during disasters' },
      ],
      clinicalNotes: 'The future of infection control lies in precision epidemiology using whole-genome sequencing, environmental microbiome characterization, and predictive analytics for outbreak detection. Implementation science is critical to translate evidence into practice. Global collaboration is essential for addressing antimicrobial resistance and pandemic threats.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['infectious'],
    topics: ['infection-control', 'patient-safety', 'prevention'],
    keywords: ['hand hygiene', 'PPE', 'HAI', 'CLABSI', 'CAUTI', 'surveillance'],
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default infectionControl;
