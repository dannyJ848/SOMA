/**
 * Post-Operative Care
 *
 * Comprehensive content on recovery after surgery, including what to expect,
 * self-care instructions, milestones, and when to seek help.
 */

import { EducationalContent } from '../types';

export const postOperativeCare: EducationalContent = {
  id: 'surgery-post-operative-care',
  type: 'process',
  name: 'Post-Operative Care and Recovery',
  alternateNames: ['Surgical Recovery', 'After Surgery Care', 'Post-Op Instructions'],

  levels: {
    1: {
      level: 1,
      summary: 'After surgery, your body needs time to heal. Following your doctor\'s instructions helps you recover safely and feel better faster.',
      explanation: `After surgery, your body goes through healing. Here is what to expect and how to take care of yourself.

**Right After Surgery:**
- You will wake up in a recovery room
- Nurses will check on you often
- You might feel groggy, sleepy, or a little confused
- Some pain is normal - tell the nurse how you feel
- You might have tubes or an IV (needle with fluids in your arm)

**At Home - Important Rules:**

**1. Rest and Activity:**
- Take it easy at first
- Short walks are usually good (helps prevent blood clots)
- Do not lift heavy things
- Follow specific instructions for your surgery

**2. Taking Care of Your Wound:**
- Keep it clean and dry
- Watch for signs of infection (redness, swelling, yellow/green discharge)
- Do not remove bandages unless told to
- No swimming or baths until your doctor says it is OK

**3. Eating and Drinking:**
- Start with clear liquids
- Move to regular food as you feel ready
- Drink plenty of water
- Some surgeries have special diet rules

**4. Medications:**
- Take pain medicine as directed
- Finish all antibiotics if prescribed
- Ask about when to restart your regular medicines

**5. Warning Signs - Call Your Doctor If:**
- Fever over 101F (38.3C)
- Increasing pain not helped by medicine
- Heavy bleeding from your wound
- Trouble breathing
- Severe nausea or vomiting
- Cannot urinate
- Red, swollen, or leaking wound

**Follow-Up:**
- Keep all your follow-up appointments
- Ask questions if you are unsure about anything`,
      keyTerms: [
        { term: 'post-operative', definition: 'The time after surgery' },
        { term: 'recovery', definition: 'The process of getting better after being sick or having surgery' },
        { term: 'infection', definition: 'When germs get into your body and cause problems like redness, swelling, or fever' },
        { term: 'follow-up', definition: 'Seeing your doctor again after treatment to check on your progress' },
      ],
      analogies: [
        'Recovery is like charging a battery - you need to rest to refill your energy.',
        'Your wound healing is like a construction project - it takes time and you should not rush it.',
        'Following post-op instructions is like following a recipe - each step matters for the best result.',
      ],
      examples: [
        'After having your appendix removed, you might go home the same day and need 1-2 weeks before returning to normal activities.',
        'If you notice your surgical wound is getting redder and feels warm, this could be infection and you should call your doctor.',
      ],
    },
    2: {
      level: 2,
      summary: 'Post-operative care involves pain management, wound care, activity progression, nutrition, medication management, and monitoring for complications across defined recovery phases.',
      explanation: `## Phases of Recovery

### Phase 1: Immediate (0-24 hours)
**Location:** Recovery room (PACU), then hospital room or discharge

**Key Focuses:**
- Emergence from anesthesia
- Pain control
- Vital sign stability
- Nausea prevention
- Early mobilization

**Common Experiences:**
- Grogginess, confusion
- Sore throat (if breathing tube was used)
- Nausea
- Pain at surgical site
- Shivering

### Phase 2: Early (Days 1-7)
**Key Focuses:**
- Pain management transition
- Wound care basics
- Activity progression
- Bowel function return
- Diet advancement

**Milestones:**
- Walking independently
- Eating regular food
- Having bowel movement
- Pain controlled with oral medications
- Discharged from hospital (if admitted)

### Phase 3: Intermediate (Weeks 1-6)
**Key Focuses:**
- Gradual activity increase
- Wound healing monitoring
- Returning to daily activities
- Managing energy levels

**Milestones:**
- Driving (usually 1-2 weeks for minor, 4-6 for major surgery)
- Return to light work
- Exercise progression
- Incision fully closed

### Phase 4: Full Recovery (6+ weeks)
**Key Focuses:**
- Return to full activity
- Final healing
- Long-term function optimization

## Pain Management

**Multimodal Approach:**
- Scheduled non-opioid medications (acetaminophen, ibuprofen)
- Opioids for breakthrough pain only
- Ice packs for swelling
- Positioning for comfort

**Tips:**
- Take pain medicine before pain gets severe
- Set alarms to stay on schedule first few days
- Report uncontrolled pain
- Expect gradual improvement

**Opioid Safety:**
- Take only as prescribed
- Store safely away from others
- Do not drive or operate machinery
- Dispose of unused medications properly

## Wound Care

**Basic Principles:**
- Keep incision clean and dry
- Change dressings as instructed
- Watch for signs of infection

**Shower/Bath:**
- Usually OK to shower 24-48 hours after surgery
- Let water run over incision (do not scrub)
- Pat dry gently
- No soaking in tub/pool until cleared

**Signs of Healing:**
- Pink, closed edges
- Minimal drainage (clear to light yellow)
- Gradual decrease in swelling
- Slight itching

**Signs of Infection:**
- Increasing redness spreading from incision
- Warmth around wound
- Thick, yellow/green, or foul-smelling drainage
- Fever
- Increasing pain after initial improvement

## Activity Guidelines

**General Progression:**
| Phase | Allowed Activities |
|-------|-------------------|
| Days 1-3 | Walking indoors, light household tasks |
| Week 1 | Short walks outside, basic self-care |
| Weeks 2-4 | Longer walks, light activities |
| Weeks 4-6 | Gradual return to normal activities |
| 6+ weeks | Full activity (procedure-dependent) |

**Lifting Restrictions:**
- Minor surgery: 10-15 lbs for 1-2 weeks
- Major abdominal surgery: 10 lbs for 4-6 weeks
- Heavy lifting: Usually 6-8 weeks

## Diet and Nutrition

**Progression:**
1. Clear liquids (water, broth, jello)
2. Full liquids (soup, smoothies)
3. Soft foods (eggs, pasta)
4. Regular diet

**For Healing:**
- Protein (meat, beans, dairy, eggs)
- Vitamin C (citrus, vegetables)
- Zinc (meat, nuts, seeds)
- Stay hydrated

**Common Issues:**
- Constipation (from pain medication, inactivity)
- Decreased appetite
- Nausea

## Follow-Up Care

**Typical Schedule:**
- 1-2 weeks: Wound check, staple/suture removal
- 4-6 weeks: Progress assessment
- 3-6 months: Final evaluation (major surgery)

**Prepare Questions About:**
- Activity clearance
- Returning to work
- Driving
- Exercise
- Any symptoms you have experienced`,
      keyTerms: [
        { term: 'PACU', definition: 'Post-Anesthesia Care Unit - the recovery room where you wake up after surgery', pronunciation: 'pack-you' },
        { term: 'multimodal', definition: 'Using multiple different methods together for better effect' },
        { term: 'breakthrough pain', definition: 'Pain that occurs between regular doses of pain medicine' },
        { term: 'incision', definition: 'The cut made during surgery' },
        { term: 'drainage', definition: 'Fluid that comes out of a wound' },
      ],
    },
    3: {
      level: 3,
      summary: 'Post-operative management involves systematic monitoring for complications, evidence-based pain protocols, early mobilization, and nutritional optimization within enhanced recovery frameworks.',
      explanation: `## PACU Management

### Emergence and Immediate Recovery

**Aldrete Score (Readiness for Discharge):**
| Parameter | Score 2 | Score 1 | Score 0 |
|-----------|---------|---------|---------|
| Activity | Moves 4 extremities | Moves 2 extremities | Unable to move |
| Respiration | Deep breath, cough | Dyspnea/limited | Apneic |
| Circulation | BP ± 20% baseline | BP ± 20-50% | BP ± 50% |
| Consciousness | Fully awake | Arousable | Not responsive |
| O2 Saturation | >92% on room air | Needs O2 | <90% with O2 |

**Discharge Criteria (Outpatient):**
- Aldrete ≥9
- Stable vital signs x 30 minutes
- Oriented, ambulating
- Pain controlled
- Minimal nausea/vomiting
- Voided (if required by procedure)
- Responsible adult escort

### Post-Operative Complications Monitoring

**First 24 Hours:**
- Hemorrhage/hematoma
- Airway compromise
- Cardiovascular instability
- Emergence delirium
- PONV

**Days 1-3:**
- Surgical site infection (early signs)
- Ileus
- Urinary retention
- VTE
- Atelectasis/pneumonia

**Days 3-7:**
- Anastomotic leak
- Deep SSI
- Pulmonary embolism
- Delirium

## Pain Management Protocols

### WHO Analgesic Ladder (Modified)

| Step | Agents | Notes |
|------|--------|-------|
| 1 | Acetaminophen, NSAIDs | Scheduled, first-line |
| 2 | Weak opioids (tramadol) | Add to Step 1 |
| 3 | Strong opioids | For severe pain |

### Multimodal Analgesia Components

**Non-Opioid:**
- Acetaminophen: 1g q6h (max 3g/day, 2g if liver disease)
- NSAIDs: Ketorolac 15-30mg IV, ibuprofen 400-600mg PO
- Gabapentinoids: Pre-operative gabapentin reduces opioid use

**Regional/Local:**
- Neuraxial (epidural, spinal)
- Peripheral nerve blocks (continuous catheters)
- Wound infiltration
- Liposomal bupivacaine

**Adjuncts:**
- Ketamine infusion (0.1-0.2 mg/kg/hr)
- Lidocaine infusion
- Dexmedetomidine

**Opioids:**
- PCA (Patient-Controlled Analgesia): Allows self-dosing
- Oral opioids for transition
- Opioid-sparing strategies reduce total consumption 30-50%

### PONV Prophylaxis

**Apfel Risk Factors:**
1. Female gender
2. Non-smoker
3. History of PONV/motion sickness
4. Post-operative opioids

**Prophylaxis by Risk:**
| Apfel Score | Baseline Risk | Prophylaxis |
|-------------|---------------|-------------|
| 0-1 | 10-20% | None or rescue |
| 2 | 40% | 1-2 agents |
| 3-4 | 60-80% | 2-3 agents |

**Agents:**
- Ondansetron 4mg IV
- Dexamethasone 4-8mg IV (at induction)
- Droperidol 0.625-1.25mg IV
- Scopolamine patch

## Enhanced Recovery Implementation

### ERAS Protocol Elements

**Pre-operative:**
- Patient education
- Carbohydrate loading (2-4 hours pre-op)
- Avoid prolonged fasting
- No routine bowel prep

**Intraoperative:**
- Minimally invasive approach when feasible
- Goal-directed fluid therapy
- Normothermia
- Regional anesthesia

**Post-operative:**
- Early oral intake (day 0)
- Early mobilization (day 0)
- Multimodal analgesia
- Minimize drains, tubes, catheters
- Audit compliance and outcomes

### Early Mobilization

**Benefits:**
- Reduced VTE risk
- Decreased ileus duration
- Improved pulmonary function
- Reduced delirium
- Shorter length of stay

**Protocol:**
- Day 0: Sit in chair, stand if able
- Day 1: Walk in hall with assistance
- Day 2+: Independent ambulation
- Goal: 4-6 walks per day

### Nutrition

**Early Feeding:**
- Day 0: Clear liquids → diet as tolerated
- No need to wait for bowel sounds/flatus
- Reduces ileus, improves outcomes

**Immunonutrition:**
- Arginine, omega-3, nucleotides
- 5-7 days pre-operatively
- Benefits in major abdominal surgery

## Discharge Planning

### Discharge Criteria (Inpatient)

**General:**
- Pain controlled with oral medications
- Tolerating oral diet
- Ambulatory
- Bowel function returning
- Wound stable
- No fever
- No signs of major complications

**Procedure-Specific:**
- Colectomy: Tolerating diet, stool output
- Cholecystectomy: Tolerating diet, pain controlled
- Joint replacement: PT goals met, safe home environment

### Discharge Education

**Teach-Back Method:**
1. Explain key information
2. Ask patient to repeat in own words
3. Clarify misunderstandings
4. Repeat for critical items

**Written Instructions:**
- Wound care
- Activity restrictions
- Medications
- Diet
- Follow-up appointments
- Warning signs and when to call`,
      keyTerms: [
        { term: 'Aldrete score', definition: 'Scoring system for assessing post-anesthesia recovery readiness based on activity, respiration, circulation, consciousness, and oxygenation' },
        { term: 'PCA', definition: 'Patient-Controlled Analgesia - device allowing patient to self-administer pain medication within preset limits' },
        { term: 'Apfel score', definition: 'Risk stratification for postoperative nausea and vomiting based on four factors' },
        { term: 'ileus', definition: 'Temporary paralysis of bowel function after surgery, preventing passage of food and gas' },
        { term: 'teach-back', definition: 'Patient education technique where patient explains instructions back to confirm understanding' },
      ],
      clinicalNotes: 'ERAS compliance >80% associated with best outcomes. Day-of-surgery ambulation is safe and beneficial even after major surgery. Opioid-sparing multimodal analgesia is the current standard.',
    },
    4: {
      level: 4,
      summary: 'Advanced post-operative management integrates systems-based complication prevention, precision analgesia approaches, geriatric-specific considerations, and quality metrics within standardized care pathways.',
      explanation: `## Systems-Based Complication Prevention

### Pulmonary Complications

**Atelectasis Prevention:**
- Incentive spirometry (10 breaths q1-2h while awake)
- Early mobilization
- Adequate analgesia (pain limits deep breathing)
- Head of bed elevation

**Aspiration Prevention:**
- Verify return of protective reflexes before oral intake
- Assess swallowing in high-risk patients (CVA, prolonged intubation)
- Upright positioning for meals

**Pneumonia Prevention:**
- Oral care with chlorhexidine (intubated patients)
- Early extubation
- Avoid oversedation
- Early mobilization

### Venous Thromboembolism

**Risk Stratification (Caprini Score):**
- 1 point: Age 41-60, minor surgery, BMI >25, pregnancy
- 2 points: Age 61-74, major surgery, malignancy, bed rest >72h
- 3 points: Age ≥75, history of VTE, hypercoagulable state
- 5 points: Hip/knee arthroplasty, stroke, acute spinal cord injury

**Prophylaxis Protocol:**
| Risk Level | Score | Intervention |
|------------|-------|--------------|
| Low | 0-2 | Ambulation |
| Moderate | 3-4 | LMWH or UFH + SCDs |
| High | ≥5 | LMWH + SCDs + extended (4 weeks) |

**Extended Prophylaxis Indications:**
- Major abdominal/pelvic cancer surgery
- Hip/knee arthroplasty
- Hip fracture surgery

### Surgical Site Infection (SSI)

**CDC SSI Categories:**
- Superficial incisional (skin, subcutaneous)
- Deep incisional (fascia, muscle)
- Organ/space (body cavity, organ)

**Prevention Bundle:**
1. Appropriate antibiotic prophylaxis
2. Surgical site hair removal (clippers, not razor)
3. Glucose control (<180 mg/dL)
4. Normothermia (≥36°C)

**Risk Factors:**
| Patient | Surgical | Environmental |
|---------|----------|--------------|
| Diabetes | Duration >2 hours | Poor hand hygiene |
| Obesity | Wound class | Inadequate sterilization |
| Immunosuppression | Emergency surgery | OR traffic |
| Malnutrition | Blood transfusion | Poor ventilation |

### Delirium Prevention

**Risk Factors (HELP Protocol targets):**
- Cognitive impairment
- Sleep deprivation
- Immobility
- Dehydration
- Sensory impairment

**Non-Pharmacologic Prevention:**
- Orientation (clock, calendar, familiar objects)
- Sleep hygiene (minimize nighttime interruptions)
- Early mobilization
- Hydration
- Hearing aids, glasses
- Family presence

**Pharmacologic Considerations:**
- Avoid benzodiazepines
- Avoid anticholinergics
- Minimize opioids when possible
- Dexmedetomidine for sedation if needed
- No evidence for prophylactic antipsychotics

### Acute Kidney Injury

**Prevention:**
- Maintain euvolemia
- Avoid nephrotoxins (NSAIDs, aminoglycosides, contrast)
- Optimize hemodynamics
- Monitor urine output

**Definition (KDIGO):**
- Stage 1: Cr increase 1.5-1.9x or ≥0.3 mg/dL, or UO <0.5 mL/kg/h x 6h
- Stage 2: Cr increase 2-2.9x, or UO <0.5 mL/kg/h x 12h
- Stage 3: Cr increase ≥3x or ≥4.0 mg/dL, or UO <0.3 mL/kg/h x 24h or anuria x 12h

## Advanced Pain Management

### Procedure-Specific Protocols

**Colorectal Surgery:**
- Thoracic epidural OR TAP blocks
- Multimodal: Acetaminophen + NSAID + gabapentin
- PCA if epidural not used
- Early oral opioid transition

**Knee Arthroplasty:**
- Adductor canal block (preserves quadriceps)
- Periarticular injection
- Multimodal oral regimen
- Cryotherapy

**Open Abdominal:**
- Epidural analgesia
- Wound infusion catheter alternative
- IV PCA as backup

### Opioid-Sparing Strategies

**Evidence-Based Approaches:**
| Strategy | Opioid Reduction |
|----------|-----------------|
| Scheduled acetaminophen | 20-30% |
| NSAIDs | 30-40% |
| Regional block | 50-70% |
| Gabapentinoids | 20-30% |
| Ketamine | 20-30% |

### Transition to Oral Analgesia

**Equianalgesic Dosing:**
| IV Agent | Oral Equivalent |
|----------|-----------------|
| Morphine 10mg | Morphine 30mg PO |
| Hydromorphone 1.5mg | Hydromorphone 7.5mg PO |
| Fentanyl 100mcg | N/A (no oral form) |

**Transition Protocol:**
1. Calculate 24h IV requirement
2. Convert to oral equivalent (50-75% of IV dose)
3. Schedule long-acting + PRN short-acting
4. Reassess and adjust

## Geriatric Considerations

### Physiologic Changes Affecting Recovery

| System | Change | Implication |
|--------|--------|-------------|
| Renal | GFR decline | Drug accumulation |
| Hepatic | Reduced metabolism | Prolonged drug effects |
| Cardiac | Reduced reserve | Fluid sensitivity |
| Cognitive | Increased vulnerability | Delirium risk |
| Muscle | Sarcopenia | Falls, weakness |

### Geriatric-Specific Protocols

**Medication Adjustments:**
- Start low, go slow with opioids
- Avoid benzodiazepines, anticholinergics
- Reduce doses 25-50%
- Monitor closely

**Functional Recovery:**
- Early PT/OT involvement
- Fall prevention
- Nutritional support
- Geriatric co-management

**Disposition Planning:**
- Early social work involvement
- Assess home safety
- Consider SNF if needed
- Family involvement

## Quality Metrics

### Core Measures

**CMS/Joint Commission:**
- VTE prophylaxis
- Normothermia
- Antibiotic timing/selection
- Catheter removal (POD 1-2)

**NSQIP:**
- 30-day mortality
- Major complications
- SSI
- Readmission
- Return to OR

### Failure to Rescue

**Concept:** Mortality from complications that should be survivable

**Key Interventions:**
- Early warning systems (NEWS, MEWS)
- Rapid response teams
- ICU escalation pathways
- Experienced nursing care

**Association:**
- High hospital volume → lower failure to rescue
- 24/7 intensivist coverage → lower failure to rescue`,
      keyTerms: [
        { term: 'Caprini score', definition: 'VTE risk stratification tool incorporating patient and procedural factors' },
        { term: 'HELP protocol', definition: 'Hospital Elder Life Program - evidence-based delirium prevention program' },
        { term: 'equianalgesic', definition: 'Equivalent pain-relieving doses of different opioids for conversion' },
        { term: 'failure to rescue', definition: 'Death after development of a complication that should be survivable; quality metric' },
        { term: 'sarcopenia', definition: 'Age-related loss of muscle mass and strength affecting surgical outcomes' },
      ],
      clinicalNotes: 'Delirium prevention programs (HELP) reduce delirium by 40%. VTE extended prophylaxis (4 weeks) reduces VTE by 50% in high-risk patients. Regional anesthesia reduces postoperative complications in high-risk patients.',
    },
    5: {
      level: 5,
      summary: 'Contemporary post-operative care integrates precision monitoring, personalized recovery pathways, predictive analytics, and remote monitoring technologies within value-based care frameworks to optimize patient outcomes.',
      explanation: `## Precision Post-Operative Care

### Personalized Recovery Pathways

**Phenotypic Approach:**
| Phenotype | Characteristics | Tailored Approach |
|-----------|----------------|-------------------|
| Fast-tracker | Young, fit, minor surgery | Accelerated discharge |
| Standard | Average risk | ERAS protocol |
| High-risk | Frail, multiple comorbidities | Enhanced monitoring |
| Complex | Multi-organ dysfunction | ICU-level care |

**Biomarker-Guided Management:**
- Procalcitonin: Antibiotic stewardship
- Lactate: Perfusion monitoring
- Troponin: Cardiac injury surveillance
- BNP: Fluid status assessment

### Predictive Analytics

**Machine Learning Applications:**
- Post-operative deterioration prediction
- SSI risk stratification
- Readmission prediction
- Length of stay estimation

**Early Warning Systems:**
| System | Parameters | Alert Threshold |
|--------|------------|-----------------|
| NEWS | Vital signs (7 parameters) | Score ≥5 |
| MEWS | Vital signs (5 parameters) | Score ≥4 |
| eCART | EHR-integrated ML model | High-risk threshold |

### Remote Post-Operative Monitoring

**Wearable Technologies:**
- Continuous vital signs monitoring
- Activity tracking
- Sleep quality assessment
- Wound assessment (smart bandages)

**Telehealth Integration:**
- Virtual post-operative visits
- Symptom tracking apps
- Remote wound photography
- Patient-reported outcomes

**Evidence:**
- Reduced ED visits and readmissions
- Earlier detection of complications
- Improved patient satisfaction
- Cost-effective for appropriate patients

## Advanced Pain Science

### Transition to Persistent Post-Surgical Pain (PPSP)

**Risk Factors:**
- Pre-operative: Chronic pain, anxiety, depression, catastrophizing
- Perioperative: Severe acute pain, nerve injury, surgery type
- Post-operative: Inadequate analgesia, complication, psychological factors

**High-Risk Procedures:**
| Procedure | PPSP Incidence |
|-----------|----------------|
| Thoracotomy | 30-50% |
| Mastectomy | 20-50% |
| Amputation | 30-80% |
| Hernia repair | 10-20% |
| Knee arthroplasty | 10-20% |

**Prevention Strategies:**
- Perioperative ketamine
- Regional anesthesia
- Multimodal analgesia
- Transitional pain service for high-risk
- Psychological intervention

### Transitional Pain Service (TPS)

**Components:**
- Pre-operative screening for PPSP risk
- Perioperative optimization
- Post-discharge follow-up (weekly x 4-8 weeks)
- Opioid tapering protocols
- Psychological support

**Outcomes:**
- 50% reduction in opioid consumption at 3 months
- Lower chronic pain development
- Reduced healthcare utilization

### Opioid Stewardship

**Prescribing Guidelines:**
| Surgery Type | Opioid Recommended (OME) |
|--------------|--------------------------|
| Minor (lap chole) | 0-75 mg |
| Moderate (hernia) | 75-150 mg |
| Major abdominal | 150-225 mg |
| Major orthopedic | 150-300 mg |

OME = Oral Morphine Equivalents

**Disposal Education:**
- Return to pharmacy
- DEA take-back events
- Home disposal kits (Deterra bags)
- Do not flush

## Healthcare System Integration

### Care Transitions

**Handoff Protocols:**
- Structured communication (I-PASS, SBAR)
- Medication reconciliation
- Pending test follow-up
- Clear escalation pathways

**Discharge Planning:**
- Begins at admission
- Multidisciplinary team involvement
- Social determinants assessment
- Home care coordination

### Value-Based Care Models

**Bundled Payments:**
| Component | Included |
|-----------|----------|
| Pre-operative | Optimization, evaluation |
| Surgical episode | OR, anesthesia, supplies |
| Post-operative | Hospital, rehab, home care |
| Quality adjustment | Outcomes-based bonus/penalty |

**Quality Metrics for Payment:**
- Complications
- Readmissions
- Patient experience (HCAHPS)
- Functional outcomes (PROs)

### Health Equity in Recovery

**Disparities Documented:**
- Higher complication rates in minorities
- Longer length of stay
- More readmissions
- Less access to rehabilitation

**Interventions:**
- Standardized pathways reduce variation
- Navigation programs
- Language-appropriate education
- Community health worker follow-up

## Emerging Technologies

### AI-Assisted Post-Operative Care

**Applications:**
- Automated vital sign analysis
- Natural language processing of notes
- Image recognition for wound assessment
- Chatbots for patient queries

**Current Limitations:**
- Validation in surgical populations
- Integration with workflows
- Regulatory approval
- Liability considerations

### Hospital at Home

**Post-Surgical Home Hospital:**
- Selected patients discharged early
- Remote monitoring
- Home visits (nursing, PT)
- Physician telehealth

**Eligible Procedures:**
- Joint replacement
- Laparoscopic abdominal surgery
- Select cardiac surgery
- Spine surgery

**Requirements:**
- Stable post-operatively
- Adequate home environment
- Caregiver availability
- Geographic proximity

### Enhanced Wound Healing

**Emerging Technologies:**
- Negative pressure wound therapy
- Growth factor applications
- Hyperbaric oxygen
- Electrical stimulation
- Smart dressings with sensors

**Precision Wound Care:**
- Biofilm detection
- Bacterial load monitoring
- pH sensing
- Moisture management`,
      keyTerms: [
        { term: 'PPSP', definition: 'Persistent Post-Surgical Pain - chronic pain developing after surgery, lasting beyond expected healing time' },
        { term: 'TPS', definition: 'Transitional Pain Service - specialized program for perioperative pain management and opioid stewardship' },
        { term: 'OME', definition: 'Oral Morphine Equivalents - standardized measure for comparing opioid doses' },
        { term: 'I-PASS', definition: 'Illness severity, Patient summary, Action list, Situation awareness, Synthesis - standardized handoff protocol' },
        { term: 'hospital at home', definition: 'Care model delivering hospital-level care in patient home with remote monitoring' },
      ],
      clinicalNotes: `Clinical Pearls:
1. PPSP develops in 10-50% of surgical patients; prevention is key
2. TPS reduces opioid use at 3 months by 50%
3. Remote monitoring post-discharge can reduce readmissions by 25%
4. Machine learning early warning systems outperform traditional scores
5. Standardized care pathways reduce variation and disparities
6. Hospital at home post-surgery shows equivalent or better outcomes for selected patients`,
    },
  },

  media: [
    {
      id: 'recovery-phases-timeline',
      type: 'diagram',
      filename: 'recovery-phases-timeline.svg',
      title: 'Post-Operative Recovery Phases',
      description: 'Timeline showing immediate, early, intermediate, and full recovery phases',
    },
    {
      id: 'wound-healing-signs',
      type: 'diagram',
      filename: 'wound-healing-vs-infection.svg',
      title: 'Normal Healing vs. Infection Signs',
      description: 'Visual comparison of normal healing and signs requiring medical attention',
    },
  ],

  citations: [
    {
      id: 'eras-guidelines',
      type: 'website',
      title: 'ERAS Society Guidelines',
      source: 'Enhanced Recovery After Surgery Society',
      url: 'https://erassociety.org/guidelines/',
    },
    {
      id: 'acs-stopcpe',
      type: 'article',
      title: 'Strong for Surgery',
      source: 'American College of Surgeons',
      url: 'https://www.facs.org/quality-programs/strong-for-surgery/',
    },
    {
      id: 'cdc-ssi-guidelines',
      type: 'article',
      title: 'CDC Guideline for the Prevention of Surgical Site Infection',
      source: 'JAMA Surgery',
      url: 'https://doi.org/10.1001/jamasurg.2017.0904',
    },
  ],

  crossReferences: [
    { targetId: 'surgery-pre-operative-evaluation', targetType: 'topic', relationship: 'related', label: 'Pre-Operative Evaluation' },
    { targetId: 'surgery-complications', targetType: 'topic', relationship: 'related', label: 'Surgical Complications' },
    { targetId: 'surgery-wound-healing', targetType: 'topic', relationship: 'related', label: 'Wound Healing' },
    { targetId: 'pain-acute-vs-chronic', targetType: 'concept', relationship: 'related', label: 'Pain Management' },
  ],

  tags: {
    systems: ['surgical'],
    topics: ['post-operative', 'recovery', 'patient-care'],
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

export default postOperativeCare;
