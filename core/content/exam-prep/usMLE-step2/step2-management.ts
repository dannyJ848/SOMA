/**
 * USMLE Step 2 Management - Clinical Treatment and Patient Care
 *
 * Educational content covering patient management for USMLE Step 2 CK.
 */

import { EducationalContent } from '../../types';

export const step2Management: EducationalContent = {
  id: 'education-usmle-step2-management',
  type: 'concept',
  name: 'USMLE Step 2 Management',
  alternateNames: ['Clinical Management', 'Patient Management', 'Step 2 CK Management', 'Treatment Planning'],

  levels: {
    1: {
      level: 1,
      summary: 'Management on USMLE Step 2 is about treating patients and providing care. It includes choosing the right treatments, preventing complications, and helping patients stay healthy.',
      explanation: `## What Is Management on Step 2?

Management means taking care of patients after making a diagnosis. On Step 2, you learn how to:
- Choose the right treatments
- Prevent complications
- Monitor patient progress
- Help patients recover

## Types of Management

**Treatment:**
- Giving medicines
- Doing procedures
- Ordering surgeries
- Providing therapies

**Prevention:**
- Preventing complications
- Vaccinations
- Lifestyle advice
- Screenings

**Support:**
- Pain control
- Nutrition support
- Emotional support
- Rehabilitation

## Common Management Questions

Step 2 might ask:
- "What is the best treatment?"
- "What is the next best step in management?"
- "What complication should you watch for?"
- "How do you prevent this problem?"

## Management Principles

**Do No Harm:**
- Consider side effects
- Watch for drug interactions
- Monitor for complications
- Stop harmful treatments

**Evidence-Based:**
- Use treatments that work
- Follow guidelines
- Consider patient preferences
- Know when to refer

**Comprehensive:**
- Treat the disease
- Manage symptoms
- Support the patient
- Prevent future problems

## Examples of Management

**Heart Attack:**
- Give aspirin
- Open blocked artery
- Control risk factors
- Cardiac rehabilitation

**Diabetes:**
- Blood sugar medicines
- Diet changes
- Exercise
- Monitor for complications

**Infections:**
- Right antibiotic
- Right dose
- Right duration
- Monitor response`,
      keyTerms: [
        { term: 'management', definition: 'The treatment and care of a patient with a particular disease or condition' },
        { term: 'complication', definition: 'A secondary disease or condition that develops in the course of a primary disease' },
        { term: 'prophylaxis', definition: 'Treatment given or action taken to prevent disease' },
        { term: 'follow-up', definition: 'Care and monitoring of a patient after initial treatment' },
      ],
      analogies: [
        'Patient management is like coaching a team - you make a game plan (treatment), watch how it goes (monitoring), and adjust as needed.',
        'Comprehensive management is like maintaining a car - you fix the problem, then do regular maintenance to prevent future issues.',
      ],
      examples: [
        'Managing pneumonia includes choosing the right antibiotic, monitoring oxygen levels, and preventing complications like sepsis.',
        'Diabetes management involves medications, blood sugar monitoring, foot care, and screening for eye and kidney problems.',
      ],
      patientCounselingPoints: [
        'Good disease management includes treating the current problem and preventing future complications',
        'Patient management is individualized based on the person\'s specific situation and preferences',
      ],
    },

    2: {
      level: 2,
      summary: 'Step 2 management emphasizes evidence-based treatment, acute care, chronic disease management, and preventive care. Questions focus on best initial therapy, next best steps, complication prevention, and follow-up care.',
      explanation: `## Step 2 Management Overview

Management on Step 2 CK focuses on clinical decision-making, treatment selection, monitoring, and preventive care across medical specialties.

## Management Framework

**Treatment Selection:**
| Factor | Consideration |
|--------|---------------|
| Efficacy | Evidence of benefit |
| Safety | Side effect profile |
| Patient factors | Age, comorbidities, preferences |
| Cost | Insurance coverage |
| Convenience | Dosing frequency |

**Monitoring:**
| Aspect | Examples |
|--------|----------|
| Efficacy | Symptom improvement, lab values |
| Safety | Side effects, toxicity monitoring |
| Compliance | Medication adherence |
| Disease progression | Imaging, functional status |

## Acute Management

**ABC Approach:**
| Priority | Action | Examples |
|----------|--------|----------|
| Airway | Ensure patency | Intubation if needed |
| Breathing | Oxygenation, ventilation | O2, NIV, mechanical ventilation |
| Circulation | Blood pressure, perfusion | Fluids, vasopressors |

**Life-Threatening Conditions:**
| Condition | Immediate Action | Definitive Treatment |
|-----------|------------------|---------------------|
| STEMI | Aspirin, heparin | PCI within 90 min |
| Sepsis | Fluids, antibiotics | Source control |
| Anaphylaxis | Epinephrine | Supportive care |
| Tension pneumothorax | Needle decompression | Chest tube |
| Cardiac tamponade | Pericardiocentesis | Surgery if recurrent |

## Chronic Disease Management

**Diabetes Management:**
| Aspect | Goals | Interventions |
|--------|-------|---------------|
| Glucose | HbA1c <7% (individualized) | Metformin, insulin, others |
| BP | <130/80 | ACE-I preferred |
| Lipids | Statin for most | Atorvastatin, etc. |
| Nephropathy | Microalbumin screening | ACE-I/ARB |
| Retinopathy | Annual eye exam | Laser, anti-VEGF |
| Neuropathy | Foot care education | Gabapentin for pain |

**Heart Failure Management:**
| Class | Medications | Mortality Benefit |
|-------|-------------|-------------------|
| ACE-I/ARB/ARNI | All | Yes |
| Beta-blockers | Carvedilol, metoprolol, bisoprolol | Yes |
| MRAs | Spironolactone, eplerenone | Yes |
| SGLT2-I | Dapagliflozin | Yes |
| Diuretics | Loop diuretics | Symptom relief |

**COPD Management:**
| Severity | Treatment |
|----------|-----------|
| Mild | SABA PRN |
| Moderate | LABA or LAMA |
| Severe | LABA + LAMA |
| Very severe | Add ICS, consider roflumilast |

## Pharmacologic Management

**Antibiotic Selection:**
| Infection | First-Line | Duration |
|-----------|------------|----------|
| Community pneumonia | Amoxicillin, doxycycline, macrolide | 5-7 days |
| UTI uncomplicated | Nitrofurantoin, TMP-SMX | 3 days |
| UTI complicated | Ciprofloxacin, ceftriaxone | 7-14 days |
| Cellulitis | Cephalexin, dicloxacillin | 7-10 days |
| Diverticulitis | Amoxicillin-clavulanate, cipro + metronidazole | 7-10 days |

**Pain Management:**
| Severity | Options | Considerations |
|----------|---------|----------------|
| Mild | Acetaminophen, NSAIDs | Avoid NSAIDs in CKD, PUD |
| Moderate | Tramadol, low-dose opioids | Addiction risk |
| Severe | Opioids | Monitor for respiratory depression |
| Neuropathic | Gabapentin, TCAs, SNRIs | Titrate slowly |

## Procedural Management

**Common Procedures:**
| Procedure | Indications | Complications |
|-----------|-------------|---------------|
| Central line | Access, monitoring | Pneumothorax, infection |
| Thoracentesis | Pleural effusion | Pneumothorax, bleeding |
| Paracentesis | Ascites | Bleeding, infection |
| Lumbar puncture | Meningitis diagnosis | Post-LP headache |
| Bone marrow biopsy | Hematologic disorders | Bleeding, infection |

## Preventive Management

**Vaccinations:**
| Vaccine | Population | Schedule |
|---------|------------|----------|
| Influenza | All adults | Annual |
| Tdap | All adults | Once, then Td every 10 years |
| Pneumococcal | >65, high risk | PCV20 once or PCV15 + PPSV23 |
| Shingles | >50 | 2 doses recombinant |
| Hepatitis B | All adults | 2-3 doses |

**Cancer Screening:**
| Cancer | Test | Population |
|--------|------|------------|
| Colorectal | Colonoscopy, FIT | 45-75 |
| Breast | Mammography | 40-74 |
| Cervical | Pap smear, HPV | 21-65 |
| Lung | Low-dose CT | 50-80, 20 pack-years, current or quit <15 years |

## Discharge Planning

**Components:**
| Element | Content |
|---------|---------|
| Medications | Reconciliation, education |
| Follow-up | Appointments, labs |
| Warning signs | When to return |
| Care transition | Home health, rehab |
| Documentation | Discharge summary |`,
      keyTerms: [
        { term: 'evidence-based medicine', definition: 'Medical practice based on the best available research evidence' },
        { term: 'first-line therapy', definition: 'The initial preferred treatment for a condition' },
        { term: 'prophylaxis', definition: 'Treatment to prevent disease or complications' },
        { term: 'supportive care', definition: 'Treatment aimed at symptoms rather than cure' },
      ],
      analogies: [
        'Disease management is like tending a garden - you address immediate problems and also do ongoing maintenance.',
        'The ABC approach is like checking the foundation before fixing the roof - you must secure basics first.',
      ],
      examples: [
        'Heart failure management requires multiple medications (ACE-I, beta-blocker, MRA, SGLT2-I) that together reduce mortality.',
        'Diabetes management uses an ABC approach: A1c control, Blood pressure, Cholesterol management.',
      ],
      patientCounselingPoints: [
        'Evidence-based treatments have been proven to work through clinical research',
        'Preventive care can find problems early when they are easier to treat',
      ],
    },

    3: {
      level: 3,
      summary: 'Step 2 management requires knowledge of treatment algorithms, medication selection, procedural indications, and complication prevention. High-yield topics include acute coronary syndrome, sepsis, chronic disease protocols, and preventive care guidelines.',
      explanation: `## Comprehensive Step 2 Management Framework

Mastery of management for Step 2 requires understanding treatment protocols, medication mechanisms, and comprehensive patient care across settings.

## Acute Coronary Syndrome Management

**Initial Management:**
| Timeframe | Actions |
|-----------|---------|
| Immediate | Aspirin 325 mg, NTG SL, morphine if needed |
| Within 10 min | ECG, troponins |
| If STEMI | Activate cath lab, dual antiplatelet, heparin |
| If NSTEMI | Risk stratify, anticoagulation |

**STEMI Treatment:**
| Goal | Intervention |
|------|--------------|
| Reperfusion | PCI within 90 min, thrombolysis if PCI unavailable |
| Medical | Dual antiplatelet, anticoagulation, statin, beta-blocker, ACE-I |
| Complications | Monitor for arrhythmias, heart failure, reinfarction |

**NSTEMI/UA Risk Stratification:**
| Risk | Characteristics | Management |
|------|-----------------|------------|
| High | Elevated troponin, ST changes | Early invasive strategy |
| Intermediate | No high-risk features | Selective invasive |
| Low | Normal troponin, no ECG changes | Conservative |

## Sepsis Management

**Hour-1 Bundle:**
| Action | Details |
|--------|---------|
| Measure lactate | If >2, remeasure |
| Obtain cultures | Before antibiotics |
| Give antibiotics | Within 1 hour |
| Administer fluids | 30 mL/kg for hypotension or lactate >=4 |
| Vasopressors | For hypotension not responsive to fluids |

**Antibiotic Selection:**
| Source | Empiric Coverage |
|--------|------------------|
| Community | Piperacillin-tazobactam or cefepime + vancomycin |
| Healthcare | Anti-pseudomonal + MRSA coverage |
| Intra-abdominal | Piperacillin-tazobactam or ceftriaxone + metronidazole |
| Neutropenic | Anti-pseudomonal + vancomycin |

**Source Control:**
| Source | Intervention |
|--------|--------------|
| Abscess | Drainage |
| Infected hardware | Removal |
| Necrotizing fasciitis | Surgical debridement |
| Cholangitis | ERCP |

## Stroke Management

**Ischemic Stroke:**
| Timeframe | Intervention |
|-----------|--------------|
| 0-4.5 hours | IV tPA if eligible |
| 0-6 hours | Mechanical thrombectomy for large vessel |
| 6-24 hours | Thrombectomy with imaging selection |

**BP Management in Acute Stroke:**
| Situation | BP Threshold | Action |
|-----------|--------------|--------|
| Before tPA | >185/110 | Treat |
| After tPA | >180/105 | Treat |
| No tPA, stable | >220/120 | Treat cautiously |

**Secondary Prevention:**
| Risk Factor | Intervention |
|-------------|--------------|
| Antiplatelet | Aspirin or clopidogrel |
| High-risk | Aspirin + clopidogrel for 21-90 days |
| A-fib | Anticoagulation |
| Carotid stenosis | CEA or stenting |

## Heart Failure Exacerbation

**Acute Management:**
| Goal | Intervention |
|------|--------------|
| Diuresis | IV loop diuretics |
| Afterload reduction | Nitrates, hydralazine |
| Inotropy | Dobutamine, milrinone if needed |
| Non-invasive ventilation | For pulmonary edema |

**Chronic Optimization:**
| Medication | Target Dose | Monitoring |
|------------|-------------|------------|
| ACE-I/ARB/ARNI | Max tolerated | Creatinine, K+ |
| Beta-blocker | Max tolerated | HR, BP |
| MRA | Standard | K+, creatinine |
| SGLT2-I | Standard | Glucose, volume |

## Asthma and COPD

**Asthma Exacerbation:**
| Severity | Treatment |
|----------|-----------|
| Mild | SABA, consider oral steroids |
| Moderate | SABA, ipratropium, oral steroids |
| Severe | SABA continuous, steroids, possible magnesium |
| Life-threatening | Add mechanical ventilation |

**COPD Exacerbation:**
| Intervention | Details |
|--------------|---------|
| Bronchodilators | SABA + ipratropium |
| Steroids | Prednisone 40 mg x 5 days |
| Antibiotics | If 2+ Cardinal symptoms |
| Oxygen | Target 88-92% |
| Ventilation | NIV first line for respiratory acidosis |

## GI Bleeding

**Upper GI Bleed:**
| Intervention | Details |
|--------------|---------|
| Resuscitation | 2 large bore IVs, fluids, crossmatch |
| PPI | High dose IV |
| Octreotide | If variceal suspected |
| Antibiotics | If cirrhosis (ceftriaxone) |
| Endoscopy | Within 24 hours |

**Lower GI Bleed:**
| Action | Timing |
|--------|--------|
| Stabilization | Immediate |
| Colonoscopy | After prep, usually non-urgent |
| CTA | If severe, ongoing |
| Intervention | Angiography or surgery if refractory |

## Opioid Overdose

**Recognition:**
- Respiratory depression
- Pinpoint pupils
- Decreased consciousness

**Management:**
| Step | Action |
|------|--------|
| 1 | Airway support, oxygen |
| 2 | Naloxone 0.4-2 mg IV/IM/IN |
| 3 | Repeat q2-3 min if needed |
| 4 | Monitor for recurrence (duration < heroin) |
| 5 | Supportive care |

## Chronic Disease Protocols

**Hypertension:**
| Stage | BP | Initial Treatment |
|-------|-----|-------------------|
| Stage 1 | 130-139/80-89 | Lifestyle, thiazide, ACE-I, ARB, CCB |
| Stage 2 | >=140/90 | 2-drug combination |
| Target | <130/80 | Most patients |

**Hyperlipidemia:**
| Risk Category | LDL Target | Treatment |
|---------------|------------|-----------|
| Very high (ASCVD) | <70 | High-intensity statin |
| High (DM, CKD) | <100 | Moderate-high intensity |
| Borderline | Risk discussion | Statin if risk-enhancing factors |

**Osteoporosis:**
| T-score | Treatment |
|---------|-----------|
| <=-2.5 | Pharmacotherapy |
| -1.0 to -2.5 | Pharmacotherapy if high FRAX |
| Options | Bisphosphonates first line |
| Duration | Reassess at 3-5 years |

## Procedure Complications

**Central Line:**
| Complication | Prevention | Management |
|--------------|------------|------------|
| Pneumothorax | Ultrasound guidance | Chest tube if large |
| Infection | Sterile technique, removal | Antibiotics |
| Arterial puncture | Ultrasound, pressure | Pressure, monitor |

**Thoracentesis:**
| Complication | Prevention | Management |
|--------------|------------|------------|
| Pneumothorax | Ultrasound guidance | Observation vs chest tube |
| Bleeding | Check coags, avoid if low | Supportive, transfuse |
| Re-expansion pulmonary edema | Limit volume removed | Supportive care |

## Palliative Care

**Symptom Management:**
| Symptom | First-Line | Second-Line |
|---------|------------|-------------|
| Pain | Morphine | Oxycodone, fentanyl |
| Dyspnea | Opioids, oxygen | Benzodiazepines |
| Nausea | Haloperidol, ondansetron | Metoclopramide |
| Constipation | Senna, polyethylene glycol | Rectal interventions |
| Delirium | Haloperidol | Quetiapine |

**Goals of Care:**
- Advance care planning
- Code status discussions
- Hospice referral criteria
- Family meetings`,
      keyTerms: [
        { term: 'door-to-balloon time', definition: 'Time from hospital arrival to PCI in STEMI, goal <90 minutes' },
        { term: 'source control', definition: 'Physical removal or control of the source of infection' },
        { term: 'mechanical thrombectomy', definition: 'Physical removal of clot from cerebral artery in stroke' },
        { term: 'high-intensity statin', definition: 'Statins that reduce LDL by >=50%' },
      ],
      analogies: [
        'STEMI management is like unclogging a drain - you need to open the blockage quickly to prevent damage.',
        'Sepsis bundles are like emergency checklists - they ensure nothing important is missed during a crisis.',
      ],
      examples: [
        'A patient with STEMI receives aspirin, clopidogrel, heparin, and goes to the cath lab within 90 minutes of arrival.',
        'COPD exacerbation is treated with bronchodilators, steroids, and antibiotics if indicated, with NIV for respiratory acidosis.',
      ],
      patientCounselingPoints: [
        'Evidence-based protocols ensure patients receive the best proven treatments',
        'Time-critical conditions like heart attack and stroke require rapid intervention',
      ],
    },

    4: {
      level: 4,
      summary: 'Advanced Step 2 management requires understanding treatment algorithms, monitoring strategies, complication prevention, and patient safety. Expert preparation integrates multiple management domains with clinical reasoning and quality improvement.',
      explanation: `## Advanced Step 2 Management Concepts

Professional-level management mastery requires understanding complex treatment protocols, patient safety, quality metrics, and systems-based care.

## Complex Clinical Scenarios

**Multi-Organ Dysfunction:**
| Scenario | Priorities | Management |
|----------|------------|------------|
| Cardiorenal syndrome | Balance volume | Diuretics, inotropes, ultrafiltration |
| Hepatorenal syndrome | Avoid nephrotoxins | Terlipressin, albumin, TIPS |
| Pulmonary-renal | Immunosuppression | Plasmapheresis, steroids |

**End-of-Life Decision Making:**
| Situation | Consideration |
|-----------|---------------|
| Withdrawing care | Ethical, legal frameworks |
| DNR/DNI | Patient/family discussions |
| Palliative sedation | Refractory symptom management |
| Organ donation | Family approach, coordination |

**Transitions of Care:**
| Transition | Risks | Mitigation |
|------------|-------|------------|
| Hospital to home | Medication errors | Reconciliation, education |
| ICU to floor | Deterioration | Careful monitoring |
| Hospital to SNF | Information loss | Clear handoffs |

## Quality and Safety

**Never Events:**
| Event | Prevention |
|-------|------------|
| Wrong-site surgery | Time-out, marking |
| Retained foreign body | Counts, imaging |
| Falls | Risk assessment, precautions |
| Pressure injuries | Turning, skin care |
| CAUTI | Removal protocols |
| CLABSI | Bundle compliance |

**Medication Safety:**
| Strategy | Implementation |
|----------|----------------|
| Reconciliation | At every transition |
| Double-check | High-risk medications |
| Alert systems | CPOE integration |
| Override monitoring | Track alert responses |

**Anticoagulation Safety:**
| Risk | Mitigation |
|------|------------|
| Bleeding | Reversal agents, protocols |
| Drug interactions | Pharmacist review |
| Monitoring | Lab tracking systems |
| Education | Patient counseling |

## Procedure Competency

**Informed Consent:**
| Element | Content |
|---------|---------|
| Indication | Why procedure needed |
| Nature | What will be done |
| Risks | Common and serious |
| Benefits | Expected outcomes |
| Alternatives | Other options |

**Complication Management:**
| Procedure | Serious Complication | Response |
|-----------|---------------------|----------|
| Paracentesis | Hemorrhage | Resuscitation, IR |
| Thoracentesis | Pneumothorax | Observation, chest tube |
| Lumbar puncture | Herniation | CT, neurosurgical consult |
| Central line | Air embolism | Left lateral decubitus, aspiration |

## Chronic Care Management

**Diabetes Comprehensive Care:**
| Domain | Goal | Interventions |
|--------|------|---------------|
| Glycemic | Individualized A1c | Medications, CGM |
| Cardiovascular | Risk reduction | Statins, aspirin, BP |
| Nephropathy | Slow progression | ACE-I/ARB, monitoring |
| Retinopathy | Early detection | Annual exams |
| Neuropathy | Prevent injury | Foot care education |

**Heart Failure Disease Management:**
| Strategy | Implementation |
|----------|----------------|
| Remote monitoring | Weight, symptoms |
| Medication optimization | Guideline-directed |
| Patient education | Self-management |
| Palliative care | Early integration |

## Healthcare-Associated Infections

**Prevention Bundles:**
| Infection | Bundle Components |
|-----------|-------------------|
| CLABSI | Hand hygiene, sterile insertion, chlorhexidine, dressing |
| CAUTI | Insertion indications, aseptic technique, removal |
| VAP | Head elevation, oral care, sedation protocols |
| SSI | Antibiotics, hair removal, glucose control, normothermia |

**Antibiotic Stewardship:**
| Strategy | Implementation |
|----------|----------------|
| De-escalation | Narrow based on cultures |
| IV to PO | Switch when stable |
| Duration | Shortest effective |
| Review | 48-72 hour time-out |

## Patient Education

**Teach-Back Method:**
1. Explain clearly
2. Ask patient to explain back
3. Clarify misunderstandings
4. Repeat until understanding

**High-Risk Topics:**
| Topic | Key Points |
|-------|------------|
| Anticoagulation | Bleeding precautions, monitoring |
| Diabetes | Hypoglycemia, sick day rules |
| Heart failure | Daily weights, sodium restriction |
| Opioids | Storage, disposal, naloxone |

## Outpatient Management

**Hypertension:**
| Resistant HTN | Workup | Management |
|---------------|--------|------------|
| Definition | BP above goal on 3 drugs | - |
| Evaluation | Secondary causes, adherence | - |
| Treatment | Spironolactone, referral | Add MRA, consider SGLT2-I |

**Heart Failure Outpatient:**
| Monitoring | Frequency | Action Threshold |
|------------|-----------|------------------|
| Weight | Daily | Gain >3 lb in 1 week |
| Symptoms | Ongoing | Increasing dyspnea |
| Labs | Periodic | Rising creatinine, K+ |

**COPD Exacerbation Prevention:**
| Strategy | Implementation |
|----------|----------------|
| Smoking cessation | Counseling, medications |
| Vaccinations | Influenza, pneumococcal |
| Inhaler technique | Teach and verify |
| Pulmonary rehab | Referral |

## Cost-Effective Care

**Value-Based Decisions:**
| Scenario | Cost-Effective Choice |
|----------|----------------------|
| DVT diagnosis | Wells score + D-dimer before imaging |
| Low back pain | Conservative management initially |
| Sinusitis | No antibiotics for acute viral |
| Chest pain | HEART score risk stratification |

**Avoiding Low-Value Care:**
| Test | When Not to Use |
|------|-----------------|
| MRI for uncomplicated back pain | First 6 weeks |
| Routine preoperative testing | Low-risk surgery |
| Repeat CBC in stable patients | No clinical indication |
| Antibiotics for viral URI | Most cases |

## Team-Based Care

**Interprofessional Collaboration:**
| Team Member | Role |
|-------------|------|
| Physicians | Diagnosis, treatment decisions |
| Nurses | Monitoring, patient education |
| Pharmacists | Medication management |
| Social workers | Discharge planning, resources |
| Case managers | Care coordination |
| Physical/OT therapists | Rehabilitation |

**Communication:**
| Tool | Application |
|------|-------------|
| SBAR | Handoffs, consultations |
| Closed-loop | Verifying receipt of information |
| huddles | Daily team alignment |
| Debriefs | Post-event learning |`,
      keyTerms: [
        { term: 'bundle', definition: 'A structured way of improving processes of care and patient outcomes by grouping best practices' },
        { term: 'care transition', definition: 'The movement patients make between health care practitioners and settings as their condition and care needs change' },
        { term: ' teach-back', definition: 'A method of checking patient understanding by asking them to explain in their own words' },
        { term: 'never event', definition: 'A serious, largely preventable patient safety incident that should not occur if appropriate preventative measures are taken' },
      ],
      analogies: [
        'Medication reconciliation is like balancing a checkbook - you need to account for every medication at every transition.',
        'Bundles are like pre-flight checklists - they ensure all critical steps are completed every time.',
      ],
      examples: [
        'A CLABSI prevention bundle includes hand hygiene, sterile barrier precautions, chlorhexidine skin prep, and optimal catheter site selection.',
        'Teach-back method involves asking patients to explain their medication regimen to confirm understanding.',
      ],
      patientCounselingPoints: [
        'Safety bundles are groups of proven practices done together to prevent complications',
        'Medication reconciliation helps prevent errors when moving between care settings',
      ],
    },

    5: {
      level: 5,
      summary: 'Expert Step 2 management mastery integrates clinical protocols, patient safety science, quality improvement, and systems-based practice. Professional excellence requires leadership in implementing evidence-based care, teaching clinical reasoning, and advancing patient outcomes.',
      explanation: `## Expert Step 2 Management Framework

Professional-level management mastery synthesizes clinical expertise, quality science, systems thinking, and leadership in healthcare delivery.

## Systems-Based Practice

**Healthcare Delivery Science:**
| Domain | Application |
|--------|-------------|
| Operations | Flow optimization |
| Quality | Continuous improvement |
| Safety | Error prevention |
| Cost | Value-based care |

**Implementation Science:**
| Challenge | Strategy |
|-----------|----------|
| Knowledge gaps | Education |
| Attitude barriers | Engagement, feedback |
| Practice limitations | Workflow redesign |
| System barriers | Policy change |

## Quality Improvement

**QI Methodologies:**
| Method | Application |
|--------|-------------|
| PDSA | Small-scale testing |
| Lean | Waste reduction |
| Six Sigma | Variation reduction |
| IHI bundles | Evidence-based practice |

**Measurement:**
| Type | Examples |
|------|----------|
| Process | Time to antibiotic, DVT prophylaxis |
| Outcome | Mortality, readmissions |
| Balancing | Unintended consequences |

**Sustaining Improvement:**
- Standardization
- Monitoring systems
- Feedback loops
- Culture change

## Patient Safety Science

**High-Reliability Organizations:**
| Principle | Application |
|-----------|-------------|
| Preoccupation with failure | Near-miss reporting |
| Reluctance to simplify | Root cause analysis |
| Sensitivity to operations | Frontline engagement |
| Commitment to resilience | Emergency preparedness |
| Deference to expertise | Team decision-making |

**Just Culture:**
| Behavior | Response |
|----------|----------|
| Human error | Console, fix system |
| At-risk behavior | Coaching |
| Reckless behavior | Disciplinary action |

## Clinical Decision Support

**Electronic Tools:**
| Type | Function |
|------|----------|
| Alerts | Drug interactions, allergies |
| Reminders | Preventive care |
| Order sets | Standardize care |
| Calculators | Risk stratification |
| Guidelines | Evidence at point of care |

**Alert Fatigue:**
| Problem | Solution |
|---------|----------|
| Too many alerts | Tiered alerting |
| Irrelevant alerts | Customization |
| Override rates | Analytics, feedback |

## Population Health

**Risk Stratification:**
| Method | Application |
|--------|-------------|
| Claims data | Predictive models |
| EHR data | Risk scores |
| Social determinants | Health equity |

**Care Management:**
| Strategy | Target |
|----------|--------|
| High-risk care management | Complex patients |
| Preventive outreach | Screening gaps |
| Transitional care | Recent discharges |

**Health Equity:**
| Disparity | Intervention |
|-----------|--------------|
| Access | Telehealth, community health |
| Outcomes | Culturally tailored care |
| Social needs | Social work integration |

## Leadership and Education

**Clinical Teaching:**
| Strategy | Application |
|----------|-------------|
| Bedside teaching | Role modeling |
| Case conferences | Clinical reasoning |
| Simulation | Crisis management |
| Feedback | Specific, actionable |

**Change Leadership:**
| Role | Activities |
|------|------------|
| Champion | Advocate for change |
| Early adopter | Model new practices |
| Opinion leader | Influence peers |

**Professional Development:**
- CME
- Board certification
- Quality improvement projects
- Research participation

## Future Directions

**Digital Health:**
| Innovation | Application |
|------------|-------------|
| AI/ML | Diagnostic support |
| Remote monitoring | Chronic disease |
| Wearables | Real-time data |
| Telehealth | Access expansion |

**Precision Medicine:**
| Application | Example |
|-------------|---------|
| Pharmacogenomics | Warfarin dosing |
| Biomarkers | Cancer therapy selection |
| Genomics | Risk prediction |

**Value-Based Care:**
| Model | Incentives |
|-------|------------|
| ACO | Shared savings |
| Bundled payments | Episode cost |
| Pay for performance | Quality metrics |

## Global Health Management

**Resource-Limited Settings:**
| Challenge | Solution |
|-----------|----------|
| Drug availability | Essential medicines list |
| Diagnostics | Syndromic management |
| Infrastructure | Task shifting |

**Disaster Medicine:**
| Phase | Management |
|-------|------------|
| Preparedness | Plans, stockpiles |
| Response | Triage, surge capacity |
| Recovery | Continuity of care |

**Humanitarian Medicine:**
- Refugee health
- Infectious disease outbreaks
- Malnutrition management
- Mental health

## Ethics and Professionalism

**Complex Decision-Making:**
| Scenario | Framework |
|----------|-----------|
| Resource allocation | Justice, utility |
| End-of-life | Autonomy, beneficence |
| Parental refusal | Best interest, harm principle |
| Conflicts of interest | Disclosure, management |

**Professionalism:**
| Domain | Behaviors |
|--------|-----------|
| Integrity | Honesty, accountability |
| Altruism | Patient-centered |
| Excellence | Continuous learning |
| Duty | Responsiveness |`,
      keyTerms: [
        { term: 'high-reliability organization', definition: 'An organization that has sustained high performance and safety records over time despite operating in hazardous conditions' },
        { term: 'clinical decision support', definition: 'Health information technology systems that provide clinicians with knowledge and person-specific information' },
        { term: 'value-based care', definition: 'Healthcare delivery model that rewards quality of care rather than quantity of services' },
        { term: 'accountable care organization', definition: 'Groups of doctors, hospitals, and other health care providers who come together voluntarily to give coordinated high-quality care' },
      ],
      clinicalNotes: `Expert perspective on Step 2 management:

1. **Evidence-Based First:** Start with treatments proven to work. Guidelines exist because evidence shows benefit.

2. **Patient-Centered Adaptation:** Apply evidence to individual patients. Consider comorbidities, preferences, and context.

3. **Safety Culture:** Report errors and near-misses. Systems should support safety, not blame individuals.

4. **Quality Metrics:** Understand what is measured and why. Measurement drives improvement.

5. **Team-Based Care:** Modern medicine is team sport. Communicate clearly and respect all team members.

6. **Transitions are Dangerous:** Most errors occur at handoffs. Use structured communication and medication reconciliation.

7. **Prevention is Paramount:** Preventing disease beats treating it. Prioritize preventive care.

8. **Cost-Consciousness:** Resources are limited. Choose high-value care and avoid low-value testing.

9. **Palliative Integration:** Palliative care is not just end-of-life. Integrate early for serious illness.

10. **Continuous Improvement:** Medicine evolves. Commit to lifelong learning and quality improvement in your practice.`,
    },
  },

  media: [
    {
      id: 'management-algorithm',
      type: 'diagram',
      filename: 'management-algorithm.svg',
      title: 'Clinical Management Algorithm',
      description: 'Decision tree for common clinical scenarios',
    },
    {
      id: 'bundle-components',
      type: 'diagram',
      filename: 'bundle-components.svg',
      title: 'Infection Prevention Bundle',
      description: 'Components of evidence-based care bundles',
    },
  ],

  citations: [
    {
      id: 'first-aid-step2',
      type: 'textbook',
      title: 'First Aid for the USMLE Step 2 CK',
      source: 'McGraw-Hill',
      accessedDate: '2025-01-28',
    },
    {
      id: 'acc-aha-guidelines',
      type: 'website',
      title: 'ACC/AHA Clinical Practice Guidelines',
      source: 'American College of Cardiology',
      url: 'https://www.acc.org/guidelines',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'education-usmle-step2-overview', targetType: 'concept', relationship: 'parent', label: 'Step 2 Overview' },
    { targetId: 'education-usmle-step2-diagnosis', targetType: 'concept', relationship: 'related', label: 'Step 2 Diagnosis' },
    { targetId: 'education-evidence-based-medicine', targetType: 'concept', relationship: 'related', label: 'Evidence-Based Medicine' },
  ],

  tags: {
    systems: ['medical-education'],
    topics: ['USMLE Step 2', 'management', 'treatment', 'patient care'],
    keywords: ['USMLE', 'Step 2', 'management', 'treatment', 'clinical care'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default step2Management;
