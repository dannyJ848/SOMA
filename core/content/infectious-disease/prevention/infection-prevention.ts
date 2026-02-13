import { EducationalContent } from '../../types';

export const INFECTION_PREVENTION: EducationalContent = {
  id: 'infectious-disease-infection-prevention',
  type: 'concept',
  name: 'Infection Prevention',
  alternateNames: ['Infection Control', 'Infection Prevention and Control', 'IPC'],
  levels: {
    1: {
      level: 1,
      summary: 'Infection prevention means stopping germs from spreading and making people sick.',
      explanation: `Germs are tiny living things that can make us sick. They're so small we can't see them without special tools. Infection prevention is all about stopping these germs from spreading from one person to another or from surfaces to people.

Think of germs like invisible paint that can get on your hands when you touch things. If you then touch your face, the "paint" gets in your body. Washing hands is like using soap to remove the paint before it can get inside you.

There are several ways germs spread:
- **Through the air** - when someone coughs or sneezes
- **By touching** - when you touch something with germs and then touch your face
- **Through food and water** - eating or drinking something contaminated
- **Through cuts** - germs entering through broken skin

The good news is that simple actions can stop most germs from spreading. Washing hands, covering coughs, staying home when sick, and keeping things clean all help prevent infections.`,
      keyTerms: [
        { term: 'Germs', definition: 'Tiny living things that can make you sick, like bacteria and viruses' },
        { term: 'Infection', definition: 'When germs get inside your body and multiply, making you sick' },
        { term: 'Contaminated', definition: 'Something that has germs on it' },
        { term: 'Hygiene', definition: 'Practices that keep you clean and healthy, like hand washing' },
      ],
    },
    2: {
      level: 2,
      summary: 'Infection prevention encompasses strategies and practices designed to reduce the transmission of infectious agents between individuals and from the environment.',
      explanation: `Infection prevention and control (IPC) involves understanding how pathogens spread and implementing measures to break the chain of infection. This chain includes the infectious agent, reservoir, portal of exit, mode of transmission, portal of entry, and susceptible host.

**The Chain of Infection:**
1. **Infectious Agent** - The pathogen (bacteria, virus, fungus, or parasite)
2. **Reservoir** - Where the pathogen lives (humans, animals, environment)
3. **Portal of Exit** - How it leaves (respiratory secretions, blood, feces)
4. **Mode of Transmission** - How it travels (airborne, droplet, contact, vector)
5. **Portal of Entry** - How it enters a new host (respiratory tract, breaks in skin)
6. **Susceptible Host** - Someone whose immune system can't fight off the infection

**Standard Precautions:**
These are basic infection prevention practices used with all patients:
- Hand hygiene before and after patient contact
- Use of personal protective equipment (PPE) when needed
- Respiratory hygiene and cough etiquette
- Safe injection practices
- Proper handling of contaminated equipment

**Transmission-Based Precautions:**
Additional measures for patients with known or suspected infections:
- **Contact precautions** - for infections spread by touching
- **Droplet precautions** - for infections spread by large droplets
- **Airborne precautions** - for infections spread by small particles that float in air`,
      keyTerms: [
        { term: 'Pathogen', definition: 'A microorganism that causes disease' },
        { term: 'Transmission', definition: 'The spread of pathogens from one person or surface to another' },
        { term: 'PPE', definition: 'Personal Protective Equipment - items like gloves, masks, and gowns that protect against infection' },
        { term: 'Reservoir', definition: 'The habitat where an infectious agent normally lives, grows, and multiplies' },
        { term: 'Vector', definition: 'An organism (like a mosquito or tick) that transmits a pathogen from one host to another' },
      ],
    },
    3: {
      level: 3,
      summary: 'Infection prevention and control utilizes epidemiological principles, microbiology knowledge, and evidence-based interventions to reduce healthcare-associated infections and community disease transmission.',
      explanation: `Infection prevention and control (IPC) is a scientific discipline that applies evidence-based practices to prevent transmission of infectious diseases. It integrates knowledge from epidemiology, microbiology, immunology, and behavioral science.

**Epidemiological Framework:**
The basic reproduction number (R₀) represents the average number of secondary infections caused by one infected individual in a fully susceptible population. IPC measures aim to reduce the effective reproduction number (Rₑ) below 1, at which point the infection cannot sustain transmission.

**Hierarchy of Controls:**
1. **Elimination** - Remove the hazard entirely
2. **Substitution** - Replace hazardous practices with safer alternatives
3. **Engineering Controls** - Physical modifications (ventilation, isolation rooms)
4. **Administrative Controls** - Policies and procedures (screening, cohorting)
5. **PPE** - Last line of defense for healthcare workers

**Healthcare-Associated Infections (HAIs):**
These infections acquired during healthcare delivery are largely preventable:
- Central line-associated bloodstream infections (CLABSIs)
- Catheter-associated urinary tract infections (CAUTIs)
- Surgical site infections (SSIs)
- Ventilator-associated pneumonia (VAP)
- *Clostridioides difficile* infections

**Bundle Approaches:**
Evidence-based bundles combine multiple interventions for synergistic effect:
- Central line insertion bundles
- Ventilator bundles
- Surgical safety checklists

**Surveillance:**
Systematic collection and analysis of infection data enables:
- Identification of outbreaks
- Tracking of endemic rates
- Evaluation of intervention effectiveness
- Benchmarking against national standards`,
      keyTerms: [
        { term: 'R₀ (Basic Reproduction Number)', definition: 'The average number of secondary cases produced by a single infection in a completely susceptible population' },
        { term: 'Healthcare-Associated Infection (HAI)', definition: 'An infection acquired during the delivery of healthcare services that was not present at admission' },
        { term: 'Endemic', definition: 'The constant presence or usual prevalence of a disease in a population' },
        { term: 'Outbreak', definition: 'The occurrence of disease cases in excess of what would normally be expected' },
        { term: 'Bundle', definition: 'A structured set of evidence-based interventions that, when implemented together, improve outcomes' },
      ],
    },
    4: {
      level: 4,
      summary: 'Infection prevention integrates molecular epidemiology, antimicrobial stewardship, and systems-based approaches to address the complex interplay between pathogens, hosts, environments, and healthcare delivery systems.',
      explanation: `Advanced infection prevention requires understanding the molecular basis of pathogen virulence, transmission dynamics, and the systems-level factors that influence infection risk.

**Molecular Epidemiology:**
Whole genome sequencing (WGS) and other molecular techniques enable:
- Identification of transmission networks and outbreak sources
- Detection of emerging resistance mechanisms
- Strain typing for epidemiological investigations
- Tracking of pathogen evolution in real-time

**Biofilm Formation and Device-Related Infections:**
Biofilms are structured communities of microorganisms encased in extracellular polymeric substances (EPS). They:
- Form on medical devices (catheters, prosthetics, endotracheal tubes)
- Exhibit 100-1000x increased antimicrobial resistance
- Require removal of the colonized device for definitive treatment
- Can be disrupted by novel approaches (bacteriophages, quorum sensing inhibitors)

**Host Factors and Immunocompromise:**
Risk stratification considers:
- Neutropenia and chemotherapy-induced immunosuppression
- Solid organ and hematopoietic stem cell transplantation
- HIV/AIDS and CD4 counts
- Biologic immunomodulators (TNF inhibitors, IL-6 inhibitors)
- Primary immunodeficiencies

**Environmental Reservoirs:**
Water systems, surfaces, and air can harbor pathogens:
- *Legionella* in hospital water systems
- *Aspergillus* during construction/renovation
- Multidrug-resistant organisms on high-touch surfaces
- Environmental cleaning and disinfection protocols

**Antimicrobial Stewardship Integration:**
IPC and stewardship share the goal of reducing antimicrobial resistance through:
- Judicious antibiotic prescribing
- Optimizing dosing strategies
- De-escalation based on culture results
- Tracking and reporting antimicrobial use metrics

**Human Factors and Implementation Science:**
Successful IPC requires understanding:
- Behavioral economics and nudge theory
- Change management frameworks
- Just culture vs. blame culture
- Measurement and feedback systems`,
      keyTerms: [
        { term: 'Whole Genome Sequencing', definition: 'A laboratory technique that determines the complete DNA sequence of an organism\'s genome, enabling precise identification and tracking of pathogens' },
        { term: 'Biofilm', definition: 'A structured community of microorganisms attached to a surface and enclosed in a self-produced extracellular matrix' },
        { term: 'Quorum Sensing', definition: 'Cell-to-cell communication in bacteria that regulates gene expression based on population density' },
        { term: 'Implementation Science', definition: 'The study of methods to promote the integration of research findings and evidence-based practices into healthcare' },
        { term: 'Just Culture', definition: 'An organizational approach that balances accountability with learning from errors without inappropriate blame' },
      ],
      clinicalNotes: 'Infection preventionists play a crucial role in hospitals, working with clinical teams to implement evidence-based practices. Successful IPC programs require executive leadership support, adequate resources, and a culture that prioritizes safety. Real-time surveillance systems and rapid response to clusters are essential for outbreak management.',
    },
    5: {
      level: 5,
      summary: 'Contemporary infection prevention practice integrates genomic surveillance, antimicrobial pharmacokinetics/pharmacodynamics, environmental engineering, and implementation science within healthcare systems to optimize patient safety and population health outcomes.',
      explanation: `Expert-level infection prevention encompasses leadership in healthcare epidemiology, regulatory compliance, quality improvement, and the translation of emerging evidence into practice.

**Advanced Surveillance Methodologies:**
- Real-time whole genome sequencing for outbreak investigation and transmission mapping
- Machine learning algorithms for early outbreak detection
- Syndromic surveillance integration with public health systems
- Network analysis to identify super-spreaders and transmission hubs
- Wastewater surveillance for population-level pathogen detection

**Regulatory and Accreditation Framework:**
- CMS Conditions of Participation and Hospital-Acquired Condition Reduction Program
- The Joint Commission infection prevention standards
- State health department reporting requirements
- CDC National Healthcare Safety Network (NHSN) metrics
- Value-based purchasing implications of HAI rates

**Advanced Environmental Control:**
- UV-C disinfection systems and their limitations
- Hydrogen peroxide vapor and other no-touch decontamination
- Copper-impregnated surfaces and antimicrobial materials
- HVAC optimization including HEPA filtration and pressure differentials
- Water management programs for Legionella prevention

**Outbreak Investigation Protocol:**
1. Verify the diagnosis and confirm the outbreak
2. Define case definition and identify cases
3. Describe cases by person, place, and time (epidemic curve)
4. Generate and test hypotheses
5. Implement control measures
6. Communicate findings to stakeholders
7. Evaluate effectiveness and document lessons learned

**Emerging Challenges:**
- Carbapenem-resistant Enterobacterales (CRE) and pan-resistant organisms
- *Candida auris* with environmental persistence and multidrug resistance
- Novel respiratory pathogens and pandemic preparedness
- Climate change impacts on vector-borne and waterborne diseases
- Healthcare worker safety during high-consequence pathogen events

**Cost-Effectiveness and Economic Analysis:**
- HAI-attributable costs: $28,000-$45,000 per CLABSI, $10,000-$25,000 per SSI
- Return on investment calculations for IPC programs
- Business case development for prevention resources
- Bundled payments and HAI financial penalties

**Research Frontiers:**
- Microbiome manipulation to prevent colonization with resistant organisms
- Monoclonal antibodies for passive immunoprophylaxis
- Decolonization strategies for high-risk patients
- Novel antiseptic agents and antimicrobial surfaces`,
      keyTerms: [
        { term: 'NHSN', definition: 'National Healthcare Safety Network - CDC\'s surveillance system for tracking HAIs and related metrics' },
        { term: 'CRE', definition: 'Carbapenem-resistant Enterobacterales - Gram-negative bacteria resistant to carbapenem antibiotics, representing an urgent public health threat' },
        { term: 'Epidemic Curve', definition: 'A graphical representation of the number of cases over time, used to characterize outbreak patterns and transmission dynamics' },
        { term: 'Attributable Mortality', definition: 'The proportion of deaths that can be directly attributed to a specific cause, such as an HAI' },
        { term: 'Standardized Infection Ratio (SIR)', definition: 'A summary statistic comparing observed HAIs to predicted HAIs based on national baseline data, adjusted for risk factors' },
      ],
      clinicalNotes: 'Healthcare epidemiologists must balance infection prevention imperatives with operational realities, patient experience, and resource constraints. Building coalitions across medicine, nursing, administration, and environmental services is essential. Participation in national collaboratives and benchmarking initiatives drives continuous improvement. The COVID-19 pandemic underscored the need for robust surge capacity planning and flexible IPC protocols.',
    },
  },
  media: [],
  citations: [
    {
      id: 'cdc-guidelines-2019',
      type: 'website',
      title: 'Guidelines for Isolation Precautions: Preventing Transmission of Infectious Agents in Healthcare Settings',
      authors: ['Siegel JD', 'Rhinehart E', 'Jackson M', 'Chiarello L'],
      source: 'Centers for Disease Control and Prevention',
      license: 'Copyrighted',
    },
    {
      id: 'shea-compendium-2023',
      type: 'article',
      title: 'Compendium of Strategies to Prevent Healthcare-Associated Infections',
      authors: ['Society for Healthcare Epidemiology of America'],
      source: 'Infection Control & Hospital Epidemiology',
      license: 'Copyrighted',
    },
  ],
  crossReferences: [
    { targetId: 'infectious-disease-hand-hygiene', targetType: 'concept', relationship: 'child', label: 'Hand Hygiene' },
    { targetId: 'infectious-disease-antibiotic-resistance', targetType: 'concept', relationship: 'related', label: 'Antibiotic Resistance' },
  ],
  tags: {
    systems: ['infectious-disease'],
    topics: ['prevention', 'public-health', 'healthcare-epidemiology'],
    keywords: ['infection control', 'HAI', 'standard precautions', 'transmission', 'outbreak'],
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
