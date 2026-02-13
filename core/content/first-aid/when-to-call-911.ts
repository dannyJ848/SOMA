/**
 * When to Call 911
 *
 * Comprehensive guide to recognizing life-threatening emergencies,
 * communicating effectively with dispatchers, and understanding the
 * emergency medical services system.
 */

import { EducationalContent } from '../types';

export const whenToCall911Content: EducationalContent = {
  id: 'topic-when-to-call-911',
  type: 'topic',
  name: 'When to Call 911',
  nameEs: 'Cuando Llamar al 911',
  alternateNames: ['Emergency Calling', 'EMS Activation', 'When to Call Emergency Services'],

  levels: {
    1: {
      level: 1,
      summary: 'Calling 911 is the most important thing you can do in a serious emergency. Knowing when to call and what to say can save someone\'s life.',
      explanation: `Everyone should know when and how to call 911. It is the phone number that connects you to police, firefighters, and ambulances. In a true emergency, calling 911 is the fastest way to get expert help.

**Think of 911 like a fire alarm in a building.** When you pull it, professional help is on the way. You would not pull it for a small problem, but when there is real danger, you should not hesitate.

**When you SHOULD call 911:**
- Someone is not breathing or having trouble breathing
- Someone is unconscious (will not wake up)
- Someone is having chest pain or thinks they are having a heart attack
- Someone is having signs of a stroke: Face drooping, Arm weakness, Speech difficulty (remember FAST)
- There is heavy bleeding that will not stop with pressure
- Someone has had a serious injury (bad car accident, fall from height, deep wound)
- Someone is choking and you cannot clear the blockage
- Someone is having a severe allergic reaction (swelling of face/throat, cannot breathe)
- Someone has taken poison or too many pills
- Someone is having a seizure for the first time or it lasts more than 5 minutes
- A baby or child is not breathing normally
- There is a fire or the smell of gas
- Someone is drowning
- You witness a crime in progress or a dangerous situation

**When NOT to call 911:**
- For a cold, flu, or stomachache (call your doctor instead)
- For information or directions
- For noise complaints or non-emergency situations (call local police non-emergency number)
- When you are unsure if it is an emergency, it is still better to call than not

**How to call 911 — step by step:**
1. Stay calm and speak clearly
2. Tell the operator your location (address, cross streets, landmarks)
3. Describe what happened and how many people are hurt
4. Answer all the operator's questions
5. Do NOT hang up until the operator tells you to
6. Follow any instructions the operator gives you (they may guide you through CPR or first aid)

**Important facts about 911:**
- You can call 911 from any phone, even without a phone plan
- Most cell phones send your location automatically, but always confirm your address
- If you accidentally call 911, do not hang up — tell them it was a mistake so they do not send emergency responders unnecessarily
- You can text 911 in many areas if you cannot speak safely
- Teach children how and when to call 911

**What happens after you call:**
The 911 operator sends the closest available ambulance, fire truck, or police car. They may stay on the phone with you and give instructions until help arrives. In most areas, an ambulance arrives within 8-12 minutes.`,
      keyTerms: [
        { term: '911', definition: 'The emergency phone number in the United States that connects callers to police, fire, and ambulance services' },
        { term: 'emergency', definition: 'A sudden, serious situation that requires immediate action to prevent death or serious harm' },
        { term: 'dispatcher', definition: 'The trained person who answers 911 calls, gathers information, and sends the right help to your location' },
        { term: 'unconscious', definition: 'When a person is not awake and does not respond to being touched or spoken to' },
        { term: 'FAST', definition: 'A way to remember stroke signs: Face drooping, Arm weakness, Speech difficulty, Time to call 911' },
        { term: 'seizure', definition: 'When a person shakes uncontrollably because of abnormal electrical activity in the brain' },
      ],
      analogies: [
        'Calling 911 is like pulling a fire alarm — it sends professional help immediately when there is real danger.',
        'A 911 dispatcher is like an air traffic controller for emergencies — they coordinate where help goes to get the fastest response.',
        'Knowing when to call 911 is like knowing when to use a fire extinguisher versus when to evacuate — the response should match the danger.',
      ],
      patientCounselingPoints: [
        'When in doubt, call 911 — it is always better to call and not need help than to need help and not call.',
        'Know your address and be ready to give it clearly — this is the most important piece of information for the dispatcher.',
        'Stay on the line — the dispatcher may give you instructions that could save a life.',
        'Teach children as young as 4 years old how to call 911 and when it is appropriate.',
        'Post your home address near the phone so anyone in the house can give it to the 911 operator.',
        'If you have a medical condition, wear a medical alert bracelet so first responders know your needs.',
      ],
    },
    2: {
      level: 2,
      summary: 'Recognizing true emergencies and activating the emergency medical services (EMS) system promptly is a critical skill. Understanding the EMS chain of survival, effective communication with dispatchers, and the role of dispatch-assisted interventions improves outcomes for patients experiencing life-threatening conditions.',
      explanation: `## When to Call 911: A Thorough Guide

### The Emergency Medical Services (EMS) System

The EMS system is a chain of care from the moment an emergency is recognized to definitive treatment at a hospital:

1. **Recognition and access**: Bystander recognizes an emergency and calls 911
2. **Dispatch**: Trained dispatchers send appropriate resources and may provide pre-arrival instructions
3. **First responder care**: Police or fire first responders may arrive before the ambulance
4. **EMS transport**: Paramedics or EMTs provide assessment, stabilization, and transport
5. **Hospital care**: Emergency department and specialty care

### Conditions That Require 911 Activation

**Immediately Life-Threatening (Call 911 Without Delay):**
- Cardiac arrest (unresponsive, not breathing normally)
- Difficulty breathing or respiratory distress
- Chest pain or pressure (possible heart attack)
- Signs of stroke (FAST: Face drooping, Arm weakness, Speech difficulty, Time)
- Uncontrolled bleeding
- Severe allergic reaction (anaphylaxis)
- Altered consciousness or sudden confusion
- Choking with inability to speak or breathe
- Drowning or near-drowning
- Electrocution
- Severe trauma (falls from height, motor vehicle accidents, penetrating injuries)

**Urgent — Call 911 or Transport Quickly:**
- Poisoning or drug overdose
- Seizure lasting more than 5 minutes or first seizure ever
- Sudden severe headache (worst headache of life)
- Signs of meningitis (stiff neck, fever, light sensitivity, rash)
- Sudden loss of vision or hearing
- High fever in an infant under 3 months
- Suicidal statements or behavior

### How 911 Dispatch Works

**Enhanced 911 (E-911):**
- Landline calls automatically transmit the caller's address
- Cell phone calls transmit GPS coordinates (accuracy varies by carrier and location; may be within 50-300 meters)
- VoIP (internet phone) calls may not transmit location — always state your address
- Text-to-911 is available in many areas for situations where speaking is dangerous

**What the Dispatcher Will Ask:**
1. What is the address/location of the emergency?
2. What is happening? (nature of the emergency)
3. How many people are involved/injured?
4. Is the person conscious? Breathing?
5. Your name and callback number

**Dispatch-Assisted CPR and First Aid:**
- Dispatchers are trained to provide over-the-phone instructions for:
  - Hands-only CPR
  - Choking management
  - Bleeding control
  - Childbirth assistance
  - Naloxone administration
- Following these instructions has been shown to significantly improve survival, especially for cardiac arrest

### Common Mistakes When Calling 911

- **Delaying the call**: "I'll wait and see if it gets better" — for the conditions listed above, minutes matter
- **Driving to the hospital instead of calling**: Paramedics bring the emergency room to you and can begin treatment immediately
- **Hanging up too soon**: The dispatcher may have critical instructions or additional questions
- **Not knowing your location**: Cell phones do not always transmit accurate locations; know the address or describe landmarks
- **Not mentioning medications or conditions**: Tell the dispatcher about relevant medical history, allergies, and medications

### When NOT to Call 911

The following are NOT emergencies and should be directed to other resources:
- Non-urgent medical questions (call your doctor or a nurse hotline)
- Prescription refills
- Power outages (call your utility company)
- Animal control issues (call local animal control)
- Noise complaints (call local police non-emergency number)
- Information requests (call 311 in many cities)

### Teaching Children About 911
- Children as young as 4 can learn to call 911
- Teach them their full address and parent names
- Practice what to say in calm, role-play scenarios
- Emphasize that 911 is only for real emergencies, not for practice calls
- Explain that the person who answers will help them and send someone`,
      keyTerms: [
        { term: 'EMS', definition: 'Emergency Medical Services — the system of trained professionals and equipment that responds to medical emergencies, including dispatchers, EMTs, paramedics, and ambulances' },
        { term: 'chain of survival', definition: 'The sequence of critical actions needed to save a life in a cardiac emergency: early recognition, early CPR, early defibrillation, and early advanced care' },
        { term: 'dispatch-assisted CPR', definition: 'Real-time CPR instructions provided over the phone by a 911 dispatcher to a bystander before ambulance arrival, proven to increase cardiac arrest survival rates' },
        { term: 'anaphylaxis', definition: 'A severe, potentially life-threatening allergic reaction involving multiple body systems, requiring immediate epinephrine injection and 911 activation' },
        { term: 'Enhanced 911 (E-911)', definition: 'A system that automatically provides the 911 dispatcher with the caller\'s location information (address for landlines, GPS coordinates for cell phones)' },
        { term: 'first responder', definition: 'The first trained person (often police or fire personnel) to arrive at an emergency scene before the ambulance, capable of providing basic life support' },
      ],
      patientCounselingPoints: [
        'For heart attack and stroke, every minute counts — call 911 immediately rather than driving to the hospital.',
        'Paramedics can start life-saving treatment in the ambulance that you cannot get in a car.',
        'Stay on the line with the dispatcher — they can guide you through CPR or first aid steps.',
        'Know the difference between 911 and the non-emergency police number for your area.',
        'If someone has taken too many pills or ingested a substance, call Poison Control (1-800-222-1222) and/or 911.',
      ],
    },
    3: {
      level: 3,
      summary: 'EMS activation is the critical first link in the chain of survival. Evidence demonstrates that bystander recognition, rapid 911 calls, and dispatch-assisted interventions significantly improve outcomes for time-sensitive conditions including cardiac arrest, stroke, STEMI, and major trauma. Understanding EMS system design, triage protocols, and the evidence base for pre-hospital care informs appropriate decision-making.',
      explanation: `## When to Call 911: Intermediate Analysis

### Evidence for Early EMS Activation

**Cardiac Arrest:**
- Out-of-hospital cardiac arrest (OHCA) survival to discharge: approximately 10% overall
- With bystander CPR: survival doubles to triples
- With bystander CPR + early defibrillation: survival approaches 30-50%
- Each minute of delay in defibrillation reduces survival by 7-10%
- Dispatch-assisted CPR (DA-CPR) improves bystander CPR rates from approximately 30% to over 50%

**Stroke:**
- tPA (alteplase) must be administered within 4.5 hours of symptom onset for ischemic stroke
- Thrombectomy: Extended to 24 hours in selected patients (DAWN and DEFUSE 3 trials), but earlier is always better
- "Time is brain": Approximately 1.9 million neurons die per minute during an untreated ischemic stroke
- Calling 911 rather than driving to the hospital reduces time to treatment by an average of 30 minutes

**STEMI (ST-Elevation Myocardial Infarction):**
- Door-to-balloon time goal: less than 90 minutes
- Pre-hospital 12-lead ECG with cath lab activation reduces treatment time by 15-20 minutes
- EMS can administer aspirin, nitroglycerin, and morphine en route
- Calling 911 rather than self-transport is associated with faster reperfusion

**Major Trauma:**
- The "golden hour" concept: Critically injured patients who reach definitive surgical care within 60 minutes have improved survival
- Pre-hospital trauma care includes hemorrhage control, airway management, cervical spine stabilization, and triage to appropriate trauma centers
- Overtriage (sending less injured patients to trauma centers) is acceptable at 25-35% to ensure undertriage stays below 5%

### EMS System Design and Response

**Tiered Response Systems:**
Most EMS systems use a tiered approach:
- **Basic Life Support (BLS)**: EMTs can perform CPR, use AEDs, control bleeding, splint fractures, administer some medications (epinephrine auto-injector, albuterol, aspirin, naloxone)
- **Advanced Life Support (ALS)**: Paramedics can perform advanced airway management (intubation), IV/IO access, cardiac monitoring, 12-lead ECG interpretation, administer a wide medication formulary, and perform needle decompression

**Medical Priority Dispatch System (MPDS):**
Standardized dispatch protocols that categorize calls by urgency:
- **Alpha**: Non-urgent, no lights and sirens
- **Bravo**: Minor urgency
- **Charlie**: Moderate urgency, ALS response
- **Delta**: Life-threatening, ALS with lights and sirens
- **Echo**: Cardiac/respiratory arrest, maximum response

**Response Time Standards:**
- NFPA 1710 standard: First responder on scene within 4 minutes for 90% of calls; ALS unit within 8 minutes
- Actual median response times vary: Urban 7-8 minutes, suburban 10-12 minutes, rural 15+ minutes
- Response time is a modifiable factor in survival — this is why bystander intervention during the gap is critical

### Dispatch-Assisted Interventions (DAI)

**DA-CPR Evidence:**
- The ARIZONA trial and other studies demonstrate that DA-CPR instructions increase bystander CPR rates from approximately 30% to 50-60%
- Compression-only CPR instructions are now standard for adult cardiac arrest (simplifies instruction, improves compliance)
- Time from 911 call to first compression averages 2-3 minutes with DA-CPR
- Every 1-minute reduction in time to CPR improves survival by approximately 4%

**DA-First Aid:**
Dispatchers increasingly provide instructions for:
- Tourniquet application (post-Stop the Bleed campaign)
- Epinephrine auto-injector use
- Naloxone administration (for suspected opioid overdose)
- Choking management
- Hemorrhage control with direct pressure

### Legal and Ethical Considerations

**Good Samaritan Laws:**
- All 50 US states have Good Samaritan laws protecting bystanders who provide emergency care in good faith
- Protection typically requires: Acting voluntarily, not expecting compensation, acting within the scope of training, not being grossly negligent
- These laws are designed to encourage bystander intervention

**Duty to Act:**
- Laypersons generally have no legal duty to assist (moral duty but not legal obligation)
- Healthcare providers on duty have a duty to act within their scope of practice
- Some states have enacted laws requiring bystanders to at least call for help (varies by jurisdiction)

**Consent:**
- Conscious adults must consent to treatment
- Implied consent: Unconscious patients are presumed to consent to life-saving treatment
- Minors: Parent/guardian consent preferred but implied consent applies in emergencies
- Refusal: A conscious, competent adult has the right to refuse treatment and transport`,
      keyTerms: [
        { term: 'out-of-hospital cardiac arrest (OHCA)', definition: 'A cardiac arrest occurring outside of a hospital setting, with an overall survival rate of approximately 10%, which increases dramatically with bystander CPR and early defibrillation' },
        { term: 'Medical Priority Dispatch System', definition: 'A standardized protocol-based system used by 911 centers to categorize emergency calls by severity (Alpha through Echo) and determine the appropriate level and urgency of response' },
        { term: 'golden hour', definition: 'The concept that critically injured trauma patients who receive definitive surgical care within the first 60 minutes of injury have significantly improved survival outcomes' },
        { term: 'door-to-balloon time', definition: 'The interval from a STEMI patient\'s arrival at the emergency department to inflation of the angioplasty balloon in the cardiac catheterization lab; target is less than 90 minutes' },
        { term: 'implied consent', definition: 'The legal presumption that an unconscious or incapacitated person would consent to life-saving emergency medical treatment if they were able to make the decision' },
        { term: 'undertriage', definition: 'The failure to identify a critically injured patient as requiring a higher level of care (trauma center), associated with increased mortality; the acceptable rate is below 5%' },
      ],
    },
    4: {
      level: 4,
      summary: 'The decision to activate EMS involves nuanced clinical reasoning integrating the pathophysiology of time-sensitive conditions, understanding of the EMS system capabilities and limitations, medicolegal frameworks, and evidence from pre-hospital care research. Advanced concepts include the interplay of bystander intervention, dispatch-assisted care, and system-level optimization of the chain of survival.',
      explanation: `## When to Call 911: Graduate-Level Analysis

### Pathophysiology of Time-Sensitive Emergencies

Understanding why time matters for each condition informs the urgency of EMS activation:

**Cardiac Arrest — Ischemia-Reperfusion Timeline:**
- Cerebral neurons tolerate approximately 4-6 minutes of complete anoxia before irreversible injury
- After 10 minutes without CPR, survival probability approaches zero
- CPR provides 25-30% of normal cardiac output, extending the viability window
- Defibrillation must occur during ventricular fibrillation (the shockable phase, typically lasting 4-10 minutes) for optimal results
- Post-cardiac arrest syndrome: Reperfusion injury after ROSC involves oxidative stress, mitochondrial dysfunction, and systemic inflammatory response

**Stroke — Ischemic Penumbra:**
- Core infarct: Tissue receiving less than 10-12 mL/100g/min blood flow — irreversible injury within minutes
- Ischemic penumbra: Surrounding tissue receiving 12-22 mL/100g/min — functionally impaired but potentially salvageable
- The penumbra is the therapeutic target; it converts to infarct over time (rate depends on collateral circulation)
- CT perfusion and MR diffusion-perfusion mismatch identify salvageable tissue to guide treatment decisions

**STEMI — Myocardial Salvage:**
- Myocardial necrosis begins within 15-30 minutes of coronary occlusion
- Wavefront phenomenon: Necrosis progresses from subendocardium to subepicardium over 4-6 hours
- Time-to-reperfusion directly correlates with infarct size and mortality
- Pre-hospital ECG with cath lab activation saves 15-20 minutes, reducing mortality by approximately 1-2%

**Sepsis — The "Sepsis Hour-1 Bundle":**
- Surviving Sepsis Campaign: Within 1 hour of sepsis recognition — measure lactate, obtain blood cultures, administer broad-spectrum antibiotics, begin fluid resuscitation
- Pre-hospital identification of sepsis using screening tools (qSOFA, PRESEP) enables earlier bundle initiation
- Each hour delay in antibiotic administration increases mortality by approximately 7.6%

### Advanced EMS Capabilities

**Critical Care Transport:**
- Specialty transport teams with expanded scope: Mechanical ventilation, blood product administration, vasopressor infusion, IABP/Impella management
- Interfacility transport of critically ill patients
- Flight (helicopter and fixed-wing) paramedicine

**Community Paramedicine and Mobile Integrated Healthcare:**
- Emerging model where paramedics provide non-emergency care, preventive services, and chronic disease management
- Reduces unnecessary 911 calls and ED visits
- Post-discharge follow-up to reduce hospital readmissions
- Mental health crisis response teams integrated with EMS

**Telemedicine-Enabled EMS:**
- Real-time video consultation between paramedics and emergency physicians
- Remote 12-lead ECG interpretation
- Stroke screening via telemedicine in the field (Mobile Stroke Units with onboard CT)
- Evidence: Mobile Stroke Units reduce time-to-treatment by approximately 20-30 minutes

### System-Level Optimization

**Cardiac Arrest Registries:**
- CARES (Cardiac Arrest Registry to Enhance Survival): National database tracking OHCA outcomes
- Data-driven identification of survival disparities by race, geography, and socioeconomic status
- Benchmarking drives quality improvement

**Disparities in EMS Access and Outcomes:**
- Rural communities: Longer response times, fewer ALS resources, longer transport times to definitive care
- Racial disparities: Black patients are less likely to receive bystander CPR and have lower OHCA survival rates even after adjusting for other factors
- Low-income neighborhoods: Fewer public access AED locations
- Language barriers: Limited English proficiency associated with delays in EMS activation and miscommunication

**Public Access Defibrillation (PAD) Programs:**
- PAD programs place AEDs in high-traffic public locations (airports, schools, gyms, malls)
- AED use by bystanders before EMS arrival increases survival from shockable rhythms to approximately 50-70%
- Drone-delivered AEDs: Research programs in Sweden and other countries demonstrate faster AED delivery than traditional EMS in rural areas
- Smartphone-based AED registries and citizen responder apps (PulsePoint, GoodSAM) alert nearby trained bystanders to cardiac arrests`,
      keyTerms: [
        { term: 'ischemic penumbra', definition: 'The region of brain tissue surrounding the core infarct that receives reduced but not absent blood flow, remaining functionally impaired but potentially salvageable with timely reperfusion' },
        { term: 'wavefront phenomenon', definition: 'The pattern of myocardial necrosis progressing from the subendocardium outward to the subepicardium over 4-6 hours following coronary artery occlusion, forming the basis for time-dependent myocardial salvage' },
        { term: 'Mobile Stroke Unit', definition: 'A specialized ambulance equipped with a CT scanner, laboratory capabilities, and telemedicine links that enables diagnosis and initiation of thrombolytic therapy for stroke in the pre-hospital setting' },
        { term: 'CARES registry', definition: 'Cardiac Arrest Registry to Enhance Survival — a national database in the US that tracks out-of-hospital cardiac arrest processes and outcomes to identify disparities and drive quality improvement' },
        { term: 'community paramedicine', definition: 'An expanded scope model where paramedics provide non-emergency healthcare services including chronic disease management, preventive care, and post-discharge follow-up to reduce unnecessary ED visits' },
        { term: 'qSOFA', definition: 'Quick Sequential Organ Failure Assessment — a bedside screening tool for sepsis using three criteria: altered mental status, systolic blood pressure less than or equal to 100 mmHg, and respiratory rate greater than or equal to 22/min' },
      ],
      clinicalNotes: `Graduate-level clinical considerations:

1. **Pre-hospital stroke routing**: When stroke is suspected, EMS should transport to the nearest comprehensive stroke center (CSC) capable of thrombectomy if transport time is less than 15 minutes longer than to the nearest primary stroke center. The benefit of immediate thrombectomy access outweighs the additional transport time.

2. **Pre-hospital STEMI activation**: Pre-hospital 12-lead ECG with emergency physician interpretation and cath lab activation is the most impactful system intervention for reducing door-to-balloon time. Systems without this capability should prioritize its implementation.

3. **Sepsis screening in EMS**: Pre-hospital sepsis screening tools enable notification of the receiving ED, which has been shown to decrease time-to-antibiotics. However, no pre-hospital sepsis screening tool has adequate sensitivity as a standalone diagnostic.

4. **Bystander CPR disparities**: Low-income and predominantly Black neighborhoods have significantly lower bystander CPR rates. Targeted community CPR training programs in these areas represent an evidence-based strategy to reduce survival disparities.

5. **Drone AED delivery**: Emerging evidence from the AIDRONE and HIKER trials demonstrates that drones can deliver AEDs faster than EMS in rural and semi-urban settings. Early policy frameworks for drone integration into EMS systems are being developed.

6. **Citizen responder apps**: PulsePoint and similar apps activate nearby CPR-trained bystanders simultaneously with EMS dispatch. Implementation is associated with increased bystander CPR rates and is recommended by the AHA.`,
    },
    5: {
      level: 5,
      summary: 'The science of EMS system activation encompasses implementation science for optimizing the chain of survival, advanced pre-hospital resuscitation evidence, health equity frameworks addressing disparities in emergency care access, and emerging technologies including AI-augmented dispatch, drone networks, and precision pre-hospital medicine.',
      explanation: `## When to Call 911: Professional-Level Systems Review

### Implementation Science and the Chain of Survival

**Utstein Template and Standardized Reporting:**
The Utstein template provides a standardized framework for reporting OHCA outcomes:
- EMS-assessed cardiac arrests per 100,000 population
- Bystander witnessed rate
- Bystander CPR rate
- First rhythm analyzed (shockable vs. non-shockable)
- Survival to hospital admission
- Survival to hospital discharge with favorable neurological outcome (CPC 1-2)
- Using standardized metrics enables inter-system benchmarking and identification of best practices

**The "Chain of Survival" vs. "Formula for Survival":**
The traditional Chain of Survival (recognition, CPR, defibrillation, advanced care, post-arrest care) has been supplemented by the Formula for Survival:
- **Medical science** x **Educational efficiency** x **Local implementation** = Survival
- This framework recognizes that evidence-based guidelines are only effective when properly taught and locally implemented
- Implementation science approaches (Plan-Do-Study-Act cycles, stakeholder engagement, audit and feedback) are essential for translating evidence into improved outcomes

### AI-Augmented Emergency Dispatch

**Machine Learning for Cardiac Arrest Recognition:**
- Corti AI and similar systems analyze 911 call audio in real time to detect cardiac arrest
- Sensitivity for cardiac arrest detection: approximately 93-95% (vs. 73% for human dispatchers alone)
- The AI identifies patterns in caller speech, breathing sounds, and descriptions that correlate with cardiac arrest
- Earlier recognition enables earlier dispatch of ALS units and earlier initiation of DA-CPR
- Implementation challenges: Integration with existing CAD (computer-aided dispatch) systems, false-positive management, regulatory approval, and public acceptance

**Predictive Analytics for Resource Deployment:**
- Machine learning models predicting call volume by time, location, and type
- Dynamic ambulance deployment optimizing coverage and response times
- Post-deployment studies in several cities show 1-2 minute reductions in average response time
- Ethical considerations: Algorithmic bias may perpetuate existing geographic and racial disparities in resource allocation

### Precision Pre-Hospital Medicine

**Point-of-Care Diagnostics in EMS:**
- Pre-hospital troponin: Rapid assays may enable early identification of NSTEMI and direct routing to PCI-capable centers
- Pre-hospital lactate: Handheld devices for early sepsis identification
- Pre-hospital coagulation testing: Viscoelastic testing (TEG/ROTEM) in helicopter EMS for trauma
- Genomic-informed EMS: Hypothetical future application where pharmacogenomic profiles guide pre-hospital medication selection

**Blood Product Resuscitation:**
- Pre-hospital whole blood and component therapy for hemorrhagic shock
- The PAMPer trial (2018) demonstrated improved 30-day survival with pre-hospital plasma administration for trauma patients at risk of hemorrhagic shock
- Lyophilized plasma (shelf-stable) eliminates cold chain requirements
- Pre-hospital blood programs expand hemorrhagic shock treatment from the ED to the field

**ECMO in Refractory Cardiac Arrest:**
- Extracorporeal CPR (ECPR): Cannulation for VA-ECMO during ongoing cardiac arrest
- The ARREST trial (2020) showed significantly improved survival to hospital discharge for patients with refractory VF treated with ECPR (43% vs. 7%)
- Implementation requires integration between EMS, ED, and cardiac surgery/interventional teams
- Pre-hospital ECPR programs (Paris, Tokyo) transport patients on mechanical CPR devices to ECPR-capable centers

### Health Equity in Emergency Care Access

**Structural Determinants of EMS Disparities:**
- Geographic: Rural areas have longer response times, fewer ALS units, and longer transport distances to tertiary care
- Socioeconomic: Low-income communities may have fewer public AEDs, lower CPR training rates, and more barriers to accessing 911
- Racial: Studies demonstrate that Black and Hispanic communities receive less bystander CPR, have longer EMS response times, and have lower OHCA survival
- Language: Limited English proficiency associated with delays in EMS activation and increased risk of miscommunication with dispatchers

**Evidence-Based Equity Interventions:**
- Targeted community CPR training: Programs focused on low-income and minority communities increase bystander CPR rates. The HANDDS trial demonstrated that brief training at community events in high-risk neighborhoods significantly increased CPR willingness and skills.
- AED placement optimization: Geographic Information System (GIS) analysis to identify AED deserts and prioritize placement
- Multilingual dispatch: Language line services and multilingual dispatchers reduce communication barriers
- Community health worker integration: Trusted community members providing CPR training and emergency preparedness education

### Emerging Technologies

**Drone AED Networks:**
- Autonomous drone delivery of AEDs to cardiac arrest locations
- AIDRONE study (Sweden): Median drone delivery time was 3 minutes faster than EMS arrival
- Challenges: Airspace regulation, weather limitations, payload capacity, night operations, public acceptance
- Network design: Strategic drone base locations optimized using mathematical modeling to maximize coverage

**Wearable Devices and Predictive Alerting:**
- Smartwatches with fall detection and automatic 911 calling (Apple Watch, Galaxy Watch)
- Continuous cardiac monitoring with arrhythmia detection and alerting
- Future: Pre-symptomatic detection of acute coronary syndrome, stroke, or sepsis using multimodal wearable sensor data
- Privacy and false-alarm management are significant challenges

**Next-Generation 911 (NG911):**
- IP-based 911 infrastructure replacing legacy analog systems
- Capabilities: Video calling, photo/text sharing, precise location from GPS and Wi-Fi
- Real-time language translation
- Integration with IoT devices (smart home sensors, vehicle crash detection)
- Deployment is underway across the US but incomplete as of 2025`,
      keyTerms: [
        { term: 'Utstein template', definition: 'A standardized reporting framework for out-of-hospital cardiac arrest outcomes developed by international consensus, enabling consistent data collection and inter-system benchmarking to identify best practices and improvement opportunities' },
        { term: 'Formula for Survival', definition: 'A framework positing that survival outcomes equal the product of medical science, educational efficiency, and local implementation, recognizing that evidence alone is insufficient without effective teaching and system-level adoption' },
        { term: 'ECPR', definition: 'Extracorporeal Cardiopulmonary Resuscitation — initiation of venoarterial ECMO during refractory cardiac arrest, demonstrated in the ARREST trial to significantly improve survival for refractory ventricular fibrillation' },
        { term: 'PAMPer trial', definition: 'Prehospital Air Medical Plasma trial — a landmark RCT demonstrating improved 30-day survival with pre-hospital thawed plasma administration for trauma patients at risk of hemorrhagic shock compared to standard care' },
        { term: 'Next-Generation 911', definition: 'An IP-based 911 infrastructure replacing legacy analog systems, enabling multimedia communication (video, photos, text), precise caller location, real-time translation, and integration with IoT devices' },
        { term: 'algorithmic bias', definition: 'Systematic errors in AI and machine learning systems that result from biased training data or design assumptions, potentially perpetuating or exacerbating existing disparities in emergency resource allocation and care delivery' },
      ],
      clinicalNotes: `Professional-level systems considerations:

1. **AI-augmented dispatch**: Institutions implementing AI-assisted cardiac arrest recognition should monitor sensitivity and specificity metrics continuously. False positives increase workload; false negatives are potentially fatal. The AI should augment, not replace, trained dispatcher judgment.

2. **ECPR patient selection**: Based on the ARREST trial, ECPR should be considered for patients with witnessed VF/pVT, ongoing high-quality CPR, reversible etiology, and age under 70 (generally). Systems must develop transport protocols and receiving center agreements in advance.

3. **Pre-hospital blood products**: The evidence supporting pre-hospital plasma (PAMPer trial) applies to the air-medical transport setting. Ground EMS adoption requires solving cold-chain logistics or using lyophilized plasma.

4. **Equity-focused interventions**: EMS system leaders should conduct disparity analyses using their own data. GIS mapping of response times, bystander CPR rates, and AED locations by census tract can identify communities most in need of targeted intervention.

5. **Wearable device integration**: As automatic fall detection and 911 calling from wearable devices increases, EMS systems should prepare for higher volumes of auto-generated calls, including false activations.

6. **NG911 transition**: Systems should plan for NG911 capabilities including video triage, multimedia evidence receipt, and enhanced location accuracy. Training for dispatchers to manage video calls in emotionally charged situations will be essential.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'cite-911-1',
      type: 'guideline',
      title: 'Highlights of the 2020 AHA Guidelines for CPR and ECC — Chain of Survival',
      source: 'American Heart Association',
      url: 'https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines',
      accessedDate: '2025-01-15',
    },
    {
      id: 'cite-911-2',
      type: 'guideline',
      title: 'When to Call 911',
      source: 'American Red Cross',
      url: 'https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/when-to-call-911.html',
      accessedDate: '2025-01-15',
    },
    {
      id: 'cite-911-3',
      type: 'guideline',
      title: 'Emergency Medical Services Systems',
      source: 'Centers for Disease Control and Prevention (CDC)',
      url: 'https://www.cdc.gov/niosh/topics/ems/',
      accessedDate: '2025-01-15',
    },
  ],

  crossReferences: [
    {
      targetId: 'topic-cpr-basics-simple',
      targetType: 'topic',
      relationship: 'related',
      label: 'CPR Basics',
    },
    {
      targetId: 'topic-allergic-reaction-response',
      targetType: 'topic',
      relationship: 'see-also',
      label: 'Allergic Reaction Response',
    },
  ],

  tags: {
    systems: ['cardiovascular', 'neurological', 'respiratory'],
    topics: ['emergency-care', 'EMS', 'first-aid', 'public-health'],
    keywords: ['911', 'emergency', 'dispatch', 'EMS', 'chain of survival', 'cardiac arrest', 'stroke', 'STEMI'],
    clinicalRelevance: 'critical',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
