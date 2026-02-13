/**
 * When to See the Doctor for Children
 *
 * Educational content helping parents recognize when a child's symptoms
 * require medical evaluation, differentiating emergencies from urgent
 * and routine concerns across age groups.
 */

import { EducationalContent } from '../types';

export const whenToSeeDoctorChildrenContent: EducationalContent = {
  id: 'topic-when-to-see-doctor-children',
  type: 'topic',
  name: 'When to See the Doctor for Children',
  nameEs: 'Cuando Llevar al Nino al Doctor',
  alternateNames: ['Pediatric warning signs', 'When to go to ER with child', 'Sick child guide'],

  levels: {
    1: {
      level: 1,
      summary:
        'Knowing when your child needs medical care and when you can safely treat them at home helps you make the right decisions and avoid unnecessary worry.',
      explanation: `As a parent, it can be hard to know when to call the doctor and when your child will be fine with rest and home care. Here is a guide to help you decide.

**Call 911 or Go to the ER Immediately If Your Child:**
- Has trouble breathing (gasping, turning blue, ribs showing with each breath)
- Is unconscious, very hard to wake up, or has a seizure
- Has a severe allergic reaction (swelling of face/throat, difficulty breathing, hives all over)
- Has been in a serious accident or has a major injury
- Has swallowed something dangerous (poison, medicine, battery)
- Is a newborn (under 3 months) with a fever of 100.4 F (38 C) or higher
- Has sudden severe abdominal pain that does not go away

**Call Your Doctor the Same Day If Your Child:**
- Has a fever of 104 F (40 C) or higher (any age)
- Has a fever lasting more than 3 days
- Has ear pain, especially with fever
- Has a sore throat with fever, especially if unable to swallow
- Has vomiting or diarrhea and cannot keep fluids down for 8+ hours
- Has a rash that does not fade when you press on it (could be serious)
- Has eye redness with thick yellow or green discharge
- Is limping or refusing to walk or use an arm
- Has painful or frequent urination

**Monitor at Home (Call if Not Improving in 2-3 Days):**
- Common cold with runny nose, mild cough, low-grade fever
- Mild sore throat without fever
- Mild stomach ache that comes and goes
- Single episode of vomiting without other symptoms
- Minor scrapes, cuts, or bruises
- Mild rash without fever or other symptoms

**Age-Specific Fever Guidelines**
| Age | When to Call |
|-----|------------|
| Under 3 months | ANY fever of 100.4 F or higher (emergency) |
| 3-6 months | Fever of 102 F or higher |
| 6-24 months | Fever over 102 F lasting more than 1 day |
| Over 2 years | Fever over 104 F or lasting more than 3 days |
| Any age | Fever with rash, stiff neck, severe headache, or unusual behavior |

**Signs of Dehydration (Need Medical Attention)**
- Dry mouth and no tears when crying
- No wet diaper for 6+ hours (infant) or 8+ hours (older child)
- Sunken soft spot on a baby's head
- Sunken eyes
- Very dark urine
- Unusually sleepy or irritable

**How to Describe Symptoms to the Doctor**
- When did the symptoms start?
- What is the temperature (if fever)?
- Is your child eating and drinking? How much?
- How many wet diapers or bathroom trips?
- Has your child been around anyone sick?
- Have you given any medicine? Did it help?
- What worries you most?

**Trust Your Instincts**
- You know your child best. If something feels wrong, call your doctor
- Doctors would rather hear from you too early than too late
- Keep your pediatrician's number and after-hours line in your phone`,
      keyTerms: [
        { term: 'fever', definition: 'A body temperature of 100.4 F (38 C) or higher; it means the body is fighting an infection; usually not dangerous on its own' },
        { term: 'dehydration', definition: 'When the body does not have enough water to work properly; caused by vomiting, diarrhea, or not drinking enough' },
        { term: 'seizure', definition: 'Sudden uncontrolled shaking or stiffening of the body caused by abnormal electrical activity in the brain; always needs medical attention in children' },
        { term: 'anaphylaxis', definition: 'A severe, life-threatening allergic reaction that can cause breathing difficulty, swelling, and drop in blood pressure; requires immediate epinephrine' },
        { term: 'non-blanching rash', definition: 'A rash that does not fade when you press on it with a glass; can be a sign of a serious infection and needs urgent medical evaluation' },
        { term: 'febrile seizure', definition: 'A seizure triggered by fever in young children (6 months to 5 years); usually harmless but frightening; needs medical evaluation the first time it happens' },
      ],
      analogies: [
        'Think of fever as your child\'s fire alarm. The alarm itself is not the problem; it is alerting you that the body is fighting something. The question is whether the fire is small (a cold) or big (a serious infection).',
        'Dehydration is like a plant that has not been watered. The first signs are wilting (dry mouth, less energy), but if it goes too long without water, the damage gets serious.',
        'Your parent instincts are like a built-in warning system. If your gut says something is wrong, listen to it and call the doctor.',
      ],
      patientCounselingPoints: [
        'A fever in a baby under 3 months old is always an emergency, even if the baby looks well. Go to the emergency room right away.',
        'High fever alone does not mean a more serious illness. How your child looks and acts is often more important than the number on the thermometer.',
        'Keep a simple first aid kit at home with a thermometer, acetaminophen, ibuprofen (for children over 6 months), bandages, and your doctor\'s number.',
        'If your child has a febrile seizure, place them on their side, do not put anything in their mouth, and call 911 if it lasts more than 5 minutes.',
      ],
    },
    2: {
      level: 2,
      summary:
        'Pediatric triage involves age-specific vital sign assessment, recognition of red-flag symptoms, understanding common pediatric illness patterns, and systematic evaluation of illness severity to guide appropriate care-seeking behavior.',
      explanation: `**Pediatric Vital Sign Norms by Age**
| Age | Heart Rate | Respiratory Rate | Systolic BP | Temperature |
|-----|-----------|------------------|------------|------------|
| Newborn | 100-160 | 30-60 | 60-90 | 97.7-99.5 F (axillary) |
| 1-12 months | 100-150 | 25-50 | 80-100 | Rectal preferred |
| 1-3 years | 90-140 | 20-30 | 80-110 | Rectal or tympanic |
| 4-6 years | 80-120 | 18-25 | 85-115 | Oral or tympanic |
| 7-12 years | 70-110 | 16-22 | 90-120 | Oral |
| 13-18 years | 60-100 | 12-20 | 100-130 | Oral |

**Fever Assessment Framework**
| Factor | Low Risk | High Risk |
|--------|---------|-----------|
| Appearance | Alert, playful, good color | Lethargic, pale, mottled, irritable |
| Hydration | Drinking well; adequate urine output | Refusing fluids; decreased output |
| Activity | Active when fever controlled | Inactive even when fever treated |
| Duration | <3 days | >5 days; biphasic (better then worse) |
| Associated symptoms | Runny nose, mild cough | Stiff neck, rash, severe headache |
| Age | >3 months; fully immunized | <3 months; unimmunized; immunocompromised |

**Red Flag Symptoms Requiring Urgent Evaluation**
| System | Red Flags |
|--------|----------|
| Respiratory | Stridor; grunting; accessory muscle use; SpO2 <92%; cyanosis; apnea |
| Neurological | Bulging fontanelle; seizure (first or prolonged); altered consciousness; meningism |
| Cardiovascular | Pallor or mottling; weak pulses; capillary refill >3 seconds; tachycardia out of proportion to fever |
| GI | Bilious (green) vomiting; bloody stool; severe abdominal pain with guarding; abdominal distension |
| Skin | Petechiae/purpura (non-blanching); rapidly spreading erythema; burns >5% BSA |
| Musculoskeletal | Inability to bear weight; joint swelling with fever; refusal to move a limb |
| Urinary | Decreased urine output; hematuria; flank pain with fever |

**Common Pediatric Presentations: When to Worry**
| Condition | Usually Self-Limited | Seek Medical Care |
|-----------|---------------------|-------------------|
| Cough/cold | Clear rhinorrhea; mild cough; 7-10 day course | Persistent fever; worsening after initial improvement; breathing difficulty |
| Gastroenteritis | Mild vomiting/diarrhea; tolerating fluids | Dehydration signs; bilious vomit; bloody stool; high fever; >7 days |
| Ear pain | Mild pain responsive to analgesics; age >2 | Severe pain; fever >102 F; drainage from ear; age <6 months |
| Sore throat | Mild pain; no fever; no difficulty swallowing | Fever; tonsillar exudate; difficulty swallowing or breathing; drooling |
| Rash | Blanching; no fever; no other symptoms | Non-blanching; fever; spreading rapidly; blistering; mucous membrane involvement |
| Abdominal pain | Diffuse; intermittent; no fever; no vomiting | RLQ pain; rebound tenderness; bloody stool; bilious vomit; progressive |

**Telephone Triage Principles**
| Priority | Response |
|----------|---------|
| Life-threatening | Call 911 immediately |
| Emergent | Go to ER within 1 hour |
| Urgent | Same-day office visit |
| Acute | Office visit within 24-48 hours |
| Non-urgent | Next available appointment |

**Poison Ingestion Protocol**
- Call Poison Control (1-800-222-1222) for any suspected ingestion
- Identify the substance, amount, and time of ingestion
- Do NOT induce vomiting unless instructed
- Bring the container to the ER
- Common dangerous ingestions in children: medications (acetaminophen, iron), batteries (button), cleaning products, essential oils`,
      keyTerms: [
        { term: 'petechiae', definition: 'Tiny red or purple dots on the skin that do not fade when pressed; can indicate a bleeding disorder or serious infection like meningococcemia' },
        { term: 'stridor', definition: 'A high-pitched sound heard during breathing in, indicating upper airway narrowing; common causes include croup, foreign body, and epiglottitis' },
        { term: 'bilious vomiting', definition: 'Green-colored vomit containing bile; in infants, this is a surgical emergency until malrotation with volvulus is ruled out' },
        { term: 'capillary refill time', definition: 'Time for color to return after pressing on a fingertip or toenail; normal is less than 2-3 seconds; prolonged refill suggests poor circulation or shock' },
        { term: 'meningism', definition: 'Signs of meningeal irritation including neck stiffness, headache, and photophobia; suggests possible meningitis requiring urgent lumbar puncture' },
        { term: 'Pediatric Assessment Triangle', definition: 'A rapid visual assessment tool evaluating appearance (muscle tone, interactiveness), work of breathing, and circulation to skin; guides initial triage without touching the child' },
      ],
      patientCounselingPoints: [
        'How your child acts is more important than the fever number. A child who is playful and drinking well at 103 F is usually less concerning than a lethargic child at 101 F.',
        'Green vomit (bilious) in a baby is an emergency. It can be a sign of a twisted intestine that needs surgery immediately.',
        'A rash that does not fade when you press a glass against it needs urgent evaluation. It could be a sign of a serious blood infection.',
        'Save Poison Control\'s number (1-800-222-1222) in your phone now. They provide free, expert advice 24 hours a day.',
      ],
    },
    3: {
      level: 3,
      summary:
        'Pediatric illness assessment integrates systematic clinical evaluation using validated triage tools, age-specific differential diagnosis frameworks, evidence-based management algorithms, and understanding of red-flag pathophysiology to optimize care-seeking decisions.',
      explanation: `**Pediatric Assessment Triangle (PAT)**
| Component | Assessment | Abnormal Findings |
|-----------|-----------|------------------|
| Appearance (TICLS) | Tone, Interactiveness, Consolability, Look/gaze, Speech/cry | Limp, unresponsive, inconsolable, glassy-eyed, weak cry |
| Work of Breathing | Respiratory rate, retractions, nasal flaring, head bobbing, stridor, wheezing, grunting | Any of these suggests significant respiratory distress |
| Circulation to Skin | Color, mottling, pallor, cyanosis | Pale, mottled, or cyanotic skin suggests cardiovascular compromise |

**PAT-Based Triage Categories:**
| PAT Finding | Category | Action |
|-------------|---------|--------|
| All normal | Stable | Routine evaluation |
| Abnormal appearance only | CNS/metabolic dysfunction | Consider sepsis, metabolic, toxicologic, neurologic |
| Abnormal breathing only | Respiratory distress | Evaluate airway; consider asthma, croup, pneumonia, FB |
| Abnormal appearance + breathing | Respiratory failure | Immediate intervention; prepare for intubation |
| Abnormal circulation only | Compensated shock | IV access; fluid resuscitation; identify source |
| Abnormal appearance + circulation | Decompensated shock | Aggressive resuscitation; PALS algorithms |
| All abnormal | Cardiopulmonary failure | Immediate resuscitation; PALS |

**Febrile Infant < 60 Days: Risk Stratification**
| Tool | Components | Low-Risk Criteria |
|------|-----------|------------------|
| Rochester criteria | WBC 5,000-15,000; band count <1,500; UA normal; stool WBC <5/HPF (if diarrhea) | Meet all criteria: 1% SBI risk |
| Philadelphia protocol | WBC <15,000; band-to-neutrophil ratio <0.2; UA normal; CSF normal; CXR normal | Very restrictive; rarely used now |
| Step-by-step approach (Mintegi) | Age, appearance, procalcitonin, CRP, UA, ANC | PCT <0.5 ng/mL identifies low-risk with high sensitivity |
| Biomarker-enhanced | Procalcitonin + CRP + UA | PCT <0.5 + CRP <20 + UA negative = low SBI risk |

**Procalcitonin in Pediatric Fever:**
- More specific than CRP for bacterial infection
- Rises within 2-4 hours of infection (faster than CRP)
- PCT <0.5 ng/mL: low risk of serious bacterial infection
- PCT >2 ng/mL: high risk of SBI; consider bacteremia/meningitis
- Helps reduce unnecessary antibiotic use and hospitalization

**Abdominal Pain: Age-Based Differential Diagnosis**
| Age Group | Common Causes | Surgical Emergencies |
|-----------|-------------|---------------------|
| Neonate | NEC, Hirschsprung, malrotation/volvulus, incarcerated hernia | Malrotation with volvulus; NEC with perforation |
| Infant (1-12 mo) | Intussusception, incarcerated hernia, gastroenteritis | Intussusception (target sign on US); incarcerated hernia |
| Toddler (1-5 yr) | Gastroenteritis, constipation, UTI, Henoch-Schonlein purpura | Intussusception; appendicitis (rare but occurs) |
| School age (5-12 yr) | Constipation, gastroenteritis, appendicitis, mesenteric adenitis | Appendicitis (most common surgical emergency) |
| Adolescent | Appendicitis, ovarian torsion/cyst, testicular torsion, PID | Appendicitis; ovarian torsion; testicular torsion |

**Respiratory Assessment: PEWS Integration**
| Pediatric Early Warning Score Component | Score 0 | Score 1 | Score 2 | Score 3 |
|-----------------------------------------|---------|---------|---------|---------|
| Behavior | Playing/appropriate | Sleeping | Irritable | Lethargic/confused |
| Cardiovascular | Pink; CRT 1-2s | Pale; CRT 3s | Grey; CRT 4s | Grey/cyanotic; CRT >=5s |
| Respiratory | Normal rate; no retractions | >10 above normal; nasal flaring | >20 above normal; retractions | 5 below normal + retractions + grunting |

**PEWS >=3:** Requires escalation and physician evaluation
**PEWS >=5:** Requires urgent intervention; consider PICU

**Dehydration Assessment and Management**
| Severity | Clinical Signs | Fluid Deficit | Management |
|----------|---------------|--------------|-----------|
| Mild (3-5%) | Slightly dry mouth; slightly decreased urine | 30-50 mL/kg | Oral rehydration therapy (ORT) at home |
| Moderate (6-9%) | Dry mouth; sunken eyes; decreased skin turgor; tachycardia | 60-90 mL/kg | ORT; office or ED evaluation; consider IV if failing ORT |
| Severe (>=10%) | Lethargy; sunken fontanelle; absent tears; anuria; weak pulse | >=100 mL/kg | IV bolus 20 mL/kg NS; reassess; replace deficit over 24-48h |`,
      keyTerms: [
        { term: 'Pediatric Assessment Triangle', definition: 'Rapid visual triage tool assessing appearance (TICLS), work of breathing, and circulation to skin without physical contact; categorizes children into stable, distressed, or failing physiological states' },
        { term: 'procalcitonin', definition: 'Biomarker rising within 2-4 hours of bacterial infection; more specific than CRP for serious bacterial infection; values below 0.5 ng/mL help identify low-risk febrile infants' },
        { term: 'PEWS', definition: 'Pediatric Early Warning Score; nursing-assessed scoring system for inpatient deterioration detection; components include behavior, cardiovascular status, and respiratory effort; scores >=3 trigger escalation' },
        { term: 'intussusception', definition: 'Telescoping of one bowel segment into another, most commonly ileocolic; presents with episodic abdominal pain, currant jelly stool, and target sign on ultrasound; air or hydrostatic enema reduction' },
        { term: 'malrotation with volvulus', definition: 'Surgical emergency where incompletely rotated bowel twists on the mesenteric root, causing bowel ischemia; presents with bilious vomiting in a neonate; upper GI series is diagnostic' },
        { term: 'serious bacterial infection', definition: 'Bacteremia, UTI, meningitis, or bacterial pneumonia in a febrile infant; risk stratification using clinical criteria and biomarkers guides management decisions' },
      ],
    },
    4: {
      level: 4,
      summary:
        'Advanced pediatric triage integrates biomarker-enhanced risk stratification, clinical decision rules for common surgical emergencies, sepsis recognition and management protocols, and evidence-based approaches to diagnostic testing in children.',
      explanation: `**Pediatric Sepsis Recognition (pSOFA/Surviving Sepsis Campaign)**
| Component | Criteria |
|-----------|---------|
| Suspected infection | Clinical or laboratory evidence of infection |
| Organ dysfunction | pSOFA score >=2 points from baseline |
| Septic shock | Sepsis + cardiovascular dysfunction despite >=40 mL/kg fluid |

**pSOFA Score Components:**
| System | Score 0 | Score 1 | Score 2 | Score 3-4 |
|--------|---------|---------|---------|-----------|
| Respiratory | PaO2/FiO2 >400 | 300-400 | 200-300 | <200 |
| Coagulation | Platelets >150 | 100-150 | 50-100 | <50 |
| Liver | Bilirubin <1.2 | 1.2-2 | 2-6 | >6 |
| Cardiovascular | No hypotension | MAP low for age | Dopamine <=5 | Epi/norepi required |
| Neurological | GCS 15 | 13-14 | 10-12 | <10 |
| Renal | Creatinine normal | 1.5-2x baseline | 2-3x baseline | >3x baseline |

**Sepsis Hour-1 Bundle (Pediatric):**
1. Measure lactate
2. Obtain blood cultures before antibiotics
3. Administer broad-spectrum antibiotics within 1 hour
4. Begin fluid resuscitation (20 mL/kg NS bolus; reassess after each bolus; up to 40-60 mL/kg in first hour)
5. Apply vasopressors if hypotensive after fluid resuscitation (epinephrine or norepinephrine)

**Appendicitis Clinical Decision Rules**
| Rule | Components | Application |
|------|-----------|------------|
| Pediatric Appendicitis Score (PAS) | RLQ pain, cough/hop tenderness, anorexia, fever, nausea/vomiting, migration, WBC >10K, ANC >7.5K | Score >=7: likely appendicitis; <=3: low risk |
| Alvarado Score (MANTRELS) | Migration, Anorexia, Nausea, Tenderness RLQ, Rebound, Elevated temp, Leukocytosis, Shift left | Higher score = higher appendicitis probability |
| Imaging pathway | Low risk: observe; Moderate: US first; High risk: surgical consult +/- CT | US sensitivity 86-92% for appendicitis in children |

**Febrile Seizure Management**
| Type | Features | Management | Prognosis |
|------|----------|-----------|-----------|
| Simple | <15 min; generalized; single episode in 24h; age 6mo-5yr | Observation; no workup needed if recovered to baseline | 30% recurrence risk; no epilepsy risk increase |
| Complex | >15 min; focal; multiple in 24h; age <6mo or >5yr | EEG consideration; possible LP if meningitis suspected | Slightly increased epilepsy risk; depends on features |
| Status epilepticus | >5 min continuous or repeated without recovery | Benzodiazepine (midazolam IM/IN or lorazepam IV); PALS | Requires emergent management |

**Testicular Torsion: Time-Sensitive Emergency**
| Time to Detorsion | Salvage Rate |
|-------------------|-------------|
| <6 hours | 90-100% |
| 6-12 hours | 50% |
| 12-24 hours | 10-20% |
| >24 hours | <5% |

**Clinical Features:** Sudden onset severe testicular pain; absent cremasteric reflex; high-riding testis; nausea/vomiting
**Diagnosis:** Clinical; do NOT delay for imaging if high suspicion; Doppler US if equivocal
**Management:** Immediate surgical exploration and orchiopexy; bilateral fixation

**Evidence-Based Diagnostic Testing in Pediatric Fever**
| Test | When to Order | When NOT to Order |
|------|-------------|------------------|
| CBC with differential | Ill-appearing child; age <3 months; prolonged fever; suspected SBI | Well-appearing child >3 months with clear viral syndrome |
| Blood culture | Before antibiotics in suspected SBI; ill-appearing; febrile infant <60 days | Routine fever in well-appearing child with clear source |
| Urinalysis/culture | Febrile infant without clear source; girls <2yr; uncircumcised boys <12mo | Child with obvious respiratory viral illness |
| Lumbar puncture | Febrile infant <28 days (always); 28-60 days (if ill-appearing or abnormal labs) | Well-appearing febrile child >60 days with clear source |
| Chest X-ray | Tachypnea, hypoxia, focal findings on exam | Uncomplicated upper respiratory infection; routine fever |
| Rapid strep test | Sore throat with fever, exudate, cervical adenopathy in child >3 years | Sore throat with cough, rhinorrhea, hoarseness (viral) |`,
      keyTerms: [
        { term: 'pSOFA score', definition: 'Pediatric Sequential Organ Failure Assessment; age-adapted scoring system used to define organ dysfunction in pediatric sepsis; score >=2 from baseline indicates organ dysfunction' },
        { term: 'Pediatric Appendicitis Score', definition: 'Clinical prediction rule using 8 variables to stratify appendicitis risk in children; scores <=3 indicate low risk (safe to observe); >=7 indicate high probability requiring surgical consultation' },
        { term: 'simple febrile seizure', definition: 'Generalized seizure lasting less than 15 minutes occurring once in 24 hours in a child 6 months to 5 years with fever; benign prognosis with 30% recurrence risk; no workup needed if child returns to baseline' },
        { term: 'testicular torsion', definition: 'Surgical emergency where the spermatic cord twists, cutting off blood supply to the testis; salvage rate drops from 90-100% at less than 6 hours to less than 5% beyond 24 hours' },
        { term: 'sepsis hour-1 bundle', definition: 'Evidence-based protocol requiring lactate measurement, blood cultures, broad-spectrum antibiotics, and fluid resuscitation within the first hour of sepsis recognition to reduce mortality' },
        { term: 'cremasteric reflex', definition: 'Contraction of the cremaster muscle causing testicular elevation when the inner thigh is stroked; absence is a key clinical finding in testicular torsion' },
      ],
      clinicalNotes:
        'The Surviving Sepsis Campaign pediatric guidelines (2020) emphasize a 1-hour bundle approach. Delayed antibiotic administration beyond 1 hour increases mortality. Fluid resuscitation should use clinical reassessment after each 20 mL/kg bolus; reassess for hepatomegaly, crackles, or worsening respiratory distress before giving additional fluid. For appendicitis, ultrasound-first imaging strategy reduces CT radiation exposure by 50% in children without reducing diagnostic accuracy. Testicular torsion requires a "door-to-OR" mindset; if clinical suspicion is high, do not wait for Doppler ultrasonography. The cremasteric reflex is the most useful physical exam finding (absent in >99% of torsion cases).',
    },
    5: {
      level: 5,
      summary:
        'Expert pediatric triage integrates precision biomarkers, AI-assisted clinical decision support, genomics of susceptibility to severe infections, health systems optimization for pediatric emergency care, and translational research on early recognition of deterioration.',
      explanation: `**Precision Biomarkers for Pediatric Infection Severity**
| Biomarker | Mechanism | Clinical Application |
|-----------|-----------|---------------------|
| Procalcitonin (PCT) | Released by C-cells and extrathyroidal tissues in bacterial infection | Best single biomarker for SBI; guides antibiotic stewardship |
| CRP | Hepatic acute-phase protein; rises 12-24h after infection | Moderate discriminatory value; useful for monitoring treatment response |
| IL-6 | Pro-inflammatory cytokine; earliest-rising biomarker | Rapid rise (2-4h); useful in neonatal sepsis; returns to baseline quickly |
| Presepsin (sCD14-ST) | Soluble CD14 released during phagocytosis | Emerging neonatal sepsis biomarker; rises before PCT |
| RNA host response signatures | PERSEVERE (2-gene model); ImmunID | 90%+ sensitivity for bacterial infection; distinguish bacterial from viral; not yet widely available |
| Neutrophil CD64 | Upregulated on neutrophils during bacterial infection | Point-of-care flow cytometry; good neonatal sepsis marker |

**AI and Machine Learning in Pediatric Triage**
| Application | Evidence |
|-------------|---------|
| Automated vital sign pattern recognition | Heart rate variability analysis predicts deterioration 6-24 hours before clinical recognition |
| PEWS augmentation | ML models improve PEWS predictive performance for PICU transfer |
| Natural language processing | Automated extraction of concerning symptoms from triage notes |
| Sepsis prediction | EHR-based models using vital signs + labs predict sepsis 4-12 hours before clinical recognition |
| Imaging AI | Deep learning for appendicitis detection on ultrasound; CXR pneumonia classification |

**Genomics of Susceptibility to Severe Infections**
| Gene/Pathway | Association | Implication |
|-------------|-------------|------------|
| TLR4 polymorphisms | Impaired gram-negative recognition | Increased susceptibility to meningococcal disease |
| IRAK-4/MyD88 deficiency | Impaired TLR signaling | Severe pyogenic infections in early childhood |
| Complement deficiency (C5-C9) | Impaired membrane attack complex | Recurrent Neisseria infections; meningococcemia |
| STAT1 gain-of-function | Impaired Th17 response | Chronic mucocutaneous candidiasis |
| Interferon pathway defects | Impaired antiviral immunity | Severe viral infections; predisposition to HSV encephalitis |

**Health Systems Optimization for Pediatric Emergency Care**
| Strategy | Evidence |
|----------|---------|
| Pediatric-specific ED protocols | Reduce time to antibiotics in sepsis by 30-50% |
| Simulation-based team training | Improves resuscitation outcomes and teamwork |
| Telemedicine triage | Remote PAT assessment; appropriate ED utilization guidance |
| Pediatric readiness (EMSC) | National assessment score correlates with mortality outcomes |
| Community paramedicine | Pediatric-specific EMS training reduces undertriage |

**Translational Research: Early Recognition of Deterioration**
| Research Area | Status |
|---------------|--------|
| Continuous vital sign monitoring (wearables) | Pediatric wearable devices detecting fever, tachypnea, desaturation in real-time |
| Salivary biomarkers | Non-invasive PCT and CRP measurement; prototype stage |
| Point-of-care transcriptomics | Bedside RNA host response panels (30-minute turnaround); clinical trials |
| Breath analysis | Volatile organic compound (VOC) patterns distinguish bacterial from viral infection |
| Digital phenotyping | Smartphone-based assessment of activity, sleep, and feeding patterns to detect early illness |

**Quality Metrics in Pediatric Emergency Care**
| Metric | Target |
|--------|--------|
| Door-to-antibiotic in sepsis | <60 minutes |
| Pain assessment documentation | 100% |
| Weight-based medication dosing | 100% (Broselow tape for estimated weight) |
| Appropriate imaging utilization | CT rate for appendicitis: <50% with US-first protocol |
| Family presence during resuscitation | Offered in 100% of cases |
| Discharge instruction comprehension | Teach-back method verification |`,
      keyTerms: [
        { term: 'PERSEVERE', definition: 'Pediatric Sepsis Biomarker Risk Model; a gene expression-based classifier using blood RNA signatures to stratify sepsis mortality risk in children; demonstrates superior performance to clinical scoring systems' },
        { term: 'IRAK-4 deficiency', definition: 'Primary immunodeficiency in the TLR signaling pathway causing impaired innate immune response to pyogenic bacteria; children present with recurrent invasive bacterial infections in early life' },
        { term: 'pediatric readiness score', definition: 'National assessment of emergency department capacity to care for children; includes equipment, policies, staffing, and quality improvement; higher scores correlate with lower pediatric mortality' },
        { term: 'presepsin', definition: 'Soluble CD14 subtype released during bacterial phagocytosis; emerging biomarker for neonatal sepsis detection that rises before procalcitonin and has good discriminatory performance' },
        { term: 'Broselow tape', definition: 'Length-based color-coded tape for estimating pediatric weight in emergency settings; guides medication dosing and equipment selection when actual weight is unknown' },
      ],
      clinicalNotes: `**Expert Integration:**
- RNA host response signatures (e.g., PERSEVERE, the 2-gene bacterial/viral classifier) represent the most transformative diagnostic advance in pediatric infectious disease assessment. These assays can distinguish bacterial from viral infection with >90% accuracy in under 60 minutes. Clinical deployment is anticipated within 3-5 years.
- Primary immunodeficiency should be considered in any child with recurrent severe or unusual infections. IRAK-4 and MyD88 deficiency are underdiagnosed; children can appear immunologically normal between episodes. A high index of suspicion with early immunology referral is critical.
- AI-based sepsis prediction models using EHR data show promise for detecting deterioration 4-12 hours before clinical recognition, but prospective validation in diverse pediatric populations is still needed. Implementation must address alarm fatigue.
- The EMSC pediatric readiness assessment should drive health system investment. Every 1-point increase in the national pediatric readiness score is associated with lower odds of mortality. Many community EDs score poorly on pediatric readiness metrics.
- Point-of-care transcriptomics and breath analysis VOC panels may eventually enable rapid bedside bacterial vs. viral differentiation, fundamentally changing antibiotic prescribing patterns in pediatric acute care.`,
    },
  },

  media: [],

  citations: [
    { id: 'ssc-peds-2020', type: 'guideline', title: 'Surviving Sepsis Campaign International Guidelines for the Management of Septic Shock and Sepsis-Associated Organ Dysfunction in Children', authors: ['Weiss, S.L.', 'Peters, M.J.'], source: 'Pediatric Critical Care Medicine', url: 'https://doi.org/10.1097/PCC.0000000000002198' },
    { id: 'aap-febrile-infant-2021', type: 'guideline', title: 'Clinical Practice Guideline: Evaluation and Management of Well-Appearing Febrile Infants 8 to 60 Days Old', authors: ['Pantell, R.H.', 'Roberts, K.B.'], source: 'Pediatrics', url: 'https://doi.org/10.1542/peds.2021-052228' },
  ],

  crossReferences: [
    { targetId: 'topic-common-childhood-illnesses', targetType: 'topic', relationship: 'related', label: 'Common Childhood Illnesses Guide' },
    { targetId: 'topic-immunization-guide-parents', targetType: 'topic', relationship: 'related', label: 'Immunization Guide for Parents' },
  ],

  tags: {
    systems: ['immune', 'respiratory', 'digestive', 'nervous'],
    topics: ['pediatrics', 'emergency medicine', 'primary care', 'triage'],
    keywords: ['fever', 'pediatric emergency', 'when to call doctor', 'warning signs', 'dehydration', 'sepsis', 'febrile seizure', 'appendicitis', 'triage'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['pediatrics', 'emergency medicine', 'family medicine'] },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
