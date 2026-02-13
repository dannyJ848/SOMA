/**
 * Construction Worker Safety - Comprehensive Educational Content
 *
 * Covers the major hazards in construction (OSHA Focus Four),
 * safety regulations, personal protective equipment, and injury
 * prevention strategies for one of the most dangerous industries.
 */

import { EducationalContent } from '../types';

export const constructionWorkerSafetyContent: EducationalContent = {
  id: 'topic-construction-worker-safety',
  type: 'topic',
  name: 'Construction Worker Safety',
  nameEs: 'Seguridad para Trabajadores de Construccion',
  alternateNames: ['Construction Industry Safety', 'Building Trade Safety'],

  levels: {
    1: {
      level: 1,
      summary: 'Construction is one of the most dangerous jobs. Workers can be hurt by falls, heavy objects, electrical hazards, and getting caught in machinery.',
      explanation: `Construction workers build the houses, schools, roads, and buildings we use every day. But construction sites have many dangers that can cause serious injuries or even death.

**The "Fatal Four" - The four most common ways construction workers die on the job:**

1. **Falls**: Falling from roofs, ladders, scaffolds, or other high places is the number one killer in construction. Imagine climbing a ladder without holding on - that is what it is like working at height without fall protection.

2. **Struck by objects**: Being hit by falling tools, materials, or moving vehicles. A hammer dropped from the third floor can be as dangerous as a bullet.

3. **Electrocution**: Touching power lines or using faulty electrical equipment. Electricity travels through the body to the ground, and it does not take much to stop your heart.

4. **Caught in or between**: Getting trapped in machinery, between heavy objects, or in collapsing trenches. A trench cave-in can bury a worker in seconds.

**How to stay safe on a construction site:**

- **Always wear your hard hat, safety glasses, and steel-toe boots**
- **Use fall protection**: Harnesses, guardrails, and safety nets when working above 6 feet
- **Look up and around**: Watch for overhead hazards and moving equipment
- **Stay away from power lines**: Keep at least 10 feet away from overhead electrical lines
- **Never enter an unprotected trench**: Trenches deeper than 5 feet need shoring or sloping

**Your rights as a worker:**
- You have the right to a safe workplace
- You can refuse dangerous work without being fired
- Your employer must provide safety training and equipment at no cost to you
- You can file a complaint with OSHA if your workplace is unsafe`,
      keyTerms: [
        { term: 'Fatal Four', definition: 'The four leading causes of death in construction: falls, struck-by objects, electrocution, and caught-in/between hazards' },
        { term: 'fall protection', definition: 'Equipment like harnesses, guardrails, and safety nets that prevent workers from falling or stop them if they do fall' },
        { term: 'hard hat', definition: 'A strong helmet that protects your head from falling objects and bumping into things on a construction site' },
        { term: 'PPE', definition: 'Personal Protective Equipment - gear like hard hats, safety glasses, gloves, and boots that protect you from hazards' },
        { term: 'OSHA', definition: 'The government agency (Occupational Safety and Health Administration) that makes rules to keep workers safe' },
      ],
      analogies: [
        'A construction site without safety rules is like a football game without helmets and pads - the dangers are everywhere, and protection is essential.',
        'Fall protection is like a seatbelt - you might think you do not need it until the one time you do, and then it saves your life.',
      ],
      patientCounselingPoints: [
        'Always wear ALL your safety equipment, even on hot days or when a job seems quick and easy - most accidents happen when people skip safety steps.',
        'If you see something unsafe on the jobsite, report it to your supervisor immediately - you could save a life.',
        'Falls are the number one killer in construction - never work at heights above 6 feet without fall protection.',
        'Your employer must provide all safety equipment for free - you should never have to buy your own hard hat or harness.',
        'You have the right to OSHA training in a language you understand. If you did not receive training, ask for it.',
      ],
    },
    2: {
      level: 2,
      summary: 'Construction is among the most hazardous industries, with OSHA\'s Focus Four hazards (falls, struck-by, electrocution, caught-in/between) accounting for over 60% of fatalities. Comprehensive safety programs include hazard recognition, PPE, training, and regulatory compliance.',
      explanation: `## Construction Safety Overview

### Industry Statistics
- Construction accounts for approximately 20% of all workplace fatalities in the US
- Over 1,000 construction workers die on the job each year
- The Focus Four hazards cause over 60% of these deaths
- Small employers (fewer than 20 workers) have disproportionately higher fatality rates

### The OSHA Focus Four

**1. Falls (33% of construction deaths)**
- Falls from roofs, scaffolds, ladders, and structural steel
- OSHA requires fall protection at 6 feet in construction (10 feet in general industry)
- Three types of fall protection systems:
  - Guardrail systems
  - Safety net systems
  - Personal fall arrest systems (harnesses)

**2. Struck-By (11% of construction deaths)**
- Struck by falling objects (tools, materials)
- Struck by vehicles (backhoes, dump trucks)
- Struck by flying/swinging objects
- Prevention: Hard hats, high-visibility vests, barricades, secured tools

**3. Electrocution (8% of construction deaths)**
- Contact with overhead power lines
- Contact with live circuits in buildings under construction
- Faulty equipment or damaged cords
- Prevention: Lockout/tagout, GFCI protection, safe distances from power lines

**4. Caught-In/Between (6% of construction deaths)**
- Trench collapse/cave-in
- Caught in running machinery
- Compressed between objects (pinch points)
- Prevention: Trench shoring/sloping, machine guarding, safe work practices

### Key OSHA Construction Standards (29 CFR 1926)

| Standard | Requirement |
|----------|-------------|
| Subpart C | General Safety and Health Provisions |
| Subpart E | PPE and Lifesaving Equipment |
| Subpart L | Scaffolds (capacity, guardrails, access) |
| Subpart M | Fall Protection (6-foot trigger, systems) |
| Subpart O | Motor Vehicles and Mechanized Equipment |
| Subpart P | Excavations (soil classification, protective systems) |
| Subpart X | Stairways and Ladders |

### Required Safety Training

**OSHA 10-Hour Construction Safety Course:**
- Required by many states and employers
- Covers hazard recognition, workers' rights, employer responsibilities
- Focus Four hazards in detail
- Available in English and Spanish

**OSHA 30-Hour Construction Safety Course:**
- More in-depth coverage for supervisors and safety professionals
- Site-specific hazard analysis
- Safety program development

### Health Hazards in Construction

Beyond traumatic injuries, construction workers face:
- **Silica dust**: Cutting concrete, masonry, rock (causes silicosis)
- **Asbestos**: Renovation and demolition of older buildings
- **Lead**: Paint removal in pre-1978 buildings
- **Noise**: Power tools, heavy equipment (hearing loss)
- **Heat stress**: Outdoor work in summer months
- **Musculoskeletal disorders**: Heavy lifting, repetitive motions`,
      keyTerms: [
        { term: 'Focus Four', definition: 'The four leading causes of fatalities in construction as identified by OSHA: falls, struck-by, electrocution, and caught-in/between' },
        { term: 'personal fall arrest system', definition: 'A harness-based system connected to an anchor point that stops a worker who falls from an elevated position' },
        { term: 'lockout/tagout (LOTO)', definition: 'A safety procedure that ensures dangerous machinery is properly shut off and cannot be restarted before maintenance or repair work is completed' },
        { term: 'GFCI', definition: 'Ground Fault Circuit Interrupter; an electrical device that quickly shuts off power if it detects current flowing through an unintended path, like through a person' },
        { term: 'competent person', definition: 'An OSHA-defined term for a worker who can identify hazards and has authority to take corrective action, required for scaffold erection, excavation, and other high-hazard tasks' },
        { term: 'trench protective system', definition: 'Shoring, shielding, or sloping methods required to prevent cave-in when workers enter excavations deeper than 5 feet' },
      ],
      patientCounselingPoints: [
        'Ask about OSHA 10-hour training if your employer has not provided it - many states require it for construction workers.',
        'If you work near silica dust (cutting concrete or brick), you must have respiratory protection - silicosis is permanent lung damage.',
        'Construction work puts heavy stress on your back and joints - learn proper lifting techniques and report pain early.',
        'Hearing loss from power tools and equipment is permanent - always wear hearing protection.',
      ],
    },
    3: {
      level: 3,
      summary: 'Construction occupational health encompasses acute traumatic injury prevention through engineering and administrative controls, chronic disease surveillance for silica, asbestos, lead, and noise exposures, ergonomic interventions for musculoskeletal disorders, and multi-employer worksite safety coordination under OSHA construction standards.',
      explanation: `## Construction Health and Safety: Detailed Analysis

### Fall Prevention Engineering

**Hierarchy of Fall Protection:**
1. **Elimination**: Design to eliminate work at heights (prefabrication at ground level)
2. **Passive fall protection**: Guardrails, covers, nets (no worker action needed)
3. **Fall restraint**: Tethered system preventing worker from reaching edge
4. **Fall arrest**: Harness system that catches worker after fall begins
5. **Administrative controls**: Warning lines, controlled access zones

**Personal Fall Arrest System Components:**
- Full body harness (ANSI Z359.11): Distributes arrest forces
- Connecting device: Shock-absorbing lanyard or self-retracting lifeline (SRL)
- Anchorage: Must support 5,000 lbs per worker (or 2x arrest force with engineered system)
- Maximum free fall distance: 6 feet
- Total fall distance calculation: Free fall + deceleration + harness stretch + safety factor

**Scaffold Safety (29 CFR 1926.451-454):**
- Designed by qualified person; erected by competent person
- Load capacity: 4x intended maximum load
- Guardrails: Top rail (38-45 inches), midrail, toeboard
- Access: Ladders, stair towers, or ramps (no climbing on cross-braces)
- Inspection required before each work shift

### Chemical Health Hazards

**Respirable Crystalline Silica (29 CFR 1926.1153):**
- Activities generating silica dust: Concrete cutting, grinding, drilling, tuck-pointing
- OSHA PEL: 50 μg/m³ (8-hour TWA) respirable fraction
- Table 1 compliance: Specified engineering controls by task (e.g., wet cutting, local exhaust)
- Medical surveillance: Every 3 years for workers above action level for 30+ days/year
- Includes chest X-ray, pulmonary function testing, TB screening

**Lead in Construction (29 CFR 1926.62):**
- Sources: Lead paint removal, structural steel welding/cutting, bridge maintenance
- Action level: 30 μg/m³ (8-hour TWA)
- PEL: 50 μg/m³ (8-hour TWA)
- BLL monitoring: Initial and every 2 months until two consecutive below 40 μg/dL
- Medical removal: BLL ≥ 50 μg/dL (with MRP at average of previous earnings)

**Asbestos in Construction (29 CFR 1926.1101):**
- Presumed asbestos-containing material (PACM) in buildings pre-1981
- Four classes of asbestos work (Class I most hazardous - removal of TSI)
- Competent person required for all asbestos work
- PEL: 0.1 f/cc (8-hour TWA)

### Noise Exposure

- OSHA PEL: 90 dBA (8-hour TWA) with 5 dB exchange rate
- NIOSH REL: 85 dBA (8-hour TWA) with 3 dB exchange rate
- Common construction noise levels:
  - Jackhammer: 100-110 dBA
  - Circular saw: 100-105 dBA
  - Chipping hammer: 103-113 dBA
- Hearing conservation program: Audiometric testing, hearing protection, training

### Multi-Employer Worksite Doctrine

**OSHA's Multi-Employer Citation Policy:**
- **Creating employer**: Caused the hazard
- **Exposing employer**: Workers exposed to the hazard
- **Correcting employer**: Responsible for correcting the hazard
- **Controlling employer**: General oversight of the worksite

Each employer type has different obligations and can be cited independently. A general contractor as controlling employer can be cited for subcontractor hazards they should have detected and corrected.

### Ergonomic Hazards in Construction

**Risk Factors by Trade:**
- Laborers: Heavy lifting, carrying, pushing/pulling
- Ironworkers: Overhead work, awkward postures
- Bricklayers: Repetitive bending, heavy lifting
- Electricians: Overhead reaching, kneeling, gripping
- Plumbers: Confined spaces, awkward postures

**Intervention Strategies:**
- Material handling equipment (hoists, conveyors, carts)
- Adjustable work platforms to optimize working height
- Ergonomic hand tool design (bent-handle, powered)
- Task rotation and job enlargement
- Prefabrication to reduce on-site awkward postures`,
      keyTerms: [
        { term: 'total fall distance', definition: 'The sum of free fall distance, deceleration distance, harness stretch, and safety factor that must be calculated to ensure a falling worker does not contact a lower level' },
        { term: 'competent person', definition: 'A worker designated by the employer who is capable of identifying existing and predictable hazards and has authorization to take prompt corrective measures (OSHA-defined role required for excavation, scaffold, and other high-hazard operations)' },
        { term: 'Table 1 (silica)', definition: 'A compliance pathway in the OSHA silica standard that specifies engineering controls and work practices for common construction tasks, allowing compliance without exposure monitoring' },
        { term: 'multi-employer citation policy', definition: 'OSHA enforcement policy that allows citation of creating, exposing, correcting, and controlling employers on multi-employer worksites, even if their own employees are not directly exposed' },
        { term: 'PACM', definition: 'Presumed Asbestos-Containing Material; thermal system insulation and surfacing material in pre-1981 buildings that must be treated as asbestos-containing unless testing proves otherwise' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced construction occupational medicine requires integration of exposure reconstruction for latency-period diseases, complex return-to-work assessment following traumatic injury, fitness-for-duty evaluation in safety-sensitive roles, and the design of comprehensive health surveillance programs addressing both acute and chronic construction health hazards.',
      explanation: `## Advanced Clinical Topics in Construction Medicine

### Exposure Reconstruction for Latency-Period Diseases

**Asbestos-Related Disease in Construction Workers:**
- Latency: 15-40 years for asbestosis; 20-50 years for mesothelioma
- Historical exposure reconstruction requires detailed work history:
  - Specific trades and job tasks by decade
  - Building types and approximate construction dates
  - Products used (insulation brands, joint compounds, roofing materials)
- OSHA asbestos exposure databases and industrial hygiene literature
- Fiber type and exposure magnitude estimation for causation analysis
- B-reader certified CXR interpretation for medicolegal cases

**Silicosis in Construction:**
- Accelerated silicosis emerging in engineered stone countertop fabricators
- Latency as short as 5-10 years with high-intensity exposure
- HRCT findings: Upper lobe predominant nodules, progressive massive fibrosis
- Must differentiate from sarcoidosis, tuberculosis, fungal infection

**Construction Worker Cancer Clusters:**
- Elevated risk for mesothelioma, lung cancer (asbestos, silica)
- Bladder cancer (aromatic amines in coal tar products)
- Skin cancer (UV exposure in outdoor trades)
- Non-Hodgkin lymphoma (solvent exposure)
- Nasal and sinus cancer (wood dust in carpentry)

### Traumatic Injury Management and Return-to-Work

**Common Severe Construction Injuries:**
- Falls from elevation: Vertebral fractures, TBI, pelvic fractures, heel fractures
- Crush injuries: Compartment syndrome, traumatic rhabdomyolysis
- Trench collapse: Asphyxiation, crush syndrome
- Electrical injuries: Cardiac arrhythmias, deep tissue burns, neurological sequelae

**Return-to-Work Considerations:**
- Physical demands analysis specific to construction trade
- Functional capacity evaluation matched to essential job functions
- Modified duty programs (often limited in construction due to work nature)
- Cognitive assessment after TBI (judgment, spatial awareness critical for safety)
- Vestibular/balance testing after fall injuries (work at heights)
- Psychological readiness (PTSD common after construction accidents)

### Fitness-for-Duty in Safety-Sensitive Roles

**Assessment for Work at Heights:**
- Balance and proprioception testing
- Visual acuity and depth perception
- Cardiac risk assessment (risk of sudden incapacitation)
- Medication review (sedating medications, orthostatic hypotension)
- Seizure disorder evaluation (seizure-free interval requirements)
- Substance use screening

**Assessment for Heavy Equipment Operation:**
- Visual acuity, peripheral vision, depth perception
- Hearing assessment (backup alarm detection)
- Cognitive function (reaction time, attention)
- Musculoskeletal assessment (range of motion for equipment operation)
- DOT physical examination requirements for CMV operators

**Assessment for Confined Space Entry:**
- Respiratory fitness (spirometry baseline)
- Cardiovascular assessment (ability to wear SCBA)
- Claustrophobia screening
- Body habitus (ability to enter/exit through limited openings)
- Emergency egress capability

### Comprehensive Health Surveillance Program

**Program Design for Construction Companies:**

1. **Pre-placement evaluation:**
   - Baseline physical examination
   - Audiometric baseline
   - Spirometry baseline
   - Blood lead level baseline (for lead-exposed trades)
   - Drug screening per company policy
   - Functional capacity matched to job demands

2. **Periodic surveillance:**
   - Annual audiometry (noise-exposed workers)
   - Spirometry per silica/asbestos standard schedules
   - Blood lead levels per lead standard schedule
   - Chest X-ray per asbestos/silica standards
   - Respiratory fit testing (annual)

3. **Exposure-specific monitoring:**
   - Silica medical surveillance per 29 CFR 1926.1153
   - Lead medical surveillance per 29 CFR 1926.62
   - Asbestos medical surveillance per 29 CFR 1926.1101
   - Cadmium surveillance for welders per 29 CFR 1926.1127

4. **Post-incident evaluation:**
   - Post-accident fitness-for-duty
   - Return-to-work clearance
   - Reasonable suspicion drug/alcohol testing`,
      keyTerms: [
        { term: 'exposure reconstruction', definition: 'The retrospective estimation of a worker\'s historical exposure to hazardous agents (asbestos, silica, lead) based on detailed job history, industrial hygiene data, and analogous exposure databases for causation analysis in latency-period diseases' },
        { term: 'B-reader certification', definition: 'NIOSH certification for physicians demonstrating proficiency in classifying chest radiographs for pneumoconioses using the ILO International Classification, required for medicolegal interpretation of occupational lung disease films' },
        { term: 'physical demands analysis', definition: 'A systematic assessment of the physical requirements of a specific job including lifting, carrying, pushing, pulling, reaching, climbing, and environmental conditions used for fitness-for-duty and return-to-work determination' },
        { term: 'competent person (clinical context)', definition: 'Beyond the OSHA regulatory definition, the clinical assessment that a worker possesses the cognitive, physical, and psychological capacity to safely perform safety-critical tasks in construction' },
        { term: 'accelerated silicosis', definition: 'Silicosis developing within 5-10 years of high-intensity silica exposure, distinct from chronic silicosis (10-30 years) and acute silicosis (weeks-months), increasingly seen in engineered stone fabrication workers' },
        { term: 'crush syndrome', definition: 'A systemic condition resulting from prolonged compression of muscle tissue causing rhabdomyolysis, hyperkalemia, metabolic acidosis, and acute kidney injury upon release of the compressive force' },
      ],
      clinicalNotes: `Key clinical considerations:

1. **Construction worker exposure history**: Unlike factory workers with fixed workstations, construction workers change jobsites frequently, making exposure reconstruction challenging. Obtain detailed work history organized by employer, trade, and decade. Trade-specific exposure profiles (e.g., insulators had heaviest asbestos exposure; concrete workers have highest silica risk) guide clinical investigation.

2. **Return-to-work complexity**: Construction lacks the light-duty options available in manufacturing or office settings. Modified duty programs require creative approaches - tool crib assignment, safety observation roles, or training duties. Prolonged absence from the trade significantly reduces likelihood of successful return.

3. **Fall from elevation evaluation**: After any fall, even with full arrest engagement, evaluate for suspension trauma (harness-induced pathology), occult spinal fractures, and psychological impact. Workers with harness-arrested falls may develop a post-traumatic reluctance to work at heights that requires psychological support.

4. **Silica standard compliance**: The 2016 OSHA silica standard requires medical surveillance for workers exposed above 25 μg/m³ for 30+ days per year. The examining physician must provide both a written medical report to the employer (limited to fitness determination) and a comprehensive medical opinion to the worker. Know the distinction.

5. **Multi-substance exposure**: Construction workers are commonly exposed to multiple regulated substances simultaneously (silica + lead + asbestos + noise). Medical surveillance programs must address each exposure independently with appropriate periodicity and testing.`,
    },
    5: {
      level: 5,
      summary: 'State-of-the-art construction safety science integrates Building Information Modeling for hazard pre-identification, wearable sensor technology for real-time safety monitoring, advanced materials science for PPE innovation, and predictive analytics for injury prevention in an industry undergoing rapid technological transformation.',
      explanation: `## Emerging Technologies and Innovations in Construction Safety

### Digital Construction Safety

**Building Information Modeling (BIM) for Safety:**
- 4D BIM integration: Time-sequenced construction models identifying phase-specific hazards
- Automated fall protection planning based on structural geometry
- Virtual hazard identification before construction begins
- Clash detection identifying confined space and struck-by risks
- Integration with safety planning software for real-time risk assessment

**Wearable Safety Technology:**
- Smart hard hats: Impact detection, fatigue monitoring, proximity alerts
- IMU (inertial measurement unit) sensors: Fall detection, slip prediction, posture monitoring
- Environmental sensors: Heat stress (core temperature estimation from skin temperature), noise dosimetry, gas detection
- Location tracking: Geofencing for restricted zones, evacuation accountability
- Biometric monitoring: Heart rate variability for fatigue and heat strain

**Autonomous and Robotic Systems:**
- Drone inspections replacing human work at heights
- Robotic demolition reducing worker exposure to hazardous materials
- Exoskeletons for musculoskeletal injury reduction (passive and powered)
- Autonomous heavy equipment with proximity detection systems
- 3D concrete printing reducing manual labor requirements

### Advanced PPE Technologies

**Next-Generation Fall Protection:**
- Active fall protection: Wearable airbag systems (construction application of automotive technology)
- Smart lanyards with integrated load cells and connectivity
- Self-retracting lifelines with anti-panic descent features
- Drone-mounted temporary anchor systems for steel erection

**Respiratory Protection Innovation:**
- Powered air-purifying respirators (PAPR) with integrated heads-up displays
- Nano-fiber filter media with reduced breathing resistance
- Real-time fit factor monitoring (electronic leak detection)
- Integrated communication systems for respiratory protection in high-noise environments

**Hearing Protection:**
- Electronic hearing protection with uniform 85 dBA attenuation
- Embedded communication channels for team coordination
- Real-time noise dosimetry with alert features
- Custom-molded electronic earplugs with Bluetooth connectivity

### Predictive Analytics for Injury Prevention

**Machine Learning Applications:**
- Injury prediction models from project characteristics, weather, schedule pressure
- Natural language processing of incident reports for leading indicator identification
- Computer vision for automated hazard detection from jobsite cameras
- Behavioral analysis from wearable sensor data predicting at-risk activities

**Safety Leading Indicators:**
- Near-miss reporting frequency and quality
- Safety observation rates and findings
- Training completion and competency metrics
- Hazard identification and correction speed
- Worker engagement survey data

### Regulatory Evolution

**OSHA Modernization Priorities:**
- Proposed heat illness prevention standard (construction-specific provisions)
- Updated fall protection standards for emerging work methods
- E-recordkeeping and electronic submission of injury data
- Enforcement targeting using data analytics

**International Benchmarks:**
- UK CDM Regulations (Construction Design and Management): Designer responsibilities for safety
- Singapore: Zero tolerance approach with stop-work authority at threshold fatality rates
- Australia: Harmonized Work Health and Safety Act with positive duty of due diligence
- EU: Enhanced requirements for worker participation in safety decisions

### Construction Worker Health Equity

**Immigrant Worker Safety:**
- Language-concordant safety training effectiveness
- Power dynamics limiting hazard reporting
- Wage theft intersection with safety violations
- Day laborer populations with minimal safety infrastructure
- Community-based participatory research models

**Small Employer Challenges:**
- Disproportionate injury rates (60% of fatalities in firms with <20 employees)
- Limited resources for safety program development
- OSHA consultation program utilization
- Insurance-driven safety incentive programs
- Trade association safety resources and mentoring

**Aging Construction Workforce:**
- Average age of construction workers increasing nationally
- Age-related declines in balance, vision, reaction time
- Increased fall susceptibility and severity in older workers
- Accommodations for experienced workers (reduced physical demands roles)
- Knowledge transfer and mentoring programs`,
      keyTerms: [
        { term: 'Building Information Modeling (BIM)', definition: 'A digital representation of the physical and functional characteristics of a facility that can integrate time-sequenced construction phases (4D BIM) for proactive hazard identification before construction begins' },
        { term: 'exoskeleton (occupational)', definition: 'A wearable mechanical device that supports the body during physical tasks, reducing musculoskeletal load on the spine, shoulders, or knees in construction activities' },
        { term: 'safety leading indicator', definition: 'A proactive metric (near-miss reports, safety observations, training rates) that predicts future injury risk, as opposed to lagging indicators (injury rates) that measure past harm' },
        { term: 'CDM Regulations', definition: 'UK Construction Design and Management Regulations that place safety duties on designers and clients in addition to contractors, requiring safety to be considered from the design phase' },
        { term: 'proximity detection system', definition: 'Technology using RFID, radar, or GPS to alert heavy equipment operators when workers or other equipment enter a predetermined danger zone, preventing struck-by incidents' },
        { term: 'Safety II paradigm', definition: 'An approach to safety science that focuses on understanding how work goes right most of the time rather than only analyzing what goes wrong, shifting from error prevention to performance variability management' },
      ],
      clinicalNotes: `Expert-level considerations:

1. **Technology adoption and new hazards**: As construction integrates new technologies (drones, robots, AI systems), novel occupational hazards emerge. Clinicians should inquire about technology-related exposures (electromagnetic fields from wireless devices, ergonomic issues from exoskeleton use, psychological stress from surveillance technologies).

2. **Engineered stone silicosis epidemic**: The emerging epidemic of accelerated and acute silicosis in engineered stone (quartz composite) countertop fabricators represents a critical occupational health crisis. Silica content in engineered stone (90%+) far exceeds natural stone. Clinicians evaluating construction workers with respiratory symptoms must ask about fabrication shop work. Australia has banned engineered stone effective 2024; US regulatory action is ongoing.

3. **Construction worker mental health**: Suicide rates among construction workers are significantly elevated compared to the general population. Contributing factors include chronic pain, substance use, job insecurity, and cultural barriers to help-seeking. Clinicians should screen for depression and suicidal ideation, particularly after injury or during return-to-work processes.

4. **Cumulative exposure documentation**: For workers with multi-decade construction careers, create a comprehensive exposure timeline including all trades worked, dates, locations, and known hazardous material encounters. This documentation becomes essential for future workers' compensation claims, particularly for latency-period diseases like mesothelioma and silicosis.

5. **International construction worker populations**: In many regions, construction workforces include large immigrant populations with limited English proficiency. Effective occupational health practice requires multilingual materials, culturally sensitive communication, and awareness of healthcare access barriers including insurance status and documentation concerns.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'osha-construction-focus-four',
      type: 'website',
      title: 'Construction Focus Four Hazards',
      authors: ['Occupational Safety and Health Administration'],
      source: 'OSHA',
      url: 'https://www.osha.gov/construction',
      accessedDate: '2025-01-15',
    },
    {
      id: 'cdc-niosh-construction',
      type: 'website',
      title: 'Construction Safety and Health',
      authors: ['National Institute for Occupational Safety and Health'],
      source: 'CDC/NIOSH',
      url: 'https://www.cdc.gov/niosh/construction/',
      accessedDate: '2025-01-15',
    },
    {
      id: 'who-construction-health',
      type: 'website',
      title: 'Occupational Health: Construction Workers',
      authors: ['World Health Organization'],
      source: 'WHO',
      url: 'https://www.who.int/occupational_health/publications/en/',
      accessedDate: '2025-01-15',
    },
  ],

  crossReferences: [
    { targetId: 'topic-heat-illness-prevention', targetType: 'topic', relationship: 'related', label: 'Heat Illness Prevention' },
    { targetId: 'topic-back-injury-prevention', targetType: 'topic', relationship: 'related', label: 'Back Injury Prevention' },
    { targetId: 'topic-osha-rights-all-workers', targetType: 'topic', relationship: 'related', label: 'OSHA Rights for All Workers' },
  ],

  tags: {
    systems: ['musculoskeletal', 'respiratory', 'neurological'],
    topics: ['occupational-medicine', 'construction-safety', 'injury-prevention', 'industrial-hygiene'],
    keywords: ['construction', 'fall protection', 'silica', 'scaffolding', 'Focus Four', 'OSHA construction standards'],
    clinicalRelevance: 'critical',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
