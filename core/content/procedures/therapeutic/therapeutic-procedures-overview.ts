/**
 * Therapeutic Procedures Overview
 *
 * Comprehensive content on therapeutic medical procedures, their indications,
 * techniques, and patient care considerations.
 */

import { EducationalContent } from '../../types';

export const therapeuticProceduresOverview: EducationalContent = {
  id: 'procedures-therapeutic-overview',
  type: 'concept',
  name: 'Therapeutic Procedures Overview',
  alternateNames: ['Treatment Procedures', 'Interventional Procedures', 'Medical Interventions'],

  levels: {
    1: {
      level: 1,
      summary: 'Therapeutic procedures are medical treatments that doctors perform to help fix health problems or make you feel better.',
      explanation: `Therapeutic procedures are special treatments that healthcare providers do to help heal your body or relieve pain and discomfort.

**What Are Therapeutic Procedures?**
Unlike tests that just look for problems (diagnostic procedures), therapeutic procedures actually treat the problem. They help fix what's wrong with your body.

**Common Types of Therapeutic Procedures:**
- **Injections:** Medicines put directly into your body through a needle
- **Wound care:** Cleaning and treating cuts, scrapes, or surgical sites
- **Physical therapy:** Exercises and treatments to help your body move better
- **IV treatments:** Medicines or fluids given through a tube in your vein

**Why Are They Done?**
- To relieve pain
- To treat infections
- To fix injuries
- To help your body heal faster
- To remove harmful things from your body

**What to Expect:**
- A healthcare provider will explain what will happen
- You might need to stay still or lie down
- Some procedures might hurt a little, but they help you feel better afterward
- You may need to follow special instructions after the procedure

**How to Prepare:**
- Ask questions if you don't understand something
- Tell your doctor about any allergies
- Follow any instructions about eating or drinking before the procedure
- Bring a parent or trusted adult with you`,
      keyTerms: [
        { term: 'therapeutic', definition: 'Something that helps treat or heal a health problem' },
        { term: 'procedure', definition: 'A medical treatment or action done by healthcare providers' },
        { term: 'injection', definition: 'Medicine put into your body through a needle' },
      ],
      analogies: [
        'Therapeutic procedures are like fixing a flat tire - diagnostic procedures find the problem, but therapeutic procedures actually fix it.',
        'Just like a mechanic uses tools to repair a car, doctors use therapeutic procedures to repair your body.',
      ],
      examples: [
        'Getting a shot of medicine to help with allergies is a therapeutic procedure.',
        'Having a doctor clean and bandage a deep cut is a therapeutic procedure called wound care.',
        'Receiving IV fluids when you are dehydrated is a therapeutic procedure.',
      ],
      patientCounselingPoints: [
        'It is okay to ask questions about any procedure.',
        'Tell your doctor if you are scared or nervous.',
        'The goal is always to help you feel better.',
      ],
    },
    2: {
      level: 2,
      summary: 'Therapeutic procedures are medical interventions designed to treat diseases, injuries, or conditions, ranging from simple injections to complex surgical techniques.',
      explanation: `## Understanding Therapeutic Procedures

Therapeutic procedures are medical interventions performed to treat, cure, or manage health conditions. They differ from diagnostic procedures, which are used to identify problems.

**Categories of Therapeutic Procedures:**

**1. Minimally Invasive Procedures:**
- Injections and infusions
- Catheter-based treatments
- Endoscopic procedures
- Minor skin procedures

**2. Surgical Procedures:**
- Open surgery
- Laparoscopic (keyhole) surgery
- Robotic-assisted surgery
- Emergency surgery

**3. Physical and Rehabilitative Procedures:**
- Physical therapy
- Occupational therapy
- Manipulation therapies
- Exercise programs

**The Procedure Process:**

**Before (Pre-procedure):**
- Medical evaluation
- Informed consent
- Preparation instructions (fasting, medications)
- Pre-procedure testing if needed

**During (Intra-procedure):**
- Positioning and monitoring
- Anesthesia if needed (local, regional, or general)
- The actual treatment
- Immediate monitoring

**After (Post-procedure):**
- Recovery monitoring
- Pain management
- Activity restrictions
- Follow-up appointments

**Informed Consent:**
Before any procedure, you should understand:
- What the procedure involves
- Why it is recommended
- What the risks and benefits are
- What alternatives exist
- What happens if you choose not to have it

**Common Therapeutic Procedures by Body System:**
| System | Common Procedures |
|--------|-------------------|
| Musculoskeletal | Joint injections, fracture reduction |
| Cardiovascular | Angioplasty, pacemaker insertion |
| Respiratory | Chest tube insertion, bronchoscopy |
| Gastrointestinal | Abscess drainage, feeding tube placement |
| Skin | Wound repair, abscess drainage |`,
      keyTerms: [
        { term: 'informed consent', definition: 'The process of understanding and agreeing to a procedure after learning about its risks, benefits, and alternatives' },
        { term: 'minimally invasive', definition: 'Procedures that use small incisions or natural body openings, causing less trauma than traditional surgery' },
        { term: 'anesthesia', definition: 'Medications used to prevent pain during procedures; can be local (numbing one area), regional (numbing a larger area), or general (putting you to sleep)' },
        { term: 'laparoscopic', definition: 'A type of surgery using small incisions and a camera to see inside the body' },
      ],
      analogies: [
        'Informed consent is like reading the terms and conditions before downloading an app - you should know what you are agreeing to.',
        'Minimally invasive surgery is like entering a house through a window instead of breaking down the wall - you get in, but with much less damage.',
      ],
    },
    3: {
      level: 3,
      summary: 'Therapeutic procedures encompass a spectrum of interventions from non-invasive to highly invasive techniques, requiring understanding of indications, contraindications, procedural skills, and complication management.',
      explanation: `## Classification of Therapeutic Procedures

**By Invasiveness:**
1. **Non-invasive:** External application, no skin penetration
2. **Minimally invasive:** Small incisions, percutaneous access
3. **Invasive:** Significant tissue manipulation, surgical access
4. **Highly invasive:** Major surgical procedures, organ manipulation

**By Urgency:**
- **Elective:** Scheduled, non-urgent
- **Urgent:** Needs to be done soon (hours to days)
- **Emergent:** Immediate intervention required

**By Setting:**
- Office/clinic-based
- Ambulatory surgery center
- Hospital (inpatient or outpatient)
- Operating room
- Interventional suite (cath lab, IR suite)

## Procedural Skills Framework

**Universal Precautions:**
- Hand hygiene
- Personal protective equipment (PPE)
- Sterile technique
- Sharps safety

**Aseptic Technique:**
1. **Sterile field preparation:** Draping, instrument layout
2. **Skin antisepsis:** Chlorhexidine or povidone-iodine
3. **Sterile gloving and gowning**
4. **Maintaining sterility throughout procedure**

**Anesthesia Selection:**
| Type | Technique | Duration | Use Cases |
|------|-----------|----------|-----------|
| Topical | Surface application | 15-60 min | Minor skin procedures |
| Local infiltration | Injection at site | 30-120 min | Suturing, biopsies |
| Field block | Surrounding tissue injection | 1-4 hours | Larger excisions |
| Nerve block | Specific nerve targeting | 2-12 hours | Regional anesthesia |
| Conscious sedation | IV sedatives + analgesics | Varies | Endoscopy, reductions |
| General | Inhaled/IV anesthetics | Varies | Major surgery |

## Procedural Complications

**Immediate:**
- Bleeding
- Nerve injury
- Vascular injury
- Allergic reactions
- Vasovagal response

**Early (hours to days):**
- Infection
- Hematoma
- Seroma
- Wound dehiscence

**Late (weeks to months):**
- Chronic pain
- Keloid/hypertrophic scarring
- Functional impairment
- Recurrence of condition

## Documentation Requirements

**Pre-procedure:**
- Indication and medical necessity
- Informed consent
- Pre-procedure checklist completion
- Time-out documentation

**Intra-procedure:**
- Start/end times
- Anesthesia type and dosing
- Findings and actions taken
- Specimens obtained
- Complications encountered

**Post-procedure:**
- Patient condition
- Instructions given
- Follow-up plan
- Complications or concerns`,
      keyTerms: [
        { term: 'aseptic technique', definition: 'Methods to prevent contamination from microorganisms during medical procedures' },
        { term: 'time-out', definition: 'A mandatory pause before procedures to verify correct patient, procedure, site, and safety measures' },
        { term: 'dehiscence', definition: 'Separation or opening of a wound that was previously closed' },
        { term: 'vasovagal response', definition: 'A sudden drop in heart rate and blood pressure causing fainting, often triggered by pain or anxiety' },
        { term: 'conscious sedation', definition: 'Medication-induced state allowing procedures while patient remains responsive' },
      ],
      clinicalNotes: 'Always perform a "time-out" before any procedure. Verify patient identity, planned procedure, site marking (if applicable), allergies, and antibiotic prophylaxis if indicated.',
    },
    4: {
      level: 4,
      summary: 'Advanced therapeutic procedures require comprehensive understanding of patient selection, risk stratification, technical proficiency, and perioperative optimization to ensure favorable outcomes and minimize complications.',
      explanation: `## Patient Selection and Risk Stratification

**Pre-procedural Assessment:**

**Medical History:**
- Cardiac risk (RCRI score, functional capacity)
- Pulmonary risk (STOP-BANG, respiratory function)
- Bleeding risk (anticoagulation, coagulopathy)
- Renal function (contrast considerations, drug dosing)
- Immunocompromise status

**Risk Assessment Tools:**
| Tool | Application | Components |
|------|-------------|------------|
| ASA Classification | Overall surgical risk | Physical status I-VI |
| RCRI | Cardiac risk | 6 predictors |
| Caprini Score | VTE risk | Multiple factors |
| NSQIP Calculator | 30-day outcomes | Procedure-specific |
| POSSUM | Morbidity/mortality | 12 physiological + 6 operative |

**Optimization Strategies:**

**Cardiac Optimization:**
- Beta-blocker continuation (if chronic)
- Avoid initiation of new beta-blockers perioperatively
- Statin therapy continuation
- Revascularization rarely indicated solely for non-cardiac surgery

**Pulmonary Optimization:**
- Smoking cessation (ideally 8+ weeks prior)
- Bronchodilator optimization for COPD/asthma
- Treatment of active infections
- Incentive spirometry training

**Glycemic Control:**
- Target glucose 140-180 mg/dL perioperatively
- Hold metformin (contrast procedures)
- Insulin protocol for diabetics
- Avoid hypoglycemia

## Anticoagulation Management

**Bridging Anticoagulation:**

| Indication | VTE Risk | Bridging Strategy |
|------------|----------|-------------------|
| Mechanical valve | High | LMWH bridging |
| Recent VTE (<3 months) | High | LMWH bridging |
| Atrial fibrillation | Variable | Based on CHA2DS2-VASc |
| Prior stroke | High | Case-by-case |

**DOAC Management:**
- Hold 24-48 hours for low bleeding risk procedures
- Hold 48-72 hours for high bleeding risk procedures
- No bridging required
- Consider reversal agents for emergent procedures

**Antiplatelet Management:**
- Continue aspirin for most procedures
- Hold P2Y12 inhibitors 5-7 days (clopidogrel, ticagrelor)
- Balance stent thrombosis risk vs bleeding risk
- Coordinate with cardiology for recent PCI

## Procedural Sedation

**Sedation Continuum:**
| Level | Responsiveness | Airway | Cardiovascular |
|-------|----------------|--------|----------------|
| Minimal | Normal to verbal | Unaffected | Unaffected |
| Moderate | Purposeful to verbal/tactile | No intervention | Usually maintained |
| Deep | Purposeful to painful | May need intervention | Usually maintained |
| General | Unarousable | Intervention required | May be impaired |

**Monitoring Requirements:**
- Continuous pulse oximetry
- Capnography (for moderate/deep sedation)
- Blood pressure monitoring
- ECG for at-risk patients
- Designated sedation provider (separate from proceduralist)

**Common Sedation Agents:**
| Agent | Onset | Duration | Reversal |
|-------|-------|----------|----------|
| Midazolam | 1-3 min | 30-60 min | Flumazenil |
| Fentanyl | 2-3 min | 30-60 min | Naloxone |
| Propofol | 30 sec | 5-10 min | None (supportive) |
| Ketamine | 1 min | 10-15 min | None |

## Quality and Safety Frameworks

**Never Events in Procedures:**
- Wrong patient/site/procedure
- Retained foreign body
- Unintended organ injury
- Fire
- Death from medication error

**Root Cause Analysis:**
- Human factors
- System failures
- Communication breakdowns
- Training deficiencies
- Equipment issues`,
      keyTerms: [
        { term: 'RCRI', definition: 'Revised Cardiac Risk Index; tool for predicting cardiac complications in non-cardiac surgery' },
        { term: 'CHA2DS2-VASc', definition: 'Stroke risk scoring system for atrial fibrillation patients' },
        { term: 'bridging anticoagulation', definition: 'Short-acting anticoagulation used when stopping long-term anticoagulants for procedures' },
        { term: 'capnography', definition: 'Monitoring of exhaled carbon dioxide concentration, indicating ventilation status' },
        { term: 'never events', definition: 'Serious, largely preventable patient safety incidents that should never occur' },
      ],
      clinicalNotes: 'For patients on DOACs undergoing elective procedures, use a standardized protocol based on renal function and procedural bleeding risk. Avoid unnecessary bridging which increases bleeding without clear benefit.',
    },
    5: {
      level: 5,
      summary: 'Expert-level therapeutic procedure management integrates evidence-based practice guidelines, quality improvement methodologies, advanced technical skills, and systems-level thinking to optimize procedural outcomes and patient safety.',
      explanation: `## Evidence-Based Procedure Selection

**Comparative Effectiveness Research:**

Understanding procedure selection requires synthesis of:
- Randomized controlled trials
- Registry data
- Real-world evidence
- Cost-effectiveness analyses
- Patient-reported outcomes

**Example: Revascularization Strategy Selection**
| Factor | Favors PCI | Favors CABG |
|--------|------------|-------------|
| Anatomy | Single/two-vessel, low SYNTAX | Three-vessel, high SYNTAX, left main |
| Diabetes | Non-diabetic | Diabetic with multivessel disease |
| Frailty | Frail, high surgical risk | Good surgical candidate |
| Presentation | ACS requiring urgent intervention | Stable, can wait for surgery |
| Patient preference | Avoid surgery, shorter recovery | Durable solution preferred |

## Advanced Technical Considerations

**Fluoroscopy and Radiation Safety:**
- ALARA principle (As Low As Reasonably Achievable)
- Collimation to minimize field
- Distance optimization
- Shielding (lead aprons, thyroid shields)
- Dose monitoring (badge, real-time display)
- Deterministic effects: Skin injury threshold ~2 Gy
- Stochastic effects: Cancer risk increases with cumulative dose

**Image-Guided Procedures:**
| Modality | Advantages | Limitations |
|----------|------------|-------------|
| Fluoroscopy | Real-time, widely available | Radiation, 2D |
| Ultrasound | No radiation, portable, real-time | Operator dependent, limited penetration |
| CT guidance | High resolution, 3D | Radiation, not real-time |
| MRI guidance | No radiation, excellent soft tissue | Cost, availability, metal incompatibility |

**Emerging Technologies:**
- Augmented reality surgical navigation
- Robotic-assisted procedures
- AI-assisted image interpretation
- 3D printing for surgical planning

## Quality Improvement in Procedural Medicine

**Key Performance Indicators:**
- Procedural success rate
- Complication rates (compared to benchmarks)
- Fluoroscopy time and radiation dose
- Time to procedure (access metrics)
- Length of stay
- Readmission rates
- Patient satisfaction scores

**Quality Improvement Methodologies:**
| Method | Application |
|--------|-------------|
| PDSA cycles | Iterative improvement |
| Six Sigma | Defect reduction |
| Lean methodology | Waste elimination |
| Failure mode analysis | Prospective risk identification |
| Root cause analysis | Post-event investigation |

**Simulation Training:**
- Task trainers for basic skills
- High-fidelity simulators for complex procedures
- Team-based simulation for communication
- Deliberate practice with feedback
- Competency assessment

## Systems-Level Considerations

**Procedural Suite Design:**
- Ergonomic layout
- Radiation shielding
- HVAC (positive pressure, air exchanges)
- Equipment accessibility
- Emergency equipment location
- Communication systems

**Team Dynamics:**
| Role | Responsibilities |
|------|------------------|
| Proceduralist | Technical execution, clinical decision-making |
| First assistant | Retraction, hemostasis, tissue handling |
| Anesthesia | Sedation/anesthesia, monitoring, airway management |
| Circulating nurse | Documentation, supplies, patient advocacy |
| Scrub tech | Instrument management, anticipating needs |
| Radiology tech | Imaging support, radiation safety |

**Crisis Resource Management:**
- Clear leadership declaration
- Role assignment
- Closed-loop communication
- Global situational awareness
- Cognitive aid utilization
- Workload distribution
- Post-event debriefing

## Ethical and Legal Considerations

**Procedural Informed Consent:**
- Voluntary decision-making capacity
- Disclosure of material risks
- Alternative options presented
- Opportunity for questions
- Documentation requirements
- Special circumstances: Emergency, incapacity, minors

**Conflict of Interest:**
- Financial relationships with device/equipment companies
- Appropriate procedure utilization
- Referring patterns
- Disclosure requirements
- Institutional oversight

**Credentialing and Privileging:**
- Initial privileges: Training documentation, case logs
- Ongoing privileges: Volume requirements, outcomes review
- New procedure adoption: Proctoring requirements
- Restriction or revocation processes`,
      keyTerms: [
        { term: 'SYNTAX score', definition: 'Angiographic scoring system for coronary artery disease complexity guiding revascularization strategy' },
        { term: 'ALARA', definition: 'As Low As Reasonably Achievable; radiation safety principle minimizing exposure' },
        { term: 'PDSA', definition: 'Plan-Do-Study-Act; iterative quality improvement methodology' },
        { term: 'crisis resource management', definition: 'Framework for managing emergencies emphasizing teamwork, communication, and decision-making' },
        { term: 'privileging', definition: 'Hospital process authorizing specific procedures based on competency verification' },
      ],
      clinicalNotes: `Expert Practice Points:
1. Procedure selection should integrate patient preferences, anatomic factors, comorbidities, and available expertise
2. Continuous quality monitoring with benchmarking is essential for maintaining competency
3. Simulation-based training reduces complications and improves outcomes
4. Team training and communication protocols are as important as technical skills
5. Always have backup plans and rescue strategies for anticipated complications
6. Engage in regular debriefing and case review for continuous improvement`,
    },
  },

  media: [
    {
      id: 'sterile-technique-diagram',
      type: 'diagram',
      filename: 'sterile-technique-diagram.svg',
      title: 'Principles of Sterile Technique',
      description: 'Visual guide to maintaining aseptic conditions during procedures',
    },
    {
      id: 'sedation-continuum',
      type: 'diagram',
      filename: 'sedation-continuum.svg',
      title: 'Sedation Continuum',
      description: 'Levels of procedural sedation from minimal to general anesthesia',
    },
  ],

  citations: [
    {
      id: 'asa-standards',
      type: 'website',
      title: 'ASA Standards, Guidelines, and Statements',
      source: 'American Society of Anesthesiologists',
      url: 'https://www.asahq.org/standards-and-guidelines',
    },
    {
      id: 'who-surgical-checklist',
      type: 'article',
      title: 'A Surgical Safety Checklist to Reduce Morbidity and Mortality in a Global Population',
      authors: ['Haynes AB', 'Weiser TG', 'Berry WR', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMsa0810119',
    },
  ],

  crossReferences: [
    { targetId: 'procedures-injections', targetType: 'concept', relationship: 'child', label: 'Injections' },
    { targetId: 'procedures-wound-care', targetType: 'concept', relationship: 'child', label: 'Wound Care' },
    { targetId: 'anesthesia-overview', targetType: 'concept', relationship: 'related', label: 'Anesthesia' },
  ],

  tags: {
    systems: ['general'],
    topics: ['procedures', 'clinical-skills', 'patient-safety'],
    keywords: ['therapeutic', 'intervention', 'treatment', 'procedural medicine'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'medicine', 'family-medicine'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default therapeuticProceduresOverview;
