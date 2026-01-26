/**
 * Surgical Complications
 *
 * Comprehensive content on potential surgical complications, recognition,
 * prevention, and when to seek medical attention.
 */

import { EducationalContent } from '../types';

export const surgicalComplications: EducationalContent = {
  id: 'surgery-complications',
  type: 'concept',
  name: 'Surgical Complications',
  alternateNames: ['Post-Operative Complications', 'Surgery Risks', 'Adverse Surgical Events'],

  levels: {
    1: {
      level: 1,
      summary: 'While surgery helps fix problems, sometimes things can go wrong. Knowing the warning signs helps you get help quickly if needed.',
      explanation: `Surgery is generally safe, but like any medical treatment, problems can sometimes happen. These are called complications. Knowing what to watch for helps keep you safe.

**Common Problems After Surgery:**

**1. Infection:**
- Germs can get into your wound
- Signs: Fever, redness spreading around wound, yellow/green discharge, increasing pain
- Prevention: Keep wound clean and dry

**2. Bleeding:**
- Some bleeding is normal, but too much is a problem
- Signs: Blood soaking through bandages, bruising that keeps growing, feeling weak or dizzy
- Tell your doctor right away if bleeding does not stop

**3. Blood Clots:**
- Blood can form clots in your legs that are dangerous
- Signs: Swelling, pain, warmth, or redness in one leg
- Prevention: Walking and moving after surgery

**4. Breathing Problems:**
- Lungs can have trouble after anesthesia
- Signs: Trouble breathing, chest pain, cough with fever
- Prevention: Deep breathing exercises, walking

**5. Wound Not Healing:**
- Sometimes the surgical cut does not heal properly
- Signs: Wound opening up, edges pulling apart

**When to Call Your Doctor:**
- Fever over 101 F (38.3 C)
- Increasing pain not helped by medicine
- Heavy bleeding
- Trouble breathing
- Red, swollen, or leaking wound
- Leg pain or swelling (especially one leg)
- Cannot urinate
- Chest pain

**When to Call 911:**
- Severe trouble breathing
- Chest pain
- Confusion or passing out
- Heavy uncontrolled bleeding

**Remember:** Most surgeries go well without problems. Your medical team does everything possible to prevent complications and is ready to help if any occur.`,
      keyTerms: [
        { term: 'complication', definition: 'A problem that happens because of surgery or treatment' },
        { term: 'infection', definition: 'When germs get into your body and cause problems' },
        { term: 'blood clot', definition: 'When blood thickens and forms a lump that can block blood flow' },
        { term: 'warning sign', definition: 'Something your body shows you that means there might be a problem' },
      ],
      analogies: [
        'Complications are like problems that can happen on a road trip - most trips go smoothly, but it helps to know what to do if something goes wrong.',
        'Warning signs are like dashboard lights in a car - they tell you something needs attention.',
      ],
      examples: [
        'If your surgical wound becomes more red and painful after a few days instead of getting better, this could mean infection.',
        'If one leg becomes swollen and painful while the other is fine, this could be a blood clot and needs immediate attention.',
      ],
    },
    2: {
      level: 2,
      summary: 'Surgical complications include infection, hemorrhage, thromboembolic events, pulmonary issues, and wound complications, each with specific risk factors, signs, and preventive measures.',
      explanation: `## Classification of Surgical Complications

### By Timing

**Immediate (0-24 hours):**
- Hemorrhage
- Anesthetic complications
- Airway problems
- Cardiovascular instability

**Early (1-7 days):**
- Surgical site infection (early signs)
- Deep vein thrombosis
- Pulmonary embolism
- Ileus
- Urinary retention

**Late (>7 days):**
- Deep surgical site infection
- Anastomotic leak
- Incisional hernia
- Chronic pain

### Major Complications

**1. Surgical Site Infection (SSI)**

| Type | Depth | Timing | Signs |
|------|-------|--------|-------|
| Superficial | Skin only | Days 5-10 | Redness, pus |
| Deep | Muscle/fascia | Days 5-30 | Fever, wound breakdown |
| Organ/space | Body cavity | Days 5-30 | Fever, sepsis signs |

**Risk Factors:**
- Diabetes
- Obesity
- Smoking
- Immunosuppression
- Long surgery
- Emergency surgery

**2. Hemorrhage**

**Types:**
- Primary: During surgery
- Reactionary: Within 24 hours (often BP normalization reveals bleeding)
- Secondary: Days later (often from infection eroding vessels)

**Signs:**
- Tachycardia (fast heart rate)
- Low blood pressure
- Visible bleeding or swelling
- Dropping hemoglobin
- Dizziness, confusion

**3. Venous Thromboembolism (VTE)**

**Deep Vein Thrombosis (DVT):**
- Usually in leg veins
- Signs: Unilateral leg swelling, pain, warmth
- Risk: Can travel to lungs (PE)

**Pulmonary Embolism (PE):**
- Blood clot in lungs
- Signs: Sudden shortness of breath, chest pain, coughing blood
- Life-threatening emergency

**Prevention:**
- Early mobilization
- Compression devices (SCDs)
- Blood thinners (when appropriate)
- Hydration

**4. Pulmonary Complications**

| Complication | Cause | Signs |
|--------------|-------|-------|
| Atelectasis | Shallow breathing | Fever (low-grade), decreased breath sounds |
| Pneumonia | Bacteria, aspiration | Fever, productive cough, dyspnea |
| Aspiration | Stomach contents inhaled | Sudden respiratory distress |

**Prevention:**
- Incentive spirometry
- Deep breathing
- Early ambulation
- Adequate pain control

**5. Wound Complications**

| Problem | Description | Management |
|---------|-------------|------------|
| Seroma | Fluid collection | Usually resolves; may need drainage |
| Hematoma | Blood collection | May need surgical evacuation |
| Dehiscence | Wound opens | Re-closure, wound care |
| Evisceration | Organs visible | Emergency surgery |

### Other Complications

**Ileus:**
- Bowel stops working temporarily
- Signs: No bowel sounds, nausea, vomiting, bloating
- Usually resolves with time, NPO, IV fluids

**Urinary Retention:**
- Cannot urinate after surgery
- Common after pelvic surgery, spinal anesthesia
- Treatment: Bladder catheter

**Delirium:**
- Confusion, especially in elderly
- Risk factors: Age, cognitive impairment, surgery type
- Prevention: Orientation, sleep hygiene, avoid sedatives

## Recognizing Serious Complications

**When to Seek Immediate Care:**
- Fever >101.5 F (38.6 C)
- Unilateral leg swelling
- Shortness of breath or chest pain
- Wound opening with visible tissue
- Heavy bleeding
- Signs of infection spreading (red streaks)`,
      keyTerms: [
        { term: 'SSI', definition: 'Surgical Site Infection - infection at or near the surgical incision' },
        { term: 'DVT', definition: 'Deep Vein Thrombosis - blood clot in a deep vein, usually in the leg' },
        { term: 'PE', definition: 'Pulmonary Embolism - blood clot in the lungs; life-threatening' },
        { term: 'dehiscence', definition: 'When a surgical wound opens up', pronunciation: 'dee-HISS-ence' },
        { term: 'ileus', definition: 'Temporary pause in normal bowel movement after surgery', pronunciation: 'ILL-ee-us' },
      ],
    },
    3: {
      level: 3,
      summary: 'Surgical complications are classified by Clavien-Dindo severity, with prevention strategies based on risk stratification, evidence-based bundles, and early recognition systems.',
      explanation: `## Complication Classification

### Clavien-Dindo Classification

| Grade | Definition | Examples |
|-------|------------|----------|
| I | Any deviation from normal course, no treatment needed | Ileus, wound infection requiring bedside care |
| II | Pharmacological treatment required | Antibiotics for UTI, transfusion |
| IIIa | Intervention under local anesthesia | Wound opening, drain placement |
| IIIb | Intervention under general anesthesia | Return to OR for hemorrhage |
| IVa | Single organ dysfunction requiring ICU | Respiratory failure, dialysis |
| IVb | Multiorgan dysfunction | MOF requiring ICU |
| V | Death | - |

### Comprehensive Complication Analysis

## Surgical Site Infection (SSI)

**Classification (CDC):**
- **Superficial incisional**: Within 30 days, involves skin/subcutaneous only
- **Deep incisional**: Within 30 days (or 90 days with implant), involves fascia/muscle
- **Organ/space**: Within 30 days (or 90 days with implant), involves any organ manipulated

**Microbiology:**
| Surgery Type | Common Organisms |
|--------------|------------------|
| Clean | S. aureus, coagulase-negative staph |
| Clean-contaminated | Mixed (gram-positive + gram-negative) |
| Contaminated | Gram-negatives, anaerobes |
| Dirty | Polymicrobial |

**Prevention Bundle (SCIP):**
1. Appropriate antibiotic within 60 minutes of incision
2. Correct antibiotic selection
3. Discontinue within 24 hours (48h cardiac)
4. Hair removal with clippers (not razor)
5. Glucose control (<180 mg/dL perioperatively)
6. Normothermia (≥36°C)

## Venous Thromboembolism

**Pathophysiology (Virchow's Triad):**
1. Venous stasis (immobility)
2. Endothelial injury (surgery)
3. Hypercoagulability (surgery stress response)

**Risk Stratification:**

| Risk Level | Caprini Score | DVT Risk | PE Risk |
|------------|---------------|----------|---------|
| Very low | 0-1 | <0.5% | <0.1% |
| Low | 2 | 1.5% | 0.2% |
| Moderate | 3-4 | 3% | 0.4% |
| High | ≥5 | 6% | 0.9% |

**Prophylaxis Options:**
- Mechanical: SCDs, graduated compression stockings
- Pharmacologic: UFH 5000u SC q8-12h, enoxaparin 40mg SC daily, fondaparinux 2.5mg SC daily

**Duration:**
- Standard: Until full ambulation
- Extended (28 days): Major abdominal/pelvic cancer surgery, hip/knee arthroplasty

## Anastomotic Leak

**Risk Factors:**
| Patient | Technical | Surgical |
|---------|-----------|----------|
| Malnutrition | Tension | Emergency |
| Steroids | Poor blood supply | Contamination |
| Diabetes | Technical error | Long operation |
| Smoking | Inadequate bowel prep | Blood transfusion |

**Presentation:**
- Early: Fever, tachycardia, abdominal pain (days 3-7)
- Peritonitis signs: Guarding, rigidity, rebound
- May be subtle: Delayed bowel function, confusion

**Diagnosis:**
- CT with oral/rectal contrast
- Drain output (amylase if upper GI)
- Clinical suspicion

**Management:**
- Contained leak: Antibiotics, drainage, bowel rest
- Free leak: Operative intervention
- Sepsis: Resuscitation, source control

## Hemorrhage

**Classification by Volume:**
| Class | Blood Loss | Heart Rate | BP | Mental Status |
|-------|------------|------------|-----|---------------|
| I | <750 mL (<15%) | <100 | Normal | Normal |
| II | 750-1500 mL (15-30%) | 100-120 | Normal | Anxious |
| III | 1500-2000 mL (30-40%) | 120-140 | Decreased | Confused |
| IV | >2000 mL (>40%) | >140 | Decreased | Lethargic |

**Management:**
1. Resuscitation (crystalloid, blood products)
2. Identify source (imaging, exploration)
3. Control (surgical, interventional radiology)
4. Correct coagulopathy

## Acute Kidney Injury (AKI)

**KDIGO Staging:**
| Stage | Creatinine | Urine Output |
|-------|------------|--------------|
| 1 | ↑1.5-1.9x or ≥0.3 mg/dL | <0.5 mL/kg/h x 6-12h |
| 2 | ↑2.0-2.9x | <0.5 mL/kg/h x ≥12h |
| 3 | ↑≥3x or ≥4.0 mg/dL or RRT | <0.3 mL/kg/h x ≥24h or anuria x12h |

**Prevention:**
- Avoid hypotension
- Avoid nephrotoxins (NSAIDs, aminoglycosides, contrast)
- Maintain euvolemia
- Glucose control

## Pulmonary Complications

**Risk Stratification (ARISCAT):**
- Age
- SpO2 preoperatively
- Respiratory infection in last month
- Anemia
- Surgical incision site
- Duration of surgery
- Emergency surgery

**Prevention:**
- Incentive spirometry (10 breaths q1-2h)
- Early ambulation
- Adequate analgesia (allows deep breathing)
- Head of bed elevation
- Aspiration precautions`,
      keyTerms: [
        { term: 'Clavien-Dindo', definition: 'Standardized classification system for surgical complications based on treatment required' },
        { term: 'SCIP', definition: 'Surgical Care Improvement Project - quality measures for SSI prevention' },
        { term: 'Virchow triad', definition: 'Three factors predisposing to venous thrombosis: stasis, endothelial injury, hypercoagulability' },
        { term: 'anastomotic leak', definition: 'Failure of surgical connection between two hollow organs, allowing contents to spill' },
        { term: 'ARISCAT', definition: 'Assess Respiratory Risk in Surgical Patients in Catalonia - pulmonary complication risk score' },
      ],
      clinicalNotes: 'Anastomotic leak after colorectal surgery occurs in 3-10% of cases; rates are higher for low rectal anastomoses. Clinical suspicion should prompt CT with contrast even if labs are unremarkable.',
    },
    4: {
      level: 4,
      summary: 'Advanced complication management integrates standardized definitions, quality metrics, failure-to-rescue analysis, and systems-based prevention with early warning and rapid response protocols.',
      explanation: `## Quality Metrics and Reporting

### NSQIP Outcome Definitions

**Major Complications:**
- Superficial SSI
- Deep SSI
- Organ/space SSI
- Wound dehiscence
- Pneumonia
- Unplanned intubation
- Pulmonary embolism
- Ventilator >48h
- Progressive renal insufficiency
- Acute renal failure
- UTI
- CVA
- Cardiac arrest
- MI
- DVT
- Sepsis/septic shock
- Return to OR
- Death

**Composite Metrics:**
- Any complication
- Serious complication
- Major adverse cardiovascular event (MACE)

### Failure to Rescue

**Concept:** Death after potentially treatable complication

**Formula:**
\`\`\`
FTR = Deaths with complication / All patients with complication
\`\`\`

**Key Drivers:**
| Factor | Impact |
|--------|--------|
| Hospital volume | Lower volume = higher FTR |
| ICU staffing | 24/7 intensivist = lower FTR |
| Nurse-to-patient ratio | Higher ratios = lower FTR |
| Early warning systems | Faster escalation |
| Rapid response teams | Earlier intervention |

**Implications:**
- Some hospitals have similar complication rates but different mortality
- Focus on rescuing from complications, not just prevention
- Quality improvement target

## Sepsis in Surgical Patients

### Definitions (Sepsis-3)

**Sepsis:**
- Infection + organ dysfunction (SOFA ≥2 from baseline)

**Septic Shock:**
- Sepsis + vasopressors to maintain MAP ≥65
- Lactate >2 mmol/L despite fluid resuscitation

### Surgical Source Control

**Principles:**
- Source identification
- Drainage of infected fluid collections
- Debridement of necrotic tissue
- Definitive correction of anatomic derangement

**Timing:**
- Source control within 6-12 hours improves outcomes
- Delay increases mortality

**Damage Control Surgery:**
- Abbreviated operation for physiologic derangement
- Resuscitation in ICU
- Return to OR when stable
- Indications: Acidosis, hypothermia, coagulopathy

## Specific Complication Management

### Massive Hemorrhage Protocol

**Activation Criteria:**
- Transfusion of ≥4 units PRBCs in 1 hour
- Anticipated need for massive transfusion
- Hemodynamic instability from hemorrhage

**Protocol:**
1. Activate MTP (Massive Transfusion Protocol)
2. Maintain permissive hypotension (MAP 50-65)
3. Transfuse 1:1:1 ratio (PRBC:FFP:platelets)
4. Control source (surgery, IR)
5. Correct hypothermia
6. Give TXA (within 3 hours)
7. Monitor with TEG/ROTEM
8. Calcium supplementation

### Pulmonary Embolism

**Clinical Decision Rules:**
- Wells Score: Estimates PE probability
- PERC: Rules out low-risk patients
- YEARS: Simplified algorithm

**Diagnosis:**
- D-dimer (rule out if low probability)
- CT pulmonary angiography (CTPA)
- V/Q scan (if contrast contraindicated)

**Risk Stratification:**
| Risk | PESI | Hemodynamics | RV Dysfunction | Troponin |
|------|------|--------------|----------------|----------|
| Low | I-II | Stable | No | No |
| Intermediate-low | III-IV | Stable | No | No |
| Intermediate-high | III-IV | Stable | Yes | Yes |
| High | - | Shock/hypotension | Yes | Yes |

**Treatment:**
- Anticoagulation (heparin, LMWH, DOAC)
- Thrombolysis (high-risk, select intermediate-high)
- Surgical embolectomy (refractory)
- IVC filter (contraindication to anticoagulation)

### Anastomotic Leak

**Grading:**
| Grade | Presentation | Management |
|-------|--------------|------------|
| A | No clinical symptoms | Observation |
| B | Clinical symptoms, manageable | Antibiotics, drainage, bowel rest |
| C | Sepsis, peritonitis | Operative intervention |

**Surgical Options:**
- Washout and drainage
- Revision of anastomosis
- Takedown with diversion (ostomy)
- Damage control

### Cardiac Complications

**Perioperative MI:**
- Often atypical presentation (no chest pain)
- Screen with troponin if at risk
- Risk factors: Known CAD, vascular surgery, diabetes

**Arrhythmias:**
- Atrial fibrillation most common (10-40% after cardiac surgery)
- Rate control first, then rhythm if needed
- Anticoagulation if sustained

## Prevention Frameworks

### SSI Prevention Bundle

**Evidence-Based Elements:**
1. Antimicrobial prophylaxis (timing, selection, duration)
2. Normothermia (≥36°C)
3. Glucose control (<180 mg/dL)
4. Appropriate hair removal (clippers)
5. FiO2 optimization (controversial)
6. Wound protectors (evidence emerging)
7. Chlorhexidine skin preparation

**Compliance Monitoring:**
- All-or-none bundle compliance
- Regular audits
- Feedback to surgical teams

### VTE Prevention

**Risk Assessment:**
- All patients at admission
- Reassess with clinical changes

**Contraindications to Pharmacologic Prophylaxis:**
- Active hemorrhage
- Recent intracranial hemorrhage
- Platelet <50,000
- Therapeutic anticoagulation

**Bridging for High-Risk:**
- Neuraxial anesthesia timing
- Procedure-specific protocols

### Early Warning and Rapid Response

**NEWS (National Early Warning Score):**
| Parameter | Score Range |
|-----------|-------------|
| Respiratory rate | 0-3 |
| SpO2 | 0-3 |
| Supplemental O2 | 0-2 |
| Temperature | 0-3 |
| Systolic BP | 0-3 |
| Heart rate | 0-3 |
| Consciousness | 0-3 |

**Response:**
- Score 5-6: Urgent clinical review
- Score ≥7 or single parameter 3: Emergency response

**Rapid Response Team:**
- Triggered by vital sign abnormalities or clinical concern
- ICU physician/nurse led
- Immediate assessment and intervention`,
      keyTerms: [
        { term: 'failure to rescue', definition: 'Death after potentially treatable complication; quality metric reflecting hospital response capability' },
        { term: 'SOFA', definition: 'Sequential Organ Failure Assessment - scoring system for organ dysfunction in sepsis' },
        { term: 'damage control surgery', definition: 'Abbreviated operation to control hemorrhage/contamination, with planned reoperation after resuscitation' },
        { term: 'MTP', definition: 'Massive Transfusion Protocol - standardized response to life-threatening hemorrhage with fixed-ratio blood products' },
        { term: 'NEWS', definition: 'National Early Warning Score - aggregate vital sign scoring to trigger clinical escalation' },
      ],
      clinicalNotes: 'Failure to rescue varies 3-fold between hospitals; focus on rescue capabilities beyond prevention alone. MTP with 1:1:1 ratio (PRBC:FFP:PLT) approximates whole blood and improves outcomes.',
    },
    5: {
      level: 5,
      summary: 'Contemporary complication management integrates predictive analytics, precision prevention, systems-based rescue infrastructure, and quality improvement science within value-based care frameworks.',
      explanation: `## Predictive Analytics

### Machine Learning for Complication Prediction

**Applications:**
| Complication | ML Approach | Performance |
|--------------|-------------|-------------|
| SSI | Random forest, neural network | AUC 0.75-0.85 |
| VTE | Gradient boosting | AUC 0.70-0.80 |
| Readmission | Various | AUC 0.65-0.75 |
| Mortality | Deep learning | AUC 0.80-0.90 |

**Key Features:**
- Preoperative labs and vital signs
- Comorbidity profiles
- Procedure characteristics
- Real-time intraoperative data

**Implementation Challenges:**
- Model validation across populations
- Integration into workflow
- Actionable thresholds
- Alert fatigue

### Dynamic Risk Assessment

**Continuous Monitoring:**
- Wearable vital signs
- Continuous glucose monitoring
- Activity tracking
- Wound sensors

**Real-Time Adjustment:**
- Intraoperative events update risk
- Postoperative trajectory influences predictions
- Adaptive prophylaxis protocols

## Systems-Based Prevention

### High-Reliability Organization Principles

**Key Concepts:**
1. Preoccupation with failure
2. Reluctance to simplify
3. Sensitivity to operations
4. Commitment to resilience
5. Deference to expertise

**Application to Surgery:**
- Surgical safety checklists
- Structured handoffs
- Near-miss reporting
- Root cause analysis
- Just culture

### Bundle Compliance and Sustainability

**Implementation Science:**
- Stakeholder engagement
- Education and training
- Process redesign
- Audit and feedback
- Culture change

**Sustainability Factors:**
- Leadership commitment
- Resource allocation
- Embedding in workflows
- Data-driven improvement

### SSI Prevention Innovation

**Emerging Strategies:**
| Strategy | Evidence |
|----------|----------|
| Negative pressure wound therapy | Strong for high-risk wounds |
| Wound protectors | Moderate for contaminated cases |
| Decolonization (MRSA screening/treatment) | Strong for high-risk |
| Triclosan-coated sutures | Moderate overall benefit |
| Gentamicin-collagen sponge | Limited evidence |
| Antibacterial incise drapes | Insufficient evidence |

**Personalized Prevention:**
- Genetic risk profiling
- Microbiome assessment
- Immune status evaluation
- Tailored antibiotic selection

## Quality Improvement

### NSQIP and Quality Programs

**Structure:**
- Risk-adjusted outcomes comparison
- Semiannual reports
- Best practices sharing
- Collaborative improvement

**Impact:**
- 25-50% reduction in mortality
- 15-25% reduction in complications
- Cost savings from avoided complications

### Complication Rescue Optimization

**Rescue Infrastructure:**
- 24/7 ICU staffing
- Rapid response teams
- Appropriate nurse-patient ratios
- Access to interventional radiology
- Experienced nursing care

**Process Improvement:**
- Standardized escalation pathways
- Structured communication (SBAR)
- Simulation training
- Debriefing after events

### Surgical Disparities

**Documented Differences:**
- Higher complication rates in minorities
- More failure to rescue
- Less rescue surgery utilization
- Delayed presentation

**Root Causes:**
- Access to high-quality hospitals
- Insurance status
- Social determinants
- Implicit bias

**Interventions:**
- Regionalization of complex surgery
- Navigator programs
- Bias training
- Quality transparency

## Value-Based Complication Prevention

### Cost of Complications

**Financial Impact:**
| Complication | Added Cost | Added LOS |
|--------------|------------|-----------|
| SSI | $20,000-$50,000 | 7-14 days |
| DVT/PE | $15,000-$30,000 | 5-7 days |
| Pneumonia | $15,000-$40,000 | 7-10 days |
| Anastomotic leak | $30,000-$80,000 | 10-14 days |
| Sepsis | $50,000-$100,000 | Variable |

**Bundle Payment Implications:**
- Complications reduce margin
- Quality penalties compound costs
- Prevention is high-value

### Patient-Centered Outcomes

**Beyond Complications:**
- Functional recovery
- Return to baseline activities
- Quality of life
- Patient experience

**PROMIS Measures:**
- Physical function
- Pain interference
- Fatigue
- Depression/anxiety

## Emerging Technologies

### Surgical Black Box

**Concept:**
- OR recording (video, audio, physiologic data)
- Performance analysis
- Quality improvement
- Medical-legal documentation

**Applications:**
- Technical error identification
- Communication analysis
- Workflow optimization
- Training assessment

### AI-Assisted Complication Detection

**Applications:**
- Real-time vital sign analysis
- Natural language processing of notes
- Image-based wound assessment
- Predictive deterioration algorithms

**Current State:**
- Research demonstrations
- Limited clinical implementation
- Regulatory pathways developing
- Liability considerations

### Enhanced Thromboprophylaxis

**Precision Dosing:**
- Anti-Xa monitoring for dosing adjustment
- Pharmacogenomics for agent selection
- Biomarker-guided intensity

**Novel Agents:**
- Factor XI inhibitors (reduced bleeding risk)
- Aptamer-based anticoagulants (reversible)

### Infection Prevention Innovation

**Microbiome Approaches:**
- Preoperative gut preparation
- Selective decontamination
- Probiotic supplementation

**Immunomodulation:**
- Perioperative immunonutrition
- Targeted immune support
- Stress response mitigation`,
      keyTerms: [
        { term: 'high-reliability organization', definition: 'Organization with complex, high-risk operations achieving consistently safe outcomes through specific cultural and process elements' },
        { term: 'just culture', definition: 'Approach balancing accountability with learning, distinguishing human error from reckless behavior' },
        { term: 'surgical black box', definition: 'Comprehensive OR recording system for quality improvement and performance analysis' },
        { term: 'PROMIS', definition: 'Patient-Reported Outcomes Measurement Information System - standardized patient-reported outcome measures' },
        { term: 'factor XI inhibitors', definition: 'Novel anticoagulants targeting intrinsic pathway with potentially lower bleeding risk' },
      ],
      clinicalNotes: `Clinical Pearls:
1. Failure to rescue varies more between hospitals than complication rates
2. NSQIP participation associated with improved outcomes across specialties
3. ML prediction models show promise but require local validation
4. SSI prevention bundles only work with high compliance (>90%)
5. Rescue infrastructure (ICU staffing, RRT) may matter more than prevention in high-risk patients
6. Value-based care creates strong incentive for complication prevention`,
    },
  },

  media: [
    {
      id: 'warning-signs-infographic',
      type: 'diagram',
      filename: 'surgical-warning-signs.svg',
      title: 'Post-Operative Warning Signs',
      description: 'Visual guide to concerning symptoms requiring medical attention',
    },
    {
      id: 'complication-timeline',
      type: 'diagram',
      filename: 'complication-timeline.svg',
      title: 'Complication Timeline',
      description: 'When different complications typically occur after surgery',
    },
  ],

  citations: [
    {
      id: 'clavien-dindo',
      type: 'article',
      title: 'Classification of Surgical Complications',
      authors: ['Dindo, D.', 'Demartines, N.', 'Clavien, P.A.'],
      source: 'Annals of Surgery',
      url: 'https://doi.org/10.1097/01.sla.0000133083.54934.ae',
    },
    {
      id: 'acs-nsqip',
      type: 'website',
      title: 'ACS NSQIP',
      source: 'American College of Surgeons',
      url: 'https://www.facs.org/quality-programs/acs-nsqip/',
    },
    {
      id: 'cdc-ssi',
      type: 'article',
      title: 'CDC Guideline for the Prevention of Surgical Site Infection',
      source: 'JAMA Surgery',
      url: 'https://doi.org/10.1001/jamasurg.2017.0904',
    },
  ],

  crossReferences: [
    { targetId: 'surgery-post-operative-care', targetType: 'topic', relationship: 'related', label: 'Post-Operative Care' },
    { targetId: 'surgery-wound-healing', targetType: 'topic', relationship: 'related', label: 'Wound Healing' },
    { targetId: 'surgery-pre-operative-evaluation', targetType: 'topic', relationship: 'related', label: 'Pre-Operative Evaluation' },
  ],

  tags: {
    systems: ['surgical'],
    topics: ['complications', 'patient-safety', 'quality-improvement'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default surgicalComplications;
