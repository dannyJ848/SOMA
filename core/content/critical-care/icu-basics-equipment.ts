/**
 * ICU Basics and Equipment - Educational Content
 *
 * Comprehensive guide to understanding the intensive care unit environment,
 * common equipment, and the ICU care team.
 */

import { EducationalContent } from '../types';

export const icuBasicsAndEquipment: EducationalContent = {
  id: 'critical-care-icu-basics-equipment',
  type: 'concept',
  name: 'ICU Basics and Equipment',
  alternateNames: ['Intensive Care Unit Overview', 'Critical Care Environment', 'ICU Monitoring Equipment'],

  levels: {
    1: {
      level: 1,
      summary: 'The ICU is a special part of the hospital where very sick patients get extra care with machines that help monitor and support their bodies.',
      explanation: `## What is the ICU?

The ICU (Intensive Care Unit) is a special area in the hospital for people who are very sick and need close watching. Think of it as the hospital's most careful and watchful place.

**Why do people go to the ICU?**
- Their heart, lungs, or other organs need extra help
- They just had a big surgery
- They have a serious infection
- They need medicine that requires careful watching
- They need a machine to help them breathe

**What makes the ICU different?**
- More nurses for fewer patients (usually 1-2 patients per nurse)
- Doctors who specialize in critical care
- Lots of monitors and machines
- Visits may be limited to let patients rest

## Common Things You Will See

**Monitors**
- Heart monitor: Shows heartbeat as a wavy line on a screen
- Blood pressure cuff: Checks blood pressure automatically
- Oxygen sensor: A clip on the finger that measures oxygen in blood
- Thermometer: May be attached to check temperature often

**Tubes and Lines**
- IV lines: Small tubes in the arm or hand to give medicine and fluids
- Oxygen mask or nasal cannula: Helps deliver extra oxygen
- Foley catheter: A tube that collects urine so the body can be measured
- Feeding tube: May go through the nose to give nutrition

**Machines**
- Ventilator: A breathing machine for patients who cannot breathe on their own
- IV pumps: Control how fast medicine and fluids go into the body
- Compression boots: Squeeze the legs gently to prevent blood clots

## The ICU Team

Many people work together to care for ICU patients:
- **Intensivist**: A doctor specially trained in ICU care
- **ICU nurses**: Provide constant care and monitoring
- **Respiratory therapist**: Helps with breathing treatments
- **Pharmacist**: Makes sure medicines are safe and correct
- **Social worker**: Helps families with questions and support

**Tips for families:**
- Ask questions - the team wants to help you understand
- Take notes during updates
- Take care of yourself too - eat and rest
- One family member can be the main contact for updates`,
      keyTerms: [
        { term: 'ICU', definition: 'Intensive Care Unit - a special hospital area for very sick patients who need close monitoring' },
        { term: 'monitor', definition: 'A machine that watches and displays body functions like heart rate and blood pressure' },
        { term: 'ventilator', definition: 'A breathing machine that helps push air into the lungs' },
        { term: 'IV', definition: 'Intravenous - given through a small tube placed in a vein' },
        { term: 'intensivist', definition: 'A doctor who specializes in caring for very sick patients in the ICU' },
      ],
      analogies: [
        'The ICU is like mission control for the body - many screens showing different readings, with experts watching everything carefully.',
        'ICU monitors are like a fitness tracker for the whole body, but much more detailed and watched by trained professionals.',
        'The ventilator is like a gentle bellows that breathes for you when your lungs need rest.',
      ],
      examples: [
        'After heart surgery, a patient stays in the ICU where nurses can watch their heart rhythm on a monitor all the time.',
        'Someone with severe pneumonia might need the ICU because they need oxygen levels checked constantly.',
      ],
    },

    2: {
      level: 2,
      summary: 'The ICU provides intensive monitoring and organ support through specialized equipment including cardiac monitors, ventilators, and infusion pumps, managed by a multidisciplinary team of critical care specialists.',
      explanation: `## Understanding the ICU Environment

The Intensive Care Unit is designed for patients requiring close monitoring and immediate access to life-sustaining interventions. Key features include:

**Structural Design**
- Individual patient rooms or bays with curtain separation
- Central nursing station with visible monitors
- Immediate access to emergency equipment
- Controlled traffic and infection prevention measures
- Low nurse-to-patient ratios (typically 1:1 or 1:2)

**Types of ICUs**
| ICU Type | Primary Focus |
|----------|---------------|
| MICU | Medical conditions (pneumonia, sepsis, organ failure) |
| SICU | Post-surgical care |
| CCU/CICU | Heart problems and cardiac surgery |
| NICU | Newborn babies |
| PICU | Children |
| Neuro ICU | Brain and nervous system conditions |
| Burn ICU | Severe burn injuries |

## Essential Monitoring Equipment

**Cardiac Monitoring**
- Continuous ECG: 3-lead or 5-lead electrodes on chest
- Displays heart rate, rhythm, and detects arrhythmias
- Alarm settings for dangerous rhythms

**Hemodynamic Monitoring**
- Arterial line (A-line): Catheter in artery for continuous blood pressure and blood draws
- Central venous catheter (central line): Large IV in neck, chest, or groin for medications and pressure monitoring
- Pulse oximetry: Clip sensor measuring oxygen saturation (SpO2)

**Respiratory Monitoring**
- End-tidal CO2 (capnography): Measures carbon dioxide in exhaled breath
- Ventilator readings: Pressures, volumes, oxygen levels

**Intake and Output Tracking**
- All fluids given (IV, feeding tube) and eliminated (urine, drains) are measured
- Helps assess kidney function and fluid balance

## Common ICU Equipment

**Ventilators and Airway Equipment**
- Mechanical ventilator: Delivers controlled breaths
- Endotracheal tube: Tube through mouth into windpipe
- Tracheostomy: Tube directly into windpipe through neck (for longer ventilation needs)

**Circulatory Support**
- IV pumps: Precisely control medication and fluid rates
- Sequential compression devices (SCDs): Prevent blood clots in legs
- Temporary pacemaker: Controls heart rhythm if needed

**Renal Support**
- Continuous dialysis machine (CRRT): Filters blood if kidneys fail
- Foley catheter: Measures exact urine output

## The ICU Care Team

**Core Team Members**
- **Intensivist/Critical Care Physician**: Leads medical decision-making
- **ICU Nurses**: Provide bedside care, monitor patients, administer medications
- **Respiratory Therapists (RTs)**: Manage ventilators and breathing treatments
- **Clinical Pharmacist**: Reviews medications for interactions and appropriate dosing

**Extended Team**
- Consulting specialists (cardiologist, nephrologist, surgeon)
- Physical and occupational therapists
- Dietitian/nutritionist
- Social worker and case manager
- Chaplain/spiritual care

**Family Communication**
- Daily rounds: Often include family updates
- Designated family spokesperson recommended
- Ask about visiting hours and policies
- Request explanations of any procedures`,
      keyTerms: [
        { term: 'arterial line', definition: 'A catheter placed in an artery for continuous blood pressure monitoring and frequent blood draws', pronunciation: 'ar-TEER-ee-al' },
        { term: 'central venous catheter', definition: 'A large IV catheter placed in a major vein (neck, chest, or groin) for medications and monitoring' },
        { term: 'pulse oximetry', definition: 'Non-invasive measurement of oxygen saturation in the blood using a finger clip sensor' },
        { term: 'capnography', definition: 'Monitoring of carbon dioxide levels in exhaled breath', pronunciation: 'kap-NOG-ra-fee' },
        { term: 'CRRT', definition: 'Continuous Renal Replacement Therapy - slow, continuous dialysis for kidney failure in ICU' },
      ],
      analogies: [
        'An arterial line is like having a direct window into the bloodstream, showing pressure changes with every heartbeat.',
        'IV pumps are like precision water faucets that can be set to deliver exact amounts of fluid drop by drop.',
      ],
      clinicalNotes: 'Arterial lines are typically placed in the radial artery (wrist) but can also use femoral or brachial arteries. Central lines require sterile technique and carry risks of infection and pneumothorax.',
    },

    3: {
      level: 3,
      summary: 'ICU care integrates advanced hemodynamic monitoring, ventilatory support, and organ-specific therapies delivered by an interdisciplinary team using evidence-based protocols for common critical illnesses.',
      explanation: `## ICU Organization and Staffing Models

### Intensivist Staffing Models

**Open ICU**
- Primary physician manages patient with ICU consultation
- Less consistent critical care oversight

**Closed ICU**
- Intensivist assumes primary care responsibility
- Associated with improved outcomes (Pronovost et al.)
- Mandatory intensivist presence or co-management

**High-Intensity Staffing**
- 24/7 in-house intensivist coverage
- Reduces mortality compared to low-intensity models

### Nursing Ratios and Skill Mix
- 1:1 ratio for unstable patients (shock, codes, procedures)
- 1:2 ratio for stable ICU patients
- Advanced practice providers (NPs/PAs) extend physician coverage

## Advanced Monitoring Systems

### Hemodynamic Monitoring Hierarchy

**Non-invasive**
- Cuff blood pressure (intermittent)
- Pulse oximetry (SpO2)
- Non-invasive cardiac output (bioreactance, pulse contour)

**Invasive**
| Device | Measures | Indications |
|--------|----------|-------------|
| Arterial line | MAP, waveform, ABG access | Shock, vasoactive drugs, frequent labs |
| CVP line | Central venous pressure | Fluid status, medication delivery |
| PA catheter | PA pressures, PCWP, CO, SvO2 | Cardiogenic shock, complex hemodynamics |

### Cardiac Output Monitoring Methods

**Thermodilution (PA catheter)**
- Gold standard for CO measurement
- Injects cold saline, measures temperature change

**Pulse Contour Analysis (PiCCO, FloTrac)**
- Derives CO from arterial waveform
- Requires calibration (PiCCO) or algorithm (FloTrac)
- Continuous trending

**Echocardiography**
- VTI and LVOT diameter for CO calculation
- Assesses volume status, cardiac function

### Respiratory Monitoring

**Ventilator Parameters**
- Tidal volume, respiratory rate, FiO2
- Peak pressure vs plateau pressure (driving pressure)
- PEEP and auto-PEEP
- Compliance and resistance calculations

**Oxygenation Assessment**
- PaO2/FiO2 ratio (P/F ratio): <300 = ALI, <200 = ARDS
- SpO2 target: Usually 92-96% (higher in some conditions)
- A-a gradient calculation

## Organ Support Technologies

### Renal Replacement Therapy

**Modalities**
- Intermittent hemodialysis (IHD): 3-4 hours, higher clearance
- CRRT: Continuous 24h, better hemodynamic tolerance
- SLED: Hybrid approach (6-12 hours)

**CRRT Modes**
- CVVH: Convective clearance
- CVVHD: Diffusive clearance
- CVVHDF: Combined

### Extracorporeal Membrane Oxygenation (ECMO)

**VV-ECMO (Veno-venous)**
- Respiratory support only
- Drains and returns blood to venous system
- Indications: Severe ARDS, bridge to lung transplant

**VA-ECMO (Veno-arterial)**
- Both cardiac and respiratory support
- Drains from vein, returns oxygenated blood to artery
- Indications: Cardiogenic shock, cardiac arrest, post-cardiotomy

## ICU Protocols and Bundles

### Ventilator Bundle (Prevents VAP)
- Head of bed elevation 30-45°
- Daily sedation interruption and assessment of readiness to extubate
- Peptic ulcer prophylaxis
- DVT prophylaxis
- Oral care with chlorhexidine

### Sepsis Bundle
- Early recognition (screening)
- Blood cultures before antibiotics
- Broad-spectrum antibiotics within 1 hour
- Lactate measurement
- Fluid resuscitation (30 mL/kg)
- Vasopressors for hypotension after fluids

### ABCDEF Bundle (ICU Liberation)
- **A**ssess, prevent, and manage pain
- **B**oth spontaneous awakening and breathing trials
- **C**hoice of sedation and analgesia
- **D**elirium assessment and management
- **E**arly mobility
- **F**amily engagement`,
      keyTerms: [
        { term: 'PA catheter', definition: 'Pulmonary artery (Swan-Ganz) catheter for measuring cardiac output and pulmonary pressures', pronunciation: 'pul-MON-ary AR-ter-ee' },
        { term: 'P/F ratio', definition: 'PaO2 to FiO2 ratio; measure of oxygenation efficiency (<200 defines ARDS)' },
        { term: 'ECMO', definition: 'Extracorporeal Membrane Oxygenation - machine that oxygenates blood outside the body', pronunciation: 'ECK-moh' },
        { term: 'VAP', definition: 'Ventilator-Associated Pneumonia - lung infection occurring in ventilated patients' },
        { term: 'ABCDEF bundle', definition: 'Evidence-based bundle for ICU liberation focusing on pain, sedation, delirium, mobility, and family' },
      ],
      clinicalNotes: 'High-intensity intensivist staffing is associated with reduced mortality and ICU length of stay. The ABCDEF bundle has been shown to reduce delirium, ventilator days, and readmissions when fully implemented.',
    },

    4: {
      level: 4,
      summary: 'Critical care medicine requires integration of advanced physiologic monitoring, evidence-based resuscitation strategies, and understanding of monitoring device limitations while maintaining focus on patient-centered outcomes.',
      explanation: `## Advanced Hemodynamic Concepts

### Frank-Starling Relationship in ICU

**Clinical Application**
- Fluid responsiveness ≠ fluid need
- Goal: Optimize preload without overload
- Steep part of curve: Fluid responsive
- Flat part of curve: Volume overloaded or maximal preload

**Dynamic Predictors of Fluid Responsiveness**
| Parameter | Threshold | Limitations |
|-----------|-----------|-------------|
| Pulse Pressure Variation (PPV) | >13% | Requires controlled ventilation, sinus rhythm |
| Stroke Volume Variation (SVV) | >10-12% | Same as PPV |
| Passive Leg Raise (PLR) | >10% CO increase | Requires CO monitoring |
| IVC Distensibility Index | >18% | Operator dependent, not in spontaneous breathing |

**Static Parameters (Less Predictive)**
- CVP: Poor predictor of fluid responsiveness
- PCWP: Subject to measurement error
- Should not be used alone for fluid decisions

### Interpretation of PA Catheter Data

**Normal Values**
| Parameter | Normal Range |
|-----------|--------------|
| CVP | 2-8 mmHg |
| PA systolic/diastolic | 15-30/4-12 mmHg |
| PCWP | 6-12 mmHg |
| Cardiac output | 4-8 L/min |
| Cardiac index | 2.5-4.0 L/min/m² |
| SVR | 800-1200 dynes·s/cm⁵ |
| SvO2 | 65-75% |

**Hemodynamic Profiles**
| Condition | PCWP | CO | SVR |
|-----------|------|-----|-----|
| Cardiogenic shock | ↑↑ | ↓↓ | ↑↑ |
| Hypovolemic shock | ↓↓ | ↓ | ↑ |
| Distributive shock | ↓/N | ↑/N | ↓↓ |
| Obstructive shock | Variable | ↓ | ↑ |

### Ventricular-Arterial Coupling
- Ea (arterial elastance) / Ees (ventricular elastance)
- Optimal coupling: Ea/Ees ≈ 1
- Uncoupling in heart failure, sepsis

## Advanced Respiratory Monitoring

### Ventilator Waveform Analysis

**Flow-Time Curves**
- Incomplete exhalation = auto-PEEP
- Secretions = sawtooth pattern

**Pressure-Time Curves**
- Difference between peak and plateau = airway resistance
- Rising plateau = auto-PEEP or patient-ventilator asynchrony

**Pressure-Volume Loops**
- Hysteresis normal
- "Beaking" = overdistension
- Lower inflection point = recruitment potential

### Driving Pressure Concept

**Definition**: Plateau pressure - PEEP = VT / Compliance

**Clinical Significance**
- Better predictor of mortality than VT alone (Amato 2015)
- Target: <15 cmH2O
- Reflects lung injury severity

### Esophageal Pressure Monitoring

**Applications**
- Estimates pleural pressure
- Calculates transpulmonary pressure (Paw - Pes)
- Guides PEEP titration in ARDS
- Identifies patient effort (P0.1)

## Technology Limitations and Pitfalls

### Arterial Line Considerations
- Overdamping: Flattened waveform, underestimates systolic
- Underdamping: Ringing artifact, overestimates systolic
- Allen's test before radial placement (collateral flow)

### Pulse Oximetry Limitations
- Poor signal: Hypothermia, vasoconstriction, motion
- Falsely elevated: CO poisoning, methemoglobinemia
- Falsely low: Dark nail polish, melanin (older devices), motion artifact
- Lag time: 30-60 seconds behind arterial changes

### Capnography Interpretation
- ETCO2 ≈ PaCO2 - 2-5 mmHg (healthy lungs)
- Increased gradient: Dead space (PE, ARDS, hypotension)
- Waveform changes: Bronchospasm, circuit leak, esophageal intubation

## Quality and Safety in Critical Care

### High Reliability Principles
- Preoccupation with failure
- Reluctance to simplify
- Sensitivity to operations
- Commitment to resilience
- Deference to expertise

### ICU Safety Bundles
- Central line insertion bundle (CLABSIs)
- Ventilator bundle (VAP)
- Catheter bundle (CAUTIs)
- Early mobility protocol
- Handoff standardization (I-PASS)

### ICU Acquired Conditions
- ICU-acquired weakness (CIM, CIP)
- Delirium (CAM-ICU screening)
- PTSD and post-ICU syndrome (PICS)
- Pressure injuries
- Hospital-acquired infections`,
      keyTerms: [
        { term: 'driving pressure', definition: 'Plateau pressure minus PEEP; reflects stress applied to lung parenchyma and predicts mortality in ARDS' },
        { term: 'fluid responsiveness', definition: 'Likelihood that cardiac output will increase with fluid administration; does not indicate fluid necessity' },
        { term: 'transpulmonary pressure', definition: 'Pressure across the lung (airway pressure minus pleural pressure); true distending pressure' },
        { term: 'SvO2', definition: 'Mixed venous oxygen saturation; reflects balance between oxygen delivery and consumption' },
        { term: 'ICU-acquired weakness', definition: 'Neuromuscular weakness developing during critical illness from CIM (myopathy) or CIP (polyneuropathy)' },
      ],
      clinicalNotes: 'Driving pressure <15 cmH2O is associated with improved survival in ARDS. Dynamic indices (PPV, SVV) require controlled mechanical ventilation and regular rhythm to be valid. CVP should not be used alone to guide fluid therapy.',
    },

    5: {
      level: 5,
      summary: 'Expert-level ICU practice integrates physiologic monitoring with outcomes research, quality improvement science, and systems-based approaches to optimize care delivery while navigating resource constraints and ethical challenges.',
      explanation: `## Evidence Base for ICU Practices

### Landmark ICU Trials

**Fluid Management**
- FACTT (2006): Conservative fluid strategy in ARDS improved lung function, shorter ventilation
- CLASSIC (2022): Restrictive fluids in septic shock non-inferior to standard
- CLOVERS (2023): Restrictive vs liberal fluids in sepsis - no mortality difference

**Hemodynamic Monitoring**
- PAC-Man (2005): PA catheter did not improve outcomes vs CVP
- ESCAPE (2005): PA catheter in heart failure - no mortality benefit
- Implications: Monitoring device ≠ better outcomes; what you do with data matters

**Sedation and Delirium**
- SLEAP (2012): Dexmedetomidine reduced delirium vs midazolam
- SPICE III (2019): Dexmedetomidine vs usual sedation - no mortality difference, more hypotension
- MENDS2 (2021): Dexmedetomidine vs propofol in sepsis - no delirium difference

**Nutrition**
- EDEN (2012): Trophic vs full feeds early - no difference
- PermiT (2015): Permissive underfeeding - no benefit
- CALORIES (2014): Parenteral vs enteral - no mortality difference

### Current Controversies

**Restrictive vs Liberal Transfusion**
- TRICC (1999): Restrictive (Hb 7) non-inferior
- TRISS (2014): Confirmed in septic shock
- Exception: Active hemorrhage, ACS

**Tight Glycemic Control**
- NICE-SUGAR (2009): Intensive control increased mortality
- Current target: 140-180 mg/dL for most ICU patients

**Corticosteroids in Sepsis**
- APROCCHSS (2018): Hydrocortisone + fludrocortisone reduced mortality
- ADRENAL (2018): Hydrocortisone alone - no mortality benefit
- Practice: Consider in refractory shock

## Systems Engineering in Critical Care

### Alarm Fatigue Mitigation
- 85-99% of alarms non-actionable
- Strategies: Alarm customization, delay settings, prioritization
- Smart alarms: Integrated multi-parameter alerts

### Telemedicine ICU (eICU)
- Remote intensivist coverage
- May improve mortality in hospitals without 24/7 coverage
- Best as supplement, not replacement for bedside care

### Decision Support Systems
- Early warning scores (NEWS, MEWS)
- Sepsis prediction algorithms
- AI/ML applications: Deterioration detection, outcome prediction

## Resource Stewardship

### ICU Capacity and Triage
- ICU admission criteria: Need for monitoring AND intervention
- Step-down considerations: Stable, predictable trajectory
- Triage scoring: APACHE, SOFA, MPM

**Triage Frameworks**
- First-come, first-served
- Sickest first
- Maximum lives saved (utilitarian)
- Priority to those most likely to benefit

### High-Value Care Practices
- Avoid routine daily labs in stable patients
- Limit unnecessary imaging
- Evidence-based transfusion thresholds
- Daily review of catheter necessity
- Question ongoing vasoactive/sedative doses

### End-of-Life in ICU
- 20% of deaths occur in ICU
- Early goals of care discussions improve outcomes
- Palliative care integration
- Transition from aggressive to comfort care

## Quality Improvement Methodology

### Key Quality Metrics
| Metric | Target |
|--------|--------|
| ICU mortality | Case-mix adjusted |
| Ventilator days | Minimize |
| CLABSI rate | Zero harm goal |
| VAP rate | Zero harm goal |
| ICU LOS | Benchmark adjusted |
| Readmission within 48h | Minimize |

### Improvement Frameworks
- Plan-Do-Study-Act (PDSA) cycles
- Lean methodology: Waste reduction
- Six Sigma: Variation reduction
- High Reliability Organization (HRO) principles

### Implementation Science
- Bundles: All-or-none implementation
- Checklists: Surgical Safety Checklist model
- Daily goals sheet
- Multidisciplinary rounds
- Real-time feedback and dashboards

## Ethical Frameworks

### Common ICU Ethical Dilemmas
1. Withdrawal vs withholding of life support
2. Surrogate decision-making conflicts
3. Resource allocation during scarcity
4. Medical futility determinations
5. Brain death and organ donation

### Decision-Making Frameworks
- Shared decision-making model
- Substituted judgment for incapacitated patients
- Best interest standard when wishes unknown
- Ethics consultation availability

### Legal Considerations
- Advance directives and POLST
- Healthcare proxy/durable power of attorney
- State-specific laws on death determination
- Documentation requirements

### Burnout and Moral Distress
- ICU clinician burnout rates: 50-70%
- Sources: Moral distress, workload, lack of control
- Interventions: Debriefing, mental health support, workflow optimization`,
      keyTerms: [
        { term: 'APACHE', definition: 'Acute Physiology and Chronic Health Evaluation - severity scoring system for ICU outcome prediction' },
        { term: 'alarm fatigue', definition: 'Desensitization to clinical alarms due to excessive false/non-actionable alerts' },
        { term: 'bundle', definition: 'Set of evidence-based interventions implemented together for synergistic benefit' },
        { term: 'medical futility', definition: 'Treatment that has no reasonable chance of achieving intended goals' },
        { term: 'moral distress', definition: 'Psychological distress from being unable to act according to one\'s ethical beliefs' },
      ],
      clinicalNotes: `Expert practice points:
1. Monitoring devices do not improve outcomes - interventions based on data matter
2. Bundle compliance must be all-or-none to achieve mortality benefits
3. Early goals of care discussions reduce ICU utilization without affecting survival in appropriate populations
4. Alarm fatigue is a patient safety issue - customize and rationalize alarms
5. Quality improvement in ICU requires multidisciplinary engagement and real-time data feedback`,
    },
  },

  media: [
    {
      id: 'icu-monitoring-overview',
      type: 'diagram',
      filename: 'icu-monitoring-overview.svg',
      title: 'ICU Patient Monitoring Overview',
      description: 'Diagram showing common monitoring equipment attached to an ICU patient',
    },
    {
      id: 'hemodynamic-profiles',
      type: 'diagram',
      filename: 'hemodynamic-profiles.svg',
      title: 'Hemodynamic Profiles in Shock',
      description: 'Comparison of hemodynamic parameters across different shock types',
    },
  ],

  citations: [
    {
      id: 'sccm-icu-guidelines',
      type: 'website',
      title: 'ICU Clinical Practice Guidelines',
      source: 'Society of Critical Care Medicine',
      url: 'https://www.sccm.org/Clinical-Resources/Guidelines',
      accessedDate: '2026-01-24',
    },
    {
      id: 'pinsky-hemodynamics',
      type: 'textbook',
      title: 'Hemodynamic Monitoring',
      authors: ['Pinsky, M.R.', 'Payen, D.'],
      source: 'Springer',
      chapter: 'Functional Hemodynamic Monitoring',
    },
  ],

  crossReferences: [
    { targetId: 'critical-care-mechanical-ventilation', targetType: 'topic', relationship: 'related', label: 'Mechanical Ventilation' },
    { targetId: 'critical-care-shock-management', targetType: 'topic', relationship: 'related', label: 'Shock Management' },
    { targetId: 'critical-care-sedation-pain', targetType: 'topic', relationship: 'related', label: 'ICU Sedation' },
    { targetId: 'critical-care-family-communication', targetType: 'topic', relationship: 'see-also', label: 'Family Communication' },
  ],

  tags: {
    systems: ['critical-care', 'monitoring'],
    topics: ['intensive care', 'patient monitoring', 'ICU equipment', 'critical care team'],
    keywords: ['ICU', 'intensive care', 'ventilator', 'arterial line', 'cardiac monitor', 'ECMO', 'hemodynamics'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'emergency medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default icuBasicsAndEquipment;
