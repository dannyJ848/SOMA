/**
 * Global Surgery Educational Content
 *
 * Comprehensive overview of surgical care as a global health priority,
 * including access disparities, essential procedures, and health system strengthening.
 */

import { EducationalContent } from '../types';

export const GLOBAL_SURGERY: EducationalContent = {
  id: 'global-surgery',
  type: 'topic',
  name: 'Global Surgery',
  alternateNames: ['Surgical Care Globally', 'Global Surgical Systems', 'Surgery for All'],

  levels: {
    1: {
      level: 1,
      summary: "Global surgery is about making sure everyone in the world can get the operations they need when they need them, no matter where they live or how much money they have.",
      explanation: `Surgery is when doctors fix problems inside your body through an operation. Some surgeries are simple, like fixing a broken bone. Others are more complicated, like removing a burst appendix.

**The Problem:**

Right now, billions of people around the world cannot get surgery when they need it:

- **5 billion people** lack access to safe, affordable surgical care
- That's more than half of all the people on Earth!
- Many people die or become disabled from conditions that surgery could fix

**Why Can't People Get Surgery?**

1. **Not enough hospitals or operating rooms** - Some areas have very few places to do surgery
2. **Not enough surgeons** - Many countries have far too few doctors trained to operate
3. **Too expensive** - Surgery can cost more than a family earns in a whole year
4. **Too far away** - The nearest hospital might be hours or days of travel away

**What Surgeries Do People Need Most?**

- **Emergency operations** - Like fixing injuries from accidents or removing an appendix about to burst
- **Cesarean sections** - Operations to help babies be born safely when there are problems
- **Hernia repair** - Fixing a bulge when part of your insides pushes through your muscle wall
- **Fixing broken bones** - So people can walk and use their arms again

**Why This Matters:**

- 17 million people die each year from conditions that need surgery
- Many more people live with pain or disability that could be fixed
- Safe surgery saves lives and helps people work and take care of their families`,
      keyTerms: [
        { term: 'surgery', definition: 'A medical treatment where doctors cut open part of your body to fix a problem inside' },
        { term: 'operating room', definition: 'A special clean room in a hospital where surgeries happen' },
        { term: 'anesthesia', definition: 'Medicine that makes you sleep or makes part of your body numb so you do not feel pain during surgery' },
      ],
      analogies: [
        "An operating room is like a car repair shop for people - it is a special place with tools and trained workers who can fix problems.",
        "Not having access to surgery is like having a broken bicycle but no repair shop for hundreds of miles - you cannot get where you need to go.",
      ],
      examples: [
        "A child with appendicitis needs surgery within hours. If the nearest hospital is a day away, they might not make it.",
        "A woman having a difficult childbirth may need a cesarean section to save her life and her baby's life.",
      ],
    },
    2: {
      level: 2,
      summary: "Global surgery addresses the vast inequity in surgical care access, where 5 billion people lack safe, timely, affordable surgical and anesthesia services, contributing to millions of preventable deaths annually.",
      explanation: `Surgery was long considered a luxury in global health, but is now recognized as an essential component of health systems. The Lancet Commission on Global Surgery (2015) brought attention to the massive surgical burden worldwide.

**The Scale of the Problem:**

- **5 billion people** lack access to safe, affordable surgical care when needed
- **143 million additional procedures** needed annually to meet global need
- **17 million deaths** per year from conditions needing surgery (more than HIV, TB, and malaria combined)
- **33 million people** face catastrophic health expenditure from surgical care annually

**Geographic Disparities:**

| Region | Surgical Workforce (per 100,000) | Operating Rooms |
|--------|----------------------------------|-----------------|
| High-income countries | 40+ specialists | Adequate |
| Sub-Saharan Africa | <1 in many countries | Severely limited |
| South Asia | 2-5 specialists | Limited |

**Essential Surgical Procedures:**

The Lancet Commission identified procedures addressing 80% of surgical disease burden:

1. **Obstetric emergencies**: Cesarean section, treatment of ectopic pregnancy
2. **Trauma care**: Fracture management, wound care, emergency laparotomy
3. **Abdominal emergencies**: Appendectomy, hernia repair, bowel obstruction
4. **Congenital abnormalities**: Cleft lip/palate repair, club foot correction

**The Three Delays Model (from maternal health):**

- **Delay 1**: Decision to seek care (awareness, cultural factors)
- **Delay 2**: Reaching care (distance, transportation, cost)
- **Delay 3**: Receiving care (hospital capacity, supplies, staff)

**Components of Surgical Systems:**

1. **Workforce**: Surgeons, anesthesiologists, nurses, support staff
2. **Infrastructure**: Operating rooms, sterilization, recovery areas
3. **Supplies and equipment**: Instruments, anesthesia machines, sutures
4. **Information systems**: Data collection, quality monitoring
5. **Financing**: How surgical care is paid for
6. **Governance**: Planning, regulation, coordination

**Why Surgery Matters for Development:**

- Surgical conditions affect all age groups
- Economic impact: Lost productivity from disability and death
- Surgery enables treatment of cancer, trauma, maternal conditions
- Integrated with overall health system strengthening`,
      keyTerms: [
        { term: 'surgical workforce', definition: 'The surgeons, anesthesiologists, and obstetricians available to provide operative care' },
        { term: 'catastrophic health expenditure', definition: 'When medical costs exceed a significant portion of household income, causing financial hardship' },
        { term: 'essential surgery', definition: 'Procedures that address the most common and life-threatening surgical conditions' },
        { term: 'Bellwether procedures', definition: 'Three indicator procedures (cesarean section, laparotomy, fracture fixation) used to assess surgical capacity' },
      ],
      analogies: [
        "The Bellwether procedures are like a thermometer for surgical systems - if a hospital can do these three operations well, they can likely handle most surgical emergencies.",
      ],
    },
    3: {
      level: 3,
      summary: "Global surgery has emerged as a health systems priority, with frameworks addressing workforce, infrastructure, financing, and quality metrics to achieve universal access to essential surgical and anesthesia care as part of Universal Health Coverage.",
      explanation: `The global surgery movement has evolved from short-term missions to sustainable system strengthening, guided by evidence-based frameworks and metrics.

**Lancet Commission on Global Surgery (2015):**

Established surgery as a public health priority and development indicator:

**Key Messages:**
- Surgery is an "indivisible, indispensable part of health care"
- 5 billion people lack access to safe, affordable surgical care
- 143 million additional surgical procedures needed annually
- Investment in surgical systems yields significant economic returns (benefit-cost ratio 10:1)

**Six Core Indicators:**
| Indicator | Target |
|-----------|--------|
| Access to timely essential surgery | 80% within 2 hours |
| Specialist surgical workforce density | 20 per 100,000 population |
| Surgical volume | 5,000 procedures per 100,000 |
| Perioperative mortality rate | Track and reduce |
| Protection against catastrophic expenditure | 100% |
| Protection against impoverishing expenditure | 100% |

**National Surgical, Obstetric, and Anesthesia Plans (NSOAPs):**

Framework for country-level surgical system planning:
- Situation analysis
- Needs assessment
- Strategic priorities
- Implementation plan
- Monitoring and evaluation

Countries with NSOAPs: Zambia, Tanzania, Rwanda, Ethiopia, Nigeria, Pakistan, Madagascar, others

**Workforce Development:**

*Current Gaps:*
- WHO estimates 4.45 health workers per 1,000 needed for UHC
- Surgical workforce severely maldistributed
- Task sharing necessary but requires training and supervision

*Training Approaches:*
- In-country residency programs
- Regional training centers
- Task sharing/shifting to non-physicians
- Short-course training for district hospitals

**Infrastructure and Equipment:**

*Operating Theater Requirements:*
- Reliable electricity and backup
- Running water
- Sterilization equipment
- Anesthesia machines and monitoring
- Essential surgical instruments
- Blood banking capacity

*Innovation:*
- Solar-powered operating theaters
- Low-cost equipment design (e.g., LIFEBOX pulse oximetry)
- Essential surgical equipment packages

**Anesthesia in Global Surgery:**

Anesthesia availability often more limited than surgical capacity:
- Anesthesia workforce gaps even more severe
- WFSA promotes safe anesthesia standards globally
- Ketamine: Essential anesthesia drug for low-resource settings
- Pulse oximetry campaigns reducing anesthesia mortality

**Quality and Safety:**

*WHO Surgical Safety Checklist:*
- Dramatically reduces complications and mortality
- Implementation challenges in low-resource settings
- Adaptation for local contexts

*Perioperative Mortality:*
- Varies dramatically: 0.5% in high-income to >5% in some low-income settings
- African Surgical Outcomes Study revealed high postoperative mortality
- Quality improvement initiatives needed alongside access expansion

**Global Surgery Research Priorities:**

1. Epidemiology of surgical conditions
2. Implementation science for surgical systems
3. Health economics of surgical care
4. Quality improvement interventions
5. Workforce development models
6. Surgical care in humanitarian settings`,
      keyTerms: [
        { term: 'NSOAP', definition: 'National Surgical, Obstetric, and Anesthesia Plan - country-level framework for surgical system strengthening' },
        { term: 'task sharing', definition: 'Expanding roles of non-specialist health workers to perform surgical procedures with training and supervision' },
        { term: 'WHO Surgical Safety Checklist', definition: 'Standardized protocol performed before, during, and after surgery to reduce complications' },
        { term: 'Bellwether procedures', definition: 'Cesarean section, laparotomy, and open fracture fixation - indicators of hospital surgical capacity' },
      ],
      clinicalNotes: 'For clinicians working in or supporting low-resource settings: (1) WHO Surgical Safety Checklist improves outcomes even in resource-limited settings, (2) Ketamine-based anesthesia techniques valuable where advanced monitoring limited, (3) Clinical officers and other non-physicians can safely perform procedures with proper training, (4) Quality improvement possible even with limited data.',
    },
    4: {
      level: 4,
      summary: "Global surgery operates at the intersection of health systems science, implementation research, and health economics, with ongoing debates about surgical service delivery models, workforce optimization, quality improvement in low-resource settings, and integration of surgical care within primary healthcare-oriented health systems.",
      explanation: `**Health Systems Framework for Surgery:**

**WHO Building Blocks Applied to Surgical Systems:**

| Building Block | Surgical System Components |
|----------------|---------------------------|
| Service Delivery | District vs. referral hospitals, private sector, outreach |
| Workforce | Surgeons, anesthesiologists, nurses, task-sharing cadres |
| Information | Surgical registries, mortality audits, burden data |
| Medicines/Supplies | Essential surgical drugs, equipment, blood products |
| Financing | Insurance coverage, out-of-pocket, public funding |
| Governance | NSOAPs, regulation, quality standards |

**Service Delivery Models:**

*Levels of Surgical Care:*
| Level | Procedures | Workforce |
|-------|------------|-----------|
| Primary/District | Basic emergency, wound care, some obstetric | General practitioners, clinical officers |
| First-referral | Bellwether procedures, common emergencies | General surgeons, anesthesia providers |
| Tertiary | Subspecialty surgery | Specialist surgeons |

*Debates:*
- Centralization vs. decentralization
- Surgical camps/outreach sustainability
- Public-private partnerships
- Regional referral networks

**Health Economics of Surgery:**

*Cost-Effectiveness Analysis:*
- Many surgical interventions highly cost-effective
- Cleft lip repair: $20-100 per DALY averted
- Cesarean section: $100-500 per DALY averted
- Inguinal hernia repair: $50-100 per DALY averted
- Compares favorably with other "best buys"

*Economic Impact of Surgical Conditions:*
- Lancet Commission estimated $12.3 trillion in cumulative GDP loss (2015-2030) from surgical conditions
- Disability affects productivity
- Catastrophic expenditure impoverishes families

*Financing Mechanisms:*
- Public funding for essential surgery
- National health insurance inclusion
- Results-based financing
- Public-private partnerships
- Out-of-pocket reduction strategies

**Quality Improvement Science:**

*Measurement Challenges:*
- Limited data infrastructure in many settings
- Perioperative mortality rate as key metric (POMR)
- Surgical Apgar Score adaptation
- WHO Surgical Safety Checklist as process measure

*African Surgical Outcomes Study (ASOS) Findings:*
- Postoperative mortality 2x global average
- Most deaths potentially preventable
- Infection, bleeding, cardiac complications common
- Led to ASOS-2 quality improvement trial

*Quality Improvement Approaches:*
- Plan-Do-Study-Act cycles
- Mortality and morbidity conferences
- Surgical site infection bundles
- Enhanced recovery protocols (ERAS) adaptation

**Anesthesia System Strengthening:**

*Workforce Models:*
| Cadre | Training | Scope |
|-------|----------|-------|
| Physician anesthesiologists | Full specialty training | Full scope |
| Non-physician anesthesia providers | 1-3 year programs | Basic/intermediate procedures |
| Nurse anesthetists | Nursing + anesthesia | Varies by country |

*Safe Anesthesia Requirements (WFSA):*
- Trained provider for every patient
- Pulse oximetry for every anesthetic
- Capnography for intubated patients
- Safe drug storage and labeling

**Global Surgery and Humanitarian Response:**

*Surgical Needs in Crises:*
- Trauma from conflict/disaster
- Obstetric emergencies in displaced populations
- Continuation of essential surgical services
- Rehabilitation for injuries

*Organizations:*
- ICRC surgical programs
- MSF (significant surgical capacity)
- WHO Emergency Medical Teams (EMTs)
- Military medical contributions

**Research Methods in Global Surgery:**

*Study Designs:*
- Health facility assessments (e.g., PIPES, SOSAS)
- Surgical registries
- Implementation trials
- Economic evaluations
- Qualitative research on access barriers

*Research Networks:*
- GlobalSurg Collaborative
- CovidSurg Collaborative
- G4 Alliance
- Surgical outcomes studies`,
      keyTerms: [
        { term: 'perioperative mortality rate', definition: 'Death rate within a defined period around surgery (often 30 days), key surgical quality metric' },
        { term: 'PIPES', definition: 'Personnel, Infrastructure, Procedures, Equipment, Supplies - surgical capacity assessment tool' },
        { term: 'Surgical Apgar Score', definition: 'Intraoperative scoring system predicting postoperative complications' },
        { term: 'task shifting', definition: 'Delegation of tasks to less specialized health workers to address workforce shortages' },
        { term: 'ASOS', definition: 'African Surgical Outcomes Study - multicenter study of postoperative outcomes in Africa' },
      ],
      clinicalNotes: 'For clinicians engaging in global surgery: (1) Prioritize strengthening local capacity over performing procedures yourself, (2) Understand the context - what can be sustained?, (3) Quality improvement possible with basic data, (4) WHO Surgical Safety Checklist works across contexts, (5) Partnerships should be bidirectional and equity-focused.',
    },
    5: {
      level: 5,
      summary: "Global surgery scholarship integrates health systems research, implementation science, political economy, and decolonial frameworks to address structural barriers to surgical equity, while advancing evidence-based approaches to workforce development, quality improvement, and sustainable financing within the Universal Health Coverage agenda.",
      explanation: `**Theoretical Frameworks:**

**Political Economy of Global Surgery:**

*Structural Determinants:*
- Colonial legacies in health system architecture
- Trade and investment affecting health workforce (brain drain)
- Debt and fiscal space constraints on health spending
- Intellectual property regimes for surgical technologies

*Power Dynamics:*
- Who sets the global surgery agenda?
- North-South partnership equity
- Role of high-income country institutions
- Surgical "voluntourism" critiques

**Decolonizing Global Surgery:**

*Critiques:*
- "Global surgery" centered in high-income countries
- Research agenda driven by external priorities
- Training programs extracting rather than building capacity
- Short-term missions without sustainability

*Alternative Approaches:*
- South-South collaboration
- Locally-led priority setting
- Capacity strengthening vs. capacity substitution
- Equitable partnerships in research

**Implementation Science for Surgical Scale-Up:**

*Frameworks Applied:*
- Proctor outcomes: Acceptability, adoption, appropriateness, cost, feasibility, fidelity, penetration, sustainability
- RE-AIM: Reach, Effectiveness, Adoption, Implementation, Maintenance
- CFIR: Consolidated Framework for Implementation Research

*Determinants of Implementation Success:*
- Inner context: Hospital leadership, resources, culture
- Outer context: Policy environment, financing, regulation
- Innovation characteristics: Complexity, adaptability
- Individual factors: Provider knowledge, attitudes

*Scale-Up Challenges:*
- Moving from pilot to national programs
- Quality maintenance during expansion
- Political sustainability across government changes
- Integration vs. vertical programs

**Health Systems Research Questions:**

1. **Optimal service delivery configurations**: What surgical services should be available at what level?
2. **Workforce models**: Task sharing effectiveness and safety
3. **Financing mechanisms**: Which approaches achieve UHC for surgery?
4. **Quality improvement**: Effective interventions in low-resource contexts
5. **Governance**: NSOAP implementation success factors

**Quality and Safety Research Frontier:**

*Perioperative Care:*
- ERAS (Enhanced Recovery) adaptation to low-resource settings
- Infection prevention in under-resourced operating theaters
- Safe anesthesia with limited monitoring
- Postoperative care and early warning systems

*Surgical Site Infection Prevention:*
- WHO guidelines implementation
- Antibiotic stewardship in surgery
- Local evidence generation

*Maternal Surgical Care:*
- Cesarean section quality (not just access)
- Peripartum hysterectomy outcomes
- Obstetric fistula prevention and treatment

**Emerging Issues:**

*Cancer Surgery:*
- Growing cancer burden in LMICs
- Integration of surgical oncology
- Pathology and staging infrastructure
- Multidisciplinary care models

*Pediatric Surgery:*
- 1.7 billion children lack surgical access
- Congenital anomalies burden
- Specialized workforce needs
- Regional pediatric surgery centers

*Trauma Systems:*
- Road traffic injuries major burden
- Pre-hospital care development
- Trauma system organization
- Rehabilitation services

*Surgical Care in Humanitarian Settings:*
- EMT minimum standards
- Conflict surgery specialization
- Rehabilitation and prosthetics
- Mental health integration

**Metrics and Accountability:**

*Beyond the Six LCoGS Indicators:*
- Surgical volume by procedure type
- Access stratified by wealth, geography, gender
- Quality indicators (complications, mortality)
- Financial protection metrics
- Workforce density and distribution

*Data Infrastructure:*
- Electronic surgical registries
- Integration with DHIS2
- Verbal autopsy for surgical deaths
- Quality dashboards

**Future Directions:**

1. **Technology and innovation**: Telemedicine, AI for diagnostics, low-cost devices
2. **Climate-resilient surgical systems**: Sustainable practices, solar power, waste management
3. **Integration with primary care**: Task sharing, surgical outreach from district hospitals
4. **Health financing reform**: Surgical services in benefit packages
5. **Research capacity**: Training surgical researchers in LMICs
6. **Global governance**: Surgery in WHO programmatic work, SDG monitoring

**Clinician-Researcher Role:**

*Opportunities:*
- Implementation research in clinical setting
- Quality improvement initiatives
- Policy engagement
- Mentorship of trainees
- Advocacy for surgical equity

*Ethical Considerations:*
- Research in vulnerable populations
- Dual clinical-research roles
- Resource allocation decisions
- Partnership equity`,
      keyTerms: [
        { term: 'capacity substitution', definition: 'External actors performing functions rather than building local ability to perform them - critique in global health partnerships' },
        { term: 'South-South collaboration', definition: 'Partnership and knowledge exchange between low and middle-income countries' },
        { term: 'surgical voluntourism', definition: 'Short-term surgical missions often critiqued for limited sustainability and potential harms' },
        { term: 'LCoGS', definition: 'Lancet Commission on Global Surgery - landmark 2015 report establishing surgical care as global health priority' },
        { term: 'NSOAP', definition: 'National Surgical, Obstetric, and Anesthesia Plan - strategic planning framework for surgical system strengthening' },
      ],
      clinicalNotes: 'For clinicians pursuing global surgery careers: (1) Obtain rigorous research training, (2) Build long-term partnerships rather than short visits, (3) Prioritize local leadership and capacity, (4) Engage with policy and financing, not just clinical care, (5) Consider surgical systems and health systems perspectives, (6) Practice reflexivity about power and positionality in global health.',
    },
  },

  media: [
    {
      id: 'surgical-access-map',
      type: 'diagram',
      filename: 'global-surgical-access-map.svg',
      title: 'Global Access to Surgical Care',
      description: 'World map showing disparities in surgical access by region',
    },
    {
      id: 'lcogs-indicators',
      type: 'diagram',
      filename: 'lcogs-six-indicators.svg',
      title: 'Lancet Commission Core Indicators',
      description: 'Visual representation of the six core global surgery indicators',
    },
  ],

  citations: [
    {
      id: 'lcogs-2015',
      type: 'article',
      title: 'Global Surgery 2030: Evidence and solutions for achieving health, welfare, and economic development',
      authors: ['Meara JG', 'Leather AJM', 'Hagander L', 'et al.'],
      source: 'The Lancet',
      url: 'https://www.thelancet.com/commissions/global-surgery',
      license: 'Open Access',
    },
    {
      id: 'dis-essential-surgery',
      type: 'article',
      title: 'Essential Surgery - Disease Control Priorities 3rd Edition',
      source: 'World Bank',
      url: 'https://www.dcp-3.org/surgery',
      license: 'Open Access',
    },
    {
      id: 'who-eesc',
      type: 'website',
      title: 'WHO Emergency and Essential Surgical Care',
      source: 'World Health Organization',
      url: 'https://www.who.int/surgery/',
      license: 'CC BY-NC-SA 3.0 IGO',
    },
  ],

  crossReferences: [
    { targetId: 'global-health-challenges', targetType: 'topic', relationship: 'parent', label: 'Global Health Challenges' },
    { targetId: 'health-disparities-overview', targetType: 'topic', relationship: 'related', label: 'Health Disparities' },
    { targetId: 'maternal-health-global', targetType: 'topic', relationship: 'related', label: 'Maternal Health' },
    { targetId: 'economic-disparities', targetType: 'topic', relationship: 'related', label: 'Economic Disparities' },
  ],

  tags: {
    systems: ['surgery', 'public-health', 'health-systems'],
    topics: ['global-surgery', 'surgical-access', 'health-equity', 'global-health'],
    keywords: ['global surgery', 'surgical systems', 'Lancet Commission', 'NSOAP', 'surgical access'],
    clinicalRelevance: 'high',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
